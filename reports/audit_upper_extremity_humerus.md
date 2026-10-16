# Audit: Upper Extremities (Phase 2: Humerus)
**เป้าหมายการตรวจ**: `src/data/bones/humerus.ts` (Proximal Humerus Neer, Humeral Shaft Holstein-Lewis, Distal Humerus AO/OTA 13)
**ตำราอ้างอิง**:
- Campbell's Operative Orthopaedics 14th ed. (2020)
- Rockwood & Green's Fractures in Adults 10th ed. (2025)

**สถานะ**: **รอรีวิว** (ยังไม่ได้แก้ไฟล์เนื้อหาตามกฎ Hard Rules ข้อ 1) | หน้า = หน้า PDF | ข้อความบนเว็บคัดลอกจากไฟล์ข้อมูลจริง และ 'ประเด็นที่ตรวจ' เป็น literal substring ของข้อความนั้น

---

## สรุปภาพรวมผลการตรวจ (Summary)
- **จำนวนประเด็นที่ตรวจทั้งหมด**: 12 รายการ
- **ผลตรวจ**:
  - ตรง (Consistent): 10 รายการ
  - ต่างกันตามฉบับ / ความเห็นไม่เป็นเอกฉันท์ (Controversy / Nuance): 2 รายการ
    - `humerus-009`: การผ่าตัดเปิดสำรวจเส้นประสาทใน Secondary radial nerve palsy (Schatzker advocate exploration vs modern expectant management)
    - `humerus-011`: ข้อความ "Mandatory trans-olecranon osteotomy" สำหรับ Distal humerus complete articular (AO 13-C) (ตำราแนะนำ olecranon osteotomy สำหรับ C3 comminuted ขณะที่ C1-C2 สามารถทำ paratricipital/triceps-sparing ได้ และการดามกระดูกใช้ได้ทั้ง parallel หรือ orthogonal)
  - ขัดแย้ง (Conflict): 0 รายการ
  - หลักฐานไม่พอ: 0 รายการ
- **ระดับความเสี่ยง**:
  - สูง (High): 11 รายการ
  - กลาง (Medium): 1 รายการ

---

## ตารางผลการตรวจ (Audit Findings Table)

| ID | ตำแหน่งบนเว็บ | ไฟล์:บรรทัด | ข้อความบนเว็บ (ฉบับเต็ม) | ประเด็นที่ตรวจ | ความเสี่ยง | ผลตรวจ | หลักฐานจากตำรา (Verbatim Quote) | ตำแหน่งอ้างอิง | สิ่งที่ควรแก้ / ข้อสังเกต | สถานะ |
|---|---|---|---|---|---|---|---|---|---|---|
| humerus-001 | Proximal Humerus > การจัดจำแนก > Neer > ข้อบ่งชี้/เกณฑ์ตัดสินใจ (The Rules) | humerus.ts:143-148 | Displacement > 1 cm between fracture segments; Angulation > 45° between humeral head and shaft | Displacement > 1 cm, Angulation > 45° | สูง | ตรง | "Neer defined a fracture as a part if it was displaced by more than 1 cm or angulated by more than 45 degrees." | Rockwood 10th (2025), PDF p.142 / Campbell 14th (2020), PDF p.3407 | ตรงตามเกณฑ์สากลของ Neer | รอรีวิว |
| humerus-002 | Proximal Humerus > การจัดจำแนก > Neer > ข้อบ่งชี้/เกณฑ์ตัดสินใจ (The Rules) | humerus.ts:151 | Greater Tuberosity (GT) displacement > 0.5 cm (5 mm) | GT displacement > 0.5 cm (5 mm) | สูง | ตรง | "Indications for operative treatment include displaced two-part surgical neck fractures, displaced (>5 mm) greater tuberosity fractures" | Campbell 14th (2020), PDF p.3408 | ตรงตามเกณฑ์ข้อบ่งชี้ผ่าตัด GT เพื่อป้องกัน impingement | รอรีวิว |
| humerus-003 | Proximal Humerus > การจัดจำแนก > Neer > ความสำคัญทางคลินิก (Significance) | humerus.ts:157 | 1-Part (~80% of cases): Minimal displacement — Non-operative treatment with Arm Sling 1-2 wks & early passive ROM (Good outcome >90%). | 1-Part ~80% of cases | กลาง | ตรง | "Neer79 stated that 85% of proximal humeral fractures were minimally displaced fractures, although a more recent study showed that 49% of proximal humeral fractures were minimally displaced" | Rockwood 10th (2025), PDF p.352 & p.1336 | ตรงตามนิยามดั้งเดิมของ Neer (~80-85%) แต่งานวิจัยประชากรยุคหลัง (Court-Brown et al.) พบ ~49% | รอรีวิว |
| humerus-004 | Proximal Humerus > การจัดจำแนก > Neer > ความสำคัญทางคลินิก (Significance) | humerus.ts:165 | 3 & 4-Part Fractures: High surgical rate. Young active -> Locking plate ORIF; Elderly (>65 yo) -> Reverse Total Shoulder Arthroplasty (RSA). | Elderly (>65 yo) -> Reverse Total Shoulder Arthroplasty (RSA) | สูง | ตรง | "because its functional outcomes appear to be more reproducible and less dependent on the healing of the tuberosities compared to hemiarthroplasty." | Rockwood 10th (2025), PDF p.1408 | ตรง ตำรายืนยันว่า RSA ให้ผลลัพธ์ที่ทำซ้ำได้ดีกว่า Hemiarthroplasty ในผู้สูงอายุ | รอรีวิว |
| humerus-005 | Proximal Humerus > การจัดจำแนก > Neer > ความสำคัญทางคลินิก (Significance) | humerus.ts:169-170 | AVN Risk: Classic 4-part fractures have high AVN risk (>80-90%) due to ascending humeral artery disruption; Valgus impacted 4-part has lower AVN risk (~15%). | Classic 4-part AVN risk >80-90%, Valgus impacted ~15% | สูง | ตรง | "Additional classification criteria included the length of the medial metaphyseal head extension, the integrity of the medial hinge, and the presence of head-split components, again focusing in predicting AVN based on correlation between these morphologic findings, and intraoperative ischemia." | Rockwood 10th (2025), PDF p.1336 | ตรง โดยเกณฑ์ทำนาย AVN ที่แม่นยำสูงในปัจจุบันอิงตามเกณฑ์ Hertel (calcar length <8 mm, disrupted medial hinge) | รอรีวิว |
| humerus-006 | Humeral Shaft > การจัดจำแนก > Holstein-Lewis > หลักการคิด (Core Principle) | humerus.ts:842-843 | Categorizes humeral shaft fractures by anatomical third (Proximal, Middle ~60%, Distal), highlighting the Holstein-Lewis distal third spiral fracture which carries high risk of radial nerve entrapment at the lateral intermuscular septum. | Holstein-Lewis distal third spiral fracture carries high risk of radial nerve entrapment | สูง | ตรง | "In 1963, Holstein and Lewis associated a special type of fracture of the distal humerus, a simple displaced spiral fracture, with the distal end deviating toward the radial side occurring in about 7% of all humeral shaft fractures, with an increased rate of radial nerve palsy (Fig. 37-4)." | Rockwood 10th (2025), PDF p.1439 | ตรงตามนิยามดั้งเดิมและพยาธิสภาพของ Holstein-Lewis | รอรีวิว |
| humerus-007 | Humeral Shaft > การจัดจำแนก > Holstein-Lewis > ข้อบ่งชี้/เกณฑ์ตัดสินใจ (The Rules) | humerus.ts:847-848 | Conservative Alignment Acceptability: AP angulation < 20°, Varus/Valgus < 15°, Shortening < 2 cm, Rotation < 30°. | AP angulation < 20° Varus/Valgus < 15° Shortening < 2 cm Rotation < 30° | สูง | ตรง | "Guidelines for acceptable reduction include less than 3 cm of shortening, angulation of less than 20 degrees, and rotation of less than 30 degrees." | Campbell 14th (2020), PDF p.3423 / Rockwood 10th (2025), PDF p.1453 | ตรง (Campbell ยอมรับ shortening < 3 cm ขณะที่เว็บระบุ < 2 cm ซึ่ง conservative และปลอดภัยกว่า; Rockwood ระบุ AP < 20° และ varus < 15°) | รอรีวิว |
| humerus-008 | Humeral Shaft > การจัดจำแนก > Holstein-Lewis > ข้อบ่งชี้/เกณฑ์ตัดสินใจ (The Rules) | humerus.ts:851-852 | Closed Primary Radial Nerve Palsy: ~90% spontaneous recovery in 3-4 months; treat conservatively in splint/brace with EMG follow-up. | ~90% spontaneous recovery in 3-4 months | สูง | ตรง | "Overall, recovery occurred in 88%." | Campbell 14th (2020), PDF p.3434 / Rockwood 10th (2025), PDF p.1439 | ตรง (Campbell รายงาน 88%, ตำราทั่วไปและเว็บระบุ ~90% ในช่วง 3-4 เดือน) | รอรีวิว |
| humerus-009 | Humeral Shaft > การจัดจำแนก > Holstein-Lewis > ข้อบ่งชี้/เกณฑ์ตัดสินใจ (The Rules) | humerus.ts:855-856 | Secondary Radial Nerve Palsy (developing AFTER closed reduction): Indicative of nerve entrapment in fracture site; SURGICAL EXPLORATION MANDATORY. | Secondary Radial Nerve Palsy ... SURGICAL EXPLORATION MANDATORY | สูง | ต่างกันตามฉบับ | "while Schatzker advocated immediate exploration because of the possibility of the nerve being trapped within the fracture when a later exploration would be more difficult in the presence of new bone formation." | Rockwood 10th (2025), PDF p.1490 | **จุดสำคัญทางคลินิก**: ข้อความเดิมบนเว็บระบุว่า SURGICAL EXPLORATION MANDATORY ตามแนวคิดดั้งเดิมของ Schatzker แต่ Rockwood 10th ชี้ว่า Böstman et al. และ Gregory แนะนำ observation/expectant management และ Shao et al. ไม่พบหลักฐานเพียงพอที่จะสรุปเป็น routine exploration ควรระบุทั้ง 2 แนวทาง | รอรีวิว |
| humerus-010 | Distal Humerus > การจัดจำแนก > AO/OTA 13 > คำอธิบาย (Description) | humerus.ts:1183 | Classification of distal humerus fractures based on joint surface involvement: Type A: Extra-articular, Type B: Partial articular, Type C: Complete articular | Type A Extra-articular, Type B Partial articular, Type C Complete articular | สูง | ตรง | "Type A fractures are extra-articular and may involve the epicondyles or occur at the distal humerus metaphyseal level." | Rockwood 10th (2025), PDF p.1569 & p.1573 | ตรงตามระบบการจำแนกมาตรฐานของ AO/OTA 13 | รอรีวิว |
| humerus-011 | Distal Humerus > การจัดจำแนก > AO/OTA 13 > ข้อบ่งชี้/เกณฑ์ตัดสินใจ (The Rules) | humerus.ts:1205 | Type C (Complete Articular): Articular block is completely detached and dissociated from humeral shaft -> Mandatory trans-olecranon osteotomy + dual parallel locking plates | Mandatory trans-olecranon osteotomy + dual parallel locking plates | สูง | ต่างกันตามฉบับ | "Chevron-shaped olecranon osteotomy in patients with comminuted intra-articular OTA/AO type C3 fractures" | Rockwood 10th (2025), PDF p.1602 | **จุดสังเกต**: ตำราไม่ได้ระบุว่า Olecranon osteotomy เป็น "Mandatory" ทุกเคส โดยระบุว่าใช้ใน C3 comminuted ขณะที่ C1-C2 สามารถใช้ paratricipital / triceps-sparing approach ได้ และการดามแผ่นเหล็กทำได้ทั้ง parallel หรือ orthogonal (90-90) | รอรีวิว |
| humerus-012 | Distal Humerus > สรุปภาพรวม > ข้อพิจารณาทางคลินิก (Key Takeaways) | humerus.ts:1170 | Total Elbow Arthroplasty (TEA) is a primary treatment option for low-demand elderly patients with severely comminuted intra-articular (13-C3) fractures. | TEA in low-demand elderly with 13-C3 comminution | สูง | ตรง | "Primary total elbow arthroplasty (TEA) has evolved to become a viable treatment option for elderly patients with articular fragmentation, comminution, and osteopenia." | Rockwood 10th (2025), PDF p.1566 | ตรงตามข้อบ่งชี้มาตรฐานของตำราสำหรับการทำข้อศอกเทียมในผู้สูงอายุ | รอรีวิว |

---

## ข้อสังเกตและข้อเสนอแนะทางคลินิก (Clinical Insights & Discussion)

### 1. ข้อถกเถียงเรื่อง Secondary Radial Nerve Palsy หลังการจัดกระดูก (humerus-009)
- **ข้อความปัจจุบันบนเว็บ**: ระบุว่า *"SURGICAL EXPLORATION MANDATORY"*
- **หลักฐานจากตำรา (Rockwood 10th ed. 2025, p. 1490)**:
  - *Schatzker*: สนับสนุนการผ่าตัดสำรวจทันที (Immediate exploration) เนื่องจากกังวลว่าเส้นประสาทจะถูกหนีบในรอยหัก และการผ่าตัดในภายหลังจะยากขึ้นเพราะมี callus ก่อตัว
  - *Böstman et al. (16 เคส) & Gregory*: เสนอแนวทาง Expectant treatment / Observation เนื่องจากเส้นประสาทมักฟื้นตัวได้เองเช่นเดียวกับ primary palsy
  - *Shao et al. (Systematic Review)*: ไม่พบหลักฐานทางสถิติที่สนับสนุนว่าการผ่าตัดทันทีให้ผลดีกว่าการเฝ้าสังเกต
- **ข้อเสนอแนะ**: ควรปรับข้อความเพื่อไม่ให้ผู้เรียนเข้าใจผิดว่าการผ่าตัดทันทีเป็น absolute mandate เช่น:
  > *"Secondary Radial Nerve Palsy (developing AFTER closed reduction): Historically, immediate surgical exploration was advocated by Schatzker due to risk of entrapment. However, modern evidence (Böstman, Shao) supports initial expectant management/observation as most cases recover spontaneously, reserving exploration if no recovery occurs in 3-4 months or in open fractures."*

### 2. แนวทางการผ่าตัดรอยหักปลายต้นแขน AO/OTA 13-C (humerus-011)
- **ข้อความปัจจุบันบนเว็บ**: ระบุว่า *"Mandatory trans-olecranon osteotomy + dual parallel locking plates"*
- **หลักฐานจากตำรา (Rockwood 10th ed. 2025, p. 1602)**:
  - *Approach*: Olecranon osteotomy นิยมใช้ในรายที่กระดูกแตกละเอียดมาก (Type C3) เพื่อให้เห็นผิวข้อได้ชัดเจนที่สุด แต่ในรอยหักไม่ละเอียดมาก (Type C1, C2) สามารถใช้ Paratricipital approach (Triceps-sparing) เพื่อหลีกเลี่ยงภาวะแทรกซ้อนจากการตัดกระดูก olecranon (nonunion, hardware prominence)
  - *Fixation*: การดามแผ่นเหล็กสามารถทำได้ทั้งแบบ **Parallel plating** และ **Orthogonal (90-90) plating** โดยให้ความมั่นคงเพียงพอต่อการทำ early active ROM ทั้งสองวิธี
- **ข้อเสนอแนะ**: ปรับคำจาก *"Mandatory trans-olecranon osteotomy + dual parallel locking plates"* เป็น:
  > *"Trans-olecranon osteotomy (especially for comminuted C3) or triceps-sparing paratricipital approach (C1/C2) + Rigid dual column plating (parallel or orthogonal 90-90)"*
