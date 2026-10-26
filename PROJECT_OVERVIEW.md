# รายงานสรุปภาพรวมโปรเจกต์ InstantClass (Fracture Classification Hub)

---

## 1. บทนำและเป้าหมายของระบบ (Project Overview)
**InstantClass** เป็นเว็บแอปพลิเคชันเชิงการแพทย์ (Interactive Web Application) ที่ถูกออกแบบมาเพื่อเป็น **ศูนย์รวมข้อมูลการจำแนกประเภทกระดูกหัก (Orthopedic Fracture Classification Hub)** สำหรับแพทย์ประจำบ้าน (Residents), ศัลยแพทย์ออร์โธปิดิกส์, นักศึกษาแพทย์ และบุคลากรทางการแพทย์ โดยมุ่งเน้นการเปลี่ยนตำรากระดูกหักที่ซับซ้อนให้กลายเป็นเครื่องมืออ้างอิงที่เข้าถึงได้รวดเร็ว เข้าใจง่าย และมีปฏิสัมพันธ์เชิงโต้ตอบ (Interactive) บนทุกอุปกรณ์ ทั้งคอมพิวเตอร์ แท็บเล็ต และสมาร์ทโฟน

---

## 2. ฟังก์ชันและฟีเจอร์หลักของระบบ (Core Features)

### 2.1 แผนผังโครงกระดูกแบบโต้ตอบ (Interactive 2D Skeleton Map)
* **การนำทางด้วยการสัมผัส/คลิก:** ผู้ใช้งานสามารถคลิกเลือกชิ้นกระดูกที่ต้องการศึกษาได้โดยตรงจากโมเดลโครงกระดูกร่างกาย (Interactive SVG)
* **การจัดกลุ่มตามสรีรวิทยา:** แบ่งโครงกระดูกออกเป็น 4 โซนหลัก ได้แก่
  1. กะโหลกศีรษะและใบหน้า (Skull & Maxillofacial)
  2. รยางค์ส่วนบนและกระดูกหัวไหล่ (Upper Extremity)
  3. รยางค์ส่วนล่างและกระดูกเชิงกราน (Lower Extremity)
  4. กระดูกสันหลัง (Spine Trauma)

---

### 2.2 คลังข้อมูลการจำแนกกระดูกหัก (Fracture Classification Hub)
เมื่อผู้ใช้เลือกชิ้นกระดูกและตำแหน่งที่สนใจ (Anatomical Region) ระบบจะนำเสนอข้อมูลแบบเจาะลึกผ่าน 2 แท็บหลัก:

1. **Classifications Tab (ระบบจำแนกประเภทกระดูกหัก):**
   * รวบรวมระบบการจำแนกที่เป็นมาตรฐานสากลและใช้จริงในทางคลินิก
   * อธิบายแยกตามประเภท (Type/Subtype) กลไกการเกิดพยาธิสภาพ (Injury Mechanism) และแนวทางการรักษา
   * แสดงภาพวาดประกอบเชิงกายวิภาค (Illustration) ควบคู่กับภาพถ่ายรังสีจริงทางคลินิก (Real Clinical Radiographs)
2. **Investigation / X-Ray Tab (แนวทางการส่งตรวจและแปลผลภาพรังสี):**
   * รวมท่าเอกซเรย์มาตรฐานและท่าพิเศษ (Standard & Special Radiographic Views) ที่จำเป็นต้องส่งตรวจในกระดูกแต่ละชิ้น
   * ระบุจุดสำคัญที่ต้องประเมิน (What to look for) และค่ามุมหรือความสัมพันธ์ทางกายวิภาคที่ผิดปกติ

---

### 2.3 โมเดลจำลองกระดูก 3 มิติ (Interactive 3D Bone Viewer)
* ประมวลผลโมเดลกระดูกสามมิติผ่าน WebGL / Three.js
* ผู้ใช้สามารถหมุน (Rotate), ซูม (Zoom), และเลื่อนดูตำแหน่งกระดูกแบบรอบทิศทาง
* ช่วยให้เข้าใจมิติของแนวรอยหักและแรงดึงของกล้ามเนื้อที่ทำให้ชิ้นกระดูกเคลื่อนที่ออกจากกันได้สมจริงกว่าภาพ 2 มิติ

---

### 2.4 สรุปแนวคิดทางกายวิภาคเชิงคลินิก (Region Concept Panel)
* เมื่อเลือกส่วนของกระดูก แถบด้านข้างจะแสดงสรุปข้อควรรู้สำคัญ (Anatomical & Biomechanical Pearls)
* รวบรวมค่าปกติทางรังสีวิทยา (Normal Radiographic Parameters) เช่น มุม วัดระยะห่าง และเกณฑ์สำคัญในการตัดสินใจผ่าตัด

---

### 2.5 เครื่องคำนวณคะแนนทางคลินิก (Clinical Score Calculators)
* มีเครื่องมือคำนวณคะแนนสำหรับเคสฉุกเฉิน เช่น **Spine Trauma Score Calculator (TLICS)**
* ช่วยให้แพทย์สามารถเลือกตัวแปรทางคลินิก (Morphology, Neurological Status, PLC Integrity) แล้วระบบจะคำนวณคะแนนพร้อมแปลผลคำแนะนำการรักษาให้ทันที

---

### 2.6 ระบบค้นหาอัจฉริยะ (Smart Search & Eponyms)
* ช่องค้นหาที่รองรับการพิมพ์ทั้ง:
  * ชื่อกระดูก (เช่น Femur, Radius, Humerus)
  * ชื่อระบบ Classification (เช่น Garden, Pauwels, Schatzker, Neer)
  * ชื่อเฉพาะทางการแพทย์ (Clinical Eponyms เช่น Colles, Smith, Monteggia, Galeazzi, Bennett) เพื่อพาไปยังตำแหน่งกระดูกที่เกี่ยวข้องได้ทันที

---

### 2.7 โหมดทดสอบความรู้ทางคลินิก (Daily Quiz & Film Spot Diagnosis)
* **High-Yield Quiz:** คำถามทบทวนความรู้และสถานการณ์จำลองทางคลินิกพร้อมเฉลยและเหตุผล
* **Trauma Film Spot Diagnosis:** โหมดฝึกแปลผลฟิล์มเอกซเรย์เคสอุบัติเหตุฉุกเฉิน ช่วยฝึกทักษะการวินิจฉัยรอยหักและการจำแนกประเภท

---

### 2.8 ระบบบันทึกและจัดการข้อมูลผู้ใช้ (Bookmarks & Account)
* ผู้ใช้สามารถกดบันทึก (Bookmark) ระบบ Classification หรือหัวข้อที่ใช้งานบ่อย เพื่อเปิดดูได้อย่างรวดเร็วในห้องผ่าตัดหรือห้องตรวจ
* รองรับระบบล็อกอินผู้ใช้งานเพื่อบันทึกข้อมูลส่วนบุคคล

---

## 3. ประสบการณ์ผู้ใช้งานและการออกแบบ (User Experience & UI Design)
* **รองรับ 2 ภาษา (Bilingual Support):** สลับระหว่างภาษาอังกฤษและภาษาไทยได้ตลอดเวลา
* **Dark Mode & Light Mode:** รองรับทั้งโหมดสว่างสำหรับห้องตรวจ และโหมดมืด (Dark Mode) สำหรับการดูภาพฟิล์มเอกซเรย์
* **Responsive & PWA Ready:** 
  * ออกแบบอินเทอร์เฟซให้ยืดหยุ่นตามหน้าจอ (Desktop, iPad/Tablet, Mobile)
  * รองรับการเปิดแบบ Fullscreen และการติดตั้งเป็น Web App ลงบนหน้าจอหลักของโทรศัพท์มือถือ (Add to Home Screen)

---

## 4. โครงสร้างเทคโนโลยีที่ใช้ในการพัฒนา (Technology Stack)
* **Frontend Framework:** React 19 + TypeScript
* **Build Tool:** Vite
* **Styling & Animation:** Tailwind CSS v4, Framer Motion
* **3D Graphics & Visuals:** Three.js (สำหรับ 3D Bone Viewer) และ SVG Canvas (สำหรับ 2D Interactive Skeleton)
* **Icons:** Lucide React
* **Backend & Authentication:** Firebase (Auth, Firestore, Feedback Service) และ LocalStorage
