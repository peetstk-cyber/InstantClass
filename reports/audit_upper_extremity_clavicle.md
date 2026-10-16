# Audit: Upper Extremities (Phase 1: Clavicle & AC Joint)
**เป้าหมายการตรวจ**: `src/data/bones/clavicle.ts` (Rockwood AC Joint, Allman Clavicle, Neer Distal Clavicle)
**ตำราอ้างอิง**:
- Campbell's Operative Orthopaedics 14th ed. (2020)
- Rockwood & Green's Fractures in Adults 10th ed. (2025)

**สถานะ**: **รอรีวิว** (ยังไม่ได้แก้ไฟล์เนื้อหาตามกฎ Hard Rules ข้อ 1) | หน้า = หน้า PDF | ข้อความบนเว็บคัดลอกจากไฟล์ข้อมูลจริง และ 'ประเด็นที่ตรวจ' เป็น literal substring ของข้อความนั้น

---

## สรุปภาพรวมผลการตรวจ (Summary)
- **จำนวนประเด็นที่ตรวจทั้งหมด**: 10 รายการ
- **ผลตรวจ**:
  - ตรง (Consistent): 9 รายการ
  - ต่างกันตามฉบับ / Attribution: 1 รายการ (Neer Types I-V vs Craig modification)
  - ขัดแย้ง (Conflict): 0 รายการ
  - หลักฐานไม่พอ: 0 รายการ
- **ระดับความเสี่ยง**:
  - สูง (High): 8 รายการ
  - กลาง (Medium): 2 รายการ

---

## ตารางผลการตรวจ (Audit Findings Table)

| ID | ตำแหน่งบนเว็บ | ไฟล์:บรรทัด | ข้อความบนเว็บ (ฉบับเต็ม) | ประเด็นที่ตรวจ | ความเสี่ยง | ผลตรวจ | หลักฐานจากตำรา (Verbatim Quote) | ตำแหน่งอ้างอิง | สิ่งที่ควรแก้ | สถานะ |
|---|---|---|---|---|---|---|---|---|---|---|
| clavicle-001 | AC Joint > การจัดจำแนก > Rockwood > ข้อบ่งชี้/เกณฑ์ตัดสินใจ (The Rules) | clavicle.ts:111 | Type I: AC sprain, CC intact, normal radiograph. | Type I: AC sprain, CC intact, normal radiograph | สูง | ตรง | "A mild force to the point of the shoulder produces a minor strain to the fibers of the AC ligaments" | Rockwood 10th (2025), PDF p.1102 | - | รอรีวิว |
| clavicle-002 | AC Joint > การจัดจำแนก > Rockwood > ข้อบ่งชี้/เกณฑ์ตัดสินใจ (The Rules) | clavicle.ts:115 | Type II: AC torn, CC sprained, distal clavicle elevated < 25%. | distal clavicle elevated < 25% | สูง | ตรง | "There may be a slight, relative upward displacement of the distal end of the clavicle secondary to stretching of the coracoclavicular ligaments" | Rockwood 10th (2025), PDF p.1102 | ตรงโดยอนุมาน (Rockwood ระบุ Type III เริ่มที่ CC space กว้างขึ้น 25-100% จึงถือว่า Type II คือ < 25% ส่วน Campbell p.3626 ระบุว่ายกสูงไม่เกินความหนาของกระดูกไหปลาร้า) | รอรีวิว |
| clavicle-003 | AC Joint > การจัดจำแนก > Rockwood > ข้อบ่งชี้/เกณฑ์ตัดสินใจ (The Rules) | clavicle.ts:119 | Type III: AC & CC torn, distal clavicle elevated 25% - 100%. | distal clavicle elevated 25% - 100% | สูง | ตรง | "Radiographic findings include a 25–100% increase in the coracoclavicular space in comparison to the normal shoulder" | Rockwood 10th (2025), PDF p.1102 | - | รอรีวิว |
| clavicle-004 | AC Joint > การจัดจำแนก > Rockwood > ข้อบ่งชี้/เกณฑ์ตัดสินใจ (The Rules) | clavicle.ts:123 | Type IV: Posterior displacement into or through trapezius muscle. | Posterior displacement into or through trapezius muscle | สูง | ตรง | "The clavicle is posteriorly displaced into or through the trapezius muscle" | Rockwood 10th (2025), PDF p.1102 | - | รอรีวิว |
| clavicle-005 | AC Joint > การจัดจำแนก > Rockwood > ข้อบ่งชี้/เกณฑ์ตัดสินใจ (The Rules) | clavicle.ts:127 | Type V: Severe superior displacement > 100% to 300% with deltotrapezial fascia detachment. | Severe superior displacement > 100% to 300% with deltotrapezial fascia detachment | สูง | ตรง | "Te acromioclavicular joint is displaced 100% to 300%, and a gross separation between the clavicle and the acromion is present." | Campbell 14th (2020), PDF p.3627 | ตรง Campbell p.3627 ระบุ 100% to 300%; Rockwood p.1103 ระบุ > 100% ร่วมกับ deltotrapezial muscle attachments หลุดลอก | รอรีวิว |
| clavicle-006 | AC Joint > การจัดจำแนก > Rockwood > ข้อบ่งชี้/เกณฑ์ตัดสินใจ (The Rules) | clavicle.ts:131 | Type VI: Inferior displacement subacromial or subcoracoid. | Inferior displacement subacromial or subcoracoid | สูง | ตรง | "The distal clavicle occupies either a subacromial or a subcoracoid location" | Rockwood 10th (2025), PDF p.1103 | - | รอรีวิว |
| clavicle-007 | AC Joint > การจัดจำแนก > Rockwood > การส่งตรวจทางรังสี (Investigations) | clavicle.ts:154 | AP view with 10-15° cephalic tilt. Best for visualizing AC joint without spine overlap. | AP view with 10-15° cephalic tilt | กลาง | ตรง | "he recommended a 10- to 15-degree cephalic tilt view to project an unobscured image of the joint" | Rockwood 10th (2025), PDF p.1094 | - | รอรีวิว |
| clavicle-008 | Clavicle Midshaft > การจัดจำแนก > Allman > ข้อบ่งชี้/เกณฑ์ตัดสินใจ (The Rules) | clavicle.ts:701 | Group I Operative Criteria: Shortening > 2 cm, displacement > 100% (no cortical contact), vertical z-shaped fragment, skin tenting, or neurovascular deficit. | Shortening > 2 cm, displacement > 100% (no cortical contact) | สูง | ตรง | "Displacement >2 cm Shortening >2 cm Increasing comminution (>3 fragments) Segmental fractures" | Rockwood 10th (2025), PDF p.1207 | ตรง ตำราทั้งสองเล่มระบุเกณฑ์สัมพัทธ์ในการผ่าตัด midshaft clavicle คือ shortening >2 cm และ displacement >2 cm (หรือ > 1 shaft width/100%) | รอรีวิว |
| clavicle-009 | Distal Clavicle > การจัดจำแนก > Neer (Distal Clavicle) > ข้อบ่งชี้/เกณฑ์ตัดสินใจ (The Rules) | clavicle.ts:1029 | Type IIA (Fracture medial to intact CC), Type IIB (Conoid torn, Trapezoid attached), Type V (Comminuted with inferior fragment holding CC): UNSTABLE. Loss of CC restraint on proximal fragment. | Type IIA (Fracture medial to intact CC), Type IIB (Conoid torn, Trapezoid attached) | สูง | ตรง | "IIA (Rockwood): Both conoid and trapezoid attached to the distal fragment. IIB (Rockwood): Conoid detached from the medial fragment." | Rockwood 10th (2025), PDF p.1200 | ตรง รอยหัก Type IIA อยู่ medial ต่อ CC ligaments ทำให้ทั้ง conoid และ trapezoid ติดอยู่กับชิ้นปลาย (distal fragment) ส่วน Type IIB conoid ฉีกขาด ทำให้ชิ้นโคนเลื่อนยกขึ้น | รอรีวิว |
| clavicle-010 | Distal Clavicle > การจัดจำแนก > Neer (Distal Clavicle) > ข้อมูลระบบ (System Info) | clavicle.ts:1005 | Neer Classification (Distal Clavicle) | Neer Classification (Distal Clavicle) | กลาง | ต่างกันตามฉบับ | "Because of their high rate of delayed union and nonunion, Neer divided distal clavicle fractures into three subgroups" | Rockwood 10th (2025), PDF p.1200 | Neer ดั้งเดิม (1968) แบ่งไว้ 3 กลุ่ม (Type I-III) โดย Rockwood แยก IIA/IIB; ส่วน Type IV (เด็ก/periosteal sleeve) และ Type V (comminuted/butterfly) เพิ่มเติมโดย Craig (Craig modification of Neer) ผู้ใช้เลือกคงเดิมตามชื่อมาตรฐาน | คงเดิมตามผู้ใช้ (Approved as is) |

---

## ข้อสังเกตเพิ่มเติมทางคลินิก (Clinical Insights)
1. **Weighted-Stress Views สำหรับ AC Joint**:
   - ใน `clavicle.ts:168` มีระบุท่าตรวจ `Bilateral AP / Stress View` (ถือน้ำหนัก 10-15 ปอนด์)
   - **Rockwood 10th ed. (2025, p.1094)** ให้ความเห็นปรับปรุงล่าสุดว่า: *"weighted-stress views do not increase the sensitivity of diagnosis, change the 'grade' or classification of the AC joint injury, or affect treatment. More importantly, it is a very painful maneuver for the patient in an acute injury. Therefore, we do not recommend its routine use as a radiographic evaluation tool."*
   - อาจพิจารณาเพิ่มหมายเหตุในแท็บ Investigation ว่าเป็นท่าตรวจแบบดั้งเดิม และตำรายุคใหม่ไม่แนะนำให้ตรวจเป็นประจำเนื่องจากผู้ป่วยเจ็บปวดมากและไม่เปลี่ยนแนวทางการรักษา

2. **เกณฑ์การรักษา Distal Clavicle Type II / Unstable**:
   - ใน `clavicle.ts:1043` ระบุอัตรา Nonunion 30-40% และเป็น Surgical Indication
   - **Rockwood 10th ed. (2025, p.1220)** อ้างอิง RCT ปี 2021 (Hall et al.) พบอัตรา nonunion 36% หลัง conservative care แต่ฟังก์ชันแขน (DASH) ไม่ต่างจากการผ่าตัดอย่างมีนัยสำคัญในผู้ป่วยวัยกลางคนขึ้นไป จึงสามารถเลือก non-operative ได้ในผู้ป่วยที่ความต้องการใช้งานไม่สูง
