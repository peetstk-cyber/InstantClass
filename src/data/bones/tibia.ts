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
      "regionConcept": {
        "physicalExam": [
          {
            "sign": "Lachman Test",
            "positive": {
              "en": "Soft endpoint or excessive anterior tibial translation, indicating ACL disruption",
              "th": "ไม่มีจุดหยุดที่แน่นหนาหรือมีการเคลื่อนของกระดูกหน้าแข้งไปด้านหน้ามากผิดปกติ แสดงถึงการฉีกขาดของเอ็นไขว้หน้า (ACL)"
            }
          },
          {
            "sign": "Dial Test (at 30° and 90° flexion)",
            "positive": {
              "en": "Increased external rotation >10° at 30° flexion (posterolateral corner injury) or at both 30° & 90° (PLC + PCL injury)",
              "th": "การหมุนข้อเท้าออกด้านนอกเพิ่มขึ้น >10° ที่มุมงอ 30° (บาดเจ็บต่อ PLC) หรือทั้งที่ 30° และ 90° (บาดเจ็บต่อ PLC ร่วมกับ PCL)"
            }
          },
          {
            "sign": "Varus / Valgus Stress Test (at 0° and 30° flexion)",
            "positive": {
              "en": "Joint line gapping or laxity; instability at 0° full extension indicates combined major collateral and cruciate ligament injury",
              "th": "ช่องข้ออ้ากว้างหรือหลวม; ความหลวมที่มุมเหยียดตรง 0° แสดงถึงการบาดเจ็บรุนแรงร่วมกันของเอ็นข้างข้อและเอ็นไขว้เข่า"
            }
          }
        ],
        "redFlags": [
          {
            "en": "Popliteal Artery Injury: High incidence in high-energy Schatzker IV-VI fracture-dislocations; perform immediate ABI and CTA if distal pulses are diminished or asymmetric",
            "th": "การบาดเจ็บของเส้นเลือดใหญ่ Popliteal Artery: พบบ่อยใน Schatzker IV-VI ที่มีข้อหลุดร่วมด้วย ต้องตรวจ ABI และ CTA ด่วนหากคลำชีพจรได้เบาหรือสองข้างไม่เท่ากัน"
          },
          {
            "en": "Peroneal Nerve Injury: Assess active ankle dorsiflexion, toe extension (EHL), and sensation over the 1st web space",
            "th": "การบาดเจ็บของเส้นประสาท Peroneal Nerve: ต้องประเมินการกระดกข้อเท้า การเหยียดนิ้วหัวแม่เท้า (EHL) และความรู้สึกบริเวณง่ามนิ้วเท้าที่ 1"
          },
          {
            "en": "Acute Compartment Syndrome: Tense, firm leg compartments with severe passive stretch pain requiring emergent 4-compartment fasciotomy",
            "th": "ภาวะความดันช่องกล้ามเนื้อสูงฉุกเฉิน (Acute Compartment Syndrome): ช่องกล้ามเนื้อตึงแน่นและปวดรุนแรงขณะยืดกล้ามเนื้อ ต้องผ่าตัดเปิดช่องกล้ามเนื้อด่วน"
          }
        ],
        "associatedInjuries": [
          {
            "injury": {
              "en": "Meniscal Tears (Lateral > Medial)",
              "th": "หมอนรองกระดูกข้อเข่าฉีกขาด (Lateral > Medial)"
            },
            "trigger": {
              "en": "Present in ~50% of tibial plateau fractures; inspect during open or arthroscopic-assisted reduction",
              "th": "พบสูงถึง ~50% ของผู้ป่วยหัวกระดูกหน้าแข้งหัก ควรตรวจประเมินขณะผ่าตัด"
            }
          },
          {
            "injury": {
              "en": "Cruciate Ligament Disruption (ACL / PCL)",
              "th": "เอ็นไขว้หน้าหรือเอ็นไขว้หลังฉีกขาด (ACL / PCL)"
            },
            "trigger": {
              "en": "Common in high-energy bicondylar (Schatzker V/VI) and medial plateau fracture-dislocations (Schatzker IV)",
              "th": "พบบ่อยในรอยหักพลังงานสูงสองฝั่ง (Schatzker V/VI) และรอยหักฝั่งด้านใน (Schatzker IV)"
            }
          }
        ],
        "clinicalPearls": [
          {
            "en": "Schatzker IV represents a high-energy medial plateau dislocation variant with the highest risk of popliteal neurovascular injury.",
            "th": "Schatzker IV เป็นรอยหักฝั่งในชนิดพลังงานสูงที่มีลักษณะของข้อหลุด ร่วมกับมีความเสี่ยงสูงที่สุดต่อการบาดเจ็บของเส้นเลือดและเส้นประสาท Popliteal"
          },
          {
            "en": "Articular depression >2-3mm or condylar widening >5mm typically warrants open reduction and internal fixation (ORIF).",
            "th": "การยุบตัวของผิวข้อ >2-3 มม. หรือหัวกระดูกกางออก >5 มม. เป็นข้อบ่งชี้ในการผ่าตัดจัดกระดูกและยึดตรึงภายใน (ORIF)"
          },
          {
            "en": "CT scan with 3D reconstruction is essential to evaluate posterior column depression and plan optimal plate placement.",
            "th": "การทำ CT scan พร้อมภาพ 3 มิติ มีความจำเป็นอย่างยิ่งเพื่อประเมินผิวยุบด้านหลัง (Posterior column) และวางแผนทางเข้าผ่าตัด"
          },
          {
            "en": "In high-energy Schatzker V and VI fractures with soft tissue compromise, temporary joint-spanning external fixation is the safest initial management.",
            "th": "ในรอยหักพลังงานสูง Schatzker V และ VI ที่มีเนื้อเยื่อบวมเต่ง การใส่โครงยึดภายนอกข้ามข้อ (Spanning Ex-Fix) ชั่วคราวเป็นแนวทางที่ปลอดภัยที่สุดในระยะแรก"
          }
        ]
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
          "concept": {
            "title": {
              "en": "Schatzker Tibial Plateau Clinical Concept",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ Schatzker Classification"
            },
            "corePrinciple": {
              "en": "Schatzker classifies tibial plateau fractures based on fracture lines, CT depression pattern, and kinetic energy to distinguish low-energy lateral split/depression variants from high-energy bicondylar fractures with severe soft tissue compromise.",
              "th": "Schatzker จำแนกกระดูกหัวหน้าแข้งหักตามทิศทางรอยหัก รูปแบบผิวยุบจาก CT scan และพลังงานการบาดเจ็บ เพื่อแยกกลุ่มพลังงานต่ำฝั่งนอกออกจากกลุ่มพลังงานสูงสองฝั่งที่มีอันตรายต่อเนื้อเยื่อรอบข้อ"
            },
            "rules": [
              {
                "en": "Articular depression threshold: >2–3 mm step-off indicates operative restoration",
                "th": "เกณฑ์ผ่าตัดจากผิวยุบ: ผิวข้อเหลื่อมหรือยุบตัว >2–3 มม."
              },
              {
                "en": "Condylar widening threshold: >5 mm joint widening requires surgical realignment",
                "th": "เกณฑ์ผ่าตัดจากหัวกระดูกกาง: ข้อกางออก >5 มม. ต้องผ่าตัดจัดแนวแกน"
              },
              {
                "en": "Medial split (Schatzker Type IV): High-energy dislocation-fracture with high risk of popliteal artery disruption or peroneal nerve palsy",
                "th": "รอยหักฝั่งด้านใน (Schatzker Type IV): เกิดจากพลังงานสูงร่วมกับข้อหลุด เสี่ยงสูงต่อการบาดเจ็บของหลอดเลือด Popliteal artery และเส้นประสาท Peroneal nerve"
              },
              {
                "en": "AO/OTA 41 Correlation: 41-A (extra-articular), 41-B (partial articular / Types I–IV), 41-C (complete articular / Types V–VI)",
                "th": "การเชื่อมโยง AO/OTA 41: 41-A (นอกข้อ), 41-B (เข้าข้อย่อส่วน / Types I–IV), 41-C (เข้าข้อสมบูรณ์ / Types V–VI)"
              }
            ],
            "clinicalSignificance": [
              {
                "en": "Type I–III (Low energy lateral): ORIF with cancellous screws or lateral locking plate, subcortical elevation, and bone grafting/void filler for depressed surface",
                "th": "Type I–III (พลังงานต่ำฝั่งนอก): ผ่าตัด ORIF ยึด Screws/แผ่นเหล็ก ยกรอยยุบใต้ผิวข้อ ร่วมกับใส่กระดูกเทียมเติมช่องว่าง"
              },
              {
                "en": "Type IV (Medial split/dislocation): Emergency vascular screening (ABI & CTA if pulse asymmetric) and open reduction with medial anti-glide plate",
                "th": "Type IV (หักฝั่งใน/ข้อหลุด): ประเมินหลอดเลือดด่วน (ABI & CTA หากชีพจรผิดปกติ) และผ่าตัด ORIF ดามแผ่นเหล็ก Medial anti-glide plate"
              },
              {
                "en": "Type V–VI (High energy bicondylar/metaphyseal dissociation): Staged protocol mandatory — temporary knee-spanning external fixator until soft tissue subsides (positive Wrinkle Sign, ~7–14 days) before definitive dual locking plates",
                "th": "Type V–VI (พลังงานสูงสองฝั่ง/ตัดขาดลำตัวกระดูก): ต้องใช้ Staged protocol — ใส่โครงยึดภายนอกข้ามข้อ (Spanning Ex-Fix) ชั่วคราว รอผิวยุบบวม (Wrinkle Sign positive 7–14 วัน) ก่อนผ่าตัดดามเหล็กคู่ (Dual Plating)"
              }
            ]
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
            },
            {
              "name": "Tibial Plateau View (10-15° Caudal Tilt)",
              "details": {
                "en": "AP view with 10-15° caudal tube tilt projects the femoral condyles out of the plateau articular surface. Best view to accurately quantify articular depression depth and lateral condylar split patterns on plain X-rays before CT.",
                "th": "ภาพ AP เอียงหลอดรังสี 10-15° ลงด้านล่าง ช่วยแยกกระดูกปลายต้นขาออกจากพื้นผิวข้อเข่า ใช้วัดระดับการยุบตัวของผิวข้อและรูปแบบ Split ด้านข้างก่อนส่ง CT"
              }
            },
            {
              "name": "Oblique Views (Internal & External Rotation)",
              "details": {
                "en": "Internal and external rotation oblique X-rays help profile the medial and lateral plateau compartments separately. Useful for detecting occult split or depression fractures not seen on standard AP view.",
                "th": "ภาพ Oblique หมุนเข้า-ออกช่วยประเมินผิวข้อด้านในและด้านนอกแยกกัน มีประโยชน์ในการตรวจหารอยหัก Split หรือยุบตัวที่ไม่ชัดเจนใน AP ธรรมดา"
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
                "decisionPrinciple": {
                  "en": "Split fracture of lateral plateau without central depression; young bone; anatomic reduction and compression with cancellous lag screws or lateral buttress plate restores articular congruity and prevents valgus tilt.",
                  "th": "รอยหักแยกฝั่งนอกโดยไม่มีผิวยุบ มักพบในกระดูกที่แข็งแรง การผ่าตัดจัดข้อให้เรียบสนิทและยึดด้วย Lag screws หรือแผ่นเหล็กดามด้านนอกช่วยคืนรูปผิวข้อและป้องกันเข่าเอียงแบะ (Valgus)"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Non-displaced split fracture (<2 mm displacement/step-off)\n• Medically high-risk or non-ambulatory patients",
                    "th": "• รอยหักแยกที่ไม่เคลื่อนตัว (ผิวข้อเหลื่อม < 2 มม.)\n• ผู้ป่วยที่มีความเสี่ยงผ่าตัดสูงมากหรือไม่สามารถเดินได้อยู่เดิม"
                  },
                  "method": {
                    "en": "• Long leg cylinder cast or hinged knee brace locked in extension x 6 weeks",
                    "th": "• ใส่เฝือกยาวหรือกายอุปกรณ์ข้อเข่าล็อคเหยียดตรง (Hinged Knee Brace) 6 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Strict non-weight bearing (NWB) x 6–8 weeks, then advance to PWB; passive ROM at 2–3 weeks",
                    "th": "• ห้ามลงน้ำหนัก 6–8 สัปดาห์แรก แล้วค่อยเริ่มลงน้ำหนักบางส่วน เริ่มขยับข้อเข่าเบาๆ ที่ 2–3 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Secondary displacement into valgus alignment upon early weight bearing",
                    "th": "• กระดูกอาจเลื่อนหลุดและเข่าเอียงแบะ (Valgus) หากเริ่มลงน้ำหนักเร็วเกินไป"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Displaced split fracture (step-off ≥2–3 mm or condylar widening >5 mm)\n• Valgus instability >10° on gentle stress exam",
                    "th": "• รอยหักแยกที่เคลื่อนตัว (ผิวข้อสะดุด ≥ 2–3 มม. หรือหัวกระดูกกาง > 5 มม.)\n• ข้อเข่าหลวมเอียง > 10 องศาเมื่อตรวจโยกเข่า"
                  },
                  "method": {
                    "en": "• Open reduction and internal fixation (ORIF) or Arthroscopic-assisted reduction\n• Two 6.5 mm / 7.3 mm cannulated cancellous lag screws with washers placed horizontally beneath subchondral bone\n• Lateral periarticular buttress plate if osteopenia or comminuted split",
                    "th": "• ผ่าตัดจัดกระดูกและยึดตรึง (ORIF) หรือจัดกระดูกโดยใช้กล้องส่องข้อเข่าช่วย (ARIF)\n• ยึดด้วย Cancellous Lag Screws ขนาด 6.5/7.3 มม. พร้อมแหวนรอง วางขนานใต้ผิวข้อต่อ\n• เสริมแผ่นเหล็กดามด้านนอก (Lateral Buttress Plate) หากกระดูกบางหรือแตกละเอียด"
                  },
                  "rehabilitation": {
                    "en": "• Immediate active-assisted knee ROM (CPM 0–90°) on day 1\n• Strict NWB x 6–8 weeks, advance to PWB, full WB at 10–12 weeks",
                    "th": "• เริ่มฝึกงอเหยียดข้อเข่าทันทีในวันแรกหลังผ่าตัด (CPM 0–90 องศา)\n• ห้ามลงน้ำหนัก 6–8 สัปดาห์แรก แล้วเริ่มลงน้ำหนักบางส่วน และลงเต็มที่เมื่อครบ 10–12 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Interposition of lateral meniscus into the fracture gap preventing anatomical reduction",
                    "th": "• หมอนรองกระดูกข้อเข่าด้านนอก (Lateral meniscus) อาจติดขัดแทรกเข้าไปในร่องกระดูกหัก ขัดขวางการจัดกระดูกให้เรียบ"
                  }
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
                "decisionPrinciple": {
                  "en": "Combined split and articular depression (most common); requires subcortical windowing, articular elevation, subchondral bone graft/cement void filling, and lateral buttress/locking plate.",
                  "th": "รอยหักแยกพร้อมผิวยุบตัว (พบบ่อยที่สุด) ต้องเจาะเปิดช่องกระดูกด้านล่าง งัดยกผิวข้อให้เรียบ ปลูกกระดูก/ซีเมนต์เติมช่องว่าง และดามแผ่นเหล็กประคองด้านนอก"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Non-displaced fractures with depression <2–3 mm and stable joint in non-demanding patients",
                    "th": "• รอยหักไม่เคลื่อนตัว ผิวยุบ < 2–3 มม. และข้อเข่ามั่นคงดีในผู้ป่วยสูงอายุ"
                  },
                  "method": {
                    "en": "• Hinged knee brace in extension with strict NWB x 8–10 weeks",
                    "th": "• ใส่กายอุปกรณ์ล็อคข้อเข่าเหยียดตรงพร้อมห้ามลงน้ำหนัก 8–10 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• NWB x 8–10 weeks, monitor with serial radiographs",
                    "th": "• ห้ามลงน้ำหนัก 8–10 สัปดาห์ ติดตามภาพเอกซเรย์สม่ำเสมอ"
                  },
                  "pitfalls": {
                    "en": "• Progressive articular depression, post-traumatic osteoarthritis, and valgus deformity",
                    "th": "• ผิวข้อยุบตัวเพิ่มขึ้น เกิดข้อเข่าเสื่อมรวดเร็ว และข้อเข่าโก่งผิดรูป"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All displaced Schatzker II fractures with depression ≥2–3 mm or joint widening >5 mm\n• Any mechanical instability in full extension",
                    "th": "• กระดูกหักแบบเคลื่อนตัวที่มีผิวยุบ ≥ 2–3 มม. หรือข้อกางออก > 5 มม.\n• มีข้อเข่าหลวมไม่มั่นคงเมื่อเหยียดตรง"
                  },
                  "method": {
                    "en": "• Anterolateral approach with submeniscal arthrotomy to inspect articular surface\n• Fenestrate lateral cortex (subcortical window), tamp/elevate depressed articular fragments under direct/fluoroscopic vision\n• Pack subchondral void with autograft/allograft bone chips or calcium phosphate cement\n• Lateral periarticular buttress or pre-contoured locking plate with rafting subchondral screws",
                    "th": "• ผ่าตัดเปิดทางด้านหน้า-นอกและเปิดใต้หมอนรองข้อเข่าเพื่อตรวจดูผิวข้อ\n• เจาะหน้าต่างกระดูกด้านข้าง แล้วใช้งัดตอกยกผิวข้อที่ยุบตัวขึ้นมาให้เรียบเสมอกัน\n• ใส่กระดูกปลูก (Bone Graft) หรือแคลเซียมฟอสเฟตซีเมนต์เติมเต็มโพรงใต้ผิวข้อ\n• ยึดด้วยแผ่นเหล็กดามด้านข้าง (Lateral Buttress/Locking Plate) พร้อมสกรูรองรับใต้ผิวข้อ (Rafting Screws)"
                  },
                  "rehabilitation": {
                    "en": "• Early active-assisted knee ROM 0–90° on post-op day 1\n• Strict non-weight bearing (NWB) x 8–10 weeks; advance to PWB and full WB at 12 weeks",
                    "th": "• เริ่มฝึกงอเหยียดข้อเข่า 0–90 องศา ในวันแรกหลังผ่าตัด\n• ห้ามลงน้ำหนัก 8–10 สัปดาห์แรก แล้วเริ่มลงน้ำหนักบางส่วน และลงเต็มที่เมื่อครบ 12 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Failure to support elevated articular fragments with bone graft leads to re-depression and fixation failure",
                    "th": "• หากไม่ใส่กระดูกปลูกรองรับใต้ผิวข้อที่งัดขึ้นมา ผิวข้อจะทรุดยุบตัวลงไปใหม่อีกครั้ง"
                  }
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
                "decisionPrinciple": {
                  "en": "Central articular depression with intact lateral cortex; typically in osteoporotic bone; arthroscopic/fluoroscopic-guided elevation and subchondral void filling with rafting screws or mini-plate.",
                  "th": "ผิวกระดูกข้อตรงกลางยุบตัวโดยผนังกระดูกด้านนอกยังดี มักเกิดในคนกระดูกพรุน งัดยกผิวข้อผ่านการส่องกล้องหรือเอกซเรย์ เติมซีเมนต์/กระดูกปลูก และยึดด้วยสกรู Rafting"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Stable knee with mild central depression (<5 mm)\n• Low functional demand elderly patients",
                    "th": "• ข้อเข่ามั่นคงและผิวยุบตัวน้อย (< 5 มม.)\n• ผู้สูงอายุที่มีการใช้งานขาน้อย"
                  },
                  "method": {
                    "en": "• Hinged knee brace locked in extension with protected weight bearing",
                    "th": "• ใส่กายอุปกรณ์ล็อคข้อเข่าเหยียดตรงและป้องกันการลงน้ำหนัก"
                  },
                  "rehabilitation": {
                    "en": "• Non-weight bearing x 6–8 weeks; early gentle active-assisted ROM",
                    "th": "• ห้ามลงน้ำหนัก 6–8 สัปดาห์แรก ฝึกขยับข้อเข่าเบาๆ"
                  },
                  "pitfalls": {
                    "en": "• Secondary collapse in progressive osteopenia",
                    "th": "• กระดูกอาจทรุดยุบตัวเพิ่มขึ้นในผู้ป่วยกระดูกพรุนมาก"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Articular depression >5 mm or knee instability (>10° valgus laxity)\n• Young/active patients requiring smooth joint surface",
                    "th": "• ผิวกระดูกยุบตัว > 5 มม. หรือข้อเข่าหลวมไม่มั่นคง (>10 องศา)\n• ผู้ป่วยอายุน้อยที่ต้องการผิวข้อที่เรียบสนิท"
                  },
                  "method": {
                    "en": "• Subcortical elevation via lateral metaphyseal cortical window or balloon tibioplasty under fluoroscopy/arthroscopy\n• Metaphyseal void filling with calcium phosphate cement or structural allograft\n• Subchondral raft of 3.5 mm screws (rafting screws) ± lateral mini-plate",
                    "th": "• งัดยกผิวข้อผ่านทางหน้าต่างกระดูกด้านข้าง หรือใช้บอลลูนขยาย (Tibioplasty) ร่วมกับส่องกล้องข้อเข่า\n• ฉีดซีเมนต์กระดูกเทียมแคลเซียมฟอสเฟต หรือใส่กระดูกปลูกเติมเต็มโพรง\n• ใส่สกรูขนาด 3.5 มม. เรียงเป็นแพรองรับใต้ผิวข้อ (Rafting Screws) ± แผ่นเหล็กขนาดเล็ก"
                  },
                  "rehabilitation": {
                    "en": "• Immediate CPM knee motion 0–90°\n• Non-weight bearing x 6–8 weeks, advance to full WB at 10–12 weeks",
                    "th": "• เริ่มฝึกงอเหยียดข้อเข่าทันที (CPM 0–90 องศา)\n• ห้ามลงน้ำหนัก 6–8 สัปดาห์แรก แล้วเริ่มลงน้ำหนักเต็มที่เมื่อครบ 10–12 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Over-elevation causing joint overstuffing; cement leakage into knee joint",
                    "th": "• งัดยกผิวข้อสูงเกินไป หรือซีเมนต์กระดูกรั่วไหลเข้าไปในช่องข้อเข่า"
                  }
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
                "decisionPrinciple": {
                  "en": "High-energy fracture-subluxation of medial plateau; high risk of popliteal artery disruption and peroneal palsy; requires emergency neurovascular check and medial/posteromedial anti-glide buttress plate.",
                  "th": "รอยหักฝั่งด้านในเกิดจากพลังงานสูงและมักมีข้อเข่ากึ่งหลุด เสี่ยงต่อเส้นเลือด Popliteal artery ฉีกขาด ต้องตรวจระบบไหลเวียนโลหิตด่วน และผ่าตัดดามแผ่นเหล็ก Medial/Posteromedial Anti-glide เพื่อป้องกันกระดูกไถลหลุด"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly CONTRAINDICATED (Rapid varus collapse and knee dislocation)",
                    "th": "• ห้ามใช้วิธีนี้เด็ดขาด (ทำให้ข้อเข่าทรุดเอียงโก่งและข้อเข่าหลุด)"
                  },
                  "method": {
                    "en": "• Not indicated",
                    "th": "• ไม่แนะนำ"
                  },
                  "rehabilitation": {
                    "en": "• N/A",
                    "th": "• ไม่ระบุ"
                  },
                  "pitfalls": {
                    "en": "• Catastrophic varus deformity, chronic joint subluxation, and missed vascular ischemia",
                    "th": "• ข้อเข่าโก่งทรุดถาวร ข้อหลุดเรื้อรัง และตรวจพลาดภาวะขาขาดเลือด"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All Schatzker IV medial plateau fractures\n• Any medial split, depression, or coronal shear fragment",
                    "th": "• กระดูกหัวหน้าแข้งฝั่งในหักทุกราย (Schatzker IV)\n• รอยหักแยก, ผิวยุบ หรือรอยหักเฉือนด้านหลังใน"
                  },
                  "method": {
                    "en": "• Mandatory emergent neurovascular assessment (ABI and CTA if pulse asymmetry)\n• Posteromedial or Lobenhoffer approach with patient in prone/floating-knee position\n• Rigid open reduction and Medial / Posteromedial Anti-Glide Buttress Plate (prevents shear displacement)\n• Inspect and repair associated cruciate/collateral ligament avulsions",
                    "th": "• ตรวจประเมินชีพจรและหลอดเลือดฉุกเฉิน (ทำ ABI และ CTA หากชีพจรผิดปกติ)\n• ผ่าตัดเข้าทางด้านหลังใน (Posteromedial / Lobenhoffer approach) ในท่านอนคว่ำหรือกึ่งตะแคง\n• จัดกระดูกและดามด้วยแผ่นเหล็ก Medial / Posteromedial Anti-Glide Buttress Plate เพื่อต้านแรงเฉือน\n• ตรวจซ่อมแซมจุดเกาะเอ็นไขว้หน้า/หลังและเอ็นข้างเข่าที่ฉีกขาด"
                  },
                  "rehabilitation": {
                    "en": "• Early protected knee ROM in hinged brace\n• Strict non-weight bearing (NWB) x 8–10 weeks; advance to full WB at 12–14 weeks",
                    "th": "• เริ่มฝึกขยับข้อเข่าในกายอุปกรณ์ปรับมุมได้\n• ห้ามลงน้ำหนัก 8–10 สัปดาห์แรก แล้วเริ่มลงน้ำหนักเต็มที่เมื่อครบ 12–14 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Missed popliteal artery entrapment/transection; placing an anteromedial plate for a posteromedial fragment results in screw blowout and varus collapse",
                    "th": "• ระวังตรวจพลาดการบาดเจ็บของหลอดเลือด Popliteal artery; การวางแผ่นดามด้านหน้าในสำหรับชิ้นกระดูกด้านหลังในจะทำให้แผ่นเหล็กหลุดและเข่าโก่งพัง"
                  }
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
                "decisionPrinciple": {
                  "en": "High-energy bicondylar split with intact shaft continuity; two-stage protocol (knee-spanning Ex-Fix until soft tissue wrinkles, ~10-14 days) followed by dual plating (medial + lateral).",
                  "th": "กระดูกหักสองฝั่งจากพลังงานสูงโดยยังต่อกับแกนกระดูก ต้องใช้การรักษา 2 ระยะ (ใส่โครงยึดภายนอกข้ามข้อรอผิวยุบบวม 10–14 วัน) แล้วผ่าตัดดามแผ่นเหล็กคู่ทั้งสองฝั่ง (Dual Plating)"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly CONTRAINDICATED",
                    "th": "• ห้ามใช้วิธีนี้เด็ดขาด"
                  },
                  "method": {
                    "en": "• Not indicated",
                    "th": "• ไม่แนะนำ"
                  },
                  "rehabilitation": {
                    "en": "• N/A",
                    "th": "• ไม่ระบุ"
                  },
                  "pitfalls": {
                    "en": "• Rapid joint destruction, flail knee, severe arthrosis",
                    "th": "• ข้อเข่าพังทลาย ย้วยหลุด และข้อเสื่อมรุนแรง"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All Schatzker V bicondylar tibial plateau fractures",
                    "th": "• กระดูกหัวหน้าแข้งหักสองฝั่ง Schatzker V ทุกราย"
                  },
                  "method": {
                    "en": "• Stage 1 (Emergency): Knee-spanning External Fixator (femoral shaft to tibial shaft pins) to restore length and alignment\n• Soft Tissue Rest: Elevate limb, monitor for compartment syndrome, wait for skin re-epithelialization / positive Wrinkle Sign (7–14 days)\n• Stage 2 (Definitive): Dual Incision (anterolateral + posteromedial) and Dual Plating (lateral locking plate + medial buttress plate)\n• Alternative: Hybrid circular ring external fixator (Ilizarov / Taylor Spatial Frame)",
                    "th": "• ระยะที่ 1 (ฉุกเฉิน): ใส่โครงยึดตรึงภายนอกข้ามข้อเข่า (Knee-spanning Ex-Fix) ดึงความยาวและแนวแกนกระดูก\n• พักเนื้อเยื่อ: ยกขาสูง เฝ้าระวัง Compartment Syndrome รอผิวหนังยุบบวมเกิดรอยย่น (Wrinkle Sign positive 7–14 วัน)\n• ระยะที่ 2 (ผ่าตัดจริง): ผ่าตัด 2 แผล (หน้า-นอก และ หลัง-ใน) ยึดด้วยแผ่นเหล็กคู่ (Dual Plating: Lateral locking + Medial buttress)\n• ทางเลือกอื่น: โครงยึดตรึงแบบวงแหวน (Ilizarov / Taylor Spatial Frame)"
                  },
                  "rehabilitation": {
                    "en": "• Gentle passive knee ROM in hinged brace once incisions heal (post-op day 3–5)\n• Strict non-weight bearing x 10–12 weeks; full WB only after bilateral cortical union (14–16 weeks)",
                    "th": "• เริ่มฝึกขยับข้อเข่าเบาๆ เมื่อแผลผ่าตัดแห้งดี (วันที่ 3–5 หลังผ่าตัด)\n• ห้ามลงน้ำหนัก 10–12 สัปดาห์แรก และเริ่มลงน้ำหนักเต็มที่เมื่อกระดูกติดแน่นทั้งสองฝั่ง (14–16 สัปดาห์)"
                  },
                  "pitfalls": {
                    "en": "• Operating through compromised, swollen, blistered skin leads to catastrophic wound breakdown and deep infection (>20-30%)\n• Single lateral plate alone leads to medial column collapse and varus malunion",
                    "th": "• การรีบผ่าตัดผ่านผิวหนังที่บวมเต่งหรือมีตุ่มน้ำพองจะทำให้แผลผ่าตัดเน่าแยกและติดเชื้อรุนแรง (>20-30%)\n• การดามแผ่นเหล็กฝั่งนอกเพียงฝั่งเดียวจะทำให้ฝั่งในทรุดและเข่าโก่งพัง"
                  }
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
                "en": "Extreme high-energy trauma (motorvehicle collisions, falls from height).",
                "th": "อุบัติเหตุพลังงานสูงรุนแรงสุดขีด (รถชนรุนแรง, ตกจากที่สูง)"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Complete dissociation between articular block and shaft with severe comminution and soft tissue injury; mandatory staged surgery (Spanning Ex-Fix + fasciotomy if needed, then dual locked plating or ring fixator).",
                  "th": "กระดูกแตกละเอียดหลุดแยกจากแกนกระดูกโดยสิ้นเชิงร่วมกับเนื้อเยื่อบวมชอกช้ำรุนแรงที่สุด ต้องผ่าตัดแบ่งระยะ (ใส่ Ex-Fix ข้ามข้อ + กรีดคลายกล้ามเนื้อหากมี Compartment syndrome แล้วจึงผ่าตัดดามเหล็กคู่หรือใช้วงแหวน Ilizarov)"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly CONTRAINDICATED (Lethal/crippling deformity)",
                    "th": "• ห้ามใช้วิธีนี้เด็ดขาด (ทำให้พิการถาวรหรือสูญเสียขา)"
                  },
                  "method": {
                    "en": "• Not indicated",
                    "th": "• ไม่แนะนำ"
                  },
                  "rehabilitation": {
                    "en": "• N/A",
                    "th": "• ไม่ระบุ"
                  },
                  "pitfalls": {
                    "en": "• Nonunion, massive limb shortening, amputation risk",
                    "th": "• กระดูกไม่ติด ขาสั้นลงอย่างมาก และเสี่ยงต่อการถูกตัดขา"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All Schatzker VI fractures (AO/OTA 41-C3)\n• High-energy polytrauma or severe comminution",
                    "th": "• กระดูกหัวหน้าแข้งหักแตกแยกจากแกนกระดูก Schatzker VI ทุกราย\n• อุบัติเหตุรุนแรงหลายระบบหรือกระดูกแตกละเอียดมาก"
                  },
                  "method": {
                    "en": "• Stage 1: Immediate knee-spanning delta-frame external fixator + emergent 4-compartment fasciotomy if compartment syndrome presents\n• Stage 2 (Definitive at 10–14 days): Dual incision dual locked plating spanning the metaphyseal-diaphyseal junction, OR Circular Ring Fixator (Ilizarov/TSF) with olive wires for poor soft tissues\n• Bone grafting of metaphyseal bone loss",
                    "th": "• ระยะที่ 1: ใส่โครงยึดตรึงภายนอกข้ามข้อเข่าทันที + ผ่าตัดกรีดคลายกล้ามเนื้อ (Fasciotomy) 4 ช่องด่วนหากมีความดันช่องกล้ามเนื้อสูง\n• ระยะที่ 2 (ผ่าตัดจริงที่ 10–14 วัน): ผ่าตัด 2 แผลดามแผ่นเหล็กล็อคคู่พาดเชื่อมระหว่างหัวกระดูกและแกนกระดูก หรือใส่โครงวงแหวน (Ilizarov/TSF) หากผิวหนังไม่ดี\n• ปลูกกระดูกทดแทนส่วนที่สูญเสีย"
                  },
                  "rehabilitation": {
                    "en": "• Strict non-weight bearing x 12 weeks; early non-loaded ROM\n• Advance to partial WB at 12 weeks, full WB at 16–20 weeks upon solid bridging",
                    "th": "• ห้ามลงน้ำหนัก 12 สัปดาห์แรก ฝึกขยับข้อเข่าแบบไม่ลงน้ำหนัก\n• เริ่มลงน้ำหนักบางส่วนที่ 12 สัปดาห์ และลงน้ำหนักเต็มที่เมื่อครบ 16–20 สัปดาห์หลังกระดูกเชื่อมสนิท"
                  },
                  "pitfalls": {
                    "en": "• Acute compartment syndrome (monitor 5 Ps and intracompartmental pressure)\n• High incidence of deep periprosthetic infection and wound slough",
                    "th": "• เกิดภาวะความดันช่องกล้ามเนื้อสูง (Compartment Syndrome) ต้องเฝ้าระวังอย่างใกล้ชิด\n• มีอัตราการติดเชื้อในข้อลึกและแผลผ่าตัดแยกสูงที่สุด"
                  }
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
      "regionConcept": {
        "physicalExam": [
          {
            "sign": "Compartment Palpation",
            "positive": {
              "en": "Tense, wooden-hard fullness across any of the 4 leg compartments",
              "th": "คลำพบช่องกล้ามเนื้อตึงแน่น แข็งเหมือนไม้ ในช่องใดช่องหนึ่งของขาทั้ง 4 ช่อง"
            }
          },
          {
            "sign": "Passive Stretch Pain Test",
            "positive": {
              "en": "Severe, excruciating pain elicited by passive extension/flexion of toes or ankle (most sensitive clinical sign of early compartment syndrome)",
              "th": "อาการปวดรุนแรงผิดปกติเมื่อยืดกล้ามเนื้อและนิ้วเท้าแบบ passive (เป็นสัญญาณทางคลินิกที่ไวที่สุดของ Compartment Syndrome ระยะแรก)"
            }
          }
        ],
        "acceptableAlignment": [
          {
            "parameter": {
              "en": "Coronal Alignment (Varus / Valgus)",
              "th": "มุมเอียงซ้าย-ขวา (Varus / Valgus)"
            },
            "threshold": "< 5°",
            "note": {
              "en": "Angulation >5° causes asymmetric joint loading at knee and ankle",
              "th": "มุมเอียงเกิน 5° ส่งผลให้เกิดการรับน้ำหนักไม่เท่ากันที่ข้อเข่าและข้อเท้า"
            }
          },
          {
            "parameter": {
              "en": "Sagittal Alignment (AP Angulation)",
              "th": "มุมเอียงหน้า-หลัง (AP Angulation)"
            },
            "threshold": "< 10°",
            "note": {
              "en": "Anteroposterior angulation >10° alters lower extremity biomechanics",
              "th": "มุมเอียงหน้าหลังเกิน 10 องศาทำให้ชีวกลศาสตร์ขาผิดปกติ"
            }
          },
          {
            "parameter": {
              "en": "Shortening (Leg Length Discrepancy)",
              "th": "ความสั้นของกระดูก (Shortening)"
            },
            "threshold": "< 10 mm",
            "note": {
              "en": "Shortening >1 cm leads to symptomatic pelvic tilt and lumbar strain",
              "th": "กระดูกสั้นเกิน 1 ซม. ทำให้เชิงอ่างเอียงและปวดหลัง"
            }
          },
          {
            "parameter": {
              "en": "Rotational Deformity",
              "th": "การบิดหมุนผิดรูป (Rotation)"
            },
            "threshold": "< 10°",
            "note": {
              "en": "Internal rotation is clinically tolerated poorly compared to external rotation",
              "th": "การบิดหมุนเข้าด้านในทนทานได้น้อยกว่าการบิดหมุนออกด้านนอกทางคลินิก"
            }
          },
          {
            "parameter": {
              "en": "Cortical Surface Contact",
              "th": "การแตะกันของขอบกระดูก (Cortical contact)"
            },
            "threshold": "> 50%",
            "note": {
              "en": "At least 50% cortical overlap is required for non-operative Sarmiento cast bracing",
              "th": "ต้องมีขอบกระดูกแตะกันอย่างน้อย 50% สำหรับการใส่เฝือก Sarmiento Cast"
            }
          }
        ],
        "redFlags": [
          {
            "en": "Acute Compartment Syndrome: Tibial shaft is the #1 site in the human body; closely monitor the 5 Ps (Pain out of proportion, Passive stretch pain, Paresthesia, Pallor, Pulselessness)",
            "th": "ภาวะความดันช่องกล้ามเนื้อสูง (Acute Compartment Syndrome): แกนหน้าแข้งเป็นตำแหน่งเกิดอันดับ 1 ในร่างกาย ต้องติดตามสัญญาณ 5 Ps อย่างใกล้ชิด"
          },
          {
            "en": "Open Fracture: High incidence due to subcutaneous anteromedial border of tibia; requires urgent IV antibiotics and operative debridement",
            "th": "กระดูกหักแผลเปิด: พบบ่อยเนื่องจากขอบหน้าแข้งอยู่ใต้ผิวหนังโดยตรง ต้องให้ยาปฏิชีวนะทางหลอดเลือดดำและล้างแผลผ่าตัดด่วน"
          }
        ],
        "clinicalPearls": [
          {
            "en": "Antegrade reamed intramedullary nailing (IMN) is the surgical gold standard for displaced tibial shaft fractures.",
            "th": "การตอกตะปูในโพรงกระดูกแบบ Reamed IMN เป็นมาตรฐานหลักในการรักษาผ่าตัดกระดูกแกนหน้าแข้งหักที่เคลื่อนตัว"
          },
          {
            "en": "Tibial shaft is the most common site for acute compartment syndrome; presence of distal pulses does NOT rule out compartment syndrome.",
            "th": "แกนกระดูกหน้าแข้งเป็นตำแหน่งที่พบ Compartment Syndrome บ่อยที่สุดในร่างกาย การพบชีพจรปลายเท้าปกติไม่ได้ vylู ออกภาวะนี้"
          },
          {
            "en": "Sarmiento functional cast bracing is appropriate for closed, low-energy fractures that meet all alignment criteria once initial swelling subsides.",
            "th": "การใส่เฝือกดาม Sarmiento เหมาะสำหรับกระดูกหักปิดพลังงานต่ำที่มุมเอียงอยู่ในเกณฑ์ที่ยอมรับได้ทั้งหมดเมื่อยุบบวมแล้ว"
          },
          {
            "en": "A delta pressure (Diastolic BP minus Compartment Pressure) <30 mmHg is an absolute indication for emergency 4-compartment fasciotomy.",
            "th": "ค่า Delta pressure (ความดัน Diastolic ลบ ความดันช่องกล้ามเนื้อ) ที่น้อยกว่า 30 mmHg เป็นข้อบ่งชี้เด็ดขาดในการผ่าตัดเปิดช่องกล้ามเนื้อ 4 ช่องด่วน"
          }
        ]
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
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ Tibial Shaft Fractures"
            },
            "showTable": true,
            "corePrinciple": {
              "en": "Tibial shaft fractures (AO/OTA 42) are classified by energy pattern and soft tissue envelope status, evaluating mechanical alignment thresholds for closed functional casting (Sarmiento) versus reamed intramedullary nailing (IMN).",
              "th": "การจำแนกกระดูกแกนหน้าแข้งหัก (AO/OTA 42) อิงตามพลังงานการบาดเจ็บและสภาพเนื้อเยื่อรอบกระดูก เพื่อประเมินเกณฑ์มุมเอียงสำหรับใส่เฝือก Sarmiento กับการผ่าตัดตอกแกนเหล็กในโพรงกระดูก (IMN)"
            },
            "rules": [
              {
                "en": "Sarmiento Alignment Criteria (Coronal): Varus / Valgus angulation < 5°",
                "th": "เกณฑ์มุมเอียง Sarmiento (แนวระนาบ Coronal): มุม Varus / Valgus ต้อง < 5°"
              },
              {
                "en": "Sarmiento Alignment Criteria (Sagittal): Anterior / Posterior (AP) angulation < 10°",
                "th": "เกณฑ์มุมเอียง Sarmiento (แนวระนาบ Sagittal): มุมหน้า-หลัง (AP) ต้อง < 10°"
              },
              {
                "en": "Shortening & Rotation Criteria: Limb shortening < 10 mm (< 1 cm), internal/external rotation < 10°",
                "th": "เกณฑ์ความสั้นและการบิดหมุน: ขาสั้น < 10 มม. (< 1 ซม.) และการบิดหมุน < 10°"
              },
              {
                "en": "Cortical Contact Criteria: Minimum > 50% cortical contact between fracture ends",
                "th": "เกณฑ์หน้าสัมผัสกระดูก: ขอบกระดูกหักต้องสัมผัสกันอย่างน้อย > 50%"
              },
              {
                "en": "AO/OTA 42 Subtypes: 42-A (Simple spiral/oblique/transverse), 42-B (Wedge/butterfly), 42-C (Complex/segmental/comminuted)",
                "th": "การแบ่ง AO/OTA 42: 42-A (หักท่อนเดียว/เฉียง/ขวาง), 42-B (หักมีปีกผีเสื้อ), 42-C (หักหลายท่อน/ซับซ้อน/ละเอียด)"
              }
            ],
            "clinicalSignificance": [
              {
                "en": "Conservative management: Sarmiento functional cast bracing indicated ONLY for closed low-energy fractures meeting ALL alignment criteria after initial swelling subsides",
                "th": "การรักษาแบบไม่ผ่าตัด: ใส่เฝือก Sarmiento ได้เฉพาะเคสกระดูกหักปิดพลังงานต่ำที่ผ่านเกณฑ์มุมเอียงครบทุกข้อเมื่อยุบบวมแล้ว"
              },
              {
                "en": "Operative gold standard: Reamed Intramedullary Nailing (IMN) with static interlocking screws for fractures exceeding alignment thresholds, open injuries, or segmental fractures",
                "th": "มาตรฐานหลักการผ่าตัด: ตอกแกนเหล็กในโพรงกระดูก Reamed Intramedullary Nailing (IMN) ยึดหมุด Static สำหรับเคสที่มุมเอียงเกินเกณฑ์ กระดูกหักเปิด หรือหักหลายท่อน"
              },
              {
                "en": "Compartment Syndrome Warning: Tibia is the #1 body location for acute compartment syndrome; Delta pressure (Diastolic BP minus compartment pressure) < 30 mmHg requires emergency 4-compartment fasciotomy",
                "th": "การเฝ้าระวัง Compartment Syndrome: แกนหน้าแข้งเกิดภาวะนี้บ่อยที่สุด ค่า Delta pressure < 30 mmHg ต้องทำผ่าตัดเปิด 4 ช่องกล้ามเนื้อ (Fasciotomy) ฉุกเฉิน"
              },
              {
                "en": "Concomitant Injury: Distal 1/3 spiral shaft fractures have up to 20% associated posterior malleolus or ankle fractures; dedicated ankle films are mandatory",
                "th": "ภาวะพบร่วม: รอยหักเกลียวส่วนปลาย 1/3 มักพบกระดูกตาตุ่มหลังหักร่วมด้วยถึง 20% ต้องส่งภาพเอกซเรย์ข้อเท้าเสมอ"
              }
            ]
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
            },
            {
              "name": "Ankle Series (AP, Lateral & Mortise Views)",
              "details": {
                "en": "MANDATORY for all distal 1/3 tibial shaft fractures. Dedicated ankle radiographs (AP, Lateral, and 15-20° internally rotated Mortise view) are required to detect associated posterior malleolus fractures, which occur in up to 15-20% of distal tibial spiral fractures. A missed posterior malleolus fragment >25% of the articular surface is an operative indication.",
                "th": "บังคับส่งตรวจในกระดูกแกนแข้งส่วนล่าง 1/3 ทุกราย ภาพ AP, Lateral และ Mortise ของข้อเท้าจำเป็นสำหรับตรวจหากระดูก Posterior malleolus หักร่วม ซึ่งพบได้สูงถึง 15-20% ในกระดูกแกนแข้งหักแบบเกลียวส่วนปลาย ชิ้น Posterior malleolus > 25% ของพื้นผิวข้อมีข้อบ่งชี้ผ่าตัด"
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
                "decisionPrinciple": {
                  "en": "Low-energy 2-part fracture; closed non-displaced fractures meeting Sarmiento criteria (<5° varus/valgus, <10° AP, <1 cm shortening, >50% contact) can be managed with functional cast bracing; displaced fractures or polytrauma require reamed intramedullary nailing (IMN).",
                  "th": "รอยหัก 2 ชิ้นพลังงานต่ำ หากเป็นรอยหักปิดที่เข้าเกณฑ์ Sarmiento (มุมเอียง <5°, สั้น <1 ซม., แตะกัน >50%) รักษาด้วยเฝือก Sarmiento Cast ได้ แต่หากเคลื่อนตัวหรือเกิดในผู้ป่วยหลายระบบ ควรผ่าตัดใส่แกนดามในโพรงกระดูก (Reamed IMN)"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Closed, low-energy fracture meeting Sarmiento acceptable alignment criteria (<5° varus/valgus, <10° AP angulation, <10 mm shortening, >50% cortical contact)\n• Intact soft tissue envelope and compliant patient",
                    "th": "• รอยหักปิดพลังงานต่ำที่มุมเอียงอยู่ในเกณฑ์ยอมรับได้ของ Sarmiento (เอียงซ้ายขวา <5°, หน้าหลัง <10°, สั้น <1 ซม., ผนังแตะกัน >50%)\n• เนื้อเยื่อรอบกระดูกปกติและผู้ป่วยให้ความร่วมมือ"
                  },
                  "method": {
                    "en": "• Long leg cast with knee flexed 10–15° for 2–4 weeks; transition to Sarmiento patellar-tendon-bearing (PTB) functional cast brace once acute swelling subsides",
                    "th": "• ใส่เฝือกยาวดามขา (งอเข่า 10–15 องศา) 2–4 สัปดาห์แรก เมื่อยุบบวมเปลี่ยนเป็นเฝือกดาม Sarmiento PTB Cast Brace"
                  },
                  "rehabilitation": {
                    "en": "• Weight bearing as tolerated (WBAT) in PTB functional brace from week 4; active ankle and knee ROM exercises",
                    "th": "• เริ่มเดินลงน้ำหนักในเฝือก Sarmiento ตั้งแต่สัปดาห์ที่ 4 พร้อมฝึกขยับข้อเท้าและข้อเข่า"
                  },
                  "pitfalls": {
                    "en": "• Loss of reduction during swelling subsidence; strict serial biweekly radiographic monitoring mandatory",
                    "th": "• กระดูกอาจเลื่อนตัวหลุดแนวเมื่ออาการบวมลดลง ต้องติดตามภาพเอกซเรย์ทุก 2 สัปดาห์อย่างเคร่งครัด"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Displaced fractures failing Sarmiento alignment criteria\n• Polytrauma, bilateral leg injuries, or floating knee\n• Patient desire for early unrestricted joint motion",
                    "th": "• กระดูกหักเคลื่อนตัวที่มุมเอียงเกินเกณฑ์ Sarmiento\n• ผู้ป่วยบาดเจ็บหลายระบบ, ขาหักสองข้าง หรือภาวะ Floating Knee\n• ผู้ป่วยต้องการขยับข้อและลุกเดินได้เร็ว"
                  },
                  "method": {
                    "en": "• Antegrade Reamed Intramedullary Nailing (IMN) via infrapatellar or suprapatellar approach\n• Static proximal and distal interlocking screws (dual proximal and distal screws)",
                    "th": "• ผ่าตัดใส่แกนดามในโพรงกระดูก Reamed Antegrade IMN ผ่านทางใต้หรือเหนือลูกสะบ้า (Suprapatellar)\n• ล็อคสกรูส่วนบนและล่างแบบ Static"
                  },
                  "rehabilitation": {
                    "en": "• Immediate weight bearing as tolerated (WBAT) with crutches on post-op day 1\n• Active knee and ankle range of motion immediately",
                    "th": "• เริ่มฝึกเดินลงน้ำหนักเท่าที่ทนได้ (WBAT) ด้วยไม้ค้ำยันตั้งแต่วันแรกหลังผ่าตัด\n• ฝึกขยับข้อเข่าและข้อเท้าทันที"
                  },
                  "pitfalls": {
                    "en": "• Anterior knee pain with infrapatellar nailing; proximal fragment procurvatum / valgus malalignment during insertion",
                    "th": "• อาการปวดหน้าเข่าเรื้อรัง และระวังชิ้นกระดูกส่วนบนกระดกไปด้านหน้าหรือเอียงขณะใส่แกนเหล็ก"
                  }
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
                "decisionPrinciple": {
                  "en": "3-part fracture with butterfly wedge fragment; partial cortical contact; reamed intramedullary nailing (IMN) provides optimal load sharing and prevents malunion while preserving biological hematoma.",
                  "th": "กระดูกหัก 3 ชิ้นมีชิ้นปีกผีเสื้อ ผนังกระดูกแตะกันบางส่วน ผ่าตัดใส่แกนดามในโพรงกระดูก (Reamed IMN) ให้การถ่ายเทน้ำหนักที่ดีเยี่ยม ป้องกันกระดูกติดผิดรูป และรักษาเยื่อหุ้มกระดูก"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Truly non-displaced wedge fractures in low-demand patients meeting all Sarmiento criteria",
                    "th": "• กระดูกหักไม่เคลื่อนตัวในผู้ป่วยที่มีการใช้งานน้อยและมุมเอียงอยู่ในเกณฑ์ Sarmiento ทั้งหมด"
                  },
                  "method": {
                    "en": "• Long leg cast transitioned to Sarmiento PTB brace x 10–12 weeks",
                    "th": "• ใส่เฝือกยาวแล้วเปลี่ยนเป็นเฝือกดาม Sarmiento PTB Brace 10–12 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Protected partial weight bearing; monitor closely for wedge displacement",
                    "th": "• ลงน้ำหนักบางส่วนอย่างระมัดระวัง เฝ้าระวังชิ้นกระดูกเลื่อนหลุด"
                  },
                  "pitfalls": {
                    "en": "• High risk of shortening and angular collapse (especially varus)",
                    "th": "• เสี่ยงสูงต่อขาสั้นลงและกระดูกทรุดเอียงโก่ง (Varus collapse)"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All displaced wedge fractures (AO/OTA 42-B)\n• Loss of cortical contact or shortening >10 mm",
                    "th": "• กระดูกหักแบบมีชิ้นปีกผีเสื้อที่เคลื่อนตัวทุกราย (AO/OTA 42-B)\n• ขอบกระดูกไม่แตะกันหรือขาสั้นลง > 10 มม."
                  },
                  "method": {
                    "en": "• Reamed Antegrade Intramedullary Nailing (IMN) with static interlocking\n• Biological fixation: Do NOT perform open dissection or periosteal stripping of the butterfly fragment",
                    "th": "• ผ่าตัดใส่แกนดามในโพรงกระดูก Reamed Antegrade IMN พร้อมล็อคสกรูแบบ Static\n• การยึดตรึงเชิงชีวภาพ: ห้ามเปิดแผลเลาะเยื่อหุ้มกระดูกรอบชิ้นปีกผีเสื้อเด็ดขาด"
                  },
                  "rehabilitation": {
                    "en": "• Weight bearing as tolerated (WBAT) with assistive device on day 1–2\n• Active ankle dorsiflexion/plantarflexion to pump calf and prevent stiffness",
                    "th": "• เริ่มฝึกเดินลงน้ำหนักเท่าที่ทนได้ (WBAT) ด้วยอุปกรณ์ช่วยเดินในวันที่ 1–2 หลังผ่าตัด\n• ฝึกกระดกข้อเท้าขึ้นลงเพื่อกระตุ้นการไหลเวียนเลือดและป้องกันข้อติด"
                  },
                  "pitfalls": {
                    "en": "• Attempting anatomical open reduction of butterfly fragment devitalizes bone and leads to nonunion",
                    "th": "• การฝืนเปิดแผลเข้าไปจัดชิ้นปีกผีเสื้อจะทำให้กระดูกขาดเลือดและกลายเป็นกระดูกไม่ติด"
                  }
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
                "decisionPrinciple": {
                  "en": "High-energy multi-fragmentary or two-level segmental fracture; highly unstable in length and rotation; statically locked reamed IMN or Damage Control temporary bridging Ex-Fix for compromised soft tissues.",
                  "th": "กระดูกแตกละเอียดหลายชิ้นหรือหักสองระดับ ไม่มั่นคงอย่างยิ่งทั้งความยาวและการหมุน ผ่าตัดใส่แกนเหล็ก Static Locked Reamed IMN หรือใส่โครงยึดตรึงภายนอก (Ex-Fix) ชั่วคราวในระยะแรกหากเนื้อเยื่อบวมชอกช้ำมาก"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly CONTRAINDICATED (Results in nonunion, severe shortening >2-3 cm, and permanent disability)",
                    "th": "• ห้ามใช้วิธีนี้เด็ดขาด (ทำให้กระดูกไม่ติด ขาสั้น >2-3 ซม. และพิการถาวร)"
                  },
                  "method": {
                    "en": "• Not indicated",
                    "th": "• ไม่แนะนำ"
                  },
                  "rehabilitation": {
                    "en": "• N/A",
                    "th": "• ไม่ระบุ"
                  },
                  "pitfalls": {
                    "en": "• Severe malunion, nonunion, and chronic compartment dysfunction",
                    "th": "• กระดูกติดผิดรูป ขาสั้น และการทำงานของกล้ามเนื้อขาเสียถาวร"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All AO/OTA 42-C comminuted and segmental tibial fractures\n• High-energy polytrauma or open fracture patterns",
                    "th": "• กระดูกหน้าแข้งหักแตกละเอียดหรือหักเป็นท่อน (AO/OTA 42-C) ทุกราย\n• อุบัติเหตุรุนแรงหลายระบบหรือกระดูกหักแผลเปิด"
                  },
                  "method": {
                    "en": "• Definitive Fixation: Reamed Statically Locked Long IM Nail (infrapatellar or semi-extended suprapatellar nailing)\n• Staged Damage Control (DCO): Temporary ankle-to-tibia spanning external fixator for open fractures (Gustilo II/III) or severe soft tissue swelling, followed by conversion to IMN within 10–14 days\n• Urgent 4-compartment fasciotomy if compartment syndrome is diagnosed",
                    "th": "• ผ่าตัดยึดตรึงถาวร: ผ่าตัดใส่แกนดามในโพรงกระดูก Reamed Static Locked Long IM Nail (เข้าทาง Suprapatellar หรือ Infrapatellar)\n• ผ่าตัดแบ่งระยะ (DCO): ใส่โครงยึดภายนอก (Spanning Ex-Fix) ชั่วคราวในแผลเปิดหรือขาลอยเต่ง แล้วแปลงเป็นผ่าตัดใส่แกนเหล็ก IMN ภายใน 10–14 วัน\n• กรีดคลายกล้ามเนื้อ 4 ช่อง (Fasciotomy) ด่วนหากมีความดันช่องกล้ามเนื้อสูง"
                  },
                  "rehabilitation": {
                    "en": "• Touch-down to partial weight bearing (20–30 kg) x 6–8 weeks, advance to full WB only after radiographic bridging callus appears (10–14 weeks)",
                    "th": "• แตะเท้าลงน้ำหนักบางส่วน (20–30 กก.) 6–8 สัปดาห์แรก แล้วเริ่มลงน้ำหนักเต็มที่เมื่อเห็นกระดูกงอกเชื่อมรอยหัก (10–14 สัปดาห์)"
                  },
                  "pitfalls": {
                    "en": "• Highest risk of acute Compartment Syndrome (#1 site in body) — monitor 5 Ps and intracompartmental pressure\n• Intercalary segmental fragment rotational malalignment",
                    "th": "• เสี่ยงต่อภาวะ Compartment Syndrome สูงสุดในร่างกาย ต้องเฝ้าระวังอาการ 5 Ps และตรวจวัดความดันช่องกล้ามเนื้อ\n• ระวังท่อนกระดูกตรงกลางติดบิดหมุนผิดแนว"
                  }
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
      "regionConcept": {
        "physicalExam": [
          {
            "sign": "Ottawa Ankle Rules",
            "positive": {
              "en": "Bone tenderness along posterior 6cm or tip of lateral/medial malleolus, or inability to bear weight for 4 steps (warrants X-ray series)",
              "th": "กดเจ็บบริเวณขอบหลัง 6 ซม. หรือปลายตาตุ่ม (นอกหรือใน) หรือไม่สามารถเดินลงน้ำหนักได้ 4 ก้าว (เป็นข้อบ่งชี้ในการถ่าย X-ray)"
            }
          },
          {
            "sign": "Syndesmotic Squeeze Test",
            "positive": {
              "en": "Pain localized at distal tibiofibular joint when compressing mid-calf (indicates syndesmotic ligament injury)",
              "th": "ปวดบริเวณข้อต่อหน้าแข้งส่วนปลายเมื่อบีบกระชับบริเวณกลางน่อง (แสดงถึงการบาดเจ็บของเส้นเอ็น Syndesmosis)"
            }
          },
          {
            "sign": "External Rotation Stress Test",
            "positive": {
              "en": "Pain at syndesmosis or widening of medial clear space upon passive external rotation of foot (indicates syndesmotic or deltoid tear)",
              "th": "ปวดบริเวณ Syndesmosis หรือช่อง Medial clear space กว้างออกเมื่อหมุนเท้าออกด้านนอก (แสดงถึงการฉีกขาดของ Syndesmosis หรือเอ็น Deltoid)"
            }
          }
        ],
        "acceptableAlignment": [
          {
            "parameter": {
              "en": "Medial Clear Space (Mortise View)",
              "th": "ระยะห่าง Medial Clear Space (ท่า Mortise)"
            },
            "threshold": "≤ 4 mm",
            "note": {
              "en": "Medial clear space >4mm indicates deltoid ligament disruption and talar lateral shift",
              "th": "ระยะ Medial clear space >4 มม. แสดงถึงเอ็น Deltoid ฉีกขาดและกระดูก Talus เคลื่อนออกด้านนอก"
            }
          },
          {
            "parameter": {
              "en": "Talar Tilt Angle",
              "th": "มุมเอียงกระดูกทาเลส (Talar Tilt)"
            },
            "threshold": "< 2°",
            "note": {
              "en": "Talar tilt >2° compared to opposite side indicates joint incongruity and articular instability",
              "th": "มุมเอียง Talus tilt >2 องศาเมื่อเทียบกับข้างปกติแสดงถึงหน้าสัมผัสข้อเท้าเอียงไม่สมดุล"
            }
          }
        ],
        "redFlags": [
          {
            "en": "Open Ankle Fracture / Dislocation: Surgical emergency requiring immediate IV antibiotics, joint reduction, and operative debridement",
            "th": "ข้อเท้าหักแผลเปิดหรือข้อหลุด: ภาวะฉุกเฉินทางผ่าตัด ต้องดึงข้อเข้าที่ ให้ยาปฏิชีวนะ และล้างแผลผ่าตัดทันที"
          },
          {
            "en": "Skin Tenting over Medial Malleolus or Fibula: High risk of rapid focal skin necrosis; urgent closed reduction and splinting mandatory to relieve tension",
            "th": "ผิวหนังถูกตึงดึงรั้ง (Skin Tenting) บริเวณตาตุ่ม: เสี่ยงต่อผิวหนังเน่าตายอย่างรวดเร็ว ต้องทำการดึงข้อจัดเข้าที่ด่วนเพื่อลดแรงตึง"
          }
        ],
        "associatedInjuries": [
          {
            "injury": {
              "en": "Maisonneuve Fracture Pattern",
              "th": "รอยหักแบบ Maisonneuve Fracture"
            },
            "trigger": {
              "en": "Always palpate proximal fibula head/neck in Weber C or isolated medial clear space widening to avoid missing proximal fibular fracture",
              "th": "ต้องคลำตรวจหัวกระดูกน่องส่วนบนเสมอในกรณี Weber C หรือเมื่อพบช่อง Medial clear space กว้าง เพื่อไม่ให้พลาดรอยหักกระดูกน่องส่วนบน"
            }
          }
        ],
        "clinicalPearls": [
          {
            "en": "Weber A fractures are stable infrasyndesmotic injuries manageable conservatively with a walking cast or boot.",
            "th": "กระดูกหักชนิด Weber A เป็นการบาดเจ็บใต้ระดับ syndesmosis ที่มั่นคง สามารถรักษาแบบไม่ผ่าตัดด้วยเฝือกสั้นหรือ CAM boot"
          },
          {
            "en": "Weber B fracture stability depends entirely on medial integrity; Medial clear space ≤4mm can be treated in cast, whereas >4mm indicates instability requiring ORIF.",
            "th": "ความมั่นคงของ Weber B ขึ้นอยู่กับโครงสร้างด้านใน หาก Medial clear space ≤4 มม. ใส่เฝือกได้ แต่ถ้า >4 มม. ถือว่าไม่มั่นคงต้องผ่าตัด ORIF"
          },
          {
            "en": "Weber C fractures involve complete syndesmotic disruption and require ORIF with syndesmotic screw or suture-button fixation.",
            "th": "กระดูกหักชนิด Weber C มีการฉีกขาดของ syndesmosis สมบูรณ์แบบ ต้องผ่าตัด ORIF ร่วมกับยึด syndesmotic screw หรือ suture-button เสมอ"
          }
        ],
        "imageUrl": "/images/concepts/anatomy_ankle___distal_malleoli.png"
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
              "en": "Danis-Weber Ankle Clinical Concept",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ Danis-Weber Ankle Classification"
            },
            "corePrinciple": {
              "en": "Danis-Weber classifies ankle injuries based on the fibular fracture level relative to the syndesmosis, directly reflecting syndesmotic complex integrity, talar displacement, and overall mortise stability.",
              "th": "Danis-Weber จำแนกกระดูกข้อเท้าหักตามระดับความสูงของรอยหัก Fibula เทียบกับเส้นเอ็น Syndesmosis ซึ่งสะท้อนถึงความสมบูรณ์ของเอ็นยึด การเคลื่อนหลุดของกระดูก Talus และความมั่นคงของเบ้าข้อเท้า"
            },
            "rules": [
              {
                "en": "Weber A (Infrasyndesmotic): Fracture line below syndesmosis -> Syndesmosis intact -> Mortise STABLE",
                "th": "Weber A (หักต่ำกว่าข้อ): รอยหักต่ำกว่าระดับ Syndesmosis -> เอ็นยึดสมบูรณ์ดี -> ข้อเท้า มั่นคง"
              },
              {
                "en": "Weber B (Transsyndesmotic): Fracture at level of syndesmosis -> ~50% syndesmotic tear -> Medial Clear Space (MCS) ≤4 mm (Stable) vs >4 mm (Unstable)",
                "th": "Weber B (หักระดับข้อ): รอยหักระดับเดียวกับ Syndesmosis -> เอ็นยึดขาดบางส่วน (~50%) -> ตรวจ Medial Clear Space (MCS) ≤4 มม. (มั่นคง) vs >4 มม. (ไม่มั่นคง)"
              },
              {
                "en": "Weber C (Suprasyndesmotic): Fracture above syndesmosis -> 100% syndesmotic disruption + Deltoid/Medial fracture -> GROSSLY UNSTABLE",
                "th": "Weber C (หักสูงกว่าข้อ): รอยหักสูงกว่าระดับ Syndesmosis -> เอ็นยึดขาดสมบูรณ์ 100% ร่วมกับเอ็น Deltoid/ตาตุ่มในหัก -> ไม่มั่นคงอย่างรุนแรง"
              },
              {
                "en": "AO/OTA 44 Correlation: 44-A (Infrasyndesmotic / Weber A), 44-B (Transsyndesmotic / Weber B), 44-C (Suprasyndesmotic / Weber C)",
                "th": "การเชื่อมโยง AO/OTA 44: 44-A (Weber A), 44-B (Weber B), 44-C (Weber C)"
              }
            ],
            "clinicalSignificance": [
              {
                "en": "Weber A: Non-operative treatment with short leg walking cast or CAM boot for 4–6 weeks with full weight-bearing as tolerated",
                "th": "Weber A: รักษาแบบไม่ผ่าตัด ใส่เฝือก short leg walking cast หรือ CAM boot 4–6 สัปดาห์ ลงน้ำหนักได้ทันที"
              },
              {
                "en": "Weber B: Non-operative if non-displaced with MCS ≤4 mm on gravity stress view; ORIF (1/3 tubular plate + lag screw) indicated if MCS >4 mm or medial malleolus displaced",
                "th": "Weber B: ใส่เฝือกหากไม่เคลื่อนและ MCS ≤4 มม. ในภาพ Stress view; แต่ถ้า MCS >4 มม. หรือมีตาตุ่มในหักเคลื่อน ต้องผ่าตัด ORIF (1/3 tubular plate + lag screw)"
              },
              {
                "en": "Weber C: Mandatory ORIF of fibula and medial malleolus plus syndesmotic screw / Tightrope fixation (placed 2–3 cm above joint line)",
                "th": "Weber C: มีข้อบ่งชี้ผ่าตัด ORIF กระดูก Fibula และตาตุ่มใน ร่วมกับการยึด Syndesmotic screw / Tightrope (2–3 ซม. เหนือระดับข้อ)"
              },
              {
                "en": "High Fibular Warning: Always palpate proximal fibular neck in high Weber C injuries to rule out Maisonneuve fracture variant",
                "th": "คำเตือนรอยหักสูง: ต้องคลำตรวจหัวกระดูก Fibula ส่วนบนเสมอในเคส Weber C เพื่อไม่ให้หลุดการตรวจ Maisonneuve fracture"
              }
            ]
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
            },
            {
              "name": "External Rotation (Gravity) Stress View",
              "details": {
                "en": "Critical view for detecting occult deltoid ligament tears in apparent isolated fibula fractures. Patient lies in lateral decubitus with ankle unsupported. Medial clear space > 4 mm on stress view = deltoid ligament rupture (medial instability) -> upgrades SER II to SER IV equivalent -> Operative Indication. Distinguishes stable (SER II / Weber B stable) from unstable ankle fractures.",
                "th": "View สำคัญมากสำหรับตรวจหาการฉีกขาดของเอ็น Deltoid ที่ซ่อนอยู่ในกระดูกน่องหักโดดๆ ผู้ป่วยนอนตะแคง ให้ข้อเท้าแขวนไม่รับน้ำหนัก ถ้า Medial clear space > 4 มม. = เอ็น Deltoid ขาด -> เปลี่ยนเป็นข้อเท้าไม่มั่นคง -> มีข้อบ่งชี้ผ่าตัด"
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
                "decisionPrinciple": {
                  "en": "Avulsion fracture below intact syndesmosis; stable ankle mortise; conservative management with walking boot or cast; ORIF only if vertical medial malleolus push-off is present.",
                  "th": "รอยหักกะเทาะต่ำกว่าระดับ Syndesmosis เบ้าข้อเท้ามั่นคงดี รักษาแบบไม่ผ่าตัดด้วยเฝือกสั้นหรือ CAM boot ได้ ผ่าตัดเฉพาะเมื่อมีตาตุ่มในหักแนวตั้ง (SAD Stage II)"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Isolated Weber A fracture with intact medial structures (MCS ≤4 mm, no medial tenderness)\n• Non-displaced fibular avulsion",
                    "th": "• กระดูกตาตุ่มนอกหัก Weber A โดดๆ โดยโครงสร้างด้านในสมบูรณ์ (MCS ≤4 มม. ไม่เจ็บด้านใน)\n• รอยหักกะเทาะไม่เคลื่อนตัว"
                  },
                  "method": {
                    "en": "• Short leg walking cast or removable CAM boot for 4–6 weeks",
                    "th": "• ใส่เฝือกสั้นเดินได้ (Short Leg Cast) หรือรองเท้าดามข้อเท้า (CAM Boot) นาน 4–6 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Immediate full weight-bearing as tolerated (WBAT) in boot on day 1\n• Early active ankle range of motion exercises",
                    "th": "• เริ่มเดินลงน้ำหนักเต็มที่เท่าที่ทนได้ในบูทได้ตั้งแต่วันแรก\n• ฝึกขยับกระดกข้อเท้าเบาๆ"
                  },
                  "pitfalls": {
                    "en": "• Over-treating stable Weber A with unnecessary surgery; overlooking associated vertical medial malleolus fracture (SAD II)",
                    "th": "• การผ่าตัดโดยไม่จำเป็นในข้อเท้าที่มั่นคง; ระวังตรวจพลาดรอยหักแนวตั้งของตาตุ่มใน (SAD II)"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Associated displaced vertical oblique medial malleolus fracture (SAD Stage II)\n• Widely displaced fibular fragment (>2 mm) with skin tenting",
                    "th": "• พบร่วมกับกระดูกตาตุ่มในหักแนวตั้งเคลื่อนตัว (SAD Stage II)\n• ชิ้นกระดูกตาตุ่มนอกเคลื่อนหลุดมาก (>2 มม.) ดึงรั้งผิวหนัง"
                  },
                  "method": {
                    "en": "• Open reduction and internal fixation (ORIF) of medial malleolus with vertical anti-glide plate or cancellous lag screws\n• Tension band wiring or 1/3 tubular plate for lateral malleolus if indicated",
                    "th": "• ผ่าตัดเปิดจัดกระดูกและยึดตาตุ่มใน (ORIF) ด้วยแผ่นเหล็ก Medial Anti-glide Plate หรือ Lag screws\n• ยึดตาตุ่มนอกด้วย Tension Band Wiring หรือแผ่นเหล็ก 1/3 Tubular Plate"
                  },
                  "rehabilitation": {
                    "en": "• Protected partial weight bearing x 4–6 weeks with ORIF, advance to full WB",
                    "th": "• ลงน้ำหนักบางส่วน 4–6 สัปดาห์แรก แล้วเริ่มลงน้ำหนักเต็มที่"
                  },
                  "pitfalls": {
                    "en": "• Inadequate fixation of vertical medial malleolus shear line resulting in proximal migration",
                    "th": "• การยึดกระดูกตาตุ่มในไม่แข็งแรงพอจะทำให้ชิ้นกระดูกเลื่อนหลุดขึ้นด้านบนจากแรงเฉือน"
                  }
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
                "decisionPrinciple": {
                  "en": "Spiral fracture at syndesmosis level (SER pattern); stability governed by medial side; stable (MCS ≤4 mm on stress view) can be treated in cast, whereas unstable (MCS >4 mm or displaced medial malleolus) requires ORIF.",
                  "th": "รอยหักเกลียวที่ระดับ Syndesmosis ความมั่นคงขึ้นอยู่กับฝั่งด้านในเป็นหลัก หากไม่เคลื่อน (MCS ≤4 มม. ใน Stress view) รักษาด้วยเฝือกได้ แต่หากไม่มั่นคง (MCS >4 มม. หรือมีตาตุ่มในหัก) จำเป็นต้องผ่าตัด ORIF"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Truly stable Weber B (SER II): Non-displaced fibula AND intact deltoid (Medial Clear Space ≤4 mm on gravity/manual external rotation stress view)\n• No medial joint tenderness or ecchymosis",
                    "th": "• ข้อเท้าที่มั่นคงแท้จริง (SER II): กระดูกตาตุ่มนอกไม่เคลื่อน และเอ็น Deltoid ด้านในสมบูรณ์ (Medial Clear Space ≤4 มม. ใน Stress View)\n• ไม่เจ็บและไม่มีรอยช้ำที่ตาตุ่มใน"
                  },
                  "method": {
                    "en": "• Short leg non-weight-bearing cast or rigid CAM boot for 4–6 weeks",
                    "th": "• ใส่เฝือกสั้นไม่ลงน้ำหนักหรือ CAM Boot นาน 4–6 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Touch-down weight bearing x 3–4 weeks, then advance to WBAT in boot; serial radiographs at 1, 2, and 4 weeks to verify no talar shift",
                    "th": "• แตะเท้าลงน้ำหนัก 3–4 สัปดาห์แรก แล้วเริ่มลงน้ำหนักในบูท ติดตามภาพเอกซเรย์สัปดาห์ที่ 1, 2 และ 4 เพื่อยืนยันว่ากระดูก Talus ไม่เลื่อน"
                  },
                  "pitfalls": {
                    "en": "• Failure to perform stress radiography misses occult deltoid rupture (SER IV equivalent), leading to rapid joint degeneration",
                    "th": "• หากไม่ตรวจ Stress view จะตรวจพลาดเอ็น Deltoid ขาดที่ซ่อนอยู่ (SER IV Equivalent) ทำให้ข้อเท้าหลุดและข้อเสื่อมรวดเร็ว"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Unstable Weber B: Displaced fibula (>2 mm) OR widened Medial Clear Space (>4 mm on stress view) OR associated medial malleolus fracture\n• Talar tilt >2° or loss of fibular length",
                    "th": "• ข้อเท้าไม่มั่นคง: ตาตุ่มนอกเคลื่อน (>2 มม.) หรือช่อง Medial Clear Space กว้าง (>4 มม. ใน Stress view) หรือมีตาตุ่มในหักร่วม\n• กระดูก Talus เอียง >2 องศา หรือกระดูกน่องสั้นลง"
                  },
                  "method": {
                    "en": "• Anatomical ORIF of lateral malleolus: Interfragmentary lag screw (anterior to posterior) + lateral or posterolateral neutralization / anti-glide 1/3 tubular plate\n• Fix medial malleolus with 4.0 mm cannulated cancellous screws\n• Intraoperative Cotton Hook Test: If syndesmosis remains unstable after bony fixation, insert syndesmotic screw or suture-button (TightRope)",
                    "th": "• ผ่าตัดจัดกระดูกตาตุ่มนอกให้เข้าที่แนบสนิท: ใส่ Lag screw ยึดขวาง + ดามแผ่นเหล็ก 1/3 Tubular Plate ด้านข้างหรือด้านหลัง (Anti-glide)\n• ยึดตาตุ่มในด้วยสกรูขนาด 4.0 มม.\n• ตรวจ Cotton Test ในห้องผ่าตัด: หากเอ็น Syndesmosis ยังหลวม ให้ยึดด้วย Syndesmotic Screw หรือ Suture-button (TightRope)"
                  },
                  "rehabilitation": {
                    "en": "• Early active ankle ROM out of splint at 10–14 days post-op\n• Protected partial weight bearing (PWB) x 6 weeks, then advance to full WB",
                    "th": "• เริ่มฝึกกระดกข้อเท้าหลังตัดไหมที่ 10–14 วัน\n• ลงน้ำหนักบางส่วน 6 สัปดาห์แรก แล้วเริ่มลงน้ำหนักเต็มที่"
                  },
                  "pitfalls": {
                    "en": "• Fibular malreduction (shortening or external rotation) causes persistent lateral talar subluxation and 42% reduction in tibiotalar contact area",
                    "th": "• หากจัดกระดูกน่องสั้นลงหรือบิดหมุนผิดแนวเพียง 1 มม. จะทำให้พื้นที่สัมผัสรับน้ำหนักของข้อเท้าลดลงถึง 42%"
                  }
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
                "decisionPrinciple": {
                  "en": "Fibular fracture above syndesmosis with complete syndesmotic disruption and medial injury; grossly unstable; mandatory ORIF of fibula and medial malleolus plus rigid syndesmotic stabilization (screws or suture-button).",
                  "th": "รอยหักสูงกว่าระดับ Syndesmosis ร่วมกับเอ็นยึดขาด 100% และโครงสร้างด้านในพังทลาย ข้อเท้าไม่มั่นคงอย่างยิ่ง ต้องผ่าตัด ORIF ดามกระดูกและยึดตรึงเอ็น Syndesmosis เสมอ"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly CONTRAINDICATED (Results in permanent talar subluxation, syndesmotic diastasis, and rapid osteoarthritis)",
                    "th": "• ห้ามใช้วิธีนี้เด็ดขาด (ทำให้ข้อเท้าหลุดหลวม เอ็นถ่างกว้างถาวร และข้อเสื่อมรวดเร็ว)"
                  },
                  "method": {
                    "en": "• Not indicated",
                    "th": "• ไม่แนะนำ"
                  },
                  "rehabilitation": {
                    "en": "• N/A",
                    "th": "• ไม่ระบุ"
                  },
                  "pitfalls": {
                    "en": "• Severe chronic instability, persistent ankle pain, and devastating joint destruction within 1–2 years",
                    "th": "• ข้อเท้าหลุดหลวมเรื้อรัง ปวดรุนแรง และข้อเท้าพังทลายภายใน 1–2 ปี"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All Weber C ankle fractures (AO/OTA 44-C)\n• Maisonneuve fractures, Pronation-External Rotation (PER), or Pronation-Abduction (PAB)",
                    "th": "• ข้อเท้าหักชนิด Weber C ทุกราย (AO/OTA 44-C)\n• รอยหักแบบ Maisonneuve, PER หรือ PAB"
                  },
                  "method": {
                    "en": "• ORIF of distal/midshaft fibula with locking or neutralization plate to restore anatomical fibular length and rotation\n• ORIF of medial malleolus / deltoid exploration\n• Mandatory syndesmotic stabilization: 1 or 2 quadricortical/tricortical syndesmotic screws (3.5 mm or 4.5 mm) OR dynamic suture-button device (TightRope) placed 2–3 cm above joint line parallel to tibiotalar joint\n• For proximal Maisonneuve fracture: ORIF of medial malleolus + direct syndesmotic reduction and screw/button fixation (fibular head is left untouched)",
                    "th": "• ผ่าตัดดามแผ่นเหล็กกระดูก Fibula คืนความยาวและมุมหมุนให้ถูกต้อง\n• ผ่าตัดยึดตาตุ่มในด้วยสกรู\n• ต้องยึดตรึงเอ็น Syndesmosis เสมอ: ใส่สกรู Syndesmotic Screws 1–2 ตัว (ขนาด 3.5 หรือ 4.5 มม.) หรือใช้อุปกรณ์ Suture-button (TightRope) เหนือระดับข้อ 2–3 ซม. ขนานกับผิวข้อ\n• กรณี Maisonneuve: ยึดตาตุ่มใน + ดึงจัด Syndesmosis แล้วยึดสกรู (ไม่ต้องผ่าตัดเปิดที่หัวกระดูกน่องใต้เข่า)"
                  },
                  "rehabilitation": {
                    "en": "• Strict non-weight bearing (NWB) x 6–8 weeks in splint/boot; advance to full WB at 8–10 weeks; syndesmotic screws can be removed at 10–12 weeks prior to heavy loading if rigid quadricortical screws are used",
                    "th": "• ห้ามลงน้ำหนัก (NWB) 6–8 สัปดาห์แรก เริ่มลงน้ำหนักเต็มที่ที่ 8–10 สัปดาห์ อาจพิจารณาผ่าตัดเอาสกรู Syndesmotic ออกที่ 10–12 สัปดาห์ก่อนเริ่มใช้งานหนัก"
                  },
                  "pitfalls": {
                    "en": "• Missing proximal Maisonneuve fracture due to omitting proximal fibular palpation\n• Over-tightening syndesmosis in plantarflexion (must reduce syndesmosis in neutral dorsiflexion)",
                    "th": "• ตรวจพลาด Maisonneuve จากการลืมคลำตรวจกระดูกน่องใต้เข่า\n• การขันสกรู Syndesmosis แน่นเกินไปขณะเท้าชี้ลง (ต้องจัดกระดูกในท่าข้อเท้ากระดก 90 องศา)"
                  }
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
              "en": "Lauge-Hansen Ankle Mechanism Concept",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ Lauge-Hansen Classification"
            },
            "imageUrl": "/images/lauge_hansen/concept.png",
            "corePrinciple": {
              "en": "Lauge-Hansen classifies ankle fractures based on foot position (Supination/Pronation) and deforming force direction (External Rotation/Adduction/Abduction), predicting sequential ring-failure stages of ligaments and malleoli.",
              "th": "Lauge-Hansen จำแนกกระดูกข้อเท้าหักตามท่าทางของเท้า (Supination/Pronation) และทิศทางแรงบิด (External Rotation/Adduction/Abduction) เพื่อทำนายลำดับขั้นความเสียหายทวีคูณรอบวงแหวนข้อเท้า"
            },
            "rules": [
              {
                "en": "SER (Supination-External Rotation, ~60–70%): Stage I (AITFL) -> Stage II (Spiral Fibula / Weber B) -> Stage III (PITFL) -> Stage IV (Medial Malleolus / Deltoid tear)",
                "th": "SER (หงายเท้า-หมุนออกนอก, พบบ่อยสุด 60–70%): Stage I (เอ็น AITFL) -> Stage II (Fibula หักเฉียง/Weber B) -> Stage III (เอ็น PITFL) -> Stage IV (ตาตุ่มในหัก/Deltoid ขาด)"
              },
              {
                "en": "SAD (Supination-Adduction, ~15–20%): Stage I (Transverse Fibula / Weber A) -> Stage II (Vertical Medial Malleolus push-off)",
                "th": "SAD (หงายเท้า-หุบเข้าใน, 15–20%): Stage I (Fibula หักขวางต่ำ/Weber A) -> Stage II (ตาตุ่มในหักแนวตั้ง)"
              },
              {
                "en": "PER (Pronation-External Rotation, ~10%): Stage I (Medial side) -> Stage II (AITFL) -> Stage III (High Fibula / Weber C) -> Stage IV (PITFL)",
                "th": "PER (คว่ำเท้า-หมุนออกนอก, 10%): Stage I (ด้านใน) -> Stage II (เอ็น AITFL) -> Stage III (Fibula หักสูง/Weber C) -> Stage IV (เอ็น PITFL)"
              },
              {
                "en": "PAB (Pronation-Abduction, ~5%): Stage I (Medial side) -> Stage II (Syndesmosis) -> Stage III (Butterfly Fibular fracture above joint line)",
                "th": "PAB (คว่ำเท้า-กางออกนอก, 5%): Stage I (ด้านใน) -> Stage II (เอ็น Syndesmosis) -> Stage III (Fibula หักปีกผีเสื้อเหนือข้อ)"
              }
            ],
            "clinicalSignificance": [
              {
                "en": "Closed reduction maneuver: Reverses the exact mechanism of injury (e.g. SER reduced by hyper-pronation and internal rotation)",
                "th": "การดึงจัดกระดูก (Closed reduction): ดำเนินการย้อนทิศทางของกลไกการหัก (เช่น SER ดัดแก้ด้วยการคว่ำเท้าและหมุนเข้าด้านใน)"
              },
              {
                "en": "SER Management: Stage I–II with intact medial side managed conservatively in cast; Stage III–IV indicates mortise instability requiring ORIF",
                "th": "แนวทางรักษา SER: Stage I–II ที่ฝั่งด้านในสมบูรณ์รักษาโดยใส่เฝือก; Stage III–IV แสดงถึงข้อย้วยไม่มั่นคงต้องผ่าตัด ORIF"
              },
              {
                "en": "SAD Stage II Plating: Vertical medial malleolus fracture requires rigid anti-glide plate fixation on the medial surface to prevent shear displacement",
                "th": "แนวทางรักษา SAD Stage II: กระดูกตาตุ่มในหักแนวตั้งต้องผ่าตัดดาม Medial Anti-glide Plate เพื่อต้านแรงเฉือน"
              },
              {
                "en": "PER/PAB Surgical Rule: Always requires ORIF of fibula and medial structures plus syndesmotic stabilization",
                "th": "แนวทางรักษา PER/PAB: ต้องผ่าตัด ORIF ทั้ง Fibula ด้านใน และยึดดามเอ็น Syndesmosis เสมอ"
              },
              {
                "en": "SER Stage IV Equivalent Pitfall: Spiral fibula with intact medial malleolus but MCS ≥4 mm indicates deltoid tear; must not be mistaken for simple Weber B",
                "th": "จุดตาย SER Stage IV Equivalent: รอยหักเกลียว Fibula ที่ตาตุ่มในไม่หักแต่พบ MCS ≥4 มม. แสดงว่าเอ็น Deltoid ขาด ต้องผ่าตัด ห้ามรักษาแบบ Weber B ธรรมดา"
              }
            ]
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
            },
            {
              "name": "External Rotation (Gravity) Stress View",
              "details": {
                "en": "Critical view for detecting occult deltoid ligament tears in apparent isolated fibula fractures. Patient lies in lateral decubitus with ankle unsupported. Medial clear space > 4 mm on stress view = deltoid ligament rupture (medial instability) -> upgrades SER II to SER IV equivalent -> Operative Indication. Distinguishes stable (SER II) from unstable (SER IV) ankle fractures.",
                "th": "View สำคัญมากสำหรับตรวจหาการฉีกขาดของเอ็น Deltoid ที่ซ่อนอยู่ในกระดูกน่องหักโดดๆ ผู้ป่วยนอนตะแคง ให้ข้อเท้าแขวนไม่รับน้ำหนัก ถ้า Medial clear space > 4 มม. = เอ็น Deltoid ขาด -> เปลี่ยน SER II เป็น SER IV equivalent -> มีข้อบ่งชี้ผ่าตัด"
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
                "decisionPrinciple": {
                  "en": "Pure ligamentous avulsion/rupture of AITFL; bony architecture intact; conservative immobilization with walking boot.",
                  "th": "เอ็น AITFL ฉีกขาดเดี่ยวๆ โดยไม่มีกระดูกหักและเบ้าข้อเท้ามั่นคงดี รักษาแบบประคับประคองด้วยการใส่บูทหรือเฝือกสั้นชั่วคราว"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Isolated AITFL tear without fibular or medial malleolus fracture\n• Medial Clear Space < 4 mm",
                    "th": "• เอ็น AITFL ฉีกขาดโดยไม่มีกระดูกตาตุ่มนอกหรือในหัก\n• ช่องว่าง Medial Clear Space < 4 มม."
                  },
                  "method": {
                    "en": "• Removable short leg walking boot or elastic compressive wrap for 2–3 weeks for pain relief",
                    "th": "• ใส่รองเท้าบูท CAM Boot แบบถอดได้ หรือพันผ้ายืดประคอง 2–3 สัปดาห์เพื่อบรรเทาอาการปวด"
                  },
                  "rehabilitation": {
                    "en": "• Weight bearing as tolerated (WBAT) immediately; early active ankle motion as pain subsides",
                    "th": "• เดินลงน้ำหนักได้ทันทีตามทนได้ เริ่มฝึกขยับข้อเท้าเมื่ออาการปวดทุเลา"
                  },
                  "pitfalls": {
                    "en": "• Over-treating with rigid cast; failure to palpate medial side",
                    "th": "• การรักษาเกินจำเป็นด้วยเฝือกแข็ง; ลืมคลำตรวจเอ็น Deltoid ฝั่งด้านใน"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Strictly not indicated for isolated SER I",
                    "th": "• ไม่มีข้อบ่งชี้ผ่าตัดใน SER I เดี่ยวๆ"
                  },
                  "method": {
                    "en": "• Not indicated",
                    "th": "• ไม่แนะนำ"
                  },
                  "rehabilitation": {
                    "en": "• N/A",
                    "th": "• ไม่ระบุ"
                  },
                  "pitfalls": {
                    "en": "• Unnecessary surgery",
                    "th": "• การผ่าตัดโดยไม่มีข้อบ่งชี้"
                  }
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
                "decisionPrinciple": {
                  "en": "Distal fibular spiral fracture with intact medial side; stable mortise (MCS ≤4 mm); conservative treatment with short leg walking cast or boot; surgery only if displaced >2 mm with shortening.",
                  "th": "กระดูกตาตุ่มนอกหักเกลียวโดยโครงสร้างด้านในสมบูรณ์ ข้อเท้ามั่นคง (MCS ≤4 มม.) รักษาด้วยเฝือกสั้นได้ ผ่าตัดเฉพาะเมื่อกระดูกเคลื่อน >2 มม. หรือขาสั้นลง"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Non-displaced or minimally displaced (<2 mm) spiral fibula fracture with intact medial structures\n• Negative gravity or manual external rotation stress radiograph (MCS ≤ 4 mm)",
                    "th": "• กระดูกตาตุ่มนอกหักไม่เคลื่อนหรือเคลื่อนน้อย (<2 มม.) โดยด้านในสมบูรณ์\n• ผลตรวจ Stress View ปกติ (Medial Clear Space ≤ 4 มม.)"
                  },
                  "method": {
                    "en": "• Short leg walking cast or rigid CAM boot for 4–6 weeks",
                    "th": "• ใส่เฝือกสั้นเดินได้หรือ CAM Boot นาน 4–6 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Protected weight bearing for 2 weeks, then advance to full WB in boot; active ankle ROM at 4 weeks",
                    "th": "• เดินลงน้ำหนักบางส่วน 2 สัปดาห์แรก แล้วเริ่มลงน้ำหนักเต็มที่ในบูท เริ่มขยับข้อเท้าที่ 4 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Failure to verify medial clear space on stress view (occult SER IV deltoid tear)",
                    "th": "• ตรวจพลาดเอ็น Deltoid ขาด (SER IV Equivalent) หากไม่ถ่ายภาพ Stress view"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Displaced fibular fracture (>2 mm shortening or lateral displacement)\n• Positive external rotation stress radiograph (upgraded to SER IV equivalent)",
                    "th": "• กระดูกตาตุ่มนอกเคลื่อนตัว (>2 มม. หรือสั้นลง)\n• ผลตรวจ Stress View พบช่องด้านในถ่างกว้าง (อัปเกรดเป็น SER IV Equivalent)"
                  },
                  "method": {
                    "en": "• ORIF of lateral malleolus: Interfragmentary 3.5 mm lag screw from anterior-to-posterior perpendicular to fracture plane + posterolateral anti-glide or lateral neutralization plate",
                    "th": "• ผ่าตัดจัดกระดูกตาตุ่มนอก (ORIF): ใส่ Lag screw ขนาด 3.5 มม. ทิศทางหน้าไปหลัง + ดามแผ่นเหล็ก 1/3 Tubular Plate ด้านหลัง (Anti-glide) หรือด้านข้าง"
                  },
                  "rehabilitation": {
                    "en": "• Active ankle ROM out of splint at 10–14 days; partial WB x 4–6 weeks, full WB at 6–8 weeks",
                    "th": "• เริ่มฝึกขยับข้อเท้าหลังตัดไหม 10–14 วัน ลงน้ำหนักบางส่วน 4–6 สัปดาห์ และลงเต็มที่ที่ 6–8 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Inadequate restoration of fibular length leads to persistent lateral talar subluxation",
                    "th": "• หากดึงความยาวกระดูกน่องกลับมาไม่เท่าเดิม จะทำให้ข้อเท้าหลุดเอียงออกด้านข้าง"
                  }
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
                "decisionPrinciple": {
                  "en": "Posterior malleolus avulsion (PITFL) + fibular fracture; operative fixation of fibula ± direct posterior malleolus fixation if fragment >25% of articular surface or persistent posterior talar subluxation.",
                  "th": "กระดูกตาตุ่มหลังหักร่วมกับตาตุ่มนอก ผ่าตัด ORIF กระดูกตาตุ่มนอก ± ยึดตาตุ่มหลังหากชิ้นกระดูก > 25% ของผิวข้อ หรือมีข้อเท้าหลุดไปด้านหลัง"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Truly non-displaced fibula and posterior malleolus fragment < 20–25% with intact medial deltoid",
                    "th": "• กระดูกไม่เคลื่อนและชิ้นตาตุ่มหลัง < 20–25% โดยเอ็นด้านในยังดี"
                  },
                  "method": {
                    "en": "• Non-weight-bearing cast for 6 weeks with biweekly radiographic monitoring",
                    "th": "• ใส่เฝือกไม่ลงน้ำหนัก 6 สัปดาห์ ติดตามภาพเอกซเรย์ทุก 2 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Strict NWB x 6 weeks, then progressive WBAT",
                    "th": "• ห้ามลงน้ำหนัก 6 สัปดาห์แรก แล้วค่อยเริ่มเดินลงน้ำหนัก"
                  },
                  "pitfalls": {
                    "en": "• Posterior subluxation of talus",
                    "th": "• กระดูก Talus เลื่อนหลุดไปด้านหลัง"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Displaced fibula fracture\n• Posterior malleolus fragment involving >20–25% of joint surface or articular step-off > 1–2 mm\n• Persistent posterior talar subluxation",
                    "th": "• กระดูกตาตุ่มนอกเคลื่อนตัว\n• ชิ้นตาตุ่มหลังขนาด > 20–25% ของผิวข้อ หรือผิวข้อสะดุด > 1–2 มม.\n• กระดูก Talus เลื่อนหลุดไปด้านหลัง"
                  },
                  "method": {
                    "en": "• Posterolateral approach (between peroneals and flexor hallucis longus): Direct anatomical reduction and buttress plate/screws for posterior malleolus + posterolateral anti-glide plate for fibula\n• Alternative: Percutaneous AP screws for posterior malleolus",
                    "th": "• ผ่าตัดเข้าทางด้านหลัง-นอก (Posterolateral approach): จัดกระดูกตาตุ่มหลังและยึดด้วยแผ่นเหล็ก/สกรู + ดามแผ่นเหล็ก Anti-glide ตาตุ่มนอก\n• ทางเลือกอื่น: ขันสกรูจากหน้าไปหลัง (AP Screws)"
                  },
                  "rehabilitation": {
                    "en": "• Protected NWB x 6 weeks; active ankle ROM out of splint at 2 weeks",
                    "th": "• ห้ามลงน้ำหนัก 6 สัปดาห์ เริ่มฝึกขยับข้อเท้าที่ 2 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Inaccurate reduction of posterior malleolus leaving intra-articular step-off",
                    "th": "• จัดกระดูกตาตุ่มหลังไม่เรียบสนิททำให้ผิวข้อสะดุดและข้อเสื่อม"
                  }
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
                "decisionPrinciple": {
                  "en": "Complete ring disruption with medial malleolus fracture or deltoid tear; gross mortise instability; mandatory ORIF of lateral and medial malleoli ± posterior malleolus.",
                  "th": "วงแหวนข้อเท้าขาดสมบูรณ์ร่วมกับตาตุ่มในหักหรือเอ็น Deltoid ขาด ข้อเท้าไม่มั่นคงอย่างยิ่ง ต้องผ่าตัด ORIF ตาตุ่มนอกและตาตุ่มใน ± ตาตุ่มหลัง เสมอ"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly CONTRAINDICATED (High nonunion, gross talar subluxation, and rapid osteoarthritis)",
                    "th": "• ห้ามใช้วิธีนี้เด็ดขาด (ทำให้กระดูกไม่ติด ข้อเท้าหลุดเอียงถาวร และข้อเสื่อมรวดเร็ว)"
                  },
                  "method": {
                    "en": "• Not indicated",
                    "th": "• ไม่แนะนำ"
                  },
                  "rehabilitation": {
                    "en": "• N/A",
                    "th": "• ไม่ระบุ"
                  },
                  "pitfalls": {
                    "en": "• Severe debilitating malunion and rapid post-traumatic joint destruction",
                    "th": "• ข้อเท้าติดผิดรูปรุนแรงและข้อเท้าพังทลาย"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All SER IV ankle fractures (Bimalleolar / Trimalleolar / SER IV Deltoid equivalent)",
                    "th": "• ข้อเท้าหักชนิด SER IV ทุกราย (ตาตุ่มคู่, สามตาตุ่ม หรือ SER IV Deltoid Equivalent)"
                  },
                  "method": {
                    "en": "• Anatomical ORIF of lateral malleolus (lag screw + neutralization plate)\n• ORIF of medial malleolus (two 4.0 mm cannulated cancellous lag screws or tension band wiring)\n• Fix posterior malleolus if >20–25% or unstable via posterolateral approach\n• Intraoperative Cotton test to confirm syndesmotic stability",
                    "th": "• ผ่าตัด ORIF ตาตุ่มนอก (Lag screw + แผ่นเหล็ก 1/3 Tubular plate)\n• ผ่าตัด ORIF ตาตุ่มใน (ขันสกรูคู่ 4.0 มม. หรือ Tension band wiring)\n• ยึดตาตุ่มหลังหากชิ้นใหญ่ >20–25% ผ่านทาง Posterolateral approach\n• ตรวจ Cotton Test ในห้องผ่าตัดเพื่อยืนยันความมั่นคงของ Syndesmosis"
                  },
                  "rehabilitation": {
                    "en": "• Protected NWB in splint x 6 weeks; active-assisted ankle ROM at 2 weeks; advance to full WB at 8–10 weeks",
                    "th": "• ห้ามลงน้ำหนัก 6 สัปดาห์แรก เริ่มฝึกขยับข้อเท้าที่ 2 สัปดาห์ และลงน้ำหนักเต็มที่ที่ 8–10 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Missing SER IV deltoid equivalent by assuming isolated fibular fracture without checking stress views",
                    "th": "• ตรวจพลาด SER IV Deltoid Equivalent หากมองเป็นตาตุ่มนอกหักเดี่ยวๆ โดยไม่ตรวจ Stress view"
                  }
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
                "decisionPrinciple": {
                  "en": "Low-energy transverse avulsion below joint line (Weber A); stable; conservative short leg walking cast/boot.",
                  "th": "รอยหักกะเทาะแนวขวางต่ำกว่าระดับข้อเท้า ข้อเท้ามั่นคงดี รักษาแบบไม่ผ่าตัดด้วยเฝือกสั้นหรือบูทเดินได้"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Isolated non-displaced or minimally displaced transverse lateral malleolar avulsion fracture (Weber A)",
                    "th": "• กระดูกตาตุ่มนอกหักแนวขวางไม่เคลื่อนตัวหรือเคลื่อนน้อย (Weber A)"
                  },
                  "method": {
                    "en": "• Short leg walking cast or CAM boot for 4–6 weeks",
                    "th": "• ใส่เฝือกสั้นเดินได้หรือ CAM Boot นาน 4–6 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Full weight-bearing as tolerated (WBAT) immediately",
                    "th": "• เริ่มเดินลงน้ำหนักได้ทันทีตามทนได้"
                  },
                  "pitfalls": {
                    "en": "• Overlooking subtle vertical fracture of medial malleolus (SA Stage II)",
                    "th": "• ตรวจพลาดรอยหักแนวตั้งของตาตุ่มใน (SA Stage II)"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Displaced fragment (>2 mm) causing lateral ankle instability or symptomatic nonunion",
                    "th": "• ชิ้นกระดูกเคลื่อนตัวมาก (>2 มม.) หรือกระดูกไม่ติด"
                  },
                  "method": {
                    "en": "• Tension band wiring or lateral plate osteosynthesis",
                    "th": "• ผ่าตัดยึดตรึงด้วย Tension Band Wiring หรือแผ่นเหล็กดามด้านข้าง"
                  },
                  "rehabilitation": {
                    "en": "• WBAT in boot at 2 weeks",
                    "th": "• เดินลงน้ำหนักในบูทได้ที่ 2 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Hardware irritation over distal fibular tip",
                    "th": "• หัวสกรูหรือลวดระคายเคืองใต้ผิวหนังปลายตาตุ่มนอก"
                  }
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
                "decisionPrinciple": {
                  "en": "Vertical medial malleolus fracture from talar push-off, often with anteromedial plafond marginal impaction; mandatory ORIF with medial anti-glide buttress plate to resist vertical shear forces.",
                  "th": "กระดูกตาตุ่มในหักแนวตั้งจากแรงอัดของ Talus ร่วมกับผิวกระดูกเพดานข้อเท้ายุบ ต้องผ่าตัดเปิดจัดผิวข้อและดามแผ่นเหล็ก Medial Anti-glide เพื่อต้านแรงเฉือนแนวตั้ง"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly CONTRAINDICATED if displaced (Causes medial joint step-off and rapid arthrosis)",
                    "th": "• ห้ามใช้วิธีนี้หากกระดูกเคลื่อน (ทำให้ผิวข้อสะดุดและข้อเสื่อมรวดเร็ว)"
                  },
                  "method": {
                    "en": "• Not indicated",
                    "th": "• ไม่แนะนำ"
                  },
                  "rehabilitation": {
                    "en": "• N/A",
                    "th": "• ไม่ระบุ"
                  },
                  "pitfalls": {
                    "en": "• Medial column collapse, varus tilt, and articular step-off",
                    "th": "• ข้อเท้าทรุดเอียงเข้าด้านในและผิวข้อสะดุด"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All displaced vertical medial malleolus fractures (SA Stage II)\n• Associated anteromedial tibial plafond marginal impaction",
                    "th": "• กระดูกตาตุ่มในหักแนวตั้งแบบเคลื่อนตัวทุกราย\n• พบร่วมกับผิวข้อเพดานข้อเท้าด้านหน้าในยุบตัว (Marginal impaction)"
                  },
                  "method": {
                    "en": "• Open reduction via medial incision; inspect and elevate impacted marginal articular fragments; pack subchondral void with bone graft\n• Medial Anti-Glide Buttress Plate (1/3 tubular or dynamic compression plate placed vertically) + horizontal lag screws perpendicular to vertical fracture line",
                    "th": "• ผ่าตัดเปิดทางด้านใน งัดยกผิวข้อที่ยุบตัวขึ้นมา ปลูกกระดูกทดแทนโพรงใต้ผิวข้อ\n• ดามแผ่นเหล็ก Medial Anti-Glide Buttress Plate ในแนวตั้ง + ใส่ Lag screws ขวางตั้งฉากกับรอยหัก"
                  },
                  "rehabilitation": {
                    "en": "• Non-weight bearing x 6 weeks; active ankle ROM at 2 weeks",
                    "th": "• ห้ามลงน้ำหนัก 6 สัปดาห์ เริ่มฝึกขยับข้อเท้าที่ 2 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Using standard vertical oblique screws alone without a buttress plate leads to vertical shear displacement and fixation failure",
                    "th": "• การขันสกรูเฉียงขึ้นธรรมดาโดยไม่ใช้แผ่นดามต้านแรงเฉือน (Buttress plate) จะทำให้กระดูกเลื่อนหลุดและเหล็กพังล้มเหลว"
                  }
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
                "decisionPrinciple": {
                  "en": "Initial tension failure on medial side; conservative only if truly non-displaced; ORIF if displaced.",
                  "th": "การฉีกขาดจากแรงดึงฝั่งด้านในระยะแรก หากไม่เคลื่อนรักษาด้วยเฝือกได้ ผ่าตัดยึดสกรูหากเคลื่อน >2 มม."
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Isolated non-displaced medial malleolus fracture with intact fibula and syndesmosis",
                    "th": "• กระดูกตาตุ่มในหักไม่เคลื่อนตัวโดดๆ โดยกระดูกน่องและ Syndesmosis สมบูรณ์"
                  },
                  "method": {
                    "en": "• Short leg non-weight-bearing cast for 6 weeks",
                    "th": "• ใส่เฝือกสั้นไม่ลงน้ำหนัก 6 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• NWB x 4 weeks, then advance to partial WB",
                    "th": "• ห้ามลงน้ำหนัก 4 สัปดาห์แรก แล้วเริ่มลงน้ำหนักบางส่วน"
                  },
                  "pitfalls": {
                    "en": "• Secondary displacement into nonunion",
                    "th": "• กระดูกเคลื่อนหลุดกลายเป็นกระดูกไม่ติด"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Displaced medial malleolus (>2 mm) or articular step-off",
                    "th": "• ตาตุ่มในเคลื่อนตัว > 2 มม. หรือผิวข้อสะดุด"
                  },
                  "method": {
                    "en": "• Two 4.0 mm partially threaded cancellous lag screws with washers or tension band wiring",
                    "th": "• ผ่าตัดยึดด้วย Cancellous Lag Screws 4.0 มม. คู่พร้อมแหวนรอง หรือ Tension Band Wiring"
                  },
                  "rehabilitation": {
                    "en": "• Early active ROM; partial WB x 6 weeks",
                    "th": "• ฝึกขยับข้อเท้าเร็ว ลงน้ำหนักบางส่วน 6 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Periosteal flap trapped in fracture site",
                    "th": "• เยื่อหุ้มกระดูกติดขัดแทรกเข้าไปในรอยหัก"
                  }
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
                "decisionPrinciple": {
                  "en": "Syndesmotic tear propagating up the leg; conservative if medial side is intact and stable; ORIF if associated with displaced medial fracture.",
                  "th": "เอ็น Syndesmosis และพังผืดฉีกขาดลามขึ้นบน รักษาแบบไม่ผ่าตัดหากด้านในมั่นคง ผ่าตัดยึดตาตุ่มในหากมีการเคลื่อนตัว"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Incomplete syndesmotic sprain without bony displacement or mortise widening",
                    "th": "• เอ็นยึดฉีกขาดบางส่วนโดยไม่มีกระดูกเคลื่อนหรือเบ้าข้อเท้าถ่าง"
                  },
                  "method": {
                    "en": "• Short leg cast / CAM boot for 4–6 weeks",
                    "th": "• ใส่เฝือกสั้นหรือ CAM Boot 4–6 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Progressive WBAT in boot",
                    "th": "• ค่อยๆ เพิ่มการลงน้ำหนักในบูท"
                  },
                  "pitfalls": {
                    "en": "• Progressing to PER III if weight-bearing too early",
                    "th": "• กระดูกอาจหักลามเป็น PER III หากลงน้ำหนักเร็วเกินไป"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Displaced medial malleolus fracture with widened tibiofibular clear space",
                    "th": "• ตาตุ่มในหักเคลื่อนตัวร่วมกับช่องว่าง Tibiofibular ถ่างกว้าง"
                  },
                  "method": {
                    "en": "• ORIF of medial malleolus + syndesmotic suture-button or screw fixation if unstable",
                    "th": "• ผ่าตัด ORIF ตาตุ่มใน + ยึด Syndesmosis ด้วย Suture-button หรือสกรูหากหลวม"
                  },
                  "rehabilitation": {
                    "en": "• Protected NWB x 6 weeks",
                    "th": "• ห้ามลงน้ำหนัก 6 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Inadequate syndesmotic reduction",
                    "th": "• จัดดึง Syndesmosis เข้าที่ได้ไม่สนิท"
                  }
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
                "decisionPrinciple": {
                  "en": "High fibular fracture (suprasyndesmotic / Maisonneuve) with complete syndesmotic tear; grossly unstable; mandatory ORIF of fibula and medial malleolus + syndesmotic screw/button fixation.",
                  "th": "กระดูกน่องหักสูงเหนือข้อเท้า (Weber C / Maisonneuve) ร่วมกับเอ็น Syndesmosis ขาด 100% ข้อเท้าไม่มั่นคงอย่างรุนแรง ต้องผ่าตัด ORIF กระดูกและยึด Syndesmosis เสมอ"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly CONTRAINDICATED (High rate of permanent diastasis and severe arthritis)",
                    "th": "• ห้ามใช้วิธีนี้เด็ดขาด (ทำให้ข้อเท้าถ่างกว้างถาวรและข้อเสื่อมรุนแรง)"
                  },
                  "method": {
                    "en": "• Not indicated",
                    "th": "• ไม่แนะนำ"
                  },
                  "rehabilitation": {
                    "en": "• N/A",
                    "th": "• ไม่ระบุ"
                  },
                  "pitfalls": {
                    "en": "• Severe chronic ankle disability and rapid osteoarthritis",
                    "th": "• ข้อเท้าพิการเรื้อรังและข้อเสื่อมรวดเร็ว"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All PER III high fibular fractures and Maisonneuve injury patterns",
                    "th": "• กระดูกน่องหักสูง PER III และ Maisonneuve ทุกราย"
                  },
                  "method": {
                    "en": "• Diaphyseal Fibular ORIF (for lower/mid-shaft Weber C) with 3.5 mm locking/neutralization plate\n• For proximal neck fracture (Maisonneuve): Do NOT open proximal fibula (avoids peroneal nerve injury); perform ORIF of medial malleolus + direct anatomical reduction of distal syndesmosis under fluoroscopy and fix with 2 syndesmotic screws or TightRope devices",
                    "th": "• ผ่าตัดดามแผ่นเหล็กกระดูก Fibula (กรณีหักระดับกลาง/ล่าง)\n• กรณี Maisonneuve: ห้ามเปิดแผลผ่าตัดที่หัวกระดูกน่องใต้เข่า (เพื่อป้องกันอันตรายต่อเส้นประสาท Peroneal) ให้ผ่าตัดยึดตาตุ่มใน + ดึงจัดดาม Syndesmosis ด้วยสกรู 2 ตัวหรือ TightRope"
                  },
                  "rehabilitation": {
                    "en": "• Strict non-weight bearing (NWB) x 6–8 weeks in splint/boot, advance to full WB at 8–10 weeks",
                    "th": "• ห้ามลงน้ำหนัก 6–8 สัปดาห์แรก เริ่มลงน้ำหนักเต็มที่ที่ 8–10 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Missing high proximal fibular neck fracture (Maisonneuve) by failing to palpate proximal calf",
                    "th": "• ตรวจพลาด Maisonneuve จากการลืมคลำตรวจน่องส่วนบนใต้ข้อเข่า"
                  }
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
                "decisionPrinciple": {
                  "en": "360° circumferential disruption of ankle; highest energy PER injury; mandatory complex ORIF (fibula, medial malleolus, posterior malleolus, and syndesmosis).",
                  "th": "วงแหวนข้อเท้าพังทลายครบ 360 องศาจากการบาดเจ็บพลังงานสูงสุดในกลุ่ม PER ต้องผ่าตัด ORIF ครบทุกตำแหน่ง (ตาตุ่มนอก, ตาตุ่มใน, ตาตุ่มหลัง และยึด Syndesmosis)"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly CONTRAINDICATED",
                    "th": "• ห้ามใช้วิธีนี้เด็ดขาด"
                  },
                  "method": {
                    "en": "• Not indicated",
                    "th": "• ไม่แนะนำ"
                  },
                  "rehabilitation": {
                    "en": "• N/A",
                    "th": "• ไม่ระบุ"
                  },
                  "pitfalls": {
                    "en": "• Complete joint collapse and loss of ambulation",
                    "th": "• ข้อเท้าพังทลายสมบูรณ์และสูญเสียความสามารถในการเดิน"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All complete PER IV trimalleolar fracture-dislocations",
                    "th": "• ข้อเท้าหักหลุดสามตาตุ่มชนิด PER IV ทุกราย"
                  },
                  "method": {
                    "en": "• Combined approaches (posteromedial + posterolateral / anterolateral)\n• 1) Direct ORIF of posterior malleolus via posterolateral approach\n• 2) Anatomical ORIF of fibular shaft\n• 3) Anatomical ORIF of medial malleolus\n• 4) Trans-syndesmotic screw or suture-button fixation",
                    "th": "• ผ่าตัดผสมผสาน 2 แผล (Posterolateral + Anteromedial)\n• 1) จัดยึดตาตุ่มหลังผ่าน Posterolateral approach\n• 2) จัดดามแผ่นเหล็กกระดูก Fibula\n• 3) ผ่าตัดยึดตาตุ่มในด้วยสกรู\n• 4) ยึด Syndesmosis ด้วยสกรูหรือ Suture-button"
                  },
                  "rehabilitation": {
                    "en": "• Strict non-weight bearing x 8–10 weeks; early gentle active ankle ROM out of splint at 2 weeks",
                    "th": "• ห้ามลงน้ำหนัก 8–10 สัปดาห์ เริ่มฝึกขยับข้อเท้าเบาๆ ที่ 2 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• High soft tissue swelling and skin breakdown — stage with temporary spanning Ex-Fix if blistered/tense",
                    "th": "• เนื้อเยื่อบวมเต่งและตุ่มน้ำพองรุนแรง ให้ใส่ Spanning Ex-Fix ชั่วคราวก่อนหากผิวยังไม่ยุบบวม"
                  }
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
                "decisionPrinciple": {
                  "en": "Medial tension avulsion; conservative if non-displaced; ORIF with cancellous lag screws if displaced.",
                  "th": "กระดูกตาตุ่มในหักกะเทาะจากแรงดึง หากไม่เคลื่อนรักษาด้วยเฝือกได้ ผ่าตัดยึดสกรู Lag screws หากเคลื่อนตัว"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Isolated non-displaced transverse medial malleolus fracture (<2 mm displacement)",
                    "th": "• กระดูกตาตุ่มในหักแนวขวางไม่เคลื่อนตัว (<2 มม.)"
                  },
                  "method": {
                    "en": "• Short leg cast for 4–6 weeks",
                    "th": "• ใส่เฝือกสั้น 4–6 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Protected partial WB, full WB at 6 weeks",
                    "th": "• ลงน้ำหนักบางส่วน และลงเต็มที่ที่ 6 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Secondary displacement",
                    "th": "• กระดูกเคลื่อนหลุดภายหลัง"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Displaced medial malleolus (>2 mm) or articular step-off",
                    "th": "• ตาตุ่มในเคลื่อนตัว > 2 มม. หรือผิวข้อสะดุด"
                  },
                  "method": {
                    "en": "• ORIF with two 4.0 mm cannulated cancellous screws with washers",
                    "th": "• ผ่าตัด ORIF ยึดด้วย Cancellous Screws 4.0 มม. คู่พร้อมแหวนรอง"
                  },
                  "rehabilitation": {
                    "en": "• Active ankle ROM at 2 weeks, WBAT at 6 weeks",
                    "th": "• เริ่มขยับข้อเท้าที่ 2 สัปดาห์ ลงน้ำหนักเต็มที่ที่ 6 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Over-tightening in osteoporotic bone",
                    "th": "• ขันสกรูแน่นเกินไปจนกระดูกพรุนแตก"
                  }
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
                "decisionPrinciple": {
                  "en": "Complete syndesmotic tear with medial failure; unstable mortise; requires operative fixation of medial side + syndesmotic stabilization.",
                  "th": "เอ็น Syndesmosis ฉีกขาดสมบูรณ์ร่วมกับด้านในพังทลาย ข้อเท้าไม่มั่นคง ต้องผ่าตัดยึดตาตุ่มในและยึดดึง Syndesmosis"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly non-recommended due to gross syndesmotic widening",
                    "th": "• ไม่แนะนำเนื่องจากข้อเท้าถ่างกว้างไม่มั่นคง"
                  },
                  "method": {
                    "en": "• Not indicated",
                    "th": "• ไม่แนะนำ"
                  },
                  "rehabilitation": {
                    "en": "• N/A",
                    "th": "• ไม่ระบุ"
                  },
                  "pitfalls": {
                    "en": "• Chronic diastasis",
                    "th": "• ข้อเท้าถ่างกว้างเรื้อรัง"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• PA Stage II syndesmotic disruption with medial clear space widening",
                    "th": "• การบาดเจ็บ PA Stage II ที่มีช่อง Medial Clear Space ถ่างกว้าง"
                  },
                  "method": {
                    "en": "• ORIF of medial malleolus + direct syndesmotic reduction and trans-syndesmotic screw/suture-button fixation",
                    "th": "• ผ่าตัด ORIF ตาตุ่มใน + ดึงจัด Syndesmosis และยึดด้วยสกรูหรือ Suture-button"
                  },
                  "rehabilitation": {
                    "en": "• Strict NWB x 6 weeks",
                    "th": "• ห้ามลงน้ำหนัก 6 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Malreduction of fibula in incisura",
                    "th": "• จัดกระดูก Fibula เข้าในร่อง Incisura ผิดตำแหน่ง"
                  }
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
                "decisionPrinciple": {
                  "en": "Violent abduction bending failure producing lateral butterfly wedge fragment above syndesmosis; highly unstable; mandatory ORIF of fibula with lag screw + neutralization plate + syndesmotic fixation.",
                  "th": "แรงกางออกอย่างรุนแรงทำให้กระดูก Fibula หักมีชิ้นปีกผีเสื้อเหนือข้อเท้า ข้อเท้าไม่มั่นคงอย่างยิ่ง ต้องผ่าตัด ORIF ดามแผ่นเหล็กกระดูก Fibula + ตาตุ่มใน + ยึด Syndesmosis"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly CONTRAINDICATED",
                    "th": "• ห้ามใช้วิธีนี้เด็ดขาด"
                  },
                  "method": {
                    "en": "• Not indicated",
                    "th": "• ไม่แนะนำ"
                  },
                  "rehabilitation": {
                    "en": "• N/A",
                    "th": "• ไม่ระบุ"
                  },
                  "pitfalls": {
                    "en": "• Severe valgus deformity, shortening, and joint arthrosis",
                    "th": "• ข้อเท้าเอียงแบะ ขาสั้นลง และข้อเสื่อมรวดเร็ว"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All PA Stage III suprasyndesmotic fractures with lateral comminution/butterfly fragment",
                    "th": "• กระดูกน่องหักเหนือข้อเท้าชนิด PA Stage III ที่มีชิ้นปีกผีเสื้อทุกราย"
                  },
                  "method": {
                    "en": "• Anatomical reduction of butterfly fragment with 2.7/3.5 mm lag screws + bridging/neutralization locking plate on lateral fibula\n• ORIF of medial malleolus\n• Trans-syndesmotic screw or suture-button fixation",
                    "th": "• ผ่าตัดจัดยึดชิ้นปีกผีเสื้อด้วย Lag screws + ดามแผ่นเหล็ก Locking Plate บนกระดูก Fibula\n• ผ่าตัด ORIF ตาตุ่มใน\n• ยึดตรึงเอ็น Syndesmosis ด้วยสกรูหรือ Suture-button"
                  },
                  "rehabilitation": {
                    "en": "• Strict non-weight bearing x 6–8 weeks in splint/boot, advance to full WB at 8–10 weeks",
                    "th": "• ห้ามลงน้ำหนัก 6–8 สัปดาห์แรก เริ่มลงน้ำหนักเต็มที่ที่ 8–10 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Comminuted lateral cortex makes anatomical reduction difficult; must bridge length with plate rather than devitalizing fragments",
                    "th": "• ผนังด้านนอกแตกละเอียดควรใช้แผ่นเหล็กดามแบบสะพานข้ามเพื่อรักษาความยาว โดยไม่เลาะเยื่อหุ้มกระดูกจนขาดเลือด"
                  }
                }
              },
              "illustrationId": "/images/lauge_hansen/pa_3.png",
              "xrayDescription": {
                "en": "Transverse/comminuted suprasyndesmotic fibula fracture with lateral butterfly fragment.",
                "th": "เห็นรอยหักขวางกระดูก Fibula เหนือข้อเท้าพร้อมชิ้นกระดูกปีกผีเสื้อด้านนอก"
              }
            }
          ]
        },
        {
          "system": "Pilon Fracture",
          "fullName": {
            "en": "Pilon Fracture (Rüedi-Allgöwer Classification)",
            "th": "การจำแนกกระดูกข้อเท้าและผิวข้อหน้าแข้งหัก Pilon Fracture (Rüedi-Allgöwer)"
          },
          "description": {
            "en": "Classic classification of intra-articular tibial plafond (pilon) fractures based on joint surface displacement, comminution, and central impaction resulting from high-energy axial loading.",
            "th": "ระบบจำแนกกระดูกผิวข้อหน้าแข้งส่วนปลาย (Tibial Plafond / Pilon) หักตามระดับการเคลื่อนของผิวข้อ ความแตกละเอียด และการยุบอัดแน่นของกระดูกแกนกลาง (Central Impaction)"
          },
          "concept": {
            "title": {
              "en": "Rüedi-Allgöwer Plafond Clinical Concept & Staged Protocol",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ Rüedi-Allgöwer Plafond / Pilon Classification"
            },
            "corePrinciple": {
              "en": "Rüedi-Allgöwer categorizes distal tibial pilon fractures into 3 types based on articular displacement and central crushing. Dictates whether direct anatomical ORIF is feasible (Type I–II) or if the mandatory staged 'Span-Scan-Plan' protocol with temporary spanning external fixation and bone grafting is required (Type III).",
              "th": "Rüedi-Allgöwer จำแนกรอยหักผิวข้อหน้าแข้งส่วนล่าง (Pilon) เป็น 3 ระดับตามการเคลื่อนและการยุบอัดแน่นของกระดูก เพื่อชี้นำว่าสามารถผ่าตัดจัดข้อเข้าที่ได้ทันที (Type I–II) หรือต้องใช้กลยุทธ์รักษาแบบแบ่งระยะ (Span-Scan-Plan) ด้วย Spanning Ex-Fix ร่วมกับการปลูกกระดูก (Type III)"
            },
            "rules": [
              {
                "en": "Type I (Cleavage / Non-displaced): Articular step-off < 2 mm without comminution -> Stable joint congruity -> Conservative cast or percutaneous screws",
                "th": "Type I (ไม่เคลื่อน / Cleavage): ผิวข้อยุบเป็นขั้น < 2 มม. โดยไม่แตกละเอียด -> ผิวข้อยังคงเรียบเสมอกัน -> รักษาด้วยเฝือกหรือเจาะยึดน็อตผ่านผิวหนัง"
              },
              {
                "en": "Type II (Displaced without Impaction): Articular step-off > 2 mm with large distinct columns (Chaput, Medial, Volkmann) -> NO central impaction -> Direct open reduction and buttress plating",
                "th": "Type II (เคลื่อนหลุด / ไม่มีกระดูกยุบตรงกลาง): ผิวยุบเป็นขั้น > 2 มม. มีชิ้นกระดูกขนาดใหญ่ชัดเจน -> ไม่มีกระดูกแกนกลางยุบอัดแน่น -> ผ่าตัดเปิดจัดผิวข้อเข้าที่และดามแผ่นเหล็ก (ORIF)"
              },
              {
                "en": "Type III (Comminuted with Central Impaction): Severe articular comminution + central depression into metaphysis + soft tissue compromise -> MANDATORY Staged Protocol (Span-Scan-Plan)",
                "th": "Type III (แตกละเอียด + กระดูกยุบอัดแน่น): ผิวข้อแตกละเอียดร่วมกับกระดูกแกนกลางยุบจมลงในโพรงกระดูก -> ต้องใช้แนวทางผ่าตัดเป็นขั้นตอน (Staged Protocol: Span-Scan-Plan)"
              },
              {
                "en": "AO/OTA 43-C Correlation: 43-C1 (Simple articular/metaphyseal ~ Type I/II), 43-C2 (Simple articular with metaphyseal comminution), 43-C3 (Comminuted articular ~ Type III)",
                "th": "การเชื่อมโยง AO/OTA 43-C: 43-C1 (Type I/II), 43-C2 (ผิวข้อแตกเรียบแต่ก้านแตกละเอียด), 43-C3 (Type III ผิวข้อแตกละเอียดยุบอัดแน่น)"
              }
            ],
            "clinicalSignificance": [
              {
                "en": "Wrinkle Sign (10–14 days): NEVER perform open incisions through tense, swollen, or blistered skin; wait for positive skin wrinkle test before definitive ORIF",
                "th": "สัญญาณผิวย่น (Wrinkle Sign): ห้ามผ่าตัดเปิดผ่านผิวหนังที่กำลังบวมเต่งหรือมีตุ่มน้ำเด็ดขาด ต้องรอจนกว่าผิวหนังเริ่มย่นและยุบบวม (10–14 วัน)"
              },
              {
                "en": "Staged 'Span-Scan-Plan' Protocol: (1) Delta-frame spanning external fixator + fibular ORIF on Day 0 -> (2) 3D CT scan -> (3) Definitive articular reconstruction on Day 10–21",
                "th": "ขั้นตอน Span-Scan-Plan: (1) ใส่ Spanning Ex-Fix ข้ามข้อเท้า + ดามกระดูก Fibula ในวันแรก -> (2) ทำ 3D CT scan -> (3) ผ่าตัดซ่อมผิวข้อขั้นสมบูรณ์ในวันที่ 10–21"
              },
              {
                "en": "Central Impaction Bone Grafting: Depressed subchondral fragments in Type III must be disimpacted, elevated, and supported with structural autograft/allograft/calcium phosphate",
                "th": "การปลูกกระดูกใต้ผิวข้อ: ใน Type III ชิ้นกระดูกที่ยุบอัดแน่นต้องถูกงัดยกขึ้นมาและเสริมโพรงกระดูกด้วย Bone Graft หรือสารทดแทนกระดูกเพื่อป้องกันการทรุดตัวซ้ำ"
              },
              {
                "en": "Primary Arthrodesis: Indicated as primary salvage in elderly or low-demand patients with unreconstructible catastrophic Type III comminution",
                "th": "การผ่าตัดเชื่อมข้อเท้า (Primary Arthrodesis): พิจารณาเป็นทางเลือกรักษาหลักในผู้สูงอายุที่มีผิวข้อแตกแหลกละเอียดรุนแรงจนไม่สามารถจัดเรียงใหม่ได้"
              }
            ]
          },
          "investigations": [
            {
              "name": "AP Ankle View",
              "details": {
                "en": "Anteroposterior view of the distal tibia and ankle mortise. Evaluates medial malleolar cleavage, coronal articular step-off, and distal fibular fracture level.",
                "th": "ภาพเอกซเรย์ข้อเท้าท่าหน้าหลัง (AP) เพื่อประเมินรอยแตกตาตุ่มใน แนวยุบของผิวข้อในแนว Coronal และระดับรอยหักของกระดูก Fibula"
              }
            },
            {
              "name": "Mortise View (15-20° Internal Rotation)",
              "details": {
                "en": "True AP view of the ankle joint. Assesses joint congruity, anterolateral Chaput fragment separation, and syndesmotic competence.",
                "th": "ภาพเอกซเรย์ข้อเท้าท่า Mortise เพื่อตรวจดูความเรียบของผิวข้อ การแยกตัวของชิ้นกระดูก Chaput ด้านหน้า-นอก และความมั่นคงของเอ็น Syndesmosis"
              }
            },
            {
              "name": "Lateral Ankle View",
              "details": {
                "en": "Lateral view of the ankle. Evaluates posterior column (Volkmann fragment) size, anterior/posterior talar translation, and sagittal plane articular impaction.",
                "th": "ภาพเอกซเรย์ข้อเท้าท่าด้านข้าง (Lateral) เพื่อประเมินขนาดชิ้นกระดูกตาตุ่มหลัง (Volkmann fragment) การเลื่อนของกระดูก Talus และการยุบตัวของผิวข้อในแนว Sagittal"
              }
            },
            {
              "name": "Full-Length Tibia / Fibula AP & Lateral Views",
              "details": {
                "en": "Full-length lower leg radiograph from knee to ankle. Essential to determine proximal metaphyseal-diaphyseal fracture extension and mechanical axis alignment.",
                "th": "ภาพเอกซเรย์ขาความยาวเต็มจากข้อเข่าถึงข้อเท้า จำเป็นอย่างยิ่งเพื่อดูการลามของรอยหักขึ้นไปสู่ก้านกระดูกหน้าแข้งและแนวแกนรับน้ำหนักของขา"
              }
            },
            {
              "name": "3D CT Scan (Axial, Coronal, Sagittal & 3D Volume Render) - GOLD STANDARD",
              "details": {
                "en": "MANDATORY GOLD STANDARD imaging obtained after initial spanning external fixation. Accurately maps the 3 primary articular fragments (Medial, Chaput, Volkmann), quantifies central die-punch impaction, and guides surgical approach selection.",
                "th": "การตรวจเอกซเรย์คอมพิวเตอร์ 3 มิติ (3D CT Scan) เป็นมาตรฐานสำคัญที่สุดที่ต้องทำหลังใส่ Spanning Ex-Fix เพื่อระบุตำแหน่งของ 3 ชิ้นกระดูกหลัก (Medial, Chaput, Volkmann) ประเมินการยุบอัดแน่นของกระดูกแกนกลาง และเลือกตำแหน่งทางเข้าผ่าตัด"
              }
            }
          ],
          "types": [
            {
              "type": "Type I",
              "name": {
                "en": "Type I (Cleavage / Non-displaced Plafond)",
                "th": "Type I (รอยหักผิวข้อไม่เคลื่อน / Cleavage Fracture)"
              },
              "description": {
                "en": "Intra-articular fracture of distal tibia without significant articular displacement\nArticular step-off and gap < 2 mm\nMetaphyseal cortex intact or minimally comminuted\nSoft tissue envelope remains intact with minimal swelling",
                "th": "รอยหักผ่านผิวข้อของกระดูกหน้าแข้งส่วนล่างโดยไม่มีการเคลื่อนหลุดของผิวข้ออย่างมีนัยสำคัญ\nรอยแยกและขั้นผิวข้อ (Articular step-off) < 2 มม.\nกระดูกส่วน Metaphysis ยังคงสภาพดีหรือแตกละเอียดเพียงเล็กน้อย\nเนื้อเยื่ออ่อนรอบข้อไม่บวมเต่งรุนแรง"
              },
              "moi": {
                "en": "Low-to-moderate energy axial loading with foot in neutral position.",
                "th": "แรงกระแทกตามแนวดิ่ง (Axial load) พลังงานต่ำถึงปานกลางขณะที่ข้อเท้าอยู่ในท่าปกติ"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Intra-articular fracture without significant displacement (<2 mm step-off); conservative non-weight bearing cast; percutaneous cannulated screw fixation for young active patients desiring early mobilization.",
                  "th": "รอยหักผ่านผิวข้อที่ไม่เคลื่อนตัว (Articular step-off < 2 มม.) รักษาแบบไม่ผ่าตัดด้วยการใส่เฝือกไม่ลงน้ำหนักได้ หรือพิจารณาผ่าตัดเจาะยึดสกรูผ่านผิวหนัง (Percutaneous screws) ในผู้ป่วยวัยทำงานที่ต้องการเริ่มขยับข้อเร็ว"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Truly non-displaced plafond fracture (articular step-off and gap < 2 mm)\n• Intact metaphyseal cylinder and soft tissue envelope in compliant patient",
                    "th": "• รอยหักผิวข้อหน้าแข้งไม่เคลื่อนตัวอย่างแท้จริง (ขั้นผิวข้อยุบและรอยแยก < 2 มม.)\n• แกนกระดูกและเนื้อเยื่อรอบข้อสมบูรณ์ดี และผู้ป่วยให้ความร่วมมือ"
                  },
                  "method": {
                    "en": "• Non-weight-bearing short leg or long leg cast for 6–8 weeks with serial weekly radiographs for first 3 weeks",
                    "th": "• ใส่เฝือกยาวหรือเฝือกสั้นแบบไม่ลงน้ำหนัก 6–8 สัปดาห์ พร้อมติดตามภาพเอกซเรย์ทุกสัปดาห์ในช่วง 3 สัปดาห์แรก"
                  },
                  "rehabilitation": {
                    "en": "• Strict non-weight bearing (NWB) x 6 weeks; active toe flexion/extension; advance to partial WB at 6–8 weeks, full WB at 10–12 weeks",
                    "th": "• ห้ามลงน้ำหนักเด็ดขาด 6 สัปดาห์แรก เริ่มลงน้ำหนักบางส่วนที่ 6–8 สัปดาห์ และลงน้ำหนักเต็มที่ที่ 10–12 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Overlooking secondary displacement when post-injury edema subsides; weekly radiographic monitoring is mandatory",
                    "th": "• ตรวจไม่พบกระดูกที่เลื่อนหลุดตามหลังเมื่ออาการบวมยุบลง ต้องถ่ายภาพเอกซเรย์ติดตามทุกสัปดาห์อย่างเคร่งครัด"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Subtle articular displacement (1–2 mm step-off) in high-demand active patients\n• Inability to tolerate prolonged casting",
                    "th": "• ผิวข้อเหลื่อมกันเล็กน้อย (1–2 มม.) ในผู้ป่วยที่มีความต้องการใช้งานสูง\n• ไม่สามารถทนใส่เฝือกเป็นเวลานานได้"
                  },
                  "method": {
                    "en": "• Percutaneous cannulated lag screws (3.5 mm or 4.0 mm) with washers placed parallel to the subchondral joint line ± MIPO distal tibia plate",
                    "th": "• ผ่าตัดเจาะยึดสกรูผ่านผิวหนัง (Percutaneous Cannulated Screws ขนาด 3.5 หรือ 4.0 มม.) ขนานใต้แนวผิวข้อ ± ดามแผ่นเหล็กแผลเล็ก MIPO"
                  },
                  "rehabilitation": {
                    "en": "• Early active ankle range of motion at 2 weeks post-op; protected NWB x 6–8 weeks",
                    "th": "• เริ่มฝึกขยับข้อเท้าเร็วที่ 2 สัปดาห์หลังผ่าตัด ห้ามลงน้ำหนัก 6–8 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Screw misplacement violating the tibiotalar joint space",
                    "th": "• ขันสกรูล้ำเข้าไปในช่องข้อเท้า"
                  }
                }
              },
              "illustrationId": "/images/ruedi_allgower/type1.png",
              "xrayDescription": {
                "en": "Sharp intra-articular fracture line through distal tibial plafond with congruous joint line and step-off < 2 mm.",
                "th": "เห็นรอยหักผ่านผิวข้อหน้าแข้งโดยหน้าสัมผัสข้อเท้ายังคงเรียบเสมอกันและยุบตัวน้อยกว่า 2 มม."
              }
            },
            {
              "type": "Type II",
              "name": {
                "en": "Type II (Displaced without Central Impaction)",
                "th": "Type II (รอยหักผิวข้อเคลื่อนหลุด แต่ไม่มีกระดูกยุบอัดแน่น)"
              },
              "description": {
                "en": "Significant displacement of the articular surface (> 2 mm step-off or gap)\nArticular surface fractures into large, distinct anatomical fragments (Anterolateral Chaput, Medial, and Posterior Volkmann fragments)\nNO severe central depression/crush of the weight-bearing subchondral bone\nFragments can be reduced anatomically like jigsaw puzzle pieces",
                "th": "ผิวข้อหน้าแข้งแตกและเคลื่อนหลุดชัดเจน (ขั้นผิวข้อ > 2 มม.)\nผิวข้อแตกแยกออกเป็นชิ้นกระดูกขนาดใหญ่ที่ชัดเจน (ชิ้นหน้า-นอก Chaput, ชิ้นด้านใน Medial, และชิ้นด้านหลัง Volkmann)\nไม่มีการยุบอัดแน่นหรือแตกแหลกของกระดูกแกนกลางผิวข้อ (No central impaction)\nสามารถดึงจัดเรียงชิ้นกระดูกให้เข้าที่ได้แนบสนิทเหมือนต่อจิ๊กซอว์"
              },
              "moi": {
                "en": "Axial load combined with rotational torque (supination or pronation) displacing large articular columns.",
                "th": "แรงกระแทกตามแนวดิ่งร่วมกับแรงบิดหมุนของข้อเท้า ส่งผลให้ชิ้นกระดูกผิวข้อขนาดใหญ่เคลื่อนแยกจากกัน"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Articular displacement >2 mm into large distinct fragments (Chaput, Medial, Volkmann) without central crushing; anatomical open reduction and rigid locking buttress plating.",
                  "th": "ผิวข้อเคลื่อนหลุด >2 มม. แยกออกเป็นชิ้นกระดูกขนาดใหญ่โดยไม่มีกระดูกแกนกลางยุบอัดแน่น ต้องผ่าตัดเปิดจัดผิวข้อให้เรียบสนิทและดามแผ่นเหล็ก Anatomical Locking Buttress Plate"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly CONTRAINDICATED (Leads to rapid joint incongruity, severe malunion, and painful early arthrosis)",
                    "th": "• ห้ามใช้วิธีนี้เด็ดขาด (ทำให้ข้อเสื่อมรวดเร็ว ผิวข้อติดผิดรูป และปวดข้อเท้าเรื้อรัง)"
                  },
                  "method": {
                    "en": "• Not indicated",
                    "th": "• ไม่แนะนำ"
                  },
                  "rehabilitation": {
                    "en": "• N/A",
                    "th": "• ไม่ระบุ"
                  },
                  "pitfalls": {
                    "en": "• Early debilitating post-traumatic ankle osteoarthritis",
                    "th": "• ข้อเท้าเสื่อมรุนแรงและพิการถาวร"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All displaced Rüedi-Allgöwer Type II pilon fractures (step-off > 2 mm or gap > 2 mm)\n• Rotational articular column displacement",
                    "th": "• รอยหักผิวข้อ Pilon Type II ที่เคลื่อนตัวทุกราย (ขั้นผิวข้อยุบ > 2 มม. หรือรอยแยก > 2 มม.)\n• ชิ้นกระดูกเสารับน้ำหนักข้อเท้าบิดหมุนหลุดแนว"
                  },
                  "method": {
                    "en": "• Anatomical ORIF: Anterolateral or anteromedial approach based on primary fracture line\n• Restore articular surface anatomically with lag screws\n• Metaphyseal-diaphyseal stabilization with low-profile distal tibia locking buttress plate\n• If soft tissues are acutely tense: Temporary bridging external fixator (Span-Scan-Plan) until wrinkle sign is positive (10–14 days)",
                    "th": "• ผ่าตัดเปิดจัดกระดูกและยึดตรึง (ORIF): ผ่าตัดเข้าทาง Anterolateral หรือ Anteromedial ตามแนวรอยหักหลัก\n• จัดเรียงผิวข้อให้เรียบสนิทและยึดด้วย Lag screws\n• ดามก้านกระดูกด้วยแผ่นเหล็ก Distal Tibia Locking Buttress Plate\n• หากเนื้อเยื่อบวมเต่ง: ใส่ Spanning Ex-Fix ชั่วคราวก่อนจนกว่าผิวหนังจะเริ่มย่น (Wrinkle sign) ใน 10–14 วัน"
                  },
                  "rehabilitation": {
                    "en": "• Strict non-weight bearing (NWB) x 10–12 weeks; early active ankle ROM out of splint at 2 weeks once surgical wounds heal",
                    "th": "• ห้ามลงน้ำหนักเด็ดขาด (NWB) 10–12 สัปดาห์ เริ่มฝึกขยับข้อเท้าหลังตัดไหมที่ 2 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Operating through compromised, blistered skin resulting in catastrophic wound dehiscence and deep infection",
                    "th": "• การผ่าตัดเปิดผ่านผิวหนังที่กำลังบวมเต่งหรือมีตุ่มน้ำพองจะทำให้แผลแยก เน่าตาย และติดเชื้อรุนแรง"
                  }
                }
              },
              "illustrationId": "/images/ruedi_allgower/type2.png",
              "xrayDescription": {
                "en": "Articular step-off > 2 mm with visible separation of Chaput/Volkmann fragments, preserved metaphyseal bone stock, and lack of central impaction.",
                "th": "ผิวข้อยุบเป็นขั้น > 2 มม. เห็นการแยกตัวของชิ้นกระดูก Chaput และ Volkmann อย่างชัดเจนโดยไม่มีกระดูกยุบแหลกตรงกลาง"
              }
            },
            {
              "type": "Type III",
              "name": {
                "en": "Type III (Comminuted with Central Impaction)",
                "th": "Type III (รอยหักแตกละเอียด ยุบอัดแน่น และกระดูกพรุนสลาย)"
              },
              "description": {
                "en": "Severe intra-articular comminution with marked central impaction / crushing of the articular surface\nMultiple subchondral fragments driven into the metaphyseal cancellous bone\nMetaphyseal comminution, bone loss, and extensive soft tissue degloving (Tscherne closed soft tissue injury II–III)\nHigh risk of skin necrosis, wound breakdown, and post-traumatic arthritis",
                "th": "ผิวข้อแตกละเอียดรุนแรงร่วมกับการยุบอัดแน่น (Central impaction) ของกระดูกผิวข้อ\nชิ้นกระดูกผิวข้อหลายชิ้นถูกแรงกระแทกอัดจมลึกลงไปในโพรงกระดูก Metaphysis\nกระดูกส่วน Metaphysis แตกแหลก สูญเสียเนื้อกระดูก และเนื้อเยื่ออ่อนบวมพองรุนแรง\nมีความเสี่ยงสูงมากต่อภาวะผิวหนังเน่าตาย แผลแยก และข้อเสื่อมรุนแรง"
              },
              "moi": {
                "en": "High-energy axial compression (fall from height > 3 meters, motor vehicle collision, explosion).",
                "th": "แรงกดอัดตามแนวดิ่งพลังงานสูงอย่างรุนแรง (ตกจากที่สูง > 3 เมตร, อุบัติเหตุจราจรความเร็วสูง)"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "High-energy axial explosion with central subchondral depression, comminution, and severe soft tissue compromise; mandatory staged 'Span-Scan-Plan' protocol (temporary spanning Ex-Fix -> 3D CT -> definitive reconstruction with disimpaction, bone grafting, and locking plate) or primary arthrodesis for unsalvageable patterns.",
                  "th": "ผิวข้อแตกละเอียดและยุบอัดแน่นตรงกลางจากแรงกระแทกพลังงานสูง เนื้อเยื่อชอกช้ำรุนแรง ต้องใช้ขั้นตอนผ่าตัดเป็นระยะ 'Span-Scan-Plan' (ใส่ Spanning Ex-Fix ทันที -> ทำ 3D CT -> ผ่าตัดจัดยกผิวข้อยุบ ปลูกกระดูก Bone graft และดามแผ่นเหล็ก) หรือผ่าตัดเชื่อมข้อในรายที่ผิวข้อแหลกจนซ่อมไม่ได้"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly CONTRAINDICATED except for medically non-reconstructible, bedbound patients",
                    "th": "• ห้ามใช้วิธีนี้เด็ดขาด ยกเว้นในผู้ป่วยติดเตียงหรือมีข้อห้ามผ่าตัดรุนแรง"
                  },
                  "method": {
                    "en": "• Not indicated",
                    "th": "• ไม่แนะนำ"
                  },
                  "rehabilitation": {
                    "en": "• N/A",
                    "th": "• ไม่ระบุ"
                  },
                  "pitfalls": {
                    "en": "• Severe shortening, gross malalignment, skin erosion, and permanent disability",
                    "th": "• ขาสั้นผิดรูปรุนแรง กระดูกแทงทะลุผิวหนัง และพิการถาวร"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All Rüedi-Allgöwer Type III comminuted pilon fractures with central impaction (AO/OTA 43-C3)",
                    "th": "• กระดูกผิวข้อหน้าแข้งแตกละเอียดยุบอัดแน่น Rüedi-Allgöwer Type III (AO/OTA 43-C3) ทุกราย"
                  },
                  "method": {
                    "en": "• Mandatory Staged 'Span-Scan-Plan' Protocol:\n  - Stage 1 (Day 0): Emergent temporary delta-frame spanning external fixator across ankle + fibular ORIF to restore length and alignment\n  - Intermediate: Fine-cut 3D CT scan to map articular fragments\n  - Stage 2 (Day 10–21): Definitive surgery once skin wrinkles appear; disimpact and elevate depressed subchondral fragments; pack metaphyseal defect with autograft/allograft/calcium phosphate; anatomical distal tibia locking plate osteosynthesis\n  - Primary Arthrodesis: Salvage for catastrophic comminution in elderly/low-demand patients",
                    "th": "• กลยุทธ์ผ่าตัดเป็นขั้นตอนมาตรฐาน (Span-Scan-Plan):\n  - ระยะที่ 1 (วันแรก): ผ่าตัดใส่โครงดามกระดูกภายนอก Delta Spanning Ex-Fix ข้ามข้อเท้าฉุกเฉิน + ดามกระดูก Fibula เพื่อคืนความยาวขา\n  - ระหว่างพักฟื้น: ส่งตรวจ 3D CT Scan อย่างละเอียดเพื่อวางแผนจัดเรียงชิ้นกระดูก\n  - ระยะที่ 2 (วันที่ 10–21): ผ่าตัดซ่อมแซมผิวข้อเมื่อผิวหนังเริ่มย่น (Wrinkle sign) งัดยกชิ้นผิวกระดูกที่ยุบอัดแน่น ปลูกกระดูกทดแทนโพรงกระดูก (Bone graft) และดามแผ่นเหล็ก Distal Tibia Locking Plate\n  - ผ่าตัดเชื่อมข้อเท้า (Primary Arthrodesis): พิจารณาในรายที่ผิวข้อแหลกละเอียดจนซ่อมไม่ได้ในผู้สูงอายุ"
                  },
                  "rehabilitation": {
                    "en": "• Strict non-weight bearing (NWB) x 12 weeks; gentle active ankle ROM at 4–6 weeks; full WB only after complete trabecular bridging on radiographs (12–16 weeks)",
                    "th": "• ห้ามลงน้ำหนักเด็ดขาด (NWB) 12 สัปดาห์ เริ่มฝึกขยับข้อเท้าเบาๆ ที่ 4–6 สัปดาห์ และลงน้ำหนักเต็มที่เมื่อกระดูกติดสมบูรณ์ (12–16 สัปดาห์)"
                  },
                  "pitfalls": {
                    "en": "• Operating prematurely before skin wrinkle test is positive leads to wound breakdown and exposed hardware\n• Failure to bone-graft subchondral void results in secondary articular collapse",
                    "th": "• การฝืนผ่าตัดเปิดก่อนที่ผิวหนังจะยุบบวมและย่น (Wrinkle sign) จะทำให้แผลเน่า แผลแยก และเหล็กโผล่\n• หากไม่ปลูกกระดูกเสริมใต้ผิวข้อที่ยุบตัว จะทำให้ผิวข้อทรุดตัวซ้ำ"
                  }
                }
              },
              "illustrationId": "/images/ruedi_allgower/type3.png",
              "xrayDescription": {
                "en": "Mushroom-like explosion of the distal tibia with impacted subchondral fragments, loss of joint space, and marked metaphyseal shortening/widening.",
                "th": "ลักษณะกระดูกแตกกระจายเหมือนดอกเห็ด (Mushroom explosion) ผิวข้อยุบอัดแน่นจมลงในโพรงกระดูก ข้อเท้าเตี้ยสั้นและกางออก"
              }
            }
          ]
        }
      ]
    }
  ]
};
