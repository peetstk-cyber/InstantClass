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
      "regionConcept": {
        "physicalExam": [
          {
            "sign": "Sternoclavicular (SC) Joint Tenderness & Palpation",
            "positive": {
              "en": "Tenderness or prominence at sternoclavicular joint; dyspnea or dysphagia indicates posterior SC dislocation compressing retrosternal trachea/esophagus",
              "th": "กดเจ็บหรือคลำนูนบริเวณข้อต่อ SC; อาการหายใจลำบากหรือกลืนลำบากบ่งชี้ข้อ SC หลุดไปด้านหลังอัดทับท่อลม/หลอดอาหาร"
            }
          },
          {
            "sign": "AC Joint Tenderness & Cross-Body Adduction Test",
            "positive": {
              "en": "Focal tenderness at AC joint exacerbated by cross-body arm adduction indicates AC joint sprain or dislocation",
              "th": "กดเจ็บเฉพาะที่บริเวณข้อ AC และปวดมากขึ้นเมื่อหุบแขนข้ามลำตัว บ่งชี้การบาดเจ็บหรือข้อต่อ AC หลุด"
            }
          },
          {
            "sign": "Piano Key Sign",
            "positive": {
              "en": "Downward pressure depresses prominent distal clavicle, which springs back upon release; indicates complete CC ligament rupture",
              "th": "กดกระดูกไหปลาร้าส่วนปลายที่ยกลอยแล้วยุบลง และเด้งกลับขึ้นมาเมื่อปล่อย บ่งชี้การขาดอย่างสมบูรณ์ของเอ็น Coracoclavicular (CC)"
            }
          }
        ],
        "redFlags": [
          {
            "en": "Posterior sternoclavicular dislocation compressing retrosternal structures (superior vena cava, subclavian vessels, trachea, or esophagus)",
            "th": "ข้อต่อ Sternoclavicular หลุดไปด้านหลัง กดทับอวัยวะหลังกระดูกหน้าอก (เส้นเลือดใหญ่ SVC, เส้นเลือด Subclavian, ท่อลม หรือหลอดอาหาร)"
          },
          {
            "en": "High-grade AC joint dislocation (Rockwood Type IV, V, VI) with skin tenting or severe soft tissue compromise",
            "th": "ข้อ AC หลุดระดับรุนแรง (Rockwood Type IV, V, VI) ที่มีผิวดันดันหนังดึงรั้งมากหรือเสี่ยงต่อผิวหนังขาดเลือด"
          }
        ],
        "associatedInjuries": [
          {
            "injury": {
              "en": "Coracoclavicular (CC) & AC Ligament Tears",
              "th": "การฉีกขาดของเส้นเอ็น Coracoclavicular (CC) และ AC"
            }
          },
          {
            "injury": {
              "en": "Retrosternal Mediastinal Structure Compression",
              "th": "การกดทับอวัยวะในช่องอกหลังกระดูกหน้าอก"
            },
            "trigger": {
              "en": "Check in posterior SC dislocations",
              "th": "ประเมินในเคสข้อ SC หลุดไปด้านหลัง"
            }
          }
        ],
        "clinicalPearls": [
          {
            "en": "Proximal clavicle fractures (Allman Group III) and SC joint dislocations are rare (<5%); mostly managed non-operatively unless posterior displacement threatens retrosternal structures.",
            "th": "กระดูกไหปลาร้าส่วนต้นหัก (Allman Group III) และข้อ SC หลุด พบได้น้อย (<5%) ส่วนใหญ่รักษาแบบไม่ผ่าตัด ยกเว้นเคลื่อนไปด้านหลังทับกดอวัยวะช่องอก"
          },
          {
            "en": "Rockwood Type I and II AC joint injuries are treated non-operatively with a sling; Type IV, V, and VI mandate surgical reconstruction.",
            "th": "การบาดเจ็บข้อ AC ชนิด Rockwood Type I และ II รักษาแบบไม่ผ่าตัดด้วย Sling; ชนิด Type IV, V และ VI ต้องผ่าตัดสร้างเอ็น CC ใหม่"
          },
          {
            "en": "Rockwood Type III AC joint injuries are initially treated conservatively for most patients; surgical intervention is reserved for high-demand overhead athletes or heavy laborers.",
            "th": "Rockwood Type III แนะนำรักษาแบบไม่ผ่าตัดเป็นทางเลือกแรก ส่วนใหญ่ได้ผลดี พิจารณาผ่าตัดเฉพาะนักกีฬาใช้แรงงานหนัก"
          }
        ]
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
          "concept": {
            "title": {
              "en": "Rockwood AC Joint Injury Clinical Concept",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ Rockwood Classification"
            },
            "corePrinciple": {
              "en": "Classifies Acromioclavicular (AC) joint injuries (Types I-VI) based on directional displacement, integrity of AC & CC ligaments, and deltotrapezial fascia disruption to guide conservative vs operative management.",
              "th": "จำแนกการบาดเจ็บข้อต่อ AC (Types I-VI) ตามทิศทางการเคลื่อนตัว ความสมบูรณ์ของเส้นเอ็น AC และ CC และการฉีกขาดของพังผืด Deltotrapezial เพื่อกำหนดแนวทางการรักษาแบบผ่าตัดหรือไม่ผ่าตัด"
            },
            "rules": [
              {
                "en": "Type I: AC sprain, CC intact, normal radiograph.",
                "th": "Type I: เอ็น AC บาดเจ็บเล็กน้อย, เอ็น CC ปกติ, ภาพเอกซเรย์ปกติ"
              },
              {
                "en": "Type II: AC torn, CC sprained, distal clavicle elevated < 25%.",
                "th": "Type II: เอ็น AC ขาด, เอ็น CC บาดเจ็บ, ไหปลาร้ายกลอยขึ้น < 25%"
              },
              {
                "en": "Type III: AC & CC torn, distal clavicle elevated 25% - 100%.",
                "th": "Type III: เอ็น AC และ CC ขาดทั้งหมด, ไหปลาร้ายกลอยขึ้น 25% - 100%"
              },
              {
                "en": "Type IV: Posterior displacement into or through trapezius muscle.",
                "th": "Type IV: ไหปลาร้าเคลื่อนไปด้านหลังทะลุเข้ากล้ามเนื้อ Trapezius"
              },
              {
                "en": "Type V: Severe superior displacement > 100% to 300% with deltotrapezial fascia detachment.",
                "th": "Type V: ไหปลาร้ายกสูงขึ้นมาก > 100% ถึง 300% ร่วมกับพังผืด Deltotrapezial ฉีกขาด"
              },
              {
                "en": "Type VI: Inferior displacement subacromial or subcoracoid.",
                "th": "Type VI: ไหปลาร้าเคลื่อนลงล่างไปอยู่ใต้ Acromion หรือ Coracoid"
              }
            ],
            "clinicalSignificance": [
              {
                "en": "Types I & II: Low-grade stable injuries. Conservative treatment with arm sling for 1-2 weeks followed by early range of motion.",
                "th": "Type I & II: การบาดเจ็บระดับรุนแรงน้อยและมั่นคง รักษาแบบไม่ผ่าตัดใส่ Arm sling 1-2 สัปดาห์ แล้วเริ่มกายภาพ"
              },
              {
                "en": "Type III: Conservative sling for 3-4 weeks for most patients; surgical CC reconstruction reserved for high-demand overhead athletes or heavy laborers.",
                "th": "Type III: แนะนำรักษาแบบไม่ผ่าตัดเป็นทางเลือกแรกในผู้ป่วยทั่วไป (ใส่ Sling 3-4 สัปดาห์) พิจารณาผ่าตัดเฉพาะนักกีฬาใช้แขนเหนือศีรษะหรือผู้ใช้แรงงานหนัก"
              },
              {
                "en": "Types IV, V, & VI: High-grade unstable dislocations. MANDATORY surgical reconstruction (CC loop / TightRope / Hook plate) to restore anatomical alignment.",
                "th": "Type IV, V & VI: การหลุดเคลื่อนรุนแรงที่ไม่มั่นคง จำเป็นต้องผ่าตัดรักษา (CC loop / Suture tape button / Hook plate) เพื่อจัดแนวกระดูกให้ปกติ"
              }
            ]
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
                "decisionPrinciple": {
                  "en": "AC ligament sprain; intact CC ligaments; normal radiograph; non-operative treatment with sling for 1–2 weeks followed by early full ROM.",
                  "th": "เอ็น AC บาดเจ็บเล็กน้อย เอ็น CC ปกติ ภาพเอกซเรย์ปกติ รักษาแบบไม่ผ่าตัดด้วยสายคล้องแขน (Arm sling) 1–2 สัปดาห์ แล้วเริ่มฝึกขยับข้อศอกและไหล่ได้เร็ว"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Rockwood Type I AC joint sprain\n• Normal CC distance and clavicle height on Zanca view",
                    "th": "• ข้อต่อ AC เคล็ดระดับที่ 1 (Type I)\n• ระยะห่างเอ็น CC และระดับกระดูกไหปลาร้าปกติในภาพเอกซเรย์ท่า Zanca"
                  },
                  "method": {
                    "en": "• Arm sling for 7–10 days for pain relief and resting the limb",
                    "th": "• ใส่สายคล้องแขน (Arm sling) 7–10 วันเพื่อบรรเทาอาการปวดและพักแขน"
                  },
                  "rehabilitation": {
                    "en": "• Start active-assisted forward flexion and pendulum exercises at 1 week; return to full sports/activity at 2–4 weeks",
                    "th": "• เริ่มฝึกยกแขนช่วยและแกว่งแขนวงกลม (Pendulum) ที่ 1 สัปดาห์ และกลับไปเล่นกีฬาได้ใน 2–4 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Prolonged immobilization leading to adhesive capsulitis / shoulder stiffness",
                    "th": "• ดามแขนนิ่งนานเกินไปทำให้เกิดข้อไหล่ติดแข็ง (Frozen shoulder)"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• No acute surgical indication\n• Late chronic AC joint arthrosis refractory to injections",
                    "th": "• ไม่มีข้อบ่งชี้ผ่าตัดในระยะเฉียบพลัน\n• พิจารณาเฉพาะกรณีข้อ AC เสื่อมเรื้อรังที่รักษาด้วยยาหรือการฉีดยาไม่ดีขึ้น"
                  },
                  "method": {
                    "en": "• Distal clavicle excision (Mumford procedure) only for late chronic arthritis",
                    "th": "• ผ่าตัดตัดปลายกระดูกไหปลาร้า (Mumford procedure) เฉพาะกรณีข้อเสื่อมเรื้อรัง"
                  },
                  "rehabilitation": {
                    "en": "• N/A",
                    "th": "• ไม่ระบุ"
                  },
                  "pitfalls": {
                    "en": "• Unnecessary surgery for acute Type I sprains",
                    "th": "• การผ่าตัดเกินจำเป็นในระยะเฉียบพลัน"
                  }
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
                "decisionPrinciple": {
                  "en": "Complete AC ligament tear with CC ligament sprain; clavicle elevated <25%; stable horizontal alignment; non-operative treatment with sling for 1–2 weeks followed by progressive rotator cuff / scapular rehabilitation.",
                  "th": "เอ็น AC ขาดสมบูรณ์ร่วมกับเอ็น CC เคล็ด ไหปลาร้ายกลอยขึ้น <25% แนวราบยังมั่นคง รักษาแบบไม่ผ่าตัดใส่ Sling 1–2 สัปดาห์ แล้วฝึกกายภาพกล้ามเนื้อสะบักและ Rotator cuff"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Rockwood Type II AC separation (<25% vertical displacement on Zanca view)",
                    "th": "• ข้อต่อ AC เคลื่อนหลุด Type II (ไหปลาร้ายกลอยขึ้น <25% ในภาพเอกซเรย์ท่า Zanca)"
                  },
                  "method": {
                    "en": "• Simple arm sling for 1–2 weeks for symptom control",
                    "th": "• ใส่สายคล้องแขน (Arm sling) 1–2 สัปดาห์เพื่อควบคุมอาการปวด"
                  },
                  "rehabilitation": {
                    "en": "• Progressive active-assisted ROM starting at 1–2 weeks; rotator cuff strengthening at 3–4 weeks; return to sports at 4–6 weeks",
                    "th": "• เริ่มฝึกขยับข้อไหล่ที่ 1–2 สัปดาห์ ฝึกเพิ่มกำลังกล้ามเนื้อหมุนข้อไหล่ที่ 3–4 สัปดาห์ และกลับไปเล่นกีฬาที่ 4–6 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Failure to obtain axillary lateral radiograph to rule out subtle posterior displacement (Type IV)",
                    "th": "• ละเลยการถ่ายภาพเอกซเรย์ท่า Axillary lateral เพื่อแยกชนิดเคลื่อนไปด้านหลัง (Type IV)"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Rare in acute phase; considered only for high-demand overhead throwing athletes with persistent pain at 3–6 months",
                    "th": "• แทบไม่มีข้อบ่งชี้ในระยะเฉียบพลัน พิจารณาเฉพาะนักกีฬาขว้างที่ยังมีอาการปวดเรื้อรังหลัง 3–6 เดือน"
                  },
                  "method": {
                    "en": "• Arthroscopic CC ligament reconstruction or distal clavicle resection",
                    "th": "• ผ่าตัดส่องกล้องสร้างเอ็น CC ใหม่ หรือตัดปลายกระดูกไหปลาร้า"
                  },
                  "rehabilitation": {
                    "en": "• Protected shoulder rehabilitation",
                    "th": "• กายภาพบำบัดข้อไหล่แบบระมัดระวัง"
                  },
                  "pitfalls": {
                    "en": "• Overtreating an acute Type II injury with surgery",
                    "th": "• การผ่าตัดรักษาเกินความจำเป็นในระยะเฉียบพลัน"
                  }
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
                "decisionPrinciple": {
                  "en": "Complete rupture of both AC and CC ligaments; 25%–100% vertical elevation; trial of conservative sling treatment is initial standard of care; surgical CC reconstruction reserved for elite overhead athletes, manual laborers, or persistent symptomatic instability.",
                  "th": "เอ็น AC และ CC ขาดสมบูรณ์ ไหปลาร้ายกตัวขึ้น 25%–100% การทดลองรักษาแบบไม่ผ่าตัดด้วย Sling เป็นแนวทางมาตรฐานอันดับแรกสำหรับผู้ป่วยส่วนใหญ่ พิจารณาผ่าตัดสร้างเอ็น CC เฉพาะในนักกีฬา overhead, ผู้ใช้แรงงานหนัก หรือผู้ป่วยที่มีอาการปวดล้าเรื้อรัง"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Initial first-line treatment for most patients with Rockwood Type III AC separation\n• Non-manual laborers and sedentary individuals",
                    "th": "• ทางเลือกแรกสำหรับผู้ป่วยข้อ AC หลุด Type III ส่วนใหญ่\n• ผู้ป่วยทั่วไปและผู้ที่ไม่ได้ทำงานใช้แรงงานยกของหนักเหนือศีรษะ"
                  },
                  "method": {
                    "en": "• Arm sling for 2–3 weeks with ice and analgesics",
                    "th": "• ใส่สายคล้องแขน (Arm sling) 2–3 สัปดาห์ ร่วมกับประคบเย็นและยาลดปวด"
                  },
                  "rehabilitation": {
                    "en": "• Passive/active-assisted ROM out of sling at 2 weeks; progressive deltoid and periscapular strengthening at 4–6 weeks; full return to activities by 8–12 weeks",
                    "th": "• เริ่มฝึกขยับข้อไหล่ที่ 2 สัปดาห์ ฝึกสร้างกล้ามเนื้อรอบสะบักและ Deltoid ที่ 4–6 สัปดาห์ และกลับไปใช้งานเต็มที่ที่ 8–12 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Persistent pain or fatigue in heavy overhead laborers (~15–20%)",
                    "th": "• อาจมีอาการปวดล้าข้อไหล่เรื้อรังในกลุ่มผู้ใช้แรงงานหนัก (~15–20%)"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• High-demand overhead athletes (pitchers, quarterbacks, swimmers)\n• Heavy manual laborers\n• Failed conservative trial with persistent painful shoulder fatigue/dyskinesis at 3–6 months",
                    "th": "• นักกีฬาใช้แขนเหนือศีรษะ (นักขว้าง, ว่ายน้ำ, แบดมินตัน)\n• ผู้ใช้แรงงานแบกหามของหนัก\n• รักษาแบบไม่ผ่าตัดแล้วไม่ดีขึ้น มีอาการปวดล้าไหล่และสะบักเคลื่อนผิดปกติที่ 3–6 เดือน"
                  },
                  "method": {
                    "en": "• Anatomic Coracoclavicular (CC) Ligament Reconstruction using Suture Tape Button (TightRope / Twinloop) ± semitendinosus autograft/allograft + AC ligament imbrication / Hook Plate",
                    "th": "• ผ่าตัดสร้างเอ็น Coracoclavicular (CC) ใหม่ตามกายวิภาคด้วย Suture Tape Button (TightRope / Twinloop) ± ใช้เส้นเอ็น Semitendinosus ปลูกถ่าย + เย็บซ่อมเอ็น AC / ดาม Hook Plate"
                  },
                  "rehabilitation": {
                    "en": "• Sling for 6 weeks; passive ROM limited to 90° forward flexion for 6 weeks; active strengthening at 8–12 weeks; contact sports at 6 months",
                    "th": "• ใส่ Sling 6 สัปดาห์ จำกัดการยกแขนไม่เกิน 90 องศาใน 6 สัปดาห์แรก เริ่มฝึกเพิ่มกำลังที่ 8–12 สัปดาห์ และกลับไปเล่นกีฬาปะทะที่ 6 เดือน"
                  },
                  "pitfalls": {
                    "en": "• Coracoid process fracture from drill holes placed too large or eccentric\n• Hardware failure / loss of reduction with non-biological fixation alone in chronic cases",
                    "th": "• กระดูก Coracoid แตกหักจากการเจาะรูกว้างหรือชิดขอบเกินไป\n• อุปกรณ์คลายตัวหรือกระดูกยกลอยซ้ำหากไม่ใช้เอ็นปลูกถ่ายในเคสเรื้อรัง"
                  }
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
                "decisionPrinciple": {
                  "en": "Distal clavicle displaced posteriorly into or through the trapezius muscle; buttonholed locked displacement; mandatory open reduction and anatomical CC ligament reconstruction.",
                  "th": "ปลายกระดูกไหปลาร้าเคลื่อนหลุดไปด้านหลังทะลุเข้ากล้ามเนื้อ Trapezius ติดล็อคแน่น ต้องผ่าตัดเปิดจัดกระดูกออกจากกล้ามเนื้อและผ่าตัดสร้างเอ็น CC ใหม่"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly CONTRAINDICATED (Clavicle is buttonholed and locked in trapezius muscle belly)",
                    "th": "• ห้ามใช้วิธีนี้ (กระดูกไหปลาร้าติดล็อคอยู่ในกล้ามเนื้อ Trapezius ไม่สามารถเข้าที่เองได้)"
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
                    "en": "• Chronic posterior locked deformity and severe scapulothoracic dyskinesis",
                    "th": "• กระดูกติดล็อคด้านหลังเรื้อรังและสะบักขยับผิดรูปอย่างรุนแรง"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All acute Rockwood Type IV AC joint dislocations",
                    "th": "• ข้อต่อ AC หลุดชนิด Rockwood Type IV ทุกราย"
                  },
                  "method": {
                    "en": "• Open reduction of locked distal clavicle out of trapezius muscle + Anatomic CC ligament reconstruction with suture button device (TightRope) + Repair of deltotrapezial fascia",
                    "th": "• ผ่าตัดเปิดปลดปลายกระดูกไหปลาร้าออกจากกล้ามเนื้อ Trapezius + ผ่าตัดสร้างเอ็น CC ใหม่ด้วย Suture Button (TightRope) + เย็บซ่อมพังผืด Deltotrapezial"
                  },
                  "rehabilitation": {
                    "en": "• Sling for 6 weeks; protected pendulum ROM; active ROM at 6 weeks",
                    "th": "• ใส่ Sling 6 สัปดาห์ เริ่มฝึกแกว่งแขนเบาๆ และเริ่มยกแขนเองที่ 6 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Missing diagnosis on standard AP X-ray — MUST obtain Axillary Lateral or Stryker Notch view",
                    "th": "• วินิจฉัยพลาดในภาพเอกซเรย์ท่า AP ทั่วไป ต้องถ่ายท่า Axillary Lateral เสมอ"
                  }
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
                "decisionPrinciple": {
                  "en": "Gross superior displacement (100%–300%) with complete deltotrapezial fascia stripping and severe tenting of skin; high risk of skin necrosis and permanent shoulder dysfunction; mandatory anatomical surgical reduction and CC reconstruction.",
                  "th": "ไหปลาร้ายกลอยสูงขึ้นอย่างรุนแรง (100%–300%) ร่วมกับพังผืด Deltotrapezial ฉีกขาดหลุดลอก กระดูกทิ่มดันผิวหนังตึงเสี่ยงต่อผิวหนังเน่าตาย ต้องผ่าตัดจัดดึงกระดูกลงและสร้างเอ็น CC ร่วมกับเย็บพังผืดคลุม"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly CONTRAINDICATED (Severe cosmetic and functional shoulder impairment with high risk of skin necrosis)",
                    "th": "• ห้ามใช้วิธีนี้เด็ดขาด (สูญเสียการทำงานของไหล่ ไหล่ผิดรูปชัดเจน และเสี่ยงผิวหนังทะลุ)"
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
                    "en": "• Extreme skin tenting leading to skin breakdown and open joint contamination",
                    "th": "• กระดูกทิ่มดันผิวหนังจนขาดเลือดและทะลุกลายเป็นแผลติดเชื้อ"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All Rockwood Type V AC joint dislocations",
                    "th": "• ข้อต่อ AC หลุดชนิด Rockwood Type V ทุกราย"
                  },
                  "method": {
                    "en": "• Open / arthroscopic-assisted anatomical reduction + Robust dual CC suture tape button fixation (anatomic conoid and trapezoid tunnels) + Meticulous repair and reattachment of deltotrapezial fascia over the clavicle",
                    "th": "• ผ่าตัดเปิดหรือส่องกล้องช่วยจัดกระดูกเข้าที่ + ผ่าตัดยึดตรึงเอ็น CC คู่ด้วย Dual Suture Tape Button (เจาะรูตามแนว Conoid และ Trapezoid) + เย็บซ่อมแซมพังผืด Deltotrapezial คลุมทับกระดูกอย่างแน่นหนา"
                  },
                  "rehabilitation": {
                    "en": "• Strict sling immobilization for 6 weeks; no overhead lifting for 3 months; return to contact sports at 6 months",
                    "th": "• ใส่ Sling เคร่งครัด 6 สัปดาห์ ห้ามยกของหนักเหนือศีรษะ 3 เดือน และกลับไปเล่นกีฬาปะทะที่ 6 เดือน"
                  },
                  "pitfalls": {
                    "en": "• Failing to repair the stripped deltotrapezial fascia leading to secondary superior migration",
                    "th": "• ละเลยการเย็บซ่อมพังผืด Deltotrapezial ทำให้กระดูกยกลอยซ้ำขึ้นมาอีก"
                  }
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
                "decisionPrinciple": {
                  "en": "Rare high-energy injury with inferior displacement under the acromion or coracoid process; severe brachial plexus and vascular stretch risk; emergency reduction and operative CC reconstruction.",
                  "th": "การบาดเจ็บพลังงานสูงที่พบได้ยาก ไหปลาร้าเคลื่อนหลุดลงล่างไปติดใต้กระดูก Coracoid หรือ Acromion เสี่ยงต่อการดึงรั้งเส้นประสาท Brachial Plexus และหลอดเลือด ต้องผ่าตัดจัดงัดกระดูกขึ้นฉุกเฉินและสร้างเอ็น CC ใหม่"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly CONTRAINDICATED (Subcoracoid lock with neurovascular traction)",
                    "th": "• ห้ามใช้วิธีนี้เด็ดขาด (กระดูกติดล็อคใต้ Coracoid และดึงรั้งเส้นประสาท/หลอดเลือด)"
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
                    "en": "• Neurovascular compression and permanent loss of shoulder girdle mechanics",
                    "th": "• การกดทับเส้นประสาทและหลอดเลือด และสูญเสียการทำงานของไหล่ถาวร"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All acute Rockwood Type VI AC joint dislocations",
                    "th": "• ข้อต่อ AC หลุดชนิด Rockwood Type VI ทุกราย"
                  },
                  "method": {
                    "en": "• Emergency open disimpaction of subcoracoid/subacromial clavicle + Neurovascular decompression + CC ligament reconstruction with suture buttons + Deltotrapezial repair",
                    "th": "• ผ่าตัดเปิดฉุกเฉินงัดปลดกระดูกไหปลาร้าออกจากใต้ Coracoid + ตรวจเช็คเส้นประสาทหลอดเลือด + ผ่าตัดสร้างเอ็น CC ด้วย Suture Button + เย็บซ่อมพังผืด Deltotrapezial"
                  },
                  "rehabilitation": {
                    "en": "• Sling for 6 weeks; progressive guided physical therapy",
                    "th": "• ใส่ Sling 6 สัปดาห์ และทำกายภาพบำบัดฟื้นฟูตามลำดับ"
                  },
                  "pitfalls": {
                    "en": "• Iatrogenic brachial plexus / axillary artery injury during disimpaction from subcoracoid bed",
                    "th": "• อันตรายต่อเส้นประสาท Brachial Plexus หรือหลอดเลือด Axillary ขณะงัดกระดูกออกจากใต้ Coracoid"
                  }
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
      "regionConcept": {
        "physicalExam": [
          {
            "sign": "Clavicle Deformity & Skin Tenting Inspection",
            "positive": {
              "en": "Visible tenting, puckering, or skin compromise over sharp bone fragments risks closed-to-open fracture conversion",
              "th": "เห็นผิวดันดันหนัง ดึงรั้ง หรือผิวหนังตึงแน่นเหนือชิ้นกระดูกแหลม เสี่ยงต่อกระดูกแทงทะลุกลายเป็นแผลหักเปิด"
            }
          },
          {
            "sign": "Subclavian Artery & Distal Pulse Assessment",
            "positive": {
              "en": "Diminished distal radial pulse or expanding supraclavicular hematoma indicates subclavian vessel vascular injury",
              "th": "ชีพจร Radial เบาลง หรือมีก้อนเลือดช้ำเหนือไหปลาร้า บ่งชี้บาดเจ็บต่อหลอดเลือด Subclavian"
            }
          },
          {
            "sign": "Brachial Plexus Neurological Screen",
            "positive": {
              "en": "Motor weakness or altered sensory dermatomes in distal arm indicates brachial plexus compression or traction neuropraxia",
              "th": "กล้ามเนื้อแขนอ่อนแรงหรือชาตามแขน บ่งชี้การดึงรั้งหรือทับกดเส้นประสาท Brachial Plexus"
            }
          }
        ],
        "acceptableAlignment": [
          {
            "parameter": {
              "en": "Shortening",
              "th": "ระยะหดสั้น"
            },
            "threshold": "< 2 cm",
            "note": {
              "en": "Shortening >2 cm is associated with high nonunion rate (~15-20%) and painful scapular dyskinesis",
              "th": "ระยะหดสั้น >2 ซม. สัมพันธ์กับอัตรากระดูกไม่ติดสูง (~15-20%) และการทำงานของสะบักผิดปกติ"
            }
          },
          {
            "parameter": {
              "en": "Vertical Displacement / Cortical Contact",
              "th": "การเคลื่อนเกยกันในแนวตั้ง / ขอบกระดูกแตะกัน"
            },
            "threshold": "< 100% displacement",
            "note": {
              "en": "No vertical overlap without cortical contact; 100% displacement increases nonunion risk",
              "th": "ไม่ควรเคลื่อนเกยหลุดโดยขอบกระดูกไม่แตะกันเลย; การเคลื่อนหลุด 100% เพิ่มความเสี่ยงกระดูกไม่ติด"
            }
          }
        ],
        "redFlags": [
          {
            "en": "Impending skin perforation / severe skin tenting over sharp fracture ends.",
            "th": "ภาวะกระดูกทิ่มดันผิวหนังรุนแรง เสี่ยงต่อการทะลุกลายเป็นแผลหักเปิด"
          },
          {
            "en": "Subclavian vascular deficit or brachial plexus neurological injury.",
            "th": "การบาดเจ็บของหลอดเลือด Subclavian หรือเส้นประสาท Brachial plexus"
          }
        ],
        "associatedInjuries": [
          {
            "injury": {
              "en": "Pneumothorax / Hemothorax",
              "th": "ภาวะลมหรือเลือดในช่องเยื่อหุ้มปอด"
            },
            "trigger": {
              "en": "Screen with chest radiograph in high-energy trauma",
              "th": "ตรวจ Chest X-ray ในเคสอุบัติเหตุแรงกระแทกสูง"
            }
          },
          {
            "injury": {
              "en": "Ipsilateral Scapular Neck Fracture (Floating Shoulder)",
              "th": "กระดูกคอสสะบักหักข้างเดียวกัน (Floating Shoulder)"
            }
          }
        ],
        "clinicalPearls": [
          {
            "en": "Displaced midshaft clavicle fractures with >2 cm shortening or 100% displacement have a high nonunion rate (~15-20%) and benefit from plate ORIF.",
            "th": "กระดูกไหปลาร้าส่วนกลางหักเคลื่อนที่มีระยะหดสั้น >2 ซม. หรือเกยหลุด 100% มีอัตรากระดูกไม่ติดสูง (~15-20%) และได้ประโยชน์จากการผ่าตัดดามแผ่นเหล็ก"
          },
          {
            "en": "Figure-of-eight bandages provide no clinical advantage over a simple sling and are associated with higher skin ulceration complications.",
            "th": "การใส่เฝือก Figure-of-eight ไม่ได้ประโยชน์เหนือกว่า Arm sling แบบเรียบง่าย และเสี่ยงเกิดแผลกดทับผิวหนังมากกว่า"
          },
          {
            "en": "Closed reduction of midshaft clavicle fractures cannot be maintained conservatively; splints and slings serve for immobilization and pain relief only.",
            "th": "การจัดกระดูกแบบไม่ผ่าตัดไม่สามารถรักษาแนวไว้ได้ การใส่เฝือกอ่อนและ Sling มีจุดประสงค์เพื่อลดปวดและดามนิ่งเท่านั้น"
          }
        ],
        "images": [
          {
            "url": "/images/allman_clavicle/allman_overview.png",
            "title": {
              "en": "Allman Anatomical Zones (JBJS 1967)",
              "th": "โซนกายวิภาคกระดูกไหปลาร้า Allman (JBJS 1967)"
            },
            "caption": {
              "en": "Group I: Midshaft (69-85%), Group II: Distal third (12-28%), Group III: Medial third (3-6%).",
              "th": "Group I: ลำกระดูกส่วนกลาง (69-85%), Group II: ส่วนปลายชิดไหล่ (12-28%), Group III: ส่วนต้นชิดอก (3-6%)"
            }
          }
        ]
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
          "concept": {
            "title": {
              "en": "Allman Clavicle Fracture Clinical Concept",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ Allman Classification"
            },
            "corePrinciple": {
              "en": "Anatomically classifies clavicle fractures into Group I (Midshaft ~80%), Group II (Distal/Lateral 1/3 ~15%), and Group III (Proximal/Medial 1/3 ~5%). Midshaft treatment is guided by displacement, shortening, and comminution.",
              "th": "จำแนกกระดูกไหปลาร้าหักตามตำแหน่งกายวิภาคเป็น Group I (ส่วนกลาง Midshaft ~80%), Group II (ส่วนปลาย Distal ~15%) และ Group III (ส่วนโคน Medial ~5%) การรักษาการหักส่วนกลางพิจารณาจากระยะหดสั้น การเกยเคลื่อน และความแตกละเอียด"
            },
            "rules": [
              {
                "en": "Group I (Midshaft ~80%): Non-displaced or shortening < 2 cm & displacement < 100% -> Conservative (Sling 4-6 wks).",
                "th": "Group I (ส่วนกลาง ~80%): ไม่เคลื่อนตัว หรือหดสั้น < 2 ซม. และเคลื่อนตัว < 100% -> รักษาแบบไม่ผ่าตัด (ใส่ Sling 4-6 สัปดาห์)"
              },
              {
                "en": "Group I Operative Criteria: Shortening > 2 cm, displacement > 100% (no cortical contact), vertical z-shaped fragment, skin tenting, or neurovascular deficit.",
                "th": "Group I เกณฑ์ผ่าตัด (ORIF): ระยะหดสั้น > 2 ซม., เคลื่อนตัว > 100% (ขอบกระดูกไม่แตะกัน), มีชิ้นกระดูกตั้งฉาก Z-fragment, ทิ่มผิวหนัง หรือโดนเส้นประสาท/หลอดเลือด"
              },
              {
                "en": "Group II (Distal 1/3 ~15%): Subclassified by Neer (Types I-V) based on CC ligament integrity.",
                "th": "Group II (ส่วนปลาย ~15%): จำแนกย่อยตาม Neer Classification (Type I-V) ตามความสมบูรณ์ของเอ็น CC"
              },
              {
                "en": "Group III (Proximal 1/3 ~5%): Mostly stable and managed non-operatively; posterior displacement requires immediate CT angio to rule out mediastinal structure compression.",
                "th": "Group III (ส่วนโคน ~5%): ส่วนใหญ่มั่นคงดีรักษาแบบไม่ผ่าตัด; หากเคลื่อนไปด้านหลังต้องทำ CTA ฉุกเฉินเพื่อตรวจหลอดเลือดใหญ่ในช่องอก"
              }
            ],
            "clinicalSignificance": [
              {
                "en": "Group I Displaced (> 2 cm shortening / 100% displacement): Operative ORIF with superior or anteroinferior anatomical locking plate significantly reduces nonunion rate (from ~15% to < 2%) and prevents symptomatic shoulder asymmetry.",
                "th": "Group I ชนิดเคลื่อนตัวมาก (หดสั้น > 2 ซม. / เกย 100%): การผ่าตัด ORIF ดามแผ่นเหล็กล็อคช่วยลดอัตรากระดูกไม่ติดจาก 15% เหลือ < 2% และป้องกันไหล่เสียรูปผิดปกติ"
              },
              {
                "en": "Group III (Proximal): Non-operative sling treatment yields > 95% union rate; surgical fixation (medial plate) reserved for posterior displacement threatening great vessels or trachea.",
                "th": "Group III (ส่วนโคน): การรักษาแบบไม่ผ่าตัดใส่ Sling มีอัตรากระดูกติด > 95%; ผ่าตัดเฉพาะกรณีเคลื่อนตัวไปด้านหลังกดทับหลอดเลือดใหญ่หรือท่อลม"
              }
            ]
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
              "name": "Cephalic Tilt AP View (15-30°)",
              "details": {
                "en": "AP radiograph taken with a 15-30° cephalic tube tilt. Projects the clavicle shaft free from rib and thoracic cage overlap, revealing the true length and displacement of the midshaft fracture. Optimal tilt is 15-30° cephalic. Essential for assessing shortening, comminution, and angulation of Group I (Midshaft) fractures. Not to be confused with the Zanca view, which is specific to the AC joint.",
                "th": "ภาพเอกซเรย์ AP โดยเอียงหลอดรังสีขึ้น 15-30 องศา เพื่อฉายภาพลำกระดูกไหปลาร้าให้หลุดพ้นจากซี่โครงและทรวงอก ทำให้มองเห็นความยาวและการเคลื่อนตัวที่แท้จริงของรอยหักส่วนกลาง ใช้ประเมินการหดสั้น ความแตกละเอียด และการโค้งงอของ Group I (Midshaft) ไม่ใช่ท่า Zanca ซึ่งใช้เฉพาะข้อ AC"
              }
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
                "decisionPrinciple": {
                  "en": "Middle 1/3 clavicle shaft fracture; non-operative sling for non-displaced or minimally displaced (<2 cm shortening, <100% displacement) with >95% union; anatomical superior/anteroinferior locking plate ORIF for displaced (>2 cm shortening, 100% displacement, skin tenting, neurovascular compromise).",
                  "th": "กระดูกไหปลาร้าส่วนกลางหัก หากไม่เคลื่อนตัวหรือหดสั้น <2 ซม. (เกย <100%) รักษาแบบไม่ผ่าตัดด้วย Arm sling ได้ผลกระดูกติด >95% หากเคลื่อนตัวมาก (สั้น >2 ซม., เกยหลุด 100%, ทิ่มดันผิวหนัง, โดนเส้นเลือด/เส้นประสาท) แนะนำผ่าตัดดามแผ่นเหล็กล็อค Superior/Anteroinferior Locking Plate"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Non-displaced or minimally displaced midshaft clavicle fracture (< 2 cm shortening, < 100% displacement)\n• Intact neurovascular examination and no skin compromise",
                    "th": "• กระดูกหักส่วนกลางไม่เคลื่อนตัว หรือหดสั้น < 2 ซม. (เคลื่อนตัว < 100%)\n• ตรวจระบบประสาทและหลอดเลือดปกติ ไม่มีผิวดันดันหนัง"
                  },
                  "method": {
                    "en": "• Simple arm sling (figure-of-eight offers no benefit and risks pressure sores) for 3–4 weeks for comfort",
                    "th": "• ใส่สายคล้องแขน (Arm sling) 3–4 สัปดาห์เพื่อความสบาย (ไม่จำเป็นต้องใส่ Figure-of-eight เพราะไม่ได้ช่วยดึงกระดูกและเสี่ยงเกิดแผลกดทับ)"
                  },
                  "rehabilitation": {
                    "en": "• Start gentle pendulum exercises at 1–2 weeks; active-assisted forward elevation at 3–4 weeks; active strengthening at 6–8 weeks; contact sports at 12 weeks",
                    "th": "• เริ่มฝึกแกว่งแขนเบาๆ ที่ 1–2 สัปดาห์ ยกแขนช่วยที่ 3–4 สัปดาห์ ฝึกเพิ่มกำลังกล้ามเนื้อที่ 6–8 สัปดาห์ และกลับไปเล่นกีฬาปะทะที่ 12 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Using tight figure-of-eight bandage causing skin breakdown or transient brachial plexopathy\n• Underestimating shortening >2 cm resulting in symptomatic malunion",
                    "th": "• การรัดสาย Figure-of-eight แน่นเกินไปทำให้เกิดแผลกดทับหรือมือชาจากกดทับเส้นประสาท Brachial plexus\n• ประเมินระยะหดสั้นผิดพลาด (>2 ซม.) ทำให้กระดูกติดผิดรูปและไหล่ทรุดเสียสมดุล"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Displaced midshaft fracture with > 2 cm shortening\n• 100% displacement (no cortical contact)\n• Comminuted / vertical Z-fragment\n• Impending skin tenting or open fracture\n• Subclavian vessel or brachial plexus injury\n• Floating shoulder (ipsilateral scapular neck fracture)",
                    "th": "• กระดูกเคลื่อนตัวหดสั้น > 2 ซม.\n• ชิ้นกระดูกเคลื่อนเกยหลุด 100% (ขอบกระดูกไม่แตะกัน)\n• มีชิ้นกระดูกแตกตั้งฉาก (Vertical Z-fragment)\n• กระดูกทิ่มดันผิวหนังตึงเสี่ยงทะลุ หรือแผลหักเปิด\n• มีการบาดเจ็บต่อหลอดเลือด Subclavian หรือเส้นประสาท Brachial plexus\n• ภาวะ Floating shoulder (กระดูกคอสะบักหักข้างเดียวกัน)"
                  },
                  "method": {
                    "en": "• Supraclavicular or infraclavicular incision: Anatomical reduction of length and rotation + Pre-contoured Superior or Anteroinferior 3.5 mm Clavicle Locking Compression Plate (minimum 3 bicortical screws [6 cortices] on each side) ± lag screws",
                    "th": "• ผ่าตัดเปิดจัดกระดูกคืนความยาวและการหมุน: ดามด้วยแผ่นเหล็กล็อคดัดเข้ารูป 3.5 mm Superior หรือ Anteroinferior Clavicle Locking Plate (ยึดสกรู Bicortical อย่างน้อยข้างละ 3 ตัว [6 cortices]) ± Lag screws"
                  },
                  "rehabilitation": {
                    "en": "• Sling for comfort for 7–10 days; early active-assisted shoulder ROM on post-op day 1–2; unrestricted overhead motion by 6 weeks",
                    "th": "• ใส่ Sling พักแขน 7–10 วัน เริ่มฝึกขยับข้อไหล่ได้ตั้งแต่วันที่ 1–2 หลังผ่าตัด และยกแขนเหนือศีรษะได้เต็มที่ที่ 6 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Drilling too deep through inferior cortex risking subclavian artery/vein or apex lung puncture\n• Inadequate purchase (<6 cortices) leading to plate pullout",
                    "th": "• เจาะสว่านลึกเกินไปทะลุผนังกระดูกด้านล่างโดนหลอดเลือด Subclavian หรือยอดปอด\n• ขันสกรูยึดกระดูกน้อยเกินไป (<6 cortices) ทำให้แผ่นเหล็กหลุดถอน"
                  }
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
                "decisionPrinciple": {
                  "en": "Distal 1/3 clavicle fracture subclassified by Neer (Types I–V); stable patterns (Neer I, III, IV) managed non-operatively; unstable patterns (Neer IIA, IIB, V) with detached CC ligaments have high nonunion rate (~30%) requiring Distal Clavicle Locking Plate + CC augmentation.",
                  "th": "กระดูกไหปลาร้าส่วนปลายหัก จำแนกตาม Neer (Types I–V) โดยชนิดมั่นคง (Neer I, III, IV) รักษาแบบไม่ผ่าตัด ส่วนชนิดไม่มั่นคงที่เอ็น CC หลุด (Neer IIA, IIB, V) มีอัตรากระดูกไม่ติดสูง (~30%) จำเป็นต้องผ่าตัด Distal Clavicle Locking Plate ร่วมกับการยึดเสริมเอ็น CC"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Stable distal clavicle fractures (Neer Type I, III, IV) with intact CC ligament attachment",
                    "th": "• กระดูกไหปลาร้าส่วนปลายชนิดมั่นคง (Neer Type I, III, IV) ที่เอ็น CC ยังยึดติดปกติ"
                  },
                  "method": {
                    "en": "• Arm sling for 3–4 weeks",
                    "th": "• ใส่สายคล้องแขน (Arm sling) 3–4 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Early pendulum motion at 2 weeks; progressive active ROM at 4 weeks",
                    "th": "• เริ่มฝึกแกว่งแขนที่ 2 สัปดาห์ และฝึกยกแขนที่ 4 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Mistaking an unstable Neer IIA/IIB for Type I resulting in nonunion",
                    "th": "• วินิจฉัยชนิดไม่มั่นคง Neer IIA/IIB พลาดเป็น Type I ทำให้กระดูกไม่ติด"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All displaced/unstable distal clavicle fractures (Neer Type IIA, IIB, V)",
                    "th": "• กระดูกไหปลาร้าส่วนปลายชนิดเคลื่อนตัว/ไม่มั่นคง (Neer Type IIA, IIB, V) ทุกราย"
                  },
                  "method": {
                    "en": "• Distal Clavicle Anatomical Locking Plate with divergent subchondral locking screws in the small lateral fragment + Coracoclavicular (CC) suture tape button (TightRope) augmentation OR Clavicle Hook Plate (requires removal at 3–4 months)",
                    "th": "• ผ่าตัดดามแผ่นเหล็กล็อคส่วนปลาย (Distal Clavicle Locking Plate) พร้อมขันสกรูกระจายค้ำชิ้นกระดูกปลายชิ้นเล็ก + ผ่าตัดรัดเสริมเอ็น CC ด้วย Suture Tape Button (TightRope) หรือใส่ Clavicle Hook Plate (ต้องผ่าตัดถอดออกที่ 3–4 เดือน)"
                  },
                  "rehabilitation": {
                    "en": "• Sling for 4–6 weeks; progressive guided physical therapy",
                    "th": "• ใส่ Sling 4–6 สัปดาห์ และทำกายภาพบำบัดฟื้นฟูตามลำดับ"
                  },
                  "pitfalls": {
                    "en": "• Subacromial osteolysis / rotator cuff impingement with retained hook plates (must be removed after union)",
                    "th": "• การใส่ Hook Plate ทิ้งไว้นานเกินไปทำให้กระดูก Acromion ละลายหรือขัดสีเอ็น Rotator cuff (ต้องผ่าตัดถอดออกเมื่อกระดูกติด)"
                  }
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
                "decisionPrinciple": {
                  "en": "Medial 1/3 proximal clavicle fracture; mostly non-displaced or anteriorly displaced, treated non-operatively with sling (>95% union); emergency reduction and medial locking plate ORIF for posterior displacement compressing mediastinal structures (trachea, esophagus, great vessels).",
                  "th": "กระดูกไหปลาร้าส่วนต้นด้านในหัก ส่วนใหญ่ไม่เคลื่อนตัวหรือเคลื่อนไปด้านหน้ารักษาแบบไม่ผ่าตัดด้วย Sling (กระดูกติด >95%) หากเคลื่อนไปด้านหลังกดทับอวัยวะสำคัญในช่องอก (หลอดเลือดใหญ่, ท่อลม, หลอดอาหาร) ต้องรีบผ่าตัดจัดกระดูกและดามแผ่นเหล็ก Medial T-plate ฉุกเฉิน"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Non-displaced or anteriorly displaced medial 1/3 clavicle fractures without mediastinal symptoms",
                    "th": "• กระดูกหักส่วนต้นไม่เคลื่อนตัว หรือเคลื่อนไปด้านหน้า โดยไม่มีอาการกดทับช่องอก"
                  },
                  "method": {
                    "en": "• Simple arm sling for 3–4 weeks",
                    "th": "• ใส่สายคล้องแขน (Arm sling) 3–4 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Gentle passive shoulder motion as tolerated; active shoulder elevation after 4 weeks",
                    "th": "• ขยับข้อไหล่เบาๆ เท่าที่ทนได้ และเริ่มยกแขนเองหลัง 4 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Failing to order 3D CT scan for posterior displacement threatening mediastinum",
                    "th": "• ละเลยการส่งตรวจ 3D CT scan ในเคสที่กระดูกเคลื่อนไปด้านหลัง"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Posteriorly displaced fracture threatening or compressing retrosternal structures (subclavian vessels, superior vena cava, trachea, esophagus)\n• Severe painful nonunion",
                    "th": "• กระดูกเคลื่อนไปด้านหลังกดทับหรือเสี่ยงต่อหลอดเลือดใหญ่ SVC, เส้นเลือด Subclavian, ท่อลม หรือหลอดอาหาร\n• ภาวะกระดูกไม่ติดเรื้อรังและมีอาการปวดรุนแรง"
                  },
                  "method": {
                    "en": "• Cardiothoracic backup on standby: Open reduction + Medial Clavicle Pre-contoured T-Plate or mesh locking plate ± sternoclavicular ligament reconstruction (avoid smooth K-wires due to fatal migration risk)",
                    "th": "• มีทีมศัลยแพทย์ทรวงอกเตรียมพร้อม: ผ่าตัดเปิดจัดกระดูก + ดามแผ่นเหล็กล็อค Medial Clavicle T-Plate หรือ Mesh Plate ± ผ่าตัดเย็บสร้างเอ็น SC (ห้ามใช้ลวดเรียบ K-wire เด็ดขาดเพราะเสี่ยงลวดเลื่อนทะลุเข้าหัวใจ)"
                  },
                  "rehabilitation": {
                    "en": "• Protected shoulder motion in sling for 4–6 weeks",
                    "th": "• ดามแขนใน Sling 4–6 สัปดาห์ และฝึกขยับข้อไหล่อย่างระมัดระวัง"
                  },
                  "pitfalls": {
                    "en": "• Fatal intra-thoracic migration of K-wires or pins into heart/great vessels (smooth pins STRICTLY PROHIBITED)",
                    "th": "• การใช้ลวด K-wire ปักยึดกระดูกส่วนต้นอาจเลื่อนหลุดทะลุเข้าหัวใจหรือหลอดเลือดใหญ่จนเสียชีวิต (ห้ามใช้ลวดเรียบเด็ดขาด)"
                  }
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
      "regionConcept": {
        "physicalExam": [
          {
            "sign": "AC Joint / Distal Clavicle Palpation",
            "positive": {
              "en": "Focal tenderness and palpable step-off deformity at distal third of clavicle",
              "th": "กดเจ็บเฉพาะที่และคลำได้ขอบกระดูกเกยบริเวณไหปลาร้าส่วนปลาย"
            }
          },
          {
            "sign": "Piano Key Sign",
            "positive": {
              "en": "Vertical instability of distal clavicle fragment due to coracoclavicular (CC) ligament detachment/rupture",
              "th": "กระดูกไหปลาร้าส่วนปลายยกลอยขึ้นและกดลงได้เหมือนคีย์เปียโน แสดงถึงความไม่มั่นคงจากเอ็น CC ขาด"
            }
          }
        ],
        "redFlags": [
          {
            "en": "Neer Type IIA, IIB, and V unstable fracture patterns due to detachment or rupture of coracoclavicular (CC) ligaments from proximal fragment.",
            "th": "กระดูกหักชนิด Neer Type IIA, IIB และ V ที่ไม่มั่นคงเนื่องจากเอ็น CC ฉีกขาดหรือหลุดออกจากชิ้นกระดูกส่วนต้น"
          }
        ],
        "associatedInjuries": [
          {
            "injury": {
              "en": "Coracoclavicular (CC) Ligament Tear / Detachment",
              "th": "การฉีกขาดหรือหลุดของเส้นเอ็น Coracoclavicular (CC)"
            }
          },
          {
            "injury": {
              "en": "AC Joint Capsule Disruption",
              "th": "การฉีกขาดของปลอกข้อต่อ AC"
            }
          }
        ],
        "clinicalPearls": [
          {
            "en": "Neer Type IIA, IIB, and V distal clavicle fractures are unstable with a high nonunion rate (~30%) because CC ligaments are detached from the proximal segment, requiring surgical reconstruction.",
            "th": "กระดูกไหปลาร้าส่วนปลายหักชนิด Neer Type IIA, IIB และ V เป็นชนิดไม่มั่นคง มีอัตรากระดูกไม่ติดสูง (~30%) เนื่องจากเอ็น CC หลุดออกจากชิ้นส่วนต้น จำเป็นต้องผ่าตัดรักษา"
          },
          {
            "en": "Neer Type I and III fractures are stable (CC ligaments remain intact) with low nonunion risk, treated conservatively in a sling for 3-4 weeks.",
            "th": "Neer Type I และ III เป็นชนิดมั่นคง (เอ็น CC ปกติ) เสี่ยงกระดูกไม่ติดต่ำ สามารถรักษาแบบไม่ผ่าตัดใส่ Sling 3-4 สัปดาห์"
          },
          {
            "en": "Neer Type III involves the intra-articular AC joint surface; patients should be monitored for late post-traumatic AC joint osteoarthritis, managed with distal clavicle excision (Mumford procedure).",
            "th": "Neer Type III หักพาดเข้าผิวข้อ AC ให้เฝ้าระวังภาวะข้อ AC เสื่อมตามมา ซึ่งรักษาได้ด้วยการตัดปลายไหปลาร้า (Mumford procedure)"
          }
        ]
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
          "concept": {
            "title": {
              "en": "Neer Distal Clavicle Clinical Concept",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ Neer Distal Clavicle"
            },
            "corePrinciple": {
              "en": "Classifies distal third clavicle fractures based on the fracture line's relationship to the Coracoclavicular (CC) ligaments (Conoid & Trapezoid) and articular surface, differentiating stable from unstable nonunion-prone patterns.",
              "th": "จำแนกกระดูกไหปลาร้าส่วนปลาย (Distal 1/3) หักตามความสัมพันธ์ของรอยหักต่อเส้นเอ็น Coracoclavicular (CC) และผิวข้อ AC แยกประเภทชนิดมั่นคงออกจากชนิดไม่มั่นคงที่เสี่ยงต่อภาวะกระดูกไม่ติดสูง"
            },
            "rules": [
              {
                "en": "Type I (Minimal displacement, CC intact) & Type III (Intra-articular AC joint, CC intact): STABLE. CC ligaments remain attached to proximal fragment.",
                "th": "Type I (ไม่เคลื่อนตัว, เอ็น CC ปกติ) & Type III (หักเข้าข้อ AC, เอ็น CC ปกติ): มั่นคงดี (STABLE) เอ็น CC ยึดติดกับกระดูกชิ้นโคนอย่างสมบูรณ์"
              },
              {
                "en": "Type IIA (Fracture medial to intact CC), Type IIB (Conoid torn, Trapezoid attached), Type V (Comminuted with inferior fragment holding CC): UNSTABLE. Loss of CC restraint on proximal fragment.",
                "th": "Type IIA (หักด้านในต่อเอ็น CC), Type IIB (เอ็น Conoid ขาด), Type V (แตกละเอียดโดยเอ็น CC ยึดกับชิ้นล่าง): ไม่มั่นคง (UNSTABLE) กระดูกชิ้นโคนหลุดออกจากเอ็น CC"
              },
              {
                "en": "Type IV (Pediatric periosteal sleeve disruption): Proximal fragment erupts superiorly while distal end and CC remain intact in sleeve.",
                "th": "Type IV (เยื่อหุ้มกระดูกหลุดในเด็ก): กระดูกชิ้นโคนทะลุขึ้นบน ขณะที่ส่วนปลายและเอ็น CC ยังอยู่ในเยื่อหุ้มกระดูก"
              }
            ],
            "clinicalSignificance": [
              {
                "en": "Stable Patterns (Types I, III, IV): Non-operative sling immobilization for 3-4 weeks. Type III patients should be monitored for late AC joint osteoarthritis (managed with Mumford distal clavicle excision).",
                "th": "ชนิดมั่นคง (Type I, III, IV): รักษาแบบไม่ผ่าตัดใส่ Sling 3-4 สัปดาห์ ใน Type III ให้ติดตามอาการภาวะข้อ AC เสื่อมระยะยาว (ซึ่งรักษาด้วยการทำ Mumford procedure)"
              },
              {
                "en": "Unstable Patterns (Types IIA, IIB, V): High nonunion rate (30-40%) with conservative care. SURGICAL INDICATION for ORIF using Distal Clavicle Locking Plate combined with CC suture tape / TightRope button augmentation or Hook Plate.",
                "th": "ชนิดไม่มั่นคง (Type IIA, IIB, V): มีอัตรากระดูกไม่ติดสูงมาก (30-40%) หากรักษาแบบไม่ผ่าตัด จึงเป็นข้อบ่งชี้ในการผ่าตัด (ORIF) ดามแผ่นเหล็กส่วนปลายร่วมกับการยึดเชือก CC Tape / Button (TightRope) หรือใส่ Hook Plate"
              }
            ]
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
                "decisionPrinciple": {
                  "en": "Distal clavicle fracture lateral to or between intact CC ligaments; stable AC and CC complexes; high union rate (>95%) with non-operative sling management.",
                  "th": "กระดูกไหปลาร้าส่วนปลายหักอยู่ปลายต่อเอ็น CC หรือระหว่างเอ็น CC ที่ยังสมบูรณ์ โครงสร้างมั่นคงดี อัตรากระดูกติดสูงมาก (>95%) ด้วยการรักษาแบบไม่ผ่าตัดใส่ Arm sling"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Truly non-displaced or minimally displaced distal clavicle fracture\n• Intact CC ligaments and stable CC interval",
                    "th": "• กระดูกไหปลาร้าส่วนปลายหักไม่เคลื่อนตัวหรือเคลื่อนน้อยมาก\n• เอ็น CC สมบูรณ์และระยะห่าง CC ปกติ"
                  },
                  "method": {
                    "en": "• Simple arm sling for 3–4 weeks for comfort",
                    "th": "• ใส่สายคล้องแขน (Arm sling) 3–4 สัปดาห์เพื่อบรรเทาอาการปวด"
                  },
                  "rehabilitation": {
                    "en": "• Early active elbow and pendulum exercises at 1–2 weeks; progressive active shoulder ROM at 3–4 weeks; active strengthening at 6–8 weeks",
                    "th": "• เริ่มฝึกขยับข้อศอกและแกว่งแขนวงกลมที่ 1–2 สัปดาห์ ยกแขนเองที่ 3–4 สัปดาห์ และเริ่มเพิ่มกำลังกล้ามเนื้อที่ 6–8 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Prolonged shoulder immobilization leading to stiffness",
                    "th": "• ดามแขนนิ่งนานเกินไปทำให้ข้อไหล่ติดแข็ง"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Rare; only for secondary displacement or symptomatic nonunion",
                    "th": "• แทบไม่มีข้อบ่งชี้ พิจารณาเฉพาะกรณีเลื่อนหลุดเพิ่มขึ้นหรือกระดูกไม่ติดเรื้อรัง"
                  },
                  "method": {
                    "en": "• ORIF with distal clavicle plate",
                    "th": "• ผ่าตัดดามแผ่นเหล็กล็อคส่วนปลาย (Distal Clavicle Plate)"
                  },
                  "rehabilitation": {
                    "en": "• Early ROM",
                    "th": "• เริ่มขยับข้อตามลำดับ"
                  },
                  "pitfalls": {
                    "en": "• Overtreatment of a stable fracture",
                    "th": "• ผ่าตัดเกินจำเป็นในกระดูกหักที่มั่นคงดี"
                  }
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
                "decisionPrinciple": {
                  "en": "Fracture line medial to intact CC ligaments; CC ligaments stay attached to the distal fragment while proximal fragment displaces superiorly; high nonunion rate (30%–40%); Distal Clavicle Locking Plate + CC augmentation is the treatment of choice.",
                  "th": "รอยหักอยู่ด้านในต่อเอ็น CC ทำให้ชิ้นกระดูกส่วนต้นยกลอยขึ้นสูงและหลุดออกจากเอ็น CC มีอัตรากระดูกไม่ติดสูงมาก (30%–40%) การผ่าตัด Distal Clavicle Locking Plate ร่วมกับการยึดเสริมเอ็น CC เป็นการรักษาหลักที่แนะนำ"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Non-ambulatory elderly patients with high surgical risks",
                    "th": "• ผู้ป่วยสูงอายุติดเตียงที่มีความเสี่ยงต่อการผ่าตัดสูงมาก"
                  },
                  "method": {
                    "en": "• Sling immobilization for 4–6 weeks",
                    "th": "• ใส่สายคล้องแขนประคองอาการ 4–6 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Gentle passive motion",
                    "th": "• กายภาพบำบัดเบาๆ"
                  },
                  "pitfalls": {
                    "en": "• Extremely high nonunion rate (30%–40%), persistent shoulder pain, and prominent deformity",
                    "th": "• อัตรากระดูกไม่ติดสูงมาก (30%–40%) มีอาการปวดไหล่เรื้อรังและกระดูกปูดผิดรูปชัดเจน"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All displaced Neer IIA distal clavicle fractures in active functional patients",
                    "th": "• กระดูกหัก Neer IIA ที่เคลื่อนตัวในผู้ป่วยวัยทำงานและผู้ที่ใช้งานแขนทุกราย"
                  },
                  "method": {
                    "en": "• Superior approach: Anatomical reduction of medial fragment + Distal Clavicle Locking Plate (multi-hole lateral cluster) combined with Coracoclavicular (CC) suture button (TightRope / Twinloop) or suture tape augmentation",
                    "th": "• ผ่าตัดเข้าทางด้านบน: จัดดึงกระดูกชิ้นโคนลงมาให้เข้าที่สมบูรณ์ + ดามแผ่นเหล็กล็อคส่วนปลาย (Distal Clavicle Locking Plate) ร่วมกับการรัดยึดเอ็น CC ด้วย Suture Button (TightRope / Twinloop) หรือ Suture Tape Augmentation"
                  },
                  "rehabilitation": {
                    "en": "• Sling for 4–6 weeks; passive forward elevation <90° for 4 weeks; active ROM and strengthening at 6–8 weeks",
                    "th": "• ใส่ Sling 4–6 สัปดาห์ จำกัดการยกแขนไม่เกิน 90 องศาใน 4 สัปดาห์แรก เริ่มฝึกยกแขนเองและเพิ่มกำลังที่ 6–8 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Plate fixation without CC ligament augmentation leading to screw pullout from the small distal fragment",
                    "th": "• ดามแผ่นเหล็กอย่างเดียวโดยไม่ยึดเสริมเอ็น CC ทำให้สกรูในชิ้นกระดูกปลายชิ้นเล็กหลุดถอน"
                  }
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
                "decisionPrinciple": {
                  "en": "Fracture line between CC ligaments with conoid ligament torn; proximal fragment displaces superiorly; unstable with high nonunion rate; mandatory Distal Clavicle Plate ORIF + Conoid/CC ligament reconstruction.",
                  "th": "รอยหักอยู่ระหว่างเอ็น CC โดยเอ็น Conoid ฉีกขาด ทำให้กระดูกชิ้นโคนยกลอยสูงขึ้นและไม่มั่นคง เสี่ยงกระดูกไม่ติดสูง ต้องผ่าตัด ORIF ดามแผ่นเหล็กส่วนปลายร่วมกับการซ่อมสร้างเอ็น Conoid/CC"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly CONTRAINDICATED in active individuals",
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
                    "en": "• Painful nonunion, shoulder weakness, and scapular dyskinesis",
                    "th": "• กระดูกไม่ติด ปวดเรื้อรัง กล้ามเนื้อไหล่อ่อนแรง และสะบักเสียสมดุล"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All displaced Neer IIB distal clavicle fractures",
                    "th": "• กระดูกหัก Neer IIB ที่เคลื่อนตัวทุกราย"
                  },
                  "method": {
                    "en": "• ORIF with Pre-contoured Distal Clavicle Locking Plate + Anatomical CC suture tape / button augmentation (restoring conoid constraint) ± direct conoid ligament suture repair",
                    "th": "• ผ่าตัด ORIF ดามแผ่นเหล็กล็อคส่วนปลาย (Distal Clavicle Locking Plate) + รัดยึดเสริมเอ็น CC ด้วย Suture Tape Button (ทดแทนเอ็น Conoid) ± เย็บซ่อมเอ็น Conoid โดยตรง"
                  },
                  "rehabilitation": {
                    "en": "• Sling for 4–6 weeks; progressive guided physical therapy",
                    "th": "• ใส่ Sling 4–6 สัปดาห์ และทำกายภาพบำบัดฟื้นฟูตามลำดับ"
                  },
                  "pitfalls": {
                    "en": "• Neglecting conoid ligament insufficiency resulting in persistent superior migration",
                    "th": "• ละเลยการสร้างเสริมเอ็น Conoid ทำให้กระดูกยกลอยซ้ำ"
                  }
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
                "decisionPrinciple": {
                  "en": "Intra-articular fracture extending into AC joint without CC ligament disruption; stable vertical alignment; conservative management with sling; monitor for post-traumatic AC joint arthritis (managed with Mumford distal clavicle excision).",
                  "th": "กระดูกหักเข้าข้อ AC โดยเอ็น CC ยังสมบูรณ์ แนวแนวดิ่งมั่นคงดี รักษาแบบไม่ผ่าตัดด้วย Sling และเฝ้าระวังข้อ AC เสื่อมในระยะยาว (ซึ่งรักษาด้วยการตัดปลายไหปลาร้า Mumford procedure)"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Non-displaced intra-articular distal clavicle fracture",
                    "th": "• กระดูกหักเข้าข้อ AC ชนิดไม่เคลื่อนตัว"
                  },
                  "method": {
                    "en": "• Arm sling for 2–3 weeks for pain control",
                    "th": "• ใส่สายคล้องแขน (Arm sling) 2–3 สัปดาห์เพื่อบรรเทาอาการปวด"
                  },
                  "rehabilitation": {
                    "en": "• Early active-assisted ROM as pain allows; strengthening at 4–6 weeks",
                    "th": "• เริ่มฝึกขยับข้อไหล่ตามอาการปวด และฝึกเพิ่มกำลังที่ 4–6 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Missing late post-traumatic AC joint osteoarthritis (presents with cross-body adduction pain at 6–12 months)",
                    "th": "• มองข้ามภาวะข้อ AC เสื่อมในระยะยาว (มีอาการกดเจ็บและปวดเมื่อหุบแขนข้ามลำตัวที่ 6–12 เดือน)"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Acute: severely displaced intra-articular fragment blocking AC motion\n• Chronic: post-traumatic AC joint arthritis refractory to conservative therapy",
                    "th": "• ระยะเฉียบพลัน: ชิ้นกระดูกในข้อเคลื่อนตัวมากขัดขวางการขยับข้อ\n• ระยะเรื้อรัง: ข้อ AC เสื่อมและปวดเรื้อรังหลังรักษาด้วยยาไม่ดีขึ้น"
                  },
                  "method": {
                    "en": "• Open or arthroscopic Distal Clavicle Excision (Mumford procedure, removing distal 5–8 mm of clavicle)",
                    "th": "• ผ่าตัดเปิดหรือส่องกล้องตัดปลายกระดูกไหปลาร้า (Mumford procedure ตัดออก 5–8 มม.)"
                  },
                  "rehabilitation": {
                    "en": "• Early active shoulder motion immediately after Mumford procedure",
                    "th": "• เริ่มฝึกขยับข้อไหล่ได้ทันทีหลังผ่าตัด Mumford"
                  },
                  "pitfalls": {
                    "en": "• Resecting >10 mm of distal clavicle compromising CC ligament attachments",
                    "th": "• ตัดปลายกระดูกไหปลาร้าออกมากเกินไป (>10 มม.) จนโดนจุดเกาะของเอ็น CC ทำให้ข้อหลวม"
                  }
                }
              },
              "illustrationId": "/images/neer_clavicle/neer_3.jpg",
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
                "decisionPrinciple": {
                  "en": "Pediatric/adolescent injury (<18 yo); proximal fragment erupts through periosteal sleeve while CC ligaments remain attached to the sleeve; exceptional remodeling potential; non-operative sling immobilization.",
                  "th": "การบาดเจ็บในเด็ก/วัยรุ่น (<18 ปี) ชิ้นกระดูกส่วนต้นทะลุเยื่อหุ้มกระดูกขึ้นบนแต่เอ็น CC ยังยึดกับเยื่อหุ้มกระดูกด้านล่าง มีศักยภาพในการสร้างปรับแต่งกระดูก (Remodeling) สูงมาก รักษาแบบไม่ผ่าตัดด้วย Arm sling"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Closed Neer IV pediatric distal clavicle sleeve fractures without skin compromise",
                    "th": "• กระดูกไหปลาร้าส่วนปลายหัก Neer IV ในเด็กแบบปิด ไม่มีผิวดันดันหนัง"
                  },
                  "method": {
                    "en": "• Simple arm sling for 3–4 weeks",
                    "th": "• ใส่สายคล้องแขน (Arm sling) 3–4 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Early progressive shoulder mobilization after 3 weeks; complete remodeling within 6–12 months",
                    "th": "• เริ่มขยับข้อไหล่หลัง 3 สัปดาห์ กระดูกจะปรับทรงเชื่อมติดสมบูรณ์ใน 6–12 เดือน"
                  },
                  "pitfalls": {
                    "en": "• Unnecessary open surgery in children disrupting natural remodeling biology",
                    "th": "• การผ่าตัดเปิดเกินจำเป็นในเด็กซึ่งทำลายกระบวนการสมานและปรับรูปทรงตามธรรมชาติ"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Severe skin tenting, open fracture, or failed closed reduction in older adolescents near skeletal maturity",
                    "th": "• กระดูกทิ่มดันผิวหนังตึงเสี่ยงทะลุ แผลเปิด หรือดึงจัดกระดูกไม่เข้าที่ในวัยรุ่นที่กระดูกใกล้ปิด"
                  },
                  "method": {
                    "en": "• Open reduction of bone into periosteal sleeve + Periosteal suture repair ± transfixing smooth K-wires",
                    "th": "• ผ่าตัดเปิดจัดกระดูกกลับเข้าเยื่อหุ้มกระดูก + เย็บซ่อมเยื่อหุ้มกระดูกคลุมทับ ± ปักลวด K-wire ยึดชั่วคราว"
                  },
                  "rehabilitation": {
                    "en": "• Sling for 3–4 weeks",
                    "th": "• ใส่ Sling 3–4 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• K-wire migration",
                    "th": "• ลวด K-wire เลื่อนหลุด"
                  }
                }
              },
              "illustrationId": "/images/neer_clavicle/neer_4.jpg",
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
                "decisionPrinciple": {
                  "en": "Comminuted distal clavicle fracture with a small inferior cortical fragment retaining CC ligament attachments; proximal clavicle is completely dissociated; highly unstable; mandatory anatomical locking plate ORIF + incorporation of inferior fragment or CC augmentation.",
                  "th": "กระดูกไหปลาร้าส่วนปลายแตกละเอียดโดยมีชิ้นกระดูกส่วนล่างยึดติดกับเอ็น CC ทำให้กระดูกชิ้นโคนหลุดลอยอย่างอิสระ ไม่มั่นคงอย่างยิ่ง ต้องผ่าตัด ORIF ดามแผ่นเหล็กล็อคส่วนปลาย + ยึดชิ้นกระดูกส่วนล่าง หรือรัดยึดเสริมเอ็น CC"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• CONTRAINDICATED in functional patients (Guaranteed nonunion)",
                    "th": "• ห้ามใช้วิธีนี้ในผู้ป่วยทั่วไป (กระดูกไม่ติดแน่นอน)"
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
                    "en": "• Severe nonunion and permanent shoulder weakness",
                    "th": "• กระดูกไม่ติดรุนแรงและสูญเสียแรงยกไหล่ถาวร"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All Neer Type V comminuted distal clavicle fractures",
                    "th": "• กระดูกหัก Neer Type V ที่แตกละเอียดทุกราย"
                  },
                  "method": {
                    "en": "• Distal Clavicle Anatomical Locking Plate ORIF + Lag screw / cerclage suture fixation of the inferior avulsion fragment + Direct CC suture button (TightRope) augmentation",
                    "th": "• ผ่าตัด ORIF ดามแผ่นเหล็กล็อค Distal Clavicle Locking Plate + ขันสกรู Lag screw หรือร้อยไหม Cerclage ยึดชิ้นกระดูกส่วนล่าง + ผ่าตัดยึดเสริมเอ็น CC ด้วย Suture Button (TightRope)"
                  },
                  "rehabilitation": {
                    "en": "• Sling for 6 weeks; progressive passive ROM; active strengthening at 8 weeks",
                    "th": "• ใส่ Sling 6 สัปดาห์ เริ่มฝึกขยับข้อไหล่ตามลำดับ และเริ่มฝึกเพิ่มกำลังที่ 8 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Discarding or missing the small inferior CC-bearing cortical fragment",
                    "th": "• มองข้ามหรือทิ้งชิ้นกระดูกส่วนล่างที่มีจุดเกาะของเอ็น CC"
                  }
                }
              },
              "illustrationId": "/images/neer_clavicle/neer_5.jpg",
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
