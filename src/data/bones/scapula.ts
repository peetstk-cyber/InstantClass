import type { BoneData } from "../../types";

export const scapulaBone: BoneData = {
  "id": "scapula",
  "name": {
    "en": "Scapula",
    "th": "กระดูกสะบัก"
  },
  "description": {
    "en": "Shoulder blade and glenohumeral socket complex",
    "th": "กระดูกสะบัก และเบ้าข้อไหล่"
  },
  "pediatric": false,
  "regions": [
    {
      "id": "body",
      "name": {
        "en": "Scapular Body",
        "th": "ตัวกระดูกสะบัก (Scapular Body)"
      },
      "classifications": [
        {
          "system": "Anatomical Location",
          "fullName": {
            "en": "Anatomical Classification of Scapular Body Fractures",
            "th": "การจำแนกกระดูกสะบักส่วนลำตัวหักตามตำแหน่งทางกายวิภาค"
          },
          "description": {
            "en": "Classification of scapular body fractures based on anatomical location (Infraspinous Fossa, Scapular Spine, Medial/Lateral Border). Most body fractures (~90%) are non-displaced due to surrounding muscle splinting.",
            "th": "ระบบจำแนกกระดูกสะบักส่วนลำตัวหักตามตำแหน่งกายวิภาค (ลำตัว Fossa, สันสะบัก Spine, ขอบด้านใน/นอก) ส่วนใหญ่ (~90%) เป็นรอยหักไม่เคลื่อนตัวเนื่องจากมีกล้ามเนื้อหนาแน่นปกคลุมพยุง"
          },
          "investigations": [
            {
              "name": "AP & True Scapular Y-View Radiographs",
              "details": {
                "en": "Standard AP shoulder and true scapular Y-view. Evaluates fracture lines across the scapular body, spine, and medial/lateral borders.",
                "th": "ภาพเอกซเรย์ไหล่ท่า AP และ Scapular Y-view ใช้ประเมินรอยหักพาดผ่านลำตัวสะบัก สันสะบัก และขอบกระดูก"
              }
            },
            {
              "name": "3D CT Scan of Scapula and Thorax",
              "details": {
                "en": "High-resolution 3D CT scan. Gold standard to measure fracture displacement, rule out chest wall injuries (rib fractures / pneumothorax ~50%), and plan surgical approach.",
                "th": "เอกซเรย์คอมพิวเตอร์ (3D CT scan) เป็นมาตรฐานหลักในการวัดระยะเกยเคลื่อน และตรวจภาวะหักร่วมของซี่โครง/ลมรั่วในช่องอก (~50%)"
              }
            }
          ],
          "types": [
            {
              "type": "Body / Fossa",
              "name": {
                "en": "Scapular Body / Fossa Fracture",
                "th": "1. Body / Fossa Fracture (ลำตัวสะบักหัก - มั่นคง)"
              },
              "description": {
                "en": "Fracture involving the infraspinous or supraspinous fossa of the scapular body\nSplinted effectively by the infraspinatus and supraspinatus muscle bellies\nMinimal risk of displacement or nonunion\nExcellent outcomes with non-operative care",
                "th": "รอยหักบริเวณลำตัวกระดูกสะบัก (Infraspinous / Supraspinous fossa)\nถูกโอบอุ้มพยุงไว้อย่างแน่นหนาด้วยมัดกล้ามเนื้อ Infraspinatus และ Supraspinatus\nความเสี่ยงต่อการเคลื่อนตัวหรือกระดูกไม่ติดต่ำมาก\nผลการรักษาดีเยี่ยมโดยไม่ต้องผ่าตัด"
              },
              "moi": {
                "en": "Direct high-energy blunt trauma to the posterior chest wall.",
                "th": "แรงกระแทกโดยตรงพลังงานสูงเข้าที่ผนังอกด้านหลัง"
              },
              "treatment": {
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED TREATMENT. Simple arm sling for 2-3 weeks for pain control, followed by early active-assisted shoulder range of motion. Union rate >99%.",
                  "th": "แนะนำรักษาแบบไม่ผ่าตัด ใส่สายคล้องแขน (Sling) 2-3 สัปดาห์บรรเทาปวด แล้วเริ่มฝึกขยับข้อไหล่"
                },
                "operative": {
                  "en": "Rarely indicated unless severe displacement >2cm causing painful rib-cage grinding (scapulothoracic crepitus).",
                  "th": "ผ่าตัดเฉพาะกรณีเกยเคลื่อน >2 ซม. ทิ่มเสียดสีผนังซี่โครง"
                }
              },
              "illustrationId": "/images/scapula_body/body_fossa.png",
              "xrayDescription": {
                "en": "Comminuted or transverse fracture lines within the thin scapular blade with intact borders.",
                "th": "เห็นรอยหักบนแผ่นกระดูกสะบักโดยขอบกระดูกหลักยังคงต่อเนื่องกัน"
              }
            },
            {
              "type": "Scapular Spine",
              "name": {
                "en": "Scapular Spine Fracture",
                "th": "2. Scapular Spine Fracture (สันสะบักหัก)"
              },
              "description": {
                "en": "Fracture line involving the prominent subcutaneous dorsal scapular spine\nServes as insertion for deltoid and trapezius muscles\nMay lead to subacromial space narrowing if displaced inferiorly",
                "th": "รอยหักพาดผ่านสันสะบักด้านหลัง (Scapular spine)\nเป็นจุดเกาะของกล้ามเนื้อ Deltoid และ Trapezius\nอาจทำให้ช่องใต้ Acromion แคบลงหากกระดูกทรุดต่ำลง"
              },
              "moi": {
                "en": "Direct blow to the upper back or forced contraction of deltoid/trapezius.",
                "th": "แรงกระแทกตรงเข้าหลังส่วนบน หรือการหดเกร็งรุนแรงของกล้ามเนื้อไหล่"
              },
              "treatment": {
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED TREATMENT FOR NON-DISPLACED FRACTURES. Sling for 3-4 weeks with progressive shoulder motion.",
                  "th": "แนะนำรักษาแบบไม่ผ่าตัดในรอยหักไม่เคลื่อนตัว ใส่ Sling 3-4 สัปดาห์"
                },
                "operative": {
                  "en": "Indicated for displacement >1cm or inferior tilt causing shoulder impingement. ORIF with reconstruction plate.",
                  "th": "ผ่าตัดเฉพาะกรณีเคลื่อนตัว >1 ซม. หรือกดทับช่องใต้ Acromion"
                }
              },
              "illustrationId": "/images/scapula_body/spine.png",
              "xrayDescription": {
                "en": "Transverse or oblique fracture line crossing the dorsal scapular spine on Y-view.",
                "th": "เห็นรอยหักแนวขวางพาดผ่านสันสะบักด้านหลังชัดเจนในท่า Scapular Y-view"
              }
            },
            {
              "type": "Border / Angle",
              "name": {
                "en": "Scapular Border / Inferior Angle Fracture",
                "th": "3. Border / Inferior Angle Fracture (ขอบสะบัก / มุมล่างสะบักหัก)"
              },
              "description": {
                "en": "Fracture isolated to the thick lateral border, medial border, or inferior angle of the scapula\nThickened cortical margin provides good bone stock\nMaintains overall scapulothoracic alignment",
                "th": "รอยหักเฉพาะบริเวณขอบสะบักด้านนอก (Lateral border), ขอบด้านใน หรือมุมล่าง (Inferior angle)\nส่วนขอบกระดูกมีความหนาแน่นสูง (Good bone stock)\nคงรูปแนวทรงสะบักกับผนังอกได้ดี"
              },
              "moi": {
                "en": "Direct impact or muscle avulsion by latissimus dorsi / teres major.",
                "th": "แรงกระแทกตรงหรือแรงดึงกระชากของกล้ามเนื้อ Latissimus dorsi"
              },
              "treatment": {
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED TREATMENT. Arm sling immobilization for 2-3 weeks, followed by early mobilization.",
                  "th": "แนะนำรักษาแบบไม่ผ่าตัด ใส่สายคล้องแขน 2-3 สัปดาห์"
                },
                "operative": {
                  "en": "Indicated only if lateral border fragment is displaced >20mm or rotated >45°.",
                  "th": "ผ่าตัดเฉพาะกรณีขอบนอกเบี้ยวเคลื่อน >20 มม. หรือหมุนบิด >45 องศา"
                }
              },
              "illustrationId": "/images/scapula_body/border_angle.png",
              "xrayDescription": {
                "en": "Fracture line isolated to the lateral/medial cortical margin or inferior angle.",
                "th": "เห็นรอยหักเฉพาะบริเวณขอบกระดูกด้านนอก ด้านใน หรือมุมล่างของสะบัก"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "neck",
      "name": {
        "en": "Scapular Neck & Floating Shoulder",
        "th": "คอกระดูกสะบัก และภาวะ Floating Shoulder"
      },
      "classifications": [
        {
          "system": "Neck & Floating Shoulder",
          "fullName": {
            "en": "Scapular Neck Classification & Floating Shoulder Assessment",
            "th": "การจำแนกกระดูกคอสะบักหักและภาวะไหล่หลุดลอย Floating Shoulder"
          },
          "description": {
            "en": "Classification of scapular neck fractures (Anatomic vs Surgical neck) and mandatory assessment for associated ipsilateral clavicle fractures or AC joint separation, creating a 'Floating Shoulder' (double SSSC disruption).",
            "th": "การจำแนกกระดูกคอสะบักหัก (Anatomic vs Surgical Neck) และการตรวจหาภาวะหักร่วมของไหปลาร้าหรือข้อ AC หลุดฉีก ซึ่งทำให้เกิดภาวะไหล่หลุดลอย 'Floating Shoulder' (Superior Suspensory Shoulder Complex disruption)"
          },
          "investigations": [
            {
              "name": "AP Shoulder & Clavicle Radiographs",
              "details": {
                "en": "AP view of shoulder and clavicle. Crucial to evaluate neck displacement (>1cm), angulation (>40°), and check for ipsilateral clavicle fracture or AC joint disruption.",
                "th": "ภาพเอกซเรย์ไหล่และไหปลาร้าท่า AP สำคัญมากในการประเมินการเคลื่อนตัวของคอสะบัก และตรวจหาไหปลาร้าหักร่วม"
              }
            },
            {
              "name": "3D CT Reconstruction of Shoulder Girdle",
              "details": {
                "en": "3D CT scan. Gold standard to measure exact translation, Glenopolar Angle (GPA, normal 30-45°, <22° predicts poor outcome), and assess 3D structural stability of the floating shoulder.",
                "th": "เอกซเรย์คอมพิวเตอร์ 3D เป็นมาตรฐานหลักในการวัดมุม Glenopolar Angle (GPA ปกติ 30-45°, <22° บอกผลการรักษาไม่ดี) และประเมินความมั่นคง"
              }
            }
          ],
          "types": [
            {
              "type": "Isolated Neck",
              "name": {
                "en": "Isolated Scapular Neck Fracture (Stable SSSC)",
                "th": "1. Isolated Scapular Neck (คอสะบักหักเดี่ยว - มั่นคง)"
              },
              "description": {
                "en": "Fracture of the anatomical or surgical neck of the scapula with INTACT clavicle and AC/CC ligaments\nSingle disruption of the Superior Suspensory Shoulder Complex (SSSC)\nStable injury pattern with low risk of progressive displacement\nHigh success rate with conservative treatment",
                "th": "รอยหักบริเวณคอสะบัก (Anatomic หรือ Surgical neck) โดยกระดูกไหปลาร้าและเอ็น AC/CC ยังคง **สมบูรณ์ปกติ**\nเป็นการบาดเจ็บจุดเดียวของห่วงยึดไหล่ (SSSC)\nมีความมั่นคงสูง เสี่ยงต่อการทรุดเคลื่อนต่ำ\nผลการรักษาดีเยี่ยมโดยไม่ต้องผ่าตัด"
              },
              "moi": {
                "en": "Direct blow to the anterior or lateral shoulder.",
                "th": "แรงกระแทกตรงเข้าด้านหน้าหรือด้านข้างหัวไหล่"
              },
              "treatment": {
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED TREATMENT. Arm sling for 3-4 weeks, followed by progressive shoulder range of motion. Excellent clinical outcomes.",
                  "th": "แนะนำรักษาแบบไม่ผ่าตัด ใส่สายคล้องแขน 3-4 สัปดาห์ แล้วฝึกบริหารขยับข้อไหล่"
                },
                "operative": {
                  "en": "Indicated ONLY if severe displacement >1cm or glenopolar angle (GPA) <22°.",
                  "th": "ผ่าตัดเฉพาะกรณีเกยเคลื่อน >1 ซม. หรือมุม GPA <22 องศา"
                }
              },
              "illustrationId": "/images/scapula_neck/isolated_neck.png",
              "xrayDescription": {
                "en": "Fracture line across scapular neck with normal clavicle and intact AC joint.",
                "th": "เห็นรอยหักบริเวณคอสะบัก โดยกระดูกไหปลาร้าและข้อ AC ยังคงปกติสมบูรณ์"
              }
            },
            {
              "type": "Floating Shoulder",
              "name": {
                "en": "Floating Shoulder (Double SSSC Disruption)",
                "th": "2. Floating Shoulder (ภาวะไหล่หลุดลอย - หักร่วมไหปลาร้า/ข้อ AC หลุด)"
              },
              "description": {
                "en": "Combination of scapular neck fracture WITH ipsilateral clavicle fracture OR AC joint dislocation\nDOUBLE DISRUPTION of the Superior Suspensory Shoulder Complex (SSSC ring)\nCauses mechanical instability, inferior drooping, and muscular weakness of the shoulder girdle\nHigh risk of nonunion and cosmetic/functional impairment if untreated",
                "th": "การหักของคอสะบัก **ร่วมกับ** กระดูกไหปลาร้าหักฝั่งเดียวกัน หรือข้อ AC หลุดฉีก\nเกิดการบาดเจ็บ **สองจุดพร้อมกัน (Double SSSC Disruption)** ในห่วงยึดข้อไหล่\nทำให้เบ้าข้อไหล่หลุดลอย สูญเสียความมั่นคง ไหล่ตกและอ่อนแรง\nเสี่ยงสูงต่อกระดูกไม่ติดและความพิการหากไม่ได้รับการผ่าตัดยึดตรึง"
              },
              "moi": {
                "en": "High-energy violent trauma (motorcycle crash, fall from height).",
                "th": "อุบัติเหตุแรงกระแทกพลังงานสูงรุนแรง (รถจักรยานยนต์ชน, ตกจากที่สูง)"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "CONTRAINDICATED in active patients. Leads to severe shoulder drooping, malunion, and chronic pain.",
                  "th": "ไม่แนะนำ ทำให้ไหล่ตกทรุด กระดูกติดผิดรูป และปวดเรื้อรัง"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. Open reduction and internal fixation (ORIF) of the clavicle fracture (restores SSSC ring alignment), plus ORIF of scapular neck if residual displacement >1cm.",
                  "th": "แนะนำให้ผ่าตัดรักษา (ORIF) ผ่าตัดยึดแผ่นเหล็กกระดูกไหปลาร้าก่อนเพื่อคืนรูปวง SSSC และดามคอสะบักหากยังคงเคลื่อนตัว >1ซม."
                }
              },
              "illustrationId": "/images/scapula_neck/floating_shoulder.png",
              "xrayDescription": {
                "en": "Ipsilateral scapular neck fracture combined with displaced clavicle shaft fracture or Type III-V AC joint dislocation.",
                "th": "เห็นรอยหักคอสะบักร่วมกับกระดูกไหปลาร้าหักเกย หรือข้อ AC เคลื่อนหลุดในฝั่งเดียวกัน"
              }
            },
            {
              "type": "Displaced Surgical Neck",
              "name": {
                "en": "Displaced Surgical Neck Fracture (>1cm / >40°)",
                "th": "3. Displaced Surgical Neck (คอสะบักเคลื่อนตัวรุนแรง >1ซม. / >40°)"
              },
              "description": {
                "en": "Severe displacement of the surgical neck fragment (>10 mm translational displacement or >40° angulation)\nCauses significant alteration of glenohumeral biomechanics and rotator cuff lever arms\nHigh rate of functional impairment without stabilization",
                "th": "รอยหักคอสะบักเคลื่อนตัวรุนแรง (ระยะเคลื่อนเกย > 10 มม. หรือเอียงบิด > 40 องศา)\nทำให้ระบบกลไกการทำงานของข้อไหล่และแขนงกล้ามเนื้อ Rotator cuff ผิดรูป\nส่งผลให้การใช้งานข้อไหล่บกพร่องรุนแรงหากไม่ผ่าตัดจัดดาม"
              },
              "moi": {
                "en": "Direct high-energy impact to the anterior chest or shoulder.",
                "th": "แรงกระแทกตรงพลังงานสูงเข้าที่หน้าอกหรือหัวไหล่"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "Poor outcome due to severe mechanical dysfunction.",
                  "th": "ผลการรักษาไม่ดีเนื่องจากระบบกลไกข้อไหล่พังทลาย"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. ORIF of scapular neck via posterior Judet or modified Judet approach using anatomical locking plates.",
                  "th": "แนะนำผ่าตัด ORIF เปิดแผลด้านหลัง (Judet approach) ดามด้วยแผ่นเหล็กล็อค Anatomical Plate"
                }
              },
              "illustrationId": "/images/scapula_neck/displaced_neck.png",
              "xrayDescription": {
                "en": "Gross translational step-off >1cm or severe angulation >40° of the glenoid block relative to body.",
                "th": "เห็นชิ้นส่วนเบ้าข้อไหล่เกยเคลื่อน >1ซม. หรือเอียงบิด >40 องศาเมื่อเทียบกับตัวสะบัก"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "glenoid",
      "name": {
        "en": "Glenoid Articular Surface",
        "th": "แอ่งเบ้าข้อไหล่ (Glenoid Articular Surface)"
      },
      "classifications": [
        {
          "system": "Ideberg (Goss Modification)",
          "fullName": {
            "en": "Ideberg Glenoid Fracture Classification (with Goss Modification)",
            "th": "การจำแนกเบ้าข้อไหล่หักแบบ Ideberg (Goss Modification)"
          },
          "description": {
            "en": "Classic anatomical classification for intra-articular glenoid fractures (Types I-VI). Note: Literature reports low inter- and intra-observer reliability and questionable correlation with clinical management.",
            "th": "ระบบจำแนกเบ้าข้อไหล่หักเข้าข้อคลาสสิก (Type I - VI) *หมายเหตุ: มีความแม่นยำต่ำระหว่างผู้ประเมิน (Low inter-observer reliability) และยังเป็นที่ถกเถียงเรื่องความสัมพันธ์กับการเลือกผ่าตัด*"
          },
          "investigations": [
            {
              "name": "True AP (Grashey) & Axillary Shoulder Radiographs",
              "details": {
                "en": "True AP (Grashey view parallel to glenoid) and axillary lateral views. Essential to visualize articular step-off and rim avulsion fragments.",
                "th": "ภาพเอกซเรย์ไหล่ท่า Grashey (ขนานผิวข้อ) และท่า Axillary ประเมินรอยเหลื่อมผิวข้อและชิ้นกระดูกกะเทาะ"
              }
            },
            {
              "name": "3D CT Scan of Glenoid Cavity",
              "details": {
                "en": "Gold standard CT with 3D digital subtraction of humeral head. Accurately quantifies articular gap/step-off (>4mm) and glenoid rim defect percentage.",
                "th": "เอกซเรย์คอมพิวเตอร์ 3D (ลบภาพหัวกระดูกออก) เป็นมาตรฐานหลักในการวัดรอยอ้าผิวข้อ (>4มม.) และเปอร์เซ็นต์เบ้าหลุด"
              }
            }
          ],
          "types": [
            {
              "type": "Ideberg I",
              "name": {
                "en": "Ideberg Type I (Glenoid Rim Avulsion / Bankart Fracture)",
                "th": "Ideberg Type I (ขอบเบ้าข้อหักกะเทาะ - Rim Avulsion)"
              },
              "description": {
                "en": "Avulsion fracture of the glenoid rim\nIA: Anterior rim avulsion (Bankart fracture associated with anterior dislocation)\nIB: Posterior rim avulsion (associated with posterior dislocation)\nRisk of recurrent glenohumeral instability if >25% of rim involved",
                "th": "รอยหักกะเทาะบริเวณขอบเบ้าข้อไหล่\nIA: ขอบเบ้าด้านหน้าหักกะเทาะ (Bankart fracture ร่วมกับข้อไหล่หลุดไปด้านหน้า)\nIB: ขอบเบ้าด้านหลังหักกะเทาะ (ร่วมกับข้อไหล่หลุดไปด้านหลัง)\nเสี่ยงต่อภาวะข้อไหล่หลุดซ้ำหากชิ้นกระดูกใหญ่เกิน 25% ของเบ้าข้อ"
              },
              "moi": {
                "en": "Glenohumeral dislocation or direct force pushing humeral head against glenoid rim.",
                "th": "อุบัติเหตุข้อไหล่หลุดเคลื่อน หรือหัวกระดูกแทรกกระแทกขอบเบ้า"
              },
              "treatment": {
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED FOR SMALL FRAGMENTS (<20-25% glenoid surface) WITH REDUCED JOINT. Sling 3-4 weeks.",
                  "th": "แนะนำรักษาแบบไม่ผ่าตัดในชิ้นกระดูกเล็ก (<20-25%) ที่ข้อเข้าที่เรียบร้อย"
                },
                "operative": {
                  "en": "Indicated if fragment >25% of articular surface or persistent subluxation. Arthroscopic or open suture anchor / screw fixation.",
                  "th": "ผ่าตัดเฉพาะชิ้นกระดูกใหญ่ >25% หรือข้อไหล่ยังคงหลวมหลุด ยึดด้วย Suture Anchor หรือสกรู"
                }
              },
              "illustrationId": "/images/glenoid_ideberg/ideberg_1.png",
              "xrayDescription": {
                "en": "Avulsion fragment off anterior (IA) or posterior (IB) glenoid rim on axillary view.",
                "th": "เห็นชิ้นกระดูกกะเทาะออกจากขอบเบ้าด้านหน้า (IA) หรือด้านหลัง (IB) ในท่า Axillary"
              }
            },
            {
              "type": "Ideberg II",
              "name": {
                "en": "Ideberg Type II (Inferior Transverse / Oblique Exiting Inferiorly)",
                "th": "Ideberg Type II (หักเฉียงเบ้าล่างทะลุขอบนอก - Inferior Transverse)"
              },
              "description": {
                "en": "Transverse or oblique intra-articular fracture through the glenoid fossa exiting inferiorly through the lateral scapular border\nHumeral head may subluxate inferiorly with the fragment",
                "th": "รอยหักเข้าข้อแนวขวางหรือเฉียงพาดผ่านเบ้าข้อไหล่ ทะลุออกทางด้านล่างของขอบสะบักด้านนอก (Lateral border)\nหัวกระดูกแขนอาจเคลื่อนหลุดลงล่างตามชิ้นกระดูก"
              },
              "moi": {
                "en": "Direct lateral impact on the shoulder driving humeral head into glenoid fossa.",
                "th": "แรงกระแทกตรงเข้าด้านข้างไหล่ดันหัวกระดูกกระแทกเบ้า"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "Indicated ONLY if non-displaced (<2mm gap/step).",
                  "th": "พิจารณาเฉพาะกรณีไม่เคลื่อนตัว (<2มม.)"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT FOR DISPLACEMENT >4mm. ORIF with cannulated screws or plate via posterior approach.",
                  "th": "แนะนำผ่าตัด ORIF เมื่อผิวข้อเหลื่อม >4มม. ยึดด้วยสกรูจมหรือแผ่นเหล็ก"
                }
              },
              "illustrationId": "/images/glenoid_ideberg/ideberg_2.png",
              "xrayDescription": {
                "en": "Transverse fracture line across lower glenoid exiting lateral scapular border.",
                "th": "เห็นรอยหักแนวขวางพาดผ่านเบ้าข้อช่วงล่าง ทะลุออกขอบสะบักด้านนอก"
              }
            },
            {
              "type": "Ideberg III",
              "name": {
                "en": "Ideberg Type III (Superior Glenoid + Coracoid Base)",
                "th": "Ideberg Type III (หักเบ้าส่วนบนพาดออกจะงอย coracoid)"
              },
              "description": {
                "en": "Fracture of the superior glenoid surface exiting superiorly through the scapular spine or coracoid notch\nOften associated with coracoid fracture, AC joint disruption, or clavicle fracture",
                "th": "รอยหักพาดผ่านผิวข้อเบ้าส่วนบน ทะลุออกด้านบนทางรอยหวำ Coracoid notch หรือสันสะบัก\nมักพบร่วมกับจะงอยกระดูก Coracoid หัก, ข้อ AC หลุด หรือไหปลาร้าหัก"
              },
              "moi": {
                "en": "Superiorly directed force on the acromion/humeral head.",
                "th": "แรงอัดกระแทกชี้ขึ้นด้านบนเข้าที่หัวกระดูกและเบ้าส่วนบน"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "Indicated ONLY if non-displaced.",
                  "th": "พิจารณาเฉพาะกรณีไม่เคลื่อนตัว"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT FOR DISPLACEMENT >4mm. ORIF with superior locking plate or screws.",
                  "th": "แนะนำผ่าตัด ORIF ยึดสกรูหรือแผ่นเหล็กเมื่อผิวข้อเหลื่อม >4มม."
                }
              },
              "illustrationId": "/images/glenoid_ideberg/ideberg_3.png",
              "xrayDescription": {
                "en": "Oblique fracture line crossing superior glenoid fossa exiting at base of coracoid.",
                "th": "เห็นรอยหักเฉียงพาดผ่านเบ้าส่วนบน ทะลุออกโคนจะงอยกระดูก Coracoid"
              }
            },
            {
              "type": "Ideberg IV",
              "name": {
                "en": "Ideberg Type IV (Transverse Body Split to Medial Border)",
                "th": "Ideberg Type IV (หักขวางทะลุผ่านขอบสะบักด้านใน - Medial Border)"
              },
              "description": {
                "en": "Horizontal fracture extending across the entire glenoid fossa and scapular body, exiting at the medial scapular border\nSplits the scapula into superior and inferior halves",
                "th": "รอยหักแนวนอนพาดผ่านเบ้าข้อไหล่และตัวสะบักทั้งหมด ทะลุออกขอบสะบักด้านใน (Medial border)\nตัดแยกกระดูกสะบักออกเป็นครึ่งบนและครึ่งล่าง"
              },
              "moi": {
                "en": "Severe high-energy lateral compression force across shoulder.",
                "th": "แรงอัดกระแทกด้านข้างพลังงานสูงรุนแรงพาดผ่านข้อไหล่"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "Indicated ONLY if non-displaced.",
                  "th": "พิจารณาเฉพาะกรณีไม่เคลื่อนตัว"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. ORIF via posterior approach using long reconstruction locking plates.",
                  "th": "แนะนำผ่าตัด ORIF เปิดแผลด้านหลังดามแผ่นเหล็กยาว"
                }
              },
              "illustrationId": "/images/glenoid_ideberg/ideberg_4.png",
              "xrayDescription": {
                "en": "Horizontal fracture line spanning from glenoid cavity to medial scapular border.",
                "th": "เห็นรอยหักแนวนอนพาดจากแอ่งเบ้าข้อทะลุไปถึงขอบสะบักด้านใน"
              }
            },
            {
              "type": "Ideberg V",
              "name": {
                "en": "Ideberg Type V (Combination of Type IV + II/III)",
                "th": "Ideberg Type V (หักผสม - Combination Type IV + II/III)"
              },
              "description": {
                "en": "Combination of a Type IV horizontal body fracture with a Type II or Type III intra-articular glenoid line\nComplex comminuted articular fracture pattern",
                "th": "รอยหักรูปแบบผสม ระหว่างรอยหักขวางตัวสะบัก (Type IV) ร่วมกับรอยหักเข้าข้อ Type II หรือ III\nเป็นรอยหักเข้าข้อที่แตกป่นซับซ้อน"
              },
              "moi": {
                "en": "Extreme high-energy direct trauma.",
                "th": "อุบัติเหตุแรงกระแทกตรงพลังงานสูงรุนแรงสุดขีด"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "CONTRAINDICATED.",
                  "th": "ห้ามใช้การรักษาด้วยวิธีนี้"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. Meticulous ORIF with dual plating or primary arthroplasty.",
                  "th": "แนะนำผ่าตัด ORIF จัดดามแผ่นเหล็กสองทางอย่างประณีต"
                }
              },
              "illustrationId": "/images/glenoid_ideberg/ideberg_5.png",
              "xrayDescription": {
                "en": "Combination horizontal body line and secondary intra-articular glenoid lines.",
                "th": "เห็นรอยหักขวางลำตัวร่วมกับเส้นรอยหักแตกเข้าเบ้าข้อหลายเส้น"
              }
            },
            {
              "type": "Ideberg VI",
              "name": {
                "en": "Ideberg Type VI (Severe Comminuted Glenoid Cavity)",
                "th": "Ideberg Type VI (เบ้าข้อแตกละเอียดป่น - Comminuted Glenoid)"
              },
              "description": {
                "en": "Severe comminution of the glenoid fossa with multiple articular fragments\nComplete destruction of glenoid concavity and stability",
                "th": "รอยหักแตกละเอียดป่นของแอ่งเบ้าข้อไหล่ มีชิ้นกระดูกแตกเข้าข้อจำนวนมาก\nสูญเสียส่วนโค้งเว้าและความมั่นคงของเบ้าข้อไหล่สมบูรณ์"
              },
              "moi": {
                "en": "Severe high-energy crush or gunshot wound.",
                "th": "อุบัติเหตุแรงทับบดพลังงานสูงรุนแรง หรือแผลกระสุนปืน"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "CONTRAINDICATED.",
                  "th": "ห้ามใช้การรักษาด้วยวิธีนี้"
                },
                "operative": {
                  "en": "RECOMMENDED SURGICAL OPTIONS. ORIF with micro-plates/screws or primary Reverse Total Shoulder Arthrodesis/Arthroplasty.",
                  "th": "แนะนำผ่าตัด ORIF ดามแผ่นเหล็กจิ๋ว หรือผ่าตัดใส่ข้อไหล่เทียมชนิดผันกลับ (Reverse TSA)"
                }
              },
              "illustrationId": "/images/glenoid_ideberg/ideberg_6.png",
              "xrayDescription": {
                "en": "Gross comminution and fragmentation of the entire glenoid articular surface.",
                "th": "เห็นแอ่งเบ้าข้อไหล่แตกป่นกระจายหลายชิ้นส่วนสมบูรณ์"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "acromion",
      "name": {
        "en": "Acromion Process",
        "th": "ยอดกระดูกสะบัก (Acromion)"
      },
      "classifications": [
        {
          "system": "Kuhn",
          "fullName": {
            "en": "Kuhn Classification for Acromial Fractures",
            "th": "การจำแนกยอดกระดูกสะบักหักแบบ Kuhn"
          },
          "description": {
            "en": "Classification of acromial fractures based on displacement, subacromial space reduction, and rotator cuff impingement.",
            "th": "ระบบจำแนกยอดกระดูกสะบัก (Acromion) หักตามการเคลื่อนตัว การแคบลงของช่องใต้ Acromion (Subacromial space) และการกดทับเอ็นหมุนข้อไหล่"
          },
          "investigations": [
            {
              "name": "Axillary Lateral Shoulder View",
              "details": {
                "en": "True axillary lateral view. Measures displacement (>2mm) of the acromion fragment, superior/inferior tilt, and subacromial space clearance.",
                "th": "ภาพเอกซเรย์ท่ารักแร้ (Axillary) ใช้ประเมินระยะเกยเคลื่อน (>2มม.) การเอียงต่ำลง และระยะห่างช่องใต้ Acromion"
              }
            },
            {
              "name": "Scapular Y-View (Transscapular)",
              "details": {
                "en": "Transscapular lateral projection. Essential to assess posterior displacement of the acromion process relative to the scapular spine.",
                "th": "ภาพเอกซเรย์สะบักท่าด้านข้าง (Scapular Y-view) เพื่อประเมินการเคลื่อนหลุดไปด้านหลังของชิ้นกระดูก Acromion"
              }
            }
          ],
          "types": [
            {
              "type": "Kuhn Type I",
              "name": {
                "en": "Kuhn Type I (Minimally Displaced / No Impingement)",
                "th": "Kuhn Type I (ไม่เคลื่อนตัว/เคลื่อนน้อย - ช่องใต้ Acromion ปกติ)"
              },
              "description": {
                "en": "Minimally displaced fracture of the acromion (<2 mm displacement)\nNo inferior tilt or reduction of the subacromial space\nRotator cuff tendon clearance is fully preserved\nHigh success rate with non-operative care",
                "th": "รอยหักยอดกระดูกสะบักไม่เคลื่อนตัว หรือเคลื่อนตัวน้อยมาก (< 2 มม.)\nไม่มีการเอียงกดต่ำลง และช่องใต้ Acromion (Subacromial space) ยังกว้างปกติ\nเอ็นหมุนข้อไหล่ Rotator cuff ไม่ถูกกดทับ\nผลการรักษาดีเยี่ยมโดยไม่ต้องผ่าตัด"
              },
              "moi": {
                "en": "Direct impact to the top of the shoulder.",
                "th": "แรงกระแทกตรงเข้าที่ยอดไหล่ด้านบน"
              },
              "treatment": {
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED TREATMENT. Arm sling for 3-4 weeks for comfort, followed by active shoulder range of motion. Union rate >98%.",
                  "th": "แนะนำรักษาแบบไม่ผ่าตัด ใส่สายคล้องแขน 3-4 สัปดาห์ แล้วฝึกขยับข้อไหล่"
                },
                "operative": {
                  "en": "Not indicated.",
                  "th": "ไม่มีข้อบ่งชี้ในการผ่าตัด"
                }
              },
              "illustrationId": "/images/acromion_kuhn/kuhn_1.png",
              "xrayDescription": {
                "en": "Nondisplaced fracture line across acromion process with normal subacromial height.",
                "th": "เห็นรอยหักข้ามยอด Acromion โดยระยะความสูงช่องใต้ Acromion ยังปกติ"
              }
            },
            {
              "type": "Kuhn Type II",
              "name": {
                "en": "Kuhn Type II (Displaced WITHOUT Subacromial Impingement)",
                "th": "Kuhn Type II (เคลื่อนตัว >2มม. แต่ไม่กดทับช่องใต้ Acromion)"
              },
              "description": {
                "en": "Displaced acromial fracture (>2 mm displacement)\nDisplaced superiorly or laterally WITHOUT inferior tilt into subacromial space\nNo mechanical impingement on the rotator cuff tendons",
                "th": "รอยหักยอดกระดูกสะบักเคลื่อนตัว (> 2 มม.)\nเคลื่อนเบี่ยงไปด้านบนหรือด้านข้าง โดย **ไม่อียงกดต่ำลง** ในช่องใต้ Acromion\nไม่มีการกดทับเอ็นหมุนข้อไหล่ Rotator cuff"
              },
              "moi": {
                "en": "Direct impact or violent deltoid contraction.",
                "th": "แรงกระแทกตรง หรือการดึงกระชากของกล้ามเนื้อ Deltoid"
              },
              "treatment": {
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED INITIAL TREATMENT. Sling immobilization for 3-4 weeks. Operative treatment reserved for painful nonunion.",
                  "th": "แนะนำรักษาแบบไม่ผ่าตัดเป็นหลัก ใส่ Sling 3-4 สัปดาห์ ผ่าตัดเฉพาะกรณีปวดจากกระดูกไม่ติด"
                },
                "operative": {
                  "en": "Indicated for symptomatic nonunion or high-demand overhead athletes. Tension-band wiring or plate fixation.",
                  "th": "ผ่าตัดในผู้ป่วยที่ปวดกระดูกไม่ติด หรือนักกีฬาใช้แขนเหนือศีรษะ ดามด้วย Tension-band wiring หรือแผ่นเหล็ก"
                }
              },
              "illustrationId": "/images/acromion_kuhn/kuhn_2.png",
              "xrayDescription": {
                "en": "Displaced acromial fracture >2mm without inferior tilt into subacromial space.",
                "th": "เห็นรอยหักเคลื่อนตัว >2มม. โดยชิ้นกระดูกไม่เอียงกดลงล่าง"
              }
            },
            {
              "type": "Kuhn Type III",
              "name": {
                "en": "Kuhn Type III (Displaced WITH Subacromial Impingement)",
                "th": "Kuhn Type III (เคลื่อนตัวเอียงกดต่ำ - กดทับเอ็นหมุนข้อไหล่)"
              },
              "description": {
                "en": "Displaced acromial fracture WITH INFERIOR TILT reducing subacromial space height\nMechanical impingement and compression on the rotator cuff tendons (supraspinatus)\nHigh risk of chronic rotator cuff tears and painful abduction weakness if uncorrected",
                "th": "รอยหักยอดกระดูกสะบักเคลื่อนตัว **พร้อมกับเอียงกดต่ำลงล่าง (Inferior tilt)** ทำให้ช่องใต้ Acromion แคบลงรุนแรง\nกดทับและเสียดสีเอ็นหมุนข้อไหล่ (Supraspinatus tendon) โดยตรง\nเสี่ยงสูงต่อภาวะเอ็นไหล่ขาดเรื้อรังและไหล่อ่อนแรงหากไม่ได้รับการผ่าตัดยกดาม"
              },
              "moi": {
                "en": "Direct blow onto superior acromion driving fragment downward into subacromial space.",
                "th": "แรงกระแทกตรงจากด้านบนกดสับยอด Acromion ยุบต่ำลงล่าง"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "CONTRAINDICATED. Causes chronic rotator cuff tear and painful loss of abduction.",
                  "th": "ไม่แนะนำ ทำให้เอ็นไหล่ขาดเรื้อรังและกางแขนไม่ได้"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT (GOLD STANDARD). Open reduction and internal fixation (ORIF) with tension-band wiring or anatomical acromial locking plate to restore subacromial height.",
                  "th": "แนะนำผ่าตัดมาตรฐานหลัก (Gold Standard ORIF) ดึงยกชิ้นกระดูกกลับเข้าที่ แล้วดามด้วย Tension-band wiring หรือแผ่นเหล็กล็อค"
                }
              },
              "illustrationId": "/images/acromion_kuhn/kuhn_3.png",
              "xrayDescription": {
                "en": "Inferiorly tilted acromial fragment narrowing subacromial space height (<6mm).",
                "th": "เห็นชิ้นกระดูก Acromion เอียงกดต่ำลง ทำให้ระยะช่องใต้ Acromion แคบลงมาก (<6มม.)"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "coracoid",
      "name": {
        "en": "Coracoid Process",
        "th": "จะงอยกระดูกสะบัก (Coracoid Process)"
      },
      "classifications": [
        {
          "system": "Ogawa",
          "fullName": {
            "en": "Ogawa Classification for Coracoid Fractures",
            "th": "การจำแนกจะงอยกระดูกสะบักหักแบบ Ogawa"
          },
          "description": {
            "en": "Classification of coracoid process fractures based on fracture line location relative to the Coracoclavicular (CC) ligaments (conoideum and trapezoideum), dictating structural instability and surgical decision making.",
            "th": "ระบบจำแนกจะงอยกระดูกสะบัก (Coracoid) หักตามตำแหน่งรอยหักเมื่อเทียบกับจุดเกาะของเอ็น Coracoclavicular (CC) ซึ่งบอกถึงความมั่นคงเชิงโครงสร้างและการผ่าตัด"
          },
          "investigations": [
            {
              "name": "Stryker Notch View Radiograph",
              "details": {
                "en": "Special Stryker notch view (AP with 10° cephalic tilt and hand behind head). Best projection to visualize coracoid base and tip fractures without overlap.",
                "th": "ภาพเอกซเรย์ท่าพิเศษ Stryker Notch View เป็นท่าที่ดีที่สุดในการเห็นโคนและปลายจะงอย Coracoid โดยไม่ถูกกระดูกอื่นบัง"
              }
            },
            {
              "name": "3D CT Scan of Shoulder",
              "details": {
                "en": "3D CT scan. Gold standard to confirm Ogawa Type I vs Type II location and check CC ligament avulsion.",
                "th": "เอกซเรย์คอมพิวเตอร์ 3D เป็นมาตรฐานหลักในการแยกชนิด Ogawa Type I และ Type II"
              }
            }
          ],
          "types": [
            {
              "type": "Ogawa Type I",
              "name": {
                "en": "Ogawa Type I (Proximal / Posterior to CC Ligaments - UNSTABLE)",
                "th": "Ogawa Type I (หักส่วนโคนหลังต่อเอ็น CC - ไม่มั่นคง)"
              },
              "description": {
                "en": "Fracture located PROXIMAL (posterior) to the attachment of the Coracoclavicular (CC) ligaments\nIncludes coracoid base fractures and extension into superior glenoid rim\nUNSTABLE pattern because the CC ligaments remain attached to the mobile distal coracoid fragment\nDisrupts the Superior Suspensory Shoulder Complex (SSSC)",
                "th": "รอยหักอยู่ **ส่วนโคน (ด้านหลัง)** ต่อจุดเกาะของเส้นเอ็น Coracoclavicular (CC)\nรวมถึงรอยหักบริเวณโคนจะงอยกระดูกและลุกลามเข้าขอบบนเบ้าข้อไหล่\n**ไม่มั่นคง (Unstable)** เนื่องจากเอ็น CC ยังคงยึดติดอยู่กับชิ้นกระดูกส่วนปลายที่หลุดลอย\nทำลายความมั่นคงของห่วงยึดข้อไหล่ (SSSC ring)"
              },
              "moi": {
                "en": "High-energy direct blow or sudden violent contraction of conjoint tendon / pectoralis minor.",
                "th": "แรงกระแทกตรงพลังงานสูง หรือการดึงกระชากรุนแรงของกล้ามเนื้อ Conjoint tendon"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "High nonunion rate and persistent shoulder instability.",
                  "th": "อัตรากระดูกไม่ติดสูง และข้อไหล่หลุดหลวมเรื้อรัง"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. Open reduction and internal fixation (ORIF) with a 3.5mm/4.0mm cannulated screw placed down the axis of the coracoid into the scapular neck.",
                  "th": "แนะนำผ่าตัด ORIF ขันสกรู Cannulated screw ยึดตามแนวแกนจะงอย Coracoid เข้าสู่คอสะบัก"
                }
              },
              "illustrationId": "/images/coracoid_ogawa/ogawa_1.png",
              "xrayDescription": {
                "en": "Fracture line proximal to CC ligament insertion at coracoid base with displacement.",
                "th": "เห็นรอยหักอยู่ด้านหลังต่อจุดเกาะเอ็น CC บริเวณโคนจะงอยกระดูกเคลื่อนตัว"
              }
            },
            {
              "type": "Ogawa Type II",
              "name": {
                "en": "Ogawa Type II (Distal / Anterior to CC Ligaments - STABLE)",
                "th": "Ogawa Type II (หักส่วนปลายหน้าต่อเอ็น CC - มั่นคง)"
              },
              "description": {
                "en": "Fracture located DISTAL (anterior) to the attachment of the Coracoclavicular (CC) ligaments\nInvolves the tip of the coracoid process only\nSTABLE pattern because the CC ligaments remain attached to the intact proximal scapular base\nLow risk of nonunion or shoulder instability",
                "th": "รอยหักอยู่ **ส่วนปลาย (ด้านหน้า)** ต่อจุดเกาะของเส้นเอ็น Coracoclavicular (CC)\nเป็นรอยหักเฉพาะส่วนปลายแหลมของจะงอย Coracoid\n**มีความมั่นคง (Stable)** เนื่องจากเอ็น CC ยังคงยึดติดอยู่กับโคนกระดูกสะบักที่สมบูรณ์\nความเสี่ยงต่อกระดูกไม่ติดหรือไหล่หลุดหลวมต่ำมาก"
              },
              "moi": {
                "en": "Avulsion by the conjoint tendon (short head biceps and coracobrachialis).",
                "th": "แรงดึงกระชากหลุดของกล้ามเนื้อ Conjoint tendon ขณะงอแขนสวนทาง"
              },
              "treatment": {
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED TREATMENT. Simple arm sling for 2-3 weeks for comfort, followed by progressive shoulder motion. Excellent prognosis (>98% union).",
                  "th": "แนะนำรักษาแบบไม่ผ่าตัด ใส่สายคล้องแขน 2-3 สัปดาห์บรรเทาปวด แล้วฝึกขยับข้อไหล่"
                },
                "operative": {
                  "en": "Indicated only in high-level athletes with painful displacement >1cm. ORIF or excision of small tip fragment.",
                  "th": "ผ่าตัดเฉพาะนักกีฬารับแรงสูงที่ชิ้นกระดูกอ้าเคลื่อน >1ซม. โดยยึดสกรูหรือตัดชิ้นปลายออก"
                }
              },
              "illustrationId": "/images/coracoid_ogawa/ogawa_2.png",
              "xrayDescription": {
                "en": "Small avulsion fracture line at the anterior coracoid tip with intact coracoid base.",
                "th": "เห็นรอยหักกะเทาะเล็กๆ ตรงปลายแหลมจะงอย Coracoid โดยโคนกระดูกยังสมบูรณ์ดี"
              }
            }
          ]
        },
        {
          "system": "Eyres",
          "fullName": {
            "en": "Eyres Classification for Coracoid Fractures",
            "th": "การจำแนกจะงอยกระดูกสะบักหักแบบ Eyres"
          },
          "description": {
            "en": "Anatomical level classification for coracoid fractures (Types I-V) based on propagation from coracoid tip to base, glenoid cavity, and scapular body.",
            "th": "ระบบจำแนกจะงอยกระดูกสะบักหัก 5 ระดับ (Type I - V) ตามการลุกลามจากปลายจะงอย โคนจะงอย เข้าแอ่งเบ้าข้อไหล่ หรือพาดเข้าตัวกระดูกสะบัก"
          },
          "investigations": [
            {
              "name": "Stryker Notch View Radiograph",
              "details": {
                "en": "Special Stryker notch AP projection (10° cephalic tilt). Visualizes the coracoid process base and tip free of clavicular overlap.",
                "th": "ภาพเอกซเรย์ท่าพิเศษ Stryker Notch View เห็นโคนและปลายจะงอย Coracoid ชัดเจนโดยไม่ถูกกระดูกอื่นบัง"
              }
            },
            {
              "name": "3D CT Reconstruction of Shoulder",
              "details": {
                "en": "Multiplanar 3D CT scan. Gold standard to assign Eyres Types I-V based on extension into glenoid cavity or scapular body.",
                "th": "เอกซเรย์คอมพิวเตอร์ 3D เป็นมาตรฐานหลักในการแบ่งชนิด Eyres Types I-V ตามการลุกลามเข้าเบ้าไหล่หรือตัวสะบัก"
              }
            }
          ],
          "types": [
            {
              "type": "Eyres I",
              "name": {
                "en": "Eyres Type I (Coracoid Tip Avulsion)",
                "th": "Eyres Type I (ปลายจะงอยหักกะเทาะ)"
              },
              "description": {
                "en": "Avulsion fracture of the apical tip of coracoid process\nDistal to CC ligaments\nStable injury",
                "th": "รอยหักกะเทาะบริเวณปลายแหลมสุดของจะงอย Coracoid อยู่ด้านหน้าต่อเอ็น CC มีความมั่นคง"
              },
              "moi": {
                "en": "Conjoint tendon avulsion.",
                "th": "แรงดึงกระชากของกล้ามเนื้อ Conjoint tendon"
              },
              "treatment": {
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED. Arm sling for 2-3 weeks.",
                  "th": "แนะนำใส่สายคล้องแขน 2-3 สัปดาห์"
                },
                "operative": {
                  "en": "Excision or screw if symptomatic.",
                  "th": "ผ่าตัดเฉพาะเมื่อมีอาการ"
                }
              },
              "illustrationId": "/images/coracoid_ogawa/eyres_1.png",
              "xrayDescription": {
                "en": "Avulsion of tip of coracoid.",
                "th": "ชิ้นกระดูกกะเทาะตรงปลายจะงอย Coracoid"
              }
            },
            {
              "type": "Eyres II",
              "name": {
                "en": "Eyres Type II (Mid-Coracoid Body)",
                "th": "Eyres Type II (ลำตัวจะงอยหัก)"
              },
              "description": {
                "en": "Fracture through the central body of coracoid process\nCC ligaments partially involved",
                "th": "รอยหักพาดผ่านส่วนกลางลำตัวจะงอย Coracoid"
              },
              "moi": {
                "en": "Direct impact.",
                "th": "แรงกระแทกตรง"
              },
              "treatment": {
                "preferred": "conservative",
                "conservative": {
                  "en": "Sling 3-4 weeks if non-displaced.",
                  "th": "ใส่ Sling 3-4 สัปดาห์หากไม่เคลื่อนตัว"
                },
                "operative": {
                  "en": "ORIF if displaced >1cm.",
                  "th": "ผ่าตัด ORIF หากเคลื่อน >1ซม."
                }
              },
              "illustrationId": "/images/coracoid_ogawa/eyres_2.png",
              "xrayDescription": {
                "en": "Transverse line across coracoid body.",
                "th": "รอยหักขวางลำตัวจะงอย Coracoid"
              }
            },
            {
              "type": "Eyres III",
              "name": {
                "en": "Eyres Type III (Coracoid Base)",
                "th": "Eyres Type III (โคนจะงอยหัก)"
              },
              "description": {
                "en": "Fracture at the base of coracoid process proximal to CC ligaments\nUnstable pattern",
                "th": "รอยหักบริเวณโคนจะงอย Coracoid ด้านหลังต่อเอ็น CC ไม่มั่นคง"
              },
              "moi": {
                "en": "High energy trauma.",
                "th": "อุบัติเหตุพลังงานสูง"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "High nonunion risk.",
                  "th": "เสี่ยงกระดูกไม่ติดสูง"
                },
                "operative": {
                  "en": "RECOMMENDED. ORIF with cannulated screw.",
                  "th": "แนะนำผ่าตัด ORIF ยึดสกรู"
                }
              },
              "illustrationId": "/images/coracoid_ogawa/eyres_3.png",
              "xrayDescription": {
                "en": "Fracture at coracoid base.",
                "th": "รอยหักบริเวณโคนจะงอย Coracoid"
              }
            },
            {
              "type": "Eyres IV",
              "name": {
                "en": "Eyres Type IV (Coracoid Base + Superior Glenoid)",
                "th": "Eyres Type IV (โคนจะงอยหักพาดเข้าเบ้าข้อไหล่)"
              },
              "description": {
                "en": "Coracoid base fracture extending into superior glenoid fossa\nIntra-articular involvement",
                "th": "รอยหักโคนจะงอย Coracoid ลุกลามพาดเข้าผิวข้อเบ้าไหล่ส่วนบน"
              },
              "moi": {
                "en": "Superior force vector.",
                "th": "แรงอัดดันขึ้นด้านบน"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "CONTRAINDICATED.",
                  "th": "ห้ามใช้การรักษาด้วยวิธีนี้"
                },
                "operative": {
                  "en": "RECOMMENDED. ORIF with screw/plate.",
                  "th": "แนะนำผ่าตัด ORIF ยึดสกรู/แผ่นเหล็ก"
                }
              },
              "illustrationId": "/images/coracoid_ogawa/eyres_4.png",
              "xrayDescription": {
                "en": "Coracoid base fracture extending into glenoid rim.",
                "th": "รอยหักโคนจะงอยพาดเข้าขอบเบ้าข้อไหล่"
              }
            },
            {
              "type": "Eyres V",
              "name": {
                "en": "Eyres Type V (Coracoid Base + Scapular Body)",
                "th": "Eyres Type V (โคนจะงอยหักพาดเข้าตัวกระดูกสะบัก)"
              },
              "description": {
                "en": "Coracoid base fracture extending into main scapular body/spine",
                "th": "รอยหักโคนจะงอย Coracoid ลุกลามพาดเข้าลำตัวกระดูกสะบัก"
              },
              "moi": {
                "en": "Severe crush trauma.",
                "th": "อุบัติเหตุแรงอัดทับบดรุนแรง"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "Poor outcome.",
                  "th": "ผลการรักษาไม่ดี"
                },
                "operative": {
                  "en": "RECOMMENDED. ORIF with reconstruction plate.",
                  "th": "แนะนำผ่าตัด ORIF ดามแผ่นเหล็ก"
                }
              },
              "illustrationId": "/images/coracoid_ogawa/eyres_5.png",
              "xrayDescription": {
                "en": "Coracoid base line extending into scapular blade.",
                "th": "รอยหักโคนจะงอยลุกลามเข้าแผ่นกระดูกสะบัก"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "scapulothoracic-dissociation",
      "name": {
        "en": "Scapulothoracic Dissociation",
        "th": "ภาวะข้อสะบักกับผนังอกหลุดฉีก (Scapulothoracic Dissociation)"
      },
      "classifications": [
        {
          "system": "Zelle / Damschen",
          "fullName": {
            "en": "Scapulothoracic Dissociation Classification (Zelle/Damschen)",
            "th": "การจำแนกภาวะสะบักกับผนังอกหลุดฉีก (Scapulothoracic Dissociation)"
          },
          "description": {
            "en": "Classification of traumatic internal amputation of the shoulder girdle from violent traction/crush injury, categorized by neurovascular disruption severity (Type I Musculoskeletal only, Type II Neurological injury, Type III Vascular transection).",
            "th": "ระบบจำแนกภาวะแขนหลุดลอยภายใน (Internal Amputation) จากแรงดึงรั้งพลังงานสูงรุนแรง แบ่งตามความรุนแรงของเส้นประสาทและหลอดเลือด (Type I กระดูก/กล้ามเนื้ออย่างเดียว, Type II บาดเจ็บเส้นประสาท, Type III หลอดเลือดขาดฉุกเฉิน)"
          },
          "investigations": [
            {
              "name": "Chest Radiograph (Scapular Index Measurement)",
              "details": {
                "en": "Non-concentric chest AP view. Measure Scapular Index (distance from spinous process to medial scapular border). Lateral displacement >1cm compared to uninjured side indicates dissociation.",
                "th": "ภาพเอกซเรย์หน้าอกท่า AP วัดค่า Scapular Index (ระยะจากกระดูกสันหลังถึงขอบในสะบัก) หากสะบักเคลื่อนออกด้านข้าง >1ซม. เมื่อเทียบกับข้างปกติ แสดงถึงภาวะสะบักหลุดฉีก"
              }
            },
            {
              "name": "CTA Chest and Upper Extremity (CT Angiography)",
              "details": {
                "en": "EMERGENCY CT Angiography. Mandatory to evaluate Subclavian or Axillary artery transection, thrombosis, or pseudoaneurysm.",
                "th": "เอกซเรย์คอมพิวเตอร์หลอดเลือดฉุกเฉิน (CTA) จำเป็นด่วนที่สุดเพื่อตรวจดูการขาดฉีกหรืออุดตันของหลอดเลือดแดง Subclavian/Axillary"
              }
            },
            {
              "name": "EMG / MRI of Brachial Plexus",
              "details": {
                "en": "Electrodiagnostic EMG and Brachial Plexus MRI. Evaluates pre-ganglionic root avulsion vs post-ganglionic nerve traction injury.",
                "th": "ตรวจคลื่นไฟฟ้ากล้ามเนื้อ (EMG) และ MRI ขั้วประสาท Brachial plexus เพื่อประเมินการขาดหลุดของรากประสาท"
              }
            }
          ],
          "types": [
            {
              "type": "Type I",
              "name": {
                "en": "Type I (Pure Musculoskeletal Disruption - Intact Neurovascular)",
                "th": "Type I (กล้ามเนื้อ/กระดูกหลุดฉีก - เส้นประสาท/หลอดเลือดปกติ)"
              },
              "description": {
                "en": "Severe musculoskeletal disruption (scapular lateral displacement >1cm, ipsilateral clavicle fracture / AC dislocation)\nIntact Brachial plexus and intact Subclavian/Axillary vessels\nLowest mortality, best functional prognosis",
                "th": "การฉีกขาดรุนแรงของกล้ามเนื้อและกระดูกรอบไหล่ (สะบักเคลื่อนออกด้านข้าง >1ซม., ไหปลาร้าหักฝั่งเดียวกัน)\nเส้นประสาท Brachial plexus และหลอดเลือด Subclavian ยังคง **สมบูรณ์ปกติ**\nอัตราเสียชีวิตต่ำที่สุด ผลการรักษาเพื่อฟื้นฟูแขนดีที่สุด"
              },
              "moi": {
                "en": "High-energy traction injury or crush trauma to shoulder girdle.",
                "th": "แรงดึงรั้งหรือแรงทับบดพลังงานสูงรุนแรงที่หัวไหล่"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "Not recommended due to severe shoulder girdle deformity and muscle detachment.",
                  "th": "ไม่แนะนำเนื่องจากไหล่หลุดเสียรูปทรงและกล้ามเนื้อฉีกขาด"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. Operative stabilization of the clavicle fracture / AC joint and scapula to re-establish shoulder girdle framework.",
                  "th": "แนะนำผ่าตัดยึดตรึงกระดูกไหปลาร้า/ข้อ AC และสะบัก เพื่อคืนรูปโครงสร้างไหล่"
                }
              },
              "illustrationId": "/images/scapulothoracic_dissociation/std_1.png",
              "xrayDescription": {
                "en": "Lateral displacement of scapula >1cm on AP chest radiograph with intact vascular run-through.",
                "th": "เห็นกระดูกสะบักเคลื่อนหลุดออกด้านข้าง >1ซม. ในภาพรังสีหน้าอก โดยหลอดเลือดเดินปกติ"
              }
            },
            {
              "type": "Type II",
              "name": {
                "en": "Type II (Musculoskeletal + Neurological Injury)",
                "th": "Type II (กล้ามเนื้อ/กระดูกหลุดฉีก + บาดเจ็บเส้นประสาท Brachial Plexus)"
              },
              "description": {
                "en": "Musculoskeletal disruption combined with Brachial plexus nerve injury\nIIA: Incomplete neurological injury (partial plexus palsy / neurapraxia)\nIIB: Complete neurological injury (complete brachial plexus avulsion C5-T1 - flail arm)\nHigh morbidity and permanent upper extremity weakness",
                "th": "การฉีกขาดของกล้ามเนื้อและกระดูก **ร่วมกับการบาดเจ็บของเส้นประสาท Brachial plexus**\nIIA: เส้นประสาทบาดเจ็บบางส่วน (Incomplete plexus palsy)\nIIB: รากเส้นประสาทขาดหลุดสมบูรณ์ (Complete root avulsion - แขนอัมพาตปละหลุดลอย Flail arm)\nความพิการสูง ถาวร อัมพาตแขน"
              },
              "moi": {
                "en": "Severe violent traction throwing patient with head forced away from shoulder.",
                "th": "แรงดึงกระชากอย่างรุนแรงสุดขีดที่สะบัดศีรษะและไหล่แยกออกจากกัน"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "High invalidism.",
                  "th": "เสี่ยงพิการสูง"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. Skeletal stabilization + Nerve transfer / brachial plexus exploration, or functional muscle transfer.",
                  "th": "แนะนำผ่าตัดดามกระดูก + ผ่าตัดต่อหรือย้ายเส้นประสาท (Nerve transfer) เพื่อฟื้นฟูแขน"
                }
              },
              "illustrationId": "/images/scapulothoracic_dissociation/std_2.png",
              "xrayDescription": {
                "en": "Gross lateral displacement of scapula with clinical flail upper extremity.",
                "th": "เห็นสะบักเคลื่อนหลุดออกด้านข้างมาก พร้อมผู้ป่วยมีภาวะแขนอัมพาตหลุดลอย"
              }
            },
            {
              "type": "Type III",
              "name": {
                "en": "Type III (Musculoskeletal + Vascular Disruption / Transection - EMERGENCY)",
                "th": "Type III (กล้ามเนื้อ/กระดูกหลุดฉีก + หลอดเลือดใหญ่ขาด - ผ่าตัดฉุกเฉินด่วนที่สุด)"
              },
              "description": {
                "en": "Musculoskeletal disruption combined with COMPLETE TRANSECTION or thrombosis of Subclavian / Axillary artery and vein\nIncludes combined neurovascular injury (Type III = Vascular ± Nerve)\nLIFE-THREATENING EMERGENCY due to massive retroperitoneal/chest hemorrhage or acute limb ischemia\nHigh mortality rate (~20-50%)",
                "th": "การฉีกขาดของกล้ามเนื้อและกระดูก **ร่วมกับหลอดเลือดแดง/ดำ Subclavian ขาดฉีกสมบูรณ์**\nภาวะฉุกเฉินอันตรายถึงชีวิต (Life-threatening emergency) จากการเสียเลือดรุนแรงในช่องอก หรือแขนขาดเลือดฉุกเฉิน\nอัตราการเสียชีวิตสูงมาก (~20-50%)"
              },
              "moi": {
                "en": "Extreme violent traction/crush internal amputation.",
                "th": "แรงดึงรั้งทับบดพลังงานสูงรุนแรงสุดขีด (Internal Amputation)"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "FATAL.",
                  "th": "อันตรายถึงชีวิต"
                },
                "operative": {
                  "en": "EMERGENCY SURGICAL RECONSTRUCTION. Immediate emergency vascular bypass/repair to save life and limb + temporary external fixation. Amputation if complete plexus avulsion + unsalvageable ischemia.",
                  "th": "ผ่าตัดฉุกเฉินด่วนที่สุด! (EMERGENCY SURGERY) ผ่าตัดต่อหลอดเลือดแดงเพื่อชีวิตและแขน + ดามกระดูกยึดภายนอก หากไม่สามารถช่วยแขนได้อาจจำเป็นต้องตัดแขน"
                }
              },
              "illustrationId": "/images/scapulothoracic_dissociation/std_3.png",
              "xrayDescription": {
                "en": "Extreme lateral scapular displacement with CTA showing abrupt arterial cutoff at subclavian/axillary level.",
                "th": "เห็นสะบักเคลื่อนหลุดออกด้านข้างอย่างรุนแรง และภาพ CTA แสดงจุดตัดขาดของหลอดเลือดแดงด่วน"
              }
            }
          ]
        }
      ]
    }
  ]
};
