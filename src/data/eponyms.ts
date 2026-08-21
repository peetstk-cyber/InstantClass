export interface EponymEntry {
  id: string;
  name: string;
  thName: string;
  boneId: string;
  regionId: string;
  category: "upper" | "lower" | "spine" | "skull" | "pedi";
  keywords: string[];
  description: {
    en: string;
    th: string;
  };
  clinicalTip?: {
    en: string;
    th: string;
  };
}

export const FRACTURE_EPONYMS: EponymEntry[] = [
  {
    id: "boxer",
    name: "Boxer's Fracture",
    thName: "กระดูกคอฝ่ามือหัก (5th Metacarpal Neck Fracture)",
    boneId: "hand",
    regionId: "other-metacarpals",
    category: "upper",
    keywords: ["boxer", "boxers", "boxer's", "metacarpal neck", "5th metacarpal", "punch fracture", "หมัด", "ต่อย", "นิ้วก้อยหัก"],
    description: {
      en: "Fracture of the 5th (and sometimes 4th) metacarpal neck resulting from direct impact with a clenched fist.",
      th: "รอยหักบริเวณคอกระดูกฝ่ามือนิ้วที่ 5 (หรือ 4) ที่พบบ่อยจากการชกหรือกระแทกด้วยหมัด"
    },
    clinicalTip: {
      en: "Acceptable apex-dorsal angulation: up to 40-50° in 5th MC (compensatory CMC mobility), but ZERO rotational deformity allowed.",
      th: "ยอมรับมุมงอได้สูงสุดถึง 40-50° สำหรับ MC ที่ 5 แต่ต้องไม่มี Malrotation (นิ้วซ้อนกันตอนกำหมัด) เด็ดขาด"
    }
  },
  {
    id: "bennett",
    name: "Bennett Fracture",
    thName: "กระดูกโคนนิ้วโป้งหักข้อหลุด (Bennett Fracture-Dislocation)",
    boneId: "hand",
    regionId: "first-metacarpal-base",
    category: "upper",
    keywords: ["bennett", "bennet", "bennett's", "1st metacarpal base", "thumb base", "apl tendon", "นิ้วโป้ง"],
    description: {
      en: "Intra-articular 2-part fracture-subluxation of the base of the 1st metacarpal pulled proximally by the Abductor Pollicis Longus (APL) tendon.",
      th: "รอยหักเข้าผิวข้อโคนกระดูกนิ้วโป้งแบบ 2 ชิ้น โดยชิ้นใหญ่ถูกดึงรั้งหลุดขึ้นไปด้านบนด้วยแรงดึงของเส้นเอ็น APL"
    },
    clinicalTip: {
      en: "Unstable injury: Requires anatomical closed reduction + percutaneous pinning (CRPP) or open fixation (ORIF).",
      th: "จัดเป็นรอยหักไม่มั่นคง มักต้องดึงเข้าที่แล้วตรึงด้วยเข็มลวด (CRPP) หรือผ่าตัดยึดตรึง (ORIF)"
    }
  },
  {
    id: "rolando",
    name: "Rolando Fracture",
    thName: "กระดูกโคนนิ้วโป้งหักเข้าข้อแบบแตกละเอียด (Rolando Fracture)",
    boneId: "hand",
    regionId: "first-metacarpal-base",
    category: "upper",
    keywords: ["rolando", "rolando's", "comminuted 1st metacarpal", "y fracture", "t fracture", "แตกละเอียดนิ้วโป้ง"],
    description: {
      en: "Comminuted T- or Y-shaped intra-articular fracture at the base of the 1st metacarpal.",
      th: "รอยหักเข้าผิวข้อโคนกระดูกนิ้วโป้งแบบแตกเป็นรูปตัว T หรือ Y ที่มีความละเอียดสูง"
    },
    clinicalTip: {
      en: "High risk of post-traumatic CMC arthritis; challenging fixation, often requires mini-plates or external fixation.",
      th: "เสี่ยงต่อข้อเสื่อมตามมาสูง มักต้องผ่าตัดใส่แผ่นดามกระดูกขนาดเล็กหรือโครงตรึงภายนอก"
    }
  },
  {
    id: "nightstick",
    name: "Nightstick Fracture",
    thName: "กระดูกแกนอัลนาหักเดี่ยว (Isolated Ulnar Shaft Fracture)",
    boneId: "forearm",
    regionId: "shaft",
    category: "upper",
    keywords: ["nightstick", "night stick", "night-stick", "isolated ulna", "ulnar shaft", "กระบอง", "โดนตีแขน", "ไม้กระบอง"],
    description: {
      en: "Isolated fracture of the ulnar shaft caused by a direct blunt blow while raising the forearm in self-defense.",
      th: "รอยหักเดี่ยวของแกนกระดูก Ulna ที่เกิดจากแรงฟาดโดยตรงขณะยกแขนขึ้นป้องกันตัว"
    },
    clinicalTip: {
      en: "Rule out Monteggia (check radial head & elbow). Isolated nondisplaced fractures (<50% displacement, <10° angulation) can be treated with cast/brace.",
      th: "ต้องตรวจข้อศอกเพื่อแยกภาวะ Monteggia เสมอ; หากหักเคลื่อนไม่เกิน 50% และมุมเอียง <10° สามารถใส่เฝือกได้"
    }
  },
  {
    id: "monteggia",
    name: "Monteggia Fracture-Dislocation",
    thName: "กระดูกอัลนาส่วนต้นหักร่วมกับหัวเรเดียสหลุด (Monteggia Injury)",
    boneId: "forearm",
    regionId: "shaft",
    category: "upper",
    keywords: ["monteggia", "bado", "radial head dislocation", "proximal ulna", "มอนเตกเจีย", "ข้อศอกหลุด"],
    description: {
      en: "Fracture of the proximal third of the ulnar shaft with anterior, posterior, or lateral dislocation of the radial head (Bado classification).",
      th: "กระดูก Ulna 1/3 ส่วนต้นหัก ร่วมกับหัวกระดูก Radial Head หลุดออกจากข้อศอก (จำแนกตาม Bado Type I-IV)"
    },
    clinicalTip: {
      en: "Remember MU-GR rule (Monteggia = Ulna fracture, Galeazzi = Radius fracture). Requires rigid anatomical ORIF of ulna to maintain radial head reduction.",
      th: "จำสูตร MU-GR (Monteggia = Ulna หัก + Radial head หลุด); ต้องผ่าตัดดามเหล็ก Ulna ให้ตรงเพื่อล็อกหัวเรเดียสให้อยู่ในเบ้า"
    }
  },
  {
    id: "galeazzi",
    name: "Galeazzi Fracture-Dislocation (Reverse Monteggia / Piedmont)",
    thName: "กระดูกเรเดียสส่วนปลายหักร่วมกับข้อ DRUJ ข้อมือหลุด (Galeazzi Injury)",
    boneId: "forearm",
    regionId: "shaft",
    category: "upper",
    keywords: ["galeazzi", "piedmont", "reverse monteggia", "druj dislocation", "distal radius shaft", "กาเลอัสซี", "ข้อมือหลุด"],
    description: {
      en: "Fracture of the distal third of the radial shaft with disruption and dislocation of the distal radioulnar joint (DRUJ).",
      th: "กระดูก Radial Shaft 1/3 ส่วนปลายหัก ร่วมกับการฉีกขาดและเคลื่อนหลุดของข้อปลายแขนส่วนล่าง (DRUJ)"
    },
    clinicalTip: {
      en: "Requires anatomical plate osteosynthesis of radius and intraoperative assessment of DRUJ stability.",
      th: "ในผู้ใหญ่ต้องผ่าตัดใส่แผ่นเหล็กดามกระดูก Radius และตรวจเช็กความมั่นคงของข้อ DRUJ เสมอ"
    }
  },
  {
    id: "colles",
    name: "Colles Fracture",
    thName: "กระดูกข้อมือหักโก่งไปด้านหลัง (Colles Fracture / Dinner-Fork Deformity)",
    boneId: "forearm",
    regionId: "distal",
    category: "upper",
    keywords: ["colles", "colle's", "dinner fork", "dorsal displacement", "dorsal tilt", "foosh", "คอลเลส", "ส้อมคว่ำ", "ข้อมือหัก"],
    description: {
      en: "Extra-articular distal radius fracture within 2-3 cm of the articular surface with dorsal displacement and dorsal tilt (Dinner-fork deformity).",
      th: "กระดูกปลายแขน Radius ส่วนปลายหักนอกข้อ โดยชิ้นกระดูกเคลื่อนและเอียงไปทางด้านหลังมือ (ลักษณะคล้ายส้อมคว่ำ)"
    },
    clinicalTip: {
      en: "Acceptable alignment: Dorsal tilt < 10°, Radial inclination > 15°, Radial height shortening < 3 mm, Articular step-off < 2 mm.",
      th: "เกณฑ์ที่ยอมรับได้: Dorsal tilt < 10°, Radial height ยุบไม่เกิน 3 มม., ผิวข้อไม่สะดุดเกิน 2 มม."
    }
  },
  {
    id: "smith",
    name: "Smith Fracture (Reverse Colles)",
    thName: "กระดูกข้อมือหักโก่งไปด้านหน้าฝ่ามือ (Smith Fracture / Garden-Spade Deformity)",
    boneId: "forearm",
    regionId: "distal",
    category: "upper",
    keywords: ["smith", "smith's", "reverse colles", "garden spade", "volar displacement", "volar tilt", "สมิธ", "เสียมขุดดิน"],
    description: {
      en: "Distal radius fracture with volar (palmar) displacement and volar angulation of the distal fragment (Garden-spade deformity).",
      th: "กระดูกปลายแขน Radius ส่วนปลายหักโดยชิ้นกระดูกเคลื่อนและทำมุมเอียงไปทางด้านหน้าฝ่ามือ (ลักษณะคล้ายพลั่วขุดดิน)"
    },
    clinicalTip: {
      en: "Inherently unstable with high risk of recurrent displacement in cast; frequently requires volar locking plate (VLP) fixation.",
      th: "เป็นรอยหักที่ไม่มั่นคง มีโอกาสเคลื่อนซ้ำสูง มักพิจารณาผ่าตัดใส่แผ่นดาม Volar Locking Plate"
    }
  },
  {
    id: "barton",
    name: "Barton Fracture (Volar & Dorsal Barton)",
    thName: "กระดูกขอบผิวข้อข้อมือหักและข้อมือเคลื่อนหลุด (Barton Fracture-Dislocation)",
    boneId: "forearm",
    regionId: "distal",
    category: "upper",
    keywords: ["barton", "barton's", "volar barton", "dorsal barton", "radiocarpal dislocation", "ขอบข้อข้อมือหัก", "บาร์ตัน"],
    description: {
      en: "Fracture-dislocation of the radiocarpal joint involving the intra-articular volar (most common) or dorsal margin of the distal radius.",
      th: "รอยหักเข้าผิวข้อข้อมือโดยแตกที่ขอบด้านหน้า (Volar) หรือด้านหลัง (Dorsal) ร่วมกับกระดูก Carpal เคลื่อนหลุดตามชิ้นหักไป"
    },
    clinicalTip: {
      en: "Extremely unstable intra-articular subluxation. Almost always requires buttress plate osteosynthesis.",
      th: "เป็นรอยหักเข้าข้อที่เลื่อนหลุดง่ายมาก ต้องผ่าตัดใส่แผ่นเหล็กดามแบบ Buttress Plate"
    }
  },
  {
    id: "chauffeur",
    name: "Chauffeur Fracture (Hutchinson / Radial Styloid)",
    thName: "กระดูกยอดเรเดียสหัก (Radial Styloid Avulsion / Chauffeur Fracture)",
    boneId: "forearm",
    regionId: "distal",
    category: "upper",
    keywords: ["chauffeur", "hutchinson", "radial styloid", "backfire", "คนขับรถ", "ยอดข้อมือ"],
    description: {
      en: "Intra-articular avulsion fracture of the radial styloid process from direct scaphoid impaction or radiocarpal ligament avulsion.",
      th: "รอยหักเข้าข้อของยอดกระดูก Radial Styloid จากแรงกระแทกของกระดูก Scaphoid หรือแรงดึงของเอ็นข้อมือ"
    },
    clinicalTip: {
      en: "Always check for scapholunate (SL) dissociation / Terry Thomas sign due to associated ligamentous tear.",
      th: "ต้องตรวจเช็ก Scapholunate Dissociation (Terry Thomas sign ช่องว่างกระดูกข้อมือกว้าง) เสมอ"
    }
  },
  {
    id: "jones",
    name: "Jones Fracture",
    thName: "กระดูกโคนนิ้วก้อยเท้าหักบริเวณรอยต่อ (5th Metatarsal Base Zone 2)",
    boneId: "foot",
    regionId: "fifth-metatarsal-base",
    category: "lower",
    keywords: ["jones", "jones fracture", "5th metatarsal zone 2", "watershed", "โคนนิ้วก้อยเท้า", "โจนส์"],
    description: {
      en: "Transverse fracture at the metaphyseal-diaphyseal junction (Zone 2) of the 5th metatarsal base within the vascular watershed area.",
      th: "รอยหักตามขวางบริเวณรอยต่อ Metaphyseal-diaphyseal (Zone 2) ของกระดูกโคนนิ้วก้อยเท้า ซึ่งเป็นเขตเลือดมาเลี้ยงน้อย"
    },
    clinicalTip: {
      en: "High risk of delayed union and nonunion. Athletes often require percutaneous intramedullary screw fixation.",
      th: "มีความเสี่ยงกระดูกไม่ติด (Nonunion) สูง ในนักกีฬาหรือผู้ที่ต้องใช้งานเร็วมักพิจารณาผ่าตัดขันสกรูดามในโพรงกระดูก"
    }
  },
  {
    id: "pseudojones",
    name: "Pseudo-Jones Fracture (Dancer's / Tennis Fracture)",
    thName: "ปุ่มกระดูกโคนนิ้วก้อยเท้าฉีกหลุด (5th Metatarsal Tuberosity Zone 1 Avulsion)",
    boneId: "foot",
    regionId: "fifth-metatarsal-base",
    category: "lower",
    keywords: ["pseudo-jones", "pseudojones", "dancer", "dancer's", "zone 1 avulsion", "peroneus brevis", "แดนเซอร์"],
    description: {
      en: "Avulsion fracture of the tuberosity (Zone 1) of the 5th metatarsal base caused by contraction of the lateral cord of the plantar aponeurosis or peroneus brevis.",
      th: "รอยหักฉีกหลุดที่ปุ่ม Tuberosity (Zone 1) ของโคนนิ้วก้อยเท้า เกิดจากแรงดึงรั้งของพังผืดฝ่าเท้าหรือเอ็น Peroneus brevis"
    },
    clinicalTip: {
      en: "Excellent healing potential; treated conservatively with hard-soled shoe / walking boot for comfort as tolerated.",
      th: "กระดูกติดง่ายมาก รักษาด้วยการใส่รองเท้าพื้นแข็งหรือเฝือกสั้นหัดเดินลงน้ำหนักตามทนได้"
    }
  },
  {
    id: "lisfranc",
    name: "Lisfranc Fracture-Dislocation",
    thName: "ข้อกลางเท้าหลุดเคลื่อน (Lisfranc Tarsometatarsal Disruption)",
    boneId: "foot",
    regionId: "lisfranc",
    category: "lower",
    keywords: ["lisfranc", "tarsometatarsal", "midfoot disruption", "fleck sign", "ลิสฟรองค์", "ข้อกลางเท้า"],
    description: {
      en: "Traumatic disruption of the tarsometatarsal (TMT) articulation between the medial cuneiform and 2nd metatarsal base.",
      th: "การบาดเจ็บรุนแรงของข้อต่อกลางเท้า (Tarsometatarsal Joint) โดยเฉพาะเอ็น Lisfranc ระหว่าง Medial cuneiform กับโคนนิ้วชี้เท้า"
    },
    clinicalTip: {
      en: "Look for the pathognomonic Fleck sign (avulsion off base of 2nd metatarsal) and plantar ecchymosis. Subtle injuries require weight-bearing X-rays or CT.",
      th: "มองหา Fleck sign ที่โคนกระดูก 2nd MT และรอยเขียวช้ำที่ฝ่าเท้า; หากสงสัยให้ถ่ายฟิล์มเอกซเรย์ท่ายืนลงน้ำหนัก"
    }
  },
  {
    id: "lovers",
    name: "Lover's / Don Juan Fracture",
    thName: "กระดูกส้นเท้าแตกละเอียดจากการตกจากที่สูง (Calcaneus Fracture)",
    boneId: "foot",
    regionId: "calcaneus",
    category: "lower",
    keywords: ["lover", "lovers", "don juan", "calcaneus", "bohler angle", "fall from height", "ส้นเท้าแตก", "ตกตึก"],
    description: {
      en: "Severe intra-articular calcaneal fracture typically sustained from a high-energy vertical fall landing onto the heels.",
      th: "กระดูกส้นเท้าหักเข้าข้อรุนแรงจากการกระโดดหรือตกจากที่สูงลงมากระแทกส้นเท้าโดยตรง"
    },
    clinicalTip: {
      en: "Always evaluate for concurrent lumbar spine burst fractures (10-15% association) and bilateral calcaneus injuries.",
      th: "ตรวจหากระดูกสันหลังส่วนเอวหัก (พบร่วมกันถึง 10-15%) และตรวจเช็กส้นเท้าอีกข้างเสมอ"
    }
  },
  {
    id: "aviator",
    name: "Aviator's Astragalus Fracture",
    thName: "กระดูกคอทาลัสหัก (Talar Neck Fracture / Hawkins)",
    boneId: "foot",
    regionId: "talus",
    category: "lower",
    keywords: ["aviator", "astragalus", "talar neck", "hawkins sign", "avascular necrosis", "กระดูกทาลัส"],
    description: {
      en: "Fracture of the talar neck caused by hyperdorsiflexion of the foot against the floor or aircraft rudder pedal.",
      th: "กระดูกคอทาลัสหักจากแรงกระดกข้อเท้าขึ้นสุด (Hyperdorsiflexion) กระแทกกับขอบล่างของทิเบีย (จำแนกตาม Hawkins I-IV)"
    },
    clinicalTip: {
      en: "High risk of avascular necrosis (AVN) of the talar body (Hawkins III/IV ~90-100%). Look for Hawkins sign at 6-8 weeks for revascularization.",
      th: "เสี่ยงต่อภาวะหัวกระดูกตายจากการขาดเลือด (AVN) สูงมาก; ตรวจหา Hawkins sign (subchondral osteopenia) ที่ 6-8 สัปดาห์"
    }
  },
  {
    id: "maisonneuve",
    name: "Maisonneuve Fracture",
    thName: "กระดูกน่องท่อนบนหักร่วมกับข้อเท้าฉีกขาด (Maisonneuve Ankle Injury)",
    boneId: "tibia",
    regionId: "distal",
    category: "lower",
    keywords: ["maisonneuve", "high fibula", "syndesmosis disruption", "deltoid ligament tear", "ไมซอนเนิฟ", "น่องท่อนบนหัก"],
    description: {
      en: "High spiral fracture of the proximal fibula associated with disruption of the syndesmosis, interosseous membrane, and medial malleolus fracture or deltoid ligament rupture.",
      th: "กระดูกน่อง Fibula ส่วนต้นหัก ร่วมกับการฉีกขาดของเส้นเอ็น Syndesmosis และมีรอยหักที่ตาตุ่มในหรือเอ็น Deltoid ฉีก"
    },
    clinicalTip: {
      en: "Always palpate the proximal fibular neck in any ankle injury with medial clear space widening on X-ray.",
      th: "ต้องคลำตรวจหัวกระดูกน่องด้านบนทุกครั้งเมื่อพบคนไข้ข้อเท้าพลิกที่มี Medial clear space กว้างผิดปกติ"
    }
  },
  {
    id: "pilon",
    name: "Pilon / Plafond Fracture",
    thName: "กระดูกหน้าแข้งส่วนล่างแตกละเอียดเข้าข้อเท้า (Pilon Fracture / Rüedi-Allgöwer)",
    boneId: "tibia",
    regionId: "distal",
    category: "lower",
    keywords: ["pilon", "plafond", "ruedi-allgower", "articular impaction", "ไพลอน", "หน้าแข้งแตกเข้าข้อเท้า"],
    description: {
      en: "High-energy intra-articular fracture of the distal tibial plafond with comminution, talar impaction, and severe soft tissue envelope injury.",
      th: "รอยหักเข้าผิวข้อรับน้ำหนักปลายล่างของกระดูกหน้าแข้ง (Tibial plafond) จากแรงกระแทกในแนวดิ่ง มีเนื้อเยื่อบวมช้ำรุนแรง"
    },
    clinicalTip: {
      en: "Staged treatment: Initial temporary spanning external fixator until soft tissue swelling (wrinkle sign) subsides before definitive ORIF.",
      th: "ต้องรักษาแบบแบ่งระยะ: ใส่เครื่องดึงยึดตรึงภายนอก (Ex-Fix) ชั่วคราวรอให้เนื้อเยื่อยุบบวม (เห็น Wrinkle sign) จึงค่อยผ่าตัดเปิดดามเหล็ก"
    }
  },
  {
    id: "segond",
    name: "Segond Fracture",
    thName: "ปุ่มกระดูกข้อเข่าด้านนอกฉีกหลุด (Segond Fracture / Pathognomonic for ACL Tear)",
    boneId: "tibia",
    regionId: "proximal",
    category: "lower",
    keywords: ["segond", "lateral tibial plateau avulsion", "all tear", "acl tear", "เซกอนด์", "เอ็นไขว้หน้าขาด"],
    description: {
      en: "Avulsion fracture of the lateral tibial plateau at the insertion of the Anterolateral Ligament (ALL) / IT band.",
      th: "รอยหักฉีกหลุดของขอบกระดูกหน้าแข้งด้านนอกบริเวณจุดเกาะของเอ็น Anterolateral Ligament (ALL)"
    },
    clinicalTip: {
      en: "Pathognomonic: Represents 75-100% association with Anterior Cruciate Ligament (ACL) tear and lateral meniscal tear.",
      th: "เป็นสัญญาณบ่งชี้ชัดเจน (Pathognomonic) ว่ามีการฉีกขาดของเอ็นไขว้หน้าข้อเข่า (ACL) ร่วมด้วยเกือบ 100%"
    }
  },
  {
    id: "hangman",
    name: "Hangman's Fracture",
    thName: "กระดูกคอชิ้นที่ 2 ส่วนก้านหักเลื่อน (Traumatic Spondylolisthesis of C2)",
    boneId: "c-spine",
    regionId: "upper-cervical",
    category: "spine",
    keywords: ["hangman", "hangmans", "hangman's", "c2 axis pedicle", "levine-edwards", "กระดูกคอหัก", "แขวนคอ"],
    description: {
      en: "Bilateral fracture of the pars interarticularis / pedicles of the axis (C2) caused by hyperextension-distraction/axial loading.",
      th: "รอยหักที่ก้านกระดูก Pars/Pedicle ของกระดูกคอ C2 ทั้งสองข้าง เกิดจากแรงแอ่นคอไปด้านหลังอย่างรุนแรง"
    },
    clinicalTip: {
      en: "Classified by Levine & Edwards (Type I: stable rigid collar; Type II/IIA/III: unstable, may require halo or surgical fixation).",
      th: "จำแนกตาม Levine & Edwards (Type I มักใส่ปลอกคอแข็งได้; Type II/IIA/III มีการเคลื่อนและเอียงสูงต้องผ่าตัดหรือใส่ Halo)"
    }
  },
  {
    id: "jefferson",
    name: "Jefferson Fracture",
    thName: "กระดูกคอชิ้นที่ 1 วงแหวนแตกกระจาย (C1 Atlas Burst Fracture)",
    boneId: "c-spine",
    regionId: "upper-cervical",
    category: "spine",
    keywords: ["jefferson", "jeffersons", "c1 burst", "atlas burst", "open mouth view", "เจฟเฟอร์สัน", "กระดูกคอ c1"],
    description: {
      en: "Burst fracture of the anterior and posterior arches of the atlas (C1) ring resulting from an axial loading impact to the vertex of the head.",
      th: "รอยหักแตกกระจายของวงแหวนกระดูกคอชิ้นแรก (C1 Atlas) ทั้งส่วนหน้าและหลัง เกิดจากแรงกดลงบนกระหม่อมศีรษะในแนวดิ่ง"
    },
    clinicalTip: {
      en: "Check Spence Rule on Open-Mouth odontoid view: Overhang of C1 lateral masses on C2 > 7 mm indicates Transverse Atlantal Ligament (TAL) rupture (unstable).",
      th: "ดู Spence Rule จากฟิล์ม Open-Mouth: หากระยะล้นออกด้านข้างของ C1 รวมกันเกิน 7 มม. บ่งชี้ว่าเอ็น TAL ขาด (ไม่มั่นคง)"
    }
  },
  {
    id: "chance",
    name: "Chance Fracture (Seatbelt Fracture)",
    thName: "กระดูกสันหลังหักผ่าครึ่งจากแรงดึงกระชากเข็มขัดนิรภัย (Chance Fracture)",
    boneId: "tl-spine",
    regionId: "thoracolumbar",
    category: "spine",
    keywords: ["chance", "seatbelt fracture", "lap belt", "flexion distraction", "tl junction", "เข็มขัดนิรภัย", "กระดูกสันหลังหัก"],
    description: {
      en: "Horizontal flexion-distraction fracture pattern splitting through the vertebral body, pedicles, and spinous process from a motor vehicle collision with lap-only seatbelt.",
      th: "รอยหักผ่าตามแนวนอนผ่านตัวกระดูกสันหลังและปีกหลัง จากแรงงอกระชากข้ามสายเข็มขัดนิรภัยแบบคาดตักในอุบัติเหตุรถยนต์"
    },
    clinicalTip: {
      en: "Frequently associated with intra-abdominal injuries (bowel perforation, solid organ rupture in ~50%). Always order abdominal CT.",
      th: "พบร่วมกับการบาดเจ็บของอวัยวะในช่องท้อง (ลำไส้ทะลุ, ตับม้ามฉีกขาด) ถึง 50% ต้องทำ CT ช่องท้องควบคู่เสมอ"
    }
  },
  {
    id: "pipkin",
    name: "Pipkin Fracture",
    thName: "หัวกระดูกต้นขาหักร่วมกับข้อสะโพกหลุด (Femoral Head Fracture-Dislocation)",
    boneId: "femur",
    regionId: "femoral-neck",
    category: "lower",
    keywords: ["pipkin", "femoral head fracture", "hip dislocation", "fovea capitis", "พิพคิน", "หัวสะโพกหัก"],
    description: {
      en: "Fracture of the femoral head occurring in conjunction with traumatic posterior dislocation of the hip joint.",
      th: "รอยหักที่ส่วนหัวกลมของกระดูกต้นขา (Femoral Head) ร่วมกับข้อสะโพกเคลื่อนหลุดไปทางด้านหลัง"
    },
    clinicalTip: {
      en: "Emergency closed reduction of the hip within 6 hours to minimize femoral head avascular necrosis (AVN).",
      th: "ต้องดึงข้อสะโพกให้กลับเข้าที่โดยด่วนภายใน 6 ชั่วโมงเพื่อลดความเสี่ยงหัวกระดูกสะโพกขาดเลือดตาย (AVN)"
    }
  },
  {
    id: "holstein",
    name: "Holstein-Lewis Fracture",
    thName: "กระดูกต้นแขนส่วนปลายหักแบบเกลียวเสี่ยงเส้นประสาทเรเดียสบาดเจ็บ (Holstein-Lewis Fracture)",
    boneId: "humerus",
    regionId: "shaft",
    category: "upper",
    keywords: ["holstein", "holstein-lewis", "holstein lewis", "distal humerus shaft", "radial nerve palsy", "wrist drop", "ข้อมือตก"],
    description: {
      en: "Spiral fracture of the distal third of the humeral shaft with high propensity for entrapment or laceration of the radial nerve.",
      th: "รอยหักแบบเกลียวที่กระดูกต้นแขน 1/3 ส่วนปลาย ซึ่งมีโอกาสสูงที่เส้นประสาท Radial Nerve จะถูกหนีบหรือดึงรั้งทำให้ข้อมือตก"
    },
    clinicalTip: {
      en: "Check wrist/thumb extension and sensation over the 1st dorsal web space before and after any reduction maneuver.",
      th: "ตรวจกำลังการกระดกข้อมือ/นิ้วโป้ง และการรับความรู้สึกที่ง่ามนิ้วโป้งหลังมือก่อนและหลังจัดกระดูกทุกครั้ง"
    }
  },
  {
    id: "salter-harris",
    name: "Salter-Harris Physeal Injury",
    thName: "การบาดเจ็บของแผ่นกระดูกเจริญในเด็ก (Salter-Harris Classification)",
    boneId: "pediatric-physis",
    regionId: "physis",
    category: "pedi",
    keywords: ["salter", "salter-harris", "salter harris", "growth plate", "physis", "s-m-e-a-r", "กระดูกเจริญเด็ก", "หักในเด็ก"],
    description: {
      en: "Classification of pediatric growth plate fractures from Type I to V based on involvement of physis, metaphysis, and epiphysis.",
      th: "ระบบจำแนกรอยหักบริเวณแผ่นกระดูกเจริญ (Physis) ในเด็ก ตั้งแต่ระดับ Type I ถึง V"
    },
    clinicalTip: {
      en: "Mnemonic SALTR: I=Straight across, II=Above (Metaphysis), III=Lower (Epiphysis), IV=Through all three, V=cRushed physis.",
      th: "จำสูตร SALTR: I = หักตรงแผ่น, II = เลยไป Metaphysis (พบบ่อยสุด), III = ลง Epiphysis, IV = ทะลุทั้ง 3 ส่วน, V = ยุบอัดบดขยี้"
    }
  }
];

export function searchEponyms(query: string): EponymEntry[] {
  const clean = query.trim().toLowerCase();
  if (!clean) return [];

  return FRACTURE_EPONYMS.filter(item => {
    return (
      item.name.toLowerCase().includes(clean) ||
      item.thName.toLowerCase().includes(clean) ||
      item.keywords.some(kw => kw.toLowerCase().includes(clean) || clean.includes(kw.toLowerCase())) ||
      item.description.en.toLowerCase().includes(clean) ||
      item.description.th.toLowerCase().includes(clean)
    );
  });
}
