/* eslint-disable */
/**
 * InstantClass - Google Apps Script for Feedback Collection
 * =========================================================
 * สคริปต์สำหรับผูกกับ Google Sheets เพื่อรับข้อมูล Feedback จากเว็บ InstantClass
 * 
 * วิธีติดตั้ง (Setup Instructions):
 * 1. เปิด Google Sheet ใหม่ (เช่น ตั้งชื่อว่า "InstantClass - Feedbacks")
 * 2. ไปที่เมนู Extensions (ส่วนขยาย) > Apps Script
 * 3. ลบโค้ดเดิมทั้งหมดออก แล้วคัดลอกโค้ดนี้ไปวางแทนที่
 * 4. กด Save (ไอคอนรูปแผ่นดิสก์ หรือ Ctrl+S / Cmd+S)
 * 5. กดปุ่ม "Deploy" (การทำให้ใช้งานได้) สีน้ำเงินมุมขวาบน > เลือก "New deployment" (การทำให้ใช้งานได้รายการใหม่)
 * 6. กดที่รูปฟันเฟืองข้าง "Select type" > เลือก "Web app" (เว็บแอป)
 * 7. ตั้งค่าดังนี้:
 *    - Description: "Feedback Webhook"
 *    - Execute as: "Me (อีเมลของคุณ)"
 *    - Who has access: "Anyone" (ทุกคน - สำคัญมาก เพื่อให้เว็บส่งข้อมูลเข้ามาได้โดยไม่ต้องล็อกอิน Google)
 * 8. กด "Deploy" > ถ้ามีหน้าต่างถามสิทธิ์ ให้กด "Authorize access" > เลือกบัญชี Google > กด Advanced > กด "Go to ... (unsafe)" > กด Allow
 * 9. คัดลอก "Web app URL" (ที่ลงท้ายด้วย /exec)
 * 10. นำ URL ไปใส่ใน .env ตัวแปร `VITE_GOOGLE_SHEETS_FEEDBACK_URL` หรือใส่ในหน้า Admin > Google Sheets ของเว็บ InstantClass
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  // รอสูงสุด 15 วินาทีเพื่อป้องกัน race condition ในกรณีที่มีการส่งข้อมูลเข้ามาพร้อมกัน
  var hasLock = lock.tryLock(15000);
  
  if (!hasLock) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: "Server busy, could not obtain lock"
    })).setMimeType(ContentService.MimeType.JSON);
  }

  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheetName = "Feedbacks";
    var sheet = ss.getSheetByName(sheetName);

    // ถ้ายังไม่มี Sheet ชื่อ Feedbacks ให้สร้างใหม่
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
    }

    // กำหนดหัวตาราง (Headers)
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

    // ถ้าเป็นแถวแรกที่ยังว่าง ให้ใส่ Header และจัดสไตล์
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(headers);
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#0F766E"); // สีเขียว Teal ให้เข้ากับธีม InstantClass
      headerRange.setFontColor("#FFFFFF");
      sheet.setFrozenRows(1);
    }

    // อ่านข้อมูลที่ส่งมา
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
    
    // แปลงเวลาท้องถิ่นไทย
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

    // ปรับความกว้างของคอลัมน์อัตโนมัติเบื้องต้น
    for (var i = 1; i <= headers.length; i++) {
      if (i !== 6) { // เว้นคอลัมน์ Comment ไม่ต้อง auto resize ให้ยาวเกินไป
        sheet.autoResizeColumn(i);
      }
    }

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Feedback recorded successfully",
      timestamp: thaiTime
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

// รองรับ GET เพื่อตรวจสอบสถานะ Webhook (Ping Test)
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "online",
    service: "InstantClass Feedback Webhook",
    timestamp: new Date().toISOString()
  })).setMimeType(ContentService.MimeType.JSON);
}
