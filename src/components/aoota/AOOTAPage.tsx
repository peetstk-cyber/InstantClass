import { useState } from "react";
import type { Language } from "../../App";
import { 
  FileCode, 
  Layers, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles, 
  Search,
  BookOpen
} from "lucide-react";

interface AOOTAPageProps {
  darkMode: boolean;
  language: Language;
}

interface AOBone {
  code: string;
  name: { en: string; th: string };
  segments: AOSegment[];
}

interface AOSegment {
  code: string;
  name: { en: string; th: string };
  types: AOType[];
}

interface AOType {
  code: string;
  name: { en: string; th: string };
  definition: { en: string; th: string };
  subtypes: {
    code: string;
    name: { en: string; th: string };
    desc: { en: string; th: string };
  }[];
}

const AO_BONES: AOBone[] = [
  {
    code: "1",
    name: { en: "1. Humerus (Arm)", th: "1. กระดูกต้นแขน (Humerus)" },
    segments: [
      {
        code: "1",
        name: { en: "11 Proximal Humerus", th: "11 กระดูกต้นแขนส่วนต้น" },
        types: [
          {
            code: "A",
            name: { en: "Extra-articular, unifocal", th: "นอกข้อ แบบชิ้นเดียว (Unifocal)" },
            definition: { en: "Fracture does not involve the articular surface; involves tuberosity or extra-articular surgical neck.", th: "รอยหักไม่ผ่านผิวข้อ บริเวณปุ่ม Tuberosity หรือ Surgical neck" },
            subtypes: [
              { code: "1", name: { en: "Greater Tuberosity", th: "ปุ่ม Greater Tuberosity" }, desc: { en: "Avulsion or displacement of greater tuberosity", th: "ปุ่มกระดูกด้านนอกถูกดึงหลุดหรือเลื่อน" } },
              { code: "2", name: { en: "Lesser Tuberosity", th: "ปุ่ม Lesser Tuberosity" }, desc: { en: "Avulsion of subscapularis insertion", th: "ปุ่มกระดูกด้านในถูกดึงหลุด" } },
              { code: "3", name: { en: "Surgical Neck", th: "คอกระดูก Surgical Neck" }, desc: { en: "Extra-articular unifocal metaphyseal fracture", th: "หักผ่านคอกระดูกใต้ข้อ" } }
            ]
          },
          {
            code: "B",
            name: { en: "Extra-articular, bifocal", th: "นอกข้อ แบบสองชิ้น (Bifocal)" },
            definition: { en: "Involves surgical neck with an associated tuberosity fracture.", th: "หักผ่าน Surgical neck ร่วมกับปุ่ม Tuberosity หลุด" },
            subtypes: [
              { code: "1", name: { en: "Neck with Greater Tuberosity", th: "Surgical neck + Greater tuberosity" }, desc: { en: "Impaction or displacement with tuberosity involvement", th: "หักคอกระดูกร่วมกับปุ่มนอกหลุด" } },
              { code: "2", name: { en: "Neck with Lesser Tuberosity", th: "Surgical neck + Lesser tuberosity" }, desc: { en: "Associated with shoulder dislocation", th: "มักสัมพันธ์กับข้อไหล่หลุดไปด้านหลัง" } }
            ]
          },
          {
            code: "C",
            name: { en: "Articular (Anatomical Neck)", th: "หักเข้าข้อ (Anatomical Neck)" },
            definition: { en: "Intra-articular fracture involving anatomical neck with high osteonecrosis risk.", th: "รอยหักผ่านผิวข้อหรือ Anatomical neck เสี่ยงต่อหัวกระดูกขาดเลือดสูง" },
            subtypes: [
              { code: "1", name: { en: "Valgus impacted", th: "หัวกระดูกยุบเกยเข้าใน (Valgus)" }, desc: { en: "Articular surface intact or split with medial hinge intact", th: "ขอบกระดูกด้านในยังเกาะอยู่" } },
              { code: "2", name: { en: "Dislocated anatomical neck", th: "หัวกระดูกหลุดแยกสมบูรณ์", }, desc: { en: "High rate of avascular necrosis (AVN)", th: "เสี่ยงหัวกระดูกต้นแขนตายสูงมาก" } }
            ]
          }
        ]
      },
      {
        code: "2",
        name: { en: "12 Humeral Diaphysis (Shaft)", th: "12 แกนกระดูกต้นแขน (Shaft)" },
        types: [
          {
            code: "A",
            name: { en: "Simple fracture", th: "หักสองท่อนธรรมดา (Simple)" },
            definition: { en: "Single circumferential fracture line across humeral cortex.", th: "รอยหักเดี่ยว ขอบกระดูกประกบกันได้สมบูรณ์" },
            subtypes: [
              { code: "1", name: { en: "Spiral", th: "รอยหักเกลียว (Spiral)" }, desc: { en: "Low energy torsional load", th: "เกิดจากแรงบิดหมุน" } },
              { code: "2", name: { en: "Oblique (>= 30°)", th: "รอยหักเฉียง (Oblique)" }, desc: { en: "Bending load with oblique angle", th: "รอยหักเฉียงทำมุมเกิน 30 องศา" } },
              { code: "3", name: { en: "Transverse (< 30°)", th: "รอยหักขวาง (Transverse)" }, desc: { en: "Direct high-energy blow", th: "เกิดจากแรงกระแทกโดยตรง" } }
            ]
          },
          {
            code: "B",
            name: { en: "Wedge fracture", th: "หักมีชิ้นกระดูกรูปลิ่ม (Wedge)" },
            definition: { en: "Fracture with one or more intermediate fragments with cortical contact maintained.", th: "มีชิ้นกระดูกรูปปีกผีเสื้อหรือรูปลิ่ม โดยชิ้นหลักยังแตะกันได้" },
            subtypes: [
              { code: "1", name: { en: "Spiral wedge", th: "ชิ้นลิ่มแบบเกลียว" }, desc: { en: "Torsion wedge fragment", th: "ชิ้นลิ่มจากแรงบิด" } },
              { code: "2", name: { en: "Bending wedge", th: "ชิ้นลิ่มปีกผีเสื้อจากการงอ" }, desc: { en: "Butterfly fragment on tension side", th: "ชิ้นลิ่มปีกผีเสื้อ" } }
            ]
          },
          {
            code: "C",
            name: { en: "Complex / Segmental", th: "หักแตกย่อยซับซ้อน (Complex)" },
            definition: { en: "Severe comminution or multiple intermediate segments with no contact between proximal and distal ends.", th: "แตกย่อยหลายชิ้น ชิ้นกระดูกหลักบนล่างไม่สัมผัสกัน" },
            subtypes: [
              { code: "1", name: { en: "Segmental", th: "หักเป็นปล้องสองระดับ (Segmental)" }, desc: { en: "Two distinct fracture levels", th: "หักสองระดับเป็นท่อนกระดูกตรงกลาง" } },
              { code: "2", name: { en: "Comminuted complex", th: "แตกละเอียดหลายชิ้น" }, desc: { en: "High energy crush pattern", th: "แตกละเอียดจากแรงกระแทกสูง" } }
            ]
          }
        ]
      },
      {
        code: "3",
        name: { en: "13 Distal Humerus", th: "13 กระดูกต้นแขนส่วนปลาย (รอบข้อศอก)" },
        types: [
          {
            code: "A",
            name: { en: "Extra-articular", th: "นอกข้อ (Extra-articular / Supracondylar)" },
            definition: { en: "Fracture entirely proximal to the olecranon fossa/trochlea.", th: "รอยหักอยู่เหนือบ่อข้อศอกและผิวข้อทั้งหมด" },
            subtypes: [
              { code: "1", name: { en: "Apophyseal avulsion", th: "ปุ่ม Epicondyle ดึงหลุด" }, desc: { en: "Medial or lateral epicondyle avulsion", th: "ปุ่มข้อศอกด้านในหรือด้านนอกหลุด" } },
              { code: "2", name: { en: "Simple metaphyseal", th: "หักขวางเหนือข้อสองท่อน" }, desc: { en: "Two-part supracondylar fracture", th: "รอยหักสองท่อนเหนือข้อศอก" } }
            ]
          },
          {
            code: "B",
            name: { en: "Partial articular (Unicondylar)", th: "เข้าข้อบางส่วน (Unicondylar)" },
            definition: { en: "Fracture involves one condyle while the opposite column remains attached to the shaft.", th: "ผิวข้อหักแตกเพียงด้านเดียว คอลัมน์อีกด้านยังติดกับแกนกระดูก" },
            subtypes: [
              { code: "1", name: { en: "Lateral sagittal", th: "ปุ่มนอกหักแนวดิ่ง (Lateral condyle)" }, desc: { en: "Capitellum and lateral trochlea split", th: "ชิ้นกระดูกด้านนอกหักเข้าข้อ" } },
              { code: "2", name: { en: "Medial sagittal", th: "ปุ่มในหักแนวดิ่ง (Medial condyle)" }, desc: { en: "Medial trochlea split", th: "ชิ้นกระดูกด้านในหักเข้าข้อ" } },
              { code: "3", name: { en: "Frontal / Coronal shear", th: "ผิวข้อเฉือนหลุด (Capitellum / Hoffa equivalent)" }, desc: { en: "Bryan-Morrey coronal shear fracture", th: "ผิวข้อด้านหน้าถูกเฉือนหลุด" } }
            ]
          },
          {
            code: "C",
            name: { en: "Complete articular (Bicondylar)", th: "เข้าข้อสมบูรณ์แยกสองฝั่ง (Bicondylar T/Y-type)" },
            definition: { en: "Both articular columns separated from each other and completely dissociated from the diaphysis.", th: "ผิวข้อแตกแยกจากกันและหลุดขาดจากแกนต้นแขนสมบูรณ์ (T or Y type)" },
            subtypes: [
              { code: "1", name: { en: "Simple articular, simple metaphyseal", th: "ผิวข้อสองชิ้น เหนือข้อสองชิ้น (T-pattern)" }, desc: { en: "Classic T or Y fracture with minimal comminution", th: "หักรูปตัว T หรือ Y แบบไม่ละเอียด" } },
              { code: "2", name: { en: "Simple articular, comminuted metaphyseal", th: "ผิวข้อสองชิ้น เหนือข้อแตกย่อย" }, desc: { en: "Articular anatomical repair possible with bridge plate", th: "ผิวข้อสองชิ้น แต่ส่วนเหนือข้อแตกละเอียด" } },
              { code: "3", name: { en: "Comminuted articular", th: "ผิวข้อแตกละเอียดหลายชิ้น" }, desc: { en: "Multifragmentary articular disruption", th: "ผิวข้อแตกละเอียด เสี่ยงข้อติดขัดสูง" } }
            ]
          }
        ]
      }
    ]
  },
  {
    code: "2",
    name: { en: "2. Radius & Ulna (Forearm)", th: "2. กระดูกปลายแขน (Radius / Ulna)" },
    segments: [
      {
        code: "1",
        name: { en: "21 Proximal Forearm (Radial Head & Olecranon)", th: "21 กระดูกปลายแขนส่วนต้น" },
        types: [
          {
            code: "A",
            name: { en: "Extra-articular", th: "นอกข้อ" },
            definition: { en: "Extra-articular fracture of radial neck or proximal ulna.", th: "หักนอกผิวข้อ บริเวณคอเรเดียสหรืออัลนา" },
            subtypes: [{ code: "1", name: { en: "Radial neck simple", th: "คอกระดูกเรเดียส" }, desc: { en: "Extra-articular radial neck", th: "หักบริเวณคอกระดูกเรเดียส" } }]
          },
          {
            code: "B",
            name: { en: "Partial articular", th: "เข้าข้อบางส่วน (Radial Head / Olecranon)" },
            definition: { en: "Articular split involving either radial head or olecranon.", th: "หักผ่านผิวข้อของหัวเรเดียสหรือยอดข้อศอก" },
            subtypes: [
              { code: "1", name: { en: "Radial head split", th: "หัวเรเดียสแตกผ่าครึ่ง" }, desc: { en: "Mason Type II equivalent", th: "หัวเรเดียสแตกผ่าเข้าข้อ" } },
              { code: "2", name: { en: "Olecranon intra-articular", th: "ยอดข้อศอก Olecranon หักเข้าข้อ" }, desc: { en: "Mayo Type II equivalent", th: "หักผ่านร่อง Trochlear notch" } }
            ]
          },
          {
            code: "C",
            name: { en: "Complete articular / Complex dislocation", th: "เข้าข้อทั้งสองกระดูก / Monteggia variant" },
            definition: { en: "Both radial head and proximal ulna fractured with elbow dislocation.", th: "หักเข้าข้อทั้งสองกระดูกร่วมกับข้อศอกหลุด (Terrible Triad / Monteggia)" },
            subtypes: [{ code: "1", name: { en: "Both bones articular", th: "แตกเข้าข้อทั้งคู่" }, desc: { en: "Complex fracture dislocation", th: "กระดูกแตกเข้าข้อทั้งคู่ร่วมกับข้อศอกหลุด" } }]
          }
        ]
      },
      {
        code: "2",
        name: { en: "22 Diaphyseal Forearm (Both Bones)", th: "22 แกนกระดูกปลายแขน (Forearm Shaft)" },
        types: [
          {
            code: "A",
            name: { en: "Simple single bone (Nightstick/Isolated)", th: "หักกระดูกท่อนเดียว (Nightstick)" },
            definition: { en: "Fracture of only radius or only ulna.", th: "หักเฉพาะกระดูกเรเดียสหรืออัลนาเพียงท่อนเดียว" },
            subtypes: [
              { code: "1", name: { en: "Isolated Ulna (Nightstick)", th: "อัลนาหักท่อนเดียว (Nightstick)" }, desc: { en: "Direct blow to forearm", th: "เกิดจากถูกไม้ฟาดปลายแขนโดยตรง" } },
              { code: "2", name: { en: "Isolated Radius", th: "เรเดียสหักท่อนเดียว" }, desc: { en: "Check PRUJ & DRUJ for Galeazzi", th: "ต้องตรวจข้อข้อมือ DRUJ เสมอ" } }
            ]
          },
          {
            code: "B",
            name: { en: "Wedge / Galeazzi / Monteggia", th: "หักมีชิ้นลิ่ม หรือหักร่วมข้อหลุด (Monteggia/Galeazzi)" },
            definition: { en: "Fracture of one bone with fracture dislocation of joint.", th: "กระดูกท่อนหนึ่งหักร่วมกับข้อปลายแขนหลุด" },
            subtypes: [
              { code: "1", name: { en: "Monteggia fracture-dislocation", th: "Monteggia (Ulna shaft + Radial head dislocation)" }, desc: { en: "Ulna fracture with radial head dislocation", th: "อัลนาหักร่วมกับหัวเรเดียสหลุด" } },
              { code: "2", name: { en: "Galeazzi fracture-dislocation", th: "Galeazzi (Distal radius shaft + DRUJ dislocation)" }, desc: { en: "Radius fracture with DRUJ disruption", th: "เรเดียสหักร่วมกับข้อข้อมือ DRUJ หลุด" } }
            ]
          },
          {
            code: "C",
            name: { en: "Both bones fractured", th: "หักทั้งสองกระดูก (Both Bone Forearm / BBFA)" },
            definition: { en: "Simultaneous fractures of both radius and ulna shafts.", th: "กระดูกเรเดียสและอัลนาหักพร้อมกันทั้งสองท่อน" },
            subtypes: [
              { code: "1", name: { en: "Both bones simple", th: "หักสองท่อนธรรมดาทั้งคู่" }, desc: { en: "Two simple transverse/oblique fractures", th: "หักสองท่อนธรรมดาทั้งคู่ ต้องทำ anatomical plating" } },
              { code: "2", name: { en: "Both bones comminuted", th: "แตกย่อยละเอียดทั้งคู่" }, desc: { en: "High energy injury with synostosis risk", th: "เสี่ยงข้อปลายแขนหมุนติดขัด (Synostosis)" } }
            ]
          }
        ]
      },
      {
        code: "3",
        name: { en: "23 Distal Radius & Ulna (Wrist)", th: "23 กระดูกข้อมือส่วนปลาย (Distal Radius)" },
        types: [
          {
            code: "A",
            name: { en: "Extra-articular (Colles / Smith)", th: "นอกข้อ (Colles / Smith)" },
            definition: { en: "Fracture completely proximal to radiocarpal joint.", th: "รอยหักอยู่นอกผิวข้อข้อมือทั้งหมด" },
            subtypes: [
              { code: "1", name: { en: "Ulnar styloid avulsion", th: "ยอด Ulnar Styloid หัก" }, desc: { en: "Avulsion of TFCC insertion", th: "ชิ้นยอดอัลนาหลุด" } },
              { code: "2", name: { en: "Colles fracture (Dorsal tilt)", th: "Colles (หักงอไปด้านหลังมือ)" }, desc: { en: "Dinner fork deformity with dorsal displacement", th: "กระดูกยุบงอไปทางหลังมือ (Dinner fork)" } },
              { code: "3", name: { en: "Smith fracture (Volar tilt)", th: "Smith (หักงอไปด้านฝ่ามือ)" }, desc: { en: "Garden spade deformity with volar displacement", th: "กระดูกยุบงอไปทางฝ่ามือ" } }
            ]
          },
          {
            code: "B",
            name: { en: "Partial articular (Barton / Chauffeur)", th: "เข้าข้อบางส่วน (Barton / Chauffeur)" },
            definition: { en: "Fracture involves radiocarpal joint while one cortex remains in continuity.", th: "หักเข้าข้อข้อมือเพียงขอบเดียว" },
            subtypes: [
              { code: "1", name: { en: "Chauffeur (Radial styloid)", th: "Chauffeur / Hutchinson (หักปุ่ม Radial Styloid)" }, desc: { en: "Avulsion of radial collateral ligament", th: "ปุ่มเรเดียสด้านนอกหักเข้าข้อ" } },
              { code: "2", name: { en: "Volar Barton", th: "Volar Barton (ขอบฝ่ามือหลุดเข้าข้อ)" }, desc: { en: "Volar rim fracture with carpal subluxation", th: "ขอบกระดูกด้านฝ่ามือหักเข้าข้อร่วมกับข้อมือเคลื่อน" } },
              { code: "3", name: { en: "Dorsal Barton", th: "Dorsal Barton (ขอบหลังมือหลุดเข้าข้อ)" }, desc: { en: "Dorsal rim fracture with carpal subluxation", th: "ขอบกระดูกด้านหลังมือหักเข้าข้อ" } }
            ]
          },
          {
            code: "C",
            name: { en: "Complete articular (Complex Intra-Articular)", th: "เข้าข้อสมบูรณ์แตกย่อย (Complete Intra-Articular)" },
            definition: { en: "Intra-articular fracture separating articular surface from shaft.", th: "ผิวข้อข้อมือแตกแยกจากกันและหลุดออกจากแกนกระดูก" },
            subtypes: [
              { code: "1", name: { en: "Simple articular, simple metaphyseal", th: "ผิวข้อ 2 ชิ้น เหนือข้อ 2 ชิ้น" }, desc: { en: "Two-part articular split (Sagittal/Coronal)", th: "ผิวข้อแยกสองชิ้น" } },
              { code: "2", name: { en: "Simple articular, comminuted metaphyseal", th: "ผิวข้อ 2 ชิ้น เหนือข้อแตกละเอียด" }, desc: { en: "Metaphyseal comminution requiring bridge or volar plate", th: "ส่วนเหนือข้อแตกละเอียด" } },
              { code: "3", name: { en: "Multifragmentary articular (Die-punch)", th: "ผิวข้อยุบแตกละเอียด (Die-punch)" }, desc: { en: "Lunate fossa impaction (Die-punch fracture)", th: "ผิวข้อส่วน Lunate fossa ถูกกระแทกยุบ" } }
            ]
          }
        ]
      }
    ]
  },
  {
    code: "3",
    name: { en: "3. Femur (Thigh & Hip)", th: "3. กระดูกต้นขา & ข้อสะโพก (Femur)" },
    segments: [
      {
        code: "1",
        name: { en: "31 Proximal Femur (Hip)", th: "31 กระดูกต้นขาส่วนต้น (รอบสะโพก)" },
        types: [
          {
            code: "A",
            name: { en: "Trochanteric area (Intertrochanteric)", th: "Intertrochanteric (นอกข้อรอบปุ่มสะโพก)" },
            definition: { en: "Extra-articular fracture between greater and lesser trochanters.", th: "รอยหักนอกข้อระหว่างปุ่ม Greater และ Lesser trochanters" },
            subtypes: [
              { code: "1", name: { en: "Stable 2-part", th: "แบบมั่นคง 2 ชิ้น" }, desc: { en: "Intact posteromedial cortex", th: "ขอบกระดูกด้านในยังมั่นคง" } },
              { code: "2", name: { en: "Unstable comminuted", th: "แบบไม่มั่นคง แตกหลายชิ้น" }, desc: { en: "Lesser trochanter posteromedial wall fractured", th: "ผนัง Posteromedial แตกหลุด" } },
              { code: "3", name: { en: "Reverse obliquity", th: "หักเฉียงย้อนทิศ (Reverse Oblique)" }, desc: { en: "High failure rate with DHS; requires cephalomedullary nail", th: "หักเฉียงสวนทาง ต้องใช้ตะปูไขกระดูก Cephalomedullary nail" } }
            ]
          },
          {
            code: "B",
            name: { en: "Femoral Neck (Intracapsular)", th: "คอกระดูกต้นขา (Femoral Neck / Intracapsular)" },
            definition: { en: "Intracapsular fracture through femoral neck with avascular necrosis risk.", th: "รอยหักในเยื่อหุ้มข้อผ่านคอกระดูก เสี่ยงหัวกระดูกตาย (AVN)" },
            subtypes: [
              { code: "1", name: { en: "Subcapital impacted (Garden I)", th: "ใต้หัวกระดูกแบบเกยกัน (Garden I)" }, desc: { en: "Valgus impacted with low AVN risk", th: "หัวกระดูกเกยเข้าใน มั่นคงดี" } },
              { code: "2", name: { en: "Transcervical undisplaced (Garden II)", th: "ผ่านกลางคอไม่เคลื่อน (Garden II)" }, desc: { en: "Complete fracture without displacement", th: "รอยหักขาดแต่ไม่เลื่อน" } },
              { code: "3", name: { en: "Displaced subcapital (Garden III/IV)", th: "เลื่อนตำแหน่งสมบูรณ์ (Garden III/IV)" }, desc: { en: "High AVN and nonunion; consider hemiarthroplasty in elderly", th: "เสี่ยงกระดูกไม่ติดสูง ในผู้สูงอายุแนะนำผ่าตัดเปลี่ยนข้อสะโพกเทียม" } }
            ]
          },
          {
            code: "C",
            name: { en: "Femoral Head (Pipkin)", th: "หัวกระดูกต้นขาหักเข้าข้อ (Femoral Head / Pipkin)" },
            definition: { en: "Intra-articular fracture of femoral head cartilage, usually with posterior hip dislocation.", th: "รอยหักผิวหัวกระดูกต้นขา มักเกิดร่วมกับข้อสะโพกหลุดไปด้านหลัง" },
            subtypes: [
              { code: "1", name: { en: "Infrafoveal (Pipkin I)", th: "ใต้รอย Fovea (Pipkin I)" }, desc: { en: "Below fovea centralis, non-weight bearing portion", th: "หักใต้ Fovea อยู่นอกส่วนรับน้ำหนัก" } },
              { code: "2", name: { en: "Suprafoveal (Pipkin II)", th: "เหนือรอย Fovea (Pipkin II)" }, desc: { en: "Above fovea, involves main weight-bearing dome", th: "หักเหนือ Fovea อยู่ในส่วนรับน้ำหนักหลัก" } }
            ]
          }
        ]
      },
      {
        code: "2",
        name: { en: "32 Femoral Diaphysis (Shaft)", th: "32 แกนกระดูกต้นขา (Femur Shaft)" },
        types: [
          {
            code: "A",
            name: { en: "Simple fracture", th: "หัก 2 ท่อนธรรมดา (Simple)" },
            definition: { en: "Single circumferential fracture line across cortex.", th: "รอยหักสองท่อนเดี่ยว" },
            subtypes: [
              { code: "1", name: { en: "Spiral", th: "เกลียว (Spiral)" }, desc: { en: "Low energy torsional load", th: "แรงบิดหมุน" } },
              { code: "2", name: { en: "Oblique", th: "เฉียง (Oblique >= 30°)" }, desc: { en: "Bending fracture", th: "แรงดัดงอ" } },
              { code: "3", name: { en: "Transverse", th: "ขวาง (Transverse < 30°)" }, desc: { en: "High energy direct blow", th: "แรงกระแทกความเร็วสูง" } }
            ]
          },
          {
            code: "B",
            name: { en: "Wedge fracture", th: "หักมีชิ้นลิ่มปีกผีเสื้อ (Wedge)" },
            definition: { en: "Fracture with one or more intermediate wedge fragments.", th: "มีชิ้นกระดูกลิ่มปีกผีเสื้อตรงกลาง" },
            subtypes: [
              { code: "1", name: { en: "Spiral wedge", th: "ชิ้นลิ่มเกลียว" }, desc: { en: "Torsional wedge", th: "ชิ้นลิ่มเกลียว" } },
              { code: "2", name: { en: "Bending wedge", th: "ชิ้นลิ่มจากการงอ" }, desc: { en: "Butterfly fragment", th: "ชิ้นลิ่มปีกผีเสื้อ" } }
            ]
          },
          {
            code: "C",
            name: { en: "Complex / Segmental", th: "แตกย่อยซับซ้อน / สองระดับ (Complex)" },
            definition: { en: "Multiple intermediate fragments or segmental fracture.", th: "แตกย่อยหลายชิ้นหรือหักสองระดับเป็นปล้อง" },
            subtypes: [
              { code: "1", name: { en: "Segmental", th: "หักเป็นปล้องสองระดับ" }, desc: { en: "Two distinct fracture levels", th: "หักสองระดับ" } },
              { code: "2", name: { en: "Irregular comminuted", th: "แตกละเอียดไม่เป็นระเบียบ" }, desc: { en: "Severe comminution", th: "แตกละเอียดจากอุบัติเหตุรุนแรง" } }
            ]
          }
        ]
      },
      {
        code: "3",
        name: { en: "33 Distal Femur (Knee)", th: "33 กระดูกต้นขาส่วนปลาย (รอบข้อเข่า)" },
        types: [
          {
            code: "A",
            name: { en: "Extra-articular (Supracondylar)", th: "นอกข้อ (Supracondylar)" },
            definition: { en: "Fracture completely proximal to the femoral condyles.", th: "รอยหักอยู่เหนือก้อนข้อเข่าทั้งหมด" },
            subtypes: [{ code: "1", name: { en: "Simple metaphyseal", th: "หักขวางสองท่อนเหนือเข่า" }, desc: { en: "Two-part supracondylar", th: "หักสองท่อนเหนือเข่า" } }]
          },
          {
            code: "B",
            name: { en: "Partial articular (Hoffa / Unicondylar)", th: "เข้าข้อบางส่วน (Hoffa fracture)" },
            definition: { en: "Fracture involves one condyle (sagittal split or coronal Hoffa).", th: "รอยหักผ่านผิวข้อด้านเดียว (Hoffa coronal shear)" },
            subtypes: [
              { code: "1", name: { en: "Lateral sagittal", th: "ปุ่มนอกหักแนวดิ่ง" }, desc: { en: "Lateral condylar split", th: "ปุ่มนอกหักเข้าข้อ" } },
              { code: "2", name: { en: "Medial sagittal", th: "ปุ่มในหักแนวดิ่ง" }, desc: { en: "Medial condylar split", th: "ปุ่มในหักเข้าข้อ" } },
              { code: "3", name: { en: "Hoffa fracture (Coronal shear)", th: "Hoffa (ผิวข้อด้านหลังเฉือนหลุด)" }, desc: { en: "Coronal plane fracture of posterior condyle", th: "ผิวข้อด้านหลังถูกเฉือนหลุดในแนว Coronal" } }
            ]
          },
          {
            code: "C",
            name: { en: "Complete articular (Bicondylar)", th: "เข้าข้อสมบูรณ์แยกสองฝั่ง (Bicondylar)" },
            definition: { en: "Both condyles separated from each other and disconnected from the shaft.", th: "ผิวข้อเข่าแตกแยกจากกันและขาดจากแกนต้นขา" },
            subtypes: [
              { code: "1", name: { en: "Simple articular & metaphyseal (T/Y)", th: "รูปตัว T หรือ Y แบบไม่ละเอียด" }, desc: { en: "Classic bicondylar T/Y pattern", th: "หักรูปตัว T หรือ Y" } },
              { code: "2", name: { en: "Articular comminution", th: "ผิวข้อแตกละเอียดหลายชิ้น" }, desc: { en: "Multifragmentary articular disruption", th: "ผิวข้อแตกละเอียด" } }
            ]
          }
        ]
      }
    ]
  },
  {
    code: "4",
    name: { en: "4. Tibia & Fibula (Leg & Ankle)", th: "4. กระดูกหน้าแข้ง & ข้อเท้า (Tibia/Fibula)" },
    segments: [
      {
        code: "1",
        name: { en: "41 Proximal Tibia (Tibial Plateau)", th: "41 กระดูกหน้าแข้งส่วนต้น (Tibial Plateau)" },
        types: [
          {
            code: "A",
            name: { en: "Extra-articular", th: "นอกข้อ (Avulsion / Subcondylar)" },
            definition: { en: "Extra-articular fracture of proximal tibia.", th: "หักนอกผิวข้อ เช่น ปุ่มหน้าแข้ง Tibial tuberosity หลุด" },
            subtypes: [{ code: "1", name: { en: "Tibial tuberosity avulsion", th: "ปุ่ม Tibial Tuberosity ดึงหลุด" }, desc: { en: "Patellar tendon insertion avulsion", th: "จุดเกาะเอ็นสะบ้าหลุด" } }]
          },
          {
            code: "B",
            name: { en: "Partial articular (Unicondylar Plateau)", th: "เข้าข้อด้านเดียว (Schatzker I, II, III, IV)" },
            definition: { en: "Fracture involves only medial or only lateral plateau.", th: "หักผ่านผิวข้อด้านนอกหรือด้านในเพียงฝั่งเดียว" },
            subtypes: [
              { code: "1", name: { en: "Pure split lateral (Schatzker I)", th: "ชิ้นแยกด้านนอก (Schatzker I)" }, desc: { en: "Wedge split without depression in young bone", th: "แยกเป็นชิ้นหลุดโดยไม่ยุบ" } },
              { code: "2", name: { en: "Split-depression lateral (Schatzker II)", th: "ชิ้นแยกพร้อมผิวยุบ (Schatzker II)" }, desc: { en: "Most common tibial plateau fracture", th: "พบบ่อยที่สุด มีทั้งชิ้นแยกและผิวยุบ" } },
              { code: "3", name: { en: "Pure depression (Schatzker III)", th: "ผิวยุบอย่างเดียว (Schatzker III)" }, desc: { en: "Central impaction without cortical split", th: "ผิวยุบลงตรงกลางในกระดูกพรุน" } },
              { code: "4", name: { en: "Medial plateau split (Schatzker IV)", th: "ชิ้นแยกด้านใน (Schatzker IV - Popliteal risk!)", }, desc: { en: "High energy; popliteal neurovascular risk", th: "แรงกระแทกสูง เสี่ยงหลอดเลือด Popliteal ขาด" } }
            ]
          },
          {
            code: "C",
            name: { en: "Complete articular (Bicondylar Plateau)", th: "เข้าข้อสองฝั่ง (Schatzker V, VI)" },
            definition: { en: "Fracture involves both medial and lateral plateaus.", th: "หักแตกเข้าข้อทั้งฝั่งด้านในและด้านนอก" },
            subtypes: [
              { code: "1", name: { en: "Bicondylar plateau (Schatzker V)", th: "สองฝั่งแตกแต่ยังติดแกนกระดูก (Schatzker V)" }, desc: { en: "Both plateaus fractured with metadiaphyseal continuity", th: "หักสองฝั่งแต่ยังต่อกับแกนกระดูก" } },
              { code: "2", name: { en: "Plateau-diaphyseal dissociation (Schatzker VI)", th: "ผิวข้อสองฝั่งหลุดขาดจากแกนกระดูก (Schatzker VI)", }, desc: { en: "Complete dissociation; high compartment syndrome risk", th: "ผิวข้อขาดจากแกนกระดูก เสี่ยง Compartment Syndrome สูงสุด" } }
            ]
          }
        ]
      },
      {
        code: "2",
        name: { en: "42 Tibial Diaphysis (Shaft)", th: "42 แกนกระดูกหน้าแข้ง (Tibia Shaft)" },
        types: [
          {
            code: "A",
            name: { en: "Simple fracture", th: "หัก 2 ท่อนธรรมดา" },
            definition: { en: "Simple single fracture line.", th: "รอยหักสองท่อนเดี่ยว" },
            subtypes: [
              { code: "1", name: { en: "Spiral", th: "เกลียว (Spiral)" }, desc: { en: "Low energy torsional load", th: "แรงบิดหมุน" } },
              { code: "2", name: { en: "Oblique", th: "เฉียง (Oblique)" }, desc: { en: "Bending fracture", th: "แรงดัดงอ" } },
              { code: "3", name: { en: "Transverse", th: "ขวาง (Transverse)" }, desc: { en: "Direct blow", th: "แรงกระแทกตรง" } }
            ]
          },
          {
            code: "B",
            name: { en: "Wedge fracture", th: "หักมีชิ้นลิ่มปีกผีเสื้อ" },
            definition: { en: "Intermediate wedge fragment.", th: "มีชิ้นกระดูกลิ่มตรงกลาง" },
            subtypes: [
              { code: "1", name: { en: "Spiral wedge", th: "ชิ้นลิ่มเกลียว" }, desc: { en: "Torsional wedge", th: "ชิ้นลิ่มเกลียว" } },
              { code: "2", name: { en: "Bending wedge", th: "ชิ้นลิ่มปีกผีเสื้อ" }, desc: { en: "Butterfly fragment", th: "ชิ้นลิ่มปีกผีเสื้อ" } }
            ]
          },
          {
            code: "C",
            name: { en: "Complex fracture", th: "แตกละเอียดซับซ้อน" },
            definition: { en: "Segmental or multifragmentary.", th: "แตกย่อยหลายชิ้นหรือหักเป็นปล้องสองระดับ" },
            subtypes: [
              { code: "1", name: { en: "Segmental", th: "หักเป็นปล้องสองระดับ" }, desc: { en: "Two fracture levels", th: "หักสองระดับ" } },
              { code: "2", name: { en: "Irregular complex", th: "แตกละเอียดรุนแรง" }, desc: { en: "High energy comminution", th: "แตกละเอียดจากแรงสูง" } }
            ]
          }
        ]
      },
      {
        code: "4",
        name: { en: "44 Malleolar / Ankle (Danis-Weber)", th: "44 ข้อเท้า & ตาตุ่ม (Danis-Weber Ankle)" },
        types: [
          {
            code: "A",
            name: { en: "Infrasyndesmotic (Weber A)", th: "ใต้ระดับเส้นเอ็น Syndesmosis (Weber A)" },
            definition: { en: "Fibula fracture below the level of the tibial plafond/syndesmosis. Syndesmosis is always intact.", th: "กระดูกน่องหักใต้แนวผิวข้อเท้า เส้นเอ็น Syndesmosis สมบูรณ์ 100%" },
            subtypes: [
              { code: "1", name: { en: "Isolated lateral", th: "ตาตุ่มนอกหักอันเดียว" }, desc: { en: "Avulsion of lateral malleolus tip", th: "ยอดตาตุ่มนอกถูกดึงหลุด" } },
              { code: "2", name: { en: "With medial malleolus", th: "หักร่วมกับตาตุ่มใน (Bimalleolar A)" }, desc: { en: "Shear fracture of medial malleolus", th: "ตาตุ่มในถูกเฉือนหักในแนวดิ่ง" } }
            ]
          },
          {
            code: "B",
            name: { en: "Transsyndesmotic (Weber B)", th: "ระดับเดียวกับเส้นเอ็น Syndesmosis (Weber B)" },
            definition: { en: "Spiral/oblique fibular fracture at the level of the syndesmosis (Supination-External Rotation). Syndesmosis variable.", th: "กระดูกน่องหักเฉียงเกลียวที่ระดับ Syndesmosis (SER pattern) อาจมี Syndesmosis หลวมบางส่วน" },
            subtypes: [
              { code: "1", name: { en: "Isolated fibula", th: "ตาตุ่มนอกหักอย่างเดียว" }, desc: { en: "Stable if medial clear space < 4mm on stress view", th: "มั่นคงดีหากช่องด้านในไม่กว้างเกิน 4 มม." } },
              { code: "2", name: { en: "With medial lesion (Deltoid or Medial Malleolus)", th: "ร่วมกับเส้นเอ็นด้านในฉีกขาดหรือตาตุ่มในหัก" }, desc: { en: "Unstable bimalleolar equivalent requiring ORIF", th: "ไม่มั่นคง เป็น Bimalleolar equivalent ต้องผ่าตัด ORIF" } }
            ]
          },
          {
            code: "C",
            name: { en: "Suprasyndesmotic (Weber C / Maisonneuve)", th: "เหนือระดับเส้นเอ็น Syndesmosis (Weber C / Maisonneuve)" },
            definition: { en: "Fibula fracture above syndesmosis. Syndesmosis and interosseous membrane are completely torn. Always unstable!", th: "กระดูกน่องหักเหนือระดับข้อเท้า เส้นเอ็น Syndesmosis ขาดสมบูรณ์ ไม่มั่นคงเสมอ!" },
            subtypes: [
              { code: "1", name: { en: "Diaphyseal fibula (Weber C1)", th: "แกนน่องหักท่อนล่าง (Weber C1)" }, desc: { en: "Simple fibular shaft fracture above syndesmosis", th: "กระดูกน่องหักท่อนล่างเหนือข้อเท้า" } },
              { code: "2", name: { en: "Proximal fibula neck (Maisonneuve)", th: "คอกระดูกน่องส่วนบนหัก (Maisonneuve Fracture)" }, desc: { en: "Proximal fibular neck fracture with torn syndesmosis and medial clear space widening", th: "คอกระดูกน่องใต้เข่าหักร่วมกับเส้นเอ็นข้อเท้าฉีกขาดทั้งแนว" } }
            ]
          }
        ]
      }
    ]
  }
];

export function AOOTAPage({ darkMode, language }: AOOTAPageProps) {
  const [selectedBoneIdx, setSelectedBoneIdx] = useState<number>(0);
  const [selectedSegmentIdx, setSelectedSegmentIdx] = useState<number>(0);
  const [selectedTypeIdx, setSelectedTypeIdx] = useState<number>(0);
  const [searchFilter, setSearchFilter] = useState("");

  const bg = darkMode ? "#0E1117" : "#F8FAFC";
  const sidebarBg = darkMode ? "#161B27" : "#FFFFFF";
  const cardBg = darkMode ? "#1A2130" : "#FFFFFF";
  const border = darkMode ? "#252F42" : "#E2E8F0";
  const text = darkMode ? "#F1F5F9" : "#0F172A";
  const mutedText = darkMode ? "#94A3B8" : "#64748B";

  const currentBone = AO_BONES[selectedBoneIdx];
  const currentSegment = currentBone.segments[selectedSegmentIdx] || currentBone.segments[0];
  const currentType = currentSegment.types[selectedTypeIdx] || currentSegment.types[0];

  const fullAOCode = `${currentSegment.code}-${currentType.code}`;

  return (
    <div 
      style={{ background: bg, color: text }}
      className="flex-1 flex flex-col md:flex-row h-full overflow-hidden w-full"
    >
      {/* ── Left Navigation: Bone & Segment Selector ── */}
      <aside 
        style={{ background: sidebarBg, borderColor: border }}
        className="w-full md:w-80 lg:w-96 border-b md:border-b-0 md:border-r flex flex-col flex-shrink-0 z-10 max-h-[45vh] md:max-h-full overflow-hidden"
      >
        {/* Header */}
        <div className="p-3.5 border-b space-y-3" style={{ borderColor: border }}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-700 dark:text-[#00CED1]">
              <FileCode size={18} />
            </div>
            <div>
              <h1 className="font-extrabold text-sm tracking-tight leading-none text-black dark:text-slate-100">
                {language === "en" ? "AO/OTA Classification" : "ระบบการจำแนก AO/OTA"}
              </h1>
              <p className="text-[10px] font-bold text-teal-700 dark:text-[#00CED1] mt-0.5 uppercase tracking-wider">
                Universal Fracture Coding
              </p>
            </div>
          </div>

          <div className="relative">
            <Search size={13} style={{ color: mutedText }} className="absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              value={searchFilter}
              onChange={e => setSearchFilter(e.target.value)}
              placeholder={language === "en" ? "Search bone, code (11, 23, 31, 44)..." : "ค้นหากระดูก, รหัส AO (11, 23, 31, 44)..."}
              style={{
                background: darkMode ? "#1C2333" : "#F8FAFC",
                borderColor: border,
                color: text,
              }}
              className="w-full pl-8 pr-3 py-1.5 rounded-xl text-xs outline-none focus:border-teal-600 dark:focus:border-[#00CED1] transition-all font-medium border"
            />
          </div>
        </div>

        {/* Step 1: Bone Selector Grid */}
        <div className="p-3 border-b space-y-2" style={{ borderColor: border }}>
          <div className="text-[10px] font-extrabold uppercase tracking-wider text-teal-800 dark:text-[#00CED1] flex items-center gap-1">
            <span>1️⃣</span>
            <span>{language === "en" ? "Select Long Bone (1 - 4)" : "เลือกรหัสกระดูกหลัก (1 - 4)"}</span>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {AO_BONES.map((b, idx) => (
              <button
                key={b.code}
                onClick={() => {
                  setSelectedBoneIdx(idx);
                  setSelectedSegmentIdx(0);
                  setSelectedTypeIdx(0);
                }}
                style={{
                  background: selectedBoneIdx === idx
                    ? (darkMode ? "rgba(0,206,209,0.15)" : "#0F766E")
                    : (darkMode ? "rgba(255,255,255,0.03)" : "#F1F5F9"),
                  color: selectedBoneIdx === idx ? (darkMode ? "#00CED1" : "#FFFFFF") : (darkMode ? "#CBD5E0" : "#334155"),
                  borderColor: selectedBoneIdx === idx ? (darkMode ? "rgba(0,206,209,0.4)" : "#0F766E") : border,
                }}
                className="p-2 rounded-xl text-left border text-xs font-bold transition-all cursor-pointer flex items-center justify-between"
              >
                <span className="truncate">{b.name[language]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Segment Selector */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2">
          <div className="text-[10px] font-extrabold uppercase tracking-wider text-teal-800 dark:text-[#00CED1] flex items-center gap-1">
            <span>2️⃣</span>
            <span>{language === "en" ? "Select Anatomical Segment" : "เลือกส่วนของกระดูก"}</span>
          </div>

          <div className="space-y-1.5">
            {currentBone.segments.map((seg, sIdx) => {
              const isSelected = selectedSegmentIdx === sIdx;
              return (
                <button
                  key={seg.code}
                  onClick={() => {
                    setSelectedSegmentIdx(sIdx);
                    setSelectedTypeIdx(0);
                  }}
                  style={{
                    background: isSelected 
                      ? (darkMode ? "rgba(0,206,209,0.12)" : "rgba(15,118,110,0.1)")
                      : "transparent",
                    borderColor: isSelected
                      ? (darkMode ? "rgba(0,206,209,0.4)" : "rgba(15,118,110,0.3)")
                      : "transparent",
                  }}
                  className={`w-full text-left p-2.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                    !isSelected ? "hover:bg-slate-100 dark:hover:bg-slate-800/50" : ""
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-8 h-8 rounded-lg bg-teal-600/10 text-teal-800 dark:text-[#00CED1] font-black text-xs flex items-center justify-center flex-shrink-0 border border-teal-600/20">
                      {seg.code}
                    </span>
                    <div className="min-w-0">
                      <div className={`text-xs font-bold truncate ${
                        isSelected ? "text-teal-800 dark:text-[#00CED1] font-extrabold" : "text-black dark:text-slate-100"
                      }`}>
                        {seg.name[language]}
                      </div>
                      <div className="text-[10.5px] text-slate-500 truncate">
                        {seg.types.length} {language === "en" ? "Types (A, B, C)" : "ประเภท (A, B, C)"}
                      </div>
                    </div>
                  </div>
                  <ChevronRight size={14} className={isSelected ? "text-teal-800 dark:text-[#00CED1]" : "text-slate-400 opacity-40"} />
                </button>
              );
            })}
          </div>
        </div>
      </aside>

      {/* ── Main Detail & Code Decoder Panel ── */}
      <main className="flex-1 h-full overflow-y-auto p-3.5 sm:p-5 md:p-6 space-y-5">
        <div className="max-w-4xl mx-auto space-y-5 animate-fadeIn">
          {/* Active Alphanumeric Code Banner */}
          <div 
            style={{ background: cardBg, borderColor: border }}
            className="p-4 md:p-5 rounded-2xl border shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 relative overflow-hidden"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[10.5px] font-extrabold px-2.5 py-0.5 rounded-full bg-teal-600/15 text-teal-800 dark:text-[#00CED1] border border-teal-600/30 uppercase tracking-wider">
                  AO/OTA 2018 Compendium
                </span>
                <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                  {currentBone.name[language]}
                </span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-black dark:text-slate-100">
                {currentSegment.name[language]}
              </h2>
            </div>

            {/* Generated Code Badge */}
            <div className="flex items-center gap-3 p-2.5 px-4 rounded-2xl bg-teal-600/10 dark:bg-[#00CED1]/10 border border-teal-600/30 dark:border-[#00CED1]/30 flex-shrink-0">
              <div className="text-right">
                <div className="text-[9.5px] font-bold uppercase text-teal-800 dark:text-[#00CED1]">AO Fracture Code</div>
                <div className="text-2xl md:text-3xl font-black text-teal-900 dark:text-[#00CED1] tracking-tight">
                  {fullAOCode}
                </div>
              </div>
              <Sparkles size={24} className="text-teal-700 dark:text-[#00CED1]" />
            </div>
          </div>

          {/* Step 3: Type Selector (A, B, C) */}
          <div className="space-y-2.5">
            <div className="text-xs font-extrabold uppercase tracking-wider text-teal-800 dark:text-[#00CED1] flex items-center gap-1.5">
              <Layers size={15} />
              <span>3️⃣ {language === "en" ? "Select Fracture Type (A: Extra-articular, B: Partial articular, C: Complete articular)" : "เลือกลักษณะความรุนแรง (A: นอกข้อ, B: เข้าข้อบางส่วน, C: เข้าข้อสมบูรณ์)"}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {currentSegment.types.map((type, tIdx) => {
                const isSelected = selectedTypeIdx === tIdx;
                return (
                  <button
                    key={type.code}
                    onClick={() => setSelectedTypeIdx(tIdx)}
                    style={{
                      background: isSelected 
                        ? (darkMode ? "rgba(0,206,209,0.15)" : "#0F766E")
                        : cardBg,
                      color: isSelected ? (darkMode ? "#00CED1" : "#FFFFFF") : text,
                      borderColor: isSelected ? (darkMode ? "rgba(0,206,209,0.5)" : "#0F766E") : border,
                    }}
                    className="p-3.5 rounded-2xl border text-left transition-all cursor-pointer shadow-xs space-y-1.5 hover:border-teal-600/50"
                  >
                    <div className="flex items-center justify-between">
                      <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-black text-xs ${
                        isSelected 
                          ? (darkMode ? "bg-[#00CED1] text-slate-900" : "bg-white text-teal-900")
                          : "bg-teal-600/10 text-teal-800 dark:text-[#00CED1]"
                      }`}>
                        {type.code}
                      </span>
                      {isSelected && <CheckCircle2 size={16} />}
                    </div>
                    <div className="font-extrabold text-xs">{type.name[language]}</div>
                    <div className={`text-[10.5px] leading-snug line-clamp-2 ${
                      isSelected ? "opacity-90" : "opacity-70"
                    }`}>
                      {type.definition[language]}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Subtypes & Clinical Decoder Cards */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-slate-800 dark:text-slate-200">
              <span className="flex items-center gap-1.5">
                <BookOpen size={15} className="text-teal-700 dark:text-[#00CED1]" />
                <span>{language === "en" ? `Subtypes Breakdown for ${fullAOCode}` : `รายละเอียดประเภทย่อยสำหรับรหัส ${fullAOCode}`}</span>
              </span>
              <span className="text-teal-800 dark:text-[#00CED1] text-[11px] font-bold">
                {currentType.subtypes.length} {language === "en" ? "Groups" : "กลุ่มย่อย"}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {currentType.subtypes.map((sub, sIdx) => {
                const subCode = `${fullAOCode}.${sub.code}`;
                return (
                  <div
                    key={sIdx}
                    style={{ background: cardBg, borderColor: border }}
                    className="p-4 rounded-2xl border shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-teal-600/40 transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className="px-3 py-1.5 rounded-xl bg-teal-600/10 dark:bg-[#00CED1]/15 text-teal-900 dark:text-[#00CED1] font-black text-xs border border-teal-600/30 flex-shrink-0">
                        {subCode}
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="font-black text-xs md:text-sm text-black dark:text-slate-100">
                          {sub.name[language]}
                        </h4>
                        <p className="text-[11.5px] leading-relaxed text-slate-700 dark:text-slate-300 font-medium">
                          {sub.desc[language]}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick AO Reference Cheat Sheet */}
          <div className="p-4 rounded-2xl border bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 space-y-2.5 text-xs">
            <div className="font-extrabold text-teal-800 dark:text-[#00CED1] uppercase tracking-wider flex items-center gap-1.5">
              <span>📐</span>
              <span>{language === "en" ? "AO Alphanumeric Fracture Logic" : "หลักการจำรหัสตัวเลข AO/OTA"}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11.5px]">
              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="font-black text-teal-700 dark:text-[#00CED1]">1st Digit (Bone): </span>
                <span>1=Humerus, 2=Radius/Ulna, 3=Femur, 4=Tibia/Fibula</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="font-black text-teal-700 dark:text-[#00CED1]">2nd Digit (Segment): </span>
                <span>1=Proximal, 2=Diaphysis, 3=Distal, 4=Malleolar</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="font-black text-teal-700 dark:text-[#00CED1]">Letter (Type): </span>
                <span>A=Extra-articular, B=Partial articular, C=Complete articular</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
