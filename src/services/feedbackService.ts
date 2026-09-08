import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";

export interface FeedbackEntry {
  id?: string;
  category: "suggestion" | "bug" | "medical" | "ui" | "other";
  rating: number; // 1 to 5
  comment: string;
  role: string;
  contextBone?: string;
  contextRegion?: string;
  createdAt: string;
  userAgent?: string;
  screenWidth?: number;
}

export const LOCAL_STORAGE_KEY = "instantclass_feedbacks_cache";
export const GOOGLE_SHEET_URL_KEY = "instantclass_google_sheet_webhook_url";

/**
 * Returns the currently active Google Sheet Webhook URL:
 * Checks localStorage first (admin configured), falls back to Vite env variable.
 */
export function getGoogleSheetUrl(): string {
  try {
    const customUrl = localStorage.getItem(GOOGLE_SHEET_URL_KEY);
    if (customUrl && customUrl.trim()) {
      return customUrl.trim();
    }
  } catch {
    // Ignore localStorage access issues
  }
  return (import.meta.env.VITE_GOOGLE_SHEETS_FEEDBACK_URL || "").trim();
}

/**
 * Saves or clears the Google Sheet Webhook URL in localStorage.
 */
export function setGoogleSheetUrl(url: string): void {
  try {
    if (!url || !url.trim()) {
      localStorage.removeItem(GOOGLE_SHEET_URL_KEY);
    } else {
      localStorage.setItem(GOOGLE_SHEET_URL_KEY, url.trim());
    }
  } catch (err) {
    console.warn("Could not save Google Sheet URL to localStorage:", err);
  }
}

/**
 * Sends a feedback entry to the Google Sheet via Google Apps Script Web App.
 * Uses text/plain and no-cors mode to safely bypass browser CORS restrictions.
 * Equipped with an AbortController timeout so it never hangs the application.
 */
export async function sendToGoogleSheet(
  entry: FeedbackEntry,
  targetUrl?: string
): Promise<boolean> {
  const webhookUrl = (targetUrl || getGoogleSheetUrl()).trim();
  if (!webhookUrl) return false;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 3500);

  try {
    await fetch(webhookUrl, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(entry),
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return true;
  } catch (error) {
    clearTimeout(timeoutId);
    console.warn("Google Sheet webhook transmission notice:", error);
    return false;
  }
}

/**
 * Sends a test ping row to Google Sheet to verify the integration.
 */
export async function testGoogleSheetConnection(targetUrl: string): Promise<boolean> {
  if (!targetUrl || !targetUrl.trim()) return false;
  
  const testPayload: FeedbackEntry = {
    category: "other",
    rating: 5,
    role: "System Admin",
    comment: "InstantClass Connection Test Ping 🚀 (การทดสอบเชื่อมต่อสำเร็จ)",
    contextBone: "System",
    contextRegion: "Test Ping",
    createdAt: new Date().toISOString(),
    userAgent: typeof navigator !== "undefined" ? navigator.userAgent : undefined,
    screenWidth: typeof window !== "undefined" ? window.innerWidth : undefined,
  };

  return await sendToGoogleSheet(testPayload, targetUrl);
}

/**
 * Complete Feedback submission pipeline:
 * 1. Saves to local storage cache immediately (0 delay, zero loss)
 * 2. Transmits to Google Sheet Webhook (with 3.5s timeout)
 * 3. Transmits to Firestore (with 2s timeout so rules/offline never hang the user)
 */
export async function submitFeedback(entry: FeedbackEntry): Promise<{
  savedLocal: boolean;
  sentGoogleSheet: boolean;
  sentFirestore: boolean;
}> {
  const result = {
    savedLocal: false,
    sentGoogleSheet: false,
    sentFirestore: false,
  };

  // 1. Local Storage Cache (Immediate)
  try {
    const existingStr = localStorage.getItem(LOCAL_STORAGE_KEY);
    const list: FeedbackEntry[] = existingStr ? JSON.parse(existingStr) : [];
    list.unshift(entry);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
    result.savedLocal = true;
  } catch (err) {
    console.warn("Local storage save warning:", err);
  }

  // 2. Google Sheets Webhook task
  const sheetUrl = getGoogleSheetUrl();
  const sheetTask = sheetUrl ? sendToGoogleSheet(entry, sheetUrl) : Promise.resolve(false);

  // 3. Firestore task (wrapped with timeout so Firestore queue never blocks UI)
  const firestoreTask = new Promise<boolean>((resolve) => {
    const timer = setTimeout(() => resolve(false), 2000);
    addDoc(collection(db, "feedbacks"), {
      ...entry,
      timestamp: serverTimestamp(),
    })
      .then(() => {
        clearTimeout(timer);
        resolve(true);
      })
      .catch((err) => {
        clearTimeout(timer);
        console.warn("Firestore feedback save note:", err);
        resolve(false);
      });
  });

  // Run network tasks with max wait time of 2.5 seconds total
  try {
    const [sheetSuccess, firestoreSuccess] = await Promise.race([
      Promise.all([sheetTask, firestoreTask]),
      new Promise<[boolean, boolean]>((resolve) => 
        setTimeout(() => resolve([false, false]), 2500)
      )
    ]);
    result.sentGoogleSheet = sheetSuccess;
    result.sentFirestore = firestoreSuccess;
  } catch (err) {
    console.warn("Network submission note:", err);
  }

  return result;
}

/**
 * Google Apps Script Code template ready to copy & paste.
 */
export const GOOGLE_APPS_SCRIPT_CODE = `function doPost(e) {
  var lock = LockService.getScriptLock();
  var hasLock = lock.tryLock(15000);
  if (!hasLock) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: "Server busy" }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheetName = "Feedbacks";
    var sheet = ss.getSheetByName(sheetName);
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
    }

    var headers = [
      "Timestamp (UTC)",
      "Timestamp (Local TH)",
      "Rating (1-5)",
      "Category",
      "Role / Level",
      "Comment",
      "Context Bone",
      "Context Region",
      "User Agent",
      "Screen Width"
    ];

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(headers);
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#0F766E");
      headerRange.setFontColor("#FFFFFF");
      sheet.setFrozenRows(1);
    }

    var payload;
    if (e.postData && e.postData.contents) {
      try {
        payload = JSON.parse(e.postData.contents);
      } catch (parseErr) {
        payload = e.parameter;
      }
    } else {
      payload = e.parameter || {};
    }

    var createdAt = payload.createdAt ? new Date(payload.createdAt) : new Date();
    var thaiTime = Utilities.formatDate(createdAt, "Asia/Bangkok", "yyyy-MM-dd HH:mm:ss");

    var rowData = [
      payload.createdAt || createdAt.toISOString(),
      thaiTime,
      payload.rating || "",
      payload.category || "",
      payload.role || "",
      payload.comment || "",
      payload.contextBone || "",
      payload.contextRegion || "",
      payload.userAgent || "",
      payload.screenWidth || ""
    ];

    sheet.appendRow(rowData);

    for (var i = 1; i <= headers.length; i++) {
      if (i !== 6) {
        sheet.autoResizeColumn(i);
      }
    }

    return ContentService.createTextOutput(JSON.stringify({ status: "success", timestamp: thaiTime }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "online",
    service: "InstantClass Feedback Webhook",
    timestamp: new Date().toISOString()
  })).setMimeType(ContentService.MimeType.JSON);
}`;
