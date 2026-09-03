import type { PediatricTopic, RemodelingGuideItem, OssificationCenter } from "../../types/pediatric";

export const OSSIFICATION_CENTERS: OssificationCenter[] = [
  { letter: "C", name: "Capitellum", thName: "แคปปิเทลลัม", age: "1 yr (1-2y)", pearl: { en: "1st center to appear. Radiocapitellar line must bisect it in all views.", th: "ศูนย์แรกที่เกิดกระดูก เส้น Radiocapitellar line ต้องผ่ากลางเสมอ" } },
  { letter: "R", name: "Radial Head", thName: "หัวกระดูกเรเดียส", age: "3 yrs (3-4y)", pearl: { en: "Must always point directly at capitellum.", th: "ต้องชี้ตรงผ่านกึ่งกลาง Capitellum ทุกท่าเอกซเรย์" } },
  { letter: "I", name: "Internal (Medial) Epicondyle", thName: "ปุ่มกระดูกด้านใน", age: "5 yrs (5-6y)", pearl: { en: "MUST appear before Trochlea! If missing, suspect incarcerated in joint.", th: "ต้องเห็นก่อน Trochlea เสมอ! หากหายไปให้ระวังชิ้นหักหลุดติดในข้อ" } },
  { letter: "T", name: "Trochlea", thName: "โทรเคลีย", age: "7 yrs (7-8y)", pearl: { en: "Often appears multi-focal/irregular normally.", th: "ปกติจะเห็นเป็นจุดหลายหย่อม ไม่ควรสับสนกับรอยหัก" } },
  { letter: "O", name: "Olecranon", thName: "ยอดข้อศอก", age: "9 yrs (9-10y)", pearl: { en: "Ossifies from proximal tip towards shaft.", th: "เกิดจากปลายข้อศอก ค่อยๆ เชื่อมเข้ากับแกนกระดูก" } },
  { letter: "E", name: "External (Lateral) Epicondyle", thName: "ปุ่มกระดูกด้านนอก", age: "11 yrs (10-12y)", pearl: { en: "Last ossification center before complete fusion.", th: "ศูนย์สุดท้ายก่อนเริ่มเชื่อมปิดสมบูรณ์ช่วงวัยรุ่น" } },
];

export const REMODELING_GUIDELINES: RemodelingGuideItem[] = [
  {
    region: { en: "Proximal Humerus", th: "กระดูกต้นแขนส่วนต้น" },
    ageLimit: "< 10 yrs",
    acceptableAngulation: "< 45° - 70° (Huge potential)",
    acceptableShortening: "< 2.0 cm",
    notes: { en: "80% of longitudinal arm growth occurs here. Multiaxial shoulder ball-and-socket allows immense remodeling.", th: "80% ของความยาวแขนสร้างจากจุดนี้ ข้อไหล่ขยับได้หลายทิศทางจึงยอมรับมุมเอียงได้มากที่สุด" }
  },
  {
    region: { en: "Distal Radius (Wrist)", th: "กระดูกปลายแขนส่วนปลาย" },
    ageLimit: "< 10 yrs",
    acceptableAngulation: "< 20° - 25° (Sagittal plane)",
    acceptableShortening: "< 1.0 cm",
    notes: { en: "Sagittal plane (flexion/extension) remodels rapidly. Coronal plane angulation remodels poorly (< 10°).", th: "แนวหน้าหลัง (Sagittal) ดัดคืนตัวได้เร็วมาก แต่มุมเอียงด้านข้าง (Coronal) รับได้ไม่เกิน 10°" }
  },
  {
    region: { en: "Femoral Shaft", th: "กระดูกต้นขา (Femur)" },
    ageLimit: "< 5 yrs",
    acceptableAngulation: "< 15° Varus/Valgus, < 20° AP",
    acceptableShortening: "1.0 - 2.0 cm (Desired bayonet)",
    notes: { en: "Hypervascular post-fracture overgrowth of 1-2 cm occurs over 18 months in young children.", th: "เด็กเล็กจะมี Overgrowth กระดูกโตเร่งยาวขึ้น 1-2 ซม. หลังหัก จึงตั้งใจดัดให้เกยกันเล็กน้อย" }
  },
  {
    region: { en: "Tibial Shaft", th: "กระดูกหน้าแข้ง (Tibia)" },
    ageLimit: "< 8 yrs",
    acceptableAngulation: "< 5° Varus/Valgus, < 10° AP",
    acceptableShortening: "< 1.0 cm",
    notes: { en: "Rotational deformity NEVER remodels spontaneously (Must be corrected to 0°).", th: "การบิดหมุน (Rotational deformity) ไม่สามารถ Remodel ตัวเองได้เลย ต้องดัดให้ตรง 0° เสมอ" }
  }
];

export const PEDIATRIC_TOPICS: PediatricTopic[] = [
  // ── TRAUMA & FRACTURES ──
  {
    id: "salter-harris",
    hub: "trauma",
    ageStage: "all",
    ageRange: { en: "Open growth plates (0 - 16 yrs)", th: "เด็กที่ Physis ยังไม่ปิด (0 - 16 ปี)" },
    urgency: "urgent",
    title: { en: "Salter-Harris Physeal Classification", th: "การบาดเจ็บกระดูกอ่อนเจริญเติบโต (Salter-Harris)" },
    subtitle: { en: "Universal classification for growth plate fractures", th: "ระบบสากลในการจำแนกรอยหักผ่านแผ่น Growth Plate" },
    corePrinciple: {
      en: "Mnemonic S-A-L-T-E-R: Straight (I), Above (II), Lower (III), Through (IV), Rammed (V). Higher numbers (III-V) cross intra-articular germinal layers with high growth arrest risk.",
      th: "จำง่ายด้วย S-A-L-T-E-R: I (ขนานแนว), II (เฉียงขึ้น Metaphysis), III (ลงผิวข้อ), IV (ทะลุ 3 ชั้น), V (บดขยี้) ยิ่งตัวเลขสูง (III-V) ยิ่งเสี่ยงกระดูกหยุดโต (Physeal arrest)"
    },
    radiographicLines: [
      { name: { en: "Thurston-Holland Fragment", th: "ชิ้นกระดูกสามเหลี่ยม Thurston-Holland" }, criteria: { en: "Metaphyseal triangular spike pathognomonic for Type II.", th: "ชิ้นกระดูกสามเหลี่ยมที่ Metaphysis ใน Type II" } },
      { name: { en: "Physeal Widening", th: "ช่องว่าง Physis กว้างผิดปกติ" }, criteria: { en: "Compare with uninjured contralateral side in Type I.", th: "เทียบกับข้างปกติเพื่อตรวจหาช่องว่างที่กว้างขึ้นใน Type I" } }
    ],
    types: [
      {
        type: "Type I",
        name: { en: "Salter-Harris I (Straight Across)", th: "Type I (แยกขนานแนว Physis)" },
        pathology: { en: "Physis separation through hypertrophic zone without bone fracture.", th: "แผ่น Physis แยกตัวตามแนวขวาง ไม่แตกเข้าเนื้อกระดูกแข็ง" },
        radiology: { en: "Often normal X-ray; diagnosed by localized physeal point tenderness.", th: "ฟิล์มมักดูปกติ วินิจฉัยจากจุดกดเจ็บบนแนว Physis ชัดเจน" },
        treatment: {
          conservative: { en: "Cast immobilization for 3-4 weeks. Excellent prognosis.", th: "ใส่เฝือก 3-4 สัปดาห์ พยากรณ์โรคดีเยี่ยม" },
          operative: { en: "Smooth K-wires only if grossly unstable.", th: "ยึดด้วยลวดเรียบ (Smooth K-wires) เฉพาะเคสที่หลุดง่าย" },
          preferred: "conservative"
        }
      },
      {
        type: "Type II",
        name: { en: "Salter-Harris II (Above into Metaphysis)", th: "Type II (ผ่าน Physis ขึ้น Metaphysis)" },
        pathology: { en: "Fracture along physis exiting through metaphysis (Thurston-Holland fragment). Most common (~75%).", th: "รอยหักวิ่งตาม Physis แล้วเฉียงขึ้น Metaphysis พบบ่อยที่สุด (~75%)" },
        radiology: { en: "Classic Thurston-Holland triangular metaphyseal spike.", th: "เห็นชิ้นกระดูกสามเหลี่ยม Thurston-Holland ชัดเจน" },
        treatment: {
          conservative: { en: "Closed reduction and long cast for 3-6 weeks.", th: "ดัดจัดกระดูกและใส่เฝือก 3-6 สัปดาห์" },
          operative: { en: "Percutaneous pinning if unstable post-reduction.", th: "ใส่ลวด K-wire ยึดหากเลื่อนหลุดง่าย" },
          preferred: "conservative"
        }
      },
      {
        type: "Type III",
        name: { en: "Salter-Harris III (Lower into Epiphysis / Joint)", th: "Type III (ผ่าน Physis ลง Epiphysis เข้าข้อ)" },
        pathology: { en: "Intra-articular split through epiphysis (e.g. Tillaux fracture).", th: "รอยหักผ่านผิวข้อ Epiphysis (เช่น Tillaux ankle fracture)" },
        radiology: { en: "Vertical intra-articular epiphyseal step-off with open physis.", th: "เห็นรอยแยกแนวดิ่งที่ผิวข้อ Epiphysis" },
        treatment: {
          conservative: { en: "Cast only if completely undisplaced (< 1-2 mm step-off).", th: "ใส่เฝือกเฉพาะกรณีไม่เคลื่อน (< 1-2 มม.)" },
          operative: { en: "ORIF / Epiphyseal screw parallel to physis to restore articular congruity.", th: "ผ่าตัดเปิดยึดสกรูขนานกับ Physis เพื่อผิวข้อเรียบสนิท" },
          preferred: "operative"
        }
      },
      {
        type: "Type IV",
        name: { en: "Salter-Harris IV (Through All 3 Zones)", th: "Type IV (ทะลุผ่าน Metaphysis + Physis + Epiphysis)" },
        pathology: { en: "Intra-articular fracture crossing metaphysis, physis, and epiphysis (e.g. Lateral condyle).", th: "รอยหักตัดผ่านทะลุทั้ง 3 ชั้น (เช่น Lateral condyle humerus)" },
        radiology: { en: "Oblique fracture line crossing from metaphysis into joint.", th: "รอยหักเฉียงทะลุจากเนื้อกระดูกส่วนบนลงสู่ผิวข้อ" },
        treatment: {
          conservative: { en: "Rarely indicated; high risk of physeal bony bridge.", th: "ใช้น้อยมาก เสี่ยงเกิดสะพานกระดูกเชื่อมเร็ว" },
          operative: { en: "Anatomical ORIF with smooth pins/screws.", th: "ผ่าตัดจัดเรียงกระดูกเข้าที่สนิท (ORIF) ยึดด้วยลวด/สกรู" },
          preferred: "operative"
        }
      },
      {
        type: "Type V",
        name: { en: "Salter-Harris V (Crush / Compression)", th: "Type V (แรงอัดบดขยี้ Physis)" },
        pathology: { en: "Severe axial compression crushing germinal growth cells. High rate of growth arrest.", th: "แรงกระแทกในแนวดิ่งบดขยี้เซลล์ต้นกำเนิด Physis ทำให้กระดูกหยุดโต" },
        radiology: { en: "Initial X-ray often falsely normal; diagnosed when growth arrest develops.", th: "ฟิล์มแรกรับมักดูปกติ มักวินิจฉัยเมื่อพบกระดูกหยุดโตในภายหลัง" },
        treatment: {
          conservative: { en: "Non-weightbearing cast. Warn parents of growth arrest.", th: "ใส่เฝือกห้ามลงน้ำหนัก และแจ้งผู้ปกครองเรื่องความเสี่ยงกระดูกหยุดโต" },
          operative: { en: "Late corrective osteotomy or physeal bar resection.", th: "ผ่าตัดแก้ไขในภายหลังเมื่อกระดูกโก่งหรือสั้น" },
          preferred: "conservative"
        }
      }
    ],
    investigations: [
      {
        name: "Dedicated AP & Lateral Views (with Contralateral Comparison)",
        details: {
          en: "Standard 2-view radiographs of the injured extremity. Comparison views of the contralateral normal limb are highly useful in subtle Type I and V physeal widening/compression.",
          th: "ภาพเอกซเรย์ท่าหน้าหลัง (AP) และด้านข้าง (Lateral) มาตรฐาน แนะนำให้ถ่ายเทียบกับข้างปกติเพื่อตรวจหาช่องว่าง Physis ที่กว้างหรือแคบลงใน Type I และ V"
        }
      },
      {
        name: "High-Resolution CT / 3D Reconstruction",
        details: {
          en: "Indicated for complex intra-articular physeal fractures (Type III and IV, e.g. Tillaux & Triplane) to accurately measure articular step-off (< 2mm).",
          th: "แนะนำทำเอกซเรย์คอมพิวเตอร์ CT Scan 3D ในรอยหักเข้าข้อ Type III และ IV (เช่น Tillaux และ Triplane) เพื่อวัดขนาดรอยแยกผิวข้อ"
        }
      },
      {
        name: "MRI Physeal Mapping (Physeal Bridge Assessment)",
        details: {
          en: "MRI accurately visualizes partial physeal arrest and mapping of bony bridge / bar formation for potential surgical resection.",
          th: "การตรวจ MRI สามารถสร้างแผนที่สะพานกระดูก (Physeal Bar) เพื่อวางแผนผ่าตัดตัดสะพานกระดูกออก (Langenskiöld bar resection)"
        }
      }
    ],
    redFlags: [
      { en: "Never place threaded hardware across an open physis (causes iatrogenic growth arrest).", th: "ห้ามใส่สกรูหรือลวดเกลียวข้ามแผ่น Physis เพราะจะทำลายการเติบโตถาวร" }
    ]
  },
  {
    id: "gartland-supracondylar",
    hub: "trauma",
    ageStage: "child",
    ageRange: { en: "Peak 5 - 8 yrs", th: "พบบ่อยช่วง 5 - 8 ปี" },
    urgency: "emergency",
    title: { en: "Supracondylar Humerus (Gartland)", th: "กระดูกเหนือข้อศอกหัก (Gartland Classification)" },
    subtitle: { en: "Most common surgical elbow fracture in children", th: "รอยหักข้อศอกที่พบบ่อยที่สุดและต้องระวังเส้นเลือด/ประสาทสูงสุด" },
    corePrinciple: {
      en: "Gartland: Type I (Undisplaced), Type II (Hinged posterior cortex), Type III (Completely displaced), Type IV (Multi-directional instability). Always assess radial pulse and AIN nerve ('OK' sign).",
      th: "Gartland: I (ไม่เลื่อน), II (กระดูกด้านหลังยังติด), III (หลุดแยกสมบูรณ์), IV (หลวมทุกทิศทาง) ต้องตรวจคลำชีพจร Radial และตรวจเส้นประสาท AIN (ทำท่า 'OK sign') เสมอ"
    },
    radiographicLines: [
      { name: { en: "Anterior Humeral Line (AHL)", th: "เส้น Anterior Humeral Line" }, criteria: { en: "Must pass through middle 1/3 of capitellum on lateral X-ray.", th: "ต้องลากผ่าน 1/3 กลางของ Capitellum ในฟิล์ม Lateral" }, normalValue: "Middle 1/3 capitellum" },
      { name: { en: "Baumann's Angle", th: "มุม Baumann (Coronal)" }, criteria: { en: "Angle between humeral shaft and lateral condyle physis (Normal 70°-75°). >80° indicates cubitus varus.", th: "ปกติ 70°-75° หากกว้างเกิน 80° แสดงว่ามีข้อศอกโก่งเข้าใน (Gunstock deformity)" }, normalValue: "70° - 75°" }
    ],
    types: [
      {
        type: "Type I",
        name: { en: "Gartland I (Undisplaced)", th: "Type I (ไม่เลื่อนตำแหน่ง / รอยร้าว)" },
        pathology: { en: "Undisplaced hairline fracture. Intact cortices with posterior fat pad sign.", th: "รอยร้าวไม่เลื่อนตำแหน่ง เห็นเพียง Posterior fat pad (Sail sign)" },
        radiology: { en: "AHL bisects middle 1/3 capitellum. Visible fat pad sign.", th: "เส้น AHL ยังผ่ากลาง Capitellum ปกติ" },
        treatment: {
          conservative: { en: "Long arm splint/cast at 80°-90° flexion for 3 weeks.", th: "ใส่เฝือกแขนยาวงอศอก 80°-90° เป็นเวลา 3 สัปดาห์" },
          operative: { en: "Not indicated unless secondary displacement occurs.", th: "ไม่ต้องผ่าตัด" },
          preferred: "conservative"
        }
      },
      {
        type: "Type II",
        name: { en: "Gartland II (Angulated with Posterior Hinge)", th: "Type II (หักงอแต่คอร์เท็กซ์ด้านหลังยังติด)" },
        pathology: { en: "Angulated extension fracture with intact posterior cortex. IIA (no rotation), IIB (rotational deformity).", th: "รอยหักงอไปด้านหลังแต่กระดูกด้านหลังยังติด แบ่งเป็น IIA (ไม่บิด) และ IIB (มีบิดหมุน)" },
        radiology: { en: "AHL passes anterior to capitellum. Intact posterior cortex.", th: "เส้น AHL ลากผ่านด้านหน้าของ Capitellum" },
        treatment: {
          conservative: { en: "Cast at >90° flexion ONLY if minimal swelling and normal pulse.", th: "เข้าเฝืองอศอก >90° ได้เฉพาะเคสบวมน้อยและชีพจรปกติ" },
          operative: { en: "Closed Reduction & Percutaneous Pinning (CRPP) with 2-3 lateral pins (Standard of care).", th: "ดัดเข้าที่และยึดลวด K-wires 2-3 เส้นด้านข้าง (CRPP - วิธีมาตรฐาน)" },
          preferred: "operative"
        }
      },
      {
        type: "Type III",
        name: { en: "Gartland III (Completely Displaced)", th: "Type III (หลุดแยกจากกันสมบูรณ์)" },
        pathology: { en: "Complete disruption of anterior and posterior cortices. Posteromedial (75%) or posterolateral (25%).", th: "กระดูกหักขาดออกจากกันทั้งด้านหน้าและหลัง เลื่อนตำแหน่งรุนแรง" },
        radiology: { en: "Complete displacement with no cortical contact.", th: "ชิ้นกระดูกหลุดแยก ไม่มีการสัมผัสกันของขอบกระดูก" },
        treatment: {
          conservative: { en: "Contraindicated due to high cubitus varus and nerve injury risk.", th: "ห้ามรักษาแบบอนุรักษ์นิยม" },
          operative: { en: "Urgent CRPP with divergent lateral or crossed K-wires under fluoroscopy.", th: "ผ่าตัดดัดเข้าที่และยึดลวด K-wires ด่วน (CRPP)" },
          preferred: "operative"
        }
      },
      {
        type: "Type IV",
        name: { en: "Gartland IV (Multi-Directional Instability)", th: "Type IV (หลุดหลวมไม่มั่นคงทุกทิศทาง)" },
        pathology: { en: "360° periosteal disruption. Unstable in both flexion and extension.", th: "เยื่อหุ้มกระดูกฉีกขาดรอบทิศ 360° หลุดหลวมทั้งท่างอและเหยียด" },
        radiology: { en: "Gross multi-planar instability on fluoroscopy.", th: "ข้อศอกหลวมหลุดชัดเจนขณะดัดตรวจใต้ C-arm" },
        treatment: {
          conservative: { en: "Strictly contraindicated.", th: "ห้ามเด็ดขาด" },
          operative: { en: "CRPP with crossed pins or multi-pin lateral divergent construct.", th: "ผ่าตัดยึดลวด K-wires หลายเส้นเพื่อความมั่นคงสูงสุด" },
          preferred: "operative"
        }
      }
    ],
    investigations: [
      {
        name: "True Lateral Elbow Radiograph (at 90° Flexion)",
        details: {
          en: "Gold standard for assessing the Anterior Humeral Line (AHL), which must pass through the middle third of the capitellum in normal alignment, and identifying the posterior fat pad sign (Sail sign).",
          th: "ภาพเอกซเรย์ท่าด้านข้าง (True Lateral) เป็นวิธีหลักในการตรวจเส้น Anterior Humeral Line (AHL) ซึ่งต้องผ่า 1/3 กลางของ Capitellum และตรวจหาเงาไขมัน Sail sign"
        }
      },
      {
        name: "True AP Elbow Radiograph",
        details: {
          en: "Measures Baumann's angle (normal 70°-75°) to assess coronal plane alignment and medial column comminution.",
          th: "ภาพเอกซเรย์ท่าหน้าหลัง (AP) ใช้วัดมุม Baumann's angle (ปกติ 70°-75°) เพื่อประเมินมุมเอียงซ้ายขวาและการยุบของคอลัมน์ด้านใน"
        }
      },
      {
        name: "Vascular Doppler Ultrasound",
        details: {
          en: "Indicated in pink or white pulseless hands to verify brachial artery flow before and after reduction.",
          th: "ตรวจคลื่นเสียงความถี่สูง Doppler ในรายที่คลำชีพจรไม่พบ เพื่อประเมินการไหลเวียนเลือดของหลอดเลือด Brachial artery ทั้งก่อนและหลังดัดกระดูก"
        }
      }
    ],
    redFlags: [
      { en: "Pink Pulseless Hand: Well-perfused hand without pulse $\rightarrow$ Urgent gentle reduction in OR.", th: "Pink Pulseless Hand: มือกดเล็บคืนตัวดีแต่คลำชีพจรไม่พบ $\rightarrow$ รีบดัดกระดูกเข้าที่ในห้องผ่าตัดอย่างนุ่มนวล" },
      { en: "White/Cold Pulseless Hand: Vascular emergency (Brachial artery entrapment) $\rightarrow$ Urgent surgical exploration if pulse does not return.", th: "White/Cold Pulseless Hand: มือขาวซีด เย็น ขาดเลือด $\rightarrow$ ฉุกเฉิน ต้องผ่าตัดสำรวจหลอดเลือดทันที" },
      { en: "AIN Nerve Palsy: Inability to make 'OK sign' (FPL & FDP weakness).", th: "เส้นประสาท AIN บาดเจ็บ: ผู้ป่วยทำท่า 'OK sign' ไม่ได้ (มักหายเองใน 3-6 เดือน)" }
    ]
  },
  {
    id: "pediatric-forearm",
    hub: "trauma",
    ageStage: "child",
    ageRange: { en: "2 - 12 yrs", th: "2 - 12 ปี (พบบ่อยที่สุดใน ER)" },
    urgency: "routine",
    title: { en: "Pediatric Forearm & Wrist Fractures", th: "กระดูกปลายแขนและข้อมือหักในเด็ก" },
    subtitle: { en: "Torus (Buckle) vs. Greenstick vs. Complete fractures", th: "การจำแนก Torus (Buckle), Greenstick และ Complete fractures" },
    corePrinciple: {
      en: "Torus (Buckle) fractures involve stable compression of one cortex and heal with simple splinting. Greenstick fractures break one cortex with plastic bending of the opposite cortex and require completion/reduction.",
      th: "Torus (Buckle) เกิดจากแรงอัด ขอบกระดูกโก่งนูนด้านเดียว มั่นคงมาก ใส่เฝือกอ่อนหายสนิท; Greenstick หักทะลุด้านหนึ่งส่วนอีกด้านดัดงอเป็นพลาสติก ต้องดัดคืนรูป"
    },
    types: [
      {
        type: "Torus (Buckle)",
        name: { en: "Torus / Buckle Fracture", th: "Torus / Buckle Fracture (ขอบกระดูกโก่งนูน)" },
        pathology: { en: "Compressive loading wrinkling one cortex with intact opposite cortex. Completely stable.", th: "เกิดจากแรงอัด ขอบกระดูกด้านหนึ่งย่นโป่งออก อีกด้านสมบูรณ์ มั่นคงดีเยี่ยม" },
        radiology: { en: "Smooth cortical bulge or buckle without fracture line.", th: "เห็นขอบกระดูกโป่งนูนออกมา ไม่มีรอยแตกแยก" },
        treatment: {
          conservative: { en: "Removable velcro wrist splint for 3-4 weeks. No routine follow-up X-rays needed.", th: "ใส่เฝือกอ่อนดามข้อมือ 3-4 สัปดาห์ ไม่จำเป็นต้องเอกซเรย์ซ้ำ" },
          operative: { en: "Contraindicated.", th: "ไม่ต้องผ่าตัด" },
          preferred: "conservative"
        }
      },
      {
        type: "Greenstick",
        name: { en: "Greenstick Fracture", th: "Greenstick Fracture (หักด้านเดียวเหมือนกิ่งไม้สด)" },
        pathology: { en: "Tension cortex breaks completely while compression cortex remains intact with plastic deformation.", th: "ขอบกระดูกด้านหนึ่งหักขาด อีกด้านหนึ่งโก่งงอแต่ไม่ขาดออกจากกัน" },
        radiology: { en: "Unicortical fracture line with angulation deformity.", th: "เห็นรอยหักทะลุเพียงขอบเดียวพร้อมมุมโก่งงอ" },
        treatment: {
          conservative: { en: "Closed reduction (reversing deformity) and long arm cast for 6 weeks.", th: "ดัดจัดแนวกระดูกให้ตรงและใส่เฝือกแขนยาว 6 สัปดาห์" },
          operative: { en: "Rarely needed unless irreducible.", th: "ผ่าตัดเฉพาะกรณีดัดไม่เข้า" },
          preferred: "conservative"
        }
      },
      {
        type: "Complete / Both Bones",
        name: { en: "Complete Both Bones Forearm", th: "กระดูกหักขาดทั้งสองท่อน (Complete BBFA)" },
        pathology: { en: "Both radius and ulna cortices completely disrupted.", th: "กระดูกเรเดียสและอัลนาหักขาดออกจากกันสมบูรณ์ทั้งสองท่อน" },
        radiology: { en: "Complete displacement/angulation of both bones.", th: "กระดูกเลื่อนหลุดและเกยกันชัดเจน" },
        treatment: {
          conservative: { en: "Closed reduction and long cast if within acceptable remodeling limits.", th: "ดัดจัดกระดูกและใส่เฝือกยาวหากมุมเอียงอยู่ในเกณฑ์ Remodel" },
          operative: { en: "Titanium Elastic Nails (TENs) or intramedullary pinning if unstable.", th: "ใส่ลวดดามกระดูก TENs หากเลื่อนหลุดซ้ำหลังดัด" },
          preferred: "conservative"
        }
      }
    ],
    investigations: [
      {
        name: "Full Length AP & Lateral Forearm (Wrist to Elbow)",
        details: {
          en: "Must include true wrist and elbow joints on both AP and lateral views to evaluate radiocapitellar alignment (rule out Monteggia) and DRUJ congruity (rule out Galeazzi).",
          th: "ต้องถ่ายให้เห็นทั้งข้อศอกและข้อมือทั้งในท่า AP และ Lateral เพื่อตรวจแนว Radiocapitellar line (แยก Monteggia) และตรวจข้อ DRUJ (แยก Galeazzi)"
        }
      }
    ]
  },
  {
    id: "pediatric-lateral-condyle",
    hub: "trauma",
    ageStage: "child",
    ageRange: { en: "4 - 10 yrs", th: "4 - 10 ปี" },
    urgency: "urgent",
    title: { en: "Pediatric Lateral Condyle (Milch & Jakob)", th: "กระดูกปุ่มข้อศอกด้านนอกหัก (Milch & Jakob)" },
    subtitle: { en: "Second most common pediatric elbow fracture; high nonunion risk", th: "รอยหักข้อศอกที่พบบ่อยอันดับสอง เสี่ยงกระดูกไม่ติด (Nonunion) และศอกโก่งสูง" },
    corePrinciple: {
      en: "Jakob Stages: Stage I (<2mm displacement, articular cartilage intact), Stage II (2-4mm, cartilage disrupted), Stage III (>4mm, fragment rotated and flipped out of joint).",
      th: "ระบบ Jakob: Stage I (เลื่อน <2 มม. ผิวข้อยังดี), Stage II (เลื่อน 2-4 มม. ผิวข้อเริ่มแยก), Stage III (เลื่อน >4 มม. ชิ้นกระดูกหมุนกลับด้าน 180° หลุดนอกข้อ)"
    },
    types: [
      {
        type: "Stage I",
        name: { en: "Jakob Stage I (< 2mm)", th: "Stage I (ไม่เลื่อนตำแหน่ง < 2 มม.)" },
        pathology: { en: "Fracture line with < 2mm gap; articular surface intact.", th: "รอยหักเลื่อนน้อยกว่า 2 มม. ผิวข้อด้านในยังติดกันอยู่" },
        radiology: { en: "Thin hairline on internal oblique elbow view.", th: "เห็นรอยร้าวบางๆ ชัดที่สุดในท่า Internal Oblique view" },
        treatment: {
          conservative: { en: "Long arm cast for 4-6 weeks with weekly oblique radiographs to rule out late displacement.", th: "ใส่เฝือกแขนยาว 4-6 สัปดาห์ ถ่ายภาพเอกซเรย์ทุกสัปดาห์เพื่อดูการเลื่อนหลุด" },
          operative: { en: "Pinning if displacement increases > 2mm.", th: "ใส่ลวด K-wire หากเลื่อนเกิน 2 มม." },
          preferred: "conservative"
        }
      },
      {
        type: "Stage II",
        name: { en: "Jakob Stage II (2 - 4mm)", th: "Stage II (เลื่อน 2 - 4 มม.)" },
        pathology: { en: "Articular cartilage disrupted but not rotated.", th: "ผิวข้อแยกขาดออกจากกัน แต่ชิ้นกระดูกยังไม่หมุนกลับด้าน" },
        radiology: { en: "Distinct lateral gap and articular step-off.", th: "เห็นรอยแยกที่ขอบนอกและผิวข้อชัดเจน" },
        treatment: {
          conservative: { en: "Not recommended; high nonunion rate.", th: "ไม่แนะนำเพราะเสี่ยงกระดูกไม่ติดสูง" },
          operative: { en: "CRPP with arthrogram or open reduction (ORIF).", th: "ผ่าตัดจัดกระดูกยึดลวด K-wires (CRPP/ORIF)" },
          preferred: "operative"
        }
      },
      {
        type: "Stage III",
        name: { en: "Jakob Stage III (Rotated > 4mm)", th: "Stage III (หลุดแยกและหมุนกลับด้าน > 4 มม.)" },
        pathology: { en: "Fragment completely rotated 180° out of joint by extensor muscles.", th: "ชิ้นกระดูกหลุดและถูกกล้ามเนื้อดึงหมุนกลับทิศ ผิวข้อหงายออกด้านนอก" },
        radiology: { en: "Capitellum pointing laterally or posteriorly.", th: "เห็น Capitellum หงายออกนอกข้อศอกชัดเจน" },
        treatment: {
          conservative: { en: "Strictly contraindicated.", th: "ห้ามเด็ดขาด" },
          operative: { en: "Anatomical ORIF. Preserve posterior blood supply dissection.", th: "ผ่าตัดเปิดจัดเรียงกระดูก (ORIF) โดยห้ามเลาะเนื้อเยื่อด้านหลังเพื่อรักษาเส้นเลือด" },
          preferred: "operative"
        }
      }
    ],
    investigations: [
      {
        name: "Internal Oblique Elbow Radiograph (45°)",
        details: {
          en: "The single most sensitive and critical radiographic projection for detecting maximum displacement and articular gap in lateral condyle fractures.",
          th: "ภาพเอกซเรย์ท่าเฉียงเข้าใน (Internal Oblique) เป็นท่าที่มีความไวสูงสุดในการตรวจหารอยแยกและระยะเลื่อนของปุ่มข้อศอกด้านนอก"
        }
      },
      {
        name: "Intraoperative Elbow Arthrogram",
        details: {
          en: "Contrast injected into elbow joint under fluoroscopy to assess articular cartilage surface continuity in Jakob Stage I and II.",
          th: "ฉีดสารทึบรังสีเข้าข้อศอกขณะผ่าตัดใต้ C-arm เพื่อตรวจดูว่ากระดูกอ่อนผิวข้อฉีกขาดหรือไม่"
        }
      }
    ]
  },
  {
    id: "pediatric-femur-shaft",
    hub: "trauma",
    ageStage: "all",
    ageRange: { en: "0 - 16 yrs", th: "0 - 16 ปี (แบ่งการรักษาตามอายุชัดเจน)" },
    urgency: "urgent",
    title: { en: "Pediatric Femur Shaft (Age Guidelines)", th: "กระดูกต้นขาหักในเด็ก (แนวทางการรักษาตามอายุ)" },
    subtitle: { en: "Treatment dictated strictly by patient age and weight", th: "แนวทางการรักษาจำแนกตามช่วงอายุและน้ำหนักตัวเด็กอย่างแม่นยำ" },
    corePrinciple: {
      en: "< 6 months: Pavlik Harness; 6 months - 5 years: Early Hip Spica Cast (accept 1-2cm shortening); 5 - 11 years: Titanium Elastic Nails (TENs); > 11 years (> 50kg): Rigid Lateral Trochanteric IM Nail.",
      th: "< 6 เดือน: สายรัด Pavlik; 6 เดือน - 5 ปี: เข้าเฝือกสะโพก Spica Cast (ยอมรับเกยกันได้ 1-2 ซม.); 5 - 11 ปี: ลวดดาม TENs; > 11 ปี (> 50 กก.): แกนดามกระดูก Rigid IM Nail ชนิดเข้าทาง Lateral Trochanter"
    },
    types: [
      {
        type: "< 6 Months",
        name: { en: "Infant (< 6 months)", th: "ทารกแรกเกิด (< 6 เดือน)" },
        pathology: { en: "High remodeling capacity; rapid callus in 3-4 weeks.", th: "กระดูกสร้างใหม่งอกเร็วมากใน 3-4 สัปดาห์" },
        radiology: { en: "Diaphyseal fracture.", th: "รอยหักแกนกระดูกต้นขา" },
        treatment: {
          conservative: { en: "Pavlik Harness or modified splint for 3-4 weeks.", th: "ใส่สายรัด Pavlik harness 3-4 สัปดาห์" },
          operative: { en: "Not indicated.", th: "ไม่ต้องผ่าตัด" },
          preferred: "conservative"
        }
      },
      {
        type: "6m - 5 Years",
        name: { en: "Toddler (6 months - 5 years)", th: "เด็กเล็ก (6 เดือน - 5 ปี)" },
        pathology: { en: "Hypervascular overgrowth of 1-2 cm occurs over 18 months.", th: "มีแนวโน้ม Overgrowth ขาจะยาวขึ้น 1-2 ซม. หลังหัก" },
        radiology: { en: "Spiral/oblique fracture.", th: "รอยหักเฉียงหรือเกลียว" },
        treatment: {
          conservative: { en: "Immediate or early Hip Spica Cast (1-2 cm shortening is desired!).", th: "ดัดจัดกระดูกและใส่เฝือก Hip Spica Cast (ตั้งใจให้ขาสั้นเกยกัน 1-2 ซม.)" },
          operative: { en: "Flexible nails only for polytrauma or open fractures.", th: "ผ่าตัดเฉพาะเคสบาดเจ็บหลายระบบ" },
          preferred: "conservative"
        }
      },
      {
        type: "5 - 11 Years",
        name: { en: "School Age (5 - 11 yrs / < 50 kg)", th: "เด็กโต (5 - 11 ปี / น้ำหนัก < 50 กก.)" },
        pathology: { en: "School-age children where Spica cast causes social and mobility burden.", th: "เด็กวัยเรียนที่ไม่เหมาะกับการเข้าเฝือก Spica ยาวนาน" },
        radiology: { en: "Diaphyseal fracture.", th: "รอยหักบริเวณกึ่งกลางกระดูกต้นขา" },
        treatment: {
          conservative: { en: "Traction followed by cast (rarely used).", th: "ดึงถ่วงน้ำหนัก (ปัจจุบันใช้น้อยมาก)" },
          operative: { en: "Titanium Elastic Nails (TENs) - 2 retrograde flexible nails (each nail = 40% of canal diameter).", th: "ผ่าตัดใส่ลวดดามกระดูก Titanium Elastic Nails (TENs) 2 เส้น" },
          preferred: "operative"
        }
      },
      {
        type: "> 11 Years",
        name: { en: "Adolescent (> 11 yrs / > 50 kg)", th: "วัยรุ่น (> 11 ปี / น้ำหนัก > 50 กก.)" },
        pathology: { en: "Approaching adult skeleton; flexible nails fail under high load.", th: "วัยรุ่นน้ำหนักตัวมาก ลวด TENs จะรับน้ำหนักไม่ไหว" },
        radiology: { en: "Adult-pattern femoral shaft fracture.", th: "รอยหักรูปแบบเดียวกับผู้ใหญ่" },
        treatment: {
          conservative: { en: "Not indicated.", th: "ไม่แนะนำ" },
          operative: { en: "Rigid Lateral Trochanteric Entry IM Nail (never piriformis fossa to prevent AVN).", th: "ใส่แกนดามกระดูกแข็งเข้าทาง Lateral Trochanter (ห้ามเข้าทาง Piriformis fossa เด็ดขาดเพื่อป้องกัน AVN)" },
          preferred: "operative"
        }
      }
    ],
    investigations: [
      {
        name: "Full Length AP & Lateral Femur (Hip to Knee)",
        details: {
          en: "Must include hip and knee joints to evaluate rotational alignment, bayonet apposition shortening, and exclude ipsilateral femoral neck fractures.",
          th: "ต้องถ่ายให้เห็นทั้งข้อสะโพกและข้อเข่า เพื่อประเมินการบิดหมุน ความสั้นที่เกยกัน และแยกภาวะคอกระดูกต้นขาหักร่วมด้วย"
        }
      },
      {
        name: "Full Skeletal Survey (Child Abuse Screening)",
        details: {
          en: "Mandatory in infants < 1 year presenting with femur fracture to rule out non-accidental trauma (multiple healing fractures of different ages, metaphyseal corner fractures).",
          th: "จำเป็นต้องตรวจชุดเอกซเรย์ Skeletal Survey ทั่วตัวในเด็กเล็ก < 1 ขวบ เพื่อคัดกรองการถูกทำร้าย (รอยหักหลายจุดต่างระยะเวลา, รอยหักมุมกระดูก Metaphyseal corner)"
        }
      }
    ],
    redFlags: [
      { en: "Non-Accidental Trauma (NAT): Femur fracture in a non-ambulatory child (< 1 yr) has > 80% association with child abuse! Mandatory full skeletal survey.", th: "สงสัยการทารุณกรรมเด็ก (NAT): กระดูกต้นขาหักในเด็กที่ยังเดินไม่ได้ (< 1 ขวบ) สัมพันธ์กับการถูกทำร้าย > 80% ต้องตรวจ Skeletal survey ทั่วร่างกายทันที" }
    ]
  },
  {
    id: "tillaux-triplane",
    hub: "trauma",
    ageStage: "adolescent",
    ageRange: { en: "12 - 15 yrs", th: "12 - 15 ปี (ช่วงเปลี่ยนผ่านวัยรุ่น)" },
    urgency: "urgent",
    title: { en: "Tillaux & Triplane Ankle Fractures", th: "กระดูกข้อเท้าหักในวัยรุ่น (Tillaux & Triplane)" },
    subtitle: { en: "Transitional ankle fractures occurring during asymmetric physeal closure", th: "รอยหักช่วงเปลี่ยนผ่านจากการที่ Physis ของข้อเท้าค่อยๆ ปิดจากด้านในไปด้านนอก" },
    corePrinciple: {
      en: "Tillaux: Avulsion of anterolateral epiphysis by AITFL (Salter-Harris III). Triplane: 3 planes - sagittal epiphysis, axial physis, coronal metaphysis (Salter-Harris IV).",
      th: "Tillaux: ชิ้นขอบนอก Anterolateral หลุดโดยเอ็น AITFL (Salter III); Triplane: หัก 3 ระนาบ - Epiphysis แนวดิ่ง, Physis แนวนอน, Metaphysis แนวหน้าหลัง (Salter IV)"
    },
    types: [
      {
        type: "Tillaux",
        name: { en: "Tillaux Fracture (Salter III)", th: "Tillaux Fracture (Salter-Harris Type III)" },
        pathology: { en: "Avulsion of anterolateral distal tibial epiphysis (Chaput tubercle) by AITFL during external rotation.", th: "ชิ้นกระดูกขอบหน้าด้านนอกของ Epiphysis ถูกเอ็น AITFL ดึงหลุดจากการบิดหมุนข้อเท้าออกนอก" },
        radiology: { en: "Vertical epiphyseal fracture on AP ankle with open lateral physis. CT scan recommended.", th: "เห็นรอยหักแนวดิ่งผ่าน Epiphysis ด้านนอก แนะนำทำ CT scan" },
        treatment: {
          conservative: { en: "Long leg cast if joint step-off < 2 mm.", th: "ใส่เฝือกยาวหากผิวข้อเรียบหรือแยก < 2 มม." },
          operative: { en: "Percutaneous or open epiphyseal screw parallel to joint if step-off >= 2 mm.", th: "ผ่าตัดยึดสกรูขนานกับผิวข้อหากรอยแยก >= 2 มม." },
          preferred: "operative"
        }
      },
      {
        type: "Triplane",
        name: { en: "Triplane Fracture (Salter IV)", th: "Triplane Fracture (หัก 3 ระนาบ - Salter IV)" },
        pathology: { en: "Multi-planar fracture: 1. Sagittal epiphysis, 2. Axial physis, 3. Coronal posterior metaphysis.", th: "รอยหักซับซ้อน 3 ระนาบ: Epiphysis แนวดิ่ง, Physis แนวนอน, Metaphysis ด้านหลัง" },
        radiology: { en: "AP resembles Salter III; Lateral resembles Salter II. 3D CT scan is standard.", th: "ภาพ AP เหมือน Salter III แต่ภาพ Lateral เหมือน Salter II ต้องทำ 3D CT scan เสมอ" },
        treatment: {
          conservative: { en: "Long leg cast only if CT confirms perfect anatomical reduction (< 2mm).", th: "ใส่เฝือกยาวเฉพาะกรณี CT ยืนยันว่าผิวข้อเรียบสนิท < 2 มม." },
          operative: { en: "ORIF / Percutaneous cannulated screw fixation of epiphyseal and metaphyseal fragments.", th: "ผ่าตัดยึดสกรู Cannulated screws ทั้งส่วนผิวข้อและกระดูกด้านหลัง" },
          preferred: "operative"
        }
      }
    ],
    investigations: [
      {
        name: "3-View Ankle Series (AP, Mortise, Lateral)",
        details: {
          en: "Mortise view clearly reveals the vertical epiphyseal fracture line in Tillaux; lateral view shows posterior metaphyseal spike in Triplane.",
          th: "ภาพ Mortise view จะเห็นรอยแยกแนวดิ่งของ Tillaux ได้ชัดเจนที่สุด ส่วนภาพ Lateral จะเห็นชิ้นกระดูกสามเหลี่ยมด้านหลังของ Triplane"
        }
      },
      {
        name: "3D Multi-Slice CT Ankle Scan",
        details: {
          en: "Gold standard investigation to assess intra-articular step-off and plan percutaneous or open screw trajectories.",
          th: "การตรวจ CT Scan 3D เป็นวิธีมาตรฐานในการวัดขนาดรอยแยกผิวข้อและวางแผนตำแหน่งใส่สกรูยึด"
        }
      }
    ]
  },
  {
    id: "toddler-fracture",
    hub: "trauma",
    ageStage: "toddler",
    ageRange: { en: "9 months - 3 yrs", th: "9 เดือน - 3 ปี (ช่วงเริ่มหัดเดิน)" },
    urgency: "routine",
    title: { en: "Toddler's Fracture (CAST Fracture)", th: "กระดูกหน้าแข้งร้าวในเด็กหัดเดิน (Toddler's Fracture)" },
    subtitle: { en: "Undisplaced spiral tibial fracture in ambulatory infant refusing to bear weight", th: "รอยหักบิดเกลียวแบบไม่เลื่อนในเด็กเล็ก มักมาด้วยอาการจู่ๆ ไม่ยอมลงน้ำหนักที่ขา" },
    corePrinciple: {
      en: "Nondisplaced spiral/oblique fracture of distal 1/3 tibia caused by low-energy twisting. Classic presentation: Child suddenly limps or refuses to walk after minor fall. Initial X-ray may be completely normal!",
      th: "รอยหักเกลียวบางๆ บริเวณ 1/3 ล่างของหน้าแข้ง เกิดจากแรงบิดเบาๆ อาการสำคัญคือเด็กจู่ๆ ไม่ยอมยืนลงน้ำหนัก ฟิล์มวันแรกอาจดูปกติสมบูรณ์!"
    },
    types: [
      {
        type: "Classic Toddler's",
        name: { en: "Classic Toddler's Fracture", th: "รอยหัก Toddler's Fracture แบบคลาสสิก" },
        pathology: { en: "Hairline spiral fracture of distal tibia with intact fibula and periosteum.", th: "รอยร้าวเส้นผมบางๆ ที่หน้าแข้งส่วนล่าง กระดูก Fibula ยังปกติ" },
        radiology: { en: "Faint hairline on internal oblique view. Callus visible at 10-14 days on follow-up.", th: "เห็นรอยร้าวบางๆ ในท่า Internal Oblique หรือเห็น Callus กระดูกใหม่งอกใน 10-14 วัน" },
        treatment: {
          conservative: { en: "Long leg or short leg walking cast for 3-4 weeks. 100% full recovery without growth complications.", th: "ใส่เฝือก 3-4 สัปดาห์ หายสนิท 100% โดยไม่มีผลเสียต่อการเจริญเติบโต" },
          operative: { en: "Contraindicated.", th: "ห้ามผ่าตัด" },
          preferred: "conservative"
        }
      }
    ],
    investigations: [
      {
        name: "Internal Oblique Tibia / Ankle View",
        details: {
          en: "Most sensitive standard radiographic projection for detecting subtle nondisplaced spiral hairline fractures of the distal tibial shaft.",
          th: "ภาพเอกซเรย์ท่าเฉียงเข้าใน (Internal Oblique) เป็นท่าที่มีความไวสูงสุดในการตรวจหารอยร้าวเกลียวบางๆ ที่หน้าแข้งส่วนปลาย"
        }
      },
      {
        name: "Follow-up Radiograph (10 - 14 Days)",
        details: {
          en: "Subperiosteal new bone formation (callus) becomes clearly visible, confirming the diagnosis when initial radiographs were normal.",
          th: "การถ่ายภาพเอกซเรย์ซ้ำที่ 10-14 วัน จะเห็นกระดูกใหม่งอกพอก (Callus) ชัดเจน ซึ่งช่วยยืนยันการวินิจฉัยในรายที่ฟิล์มวันแรกดูปกติ"
        }
      }
    ]
  },

  // ── HIP DISEASES & THE LIMPING CHILD ──
  {
    id: "septic-hip-kocher",
    hub: "diseases",
    ageStage: "child",
    ageRange: { en: "1 - 10 yrs", th: "1 - 10 ปี (ภาวะฉุกเฉินสูงสุดในเด็กเดินกะเผลก)" },
    urgency: "emergency",
    title: { en: "Septic Hip vs. Transient Synovitis (Kocher)", th: "ข้อสะโพกติดเชื้อ vs. ข้ออักเสบชั่วคราว (เกณฑ์ Kocher)" },
    subtitle: { en: "Emergency bedside triage for the acute limping child", th: "เกณฑ์ตัดสินใจทางคลินิกเพื่อแยกข้อสะโพกติดเชื้อเฉียบพลันที่ต้องเจาะข้อด่วน" },
    corePrinciple: {
      en: "4 Kocher Predictors: 1. Non-weightbearing, 2. Fever > 38.5°C, 3. ESR > 40 mm/hr, 4. WBC > 12,000 /µL. 4/4 criteria = >99% probability of Septic Arthritis requiring urgent arthrocentesis and surgical drainage.",
      th: "เกณฑ์ Kocher 4 ข้อ: 1. เดินลงน้ำหนักไม่ได้, 2. ไข้ > 38.5°C, 3. ESR > 40, 4. WBC > 12,000 หากครบ 4 ข้อ โอกาสเป็นข้อติดเชื้อ >99% ต้องเจาะดูดหนองและผ่าตัดล้างข้อด่วน"
    },
    radiographicLines: [
      { name: { en: "Ultrasound Hip Effusion", th: "อัลตราซาวด์ดูน้ำในข้อสะโพก" }, criteria: { en: "Anterior joint capsule distension > 2mm compared to normal side indicates effusion.", th: "เยื่อหุ้มข้อด้านหน้าโป่งพองเกิน 2 มม. เมื่อเทียบกับข้างปกติ แสดงว่ามีน้ำในข้อสะโพก" } }
    ],
    types: [
      {
        type: "Transient Synovitis",
        name: { en: "Transient Synovitis (Toxic Synovitis)", th: "ข้อสะโพกอักเสบชั่วคราว (Transient Synovitis)" },
        pathology: { en: "Benign, self-limiting reactive synovitis following viral upper respiratory infection. Kocher score 0-1.", th: "การอักเสบชั่วคราวตามหลังการติดเชื้อไวรัสทางเดินหายใจ เกณฑ์ Kocher มักได้ 0-1 ข้อ" },
        radiology: { en: "Mild effusion on ultrasound; normal X-ray.", th: "อัลตราซาวด์อาจพบน้ำเล็กน้อย เอกซเรย์ปกติ" },
        treatment: {
          conservative: { en: "Rest, NSAIDs (Ibuprofen), and observation. Resolves within 7-10 days.", th: "พักผ่อน, ยาลดอักเสบ NSAIDs และสังเกตอาการ อาการจะหายเองใน 7-10 วัน" },
          operative: { en: "Not indicated.", th: "ไม่ต้องผ่าตัด" },
          preferred: "conservative"
        }
      },
      {
        type: "Septic Arthritis",
        name: { en: "Septic Arthritis of the Hip", th: "ข้อสะโพกติดเชื้อเฉียบพลัน (Septic Arthritis)" },
        pathology: { en: "Bacterial infection (Staph aureus, Kingella kingae) with rapid chondrolysis and femoral head destruction within 24-48 hours.", th: "การติดเชื้อแบคทีเรีย เอนไซม์จากเชื้อจะทำลายกระดูกอ่อนหัวสะโพกถาวรใน 24-48 ชั่วโมง" },
        radiology: { en: "Large effusion on ultrasound; widening of teardrop distance on AP pelvis.", th: "อัลตราซาวด์พบน้ำในข้อปริมาณมาก ช่อง Teardrop distance กว้างขึ้น" },
        treatment: {
          conservative: { en: "Contraindicated. Medical emergency.", th: "ห้ามรักษาด้วยยาอย่างเดียว เป็นภาวะฉุกเฉิน" },
          operative: { en: "Urgent ultrasound-guided arthrocentesis $\rightarrow$ Open/Arthroscopic surgical arthrotomy and drainage + IV antibiotics.", th: "เจาะดูดหนองตรวจด่วน $\rightarrow$ ผ่าตัดเปิดระบายหนองล้างข้อสะโพก (Arthrotomy) + ให้ยาฆ่าเชื้อทางหลอดเลือดดำ" },
          preferred: "operative"
        }
      }
    ],
    investigations: [
      {
        name: "High-Frequency Hip Ultrasound (Effusion Assessment)",
        details: {
          en: "Bilateral anterior hip capsule measurement. An anterior capsule distension > 2 mm compared to the contralateral side or absolute capsule thickness > 5 mm indicates joint effusion.",
          th: "การตรวจอัลตราซาวด์ข้อสะโพกทั้งสองข้าง หากเยื่อหุ้มข้อด้านหน้าหนากว่าข้างปกติ > 2 มม. หรือหนารวมเกิน 5 มม. บ่งชี้ว่ามีน้ำคั่งในข้อสะโพก"
        }
      },
      {
        name: "Diagnostic Arthrocentesis (Joint Aspiration)",
        details: {
          en: "Definitive diagnostic procedure. Synovial fluid WBC > 50,000 /µL with > 75% neutrophils, positive Gram stain, or purulent fluid confirms septic arthritis.",
          th: "การเจาะดูดน้ำไขข้อเป็นมาตรฐานสูงสุดในการวินิจฉัย หากเม็ดเลือดขาวในน้ำไขข้อ > 50,000 เซลล์/ลบ.มม. ร่วมกับนิวโทรฟิล > 75% หรือย้อมพบเชื้อ ถือเป็นข้อติดเชื้อชัดเจน"
        }
      }
    ],
    redFlags: [
      { en: "Failure to drain septic hip within 24 hours causes irreversible avascular necrosis and permanent hip destruction.", th: "หากไม่ผ่าตัดระบายหนองข้อสะโพกภายใน 24 ชั่วโมง จะทำให้หัวกระดูกสะโพกขาดเลือดและละลายพิการถาวร" }
    ]
  },
  {
    id: "scfe",
    hub: "diseases",
    ageStage: "adolescent",
    ageRange: { en: "Adolescents (10 - 16 yrs)", th: "10 - 16 ปี (วัยรุ่นตัวโต/น้ำหนักเกิน)" },
    urgency: "emergency",
    title: { en: "Slipped Capital Femoral Epiphysis (SCFE)", th: "หัวกระดูกสะโพกเลื่อนในวัยรุ่น (SCFE)" },
    subtitle: { en: "Most common adolescent hip disorder; high AVN risk", th: "โรคข้อสะโพกที่พบบ่อยที่สุดในวัยรุ่น เสี่ยงหัวกระดูกสะโพกขาดเลือด (AVN)" },
    corePrinciple: {
      en: "Salter-Harris Type I through proximal femur physis. Loder: Stable (can walk) vs Unstable (cannot walk even with crutches; 50% AVN risk). Klein's line on AP pelvis fails to intersect lateral epiphysis (Trethowan sign).",
      th: "เป็น Salter I ที่คอกระดูกต้นขาเลื่อนขึ้นหน้า; Loder: Stable (เดินได้) vs Unstable (เดินไม่ได้เลยแม้ใช้ไม้ค้ำ เสี่ยง AVN สูง 50%); ตรวจด้วยเส้น Klein's line บนฟิล์ม AP Pelvis จะไม่ตัดผ่านหัวกระดูก (Trethowan sign)"
    },
    radiographicLines: [
      { name: { en: "Klein's Line & Trethowan Sign", th: "เส้น Klein's Line & สัญญาณ Trethowan" }, criteria: { en: "Line along superior femoral neck on AP pelvis should intersect lateral epiphysis. Trethowan sign if it fails to intersect.", th: "เส้นลากตามขอบบนของคอกระดูกต้นขา ต้องตัดผ่านหัวกระดูก Epiphysis หากไม่ตัดถือว่าผิดปกติ" } },
      { name: { en: "Frog-Leg Lateral Pelvis", th: "ภาพเอกซเรย์ท่า Frog-Leg Lateral" }, criteria: { en: "Most sensitive projection for detecting subtle early posterior slip.", th: "ท่าเอกซเรย์ที่มีความไวสูงสุดในการตรวจหารอยเลื่อนระยะแรกเริ่ม" } }
    ],
    types: [
      {
        type: "Loder Stable",
        name: { en: "Stable SCFE (Able to Ambulate)", th: "Stable SCFE (สามารถเดินลงน้ำหนักได้)" },
        pathology: { en: "Patient able to bear weight with or without crutches. Intact blood supply.", th: "ผู้ป่วยสามารถเดินลงน้ำหนักได้ เส้นเลือดเลี้ยงยังสมบูรณ์" },
        radiology: { en: "Posterior slip on Frog-leg lateral and AP pelvis.", th: "เห็นรอยเลื่อนชัดเจนในท่า Frog-leg lateral" },
        treatment: {
          conservative: { en: "Strict non-weightbearing until surgery.", th: "ห้ามลงน้ำหนักเด็ดขาดจนกว่าจะได้ผ่าตัด" },
          operative: { en: "In situ single central cannulated screw fixation across physis. AVN risk < 2%.", th: "ผ่าตัดยึดสกรูเดี่ยวตรงกลางหัวกระดูก (In situ single cannulated screw) โอกาสเกิด AVN < 2%" },
          preferred: "operative"
        }
      },
      {
        type: "Loder Unstable",
        name: { en: "Unstable SCFE (Acute Inability to Bear Weight)", th: "Unstable SCFE (ไม่สามารถลงน้ำหนักได้เลย / ฉุกเฉิน)" },
        pathology: { en: "Acute disruption behaving like femoral neck fracture. High AVN risk (20-50%).", th: "แผ่น Physis ฉีกขาดเฉียบพลัน ปวดรุนแรงเหมือนสะโพกหัก เสี่ยง AVN สูงถึง 20-50%" },
        radiology: { en: "Acute wide physeal disruption and large hemarthrosis.", th: "รอยแยก Physis กว้าง มีเลือดออกในข้อสะโพกมาก" },
        treatment: {
          conservative: { en: "Strictly contraindicated.", th: "ห้ามเด็ดขาด" },
          operative: { en: "Urgent gentle reduction/positioning and single central screw fixation.", th: "ผ่าตัดยึดสกรูด่วนอย่างนุ่มนวล (ห้ามดัดรุนแรง)" },
          preferred: "operative"
        }
      }
    ],
    investigations: [
      {
        name: "AP & Frog-Leg Lateral Pelvis Radiographs",
        details: {
          en: "Frog-leg lateral is the most sensitive view for detecting early posterior displacement of the femoral head; AP pelvis assesses Klein's line and the Steel sign of blanching (crescent density at femoral neck).",
          th: "ภาพ Frog-leg lateral มีความไวสูงสุดในการตรวจหารอยเลื่อนไปด้านหลังระยะแรกเริ่ม ส่วนภาพ AP ใช้วัดเส้น Klein's line และดูเงาขาว Steel sign"
        }
      },
      {
        name: "Pelvic MRI (Pre-Slip Evaluation)",
        details: {
          en: "Indicated in patients with high clinical suspicion but normal initial radiographs; reveals physeal edema and evaluates femoral head vascularity.",
          th: "แนะนำทำ MRI ในรายที่สงสัยสูงแต่ภาพเอกซเรย์ปกติ เพื่อตรวจหาการบวมของแผ่น Physis (Pre-slip) และตรวจการไหลเวียนเลือดของหัวสะโพก"
        }
      }
    ],
    redFlags: [
      { en: "Knee or thigh pain in an adolescent is SCFE until proven otherwise! Always order AP and Frog-leg pelvis X-rays.", th: "เด็กวัยรุ่นที่มาด้วยอาการปวดเข่าหรือปวดต้นขา ต้องตรวจข้อสะโพกและถ่ายภาพ AP/Frog-leg Pelvis เสมอ เพราะอาการปวดมัก Referred มาที่เข่า" }
    ]
  },
  {
    id: "perthes-herring",
    hub: "diseases",
    ageStage: "child",
    ageRange: { en: "4 - 8 yrs (Boys > Girls)", th: "4 - 8 ปี (เด็กชายพบบ่อยกว่าหญิง 4:1)" },
    urgency: "urgent",
    title: { en: "Legg-Calvé-Perthes (Herring Lateral Pillar)", th: "โรคหัวสะโพกขาดเลือดในเด็ก (Herring Lateral Pillar)" },
    subtitle: { en: "Idiopathic avascular necrosis of femoral head classified by lateral pillar height", th: "โรคหัวกระดูกสะโพกตายจากการขาดเลือด จำแนกตามความสูงของเสาด้านนอก (Herring Pillar)" },
    corePrinciple: {
      en: "Herring Lateral Pillar Classification: Group A (100% lateral pillar height preserved - excellent prognosis), Group B (> 50% height preserved), Group C (< 50% height preserved - poor prognosis, collapse).",
      th: "เกณฑ์สากล Herring Pillar: Group A (เสานอกสูง 100% พยากรณ์โรคดีมาก), Group B (เสานอกยุบเหลือ >50%), Group C (เสานอกยุบพังเหลือ <50% พยากรณ์โรคแย่)"
    },
    types: [
      {
        type: "Group A",
        name: { en: "Herring Group A (100% Height Preserved)", th: "Herring Group A (เสานอกสูง 100%)" },
        pathology: { en: "No loss of height in the lateral pillar of the femoral head.", th: "เสากระดูกด้านนอกยังคงความสูงเต็ม 100% ไม่ยุบตัว" },
        radiology: { en: "Dense epiphysis but normal lateral pillar height on AP pelvis.", th: "หัวกระดูกทึบแสงแต่ความสูงเสานอกยังปกติ" },
        treatment: {
          conservative: { en: "Symptomatic treatment, activity modification, maintaining hip range of motion. Excellent prognosis.", th: "รักษาตามอาการ พักผ่อน รักษาการขยับข้อสะโพก พยากรณ์โรคดีเยี่ยม" },
          operative: { en: "Not indicated.", th: "ไม่ต้องผ่าตัด" },
          preferred: "conservative"
        }
      },
      {
        type: "Group B",
        name: { en: "Herring Group B (> 50% Height Preserved)", th: "Herring Group B (เสานอกยุบเหลือ > 50%)" },
        pathology: { en: "Lateral pillar maintains > 50% of its original height.", th: "เสากระดูกด้านนอกยุบตัวลงบ้าง แต่ยังเหลือความสูงมากกว่า 50%" },
        radiology: { en: "Clear lucency and depression of lateral pillar, but > 50% height maintained.", th: "เห็นรอยยุบที่เสานอก แต่ยังเหลือความสูงเกิน 50%" },
        treatment: {
          conservative: { en: "Conservative care for children with bone age < 8 years.", th: "รักษาแบบประคับประคองในเด็กที่อายุกระดูก < 8 ปี" },
          operative: { en: "Surgical containment (Femoral varus osteotomy or pelvic Salter osteotomy) if age >= 8 years.", th: "ผ่าตัดจัดเบ้าสะโพกครอบหัวกระดูก (Containment surgery) หากอายุ >= 8 ปี" },
          preferred: "conservative"
        }
      },
      {
        type: "Group C",
        name: { en: "Herring Group C (< 50% Height / Collapse)", th: "Herring Group C (เสานอกยุบพังเหลือ < 50%)" },
        pathology: { en: "Severe lateral pillar collapse with < 50% height remaining.", th: "เสากระดูกด้านนอกยุบตัวรุนแรง เหลือความสูงน้อยกว่า 50%" },
        radiology: { en: "Severe flattening, fragmentation, and lateral extrusion of femoral head.", th: "หัวกระดูกแบน ยุบตัว และปลิ้นออกนอกเบ้าสะโพก" },
        treatment: {
          conservative: { en: "Poor outcomes regardless of treatment.", th: "ผลการรักษาไม่ค่อยดี" },
          operative: { en: "Containment osteotomy or shelf procedure for salvage in older children.", th: "ผ่าตัดทำ Salter/Shelf osteotomy เพื่อประคองเบ้าสะโพก" },
          preferred: "operative"
        }
      }
    ],
    investigations: [
      {
        name: "AP Pelvis Radiograph (Herring Lateral Pillar Classification)",
        details: {
          en: "Assesses the lateral pillar height (Group A: 100%, Group B: >50%, Group C: <50%) during the fragmentation stage, which strongly predicts long-term femoral head spherical congruity.",
          th: "ภาพเอกซเรย์ท่า AP Pelvis ใช้วัดความสูงของเสาด้านนอก (Herring Pillar) ในช่วงที่มีการแตกหักย่อยสลาย เพื่อพยากรณ์ความกลมของหัวสะโพกในระยะยาว"
        }
      },
      {
        name: "Head-at-Risk Radiographic Signs (Catterall)",
        details: {
          en: "Evaluation for Gage's sign (V-shaped osteopenia at lateral epiphysis), lateral calcification, lateral subluxation/extrusion, and horizontal growth plate.",
          th: "ตรวจหาสัญญาณเสี่ยงสูง (Head-at-Risk Signs) ได้แก่ Gage's sign (รอยโปร่งแสงรูปตัว V ที่ขอบนอก), หินปูนเกาะนอกหัวกระดูก และหัวกระดูกปลิ้นหลุดออกนอกเบ้า"
        }
      }
    ]
  },
  {
    id: "ddh",
    hub: "diseases",
    ageStage: "infant",
    ageRange: { en: "Newborns & Infants (0 - 12 months)", th: "ทารกแรกเกิด - 1 ปี" },
    urgency: "urgent",
    title: { en: "Developmental Dysplasia of the Hip (DDH)", th: "ข้อสะโพกเจริญผิดปกติแต่กำเนิด (DDH)" },
    subtitle: { en: "Spectrum from mild acetabular dysplasia to complete hip dislocation", th: "ความผิดปกติของเบ้าสะโพกตั้งแต่เบ้าตื้นจนถึงข้อสะโพกหลุดสมบูรณ์" },
    corePrinciple: {
      en: "Screening tests: Barlow Test (adduct & push posterior $\rightarrow$ DISLOCATES unstable hip); Ortolani Test (abduct & lift anterior $\rightarrow$ REDUCES dislocated hip with a palpable 'clunk'). Initial Rx: Pavlik Harness for infants < 6 months.",
      th: "การตรวจคัดกรอง: Barlow (หุบขาดันไปหลัง $\rightarrow$ ดันให้หลุด); Ortolani (กางขากระดกไปหน้า $\rightarrow$ ดึงข้อที่หลุดให้เข้าที่ จะรู้สึกสะดุด 'Clunk') การรักษาแรกเริ่ม: ใส่สายรัด Pavlik Harness ในเด็กอายุ < 6 เดือน"
    },
    radiographicLines: [
      { name: { en: "Hilgenreiner & Perkin Lines", th: "เส้น Hilgenreiner & Perkin (AP Pelvis)" }, criteria: { en: "Hilgenreiner line horizontal through triradiate cartilage; Perkin line vertical through lateral acetabular roof. Normal ossific nucleus lies in inferomedial quadrant.", th: "หัวกระดูกสะโพกที่ปกติจะต้องอยู่ในช่องสี่เหลี่ยมด้านล่างใน (Inferomedial quadrant) เสมอ" } },
      { name: { en: "Shenton's Line", th: "เส้นโค้ง Shenton's Line" }, criteria: { en: "Smooth continuous arc between medial femoral neck and superior pubic ramus. Broken in DDH.", th: "เส้นโค้งต่อเนื่องระหว่างคอกระดูกต้นขากับขอบกระดูกเชิงกราน จะขาดตอนในข้อสะโพกหลุด" } }
    ],
    types: [
      {
        type: "< 6 Months",
        name: { en: "Infant (< 6 months of age)", th: "ทารกแรกเกิด (< 6 เดือน)" },
        pathology: { en: "Reducible hip with dynamic instability. Acetabulum cartilaginous.", th: "ข้อสะโพกหลวมหรือหลุดแต่ยังดึงเข้าที่ได้ เบ้าสะโพกเป็นกระดูกอ่อน" },
        radiology: { en: "Ultrasound (Graf classification) is gold standard (X-ray unossified).", th: "อัลตราซาวด์ (Graf classification) เป็นวิธีมาตรฐาน (เอกซเรย์ยังมองไม่เห็นกระดูก)" },
        treatment: {
          conservative: { en: "Pavlik Harness for 6-12 weeks (maintains 90°-100° flexion & 50° abduction). >90% success rate.", th: "ใส่สายรัด Pavlik Harness 6-12 สัปดาห์ (ท่าจัดงอ 90°-100° กาง 50°) อัตราสำเร็จ >90%" },
          operative: { en: "Closed reduction and Spica cast if Pavlik fails after 3-4 weeks.", th: "ดมยาดัดเข้าที่และใส่เฝือก Spica หากสายรัด Pavlik ไม่สำเร็จ" },
          preferred: "conservative"
        }
      },
      {
        type: "6 - 18 Months",
        name: { en: "Older Infant (6 - 18 months)", th: "เด็กโต (6 - 18 เดือน)" },
        pathology: { en: "Fixed dislocation with soft tissue interposition (inverted labrum/pulvinar).", th: "ข้อสะโพกหลุดค้าง มีเนื้อเยื่อขวางทางเข้าของหัวกระดูก" },
        radiology: { en: "AP Pelvis: Broken Shenton line, acetabular index > 30°.", th: "ภาพเอกซเรย์ AP Pelvis: เส้น Shenton ขาด เบ้าสะโพกเอียงชัน > 30°" },
        treatment: {
          conservative: { en: "Pavlik contraindicated (high failure rate).", th: "ห้ามใช้สายรัด Pavlik" },
          operative: { en: "Closed Reduction under anesthesia + Spica Cast. Open reduction if closed reduction fails.", th: "ดมยาดัดดึงเข้าที่ (Closed reduction) + ใส่เฝือก Spica หากไม่เข้าต้องผ่าตัดเปิด (Open reduction)" },
          preferred: "operative"
        }
      }
    ],
    investigations: [
      {
        name: "Dynamic Hip Ultrasound (Graf Classification - Age < 6 Months)",
        details: {
          en: "Gold standard imaging for infants < 6 months before femoral head ossification. Measures Alpha angle (> 60° normal acetabular roof) and Beta angle.",
          th: "การตรวจอัลตราซาวด์ข้อสะโพก (Graf Method) เป็นวิธีมาตรฐานในเด็ก < 6 เดือน โดยวัดมุม Alpha angle (ปกติ > 60°) เพื่อประเมินความลึกของเบ้าสะโพก"
        }
      },
      {
        name: "AP Pelvis Radiograph (Age > 6 Months)",
        details: {
          en: "Evaluates Hilgenreiner and Perkin lines (normal ossific nucleus in inferomedial quadrant), Shenton's line continuity, and Acetabular Index (< 30° at birth, < 20° at 2 years).",
          th: "ภาพเอกซเรย์ AP Pelvis ในเด็กอายุเกิน 6 เดือน: หัวกระดูกต้องอยู่ในช่องล่างใน (Inferomedial), เส้น Shenton ต่อเนื่อง และมุม Acetabular index ไม่ชันเกินเกณฑ์"
        }
      }
    ],
    redFlags: [
      { en: "Avoid extreme hyperabduction in Pavlik harness (> 60°) to prevent avascular necrosis of the femoral head.", th: "ห้ามกางขากว้างเกิน 60° ในสายรัด Pavlik เพราะจะกดทับเส้นเลือดจนหัวกระดูกสะโพกขาดเลือด (AVN)" }
    ]
  },
  {
    id: "clubfoot-ctev",
    hub: "diseases",
    ageStage: "infant",
    ageRange: { en: "Newborns & Infants (0 - 2 yrs)", th: "ทารกแรกเกิด - 2 ปี" },
    urgency: "urgent",
    title: { en: "Clubfoot / CTEV (Ponseti Method)", th: "โรคเท้าปุกแต่กำเนิด (Clubfoot / CTEV)" },
    subtitle: { en: "Congenital Talipes Equinovarus & Ponseti serial casting protocol", th: "ความผิดรูป 4 ประการ (C-A-V-E) และการรักษาด้วยวิธี Ponseti" },
    corePrinciple: {
      en: "Mnemonic C-A-V-E: Cavus (Midfoot), Adductus (Forefoot), Varus (Hindfoot), Equinus (Ankle). Ponseti rule: Correct C-A-V simultaneously around lateral head of talus fulcrum (NEVER touch calcaneus!). Correct Equinus LAST $\rightarrow$ Percutaneous Achilles Tenotomy (85-90%) $\rightarrow$ Foot Abduction Brace (FAB) at 70°.",
      th: "ความผิดรูป 4 ประการ (C-A-V-E): Cavus (อุ้งเท้าโก่ง), Adductus (หน้าเท้าบิดเข้า), Varus (ส้นเท้าเอียงเข้า), Equinus (ข้อเท้าจิกลง) วิธี Ponseti: ดัดแก้ C-A-V พร้อมกันโดยใช้หัว Talus เป็นจุดหมุน (ห้ามแตะส้นเท้า Calcaneus!) $\rightarrow$ ดัดแก้ Equinus ลำดับสุดท้าย $\rightarrow$ สะกิดเอ็นร้อยหวาย (Tenotomy >85%) $\rightarrow$ ใส่รองเท้าดามกาง 70° (FAB)"
    },
    radiographicLines: [
      { name: { en: "Kite's Angle (Talocalcaneal)", th: "มุม Kite's Angle (AP/Lat Foot)" }, criteria: { en: "Angle between long axes of talus and calcaneus. < 20° indicates parallelism/hindfoot varus in clubfoot (Normal 25°-40°).", th: "มุมระหว่างกระดูก Talus กับ Calcaneus หาก < 20° แสดงว่ากระดูกขนานกันและส้นเท้าบิดเข้าใน (ปกติ 25°-40°)" } }
    ],
    types: [
      {
        type: "Ponseti Casting",
        name: { en: "Correction Phase (Serial Casting)", th: "ระยะดัดดามเฝือก (Ponseti Serial Casting)" },
        pathology: { en: "Rigid medial and posterior soft tissue contractures with medial talonavicular subluxation.", th: "การหดรั้งของเนื้อเยื่อด้านในและด้านหลัง กระดูก Navicular หลุดไปด้านใน" },
        radiology: { en: "Parallelism of talus and calcaneus (Kite angle < 20°).", th: "กระดูก Talus และ Calcaneus ขนานกันในแนวตรง (มุม Kite แคบ)" },
        treatment: {
          conservative: { en: "Weekly long-leg plaster casts (toe to groin, 90° knee). 1. Elevate 1st metatarsal to correct Cavus. 2. Abduct foot around talar head fulcrum to correct Adductus & Varus (4-6 casts).", th: "ดัดใส่เฝือกขายาวทุกสัปดาห์ (งอเข่า 90°): 1. ยกกระดกนิ้วโป้งแก้ Cavus 2. ดัดกางเท้าโดยใช้หัว Talus เป็นจุดหมุนเพื่อแก้ Adductus และ Varus พร้อมกัน (4-6 ครั้ง)" },
          operative: { en: "Percutaneous Achilles Tenotomy (PAT) in clinic under local anesthesia if dorsiflexion < 15° after full abduction (needed in >85-90% of cases) followed by final 3-week cast.", th: "ผ่าตัดสะกิดเอ็นร้อยหวายผ่านผิวหนัง (Tenotomy) ภายใต้ยาชาเฉพาะที่หากกระดกข้อเท้าได้ไม่ถึง 15° (พบว่าจำเป็นต้องทำถึง 85-90%) แล้วใส่เฝือกสุดท้าย 3 สัปดาห์" },
          preferred: "conservative"
        }
      },
      {
        type: "Bracing Phase",
        name: { en: "Maintenance Phase (Foot Abduction Brace)", th: "ระยะใส่รองเท้าดามรักษาแนว (Foot Abduction Brace)" },
        pathology: { en: "High relapse rate (> 80%) if bracing protocol is not strictly followed.", th: "มีอัตราการกลับมาเป็นซ้ำสูงกว่า 80% หากไม่ใส่รองเท้าดามตามเกณฑ์อย่างเคร่งครัด" },
        radiology: { en: "Restoration of normal divergence between talus and calcaneus (Kite angle > 25°).", th: "กระดูก Talus และ Calcaneus กางทำมุมปกติ (> 25°)" },
        treatment: {
          conservative: { en: "Foot Abduction Brace (FAB / Denis Browne / Mitchell) set at 70° external rotation (affected side) & 15° dorsiflexion. Worn 23 hrs/day for 3 months, then nights & naps until 4-5 years of age.", th: "ใส่รองเท้าดามกาง (FAB / Denis Browne) กางออก 70° กระดก 15°: ใส่ 23 ชม./วัน ใน 3 เดือนแรก หลังจากนั้นใส่เฉพาะเวลานอนจนถึงอายุ 4-5 ขวบ" },
          operative: { en: "Anterior Tibialis Tendon Transfer (ATTT) to 3rd cuneiform for dynamic supination relapse after age 3-4 years.", th: "ผ่าตัดย้ายเส้นเอ็น Tibialis anterior (ATTT) ไปที่กระดูก Cuneiform ชิ้นที่ 3 หากเท้าบิดหงายซ้ำตอนอายุ 3-4 ขวบ" },
          preferred: "conservative"
        }
      }
    ],
    investigations: [
      {
        name: "Simulated Weightbearing AP & Lateral Foot Views",
        details: {
          en: "Assesses Kite's talocalcaneal angle (< 20° indicates talocalcaneal parallelism in hindfoot varus; normal 25°-40°) and lateral tibiocalcaneal angle for persistent equinus.",
          th: "ภาพเอกซเรย์เท้าท่าจำลองการลงน้ำหนัก (Simulated Weightbearing) ใช้วัดมุม Kite's angle (< 20° บ่งชี้ว่ากระดูกขนานกันจากส้นเท้าเอียงเข้า) และมุม Tibiocalcaneal ดูข้อเท้าจิก"
        }
      },
      {
        name: "Pirani Severity Clinical Scoring (0 - 6)",
        details: {
          en: "Standard bedside scoring: Midfoot score (Medial crease, Curved lateral border, Talar head coverage) + Hindfoot score (Posterior crease, Rigid equinus, Empty heel). Score > 4 indicates PAT will be required.",
          th: "การประเมินคะแนน Pirani Score (0-6): ประเมินความรุนแรงของ Midfoot และ Hindfoot หากคะแนน > 4 บ่งชี้ว่าต้องทำหัตถการสะกิดเอ็นร้อยหวาย (PAT)"
        }
      }
    ],
    redFlags: [
      { en: "Never attempt to dorsiflex the foot (correct equinus) before achieving 60° of abduction $\rightarrow$ causes iatrogenic Rocker-Bottom Foot deformity!", th: "ห้ามดัดกระดกข้อเท้า (แก้ Equinus) ก่อนที่จะดัดกางเท้าได้ถึง 60° เด็ดขาด มิฉะนั้นจะเกิดความพิการ 'Rocker-Bottom Foot' (กระดูกกลางเท้าหักแอ่น)" },
      { en: "Never place counterpressure on the calcaneus during abduction manipulation (blocks subtalar joint rotation).", th: "ห้ามดันหรือกดที่กระดูกส้นเท้า Calcaneus ขณะดัดกางเท้า เพราะจะขัดขวางการหมุนของ Subtalar joint" }
    ]
  }
];
