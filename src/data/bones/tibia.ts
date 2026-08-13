import type { BoneData } from "../../types";

export const tibiaBone: BoneData = {
  "id": "tibia",
  "name": {
    "en": "Tibia & Fibula",
    "th": "กระดูกหน้าแข้งและข้อเท้า"
  },
  "description": {
    "en": "Lower leg bones including proximal tibia, shaft, and ankle malleoli",
    "th": "กระดูกขาช่วงล่าง รวมถึงหัวกระดูกหน้าแข้ง แกนกระดูก และข้อเท้า"
  },
  "pediatric": false,
  "regions": [
    {
      "id": "proximal",
      "name": {
        "en": "Proximal Tibia",
        "th": "ส่วนหัวกระดูกหน้าแข้ง (Proximal)"
      },
      "classifications": [
        {
          "system": "Schatzker",
          "fullName": {
            "en": "Schatzker Tibial Plateau Fracture Classification",
            "th": "การจำแนกกระดูกหัวหน้าแข้งหักแบบ Schatzker"
          },
          "description": {
            "en": "Classification system for tibial plateau fractures based on fracture pattern, degree of depression, and energy of injury (Types I-III: Low energy/lateral plateau; Types IV-VI: High energy/medial plateau or bicondylar).",
            "th": "ระบบจำแนกกระดูกหัวหน้าแข้งหัก (Tibial Plateau) ตามลักษณะรอยหัก การยุบตัวของผิวข้อ และพลังงานของการบาดเจ็บ (Type I-III: พลังงานต่ำ/ฝั่งนอก; Type IV-VI: พลังงานสูง/ฝั่งใน หรือสองฝั่ง)"
          },
          "investigations": [
            {
              "name": "AP Knee View",
              "details": {
                "en": "Anteroposterior view of the knee. Evaluates lateral or medial tibial plateau split, depression depth, and joint alignment.",
                "th": "ภาพเอกซเรย์เข่าท่าหน้าหลัง (AP) เพื่อประเมินรอยแยกหรือยุบตัวของผิวข้อหน้าแข้งฝั่งนอกหรือใน และการเรียงตัวของข้อเข่า"
              }
            },
            {
              "name": "Lateral Knee View",
              "details": {
                "en": "Lateral view of the knee. Essential to detect posterior slope disruption, posterior column fragments, and anterior/posterior displacement.",
                "th": "ภาพเอกซเรย์เข่าท่าด้านข้าง (Lateral) เพื่อตรวจหารอยหักผิวข้อด้านหลัง (Posterior column) และความลาดเอียงของผิวข้อ"
              }
            },
            {
              "name": "CT Scan with 3D Reconstruction",
              "details": {
                "en": "Non-contrast CT scan of the knee with 3D reconstruction. Gold standard to measure exact articular depression depth (>2-3mm), split fragment orientation, and plan surgical plate placement.",
                "th": "การตรวจเอ็กซเรย์คอมพิวเตอร์ (CT scan) พร้อมสร้างภาพ 3 มิติ เป็นมาตรฐานหลักในการวัดความลึกของการยุบตัว (>2-3 มม.) และวางแผนตำแหน่งผ่าตัดใส่แผ่นเหล็ก"
              }
            }
          ],
          "types": [
            {
              "type": "Schatzker I",
              "name": {
                "en": "Schatzker Type I (Pure Split)",
                "th": "Schatzker Type I (หักแยกฝั่งนอก - Pure Split)"
              },
              "description": {
                "en": "Pure split fracture of the lateral tibial plateau without articular depression\nTypically seen in young patients with good bone density\nMinimal risk of osteopenia-related fragment collapse",
                "th": "รอยหักแยกบริสุทธิ์ (Pure split) ของผิวข้อหน้าแข้งฝั่งนอก โดยไม่มีการยุบตัวของผิวข้อ\nมักพบในผู้ป่วยอายุน้อยที่มีความหนาแน่นกระดูกดี\nความเสี่ยงต่ำต่อการยุบพังของกระดูก"
              },
              "moi": {
                "en": "Valgus force combined with axial loading on an extended knee.",
                "th": "แรงดัดเข่าเข้าด้านใน (Valgus) ร่วมกับแรงกดตามแนวแกนขณะเข่าเหยียด"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "Indicated only for non-displaced split fractures (<2mm displacement). Cast brace in extension with non-weight bearing for 6-8 weeks.",
                  "th": "พิจารณาเฉพาะกรณีรอยหักไม่เคลื่อนตัว (<2 มม.) ใส่กายอุปกรณ์ล๊อคเข่าในท่าเหยียด งดลงน้ำหนัก 6-8 สัปดาห์"
                },
                "operative": {
                  "en": "Indicated for displacement ≥2-3mm or valgus instability. Open reduction and internal fixation (ORIF) using two 6.5mm cancellous lag screws with washers, or a lateral locking plate.",
                  "th": "แนะนำเมื่อรอยแยก ≥2-3 มม. หรือข้อเข่าหลวม ผ่าตัดเปิดจัดกระดูกและยึดด้วย Cancellous lag screws ขนาด 6.5 มม. หรือแผ่นเหล็กดามฝั่งนอก (Lateral locking plate)"
                }
              },
              "illustrationId": "/images/schatzker/schatzker_1.png",
              "xrayDescription": {
                "en": "Vertical split fracture line running through the lateral condyle without depression of the central articular surface.",
                "th": "รอยหักแนวตั้งแยกชิ้นส่วนคอนไดล์ฝั่งนอกออกจากกัน โดยไม่มีการกดลึกลงไปของผิวข้อต่อตรงกลาง"
              }
            },
            {
              "type": "Schatzker II",
              "name": {
                "en": "Schatzker Type II (Split-Depression)",
                "th": "Schatzker Type II (หักแยกร่วมกับผิวยุบฝั่งนอก)"
              },
              "description": {
                "en": "Combined split and articular depression of the lateral tibial plateau\nMost common type (~25-30% of all plateau fractures)\nTypically seen in older patients with mild osteopenia",
                "th": "รอยหักแยก ร่วมกับการยุบตัวลงของผิวข้อหน้าแข้งฝั่งนอก\nเป็นชนิดที่พบบ่อยที่สุด (ประมาณ 25-30% ของกระดูกหัวหน้าแข้งหักทั้งหมด)\nมักพบในผู้ป่วยสูงอายุหรือผู้ที่มีภาวะกระดูกบาง"
              },
              "moi": {
                "en": "Valgus force with significant axial compression.",
                "th": "แรงดัดเข่าเข้าด้านใน (Valgus) ร่วมกับแรงกดตามแนวแกนรุนแรง"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "NOT recommended if depression >5mm or valgus instability >10°.",
                  "th": "ไม่แนะนำหากผิวข้อยุบ >5 มม. หรือข้อเข่าเอียงโก่ง >10 องศา"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. Subcortical windowing, elevation of the depressed articular surface, filling the metaphyseal defect with bone graft or bone cement, supported by a lateral periarticular buttress plate.",
                  "th": "แนะนำให้ผ่าตัดเสมอ (ORIF) โดยเจาะเปิดช่องกระดูก งัดยกผิวข้อที่ยุบตัวให้กลับมาเรียบ เติมช่องว่างด้วยกระดูกปลูก (Bone graft) หรือปูนซีเมนต์กระดูก แล้วยึดด้วยแผ่นเหล็กดามด้านข้าง (Buttress plate)"
                }
              },
              "illustrationId": "/images/schatzker/schatzker_2.png",
              "xrayDescription": {
                "en": "Lateral condyle split fragment with central articular surface depressed into the metaphyseal bone.",
                "th": "พบชิ้นกระดูกคอนไดล์ฝั่งนอกแยกออก ร่วมกับผิวข้อต่อตรงกลางจมยุบลงไปในโพรงกระดูก"
              }
            },
            {
              "type": "Schatzker III",
              "name": {
                "en": "Schatzker Type III (Pure Depression)",
                "th": "Schatzker Type III (ผิวยุบฝั่งนอกบริสุทธิ์)"
              },
              "description": {
                "en": "Pure central depression of the lateral plateau without an associated split\nIntact lateral rim/cortical wall\nTypically seen in elderly patients with significant osteoporosis",
                "th": "ผิวกระดูกตรงกลางฝั่งนอกยุบตัวลงบริสุทธิ์ โดยไม่มีรอยหักแยกของขอบกระดูก\nขอบกระดูกด้านข้าง (Lateral rim) ยังคงสมบูรณ์ดี\nมักพบในผู้สูงอายุที่มีภาวะกระดูกพรุนรุนแรง"
              },
              "moi": {
                "en": "Low-energy axial compression force on a flexed knee.",
                "th": "แรงกดตามแนวแกนพลังงานต่ำขณะข้อเข่างออยู่"
              },
              "treatment": {
                "preferred": "conservative",
                "conservative": {
                  "en": "Indicated for mild depression (<5mm) and stable joint on valgus stress. Hinged knee brace with early ROM and non-weight bearing for 6-8 weeks.",
                  "th": "แนะนำสำหรับผิวกระดูกยุบตัวน้อย (<5 มม.) และข้อเข่ามั่นคงดี ใส่กายอุปกรณ์แบบมีข้อพับ (Hinged knee brace) ฝึกขยับเข่า และงดลงน้ำหนัก 6-8 สัปดาห์"
                },
                "operative": {
                  "en": "Indicated for depression >5mm or joint instability. Arthroscopic or fluoroscopic-guided elevation of depressed articular cartilage, subchondral bone grafting, and rafting screws or mini-plate support.",
                  "th": "แนะนำหากผิวกระดูกยุบ >5 มม. ผ่าตัดผ่านกล้องหรือใช้ X-ray งัดยกผิวข้อต่อขึ้น เติมกระดูกปลูกใต้ผิวข้อ และยึดด้วยสกรู Rafting screws"
                }
              },
              "illustrationId": "/images/schatzker/schatzker_3.png",
              "xrayDescription": {
                "en": "Central articular depression of lateral plateau visible as a dense saucer-shaped radiopaque ring without cortical disruption.",
                "th": "ผิวข้อต่อตรงกลางยุบตัวเป็นแอ่ง โดยขอบกระดูกเปลือกนอก (Cortical wall) ด้านข้างยังคงรูปทรงสมบูรณ์"
              }
            },
            {
              "type": "Schatzker IV",
              "name": {
                "en": "Schatzker Type IV (Medial Plateau)",
                "th": "Schatzker Type IV (หักฝั่งใน - Medial Plateau)"
              },
              "description": {
                "en": "Fracture involving the medial tibial plateau (split, depressed, or split-depressed)\nHigh-energy injury pattern\nHigh incidence of associated neurovascular injury (popliteal artery, peroneal nerve) and ligamentous disruption (LCL, ACL, PCL)",
                "th": "รอยหักบริเวณหัวกระดูกหน้าแข้งฝั่งใน (Medial plateau - แบบแยก หรือ ยุบตัว)\nเป็นการบาดเจ็บพลังงานสูง\nมีความเสี่ยงสูงมากต่อการบาดเจ็บของเส้นเลือดใหญ่ (Popliteal artery), เส้นประสาท (Peroneal nerve) และเอ็นเข่าฉีกขาด (LCL, ACL, PCL)"
              },
              "moi": {
                "en": "High-energy Varus force combined with heavy axial compression load.",
                "th": "แรงดัดเข่าออกด้านนอก (Varus) พลังงานสูง ร่วมกับแรงกดดันตามแนวแกนอย่างรุนแรง"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "NOT recommended due to high rate of varus collapse, articular incongruity, and joint subluxation.",
                  "th": "ไม่แนะนำเนื่องจากเสี่ยงต่อการเข่าโก่งงอพังทลาย (Varus collapse) และข้อหลุดหลวม"
                },
                "operative": {
                  "en": "MANDATORY OPERATIVE FIXATION. Urgent neurovascular check. Open reduction and internal fixation (ORIF) with a medial posteromedial buttress plate to prevent varus displacement.",
                  "th": "จำเป็นต้องผ่าตัดเสมอ (Mandatory ORIF) ต้องตรวจเส้นเลือดและเส้นประสาทฉุกเฉิน ผ่าตัดดามแผ่นเหล็กยึดฝั่งด้านใน/หลังใน (Posteromedial buttress plate) เพื่อป้องกันเข่าโก่งพัง"
                }
              },
              "illustrationId": "/images/schatzker/schatzker_4.png",
              "xrayDescription": {
                "en": "Fracture line extending through the medial condyle into the intercondylar eminence, often with varus tilt of the tibia.",
                "th": "รอยหักพาดผ่านคอนไดล์ฝั่งในไปยังปุ่มกระดูกกลางข้อ (Intercondylar eminence) มักพบร่วมกับมุมเข่าเอียงโก่งออกด้านนอก (Varus)"
              }
            },
            {
              "type": "Schatzker V",
              "name": {
                "en": "Schatzker Type V (Bicondylar)",
                "th": "Schatzker Type V (หักสองฝั่ง - Bicondylar)"
              },
              "description": {
                "en": "Bicondylar fracture involving BOTH medial and lateral tibial plateaus\nMetaphyseal-diaphyseal continuity is MAINTAINED\nClassic inverted Y or T fracture pattern\nHigh soft tissue compromise (blisters, compartment syndrome)",
                "th": "รอยหักสองฝั่ง (Bicondylar) ทั้งด้านในและด้านนอก\nส่วนแกนกระดูกยังคงเชื่อมต่อกับส่วนกลางได้ (ไม่มีการหลุดแยกจากแกน)\nลักษณะรอยหักเป็นรูปตัว Y หรือ T กลับหัว\nเสี่ยงสูงต่อเนื้อเยื่อรอบข้อต่อบวมเต่ง (Soft tissue envelope) และภาวะความดันในช่องกล้ามเนื้อสูง (Compartment syndrome)"
              },
              "moi": {
                "en": "High-energy direct axial load driving the femoral condyles into both tibial plateaus.",
                "th": "แรงกดตามแนวแกนพลังงานสูงมากที่กดให้คอนไดล์กระดูกต้นขาแทรกเข้ากลางหัวกระดูกหน้าแข้งทั้งสองฝั่ง"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "NOT recommended. High failure rate.",
                  "th": "ไม่แนะนำเนื่องจากข้อเข่าพังทลาย"
                },
                "operative": {
                  "en": "Two-stage management often required: 1) Temporary spanning external fixator until soft tissue swelling settles (~10-14 days). 2) Definitive ORIF with dual plating (medial and lateral locking plates) or hybrid external fixation.",
                  "th": "มักต้องแบ่งการผ่าตัดเป็น 2 ระยะ: 1) ใส่โครงดามภายนอกชั่วคราว (External fixator) เพื่อรอให้เนื้อเยื่อบวมลดลง (~10-14 วัน) 2) ผ่าตัดยึดแผ่นเหล็กคู่อันจริง (Dual locking plates) ทั้งสองฝั่ง"
                }
              },
              "illustrationId": "/images/schatzker/schatzker_5.png",
              "xrayDescription": {
                "en": "Splitting fractures of both medial and lateral condyles, with intact central diaphyseal shaft continuity.",
                "th": "รอยหักแยกของหัวกระดูกหน้าแข้งทั้งฝั่งนอกและฝั่งใน โดยส่วนแกนกระดูกตรงกลางยังคงต่อติดกับตัวแกน"
              }
            },
            {
              "type": "Schatzker VI",
              "name": {
                "en": "Schatzker Type VI (Metaphyseal-Diaphyseal Separation)",
                "th": "Schatzker Type VI (หักสองฝั่งร่วมกับแกนกระดูกหลุดแยก)"
              },
              "description": {
                "en": "Bicondylar fracture with COMPLETE DISSOCIATION between the metaphysis and diaphysis\nSevere comminution and extreme soft tissue trauma\nHighest complexity, highest rate of compartment syndrome and surgical complications",
                "th": "รอยหักสองฝั่ง ร่วมกับการหลุดแยกออกจากกันอย่างสมบูรณ์ระหว่างหัวกระดูก (Metaphysis) และแกนกระดูก (Diaphysis)\nกระดูกแตกละเอียดรุนแรงและเนื้อเยื่อได้รับบาดเจ็บรุนแรงที่สุด\nมีความซับซ้อนสูงสุด และเสี่ยงต่อภาวะ Compartment syndrome และการติดเชื้อสูงที่สุด"
              },
              "moi": {
                "en": "Extreme high-energy trauma (motor vehicle collisions, falls from height).",
                "th": "อุบัติเหตุพลังงานสูงรุนแรงสุดขีด (รถชนรุนแรง, ตกจากที่สูง)"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "NOT recommended.",
                  "th": "ไม่แนะนำอย่างยิ่ง"
                },
                "operative": {
                  "en": "MANDATORY STAGED SURGERY. Immediate joint-spanning external fixation and fasciotomy if compartment syndrome presents. Delayed definitive ORIF with dual locked plating or ring fixation (Ilizarov/Taylor Spatial Frame) once soft tissue heals.",
                  "th": "จำเป็นต้องผ่าตัดแบ่งระยะทันที ใส่โครงดามภายนอกชั่วคราว (External fixator) และผ่าตัดเปิดช่องกล้ามเนื้อ (Fasciotomy) หากมีภาวะ Compartment syndrome แล้วนัดมาผ่าตัดยึดแผ่นเหล็กคู่ (Dual locked plates) เมื่อผิวหนังยุบบวม"
                }
              },
              "illustrationId": "/images/schatzker/schatzker_6.png",
              "xrayDescription": {
                "en": "Complete separation of the articular condylar block from the shaft with transverse or comminuted subcondylar fracture line.",
                "th": "ชิ้นกระดูกข้อต่อถูกตัดขาดออกจากแกนกระดูกอย่างสิ้นเชิง โดยมีแนวกระดูกหักขวางหรือแตกละเอียดกั้นใต้หัวกระดูก"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "shaft",
      "name": {
        "en": "Tibial Shaft",
        "th": "ส่วนแกนกระดูกหน้าแข้ง (Shaft)"
      },
      "classifications": [
        {
          "system": "AO/OTA & Alignment Concept",
          "fullName": {
            "en": "Tibial Shaft Fracture Principles & Alignment Criteria",
            "th": "หลักการประเมินและเกณฑ์มุมเอียง Tibial Shaft Fracture"
          },
          "description": {
            "en": "Comprehensive clinical concept for Tibial Shaft Fractures (AO/OTA 42), covering acceptable alignment thresholds (Sarmiento criteria), compartment syndrome warnings, non-operative cast brace vs Intramedullary Nailing (IMN) indications.",
            "th": "แนวคิดหลักในการประเมิน Tibial Shaft Fracture (AO/OTA 42) รวมถึงเกณฑ์มุมเอียงที่ยอมรับได้ (Sarmiento criteria) การเฝ้าระวัง Compartment Syndrome และข้อชี้ขาดการรักษาระหว่างเฝือกดาม Sarmiento Cast กับการผ่าตัดตอกตะปูตาดหัวหน้าแข้ง (IMN)"
          },
          "concept": {
            "title": {
              "en": "Tibial Shaft Alignment & Management Concept",
              "th": "ตารางสรุปเกณฑ์มุมเอียงและแนวทางรักษา Tibial Shaft Fracture"
            },
            "showTable": true,
            "imageUrl": "/images/tibia/shaft_concept.png",
            "description": {
              "en": "Key clinical considerations for Tibial Shaft Fractures:\n\n1. Acceptable Alignment Criteria (Sarmiento Rules):\n   • Coronal (Varus/Valgus): <5° varus / valgus\n   • Sagittal (Anteroposterior): <10° anterior / posterior angulation\n   • Shortening: <10 mm (<1 cm length discrepancy)\n   • Rotation: <10° internal/external rotation\n   • Cortical Contact: >50% cortical surface contact\n\n2. Compartment Syndrome Vigilance:\n   • Tibial shaft is the #1 site in the human body for Acute Compartment Syndrome.\n   • Perform 5 Ps assessment (Pain out of proportion, Passive stretch pain, Paresthesia, Pallor, Pulselessness). Emergency Fasciotomy if Delta Pressure <30 mmHg.\n\n3. Treatment Gold Standard:\n   • Non-operative: Sarmiento Functional Cast/Bracing for closed, low-energy, well-aligned fractures.\n   • Surgical Gold Standard: Antegrade Reamed Intramedullary Nailing (IMN) for displaced, unstable, or open fractures.",
              "th": "หัวใจสำคัญทางคลินิกสำหรับ Tibial Shaft Fracture:\n\n1. เกณฑ์มุมเอียงที่ยอมรับได้ (Sarmiento Acceptable Alignment Rules):\n   • มุมเอียงซ้าย-ขวา (Varus/Valgus): < 5 องศา\n   • มุมเอียงหน้า-หลัง (Anteroposterior): < 10 องศา\n   • ความสั้นของขา (Shortening): < 10 มิลลิเมตร (< 1 ซม.)\n   • การบิดหมุน (Rotation): < 10 องศา\n   • การแตะกันของขอบกระดูก (Cortical contact): > 50%\n\n2. การเฝ้าระวัง Compartment Syndrome:\n   • Tibial shaft เป็นตำแหน่งที่เกิดภาวะความดันช่องกล้ามเนื้อสูง (Acute Compartment Syndrome) พบบ่อยที่สุดในร่างกาย\n   • ต้องตรวจประเมิน 5 Ps (ปวดรุนแรงเกินเหตุ, ปวดมากขณะยืดกล้ามเนื้อแบบ Passive, ชา, ซีด, คลำชีพจรไม่ได้) หาก Delta pressure < 30 mmHg ต้องผ่าตัดเปิดช่องกล้ามเนื้อ Fasciotomy ด่วน\n\n3. แนวทางการรักษาหลัก:\n   • รักษาแบบไม่ผ่าตัด: เฝือกดาม Sarmiento Cast สำหรับรอยหักปิด พลังงานต่ำ ที่มุมเอียงอยู่ในเกณฑ์\n   • ผ่าตัดมาตรฐานหลัก (Gold Standard): ผ่าตัดตอกตะปูยึดในโพรงกระดูก (Reamed Intramedullary Nailing - IMN)"
            }
          },
          "investigations": [
            {
              "name": "Full-Length AP & Lateral Tibia/Fibula Views",
              "details": {
                "en": "Full-length X-rays including both knee and ankle joints. Evaluates fracture pattern, alignment deformity, cortical contact, and associated fibular fracture level.",
                "th": "ภาพเอกซเรย์ขาความยาวเต็มรวมข้อเข่าและข้อเท้า เพื่อประเมินรูปแบบรอยหัก มุมเอียง เกณฑ์การติดกระดูก และรอยหักกระดูก Fibula"
              }
            },
            {
              "name": "Compartment Pressure Measurement (Stryker Needle)",
              "details": {
                "en": "Intracompartmental pressure measurement for all 4 leg compartments (Anterior, Lateral, Superficial Posterior, Deep Posterior). Delta Pressure = Diastolic BP - IMTP (<30 mmHg = Fasciotomy).",
                "th": "การวัดความดันช่องกล้ามเนื้อขาทั้ง 4 ช่อง โดยตรวจค่า Delta Pressure (ความดันโลหิตตัวล่าง Diastolic - ความดันช่องกล้ามเนื้อ) หากน้อยกว่า 30 mmHg ต้องผ่าตัด Fasciotomy"
              }
            }
          ],
          "types": [
            {
              "type": "Simple Fracture (42-A)",
              "name": {
                "en": "Simple Shaft Fracture (AO/OTA 42-A)",
                "th": "1. Simple Shaft Fracture (หักแนวขวาง/เฉียง/เกลียวชิ้นเดียว)"
              },
              "description": {
                "en": "Single fracture line (Spiral 42-A1, Oblique 42-A2, or Transverse 42-A3)\nLow-energy trauma\nHigh rate of union with Sarmiento cast if alignment criteria met",
                "th": "รอยหักชิ้นเดียวแนวเดียว (แบบเกลียว 42-A1, แบบเฉียง 42-A2 หรือแนวขวาง 42-A3)\nเกิดจากแรงพลังงานต่ำ\nโอกาสติดสูงหากใส่เฝือก Sarmiento Cast ตามเกณฑ์มุมเอียง"
              },
              "moi": {
                "en": "Torsional or low-energy bending force during fall or sports.",
                "th": "แรงบิดหมุนหรือแรงดัดพลังงานต่ำขณะล้มหรือเล่นกีฬา"
              },
              "treatment": {
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED FOR WELL-ALIGNED CLOSED FRACTURES. Long leg cast for 2-4 weeks followed by Sarmiento functional cast brace with weight-bearing.",
                  "th": "แนะนำสำหรับรอยหักปิดที่มุมเอียงอยู่ในเกณฑ์ ใส่เฝือกยาว 2-4 สัปดาห์ แล้วเปลี่ยนเป็น Sarmiento Cast เดินลงน้ำหนักได้"
                },
                "operative": {
                  "en": "Indicated if displacement exceeds Sarmiento criteria. Reamed Intramedullary Nailing (IMN).",
                  "th": "ผ่าตัดตอกตะปู IMN หากมุมเอียงเกินเกณฑ์ที่กำหนด"
                }
              },
              "xrayDescription": {
                "en": "Single spiral or transverse fracture line passing through the tibial shaft with intact or simple fibular fracture.",
                "th": "เห็นรอยหักชิ้นเดียวพาดผ่านแกนกระดูกหน้าแข้ง"
              },
              "illustrationId": "/images/tibia/shaft_simple.png"
            },
            {
              "type": "Wedge Fracture (42-B)",
              "name": {
                "en": "Wedge / Butterfly Fracture (AO/OTA 42-B)",
                "th": "2. Wedge / Butterfly Fracture (หักมีชิ้นกระดูกปีกผีเสื้อ)"
              },
              "description": {
                "en": "Fracture with 3 fragments (main proximal/distal shafts + third butterfly wedge fragment)\nModerate-energy trauma\nCortical contact remains partially intact",
                "th": "รอยหักที่มีชิ้นกระดูก 3 ชิ้น (กระดูกชิ้นบน ชิ้นล่าง และชิ้นปีกผีเสื้อ Wedge)\nเกิดจากแรงพลังงานปานกลาง\nขอบกระดูกยังคงมีส่วนแตะกันบางส่วน"
              },
              "moi": {
                "en": "Direct bending force or high-energy impact.",
                "th": "แรงดัดโดยตรงหรือแรงกระแทกพลังงานปานกลาง"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "Indicated only if non-displaced and stable.",
                  "th": "พิจารณาเฉพาะกรณีรอยหักไม่เคลื่อนและมั่นคง"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT (GOLD STANDARD). Antegrade Reamed Intramedullary Nailing (IMN) with interlocking screws.",
                  "th": "แนะนำผ่าตัดมาตรฐานหลัก (Gold Standard) ด้วยการตอกตะปูยึดในโพรงกระดูก Reamed IMN"
                }
              },
              "xrayDescription": {
                "en": "Butterfly wedge fragment at the fracture site on AP or lateral views.",
                "th": "เห็นชิ้นกระดูกสามเหลี่ยมปีกผีเสื้อแยกออกจากแกนกระดูก"
              },
              "illustrationId": "/images/tibia/shaft_wedge.png"
            },
            {
              "type": "Comminuted / Segmental (42-C)",
              "name": {
                "en": "Comminuted / Segmental Fracture (AO/OTA 42-C)",
                "th": "3. Comminuted / Segmental (หักแตกละเอียด/หักสองระดับเป็นท่อน)"
              },
              "description": {
                "en": "Complex multi-fragmentary or two-level segmental shaft fracture\nHigh-energy trauma (motorcycle accident, pedestrian hit by car)\nHigh risk of open fracture, soft tissue necrosis, and Compartment Syndrome",
                "th": "รอยหักแตกละเอียดหลายชิ้น หรือหักสองระดับเป็นท่อน (Segmental)\nเกิดจากอุบัติเหตุพลังงานสูงมาก (รถชน, ตกที่สูง)\nความเสี่ยงสูงมากต่อกระดูกหักแผลเปิด แผลเน่า และ Compartment Syndrome"
              },
              "moi": {
                "en": "High-energy direct crash or high-fall trauma.",
                "th": "แรงกระแทกโดยตรงพลังงานสูงจากอุบัติเหตุจราจร"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "CONTRAINDICATED. Results in severe malunion, nonunion, and leg length shortening.",
                  "th": "ห้ามรักษาแบบไม่ผ่าตัดเด็ดขาด ทำให้กระดูกไม่ติด ขาสั้นผิดรูปถาวร"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. Immediate Reamed Intramedullary Nailing (IMN). If open fracture or severe soft tissue swelling: Temporary Span External Fixation followed by staged IMN.",
                  "th": "แนะนำผ่าตัดตอกตะปู IMN ด่วน (หากเป็นแผลเปิดหรือขาลอยเต่ง ให้ผ่าตัดยึดตรึงภายนอก External Fixator ชั่วคราวก่อน)"
                }
              },
              "xrayDescription": {
                "en": "Multiple comminuted fragments or isolated segmental shaft block on full-length leg films.",
                "th": "เห็นชิ้นกระดูกแตกละเอียดหลายชิ้นหรือแยกออกเป็นท่อนสองระดับ"
              },
              "illustrationId": "/images/tibia/shaft_comminuted.png"
            }
          ]
        }
      ]
    },
    {
      "id": "distal",
      "name": {
        "en": "Ankle / Distal Malleoli",
        "th": "ข้อเท้าและตาตุ่ม (Ankle / Malleoli)"
      },
      "classifications": [
        {
          "system": "Danis-Weber",
          "fullName": {
            "en": "Danis-Weber Ankle Fracture Classification",
            "th": "การจำแนกกระดูกข้อเท้าหักแบบ Danis-Weber"
          },
          "description": {
            "en": "Classification of distal fibular fractures based on the fracture level relative to the syndesmosis, reflecting ankle joint instability.",
            "th": "ระบบจำแนกกระดูกตาตุ่มนอก (Fibula) หักตามระดับรอยหักเทียบกับเส้นเอ็นยึดหน้าแข้ง (Syndesmosis) ซึ่งสะท้อนถึงระดับความไม่มั่นคงของข้อเท้า"
          },
          "concept": {
            "title": {
              "en": "Danis-Weber Ankle Concept (Syndesmotic Integrity & Stability)",
              "th": "แนวคิดการจำแนก Danis-Weber (ความสมบูรณ์ของเอ็นยึด Syndesmosis)"
            },
            "description": {
              "en": "The Danis-Weber system classifies ankle fractures by the level of the fibular fracture relative to the syndesmosis:\n• Weber A (Infrasyndesmotic): Fracture below syndesmosis. Syndesmosis INTACT -> Stable -> Conservative treatment.\n• Weber B (Transsyndesmotic): Fracture at joint level. Syndesmosis torn in ~50%. Stability depends on Medial Clear Space (<4mm = Conservative, >4mm = ORIF).\n• Weber C (Suprasyndesmotic): Fracture above syndesmosis. Syndesmosis TOTALLY TORN -> Unstable -> REQUIRES ORIF + Syndesmotic Screw Fixation (Always check full-length X-ray for Maisonneuve!).",
              "th": "ระบบ Danis-Weber จำแนกข้อเท้าหักตามระดับรอยหักกระดูก Fibula เทียบกับเส้นเอ็นยึด Syndesmosis:\n• Weber A (Infrasyndesmotic): รอยหักต่ำกว่าระดับข้อเท้า -> เส้นเอ็น Syndesmosis สมบูรณ์ดี -> มั่นคง -> รักษาแบบไม่ผ่าตัด\n• Weber B (Transsyndesmotic): รอยหักระดับเดียวกับข้อเท้า -> เอ็น Syndesmosis ฉีกขาด ~50% -> ความมั่นคงขึ้นกับ Medial Clear Space (<4มม. ใส่เฝือก, >4มม. ผ่าตัด ORIF)\n• Weber C (Suprasyndesmotic): รอยหักสูงกว่าข้อเท้า -> เอ็น Syndesmosis ฉีกขาดสมบูรณ์ 100% -> ขาดความมั่นคงอย่างรุนแรง -> จำเป็นต้องผ่าตัด ORIF + ใส่สกรูยึด Syndesmosis (ต้องถ่าย X-ray ขาทั้งเส้นเพื่อตรวจหา Maisonneuve fracture เสมอ!)"
            }
          },
          "investigations": [
            {
              "name": "AP Ankle View",
              "details": {
                "en": "Anteroposterior view of the ankle. Evaluates distal fibular fracture line, medial malleolus, and superior joint space.",
                "th": "ภาพเอกซเรย์ข้อเท้าท่าหน้าหลัง (AP) เพื่อประเมินแนวกระดูกตาตุ่มนอกหัก ตาตุ่มด้านใน (Medial malleolus) และระยะห่างช่องข้อด้านบน"
              }
            },
            {
              "name": "Mortise View (15-20° Internal Rotation)",
              "details": {
                "en": "True AP view of the ankle joint taken with 15-20° internal rotation. Gold standard to measure medial clear space (>4mm = deltoid disruption) and tibiofibular clear space (<6mm = syndesmotic injury).",
                "th": "ภาพเอกซเรย์ข้อเท้าท่า Mortise ถ่ายโดยหมุนข้อเท้าเข้าด้านใน 15-20 องศา เป็นมาตรฐานหลักในการวัดช่องว่าง Medial clear space (>4มม. แสดงถึงเอ็น Deltoid ฉีกขาด) และ Tibiofibular clear space"
              }
            },
            {
              "name": "Lateral Ankle View",
              "details": {
                "en": "Lateral view of the ankle. Assesses posterior malleolus fragment size, anterior/posterior talar translation, and fibular shortening/rotation.",
                "th": "ภาพเอกซเรย์ข้อเท้าท่าด้านข้าง (Lateral) เพื่อประเมินขนาดชิ้นกระดูกตาตุ่มหลัง (Posterior malleolus) การเลื่อนของกระดูก Talus และความสั้น/บิดหมุนของกระดูก Fibula"
              }
            }
          ],
          "types": [
            {
              "type": "Weber A",
              "name": {
                "en": "Weber A (Infrasyndesmotic)",
                "th": "Weber A (หักต่ำกว่าระดับ Syndesmosis)"
              },
              "description": {
                "en": "Transverse fibular fracture below the level of the ankle syndesmosis\nSyndesmosis and Deltoid ligament remain intact\nAnkle joint is stable\nMay be associated with vertical oblique medial malleolus fracture",
                "th": "รอยหักแนวขวางของกระดูกตาตุ่มนอก (Fibula) ต่ำกว่าระดับเส้นเอ็นยึด Syndesmosis\nเส้นเอ็น Syndesmosis และเอ็น Deltoid ด้านในสมบูรณ์ไม่ฉีกขาด\nข้อเท้ามีความมั่นคงสูง\nอาจพบร่วมกับกระดูกตาตุ่มใน (Medial malleolus) หักแนวเฉียงชี้ขึ้น"
              },
              "moi": {
                "en": "Supination-Adduction (SAD) mechanism.",
                "th": "การหงายข้อเท้าพร้อมหุบเข้าด้านใน (Supination-Adduction)"
              },
              "treatment": {
                "preferred": "conservative",
                "conservative": {
                  "en": "Indicated for isolated Type A with intact medial structures. Short arm walking cast or CAM boot for 4-6 weeks with early weight bearing as tolerated.",
                  "th": "แนะนำสำหรับ Weber A เดี่ยวๆ ที่โครงสร้างด้านในสมบูรณ์ ใส่เฝือกสั้นเดินได้ (Short leg walking cast) หรือรองเท้าดามข้อเท้า (CAM boot) นาน 4-6 สัปดาห์ ลงน้ำหนักได้ทันทีตามทนได้"
                },
                "operative": {
                  "en": "Indicated only if associated displaced medial malleolus fracture or vertical oblique medial malleolus requires ORIF with tension band wiring or screws.",
                  "th": "ผ่าตัดเฉพาะกรณีที่มีกระดูกตาตุ่มใน (Medial malleolus) หักเคลื่อนร่วมด้วย ต้องผ่าตัด ORIF ด้วยสกรูหรือ Tension band wiring"
                }
              },
              "illustrationId": "/images/weber/weber_a.png",
              "xrayDescription": {
                "en": "Transverse avulsion fracture line of lateral malleolus at or below the talar dome. Medial clear space is normal (<4mm).",
                "th": "รอยหักขวางกะเทาะหลุดตรงตาตุ่มนอกที่ระดับหรือต่ำกว่าขอบบนกระดูก Talus ระยะช่องว่าง Medial clear space ปกติ (<4มม.)"
              }
            },
            {
              "type": "Weber B",
              "name": {
                "en": "Weber B (Transsyndesmotic)",
                "th": "Weber B (หักระดับเดียวกับ Syndesmosis)"
              },
              "description": {
                "en": "Spiral or oblique fibular fracture starting at the level of syndesmosis extending proximally\nSyndesmosis is partially or completely torn in 50% of cases\nStability depends on medial status (Deltoid ligament or Medial malleolus fracture)\nMedial Clear Space >4mm indicates high instability",
                "th": "รอยหักแบบเกลียวหรือเฉียงของกระดูกตาตุ่มนอก เริ่มต้นที่ระดับ Syndesmosis พาดขึ้นด้านหลัง\nเอ็น Syndesmosis อาจฉีกขาดบางส่วนหรือทั้งหมดพบได้ประมาณ 50%\nความมั่นคงขึ้นอยู่กับโครงสร้างด้านใน (เอ็น Deltoid หรือตาตุ่มในหัก)\nหากระยะ Medial Clear Space > 4 มม. แสดงว่าข้อเท้าไม่มั่นคงอย่างยิ่ง"
              },
              "moi": {
                "en": "Supination-External Rotation (SER) mechanism (most common pattern, ~60-70%).",
                "th": "การหงายข้อเท้าพร้อมหมุนเท้าออกด้านนอก (Supination-External Rotation - พบบ่อยที่สุด 60-70%)"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "Indicated ONLY for non-displaced fibular fracture WITH intact medial structures (Medial Clear Space <4mm on stress view, no tenderness). Non-weight-bearing cast for 6 weeks.",
                  "th": "พิจารณาเฉพาะกรณีรอยหักไม่เคลื่อน และโครงสร้างด้านในสมบูรณ์ดี (Medial clear space <4มม. และไม่เจ็บด้านใน) ใส่เฝือกไม่ลงน้ำหนักนาน 6 สัปดาห์"
                },
                "operative": {
                  "en": "Indicated for displaced fibula (>2mm), medial clear space widening (>4mm), or medial malleolus fracture. Open reduction and internal fixation (ORIF) with one-third tubular plate + lag screw. Fix syndesmosis with screw if unstable after ORIF.",
                  "th": "แนะนำสำหรับกระดูกเคลื่อน (>2มม.), ช่อง Medial clear space กว้าง (>4มม.) หรือมีตาตุ่มในหัก ผ่าตัด ORIF ด้วยแผ่นเหล็ก One-third tubular plate ร่วมกับ Lag screw (ยึด Syndesmotic screw หากตรวจพบความไม่มั่นคง)"
                }
              },
              "illustrationId": "/images/weber/weber_b.png",
              "xrayDescription": {
                "en": "Oblique or spiral fracture of distal fibula starting at the syndesmosis. Check for medial clear space widening (>4mm) on Mortise view.",
                "th": "รอยหักเฉียงหรือเกลียวที่ตาตุ่มนอกเริ่มจากระดับ Syndesmosis ตรวจดูการขยายกว้างของ Medial clear space (>4มม.) ในท่า Mortise view"
              }
            },
            {
              "type": "Weber C",
              "name": {
                "en": "Weber C (Suprasyndesmotic)",
                "th": "Weber C (หักสูงกว่าระดับ Syndesmosis)"
              },
              "description": {
                "en": "Fibular fracture above the level of the ankle syndesmosis\nSyndesmosis is COMPLETELY TORN\nDeltoid ligament or Medial malleolus fracture is ALWAYS present\nAnkle joint is ALWAYS UNSTABLE\nIncludes Maisonneuve fracture (proximal fibular neck fracture)",
                "th": "รอยหักของกระดูกตาตุ่มนอกอยู่สูงกว่าระดับเส้นเอ็นยึด Syndesmosis\nเส้นเอ็น Syndesmosis ฉีกขาดสมบูรณ์ 100%\nพบร่วมกับเอ็น Deltoid หรือตาตุ่มใน (Medial malleolus) หัก **ทุกราย**\nข้อเท้า **ขาดความมั่นคงอย่างรุนแรงทุกราย**\nรวมถึงการหักแบบ Maisonneuve (กระดูก Fibula หักสูงใกล้ข้อเข่า)"
              },
              "moi": {
                "en": "Pronation-External Rotation (PER) or Pronation-Abduction (PAB) mechanism.",
                "th": "การคว่ำข้อเท้าพร้อมหมุนเท้าออกด้านนอก (Pronation-External Rotation)"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "CONTRAINDICATED. High rate of malunion, chronic syndesmotic instability, and rapid onset post-traumatic arthritis.",
                  "th": "ห้ามรักษาแบบไม่ผ่าตัดเด็ดขาด เสี่ยงสูงต่อกระดูกติดผิดรูป ข้อเท้าหลุดหลวมถาวร และข้อเสื่อมอย่างรวดเร็ว"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. Mandatory ORIF of fibula + ORIF of medial malleolus + mandatory syndesmotic screw fixation (1 or 2 quadricortical/tricortical screws placed 2-3 cm above joint line).",
                  "th": "แนะนำให้ผ่าตัดรักษามาตรฐานหลัก ผ่าตัด ORIF กระดูก Fibula + ตาตุ่มใน + ยึดตรึงเอ็น Syndesmosis ด้วยสกรู (Syndesmotic screw 1-2 ตัว เหนือระดับข้อเท้า 2-3 ซม.)"
                }
              },
              "illustrationId": "/images/weber/weber_c.png",
              "xrayDescription": {
                "en": "High fibular fracture (suprasyndesmotic). Marked widening of Medial Clear Space (>4mm) and Tibiofibular Clear Space (>6mm). Always take full-length Tibia/Fibula film to rule out Maisonneuve fracture.",
                "th": "รอยหักกระดูก Fibula อยู่สูงกว่าข้อเท้า เห็นช่องว่าง Medial Clear Space และ Tibiofibular Clear Space กว้างอย่างชัดเจน **ต้องถ่ายเอกซเรย์ขาความยาวเต็มเสมอเพื่อตรวจหา Maisonneuve fracture**"
              }
            }
          ]
        },
        {
          "system": "Lauge-Hansen",
          "fullName": {
            "en": "Lauge-Hansen Ankle Fracture Classification",
            "th": "การจำแนกกระดูกข้อเท้าหักตามกลไกการบาดเจ็บ Lauge-Hansen"
          },
          "description": {
            "en": "Classification based on foot position (Supination or Pronation) and deforming force direction (External Rotation, Adduction, Abduction) at time of injury, predicting sequential stage damage to ligaments and malleoli.",
            "th": "ระบบจำแนกกระดูกข้อเท้าหักตามท่าทางของเท้าและทิศทางของแรงบิดขณะบาดเจ็บ แสดงลำดับขั้นความเสียหายรุนแรงจากเอ็นไปจนถึงกระดูกตาตุ่มทวีคูณ"
          },
          "concept": {
            "title": {
              "en": "Lauge-Hansen Ankle Mechanism Concept (2 Words Rule)",
              "th": "แนวคิดการจำแนก Lauge-Hansen (กฎ 2 คำ: ท่าเท้า + ทิศทางแรงบิด)"
            },
            "imageUrl": "/images/lauge_hansen/concept.png",
            "description": {
              "en": "The Lauge-Hansen system predicts sequential ankle damage based on a 2-word naming rule:\n• Word 1 = Foot Position at time of impact (Supination vs Pronation)\n• Word 2 = Direction of Deforming Force (External Rotation, Adduction, Abduction)\n\n4 Main Categories & Clinical Features:\n1. SER (Supination-External Rotation, ~60-70%): Starts AITFL -> Fibula Spiral (Weber B) -> PITFL -> Medial Malleolus/Deltoid.\n2. SAD (Supination-Adduction, ~15-20%): Starts Fibula Avulsion (Weber A) -> Vertical Medial Malleolus (Push-off).\n3. PER (Pronation-External Rotation, ~10%): Starts Medial Malleolus/Deltoid -> AITFL -> High Fibula (Weber C / Maisonneuve) -> PITFL.\n4. PAB (Pronation-Abduction, ~5%): Starts Medial Malleolus/Deltoid -> AITFL/PITFL -> Suprasyndesmotic Bending Butterfly Fibula (Weber C).",
              "th": "ระบบ Lauge-Hansen ทำนายลำดับความเสียหายจากเอ็นถึงกระดูกโดยใช้กฎคำสองคำ:\n• คำที่ 1 = ท่าทางของเท้าขณะเกิดเหตุ (Supination - หงายเท้า vs Pronation - คว่ำเท้า)\n• คำที่ 2 = ทิศทางของแรงบิดกระทำ (External Rotation - บิดออกนอก, Adduction - หุบเข้าใน, Abduction - กางออกนอก)\n\n4 กลุ่มหลักและรูปแบบทางคลินิก:\n1. SER (Supination-External Rotation - พบบ่อยสุด ~60-70%): เริ่มที่เอ็น AITFL -> Fibula หักเกลียว (Weber B) -> เอ็น PITFL -> ตาตุ่มใน/Deltoid\n2. SAD (Supination-Adduction - ~15-20%): เริ่มที่ Fibula หักขวางต่ำ (Weber A) -> ตาตุ่มในหักแนวตั้ง (Push-off)\n3. PER (Pronation-External Rotation - ~10%): เริ่มที่ตาตุ่มใน/Deltoid -> เอ็น AITFL -> Fibula หักสูง (Weber C / Maisonneuve) -> PITFL\n4. PAB (Pronation-Abduction - ~5%): เริ่มที่ตาตุ่มใน/Deltoid -> เอ็นยึด Syndesmosis -> Fibula หักขวาง/ปีกผีเสื้อเหนือข้อ (Weber C)"
            }
          },
          "investigations": [
            {
              "name": "AP Ankle View",
              "details": {
                "en": "Evaluates medial and lateral malleolar fracture lines, joint space symmetry, and tibiofibular overlap.",
                "th": "ประเมินแนวกระดูกตาตุ่มด้านในและด้านนอกหัก ความสมมาตรของช่องข้อเท้า และการทับซ้อนของกระดูกหน้าแข้ง"
              }
            },
            {
              "name": "Mortise View (15-20° Internal Rotation)",
              "details": {
                "en": "True AP view of ankle joint. Gold standard to measure Medial Clear Space (>4mm indicates deltoid tear) and Tibiofibular Clear Space (<6mm indicates syndesmotic rupture).",
                "th": "ภาพเอกซเรย์ท่า Mortise ถ่ายหมุนเท้าเข้าด้านใน 15-20 องศา มาตรฐานหลักในการวัดระยะช่องว่าง Medial Clear Space (>4มม. = เอ็น Deltoid ขาด) และช่องว่าง Syndesmosis"
              }
            },
            {
              "name": "Lateral Ankle View",
              "details": {
                "en": "Evaluates posterior malleolus fracture (Volkmann fragment), fibular fracture obliquity/spiral pattern, and sagittal talar dislocation.",
                "th": "ประเมินชิ้นกระดูกตาตุ่มหลัง (Posterior malleolus), แนงหักเฉียงเกลียวของกระดูก Fibula และการเคลื่อนหลุดไปด้านหลังของกระดูก Talus"
              }
            }
          ],
          "types": [
            {
              "type": "SER I",
              "name": {
                "en": "SER Stage I (AITFL Tear)",
                "th": "SER I (เอ็นยึดกระดูกหน้าแข้งด้านหน้า AITFL ฉีกขาด)"
              },
              "description": {
                "en": "Rupture of the Anterior Inferior Tibiofibular Ligament (AITFL) or avulsion of its insertion\nFoot is in Supination with External Rotation force\nNo bone fracture visible yet\nElbow/Ankle remains stable",
                "th": "เอ็นยึดกระดูกหน้าแข้งและตาตุ่มนอกด้านหน้า (AITFL) ฉีกขาด\nเกิดขณะเท้าหงายและถูกบิดหมุนออกด้านนอก\nยังไม่พบรอยกระดูกหักชัดเจนในเอกซเรย์\nข้อเท่ายังมีความมั่นคงดี"
              },
              "moi": {
                "en": "Supination of foot with external rotation strain.",
                "th": "เท้าอยู่ในท่าหงายแล้วถูกแรงบิดหมุนหมุนออกด้านนอก"
              },
              "treatment": {
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED TREATMENT. Short leg walking boot or cast for 2-3 weeks for comfort.",
                  "th": "แนะนำรักษาแบบไม่ผ่าตัด ใส่เฝือกสั้นชั่วคราว 2-3 สัปดาห์บรรเทาอาการ"
                },
                "operative": {
                  "en": "Not indicated.",
                  "th": "ไม่มีข้อบ่งชี้ผ่าตัด"
                }
              },
              "illustrationId": "/images/lauge_hansen/ser_1.png",
              "xrayDescription": {
                "en": "Normal bone alignment; subtle widening of AITFL space on ultrasound/MRI.",
                "th": "เอกซเรย์กระดูกเรียงตัวปกติ"
              }
            },
            {
              "type": "SER II",
              "name": {
                "en": "SER Stage II (Distal Fibula Spiral Fracture - Classic Weber B)",
                "th": "SER II (กระดูกตาตุ่มนอกหักแนวเฉียงเกลียว - Weber B)"
              },
              "description": {
                "en": "Short spiral or oblique fracture of the distal fibula starting at joint line running proximoposteriorly\nClassic Weber B pattern\nMedial structures remain intact (Deltoid ligament & Medial Malleolus intact)\nSTABLE ankle if Medial Clear Space < 4 mm",
                "th": "กระดูกตาตุ่มนอก (Fibula) หักเป็นเกลียวหรือแนวเฉียงเริ่มต้นที่ระดับเส้นข้อเท้าพาดขึ้นด้านหลัง\nตรงกับรูปแบบ Weber B คลาสสิก\nโครงสร้างฝั่งด้านในยังสมบูรณ์ดี (เอ็น Deltoid และตาตุ่มในไม่บาดเจ็บ)\nข้อเท่ายังมั่นคงดีหากระยะ Medial Clear Space < 4 มม."
              },
              "moi": {
                "en": "Continued external rotation force on supinated foot.",
                "th": "แรงบิดหมุนออกด้านนอกอย่างต่อเนื่องขณะเท้าหงาย"
              },
              "treatment": {
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED IF UN-DISPLACED AND MEDIAL CLEAR SPACE <4mm. Short leg walking cast/boot for 6 weeks.",
                  "th": "แนะนำหากกระดูกไม่เคลื่อนและช่อง Medial Clear Space <4มม. ใส่เฝือกสั้น 6 สัปดาห์"
                },
                "operative": {
                  "en": "Indicated if displaced >2mm or stress positive. ORIF with plate and lag screw.",
                  "th": "ผ่าตัด ORIF ด้วยแผ่นเหล็กดามหากกระดูกเคลื่อน >2มม."
                }
              },
              "illustrationId": "/images/lauge_hansen/ser_2.png",
              "xrayDescription": {
                "en": "Spiral fracture of lateral malleolus at joint line level on lateral view.",
                "th": "เห็นรอยหักเกลียวที่ตาตุ่มนอกในท่าด้านข้าง"
              }
            },
            {
              "type": "SER III",
              "name": {
                "en": "SER Stage III (Posterior Malleolus Fracture)",
                "th": "SER III (กระดูกตาตุ่มหลังหัก - Volkmann Fragment)"
              },
              "description": {
                "en": "Avulsion of Posterior Malleolus (Volkmann's fragment) or rupture of PITFL\nInvolves posterior lip of distal tibia\nIncreased joint instability",
                "th": "กระดูกตาตุ่มหลัง (Posterior Malleolus) ถูกดึงกะเทาะหักหลุดออก (Volkmann fragment) หรือเอ็น PITFL ขาด\nการบาดเจ็บลุกลามถึงขอบหลังของกระดูกหน้าแข้ง\nเพิ่มความไม่มั่นคงของข้อเท้า"
              },
              "moi": {
                "en": "Further progression of external rotation force.",
                "th": "แรงบิดหมุนออกนอกลุกลามต่อเนื่อง"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "Indicated ONLY if non-displaced and posterior malleolus fragment < 25% of joint surface.",
                  "th": "พิจารณาเฉพาะกรณีไม่เคลื่อนและชิ้นตาตุ่มหลัง < 25% ของผิวข้อ"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. ORIF of fibula plate + postero-anterior screw fixation for posterior malleolus if >25% of articular surface.",
                  "th": "แนะนำผ่าตัด ORIF ยึดแผ่นเหล็กตาตุ่มนอกร่วมกับยึดสกรูตาตุ่มหลังหากชิ้นใหญ่ >25%"
                }
              },
              "illustrationId": "/images/lauge_hansen/ser_3.png",
              "xrayDescription": {
                "en": "Posterior malleolar triangular fragment visible on lateral view.",
                "th": "เห็นชิ้นกระดูกสามเหลี่ยมตาตุ่มหลังหักในท่าด้านข้าง"
              }
            },
            {
              "type": "SER IV",
              "name": {
                "en": "SER Stage IV (Medial Malleolus Fracture / Deltoid Rupture)",
                "th": "SER IV (กระดูกตาตุ่มในหัก / เอ็น Deltoid ขาด - Bimalleolar Equivalent)"
              },
              "description": {
                "en": "Transverse Medial Malleolus fracture OR complete Deltoid Ligament rupture\nComplete ring disruption causing HIGHLY UNSTABLE ankle (Bimalleolar / Trimalleolar fracture)\nTalar tilt and gross lateral shift of talus",
                "th": "กระดูกตาตุ่มด้านใน (Medial Malleolus) หักแนวขวาง หรือเอ็น Deltoid ฉีกขาดสมบูรณ์\nวงแหวนความมั่นคงของข้อเท้าถูกตัดขาดสมบูรณ์ ข้อเท้าหลุดไม่มั่นคงอย่างยิ่ง (Bimalleolar / Trimalleolar fracture)\nกระดูก Talus เอียงและเคลื่อนหลุดออกด้านข้าง"
              },
              "moi": {
                "en": "Maximum external rotation force completing full circle damage.",
                "th": "แรงบิดหมุนออกด้านนอกขั้นสูงสุดทำลายวงแหวนข้อเท้าครบวง"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "CONTRAINDICATED. High failure rate and early post-traumatic arthritis.",
                  "th": "ห้ามใช้การรักษาด้วยวิธีนี้ เสี่ยงข้อศอก/ข้อเท้าพิการเรื้อรัง"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. Mandatory ORIF of lateral malleolus plate + medial malleolus screw fixation / deltoid exploration ± posterior malleolus screw.",
                  "th": "แนะนำผ่าตัดมาตรฐาน (Mandatory ORIF) ดามแผ่นเหล็กตาตุ่มนอก + ยึดสกรูตาตุ่มด้านใน"
                }
              },
              "illustrationId": "/images/lauge_hansen/ser_4.png",
              "xrayDescription": {
                "en": "Bimalleolar/Trimalleolar fracture with wide Medial Clear Space >4mm and lateral talar shift.",
                "th": "รอยหักตาตุ่มคู่หรือสามตาตุ่ม ช่อง Medial Clear Space ถ่างกว้าง >4มม."
              }
            },
            {
              "type": "SA I",
              "name": {
                "en": "SA Stage I (Transverse Fibula Avulsion / Weber A)",
                "th": "SA I (กระดูกตาตุ่มนอกหักแนวขวางต่ำกว่าข้อ - Weber A)"
              },
              "description": {
                "en": "Transverse avulsion fracture of distal fibula at or below joint line (Classic Weber A)\nOr rupture of lateral collateral ligaments\nMedial structures remain unaffected at this stage",
                "th": "กระดูกตาตุ่มนอก (Fibula) หักแนวขวางกะเทาะหลุดที่ระดับหรือต่ำกว่าเส้นข้อเท้า (Weber A คลาสสิก)\nหรือเอ็นยึดข้อเท้าด้านนอกฉีกขาด\nโครงสร้างฝั่งด้านในยังไม่ได้รับบาดเจ็บในระยะนี้"
              },
              "moi": {
                "en": "Supination of foot combined with adduction (inversion) force.",
                "th": "เท้าอยู่ในท่าหงายแล้วถูกแรงบิดพับหุบเข้าด้านใน (Inversion)"
              },
              "treatment": {
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED TREATMENT. Short leg walking cast or boot for 4-6 weeks.",
                  "th": "แนะนำรักษาแบบไม่ผ่าตัด ใส่เฝือกสั้นเดินได้ 4-6 สัปดาห์"
                },
                "operative": {
                  "en": "Indicated only if widely displaced >2mm.",
                  "th": "ผ่าตัดเฉพาะกรณีชิ้นกระดูกเคลื่อนตัวมาก >2มม."
                }
              },
              "illustrationId": "/images/lauge_hansen/sa_1.png",
              "xrayDescription": {
                "en": "Transverse fracture line of distal fibula below talar dome.",
                "th": "รอยหักแนวขวางของตาตุ่มนอกต่ำกว่าระดับขอบบนกระดูก Talus"
              }
            },
            {
              "type": "SA II",
              "name": {
                "en": "SA Stage II (Vertical Medial Malleolus Fracture)",
                "th": "SA II (กระดูกตาตุ่มในหักแนวตั้ง - Push-off Vertical Fracture)"
              },
              "description": {
                "en": "Vertical oblique fracture of the Medial Malleolus driven by talar push-off\nOften accompanied by medial anteromedial tibial plafond marginal impaction\nRequires rigid lag screw / anti-glide plate fixation",
                "th": "กระดูกตาตุ่มด้านใน (Medial Malleolus) หักเป็นแนวตั้งชี้ขึ้นจากการถูกกระดูก Talus อัดกระแทก (Push-off)\nมักพบรอยกระดูกยุบตัวบริเวณมุมหน้าด้านในของเพดานข้อเท้า (Medial marginal impaction)\nจำเป็นต้องยึดด้วยสกรูแนวขวาง หรือแผ่นเหล็กดามกันไถล (Anti-glide plate)"
              },
              "moi": {
                "en": "Continued adduction force driving talus medially into medial malleolus.",
                "th": "แรงบิดหุบเข้าด้านในอย่างรุนแรงกดกระดูก Talus กระแทกตาตุ่มในอย่างจัง"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "CONTRAINDICATED if displaced. Causes joint step-off and early medial wear.",
                  "th": "ไม่แนะนำหากกระดูกเคลื่อน ทำให้ผิวข้อเกยและข้อเสื่อมเร็ว"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. Open reduction, elevation of impacted joint fragment + ORIF with horizontal lag screws or medial anti-glide plate.",
                  "th": "แนะนำผ่าตัด ORIF งัดชิ้นกระดูกยุบตัวขึ้นมาแล้วยึดด้วยสกรูเกลียวแนวขวางหรือแผ่นเหล็ก Anti-glide plate"
                }
              },
              "illustrationId": "/images/lauge_hansen/sa_2.png",
              "xrayDescription": {
                "en": "Vertical oblique fracture line of medial malleolus running proximally from joint corner.",
                "th": "เห็นรอยหักแนวตั้งของตาตุ่มในแทงขึ้นด้านบนจากมุมข้อเท้า"
              }
            },
            {
              "type": "PER I",
              "name": {
                "en": "PER Stage I (Medial Malleolus Fracture / Deltoid Rupture)",
                "th": "PER I (กระดูกตาตุ่มในหักแนวขวาง / เอ็น Deltoid ขาด)"
              },
              "description": {
                "en": "Transverse fracture of Medial Malleolus OR rupture of Deltoid ligament\nFoot is in Pronation with External Rotation force\nFirst structures to fail under tension on medial side",
                "th": "กระดูกตาตุ่มด้านในหักแนวขวาง หรือเอ็น Deltoid ฉีกขาด\nเกิดขณะเท้าอยู่ในท่าคว่ำแล้วถูกแรงบิดหมุนออกด้านนอก\nเป็นโครงสร้างฝั่งด้านในที่ตึงขาดเป็นอันดับแรก"
              },
              "moi": {
                "en": "Pronation of foot with external rotation force.",
                "th": "เท้าอยู่ในท่าคว่ำแล้วถูกแรงบิดหมุนออกด้านนอก"
              },
              "treatment": {
                "preferred": "conservative",
                "conservative": {
                  "en": "Indicated ONLY if isolated nondisplaced medial malleolus with intact fibula.",
                  "th": "พิจารณาเฉพาะกรณีตาตุ่มในหักไม่เคลื่อนเพียงอย่างเดียว"
                },
                "operative": {
                  "en": "Indicated if displaced >2mm or part of unstable complex. ORIF with partially threaded cancellous screws.",
                  "th": "ผ่าตัด ORIF ยึดด้วยสกรูเกลียวหากเคลื่อน >2มม."
                }
              },
              "illustrationId": "/images/lauge_hansen/per_1.png",
              "xrayDescription": {
                "en": "Transverse medial malleolus fracture line at joint level or widened medial clear space.",
                "th": "เห็นรอยหักแนวขวางที่ตาตุ่มใน หรือระยะ Medial clear space ถ่างกว้าง"
              }
            },
            {
              "type": "PER II",
              "name": {
                "en": "PER Stage II (AITFL & Interosseous Membrane Tear)",
                "th": "PER II (เอ็นยึดหน้าแข้ง AITFL และผังผืดกลางฉีกขาด)"
              },
              "description": {
                "en": "Rupture of Anterior Inferior Tibiofibular Ligament (AITFL) and Interosseous Membrane\nDisruption propagates proximally up the leg\nFibular continuity still intact at this stage",
                "th": "เอ็นยึด AITFL และผังผืดยึดระหว่างกระดูก (Interosseous membrane) ฉีกขาดลุกลามขึ้นด้านบน\nรอยฉีกขาดวิ่งสูงขึ้นไปตามลำแข้ง\nกระดูก Fibula ยังไม่หักขาดในระยะนี้"
              },
              "moi": {
                "en": "Continued external rotation strain on pronated foot.",
                "th": "แรงบิดหมุนออกด้านนอกต่อเนื่องขณะเท้าคว่ำ"
              },
              "treatment": {
                "preferred": "conservative",
                "conservative": {
                  "en": "Short leg immobilization with close radiographic monitoring.",
                  "th": "ใส่เฝือกดามนัดติดตามใกล้ชิด"
                },
                "operative": {
                  "en": "Operative repair if associated with displaced medial malleolus.",
                  "th": "ผ่าตัดยึดตาตุ่มในหากมีการเคลื่อนตัว"
                }
              },
              "illustrationId": "/images/lauge_hansen/per_2.png",
              "xrayDescription": {
                "en": "Widened tibiofibular clear space on Mortise view without fibular fracture.",
                "th": "ช่องว่าง Tibiofibular clear space ถ่างกว้างขึ้นในท่า Mortise view"
              }
            },
            {
              "type": "PER III",
              "name": {
                "en": "PER Stage III (High Fibula Spiral Fracture - Weber C / Maisonneuve)",
                "th": "PER III (กระดูก Fibula หักสูงเหนือข้อเท้า - Weber C / Maisonneuve)"
              },
              "description": {
                "en": "High spiral or oblique fracture of Fibula ABOVE the syndesmosis (Classic Weber C)\nCan occur at mid-shaft or proximal neck (Maisonneuve fracture pattern)\nTOTAL SYNDESMOTIC DISRUPTION\nHighly unstable joint",
                "th": "กระดูก Fibula หักเป็นแนวเฉียงเกลียวอยู่สูงเหนือข้อเท้า (Weber C คลาสสิก)\nอาจหักสูงถึงระดับกลางแข้งหรือคอกระดูกใต้เข่า (Maisonneuve fracture)\nเส้นเอ็นยึด Syndesmosis ฉีกขาดสมบูรณ์ทั้งหมด\nข้อเท้าไม่มั่นคงอย่างยิ่ง"
              },
              "moi": {
                "en": "High energy external rotation force exiting through fibula higher up.",
                "th": "แรงบิดหมุนออกด้านนอกพลังงานสูงที่ทะลุออกทางกระดูก Fibula ในระดับสูง"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "CONTRAINDICATED. Results in severe ankle instability and rapid arthritis.",
                  "th": "ห้ามใช้การรักษาด้วยวิธีนี้ ข้อเท้าจะหลุดและเสื่อมรุนแรง"
                },
                "operative": {
                  "en": "MANDATORY OPERATIVE FIXATION. ORIF fibula plate + Trans-syndesmotic screws (1-2 screws) to restore syndesmosis alignment.",
                  "th": "แนะนำผ่าตัดมาตรฐาน (Mandatory ORIF) ดามแผ่นเหล็กกระดูก Fibula + ยึด Syndesmotic screws ดึงกระดูกเข้าที่"
                }
              },
              "illustrationId": "/images/lauge_hansen/per_3.png",
              "xrayDescription": {
                "en": "Fibular fracture line located >6cm above joint line (or proximal neck) with syndesmotic widening.",
                "th": "เห็นรอยหักกระดูก Fibula สูงกว่าระดับข้อเท้า >6 ซม. (หรือสูงถึงคอกระดูกใต้เข่า) ร่วมกับช่อง Syndesmosis ถ่างกว้าง"
              }
            },
            {
              "type": "PER IV",
              "name": {
                "en": "PER Stage IV (Posterior Malleolus Fracture / PITFL Tear)",
                "th": "PER IV (กระดูกตาตุ่มหลังหัก / เอ็น PITFL ขาด - Complete PER Trimalleolar)"
              },
              "description": {
                "en": "Avulsion of Posterior Malleolus or PITFL tear completing 360° ankle disruption\nMaximum injury energy pattern in PER category\nExtremely unstable ankle fracture-dislocation",
                "th": "กระดูกตาตุ่มหลังหักหลุดออก หรือเอ็น PITFL ฉีกขาด ครบวงรอบความเสียหาย 360 องศา\nเป็นการบาดเจ็บที่รุนแรงที่สุดในกลุ่ม PER\nข้อเท้าหักหลุดไม่มั่นคงอย่างยิ่ง"
              },
              "moi": {
                "en": "Ultimate external rotation force completing full circumferential failure.",
                "th": "แรงบิดหมุนออกด้านนอกขั้นสูงสุดทำลายรอบข้อเท้าครบทุกทิศทาง"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "CONTRAINDICATED.",
                  "th": "ห้ามใช้การรักษาด้วยวิธีนี้"
                },
                "operative": {
                  "en": "MANDATORY COMPLEX ORIF. Fixation of fibula, medial malleolus, posterior malleolus, and syndesmotic screws.",
                  "th": "ผ่าตัดซับซ้อน (Mandatory ORIF) ยึดตาตุ่มนอก ตาตุ่มใน ตาตุ่มหลัง และยึดสกรู Syndesmosis"
                }
              },
              "illustrationId": "/images/lauge_hansen/per_4.png",
              "xrayDescription": {
                "en": "Trimalleolar fracture-dislocation pattern with high fibular fracture and posterior malleolus fragment.",
                "th": "รอยหักหลุดสามตาตุ่มร่วมกับกระดูก Fibula หักสูงและตาตุ่มหลังหัก"
              }
            },
            {
              "type": "PA I",
              "name": {
                "en": "PA Stage I (Medial Malleolus Transverse Fracture)",
                "th": "PA I (กระดูกตาตุ่มในหักแนวขวาง / เอ็น Deltoid ขาด)"
              },
              "description": {
                "en": "Transverse fracture of Medial Malleolus OR Deltoid ligament rupture\nFoot is in Pronation with Abduction (eversion) force\nTension failure on the medial side",
                "th": "กระดูกตาตุ่มด้านในหักแนวขวาง หรือเอ็น Deltoid ฉีกขาด\nเกิดขณะเท้าอยู่ในท่าคว่ำแล้วถูกแรงบิดกางออกด้านนอก (Abduction)\nเกิดจากแรงดึงขาดทางฝั่งด้านใน"
              },
              "moi": {
                "en": "Pronation of foot with abduction force.",
                "th": "เท้าอยู่ในท่าคว่ำแล้วถูกแรงบิดกางออกด้านนอก"
              },
              "treatment": {
                "preferred": "conservative",
                "conservative": {
                  "en": "Indicated ONLY if non-displaced isolated medial malleolus.",
                  "th": "พิจารณาเฉพาะกรณีตาตุ่มในหักไม่เคลื่อน"
                },
                "operative": {
                  "en": "ORIF with screws if displaced >2mm.",
                  "th": "ผ่าตัด ORIF ยึดด้วยสกรูหากเคลื่อน >2มม."
                }
              },
              "illustrationId": "/images/lauge_hansen/pa_1.png",
              "xrayDescription": {
                "en": "Transverse medial malleolus fracture line or medial clear space widening.",
                "th": "รอยหักแนวขวางที่ตาตุ่มใน หรือช่อง Medial clear space ถ่าง"
              }
            },
            {
              "type": "PA II",
              "name": {
                "en": "PA Stage II (AITFL & PITFL Ligament Rupture)",
                "th": "PA II (เอ็นยึดหน้าแข้ง AITFL และ PITFL ฉีกขาด)"
              },
              "description": {
                "en": "Rupture of both Anterior and Posterior Inferior Tibiofibular Ligaments (AITFL & PITFL)\nOr posterior malleolus avulsion\nSyndesmotic complex fails completely",
                "th": "เอ็นยึดหน้าแข้งและตาตุ่มนอกทั้งด้านหน้าและด้านหลัง (AITFL & PITFL) ฉีกขาดทั้งคู่\nหรือกระดูกตาตุ่มหลังกะเทาะหัก\nชุดเอ็นยึด Syndesmosis ล้มเหลวสมบูรณ์"
              },
              "moi": {
                "en": "Continued abduction force on pronated foot.",
                "th": "แรงบิดกางออกด้านนอกอย่างต่อเนื่องขณะเท้าคว่ำ"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "Not recommended due to syndesmotic instability.",
                  "th": "ไม่แนะนำเนื่องจากข้อเท้าไม่มั่นคง"
                },
                "operative": {
                  "en": "ORIF of medial malleolus and syndesmotic stabilization.",
                  "th": "ผ่าตัด ORIF ยึดตาตุ่มในและดึง Syndesmosis"
                }
              },
              "illustrationId": "/images/lauge_hansen/pa_2.png",
              "xrayDescription": {
                "en": "Widened syndesmosis and medial clear space without fibula fracture.",
                "th": "ช่องว่าง Syndesmosis และ Medial clear space ถ่างกว้าง"
              }
            },
            {
              "type": "PA III",
              "name": {
                "en": "PA Stage III (Suprasyndesmotic Transverse/Bending Fibula Fracture)",
                "th": "PA III (กระดูก Fibula หักขวาง/แตกผีเสื้อเหนือข้อ - Bending Butterfly)"
              },
              "description": {
                "en": "Short transverse or comminuted fracture of Fibula ABOVE syndesmosis with lateral butterfly fragment\nClassic bending fracture from violent abduction strain\nHighly unstable Weber C variant",
                "th": "กระดูก Fibula หักแนวขวางสั้นๆ หรือแตกเป็นปีกผีเสื้อ (Butterfly fragment) เหนือระดับ Syndesmosis\nเป็นรอยหักจากการดัดงอ (Bending fracture) จากแรงกางออกอย่างรุนแรง\nเป็นรูปแบบ Weber C ที่ไม่มั่นคงอย่างยิ่ง"
              },
              "moi": {
                "en": "Maximum violent abduction force causing bending failure of fibula.",
                "th": "แรงบิดกางออกด้านนอกอย่างรุนแรงขั้นสูงสุดดัดกระดูก Fibula หักสะบั้น"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "CONTRAINDICATED.",
                  "th": "ห้ามใช้การรักษาด้วยวิธีนี้"
                },
                "operative": {
                  "en": "MANDATORY OPERATIVE FIXATION. ORIF fibula plate with lag screw for butterfly fragment + syndesmotic screw fixation.",
                  "th": "แนะนำผ่าตัดมาตรฐาน (Mandatory ORIF) ดามแผ่นเหล็กกระดูก Fibula ยึดชิ้นผีเสื้อ + ยึด Syndesmotic screws"
                }
              },
              "illustrationId": "/images/lauge_hansen/pa_3.png",
              "xrayDescription": {
                "en": "Transverse/comminuted suprasyndesmotic fibula fracture with lateral butterfly fragment.",
                "th": "เห็นรอยหักขวางกระดูก Fibula เหนือข้อเท้าพร้อมชิ้นกระดูกปีกผีเสื้อด้านนอก"
              }
            }
          ]
        }
      ]
    }
  ]
};
