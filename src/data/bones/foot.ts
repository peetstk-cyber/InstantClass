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
              "en": "Hawkins Talar Neck Concept & AVN Risk Matrix",
              "th": "แนวคิดการจำแนก Hawkins และอัตราความเสี่ยงกระดูกตายขาดเลือด (AVN Risk Matrix)"
            },
            "imageUrl": "/images/hawkins/hawkins_concept.png",
            "description": {
              "en": "Talar Neck fractures compromise the retrogradely supplied blood vessels entering via the tarsal canal (deltoid branch of posterior tibial artery). Blood supply risk increases directly with degree of dislocation:\n\n• Type I (Non-displaced): Subtalar & Tibiotalar intact -> AVN Risk 0 - 10%\n• Type II (Displaced + Subtalar Dislocation): Subtalar joint dislocated -> AVN Risk 40 - 50%\n• Type III (Displaced + Subtalar & Tibiotalar Dislocation): Subtalar & Ankle joints dislocated -> AVN Risk 80 - 100%\n• Type IV (Displaced + Subtalar, Tibiotalar & Talonavicular Dislocation): All 3 joints dislocated -> AVN Risk 100%\n\n💡 Clinical Pearls:\n- Hawkins Sign: Subchondral osteopenia visible on AP/Canale view at 6-8 weeks post-injury indicates intact blood supply (NO AVN).\n- Absence of Hawkins sign suggests AVN (sclerosis of talar dome).",
              "th": "รอยหักคอกระดูกทาเลส (Talar Neck) ส่งผลทำลายเส้นเลือดเลี้ยงกระดูกที่วิ่งย้อนขึ้นทางด้านหลัง (Retrograde blood supply จาก Deltoid branch ของ Posterior tibial artery) ความเสี่ยงภาวะหัวกระดูกตาย (AVN) แปรผันตามจำนวนข้อที่หลุด:\n\n• Type I (ไม่เคลื่อน): ข้อ Subtalar และ Tibiotalar ปกติ -> เสี่ยง AVN 0 - 10%\n• Type II (เคลื่อน + ข้อ Subtalar หลุด): ข้อ Subtalar หลุด -> เสี่ยง AVN 40 - 50%\n• Type III (เคลื่อน + ข้อ Subtalar & Tibiotalar หลุด): ข้อหลุด 2 ข้อ -> เสี่ยง AVN 80 - 100%\n• Type IV (เคลื่อน + ข้อ Subtalar, Tibiotalar & Talonavicular หลุด): ข้อหลุดสมบูรณ์ 3 ข้อ -> เสี่ยง AVN 100%\n\n💡 เกร็ดทางคลินิก:\n- Hawkins Sign: รอยบางโปร่งแสงใต้ผิวข้อ (Subchondral osteopenia) ในภาพเอกซเรย์สัปดาห์ที่ 6-8 แสดงว่ายังมีเลือดมาเลี้ยงกระดูก (ไม่เกิด AVN)\n- หากไม่พบ Hawkins sign (เห็นกระดูกทึบขาว Sclerosis) แสดงว่าเกิดภาวะหัวกระดูกตายขาดเลือด (AVN)"
            }
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
              "th": "แนวคิดรอยหักรอบสอง Essex-Lopresti (Tongue vs Joint-Depression)"
            },
            "imageUrl": "/images/essex_lopresti/concept.png",
            "description": {
              "en": "Primary fracture line forms obliquely through the posterior facet (crucial angle of Gissane) driven by talar wedge loading. The exit trajectory of the SECONDARY fracture line dictates the classification:\n\n1. Tongue-Type (Top Row A-C):\n   • Secondary line extends straight POSTERIORLY to the posterior tuberosity border.\n   • Posterior facet fragment remains attached to the large tuberosity fragment forming a horizontal 'tongue'.\n   • Key Advantage: Suitable for closed reduction via percutaneous Steinmann pin leverage (Essex-Lopresti maneuver).\n\n2. Joint-Depression Type (Bottom Row D-F, ~75% Most Common):\n   • Secondary line curves SUPERIORLY exiting just behind the posterior facet.\n   • Isolates the posterior facet fragment, driving it crushed/rotated deep into calcaneal body.\n   • Surgical Indication: Requires open reduction (ORIF) via extensile lateral approach to elevate depressed joint surface.\n\n💡 Bohler's Angle Rule: Normal = 20 - 40°. Reduction to <20° indicates calcaneal height collapse. Invert (<0°) in severe Joint-Depression fractures.",
              "th": "รอยหักปฐมภูมิ (Primary line) เกิดขึ้นเฉียงตัดผ่านผิวข้อ Posterior facet จากแรงกดอัดของกระดูก Talus ทิศทางพาดออกของ **รอยหักทุติยภูมิ (Secondary line)** เป็นตัวแบ่งชนิด:\n\n1. Tongue-Type (แถวบน A-C):\n   • รอยหักรอบสองพาดตรงไปทางด้านหลังทะลุขอบตุ่มส้นเท้าด้านหลัง\n   • ชิ้นผิวข้อ Posterior facet ยังติดอยู่กับชิ้นกระดูกส้นเท้าด้านบนเกิดเป็น **'ชิ้นลิ้น' (Tongue fragment)**\n   • ข้อได้เปรียบ: สามารถผ่าตัดดัดงัดเข้าที่ผ่านทางผิวหนังด้วยเข็ม Steinmann pin (Essex-Lopresti percutaneous maneuver)\n\n2. Joint-Depression Type (แถวล่าง D-F, พบบ่อยที่สุด ~75%):\n   • รอยหักรอบสองโค้งขึ้นด้านบนทะลุออกหลังต่อผิวข้อ Posterior facet พอดี\n   • ตัดชิ้นผิวข้อแยกเป็นอิสระหมุนจมยุบลงในเนื้อกระดูกพรุนส้นเท้า\n   • ข้อบ่งชี้ผ่าตัด: จำเป็นต้องผ่าตัดเปิด ORIF ดามแผ่นเหล็กเพื่อเปิดงัดชิ้นผิวข้อขึ้นมาให้เรียบ\n\n💡 เกณฑ์มุม Bohler's Angle: ปกติ = 20 - 40 องศา หากลดลง <20 องศาแสดงว่าส้นเท้ายุบตัวลงรุนแรง"
            }
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
              "en": "Sanders Coronal CT Lines & Surgical Prognosis Concept",
              "th": "แนวคิดตำแหน่งเส้นรอยหักภาพตัด Coronal CT และการทำนายผลรักษา Sanders"
            },
            "imageUrl": "/images/sanders/concept.png",
            "description": {
              "en": "Sanders classification is based on coronal CT cuts through the widest aspect of the posterior articular facet. Fracture lines are designated from lateral to medial (A, B, C):\n• Line A: Lateral 1/3 (creates lateral facet fragment)\n• Line B: Central 1/3 (creates central facet fragment)\n• Line C: Medial 1/3 (creates medial facet fragment at sustentaculum border)\n\nClassification & Surgical Management Summary:\n1. Type I (Non-displaced, <2mm displacement): All non-displaced fractures regardless of number of lines -> Conservative treatment (90-95% success).\n2. Type II (Two-Part, 1 line >2mm): Subdivided into IIA, IIB (most common), IIC -> Gold standard for ORIF with plate & lag screws (>80-85% good/excellent outcome).\n3. Type III (Three-Part, 2 lines with depressed central piece): Subdivided into IIIAB, IIIAC, IIIBC -> Technically demanding ORIF (elevation + bone graft/void filler + plate).\n4. Type IV (Four-Part, 3+ lines / highly comminuted): Severely crushed posterior facet -> Poor ORIF prognosis; indication for Primary Subtalar Arthrodesis (joint fusion).",
              "th": "ระบบ Sanders ประเมินจากภาพ Coronal CT ผ่านส่วนที่กว้างที่สุดของผิวข้อ Posterior facet โดยแบ่งเส้นรอยหักจากด้านนอกไปด้านในเป็น A, B, C:\n• Line A: รอยหัก 1/3 ด้านนอก (Lateral 1/3)\n• Line B: รอยหัก 1/3 ตรงกลาง (Central 1/3)\n• Line C: รอยหัก 1/3 ด้านใน (Medial 1/3 ติดขอบ Sustentaculum)\n\nสรุปชนิดและการทำนายผลการรักษา:\n1. Type I (ไม่เคลื่อน, เหลื่อม <2มม.): ไม่ว่าจะกี่เส้นรอยหักหากไม่เคลื่อน -> รักษาแบบไม่ผ่าตัด (อัตราสำเร็จ 90-95%)\n2. Type II (หักแยก 2 ชิ้น, 1 เส้นเคลื่อน >2มม.): แบ่งเป็น IIA, IIB (พบบ่อยสุด), IIC -> ข้อบ่งชี้มาตรฐานหลักผ่าตัด ORIF (ผลดี >80-85%)\n3. Type III (หักแยก 3 ชิ้น, 2 เส้นชิ้นกลางยุบ): แบ่งเป็น IIIAB, IIIAC, IIIBC -> ผ่าตัด ORIF ซับซ้อน (งัดชิ้นกลางยุบขึ้นมา เสริมกระดูกเทียม ดามแผ่นเหล็ก)\n4. Type IV (หักแตกละเอียด >4 ชิ้น, รอยหัก >=3 เส้น): ผิวข้อแตกป่นละเอียด -> ผลผ่าตัด ORIF ไม่ดี แนะนำผ่าตัดเชื่อมข้อส้นเท้าเป็นอันดับแรก (**Primary Subtalar Arthrodesis**)"
            }
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
