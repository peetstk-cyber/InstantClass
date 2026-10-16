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
    regionId: "femoral-neck",
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
    regionId: "pelvic-ring",
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
    boneId: "tibia",
    regionId: "distal",
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
    regionId: "olecranon",
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
    regionId: "calcaneus",
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
    regionId: "patella",
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
    regionId: "ac-joint",
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
    regionId: "radial-head",
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
    regionId: "femoral-neck",
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
    regionId: "intertrochanteric",
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
    regionId: "radial-head",
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
    regionId: "upper-cervical",
  },
  // ── Forearm / Radius — Henry Approach & PIN Protection ──
  {
    id: "hy-radius-henry-approach",
    category: "upper",
    tag: { en: "SURGICAL APPROACH • RADIUS", th: "กายวิภาคผ่าตัด • กระดูกปลายแขน" },
    scenario: {
      en: "A 27-year-old male sustains a displaced fracture of the proximal third of the radial shaft following a motorcycle collision. The orthopedic team performs an anterior volar approach (Henry approach) for open reduction and internal fixation. To mobilize and reflect the supinator muscle off its radial insertion without causing traction or transection injury to the posterior interosseous nerve (PIN), in which position must the forearm be maintained?",
      th: "ผู้ป่วยชายอายุ 27 ปี ประสบอุบัติเหตุรถจักรยานยนต์ เกิดกระดูกเรเดียสส่วนต้น (Proximal third radial shaft) หักแบบเลื่อนตำแหน่ง ศัลยแพทย์ออร์โธปิดิกส์ลงแผลผ่าตัดด้านหน้า (Henry approach) เพื่อทำ ORIF ในขั้นตอนการเลาะเปิดกล้ามเนื้อ Supinator ออกจากจุดเกาะที่กระดูกเพื่อป้องกันการบาดเจ็บต่อเส้นประสาท Posterior Interosseous Nerve (PIN) แขนท่อนล่างต้องถูกจัดให้อยู่ในท่าใด?",
    },
    options: [
      {
        id: 0,
        text: {
          en: "Full supination to shift the posterior interosseous nerve laterally away from the field",
          th: "Supination เต็มที่ เพื่อเลื่อนแนวเส้นประสาท Posterior interosseous ออกไปทางด้านข้างและห่างจากลานผ่าตัด",
        },
        isCorrect: true,
      },
      {
        id: 1,
        text: {
          en: "Full pronation to relax the supinator muscle belly and protect the radial recurrent arcade",
          th: "Pronation เต็มที่ เพื่อหย่อนมัดกล้ามเนื้อ Supinator และป้องกันอันตรายต่อแขนงหลอดเลือด Radial recurrent",
        },
        isCorrect: false,
      },
      {
        id: 2,
        text: {
          en: "Neutral rotation to balance tension between the supinator and adjacent pronator teres bellies",
          th: "Neutral rotation เพื่อลดแรงตึงผิวระหว่างกล้ามเนื้อ Supinator และขอบของกล้ามเนื้อ Pronator teres",
        },
        isCorrect: false,
      },
      {
        id: 3,
        text: {
          en: "Moderate pronation with wrist flexion to displace the superficial sensory radial nerve medially",
          th: "Pronation เล็กน้อย ร่วมกับงอข้อมือ เพื่อเลื่อนเส้นประสาท Superficial sensory radial nerve เข้าด้านใน",
        },
        isCorrect: false,
      },
    ],
    explanation: {
      en: "In the anterior approach to the proximal radius (Henry approach), the supinator muscle must be elevated subperiosteally from medial to lateral. Maintaining the forearm in full supination rotates the radial tuberosity anteriorly and shifts the insertion of the supinator laterally, displacing the posterior interosseous nerve (PIN)—which courses within the substance of the supinator—laterally and posteriorly away from the dissection. In contrast, pronation brings the PIN medially and anteriorly directly into the surgical field, drastically increasing the risk of iatrogenic nerve transection or traction injury.",
      th: "ในการผ่าตัดเปิดกระดูกเรเดียสส่วนต้นทางด้านหน้า (Henry approach) จะต้องเลาะกล้ามเนื้อ Supinator ออกจากกระดูกจาก medial ไป lateral โดยแขนท่อนล่างต้องถูกจัดให้อยู่ในท่า Supination เต็มที่เสมอ เนื่องจากการหงายมือจะหมุน Radial tuberosity มาด้านหน้าและผลักจุดเกาะของ Supinator พร้อมเส้นประสาท PIN (ที่ทอดผ่านกล้ามเนื้อนี้) ให้ถอยร่นออกไปทางด้านข้างและด้านหลัง (laterally and posteriorly) พ้นจากลานผ่าตัด หากคว่ำแขน (Pronation) เส้นประสาท PIN จะถูกดึงหมุนเข้ามาด้านหน้าและอยู่ใกล้แนวผ่าตัดอย่างอันตราย เสี่ยงต่อการบาดเจ็บรุนแรง",
    },
    pearls: {
      en: "Surgical mnemonic: 'Supinate to Save the PIN' during proximal Henry approach. Always dissect subperiosteally from the medial border of the radius toward the lateral aspect.",
      th: "หลักการจำ: 'Supinate to Save the PIN' เมื่อเปิด Henry approach ส่วนต้น ต้องเลาะแบบ Subperiosteal จากขอบด้านใน (Medial) ไปขอบด้านนอก (Lateral) ในท่าหงายมือสุดเสมอ",
    },
    boneId: "forearm",
    regionId: "shaft",
  },
  // ── Talus — Hawkins Classification & Hawkins Sign ──
  {
    id: "hy-talus-hawkins-sign",
    category: "lower",
    tag: { en: "CLASSIFICATION & COMPLICATION • TALUS", th: "การจำแนกและการฟื้นตัว • กระดูกทาลัส" },
    scenario: {
      en: "A 34-year-old roofer falls from height and sustains a closed, displaced talar neck fracture with subtalar dislocation (Hawkins Type II). He undergoes urgent anatomic open reduction and rigid internal fixation with dual cannulated compression screws. At his 8-week postoperative visit, a mortise radiograph demonstrates a linear, patchy radiolucency directly beneath the subchondral bone plate of the talar dome. What does this radiographic finding signify regarding the biological status of the talus?",
      th: "ช่างมุงหลังคาเพศชายอายุ 34 ปี พลัดตกจากที่สูง ได้รับบาดเจ็บกระดูกคอทาเลสหักแบบเคลื่อนตำแหน่งร่วมกับข้อใต้ทาเลสหลุด (Hawkins Type II) ได้รับการผ่าตัดจัดกระดูกเข้าที่และยึดตรึงด้วยสกรูอัดสองตัวอย่างเร่งด่วน ในการตรวจติดตามอาการสัปดาห์ที่ 8 ภาพรังสีข้อเท้าท่า Mortise view พบแถบเงาดำโปร่งรังสี (patchy radiolucency) ใต้แนว Subchondral bone plate บริเวณ Talar dome อย่างชัดเจน ภาพรังสีนี้ (Hawkins sign) บ่งบอกถึงสภาวะทางชีววิทยาใดของกระดูกทาเลส?",
    },
    options: [
      {
        id: 0,
        text: {
          en: "Subchondral osteopenia signifying active revascularization and viability of the talar body",
          th: "ภาวะเนื้อกระดูกบางจากการขาดการลงน้ำหนัก บ่งบอกว่ามีเส้นเลือดกลับมาเลี้ยงและกระดูกยังไม่ตาย",
        },
        isCorrect: true,
      },
      {
        id: 1,
        text: {
          en: "Subchondral osteolysis signifying structural collapse and established osteonecrosis of the talus",
          th: "การละลายของเนื้อกระดูกใต้ผิวข้อ บ่งชี้การยุบตัวของโครงสร้างและเกิดภาวะหัวกระดูกตายถาวร",
        },
        isCorrect: false,
      },
      {
        id: 2,
        text: {
          en: "Implant loosening signifying loss of rigid internal fixation requiring urgent revision surgery",
          th: "การคลายตัวของสกรูยึด บ่งบอกถึงการสูญเสียความมั่นคงในการตรึงกระดูกและต้องผ่าตัดแก้ไขด่วน",
        },
        isCorrect: false,
      },
      {
        id: 3,
        text: {
          en: "Post-traumatic chondrolysis signifying acute end-stage arthritis of the tibiotalar articulation",
          th: "การสลายตัวของกระดูกอ่อนข้อต่อ บ่งชี้การเกิดภาวะข้อเท้าเสื่อมรุนแรงระยะสุดท้ายหลังการบาดเจ็บ",
        },
        isCorrect: false,
      },
    ],
    explanation: {
      en: "Hawkins sign refers to a patchy, subchondral radiolucency beneath the articular surface of the talar dome visible on mortise or AP ankle radiographs at 6 to 8 weeks post-injury. It represents disuse osteopenia and bone resorption, which physiologically can only occur if the talar body possesses intact vascular perfusion. Therefore, the presence of a positive Hawkins sign is a highly reliable indicator of talar viability, effectively ruling out avascular necrosis (AVN). Conversely, absence of subchondral radiolucency (a sclerotic talar dome relative to surrounding osteopenic tibia and fibula) indicates ischemia and high probability of osteonecrosis.",
      th: "Hawkins sign คือการพบรอยโปร่งรังสี (radiolucency) บริเวณใต้กระดูกอ่อนผิวข้อของ Talar dome ในภาพถ่ายเอกซเรย์สัปดาห์ที่ 6-8 หลังการบาดเจ็บ รอยโปร่งรังสีนี้เกิดจากภาวะ Disuse osteopenia (การสลายเนื้อกระดูกจากการไม่ได้ลงน้ำหนัก) ซึ่งจะเกิดขึ้นได้ก็ต่อเมื่อมี 'กระแสเลือดมาเลี้ยงอย่างสมบูรณ์' เท่านั้น ดังนั้น การมี Hawkins sign จึงเป็นข้อบ่งชี้สำคัญที่ยืนยันว่ากระดูกยังมีชีวิต (Viable) และแทบตัดโอกาสการเกิด AVN ออกไปได้ ตรงกันข้าม หากไม่พบรอยโปร่งรังสี (กระดูกทาเลสยังคงขาวทึบ Sclerotic เมื่อเทียบกับกระดูก Tibia/Fibula รอบข้างที่บางลง) แสดงว่าขาดเลือดไปเลี้ยงและมีความเสี่ยงสูงที่จะเกิด AVN",
    },
    pearls: {
      en: "A positive Hawkins sign indicates bone viability and rules out osteonecrosis; absence of subchondral atrophy indicates ischemia and impending talar dome AVN.",
      th: "Hawkins sign ให้ผลบวก (เห็นรอยดำโปร่งรังสี) = กระดูกมีเลือดเลี้ยงและรอดชีวิต หากให้ผลลบ (กระดูกยังขาวทึบไม่บางลง) = หัวกระดูกขาดเลือดและเสี่ยงต่อการเกิด AVN สูงมาก",
    },
    boneId: "foot",
    regionId: "talus",
  },
  // ── Pelvis & Acetabulum — Modified Stoppa Approach & Corona Mortis ──
  {
    id: "hy-pelvis-corona-mortis",
    category: "lower",
    tag: { en: "SURGICAL ANATOMY • PELVIC TRAUMA", th: "กายวิภาคศาสตร์การผ่าตัด • กระดูกเชิงกราน" },
    scenario: {
      en: "A 36-year-old male sustains an anterior column and quadrilateral plate acetabular fracture following a motor vehicle collision. The surgical team performs open reduction via an anterior intrapelvic (modified Stoppa) approach. While subperiosteally dissecting along the superior pubic ramus over the pectineal line (Cooper's ligament) approximately 4 to 5 cm lateral to the pubic symphysis, brisk arterial bleeding is suddenly encountered. Which vascular connection represents this hazardous anatomical variant (corona mortis)?",
      th: "ผู้ป่วยชายอายุ 36 ปี ประสบอุบัติเหตุทางรถยนต์ ได้รับบาดเจ็บกระดูกเบ้าสะโพกส่วนหน้าและ Quadrilateral plate หัก ทีมศัลยแพทย์วางแผนผ่าตัดผ่านทาง Anterior intrapelvic (Modified Stoppa) approach ขณะกำลังเลาะเยื่อหุ้มกระดูกบริเวณ Superior pubic ramus เหนือแนว Pectineal line (Cooper's ligament) ห่างจาก Pubic symphysis ออกไปทางด้านข้าง 4-5 เซนติเมตร เกิดเลือดออกปริมาณมากจากหลอดเลือดแดงอย่างกะทันหัน หลอดเลือดที่มีความเสี่ยงสูงนี้ (Corona mortis) เกิดจากการเชื่อมต่อ (Anastomosis) ระหว่างหลอดเลือดคู่ใด?",
    },
    options: [
      {
        id: 0,
        text: {
          en: "Anastomosis between the inferior epigastric or external iliac artery and obturator artery",
          th: "หลอดเลือดเชื่อมต่อระหว่าง Inferior epigastric หรือ External iliac artery กับ Obturator artery",
        },
        isCorrect: true,
      },
      {
        id: 1,
        text: {
          en: "Anastomosis between the superior gluteal artery and the medial femoral circumflex artery",
          th: "หลอดเลือดเชื่อมต่อระหว่าง Superior gluteal artery กับ Medial femoral circumflex artery",
        },
        isCorrect: false,
      },
      {
        id: 2,
        text: {
          en: "Anastomosis between the internal pudendal artery and the deep inferior rectal artery",
          th: "หลอดเลือดเชื่อมต่อระหว่าง Internal pudendal artery กับ Inferior rectal artery",
        },
        isCorrect: false,
      },
      {
        id: 3,
        text: {
          en: "Anastomosis between the lateral circumflex femoral artery and the ascending iliolumbar artery",
          th: "หลอดเลือดเชื่อมต่อระหว่าง Lateral circumflex femoral artery กับ Iliolumbar artery",
        },
        isCorrect: false,
      },
    ],
    explanation: {
      en: "The corona mortis ('crown of death') is an anatomical vascular anastomosis between the external iliac or inferior epigastric arterial system and the obturator system of the internal iliac artery. It traverses directly over the superior pubic ramus along the pectineal line (Cooper's ligament), approximately 3 to 5 cm lateral to the pubic symphysis. During anterior approaches to the acetabulum and pelvis—such as the anterior intrapelvic (modified Stoppa) approach or the middle window of the ilioinguinal approach—vigorous retraction or unrecognised dissection can avulse or transect this vessel. Retraction into the obturator canal can cause torrential, life-threatening retroperitoneal hemorrhage. The superior gluteal to medial circumflex anastomosis contributes to the cruciate anastomosis of the posterior hip. The internal pudendal to inferior rectal branches run through Alcock's canal in the perineum. The lateral circumflex and iliolumbar arteries do not cross Cooper's ligament.",
      th: "Corona mortis ('มงกุฎแห่งความตาย') คือหลอดเลือดเชื่อมต่อ (Anastomosis) ผิดปกติระหว่างระบบหลอดเลือด External iliac (ผ่าน Inferior epigastric artery) กับระบบ Internal iliac (ผ่าน Obturator artery) ซึ่งทอดข้ามเหนือขอบ Superior pubic ramus บริเวณ Pectineal line (Cooper's ligament) ห่างจากแนวข้อต่อหัวเหน่า (Pubic symphysis) ประมาณ 3-5 เซนติเมตร ในการผ่าตัดกระดูกเบ้าสะโพกและเชิงกรานทางด้านหน้า เช่น Anterior intrapelvic (Modified Stoppa) approach หรือช่องที่ 2 (Middle window) ของ Ilioinguinal approach หากเลาะเปิดเนื้อเยื่อโดยไม่ระมัดระวังหรือดึงรั้งมากเกินไป หลอดเลือดนี้อาจฉีกขาดและปลายหลอดเลือดหดร่นเข้าไปใน Obturator foramen ทำให้เกิดภาวะเลือดออกรุนแรงในช่องเชิงกรานจนเป็นอันตรายถึงชีวิตได้ ส่วนหลอดเลือดคู่อื่นๆ เช่น Superior gluteal กับ Medial femoral circumflex เป็นส่วนหนึ่งของ Cruciate anastomosis ด้านหลังข้อสะโพก, Internal pudendal ทอดตัวอยู่ในฝีเย็บ (Pudendal/Alcock's canal) และ Lateral circumflex กับ Iliolumbar ไม่ได้ทอดผ่านแนว Cooper's ligament",
    },
    pearls: {
      en: "Always systematically identify, isolate, and prophylactically clip or bipolar coagulate the corona mortis over Cooper's ligament before dissecting the quadrilateral plate in a modified Stoppa approach.",
      th: "ในการผ่าตัด Modified Stoppa approach ต้องมองหา แยก และหนีบคลิป (Ligate/Clip) หรือจี้ไฟฟ้าหลอดเลือด Corona mortis เหนือแนว Cooper's ligament (ห่างจากข้อต่อหัวเหน่า 3-5 ซม.) เสมอก่อนลงมือเลาะแผ่น Quadrilateral plate",
    },
    boneId: "pelvis",
    regionId: "acetabulum",
  },
  // ── Humerus Shaft — Holstein-Lewis Fracture & Radial Nerve Management ──
  {
    id: "hy-humerus-holstein-lewis",
    category: "upper",
    tag: { en: "EMERGENCY MANAGEMENT • HUMERUS SHAFT", th: "การจัดการภาวะฉุกเฉิน • กระดูกต้นแขน" },
    scenario: {
      en: "A 32-year-old male sustains a closed, spiral fracture of the distal third of the humeral shaft (Holstein-Lewis pattern) following a motor vehicle collision. On clinical examination, he presents with complete wrist drop, inability to extend the metacarpophalangeal joints, and numbness over the dorsal first web space. The extremity is closed with intact distal pulses and no signs of compartment syndrome. Post-splinting radiographs confirm acceptable fracture alignment (< 15 degrees angulation and < 2 cm shortening). What is the most appropriate initial management for this patient's radial nerve palsy?",
      th: "ผู้ป่วยชายอายุ 32 ปี ประสบอุบัติเหตุทางรถยนต์ ได้รับบาดเจ็บกระดูกต้นแขนส่วนปลายหักแบบเกลียว (Spiral distal third humeral shaft fracture หรือ Holstein-Lewis fracture) ชนิดแผลปิด ตรวจร่างกายพบภาวะข้อมือตก (Wrist drop) ไม่สามารถกระดกข้อนิ้วมือ (MCP joints) ได้ และสูญเสียการรับรู้ความรู้สึกบริเวณง่ามนิ้วโป้งด้านหลังมือ (Dorsal first web space) ชีพจรส่วนปลายเต้นปกติ ไม่มีภาวะ Compartment syndrome ภาพเอกซเรย์หลังดามเฝือกชั่วคราวพบแนวกระดูกอยู่ในเกณฑ์ที่ยอมรับได้ แนวทางการดูแลรักษาเบื้องต้นที่ถูกต้องและเหมาะสมที่สุดสำหรับภาวะเส้นประสาทเรเดียลบาดเจ็บในผู้ป่วยรายนี้คือข้อใด?",
    },
    options: [
      {
        id: 0,
        text: {
          en: "Observation with functional bracing and serial electrodiagnostic and clinical monitoring",
          th: "การเฝ้าสังเกตอาการทางคลินิกร่วมกับการใส่เฝือกพยุงและตรวจประเมินระบบประสาทต่อเนื่อง",
        },
        isCorrect: true,
      },
      {
        id: 1,
        text: {
          en: "Urgent open exploration and neurolysis through an anterolateral or posterior approach",
          th: "การผ่าตัดเปิดสำรวจเส้นประสาทอย่างเร่งด่วนผ่านทาง Anterolateral หรือ Posterior approach",
        },
        isCorrect: false,
      },
      {
        id: 2,
        text: {
          en: "Immediate closed reduction under general anesthesia and percutaneous retrograde intramedullary nailing",
          th: "การดึงจัดแนวกระดูกเข้าที่ในห้องผ่าตัดและใส่แท่งเหล็กดามกระดูกแบบ Intramedullary nailing",
        },
        isCorrect: false,
      },
      {
        id: 3,
        text: {
          en: "Emergent surgical exploration with primary epineural repair and anterior nerve transposition",
          th: "การผ่าตัดเย็บซ่อมเส้นประสาทแบบ Epineural repair และย้ายตำแหน่งเส้นประสาททันที",
        },
        isCorrect: false,
      },
    ],
    explanation: {
      en: "In closed humeral shaft fractures presenting with primary radial nerve palsy—including distal third spiral fractures (Holstein-Lewis variant)—approximately 85% to 90% of nerve injuries represent neurapraxia or axonotmesis that resolve spontaneously within 3 to 6 months. When the fracture is closed, neurovascular distal perfusion is preserved, and acceptable reduction is maintained, initial nonoperative management with a coaptation splint transitioning to a functional Sarmiento brace alongside serial clinical and electrodiagnostic (EMG/NCS) evaluations at 3 to 4 months is the standard of care. Absolute indications for early operative exploration include: (1) open humeral fractures with nerve palsy, (2) concomitant vascular injury requiring surgical revascularization, (3) secondary radial nerve palsy that develops de novo following closed reduction or manipulation (concerning for entrapment between bone spikes), and (4) absence of clinical or electromyographic recovery after 3 to 4 months of observation.",
      th: "ในผู้ป่วยกระดูกต้นแขนหักชนิดแผลปิดที่มีภาวะเส้นประสาทเรเดียลบาดเจ็บร่วมด้วยตั้งแต่แรก (Primary radial nerve palsy) รวมถึงกระดูกหักบริเวณรอยต่อส่วนปลายแบบเกลียว (Holstein-Lewis fracture) พบว่าร้อยละ 85-90 ของการบาดเจ็บเป็นแบบ Neurapraxia หรือ Axonotmesis ซึ่งสามารถฟื้นตัวกลับมาได้เองภายในระยะเวลา 3 ถึง 6 เดือน หากเป็นแผลปิด ระบบไหลเวียนเลือดส่วนปลายปกติ และแนวกระดูกอยู่ในเกณฑ์ที่ยอมรับได้ การรักษาเบื้องต้นที่ได้มาตรฐานคือการให้การรักษาแบบประคับประคอง โดยดามเฝือกชั่วคราวแล้วเปลี่ยนเป็น Functional Sarmiento brace ร่วมกับการตรวจติดตามอาการทางคลินิกและการตรวจคลื่นไฟฟ้ากล้ามเนื้อ (EMG/NCV) เมื่อครบ 3-4 เดือน ข้อบ่งชี้ในการผ่าตัดเปิดสำรวจเส้นประสาทตั้งแต่แรก ได้แก่ (1) กระดูกหักแบบเปิด (Open fracture), (2) มีการบาดเจ็บของหลอดเลือดร่วมด้วย, (3) ภาวะเส้นประสาทเป็นอัมพาตที่เกิดขึ้น 'หลัง' การดึงจัดกระดูก (Secondary palsy ซึ่งบ่งชี้ว่าเส้นประสาทอาจถูกหนีบติดในรอยหัก), หรือ (4) ตรวจไม่พบการฟื้นตัวหลังเฝ้าสังเกตอาการไปแล้ว 3-4 เดือน",
    },
    pearls: {
      en: "Primary radial nerve palsy in closed humeral shaft fractures should be managed nonoperatively with functional bracing; urgent exploration is reserved for secondary palsy developing after closed manipulation or open fractures.",
      th: "Primary radial nerve palsy ในกระดูกต้นแขนหักชนิดแผลปิดให้รักษาแบบไม่ผ่าตัดด้วย Functional brace ก่อนเสมอ จะผ่าตัดสำรวจด่วนเฉพาะในกรณี Secondary palsy ที่เกิดตามหลังการดึงกระดูก หรือเป็น Open fracture เท่านั้น",
    },
    boneId: "humerus",
    regionId: "shaft",
  },
  // ── Subtrochanteric Femur — Deforming Muscle Forces & Reduction Biomechanics ──
  {
    id: "hy-femur-subtroch-deforming-forces",
    category: "lower",
    tag: { en: "BIOMECHANICS & OPERATIVE PEARL • SUBTROCHANTERIC FEMUR", th: "ชีวกลศาสตร์และเทคนิคผ่าตัด • กระดูกต้นขาส่วนซับโทรแคนเทอริก" },
    scenario: {
      en: "A 34-year-old male is brought to the emergency department following a high-speed motorcycle crash sustaining an isolated, closed, displaced subtrochanteric femur fracture (AO/OTA 32-A1). In the operating suite, during traction on a fracture table prior to cephalomedullary nailing, fluoroscopy demonstrates persistent flexion, abduction, and external rotation of the proximal fragment. Which muscle group combination produces this characteristic proximal fragment deformity, and which vector must the surgeon counteract to achieve anatomical sagittal alignment?",
      th: "ผู้ป่วยชายอายุ 34 ปี ประสบอุบัติเหตุรถจักรยานยนต์ความเร็วสูง ได้รับบาดเจ็บกระดูกต้นขาส่วนใต้ปุ่มกระดูกหักชนิดเคลื่อนที่และเป็นแผลปิด (Subtrochanteric femur fracture, AO/OTA 32-A1) ในห้องผ่าตัดขณะดึงกระดูกบนเตียงผ่าตัดเพื่อเตรียมใส่ Cephalomedullary nail ภาพเอกซเรย์ Fluoroscopy พบชิ้นกระดูกส่วนต้นยังคงค้างอยู่ในท่า Flexion, Abduction และ External rotation กลุ่มกล้ามเนื้อใดเป็นแรงหลักที่ดึงรั้งให้เกิดการผิดรูปดังกล่าว และศัลยแพทย์ต้องออกแรงดัดทิศทางใดเพื่อแก้ไขการผิดรูปในแนวดิ่ง (Sagittal plane)?",
    },
    options: [
      {
        id: 0,
        text: {
          en: "Proximal fragment deformed by iliopsoas, abductors, and short rotators; counteracted by extending the proximal segment",
          th: "ชิ้นกระดูกส่วนต้นถูกดึงรั้งโดย Iliopsoas, Abductors และ Short rotators; แก้ไขด้วยการดัดจัดกระดูกให้อยู่ในท่า Extension",
        },
        isCorrect: true,
      },
      {
        id: 1,
        text: {
          en: "Proximal fragment deformed by rectus femoris, adductors, and obturator internus; counteracted by flexing the proximal segment",
          th: "ชิ้นกระดูกส่วนต้นถูกดึงรั้งโดย Rectus femoris, Adductors และ Obturator internus; แก้ไขด้วยการดัดจัดกระดูกให้อยู่ในท่า Flexion",
        },
        isCorrect: false,
      },
      {
        id: 2,
        text: {
          en: "Proximal fragment deformed by gluteus maximus, pectineus, and piriformis; counteracted by internally rotating the distal segment",
          th: "ชิ้นกระดูกส่วนต้นถูกดึงรั้งโดย Gluteus maximus, Pectineus และ Piriformis; แก้ไขด้วยการหมุนบิดกระดูกส่วนปลายเข้าด้านใน",
        },
        isCorrect: false,
      },
      {
        id: 3,
        text: {
          en: "Proximal fragment deformed by tensor fasciae latae, gracilis, and gemelli; counteracted by externally rotating the distal segment",
          th: "ชิ้นกระดูกส่วนต้นถูกดึงรั้งโดย Tensor fasciae latae, Gracilis และ Gemelli; แก้ไขด้วยการหมุนบิดกระดูกส่วนปลายออกด้านนอก",
        },
        isCorrect: false,
      },
    ],
    explanation: {
      en: "In subtrochanteric femur fractures, the short proximal fragment is subject to powerful, unapposed multi-planar muscular deforming vectors: (1) Flexion driven by the iliopsoas tendon inserting onto the lesser trochanter, (2) Abduction driven by the gluteus medius and gluteus minimus inserting onto the greater trochanter, and (3) External rotation driven by the short external rotators (piriformis, obturators, gemelli, and quadratus femoris). Concurrently, the distal shaft fragment is adducted by the adductor magnus and shortened by the rectus femoris and hamstrings. This results in the classic apex-anterior and apex-lateral (varus) deformity. In the sagittal plane, axial traction on a fracture table cannot overcome the flexion moment because the distal fragment is extended while the proximal fragment remains flexed; therefore, the surgeon must actively counteract the apex-anterior deformity by extending the proximal fragment (using a percutaneous Schanz pin joystick or ball-spike pusher) or flexing the distal fragment to match the proximal fragment prior to nail passage. The distractors misattribute the muscle attachments (rectus femoris does not attach to the proximal femur; gluteus maximus is an extensor; pectineus is an adductor) and promote incorrect reduction vectors.",
      th: "ในกระดูกต้นขาส่วน Subtrochanteric หัก ชิ้นกระดูกส่วนต้น (Proximal fragment) จะถูกแรงดึงจากกลุ่มกล้ามเนื้อรอบข้อสะโพกกระทำหลายทิศทางจนเกิดการผิดรูปจำเพาะ ได้แก่: (1) ท่าก้มงอ (Flexion) จากกล้ามเนื้อ Iliopsoas ที่เกาะบริเวณ Lesser trochanter, (2) ท่ากางออก (Abduction) จากกล้ามเนื้อ Gluteus medius และ Gluteus minimus ที่เกาะบริเวณ Greater trochanter, และ (3) ท่าหมุนออกด้านนอก (External rotation) จากกลุ่มกล้ามเนื้อ Short external rotators ขณะเดียวกันชิ้นกระดูกส่วนปลาย (Distal fragment) จะถูกดึงเข้าด้านใน (Adduction) โดย Adductor magnus และหดสั้นขึ้นด้านบน ทำให้เกิดมุมหงายด้านหน้า (Apex anterior) และมุมโก่งออกด้านข้าง (Apex lateral หรือ Varus) การดึงกระดูกบนเตียงผ่าตัดเพียงอย่างเดียวไม่สามารถแก้การงอด้านหน้าได้ ศัลยแพทย์จึงต้องออกแรงกดหรือดัดชิ้นกระดูกส่วนต้นให้อยู่ในท่าเหยียด (Extension) เช่น การใช้ Schanz pin ทำหน้าที่เป็น Joystick หรือใช้ Ball-spike pusher ดันลง หรือยกชิ้นกระดูกส่วนปลายให้งอขึ้นตามแนวชิ้นส่วนต้นก่อนสอดแท่ง Nail ข้อเลือกอื่นๆ มีการระบุกล้ามเนื้อผิด (เช่น Rectus femoris ไม่ได้เกาะที่ Proximal femur, Gluteus maximus เป็น Extensor, Pectineus เป็น Adductor) และแนะนำทิศทางการจัดกระดูกที่ไม่ถูกต้อง",
    },
    pearls: {
      en: "In subtrochanteric fractures, the proximal fragment is flexed (iliopsoas), abducted (gluteus medius/minimus), and externally rotated (short rotators); a percutaneous Schanz pin joystick or ball-spike pusher is commonly needed to overcome apex-anterior flexion during intramedullary nailing.",
      th: "ใน Subtrochanteric fracture ชิ้นกระดูกส่วนต้นจะถูกดึงเข้าสู่ท่า Flexion (Iliopsoas), Abduction (Gluteus medius/minimus) และ External rotation (Short rotators) ศัลยแพทย์มักต้องใช้ Schanz pin ทำหน้าที่เป็น Joystick หรือใช้ Ball-spike pusher กดลดมุมหงาย (Apex anterior) เพื่อจัดแนวกระดูกให้ตรงก่อนสอดแท่ง Nail",
    },
    boneId: "femur",
    regionId: "subtrochanteric",
  },
  // ── Foot & Midfoot — Lisfranc Joint Complex Radiographic Criteria ──
  {
    id: "hy-foot-lisfranc-alignment",
    category: "lower",
    tag: { en: "RADIOGRAPHIC EVALUATION • LISFRANC INJURY", th: "การแปลผลภาพรังสี • ภาวะบาดเจ็บลิสฟรองค์" },
    scenario: {
      en: "A 24-year-old collegiate soccer player is tackled with their foot planted in equinus and forced into extreme pronation and abduction. In the emergency department, the patient is unable to bear weight and has profound midfoot swelling with plantar ecchymosis. Initial non-weightbearing radiographs are reported as normal. Bilateral weightbearing radiographs of the foot are subsequently obtained. Which anatomical relationship represents the essential radiographic landmark evaluated on the standard anteroposterior (AP) view to confirm tarsometatarsal alignment?",
      th: "นักฟุตบอลหญิงอายุ 24 ปี ถูกปะทะขณะเท้าข้างขวาเหยียบพื้นอยู่ในท่าปลายเท้าจิกลง (Equinus) ร่วมกับมีแรงบิดแบบ Pronation และ Abduction รุนแรง ที่ห้องฉุกเฉินผู้ป่วยไม่สามารถลงน้ำหนักได้ มีอาการบวมมากบริเวณกลางเท้าและพบรอยฟกช้ำใต้ฝ่าเท้า (Plantar ecchymosis) ชัดเจน ภาพเอกซเรย์เบื้องต้นแบบไม่ลงน้ำหนักถูกอ่านว่าปกติ แพทย์จึงสั่งตรวจภาพเอกซเรย์แบบลงน้ำหนักเปรียบเทียบสองข้าง (Bilateral weightbearing foot radiographs) ความสัมพันธ์ทางกายวิภาคใดคือจุดสังเกตสำคัญที่สุดบนฟิล์มท่าหน้าตรง (AP view) ในการประเมินความมั่นคงของข้อต่อทาร์โซเมทาทาร์ซัล (Lisfranc joint)?",
    },
    options: [
      {
        id: 0,
        text: {
          en: "Collinear alignment of the medial border of the second metatarsal shaft with the medial border of the middle cuneiform",
          th: "ขอบด้านในของกระดูก Metatarsal ชิ้นที่สองต้องเรียงเป็นเส้นตรงระนาบเดียวกับขอบด้านในของกระดูก Middle cuneiform",
        },
        isCorrect: true,
      },
      {
        id: 1,
        text: {
          en: "Collinear alignment of the lateral border of the first metatarsal shaft with the lateral border of the medial cuneiform",
          th: "ขอบด้านนอกของกระดูก Metatarsal ชิ้นที่หนึ่งต้องเรียงเป็นเส้นตรงระนาบเดียวกับขอบด้านนอกของกระดูก Medial cuneiform",
        },
        isCorrect: false,
      },
      {
        id: 2,
        text: {
          en: "Collinear alignment of the medial border of the fourth metatarsal shaft with the medial border of the cuboid bone",
          th: "ขอบด้านในของกระดูก Metatarsal ชิ้นที่สี่ต้องเรียงเป็นเส้นตรงระนาบเดียวกับขอบด้านในของกระดูก Cuboid bone",
        },
        isCorrect: false,
      },
      {
        id: 3,
        text: {
          en: "Collinear alignment of the lateral border of the third metatarsal shaft with the lateral border of the lateral cuneiform",
          th: "ขอบด้านนอกของกระดูก Metatarsal ชิ้นที่สามต้องเรียงเป็นเส้นตรงระนาบเดียวกับขอบด้านนอกของกระดูก Lateral cuneiform",
        },
        isCorrect: false,
      },
    ],
    explanation: {
      en: "Evaluating subtle Lisfranc (tarsometatarsal) instability requires systematic inspection of standard radiographic views under physiologic weightbearing: (1) On the standard AP view, the medial border of the second metatarsal base and shaft MUST be strictly collinear with the medial border of the middle (intermediate) cuneiform. Any step-off or diastasis > 2 mm between the first and second metatarsal bases indicates Lisfranc ligament disruption. (2) On the 30-degree internal oblique view, the medial border of the third metatarsal aligns with the medial border of the lateral (lateral) cuneiform, and the medial border of the fourth metatarsal aligns with the medial border of the cuboid. Distractor 1 is false because the lateral border of the first metatarsal has an irregular recess without a continuous landmark; the medial border of the first metatarsal aligns with the medial cuneiform. Distractors 2 and 3 evaluate relationships on the 30-degree internal oblique projection, not the AP view, and distractor 3 incorrectly references the lateral border instead of the medial border.",
      th: "การประเมินการบาดเจ็บของข้อต่อ Lisfranc (Tarsometatarsal joint) ที่มีความคลาดเคลื่อนเพียงเล็กน้อย จำเป็นต้องอาศัยการตรวจดูความสัมพันธ์ทางกายวิภาคบนภาพเอกซเรย์ขณะลงน้ำหนัก (Weightbearing view) อย่างเป็นระบบ: (1) บนฟิล์มท่าหน้าตรง (AP view) ขอบด้านใน (Medial border) ของก้านและฐานกระดูก Metatarsal ชิ้นที่ 2 จะต้องเรียงตรงเป็นแนวระนาบเดียวกันอย่างไร้รอยต่อกับขอบด้านในของกระดูก Middle (Intermediate) cuneiform หากพบมี Step-off หรือมีช่องว่างแยกระหว่างฐานกระดูก Metatarsal ที่ 1 และ 2 มากกว่า 2 มม. แสดงว่ามีเส้นเอ็น Lisfranc ฉีกขาดแน่นอน (2) บนฟิล์มท่าเฉียง 30 องศา (30° Internal oblique view) ขอบด้านในของกระดูก Metatarsal ชิ้นที่ 3 จะต้องตรงกับขอบด้านในของ Lateral cuneiform และขอบด้านในของกระดูก Metatarsal ชิ้นที่ 4 จะต้องตรงกับขอบด้านในของ Cuboid ข้อเลือกที่ 1 ผิดเนื่องจากขอบด้านนอกของ Metatarsal ชิ้นที่ 1 ไม่ใช่จุดอ้างอิงที่เรียบตรง (มี Lisfranc recess) ส่วนข้อเลือกที่ 2 และ 3 เป็นความสัมพันธ์ที่ต้องตรวจบนฟิล์มท่า Oblique ไม่ใช่ท่า AP และข้อเลือกที่ 3 ระบุขอบด้านนอกซึ่งไม่ถูกต้องตามหลักกายวิภาค",
    },
    pearls: {
      en: "On AP foot radiographs, collinearity of the medial border of the second metatarsal with the medial border of the middle cuneiform is the primary indicator of midfoot integrity; plantar ecchymosis is pathognomonic for Lisfranc ligament complex disruption.",
      th: "บนฟิล์มเอกซเรย์ท่า AP ขอบด้านในของ Base of 2nd metatarsal ต้องเรียงตรงเป็นเส้นเดียวกับขอบด้านในของ Middle cuneiform เสมอ หากมี Step-off หรือรอยแยก > 2 มม. บ่งชี้ว่ามี Lisfranc injury และรอยช้ำใต้ฝ่าเท้า (Plantar ecchymosis) ถือเป็นลักษณะจำเพาะ (Pathognomonic sign) ของการบาดเจ็บนี้",
    },
    boneId: "foot",
    regionId: "lisfranc",
  },
  // ── Ankle — Lauge-Hansen SER & Medial Clear Space Stress Radiography ──
  {
    id: "hy-ankle-lauge-hansen-ser",
    category: "lower",
    tag: { en: "IMAGING & STABILITY • ANKLE FRACTURE", th: "การประเมินความมั่นคง • ข้อเท้า" },
    scenario: {
      en: "A 28-year-old female recreational runner sustains an external rotation twisting injury to her right ankle. Initial non-weightbearing radiographs demonstrate an isolated, non-displaced oblique fracture of the lateral malleolus at the level of the syndesmosis (Danis-Weber B / Lauge-Hansen SER). The medial malleolus is radiographically intact, and the initial mortise view reveals a symmetrical medial clear space of 3 mm. However, physical examination elicits focal tenderness and significant ecchymosis over the medial ankle along the deltoid ligament. Which diagnostic evaluation and threshold confirms an unstable 'bimalleolar-equivalent' injury requiring operative open reduction and internal fixation?",
      th: "ผู้ป่วยหญิงอายุ 28 ปี นักวิ่งสมัครเล่น ประสบอุบัติเหตุข้อเท้าขวาบิดหมุนออกด้านนอก (External rotation) ภาพถ่ายเอกซเรย์เบื้องต้นแบบไม่ลงน้ำหนักพบกระดูก Lateral malleolus หักเฉียงแบบไม่เคลื่อนตำแหน่งที่ระดับแนวกระดูก Syndesmosis (Danis-Weber B / Lauge-Hansen SER) โดยกระดูก Medial malleolus ปกติ และภาพท่า Mortise view พบช่องว่าง Medial clear space กว้าง 3 มม. เท่ากันทุกด้าน อย่างไรก็ตาม การตรวจร่างกายพบอาการกดเจ็บจำเพาะและรอยเขียวช้ำชัดเจนบริเวณด้านในข้อเท้าตามแนวเส้นเอ็น Deltoid ligament การตรวจทางรังสีและการวัดค่าใดที่ช่วยยืนยันภาวะ 'Bimalleolar-equivalent fracture' ที่ขาดความมั่นคงและจำเป็นต้องรักษาด้วยการผ่าตัด?",
    },
    options: [
      {
        id: 0,
        text: {
          en: "External rotation stress radiography demonstrating medial clear space widening of 5 millimeters or greater",
          th: "ภาพเอกซเรย์ท่าบิดหมุนออกด้านนอก (External rotation stress) พบช่องว่างด้านในข้อเท้ากว้างตั้งแต่ 5 มิลลิเมตรขึ้นไป",
        },
        isCorrect: true,
      },
      {
        id: 1,
        text: {
          en: "Anterior drawer stress radiography demonstrating anterior talofibular translation of 8 millimeters or greater",
          th: "ภาพเอกซเรย์ท่าดึงข้อเท้าไปด้านหน้า (Anterior drawer stress) พบการเลื่อนของกระดูกทาลัสตั้งแต่ 8 มิลลิเมตรขึ้นไป",
        },
        isCorrect: false,
      },
      {
        id: 2,
        text: {
          en: "Bilateral weightbearing radiography demonstrating medial clear space widening of 2 millimeters or greater",
          th: "ภาพเอกซเรย์ขณะลงน้ำหนักเปรียบเทียบสองข้าง (Weightbearing view) พบช่องว่างด้านในข้อเท้ากว้างตั้งแต่ 2 มิลลิเมตรขึ้นไป",
        },
        isCorrect: false,
      },
      {
        id: 3,
        text: {
          en: "Axial computed tomography imaging demonstrating syndesmotic diastasis of 3 millimeters or greater",
          th: "การตรวจเอกซเรย์คอมพิวเตอร์ในแนวระนาบ (Axial CT scan) พบระยะห่างของข้อต่อซินเดสโมซิสกว้างตั้งแต่ 3 มิลลิเมตรขึ้นไป",
        },
        isCorrect: false,
      },
    ],
    explanation: {
      en: "In isolated fibular fractures at the syndesmotic level (Danis-Weber B / Lauge-Hansen Supination-External Rotation), stability depends critically on the integrity of the deep deltoid ligament. When the medial malleolus is intact but medial ecchymosis and tenderness are present, static non-weightbearing radiographs often underestimate instability. An external rotation stress radiograph (manual stress or gravity stress view) or a standing weightbearing radiograph must be obtained. A medial clear space (MCS) widening >= 4 to 5 mm (or greater than the superior clear space between the talar dome and tibial plafond) indicates complete disruption of the deep deltoid ligament. This converts the injury from a stable SER Stage II (treated non-operatively in a boot/cast) to an unstable SER Stage IV 'bimalleolar-equivalent' fracture requiring operative open reduction and internal fixation to restore mortise congruity. Anterior drawer stress evaluates chronic anterior talofibular ligament laxity. A 2 mm medial clear space is physiologically normal. Axial CT without dynamic stress does not establish competence of the deep deltoid ligament.",
      th: "ในกระดูกตาตุ่มนอก (Fibula) หักระดับแนวข้อต่อ (Danis-Weber B หรือ Lauge-Hansen SER) ความมั่นคงของข้อเท้าขึ้นอยู่กับความสมบูรณ์ของเส้นเอ็น Deep deltoid ligament เป็นสำคัญ หากไม่มีกระดูกตาตุ่มในหักแต่ตรวจพบรอยฟกช้ำและกดเจ็บบริเวณด้านใน ฟิล์มเอกซเรย์ธรรมดาที่ไม่ได้ลงน้ำหนักมักจะประเมินความรุนแรงต่ำกว่าความเป็นจริง จึงจำเป็นต้องทำ External rotation stress radiograph (Manual หรือ Gravity stress) หรือถ่ายฟิล์มเอกซเรย์ขณะยืนลงน้ำหนัก หากพบช่องว่าง Medial clear space กว้างตั้งแต่ 4-5 มม. ขึ้นไป (หรือกว้างกว่าช่องว่างด้านบน Superior clear space) แสดงว่าเส้นเอ็น Deep deltoid ฉีกขาดอย่างสมบูรณ์ ทำให้เปลี่ยนการวินิจฉัยจาก SER Stage II (กระดูกมั่นคง รักษาแบบไม่ผ่าตัด) กลายเป็น SER Stage IV หรือ 'Bimalleolar-equivalent fracture' ที่ข้อเท้าไม่มั่นคงและจำเป็นต้องผ่าตัดยึดตรึงกระดูก (ORIF) เพื่อป้องกันข้อเท้าเสื่อมในระยะยาว ส่วน Anterior drawer stress ใช้ตรวจเอ็น ATFL เรื้อรัง, ค่า 2 มม. ถือเป็นระยะปกติทางสรีรวิทยา และ CT scan ธรรมดาไม่สามารถบอกความมั่นคงของเอ็น Deltoid ภายใต้แรงบิดหมุนได้",
    },
    pearls: {
      en: "In Weber B fibula fractures with medial tenderness, always perform gravity or manual external rotation stress views; a medial clear space >= 5 mm defines an unstable bimalleolar-equivalent (SER IV) requiring ORIF.",
      th: "ในกระดูกตาตุ่มนอกหักแบบ Weber B ที่มีอาการกดเจ็บด้านใน ต้องถ่ายภาพรังสีท่า External rotation stress เสมอ หาก Medial clear space กว้าง >= 5 มม. ถือเป็น Bimalleolar-equivalent (SER IV) ซึ่งจำเป็นต้องผ่าตัด ORIF",
    },
    boneId: "tibia",
    regionId: "distal",
  },
  // ── Shoulder & Proximal Humerus — Deltopectoral Approach & Musculocutaneous Nerve ──
  {
    id: "hy-shoulder-deltopectoral-nerve",
    category: "upper",
    tag: { en: "SURGICAL APPROACH • SHOULDER", th: "ทางเข้าผ่าตัด • ข้อไหล่" },
    scenario: {
      en: "A 58-year-old male sustains a displaced three-part proximal humerus fracture after a fall. The orthopedic trauma team performs open reduction and internal fixation with a locked plating construct via a standard deltopectoral approach. Following cephalic vein identification and mobilization laterally, the clavipectoral fascia is incised. To improve visualization of the medial calcar and subscapularis tendon, a retractor is placed beneath the conjoined tendon. Excessive, vigorous retraction directed medially placing traction on the conjoined tendon distal to the coracoid process poses the highest risk of iatrogenic palsy to which neural structure?",
      th: "ผู้ป่วยชายอายุ 58 ปี ได้รับบาดเจ็บกระดูกต้นแขนส่วนต้นหักแบบเคลื่อนตำแหน่ง 3 ชิ้น (Displaced 3-part proximal humerus fracture) จากการหกล้ม ทีมศัลยแพทย์กระดูกและข้อทำการผ่าตัดเปิดจัดกระดูกและดามด้วยแผ่นโลหะแบบมีหัวเกลียวล็อก (Locked plate) ผ่านทาง Deltopectoral approach มาตรฐาน หลังผ่าแยกหลอดเลือด Cephalic vein ไปทางด้านนอกและเปิด Clavipectoral fascia เพื่อเพิ่มทัศนวิสัยบริเวณ Calcar ด้านในและเอ็นกล้ามเนื้อ Subscapularis จึงใส่เครื่องมือเกี่ยวรั้งใต้ Conjoined tendon การดึงรั้ง Conjoined tendon ไปทางด้านในอย่างรุนแรงเกินไปที่ระดับต่ำกว่า Coracoid process เสี่ยงสูงสุดที่จะทำให้เส้นประสาทใดเกิดการบาดเจ็บจากการถูกดึงยืด (Traction injury)?",
    },
    options: [
      {
        id: 0,
        text: {
          en: "Musculocutaneous nerve entering the coracobrachialis muscle",
          th: "เส้นประสาท Musculocutaneous nerve ที่ทอดเข้าสู่กล้ามเนื้อ Coracobrachialis",
        },
        isCorrect: true,
      },
      {
        id: 1,
        text: {
          en: "Suprascapular nerve traversing the suprascapular notch",
          th: "เส้นประสาท Suprascapular nerve ที่ทอดข้ามผ่านร่องกระดูก Suprascapular notch",
        },
        isCorrect: false,
      },
      {
        id: 2,
        text: {
          en: "Axillary nerve coursing through the quadrangular space",
          th: "เส้นประสาท Axillary nerve ที่ทอดผ่านช่องกล้ามเนื้อ Quadrangular space",
        },
        isCorrect: false,
      },
      {
        id: 3,
        text: {
          en: "Radial nerve winding through the triangular interval",
          th: "เส้นประสาท Radial nerve ที่ทอดผ่านช่องกล้ามเนื้อ Triangular interval",
        },
        isCorrect: false,
      },
    ],
    explanation: {
      en: "During the anterior deltopectoral approach to the shoulder, the conjoined tendon (composed of the short head of the biceps brachii and the coracobrachialis) arises from the coracoid process and is retracted medially to access the anterior shoulder joint and subscapularis. The musculocutaneous nerve branches from the lateral cord of the brachial plexus and penetrates the deep, medial belly of the coracobrachialis approximately 5 to 8 cm (classically 5 cm) distal to the tip of the coracoid process. Forceful or excessive medial retraction of the conjoined tendon causes a neuropraxia or axonotmesis of the musculocutaneous nerve, leading to paralysis of the biceps brachii and brachialis (impaired elbow flexion and supination) and sensory numbness over the lateral forearm (lateral antebrachial cutaneous nerve distribution). The axillary nerve courses along the inferior border of the subscapularis and exits through the quadrangular space beneath the glenohumeral capsule; it is injured by aggressive inferior capsular release, not conjoined tendon traction. The suprascapular nerve traverses the suprascapular notch far posteriorly. The radial nerve courses through the triangular interval posteriorly.",
      th: "ในการผ่าตัด Deltopectoral approach ทางด้านหน้าของข้อไหล่ Conjoined tendon (ประกอบด้วย Short head ของ Biceps brachii และ Coracobrachialis) จะเกาะอยู่ที่ปลาย Coracoid process และมักถูกดึงรั้งไปทาง Medial เพื่อเปิดทางเข้าสู่ข้อไหล่ด้านหน้าและเอ็น Subscapularis โดยเส้นประสาท Musculocutaneous nerve ที่แตกแขนงมาจาก Lateral cord ของ Brachial plexus จะทอดเข้าสู่เนื้อกล้ามเนื้อ Coracobrachialis ที่ระยะประมาณ 5 ถึง 8 เซนติเมตร (ระยะปลอดภัยมาตรฐานทางคลินิกคือ 5 ซม.) ใต้ต่อปลาย Coracoid process หากดึงรั้ง Conjoined tendon เข้าด้านในอย่างรุนแรงเกินไป จะทำให้เส้นประสาทนี้ถูกยืดกระชาก (Traction neuropraxia) ส่งผลให้กล้ามเนื้อ Biceps และ Brachialis อ่อนแรง (งอข้อศอกและหงายมือไม่ได้) ร่วมกับชาผิวหนังบริเวณขอบนอกของแขนท่อนล่าง (Lateral antebrachial cutaneous nerve) ส่วนเส้นประสาท Axillary nerve ทอดอยู่ใต้ขอบล่างของ Subscapularis เข้าสู่ Quadrangular space ซึ่งจะเสี่ยงต่อการบาดเจ็บเมื่อเลาะแคปซูลข้อด้านล่าง ไม่ใช่จากการดึง Conjoined tendon, เส้นประสาท Suprascapular ทอดผ่าน Suprascapular notch ด้านหลัง และเส้นประสาท Radial ทอดผ่าน Triangular interval ด้านหลังแขน",
    },
    pearls: {
      en: "Maintain the '5-cm safe zone' distal to the coracoid process during conjoined tendon mobilization; never place fixed, unyielding retractors deep to coracobrachialis beyond 5 cm.",
      th: "ยึดถือกฎ 'ระยะปลอดภัย 5 เซนติเมตร' ใต้ปลาย Coracoid process เสมอเมื่อต้องขยับ Conjoined tendon และห้ามใส่เครื่องมือถ่างแผลที่กดทับลึกเกินกว่า 5 ซม. เพื่อป้องกัน Musculocutaneous nerve palsy",
    },
    boneId: "humerus",
    regionId: "proximal",
  },
  // ── Direct Lateral (Hardinge) Approach — Superior Gluteal Nerve Safe Zone ──
  {
    id: "hy-hip-hardinge-superior-gluteal-nerve",
    category: "lower",
    tag: { en: "SURGICAL APPROACH • HIP", th: "ทางเข้าผ่าตัด • ข้อสะโพก" },
    scenario: {
      en: "A 68-year-old female undergoes total hip arthroplasty via a direct lateral (modified Hardinge) approach for end-stage osteoarthritis. To enhance visualization of the superior acetabular rim, the surgeon extends the longitudinal split of the gluteus medius proximally. At her 6-week postoperative follow-up, she ambulates with a pronounced abductor lurch, demonstrating an uncompensated Trendelenburg sign (pelvic drop toward the contralateral swing limb during single-leg stance on the operated extremity). Iatrogenic injury to which nerve and violation of what anatomical safe distance proximal to the greater trochanter tip is responsible for this deficit?",
      th: "ผู้ป่วยหญิงอายุ 68 ปี ได้รับการผ่าตัดเปลี่ยนข้อสะโพกเทียมผ่านทาง Direct Lateral (Modified Hardinge) approach สำหรับภาวะข้อสะโพกเสื่อมระยะสุดท้าย เพื่อเพิ่มทัศนวิสัยบริเวณขอบเบ้าสะโพกด้านบน ศัลยแพทย์ได้ผ่าขยายแนวแยกระหว่างเส้นใยกล้ามเนื้อ Gluteus medius ขึ้นไปทางด้านบน (Proximally) ในการติดตามอาการสัปดาห์ที่ 6 ผู้ป่วยเดินกะเผลกแบบ Abductor lurch ตรวจพบ Trendelenburg sign ชัดเจน (เชิงกรานฝั่งตรงข้ามเอียงตกลงขณะยืนลงน้ำหนักข้างที่ผ่าตัด) การบาดเจ็บต่อเส้นประสาทใดและล้ำเกินระยะปลอดภัยทางกายวิภาคเท่าใดเหนือยอด Greater trochanter ที่เป็นสาเหตุของความผิดปกตินี้?",
    },
    options: [
      {
        id: 0,
        text: {
          en: "Superior gluteal nerve by extending dissection greater than three to five centimeters proximal to the trochanteric tip",
          th: "เส้นประสาท Superior gluteal nerve จากการเลาะผ่าเนื้อเยื่อเกิน 3 ถึง 5 เซนติเมตร เหนือยอดกระดูกโทรแคนเตอร์",
        },
        isCorrect: true,
      },
      {
        id: 1,
        text: {
          en: "Inferior gluteal nerve by extending dissection greater than three to five centimeters proximal to the trochanteric tip",
          th: "เส้นประสาท Inferior gluteal nerve จากการเลาะผ่าเนื้อเยื่อเกิน 3 ถึง 5 เซนติเมตร เหนือยอดกระดูกโทรแคนเตอร์",
        },
        isCorrect: false,
      },
      {
        id: 2,
        text: {
          en: "Femoral nerve motor branches by extending dissection greater than three to five centimeters proximal to the trochanteric tip",
          th: "เส้นประสาท Femoral nerve แขนงสั่งการ จากการเลาะผ่าเนื้อเยื่อเกิน 3 ถึง 5 เซนติเมตร เหนือยอดกระดูกโทรแคนเตอร์",
        },
        isCorrect: false,
      },
      {
        id: 3,
        text: {
          en: "Sciatic nerve abductor branch by extending dissection greater than three to five centimeters proximal to the trochanteric tip",
          th: "เส้นประสาท Sciatic nerve แขนงกล้ามเนื้อ จากการเลาะผ่าเนื้อเยื่อเกิน 3 ถึง 5 เซนติเมตร เหนือยอดกระดูกโทรแคนเตอร์",
        },
        isCorrect: false,
      },
    ],
    explanation: {
      en: "In the direct lateral (modified Hardinge) approach to the hip, the interval involves splitting the anterior portion of the gluteus medius and vastus lateralis as a continuous sleeve, leaving the posterior half of the abductor tendon attached to the greater trochanter. The superior gluteal nerve (L4, L5, S1) exits the greater sciatic notch above the piriformis and travels anteriorly in the intermuscular plane between the gluteus medius and gluteus minimus, accompanied by the deep branch of the superior gluteal artery. It enters the gluteus medius and terminates in the tensor fasciae latae. Anatomical studies demonstrate that the inferior branches of the nerve cross as close as 3 cm, and universally within 5 cm, proximal to the superior tip of the greater trochanter. Extending the longitudinal split of the gluteus medius beyond this 3 to 5 cm safe zone results in partial or complete denervation of the anterior gluteus medius, gluteus minimus, and tensor fasciae latae, producing persistent abductor insufficiency and a positive Trendelenburg gait. The inferior gluteal nerve exits inferior to the piriformis and supplies the gluteus maximus, which is retracted or split posteriorly. The femoral nerve lies anterior to the hip joint within the femoral triangle. The sciatic nerve courses posterior to the external rotators.",
      th: "ในการผ่าตัดเข้าข้อสะโพกทางด้านข้าง Direct lateral (Modified Hardinge) approach จะมีการผ่าแยกเส้นใยกล้ามเนื้อ Gluteus medius ส่วนหน้าและ Vastus lateralis ต่อเนื่องกัน โดยเหลือเอ็นกล้ามเนื้อส่วนหลังติดกับ Greater trochanter ไว้ เส้นประสาท Superior gluteal nerve (L4, L5, S1) ลอดออกจาก Greater sciatic notch เหนือต่อกล้ามเนื้อ Piriformis แล้วทอดขนานมาทางด้านหน้าในช่องว่างระหว่างกล้ามเนื้อ Gluteus medius และ Gluteus minimus ไปเลี้ยงกล้ามเนื้อกลุ่มกางสะโพกทั้งหมดและจบลงที่ Tensor fasciae latae จากการศึกษาทางกายวิภาค แขนงล่างสุดของเส้นประสาทนี้จะทอดผ่านในระยะเพียง 3 ถึง 5 เซนติเมตร เหนือยอดของ Greater trochanter หากศัลยแพทย์ผ่าแยกเส้นใยกล้ามเนื้อ Gluteus medius สูงเกินกว่าระยะปลอดภัย 3 ถึง 5 ซม. นี้ จะตัดขาดแขนงเส้นประสาท ทำให้กล้ามเนื้อกางสะโพกเป็นอัมพาต ส่งผลให้เกิดภาวะ Abductor weakness เดินเซแบบ Trendelenburg gait อย่างถาวร สำหรับ Inferior gluteal nerve จะลอดใต้ต่อ Piriformis ไปเลี้ยงกล้ามเนื้อ Gluteus maximus ทางด้านหลัง, Femoral nerve ทอดอยู่ด้านหน้าข้อสะโพกใน Femoral triangle และ Sciatic nerve ทอดอยู่ด้านหลังต่อกลุ่ม External rotators",
    },
    pearls: {
      en: "The established anatomical safe zone for splitting the gluteus medius in a Hardinge approach is strictly less than 3 to 5 cm proximal to the tip of the greater trochanter; place an apical stay suture to arrest propagation.",
      th: "ระยะปลอดภัยทางกายวิภาคในการผ่าแยกกล้ามเนื้อ Gluteus medius ในท่า Hardinge คือห้ามเกิน 3 ถึง 5 ซม. เหนือยอด Greater trochanter และควรเย็บ Stay suture กำกับไว้ที่ปลายรอยแยกเสมอเพื่อป้องกันการฉีกขาดลามขึ้นไป",
    },
    boneId: "femur",
    regionId: "femoral-neck",
  },
  // ── Acetabular Imaging — Judet Obturator Oblique View ──
  {
    id: "hy-pelvis-judet-obturator-view",
    category: "lower",
    tag: { en: "IMAGING NUANCE • ACETABULUM", th: "ภาพถ่ายรังสีวินิจฉัย • เบ้าสะโพก" },
    scenario: {
      en: "A 36-year-old male is transported to the emergency trauma bay after a high-speed collision resulting in a posterior hip fracture-dislocation. Following successful emergent closed reduction under sedation, post-reduction pelvic Judet 45-degree oblique radiographs are obtained to evaluate columns and walls for operative planning. When interpreting the 45-degree Obturator Oblique view, which specific combination of acetabular structures is visualized tangential to the X-ray beam?",
      th: "ผู้ป่วยชายอายุ 36 ปี ถูกนำส่งห้องฉุกเฉินหลังประสบอุบัติเหตุจราจรความเร็วสูง พบข้อสะโพกหลุดไปทางด้านหลังร่วมกับเบ้าสะโพกหัก หลังดึงจัดข้อสะโพกเข้าที่แบบปิดสำเร็จ ได้ส่งตรวจเอกซเรย์ท่า Judet 45-degree oblique view เพื่อประเมินโครงสร้างกระดูกและวางแผนผ่าตัด ในการแปลผลภาพถ่ายรังสีท่า 45-degree Obturator Oblique view โครงสร้างกระดูกเบ้าสะโพกคู่ใดที่วางตัวสัมผัสตั้งฉากกับแนวรังสี (tangential profile) และมองเห็นได้อย่างชัดเจนที่สุด?",
    },
    options: [
      {
        id: 0,
        text: {
          en: "Anterior column (iliopectineal line) and the profile of the posterior acetabular wall",
          th: "แนวกระดูก Anterior column (เส้น Iliopectineal) และขอบเบ้าสะโพกด้านหลัง (Posterior wall)",
        },
        isCorrect: true,
      },
      {
        id: 1,
        text: {
          en: "Posterior column (ilioischial line) and the profile of the anterior acetabular wall",
          th: "แนวกระดูก Posterior column (เส้น Ilioischial) และขอบเบ้าสะโพกด้านหน้า (Anterior wall)",
        },
        isCorrect: false,
      },
      {
        id: 2,
        text: {
          en: "Posterior column (ilioischial line) and the profile of the posterior acetabular wall",
          th: "แนวกระดูก Posterior column (เส้น Ilioischial) และขอบเบ้าสะโพกด้านหลัง (Posterior wall)",
        },
        isCorrect: false,
      },
      {
        id: 3,
        text: {
          en: "Anterior column (iliopectineal line) and the profile of the anterior acetabular wall",
          th: "แนวกระดูก Anterior column (เส้น Iliopectineal) และขอบเบ้าสะโพกด้านหน้า (Anterior wall)",
        },
        isCorrect: false,
      },
    ],
    explanation: {
      en: "The Judet radiographic examination of the acetabulum comprises two orthogonal 45-degree oblique views: the Obturator Oblique and the Iliac Oblique. In the 45-degree Obturator Oblique view (the patient is rotated 45 degrees towards the affected side, projecting the obturator ring open into profile), the X-ray beam profiles two primary structures tangential to the cassette: the Anterior Column (demonstrated by the unbroken sweep of the iliopectineal line extending from the anterior superior/inferior iliac spine along the pelvic brim to the pubic tubercle) and the Posterior Wall (the posterior rim of the articular acetabulum). Conversely, in the 45-degree Iliac Oblique view (the patient is rotated 45 degrees away from the affected side, flattening the ipsilateral iliac wing), the X-ray beam tangentially profiles the Posterior Column (demonstrated by the ilioischial line descending across the greater sciatic notch to the ischial spine and tuberosity) and the Anterior Wall (the anterior rim of the articular acetabulum). Recognizing these reciprocal pairings is foundational for classifying acetabular fractures under the Letournel-Judet system.",
      th: "การตรวจภาพรังสีเบ้าสะโพกตามระบบ Judet ประกอบด้วยภาพเฉียง 45 องศา 2 ท่า ได้แก่ ท่า Obturator Oblique และ Iliac Oblique ในท่า 45-degree Obturator Oblique (ผู้ป่วยเอียงตัว 45 องศาลงทางข้างที่บาดเจ็บ ทำให้รู Obturator foramen เปิดกว้างเต็มที่) ลำแสงเอกซเรย์จะส่องขนานในแนวสัมผัส (tangent) ทำให้เห็นโครงสร้างสำคัญ 2 ส่วนอย่างชัดเจน ได้แก่ 1) Anterior column (แสดงโดยแนวเส้นต่อเนื่อง Iliopectineal line จากปีกเชิงกรานลงไปยัง Pelvic brim จนถึง Pubic tubercle) และ 2) Posterior wall (ขอบเบ้าสะโพกด้านหลัง) ในทางตรงกันข้าม ท่า 45-degree Iliac Oblique (ผู้ป่วยเอียงตัว 45 องศาหนีจากข้างที่บาดเจ็บ เพื่อแผ่ปีกกระดูก Iliac wing ให้กว้างเต็มที่) จะแสดง 1) Posterior column (แสดงโดยเส้น Ilioischial line ที่ทอดผ่าน Greater sciatic notch ลงมายัง Ischial tuberosity) และ 2) Anterior wall (ขอบเบ้าสะโพกด้านหน้า) การจดจำคู่โครงสร้างตรงข้ามนี้มีความสำคัญอย่างยิ่งยวดต่อการจัดกลุ่มกระดูกเบ้าสะโพกหักตามระบบ Judet-Letournel",
    },
    pearls: {
      en: "Judet Oblique mnemonic: Opposite pairs — Obturator Oblique profiles the Anterior column + Posterior wall; Iliac Oblique profiles the Posterior column + Anterior wall.",
      th: "สูตรจำภาพรังสี Judet Views: จับคู่โครงสร้างตรงข้ามเสมอ — ท่า Obturator Oblique แสดง Anterior column + Posterior wall; ส่วนท่า Iliac Oblique แสดง Posterior column + Anterior wall",
    },
    boneId: "pelvis",
    regionId: "acetabulum",
  },
  // ── Surgical Approaches — Lateral Elbow Kocher Approach & LUCL ──
  {
    id: "hy-elbow-kocher-approach",
    category: "upper",
    tag: { en: "SURGICAL APPROACH • ELBOW", th: "ทางเข้าผ่าตัด • ข้อศอก" },
    scenario: {
      en: "A 34-year-old carpenter falls from a ladder onto an outstretched pronated hand, sustaining a displaced, comminuted Mason Type III radial head fracture with mechanical block to forearm rotation. The orthopedic trauma surgeon proceeds with open reduction and internal fixation versus radial head arthroplasty via the posterolateral Kocher approach. Which internervous plane is developed to expose the radiocapitellar joint, and which critical ligamentous stabilizer must be preserved to prevent posterolateral rotatory instability?",
      th: "ช่างไม้วัย 34 ปี ตกจากบันไดเอามือยันพื้นในท่าคว่ำมือ ได้รับบาดเจ็บกระดูกหัวเรเดียสหักหลายชิ้นและเคลื่อนที่ (Mason Type III) ร่วมกับมีข้อขัดติดการหมุนปลายแขน ศัลยแพทย์ออร์โธปิดิกส์วางแผนผ่าตัดจัดกระดูกดามโลหะหรือใส่ข้อเทียมหัวเรเดียสผ่านทางเข้าผ่าตัดด้านข้างข้อศอกแบบ Kocher (Posterolateral approach) รอยต่อระหว่างเส้นประสาท (Internervous plane) ในการเข้าผ่าตัดนี้อยู่ระหว่างกล้ามเนื้อคู่ใด และโครงสร้างเอ็นข้อศอกสำคัญใดที่ต้องระมัดระวังอนุรักษ์ไว้อย่างเข้มงวดเพื่อป้องกันข้อศอกหลวมหมุนไปทางด้านหลัง?",
    },
    options: [
      {
        id: 0,
        text: {
          en: "Between Anconeus and Extensor Carpi Ulnaris; preserving Lateral Ulnar Collateral Ligament",
          th: "ระหว่างกล้ามเนื้อ Anconeus และ Extensor Carpi Ulnaris โดยอนุรักษ์เอ็น Lateral Ulnar Collateral",
        },
        isCorrect: true,
      },
      {
        id: 1,
        text: {
          en: "Between Extensor Carpi Radialis Brevis and Extensor Digitorum; preserving Annular Ligament complex",
          th: "ระหว่างกล้ามเนื้อ Extensor Carpi Radialis Brevis และ Extensor Digitorum โดยอนุรักษ์เอ็น Annular",
        },
        isCorrect: false,
      },
      {
        id: 2,
        text: {
          en: "Between Brachioradialis and Pronator Teres; preserving Anterior bundle of Medial Collateral Ligament",
          th: "ระหว่างกล้ามเนื้อ Brachioradialis และ Pronator Teres โดยอนุรักษ์เอ็น Anterior Medial Collateral",
        },
        isCorrect: false,
      },
      {
        id: 3,
        text: {
          en: "Between Triceps Brachii and Brachialis; preserving Posterior Oblique bundle of Collateral Ligament",
          th: "ระหว่างกล้ามเนื้อ Triceps Brachii และ Brachialis โดยอนุรักษ์เอ็น Posterior Oblique Collateral",
        },
        isCorrect: false,
      },
    ],
    explanation: {
      en: "The posterolateral Kocher approach to the radial head and radiocapitellar joint utilizes the internervous interval between the Anconeus (innervated by the radial nerve proper via a fascicle arising in the spiral groove within the triceps) and the Extensor Carpi Ulnaris (ECU, innervated by the posterior interosseous nerve [PIN] in the forearm). Because the innervation to the anconeus originates proximally, this represents a true internervous plane. During arthrotomy, the capsule must be incised along the anterior half or equator of the radial head. If the dissection is carried too far posteriorly onto the crista supinatoris of the ulna, the Lateral Ulnar Collateral Ligament (LUCL)—the primary dynamic restraint against posterolateral rotatory instability (PLRI)—will be detached or compromised, leading to devastating elbow instability. In contrast, the Kaplan approach exploits the interval between the Extensor Carpi Radialis Brevis (ECRB, radial nerve) and Extensor Digitorum Communis (EDC, PIN), which carries a higher risk to the PIN distally. The anterior Henry approach is developed between the Brachioradialis (radial nerve) and Pronator Teres (median nerve).",
      th: "ทางเข้าผ่าตัดด้านข้างข้อศอกแบบ Kocher (Posterolateral approach) เพื่อเปิดเข้าสู่หัวกระดูกเรเดียสและข้อ Radiocapitellar อาศัยรอยต่อระหว่างเส้นประสาท (Internervous plane) ระหว่างกล้ามเนื้อ Anconeus (เลี้ยงโดยแขนงของเส้นประสาท Radial nerve ที่แยกตัวออกมาตั้งแต่บริเวณ Radial groove เหนือข้อศอก) และกล้ามเนื้อ Extensor Carpi Ulnaris (ECU, เลี้ยงโดย Posterior Interosseous Nerve [PIN] บริเวณปลายแขน) จึงถือเป็น True internervous plane อย่างแท้จริง ในระหว่างเปิดเยื่อหุ้มข้อ (Capsulotomy) จะต้องกรีดในแนวครึ่งหน้า (Anterior half) ของหัวกระดูกเรเดียส หากผ่าเปิดลึกไปทางด้านหลังหรือตัดชิดแนวขอบกระดูก Crista supinatoris ของกระดูกอัลนา จะทำให้เกิดการฉีกขาดของเอ็น Lateral Ulnar Collateral Ligament (LUCL) ซึ่งเป็นเอ็นหลักที่ทำหน้าที่ป้องกันภาวะข้อศอกหลวมหมุนไปทางด้านหลัง (Posterolateral Rotatory Instability: PLRI) สำหรับทางเข้า Kaplan จะอยู่ระหว่าง ECRB และ EDC ซึ่งมีความเสี่ยงต่อเส้นประสาท PIN สูงกว่าทางส่วนปลาย ส่วนทางเข้าแบบ Henry อยู่ทางด้านหน้าระหว่าง Brachioradialis และ Pronator Teres",
    },
    pearls: {
      en: "During the Kocher approach, perform the capsular incision anterior to the radial head equator to safeguard the Lateral Ulnar Collateral Ligament (LUCL) and prevent posterolateral rotatory instability.",
      th: "ในการผ่าตัดเข้าข้อศอกทางด้านข้างแบบ Kocher ให้กรีดเยื่อหุ้มข้อด้านหน้าต่อกึ่งกลางหัวเรเดียสเสมอ เพื่อปกป้องเอ็น LUCL และป้องกันข้อศอกหลวมหมุนทางด้านหลัง (PLRI)",
    },
    boneId: "forearm",
    regionId: "radial-head",
  },
  // ── Operative Pearls & Biomechanics — Tibia Semi-Extended Suprapatellar Nailing ──
  {
    id: "hy-tibia-suprapatellar-nailing",
    category: "lower",
    tag: { en: "OPERATIVE PEARL • TIBIA", th: "เทคนิคผ่าตัด • กระดูกหน้าแข้ง" },
    scenario: {
      en: "A 29-year-old male sustains an isolated, high-energy proximal third tibial shaft fracture (AO/OTA 42-A2). The orthopedic trauma team elects to perform intramedullary nailing utilizing a semi-extended suprapatellar approach rather than a traditional hyperflexed infrapatellar technique. What is the primary biomechanical rationale for positioning the knee in 15 to 20 degrees of flexion during nail insertion?",
      th: "ผู้ป่วยชายอายุ 29 ปี ได้รับบาดเจ็บกระดูกหน้าแข้งส่วนต้นหักจากอุบัติเหตุรุนแรง (Proximal third tibial shaft fracture, AO/OTA 42-A2) ทีมศัลยแพทย์ออร์โธปิดิกส์เลือกใช้วิธีดามกระดูกด้วยแกนโลหะในโพรงกระดูกผ่านทางเหนือลูกสะบ้าในท่ากึ่งเหยียด (Semi-extended suprapatellar nailing) แทนวิธีผ่าตัดดั้งเดิมที่ต้องงอเข่ามากผ่านทางใต้ลูกสะบ้า (Hyperflexed infrapatellar approach) เหตุผลทางชีวกลศาสตร์ที่สำคัญที่สุดในการจัดท่าข้อเข่าให้อยู่ในท่างอเพียง 15 ถึง 20 องศาขณะใส่แกนโลหะคืออะไร?",
    },
    options: [
      {
        id: 0,
        text: {
          en: "Relaxes quadriceps extensor mechanism tension, neutralizing the apex-anterior (recurvatum) deforming vector",
          th: "ผ่อนคลายแรงดึงของกลุ่มกล้ามเนื้อเหยียด Quadriceps กำจัดแรงดึงงอยอดไปข้างหน้า (Apex-anterior recurvatum)",
        },
        isCorrect: true,
      },
      {
        id: 1,
        text: {
          en: "Relaxes gastrocnemius muscle complex tension, neutralizing the apex-posterior (procurvatum) deforming vector",
          th: "ผ่อนคลายแรงดึงของกลุ่มกล้ามเนื้อน่อง Gastrocnemius กำจัดแรงดึงงอยอดไปข้างหลัง (Apex-posterior procurvatum)",
        },
        isCorrect: false,
      },
      {
        id: 2,
        text: {
          en: "Relaxes tibialis anterior muscle tendon tension, neutralizing the coronal plane valgus deforming vector",
          th: "ผ่อนคลายแรงดึงของเอ็นกล้ามเนื้อ Tibialis anterior กำจัดแรงดึงกระดูกบิดเบี้ยวออกด้านข้าง (Coronal valgus)",
        },
        isCorrect: false,
      },
      {
        id: 3,
        text: {
          en: "Relaxes pes anserinus tendon insertions tension, neutralizing the coronal plane varus deforming vector",
          th: "ผ่อนคลายแรงดึงของกลุ่มเอ็นกล้ามเนื้อ Pes anserinus กำจัดแรงดึงกระดูกบิดเบี้ยวเข้าด้านใน (Coronal varus)",
        },
        isCorrect: false,
      },
    ],
    explanation: {
      en: "In proximal-third tibia fractures, the extensor mechanism exerts a powerful deforming force. During traditional infrapatellar intramedullary nailing, hyperflexion of the knee (90 to 100 degrees) places maximal tension across the quadriceps tendon and patellar tendon inserting into the tibial tubercle on the proximal segment. This extensor tension forcefully pulls the proximal fragment into extension, creating a severe apex-anterior (recurvatum) deformity. Compounding this problem, the Herzog bend of the nail and the steep anterior starting trajectory push the nail tip posteriorly against the posterior cortex, exacerbating extension malalignment. The semi-extended (suprapatellar) nailing technique maintains the knee in 15 to 20 degrees of slight flexion, completely neutralizing quadriceps tension, eliminating the recurvatum pull of the patellar tendon, and permitting an inline entry trajectory down the anatomic medullary canal. Tension from the gastrocnemius (which originates on the femoral condyles and crosses the knee) does not cause procurvatum in this setting, nor do the tibialis anterior or pes anserinus tendons represent the primary drivers of proximal segment sagittal malalignment.",
      th: "ในกระดูกหน้าแข้งส่วนต้นหัก (Proximal third tibia fractures) กล้ามเนื้อกลุ่มเหยียดข้อเข่ามีบทบาทสำคัญในการดึงรั้งชิ้นกระดูกให้ผิดรูปอย่างรุนแรง ในการผ่าตัดดามแกนโลหะผ่านใต้สะบ้าแบบดั้งเดิม (Infrapatellar approach) ศัลยแพทย์จำเป็นต้องงอเข่า 90 ถึง 100 องศาขึ้นไปเพื่อให้เห็นจุดเจาะกระดูก ซึ่งการงอเข่ามากนี้จะทำให้เอ็น Quadriceps และ Patellar tendon ที่เกาะกับ Tibial tubercle บนชิ้นกระดูกส่วนต้นตึงตัวสูงสุด ดึงรั้งชิ้นกระดูกส่วนต้นให้กระดกเหยียดไปข้างหน้า เกิดความผิดรูปโก่งงอแบบยอดชี้ไปข้างหน้า (Apex-anterior recurvatum deformity) อย่างรุนแรง ยิ่งไปกว่านั้น มุมดัดโค้งด้านบนของแกนเหล็ก (Herzog bend) ร่วมกับมุมเจาะกระดูกที่ชันจากด้านหน้าจะยิ่งดันให้ปลายแกนเหล็กชนผนังคอร์เทกซ์ด้านหลังจนกระดูกโก่งมากขึ้น การใช้เทคนิคเหนือสะบ้าในท่ากึ่งเหยียด (Semi-extended suprapatellar nailing) โดยงอเข่าเพียง 15 ถึง 20 องศา จะช่วยผ่อนคลายแรงตึงของ Quadriceps mechanism ได้อย่างสมบูรณ์ กำจัดแรงดึงงอของ Patellar tendon และเปิดแนวเจาะใส่แกนโลหะให้ตรงเป็นแนวเดียวกับโพรงกระดูก สำหรับกล้ามเนื้อ Gastrocnemius, Tibialis anterior หรือกลุ่ม Pes anserinus ไม่ได้เป็นต้นเหตุหลักของแรงดึงผิดรูปในแนว Sagittal plane ในลักษณะนี้",
    },
    pearls: {
      en: "Semi-extended (suprapatellar) tibial nailing relaxes patellar tendon tension to prevent apex-anterior (recurvatum) malunion in proximal-third fractures while ensuring a collinear starting trajectory.",
      th: "การตอกแกนดามกระดูกหน้าแข้งผ่านทางเหนือสะบ้าในท่ากึ่งเหยียดช่วยผ่อนแรงตึงของ Patellar tendon ป้องกันการติดผิดรูปโก่งงอยอดไปข้างหน้า (Recurvatum) ในกระดูกส่วนต้นหัก และช่วยให้แนวการใส่แกนโลหะตรงแกนโพรงกระดูก",
    },
    boneId: "tibia",
    regionId: "shaft",
  },
  // ── Femur Neck — Pauwels Type III Vertical Shear Biomechanics ──
  {
    id: "hy-femur-pauwels-type3",
    category: "lower",
    tag: { en: "BIOMECHANICS • FEMUR NECK", th: "ชีวกลศาสตร์ • คอกระดูกต้นขา" },
    scenario: {
      en: "A 28-year-old male laborer falls from a two-story scaffold and sustains an isolated, closed left hip fracture. Plain radiographs demonstrate a vertically oriented femoral neck fracture with an inclination angle of 65 degrees relative to the horizontal interischial line (Pauwels Type III). The patient has no prior medical comorbidities and was fully active prior to injury. The orthopedic trauma team plans urgent anatomical reduction and internal fixation to preserve the native femoral head. From a biomechanical perspective, why is a fixed-angle sliding hip screw construct or medial buttress plate mechanically superior to multiple parallel cannulated cancellous screws for this specific fracture pattern?",
      th: "ผู้ป่วยชายอายุ 28 ปี อาชีพคนงานก่อสร้าง ตกจากนั่งร้านสูงสองชั้น ได้รับบาดเจ็บกระดูกสะโพกซ้ายหักแบบปิด ภาพเอกซเรย์พบกระดูกคอกระดูกต้นขาหักในแนวเกือบตั้งฉาก ทำมุมเอียง 65 องศากับแนวระนาบแนวนอน (Pauwels Type III) ผู้ป่วยไม่มีโรคประจำตัวและใช้งานข้อสะโพกได้เต็มที่มาก่อน ทีมศัลยแพทย์วางแผนผ่าตัดจัดกระดูกและยึดตรึงภายในอย่างเร่งด่วนเพื่ออนุรักษ์หัวกระดูกเดิม ในแง่ชีวกลศาสตร์การดามกระดูก เหตุใดการเลือกใช้อุปกรณ์ยึดตรึงมุมคงที่แบบสไลด์ (Sliding hip screw) หรือแผ่นดามค้ำยันด้านใน (Medial buttress plate) จึงมีความเหนือกว่าการใส่สกรูเจาะกลวงขนานรูปสามเหลี่ยมคว่ำ (Parallel cannulated screws) แบบมาตรฐานอย่างมีนัยสำคัญ?",
    },
    options: [
      {
        id: 0,
        text: {
          en: "Resists vertical shear displacement and transforms physiological axial loading vectors into beneficial fracture compression",
          th: "ต้านทานแรงเลื่อนไถลจากแรงเฉือนในแนวดิ่งและเปลี่ยนแรงกดตามแนวน้ำหนักตัวให้เป็นแรงอัดที่ช่วยกระตุ้นการติดของกระดูก",
        },
        isCorrect: true,
      },
      {
        id: 1,
        text: {
          en: "Preserves femoral head vascularity by avoiding mechanical compression across the lateral retinacular branches of circumflex vessels",
          th: "ปกป้องระบบไหลเวียนเลือดของหัวกระดูกต้นขาโดยลดแรงกดเบียดต่อแขนงหลอดเลือด Lateral retinacular ของหลอดเลือดเซอร์คัมเฟลกซ์",
        },
        isCorrect: false,
      },
      {
        id: 2,
        text: {
          en: "Provides superior rotational resistance by maximizing threaded purchase depth within the subchondral bone of the femoral head",
          th: "เพิ่มความมั่นคงในการต้านทานแรงหมุนบิดโดยเพิ่มระยะความลึกของเกลียวยึดเกาะเนื้อกระดูกใต้ผิวข้อของหัวกระดูกต้นขา",
        },
        isCorrect: false,
      },
      {
        id: 3,
        text: {
          en: "Prevents lateral cortical stress concentration and eliminates excessive secondary varus collapse through high dynamic elasticity",
          th: "ป้องกันการรวมตัวของแรงเค้นที่เปลือกกระดูกด้านนอกและกำจัดการทรุดตัวเอียงเข้าด้านในโดยอาศัยความยืดหยุ่นเชิงโครงสร้าง",
        },
        isCorrect: false,
      },
    ],
    explanation: {
      en: "The Pauwels classification categorizes femoral neck fractures based on the orientation angle of the fracture line relative to the horizontal plane: Type I (< 30 degrees), Type II (30 to 50 degrees), and Type III (> 50 degrees). In Type I and II patterns, normal axial weight-bearing vectors produce predominantly compressive forces that stabilize the fracture interface and facilitate union with standard parallel inverted-triangle cannulated screws. In contrast, Pauwels Type III fractures (> 50 degrees, commonly 60 to 70 degrees) are oriented vertically, meaning that physiologic axial ground reaction forces generate massive vertical shear vectors that drive the femoral head into varus displacement, shorten the neck, and promote mechanical cut-out and nonunion (rates ranging from 15% to 30%). Parallel cannulated screws lack fixed-angle cantilever stiffness and cannot resist these vertical shear forces. A fixed-angle device (such as a sliding hip screw with a derotation screw or a femoral neck system) or a medial buttress plate provides rigid angular stability and dynamic axial sliding along the implant barrel perpendicular to the fracture plane, converting destructive vertical shear forces into osteogenic compressive forces. Retinacular blood vessels are damaged primarily by initial fracture displacement rather than implant design, and multiple cannulated screws actually offer greater dispersed rotational purchase than a single large lag screw.",
      th: "การจำแนกกระดูกคอกระดูกต้นขาหักตามระบบ Pauwels อาศัยมุมเอียงของแนวรอยหักเทียบกับระนาบแนวนอน: Type I (< 30 องศา), Type II (30 ถึง 50 องศา), และ Type III (> 50 องศา) ใน Type I และ II แนวหักค่อนข้างนอน แรงกดจากการลงน้ำหนักตัวตามธรรมชาติจะช่วยบีบอัดรอยหักให้ติดกัน (Compression) จึงรักษาได้ดีด้วยการใส่สกรูเจาะกลวงขนานรูปสามเหลี่ยมคว่ำ แต่ใน Pauwels Type III (> 50 องศา ซึ่งมักชันถึง 60-70 องศา) รอยหักวางตัวในแนวดิ่งเกือบตั้งฉาก ทำให้แรงกดตามแนวน้ำหนักตัวกลายเป็นแรงเฉือนในแนวดิ่ง (Vertical shear force) มหาศาลที่ดันให้หัวกระดูกต้นขาไถลทรุดตัวลงเข้าด้านใน (Varus collapse) คอกระดูกสั้นลง และเกิดกระดูกไม่ติด (Nonunion) สูงถึง 15-30% การใช้สกรูขนานทั่วไปไม่มีคุณสมบัติเป็นอุปกรณ์มุมคงที่ (Fixed-angle) จึงไม่สามารถต้านทานแรงเฉือนนี้ได้ การใช้อุปกรณ์มุมคงที่แบบสไลด์ เช่น Sliding Hip Screw (DHS) ร่วมกับสกรูป้องกันการหมุน (Derotation screw) หรือ Femoral Neck System (FNS) หรือแผ่นดาม Medial buttress plate จะช่วยค้ำยันต้านทานแรงเฉือนในแนวดิ่ง และบังคับให้แรงกดสไลด์ตามแนวแกนสกรูเพื่อเปลี่ยนแรงเฉือนทำลายให้กลายเป็นแรงอัดแน่นกระตุ้นการติดของกระดูก",
    },
    pearls: {
      en: "In vertical Pauwels Type III femoral neck fractures (> 50 degrees), axial load produces shear rather than compression; a fixed-angle sliding hip screw or medial buttress plate is required to neutralize shear and prevent varus collapse.",
      th: "ในกระดูกคอกระดูกต้นขาหักแนวตั้ง Pauwels Type III (> 50 องศา) แรงกดร่างกายจะกลายเป็นแรงเฉือน การใช้อุปกรณ์มุมคงที่ (DHS/FNS) หรือ Medial buttress plate มีความจำเป็นอย่างยิ่งเพื่อต้านแรงเฉือนและป้องกันกระดูกทรุดเอียงเข้าด้านใน (Varus)",
    },
    boneId: "femur",
    regionId: "femoral-neck",
  },
  // ── Sternoclavicular Joint — Acute Posterior Dislocation & Mediastinal Jeopardy ──
  {
    id: "hy-clavicle-posterior-sc-dislocation",
    category: "upper",
    tag: { en: "EMERGENCY MANAGEMENT • STERNOCLAVICULAR", th: "การจัดการภาวะฉุกเฉิน • ข้อต่อสเตอร์โนคลาวิคูลาร์" },
    scenario: {
      en: "A 19-year-old collegiate rugby player is driven forcefully onto the posterolateral aspect of his right shoulder during a scrum. He presents to the emergency department in acute distress with severe retrosternal pain, dyspnea, choking sensation, hoarseness, and progressive venous engorgement of his right upper extremity. On examination, there is palpable depression at the right medial clavicle and fullness in the suprasternal notch. Contrast-enhanced computed tomography of the chest confirms an acute posterior sternoclavicular joint dislocation with compression of the right brachiocephalic vein and abutment against the trachea. What is the mandatory operating room protocol when performing closed reduction of this injury?",
      th: "นักกีฬารักบี้ระดับมหาวิทยาลัยอายุ 19 ปี ถูกกระแทกเข้าที่บริเวณด้านหลังค่อนไปทางด้านนอกของหัวไหล่ขวาอย่างรุนแรง นำส่งห้องฉุกเฉินด้วยอาการเจ็บแน่นหลังกระดูกหน้าอกอย่างรุนแรง หายใจลำบาก รู้สึกสำลัก แน่นคอ เสียงแหบ และพบหลอดเลือดดำที่แขนขวาโป่งพองชัดเจน ตรวจร่างกายพบรอยบุ๋มลึกผิดรูปบริเวณปลายกระดูกไหปลาร้าด้านในข้างขวาและคลำได้ก้อนนูนในแอ่งเหนือกระดูกอก ภาพเอกซเรย์คอมพิวเตอร์ (CT scan) ฉีดสีทรวงอกยืนยันภาวะข้อต่อ Sternoclavicular หลุดไปทางด้านหลังอย่างเฉียบพลัน ร่วมกับมีการกดทับหลอดเลือดดำ Brachiocephalic และเบียดชิดหลอดลม ข้อใดคือข้อกำหนดสำคัญสูงสุดในห้องผ่าตัดในการทำหัตถการดึงจัดข้อเข้าที่ (Closed reduction) สำหรับการบาดเจ็บนี้?",
    },
    options: [
      {
        id: 0,
        text: {
          en: "Perform under general anesthesia with cardiothoracic surgery on standby prepared for immediate median sternotomy",
          th: "ทำภายใต้การดมยาสลบโดยมีทีมศัลยแพทย์ทรวงอกและหัวใจเตรียมพร้อมสำหรับการผ่าตัดเปิดกึ่งกลางกระดูกอกฉุกเฉิน",
        },
        isCorrect: true,
      },
      {
        id: 1,
        text: {
          en: "Perform under conscious sedation with interventional radiology on standby prepared for immediate transcatheter embolization",
          th: "ทำภายใต้การให้ยาระงับความรู้สึกโดยมีทีมรังสีร่วมรักษาเตรียมพร้อมสำหรับการฉีดสารอุดหลอดเลือดฉุกเฉิน",
        },
        isCorrect: false,
      },
      {
        id: 2,
        text: {
          en: "Perform under regional supraclavicular block with otolaryngology on standby prepared for immediate surgical tracheostomy",
          th: "ทำภายใต้การฉีดยาชาเฉพาะส่วนโดยมีทีมศัลยแพทย์หูคอจมูกเตรียมพร้อมสำหรับการผ่าตัดเปิดเจาะท่อลมคอฉุกเฉิน",
        },
        isCorrect: false,
      },
      {
        id: 3,
        text: {
          en: "Perform under local hematoma anesthesia with vascular surgery on standby prepared for immediate transfemoral angiography",
          th: "ทำภายใต้การฉีดยาชาเฉพาะที่โดยมีทีมศัลยแพทย์หลอดเลือดเตรียมพร้อมสำหรับการตรวจฉีดสีหลอดเลือดฉุกเฉิน",
        },
        isCorrect: false,
      },
    ],
    explanation: {
      en: "Posterior sternoclavicular (SC) joint dislocation is a true life-threatening orthopedic emergency. Because the superior mediastinum lies directly posterior to the medial clavicle, posterior displacement endangers vital structures including the brachiocephalic (innominate) artery, brachiocephalic vein, superior vena cava, aortic arch, trachea, esophagus, and thoracic duct. Patients present with dyspnea, choking sensation, venous congestion of the upper extremity, dysphagia, or hoarseness (recurrent laryngeal nerve injury). Contrast-enhanced CT scanning is the gold standard imaging modality. Closed reduction should be attempted promptly (ideally within 48 hours) using an interscapular towel roll, gentle lateral arm traction in extension, and sterile percutaneous towel-clip manipulation of the medial clavicle. Crucially, the displaced clavicle head may have caused a partial laceration or is currently tamponading a ruptured great vessel (most commonly the innominate vein or artery). Upon reduction, release of tamponade can produce catastrophic, fatal mediastinal hemorrhage. Therefore, standard trauma guidelines mandate that closed reduction must only be performed in the operating room under general endotracheal anesthesia, with a cardiothoracic surgery team scrubbed or on immediate standby and a median sternotomy tray open in the room. Conscious sedation or local anesthesia is inadequate because full muscle relaxation is required, and interventional radiology or tracheostomy does not provide definitive surgical exposure for great vessel exsanguination.",
      th: "ภาวะข้อต่อ Sternoclavicular (SC joint) หลุดไปด้านหลัง เป็นภาวะฉุกเฉินทางออร์โธปิดิกส์ที่อันตรายถึงชีวิต เนื่องจากบริเวณเมดิแอสตินัมส่วนบน (Superior mediastinum) ที่อยู่ด้านหลังต่อกระดูกไหปลาร้าส่วนในโดยตรง เป็นที่อยู่ของโครงสร้างหลอดเลือดและอวัยวะสำคัญยิ่งยวด ได้แก่ หลอดเลือดดำและแดง Brachiocephalic, Superior vena cava, ส่วนโค้งเอออร์ตา, หลอดลม, หลอดอาหาร และท่อน้ำเหลืองทรวงอก ผู้ป่วยมักแสดงอาการหายใจลำบาก แน่นคอ หลอดเลือดดำที่คอหรือแขนโป่งพอง กลืนลำบาก หรือเสียงแหบ การตรวจยืนยันต้องใช้ CT scan ทรวงอกเสมอ แม้ว่าการดึงจัดข้อเข้าที่แบบปิด (Closed reduction) จะได้ผลดีหากทำภายใน 48 ชั่วโมง (จัดท่านอนหงายหนุนผ้าระหว่างสะบัก กางและดึงแขน ร่วมกับใช้คีม Towel clip คีบดึงกระดูกไหปลาร้าขึ้นมาตรงๆ) แต่เศษกระดูกอาจทิ่มทะลุหรือกำลังกดห้ามเลือด (Tamponade) เส้นเลือดใหญ่อยู่ หากดึงกระดูกออกอาจทำให้เกิดการตกเลือดรุนแรงในช่องอกจนเสียชีวิตได้ทันที ดังนั้น ข้อกำหนดมาตรฐานจึงบังคับให้ต้องทำหัตถการในห้องผ่าตัดภายใต้การดมยาสลบ โดยมีทีมศัลยแพทย์ทรวงอกและหัวใจ (Cardiothoracic surgeon) พร้อมเปิดผ่าตัดกึ่งกลางกระดูกอก (Median sternotomy) ทันที",
    },
    pearls: {
      en: "Posterior sternoclavicular dislocation requires emergent closed reduction in the operating room under general anesthesia with cardiothoracic surgery on standby for immediate sternotomy due to catastrophic great vessel laceration risk.",
      th: "ข้อต่อ Sternoclavicular หลุดไปด้านหลัง ต้องทำ Closed reduction ในห้องผ่าตัดภายใต้การดมยาสลบ โดยมีทีมศัลยแพทย์ทรวงอกพร้อมผ่าตัด Median sternotomy ทันทีเสมอ เนื่องจากมีความเสี่ยงสูงต่อการฉีกขาดของเส้นเลือดใหญ่ในช่องอก",
    },
    boneId: "clavicle",
    regionId: "ac-joint",
  },
  // ── Slipped Capital Femoral Epiphysis (SCFE) — Fixation Mechanics & AVN Prevention ──
  {
    id: "hy-pedi-scfe-fixation",
    category: "pedi",
    tag: { en: "PEDIATRIC ORTHOPEDICS • HIP", th: "ออร์โธปิดิกส์เด็ก • ข้อสะโพก" },
    scenario: {
      en: "A 13-year-old obese male presents with a 6-week history of progressive left groin pain radiating to the anteromedial knee and an antalgic limp without prior acute trauma. On physical examination, left hip internal rotation and abduction are markedly restricted; passive flexion of the hip from full extension results in obligatory external rotation and abduction (positive Drehmann sign). Bilateral pelvis and frog-leg lateral radiographs demonstrate widening and irregularity of the proximal femoral physis, Klein's line fails to intersect the lateral epiphysis (Trethowan sign), and lateral projection reveals posterior epiphyseal displacement with a Southwick slip angle of 28 degrees. What is the mandatory surgical management principle to stabilize the slip while minimizing the risk of iatrogenic avascular necrosis and chondrolysis?",
      th: "เด็กชายอายุ 13 ปี รูปร่างอ้วน มาพบแพทย์ด้วยอาการปวดขาหนีบข้างซ้ายร้าวลงมายังบริเวณด้านหน้าและด้านในของข้อเข่าเรื้อรังมา 6 สัปดาห์ ร่วมกับเดินกะเผลกโดยไม่มีประวัติอุบัติเหตุรุนแรง ตรวจร่างกายพบการหมุนข้อสะโพกเข้าด้านใน (Internal rotation) และการกางขาถูกจำกัดชัดเจน เมื่อทำการงอข้อสะโพกจากท่าเหยียดตรง ขาจะหมุนออกด้านนอกและกางออกโดยอัตโนมัติ (Drehmann sign เป็นบวก) ภาพเอกซเรย์อุ้งเชิงกรานและท่า Frog-leg lateral พบแผ่นการเจริญเติบโต (Physis) กว้างและขรุขระผิดปกติ เส้น Klein ไม่ตัดผ่านขอบนอกของหัวกระดูก (Trethowan sign) และภาพด้านข้างพบหัวกระดูกเลื่อนไปทางด้านหลังโดยมีมุม Southwick slip angle 28 องศา ข้อใดคือหลักการผ่าตัดรักษามาตรฐานเพื่อยึดตรึงรอยเลื่อนและลดความเสี่ยงต่อภาวะหัวกระดูกขาดเลือดตาย (AVN) และกระดูกอ่อนข้อเสื่อม (Chondrolysis)?",
    },
    options: [
      {
        id: 0,
        text: {
          en: "In situ stabilization using a single central cannulated screw without forceful closed reduction maneuvers",
          th: "การยึดตรึงกระดูกตำแหน่งเดิมด้วยสกรูเดี่ยวตรงกลางโดยไม่ทำการดึงจัดกระดูกให้เข้าที่เดิม",
        },
        isCorrect: true,
      },
      {
        id: 1,
        text: {
          en: "Closed anatomical reduction under continuous traction followed by dual diverging cannulated screw fixation",
          th: "การดึงจัดกระดูกเข้าที่เดิมด้วยแรงดึงต่อเนื่องร่วมกับการยึดตรึงด้วยสกรูคู่แบบแยกทิศทาง",
        },
        isCorrect: false,
      },
      {
        id: 2,
        text: {
          en: "Open proximal femoral corrective realigning subcapital osteotomy secured with rigid blade plate fixation",
          th: "การผ่าตัดเปิดปรับแนวกระดูกคอตันขาส่วนต้นให้ตรงตำแหน่งเดิมร่วมกับการดามแผ่นเหล็กชนิดแข็ง",
        },
        isCorrect: false,
      },
      {
        id: 3,
        text: {
          en: "Prolonged nonoperative immobilisation in a bilateral hip spica cast until physeal closure occurs",
          th: "การรักษาแบบประคับประคองโดยการใส่เฝือกสะโพกทั้งสองข้างต่อเนื่องจนกว่าแนวกระดูกเจริญจะปิดตัว",
        },
        isCorrect: false,
      },
    ],
    explanation: {
      en: "Slipped Capital Femoral Epiphysis (SCFE) is characterized by posterior and medial displacement of the capital femoral epiphysis relative to the femoral neck through the hypertrophic zone of the physis. The superior retinacular vessels (branches of the medial femoral circumflex artery) run along the posterosuperior femoral neck to supply the epiphysis. Forceful closed reduction maneuvers (especially internal rotation and traction) stretch, kink, or tear these tethered vessels, causing catastrophic osteonecrosis (avascular necrosis / AVN) in up to 30-50% of aggressively manipulated hips. Therefore, international pediatric orthopedic consensus mandates in situ fixation without reduction. A single cannulated screw placed centrally into the center of the femoral head perpendicular to the physis (engaging 4-5 threads past the physis and stopping 5 mm short of subchondral bone) is the gold standard. Using two screws does not significantly increase stability but markedly elevates the risk of joint penetration (leading to chondrolysis) and retinacular vascular compromise. Immediate corrective subcapital osteotomy carries high osteonecrosis risk and is reserved for severe chronic deformities performed in specialized tertiary centers. Cast immobilization is ineffective against physeal shear stress and causes severe stiffness and chondrolysis.",
      th: "ภาวะหัวกระดูกต้นขาเลื่อนในเด็ก (SCFE) เกิดจากการที่หัวกระดูกเลื่อนไปทางด้านหลังและด้านในเมื่อเทียบกับคอกระดูกต้นขา ผ่านทางชั้น Hypertrophic zone ของแผ่นการเจริญเติบโต หลอดเลือดที่ไปเลี้ยงหัวกระดูกคือ Superior retinacular artery (แขนงของ Medial femoral circumflex artery) ซึ่งทอดตัวอยู่ทางด้านหลังบนของคอกระดูก การพยายามดึงจัดกระดูกให้เข้าที่เดิม (Closed reduction) โดยเฉพาะการหมุนขาเข้าด้านใน จะทำให้เส้นเลือดนี้ถูกดึงยืด พับงอ หรือฉีกขาด ส่งผลให้เกิดภาวะหัวกระดูกขาดเลือดตาย (AVN) สูงถึง 30-50% แนวทางมาตรฐานจึงกำหนดให้ยึดตรึงกระดูก ณ ตำแหน่งที่เลื่อนอยู่นั้นทันที (In situ fixation) โดยไม่ดึงจัดกระดูก การใช้สกรูแบบ Cannulated screw เพียงตัวเดียววางตรงกลางหัวกระดูกตั้งฉากกับแผ่นเจริญเติบโต (เกลียวข้าม Physis 4-5 เกลียวและอยู่ห่างจากขอบกระดูกข้อ 5 มม.) ถือเป็นมาตรฐานหลัก การใส่สกรูสองตัวเพิ่มความเสี่ยงต่อการที่สกรูทะลุเข้าข้อจนเกิดกระดูกอ่อนละลาย (Chondrolysis) และเสี่ยงโดนเส้นเลือด การผ่าตัดเปิดตัดกระดูกจัดมุมใหม่ใต้หัวกระดูกทันทีมีความเสี่ยง AVN สูงมาก และการใส่เฝือกสะโพกไม่สามารถต้านทานแรงเฉือนได้จึงไม่ได้ผลในการรักษา",
    },
    pearls: {
      en: "SCFE must be stabilized with urgent in situ single central cannulated screw fixation without reduction to protect posterior retinacular vessels from ischemia and catastrophic AVN.",
      th: "ภาวะ SCFE ต้องรักษาด้วยการยึดตรึงด้วยสกรูเดี่ยวตรงกลางในตำแหน่งเดิม (In situ) โดยห้ามดึงจัดกระดูกเด็ดขาด เพื่อป้องกันการฉีกขาดของเส้นเลือด Retinacular artery และภาวะหัวกระดูกตาย (AVN)",
    },
    boneId: "femur",
    regionId: "femoral-neck",
  },
  // ── Acute Cauda Equina Syndrome (CES) — Diagnostic Hallmarks & Emergent Decompression ──
  {
    id: "hy-spine-cauda-equina-timing",
    category: "spine",
    tag: { en: "EMERGENCY MANAGEMENT • SPINE", th: "การจัดการภาวะฉุกเฉิน • กระดูกสันหลัง" },
    scenario: {
      en: "A 44-year-old male presents to the emergency department with a 24-hour history of severe lower back pain radiating down both legs and progressive bilateral foot weakness after heavy lifting. Physical examination reveals bilateral grade 3/5 ankle dorsiflexion and grade 2/5 extensor hallucis longus weakness, marked hypesthesia over the buttocks and perineum (saddle anesthesia), absent bilateral Achilles reflexes, and lax anal sphincter tone. The patient reports having painless involuntary urinary dribbling for 6 hours, and bedside post-void catheterization reveals a residual volume of 750 mL. What is the most appropriate next step in management to optimize long-term bladder and motor recovery?",
      th: "ผู้ป่วยชายอายุ 44 ปี มาโรงพยาบาลด้วยอาการปวดหลังส่วนล่างรุนแรงร้าวลงขาทั้งสองข้างร่วมกับเท้าอ่อนแรงลงเรื่อยๆ เป็นเวลา 24 ชั่วโมงหลังยกของหนัก ตรวจร่างกายพบข้อเท้ากระดกขึ้นอ่อนแรงระดับ 3/5 และนิ้วหัวแม่เท้ากระดกขึ้นอ่อนแรงระดับ 2/5 ทั้งสองข้าง ชาบริเวณก้นและฝีเย็บอย่างชัดเจน (Saddle anesthesia) รีเฟล็กซ์เอ็นร้อยหวายหายไปทั้งสองข้าง และหูรูดทวารหนักหย่อนตัว ผู้ป่วยให้ประวัติว่ามีปัสสาวะเล็ดราดโดยไม่รู้สึกปวดมา 6 ชั่วโมง วัดปริมาณปัสสาวะค้างในกระเพาะหลังปัสสาวะได้ 750 mL ข้อใดคือขั้นตอนการจัดการที่ถูกต้องและเร่งด่วนที่สุดเพื่อฟื้นฟูการทำงานของระบบขับถ่ายและกล้ามเนื้อในระยะยาว?",
    },
    options: [
      {
        id: 0,
        text: {
          en: "Emergent lumbar MRI followed by surgical decompressive laminectomy within 24 to 48 hours",
          th: "การตรวจ MRI กระดูกสันหลังส่วนเอวด่วนที่สุดร่วมกับการผ่าตัดคลายการกดทับเส้นประสาทภายใน 24 ถึง 48 ชั่วโมง",
        },
        isCorrect: true,
      },
      {
        id: 1,
        text: {
          en: "Urgent intravenous high-dose methylprednisolone infusion followed by elective outpatient discectomy within two weeks",
          th: "การให้ยา Methylprednisolone ทางหลอดเลือดดำขนาดสูงร่วมกับการนัดผ่าตัดหมอนรองกระดูกแบบไม่เร่งด่วนภายในสองสัปดาห์",
        },
        isCorrect: false,
      },
      {
        id: 2,
        text: {
          en: "Immediate fluoroscopy-guided epidural corticosteroid injection followed by inpatient rehabilitation without surgical intervention",
          th: "การฉีดยาสเตียรอยด์เข้าช่องเหนือเยื่อหุ้มไขสันหลังทันทีร่วมกับการฟื้นฟูกายภาพบำบัดในโรงพยาบาลโดยไม่ต้องผ่าตัด",
        },
        isCorrect: false,
      },
      {
        id: 3,
        text: {
          en: "Emergent indwelling Foley catheterization followed by noncontrast computed tomography after 72 hours",
          th: "การใส่สายสวนปัสสาวะคาไว้ในห้องฉุกเฉินร่วมกับการตรวจเอกซเรย์คอมพิวเตอร์แบบไม่ฉีดสีหลังจากนั้น 72 ชั่วโมง",
        },
        isCorrect: false,
      },
    ],
    explanation: {
      en: "This patient presents with classic Acute Cauda Equina Syndrome with Retention (CESR), characterized by bilateral lower extremity neurological deficits, saddle anesthesia (S2-S5 distribution), lax anal sphincter tone, and overflow incontinence from autonomic parasympathetic denervation (pelvic splanchnic nerves S2-S4) resulting in an elevated post-void residual volume (>200 mL). Cauda equina syndrome is an absolute surgical emergency most commonly precipitated by a massive central lumbar disc herniation. Urgent whole-lumbar spine MRI is the definitive imaging modality of choice to delineate the exact level and extent of neural canal compromise. Meta-analyses and AO Spine guidelines demonstrate that surgical decompressive laminectomy performed within 24 to 48 hours offers the highest probability of restoring bladder, bowel, and motor function. High-dose steroid infusion (NASCIS protocol) is outdated and has no proven clinical role in compressive radiculopathies, serving only to delay emergency surgery. Epidural steroid injections are contraindicated because adding fluid volume into a critically compromised canal exacerbates compression. While catheterization relieves acute bladder distention, delaying surgical decompression beyond 48 to 72 hours leads to permanent bladder atony and irreversible fecal and sexual dysfunction.",
      th: "ผู้ป่วยรายนี้มีอาการตรงตามภาวะ Cauda Equina Syndrome with Retention (CESR) อย่างชัดเจน ซึ่งประกอบด้วยความผิดปกติของเส้นประสาทขาทั้งสองข้าง ชาบริเวณ Saddle anesthesia (S2-S5) หูรูดทวารหนักหย่อนตัว และมีปัสสาวะเล็ดล้น (Overflow incontinence) จากการสูญเสียระบบประสาทพาราซิมพาเทติกที่ไปเลี้ยงกล้ามเนื้อกระเพาะปัสสาวะ (S2-S4) ส่งผลให้ปัสสาวะค้างในกระเพาะปริมาณมาก (>200 mL) ภาวะนี้ถือเป็นภาวะฉุกเฉินสูงสุดทางกระดูกสันหลัง มักเกิดจากหมอนรองกระดูกชิ้นใหญ่หลุดกดทับเส้นประสาทบริเวณกึ่งกลาง การตรวจ MRI กระดูกสันหลังส่วนเอวด่วนที่สุดถือเป็นการตรวจมาตรฐานหลัก และข้อมูลหลักฐานทางการแพทย์ยืนยันว่าการผ่าตัด Decompressive laminectomy ภายใน 24 ถึง 48 ชั่วโมงช่วยเพิ่มโอกาสในการฟื้นตัวของระบบขับถ่ายปัสสาวะและอุจจาระได้ดีที่สุด การให้สเตียรอยด์ขนาดสูงไม่ได้ประโยชน์และทำให้การผ่าตัดล่าช้า การฉีดยาเข้าช่องไขสันหลังเป็นข้อห้ามเพราะเพิ่มแรงดันในช่องที่ตีบแคบอยู่แล้ว และการใส่สายสวนปัสสาวะรอเกิน 48-72 ชั่วโมงจะทำให้กล้ามเนื้อกระเพาะปัสสาวะเป็นอัมพาตอย่างถาวร",
    },
    pearls: {
      en: "Post-void residual volume (>200 mL) is the most sensitive objective marker of bladder denervation in cauda equina syndrome, mandating emergent MRI and surgical decompression within 24 to 48 hours.",
      th: "การตรวจวัดปริมาณปัสสาวะค้างในกระเพาะ (PVR > 200 mL) เป็นตัวบ่งชี้การสูญเสียระบบประสาทอัตโนมัติที่แม่นยำที่สุดใน Cauda Equina Syndrome ซึ่งต้องส่งทำ MRI และผ่าตัดคลายการกดทับด่วนที่สุดภายใน 24 ถึง 48 ชั่วโมง",
    },
    boneId: "tl-spine",
    regionId: "thoracolumbar",
  },
  // ── Polytrauma Resuscitation & Femoral Shaft Fracture — Damage Control Orthopedics (DCO) vs ETC ──
  {
    id: "hy-femur-polytrauma-dco",
    category: "general",
    tag: { en: "EMERGENCY MANAGEMENT • POLYTRAUMA", th: "การจัดการภาวะฉุกเฉิน • ผู้ป่วยบาดเจ็บหลายระบบ" },
    scenario: {
      en: "A 32-year-old male driver presents to the trauma center following a high-speed vehicular rollover. He sustained a closed, comminuted midshaft femur fracture (AO/OTA 32-B2), bilateral severe pulmonary contusions with flail chest, and a closed head injury (GCS 13). After receiving 4 units of packed red blood cells and 3 liters of balanced crystalloids, his vital signs demonstrate a pulse of 128 bpm and blood pressure of 86/54 mmHg. Bedside laboratory testing demonstrates a core body temperature of 34.6°C, arterial blood gas pH of 7.21 with base deficit of -9.0 mEq/L, serum lactate of 5.2 mmol/L, platelet count of 65,000/μL, and a PaO2/FiO2 ratio of 170. What is the most appropriate initial surgical management strategy for stabilizing this patient's femoral fracture?",
      th: "ผู้ป่วยชายอายุ 32 ปี ประสบอุบัติเหตุรถยนต์พลิกคว่ำด้วยความเร็วสูง ได้รับบาดเจ็บกระดูกต้นขาหักเป็นหลายชิ้นแบบปิด (AO/OTA 32-B2) ร่วมกับปอดช้ำรุนแรงทั้งสองข้าง อกเลวน (Flail chest) และบาดเจ็บทางสมองแบบปิด (GCS 13) ภายหลังได้รับเลือด 4 ยูนิตและสารน้ำ 3 ลิตร สัญญาณชีพระบุชีพจร 128 ครั้งต่อนาที ความดันโลหิต 86/54 มิลลิเมตรปรอท ผลตรวจทางห้องปฏิบัติการพบอุณหภูมิกาย 34.6 องศาเซลเซียส เลือดเป็นกรดรุนแรง pH 7.21 (Base deficit -9.0 mEq/L) กรดแลกติก 5.2 mmol/L เกล็ดเลือด 65,000 ต่อไมโครลิตร และอัตราส่วน PaO2/FiO2 เท่ากับ 170 ข้อใดคือแนวทางการผ่าตัดเบื้องต้นที่ถูกต้องที่สุดสำหรับการยึดตรึงกระดูกต้นขาหักในผู้ป่วยรายนี้?",
    },
    options: [
      {
        id: 0,
        text: {
          en: "Provisional external skeletal fixation followed by planned delayed intramedullary nailing after complete physiological resuscitation",
          th: "การใส่โครงเหล็กยึดตรึงภายนอกชั่วคราวและวางแผนผ่าตัดดามแกนโลหะเมื่อสภาวะร่างกายได้รับการฟื้นกู้สมบูรณ์",
        },
        isCorrect: true,
      },
      {
        id: 1,
        text: {
          en: "Immediate reamed antegrade intramedullary nailing performed concurrently with emergency surgical exploratory laparotomy under anesthesia",
          th: "การผ่าตัดดามแกนโลหะในโพรงกระดูกแบบคว้านทันทีร่วมกับการผ่าตัดสำรวจช่องท้องฉุกเฉินภายใต้การดมยาสลบ",
        },
        isCorrect: false,
      },
      {
        id: 2,
        text: {
          en: "Immediate unreamed retrograde intramedullary nailing under general anesthesia to achieve definitive rigid osseous stability",
          th: "การผ่าตัดดามแกนโลหะในโพรงกระดูกแบบไม่คว้านทันทีภายใต้การดมยาสลบเพื่อให้ได้ความมั่นคงของกระดูกอย่างถาวร",
        },
        isCorrect: false,
      },
      {
        id: 3,
        text: {
          en: "Emergent open anatomical reduction and submuscular locked bridge plate fixation with early functional rehabilitation",
          th: "การผ่าตัดเปิดจัดกระดูกและดามแผ่นโลหะบริดจ์เพลตใต้กล้ามเนื้อทันทีร่วมกับการเริ่มฟื้นฟูสมรรถภาพอย่างรวดเร็ว",
        },
        isCorrect: false,
      },
    ],
    explanation: {
      en: "This polytrauma patient presents in a 'borderline/unstable' physiological state characterized by the classic 'Lethal Triad' of trauma: severe hypothermia (temperature 34.6°C < 35°C), metabolic acidosis (pH 7.21 < 7.24, base deficit -9.0 mEq/L, lactate 5.2 mmol/L > 2.5 mmol/L), and coagulopathy (platelet count 65,000/μL < 90,000/μL). In addition, the patient has severe thoracic trauma (bilateral pulmonary contusions, flail chest, and PaO2/FiO2 ratio 170 indicating moderate-to-severe ARDS). According to the definitive principles of Damage Control Orthopedics (DCO) established by Pape and Giannoudis, performing definitive early total care (ETC)—such as reamed or unreamed intramedullary nailing or extensive open plate fixation—acts as a massive immunological 'second hit'. Intramedullary instrumentation releases bone marrow fat emboli, endotoxins, and pro-inflammatory cytokines (IL-6, TNF-alpha) directly into the pulmonary capillary bed, dramatically increasing the risk of fulminant ARDS, multiple organ dysfunction syndrome (MODS), and mortality. The mandatory initial strategy is rapid provisional knee-spanning external fixation (operative time < 30 minutes) to restore length and alignment and minimize ongoing hemorrhage, followed by transfer to the intensive care unit (ICU) for aggressive resuscitation. Conversion to definitive intramedullary nailing is safely scheduled during the 'second window of opportunity' (typically post-injury days 5 to 8) once the patient is hemodynamically stable, hypothermia and coagulopathy are corrected, and serum lactate normalizes below 2.0 mmol/L.",
      th: "ผู้ป่วยบาดเจ็บหลายระบบรายนี้อยู่ในสภาวะร่างกายแบบวิกฤต/ไม่คงที่ (Borderline/Unstable state) ซึ่งเข้าเกณฑ์ภาวะอันตรายถึงชีวิต 'Lethal Triad' อย่างชัดเจน ได้แก่ อุณหภูมิกายต่ำรุนแรง (34.6°C ซึ่งน้อยกว่า 35°C), เลือดเป็นกรดจากการเผาผลาญ (pH 7.21, Base deficit -9.0 mEq/L, Lactate 5.2 mmol/L ซึ่งสูงกว่า 2.5 mmol/L), และภาวะการแข็งตัวของเลือดบกพร่อง (เกล็ดเลือด 65,000/μL ซึ่งน้อยกว่า 90,000/μL) ร่วมกับมีการบาดเจ็บรุนแรงในช่องอก (ปอดช้ำสองข้าง อกเลวน และค่า PaO2/FiO2 เท่ากับ 170 ซึ่งบ่งชี้ภาวะ ARDS) ตามหลักการของ Damage Control Orthopedics (DCO) การทำผ่าตัดยึดกระดูกถาวรทันที (Early Total Care: ETC) เช่น การดามแกนโลหะในโพรงกระดูกแบบคว้านหรือไม่คว้าน หรือการผ่าตัดเปิดดามแผ่นโลหะ จะกระตุ้นให้เกิดปรากฏการณ์ 'Second Hit' การคว้านโพรงกระดูกทำให้เกิด Fat emboli และการหลั่งสารอักเสบ (IL-6, TNF-alpha) เข้าสู่หลอดเลือดปอดที่บอบช้ำอยู่แล้วอย่างรุนแรง นำไปสู่อวัยวะล้มเหลวหลายระบบ (MODS) และเสียชีวิต การรักษาเบื้องต้นที่ถูกต้องคือการใส่เหล็กยึดตรึงภายนอกข้ามข้อเข่าแบบชั่วคราว (ใช้เวลาผ่าตัดสั้น < 30 นาที) เพื่อควบคุมความยาว แนวกระดูก และลดการเสียเลือด แล้วย้ายผู้ป่วยไปดูแลต่อในหออภิบาลผู้ป่วยวิกฤต (ICU) เพื่อฟื้นกู้สภาวะร่างกาย จากนั้นจึงเปลี่ยนเป็นการผ่าตัดดามแกนโลหะถาวรในช่วงวันที่ 5 ถึง 8 หลังการบาดเจ็บเมื่อร่างกายพ้นภาวะวิกฤตและค่าแลกติกกลับมาเป็นปกติ",
    },
    pearls: {
      en: "In borderline or unstable polytrauma patients exhibiting the lethal triad (hypothermia <35°C, acidosis pH <7.24, coagulopathy platelets <90k) or severe pulmonary contusion (PaO2/FiO2 <200), Damage Control Orthopedics with rapid external fixation avoids the systemic 'second hit' that precipitates fatal ARDS and multi-organ failure.",
      th: "ในผู้ป่วยบาดเจ็บหลายระบบที่มีภาวะเสี่ยงวิกฤต (Lethal Triad: อุณหภูมิ <35°C, เลือดเป็นกรด pH <7.24, เกล็ดเลือด <90,000/μL) หรือมีปอดช้ำรุนแรง (PaO2/FiO2 <200) ต้องใช้หลักการ Damage Control Orthopedics โดยใส่ External Fixator ชั่วคราวเพื่อเลี่ยงภาวะ 'Second Hit' ที่ทำให้เกิด ARDS และอวัยวะล้มเหลวเฉียบพลัน",
    },
    boneId: "femur",
    regionId: "femoral-shaft",
  },
  // ── High-Energy Tibial Pilon Fracture (AO/OTA 43-C3) — Staged Protocol & Wrinkle Sign ──
  {
    id: "hy-tibia-pilon-staged-fixation",
    category: "lower",
    tag: { en: "OPERATIVE PEARL • PILON", th: "เทคนิคผ่าตัด • กระดูกปลายหน้าแข้ง" },
    scenario: {
      en: "A 42-year-old construction worker falls 4 meters from a scaffold, sustaining a closed, highly comminuted intra-articular distal tibia pilon fracture (AO/OTA 43-C3) with severe metaphyseal impaction and an associated distal fibula fracture. In the emergency department 4 hours post-injury, physical examination reveals massive soft tissue swelling with tense, non-pitting edema and early hemorrhagic fracture blisters over the anteromedial distal leg. The foot is well-perfused with palpable distal pulses, sensation is intact, and the muscular compartments of the leg remain soft. Radiographs reveal marked joint surface incongruity and shortening. What is the standard evidence-based surgical sequence to reconstruct the articular surface while minimizing deep wound sepsis and soft-tissue necrosis?",
      th: "คนงานก่อสร้างชายอายุ 42 ปี ตกจากนั่งร้านสูง 4 เมตร ได้รับบาดเจ็บกระดูกปลายหน้าแข้งแตกเข้าข้ออย่างรุนแรงและยุบตัวเป็นหลายชิ้นแบบปิด (AO/OTA 43-C3, Pilon fracture) ร่วมกับกระดูกฟิบูลาหัก ที่ห้องฉุกเฉิน 4 ชั่วโมงหลังเกิดเหตุ ตรวจร่างกายพบบริเวณข้อเท้าและหน้าแข้งส่วนล่างบวมตึงรุนแรง กดไม่บุ๋ม และเริ่มมีตุ่มน้ำเลือด (Hemorrhagic fracture blisters) บริเวณผิวด้านหน้าและด้านใน เท้ายังมีเลือดไปเลี้ยงดี ชีพจรส่วนปลายชัดเจน การรับความรู้สึกปกติ และช่องกล้ามเนื้อขานุ่มดี ภาพเอกซเรย์พบผิวข้อยุบตัวและกระดูกหดสั้น ข้อใดคือลำดับขั้นตอนการผ่าตัดรักษาตามหลักฐานเชิงประจักษ์เพื่อจัดผิวข้อให้เรียบโดยลดความเสี่ยงต่อการติดเชื้อรุนแรงและการตายของเนื้อเยื่อผิวหนัง?",
    },
    options: [
      {
        id: 0,
        text: {
          en: "Temporary joint-spanning external skeletal fixation followed by delayed definitive open plating after skin wrinkling reappears",
          th: "การใส่โครงเหล็กยึดตรึงภายนอกชั่วคราวและรอผ่าตัดเปิดดามแผ่นโลหะถาวรเมื่อผิวหนังยุบบวมจนมีรอยย่นชัดเจน",
        },
        isCorrect: true,
      },
      {
        id: 1,
        text: {
          en: "Immediate emergent open anatomical reduction and dual plating before the progression of hemorrhagic cutaneous blistering",
          th: "การผ่าตัดเปิดจัดกระดูกและดามแผ่นโลหะคู่ทันทีก่อนที่ตุ่มน้ำเลือดบนผิวหนังจะแตกและลุกลามขยายวงกว้าง",
        },
        isCorrect: false,
      },
      {
        id: 2,
        text: {
          en: "Continuous circumferential long-leg cast immobilization maintained throughout hospital admission until radiographic union of articular fragments",
          th: "การใส่เฝือกขายาวแบบกลมต่อเนื่องตลอดการนอนโรงพยาบาลจนกระทั่งกระดูกผิวข้อติดสนิทตามผลเอกซเรย์",
        },
        isCorrect: false,
      },
      {
        id: 3,
        text: {
          en: "Immediate percutaneous screw fixation across the articular mortise combined with acute unreamed tibial intramedullary insertion",
          th: "การยึดตรึงผิวข้อด้วยสกรูผ่านผิวหนังทันทีร่วมกับการดามแกนโลหะในโพรงกระดูกแบบไม่คว้านอย่างเร่งด่วน",
        },
        isCorrect: false,
      },
    ],
    explanation: {
      en: "High-energy tibial pilon fractures (AO/OTA 43-C) result from severe axial load and rotational impact, inflicting tremendous traumatic injury not only to the distal tibia articular surface and subchondral bone but crucially to the vulnerable anteromedial soft tissue envelope. The historical standard of immediate open reduction and internal fixation (ORIF) through acutely traumatized, edematous, and blistered soft tissues resulted in catastrophic wound dehiscence, skin sloughing, and deep infection rates exceeding 30% to 50%, often necessitating free flap coverage or below-knee amputation. To eliminate these disastrous complications, the landmark staged protocol pioneered by Sirkin, Patterson, and Cole was established and remains the worldwide standard of care. The protocol consists of: (1) Urgent provisional joint-spanning ankle external fixator (delta or quadrilateral frame) application to restore length, correct axial alignment, and relieve soft-tissue tension via ligamentotaxis, often combined with open reduction of the fibula if the lateral soft tissues permit; (2) Performance of a fine-cut (1 mm) CT scan once length is restored to meticulously map articular fracture fragments; and (3) Planned delayed definitive open reduction and stable plate fixation only after soft tissue swelling resolves, typically between 10 to 21 days post-injury. The primary clinical benchmark signifying safe timing for definitive surgery is the 'wrinkle sign'—the return of cutaneous skin wrinkles upon active or passive ankle dorsiflexion and eversion, accompanied by epithelialization of clear and hemorrhagic fracture blisters. Cast immobilization in displaced articular fractures produces intractable post-traumatic arthritis and malunion. Immediate percutaneous screw fixation with intramedullary nailing is contraindicated in severely comminuted 43-C3 fractures due to inability to achieve articular anatomic reduction and high risk of propagating articular displacement.",
      th: "กระดูกหน้าแข้งส่วนปลายแตกเข้าข้อแบบพลังงานสูง (Pilon fracture, AO/OTA 43-C) เกิดจากแรงกระแทกในแนวแกนร่วมกับแรงหมุน ซึ่งนอกจากจะทำลายผิวข้อและกระดูกส่วน Metaphysis อย่างรุนแรงแล้ว ยังทำลายเนื้อเยื่ออ่อนและผิวหนังด้านหน้าและด้านในของข้อเท้าอย่างมหาศาล ในอดีตการผ่าตัดเปิดจัดกระดูกและดามแผ่นโลหะ (ORIF) ทันทีในขณะที่เนื้อเยื่ออ่อนกำลังบวมตึงและมีตุ่มน้ำ (Fracture blisters) ก่อให้เกิดแผลแยก เนื้อเยื่อเน่าตาย และติดเชื้อรุนแรงในกระดูกสูงถึง 30-50% จนหลายรายต้องตัดขา ปัจจุบันจึงใช้หลักการผ่าตัดแบบแบ่งระยะ (Staged Management Protocol) ซึ่งเป็นมาตรฐานระดับโลก ประกอบด้วย: (1) การผ่าตัดเร่งด่วนเพื่อใส่โครงเหล็กยึดตรึงภายนอกข้ามข้อเท้า (Spanning External Fixator) เพื่อดึงความยาว แนวกระดูกให้ตรง และลดแรงตึงของเนื้อเยื่ออ่อนผ่านทาง Ligamentotaxis, (2) ทำ CT scan เพื่อวิเคราะห์ชิ้นกระดูกผิวข้ออย่างละเอียดหลังดึงความยาวเข้าที่แล้ว, และ (3) รอผ่าตัดเปิดดามแผ่นโลหะจัดผิวข้ออย่างถาวรเมื่อเนื้อเยื่ออ่อนยุบบวมเต็มที่ (มักใช้เวลา 10 ถึง 21 วัน) โดยสัญญาณทางคลินิกที่สำคัญที่สุดที่บ่งบอกว่าปลอดภัยต่อการผ่าตัดคือ 'Wrinkle Sign' หรือการเกิดรอยย่นของผิวหนังกลับคืนมาเมื่อกระดกข้อเท้า และตุ่มน้ำแห้งตกสะเก็ด การใส่เฝือกขายาวทำให้เกิดข้อติดและข้อเสื่อมรุนแรงจากผิวข้อที่ไม่เรียบ ส่วนการยึดสกรูร่วมกับดามแกนโลหะในโพรงกระดูกไม่สามารถจัดผิวข้อที่แตกละเอียดระดับ 43-C3 ให้เรียบได้และเสี่ยงต่อการหลุดของผิวข้อ",
    },
    pearls: {
      en: "Definitive open plate fixation of high-energy tibial pilon fractures must be delayed until the 'wrinkle sign' reappears (typically 10-21 days post-spanning ex-fix), reducing wound necrosis and deep sepsis rates from >30% down to under 5%.",
      th: "การผ่าตัดเปิดดามเหล็กถาวรใน Pilon Fracture ต้องรอจนกว่าจะตรวจพบ 'Wrinkle Sign' (ผิวหนังเริ่มมีรอยย่น ซึ่งมักใช้เวลา 10-21 วันหลังใส่ External Fixator) เพื่อลดอัตราการเกิดแผลเน่าและการติดเชื้อรุนแรงจากเดิมกว่า 30% ให้เหลือต่ำกว่า 5%",
    },
    boneId: "tibia",
    regionId: "distal",
  },
  // ── Pipkin Type II Femoral Head Fracture-Dislocation — Ganz Trochanteric Flip & MFCA Preservation ──
  {
    id: "hy-femur-pipkin-head-vascularity",
    category: "lower",
    tag: { en: "OPERATIVE PEARL • PIPKIN FRACTURE", th: "เทคนิคผ่าตัด • ข้อสะโพกหลุดร่วมกับหัวกระดูกต้นขาหัก" },
    scenario: {
      en: "A 31-year-old male unrestrained driver sustains a high-energy dashboard knee impact during a head-on motor vehicle collision, resulting in a posterior hip dislocation. Following emergent closed reduction under conscious sedation in the trauma bay, post-reduction CT imaging confirms a concentric hip joint with a 1.8 cm single articular shear fragment originating from the weight-bearing dome of the femoral head cephalad to the fovea capitis, demonstrating 3 mm of residual step-off without neck fracture or acetabular wall involvement (Pipkin Type II). When planning operative reconstruction to restore articular congruity while minimizing the risk of iatrogenic femoral head avascular necrosis, which surgical approach and fixation strategy is most strongly recommended?",
      th: "ผู้ป่วยชายอายุ 31 ปี ไม่ได้คาดเข็มขัดนิรภัย ประสบอุบัติเหตุรถยนต์ชนประสานงาโดยเข่ากระแทกแผงคอนโซลหน้ารถอย่างรุนแรง เกิดภาวะข้อสะโพกหลุดไปด้านหลัง หลังได้รับการดึงข้อสะโพกเข้าที่อย่างเร่งด่วนในห้องฉุกเฉิน ผลตรวจเอกซเรย์คอมพิวเตอร์ (CT scan) พบข้อสะโพกเข้าที่สนิทดี แต่พบชิ้นกระดูกผิวข้อของหัวกระดูกต้นขาขนาด 1.8 ซม. หลุดเคลื่อน 3 มม. อยู่บริเวณเหนือต่อ Fovea capitis ซึ่งเป็นส่วนรับน้ำหนักหลัก โดยไม่พบคอกระดูกต้นขาหักหรือผนังเบ้าสะโพกแตก (Pipkin Type II) ในการวางแผนผ่าตัดจัดผิวกระดูกข้อให้เรียบโดยลดความเสี่ยงต่อภาวะหัวกระดูกต้นขาตายจากการขาดเลือด ข้อใดคือแนวทางการเลือกทางเข้าผ่าตัดและอุปกรณ์ยึดตรึงที่เหมาะสมที่สุด?",
    },
    options: [
      {
        id: 0,
        text: {
          en: "Ganz surgical hip dislocation with trochanteric flip osteotomy and countersunk headless variable-pitch screw fixation",
          th: "Ganz surgical hip dislocation ร่วมกับการทำ Trochanteric flip osteotomy และยึดตรึงด้วยสกรูชนิดจมมิดใต้กระดูกอ่อน",
        },
        isCorrect: true,
      },
      {
        id: 1,
        text: {
          en: "Posterior Kocher-Langenbeck approach with posterior capsulotomy and anterior-to-posterior cortical lag screw fixation",
          th: "Posterior Kocher-Langenbeck approach ร่วมกับการเปิดเยื่อหุ้มข้อด้านหลังและยึดตรึงด้วยสกรู Cortical lag screw",
        },
        isCorrect: false,
      },
      {
        id: 2,
        text: {
          en: "Anterolateral Watson-Jones approach with transverse gluteal tenotomy and unthreaded Kirschner wire transfixation",
          th: "Anterolateral Watson-Jones approach ร่วมกับการตัดเปิดเอ็นกล้ามเนื้อสะโพกและยึดตรึงด้วยลวด Kirschner wire",
        },
        isCorrect: false,
      },
      {
        id: 3,
        text: {
          en: "Extended iliofemoral approach with rectus femoris release and multi-hole bioabsorbable buttress plate application",
          th: "Extended iliofemoral approach ร่วมกับการตัดคลายกล้ามเนื้อหน้าขาและยึดตรึงด้วยแผ่นโลหะดามกระดูกชนิดสลายตัวได้",
        },
        isCorrect: false,
      },
    ],
    explanation: {
      en: "Pipkin Type II femoral head fractures involve the superior weight-bearing articular surface cephalad to the fovea capitis. Displaced fractures (>1-2 mm step-off) require anatomical open reduction and rigid internal fixation to prevent rapid post-traumatic osteoarthritis. The surgical hip dislocation described by Ganz utilizing a digastric trochanteric flip osteotomy with an anterior Z-shaped capsulotomy provides 360-degree visualization of the femoral head and acetabulum while preserving the deep branch of the medial femoral circumflex artery (MFCA), which courses posterior to the obturator externus. Fixation is performed using countersunk headless compression screws (e.g., Herbert or Acutrak) driven below the articular cartilage surface to avoid damaging the acetabular labrum and cartilage. In contrast, the posterior Kocher-Langenbeck approach requires a posterior capsulotomy that directly threatens the deep branch of the MFCA and posterolateral retinacular vessels—frequently the sole surviving blood supply to the femoral head after posterior hip dislocation—dramatically increasing the rate of avascular necrosis (AVN). The Watson-Jones approach provides poor visualization of the superior weight-bearing dome and unthreaded Kirschner wires lack compressive stability while carrying risks of chondrolysis and intra-pelvic migration. The extended iliofemoral approach is excessively invasive and associated with high rates of heterotopic ossification, and bioabsorbable buttress plates are unsuitable for the intra-articular femoral head dome.",
      th: "กระดูกหัวสะโพกหักแบบ Pipkin Type II เกิดขึ้นบริเวณส่วนบนเหนือต่อ Fovea capitis ซึ่งเป็นพื้นที่รับน้ำหนักหลักของข้อสะโพก (Weight-bearing dome) หากมีการเคลื่อนที่มากกว่า 1-2 มม. จำเป็นต้องได้รับการผ่าตัดจัดกระดูกให้เข้าที่สนิทและยึดตรึงภายในเพื่อป้องกันข้อเสื่อมรุนแรง เทคนิค Ganz Surgical Hip Dislocation โดยทำ Trochanteric Flip Osteotomy และเปิดเยื่อหุ้มข้อด้านหน้าเป็นรูปตัว Z เป็นวิธีมาตรฐานที่ช่วยให้มองเห็นผิวข้อได้ 360 องศา โดยไม่ทำลายเส้นเลือด Medial Femoral Circumflex Artery (MFCA) แขนงลึกซึ่งทอดตัวอยู่ด้านหลังกล้ามเนื้อ Obturator externus และอุปกรณ์ที่ใช้ต้องเป็นสกรูชนิดไม่มีหัว (Headless compression screws) ที่ฝังจมมิดอยู่ใต้ผิวของกระดูกอ่อนข้อต่อ ในทางตรงกันข้าม การเข้าทางด้านหลัง (Kocher-Langenbeck) ต้องตัดเปิดเยื่อหุ้มข้อด้านหลังซึ่งเสี่ยงต่อการตัดโดนแขนงหลอดเลือด Retinacular ด้านหลังที่เหลือรอดอยู่เพียงแหล่งเดียวหลังข้อสะโพกหลุด ทำให้เกิดภาวะหัวกระดูกขาดเลือดตาย (AVN) สูงขึ้นอย่างมาก ส่วน Watson-Jones approach มองเห็นผิวข้อยากและลวด K-wire ไม่มีแรงอัดกระดูก อีกทั้งเสี่ยงต่อการเลื่อนหลุด และ Extended iliofemoral approach ก่อให้เกิดการบาดเจ็บต่อเนื้อเยื่อมากเกินไปและเกิดกระดูกงอกผิดที่ (Heterotopic ossification) สูง",
    },
    pearls: {
      en: "Ganz surgical hip dislocation via trochanteric flip osteotomy preserves the deep branch of the medial femoral circumflex artery (MFCA) protected by the obturator externus, making it the approach of choice for Pipkin II femoral head fractures.",
      th: "การทำ Ganz Surgical Hip Dislocation ด้วย Trochanteric Flip Osteotomy ช่วยปกป้องเส้นเลือด Medial Femoral Circumflex Artery (MFCA) แขนงลึกที่ได้รับการปกป้องโดยกล้ามเนื้อ Obturator Externus จึงเป็นทางเข้าผ่าตัดที่ปลอดภัยที่สุดสำหรับ Pipkin Type II",
    },
    boneId: "femur",
    regionId: "femoral-neck",
  },
  // ── Distal Radius Volar Plating — Watershed Line & Late Flexor Pollicis Longus (FPL) Rupture ──
  {
    id: "hy-radius-volar-plate-watershed",
    category: "upper",
    tag: { en: "OPERATIVE COMPLICATION • DISTAL RADIUS", th: "ภาวะแทรกซ้อนจากการผ่าตัด • กระดูกปลายแขนส่วนปลาย" },
    scenario: {
      en: "A 62-year-old right-hand-dominant woman presents 8 months following uneventful volar locking plate fixation for an AO/OTA 23-C2 intra-articular distal radius fracture. She reports feeling an audible pop while attempting to twist open a glass jar, followed immediately by complete inability to actively flex the interphalangeal (IP) joint of the right thumb. On physical examination, active metacarpophalangeal (MCP) flexion of the thumb, wrist motion, and digital flexion of the other four fingers remain intact without median nerve paresthesia. Follow-up radiographs demonstrate solid osseous union of the fracture, but the distal margin of the volar plate is positioned distal and prominent relative to the transverse anatomical ridge of the distal radius (Soong Grade 2 prominence). Which specific tendon sustained late attrition rupture, and which critical surgical landmark was violated during plate placement?",
      th: "หญิงอายุ 62 ปี มือขวาข้างถนัด มาพบแพทย์ 8 เดือนหลังได้รับการผ่าตัดดามแผ่นโลหะด้านหน้า (Volar locking plate) สำหรับกระดูกปลายแขนเรเดียสส่วนปลายแตกเข้าข้อ (AO/OTA 23-C2) ผู้ป่วยเล่าว่าได้ยินเสียงดีดดังในข้อมือขณะออกแรงบิดเปิดฝาขวดแก้ว จากนั้นไม่สามารถงอข้อนิ้วโป้งส่วนปลาย (Interphalangeal joint) ได้ทันที ตรวจร่างกายพบการงอข้อโคนนิ้วโป้ง (MCP joint) การขยับข้อมือ และการงอนิ้วมือทั้งสี่นิ้วที่เหลือยังทำงานได้ตามปกติ ไม่มีอาการชาตามแนวประสาทมีเดียน ภาพเอกซเรย์ติดตามอาการพบว่ากระดูกติดสนิทดี แต่ขอบล่างของแผ่นโลหะยื่นเลยสันนูนทางกายวิภาคของกระดูกเรเดียส (Soong Grade 2 prominence) เอ็นกล้ามเนื้อเส้นใดเกิดการฉีกขาดจากแรงเสียดสี และแพทย์ผ่าตัดละเมิดจุดสังเกตทางกายวิภาคใด?",
    },
    options: [
      {
        id: 0,
        text: {
          en: "Flexor pollicis longus tendon due to hardware placement distal and prominent to the volar watershed line",
          th: "เส้นเอ็น Flexor pollicis longus จากการวางแผ่นโลหะยื่นล้ำเกินแนวนูน Watershed line ทางด้านหน้า",
        },
        isCorrect: true,
      },
      {
        id: 1,
        text: {
          en: "Extensor pollicis longus tendon due to excessive length of bicortical screws penetrating the dorsal cortex",
          th: "เส้นเอ็น Extensor pollicis longus จากการใส่สกรูยาวเกินจนปลายโผล่ทะลุเปลือกกระดูกทางด้านหลัง",
        },
        isCorrect: false,
      },
      {
        id: 2,
        text: {
          en: "Flexor digitorum profundus tendon due to aggressive detachment and devitalization of the pronator quadratus",
          th: "เส้นเอ็น Flexor digitorum profundus จากการเลาะแยกกล้ามเนื้อ Pronator quadratus กว้างเกินไป",
        },
        isCorrect: false,
      },
      {
        id: 3,
        text: {
          en: "Abductor pollicis longus tendon due to excessive distal subperiosteal dissection of the first dorsal compartment",
          th: "เส้นเอ็น Abductor pollicis longus จากการเลาะเปิดเยื่อหุ้มกระดูกช่องแรกด้านหลังมากเกินไป",
        },
        isCorrect: false,
      },
    ],
    explanation: {
      en: "This patient demonstrates a classic delayed attrition rupture of the flexor pollicis longus (FPL) tendon following volar locking plate fixation of the distal radius. The FPL is the sole motor unit responsible for active flexion of the thumb interphalangeal (IP) joint; the flexor pollicis brevis (FPB) preserves metacarpophalangeal (MCP) flexion. The critical surgical landmark on the volar distal radius is the 'watershed line'—a transverse anatomical ridge located approximately 2 mm proximal to the joint line along the radial styloid and 10 to 15 mm proximal along the ulnar corner (drifting closer to the articular margin at the lunate facet). Placing a volar plate distal to or projecting directly over this ridge corresponds to Soong Grade 2 prominence. In this position, the plate lies in direct abrasive contact with the deep gliding flexor tendons (most commonly FPL, followed by FDP of the index finger), leading to chronic tenosynovitis, fraying, and eventual complete attrition rupture during forceful pinch or grasp. Extensor pollicis longus (EPL) rupture is caused by protruding bicortical screw tips penetrating the dorsal cortex at Lister's tubercle, which results in inability to extend (not flex) the thumb IP joint. Aggressive release of the pronator quadratus affects pronation torque and tissue cushioning but does not cause isolated loss of thumb IP flexion. Abductor pollicis longus (APL) tendons course in the first dorsal compartment and are involved in thumb abduction, not IP flexion.",
      th: "ผู้ป่วยรายนี้เกิดภาวะเส้นเอ็น Flexor Pollicis Longus (FPL) ขาดจากการเสียดสีเรื้อรัง (Delayed attrition rupture) ซึ่งเป็นภาวะแทรกซ้อนสำคัญของการดามกระดูกปลายแขนด้านหน้า โดยเอ็น FPL เป็นกล้ามเนื้อเพียงมัดเดียวที่ทำหน้าที่งอข้อนิ้วโป้งส่วนปลาย (IP joint) ในขณะที่การงอข้อโคนนิ้วโป้ง (MCP joint) ทำงานโดยกล้ามเนื้อ Flexor pollicis brevis จุดสังเกตทางกายวิภาคที่สำคัญที่สุดด้านหน้ากระดูกเรเดียสคือ 'Watershed line' ซึ่งเป็นสันกระดูกขวางนูนต่ำ ห่างจากผิวข้อประมาณ 2 มม. ทางด้านเรเดียล และ 10-15 มม. ทางด้านอัลนา การวางแผ่นโลหะยื่นล้ำไปทางส่วนปลายหรือนูนล้ำหน้าแนวกระดูกนี้ตรงกับ Soong Grade 2 prominence ทำให้ขอบโลหะเสียดสีโดยตรงกับเส้นเอ็น FPL (และ FDP ของนิ้วชี้) จนเอ็นเปื่อยและขาดในที่สุด สำหรับเอ็น Extensor Pollicis Longus (EPL) มักขาดจากปลายสกรูที่ยาวทะลุคอร์เทกซ์ด้านหลังใกล้ Lister's tubercle ทำให้ 'เหยียด' นิ้วโป้งไม่ได้ ไม่ใช่การงอ ส่วนการเลาะกล้ามเนื้อ Pronator quadratus อาจทำให้แรงคว่ำมือลดลงแต่ไม่ทำให้เสียนิ้วโป้งงอ และเอ็น Abductor Pollicis Longus (APL) ทำหน้าที่กางนิ้วโป้งในช่องเอ็นด้านหลังช่องแรก",
    },
    pearls: {
      en: "Placing a volar locking plate distal to the watershed line (Soong Grade 2) dramatically increases the risk of delayed flexor pollicis longus (FPL) tendon attrition rupture; plates must remain strictly proximal to this boundary.",
      th: "การวางแผ่นโลหะ Volar Plate ยื่นล้ำเลยแนว Watershed Line (Soong Grade 2) จะเพิ่มความเสี่ยงต่อการขาดของเส้นเอ็น Flexor Pollicis Longus (FPL) อย่างมหาศาล จึงต้องวางแผ่นเหล็กให้อยู่เหนือกว่าแนวนี้เสมอ",
    },
    boneId: "radius",
    regionId: "distal",
  },
  // ── Acetabular Posterior Wall / Column — Kocher-Langenbeck Approach & Sciatic Nerve Traction Protection ──
  {
    id: "hy-pelvis-kocher-langenbeck-sciatic",
    category: "lower",
    tag: { en: "SURGICAL APPROACH • ACETABULUM", th: "ทางเข้าผ่าตัด • เบ้าสะโพก" },
    scenario: {
      en: "A 34-year-old male unrestrained driver sustains a posterior hip fracture-dislocation with an incarcerated osteochondral fragment and a displaced posterior wall acetabular fracture (Letournel posterior wall type) following a high-energy motor vehicle collision. Following closed reduction of the hip joint in the emergency department, open reduction and internal fixation is planned via a Kocher-Langenbeck approach in the prone position. During exposure and deep retractor placement around the greater and lesser sciatic notches, which specific intraoperative limb position must be maintained to minimize traction injury to the peroneal division of the sciatic nerve?",
      th: "ผู้ป่วยชายอายุ 34 ปี ไม่ได้คาดเข็มขัดนิรภัย ประสบอุบัติเหตุรถยนต์ชน เกิดภาวะข้อสะโพกหลุดไปด้านหลังร่วมกับกระดูกเบ้าสะโพกส่วนหลังแตกหักแบบเคลื่อนที่ (Letournel posterior wall fracture) และมีชิ้นส่วนกระดูกอ่อนติดค้างในข้อ หลังจากการดึงข้อสะโพกเข้าที่ในห้องฉุกเฉิน ผู้ป่วยมีข้อบ่งชี้ในการผ่าตัดจัดแนวกระดูกและยึดตรึงภายในผ่านทางเข้าผ่าตัด Kocher-Langenbeck ในท่านอนคว่ำ ระหว่างการเปิดเลาะเนื้อเยื่อและการวางเครื่องมือดึงรั้งบริเวณ Greater และ Lesser sciatic notches ศัลยแพทย์และผู้ช่วยต้องจัดท่าของรยางค์ล่างให้อยู่ในลักษณะใดเพื่อป้องกันการบาดเจ็บจากการดึงรั้งต่อแขนง Peroneal ของเส้นประสาทไซอาติก (Sciatic nerve)?",
    },
    options: [
      {
        id: 0,
        text: {
          en: "Maintaining the hip in full extension and the knee in 90 degrees of flexion",
          th: "จัดข้อสะโพกให้อยู่ในท่าเหยียดตรงและงอข้อเข่าทำมุม 90 องศา",
        },
        isCorrect: true,
      },
      {
        id: 1,
        text: {
          en: "Maintaining the hip in 90 degrees of flexion and the knee in full extension",
          th: "จัดข้อสะโพกให้อยู่ในท่างอ 90 องศาและเหยียดข้อเข่าตรงอย่างเต็มที่",
        },
        isCorrect: false,
      },
      {
        id: 2,
        text: {
          en: "Maintaining the hip in 45 degrees of flexion and the knee in full extension",
          th: "จัดข้อสะโพกให้อยู่ในท่างอ 45 องศาและเหยียดข้อเข่าตรงอย่างเต็มที่",
        },
        isCorrect: false,
      },
      {
        id: 3,
        text: {
          en: "Maintaining the hip in full extension and the knee in complete zero extension",
          th: "จัดข้อสะโพกให้อยู่ในท่าเหยียดตรงและเหยียดข้อเข่าตรงศูนย์องศาอย่างเต็มที่",
        },
        isCorrect: false,
      },
    ],
    explanation: {
      en: "The Kocher-Langenbeck approach is the workhorse posterior approach to the acetabulum, providing direct access to the posterior wall, posterior column, and retroacetabular surface. During exposure, the sciatic nerve is at substantial risk of iatrogenic traction injury from retractors placed in the greater sciatic notch or over the ischial spine. The nerve courses posterior to the hip and behind the knee joint before bifurcation. Hip extension relaxes the sciatic nerve across the posterior pelvis, while knee flexion to 90 degrees relieves tension along the distal sciatic trunk and hamstring origins. Conversely, extending the knee and/or flexing the hip places significant longitudinal traction across the nerve (equivalent to a straight-leg raise test). The common peroneal division of the sciatic nerve is particularly vulnerable to traction neuropraxia because it is laterally situated against the retractors, is tethered distally at the fibular head, and possesses fewer and larger fascicles with less protective epineurium compared to the medial tibial division.",
      th: "ทางเข้าผ่าตัด Kocher-Langenbeck เป็นทางเข้าผ่าตัดมาตรฐานทางด้านหลังสำหรับกระดูกเบ้าสะโพก ช่วยให้มองเห็น Posterior wall, Posterior column และ Retroacetabular surface ได้อย่างชัดเจน ระหว่างการผ่าตัด เส้นประสาทไซอาติก (Sciatic nerve) มีความเสี่ยงสูงมากที่จะเกิดการบาดเจ็บจากการดึงรั้ง (Traction neuropraxia) จากเครื่องมือถ่างขยายแผลที่วางบริเวณ Greater sciatic notch หรือ Ischial spine เนื่องจากเส้นประสาททอดผ่านด้านหลังของทั้งข้อสะโพกและข้อเข่า การจัดข้อสะโพกให้อยู่ในท่าเหยียด (Extension) จะช่วยลดความตึงของเส้นประสาทบริเวณด้านหลังของเบ้าสะโพก และการงอข้อเข่า 90 องศา (Flexion) จะช่วยคลายความตึงของเส้นประสาทส่วนปลายและกล้ามเนื้อกลุ่ม Hamstrings ในทางกลับกัน การเหยียดเข่าตรงหรือการงอสะโพกจะเพิ่มแรงดึงรั้งตามแนวยาวต่อเส้นประสาทอย่างมาก (คล้ายกับการทำท่า Straight Leg Raise) โดยแขนง Peroneal division มีความเสี่ยงต่อการบาดเจ็บสูงที่สุดเนื่องจากอยู่ชิดด้านข้างมากกว่า ถูกยึดตรึงไว้ที่หัวกระดูกฟิบูลาส่วนปลาย และมีเยื่อหุ้มเส้นประสาท (Epineurium) ป้องกันน้อยกว่าแขนง Tibial",
    },
    pearls: {
      en: "During the Kocher-Langenbeck approach, the assistant must keep the hip fully extended and knee flexed to 90 degrees to relax the sciatic nerve; the peroneal division is most vulnerable due to its lateral position and distal tethering at the fibular neck.",
      th: "ระหว่างการผ่าตัดผ่านทางเข้า Kocher-Langenbeck ต้องจัดสะโพกเหยียดตรงและงอเข่า 90 องศาเสมอเพื่อคลายความตึงของ Sciatic nerve โดยแขนง Peroneal division จะเสี่ยงต่อการบาดเจ็บสูงสุดจากตำแหน่งที่อยู่ด้านข้างและการถูกตรึงที่คอกระดูกฟิบูลา",
    },
    boneId: "pelvis",
    regionId: "acetabulum",
  },
  // ── Intertrochanteric Femur Fracture — Baumgaertner's Tip-Apex Distance (TAD) & Cut-Out Prevention ──
  {
    id: "hy-femur-intertroch-tad-cutout",
    category: "lower",
    tag: { en: "BIOMECHANICS • PROXIMAL FEMUR", th: "ชีวกลศาสตร์ • กระดูกต้นขาส่วนต้น" },
    scenario: {
      en: "An 82-year-old female with severe osteopenia sustains a closed, unstable 3-part intertrochanteric femur fracture (AO/OTA 31-A2) following a ground-level fall. She undergoes successful closed reduction and cephalomedullary nailing using a helical blade / lag screw construct. When evaluating immediate postoperative fluoroscopic radiographs to assess the mechanical stability of the fixation and minimize the risk of superior screw cut-out, which combination of implant position and quantitative metric represents the gold-standard recommendation established by Baumgaertner?",
      th: "หญิงอายุ 82 ปี มีภาวะกระดูกพรุนรุนแรง ประสบอุบัติเหตุหกล้ม เกิดกระดูกสะโพกหักแบบไม่มั่นคง 3 ชิ้นส่วน (AO/OTA 31-A2) ได้รับการผ่าตัดจัดแนวกระดูกแบบปิดและดามด้วย Cephalomedullary nail ชนิดมี Lag screw/Helical blade เมื่อศัลยแพทย์ประเมินภาพเอกซเรย์ Fluoroscopy หลังผ่าตัดทันทีเพื่อตรวจสอบความมั่นคงทางชีวกลศาสตร์และลดความเสี่ยงต่อภาวะสกรูทะลุหลุดออกจากหัวกระดูก (Cut-out) ข้อใดคือตำแหน่งของสกรูและค่าทางปริมาณตามหลักการมาตรฐานของ Baumgaertner?",
    },
    options: [
      {
        id: 0,
        text: {
          en: "Center-center or inferior-center lag screw placement with a cumulative tip-apex distance measuring less than 25 mm",
          th: "การวางตำแหน่งสกรูตรงกลางหรือค่อนไปทางด้านล่าง โดยมีค่ารวมระยะ Tip-Apex Distance น้อยกว่า 25 มิลลิเมตร",
        },
        isCorrect: true,
      },
      {
        id: 1,
        text: {
          en: "Superior-center or anterior-center lag screw placement with a cumulative tip-apex distance measuring less than 25 mm",
          th: "การวางตำแหน่งสกรูค่อนไปทางด้านบนหรือด้านหน้า โดยมีค่ารวมระยะ Tip-Apex Distance น้อยกว่า 25 มิลลิเมตร",
        },
        isCorrect: false,
      },
      {
        id: 2,
        text: {
          en: "Center-center or inferior-center lag screw placement with a cumulative tip-apex distance measuring greater than 35 mm",
          th: "การวางตำแหน่งสกรูตรงกลางหรือค่อนไปทางด้านล่าง โดยมีค่ารวมระยะ Tip-Apex Distance มากกว่า 35 มิลลิเมตร",
        },
        isCorrect: false,
      },
      {
        id: 3,
        text: {
          en: "Superior-posterior or calcar-distant lag screw placement with a cumulative tip-apex distance measuring greater than 35 mm",
          th: "การวางตำแหน่งสกรูค่อนไปทางด้านบนหลังหรือห่างแคลคาร์ โดยมีค่ารวมระยะ Tip-Apex Distance มากกว่า 35 มิลลิเมตร",
        },
        isCorrect: false,
      },
    ],
    explanation: {
      en: "The Tip-Apex Distance (TAD), described by Baumgaertner et al. (JBJS 1995), is the single most reliable radiographic predictor of lag screw cut-out in peritrochanteric hip fractures. It is defined as the sum of the distance (in millimeters) from the tip of the lag screw to the apex of the femoral head on the anteroposterior (AP) view and lateral view, corrected for radiographic magnification (TAD = X_AP + X_Lat). A TAD of less than 25 mm correlates with a cut-out rate approaching 0%, whereas a TAD greater than 25 mm (and especially > 35 mm) shows an exponential increase in cut-out rates (up to 20-30%). In addition to TAD, spatial quadrant position is critical: on the AP view, center-center or inferior-center placement engages the dense, strong trabecular bone of the inferior calcar femorale, providing superior resistance against varus collapse. Conversely, superior screw placement places the implant into weak, osteoporotic cancellous bone with high tensile shear stress, significantly increasing cut-out risk regardless of nail type. Anterior screw placement on the lateral view similarly increases cut-out rates.",
      th: "Tip-Apex Distance (TAD) ซึ่งอธิบายโดย Baumgaertner และคณะ (JBJS 1995) เป็นตัวชี้วัดทางรังสีวิทยาที่เชื่อถือได้มากที่สุดในการทำนายความเสี่ยงต่อภาวะสกรูทะลุหลุด (Cut-out) ในกระดูกสะโพกหักส่วน Intertrochanteric โดยคำนวณจากผลรวมของระยะทาง (มิลลิเมตร) จากปลายของ Lag screw ไปยังยอดโค้ง (Apex) ของหัวกระดูกต้นขาในภาพถ่ายรังสีท่า AP และท่า Lateral ปรับแก้ตามอัตราส่วนการขยายของภาพ (TAD = X_AP + X_Lat) ค่า TAD ที่น้อยกว่า 25 มม. สัมพันธ์กับอัตราการเกิด Cut-out ต่ำมากใกล้เคียง 0% ในขณะที่ค่า TAD ที่มากกว่า 25 มม. (โดยเฉพาะ > 35 มม.) จะมีอัตรา Cut-out พุ่งสูงขึ้นอย่างก้าวกระโดด (สูงถึง 20-30%) นอกจากนี้ ตำแหน่ง Quadrant ของสกรูก็มีความสำคัญยิ่ง โดยในท่า AP สกรูควรอยู่ในตำแหน่งตรงกลาง (Center-center) หรือค่อนไปทางด้านล่าง (Inferior-center) เพื่อให้เกาะกับแนวกระดูก Calcar femorale ที่มีความหนาแน่นแข็งแรง ช่วยต้านทานแรงยุบตัวในแนว Varus ส่วนการวางสกรูในตำแหน่งด้านบน (Superior) หรือด้านหน้า (Anterior) จะทำให้สกรูอยู่ในเนื้อกระดูกพรุนที่รับแรงดึงเฉือนสูง นำไปสู่ความล้มเหลวของการยึดตรึงกระดูก",
    },
    pearls: {
      en: "To prevent cephalomedullary lag screw cut-out in intertrochanteric fractures, maintain a Tip-Apex Distance (TAD) < 25 mm and position the screw center-center or inferior-center to engage the dense bone of the calcar femorale.",
      th: "เพื่อป้องกันภาวะสกรูหลุดทะลุ (Cut-out) ในกระดูก Intertrochanteric ต้องรักษาระยะ Tip-Apex Distance (TAD) ให้น้อยกว่า 25 มม. และวางตำแหน่งสกรูตรงกลางหรือชิดด้านล่างเพื่อเกาะกับกระดูกส่วน Calcar ที่แข็งแรง",
    },
    boneId: "femur",
    regionId: "intertrochanteric",
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
    regionId: "femoral-neck",
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
    regionId: "femoral-neck",
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
    regionId: "femoral-neck",
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
    regionId: "femoral-neck",
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
    regionId: "upper-cervical",
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
    regionId: "upper-cervical",
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
    regionId: "upper-cervical",
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
    regionId: "upper-cervical",
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
    regionId: "fifth-metatarsal-base",
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
    regionId: "fifth-metatarsal-base",
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
    regionId: "fifth-metatarsal-base",
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
    regionId: "radial-head",
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
    regionId: "ac-joint",
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
    regionId: "first-metacarpal-base",
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
    regionId: "upper-cervical",
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
    boneId: "scapula",
    boneName: { en: "Shoulder", th: "ข้อไหล่" },
    regionId: "glenoid",
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
    regionId: "ac-joint",
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
    regionId: "ac-joint",
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
