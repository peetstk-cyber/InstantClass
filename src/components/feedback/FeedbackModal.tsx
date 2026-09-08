import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { 
  X, 
  Star, 
  Download, 
  Trash2, 
  Lock,
  KeyRound,
  Check,
  FileSpreadsheet,
  Copy,
  CheckCircle2,
  Send,
  Code2,
  Layers
} from "lucide-react";
import { db } from "../../lib/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import type { Language } from "../../App";
import {
  type FeedbackEntry,
  LOCAL_STORAGE_KEY,
  submitFeedback,
  getGoogleSheetUrl,
  setGoogleSheetUrl,
  testGoogleSheetConnection,
  GOOGLE_APPS_SCRIPT_CODE
} from "../../services/feedbackService";

export type { FeedbackEntry };

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  language: Language;
  currentBoneName?: string;
  currentRegionName?: string;
}

const ADMIN_PIN = "1111"; // Secret PIN for admin unlock

export function FeedbackModal({
  isOpen,
  onClose,
  darkMode,
  language,
  currentBoneName,
  currentRegionName
}: FeedbackModalProps) {
  const [activeTab, setActiveTab] = useState<"form" | "admin">("form");
  const [adminSubTab, setAdminSubTab] = useState<"feedbacks" | "sheets">("feedbacks");
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [category, setCategory] = useState<FeedbackEntry["category"]>("suggestion");
  const [role, setRole] = useState<string>("med_student");
  const [comment, setComment] = useState<string>("");
  
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submitResult, setSubmitResult] = useState<{ sentGoogleSheet?: boolean } | null>(null);

  // Google Sheets Admin State
  const [sheetUrlInput, setSheetUrlInput] = useState<string>("");
  const [sheetSaveStatus, setSheetSaveStatus] = useState<string>("");
  const [isTestingSheet, setIsTestingSheet] = useState<boolean>(false);
  const [testResult, setTestResult] = useState<{ success: boolean; message: string } | null>(null);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);
  const [showCodePreview, setShowCodePreview] = useState<boolean>(false);
  
  // Admin Secure Mode
  const [isAdminUnlocked, setIsAdminUnlocked] = useState<boolean>(false);
  const [showPinModal, setShowPinModal] = useState<boolean>(false);
  const [pinInput, setPinInput] = useState<string>("");
  const [pinError, setPinError] = useState<boolean>(false);
  const secretClickCount = useRef<number>(0);
  const secretTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [adminFeedbacks, setAdminFeedbacks] = useState<FeedbackEntry[]>([]);
  const [isLoadingAdmin, setIsLoadingAdmin] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setSubmitResult(null);
      setActiveTab("form");
      setShowPinModal(false);
      setPinInput("");
      setPinError(false);
      setComment("");
      setTestResult(null);
      setSheetUrlInput(getGoogleSheetUrl());
    }
  }, [isOpen]);

  const categories = [
    { id: "suggestion", label: { en: "Suggestion", th: "ข้อเสนอแนะ" } },
    { id: "bug", label: { en: "Bug Report", th: "แจ้งปัญหา / บั๊ก" } },
    { id: "medical", label: { en: "Medical Content", th: "เนื้อหาทางการแพทย์" } },
    { id: "ui", label: { en: "UI / Display", th: "การแสดงผล / รูปภาพ" } },
    { id: "other", label: { en: "Other", th: "อื่นๆ" } },
  ];

  const roles = [
    { id: "med_student", label: { en: "Medical Student (Year 4-6)", th: "นศพ. ชั้นคลินิก (ปี 4-6)" } },
    { id: "intern", label: { en: "Intern / GP", th: "แพทย์เพิ่มพูนทักษะ (Intern) / GP" } },
    { id: "resident", label: { en: "Ortho Resident", th: "แพทย์ประจำบ้านออร์โธปิดิกส์" } },
    { id: "staff", label: { en: "Staff / Specialist", th: "อาจารย์แพทย์ / แพทย์เฉพาะทาง" } },
    { id: "other", label: { en: "Other", th: "อื่นๆ" } },
  ];

  // Secret 5-Click on modal title to open Admin PIN prompt
  const handleSecretTitleClick = () => {
    secretClickCount.current += 1;
    if (secretClickCount.current >= 5) {
      secretClickCount.current = 0;
      if (secretTimerRef.current) clearTimeout(secretTimerRef.current);
      if (isAdminUnlocked) {
        setActiveTab("admin");
        fetchFeedbacks();
      } else {
        setShowPinModal(true);
      }
      return;
    }

    if (secretTimerRef.current) clearTimeout(secretTimerRef.current);
    secretTimerRef.current = setTimeout(() => {
      secretClickCount.current = 0;
    }, 1500);
  };

  const handleVerifyPin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput.trim() === ADMIN_PIN || pinInput.trim().toLowerCase() === "admin") {
      setIsAdminUnlocked(true);
      setShowPinModal(false);
      setPinInput("");
      setPinError(false);
      setActiveTab("admin");
      fetchFeedbacks();
    } else {
      setPinError(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;

    setIsSubmitting(true);
    const newFeedback: FeedbackEntry = {
      category,
      rating,
      comment: comment.trim(),
      role,
      contextBone: currentBoneName,
      contextRegion: currentRegionName,
      createdAt: new Date().toISOString(),
      userAgent: typeof navigator !== "undefined" ? navigator.userAgent : undefined,
      screenWidth: typeof window !== "undefined" ? window.innerWidth : undefined,
    };

    const res = await submitFeedback(newFeedback);
    setSubmitResult({ sentGoogleSheet: res.sentGoogleSheet });

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleSaveSheetUrl = () => {
    setGoogleSheetUrl(sheetUrlInput);
    setSheetSaveStatus("saved");
    setTimeout(() => setSheetSaveStatus(""), 3000);
  };

  const handleTestConnection = async () => {
    if (!sheetUrlInput.trim()) {
      setTestResult({
        success: false,
        message: language === "en" ? "Please enter a Webhook URL first" : "กรุณาระบุ Webhook URL ก่อนทดสอบ"
      });
      return;
    }
    setIsTestingSheet(true);
    setTestResult(null);
    try {
      const ok = await testGoogleSheetConnection(sheetUrlInput.trim());
      if (ok) {
        setTestResult({
          success: true,
          message: language === "en" ? "Ping sent successfully! Check your Google Sheet." : "ส่ง Ping ทดสอบเรียบร้อย! ตรวจสอบแถวใหม่ใน Google Sheet"
        });
      } else {
        setTestResult({
          success: false,
          message: language === "en" ? "Could not send ping. Check URL." : "ส่งข้อมูลไม่สำเร็จ กรุณาตรวจสอบ URL"
        });
      }
    } catch {
      setTestResult({
        success: false,
        message: language === "en" ? "Error connecting to webhook" : "เกิดข้อผิดพลาดในการเชื่อมต่อ"
      });
    } finally {
      setIsTestingSheet(false);
    }
  };

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(GOOGLE_APPS_SCRIPT_CODE);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  const fetchFeedbacks = async () => {
    setIsLoadingAdmin(true);
    let items: FeedbackEntry[] = [];

    try {
      const q = query(collection(db, "feedbacks"), orderBy("timestamp", "desc"));
      const querySnap = await getDocs(q);
      querySnap.forEach(docSnap => {
        const data = docSnap.data() as FeedbackEntry;
        items.push({ ...data, id: docSnap.id });
      });
    } catch (err) {
      console.warn("Could not fetch from Firestore, checking local cache:", err);
    }

    try {
      const localStr = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (localStr) {
        const localList: FeedbackEntry[] = JSON.parse(localStr);
        const merged = [...items];
        localList.forEach(loc => {
          if (!merged.some(m => m.createdAt === loc.createdAt && m.comment === loc.comment)) {
            merged.push(loc);
          }
        });
        items = merged;
      }
    } catch (err) {
      console.warn("Error reading local feedbacks:", err);
    }

    setAdminFeedbacks(items);
    setIsLoadingAdmin(false);
  };

  const exportAsCSV = () => {
    if (adminFeedbacks.length === 0) return;
    const headers = ["Date", "Rating", "Category", "Role", "Context", "Comment"];
    const rows = adminFeedbacks.map(f => [
      new Date(f.createdAt).toLocaleString(),
      f.rating,
      f.category,
      f.role,
      `"${(f.contextBone || "")} - ${(f.contextRegion || "")}"`,
      `"${(f.comment || "").replace(/"/g, '""').replace(/\n/g, ' ')}"`,
    ]);

    const csvContent = "data:text/csv;charset=utf-8,\uFEFF" + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `feedbacks_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const clearLocalCache = () => {
    if (confirm("Clear local feedback cache?")) {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      fetchFeedbacks();
    }
  };

  if (!isOpen || typeof document === "undefined") return null;

  return createPortal(
    <div 
      className="fixed inset-0 z-[999999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div 
        onClick={e => e.stopPropagation()}
        style={{
          background: darkMode ? "#18202F" : "#FFFFFF",
          borderColor: darkMode ? "#2D3748" : "#E2E8F0",
          color: darkMode ? "#F7FAFC" : "#1A202C",
        }}
        className={`w-full ${activeTab === "admin" ? "max-w-xl" : "max-w-md"} rounded-2xl border shadow-xl overflow-hidden flex flex-col max-h-[90vh] relative transition-all duration-200`}
      >
        {/* Header */}
        <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div>
            <h2 
              onClick={handleSecretTitleClick}
              className="text-base font-bold text-black dark:text-slate-100 cursor-default select-none"
              title=""
            >
              {language === "en" ? "Feedback & Suggestions" : "ส่งข้อเสนอแนะ"}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {language === "en" ? "Help us improve this app" : "แนะนำจุดที่ควรปรับปรุง หรือแจ้งปัญหา"}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-black dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {/* Admin Database View (Locked by PIN) */}
          {activeTab === "admin" && isAdminUnlocked ? (
            <div className="space-y-4">
              {/* Admin Sub-tabs */}
              <div className="flex items-center gap-2 p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
                <button
                  type="button"
                  onClick={() => setAdminSubTab("feedbacks")}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    adminSubTab === "feedbacks"
                      ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs"
                      : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                  }`}
                >
                  <Layers size={13} />
                  <span>Feedbacks ({adminFeedbacks.length})</span>
                </button>
                <button
                  type="button"
                  onClick={() => setAdminSubTab("sheets")}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    adminSubTab === "sheets"
                      ? "bg-white dark:bg-slate-700 text-teal-700 dark:text-teal-300 shadow-xs"
                      : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                  }`}
                >
                  <FileSpreadsheet size={13} />
                  <span>Google Sheets</span>
                  {getGoogleSheetUrl() && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
                  )}
                </button>
              </div>

              {/* Subtab 1: Feedback List */}
              {adminSubTab === "feedbacks" && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800">
                    <div className="text-xs font-bold text-slate-700 dark:text-slate-200">
                      Feedback Entries
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={exportAsCSV}
                        disabled={adminFeedbacks.length === 0}
                        className="flex items-center gap-1 px-2.5 py-1 rounded text-xs font-bold bg-slate-800 dark:bg-slate-700 text-white hover:bg-black transition-colors disabled:opacity-40 cursor-pointer"
                      >
                        <Download size={12} />
                        <span>Download CSV</span>
                      </button>
                      <button
                        onClick={clearLocalCache}
                        title="Clear local cache"
                        className="p-1 rounded text-slate-400 hover:text-red-500 transition-colors cursor-pointer"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </div>

                  {isLoadingAdmin ? (
                    <div className="py-8 text-center text-xs text-slate-400">Loading...</div>
                  ) : adminFeedbacks.length === 0 ? (
                    <div className="py-8 text-center text-xs text-slate-400">No feedbacks yet</div>
                  ) : (
                    <div className="space-y-2 max-h-[48vh] overflow-y-auto pr-1">
                      {adminFeedbacks.map((item, idx) => (
                        <div 
                          key={item.id || idx}
                          style={{
                            background: darkMode ? "rgba(255,255,255,0.03)" : "#F8FAFC",
                            borderColor: darkMode ? "#2D3748" : "#E2E8F0",
                          }}
                          className="p-3 rounded-lg border space-y-1 text-left text-xs"
                        >
                          <div className="flex items-center justify-between text-[11px] text-slate-500">
                            <span>{item.rating} ★ • {item.category} • {item.role}</span>
                            <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                          </div>
                          <p className="font-medium text-black dark:text-slate-200 whitespace-pre-wrap">
                            {item.comment}
                          </p>
                          {item.contextBone && (
                            <div className="text-[10px] text-slate-400">
                              {item.contextBone} {item.contextRegion ? `> ${item.contextRegion}` : ""}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Subtab 2: Google Sheets Integration */}
              {adminSubTab === "sheets" && (
                <div className="space-y-3.5 text-left text-xs">
                  {/* Status Banner */}
                  <div 
                    className={`p-3 rounded-xl border flex items-start gap-2.5 ${
                      getGoogleSheetUrl() 
                        ? "bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200" 
                        : "bg-amber-50/70 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200"
                    }`}
                  >
                    <FileSpreadsheet className={`mt-0.5 shrink-0 ${getGoogleSheetUrl() ? "text-emerald-600" : "text-amber-600"}`} size={16} />
                    <div className="flex-1">
                      <div className="font-bold">
                        {getGoogleSheetUrl() ? "Google Sheets Webhook Connected" : "Google Sheets Not Configured"}
                      </div>
                      <div className="text-[11px] opacity-80 mt-0.5">
                        {getGoogleSheetUrl() 
                          ? "ทุกข้อเสนอแนะใหม่จะถูกบันทึกลงแถวใน Google Sheet โดยอัตโนมัติ"
                          : "ข้อเสนอแนะจะถูกบันทึกไว้ในเบราว์เซอร์และ Cloud เท่านั้นจนกว่าจะตั้งค่า Webhook"}
                      </div>
                    </div>
                  </div>

                  {/* URL Configuration Input */}
                  <div className="space-y-1.5">
                    <label className="block font-bold text-slate-700 dark:text-slate-200">
                      Google Apps Script Webhook URL:
                    </label>
                    <div className="flex gap-1.5">
                      <input
                        type="url"
                        placeholder="https://script.google.com/macros/s/.../exec"
                        value={sheetUrlInput}
                        onChange={(e) => {
                          setSheetUrlInput(e.target.value);
                          setSheetSaveStatus("");
                        }}
                        style={{
                          background: darkMode ? "#121722" : "#FFFFFF",
                          borderColor: darkMode ? "#374151" : "#D1D5DB",
                          color: darkMode ? "#F3F4F6" : "#111827",
                        }}
                        className="flex-1 px-3 py-1.5 rounded-lg border text-xs font-mono outline-none focus:border-teal-600 transition-colors"
                      />
                      <button
                        type="button"
                        onClick={handleSaveSheetUrl}
                        className="px-3 py-1.5 rounded-lg text-xs font-bold bg-teal-800 hover:bg-teal-900 text-white transition-colors cursor-pointer shrink-0"
                      >
                        {sheetSaveStatus === "saved" ? "Saved ✓" : "Save"}
                      </button>
                      <button
                        type="button"
                        onClick={handleTestConnection}
                        disabled={isTestingSheet || !sheetUrlInput.trim()}
                        className="px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-800 dark:bg-slate-700 hover:bg-black text-white transition-colors cursor-pointer shrink-0 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1"
                      >
                        <Send size={11} />
                        <span>{isTestingSheet ? "Testing..." : "Test Ping"}</span>
                      </button>
                    </div>
                    {testResult && (
                      <div className={`p-2 rounded-lg text-[11px] font-medium mt-1.5 ${
                        testResult.success 
                          ? "bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300" 
                          : "bg-red-100 dark:bg-red-950 text-red-800 dark:text-red-300"
                      }`}>
                        {testResult.message}
                      </div>
                    )}
                  </div>

                  {/* 1-Click Code Copy Box */}
                  <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
                        <Code2 size={14} className="text-teal-600" />
                        <span>Google Apps Script Code</span>
                      </div>
                      <button
                        type="button"
                        onClick={handleCopyCode}
                        className="flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold bg-teal-700 hover:bg-teal-800 text-white transition-colors cursor-pointer"
                      >
                        {copiedCode ? <CheckCircle2 size={12} /> : <Copy size={12} />}
                        <span>{copiedCode ? "Copied to Clipboard!" : "Copy Code"}</span>
                      </button>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      คัดลอกโค้ดนี้ไปวางใน <b>Extensions &gt; Apps Script</b> ของ Google Sheet ที่ต้องการเก็บข้อมูล
                    </p>

                    <button
                      type="button"
                      onClick={() => setShowCodePreview(!showCodePreview)}
                      className="text-[11px] text-teal-600 hover:underline cursor-pointer block"
                    >
                      {showCodePreview ? "Hide Script Preview ▲" : "Show Script Preview ▼"}
                    </button>

                    {showCodePreview && (
                      <pre className="p-2.5 rounded-lg bg-slate-900 text-emerald-400 text-[10px] font-mono max-h-40 overflow-y-auto leading-relaxed whitespace-pre">
                        {GOOGLE_APPS_SCRIPT_CODE}
                      </pre>
                    )}
                  </div>

                  {/* 3-Step Setup Guide */}
                  <div className="space-y-1.5 pt-1">
                    <div className="font-bold text-[11px] text-slate-700 dark:text-slate-300">
                      📋 วิธีติดตั้งใน 3 ขั้นตอน (3-Minute Setup):
                    </div>
                    <ol className="space-y-1 text-[11px] text-slate-600 dark:text-slate-400 list-decimal pl-4 leading-relaxed">
                      <li>เปิด Google Sheet &rarr; ไปที่ <b>Extensions (ส่วนขยาย) &gt; Apps Script</b></li>
                      <li>กดปุ่ม <b>Copy Code</b> ด้านบน แล้วนำไปวางแทนที่โค้ดเดิม &rarr; กดบันทึก (Save)</li>
                      <li>กดปุ่ม <b>Deploy &gt; New deployment</b> &rarr; เลือก Web app &rarr; ตั้งค่า <b>Who has access: Anyone</b> &rarr; กด Deploy แล้วนำ URL ที่ได้มาวางในช่องด้านบน</li>
                    </ol>
                  </div>
                </div>
              )}

              <button
                type="button"
                onClick={() => setActiveTab("form")}
                className="w-full py-2 rounded-lg text-xs font-medium border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Back to Feedback Form
              </button>
            </div>
          ) : isSubmitted ? (
            /* Success State */
            <div className="py-6 text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400 flex items-center justify-center mx-auto">
                <Check size={20} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-black dark:text-slate-100">
                  {language === "en" ? "Feedback Received" : "ส่งข้อเสนอแนะเรียบร้อยแล้ว"}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xs mx-auto">
                  {language === "en" 
                    ? "Thank you for helping us improve this tool." 
                    : "ขอบคุณสำหรับข้อเสนอแนะ จะนำไปปรับปรุงระบบต่อไปครับ"}
                </p>
                {submitResult?.sentGoogleSheet && (
                  <div className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-[11px] font-semibold">
                    <CheckCircle2 size={13} className="text-emerald-600" />
                    <span>{language === "en" ? "Synced to Google Sheet" : "บันทึกลง Google Sheet แล้ว"}</span>
                  </div>
                )}
              </div>
              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="px-5 py-2 rounded-lg text-xs font-bold bg-teal-800 text-white hover:bg-teal-900 transition-colors cursor-pointer"
                >
                  {language === "en" ? "Close" : "ปิด"}
                </button>
              </div>
            </div>
          ) : (
            /* Simple, Grounded Human-Made Form */
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              {/* 1. Rating */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {language === "en" ? "Rating" : "ความพึงพอใจ"}
                </label>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setRating(star)}
                      className="p-1 cursor-pointer"
                    >
                      <Star
                        size={22}
                        className={
                          (hoverRating || rating) >= star
                            ? "fill-amber-400 text-amber-400"
                            : "text-slate-300 dark:text-slate-600"
                        }
                      />
                    </button>
                  ))}
                  <span className="text-xs text-slate-500 ml-2">
                    {rating} / 5
                  </span>
                </div>
              </div>

              {/* 2. Category */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {language === "en" ? "Category" : "หัวข้อ"}
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as FeedbackEntry["category"])}
                  style={{
                    background: darkMode ? "#121722" : "#FFFFFF",
                    borderColor: darkMode ? "#374151" : "#D1D5DB",
                    color: darkMode ? "#F3F4F6" : "#111827",
                  }}
                  className="w-full px-3 py-2 rounded-lg border text-xs outline-none focus:border-teal-700 transition-colors cursor-pointer"
                >
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.label[language]}
                    </option>
                  ))}
                </select>
              </div>

              {/* 3. Role */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {language === "en" ? "Your Level" : "ระดับชั้น"}
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  style={{
                    background: darkMode ? "#121722" : "#FFFFFF",
                    borderColor: darkMode ? "#374151" : "#D1D5DB",
                    color: darkMode ? "#F3F4F6" : "#111827",
                  }}
                  className="w-full px-3 py-2 rounded-lg border text-xs outline-none focus:border-teal-700 transition-colors cursor-pointer"
                >
                  {roles.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.label[language]}
                    </option>
                  ))}
                </select>
              </div>

              {/* 4. Comment */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {language === "en" ? "Comment / Suggestion *" : "ความคิดเห็นหรือข้อเสนอแนะ *"}
                </label>
                <textarea
                  required
                  rows={4}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder={language === "en" 
                    ? "Write your comments, suggestions, or bug reports here..." 
                    : "พิมพ์ข้อเสนอแนะ จุดที่อยากให้แก้ หรือระบบจำแนกที่อยากให้เพิ่ม..."}
                  style={{
                    background: darkMode ? "#121722" : "#FFFFFF",
                    borderColor: darkMode ? "#374151" : "#D1D5DB",
                    color: darkMode ? "#F3F4F6" : "#111827",
                  }}
                  className="w-full p-2.5 rounded-lg border text-xs outline-none focus:border-teal-700 transition-colors resize-none leading-relaxed"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || !comment.trim()}
                style={{
                  background: darkMode ? "#0F766E" : "#0F766E",
                }}
                className="w-full py-2.5 rounded-lg text-white font-bold text-xs hover:opacity-90 active:scale-98 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {isSubmitting 
                  ? (language === "en" ? "Submitting..." : "กำลังส่ง...") 
                  : (language === "en" ? "Submit Feedback" : "ส่งข้อเสนอแนะ")}
              </button>
            </form>
          )}
        </div>

        {/* PIN Modal for Admin Unlock */}
        {showPinModal && (
          <div className="absolute inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
            <div 
              style={{
                background: darkMode ? "#1E293B" : "#FFFFFF",
                borderColor: darkMode ? "#334155" : "#E2E8F0",
              }}
              className="w-full max-w-xs rounded-xl border p-4 shadow-xl space-y-3 text-center"
            >
              <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center mx-auto">
                <Lock size={15} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-black dark:text-slate-100">
                  Admin Passcode
                </h4>
              </div>

              <form onSubmit={handleVerifyPin} className="space-y-2.5">
                <div className="relative">
                  <KeyRound size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="password"
                    autoFocus
                    maxLength={10}
                    value={pinInput}
                    onChange={(e) => {
                      setPinInput(e.target.value);
                      setPinError(false);
                    }}
                    placeholder="••••••••"
                    style={{
                      background: darkMode ? "#0F172A" : "#F8FAFC",
                      borderColor: pinError ? "#EF4444" : (darkMode ? "#334155" : "#D1D5DB"),
                      color: darkMode ? "#F8FAFC" : "#000000",
                    }}
                    className="w-full pl-8 pr-3 py-1.5 rounded-lg border text-center text-xs font-bold outline-none"
                  />
                </div>
                {pinError && (
                  <p className="text-[10px] text-red-500 font-medium">
                    Incorrect code
                  </p>
                )}
                <div className="flex gap-1.5 pt-1">
                  <button
                    type="button"
                    onClick={() => setShowPinModal(false)}
                    className="flex-1 py-1.5 rounded-lg text-xs border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-1.5 rounded-lg text-xs font-bold bg-slate-800 dark:bg-slate-700 text-white hover:bg-black transition-colors cursor-pointer"
                  >
                    Unlock
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
