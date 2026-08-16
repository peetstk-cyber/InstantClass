import type { BoneData } from "../../types";

export const handBone: BoneData = {
  "id": "hand",
  "name": {
    "en": "Hand & Wrist",
    "th": "มือและข้อมือ"
  },
  "description": {
    "en": "Hand and wrist bones including carpals and metacarpals",
    "th": "กระดูกมือและข้อมือ รวมถึงกระดูกข้อมือและกระดูกฝ่ามือ"
  },
  "pediatric": false,
  "regions": [
    {
      "id": "scaphoid",
      "name": {
        "en": "Scaphoid",
        "th": "กระดูกสะแคฟอยด์ (Scaphoid)"
      },
      "regionConcept": {
        "physicalExam": [
          {
            "sign": "Anatomical Snuffbox Tenderness",
            "positive": {
              "en": "Pain on deep palpation in the anatomical snuffbox (between EPL and EPB/APL tendons); high sensitivity for scaphoid waist/proximal fractures.",
              "th": "กดเจ็บในแอ่ง Anatomical Snuffbox (ระหว่างเอ็น EPL และ EPB/APL) มีความไวสูงมากในการตรวจพบกระดูกสะแคฟอยด์หัก"
            }
          },
          {
            "sign": "Scaphoid Tuberosity Tenderness",
            "positive": {
              "en": "Pain on palpation of the scaphoid tubercle on the palmar base of the thenar eminence; highly specific for distal pole fractures.",
              "th": "กดเจ็บบริเวณปุ่มกระดูกสะแคฟอยด์ (Scaphoid tubercle) ด้านฝ่ามือของฐานเนิน thenar มีความจำเพาะสูงสำหรับ distal pole fracture"
            }
          },
          {
            "sign": "Axial Compression of Thumb",
            "positive": {
              "en": "Pain elicited at the wrist when compressing the thumb metacarpal longitudinally toward the scaphoid.",
              "th": "ปวดบริเวณข้อมือเมื่อดันอัดนิ้วหัวแม่มือตามแนวแกนตรงเข้าหากระดูกสะแคฟอยด์"
            }
          },
          {
            "sign": "Pain with Resisted Pronation & Radial Deviation",
            "positive": {
              "en": "Pain on active radial deviation and pronation of the wrist against resistance due to scaphoid movement.",
              "th": "ปวดเมื่อต้านแรงการเอียงข้อมือไปทางฝั่งนิ้วโป้ง (Radial deviation) และคว่ำมือ"
            }
          }
        ],
        "acceptableAlignment": [
          {
            "parameter": {
              "en": "Fracture Gap / Displacement",
              "th": "ระยะอ้าช่องหัก / การเคลื่อนตัว"
            },
            "threshold": "< 1 mm",
            "note": {
              "en": "Displacement ≥1mm significantly increases nonunion risk; indicates surgical screw fixation.",
              "th": "การเคลื่อนตัว ≥ 1 มม. เพิ่มความเสี่ยงกระดูกไม่ติดอย่างมาก เป็นข้อบ่งชี้ผ่าตัดยึดสกรู"
            }
          },
          {
            "parameter": {
              "en": "Intracarpal Step-off",
              "th": "ความเหลื่อมของผิวข้อต่อ"
            },
            "threshold": "< 1 mm",
            "note": {
              "en": "Articular step-off >1mm causes post-traumatic radiocarpal arthritis.",
              "th": "รอยเหลื่อมผิวข้อ > 1 มม. นำไปสู่ภาวะข้อข้อมือเสื่อมตามหลังอุบัติเหตุ"
            }
          }
        ],
        "redFlags": [
          {
            "en": "Avascular Necrosis (AVN) of proximal pole due to retrograde blood supply cut off by fracture line.",
            "th": "ภาวะหัวกระดูกส่วนต้นขาดเลือด (AVN of proximal pole) เนื่องจากเส้นเลือดหล่อเลี้ยงวิ่งย้อนศรจากปลายขึ้นมาต้นจึงถูกแนวกระดูกหักตัดขาด"
          },
          {
            "en": "Scapholunate Advanced Collapse (SLAC wrist) secondary to chronic scaphoid nonunion (SNAC).",
            "th": "ภาวะข้อข้อมือทรุดเสื่อมรุนแรง (SLAC wrist) จากภาวะกระดูกสะแคฟอยด์ไม่ติดเรื้อรัง (SNAC)"
          }
        ],
        "associatedInjuries": [
          {
            "injury": {
              "en": "Scapholunate Interosseous Ligament (SLIL) Tear",
              "th": "การฉีกขาดของเอ็น Scapholunate (SLIL)"
            },
            "trigger": {
              "en": "Always check for SL gap widening on AP view",
              "th": "ควรตรวจดูระยะถ่าง Scapholunate ในภาพเอกซเรย์ท่า AP เสมอ"
            }
          },
          {
            "injury": {
              "en": "Distal Radius Fracture (Trans-scaphoid Perilunate Injury)",
              "th": "กระดูกปลายแขน Radius หักร่วม หรือข้อข้อมือหลุด Perilunate"
            }
          }
        ],
        "clinicalPearls": [
          {
            "en": "Proximal pole fractures take 12-24 weeks to heal and have high nonunion rate due to retrograde blood supply.",
            "th": "รอยหักบริเวณ Proximal pole ใช้เวลานาน 12-24 สัปดาห์ในการติด และมีอัตรากระดูกไม่ติดสูงมากเนื่องจากเลือดเลี้ยงวิ่งย้อนศร"
          },
          {
            "en": "Early CT or MRI is mandatory if initial radiographs are negative but high clinical suspicion exists (snuffbox tenderness).",
            "th": "หากเอกซเรย์เบื้องต้นไม่พบรอยหักแต่ผู้ป่วยมีอาการกดเจ็บชัดเจน ต้องส่งตรวจ CT หรือ MRI เพิ่มเติมทันที"
          },
          {
            "en": "Cast immobilisation for occult fractures should be in short arm thumb spica for 2-3 weeks followed by repeat imaging.",
            "th": "หากสงสัยรอยหักที่ยังไม่เห็นในเอกซเรย์ ให้ใส่เฝือก Thumb spica สั้นดามไว้ 2-3 สัปดาห์แล้วนัดมาถ่ายภาพ X-ray ซ้ำ"
          }
        ]
      },
      "classifications": [
        {
          "system": "Anatomical Location",
          "fullName": {
            "en": "Anatomical Location Classification",
            "th": "การจำแนกตามตำแหน่งทางกายวิภาค"
          },
          "description": {
            "en": "Classification of scaphoid fractures based on anatomical location (distal pole, waist, proximal pole), which dictates blood supply and prognosis.",
            "th": "ระบบจำแนกกระดูกสะแคฟอยด์หักตามตำแหน่งทางกายวิภาค (ส่วนปลาย, ส่วนกลาง, ส่วนต้น) ซึ่งเป็นตัวกำหนดเส้นเลือดหล่อเลี้ยงและผลการรักษา"
          },
          "concept": {
            "title": {
              "en": "Scaphoid Anatomical Location & Herbert Concept",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ Scaphoid Location & Herbert Classification"
            },
            "corePrinciple": {
              "en": "Scaphoid blood supply is retrograde (70-80% enters via dorsal ridge at distal pole/waist and flows proximally). Fracture location and stability (Herbert A/B/C/D) directly dictate Avascular Necrosis (AVN) risk and surgical indications.",
              "th": "กระดูก Scaphoid มีเลือดเลี้ยงแบบย้อนกลับ (70-80% เข้าทางส่วนปลาย/เอวแล้วไหลย้อนขึ้นส่วนโคน) ตำแหน่งรอยหักและความมั่นคง (Herbert A/B/C/D) เป็นตัวกำหนดความเสี่ยงหัวกระดูกขาดเลือด (AVN) และข้อบ่งชี้ผ่าตัด"
            },
            "rules": [
              {
                "en": "Distal Pole / Tuberosity (10-20%): Excellent blood supply; low AVN risk.",
                "th": "Distal Pole / Tuberosity (10-20%): เลือดมาเลี้ยงดีมาก ความเสี่ยง AVN ต่ำ"
              },
              {
                "en": "Waist Fracture (70-80%): Moderate AVN risk; displacement ≥1 mm or instability indicates ORIF.",
                "th": "Waist Fracture (70-80%): ความเสี่ยง AVN ปานกลาง; เคลื่อนตัว ≥1 มม. หรือไม่มั่นคงเป็นข้อบ่งชี้ผ่าตัด"
              },
              {
                "en": "Proximal Pole Fracture (10-15%): Retrograde blood supply cut off; high AVN (>30%) and nonunion risk; primary ORIF mandatory.",
                "th": "Proximal Pole Fracture (10-15%): เลือดเลี้ยงถูกตัดขาด; เสี่ยง AVN (>30%) และกระดูกไม่ติดสูงมาก ต้องผ่าตัด ORIF เสมอ"
              },
              {
                "en": "Herbert Stability Classification: Type A (Stable acute), Type B (Unstable acute / displaced), Type C (Delayed union), Type D (Established nonunion).",
                "th": "เกณฑ์ความมั่นคง Herbert: Type A (เฉียบพลันมั่นคง), Type B (เฉียบพลันไม่มั่นคง/เคลื่อน), Type C (ติดช้า), Type D (กระดูกไม่ติดถาวร)"
              }
            ],
            "clinicalSignificance": [
              {
                "en": "Distal Pole: Conservative treatment with Thumb Spica Cast for 4-6 weeks.",
                "th": "Distal Pole: รักษาแบบไม่ผ่าตัดใส่เฝือก Thumb Spica Cast 4-6 สัปดาห์"
              },
              {
                "en": "Waist (Undisplaced <1 mm): Cast for 8-12 weeks OR percutaneous headless compression screw (Herbert screw) for faster recovery.",
                "th": "Waist (ไม่เคลื่อน <1 มม.): ใส่เฝือก 8-12 สัปดาห์ หรือผ่าตัดขันสกรูไร้หัว (Herbert screw) เพื่อฟื้นตัวเร็ว"
              },
              {
                "en": "Waist (Displaced ≥1 mm) & Proximal Pole: Surgical ORIF with headless compression screw (± vascularized bone graft) MANDATORY.",
                "th": "Waist (เคลื่อน ≥1 มม.) & Proximal Pole: จำเป็นต้องผ่าตัด ORIF ขันสกรูไร้หัว (± ปลูกกระดูก) เสมอ"
              },
              {
                "en": "CRITICAL PITFALL: Snuffbox tenderness with negative initial X-ray MUST be immobilized in Thumb Spica and re-imaged / MRI in 10-14 days.",
                "th": "ข้อควรระวังสำคัญ: กดเจ็บ Anatomical Snuffbox แต่ X-ray ปกติ ต้องใส่เฝือกดามไว้และนัด X-ray ซ้ำ หรือทำ MRI ใน 10-14 วัน"
              }
            ]
          },
          "investigations": [
            {
              "name": "Scaphoid View (PA Ulnar Deviation)",
              "details": {
                "en": "Posteroanterior view with ulnar deviation and 20-30° cephalic tilt. Elongates the scaphoid to profile the waist and detect subtle fractures.",
                "th": "ภาพเอกซเรย์ท่า PA โดยให้ข้อมือเบนไปทางนิ้วก้อย (Ulnar deviation) และเอียงหลอดรังสีชี้ขึ้นศีรษะ 20-30 องศา ช่วยยืดแนวสะแคฟอยด์ให้เห็นรอยหักที่เอวได้ชัดเจนขึ้น"
              },
              "imageUrl": "/images/investigations/wrist/scaphoid_view.jpg"
            },
            {
              "name": "PA Wrist View",
              "details": {
                "en": "Standard anteroposterior view to assess carpal alignment and exclude other carpal injuries.",
                "th": "ภาพเอกซเรย์ท่าหน้าหลัง (AP) มาตรฐานเพื่อประเมินการเรียงตัวและแยกการบาดเจ็บของกระดูกข้อมือชิ้นอื่นๆ"
              },
              "imageUrl": "/images/investigations/wrist/ap_wrist_view.jpg"
            },
            {
              "name": "Lateral Wrist View",
              "details": {
                "en": "True lateral view of the wrist. Essential to measure the scapholunate angle and detect associated carpal instability.",
                "th": "ภาพเอกซเรย์ท่าด้านข้าง (Lateral) แท้ เพื่อใช้วัดมุม Scapholunate และประเมินความไม่มั่นคงของข้อมือร่วมด้วย"
              },
              "imageUrl": "/images/investigations/wrist/lateral_wrist_view.jpg"
            }
          ],
          "types": [
            {
              "type": "Distal",
              "name": {
                "en": "Distal Pole / Tuberosity Fracture",
                "th": "กระดูกสะแคฟอยด์หักส่วนปลาย (Distal Pole / Tuberosity)"
              },
              "description": {
                "en": "Fracture located at the distal third or tuberosity\nExcellent blood supply from distal entry vessels\nLow risk of nonunion or avascular necrosis (AVN)",
                "th": "รอยหักอยู่บริเวณส่วนปลายหนึ่งในสามหรือปุ่มกระดูก (Tuberosity)\nมีเลือดมาเลี้ยงดีเยี่ยมเนื่องจากหลอดเลือดหลักวิ่งเข้าทางส่วนปลายนี้โดยตรง\nความเสี่ยงต่อกระดูกไม่ติดหรือขาดเลือดไปเลี้ยง (AVN) ต่ำมาก"
              },
              "moi": {
                "en": "Direct blow to the radial side of the hand or a fall on an outstretched hand (FOOSH).",
                "th": "เกิดจากแรงกระแทกโดยตรงที่ฝั่งนิ้วหัวแม่มือ หรือล้มยันมือ (FOOSH)"
              },
              "treatment": {
                "conservative": {
                  "en": "Short arm thumb spica cast or splint for 4-6 weeks. Highly successful with near-100% healing rate.",
                  "th": "ใส่เฝือก Thumb Spica สั้นหรือเฝือกอ่อนประมาณ 4-6 สัปดาห์ อัตราการติดเกือบ 100%"
                },
                "operative": {
                  "en": "Rarely indicated; reserved for high displacement, unstable configuration, or elite athletes requiring early return to play.",
                  "th": "แทบไม่มีความจำเป็นในการผ่าตัด พิจารณาเฉพาะกรณีเคลื่อนตัวมากๆ หรือในนักกีฬาอาชีพเพื่อเร่งการใช้งานข้อมือ"
                }
              },
              "illustrationId": "/images/scaphoid/scaphoid_distal.png",
              "xrayDescription": {
                "en": "Fracture line visible across the distal pole or avulsion of the scaphoid tuberosity.",
                "th": "พบรอยหักผ่านส่วน distal pole หรือชิ้นกระดูกกะเทาะหลุดบริเวณปุ่มกระดูกสะแคฟอยด์"
              }
            },
            {
              "type": "Waist",
              "name": {
                "en": "Scaphoid Waist Fracture",
                "th": "กระดูกสะแคฟอยด์หักส่วนกลาง / เอว (Waist Fracture)"
              },
              "description": {
                "en": "Most common pattern (65-70% of cases)\nModerate risk of nonunion or AVN due to retrograde blood supply\nRequires careful immobilization or fixation",
                "th": "รูปแบบการหักที่พบบ่อยที่สุด (65-70% ของกระดูกสะแคฟอยด์หักทั้งหมด)\nมีความเสี่ยงปานกลางที่จะเกิดกระดูกไม่ติดหรือขาดเลือด (AVN) เนื่องจากเส้นเลือดวิ่งย้อนจากปลายขึ้นมาต้น\nต้องการการเข้าเฝือกที่มั่นคงหรือผ่าตัดยึดตรึงที่แน่นหนา"
              },
              "moi": {
                "en": "Fall on outstretched hand (FOOSH) with wrist hyperextension and radial deviation.",
                "th": "ล้มยันมือ (FOOSH) ในท่าข้อมือแอ่นสุดและปัดเยื้องไปทางด้านนิ้วโป้ง (Radial deviation)"
              },
              "treatment": {
                "conservative": {
                  "en": "Short arm thumb spica cast for 8-12 weeks for non-displaced fractures (<1mm displacement). Close radiographic follow-up is mandatory.",
                  "th": "ใส่เฝือก Thumb Spica สั้นเป็นเวลา 8-12 สัปดาห์สำหรับรอยหักที่ไม่เคลื่อน (<1 มม.) ต้องนัดเอกซเรย์ติดตามอย่างเข้มงวด"
                },
                "operative": {
                  "en": "Percutaneous or open reduction and internal fixation (ORIF) with a headless compression screw (e.g., Herbert screw) for displacement >1mm, unstable pattern, or active patients seeking early mobility.",
                  "th": "ผ่าตัดจัดกระดูกและยึดตรึงภายใน (ORIF) ด้วยสกรูไร้หัว (Herbert screw) ในรายที่กระดูกเคลื่อน >1 มม. หรือต้องการขยับข้อมือเร็ว"
                }
              },
              "illustrationId": "/images/scaphoid/scaphoid_waist.png",
              "xrayDescription": {
                "en": "Transverse or oblique fracture line running through the narrow mid-portion (waist) of the scaphoid.",
                "th": "รอยหักในแนวขวางหรือแนวเฉียงพาดผ่านบริเวณเอวคอดตรงกึ่งกลางของกระดูกสะแคฟอยด์"
              }
            },
            {
              "type": "Proximal",
              "name": {
                "en": "Proximal Pole Fracture",
                "th": "กระดูกสะแคฟอยด์หักส่วนต้น (Proximal Pole)"
              },
              "description": {
                "en": "Fracture located at the proximal third of the scaphoid\nExtremely high risk of nonunion and avascular necrosis (AVN)\nBlood supply is retrograde and cut off by the fracture line",
                "th": "รอยหักอยู่บริเวณส่วนต้นติดกับข้อมือ (Proximal third)\nมีความเสี่ยงสูงมากที่สุดต่อการเกิดกระดูกไม่ติดและข้อเสื่อม/ขาดเลือด (AVN)\nเนื่องจากหลอดเลือดหล่อเลี้ยงวิ่งย้อนศรจากปลายขึ้นมาต้น จึงถูกรอยหักกั้นและตัดขาดการเลี้ยงทันที"
              },
              "moi": {
                "en": "High-energy axial load transmitted through the wrist, often in motor vehicle collisions.",
                "th": "แรงกดกระแทกตามแนวแกนพลังงานสูงตรงเข้าข้อข้อมือ มักเกิดในอุบัติเหตุยานยนต์รุนแรง"
              },
              "treatment": {
                "conservative": {
                  "en": "Not recommended. Very high rate of nonunion with cast treatment alone (requires long arm cast for >6 weeks, then short arm cast, with poor success).",
                  "th": "ไม่แนะนำให้ใช้ เนื่องจากอัตรากระดูกไม่ติดสูงมากหากเข้าเฝือกอย่างเดียว (หากทำต้องใส่เฝือกยาวเหนือศอก >6 สัปดาห์และต่อด้วยเฝือกสั้น แต่อัตราติดต่ำมาก)"
                },
                "operative": {
                  "en": "Primary surgical fixation (ORIF) with a headless compression screw. Bone grafting (vascularized or non-vascularized) is frequently required to promote healing.",
                  "th": "แนะนำให้ผ่าตัดยึดตรึงเป็นอันดับแรก (Primary ORIF) ด้วยสกรูชนิดจมร่วมกับการปลูกกระดูก (Bone graft) เพื่อเพิ่มโอกาสเชื่อมติด"
                }
              },
              "illustrationId": "/images/scaphoid/scaphoid_proximal.png",
              "xrayDescription": {
                "en": "Fracture line passing through the proximal third of the scaphoid. Proximal fragment may show increased density over time (AVN).",
                "th": "รอยหักพาดผ่านกระดูกส่วนต้น ชิ้นส่วนที่หักอาจมีความหนาแน่นทึบแสงขึ้นเรื่อยๆ ซึ่งแสดงถึงภาวะขาดเลือด (AVN)"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "carpal-instability",
      "name": {
        "en": "Carpal Instability",
        "th": "ข้อต่อข้อมือไม่มั่นคง (Carpal Instability)"
      },
      "regionConcept": {
        "physicalExam": [
          {
            "sign": "Watson Scaphoid Shift Test",
            "positive": {
              "en": "Painful clunk and dorsal subluxation of scaphoid as wrist is moved from ulnar to radial deviation with pressure on scaphoid tubercle.",
              "th": "มีเสียงคลิกปวดและกระดูก Scaphoid เคลื่อนหลุดไปด้านหลัง ขณะเบนข้อมือจากฝั่งนิ้วก้อยไปฝั่งนิ้วโป้งพร้อมกับกดปุ่ม Scaphoid tubercle"
            }
          },
          {
            "sign": "Lunotriquetral Shear Test (Reagan Test)",
            "positive": {
              "en": "Pain and crepitus when translating lunate and triquetrum in opposing anterior-posterior directions.",
              "th": "ปวดและมีเสียงกรอบแกรบเมื่อจับกระดูก Lunate และ Triquetrum ขยับสวนทางกันในแนวหน้า-หลัง"
            }
          },
          {
            "sign": "Median Nerve Neurological Exam",
            "positive": {
              "en": "Paresthesia in thumb, index, and middle fingers or acute weakness of thenar muscles indicating acute median nerve compression.",
              "th": "ชาบริเวณนิ้วโป้ง นิ้วชี้ นิ้วกลาง หรือมืออ่อนแรง แสดงถึงภาวะเส้นประสาท Median ถูกกดทับฉุกเฉิน"
            }
          }
        ],
        "acceptableAlignment": [
          {
            "parameter": {
              "en": "Scapholunate Interval / Gap",
              "th": "ระยะถ่างช่อง Scapholunate"
            },
            "threshold": "< 3 mm",
            "note": {
              "en": "SL gap >3mm on PA view indicates complete SLIL tear ('Terry Thomas sign').",
              "th": "ระยะถ่าง >3 มม. ในท่า PA แสดงว่าเอ็น SLIL ขาดสมบูรณ์ ('Terry Thomas sign')"
            }
          },
          {
            "parameter": {
              "en": "Scapholunate Angle (Lateral View)",
              "th": "มุม Scapholunate (ท่า Lateral)"
            },
            "threshold": "30° - 60°",
            "note": {
              "en": ">60° indicates DISI pattern; <30° indicates VISI pattern.",
              "th": ">60 องศาแสดงถึง DISI pattern; <30 องศาแสดงถึง VISI pattern"
            }
          }
        ],
        "redFlags": [
          {
            "en": "Acute Carpal Tunnel Syndrome from volar lunate dislocation (Mayfield Stage IV), requiring emergency nerve decompression.",
            "th": "ภาวะพังผืดข้อมือกดทับเส้นประสาทฉุกเฉิน (Acute Carpal Tunnel Syndrome) จากกระดูก Lunate ทะลักมาด้านหน้า (Mayfield IV) ต้องผ่าตัดคลายการกดทับด่วน"
          },
          {
            "en": "Irreversible median nerve ischemia causing permanent hand sensory loss and thenar atrophy.",
            "th": "ภาวะเส้นประสาท Median ขาดเลือดถาวร ส่งผลให้สูญเสียความรู้สึกที่มือและกล้ามเนื้อเนิน thumb ฝีบเกร็ง"
          }
        ],
        "associatedInjuries": [
          {
            "injury": {
              "en": "Scaphoid Waist Fracture (Trans-scaphoid Perilunate Dislocation)",
              "th": "กระดูกสะแคฟอยด์หักร่วมกับข้อมือหลุด (Trans-scaphoid Perilunate)"
            }
          },
          {
            "injury": {
              "en": "Radial Styloid Process Fracture (Chauffeur Fracture)",
              "th": "กระดูก Radial styloid หัก"
            }
          }
        ],
        "clinicalPearls": [
          {
            "en": "Mayfield progression occurs in 4 sequential stages in a clockwise direction around the lunate starting from SLIL disruption.",
            "th": "ลำดับการฉีกขาดของ Mayfield เกิดขึ้น 4 ระยะต่อเนื่องกันในทิศทางตามเข็มนาฬิการอบกระดูก Lunate เริ่มจากเอ็น SLIL ขาด"
          },
          {
            "en": "Stage IV shows classic 'Spilled Teacup' sign on lateral view (lunate tilted 90° volarly) and 'Pie sign' on PA view.",
            "th": "Mayfield Stage IV จะเห็นลักษณะเฉพาะ 'Spilled Teacup sign' ในท่าด้านข้าง (Lunate คว่ำ 90 องศา) และ 'Pie sign' ในท่า PA"
          },
          {
            "en": "Emergency carpal tunnel release, closed/open reduction, and ligamentous repair with pinning are mandatory for Stage IV injuries.",
            "th": "จำเป็นต้องผ่าตัดฉุกเฉินเปิดผังผืดข้อมือ (CTR) จัดกระดูกเข้าที่ และซ่อมเอ็นยึด K-wire ใน Mayfield Stage IV"
          }
        ]
      },
      "classifications": [
        {
          "system": "Mayfield",
          "fullName": {
            "en": "Mayfield Classification of Progressive Perilunate Instability",
            "th": "การจำแนกภาวะข้อมือไม่มั่นคงแบบค่อยเป็นค่อยไป Mayfield"
          },
          "description": {
            "en": "Classification describing the 4 sequential stages of progressive perilunate ligamentous disruption around the lunate bone, from scapholunate dissociation to complete anterior lunate dislocation into the carpal tunnel.",
            "th": "ระบบจำแนกภาวะข้อมือและกระดูกลูเนทไม่มั่นคง (Perilunate Instability) แบ่งเป็น 4 ระยะ ตามลำดับการฉีกขาดของเอ็นรอบกระดูก Lunate ตั้งแต่ Scapholunate dissociation จนถึงภาวะ Lunate หลุดทะลักเข้า Carpal tunnel"
          },
          "concept": {
            "title": {
              "en": "Mayfield Perilunate Instability Concept",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ Mayfield Classification"
            },
            "corePrinciple": {
              "en": "Perilunate dislocations result from progressive pericarpal ligamentous failure around the lunate in a sequential clockwise direction (Stages I-IV), culminating in Stage IV lunate dislocation into the carpal tunnel.",
              "th": "ภาวะข้อ Perilunate หลุดเกิดจากการฉีกขาดของเอ็นรอบกระดูก Lunate อย่างต่อเนื่องตามเข็มนาฬิกา (Stages I-IV) จนกระทั่งใน Stage IV กระดูก Lunate จะหมุนหลุดทะลักเข้าช่องข้อมือ Carpal tunnel"
            },
            "rules": [
              {
                "en": "Stage I (Scapholunate Dissociation): SL gap >3 mm (Terry Thomas sign), SL angle >60° (DISI).",
                "th": "Stage I (Scapholunate Dissociation): ช่อง SL อ้า >3 มม. (Terry Thomas sign), มุม SL >60° (DISI)"
              },
              {
                "en": "Stage II (Perilunate Dislocation): Capitolunate joint disruption; capitate dislocates dorsally.",
                "th": "Stage II (Perilunate Dislocation): เอ็น Capitolunate ขาด; กระดูก Capitate หลุดไปด้านหลัง"
              },
              {
                "en": "Stage III (Perilunate Dislocation Complete): Lunotriquetral (LT) ligament tear; entire carpus dislocates dorsally.",
                "th": "Stage III (Perilunate Dislocation Complete): เอ็น Lunotriquetral (LT) ขาด; กระดูกข้อมือทั้งหมดหลุดไปด้านหลัง"
              },
              {
                "en": "Stage IV (Lunate Dislocation): Lunate rotated 90° volarly into carpal tunnel ('Spilled Teacup' sign).",
                "th": "Stage IV (Lunate Dislocation): Lunate หมุนคว่ำ 90° ทะลักเข้า Carpal tunnel ('Spilled Teacup' sign)"
              }
            ],
            "clinicalSignificance": [
              {
                "en": "Stage I: Operative SL ligament repair / capsulodesis + K-wire stabilization for 6-8 weeks.",
                "th": "Stage I: ผ่าตัดซ่อมเอ็น SL + เย็บพาสตรึงแคปซูล + ปักเข็ม K-wire นาน 6-8 สัปดาห์"
              },
              {
                "en": "Stage II & III: Urgent closed reduction + open dual-approach ORIF and ligament reconstruction.",
                "th": "Stage II & III: ดึงจัดข้อเข้าที่ฉุกเฉิน + ผ่าตัดเปิดสองทาง ORIF ซ่อมเอ็นยึดกระดูก"
              },
              {
                "en": "Stage IV: EMERGENCY Carpal Tunnel Release (CTR) for median nerve decompression + open reduction of lunate + robust ORIF & ligament repair.",
                "th": "Stage IV: ผ่าตัดฉุกเฉินด่วนที่สุด! เปิดคลายช่องข้อมือ (CTR) ลดแรงกดเส้นประสาท Median + จัดกระดูก Lunate เข้าที่ + ORIF ซ่อมเอ็น"
              },
              {
                "en": "CRITICAL PITFALL: Up to 25% of perilunate dislocations are missed on initial ER X-rays. Always evaluate Gilula's 3 carpal arcs.",
                "th": "ข้อควรระวังสำคัญ: ภาวะ Perilunate dislocation ถูกตรวจพลาดถึง 25% ในห้องฉุกเฉิน! ต้องเช็กแนวเส้น Gilula's 3 arcs ในภาพ PA เสมอ"
              }
            ]
          },
          "investigations": [
            {
              "name": "PA Wrist View",
              "details": {
                "en": "Standard PA view. Evaluates scapholunate interval (Terry Thomas sign >3mm), Gilula's 3 carpal arcs continuity, and scapholunate ring sign.",
                "th": "ภาพเอกซเรย์ข้อมือท่า PA มาตรฐาน ใช้ประเมินระยะถ่าง Scapholunate (Terry Thomas sign >3มม.), เส้นโค้ง Gilula's arcs 3 เส้น และ Signet ring sign"
              },
              "imageUrl": "/images/investigations/wrist/ap_wrist_view.jpg"
            },
            {
              "name": "Lateral Wrist View",
              "details": {
                "en": "Strict lateral view in neutral position. Crucial for measuring Scapholunate angle (normal 30-60°, DISI >60°), checking radiolunate alignment, and identifying 'Spilled Teacup' sign.",
                "th": "ภาพเอกซเรย์ข้อมือท่าด้านข้างแท้ จำเป็นสำหรับการวัดมุม Scapholunate (ปกติ 30-60°, DISI >60°), แนว Capitate-Lunate-Radius และดูเงา 'Spilled Teacup sign'"
              },
              "imageUrl": "/images/investigations/wrist/lateral_wrist_view.jpg"
            },
            {
              "name": "Clenched Fist PA / Stress View",
              "details": {
                "en": "PA view with tight fist. Drives the capitate proximally into the scapholunate gap, accentuating dynamic scapholunate dissociation.",
                "th": "ภาพเอกซเรย์ข้อมือท่ากำหมัดแน่น เพิ่มแรงอัดหัว Capitate ลงตรงช่อง Scapholunate ช่วยแสดงภาวะ Scapholunate อ้าแยกในระยะเริ่มต้น (Dynamic instability)"
              },
              "imageUrl": "/images/investigations/wrist/clenched_fist_wrist.jpg"
            }
          ],
          "types": [
            {
              "type": "Stage I",
              "name": {
                "en": "Mayfield Stage I (Scapholunate Dissociation / SLD)",
                "th": "Mayfield Stage I (เอ็น Scapholunate ขาด - Terry Thomas Sign)"
              },
              "description": {
                "en": "Disruption of the Scapholunate (SL) ligament and radioscaphocapitate ligament\nScapholunate gap widening > 3 mm (Classic 'Terry Thomas Sign' / 'David Letterman Sign')\nScapholunate angle > 60° on lateral view (DISI pattern - Dorsal Intercalated Segment Instability)\nScaphoid flexes while Lunate tilts dorsally",
                "th": "เอ็น Scapholunate (SL) และเอ็น Radioscaphocapitate ฉีกขาดขาดจากกัน\nช่อง Scapholunate ถ่างกว้าง > 3 มม. (ลักษณะเฉพาะ 'Terry Thomas Sign')\nมุม Scapholunate เอียงทำมุม > 60 องศาในท่าด้านข้าง (เกิดลักษณะ DISI pattern)\nกระดูก Scaphoid งอลง ขณะที่กระดูก Lunate กระดกเงยขึ้นทางด้านหลังมือ"
              },
              "moi": {
                "en": "High-energy fall on extended, pronated, and ulnarly deviated wrist.",
                "th": "การล้มเอาข้อมือยันพื้นขณะข้อมือแอ่นสุด คว่ำมือ และปัดเบี่ยงไปทางนิ้วก้อย (Ulnar deviation)"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "Indicated ONLY for partial/dynamic instability without fixed deformity. Short arm thumb spica cast for 6-8 weeks.",
                  "th": "พิจารณาเฉพาะรอยขาดบางส่วนที่ยังไม่มีกระดูกเกยผิดรูปถาวร ใส่เฝือก Thumb spica สั้นนาน 6-8 สัปดาห์"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT FOR ACUTE COMPLETE TEAR. Open/arthroscopic Scapholunate ligament repair, capsulodesis, or RASL/suture button technique + K-wire stabilization for 6-8 weeks.",
                  "th": "แนะนำผ่าตัด (ORIF/Arthroscopy) ซ่อมแซมเอ็น Scapholunate ร่วมกับเย็บพาสตรึงแคปซูล (Capsulodesis) หรือใส่เชือกยึด (Suture button) และปัก K-wire นาน 6-8 สัปดาห์"
                }
              },
              "illustrationId": "/images/mayfield/mayfield_1.png",
              "xrayDescription": {
                "en": "Widened SL gap >3mm on PA view ('Terry Thomas sign'), Signet ring sign of scaphoid, and SL angle >60° on lateral view.",
                "th": "ระยะช่อง SL ถ่างกว้าง > 3 มม. ในท่า PA ('Terry Thomas sign'), รอยวงแหวน Signet ring sign และมุม SL > 60° ในท่าด้านข้าง"
              }
            },
            {
              "type": "Stage II",
              "name": {
                "en": "Mayfield Stage II (Perilunate Dislocation / Capitate Dislocation)",
                "th": "Mayfield Stage II (ข้อ Capitate หลุดไปด้านหลัง Lunate)"
              },
              "description": {
                "en": "Extension of ligamentous disruption to the Capitolunate (CL) joint (Space of Poirier)\nCapitate dislocates dorsally relative to the Lunate\nLunate maintains normal contact with the radial fossa\nHigh risk of median nerve irritation and post-traumatic arthritis",
                "th": "การฉีกขาดของเอ็นลุกลามต่อเนื่องเข้าสู่ข้อ Capitolunate (บริเวณ Space of Poirier)\nกระดูก Capitate เคลื่อนหลุดขึ้นไปทางด้านหลังมือเมื่อเทียบกับกระดูก Lunate\nกระดูก Lunate ยังคงสถิตอยู่ในเบ้า Radial fossa ตามปกติ\nเสี่ยงต่อการกดทับเส้นประสาท Median และข้อเสื่อมรุนแรง"
              },
              "moi": {
                "en": "High-speed motorcycle collision or fall from height with high axial load on hyperextended wrist.",
                "th": "อุบัติเหตุรถจักรยานยนต์ความเร็วสูง หรือตกจากที่สูงโดยข้อมือรับแรงอัดในท่าแอ่นสุด"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "CONTRAINDICATED. Closed reduction alone has high failure rate with recurrent displacement.",
                  "th": "ห้ามใช้การรักษาด้วยวิธีนี้ การดึงเข้าที่อย่างเดียวมีอัตราหลุดซ้ำสูงมาก"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. Urgent closed reduction in ER under sedation, followed by prompt ORIF: dorsal/volar dual approach, SL & CL ligament repair, and K-wire pinning.",
                  "th": "ดึงจัดข้อเข้าที่ฉุกเฉินใน ER แล้วผ่าตัด ORIF เปิดสองทางหน้า-หลัง เพื่อซ่อมแซมเอ็นและปักเข็ม K-wire ยึดกระดูกข้อมือ"
                }
              },
              "illustrationId": "/images/mayfield/mayfield_2.png",
              "xrayDescription": {
                "en": "Disruption of Gilula's 1st and 2nd arcs on PA view. Lateral view shows capitate displaced dorsally off the lunate while lunate stays in radial fossa.",
                "th": "เส้น Gilula's arcs 1 และ 2 ขาดออกจากกัน ในท่าด้านข้างเห็นกระดูก Capitate หลุดไปหลัง Lunate โดย Lunate ยังอยู่ในเบ้า"
              }
            },
            {
              "type": "Stage III",
              "name": {
                "en": "Mayfield Stage III (Midcarpal / Lunotriquetral Dislocation)",
                "th": "Mayfield Stage III (เอ็น Lunotriquetral ขาด - Perilunate Dislocation)"
              },
              "description": {
                "en": "Extension of ligamentous disruption to the Lunotriquetral (LT) ligament\nTriquetrum detaches from the lunate\nBoth Capitate and Triquetrum dislocate dorsally around the intact Lunate ('Dorsal Perilunate Dislocation')\nSevere wrist deformity and total carpal instability",
                "th": "การฉีกขาดลุกลามต่อเนื่องไปถึงเอ็น Lunotriquetral (LT) ทางฝั่งนิ้วก้อย\nกระดูก Triquetrum หลุดแยกออกจากกระดูก Lunate\nทั้งกระดูก Capitate และ Triquetrum หลุดลอยไปด้านหลังรอบกระดูก Lunate (Dorsal Perilunate Dislocation)\nข้อมือผิดรูปทรงรุนแรง เสียความมั่นคงของกระดูกข้อมือทั้งหมด"
              },
              "moi": {
                "en": "Extreme force pushing wrist into forced extension, ulnar deviation, and intercarpal supination.",
                "th": "แรงกระแทกมหาศาลบังคับให้ข้อมือแอ่นสุด ปัดไปทางนิ้วก้อย และหงายข้อต่อข้อมืออย่างรุนแรง"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "CONTRAINDICATED.",
                  "th": "ห้ามใช้การรักษาด้วยวิธีนี้"
                },
                "operative": {
                  "en": "MANDATORY OPERATIVE FIXATION. Urgent reduction + ORIF with dual dorsal/volar access, repair of SL, CL, and LT ligaments, and multi-pin K-wire fixation.",
                  "th": "ผ่าตัดฉุกเฉิน (Mandatory ORIF) เปิดซ่อมแซมเอ็น SL, CL และ LT ร่วมกับปัก K-wire ยึดกระดูกข้อมือทุกชิ้นให้กลับเข้าตำแหน่ง"
                }
              },
              "illustrationId": "/images/mayfield/mayfield_3.png",
              "xrayDescription": {
                "en": "Complete overlap/disruption of triquetrum and lunate on PA view. Lateral view shows capitate and triquetrum dislocated dorsally.",
                "th": "กระดูก Triquetrum เกยทับ Lunate ในท่า PA ในท่าด้านข้างเห็น Capitate และ Triquetrum หลุดลอยไปทางด้านหลังมือ"
              }
            },
            {
              "type": "Stage IV",
              "name": {
                "en": "Mayfield Stage IV (Lunate Dislocation / Spilled Teacup Sign)",
                "th": "Mayfield Stage IV (กระดูก Lunate หลุดทะลักไปด้านหน้า - Spilled Teacup)"
              },
              "description": {
                "en": "Complete disruption of ALL perilunate ligaments including dorsal radiolunate ligament\nLunate extrudes ANTERIORLY (volarly) into the carpal tunnel, tilting 90°\nClassic 'Spilled Teacup Sign' on lateral view and 'Pie Sign' on PA view\nVERY HIGH RISK of Acute Carpal Tunnel Syndrome (median nerve compression)",
                "th": "เอ็นยึดรอบกระดูก Lunate ทั้งหมดฉีกขาดสมบูรณ์ รวมถึงเอ็น Dorsal radiolunate\nกระดูก Lunate ถูกดันหลุดทะลักมาทางด้านหน้า (Volar) เข้าสู่ช่อง Carpal tunnel และบิดหมุน 90 องศา\nลักษณะเฉพาะ **'Spilled Teacup Sign'** ในท่าด้านข้าง (เหมือนถ้วยชาคว่ำ) และ 'Pie Sign' ในท่า PA\nเสี่ยงสูงสุดต่อภาวะ **Acute Carpal Tunnel Syndrome** จากการกดทับเส้นประสาท Median ฉุกเฉิน"
              },
              "moi": {
                "en": "Severe crush injury or high-speed collision causing maximum wrist hyperextension.",
                "th": "อุบัติเหตุแรงทับบดพลังงานสูง หรือชนความเร็วสูงงอแอ่นข้อมือถึงขีดสุด"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "CONTRAINDICATED. Causes irreversible median nerve damage and crippling wrist stiffness.",
                  "th": "ห้ามใช้การรักษาด้วยวิธีนี้ ทำให้เส้นประสาท Median บาดเจ็บถาวรและข้อมือพิการ"
                },
                "operative": {
                  "en": "EMERGENCY OPERATIVE DECOMPRESSION & RECONSTRUCTION. Urgent Carpal Tunnel Release (CTR) for median nerve decompression + open reduction of lunate + ORIF with robust SL/LT ligament repair and K-wire pinning.",
                  "th": "ผ่าตัดฉุกเฉินด่วนที่สุด! ผ่าตัดเปิดผังผืดข้อมือ (Carpal Tunnel Release) ลดแรงกดเส้นประสาท Median + จัดกระดูก Lunate เข้าที่ + ซ่อมเอ็นและปัก K-wire"
                }
              },
              "illustrationId": "/images/mayfield/mayfield_4.png",
              "xrayDescription": {
                "en": "Lunate rotated 90° volarly resembling a spilled teacup on lateral view ('Spilled Teacup sign'), triangular 'Pie sign' of lunate on PA view.",
                "th": "เห็นกระดูก Lunate หมุนคว่ำ 90 องศาไปทางฝ่ามือคล้ายถ้วยชาคว่ำ ('Spilled Teacup sign') ในท่าด้านข้าง และเห็นเป็นรูปสามเหลี่ยม 'Pie sign' ในท่า PA"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "first-metacarpal-base",
      "name": {
        "en": "1st Metacarpal Base",
        "th": "ฐานกระดูกฝ่ามือนิ้วหัวแม่มือ (1st Metacarpal Base)"
      },
      "regionConcept": {
        "physicalExam": [
          {
            "sign": "1st CMC Joint Deformity & Bony Prominence",
            "positive": {
              "en": "Visible step-off or dorsal prominence at the base of the thumb CMC joint.",
              "th": "พบความผิดรูปโก่งนูนทางด้านหลังบริเวณฐานข้อต่อ CMC นิ้วหัวแม่มือ"
            }
          },
          {
            "sign": "Loss of Pinch & Grip Strength",
            "positive": {
              "en": "Inability to generate key pinch or tip pinch strength due to CMC instability and pain.",
              "th": "ไม่สามารถออกแรงหนีบนิ้ว (Pinch strength) หรือแรงกำมือได้เนื่องจากข้อ CMC ไม่มั่นคงและปวด"
            }
          },
          {
            "sign": "Base of Thumb Local Tenderness",
            "positive": {
              "en": "Point tenderness directly over the trapeziometacarpal joint line.",
              "th": "กดเจ็บเฉพาะจุดตรงแนวข้อต่อ Trapeziometacarpal"
            }
          },
          {
            "sign": "Axial Loading Test of Thumb",
            "positive": {
              "en": "Pain and crepitus when pushing the thumb metacarpal axially toward the trapezium.",
              "th": "ปวดและมีเสียงกรอบแกรบเมื่อดันกดกระดูกฝ่ามือนิ้วโป้งตามแนวแกนเข้าหากระดูก Trapezium"
            }
          }
        ],
        "acceptableAlignment": [
          {
            "parameter": {
              "en": "Articular Step-off (Bennett / Rolando)",
              "th": "รอยเหลื่อมผิวข้อต่อ (Bennett / Rolando)"
            },
            "threshold": "< 1 mm",
            "note": {
              "en": "Articular step-off ≥1mm leads to rapid post-traumatic CMC osteoarthritis.",
              "th": "รอยเหลื่อมผิวข้อ ≥1 มม. นำไปสู่ข้อต่อ CMC เสื่อมรุนแรงอย่างรวดเร็ว"
            }
          },
          {
            "parameter": {
              "en": "Extra-articular Shaft Angulation (Apex Dorsal)",
              "th": "มุมโก่งงอแกนนอกข้อต่อ (Apex Dorsal)"
            },
            "threshold": "< 20° - 30°",
            "note": {
              "en": "Up to 30° apex dorsal angulation acceptable for extra-articular fractures due to compensatory CMC mobility.",
              "th": "ยอมรับมุมโก่งงอไปด้านหลังได้ถึง 30 องศาในรอยหักนอกข้อต่อ เนื่องจากข้อ CMC ชดเชยได้ดี"
            }
          }
        ],
        "redFlags": [
          {
            "en": "Thenar space / hand compartment syndrome following high-energy crush or vascular trauma.",
            "th": "ภาวะความดันในช่องกล้ามเนื้อฝ่ามือสูง (Compartment syndrome of thenar space) หลังอุบัติเหตุทับบดพลังงานสูง"
          },
          {
            "en": "Digital nerve or radial artery superficial branch injury during sharp trauma or fragment displacement.",
            "th": "การบาดเจ็บของเส้นประสาทดิจิทัลหรือแขนงหลอดเลือด Radial artery บริเวณฐานนิ้วหัวแม่มือ"
          }
        ],
        "associatedInjuries": [
          {
            "injury": {
              "en": "Trapezium Fracture",
              "th": "กระดูก Trapezium หัก"
            }
          },
          {
            "injury": {
              "en": "Ulnar Collateral Ligament (UCL) Tear of 1st MCP Joint (Gamekeeper's / Skier's Thumb)",
              "th": "เอ็น UCL ข้อ MCP นิ้วโป้งฉีกขาด (Gamekeeper's / Skier's Thumb)"
            }
          }
        ],
        "clinicalPearls": [
          {
            "en": "Abductor pollicis longus (APL) tendon pulls the metacarpal shaft proximally, dorsally, and radially, creating classic Bennett displacement.",
            "th": "เอ็นกล้ามเนื้อ Abductor pollicis longus (APL) จะดึงรั้งแกนกระดูกฝ่ามือขึ้นบน ไปด้านหลัง และด้านนอก เกิดลักษณะเคลื่อนหลุดคลาสสิกของ Bennett"
          },
          {
            "en": "In Bennett fractures, the small volar lip fragment remains attached to the strong Anterior Oblique Ligament (AOL).",
            "th": "ใน Bennett fracture ชิ้นส่วนกระดูกเล็กทางด้าน volar ยังคงยึดแน่นอยู่กับเอ็น Anterior Oblique Ligament (AOL)"
          },
          {
            "en": "Rolando fracture is a comminuted Y- or T-shaped intra-articular fracture pattern requiring ORIF or external fixation to restore articular surface.",
            "th": "Rolando fracture เป็นกระดูกหักเข้าข้อแบบแตกละเอียดรูปตัว Y หรือ T ซึ่งต้องการผ่าตัด ORIF หรือยึดโครงภายนอกเพื่อเรียงผิวข้อ"
          }
        ]
      },
      "classifications": [
        {
          "system": "Eponyms",
          "fullName": {
            "en": "First Metacarpal Base Fractures",
            "th": "การหักบริเวณฐานกระดูกฝ่ามือนิ้วหัวแม่มือ"
          },
          "description": {
            "en": "Classification of fractures at the base of the first metacarpal, distinguishing between intra-articular and extra-articular injuries.",
            "th": "ระบบจำแนกกระดูกหักบริเวณฐานกระดูกฝ่ามือนิ้วหัวแม่มือ (นิ้วที่ 1) แบ่งตามการมีหรือไม่มีรอยหักเข้าข้อต่อ"
          },
          "concept": {
            "title": {
              "en": "1st Metacarpal Base Eponyms Concept",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ 1st Metacarpal Base Fractures"
            },
            "corePrinciple": {
              "en": "In intra-articular 1st CMC joint fractures, the Abductor Pollicis Longus (APL) tendon pulls the metacarpal shaft proximally, dorsally, and radially, while the volar beak fragment remains anchored to the trapezium by the deep volar oblique ligament (AOL).",
              "th": "ในกระดูกโคนนิ้วโป้งหักเข้าข้อ 1st CMC แรงดึงของกล้ามเนื้อ APL จะดึงแกนกระดูกฝ่ามือหลุดไปทางด้านบน ด้านหลัง และด้านนอก ในขณะที่ชิ้นส่วน Volar beak ยังคงยึดแน่นอยู่กับกระดูก Trapezium ด้วยเอ็น Deep Volar Oblique (AOL)"
            },
            "rules": [
              {
                "en": "Bennett Fracture: 2-part intra-articular fracture-dislocation.",
                "th": "Bennett Fracture: กระดูกหักเข้าข้อต่อแบบ 2 ชิ้นร่วมกับข้อหลุด"
              },
              {
                "en": "Rolando Fracture: Comminuted 3-part (or more) intra-articular fracture with Y- or T-shaped pattern.",
                "th": "Rolando Fracture: กระดูกหักเข้าข้อแบบแตกละเอียดตั้งแต่ 3 ชิ้นขึ้นไป รูปตัว Y หรือ T"
              },
              {
                "en": "Extra-articular Base Fracture: Transverse/oblique fracture distal to 1st CMC joint space.",
                "th": "Extra-articular Base Fracture: รอยหักแนวขวาง/เฉียงต่ำกว่าช่องข้อ 1st CMC (ไม่เข้าข้อ)"
              },
              {
                "en": "Acceptable Alignment Criteria: Articular step-off <1 mm for Bennett/Rolando. Extra-articular apex dorsal angulation <20°-30°.",
                "th": "เกณฑ์สัดส่วนที่ยอมรับได้: รอยเหลื่อมผิวข้อ <1 มม. (Bennett/Rolando); นอกข้อต่อยอมรับมุมโก่งงอได้ถึง 20°-30°"
              }
            ],
            "clinicalSignificance": [
              {
                "en": "Bennett Fracture: Closed reduction + percutaneous K-wire pinning (CRIF) or ORIF with mini-screws. Cast alone fails due to continuous APL tendon pull.",
                "th": "Bennett Fracture: ผ่าตัดดึงจัดกระดูกแทง K-wire ยึด (CRIF) หรือ ORIF ขัน mini-screws; ใส่เฝือกอย่างเดียวล้มเหลวเพราะแรงดึงเอ็น APL"
              },
              {
                "en": "Rolando Fracture: ORIF with mini-T-plate or dynamic external fixation to restore articular surface and maintain length.",
                "th": "Rolando Fracture: ผ่าตัด ORIF ด้วยแผ่นเหล็ก Mini-T-plate หรือใส่โครงยึดภายนอก (External fixation) เพื่อเรียงผิวข้อ"
              },
              {
                "en": "Extra-articular Fracture: Closed reduction + thumb spica cast for 3-4 weeks (CMC joint compensates for up to 30° angulation); ORIF if >30° angulation.",
                "th": "Extra-articular Fracture: ดึงจัดกระดูกใส่เฝือก Thumb spica 3-4 สัปดาห์ (ข้อ CMC ชดเชยมุมได้ถึง 30°); ผ่าตัด ORIF หากมุมโก่ง >30°"
              },
              {
                "en": "CRITICAL PITFALL: Do not attempt cast immobilization for Bennett or Rolando fractures—continuous muscle forces (APL) inevitably cause secondary subluxation.",
                "th": "ข้อควรระวังสำคัญ: ห้ามรักษา Bennett หรือ Rolando fracture ด้วยการใส่เฝือกเด็ดขาด! เพราะแรงดึงกล้ามเนื้อ APL จะดึงให้ข้อหลุดซ้ำ"
              }
            ]
          },
          "investigations": [
            {
              "name": "AP Thumb View (Robert's View)",
              "details": {
                "en": "AP view taken with the wrist in maximum internal rotation. Essential to visualize the carpometacarpal (CMC) joint clearly without trapezium overlay.",
                "th": "ภาพเอกซเรย์ท่าหน้าหลัง (AP) จริงของนิ้วหัวแม่มือ ถ่ายโดยหมุนข้อมือเข้าด้านในสุด ช่วยให้เห็นช่องข้อ CMC ได้ชัดเจนโดยไม่มีกระดูก Trapezium ทับซ้อน"
              },
              "imageUrl": "/images/investigations/hand/ap_thumb_roberts.jpg"
            },
            {
              "name": "Lateral Thumb View",
              "details": {
                "en": "Lateral view of the thumb. Crucial for assessing volar subluxation or dorsal displacement of the metacarpal shaft.",
                "th": "ภาพเอกซเรย์ท่าด้านข้าง (Lateral) จริงของนิ้วหัวแม่มือ มีความสำคัญอย่างยิ่งในการประเมินการเคลื่อนหลุดไปด้านหน้า (Volar subluxation) หรือการเคลื่อนไปด้านหลัง"
              },
              "imageUrl": "/images/investigations/hand/lateral_thumb.jpg"
            },
            {
              "name": "Bettel's View",
              "details": {
                "en": "Hyperpronated view of the thumb CMC joint. Helps confirm subtle subluxations and assess joint stability.",
                "th": "ภาพเอกซเรย์คว่ำข้อมือสุด (Hyperpronation) ของข้อ CMC นิ้วหัวแม่มือ ช่วยยืนยันภาวะข้อมือเคลื่อนหลุดเล็กน้อยและประเมินความมั่นคงของข้อต่อ"
              }
            }
          ],
          "types": [
            {
              "type": "Bennett",
              "name": {
                "en": "Bennett Fracture-Dislocation",
                "th": "กระดูกหักแบบ Bennett (Bennett Fracture-Dislocation)"
              },
              "description": {
                "en": "Unstable two-part intra-articular fracture-dislocation\nSmall volar lip fragment remains attached to the anterior oblique ligament (AOL)\nMetacarpal shaft is pulled proximally, dorsally, and radially by the APL tendon",
                "th": "กระดูกหักเข้าข้อต่อแบบ 2 ชิ้นที่ไม่มีความมั่นคง ร่วมกับข้อต่อเคลื่อนหลุด\nชิ้นส่วนกระดูกเล็กทางด้าน Volar ยังคงยึดติดกับเอ็น AOL (Anterior Oblique Ligament)\nแกนกระดูกฝ่ามือชิ้นใหญ่ถูกดึงรั้งขึ้นบน, ไปด้านหลัง และดึงออกด้านนอกโดยเอ็นกล้ามเนื้อ APL"
              },
              "moi": {
                "en": "Axial load applied to a partially flexed thumb (e.g., punching or falling onto the thumb).",
                "th": "แรงกระแทกตามแนวแกนต่อกระดูกนิ้วหัวแม่มือขณะงอเล็กน้อย (เช่น การชกต่อย หรือล้มกระแทกนิ้วโป้ง)"
              },
              "treatment": {
                "conservative": {
                  "en": "Sling and thumb spica cast only if non-displaced (<1mm) and stable (extremely rare due to continuous tendon pulling forces).",
                  "th": "ใส่เฝือก Thumb spica เฉพาะรายที่ไม่เคลื่อนเลย (<1 มม.) ซึ่งพบได้ยากมากเนื่องจากมีแรงดึงจากเอ็นกล้ามเนื้อตลอดเวลา"
                },
                "operative": {
                  "en": "Closed reduction and percutaneous pinning (CRP) or open reduction and internal fixation (ORIF) with mini-screws or K-wires to restore joint congruity and counteract APL pull.",
                  "th": "ผ่าตัดดึงจัดกระดูกและยึดด้วยเข็มผ่านผิวหนัง (CRP) หรือผ่าตัดเปิดจัดกระดูกยึดตรึงภายใน (ORIF) ด้วยสกรูขนาดเล็กหรือเข็ม K-wire เพื่อฟื้นฟูผิวข้อและสู้กับแรงดึง APL"
                }
              },
              "illustrationId": "/images/metacarpal1/metacarpal1_bennett.png",
              "xrayDescription": {
                "en": "Small triangular fragment at the ulnar-volar base of the 1st metacarpal, with radial and proximal displacement/subluxation of the metacarpal shaft.",
                "th": "ชิ้นกระดูกสามเหลี่ยมขนาดเล็กบริเวณฐานด้าน ulnar-volar ของกระดูกฝ่ามือชิ้นที่ 1 ร่วมกับแกนกระดูกฝ่ามือเลื่อนหลุดไปด้านบนและทางด้าน radial"
              }
            },
            {
              "type": "Rolando",
              "name": {
                "en": "Rolando Fracture",
                "th": "กระดูกหักแบบ Rolando (Rolando Fracture)"
              },
              "description": {
                "en": "Unstable comminuted three-part (or more) intra-articular fracture\nTypically presents as a Y-shaped or T-shaped fracture pattern at the base\nPoorer prognosis compared to Bennett due to articular comminution",
                "th": "กระดูกหักเข้าข้อต่อแบบแตกละเอียดตั้งแต่ 3 ชิ้นขึ้นไป มีความไม่มั่นคงสูงมาก\nมักพบรอยหักเป็นรูปตัว Y หรือตัว T บริเวณฐานกระดูก\nพยากรณ์โรคแย่กว่า Bennett เนื่องจากผิวข้อต่อแตกละเอียดหลายชิ้น"
              },
              "moi": {
                "en": "High-energy direct axial blow to the tip of the thumb.",
                "th": "แรงกระแทกแนวแกนพลังงานสูงเข้าที่ปลายสุดของนิ้วหัวแม่มือโดยตรง"
              },
              "treatment": {
                "conservative": {
                  "en": "Cast immobilization for highly comminuted fractures where fragments are too small for surgical fixation (often managed with early mobilization after short splinting).",
                  "th": "ใส่เฝือกในกรณีที่กระดูกแตกละเอียดชิ้นเล็กเกินกว่าจะผ่าตัดยึดได้ (มักดามช่วงสั้นๆ แล้วให้ขยับเร็วเพื่อป้องกันข้อยึดติด)"
                },
                "operative": {
                  "en": "ORIF using a mini-T-plate if fragment sizes allow, or external fixation/traction if highly comminuted to maintain length and alignment.",
                  "th": "ผ่าตัดเปิดยึดกระดูกด้วยแผ่นเหล็กรูปตัว T ขนาดเล็ก (Mini-T-plate) หรือใช้โครงยึดตรึงภายนอก (External Fixator) ในรายที่แตกละเอียดมาก"
                }
              },
              "illustrationId": "/images/metacarpal1/metacarpal1_rolando.png",
              "xrayDescription": {
                "en": "Comminuted fracture at the metacarpal base, showing Y- or T-shaped fracture lines with volar and dorsal fragments.",
                "th": "รอยหักแตกละเอียดที่ฐานกระดูกฝ่ามือ เห็นแนวกระดูกหักแยกเป็นรูปตัว Y หรือ T ชิ้นส่วนแยกออกเป็นส่วนหน้า (volar) และหลัง (dorsal)"
              }
            },
            {
              "type": "Extra-articular",
              "name": {
                "en": "Extra-articular Base Fracture",
                "th": "กระดูกหักฐานฝ่ามือนอกข้อต่อ (Extra-articular Base Fracture)"
              },
              "description": {
                "en": "Transverse or oblique fracture distal to the CMC joint\nDoes not involve the articular surface\nMore stable than Bennett or Rolando fractures",
                "th": "รอยหักขวางหรือเฉียงห่างออกมาจากข้อต่อ CMC (ไม่เข้าข้อ)\nผิวข้อต่อสมบูรณ์ไม่มีรอยแตกเสียหาย\nมีความมั่นคงสูงกว่ากระดูกหักแบบ Bennett และ Rolando"
              },
              "moi": {
                "en": "Direct trauma or bending force (angulation load) to the thumb metacarpal.",
                "th": "อุบัติเหตุแรงกระแทกโดยตรงหรือแรงดัดโค้งบริเวณแกนนิ้วหัวแม่มือ"
              },
              "treatment": {
                "conservative": {
                  "en": "Closed reduction and thumb spica cast for 3-4 weeks. Up to 30 degrees of apex dorsal angulation is acceptable due to CMC joint mobility compensations.",
                  "th": "ดึงจัดกระดูกและใส่เฝือก Thumb spica นาน 3-4 สัปดาห์ สามารถยอมรับมุมโก่งงอได้ถึง 30 องศา เนื่องจากข้อ CMC ขยับชดเชยได้ดี"
                },
                "operative": {
                  "en": "Percutaneous pinning (K-wires) or mini-plate fixation if angulation is >30 degrees, rotated, or unstable after closed reduction.",
                  "th": "ใส่เข็มยึดผ่านผิวหนัง (K-wire) หรือแผ่นเหล็กขนาดเล็กเฉพาะกรณีที่มุมโก่ง >30 องศา หรือไม่มั่นคงหลังจัดกระดูก"
                }
              },
              "illustrationId": "/images/metacarpal1/metacarpal1_extra.png",
              "xrayDescription": {
                "en": "Fracture line distal to the joint space, frequently presenting with apex dorsal angulation.",
                "th": "เห็นรอยหักต่ำกว่าระดับช่องข้อต่ออย่างชัดเจน มักพบมุมโก่งไปทางด้านหลังมือ (Apex dorsal angulation)"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "other-metacarpals",
      "name": {
        "en": "2nd - 5th Metacarpals",
        "th": "กระดูกฝ่ามือนิ้วชี้ถึงก้อย (2nd - 5th Metacarpals)"
      },
      "regionConcept": {
        "physicalExam": [
          {
            "sign": "Loss of Knuckle Prominence",
            "positive": {
              "en": "Depression or flattening of the MCP knuckle contour on the dorsal aspect of hand due to apex dorsal neck/shaft angulation.",
              "th": "สันหมัด (Knuckle) บุ๋มหายไปเนื่องจากคอหรือแกนกระดูกฝ่ามือโก่งไปด้านหลัง"
            }
          },
          {
            "sign": "Rotational Scissoring Test (Finger Flexion Alignment)",
            "positive": {
              "en": "Overlapping or crossing of adjacent fingers when flexing digits into a fist; indicates un-tolerated rotational malalignment.",
              "th": "นิ้วมือซ้อนเกยกันขณะพับกำมือ แสดงถึงการบิดหมุนผิดรูปที่ยอมรับไม่ได้"
            }
          },
          {
            "sign": "Direct Metacarpal Shaft Tenderness & Pain on Axial Load",
            "positive": {
              "en": "Sharp focal tenderness on palpation over metacarpal shaft or pain reproduced by pushing distal fingertip axially.",
              "th": "กดเจ็บเฉพาะจุดบนแกนกระดูกฝ่ามือ หรือปวดเมื่อดันปลายนิ้วดันเข้าตามแนวแกน"
            }
          }
        ],
        "acceptableAlignment": [
          {
            "parameter": {
              "en": "2nd & 3rd Metacarpal Neck / Shaft Angulation",
              "th": "มุมโก่งคอ/แกน นิ้วชี้และนิ้วกลาง (2nd & 3rd MC)"
            },
            "threshold": "< 10° - 15°",
            "note": {
              "en": "Rigid carpometacarpal joints allow minimal compensatory motion.",
              "th": "ข้อต่อ CMC นิ้วชี้และกลางมีความแน่นหนา จึงยอมรับมุมโก่งงอได้น้อยมาก"
            }
          },
          {
            "parameter": {
              "en": "4th Metacarpal Neck Angulation",
              "th": "มุมโก่งคอกระดูกฝ่ามือนิ้วนาง (4th MC Neck)"
            },
            "threshold": "< 30° - 40°",
            "note": {
              "en": "Moderate CMC mobility allows greater compensation.",
              "th": "ข้อต่อ CMC นิ้วนางมีความยืดหยุ่นปานกลาง สามารถชดเชยมุมโก่งได้มากขึ้น"
            }
          },
          {
            "parameter": {
              "en": "5th Metacarpal Neck Angulation (Boxer's Fracture)",
              "th": "มุมโก่งคอกระดูกฝ่ามือนิ้วก้อย (5th MC Neck)"
            },
            "threshold": "< 40° - 50° (up to 70°)",
            "note": {
              "en": "Angulation up to 40-70° acceptable if no rotational scissoring or extensor lag present.",
              "th": "ยอมรับมุมโก่งได้ถึง 40-70 องศาหากไม่มีนิ้วบิดเกยกันและไม่มีภาวะเหยียดนิ้วไม่สุด"
            }
          },
          {
            "parameter": {
              "en": "Rotational Deformity (All Metacarpals)",
              "th": "การบิดหมุนผิดรูป (ทุกกระดูกฝ่ามือ)"
            },
            "threshold": "0° (Zero Tolerance)",
            "note": {
              "en": "1° of rotation causes ~5° of digital overlap during grip.",
              "th": "การหมุนบิดเพียง 1 องศา ทำให้ปลายนิ้วเกยกันมากถึง ~5 องศาเวลาพับกำมือ"
            }
          },
          {
            "parameter": {
              "en": "Metacarpal Shortening",
              "th": "ความยาวกระดูกสั้นลง"
            },
            "threshold": "< 2 - 3 mm",
            "note": {
              "en": "1mm shortening causes ~7° of extensor lag and weak grip.",
              "th": "กระดูกสั้นลง 1 มม. ทำให้เหยียดนิ้วได้ไม่สุด ~7 องศาและแรงกำมือลดลง"
            }
          }
        ],
        "redFlags": [
          {
            "en": "Fight bite / Human bite wound over 5th MCP joint (Eikenella corrodens contamination) requiring urgent surgical irrigation & IV antibiotics.",
            "th": "แผลถูกฟันมนุษย์กัด (Fight bite) บริเวณข้อ MCP นิ้วก้อย เสี่ยงต่อการติดเชื้อ Eikenella corrodens รุนแรง ต้องล้างแผลผ่าตัดและให้ยาปฏิชีวนะทางหลอดเลือดด่วน"
          },
          {
            "en": "Interosseous muscle compartment syndrome of the hand following severe crush trauma.",
            "th": "ภาวะความดันในช่องกล้ามเนื้อฝ่ามือสูง (Interosseous compartment syndrome) หลังบาดเจ็บถูกทับบด"
          }
        ],
        "associatedInjuries": [
          {
            "injury": {
              "en": "Extensor Tendon Cap / Sagittal Band Rupture",
              "th": "เอ็นเหยียดนิ้วฉีกขาด หรือเอ็น Sagittal band ขาด"
            }
          },
          {
            "injury": {
              "en": "Adjacent Metacarpal Shaft Fracture",
              "th": "กระดูกฝ่ามือชิ้นข้างเคียงหักร่วม"
            }
          }
        ],
        "clinicalPearls": [
          {
            "en": "Check for human bite / fight bite wound over 5th MCP joint; puncture wounds over knuckles after a punch are open joint injuries until proven otherwise.",
            "th": "ต้องตรวจหาแผล Fight bite / Human bite บริเวณข้อ MCP นิ้วก้อยเสมอ แผลรูเบาะๆ หลังชกต่อยถือเป็นแผลเปิดเข้าข้อต่อจนกว่าจะพิสูจน์เป็นอย่างอื่น"
          },
          {
            "en": "Always flex MCP joints to 90° when assessing rotational alignment; extending digits hides rotational scissoring.",
            "th": "ต้องงอข้อ MCP 90 องศาเสมอขณะประเมินนิ้วบิดเกยกัน การเหยียดนิ้วซ่อนการบิดหมุนซ้อนกันไว้"
          },
          {
            "en": "Jahss reduction maneuver (flexing MCP and PIP to 90° and pushing upward on PIP while stabilizing shaft) is effective for acute Boxer's fractures.",
            "th": "การดึงจัดกระดูกวิธี Jahss maneuver (งอข้อ MCP และ PIP 90° แล้วดันขึ้นที่ข้อ PIP พร้อมตรึงแกนกระดูก) ได้ผลดีมากใน Boxer's fracture ระยะเฉียบพลัน"
          }
        ]
      },
      "classifications": [
        {
          "system": "Anatomical Location",
          "fullName": {
            "en": "2nd-5th Metacarpal Fractures (Anatomical & Alignment)",
            "th": "การจำแนกและเกณฑ์การรักษากระดูกฝ่ามือนิ้วชี้ถึงก้อย"
          },
          "description": {
            "en": "Anatomical classification of 2nd-5th metacarpal fractures focusing on practical management and acceptable alignment thresholds.",
            "th": "ระบบจำแนกกระดูกฝ่ามือนิ้วชี้ถึงนิ้วก้อยตามตำแหน่งกายวิภาค เน้นเกณฑ์มุมโก่งงอที่ยอมรับได้ (Acceptable Alignment) และแนวทางการรักษาทางคลินิกจริง"
          },
          "concept": {
            "title": {
              "en": "Metacarpal Acceptable Alignment & Boxer's Concept",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ 2nd-5th Metacarpal Fractures & Boxer's Fracture"
            },
            "corePrinciple": {
              "en": "Acceptable apex-dorsal angulation increases progressively from Index (2nd MC) to Little finger (5th MC) because mobile ulnar CMC joints compensate for residual sagittal angulation. Zero tolerance (0°) exists for rotational malalignment.",
              "th": "มุมโก่งงอไปทางหลังมือ (Apex dorsal angulation) ที่ยอมรับได้จะเพิ่มขึ้นเรื่อยๆ จากนิ้วชี้ (2nd MC) ไปถึงนิ้วก้อย (5th MC) เนื่องจากข้อ CMC ด้านนิ้วก้อยมีความยืดหยุ่นชดเชยได้ แต่ห้ามมีความผิดรูปจากการหมุนบิดเด็ดขาด (Rotation = 0°)"
            },
            "rules": [
              {
                "en": "2nd & 3rd Metacarpal Neck/Shaft: Max acceptable apex dorsal angulation <10° - 15° (Rigid CMC).",
                "th": "2nd & 3rd Metacarpal (ชี้-กลาง): โก่งได้ไม่เกิน 10° - 15° (ข้อโคนยึดแน่นชดเชยไม่ได้)"
              },
              {
                "en": "4th Metacarpal Neck: Max acceptable angulation <30° - 40°.",
                "th": "4th Metacarpal (นาง): โก่งได้ไม่เกิน 30° - 40°"
              },
              {
                "en": "5th Metacarpal Neck (Boxer's Fracture): Max acceptable neck angulation <40° - 50° (shaft <30°).",
                "th": "5th Metacarpal Neck (Boxer's Fracture): โก่งบริเวณคอกระดูกได้ถึง 40° - 50° (บริเวณแกน <30°)"
              },
              {
                "en": "Rotational Deformity: ZERO TOLERANCE (0°). 1° of metacarpal rotation causes ~5° (1.5 cm) of digital overlap in flexion.",
                "th": "การหมุนบิดผิดรูป (Rotational Deformity): ยอมรับได้ 0° เท่านั้น! การหมุนบิด 1° ทำให้นิ้วเกยกัน ~5° (1.5 ซม.) ขณะพับกำมือ"
              },
              {
                "en": "Shortening: Max acceptable <2-3 mm (1mm shortening causes ~7° extensor lag).",
                "th": "ความยาวกระดูกสั้นลง: ยอมรับได้ <2-3 มม. (สั้น 1 มม. ทำให้เหยียดนิ้วได้ไม่สุด ~7°)"
              }
            ],
            "clinicalSignificance": [
              {
                "en": "Boxer's Fracture (5th MC Neck): Closed reduction via Jahss maneuver + ulnar gutter splint for 3-4 weeks if within alignment criteria.",
                "th": "Boxer's Fracture: ดึงจัดกระดูกวิธี Jahss maneuver + ใส่เฝือกอ่อน Ulnar Gutter Splint 3-4 สัปดาห์หากอยู่ในเกณฑ์ยอมรับได้"
              },
              {
                "en": "Operative Indications: Rotational scissoring, un-tolerated angulation, multiple metacarpal shaft fractures, or open fight bite wounds.",
                "th": "ข้อบ่งชี้ผ่าตัด: มีนิ้วบิดเกยซ้อนกัน, มุมโก่งเกินเกณฑ์, กระดูกฝ่ามือหักหลายชิ้น, หรือมีแผลถูกฟันมนุษย์กัด (Fight bite)"
              },
              {
                "en": "CRITICAL PITFALL: ALWAYS check for Fight Bite wound over 5th MCP joint after a punch; requires emergency surgical irrigation & IV antibiotics.",
                "th": "ข้อควรระวังสำคัญ: ตรวจหาแผล Fight bite บริเวณข้อ MCP นิ้วก้อยหลังการชกต่อยเสมอ; ต้องผ่าตัดล้างข้อและให้ยาปฏิชีวนะทางหลอดเลือดด่วน"
              }
            ]
          },
          "investigations": [
            {
              "name": "PA Hand View",
              "details": {
                "en": "Standard posteroanterior view of the hand. Assesses metacarpal length, transverse/oblique fracture lines, and overall hand alignment.",
                "th": "ภาพเอกซเรย์มือท่า PA มาตรฐาน ใช้ประเมินความยาวกระดูกฝ่ามือ แนวกระดูกหัก และการเรียงตัวของกระดูกฝ่ามือโดยรวม"
              },
              "imageUrl": "/images/investigations/hand/pa_hand_view.jpg"
            },
            {
              "name": "Lateral Hand View",
              "details": {
                "en": "True lateral view of the hand. Essential to accurately measure apex dorsal angulation of metacarpal neck and shaft fractures.",
                "th": "ภาพเอกซเรย์มือท่าด้านข้าง (Lateral) จริง จำเป็นอย่างยิ่งสำหรับการวัดมุมโก่งงอไปทางหลังมือ (Apex dorsal angulation) ของส่วนคอและแกนกระดูก"
              },
              "imageUrl": "/images/investigations/hand/lateral_hand_view.jpg"
            },
            {
              "name": "Oblique Hand View",
              "details": {
                "en": "30-degree pronated oblique view. Separates overlapping metacarpals to profile individual metacarpal shafts and CMC/MCP joints clearly.",
                "th": "ภาพเอกซเรย์มือท่าเฉียง 30 องศา ช่วยคลายการทับซ้อนของกระดูกฝ่ามือแต่ละชิ้น ทำให้เห็นส่วนแกนกระดูกและข้อต่อ CMC/MCP ได้ชัดเจน"
              },
              "imageUrl": "/images/investigations/hand/oblique_hand_view.jpg"
            }
          ],
          "types": [
            {
              "type": "Head",
              "name": {
                "en": "Metacarpal Head Fracture",
                "th": "กระดูกส่วนหัวหัก (Metacarpal Head Fracture)"
              },
              "description": {
                "en": "Intra-articular fracture involving distal articular surface\nAcceptable Step-off: < 1 mm (required to prevent post-traumatic arthritis)\nAcceptable Articular Involvement: < 20-25%\nZero tolerance for rotational deformity",
                "th": "กระดูกหักเข้าข้อต่อบริเวณหัวกระดูกฝ่ามือส่วนปลาย\nผิวกระดูกขั้นบันไดที่ยอมรับได้: < 1 มม. (ต้องจัดให้เรียบสนิทเพื่อป้องกันข้อเสื่อม)\nผิวข้อต่อที่สูญเสียไปยอมรับได้: < 20-25%\nห้ามมีความผิดรูปจากการหมุน (Rotation = 0°)"
              },
              "moi": {
                "en": "Direct high-energy impact to knuckle or axial compression on extended MCP joint.",
                "th": "แรงกระแทกโดยตรงพลังงานสูงเข้าที่สันหมัด (Knuckle) หรือแรงกดตามแนวแกนขณะข้อ MCP เหยียด"
              },
              "treatment": {
                "preferred": "conservative",
                "conservative": {
                  "en": "Indicated if non-displaced (<1mm step-off). Immobilize in Intrinsic Plus position (MCP flexed 70-90°, PIP/DIP extended) in gutter splint for 3-4 weeks.",
                  "th": "แนะนำสำหรับรายที่ไม่เคลื่อน (<1 มม.) ใส่เฝือกอ่อน Gutter Splint ในท่า Intrinsic Plus (งอข้อ MCP 70-90 องศา) นาน 3-4 สัปดาห์"
                },
                "operative": {
                  "en": "Indicated for articular step-off ≥ 1 mm, >25% joint involvement, or comminution. ORIF using mini-screws or K-wires to restore joint congruity.",
                  "th": "แนะนำเมื่อผิวข้อต่อเหลื่อม ≥ 1 มม., แตกเข้าข้อ > 25% หรือแตกละเอียด ผ่าตัด ORIF ด้วยสกรูจิ๋วหรือ K-wire"
                }
              },
              "illustrationId": "/images/metacarpal_other/head.png",
              "xrayDescription": {
                "en": "Fracture line passing through rounded metacarpal head cartilage. Assess step-off on PA and oblique views.",
                "th": "รอยหักผ่านผิวข้อต่อหัวกระดูกฝ่ามือ วัดระดับความเหลื่อมของผิวข้อต่อในท่า PA และท่าเฉียง"
              }
            },
            {
              "type": "Neck",
              "name": {
                "en": "Metacarpal Neck Fracture (e.g., Boxer's Fracture)",
                "th": "กระดูกส่วนคอหัก (Metacarpal Neck / Boxer's Fracture)"
              },
              "description": {
                "en": "Most common pattern; 5th neck fracture = Boxer's Fracture\nAcceptable Angulation (Apex Dorsal):\n  • Index (2nd) & Middle (3rd): < 10° - 15°\n  • Ring (4th): < 30° - 40°\n  • Little (5th): < 40° - 50°\nAcceptable Shortening: < 2-3 mm (1mm shortening = ~7° extensor lag)\nRotational Deformity: 0° (Zero tolerance - check for scissoring)",
                "th": "รูปแบบที่พบบ่อยที่สุด หักบริเวณคอกระดูกฝ่ามือนิ้วก้อยเรียกว่า Boxer's Fracture\nมุมโก่งงอไปด้านหลังที่ยอมรับได้ (Apex Dorsal Angulation):\n  • นิ้วชี้ (2nd) และ นิ้วกลาง (3rd): < 10° - 15°\n  • นิ้วนาง (4th): < 30° - 40°\n  • นิ้วก้อย (5th): < 40° - 50°\nความยาวที่สั้นลงยอมรับได้: < 2-3 มม. (สั้น 1 มม. ทำให้เหยียดนิ้วได้ไม่สุด ~7°)\nการบิดหมุนผิดรูป: 0° (ห้ามบิดหมุนเด็ดขาด - ต้องตรวจนิ้วซ้อนกันเวลาพับกำมือ)"
              },
              "moi": {
                "en": "Direct axial load onto clenched fist (e.g., punching a hard wall).",
                "th": "แรงกระแทกตามแนวแกนเข้าที่กำปั้นโดยตรง (เช่น การชกกำแพง หรือชกของแข็ง)"
              },
              "treatment": {
                "preferred": "conservative",
                "conservative": {
                  "en": "Indicated if angulation is within limits & zero rotation. Jahss reduction maneuver, then gutter splint in Intrinsic Plus position for 3-4 weeks.",
                  "th": "แนะนำหากมุมโก่งอยู่ในเกณฑ์ที่ยอมรับได้และไม่มีนิ้วบิด ดึงจัดกระดูกด้วยวิธี Jahss maneuver แล้วใส่เฝือกดาม Gutter Splint ในท่า Intrinsic Plus นาน 3-4 สัปดาห์"
                },
                "operative": {
                  "en": "Indicated for angulation >limits (>15° for 2nd/3rd, >50° for 5th), rotational overlap (scissoring), or extensor lag. CRP with K-wires (bouquet) or mini-plate fixation.",
                  "th": "แนะนำเมื่อมุมโก่งเกินเกณฑ์ (>15° นิ้วชี้/กลาง, >50° นิ้วก้อย), มีนิ้วหมุนซ้อนกัน หรือเหยียดนิ้วไม่สุด ผ่าตัดใส่เข็ม K-wire หรือแผ่นดามเหล็กจิ๋ว"
                }
              },
              "illustrationId": "/images/metacarpal_other/neck.png",
              "xrayDescription": {
                "en": "Impacted neck fracture with apex dorsal angulation and volar comminution on lateral view.",
                "th": "รอยหักตอกอัดบริเวณคอกระดูกฝ่ามือ พร้อมมุมโก่งไปด้านหลังมือ (Apex dorsal) ในท่า Lateral"
              }
            },
            {
              "type": "Shaft",
              "name": {
                "en": "Metacarpal Shaft Fracture",
                "th": "กระดูกส่วนแกนหัก (Metacarpal Shaft Fracture)"
              },
              "description": {
                "en": "Fracture across diaphysis (Transverse, Oblique, Spiral, Comminuted)\nAcceptable Angulation (Apex Dorsal):\n  • 2nd & 3rd Shaft: < 10°\n  • 4th & 5th Shaft: < 20°\nAcceptable Shortening: < 3 mm (prevents loss of grip strength)\nRotational Deformity: 0° (Zero tolerance - 1° rotation = 5° crossover)\nMultiple Shaft Fractures: High instability",
                "th": "รอยหักพาดผ่านแกนกระดูก (แบบแนวขวาง, เฉียง, เกลียว หรือแตกละเอียด)\nมุมโก่งงอไปด้านหลังที่ยอมรับได้ (Apex Dorsal Angulation):\n  • แกนนิ้วชี้ (2nd) และ นิ้วกลาง (3rd): < 10°\n  • แกนนิ้วนาง (4th) และ นิ้วก้อย (5th): < 20°\nความยาวที่สั้นลงยอมรับได้: < 3 มม. (ป้องกันแรงกำมือลดลง)\nการบิดหมุนผิดรูป: 0° (ห้ามบิดหมุนเด็ดขาด - หมุน 1° ทำให้นิ้วเกยกัน 5°)\nหากหักหลายแกนพร้อมกัน: มีความไม่มั่นคงสูงมากจากการสูญเสียเอ็นยึดระหว่างกระดูก"
              },
              "moi": {
                "en": "Direct heavy blow to back of hand, crush, or torsional twisting force.",
                "th": "แรงกระแทกโดยตรงที่หลังมือ อุบัติเหตุทับบด หรือแรงบิดหมุนมืออย่างรุนแรง"
              },
              "treatment": {
                "preferred": "conservative",
                "conservative": {
                  "en": "Indicated for isolated, non-displaced shaft fractures with no rotation. Cast or gutter splint in Intrinsic Plus position for 4-6 weeks with weekly X-rays.",
                  "th": "แนะนำสำหรับรอยหักแกนเดียวที่ไม่เคลื่อนและไม่มีนิ้วบิด ใส่เฝือกดามในท่า Intrinsic Plus นาน 4-6 สัปดาห์"
                },
                "operative": {
                  "en": "Indicated for rotational deformity, >3mm shortening, angulation >20°, or multiple shaft fractures. ORIF with mini-locking plates or K-wires.",
                  "th": "แนะนำหากมีนิ้วบิดซ้อน, ขาสั้น >3 มม., มุมโก่ง >20° หรือหักหลายแกนพร้อมกัน ผ่าตัดเปิดยึดด้วยแผ่นเหล็กล็อคจิ๋ว หรือ K-wires"
                }
              },
              "illustrationId": "/images/metacarpal_other/shaft.png",
              "xrayDescription": {
                "en": "Transverse/oblique/spiral fracture traversing diaphysis. Assess overlap and angulation on lateral film.",
                "th": "รอยหักแนวขวาง เฉียง หรือเกลียวพาดผ่านแกนกระดูก ประเมินการเกยกันและความโก่งในท่า Lateral"
              }
            },
            {
              "type": "Base",
              "name": {
                "en": "Metacarpal Base Fracture / Dislocation",
                "th": "กระดูกส่วนฐานหักหรือเคลื่อน (Base Fracture / Reverse Bennett)"
              },
              "description": {
                "en": "Fracture or dislocation at base / CMC joint\n5th Metacarpal Base (Reverse Bennett): Unstable due to ECU tendon pull\nAcceptable Articular Step-off: < 1 mm\nAcceptable Displacement: < 1 mm",
                "th": "กระดูกหักหรือหักร่วมกับข้อหลุดบริเวณฐานกระดูกฝ่ามือ / ข้อต่อ CMC\nฐานกระดูกฝ่ามือนิ้วก้อย (Reverse Bennett Fracture): มีความไม่มั่นคงสูงเนื่องจากถูกเอ็น ECU ดึงรั้งให้เคลื่อนหลุด\nผิวกระดูกขั้นบันไดที่ยอมรับได้: < 1 มม.\nการเคลื่อนหลุดที่ยอมรับได้: < 1 มม."
              },
              "moi": {
                "en": "High-energy axial load to hand border or direct crush to CMC joint.",
                "th": "แรงกดตามแนวแกนพลังงานสูงกระแทกเข้าที่ขอบมือฝั่งนิ้วก้อย/ชี้ หรือแรงทับบดตรงข้อ CMC"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "Indicated only for stable extra-articular non-displaced base fractures (<1mm). Gutter cast for 4-6 weeks with weekly X-rays.",
                  "th": "พิจารณาเฉพาะกรณีหักนอกข้อที่ไม่เคลื่อน (<1 มม.) ใส่เฝือกดาม Gutter cast นาน 4-6 สัปดาห์"
                },
                "operative": {
                  "en": "Indicated for 5th base (Reverse Bennett), CMC step-off ≥1mm, or subluxation. Closed reduction and percutaneous pinning (CRP) or ORIF with mini-screws.",
                  "th": "แนะนำสำหรับ Reverse Bennett (ฐานนิ้วก้อย), รอยหักเข้าข้อ CMC ≥ 1 มม. หรือข้อหลุด ผ่าตัดจัดกระดูกและยึดด้วยเข็ม K-wire หรือสกรูจิ๋ว"
                }
              },
              "illustrationId": "/images/metacarpal_other/base.png",
              "xrayDescription": {
                "en": "Fracture line at metacarpal base with potential dorsal/proximal subluxation at CMC joint line on oblique/lateral views.",
                "th": "รอยหักบริเวณฐานกระดูกฝ่ามือ ร่วมกับการเคลื่อนหลุดไปทางด้านหลังหรือขึ้นด้านบนตรงแนวข้อ CMC ในท่าเฉียงและ Lateral"
              }
            }
          ]
        }
      ]
    }
  ]
};
