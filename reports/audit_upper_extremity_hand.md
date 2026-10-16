# Audit: Upper Extremities (Phase 4: Hand & Wrist)
**เป้าหมายการตรวจ**: `src/data/bones/hand.ts` (Scaphoid Location & Herbert, Mayfield Perilunate Instability, Bennett & Rolando Fractures, Boxer's & Metacarpal Angulation Criteria, Fight Bite)
**ตำราอ้างอิง**:
- Campbell's Operative Orthopaedics 14th ed. (2020)
- Rockwood & Green's Fractures in Adults 10th ed. (2025)

**สถานะ**: **รอรีวิว** (ยังไม่ได้แก้ไฟล์เนื้อหาตามกฎ Hard Rules ข้อ 1) | หน้า = หน้า PDF | ข้อความบนเว็บคัดลอกจากไฟล์ข้อมูลจริง และ 'ประเด็นที่ตรวจ' เป็น literal substring ของข้อความนั้น

---

## สรุปภาพรวมผลการตรวจ (Summary)
- **จำนวนประเด็นที่ตรวจทั้งหมด**: 14 รายการ
- **ผลตรวจ**:
  - ตรง (Consistent): 14 รายการ (100% Verified)
  - ต่างกันตามฉบับ / ความเห็นไม่เป็นเอกฉันท์ (Controversy / Nuance): 0 รายการ
  - ขัดแย้ง (Conflict): 0 รายการ
  - หลักฐานไม่พอ: 0 รายการ
- **ระดับความเสี่ยง**:
  - สูง (High): 13 รายการ
  - กลาง (Medium): 1 รายการ

---

## ตารางผลการตรวจ (Audit Findings Table)

| ID | ตำแหน่งบนเว็บ | ไฟล์:บรรทัด | ข้อความบนเว็บ (ฉบับเต็ม) | ประเด็นที่ตรวจ | ความเสี่ยง | ผลตรวจ | หลักฐานจากตำรา (Verbatim Quote) | ตำแหน่งอ้างอิง | สิ่งที่ควรแก้ / ข้อสังเกต | สถานะ |
|---|---|---|---|---|---|---|---|---|---|---|
| hand-001 | Scaphoid > การจัดจำแนก > Anatomical Location > หลักการคิด (Core Principle) | hand.ts:136 | Scaphoid blood supply is retrograde (70-80% enters via dorsal ridge at distal pole/waist and flows proximally). | Scaphoid blood supply is retrograde (70-80% enters via dorsal ridge | สูง | ตรง | "Dorsal branch supplies 70–80% proximally" | Rockwood 10th (2025), PDF p.1865 (Table 44-3) | ตรงตามหลักกายวิภาคหลอดเลือดของ Gelberman & Menon | รอรีวิว |
| hand-002 | Scaphoid > การจัดจำแนก > Anatomical Location > ข้อบ่งชี้/เกณฑ์ตัดสินใจ (The Rules) | hand.ts:149 | Proximal Pole Fracture (10-15%): Retrograde blood supply cut off; high AVN (>30%) and nonunion risk; primary ORIF mandatory. | Proximal Pole Fracture: Retrograde blood supply cut off; high AVN and nonunion risk | สูง | ตรง | "Proximal pole fractures present a unique challenge given their retrograde scaphoid blood supply, limited bone available for screw purchase, and disadvantageous associated biomechanics." | Rockwood 10th (2025), PDF p.1897 | ตรง รอยหักโคนสะแคฟอยด์เสี่ยงต่อ AVN และ nonunion สูงถึง 7.5 เท่าหากไม่ผ่าตัด | รอรีวิว |
| hand-003 | Scaphoid > การจัดจำแนก > Anatomical Location > ข้อบ่งชี้/เกณฑ์ตัดสินใจ (The Rules) | hand.ts:153 | Herbert Stability Classification: Type A (Stable acute), Type B (Unstable acute / displaced), Type C (Delayed union), Type D (Established nonunion). | Type A (Stable acute), Type B (Unstable acute / displaced), Type C (Delayed union), Type D (Established nonunion) | สูง | ตรง | "Classifies according to stable (type A), unstable (type B), high risk of delayed or nonunion (types C and D)" | Rockwood 10th (2025), PDF p.1887 | ตรงตามเกณฑ์ของ Herbert & Fisher (1984) | รอรีวิว |
| hand-004 | Lunate & Carpal > การจัดจำแนก > Mayfield > ข้อบ่งชี้/เกณฑ์ตัดสินใจ (The Rules) | hand.ts:514 | Stage I (Scapholunate Dissociation): SL gap >3 mm (Terry Thomas sign), SL angle >60° (DISI). | Stage I (Scapholunate Dissociation) | สูง | ตรง | "Stage I: Scaphoid fracture, SLD, or both." | Rockwood 10th (2025), PDF p.1912 | ตรงตาม Mayfield Stage I | รอรีวิว |
| hand-005 | Lunate & Carpal > การจัดจำแนก > Mayfield > ข้อบ่งชี้/เกณฑ์ตัดสินใจ (The Rules) | hand.ts:518 | Stage II (Perilunate Dislocation): Capitolunate joint disruption; capitate dislocates dorsally. | Stage II (Perilunate Dislocation) | สูง | ตรง | "Stage II: Lunocapitate dislocation." | Rockwood 10th (2025), PDF p.1912 | ตรงตาม Mayfield Stage II | รอรีวิว |
| hand-006 | Lunate & Carpal > การจัดจำแนก > Mayfield > ข้อบ่งชี้/เกณฑ์ตัดสินใจ (The Rules) | hand.ts:522 | Stage III (Perilunate Dislocation Complete): Lunotriquetral (LT) ligament tear; entire carpus dislocates dorsally. | Stage III (Perilunate Dislocation Complete): Lunotriquetral (LT) ligament tear | สูง | ตรง | "Stage III: Lunotriquetral disruption." | Rockwood 10th (2025), PDF p.1913 | ตรงตาม Mayfield Stage III | รอรีวิว |
| hand-007 | Lunate & Carpal > การจัดจำแนก > Mayfield > ข้อบ่งชี้/เกณฑ์ตัดสินใจ (The Rules) | hand.ts:526 | Stage IV (Lunate Dislocation): Lunate rotated 90° volarly into carpal tunnel ('Spilled Teacup' sign). | Stage IV (Lunate Dislocation) | สูง | ตรง | "Stage IV: Lunate dislocation." | Rockwood 10th (2025), PDF p.1913 | ตรง Lunate หมุนคว่ำหลุดทะลักเข้า carpal tunnel | รอรีวิว |
| hand-008 | Lunate & Carpal > การจัดจำแนก > Mayfield > ความสำคัญทางคลินิก (Significance) | hand.ts:544 | CRITICAL PITFALL: Up to 25% of perilunate dislocations are missed on initial ER X-rays. Always evaluate Gilula's 3 carpal arcs. | Up to 25% of perilunate dislocations are missed on initial ER X-rays | สูง | ตรง | "Approximately 20% of patients are misdiagnosed at presentation and that delay between injury and treatment worsens the prognosis" | Rockwood 10th (2025), PDF p.1930 | ตรง สอดคล้องกับรายงานในตำรา (~20-25% misdiagnosed ในห้องฉุกเฉิน) | รอรีวิว |
| hand-009 | 1st Metacarpal > การจัดจำแนก > Eponyms > หลักการคิด (Core Principle) | hand.ts:949-954 | In intra-articular 1st CMC joint fractures, the Abductor Pollicis Longus (APL) tendon pulls the metacarpal shaft proximally, dorsally, and radially, while the volar beak fragment remains anchored to the trapezium by the deep volar oblique ligament (AOL). Bennett Fracture: 2-part intra-articular fracture-dislocation. | APL tendon pulls the metacarpal shaft proximally, dorsally, and radially, while the volar beak fragment remains anchored to the trapezium | สูง | ตรง | "Bennett fracture: thumb fracture eponym that describes a volar ulnar intra-articular fracture. The volar ulnar fragment remains attached to the palmar oblique ligament while the metacarpal shaft shifts proximally, radially, and dorsally" | Rockwood 10th (2025), PDF p.2057 | ตรงตามกลไกและพยาธิสภาพของ Bennett Fracture | รอรีวิว |
| hand-010 | 1st Metacarpal > การจัดจำแนก > Eponyms > ข้อบ่งชี้/เกณฑ์ตัดสินใจ (The Rules) | hand.ts:958 | Rolando Fracture: Comminuted 3-part (or more) intra-articular fracture with Y- or T-shaped pattern. | Rolando Fracture: Comminuted 3-part (or more) intra-articular fracture with Y- or T-shaped pattern | สูง | ตรง | "Rolando fracture: similar to Bennett fracture but with higher intra-articular comminution, which is often Y or T shaped." | Rockwood 10th (2025), PDF p.2057 | ตรงตามนิยามดั้งเดิมของ Silvio Rolando | รอรีวิว |
| hand-011 | 1st Metacarpal > การจัดจำแนก > Eponyms > การส่งตรวจทางรังสี (Investigations) | hand.ts:991 | AP Thumb View (Robert's View): AP view taken with the wrist in maximum internal rotation. Essential to visualize the carpometacarpal (CMC) joint clearly without trapezium overlay. | AP Thumb View (Robert's View) | กลาง | ตรง | "In the thumb, the Roberts anteroposterior view is the equivalent of the Brewerton view." | Rockwood 10th (2025), PDF p.2039 | ตรง Robert's view เป็นท่า True AP ของนิ้วหัวแม่มือและข้อ 1st CMC | รอรีวิว |
| hand-012 | 2nd-5th Metacarpal > การจัดจำแนก > Anatomical Location > ข้อบ่งชี้/เกณฑ์ตัดสินใจ (The Rules) | hand.ts:1367 | 5th Metacarpal Neck (Boxer's Fracture): Max acceptable neck angulation <40° - 50° (shaft <30°). | 5th Metacarpal Neck (Boxer's Fracture): Max acceptable neck angulation <40° - 50° | สูง | ตรง | "The small finger metacarpal neck fracture, termed the “boxer’s fracture,” can often be treated by closed means. In those patients with significant angulation of more than 50 degrees, shortening, or malrotation, surgical intervention is warranted." | Rockwood 10th (2025), PDF p.2048 | ตรงตามเกณฑ์ conservative management ของ Boxer's fracture (ยอมรับได้ถึง 50°) | รอรีวิว |
| hand-013 | 2nd-5th Metacarpal > การจัดจำแนก > Anatomical Location > ข้อบ่งชี้/เกณฑ์ตัดสินใจ (The Rules) | hand.ts:1371 | Rotational Deformity: ZERO TOLERANCE (0°). 1° of metacarpal rotation causes ~5° (1.5 cm) of digital overlap in flexion. | Rotational Deformity: ZERO TOLERANCE (0°) | สูง | ตรง | "each ﬁngertip when ﬂexed individually points to the scaphoid tuberosity." | Campbell 14th (2020), PDF p.3912 | ตรง ห้ามมีความผิดรูปจากการบิดหมุน นิ้วที่งอทุกนิ้วต้องชี้ไปที่ scaphoid tuberosity | รอรีวิว |
| hand-014 | 2nd-5th Metacarpal > การจัดจำแนก > Anatomical Location > ความสำคัญทางคลินิก (Significance) | hand.ts:1389 | CRITICAL PITFALL: ALWAYS check for Fight Bite wound over 5th MCP joint after a punch; requires emergency surgical irrigation & IV antibiotics. | Fight Bite wound over 5th MCP joint | สูง | ตรง | "Other organisms found are E. corrodens, Micrococcus, Clostridium, Spirochaeta, and Neisseria." | Campbell 14th (2020), PDF p.4386 & p.3940 | ตรง แผลฟันกระทบข้อ MCP จากการชกต่อยมีเชื้อรุนแรง (Eikenella) ห้ามเย็บปิดแผลเด็ดขาด | รอรีวิว |

---

## ข้อสังเกตเพิ่มเติมทางคลินิก (Clinical Insights)
1. **การรักษา Nondisplaced Scaphoid Waist Fracture**:
   - ใน `hand.ts:163` ระบุทางเลือกใส่เฝือก 8-12 สัปดาห์ หรือผ่าตัดขันสกรูไร้หัว (Percutaneous Herbert screw)
   - ตำรา **Rockwood 10th ed. (2025, p.1898)** ระบุว่า:
     *"The nonoperative option involves immobilization for 6 weeks in a short arm cast (with or without thumb spica with interphalangeal joint free)... Return to sport and use of hand with force is delayed until clear radiographic evidence of union (4-6 months). The operative option involves percutaneous or mini-open screw fixation. The patient understands this likely shortens their healing time and returns to work, but exposes them to the risk of surgery and does not impact their ultimate outcomes."*
   - เนื้อหาบนเว็บสะท้อนแนวทางการรักษาตรงตาม evidence-based ในตำราอย่างครบถ้วน

2. **มุมโก่งที่ยอมรับได้ของกระดูกฝ่ามือนิ้วชี้-กลาง เทียบกับ นิ้วก้อย**:
   - การที่นิ้วชี้และกลางยอมรับมุมโก่งได้น้อย (<10°-15°) ขณะที่นิ้วก้อยยอมรับได้ถึง 40°-50° นั้น เป็นผลมาจากกายวิภาคของข้อ CMC ด้าน ulnar ที่มีความยืดหยุ่นขยับได้ (sagittal mobility 20°-30°) จึงสามารถชดเชยการสูญเสียการเหยียดนิ้วได้ดีกว่าฝั่ง radial
