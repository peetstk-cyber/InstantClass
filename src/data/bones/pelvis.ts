import type { BoneData } from "../../types";

export const pelvisBone: BoneData = {
  "id": "pelvis",
  "name": {
    "en": "Pelvic Bone",
    "th": "กระดูกเชิงกรานและเบ้าสะโพก"
  },
  "description": {
    "en": "Pelvic structure including pelvic ring and acetabular joint",
    "th": "กระดูกเชิงกรานและเบ้าสะโพก รวมถึงวงกระดูกเชิงกรานและเบ้าข้อสะโพก"
  },
  "pediatric": false,
  "regions": [
    {
      "id": "pelvic-ring",
      "name": {
        "en": "Pelvic Ring",
        "th": "วงกระดูกเชิงกราน (Pelvic Ring)"
      },
      "regionConcept": {
        "physicalExam": [
          {
            "sign": "Pelvic Stability & Compression Test",
            "positive": {
              "en": "Pain or abnormal movement when applying gentle posterior-to-anterior or lateral pressure on iliac crests; test ONCE only to prevent clot dislodgement.",
              "th": "ปวดหรือมีการขยับผิดปกติเมื่อลงแรงกดเบาๆ บนปีกกระดูกเชิงกราน *ทดสอบเพียงครั้งเดียว* เพื่อป้องกันลิ่มเลือดหลุด"
            }
          },
          {
            "sign": "Morel-Lavallée Degloving Lesion Inspection",
            "positive": {
              "en": "Fluctuant fluid collection and skin hypermobility over the greater trochanter/flank from traumatic separation of hypodermis from fascia.",
              "th": "พบแอ่งน้ำเหลือง/เลือดค้างและชั้นผิวหนังเลื่อนหลุดลอยบริเวณปุ่มสะโพก/เอว (Morel-Lavallée lesion) จากการถลกแยกชั้นผิวหนัง"
            }
          },
          {
            "sign": "Perineal, Rectal & Vaginal Exam",
            "positive": {
              "en": "Blood at urethral meatus, high-riding prostate, perineal hematoma, or palpable bone fragment in rectal/vaginal vault indicating open pelvic fracture.",
              "th": "พบเลือดออกที่ปลายท่อปัสสาวะ, ต่อมลูกหมากยกลอยสูง, รอยเขียวช้ำที่ฝีเย็บ หรือคลำพบชิ้นกระดูกในช่องทวารหนัก/ช่องคลอด แสดงถึงกระดูกเชิงกรานหักแบบเปิด"
            }
          },
          {
            "sign": "Leg Length Discrepancy & External Rotation Deformity",
            "positive": {
              "en": "Shortened and externally rotated hemipelvis seen in Vertical Shear (VS) or Open-Book (APC) injuries.",
              "th": "ขาและเชิงกรานข้างนั้นสั้นลงและบิดหมุนออกด้านนอก พบใน Vertical Shear (VS) หรือ Open-Book (APC)"
            }
          }
        ],
        "acceptableAlignment": [
          {
            "parameter": {
              "en": "Pubic Symphysis Diastasis",
              "th": "ระยะถ่างของข้อต่อ Pubic Symphysis"
            },
            "threshold": "< 2 cm",
            "note": {
              "en": "Diastasis >2cm indicates torn anterior SI and sacrospinous ligaments (APC-II Open Book).",
              "th": "ระยะถ่าง >2 ซม. แสดงว่าเอ็นด้านหน้า SI และ Sacrospinous ขาด (APC-II Open Book)"
            }
          },
          {
            "parameter": {
              "en": "Sacroiliac (SI) Joint Displacement",
              "th": "การเคลื่อนตัวของข้อต่อ Sacroiliac (SI)"
            },
            "threshold": "< 5 mm",
            "note": {
              "en": "Posterior SI joint displacement >5mm indicates structural instability.",
              "th": "ข้อต่อ SI ด้านหลังเคลื่อน >5 มม. แสดงถึงความไม่มั่นคงเชิงโครงสร้าง"
            }
          },
          {
            "parameter": {
              "en": "Vertical Hemipelvis Displacement",
              "th": "การยกลอยในแนวตั้งของเชิงกราน (Vertical Shear)"
            },
            "threshold": "0 mm (Zero Tolerance)",
            "note": {
              "en": "Any vertical shift indicates Vertical Shear (VS) instability requiring operative reduction.",
              "th": "การเลื่อนขึ้นลงในแนวตั้งถือเป็น Vertical Shear (VS) ซึ่งไม่มั่นคงอย่างรุนแรงและต้องผ่าตัด"
            }
          }
        ],
        "redFlags": [
          {
            "en": "Massive retroperitoneal hemorrhage from presacral venous plexus and internal iliac branches, leading to rapidly fatal hypovolemic shock.",
            "th": "ภาวะตกเลือดมหาศาลในช่องหลังช่องท้อง (Massive retroperitoneal hemorrhage) จากหลอดเลือดดำ presacral และแขนงหลอดเลือด Internal iliac นำไปสู่ภาวะช็อกจากการเสียเลือดอันตรายถึงชีวิต"
          },
          {
            "en": "Associated lower urinary tract injury (posterior urethral disruption or bladder rupture).",
            "th": "การบาดเจ็บของระบบทางเดินปัสสาวะส่วนล่าง (ท่อปัสสาวะขาด หรือกระเพาะปัสสาวะแตก)"
          },
          {
            "en": "Open pelvic fracture with high risk of overwhelming pelvic sepsis.",
            "th": "กระดูกเชิงกรานหักแบบเปิด เสี่ยงต่อการติดเชื้อในเชิงกรานรุนแรงถึงชีวิต (Pelvic sepsis)"
          }
        ],
        "associatedInjuries": [
          {
            "injury": {
              "en": "Internal Iliac Vessel Tear / Retroperitoneal Bleeding",
              "th": "หลอดเลือด Internal iliac ฉีกขาด / เลือดออกช่องหลังช่องท้อง"
            }
          },
          {
            "injury": {
              "en": "Posterior Urethral Disruption & Bladder Rupture",
              "th": "ท่อปัสสาวะส่วนหลังฉีกขาด และกระเพาะปัสสาวะแตก"
            }
          },
          {
            "injury": {
              "en": "Lumbosacral Plexus (L5/S1 Nerve Root) Injury",
              "th": "เส้นประสาท Lumbosacral plexus (L5/S1) บาดเจ็บ"
            }
          }
        ],
        "clinicalPearls": [
          {
            "en": "Open book pelvis (APC II / APC III) requires immediate pelvic binder or sheet wrapping centered over the Greater Trochanters to close pelvic volume and tamponade bleeding.",
            "th": "ภาวะ Open book pelvis (APC II/III) ต้องใส่ผ้าพันเชิงกราน (Pelvic binder/sheet) รัดแน่นตรงระดับ Greater trochanter ทันที เพื่อลดปริมาตรเชิงกรานและห้ามเลือด"
          },
          {
            "en": "Do NOT perform repeated manual pelvic compression tests during trauma resuscitation to prevent dislodging soft retroperitoneal blood clots.",
            "th": "ห้ามโยกหรือทดสอบกดเชิงกรานซ้ำๆ ระหว่างการกู้ชีพผู้ป่วยอุบัติเหตุ เพื่อป้องกันลิ่มเลือดห้ามเลือดหลุดออก"
          },
          {
            "en": "Young-Burgess classification vector (APC vs LC vs VS) predicts associated injury patterns and resuscitation needs.",
            "th": "การจำแนก Young-Burgess บอกทิศทางแรง (APC, LC, VS) ซึ่งช่วยทำนายรูปแบบการบาดเจ็บร่วมและการกู้ชีพเสียเลือด"
          }
        ]
      },
      "classifications": [
        {
          "system": "Young-Burgess",
          "fullName": {
            "en": "Young-Burgess Classification",
            "th": "การจำแนกกระดูกเชิงกรานหักเคลื่อนแบบ Young-Burgess"
          },
          "description": {
            "en": "Classification of pelvic ring injuries based on force vector mechanism (APC, LC, VS, CM), predicting ligamentous instability, pelvic volume expansion, and internal hemorrhage risk.",
            "th": "ระบบจำแนกการหักเคลื่อนของวงกระดูกเชิงกรานตามกลไกทิศทางของแรงกระแทก (APC, LC, VS) ซึ่งบอกถึงความมั่นคง การขยายตัวของช่องเชิงกราน และความเสี่ยงเสียเลือดรุนแรง"
          },
          "concept": {
            "title": {
              "en": "Young-Burgess & Tile Pelvic Ring Concept",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ Young-Burgess & Tile Pelvic Ring Classification"
            },
            "corePrinciple": {
              "en": "Force vector (APC vs LC vs VS) dictates pelvic ring disruption pattern, pelvic volume expansion, and life-threatening retroperitoneal venous hemorrhage risk. Tile classification correlates stability: Tile A (stable), Tile B (rotationally unstable), Tile C (vertically unstable).",
              "th": "ทิศทางของแรง (APC, LC, VS) เป็นตัวกำหนดรูปแบบการพังทลายของวงเชิงกราน ปริมาตรการขยายตัว และความเสี่ยงต่อการเสียเลือดรุนแรง การจำแนกแบบ Tile สัมพันธ์กับความมั่นคง: Tile A (มั่นคง), Tile B (ไม่มั่นคงการหมุน), Tile C (ไม่มั่นคงแนวตั้ง)"
            },
            "rules": [
              {
                "en": "LC1 (Lateral Compression Stage 1): Sacral crush fracture; stable ring (Tile A/B1).",
                "th": "LC1 (แรงอัดด้านข้าง Stage 1): กระดูก Sacrum ทรุด; วงแหวนมั่นคง (Tile A/B1)"
              },
              {
                "en": "LC2 / LC3: Crescent iliac wing fracture (LC2) or Windswept pelvis (LC3 - contralateral APC); rotationally unstable (Tile B2/B3).",
                "th": "LC2 / LC3: แผ่น Iliac หักรูป Crescent (LC2) หรือ Windswept pelvis (LC3); ไม่มั่นคงแนวการหมุน (Tile B2/B3)"
              },
              {
                "en": "APC1 (Anteroposterior Compression Stage 1): Pubic symphysis diastasis <2.5 cm; intact SI ligaments; stable (Tile A).",
                "th": "APC1 (แรงอัดหน้าหลัง Stage 1): Pubic symphysis แยก <2.5 ซม.; เอ็น SI สมบูรณ์; มั่นคง (Tile A)"
              },
              {
                "en": "APC2 / APC3: Open-book pelvis with pubic diastasis ≥2.5 cm and posterior SI ligament disruption (APC2 partial, APC3 complete); rotationally ± vertically unstable (Tile B1 / C1).",
                "th": "APC2 / APC3: Open-book pelvis โดย Pubic diastasis ≥2.5 ซม. ร่วมกับเอ็น SI ด้านหลังฉีกขาด; ไม่มั่นคงการหมุน ± แนวตั้ง (Tile B1 / C1)"
              },
              {
                "en": "VS (Vertical Shear): Complete disruption of anterior and posterior pelvic ring with vertical displacement of hemipelvis; vertically and rotationally unstable (Tile C).",
                "th": "VS (แรงเฉือนแนวตั้ง): วงแหวนเชิงกรานและเอ็นยึดขาดทั้งหมด ร่วมกับเชิงกรานเลื่อนขึ้นแนวตั้ง; ไม่มั่นคงรุนแรงทั้งแนวตั้งและการหมุน (Tile C)"
              }
            ],
            "clinicalSignificance": [
              {
                "en": "LC1 & APC1: Conservative non-operative management with progressive weight-bearing as tolerated.",
                "th": "LC1 & APC1: รักษาแบบไม่ผ่าตัด ค่อยๆ ฝึกรับน้ำหนักตามที่ทนได้"
              },
              {
                "en": "APC2, APC3 & VS: EMERGENCY resuscitation! Pelvic retroperitoneal volume expands dramatically causing severe venous plexus hemorrhage. Apply Pelvic Binder IMMEDIATELY centered over GREATER TROCHANTERS (not iliac crests!).",
                "th": "APC2, APC3 & VS: การกู้ชีพฉุกเฉินด่วนที่สุด! ช่องเรโตรเพอริโตเนียมขยายตัวทำให้เลือดออกในหลอดเลือดดำช็อกเสียชีวิต; ต้องรัด Pelvic Binder ทันทีโดยให้จุดศูนย์กลางผ้าอยู่ที่ **Greater Trochanters** (ห้ามรัดตรงสันสะโพก!)"
              },
              {
                "en": "Surgical Fixation: Operative ORIF indicated for unstable patterns (Anterior pubic ramus/symphysis plating + Posterior percutaneous iliosacral screws).",
                "th": "ข้อบ่งชี้ผ่าตัด: ผ่าตัด ORIF สำหรับเคสไม่มั่นคง (ดามแผ่นเหล็ก Pubic ด้านหน้า + ขันสกรูข้อ SI ด้านหลัง)"
              },
              {
                "en": "CRITICAL PITFALL: Never use pelvic sheet/binder over iliac crests—it fails to compress the pelvis and may worsen displacement; center binder low over greater trochanters.",
                "th": "ข้อควรระวังสำคัญ: ห้ามพันผ้ารัดตรงสันสะโพก (Iliac crests) เด็ดขาดเพราะจะไม่ช่วยบีบกระดูกและอาจทำให้กระดูกหักเคลื่อนมากขึ้น; ต้องพันต่ำตรงระดับ Greater trochanters"
              }
            ]
          },
          "investigations": [
            {
              "name": "CT Pelvis (Non-Contrast, Thin-Slice 1mm)",
              "details": {
                "en": "GOLD STANDARD for pelvic ring fracture assessment. Non-contrast thin-slice CT (1mm axial with coronal/sagittal reconstructions) is MANDATORY in all hemodynamically stable pelvic trauma patients. Essential for: (1) Accurately classifying Young-Burgess injury pattern (plain films miss up to 50% of posterior SI disruptions/sacral fractures), (2) Detecting posterior ring instability (SI joint diastasis, sacral fractures), (3) Guiding definitive surgical fixation planning. CT angiography (CTA) is added if arterial extravasation is suspected.",
                "th": "มาตรฐานหลักในการประเมินกระดูกเชิงกรานหัก CT ไม่ฉีดสีตัดบาง 1 มม. พร้อม Reconstruction ทุกทิศทาง จำเป็นในทุกผู้ป่วย Pelvic trauma ที่ระบบไหลเวียนเลือดเสถียร สำคัญสำหรับ: (1) จำแนก Young-Burgess pattern ที่แม่นยำ (X-ray ธรรมดาพลาด SI disruption และ Sacral fracture ได้สูงถึง 50%), (2) ตรวจพบความไม่มั่นคงด้านหลัง, (3) วางแผนผ่าตัด ถ้าสงสัย Active bleeding เพิ่ม CTA"
              }
            },
            {
              "name": "AP Pelvis View",
              "details": {
                "en": "Standard AP view of the pelvis. Evaluates overall pelvic ring symmetry, pubic diastasis, sacral fracture lines, and sacroiliac (SI) joint widening.",
                "th": "ภาพเอกซเรย์เชิงกรานท่า AP มาตรฐาน ใช้ประเมินความสมมาตรของวงเชิงกราน ระยะแยกของ Pubic diastasis และความกว้างข้อต่อ SI"
              },
              "imageUrl": "/images/investigations/hip/ap_pelvis_view.jpg"
            },
            {
              "name": "Pelvic Inlet View (45° Caudal Tilt)",
              "details": {
                "en": "AP view with 45° caudal tilt looking down into the pelvic brim. Evaluates anterior-posterior displacement, sacral canal impaction, and inward/outward rotation of hemipelvis.",
                "th": "ภาพเอกซเรย์เอียงหลอดรังสีชี้ลงเท้า 45 องศา มองจากบนลงล่าง ใช้ประเมินการเคลื่อนไปด้านหน้า-หลัง การบิดหมุนของเชิงกราน และรอยตอกอัดของ Sacrum"
              }
            },
            {
              "name": "Pelvic Outlet View (45° Cephalic Tilt)",
              "details": {
                "en": "AP view with 45° cephalic tilt perpendicular to the sacrum. Evaluates vertical displacement (vertical shear), sacral foraminal fracture lines, and pubic rami vertical step-off.",
                "th": "ภาพเอกซเรย์เอียงหลอดรังสีชี้ขึ้นศีรษะ 45 องศา ตั้งฉากกับกระดูก Sacrum ใช้ประเมินการเคลื่อนสูงต่ำในแนวตั้ง (Vertical shear) และรูเส้นประสาท Sacrum"
              }
            }
          ],
          "types": [
            {
              "type": "APC-I",
              "name": {
                "en": "APC-I (Anterior-Posterior Compression I)",
                "th": "APC-I (แรงอัดหน้าหลัง - มั่นคง)"
              },
              "description": {
                "en": "Slight widening of pubic symphysis (< 2 cm)\nIntact anterior SI, sacrospinous, and sacrotuberous ligaments\nPelvic ring is STABLE\nMinimal blood loss risk",
                "th": "ข้อต่อ Pubic symphysis ถ่างแยกออกเล็กน้อย (< 2 ซม.)\nเส้นเอ็นด้านหน้า SI, Sacrospinous และ Sacrotuberous ยังคงสมบูรณ์ดี\nวงกระดูกเชิงกรานมีความมั่นคงสูง\nความเสี่ยงต่อการเสียเลือดต่ำมาก"
              },
              "moi": {
                "en": "Direct anterior blow to pelvis or head-on motorcycle impact.",
                "th": "แรงกระแทกจากด้านหน้าตรงเข้าเชิงกราน หรืออุบัติเหตุรถจักรยานยนต์ชนหน้าตรง"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Intact posterior SI ligaments ensure mechanical stability; non-operative care with early protected weight-bearing is the standard of care.",
                  "th": "เส้นเอ็นด้านหลังยังสมบูรณ์ทำให้วงเชิงกรานมั่นคง การรักษาหลักคือไม่ผ่าตัดและเริ่มฝึกเดินลงน้ำหนักตามอาการ"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Pubic symphysis diastasis < 2 cm\n• Intact posterior sacroiliac ligaments\n• Mechanically stable pelvic ring on stress examination\n• Low risk of internal hemorrhage",
                    "th": "• รอยแยก Pubic symphysis < 2 ซม.\n• เส้นเอ็น Posterior SI และ Sacrotuberous ยังสมบูรณ์ดี\n• วงเชิงกรานมีความมั่นคงสูง\n• ไม่มีความเสี่ยงต่อภาวะตกเลือดในเชิงกราน"
                  },
                  "method": {
                    "en": "• Bed rest for acute pain control (1–3 days)\n• Progressive weight bearing as tolerated (WBAT) with walker or crutches\n• Multimodal analgesia and VTE prophylaxis",
                    "th": "• นอนพักบรรเทาอาการปวดระยะเฉียบพลัน (1–3 วันแรก)\n• เริ่มฝึกเดินลงน้ำหนักเท่าที่ทนได้ (WBAT) ด้วย Walker หรือไม้ค้ำยัน\n• ให้ยาระงับปวดและยาป้องกันลิ่มเลือดอุดตันหลอดเลือดดำ (VTE prophylaxis)"
                  },
                  "rehabilitation": {
                    "en": "• Mobilize out of bed as early as pain allows\n• Use assistive devices for 4–6 weeks\n• Serial AP pelvic radiographs at 1, 2, and 6 weeks to confirm no secondary displacement",
                    "th": "• เริ่มขยับลุกออกจากเตียงทันทีที่อาการปวดทุเลา\n• ใช้อุปกรณ์ช่วยเดินพยุงเป็นเวลา 4–6 สัปดาห์\n• ติดตามภาพถ่าย X-ray เชิงกรานที่ 1, 2 และ 6 สัปดาห์เพื่อยืนยันว่าไม่มีการถ่างแยกเพิ่มขึ้น"
                  },
                  "pitfalls": {
                    "en": "• Watch for occult posterior ring injury (obtain inlet/outlet views or CT)\n• In elderly patients, verify true isolation of injury before discharge",
                    "th": "• ระวังการบาดเจ็บของวงกระดูกด้านหลังที่ซ่อนอยู่ (ควรตรวจ CT หรือ Inlet/Outlet view)\n• ในผู้สูงอายุต้องตรวจคัดกรองภาวะกระดูกพรุนและยืนยันว่าไม่มีรอยหักอื่นร่วม"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Failed non-operative trial due to intractable pain preventing mobilization\n• Occult vertical or rotational instability unmasked on dynamic stress views",
                    "th": "• ผู้ป่วยปวดรุนแรงจนไม่สามารถขยับลุกเดินได้แม้ให้ยาแก้ปวดเต็มที่\n• ตรวจพบความไม่มั่นคงซ่อนเร้นจากการกดตรวจประเมิน (Dynamic stress exam)"
                  },
                  "method": {
                    "en": "• Anterior symphyseal plating via Pfannenstiel approach (2 to 4-hole 3.5mm low-profile plate)\n• Or percutaneous retrograde superior pubic ramus screws",
                    "th": "• ผ่าตัดยึดแผ่นเหล็กดาม Pubic symphysis (2-4 รู) ผ่านทางลงแผล Pfannenstiel\n• หรือใส่สกรูยึดกระดูกกิ่ง Pubic ramus ผ่านผิวหนัง (Percutaneous retrograde screw)"
                  },
                  "rehabilitation": {
                    "en": "• Touch-down weight bearing (TDWB) for 6 weeks, then advance to full weight-bearing",
                    "th": "• แตะเท้าลงน้ำหนักบางส่วน (Touch-down WB) 6 สัปดาห์ แล้วจึงเริ่มลงน้ำหนักเต็มที่"
                  },
                  "pitfalls": {
                    "en": "• Avoid extensive subperiosteal stripping over the bladder dome during anterior approach",
                    "th": "• ระวังการบาดเจ็บต่อกระเพาะปัสสาวะด้านหลัง Pubic symphysis ขณะเปิดแผล"
                  }
                }
              },
              "illustrationId": "/images/pelvis/apc_1.png",
              "xrayDescription": {
                "en": "Pubic symphysis diastasis <2cm without SI joint widening or vertical displacement.",
                "th": "พบระยะแยก Pubic symphysis < 2 ซม. โดยช่องข้อ SI ปกติและไม่มีการเคลื่อนลอยในแนวตั้ง"
              }
            },
            {
              "type": "APC-II",
              "name": {
                "en": "APC-II (Open Book Pelvis)",
                "th": "APC-II (เชิงกรานเปิดอ้าแบบ Open Book - ไม่มั่นคงด้านหมุน)"
              },
              "description": {
                "en": "Pubic symphysis diastasis > 2 cm ('Open Book' pelvis)\nTorn anterior SI, sacrospinous, and sacrotuberous ligaments\nIntact POSTERIOR SI ligaments (acts as a posterior hinge)\nRotationally UNSTABLE, Vertically STABLE\nSignificant pelvic volume expansion and internal hemorrhage risk",
                "th": "ข้อต่อ Pubic symphysis ถ่างอ้ากว้าง > 2 ซม. (ลักษณะเหมือนหนังสือเปิด 'Open Book')\nเส้นเอ็นด้านหน้า SI, Sacrospinous และ Sacrotuberous ฉีกขาดทั้งหมด\nเส้นเอ็นด้านหลัง (Posterior SI) ยังสมบูรณ์ดี ทำหน้าที่เป็นบานพับด้านหลัง\nไม่มั่นคงในแนวหมุน (Rotationally unstable) แต่มั่นคงในแนวตั้ง\nช่องเชิงกรานขยายตัวกว้างขึ้นมาก เสี่ยงต่อภาวะเลือดออกในช่องท้องและเชิงกรานรุนแรง"
              },
              "moi": {
                "en": "High-energy crush injury or head-on vehicle collision.",
                "th": "แรงกระแทกทับบดพลังงานสูง หรืออุบัติเหตุรถยนต์ชนประสานงารุนแรง"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Pelvic volume expansion creates major venous hemorrhage risk; urgent binder closure in ER followed by rigid anterior symphyseal plating restores rotational stability.",
                  "th": "ช่องเชิงกรานที่ถ่างออกทำให้เสียเลือดในช่องเชิงกรานสูง ต้องรัดผ้ารัดเชิงกราน (Binder) ทันทีใน ER และผ่าตัดดามแผ่นเหล็กด้านหน้าเพื่อปิดช่องว่าง"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Severely medically compromised or moribund patients completely unfit for surgery",
                    "th": "• ผู้ป่วยที่มีภาวะโรคร่วมรุนแรงขั้นวิกฤต หรือไม่สามารถทนต่อการผ่าตัดดมยาสลบได้"
                  },
                  "method": {
                    "en": "• Non-operative management with prolonged bed rest in pelvic sling (high morbidity)",
                    "th": "• นอนพักบนเตียงและใช้เปลผ้าพยุงเชิงกราน (Pelvic sling) เป็นเวลานาน (มีภาวะแทรกซ้อนสูง)"
                  },
                  "rehabilitation": {
                    "en": "• Non-weight bearing for 8–12 weeks; high rate of chronic pelvic pain and pelvic asymmetry",
                    "th": "• ห้ามลงน้ำหนัก 8–12 สัปดาห์ เสี่ยงสูงต่อกระดูกไม่ติด เชิงกรานเบี้ยว และปวดเรื้อรัง"
                  },
                  "pitfalls": {
                    "en": "• Severe risk of deep vein thrombosis (DVT), pulmonary embolism (PE), and pressure decubitus ulcers",
                    "th": "• เสี่ยงต่อภาวะลิ่มเลือดอุดตันหลอดเลือดปอด (PE) แผลกดทับ และกระดูกติดผิดรูป"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Pubic symphysis diastasis > 2 cm ('Open-Book' deformity)\n• Torn anterior SI, sacrospinous, and sacrotuberous ligaments\n• Rotationally unstable pelvis with expanded pelvic volume\n• Active hemorrhage risk in emergency trauma resuscitation",
                    "th": "• Pubic symphysis ถ่างแยก > 2 ซม. (Open Book)\n• เส้นเอ็น Anterior SI และ Sacrospinous/Sacrotuberous ฉีกขาด\n• เชิงกรานไม่มั่นคงในแนวหมุนและช่องเชิงกรานขยายตัว\n• ความเสี่ยงสูงต่อภาวะตกเลือดในช่องเชิงกราน"
                  },
                  "method": {
                    "en": "• EMERGENCY ER: Immediate Pelvic Binder applied strictly at Greater Trochanter level\n• Definitive ORIF: Multi-hole (4 to 6-hole) 3.5mm reconstruction/symphyseal plate via Pfannenstiel approach\n• Optional anterior external fixator or INFIX for damage control in unstable polytrauma",
                    "th": "• ระยะฉุกเฉิน: ใส่ Pelvic Binder รัดแน่นตรงระดับ Greater Trochanter ทันที\n• การผ่าตัดหลัก: ผ่าตัด ORIF ดามแผ่นเหล็ก 3.5mm Multi-hole plate ผ่านทางลงแผล Pfannenstiel\n• ใส่เหล็กดามกระดูกภายนอก (Ex-Fix) หรือ INFIX ในกรณี Damage control ผู้ป่วยวิกฤต"
                  },
                  "rehabilitation": {
                    "en": "• Touch-down weight bearing (TDWB) x 6–8 weeks\n• Advance to partial weight bearing at 8 weeks, full WB at 10–12 weeks after radiographic union",
                    "th": "• แตะเท้าลงน้ำหนักบางส่วน (Touch-down WB) 6–8 สัปดาห์\n• เริ่มลงน้ำหนักเพิ่มขึ้นที่ 8 สัปดาห์ และลงน้ำหนักเต็มที่เมื่อกระดูกติดสนิทที่ 10–12 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Do NOT place pelvic binder over iliac crests (must center over Greater Trochanters to close book)\n• Screen for associated bladder rupture or urethral tear (~15% incidence)",
                    "th": "• ห้ามรัดแผ่น Binder ตรงระดับปีกสะโพก (Iliac crest) ต้องรัดตรงระดับ Greater Trochanter เท่านั้น\n• ระวังการฉีกขาดของท่อปัสสาวะหรือกระเพาะปัสสาวะแตก (พบร่วมได้ถึง 15%)"
                  }
                }
              },
              "illustrationId": "/images/pelvis/apc_2.png",
              "xrayDescription": {
                "en": "Wide pubic diastasis >2cm with anterior SI joint opening, posterior SI joint space intact.",
                "th": "ระยะ Pubic diastasis ถ่างกว้าง > 2 ซม. ร่วมกับช่องข้อด้านหน้า SI เปิดออก แต่ด้านหลังยังชิดกัน"
              }
            },
            {
              "type": "APC-III",
              "name": {
                "en": "APC-III (Complete SI Disruption)",
                "th": "APC-III (ข้อ SI หลุดฉีกขาดสมบูรณ์ - ไม่มั่นคงรุนแรงที่สุด)"
              },
              "description": {
                "en": "Complete disruption of pubic symphysis and ALL SI ligaments (anterior and posterior)\nComplete separation of hemipelvis (Floating hemipelvis)\nBoth Rotationally and Vertically UNSTABLE\nExtreme life-threatening internal hemorrhage risk (iliac vessel tear)",
                "th": "ข้อต่อ Pubic symphysis และเอ็น SI ฉีกขาดสมบูรณ์ทั้งด้านหน้าและด้านหลัง\nเชิงกรานข้างนั้นหลุดแยกเป็นอิสระอย่างสิ้นเชิง (Floating hemipelvis)\nไม่มั่นคงอย่างรุนแรงทั้งในแนวหมุนและแนวตั้ง (Rotationally & Vertically Unstable)\nอันตรายถึงชีวิตสูงสุดจากการฉีกขาดของเส้นเลือดใหญ่ในเชิงกราน (Internal Hemorrhage)"
              },
              "moi": {
                "en": "Extreme high-speed motor vehicle crash or fall from great height.",
                "th": "อุบัติเหตุความเร็วสูงรุนแรงสุดขีด หรือการตกจากที่สูงมาก"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Life-threatening hemorrhagic shock with floating hemipelvis; emergency binder/packing/angio followed by circumferential anterior AND posterior rigid stabilization.",
                  "th": "ภาวะตกเลือดรุนแรงถึงแก่ชีวิตจากเชิงกรานหลุดสมบูรณ์ ต้องห้ามเลือดฉุกเฉิน (Packing/Angio) และผ่าตัดยึดทั้งด้านหน้าและด้านหลัง"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly CONTRAINDICATED (Lethal without surgical stabilization)",
                    "th": "• ห้ามใช้วิธีนี้เด็ดขาด (มีอัตราเสียชีวิตสูงมากหากไม่ยึดตรึง)"
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
                    "en": "• Exsanguinating retroperitoneal hemorrhage and rapid circulatory collapse",
                    "th": "• ภาวะช็อกจากการเสียเลือดมหาศาลในช่องหลังช่องท้องจนเสียชีวิต"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Complete disruption of pubic symphysis AND posterior SI ligamentous complex\n• Floating hemipelvis with both rotational and vertical instability\n• Severe polytrauma with high risk of vascular tear (internal iliac branches)",
                    "th": "• รอยฉีกขาดสมบูรณ์ของทั้ง Pubic symphysis และเอ็นข้อ SI ทั้งด้านหน้าและด้านหลัง\n• เชิงกรานหลุดลอย (Floating hemipelvis) ขาดความมั่นคงทั้งแนวหมุนและแนวดิ่ง\n• เสี่ยงต่อเส้นเลือดใหญ่ในเชิงกรานฉีกขาด"
                  },
                  "method": {
                    "en": "• RESUSCITATION: Pelvic binder / Pelvic C-clamp + Pre-peritoneal pelvic packing or Angiographic embolization\n• Definitive Fixation: Dual-stage or combined ORIF:\n  - Anterior: Symphyseal multi-hole plate via Pfannenstiel\n  - Posterior: Percutaneous iliosacral 7.0/7.3mm cannulated screws into S1 and S2 bodies, or posterior tension band plate",
                    "th": "• การกู้ชีพฉุกเฉิน: รัด Pelvic binder / C-clamp ร่วมกับทำ Pre-peritoneal pelvic packing หรือฉีดสีอุดหลอดเลือด (Angio-embolization)\n• การผ่าตัดยึดตรึงสมบูรณ์:\n  - ด้านหน้า: ผ่าตัด ORIF ดามแผ่นเหล็ก Pubic symphysis\n  - ด้านหลัง: ใส่สกรูยึดข้อ SI (Iliosacral screw 7.0/7.3mm) เข้าสู่กระดูก Sacrum S1/S2 หรือดามแผ่นเหล็กด้านหลัง"
                  },
                  "rehabilitation": {
                    "en": "• Strict non-weight bearing (NWB) on affected extremity x 8–12 weeks\n• In-bed active-assisted ROM exercises for hip, knee, and ankle",
                    "th": "• ห้ามลงน้ำหนักบนขาข้างที่บาดเจ็บเด็ดขาด (Strict NWB) 8–12 สัปดาห์\n• ฝึกบริหารขยับข้อสะโพก ข้อเข่า และข้อเท้าบนเตียง"
                  },
                  "pitfalls": {
                    "en": "• Risk of L5 nerve root injury or S1 foraminal violation with misdirected iliosacral screws\n• High overall trauma mortality (up to 20–30%)",
                    "th": "• ระวังการใส่สกรู SI พลาดแทงโดนรากประสาท L5 หรือรูประสาท S1 (ควรใช้ Intra-op Fluoroscopy 3 ท่า)\n• อัตราการเสียชีวิตสูง (20-30%) จากการเสียเลือดและอวัยวะภายในล้มเหลว"
                  }
                }
              },
              "illustrationId": "/images/pelvis/apc_3.png",
              "xrayDescription": {
                "en": "Complete dislocation of SI joint with wide separation of pubic symphysis and posterior displacement.",
                "th": "ข้อต่อ SI เคลื่อนหลุดแยกออกจากกันอย่างสมบูรณ์ ร่วมกับ Pubic symphysis อ้ากว้าง"
              }
            },
            {
              "type": "LC-I",
              "name": {
                "en": "LC-I (Lateral Compression I)",
                "th": "LC-I (แรงบีบด้านข้าง - กระดูก Sacrum อัดแน่น)"
              },
              "description": {
                "en": "Sacral buckle/compression fracture on ipsilateral side of impact\nTransverse pubic rami fractures\nPelvic volume is REDUCED (no volume expansion)\nPelvic ring is STABLE\nLow hemorrhage risk",
                "th": "กระดูก Sacrum ด้านเดียวกันถูกแรงบีบอัดย่นแน่นเข้าหากัน (Buckle/Impacted sacral fracture)\nกระดูก Pubic rami หักแนวขวาง\nช่องเชิงกรานมีขนาดลดลง (ไม่เกิดการขยายตัว)\nวงกระดูกเชิงกรานมีความมั่นคงสูง\nความเสี่ยงต่อการเสียเลือดต่ำ"
              },
              "moi": {
                "en": "Side-impact motor vehicle collision (T-bone crash) or direct fall onto hip.",
                "th": "อุบัติเหตุชนเข้าด้านข้างตัวรถ (T-bone crash) หรือล้มกระแทกข้างสะโพก"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Impacted sacral compression with reduced pelvic volume maintains mechanical stability; non-operative care with early mobilization as tolerated is standard.",
                  "th": "แรงบีบอัดทำให้กระดูก Sacrum อัดแน่นและช่องเชิงกรานแคบลง วงเชิงกรานจึงมั่นคง รักษาแบบไม่ผ่าตัดและเริ่มฝึกเดินได้เร็ว"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Impacted sacral buckle/crush fracture\n• Transverse ipsilateral pubic ramus fractures\n• Stable pelvic ring with intact posterior ligamentous tension bands\n• Normal hemodynamic parameters",
                    "th": "• กระดูก Sacrum ถูกแรงอัดย่นแน่นเข้าหากัน (Impacted sacral fracture)\n• กระดูก Pubic ramus หักแนวขวางด้านเดียวกัน\n• วงเชิงกรานมั่นคงและไม่มีการเคลื่อนตัวในแนวดิ่ง\n• สัญญาณชีพคงที่และไม่มีภาวะตกเลือด"
                  },
                  "method": {
                    "en": "• Bed rest for 24–48 hours until acute pain subsides\n• Early mobilization with weight-bearing as tolerated (WBAT) with walker\n• Multimodal oral analgesia and short-term DVT prophylaxis",
                    "th": "• นอนพัก 24–48 ชั่วโมงแรกจนอาการปวดเฉียบพลันลดลง\n• เริ่มฝึกเดินลงน้ำหนักเท่าที่ทนได้ (WBAT) ด้วยอุปกรณ์ช่วยเดิน (Walker)\n• ให้ยาแก้ปวดและยาป้องกันลิ่มเลือดอุดตันหลอดเลือดดำระยะสั้น"
                  },
                  "rehabilitation": {
                    "en": "• Ambulation with walker/crutches for 4–6 weeks\n• Advance to full independent ambulation by 6–8 weeks\n• Serial radiographs at 1 and 4 weeks to verify no collapse or displacement",
                    "th": "• เดินโดยใช้อุปกรณ์ช่วยเดินพยุงเป็นเวลา 4–6 สัปดาห์\n• เริ่มเดินอิสระเต็มที่ได้ภายใน 6–8 สัปดาห์\n• ติดตาม X-ray ที่ 1 และ 4 สัปดาห์เพื่อยืนยันว่าไม่มีแนวกระดูกยุบตัวเพิ่ม"
                  },
                  "pitfalls": {
                    "en": "• Rule out complete sacral fracture or crescent component with pelvic CT scan\n• Screen for osteoporosis and fragility insufficiency in elderly fall patients",
                    "th": "• ต้องตรวจ CT เพื่อแยกจากรอยหัก Sacrum สมบูรณ์หรือ Crescent fracture\n• ระวังภาวะกระดูกพรุนในผู้สูงอายุที่ล้มเบาๆ (Fragility pelvic fracture)"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Severe pubic ramus displacement impinging the bladder, vagina, or obturator nerve\n• Intractable pain completely preventing bed-to-chair mobilization in fragile elderly patients",
                    "th": "• ชิ้นกระดูก Pubic ramus หักทิ่มแทงกระเพาะปัสสาวะ ช่องคลอด หรือกดเส้นประสาท Obturator\n• ผู้ป่วยสูงอายุที่ปวดรุนแรงมากจนไม่สามารถลุกนั่งหรือขยับตัวได้เลย (ขังเตียง)"
                  },
                  "method": {
                    "en": "• Percutaneous retrograde superior ramus screw or S1 iliosacral screw for pain stabilization and early mobility",
                    "th": "• เจาะใส่สกรูยึดกระดูกกิ่ง Pubic ramus หรือใส่สกรูยึด Sacrum S1 ผ่านผิวหนังเพื่อลดปวดและให้ลุกเดินได้เร็ว"
                  },
                  "rehabilitation": {
                    "en": "• Immediate full weight-bearing as tolerated post-percutaneous fixation",
                    "th": "• สามารถฝึกเดินลงน้ำหนักได้ทันทีหลังผ่าตัดยึดสกรูผ่านผิวหนัง"
                  },
                  "pitfalls": {
                    "en": "• Avoid over-constraining the anterior ring if posterior sacrum is impaction-locked",
                    "th": "• หลีกเลี่ยงการดึงบีบเชิงกรานมากเกินไป"
                  }
                }
              },
              "illustrationId": "/images/pelvis/lc_1.png",
              "xrayDescription": {
                "en": "Buckled/impacted sacral foraminal lines on AP view with ipsilateral transverse pubic rami fractures.",
                "th": "เห็นรอยย่นอัดแน่นของรูเส้นประสาท Sacrum ร่วมกับแนวกระดูก Pubic rami หักขวางด้านเดียวกัน"
              }
            },
            {
              "type": "LC-II",
              "name": {
                "en": "LC-II (Ipsilateral Crescent Fracture)",
                "th": "LC-II (แรงบีบด้านข้าง - ปีกกระดูก Iliac หักเสี้ยวพระจันทร์)"
              },
              "description": {
                "en": "Ipsilateral anterior iliac wing fracture ('Crescent' fracture extending into SI joint)\nInternal rotation displacement of the anterior hemipelvis\nPosterior SI ligaments remain attached to the crescent fragment\nRotationally UNSTABLE, Vertically STABLE\nModerate internal hemorrhage risk",
                "th": "ปีกกระดูก Iliac หักเป็นเสี้ยวพระจันทร์ (Crescent fracture) ด้านเดียวกัน ลามเข้าข้อ SI\nเชิงกรานบิดหมุนเข้าด้านใน (Internal rotation displacement)\nเอ็นยึดด้านหลัง Posterior SI ยังติดอยู่กับชิ้นกระดูกเสี้ยวพระจันทร์\nไม่มั่นคงในแนวหมุน (Rotationally unstable) แต่มั่นคงในแนวตั้ง\nความเสี่ยงต่อการเสียเลือดปานกลาง"
              },
              "moi": {
                "en": "High-energy lateral crush impact or T-bone vehicle collision directly to iliac crest.",
                "th": "แรงกระแทกทับบดด้านข้างพลังงานสูง หรือรถชนด้านข้างตรงเข้าที่ปีกกระดูกเชิงกราน"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Crescent fracture destabilizes rotational alignment of the iliac wing; anatomic reduction and plating of the crescent restores pelvic geometry and prevents leg length asymmetry.",
                  "th": "รอยหักเสี้ยวพระจันทร์ทำให้ปีกเชิงกรานบิดหมุนเข้าใน การผ่าตัดจัดกระดูกเข้าที่และดามแผ่นเหล็กจะช่วยคืนแนวเชิงกรานและป้องกันขาโก่งสั้น"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Minimally displaced crescent fracture (<5mm) in non-ambulatory or high-surgical-risk patients",
                    "th": "• ชิ้นกระดูกเสี้ยวพระจันทร์เคลื่อนตัวน้อยมาก (<5 มม.) ในผู้ป่วยที่ไม่เดินหรือมีความเสี่ยงผ่าตัดสูง"
                  },
                  "method": {
                    "en": "• Bed rest with gradual progressive weight-bearing as tolerated with assistive device",
                    "th": "• นอนพักและเริ่มฝึกเดินลงน้ำหนักด้วยอุปกรณ์ช่วยเดินเมื่อปวดลดลง"
                  },
                  "rehabilitation": {
                    "en": "• Non-weight bearing x 6–8 weeks; monitor for internal rotation progression",
                    "th": "• ห้ามลงน้ำหนัก 6–8 สัปดาห์ ติดตาม X-ray ดูว่าเชิงกรานบิดหมุนยุบตัวเพิ่มหรือไม่"
                  },
                  "pitfalls": {
                    "en": "• Risk of secondary internal rotational displacement leading to pelvic asymmetry and sitting discomfort",
                    "th": "• เสี่ยงต่อเชิงกรานบิดเบี้ยวผิดรูป ทำให้เวลานั่งไม่สมดุลและขาสั้นยาวไม่เท่ากัน"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Displaced crescent fracture (>1 cm or rotational deformity)\n• Internal rotation deformity of the hemipelvis\n• Articular step-off extending into the sacroiliac joint",
                    "th": "• ชิ้นกระดูกเสี้ยวพระจันทร์เคลื่อนตัว (>1 ซม.) หรือเชิงกรานบิดผิดรูปชัดเจน\n• เชิงกรานบิดหมุนเข้าด้านในอย่างรุนแรง (Internal rotation deformity)\n• รอยหักแตกเข้าสู่ช่องข้อ Sacroiliac joint"
                  },
                  "method": {
                    "en": "• ORIF of iliac wing crescent fracture via Lateral/First window of Ilioinguinal approach or direct lateral iliac approach\n• 3.5mm pelvic reconstruction plates along iliac crest and pelvic brim\n• Percutaneous S1 iliosacral screw if posterior SI joint is unstable",
                    "th": "• ผ่าตัด ORIF จัดชิ้นกระดูกเสี้ยวพระจันทร์ผ่านทางเข้า Ilioinguinal (First window) หรือ Lateral iliac approach\n• ดามด้วยแผ่นเหล็ก Reconstruction plate 3.5mm ตามแนวปีกกระดูก Iliac crest\n• ใส่สกรูยึดข้อ SI (S1 iliosacral screw) ร่วมด้วยหากข้อด้านหลังไม่มั่นคง"
                  },
                  "rehabilitation": {
                    "en": "• Touch-down weight bearing (TDWB) for 6–8 weeks\n• Advance to partial weight bearing at 8 weeks, full WB at 10–12 weeks upon union",
                    "th": "• แตะเท้าลงน้ำหนักบางส่วน (Touch-down WB) 6–8 สัปดาห์\n• เริ่มลงน้ำหนักเพิ่มขึ้นที่ 8 สัปดาห์ และลงน้ำหนักเต็มที่เมื่อกระดูกติดที่ 10–12 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Protect Lateral Femoral Cutaneous Nerve (LFCN) near ASIS during anterior iliac exposure\n• Avoid injuring superior gluteal vessels and nerve in greater sciatic notch",
                    "th": "• ระวังการบาดเจ็บต่อเส้นประสาท Lateral Femoral Cutaneous (LFCN) บริเวณ ASIS\n• ระวังเส้นเลือดและเส้นประสาท Superior Gluteal บริเวณร่อง Sciatic notch"
                  }
                }
              },
              "illustrationId": "/images/pelvis/lc_2.png",
              "xrayDescription": {
                "en": "Vertical fracture line running through iliac wing into SI joint (crescent fragment) with internal rotation of hemipelvis.",
                "th": "เห็นรอยหักโค้งแนวตั้งผ่านปีกกระดูก Iliac ลามเข้าข้อ SI (ชิ้นกระดูก Crescent) ร่วมกับเชิงกรานบิดเข้าด้านใน"
              }
            },
            {
              "type": "LC-III",
              "name": {
                "en": "LC-III (Windswept Pelvis - Contralateral Open Book)",
                "th": "LC-III (แรงบีบด้านข้างแบบ Windswept - เชิงกรานบิดเฉียดลม)"
              },
              "description": {
                "en": "Ipsilateral Lateral Compression (LC) injury combined with CONTRALATERAL Open-Book (APC) injury ('Windswept Pelvis')\nIpsilateral hemipelvis internally rotated, Contralateral hemipelvis externally rotated\nHigh-energy complex rotational and vertical instability\nHigh risk of massive retroperitoneal hemorrhage (iliac vessel tears)",
                "th": "เกิดการบาดเจ็บแรงบีบด้านข้าง (LC) ในฝั่งที่ถูกชน ร่วมกับแรงอัดถ่าง (APC/Open Book) ในฝั่งตรงข้าม ('Windswept Pelvis')\nเชิงกรานด้านชนบิดเข้าข้างใน (Internal rotation) ส่วนด้านตรงข้ามอ้าออกข้างนอก (External rotation)\nไม่มั่นคงอย่างยิ่งทั้งแนวหมุนและแนวตั้ง\nความเสี่ยงสูงมากต่อภาวะตกเลือดรุนแรงในช่องหลังช่องท้อง (Retroperitoneal hemorrhage)"
              },
              "moi": {
                "en": "Extreme lateral rollover crush injury, high-speed vehicle impact, or crushing weight.",
                "th": "อุบัติเหตุรถพลิกคว่ำทับบดด้านข้างความเร็วสูง หรือถูกน้ำหนักมหาศาลทับกดเชิงกราน"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Severe combined rollover mechanism causing bilateral multi-planar instability and retroperitoneal hemorrhage; requires damage-control resuscitation and bilateral circumferential ORIF.",
                  "th": "การบาดเจ็บรุนแรงสองฝั่งแบบ Windswept เสี่ยงตกเลือดรุนแรง ต้องกู้ชีพควบคุมการเสียเลือดฉุกเฉินและผ่าตัดยึดตรึงเชิงกรานทั้งสองข้าง"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly CONTRAINDICATED (Severe risk of fatal hemorrhage and permanent crippling deformity)",
                    "th": "• ห้ามใช้วิธีนี้เด็ดขาด (เสี่ยงต่อการเสียชีวิตจากการตกเลือดและพิการถาวร)"
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
                    "en": "• Uncontrolled retroperitoneal bleeding, severe windswept pelvic nonunion, and inability to walk",
                    "th": "• เสียชีวิตจากการตกเลือด และเชิงกรานบิดเบี้ยวถาวรจนเดินไม่ได้"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Classic 'Windswept' injury pattern (ipsilateral crush + contralateral open-book)\n• Combined rotational and multi-planar instability\n• Polytrauma with severe soft-tissue and vascular injury",
                    "th": "• รูปแบบการหักแบบ 'Windswept' (ข้างหนึ่งถูกบีบ อีกข้างหนึ่งอ้าออก)\n• ไม่มั่นคงรุนแรงทั้งสองข้างในหลายระนาบ\n• มีการบาดเจ็บของเส้นเลือดและเนื้อเยื่ออ่อนร่วมด้วย"
                  },
                  "method": {
                    "en": "• RESUSCITATION: Emergency Pelvic Binder applied in ER; emergent Angio-embolization for hemodynamic instability\n• Provisional External Fixator or C-clamp for damage control\n• Definitive Staged Fixation: Dual ORIF:\n  - Anterior symphyseal plate to close contralateral open-book\n  - Posterior iliosacral screws or iliac reconstruction plates for ipsilateral compression and contralateral SI joint",
                    "th": "• การกู้ชีพ: รัด Pelvic binder ฉุกเฉินใน ER และทำ Angio-embolization หากความดันตก\n• ใส่เหล็กดามกระดูกภายนอก (Ex-Fix) ชั่วคราวในระยะ Damage control\n• ผ่าตัดยึดตรึงสมบูรณ์:\n  - ดามแผ่นเหล็ก Pubic symphysis ด้านหน้าเพื่อปิดส่วน Open-book\n  - ใส่สกรูยึดข้อ SI (Iliosacral screw) หรือดามแผ่นเหล็กที่ปีกสะโพกทั้งสองข้าง"
                  },
                  "rehabilitation": {
                    "en": "• Strict non-weight bearing (NWB) bilateral lower extremities x 10–12 weeks\n• Wheelchair transfer training and active upper-body conditioning",
                    "th": "• ห้ามลงน้ำหนักขาทั้งสองข้าง (Strict NWB) 10–12 สัปดาห์\n• ฝึกเคลื่อนย้ายตัวบนรถเข็นและบริหารกล้ามเนื้อลำตัวช่วงบน"
                  },
                  "pitfalls": {
                    "en": "• High incidence of Morel-Lavallée closed degloving lesions over the trochanter/flank (must debride/drain before anterior approach)\n• Massive internal venous plexus bleeding",
                    "th": "• ระวังแผลฉีกแยกใต้ผิวหนัง (Morel-Lavallée lesion) บริเวณสะโพก/บั้นเอว ต้องระบายน้ำเหลืองก่อนเปิดแผลผ่าตัด\n• เสี่ยงต่อการเสียเลือดมหาศาลจากแขนง Internal iliac venous plexus"
                  }
                }
              },
              "illustrationId": "/images/pelvis/lc_3.png",
              "xrayDescription": {
                "en": "Classic 'windswept' deformity: sacral crush/crescent fracture on impact side with wide SI joint and pubic symphysis diastasis on opposite side.",
                "th": "เห็นเชิงกรานบิดเบี้ยวรูป 'Windswept': ฝั่งหนึ่งมี sacral crush/crescent fracture อีกฝั่งหนึ่งข้อ SI และ pubic symphysis อ้าถ่างออก"
              }
            },
            {
              "type": "VS",
              "name": {
                "en": "VS (Vertical Shear)",
                "th": "VS (แรงเฉือนแนวตั้ง - ไม่มั่นคงอย่างรุนแรง)"
              },
              "description": {
                "en": "Complete vertical displacement of hemipelvis through SI joint, sacrum, or ilium\nVertical pubic rami step-off anteriorly\nComplete disruption of all pelvic ligaments\nRotationally and Vertically UNSTABLE\nHigh incidence of hypovolemic shock and soft tissue destruction",
                "th": "เชิงกรานข้างนั้นถูกแรงเฉือนหลุดลอยขึ้นด้านบนในแนวตั้งอย่างสมบูรณ์ผ่านข้อ SI, Sacrum หรือ Ilium\nกระดูก Pubic rami ด้านหน้าเกยเหลื่อมกันในแนวตั้ง\nเอ็นยึดเชิงกรานทั้งหมดฉีกขาดอย่างสมบูรณ์\nไม่มั่นคงอย่างยิ่งทั้งแนวหมุนและแนวตั้ง (Vertically & Rotationally Unstable)\nเสี่ยงต่อภาวะช็อกจากการเสียเลือดรุนแรง"
              },
              "moi": {
                "en": "Fall from significant height landing on one extended leg, or high-speed motorcycle accident.",
                "th": "การตกจากที่สูงโดยเอาขาข้างเดียวลงยันพื้นอย่างรุนแรง หรืออุบัติเหตุรถจักรยานยนต์ความเร็วสูง"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Complete ligamentous rupture with vertical translation causes severe vertical instability; skeletal traction for length reduction followed by mandatory multi-planar rigid posterior and anterior fixation is essential.",
                  "th": "เอ็นยึดเชิงกรานขาดหมดและเชิงกรานลอยขึ้นในแนวดิ่ง ต้องดึงถ่วงน้ำหนัก (Skeletal traction) ดึงขาลง และผ่าตัดยึดตรึงทั้งเสาหลังและด้านหน้าให้แน่นหนา"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly CONTRAINDICATED (Results in permanent vertical pelvic displacement, severe leg length discrepancy, and disabling chronic pain)",
                    "th": "• ห้ามใช้วิธีนี้เด็ดขาด (ทำให้เชิงกรานลอยค้างถาวร ขาสั้นยาวไม่เท่ากันอย่างมาก และปวดหลังเรื้อรังรุนแรง)"
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
                    "en": "• Severe limb shortening (>3-5 cm), chronic sacroiliac nonunion, and inability to walk",
                    "th": "• ขาสั้นถาวร > 3-5 ซม. กระดูกไม่ติด และไม่สามารถเดินได้ตามปกติ"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Complete vertical displacement through SI joint, sacrum, or ilium\n• Vertically and rotationally unstable hemipelvis\n• Vertical step-off of anterior pubic rami\n• High risk of neurovascular disruption",
                    "th": "• รอยเลื่อนในแนวดิ่งสมบูรณ์ผ่านข้อ SI, Sacrum หรือ Ilium\n• เชิงกรานไม่มั่นคงทั้งแนวดิ่งและแนวหมุน\n• แนวกระดูก Pubic ด้านหน้าเกยเหลื่อมกันในแนวตั้ง\n• เสี่ยงต่อการบาดเจ็บของเส้นประสาท L5/S1"
                  },
                  "method": {
                    "en": "• PRE-OP: Distal femoral skeletal traction (15–20% body weight) to regain pelvic length and reduce cranial migration\n• Definitive Rigid Fixation:\n  - Posterior: Dual 7.0/7.3mm S1/S2 iliosacral screws or Triangular Lumbopelvic Fixation (L5-S1-ilium spinopelvic pedicle screw construct)\n  - Anterior: ORIF pubic symphysis plate or superior ramus plating via Stoppa/Pfannenstiel approach",
                    "th": "• ก่อนผ่าตัด: ดึงถ่วงน้ำหนักกระดูกต้นขา (Distal femoral skeletal traction 15-20% ของน้ำหนักตัว) เพื่อดึงเชิงกรานกลับลงมา\n• ผ่าตัดยึดตรึงความแข็งแรงสูง:\n  - ด้านหลัง: ใส่สกรูยึดข้อ SI สองตัว (S1 + S2 iliosacral screws) หรือยึดตรึงกระดูกสันหลังส่วนเอวเข้ากับเชิงกราน (Triangular Lumbopelvic Fixation)\n  - ด้านหน้า: ผ่าตัด ORIF ดามแผ่นเหล็ก Pubic symphysis / Rami ผ่านทางเข้า Stoppa หรือ Pfannenstiel"
                  },
                  "rehabilitation": {
                    "en": "• Strict non-weight bearing (NWB) on affected side for 10–12 weeks\n• Serial Outlet and Inlet radiographs at 2, 6, and 12 weeks to monitor against vertical recurrence",
                    "th": "• ห้ามลงน้ำหนักบนขาข้างที่บาดเจ็บเด็ดขาด (Strict NWB) 10–12 สัปดาห์\n• ถ่ายภาพ X-ray Inlet/Outlet views ติดตามที่ 2, 6 และ 12 สัปดาห์เพื่อยืนยันว่าไม่มีการเลื่อนลอยซ้ำ"
                  },
                  "pitfalls": {
                    "en": "• Watch for L5 nerve root entrapment during vertical reduction maneuvers\n• Inadequate posterior fixation leads to early screw loosening and vertical loss of reduction",
                    "th": "• ระวังเส้นประสาท L5 ถูกดึงรั้งหรือหนีบขณะดึงกระดูกเชิงกรานลงมาเข้าที่\n• การยึดด้านหลังที่ไม่แข็งแรงพอจะทำให้สกรูหลุดหลวมและเชิงกรานลอยกลับขึ้นไปใหม่"
                  }
                }
              },
              "illustrationId": "/images/pelvis/vs.png",
              "xrayDescription": {
                "en": "Significant vertical migration of one hemipelvis relative to the sacrum on AP and Outlet views.",
                "th": "พบเชิงกรานข้างหนึ่งยกลอยสูงขึ้นกว่าอีกข้างอย่างชัดเจนในแนวตั้งในท่า AP และ Outlet view"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "acetabulum",
      "name": {
        "en": "Acetabulum",
        "th": "เบ้าหัวกระดูกสะโพก (Acetabulum)"
      },
      "regionConcept": {
        "physicalExam": [
          {
            "sign": "Hip Motion Pain & Inability to Bear Weight",
            "positive": {
              "en": "Severe deep pain with any passive hip motion; complete inability to stand or put weight on affected extremity.",
              "th": "ปวดลึกรุนแรงเมื่อขยับข้อสะโพก และไม่สามารถยืนหรือลงน้ำหนักบนขาข้างที่เจ็บได้เลย"
            }
          },
          {
            "sign": "Sciatic Nerve Neurological Examination",
            "positive": {
              "en": "Loss of sensation on lateral calf/dorsum of foot or foot drop (ankle/great toe dorsiflexion weakness); peroneal division most vulnerable in posterior wall/column injuries.",
              "th": "ชาบริเวณน่องด้านนอก/หลังเท้า หรือมีภาวะเท้าตก (Foot drop) จากการบาดเจ็บของแขนง Peroneal division ของเส้นประสาท Sciatic"
            }
          },
          {
            "sign": "Deformity from Associated Hip Dislocation",
            "positive": {
              "en": "Flexed, adducted, internally rotated leg (posterior dislocation) or abducted, externally rotated leg (anterior dislocation).",
              "th": "ขาท่า งอ-หุบ-หมุนเข้าด้านใน (ข้อสะโพกหลุดไปด้านหลัง) หรือ กาง-หมุนออกด้านนอก (ข้อสะโพกหลุดไปด้านหน้า)"
            }
          }
        ],
        "acceptableAlignment": [
          {
            "parameter": {
              "en": "Articular Step-off / Gap",
              "th": "ความเหลื่อม/ช่องอ้าของผิวข้อต่อเบ้าสะโพก"
            },
            "threshold": "< 1 - 2 mm",
            "note": {
              "en": "Articular step-off >1mm causes post-traumatic hip osteoarthritis.",
              "th": "ผิวข้อเหลื่อม > 1 มม. นำไปสู่ข้อสะโพกเสื่อมตามหลังอุบัติเหตุรุนแรง"
            }
          },
          {
            "parameter": {
              "en": "Roof Arc Angle (Matta Criterion)",
              "th": "มุมโดมหลังคาเบ้าสะโพก (Roof Arc Angle)"
            },
            "threshold": "> 45°",
            "note": {
              "en": "Roof arc angle >45° on AP, Iliac, and Obturator views indicates intact weight-bearing dome for non-operative care.",
              "th": "มุมหลังคาเบ้า >45 องศาทั้ง 3 ท่า แสดงว่าส่วนรับน้ำหนักยังสมบูรณ์ สามารถรักษาแบบไม่ผ่าตัดได้"
            }
          }
        ],
        "redFlags": [
          {
            "en": "Sciatic nerve palsy (especially peroneal division) secondary to posterior wall/column fracture-dislocation.",
            "th": "ภาวะเส้นประสาท Sciatic อัมพาต (โดยเฉพาะแขนง Peroneal) จากกระดูกเบ้าสะโพกด้านหลังหักเคลื่อน"
          },
          {
            "en": "Irreducible hip dislocation or non-congruent reduction due to intra-articular trapped bone fragments, requiring emergency open reduction.",
            "th": "ข้อสะโพกหลุดที่ไม่สามารถดึงเข้าที่ได้ หรือเข้าที่ไม่สนิทจากชิ้นกระดูกค้างในข้อ ต้องผ่าตัดเปิดจัดเข้าที่ด่วน"
          },
          {
            "en": "Femoral head avascular necrosis (AVN) following delayed reduction of hip dislocation.",
            "th": "ภาวะหัวกระดูกสะโพกขาดเลือด (AVN of femoral head) จากการดึงจัดข้อสะโพกหลุดล่าช้า"
          }
        ],
        "associatedInjuries": [
          {
            "injury": {
              "en": "Posterior Hip Dislocation",
              "th": "ข้อสะโพกหลุดไปด้านหลัง"
            }
          },
          {
            "injury": {
              "en": "Femoral Head Chondral Indentation / Fracture",
              "th": "กระดูกอ่อนหัวกระดูกสะโพกยุบตัวหรือหักร่วม"
            }
          },
          {
            "injury": {
              "en": "Sciatic Nerve Injury",
              "th": "การบาดเจ็บของเส้นประสาท Sciatic"
            }
          }
        ],
        "clinicalPearls": [
          {
            "en": "Posterior wall fracture is the single most common acetabular fracture pattern (~25% of cases).",
            "th": "Posterior wall fracture เป็นรูปแบบกระดูกเบ้าสะโพกหักที่พบบ่อยที่สุด (~25% ของผู้ป่วยทั้งหมด)"
          },
          {
            "en": "Spur Sign on Iliac Oblique Judet view is pathognomonic for Both-Columns acetabular fractures.",
            "th": "การพบ 'Spur Sign' ในท่า Iliac Oblique Judet view เป็นลักษณะเฉพาะ (Pathognomonic) สำหรับ Both-Columns fracture"
          },
          {
            "en": "CT scan with 3D reconstruction and digital subtraction of the femoral head is mandatory for pre-operative planning and column assessment.",
            "th": "การทำ CT scan 3D และลบภาพหัวกระดูกสะโพกออก เป็นสิ่งจำเป็นอย่างยิ่งในการวางแผนผ่าตัดและประเมินเสากระดูกเบ้า"
          }
        ]
      },
      "classifications": [
        {
          "system": "Judet-Letournel",
          "fullName": {
            "en": "Judet-Letournel Acetabular Fracture Classification",
            "th": "การจำแนกกระดูกเบ้าสะโพกหักแบบ Judet-Letournel"
          },
          "description": {
            "en": "Classification system for acetabular fractures dividing injuries into 5 Elementary (simple) patterns and 5 Associated (complex) patterns based on column and wall involvement.",
            "th": "ระบบจำแนกกระดูกเบ้าสะโพกหัก (Acetabulum) แบ่งเป็น 5 รูปแบบพื้นฐาน (Elementary) และ 5 รูปแบบซับซ้อน (Associated) ตามการหักของผนังและเสากระดูก"
          },
          "concept": {
            "title": {
              "en": "Judet-Letournel Acetabular Clinical Concept",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ Judet-Letournel Acetabulum"
            },
            "corePrinciple": {
              "en": "Classifies acetabular fractures into 5 Elementary and 5 Associated patterns based on Anterior Column (iliopectineal line), Posterior Column (ilioischial line), and weight-bearing Roof Arc involvement. Anatomical reduction (<1-2 mm step-off) is critical to prevent post-traumatic hip arthritis.",
              "th": "จำแนกกระดูกเบ้าสะโพกหักเป็น 5 รูปแบบพื้นฐาน (Elementary) และ 5 รูปแบบซับซ้อน (Associated) ตามเสากระดูกด้านหน้า เสากระดูกด้านหลัง และหลังคาโดมรับน้ำหนัก การผ่าตัดจัดกระดูกให้เรียบสนิท (<1-2 มม.) มีความสำคัญสูงสุดเพื่อป้องกันข้อสะโพกเสื่อม"
            },
            "rules": [
              {
                "en": "5 Elementary Patterns: Posterior Wall, Posterior Column, Anterior Wall, Anterior Column, Transverse.",
                "th": "5 รูปแบบพื้นฐาน (Elementary): ผนังหลัง (Posterior Wall), เสาหลัง (Posterior Column), ผนังหน้า (Anterior Wall), เสาหน้า (Anterior Column), หักขวาง (Transverse)"
              },
              {
                "en": "5 Associated Patterns: T-Shaped, Posterior Column + Posterior Wall, Transverse + Posterior Wall, Anterior Column/Wall + Posterior Semi-Transverse, Both-Column.",
                "th": "5 รูปแบบซับซ้อน (Associated): รูปตัว T, เสาหลัง+ผนังหลัง, หักขวาง+ผนังหลัง, เสาหน้า/ผนังหน้า+เฉียงหลัง, สองเสาสมบูรณ์ (Both-Column)"
              },
              {
                "en": "Non-Operative Criteria (Matta Criteria): Step-off <2 mm in weight-bearing dome, intact Roof Arc angle >45° on all 3 Judet radiograph views, AND posterior wall fragment <20%.",
                "th": "เกณฑ์รักษาแบบไม่ผ่าตัด (Matta Criteria): ผิวข้อเหลื่อม <2 มม. บริเวณโดมรับน้ำหนัก, มุมหลังคาเบ้าสมบูรณ์ (Roof arc angle >45° ใน 3 ท่า Judet views), และผนังหลังหัก <20%"
              },
              {
                "en": "Both-Column Fracture Signature: Characterized by complete floating articular surface with the pathognomonic 'Spur Sign' on iliac oblique view.",
                "th": "ลักษณะเฉพาะ Both-Column Fracture: ผิวข้อหลุดลอยแยกจากกระดูกเชิงกรานทั้งหมด ร่วมกับพบ 'Spur Sign' ในท่าเอกซเรย์ Iliac oblique view"
              }
            ],
            "clinicalSignificance": [
              {
                "en": "Non-Operative Management: Non-weightbearing with crutches for 6-8 weeks if Matta criteria are met.",
                "th": "การรักษาแบบไม่ผ่าตัด: งดลงน้ำหนักใช้ไม้ค้ำยัน 6-8 สัปดาห์ หากผ่านเกณฑ์ Matta criteria"
              },
              {
                "en": "Operative Indications: Step-off ≥2 mm in weight-bearing dome, intra-articular loose fragments, posterior wall defect >40-50%, or hip joint dislocation/instability.",
                "th": "ข้อบ่งชี้ผ่าตัด: ผิวข้อเหลื่อม ≥2 มม. บริเวณโดมรับน้ำหนัก, มีเศษกระดูกในข้อ, ผนังหลังแตก >40-50%, หรือข้อสะโพกหลุดหลวม"
              },
              {
                "en": "Surgical Approaches: Kocher-Langenbeck approach (posterior wall/column) vs Ilioinguinal / Modified Stoppa approach (anterior wall/column). Primary Total Hip Arthroplasty (THA) in elderly with severe osteoporotic comminution.",
                "th": "ทางเข้าผ่าตัด: Kocher-Langenbeck approach (สำหรับผนัง/เสาหลัง) หรือ Ilioinguinal / Modified Stoppa approach (สำหรับผนัง/เสาหน้า); พิจารณาผ่าตัดเปลี่ยนข้อสะโพกเทียม THA ในผู้สูงอายุที่กระดูกแตกพรุนรุนแรง"
              },
              {
                "en": "CRITICAL PITFALL: ALWAYS order 3 plain Judet views (AP Pelvis, Iliac Oblique, Obturator Oblique) + 3D CT scan. Missing a posterior wall fracture causes unrecognized posterior subluxation and catastrophic hip joint collapse.",
                "th": "ข้อควรระวังสำคัญ: ต้องส่งภาพเอกซเรย์ Judet views ครบ 3 ท่า (AP Pelvis, Iliac Oblique, Obturator Oblique) ร่วมกับ 3D CT scan เสมอ! การตรวจพลาดรอยหัก Posterior wall จะทำให้ข้อสะโพกหลุดหลวมด้านหลังและข้อพังทลาย"
              }
            ]
          },
          "investigations": [
            {
              "name": "AP Pelvis View",
              "details": {
                "en": "Standard AP view of the pelvis. Evaluates teardrop line, iliopectineal line (anterior column), ilioischial line (posterior column), and roof arc.",
                "th": "ภาพเอกซเรย์เชิงกรานท่า AP มาตรฐาน ประเมินแนวเส้น Iliopectineal (เสาหน้า), Ilioischial (เสาหลัง) และโดมหลังคาเบ้าสะโพก"
              },
              "imageUrl": "/images/investigations/hip/ap_pelvis_view.jpg"
            },
            {
              "name": "Iliac Oblique View (Judet View 45°)",
              "details": {
                "en": "45° Judet oblique view with affected hip rotated UP. Profiles the posterior column and anterior wall of the acetabulum.",
                "th": "ภาพเอกซเรย์ท่าเฉียง Judet 45 องศา โดยตะแคงสะโพกข้างที่เจ็บขึ้นบน ใช้ประเมินเสากระดูกด้านหลัง (Posterior column) และผนังด้านหน้า"
              }
            },
            {
              "name": "Obturator Oblique View (Judet View 45°)",
              "details": {
                "en": "45° Judet oblique view with affected hip rotated DOWN. Profiles the anterior column and posterior wall of the acetabulum, visualizing the obturator foramen.",
                "th": "ภาพเอกซเรย์ท่าเฉียง Judet 45 องศา โดยตะแคงสะโพกข้างที่เจ็บลงล่าง ใช้ประเมินเสากระดูกด้านหน้า (Anterior column) และผนังด้านหลัง"
              }
            },
            {
              "name": "3D CT Reconstruction (Acetabular Protocol)",
              "details": {
                "en": "MANDATORY alongside the 3 Judet plain films. High-resolution CT with 3D volume rendering and multiplanar reconstructions (axial, coronal, sagittal) is essential for: (1) Accurate Letournel-Judet pattern identification — plain films alone are insufficient for complex T-type and associated fractures; (2) Quantifying articular displacement and comminution; (3) Detecting dome impaction and marginal impaction fragments; (4) Pre-operative templating and surgical approach selection. Femoral head digital subtraction greatly improves dome visualization.",
                "th": "บังคับทำควบคู่กับ Judet views ทั้ง 3 ภาพ CT 3D ความละเอียดสูงพร้อม Multiplanar reconstruction จำเป็นสำหรับ: (1) จำแนกรูปแบบ Letournel-Judet ที่แม่นยำ (X-ray ไม่เพียงพอสำหรับ T-type และ Associated fractures), (2) วัดระยะเคลื่อนตัวและความแตกละเอียดของผิวข้อ, (3) ตรวจหา Dome impaction fragment, (4) วางแผนผ่าตัด การลบหัวกระดูกออก (Digital subtraction) ช่วยให้เห็นหลังคาเบ้าสะโพกชัดขึ้น"
              }
            }
          ],
          "types": [
            {
              "type": "Posterior Wall",
              "name": {
                "en": "Posterior Wall Fracture (Elementary #1)",
                "th": "1. Posterior Wall (ผนังเบ้าสะโพกด้านหลัง - Elementary)"
              },
              "description": {
                "en": "Elementary Type 1: Most common acetabular fracture pattern (~25% of cases)\nInvolves only the posterior articular wall rim\nFrequently associated with posterior hip dislocation\nHip stability depends on fragment size (>20-25% wall involvement)",
                "th": "รูปแบบพื้นฐานที่ 1: พบบ่อยที่สุด (~25% ของเบ้าสะโพกหักทั้งหมด)\nหักเฉพาะขอบผนังเบ้าด้านหลัง\nพบบ่อยร่วมกับข้อสะโพกหลุดไปด้านหลัง (Posterior hip dislocation)\nความมั่นคงขึ้นอยู่กับขนาดชิ้นกระดูกที่แตกออก (>20-25% ของผนังเบ้า)"
              },
              "moi": {
                "en": "Dashboard injury: Knee impacts dashboard in a seated position with flexed hip.",
                "th": "Dashboard injury (เข่าชนหน้ารถ): เข่ากระแทกหน้ารถขณะนั่งงอข้อสะโพกในรถยนต์"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Posterior hip stability is determined by fragment size; >20-25% wall involvement requires urgent hip reduction and buttress plating to prevent posterior subluxation.",
                  "th": "ความมั่นคงของข้อสะโพกขึ้นกับขนาดชิ้นกระดูกผนังหลัง (>20-25% ต้องดึงจัดข้อสะโพกหลุดฉุกเฉินและผ่าตัดดามแผ่นเหล็ก Buttress เพื่อป้องกันข้อสะโพกหลุดซ้ำ)"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Small wall fragment (<20% of posterior wall area)\n• Congruent hip joint on AP, Judet views, and dynamic fluoroscopy\n• Intact weight-bearing dome (Roof arc angle >45°)",
                    "th": "• ชิ้นกระดูกผนังหลังเล็กมาก (<20% ของพื้นที่ผนังหลัง)\n• ข้อสะโพกเรียบสนิทมั่นคงดีในท่า AP, Judet views และการตรวจ Dynamic test\n• มุมหลังคาเบ้าสะโพกสมบูรณ์ (Roof arc angle >45°)"
                  },
                  "method": {
                    "en": "• Bed rest for 24–48 hours followed by protected non-weight bearing (NWB) with crutches\n• Analgesics, muscle relaxants, and serial radiographic assessment",
                    "th": "• นอนพัก 24–48 ชั่วโมงแล้วเริ่มหัดเดินโดยห้ามลงน้ำหนัก (Strict NWB) ด้วยไม้ค้ำยัน\n• ให้ยาแก้ปวดและตรวจติดตามภาพ X-ray อย่างใกล้ชิด"
                  },
                  "rehabilitation": {
                    "en": "• Strict non-weight bearing for 6 weeks\n• Partial weight bearing (PWB) from 6–10 weeks, then full WB at 12 weeks after CT/X-ray confirmation",
                    "th": "• ห้ามลงน้ำหนัก 6 สัปดาห์แรก\n• เริ่มลงน้ำหนักบางส่วนที่ 6–10 สัปดาห์ และลงน้ำหนักเต็มที่เมื่อครบ 12 สัปดาห์หลังตรวจ X-ray ยืนยัน"
                  },
                  "pitfalls": {
                    "en": "• Unrecognized posterior subluxation leading to catastrophic rapid femoral head cartilage wear",
                    "th": "• ระวังข้อสะโพกเลื่อนหลุดไปด้านหลังโดยไม่รู้ตัว ทำให้ผิวกระดูกอ่อนหัวกระดูกสะโพกสึกพังทลายอย่างรวดเร็ว"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Posterior wall fragment >20–25% of acetabular rim\n• Incongruent joint or intra-articular incarcerated bone/cartilage fragments\n• Unstable hip joint on dynamic examination in 90° flexion",
                    "th": "• ชิ้นกระดูกผนังหลังแตกกะเทาะ >20–25% ของขอบเบ้าสะโพก\n• ข้อสะโพกไม่เรียบสนิท หรือมีเศษกระดูก/กระดูกอ่อนหลุดค้างในข้อ\n• ข้อสะโพกหลุดหลวมเมื่อตรวจขยับในท่างอสะโพก 90 องศา"
                  },
                  "method": {
                    "en": "• Emergent closed reduction of hip dislocation under sedation/anesthesia\n• Definitive ORIF via Kocher-Langenbeck approach\n• Direct reduction of wall fragments with mini-screws (2.7/3.5mm) and a contoured 3.5mm reconstruction buttress plate over the wall",
                    "th": "• ดึงจัดข้อสะโพกที่หลุดเข้าที่ฉุกเฉินทันที\n• ผ่าตัด ORIF ผ่านทางเข้าด้านหลัง (Kocher-Langenbeck approach)\n• จัดชิ้นกระดูกผนังหลังเข้าที่ ยึดด้วยสกรูและดามทับด้วยแผ่นเหล็ก 3.5mm Reconstruction buttress plate"
                  },
                  "rehabilitation": {
                    "en": "• Touch-down weight bearing (TDWB) for 6–8 weeks\n• Early passive-to-active hip ROM exercises avoiding extreme adduction/internal rotation\n• Advance to full WB at 12 weeks upon radiographic healing",
                    "th": "• แตะเท้าลงน้ำหนักบางส่วน (Touch-down WB) 6–8 สัปดาห์\n• เริ่มบริหารขยับข้อสะโพกแต่เนิ่นๆ โดยหลีกเลี่ยงท่างอสะโพกมากเกินและหุบขาเข้าใน\n• เริ่มลงน้ำหนักเต็มที่เมื่อกระดูกติดที่ 12 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Sciatic nerve injury (peroneal division, keep knee flexed and hip extended during retraction)\n• Marginal impaction of articular cartilage (must elevate and bone graft before wall fixation)",
                    "th": "• ระวังการบาดเจ็บต่อเส้นประสาท Sciatic (ต้องงอเข่าและเหยียดสะโพกขณะดึงรั้งกล้ามเนื้อ)\n• หากมีกระดูกอ่อนขอบเบ้าสะโพกยุบตัว (Marginal impaction) ต้องงัดขึ้นและปลูกกระดูกเทียมก่อนยึดผนัง"
                  }
                }
              },
              "illustrationId": "/images/acetabulum/posterior_wall.png",
              "xrayDescription": {
                "en": "Disrupted posterior wall rim line on AP and Obturator Oblique views, with displaced fragment posterior to femoral head.",
                "th": "ขอบผนังหลังขาดออกจากกันในท่า AP และ Obturator Oblique เห็นชิ้นกระดูกลอยอยู่หลังหัวกระดูกสะโพก"
              }
            },
            {
              "type": "Posterior Column",
              "name": {
                "en": "Posterior Column Fracture (Elementary #2)",
                "th": "2. Posterior Column (เสากระดูกด้านหลัง - Elementary)"
              },
              "description": {
                "en": "Elementary Type 2: Vertical fracture separating the posterior column (ischial ramus & wall) from pelvis\nDisrupts the ilioischial line on AP view\nExtends through ischial tuberosity and greater sciatic notch",
                "th": "รูปแบบพื้นฐานที่ 2: รอยหักแนวตั้งแยกเสากระดูกด้านหลังออกจากเชิงกราน\nทำให้แนวเส้น Ilioischial line ขาดออกจากกันในท่า AP\nพาดผ่านปุ่มกระดูก Ischial tuberosity และ Sciatic notch"
              },
              "moi": {
                "en": "Direct lateral compression on the trochanteric area with hip in abduction.",
                "th": "แรงกระแทกด้านข้างเข้าบริเวณปุ่มสะโพกขณะข้อสะโพกกางออก"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Disrupts the ilioischial line and posterior weight-bearing dome; anatomic reduction via Kocher-Langenbeck approach with a posterior column reconstruction plate restores articular congruity.",
                  "th": "รอยหักตัดผ่านเส้น Ilioischial และส่วนรับน้ำหนักด้านหลัง ต้องผ่าตัดจัดกระดูกเข้าที่ผ่านทางเข้าด้านหลังและดามแผ่นเหล็กตามแนวเสาหลัง"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Non-displaced (<2mm displacement)\n• Intact weight-bearing dome (roof arc angle >45° on AP, obturator, and iliac views)",
                    "th": "• รอยหักไม่เคลื่อนตัว (<2 มม.)\n• โดมหลังคาเบ้าสะโพกส่วนรับน้ำหนักยังสมบูรณ์ดี (Roof arc angle >45° ทั้ง 3 ท่า)"
                  },
                  "method": {
                    "en": "• Protected non-weight bearing with crutches and serial radiographic monitoring",
                    "th": "• ใช้ไม้ค้ำยันพยุงเดินโดยห้ามลงน้ำหนัก และติดตามภาพถ่ายรังสีสม่ำเสมอ"
                  },
                  "rehabilitation": {
                    "en": "• NWB x 6–8 weeks, progressive weight bearing from 8–12 weeks",
                    "th": "• ห้ามลงน้ำหนัก 6–8 สัปดาห์ แล้วเริ่มฝึกเดินลงน้ำหนักเพิ่มขึ้นที่ 8–12 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Late medial subluxation and instability of the femoral head",
                    "th": "• ระวังหัวกระดูกสะโพกเลื่อนหลุดเข้าด้านในตามหลัง"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Displaced posterior column fracture (step-off ≥2mm)\n• Joint incongruity or roof arc angle <45°\n• Associated sciatic nerve entrapment or persistent subluxation",
                    "th": "• รอยหักเสาหลังเคลื่อนตัว (Step-off ≥2 มม.)\n• ผิวข้อต่อไม่เรียบสนิท หรือมุมหลังคาเบ้าสะโพก <45°\n• มีการกดทับเส้นประสาท Sciatic หรือข้อสะโพกเลื่อนหลวม"
                  },
                  "method": {
                    "en": "• ORIF via Kocher-Langenbeck approach\n• Reduction using Farabeuf / Matta pelvic reduction clamps across ischial tuberosity to ilium\n• 3.5mm reconstruction plate spanning from ischium across the column to superior posterior ilium",
                    "th": "• ผ่าตัด ORIF ผ่านทางเข้าด้านหลัง (Kocher-Langenbeck approach)\n• ดึงจัดกระดูกเข้าที่ด้วยคีมจับกระดูกเชิงกราน (Farabeuf/Matta clamp)\n• ดามด้วยแผ่นเหล็ก 3.5mm Reconstruction plate พาดจาก Ischium ขึ้นไปถึงปีกกระดูก Ilium ด้านหลัง"
                  },
                  "rehabilitation": {
                    "en": "• Touch-down weight bearing (TDWB) x 8 weeks, advance to full WB at 12 weeks",
                    "th": "• แตะเท้าลงน้ำหนักบางส่วน 8 สัปดาห์ แล้วเริ่มลงน้ำหนักเต็มที่เมื่อครบ 12 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Superior gluteal neurovascular bundle injury in greater sciatic notch",
                    "th": "• ระวังการบาดเจ็บต่อเส้นเลือดและเส้นประสาท Superior gluteal บริเวณร่อง Sciatic notch"
                  }
                }
              },
              "illustrationId": "/images/acetabulum/posterior_column.png",
              "xrayDescription": {
                "en": "Disrupted ilioischial line on AP view with intact iliopectineal line. Best visualized on Iliac Oblique view.",
                "th": "แนวเส้น Ilioischial line ขาดในท่า AP โดยเส้น Iliopectineal line ยังสมบูรณ์ ประเมินได้ดีในท่า Iliac Oblique"
              }
            },
            {
              "type": "Anterior Wall",
              "name": {
                "en": "Anterior Wall Fracture (Elementary #3)",
                "th": "3. Anterior Wall (ผนังเบ้าสะโพกด้านหน้า - Elementary)"
              },
              "description": {
                "en": "Elementary Type 3: Isolated fracture of the anterior articular wall/rim\nDisrupts the middle portion of the iliopectineal line on AP view\nAssociated with anterior hip dislocation (rare)",
                "th": "รูปแบบพื้นฐานที่ 3: หักเฉพาะขอบผนังเบ้าสะโพกด้านหน้า\nทำให้ช่วงกลางของแนวเส้น Iliopectineal line ขาดออกจากกันในท่า AP\nพบบ่อยร่วมกับข้อสะโพกหลุดไปด้านหน้า"
              },
              "moi": {
                "en": "Blow to the front of hip or lateral impact with hip extended and externally rotated.",
                "th": "แรงกระแทกเข้าด้านหน้าสะโพก หรือแรงกระแทกด้านข้างขณะข้อสะโพกเหยียดและหมุนออก"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Middle iliopectineal line disruption with anterior joint instability; ORIF via Ilioinguinal or Modified Stoppa approach restores anterior rim congruity.",
                  "th": "รอยหักตัดผ่านเส้น Iliopectineal ช่วงกลางและขอบเบ้าด้านหน้า ผ่าตัด ORIF ผ่านทางเข้าด้านหน้า (Ilioinguinal / Stoppa) เพื่อจัดยึดขอบเบ้าสะโพก"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Non-displaced wall fragment (<2mm) without anterior hip subluxation\n• Intact weight-bearing dome on Obturator Oblique view",
                    "th": "• ชิ้นกระดูกผนังหน้าไม่เคลื่อนตัว (<2 มม.) และข้อสะโพกไม่หลุดไปด้านหน้า\n• โดมหลังคาเบ้าสะโพกสมบูรณ์ในท่า Obturator Oblique"
                  },
                  "method": {
                    "en": "• Protected non-weight bearing with crutches and serial radiographic monitoring",
                    "th": "• ใช้ไม้ค้ำยันพยุงเดินโดยห้ามลงน้ำหนัก และติดตามภาพ X-ray อย่างใกล้ชิด"
                  },
                  "rehabilitation": {
                    "en": "• NWB x 6 weeks, advance to full weight-bearing by 10–12 weeks",
                    "th": "• ห้ามลงน้ำหนัก 6 สัปดาห์แรก แล้วเริ่มลงน้ำหนักเต็มที่ได้ที่ 10–12 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Unstable anterior subluxation on hip extension and external rotation",
                    "th": "• ระวังข้อสะโพกเลื่อนหลุดไปด้านหน้าเมื่อเหยียดสะโพกและหมุนขาออกนอก"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Displaced anterior wall fragment (step-off ≥2mm)\n• Anterior hip subluxation or intra-articular debris\n• Associated anterior femoral head chondral indentation",
                    "th": "• ชิ้นกระดูกผนังหน้าเคลื่อนตัว (Step-off ≥2 มม.)\n• ข้อสะโพกเลื่อนหลุดไปด้านหน้า หรือมีเศษกระดูกอ่อนหลุดค้างในข้อ\n• มีรอยบุบกระแทกของผิวกระดูกอ่อนหัวกระดูกสะโพกด้านหน้าร่วมด้วย"
                  },
                  "method": {
                    "en": "• ORIF via Ilioinguinal approach (Middle/Second window) or Modified Stoppa approach\n• Small-fragment lag screws (2.7/3.5mm) and a contoured 3.5mm pelvic brim reconstruction plate",
                    "th": "• ผ่าตัด ORIF ผ่านทางเข้า Ilioinguinal (Second window) หรือ Modified Stoppa approach\n• จัดกระดูกเข้าที่ ยึดด้วย Lag screws และดามแผ่นเหล็ก 3.5mm Reconstruction plate ตามแนว Pelvic brim"
                  },
                  "rehabilitation": {
                    "en": "• Touch-down weight bearing (TDWB) x 6–8 weeks, progressive weight-bearing thereafter",
                    "th": "• แตะเท้าลงน้ำหนักบางส่วน 6–8 สัปดาห์ แล้วจึงเริ่มฝึกเดินลงน้ำหนักเพิ่มขึ้น"
                  },
                  "pitfalls": {
                    "en": "• Femoral nerve and external iliac vessel injury during anterior retraction (avoid excessive prolonged traction)",
                    "th": "• ระวังการบาดเจ็บต่อเส้นประสาท Femoral และเส้นเลือด External iliac จากการดึงรั้งแผลแรงเกินไป"
                  }
                }
              },
              "illustrationId": "/images/acetabulum/anterior_wall.png",
              "xrayDescription": {
                "en": "Disrupted middle section of iliopectineal line on AP and Obturator Oblique views with anterior wall fragment displacement.",
                "th": "แนวเส้น Iliopectineal line ช่วงกลางขาดในท่า AP และ Obturator Oblique เห็นชิ้นส่วนผนังหน้าเคลื่อนออก"
              }
            },
            {
              "type": "Anterior Column",
              "name": {
                "en": "Anterior Column Fracture (Elementary #4)",
                "th": "4. Anterior Column (เสากระดูกด้านหน้า - Elementary)"
              },
              "description": {
                "en": "Elementary Type 4: Fracture involving the entire anterior column\nDisrupts the iliopectineal line on AP view\nExtends from superior pubic ramus up into iliac crest",
                "th": "รูปแบบพื้นฐานที่ 4: รอยหักบริเวณเสากระดูกด้านหน้าทั้งหมด\nทำให้แนวเส้น Iliopectineal line ขาดออกจากกันในท่า AP\nพาดผ่านจากกระดูก Superior pubic ramus ขึ้นไปถึงปีกสะโพก (Iliac crest)"
              },
              "moi": {
                "en": "Direct impact to the anterior aspect of the extended and externally rotated hip.",
                "th": "แรงกระแทกเข้าด้านหน้าสะโพกขณะข้อสะโพกเหยียดและหมุนออกด้านนอก"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Complete anterior pelvic pillar disruption extending from pubic ramus to iliac crest; anatomic plating along pelvic brim restores load-bearing biomechanics.",
                  "th": "รอยหักเสาหน้าทั้งหมดตั้งแต่กิ่งกระดูก Pubic ramus ถึงปีกสะโพก Iliac crest ผ่าตัด ORIF ดามแผ่นเหล็กยาวตามแนว Pelvic brim เพื่อฟื้นฟูความแข็งแรง"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Low anterior column fracture with intact weight-bearing dome (roof arc >45°)\n• Non-displaced fracture (<2mm step-off) in medically unfit patients",
                    "th": "• รอยหักเสาหน้าส่วนล่างที่ไม่กระทบต่อโดมหลังคาเบ้าสะโพก (Roof arc >45°)\n• รอยหักไม่เคลื่อนตัว (<2 มม.) ในผู้ป่วยที่มีข้อห้ามการผ่าตัด"
                  },
                  "method": {
                    "en": "• Protected non-weight bearing with walker/crutches and serial radiographic follow-up",
                    "th": "• ใช้อุปกรณ์ช่วยเดินพยุงโดยห้ามลงน้ำหนัก และติดตาม X-ray ดูการเคลื่อนตัวของแนวกระดูก"
                  },
                  "rehabilitation": {
                    "en": "• Strict NWB x 6–8 weeks, progressive weight-bearing as tolerated at 8 weeks",
                    "th": "• ห้ามลงน้ำหนัก 6–8 สัปดาห์แรก แล้วเริ่มฝึกเดินลงน้ำหนักเพิ่มขึ้นที่ 8 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Late collapse and medial drift of the anterior dome in osteoporotic bone",
                    "th": "• ระวังกระดูกยุบตัวและหัวกระดูกสะโพกเลื่อนเข้าในตามหลังในผู้ป่วยกระดูกพรุน"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Displaced anterior column fracture (step-off ≥2mm)\n• High anterior column involving the weight-bearing roof arc\n• Associated quadrilateral plate medial displacement",
                    "th": "• รอยหักเสาหน้าเคลื่อนตัว (Step-off ≥2 มม.)\n• รอยหักเสาหน้าส่วนบนที่ตัดผ่านโดมรับน้ำหนัก\n• ผนังกระดูก Quadrilateral plate ยุบเลื่อนตัวเข้าด้านใน"
                  },
                  "method": {
                    "en": "• ORIF via Ilioinguinal (First and Second windows) or Modified Stoppa approach\n• Long 3.5mm pelvic reconstruction plate contoured along pelvic brim from pubic tubercle to inner iliac fossa\n• Supplemental lag screws for high iliac wing fracture components",
                    "th": "• ผ่าตัด ORIF ผ่านทางเข้า Ilioinguinal หรือ Modified Stoppa approach\n• ดามแผ่นเหล็กยาว 3.5mm Pelvic reconstruction plate ตามแนวขอบเชิงกราน (Pelvic brim) จาก Pubic tubercle ขึ้นไปถึงปีกสะโพกด้านใน\n• ใส่สกรู Lag screw ยึดปีกกระดูก Iliac wing เพิ่มเติม"
                  },
                  "rehabilitation": {
                    "en": "• Touch-down weight bearing (TDWB) x 8 weeks, advance to full WB at 12 weeks",
                    "th": "• แตะเท้าลงน้ำหนักบางส่วน 8 สัปดาห์ แล้วเริ่มลงน้ำหนักเต็มที่เมื่อครบ 12 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Corona mortis anastomosis (anastomotic connection between external iliac and obturator vessels) must be identified and clipped/ligated over superior pubic ramus",
                    "th": "• ต้องระวังและผูก/หนีบคลิปหลอดเลือด Corona mortis ที่พาดข้ามกระดูก Superior pubic ramus เสมอเพื่อป้องกันเลือดออกรุนแรง"
                  }
                }
              },
              "illustrationId": "/images/acetabulum/anterior_column.png",
              "xrayDescription": {
                "en": "Complete disruption of iliopectineal line extending to iliac crest on AP and Obturator Oblique views.",
                "th": "แนวเส้น Iliopectineal line ขาดออกจากกันสมบูรณ์ขึ้นไปถึงปีกสะโพกในท่า AP และ Obturator Oblique"
              }
            },
            {
              "type": "Transverse",
              "name": {
                "en": "Transverse Acetabular Fracture (Elementary #5)",
                "th": "5. Transverse (หักแนวขวางตัดผ่านเบ้าสะโพก - Elementary)"
              },
              "description": {
                "en": "Elementary Type 5: Horizontal fracture dividing acetabulum into superior (iliac) and inferior (ischial/pubic) halves\nDisrupts BOTH iliopectineal and ilioischial lines\nObturator foramen remains INTACT\nArticular weight-bearing dome is divided",
                "th": "รูปแบบพื้นฐานที่ 5: รอยหักแนวขวางแบ่งเบ้าสะโพกออกเป็นครึ่งบนและครึ่งล่าง\nทำให้แนวเส้น Iliopectineal และ Ilioischial ขาดออกจากกันทั้งสองเส้น\nช่อง Obturator foramen ยังคงสมบูรณ์ไม่แตก\nผิวข้อต่อรับน้ำหนักส่วนหลังคาถูกตัดขาดครึ่ง"
              },
              "moi": {
                "en": "Direct blow to the lateral trochanter with hip in neutral position.",
                "th": "แรงกระแทกโดยตรงเข้าที่ปุ่มสะโพกด้านข้างขณะข้อสะโพกอยู่ในท่าปกติ"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Divides both columns horizontally separating weight-bearing dome from lower ischiopubic segment; requires anatomic reduction of both anterior and posterior pillars.",
                  "th": "รอยหักขวางตัดผ่านทั้งสองเสาแยกโดมรับน้ำหนักออกจากส่วนล่าง ต้องผ่าตัดจัดกระดูกและดามแผ่นเหล็กเพื่อยึดคืนความมั่นคงของทั้งเสาหน้าและเสาหลัง"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Truly non-displaced (<2mm displacement)\n• Infratectal or transtectal fracture with intact roof arc angle (>45° on all 3 Judet views)\n• Congruent joint in traction or weight-bearing simulation",
                    "th": "• รอยหักไม่เคลื่อนตัว (<2 มม.)\n• มุมหลังคาเบ้าสะโพกสมบูรณ์ดี (Roof arc >45° ครบทั้ง 3 ท่า Judet views)\n• ผิวข้อต่อเรียบสนิท"
                  },
                  "method": {
                    "en": "• Strict non-weight bearing ambulation with crutches\n• Serial weekly AP and Judet radiographs for the first 3 weeks to monitor against displacement",
                    "th": "• ใช้ไม้ค้ำยันโดยห้ามลงน้ำหนักเด็ดขาด\n• ถ่ายภาพ X-ray ติดตามทุกสัปดาห์ในช่วง 3 สัปดาห์แรกเพื่อเฝ้าระวังการเคลื่อนตัว"
                  },
                  "rehabilitation": {
                    "en": "• Strict NWB x 6–8 weeks, progressive weight bearing from 8–12 weeks",
                    "th": "• ห้ามลงน้ำหนัก 6–8 สัปดาห์แรก แล้วเริ่มลงน้ำหนักบางส่วนที่ 8–12 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Rotational mismatch between superior and inferior halves causing early post-traumatic arthritis",
                    "th": "• การหมิดเบี้ยวเหลื่อมกันระหว่างชิ้นบนและชิ้นล่างทำให้ข้อสะโพกเสื่อมเร็ว"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Juxtatectal or transtectal transverse fracture with step-off ≥2mm\n• Femoral head subluxation or joint incongruity\n• Roof arc angle <45° on any plain Judet view",
                    "th": "• รอยหักตัดผ่านโดมรับน้ำหนัก (Transtectal/Juxtatectal) ที่เคลื่อนตัว ≥2 มม.\n• ข้อสะโพกหลุดหลวม หรือมุมหลังคาเบ้าสะโพก <45°"
                  },
                  "method": {
                    "en": "• ORIF via Kocher-Langenbeck (if posterior displacement dominates) or Stoppa/Ilioinguinal (if anterior displacement dominates)\n• Anatomic reduction with Jungbluth / pelvic reduction clamps\n• Posterior column 3.5mm reconstruction plate spanning ischium to ilium + anterior column lag screw (or dual plating)",
                    "th": "• ผ่าตัด ORIF ผ่านทางเข้า Kocher-Langenbeck (หากเสาหลังเคลื่อนเด่น) หรือ Stoppa (หากเสาหน้าเคลื่อนเด่น)\n• ดึงจัดกระดูกเข้าที่ด้วยแคลมป์ Jungbluth\n• ดามแผ่นเหล็ก 3.5mm Reconstruction plate ที่เสาหลังร่วมกับใส่สกรู Lag screw ยึดเสาหน้า"
                  },
                  "rehabilitation": {
                    "en": "• Touch-down weight bearing (TDWB) x 8–10 weeks, progressive WB upon radiographic union at 10–12 weeks",
                    "th": "• แตะเท้าลงน้ำหนักบางส่วน 8–10 สัปดาห์ แล้วเริ่มลงน้ำหนักเต็มที่เมื่อกระดูกติดสนิท"
                  },
                  "pitfalls": {
                    "en": "• Inadequate reduction of one column while fixing the other (inter-column rotational step-off)\n• Sciatic nerve neuropraxia with posterior approach",
                    "th": "• การจัดกระดูกเสาหนึ่งเข้าที่แต่อีกเสาหนึ่งยังบิดเหลื่อมอยู่ (Inter-column step-off)\n• การบาดเจ็บต่อเส้นประสาท Sciatic ในทางเข้าด้านหลัง"
                  }
                }
              },
              "illustrationId": "/images/acetabulum/transverse.png",
              "xrayDescription": {
                "en": "Horizontal fracture line crossing both anterior and posterior columns on AP and both Judet oblique views.",
                "th": "รอยหักแนวขวางพาดตัดผ่านทั้งเสาหน้าและเสาหลังในท่า AP และ Judet Oblique ทั้งสองท่า"
              }
            },
            {
              "type": "T-Shaped",
              "name": {
                "en": "T-Shaped Fracture (Associated #1)",
                "th": "6. T-Shaped (หักแนวขวางร่วมกับแนวดิ่ง - Associated)"
              },
              "description": {
                "en": "Associated Type 1: Transverse fracture line combined with a vertical stem fracture\nVertical stem extends inferiorly into the obturator foramen\nDisrupts iliopectineal line, ilioischial line, AND obturator ring\nSeparates ischial and pubic rami from each other",
                "th": "รูปแบบซับซ้อนที่ 1: รอยหักแนวขวางตัดผ่านเบ้าสะโพก ร่วมกับรอยหักแนวตั้งชี้ลงด้านล่างเป็นรูปตัว T\nแนวดิ่งพาดผ่านลงไปตัดช่อง Obturator foramen\nทำให้เส้น Iliopectineal, Ilioischial และวง Obturator foramen ขาดทั้งหมด\nชิ้นส่วนกระดูก Ischium และ Pubis แยกออกจากกันอย่างสิ้นเชิง"
              },
              "moi": {
                "en": "Direct lateral force on trochanter with hip flexed or neutral.",
                "th": "แรงกระแทกด้านข้างเข้าที่ปุ่มสะโพกขณะงอหรือเหยียดสะโพก"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Transverse fracture combined with vertical stem dividing anterior and posterior ischiopubic segments; high complexity requiring multi-column stabilization.",
                  "th": "รอยหักขวางร่วมกับแนวดิ่งแยกชิ้นกระดูกเสาหน้าและเสาหลังออกจากกันอย่างสิ้นเชิง การผ่าตัดต้องจัดยึดทีละเสาเพื่อดึงเบ้าสะโพกกลับมาประกบกัน"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Non-viable for non-operative care; reserved strictly for moribund patients unfit for anesthesia",
                    "th": "• ไม่แนะนำอย่างยิ่ง สงวนไว้เฉพาะผู้ป่วยวิกฤตที่ไม่สามารถทนต่อการดมยาสลบได้"
                  },
                  "method": {
                    "en": "• Prolonged bed rest with skeletal traction (high morbidity and joint failure)",
                    "th": "• นอนพักบนเตียงและดึงถ่วงน้ำหนัก (เสี่ยงต่อข้อสะโพกพังทลายสูง)"
                  },
                  "rehabilitation": {
                    "en": "• Wheelchair mobility x 10–12 weeks; very poor functional outcomes",
                    "th": "• เคลื่อนไหวบนรถเข็น 10–12 สัปดาห์ ผลการรักษามักมีข้อสะโพกเสื่อมรุนแรง"
                  },
                  "pitfalls": {
                    "en": "• High nonunion rate, persistent column dissociation, and rapid destructive osteoarthritis",
                    "th": "• กระดูกไม่ติด เสากระดูกแยกจากกันถาวร และเกิดข้อสะโพกเสื่อมรวดเร็ว"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All displaced T-shaped acetabular fractures\n• Articular step-off ≥2mm or obturator ring displacement\n• Rotational column dissociation",
                    "th": "• รอยหักรูปตัว T ที่มีการเคลื่อนตัวทุกราย\n• ผิวข้อต่อเหลื่อม ≥2 มม. หรือวง Obturator foramen เคลื่อนตัว\n• เสาหน้าและเสาหลังบิดหมุนแยกจากกัน"
                  },
                  "method": {
                    "en": "• ORIF via Kocher-Langenbeck, Modified Stoppa, or combined dual anterior-posterior approaches\n• Sequential reduction: Anatomic reduction and fixation of transverse line first, followed by reduction and rigid fixation of vertical stem across obturator ring and columns",
                    "th": "• ผ่าตัด ORIF ผ่านทางเข้า Kocher-Langenbeck, Modified Stoppa หรือเปิดสองทางหน้า-หลัง\n• จัดกระดูกเป็นลำดับขั้นตอน: จัดยึดรอยหักขวางก่อน แล้วจึงจัดยึดรอยหักแนวดิ่งรูปตัว T ให้แนบสนิท"
                  },
                  "rehabilitation": {
                    "en": "• Strict non-weight bearing (NWB) x 10–12 weeks\n• In-bed active-assisted hip ROM exercises",
                    "th": "• ห้ามลงน้ำหนักเด็ดขาด 10–12 สัปดาห์\n• ฝึกบริหารขยับข้อสะโพกบนเตียงเพื่อป้องกันข้อติด"
                  },
                  "pitfalls": {
                    "en": "• Dual approach significantly increases Heterotopic Ossification (HO) risk (prescribe Indomethacin or single-dose radiation prophylaxis)",
                    "th": "• การเปิดแผลสองทางเพิ่มความเสี่ยงต่อการเกิดกระดูกงอกผิดที่ (Heterotopic Ossification) ต้องให้ยา Indomethacin ป้องกัน"
                  }
                }
              },
              "illustrationId": "/images/acetabulum/t_shaped.png",
              "xrayDescription": {
                "en": "Transverse fracture pattern on AP view with vertical fracture line splitting the obturator foramen.",
                "th": "เห็นแนวกระดูกหักขวาง ร่วมกับแนวหักตั้งแยกช่อง Obturator foramen ออกเป็นสองฝั่ง"
              }
            },
            {
              "type": "Posterior Column + Wall",
              "name": {
                "en": "Posterior Column + Posterior Wall (Associated #2)",
                "th": "7. Posterior Column + Posterior Wall (Associated)"
              },
              "description": {
                "en": "Associated Type 2: Combined posterior column vertical fracture AND posterior wall rim fracture\nHigh rate of posterior hip dislocation and sciatic nerve injury\nEntire posterior support of acetabulum is lost",
                "th": "รูปแบบซับซ้อนที่ 2: รอยหักแนวตั้งของเสาหลัง ร่วมกับผนังหลังเบ้าสะโพกแตกกะเทาะหลุดออก\nเสี่ยงสูงมากต่อข้อสะโพกหลุดไปด้านหลัง และการบาดเจ็บของเส้นประสาท Sciatic\nโครงสร้างรับแรงด้านหลังของเบ้าสะโพกทั้งหมดสูญเสียไปอย่างสิ้นเชิง"
              },
              "moi": {
                "en": "Severe dashboard impact with flexed and adducted hip.",
                "th": "การกระแทกหน้ารถยนต์อย่างรุนแรงขณะนั่งงอและหุบขา"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Complete loss of posterior hip support with high sciatic nerve vulnerability; urgent closed reduction and dual-component rigid column + buttress plate fixation via Kocher-Langenbeck.",
                  "th": "โครงสร้างรับแรงด้านหลังสูญเสียทั้งหมดและเสี่ยงต่อเส้นประสาท Sciatic ต้องดึงจัดข้อสะโพกฉุกเฉินและผ่าตัดยึดทั้งเสาหลังและผนังหลังผ่านทางเข้าด้านหลัง"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly CONTRAINDICATED (Extremely unstable hip with persistent dislocation risk)",
                    "th": "• ห้ามใช้วิธีนี้เด็ดขาด (ข้อสะโพกไม่มั่นคงอย่างยิ่งและจะหลุดซ้ำทันที)"
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
                    "en": "• Chronic posterior hip dislocation, rapid femoral head avascular necrosis (AVN), and permanent sciatic nerve palsy",
                    "th": "• ข้อสะโพกหลุดค้างถาวร หัวกระดูกสะโพกขาดเลือดตาย (AVN) และเส้นประสาท Sciatic เป็นอัมพาต"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Combined posterior column vertical fracture and posterior wall rim fracture\n• Posterior hip dislocation / subluxation\n• Articular comminution and marginal impaction",
                    "th": "• รอยหักเสาหลังร่วมกับผนังหลังแตกกะเทาะ\n• ข้อสะโพกหลุดไปด้านหลัง\n• ผิวกระดูกอ่อนแตกร่วนหรือยุบตัว (Marginal impaction)"
                  },
                  "method": {
                    "en": "• Immediate closed hip reduction in ER under sedation\n• Definitive ORIF via Kocher-Langenbeck approach\n• Step 1: Anatomic reduction and buttressing of posterior column with 3.5mm reconstruction plate\n• Step 2: Elevation of impacted articular cartilage with bone grafting, followed by posterior wall mini-screws and secondary spring/buttress plate",
                    "th": "• ดึงจัดข้อสะโพกที่หลุดเข้าที่ฉุกเฉินใน ER ทันที\n• ผ่าตัด ORIF ผ่านทางเข้าด้านหลัง Kocher-Langenbeck\n• ขั้นตอนที่ 1: จัดกระดูกเสาหลังให้เข้าที่แล้วดามด้วยแผ่นเหล็ก 3.5mm Reconstruction plate\n• ขั้นตอนที่ 2: งัดผิวกระดูกอ่อนที่ยุบตัวขึ้นมา ปลูกกระดูกเทียม แล้วยึดผนังหลังด้วย Spring plate / สกรู"
                  },
                  "rehabilitation": {
                    "en": "• Touch-down weight bearing (TDWB) x 8–10 weeks; strictly avoid hip flexion >90° and adduction\n• Advance to partial WB at 10 weeks, full WB at 12 weeks",
                    "th": "• แตะเท้าลงน้ำหนักบางส่วน 8–10 สัปดาห์ หลีกเลี่ยงท่างอสะโพกเกิน 90 องศาและหุบขา\n• เริ่มลงน้ำหนักเพิ่มขึ้นที่ 10 สัปดาห์ และลงน้ำหนักเต็มที่เมื่อครบ 12 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Sciatic nerve injury (monitor peroneal division throughout exposure; keep knee flexed)\n• Intra-articular screw penetration through wall fragments",
                    "th": "• ระวังเส้นประสาท Sciatic ชอกช้ำ (ต้องงอเข่าเพื่อหย่อนเส้นประสาทตลอดเวลา)\n• ระวังสกรูทิ่มทะลุเข้าในช่องข้อสะโพก"
                  }
                }
              },
              "illustrationId": "/images/acetabulum/post_column_wall.png",
              "xrayDescription": {
                "en": "Ilioischial line disruption combined with displaced posterior wall fragment on AP and Obturator Oblique views.",
                "th": "แนวเส้น Ilioischial line ขาด ร่วมกับชิ้นกระดูกผนังหลังเคลื่อนตัวในท่า AP และ Obturator Oblique"
              }
            },
            {
              "type": "Transverse + Posterior Wall",
              "name": {
                "en": "Transverse + Posterior Wall (Associated #3)",
                "th": "8. Transverse + Posterior Wall (Associated)"
              },
              "description": {
                "en": "Associated Type 3: Transverse acetabular fracture combined with a posterior wall rim fracture\nVery common associated pattern (~20% of acetabular fractures)\nDisrupts iliopectineal, ilioischial, and posterior wall rim lines\nHigh risk of hip instability and post-traumatic arthritis",
                "th": "รูปแบบซับซ้อนที่ 3: รอยหักแนวขวางตัดผ่านเบ้าสะโพก ร่วมกับผนังหลังเบ้าสะโพกแตกกะเทาะ\nเป็นชนิดซับซ้อนที่พบบ่อยมาก (~20% ของเบ้าสะโพกหักทั้งหมด)\nทำให้เส้น Iliopectineal, Ilioischial และขอบผนังหลังขาดออกจากกันทั้งหมด\nเสี่ยงสูงต่อข้อสะโพกหลุดหลวมและข้อเสื่อม"
              },
              "moi": {
                "en": "High-energy direct lateral trochanteric impact.",
                "th": "แรงกระแทกด้านข้างพลังงานสูงเข้าที่ปุ่มสะโพก"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "High-energy combination of 2-column transverse line and posterior wall detachment; commonest associated pattern requiring precise columnar and rim fixation.",
                  "th": "รูปแบบซับซ้อนที่พบบ่อยที่สุด รอยหักขวางทั้งสองเสาร่วมกับผนังหลังแตกหลุด ต้องผ่าตัดจัดยึดรอยหักขวางให้มั่นคงก่อนแล้วดามผนังหลังด้วย Buttress plate"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly CONTRAINDICATED (Severe joint incongruity with persistent posterior subluxation)",
                    "th": "• ห้ามใช้วิธีนี้เด็ดขาด (ผิวข้อเหลื่อมรุนแรงและข้อสะโพกไม่มั่นคง)"
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
                    "en": "• Rapid post-traumatic joint destruction and femoral head chondrolysis",
                    "th": "• ข้อสะโพกเสื่อมพังทลายอย่างรวดเร็วและการตายของผิวกระดูกอ่อน"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Transverse acetabular fracture with detached posterior wall\n• Articular step-off ≥2mm or posterior hip subluxation\n• Incarcerated intra-articular fragments",
                    "th": "• รอยหักแนวขวางร่วมกับผนังหลังเบ้าสะโพกแตกหลุด\n• ผิวข้อต่อเหลื่อม ≥2 มม. หรือข้อสะโพกหลุดหลวม\n• มีเศษกระดูกหลุดค้างในช่องข้อ"
                  },
                  "method": {
                    "en": "• ORIF via Kocher-Langenbeck approach (or combined dual approaches if anterior column displaced)\n• Anatomic reduction and stabilization of transverse column fracture with 3.5mm reconstruction plate\n• Elevation of marginal impaction, bone grafting, and rigid buttress plating of the posterior wall",
                    "th": "• ผ่าตัด ORIF ผ่านทางเข้าด้านหลัง Kocher-Langenbeck\n• จัดรอยหักขวางให้เข้าที่และดามแผ่นเหล็ก 3.5mm Reconstruction plate ที่เสาหลังก่อน\n• งัดผิวกระดูกอ่อนที่ยุบตัว ปลูกกระดูก และดามผนังหลังด้วยแผ่นเหล็ก Buttress plate"
                  },
                  "rehabilitation": {
                    "en": "• Strict non-weight bearing (NWB) x 8–10 weeks, progressive weight-bearing at 10–12 weeks upon union",
                    "th": "• ห้ามลงน้ำหนัก 8–10 สัปดาห์ แล้วเริ่มฝึกเดินลงน้ำหนักเพิ่มขึ้นที่ 10–12 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• High risk of heterotopic ossification (prescribe Indomethacin or single-dose radiation prophylaxis)\n• Sciatic nerve stretching during long retracting maneuvers",
                    "th": "• เสี่ยงต่อการเกิดกระดูกงอกผิดที่ (Heterotopic ossification) สูงมาก ต้องให้ยาป้องกัน\n• ระวังเส้นประสาท Sciatic ถูกดึงรั้งนานเกินไป"
                  }
                }
              },
              "illustrationId": "/images/acetabulum/transverse_post_wall.png",
              "xrayDescription": {
                "en": "Horizontal transverse fracture line crossing both columns plus separate posterior wall fragment on Judet views.",
                "th": "รอยหักขวางพาดตัดทั้งสองเสา ร่วมกับชิ้นกระดูกผนังหลังแยกหลุดในท่า Judet Oblique"
              }
            },
            {
              "type": "Anterior + Posterior Hemitransverse",
              "name": {
                "en": "Anterior Column/Wall + Posterior Hemitransverse (Associated #4)",
                "th": "9. Anterior + Posterior Hemitransverse (Associated)"
              },
              "description": {
                "en": "Associated Type 4: High anterior column/wall fracture combined with a horizontal posterior hemitransverse fracture line\nPosterior fracture line is lower and strictly transverse through the posterior column\nDisrupts iliopectineal line and posterior ilioischial line",
                "th": "รูปแบบซับซ้อนที่ 4: รอยหักเสาหน้า/ผนังหน้าส่วนบน ร่วมกับรอยหักครึ่งแนวขวางด้านหลัง (Posterior hemitransverse)\nแนวกระดูกหักด้านหลังจะต่ำกว่าและพาดขวางเฉพาะเสาหลังเท่านั้น\nทำให้เส้น Iliopectineal และเส้น Ilioischial ช่วงล่างขาด"
              },
              "moi": {
                "en": "Direct blow to front of extended and externally rotated hip in elderly patients.",
                "th": "แรงกระแทกเข้าด้านหน้าสะโพกขณะเหยียดและหมุนออก มักพบในผู้สูงอายุ"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "High anterior column/wall fracture with low posterior hemitransverse line; frequent in elderly osteoporotic falls, fixed via anterior approach with quadrilateral plate buttressing.",
                  "th": "รอยหักเสาหน้าส่วนบนร่วมกับรอยหักขวางเสาหลังส่วนล่าง พบบ่อยในผู้สูงอายุหกล้ม ผ่าตัดยึดแผ่นเหล็กทางด้านหน้าพร้อมดามผนัง Quadrilateral plate"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Non-displaced fracture (<2mm displacement) with intact weight-bearing dome in low-demand elderly patients\n• Congruent hip joint without medial subluxation",
                    "th": "• รอยหักไม่เคลื่อนตัว (<2 มม.) และโดมรับน้ำหนักสมบูรณ์ในผู้สูงอายุที่กิจกรรมน้อย\n• ข้อสะโพกเรียบสนิทและหัวกระดูกไม่เลื่อนหลุดเข้าด้านใน"
                  },
                  "method": {
                    "en": "• Protected weight-bearing as tolerated (WBAT) with walker and close radiographic monitoring",
                    "th": "• ฝึกเดินลงน้ำหนักเท่าที่ทนได้ด้วย Walker และติดตามภาพถ่ายรังสีอย่างใกล้ชิด"
                  },
                  "rehabilitation": {
                    "en": "• Early out-of-bed mobilization; serial radiographs at 1, 3, and 6 weeks to rule out medial dome migration",
                    "th": "• ลุกออกจากเตียงแต่เนิ่นๆ ตรวจ X-ray ติดตามที่ 1, 3 และ 6 สัปดาห์เพื่อเฝ้าระวังเบ้าสะโพกยุบเข้าใน"
                  },
                  "pitfalls": {
                    "en": "• Secondary central/medial migration of femoral head through a comminuted quadrilateral plate",
                    "th": "• ระวังหัวกระดูกสะโพกเลื่อนทะลุผ่านผนัง Quadrilateral plate เข้าในเชิงกราน (Central dislocation)"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Displaced anterior column with quadrilateral plate medial subluxation (central hip subluxation)\n• Step-off ≥2mm in the weight-bearing dome\n• Incongruent joint in active patients",
                    "th": "• รอยหักเสาหน้าเคลื่อนตัวร่วมกับผนัง Quadrilateral plate ยุบตัวเข้าใน\n• ผิวข้อส่วนโดมรับน้ำหนักเหลื่อม ≥2 มม.\n• ข้อสะโพกไม่เรียบสนิทในผู้ป่วยที่ยังเคลื่อนไหวทำงาน"
                  },
                  "method": {
                    "en": "• ORIF via Modified Stoppa or Ilioinguinal approach\n• Pelvic brim 3.5mm reconstruction plate + Infrapectineal quadrilateral surface buttress plate\n• Retrograde posterior column lag screw placed from pelvic brim\n• Primary Total Hip Arthroplasty (THA) with porous trabecular metal cup in elderly osteoporotic comminution",
                    "th": "• ผ่าตัด ORIF ผ่านทางเข้า Modified Stoppa หรือ Ilioinguinal\n• ดามแผ่นเหล็ก Pelvic brim 3.5mm ร่วมกับ Infrapectineal quadrilateral plate เพื่อดามผนังด้านใน\n• ใส่สกรู Lag screw ย้อนไปยึดเสาหลัง\n• พิจารณาผ่าตัดเปลี่ยนข้อสะโพกเทียม (Primary THA) ร่วมกับเบ้าโลหะพิเศษในผู้สูงอายุกระดูกพรุนแตกละเอียด"
                  },
                  "rehabilitation": {
                    "en": "• Touch-down weight bearing (TDWB) x 6–8 weeks (or immediate WBAT if primary THA performed)\n• Progressive weight bearing to full WB at 10–12 weeks",
                    "th": "• แตะเท้าลงน้ำหนักบางส่วน 6–8 สัปดาห์ (หรือเริ่มลงน้ำหนักได้ทันทีหากทำผ่าตัดเปลี่ยนข้อสะโพกเทียม THA)\n• เริ่มลงน้ำหนักเต็มที่เมื่อครบ 10–12 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Corona mortis vascular hemorrhage during Stoppa approach (must ligate before subperiosteal dissection)\n• Medial protrusio if quadrilateral plate is under-buttressed",
                    "th": "• เสี่ยงต่อหลอดเลือด Corona mortis ฉีกขาดเลือดออกมาก ต้องตรวจหาและผูกเส้นเลือดนี้ก่อนเสมอ\n• ระวังเบ้าสะโพกยุบเข้าด้านในหากไม่ดามผนัง Quadrilateral plate ให้แข็งแรงพอ"
                  }
                }
              },
              "illustrationId": "/images/acetabulum/ant_post_hemitransverse.png",
              "xrayDescription": {
                "en": "High anterior column line extending to iliac crest with low horizontal fracture line crossing only the posterior column on Judet views.",
                "th": "แนวหักเสาหน้าขึ้นสูงถึงปีกสะโพก ร่วมกับแนวหักขวางต่ำพาดผ่านเฉพาะเสาหลังในท่า Judet views"
              }
            },
            {
              "type": "Both Columns",
              "name": {
                "en": "Both Columns Fracture (Associated #5)",
                "th": "10. Both Columns (หักทั้งสองเสา - Floating Acetabulum / Associated)"
              },
              "description": {
                "en": "Associated Type 5: Most severe acetabular fracture pattern\nALL articular facets are completely disconnected from the posterior ilium (Floating Acetabulum)\nDisrupts iliopectineal line, ilioischial line, AND obturator foramen\nPathognomonic 'Spur Sign' visible on Iliac Oblique view",
                "th": "รูปแบบซับซ้อนที่ 5: รอยหักเบ้าสะโพกรุนแรงที่สุด\nผิวข้อต่อทั้งหมดหลุดแยกออกจากกระดูก Ilium ด้านหลังอย่างสิ้นเชิง (Floating Acetabulum)\nทำให้เส้น Iliopectineal, Ilioischial และช่อง Obturator foramen ขาดแตกทั้งหมด\nลักษณะเฉพาะคือพบ 'Spur Sign' ชัดเจนในท่า Iliac Oblique View"
              },
              "moi": {
                "en": "Extreme high-energy direct lateral compression or high-speed vehicle crash.",
                "th": "แรงกระแทกด้านข้างพลังงานสูงรุนแรงสุดขีด หรืออุบัติเหตุชนความเร็วสูง"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Complete detachment of entire articular surface from ilium ('Spur Sign'); floating acetabulum requires multi-column reconstruction or secondary congruence assessment.",
                  "th": "ผิวข้อเบ้าสะโพกทั้งหมดหลุดแยกเป็นอิสระจากเชิงกราน (พบ 'Spur Sign') ต้องผ่าตัดจัดยึดคืนรูปเสากระดูกหลายแนว หรือประเมินภาวะข้อสมานเข้ากันได้ทุติยภูมิ (Secondary Congruence)"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• 'Secondary Congruence' on 3 Judet views where femoral head and comminuted roof remain symmetrically centered in elderly low-demand patients\n• Patient medically unfit for major pelvic surgery",
                    "th": "• พบภาวะ 'Secondary Congruence' ใน Judet views 3 ท่า โดยหัวกระดูกและเบ้าที่แตกร่วนยังโอบกระชับสมมาตรกันพอดีในผู้สูงอายุที่กิจกรรมน้อย\n• ผู้ป่วยที่มีโรคร่วมรุนแรงจนไม่สามารถทนการผ่าตัดใหญ่ได้"
                  },
                  "method": {
                    "en": "• Bed rest with skeletal traction for 2–3 weeks, followed by gentle protected mobilization",
                    "th": "• นอนพักบนเตียงและดึงถ่วงน้ำหนัก 2–3 สัปดาห์แรก แล้วเริ่มฝึกขยับตัวช้าๆ"
                  },
                  "rehabilitation": {
                    "en": "• Wheelchair mobility x 6–8 weeks, progressive weight-bearing as tolerated at 8–12 weeks",
                    "th": "• เคลื่อนไหวบนรถเข็น 6–8 สัปดาห์ แล้วจึงเริ่มฝึกเดินลงน้ำหนักเพิ่มขึ้นที่ 8–12 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Rapid painful joint degeneration if secondary congruence is false or lost during weight-bearing",
                    "th": "• เกิดข้อสะโพกเสื่อมปวดรุนแรงหากข้อไม่ได้สมานเข้ากันได้จริง (False secondary congruence)"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All active patients with Both-Column fracture (Floating Acetabulum)\n• Displaced columns (step-off ≥2mm) without secondary congruence\n• Pathognomonic 'Spur Sign' on iliac oblique view",
                    "th": "• ผู้ป่วยที่มีกิจกรรมทั่วไปทุกรายที่มีรอยหัก Both-Column (Floating Acetabulum)\n• เสากระดูกเคลื่อนตัว (Step-off ≥2 มม.) และไม่มี Secondary congruence\n• พบลักษณะ 'Spur Sign' ในท่า Iliac Oblique view"
                  },
                  "method": {
                    "en": "• High-complexity ORIF via Anterior approach (Ilioinguinal or Modified Stoppa) or Combined dual approaches\n• Stepwise reconstruction: (1) Iliac wing reduction, (2) Anterior column reconstruction to ilium, (3) Posterior column reduction to anterior column\n• Multiple 3.5mm pelvic reconstruction plates spanning iliac crest, pelvic brim, and quadrilateral plate",
                    "th": "• ผ่าตัด ORIF ความซับซ้อนสูงผ่านทางเข้าด้านหน้า (Ilioinguinal หรือ Modified Stoppa) หรือเปิดสองทางหน้า-หลัง\n• ขั้นตอนการจัดกระดูก: (1) จัดปีกสะโพก Iliac wing ให้เข้าที่, (2) ยึดเสาหน้าเข้ากับปีกสะโพก, (3) จัดเสาหลังเข้าประกบกับเสาหน้า\n• ดามด้วยแผ่นเหล็ก 3.5mm Reconstruction plates หลายแผ่นตามแนว Iliac crest, Pelvic brim และ Quadrilateral plate"
                  },
                  "rehabilitation": {
                    "en": "• Strict non-weight bearing on operative side x 10–12 weeks\n• Supervised physical therapy for gentle passive hip ROM and gait retraining",
                    "th": "• ห้ามลงน้ำหนักบนขาข้างที่ผ่าตัดเด็ดขาด 10–12 สัปดาห์\n• ฝึกกายภาพบำบัดขยับข้อสะโพกและฝึกเดินด้วยอุปกรณ์ช่วยเดิน"
                  },
                  "pitfalls": {
                    "en": "• High intraoperative blood loss during deep pelvic exposure\n• Fixation failure if screws fail to gain purchase into dense sciatic buttress bone",
                    "th": "• เสี่ยงต่อการเสียเลือดมากระหว่างผ่าตัดลึกในเชิงกราน\n• การยึดตรึงหลุดล้มเหลวหากสกรูไม่สามารถยึดเข้ากับกระดูกเนื้อแน่นบริเวณ Sciatic buttress"
                  }
                }
              },
              "illustrationId": "/images/acetabulum/both_columns.png",
              "xrayDescription": {
                "en": "Total disruption of all pelvic lines with characteristic 'Spur Sign' (posterior iliac spine fragment) visible on Iliac Oblique view.",
                "th": "แนวเส้นเชิงกรานทั้งหมดขาดออกจากกัน พบ 'Spur Sign' ชัดเจน (ชิ้นกระดูกปีกสะโพกด้านหลังยื่นออกมา) ในท่า Iliac Oblique"
              }
            }
          ]
        }
      ]
    }
  ]
};
