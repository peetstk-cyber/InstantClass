import type { BoneData } from "../../types";

export const patellaBone: BoneData = {
  "id": "patella",
  "name": {
    "en": "Patella",
    "th": "กระดูกสะบ้าหัวเข่า"
  },
  "description": {
    "en": "Kneecap",
    "th": "ลูกสะบ้าหัวเข่า"
  },
  "pediatric": false,
  "regions": [
    {
      "id": "patella",
      "name": {
        "en": "Patella",
        "th": "กระดูกสะบ้า (Patella)"
      },
      "regionConcept": {
        "physicalExam": [
          {
            "sign": "Active Straight Leg Raise (SLR) Test",
            "positive": {
              "en": "Inability to actively elevate extended leg off table or presence of extension lag >10°; pathognomonic for complete extensor mechanism disruption.",
              "th": "ไม่สามารถนอนยกขาตรงลอยพ้นเตียงได้ หรือมีภาวะเหยียดเข่าไม่สุด (Extension lag >10°) แสดงถึงกลไกการเหยียดข้อเข่าฉีกขาดสมบูรณ์"
            }
          },
          {
            "sign": "Palpable Fracture Defect / Gap",
            "positive": {
              "en": "Focal depression or sulcus palpated between superior and inferior patellar fragments.",
              "th": "คลำได้ร่องรอยบุ๋มหรือช่องอ้าแยกระหว่างชิ้นกระดูกสะบ้าส่วนบนและส่วนล่าง"
            }
          },
          {
            "sign": "Knee Joint Hemarthrosis & Tense Effusion",
            "positive": {
              "en": "Rapid painful swelling and fluid wave in the knee joint due to intra-articular bleeding from fractured patella.",
              "th": "ข้อเข่าบวมตึงรวดเร็วและมีเลือดออกสะสมในช่องข้อ (Hemarthrosis) จากรอยหักของสะบ้า"
            }
          }
        ],
        "acceptableAlignment": [
          {
            "parameter": {
              "en": "Articular Step-off",
              "th": "ความเหลื่อมของผิวข้อต่อ"
            },
            "threshold": "< 1 - 2 mm",
            "note": {
              "en": "Articular step-off >2mm increases patellofemoral osteoarthritis risk.",
              "th": "ผิวข้อเหลื่อม > 2 มม. เพิ่มความเสี่ยงข้อสะบ้าเสื่อม (Patellofemoral arthritis)"
            }
          },
          {
            "parameter": {
              "en": "Fracture Separation Gap (Displacement)",
              "th": "ระยะอ้าแยกของรอยหัก"
            },
            "threshold": "< 2 - 3 mm",
            "note": {
              "en": "Gap >3mm indicates torn medial/lateral retinacula and requires surgical repair.",
              "th": "ช่องอ้า > 3 มม. แสดงว่าเอ็น Retinaculum สองข้างฉีกขาด ต้องได้รับการผ่าตัด"
            }
          }
        ],
        "redFlags": [
          {
            "en": "Disruption of extensor mechanism (loss of SLR ability), leading to permanent loss of knee extension if un-repaired.",
            "th": "การฉีกขาดของกลไกเหยียดเข่า (สูญเสียความสามารถ SLR) นำไปสู่การสูญเสียการเหยียดเข่าถาวรหากไม่ได้ผ่าตัดซ่อมแซม"
          },
          {
            "en": "Open patella fracture with joint contamination, requiring urgent operative debridement and joint washout.",
            "th": "กระดูกสะบ้าหักแบบมีแผลเปิดเข้าข้อ (Open patella fracture) ต้องผ่าตัดล้างข้อเข่าฉุกเฉิน"
          }
        ],
        "associatedInjuries": [
          {
            "injury": {
              "en": "Medial and Lateral Retinacular Tears",
              "th": "พังผืดเอ็น Retinaculum ด้านในและด้านนอกฉีกขาด"
            },
            "trigger": {
              "en": "Present whenever fracture gap >3mm or SLR is impossible",
              "th": "พบเสมอเมื่อรอยหักอ้าแยก >3มม. หรือยกขาตรง SLR ไม่ได้"
            }
          },
          {
            "injury": {
              "en": "Femoral Condyle Osteochondral Contusion / Fracture",
              "th": "กระดูกอ่อนผิวข้อ Femoral condyle ช้ำหรือหักกะเทาะ"
            }
          }
        ],
        "clinicalPearls": [
          {
            "en": "Extensor mechanism check (active SLR test) is the primary clinical determinant for surgical vs non-operative management.",
            "th": "การตรวจกลไกเหยียดเข่า (Active SLR test) เป็นตัวตัดสินหลักทางคลินิกในการเลือกระหว่างการผ่าตัดกับการใส่เฝือกดาม"
          },
          {
            "en": "Tension Band Wiring (TBW) is the classic gold-standard fixation for displaced transverse patellar fractures with intact retinaculum.",
            "th": "วิธี Tension Band Wiring (TBW) เป็นมาตรฐานหลักคลาสสิกในการผ่าตัดยึดกระดูกสะบ้าหักแนวขวางที่เคลื่อนตัว"
          },
          {
            "en": "Biromechanically, TBW converts tensile forces on the anterior patellar surface during knee flexion into dynamic compressive forces across the posterior articular surface.",
            "th": "ทางชีวกลศาสตร์ TBW จะเปลี่ยนแรงดึงด้านหน้าสะบ้าขณะงอเข่า ให้กลายเป็นแรงอัดแน่น (Dynamic compression) ตรงผิวข้อด้านหลัง"
          },
          {
            "en": "Distinguish bipartite patella (smooth, rounded margins at superolateral pole, usually bilateral) from acute fracture.",
            "th": "ต้องแยก Bipartite patella (ขอบเรียบมนตรงมุมบนด้านนอก มักเป็นสองข้าง) ออกจากรอยหักสะบ้าเฉียบพลัน"
          }
        ]
      },
      "classifications": [
        {
          "system": "Anatomical & Functional",
          "fullName": {
            "en": "Anatomical & Functional Patella Fracture Classification",
            "th": "การจำแนกกระดูกสะบ้าหักตามกายวิภาคและหน้าที่กล้ามเนื้อเหยียดเข่า"
          },
          "description": {
            "en": "Practical classification of patellar fractures based on fracture morphology, displacement, articular step-off, and extensor mechanism (Straight Leg Raise) integrity, dictating non-operative vs surgical management (Tension Band Wiring, Plating, Pole Anchor).",
            "th": "ระบบจำแนกกระดูกสะบ้าหักตามรูปแบบรอยหัก การเคลื่อนตัว รอยเกยผิวข้อ และความสมบูรณ์ของกล้ามเนื้อ/เอ็นเหยียดข้อเข่า (Straight Leg Raise - SLR) ซึ่งเป็นตัวชี้ขาดการรักษาระหว่างเฝือก Cylinder Cast กับการผ่าตัด Tension Band Wiring (TBW)"
          },
          "concept": {
            "title": {
              "en": "Patella Fracture Clinical Concept",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ Patella Fracture Classification"
            },
            "showTable": true,
            "corePrinciple": {
              "en": "Patella fractures are classified by anatomical pattern (transverse, vertical, comminuted, pole) and extensor mechanism functional integrity (active Straight Leg Raise test), dictating non-operative cylinder casting versus surgical restoration.",
              "th": "การจำแนกกระดูกสะบ้าหักอิงตามรูปแบบทางกายวิภาค (แนวขวาง, แนวดิ่ง, แตกละเอียด, ชิ้นขั้วสะบ้า) ร่วมกับความสมบูรณ์ของกลไกการเหยียดข้อเข่า (การทดสอบยกขาตรง Active SLR) ซึ่งเป็นตัวชี้ขาดการรักษาระหว่างเฝือก Cylinder cast กับการผ่าตัด"
            },
            "rules": [
              {
                "en": "Non-Operative Rule: Intact extensor mechanism (Patient CAN perform active SLR), fracture gap <2–3 mm, AND articular step-off <1–2 mm",
                "th": "เกณฑ์รักษาแบบไม่ผ่าตัด: กลไกเหยียดเข่าสมบูรณ์ (ยกขาตรง SLR ได้ดี), ช่องอ้ารอยหัก <2–3 มม. และผิวข้อเหลื่อม <1–2 มม."
              },
              {
                "en": "Operative Rule: Disrupted extensor mechanism (Inability to perform active SLR / Extension lag >10°), fracture gap >2–3 mm, OR articular step-off >1–2 mm",
                "th": "เกณฑ์ผ่าตัด: กลไกเหยียดเข่าฉีกขาด (ยกขาตรง SLR ไม่ได้ / Extension lag >10°), ช่องอ้ารอยหัก >2–3 มม. หรือผิวข้อเหลื่อม >1–2 มม."
              },
              {
                "en": "Transverse Pattern Rule: Convert anterior tension force into dynamic articular compression using Tension Band Wiring (TBW)",
                "th": "เกณฑ์รอยหักแนวขวาง: เปลี่ยนแรงดึงด้านหน้าเป็นแรงอัดผิวข้อแน่นโดยใช้เทคนิค Tension Band Wiring (TBW)"
              }
            ],
            "clinicalSignificance": [
              {
                "en": "Non-Operative Protocol: Immobilization in Cylinder Cast or hinged knee brace locked in full extension for 4–6 weeks with immediate weight-bearing as tolerated",
                "th": "แนวทางรักษาแบบไม่ผ่าตัด: ใส่เฝือกดามขาตรง Cylinder Cast หรือ Hinged brace ล็อคเข่าตรง 4–6 สัปดาห์ ลงน้ำหนักได้ทันทีตามทนไหว"
              },
              {
                "en": "Transverse Fracture Fixation: Tension Band Wiring (TBW) using two 2.0 mm K-wires or 4.0 mm cannulated screws with figure-of-8 18-gauge wire",
                "th": "ผ่าตัดรอยหักแนวขวาง: ทำ Tension Band Wiring (TBW) ด้วย K-wires 2.0 มม. สองตัว หรือ Cannulated Screws 4.0 มม. ร่วมกับลวดคล้องเลข 8"
              },
              {
                "en": "Comminuted Fracture Fixation: Low-profile fixed-angle mesh plating or partial patellectomy with direct Quadriceps/Patellar tendon repair",
                "th": "ผ่าตัดรอยหักแตกละเอียด: ดามแผ่นเหล็ก Low-profile mesh plate หรือทำ Partial patellectomy ร่วมกับเย็บซ่อมเอ็นสะบ้า"
              },
              {
                "en": "Inferior Pole Fracture Fixation: Suture anchor repair or transosseous wiring with patellotibial basket plate or tape augmentation",
                "th": "ผ่าตัดรอยหักขั้วล่าง: ผ่าตัดยึดด้วย Suture anchors หรือ Transosseous wiring ร่วมกับเย็บซ่อมเอ็น"
              },
              {
                "en": "Clinical Pitfall Warning: Never rely on X-rays alone; a non-displaced looking fracture with SLR failure indicates complete retinacular rupture requiring surgery. Also differentiate acute fracture from bipartite patella (smooth rounded superolateral fragment)",
                "th": "คำเตือนจุดตาย: ห้ามใช้ X-ray ตัดสินเพียงอย่างเดียว; หากรอยหักดูไม่เคลื่อนแต่ยกขาตรง SLRไม่ได้ แสดงว่าเอ็น Retinaculum ขาดสมบูรณ์และต้องผ่าตัด และต้องแยกแยะ Bipartite patella (ขอบมนเรียบตรงมุมบนด้านนอก) ออกจากรอยหักเฉียบพลัน"
              }
            ]
          },
          "investigations": [
            {
              "name": "AP Knee View",
              "details": {
                "en": "Standard AP knee view. Evaluates fracture lines, bipartite patella differential, and mediolateral displacement.",
                "th": "ภาพเอกซเรย์ข้อเข่าท่า AP มาตรฐาน ใช้ประเมินแนวกระดูกหัก รอยแยกสองซีก (Bipartite patella) และการเคลื่อนตัวออกด้านข้าง"
              }
            },
            {
              "name": "True Lateral Knee View (30° Flexion)",
              "details": {
                "en": "True lateral view with 30° flexion. Essential for measuring fracture gap (>2mm), articular step-off (>1mm), and patellar height (Insall-Salvati ratio for patella alta/baja).",
                "th": "ภาพเอกซเรย์ข้อเข่าท่าด้านข้างงอ 30 องศา สำคัญที่สุดในการวัดระยะอ้าช่องรอยหัก (>2มม.), รอยเกยผิวข้อ (>1มม.) และระดับความสูงของลูกสะบ้า"
              }
            },
            {
              "name": "Skyline / Merchant View (Sunrise View)",
              "details": {
                "en": "Axial patellofemoral view with 30-45° flexion. Visualizes vertical/sagittal fracture lines, osteochondral fragments, and patellar tracking in the trochlear groove.",
                "th": "ภาพเอกซเรย์หน้าตัดสะบ้า (Skyline/Merchant View) สำคัญมากในการดูรอยหักแนวดิ่ง (Vertical/Sagittal) และชิ้นกระดูกกะเทาะในเบ้า Trochlear groove"
              }
            }
          ],
          "types": [
            {
              "type": "Nondisplaced",
              "name": {
                "en": "Nondisplaced",
                "th": "1. Nondisplaced (หักไม่เคลื่อนตัว - กลไกเหยียดเข่าสมบูรณ์)"
              },
              "description": {
                "en": "Minimal displacement (fracture gap < 2 mm, articular step-off < 1 mm)\nExtensor mechanism INTACT (patient can perform active Straight Leg Raise - SLR)\nRetinacula on medial and lateral sides are un-torn\nExcellent prognosis with conservative management",
                "th": "รอยหักเคลื่อนตัวน้อยมาก (ระยะอ้าช่องหัก < 2 มม. และผิวข้อเกย < 1 มม.)\nกลไกการเหยียดข้อเข่าสมบูรณ์ (ผู้ป่วยสามารถนอนยกขาตรง Straight Leg Raise - SLR ได้)\nพังผืดเอ็น Retinaculum ด้านข้างและด้านในยังไม่ฉีกขาด\nผลการรักษาดีเยี่ยมโดยไม่ต้องผ่าตัด"
              },
              "moi": {
                "en": "Direct low-energy blow onto the knee during a simple fall.",
                "th": "แรงกระแทกโดยตรงพลังงานต่ำเข้าที่หน้าเข่าขณะล้ม"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Intact extensor mechanism (Active SLR test positive without lag), fracture separation gap <2–3 mm, and articular step-off <1–2 mm; non-operative cylinder cast / locked extension brace with >99% union.",
                  "th": "กลไกการเหยียดข้อเข่าสมบูรณ์ (ผู้ป่วยนอนยกขาตรง Active SLR ได้โดยไม่มีตก), รอยหักอ้าแยก <2–3 มม. และผิวข้อเหลื่อม <1–2 มม. รักษาแบบไม่ผ่าตัดด้วย Cylinder Cast หรือปลอกดามเข่าล็อคตรง กระดูกติดได้ดี >99%"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Intact extensor mechanism with ability to perform active Straight Leg Raise (SLR)\n• Fracture gap < 2–3 mm and articular step-off < 1–2 mm\n• Intact medial and lateral retinacula",
                    "th": "• กลไกการเหยียดเข่าสมบูรณ์ สามารถนอนยกขาตรง (Active SLR) ได้\n• ช่องอ้ารอยหัก < 2–3 มม. และผิวข้อเหลื่อม < 1–2 มม.\n• พังผืดเอ็น Retinaculum ด้านข้างทั้งสองข้างไม่ฉีกขาด"
                  },
                  "method": {
                    "en": "• Cylinder cast or rigid knee immobilizer locked in full extension for 4–6 weeks\n• Immediate full weight-bearing as tolerated with crutches",
                    "th": "• ใส่เฝือกดามขาตรง (Cylinder cast) หรือ Knee Immobilizer ล็อคเข่าเหยียดตรง 4–6 สัปดาห์\n• ลงน้ำหนักได้เต็มที่ทันทีตามที่ทนไหวร่วมกับใช้ไม้ค้ำยัน"
                  },
                  "rehabilitation": {
                    "en": "• Start immediate isometric quadriceps setting and straight leg raising on post-injury day 1; convert to hinged knee brace at 4 weeks allowing progressive 0°–30° flexion, advancing by 15° weekly",
                    "th": "• เริ่มฝึกเกร็งกล้ามเนื้อหน้าขา (Quadriceps setting) และฝึกยกขาตรงตั้งแต่วันแรก; เปลี่ยนเป็น Hinged Brace ที่ 4 สัปดาห์ ปรับงอเข่า 0°–30° และเพิ่มสัปดาห์ละ 15 องศา"
                  },
                  "pitfalls": {
                    "en": "• Failure to verify active SLR clinically (a non-displaced appearance on X-ray with inability to SLR indicates torn retinaculum requiring surgery)\n• Prolonged immobilization causing knee flexion arthrofibrosis",
                    "th": "• ไม่ได้ตรวจการยกขาตรง SLR ทางคลินิก (ภาพ X-ray ดูไม่เคลื่อนแต่ยกขาตรงไม่ได้แสดงว่าเอ็น Retinaculum ฉีกขาดต้องผ่าตัด)\n• ดามขานิ่งนานเกินไปทำให้ข้อเข่าติดแข็งงอไม่ลง"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Secondary displacement during serial radiographic follow-up (gap > 3 mm or step-off > 2 mm)\n• Delayed failure of active extension",
                    "th": "• กระดูกทรุดเคลื่อนตัวเพิ่มขึ้นขณะติดตามภาพเอกซเรย์ (ช่องอ้า > 3 มม. หรือผิวข้อเหลื่อม > 2 มม.)\n• กลไกเหยียดเข่าล้มเหลวภายหลัง"
                  },
                  "method": {
                    "en": "• Percutaneous cannulated lag screws (4.0 mm) or Tension Band Wiring",
                    "th": "• ผ่าตัดยึดด้วยสกรู 4.0 mm Cannulated Screws หรือ Tension Band Wiring"
                  },
                  "rehabilitation": {
                    "en": "• Early active motion post-op",
                    "th": "• เริ่มกายภาพขยับข้อเข่าเร็วหลังผ่าตัด"
                  },
                  "pitfalls": {
                    "en": "• Unnecessary surgery for stable fracture",
                    "th": "• การผ่าตัดโดยไม่จำเป็นในรอยหักที่มั่นคงดี"
                  }
                }
              },
              "illustrationId": "/images/patella/nondisplaced.png",
              "xrayDescription": {
                "en": "Faint transverse or vertical line with <2mm gap and smooth articular surface on lateral view.",
                "th": "เห็นรอยหักจางๆ ช่องอ้า <2มม. ผิวข้อเรียบสนิทในท่าด้านข้าง"
              }
            },
            {
              "type": "Transverse",
              "name": {
                "en": "Transverse (Displaced)",
                "th": "2. Transverse (หักแนวขวางเคลื่อนตัว - ข้อบ่งชี้คลาสสิก TBW)"
              },
              "description": {
                "en": "Transverse fracture with gap > 2-3 mm or articular step-off > 1-2 mm\nExtensor mechanism DISRUPTED (patient CANNOT perform active Straight Leg Raise - SLR)\nMedial and lateral retinacula are torn\nClassic indication for Tension Band Wiring (TBW)",
                "th": "รอยหักแนวขวางที่อ้าแยกกว้าง > 2-3 มม. หรือผิวข้อเกยขั้นบันได > 1-2 มม.\nกลไกการเหยียดข้อเข่าฉีกขาดสูญเสียไป (ผู้ป่วยไม่สามารถยกขาตรง SLR ได้เลย)\nพังผืดเอ็น Retinaculum ฉีกขาดทั้งสองข้าง\nเป็นข้อบ่งชี้คลาสสิกสำหรับการผ่าตัด Tension Band Wiring (TBW)"
              },
              "moi": {
                "en": "Indirect violent quadriceps contraction or direct impact to flexed knee.",
                "th": "การหดตัวอย่างรุนแรงฉับพลันของกล้ามเนื้อ Quadriceps หรือล้มกระแทกหน้าเข่าอย่างจัง"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Disrupted extensor mechanism (inability to perform active SLR / extension lag >10°), fracture separation gap >2–3 mm, or articular step-off >1–2 mm; gold standard ORIF using modified Tension Band Wiring (TBW) to convert anterior distraction forces into dynamic articular compression upon knee flexion.",
                  "th": "กลไกการเหยียดเข่าฉีกขาด (ยกขาตรง Active SLR ไม่ได้ / เข่าตกค้าง >10°), ช่องอ้ารอยหัก >2–3 มม. หรือผิวข้อเหลื่อม >1–2 มม. เป็นข้อบ่งชี้มาตรฐานหลัก (Gold Standard) ในการผ่าตัด ORIF ด้วย Modified Tension Band Wiring (TBW) เพื่อเปลี่ยนแรงดึงด้านหน้าให้กลายเป็นแรงอัดแน่นผิวข้อขณะงอเข่า"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly CONTRAINDICATED in ambulatory patients (Causes permanent extension lag, nonunion, and severe gait handicap)",
                    "th": "• ห้ามใช้วิธีนี้ในผู้ป่วยทั่วไป (ทำให้สูญเสียการเหยียดขาถาวร กระดูกไม่ติด และพิการเดินกะเผลก)"
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
                    "en": "• Complete loss of knee extension power, permanent quadriceps atrophy, and patellofemoral arthrosis",
                    "th": "• สูญเสียแรงเหยียดเข่าถาวร กล้ามเนื้อหน้าขาลีบ และข้อสะบ้าเสื่อมรุนแรง"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Displaced transverse patellar fracture (gap > 2–3 mm or articular step-off > 1–2 mm)\n• Complete disruption of extensor mechanism (loss of active SLR ability)",
                    "th": "• กระดูกสะบ้าหักแนวขวางชนิดเคลื่อนตัว (ช่องอ้า > 2–3 มม. หรือผิวข้อเหลื่อม > 1–2 มม.)\n• กลไกเหยียดเข่าฉีกขาดสมบูรณ์ (นอนยกขาตรง SLR ไม่ได้)"
                  },
                  "method": {
                    "en": "• Open reduction and internal fixation (ORIF) with Modified Tension Band Wiring (TBW): Anatomical reduction of articular surface + Two parallel 2.0 mm K-wires or 4.0 mm Cannulated Screws + 18-gauge Figure-of-8 stainless steel wire loop tensioned anteriorly + Direct repair of medial and lateral retinacular tears with heavy non-absorbable sutures",
                    "th": "• ผ่าตัดเปิดจัดกระดูกเข้าที่ (ORIF Modified TBW): จัดผิวข้อให้เรียบสนิท + ปักลวด K-wires 2.0 มม. คู่ขนาน (หรือ 4.0 mm Cannulated Screws) + คล้องลวดสแตนเลสเบอร์ 18 เป็นรูปเลข 8 ขึงตึงด้านหน้าสะบ้า + เย็บซ่อมพังผืดเอ็น Retinaculum ด้านข้างทั้งสองข้างด้วยไหมไม่ละลาย"
                  },
                  "rehabilitation": {
                    "en": "• Hinged knee brace: immediate active-assisted knee ROM (0°–90° for first 4 weeks); immediate weight-bearing in full extension; progressive full flexion and quadriceps strengthening after 6 weeks",
                    "th": "• ใส่ Hinged Knee Brace: ฝึกงอเข่าช่วย 0°–90° ใน 4 สัปดาห์แรก; ลงน้ำหนักเต็มที่ในท่าเหยียดตรงทันที; ฝึกงอเข่าสุดและเพิ่มกำลังกล้ามเนื้อหลัง 6 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Prominent wire knots under thin anterior skin causing soft tissue irritation (bend and bury K-wire tips into bone)\n• Inadequate articular reduction resulting in rapid patellofemoral chondrosis",
                    "th": "• ปมลวดนูนระคายเคืองผิวหนังด้านหน้าที่บาง (ต้องดัดปลายลวดพับฝังในเนื้อกระดูก)\n• จัดผิวข้อไม่เรียบเนียนทำให้เกิดข้อสะบ้าเสื่อมอย่างรวดเร็ว"
                  }
                }
              },
              "illustrationId": "/images/patella/displaced_transverse.png",
              "xrayDescription": {
                "en": "Wide separation gap >2-3mm between superior and inferior patellar fragments on lateral view.",
                "th": "เห็นชิ้นกระดูกส่วนบนและล่างอ้าแยกออกจากกันกว้าง >2-3 มม. อย่างชัดเจนในท่าด้านข้าง"
              }
            },
            {
              "type": "Lower or Upper Pole",
              "name": {
                "en": "Lower or Upper Pole",
                "th": "3. Lower or Upper Pole (หักขั้วล่าง/ขั้วบน - เอ็น Patellar Tendon หลุด)"
              },
              "description": {
                "en": "Avulsion fracture involving the non-articular inferior pole (most common) or superior pole\nAttachment of Patellar Tendon (inferior pole) or Quadriceps Tendon (superior pole) is disrupted\nSmall extra-articular or intra-articular pole fragment\nDisplaces proximally causing Patella Alta (high-riding patella)",
                "th": "รอยหักกะเทาะหลุดบริเวณขั้วล่าง (Inferior pole - พบบ่อยที่สุด) หรือขั้วบน\nจุดเกาะของเอ็น Patellar Tendon (ขั้วล่าง) หรือ Quadriceps Tendon (ขั้วบน) ฉีกขาดลอยออก\nชิ้นกระดูกส่วนใหญ่ถูกดึงรั้งยกลอยขึ้นสูงเกิดภาวะ **Patella Alta** (ลูกสะบ้ายกลอยสูง)"
              },
              "moi": {
                "en": "Violent contraction of quadriceps muscle in athletes (jumping/landing force).",
                "th": "การหดตัวกระชากอย่างรุนแรงของกล้ามเนื้อ Quadriceps ในนักกีฬา (เช่น การกระโดดลงพื้น)"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Avulsion fracture of inferior pole (patellar tendon avulsion) or superior pole (quadriceps tendon avulsion); disrupted extensor mechanism and high-riding patella (Patella Alta); surgical re-attachment via transosseous tunnels, suture anchors, or basket plate.",
                  "th": "ขั้วล่างสะบ้าหักกะเทาะ (เอ็น Patellar Tendon หลุด) หรือขั้วบนหัก (เอ็น Quadriceps หลุด) กลไกเหยียดเข่าฉีกขาด ลูกสะบ้ายกลอยสูง (Patella Alta) แนะนำผ่าตัดยึดตรึงเอ็นกลับเข้ากระดูกด้วย Transosseous Suture Tunnels, Suture Anchors หรือ Basket Plate"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly non-displaced pole fracture (<2 mm gap) with completely intact active SLR",
                    "th": "• ขั้วสะบ้าหักไม่เคลื่อนตัว (<2 มม.) และยกขาตรง Active SLR ได้ปกติสมบูรณ์"
                  },
                  "method": {
                    "en": "• Cylinder cast or extension brace for 6 weeks",
                    "th": "• ใส่เฝือกดามขาตรง Cylinder Cast นาน 6 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Gentle protected range of motion after 6 weeks",
                    "th": "• เริ่มฝึกขยับข้อเข่าอย่างระมัดระวังหลัง 6 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Secondary proximal migration of patella due to quadriceps muscle tone",
                    "th": "• ลูกสะบ้าถูกกล้ามเนื้อหน้าขาดึงรั้งลอยสูงขึ้นเรื่อยๆ จนเอ็นติดผิดรูป"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Displaced inferior or superior pole avulsion fracture (>2 mm displacement)\n• Disruption of extensor mechanism / Patella Alta on lateral radiograph",
                    "th": "• ขั้วสะบ้าหักเคลื่อนตัว (> 2 มม.)\n• กลไกเหยียดเข่าฉีกขาด หรือลูกสะบ้ายกลอยสูง (Patella Alta)"
                  },
                  "method": {
                    "en": "• Large reconstructible pole fragment: Anatomical reduction + Headless compression screws or mini-basket plate with tension band\n• Comminuted / small avulsion fragment (<1 cm): Excision of comminuted bone flakes (Partial Patellectomy) + Transosseous bone tunnel suturing (Krackow technique with #5 non-absorbable suture) or Suture Anchors + Patellar Tendon augmentation (wire loop/FiberTape cerclage through tibial tubercle)",
                    "th": "• ชิ้นขั้วขนาดใหญ่: จัดกระดูกเข้าที่ + ขันสกรูหัวจม Headless Screws หรือดาม Basket Plate\n• ชิ้นขั้วแตกป่น/ขนาดเล็ก (<1 ซม.): ตัดเศษกระดูกป่นออก (Partial Patellectomy) + ร้อยเย็บเอ็นผ่านรูเจาะในกระดูกสะบ้า (Krackow Transosseous Tunnels ด้วยไหมเบอร์ 5) หรือใช้ Suture Anchors + คล้องลวด/FiberTape เสริมแรงยึดกับปุ่มกระดูกหน้าแข้ง (Tibial tubercle)"
                  },
                  "rehabilitation": {
                    "en": "• Extension brace locked at 0° for 4 weeks with weight-bearing as tolerated; passive flexion 0°–45° at 2 weeks, 0°–90° at 4 weeks; active knee extension at 6 weeks",
                    "th": "• ใส่ Knee Brace ล็อคตรง 0 องศา 4 สัปดาห์ ลงน้ำหนักได้; ฝึกงอเข่าช่วย 0°–45° ที่ 2 สัปดาห์, 0°–90° ที่ 4 สัปดาห์; เริ่มเตะเหยียดขาเองที่ 6 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Overtightening the tendon repair resulting in low-riding patella (Patella Baja) or patellofemoral overpressure",
                    "th": "• ดึงเย็บเอ็นตึงสั้นเกินไปจนลูกสะบ้าจมต่ำ (Patella Baja) ทำให้ปวดและงอเข่าไม่ลง"
                  }
                }
              },
              "illustrationId": "/images/patella/polar_avulsion.png",
              "xrayDescription": {
                "en": "Small avulsed inferior pole fragment with proximal displacement of the main patellar body (Patella Alta on lateral view).",
                "th": "เห็นชิ้นกระดูกขั้วล่างหลุดกะเทาะ และลูกสะบ้าชิ้นใหญ่ยกลอยขึ้นสูง (Patella Alta) ในท่าด้านข้าง"
              }
            },
            {
              "type": "Vertical",
              "name": {
                "en": "Vertical",
                "th": "4. Vertical (หักแนวดิ่งพาดตามยาว - เอ็นเหยียดมักสมบูรณ์)"
              },
              "description": {
                "en": "Vertical fracture line running longitudinal from superior to inferior pole\nExtensor mechanism usually remains INTACT\nBest visualized on Skyline / Merchant view\nLow rate of displacement under quadriceps pull",
                "th": "รอยหักพาดตามแนวดิ่งจากขั้วบนลงขั้วล่างของลูกสะบ้า\nกลไกการเหยียดข้อเข่ามักยังคงสมบูรณ์ดี (มักยกขาตรง SLR ได้)\nประเมินได้ดีที่สุดในท่าเอกซเรย์หน้าตัด Skyline View\nกระดูกแทบไม่เคลื่อนตัวตามแรงดึง Quadriceps"
              },
              "moi": {
                "en": "Direct blow to the lateral aspect of the patella.",
                "th": "แรงกระแทกโดยตรงเข้าที่ด้านข้างของลูกสะบ้า"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Vertical fracture line parallel to extensor mechanism; retinacula and quadriceps expansion remain intact; minimal tensile distraction; non-operative knee extension brace for 4 weeks (>98% union); ORIF reserved for articular step-off >2 mm.",
                  "th": "รอยหักแนวดิ่งขนานกับแนวแรงดึงของกล้ามเนื้อเหยียดเข่า เอ็น Retinaculum ยังสมบูรณ์ แรงดึงไม่ทำให้รอยหักอ้าแยก รักษาแบบไม่ผ่าตัดด้วยปลอกดามเข่า 4 สัปดาห์ (กระดูกติด >98%) ผ่าตัดเฉพาะกรณีผิวข้อเหลื่อม >2 มม."
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Vertical patellar fracture with articular step-off < 1–2 mm\n• Intact extensor mechanism (ability to perform active SLR)",
                    "th": "• สะบ้าหักแนวดิ่ง ผิวข้อเหลื่อม < 1–2 มม.\n• กลไกเหยียดเข่าสมบูรณ์ (ยกขาตรง Active SLR ได้ปกติ)"
                  },
                  "method": {
                    "en": "• Hinged knee brace locked in extension or cylinder cast for 3–4 weeks with immediate weight-bearing as tolerated",
                    "th": "• ใส่ Hinged Knee Brace ล็อคตรงหรือ Cylinder Cast นาน 3–4 สัปดาห์ ลงน้ำหนักได้ทันที"
                  },
                  "rehabilitation": {
                    "en": "• Progressive knee flexion ROM out of brace starting at 3–4 weeks; full quadriceps strengthening at 6 weeks",
                    "th": "• ถอดปลอกดามฝึกงอเข่าที่ 3–4 สัปดาห์ และฝึกเพิ่มกำลังกล้ามเนื้อเต็มที่ที่ 6 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Missing vertical fractures on standard AP/lateral views (Skyline/Merchant axial view is mandatory)",
                    "th": "• มองไม่เห็นรอยหักแนวดิ่งในภาพเอกซเรย์ท่า AP/ด้านข้างปกติ (ต้องส่งตรวจ Skyline/Merchant View เสมอ)"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Intra-articular step-off or gap > 2 mm visible on Skyline view\n• Displaced sagittal split fragment compromising patellofemoral tracking",
                    "th": "• ผิวข้อเหลื่อมหรืออ้ากว้าง > 2 มม. ในท่า Skyline View\n• ชิ้นกระดูกแตกแยกขัดขวางการเคลื่อนตัวของสะบ้าในร่องข้อ"
                  },
                  "method": {
                    "en": "• Direct anterior approach: Anatomical articular reduction + Horizontal interfragmentary 3.5 mm / 4.0 mm Cannulated Lag Screws placed perpendicular to the vertical fracture line",
                    "th": "• ผ่าตัดเข้าทางด้านหน้า: จัดผิวข้อให้เรียบ + ขันสกรูดึงอัด 3.5 mm / 4.0 mm Cannulated Lag Screws ในแนวขวางตั้งฉากกับรอยหักแนวดิ่ง"
                  },
                  "rehabilitation": {
                    "en": "• Early active-assisted knee motion immediately post-op",
                    "th": "• เริ่มฝึกขยับข้อเข่าเร็วหลังผ่าตัด"
                  },
                  "pitfalls": {
                    "en": "• Misdirecting horizontal lag screws into the posterior articular cartilage facet",
                    "th": "• สกรูแนวขวางเจาะทะลุโผล่เข้าผิวข้อสะบ้าด้านหลัง"
                  }
                }
              },
              "illustrationId": "/images/patella/vertical_sagittal.png",
              "xrayDescription": {
                "en": "Vertical fracture line seen clearly on Skyline/Merchant view, separating medial and lateral facets.",
                "th": "เห็นรอยหักแนวดิ่งชัดเจนที่สุดในท่า Skyline View แยกผิวด้านในและด้านนอกออกจากกัน"
              }
            },
            {
              "type": "Multifragmented Nondisplaced",
              "name": {
                "en": "Multifragmented Nondisplaced",
                "th": "5. Multifragmented Nondisplaced (แตกละเอียดหลายชิ้นแต่ไม่เคลื่อนตัว)"
              },
              "description": {
                "en": "Multi-fragmentary stellate fracture without displacement (gap < 2 mm, step-off < 1-2 mm)\nExtensor mechanism INTACT (patient CAN perform active SLR)\nCan be treated conservatively if retinaculum is un-torn and fragments remain stable",
                "th": "รอยหักแตกละเอียดกระจายหลายชิ้นแต่ชิ้นกระดูกยังอยู่ในตำแหน่ง (ระยะห่าง < 2 มม. และผิวข้อเกย < 1-2 มม.)\nกลไกการเหยียดข้อเข่าสมบูรณ์ดี (ผู้ป่วยยังนอนยกขาตรง SLR ได้)\nสามารถรักษาแบบไม่ผ่าตัดได้หากพังผืดเอ็น Retinaculum ไม่ฉีกขาด"
              },
              "moi": {
                "en": "Direct moderate-energy blow to the anterior patella.",
                "th": "แรงกระแทกโดยตรงปานกลางเข้าที่สะบ้าด้านหน้า"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Multi-fragmentary starburst pattern without displacement (<2 mm gap, <1–2 mm step-off); intact extensor mechanism and retinacula; non-operative cylinder cast / locked brace with serial weekly radiographs.",
                  "th": "สะบ้าแตกละเอียดรูปดาวกระจายแต่ไม่เคลื่อนตัว (ช่องอ้า <2 มม., ผิวข้อเหลื่อม <1–2 มม.) กลไกเหยียดเข่ายังสมบูรณ์ รักษาแบบไม่ผ่าตัดด้วย Cylinder Cast หรือปลอกดามเข่า พร้อมติดตามภาพถ่ายเอกซเรย์ทุกสัปดาห์"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Comminuted/stellate fracture with minimal displacement (gap < 2 mm, step-off < 1–2 mm)\n• Intact active SLR without extension lag",
                    "th": "• สะบ้าแตกละเอียดแต่ไม่เคลื่อนตัว (ช่องอ้า < 2 มม., ผิวข้อเหลื่อม < 1–2 มม.)\n• นอนยกขาตรง Active SLR ได้ปกติ ไม่มีอาการเข่าตกค้าง"
                  },
                  "method": {
                    "en": "• Cylinder cast or rigid extension brace for 4–6 weeks with protected weight-bearing",
                    "th": "• ใส่เฝือกดามขาตรง Cylinder Cast หรือ Knee Immobilizer 4–6 สัปดาห์ ลงน้ำหนักแบบระวัง"
                  },
                  "rehabilitation": {
                    "en": "• Gentle isometric quadriceps exercises from week 1; transition to active ROM after radiographic consolidation at 6 weeks",
                    "th": "• ฝึกเกร็งหน้าขาตั้งแต่สัปดาห์แรก และเริ่มฝึกงอเข่าหลังเห็นกระดูกเริ่มเชื่อมติดที่ 6 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Late displacement caused by early unprotected knee flexion (weekly X-ray monitoring required for first 3 weeks)",
                    "th": "• ชิ้นกระดูกทรุดเคลื่อนหลุดจากการงอเข่าเร็วเกินไป (ต้องติดตามเอกซเรย์ทุกสัปดาห์ใน 3 สัปดาห์แรก)"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Secondary displacement or late extensor mechanism failure",
                    "th": "• ชิ้นกระดูกเคลื่อนตัวหลุดเพิ่มขึ้น หรือกลไกเหยียดเข่าล้มเหลวภายหลัง"
                  },
                  "method": {
                    "en": "• Low-profile multi-planar mesh plate or circumferential cerclage wiring",
                    "th": "• ผ่าตัดดามแผ่นเหล็กล็อคตาข่าย Patellar Mesh Plate หรือร้อยลวดพันรอบวง (Cerclage wiring)"
                  },
                  "rehabilitation": {
                    "en": "• Guided early motion",
                    "th": "• กายภาพฝึกขยับข้อตามลำดับ"
                  },
                  "pitfalls": {
                    "en": "• Secondary fragment devascularization during open exploration",
                    "th": "• เลาะเนื้อเยื่อมากเกินไปจนชิ้นกระดูกขาดเลือดตาย"
                  }
                }
              },
              "illustrationId": "/images/patella/comminuted_undisplaced.png",
              "xrayDescription": {
                "en": "Multiple intersecting fracture lines with minimal displacement and preserved articular alignment.",
                "th": "เห็นรอยหักแตกเป็นแขนงหลายเส้นแต่ชิ้นกระดูกไม่เคลื่อนแยกจากกัน"
              }
            },
            {
              "type": "Multifragmented Displaced",
              "name": {
                "en": "Multifragmented Displaced",
                "th": "6. Multifragmented Displaced (แตกละเอียดดาวกระจายเคลื่อนตัว)"
              },
              "description": {
                "en": "Multi-fragmentary starburst/comminuted fracture of patella\nUsually caused by direct high-energy trauma\nArticular surface is severely incongruent\nRequires meticulous reconstruction or circumferential wiring",
                "th": "กระดูกสะบ้าแตกละเอียดกระจายเป็นรูปดาวหลายชิ้นส่วน\nมักเกิดจากแรงกระแทกโดยตรงพลังงานสูงเข้าที่หน้าเข่า\nผิวข้อต่อขรุขระผิดรูปอย่างมาก\nต้องการการจัดผ่าตัดดามกระดูกอย่างละเอียด หรือใช้ลวดพันรอบ (Circumferential wiring)"
              },
              "moi": {
                "en": "High-energy direct blow to knee (dashboard injury or fall from height onto knees).",
                "th": "แรงกระแทกตรงเข้าหน้าเข่าพลังงานสูง (Dashboard injury เข่าชนหน้ารถ หรือตกที่สูงกระแทกเข่า)"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "High-energy comminuted fracture with severe articular disruption and loss of extensor mechanism; surgical reconstruction with low-profile mesh locking plate, combination TBW + circumferential cerclage, or partial patellectomy for non-reconstructible poles.",
                  "th": "สะบ้าแตกละเอียดป่นพลังงานสูง ผิวข้อเสียรูปทรงและกลไกเหยียดเข่าฉีกขาด แนะนำผ่าตัดจัดเรียงชิ้นกระดูกดามด้วยแผ่นเหล็กตาข่าย Patellar Mesh Plate, หรือ Modified TBW ร่วมกับลวดพันรอบวง Cerclage หรือผ่าตัดตัดชิ้นส่วนป่นออก (Partial Patellectomy)"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly CONTRAINDICATED in functional patients",
                    "th": "• ห้ามใช้วิธีนี้ในผู้ป่วยทั่วไป"
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
                    "en": "• Severe debilitating patellofemoral arthritis and complete loss of knee extension",
                    "th": "• ข้อสะบ้าเสื่อมรุนแรง ข้อยึดติด และสูญเสียการเหยียดเข่าถาวร"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All displaced comminuted / starburst patellar fractures with disrupted articular surface or extensor mechanism",
                    "th": "• กระดูกสะบ้าแตกละเอียดเคลื่อนตัวทุกรายที่มีผิวข้อเสียรูปทรงหรือกลไกเหยียดเข่าฉีกขาด"
                  },
                  "method": {
                    "en": "• Anatomical Reconstruction: Low-profile Pre-contoured Patellar Mesh Locking Plate OR Modified TBW with Anterior Circumferential Purse-string (Cerclage) 18-gauge wire\n• Severely Comminuted / Unreconstructible Poles: Partial Patellectomy (preserving the largest articular fragment) + Tendon reattachment with transosseous tunnels\n• Total Patellectomy reserved strictly as a last resort for complete irreparable destruction of entire bone",
                    "th": "• ผ่าตัดจัดเรียงกระดูก: ดามแผ่นเหล็กล็อคตาข่าย (Patellar Mesh Plate) หรือใช้ Modified TBW ร่วมกับลวดพันรอบวง (Circumferential Cerclage Wire)\n• กรณีขั้วแตกป่นไม่สามารถต่อได้: ทำ Partial Patellectomy (เก็บชิ้นส่วนหลักที่ผิวข้อใหญ่ที่สุดไว้) + เย็บร้อยเอ็นผ่านรูเจาะกระดูก\n• การตัดสะบ้าออกทั้งหมด (Total Patellectomy) สงวนไว้เป็นทางเลือกสุดท้ายเมื่อแตกป่นยับเยินจนไม่สามารถเก็บชิ้นส่วนใดได้"
                  },
                  "rehabilitation": {
                    "en": "• Hinged knee brace locked in extension for 2 weeks; protected passive ROM 0°–60° from weeks 2–4; active ROM and progressive resistance at 6–8 weeks",
                    "th": "• ใส่ Hinged Knee Brace ล็อคตรง 2 สัปดาห์แรก; กายภาพงอเข่าช่วย 0°–60° ในสัปดาห์ที่ 2–4; เริ่มขยับเองและฝึกเพิ่มกำลังกล้ามเนื้อที่ 6–8 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Total patellectomy reduces knee extensor moment arm by 30%–50% (preserve as much patellar bone stock as possible)",
                    "th": "• การตัดสะบ้าออกทั้งหมดจะลดแรงเหยียดเข่าลง 30%–50% (ต้องพยายามเก็บรักษาเนื้อกระดูกสะบ้าไว้ให้ได้มากที่สุด)"
                  }
                }
              },
              "illustrationId": "/images/patella/stellate_comminuted.png",
              "xrayDescription": {
                "en": "Starburst comminution with multiple fracture lines crossing the patellar body on AP and lateral views.",
                "th": "เห็นรอยหักแตกละเอียดกระจายหลายชิ้นเป็นรูปดาวพาดผ่านตัวลูกสะบ้าทั้งในท่า AP และด้านข้าง"
              }
            },
            {
              "type": "Osteochondral",
              "name": {
                "en": "Osteochondral",
                "th": "7. Osteochondral (หักกะเทาะผิวข้อ / ขอบสะบ้า)"
              },
              "description": {
                "en": "Fracture involving the articular cartilage facet or marginal border of the patella\nOften occurs during transient patellar dislocation / subluxation\nFragment may float as a loose body in the joint space\nRequires removal or refixation if large articular fragment",
                "th": "รอยหักกะเทาะบริเวณกระดูกอ่อนผิวข้อหรือขอบรอบข้างของลูกสะบ้า\nมักเกิดร่วมกับภาวะลูกสะบ้าเคลื่อนหลุดชั่วคราว (Transient Patellar Dislocation)\nชิ้นกระดูกอ่อนอาจหลุดลอยเป็น Loose body ในช่องข้อเข่า\nต้องการการผ่าตัดเอาชิ้นส่วนหลุดออกหรือยึดตรึงหากเป็นชิ้นผิวข้อขนาดใหญ่"
              },
              "moi": {
                "en": "Acute patellar dislocation with shearing force against the lateral femoral condyle.",
                "th": "แรงเฉือนขณะลูกสะบ้าเคลื่อนหลุดกระแทกกับขอบ Femoral Condyle"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Osteochondral shear fracture associated with patellar dislocation; small fragments removed arthroscopically; large articular fragments (>1 cm) anatomically refixed using headless compression screws or bioabsorbable pins + MPFL repair.",
                  "th": "กระดูกอ่อนผิวข้อสะบ้าแตกกะเทาะจากแรงเฉือนขณะลูกสะบ้าหลุด หากชิ้นเล็กส่องกล้องคีบออก หากชิ้นผิวข้อใหญ่ (>1 ซม.) แนะนำผ่าตัดยึดตรึงด้วยสกรูหัวจมหรือหมุดละลาย Bioabsorbable Pins ร่วมกับเย็บซ่อมเอ็น MPFL"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Very small (<5 mm) extra-articular or non-weight-bearing marginal flake fractures without intra-articular loose bodies",
                    "th": "• ชิ้นกระดูกกะเทาะขนาดเล็กมาก (<5 มม.) อยู่นอกเขตผิวข้อ และไม่มีชิ้นกระดูกหลุดลอยในข้อเข่า"
                  },
                  "method": {
                    "en": "• Hinged knee brace with patellar stabilizing pad for 3 weeks",
                    "th": "• ใส่ Hinged Knee Brace พร้อมแผ่นพยุงสะบ้า 3 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Progressive active-assisted motion at 2–3 weeks",
                    "th": "• เริ่มฝึกขยับข้อเข่าที่ 2–3 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Missing trapped intra-articular chondral loose bodies causing mechanical locking and cartilage destruction",
                    "th": "• มองข้ามชิ้นกระดูกอ่อนที่หลุดลอยขัดในช่องข้อเข่า ทำให้ข้อล็อคและขูดทำลายผิวข้อ"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Intra-articular osteochondral loose body causing joint locking or clicking\n• Large articular cartilage fragment (> 10 mm) from patellar facet or lateral femoral condyle\n• Associated acute Medial Patellofemoral Ligament (MPFL) tear with lateral patellar instability",
                    "th": "• มีชิ้นกระดูกอ่อนหลุดลอยในช่องข้อ (Loose Body) ทำให้เข่าล็อคหรือมีเสียงดัง\n• ชิ้นกระดูกอ่อนผิวข้อมีขนาดใหญ่ (> 10 มม.)\n• มีเอ็น MPFL ด้านในฉีกขาดและลูกสะบ้าหลุดหลวมไม่มั่นคง"
                  },
                  "method": {
                    "en": "• Arthroscopic or mini-open approach: Removal of small un-fixable loose fragments OR Anatomical Refixation of large osteochondral fragments using 1.5 mm / 2.0 mm Headless Bioabsorbable Pins or Headless Compression Screws counter-sunk below cartilage + MPFL repair / reconstruction",
                    "th": "• ผ่าตัดส่องกล้องหรือเปิดแผลเล็ก: คีบเอาชิ้นกระดูกอ่อนขนาดเล็กที่ไม่สามารถยึดได้ออก (Loose Body Removal) หรือ จัดยึดชิ้นผิวข้อขนาดใหญ่ด้วยหมุดละลาย 1.5/2.0 mm Bioabsorbable Pins หรือสกรูหัวจม Headless Screws ฝังมิดใต้ผิวกระดูกอ่อน + เย็บซ่อมหรือสร้างเอ็น MPFL ใหม่"
                  },
                  "rehabilitation": {
                    "en": "• Protected partial weight-bearing with knee brace locked in extension for 4 weeks; continuous passive motion (CPM) 0°–90°; active quadriceps strengthening at 6 weeks",
                    "th": "• จำกัดลงน้ำหนักบางส่วน ใส่ Knee Brace ล็อคตรง 4 สัปดาห์; ทำกายภาพงอเข่าช่วย 0°–90°; เริ่มฝึกเพิ่มกำลังกล้ามเนื้อหน้าขาที่ 6 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Leaving screws proud above the articular cartilage facet causing rapid opposing femoral trochlea gouging",
                    "th": "• หัวสกรูโผล่พ้นผิวข้อขึ้นมาขูดทำลายร่องกระดูกต้นขา (Femoral Trochlea) พังเสียหาย"
                  }
                }
              },
              "illustrationId": "/images/patella/osteochondral.png",
              "xrayDescription": {
                "en": "Small bony or osteochondral flake fragment adjacent to medial/lateral facet or free-floating in joint on Skyline view.",
                "th": "เห็นชิ้นกระดูกเล็กๆ หรือชิ้นกระดูกอ่อนกะเทาะอยู่ข้างผิวข้อสะบ้าหรือลอยในช่องข้อในท่า Skyline view"
              }
            }
          ]
        }
      ]
    }
  ]
};
