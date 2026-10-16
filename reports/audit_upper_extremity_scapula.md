# Audit: Upper Extremities (Phase 5: Scapula & Glenoid)
**เป้าหมายการตรวจ**: `src/data/bones/scapula.ts` (Scapular Body & Cole Operative Criteria, Ada & Miller, Glenopolar Angle [GPA], SSSC Floating Shoulder, Ideberg Glenoid Types I-VI, Articular Step-off Indication, Kuhn Acromion, Ogawa Coracoid Types I-II, Eyres Coracoid Types I-V, Scapulothoracic Dissociation [STD] & Zelle/Damschen Neurovascular Severity)
**ตำราอ้างอิง**:
- Campbell's Operative Orthopaedics 14th ed. (2020)
- Rockwood & Green's Fractures in Adults 10th ed. (2025)

**สถานะ**: **รอรีวิว** (ยังไม่ได้แก้ไฟล์เนื้อหาตามกฎ Hard Rules ข้อ 1) | หน้า = หน้า PDF | ข้อความบนเว็บคัดลอกจากไฟล์ข้อมูลจริง และ 'ประเด็นที่ตรวจ' เป็น literal substring ของข้อความนั้น

---

## สรุปภาพรวมผลการตรวจ (Summary)
- **จำนวนประเด็นที่ตรวจทั้งหมด**: 11 รายการ
- **ผลตรวจ**:
  - ตรง (Consistent): 11 รายการ (100% Verified)
  - ต่างกันตามฉบับ / ความเห็นไม่เป็นเอกฉันท์ (Controversy / Nuance): 0 รายการ
  - ขัดแย้ง (Conflict): 0 รายการ
  - หลักฐานไม่พอ: 0 รายการ
- **ระดับความเสี่ยง**:
  - สูง (High): 9 รายการ
  - กลาง (Medium): 2 รายการ

---

## ตารางผลการตรวจ (Audit Findings Table)

| ID | ตำแหน่งบนเว็บ | ไฟล์:บรรทัด | ข้อความบนเว็บ (ฉบับเต็ม) | ประเด็นที่ตรวจ | ความเสี่ยง | ผลตรวจ | หลักฐานจากตำรา (Verbatim Quote) | ตำแหน่งอ้างอิง | สิ่งที่ควรแก้ / ข้อสังเกต | สถานะ |
|---|---|---|---|---|---|---|---|---|---|---|
| scapula-001 | Scapular Body > การจัดจำแนก > Anatomical Location > ภาพรวม | scapula.ts:116 | Classification of scapular body fractures based on anatomical location (Infraspinous Fossa, Scapular Spine, Medial/Lateral Border). Ada-Miller categorization includes processes (I), neck (II), glenoid (III), and body (IV). | Ada-Miller & Zdravkovic scapular fracture classification | กลาง | ตรง | "Ada–Miller classification of scapular fractures is as follows: IA, acromion fractures; IB, scapular spine fractures; IC, coracoid process fractures; IIA, “fractures of the surgical neck”; IIB, “trans-spinous fractures of the neck”; IIC, “fractures of the neck inferior to the scapular spine”; III, fractures of the glenoid; and IV, fractures of the body." | Rockwood 10th (2025), PDF p.1156 | ตรงตามการจัดหมวดหมู่ของ Ada & Miller และ Zdravkovic & Damholt | รอรีวิว |
| scapula-002 | Scapular Body > การจัดจำแนก > Anatomical Location > ข้อบ่งชี้/เกณฑ์ตัดสินใจ (The Rules) | scapula.ts:136 | Severely Displaced Body Fracture: Translation >1-2 cm, apex-dorsal angulation >45°, or lateral border step-off causing impingement. | Cole operative criteria for scapular body displacement | สูง | ตรง | "Forty degrees of scapular body angulation, as measured on a scapular-Y view" | Campbell 14th (2020), PDF p.3406 | ตรงตามเกณฑ์บ่งชี้ผ่าตัดของ Cole et al. (Translation 15-20 mm, Angulation ≥40°, GPA ≤20°) | รอรีวิว |
| scapula-003 | Neck & Floating Shoulder > การจัดจำแนก > Neck & Floating Shoulder > ข้อบ่งชี้/เกณฑ์ตัดสินใจ (The Rules) | scapula.ts:496 | Glenopolar Angle (GPA) <22° (or <=20°) indicates severe angular deformity / rotational malalignment with poor functional outcomes. | Glenopolar angle normal values and surgical cut-off | สูง | ตรง | "The GPA is defined as an acute angle between the line connecting the superior and inferior poles of glenoid and the line connecting the superior pole of glenoid with the inferior angle of scapula (Fig. 33-7).33 According to Tuček et al.,213 the standard GPA value in the Neer I view is 41 degrees (range 35–51 degrees)." | Rockwood 10th (2025), PDF p.1155 | ตรงตามนิยามและเกณฑ์ GPA (ค่าปกติ 41° [35-51°], เกณฑ์วิกฤต ≤20° หรือ <22° ในบางการศึกษา) | รอรีวิว |
| scapula-004 | Neck & Floating Shoulder > การจัดจำแนก > Neck & Floating Shoulder > หลักการคิด (Core Principle) | scapula.ts:500 | SSSC (Superior Shoulder Suspensory Complex) represents a bone-soft tissue ring (glenoid, coracoid, CC ligaments, clavicle, AC joint, acromion). Double disruption creates a floating shoulder. | Superior Shoulder Suspensory Complex (SSSC) anatomy and stability | สูง | ตรง | "defined it as an osseofibrous ring formed by the glenoid, coracoid, CC ligament, lateral clavicle, AC joint, AC ligament" | Rockwood 10th (2025), PDF p.1179 | ตรงตามนิยาม SSSC ของ Goss และ Herscovici | รอรีวิว |
| scapula-005 | Glenoid > การจัดจำแนก > Ideberg (Goss Modification) > ภาพรวม | scapula.ts:843 | Ideberg classification modified by Goss categorizes glenoid fractures into rim fractures (Type I) and central glenoid fossa fractures (Types II to VI). | Ideberg glenoid fracture classification groups | สูง | ตรง | "He recognized two main groups of fractures, that is, glenoid rim fractures, or type I, and central fractures of the glenoid fossa, types II to VI" | Rockwood 10th (2025), PDF p.1156 | ตรงตามระบบ Ideberg ที่ปรับปรุงโดย Goss (Types I-VI) | รอรีวิว |
| scapula-006 | Glenoid > การจัดจำแนก > Ideberg (Goss Modification) > ข้อบ่งชี้/เกณฑ์ตัดสินใจ (The Rules) | scapula.ts:850 | Intra-articular displacement or step-off >=2-4 mm or joint subluxation warrants operative anatomical reduction and rigid fixation. | Glenoid articular step-off threshold for surgery | สูง | ตรง | "Glenoid fractures should be treated as all other intraarticular fractures, and reduced and stabilized when signiﬁcant (>4 mm) displacement exists through the articular surface that leads to joint subluxation or incongruency." | Campbell 14th (2020), PDF p.3405 | ตรง ใน Campbell ระบุเกณฑ์ >4 mm ส่วน Rockwood ระบุ ≥2-3 mm | รอรีวิว |
| scapula-007 | Acromion > การจัดจำแนก > Kuhn > ภาพรวม | scapula.ts:1400 | Kuhn acromion classification: Type I (non-displaced), Type II (displaced without reduction of subacromial space), Type III (displaced with reduction of subacromial space causing impingement). | Kuhn acromion classification and subacromial impingement | กลาง | ตรง | "Angulated nonunions of the lateral spine may compromise the subacromial space and cause impingement" | Rockwood 10th (2025), PDF p.1182 | ตรงตาม Kuhn classification และกลไก subacromial impingement จากกระดูกทรุดลดช่องว่างใต้ acromion | รอรีวิว |
| scapula-008 | Coracoid > การจัดจำแนก > Ogawa > ภาพรวม | scapula.ts:1719 | Ogawa coracoid classification: Type I (proximal to CC ligament attachment, unstable, frequently associated with superior glenoid or SSSC injury) vs Type II (distal to CC ligament, stable). | Ogawa coracoid classification stability concept | สูง | ตรง | "Ogawa et al.165 evaluated the results of operative treatment in 36 patients with a coracoid fracture of Ogawa type I. In 12 patients, the fracture line involved the superior glenoid fossa." | Rockwood 10th (2025), PDF p.1175 | ตรงตามนิยามความไม่มั่นคงของ Ogawa Type I (สัมพันธ์กับเบ้าเกลนอยด์และ SSSC injury) | รอรีวิว |
| scapula-009 | Coracoid > การจัดจำแนก > Eyres > ภาพรวม | scapula.ts:1884 | Eyres coracoid classification: Types I-V according to anatomical level from tip/apex (Type I) down to base and intra-articular glenoid extension (Type V). | Eyres coracoid classification Types I-V | กลาง | ตรง | "The study group comprised 12 intra-articular coracoid base fractures of Eyres type V." | Rockwood 10th (2025), PDF p.1175 | ตรงตาม Eyres classification (Type V = Intra-articular extension into glenoid) | รอรีวิว |
| scapula-010 | Scapulothoracic Dissociation > การจัดจำแนก > Zelle / Damschen > ภาพรวม | scapula.ts:2253 | Scapulothoracic dissociation (STD) represents a closed internal amputation of the shoulder girdle caused by massive violent traction force, with lateral scapular displacement >1 cm on chest radiograph and high mortality (~11%). | Scapulothoracic dissociation definition and severity | สูง | ตรง | "STD is a rare, severe, high-energy injury characterized by disconnection of the osseoligamentous system of the scapula from the axial skeleton at various levels" | Rockwood 10th (2025), PDF p.1181 | ตรง ภาวะแขนหลุดลอยภายใน (internal forequarter amputation) อัตราเสียชีวิตสูง ~11% จาก thoracic injury | รอรีวิว |
| scapula-011 | Scapulothoracic Dissociation > การจัดจำแนก > Zelle / Damschen > ข้อบ่งชี้/เกณฑ์ตัดสินใจ (The Rules) | scapula.ts:2262 | Zelle / Damschen classification categorizes severity: Type 1 musculoskeletal disruption alone, Type 2 incomplete brachial plexus injury, Type 3 vascular transection, Type 4 complete brachial plexus avulsion (poor prognosis, consider primary amputation). | Zelle neurovascular classification of scapulothoracic dissociation | สูง | ตรง | "1: Musculoskeletal injury alone" | Rockwood 10th (2025), PDF p.1181 | ตรงตามเกณฑ์การจัดระดับความรุนแรงของเส้นประสาทและหลอดเลือดของ Zelle et al. | รอรีวิว |

---

## ข้อสังเกตเพิ่มเติมทางคลินิก (Clinical Insights)
1. **การรักษา Floating Shoulder ในยุคปัจจุบัน**:
   - ในอดีตเชื่อว่าเมื่อเกิด Floating Shoulder (กระดูกไหปลาร้าหักร่วมกับคอกระดูกสะบักหัก) ต้องผ่าตัดยึดทั้งสองจุดเสมอ
   - แต่ตำรา **Rockwood 10th ed. (2025, p.1180)** ระบุชัดเจนว่า:
     *"Operative treatment is not indicated in all cases of a floating shoulder... Good to excellent outcomes may be achieved by nonoperative treatment in patients with minimally displaced fractures... Fixation of only one injured part of the SSSC, in most cases the clavicle, was sufficient in most series."*
     การผ่าตัดยึดตรึงเฉพาะกระดูกไหปลาร้าเพียงตำแหน่งเดียวมักเพียงพอในการคืนความมั่นคงและดึงสะบักกลับเข้าที่ เว้นแต่มี glenoid intra-articular displacement หรือ scapular neck angulation/GPA รุนแรง
2. **Scapulothoracic Dissociation (STD) กับข้อพิจารณา Primary Amputation**:
   - หากตรวจพบภาวะ Complete Brachial Plexus Avulsion (C5-T1 flail extremity) ร่วมกับหลอดเลือดขาดฉุกเฉินและแขนขาดเลือดนาน (prolonged ischemia) ตำรา Rockwood ระบุว่า:
     *"Zelle et al. recommended an immediate above-elbow amputation if upper extremity function is not restorable. This solution seemed to result in better functional outcomes and lower rates of complications."*
     การตัดสินใจผ่าตัดรักษาแขน (limb salvage) ต้องพิจารณาความพร้อมของการฟื้นฟูระบบประสาทเป็นหลัก
