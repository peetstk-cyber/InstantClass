import type { BoneData } from "../../types";

export const clavicleBone: BoneData = {
  "id": "clavicle",
  "name": {
    "en": "Clavicle",
    "th": "กระดูกไหปลาร้า"
  },
  "description": {
    "en": "Collarbone",
    "th": "กระดูกไหปลาร้าเชื่อมระหว่างกระดูกหน้าอกและกระดูกสะบัก"
  },
  "pediatric": false,
  "regions": [
    {
      "id": "ac-joint",
      "name": {
        "en": "AC Joint",
        "th": "ข้อต่อ AC Joint"
      },
      "classifications": [
        {
          "system": "Rockwood",
          "fullName": {
            "en": "Rockwood Classification",
            "th": "ระบบ Rockwood Classification"
          },
          "description": {
            "en": "Rockwood Classification for AC Joint Injuries",
            "th": "Rockwood Classification สำหรับการบาดเจ็บข้อต่อ AC"
          },
          "investigations": [
            {
              "name": "Zanca View",
              "details": {
                "en": "AP view with 10-15° cephalic tilt. Best for visualizing AC joint without spine overlap.",
                "th": "ถ่าย AP โดยเอียงหลอดรังสีชี้ขึ้น 10-15 องศา เป็นท่าที่ดีที่สุดในการดูข้อ AC โดยไม่มีกระดูกสันหลังบัง"
              },
              "imageUrl": "/images/investigations/clavicle/zanca_view.jpg"
            },
            {
              "name": "Axillary View",
              "details": {
                "en": "Essential for evaluating anterior or posterior displacement (e.g., Type IV).",
                "th": "ท่าสำคัญในการดูว่าไหปลาร้าเคลื่อนไปด้านหน้าหรือหลัง (ใช้ประเมิน Type IV)"
              },
              "imageUrl": "/images/investigations/clavicle/axillary_view.jpg"
            },
            {
              "name": "Bilateral AP / Stress View",
              "details": {
                "en": "May be done with or without weights to evaluate subtle CC distance widening.",
                "th": "อาจให้ผู้ป่วยถือน้ำหนักที่แขน เพื่อดูว่าช่องว่าง CC กว้างขึ้นหรือไม่ (ใช้เทียบสองข้าง)"
              },
              "imageUrl": "/images/investigations/clavicle/stress_clavicle_view.jpg"
            }
          ],
          "types": [
            {
              "type": "Type I",
              "name": {
                "en": "Type I",
                "th": "Type I"
              },
              "description": {
                "en": "Sprain of AC ligament\nIntact CC ligaments",
                "th": "เอ็น AC บาดเจ็บเล็กน้อย\nเอ็น CC ปกติ"
              },
              "moi": {
                "en": "Direct blow to the point of the shoulder",
                "th": "ล้มกระแทกไหล่โดยตรง"
              },
              "treatment": {
                "conservative": {
                  "en": "Sling for 1-2 weeks, early ROM",
                  "th": "ใส่สายคล้องแขน 1-2 สัปดาห์ และเริ่มขยับข้อ"
                },
                "operative": {
                  "en": "None",
                  "th": "ไม่ต้องผ่าตัด"
                }
              },
              "illustrationId": "/images/rockwood_ac/type1.png",
              "xrayDescription": {
                "en": "Normal radiograph",
                "th": "ภาพถ่ายรังสีปกติ ไม่มีการเคลื่อนของข้อ"
              }
            },
            {
              "type": "Type II",
              "name": {
                "en": "Type II",
                "th": "Type II"
              },
              "description": {
                "en": "Torn AC ligament\nSprained CC ligaments",
                "th": "เอ็น AC ขาด\nเอ็น CC บาดเจ็บเล็กน้อย"
              },
              "moi": {
                "en": "Direct blow to the point of the shoulder",
                "th": "ล้มกระแทกไหล่โดยตรง"
              },
              "treatment": {
                "conservative": {
                  "en": "Sling for 1-2 weeks, early ROM",
                  "th": "ใส่สายคล้องแขน 1-2 สัปดาห์ และเริ่มขยับข้อ"
                },
                "operative": {
                  "en": "Rarely needed",
                  "th": "แทบไม่ต้องผ่าตัด ยกเว้นในนักกีฬาที่ต้องใช้งานหนัก"
                }
              },
              "illustrationId": "/images/rockwood_ac/type2.png",
              "xrayDescription": {
                "en": "Widened AC joint, clavicle slightly elevated but <25%",
                "th": "ช่องข้อ AC กว้างขึ้น กระดูกไหปลาร้ายกขึ้นเล็กน้อย (<25%)"
              }
            },
            {
              "type": "Type III",
              "name": {
                "en": "Type III",
                "th": "Type III"
              },
              "description": {
                "en": "Torn AC and CC ligaments\n>25% to 100% displacement",
                "th": "เอ็น AC และ CC ขาดทั้งหมด\nกระดูกยกขึ้น >25% ถึง 100%"
              },
              "moi": {
                "en": "Direct blow to the point of the shoulder",
                "th": "ล้มกระแทกไหล่โดยตรงรุนแรง"
              },
              "treatment": {
                "conservative": {
                  "en": "Sling for 3-4 weeks. Trial of non-operative management for most patients.",
                  "th": "ใส่สายคล้องแขน 3-4 สัปดาห์ แนะนำให้รักษาแบบไม่ผ่าตัดเป็นทางเลือกแรกในผู้ป่วยส่วนใหญ่"
                },
                "operative": {
                  "en": "Consider in high-level athletes or heavy laborers",
                  "th": "พิจารณาผ่าตัดในนักกีฬาอาชีพ หรือผู้ที่ต้องใช้แรงงานหนัก"
                }
              },
              "illustrationId": "/images/rockwood_ac/type3.png",
              "xrayDescription": {
                "en": "Clavicle elevated 25-100% relative to acromion",
                "th": "กระดูกไหปลาร้ายกขึ้น 25-100% เมื่อเทียบกับ Acromion"
              }
            },
            {
              "type": "Type IV",
              "name": {
                "en": "Type IV",
                "th": "Type IV"
              },
              "description": {
                "en": "Posterior displacement of distal clavicle\nDisplaced into trapezius",
                "th": "กระดูกไหปลาร้าส่วนปลายเคลื่อนไปด้านหลัง\nทะลุกล้ามเนื้อ Trapezius"
              },
              "moi": {
                "en": "Posteriorly directed force",
                "th": "แรงกระแทกจากด้านหน้าไปหลัง"
              },
              "treatment": {
                "conservative": {
                  "en": "Not recommended",
                  "th": "ไม่แนะนำ"
                },
                "operative": {
                  "en": "Surgical reconstruction (e.g., CC ligament reconstruction/fixation)",
                  "th": "ผ่าตัดยึดตรึงข้อและซ่อมแซม/สร้างเอ็น CC ใหม่"
                }
              },
              "illustrationId": "/images/rockwood_ac/type4.png",
              "xrayDescription": {
                "en": "Axillary lateral view shows posterior displacement of clavicle",
                "th": "ต้องดูภาพรังสีท่า Axillary lateral จะเห็นไหปลาร้าเคลื่อนไปด้านหลัง"
              }
            },
            {
              "type": "Type V",
              "name": {
                "en": "Type V",
                "th": "Type V"
              },
              "description": {
                "en": "Superior displacement >100% (often 100-300%)\nDisruption of deltotrapezial fascia",
                "th": "กระดูกไหปลาร้ายกสูงขึ้นมาก (>100% ถึง 300%)\nผังผืด Deltotrapezial ฉีกขาด"
              },
              "moi": {
                "en": "Severe downward force on acromion",
                "th": "แรงกระแทกกดไหล่ลงอย่างรุนแรง"
              },
              "treatment": {
                "conservative": {
                  "en": "Not recommended",
                  "th": "ไม่แนะนำ"
                },
                "operative": {
                  "en": "Surgical reconstruction",
                  "th": "ผ่าตัดจัดกระดูกและซ่อมแซมเอ็น"
                }
              },
              "illustrationId": "/images/rockwood_ac/type5.png",
              "xrayDescription": {
                "en": "Clavicle elevated >100% relative to acromion",
                "th": "กระดูกไหปลาร้ายกสูงขึ้นมากกว่า 100% หรือมีระยะห่าง CC กว้างมาก"
              }
            },
            {
              "type": "Type VI",
              "name": {
                "en": "Type VI",
                "th": "Type VI"
              },
              "description": {
                "en": "Inferior displacement of clavicle\nUnder acromion or coracoid",
                "th": "กระดูกไหปลาร้าเคลื่อนลงล่าง\nไปอยู่ใต้ Acromion หรือ Coracoid"
              },
              "moi": {
                "en": "Severe hyperabduction and external rotation",
                "th": "การบาดเจ็บรุนแรงแบบแขนกางและบิดออก"
              },
              "treatment": {
                "conservative": {
                  "en": "Not recommended",
                  "th": "ไม่แนะนำ"
                },
                "operative": {
                  "en": "Surgical reconstruction",
                  "th": "ผ่าตัดจัดกระดูกและซ่อมแซมเอ็น"
                }
              },
              "illustrationId": "/images/rockwood_ac/type6.png",
              "xrayDescription": {
                "en": "Clavicle displaced inferiorly",
                "th": "กระดูกไหปลาร้าเคลื่อนลงล่างไปอยู่ใต้ Acromion หรือ Coracoid"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "shaft",
      "name": {
        "en": "Clavicle Shaft / Allman",
        "th": "ลำกระดูกไหปลาร้า (Clavicle Shaft)"
      },
      "classifications": [
        {
          "system": "Allman",
          "fullName": {
            "en": "Allman Classification for Clavicle Fractures",
            "th": "การจำแนกกระดูกไหปลาร้าหัก Allman Classification"
          },
          "description": {
            "en": "Anatomical location classification system for all clavicle fractures, categorizing injuries into Group I (Middle Third / Midshaft ~80%), Group II (Distal / Lateral Third ~15%), and Group III (Proximal / Medial Third ~5%).",
            "th": "ระบบจำแนกกระดูกไหปลาร้าหักตามตำแหน่งทางกายวิภาค แบ่งเป็น Group I (ส่วนกลาง Midshaft ~80%), Group II (ส่วนปลาย Distal 1/3 ~15%) และ Group III (ส่วนต้น Medial 1/3 ~5%)"
          },
          "investigations": [
            {
              "name": "Standard AP Clavicle Radiograph",
              "details": {
                "en": "Standard AP view of the clavicle. Essential to identify fracture anatomical zone (Group I, II, III), displacement percentage, shortening (>2cm), and vertical displacement.",
                "th": "ภาพเอกซเรย์ไหปลาร้าท่า AP มาตรฐาน ประเมินโซนหัก (Group I, II, III), ระยะหดสั้น (>2ซม.) และการเคลื่อนตัว"
              },
              "imageUrl": "/images/investigations/clavicle/ap_clavicle_view.jpg"
            },
            {
              "name": "15-45° Cephalic Angulated View (Zanca View)",
              "details": {
                "en": "Angulated 15° cephalic view. Essential to project the clavicle free from thoracic ribs and scapular spine overlap, evaluating comminution and CC ligament status.",
                "th": "ภาพเอกซเรย์เอียงหลอดรังสี 15 องศาขึ้นทางหัว เพื่อหลบกระดูกซี่โครงทับซ้อนและประเมินชิ้นกระดูกแตกละเอียด"
              },
              "imageUrl": "/images/investigations/clavicle/zanca_view.jpg"
            },
            {
              "name": "Non-contrast 3D CT Scan of Chest/Clavicle",
              "details": {
                "en": "Chest/Clavicle CT scan with 3D reconstructions. Mandatory in Group III (Proximal 1/3) fractures with posterior displacement to rule out life-threatening compression of subclavian vessels, trachea, or esophagus.",
                "th": "เอกซเรย์คอมพิวเตอร์ (3D CT scan) จำเป็นอย่างยิ่งใน Group III (กระดูกส่วนต้นหัก) ที่มีการเคลื่อนตัวไปด้านหลัง เพื่อตรวจประเมินหลอดเลือดใหญ่ ท่อลม และหลอดอาหาร"
              }
            }
          ],
          "types": [
            {
              "type": "Group I",
              "name": {
                "en": "Group I: Middle Third (Midshaft) Fracture (~80%)",
                "th": "Group I: ส่วนกลางลำกระดูก (Midshaft Fracture - พบบ่อยที่สุด ~80%)"
              },
              "description": {
                "en": "Fracture located in the middle third (midshaft) of the clavicle (~80% of all clavicle fractures)\nProximal fragment elevated superiorly by Sternocleidomastoid (SCM) muscle\nDistal fragment pulled inferiorly and medially by arm weight and Pectoralis Major muscle\nHigh success with conservative care unless displaced >2cm or comminuted",
                "th": "รอยหักบริเวณส่วนกลางลำกระดูกไหปลาร้า (Midshaft) เป็นตำแหน่งที่ **พบบ่อยที่สุด (~80%)**\nชิ้นกระดูกส่วนต้นถูกกล้ามเนื้อ Sternocleidomastoid ดึงยกขึ้นด้านบน\nชิ้นกระดูกส่วนปลายถูกน้ำหนักแขนและกล้ามเนื้อ Pectoralis Major ดึงรั้งลงล่างและเข้าด้านใน\nการรักษาแบบไม่ผ่าตัดได้ผลดีเยี่ยม ยกเว้นกระดูกหดสั้น >2 ซม. หรือเกยเคลื่อน >100%"
              },
              "moi": {
                "en": "Direct blow to the lateral aspect of the shoulder from fall or sports collision.",
                "th": "แรงกระแทกตรงเข้าด้านข้างหัวไหล่จากการล้ม หรืออุบัติเหตุเล่นกีฬา"
              },
              "treatment": {
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED TREATMENT FOR NON-DISPLACED / MINIMALLY DISPLACED (<2cm shortening). Simple arm sling or figure-of-eight bandage for 4-6 weeks, with early passive pendulum exercises at 2 weeks. Excellent union rate (>95%).",
                  "th": "แนะนำรักษาแบบไม่ผ่าตัดในผู้ป่วยทั่วไป (สำหรับกระดูกไม่เคลื่อนหรือหดสั้น <2 ซม.) ใส่สายคล้องแขน (Arm Sling) 4-6 สัปดาห์ ร่วมกับฝึกแกว่งแขน อัตรากระดูกติดดีเยี่ยม (>95%)"
                },
                "operative": {
                  "en": "Indicated for shortening > 2 cm, >100% displacement (no cortical contact), skin tenting, open fracture, or neurovascular injury. ORIF with superior or anteroinferior anatomical locking plate.",
                  "th": "พิจารณาผ่าตัด (ORIF) กรณีขอบกระดูกหดสั้น >2 ซม., ชิ้นกระดูกเคลื่อนหลุด >100%, ทิ่มผิวหนัง หรือบาดเจ็บต่อเส้นเลือดเส้นประสาท ดามแผ่นเหล็กล็อค Anatomical Locking Plate"
                }
              },
              "illustrationId": "/images/allman_clavicle/allman_group_1.png",
              "xrayDescription": {
                "en": "Transverse, oblique, or comminuted fracture line in the middle third of the clavicle shaft.",
                "th": "เห็นรอยหักขวาง เฉียง หรือแตกละเอียดบริเวณ 1/3 ส่วนกลางของลำกระดูกไหปลาร้า"
              }
            },
            {
              "type": "Group II",
              "name": {
                "en": "Group II: Distal (Lateral Third) Fracture (~15%)",
                "th": "Group II: ส่วนปลายด้านนอก (Distal / Lateral Third ~15%)"
              },
              "description": {
                "en": "Fracture located in the distal (lateral) third of the clavicle (~15% of clavicle fractures)\nSubclassified by Neer (Types I-V) based on relationship to Coracoclavicular (CC) ligaments\nHigh nonunion rate (~30%) in displaced patterns (Neer Type II and V)\nSurgical fixation indicated for displaced injuries",
                "th": "รอยหักบริเวณ 1/3 ส่วนปลายด้านนอกของกระดูกไหปลาร้า (~15%)\nจำแนกย่อยตาม Neer Classification (Type I-V) ตามความสัมพันธ์กับเส้นเอ็น Coracoclavicular (CC)\nเสี่ยงต่อภาวะกระดูกไม่ติดสูง (~30%) หากเป็นชนิดเคลื่อนตัว (Neer Type II และ V)\nแนะนำผ่าตัดยึดกระดูกในชนิดที่กระดูกเคลื่อนตัว"
              },
              "moi": {
                "en": "Direct impact to the acromion or point of the shoulder with arm adducted.",
                "th": "แรงกระแทกตรงเข้าที่ปลายไหล่ (Acromion) ขณะหุบแขน"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "Indicated ONLY for stable non-displaced fractures (Neer Type I and III). Arm sling for 3-4 weeks.",
                  "th": "พิจารณาเฉพาะชนิดไม่เคลื่อนตัว (Neer Type I และ III) ใส่สายคล้องแขน 3-4 สัปดาห์"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT FOR DISPLACED PATTERNS (Neer Type II & V). Open reduction and internal fixation (ORIF) with superior distal clavicle locking plate + coracoclavicular (CC) suture tape / button augmentation or Hook Plate.",
                  "th": "แนะนำผ่าตัดรักษาในชนิดเคลื่อนตัว (Neer Type II & V) เปิดผ่าตัดดามแผ่นเหล็กล็อคส่วนปลาย (Distal Clavicle Locking Plate) ร่วมกับการรัดยึดเอ็น CC"
                }
              },
              "illustrationId": "/images/allman_clavicle/allman_group_2.png",
              "xrayDescription": {
                "en": "Fracture line in the distal 1/3 of clavicle lateral to the coracoid process with variable CC ligament disruption.",
                "th": "เห็นรอยหักบริเวณ 1/3 ส่วนปลายของกระดูกไหปลาร้า อยู่ถัดไปทางด้านนอกต่อกระดูก Coracoid process"
              }
            },
            {
              "type": "Group III",
              "name": {
                "en": "Group III: Proximal (Medial Third) Fracture (~5%)",
                "th": "Group III: ส่วนต้นด้านใน (Proximal / Medial Third ~5%)"
              },
              "description": {
                "en": "Fracture located in the proximal (medial) third of the clavicle near sternoclavicular joint (~5%)\nLeast common clavicle fracture pattern, usually from severe high-energy trauma\nLow nonunion rate with non-operative care\nMUST rule out posterior displacement threatening retrosternal mediastinal structures",
                "th": "รอยหักบริเวณ 1/3 ส่วนต้นด้านในใกล้ข้อต่อ Sternoclavicular (SC joint) พบบอกที่สุด (~5%)\nมักเกิดจากอุบัติเหตุพลังงานสูงรุนแรง\nอัตรากระดูกไม่ติดต่ำมากเมื่อรักษาแบบไม่ผ่าตัด\n**ต้องตรวจกรองการเคลื่อนตัวไปด้านหลัง** ที่อาจทับกดเส้นเลือดใหญ่และท่อลมบริเวณหลังกระดูกหน้าอก"
              },
              "moi": {
                "en": "High-energy direct compression across the chest or motor vehicle accident.",
                "th": "แรงกระแทกอัดพลังงานสูงเข้าที่หน้าอก หรืออุบัติเหตุทางรถยนต์"
              },
              "treatment": {
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED TREATMENT FOR NON-DISPLACED / ANTERIORLY DISPLACED FRACTURES. Arm sling for 3-4 weeks, followed by progressive active shoulder ROM. Excellent prognosis.",
                  "th": "แนะนำรักษาแบบไม่ผ่าตัดในผู้ป่วยส่วนใหญ่ (ชนิดไม่เคลื่อนตัวหรือเคลื่อนไปด้านหน้า) ใส่สายคล้องแขน 3-4 สัปดาห์ แล้วฝึกบริหารไหล่"
                },
                "operative": {
                  "en": "Indicated ONLY for posterior displacement threatening mediastinal organs, severe skin tenting, or painful nonunion. ORIF with medial T-plate or tension-band wiring.",
                  "th": "ผ่าตัดเฉพาะกรณีเคลื่อนไปด้านหลังทับกดอวัยวะช่องอก ทิ่มผิวหนัง หรือกระดูกไม่ติด ดามแผ่นเหล็ก Medial T-plate"
                }
              },
              "illustrationId": "/images/allman_clavicle/allman_group_3.png",
              "xrayDescription": {
                "en": "Fracture line in the proximal 1/3 medial end of clavicle near sternoclavicular articulation.",
                "th": "เห็นรอยหักบริเวณ 1/3 ส่วนต้นด้านในใกล้กับข้อต่อ Sternoclavicular"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "distal",
      "name": {
        "en": "Distal Clavicle",
        "th": "กระดูกไหปลาร้าส่วนปลาย (Distal Clavicle)"
      },
      "classifications": [
        {
          "system": "Neer (Distal Clavicle)",
          "fullName": {
            "en": "Neer Classification for Distal Clavicle Fractures",
            "th": "การจำแนกกระดูกไหปลาร้าส่วนปลายหักแบบ Neer"
          },
          "description": {
            "en": "Classification of distal (lateral) third clavicle fractures based on the relationship to the coracoclavicular (CC) ligaments (conoideum and trapezoideum) and articular surface, dictating nonunion risk and surgical management.",
            "th": "ระบบจำแนกกระดูกไหปลาร้าส่วนปลาย (Distal 1/3) หักตามความสัมพันธ์กับเส้นเอ็น Coracoclavicular (CC) และผิวข้อ AC ซึ่งเป็นตัวกำหนดความเสี่ยงต่อกระดูกไม่ติดและการผ่าตัด"
          },
          "investigations": [
            {
              "name": "AP Clavicle View",
              "details": {
                "en": "Standard AP view of the clavicle. Evaluates fracture displacement and superior migration of the proximal fragment.",
                "th": "ภาพเอกซเรย์ไหปลาร้าท่า AP มาตรฐาน ประเมินการเคลื่อนและระดับการยกขึ้นของชิ้นกระดูกไหปลาร้าส่วนต้น"
              },
              "imageUrl": "/images/investigations/clavicle/ap_clavicle_view.jpg"
            },
            {
              "name": "15° Cephalic Tilt View (Zanca View)",
              "details": {
                "en": "AP view with 15° cephalic tilt using 50% reduced radiation exposure. Essential to clearly visualize the distal clavicle fracture line and AC joint alignment without thoracic overlay.",
                "th": "ภาพเอกซเรย์เอียงหลอดรังสีชี้ขึ้น 15 องศา ช่วยให้เห็นรอยหักบริเวณไหปลาร้าส่วนปลายและข้อต่อ AC ชัดเจนโดยไม่มีกระดูกซี่โครงทับซ้อน"
              },
              "imageUrl": "/images/investigations/clavicle/zanca_view.jpg"
            },
            {
              "name": "Stress / Weight-bearing Views",
              "details": {
                "en": "Bilateral AP views taken while holding 10-15 lb weights. Helps distinguish stable (Type I) from unstable (Type II) distal clavicle fractures by accentuating CC interval displacement.",
                "th": "ภาพเอกซเรย์เปรียบเทียบสองข้างขณะผู้ป่วยถือน้ำหนัก 10-15 ปอนด์ ช่วยแยกชิ้นส่วนรอยหักที่มั่นคง (Type I) ออกจากชนิดที่ไม่มั่นคง (Type II) โดยเพิ่มระยะถ่างของเอ็น CC"
              },
              "imageUrl": "/images/investigations/clavicle/stress_clavicle_view.jpg"
            }
          ],
          "types": [
            {
              "type": "Neer I",
              "name": {
                "en": "Neer Type I (Minimal Displacement)",
                "th": "Neer Type I (เคลื่อนตัวน้อย - มั่นคง)"
              },
              "description": {
                "en": "Fracture occurs distal to intact Coracoclavicular (CC) ligaments or between CC ligaments\nCC ligaments remain attached to the proximal fragment\nAC joint remains intact and stable\nLow risk of nonunion",
                "th": "รอยหักอยู่ปลายต่อเอ็น Coracoclavicular (CC) ที่สมบูรณ์ หรืออยู่ระหว่างเส้นเอ็น CC\nเส้นเอ็น CC ยังคงยึดติดกับชิ้นกระดูกส่วนต้นอย่างสมบูรณ์\nข้อต่อ AC มั่นคงดี\nความเสี่ยงต่อกระดูกไม่ติดต่ำมาก"
              },
              "moi": {
                "en": "Direct impact to the lateral aspect of the shoulder.",
                "th": "แรงกระแทกโดยตรงเข้าที่ด้านข้างของหัวไหล่"
              },
              "treatment": {
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED TREATMENT. Sling immobilization for 3-4 weeks for comfort, followed by progressive range of motion and strengthening. Excellent healing rate (>95%).",
                  "th": "แนะนำให้รักษาแบบไม่ผ่าตัดเป็นอันดับแรก ใส่สายคล้องแขน (Sling) นาน 3-4 สัปดาห์ แล้วเริ่มกายภาพบำบัดขยับข้อ อัตรากระดูกติดสูงมาก (>95%)"
                },
                "operative": {
                  "en": "Rarely indicated; reserved for active patients with symptomatic nonunion.",
                  "th": "แทบไม่ต้องผ่าตัด พิจารณาเฉพาะกรณีที่มีกระดูกไม่ติดและมีอาการปวด"
                }
              },
              "illustrationId": "/images/neer_clavicle/neer_1.png",
              "xrayDescription": {
                "en": "Non-displaced or minimally displaced fracture line distal to the CC ligaments with normal CC interval.",
                "th": "รอยหักปลายต่อเอ็น CC โดยไม่มีการเคลื่อนตัวหรือเคลื่อนน้อยมาก ระยะห่าง CC interval ปกติ"
              }
            },
            {
              "type": "Neer IIA",
              "name": {
                "en": "Neer Type IIA (Medial to CC Ligaments)",
                "th": "Neer Type IIA (หักด้านในต่อเอ็น CC - ไม่มั่นคง)"
              },
              "description": {
                "en": "Fracture line occurs MEDIAL to intact CC ligaments\nBoth Conoid and Trapezoid ligaments remain attached to the DISTAL fragment\nProximal fragment is unstable and pulled superiorly by Trapezius and Sternocleidomastoid muscles\nHigh nonunion rate (up to 30-40%) with conservative treatment",
                "th": "รอยหักอยู่ด้านใน (Medial) ต่อเอ็น CC ที่สมบูรณ์\nเอ็น Conoid และ Trapezoid ยังคงยึดติดอยู่กับชิ้นกระดูกส่วนปลาย\nชิ้นกระดูกส่วนต้นไม่มั่นคงและถูกกล้ามเนื้อ Trapezius ดึงรั้งยกสูงขึ้นด้านบน\nอัตรากระดูกไม่ติดสูงมาก (30-40%) หากรักษาด้วยการเข้าเฝือกอย่างเดียว"
              },
              "moi": {
                "en": "High-energy direct force to the acromion driving the shoulder downward.",
                "th": "แรงกระแทกพลังงานสูงเข้าที่ Acromion กดไหล่ลงด้านล่างอย่างรุนแรง"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "Not recommended for young, active individuals due to high rate of painful nonunion (30-40%). Trial of sling reserved for elderly low-demand patients.",
                  "th": "ไม่แนะนำในผู้ป่วยวัยทำงานเนื่องจากเสี่ยงกระดูกไม่ติดสูง (30-40%) พิจารณาใส่ Sling เฉพาะผู้สูงอายุที่ไม่ค่อยใช้งานแขน"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. Surgical fixation using superior distal clavicle locking plate with CC button reconstruction, coracoclavicular suture tape augmentation, or hook plate fixation.",
                  "th": "แนะนำให้ผ่าตัดรักษา (ORIF) โดยใช้แผ่นเหล็กล็อคส่วนปลาย (Distal clavicle locking plate) ร่วมกับการยึดเชือก CC Tape หรือใส่ Hook plate"
                }
              },
              "illustrationId": "/images/neer_clavicle/neer_2a.png",
              "xrayDescription": {
                "en": "Marked superior displacement of proximal fragment with CC ligaments staying with distal fragment.",
                "th": "ชิ้นกระดูกส่วนต้นยกตัวสูงขึ้นชัดเจน โดยเอ็น CC ยังคงยึดติดอยู่กับชิ้นกระดูกส่วนปลาย"
              }
            },
            {
              "type": "Neer IIB",
              "name": {
                "en": "Neer Type IIB (Torn Conoid Ligament)",
                "th": "Neer Type IIB (เอ็น Conoid ขาด - ไม่มั่นคง)"
              },
              "description": {
                "en": "Fracture occurs between the CC ligaments\nConoid ligament is TORN\nTrapezoid ligament remains attached to the distal fragment\nProximal fragment is unstable and displaces superiorly",
                "th": "รอยหักอยู่ระหว่างเอ็น CC ทั้งสองเส้น\nเอ็น Conoid (เส้นใน) ฉีกขาด\nเอ็น Trapezoid (เส้นนอก) ยังคงยึดติดกับชิ้นกระดูกส่วนปลาย\nชิ้นกระดูกส่วนต้นยกลอยสูงขึ้น ไม่มั่นคง"
              },
              "moi": {
                "en": "Direct blow onto the acromion with arm adducted.",
                "th": "แรงกระแทกโดยตรงบน Acromion ขณะหุบแขน"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "High risk of symptomatic nonunion and shoulder asymmetry.",
                  "th": "ความเสี่ยงสูงต่อกระดูกไม่ติดและไหล่เสียรูปทรง"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. Open reduction and internal fixation (ORIF) with distal clavicle plate + Coracoclavicular ligament repair or suture button augmentation (e.g., TightRope).",
                  "th": "แนะนำให้ผ่าตัด (ORIF) ยึดแผ่นเหล็กดามไหปลาร้าส่วนปลาย ร่วมกับผ่าตัดซ่อมแซมเอ็น CC หรือใส่เชือกยึด Suture button (TightRope)"
                }
              },
              "illustrationId": "/images/neer_clavicle/neer_2b.png",
              "xrayDescription": {
                "en": "Fracture between tuberosities with widened conoid interval and upward displacement of proximal clavicle.",
                "th": "รอยหักอยู่ระหว่างปุ่มกระดูก โดยระยะเอ็น Conoid ถ่างกว้างออกและกระดูกไหปลาร้าส่วนต้นยกลอยขึ้น"
              }
            },
            {
              "type": "Neer III",
              "name": {
                "en": "Neer Type III (Intra-articular AC Joint)",
                "th": "Neer Type III (หักเข้าข้อ AC - มั่นคง)"
              },
              "description": {
                "en": "Intra-articular fracture extending into the Acromioclavicular (AC) joint\nCC ligaments remain intact and attached to the proximal fragment\nFracture is STABLE without significant vertical displacement\nRisk of late post-traumatic AC joint osteoarthritis",
                "th": "รอยหักพาดผ่านเข้าข้อต่อ Acromioclavicular (AC joint)\nเส้นเอ็น CC สมบูรณ์และยึดติดกับกระดูกส่วนต้นดี\nรอยหักมีความมั่นคงสูง ไม่มีการยกลอย\nเสี่ยงต่อภาวะข้อต่อ AC เสื่อมหลังการบาดเจ็บในระยะยาว"
              },
              "moi": {
                "en": "Direct force transmitted through the acromion into the AC joint.",
                "th": "แรงกระแทกโดยตรงผ่าน Acromion ส่งผ่านเข้าข้อต่อ AC"
              },
              "treatment": {
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED INITIAL TREATMENT. Sling immobilization for 2-3 weeks for pain relief, followed by early mobilization. Symptomatic treatment.",
                  "th": "แนะนำให้รักษาแบบไม่ผ่าตัดเป็นอันดับแรก ใส่ Sling ดาม 2-3 สัปดาห์บรรเทาปวด แล้วเริ่มฝึกขยับข้อ"
                },
                "operative": {
                  "en": "Indicated for late symptomatic AC joint osteoarthritis. Managed with distal clavicle excision (Mumford procedure).",
                  "th": "ผ่าตัดเฉพาะกรณีเกิดภาวะข้อ AC เสื่อมและปวดเรื้อรังในระยะยาว โดยผ่าตัดตัดปลายกระดูกไหปลาร้า (Mumford procedure)"
                }
              },
              "illustrationId": "/images/neer_clavicle/neer_3.png",
              "xrayDescription": {
                "en": "Nondisplaced vertical or oblique fracture line extending into the distal articular facet of the AC joint.",
                "th": "รอยหักแนวตั้งหรือเฉียงพาดผ่านเข้าผิวข้อต่อ AC โดยไม่มีการเคลื่อนตัวของกระดูก"
              }
            },
            {
              "type": "Neer IV",
              "name": {
                "en": "Neer Type IV (Pediatric Physeal Disruption)",
                "th": "Neer Type IV (เยื่อหุ้มกระดูกหลุดในเด็ก/วัยรุ่น)"
              },
              "description": {
                "en": "Pediatric / Adolescent injury equivalent\nPeriosteal sleeve disruption where proximal fragment erupts superiorly through periosteum\nCC ligaments remain attached to the intact periosteal sleeve distally\nHigh remodeling potential in children",
                "th": "การบาดเจ็บในเด็กและวัยรุ่น (เยื่อหุ้มกระดูกหลุดฉีก)\nชิ้นกระดูกส่วนต้นหลุดดันทะลุเยื่อหุ้มกระดูก (Periosteal sleeve) ขึ้นด้านบน\nเอ็น CC ยังคงยึดติดกับเยื่อหุ้มกระดูกด้านล่างอย่างสมบูรณ์\nมีศักยภาพในการเชื่อมติดและจัดทรง (Remodeling) สูงมาก"
              },
              "moi": {
                "en": "Fall on the shoulder in skeletally immature patients (<18 years).",
                "th": "ล้มกระแทกไหล่ในผู้ป่วยเด็ก/วัยรุ่นที่กระดูกยังเจริญเติบโตไม่เต็มที่ (<18 ปี)"
              },
              "treatment": {
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED TREATMENT. Sling immobilization for 3-4 weeks. Excellent remodeling capacity usually restores alignment without surgery.",
                  "th": "แนะนำให้รักษาแบบไม่ผ่าตัดเป็นหลัก ใส่ Sling นาน 3-4 สัปดาห์ กระดูกเด็กจะสร้างปรับทรง (Remodeling) กลับมาสมบูรณ์ได้เอง"
                },
                "operative": {
                  "en": "Reserved only for severe skin tenting, open injuries, or failure of closed reduction.",
                  "th": "ผ่าตัดเฉพาะกรณีผิวดันดันหนังดึงรั้งมาก หรือเป็นแผลเปิด"
                }
              },
              "illustrationId": "/images/neer_clavicle/neer_4.png",
              "xrayDescription": {
                "en": "Proximal fragment displaced superiorly while distal end and CC ligaments remain in normal anatomical relation.",
                "th": "ชิ้นกระดูกส่วนต้นยกลอยขึ้นสูง ขณะที่ส่วนปลายและเอ็น CC ยังอยู่ในแนวทางกายวิภาคปกติ"
              }
            },
            {
              "type": "Neer V",
              "name": {
                "en": "Neer Type V (Comminuted with Avulsion Fragment)",
                "th": "Neer Type V (แตกละเอียดมีชิ้นล่างกะเทาะ - ไม่มั่นคง)"
              },
              "description": {
                "en": "Comminuted fracture pattern with a free inferior cortical fragment\nCC ligaments remain attached to the small inferior avulsion fragment\nProximal fragment is completely unattached to CC ligaments and displaces superiorly\nHighly UNSTABLE fracture pattern",
                "th": "รอยหักแบบแตกละเอียด โดยมีชิ้นกระดูกส่วนล่าง (Inferior fragment) กะเทาะหลุดออกเป็นอิสระ\nเอ็น CC ยังคงยึดติดอยู่กับชิ้นกระดูกเล็กๆ ส่วนล่างที่กะเทาะหลุดนี้\nชิ้นกระดูกส่วนต้นหลุดออกจากเอ็น CC สมบูรณ์และถูกดึงยกลอยขึ้นด้านบน\nเป็นรอยหักที่ไม่มั่นคงอย่างยิ่ง"
              },
              "moi": {
                "en": "High-energy direct impact to distal clavicle.",
                "th": "แรงกระแทกโดยตรงพลังงานสูงบริเวณไหปลาร้าส่วนปลาย"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "Not recommended. Very high nonunion rate due to interposition of fragments and loss of CC ligament continuity.",
                  "th": "ไม่แนะนำ อัตรากระดูกไม่ติดสูงมากเนื่องจากสูญเสียการยึดเกาะของเอ็น CC"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. ORIF with distal clavicle plate, incorporating the inferior fragment with lag screws or suture cerclage, combined with CC ligament augmentation.",
                  "th": "แนะนำให้ผ่าตัดรักษา (ORIF) ด้วยแผ่นเหล็กดามส่วนปลาย ร่วมกับการยึดชิ้นกระดูกล่างและเสริมความแข็งแรงของเอ็น CC"
                }
              },
              "illustrationId": "/images/neer_clavicle/neer_5.png",
              "xrayDescription": {
                "en": "Comminuted distal clavicle fracture with a distinct inferior comma-shaped cortical fragment holding the CC ligaments.",
                "th": "รอยหักแตกละเอียดที่ไหปลาร้าส่วนปลาย เห็นชิ้นกระดูกส่วนล่างรูปเครื่องหมายจุลภาคยึดติดกับเอ็น CC"
              }
            }
          ]
        }
      ]
    }
  ]
};
