import type { BoneData } from "../../types";

export const forearmBone: BoneData = {
  "id": "forearm",
  "name": {
    "en": "Radius & Ulna",
    "th": "กระดูกปลายแขน"
  },
  "description": {
    "en": "Forearm bones",
    "th": "กระดูกปลายแขน (Radius และ Ulna)"
  },
  "pediatric": false,
  "regions": [
    {
      "id": "radial-head",
      "name": {
        "en": "Radial Head",
        "th": "หัวกระดูกข้อศอก (Radial Head)"
      },
      "regionConcept": {
        "physicalExam": [
          {
            "sign": "Pronation & Supination Mechanical Block",
            "positive": {
              "en": "Mechanical block or painful restriction during passive forearm rotation due to displaced articular fragment",
              "th": "ขัดหมุนแขนเข้า-ออกไม่ได้เนื่องจากชิ้นกระดูกหักหลุดไปขัดผิวข้อ"
            }
          },
          {
            "sign": "Lateral Elbow Radial Head Tenderness",
            "positive": {
              "en": "Point tenderness over radiocapitellar joint during palpation and rotation",
              "th": "กดเจ็บชัดเจนบริเวณหัวกระดูกเรเดียสซีกนอกของข้อศอกขณะหมุนแขน"
            }
          },
          {
            "sign": "DRUJ & Interosseous Membrane Pain (Essex-Lopresti Screen)",
            "positive": {
              "en": "Tenderness along forearm interosseous membrane and wrist DRUJ indicating longitudinal forearm instability",
              "th": "เจ็บบริเวณเยื่อระหว่างกระดูก forearm และข้อ DRUJ ที่ข้อมือ บ่งชี้ภาวะ Essex-Lopresti"
            }
          }
        ],
        "acceptableAlignment": [
          {
            "parameter": {
              "en": "Articular Step-off / Displacement",
              "th": "ระดับขั้นของผิวข้อ (Articular step-off)"
            },
            "threshold": "< 2 mm",
            "note": {
              "en": "Displacement > 2 mm or mechanical block to rotation is an indication for surgery",
              "th": "การเคลื่อน > 2 มม. หรือมีอาการขัดหมุนแขนไม่ได้ เป็นข้อบ่งชี้ผ่าตัด"
            }
          }
        ],
        "redFlags": [
          {
            "en": "Essex-Lopresti Injury (Radial head fracture + Interosseous membrane tear + DRUJ dislocation; NEVER excise radial head without prosthetic replacement)",
            "th": "ภาวะบาดเจ็บ Essex-Lopresti (กระดูกหัวเรเดียสหัก + เยื่อระหว่างกระดูกฉีก + ข้อ DRUJ หลุด; ห้ามตัดหัวกระดูกเรเดียสออกโดยไม่ใส่ข้อเทียมเด็ดขาด)"
          }
        ],
        "associatedInjuries": [
          {
            "injury": {
              "en": "MCL Tear & Elbow Dislocation (Terrible Triad)",
              "th": "เส้นเอ็นข้อศอกด้านในขาดและข้อศอกหลุด (Terrible Triad of the Elbow)"
            },
            "trigger": {
              "en": "Evaluate for coronoid fracture, medial elbow pain, and posterior instability",
              "th": "ตรวจหาอาการเจ็บศอกด้านใน รอยหัก Coronoid และภาวะข้อศอกหลุดลอย"
            }
          }
        ],
        "clinicalPearls": [
          {
            "en": "Mason Type I (undisplaced / <2mm step-off): Conservative management with short sling immobilization (2-3 days) followed by early active range of motion.",
            "th": "Mason Type I (ไม่เคลื่อน / ขั้นผิวข้อ <2 มม.): รักษาแบบประคับประคอง ใส่ผ้าคล้องแขนสั้นๆ (2-3 วัน) แล้วเริ่มฝึกขยับข้อศอกทันที"
          },
          {
            "en": "Mason Type II (displaced >2mm or mechanical block): Open Reduction and Internal Fixation (ORIF) with low-profile mini-fragment screws or plates.",
            "th": "Mason Type II (เคลื่อน >2 มม. หรือมีขัดหมุนแขน): ผ่าตัดยึดตรึงด้วยสกรูหรือแผ่นเหล็กขนาดเล็ก (ORIF)"
          },
          {
            "en": "Mason Type III (comminuted, non-reconstructable): Radial head excision with immediate Radial Head Arthroplasty (prosthesis) if elbow stability or interosseous membrane is compromised.",
            "th": "Mason Type III (แตกละเอียดซ่อมไม่ได้): ผ่าตัดตัดหัวกระดูกออกและใส่ข้อหัวกระดูกเรเดียสเทียม (Arthroplasty) หากมีภาวะข้อศอกไม่มั่นคงร่วมด้วย"
          }
        ]
      },
      "classifications": [
        {
          "system": "Mason",
          "fullName": {
            "en": "Mason Classification for Radial Head Fractures",
            "th": "การจำแนกกระดูกหัวข้อศอกหักแบบ Mason"
          },
          "description": {
            "en": "Classification of radial head fractures into 4 types based on fracture displacement, degree of comminution, mechanical block to rotation, and associated elbow dislocation.",
            "th": "ระบบจำแนกกระดูกหัวกระดูกปลายแขนด้านนอก (Radial head) หักแบ่งเป็น 4 ชนิด ตามการเคลื่อนของชิ้นกระดูก การแตกละเอียด การติดขัดในการหมุนแขน และการหลุดของข้อศอก"
          },
          "concept": {
            "title": {
              "en": "Mason Radial Head Clinical Concept",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ Mason Classification"
            },
            "corePrinciple": {
              "en": "Radial head acts as a key secondary stabilizer of the elbow (preventing valgus and longitudinal instability). Management balances preserving forearm rotation against restoring stability to prevent valgus instability and proximal radial migration.",
              "th": "หัวกระดูกเรเดียส (Radial head) ทำหน้าที่เป็นตัวสร้างความมั่นคงรองสำคัญด้าน Valgus และแนวแกนยาวของข้อศอก การรักษาต้องรักษาสมดุลระหว่างการหมุนของแขนและการสร้างความมั่นคงของข้อ"
            },
            "rules": [
              {
                "en": "Type I: Displaced <2 mm, <30% articular surface involvement, NO mechanical block to rotation.",
                "th": "Type I: เคลื่อนตัว <2 มม., กินพื้นที่ผิวข้อ <30%, ไม่มีอาการข้อขัดหมุนแขน"
              },
              {
                "en": "Type II: Displaced ≥2 mm, >30% articular involvement, OR presence of mechanical block to pronation/supination.",
                "th": "Type II: เคลื่อนตัว ≥2 มม., กินพื้นที่ผิวข้อ >30%, หรือมีอาการข้อขัดหมุนแขน"
              },
              {
                "en": "Type III: Severely comminuted fracture involving the entire radial head and neck.",
                "th": "Type III: กระดูกแตกละเอียดหลายชิ้นครอบคลุมทั้งหัวและคอกระดูกเรเดียส"
              },
              {
                "en": "Type IV: Any radial head fracture (Type I-III) COMBINED with gross ulnohumeral elbow dislocation.",
                "th": "Type IV: รอยหักหัวเรเดียสแบบใดก็ได้ ร่วมกับข้อศอก (Ulnohumeral) หลุดเคลื่อน"
              }
            ],
            "clinicalSignificance": [
              {
                "en": "Type I: Non-operative treatment with short sling immobilization (2-7 days) followed by early active ROM (excellent outcome >95%).",
                "th": "Type I: รักษาแบบไม่ผ่าตัด ใส่ Sling สั้นๆ 2-7 วัน แล้วเริ่มฝึกขยับข้อทันที (ผลดี >95%)"
              },
              {
                "en": "Type II: Operative ORIF with headless compression screws or mini-plates placed in the Safe Zone.",
                "th": "Type II: ผ่าตัด ORIF ยึดด้วย Headless screws ใน Safe Zone เพื่อคืนความเรียบผิวข้อ"
              },
              {
                "en": "Type III: Radial head excision with immediate Radial Head Arthroplasty (prosthesis) if elbow or interosseous membrane is unstable.",
                "th": "Type III: ผ่าตัดตัดหัวกระดูกออกและใส่ข้อหัวกระดูกเรเดียสเทียม (Arthroplasty) หากมีภาวะข้อศอกไม่มั่นคง"
              },
              {
                "en": "Type IV: Emergency joint reduction + Radial Head ORIF/Arthroplasty + LCL/MCL ligamentous reconstruction.",
                "th": "Type IV: ผ่าตัดจัดข้อศอกเข้าที่ฉุกเฉิน + ใส่ข้อเทียม/ORIF ร่วมกับซ่อมแซมเส้นเอ็น LCL/MCL"
              },
              {
                "en": "CRITICAL PITFALL: NEVER perform simple radial head excision alone if interosseous membrane (Essex-Lopresti) or LCL is torn, to prevent severe proximal radial migration.",
                "th": "ข้อควรระวังสำคัญ: ห้ามตัดหัวกระดูกเรเดียสออกโดยไม่ใส่ข้อเทียมเด็ดขาดในเคสที่มีเยื่อ Interosseous membrane ขาด (Essex-Lopresti) หรือเอ็นขาด"
              }
            ]
          },
          "investigations": [
            {
              "name": "AP Elbow View",
              "details": {
                "en": "Standard AP view of the elbow. Evaluates radiocapitellar line alignment (radial head line must pass through capitellum in all views) and step-off.",
                "th": "ภาพเอกซเรย์ข้อศอกท่า AP มาตรฐาน ประเมินแนวเส้น Radiocapitellar line (หัว Radius ต้องชี้ตรงผ่าน Capitellum เสมอ) และวัดระยะขั้นบันได"
              },
              "imageUrl": "/images/investigations/forearm/ap_elbow_view.jpg"
            },
            {
              "name": "Lateral Elbow View",
              "details": {
                "en": "True lateral view with 90° elbow flexion. Crucial for assessing fat pad signs (anterior sail sign / posterior fat pad sign) indicating occult hemarthrosis.",
                "th": "ภาพเอกซเรย์ข้อศอกท่าด้านข้างงอ 90 องศา สำคัญมากในการดูเงาไขมัน (Sail sign / Posterior fat pad) ที่บอกถึงภาวะมีเลือดออกในช่องข้อศอก"
              },
              "imageUrl": "/images/investigations/forearm/lateral_elbow_view.jpg"
            },
            {
              "name": "Greenspan View (Radial Head Capitellar View)",
              "details": {
                "en": "45° oblique view directed at radiocapitellar joint. Projects the radial head clearly off the coronoid process without bone overlap.",
                "th": "ภาพเอกซเรย์เอียงหลอดรังสี 45 องศา (Greenspan View) เพื่อแยกหัวกระดูก Radius ออกจาก Coronoid โดยไม่มีกระดูกทับซ้อน"
              },
              "imageUrl": "/images/investigations/forearm/greenspan_view.jpg"
            }
          ],
          "types": [
            {
              "type": "Mason I",
              "name": {
                "en": "Mason Type I (Non-displaced)",
                "th": "Mason Type I (ไม่เคลื่อนตัว - ไม่ติดขัดการหมุน)"
              },
              "description": {
                "en": "Small non-displaced or minimally displaced fracture (<2 mm displacement)\nNo mechanical block to passive or active forearm pronation/supination\nIntact articular cortical margin\nHigh success rate with conservative treatment",
                "th": "รอยหักขนาดเล็กที่ไม่เคลื่อนตัว หรือเคลื่อนตัวน้อยมาก (< 2 มม.)\nไม่มีการติดขัดในการหมุนคว่ำ-หงายแขน (No mechanical block)\nผิวกระดูกขอบข้อต่อยังสมบูรณ์ดี\nอัตราการรักษาสำเร็จสูงมากโดยไม่ต้องผ่าตัด"
              },
              "moi": {
                "en": "Fall on outstretched hand (FOOSH) with slightly flexed elbow and pronated forearm.",
                "th": "การล้มเอาหัตถ์ยันพื้น (FOOSH) ขณะข้อศอกงอเล็กน้อยและคว่ำแขน"
              },
              "treatment": {
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED TREATMENT. Short-term sling immobilization for 2-7 days for comfort, followed by early active motion (pronation/supination) as pain tolerates. Excellent outcome (>95%).",
                  "th": "แนะนำให้รักษาแบบไม่ผ่าตัด ใส่สายคล้องแขน (Sling) ช่วงสั้นๆ 2-7 วันบรรเทาปวด แล้วเริ่มขยับหมุนข้อมือ/ข้อศอกทันที อัตราฟื้นตัวสูงมาก (>95%)"
                },
                "operative": {
                  "en": "Not indicated for true Type I fractures.",
                  "th": "ไม่มีข้อบ่งชี้ในการผ่าตัด"
                }
              },
              "illustrationId": "/images/radial_head/mason_1.png",
              "xrayDescription": {
                "en": "Faint fracture line across radial head with <2mm displacement. Positive anterior sail sign often present.",
                "th": "เห็นรอยหักจางๆ พาดผ่านหัวกระดูก Radius โดยเคลื่อนตัว < 2 มม. มักพบเงาไขมัน Sail sign ด้านหน้า"
              }
            },
            {
              "type": "Mason II",
              "name": {
                "en": "Mason Type II (Displaced >2mm / Marginal Block)",
                "th": "Mason Type II (เคลื่อนตัว >2มม. - อาจมีข้อขัด)"
              },
              "description": {
                "en": "Displaced marginal fracture (>2 mm displacement or >30% of articular surface)\nMay cause mechanical block to forearm rotation\nFragment is usually 1-2 large pieces suitable for ORIF",
                "th": "รอยหักบริเวณขอบข้อต่อที่เคลื่อนตัว (> 2 มม. หรือกินพื้นที่ผิวข้อ > 30%)\nอาจพบอาการข้อศอกขัด หมุนคว่ำหงายแขนไม่ได้สะดุด\nชิ้นกระดูกส่วนใหญ่เป็นชิ้นใหญ่ 1-2 ชิ้น เหมาะสำหรับการผ่าตัดยึดกระดูก"
              },
              "moi": {
                "en": "Direct axial load combined with valgus force at elbow during fall.",
                "th": "แรงกดตามแนวแกนร่วมกับแรงบิดเอียงออกด้านนอก (Valgus force) ขณะล้มยันพื้น"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "Indicated ONLY if there is NO mechanical block to rotation during physical examination under local anesthesia.",
                  "th": "พิจารณาเฉพาะกรณีที่ตรวจร่างกายทดสอบการหมุนคว่ำหงายแขนแล้วลื่นไหลดี ไม่มีอาการข้อศอกขัด"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT IF MECHANICAL BLOCK PRESENT OR >30% DISPLACED. Open reduction and internal fixation (ORIF) with mini-screws (1.5mm - 2.0mm) or headless compression screws placed in the safe zone.",
                  "th": "แนะนำผ่าตัด (ORIF) หากมีอาการข้อศอกขัด หรือกระดูกเคลื่อน > 30% โดยยึดด้วยสกรูจมขนาดเล็ก (Mini/Headless Screws) บริเวณ Safe zone"
                }
              },
              "illustrationId": "/images/radial_head/mason_2.png",
              "xrayDescription": {
                "en": "Displaced marginal fragment >2mm with step-off visible on AP and Greenspan views.",
                "th": "เห็นชิ้นกระดูกขอบหัว Radius เคลื่อนตัว > 2 มม. พร้อมรอยเหลื่อมขั้นบันไดในท่า AP และ Greenspan view"
              }
            },
            {
              "type": "Mason III",
              "name": {
                "en": "Mason Type III (Comminuted Entire Head)",
                "th": "Mason Type III (แตกละเอียดทั้งหัวกระดูก - ข้อขัดรุนแรง)"
              },
              "description": {
                "en": "Severely comminuted fracture involving the entire radial head and neck\nSevere mechanical block to pronation/supination\nHigh association with interosseous membrane or collateral ligament tears (Essex-Lopresti / LUCL)",
                "th": "กระดูกแตกละเอียดเป็นหลายชิ้นครอบคลุมทั้งหัวและคอกระดูก Radius\nเกิดอาการข้อศอกขัดรุนแรง หมุนแขนไม่ได้\nมักพบร่วมกับการฉีกขาดของเอ็นยึดเยื่อกลางปลายแขน (Essex-Lopresti) หรือเอ็นยึดข้อศอก"
              },
              "moi": {
                "en": "High-energy axial load with severe valgus strain on flexed elbow.",
                "th": "แรงกดตามแนวแกนพลังงานสูงร่วมกับแรงบิด Valgus รุนแรงเข้าที่ข้อศอก"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "CONTRAINDICATED. Leads to severe elbow stiffness, chronic pain, and nonunion.",
                  "th": "ห้ามใช้การรักษาด้วยวิธีนี้ ผลลัพธ์แย่มาก ทำให้ข้อศอกยึดติดและปวดเรื้อรัง"
                },
                "operative": {
                  "en": "MANDATORY OPERATIVE TREATMENT. Radial head excision (resection) + primary Radial Head Arthroplasty (prosthetic replacement) if elbow or interosseous membrane is unstable. ORIF only if reconstructible into <3 main pieces.",
                  "th": "ผ่าตัดฉุกเฉิน (Mandatory Surgery) ตัดชิ้นส่วนหัวกระดูกที่แตกออก (Excision) และใส่หัวข้อศอกเทียม (Radial Head Arthroplasty) เพื่อรักษาความมั่นคงข้อศอก"
                }
              },
              "illustrationId": "/images/radial_head/mason_3.png",
              "xrayDescription": {
                "en": "Multiple comminuted fragments of the radial head with loss of normal articular contour and neck fracture.",
                "th": "ชิ้นกระดูกแตกละเอียดกระจายหลายชิ้น บริเวณหัวและคอกระดูก Radius สูญเสียรูปทรงข้อต่อ"
              }
            },
            {
              "type": "Mason IV",
              "name": {
                "en": "Mason Type IV (Fracture + Elbow Dislocation)",
                "th": "Mason Type IV (กระดูกหักร่วมกับข้อศอกหลุด - Unstable)"
              },
              "description": {
                "en": "Radial head fracture (Mason I, II, or III) COMBINED with dislocation of the elbow joint\nSevere multi-ligamentous disruption (LCL, MCL, or Terrible Triad pattern)\nHighly unstable joint requiring comprehensive reconstruction",
                "th": "กระดูกหัว Radius หัก ร่วมกับภาวะข้อศอกเคลื่อนหลุดหลุดออกจากกัน (Elbow Dislocation)\nเอ็นยึดข้อศอกฉีกขาดรุนแรงรอบทิศทาง (LCL/MCL) หรือเป็นกลุ่มอาการ Terrible Triad\nข้อต่อไม่มีความมั่นคงอย่างยิ่ง ต้องการการผ่าตัดจัดและซ่อมแซมเอ็นฉุกเฉิน"
              },
              "moi": {
                "en": "High-energy traumatic dislocation of the elbow joint with axial loading.",
                "th": "การบาดเจ็บพลังงานสูงรุนแรงจนข้อศอกหลุดลอย ร่วมกับแรงอัดตามแนวแกน"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "CONTRAINDICATED. Extremely high risk of recurrent dislocation and joint destruction.",
                  "th": "ห้ามใช้การรักษาด้วยวิธีนี้ ข้อศอกจะหลุดซ้ำและทำลายผิวข้ออย่างรุนแรง"
                },
                "operative": {
                  "en": "EMERGENCY OPERATIVE RECONSTRUCTION. Urgent reduction of elbow dislocation, followed by Radial Head Arthroplasty/ORIF + LCL complex repair ± hinged external fixator to restore stability.",
                  "th": "ผ่าตัดฉุกเฉินจัดข้อศอกที่หลุดให้เข้าที่ ผ่าตัดเปลี่ยนหัวกระดูกเทียม/ORIF ร่วมกับผ่าตัดซ่อมแซมชุดเส้นเอ็นด้านข้าง (LCL repair) เพื่อคืนความมั่นคง"
                }
              },
              "illustrationId": "/images/radial_head/mason_4.png",
              "xrayDescription": {
                "en": "Radial head fracture associated with gross posterior or lateral dislocation of the ulnohumeral and radiocapitellar joints.",
                "th": "กระดูกหัว Radius หักร่วมกับข้อศอกเคลื่อนหลุดไปด้านหลังหรือด้านข้างอย่างชัดเจน"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "olecranon",
      "name": {
        "en": "Olecranon",
        "th": "ข้อศอก (Olecranon)"
      },
      "regionConcept": {
        "physicalExam": [
          {
            "sign": "Extensor Mechanism Integrity (Active Extension)",
            "positive": {
              "en": "Inability to actively extend elbow against gravity indicating complete loss of extensor apparatus",
              "th": "ไม่สามารถเหยียดข้อศอกตรงต้านแรงโน้มถ่วงได้ บ่งชี้ว่าเอ็น Triceps ขาดและกลไกเหยียดศอกถูกทำลาย"
            }
          },
          {
            "sign": "Palpable Posterior Sulcus Defect",
            "positive": {
              "en": "Palpable gap or step-off along the posterior olecranon subcutaneous border",
              "th": "คลำได้ร่องบุ๋มหรือช่องว่างบริเวณปุ่มข้อศอกด้านหลัง"
            }
          },
          {
            "sign": "Ulnar Nerve Screening",
            "positive": {
              "en": "Paresthesia in 5th finger / ulnar half of 4th finger, or weakness in hand intrinsic muscles",
              "th": "อาการชาที่นิ้วก้อยและนิ้วนางซีกนอก หรือกล้ามเนื้อในมืออ่อนแรง จากเส้นประสาท Ulnar ถูกรบกวน"
            }
          }
        ],
        "acceptableAlignment": [
          {
            "parameter": {
              "en": "Articular Displacement / Step-off",
              "th": "ระยะหดแยกหรือระดับขั้นผิวข้อ"
            },
            "threshold": "0 mm - 2 mm",
            "note": {
              "en": "Non-displaced fractures (<2mm displacement with intact extensor mechanism) can be treated conservatively in a splint",
              "th": "กระดูกหักที่ไม่เคลื่อน (<2 มม. และเหยียดศอกได้) สามารถรักษาด้วยเฝือก"
            }
          }
        ],
        "redFlags": [
          {
            "en": "Inability to Actively Extend Elbow against Gravity (Absolute indication for operative repair via Tension Band Wiring or Olecranon Plate ORIF)",
            "th": "ไม่สามารถเหยียดข้อศอกตรงต้านแรงโน้มถ่วงได้ (ข้อบ่งชี้เด็ดขาดในการผ่าตัดซ่อมดามด้วย Tension Band Wiring หรือ Plate ORIF)"
          }
        ],
        "associatedInjuries": [
          {
            "injury": {
              "en": "Radial Head Fracture & Anterior Elbow Dislocation (Monteggia Variant)",
              "th": "กระดูกหัวเรเดียสหักร่วมและข้อศอกหลุดไปด้านหน้า"
            },
            "trigger": {
              "en": "Always evaluate radiocapitellar joint alignment on lateral elbow radiograph",
              "th": "ตรวจเช็กแนวข้อ Radiocapitellar ในภาพเอกซเรย์ท่า Lateral ทุกครั้ง"
            }
          }
        ],
        "clinicalPearls": [
          {
            "en": "Simple transverse non-comminuted olecranon fractures (Mayo Type IIA) are ideally fixed with Tension Band Wiring (TBW) to convert tensile triceps forces into articular compressive forces.",
            "th": "กระดูกโอเลครานอนหักแนวขวาง 2 ชิ้นไม่แตกละเอียด (Mayo Type IIA) เหมาะที่สุดกับการรักษาด้วย Tension Band Wiring (TBW) เปลี่ยนแรงดึงเป็นแรงอัด"
          },
          {
            "en": "Comminuted or oblique olecranon fractures (Mayo Type IIB/III) require Olecranon Contour Locking Plating (LCP); tension band wiring is contraindicated as it causes fracture compression and joint narrowing.",
            "th": "กรณีแตกละเอียดหรือแนวเฉียง (Mayo Type IIB/III) ต้องใช้แผ่นเหล็กล็อคดาม (Plating); ห้ามใช้ Tension band wiring เด็ดขาดเพราะจะทำให้รอยหักยุบตัว"
          },
          {
            "en": "Early post-operative range of motion is critical to prevent elbow stiffness, which is the most common long-term complication.",
            "th": "การเริ่มฝึกขยับข้อศอกโดยเร็วหลังผ่าตัดมีความสำคัญสูงสุดในการป้องกันภาวะข้อศอกติด"
          }
        ]
      },
      "classifications": [
        {
          "system": "Mayo",
          "fullName": {
            "en": "Mayo Classification for Olecranon Fractures",
            "th": "การจำแนกกระดูกข้อศอกหักแบบ Mayo"
          },
          "description": {
            "en": "Classification of olecranon fractures based on displacement, comminution, and ulnohumeral joint stability, determining operative approach (Tension Band Wiring vs Plating vs Arthroplasty).",
            "th": "ระบบจำแนกกระดูกข้อศอก (Olecranon) หักแบ่งตามการเคลื่อนตัว การแตกละเอียด และความมั่นคงของข้อต่อ Ulnohumeral ช่วยในการเลือกเทคนิคผ่าตัด (Tension Band Wiring หรือ Plate)"
          },
          "concept": {
            "title": {
              "en": "Mayo Olecranon Clinical Concept",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ Mayo Classification"
            },
            "corePrinciple": {
              "en": "Categorizes olecranon fractures by displacement (>2 mm), comminution, and ulnohumeral joint stability to directly guide surgical implant selection (Tension Band Wiring vs Plating).",
              "th": "จำแนกกระดูก Olecranon หักตามการเคลื่อนตัว (>2 มม.) การแตกละเอียด และความมั่นคงของข้อ Ulnohumeral เพื่อเลือกอุปกรณ์ผ่าตัด (Tension Band Wiring หรือ แผ่นเหล็กล็อค)"
            },
            "rules": [
              {
                "en": "Type I (Non-displaced <2 mm): Intact extensor mechanism and stable ulnohumeral joint (IA = simple, IB = comminuted).",
                "th": "Type I (ไม่เคลื่อน <2 มม.): กลไกเหยียดศอกสมบูรณ์ และข้อ Ulnohumeral มั่นคง (IA = ไม่แตกละเอียด, IB = แตกละเอียด)"
              },
              {
                "en": "Type II (Displaced ≥2 mm, Stable joint): Subdivided into IIA (non-comminuted) and IIB (comminuted).",
                "th": "Type II (เคลื่อน ≥2 มม., ข้อศอกมั่นคง): แบ่งเป็น IIA (ไม่แตกละเอียด) และ IIB (แตกละเอียด)"
              },
              {
                "en": "Type III (Displaced ≥2 mm, Unstable / Fracture-Dislocation): Subdivided into IIIA (non-comminuted) and IIIB (comminuted).",
                "th": "Type III (เคลื่อน ≥2 มม., ข้อศอกไม่มั่นคง/หลุด): แบ่งเป็น IIIA (ไม่แตกละเอียด) และ IIIB (แตกละเอียด)"
              }
            ],
            "clinicalSignificance": [
              {
                "en": "Type I: Conservative management with long arm splint/cast flexed 45-90° for 2-3 weeks.",
                "th": "Type I: รักษาแบบไม่ผ่าตัด ใส่เฝือกยาวเหนือศอกงอ 45-90° นาน 2-3 สัปดาห์"
              },
              {
                "en": "Type IIA: Tension Band Wiring (TBW) converts triceps tensile force into joint compressive force.",
                "th": "Type IIA: ผ่าตัด Tension Band Wiring (TBW) เปลี่ยนแรงดึงของ Triceps ให้เป็นแรงอัดกระชับผิวข้อ"
              },
              {
                "en": "Type IIB: Contour Locking Plate ORIF mandatory. TBW is CONTRAINDICATED because it compresses comminuted fragments into the joint space.",
                "th": "Type IIB: ผ่าตัด ORIF ด้วย Contour Locking Plate (ห้ามทำ TBW เด็ดขาดเพราะจะทำให้ข้อศอกแคบสั้น)"
              },
              {
                "en": "Type III (IIIA/IIIB): High-complexity ORIF with contour locking plate + coronoid fixation ± collateral ligament repair.",
                "th": "Type III: ผ่าตัด ORIF ด้วยแผ่นเหล็กล็อคหนา + ยึดกระดูก Coronoid ± ซ่อมแซมเส้นเอ็นรอบข้อ"
              },
              {
                "en": "CRITICAL PITFALL: Do NOT use Tension Band Wiring for comminuted or oblique olecranon fractures (Type IIB/III); tensile wires crush fragments into the joint space.",
                "th": "ข้อควรระวังสำคัญ: ห้ามใช้ Tension Band Wiring ในรอยหัก Olecranon ชนิดแตกละเอียดหรือหักเฉียง (Type IIB/III) เด็ดขาด"
              }
            ]
          },
          "investigations": [
            {
              "name": "Lateral Elbow View",
              "details": {
                "en": "True 90° flexed lateral view of the elbow. Essential to evaluate fracture displacement, articular step-off, comminution, and ulnohumeral joint subluxation.",
                "th": "ภาพเอกซเรย์ข้อศอกท่าด้านข้างงอ 90 องศาแท้ จำเป็นอย่างยิ่งในการประเมินการเคลื่อนตัว รอยเหลื่อมผิวข้อ การแตกละเอียด และการหลุดของข้อศอก"
              },
              "imageUrl": "/images/investigations/forearm/lateral_elbow_view.jpg"
            },
            {
              "name": "AP Elbow View",
              "details": {
                "en": "Standard AP view of the elbow. Assesses medial/lateral cortical involvement, coronoid process, and radial head alignment.",
                "th": "ภาพเอกซเรย์ข้อศอกท่า AP มาตรฐาน ประเมินขอบกระดูกด้านนอก/ใน รอยแตกพาดผ่าน Coronoid และแนวหัวกระดูก Radius"
              },
              "imageUrl": "/images/investigations/forearm/ap_elbow_view.jpg"
            },
            {
              "name": "Radiocapitellar / Oblique View",
              "details": {
                "en": "Oblique view to rule out associated radial head fracture or coronoid process fracture (Terrible Triad pattern).",
                "th": "ภาพเอกซเรย์ท่าเฉียงเพื่อตรวจหาภาวะกระดูกหัว Radius หัก หรือกระดูก Coronoid หักร่วมด้วย"
              },
              "imageUrl": "/images/investigations/forearm/ap_elbow_view.jpg"
            }
          ],
          "types": [
            {
              "type": "Mayo IA",
              "name": {
                "en": "Mayo Type IA (Non-displaced, Non-comminuted)",
                "th": "Mayo Type IA (ไม่เคลื่อนตัว, ไม่แตกละเอียด - มั่นคง)"
              },
              "description": {
                "en": "Simple non-displaced fracture line (<2 mm displacement)\nElbow joint is STABLE\nTriceps extensor mechanism remains intact\nExcellent response to non-operative treatment",
                "th": "รอยหักขวางเรียบๆ ที่ไม่เคลื่อนตัว (< 2 มม.)\nข้อต่อข้อศอกมีความมั่นคงสูง (Stable)\nกลไกเหยียดข้อศอกของเอ็น Triceps ยังสมบูรณ์ดี\nตอบสนองต่อการรักษาแบบไม่ผ่าตัดได้ดีเยี่ยม"
              },
              "moi": {
                "en": "Direct low-energy blow to the posterior elbow during a fall.",
                "th": "แรงกระแทกโดยตรงพลังงานต่ำเข้าที่ด้านหลังข้อศอกขณะล้ม"
              },
              "treatment": {
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED TREATMENT. Long arm posterior splint/cast with elbow flexed 45-90° for 2-3 weeks, followed by progressive active flexion/extension. High union rate.",
                  "th": "แนะนำรักษาแบบไม่ผ่าตัด ใส่เฝือกหลังยาว (Long arm splint) งอศอก 45-90 องศา นาน 2-3 สัปดาห์ แล้วเริ่มฝึกเหยียดงอข้อศอก อัตรากระดูกติดสูงมาก"
                },
                "operative": {
                  "en": "Rarely needed; only if secondary displacement occurs during follow-up.",
                  "th": "แทบไม่ต้องผ่าตัด พิจารณาเฉพาะกรณีที่กระดูกเคลื่อนตัวเพิ่มขึ้นระหว่างนัดติดตาม"
                }
              },
              "illustrationId": "/images/olecranon/mayo_1a.png",
              "xrayDescription": {
                "en": "Faint non-displaced transverse fracture line on lateral view with intact ulnohumeral alignment.",
                "th": "เห็นรอยหักแนวขวางจางๆ ในท่าด้านข้าง โดยไม่มีการเคลื่อนตัวและข้อศอกเรียงตัวปกติ"
              }
            },
            {
              "type": "Mayo IB",
              "name": {
                "en": "Mayo Type IB (Non-displaced, Comminuted)",
                "th": "Mayo Type IB (ไม่เคลื่อนตัว, แตกละเอียด - มั่นคง)"
              },
              "description": {
                "en": "Comminuted fracture line without significant displacement (<2 mm displacement)\nElbow joint is STABLE\nRequires close monitoring to ensure fragments do not displace under triceps pull",
                "th": "รอยหักแตกละเอียดเป็นหลายชิ้นแต่ไม่เคลื่อนตัว (< 2 มม.)\nข้อต่อข้อศอกยังคงมีความมั่นคงดี\nต้องติดตามเอกซเรย์ใกล้ชิดเพื่อป้องกันกระดูกเคลื่อนจากแรงดึง Triceps"
              },
              "moi": {
                "en": "Direct impact to the posterior elbow with comminution.",
                "th": "แรงกระแทกโดยตรงเข้าที่ด้านหลังข้อศอกจนกระดูกแตกละเอียด"
              },
              "treatment": {
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED INITIAL TREATMENT. Long arm cast immobilization with close weekly radiographic follow-up to check for displacement.",
                  "th": "แนะนำรักษาแบบไม่ผ่าตัดเป็นอันดับแรก ใส่เฝือกยาวเหนือศอก นัดเอกซเรย์ติดตามทุกสัปดาห์เพื่อป้องกันกระดูกเคลื่อน"
                },
                "operative": {
                  "en": "Indicated if fragments displace during conservative treatment.",
                  "th": "ผ่าตัดเฉพาะกรณีที่ชิ้นกระดูกเริ่มเคลื่อนตัวหลุดออกจากกัน"
                }
              },
              "illustrationId": "/images/olecranon/mayo_1b.png",
              "xrayDescription": {
                "en": "Comminuted fracture lines without articular step-off or ulnohumeral subluxation.",
                "th": "รอยหักแตกละเอียดหลายชิ้นแต่ไม่มีรอยเกยขั้นบันไดบนผิวข้อ"
              }
            },
            {
              "type": "Mayo IIA",
              "name": {
                "en": "Mayo Type IIA (Displaced, Non-comminuted)",
                "th": "Mayo Type IIA (เคลื่อนตัว >2มม., ไม่แตกละเอียด - ข้อศอกมั่นคง)"
              },
              "description": {
                "en": "Displaced simple transverse/oblique fracture (>2 mm step-off)\nElbow joint is STABLE (no ulnohumeral subluxation/dislocation)\nClassic indication for Tension Band Wiring (TBW)",
                "th": "รอยหักแนวขวาง/เฉียงเรียบๆ ที่เคลื่อนตัวแยกออกจากกัน (> 2 มม.)\nข้อต่อข้อศอกยังมั่นคงดี (ไม่มีการหลุดของข้อ ulnohumeral)\nเป็นข้อบ่งชี้คลาสสิกสำหรับการผ่าตัดยึดด้วย Tension Band Wiring (TBW)"
              },
              "moi": {
                "en": "Sudden triceps muscle contraction combined with direct fall on elbow.",
                "th": "การหดตัวอย่างรุนแรงฉับพลันของกล้ามเนื้อ Triceps ร่วมกับแรงกระแทกหลังข้อศอก"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "Not recommended in active patients due to loss of triceps extension power and joint incongruity.",
                  "th": "ไม่แนะนำเนื่องจากจะทำให้สูญเสียแรงเหยียดข้อศอกและผิวข้อขรุขระ"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. Open reduction and internal fixation (ORIF) using Tension Band Wiring (TBW) with K-wires and figure-of-8 wire loop, converting tensile triceps forces into compressive forces.",
                  "th": "แนะนำผ่าตัด ORIF ด้วยวิธี Tension Band Wiring (TBW) ใช้ K-wires ร่วมกับลวดเหล็กเปลี่ยนแรงดึงของ Triceps ให้เป็นแรงอัดกระดูก"
                }
              },
              "illustrationId": "/images/olecranon/mayo_2a.png",
              "xrayDescription": {
                "en": "Displaced simple transverse fracture gap >2mm with intact ulnohumeral articulation.",
                "th": "เห็นช่องรอยหักแนวขวางอ้าแยก > 2 มม. ในท่าด้านข้าง โดยข้อ ulnohumeral ยังเข้าที่สมบูรณ์"
              }
            },
            {
              "type": "Mayo IIB",
              "name": {
                "en": "Mayo Type IIB (Displaced, Comminuted)",
                "th": "Mayo Type IIB (เคลื่อนตัว >2มม., แตกละเอียด - ข้อศอกมั่นคง)"
              },
              "description": {
                "en": "Displaced comminuted olecranon fracture\nElbow joint remains STABLE\nCONTRAINDICATION for Tension Band Wiring (TBW causes fracture collapse/shortening)\nRequires Anatomical Locking Plate fixation",
                "th": "รอยหักแตกละเอียดและเคลื่อนตัวแยกออกจากกัน\nข้อต่อข้อศอกยังคงมีความมั่นคงดี\nห้ามผ่าตัดด้วยวิธี TBW เด็ดขาด! (เนื่องจากจะทำให้กระดูกทรุดหดสั้น)\nจำเป็นต้องผ่าตัดดามด้วยแผ่นเหล็กล็อค (Anatomical Locking Plate)"
              },
              "moi": {
                "en": "High-energy direct crush or impact to the olecranon.",
                "th": "แรงกระแทกทับบดพลังงานสูงเข้าที่ปุ่มข้อศอก"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "CONTRAINDICATED.",
                  "th": "ห้ามใช้การรักษาด้วยวิธีนี้"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. ORIF with a contoured Olecranon Locking Compression Plate (LCP) and intra-fragmentary screws to restore trochlear notch anatomy.",
                  "th": "แนะนำผ่าตัด (ORIF) ดามด้วยแผ่นเหล็กล็อคข้อศอก (Olecranon LCP) เพื่อดึงรอยหักแตกละเอียดให้กลับเป็นทรง Trochlear notch"
                }
              },
              "illustrationId": "/images/olecranon/mayo_2b.png",
              "xrayDescription": {
                "en": "Comminuted displaced fracture of the olecranon with loss of trochlear notch continuity.",
                "th": "ชิ้นกระดูกแตกละเอียดและเคลื่อนตัวออกจากกัน เสียแนวกระดูก Trochlear notch"
              }
            },
            {
              "type": "Mayo IIIA",
              "name": {
                "en": "Mayo Type IIIA (Displaced, Non-comminuted, Unstable)",
                "th": "Mayo Type IIIA (เคลื่อนตัว, ไม่แตกละเอียด - ข้อศอกไม่มั่นคง/หลุด)"
              },
              "description": {
                "en": "Displaced simple fracture ASSOCIATED WITH ulnohumeral joint instability or dislocation (Fracture-Dislocation)\nForearm displaces anteriorly or posteriorly relative to the humerus\nRequires robust anatomical reconstruction to restore elbow stability",
                "th": "รอยหักเคลื่อนตัวร่วมกับภาวะข้อศอกหลุดหรือเสียความมั่นคง (Fracture-dislocation)\nปลายแขนเคลื่อนหลุดไปด้านหน้าหรือด้านหลังเมื่อเทียบกับกระดูก humerus\nต้องการการผ่าตัดจัดดามกระดูกที่แข็งแรงเพื่อคืนความมั่นคงให้ข้อศอก"
              },
              "moi": {
                "en": "High-energy fall or motor vehicle crash with combined axial and shearing forces.",
                "th": "อุบัติเหตุพลังงานสูงจากแรงอัดร่วมกับแรงเฉือนรุนแรงเข้าที่ข้อศอก"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "CONTRAINDICATED. Causes total elbow joint destruction and disability.",
                  "th": "ห้ามใช้การรักษาด้วยวิธีนี้ ผลลัพธ์แย่มาก เสี่ยงข้อศอกหลุดพิการ"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. Emergency joint reduction + ORIF with heavy pre-contoured locking plate ± collateral ligament repair.",
                  "th": "แนะนำผ่าตัดดึงข้อศอกเข้าที่ฉุกเฉิน + ดามแผ่นเหล็กล็อคหนาแน่น (ORIF) ร่วมกับผ่าตัดซ่อมแซมเส้นเอ็นข้อศอก"
                }
              },
              "illustrationId": "/images/olecranon/mayo_3a.png",
              "xrayDescription": {
                "en": "Olecranon fracture with gross anterior or posterior subluxation/dislocation of the forearm relative to distal humerus.",
                "th": "รอยหักข้อศอกร่วมกับการเคลื่อนหลุดไปด้านหน้าหรือหลังของกระดูกปลายแขน"
              }
            },
            {
              "type": "Mayo IIIB",
              "name": {
                "en": "Mayo Type IIIB (Displaced, Comminuted, Unstable)",
                "th": "Mayo Type IIIB (เคลื่อนตัว, แตกละเอียด - ข้อศอกไม่มั่นคง/หลุดรุนแรง)"
              },
              "description": {
                "en": "Displaced comminuted fracture with severe ulnohumeral joint instability/dislocation\nMost severe olecranon injury pattern\nHigh risk of stiffness, post-traumatic arthritis, and heterotopic ossification",
                "th": "รอยหักแตกละเอียดรุนแรงและเคลื่อนตัว ร่วมกับข้อศอกเคลื่อนหลุดอย่างสมบูรณ์\nเป็นการบาดเจ็บของข้อศอกที่รุนแรงที่สุด\nเสี่ยงสูงมากต่อภาวะข้อศอกยึดติด ข้อเสื่อม และหินปูนเกาะข้อ (Heterotopic Ossification)"
              },
              "moi": {
                "en": "Extreme high-energy trauma (motorcycle crash, fall from height).",
                "th": "การบาดเจ็บพลังงานสูงรุนแรงสุดขีด (อุบัติเหตุรถจักรยานยนต์ความเร็วสูง หรือตกจากที่สูง)"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "CONTRAINDICATED.",
                  "th": "ห้ามใช้การรักษาด้วยวิธีนี้"
                },
                "operative": {
                  "en": "MANDATORY HIGH-COMPLEXITY SURGERY. ORIF with dual plating or long olecranon locking plate, coronoid fixation, and LCL/MCL reconstruction ± hinged external fixator.",
                  "th": "ผ่าตัดซับซ้อนสูง (Mandatory ORIF) ดามแผ่นเหล็กคู่หรือแผ่นเหล็กยาว ยึดกระดูก Coronoid และซ่อมแซมเอ็นรอบข้อศอกทั้งหมด"
                }
              },
              "illustrationId": "/images/olecranon/mayo_3b.png",
              "xrayDescription": {
                "en": "Severe comminution of olecranon with total dislocation of ulnohumeral joint and associated soft tissue collapse.",
                "th": "กระดูกข้อศอกแตกละเอียดอย่างรุนแรง ร่วมกับข้อศอกหลุดหลุดออกจากกันสมบูรณ์"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "shaft",
      "name": {
        "en": "Forearm Shaft",
        "th": "แกนปลายแขน (Forearm Shaft)"
      },
      "regionConcept": {
        "physicalExam": [
          {
            "sign": "Posterior Interosseous Nerve (PIN) Function Test",
            "positive": {
              "en": "Inability to extend fingers at MP joints (finger drop) and thumb extension; preserved wrist extension with radial deviation (characteristic of PIN palsy in Monteggia)",
              "th": "ไม่สามารถกระดกนิ้วมือขึ้น (Finger drop) และกางนิ้วหัวแม่มือไม่ได้ แต่ยังกระดกข้อมือเฉียงได้ (พบใน PIN palsy จาก Monteggia)"
            }
          },
          {
            "sign": "Distal Radioulnar Joint (DRUJ) Instability (Piano Key Test)",
            "positive": {
              "en": "Prominence or excessive passive AP mobility of distal ulnar head relative to radius (Galeazzi fracture)",
              "th": "หัวกระดูกอัลนาร์ปูดขึ้นและขยับขึ้นลงคล้ายแป้นเปียโน (Piano Key Sign) บ่งชี้ข้อ DRUJ หลุดหลวมใน Galeazzi fracture"
            }
          },
          {
            "sign": "Forearm Compartment Turgor & Passive Stretch Pain",
            "positive": {
              "en": "Tense, firm forearm muscular compartments and severe pain exacerbated by passive finger extension",
              "th": "ช่องกล้ามเนื้อแขนบวมตึงแข็ง และปวดปวดทรมานมากเมื่อเหยียดนิ้วมือออก"
            }
          },
          {
            "sign": "Ulnar & Median Nerve Integrity",
            "positive": {
              "en": "Screen sensation at volar 1st web space (Median), 5th finger (Ulnar), and intrinsic hand motor strength",
              "th": "ตรวจความรู้สึกและกล้ามเนื้อมือของเส้นประสาท Ulnar และ Median"
            }
          }
        ],
        "acceptableAlignment": [
          {
            "parameter": {
              "en": "Adult Forearm Displacement / Angulation",
              "th": "ระยะเคลื่อนและมุมเอียงของ forearm ในผู้ใหญ่"
            },
            "threshold": "0 mm (Anatomical reduction mandatory)",
            "note": {
              "en": "Forearm functions as a bicondylar joint; 0 mm displacement and restoration of radial bow is required in adults to preserve rotation",
              "th": "กระดูก forearm ทำหน้าที่เสมือนข้อต่อคู่ จำเป็นต้องจัดกระดูกเข้าที่เรียบสมบูรณ์ 100% (0 มม.) และดัดส่วนโค้งของ Radius เพื่อคืนการหมุนแขน"
            }
          }
        ],
        "redFlags": [
          {
            "en": "Forearm Compartment Syndrome (Requires urgent volar and/or dorsal fasciotomy to prevent Volkmann's Ischemic Contracture)",
            "th": "ภาวะความดันในช่องกล้ามเนื้อแขนสูง (Compartment Syndrome) ต้องรีบผ่าตัดผ่าพืดผืนกล้ามเนื้อ (Fasciotomy) ฉุกเฉินเพื่อป้องกันมือหงิกเกร็ง (Volkmann's contracture)"
          },
          {
            "en": "Missed Monteggia Fracture-Dislocation (Failing to recognize radial head dislocation on lateral elbow radiograph)",
            "th": "การตรวจพลาดภาวะ Monteggia (ไม่ทันสังเกตหัวกระดูกเรเดียสหลุดในเอกซเรย์ท่า Lateral ทำให้ข้อศอกพิการถาวร)"
          },
          {
            "en": "Missed Galeazzi Fracture-Dislocation (Failing to evaluate DRUJ disruption in distal 1/3 radial shaft fractures)",
            "th": "การตรวจพลาดภาวะ Galeazzi (ไม่ได้ประเมินข้อ DRUJ หลุดในกระดูกเรเดียสส่วนปลายหัก)"
          }
        ],
        "associatedInjuries": [
          {
            "injury": {
              "en": "Monteggia Fracture-Dislocation",
              "th": "กระดูกอัลนาร์หักร่วมกับข้อหัวกระดูกเรเดียสหลุด (Monteggia)"
            },
            "trigger": {
              "en": "Ulnar shaft fracture + Radial head dislocation; ALWAYS trace radiocapitellar line on lateral X-ray",
              "th": "กระดูกอัลนาร์หัก + ข้อหัวเรเดียสหลุด; ต้องลากเส้น Radiocapitellar line ดูเสมอ"
            }
          },
          {
            "injury": {
              "en": "Galeazzi Fracture-Dislocation",
              "th": "กระดูกเรเดียสหักร่วมกับข้อ DRUJ หลุด (Galeazzi)"
            },
            "trigger": {
              "en": "Distal 1/3 radial shaft fracture + Distal Radioulnar Joint (DRUJ) dislocation",
              "th": "กระดูกเรเดียสส่วนปลายหัก + ข้อ DRUJ ที่ข้อมือหลุด"
            }
          }
        ],
        "clinicalPearls": [
          {
            "en": "Galeazzi fracture is known as the 'Fracture of Necessity' because conservative treatment leads to 100% failure rate; mandatory ORIF of the radius with 3.5mm LCP to indirectly reduce and stabilize the DRUJ.",
            "th": "Galeazzi fracture ได้ชื่อว่า 'Fracture of Necessity' เพราะใส่เฝือกล้มเหลว 100% จำเป็นต้องผ่าตัด ORIF กระดูกเรเดียสด้วยแผ่นเหล็ก 3.5 มม. เพื่อดึงข้อ DRUJ กลับเข้าที่"
          },
          {
            "en": "In Monteggia fractures, anatomical reduction and rigid plate fixation of the ulna almost always achieves spontaneous reduction of the radial head.",
            "th": "ใน Monteggia fracture การจัดผ่าตัดดามกระดูกอัลนาร์ให้ตรงเป๊ะจะช่วยให้หัวกระดูกเรเดียสเด้งกลับเข้าข้อได้เองโดยอัตโนมัติ"
          },
          {
            "en": "Restoration of the normal Radial Bow (biceps insertion to Lister's tubercle) is essential for regaining full forearm rotation.",
            "th": "การดัดคืนส่วนโค้งปกติของกระดูกเรเดียส (Radial Bow) เป็นสิ่งสำคัญที่สุดในการคืนพิสัยการหมุนแขนให้สมบูรณ์"
          }
        ]
      },
      "classifications": [
        {
          "system": "Eponyms",
          "fullName": {
            "en": "Eponymous Fractures",
            "th": "รูปแบบกระดูกหักเฉพาะชื่อ (Eponyms)"
          },
          "description": {
            "en": "Classic fracture-dislocations of the forearm shaft",
            "th": "กระดูกหักร่วมกับข้อเคลื่อนแบบเฉพาะของกระดูกปลายแขน"
          },
          "concept": {
            "title": {
              "en": "Forearm Shaft Eponyms Clinical Concept",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ Forearm Shaft Eponymous Fractures"
            },
            "corePrinciple": {
              "en": "The forearm acts as a 2-bone bi-articular ring (PRUJ and DRUJ linked by the IOM). A displaced single forearm bone fracture ALWAYS implies a hidden dislocation or disruption of the ring until proven otherwise.",
              "th": "แขนท่อนล่างทำงานเป็นวงแหวนข้อต่อคู่ (PRUJ และ DRUJ เชื่อมด้วย IOM) กระดูกชิ้นเดียวหักเคลื่อนตัวถือว่ามีข้อต่อหลุดร่วมด้วยเสมอจนกว่าจะพิสูจน์ได้เป็นอื่น"
            },
            "rules": [
              {
                "en": "Monteggia Fracture-Dislocation: Proximal 1/3 Ulna fracture + Radial head (PRUJ) dislocation.",
                "th": "Monteggia Fracture-Dislocation: กระดูก Ulna ส่วนโคนหัก + หัว Radius ที่ข้อศอกหลุด (Bado I-IV)"
              },
              {
                "en": "Galeazzi Fracture-Dislocation: Distal 1/3 Radius fracture + DRUJ (wrist) dislocation/instability.",
                "th": "Galeazzi Fracture-Dislocation: กระดูก Radius ส่วนปลายหัก + ข้อ DRUJ ที่ข้อมือหลุด"
              },
              {
                "en": "Both-bone Forearm Fracture: Fractures involving both radial and ulnar shafts.",
                "th": "Both-bone Forearm Fracture: กระดูกหักทั้ง Radius และ Ulna"
              },
              {
                "en": "Essex-Lopresti Injury: Radial Head fracture + Interosseous Membrane (IOM) tear + DRUJ dislocation.",
                "th": "Essex-Lopresti Injury: หัว Radius หัก + เยื่อ IOM ขาด + ข้อ DRUJ ที่ข้อมือหลุด"
              }
            ],
            "clinicalSignificance": [
              {
                "en": "Monteggia: Operative ORIF of Ulna anatomical length and alignment with 3.5mm LCP; radial head usually reduces spontaneously.",
                "th": "Monteggia: ผ่าตัด ORIF กระดูก Ulna คืนความยาวและแนวเดิม แล้วหัว Radius จะเข้าที่เอง"
              },
              {
                "en": "Galeazzi ('Fracture of Necessity'): 100% failure rate with casting in adults. Mandatory ORIF of Radius to restore Radial Bow; evaluate DRUJ stability.",
                "th": "Galeazzi ('Fracture of Necessity'): ใส่เฝือกล้มเหลว 100% ในผู้ใหญ่ ต้องผ่าตัด ORIF กระดูก Radius คืนความยาวและส่วนโค้ง Radial Bow แล้วทดสอบความมั่นคงข้อ DRUJ"
              },
              {
                "en": "Both-bone: Operative ORIF of BOTH radius and ulna using 3.5mm LCP plates to restore Radial Bow.",
                "th": "Both-bone: ผ่าตัด ORIF ทั้งสองชิ้นด้วย 3.5mm LCP ดัดคืนส่วนโค้ง Radial Bow เพื่อให้หมุนแขนได้ปกติ"
              },
              {
                "en": "Essex-Lopresti: Radial head ORIF or Replacement MANDATORY; NEVER excise radial head alone.",
                "th": "Essex-Lopresti: ผ่าตัด ORIF หรือใส่ข้อหัว Radius เทียม (ห้ามตัดหัว Radius ทิ้งเด็ดขาด)"
              },
              {
                "en": "CRITICAL PITFALL: ALWAYS obtain full-length forearm X-rays including both elbow and wrist joints to avoid missing hidden dislocations.",
                "th": "ข้อควรระวังสำคัญ: ต้องถ่ายภาพเอกซเรย์ปลายแขนเต็มยาวครอบคลุมทั้งข้อศอกและข้อมือเสมอ!"
              }
            ]
          },
          "investigations": [
            {
              "name": "AP Forearm View (Full Length)",
              "details": {
                "en": "Full-length AP view of the forearm including BOTH elbow and wrist joints. Essential to assess radial head alignment with capitellum (Monteggia) and radial bow.",
                "th": "ภาพเอกซเรย์ปลายแขนเต็มยาวท่าหน้าหลัง (AP) ต้องเห็นทั้งข้อศอกและข้อมือ เพื่อดูแนวหัว Radius กับ Capitellum (Monteggia)"
              },
              "imageUrl": "/images/investigations/forearm/ap_forearm_view.jpg"
            },
            {
              "name": "Lateral Forearm View",
              "details": {
                "en": "Full-length lateral view of the forearm. Critical to assess DRUJ alignment, ulnar displacement, and volar/dorsal radial head subluxation.",
                "th": "ภาพเอกซเรย์ปลายแขนเต็มยาวท่าด้านข้าง (Lateral) สำคัญในการดูการเคลื่อนหลุดของข้อ DRUJ (Galeazzi) และการเคลื่อนของหัว Radius"
              }
            }
          ],
          "types": [
            {
              "type": "Monteggia",
              "name": {
                "en": "Monteggia Fracture",
                "th": "Monteggia Fracture"
              },
              "description": {
                "en": "Proximal 1/3 ulna fracture with radial head dislocation",
                "th": "กระดูก Ulna หักส่วนต้น (Proximal 1/3) ร่วมกับข้อศอกส่วนหัว Radius เคลื่อนหลุด"
              },
              "treatment": {
                "conservative": {
                  "en": "Rarely indicated (children only)",
                  "th": "มักใช้ในเด็กเท่านั้น ผู้ใหญ่มักไม่ค่อยได้ผล"
                },
                "operative": {
                  "en": "ORIF of ulna, reduce radial head",
                  "th": "ผ่าตัดยึดกระดูก Ulna ด้วยแผ่นเหล็ก และจัดกระดูก Radius เข้าที่"
                }
              },
              "illustrationId": "/images/eponyms/monteggia.png",
              "xrayDescription": {
                "en": "Ulna shaft fracture, radial head not aligned with capitellum",
                "th": "กระดูก Ulna หัก และแนวของ radial head ไม่ชี้ไปที่ capitellum"
              }
            },
            {
              "type": "Galeazzi",
              "name": {
                "en": "Galeazzi Fracture",
                "th": "Galeazzi Fracture"
              },
              "description": {
                "en": "Distal 1/3 radius fracture with DRUJ dislocation",
                "th": "กระดูก Radius หักส่วนปลาย (Distal 1/3) ร่วมกับข้อข้อมือ DRUJ เคลื่อนหลุด"
              },
              "treatment": {
                "conservative": {
                  "en": "Not recommended in adults",
                  "th": "ไม่แนะนำให้รักษาแบบไม่ผ่าตัดในผู้ใหญ่"
                },
                "operative": {
                  "en": "ORIF of radius, assess DRUJ stability",
                  "th": "ผ่าตัดยึดกระดูก Radius ด้วยแผ่นเหล็ก และประเมินความมั่นคงของข้อ DRUJ"
                }
              },
              "illustrationId": "/images/eponyms/galeazzi.png",
              "xrayDescription": {
                "en": "Distal radius fracture, widened DRUJ or ulnar head dorsally displaced",
                "th": "กระดูก Radius หักส่วนปลาย และข้อ DRUJ กว้างขึ้นหรือกระดูก Ulna หลุด"
              }
            },
            {
              "type": "Nightstick",
              "name": {
                "en": "Nightstick Fracture",
                "th": "Nightstick Fracture (กระดูก Ulna Shaft หักเดี่ยว)"
              },
              "description": {
                "en": "Isolated fracture of the ulnar shaft caused by a direct defensive blow to the forearm\nNo associated dislocation of radial head (PRUJ) or DRUJ\nMinimal displacement (<50% displacement, <10° angulation) can be treated conservatively",
                "th": "รอยหักเดี่ยวบริเวณแกนกระดูก Ulna ที่เกิดจากแรงกระแทกโดยตรงขณะยกแขนป้องตนเอง\nไม่มีการเคลื่อนหลุดของข้อศอก (Radial head) หรือข้อข้อมือ (DRUJ)\nกรณีเคลื่อนตัวน้อย (<50% ความกว้างกระดูก และทำมุม <10°) สามารถรักษาโดยไม่ต้องผ่าตัดได้"
              },
              "moi": {
                "en": "Direct blow to mid-ulnar shaft (defensive blocking mechanism against a blunt object).",
                "th": "แรงกระแทกโดยตรงเข้าที่กลางแกนกระดูก Ulna (การยกแขนรับการตีหรือของแข็ง)"
              },
              "treatment": {
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED FOR MINIMAL DISPLACEMENT (<50% displacement, <10° angulation). Short-arm / long-arm cast or functional brace for 4-6 weeks with early forearm rotation.",
                  "th": "แนะนำรักษาแบบไม่ผ่าตัดกรณีเคลื่อนตัวน้อย (<50% และเอียง <10°) ใส่เฝือกหรือ Functional brace 4-6 สัปดาห์ ร่วมกับการฝึกหมุนแขน"
                },
                "operative": {
                  "en": "Indicated for displacement >50% or angulation >10°. ORIF with 3.5mm compression plate.",
                  "th": "ผ่าตัดเฉพาะกรณีเคลื่อนตัว >50% หรือทำมุม >10° โดยผ่าตัดยึดแผ่นเหล็กดามกระดูก (ORIF)"
                }
              },
              "illustrationId": "/images/eponyms/nightstick.png",
              "xrayDescription": {
                "en": "Transverse or short oblique fracture of mid-ulnar shaft without radioulnar dislocation.",
                "th": "เห็นรอยหักแนวขวาง/เฉียงสั้นบริเวณกลางแกน Ulna โดยไม่มีการเคลื่อนหลุดของข้อต่อข้อศอกและข้อมือ"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "distal",
      "name": {
        "en": "Distal End Radius",
        "th": "ปลายกระดูกเรเดียส (Distal End Radius)"
      },
      "regionConcept": {
        "physicalExam": [
          {
            "sign": "Dinner-Fork Deformity (Colles Fracture)",
            "positive": {
              "en": "Classic dorsal displacement and apex volar angulation of the distal radius fragment causing a dinner-fork wrist contour",
              "th": "ลักษณะ wrist ปูดเอียงไปด้านหลังคล้ายส้อม (Dinner-fork deformity) จาก Colles fracture"
            }
          },
          {
            "sign": "Garden-Spade Deformity (Smith Fracture)",
            "positive": {
              "en": "Volar displacement and apex dorsal angulation of distal fragment resulting in garden-spade wrist profile",
              "th": "ลักษณะ wrist ปูดเอียงไปด้านหน้าคล้ายพลุดิน (Garden-spade deformity) จาก Smith fracture"
            }
          },
          {
            "sign": "Median Nerve / Acute Carpal Tunnel Screening",
            "positive": {
              "en": "Paresthesia, numbness, or tingling in thumb, index, middle, and radial half of ring finger indicating median nerve compression",
              "th": "อาการชาหรือเสียวซ่าบริเวณนิ้วหัวแม่มือ นิ้วชี้ นิ้วกลาง และนิ้วนาง บ่งชี้เส้นประสาท Median ถูกกดทับ"
            }
          },
          {
            "sign": "DRUJ & Ulnar Fovea Tenderness",
            "positive": {
              "en": "Point tenderness over ulnar styloid and fovea indicating associated TFCC or ulnar styloid injury",
              "th": "กดเจ็บและหลวมบริเวณข้อ DRUJ และปุ่มกระดูก Ulnar styloid"
            }
          }
        ],
        "acceptableAlignment": [
          {
            "parameter": {
              "en": "Radial Height (Length)",
              "th": "ความยาวกระดูกเรเดียส (Radial Height)"
            },
            "threshold": "> 10 mm (or < 2mm shortening vs normal side)",
            "note": {
              "en": "Shortening > 3 mm causes ulnar impaction syndrome and wrist pain",
              "th": "กระดูกหดสั้น > 3 มม. ทำให้เกิดภาวะ Ulnar impaction syndrome"
            }
          },
          {
            "parameter": {
              "en": "Radial Inclination",
              "th": "มุมเอียงเข้าด้านใน (Radial Inclination)"
            },
            "threshold": "> 15° (Normal ~22°)",
            "note": {
              "en": "Loss of inclination shifts wrist load bearing ulnarward",
              "th": "การสูญเสียมุมเอียงย้ายแนวรับน้ำหนักไปทางฝั่ง Ulnar"
            }
          },
          {
            "parameter": {
              "en": "Sagittal Tilt (Dorsal / Volar Tilt)",
              "th": "มุมเอียงหน้า-หลัง (Dorsal / Volar Tilt)"
            },
            "threshold": "Dorsal tilt < 10° OR Volar tilt < 15° (Normal ~11° volar tilt)",
            "note": {
              "en": "Dorsal tilt > 10° alters radiocarpal contact mechanics and reduces grip strength",
              "th": "การเอียงไปด้านหลัง (Dorsal tilt) > 10° ทำให้กลไกการรับน้ำหนักผิดปกติและแรงบีบมือลดลง"
            }
          },
          {
            "parameter": {
              "en": "Articular Surface Step-off",
              "th": "ระดับขั้นของผิวข้อ (Articular step-off)"
            },
            "threshold": "< 2 mm (0mm preferred)",
            "note": {
              "en": "Step-off > 2 mm leads to post-traumatic radiocarpal arthritis in >90% of cases",
              "th": "ขั้นผิวข้อ > 2 มม. ทำให้เกิดข้อ wrist เสื่อมตามมาเกิน 90%"
            }
          }
        ],
        "redFlags": [
          {
            "en": "Acute Carpal Tunnel Syndrome (Severe median nerve paresthesia secondary to fragment compression or hematoma; requires prompt reduction and urgent carpal tunnel release if persistent)",
            "th": "ภาวะกดทับเส้นประสาท Median ฉุกเฉิน (Acute Carpal Tunnel Syndrome) จากเลือดออกหรือกระดูกทิ่มกด ต้องรีบจัดกระดูกเข้าที่และผ่าตัดคลายเส้นประสาทหากอาการไม่ดีขึ้น"
          },
          {
            "en": "Extensor Pollicis Longus (EPL) Tendon Rupture (Delayed attrition rupture over Lister's tubercle weeks post-injury)",
            "th": "เส้นเอ็นขยับนิ้วหัวแม่มือ EPL ขาดตามมา (มักเกิดหลังบาดเจ็บหลายสัปดาห์จากการเสียดสีกับรอยหักบริเวณ Lister's tubercle)"
          }
        ],
        "associatedInjuries": [
          {
            "injury": {
              "en": "Ulnar Styloid Base Fracture & TFCC Tear",
              "th": "กระดูกปุ่ม Ulnar styloid หักร่วมและเส้นเอ็น TFCC ฉีกขาด"
            },
            "trigger": {
              "en": "Evaluate DRUJ stability following distal radius reduction/fixation",
              "th": "ประเมินความมั่นคงของข้อ DRUJ หลังจัดผ่าตัดกระดูกเรเดียสเรียบร้อย"
            }
          }
        ],
        "clinicalPearls": [
          {
            "en": "Volar Locked Plating (VLP) via the Henry approach is the gold standard surgical treatment for unstable, displaced, or intra-articular distal radius fractures.",
            "th": "การผ่าตัดดามแผ่นเหล็กล็อคด้านหน้า (Volar Locked Plating) ผ่านแนว Henry approach คือวิธีมาตรฐานหลักที่ดีที่สุดสำหรับกระดูกปลายแขนหักชนิดไม่มั่นคงหรือเข้าข้อ"
          },
          {
            "en": "Stable extra-articular fractures (Colles) in low-demand patients can be managed conservatively with closed reduction and cast immobilization for 4-6 weeks.",
            "th": "กระดูกหักชนิดไม่เข้าข้อและมั่นคง (Colles) สามารถรักษาแบบประคับประคองด้วยการดึงจัดกระดูกและใส่เฝือกแขนสั้น 4-6 สัปดาห์"
          },
          {
            "en": "Always re-evaluate Median nerve sensation immediately after closed reduction and casting.",
            "th": "ต้องตรวจความรู้สึกของเส้นประสาท Median ซ้ำทันทีหลังทำการดึงจัดกระดูกและดามเฝือกเสร็จทุกครั้ง"
          }
        ]
      },
      "classifications": [
        {
          "system": "Eponyms",
          "fullName": {
            "en": "Eponymous Fractures",
            "th": "รูปแบบกระดูกหักเฉพาะชื่อ (Eponyms)"
          },
          "description": {
            "en": "Classic distal radius fractures",
            "th": "กระดูกหักบริเวณปลายแขนแบบเฉพาะ"
          },
          "concept": {
            "title": {
              "en": "Distal Radius Eponyms Clinical Concept",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ Distal Radius Eponymous Fractures"
            },
            "corePrinciple": {
              "en": "Differentiates classic extra-articular patterns (Colles - dorsal apex, Smith - volar apex) from intra-articular fracture-dislocations (Barton) based on force vectors, guiding non-operative vs surgical volar locked plating.",
              "th": "จำแนกรูปแบบนอกข้อต่อคลาสสิก (Colles - เคลื่อนไปทางหลังมือ, Smith - เคลื่อนไปทางฝ่ามือ) ออกจากรอยหักเข้าข้อร่วมกับข้อหลุด (Barton) เพื่อเลือกดึงดามเฝือกหรือผ่าตัดดามแผ่นเหล็ก Volar Locked Plate"
            },
            "rules": [
              {
                "en": "Colles Fracture: Extra-articular distal radius fracture with dorsal displacement/angulation (Dinner-fork deformity).",
                "th": "Colles Fracture: กระดูกปลายแขนหักนอกข้อ เคลื่อนตัวทำมุมไปทางด้านหลังมือ (Dinner-fork deformity)"
              },
              {
                "en": "Smith Fracture: Extra-articular distal radius fracture with volar displacement/angulation (Garden-spade deformity).",
                "th": "Smith Fracture: กระดูกปลายแขนหักนอกข้อ เคลื่อนตัวทำมุมไปทางด้านหน้าฝ่ามือ (Garden-spade deformity)"
              },
              {
                "en": "Barton Fracture: Intra-articular fracture-dislocation of distal radius with carpal subluxation (Volar or Dorsal rim).",
                "th": "Barton Fracture: กระดูกปลายแขนหักเข้าข้อ ร่วมกับข้อข้อมือเคลื่อนหลุด (Volar หรือ Dorsal rim)"
              },
              {
                "en": "Acceptable Alignment Criteria: Radial height loss <3 mm, Radial inclination >15°, Dorsal tilt <10° or Volar tilt <15°, Articular step-off <2 mm.",
                "th": "เกณฑ์สัดส่วนที่ยอมรับได้: ความยาวสั้นลง <3 มม., มุมเอียง Radial inclination >15°, Dorsal tilt <10° / Volar tilt <15°, รอยเหลื่อมผิวข้อ <2 มม."
              }
            ],
            "clinicalSignificance": [
              {
                "en": "Colles Fracture: Closed reduction + short arm cast 4-6 wks if stable. ORIF with Volar Locking Plate (VLP) if unstable (dorsal tilt >10°, shortening >3mm).",
                "th": "Colles Fracture: ดึงจัดกระดูกเข้าที่ + ใส่เฝือกข้อมือ 4-6 สัปดาห์หากมั่นคง; ผ่าตัด Volar Locking Plate (VLP) หากไม่มั่นคง"
              },
              {
                "en": "Smith & Barton Fractures: High instability; Volar Locking Plate ORIF strongly recommended.",
                "th": "Smith & Barton Fractures: ความไม่มั่นคงสูง แนะนำผ่าตัด Volar Locking Plate ORIF"
              },
              {
                "en": "Die-punch & Chauffeur: Require targeted articular elevation, bone grafting, and screw/plate fixation.",
                "th": "Die-punch & Chauffeur: ต้องการการผ่าตัดงัดยกผิวข้อที่ยุบ, ปลูกกระดูก และยึดสกรู/แผ่นเหล็ก"
              },
              {
                "en": "CRITICAL PITFALL: ALWAYS evaluate Median nerve sensory function before and after reduction to screen for Acute Carpal Tunnel Syndrome.",
                "th": "ข้อควรระวังสำคัญ: ตรวจการทำงานของเส้นประสาท Median ก่อนและหลังดึงจัดกระดูกทุกครั้ง เพื่อเฝ้าระวัง Acute Carpal Tunnel Syndrome"
              }
            ]
          },
          "investigations": [
            {
              "name": "PA Wrist View",
              "details": {
                "en": "Anteroposterior view of the wrist. Look for articular step-off, radial inclination, and radial height.",
                "th": "ภาพเอกซเรย์ท่าหน้าหลัง (AP) ของข้อมือ สำหรับดูแนวรอยต่อผิวข้อ ความเอียงและความสูงของกระดูกเรเดียส"
              },
              "imageUrl": "/images/investigations/wrist/ap_wrist_view.jpg"
            },
            {
              "name": "Lateral Wrist View",
              "details": {
                "en": "Lateral view of the wrist. Critical to evaluate volar or dorsal tilt (angulation) of the distal radius fragment.",
                "th": "ภาพเอกซเรย์ท่าด้านข้าง (Lateral) ของข้อมือ สำคัญมากในการประเมินการมุมเอียงไปด้านหน้าหรือด้านหลัง"
              },
              "imageUrl": "/images/investigations/wrist/lateral_wrist_view.jpg"
            },
            {
              "name": "Oblique Wrist View",
              "details": {
                "en": "Oblique view of the wrist. Useful for identifying intra-articular extension of the fracture line.",
                "th": "ภาพเอกซเรย์ท่าเฉียง (Oblique) ของข้อมือ ช่วยในการมองหารอยหักที่ลามเข้าไปในผิวข้อ"
              },
              "imageUrl": "/images/investigations/wrist/lateral_wrist_view.jpg"
            }
          ],
          "types": [
            {
              "type": "Colles",
              "name": {
                "en": "Colles Fracture",
                "th": "Colles Fracture"
              },
              "description": {
                "en": "Extra-articular distal radius fracture with dorsal displacement",
                "th": "กระดูก Radius หักส่วนปลายแบบไม่เข้าข้อ และมีการเคลื่อนไปทางด้านหลังมือ (Dorsal)"
              },
              "treatment": {
                "conservative": {
                  "en": "Closed reduction and cast (if stable)",
                  "th": "ดึงจัดกระดูกเข้าที่และใส่เฝือก (ถ้ากระดูกมั่นคง)"
                },
                "operative": {
                  "en": "ORIF with volar locking plate",
                  "th": "ผ่าตัดยึดกระดูกด้วยแผ่นเหล็กดามด้านหน้า (Volar plate)"
                }
              },
              "illustrationId": "/images/der_eponyms/colles.png",
              "xrayDescription": {
                "en": "Dinner fork deformity, dorsal angulation and impaction",
                "th": "กระดูกหักและทำมุมไปทางด้านหลังมือคล้ายส้อม (Dinner fork deformity)"
              }
            },
            {
              "type": "Smith",
              "name": {
                "en": "Smith Fracture",
                "th": "Smith Fracture"
              },
              "description": {
                "en": "Extra-articular distal radius fracture with volar displacement",
                "th": "กระดูก Radius หักส่วนปลายแบบไม่เข้าข้อ และมีการเคลื่อนไปทางด้านหน้ามือ (Volar)"
              },
              "treatment": {
                "conservative": {
                  "en": "Closed reduction and cast (difficult to hold)",
                  "th": "ดึงจัดกระดูกเข้าที่และใส่เฝือก (มักหลุดง่าย)"
                },
                "operative": {
                  "en": "ORIF with volar plate",
                  "th": "ผ่าตัดยึดกระดูกด้วยแผ่นเหล็กดามด้านหน้า (Volar plate)"
                }
              },
              "illustrationId": "/images/der_eponyms/smith.png",
              "xrayDescription": {
                "en": "Garden spade deformity, volar angulation",
                "th": "กระดูกหักและทำมุมไปทางด้านหน้าฝ่ามือ (Garden spade deformity)"
              }
            },
            {
              "type": "Dorsal Barton",
              "name": {
                "en": "Dorsal Barton Fracture",
                "th": "Dorsal Barton Fracture (หักเข้าข้อทางด้านหลัง)"
              },
              "description": {
                "en": "Intra-articular fracture-dislocation of the distal radius with dorsal displacement of the carpus and articular rim fragment",
                "th": "กระดูก Radius หักส่วนปลายแบบลามเข้าข้อ ร่วมกับข้อข้อมือเคลื่อนหลุดไปทางด้านหลังมือ (Dorsal)"
              },
              "moi": {
                "en": "Fall on out-stretched hand with wrist in extension and pronation.",
                "th": "การล้มเอามือยันพื้นขณะข้อมือเหยียดและคว้ำ"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "Not recommended. Highly unstable intra-articular fracture-dislocation.",
                  "th": "ไม่แนะนำ เนื่องจากเป็นกระดูกหักเข้าข้อและหลุดหลวมไม่มั่นคงอย่างยิ่ง"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. Open reduction and internal fixation (ORIF) with buttress plate or volar/dorsal locking plate.",
                  "th": "แนะนำผ่าตัด (ORIF) ยึดแผ่นเหล็กดามกระดูก (Buttress/Locking plate)"
                }
              },
              "illustrationId": "/images/der_eponyms/dorsal_barton.png",
              "xrayDescription": {
                "en": "Intra-articular fracture line with dorsal rim fragment displacement and carpal subluxation.",
                "th": "รอยหักลามเข้าข้อกระดูกข้อมือ ร่วมกับชิ้นส่วนขอบหลังเคลื่อนและข้อข้อมือหลุดเคลื่อน"
              }
            },
            {
              "type": "Volar Barton",
              "name": {
                "en": "Volar Barton Fracture (Reverse Barton)",
                "th": "Volar Barton Fracture (Reverse Barton - หักเข้าข้อทางด้านหน้า)"
              },
              "description": {
                "en": "Intra-articular fracture-dislocation of the distal radius with volar displacement of the carpus and articular rim fragment",
                "th": "กระดูก Radius หักส่วนปลายแบบลามเข้าข้อ ร่วมกับข้อข้อมือเคลื่อนหลุดไปทางด้านหน้าฝ่ามือ (Volar/Ventral)"
              },
              "moi": {
                "en": "Fall onto flexed wrist or direct impact to dorsum of wrist.",
                "th": "การล้มล้มกระแทกขณะข้อมืองอ หรือแรงกระแทกตรงเข้าด้านหลังข้อมือ"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "Not recommended. Extremely unstable.",
                  "th": "ไม่แนะนำ เนื่องจากไม่มั่นคงอย่างยิ่ง"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. Open reduction and internal fixation (ORIF) with Volar Locking Buttress Plate.",
                  "th": "แนะนำผ่าตัด (ORIF) ยึดแผ่นเหล็ก Volar Locking Buttress Plate"
                }
              },
              "illustrationId": "/images/der_eponyms/volar_barton.png",
              "xrayDescription": {
                "en": "Intra-articular fracture line with volar rim fragment displacement and anterior carpal subluxation.",
                "th": "รอยหักลามเข้าข้อกระดูกข้อมือ ร่วมกับชิ้นส่วนขอบหน้าเคลื่อนและข้อข้อมือหลุดเคลื่อนไปด้านหน้า"
              }
            }
          ]
        },
        {
          "system": "Fernandez",
          "fullName": {
            "en": "Fernandez Classification",
            "th": "ระบบ Fernandez Classification"
          },
          "description": {
            "en": "Mechanistic classification of distal radius fractures based on the mechanism of injury, guiding treatment decisions.",
            "th": "ระบบจำแนกกระดูกปลายแขนหักตามกลไกการบาดเจ็บ (Mechanism of Injury) ช่วยในการวางแผนการรักษาได้อย่างเหมาะสม"
          },
          "concept": {
            "title": {
              "en": "Fernandez Classification Clinical Concept",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ Fernandez Classification"
            },
            "corePrinciple": {
              "en": "Biomechanical classification based on injury mechanism and force vector (Bending, Shear, Compression, Avulsion, Combined) to dictate specific implant selection and fixation technique.",
              "th": "ระบบจำแนกทางชีวกลศาสตร์ตามกลไกและทิศทางของแรง (แรงดัด Bending, แรงเฉือน Shear, แรงกด Compression, แรงดึงกระชาก Avulsion, แรงรวม) เพื่อระบุเทคนิคและอุปกรณ์ผ่าตัดที่ตรงจุด"
            },
            "rules": [
              {
                "en": "Type I (Bending - Colles/Smith): Extra-articular fracture line.",
                "th": "Type I (Bending - Colles/Smith): รอยหักนอกข้อจากแรงดัด"
              },
              {
                "en": "Type II (Shear - Barton/Chauffeur): Intra-articular shear fracture.",
                "th": "Type II (Shear - Barton/Chauffeur): รอยหักเข้าข้อจากแรงเฉือน"
              },
              {
                "en": "Type III (Compression - Die-punch): Intra-articular surface depression.",
                "th": "Type III (Compression - Die-punch): รอยหักผิวข้อยุบตัวลง"
              },
              {
                "en": "Type IV (Avulsion - Radiocarpal fracture-dislocation): Ligamentous attachment avulsion.",
                "th": "Type IV (Avulsion - ข้อหลุดร่วมกับเอ็นดึงกระชาก): รอยหักกะเทาะจุดเกาะเอ็น"
              },
              {
                "en": "Type V (Combined high-energy): Severe comminution with soft tissue damage.",
                "th": "Type V (Combined พลังงานสูง): รอยหักแตกละเอียดซับซ้อนหลายกลไก"
              }
            ],
            "clinicalSignificance": [
              {
                "en": "Type I: Cast immobilization if stable; Volar locking plate if redisplaced.",
                "th": "Type I: ดึงจัดกระดูกดามเฝือกหากมั่นคง; ผ่าตัด Volar locking plate หากเลื่อนหลุด"
              },
              {
                "en": "Type II: Buttress plating required (screws alone often fail against shear forces).",
                "th": "Type II: ผ่าตัดดามแผ่นเหล็กแบบ Buttress plate (สกรูอย่างเดียวมักทนแรงเฉือนไม่ได้)"
              },
              {
                "en": "Type III: Open reduction, articular surface elevation, bone grafting, and Volar locking plate.",
                "th": "Type III: ผ่าตัดงัดยกผิวข้อที่ยุบ + ปลูกกระดูก (Bone graft) + Volar locking plate"
              },
              {
                "en": "Type IV: Anchor or lag screw fixation of avulsed bone fragment and ligament repair.",
                "th": "Type IV: ผ่าตัดยึดชิ้นกระดูกจุดเกาะเอ็นด้วยสกรูหรือ Anchor"
              },
              {
                "en": "Type V: Span-external fixator or bridge plate followed by staged ORIF.",
                "th": "Type V: ใส่ดามยึดภายนอก (External fixator) หรือ Bridge plate ก่อนผ่าตัด ORIF"
              }
            ]
          },
          "investigations": [
            {
              "name": "PA Wrist View",
              "details": {
                "en": "Posteroanterior view of the wrist. Assesses radial inclination (~23°), radial length (11-12mm), ulnar variance, and articular congruity.",
                "th": "ภาพเอกซเรย์ข้อมือท่า PA ประเมินมุมเอียง Radial inclination (~23°), ความยาว Radial length (11-12 มม.) และความเรียบของผิวข้อ"
              },
              "imageUrl": "/images/investigations/wrist/ap_wrist_view.jpg"
            },
            {
              "name": "Lateral Wrist View",
              "details": {
                "en": "True lateral view with neutral rotation. Evaluates palmar tilt (~11° volar), dorsal/volar cortical integrity, and DRUJ alignment.",
                "th": "ภาพเอกซเรย์ข้อมือท่าด้านข้างแท้ ประเมินมุมเอียงฝ่ามือ Palmar tilt (~11°) และการเรียงตัวของข้อ DRUJ"
              },
              "imageUrl": "/images/investigations/wrist/lateral_wrist_view.jpg"
            },
            {
              "name": "Oblique Wrist View",
              "details": {
                "en": "Oblique view of the wrist. Useful for identifying intra-articular extension of the fracture line.",
                "th": "ภาพเอกซเรย์ท่าเฉียง (Oblique) ของข้อมือ ช่วยในการมองหารอยหักที่ลามเข้าไปในผิวข้อ"
              },
              "imageUrl": "/images/investigations/wrist/lateral_wrist_view.jpg"
            }
          ],
          "types": [
            {
              "type": "I",
              "name": {
                "en": "Bending Fracture",
                "th": "กระดูกหักจากแรงดัด (Bending Fracture)"
              },
              "description": {
                "en": "Extra-articular fracture from bending force\nDorsal or volar cortex failure\nIncludes Colles' and Smith's fractures",
                "th": "กระดูกหักนอกข้อจากแรงดัด (Bending)\nผิวกระดูกด้าน Dorsal หรือ Volar แตก\nครอบคลุม Colles' และ Smith's fracture"
              },
              "moi": {
                "en": "Fall on outstretched hand (FOOSH) with bending load.",
                "th": "ล้มเท้าต่อมือ (FOOSH) โดยแรงดัดพาดผ่านกระดูก"
              },
              "treatment": {
                "conservative": {
                  "en": "Closed reduction and cast immobilization if stable.",
                  "th": "ดึงจัดกระดูกและใส่เฝือกหากโครงสร้างมั่นคงเพียงพอ"
                },
                "operative": {
                  "en": "ORIF with volar locking plate if unstable or redisplaced.",
                  "th": "ผ่าตัดยึดกระดูกด้วยแผ่นเหล็กล็อคด้านหน้า (Volar Locking Plate) หากไม่มั่นคง"
                }
              },
              "illustrationId": "/images/fernandez/fernan1.png",
              "xrayDescription": {
                "en": "Extra-articular fracture, dorsal angulation (Colles') or volar angulation (Smith's), no articular involvement.",
                "th": "รอยหักนอกข้อ ทำมุมไปด้านหลัง (Colles') หรือด้านหน้า (Smith') โดยไม่มีรอยหักเข้าข้อ"
              }
            },
            {
              "type": "II",
              "name": {
                "en": "Shearing Fracture",
                "th": "กระดูกหักจากแรงเฉือน (Shearing Fracture)"
              },
              "description": {
                "en": "Intra-articular fracture from shearing force\nVolar or dorsal lip displaced\nIncludes Barton's and Chauffeur's fractures",
                "th": "กระดูกหักเข้าข้อจากแรงเฉือน (Shearing)\nขอบข้อด้าน Volar หรือ Dorsal เคลื่อน\nครอบคลุม Barton's และ Chauffeur's fracture"
              },
              "moi": {
                "en": "Shearing force applied to the articular surface, often high-energy.",
                "th": "แรงเฉือนกระทำต่อผิวข้อโดยตรง มักเป็นอุบัติเหตุพลังงานสูง"
              },
              "treatment": {
                "conservative": {
                  "en": "Rarely indicated due to articular involvement and instability.",
                  "th": "แทบไม่แนะนำเพราะมีรอยหักเข้าข้อและมักไม่มั่นคง"
                },
                "operative": {
                  "en": "ORIF to restore articular congruity; buttress plate for volar rim.",
                  "th": "ผ่าตัดจัดและยึดกระดูกเพื่อฟื้นฟูผิวข้อ ใช้แผ่นค้ำยัน (Buttress Plate) สำหรับขอบด้าน Volar"
                }
              },
              "illustrationId": "/images/fernandez/fernan2.png",
              "xrayDescription": {
                "en": "Intra-articular fracture of the volar or dorsal rim, subluxation of carpus may accompany.",
                "th": "รอยหักเข้าข้อบริเวณขอบ Volar หรือ Dorsal อาจพบข้อมือเคลื่อนร่วมด้วย"
              }
            },
            {
              "type": "III",
              "name": {
                "en": "Compression Fracture",
                "th": "กระดูกหักจากแรงกด (Compression Fracture)"
              },
              "description": {
                "en": "Intra-articular fracture from axial compression\nDie-punch or split of articular surface\nJoint depression present",
                "th": "กระดูกหักเข้าข้อจากแรงกดในแนวแกน (Axial Compression)\nผิวข้อยุบตัวลง (Die-Punch) หรือแตกแยก\nมีการยุบของผิวข้อ"
              },
              "moi": {
                "en": "Axial load transmitted through the carpus onto the articular surface.",
                "th": "แรงกดตามแนวแกนจากข้อมือส่งตรงลงบนผิวข้อปลายกระดูก Radius"
              },
              "treatment": {
                "conservative": {
                  "en": "Not recommended; articular step-off requires reduction.",
                  "th": "ไม่แนะนำเนื่องจากผิวข้อยุบ ต้องได้รับการจัดผิวข้อกลับเข้าที่"
                },
                "operative": {
                  "en": "ORIF; bone graft or substitute may be needed to fill subchondral void.",
                  "th": "ผ่าตัดยึดกระดูก อาจต้องใช้กระดูกเสริม (Bone Graft) เพื่ออุดช่องใต้ผิวกระดูกอ่อน"
                }
              },
              "illustrationId": "/images/fernandez/fernan3.png",
              "xrayDescription": {
                "en": "Articular depression (die-punch pattern), radiolucent defect under the articular surface.",
                "th": "ผิวข้อยุบลงแบบ Die-Punch บริเวณใต้ผิวกระดูกอ่อนมีช่องโหว่ที่เห็นในภาพรังสี"
              }
            },
            {
              "type": "IV",
              "name": {
                "en": "Avulsion Fracture",
                "th": "กระดูกหักแบบดึงรั้ง (Avulsion Fracture)"
              },
              "description": {
                "en": "Fracture of ligament attachment sites\nRadial or ulnar styloid avulsion\nCarpal instability may result",
                "th": "กระดูกหักบริเวณจุดยึดเอ็น (Ligament Attachment)\nรวมถึง Radial styloid หรือ Ulnar styloid avulsion\nอาจเกิดความไม่มั่นคงของข้อมือตามมา"
              },
              "moi": {
                "en": "Tensile force through ligamentous attachments during wrist sprain or dislocation.",
                "th": "แรงดึงรั้งผ่านเอ็นบริเวณจุดยึด เกิดขณะข้อมือแพลง หรือเคลื่อนหลุด"
              },
              "treatment": {
                "conservative": {
                  "en": "Cast immobilization for non-displaced avulsion; assess carpal stability.",
                  "th": "ใส่เฝือกในกรณีที่กระดูกไม่เคลื่อน และประเมินความมั่นคงของข้อมือ"
                },
                "operative": {
                  "en": "ORIF of styloid if displaced or carpal instability is present; ligament repair.",
                  "th": "ผ่าตัดยึดกระดูก Styloid หากเคลื่อนหรือข้อมือไม่มั่นคง พร้อมซ่อมแซมเอ็น"
                }
              },
              "illustrationId": "/images/fernandez/fernan4.png",
              "xrayDescription": {
                "en": "Small avulsion fragment at radial or ulnar styloid; assess for carpal malalignment.",
                "th": "ชิ้นกระดูกเล็กหลุดออกบริเวณ Radial หรือ Ulnar styloid ควรประเมินแนวของกระดูกข้อมือ"
              }
            },
            {
              "type": "V",
              "name": {
                "en": "Combined / High-Energy Fracture",
                "th": "กระดูกหักรูปแบบผสม / พลังงานสูง"
              },
              "description": {
                "en": "Combination of multiple fracture patterns\nHigh-energy comminuted fracture\nMay involve radiocarpal joint and DRUJ",
                "th": "กระดูกหักจากกลไกหลายรูปแบบรวมกัน\nกระดูกแตกละเอียด (Comminuted) จากพลังงานสูง\nอาจมีรอยหักเข้าข้อ Radiocarpal และข้อ DRUJ"
              },
              "moi": {
                "en": "High-energy trauma such as motor vehicle accident or fall from height.",
                "th": "อุบัติเหตุพลังงานสูง เช่น อุบัติเหตุจราจร หรือตกจากที่สูง"
              },
              "treatment": {
                "conservative": {
                  "en": "Not recommended for high-energy injuries.",
                  "th": "ไม่แนะนำสำหรับกระดูกหักจากพลังงานสูง"
                },
                "operative": {
                  "en": "Complex ORIF, external fixation, or combined fixation; staged approach may be needed.",
                  "th": "ผ่าตัดซับซ้อน อาจใช้การยึดกระดูกภายนอก (External Fixator) ร่วมกับแผ่นเหล็ก หรือทำเป็นขั้นตอน"
                }
              },
              "illustrationId": "/images/fernandez/fernan5.png",
              "xrayDescription": {
                "en": "Highly comminuted fracture pattern, multiple intra-articular fragments, possible DRUJ disruption.",
                "th": "กระดูกแตกละเอียดหลายชิ้น มีชิ้นส่วนในข้อหลายชิ้น อาจพบข้อ DRUJ แตกหรือเคลื่อนร่วมด้วย"
              }
            }
          ]
        },
        {
          "system": "Frykman",
          "fullName": {
            "en": "Frykman Classification for Distal Radius Fractures",
            "th": "การจำแนกกระดูกปลายแขนหักแบบ Frykman"
          },
          "description": {
            "en": "Classification system based on involvement of Radiocarpal joint, Distal Radioulnar Joint (DRUJ), and associated Ulnar Styloid fracture.",
            "th": "ระบบจำแนกกระดูกปลายแขน Radius ส่วนปลายหักตามการลามเข้าข้อ Radiocarpal, ข้อ DRUJ และการหักของกระดูก Ulnar styloid"
          },
          "concept": {
            "title": {
              "en": "Frykman Classification Clinical Concept",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ Frykman Classification"
            },
            "corePrinciple": {
              "en": "Categorizes distal radius fractures by involvement of two joint surfaces: Radiocarpal (RC) joint and Distal Radioulnar Joint (DRUJ), plus ulnar styloid fracture. Odd types (I, III, V, VII) have NO ulnar styloid fracture; even types (II, IV, VI, VIII) HAVE an associated ulnar styloid fracture.",
              "th": "จำแนกกระดูก Radius ส่วนปลายหักตามการลามเข้าข้อสำคัญ 2 ข้อ ได้แก่ ข้อ Radiocarpal (RC) และข้อ Distal Radioulnar Joint (DRUJ) ร่วมกับกระดูก Ulnar styloid หัก โดยเลขคี่ (I, III, V, VII) ไม่มี ulnar styloid หัก ส่วนเลขคู่ (II, IV, VI, VIII) มี ulnar styloid หักร่วมด้วย"
            },
            "rules": [
              {
                "en": "Types I & II: Extra-articular fracture (Type I = without ulnar styloid fx, Type II = with ulnar styloid fx).",
                "th": "Types I & II: หักนอกข้อต่อ (Type I = ไม่มี ulnar styloid หัก, Type II = มี ulnar styloid หัก)"
              },
              {
                "en": "Types III & IV: Intra-articular involving Radiocarpal joint only (Type III = without ulnar styloid fx, Type IV = with ulnar styloid fx).",
                "th": "Types III & IV: หักเข้าข้อ Radiocarpal เท่านั้น (Type III = ไม่มี ulnar styloid หัก, Type IV = มี ulnar styloid หัก)"
              },
              {
                "en": "Types V & VI: Intra-articular involving DRUJ only (Type V = without ulnar styloid fx, Type VI = with ulnar styloid fx).",
                "th": "Types V & VI: หักเข้าข้อ DRUJ เท่านั้น (Type V = ไม่มี ulnar styloid หัก, Type VI = มี ulnar styloid หัก)"
              },
              {
                "en": "Types VII & VIII: Intra-articular involving BOTH Radiocarpal and DRUJ joints (Type VII = without ulnar styloid fx, Type VIII = with ulnar styloid fx).",
                "th": "Types VII & VIII: หักเข้าข้อทั้ง Radiocarpal และ DRUJ (Type VII = ไม่มี ulnar styloid หัก, Type VIII = มี ulnar styloid หัก)"
              }
            ],
            "clinicalSignificance": [
              {
                "en": "Types I & II (Extra-articular): Good prognosis with closed reduction and casting if stable.",
                "th": "Types I & II (นอกข้อ): พยากรณ์โรคดี ตอบสนองต่อการดึงจัดกระดูกและใส่เฝือกหากมั่นคง"
              },
              {
                "en": "Types III - VIII (Intra-articular / DRUJ involved): Higher Frykman type directly correlates with increased risk of post-traumatic arthritis, DRUJ instability, and permanent wrist stiffness.",
                "th": "Types III - VIII (เข้าข้อ / มีข้อ DRUJ ร่วม): ระดับ Frykman ที่สูงขึ้นสัมพันธ์โดยตรงกับความเสี่ยงข้อเสื่อม, ข้อ DRUJ หลุดหลวม และข้อมือยึดติด"
              },
              {
                "en": "Surgical Fixation: Volar Locking Plate ORIF indicated for step-off ≥2 mm, articular incongruity, or DRUJ instability; assess DRUJ stability after radius fixation.",
                "th": "ข้อบ่งชี้ผ่าตัด: ผ่าตัด Volar Locking Plate ORIF หากผิวข้อเหลื่อม ≥2 มม. หรือข้อ DRUJ ไม่มั่นคง พร้อมทดสอบความมั่นคงข้อ DRUJ หลังยึดกระดูก Radius"
              }
            ]
          },
          "investigations": [
            {
              "name": "AP & Lateral Wrist Views",
              "details": {
                "en": "Standard AP and true lateral wrist views to assess radiocarpal joint surface, DRUJ widening, and ulnar styloid fracture.",
                "th": "ภาพเอกซเรย์ข้อมือท่า AP และ Lateral ประเมินผิวข้อ radiocarpal, ระยะช่องข้อ DRUJ และรอยหัก ulnar styloid"
              }
            }
          ],
          "types": [
            {
              "type": "I",
              "name": {
                "en": "Frykman Type I (Extra-articular, No Ulnar Styloid Fx)",
                "th": "Frykman Type I (นอกข้อ - ไม่มี Ulnar Styloid หัก)"
              },
              "description": {
                "en": "Extra-articular distal radius fracture without ulnar styloid fracture.",
                "th": "กระดูก Radius ส่วนปลายหักนอกข้อ โดยไม่มีกระดูก Ulnar styloid หักร่วม"
              },
              "treatment": {
                "conservative": {
                  "en": "Closed reduction and cast immobilization for 4-6 weeks.",
                  "th": "ดึงจัดกระดูกและใส่เฝือก 4-6 สัปดาห์"
                },
                "operative": {
                  "en": "Volar locking plate if unstable or redisplaced.",
                  "th": "ผ่าตัด Volar locking plate หากไม่มั่นคงหรือเคลื่อนหลุดซ้ำ"
                }
              },
              "illustrationId": "/images/frykman/frykman1.png",
              "xrayDescription": {
                "en": "Extra-articular fracture line at distal radius; intact radiocarpal joint, DRUJ, and ulnar styloid.",
                "th": "รอยหักนอกข้อบริเวณปลายกระดูกเรเดียส โดยข้อ radiocarpal, DRUJ และ ulnar styloid สมบูรณ์ดี"
              }
            },
            {
              "type": "II",
              "name": {
                "en": "Frykman Type II (Extra-articular + Ulnar Styloid Fx)",
                "th": "Frykman Type II (นอกข้อ + มี Ulnar Styloid หัก)"
              },
              "description": {
                "en": "Extra-articular distal radius fracture combined with ulnar styloid fracture.",
                "th": "กระดูก Radius ส่วนปลายหักนอกข้อ ร่วมกับมีกระดูก Ulnar styloid หัก"
              },
              "treatment": {
                "conservative": {
                  "en": "Closed reduction and cast immobilization.",
                  "th": "ดึงจัดกระดูกและใส่เฝือก"
                },
                "operative": {
                  "en": "Volar locking plate for radius; assess DRUJ stability.",
                  "th": "ผ่าตัด Volar locking plate สำหรับ Radius และประเมินข้อ DRUJ"
                }
              },
              "illustrationId": "/images/frykman/frykman2.png",
              "xrayDescription": {
                "en": "Extra-articular distal radius fracture with fracture line across distal ulnar styloid.",
                "th": "รอยหักนอกข้อปลายกระดูกเรเดียส ร่วมกับมีรอยหักบริเวณปุ่ม ulnar styloid"
              }
            },
            {
              "type": "III",
              "name": {
                "en": "Frykman Type III (Radiocarpal Joint, No Ulnar Styloid Fx)",
                "th": "Frykman Type III (เข้าข้อ Radiocarpal - ไม่มี Ulnar Styloid หัก)"
              },
              "description": {
                "en": "Intra-articular fracture involving the radiocarpal joint, without ulnar styloid fracture.",
                "th": "กระดูกหักเข้าข้อ Radiocarpal โดยไม่มีกระดูก Ulnar styloid หัก"
              },
              "treatment": {
                "conservative": {
                  "en": "Cast if non-displaced (<2mm step-off).",
                  "th": "ใส่เฝือกหากกระดูกไม่เคลื่อน (<2 มม.)"
                },
                "operative": {
                  "en": "ORIF with volar locking plate to restore articular congruity.",
                  "th": "ผ่าตัด ORIF ด้วย Volar locking plate เพื่อเรียงผิวข้อ"
                }
              },
              "illustrationId": "/images/frykman/frykman3.png",
              "xrayDescription": {
                "en": "Intra-articular fracture extending into radiocarpal articular surface; intact DRUJ and ulnar styloid.",
                "th": "รอยหักลามเข้าผิวข้อ radiocarpal โดยข้อ DRUJ และ ulnar styloid ยังสมบูรณ์ดี"
              }
            },
            {
              "type": "IV",
              "name": {
                "en": "Frykman Type IV (Radiocarpal Joint + Ulnar Styloid Fx)",
                "th": "Frykman Type IV (เข้าข้อ Radiocarpal + มี Ulnar Styloid หัก)"
              },
              "description": {
                "en": "Intra-articular fracture involving radiocarpal joint, with ulnar styloid fracture.",
                "th": "กระดูกหักเข้าข้อ Radiocarpal ร่วมกับมีกระดูก Ulnar styloid หัก"
              },
              "treatment": {
                "conservative": {
                  "en": "Cast for undisplaced fractures.",
                  "th": "ใส่เฝือกกรณีไม่เคลื่อนตัว"
                },
                "operative": {
                  "en": "ORIF radius + evaluate DRUJ stability.",
                  "th": "ผ่าตัด ORIF Radius + ประเมินความมั่นคงข้อ DRUJ"
                }
              },
              "illustrationId": "/images/frykman/frykman4.png",
              "xrayDescription": {
                "en": "Intra-articular fracture extending into radiocarpal joint with associated ulnar styloid fracture.",
                "th": "รอยหักลามเข้าข้อ radiocarpal ร่วมกับมีรอยหัก ulnar styloid"
              }
            },
            {
              "type": "V",
              "name": {
                "en": "Frykman Type V (DRUJ Joint, No Ulnar Styloid Fx)",
                "th": "Frykman Type V (เข้าข้อ DRUJ - ไม่มี Ulnar Styloid หัก)"
              },
              "description": {
                "en": "Intra-articular fracture involving the distal radioulnar joint (DRUJ), without ulnar styloid fracture.",
                "th": "กระดูกหักเข้าข้อ DRUJ โดยไม่มีกระดูก Ulnar styloid หัก"
              },
              "treatment": {
                "conservative": {
                  "en": "Cast with forearm in supination/neutral if DRUJ is stable.",
                  "th": "ใส่เฝือกดามแขนในท่าหงาย/ท่ากลาง หากข้อ DRUJ มั่นคง"
                },
                "operative": {
                  "en": "ORIF radius ± DRUJ pinning if unstable.",
                  "th": "ผ่าตัด ORIF Radius ± ปักเข็มยึดข้อ DRUJ หากไม่มั่นคง"
                }
              },
              "illustrationId": "/images/frykman/frykman5.png",
              "xrayDescription": {
                "en": "Intra-articular fracture extending into distal radioulnar joint (sigmoid notch); intact ulnar styloid.",
                "th": "รอยหักลามเข้าข้อ DRUJ (sigmoid notch) โดย ulnar styloid ยังสมบูรณ์ดี"
              }
            },
            {
              "type": "VI",
              "name": {
                "en": "Frykman Type VI (DRUJ Joint + Ulnar Styloid Fx)",
                "th": "Frykman Type VI (เข้าข้อ DRUJ + มี Ulnar Styloid หัก)"
              },
              "description": {
                "en": "Intra-articular fracture involving DRUJ, combined with ulnar styloid fracture.",
                "th": "กระดูกหักเข้าข้อ DRUJ ร่วมกับมีกระดูก Ulnar styloid หัก"
              },
              "treatment": {
                "conservative": {
                  "en": "Immobilization only if non-displaced and stable.",
                  "th": "ดามเฝือกเฉพาะกรณีไม่เคลื่อนและข้อมั่นคง"
                },
                "operative": {
                  "en": "ORIF radius + fix ulnar styloid if DRUJ remains unstable.",
                  "th": "ผ่าตัด ORIF Radius + ยึด Ulnar styloid หากข้อ DRUJ ยังไม่มั่นคง"
                }
              },
              "illustrationId": "/images/frykman/frykman6.png",
              "xrayDescription": {
                "en": "Intra-articular fracture involving DRUJ combined with ulnar styloid fracture.",
                "th": "รอยหักลามเข้าข้อ DRUJ ร่วมกับมีรอยหัก ulnar styloid"
              }
            },
            {
              "type": "VII",
              "name": {
                "en": "Frykman Type VII (Both RC & DRUJ Joints, No Ulnar Styloid Fx)",
                "th": "Frykman Type VII (เข้าทั้ง 2 ข้อ Radiocarpal & DRUJ - ไม่มี Ulnar Styloid หัก)"
              },
              "description": {
                "en": "Intra-articular fracture involving BOTH radiocarpal and DRUJ joints, without ulnar styloid fracture.",
                "th": "กระดูกหักเข้าข้อทั้ง Radiocarpal และ DRUJ โดยไม่มีกระดูก Ulnar styloid หัก"
              },
              "treatment": {
                "conservative": {
                  "en": "Rarely indicated.",
                  "th": "แทบไม่แนะนำ"
                },
                "operative": {
                  "en": "ORIF with volar locking plate + anatomical reduction of both joints.",
                  "th": "ผ่าตัด ORIF ด้วย Volar locking plate + จัดเรียงผิวข้อทั้งสองเข้าที่สมบูรณ์"
                }
              },
              "illustrationId": "/images/frykman/frykman7.png",
              "xrayDescription": {
                "en": "Complex intra-articular fracture extending into BOTH radiocarpal and DRUJ joints; intact ulnar styloid.",
                "th": "รอยหักเข้าข้อซับซ้อนลามทั้งข้อ radiocarpal และ DRUJ โดย ulnar styloid ยังสมบูรณ์ดี"
              }
            },
            {
              "type": "VIII",
              "name": {
                "en": "Frykman Type VIII (Both RC & DRUJ Joints + Ulnar Styloid Fx)",
                "th": "Frykman Type VIII (เข้าทั้ง 2 ข้อ Radiocarpal & DRUJ + มี Ulnar Styloid หัก)"
              },
              "description": {
                "en": "Most complex pattern: Intra-articular involving BOTH radiocarpal and DRUJ joints, combined with ulnar styloid fracture.",
                "th": "รูปแบบซับซ้อนที่สุด: กระดูกหักเข้าข้อทั้ง Radiocarpal และ DRUJ ร่วมกับมีกระดูก Ulnar styloid หัก"
              },
              "treatment": {
                "conservative": {
                  "en": "CONTRAINDICATED.",
                  "th": "ห้ามใช้การรักษาด้วยวิธีนี้"
                },
                "operative": {
                  "en": "Comprehensive ORIF with Volar Locking Plate, articular surface reconstruction, and DRUJ stabilization.",
                  "th": "ผ่าตัด ORIF ครบวงจรด้วย Volar Locking Plate จัดเรียงผิวข้อและสร้างความมั่นคงให้ข้อ DRUJ"
                }
              },
              "illustrationId": "/images/frykman/frykman8.png",
              "xrayDescription": {
                "en": "Comminuted intra-articular fracture involving BOTH radiocarpal and DRUJ joints plus ulnar styloid fracture.",
                "th": "รอยหักแตกเข้าข้อลามทั้งข้อ radiocarpal, DRUJ และมีรอยหัก ulnar styloid ร่วมด้วย"
              }
            }
          ]
        }
      ]
    }
  ]
};
