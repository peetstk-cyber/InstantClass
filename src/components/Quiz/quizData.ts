import type { BoneData, Translation } from "../../types";

export interface HighYieldQuestion {
  id: string;
  category: "upper" | "lower" | "spine" | "pedi" | "general";
  tag: Translation;
  scenario: Translation;
  options: {
    id: number;
    text: Translation;
    isCorrect: boolean;
  }[];
  explanation: Translation;
  pearls?: Translation;
  boneId: string;
  regionId: string;
}

export interface SpotFilmItem {
  id: string;
  kind: "classification" | "investigation_view";
  boneId: string;
  boneName: Translation;
  regionId: string;
  regionName: Translation;
  systemName: string;
  systemFullName: Translation;
  typeCode: string;
  typeName: Translation;
  imageUrl: string;
  xrayFindings: Translation;
  mechanism?: Translation;
  conservative?: Translation;
  operative?: Translation;
  preferred?: "conservative" | "operative" | "none" | "neutral";
}

export const HIGH_YIELD_QUESTIONS: HighYieldQuestion[] = [
  {
    id: "hy-tibia-schatzker4",
    category: "lower",
    tag: { en: "CASE SCENARIO • TIBIA", th: "เคสทางคลินิก • กระดูกหน้าแข้ง" },
    scenario: {
      en: "A 45-year-old motorcyclist sustains a high-energy Schatzker Type IV medial tibial plateau fracture with gross knee instability. Which neurovascular structure is at highest risk of catastrophic disruption?",
      th: "ผู้ป่วยชายอายุ 45 ปี ประสบอุบัติเหตุรถจักรยานยนต์ เกิดกระดูกหัก Schatzker Type IV (Medial Plateau) ร่วมกับข้อเข่าหลวมรุนแรง โครงสร้างหลอดเลือด/เส้นประสาทใดเสี่ยงต่อการขาดเสียหายสูงสุด?",
    },
    options: [
      {
        id: 0,
        text: {
          en: "Popliteal Artery & Tibial Nerve",
          th: "Popliteal Artery & Tibial Nerve",
        },
        isCorrect: true,
      },
      {
        id: 1,
        text: {
          en: "Superficial Peroneal Nerve & Anterior Tibial Artery",
          th: "Superficial Peroneal Nerve & Anterior Tibial Artery",
        },
        isCorrect: false,
      },
      {
        id: 2,
        text: {
          en: "Femoral Artery & Saphenous Nerve",
          th: "Femoral Artery & Saphenous Nerve",
        },
        isCorrect: false,
      },
      {
        id: 3,
        text: {
          en: "Deep Peroneal Nerve",
          th: "Deep Peroneal Nerve",
        },
        isCorrect: false,
      },
    ],
    explanation: {
      en: "Schatzker Type IV represents a high-energy fracture-dislocation of the medial tibial plateau. The medial condyle requires immense force to fail, which frequently shears or avulses the Popliteal Artery behind the knee.",
      th: "Schatzker Type IV เป็นการหักของกระดูกฝั่ง Medial ซึ่งต้องใช้แรงกระแทกมหาศาล และมักมี Knee Dislocation ร่วมด้วย ทำให้เส้นเลือดใหญ่ Popliteal Artery ด้านหลังข้อเข่าเสี่ยงขาดหรือเกิด Intimal Tear สูงมาก",
    },
    pearls: {
      en: "Always calculate ABI (Ankle-Brachial Index) and maintain low threshold for urgent CT Angiogram in Schatzker IV injuries.",
      th: "ต้องวัด ABI และประเมินชีพจรส่วนปลายเสมอ หาก ABI < 0.9 ต้องส่งทำ CT Angiography ด่วนที่สุด",
    },
    boneId: "tibia",
    regionId: "proximal",
  },
  {
    id: "hy-femur-garden",
    category: "lower",
    tag: { en: "CASE SCENARIO • FEMUR NECK", th: "เคสทางคลินิก • คอกระดูกต้นขา" },
    scenario: {
      en: "An 78-year-old active female falls at home and sustains a displaced Femoral Neck fracture (Garden Stage III/IV). What is the primary reason arthroplasty (hemi/total hip) is preferred over internal fixation?",
      th: "หญิงสูงอายุ 78 ปี ลื่นล้มในบ้าน ตรวจพบ Femoral Neck fracture แบบเคลื่อนที่ชัดเจน (Garden III/IV) เหตุผลหลักที่แนะนำให้ผ่าตัดเปลี่ยนข้อสะโพก (Arthroplasty) มากกว่าการดามเหล็กยึดกระดูกคืออะไร?",
    },
    options: [
      {
        id: 0,
        text: {
          en: "High risk of avascular necrosis (AVN) and nonunion",
          th: "เสี่ยงสูงมากต่อภาวะหัวกระดูกตาย (AVN) และกระดูกไม่ติด",
        },
        isCorrect: true,
      },
      {
        id: 1,
        text: {
          en: "Surgical time of internal fixation exceeds arthroplasty",
          th: "การดามเหล็กใช้เวลาผ่าตัดนานกว่าการเปลี่ยนข้อเทียม",
        },
        isCorrect: false,
      },
      {
        id: 2,
        text: {
          en: "Severe extracapsular bleeding leading to hematoma",
          th: "เลือดออกปริมาณมากจากรอยหักนอกแคปซูลข้อ",
        },
        isCorrect: false,
      },
      {
        id: 3,
        text: {
          en: "Internal fixation is contraindicated in patients aged above 50",
          th: "ห้ามทำ Internal Fixation ในผู้ป่วยที่มีอายุมากกว่า 50 ปี",
        },
        isCorrect: false,
      },
    ],
    explanation: {
      en: "Displaced intracapsular femoral neck fractures disrupt the ascending cervical branches of the medial femoral circumflex artery (MFCA), leading to high rates of AVN (up to 30-40%) and nonunion in elderly osteoporotic bone.",
      th: "การหักแบบ Displaced ในแคปซูลข้อสะโพกจะตัดขาดเส้นเลือด Medial Femoral Circumflex Artery ส่งผลให้หัวกระดูกขาดเลือดและตาย (AVN) สูงมาก การผ่าตัดเปลี่ยนข้อช่วยให้ผู้ป่วยลงน้ำหนักเดินได้ทันที",
    },
    pearls: {
      en: "In young patients (<60), urgent anatomic closed/open reduction and cannulated screw fixation is pursued to save the native head.",
      th: "หากเป็นผู้ป่วยอายุน้อย (<60 ปี) เป้าหมายคือการผ่าตัดดึงจัดกระดูกให้เข้าที่อย่างเร่งด่วนและยึดสกรูเพื่อรักษาหัวกระดูกธรรมชาติไว้",
    },
    boneId: "femur",
    regionId: "proximal",
  },
  {
    id: "hy-humerus-neer",
    category: "upper",
    tag: { en: "CASE SCENARIO • SHOULDER", th: "เคสทางคลินิก • กระดูกต้นแขนส่วนบน" },
    scenario: {
      en: "According to Neer classification for proximal humerus fractures, when is a fracture fragment formally counted as a 'Part' (Displaced Part)?",
      th: "ตามระบบ Neer Classification สำหรับกระดูกต้นแขนส่วนบนหัก เศษกระดูกจะถูกนับเป็น 1 ชิ้นส่วน (Part) ที่เคลื่อนที่ เมื่อเข้าเกณฑ์ใด?",
    },
    options: [
      {
        id: 0,
        text: {
          en: "Displacement > 1.0 cm OR Angulation > 45 degrees",
          th: "ระยะเคลื่อนที่มากกว่า 1.0 ซม. หรือ มุมเอียงมากกว่า 45 องศา",
        },
        isCorrect: true,
      },
      {
        id: 1,
        text: {
          en: "Displacement > 2.0 cm OR Angulation > 30 degrees",
          th: "ระยะเคลื่อนที่มากกว่า 2.0 ซม. หรือ มุมเอียงมากกว่า 30 องศา",
        },
        isCorrect: false,
      },
      {
        id: 2,
        text: {
          en: "Any visible cortical fracture line on radiograph",
          th: "มีรอยแตกของ Cortical ที่มองเห็นได้บนฟิล์มเอกซเรย์",
        },
        isCorrect: false,
      },
      {
        id: 3,
        text: {
          en: "Displacement > 0.5 cm OR Angulation > 15 degrees",
          th: "ระยะเคลื่อนที่มากกว่า 0.5 ซม. หรือ มุมเอียงมากกว่า 15 องศา",
        },
        isCorrect: false,
      },
    ],
    explanation: {
      en: "Neer's criteria state a segment is considered a 'Part' only if displacement exceeds 1 cm or angulation is > 45° (except Greater Tuberosity where > 5mm displacement often warrants surgery).",
      th: "เกณฑ์ของ Neer กำหนดว่าชิ้นส่วนจะนับเป็น 'Part' เมื่อมีการเคลื่อน > 1 ซม. หรือเอียงทำมุม > 45° (ยกเว้น Greater Tuberosity ที่หากเลื่อนเกิน 5 มม. ก็อาจต้องผ่าตัด)",
    },
    boneId: "humerus",
    regionId: "proximal",
  },
  {
    id: "hy-forearm-galeazzi-monteggia",
    category: "upper",
    tag: { en: "CASE SCENARIO • FOREARM", th: "เคสทางคลินิก • กระดูกปลายแขน" },
    scenario: {
      en: "A 24-year-old athlete sustains a fracture of the distal 1/3 of the radial shaft with dislocation of the Distal Radioulnar Joint (DRUJ). What is the eponym for this injury?",
      th: "ผู้ป่วยมีกระดูก Radius หักบริเวณรอยต่อ 1/3 ปลายแขนด้านล่าง ร่วมกับมีข้อต่อ Distal Radioulnar Joint (DRUJ) หลุดเคลื่อน ภาวะนี้มีชื่อเฉพาะ (Eponym) ว่าอะไร?",
    },
    options: [
      {
        id: 0,
        text: {
          en: "Galeazzi Fracture-Dislocation",
          th: "Galeazzi Fracture-Dislocation",
        },
        isCorrect: true,
      },
      {
        id: 1,
        text: {
          en: "Monteggia Fracture-Dislocation",
          th: "Monteggia Fracture-Dislocation",
        },
        isCorrect: false,
      },
      {
        id: 2,
        text: {
          en: "Essex-Lopresti Injury",
          th: "Essex-Lopresti Injury",
        },
        isCorrect: false,
      },
      {
        id: 3,
        text: {
          en: "Barton Fracture-Dislocation",
          th: "Barton Fracture-Dislocation",
        },
        isCorrect: false,
      },
    ],
    explanation: {
      en: "Mnemonic: 'GRU-esome MUR-der': Galeazzi = Radius fracture + Ulna/DRUJ dislocation. Monteggia = Ulna fracture + Radial head dislocation.",
      th: "เทคนิคการจำ: 'GRU & MUR' ➔ Galeazzi = Radius หัก + DRUJ/Ulna หลุด, Monteggia = Ulna หัก + Radial head หลุด",
    },
    boneId: "forearm",
    regionId: "shaft",
  },
  {
    id: "hy-pedi-salter-harris",
    category: "pedi",
    tag: { en: "CASE SCENARIO • PEDIATRIC", th: "เคสทางคลินิก • กระดูกเด็ก" },
    scenario: {
      en: "In Salter-Harris classification of pediatric growth plate fractures, which type describes a fracture extending through the Epiphysis and crossing the Physis into the Metaphysis?",
      th: "ในการจำแนก Salter-Harris สำหรับกระดูกอ่อนเจริญเติบโต (Physis) ในเด็ก กระดูกหักแบบที่ผ่านทั้ง Epiphysis ข้าม Physis และทะลุเข้าไปใน Metaphysis คือ Type ใด?",
    },
    options: [
      {
        id: 0,
        text: {
          en: "Salter-Harris Type IV",
          th: "Salter-Harris Type IV",
        },
        isCorrect: true,
      },
      {
        id: 1,
        text: {
          en: "Salter-Harris Type II",
          th: "Salter-Harris Type II",
        },
        isCorrect: false,
      },
      {
        id: 2,
        text: {
          en: "Salter-Harris Type III",
          th: "Salter-Harris Type III",
        },
        isCorrect: false,
      },
      {
        id: 3,
        text: {
          en: "Salter-Harris Type V",
          th: "Salter-Harris Type V",
        },
        isCorrect: false,
      },
    ],
    explanation: {
      en: "Mnemonic SALTR: S (Straight across - I), A (Above - II), L (Lower - III), T (Through - IV), R (cRushed - V). Type IV crosses through both articular joint surface, physis, and shaft.",
      th: "เทคนิค SALTR: S = Type I (ขนานแนวแผ่น), A = Type II (Above/Metaphysis), L = Type III (Lower/Epiphysis), T = Type IV (Through ทะลุผ่านหมด), R = Type V (Ram/Crush ถูกบด)",
    },
    boneId: "pediatric-physis",
    regionId: "physis",
  },
  {
    id: "hy-pelvis-young-burgess",
    category: "lower",
    tag: { en: "CASE SCENARIO • PELVIC RING", th: "เคสทางคลินิก • วงแหวนเชิงกราน" },
    scenario: {
      en: "A pedestrian is struck head-on by a car bumper, resulting in pubic symphysis diastasis > 2.5 cm and anterior sacroiliac ligament disruption (Open Book Pelvis). Which Young-Burgess category is this?",
      th: "คนเดินถนนถูกรถชนด้านหน้า พบรอยแยกของ Pubic Symphysis กว้าง > 2.5 ซม. ร่วมกับ Anterior Sacroiliac Ligament ฉีกขาด (Open-Book Pelvis) จัดอยู่ใน Young-Burgess รูปแบบใด?",
    },
    options: [
      {
        id: 0,
        text: {
          en: "APC-II (Anterior-Posterior Compression Type II)",
          th: "APC-II (Anterior-Posterior Compression Type II)",
        },
        isCorrect: true,
      },
      {
        id: 1,
        text: {
          en: "LC-I (Lateral Compression Type I)",
          th: "LC-I (Lateral Compression Type I)",
        },
        isCorrect: false,
      },
      {
        id: 2,
        text: {
          en: "APC-I (Anterior-Posterior Compression Type I)",
          th: "APC-I (Anterior-Posterior Compression Type I)",
        },
        isCorrect: false,
      },
      {
        id: 3,
        text: {
          en: "Vertical Shear",
          th: "Vertical Shear",
        },
        isCorrect: false,
      },
    ],
    explanation: {
      en: "APC-II injuries involve symphysis diastasis > 2.5cm plus disruption of anterior SI, sacrotuberous, and sacrospinous ligaments, creating rotational instability and significant pelvic volume expansion requiring emergent binder/stabilization.",
      th: "APC-II เกิดจากแรงอัดหน้า-หลัง ทำให้ Symphysis แยกเกิน 2.5 ซม. และเอ็นยึดด้านหน้า SI joint ฉีกขาด เชิงกรานอ้าเปิดเหมือนหนังสือ (Open book) เสี่ยงตกเลือดในอุ้งเชิงกราน ต้องใส่ Pelvic Sheet/Binder ทันที",
    },
    boneId: "pelvis",
    regionId: "ring",
  },
  // ── Distal Radius ──
  {
    id: "hy-distal-radius-barton",
    category: "upper",
    tag: { en: "CASE SCENARIO • DISTAL RADIUS", th: "เคสทางคลินิก • กระดูกปลายแขนส่วนปลาย" },
    scenario: {
      en: "A 55-year-old woman falls on an outstretched hand and sustains an intra-articular fracture of the dorsal lip of the distal radius with dorsal subluxation of the carpus. What is the eponym for this injury?",
      th: "หญิงอายุ 55 ปี ล้มเอามือยัน ตรวจพบกระดูกปลายแขนหักผ่านเข้าข้อ ขอบด้านหลัง (Dorsal lip) ร่วมกับกระดูกข้อมือเลื่อนหลุดไปด้านหลัง (Dorsal subluxation) ภาวะนี้มีชื่อเฉพาะว่าอะไร?",
    },
    options: [
      { id: 0, text: { en: "Dorsal Barton Fracture-Dislocation", th: "Dorsal Barton Fracture-Dislocation" }, isCorrect: true },
      { id: 1, text: { en: "Colles Fracture", th: "Colles Fracture" }, isCorrect: false },
      { id: 2, text: { en: "Smith Fracture (Reverse Colles)", th: "Smith Fracture (Reverse Colles)" }, isCorrect: false },
      { id: 3, text: { en: "Chauffeur Fracture (Radial Styloid)", th: "Chauffeur Fracture (Radial Styloid)" }, isCorrect: false },
    ],
    explanation: {
      en: "Barton fractures are intra-articular fracture-dislocations of the distal radius. Dorsal Barton involves the dorsal rim with dorsal carpal subluxation, while Volar Barton involves the volar rim.",
      th: "Barton fracture เป็นกระดูกหักผ่านเข้าข้อร่วมกับกระดูกข้อมือเลื่อนหลุด Dorsal Barton หักที่ขอบด้านหลัง ส่วน Volar Barton หักที่ขอบด้านหน้า",
    },
    pearls: {
      en: "Barton fractures require ORIF with buttress plating; closed reduction and casting alone has unacceptably high re-displacement rates.",
      th: "Barton fracture ต้องผ่าตัด ORIF ด้วย Buttress plate เสมอ การดามเฝือกอย่างเดียวมีอัตราเลื่อนซ้ำสูงมาก",
    },
    boneId: "forearm",
    regionId: "distal",
  },
  // ── Ankle ──
  {
    id: "hy-ankle-weber",
    category: "lower",
    tag: { en: "CASE SCENARIO • ANKLE", th: "เคสทางคลินิก • กระดูกข้อเท้า" },
    scenario: {
      en: "A 30-year-old footballer twists his ankle. X-ray shows a fibula fracture at the level of the ankle syndesmosis with widening of the medial clear space > 4 mm. Which Weber classification is this?",
      th: "นักฟุตบอลชายอายุ 30 ปี บิดข้อเท้า ฟิล์มเอกซเรย์แสดงกระดูก Fibula หักระดับ Syndesmosis ร่วมกับ Medial Clear Space กว้างเกิน 4 มม. จัดอยู่ใน Weber Classification ประเภทใด?",
    },
    options: [
      { id: 0, text: { en: "Weber B", th: "Weber B" }, isCorrect: true },
      { id: 1, text: { en: "Weber A", th: "Weber A" }, isCorrect: false },
      { id: 2, text: { en: "Weber C", th: "Weber C" }, isCorrect: false },
      { id: 3, text: { en: "Maisonneuve Fracture", th: "Maisonneuve Fracture" }, isCorrect: false },
    ],
    explanation: {
      en: "Weber B fractures occur at the level of the syndesmosis. The syndesmosis may or may not be disrupted. Medial clear space > 4 mm on mortise view suggests deltoid ligament injury and ankle instability requiring surgical fixation.",
      th: "Weber B หักที่ระดับ Syndesmosis เอ็น Syndesmosis อาจฉีกหรือไม่ก็ได้ Medial Clear Space > 4 มม. บ่งชี้ว่า Deltoid ligament ฉีก ข้อเท้าไม่มั่นคง ต้องผ่าตัด",
    },
    boneId: "foot",
    regionId: "ankle",
  },
  // ── Supracondylar Humerus (Pedi) ──
  {
    id: "hy-pedi-supracondylar",
    category: "pedi",
    tag: { en: "CASE SCENARIO • PEDIATRIC ELBOW", th: "เคสทางคลินิก • ข้อศอกเด็ก" },
    scenario: {
      en: "A 6-year-old child falls from monkey bars and has a swollen elbow with a positive posterior fat pad sign. CT confirms a Gartland Type III displaced supracondylar humerus fracture. Which neurovascular structure is MOST at risk?",
      th: "เด็กชายอายุ 6 ปี ตกจากบาร์ลิง ข้อศอกบวม ตรวจพบ Posterior Fat Pad Sign บวก CT ยืนยัน Gartland Type III (Extension type) กระดูก Supracondylar หักเคลื่อนที่มาก โครงสร้างเส้นประสาทใดเสี่ยงบาดเจ็บมากที่สุด?",
    },
    options: [
      { id: 0, text: { en: "Anterior Interosseous Nerve (AIN)", th: "Anterior Interosseous Nerve (AIN)" }, isCorrect: true },
      { id: 1, text: { en: "Ulnar Nerve", th: "Ulnar Nerve" }, isCorrect: false },
      { id: 2, text: { en: "Radial Nerve", th: "Radial Nerve" }, isCorrect: false },
      { id: 3, text: { en: "Musculocutaneous Nerve", th: "Musculocutaneous Nerve" }, isCorrect: false },
    ],
    explanation: {
      en: "In extension-type (posterolateral displacement) Gartland III supracondylar fractures, the Anterior Interosseous Nerve (AIN) is most commonly injured. Test by asking the child to make an 'OK sign' — inability to flex DIP of index finger and IP of thumb indicates AIN palsy.",
      th: "Gartland III แบบ Extension ส่วนใหญ่กระดูกเลื่อนไปด้านหลัง-นอก ทำให้ AIN (แขนงของ Median Nerve) เสี่ยงบาดเจ็บมากสุด ทดสอบโดยให้เด็กทำ 'OK sign' — ถ้างอปลายนิ้วชี้และนิ้วโป้งไม่ได้ = AIN palsy",
    },
    pearls: {
      en: "Always check brachial artery pulse and AIN function (OK sign test) before and after reduction. Gartland III requires urgent closed reduction and percutaneous pinning.",
      th: "ต้องตรวจชีพจร Brachial Artery และ AIN function (OK sign) ก่อนและหลังดึงจัดกระดูกเสมอ Gartland III ต้องผ่าตัดด่วน",
    },
    boneId: "humerus",
    regionId: "distal",
  },
  // ── Open Fracture Gustilo-Anderson ──
  {
    id: "hy-general-gustilo",
    category: "general",
    tag: { en: "CASE SCENARIO • OPEN FRACTURE", th: "เคสทางคลินิก • กระดูกหักแบบเปิด" },
    scenario: {
      en: "A motorcyclist sustains a tibial shaft fracture with a 12 cm wound, extensive muscle devitalization, segmental bone loss, and vascular injury requiring repair. What Gustilo-Anderson grade is this?",
      th: "ผู้ป่วยขับรถจักรยานยนต์ชนกระดูกหน้าแข้งหักร่วมกับแผลเปิดขนาด 12 ซม. กล้ามเนื้อตายเป็นวงกว้าง กระดูกขาดหาย (Segmental bone loss) และหลอดเลือดฉีกขาดต้องซ่อม จัดอยู่ใน Gustilo-Anderson ระดับใด?",
    },
    options: [
      { id: 0, text: { en: "Gustilo-Anderson Type IIIC", th: "Gustilo-Anderson Type IIIC" }, isCorrect: true },
      { id: 1, text: { en: "Gustilo-Anderson Type IIIA", th: "Gustilo-Anderson Type IIIA" }, isCorrect: false },
      { id: 2, text: { en: "Gustilo-Anderson Type IIIB", th: "Gustilo-Anderson Type IIIB" }, isCorrect: false },
      { id: 3, text: { en: "Gustilo-Anderson Type II", th: "Gustilo-Anderson Type II" }, isCorrect: false },
    ],
    explanation: {
      en: "Gustilo IIIC is any open fracture with a vascular injury requiring surgical repair, regardless of wound size. IIIA has adequate soft tissue, IIIB requires flap, IIIC has vascular injury. All Gustilo III require emergent irrigation, debridement, and IV antibiotics.",
      th: "Gustilo IIIC คือกระดูกหักเปิดที่มีหลอดเลือดฉีกต้องผ่าตัดซ่อม ไม่ว่าแผลจะใหญ่แค่ไหน IIIA = เนื้อเยื่อปิดได้ IIIB = ต้อง Flap IIIC = หลอดเลือดฉีก ทุก Gustilo III ต้องล้างแผลด่วน + ยาฆ่าเชื้อ IV",
    },
    boneId: "tibia",
    regionId: "shaft",
  },
  // ── Compartment Syndrome ──
  {
    id: "hy-general-compartment",
    category: "general",
    tag: { en: "CASE SCENARIO • COMPARTMENT SYNDROME", th: "เคสทางคลินิก • ภาวะกล้ามเนื้อบวมอัดในช่อง" },
    scenario: {
      en: "After a tibial shaft fracture, a patient develops severe pain out of proportion, pain with passive stretch of toes, and tense leg compartments. Compartment pressure is measured at 35 mmHg (diastolic BP 75 mmHg). What is the next step?",
      th: "ผู้ป่วยกระดูกหน้าแข้งหัก ต่อมามีอาการปวดรุนแรงผิดสัดส่วน ปวดเมื่อดึงยืดนิ้วเท้า ขาตึงแข็ง วัดความดันในช่องกล้ามเนื้อได้ 35 mmHg (Diastolic BP 75 mmHg) ควรทำอะไรต่อ?",
    },
    options: [
      { id: 0, text: { en: "Emergency 4-compartment fasciotomy of the leg", th: "ผ่าตัดเปิดพังผืด 4 ช่องของขา (Fasciotomy) ฉุกเฉินทันที" }, isCorrect: true },
      { id: 1, text: { en: "Elevate limb and observe for 6 hours", th: "ยกขาสูงและสังเกตอาการ 6 ชั่วโมง" }, isCorrect: false },
      { id: 2, text: { en: "Apply ice compress and give IV analgesics", th: "ประคบเย็นและให้ยาแก้ปวดทางหลอดเลือดดำ" }, isCorrect: false },
      { id: 3, text: { en: "Repeat compartment pressure measurement in 2 hours", th: "วัดความดันในช่องกล้ามเนื้อซ้ำใน 2 ชั่วโมง" }, isCorrect: false },
    ],
    explanation: {
      en: "ΔP (Diastolic BP − Compartment Pressure) = 75 − 35 = 40 mmHg. When ΔP ≤ 30 mmHg OR clinical signs are present (5 P's), emergency fasciotomy is indicated. Delay > 6 hours risks irreversible Volkmann contracture and limb loss.",
      th: "ΔP = Diastolic BP − Compartment Pressure = 75 − 35 = 40 mmHg แต่คนไข้มีอาการทางคลินิก (ปวดรุนแรง + ดึงยืดปวด) ต้องผ่าตัด Fasciotomy ทันที หากล่าช้าเกิน 6 ชม. เสี่ยงกล้ามเนื้อตายถาวร (Volkmann contracture)",
    },
    pearls: {
      en: "The 6 P's of compartment syndrome: Pain (out of proportion), Pressure (tense compartments), Pain with passive stretch, Paresthesia, Paralysis, Pulselessness (late sign).",
      th: "อาการ 6P ของ Compartment Syndrome: Pain (ปวดผิดสัดส่วน), Pressure (ตึง), Pain with passive stretch (ดึงยืดปวด), Paresthesia (ชา), Paralysis (อ่อนแรง), Pulselessness (ชีพจรหาย — อาการสุดท้าย)",
    },
    boneId: "tibia",
    regionId: "shaft",
  },
  // ── Olecranon ──
  {
    id: "hy-elbow-olecranon",
    category: "upper",
    tag: { en: "CASE SCENARIO • ELBOW", th: "เคสทางคลินิก • ข้อศอก" },
    scenario: {
      en: "A 40-year-old man falls directly on his elbow. X-ray shows a displaced transverse olecranon fracture with loss of active elbow extension. Why does this fracture cause inability to extend the elbow?",
      th: "ชายอายุ 40 ปี ล้มกระแทกข้อศอก ฟิล์มแสดง Olecranon หักแบบขวาง (Transverse) เคลื่อนที่ ผู้ป่วยเหยียดข้อศอกไม่ได้ เหตุผลที่เหยียดข้อศอกไม่ได้คืออะไร?",
    },
    options: [
      { id: 0, text: { en: "Disruption of triceps tendon insertion", th: "จุดเกาะปลายของเอ็น Triceps หลุดขาด" }, isCorrect: true },
      { id: 1, text: { en: "Radial nerve injury in spiral groove", th: "เส้นประสาท Radial เสียหายบริเวณ Spiral Groove" }, isCorrect: false },
      { id: 2, text: { en: "Coronoid process mechanical impingement", th: "Coronoid Process เกิดการขัดล็อกเชิงกล" }, isCorrect: false },
      { id: 3, text: { en: "Biceps tendon avulsion", th: "เอ็น Biceps ฉีกขาดหลุด" }, isCorrect: false },
    ],
    explanation: {
      en: "The olecranon is the insertion point of the triceps tendon — the sole active elbow extensor. A displaced olecranon fracture functionally ruptures the extensor mechanism, similar to a patellar fracture disrupting knee extension.",
      th: "Olecranon คือจุดยึดปลายของเอ็น Triceps — กล้ามเนื้อหลักที่เหยียดข้อศอก กระดูกหักเคลื่อนที่เท่ากับเอ็น Triceps ขาด ผู้ป่วยจึงเหยียดศอกไม่ได้ เหมือนกับสะบ้าหักทำให้เข่าเหยียดไม่ได้",
    },
    boneId: "forearm",
    regionId: "proximal",
  },
  // ── Calcaneus Sanders ──
  {
    id: "hy-calcaneus-sanders",
    category: "lower",
    tag: { en: "CASE SCENARIO • CALCANEUS", th: "เคสทางคลินิก • กระดูกส้นเท้า" },
    scenario: {
      en: "A construction worker falls from 3 meters and sustains bilateral calcaneal fractures. Böhler's angle on lateral radiograph measures 10° (normal 20-40°). What does a decreased Böhler's angle indicate?",
      th: "คนงานก่อสร้างตกจากที่สูง 3 เมตร กระดูกส้นเท้าหักทั้งสองข้าง วัดมุม Böhler's angle ได้ 10° (ปกติ 20-40°) มุม Böhler's ที่ลดลงบ่งบอกอะไร?",
    },
    options: [
      { id: 0, text: { en: "Depression of the posterior facet with loss of height", th: "ผิวข้อด้านหลัง (Posterior facet) ยุบตัวและความสูงกระดูกลดลง" }, isCorrect: true },
      { id: 1, text: { en: "Achilles tendon avulsion from the tuberosity", th: "เอ็นร้อยหวายดึงกระดูกส้นเท้าหลุด (Avulsion)" }, isCorrect: false },
      { id: 2, text: { en: "Subtalar joint dislocation without fracture", th: "ข้อ Subtalar หลุดเคลื่อนโดยไม่มีกระดูกหัก" }, isCorrect: false },
      { id: 3, text: { en: "Isolated lateral wall blowout without joint involvement", th: "ผนังกระดูกด้านข้างแตกระเบิดโดยไม่กระทบผิวข้อ" }, isCorrect: false },
    ],
    explanation: {
      en: "Böhler's angle < 20° indicates posterior facet depression from an intra-articular calcaneal fracture. Always check for associated lumbar spine fractures (10% incidence with axial loading falls).",
      th: "Böhler's angle < 20° แสดงว่าผิวข้อด้านหลัง (Posterior facet) ยุบ กระดูกหักเข้าข้อ Subtalar ต้องตรวจ CT เสมอ และต้องเช็คกระดูกสันหลังเอว (L-spine) ร่วมด้วยเพราะ 10% มีกระดูกสันหลังหักร่วม",
    },
    pearls: {
      en: "10% of calcaneal fractures have associated lumbar burst fractures. Always examine the spine in fall-from-height injuries.",
      th: "10% ของกระดูกส้นเท้าหักจะมีกระดูกสันหลังเอวหักร่วม ต้องตรวจกระดูกสันหลังทุกรายที่ตกจากที่สูง",
    },
    boneId: "foot",
    regionId: "hindfoot",
  },
  // ── Thoracolumbar Spine TLICS ──
  {
    id: "hy-spine-tlics",
    category: "spine",
    tag: { en: "CASE SCENARIO • THORACOLUMBAR SPINE", th: "เคสทางคลินิก • กระดูกสันหลังอกเอว" },
    scenario: {
      en: "A patient has an L1 burst fracture with retropulsion into the canal, disruption of the posterior ligamentous complex (PLC), and incomplete neurological deficit. Using the TLICS scoring system, what is the recommended management?",
      th: "ผู้ป่วยกระดูกสันหลัง L1 หักแบบ Burst ร่วมกับชิ้นกระดูกดันเข้าช่องไขสันหลัง เอ็นยึดด้านหลัง (PLC) ฉีกขาด และมีอาการทางระบบประสาทไม่สมบูรณ์ ตาม TLICS score ควรรักษาอย่างไร?",
    },
    options: [
      { id: 0, text: { en: "Surgical stabilization (TLICS ≥ 5)", th: "ผ่าตัดยึดตรึงกระดูกสันหลัง (TLICS ≥ 5)" }, isCorrect: true },
      { id: 1, text: { en: "Conservative treatment with TLSO brace (TLICS < 4)", th: "รักษาแบบอนุรักษ์ใส่เสื้อเกราะ TLSO (TLICS < 4)" }, isCorrect: false },
      { id: 2, text: { en: "Bed rest and analgesics only", th: "นอนพักและให้ยาแก้ปวดเท่านั้น" }, isCorrect: false },
      { id: 3, text: { en: "Vertebroplasty or Kyphoplasty", th: "ฉีดซีเมนต์เสริมกระดูกสันหลัง (Vertebroplasty/Kyphoplasty)" }, isCorrect: false },
    ],
    explanation: {
      en: "TLICS: Burst fracture = 2, PLC disrupted = 3, Incomplete neurological deficit = 3. Total = 8. TLICS ≥ 5 = surgical indication. TLICS ≤ 3 = conservative. TLICS = 4 = surgeon's choice.",
      th: "TLICS: Burst = 2, PLC ฉีก = 3, ระบบประสาทเสียไม่สมบูรณ์ = 3 รวม = 8 คะแนน TLICS ≥ 5 = ต้องผ่าตัด, TLICS ≤ 3 = รักษาแบบอนุรักษ์, TLICS = 4 = ขึ้นกับดุลยพินิจศัลยแพทย์",
    },
    boneId: "tl-spine",
    regionId: "thoracolumbar",
  },
  // ── Scaphoid ──
  {
    id: "hy-scaphoid-avascular",
    category: "upper",
    tag: { en: "CASE SCENARIO • SCAPHOID", th: "เคสทางคลินิก • กระดูกสแคฟฟอยด์" },
    scenario: {
      en: "A 22-year-old boxer falls on his outstretched hand. He has anatomical snuffbox tenderness. Initial X-rays are normal. What is the most appropriate next step?",
      th: "นักมวยอายุ 22 ปี ล้มเอามือยัน กดเจ็บบริเวณ Anatomical Snuffbox ฟิล์มเอกซเรย์เบื้องต้นปกติ ควรทำอะไรต่อ?",
    },
    options: [
      { id: 0, text: { en: "Thumb spica cast with repeat X-ray in 10-14 days or MRI", th: "ดามเฝือก Thumb Spica และถ่ายฟิล์มซ้ำใน 10-14 วัน หรือตรวจ MRI" }, isCorrect: true },
      { id: 1, text: { en: "Symptomatic treatment with NSAIDs and discharge", th: "ให้ยาแก้ปวดกลุ่ม NSAIDs และจำหน่ายกลับบ้าน" }, isCorrect: false },
      { id: 2, text: { en: "Immediate emergent CT angiogram of the wrist", th: "ส่งตรวจ CT Angiogram ของข้อมือทันที" }, isCorrect: false },
      { id: 3, text: { en: "Buddy taping with immediate vigorous mobilization", th: "พันยึดนิ้วคู่และเริ่มบริหารขยับข้อมือเต็มที่ทันที" }, isCorrect: false },
    ],
    explanation: {
      en: "Scaphoid fractures may be occult on initial X-rays (up to 20% false negatives). The standard approach is to treat as a fracture (thumb spica immobilization) and repeat imaging in 10-14 days when resorption at fracture site makes it visible, or obtain MRI for early diagnosis.",
      th: "กระดูก Scaphoid หักอาจไม่เห็นในฟิล์มเอกซเรย์ครั้งแรกได้ถึง 20% ต้องดามเฝือก Thumb Spica ก่อน แล้วถ่ายฟิล์มซ้ำใน 10-14 วัน (กระดูกจะละลายบริเวณรอยหักจนเห็นชัดขึ้น) หรือส่ง MRI เพื่อวินิจฉัยเร็ว",
    },
    pearls: {
      en: "The scaphoid has a retrograde blood supply (enters distally). Proximal pole fractures have the highest AVN risk (up to 30-40%).",
      th: "กระดูก Scaphoid มีเส้นเลือดเข้าจากปลายล่าง (Retrograde blood supply) กระดูกหักส่วนบน (Proximal pole) เสี่ยงหัวกระดูกตาย (AVN) สูงถึง 30-40%",
    },
    boneId: "hand",
    regionId: "scaphoid",
  },
  // ── Clavicle Fracture ──
  {
    id: "hy-clavicle-midshaft",
    category: "upper",
    tag: { en: "CASE SCENARIO • CLAVICLE", th: "เคสทางคลินิก • กระดูกไหปลาร้า" },
    scenario: {
      en: "A 28-year-old cyclist crashes and sustains a midshaft clavicle fracture with > 2 cm shortening, 100% displacement, and comminution. What is the current evidence-based recommendation?",
      th: "นักปั่นจักรยานอายุ 28 ปี ล้ม กระดูกไหปลาร้าหักตรงกลาง (Midshaft) มีกระดูกสั้นลง > 2 ซม. เลื่อนหลุด 100% และแตกหลายชิ้น ตามหลักฐานปัจจุบันควรรักษาอย่างไร?",
    },
    options: [
      { id: 0, text: { en: "Primary open reduction and internal fixation (ORIF)", th: "ผ่าตัดเปิดจัดกระดูกและดามแผ่นโลหะ (ORIF)" }, isCorrect: true },
      { id: 1, text: { en: "Figure-of-8 brace immobilization for 6 weeks", th: "ดามด้วยสายรัดรูปเลขแปด (Figure-of-8) 6 สัปดาห์" }, isCorrect: false },
      { id: 2, text: { en: "Immediate closed reduction under fluoroscopy without fixation", th: "ดึงจัดกระดูกให้เข้าที่แบบปิดโดยไม่ต้องดามเหล็ก" }, isCorrect: false },
      { id: 3, text: { en: "Simple arm sling for comfort for 1-2 weeks only", th: "คล้องแขนด้วย Arm Sling เพื่อความสบาย 1-2 สัปดาห์เท่านั้น" }, isCorrect: false },
    ],
    explanation: {
      en: "Recent meta-analyses show that completely displaced midshaft clavicle fractures with shortening > 2 cm have 15-20% nonunion rates with conservative treatment vs < 3% with ORIF. Primary plate fixation is now recommended for significantly displaced fractures in active patients.",
      th: "งานวิจัยล่าสุดแสดงว่ากระดูกไหปลาร้าหักตรงกลางที่เคลื่อนมากและสั้นลง > 2 ซม. มีอัตรากระดูกไม่ติดถึง 15-20% หากรักษาแบบอนุรักษ์ vs < 3% หากผ่าตัด ปัจจุบันแนะนำผ่าตัดยึดแผ่นเหล็กในผู้ป่วยที่ Active",
    },
    boneId: "clavicle",
    regionId: "shaft",
  },
  // ── Patella Fracture ──
  {
    id: "hy-patella-mechanism",
    category: "lower",
    tag: { en: "CASE SCENARIO • PATELLA", th: "เคสทางคลินิก • สะบ้าหัวเข่า" },
    scenario: {
      en: "A 50-year-old man has a transverse patellar fracture with > 3 mm articular step-off and inability to perform a straight leg raise. What is the recommended treatment?",
      th: "ชายอายุ 50 ปี กระดูกสะบ้าหักแนวขวาง (Transverse) มีขอบผิวข้อเลื่อนเกิน 3 มม. และเหยียดเข่ายกขาตรง (SLR) ไม่ได้ ควรรักษาอย่างไร?",
    },
    options: [
      { id: 0, text: { en: "ORIF with Tension Band Wiring (TBW)", th: "ผ่าตัดยึดด้วย Tension Band Wiring (TBW)" }, isCorrect: true },
      { id: 1, text: { en: "Cylinder cast in full extension for 6 weeks", th: "ดามเฝือกยาวเหยียดเข่าตรง 6 สัปดาห์" }, isCorrect: false },
      { id: 2, text: { en: "Total patellectomy as initial procedure", th: "ผ่าตัดตัดกระดูกสะบ้าออกทั้งหมด" }, isCorrect: false },
      { id: 3, text: { en: "Hinged knee brace with unrestricted weight bearing", th: "ใส่ Brace ข้อเข่าแบบบานพับและลงน้ำหนักทันที" }, isCorrect: false },
    ],
    explanation: {
      en: "Displaced patellar fractures (step-off > 2-3 mm or gap > 3 mm) with loss of active knee extension require ORIF. Tension Band Wiring converts tensile forces to compressive forces at the articular surface, promoting healing.",
      th: "สะบ้าหักที่ผิวข้อเลื่อนเกิน 2-3 มม. หรือแยกเกิน 3 มม. และเหยียดเข่าไม่ได้ ต้องผ่าตัด Tension Band Wiring เปลี่ยนแรงดึงเป็นแรงกด ช่วยให้กระดูกติด",
    },
    boneId: "patella",
    regionId: "body",
  },
  // ── AC Joint Rockwood ──
  {
    id: "hy-ac-joint-rockwood",
    category: "upper",
    tag: { en: "CASE SCENARIO • AC JOINT", th: "เคสทางคลินิก • ข้อต่อ AC Joint" },
    scenario: {
      en: "A rugby player falls on the tip of his shoulder. X-ray shows AC joint widening with 100% superior displacement of the distal clavicle above the acromion and disruption of both AC and CC ligaments. What Rockwood type is this?",
      th: "นักรักบี้ล้มกระแทกปลายไหล่ ฟิล์มแสดง AC joint แยก กระดูกไหปลาร้าเลื่อนขึ้นเท่าตัว 100% เหนือ Acromion เอ็น AC และ CC ligaments ฉีกขาดทั้งคู่ จัดอยู่ใน Rockwood Type ใด?",
    },
    options: [
      { id: 0, text: { en: "Rockwood Type III", th: "Rockwood Type III" }, isCorrect: true },
      { id: 1, text: { en: "Rockwood Type I", th: "Rockwood Type I" }, isCorrect: false },
      { id: 2, text: { en: "Rockwood Type II", th: "Rockwood Type II" }, isCorrect: false },
      { id: 3, text: { en: "Rockwood Type V", th: "Rockwood Type V" }, isCorrect: false },
    ],
    explanation: {
      en: "Rockwood Type III shows complete disruption of both AC and CC ligaments with 25-100% superior displacement. Type V is > 200% displacement. Types I-III are commonly treated conservatively, while IV-VI require surgical reconstruction.",
      th: "Rockwood III = เอ็น AC + CC ฉีกหมด กระดูกเลื่อนขึ้น 25-100% Type V = เลื่อนขึ้น > 200% โดยทั่วไป Type I-III รักษาแบบอนุรักษ์ Type IV-VI ต้องผ่าตัด",
    },
    boneId: "clavicle",
    regionId: "distal",
  },
  // ── Fat Pad Sign ──
  {
    id: "hy-general-fatpad",
    category: "general",
    tag: { en: "CASE SCENARIO • ELBOW RADIOGRAPH", th: "เคสทางคลินิก • ฟิล์มข้อศอก" },
    scenario: {
      en: "A 35-year-old woman falls on her outstretched hand. Lateral elbow X-ray shows a positive posterior fat pad sign (sail sign) but no visible fracture line. What is the most likely diagnosis?",
      th: "หญิงอายุ 35 ปี ล้มเอามือยัน ฟิล์มข้อศอกด้านข้าง (Lateral view) พบ Posterior Fat Pad Sign (sail sign) ชัดเจน แต่ไม่เห็นรอยหักกระดูก การวินิจฉัยที่เป็นไปได้มากที่สุดคืออะไร?",
    },
    options: [
      { id: 0, text: { en: "Occult radial head fracture (Mason Type I)", th: "กระดูก Radial Head หักซ่อนเร้น (Mason Type I)" }, isCorrect: true },
      { id: 1, text: { en: "Lateral epicondylitis (Tennis Elbow)", th: "เอ็นข้อศอกอักเสบ (Tennis Elbow)" }, isCorrect: false },
      { id: 2, text: { en: "Olecranon bursitis", th: "ถุงน้ำ Olecranon อักเสบ" }, isCorrect: false },
      { id: 3, text: { en: "Normal anatomical variant", th: "ความแปรผันทางกายวิภาคปกติ" }, isCorrect: false },
    ],
    explanation: {
      en: "A visible posterior fat pad (sail sign) is ALWAYS pathological and indicates an intra-articular elbow effusion, most commonly from an occult radial head fracture. The anterior fat pad can be normally visible, but elevation (anterior sail sign) is also abnormal.",
      th: "Posterior Fat Pad ที่มองเห็นได้เป็นสิ่งผิดปกติเสมอ บ่งชี้ว่ามีน้ำในข้อศอก สาเหตุที่พบบ่อยที่สุดคือกระดูก Radial Head หักซ่อนเร้น Anterior fat pad ที่ยกตัวขึ้น (Sail sign) ก็ผิดปกติเช่นกัน",
    },
    pearls: {
      en: "If fat pad sign is positive but no fracture visible: treat as occult radial head fracture with above-elbow backslab, sling, and repeat X-ray in 10-14 days.",
      th: "หาก Fat Pad Sign บวกแต่ไม่เห็นรอยหัก ให้รักษาเสมือนกระดูก Radial Head หัก ดามเฝือกครึ่งท่อนเหนือข้อศอก นัดถ่ายฟิล์มซ้ำใน 10-14 วัน",
    },
    boneId: "forearm",
    regionId: "proximal",
  },
  // ── Hip Dislocation ──
  {
    id: "hy-hip-posterior-dislocation",
    category: "lower",
    tag: { en: "CASE SCENARIO • HIP", th: "เคสทางคลินิก • สะโพก" },
    scenario: {
      en: "After a dashboard injury in a car accident, a patient presents with the hip in flexion, adduction, and internal rotation. X-ray confirms posterior hip dislocation. Which nerve is most at risk?",
      th: "ผู้ป่วยถูกแผงหน้ารถกระแทกเข่า (Dashboard injury) ขาอยู่ในท่างอสะโพก หุบขาเข้า และหมุนเข้าด้าน ฟิล์มยืนยันสะโพกหลุดด้านหลัง (Posterior dislocation) เส้นประสาทใดเสี่ยงบาดเจ็บมากที่สุด?",
    },
    options: [
      { id: 0, text: { en: "Sciatic Nerve (Peroneal division)", th: "Sciatic Nerve (แขนง Peroneal division)" }, isCorrect: true },
      { id: 1, text: { en: "Femoral Nerve", th: "Femoral Nerve" }, isCorrect: false },
      { id: 2, text: { en: "Obturator Nerve", th: "Obturator Nerve" }, isCorrect: false },
      { id: 3, text: { en: "Superior Gluteal Nerve", th: "Superior Gluteal Nerve" }, isCorrect: false },
    ],
    explanation: {
      en: "Posterior hip dislocation stretches or compresses the Sciatic Nerve as it passes posterior to the hip joint. The peroneal division is most vulnerable. Urgent closed reduction within 6 hours is critical to reduce AVN risk of the femoral head.",
      th: "สะโพกหลุดด้านหลังจะดึงรั้งหรือกดทับ Sciatic Nerve ที่วิ่งผ่านด้านหลังข้อสะโพก แขนง Peroneal เสี่ยงที่สุด ต้องดึงจัดสะโพกเข้าที่ภายใน 6 ชม. เพื่อลดความเสี่ยง AVN ของหัวกระดูกต้นขา",
    },
    pearls: {
      en: "Classic presentation: hip is flexed, adducted, internally rotated (FAIR position). Always check for associated posterior wall acetabular fracture with CT after reduction.",
      th: "ท่าคลาสสิก: สะโพกงอ หุบ หมุนเข้า (FAIR position) ต้องส่ง CT หลังดึงเข้าที่เสมอเพื่อตรวจกระดูกเบ้าสะโพกหัก (Posterior wall fracture)",
    },
    boneId: "femur",
    regionId: "proximal",
  },
  // ── Intertrochanteric Fracture ──
  {
    id: "hy-femur-intertrochanteric",
    category: "lower",
    tag: { en: "CASE SCENARIO • HIP FRACTURE", th: "เคสทางคลินิก • กระดูกสะโพกหัก" },
    scenario: {
      en: "An 82-year-old man falls and sustains a stable intertrochanteric femur fracture. Unlike femoral neck fractures, why is AVN NOT a major concern in intertrochanteric fractures?",
      th: "ชายสูงอายุ 82 ปี ล้ม กระดูกสะโพกหักแบบ Intertrochanteric ต่างจาก Femoral Neck fracture ทำไม Intertrochanteric fracture จึงไม่ค่อยเกิดภาวะหัวกระดูกตาย (AVN)?",
    },
    options: [
      { id: 0, text: { en: "Extracapsular location with rich periosteal blood supply", th: "อยู่นอกแคปซูลข้อและมีเส้นเลือดจากเยื่อหุ้มกระดูกเลี้ยงดี" }, isCorrect: true },
      { id: 1, text: { en: "Medial femoral circumflex artery is never disrupted", th: "เส้นเลือด Medial Femoral Circumflex Artery ไม่เคยถูกกระทบ" }, isCorrect: false },
      { id: 2, text: { en: "Composed entirely of dense avascular cortical bone", th: "ประกอบด้วยกระดูก Cortical แข็งล้วนที่ไม่มีเส้นเลือด" }, isCorrect: false },
      { id: 3, text: { en: "Complete lack of cancellous trabeculae in this region", th: "ไม่มีกระดูกโครงสร้าง Cancellous ในบริเวณนี้" }, isCorrect: false },
    ],
    explanation: {
      en: "Intertrochanteric fractures are extracapsular — they occur outside the hip joint capsule where blood supply from periosteal and surrounding muscular vessels is abundant. Unlike intracapsular femoral neck fractures, the retinacular vessels to the femoral head are not disrupted.",
      th: "Intertrochanteric fracture เกิดนอกแคปซูลข้อสะโพก (Extracapsular) มีเส้นเลือดจากเยื่อหุ้มกระดูกและกล้ามเนื้อรอบๆ เลี้ยงมากมาย ต่างจาก Femoral Neck fracture ที่อยู่ในแคปซูล ทำให้เส้นเลือด Retinacular ที่ไปเลี้ยงหัวกระดูกถูกตัดขาด",
    },
    boneId: "femur",
    regionId: "proximal",
  },
  // ── Lateral Condyle (Pedi) ──
  {
    id: "hy-pedi-lateral-condyle",
    category: "pedi",
    tag: { en: "CASE SCENARIO • PEDIATRIC ELBOW", th: "เคสทางคลินิก • ข้อศอกเด็ก" },
    scenario: {
      en: "A 5-year-old child has a displaced lateral condyle fracture of the distal humerus with > 2 mm displacement on X-ray. Why is this fracture particularly dangerous if missed or undertreated?",
      th: "เด็กอายุ 5 ปี กระดูก Lateral Condyle ของปลายกระดูกต้นแขนหักเคลื่อนเกิน 2 มม. ทำไมกระดูกหักชนิดนี้จึงอันตรายอย่างยิ่งหากพลาดการวินิจฉัยหรือรักษาไม่เพียงพอ?",
    },
    options: [
      { id: 0, text: { en: "Intra-articular fracture risking nonunion and tardy ulnar nerve palsy", th: "หักผ่านเข้าข้อ เสี่ยงกระดูกไม่ติดและข้อศอกผิดรูปกดทับเส้นประสาท" }, isCorrect: true },
      { id: 1, text: { en: "Mandates emergent total elbow replacement in children", th: "จำเป็นต้องผ่าตัดเปลี่ยนข้อศอกเทียมในเด็กเร่งด่วน" }, isCorrect: false },
      { id: 2, text: { en: "Heals excessively rapidly causing premature synostosis", th: "กระดูกเชื่อมติดเร็วเกินไปจนกระดูกเชื่อมติดผิดปกติ" }, isCorrect: false },
      { id: 3, text: { en: "Universal association with complete brachial artery laceration", th: "สัมพันธ์กับการฉีกขาดของหลอดเลือด Brachial Artery เสมอ" }, isCorrect: false },
    ],
    explanation: {
      en: "Lateral condyle fractures are the second most common pediatric elbow fracture. They are intra-articular (Milch classification) and have poor healing potential if displaced because synovial fluid washes away the fracture hematoma. Nonunion leads to lateral growth arrest → progressive cubitus valgus → tardy ulnar nerve palsy years later.",
      th: "Lateral condyle fracture เป็นกระดูกหักข้อศอกในเด็กที่พบบ่อยอันดับ 2 หักเข้าข้อ (Intra-articular) น้ำในข้อชะล้างก้อนเลือดที่จะช่วยติดกระดูก ทำให้เสี่ยงไม่ติด → ข้อศอกเอียงออก (Cubitus Valgus) → Ulnar Nerve ถูกยืดกดทับในอนาคต",
    },
    boneId: "humerus",
    regionId: "distal",
  },
  // ── Terrible Triad of Elbow ──
  {
    id: "hy-elbow-terrible-triad",
    category: "upper",
    tag: { en: "CASE SCENARIO • ELBOW", th: "เคสทางคลินิก • ข้อศอก" },
    scenario: {
      en: "A 38-year-old woman falls on her outstretched hand with the elbow in valgus extension. X-ray shows elbow dislocation with fractures of the radial head AND the coronoid process. What is this injury complex called?",
      th: "หญิงอายุ 38 ปี ล้มเอามือยัน ข้อศอกอยู่ในท่าเหยียด-กาง ฟิล์มแสดงข้อศอกหลุดร่วมกับกระดูก Radial Head หัก และ Coronoid Process หัก ภาวะนี้เรียกว่าอะไร?",
    },
    options: [
      { id: 0, text: { en: "Terrible Triad of the Elbow", th: "Terrible Triad of the Elbow" }, isCorrect: true },
      { id: 1, text: { en: "Essex-Lopresti Injury", th: "Essex-Lopresti Injury" }, isCorrect: false },
      { id: 2, text: { en: "Monteggia Fracture-Dislocation", th: "Monteggia Fracture-Dislocation" }, isCorrect: false },
      { id: 3, text: { en: "Nursemaid's Elbow (Radial Head Subluxation)", th: "Nursemaid's Elbow (Radial Head หลุดในเด็ก)" }, isCorrect: false },
    ],
    explanation: {
      en: "The 'Terrible Triad' consists of: (1) posterior elbow dislocation, (2) radial head fracture, and (3) coronoid process fracture. It has a high rate of recurrent instability and requires systematic surgical repair: coronoid fixation → radial head fixation/replacement → lateral ligament repair.",
      th: "Terrible Triad ประกอบด้วย: (1) ข้อศอกหลุดด้านหลัง (2) Radial Head หัก (3) Coronoid Process หัก มีอัตราข้อไม่มั่นคงสูงมาก ต้องผ่าตัดซ่อมอย่างเป็นระบบ: ซ่อม Coronoid → ยึด/เปลี่ยน Radial Head → เย็บเอ็นด้านข้าง",
    },
    boneId: "forearm",
    regionId: "proximal",
  },
  // ── Spine — Odontoid Fracture ──
  {
    id: "hy-spine-odontoid",
    category: "spine",
    tag: { en: "CASE SCENARIO • CERVICAL SPINE", th: "เคสทางคลินิก • กระดูกสันหลังส่วนคอ" },
    scenario: {
      en: "An 80-year-old woman falls and sustains a C2 odontoid (dens) fracture at the base of the dens. According to Anderson-D'Alonzo classification, which type has the highest nonunion rate?",
      th: "หญิงสูงอายุ 80 ปี ล้ม กระดูก Odontoid (Dens) ของ C2 หักบริเวณฐาน (Base) ตาม Anderson-D'Alonzo Classification กระดูก Odontoid หัก Type ใดมีอัตรากระดูกไม่ติดสูงที่สุด?",
    },
    options: [
      { id: 0, text: { en: "Anderson-D'Alonzo Type II", th: "Anderson-D'Alonzo Type II" }, isCorrect: true },
      { id: 1, text: { en: "Anderson-D'Alonzo Type I", th: "Anderson-D'Alonzo Type I" }, isCorrect: false },
      { id: 2, text: { en: "Anderson-D'Alonzo Type III", th: "Anderson-D'Alonzo Type III" }, isCorrect: false },
      { id: 3, text: { en: "Anderson-D'Alonzo Type IV", th: "Anderson-D'Alonzo Type IV" }, isCorrect: false },
    ],
    explanation: {
      en: "Anderson-D'Alonzo Type II odontoid fractures occur at the base of the dens — a watershed zone between ascending and descending blood supplies. Nonunion rates are 25-40% in elderly patients. Type III fractures extend into the cancellous C2 body and heal well with Halo or collar.",
      th: "Type II หักที่ฐาน Dens ซึ่งเป็นบริเวณรอยต่อของเส้นเลือด (Watershed zone) อัตราไม่ติดสูงถึง 25-40% ในผู้สูงอายุ Type III หักเข้าตัวกระดูก C2 ซึ่งเป็นกระดูก Cancellous เลือดเลี้ยงดี ติดง่ายด้วยการดามคอ/Halo",
    },
    boneId: "c-spine",
    regionId: "c2-odontoid",
  },
];

/**
 * 100% REAL CLINICAL X-RAYS & RADIOGRAPHS
 * Separated cleanly into 'classification' (2-step) and 'investigation_view' (1-step view quiz)
 */
export const VERIFIED_REAL_TRAUMA_XRAYS: SpotFilmItem[] = [
  // ── Femur Neck Fractures (Garden Classification) ──
  {
    id: "xray-garden-1",
    kind: "classification",
    boneId: "femur",
    boneName: { en: "Femur", th: "กระดูกต้นขา" },
    regionId: "proximal",
    regionName: { en: "Femoral Neck", th: "คอกระดูกต้นขา" },
    systemName: "Garden Classification",
    systemFullName: { en: "Garden Classification of Femoral Neck Fractures", th: "การจำแนกกระดูกคอตันขาหักตามระบบการ์เดน" },
    typeCode: "Garden Stage I",
    typeName: { en: "Incomplete / Impacted Valgus Fracture", th: "กระดูกหักไม่สมบูรณ์ / อัดแน่นในแนว Valgus" },
    imageUrl: "/images/xrays/garden/garden_1.png",
    xrayFindings: {
      en: "Impacted trabeculae in valgus orientation across femoral head and neck; inferior neck cortex remains intact without gross displacement.",
      th: "พบแนว trabeculae ของหัวกระดูกเอียงทำมุมแบบ Valgus อัดแน่นเข้าหากัน โดยขอบล่างของคอกระดูกยังไม่ขาดจากกันอย่างสมบูรณ์",
    },
    mechanism: { en: "Low-energy fall in elderly osteoporotic bone.", th: "หกล้มแรงกระแทกต่ำในผู้สูงอายุ" },
    conservative: { en: "Protected weight-bearing only in frail non-ambulatory patients with high surgical risk.", th: "จำกัดการลงน้ำหนักเฉพาะในผู้ป่วยติดเตียงหรือความเสี่ยงผ่าตัดสูงมาก" },
    operative: { en: "Percutaneous in situ cannulated screw fixation (3 screws in inverted triangle) to prevent secondary displacement.", th: "ยึดตรึงด้วยสกรู 3 ตัว (Cannulated screws) เพื่อป้องกันการเลื่อนหลุด" },
    preferred: "operative",
  },
  {
    id: "xray-garden-2",
    kind: "classification",
    boneId: "femur",
    boneName: { en: "Femur", th: "กระดูกต้นขา" },
    regionId: "proximal",
    regionName: { en: "Femoral Neck", th: "คอกระดูกต้นขา" },
    systemName: "Garden Classification",
    systemFullName: { en: "Garden Classification of Femoral Neck Fractures", th: "การจำแนกกระดูกคอตันขาหักตามระบบการ์เดน" },
    typeCode: "Garden Stage II",
    typeName: { en: "Complete Non-Displaced Fracture", th: "กระดูกหักสมบูรณ์แต่ไม่มีการเคลื่อนที่" },
    imageUrl: "/images/xrays/garden/garden_2.png",
    xrayFindings: {
      en: "Complete cortical fracture line across femoral neck; trabecular alignment between femoral head and acetabulum remains anatomical and undisturbed.",
      th: "เห็นรอยหักผ่านตลอดแนวด้านนอกของคอกระดูก แต่แนว trabeculae ของหัวกระดูกยังคงเรียงตัวต่อเนื่องตรงกับเบ้าสะโพกตามปกติ",
    },
    mechanism: { en: "Axial loading with rotational torque on the femoral neck.", th: "แรงกระแทกแนวดิ่งร่วมกับแรงบิดที่คอกระดูกต้นขา" },
    conservative: { en: "Extremely high risk of secondary displacement (up to 30%); bed rest not recommended.", th: "เสี่ยงเลื่อนหลุดสูงมากหากไม่ผ่าตัด จึงไม่แนะนำการนอนพักเฉยๆ" },
    operative: { en: "Internal fixation with multiple parallel cannulated cancellous screws (inverted triangle configuration).", th: "ผ่าตัดยึดตรึงด้วย Cannulated Cancellous Screws แบบสามเหลี่ยมหัวกลับ" },
    preferred: "operative",
  },
  {
    id: "xray-garden-3",
    kind: "classification",
    boneId: "femur",
    boneName: { en: "Femur", th: "กระดูกต้นขา" },
    regionId: "proximal",
    regionName: { en: "Femoral Neck", th: "คอกระดูกต้นขา" },
    systemName: "Garden Classification",
    systemFullName: { en: "Garden Classification of Femoral Neck Fractures", th: "การจำแนกกระดูกคอตันขาหักตามระบบการ์เดน" },
    typeCode: "Garden Stage III",
    typeName: { en: "Complete Partially Displaced Fracture", th: "กระดูกหักสมบูรณ์และเลื่อนบางส่วน (Varus Angulation)" },
    imageUrl: "/images/xrays/garden/garden_3.png",
    xrayFindings: {
      en: "Complete fracture with partial displacement and varus tilt of the femoral head; trabecular lines of the head no longer align with acetabulum.",
      th: "กระดูกหักสมบูรณ์ หัวกระดูกต้นขาทรุดเอียงเข้าด้านใน (Varus) ทำให้แนว trabeculae ของหัวกระดูกไม่ขนานกับแนวรับน้ำหนักของเบ้าสะโพก",
    },
    mechanism: { en: "Fall with direct impact on greater trochanter.", th: "ล้มกระแทกโดยตรงบริเวณปุ่ม Greater Trochanter" },
    conservative: { en: "Not recommended due to nonunion and osteonecrosis.", th: "ไม่แนะนำเนื่องจากเสี่ยงกระดูกไม่ติดและหัวกระดูกตาย" },
    operative: { en: "Arthroplasty (Hemiarthroplasty or Total Hip) in elderly; urgent anatomical closed/open reduction + fixation in young.", th: "ผ่าตัดเปลี่ยนข้อสะโพกเทียม (Arthroplasty) ในผู้สูงอายุ หรือดึงจัดกระดูกดามยึดด่วนในคนอายุน้อย" },
    preferred: "operative",
  },
  {
    id: "xray-garden-4",
    kind: "classification",
    boneId: "femur",
    boneName: { en: "Femur", th: "กระดูกต้นขา" },
    regionId: "proximal",
    regionName: { en: "Femoral Neck", th: "คอกระดูกต้นขา" },
    systemName: "Garden Classification",
    systemFullName: { en: "Garden Classification of Femoral Neck Fractures", th: "การจำแนกกระดูกคอตันขาหักตามระบบการ์เดน" },
    typeCode: "Garden Stage IV",
    typeName: { en: "Complete Completely Displaced Fracture", th: "กระดูกหักสมบูรณ์และเลื่อนหลุดออกจากกันโดยสิ้นเชิง" },
    imageUrl: "/images/xrays/garden/garden_4.png",
    xrayFindings: {
      en: "Complete disruption and gross displacement; femoral head fragment regains normal orientation in the acetabulum while shaft is shortened and externally rotated.",
      th: "หัวกระดูกหลุดลอยแยกออกจากส่วนก้านกระดูกโดยสิ้นเชิง ก้านกระดูกต้นขาเลื่อนสูงขึ้นและหมุนออกด้านนอก",
    },
    mechanism: { en: "High energy trauma or severe fall in osteoporotic bone.", th: "อุบัติเหตุรุนแรงหรือล้มในภาวะกระดูกพรุนรุนแรง" },
    operative: { en: "Hemiarthroplasty or Total Hip Arthroplasty (THA) in elderly to allow immediate full weight-bearing.", th: "ผ่าตัดเปลี่ยนข้อสะโพกเทียมเพื่อให้ผู้ป่วยสามารถลงน้ำหนักลุกเดินได้ทันที" },
    preferred: "operative",
  },

  // ── Proximal Humerus Fractures (Neer Classification) ──
  {
    id: "xray-neer-1part",
    kind: "classification",
    boneId: "humerus",
    boneName: { en: "Humerus", th: "กระดูกต้นแขน" },
    regionId: "proximal",
    regionName: { en: "Proximal Humerus", th: "กระดูกต้นแขนส่วนบน" },
    systemName: "Neer Classification",
    systemFullName: { en: "Neer Classification of Proximal Humerus Fractures", th: "การจำแนกกระดูกต้นแขนส่วนบนหักตามระบบนีร์" },
    typeCode: "Neer 1-Part Fracture",
    typeName: { en: "Non-displaced / Minimally Displaced Fracture", th: "กระดูกหักไม่เคลื่อนที่ (Displacement < 1 cm, Angulation < 45°)" },
    imageUrl: "/images/xrays/neer_humerus/neer_1part.png",
    xrayFindings: {
      en: "Fracture lines visible across neck or tuberosities without any segment displaced > 1 cm or angulated > 45 degrees.",
      th: "มองเห็นรอยหักผ่านคอกระดูกหรือปุ่มกระดูก แต่ไม่มีชิ้นส่วนใดเคลื่อนเกิน 1 ซม. หรือทำมุมเกิน 45 องศา",
    },
    conservative: { en: "Arm sling immobilization for 2-3 weeks followed by early passive pendulum and range-of-motion exercises.", th: "คล้องแขนด้วย Arm Sling 2-3 สัปดาห์ แล้วเริ่มทำกายภาพแกว่งแขนเบาๆ (Pendulum exercise)" },
    operative: { en: "Rarely indicated; reserved only for secondary displacement.", th: "ไม่จำเป็นต้องผ่าตัด ยกเว้นกรณีเลื่อนหลุดเพิ่มขึ้นในภายหลัง" },
    preferred: "conservative",
  },
  {
    id: "xray-neer-2part-sn",
    kind: "classification",
    boneId: "humerus",
    boneName: { en: "Humerus", th: "กระดูกต้นแขน" },
    regionId: "proximal",
    regionName: { en: "Proximal Humerus", th: "กระดูกต้นแขนส่วนบน" },
    systemName: "Neer Classification",
    systemFullName: { en: "Neer Classification of Proximal Humerus Fractures", th: "การจำแนกกระดูกต้นแขนส่วนบนหักตามระบบนีร์" },
    typeCode: "Neer 2-Part (Surgical Neck)",
    typeName: { en: "Surgical Neck Displaced Fracture", th: "กระดูกคอด้านล่าง (Surgical Neck) หักเคลื่อนที่" },
    imageUrl: "/images/xrays/neer_humerus/neer_2part_sn.png",
    xrayFindings: {
      en: "Shaft displaced > 1 cm or angulated > 45° relative to the intact articular head and intact tuberosities.",
      th: "ก้านกระดูกต้นแขนเลื่อนหลุดเกิน 1 ซม. หรือเอียงเกิน 45 องศาเมื่อเทียบกับหัวกระดูกต้นแขน โดยปุ่ม Greater/Lesser tuberosity ยังติดอยู่กับหัวกระดูก",
    },
    operative: { en: "Closed reduction and percutaneous pinning or open reduction and locking plate fixation (PHILOS).", th: "ผ่าตัดดึงจัดกระดูกและยึดตรึงด้วยแผ่นโลหะดามกระดูกแบบล็อก (PHILOS Plate)" },
    preferred: "operative",
  },
  {
    id: "xray-neer-2part-gt",
    kind: "classification",
    boneId: "humerus",
    boneName: { en: "Humerus", th: "กระดูกต้นแขน" },
    regionId: "proximal",
    regionName: { en: "Proximal Humerus", th: "กระดูกต้นแขนส่วนบน" },
    systemName: "Neer Classification",
    systemFullName: { en: "Neer Classification of Proximal Humerus Fractures", th: "การจำแนกกระดูกต้นแขนส่วนบนหักตามระบบนีร์" },
    typeCode: "Neer 2-Part (Greater Tuberosity)",
    typeName: { en: "Isolated Greater Tuberosity Avulsion", th: "ปุ่มกระดูก Greater Tuberosity หักหลุดเดี่ยว" },
    imageUrl: "/images/xrays/neer_humerus/neer_2part_gt.png",
    xrayFindings: {
      en: "Greater tuberosity displaced postero-superiorly > 5 mm (> 3 mm in active overhead athletes) by supraspinatus/infraspinatus pull.",
      th: "ปุ่ม Greater Tuberosity ถูกเอ็นสะบักดึงรั้งเลื่อนขึ้นด้านบนและด้านหลังเกิน 5 มม. (หรือเกิน 3 มม. ในนักกีฬา)",
    },
    operative: { en: "Open or arthroscopic screw/suture-anchor fixation to prevent subacromial impingement and restore rotator cuff function.", th: "ผ่าตัดยึดตรึงด้วยสกรูหรือไหมเย็บยึดกระดูก (Suture bridge) เพื่อป้องกันการติดขัดใต้ Acromion" },
    preferred: "operative",
  },
  {
    id: "xray-neer-3part-gt",
    kind: "classification",
    boneId: "humerus",
    boneName: { en: "Humerus", th: "กระดูกต้นแขน" },
    regionId: "proximal",
    regionName: { en: "Proximal Humerus", th: "กระดูกต้นแขนส่วนบน" },
    systemName: "Neer Classification",
    systemFullName: { en: "Neer Classification of Proximal Humerus Fractures", th: "การจำแนกกระดูกต้นแขนส่วนบนหักตามระบบนีร์" },
    typeCode: "Neer 3-Part (SN + GT)",
    typeName: { en: "3-Part (Surgical Neck + Greater Tuberosity)", th: "หัก 3 ชิ้น (Surgical Neck + Greater Tuberosity)" },
    imageUrl: "/images/xrays/neer_humerus/neer_3part_gt.png",
    xrayFindings: {
      en: "Surgical neck fracture + displaced GT fragment; the intact subscapularis pulls the humeral head into internal rotation.",
      th: "รอยหักผ่าน Surgical neck ร่วมกับ Greater Tuberosity เลื่อนหลุด โดยหัวกระดูกต้นแขนถูกดึงให้หมุนเข้าด้านใน (Internal rotation) จากแรงของเอ็น Subscapularis",
    },
    operative: { en: "ORIF with Proximal Humerus Locking Plate (PHILOS) + tuberosity suture augmentation.", th: "ผ่าตัดจัดกระดูกและยึดแผ่นดามกระดูก Locking Plate พร้อมร้อยไหมเสริมความแข็งแรงของปุ่มกระดูก" },
    preferred: "operative",
  },
  {
    id: "xray-neer-4part-classic",
    kind: "classification",
    boneId: "humerus",
    boneName: { en: "Humerus", th: "กระดูกต้นแขน" },
    regionId: "proximal",
    regionName: { en: "Proximal Humerus", th: "กระดูกต้นแขนส่วนบน" },
    systemName: "Neer Classification",
    systemFullName: { en: "Neer Classification of Proximal Humerus Fractures", th: "การจำแนกกระดูกต้นแขนส่วนบนหักตามระบบนีร์" },
    typeCode: "Neer 4-Part Classic Fracture",
    typeName: { en: "4-Part Severely Displaced Fracture", th: "กระดูกหัก 4 ชิ้น เลื่อนหลุดรุนแรงและขาดเลือดไปเลี้ยง" },
    imageUrl: "/images/xrays/neer_humerus/neer_4part_classic.png",
    xrayFindings: {
      en: "All 4 parts (Head, Shaft, GT, LT) are displaced > 1cm or > 45°; humeral head is detached from blood supply, risking osteonecrosis > 90%.",
      th: "ชิ้นส่วนกระดูกทั้ง 4 ชิ้น (หัวกระดูก, ก้านกระดูก, GT, LT) หลุดแยกจากกันเกิน 1 ซม. หัวกระดูกสูญเสียเส้นเลือดเลี้ยง เสี่ยงหัวกระดูกตาย (AVN) สูงมาก",
    },
    operative: { en: "Reverse Shoulder Arthroplasty (RSA) in elderly (>65-70) or ORIF in younger patients with reconstructible bone.", th: "ผ่าตัดเปลี่ยนข้อไหล่เทียมแบบย้อนมุม (Reverse Shoulder Arthroplasty) ในผู้สูงอายุ" },
    preferred: "operative",
  },

  // ── Cervical Spine Fractures (Levine-Edwards) ──
  {
    id: "xray-levine-1",
    kind: "classification",
    boneId: "c-spine",
    boneName: { en: "Cervical Spine", th: "กระดูกสันหลังส่วนคอ" },
    regionId: "c2-hangman",
    regionName: { en: "Axis (C2 Hangman)", th: "กระดูกสันหลังข้อที่ 2 (C2)" },
    systemName: "Levine-Edwards Classification",
    systemFullName: { en: "Levine-Edwards Classification of Hangman's Fracture (Traumatic Spondylolisthesis of Axis)", th: "การจำแนกกระดูก C2 หัก (Hangman's Fracture)" },
    typeCode: "Levine-Edwards Type I",
    typeName: { en: "Stable Hangman's Fracture", th: "หักผ่าน Pars Interarticularis แบบไม่เลื่อน (Displacement < 3mm, No Angulation)" },
    imageUrl: "/images/xrays/c-spine/levine_i_xray.png",
    xrayFindings: {
      en: "Bilateral neural arch (pars interarticularis) fracture of C2 with < 3 mm translation and NO angulation; C2-C3 disc remains intact.",
      th: "รอยหักผ่าน Pars interarticularis ทั้งสองข้างของ C2 มีการเคลื่อนที่น้อยกว่า 3 มม. และไม่มีมุมเอียง หมอนรองกระดูก C2-C3 ยังสมบูรณ์",
    },
    mechanism: { en: "Hyperextension and axial loading.", th: "การแอ่นคอไปด้านหลังร่วมกับแรงกดในแนวดิ่ง" },
    conservative: { en: "Rigid Cervical Collar (Miami J / Philadelphia) or SOMI brace for 8-12 weeks.", th: "ดามคอด้วยปลอกคอแข็ง (Rigid Cervical Collar) เป็นเวลา 8-12 สัปดาห์" },
    preferred: "conservative",
  },
  {
    id: "xray-levine-2",
    kind: "classification",
    boneId: "c-spine",
    boneName: { en: "Cervical Spine", th: "กระดูกสันหลังส่วนคอ" },
    regionId: "c2-hangman",
    regionName: { en: "Axis (C2 Hangman)", th: "กระดูกสันหลังข้อที่ 2 (C2)" },
    systemName: "Levine-Edwards Classification",
    systemFullName: { en: "Levine-Edwards Classification of Hangman's Fracture (Traumatic Spondylolisthesis of Axis)", th: "การจำแนกกระดูก C2 หัก (Hangman's Fracture)" },
    typeCode: "Levine-Edwards Type II",
    typeName: { en: "Unstable Hangman's (Displacement > 3mm with Angulation)", th: "หักไม่มั่นคง เลื่อนหลุด > 3 มม. ร่วมกับมีมุมก้มเอียง" },
    imageUrl: "/images/xrays/c-spine/levine_ii_xray.png",
    xrayFindings: {
      en: "Significant translation > 3 mm of C2 on C3 with flexion angulation; disruption of the C2-C3 disc and posterior longitudinal ligament (PLL).",
      th: "ตัวกระดูก C2 เลื่อนไปข้างหน้าเกิน 3 มม. ร่วมกับมีมุมเอียงก้ม หมอนรองกระดูก C2-C3 และเอ็น PLL ฉีกขาด",
    },
    operative: { en: "Traction reduction followed by Halo-vest immobilization or anterior C2-C3 ACDF / posterior C2-C3 fusion.", th: "ดึงถ่วงน้ำหนักจัดกระดูกแล้วใส่ Halo-vest หรือผ่าตัดเชื่อมข้อยึดกระดูก C2-C3 (ACDF หรือ Posterior fusion)" },
    preferred: "operative",
  },
  {
    id: "xray-levine-2a",
    kind: "classification",
    boneId: "c-spine",
    boneName: { en: "Cervical Spine", th: "กระดูกสันหลังส่วนคอ" },
    regionId: "c2-hangman",
    regionName: { en: "Axis (C2 Hangman)", th: "กระดูกสันหลังข้อที่ 2 (C2)" },
    systemName: "Levine-Edwards Classification",
    systemFullName: { en: "Levine-Edwards Classification of Hangman's Fracture (Traumatic Spondylolisthesis of Axis)", th: "การจำแนกกระดูก C2 หัก (Hangman's Fracture)" },
    typeCode: "Levine-Edwards Type IIA",
    typeName: { en: "Severe Angulation without Translation (Flexion-Distraction)", th: "เอียงก้มทำมุมรุนแรงโดยไม่มีการเลื่อนขนาน (ห้ามดึงถ่วงน้ำหนัก)" },
    imageUrl: "/images/xrays/c-spine/levine_iia_xray.png",
    xrayFindings: {
      en: "Severe flexion angulation at C2-C3 with little or no anterior translation; oblique fracture line. CONTRAINDICATION to axial traction (risks cord distraction).",
      th: "มีมุมเอียงก้มรุนแรงมากที่ C2-C3 แต่ไม่มีการเลื่อนขนานไปด้านหน้า รอยหักมีลักษณะเฉียง **ข้อห้ามเด็ดขาด: ห้ามดึงถ่วงน้ำหนักแบบ Traction เพราะจะทำให้ไขสันหลังขาด**",
    },
    operative: { en: "Gentle extension reduction under fluoroscopy + Halo-vest immobilization or surgical C2-C3 fusion.", th: "จัดกระดูกในท่าแอ่นคอเบาๆ ภายใต้เอกซเรย์ แล้วใส่ Halo-vest หรือผ่าตัดเชื่อมข้อ C2-C3" },
    preferred: "operative",
  },
  {
    id: "xray-levine-3",
    kind: "classification",
    boneId: "c-spine",
    boneName: { en: "Cervical Spine", th: "กระดูกสันหลังส่วนคอ" },
    regionId: "c2-hangman",
    regionName: { en: "Axis (C2 Hangman)", th: "กระดูกสันหลังข้อที่ 2 (C2)" },
    systemName: "Levine-Edwards Classification",
    systemFullName: { en: "Levine-Edwards Classification of Hangman's Fracture (Traumatic Spondylolisthesis of Axis)", th: "การจำแนกกระดูก C2 หัก (Hangman's Fracture)" },
    typeCode: "Levine-Edwards Type III",
    typeName: { en: "Hangman's Fracture with Unilateral/Bilateral Locked Facets", th: "หักร่วมกับข้อต่อด้านหลัง C2-C3 เคลื่อนหลุดล็อก (Locked Facets)" },
    imageUrl: "/images/xrays/c-spine/levine_iii_xray.png",
    xrayFindings: {
      en: "Severe displacement and angulation of C2 body combined with unilateral or bilateral locked/dislocated C2-C3 facet joints.",
      th: "ตัวกระดูก C2 เลื่อนหลุดและเอียงรุนแรง ร่วมกับข้อต่อ Facet joint ระหว่าง C2-C3 เคลื่อนหลุดและล็อกติดกัน",
    },
    operative: { en: "Open reduction of locked facets and posterior C2-C3 fusion (often combined with anterior ACDF).", th: "ผ่าตัดเปิดจัดข้อที่ล็อกให้เข้าที่และเชื่อมตรึงกระดูกสันหลัง C2-C3 ด้านหลัง" },
    preferred: "operative",
  },

  // ── 5th Metatarsal Base Fractures (Lawrence & Botte) ──
  {
    id: "xray-lawrence-zone1",
    kind: "classification",
    boneId: "foot",
    boneName: { en: "Foot & Ankle", th: "กระดูกเท้าและข้อเท้า" },
    regionId: "metatarsal",
    regionName: { en: "5th Metatarsal Base", th: "โคนกระดูกฝ่าเท้านิ้วที่ 5" },
    systemName: "Lawrence & Botte Classification",
    systemFullName: { en: "Lawrence & Botte Classification of 5th Metatarsal Base Fractures", th: "การจำแนกกระดูกโคนนิ้วก้อยเท้าหัก" },
    typeCode: "Zone 1 (Pseudo-Jones / Avulsion)",
    typeName: { en: "Tuberosity Avulsion Fracture", th: "กระดูกปุ่ม Tuberosity หักดึงรั้ง (Avulsion Fracture)" },
    imageUrl: "/images/lawrence_botte/zone1.jpg",
    xrayFindings: {
      en: "Fracture line involves the tuberosity / styloid process and may extend into the tarsometatarsal (cuboid) joint; excellent blood supply.",
      th: "รอยหักอยู่ที่ปุ่ม Tuberosity ปลายสุดของโคนกระดูกนิ้วที่ 5 อาจผ่านเข้าข้อ Cuboid-metatarsal มีเส้นเลือดเลี้ยงดีมาก กระดูกติดง่าย",
    },
    conservative: { en: "Symptomatic weight-bearing in a stiff-soled shoe, CAM boot, or hard cast for 3-6 weeks.", th: "ใส่รองเท้าพื้นแข็ง (Stiff-soled shoe) หรือ Boot สามารถเดินลงน้ำหนักตามทนไหว 3-6 สัปดาห์" },
    preferred: "conservative",
  },
  {
    id: "xray-lawrence-zone2",
    kind: "classification",
    boneId: "foot",
    boneName: { en: "Foot & Ankle", th: "กระดูกเท้าและข้อเท้า" },
    regionId: "metatarsal",
    regionName: { en: "5th Metatarsal Base", th: "โคนกระดูกฝ่าเท้านิ้วที่ 5" },
    systemName: "Lawrence & Botte Classification",
    systemFullName: { en: "Lawrence & Botte Classification of 5th Metatarsal Base Fractures", th: "การจำแนกกระดูกโคนนิ้วก้อยเท้าหัก" },
    typeCode: "Zone 2 (True Jones Fracture)",
    typeName: { en: "Metaphyseal-Diaphyseal Junction Fracture", th: "กระดูกหักบริเวณรอยต่อ Metaphyseal-Diaphyseal (True Jones)" },
    imageUrl: "/images/lawrence_botte/zone2.jpg",
    xrayFindings: {
      en: "Transverse fracture at the metaphyseal-diaphyseal junction entering the 4th-5th intermetatarsal articulation; watershed area with high nonunion risk.",
      th: "รอยหักแนวขวางบริเวณรอยต่อ Metaphyseal-diaphyseal ชี้ตรงเข้าหาข้อต่อระหว่างกระดูกฝ่าเท้าชิ้นที่ 4 และ 5 บริเวณนี้มีเส้นเลือดเลี้ยงน้อย เสี่ยงกระดูกไม่ติดสูง (Nonunion 15-30%)",
    },
    conservative: { en: "Strict non-weight bearing short leg cast for 6-8 weeks in low-demand patients.", th: "ใส่เฝือกสั้นห้ามลงน้ำหนักเด็ดขาด (Strict non-weight bearing) 6-8 สัปดาห์" },
    operative: { en: "Percutaneous intramedullary cannulated screw fixation (4.5-5.5mm solid/cannulated screw) preferred in athletes.", th: "ผ่าตัดใส่ Intramedullary Cannulated Screw ในนักกีฬาหรือคนที่ต้องการหายเร็ว" },
    preferred: "operative",
  },
  {
    id: "xray-lawrence-zone3",
    kind: "classification",
    boneId: "foot",
    boneName: { en: "Foot & Ankle", th: "กระดูกเท้าและข้อเท้า" },
    regionId: "metatarsal",
    regionName: { en: "5th Metatarsal Base", th: "โคนกระดูกฝ่าเท้านิ้วที่ 5" },
    systemName: "Lawrence & Botte Classification",
    systemFullName: { en: "Lawrence & Botte Classification of 5th Metatarsal Base Fractures", th: "การจำแนกกระดูกโคนนิ้วก้อยเท้าหัก" },
    typeCode: "Zone 3 (Proximal Diaphyseal Stress Fracture)",
    typeName: { en: "Proximal Diaphyseal Stress Fracture", th: "กระดูกก้านส่วนต้นหักจากความล้าสะสม (Stress Fracture)" },
    imageUrl: "/images/lawrence_botte/zone3.jpg",
    xrayFindings: {
      en: "Fracture distal to the 4th-5th intermetatarsal facet with cortical hypertrophy, periosteal reaction, and intramedullary sclerosis.",
      th: "รอยหักอยู่ต่ำกว่าข้อต่อ 4th-5th intermetatarsal เห็นขอบกระดูกหนาตัว (Cortical hypertrophy) และโพรงกระดูกตีบตันจากแรงเค้นซ้ำๆ",
    },
    operative: { en: "Intramedullary screw fixation with or without bone grafting due to high rate of refractory nonunion.", th: "ผ่าตัดยึดตรึงด้วย Intramedullary Screw ร่วมกับการปลูกถ่ายกระดูก (Bone Graft)" },
    preferred: "operative",
  },

  // ── True Special Orthopedic Radiographic Views (1-Step View Quiz) ──
  {
    id: "view-greenspan",
    kind: "investigation_view",
    boneId: "forearm",
    boneName: { en: "Forearm & Elbow", th: "กระดูกปลายแขนและข้อศอก" },
    regionId: "proximal",
    regionName: { en: "Radial Head & Elbow", th: "หัวกระดูกเรเดียสและข้อศอก" },
    systemName: "Special Radiographic View Quiz",
    systemFullName: { en: "Greenspan Radio-Capitellar Special Trauma Radiograph", th: "ภาพถ่ายรังสีท่าพิเศษ Greenspan View สำหรับข้อศอก" },
    typeCode: "Greenspan (Radio-Capitellar) View",
    typeName: { en: "45° Oblique Radio-Capitellar Special View", th: "ภาพเอกซเรย์ท่า Greenspan (ทำมุมเฉียง 45 องศาตรวจหัวกระดูกเรเดียส)" },
    imageUrl: "/images/investigations/forearm/greenspan_view.jpg",
    xrayFindings: {
      en: "Beam angled 45° craniocaudally separates the radial head from the coronoid process, eliminating overlap to detect subtle Mason I/II radial head and capitellar fractures.",
      th: "ลำแสงเอียง 45° craniocaudal ช่วยแยกเงากระดูก Coronoid ออกจาก Radial Head ทำให้ตรวจพบรอยหักซ่อนของหัวกระดูกเรเดียสและ Capitellum ได้ชัดเจน",
    },
    conservative: { en: "Essential special view for evaluating acute elbow trauma with lateral joint line tenderness.", th: "ท่าถ่ายพิเศษสำคัญมากในผู้ป่วยเจ็บข้อศอกด้านนอกหลังจากล้มยันแขน" },
    preferred: "neutral",
  },
  {
    id: "view-scaphoid",
    kind: "investigation_view",
    boneId: "hand",
    boneName: { en: "Hand & Wrist", th: "กระดูกมือและข้อมือ" },
    regionId: "scaphoid",
    regionName: { en: "Carpal Bones", th: "กระดูกข้อมือ" },
    systemName: "Special Radiographic View Quiz",
    systemFullName: { en: "Scaphoid Ulnar Deviation Special Radiograph", th: "ภาพเอกซเรย์ท่าพิเศษ Scaphoid View" },
    typeCode: "Scaphoid (Ulnar Deviation) View",
    typeName: { en: "Elongated Scaphoid Waist Special View", th: "ภาพเอกซเรย์ท่า Scaphoid (ข้อมือกระดกและเอียงไปทางนิ้วก้อย)" },
    imageUrl: "/images/investigations/wrist/scaphoid_view.jpg",
    xrayFindings: {
      en: "Wrist in ulnar deviation with 20-30° extension elongates the scaphoid along its longitudinal anatomical axis, uncovering occult waist fractures.",
      th: "การจัดท่าข้อมือเอียงไปทางฝั่งนิ้วก้อย (Ulnar deviation) ร่วมกับกระดกข้อมือขึ้น จะช่วยยืดตัวกระดูก Scaphoid ให้ขนานกับฟิล์มเพื่อตรวจหารอยหักที่เอวกระดูก (Scaphoid Waist)",
    },
    conservative: { en: "Recommended in all clinical anatomical snuffbox tenderness cases.", th: "แนะนำให้ส่งถ่ายท่าพิเศษนี้ทุกรายที่กดเจ็บบริเวณ Anatomical Snuffbox" },
    preferred: "neutral",
  },
  {
    id: "view-clenched-fist",
    kind: "investigation_view",
    boneId: "hand",
    boneName: { en: "Hand & Wrist", th: "กระดูกมือและข้อมือ" },
    regionId: "scaphoid",
    regionName: { en: "Carpal Instability", th: "ความไม่มั่นคงของกระดูกข้อมือ" },
    systemName: "Special Radiographic View Quiz",
    systemFullName: { en: "Clenched Fist Stress Radiograph (Terry Thomas Sign)", th: "ภาพเอกซเรย์ท่าพิเศษกำหมัดแน่น (Clenched Fist Stress View)" },
    typeCode: "Clenched Fist Stress View (Terry Thomas)",
    typeName: { en: "Dynamic Scapholunate Dissociation Stress View", th: "ภาพเอกซเรย์ท่ากำหมัดแน่น (ตรวจรอยแยกเอ็น Scapholunate > 3 มม.)" },
    imageUrl: "/images/investigations/wrist/clenched_fist_wrist.jpg",
    xrayFindings: {
      en: "Clenched fist drives the capitate proximally between scaphoid and lunate, demonstrating dynamic widening > 3 mm (Terry Thomas sign of scapholunate ligament rupture).",
      th: "แรงบีบกำหมัดจะดันกระดูก Capitate ลงมาระหว่าง Scaphoid และ Lunate เผยให้เห็นช่องว่างกว้างเกิน 3 มม. (Terry Thomas Sign) แสดงถึงภาวะเอ็น Scapholunate ฉีกขาด",
    },
    operative: { en: "Indicative of carpal instability requiring ligament repair/reconstruction.", th: "บ่งชี้ภาวะ Carpal Instability ที่ต้องรับการผ่าตัดเย็บซ่อมเอ็นยึดข้อมือ" },
    preferred: "operative",
  },
  {
    id: "view-zanca",
    kind: "investigation_view",
    boneId: "clavicle",
    boneName: { en: "Clavicle & AC Joint", th: "กระดูกไหปลาร้าและข้อไหล่" },
    regionId: "distal",
    regionName: { en: "Acromioclavicular Joint", th: "ข้อต่อ Acromioclavicular" },
    systemName: "Special Radiographic View Quiz",
    systemFullName: { en: "Zanca 15° Cephalic Tilt Special Radiograph", th: "ภาพเอกซเรย์ท่าพิเศษ Zanca View" },
    typeCode: "Zanca View (10-15° Cephalad)",
    typeName: { en: "True Acromioclavicular Joint Special Projection", th: "ภาพเอกซเรย์ท่า Zanca View (ลำแสงเอียงขึ้น 10-15 องศาตรวจ AC Joint)" },
    imageUrl: "/images/investigations/clavicle/zanca_view.jpg",
    xrayFindings: {
      en: "10-15° cephalad beam angle projects the AC joint clear of the underlying scapular spine and chest wall with 50% penetration.",
      th: "ลำแสงเอียงขึ้น 10-15° (Cephalad tilt) ร่วมกับลดความแรงรังสีลง 50% ทำให้มองเห็นข้อต่อ AC Joint ชัดเจนโดยไม่มีกระดูกสะบักบดบัง",
    },
    preferred: "neutral",
  },
  {
    id: "view-roberts",
    kind: "investigation_view",
    boneId: "hand",
    boneName: { en: "Hand & Wrist", th: "กระดูกมือและข้อมือ" },
    regionId: "metacarpal",
    regionName: { en: "1st CMC Joint", th: "ข้อโคนนิ้วโป้ง (1st CMC Joint)" },
    systemName: "Special Radiographic View Quiz",
    systemFullName: { en: "Robert's True AP Thumb Special Radiograph", th: "ภาพเอกซเรย์ท่าพิเศษ Robert's View" },
    typeCode: "Robert's View (True AP Thumb)",
    typeName: { en: "True AP 1st Metacarpocarpal Special View", th: "ภาพเอกซเรย์ท่า Robert's View (คว่ำมือแนบหลังนิ้วโป้งตรวจ Bennett / Rolando)" },
    imageUrl: "/images/investigations/hand/ap_thumb_roberts.jpg",
    xrayFindings: {
      en: "Maximum pronation with dorsum of thumb on cassette projects the 1st CMC (trapeziometacarpal) joint in true AP profile without thenar overlap.",
      th: "การคว่ำมือให้หลังนิ้วโป้งแนบสนิทกับแผ่นฟิล์ม ให้ภาพหน้าตรงแท้จริงของข้อโคนนิ้วโป้ง (1st CMC Joint) โดยไม่มีกล้ามเนื้ออุ้งมือซ้อนทับ",
    },
    preferred: "neutral",
  },
  {
    id: "view-open-mouth-peg",
    kind: "investigation_view",
    boneId: "c-spine",
    boneName: { en: "Cervical Spine", th: "กระดูกสันหลังส่วนคอ" },
    regionId: "c2-odontoid",
    regionName: { en: "Upper Cervical (C1-C2)", th: "กระดูกสันหลังส่วนคอข้อที่ 1-2" },
    systemName: "Special Radiographic View Quiz",
    systemFullName: { en: "Open-Mouth Peg (Odontoid) Special Radiograph", th: "ภาพเอกซเรย์ท่าพิเศษอ้าปาก (Open-Mouth Odontoid View)" },
    typeCode: "Open-Mouth Odontoid Peg View",
    typeName: { en: "Dens & C1-C2 Articulation Special Projection", th: "ภาพเอกซเรย์ท่าอ้าปาก (Open-Mouth View ตรวจ Dens และ C1 Overhang)" },
    imageUrl: "/images/investigations/cspine/open_mouth_peg_view.jpg",
    xrayFindings: {
      en: "Visualizes the odontoid peg (dens), C1-C2 atlantoaxial joints, and lateral masses. Total lateral mass overhang > 7 mm indicates Spence rule transverse ligament rupture.",
      th: "มองเห็นยอดกระดูก Dens ของ C2 และแท่นกระดูก C1 Lateral Masses หากพบขอบ C1 ยื่นล้นขอบ C2 สองข้างรวมกันเกิน 7 มม. บ่งชี้ว่าเอ็น Transverse Ligament ฉีกขาด (Spence Rule)",
    },
    preferred: "neutral",
  },
  {
    id: "view-grashey",
    kind: "investigation_view",
    boneId: "humerus",
    boneName: { en: "Shoulder & Humerus", th: "ข้อไหล่และกระดูกต้นแขน" },
    regionId: "proximal",
    regionName: { en: "Glenohumeral Joint", th: "ข้อต่อหัวไหล่ (Glenohumeral)" },
    systemName: "Special Radiographic View Quiz",
    systemFullName: { en: "Grashey (True AP Glenohumeral) Special Radiograph", th: "ภาพเอกซเรย์ท่าพิเศษ Grashey View" },
    typeCode: "Grashey View (True AP Shoulder)",
    typeName: { en: "Tangential Glenohumeral Joint Special View", th: "ภาพเอกซเรย์ท่า Grashey View (เอียงตัว 35-45 องศาขนานเบ้า Glenoid)" },
    imageUrl: "/images/investigations/shoulder/grashey_ap_view.jpg",
    xrayFindings: {
      en: "Patient rotated 35-45° toward affected shoulder aligns beam parallel to glenoid fossa, demonstrating true glenohumeral joint space without overlapping humeral head.",
      th: "เอียงลำตัวผู้ป่วย 35-45 องศาเข้าหาข้างที่เจ็บ ให้ลำแสงขนานกับผิวข้อ Glenoid ทำให้เห็นช่องว่างข้อไหล่แท้จริงและตรวจพบ Posterior Dislocation",
    },
    preferred: "neutral",
  },
  {
    id: "view-scapular-y",
    kind: "investigation_view",
    boneId: "scapula",
    boneName: { en: "Scapula & Shoulder", th: "กระดูกสะบักและหัวไหล่" },
    regionId: "body",
    regionName: { en: "Scapular Y Alignment", th: "แนวแกนรูปตัว Y ของกระดูกสะบัก" },
    systemName: "Special Radiographic View Quiz",
    systemFullName: { en: "Scapular Y (Trans-Scapular) Lateral Special Radiograph", th: "ภาพเอกซเรย์ท่าพิเศษ Scapular Y View" },
    typeCode: "Scapular Y (Trans-Scapular) View",
    typeName: { en: "Lateral Trans-Scapular Alignment Special View", th: "ภาพเอกซเรย์ท่า Scapular Y View (ตรวจข้อไหล่หลุด Anterior vs Posterior)" },
    imageUrl: "/images/investigations/shoulder/scapular_y_view.jpg",
    xrayFindings: {
      en: "Coracoid (anterior), acromion (posterior), and scapular blade form a 'Y'. In normal anatomy, humeral head is centered over the junction.",
      th: "Coracoid (หน้า), Acromion (หลัง) และตัวสะบักรวมกันเป็นรูปตัว 'Y' หัวกระดูกต้นแขนต้องอยู่ตรงจุดตัดพอดี หากเลื่อนไปด้านหน้า = Anterior Dislocation, ไปด้านหลัง = Posterior Dislocation",
    },
    preferred: "neutral",
  },
  {
    id: "view-axillary-shoulder",
    kind: "investigation_view",
    boneId: "shoulder",
    boneName: { en: "Shoulder", th: "ข้อไหล่" },
    regionId: "glenohumeral",
    regionName: { en: "Glenohumeral Joint", th: "ข้อต่อหัวไหล่" },
    systemName: "Special Radiographic View Quiz",
    systemFullName: { en: "Axillary Lateral Shoulder Special Radiograph", th: "ภาพเอกซเรย์ท่าพิเศษ Axillary View หัวไหล่" },
    typeCode: "Axillary Lateral Shoulder View",
    typeName: { en: "True Axillary Glenohumeral Special Projection", th: "ภาพเอกซเรย์ท่า Axillary View หัวไหล่ (ตรวจข้อไหล่หลุด & ขอบเบ้ากระดูก Glenoid)" },
    imageUrl: "/images/investigations/shoulder/axillary_lateral_view.jpg",
    xrayFindings: {
      en: "Arm abducted 70-90° with central beam directed superiorly through the axilla; directly visualizes glenohumeral articulation, coracoid process, acromion, and anterior/posterior glenoid rim fractures (Bankart).",
      th: "กางแขน 70-90 องศา ส่องลำแสงผ่านรักแร้ขึ้นด้านบน แสดงความสัมพันธ์ของหัวกระดูกต้นแขนกับเบ้า Glenoid และตรวจขอบเบ้ากระดูกแตกหัก (Bony Bankart) ได้อย่างแม่นยำ",
    },
    preferred: "neutral",
  },
  {
    id: "view-stress-clavicle",
    kind: "investigation_view",
    boneId: "clavicle",
    boneName: { en: "Clavicle & AC Joint", th: "กระดูกไหปลาร้าและข้อไหล่" },
    regionId: "distal",
    regionName: { en: "Acromioclavicular Joint", th: "ข้อต่อ Acromioclavicular" },
    systemName: "Special Radiographic View Quiz",
    systemFullName: { en: "Weighted Stress AC Joint Special Radiograph", th: "ภาพเอกซเรย์ท่าพิเศษถ่วงน้ำหนักข้อต่อ AC Joint (Stress View)" },
    typeCode: "Weighted Stress AC Joint View",
    typeName: { en: "Bilateral Weighted Stress AC Projection", th: "ภาพเอกซเรย์ท่าถ่วงน้ำหนักข้อต่อ AC Joint (Stress View ตรวจ Rockwood II vs III)" },
    imageUrl: "/images/investigations/clavicle/stress_clavicle_view.jpg",
    xrayFindings: {
      en: "Bilateral simultaneous AP projections with 10-15 lbs suspended from wrists (not held in hands); differentiates incomplete CC ligament sprain (Type II) from complete disruption (Type III).",
      th: "ถ่ายเปรียบเทียบสองข้างโดยผูกถ่วงน้ำหนัก 10-15 ปอนด์ที่ข้อมือทั้งสองข้าง ช่วยแยกภาวะเอ็น CC ligament ฉีกขาดสมบูรณ์ (Rockwood III) ออกจากการฉีกขาดบางส่วน",
    },
    preferred: "neutral",
  },
  {
    id: "view-axillary-clavicle",
    kind: "investigation_view",
    boneId: "clavicle",
    boneName: { en: "Clavicle & AC Joint", th: "กระดูกไหปลาร้าและข้อไหล่" },
    regionId: "distal",
    regionName: { en: "Acromioclavicular Joint", th: "ข้อต่อ Acromioclavicular" },
    systemName: "Special Radiographic View Quiz",
    systemFullName: { en: "Axillary Distal Clavicle Special Radiograph", th: "ภาพเอกซเรย์ท่าพิเศษ Axillary ไหปลาร้า" },
    typeCode: "Axillary Clavicle View",
    typeName: { en: "Axillary Projection of Distal Clavicle", th: "ภาพเอกซเรย์ท่า Axillary ไหปลาร้า (ตรวจทิศทางการเลื่อน Posterior Displacement)" },
    imageUrl: "/images/investigations/clavicle/axillary_view.jpg",
    xrayFindings: {
      en: "Tangential axial view of the distal clavicle and AC joint; detects subtle horizontal posterior displacement of the clavicle into or through the trapezius (Rockwood Type IV).",
      th: "ภาพฉายในแนวนอนของกระดูกไหปลาร้าส่วนปลาย ตรวจการเลื่อนหลุดไปด้านหลังทะลุกล้ามเนื้อ Trapezius (Rockwood Type IV)",
    },
    preferred: "neutral",
  },
  {
    id: "view-traction-humerus",
    kind: "investigation_view",
    boneId: "humerus",
    boneName: { en: "Humerus", th: "กระดูกต้นแขน" },
    regionId: "shaft",
    regionName: { en: "Humeral Shaft", th: "ก้านกระดูกต้นแขน" },
    systemName: "Special Radiographic View Quiz",
    systemFullName: { en: "Longitudinal Traction Humerus Special Radiograph", th: "ภาพเอกซเรย์ท่าพิเศษ Traction View สำหรับกระดูกต้นแขน" },
    typeCode: "Traction AP Humerus View",
    typeName: { en: "Longitudinal Traction Trauma Special View", th: "ภาพเอกซเรย์ท่าดึงถ่วงแนวตรง (Traction View สำหรับกระดูกต้นแขนแตกละเอียด)" },
    imageUrl: "/images/investigations/humerus/traction_ap_humerus_view.jpg",
    xrayFindings: {
      en: "Gentle manual longitudinal traction applied during exposure to overcome muscle spasm and distract comminuted shaft/proximal fragments for surgical pre-op planning.",
      th: "ดึงยึดแขนตามแนวยาวเบาๆ ขณะถ่ายภาพรังสีเพื่อคลายแรงหดเกร็งของกล้ามเนื้อ ช่วยคลายชิ้นส่วนกระดูกที่แตกละเอียดซ้อนทับกันให้มองเห็นแนวรอยหักชัดเจนก่อนวางแผนผ่าตัด",
    },
    preferred: "neutral",
  },
];

export interface SpecialViewDistractor {
  id: string;
  region: "shoulder_girdle" | "hand_wrist_elbow" | "spine" | "pelvis_lower";
  typeCode: string;
  typeName: Translation;
}

export const ALL_SPECIAL_VIEW_DISTRACTORS: SpecialViewDistractor[] = [
  // Shoulder / Clavicle / Scapula
  { id: "dist-stryker", region: "shoulder_girdle", typeCode: "Stryker Notch View", typeName: { en: "Posterolateral Humeral Head Hill-Sachs View", th: "ภาพเอกซเรย์ท่า Stryker Notch View (ตรวจรอยบุบ Hill-Sachs ด้านหลังหัวไหล่)" } },
  { id: "dist-west-point", region: "shoulder_girdle", typeCode: "West Point Axillary View", typeName: { en: "Prone Axillary Glenoid Rim Bankart View", th: "ภาพเอกซเรย์ท่า West Point View (ตรวจกระดูกขอบเบ้าไหล่ Bony Bankart)" } },
  { id: "dist-velpeau", region: "shoulder_girdle", typeCode: "Velpeau (In-Sling Axillary) View", typeName: { en: "Modified Axillary View for Immobilized Shoulder", th: "ภาพเอกซเรย์ท่า Velpeau View (ตรวจข้อไหล่หลุดโดยไม่ต้องกางแขน)" } },
  { id: "dist-hermodsson", region: "shoulder_girdle", typeCode: "Hermodsson Tangential View", typeName: { en: "Tangential Posterior Humeral Head Defect View", th: "ภาพเอกซเรย์ท่า Hermodsson View (ตรวจรอยยุบหัวไหล่ด้านหลัง)" } },

  // Hand / Wrist / Forearm / Elbow
  { id: "dist-carpal-tunnel", region: "hand_wrist_elbow", typeCode: "Carpal Tunnel (Gaynor-Hart) View", typeName: { en: "Tangential Carpal Canal & Hook of Hamate View", th: "ภาพเอกซเรย์ท่า Carpal Tunnel View (ตรวจกระดูก Hook of Hamate และโพรงข้อมือ)" } },
  { id: "dist-brewerton", region: "hand_wrist_elbow", typeCode: "Brewerton (MCP Joint) View", typeName: { en: "65° Metacarpophalangeal Collateral Ligament View", th: "ภาพเอกซเรย์ท่า Brewerton View (ตรวจข้อโคนนิ้วมือและเอ็นยึดข้อ MCP)" } },
  { id: "dist-jones-elbow", region: "hand_wrist_elbow", typeCode: "Jones (Acute Flexion Elbow) View", typeName: { en: "Maximal Flexion Distal Humerus & Olecranon View", th: "ภาพเอกซเรย์ท่างอศอกสุด Jones View (ตรวจปลายกระดูกต้นแขนและ Olecranon)" } },

  // Spine
  { id: "dist-swimmer", region: "spine", typeCode: "Swimmer's (Twining) C-T Junction View", typeName: { en: "Lateral Cervicothoracic C7-T1 Special Projection", th: "ภาพเอกซเรย์ท่า Swimmer's View (ตรวจรอยต่อกระดูกคอและอก C7-T1)" } },
  { id: "dist-flex-ext-spine", region: "spine", typeCode: "Flexion-Extension Stress Cervical View", typeName: { en: "Dynamic Cervical Instability Stress Views", th: "ภาพเอกซเรย์ท่าก้ม-เงยคอ (ตรวจความไม่มั่นคงของกระดูกคอ)" } },
  { id: "dist-pillar", region: "spine", typeCode: "Pillar (Cervical Facet) View", typeName: { en: "30° Caudal Cervical Articular Pillar View", th: "ภาพเอกซเรย์ท่า Pillar View (ตรวจข้อต่อ Facet Joints และ Laminae)" } },

  // Pelvis / Hip / Lower Extremity
  { id: "dist-judet", region: "pelvis_lower", typeCode: "Judet Oblique Views (Iliac & Obturator)", typeName: { en: "Acetabular Column & Wall Projections", th: "ภาพเอกซเรย์ท่า Judet View (ตรวจเบ้าสะโพก Iliac & Obturator Oblique)" } },
  { id: "dist-pelvic-inlet-outlet", region: "pelvis_lower", typeCode: "Pelvic Inlet & Outlet Views", typeName: { en: "40° Caudad / Cephalad Pelvic Ring Projections", th: "ภาพเอกซเรย์ท่า Pelvic Inlet & Outlet (ตรวจวงแหวนเชิงกรานหักเลื่อน)" } },
  { id: "dist-mortise", region: "pelvis_lower", typeCode: "Mortise View (15-20° Internal Rotation)", typeName: { en: "True Ankle Syndesmosis Projection", th: "ภาพเอกซเรย์ท่า Mortise View (หมุนข้อเท้าเข้าใน 15 องศาตรวจ Syndesmosis)" } },
  { id: "dist-skyline", region: "pelvis_lower", typeCode: "Merchant / Skyline Patellar View", typeName: { en: "Axial Patellofemoral Tracking View", th: "ภาพเอกซเรย์ท่า Skyline / Sunrise (ตรวจข้อสะบ้าและร่อง Femoral Trochlea)" } },
  { id: "dist-harris", region: "pelvis_lower", typeCode: "Harris-Beath (Axial Calcaneal) View", typeName: { en: "45° Caudal Calcaneus & Subtalar View", th: "ภาพเอกซเรย์ท่า Harris-Beath View (ตรวจกระดูกส้นเท้า Calcaneus และข้อ Subtalar)" } },
  { id: "dist-broden", region: "pelvis_lower", typeCode: "Broden's Views (Subtalar Joint)", typeName: { en: "10-40° Cephalad Subtalar Facet Views", th: "ภาพเอกซเรย์ท่า Broden's Views (ตรวจข้อต่อใต้กระดูกข้อเท้า Subtalar)" } },
  { id: "dist-flamingo", region: "pelvis_lower", typeCode: "Flamingo Single-Leg Stance View", typeName: { en: "Dynamic Pubic Symphysis Instability View", th: "ภาพเอกซเรย์ท่ายืนขาเดียว Flamingo View (ตรวจความไม่มั่นคงของรอยต่อหัวหน่าว)" } },
];


export function extractSpotFilmItems(_bones?: BoneData[]): SpotFilmItem[] {
  return VERIFIED_REAL_TRAUMA_XRAYS;
}

export interface ClassificationSystemOption {
  id: string;
  name: string;
  fullName: Translation;
  boneName: Translation;
  isCorrect: boolean;
}

export interface ClassificationTypeOption {
  id: string;
  typeCode: string;
  typeName: Translation;
  isCorrect: boolean;
}

export interface TwoStepSpotQuestion {
  kind: "classification" | "investigation_view";
  target: SpotFilmItem;
  step1Options: ClassificationSystemOption[]; // For classification 2-step (Step 1)
  step2Options: ClassificationTypeOption[];   // For classification 2-step (Step 2)
  viewOptions: ClassificationTypeOption[];    // For 1-step investigation view quiz
}

export const ALL_ORTHO_CLASSIFICATION_SYSTEMS = [
  { id: "garden", name: "Garden Classification", fullName: { en: "Garden Classification of Femoral Neck Fractures", th: "การจำแนกกระดูกคอตันขาหักตามระบบการ์เดน" }, boneName: { en: "Femur", th: "กระดูกต้นขา" } },
  { id: "neer-humerus", name: "Neer Classification", fullName: { en: "Neer Classification of Proximal Humerus Fractures", th: "การจำแนกกระดูกต้นแขนส่วนบนหักตามระบบนีร์" }, boneName: { en: "Humerus", th: "กระดูกต้นแขน" } },
  { id: "levine-edwards", name: "Levine-Edwards Classification", fullName: { en: "Levine-Edwards Classification of Hangman's Fracture (C2 Axis)", th: "การจำแนกกระดูก C2 หัก (Hangman's Fracture)" }, boneName: { en: "C-Spine", th: "กระดูกคอ" } },
  { id: "lawrence-botte", name: "Lawrence & Botte Classification", fullName: { en: "Lawrence & Botte Classification of 5th Metatarsal Base Fractures", th: "การจำแนกกระดูกโคนนิ้วก้อยเท้าหัก" }, boneName: { en: "Foot", th: "กระดูกเท้า" } },
  { id: "schatzker", name: "Schatzker Classification", fullName: { en: "Schatzker Classification of Tibial Plateau Fractures", th: "การจำแนกกระดูกข้อเข่าหน้าแข้งหัก" }, boneName: { en: "Tibia", th: "กระดูกหน้าแข้ง" } },
  { id: "rockwood-ac", name: "Rockwood Classification", fullName: { en: "Rockwood Acromioclavicular (AC) Joint Dislocation", th: "การจำแนกข้อต่อไหปลาร้า-สะบักหลุด (Rockwood)" }, boneName: { en: "Clavicle", th: "กระดูกไหปลาร้า" } },
  { id: "lauge-hansen", name: "Lauge-Hansen Classification", fullName: { en: "Lauge-Hansen Classification of Ankle Fractures", th: "การจำแนกกระดูกข้อเท้าหักตามกลไก" }, boneName: { en: "Ankle", th: "กระดูกข้อเท้า" } },
  { id: "young-burgess", name: "Young-Burgess Classification", fullName: { en: "Young-Burgess Classification of Pelvic Ring Fractures", th: "การจำแนกกระดูกเชิงกรานหัก" }, boneName: { en: "Pelvis", th: "กระดูกเชิงกราน" } },
  { id: "salter-harris", name: "Salter-Harris Classification", fullName: { en: "Salter-Harris Physeal Growth Plate Injury", th: "การจำแนกกระดูกอ่อนเจริญเติบโตในเด็กหัก" }, boneName: { en: "Pediatric", th: "กระดูกเด็ก" } },
  { id: "evans", name: "Evans Classification", fullName: { en: "Evans Classification of Intertrochanteric Fractures", th: "การจำแนกกระดูกสะโพกหัก Intertrochanteric" }, boneName: { en: "Femur", th: "กระดูกต้นขา" } },
  { id: "mayo-olecranon", name: "Mayo Classification", fullName: { en: "Mayo Classification of Olecranon Fractures", th: "การจำแนกกระดูกข้อศอกหัก (Mayo Olecranon)" }, boneName: { en: "Elbow", th: "ข้อศอก" } },
];

/** Helper to parse Roman numerals, numbers, and types for sequential sorting (I -> II -> III -> IV) */
function parseRomanOrNumberRank(code: string): number {
  const upper = code.toUpperCase();
  
  // Specific known rank matches
  if (/\b(TYPE\s*I\b|STAGE\s*I\b|GRADE\s*I\b|GARDEN\s*I\b|ZONE\s*1\b|1-PART|CLASS\s*I\b|GROUP\s*1\b)/i.test(upper)) return 1;
  if (/\b(TYPE\s*IIA|STAGE\s*IIA|2A)\b/i.test(upper)) return 2.1;
  if (/\b(TYPE\s*IIB|STAGE\s*IIB|2B)\b/i.test(upper)) return 2.2;
  if (/\b(TYPE\s*II\b|STAGE\s*II\b|GRADE\s*II\b|GARDEN\s*II\b|ZONE\s*2\b|2-PART|CLASS\s*II\b|GROUP\s*2\b)/i.test(upper)) return 2;
  if (/\b(TYPE\s*IIIA|STAGE\s*IIIA|3A)\b/i.test(upper)) return 3.1;
  if (/\b(TYPE\s*IIIB|STAGE\s*IIIB|3B)\b/i.test(upper)) return 3.2;
  if (/\b(TYPE\s*IIIC|STAGE\s*IIIC|3C)\b/i.test(upper)) return 3.3;
  if (/\b(TYPE\s*III\b|STAGE\s*III\b|GRADE\s*III\b|GARDEN\s*III\b|ZONE\s*3\b|3-PART|CLASS\s*III\b|GROUP\s*3\b)/i.test(upper)) return 3;
  if (/\b(TYPE\s*IV\b|STAGE\s*IV\b|GRADE\s*IV\b|GARDEN\s*IV\b|ZONE\s*4\b|4-PART|CLASS\s*IV\b|GROUP\s*4\b)/i.test(upper)) return 4;
  if (/\b(TYPE\s*V\b|STAGE\s*V\b|GRADE\s*V\b|ZONE\s*5\b|5-PART|CLASS\s*V\b|GROUP\s*5\b)/i.test(upper)) return 5;
  if (/\b(TYPE\s*VI\b|STAGE\s*VI\b|GRADE\s*VI\b|ZONE\s*6\b|6-PART|CLASS\s*VI\b|GROUP\s*6\b)/i.test(upper)) return 6;

  // Check Roman Numerals anywhere
  const romanMatch = upper.match(/\b(I|II|III|IV|V|VI|VII|VIII)\b/);
  if (romanMatch) {
    const roman = romanMatch[1];
    const map: Record<string, number> = { I: 1, II: 2, III: 3, IV: 4, V: 5, VI: 6, VII: 7, VIII: 8 };
    if (map[roman]) return map[roman];
  }

  // Check simple digit
  const numMatch = upper.match(/\b(\d+)\b/);
  if (numMatch) return parseInt(numMatch[1], 10);

  // Check Letter (Type A, Type B, Type C)
  const letterMatch = upper.match(/\bTYPE\s*([A-F])\b/);
  if (letterMatch) return letterMatch[1].charCodeAt(0) - 64;

  return 99;
}

/** Sorts classification options strictly in sequential order (I -> II -> III -> IV) */
export function sortClassificationOptions(options: ClassificationTypeOption[]): ClassificationTypeOption[] {
  return [...options].sort((a, b) => {
    const rankA = parseRomanOrNumberRank(a.typeCode);
    const rankB = parseRomanOrNumberRank(b.typeCode);
    if (rankA !== rankB) return rankA - rankB;
    return a.typeCode.localeCompare(b.typeCode, undefined, { numeric: true });
  });
}

/** Helper to get anatomical region of a bone */
function getBoneAnatomicalRegion(boneId: string): "shoulder_girdle" | "hand_wrist_elbow" | "spine" | "pelvis_lower" {
  if (["clavicle", "scapula", "humerus", "shoulder"].includes(boneId)) return "shoulder_girdle";
  if (["forearm", "hand", "wrist", "elbow"].includes(boneId)) return "hand_wrist_elbow";
  if (["c-spine", "tl-spine", "spine"].includes(boneId)) return "spine";
  return "pelvis_lower";
}

/**
 * Generates Spot Question:
 * - If target is Investigation View: 1-step Radiographic View Identification (4 view choices from the SAME anatomical group)
 * - If target is Fracture Classification: 2-step Identification (Step 1: System, Step 2: Type/Stage sorted I -> II -> III -> IV)
 */
export function generateTwoStepSpotQuestion(
  allItems: SpotFilmItem[],
  categoryFilter: string = "all"
): TwoStepSpotQuestion | null {
  const dataset = (allItems && allItems.length > 0) ? allItems : VERIFIED_REAL_TRAUMA_XRAYS;

  let pool = dataset;
  if (categoryFilter !== "all") {
    if (categoryFilter === "upper") {
      pool = dataset.filter(i => ["clavicle", "scapula", "humerus", "forearm", "hand"].includes(i.boneId));
    } else if (categoryFilter === "lower") {
      pool = dataset.filter(i => ["pelvis", "femur", "patella", "tibia", "foot"].includes(i.boneId));
    } else if (categoryFilter === "spine") {
      pool = dataset.filter(i => ["c-spine", "tl-spine"].includes(i.boneId));
    }
  }

  if (pool.length === 0) pool = dataset;

  const targetIdx = Math.floor(Math.random() * pool.length);
  const target = pool[targetIdx];

  // ── Case 1: Target is a Special Investigation View (Anatomically-matched 1-Step View Quiz) ──
  if (target.kind === "investigation_view") {
    const targetAnatRegion = getBoneAnatomicalRegion(target.boneId);

    // Filter other special views strictly within the same anatomical category
    const sameRegionDatasetViews = dataset.filter(
      i => i.kind === "investigation_view" && i.id !== target.id && getBoneAnatomicalRegion(i.boneId) === targetAnatRegion
    );
    const sameRegionDistractors = ALL_SPECIAL_VIEW_DISTRACTORS.filter(
      d => d.region === targetAnatRegion && d.typeCode !== target.typeCode
    );

    const candidateSameRegionPool = [
      ...sameRegionDatasetViews.map(v => ({ id: v.id, typeCode: v.typeCode, typeName: v.typeName })),
      ...sameRegionDistractors.map(d => ({ id: d.id, typeCode: d.typeCode, typeName: d.typeName })),
    ];

    // Deduplicate by typeCode
    const seenCodes = new Set<string>([target.typeCode]);
    const uniqueSameRegionPool: { id: string; typeCode: string; typeName: Translation }[] = [];
    for (const item of candidateSameRegionPool) {
      if (!seenCodes.has(item.typeCode)) {
        seenCodes.add(item.typeCode);
        uniqueSameRegionPool.push(item);
      }
    }

    const shuffledSameRegion = [...uniqueSameRegionPool].sort(() => Math.random() - 0.5);
    let chosenDistractors = shuffledSameRegion.slice(0, 3);

    // If fewer than 3 in exact same region, fallback to upper/lower related
    if (chosenDistractors.length < 3) {
      const otherViews = ALL_SPECIAL_VIEW_DISTRACTORS.filter(d => !seenCodes.has(d.typeCode));
      const shuffledOthers = [...otherViews].sort(() => Math.random() - 0.5);
      chosenDistractors = [...chosenDistractors, ...shuffledOthers].slice(0, 3);
    }

    const viewOptionsRaw: ClassificationTypeOption[] = [
      {
        id: target.id,
        typeCode: target.typeCode,
        typeName: target.typeName,
        isCorrect: true,
      },
      ...chosenDistractors.map(d => ({
        id: d.id,
        typeCode: d.typeCode,
        typeName: d.typeName,
        isCorrect: false,
      })),
    ].sort(() => Math.random() - 0.5);

    return {
      kind: "investigation_view",
      target,
      step1Options: [],
      step2Options: [],
      viewOptions: viewOptionsRaw,
    };
  }

  // ── Case 2: Target is a Fracture Classification (2-Step Flow) ──
  const targetSystemName = target.systemName;
  const correctSysObj = ALL_ORTHO_CLASSIFICATION_SYSTEMS.find(s => s.name === targetSystemName) || {
    id: target.id,
    name: target.systemName,
    fullName: target.systemFullName,
    boneName: target.boneName,
  };

  const otherSystems = ALL_ORTHO_CLASSIFICATION_SYSTEMS.filter(s => s.name !== targetSystemName);
  const shuffledOtherSystems = [...otherSystems].sort(() => Math.random() - 0.5);
  const distractorSystems = shuffledOtherSystems.slice(0, 3);

  const step1Raw: ClassificationSystemOption[] = [
    {
      id: correctSysObj.id,
      name: correctSysObj.name,
      fullName: correctSysObj.fullName,
      boneName: correctSysObj.boneName,
      isCorrect: true,
    },
    ...distractorSystems.map(d => ({
      id: d.id,
      name: d.name,
      fullName: d.fullName,
      boneName: d.boneName,
      isCorrect: false,
    })),
  ].sort(() => Math.random() - 0.5);

  // Step 2 Options: 1 Correct Type + other Types from the same system / dataset
  const sameSystemItems = dataset.filter(i => i.kind === "classification" && i.systemName === targetSystemName && i.id !== target.id);
  const otherClassItems = dataset.filter(i => i.kind === "classification" && i.id !== target.id);

  let candidateDistractorTypes: SpotFilmItem[] = [];
  if (sameSystemItems.length >= 3) {
    candidateDistractorTypes = [...sameSystemItems].sort(() => Math.random() - 0.5).slice(0, 3);
  } else {
    const diffSysItems = otherClassItems.filter(i => !sameSystemItems.includes(i)).sort(() => Math.random() - 0.5);
    candidateDistractorTypes = [...sameSystemItems, ...diffSysItems].slice(0, 3);
  }

  const step2Raw: ClassificationTypeOption[] = [
    {
      id: target.id,
      typeCode: target.typeCode,
      typeName: target.typeName,
      isCorrect: true,
    },
    ...candidateDistractorTypes.map(d => ({
      id: d.id,
      typeCode: d.typeCode,
      typeName: d.typeName,
      isCorrect: false,
    })),
  ];

  // Strictly sort Step 2 options sequentially (I -> II -> III -> IV)
  const step2Sorted = sortClassificationOptions(step2Raw);

  return {
    kind: "classification",
    target,
    step1Options: step1Raw,
    step2Options: step2Sorted,
    viewOptions: [],
  };
}
