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
          "investigations": [
            {
              "name": "True Lateral Elbow View",
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
              "imageUrl": "/images/investigations/forearm/greenspan_view.jpg"
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
          "investigations": [
            {
              "name": "AP Wrist View",
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
              "imageUrl": "/images/investigations/wrist/scaphoid_view.jpg"
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
              "name": "True Lateral Wrist View",
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
              "imageUrl": "/images/investigations/wrist/scaphoid_view.jpg"
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
        }
      ]
    }
  ]
};
