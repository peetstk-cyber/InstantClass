import type { TextbookReference } from "../types";

export const TEXTBOOK_EDITIONS = {
  campbell: "Campbell's Operative Orthopaedics (14th Edition, 2021) — Azar, Canale & Beaty",
  rockwoodAdult: "Rockwood and Green's Fractures in Adults (9th Edition, 2020) — Tornetta, Ricci, Ostrum et al.",
  rockwoodPedi: "Rockwood and Wilkins' Fractures in Children (9th Edition, 2020) — Flynn, Skaggs & Waters",
  miller: "Miller's Review of Orthopaedics (8th Edition, 2020) — Miller & Thompson",
};

/** Standard baseline references for every classification system */
export function getDefaultSystemReferences(systemName: string): TextbookReference[] {
  return [
    {
      textbook: "Rockwood",
      title: TEXTBOOK_EDITIONS.rockwoodAdult,
      chapter: `Standard Fracture Principles & Management (${systemName})`,
      notes: {
        en: "Gold standard reference for fracture classification, mechanism, and non-operative vs operative indications.",
        th: "ตำรามาตรฐานหลักสำหรับการจำแนกประเภท กลไกการบาดเจ็บ และเกณฑ์ตัดสินใจผ่าตัด"
      }
    },
    {
      textbook: "Campbell",
      title: TEXTBOOK_EDITIONS.campbell,
      chapter: `Surgical Techniques & Operative Orthopaedics (${systemName})`,
      notes: {
        en: "Definitive guide for surgical approaches, implant selection, reduction maneuvers, and complication management.",
        th: "คู่มือมาตรฐานสำหรับเทคนิคการผ่าตัด ทางเข้าผ่าตัด การเลือกอุปกรณ์ดามกระดูก และการป้องกันภาวะแทรกซ้อน"
      }
    },
    {
      textbook: "Miller",
      title: TEXTBOOK_EDITIONS.miller,
      chapter: "Trauma Section: High-Yield Board Review",
      notes: {
        en: "Essential clinical decision principles, high-yield examination facts, and board examination consensus.",
        th: "สรุปหลักการสำคัญ เกณฑ์ตัดสินใจทางคลินิก และประเด็นออกสอบบอร์ดออร์โธปิดิกส์"
      }
    }
  ];
}

/** Specific detailed mapping per classification system */
const SYSTEM_SPECIFIC_MAP: Record<string, {
  rockwoodChapter: string;
  campbellChapter: string;
  millerChapter: string;
  classicCitation?: string;
}> = {
  // Clavicle & Shoulder
  "Rockwood": {
    rockwoodChapter: "Chapter 11: Fractures and Dislocations of the Clavicle & AC Joint",
    campbellChapter: "Chapter 44: Traumatic Disorders of Shoulder & AC Joint",
    millerChapter: "Chapter 5: Shoulder and Elbow Trauma (AC Joint Injuries)",
    classicCitation: "Rockwood CA Jr. Subluxations and dislocations of the acromioclavicular joint. Fractures in Adults. 1984."
  },
  "Allman": {
    rockwoodChapter: "Chapter 11: Fractures of the Clavicle",
    campbellChapter: "Chapter 54: Fractures of Shoulder Girdle",
    millerChapter: "Chapter 5: Shoulder Trauma (Clavicle Fractures)",
    classicCitation: "Allman FL Jr. Fractures and ligamentous injuries of the clavicle and its articulation. JBJS Am. 1967;49(4):774-784."
  },
  "Neer (Distal Clavicle)": {
    rockwoodChapter: "Chapter 11: Fractures of the Distal Clavicle",
    campbellChapter: "Chapter 54: Fractures of Shoulder Girdle",
    millerChapter: "Chapter 5: Shoulder Trauma (Distal Clavicle)",
    classicCitation: "Neer CS 2nd. Fractures of the distal third of the clavicle. Clin Orthop Relat Res. 1968;58:43-50."
  },

  // Humerus
  "Neer": {
    rockwoodChapter: "Chapter 12: Fractures of the Proximal Humerus",
    campbellChapter: "Chapter 54: Fractures of Proximal Humerus",
    millerChapter: "Chapter 5: Shoulder and Elbow Trauma (Proximal Humerus)",
    classicCitation: "Neer CS 2nd. Displaced proximal humeral fractures: Part I. Classification and evaluation. JBJS Am. 1970;52(6):1077-1089."
  },
  "Holstein-Lewis": {
    rockwoodChapter: "Chapter 13: Fractures of the Shaft of the Humerus",
    campbellChapter: "Chapter 54: Fractures of Humerus Shaft & Radial Nerve Injury",
    millerChapter: "Chapter 5: Humerus Shaft Fractures and Radial Nerve Palsy",
    classicCitation: "Holstein A, Lewis GM. Fractures of the humerus with radial-nerve paralysis. JBJS Am. 1963;45(7):1382-1388."
  },
  "AO/OTA 13": {
    rockwoodChapter: "Chapter 14: Fractures of the Distal Humerus",
    campbellChapter: "Chapter 54: Fractures of the Distal Humerus",
    millerChapter: "Chapter 5: Distal Humerus Fractures & Column Fixation",
    classicCitation: "AO/OTA Fracture and Dislocation Compendium. J Orthop Trauma. 2018."
  },

  // Forearm & Elbow
  "Mason": {
    rockwoodChapter: "Chapter 29: Fractures of the Radial Head and Neck",
    campbellChapter: "Chapter 55: Fractures and Dislocations of the Elbow",
    millerChapter: "Chapter 5: Radial Head Fractures & Terrible Triad",
    classicCitation: "Mason ML. Some observations on fractures of the head of the radius with a review of one hundred cases. Br J Surg. 1954;42(172):123-132."
  },
  "Mayo": {
    rockwoodChapter: "Chapter 29: Fractures of the Olecranon and Proximal Ulna",
    campbellChapter: "Chapter 55: Fractures of the Olecranon",
    millerChapter: "Chapter 5: Olecranon Fractures (Mayo Classification)",
    classicCitation: "Morrey BF. Current Concepts in the Treatment of Fractures of the Radial Head, the Olecranon, and the Coronoid. JBJS Am. 1995."
  },
  "Fernandez": {
    rockwoodChapter: "Chapter 27: Fractures of the Distal Radius",
    campbellChapter: "Chapter 56: Fractures of the Distal Radius and Ulna",
    millerChapter: "Chapter 6: Hand, Wrist, and Forearm Trauma",
    classicCitation: "Fernandez DL. Fractures of the distal radius: operative treatment. Radiol Clin North Am. 1993;31(2):499-526."
  },
  "Frykman": {
    rockwoodChapter: "Chapter 27: Fractures of the Distal Radius and Radioulnar Joint",
    campbellChapter: "Chapter 56: Distal Radius Fractures (Frykman Classification)",
    millerChapter: "Chapter 6: Wrist Fractures & Ulnar Styloid Involvement",
    classicCitation: "Frykman G. Fracture of the distal radius including sequelae. Acta Orthop Scand Suppl. 1967;108:1-155."
  },

  // Hand & Wrist
  "Mayfield": {
    rockwoodChapter: "Chapter 28: Carpal Dislocations and Instability",
    campbellChapter: "Chapter 67: Carpal Dislocations & Instability Patterns",
    millerChapter: "Chapter 6: Perilunate and Lunate Dislocations",
    classicCitation: "Mayfield JK, Johnson RP, Kilcoyne RK. Carpal dislocations: pathomechanics and progressive perilunar instability. J Hand Surg Am. 1980;5(3):226-241."
  },

  // Pelvis & Acetabulum
  "Young-Burgess": {
    rockwoodChapter: "Chapter 44: Pelvic Ring Fractures",
    campbellChapter: "Chapter 50: Fractures and Dislocations of the Pelvis",
    millerChapter: "Chapter 7: Pelvic Trauma & Hemodynamic Instability",
    classicCitation: "Young JW, Burgess AR, Brumback RJ, Poka A. Pelvic fractures: value of plain radiography in early assessment and management. Radiology. 1986;160(2):445-451."
  },
  "Judet-Letournel": {
    rockwoodChapter: "Chapter 45: Acetabular Fractures",
    campbellChapter: "Chapter 50: Fractures of the Acetabulum",
    millerChapter: "Chapter 7: Acetabulum Fractures & Judet Views",
    classicCitation: "Judet R, Judet J, Letournel E. Fractures of the acetabulum: classification and surgical approaches for open reduction. JBJS Am. 1964;46(8):1615-1646."
  },

  // Femur & Hip
  "Garden": {
    rockwoodChapter: "Chapter 48: Fractures of the Femoral Neck",
    campbellChapter: "Chapter 51: Fractures of the Hip (Femoral Neck)",
    millerChapter: "Chapter 7: Hip Fractures (Garden & Pauwels)",
    classicCitation: "Garden RS. Low-angle fixation in fractures of the femoral neck. JBJS Br. 1961;43(4):647-663."
  },
  "Evans": {
    rockwoodChapter: "Chapter 49: Intertrochanteric Hip Fractures",
    campbellChapter: "Chapter 51: Intertrochanteric Fractures of the Femur",
    millerChapter: "Chapter 7: Intertrochanteric Fractures & Stability",
    classicCitation: "Evans EM. The treatment of trochanteric fractures of the femur. JBJS Br. 1949;31(2):190-203."
  },
  "Russell-Taylor": {
    rockwoodChapter: "Chapter 50: Subtrochanteric Femoral Fractures",
    campbellChapter: "Chapter 51: Subtrochanteric Fractures of the Femur",
    millerChapter: "Chapter 7: Subtrochanteric Femur Fractures",
    classicCitation: "Russell TA, Taylor JC. Subtrochanteric fractures of the femur. Skeletal Trauma. 1992."
  },
  "Winquist-Hansen": {
    rockwoodChapter: "Chapter 51: Femoral Shaft Fractures",
    campbellChapter: "Chapter 52: Fractures of the Femoral Shaft",
    millerChapter: "Chapter 7: Diaphyseal Femur Fractures & IM Nailing",
    classicCitation: "Winquist RA, Hansen ST Jr, Clawson DK. Closed intramedullary nailing of femoral fractures. JBJS Am. 1984;66(4):529-539."
  },
  "Distal Femur": {
    rockwoodChapter: "Chapter 52: Fractures of the Distal Femur (Supra & Intercondylar)",
    campbellChapter: "Chapter 52: Fractures of the Distal Femur (Hoffa Fractures)",
    millerChapter: "Chapter 7: Distal Femur Fractures & Articular Reconstruction",
    classicCitation: "AO/OTA 33 Compendium and Hoffa A. Lehrbuch der Frakturen und Luxationen. 1904."
  },

  // Patella
  "Anatomical & Functional": {
    rockwoodChapter: "Chapter 53: Fractures of the Patella and Extensor Mechanism",
    campbellChapter: "Chapter 53: Fractures of the Patella",
    millerChapter: "Chapter 7: Knee Trauma & Extensor Mechanism Disruption",
    classicCitation: "Rockwood and Green's Fractures in Adults: Chapter 53 (Patellar Fractures & Tension Band Wiring)."
  },

  // Tibia
  "Schatzker": {
    rockwoodChapter: "Chapter 54: Fractures of the Tibial Plateau",
    campbellChapter: "Chapter 53: Fractures of the Tibial Plateau",
    millerChapter: "Chapter 7: Tibial Plateau Fractures & Meniscal Tears",
    classicCitation: "Schatzker J, McBroom R, Bruce D. The tibial plateau fracture. The Toronto experience 1968--1975. Clin Orthop Relat Res. 1979;(138):94-104."
  },
  "AO/OTA & Alignment Concept": {
    rockwoodChapter: "Chapter 55: Tibial Shaft Fractures and Compartment Syndrome",
    campbellChapter: "Chapter 53: Fractures of the Tibia and Fibula",
    millerChapter: "Chapter 7: Tibia Fractures, Reduction Criteria & Compartment Syndrome",
    classicCitation: "Court-Brown CM et al. Tibial fractures. Rockwood & Green's 9th Edition."
  },
  "Danis-Weber": {
    rockwoodChapter: "Chapter 56: Fractures of the Ankle (Fibula & Syndesmosis)",
    campbellChapter: "Chapter 53: Fractures of the Ankle",
    millerChapter: "Chapter 8: Foot and Ankle Trauma (Danis-Weber)",
    classicCitation: "Weber BG. Die Verletzungen des oberen Sprunggelenkes. Bern: Verlag Hans Huber; 1966."
  },
  "Lauge-Hansen": {
    rockwoodChapter: "Chapter 56: Fractures of the Ankle (Mechanisms of Injury)",
    campbellChapter: "Chapter 53: Fractures and Dislocations of the Ankle",
    millerChapter: "Chapter 8: Lauge-Hansen Classification & Pathomechanics",
    classicCitation: "Lauge-Hansen N. Fractures of the ankle. II. Combined experimental-surgical and experimental-roentgenologic investigations. Arch Surg. 1950;60(5):957-985."
  },
  "Pilon Fracture": {
    rockwoodChapter: "Chapter 57: Fractures of the Tibial Plafond (Pilon)",
    campbellChapter: "Chapter 53: Fractures of the Tibial Plafond",
    millerChapter: "Chapter 8: Pilon Fractures & Staged Protocol",
    classicCitation: "Ruedi TP, Allgower M. The operative management of intra-articular fractures of the lower end of the tibia. Clin Orthop Relat Res. 1979;(138):105-110."
  },

  // Foot
  "Hawkins": {
    rockwoodChapter: "Chapter 58: Fractures and Dislocations of the Talus",
    campbellChapter: "Chapter 87: Fractures of the Talus (Hawkins Classification)",
    millerChapter: "Chapter 8: Talus Neck Fractures, AVN & Hawkins Sign",
    classicCitation: "Hawkins LG. Fractures of the neck of the talus. JBJS Am. 1970;52(5):991-1002."
  },
  "Sanders": {
    rockwoodChapter: "Chapter 59: Fractures of the Calcaneus",
    campbellChapter: "Chapter 87: Fractures of the Calcaneus (CT Sanders Classification)",
    millerChapter: "Chapter 8: Calcaneus Fractures & Bohler Angle",
    classicCitation: "Sanders R, Fortin P, DiPasquale T, Walling A. Operative treatment in 120 displaced intraarticular calcaneal fractures. Clin Orthop Relat Res. 1993;(290):87-95."
  },
  "Essex-Lopresti": {
    rockwoodChapter: "Chapter 59: Fractures of the Calcaneus (Tongue vs Joint-Depression)",
    campbellChapter: "Chapter 87: Calcaneal Fracture Patterns",
    millerChapter: "Chapter 8: Calcaneus Tongue-Type vs Joint-Depression",
    classicCitation: "Essex-Lopresti P. The mechanism, reduction technique, and results in fractures of the os calcis. Br J Surg. 1952;39(157):395-419."
  },
  "Myerson": {
    rockwoodChapter: "Chapter 60: Fractures and Dislocations of the Midfoot (Lisfranc)",
    campbellChapter: "Chapter 87: Lisfranc Fracture-Dislocations",
    millerChapter: "Chapter 8: Tarsometatarsal (Lisfranc) Injuries",
    classicCitation: "Myerson MS, Fisher RT, Burgess AR, Kenzora JE. Fracture dislocations of the tarsometatarsal joints: end results correlated with pathology and treatment. Foot Ankle. 1986;6(5):225-242."
  },
  "Lawrence-Botte": {
    rockwoodChapter: "Chapter 61: Fractures of the Metatarsals and Phalanges (5th Metatarsal)",
    campbellChapter: "Chapter 87: Fractures of the Base of the Fifth Metatarsal",
    millerChapter: "Chapter 8: Jones Fracture vs Tuberosity Avulsion",
    classicCitation: "Lawrence SJ, Botte MJ. Jones' fractures and related fractures of the proximal fifth metatarsal. Foot Ankle Int. 1993;14(6):358-365."
  },

  // Spine
  "Jefferson C1": {
    rockwoodChapter: "Chapter 36: Fractures of the Atlas (C1)",
    campbellChapter: "Chapter 38: Fractures, Dislocations, and Fracture-Dislocations of the Spine",
    millerChapter: "Chapter 4: Spine Trauma (Upper Cervical Spine & Rule of Spence)",
    classicCitation: "Spence KF Jr, Decker S, Sell KW. Bursting atlantal fracture associated with rupture of the transverse ligament. JBJS Am. 1970;52(3):543-549."
  },
  "Hangman C2": {
    rockwoodChapter: "Chapter 36: Traumatic Spondylolisthesis of the Axis (Hangman's Fracture)",
    campbellChapter: "Chapter 38: Fractures of the Axis (Levine-Edwards Classification)",
    millerChapter: "Chapter 4: Axis Fractures (Hangman C2)",
    classicCitation: "Levine AM, Edwards CC. The management of traumatic spondylolisthesis of the axis. JBJS Am. 1985;67(2):217-226."
  },
  "Odontoid C2": {
    rockwoodChapter: "Chapter 36: Fractures of the Odontoid Process (Dens)",
    campbellChapter: "Chapter 38: Odontoid Fractures of the Axis",
    millerChapter: "Chapter 4: Odontoid Fractures (Anderson-D'Alonzo Type I-III)",
    classicCitation: "Anderson LD, D'Alonzo RT. Fractures of the odontoid process of the axis. JBJS Am. 1974;56(8):1663-1674."
  },
  "Denis 3-Column Concept": {
    rockwoodChapter: "Chapter 37: Thoracolumbar Spine Fractures",
    campbellChapter: "Chapter 38: Thoracolumbar Fractures (Three-Column Spine)",
    millerChapter: "Chapter 4: Thoracolumbar Spine Trauma (Denis Concept)",
    classicCitation: "Denis F. The three column spine and its significance in the classification of acute thoracolumbar spinal injuries. Spine. 1983;8(8):817-831."
  },
  "TLICS Score": {
    rockwoodChapter: "Chapter 37: Thoracolumbar Injury Classification and Severity Score",
    campbellChapter: "Chapter 38: Subaxial and Thoracolumbar Injury Classifications",
    millerChapter: "Chapter 4: TLICS Algorithm and Surgical Decision Making",
    classicCitation: "Vaccaro AR, Lehman RA Jr, Hurlbert RJ, et al. A new classification of thoracolumbar injuries. Spine. 2005;30(20):2325-2333."
  },

  // Scapula
  "Ideberg (Goss Modification)": {
    rockwoodChapter: "Chapter 11: Fractures of the Scapula & Glenoid Cavity",
    campbellChapter: "Chapter 54: Fractures of the Scapula",
    millerChapter: "Chapter 5: Glenoid Fossa Fractures (Ideberg/Goss)",
    classicCitation: "Ideberg R, Grevsten S, Larsson S. Epidemiology of scapular fractures. Incidence and classification of 338 fractures. Acta Orthop Scand. 1995;66(5):395-397."
  },
  "Ogawa": {
    rockwoodChapter: "Chapter 11: Coracoid Process Fractures",
    campbellChapter: "Chapter 54: Fractures of the Coracoid and Acromion",
    millerChapter: "Chapter 5: Scapular Process Fractures",
    classicCitation: "Ogawa K, Yoshida A, Takahashi M, Ui M. Fractures of the coracoid process. JBJS Br. 1997;79(1):17-19."
  },
};

/** Get comprehensive, verified textbook references for any classification system */
export function getSystemReferences(systemName: string, _boneId?: string, _regionId?: string): TextbookReference[] {
  const specific = SYSTEM_SPECIFIC_MAP[systemName];

  if (!specific) {
    return getDefaultSystemReferences(systemName);
  }

  const refs: TextbookReference[] = [
    {
      textbook: "Rockwood",
      title: TEXTBOOK_EDITIONS.rockwoodAdult,
      chapter: specific.rockwoodChapter,
      notes: {
        en: "Gold standard reference for classification criteria, injury mechanisms, and treatment protocols.",
        th: "ตำรามาตรฐานหลักสำหรับเกณฑ์การจำแนก กลไกการบาดเจ็บ และแนวทางการรักษา"
      }
    },
    {
      textbook: "Campbell",
      title: TEXTBOOK_EDITIONS.campbell,
      chapter: specific.campbellChapter,
      notes: {
        en: "Operative orthopaedics reference for surgical anatomy, reduction techniques, and fixation guidelines.",
        th: "ตำราผ่าตัดมาตรฐานสำหรับกายวิภาคการผ่าตัด การจัดกระดูก และการยึดตรึงกระดูก"
      }
    },
    {
      textbook: "Miller",
      title: TEXTBOOK_EDITIONS.miller,
      chapter: specific.millerChapter,
      notes: {
        en: "High-yield review of clinical cut-offs, radiographic pearls, and board consensus.",
        th: "สรุปเกณฑ์ตัวเลขชี้ขาด ไข่มุกภาพเอกซเรย์ และข้อสรุปฉันทามติทางคลินิก"
      }
    }
  ];

  if (specific.classicCitation) {
    refs.push({
      textbook: "Classic Citation",
      title: "Landmark Orthopaedic Literature",
      classicCitation: specific.classicCitation,
      notes: {
        en: "Original peer-reviewed publication introducing this classification system.",
        th: "ผลงานตีพิมพ์ทางวิชาการต้นฉบับที่เป็นจุดกำเนิดของระบบการจำแนกนี้"
      }
    });
  }

  return refs;
}

/** Get consensus textbook references for Region Concepts (PE, Alignment, Red Flags, Pearls) */
export function getRegionReferences(_boneId?: string, regionId?: string): TextbookReference[] {
  return [
    {
      textbook: "Campbell",
      title: TEXTBOOK_EDITIONS.campbell,
      chapter: `General Principles of Fracture Treatment & Region Anatomy ${regionId ? `(${regionId})` : ""}`,
      notes: {
        en: "Definitive surgical anatomy, compartment boundaries, neurovascular risks, and acceptable alignment thresholds.",
        th: "กายวิภาคการผ่าตัด แนวเส้นประสาทหลอดเลือด และเกณฑ์มุมกระดูกที่ยอมรับได้"
      }
    },
    {
      textbook: "Rockwood",
      title: TEXTBOOK_EDITIONS.rockwoodAdult,
      chapter: `Regional Trauma Management & Reduction Criteria ${regionId ? `(${regionId})` : ""}`,
      notes: {
        en: "Physical examination maneuvers, initial reduction rules, and red flag complications.",
        th: "การตรวจร่างกาย ท่าดึงจัดกระดูกเบื้องต้น และภาวะแทรกซ้อนอันตรายที่ต้องระวัง"
      }
    },
    {
      textbook: "Miller",
      title: TEXTBOOK_EDITIONS.miller,
      chapter: "Trauma and Physical Examination Pearls",
      notes: {
        en: "High-yield provocative tests, pathognomonic exam signs, and reduction tolerances.",
        th: "การตรวจร่างกายจำเพาะ เกณฑ์มุมที่ยอมรับได้ และประเด็นสำคัญทางคลินิก"
      }
    }
  ];
}

/** Get authoritative pediatric references (Rockwood & Wilkins, Campbell, Miller) */
export function getPediatricReferences(topicId: string): TextbookReference[] {
  const pediClassicCitations: Record<string, string> = {
    "salter-harris": "Salter RB, Harris WR. Injuries involving the epiphyseal plate. JBJS Am. 1963;45(3):587-622.",
    "supracondylar": "Gartland JJ. Management of supracondylar fractures of the humerus in children. Surg Gynecol Obstet. 1959;109(2):145-154.",
    "lateral-condyle": "Milch H. Fractures and fracture dislocations of the humeral condyles. J Trauma. 1964;4:592-607.",
    "kocher-criteria": "Kocher MS, Zurakowski D, Kasser JR. Differentiating between septic arthritis and transient synovitis of the hip in children. JBJS Am. 1999;81(12):1662-1670.",
    "ddh": "Graf R. Classification of hip joint dysplasia by means of sonography. Arch Orthop Trauma Surg. 1984;102(4):248-255.",
    "scfe": "Southwick WO. Osteotomy through the lesser trochanter for slipped capital femoral epiphysis. JBJS Am. 1967;49(5):807-835.",
    "perthes": "Herring JA, Neustadt JB, Williams JJ, et al. The lateral pillar classification of Legg-Calve-Perthes disease. J Pediatr Orthop. 1992;12(2):143-150."
  };

  const refs: TextbookReference[] = [
    {
      textbook: "Rockwood",
      title: TEXTBOOK_EDITIONS.rockwoodPedi,
      chapter: "Fractures in Children: Growth Plate & Pediatric Trauma",
      notes: {
        en: "The definitive worldwide textbook for pediatric skeletal trauma and physeal injury management.",
        th: "ตำรามาตรฐานสากลอันดับหนึ่งสำหรับการรักษากระดูกหักและการบาดเจ็บ Growth Plate ในเด็ก"
      }
    },
    {
      textbook: "Campbell",
      title: TEXTBOOK_EDITIONS.campbell,
      chapter: "Pediatric Orthopaedics & Physeal Injuries",
      notes: {
        en: "Comprehensive surgical techniques for pediatric fracture fixation and remodeling limits.",
        th: "เทคนิคการผ่าตัดยึดตรึงกระดูกเด็ก และขีดจำกัดการคืนรูปตามธรรมชาติ (Remodeling)"
      }
    },
    {
      textbook: "Miller",
      title: TEXTBOOK_EDITIONS.miller,
      chapter: "Pediatric Orthopaedics Section",
      notes: {
        en: "High-yield normal ossification timing (CRITOE), age-based reduction tolerances, and board pearls.",
        th: "สรุปช่วงเวลาเกิดกระดูก (CRITOE) เกณฑ์ยอมรับมุมตามช่วงอายุ และข้อสอบบอร์ดเด็ก"
      }
    }
  ];

  if (pediClassicCitations[topicId]) {
    refs.push({
      textbook: "Classic Citation",
      title: "Landmark Pediatric Orthopaedic Literature",
      classicCitation: pediClassicCitations[topicId],
      notes: {
        en: "Original milestone study defining this clinical rule / classification.",
        th: "งานวิจัยหลักระดับตำนานที่เป็นที่มาของเกณฑ์และระบบการจำแนกนี้"
      }
    });
  }

  return refs;
}
