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
                "decisionPrinciple": {
                  "en": "Non-operative treatment for non-displaced fractures without mechanical block; excellent outcomes (>95%) with brief rest.",
                  "th": "รักษาแบบไม่ผ่าตัดสำหรับรอยหักไม่เคลื่อนตัวและไม่มีข้อขัด ฟื้นตัวได้ดีมาก (>95%) โดยพักชั่วคราว"
                },
                "conservative": {
                  "indication": {
                    "en": "Non-displaced or minimally displaced fracture (<2 mm)\nNo mechanical block to active/passive pronation and supination\nIntact elbow joint stability",
                    "th": "รอยหักไม่เคลื่อนตัว หรือเคลื่อนตัวน้อยมาก (<2 มม.)\nไม่มีอาการข้อศอกขัด หมุนคว่ำ-หงายแขนได้ราบรื่น\nข้อศอกมีความมั่นคงดี ไม่หลุดหลวม"
                  },
                  "method": {
                    "en": "Sling immobilization for comfort for 2–7 days only\nCryotherapy and oral analgesics for pain control",
                    "th": "ใส่สายคล้องแขน (Sling) ประคอง 2–7 วันเฉพาะช่วงปวดมาก\nประคบเย็นและรับประทานยาแก้ปวดบรรเทาอาการ"
                  },
                  "rehabilitation": {
                    "en": "Early active elbow flexion/extension and forearm rotation as tolerated after day 2–3\nRepeat clinical and radiographic check at 1–2 weeks",
                    "th": "เริ่มฝึกงอ-เหยียดข้อศอกและหมุนคว่ำหงายแขนทันทีหลังวันที่ 2–3 ตามอาการปวด\nนัดตรวจติดตามอาการและถ่ายภาพ X-ray ซ้ำที่ 1–2 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "DO NOT immobilize for >7 days to prevent irreversible elbow stiffness\nEnsure aspiration of hemarthrosis if severe pain limits assessment",
                    "th": "ห้ามดามแขนนานเกิน 7 วันเด็ดขาดเพื่อป้องกันข้อศอกยึดติดถาวร\nหากปวดมากจนตรวจหมุนแขนไม่ได้ ควรเจาะดูดเลือดในข้อ (Hemarthrosis) ออกก่อนประเมิน"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "Not indicated for true Mason Type I fractures",
                    "th": "ไม่มีข้อบ่งชี้ในการผ่าตัดสำหรับรอยหัก Type I แท้"
                  },
                  "method": {
                    "en": "Not applicable",
                    "th": "ไม่มีความจำเป็นต้องทำหัตถการผ่าตัด"
                  }
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
                "decisionPrinciple": {
                  "en": "Surgery indicated if mechanical block is present or fragment involves >30% articular surface with >2mm displacement.",
                  "th": "แนะนำผ่าตัดหากมีข้อศอกขัดขวางการหมุนแขน หรือชิ้นกระดูกกินพื้นที่ผิวข้อ >30% ร่วมกับเคลื่อนตัว >2 มม."
                },
                "conservative": {
                  "indication": {
                    "en": "Displaced >2mm BUT smooth full forearm rotation without mechanical block (tested under local anesthesia block)\nPatient with high surgical risks or low functional demand",
                    "th": "เคลื่อนตัว >2 มม. แต่หมุนแขนคว่ำหงายได้เต็มที่ไม่ติดขัด (ทดสอบหลังฉีดยาชาเฉพาะที่)\nผู้ป่วยที่มีความเสี่ยงสูงจากการผ่าตัด หรือใช้งานแขนน้อยมาก"
                  },
                  "method": {
                    "en": "Posterior splint or sling for 5–7 days\nEarly active motion under supervision",
                    "th": "ใส่เฝือกดามหลังแขนหรือ Sling สั้นๆ 5–7 วัน\nเริ่มฝึกขยับข้อศอกทันทีหลังทุเลาปวด"
                  },
                  "rehabilitation": {
                    "en": "Active-assisted pronation/supination from week 1\nClose radiographic follow-up at 1, 2, and 4 weeks",
                    "th": "ฝึกหมุนแขนตั้งแต่สัปดาห์แรก\nติดตามภาพเอกซเรย์สม่ำเสมอที่ 1, 2 และ 4 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "Secondary displacement may lead to late mechanical impingement and osteoarthritis",
                    "th": "อาจเกิดการเคลื่อนตัวเพิ่มขึ้นจนเกิดข้อติดขัดหรือข้อเสื่อมตามมาในภายหลัง"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "Mechanical block to forearm pronation/supination\nArticular step-off >2mm involving >30% of radial head\nAssociated elbow instability or ligamentous injury",
                    "th": "มีอาการข้อศอกขัดขวางการหมุนคว่ำ-หงายแขน\nผิวข้อเหลื่อม >2 มม. และกินพื้นที่ผิวข้อ >30%\nมีภาวะข้อศอกหลวมหรือไม่มั่นคงร่วมด้วย"
                  },
                  "method": {
                    "en": "Open Reduction and Internal Fixation (ORIF)\nHeadless compression screws (1.5–2.4 mm) countersunk beneath cartilage\nLow-profile mini-locking plate placed strictly in the Safe Zone (90°–110° non-articulating arc)",
                    "th": "ผ่าตัดจัดกระดูกและยึดตรึงภายใน (ORIF)\nใช้ Headless compression screws (1.5–2.4 มม.) ฝังจมมิดใต้ผิวกระดูกอ่อน\nหรือดามแผ่นโลหะขนาดเล็ก (Mini-plate) เฉพาะบริเวณ Safe Zone เท่านั้น"
                  },
                  "rehabilitation": {
                    "en": "Posterior splint for 7–10 days until soft tissue healing\nEarly active ROM immediately after suture removal",
                    "th": "ดามเฝือกอ่อนหลังแขน 7–10 วันเพื่อรอแผลหาย\nเริ่มฝึกขยับงอ-เหยียดและหมุนข้อศอกทันทีหลังตัดไหม"
                  },
                  "pitfalls": {
                    "en": "NEVER place hardware outside the Safe Zone to avoid impingement against the Proximal Radioulnar Joint (PRUJ)\nAvoid posterior interosseous nerve (PIN) injury during lateral approach (maintain pronation)",
                    "th": "ห้ามวางโลหะนอกบริเวณ Safe Zone เด็ดขาด เพื่อป้องกันการขัดสีกับข้อ PRUJ\nระวังอันตรายต่อเส้นประสาท PIN ขณะผ่าตัด (ควรจัดแขนในท่า Pronation)"
                  }
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
                "decisionPrinciple": {
                  "en": "Excision with Radial Head Arthroplasty (prosthesis) is standard; preserve elbow stability and length.",
                  "th": "ผ่าตัดเปลี่ยนหัวกระดูกข้อศอกเทียม (Arthroplasty) เป็นมาตรฐานหลักเพื่อรักษาความมั่นคงและความยาวแขน"
                },
                "conservative": {
                  "indication": {
                    "en": "Strictly limited to non-ambulatory elderly patients unfit for any surgery",
                    "th": "จำกัดเฉพาะผู้ป่วยสูงอายุที่ไม่สามารถรับการผ่าตัดได้เลย"
                  },
                  "method": {
                    "en": "Sling for comfort and early passive movement",
                    "th": "ใส่ Sling บรรเทาปวดและฝึกขยับเท่าที่ทนได้"
                  },
                  "rehabilitation": {
                    "en": "High risk of permanent stiffness, malunion, and chronic pain",
                    "th": "มักเกิดภาวะข้อศอกยึดติดเรื้อรังและปวดต่อเนื่อง"
                  },
                  "pitfalls": {
                    "en": "CONTRAINDICATED in active patients due to guaranteed severe joint stiffness and functional loss",
                    "th": "ห้ามใช้ในผู้ป่วยทั่วไป เพราะจะทำให้ข้อศอกพิการติดแข็งและสูญเสียการใช้งาน"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "Comminuted radial head fractures (>3 pieces) not amenable to stable ORIF\nAssociated ligamentous instability (MCL / LCL) or Essex-Lopresti injury",
                    "th": "กระดูกหัว Radius แตกละเอียด >3 ชิ้นขึ้นไปซึ่งไม่สามารถยึด ORIF ให้มั่นคงได้\nมีการบาดเจ็บของเส้นเอ็นยึดข้อศอกหรือเยื่อ Interosseous membrane ร่วมด้วย"
                  },
                  "method": {
                    "en": "Radial head excision + Modular Metallic Radial Head Arthroplasty (RHA)\nORIF attempted ONLY if reconstructible into ≤3 large fragments\nRepair lateral collateral ligament (LCL / LUCL) complex using suture anchors",
                    "th": "ผ่าตัดตัดหัวกระดูกที่แตกออก ร่วมกับใส่หัวข้อศอกเทียมโลหะ (Radial Head Arthroplasty)\nพิจารณา ORIF เฉพาะกรณีที่ประกอบกระดูกได้มั่นคง (≤3 ชิ้นใหญ่)\nเย็บซ่อมเอ็นยึดข้อศอกด้านนอก (LCL/LUCL) ด้วย Suture anchors"
                  },
                  "rehabilitation": {
                    "en": "Hinged elbow brace locked at 90° for 10–14 days\nEarly active-assisted flexion/extension from week 2 within safe arc",
                    "th": "ใส่สนับศอกชนิดปรับองศาได้ (Hinged brace) ล็อก 90° นาน 10–14 วัน\nเริ่มฝึกงอเหยียดข้อศอกในมุมที่ปลอดภัยตั้งแต่สัปดาห์ที่ 2"
                  },
                  "pitfalls": {
                    "en": "CRITICAL: NEVER perform radial head excision ALONE without prosthesis if interosseous membrane is torn (prevents proximal radial migration and wrist pain)\nAvoid overstuffing the radiocapitellar joint with an oversized prosthetic head",
                    "th": "ข้อห้ามวิกฤต: ห้ามตัดหัวกระดูกออกโดยไม่ใส่ข้อเทียมเด็ดขาดหากมีเอ็น Interosseous membrane ฉีกขาด (ป้องกันหัวกระดูกเลื่อนชนข้อมือ)\nหลีกเลี่ยงการเลือกขนาดหัวข้อเทียมที่ใหญ่เกินไป (Overstuffing) เพราะจะทำลายผิวกระดูกอ่อน Capitellum"
                  }
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
                "decisionPrinciple": {
                  "en": "Emergency concentric reduction + bone fixation/replacement + ligamentous reconstruction.",
                  "th": "ดึงจัดข้อศอกเข้าที่ฉุกเฉิน + ผ่าตัดยึด/เปลี่ยนข้อหัวกระดูก + เย็บซ่อมเอ็นยึดข้อศอกรอบทิศทาง"
                },
                "conservative": {
                  "indication": {
                    "en": "Contraindicated as primary definitive treatment",
                    "th": "ห้ามใช้เป็นการรักษาหลักเด็ดขาด"
                  },
                  "method": {
                    "en": "Emergency closed reduction + long arm splint ONLY as temporary bridge to surgery",
                    "th": "ดึงข้อศอกเข้าที่ฉุกเฉินและดามเฝือกยาวชั่วคราวเพื่อรอการผ่าตัดเท่านั้น"
                  },
                  "rehabilitation": {
                    "en": "Extremely high risk of recurrent dislocation, joint collapse, and permanent stiffness",
                    "th": "เสี่ยงต่อการหลุดซ้ำ ข้อศอกหลุดหลวม และข้อติดแข็งถาวรสูงมาก"
                  },
                  "pitfalls": {
                    "en": "Do not attempt cast immobilization for unstable Mason IV patterns",
                    "th": "ห้ามรักษาด้วยเฝือกเพียงอย่างเดียวในเคสข้อศอกไม่มั่นคง"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "All Mason Type IV fracture-dislocations\nTerrible Triad of the elbow (Radial head fracture + Coronoid fracture + LCL tear)",
                    "th": "ผู้ป่วย Mason Type IV ทุกราย\nกลุ่มอาการ Terrible triad (หัว Radius หัก + Coronoid หัก + เอ็น LCL ขาด)"
                  },
                  "method": {
                    "en": "Radial Head ORIF or Arthroplasty (RHA)\nCoronoid process fixation (suture lasso or screw/plate)\nLCL / LUCL complex anatomical reattachment to lateral epicondyle using suture anchors\nMCL repair or hinged external fixator if residual instability persists >30° extension",
                    "th": "ผ่าตัดยึดกระดูก ORIF หรือใส่ข้อเทียมหัวเรเดียส (RHA)\nยึดตรึงกระดูก Coronoid (Suture lasso หรือ Screw/Plate)\nเย็บซ่อมเอ็น LCL/LUCL กลับเข้าจุดเกาะเดิมด้วย Suture anchors\nเย็บซ่อมเอ็น MCL หรือใส่ Hinged External Fixator หากข้อศอกยังหลุดเมื่อเหยียดเกิน 30°"
                  },
                  "rehabilitation": {
                    "en": "Hinged elbow brace with extension block (typically locked 30°–90° for first 2–3 weeks)\nActive-assisted motion within protected stable arc\nGradual extension to full over 6 weeks",
                    "th": "ใส่ Hinged brace บล็อกมุมเหยียด (ล็อก 30°–90° ใน 2–3 สัปดาห์แรก)\nเริ่มฝึกขยับในมุมที่มั่นคงปลอดภัย\nค่อยๆ เพิ่มมุมเหยียดจนเต็มที่ภายใน 6 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "Test elbow stability through full arc before leaving OR (ensure no subluxation at >30° extension)\nPost-op heterotopic ossification prophylaxis (Indomethacin or radiation)",
                    "th": "ต้องทดสอบความมั่นคงของข้อศอกทุกองศาก่อนปิดแผลผ่าตัด (ต้องไม่หลุดเมื่อเหยียดถึง 30°)\nพิจารณาให้ยาป้องกันการเกิดกระดูกงอกผิดรูป (Heterotopic Ossification) เช่น Indomethacin"
                  }
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
                "decisionPrinciple": {
                  "en": "Non-displaced simple transverse fracture (<2 mm displacement); intact extensor mechanism; long arm posterior splint/cast with elbow flexed 45–90° for 2–3 weeks achieves high union rate.",
                  "th": "กระดูกหักขวางเรียบไม่เคลื่อนตัว (<2 มม.) กลไกการเหยียดข้อศอกยังปกติ รักษาแบบไม่ผ่าตัดด้วยเฝือกยาวเหนือศอก (Long arm splint/cast) งอศอก 45–90 องศา นาน 2–3 สัปดาห์ กระดูกติดดีเยี่ยม"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• True non-displaced Mayo IA fracture (< 2 mm displacement)\n• Intact active elbow extension against gravity",
                    "th": "• กระดูกหัก Mayo IA ไม่เคลื่อนตัว (< 2 มม.)\n• สามารถเหยียดข้อศอกตรงต้านแรงโน้มถ่วงได้เอง"
                  },
                  "method": {
                    "en": "• Long arm posterior splint or cast flexed at 45°–90° for 2–3 weeks",
                    "th": "• ใส่เฝือกหลังยาวเหนือศอก (Long arm splint/cast) งอศอก 45°–90° นาน 2–3 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Start active-assisted elbow flexion and extension out of splint at 3 weeks; active strengthening at 6–8 weeks",
                    "th": "• เริ่มฝึกช่วยงอเหยียดข้อศอกที่ 3 สัปดาห์ และเริ่มฝึกเพิ่มกำลังกล้ามเนื้อที่ 6–8 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Failure to verify intact active extension against gravity — occult triceps rupture leads to secondary displacement",
                    "th": "• ละเลยการตรวจการเหยียดศอกต้านแรงโน้มถ่วง หากเอ็น Triceps ขาดซ่อนอยู่จะทำให้กระดูกเลื่อนหลุดตามมา"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Secondary displacement > 2 mm or loss of extensor mechanism during follow-up",
                    "th": "• กระดูกเคลื่อนตัว > 2 มม. หรือสูญเสียแรงเหยียดข้อศอกจากการติดตามอาการ"
                  },
                  "method": {
                    "en": "• Tension Band Wiring (TBW)",
                    "th": "• ผ่าตัดยึดกระดูกด้วยวิธี Tension Band Wiring (TBW)"
                  },
                  "rehabilitation": {
                    "en": "• Early active motion from post-op week 1",
                    "th": "• เริ่มฝึกขยับข้อศอกได้ตั้งแต่สัปดาห์แรกหลังผ่าตัด"
                  },
                  "pitfalls": {
                    "en": "• Unnecessary surgery for undisplaced fractures",
                    "th": "• ผ่าตัดเกินจำเป็นในกระดูกหักที่ไม่เคลื่อน"
                  }
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
                "decisionPrinciple": {
                  "en": "Non-displaced comminuted fracture (<2 mm); stable joint; close weekly radiographic monitoring during cast immobilization to detect displacement under triceps pull.",
                  "th": "กระดูกแตกละเอียดแต่ไม่เคลื่อนตัว (<2 มม.) ข้อศอกมั่นคง ใส่เฝือกยาวและนัดติดตามภาพเอกซเรย์ทุกสัปดาห์เพื่อเฝ้าระวังชิ้นกระดูกเลื่อนหลุดจากแรงดึงของ Triceps"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Non-displaced comminuted olecranon fracture (< 2 mm displacement)\n• Reliable patient able to attend weekly follow-up",
                    "th": "• กระดูกหักแตกละเอียดไม่เคลื่อนตัว (< 2 มม.)\n• ผู้ป่วยสามารถมาตรวจเอกซเรย์ติดตามได้ทุกสัปดาห์"
                  },
                  "method": {
                    "en": "• Long arm posterior cast at 60°–90° flexion for 3–4 weeks with weekly serial X-rays",
                    "th": "• ใส่เฝือกยาวเหนือศอก (งอศอก 60°–90°) นาน 3–4 สัปดาห์ พร้อมเอกซเรย์ติดตามทุกสัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Gentle progressive active ROM after 3–4 weeks once early callus forms",
                    "th": "• เริ่มฝึกขยับข้อศอกเบาๆ ที่ 3–4 สัปดาห์เมื่อเริ่มมีกระดูกสมาน"
                  },
                  "pitfalls": {
                    "en": "• Triceps muscle tone displacing comminuted fragments into the joint undetected without serial radiographs",
                    "th": "• ชิ้นกระดูกแตกอาจเลื่อนหลุดเข้าช่องข้อจากแรงดึงของกล้ามเนื้อ Triceps หากไม่ได้เอกซเรย์ติดตามอย่างสม่ำเสมอ"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Secondary displacement > 2 mm or fragment depression",
                    "th": "• ชิ้นกระดูกเคลื่อนตัว > 2 มม. หรือผิวข้อยุบตัว"
                  },
                  "method": {
                    "en": "• Contoured Olecranon Locking Compression Plate (LCP) ORIF (TBW is contraindicated for comminution)",
                    "th": "• ผ่าตัดดามแผ่นเหล็กล็อค Olecranon LCP (ห้ามทำ TBW ในกระดูกแตกละเอียด)"
                  },
                  "rehabilitation": {
                    "en": "• Immediate active ROM",
                    "th": "• เริ่มฝึกขยับข้อศอกได้ทันทีหลังผ่าตัด"
                  },
                  "pitfalls": {
                    "en": "• Attempting TBW on comminuted bone",
                    "th": "• ฝืนทำ TBW บนกระดูกที่แตกละเอียด"
                  }
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
                "decisionPrinciple": {
                  "en": "Displaced simple transverse/oblique fracture (>2 mm); stable ulnohumeral joint; classic indication for Tension Band Wiring (TBW) with K-wires and figure-of-8 wire loop converting tensile triceps pull into articular compression.",
                  "th": "กระดูกหักขวางเคลื่อนตัว >2 มม. ข้อศอกยังมั่นคง เป็นข้อบ่งชี้มาตรฐานของการผ่าตัด Tension Band Wiring (TBW) เพื่อเปลี่ยนแรงดึงของกล้ามเนื้อ Triceps ให้เป็นแรงอัดกระชับผิวข้อศอก"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Non-ambulatory elderly patients with severe medical comorbidities",
                    "th": "• ผู้ป่วยสูงอายุติดเตียงที่มีโรคร่วมรุนแรง"
                  },
                  "method": {
                    "en": "• Sling immobilization",
                    "th": "• ใส่สายคล้องแขนประคองอาการ"
                  },
                  "rehabilitation": {
                    "en": "• Passive motion",
                    "th": "• ขยับแขนเบาๆ"
                  },
                  "pitfalls": {
                    "en": "• Nonunion and permanent loss of active elbow extension",
                    "th": "• กระดูกไม่ติดและสูญเสียแรงเหยียดข้อศอกถาวร"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All displaced Mayo IIA olecranon fractures in active patients\n• Inability to actively extend elbow against gravity",
                    "th": "• กระดูกหัก Mayo IIA ที่เคลื่อนตัวในผู้ป่วยทั่วไปทุกราย\n• ไม่สามารถเหยียดข้อศอกตรงต้านแรงโน้มถ่วงได้"
                  },
                  "method": {
                    "en": "• Tension Band Wiring (TBW): Parallel 1.6–2.0 mm K-wires engaged in anterior ulnar cortex (or down intramedullary canal) + 1.0–1.2 mm figure-of-8 stainless steel wire loop passed through distal ulnar drill hole\n• Alternative: Pre-contoured olecranon plate if oblique pattern extends distal to coronoid",
                    "th": "• ผ่าตัดยึดด้วย Tension Band Wiring (TBW): ปักลวด K-wires ขนาด 1.6–2.0 มม. คู่ขนานเกาะผนังกระดูกด้านหน้า + ร้อยลวดสแตนเลสเบอร์ 18/20 เป็นรูปเลข 8 (Figure-of-8 loop) ผ่านรูกระดูกส่วนล่าง\n• ทางเลือก: ใช้แผ่นเหล็กล็อค Olecranon Plate หากรอยหักเฉียงยาวพาดผ่านระดับกระดูก Coronoid"
                  },
                  "rehabilitation": {
                    "en": "• Immediate active and active-assisted elbow flexion/extension on post-op day 2; no splinting after 1 week; avoid resisted triceps extension for 6 weeks",
                    "th": "• เริ่มฝึกงอเหยียดข้อศอกได้ทันทีตั้งแต่วันที่ 2 หลังผ่าตัด ถอดเฝือกหลัง 1 สัปดาห์ หลีกเลี่ยงการเหยียดศอกต้านแรง 6 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• K-wire back-out and skin irritation (~20–30%) — ensure K-wires are bent 180° and tamped flush onto bone\n• Using TBW for comminuted fractures",
                    "th": "• ลวด K-wire ถอยร่นทิ่มผิวหนังระคายเคือง (~20–30%) ต้องงอปลายลวด 180° และตอกให้แนบสนิทกับผิวกระดูก\n• การนำ TBW ไปใช้ในกระดูกหักแตกละเอียด"
                  }
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
                "decisionPrinciple": {
                  "en": "Displaced comminuted olecranon fracture with stable joint; absolute contraindication for Tension Band Wiring (TBW crushes fragments and shortens trochlear notch); mandatory anatomical Olecranon Contour Locking Plating (LCP).",
                  "th": "กระดูกหักแตกละเอียดและเคลื่อนตัว ข้อศอกยังมั่นคง ห้ามผ่าตัดด้วย Tension Band Wiring เด็ดขาด (TBW จะบดอัดชิ้นกระดูกให้ทรุดและช่องข้อแคบลง) ต้องผ่าตัดดามด้วยแผ่นเหล็กล็อค Olecranon Contour Locking Plate"
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
                    "en": "• Severe joint incongruity and loss of elbow function",
                    "th": "• ผิวข้อขรุขระรุนแรงและสูญเสียการทำงานของข้อศอก"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All displaced comminuted Mayo IIB olecranon fractures",
                    "th": "• กระดูกหัก Mayo IIB ที่เคลื่อนตัวและแตกละเอียดทุกราย"
                  },
                  "method": {
                    "en": "• Posterior approach: Anatomical reduction of trochlear notch + Pre-contoured Olecranon Locking Compression Plate (LCP) applied to dorsal tensile surface with home-run proximal screws into the coronoid base ± lag screws",
                    "th": "• ผ่าตัดเปิดทางด้านหลัง: จัดเรียงผิวข้อ Trochlear notch ให้เรียบสนิท ดามด้วยแผ่นเหล็กล็อคดัดเข้ารูป Olecranon LCP วางบนผิวด้านหลัง โดยขันสกรูตัวยาวจากหัว Olecranon พุ่งตรงไปยึดฐานกระดูก Coronoid (Home-run screw) ± Lag screws"
                  },
                  "rehabilitation": {
                    "en": "• Immediate active elbow ROM on post-op day 1–2; active extension against gravity at 6 weeks",
                    "th": "• เริ่มฝึกขยับงอเหยียดข้อศอกได้ทันทีตั้งแต่วันที่ 1–2 หลังผ่าตัด เริ่มเหยียดศอกต้านแรงที่ 6 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Applying TBW causing fracture collapse, joint narrowing, and rapid osteoarthritis",
                    "th": "• การฝืนทำ TBW จะบีบให้รอยหักแตกละเอียดทรุดตัว ผิวข้อแคบลงและข้อเสื่อมรวดเร็ว"
                  }
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
                "decisionPrinciple": {
                  "en": "Displaced simple fracture associated with ulnohumeral joint subluxation/dislocation (Fracture-Dislocation); emergency joint reduction and rigid anatomical locking plate ORIF ± collateral ligament repair.",
                  "th": "กระดูกหักร่วมกับข้อศอกหลุดหลวม (Fracture-dislocation) ต้องดึงจัดข้อศอกเข้าที่ฉุกเฉินและผ่าตัดดามแผ่นเหล็กล็อค Olecranon Locking Plate ที่แข็งแรง ± ซ่อมแซมเส้นเอ็นข้อศอก"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• CONTRAINDICATED (Guaranteed persistent joint subluxation and catastrophic disability)",
                    "th": "• ห้ามใช้วิธีนี้เด็ดขาด (ทำให้ข้อศอกหลุดค้าง พิการ และติดแข็งถาวร)"
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
                    "en": "• Chronic joint dislocation and flail elbow",
                    "th": "• ข้อศอกหลุดเรื้อรังและสูญเสียการใช้งานแขน"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All Mayo IIIA fracture-dislocations",
                    "th": "• กระดูกหักร่วมกับข้อศอกหลุด Mayo IIIA ทุกราย"
                  },
                  "method": {
                    "en": "• Emergency closed/open reduction of ulnohumeral joint + Heavy pre-contoured proximal ulnar locking plate bridging the fracture + Coronoid fixation + Repair lateral/medial collateral ligaments with suture anchors",
                    "th": "• ดึงจัดข้อศอกเข้าที่ฉุกเฉิน + ผ่าตัดดามแผ่นเหล็กล็อคขนาดใหญ่ (Heavy Olecranon Locking Plate) + ยึดกระดูก Coronoid + เย็บซ่อมเอ็นข้อศอกด้านข้าง (LCL/MCL) ด้วย Suture Anchors"
                  },
                  "rehabilitation": {
                    "en": "• Hinged elbow brace with 30° extension block for 2–3 weeks; active-assisted ROM within stable arc",
                    "th": "• ใส่สนับศอกชนิดปรับองศาได้ (Hinged brace) บล็อกเหยียด 30° นาน 2–3 สัปดาห์ ฝึกขยับในมุมที่มั่นคง"
                  },
                  "pitfalls": {
                    "en": "• Overlooking associated coronoid or radial head fractures (Trans-olecranon fracture-dislocation)",
                    "th": "• มองข้ามรอยหักของกระดูก Coronoid หรือหัวกระดูก Radius ร่วมด้วย"
                  }
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
                "decisionPrinciple": {
                  "en": "High-energy comminuted fracture with gross ulnohumeral joint dislocation; severe ligamentous and bony disruption; complex multi-column ORIF (long locking plate + coronoid fixation + ligament repair ± hinged external fixator).",
                  "th": "กระดูกแตกละเอียดรุนแรงร่วมกับข้อศอกหลุดสมบูรณ์ มีการฉีกขาดของกระดูกและเอ็นรอบข้อ ต้องผ่าตัด ORIF ดามแผ่นเหล็กล็อคขนาดยาว + ยึดกระดูก Coronoid + ซ่อมเอ็นรอบข้อ ± ใส่โครงดามกระดูกภายนอก Hinged Ex-Fix"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• CONTRAINDICATED",
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
                    "en": "• Complete loss of limb function",
                    "th": "• แขนพิการสูญเสียการใช้งานอย่างสมบูรณ์"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All Mayo IIIB complex fracture-dislocations",
                    "th": "• กระดูกหักซับซ้อนร่วมกับข้อศอกหลุด Mayo IIIB ทุกราย"
                  },
                  "method": {
                    "en": "• Comprehensive surgical reconstruction: Long anatomically contoured Olecranon Locking Plate spanning the comminuted zone + Rigid coronoid fixation + Suture anchor repair of LCL/MCL complexes ± Hinged External Fixator if residual instability persists",
                    "th": "• ผ่าตัดบูรณะโครงสร้างครบวงจร: ดามแผ่นเหล็กล็อค Olecranon LCP ขนาดยาวข้ามบริเวณที่แตกละเอียด + ยึดกระดูก Coronoid + เย็บซ่อมเอ็น LCL/MCL ด้วย Suture anchors ± ใส่โครงยึดภายนอกชนิดปรับมุมได้ (Hinged External Fixator) หากยังมีข้อหลุดหลวม"
                  },
                  "rehabilitation": {
                    "en": "• Protected active-assisted ROM in hinged brace; indomethacin / radiation prophylaxis for heterotopic ossification",
                    "th": "• ฝึกขยับข้อศอกในสนับศอกปรับองศา; ให้ยา Indomethacin หรือฉายรังสีเพื่อป้องกันหินปูนเกาะข้อ (Heterotopic ossification)"
                  },
                  "pitfalls": {
                    "en": "• Persistent ulnohumeral subluxation leading to rapid cartilage destruction\n• High risk of heterotopic ossification and ulnar nerve neuropathy",
                    "th": "• ข้อศอกยังคงหลุดหลวมเล็กน้อยทำให้กระดูกอ่อนพังทลายอย่างรวดเร็ว\n• เสี่ยงสูงต่อการเกิดหินปูนเกาะข้อและการบาดเจ็บของเส้นประสาท Ulnar"
                  }
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
                "decisionPrinciple": {
                  "en": "Proximal 1/3 ulna fracture + radial head dislocation (PRUJ); mandatory anatomical rigid ORIF of the ulna with 3.5 mm dynamic compression / locking plate which almost always achieves spontaneous concentric radial head reduction; check PIN function (high neuropraxia risk).",
                  "th": "กระดูก Ulna ส่วนต้น 1/3 หักร่วมกับหัวกระดูก Radius ที่ข้อศอกเคลื่อนหลุด ต้องผ่าตัดเปิดจัดและดามกระดูก Ulna ด้วยแผ่นเหล็ก 3.5 mm LC-DCP/LCP ให้ตรงเป๊ะตามกายวิภาค ซึ่งจะดึงหัว Radius ให้เด้งกลับเข้าข้อศอกเองโดยอัตโนมัติ พร้อมตรวจการทำงานของเส้นประสาท PIN"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Pediatric closed Monteggia fractures with successful stable closed reduction (long arm cast in supination/flexion)",
                    "th": "• กระดูกหัก Monteggia ในเด็กที่สามารถดึงจัดกระดูกและหัวข้อศอกเข้าที่ได้มั่นคง"
                  },
                  "method": {
                    "en": "• Long arm cast with elbow flexed >90° and supinated (for Bado I)",
                    "th": "• ใส่เฝือกยาวเหนือศอก งอศอก >90 องศา และหงายมือ (สำหรับ Bado I)"
                  },
                  "rehabilitation": {
                    "en": "• Cast for 4–6 weeks in children; weekly X-ray monitoring",
                    "th": "• ดามเฝือก 4–6 สัปดาห์ในเด็ก พร้อมเอกซเรย์ติดตามทุกสัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• CONTRAINDICATED in adults — 100% failure rate with chronic radial head dislocation, severe loss of forearm rotation, and late arthrosis",
                    "th": "• ห้ามใช้วิธีไม่ผ่าตัดในผู้ใหญ่ ล้มเหลว 100% ทำให้หัวกระดูกเรเดียสหลุดค้าง ข้อศอกพิการ และหมุนแขนไม่ได้ถาวร"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All adult Monteggia fracture-dislocations (Bado Types I, II, III, IV)\n• Irreducible pediatric fractures or failed closed reduction",
                    "th": "• กระดูกหัก Monteggia ในผู้ใหญ่ทุกราย (Bado Types I, II, III, IV)\n• กระดูกหักในเด็กที่ดึงจัดกระดูกไม่เข้าที่"
                  },
                  "method": {
                    "en": "• Posterior approach to ulna: Anatomical reduction and rigid internal fixation with 3.5 mm dynamic compression plate (LC-DCP) or locking compression plate (LCP) with minimum 6–8 cortices above and below fracture\n• Radial Head Management: Spontaneous reduction occurs once ulna length and alignment are restored; open reduction via lateral (Kaplan/Kocher) approach ONLY if annular ligament or capsule blocks reduction",
                    "th": "• ผ่าตัดเข้าทางด้านหลังกระดูก Ulna: จัดกระดูกให้เข้าที่สมบูรณ์ 100% และดามแผ่นเหล็ก 3.5 mm LC-DCP หรือ LCP (ยึดสกรูอย่างน้อยข้างละ 6–8 Cortices)\n• การจัดการหัวกระดูก Radius: เมื่อจัดความยาวและแนว Ulna ตรงแล้ว หัว Radius จะเข้าที่เอง หากยังมีเนื้อเยื่อ Annular ligament ขวางอยู่ จึงเปิดเข้าทางด้านข้าง (Kocher approach) เพื่อนำสิ่งกีดขวางออก"
                  },
                  "rehabilitation": {
                    "en": "• Posterior splint for 7–10 days until wound healing; early active elbow flexion/extension and forearm pronation/supination immediately thereafter",
                    "th": "• ดามเฝือกอ่อน 7–10 วันเพื่อรอแผลหาย แล้วเริ่มฝึกงอเหยียดข้อศอกและหมุนคว่ำหงายแขนได้ทันที"
                  },
                  "pitfalls": {
                    "en": "• Incomplete anatomical reduction of the ulna preventing concentric radial head reduction\n• Iatrogenic Posterior Interosseous Nerve (PIN) injury during anterior radial head exploration",
                    "th": "• จัดกระดูก Ulna ไม่ตรงสนิททำให้หัว Radius ไม่ยอมเข้าที่\n• อันตรายต่อเส้นประสาท PIN ขณะผ่าตัดเปิดสำรวจหัว Radius ด้านหน้า"
                  }
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
                "decisionPrinciple": {
                  "en": "Distal 1/3 radius shaft fracture + DRUJ dislocation; known as the 'Fracture of Necessity' because conservative cast treatment fails in ~100% of adults; mandatory anatomical ORIF of the radius with 3.5 mm LCP to restore radial bow and reduce DRUJ; assess DRUJ stability intra-operatively.",
                  "th": "กระดูก Radius ส่วนปลาย 1/3 หักร่วมกับข้อ DRUJ ที่ข้อมือหลุด ได้ชื่อว่า 'Fracture of Necessity' เพราะการใส่เฝือกในผู้ใหญ่ล้มเหลวเกือบ 100% ต้องผ่าตัด ORIF ดามแผ่นเหล็ก 3.5 mm LCP กระดูก Radius คืนความยาวและส่วนโค้ง Radial Bow แล้วทดสอบความมั่นคงของข้อ DRUJ ในห้องผ่าตัด"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Pediatric Galeazzi equivalent fractures (distal radius fracture with distal ulnar physeal injury) treated with closed reduction and long arm cast in supination",
                    "th": "• กระดูกหัก Galeazzi ในเด็กที่ดึงจัดกระดูกเข้าที่ได้ ใส่เฝือกยาวในท่าหงายมือ"
                  },
                  "method": {
                    "en": "• Long arm cast for children",
                    "th": "• ใส่เฝือกยาวเหนือศอกในเด็ก"
                  },
                  "rehabilitation": {
                    "en": "• 4–6 weeks cast immobilization",
                    "th": "• ดามเฝือก 4–6 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• CONTRAINDICATED IN ADULTS — 'Fracture of Necessity' with ~100% failure rate due to deforming pull of Brachioradialis and Pronator Quadratus",
                    "th": "• ห้ามใช้วิธีไม่ผ่าตัดในผู้ใหญ่ ('Fracture of Necessity') ล้มเหลวเกือบ 100% จากแรงดึงของกล้ามเนื้อ Brachioradialis และ Pronator quadratus"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All adult Galeazzi fracture-dislocations\n• Unstable pediatric Galeazzi variants",
                    "th": "• กระดูกหัก Galeazzi ในผู้ใหญ่ทุกราย\n• ชนิดไม่มั่นคงในเด็ก"
                  },
                  "method": {
                    "en": "• Volar Henry approach: Anatomical reduction of the radius restoring radial bow and length + 3.5 mm LC-DCP / LCP plate fixation\n• Intra-operative DRUJ Stability Assessment:\n  - If DRUJ is stable in supination: Long arm splint in 30°–45° supination for 4 weeks\n  - If DRUJ is gross unstable: Transfixation with 1–2 transverse 1.6–2.0 mm K-wires from ulna to radius in full supination (removed at 4–6 weeks) ± TFCC suture repair",
                    "th": "• ผ่าตัดเข้าทาง Volar Henry: จัดกระดูก Radius คืนความยาวและส่วนโค้ง Radial Bow ดามแผ่นเหล็ก 3.5 mm LC-DCP / LCP\n• ทดสอบความมั่นคงข้อ DRUJ ในห้องผ่าตัด:\n  - หากข้อ DRUJ มั่นคงในท่าหงายมือ: ดามเฝือกยาวในท่าหงายมือ 30°–45° นาน 4 สัปดาห์\n  - หากข้อ DRUJ หลุดหลวมรุนแรง: ปักลวด K-wires ขนาด 1.6–2.0 มม. ขวางจาก Ulna ไป Radius ในท่าหงายมือเต็มที่ (ถอดลวดที่ 4–6 สัปดาห์) ± เย็บซ่อมเอ็น TFCC"
                  },
                  "rehabilitation": {
                    "en": "• Protected active forearm rotation starting at 4–6 weeks after K-wire removal",
                    "th": "• เริ่มฝึกหมุนคว่ำหงายแขนที่ 4–6 สัปดาห์หลังถอดลวด K-wires"
                  },
                  "pitfalls": {
                    "en": "• Missing DRUJ subluxation on post-reduction radiograph\n• Failing to test DRUJ stability in full pronation/supination after plate fixation",
                    "th": "• มองข้ามข้อ DRUJ ที่ยังหลุดเคลื่อนในภาพเอกซเรย์\n• ไม่ได้ทดสอบความมั่นคงของข้อ DRUJ ในท่าคว่ำและหงายมือหลังขันแผ่นเหล็กเสร็จ"
                  }
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
                "decisionPrinciple": {
                  "en": "Isolated mid-ulnar shaft fracture from direct blow; no PRUJ or DRUJ dislocation; non-operative functional bracing for minimal displacement (<50% translation, <10° angulation); 3.5 mm compression plating for displaced patterns.",
                  "th": "กระดูกแกน Ulna หักเดี่ยวจากการถูกกระแทกตรงโดยไม่มีข้อศอกหรือข้อมือหลุด หากเคลื่อนตัวน้อย (<50% ความกว้างกระดูก และเอียง <10°) รักษาด้วยเฝือกสั้นหรือ Sarmiento Functional Brace หากเคลื่อนเกินเกณฑ์ให้ผ่าตัดดามแผ่นเหล็ก 3.5 mm LC-DCP"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Isolated closed ulnar shaft fracture with < 50% displacement, < 10° angulation, and intact PRUJ/DRUJ",
                    "th": "• กระดูก Ulna หักเดี่ยวแบบปิด เคลื่อนตัว < 50% ทำมุม < 10° และข้อศอก/ข้อมือปกติ"
                  },
                  "method": {
                    "en": "• Posterior splint for 7–10 days for comfort, then transition to functional forearm sleeve / Sarmiento fracture brace for 4–6 weeks",
                    "th": "• ใส่เฝือกชั่วคราว 7–10 วันเพื่อบรรเทาปวด แล้วเปลี่ยนเป็น Sarmiento Functional Brace นาน 4–6 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Immediate active wrist, hand, and elbow motion; early active pronation/supination exercises as tolerated",
                    "th": "• เริ่มฝึกขยับนิ้วมือ ข้อมือ และข้อศอกทันที ฝึกหมุนคว่ำหงายแขนเบาๆ เท่าที่ทนได้"
                  },
                  "pitfalls": {
                    "en": "• Missing an associated subtle radial head dislocation (Monteggia) — always check elbow and wrist radiographs",
                    "th": "• ตรวจพลาดหัวกระดูก Radius หลุดซ่อนอยู่ (Monteggia) ต้องถ่ายภาพเอกซเรย์เห็นทั้งข้อศอกและข้อมือเสมอ"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Displacement > 50% cortical diameter\n• Angulation > 10° in any plane\n• Proximal third ulnar shaft fracture (higher nonunion rate with conservative treatment)",
                    "th": "• กระดูกเคลื่อนตัว > 50% ของความกว้างกระดูก\n• กระดูกทำมุมเอียง > 10 องศา\n• รอยหักบริเวณ 1/3 ส่วนต้นของ Ulna (เสี่ยงกระดูกไม่ติดสูงหากไม่ผ่าตัด)"
                  },
                  "method": {
                    "en": "• Subcutaneous border ulnar approach: Anatomical ORIF using 3.5 mm dynamic compression plate (LC-DCP) or locking plate with interfragmentary lag screws (minimum 6–8 cortices on each side)",
                    "th": "• ผ่าตัดเข้าทางขอบหลังกระดูก Ulna: ผ่าตัดจัดกระดูกและดามแผ่นเหล็ก 3.5 mm LC-DCP หรือ Locking Plate พร้อม Lag screws (ยึดสกรูอย่างน้อยข้างละ 6–8 Cortices)"
                  },
                  "rehabilitation": {
                    "en": "• Immediate unrestricted active ROM on post-op day 1",
                    "th": "• เริ่มฝึกขยับแขนและหมุนข้อมือได้เต็มที่ตั้งแต่วันแรกหลังผ่าตัด"
                  },
                  "pitfalls": {
                    "en": "• High nonunion rate (~10–15%) if managed non-operatively with excessive displacement",
                    "th": "• อัตรากระดูกไม่ติดสูง (~10–15%) หากฝืนรักษาแบบไม่ผ่าตัดในกระดูกที่เคลื่อนตัวมาก"
                  }
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
                "decisionPrinciple": {
                  "en": "Extra-articular distal radius fracture with dorsal displacement / dinner fork deformity; closed reduction and short arm cast for stable patterns in low-demand patients; Volar Locking Plate (VLP) ORIF for unstable or redisplaced fractures exceeding acceptable alignment criteria (dorsal tilt >10°, shortening >3 mm).",
                  "th": "กระดูกปลายแขนหักนอกข้อเคลื่อนไปทางหลังมือ (Dinner fork deformity) หากดึงเข้าที่แล้วมั่นคงให้ใส่เฝือกแขนสั้น (Short arm cast) 4–6 สัปดาห์ หากไม่มั่นคงหรือยุบตัวเกินเกณฑ์ (Dorsal tilt >10°, สั้น >3 มม.) แนะนำผ่าตัดดามแผ่นเหล็กล็อคด้านหน้า Volar Locking Plate"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Stable extra-articular distal radius fracture meeting acceptable alignment criteria after closed reduction (Radial height loss < 3 mm, radial inclination > 15°, dorsal tilt < 10°)\n• Low-demand elderly patients",
                    "th": "• กระดูกหักนอกข้อที่มั่นคงและแนวเข้าเกณฑ์ยอมรับได้หลังดึงจัดกระดูก (สั้น < 3 มม., มุมเอียง > 15°, Dorsal tilt < 10°)\n• ผู้สูงอายุที่ใช้งานแขนน้อย"
                  },
                  "method": {
                    "en": "• Hematoma block / Bier block: Closed reduction (traction + volar translation + ulnar deviation) -> Sugar-tong or short-arm radial gutter cast in neutral flexion (avoid hyperflexion Cotton-Loder position)",
                    "th": "• ฉีดยาชาเฉพาะที่เข้าโพรงกระดูกหัก (Hematoma block): ดึงจัดกระดูกเข้าที่ (Traction + Volar translation + Ulnar deviation) -> ใส่เฝือก Sugar-tong หรือเฝือกสั้นในท่าข้อมือตรง (ห้ามดัดงอข้อมือมากเกินไปในท่า Cotton-Loder)"
                  },
                  "rehabilitation": {
                    "en": "• Immediate active finger, thumb, and shoulder motion; convert to short arm cast at 2–3 weeks; total cast time 4–6 weeks; repeat weekly X-rays for 3 weeks",
                    "th": "• ขยับนิ้วมือ นิ้วโป้ง และหัวไหล่ทันที เปลี่ยนเป็นเฝือกสั้นที่ 2–3 สัปดาห์ ดามรวม 4–6 สัปดาห์ และถ่ายภาพเอกซเรย์ติดตามทุกสัปดาห์ใน 3 สัปดาห์แรก"
                  },
                  "pitfalls": {
                    "en": "• Extreme wrist flexion casting (Cotton-Loder position) causing acute carpal tunnel syndrome and complex regional pain syndrome (CRPS)",
                    "th": "• การดัดงอข้อมือในเฝือกมากเกินไป (Cotton-Loder position) ทำให้เกิดการกดทับเส้นประสาท Median ฉุกเฉิน (Acute CTS) และภาวะปวดแสบร้อน CRPS"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Unstable Colles fracture: Dorsal comminution > 50%, dorsal tilt > 10°, shortening > 3 mm, or failure of closed reduction\n• Secondary displacement during cast treatment",
                    "th": "• ชนิดไม่มั่นคง: ผนังกระดูกด้านหลังแตกละเอียด > 50%, Dorsal tilt > 10°, กระดูกหดสั้น > 3 มม. หรือดึงจัดกระดูกไม่เข้าที่\n• กระดูกเลื่อนหลุดซ้ำระหว่างใส่เฝือก"
                  },
                  "method": {
                    "en": "• Volar Henry approach: Anatomical reduction and Volar Locking Plate (VLP) fixation with distal subchondral locking peg/screw support",
                    "th": "• ผ่าตัดเข้าทางด้านหน้า (Volar Henry approach): จัดกระดูกให้เรียบเสมอและดามแผ่นเหล็กล็อคด้านหน้า Volar Locking Plate โดยขันสกรูล็อคค้ำใต้ผิวกระดูกอ่อน"
                  },
                  "rehabilitation": {
                    "en": "• Early active wrist flexion/extension and forearm rotation out of splint at 10–14 days",
                    "th": "• ถอดเฝือกและเริ่มฝึกขยับข้อมือและหมุนแขนได้ตั้งแต่ 10–14 วันหลังผ่าตัด"
                  },
                  "pitfalls": {
                    "en": "• Distal screws placed through dorsal cortex into extensor compartments (EPL attrition rupture)",
                    "th": "• สกรูตัวปลายยาวทะลุผนังกระดูกด้านหลังไปขัดสีจนเอ็นเหยียดนิ้วโป้ง (EPL) ขาด"
                  }
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
                "decisionPrinciple": {
                  "en": "Extra-articular distal radius fracture with volar displacement / garden spade deformity; inherently unstable due to volar flexor tendon deforming forces; Volar Locking Plate (VLP) ORIF is the treatment of choice; cast immobilization has high redisplacement rates.",
                  "th": "กระดูกปลายแขนหักนอกข้อเคลื่อนไปทางฝ่ามือ (Garden spade deformity) เป็นรอยหักที่ไม่มั่นคงอย่างยิ่งจากแรงดึงของเอ็นงอข้อมือ การผ่าตัดดามแผ่นเหล็กล็อคด้านหน้า Volar Locking Plate (VLP) เป็นการรักษาหลักที่แนะนำ"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Truly non-displaced fractures or high-risk non-surgical elderly patients",
                    "th": "• กระดูกไม่เคลื่อนตัวเลย หรือผู้ป่วยสูงอายุที่มีข้อห้ามผ่าตัดรุนแรง"
                  },
                  "method": {
                    "en": "• Long-arm cast in slight wrist extension and supination for 4–6 weeks",
                    "th": "• ใส่เฝือกยาวดามแขนในท่าข้อมือกระดกขึ้นเล็กน้อยและหงายมือ 4–6 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Active finger motion; serial weekly radiographs",
                    "th": "• ขยับนิ้วมือและเอกซเรย์ติดตามทุกสัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Extremely high risk of secondary volar redisplacement and acute carpal tunnel syndrome",
                    "th": "• เสี่ยงสูงมากที่กระดูกจะเลื่อนหลุดซ้ำไปทางฝ่ามือและกดทับเส้นประสาท Median"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All displaced Smith fractures in active patients\n• Inability to maintain reduction in cast",
                    "th": "• กระดูกหัก Smith ที่เคลื่อนตัวในผู้ป่วยทั่วไปทุกราย\n• ไม่สามารถดึงกระดูกให้อยู่ในแนวปกติได้ด้วยเฝือก"
                  },
                  "method": {
                    "en": "• Volar Henry approach: Anatomical reduction of volar cortical buttress and Volar Locking Buttress Plate fixation",
                    "th": "• ผ่าตัดเข้าทาง Volar Henry: จัดกระดูกให้เข้าที่สนิทและดามแผ่นเหล็ก Volar Locking Buttress Plate ค้ำยันขอบกระดูกด้านหน้า"
                  },
                  "rehabilitation": {
                    "en": "• Removable wrist splint for 1–2 weeks; immediate active finger and thumb ROM; active wrist ROM at 2 weeks",
                    "th": "• ใส่เฝือกอ่อนถอดได้ 1–2 สัปดาห์ ขยับนิ้วมือทันที และเริ่มฝึกขยับข้อมือที่ 2 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Placement of volar plate distal to watershed line causing flexor pollicis longus (FPL) tendon irritation or rupture",
                    "th": "• วางแผ่นเหล็กล้ำเกินแนว Watershed line ไปทางปลายมือ จะทำให้ขัดสีจนเอ็นงอนิ้วโป้ง (FPL) ขาด"
                  }
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
                "decisionPrinciple": {
                  "en": "Intra-articular fracture-dislocation with carpal subluxation and displaced dorsal rim fragment; inherently unstable; mandatory anatomical reduction and dorsal buttress plate / low-profile locked plate ORIF.",
                  "th": "กระดูกหักเข้าข้อร่วมกับข้อข้อมือหลุดไปด้านหลัง (Fracture-dislocation) ไม่มั่นคงอย่างยิ่ง ต้องผ่าตัดเปิดจัดผิวข้อให้เรียบสนิทและดามแผ่นเหล็กค้ำยันด้านหลัง Dorsal Buttress Locking Plate"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly CONTRAINDICATED in functional patients (Inevitably redisplaces into carpal subluxation and post-traumatic arthritis)",
                    "th": "• ห้ามใช้วิธีนี้ในผู้ป่วยทั่วไป (กระดูกจะเลื่อนหลุดซ้ำ ข้อข้อมือหลุดค้าง และข้อเสื่อมรุนแรง)"
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
                    "en": "• Severe radiocarpal osteoarthritis and permanent wrist deformity",
                    "th": "• ข้อข้อมือเสื่อมพังทลายและพิการถาวร"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All Dorsal Barton intra-articular fracture-dislocations",
                    "th": "• กระดูกหักเข้าข้อร่วมกับข้อหลุด Dorsal Barton ทุกราย"
                  },
                  "method": {
                    "en": "• Dorsal approach (between 3rd and 4th extensor compartments): Transposition of EPL tendon + Anatomical reduction of dorsal articular rim + Low-profile Dorsal Buttress Locking Plate",
                    "th": "• ผ่าตัดเข้าทางด้านหลังข้อมือ (ระหว่างช่องเอ็นที่ 3 และ 4): ยกหลบเอ็น EPL + จัดผิวข้อด้านหลังให้เรียบสนิท + ดามแผ่นเหล็ก Low-profile Dorsal Buttress Locking Plate"
                  },
                  "rehabilitation": {
                    "en": "• Volar wrist splint for 2 weeks; progressive active wrist ROM from week 2; strengthening at 6–8 weeks",
                    "th": "• ดามเฝือกด้านหน้า 2 สัปดาห์ เริ่มฝึกขยับข้อมือที่ 2 สัปดาห์ และเพิ่มกำลังที่ 6–8 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Extensor tendon irritation from prominent dorsal hardware (often requires hardware removal at 6–12 months)",
                    "th": "• แผ่นเหล็กด้านหลังขัดสีกับเอ็นเหยียดนิ้วมือ (มักต้องผ่าตัดถอดเหล็กออกที่ 6–12 เดือน)"
                  }
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
                "decisionPrinciple": {
                  "en": "Intra-articular fracture-dislocation with carpal subluxation and displaced volar rim fragment; highly unstable; mandatory anatomical reduction and Volar Locking Buttress Plating via Henry approach to prevent persistent carpal subluxation.",
                  "th": "กระดูกหักเข้าข้อร่วมกับข้อข้อมือหลุดไปด้านหน้าฝ่ามือ มีความไม่มั่นคงสูงสุด ต้องผ่าตัดเปิดจัดผิวข้อและดามแผ่นเหล็ก Volar Locking Buttress Plate ผ่านทาง Volar Henry approach เพื่อป้องกันข้อข้อมือหลุดซ้ำ"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly CONTRAINDICATED (Guaranteed volar subluxation of the carpus)",
                    "th": "• ห้ามใช้วิธีนี้เด็ดขาด (ข้อข้อมือจะหลุดเคลื่อนไปด้านหน้าแน่นอน)"
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
                    "en": "• Carpal subluxation and total wrist joint destruction",
                    "th": "• ข้อมือหลุดพิการและผิวข้อพังทลายถาวร"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All Volar Barton intra-articular fracture-dislocations",
                    "th": "• กระดูกหักเข้าข้อร่วมกับข้อหลุด Volar Barton ทุกราย"
                  },
                  "method": {
                    "en": "• Modified Henry approach: Pronator quadratus reflection, anatomical reduction of volar articular margin, and Volar Buttress Locking Plate (buttressing the volar rim below watershed line)",
                    "th": "• ผ่าตัดเข้าทาง Modified Henry approach: เปิดกล้ามเนื้อ Pronator quadratus จัดขอบผิวข้อด้านหน้าให้เรียบสนิท และดามแผ่นเหล็ก Volar Buttress Locking Plate ค้ำยันขอบกระดูกด้านหน้า (ระวังไม่ให้ล้ำเส้น Watershed line)"
                  },
                  "rehabilitation": {
                    "en": "• Early active wrist and finger ROM at 10–14 days after soft tissue healing",
                    "th": "• เริ่มฝึกขยับข้อมือและนิ้วมือได้ตั้งแต่ 10–14 วันหลังแผลผ่าตัดหายดี"
                  },
                  "pitfalls": {
                    "en": "• Volar plate placed too distal past the watershed line leading to late FPL tendon rupture (Soong grade 2)",
                    "th": "• วางแผ่นเหล็กล้ำเกินเส้น Watershed line (Soong grade 2) ทำให้เอ็นงอนิ้วโป้ง FPL ขาดในภายหลัง"
                  }
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
                "decisionPrinciple": {
                  "en": "Extra-articular fracture from bending force (Colles/Smith); closed reduction and cast for stable patterns; Volar Locking Plate ORIF for unstable/redisplaced patterns.",
                  "th": "กระดูกหักนอกข้อจากแรงดัด (Colles/Smith) หากดึงเข้าที่แล้วมั่นคงให้ใส่เฝือก 4–6 สัปดาห์ หากไม่มั่นคงหรือกระดูกทรุดตัวซ้ำ แนะนำผ่าตัดดามแผ่นเหล็กล็อค Volar Locking Plate"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Stable extra-articular fracture without comminution meeting acceptable reduction parameters",
                    "th": "• กระดูกหักนอกข้อมั่นคง ไม่แตกละเอียด และแนวจัดกระดูกได้เกณฑ์ยอมรับ"
                  },
                  "method": {
                    "en": "• Closed reduction + short/long arm cast for 4–6 weeks",
                    "th": "• ดึงจัดกระดูกเข้าที่ + ใส่เฝือกแขน 4–6 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Active finger exercises immediately; active wrist ROM after cast removal",
                    "th": "• ขยับนิ้วมือทันที และเริ่มฝึกขยับข้อมือหลังถอดเฝือก"
                  },
                  "pitfalls": {
                    "en": "• Loss of reduction in cast during the first 2–3 weeks",
                    "th": "• กระดูกเลื่อนหลุดซ้ำในเฝือกช่วง 2–3 สัปดาห์แรก"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Unstable bending fracture (dorsal comminution, shortening >3 mm, tilt >10°)\n• Loss of reduction in cast",
                    "th": "• ชนิดไม่มั่นคง (ผนังด้านหลังแตกละเอียด, สั้น > 3 มม., มุมเอียง > 10°)\n• กระดูกเลื่อนหลุดซ้ำขณะใส่เฝือก"
                  },
                  "method": {
                    "en": "• Volar Locking Plate (VLP) fixation via Henry approach",
                    "th": "• ผ่าตัดดามแผ่นเหล็กล็อค Volar Locking Plate (VLP) ผ่านทาง Henry approach"
                  },
                  "rehabilitation": {
                    "en": "• Early active wrist ROM at 10–14 days",
                    "th": "• เริ่มฝึกขยับข้อมือได้ตั้งแต่ 10–14 วันหลังผ่าตัด"
                  },
                  "pitfalls": {
                    "en": "• Extensor tendon irritation from over-penetrating screws",
                    "th": "• สกรูยาวเกินไปทะลุไปขัดสีเอ็นเหยียดนิ้วมือด้านหลัง"
                  }
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
                "decisionPrinciple": {
                  "en": "Intra-articular fracture from shearing force (Barton / Chauffeur); inherently unstable; requires rigid buttress plate fixation to neutralize shear loads.",
                  "th": "กระดูกหักเข้าข้อจากแรงเฉือน (Barton / Chauffeur) ไม่มั่นคงอย่างยิ่ง ต้องผ่าตัดดามแผ่นเหล็กแบบ Buttress Plate เพื่อต้านทานแรงเฉือนและป้องกันข้อหลุด"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly CONTRAINDICATED (Shear fractures displace under carpal loading in cast)",
                    "th": "• ห้ามใช้วิธีนี้ (แรงเฉือนจะทำให้กระดูกและข้อมือเลื่อนหลุดในเฝือก)"
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
                    "en": "• Rapid carpal subluxation and articular step-off",
                    "th": "• ข้อมือหลุดเคลื่อนและผิวข้อขรุขระรวดเร็ว"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All Fernandez Type II shearing fractures (Barton's volar/dorsal rim or Chauffeur's radial styloid)",
                    "th": "• กระดูกหักเข้าข้อจากแรงเฉือน Fernandez Type II ทุกราย"
                  },
                  "method": {
                    "en": "• Volar / Dorsal Buttress Locking Plate or percutaneous / open cannulated headless compression screws (for isolated radial styloid)",
                    "th": "• ผ่าตัดดามแผ่นเหล็ก Volar/Dorsal Buttress Locking Plate หรือยึดด้วยสกรู Headless Compression Screws (สำหรับ Chauffeur radial styloid)"
                  },
                  "rehabilitation": {
                    "en": "• Early active wrist ROM at 2 weeks",
                    "th": "• เริ่มฝึกขยับข้อมือที่ 2 สัปดาห์หลังผ่าตัด"
                  },
                  "pitfalls": {
                    "en": "• Relying solely on screws without buttress plate for small volar rim shear fragments",
                    "th": "• ใช้สกรูเดี่ยวๆ โดยไม่ดามแผ่นเหล็กค้ำยัน Buttress plate สำหรับชิ้นขอบหน้าชิ้นเล็ก"
                  }
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
                "decisionPrinciple": {
                  "en": "Intra-articular compression fracture with central articular depression (Die-punch); mandatory open reduction, elevation of depressed subchondral fragments, structural bone grafting, and Volar Locking Plating.",
                  "th": "กระดูกหักเข้าข้อจากแรงกดร่วมกับผิวข้อยุบตัว (Die-punch) ต้องผ่าตัดเปิดจัดงัดยกผิวข้อที่ยุบตัวขึ้นมาให้เรียบ เติมกระดูกปลูก (Bone graft) ใต้ผิวข้อ และดามด้วยแผ่นเหล็กล็อค Volar Locking Plate"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• CONTRAINDICATED in active patients (Depressed articular step-off >2 mm causes rapid osteoarthritis)",
                    "th": "• ห้ามใช้วิธีนี้ในผู้ป่วยทั่วไป (ผิวข้อยุบ > 2 มม. ทำให้ข้อเสื่อมรุนแรง)"
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
                    "en": "• Post-traumatic osteoarthritis",
                    "th": "• ข้อข้อมือเสื่อมรุนแรงจากผิวข้อขรุขระ"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Articular surface depression / step-off > 1–2 mm\n• Lunate fossa Die-punch impaction",
                    "th": "• ผิวข้อยุบตัวหรือเหลื่อม > 1–2 มม.\n• ชิ้นกระดูก Lunate fossa ยุบจม (Die-punch)"
                  },
                  "method": {
                    "en": "• Volar or dorsal approach: Direct/arthroscopic-assisted elevation of impacted articular lunate facet + Structural allograft/autograft packing of subchondral void + Volar Locking Plate with subchondral pegs",
                    "th": "• ผ่าตัดเปิดหรือส่องกล้องช่วย: งัดยกชิ้นผิวข้อ Lunate facet ที่ยุบขึ้นมาให้เรียบ + อัดกระดูกปลูก (Bone graft) เติมช่องโหว่ใต้ข้อ + ดามแผ่นเหล็กล็อค Volar Locking Plate ขันสกรูค้ำใต้ผิวกระดูกอ่อน"
                  },
                  "rehabilitation": {
                    "en": "• Protected active wrist motion at 2 weeks; progressive load-bearing at 6–8 weeks",
                    "th": "• ฝึกขยับข้อมือเบาๆ ที่ 2 สัปดาห์ และเริ่มลงน้ำหนักที่ 6–8 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Failing to graft subchondral void leading to secondary articular collapse",
                    "th": "• ละเลยการเติมกระดูกปลูกใต้ช่องโหว่ ทำให้ผิวข้อยุบตัวซ้ำลงมา"
                  }
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
                "decisionPrinciple": {
                  "en": "Avulsion fracture of ligament attachment sites (Radial styloid, Ulnar styloid) with radiocarpal dislocation; represents high-energy ligamentous disruption; anatomical fixation of avulsed bone and ligament repair.",
                  "th": "กระดูกหักกะเทาะจุดเกาะเส้นเอ็นร่วมกับข้อมือหลุดหลวม (Fracture-dislocation) แสดงถึงการฉีกขาดของเอ็นยึดข้อมือ ต้องผ่าตัดยึดชิ้นกระดูกกะเทาะและเย็บซ่อมเอ็นยึดข้อต่อ"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Truly non-displaced avulsion with documented carpal stability on stress views",
                    "th": "• ชิ้นกระดูกกะเทาะไม่เคลื่อนตัวและทดสอบแล้วว่าข้อข้อมือมั่นคงดี"
                  },
                  "method": {
                    "en": "• Short arm cast for 4 weeks",
                    "th": "• ใส่เฝือกสั้น 4 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Progressive ROM",
                    "th": "• เริ่มฝึกขยับข้อตามลำดับ"
                  },
                  "pitfalls": {
                    "en": "• Missing underlying carpal instability (scapholunate dissociation)",
                    "th": "• มองข้ามการฉีกขาดของเอ็นในข้อมือ (Scapholunate dissociation)"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Displaced avulsion fragments\n• Associated radiocarpal dislocation or carpal instability",
                    "th": "• ชิ้นกระดูกจุดเกาะเอ็นเคลื่อนตัว\n• มีข้อข้อมือหลุดเคลื่อนหรือข้อมือหลวม"
                  },
                  "method": {
                    "en": "• ORIF of styloid fragments with headless compression screws or suture anchors + Direct repair of radiocarpal ligaments / TFCC",
                    "th": "• ผ่าตัดยึดชิ้นกระดูก Styloid ด้วยสกรู Headless screws หรือ Suture anchors + ผ่าตัดเย็บซ่อมเอ็นยึดข้อมือและ TFCC"
                  },
                  "rehabilitation": {
                    "en": "• Wrist splint for 4–6 weeks; protected ROM",
                    "th": "• ดามเฝือก 4–6 สัปดาห์ และฝึกขยับข้อมือแบบจำกัดมุม"
                  },
                  "pitfalls": {
                    "en": "• Neglected scapholunate or lunotriquetral ligament ruptures",
                    "th": "• ละเลยการตรวจและรักษาเอ็น Scapholunate หรือ Lunotriquetral ที่ฉีกขาด"
                  }
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
                "decisionPrinciple": {
                  "en": "Combined high-energy multi-mechanism fracture with severe comminution and soft tissue compromise; staged surgical management (spanning external fixator / distraction bridge plate followed by definitive locked plating and bone grafting).",
                  "th": "กระดูกแตกละเอียดรุนแรงจากหลายกลไกผสมกันร่วมกับเนื้อเยื่อบวมช้ำรุนแรง ต้องรักษาแบบเป็นขั้นตอน (Staged management): ใส่โครงยึดภายนอก Spanning Ex-Fix หรือ Bridge plate ก่อน แล้วจึงผ่าตัดจัดดามแผ่นเหล็กล็อคถาวรและปลูกกระดูกเมื่อเนื้อเยื่อยุบบวม"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• CONTRAINDICATED",
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
                    "en": "• Flail wrist, severe deformity, nerve injury, and total loss of function",
                    "th": "• ข้อมือผิดรูปถาวร ชาเส้นประสาท และสูญเสียการใช้งานมืออย่างสิ้นเชิง"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All Fernandez Type V high-energy fractures",
                    "th": "• กระดูกหักพลังงานสูง Fernandez Type V ทุกราย"
                  },
                  "method": {
                    "en": "• Staged Protocol:\n  - Stage 1: Spanning Radiocarpal External Fixator or Dorsal Bridge Plate + Carpal tunnel release if median neuropathy present\n  - Stage 2 (once swelling subsides): Definitive Volar Locking Plating, bone grafting, fragment-specific fixation, and DRUJ reconstruction",
                    "th": "• แนวทางรักษาแบบเป็นขั้นตอน (Staged protocol):\n  - ขั้นที่ 1: ดามยึดข้อข้อมือด้วย Spanning External Fixator หรือ Dorsal Bridge Plate + ผ่าตัดคลายเส้นประสาท Median หากมีอาการชา\n  - ขั้นที่ 2 (เมื่อแผลและเนื้อเยื่อยุบบวมดี): ผ่าตัดเปิดจัดดามกระดูกถาวรด้วย Volar Locking Plate, ปลูกกระดูก (Bone graft), ยึดชิ้นกระดูกเฉพาะส่วน และซ่อมแซมข้อ DRUJ"
                  },
                  "rehabilitation": {
                    "en": "• Finger motion on post-op day 1; bridge plate / external fixator removed at 8–12 weeks once articular healing occurs",
                    "th": "• ขยับนิ้วมือตั้งแต่วันแรก ถอดโครงยึดภายนอกหรือ Bridge plate ออกที่ 8–12 สัปดาห์เมื่อกระดูกผิวข้อติดดี"
                  },
                  "pitfalls": {
                    "en": "• Over-distraction across radiocarpal joint leading to permanent finger stiffness and CRPS",
                    "th": "• ดึงดามข้อมือตึงเกินไป (Over-distraction) ทำให้ข้อนิ้วมือยึดติดแข็งถาวรและเกิดโรค CRPS"
                  }
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
                "decisionPrinciple": {
                  "en": "Extra-articular fracture without ulnar styloid involvement; closed reduction and casting 4–6 weeks for stable patterns; VLP ORIF for unstable patterns.",
                  "th": "กระดูกหักนอกข้อโดยไม่มีกระดูก Ulnar styloid หักร่วม หากจัดเข้าที่และมั่นคงให้ใส่เฝือก 4–6 สัปดาห์ หากไม่มั่นคงให้ผ่าตัด Volar Locking Plate"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Stable extra-articular fracture meeting acceptable alignment criteria (<3 mm shortening, <10° dorsal tilt)",
                    "th": "• กระดูกหักนอกข้อที่มั่นคงและแนวเข้าเกณฑ์ยอมรับได้ (สั้น < 3 มม., Dorsal tilt < 10°)"
                  },
                  "method": {
                    "en": "• Closed reduction and cast immobilization for 4-6 weeks with weekly X-rays",
                    "th": "• ดึงจัดกระดูกและใส่เฝือก 4-6 สัปดาห์ พร้อมเอกซเรย์ติดตามทุกสัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Immediate active finger ROM; wrist ROM after cast removal",
                    "th": "• ขยับนิ้วมือทันที และเริ่มฝึกขยับข้อมือหลังถอดเฝือก"
                  },
                  "pitfalls": {
                    "en": "• Secondary displacement in cast",
                    "th": "• กระดูกเลื่อนหลุดซ้ำขณะใส่เฝือก"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Unstable extra-articular fracture or failure of closed reduction",
                    "th": "• ชนิดไม่มั่นคง หรือดึงจัดกระดูกไม่เข้าที่"
                  },
                  "method": {
                    "en": "• Volar locking plate (VLP) ORIF via Henry approach",
                    "th": "• ผ่าตัดยึดกระดูกด้วย Volar Locking Plate (VLP)"
                  },
                  "rehabilitation": {
                    "en": "• Early active wrist motion at 10–14 days",
                    "th": "• เริ่มฝึกขยับข้อมือที่ 10–14 วันหลังผ่าตัด"
                  },
                  "pitfalls": {
                    "en": "• Extensor tendon irritation from dorsal screw protrusion",
                    "th": "• สกรูยาวเกินทะลุไปขัดสีเอ็นด้านหลังข้อมือ"
                  }
                }
              },
              "illustrationId": "",
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
                "decisionPrinciple": {
                  "en": "Extra-articular distal radius fracture with associated ulnar styloid fracture; evaluate DRUJ stability; cast for stable fractures, Volar Locking Plate ORIF for radius + assess DRUJ.",
                  "th": "กระดูกหักนอกข้อร่วมกับมีกระดูก Ulnar styloid หัก ต้องตรวจประเมินความมั่นคงของข้อ DRUJ ใส่เฝือกหากมั่นคง หรือผ่าตัดดามแผ่นเหล็ก Volar Locking Plate หากไม่มั่นคง"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Non-displaced or stable extra-articular fracture with stable DRUJ on exam",
                    "th": "• กระดูกหักนอกข้อที่มั่นคงและข้อ DRUJ ไม่หลุดหลวม"
                  },
                  "method": {
                    "en": "• Closed reduction and sugar-tong / short arm cast in neutral rotation for 4–6 weeks",
                    "th": "• ดึงจัดกระดูกและใส่เฝือกในท่าหมุนแขนปกติ 4–6 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Finger motion immediately; forearm rotation out of splint at 4–6 weeks",
                    "th": "• ขยับนิ้วมือทันที และเริ่มฝึกหมุนแขนที่ 4–6 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Overlooking persistent DRUJ instability after casting",
                    "th": "• มองข้ามข้อ DRUJ ที่ยังหลวมไม่มั่นคง"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Unstable radius fracture or gross DRUJ instability",
                    "th": "• กระดูกเรเดียสหักไม่มั่นคง หรือข้อ DRUJ หลุดหลวมรุนแรง"
                  },
                  "method": {
                    "en": "• Volar Locking Plate ORIF of radius; assess DRUJ stability intraoperatively ± ulnar styloid screw/pinning if DRUJ unstable",
                    "th": "• ผ่าตัด Volar Locking Plate กระดูกเรเดียส และตรวจเช็คความมั่นคงข้อ DRUJ ± ยึดกระดูก Ulnar styloid หากข้อ DRUJ ยังหลวม"
                  },
                  "rehabilitation": {
                    "en": "• Protected ROM at 2 weeks",
                    "th": "• เริ่มฝึกขยับข้อมือแบบจำกัดมุมที่ 2 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Nonunion of ulnar styloid base causing persistent ulnar wrist pain",
                    "th": "• กระดูก Ulnar styloid ไม่ติดทำให้เจ็บข้อมือเรื้อรังด้านอัลนาร์"
                  }
                }
              },
              "illustrationId": "",
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
                "decisionPrinciple": {
                  "en": "Intra-articular radiocarpal fracture; anatomical articular restoration (<1–2 mm step-off) via Volar Locking Plate ORIF to prevent post-traumatic radiocarpal arthritis.",
                  "th": "กระดูกหักเข้าข้อ Radiocarpal ต้องจัดเรียงผิวข้อให้เรียบสนิท (<1–2 มม.) ด้วยการผ่าตัดดามแผ่นเหล็กล็อค Volar Locking Plate เพื่อป้องกันข้อเสื่อม"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Truly non-displaced intra-articular fracture (<1 mm step-off) in compliant patient",
                    "th": "• กระดูกหักเข้าข้อที่ไม่เคลื่อนตัวเลย (<1 มม.) ในผู้ป่วยที่มาตรวจสม่ำเสมอ"
                  },
                  "method": {
                    "en": "• Short arm cast for 4–6 weeks with strict serial weekly radiographs",
                    "th": "• ใส่เฝือกสั้น 4–6 สัปดาห์ พร้อมเอกซเรย์ติดตามอย่างใกล้ชิดทุกสัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Finger ROM immediately; wrist ROM after cast removal",
                    "th": "• ขยับนิ้วมือทันที และฝึกข้อมือหลังถอดเฝือก"
                  },
                  "pitfalls": {
                    "en": "• Late articular collapse causing step-off and arthritis",
                    "th": "• ผิวข้อยุบตัวซ้ำทำให้เกิดขั้นบันไดและข้อเสื่อม"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Displaced intra-articular radiocarpal fracture (>1–2 mm step-off or gap)",
                    "th": "• กระดูกหักเข้าข้อ Radiocarpal ที่เคลื่อนตัว (>1–2 มม.)"
                  },
                  "method": {
                    "en": "• Volar Henry approach: Anatomical articular reduction under direct / fluoroscopic visualization + Volar Locking Plate with subchondral locking screws",
                    "th": "• ผ่าตัด Volar Henry: จัดผิวข้อให้เรียบสนิท 100% ภายใต้เอกซเรย์ fluoroscopy และดามด้วย Volar Locking Plate ขันสกรูค้ำใต้ผิวกระดูกอ่อน"
                  },
                  "rehabilitation": {
                    "en": "• Early active wrist ROM at 10–14 days",
                    "th": "• เริ่มฝึกขยับข้อมือได้ตั้งแต่ 10–14 วันหลังผ่าตัด"
                  },
                  "pitfalls": {
                    "en": "• Intra-articular screw penetration destroying cartilage",
                    "th": "• ขันสกรูยาวเกินจนแทงทะลุเข้าไปในโพรงข้อทำลายกระดูกอ่อน"
                  }
                }
              },
              "illustrationId": "",
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
                "decisionPrinciple": {
                  "en": "Intra-articular radiocarpal fracture with ulnar styloid fracture; Volar Locking Plate ORIF of radius + assess DRUJ stability.",
                  "th": "กระดูกหักเข้าข้อ Radiocarpal ร่วมกับกระดูก Ulnar styloid หัก แนะนำผ่าตัด ORIF Volar Locking Plate จัดผิวข้อ และตรวจประเมินความมั่นคงข้อ DRUJ"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Truly non-displaced fractures in low-demand patients",
                    "th": "• กระดูกไม่เคลื่อนตัวเลยในผู้ป่วยสูงอายุ"
                  },
                  "method": {
                    "en": "• Cast immobilization for 4–6 weeks",
                    "th": "• ใส่เฝือก 4–6 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Finger motion",
                    "th": "• ขยับนิ้วมือ"
                  },
                  "pitfalls": {
                    "en": "• Incongruous joint surface and DRUJ pain",
                    "th": "• ผิวข้อขรุขระและปวดข้อ DRUJ"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Displaced radiocarpal intra-articular fracture in active patients",
                    "th": "• กระดูกหักเข้าข้อ Radiocarpal ที่เคลื่อนตัวในผู้ป่วยทั่วไป"
                  },
                  "method": {
                    "en": "• Volar Locking Plate ORIF to restore radiocarpal congruity + Evaluate DRUJ stability; repair/pin ulnar styloid if DRUJ unstable",
                    "th": "• ผ่าตัด Volar Locking Plate ORIF จัดผิวข้อ Radiocarpal ให้เรียบสนิท + ตรวจความมั่นคงข้อ DRUJ (ยึด ulnar styloid หากข้อ DRUJ หลวม)"
                  },
                  "rehabilitation": {
                    "en": "• Early active motion at 2 weeks",
                    "th": "• เริ่มฝึกขยับข้อมือที่ 2 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Missing combined radiocarpal arthrosis and DRUJ stiffness",
                    "th": "• ภาวะข้อเสื่อมร่วมกับข้อข้อมือยึดติด"
                  }
                }
              },
              "illustrationId": "",
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
                "decisionPrinciple": {
                  "en": "Intra-articular sigmoid notch (DRUJ) fracture; anatomical reduction of sigmoid notch to prevent painful forearm rotation; Volar Locking Plate ORIF.",
                  "th": "กระดูกหักเข้าข้อ DRUJ (Sigmoid notch) ต้องจัดผิวข้อ Sigmoid notch ให้เรียบสนิทเพื่อป้องกันอาการปวดและขัดสะดุดเวลาหมุนคว่ำหงายแขน แนะนำผ่าตัด Volar Locking Plate ORIF"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Non-displaced sigmoid notch fracture with preserved forearm rotation",
                    "th": "• กระดูกหักเข้าข้อ DRUJ ที่ไม่เคลื่อนตัวและหมุนแขนได้ปกติ"
                  },
                  "method": {
                    "en": "• Sugar-tong or long arm cast in slight supination for 4 weeks",
                    "th": "• ใส่เฝือก Sugar-tong หรือเฝือกยาวในท่าหงายมือเล็กน้อย 4 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Early forearm rotation exercises at 4 weeks",
                    "th": "• เริ่มฝึกหมุนคว่ำหงายแขนที่ 4 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Incongruous sigmoid notch causing severe loss of pronation/supination",
                    "th": "• ผิวข้อ Sigmoid notch ขรุขระทำให้สูญเสียการหมุนแขนถาวร"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Displaced sigmoid notch fracture (>1–2 mm step-off) or blocked forearm rotation",
                    "th": "• กระดูกหักเข้าข้อ Sigmoid notch ที่เคลื่อนตัว (>1–2 มม.) หรือติดขัดเวลาหมุนแขน"
                  },
                  "method": {
                    "en": "• Volar Henry approach: Anatomical reduction of sigmoid notch facet + Volar Locking Plate ORIF ± direct K-wire pinning of sigmoid fragment",
                    "th": "• ผ่าตัด Volar Henry: จัดผิวข้อ Sigmoid notch ให้เรียบสนิท + ดามแผ่นเหล็ก Volar Locking Plate ± ปักลวด K-wire ยึดชิ้นกระดูก Sigmoid notch"
                  },
                  "rehabilitation": {
                    "en": "• Active forearm pronation and supination at 2 weeks",
                    "th": "• เริ่มฝึกหมุนคว่ำหงายแขนที่ 2 สัปดาห์หลังผ่าตัด"
                  },
                  "pitfalls": {
                    "en": "• Screw penetration into the sigmoid notch / DRUJ space",
                    "th": "• สกรูยาวเกินทะลุเข้าไปในช่องข้อ DRUJ"
                  }
                }
              },
              "illustrationId": "",
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
                "decisionPrinciple": {
                  "en": "Intra-articular DRUJ fracture with ulnar styloid fracture; high risk of DRUJ instability; Volar Locking Plate ORIF + DRUJ stabilization / styloid fixation if unstable.",
                  "th": "กระดูกหักเข้าข้อ DRUJ ร่วมกับกระดูก Ulnar styloid หัก เสี่ยงสูงต่อข้อ DRUJ หลุดหลวมเรื้อรัง แนะนำผ่าตัด Volar Locking Plate จัดผิวข้อ Sigmoid notch และตรวจยึดความมั่นคงข้อ DRUJ"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Truly non-displaced and stable DRUJ injury in low-demand patient",
                    "th": "• กระดูกไม่เคลื่อนตัวและข้อ DRUJ มั่นคงในผู้ป่วยสูงอายุ"
                  },
                  "method": {
                    "en": "• Long arm cast in supination for 4–6 weeks",
                    "th": "• ใส่เฝือกยาวในท่าหงายมือ 4–6 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Gentle ROM after cast removal",
                    "th": "• ฝึกขยับแขนเบาๆ หลังถอดเฝือก"
                  },
                  "pitfalls": {
                    "en": "• High incidence of chronic DRUJ instability and wrist pain",
                    "th": "• เสี่ยงสูงต่อข้อ DRUJ หลวมเรื้อรังและปวดข้อมือ"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Displaced Frykman VI fracture or persistent DRUJ instability",
                    "th": "• กระดูกหัก Frykman VI ที่เคลื่อนตัว หรือข้อ DRUJ หลุดหลวม"
                  },
                  "method": {
                    "en": "• Volar Locking Plate ORIF for radius sigmoid notch + Intraoperative DRUJ stress testing: If unstable, perform ulnar styloid base screw fixation or transfixing radioulnar K-wires for 4 weeks",
                    "th": "• ผ่าตัด Volar Locking Plate ORIF จัดผิวข้อ Sigmoid notch + ทดสอบความมั่นคงข้อ DRUJ: หากหลวม ให้ยึดกระดูก Ulnar styloid ด้วยสกรู หรือปักลวด K-wires ยึดข้อ DRUJ ไว้ 4 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Protected rotation exercises at 4 weeks (after K-wire removal)",
                    "th": "• เริ่มฝึกหมุนแขนที่ 4 สัปดาห์ (หลังถอดลวด K-wire)"
                  },
                  "pitfalls": {
                    "en": "• Neglecting DRUJ instability leading to weak grip and painful forearm rotation",
                    "th": "• ละเลยข้อ DRUJ ที่หลวม ทำให้แรงบีบมือลดลงและปวดเวลาหมุนแขน"
                  }
                }
              },
              "illustrationId": "",
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
                "decisionPrinciple": {
                  "en": "Complex bicompartmental intra-articular fracture involving both Radiocarpal and DRUJ joints; mandatory multi-planar anatomical ORIF with Volar Locking Plate.",
                  "th": "กระดูกหักเข้าข้อซับซ้อนลามทั้งข้อ Radiocarpal และข้อ DRUJ ต้องผ่าตัดเปิดจัดผิวข้อทั้งสองส่วนให้เรียบสนิทและดามแผ่นเหล็กล็อค Volar Locking Plate"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• CONTRAINDICATED in functional patients (High rate of post-traumatic arthritis in both joints)",
                    "th": "• ห้ามใช้วิธีนี้ในผู้ป่วยทั่วไป (ทำให้เกิดข้อเสื่อมรุนแรงทั้ง 2 ข้อ)"
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
                    "en": "• Severe wrist arthrosis and rigid stiffness",
                    "th": "• ข้อข้อมือเสื่อมพังทลายและยึดติดแข็ง"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All Frykman Type VII bicompartmental intra-articular fractures",
                    "th": "• กระดูกหักเข้าข้อทั้งสองส่วน Frykman Type VII ทุกราย"
                  },
                  "method": {
                    "en": "• Volar Locking Plate ORIF with multi-column distal screws supporting both scaphoid and lunate facets + anatomical reduction of sigmoid notch ± fragment-specific pins/plates",
                    "th": "• ผ่าตัด Volar Locking Plate ORIF ขันสกรูกระจายค้ำทั้ง Scaphoid facet, Lunate facet และจัดขอบ Sigmoid notch ให้เรียบสนิท ± ใช้อุปกรณ์ยึดชิ้นกระดูกเฉพาะส่วน"
                  },
                  "rehabilitation": {
                    "en": "• Early active wrist and forearm ROM at 10–14 days",
                    "th": "• เริ่มฝึกขยับข้อมือและหมุนแขนได้ตั้งแต่ 10–14 วันหลังผ่าตัด"
                  },
                  "pitfalls": {
                    "en": "• Unrecognized articular step-off in either joint leading to arthritis",
                    "th": "• ผิวข้อส่วนใดส่วนหนึ่งยังเหลื่อมอยู่ทำให้เกิดข้อเสื่อมตามมา"
                  }
                }
              },
              "illustrationId": "",
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
                "decisionPrinciple": {
                  "en": "Most severe Frykman pattern (both joints + ulnar styloid); high post-traumatic arthritis risk; comprehensive multi-column ORIF with Volar Locking Plate, fragment-specific fixation, and DRUJ repair.",
                  "th": "กระดูกหักรุนแรงที่สุดในระบบ Frykman (ลามเข้าทั้ง 2 ข้อ ร่วมกับ Ulnar styloid หัก) เสี่ยงข้อเสื่อมสูงสุด ต้องผ่าตัด ORIF ครบวงจรด้วย Volar Locking Plate ร่วมกับจัดเรียงผิวข้อและสร้างความมั่นคงให้ข้อ DRUJ"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• CONTRAINDICATED",
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
                    "en": "• Severe wrist deformity, post-traumatic arthritis, and permanent disability",
                    "th": "• ข้อมือผิดรูป ข้อเสื่อมรุนแรง และพิการถาวร"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All Frykman Type VIII complex intra-articular fracture-dislocations",
                    "th": "• กระดูกหักซับซ้อนเข้าข้อทั้งสองส่วน Frykman Type VIII ทุกราย"
                  },
                  "method": {
                    "en": "• Comprehensive surgical reconstruction: Anatomical Volar Locking Plate ORIF + Fragment-specific fixation (dorsal/lunate facet pins/plates) + Bone graft if impacted + DRUJ stabilization (ulnar styloid screw / K-wire transfixation)",
                    "th": "• ผ่าตัดบูรณะโครงสร้างครบวงจร: ผ่าตัด Volar Locking Plate ORIF + ยึดชิ้นกระดูกเฉพาะส่วน (Lunate facet) + ปลูกกระดูกหากผิวข้อยุบ + สร้างความมั่นคงข้อ DRUJ (ยึด ulnar styloid หรือปักลวด K-wire ยึดขวาง DRUJ)"
                  },
                  "rehabilitation": {
                    "en": "• Protected active ROM at 2–3 weeks; full active strengthening at 8–12 weeks",
                    "th": "• เริ่มฝึกขยับข้อแบบระมัดระวังที่ 2–3 สัปดาห์ และฝึกเพิ่มกำลังเต็มที่ที่ 8–12 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Residual articular incongruity, chronic DRUJ instability, and severe stiffness",
                    "th": "• ผิวข้อต่อไม่เรียบ ข้อ DRUJ หลุดหลวมเรื้อรัง และข้อมือยึดติดแข็ง"
                  }
                }
              },
              "illustrationId": "",
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
