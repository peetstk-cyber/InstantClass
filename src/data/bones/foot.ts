import type { BoneData } from "../../types";

export const footBone: BoneData = {
  "id": "foot",
  "name": {
    "en": "Foot",
    "th": "กระดูกเท้า"
  },
  "description": {
    "en": "Foot bones",
    "th": "กระดูกเท้า"
  },
  "pediatric": false,
  "regions": [
    {
      "id": "talus",
      "name": {
        "en": "Talus (Talar Neck)",
        "th": "กระดูกทาเลส / คอทาเลส (Talus)"
      },
      "regionConcept": {
        "physicalExam": [
          {
            "sign": "Talar Neck Point Tenderness",
            "positive": {
              "en": "Exquisite pain localized over sinus tarsi and anterior talar neck on deep palpation",
              "th": "เจ็บจี๊ดรุนแรงเฉพาะจุดบริเวณ Sinus tarsi และคอกระดูก Talus ด้านหน้าเมื่อกดตรวจ"
            }
          },
          {
            "sign": "Skin Blanching & Tenting Assessment",
            "positive": {
              "en": "Pale, blanched, or stretched skin over anterior/medial ankle, indicating risk of skin necrosis from displaced talar fragments",
              "th": "ผิวหนังซีดดึงตึงบริเวณหน้าข้อเท้าหรือตาตุ่มด้านใน แสดงถึงความเสี่ยงผิวหนังเน่าตายจากชิ้นกระดูกคอ/ตัวทาเลสดัน"
            }
          }
        ],
        "redFlags": [
          {
            "en": "Avascular Necrosis (AVN) of Talar Body: Risk reaches 80-100% in Hawkins III and IV fractures due to disrupted retrograde arterial blood supply",
            "th": "ภาวะหัวกระดูกทาเลสตายจากการขาดเลือด (AVN): ความเสี่ยงสูงถึง 80-100% ใน Hawkins III และ IV จากการทำลายเส้นเลือดเลี้ยงย้อนกลับ"
          },
          {
            "en": "Skin Necrosis & Impending Open Fracture: Displaced talar neck fragments cause pressure necrosis; requires emergency reduction to relieve skin tension",
            "th": "ผิวหนังเน่าตายและกระดูกทะลุกลายเป็นแผลเปิด: ชิ้นกระดูกเคลื่อนกดทับผิวหนัง ต้องทำการดึงจัดข้อเข้าที่ด่วนฉุกเฉิน"
          }
        ],
        "clinicalPearls": [
          {
            "en": "Canale view X-ray (15° internal rotation, 15° cephalic tilt) is essential to evaluate talar neck alignment and varus deformity without bone overlap.",
            "th": "ภาพเอกซเรย์ท่า Canale view เป็นสิ่งจำเป็นเพื่อดูแนวกระดูกคอทาเลสและมุมเอียง varus โดยไม่มีกระดูกอื่นทับซ้อน"
          },
          {
            "en": "Hawkins sign (subchondral osteopenia visible on AP/Canale view at 6-8 weeks) confirms preserved vascularity and rules out AVN.",
            "th": "Hawkins Sign (รอยบางโปร่งแสงใต้ผิวข้อใน X-ray สัปดาห์ที่ 6-8) ยืนยันว่ากระดูกยังมีเลือดมาเลี้ยงและไม่มีภาวะ AVN"
          },
          {
            "en": "Absence of Hawkins sign indicates subchondral sclerosis and high likelihood of post-traumatic avascular necrosis.",
            "th": "การไม่พบ Hawkins sign (เห็นกระดูกทึบขาว Sclerosis) แสดงถึงโอกาสสูงมากที่จะเกิดภาวะหัวกระดูกตายจากการขาดเลือด"
          }
        ],
        "images": [
          {
            "url": "/images/concepts/talus_lateral_surface.jpg",
            "title": {
              "en": "Talus Lateral Surface & Articular Facets",
              "th": "ผิวกระดูกทาเลสด้านข้างและพื้นผิวข้อต่อ (Lateral Surface)"
            },
            "caption": {
              "en": "Key anatomical landmarks: talar dome (trochlea), lateral process, sulcus tali, neck, and articular facets for distal tibia, lateral malleolus, and navicular. Over 60% of the talus is covered by articular cartilage with no direct muscular or tendinous attachments.",
              "th": "จุดสังเกตสำคัญ: Talar dome, lateral process, sulcus tali, คอกระดูก และผิวข้อต่อกับหน้าแข้ง ตาตุ่มนอก และกระดูก Navicular โดยกว่า 60% ของกระดูกทาเลสถูกคลุมด้วยกระดูกอ่อนข้อและไม่มีกล้ามเนื้อมายึดเกาะโดยตรง"
            }
          },
          {
            "url": "/images/concepts/talus_blood_supply.png",
            "title": {
              "en": "Retrograde Arterial Blood Supply (AO Foundation)",
              "th": "ระบบหลอดเลือดแดงเลี้ยงย้อนกลับของทาเลส (AO Foundation)"
            },
            "caption": {
              "en": "Vascular supply: Artery of tarsal canal (from posterior tibial artery, supplies ~60% of the talar body), artery of sinus tarsi (perforating peroneal), and deltoid branches. Talar neck fractures disrupt this retrograde supply, leading to high AVN risk.",
              "th": "หลอดเลือดเลี้ยงสำคัญ: Artery of tarsal canal (จาก Posterior tibial เลี้ยง ~60% ของตัวกระดูก), Artery of sinus tarsi (จาก Peroneal) และกิ่ง Deltoid รอยหักบริเวณคอทาเลสจะตัดทางเดินเลือดที่วิ่งย้อนกลับ (Retrograde) ทำให้เสี่ยงเกิดภาวะหัวกระดูกตาย (AVN) สูงมาก"
            }
          },
          "/images/concepts/anatomy_talus__talar_neck__3.png"
        ],
        "imageUrl": "/images/concepts/anatomy_talus__talar_neck__3.png"
      },
      "classifications": [
        {
          "system": "Hawkins",
          "fullName": {
            "en": "Hawkins Classification for Talar Neck Fractures",
            "th": "การจำแนกกระดูกคอทาเลสหักแบบ Hawkins"
          },
          "description": {
            "en": "Classification of talar neck fractures based on fracture displacement, subtalar/tibiotalar dislocation, and osteonecrosis (AVN) risk, predicting subchondral clearance (Hawkins sign).",
            "th": "ระบบจำแนกกระดูกคอทาเลส (Talar Neck) หักตามการเคลื่อนตัว การหลุดของข้อ Subtalar/Tibiotalar และความเสี่ยงภาวะหัวกระดูกตายจากการขาดเลือด (AVN) พร้อมการตรวจ Hawkins sign"
          },
          "concept": {
            "title": {
              "en": "Hawkins Talar Neck Clinical Concept",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ Hawkins Classification"
            },
            "imageUrl": "/images/hawkins/hawkins_concept.png",
            "corePrinciple": {
              "en": "Hawkins classifies talar neck fractures based on fracture displacement and dislocation of surrounding joints (subtalar, tibiotalar, talonavicular), directly correlating with retrograde blood supply disruption and avascular necrosis (AVN) risk.",
              "th": "Hawkins จำแนกกระดูกคอทาเลส (Talar Neck) หักตามการเคลื่อนตัวและการหลุดของข้อโดยรอบ (Subtalar, Tibiotalar, Talonavicular) ซึ่งสัมพันธ์โดยตรงกับการทำลายเส้นเลือดเลี้ยงย้อนกลับและความเสี่ยงหัวกระดูกตาย (AVN)"
            },
            "rules": [
              {
                "en": "Type I (Non-displaced, joints intact): AVN risk 0–10%",
                "th": "Type I (ไม่เคลื่อนตัว, ข้อโดยรอบปกติ): เสี่ยง AVN 0–10%"
              },
              {
                "en": "Type II (Displaced + Subtalar dislocation): AVN risk 40–50%",
                "th": "Type II (เคลื่อน + ข้อ Subtalar หลุด): เสี่ยง AVN 40–50%"
              },
              {
                "en": "Type III (Displaced + Subtalar & Tibiotalar dislocation): AVN risk 80–100%",
                "th": "Type III (เคลื่อน + ข้อ Subtalar & Tibiotalar หลุด): เสี่ยง AVN 80–100%"
              },
              {
                "en": "Type IV (Displaced + Subtalar, Tibiotalar & Talonavicular dislocation): AVN risk ~100%",
                "th": "Type IV (เคลื่อน + ข้อหลุดสมบูรณ์ทั้ง 3 ข้อ): เสี่ยง AVN ~100%"
              }
            ],
            "clinicalSignificance": [
              {
                "en": "Type I: Non-operative management with non-weightbearing short leg cast for 8–12 weeks",
                "th": "Type I: รักษาแบบไม่ผ่าตัด ใส่เฝือกสั้นงดลงน้ำหนัก 8–12 สัปดาห์"
              },
              {
                "en": "Type II–IV: Emergency open reduction and rigid internal fixation (ORIF) with screws or mini-plates to restore alignment and preserve residual blood supply",
                "th": "Type II–IV: ผ่าตัดเปิดจัดและดามกระดูกฉุกเฉิน (ORIF) ด้วยสกรูหรือเพลทเล็กเพื่อคืนแนวข้อและรักษาเส้นเลือดที่เหลือ"
              },
              {
                "en": "Hawkins Sign (6–8 weeks post-op): Subchondral osteopenia on AP/Canale view proves intact vascularity and absence of AVN",
                "th": "Hawkins Sign (สัปดาห์ที่ 6–8): รอยโปร่งแสงใต้ผิวข้อ (Subchondral osteopenia) ยืนยันว่ามีเลือดมาเลี้ยงและไม่เกิด AVN"
              },
              {
                "en": "Absence of Hawkins Sign: Sclerotic talar dome indicates AVN; mandatory continued non-weightbearing to prevent structural talar dome collapse",
                "th": "การไม่พบ Hawkins Sign: หัวกระดูกทึบขาว (Sclerotic dome) บ่งบอกภาวะ AVN ต้องสั่งงดลงน้ำหนักต่อเพื่อป้องกันหัวกระดูกทรุดพัง"
              }
            ]
          },
          "investigations": [
            {
              "name": "Canale View (Talar Neck View)",
              "details": {
                "en": "Special 15° internal rotation view of the foot with max equinus and 15° cephalic tube angle. Essential to evaluate talar neck displacement, varus malalignment, and step-off without superimposition.",
                "th": "ภาพเอกซเรย์คอทาเลสเฉพาะ (Canale View) ถ่ายหมุนเท้าเข้าด้านใน 15 องศา เอียงหลอดรังสี 15 องศาขึ้นทางหัว เพื่อดูแนวกระดูกคอทาเลสโดยไม่มีกระดูกอื่นทับซ้อน"
              }
            },
            {
              "name": "AP & Lateral Foot Radiographs",
              "details": {
                "en": "Standard AP and lateral views. Assesses subtalar joint dislocation, talonavicular congruence, and talar body posterior extrusion.",
                "th": "ภาพเอกซเรย์เท้าท่า AP และด้านข้าง (Lateral) ประเมินการหลุดของข้อ Subtalar, ข้อ Talonavicular และการดันหลุดไปด้านหลังของตัวกระดูก Talus"
              }
            },
            {
              "name": "Non-contrast CT Scan of Ankle/Foot",
              "details": {
                "en": "High-resolution 3D CT scan. Gold standard to detect subtle displacement (>2mm), comminution, and intra-articular loose fragments.",
                "th": "เอกซเรย์คอมพิวเตอร์ (CT scan) ความละเอียดสูง เป็นมาตรฐานหลักในการวัดระยะเคลื่อนตัว (>2มม.), ชิ้นกระดูกแตกละเอียด และชิ้นกระดูกหลุดในข้อ"
              }
            }
          ],
          "types": [
            {
              "type": "Hawkins I",
              "name": {
                "en": "Hawkins Type I (Non-displaced Talar Neck)",
                "th": "Hawkins Type I (ไม่เคลื่อนตัว - AVN Risk < 10%)"
              },
              "description": {
                "en": "Non-displaced talar neck fracture line (<2 mm displacement)\nSubtalar, tibiotalar, and talonavicular joints remain INTACT and CONGRUENT\nPreserved blood supply through deltoid branches and sinus tarsi\nLow AVN risk (0-10%)",
                "th": "รอยหักกระดูกคอทาเลสไม่เคลื่อนตัว (< 2 มม.)\nข้อต่อ Subtalar, Tibiotalar และ Talonavicular ยังเข้าที่สมบูรณ์ดี\nเส้นเลือดหล่อเลี้ยงจากแขนง Deltoid และ Sinus tarsi ยังคงอยู่\nความเสี่ยงภาวะหัวกระดูกตาย (AVN Risk) ต่ำมาก (0-10%)"
              },
              "moi": {
                "en": "Forced dorsiflexion of the ankle (e.g. foot pressing brake pedal during car crash).",
                "th": "แรงเหยียบกระแทกบังคับให้ข้อเท้ากระดกขึ้นเต็มที่ (เช่น เท้าเหยียบเบรกรถยนต์ขณะเกิดอุบัติเหตุ)"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Truly non-displaced talar neck fracture (<1–2 mm step-off) with intact subtalar, tibiotalar, and talonavicular joints; low AVN risk (<10%); conservative management with strict non-weightbearing cast for 8–12 weeks; monitor for subchondral radiolucency (Hawkins sign) at 6–8 weeks.",
                  "th": "รอยหักคอทาเลสชนิดไม่เคลื่อนตัว (<1–2 มม.) ข้อต่อรอบข้าง (Subtalar, Tibiotalar, Talonavicular) อยู่ในตำแหน่งปกติ โอกาสหัวกระดูกตาย (AVN) ต่ำ (<10%) รักษาด้วยการใส่เฝือกสั้นห้ามลงน้ำหนักอย่างเข้มงวด 8–12 สัปดาห์ ติดตามดู Hawkins sign ที่สัปดาห์ที่ 6–8"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Non-displaced talar neck fracture with <1–2 mm step-off confirmed on CT\n• Normal alignment of subtalar and tibiotalar joints on Canale and lateral views",
                    "th": "• กระดูกคอทาเลสหักชนิดไม่เคลื่อนตัว (เหลื่อม <1–2 มม. ยืนยันด้วย CT scan)\n• ข้อต่อ Subtalar และ Tibiotalar เรียงตัวปกติในภาพ Canale และ Lateral view"
                  },
                  "method": {
                    "en": "• Short-leg non-weightbearing cast in slight equinus/neutral for 6–8 weeks, followed by removable boot and progressive protected weight-bearing upon radiographic healing",
                    "th": "• ใส่เฝือกสั้นงดลงน้ำหนัก (Short-leg NWB cast) ในท่าเท้าตั้งฉาก 6–8 สัปดาห์ จากนั้นเปลี่ยนเป็นบูทถอดได้และเริ่มลงน้ำหนักเมื่อมีสัญญาณกระดูกติด"
                  },
                  "rehabilitation": {
                    "en": "• Strict non-weightbearing until Hawkins sign or bone union visible at 6–8 weeks; active ankle/subtalar ROM out of boot",
                    "th": "• งดลงน้ำหนักอย่างเข้มงวดจนกว่าจะพบ Hawkins sign หรือกระดูกติดที่ 6–8 สัปดาห์; เริ่มฝึกขยับข้อเท้าและข้อส้นเท้า"
                  },
                  "pitfalls": {
                    "en": "• Premature full weight-bearing before checking Hawkins sign (absence of Hawkins sign indicates avascular talar dome at risk of structural collapse)",
                    "th": "• ให้ลงน้ำหนักเร็วเกินไปก่อนตรวจ Hawkins sign (หากไม่พบ Hawkins sign แปลว่ากระดูกขาดเลือด เสี่ยงต่อหัวกระดูกยุบพัง)"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Questionable stability or occult displacement on dynamic stress fluoroscopy\n• Active patient wanting early protected mobilization",
                    "th": "• สงสัยความไม่มั่นคงหรือมีการเคลื่อนซ่อนเร้นเมื่อตรวจขยับใต้ Fluoroscopy\n• ผู้ป่วยต้องการเริ่มขยับข้อเท้าเร็ว"
                  },
                  "method": {
                    "en": "• Percutaneous cannulated screw fixation (two 4.0 mm or 4.5 mm screws from posterior to anterior or anterior to posterior)",
                    "th": "• ผ่าตัดยึดสกรูผ่านผิวหนัง (Percutaneous Cannulated Screws 4.0–4.5 มม. 2 ตัว จากหน้าไปหลังหรือหลังไปหน้า)"
                  },
                  "rehabilitation": {
                    "en": "• Early non-weightbearing active ankle ROM at 2 weeks post-op; protected weight-bearing at 6–8 weeks",
                    "th": "• เริ่มฝึกขยับข้อเท้าแบบไม่ลงน้ำหนักที่ 2 สัปดาห์; เริ่มลงน้ำหนักประคองที่ 6–8 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Over-tightening countersunk screws into fragile talar neck cortex causing comminution",
                    "th": "• ขันสกรูแน่นเกินไปจนเปลือกกระดูกคอทาเลสที่เปราะแตกป่นเพิ่มขึ้น"
                  }
                }
              },
              "illustrationId": "/images/hawkins/hawkins_1.png",
              "xrayDescription": {
                "en": "Nondisplaced vertical fracture line across talar neck on Canale view with normal joint alignment.",
                "th": "เห็นรอยหักแนวตั้งไม่เคลื่อนตัวพาดผ่านคอทาเลสในท่า Canale view โดยข้อต่อเรียงตัวปกติ"
              }
            },
            {
              "type": "Hawkins II",
              "name": {
                "en": "Hawkins Type II (Displaced with Subtalar Subluxation/Dislocation)",
                "th": "Hawkins Type II (เคลื่อนตัว + ข้อ Subtalar หลุด - AVN Risk 20-50%)"
              },
              "description": {
                "en": "Displaced talar neck fracture WITH subluxation or dislocation of the Subtalar joint\nTibiotalar joint remains intact and aligned\nDisruption of sinus tarsi and canalis tarsi blood supply\nModerate AVN risk (20-50%)",
                "th": "รอยหักคอทาเลสเคลื่อนตัว ร่วมกับข้อ Subtalar หลุดเคลื่อน\nข้อต่อ Tibiotalar ด้านบนยังคงเข้าที่ตามปกติ\nเส้นเลือดบริเวณ Sinus tarsi และ Canalis tarsi ถูกตัดขาด\nความเสี่ยงภาวะหัวกระดูกตาย (AVN Risk) ปานกลาง (20-50%)"
              },
              "moi": {
                "en": "High-energy forced dorsiflexion with axial load.",
                "th": "แรงอัดกระแทกตามแนวแกนร่วมกับแรงบังคับข้อเท้ากระดกขึ้นพลังงานสูง"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Displaced talar neck fracture with subtalar joint subluxation/dislocation; tibiotalar intact; AVN risk 20%–50%; urgent anatomic closed/open reduction and rigid internal fixation with dual screws or mini-plates to prevent varus malunion and subtalar arthrosis.",
                  "th": "กระดูกคอทาเลสเคลื่อนร่วมกับข้อ Subtalar หลุด (ข้อบน Tibiotalar ยังปกติ) เสี่ยงหัวกระดูกตาย 20%–50% ต้องผ่าตัดจัดกระดูกและยึดตรึงฉุกเฉิน (Urgent ORIF) ด้วยสกรูหรือเพลทคู่เพื่อป้องกันกระดูกติดโก่งเอียง (Varus Malunion) และข้อส้นเท้าเสื่อม"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly contraindicated in surgical candidates (leads to varus malunion, loss of subtalar eversion, painful lateral column overload, and AVN)",
                    "th": "• ห้ามรักษาแบบไม่ผ่าตัด (ทำให้กระดูกติดผิดรูปเอียงเข้าใน สูญเสียการบิดเท้า ปวดขอบเท้าด้านนอก และเสี่ยงหัวกระดูกตายสูง)"
                  },
                  "method": {
                    "en": "• Non-weightbearing cast only if medically unfit for any anesthesia",
                    "th": "• ใส่เฝือกสั้นงดลงน้ำหนักเฉพาะผู้ป่วยที่ไม่สามารถรับการดมยาผ่าตัดได้เลย"
                  },
                  "rehabilitation": {
                    "en": "• Immobilization 10–12 weeks",
                    "th": "• ดามเฝือก 10–12 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Inevitable symptomatic varus malunion and early subtalar osteoarthritis",
                    "th": "• เกิดกระดูกติดผิดรูปมุม Varus และข้อใต้ทาเลสเสื่อมปวดรุนแรงอย่างหลีกเลี่ยงไม่ได้"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All displaced Hawkins Type II talar neck fractures with subtalar subluxation/dislocation",
                    "th": "• กระดูกหัก Hawkins II ที่มีการเคลื่อนตัวหรือข้อ Subtalar หลุดกึ่งหลุดทุกราย"
                  },
                  "method": {
                    "en": "• Urgent Anatomic ORIF via Dual Approach (Anteromedial and Anterolateral incisions to visualize both columns and prevent varus tilt)\n• Fixation with two to three 4.0–4.5 mm Cannulated Cancellous Screws (placed posteroanterior or anteroposterior) OR Mini-fragment locking plates for comminuted neck",
                    "th": "• ผ่าตัดเปิดจัดกระดูกฉุกเฉินผ่าน 2 ช่องทาง (Anteromedial + Anterolateral approaches เพื่อมองเห็นทั้งสองด้านและป้องกันการเอียง Varus)\n• ยึดตรึงด้วยสกรู Cannulated Screws 4.0–4.5 มม. 2–3 ตัว (ยิงจากหลังไปหน้า หรือหน้าไปหลัง) หรือใช้แผ่นเหล็กล็อคขนาดเล็กดามกรณีคอกระดูกแตกละเอียด"
                  },
                  "rehabilitation": {
                    "en": "• Non-weightbearing for 8–12 weeks; early active ankle and subtalar motion at 2–3 weeks post-op; assess for Hawkins sign at 6–8 weeks before full weight-bearing",
                    "th": "• งดลงน้ำหนักอย่างเข้มงวด 8–12 สัปดาห์; เริ่มฝึกขยับข้อเท้าและข้อส้นเท้าที่ 2–3 สัปดาห์; ตรวจเช็ค Hawkins sign ที่ 6–8 สัปดาห์ก่อนเริ่มลงน้ำหนักเต็มที่"
                  },
                  "pitfalls": {
                    "en": "• Varus malreduction (shortened medial column) causing lateral column weight-bearing pain and limited subtalar eversion\n• Dissecting the deltoid branches during medial approach (must preserve deltoid ligament vascular leash)",
                    "th": "• จัดกระดูกเบี้ยวเอียง Varus (แกนด้านในสั้น) ทำให้ลงน้ำหนักเจ็บขอบเท้าด้านนอกและบิดเท้าไม่ได้\n• เลาะเนื้อเยื่อทำลายเส้นเลือดที่ผ่านเอ็น Deltoid ทางด้านใน"
                  }
                }
              },
              "illustrationId": "/images/hawkins/hawkins_2.png",
              "xrayDescription": {
                "en": "Displaced talar neck fracture with posterior displacement of subtalar joint on lateral view.",
                "th": "เห็นรอยหักคอทาเลสเคลื่อนตัวพร้อมข้อ Subtalar เคลื่อนหลุดไปด้านหลังในท่าด้านข้าง"
              }
            },
            {
              "type": "Hawkins III",
              "name": {
                "en": "Hawkins Type III (Displaced with Subtalar + Tibiotalar Dislocation)",
                "th": "Hawkins Type III (เคลื่อนตัว + ข้อ Subtalar และ Tibiotalar หลุด - AVN Risk 80-100%)"
              },
              "description": {
                "en": "Displaced talar neck fracture WITH dislocation of BOTH Subtalar and Tibiotalar joints\nTalar body fragment is extruded posteriorly and medially behind medial malleolus\nDisruption of all major blood supplies except deltoid branches\nVERY HIGH AVN risk (80-100%)",
                "th": "รอยหักคอทาเลสเคลื่อนตัว ร่วมกับข้อ Subtalar และข้อ Tibiotalar **เคลื่อนหลุดออกทั้งสองข้อ**\nตัวกระดูก Talus body ทะลักหลุดออกไปด้านหลังและด้านในตาตุ่ม\nเส้นเลือดหลักหล่อเลี้ยงกระดูกถูกตัดขาดเกือบทั้งหมด\nความเสี่ยงภาวะหัวกระดูกตาย (AVN Risk) สูงมากที่สุด (80-100%)"
              },
              "moi": {
                "en": "Severe violent dorsiflexion and axial compression trauma.",
                "th": "อุบัติเหตุแรงกระแทกอัดและแอ่นกระดกข้อเท้าอย่างรุนแรงสุดขีด"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "High-energy fracture-dislocation; subtalar and tibiotalar joints dislocated with talar body extruded posteriorly/medially; severe skin tenting and >80%–90% AVN risk; emergency reduction and dual-approach ORIF; protect preserved deltoid vascular leash.",
                  "th": "กระดูกคอทาเลสหักร่วมกับข้อ Subtalar และ Tibiotalar หลุด ตัวกระดูกทาเลสหลุดทะลักไปด้านหลัง/ใน ดันผิวหนังตึงเต่ง เสี่ยงหัวกระดูกตาย >80%–90% ต้องผ่าตัดจัดกระดูกฉุกเฉิน (Emergency ORIF) ผ่าน 2 ทาง ระวังรักษาเส้นเลือดหล่อเลี้ยงที่เอ็น Deltoid"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Absolutely contraindicated (causes rapid skin necrosis, severe deformity, and complete joint destruction)",
                    "th": "• ห้ามรักษาแบบไม่ผ่าตัดเด็ดขาด (ผิวหนังจะเน่าตาย ตัวกระดูกพังทลาย และสูญเสียการใช้งานเท้า)"
                  },
                  "method": {
                    "en": "• Emergency closed reduction attempt in ER to relieve acute skin tenting while preparing for immediate OR",
                    "th": "• ดึงจัดกระดูกเบื้องต้นในห้องฉุกเฉินเพื่อคลายแรงดันผิวหนังระหว่างเตรียมเข้าห้องผ่าตัดด่วน"
                  },
                  "rehabilitation": {
                    "en": "• N/A",
                    "th": "• N/A"
                  },
                  "pitfalls": {
                    "en": "• Delaying reduction leading to full-thickness skin necrosis and open joint conversion",
                    "th": "• จัดกระดูกล่าช้าจนผิวหนังเน่าทะลุกระดูกกลายเป็นแผลเปิดเข้าข้อ"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All Hawkins Type III fracture-dislocations (Orthopedic Emergency)",
                    "th": "• กระดูกคอทาเลสหักแบบ Hawkins Type III ทุกราย (ภาวะฉุกเฉินทางออร์โธปิดิกส์)"
                  },
                  "method": {
                    "en": "• Emergency Anatomic ORIF via Dual Approach (Anteromedial ± Medial Malleolar Osteotomy + Anterolateral Approach)\n• Careful reduction of extruded talar body back into ankle mortise without stripping deltoid ligament attachment\n• Rigid fixation with dual mini-plates or cross-cannulated screws (4.0–4.5 mm)",
                    "th": "• ผ่าตัดเปิดจัดกระดูกฉุกเฉินผ่าน 2 ทาง (Anteromedial approach ± ผ่าตัดเปิดกระดูกตาตุ่มใน Medial Malleolar Osteotomy + Anterolateral approach)\n• ดึงจัดตัวกระดูกทาเลสที่ทะลักกลับเข้าเบ้าข้อเท้าอย่างระมัดระวังโดยไม่เลาะเนื้อเยื่อเอ็น Deltoid\n• ดามตรึงอย่างแข็งแรงด้วยแผ่นเหล็กล็อคขนาดเล็กคู่ หรือสกรูไขว้ Cannulated Screws 4.0–4.5 มม."
                  },
                  "rehabilitation": {
                    "en": "• Strict non-weightbearing for minimum 12 weeks; monitor for Hawkins sign and talar dome collapse on serial CT/MRI; custom orthotic unloader or secondary subtalar/tibiotalar arthrodesis if AVN collapse occurs",
                    "th": "• งดลงน้ำหนักอย่างเข้มงวดอย่างน้อย 12 สัปดาห์; ตรวจติดตาม Hawkins sign และการทรุดตัวของหัวกระดูกใน CT/MRI; หากเกิด AVN ยุบตัวอาจต้องใส่กายอุปกรณ์ลดแรงกดหรือผ่าตัดเชื่อมข้อในภายหลัง"
                  },
                  "pitfalls": {
                    "en": "• Stripping the remaining deltoid vascular leash during body reduction, converting residual blood flow to 100% complete devascularization",
                    "th": "• เลาะเนื้อเยื่อทำลายเอ็น Deltoid ขณะดึงหัวกระดูกเข้าที่ ทำให้เส้นเลือดเส้นสุดท้ายขาดจนกระดูกตาย 100%"
                  }
                }
              },
              "illustrationId": "/images/hawkins/hawkins_3.png",
              "xrayDescription": {
                "en": "Talar neck fracture with complete dislocation of talar body from both ankle mortise and calcaneus.",
                "th": "เห็นรอยหักคอทาเลสร่วมกับตัวกระดูก Talus หลุดออกจากเบ้าข้อเท้าและกระดูกส้นเท้าอย่างสิ้นเชิง"
              }
            },
            {
              "type": "Hawkins IV",
              "name": {
                "en": "Hawkins Type IV (Subtalar + Tibiotalar + Talonavicular Dislocation)",
                "th": "Hawkins IV (หลุดสมบูรณ์ 3 ข้อ - Subtalar, Tibiotalar, Talonavicular - AVN Risk 90-100%)"
              },
              "description": {
                "en": "Displaced talar neck fracture WITH dislocation of ALL THREE joints (Subtalar, Tibiotalar, and Talonavicular)\nTotal talar head and body dislocation\nComplete devascularization of talus\nExtremely high AVN risk (90-100%) and collapse rate",
                "th": "รอยหักคอทาเลสเคลื่อนตัว ร่วมกับข้อต่อหลุดเคลื่อนสมบูรณ์ **ทั้ง 3 ข้อ (Subtalar, Tibiotalar และ Talonavicular)**\nหัวและตัวกระดูก Talus หลุดลอยออกจากเบ้าทั้งหมด\nตัดขาดเส้นเลือดหล่อเลี้ยงกระดูก 100%\nความเสี่ยงภาวะหัวกระดูกตาย (AVN Risk) เกือบ 100% เสี่ยงกระดูกทรุดพังทลาย"
              },
              "moi": {
                "en": "Extreme high-energy Crush/Motorcycle collision.",
                "th": "การบาดเจ็บแรงทับบดพลังงานสูงรุนแรงสุดขีด"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Pan-talar dislocation involving subtalar, tibiotalar, and talonavicular joints; near 100% AVN rate; emergency reduction to prevent skin necrosis; dual-approach ORIF reconstruction to preserve talus shape as a biological spacer; high likelihood of secondary or primary arthrodesis.",
                  "th": "กระดูกคอทาเลสหักร่วมกับข้อหลุดสมบูรณ์ทั้ง 3 ข้อ (Subtalar, Tibiotalar, Talonavicular) โอกาสเกิด AVN เกือบ 100% ต้องผ่าตัดจัดกระดูกฉุกเฉิน (Emergency ORIF) เพื่อคงรูปทรงกระดูกทาเลสไว้เป็นตัวค้ำชีวภาพ (Biological Spacer) รองรับการผ่าตัดเชื่อมข้อในอนาคต"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Absolutely contraindicated",
                    "th": "• ห้ามรักษาแบบไม่ผ่าตัดเด็ดขาด"
                  },
                  "method": {
                    "en": "• Urgent closed reduction in ER to relieve soft tissue compromise while mobilizing surgical team",
                    "th": "• ดึงข้อเข้าที่เบื้องต้นในห้องฉุกเฉินเพื่อลดแรงดึงรั้งเนื้อเยื่อระหว่างเตรียมผ่าตัด"
                  },
                  "rehabilitation": {
                    "en": "• N/A",
                    "th": "• N/A"
                  },
                  "pitfalls": {
                    "en": "• Skin slough and neurovascular compromise if reduction delayed",
                    "th": "• ผิวหนังเน่าตายและเส้นประสาท/หลอดเลือดขาดเลือดหากจัดข้อเข้าที่ล่าช้า"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All Hawkins Type IV pan-talar fracture-dislocations",
                    "th": "• กระดูกคอทาเลสหักและข้อหลุดทั้ง 3 ข้อแบบ Hawkins IV ทุกราย"
                  },
                  "method": {
                    "en": "• Emergency ORIF via Dual Approach (Anteromedial + Anterolateral ± Medial malleolar osteotomy): Meticulous reduction of talonavicular, subtalar, and tibiotalar joints + Rigid dual-column plate/screw fixation\n• Primary or staged Tibiotalocalcaneal (TTC) Arthrodesis or Subtalar Arthrodesis if bone is completely extruded and crushed",
                    "th": "• ผ่าตัดเปิดจัดกระดูกฉุกเฉินผ่าน 2 ทาง (Anteromedial + Anterolateral ± Medial Malleolar Osteotomy): จัดเรียงข้อ Talonavicular, Subtalar และ Tibiotalar ให้เข้าที่ + ยึดตรึงด้วยแผ่นเหล็กล็อคหรือสกรูคู่\n• ผ่าตัดเชื่อมข้อเท้าและข้อส้นเท้า (TTC Arthrodesis / Subtalar Arthrodesis) ทันทีหรือแบบแบ่งระยะหากกระดูกแตกป่นละเอียดไม่สามารถคงรูปได้"
                  },
                  "rehabilitation": {
                    "en": "• Strict non-weightbearing for 12–16 weeks; long-term bracing and monitoring for osteonecrosis and collapse; prepare patient for possible secondary fusion",
                    "th": "• งดลงน้ำหนักอย่างเข้มงวด 12–16 สัปดาห์; ใส่อุปกรณ์ประคองและตรวจติดตามภาวะกระดูกตายและการทรุดตัวระยะยาว; เตรียมผู้ป่วยสำหรับการผ่าตัดเชื่อมข้อในอนาคต"
                  },
                  "pitfalls": {
                    "en": "• Talar dome collapse and joint disintegration under early weight-bearing",
                    "th": "• หัวกระดูกทาเลสยุบพังทลายจากการลงน้ำหนักเร็วเกินไป"
                  }
                }
              },
              "illustrationId": "/images/hawkins/hawkins_4.png",
              "xrayDescription": {
                "en": "Gross displacement of talar head and body from all surrounding tarsal and tibial articulations.",
                "th": "เห็นหัวและตัวกระดูก Talus หลุดออกจากเบ้าข้อโดยรอบทั้งหมด"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "calcaneus",
      "name": {
        "en": "Calcaneus",
        "th": "กระดูกส้นเท้า (Calcaneus)"
      },
      "regionConcept": {
        "physicalExam": [
          {
            "sign": "Heel Width Expansion Assessment",
            "positive": {
              "en": "Visibly widened, shortened, and valgus/varus deformed heel compared to uninjured side",
              "th": "ส้นเท้าขยายกว้างออก สั้นลง และเอียงผิดรูปชัดเจนเมื่อเทียบกับข้างปกติ"
            }
          },
          {
            "sign": "Bohler's Angle Measurement",
            "positive": {
              "en": "Bohler's angle reduced below normal range (20-40°); angle <0° indicates severe articular depression of posterior facet",
              "th": "มุม Bohler's angle ลดลงต่ำกว่าปกติ (20-40°); หากมุมติดลบ (<0°) แสดงถึงผิวยุบตัวลงรุนแรง"
            }
          }
        ],
        "redFlags": [
          {
            "en": "Foot Compartment Syndrome: Occurs in up to 10% of high-energy calcaneal fractures; monitor for tense plantar fascia, severe forefoot pain, and toe paresthesias",
            "th": "ภาวะความดันช่องกล้ามเนื้อเท้าสูง (Foot Compartment Syndrome): พบได้ถึง 10% ในรอยหักพลังงานสูง ต้องเฝ้าระวังอุ้งเท้าตึง ปวดเท้าและชานิ้วเท้า"
          },
          {
            "en": "Severe Soft Tissue Blistering (Tension Blisters): Hemorrhagic or serous blisters contraindicate immediate ORIF until positive wrinkle sign returns",
            "th": "ตุ่มน้ำพองรุนแรงที่ผิวหนัง (Tension Blisters): ตุ่มน้ำใสหรือตุ่มเลือดเป็นข้อห้ามการผ่าตัดเปิด จนกว่าตุ่มน้ำจะแห้งและเกิด Wrinkle sign"
          }
        ],
        "associatedInjuries": [
          {
            "injury": {
              "en": "Thoracolumbar Spine (L1-L2) Burst Fractures",
              "th": "กระดูกสันหลังระดับเอว (L1-L2) หักแตกละเอียด"
            },
            "trigger": {
              "en": "Present in ~10% of calcaneal fractures from high-energy vertical fall; mandatory spine exam and radiographs",
              "th": "พบประมาณ 10% จากการตกจากที่สูง ต้องตรวจกระดูกสันหลังและถ่ายภาพ X-ray สันหลังเสมอ"
            }
          }
        ],
        "clinicalPearls": [
          {
            "en": "Bohler's angle <0° strongly predicts poor functional outcome and increased rate of secondary subtalar arthrodesis.",
            "th": "มุม Bohler's angle ที่ติดลบ (<0°) ทำนายผลการรักษาที่ไม่ดีและมีอัตราการต้องผ่าตัดเชื่อมข้อ Subtalar สูง"
          },
          {
            "en": "Sanders CT classification is based on the number and location of articular fracture lines on coronal CT section through the posterior facet.",
            "th": "การจำแนก Sanders CT จากจำนวนและทิศทางรอยหักผิวข้อในภาพตัดขวาง CT เป็นตัวกำหนดพยากรณ์โรคและความซับซ้อนของการผ่าตัด"
          },
          {
            "en": "Surgical intervention via extensile lateral approach must be delayed (7-14 days) until the 'wrinkle sign' is positive to prevent soft tissue breakdown.",
            "th": "การผ่าตัดเปิดดามเหล็กทางด้านข้างต้องรอ (7-14 วัน) จนกว่าจะพบ 'Wrinkle sign' เพื่อป้องกันแผลผ่าตัดแยกเน่าตาย"
          }
        ],
        "images": [
          {
            "url": "/images/concepts/calcaneus_lateral_surface.jpg",
            "title": {
              "en": "Calcaneus Lateral Surface Anatomy",
              "th": "กายวิภาคผิวกระดูกส้นเท้าด้านข้าง (Lateral Surface)"
            },
            "caption": {
              "en": "Key lateral landmarks: Calcaneal tuberosity, peroneal tubercle, posterior articular facet, sinus tarsi, and facet for cuboid. Critical anatomical reference for the extensile lateral and sinus tarsi surgical approaches.",
              "th": "จุดสังเกตสำคัญ: Calcaneal tuberosity, peroneal tubercle, ผิวข้อด้านหลัง (posterior facet), sinus tarsi และผิวข้อต่อกระดูก Cuboid เป็นแนวหลักสำหรับการผ่าตัดเปิด Extensile lateral และ Sinus tarsi approach"
            }
          },
          {
            "url": "/images/concepts/calcaneus_superior_inferior_view.jpg",
            "title": {
              "en": "Superior & Inferior Articular Facets (Subtalar Joint)",
              "th": "ผิวข้อต่อด้านบนและล่าง: Subtalar Joint & Sustentaculum Tali"
            },
            "caption": {
              "en": "Superior view displays the 3 subtalar articular facets (anterior, middle, posterior) and the constant sustentaculum tali (supported by the deltoid ligament). Inferior view demonstrates the calcaneocuboid joint and plantar ligament attachments.",
              "th": "มุมมองด้านบนแสดงผิวข้อต่อ Subtalar ทั้ง 3 ส่วน (Anterior, Middle, Posterior facets) และชิ้นกระดูก Sustentaculum tali ซึ่งเป็น Constant fragment ที่มักไม่เคลื่อนที่เนื่องจากมีเอ็น Deltoid ยึดตรึง มุมมองด้านล่างแสดงร่องเส้นเอ็น FHL และจุดเกาะเอ็นฝ่าเท้า"
            }
          },
          "/images/concepts/anatomy_calcaneus_3.png",
          "/images/concepts/anatomy_calcaneus_4.png"
        ],
        "imageUrl": "/images/concepts/anatomy_calcaneus_4.png"
      },
      "classifications": [
        {
          "system": "Essex-Lopresti",
          "fullName": {
            "en": "Essex-Lopresti Calcaneal Fracture Classification (X-Ray Based)",
            "th": "การจำแนกกระดูกส้นเท้าหักตามภาพถ่ายรังสี Essex-Lopresti"
          },
          "description": {
            "en": "Classic radiograph-based classification for intra-articular calcaneal fractures based on the exit trajectory of the secondary fracture line, categorizing injuries into Tongue-type and Joint-Depression-type.",
            "th": "ระบบจำแนกกระดูกส้นเท้าหักเข้าข้อตามภาพเอกซเรย์คลาสสิก แบ่งตามทิศทางพาดออกของรอยหักรอบสอง (Secondary fracture line) เป็น 2 ชนิดหลัก: Tongue-type (ชิ้นลิ้น) และ Joint-Depression-type (ผิวข้อยุบ)"
          },
          "concept": {
            "title": {
              "en": "Essex-Lopresti Secondary Fracture Line Concept",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ Essex-Lopresti Classification"
            },
            "imageUrl": "/images/essex_lopresti/concept.png",
            "corePrinciple": {
              "en": "Essex-Lopresti classifies intra-articular calcaneal fractures based on the exit trajectory of the secondary fracture line driven by talar wedge impact, separating injuries into Tongue-type vs Joint-Depression-type patterns.",
              "th": "Essex-Lopresti จำแนกกระดูกส้นเท้าหักเข้าข้อตามทิศทางพาดออกของรอยหักทุติยภูมิที่เกิดจากแรงตอกของกระดูก Talus โดยแบ่งเป็นชนิด Tongue-type และ Joint-Depression-type"
            },
            "rules": [
              {
                "en": "Tongue-Type (~25%): Secondary line exits straight posteriorly into tuberosity wall -> Posterior facet fragment remains attached to calcaneal tuberosity",
                "th": "Tongue-Type (~25%): รอยหักรอบสองพาดตรงไปด้านหลังถึงตุ่มส้นเท้า -> ชิ้นผิวข้อ Posterior facet ยังติดอยู่กับตุ่มส้นเท้าด้านหลัง"
              },
              {
                "en": "Joint-Depression Type (~75%): Secondary line curves superiorly behind posterior facet -> Facet is isolated and crushed into calcaneal body",
                "th": "Joint-Depression Type (~75%): รอยหักรอบสองโค้งขึ้นด้านบนเหนือผิวข้อ -> ชิ้นผิวข้อแยกขาดและถูกอัดยุบจมลงในเนื้อกระดูกส้นเท้า"
              },
              {
                "en": "Bohler's Angle Threshold: Normal = 20°–40°; Bohler's angle <20° indicates collapse of posterior facet and loss of calcaneal height",
                "th": "เกณฑ์มุม Bohler's Angle: ปกติ = 20°–40°; มุม <20° แสดงถึงผิวข้อส้นเท้ายุบตัวและสูญเสียความสูง"
              }
            ],
            "clinicalSignificance": [
              {
                "en": "Tongue-Type Surgical Technique: Suitable for percutaneous reduction and pinning (Essex-Lopresti Steinmann pin leverage technique) or ORIF",
                "th": "แนวทางรักษา Tongue-Type: เหมาะสำหรับการผ่าตัดดัดงัดผ่านผิวหนังด้วยเข็ม (Essex-Lopresti percutaneous pin technique) หรือผ่าตัด ORIF"
              },
              {
                "en": "Joint-Depression Surgical Technique: Requires Open Reduction and Internal Fixation (ORIF) via extensile lateral approach with locking plate and void filling",
                "th": "แนวทางรักษา Joint-Depression: ต้องผ่าตัดเปิด ORIF ดามแผ่นเหล็กทางเข้าด้านข้าง (Extensile lateral approach) ร่วมกับการยกผิวข้อและเติมกระดูกเทียม"
              },
              {
                "en": "Soft Tissue Envelope Waiting Period: Surgical incision MUST be delayed until swelling subsides and 'Wrinkle Sign' is positive (typically 7–14 days post-injury) to prevent skin flap necrosis",
                "th": "ระยะเวลารอผิวยุบบวม: ต้องรอจนเกิด 'Wrinkle Sign' (7–14 วัน) ก่อนผ่าตัดเปิดแผลด้านข้างเพื่อป้องกันแผลเน่าแยก"
              },
              {
                "en": "Skin Tenting Emergency: Tongue-type fractures causing severe posterior skin tenting require urgent percutaneous reduction to prevent skin slough",
                "th": "ภาวะผิวดึงตึงฉุกเฉิน: เคส Tongue-type ที่ชิ้นกระดูกดันทับผิวหนังด้านหลังตึงเต่ง ต้องผ่าตัดงัดจัดกระดูกด่วนเพื่อป้องกันผิวหนังเน่าตาย"
              }
            ]
          },
          "investigations": [
            {
              "name": "Lateral Calcaneus View",
              "details": {
                "en": "Strict lateral view. Essential for measuring Bohler's angle (normal 20-40°, <20° indicates depression), Critical Angle of Gissane (120-145°), and classifying Tongue vs Joint-Depression pattern.",
                "th": "ภาพเอกซเรย์ส้นเท้าท่าด้านข้างแท้ จำเป็นที่สุดในการวัดมุม Bohler's angle (ปกติ 20-40°, <20° แสดงถึงผิวข้อยุบ), มุม Gissane angle (120-145°) และแยกชนิด Tongue vs Joint-Depression"
              }
            },
            {
              "name": "Axial Harris View (Harris-Beath View)",
              "details": {
                "en": "Axial 45° view of calcaneus. Evaluates heel width expansion, tuberosity varus/valgus deformity, and sustentaculum tali fracture lines.",
                "th": "ภาพเอกซเรย์ส้นเท้าท่าตัดตามแนวแกน (Harris View 45°) ใช้ประเมินการขยายความกว้างของส้นเท้า การเบี้ยวเกเอียงของส้นเท้า และรอยหักที่ Sustentaculum tali"
              }
            },
            {
              "name": "Broden's Stress Views (10-40° Oblique Views)",
              "details": {
                "en": "Oblique views of subtalar joint taken with 45° dorsiflexion and variable internal rotation. Visualizes posterior facet articular congruity before and during surgery.",
                "th": "ภาพเอกซเรย์เอียงดูข้อ Subtalar joint เป็นมาตรฐานในการดูความเรียบของผิวข้อ Posterior facet ทั้งก่อนและระหว่างผ่าตัด"
              }
            }
          ],
          "types": [
            {
              "type": "Extra-Articular",
              "name": {
                "en": "Extra-Articular Calcaneal Fracture",
                "th": "1. Extra-Articular (หักนอกผิวข้อ - Bohler's Angle ปกติ)"
              },
              "description": {
                "en": "Fracture line spares the main subtalar posterior articular facet (~25-30% of calcaneal fractures)\nIncludes anterior process fractures, sustentaculum tali fractures, body fractures, or posterior tuberosity avulsion (Beak fracture)\nBohler's angle (20-40°) and Gissane angle (120-145°) remain NORMAL\nExcellent prognosis with non-operative treatment",
                "th": "รอยหักไม่พาดผ่านผิวข้อ Subtalar posterior facet (~25-30% ของกระดูกส้นเท้าหักทั้งหมด)\nรวมถึงการหักของ Anterior process, Sustentaculum tali, ตัวแกน หรือชิ้นกะเทาะตุ่มหลัง (Beak fracture)\nมุม Bohler's angle (20-40°) และมุม Gissane angle (120-145°) ยังคงปกติ\nผลการรักษาดีเยี่ยมโดยไม่ต้องผ่าตัด"
              },
              "moi": {
                "en": "Low-energy twisting injury or direct impact not involving axial load across subtalar joint.",
                "th": "การบาดเจ็บแรงบิดพลังงานต่ำ หรือแรงกระแทกที่ไม่ผ่านแนวแกนข้อ Subtalar"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Extra-articular fractures sparing posterior facet (anterior process, sustentaculum, body, tuberosity); normal Bohler's (20°–40°) and Gissane (120°–145°) angles; non-operative management with short-leg cast/boot; surgery indicated only for beak tuberosity avulsions with skin threat or large displaced anterior process fragments (>25% calcaneocuboid joint).",
                  "th": "กระดูกส้นเท้าหักนอกผิวข้อ (ไม่โดน Posterior Facet) มุม Bohler's และ Gissane ปกติ รักษาแบบไม่ผ่าตัดด้วยเฝือกสั้นหรือบูท; ผ่าตัดเฉพาะรายที่เป็นชิ้นกระดูกตุ่มหลังกะเทาะ (Beak Fracture) ดึงรั้งผิวหนังเสี่ยงเน่า หรือชิ้น Anterior Process แตกเข้าข้อ Calcaneocuboid >25%"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Non-displaced or minimally displaced extra-articular fractures (anterior process <1 cm, isolated body/sustentaculum with <2 mm step-off)\n• Tuberosity avulsion with zero skin tenting/blanching",
                    "th": "• กระดูกส้นเท้าหักนอกผิวข้อชนิดไม่เคลื่อนหรือเคลื่อนน้อย (<2 มม.)\n• ชิ้นตุ่มกระดูกหลังกะเทาะที่ไม่มีการดึงรั้งผิวหนังด้านหลังตึงเต่ง"
                  },
                  "method": {
                    "en": "• Short-leg walking boot or cast; non-weightbearing for 4–6 weeks, progressing to weight-bearing as tolerated as pain subsides",
                    "th": "• ใส่เฝือกสั้นหรือบูทพยุง; งดลงน้ำหนัก 4–6 สัปดาห์ จากนั้นค่อยๆ เริ่มลงน้ำหนักตามที่ทนได้เมื่ออาการปวดทุเลา"
                  },
                  "rehabilitation": {
                    "en": "• Early subtalar and ankle inversion/eversion exercises at 4 weeks",
                    "th": "• เริ่มฝึกกระดกและบิดข้อเท้าเข้าใน-ออกนอกที่ 4 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Missing posterior tuberosity 'beak' avulsion causing gastrocnemius-soleus complex retraction and skin pressure necrosis",
                    "th": "• มองข้ามชิ้นหัก Beak Avulsion ที่ถูกเอ็นร้อยหวายดึงรั้งดันผิวหนังจนเน่าตาย"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Posterior tuberosity avulsion (Beak fracture) with significant displacement or skin tenting (Orthopedic Emergency)\n• Large displaced anterior process fracture involving >25% of calcaneocuboid joint",
                    "th": "• ตุ่มหลังส้นเท้าหักกะเทาะ (Beak fracture) ดึงรั้งผิวหนังด้านหลังตึงเต่งเสี่ยงเน่า (ภาวะฉุกเฉิน)\n• ชิ้นกระดูก Anterior Process แตกเข้าข้อ Calcaneocuboid >25% และเคลื่อนตัว"
                  },
                  "method": {
                    "en": "• Beak avulsion: Urgent percutaneous or mini-open lag screws (3.5–4.5 mm cannulated screws) or suture anchors to reattach Achilles tendon insertion\n• Anterior process: Small lateral incision + mini-fragment screw/plate fixation",
                    "th": "• Beak avulsion: ผ่าตัดด่วนยึดตรึงด้วยสกรู 3.5–4.5 mm Cannulated Screws หรือ Suture Anchor เย็บยึดจุดเกาะเอ็นร้อยหวาย\n• Anterior process: ผ่าตัดเปิดแผลเล็กด้านนอกยึดด้วยสกรูจิ๋ว Mini-fragment screws"
                  },
                  "rehabilitation": {
                    "en": "• Protected splint in slight equinus for 4–6 weeks; progressive Achilles stretching after 6 weeks",
                    "th": "• ดามเฝือกงอปลายเท้าลงเล็กน้อย 4–6 สัปดาห์; เริ่มยืดเอ็นร้อยหวายหลัง 6 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Delaying fixation of beak fracture leading to full-thickness heel skin slough and exposed Achilles tendon",
                    "th": "• ผ่าตัด Beak Fracture ล่าช้าจนผิวหนังส้นเท้าเน่าหลุดเปิดเห็นเอ็นร้อยหวาย"
                  }
                }
              },
              "illustrationId": "/images/essex_lopresti/extra_articular.png",
              "xrayDescription": {
                "en": "Fracture line seen at tuberosity or sustentaculum tali with intact Bohler's angle (20-40°).",
                "th": "เห็นรอยหักบริเวณตุ่มส้นเท้าหรือ Sustentaculum tali โดยมุม Bohler's angle ยังคงปกติ (20-40°)"
              }
            },
            {
              "type": "Tongue Type",
              "name": {
                "en": "Intra-Articular: Tongue Type",
                "th": "2. Tongue Type (หักเข้าข้อ ชิ้นลิ้นแนวนอน - Horizontal Tongue Fragment)"
              },
              "description": {
                "en": "Secondary fracture line extends straight POSTERIORLY to the posterior tuberosity wall\nThe posterior facet fragment remains attached to the large dorsal tuberosity fragment, forming a continuous 'tongue'\nBohler's angle is REDUCED (<20°)\nHorizontal lever fragment can be reduced percutaneously (Essex-Lopresti maneuver)",
                "th": "รอยหักรอบสอง (Secondary line) พาดตรงไปทางด้านหลังทะลุผนังตุ่มส้นเท้าด้านหลัง\nชิ้นผิวข้อ Posterior facet ยังคงติดเชื่อมอยู่กับชิ้นกระดูกส้นเท้าด้านบนเกิดลักษณะเป็น **'ชิ้นลิ้น' (Tongue fragment)**\nมุม Bohler's angle ลดลง (<20°)\nสามารถดัดงัดชิ้นกระดูกเข้าที่ผ่านทางผิวหนังได้ (Essex-Lopresti percutaneous pin technique)"
              },
              "moi": {
                "en": "Axial load from height fall driving talus wedge into calcaneus.",
                "th": "แรงกดตามแนวแกนจากการตกที่สูงที่ดันกระดูก Talus ลงมากระแทกกระดูกส้นเท้า"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Secondary fracture line exits posteriorly through tuberosity; posterior facet remains attached to tuberosity creating a large lever arm ('tongue'); high risk of posterior skin necrosis from dorsal displacement; amenability to percutaneous Steinmann pin leverage reduction (Essex-Lopresti technique) or sinus tarsi mini-open ORIF.",
                  "th": "รอยหักพาดทะลุออกด้านหลัง ชิ้นผิวข้อ Posterior Facet ติดอยู่กับตุ่มกระดูกส้นเท้าด้านหลังเป็นชิ้นลิ้นขนาดใหญ่ เสี่ยงดันผิวหนังด้านหลังเน่าตายอย่างยิ่ง เหมาะสำหรับผ่าตัดงัดจัดกระดูกผ่านผิวหนังด้วยเข็ม Steinmann Pin (Essex-Lopresti Maneuver) หรือผ่าตัดแผลเล็ก Sinus Tarsi ORIF"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Non-ambulatory patients, severe peripheral vascular disease, or active infection",
                    "th": "• ผู้ป่วยติดเตียงไม่เดิน, มีโรคหลอดเลือดส่วนปลายรุนแรง, หรือมีการติดเชื้อเฉียบพลัน"
                  },
                  "method": {
                    "en": "• Bulky Jones compression dressing, leg elevation, ice, and non-weightbearing splint",
                    "th": "• พันผ้าม้วนหนา Jones Dressing ยกขาสูง ประคบเย็น และดามเฝือกงดลงน้ำหนัก"
                  },
                  "rehabilitation": {
                    "en": "• Early gentle motion at 6 weeks",
                    "th": "• เริ่มขยับข้อเท้าเบาๆ ที่ 6 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Posterior skin necrosis from upward tilt of tongue fragment; severe loss of heel height, widened heel, and peroneal tendon impingement",
                    "th": "• ชิ้นลิ้นกระดกกดผิวหนังด้านหลังเน่าตาย; ส้นเท้าเตี้ย บานออก และกดเบียดเส้นเอ็น Peroneal"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Displaced Tongue-type calcaneal fracture with loss of Bohler's angle (<20°)\n• Severe posterior skin blanching / tenting (Orthopedic Emergency)",
                    "th": "• กระดูกส้นเท้าหักแบบ Tongue-type ที่เคลื่อนตัวและมุม Bohler's angle ลดลง (<20°)\n• ชิ้นกระดูกดึงรั้งผิวหนังด้านหลังซีดตึง (ภาวะฉุกเฉิน)"
                  },
                  "method": {
                    "en": "• Essex-Lopresti Percutaneous Leverage Technique: Large Steinmann pin inserted axially into tongue fragment -> Plantarflex ankle and pry upward to lever posterior facet into reduction -> Drive pins across fracture into anterior calcaneus + Supplementary cannulated screws (6.5–7.3 mm)\n• Minimally Invasive Sinus Tarsi approach with low-profile plate if percutaneous reduction incomplete",
                    "th": "• วิธีงัดกระดูกผ่านผิวหนัง (Essex-Lopresti Technique): ตอกเข็ม Steinmann Pin ขนาดใหญ่เข้าชิ้นลิ้น -> งอปลายเท้าลงและงัดเข็มขึ้นเพื่อดึงชิ้นผิวข้อกลับเข้าที่ -> ตอกเข็มข้ามรอยหักเข้ากระดูกส่วนหน้า + ขันสกรู Cannulated Screws 6.5–7.3 มม. ยึดตรึง\n• ผ่าตัดเปิดแผลเล็กผ่าน Sinus Tarsi ดามแผ่นเหล็กล็อคหากจัดกระดูกปิดไม่สนิท"
                  },
                  "rehabilitation": {
                    "en": "• Strict non-weightbearing for 8–10 weeks; early active ankle and subtalar ROM exercises out of splint at 2 weeks post-op",
                    "th": "• งดลงน้ำหนัก 8–10 สัปดาห์; เริ่มฝึกขยับข้อเท้าและข้อใต้ทาเลสที่ 2 สัปดาห์หลังผ่าตัด"
                  },
                  "pitfalls": {
                    "en": "• Delaying reduction when skin is tented, leading to posterior heel slough and wound breakdown",
                    "th": "• ผ่าตัดงัดกระดูกล่าช้าขณะที่ผิวหนังตึงเต่ง ทำให้ผิวหนังส้นเท้าเน่าตาย"
                  }
                }
              },
              "illustrationId": "/images/essex_lopresti/tongue_type.png",
              "xrayDescription": {
                "en": "Horizontal fracture line extending to posterior tuberosity with dorsal tilt of tongue fragment and reduced Bohler's angle (<20°).",
                "th": "เห็นรอยหักแนวนอนพาดทะลุไปทางตุ่มหลัง ชิ้นลิ้นกระดกขึ้นด้านบน และมุม Bohler's angle ลดลง (<20°)"
              }
            },
            {
              "type": "Joint-Depression",
              "name": {
                "en": "Intra-Articular: Joint-Depression Type",
                "th": "3. Joint-Depression Type (หักเข้าข้อ ผิวข้อยุบ - Crushed Joint Fragment - พบบ่อยที่สุด)"
              },
              "description": {
                "en": "Secondary fracture line curves SUPERIORLY exiting just behind the posterior facet\nIsolates the articular posterior facet fragment and drives it deep into the cancellous calcaneal body\nMOST COMMON intra-articular pattern (~75%)\nBohler's angle is SEVERELY REDUCED or INVERTED (<0°)",
                "th": "รอยหักรอบสอง (Secondary line) โค้งพาดขึ้นด้านบนทะลุออกตรงหลังต่อผิวข้อ Posterior facet พอดี\nตัดขาดชิ้นผิวข้อต่อแยกออกเป็นอิสระและถูกอัดยุบจมลงไปในเนื้อกระดูกพรุนของส้นเท้า\nเป็นรูปแบบหักเข้าข้อที่ **พบบ่อยที่สุด (~75%)**\nมุม Bohler's angle ลดลงรุนแรง หรือติดลบ (<0°)"
              },
              "moi": {
                "en": "High-energy axial loading (fall from height or motor vehicle crash).",
                "th": "แรงกดอัดตามแนวแกนพลังงานสูง (ตกจากที่สูงรุนแรง หรืออุบัติเหตุรถยนต์)"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Secondary fracture line exits superiorly behind posterior facet, isolating depressed articular facet crushed into cancellous body; Bohler's angle inverted (<0°); gold standard is staged ORIF via extensile lateral approach or sinus tarsi approach once 'wrinkle sign' appears (7–14 days), elevating facet and restoring heel geometry.",
                  "th": "รอยหักพาดขึ้นด้านบนหลังผิวข้อ ตัดชิ้น Posterior Facet ขาดและอัดยุบจมลงในเนื้อกระดูกส้นเท้า มุม Bohler's angle ติดลบ (<0°) การรักษามาตรฐานคือผ่าตัด ORIF ผ่านแผล Extensile Lateral หรือ Sinus Tarsi หลังรอให้ยุบบวมจนเกิด 'Wrinkle Sign' (7–14 วัน) เพื่อยกผิวข้อและคืนรูปทรงส้นเท้า"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Severe peripheral vascular disease, insulin-dependent diabetes with neuropathy, active heavy smokers (>1 pack/day), non-compliant patients, or non-displaced fractures",
                    "th": "• ผู้ป่วยเบาหวานรุนแรงที่มีปลายประสาทเสื่อม, โรคหลอดเลือดส่วนปลาย, สูบบุหรี่จัด (>1 ซอง/วัน), ผู้ป่วยไม่ร่วมมือ, หรือกระดูกหักไม่เคลื่อน"
                  },
                  "method": {
                    "en": "• Bulky compressive Robert-Jones dressing + strict elevation + non-weightbearing splint/cast for 10–12 weeks",
                    "th": "• พันผ้าหนา Robert-Jones dressing + ยกขาสูง + ดามเฝือกงดลงน้ำหนัก 10–12 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Active subtalar ROM out of splint at 6 weeks; custom orthotic shoe inserts with heel cup",
                    "th": "• เริ่มฝึกหมุนข้อเท้าที่ 6 สัปดาห์; ตัดแผ่นรองรองเท้าเสริมส้น (Heel cup)"
                  },
                  "pitfalls": {
                    "en": "• Heel shortening, widening, severe varus malunion, and painful subtalar arthritis with lateral subfibular impingement",
                    "th": "• ส้นเท้าสั้นลง บานออก เบี้ยวโก่งเข้าใน และเกิดข้อส้นเท้าเสื่อมพร้อมเอ็นใต้ตาตุ่มนอกเสียดสีปวดรุนแรง"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Displaced Joint-Depression calcaneal fracture with articular step-off ≥ 2 mm, loss of Bohler's angle (<20°), or heel varus > 5° in healthy patients with good skin condition",
                    "th": "• กระดูกส้นเท้าหักผิวข้อยุบที่มีผิวข้อเหลื่อม ≥ 2 มม., มุม Bohler's angle < 20° หรือส้นเท้าเอียงเข้าใน > 5° ในผู้ป่วยที่เนื้อเยื่อและสุขภาพพร้อมผ่าตัด"
                  },
                  "method": {
                    "en": "• Staged ORIF via Extensile Lateral Approach (delayed 7–14 days until 'Wrinkle Sign' positive):\n  1. Full-thickness subperiosteal 'no-touch' flap retraction\n  2. Disimpact and elevate depressed posterior facet fragments to anatomical joint level\n  3. Subchondral bone graft / calcium phosphate void filler to support elevated facet\n  4. Rigid Calcaneal Locking Plate fixation (securing Sustentaculum tali, posterior facet, anterior process, and tuberosity)\n• Minimally invasive Sinus Tarsi approach for lower wound complication risk",
                    "th": "• ผ่าตัดเปิด ORIF ผ่านแผลด้านข้าง (Extensile Lateral Approach) หลังรอผิวยุบบวมจนเกิด 'Wrinkle Sign' (7–14 วัน):\n  1. เปิดแผ่นผิวหนังลึกติดกระดูกชั้นเดียวแบบห้ามดึงรั้ง (No-touch technique)\n  2. งัดยกชิ้นผิวข้อ Posterior facet ที่ยุบขึ้นมาอยู่ในระดับกายวิภาคปกติ\n  3. ใส่กระดูกเทียมเสริมโพรงใต้ผิวข้อ (Bone Graft / Void Filler) ค้ำยันไม่ให้ผิวข้อยุบซ้ำ\n  4. ดามแผ่นเหล็กล็อค Calcaneal Locking Plate ยึด Sustentaculum tali, ผิวข้อ, และตุ่มส้นเท้าอย่างมั่นคง\n• หรือผ่าตัดแผลเล็ก Sinus Tarsi Approach เพื่อลดความเสี่ยงแผลผ่าตัดติดเชื้อ"
                  },
                  "rehabilitation": {
                    "en": "• Strict non-weightbearing for 10–12 weeks; early active subtalar and ankle ROM out of removable splint at 2–3 weeks post-op; protected progressive weight-bearing at 12 weeks",
                    "th": "• งดลงน้ำหนักอย่างเข้มงวด 10–12 สัปดาห์; เริ่มฝึกขยับข้อเท้าและข้อใต้ทาเลสที่ 2–3 สัปดาห์หลังผ่าตัด; เริ่มฝึกแตะลงน้ำหนักที่ 12 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Operating through acutely swollen, blistered skin causing catastrophic full-thickness flap necrosis and chronic osteomyelitis (MUST WAIT for wrinkle sign!)\n• Failure to reduce heel varus and wideness leading to lateral subfibular impingement",
                    "th": "• ผ่าตัดผ่านผิวหนังที่บวมเต่งหรือมีตุ่มน้ำพอง ทำให้แผลผ่าตัดเน่าแยกและการติดเชื้อเรื้อรัง (ต้องรอ Wrinkle Sign เสมอ!)\n• จัดทรงส้นเท้าไม่ดีทำให้ส้นเท้าบานออกและเบี้ยวโก่ง เอ็นใต้ตาตุ่มนอกกดทับกระดูก"
                  }
                }
              },
              "illustrationId": "/images/essex_lopresti/joint_depression.png",
              "xrayDescription": {
                "en": "Crushed, rotated posterior facet fragment driven into calcaneal body with severe reduction of Bohler's angle (<0°).",
                "th": "เห็นชิ้นผิวข้อ Posterior facet แตกหมุนยุบจมลงในตัวกระดูกส้นเท้าอย่างชัดเจน มุม Bohler's angle ติดลบ (<0°)"
              }
            }
          ]
        },
        {
          "system": "Sanders",
          "fullName": {
            "en": "Sanders Calcaneal Fracture Classification (CT-Based)",
            "th": "การจำแนกกระดูกส้นเท้าหักตามภาพถ่ายคอมพิวเตอร์ Sanders"
          },
          "description": {
            "en": "Gold standard CT-scan-based classification for intra-articular calcaneal fractures based on the number and location of primary articular fracture lines across the posterior facet (coronal CT view).",
            "th": "ระบบจำแนกกระดูกส้นเท้าหักเข้าข้อตามภาพเอกซเรย์คอมพิวเตอร์ (CT Scan) มาตรฐานหลัก แบ่งตามจำนวนตำแหน่งรอยหักพาดผ่านผิวข้อ Posterior facet ในภาพตัด Coronal (แบ่งเป็นสาย A, B, C และ Type I - IV)"
          },
          "concept": {
            "title": {
              "en": "Sanders Coronal CT Surgical Concept",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ Sanders Classification"
            },
            "imageUrl": "/images/sanders/concept.png",
            "corePrinciple": {
              "en": "Sanders classifies intra-articular calcaneal fractures on coronal CT images through the posterior facet using lines A, B, and C to count displaced articular fragments and predict surgical reconstructability.",
              "th": "Sanders จำแนกกระดูกส้นเท้าหักเข้าข้อจากภาพตัด Coronal CT ผ่านผิวข้อ Posterior facet โดยใช้เส้น A, B, C ในการนับชิ้นกระดูกที่เคลื่อนเพื่อทำนายความสำเร็จในการผ่าตัดจัดผิวข้อ"
            },
            "rules": [
              {
                "en": "Type I: Non-displaced fracture regardless of line count (<2 mm articular step-off)",
                "th": "Type I: รอยหักไม่เคลื่อนตัว ไม่ว่าจะกี่เส้นก็ตาม (ผิวข้อเหลื่อม <2 มม.)"
              },
              {
                "en": "Type II: 2-part articular fracture (1 primary fracture line displaced >2 mm; subtyped IIA, IIB, IIC based on line location)",
                "th": "Type II: หักเข้าข้อ 2 ชิ้น (มี 1 เส้นรอยหัก เคลื่อน >2 มม.; แบ่งย่อย IIA, IIB, IIC ตามตำแหน่งเส้น A, B, C)"
              },
              {
                "en": "Type III: 3-part articular fracture (2 fracture lines displaced >2 mm with central depressed piece; subtyped IIIAB, IIIAC, IIIBC)",
                "th": "Type III: หักเข้าข้อ 3 ชิ้น (มี 2 เส้นรอยหัก เคลื่อน >2 มม. พร้อมชิ้นกลางยุบ; แบ่งย่อย IIIAB, IIIAC, IIIBC)"
              },
              {
                "en": "Type IV: 4-part articular fracture (≥3 fracture lines, severely comminuted / crushed posterior facet)",
                "th": "Type IV: หักเข้าข้อ ≥4 ชิ้น (มีเส้นรอยหัก ≥3 เส้น ผิวข้อแตกป่นละเอียด)"
              }
            ],
            "clinicalSignificance": [
              {
                "en": "Sanders Type I: Non-operative management with non-weightbearing boot/cast for 6–8 weeks (~90% excellent outcomes)",
                "th": "Sanders Type I: รักษาแบบไม่ผ่าตัด ใส่อุปกรณ์งดลงน้ำหนัก 6–8 สัปดาห์ (ผลดี >90%)"
              },
              {
                "en": "Sanders Type II: Primary gold standard indication for ORIF via lateral approach with locking plate and lag screws (>80–85% good/excellent results)",
                "th": "Sanders Type II: ข้อบ่งชี้มาตรฐานหลักสำหรับการผ่าตัด ORIF ดามแผ่นเหล็กล็อค (ผลดี >80–85%)"
              },
              {
                "en": "Sanders Type III: Operative ORIF with complex articular reconstruction, elevation of depressed central fragment, and subchondral bone grafting",
                "th": "Sanders Type III: ผ่าตัด ORIF ซับซ้อน งัดยกชิ้นกระดูกผิวยุบกลางข้อ ร่วมกับเสริมกระดูกเทียมดามเพลท"
              },
              {
                "en": "Sanders Type IV: Primary Subtalar Arthrodesis (joint fusion) combined with calcaneal body shape reconstruction is preferred over primary ORIF due to high ORIF failure and chronic pain rates",
                "th": "Sanders Type IV: ผ่าตัดเชื่อมข้อส้นเท้าเป็นอันดับแรก (Primary Subtalar Arthrodesis) ร่วมกับจัดทรงส้นเท้า เนื่องจากผลการผ่าตัด ORIF ไม่ดีและเสี่ยงปวดเรื้อรังสูง"
              }
            ]
          },
          "investigations": [
            {
              "name": "Coronal CT Scan of Calcaneus",
              "details": {
                "en": "Coronal CT slices at widest aspect of posterior facet. Gold standard to identify fracture lines (A, B, C), count articular fragments, measure displacement (>2mm), and assign Sanders Type I-IV.",
                "th": "เอกซเรย์คอมพิวเตอร์ (CT scan) ตัดตามแนว Coronal บริเวณส่วนที่กว้างที่สุดของผิวข้อ Posterior facet เป็นมาตรฐานหลักในการนับจำนวนชิ้นกระดูกหัก (A, B, C) และแบ่งชนิด Sanders I-IV"
              }
            },
            {
              "name": "Axial & Sagittal CT Reconstructions",
              "details": {
                "en": "Axial and sagittal CT views. Evaluates sustentaculum tali fragment integrity, calcaneocuboid joint extension, and heel height/width loss.",
                "th": "ภาพ CT Scan แนว Axial และ Sagittal ใช้ประเมินความสมบูรณ์ของกระดูก Sustentaculum tali, การลุกลามถึงข้อ Calcaneocuboid และการยุบตัวเสียทรงส้นเท้า"
              }
            },
            {
              "name": "Lateral & Axial Plain Radiographs",
              "details": {
                "en": "Standard lateral and Harris axial plain films. Used for initial screening and measuring Bohler's angle (<20°).",
                "th": "ภาพเอกซเรย์ธรรมดาท่าด้านข้างและท่า Harris view ใช้ในการคัดกรองเบื้องต้นและวัดมุม Bohler's angle"
              }
            }
          ],
          "types": [
            {
              "type": "Sanders I",
              "name": {
                "en": "Sanders Type I (Non-displaced / All <2mm)",
                "th": "Sanders Type I (ไม่เคลื่อนตัว - ชิ้นกระดูกเกย <2มม. ทุกแบบ)"
              },
              "description": {
                "en": "All non-displaced intra-articular fractures (<2 mm displacement of posterior facet fragments)\nRegardless of the number of fracture lines\nArticular surface remains congruent\nHigh success rate with non-operative treatment (~90-95%)",
                "th": "กระดูกส้นเท้าหักเข้าข้อที่ชิ้นกระดูกไม่เคลื่อนตัว (ชิ้นผิวข้อเกยหรือถ่าง < 2 มม.)\nโดยไม่คำนึงถึงจำนวนรอยหัก\nผิวข้อต่อยังคงเรียบเสมอกันดี\nอัตราการรักษาสำเร็จสูงมากโดยไม่ต้องผ่าตัด (~90-95%)"
              },
              "moi": {
                "en": "Low-energy axial impact to the heel.",
                "th": "แรงกดตามแนวแกนพลังงานต่ำเข้าที่ส้นเท้า"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "All non-displaced intra-articular fractures (<2 mm step-off) on coronal CT through posterior facet regardless of line count; non-operative treatment achieves >90% good/excellent results; early subtalar ROM in removable boot.",
                  "th": "กระดูกส้นเท้าหักเข้าข้อชนิดไม่เคลื่อนตัว (ผิวข้อเหลื่อม <2 มม. ในภาพ Coronal CT) ไม่ว่าจะมีกี่เส้นรอยหัก การรักษาแบบไม่ผ่าตัดให้ผลดีเยี่ยม >90% เน้นฝึกขยับข้อเท้าเร็วในบูทถอดได้"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Non-displaced posterior facet fracture with <2 mm articular step-off on coronal CT\n• Intact Bohler's angle (≥20°–40°)",
                    "th": "• รอยหักเข้าข้อ Posterior Facet ชนิดไม่เคลื่อนตัว (ผิวข้อเหลื่อม <2 มม. ใน Coronal CT)\n• มุม Bohler's angle ยังคงปกติ (≥20°–40°)"
                  },
                  "method": {
                    "en": "• Non-weightbearing short-leg cast or removable CAM walking boot for 6–8 weeks with compression dressing to minimize swelling",
                    "th": "• ใส่เฝือกสั้นงดลงน้ำหนักหรือบูท CAM Boot ถอดได้ 6–8 สัปดาห์ ร่วมกับพันผ้ายืดลดบวม"
                  },
                  "rehabilitation": {
                    "en": "• Active subtalar inversion/eversion and ankle dorsiflexion/plantarflexion exercises out of boot starting at 2–3 weeks; progressive protected weight-bearing at 8–10 weeks",
                    "th": "• ถอดบูทเริ่มฝึกกระดกและบิดข้อเท้าเข้า-ออกที่ 2–3 สัปดาห์; เริ่มแตะลงน้ำหนักประคองที่ 8–10 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Premature unrestricted weight-bearing causing secondary displacement and joint collapse",
                    "th": "• ปล่อยให้ลงน้ำหนักเต็มที่เร็วเกินไปทำให้ผิวข้อทรุดตัวเคลื่อนหลุดซ้ำ"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Strictly not indicated for true non-displaced Type I fractures (surgery adds wound morbidity without functional benefit)",
                    "th": "• ไม่มีข้อบ่งชี้ในการผ่าตัดสำหรับ Type I ที่ไม่เคลื่อน (การผ่าตัดเพิ่มความเสี่ยงแผลเน่าโดยไม่ได้ประโยชน์เพิ่มขึ้น)"
                  },
                  "method": {
                    "en": "• Percutaneous screw fixation only if dynamic instability demonstrated on Broden's stress views under fluoroscopy",
                    "th": "• ยึดสกรูผ่านผิวหนังเฉพาะรายที่พบความไม่มั่นคงเมื่อตรวจโยกใต้เครื่องเอกซเรย์"
                  },
                  "rehabilitation": {
                    "en": "• Protected ROM at 2 weeks",
                    "th": "• เริ่มฝึกขยับข้อเท้าที่ 2 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Unnecessary extensile incision causing wound dehiscence for a non-displaced fracture",
                    "th": "• เปิดแผลผ่าตัดใหญ่โดยไม่จำเป็นจนเกิดแผลแยกติดเชื้อในกระดูกที่ไม่เคลื่อน"
                  }
                }
              },
              "illustrationId": "/images/sanders/sanders_1.png",
              "xrayDescription": {
                "en": "Fracture lines visible on coronal CT through posterior facet with <2mm displacement.",
                "th": "เห็นรอยหักพาดผ่านผิวข้อ Posterior facet ในภาพ Coronal CT โดยชิ้นกระดูกเหลื่อมซ้อน <2 มม."
              }
            },
            {
              "type": "Sanders II",
              "name": {
                "en": "Sanders Type II (Two-Part Fractures - 1 Line >2mm)",
                "th": "Sanders Type II (หักแยกเป็น 2 ชิ้น - รอยหัก 1 เส้น เคลื่อน >2มม.)"
              },
              "description": {
                "en": "Two-part intra-articular fractures of the posterior facet (>2 mm displacement)\nCaused by ONE primary articular fracture line\nSubdivided into IIA (lateral line A), IIB (central line B - most common), and IIC (medial line C near sustentaculum)\nGold standard indication for ORIF",
                "th": "กระดูกส้นเท้าหักเข้าข้อแยกออกเป็น 2 ชิ้นส่วน (เคลื่อนตัว > 2 มม.)\nเกิดจากรอยหักพาดผ่านผิวข้อเพียง **1 เส้น**\nแบ่งย่อยเป็น IIA (รอยหักด้านนอก Line A), IIB (รอยหักตรงกลาง Line B - พบบ่อยที่สุด) และ IIC (รอยหักด้านใน Line C)\nเป็นข้อบ่งชี้มาตรฐานหลักในการผ่าตัด ORIF"
              },
              "moi": {
                "en": "Axial loading from fall from height or motor vehicle collision.",
                "th": "แรงกดตามแนวแกนจากการตกที่สูง หรืออุบัติเหตุทางรถยนต์"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "2-part posterior facet fracture displaced >2 mm with 1 primary fracture line (IIA lateral, IIB central, IIC medial); gold standard surgical indication for anatomic ORIF via extensile lateral approach with locking plate and subchondral lag screws (>80%–85% good/excellent outcomes).",
                  "th": "กระดูกส้นเท้าหักเข้าข้อ 2 ชิ้นเคลื่อนตัว >2 มม. มีรอยหัก 1 เส้น (IIA ด้านนอก, IIB ตรงกลาง, IIC ด้านใน) เป็นข้อบ่งชี้มาตรฐานหลักสำหรับการผ่าตัดเปิดจัดกระดูกดามแผ่นเหล็กล็อค (ORIF Extensile Lateral / Sinus Tarsi Approach) ร่วมกับสกรูอัดใต้ผิวข้อ ให้ผลการรักษาดี >80%–85%"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Non-ambulatory patients, end-stage vascular disease, active severe local soft tissue infection, or non-compliant patients",
                    "th": "• ผู้ป่วยติดเตียงไม่เดิน, โรคหลอดเลือดส่วนปลายรุนแรง, มีการติดเชื้อที่ผิวหนัง, หรือผู้ป่วยไม่ร่วมมือ"
                  },
                  "method": {
                    "en": "• Bulky Jones compression dressing, strict elevation until swelling resolves, non-weightbearing boot for 10–12 weeks",
                    "th": "• พันผ้าหนาลดบวม ยกขาสูง และใส่บูทงดลงน้ำหนัก 10–12 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Subtalar ROM at 6 weeks",
                    "th": "• ฝึกขยับข้อเท้าที่ 6 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Rapid post-traumatic subtalar arthritis, loss of hindfoot inversion/eversion, and chronic lateral subfibular pain",
                    "th": "• เกิดข้อส้นเท้าเสื่อมรวดเร็ว สูญเสียการหมุนข้อเท้า และปวดขอบเท้าด้านนอกเรื้อรัง"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All displaced Sanders Type II fractures (articular step-off ≥ 2 mm) in patients with acceptable soft tissue and host status (GOLD STANDARD INDICATION)",
                    "th": "• กระดูกส้นเท้าหัก Sanders Type II ที่ผิวข้อเหลื่อม ≥ 2 มม. ทุกรายในผู้ป่วยที่เนื้อเยื่อพร้อมผ่าตัด (ข้อบ่งชี้มาตรฐานหลัก)"
                  },
                  "method": {
                    "en": "• Extensile Lateral Approach (delayed until positive wrinkle sign):\n  1. L-shaped subperiosteal flap elevation\n  2. Disimpact lateral wall and mobilize posterior facet fragment\n  3. Anatomic reduction of posterior facet to constant medial Sustentaculum tali fragment\n  4. Subchondral 3.5 mm Lag Screws directly across facet + Lateral Calcaneal Locking Plate (spanning anterior process to posterior tuberosity)\n• Sinus Tarsi minimally invasive approach with cannulated screws/mini-plate as an alternative",
                    "th": "• ผ่าตัดเปิดทางด้านข้าง (Extensile Lateral Approach หลังรอเกิด Wrinkle Sign):\n  1. เปิดแผ่นผิวหนังรูปตัว L ลึกติดกระดูก\n  2. แง้มผนังกระดูกด้านนอกเพื่อเปิดมองเห็นชิ้นผิวข้อ Posterior Facet\n  3. จัดเรียงชิ้นผิวข้อให้ตรงเรียบสนิทกับชิ้น Sustentaculum tali ด้านในที่มั่นคง\n  4. ขันยึดด้วยสกรูอัดใต้ผิวข้อ 3.5 mm Lag Screws + ดามแผ่นเหล็กล็อค Calcaneal Locking Plate ทางด้านนอก\n• หรือผ่าตัดแผลเล็ก Sinus Tarsi Approach ยึดด้วยสกรูและเพลทเล็ก"
                  },
                  "rehabilitation": {
                    "en": "• Strict non-weightbearing for 10–12 weeks; early active subtalar ROM out of splint at 2 weeks; progressive partial weight-bearing starting at 10–12 weeks",
                    "th": "• งดลงน้ำหนัก 10–12 สัปดาห์; เริ่มฝึกขยับข้อเท้าในเฝือกอ่อนที่ 2 สัปดาห์; เริ่มแตะลงน้ำหนักที่ 10–12 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Operating through tense blisters leading to flap necrosis\n• Residual articular step-off >1 mm or uncorrected varus deformity",
                    "th": "• ผ่าตัดขณะผิวหนังยังบวมเต่งทำให้แผลผ่าตัดเน่าแยก\n• ผิวข้อยังเหลื่อม >1 มม. หรือส้นเท้ายังโก่งเอียงเข้าใน"
                  }
                }
              },
              "illustrationId": "/images/sanders/sanders_2.png",
              "xrayDescription": {
                "en": "Single articular fracture line (A, B, or C) on coronal CT dividing posterior facet into 2 displaced pieces (>2mm).",
                "th": "เห็นรอยหักพาดผ่านผิวข้อ 1 เส้น (A, B หรือ C) ในภาพ Coronal CT แยกผิวข้อออกเป็น 2 ชิ้นที่เคลื่อนตัว >2มม."
              }
            },
            {
              "type": "Sanders III",
              "name": {
                "en": "Sanders Type III (Three-Part Fractures - 2 Lines with Depressed Central Piece)",
                "th": "Sanders Type III (หักแยกเป็น 3 ชิ้น - รอยหัก 2 เส้น ชิ้นกลางยุบ)"
              },
              "description": {
                "en": "Three-part intra-articular fractures with 2 primary fracture lines\nUsually presents with a depressed central articular fragment\nSubdivided into IIIAB, IIIAC, and IIIBC based on fracture line combinations\nTechnically demanding surgical reconstruction",
                "th": "กระดูกส้นเท้าหักเข้าข้อแยกออกเป็น 3 ชิ้นส่วน เกิดจากรอยหักพาดผ่านผิวข้อ **2 เส้น**\nมักพบชิ้นกระดูกผิวข้อส่วนกลางถูกกดอัดยุบจมลงไป\nแบ่งย่อยเป็น IIIAB, IIIAC และ IIIBC ตามคู่ของเส้นรอยหัก\nต้องการเทคนิคการผ่าตัดจัดดามผิวข้อที่ประณีตสูงมาก"
              },
              "moi": {
                "en": "High-energy axial compression on the calcaneus.",
                "th": "แรงอัดตามแนวแกนพลังงานสูงกระแทกเข้าที่กระดูกส้นเท้า"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "3-part intra-articular fracture with 2 primary fracture lines (IIIAB, IIIAC, IIIBC) and a crushed/depressed central articular fragment; technically demanding reconstruction; ORIF via lateral extensile approach with elevation of central fragment, subchondral bone void grafting, and lateral locking plate.",
                  "th": "กระดูกส้นเท้าหักเข้าข้อ 3 ชิ้น มีรอยหัก 2 เส้น (IIIAB, IIIAC, IIIBC) พร้อมชิ้นผิวกระดูกตรงกลางถูกกดอัดยุบจมลงไป ต้องผ่าตัด ORIF อย่างประณีตผ่านแผล Extensile Lateral Approach งัดยกชิ้นกลาง เสริมกระดูกเทียมค้ำยัน และดามแผ่นเหล็กล็อค"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Non-surgical candidates with severe systemic comorbidities, severe vascular compromise, or extensive soft tissue destruction",
                    "th": "• ผู้ป่วยที่มีโรคร่วมทางกายรุนแรง, เส้นเลือดเลี้ยงขาตีบตันรุนแรง, หรือเนื้อเยื่อถูกทำลายหนักผ่าตัดไม่ได้"
                  },
                  "method": {
                    "en": "• Bulky compressive dressing + strict elevation + cast immobilization for 10–12 weeks",
                    "th": "• พันผ้าหนาลดบวม + ยกขาสูง + ดามเฝือก 10–12 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Progressive ROM after 6–8 weeks; lifelong custom orthotics",
                    "th": "• เริ่มฝึกขยับข้อเท้าหลัง 6–8 สัปดาห์; ตัดแผ่นรองเท้าพิเศษตลอดชีวิต"
                  },
                  "pitfalls": {
                    "en": "• Severe debilitating subtalar arthrosis, arch collapse, and permanent heel deformity",
                    "th": "• ข้อส้นเท้าเสื่อมรุนแรง อุ้งเท้าทรุดพัง และส้นเท้าผิดรูปถาวร"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Displaced Sanders Type III fractures in physiological candidates with viable skin envelope",
                    "th": "• กระดูกหัก Sanders Type III ที่เคลื่อนตัวทุกรายในผู้ป่วยที่สภาพร่างกายและผิวหนังพร้อมผ่าตัด"
                  },
                  "method": {
                    "en": "• Staged ORIF via Lateral Extensile Approach (delay until positive wrinkle sign):\n  1. Mobilize lateral fragment\n  2. Disimpact and elevate centrally depressed facet fragment to congruent joint line\n  3. Place autologous bone graft or calcium phosphate bone void filler to support elevated articular surface\n  4. Secure reduction with multiple subchondral 2.7/3.5 mm mini-lag screws + Rigid Low-Profile Calcaneal Locking Plate",
                    "th": "• ผ่าตัดเปิด ORIF ทางด้านข้าง (Extensile Lateral Approach หลังรอเกิด Wrinkle Sign):\n  1. เปิดแง้มชิ้นกระดูกด้านนอก\n  2. งัดยกชิ้นผิวกระดูกตรงกลางที่ยุบจมขึ้นมาให้เรียบเสมอกับแนวข้อ\n  3. ใส่กระดูกปลูก (Bone Graft) หรือกระดูกเทียม Calcium Phosphate เสริมโพรงใต้ผิวข้อค้ำยัน\n  4. ยึดผิวข้อด้วยสกรูจิ๋ว 2.7/3.5 mm Mini-lag screws + ดามแผ่นเหล็กล็อค Calcaneal Locking Plate"
                  },
                  "rehabilitation": {
                    "en": "• Strict non-weightbearing for 10–12 weeks; early active subtalar motion at 2–3 weeks; partial weight-bearing progressing to full at 12–14 weeks",
                    "th": "• งดลงน้ำหนักอย่างเข้มงวด 10–12 สัปดาห์; เริ่มฝึกหมุนข้อเท้าที่ 2–3 สัปดาห์; เริ่มแตะลงน้ำหนักและลงเต็มที่ที่ 12–14 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Inadequate elevation of depressed central fragment leaving residual articular step-off >2 mm\n• Wound edge breakdown and hardware exposure",
                    "th": "• งัดยกชิ้นกระดูกกลางไม่สุดทำให้ผิวข้อยังเหลื่อม >2 มม.\n• ขอบแผลผ่าตัดด้านข้างเน่าแยกจนเห็นแผ่นเหล็กดาม"
                  }
                }
              },
              "illustrationId": "/images/sanders/sanders_3.png",
              "xrayDescription": {
                "en": "Two articular fracture lines on coronal CT dividing posterior facet into 3 pieces with central fragment depression.",
                "th": "เห็นรอยหัก 2 เส้นในภาพ Coronal CT แยกผิวข้อออกเป็น 3 ชิ้น โดยมีชิ้นกลางยุบตัวจมลง"
              }
            },
            {
              "type": "Sanders IV",
              "name": {
                "en": "Sanders Type IV (Four-Part / Comminuted - 3+ Lines)",
                "th": "Sanders Type IV (แตกละเอียด >4 ชิ้น - รอยหักตั้งแต่ 3 เส้นขึ้นไป)"
              },
              "description": {
                "en": "Four-part or highly comminuted intra-articular fractures (3 or more primary fracture lines)\nSevere comminution of the posterior subtalar facet\nHigh rate of post-traumatic subtalar arthritis\nOften requires Primary Subtalar Arthrodesis (joint fusion)",
                "th": "กระดูกส้นเท้าหักเข้าข้อแตกละเอียดตั้งแต่ 4 ชิ้นขึ้นไป (มีรอยหักพาดผ่านผิวข้อตั้งแต่ 3 เส้นขึ้นไป)\nผิวข้อต่อ Posterior facet แตกป่นละเอียดอย่างรุนแรง\nอัตราการเกิดข้อเสื่อมหลังอุบัติเหตุสูงที่สุด\nมักจำเป็นต้องผ่าตัดเชื่อมข้อส้นเท้าเป็นอันดับแรก (**Primary Subtalar Arthrodesis**)"
              },
              "moi": {
                "en": "Extreme high-energy trauma (fall from great height or high-speed vehicle crash).",
                "th": "อุบัติเหตุพลังงานสูงรุนแรงสุดขีด (ตกจากที่สูงมาก หรือรถยนต์ชนความเร็วสูง)"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Severely comminuted ≥4-part articular fracture (≥3 fracture lines) with crushed irreconstructible posterior facet; extremely high rate of arthritis and chronic pain after ORIF; Primary Subtalar Arthrodesis combined with calcaneal body shape/height reconstruction is preferred over primary ORIF alone.",
                  "th": "กระดูกส้นเท้าหักเข้าข้อแตกละเอียดตั้งแต่ 4 ชิ้นขึ้นไป (รอยหัก ≥3 เส้น) ผิวข้อแตกป่นไม่สามารถจัดเรียงได้ การรักษาที่แนะนำคือ ผ่าตัดเชื่อมข้อใต้ทาเลสตั้งแต่แรก (Primary Subtalar Arthrodesis) ร่วมกับจัดทรงคืนความสูง/ความกว้างกระดูกส้นเท้า เพื่อป้องกันอาการปวดเรื้อรังจากการผ่าตัดจัดข้อล้มเหลว"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Non-ambulatory patients, extreme vascular compromise, or active sepsis",
                    "th": "• ผู้ป่วยติดเตียงไม่เดิน, โรคหลอดเลือดตีบตันขั้นรุนแรง, หรือมีการติดเชื้อในกระแสเลือด"
                  },
                  "method": {
                    "en": "• Bulky Jones splint, strict elevation, non-weightbearing for 12 weeks, followed by custom orthotic rocker-bottom shoes",
                    "th": "• ดามเฝือกหนา Jones Splint, ยกขาสูง, งดลงน้ำหนัก 12 สัปดาห์ และใส่รองเท้าพื้นโค้ง Rocker-bottom เสริมพิเศษ"
                  },
                  "rehabilitation": {
                    "en": "• Long-term orthotic brace support",
                    "th": "• ใส่กายอุปกรณ์ประคองเท้าตลอดชีวิต"
                  },
                  "pitfalls": {
                    "en": "• Total loss of hindfoot function, severe crippling pain, and secondary rigid flatfoot deformity",
                    "th": "• สูญเสียการทำงานของข้อส้นเท้าอย่างสิ้นเชิง ปวดเรื้อรังรุนแรง และเท้าแบนติดแข็ง"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Sanders Type IV comminuted fractures with irreconstructible articular cartilage (Preferred: Primary Subtalar Arthrodesis; Alternative: ORIF attempt with planned secondary fusion)",
                    "th": "• กระดูกหัก Sanders Type IV ที่แตกละเอียดไม่สามารถจัดผิวข้อได้ (ทางเลือกหลัก: ผ่าตัดเชื่อมข้อ Primary Subtalar Arthrodesis; ทางเลือกรอง: พยายามผ่าตัด ORIF และนัดเชื่อมข้อในอนาคต)"
                  },
                  "method": {
                    "en": "• Primary Subtalar Arthrodesis with Calcaneal Reconstruction:\n  1. Lateral approach: Reconstruct calcaneal body height, width, and Bohler's angle using a lateral locking plate\n  2. Denude remaining posterior facet articular cartilage down to subchondral bleeding bone\n  3. Pack autologous bone graft or structural graft into void\n  4. Compress and fuse subtalar joint with two large 6.5–7.3 mm Cannulated Screws from posterior calcaneus into talus body\n• Alternative: ORIF reconstruction alone (warn patient of high secondary fusion rate)",
                    "th": "• ผ่าตัดเชื่อมข้อส้นเท้าทันทีร่วมกับจัดทรงส้นเท้า (Primary Subtalar Arthrodesis):\n  1. เปิดแผลด้านข้าง: จัดรูปทรงความสูง ความกว้าง และมุม Bohler's angle ของตัวกระดูกส้นเท้าแล้วดามด้วยแผ่นเหล็กล็อค\n  2. ขูดลอกกระดูกอ่อนผิวข้อ Posterior Facet ที่แตกป่นออกจนถึงชั้นกระดูกที่มีเลือดออก\n  3. ใส่กระดูกปลูกเสริมในโพรงกระดูก\n  4. ขันอัดยึดเชื่อมข้อ Subtalar ด้วยสกรูขนาดใหญ่ 6.5–7.3 mm Cannulated Screws 2 ตัว จากหลังส้นเท้าทะลุเข้าตัว Talus\n• ทางเลือก: ผ่าตัด ORIF จัดกระดูกอย่างเดียว (ต้องแจ้งผู้ป่วยล่วงหน้าว่ามีโอกาสสูงมากที่จะต้องผ่าตัดเชื่อมข้อในอนาคต)"
                  },
                  "rehabilitation": {
                    "en": "• Strict non-weightbearing for 12 weeks until solid subtalar fusion is visible on CT; protected progressive weight-bearing at 12–16 weeks",
                    "th": "• งดลงน้ำหนักอย่างเข้มงวด 12 สัปดาห์จนกระทั่งข้อเชื่อมติดสมบูรณ์ใน CT scan; เริ่มแตะลงน้ำหนักที่ 12–16 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Attempting anatomical reconstruction of unsalvageable fragments leading to rapid hardware loosening, severe post-traumatic arthritis, and painful revision surgery",
                    "th": "• ดันทุรังผ่าตัดจัดชิ้นกระดูกที่แตกป่นละเอียดจนสกรูหลวม เกิดข้อเสื่อมรวดเร็ว และต้องผ่าตัดซ้ำแก้ไข"
                  }
                }
              },
              "illustrationId": "/images/sanders/sanders_4.png",
              "xrayDescription": {
                "en": "Severe comminution of posterior facet with 3+ fracture lines and >4 articular fragments on coronal CT.",
                "th": "เห็นรอยหักตั้งแต่ 3 เส้นขึ้นไปในภาพ Coronal CT แยกผิวข้อแตกป่นกระจาย >4 ชิ้นส่วน"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "lisfranc",
      "name": {
        "en": "Lisfranc (Tarsometatarsal)",
        "th": "ข้อต่อกลางเท้า ลิสแฟร็งค์ (Lisfranc / Tarsometatarsal)"
      },
      "regionConcept": {
        "physicalExam": [
          {
            "sign": "Plantar Ecchymosis Sign",
            "positive": {
              "en": "Ecchymosis over midfoot plantar surface (PATHOGNOMONIC sign for Lisfranc joint disruption)",
              "th": "รอยเขียวช้ำบริเวณฝ่าเท้าส่วนกลาง (เป็นสัญญาณเฉพาะ Pathognomonic สำหรับ Lisfranc joint rupture)"
            }
          },
          {
            "sign": "Fleck Sign (Radiographic Sign)",
            "positive": {
              "en": "Avulsion bone fragment in 1st-2nd intermetatarsal space on AP view, representing Lisfranc ligament avulsion",
              "th": "ชิ้นกระดูกกะเทาะขนาดเล็กบริเวณช่องระหว่าง Metatarsal 1-2 แสดงถึงเอ็น Lisfranc ligament ฉีกขาด"
            }
          },
          {
            "sign": "Midfoot Abduction & Pronation Stress Test",
            "positive": {
              "en": "Severe pain elicited by manual abduction and pronation of forefoot while holding hindfoot stable",
              "th": "ปวดรุนแรงบริเวณกลางเท้าเมื่อทำการดัดหมุนเท้าออกด้านนอก (Abduction & Pronation) ขณะยึดส้นเท้าไว้"
            }
          }
        ],
        "redFlags": [
          {
            "en": "Missed / Misdiagnosed Lisfranc Injury: Up to 20% missed initially; leads to progressive arch collapse, chronic foot deformity, and painful osteoarthritis",
            "th": "การวินิจฉัย Lisfranc พลาด: พลาดสูงถึง 20% ใน X-ray แรก ส่งผลให้อุ้งเท้าทรุด โครงสร้างไม่มั่นคงเรื้อรัง และข้อกลางเท้าเสื่อมรุนแรง"
          }
        ],
        "clinicalPearls": [
          {
            "en": "Plantar ecchymosis is pathognomonic for Lisfranc injury and warrants weight-bearing X-rays or CT evaluation.",
            "th": "รอยช้ำที่ฝ่าเท้า (Plantar ecchymosis) เป็นสัญญาณเฉพาะบ่งบอกถึง Lisfranc injury ต้องส่งเอกซเรย์แบบลงน้ำหนักหรือ CT scan"
          },
          {
            "en": "Weight-bearing bilateral foot X-rays are essential when non-weight-bearing films appear normal despite high suspicion.",
            "th": "การถ่ายเอกซเรย์เท้าแบบลงน้ำหนักสองข้างเป็นสิ่งจำเป็น เมื่อภาพเอกซเรย์ธรรมดาดูปกติแต่ผู้ป่วยปวดกดเจ็บกลางเท้าชัดเจน"
          },
          {
            "en": "Anatomic reduction is critical: displacement >2mm between 1st and 2nd metatarsal bases requires surgical fixation.",
            "th": "การจัดกระดูกให้ตรงเป๊ะมีความสำคัญที่สุด: การเคลื่อนตัว >2 มม. ต้องผ่าตัดยึดตรึง"
          }
        ]
      },
      "classifications": [
        {
          "system": "Myerson",
          "fullName": {
            "en": "Myerson Classification of Lisfranc (Tarsometatarsal) Joint Injuries",
            "th": "การจำแนกการบาดเจ็บข้อกลางเท้า Lisfranc แบบ Myerson"
          },
          "description": {
            "en": "Modified Hardcastle classification for tarsometatarsal (Lisfranc) joint injuries based on congruence and direction of displacement, determining surgical reconstruction vs arthrodesis.",
            "th": "ระบบจำแนกการบาดเจ็บของข้อต่อกลางเท้า Lisfranc (Tarsometatarsal) แบ่งตามระดับความเกยสมมาตรของข้อและทิศทางของการเคลื่อนตัว"
          },
          "concept": {
            "title": {
              "en": "Myerson Lisfranc Fracture-Dislocation Concept",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ Myerson Lisfranc Classification"
            },
            "corePrinciple": {
              "en": "Myerson classifies tarsometatarsal (Lisfranc) joint injuries based on congruence and displacement direction (Homolateral vs Divergent), evaluating structural breakdown of the transverse foot arch and Lisfranc ligament complex.",
              "th": "Myerson จำแนกการบาดเจ็บของข้อต่อกลางเท้า Lisfranc (Tarsometatarsal) ตามความสมมาตรและทิศทางของการหลุดเคลื่อน (Homolateral vs Divergent) เพื่อประเมินการพังทลายของส่วนโค้งเท้าและชุดเอ็น Lisfranc"
            },
            "rules": [
              {
                "en": "Type A (Homolateral Complete Incongruity): All 5 metatarsals displace together in one direction (usually lateral or dorsolateral)",
                "th": "Type A (Homolateral Complete Incongruity): กระดูกฝ่าเท้าทั้ง 5 ชิ้นหลุดเคลื่อนย้ายไปในทิศทางเดียวกันทั้งหมด"
              },
              {
                "en": "Type B (Homolateral Incomplete Incongruity): Partial displacement — B1 (isolated medial 1st TMT displacement) or B2 (isolated lateral metatarsals displacement)",
                "th": "Type B (Homolateral Incomplete Incongruity): หลุดเคลื่อนบางส่วน — B1 (หลุดเฉพาะข้อที่ 1 ด้านใน) หรือ B2 (หลุดเฉพาะกลุ่มนิ้วด้านนอก)"
              },
              {
                "en": "Type C (Divergent Dislocation): Metatarsals split in two directions — C1 (partial 1st medial and 2nd lateral) or C2 (complete 1st medial and 2nd–5th lateral)",
                "th": "Type C (Divergent Dislocation): กระดูกฝ่าเท้าหลุดแยกสองทาง — C1 (นิ้ว 1 หลุดเข้าใน นิ้ว 2 หลุดออกนอกบางส่วน) หรือ C2 (นิ้ว 1 หลุดเข้าใน นิ้ว 2–5 หลุดออกนอกทั้งหมด)"
              },
              {
                "en": "Displacement threshold: Tarsometatarsal step-off or diastasis >2 mm on weight-bearing views requires operative stabilization",
                "th": "เกณฑ์ระยะเคลื่อนตัว: ระยะอ้าหรือเหลื่อมของข้อ Tarsometatarsal >2 มม. ในภาพลงน้ำหนักต้องผ่าตัดยึดดาม"
              }
            ],
            "clinicalSignificance": [
              {
                "en": "Non-displaced (<2 mm displacement): Non-weightbearing short leg cast for 6–8 weeks",
                "th": "ไม่เคลื่อนตัว (เหลื่อม <2 มม.): ใส่เฝือกงดลงน้ำหนัก 6–8 สัปดาห์"
              },
              {
                "en": "Displaced Medial & Middle Columns (1st–3rd TMT): Mandatory ORIF with rigid transarticular screws or bridge plates to achieve 100% anatomic reduction",
                "th": "ข้อฝั่งในและกลาง (TMT 1–3) เคลื่อนตัว: ต้องผ่าตัด ORIF ยึดแน่นด้วย Transarticular Screws หรือ Bridge Plates ให้ตรงกายวิภาค 100%"
              },
              {
                "en": "Displaced Lateral Column (4th–5th TMT): K-wire fixation for 6 weeks to preserve lateral column motion and flexibility",
                "th": "ข้อฝั่งนอก (TMT 4–5) เคลื่อนตัว: ยึดด้วย K-wires ชั่วคราว 6 สัปดาห์เพื่อสงวนการเคลื่อนไหวของข้อฝั่งนอก"
              },
              {
                "en": "Purely Ligamentous / Comminuted Lisfranc: Primary TMT Arthrodesis (joint fusion of 1st–3rd TMT) yields superior long-term functional results over ORIF",
                "th": "กรณีเอ็นขาดสมบูรณ์ / ข้อแตกละเอียด: ผ่าตัดเชื่อมข้อกลางเท้า (Primary TMT Arthrodesis ของ TMT 1–3) ให้ผลระยะยาวดีกว่าผ่าตัดดามเหล็ก ORIF"
              },
              {
                "en": "Diagnostic Pitfall & Warning: Up to 20% of Lisfranc injuries are missed on initial non-weightbearing ER films; Plantar ecchymosis is pathognomonic and mandates weight-bearing films or CT scan",
                "th": "จุดตายและการเฝ้าระวัง: วินิจฉัยหลุดสูงถึง 20% ใน X-ray แรก; รอยช้ำฝ่าเท้า (Plantar ecchymosis) เป็นสัญญาณเฉพาะที่ต้องส่งเอกซเรย์ลงน้ำหนักหรือ CT scan"
              }
            ]
          },
          "investigations": [
            {
              "name": "AP Foot View",
              "details": {
                "en": "Evaluates alignment of 1st metacarpal-medial cuneiform and 2nd metatarsal-middle cuneiform lines (medial border of 2nd metatarsal must align with medial border of middle cuneiform).",
                "th": "ประเมินแนวเรียงตัวของกระดูกนิ้วเท้า 1 และ 2 โดยขอบด้านในของกระดูก Metatarsal ชิ้นที่ 2 ต้องชี้ตรงกับขอบด้านในของ Middle cuneiform เสมอ"
              }
            },
            {
              "name": "30° Medial Oblique Foot View",
              "details": {
                "en": "Evaluates 3rd metatarsal-lateral cuneiform alignment and 4th metatarsal-cuboid alignment.",
                "th": "ภาพเอกซเรย์เท้าเอียง 30 องศา ใช้ประเมินแนวเรียงตัวของกระดูก Metatarsal ชิ้นที่ 3 และ 4 กับกระดูก Cuboid"
              }
            },
            {
              "name": "Weight-Bearing AP & Lateral Foot Views",
              "details": {
                "en": "Gold standard for subtle/dynamic Lisfranc injuries. Widening >2mm between 1st and 2nd metatarsal bases ('Fleck Sign') indicates Lisfranc ligament disruption.",
                "th": "มาตรฐานหลักในการตรวจหาภาวะ Lisfranc ฉีกขาดในระยะแรก เห็นระยะอ้า >2มม. ระหว่างโคนกระดูกนิ้วเท้า 1 และ 2 ('Fleck Sign')"
              }
            }
          ],
          "types": [
            {
              "type": "Homolateral Complete Incongruity",
              "name": {
                "en": "Homolateral Complete Incongruity",
                "th": "Homolateral Complete Incongruity (หลุดเคลื่อนเบี่ยงข้างเดียวกันสมบูรณ์)"
              },
              "description": {
                "en": "Total tarsometatarsal joint incongruity\nAll 5 metatarsals displace together in one direction (usually lateral or dorsolateral)\nComplete Lisfranc complex disruption",
                "th": "ข้อต่อกลางเท้า Lisfranc สูญเสียการเกยสมมาตรทั้งหมด\nกระดูกฝ่าเท้าทั้ง 5 ชิ้นหลุดเคลื่อนย้ายไปในทิศทางเดียวกันทั้งหมด (มักหลุดออกด้านข้างหรือหลังเท้า)\nชุดเอ็น Lisfranc ฉีกขาดสมบูรณ์ทุกเส้น"
              },
              "moi": {
                "en": "High-energy crush injury or axial load on hyperplantarflexed foot.",
                "th": "อุบัติเหตุแรงทับบดพลังงานสูง หรือแรงอัดตามแนวแกนขณะเท้าเขย่งงอลงสุด"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Total tarsometatarsal (TMT) joint incongruity; all 5 metatarsals displace laterally or dorsolaterally en masse; complete transverse arch disruption; operative anatomic reduction and rigid fixation (screws/plates for medial/middle columns, K-wires for lateral column) is mandatory to prevent crippling flatfoot arthrosis.",
                  "th": "ข้อต่อกลางเท้าสูญเสียการเรียงตัวทั้งหมด กระดูกฝ่าเท้าทั้ง 5 ชิ้นหลุดเบี่ยงไปทางเดียวกัน (ออกด้านนอกหรือขึ้นหลังเท้า) โครงสร้างอุ้งเท้าพังทลาย ต้องผ่าตัดเปิดจัดกระดูกและยึดตรึงอย่างมั่นคง (สกรู/เพลทสำหรับฝั่งในและกลาง TMT 1–3, ลวด K-wire สำหรับฝั่งนอก TMT 4–5) เพื่อป้องกันเท้าแบนติดแข็งและข้อเสื่อมรุนแรง"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly contraindicated in displaced fractures (causes permanent painful pes planus, arch collapse, and midfoot osteoarthritis)",
                    "th": "• ห้ามรักษาแบบไม่ผ่าตัด (ทำให้เท้าแบนผิดรูปถาวร อุ้งเท้าทรุดพัง และข้อกลางเท้าเสื่อมปวดรุนแรง)"
                  },
                  "method": {
                    "en": "• Non-weightbearing cast only if severe medical contraindications to surgery exist",
                    "th": "• ใส่เฝือกสั้นงดลงน้ำหนักเฉพาะผู้ป่วยที่ไม่สามารถรับการผ่าตัดได้เลย"
                  },
                  "rehabilitation": {
                    "en": "• Strict immobilization for 8–10 weeks",
                    "th": "• ดามเฝือก 8–10 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Rapid painful collapse of midfoot longitudinal arch and intractable weight-bearing pain",
                    "th": "• อุ้งเท้าทรุดพังลงอย่างรวดเร็วและปวดเท้าเรื้อรังรุนแรงเวลาเดินลงน้ำหนัก"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All Type A Homolateral Complete Incongruity Lisfranc fracture-dislocations (displacement > 2 mm)",
                    "th": "• การบาดเจ็บ Lisfranc แบบ Homolateral Complete Incongruity ทุกราย (ระยะเคลื่อนตัว > 2 มม.)"
                  },
                  "method": {
                    "en": "• Open Reduction and Rigid Internal Fixation (ORIF) via Dual Dorsal Incisions (1st web space + 4th intermetatarsal):\n  1. Medial Column (1st TMT): 3.5–4.0 mm solid cortical screw or dorsal bridge locking plate\n  2. Middle Column (2nd TMT to Middle Cuneiform & Lisfranc Screw from Medial Cuneiform to 2nd MT Base): 3.5–4.0 mm solid cortical screws\n  3. 3rd TMT: 3.5 mm transarticular screw or mini-plate\n  4. Lateral Column (4th & 5th TMT): Percutaneous 1.6–2.0 mm K-wires (MUST NOT fuse or rigid-plate lateral column to preserve mobile articulation)\n• Primary TMT Arthrodesis (fusing 1st–3rd TMT) for purely ligamentous or highly comminuted patterns",
                    "th": "• ผ่าตัดเปิดจัดกระดูกและยึดตรึง (ORIF) ผ่าน 2 แผลทางด้านหลังเท้า (แผลที่ 1 ระหว่างนิ้วโป้ง-ชี้, แผลที่ 2 เหนือนิ้วนาง):\n  1. แกนด้านใน (TMT 1): ยึดด้วยสกรู 3.5–4.0 mm Cortical Screw หรือดามเพลทสะพานข้ามข้อ Dorsal Bridge Plate\n  2. แกนตรงกลาง (TMT 2 และ Lisfranc Screw จากกระดูก Medial Cuneiform ไปยังฐาน 2nd Metatarsal): ยึดด้วยสกรูแข็ง 3.5–4.0 mm Cortical Screws\n  3. ข้อต่อ TMT 3: ยึดด้วยสกรูหรือเพลทเล็ก\n  4. แกนด้านนอก (TMT 4–5): ปักลวด K-wires 1.6–2.0 มม. ชั่วคราว (ห้ามขันสกรูหรือเพลทยึดแน่นถาวร เพื่อสงวนความยืดหยุ่นของข้อฝั่งนอก)\n• ผ่าตัดเชื่อมข้อต่อกลางเท้า TMT 1–3 ทันที (Primary Arthrodesis) กรณีเส้นเอ็นฉีกขาดล้วนๆ หรือผิวข้อแตกป่น"
                  },
                  "rehabilitation": {
                    "en": "• Non-weightbearing short-leg cast/splint for 6–8 weeks; K-wire removal from 4th/5th TMT at 6–8 weeks; transarticular screws removed at 12–16 weeks before full unrestricted weight-bearing",
                    "th": "• ใส่เฝือกสั้นงดลงน้ำหนัก 6–8 สัปดาห์; ถอดลวด K-wires ของข้อ TMT 4–5 ที่ 6–8 สัปดาห์; ถอดสกรูข้ามข้อที่ 12–16 สัปดาห์ก่อนเริ่มลงน้ำหนักเต็มที่"
                  },
                  "pitfalls": {
                    "en": "• Rigid screw fixation across 4th/5th TMT joints leading to persistent lateral foot pain and joint stiffness\n• Leaving residual >2 mm diastasis between medial cuneiform and 2nd metatarsal base",
                    "th": "• ขันสกรูยึดข้ามข้อ TMT 4–5 ทำให้ขอบเท้านอกติดแข็งและปวดเรื้อรัง\n• ปล่อยให้มีช่องว่าง >2 มม. ระหว่างกระดูก Medial Cuneiform กับโคนนิ้วที่ 2"
                  }
                }
              },
              "illustrationId": "/images/myerson/myerson_a.png",
              "xrayDescription": {
                "en": "Lateral displacement of all 5 metatarsal bases relative to cuneiforms and cuboid.",
                "th": "เห็นโคนกระดูกฝ่าเท้าทั้ง 5 ชิ้นหลุดเบี่ยงออกด้านข้างทั้งหมด"
              }
            },
            {
              "type": "Homolateral Incomplete Incongruity",
              "name": {
                "en": "Homolateral Incomplete Incongruity",
                "th": "Homolateral Incomplete Incongruity (หลุดเคลื่อนเบี่ยงข้างเดียวกันบางส่วน)"
              },
              "description": {
                "en": "Partial tarsometatarsal incongruity\nIsolated displacement of the 1st metatarsal or lateral metatarsals in one direction\nSome metatarsal joints remain intact and aligned",
                "th": "ข้อต่อกลางเท้าหลุดเคลื่อนบางส่วน\nกระดูกฝ่าเท้านิ้วหัวแม่มือ (1st Metatarsal) หรือฝ่าเท้านิ้วด้านข้างหลุดเบี่ยงแยกออกไปทางเดียวเพียงบางชิ้น\nกระดูกฝ่าเท้าส่วนที่เหลือยังคงเรียงตัวปกติ"
              },
              "moi": {
                "en": "Abduction or adduction force on forefoot.",
                "th": "แรงบิดพัดปลายเท้าเข้าด้านในหรือออกด้านนอก"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Partial TMT joint displacement involving either medial column (B1) or lateral column (B2); stable non-displaced on weight-bearing views treated in cast; any displacement >2 mm requires anatomic ORIF of affected column to prevent asymmetric foot collapse.",
                  "th": "ข้อต่อกลางเท้าหลุดเคลื่อนบางส่วน โดนเฉพาะแกนด้านใน B1 หรือแกนด้านนอก B2 หากไม่เคลื่อนตัวในภาพเอกซเรย์ลงน้ำหนักรักษาด้วยเฝือกสั้น; หากมีการเคลื่อนตัว >2 มม. ต้องผ่าตัด ORIF ยึดเฉพาะแกนที่หลุดเพื่อป้องกันเท้าผิดรูป"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly non-displaced incomplete Lisfranc sprain/fracture with <2 mm diastasis confirmed on bilateral weight-bearing stress radiographs or CT",
                    "th": "• ข้อต่อกลางเท้าบาดเจ็บชนิดไม่เคลื่อนตัว (ช่องว่าง <2 มม. ยืนยันด้วยภาพถ่ายเอกซเรย์ลงน้ำหนักทั้งสองข้างหรือ CT scan)"
                  },
                  "method": {
                    "en": "• Non-weightbearing short-leg cast for 6 weeks, followed by protected weight-bearing in a rigid walking boot for 4 weeks with arch support orthotics",
                    "th": "• ใส่เฝือกสั้นงดลงน้ำหนัก 6 สัปดาห์ จากนั้นเปลี่ยนเป็นบูทเดินพื้นแข็งและแผ่นรองอุ้งเท้าอีก 4 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Repeat weight-bearing radiographs at 2 weeks to ensure no secondary displacement",
                    "th": "• นัดถ่ายภาพเอกซเรย์ลงน้ำหนักซ้ำที่ 2 สัปดาห์เพื่อยืนยันว่าไม่มีการเคลื่อนตัวซ้ำ"
                  },
                  "pitfalls": {
                    "en": "• Overlooking occult instability without weight-bearing films, leading to progressive arch flattening",
                    "th": "• วินิจฉัยพลาดเนื่องจากไม่ได้ส่งภาพถ่ายแบบลงน้ำหนัก ทำให้อุ้งเท้าค่อยๆ ทรุดแบนลง"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Displaced B1 (medial 1st TMT diastasis >2 mm) or B2 (lateral metatarsal subluxation >2 mm) on plain or weight-bearing films",
                    "th": "• มีการเคลื่อนตัวของข้อต่อ TMT มากกว่า 2 มม. (B1 นิ้วหัวแม่มือ หรือ B2 กลุ่มนิ้วด้านนอก)"
                  },
                  "method": {
                    "en": "• B1 (Isolated Medial Displacement): Dorsomedial approach -> Anatomic reduction of 1st TMT joint + 3.5/4.0 mm solid cortical screw or dorsal bridge plate ± Lisfranc screw\n• B2 (Isolated Lateral Displacement): Dorsolateral approach -> Reduce 2nd–4th MT bases + 3.5 mm screws for 2nd/3rd TMT and 1.6 mm K-wires for 4th/5th TMT",
                    "th": "• ชนิด B1 (หลุดเฉพาะด้านใน): เปิดแผลด้านใน -> จัดข้อ TMT 1 เข้าที่ + ขันสกรู 3.5/4.0 mm Cortical screw หรือดามเพลทสะพานข้ามข้อ ± ขัน Lisfranc Screw\n• ชนิด B2 (หลุดเฉพาะด้านนอก): เปิดแผลด้านนอก -> จัดโคนนิ้ว 2–4 เข้าที่ + ขันสกรูยึด TMT 2–3 และปักลวด K-wires ยึด TMT 4–5"
                  },
                  "rehabilitation": {
                    "en": "• Non-weightbearing for 6–8 weeks; K-wire removal at 6–8 weeks; progressive weight-bearing in CAM boot from week 8",
                    "th": "• งดลงน้ำหนัก 6–8 สัปดาห์; ถอดลวด K-wire ที่ 6–8 สัปดาห์; เริ่มลงน้ำหนักในบูทเดินตั้งแต่สัปดาห์ที่ 8"
                  },
                  "pitfalls": {
                    "en": "• Failure to compress Lisfranc interval leaving residual 1st-2nd intermetatarsal widening",
                    "th": "• ไม่ได้ขันอัดช่องว่าง Lisfranc ทำให้มีช่องว่างระหว่างโคนนิ้ว 1 และ 2 กว้างกว่าปกติ"
                  }
                }
              },
              "illustrationId": "/images/myerson/myerson_b1.png",
              "xrayDescription": {
                "en": "Isolated medial displacement of 1st metatarsal base or lateral displacement of subset of metatarsals.",
                "th": "เห็นโคนกระดูกฝ่าเท้านิ้ว 1 หรือกลุ่มนิ้วด้านข้างหลุดเบี่ยงแยกออกเพียงบางชิ้น"
              }
            },
            {
              "type": "Divergent Dislocation",
              "name": {
                "en": "Divergent Dislocation",
                "th": "Divergent Dislocation (หลุดแยกสองทาง)"
              },
              "description": {
                "en": "Divergent displacement pattern\n1st metatarsal displaces medially and 2nd-5th metatarsals displace laterally\nTotal or partial destruction of transverse carpal arch and Lisfranc ligament complex\nHigh risk of Compartment Syndrome of foot",
                "th": "การหลุดแยกสองทาง (Divergent)\nกระดูกนิ้ว 1 เบี่ยงเข้าด้านใน และกระดูกนิ้ว 2 ถึง 5 เบี่ยงออกด้านนอก\nส่วนโค้งเท้า (Transverse arch) และชุดเอ็น Lisfranc พังทลาย\nเสี่ยงสูงต่อภาวะความดันในช่องกล้ามเนื้อเท้าสูงฉุกเฉิน (**Compartment Syndrome**)"
              },
              "moi": {
                "en": "Extreme crush injury or severe axial loading to the midfoot.",
                "th": "อุบัติเหตุแรงทับบดกลางเท้าพลังงานสูงรุนแรงสุดขีด"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Severe high-energy injury; 1st metatarsal displaces medially and 2nd–5th metatarsals displace laterally splitting transverse arch; high risk of foot compartment syndrome and dorsalis pedis injury; emergency reduction, compartment decompression if tense, and dual-column ORIF or primary arthrodesis.",
                  "th": "การบาดเจ็บรุนแรงพลังงานสูง กระดูกนิ้วที่ 1 หลุดแยกเข้าด้านใน ขณะที่นิ้ว 2–5 หลุดแยกออกด้านนอก ทำให้ส่วนโค้งเท้าฉีกแยกสองทาง เสี่ยงต่อความดันช่องกล้ามเนื้อเท้าสูง (Foot Compartment Syndrome) และหลอดเลือด Dorsalis Pedis ฉีกขาด ต้องผ่าตัดจัดกระดูกฉุกเฉิน กรีดระบายความดันหากเท้าตึง และผ่าตัด ORIF หรือเชื่อมข้อ"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Absolutely contraindicated",
                    "th": "• ห้ามรักษาแบบไม่ผ่าตัดเด็ดขาด"
                  },
                  "method": {
                    "en": "• Urgent closed reduction attempt in ER to relieve soft tissue/neurovascular tension while arranging urgent OR",
                    "th": "• ดึงจัดกระดูกเบื้องต้นในห้องฉุกเฉินเพื่อคลายแรงกดหลอดเลือดและผิวหนังระหว่างเตรียมผ่าตัดด่วน"
                  },
                  "rehabilitation": {
                    "en": "• N/A",
                    "th": "• N/A"
                  },
                  "pitfalls": {
                    "en": "• Missed foot compartment syndrome causing intrinsic muscle necrosis and claw-toe contractures",
                    "th": "• ตรวจไม่พบ Compartment Syndrome ทำให้กล้ามเนื้อเท้าเน่าตายและนิ้วเท้างอหดเกร็งถาวร (Claw toes)"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All Divergent Lisfranc Fracture-Dislocations (Type C1 and C2)",
                    "th": "• การบาดเจ็บ Lisfranc แบบ Divergent Fracture-Dislocation ทุกราย (Type C1 และ C2)"
                  },
                  "method": {
                    "en": "• Emergency Operative Management:\n  1. Assess compartment pressures; perform dorsal medial/lateral fasciotomies if tense\n  2. Dual dorsal longitudinal incisions\n  3. Anatomic reduction of 1st MT to Medial Cuneiform -> Fix with 3.5/4.0 mm screw or dorsal bridge plate\n  4. Anatomic reduction of 2nd MT into the mortise of cuneiforms -> Place classic Lisfranc Screw (Medial Cuneiform to 2nd MT Base) + 2nd TMT screw\n  5. Fix 3rd TMT with transarticular screw; stabilize 4th & 5th TMT with temporary 1.6–2.0 mm K-wires\n• Primary Arthrodesis (TMT 1–3) strongly considered if articular surfaces are crushed/comminuted",
                    "th": "• ผ่าตัดฉุกเฉิน (Emergency Reconstruction):\n  1. ตรวจประเมินความดันช่องกล้ามเนื้อเท้า; กรีดผ่าระบายความดัน (Fasciotomy) หากอุ้งเท้าตึงเต่ง\n  2. เปิด 2 แผลตามยาวหลังเท้า\n  3. จัดข้อ TMT 1 เข้าที่ -> ยึดด้วยสกรู 3.5/4.0 mm หรือดามเพลทสะพาน\n  4. จัดโคนนิ้วที่ 2 เข้าเบ้าระหว่าง Cuneiform -> ขัน Lisfranc Screw (จาก Medial Cuneiform ไปฐานนิ้วที่ 2) + สกรูยึด TMT 2\n  5. ยึดข้อ TMT 3 ด้วยสกรู; ดามข้อ TMT 4–5 ด้วยลวด K-wires 1.6–2.0 มม. ชั่วคราว\n• พิจารณาผ่าตัดเชื่อมข้อต่อกลางเท้า TMT 1–3 ทันที (Primary Arthrodesis) หากผิวข้อแตกป่นละเอียด"
                  },
                  "rehabilitation": {
                    "en": "• Strict non-weightbearing for 8–10 weeks; K-wire removal at 6–8 weeks; hardware removal of transarticular screws at 12–16 weeks before full weight-bearing",
                    "th": "• งดลงน้ำหนักอย่างเข้มงวด 8–10 สัปดาห์; ถอดลวด K-wires ที่ 6–8 สัปดาห์; ถอดสกรูข้ามข้อที่ 12–16 สัปดาห์ก่อนเริ่มลงน้ำหนักเต็มที่"
                  },
                  "pitfalls": {
                    "en": "• Incomplete reduction of 2nd metatarsal base 'key' in cuneiform mortise causing persistent midfoot diastasis and lateral subluxation\n• Iatrogenic injury to deep peroneal nerve and dorsalis pedis artery between 1st and 2nd rays",
                    "th": "• จัดกระดูกโคนนิ้วที่ 2 เข้าเบ้าไม่สนิททำให้กลางเท้ายังอ้าและเบี้ยวหลุด\n• บาดเจ็บต่อเส้นประสาท Deep Peroneal Nerve และหลอดเลือดแดงหลังเท้า (Dorsalis Pedis Artery)"
                  }
                }
              },
              "illustrationId": "/images/myerson/myerson_c2.png",
              "xrayDescription": {
                "en": "Gross divergent displacement of 1st metatarsal medially and 2nd-5th metatarsals laterally with 'Fleck sign'.",
                "th": "เห็นกระดูกนิ้ว 1 เบี่ยงเข้าด้านใน และนิ้ว 2-5 หลุดออกด้านนอกพร้อมเห็น Fleck sign"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "fifth-metatarsal-base",
      "name": {
        "en": "5th Metatarsal Base",
        "th": "ฐานกระดูกฝ่าเท้านิ้วที่ 5 (5th Metatarsal Base)"
      },
      "regionConcept": {
        "physicalExam": [
          {
            "sign": "Point Tenderness over 5th Metatarsal Base",
            "positive": {
              "en": "Exquisite tenderness localized to tuberosity (Zone 1), watershed junction (Zone 2), or diaphyseal shaft (Zone 3)",
              "th": "เจ็บจี๊ดเฉพาะจุดบริเวณตุ่มกระดูก (Zone 1), ฐาน (Zone 2) หรือแกนกระดูก (Zone 3) ของกระดูกนิ้วเท้าที่ 5"
            }
          },
          {
            "sign": "Inversion Stress Test",
            "positive": {
              "en": "Pain recreated at lateral foot border during forced inversion of foot (classic avulsion injury mechanism)",
              "th": "เกิดอาการปวดกระตุ้นที่ขอบนอกเท้าเมื่อดัดบิดเท้าเข้าด้านใน (กลไกการเกิด Avulsion fracture)"
            }
          }
        ],
        "clinicalPearls": [
          {
            "en": "Zone 1 (Pseudo-Jones / Tuberosity Avulsion) fractures heal reliably with conservative management in a hard-soled shoe or boot.",
            "th": "กระดูกหัก Zone 1 (Pseudo-Jones) ติดดีมากด้วยการรักษาแบบไม่ผ่าตัด ใส่รองเท้าพื้นแข็งหรือ CAM boot ตามที่ทนได้"
          },
          {
            "en": "Zone 2 (True Jones fracture at intermetatarsal articulation) lies in a vascular watershed area with high nonunion risk.",
            "th": "กระดูกหัก Zone 2 (True Jones) อยู่ในเขตเลือดมาเลี้ยงน้อย (Watershed area) มีความเสี่ยงสูงต่อกระดูกไม่ติด (Nonunion)"
          },
          {
            "en": "Competitive athletes with Zone 2 Jones fractures should undergo early intramedullary screw fixation to lower nonunion risk and expedite return to play.",
            "th": "นักกีฬาอาชีพที่มีกระดูกหัก Zone 2 Jones ควรพิจารณาผ่าตัดใส่สกรูในโพรงกระดูกตั้งแต่แรก เพื่อกลับไปเล่นกีฬาได้เร็วและลดอัตรากระดูกไม่ติด"
          }
        ]
      },
      "classifications": [
        {
          "system": "Lawrence-Botte",
          "fullName": {
            "en": "Lawrence & Botte Classification for 5th Metatarsal Base Fractures",
            "th": "การจำแนกกระดูกฐานฝ่าเท้านิ้วที่ 5 หัก Lawrence & Botte"
          },
          "description": {
            "en": "Anatomical zone classification for proximal 5th metatarsal fractures (Zone 1 Tuberosity, Zone 2 Jones, Zone 3 Diaphyseal Stress), dictating vascular supply, nonunion risk, and surgical vs cast management.",
            "th": "ระบบจำแนกกระดูกโคนฝ่าเท้านิ้วที่ 5 (Proximal 5th Metatarsal) หักแบ่งตามโซนกายวิภาค 3 โซน (Zone 1 Avulsion, Zone 2 Jones, Zone 3 Stress Fracture) ซึ่งเป็นตัวกำหนดเส้นเลือดเลี้ยง ความเสี่ยงกระดูกไม่ติด และการผ่าตัด"
          },
          "concept": {
            "title": {
              "en": "Lawrence-Botte 5th Metatarsal Concept",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ Lawrence-Botte Classification"
            },
            "corePrinciple": {
              "en": "Lawrence & Botte classifies proximal 5th metatarsal fractures into 3 anatomical zones based on vascularity transition from well-perfused tuberosity (Zone 1) to avascular watershed articulation (Zone 2/3), dictating nonunion risk and surgical decision-making.",
              "th": "Lawrence & Botte จำแนกกระดูกโคนฝ่าเท้านิ้วที่ 5 หักออกเป็น 3 โซนตามกายวิภาคของเส้นเลือดเลี้ยงกระดูกที่เปลี่ยนจากบริเวณตุ่มโคนที่มีเลือดเลี้ยงดี (Zone 1) ไปสู่เขตการค้าเลือด (Zone 2/3) ซึ่งเป็นตัวกำหนดความเสี่ยงกระดูกไม่ติดและการผ่าตัด"
            },
            "rules": [
              {
                "en": "Zone 1 (Tuberosity Avulsion / Pseudo-Jones): Proximal to 4th-5th intermetatarsal joint -> Rich vascular supply -> Nonunion risk <1-2%",
                "th": "Zone 1 (Tuberosity Avulsion / Pseudo-Jones): อยู่ proximal ต่อข้อต่อ 4th-5th intermetatarsal -> เลือดมาเลี้ยงสมบูรณ์ดี -> เสี่ยงกระดูกไม่ติด <1-2%"
              },
              {
                "en": "Zone 2 (True Jones Fracture): Acute fracture at 4th-5th intermetatarsal articulation -> Vascular watershed region -> Nonunion risk 15–25%",
                "th": "Zone 2 (True Jones Fracture): รอยหักเฉียบพลันตรงข้อต่อ 4th-5th -> เขตอับเลือด (Watershed region) -> เสี่ยงกระดูกไม่ติด 15–25%"
              },
              {
                "en": "Zone 3 (Proximal Diaphyseal Stress Fracture): Distal to 4th-5th joint with cortical sclerosis -> Chronic repetitive microtrauma -> High nonunion rate (>30–50%)",
                "th": "Zone 3 (Proximal Diaphyseal Stress Fracture): รอยหักเลยข้อต่อ 4th-5th ลงไป ร่วมกับมีโพรงกระดูกตัน -> เกิดจากแรงกระแทกซ้ำๆ -> เสี่ยงกระดูกไม่ติดสูงมาก (>30–50%)"
              }
            ],
            "clinicalSignificance": [
              {
                "en": "Zone 1 Management: Conservative treatment in hard-soled shoe, stiff walking boot, or short leg cast for 3–4 weeks with immediate weight-bearing as tolerated",
                "th": "แนวทางรักษา Zone 1: รักษาแบบไม่ผ่าตัด ใส่รองเท้าพื้นแข็ง CAM boot หรือเฝือกสั้น 3–4 สัปดาห์ ลงน้ำหนักได้ทันทีตามทนไหว"
              },
              {
                "en": "Zone 2 Non-athlete: Non-weightbearing short leg cast for 6–8 weeks (strict NWB required)",
                "th": "แนวทางรักษา Zone 2 ในคนทั่วไป: ใส่เฝือกสั้นงดลงน้ำหนัก 6–8 สัปดาห์ (ต้องงดลงน้ำหนักอย่างเข้มงวด)"
              },
              {
                "en": "Zone 2 Athlete / High Demand: Early intramedullary cannulated screw fixation (4.0 mm or 4.5 mm) to minimize nonunion risk and expedite return to sports",
                "th": "แนวทางรักษา Zone 2 ในนักกีฬา: ผ่าตัดใส่ Intramedullary Cannulated Screw (4.0 มม. หรือ 4.5 มม.) ทันทีเพื่อลดอัตรากระดูกไม่ติดและให้กลับไปเล่นกีฬาได้เร็ว"
              },
              {
                "en": "Zone 3 Stress Fracture Management: Intramedullary screw fixation plus curettage and bone grafting for sclerotic intramedullary canal",
                "th": "แนวทางรักษา Zone 3 Stress Fracture: ผ่าตัดยึด Intramedullary screw ร่วมกับขูดโพรงกระดูกตันและใส่กระดูกเทียมเสริม"
              }
            ]
          },
          "investigations": [
            {
              "name": "AP & 30° Medial Oblique Foot Views",
              "details": {
                "en": "Gold standard views to identify exact fracture zone, involvement of 4th-5th intermetatarsal articulation, and articular step-off into cuboid joint.",
                "th": "ภาพเอกซเรย์เท้าท่า AP และเอียง 30 องศา เป็นมาตรฐานหลักในการระบุโซนหัก (Zone 1, 2, 3) และการพาดผ่านข้อต่อระหว่างกระดูกนิ้ว 4-5"
              }
            },
            {
              "name": "Lateral Foot View",
              "details": {
                "en": "Assesses plantar cortical gapping, displacement, and tuberosity fragment size.",
                "th": "ภาพเอกซเรย์เท้าท่าด้านข้าง ประเมินช่องอ้ากระดูกด้านฝ่าเท้า และขนาดชิ้นกระดูกกะเทาะ"
              }
            }
          ],
          "types": [
            {
              "type": "Zone 1",
              "name": {
                "en": "Zone 1: Tuberosity Avulsion ('Pseudo-Jones' Fracture)",
                "th": "Zone 1: Tuberosity Avulsion (กระดูกตุ่มโคนหักกะเทาะ - Pseudo-Jones)"
              },
              "description": {
                "en": "Extra-articular avulsion fracture of the 5th metatarsal styloid/tuberosity\nCaused by sudden inversion pull of Peroneus Brevis tendon or lateral plantar aponeurosis\nExcellent blood supply\nNonunion rate is extremely low (<1-2%)",
                "th": "รอยหักกะเทาะหลุดบริเวณตุ่มโคนกระดูกฝ่าเท้านิ้วที่ 5 (Styloid process)\nเกิดจากเอ็น Peroneus Brevis หรือพังผืดฝ่าเท้าดึงกระชากขณะเท้าพลิกหักเข้าด้านใน\nมีเส้นเลือดหล่อเลี้ยงสมบูรณ์ดีมาก\nอัตราการเกิดกระดูกไม่ติดต่ำมาก (<1-2%)"
              },
              "moi": {
                "en": "Acute inversion injury of the foot while plantarflexed.",
                "th": "อุบัติเหตุเท้าพลิกหุบเข้าด้านในขณะปลายเท้าชี้ลง"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Extra-articular tuberosity avulsion proximal to 4th-5th intermetatarsal joint (Pseudo-Jones); rich vascular supply with <1%–2% nonunion rate; non-operative treatment in rigid hard-soled shoe or walking boot with immediate weight-bearing as tolerated yields >98% success; surgery indicated only for >2 mm displacement into cuboid joint or painful nonunion.",
                  "th": "กระดูกตุ่มโคนนิ้วที่ 5 หักกะเทาะ (Pseudo-Jones) อยู่เหนือต่อข้อต่อ 4th-5th intermetatarsal เลือดมาเลี้ยงดีเยี่ยม อัตรากระดูกไม่ติดต่ำมาก (<1%–2%) รักษาแบบไม่ผ่าตัดด้วยรองเท้าพื้นแข็งหรือบูท CAM Boot และลงน้ำหนักได้ทันที ให้ผลสำเร็จ >98%; ผ่าตัดเฉพาะรายที่ผิวข้อ Cuboid เหลื่อม >2 มม."
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Extra-articular tuberosity avulsion fracture (Zone 1) with <2 mm displacement and <25% cuboid joint involvement",
                    "th": "• กระดูกตุ่มโคนหักกะเทาะ (Zone 1) ชนิดเคลื่อนตัว <2 มม. และไม่เข้าข้อต่อ Cuboid เกิน 25%"
                  },
                  "method": {
                    "en": "• Hard-soled shoe, stiff walking boot (CAM boot), or elastic compressive wrap with immediate weight-bearing as tolerated for 3–4 weeks",
                    "th": "• ใส่รองเท้าพื้นแข็ง หรือบูทเดิน CAM Boot หรือพันผ้ายืดกระชับ และเริ่มลงน้ำหนักได้ทันทีเท่าที่ทนไหวนาน 3–4 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Wean to normal supportive athletic shoes as pain permits by 4–6 weeks",
                    "th": "• ปรับเปลี่ยนเป็นรองเท้าผ้าใบตามปกติเมื่ออาการปวดทุเลาลงที่ 4–6 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Unnecessary prolonged non-weightbearing casting causing foot stiffness, disuse osteopenia, and delayed return to work",
                    "th": "• ใส่เฝือกสั่งห้ามลงน้ำหนักนานเกินจำเป็น ทำให้ข้อเท้าติดแข็ง กระดูกบาง และกลับไปทำงานล่าช้า"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Large avulsion fragment involving > 25%–30% of cuboid articular surface with > 2 mm step-off\n• Symptomatic fibrous nonunion refractory to 3–6 months of conservative management",
                    "th": "• ชิ้นกระดูกแตกเข้าข้อต่อ Cuboid > 25%–30% และเหลื่อม > 2 มม.\n• กระดูกไม่ติดและมีอาการปวดเรื้อรังหลังรักษาแบบประคับประคอง 3–6 เดือน"
                  },
                  "method": {
                    "en": "• Open reduction and internal fixation (ORIF) with 2.7–3.5 mm mini-cannulated lag screw or Tension Band Wire (TBW) construct or excision of small fragment with peroneus brevis re-anchoring",
                    "th": "• ผ่าตัดเปิดยึดกระดูก (ORIF) ด้วยสกรูจิ๋ว 2.7–3.5 mm Mini-cannulated Lag Screw หรือร้อยลวดขึงดึง (Tension Band Wiring) หรือตัดชิ้นกระดูกเล็กออกแล้วเย็บตรึงเอ็น Peroneus Brevis เข้าที่"
                  },
                  "rehabilitation": {
                    "en": "• Protected weight-bearing in boot for 4 weeks post-op; progressive athletic training at 6 weeks",
                    "th": "• ใส่บูทเดินลงน้ำหนักประคอง 4 สัปดาห์หลังผ่าตัด; เริ่มฝึกซ้อมกีฬาที่ 6 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Sural nerve branch injury along the lateral border of foot during incision",
                    "th": "• บาดเจ็บต่อแขนงประสาท Sural Nerve บริเวณขอบเท้าด้านนอกขณะเปิดแผล"
                  }
                }
              },
              "illustrationId": "/images/lawrence_botte/zone1.jpg",
              "xrayDescription": {
                "en": "Transverse fracture line at the proximal tuberosity tip not extending into the 4th-5th intermetatarsal articulation.",
                "th": "เห็นรอยหักแนวขวางตรงตุ่มโคนกระดูกโดยไม่พาดเข้าข้อต่อระหว่างนิ้ว 4-5"
              }
            },
            {
              "type": "Zone 2",
              "name": {
                "en": "Zone 2: True Jones Fracture (Vascular Watershed Zone)",
                "th": "Zone 2: True Jones Fracture (รอยหักบริเวณข้อต่อโคนนิ้ว 4-5 - เสี่ยงกระดูกไม่ติด)"
              },
              "description": {
                "en": "Fracture at the metaphyseal-diaphyseal junction extending into the 4th-5th intermetatarsal articulation\nTrue Jones Fracture pattern\nPoor blood supply (Vascular watershed zone)\nHigh rate of delayed union and nonunion (25-50% with conservative care)",
                "th": "รอยหักบริเวณรอยต่อ Metaphyseal-diaphyseal ที่พาดผ่านเข้าสู่ข้อต่อระหว่างกระดูกนิ้ว 4 และ 5 (4th-5th Intermetatarsal joint)\nเป็นรอยหัก **True Jones Fracture** ที่แท้จริง\nบริเวณนี้มีเส้นเลือดหล่อเลี้ยงน้อย (Vascular watershed zone)\nความเสี่ยงสูงมากที่จะเกิดภาวะกระดูกติดช้า หรือกระดูกไม่ติด (25-50% หากไม่ผ่าตัด)"
              },
              "moi": {
                "en": "Adduction force applied to the forefoot while weight bearing on plantarflexed foot.",
                "th": "แรงบิดหุบปลายเท้าขณะลงน้ำหนักบนเท้าที่เขย่งงอลง"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Acute fracture at the 4th-5th intermetatarsal articulation within the vascular watershed area (True Jones Fracture); high nonunion rate (15%–25%) and prolonged healing with casting (6–8 weeks strict NWB); early percutaneous intramedullary screw fixation (4.5–5.5 mm solid/cannulated screw) is preferred for competitive athletes, active individuals, or nonunion prevention.",
                  "th": "กระดูกหักเฉียบพลันบริเวณข้อต่อระหว่างกระดูกนิ้ว 4-5 ในเขตอับเลือด (True Jones Fracture) เสี่ยงกระดูกไม่ติดสูง (15%–25%) หากใส่เฝือกต้องงดลงน้ำหนักอย่างเข้มงวด 6–8 สัปดาห์; แนะนำผ่าตัดใส่สกรูยึดในโพรงกระดูก (Intramedullary Screw Fixation 4.5–5.5 มม.) ทันทีในนักกีฬาและผู้ที่ต้องการกลับไปทำงานหรือเล่นกีฬาได้รวดเร็ว"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Non-athlete, low-demand, or sedentary patients willing to strictly comply with prolonged non-weightbearing immobilization",
                    "th": "• ผู้ป่วยทั่วไปที่ไม่ใช่นักกีฬา หรือผู้ป่วยสูงอายุที่ยินยอมปฏิบัติตามการงดลงน้ำหนักอย่างเข้มงวด"
                  },
                  "method": {
                    "en": "• Short-leg strictly non-weightbearing cast for 6–8 weeks; transition to walking boot only after radiographic bridging callus appears",
                    "th": "• ใส่เฝือกสั้นงดลงน้ำหนักอย่างเข้มงวด (Strict NWB) 6–8 สัปดาห์; เปลี่ยนเป็นบูทเดินได้เมื่อเริ่มเห็นสัญญาณกระดูกเชื่อมติดในเอกซเรย์"
                  },
                  "rehabilitation": {
                    "en": "• Progressive weight-bearing in boot from week 8–10; return to sports delayed until 12–16 weeks",
                    "th": "• ค่อยๆ เริ่มลงน้ำหนักในบูทที่สัปดาห์ที่ 8–10; เลื่อนการเล่นกีฬาออกไปจนถึง 12–16 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• High delayed union and nonunion rate (up to 25%); refractoriness and refracture if weight-bearing allowed too early",
                    "th": "• อัตรากระดูกไม่ติดสูง (ถึง 25%) และเสี่ยงกระดูกหักซ้ำหากอนุญาตให้ลงน้ำหนักเร็วเกินไป"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Competitive athletes and active laborers (Primary surgical indication for rapid return to play)\n• Displaced Jones fracture (>2 mm)\n• Delayed union or nonunion after conservative cast trial",
                    "th": "• นักกีฬาอาชีพและผู้ใช้แรงงาน (ข้อบ่งชี้หลักเพื่อเร่งกลับไปเล่นกีฬา)\n• รอยหัก Jones ที่เคลื่อนตัว >2 มม.\n• กระดูกติดช้าหรือไม่ติดหลังรักษาด้วยเฝือก"
                  },
                  "method": {
                    "en": "• Percutaneous Intramedullary Cannulated Screw Fixation:\n  1. High-and-inside starting point on 5th metatarsal base tuberosity (straight trajectory)\n  2. Guide wire passed down straight shaft past fracture line\n  3. Ream and insert largest diameter possible (typically 4.5 mm, 5.0 mm, or 5.5 mm solid/partially threaded screw) to ensure rigid cortical bite and axial compression",
                    "th": "• ผ่าตัดใส่สกรูยึดในโพรงกระดูกผ่านผิวหนัง (Percutaneous Intramedullary Screw Fixation):\n  1. กำหนดจุดเจาะเริ่มต้นทางด้านบน-ในของตุ่มโคนกระดูกเพื่อให้ได้แนวตรงขนานกับแกนกระดูก\n  2. สอดลวดนำทางผ่านรอยหักลงไปในแกนกระดูก\n  3. ขยายโพรงกระดูกและขันยึดด้วยสกรูขนาดใหญ่ที่สุดที่ใส่ได้ (4.5 มม., 5.0 มม. หรือ 5.5 มม. Partially Threaded Screw) เพื่อให้เกลียวสกรูยึดแน่นกับเปลือกกระดูกและเกิดแรงอัดรอยหักอย่างมั่นคง"
                  },
                  "rehabilitation": {
                    "en": "• Protected weight-bearing in boot for 2–3 weeks; active sport-specific rehabilitation and progressive return to play at 6–8 weeks upon CT/X-ray union",
                    "th": "• ใส่บูทลงน้ำหนักประคอง 2–3 สัปดาห์; เริ่มฝึกซ้อมกีฬาเฉพาะทางและกลับไปแข่งขันได้ที่ 6–8 สัปดาห์เมื่อเอกซเรย์เห็นกระดูกติด"
                  },
                  "pitfalls": {
                    "en": "• Using an undersized screw (<4.5 mm) leading to screw bending, fatigue failure, or pull-out\n• Eccentric starting point causing lateral cortical blowout",
                    "th": "• ใช้สกรูขนาดเล็กเกินไป (<4.5 มม.) ทำให้สกรูงอหักล้าจากแรงกระแทก\n• จุดเจาะเบี้ยวทำให้เปลือกกระดูกด้านนอกแตกทะลุ"
                  }
                }
              },
              "illustrationId": "/images/lawrence_botte/zone2.jpg",
              "xrayDescription": {
                "en": "Transverse fracture line passing through 4th-5th intermetatarsal joint articulation without canal sclerosis.",
                "th": "เห็นรอยหักพาดผ่านข้อต่อระหว่างกระดูกนิ้ว 4-5 โดยยังไม่มีรอยตีบตันของรูแกนกระดูก"
              }
            },
            {
              "type": "Zone 3",
              "name": {
                "en": "Zone 3: Proximal Diaphyseal Stress Fracture",
                "th": "Zone 3: Stress Fracture (รอยหักล้าจากการใช้งานซ้ำ - รูแกนกระดูกตีบตัน)"
              },
              "description": {
                "en": "Stress fracture located in the proximal diaphysis distal to the 4th-5th intermetatarsal articulation\nCaused by chronic repetitive microtrauma and overload in athletes\nRadiographs show cortical thickening, periosteal reaction, and medullary canal sclerosis\nVery high nonunion rate without surgery",
                "th": "รอยหักล้า (Stress fracture) บริเวณแกนกระดูกส่วนต้น ถัดจากข้อต่อระหว่างนิ้ว 4-5 ไปทางด้านปลาย\nเกิดจากการรับแรงกระแทกซ้ำๆ เรื้อรังในนักกีฬา\nภาพเอกซเรย์พบผนังกระดูกหนาตัวขึ้น (Cortical thickening) และรูแกนกระดูกตีบตัน (Medullary canal sclerosis)\nอัตรากระดูกไม่ติดสูงที่สุดหากไม่ผ่าตัด"
              },
              "moi": {
                "en": "Chronic repetitive overload / microtrauma in running and jumping athletes.",
                "th": "การรับแรงอัดกระแทกซ้ำๆ เรื้อรังจากการวิ่งและกระโดดในนักกีฬา"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Proximal diaphyseal stress fracture distal to 4th-5th intermetatarsal joint with medullary canal sclerosis and cortical thickening (Torg Type II/III); high nonunion rate (>30%–50%) with conservative care; operative treatment with intramedullary canal reaming, autologous bone grafting, and rigid screw or plantar-lateral tension-band plating is the treatment of choice.",
                  "th": "รอยหักล้า (Stress Fracture) บริเวณแกนกระดูกส่วนต้น distal ต่อข้อต่อ 4th-5th ร่วมกับมีโพรงกระดูกตีบตัน (Medullary Sclerosis) และเปลือกกระดูกหนา เสี่ยงกระดูกไม่ติดสูงมาก (>30%–50%) การรักษาหลักที่แนะนำคือ ผ่าตัดกรอเปิดโพรงกระดูก (Canal Reaming) + ปลูกถ่ายกระดูก (Bone Grafting) + ขันยึดด้วยสกรูในโพรงกระดูกหรือดามแผ่นเหล็กล็อค"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Early stress reaction without cortical fracture line (Torg Type I) in patients willing to accept 12–20 weeks of strict non-weightbearing cast",
                    "th": "• ระยะเริ่มแรกของ Stress Reaction ที่ยังไม่มีรอยหักทะลุเปลือกกระดูก และผู้ป่วยยินยอมใส่เฝือกงดลงน้ำหนักนาน 12–20 สัปดาห์"
                  },
                  "method": {
                    "en": "• Strict non-weightbearing cast for minimum 10–12 weeks + Bone stimulator (Pulsed electromagnetic field/ultrasound)",
                    "th": "• ใส่เฝือกสั้นงดลงน้ำหนักอย่างน้อย 10–12 สัปดาห์ + ใช้อุปกรณ์กระตุ้นการติดของกระดูก (Bone Stimulator)"
                  },
                  "rehabilitation": {
                    "en": "• Prolonged rehabilitation; return to sports restricted until complete radiographic canal recanalization (>16–24 weeks)",
                    "th": "• กายภาพฟื้นฟูระยะยาว; ห้ามเล่นกีฬาจนกว่าโพรงกระดูกจะเปิดติดสมบูรณ์ (>16–24 สัปดาห์)"
                  },
                  "pitfalls": {
                    "en": "• Very high failure and nonunion rate (>50%) requiring subsequent operative revision",
                    "th": "• อัตราล้มเหลวกระดูกไม่ติดสูงมาก (>50%) และสุดท้ายต้องลงเอยด้วยการผ่าตัด"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All Zone 3 Proximal Diaphyseal Stress fractures with medullary canal sclerosis (Torg Type II delayed union / Type III established nonunion)\n• Athletes with recurrent lateral foot stress pain",
                    "th": "• กระดูกหักล้า Zone 3 ที่มีโพรงกระดูกตีบตันทุกราย (Torg II กระดูกติดช้า / Torg III กระดูกไม่ติด)\n• นักกีฬาที่มีอาการปวดขอบเท้าด้านนอกเรื้อรังซ้ำซาก"
                  },
                  "method": {
                    "en": "• Intramedullary Reaming & Rigid Fixation ± Bone Grafting:\n  1. Cannulated or solid Intramedullary Screw (4.5–5.5 mm) with aggressive canal reaming to open sclerotic medullary canal\n  2. Autologous cancellous bone graft or bone marrow aspirate concentrate (BMAC) packed into fracture nonunion site\n  3. Plantar-lateral low-profile locking compression plate if medullary canal is too narrow or bowed for straight screw insertion",
                    "th": "• ผ่าตัดกรอเปิดโพรงกระดูกและยึดตรึง ± ใส่กระดูกปลูก:\n  1. กรอขยายโพรงกระดูกที่ตีบตัน (Aggressive Canal Reaming) + ขันยึดสกรู Intramedullary Screw ขนาด 4.5–5.5 มม.\n  2. ขูดเนื้อเยื่อพังผืดตรงรอยหักออกและใส่กระดูกปลูก (Autologous Bone Graft) หรือเซลล์ไขกระดูกเข้มข้น (BMAC) เพื่อกระตุ้นการสร้างกระดูก\n  3. หรือผ่าตัดดามแผ่นเหล็กล็อคทางด้านข้าง-ฝ่าเท้า (Plantar-lateral Locking Plate) กรณีโพรงกระดูกแคบหรือโค้งมากจนใส่สกรูตรงไม่ได้"
                  },
                  "rehabilitation": {
                    "en": "• Non-weightbearing for 4–6 weeks post-op; progressive weight-bearing in walking boot with custom orthotic arch support; return to full athletic competition at 10–12 weeks once CT confirms solid bridging bone",
                    "th": "• งดลงน้ำหนัก 4–6 สัปดาห์; เริ่มลงน้ำหนักในบูทเดินร่วมกับแผ่นรองอุ้งเท้าพิเศษ; กลับไปแข่งขันกีฬาเต็มที่ได้ที่ 10–12 สัปดาห์เมื่อ CT scan ยืนยันว่ากระดูกเชื่อมติดสนิท"
                  },
                  "pitfalls": {
                    "en": "• Failure to open sclerotic medullary canal leading to persistent nonunion despite screw insertion\n• Early return to impact loading causing hardware fatigue fracture",
                    "th": "• ไม่ได้กรอเปิดโพรงกระดูกที่ตีบตัน ทำให้กระดูกยังคงไม่ติดแม้จะใส่สกรูแล้ว\n• กลับไปวิ่งกระโดดเร็วเกินไปจนสกรูหักล้า"
                  }
                }
              },
              "illustrationId": "/images/lawrence_botte/zone3.jpg",
              "xrayDescription": {
                "en": "Transverse stress fracture line in proximal diaphysis with surrounding cortical sclerosis and narrowed medullary canal.",
                "th": "เห็นรอยหักล้าขวางแกนกระดูกส่วนต้น พร้อมผนังกระดูกหนาตัวและรูแกนกระดูกตีบตัน"
              }
            }
          ]
        }
      ]
    }
  ]
};
