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
        ]
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
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED TREATMENT. Non-weight-bearing short leg cast for 6-8 weeks, followed by progressive weight-bearing upon radiographic evidence of healing and positive Hawkins sign.",
                  "th": "แนะนำรักษาแบบไม่ผ่าตัด ใส่เฝือกสั้นห้ามลงน้ำหนัก 6-8 สัปดาห์ นัดติดตามเอกซเรย์ดู Hawkins sign ก่อนเริ่มลงน้ำหนัก"
                },
                "operative": {
                  "en": "Percutaneous screw fixation indicated only if dynamic instability detected under fluoroscopy.",
                  "th": "พิจารณาผ่าตัดยึดสกรูผ่านผิวหนังเฉพาะกรณีตรวจพบข้อหลวมไม่มั่นคง"
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
                "preferred": "operative",
                "conservative": {
                  "en": "CONTRAINDICATED. Leads to severe subtalar malunion, arthritis, and high AVN rate.",
                  "th": "ห้ามใช้การรักษาด้วยวิธีนี้ ทำให้กระดูกติดผิดรูป ข้อเสื่อม และเสี่ยงหัวกระดูกตาย"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. Urgent closed/open reduction of subtalar joint + ORIF with 2-3 cannulated screws (anteromedial/postero-lateral approach).",
                  "th": "แนะนำผ่าตัดฉุกเฉิน (Urgent ORIF) ดึงข้อ Subtalar เข้าที่แล้วยึดกระดูกด้วยสกรู Cannulated Screws 2-3 ตัว"
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
                "preferred": "operative",
                "conservative": {
                  "en": "CONTRAINDICATED. Causes skin necrosis and total talar body destruction.",
                  "th": "ห้ามใช้การรักษาด้วยวิธีนี้ ผิวหนังจะเน่าตายและตัวกระดูกพังทลาย"
                },
                "operative": {
                  "en": "EMERGENCY OPERATIVE RECONSTRUCTION. Urgent emergency reduction to relieve skin tenting + dual approach ORIF with anatomical locking plate or screws.",
                  "th": "ผ่าตัดฉุกเฉินด่วนที่สุด! (Emergency ORIF) ดึงจัดกระดูกเข้าที่เพื่อลดแรงดันผิวหนัง + ผ่าตัดเปิดสองทางดามด้วยแผ่นเหล็กหรือสกรู"
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
                "preferred": "operative",
                "conservative": {
                  "en": "CONTRAINDICATED.",
                  "th": "ห้ามใช้การรักษาด้วยวิธีนี้"
                },
                "operative": {
                  "en": "EMERGENCY RECONSTRUCTION / ARTHRODESIS. Urgent emergency reduction + ORIF with dual plating/screws. Primary or secondary subtalar/tibiotalar arthrodesis often required if AVN develops.",
                  "th": "ผ่าตัดฉุกเฉินด่วนที่สุด (Emergency ORIF) จัดกระดูกยึดแผ่นเหล็ก/สกรู หากเกิดภาวะหัวกระดูกตายในภายหลังอาจต้องผ่าตัดเชื่อมข้อ"
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
        ]
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
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED TREATMENT. Non-weight-bearing short leg cast or removable boot for 6-8 weeks, followed by progressive weight-bearing and subtalar range of motion.",
                  "th": "แนะนำรักษาแบบไม่ผ่าตัด ใส่เฝือกสั้นห้ามลงน้ำหนัก 6-8 สัปดาห์ แล้วเริ่มฝึกเคลื่อนไหวข้อเท้า"
                },
                "operative": {
                  "en": "Indicated ONLY if large posterior tuberosity avulsion (Beak fracture) threatens skin necrosis (emergency screw/anchor fixation).",
                  "th": "ผ่าตัดเฉพาะกรณีชิ้นกระดูกตุ่มหลังกะเทาะขนาดใหญ่ดึงรั้งผิวหนังเสี่ยงเน่าตาย ต้องผ่าตัดยึดสกรูฉุกเฉิน"
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
                "preferred": "operative",
                "conservative": {
                  "en": "Not recommended in active patients; leads to painful subtalar arthritis and heel widening.",
                  "th": "ไม่แนะนำเนื่องจากจะทำให้ข้อส้นเท้าเสื่อม ปวดเรื้อรัง และส้นเท้าบานผิดรูป"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. Closed reduction with percutaneous Steinmann pin leverage (Essex-Lopresti technique) + percutaneous cannulated screw fixation, OR ORIF with locking plate.",
                  "th": "แนะนำผ่าตัดงัดชิ้นกระดูกเข้าที่ด้วยเข็ม Steinmann pin ผ่านผิวหนัง (Essex-Lopresti technique) แล้วยึดด้วยสกรูจม หรือผ่าตัดดามแผ่นเหล็ก"
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
                "preferred": "operative",
                "conservative": {
                  "en": "Indicated ONLY if severe comorbidities, heavy smoking, peripheral vascular disease, or severe soft tissue swelling.",
                  "th": "พิจารณาเฉพาะผู้ป่วยที่มีโรคประจำตัวรุนแรง สูบบุหรี่จัด มีโรคหลอดเลือด หรือเนื้อเยื่อบวมรุนแรงผ่าตัดไม่ได้"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. Open reduction and internal fixation (ORIF) via lateral extensile approach: elevate depressed joint fragment, restore Bohler's angle and heel height/width, subchondral bone graft / void filler, and rigid locking plate fixation.",
                  "th": "แนะนำผ่าตัดมาตรฐาน (ORIF) เปิดแผลด้านนอก งัดยกชิ้นผิวข้อที่ยุบให้เรียบ คืนความสูงและมุม Bohler's angle ใส่กระดูกเทียมเสริมเบ้า แล้วดามด้วยแผ่นเหล็กล็อค Calcaneal Plate"
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
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED TREATMENT. Non-weight-bearing short leg cast or removable boot for 6-8 weeks, with early active subtalar range-of-motion exercises. Excellent long-term prognosis.",
                  "th": "แนะนำรักษาแบบไม่ผ่าตัด ใส่เฝือกสั้นห้ามลงน้ำหนัก 6-8 สัปดาห์ ร่วมกับฝึกหมุนขยับข้อส้นเท้า ผลการรักษาดีเยี่ยม"
                },
                "operative": {
                  "en": "Not indicated for true Type I non-displaced fractures.",
                  "th": "ไม่มีข้อบ่งชี้ในการผ่าตัด"
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
                "preferred": "operative",
                "conservative": {
                  "en": "Not recommended in active patients. Leads to painful subtalar joint incongruity and early osteoarthritis.",
                  "th": "ไม่แนะนำในผู้ป่วยทั่วไป ทำให้ผิวข้อขรุขระ ปวดส้นเท้าเรื้อรังและข้อเสื่อม"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT (GOLD STANDARD). Open reduction and internal fixation (ORIF) via lateral extensile approach with calcaneal locking plate and lag screws. High success rate (>80-85%).",
                  "th": "แนะนำผ่าตัดมาตรฐานหลัก (Gold Standard ORIF) เปิดแผลด้านนอกดามแผ่นเหล็กล็อค Calcaneal Plate และยึด Lag screw อัตราสำเร็จสูงมาก (>80-85%)"
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
                "preferred": "operative",
                "conservative": {
                  "en": "CONTRAINDICATED. Results in severe foot disability and painful subtalar stiffness.",
                  "th": "ห้ามใช้การรักษาด้วยวิธีนี้ ทำให้เท้าผิดรูปทรงและปวดข้อยึดติดรุนแรง"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. Meticulous ORIF via lateral approach: elevate depressed central fragment, subchondral bone graft/filler, and rigid locking plate fixation. Good outcomes in experienced hands.",
                  "th": "แนะนำผ่าตัด ORIF เปิดแผลด้านนอก งัดยกชิ้นผิวข้อกลางที่ยุบ เสริมกระดูกเทียม แล้วดามแผ่นเหล็กล็อค Calcaneal Plate"
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
                "preferred": "operative",
                "conservative": {
                  "en": "CONTRAINDICATED. Causes crippling foot deformity and total loss of function.",
                  "th": "ห้ามใช้การรักษาด้วยวิธีนี้ ทำให้รูปทรงเท้าพังทลายและพิการรุนแรง"
                },
                "operative": {
                  "en": "RECOMMENDED SURGICAL OPTIONS. 1) Primary Subtalar Arthrodesis (Primary joint fusion) combined with calcaneal body ORIF/plating to restore heel height and width. OR 2) ORIF attempt followed by secondary subtalar fusion when arthritis develops.",
                  "th": "แนะนำผ่าตัดทางเลือก: 1) ผ่าตัดเชื่อมข้อส้นเท้าทันที (**Primary Subtalar Arthrodesis**) ร่วมกับดามแผ่นเหล็กเพื่อคืนความสูง/ความกว้างส้นเท้า หรือ 2) ผ่าตัด ORIF แล้วนัดผ่าตัดเชื่อมข้อในภายหลังเมื่อเกิดข้อเสื่อม"
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
                "preferred": "operative",
                "conservative": {
                  "en": "CONTRAINDICATED. Causes severe painful flatfoot deformity.",
                  "th": "ห้ามใช้การรักษาด้วยวิธีนี้ ทำให้เท้าแบนผิดรูปและปวดรุนแรง"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. Open reduction and internal fixation (ORIF) with trans-articular screws or bridge plates to restore tarsometatarsal alignment.",
                  "th": "แนะนำผ่าตัด ORIF ด้วยสกรูแทงผ่านข้อหรือแผ่นเหล็ก Bridge plate ยึดกระดูกกลางเท้าทุกชิ้น"
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
                "preferred": "operative",
                "conservative": {
                  "en": "Indicated ONLY if non-displaced on weight-bearing views.",
                  "th": "พิจารณาเฉพาะกรณีไม่เคลื่อนในท่าลงน้ำหนัก"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. ORIF of displaced tarsometatarsal joints with 3.5mm/4.0mm solid or cannulated screws.",
                  "th": "แนะนำผ่าตัด ORIF ยึดข้อต่อ Tarsometatarsal ชิ้นที่หลุดเคลื่อนด้วยสกรู"
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
                "preferred": "operative",
                "conservative": {
                  "en": "CONTRAINDICATED.",
                  "th": "ห้ามใช้การรักษาด้วยวิธีนี้"
                },
                "operative": {
                  "en": "EMERGENCY RECONSTRUCTION. Check for compartment syndrome (fasciotomy if needed) + ORIF or Primary Lisfranc Arthrodesis (joint fusion).",
                  "th": "ผ่าตัดฉุกเฉินด่วนที่สุด! ตรวจวัดภาวะความดันกล้ามเนื้อ + ORIF หรือผ่าตัดเชื่อมข้อ Lisfranc"
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
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED TREATMENT. Hard-soled shoe, stiff walking boot, or short leg cast for 3-4 weeks with immediate weight-bearing as tolerated. Excellent outcome (>98%).",
                  "th": "แนะนำรักษาแบบไม่ผ่าตัด ใส่รองเท้าพื้นแข็ง หรือรองเท้าดาม CAM boot / เฝือกสั้น 3-4 สัปดาห์ ลงน้ำหนักได้ทันทีเท่าที่ทนไหว"
                },
                "operative": {
                  "en": "Indicated ONLY if large fragment with >2 mm articular step-off into cuboid joint or painful nonunion. ORIF with mini-screw or tension band wiring.",
                  "th": "ผ่าตัดเฉพาะกรณีชิ้นกระดูกเกยเข้าข้อ Cuboid >2 มม. ยึดด้วย Mini-screw"
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
                "preferred": "operative",
                "conservative": {
                  "en": "Indicated ONLY for non-athletes willing to accept 6-8 weeks of strictly non-weight-bearing cast immobilization.",
                  "th": "พิจารณาเฉพาะผู้ป่วยทั่วไปที่ไม่ใช่นักกีฬา และยินยอมใส่เฝือกดามห้ามลงน้ำหนัก 6-8 สัปดาห์"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT FOR ATHLETES AND ACTIVE PATIENTS. Percutaneous intramedullary cannulated screw fixation (4.5mm-5.5mm screw). Allows early weight-bearing and return to sports within 4-6 weeks.",
                  "th": "แนะนำผ่าตัดในนักกีฬาและผู้ใช้งานเท้า (RECOMMENDED ORIF) ใส่สกรูยึดแกนกลางกระดูก (Intramedullary Screw Fixation) ช่วยให้กลับไปเล่นกีฬาได้เร็วใน 4-6 สัปดาห์"
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
                "preferred": "operative",
                "conservative": {
                  "en": "High failure rate. Non-weight-bearing cast for minimum 10-12 weeks.",
                  "th": "อัตราล้มเหลวสูงมาก ต้องใส่เฝือกไม่ลงน้ำหนักนานอย่างน้อย 10-12 สัปดาห์"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. Intramedullary screw fixation + medullary canal reaming ± autologous bone grafting / bone void filler to cure nonunion.",
                  "th": "แนะนำผ่าตัดรักษา (RECOMMENDED ORIF) ผ่าตัดกรูลายแกนกระดูก (Reaming) + ยึดสกรูแกนกลาง Intramedullary screw ร่วมกับใส่กระดูกปลูก (Bone graft)"
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
