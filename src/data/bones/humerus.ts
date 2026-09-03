import type { BoneData } from "../../types";

export const humerusBone: BoneData = {
  "id": "humerus",
  "name": {
    "en": "Humerus",
    "th": "กระดูกต้นแขน (Humerus)"
  },
  "description": {
    "en": "Upper arm bone",
    "th": "กระดูกต้นแขน"
  },
  "pediatric": false,
  "regions": [
    {
      "id": "proximal",
      "name": {
        "en": "Proximal Humerus",
        "th": "ส่วนหัวกระดูกต้นแขน (Proximal)"
      },
      "regionConcept": {
        "physicalExam": [
          {
            "sign": "Axillary Nerve Sensation (Deltoid Badge Patch)",
            "positive": {
              "en": "Hypoesthesia over the lateral deltoid indicates axillary nerve injury (most common nerve injury in proximal humerus fractures/dislocations)",
              "th": "การรับสัมผัสลดลงบริเวณหัวไหล่ด้านนอก (Deltoid patch) บ่งชี้ถึงการบาดเจ็บของเส้นประสาท Axillary (พบได้บ่อยที่สุด)"
            }
          },
          {
            "sign": "Drop Arm Test / Rotator Cuff Screen",
            "positive": {
              "en": "Inability to maintain 90° abduction suggests associated full-thickness supraspinatus tear or tuberosity avulsion",
              "th": "ไม่สามารถค้างแขนในท่ากาง 90 องศาได้ แสดงถึงการฉีกขาดของเอ็น Supraspinatus หรือชิ้นกระดูก Tuberosity กะเทาะหลุด"
            }
          }
        ],
        "acceptableAlignment": [
          {
            "parameter": {
              "en": "Displacement (Neer 1-Part Threshold)",
              "th": "ระยะการเคลื่อนตัว (เกณฑ์ Neer 1-Part)"
            },
            "threshold": "< 1 cm",
            "note": {
              "en": "Displacement <1 cm between fragments defines 1-part non-displaced fracture",
              "th": "ระยะเคลื่อนตัว <1 ซม. ระหว่างชิ้นกระดูกถือเป็น 1-part fracture"
            }
          },
          {
            "parameter": {
              "en": "Angulation",
              "th": "มุมเอียง"
            },
            "threshold": "< 45°",
            "note": {
              "en": "Angulation <45° between head and shaft accepted for conservative care",
              "th": "มุมเอียงระหว่างหัวกระดูกและลำกระดูก <45° สามารถรักษาแบบไม่ผ่าตัดได้"
            }
          },
          {
            "parameter": {
              "en": "Greater Tuberosity Displacement",
              "th": "ระยะเคลื่อนของ Greater Tuberosity"
            },
            "threshold": "< 5 mm",
            "note": {
              "en": "Displacement >5 mm risks subacromial impingement and loss of abduction",
              "th": "ชิ้น GT เคลื่อนตัว >5 มม. เสี่ยงต่อภาวะ subacromial impingement และกางแขนไม่ได้"
            }
          }
        ],
        "redFlags": [
          {
            "en": "Axillary nerve palsy (loss of deltoid motor function and sensory loss over regimental badge patch)",
            "th": "ภาวะอัมพาตของเส้นประสาท Axillary (สูญเสียการทำงานของกล้ามเนื้อ Deltoid และชาบริเวณไหล่ด้านนอก)"
          },
          {
            "en": "Anterior or posterior fracture-dislocation (glenohumeral dislocation with tuberosity/neck fracture) with high risk of head AVN",
            "th": "ภาวะกระดูกหักร่วมกับข้อไหล่หลุดไปด้านหน้าหรือหลัง (เสี่ยงสูงต่อภาวะหัวกระดูกขาดเลือด AVN)"
          }
        ],
        "associatedInjuries": [
          {
            "injury": {
              "en": "Rotator Cuff Tear (Supraspinatus/Infraspinatus)",
              "th": "การฉีกขาดของเอ็นรอบข้อไหล่ (Rotator Cuff)"
            },
            "trigger": {
              "en": "Check in elderly patients with GT displacement",
              "th": "ประเมินในผู้สูงอายุที่มีชิ้น GT เคลื่อนตัว"
            }
          },
          {
            "injury": {
              "en": "Axillary Artery Laceration / Thrombosis",
              "th": "การบาดเจ็บหรืออุดตันของหลอดเลือดแดง Axillary"
            },
            "trigger": {
              "en": "Check distal pulse in severe anterior fracture-dislocation",
              "th": "ตรวจชีพจร distal ในเคสกระดูกหักร่วมกับข้อไหล่หลุดรุนแรง"
            }
          }
        ],
        "clinicalPearls": [
          {
            "en": "Neer 2-part Greater Tuberosity displacement >5 mm is an operative indication because rotator cuff pull prevents reduction and leads to subacromial impingement.",
            "th": "ชิ้นกระดูก Greater Tuberosity เคลื่อนตัว >5 มม. ใน 2-part fracture เป็นข้อบ่งชี้ผ่าตัด เนื่องจากแรงดึงของเอ็น Rotator cuff จะทำให้เกิดภาวะ subacromial impingement"
          },
          {
            "en": "Valgus impacted 4-part fractures have a significantly lower AVN rate (~10-20%) compared to classic 4-part fractures (>80%) because posteromedial periosteal vessels remain intact.",
            "th": "กระดูกหัก 4-part ชนิด Valgus impacted มีอัตรา AVN ต่ำกว่า (~10-20%) ชนิด classic 4-part (>80%) เนื่องจากเส้นเลือดบริเวณเยื่อหุ้มกระดูกด้านหลังยังคงสมบูรณ์"
          },
          {
            "en": "Posterior fracture-dislocation is classically missed; look for a fixed internally rotated arm and perform a Scapular Y or Axillary X-ray view.",
            "th": "กระดูกหักร่วมกับข้อไหล่หลุดไปด้านหลังมักถูกวินิจฉัยพอดพลาดได้ง่าย ให้สังเกตแขนที่ล็อกในท่าบิดเข้าด้านใน และถ่ายเอกซเรย์ท่า Scapular Y หรือ Axillary"
          }
        ]
      },
      "classifications": [
        {
          "system": "Neer",
          "fullName": {
            "en": "Neer Classification",
            "th": "ระบบ Neer Classification"
          },
          "description": {
            "en": "Classification for proximal humerus fractures based on number of displaced parts (displacement >1cm or >45°; GT displacement >5mm)",
            "th": "การจำแนกกระดูกหักบริเวณ proximal humerus ตามจำนวนชิ้นที่เคลื่อน (เคลื่อน >1cm หรือทำมุม >45°; ส่วน Greater Tuberosity เคลื่อน >5mm)"
          },
          "concept": {
            "title": {
              "en": "Neer Classification Clinical Concept",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ Neer Classification"
            },
            "corePrinciple": {
              "en": "Does NOT count the number of fracture lines, but ONLY counts the number of 'displaced parts'. A segment is defined as a 'Part' ONLY if muscle pull causes >1 cm displacement or >45° angulation (GT exception: >5 mm).",
              "th": "ไม่ได้นับตามจำนวนรอยแตก (Fracture lines) แต่นับตาม 'ชิ้นส่วนที่มีการเคลื่อนที่' (Displaced parts) เท่านั้น — ชิ้นกระดูกจะนับเป็น 1 Part ก็ต่อเมื่อถูกแรงกล้ามเนื้อดึงแยกเกิน 1 ซม. หรือเอียงเกิน 45° เท่านั้น (ยกเว้นชิ้น GT เกณฑ์เคลื่อนตัว >5 มม.)"
            },
            "rules": [
              {
                "en": "Displacement > 1 cm between fracture segments",
                "th": "ระยะเคลื่อนตัว > 1 ซม. ระหว่างชิ้นกระดูกหัก"
              },
              {
                "en": "Angulation > 45° between humeral head and shaft",
                "th": "มุมเอียง > 45° ระหว่างหัวกระดูกและลำกระดูก"
              },
              {
                "en": "Greater Tuberosity (GT) displacement > 0.5 cm (5 mm)",
                "th": "ระยะเคลื่อนของ Greater Tuberosity (GT) > 0.5 ซม. (5 มม.)"
              }
            ],
            "clinicalSignificance": [
              {
                "en": "1-Part (~80% of cases): Minimal displacement — Non-operative treatment with Arm Sling 1-2 wks & early passive ROM (Good outcome >90%).",
                "th": "1-Part (พบ ~80% ของเคสทั้งหมด): ไม่เคลื่อนหรือเคลื่อนน้อย — รักษาแบบไม่ผ่าตัด ใส่ Arm Sling 1-2 สัปดาห์ แล้วเริ่มทำกายภาพ Passive ROM (ผลดี >90%)"
              },
              {
                "en": "2-Part (GT >5 mm): Operative indication (ORIF / Suture anchors) to prevent subacromial impingement & loss of abduction.",
                "th": "2-Part (ชิ้น GT เคลื่อน >5 มม.): มีข้อบ่งชี้ผ่าตัดดามกระดูก (ORIF / Suture anchor) เพื่อป้องกันการขัดชนใต้เบ้าและกางแขนไม่ได้"
              },
              {
                "en": "3 & 4-Part Fractures: High surgical rate. Young active -> Locking plate ORIF; Elderly (>65 yo) -> Reverse Total Shoulder Arthroplasty (RSA).",
                "th": "3 & 4-Part Fractures: อัตราผ่าตัดสูง อายูน้อย -> ผ่าตัดดาม Locking Plate; ผู้สูงอายุ (>65 ปี) -> ผ่าตัดเปลี่ยนข้อไหล่เทียม (Reverse Shoulder Arthroplasty)"
              },
              {
                "en": "AVN Risk: Classic 4-part fractures have high AVN risk (>80-90%) due to ascending humeral artery disruption; Valgus impacted 4-part has lower AVN risk (~15%).",
                "th": "ความเสี่ยงหัวกระดูกตาย (AVN): ชนิด Classic 4-part เสี่ยง AVN สูง >80-90% จากหลอดเลือดเลี้ยงหัวกระดูกขาด; ชนิด Valgus Impacted 4-part เสี่ยงต่ำกว่า (~15%)"
              }
            ]
          },
          "investigations": [
            {
              "name": "True AP Shoulder View (Grashey View)",
              "details": {
                "en": "AP view perpendicular to the glenoid surface. Assesses glenohumeral joint space and measures greater tuberosity displacement.",
                "th": "ภาพเอกซเรย์ท่า AP ตั้งฉากกับเบ้า Glenoid ใช้ประเมินช่องข้อไหล่และวัดระยะการเคลื่อนของ Greater Tuberosity"
              },
              "imageUrl": "/images/investigations/shoulder/grashey_ap_view.jpg"
            },
            {
              "name": "Scapular Y View",
              "details": {
                "en": "Transscapular lateral view. Evaluates anterior or posterior dislocation of the humeral head relative to the glenoid.",
                "th": "ภาพเอกซเรย์ท่าด้านข้าง Y-view ของกระดูกสะบัก เพื่อประเมินการเคลื่อนหลุดไปด้านหน้าหรือด้านหลังของหัวกระดูกต้นแขน"
              },
              "imageUrl": "/images/investigations/shoulder/scapular_y_view.jpg"
            },
            {
              "name": "Axillary Lateral View",
              "details": {
                "en": "Axillary view of the shoulder. Essential to assess glenohumeral alignment and greater/lesser tuberosity fracture displacement.",
                "th": "ภาพเอกซเรย์ท่ารักแร้ (Axillary) จำเป็นสำหรับการดูการเรียงตัวของข้อไหล่และการเคลื่อนของชิ้นกระดูก Greater/Lesser Tuberosity"
              },
              "imageUrl": "/images/investigations/shoulder/axillary_lateral_view.jpg"
            }
          ],
          "types": [
            {
              "type": "1-Part",
              "name": {
                "en": "1-Part Fracture (Minimal Displacement)",
                "th": "1-Part Fracture (กระดูกไม่เคลื่อนหรือเคลื่อนน้อย)"
              },
              "description": {
                "en": "No displaced parts (all parts <1cm displacement and <45° angulation)\nGreater tuberosity displacement < 5mm is considered non-displaced",
                "th": "ไม่มีชิ้นส่วนที่เคลื่อน (ทุกชิ้นเคลื่อน <1cm และทำมุม <45°)\nกรณี Greater tuberosity เคลื่อน < 5 มม. ถือว่าไม่มีการเคลื่อนตัว"
              },
              "moi": {
                "en": "Low-energy fall on outstretched hand in elderly.",
                "th": "ล้มเอามือยันพื้นในผู้สูงอายุ"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Minimal displacement (<1 cm and <45° angulation, GT <5 mm); stable impacted bone fragments; conservative management with arm sling immobilization and early passive rehabilitation yields >90% excellent outcomes.",
                  "th": "กระดูกไม่เคลื่อนหรือเคลื่อนน้อย (<1 ซม. และทำมุม <45°, ชิ้น GT <5 มม.) รอยหักมั่นคง รักษาแบบไม่ผ่าตัดด้วยสายคล้องแขน (Arm Sling) ร่วมกับการทำกายภาพขยับข้อไหล่ระยะแรกให้ผลการรักษาดีเยี่ยม >90%"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• All Neer 1-part fractures (displacement < 1 cm, angulation < 45°, GT displacement < 5 mm)\n• Stable impacted surgical neck or tuberosity fractures",
                    "th": "• กระดูกหัก Neer 1-part ทุกราย (เคลื่อน <1 ซม., เอียง <45°, ชิ้น GT เคลื่อน <5 มม.)\n• รอยหักแบบกดอัดแน่นที่มั่นคง"
                  },
                  "method": {
                    "en": "• Arm sling or shoulder immobilizer for 1–2 weeks",
                    "th": "• ใส่สายคล้องแขน (Arm Sling) หรืออุปกรณ์พยุงข้อไหล่ 1–2 สัปดาห์แรก"
                  },
                  "rehabilitation": {
                    "en": "• Start gentle Codman pendulum exercises and passive forward flexion at 10–14 days; advance to active-assisted ROM at 4–6 weeks, strengthening at 8–10 weeks",
                    "th": "• เริ่มฝึกแกว่งแขนเบาๆ (Codman pendulum) และช่วยยกแขน (Passive ROM) ที่ 10–14 วัน เพิ่มการขยับแขนเองที่ 4–6 สัปดาห์ และเริ่มฝึกเพิ่มกำลังกล้ามเนื้อที่ 8–10 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Prolonged shoulder immobilization >3 weeks causing severe adhesive capsulitis and shoulder stiffness",
                    "th": "• การใส่สายคล้องแขนนานเกิน 3 สัปดาห์ จะทำให้ข้อไหล่ติดแข็งรุนแรง (Adhesive capsulitis / Frozen shoulder)"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Secondary displacement into 2-part or greater displacement during serial radiograph follow-up",
                    "th": "• กระดูกเคลื่อนหลุดกลายเป็น 2-part จากการติดตามภาพเอกซเรย์"
                  },
                  "method": {
                    "en": "• Closed or open reduction and internal fixation (PHILOS locking plate)",
                    "th": "• ผ่าตัดจัดกระดูกและดามแผ่นเหล็กล็อค PHILOS Locking Plate"
                  },
                  "rehabilitation": {
                    "en": "• Early passive ROM from week 2",
                    "th": "• เริ่มทำ Passive ROM ตั้งแต่สัปดาห์ที่ 2"
                  },
                  "pitfalls": {
                    "en": "• Overtreating minimally displaced fractures with surgery",
                    "th": "• การผ่าตัดเกินจำเป็นในกระดูกหักที่ไม่เคลื่อน"
                  }
                }
              },
              "illustrationId": "/images/neer_humerus/neer_1part.png",
              "xrayDescription": {
                "en": "Fracture lines visible but minimal displacement (<1cm / <45°, GT <5mm)",
                "th": "เห็นรอยหักแต่แทบไม่มีการเคลื่อน (เคลื่อน <1cm / <45° และ GT <5mm)"
              }
            },
            {
              "type": "2-Part (GT)",
              "name": {
                "en": "2-Part Greater Tuberosity Fracture",
                "th": "2-Part Greater Tuberosity Fracture (หักเคลื่อนเฉพาะชิ้น GT)"
              },
              "description": {
                "en": "Greater Tuberosity displaced >5mm\nFragment pulled superiorly and posteriorly by supraspinatus and infraspinatus tendons\nCauses subacromial impingement and loss of abduction/external rotation",
                "th": "ชิ้นกระดูก Greater Tuberosity เคลื่อนตัว >5 มม.\nถูกกล้ามเนื้อ Supraspinatus/Infraspinatus ดึงรั้งขึ้นบนและไปด้านหลัง\nส่งผลให้ขัดชนใต้เบ้า Acromion และสูญเสียการกางและหมุนแขน"
              },
              "moi": {
                "en": "Fall on shoulder or shoulder dislocation.",
                "th": "ล้มกระแทกไหล่ หรือข้อไหล่หลุด"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Greater tuberosity displaced >5 mm due to supraspinatus/infraspinatus tendon pull; causes subacromial impingement and loss of abduction; surgical fixation (suture anchor / screw / low-profile plate) is recommended.",
                  "th": "ชิ้น GT ถูกแรงดึงกล้ามเนื้อดึงเคลื่อน >5 มม. เสี่ยงต่อการขัดชนใต้เบ้า (Impingement) และกางแขนไม่ได้ แนะนำผ่าตัดยึดตรึง (Suture Anchor / Screw / Plate)"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Truly non-displaced or minimally displaced GT fracture (< 3–5 mm displacement in sedentary patient)",
                    "th": "• ชิ้น GT ไม่เคลื่อนหรือเคลื่อนน้อยมาก (< 3–5 มม. ในผู้ป่วยสูงอายุใช้งานน้อย)"
                  },
                  "method": {
                    "en": "• Arm sling for 3–4 weeks",
                    "th": "• ใส่สายคล้องแขน 3–4 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Passive forward flexion and external rotation at 2 weeks; avoid active abduction until 6 weeks",
                    "th": "• เริ่มฝึกช่วยยกแขนและหมุนออกที่ 2 สัปดาห์ ห้ามกางแขนเองจนกว่าจะครบ 6 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Secondary retraction of GT under the acromion during muscle spasm",
                    "th": "• ชิ้น GT อาจถูกดึงรั้งหลุดขึ้นไปใต้เบ้า Acromion ภายหลัง"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• GT displacement > 5 mm in active patients (> 3 mm in overhead athletes)\n• Associated shoulder dislocation with unreduced GT fragment",
                    "th": "• ชิ้น GT เคลื่อนตัว > 5 มม. ในผู้ป่วยทั่วไป (> 3 มม. ในนักกีฬาที่ใช้แขนเหนือศีรษะ)\n• ข้อไหล่หลุดร่วมกับชิ้น GT ไม่เข้าที่หลังดึงข้อ"
                  },
                  "method": {
                    "en": "• Open or arthroscopic reduction: Heavy non-absorbable transosseous sutures, suture anchor construct, cannulated 4.0 mm cancellous screws with washers, or low-profile GT hook/locking plate",
                    "th": "• ผ่าตัดเปิดหรือส่องกล้องจัดกระดูก: เย็บผูกด้วยไหมเบอร์ใหญ่, ยึดด้วย Suture Anchors, สกรู Cannulated Screws 4.0 มม. พร้อมแหวนรอง หรือแผ่นเหล็ก Low-profile GT Plate"
                  },
                  "rehabilitation": {
                    "en": "• Sling for 4–6 weeks; passive forward elevation on post-op day 1; active abduction and rotator cuff strengthening initiated at 6 weeks",
                    "th": "• ใส่สายคล้องแขน 4–6 สัปดาห์ เริ่มฝึกช่วยยกแขนตั้งแต่วันแรก และเริ่มกางแขนเองพร้อมฝึกเพิ่มกำลังกล้ามเนื้อที่ 6 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Hardware impingement against acromion if plate or screw heads are prominent",
                    "th": "• หัวสกรูหรือแผ่นเหล็กหนาเกินไปจนขัดชนใต้เบ้า Acromion"
                  }
                }
              },
              "illustrationId": "/images/neer_humerus/neer_2part_gt.png",
              "xrayDescription": {
                "en": "Greater tuberosity displaced >5mm superiorly or posteriorly.",
                "th": "ชิ้นส่วน Greater tuberosity เคลื่อนยกขึ้นบนหรือไปด้านหลัง >5 มม."
              }
            },
            {
              "type": "2-Part (SN)",
              "name": {
                "en": "2-Part Surgical Neck Fracture",
                "th": "2-Part Surgical Neck Fracture (หักเคลื่อนที่คอกระดูก)"
              },
              "description": {
                "en": "Surgical neck fracture with displacement >1cm or angulation >45°\nShaft displaced medially by Pectoralis Major muscle pull\nHead fragment remains in neutral alignment attached to intact tuberosities",
                "th": "รอยหักบริเวณคอกระดูก (Surgical neck) เคลื่อนตัว >1 ซม. หรือทำมุม >45 องศา\nลำกระดูกส่วนล่างถูกกล้ามเนื้อ Pectoralis Major ดึงเข้าด้านใน\nส่วนหัวกระดูกยังอยู่ตรงกลางเนื่องจากชิ้น Tuberosities ยังไม่ขาด"
              },
              "moi": {
                "en": "Direct fall onto point of shoulder or outstretched hand.",
                "th": "การล้มกระแทกปลายไหล่หรือยันมือ"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Surgical neck fracture displaced >1 cm or angulated >45°; head in neutral attached to tuberosities; stable anatomical reduction and locked plating (PHILOS) or intramedullary nail in active individuals; non-operative sling for low-demand/frail patients.",
                  "th": "คอกระดูกหักเคลื่อน >1 ซม. หรือเอียง >45° โดยหัวกระดูกยังอยู่ตรงกลาง แนะนำผ่าตัดดามแผ่นเหล็กล็อค PHILOS หรือใส่แกนเหล็ก IM Nail ในผู้ป่วยวัยทำงาน หรือใส่สายคล้องแขนในผู้สูงอายุติดเตียง"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Impacted valgus or varus fractures meeting acceptable alignment (<45° angulation, <1 cm displacement)\n• Medically frail, elderly, or low-demand non-ambulatory patients",
                    "th": "• กระดูกหักแบบกดอัดแน่นที่มุมเอียงอยู่ในเกณฑ์ (<45°, เคลื่อน <1 ซม.)\n• ผู้ป่วยสูงอายุที่มีโรคร่วมรุนแรงหรือติดเตียง"
                  },
                  "method": {
                    "en": "• Collar and cuff / arm sling for 3–4 weeks",
                    "th": "• ใส่สายคล้องแขน (Arm Sling) 3–4 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Gentle pendulum exercises starting at 2 weeks; progressive active-assisted ROM at 4–6 weeks",
                    "th": "• เริ่มฝึกแกว่งแขนเบาๆ ที่ 2 สัปดาห์ เริ่มฝึกช่วยยกแขนที่ 4–6 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Varus collapse and painful nonunion / malunion",
                    "th": "• กระดูกทรุดเอียงเข้าด้านใน (Varus collapse) และกระดูกไม่ติด"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Displaced surgical neck fracture (>1 cm displacement or >45° angulation)\n• Unstable translational displacement with pectoralis major medial deforming pull\n• Active functional patients",
                    "th": "• คอกระดูกหักเคลื่อนตัว > 1 ซม. หรือทำมุม > 45 องศา\n• กระดูกเลื่อนหลุดไม่มั่นคงจากแรงดึงของกล้ามเนื้อ Pectoralis major\n• ผู้ป่วยที่มีการใช้งานแขนเป็นประจำ"
                  },
                  "method": {
                    "en": "• Deltopectoral or anterolateral deltoid-splitting approach: Proximal humeral locking plate (PHILOS plate) with calcar screws for medial column support OR locked proximal humeral intramedullary nail",
                    "th": "• ผ่าตัดเข้าทาง Deltopectoral หรือ Deltoid-splitting: ดามแผ่นเหล็กล็อค PHILOS Locking Plate พร้อมใส่ Calcar Screws ค้ำเสากระดูกด้านใน หรือใส่แกนดามในโพรงกระดูก Proximal Humeral IM Nail"
                  },
                  "rehabilitation": {
                    "en": "• Passive forward flexion and pendulum exercises on post-op day 2; active-assisted ROM at 4 weeks; full active strengthening at 8–12 weeks",
                    "th": "• เริ่มฝึกช่วยยกแขนและแกว่งแขนวันที่ 2 หลังผ่าตัด ฝึกช่วยขยับแขนที่ 4 สัปดาห์ และฝึกเพิ่มกำลังกล้ามเนื้อที่ 8–12 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Missing medial calcar comminution leading to screw cut-out and secondary varus collapse",
                    "th": "• หากไม่ใส่ Calcar screws ค้ำเสาด้านในที่แตกละเอียด จะทำให้สกรูทะลุหัวกระดูกและกระดูกทรุดเอียง Varus"
                  }
                }
              },
              "illustrationId": "/images/neer_humerus/neer_2part_sn.png",
              "xrayDescription": {
                "en": "Shaft displaced medially relative to head fragment >1cm or >45° angulation.",
                "th": "ลำกระดูกเคลื่อนแยกจากหัวกระดูก >1 ซม. หรือทำมุม >45 องศา"
              }
            },
            {
              "type": "3-Part (GT)",
              "name": {
                "en": "3-Part GT & Surgical Neck Fracture",
                "th": "3-Part Greater Tuberosity & Surgical Neck Fracture"
              },
              "description": {
                "en": "Displaced Surgical Neck fracture PLUS displaced Greater Tuberosity\nHumeral head fragment is rotated medially (internal rotation) by intact Subscapularis tendon\nSignificant soft tissue disruption with moderate risk of AVN (~15-30%)",
                "th": "กระดูกหักเคลื่อน 2 จุด: คอกระดูก (Surgical neck) + Greater Tuberosity\nหัวกระดูกหมุนหมุนเข้าด้านใน (Internal rotation) จากแรงดึงของเอ็น Subscapularis\nเสี่ยงต่อภาวะหัวกระดูกขาดเลือด (AVN ~15-30%)"
              },
              "moi": {
                "en": "High-energy trauma or severe fall in osteoporotic bone.",
                "th": "อุบัติเหตุแรงกระแทกสูง หรือล้มรุนแรงในผู้ป่วยกระดูกพรุน"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Displaced surgical neck + displaced GT; subscapularis pulls head into internal rotation; moderate AVN risk (~15–30%); anatomical ORIF with locked plate and rotator cuff tuberosity suture cerclage in active patients; Reverse TSA in osteoporotic elderly.",
                  "th": "คอกระดูกหักเคลื่อนร่วมกับชิ้น GT เคลื่อน หัวกระดูกหมุนบิดเข้าด้านใน เสี่ยง AVN 15–30% ผ่าตัด ORIF ดามแผ่นเหล็กล็อค PHILOS ร่วมกับเย็บผูกเอ็นรอบข้อไหล่ (Suture cerclage) ในผู้ป่วยวัยทำงาน หรือผ่าตัดเปลี่ยนข้อไหล่เทียม (Reverse TSA) ในผู้สูงอายุ"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly reserved for non-surgical elderly patients with prohibitive operative risks",
                    "th": "• สงวนไว้เฉพาะผู้ป่วยสูงอายุที่มีข้อห้ามผ่าตัดขั้นรุนแรง"
                  },
                  "method": {
                    "en": "• Sling immobilization x 4 weeks",
                    "th": "• ใส่สายคล้องแขน 4 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Passive pendulum exercises as tolerated",
                    "th": "• ฝึกแกว่งแขนเบาๆ เท่าที่ทนได้"
                  },
                  "pitfalls": {
                    "en": "• Severe malunion, severe loss of external rotation and abduction",
                    "th": "• กระดูกติดผิดรูปรุนแรงและสูญเสียการกางและหมุนแขนถาวร"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All active patients with 3-part GT fractures\n• Failure of closed reduction or significant fragment retraction",
                    "th": "• กระดูกหัก 3-part GT ในผู้ป่วยที่มีการใช้งานแขนทุกราย\n• ชิ้นกระดูกเคลื่อนตัวมากหรือดึงจัดไม่เข้าที่"
                  },
                  "method": {
                    "en": "• ORIF via Deltopectoral approach: Proximal humeral locking plate (PHILOS) + heavy suture cerclage (Ethibond / FiberWire) through rotator cuff tendons to anchor the tuberosity to the plate\n• Reverse Total Shoulder Arthroplasty (RTSA) for elderly patients (>70 years) with poor bone stock",
                    "th": "• ผ่าตัด ORIF ผ่าน Deltopectoral: ดามแผ่นเหล็กล็อค PHILOS + เย็บผูกเอ็น Rotator cuff ด้วยไหมเบอร์ใหญ่ (FiberWire) ยึดชิ้น Tuberosity เข้ากับแผ่นเหล็ก\n• ผ่าตัดเปลี่ยนข้อไหล่เทียม Reverse TSA ในผู้สูงอายุ (>70 ปี) ที่กระดูกพรุนรุนแรง"
                  },
                  "rehabilitation": {
                    "en": "• Passive forward flexion and ER at 2 weeks; active-assisted ROM at 6 weeks; active strengthening at 10–12 weeks",
                    "th": "• เริ่มฝึกช่วยยกแขนและหมุนออกที่ 2 สัปดาห์ เริ่มฝึกช่วยขยับแขนที่ 6 สัปดาห์ และเพิ่มกำลังกล้ามเนื้อที่ 10–12 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Tuberosity escape and nonunion if heavy tendon suture cerclage is omitted\n• Head devascularization during excessive surgical dissection",
                    "th": "• ชิ้น Tuberosity เลื่อนหลุดหากไม่เย็บผูกเอ็นรอบข้อไหล่\n• หัวกระดูกขาดเลือดหากเลาะเนื้อเยื่อรอบคอกระดูกมากเกินไป"
                  }
                }
              },
              "illustrationId": "/images/neer_humerus/neer_3part_gt.png",
              "xrayDescription": {
                "en": "Two distinct displaced fragments (GT and shaft) separated from humeral head.",
                "th": "ชิ้นกระดูก GT และ shaft เคลื่อนหลุดออกจากหัวกระดูก"
              }
            },
            {
              "type": "3-Part (LT)",
              "name": {
                "en": "3-Part LT & Surgical Neck Fracture (Rare)",
                "th": "3-Part Lesser Tuberosity & Surgical Neck Fracture (พบได้น้อย)"
              },
              "description": {
                "en": "Displaced Surgical Neck fracture PLUS displaced Lesser Tuberosity (Rare)\nHumeral head fragment rotated externally by intact posterior rotator cuff (Infraspinatus/Teres Minor)\nAssociated with posterior dislocation or violent contraction",
                "th": "กระดูกหักเคลื่อน 2 จุด: คอกระดูก (Surgical neck) + Lesser Tuberosity (พบได้น้อย)\nหัวกระดูกถูกดึงหมุนออกด้านนอก (External rotation) จากเอ็นหลังข้อไหล่\nมักสัมพันธ์กับภาวะข้อไหล่หลุดไปด้านหลัง"
              },
              "moi": {
                "en": "Seizure, electrocution, or severe violent posterior dislocation.",
                "th": "การชัก, ไฟฟ้าช็อต หรือข้อไหล่หลุดไปด้านหลังรุนแรง"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Displaced surgical neck + displaced LT (rare; associated with posterior dislocation); intact posterior cuff rotates head externally; ORIF with locked plate and lesser tuberosity suture repair.",
                  "th": "คอกระดูกหักเคลื่อนร่วมกับชิ้น LT หลุด (มักพบร่วมกับข้อไหล่หลุดไปด้านหลัง) หัวกระดูกหมุนบิดออกด้านนอก ผ่าตัด ORIF ดามแผ่นเหล็กล็อค PHILOS ร่วมกับเย็บซ่อมเอ็น Subscapularis/LT"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Non-ambulatory patients with extreme medical comorbidities",
                    "th": "• ผู้ป่วยติดเตียงที่มีโรคร่วมรุนแรง"
                  },
                  "method": {
                    "en": "• Sling immobilization",
                    "th": "• ใส่สายคล้องแขน"
                  },
                  "rehabilitation": {
                    "en": "• Passive motion",
                    "th": "• ขยับแขนเบาๆ"
                  },
                  "pitfalls": {
                    "en": "• Loss of internal rotation and chronic anterior instability",
                    "th": "• สูญเสียการหมุนแขนเข้าด้านในและข้อไหล่หลุดหลวมเรื้อรัง"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All active patients with 3-part LT fractures\n• Associated locked posterior shoulder dislocation",
                    "th": "• กระดูกหัก 3-part LT ในผู้ป่วยทั่วไปทุกราย\n• พบร่วมกับข้อไหล่หลุดล็อกไปด้านหลัง"
                  },
                  "method": {
                    "en": "• Deltopectoral approach: Reduce posterior dislocation, reduce head, fix with locking plate (PHILOS) + transosseous suture repair of subscapularis/LT fragment",
                    "th": "• ผ่าตัดเข้าทาง Deltopectoral: ดึงข้อไหล่ที่หลุดไปด้านหลังเข้าที่ จัดกระดูกและดามแผ่นเหล็กล็อค PHILOS + เย็บซ่อมชิ้น LT และเอ็น Subscapularis"
                  },
                  "rehabilitation": {
                    "en": "• Passive external rotation restricted to neutral for 4 weeks to protect subscapularis repair, then progressive active ROM",
                    "th": "• จำกัดการหมุนแขนออกด้านนอกไม่เกินแนวตรง 4 สัปดาห์แรกเพื่อป้องกันเอ็น Subscapularis ฉีกซ้ำ แล้วเริ่มฝึกขยับแขน"
                  },
                  "pitfalls": {
                    "en": "• Overtightening subscapularis tendon causing severe internal rotation contracture",
                    "th": "• เย็บดึงเอ็น Subscapularis ตึงเกินไปจนหมุนแขนออกไม่ได้"
                  }
                }
              },
              "illustrationId": "/images/neer_humerus/neer_3part_lt.png",
              "xrayDescription": {
                "en": "Lesser tuberosity and shaft displaced, head externally rotated.",
                "th": "ชิ้นส่วน LT และ shaft เคลื่อนหลุด หัวกระดูกหมุนบิดออกด้านนอก"
              }
            },
            {
              "type": "4-Part Classic",
              "name": {
                "en": "4-Part Classic Fracture",
                "th": "4-Part Classic Fracture (หักเคลื่อนแยก 4 ชิ้นสมบูรณ์)"
              },
              "description": {
                "en": "All four parts (Humeral Head, Greater Tuberosity, Lesser Tuberosity, Shaft) displaced\nHumeral head completely devoid of soft tissue attachments and displaced out of glenoid\nHigh risk of Avascular Necrosis (AVN >80-90%)",
                "th": "ชิ้นส่วนทั้ง 4 ชิ้น (หัวกระดูก, GT, LT, ลำกระดูก) เคลื่อนแยกออกจากกันทั้งหมด\nหัวกระดูกขาดหลอดเลือดเลี้ยงอย่างสมบูรณ์\nเสี่ยงต่อภาวะหัวกระดูกขาดเลือดตาย (AVN >80-90%)"
              },
              "moi": {
                "en": "Severe high-energy trauma or violent fall in elderly.",
                "th": "อุบัติเหตุรุนแรงพลังงานสูง หรือล้มกระแทกรุนแรง"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "All 4 parts displaced; humeral head completely detached from vascular supply; high AVN rate (>80–90%); Reverse Total Shoulder Arthroplasty (RTSA) is gold standard in elderly (>65–70 y/o); joint-preserving ORIF with locking plate + bone graft reserved for young active patients.",
                  "th": "กระดูกหักเคลื่อนแยก 4 ชิ้นสมบูรณ์ หัวกระดูกขาดเลือดเลี้ยง เสี่ยง AVN สูง >80–90% การผ่าตัดเปลี่ยนข้อไหล่เทียม Reverse TSA เป็นมาตรฐานหลักในผู้สูงอายุ (>65–70 ปี) ส่วนในผู้ป่วยอายุน้อยควรผ่าตัด ORIF ดามแผ่นเหล็กล็อค PHILOS ร่วมกับปลูกกระดูก Bone graft"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Non-ambulatory, bedbound, or medically prohibitive elderly patients",
                    "th": "• ผู้ป่วยสูงอายุติดเตียง หรือมีโรคร่วมรุนแรงที่ไม่สามารถดมยาสลบได้"
                  },
                  "method": {
                    "en": "• Arm sling for comfort only",
                    "th": "• ใส่สายคล้องแขนเพื่อบรรเทาอาการปวดเท่านั้น"
                  },
                  "rehabilitation": {
                    "en": "• Passive pain-free pendulum exercises",
                    "th": "• ขยับแขนเบาๆ เท่าที่ไม่ปวด"
                  },
                  "pitfalls": {
                    "en": "• Painful nonunion, avascular necrosis with head collapse, severe permanent functional disability",
                    "th": "• หัวกระดูกขาดเลือดทรุดตัว กระดูกไม่ติด ปวดเรื้อรัง และสูญเสียการทำงานของแขนถาวร"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All functional patients with 4-part classic fractures",
                    "th": "• กระดูกหัก 4-part classic ในผู้ป่วยที่ช่วยเหลือตัวเองได้ทุกราย"
                  },
                  "method": {
                    "en": "• Elderly / Osteoporotic (>65–70 yrs): Reverse Total Shoulder Arthroplasty (RTSA) with anatomical tuberosity repair\n• Young active (<60–65 yrs): Joint preservation ORIF with PHILOS locking plate, medial calcar support screws, and structural cancellous autograft/allograft packing",
                    "th": "• ผู้สูงอายุ/กระดูกพรุน (>65–70 ปี): ผ่าตัดเปลี่ยนข้อไหล่เทียมแบบกลับด้าน (Reverse TSA) ร่วมกับเย็บตรึงชิ้น Tuberosity\n• ผู้ป่วยอายุน้อย (<60–65 ปี): ผ่าตัดรักษาหัวกระดูกเดิม (ORIF) ดามแผ่นเหล็กล็อค PHILOS ใส่ Calcar screws และปลูกกระดูก Bone graft เสริมใต้หัวกระดูก"
                  },
                  "rehabilitation": {
                    "en": "• For RTSA: Early active-assisted forward elevation at 2 weeks; sling for 4–6 weeks\n• For ORIF: Protected passive ROM x 6 weeks; strict radiographic surveillance for AVN/collapse",
                    "th": "• กรณี Reverse TSA: เริ่มฝึกช่วยยกแขนที่ 2 สัปดาห์ ใส่สายคล้องแขน 4–6 สัปดาห์\n• กรณี ORIF: ทำ Passive ROM อย่างระมัดระวัง 6 สัปดาห์แรก และติดตามภาพเอกซเรย์เฝ้าระวัง AVN"
                  },
                  "pitfalls": {
                    "en": "• Performing hemiarthroplasty in elderly with tuberosity resorption leading to superior migration and pseudoparalysis (RTSA preferred)",
                    "th": "• การผ่าตัดเปลี่ยนหัวกระดูกเทียม Hemiarthroplasty ในผู้สูงอายุ ชิ้น Tuberosity มักไม่ติดและละลาย ทำให้กางแขนไม่ได้ (แนะนำ Reverse TSA เป็นหลัก)"
                  }
                }
              },
              "illustrationId": "/images/neer_humerus/neer_4part_classic.png",
              "xrayDescription": {
                "en": "All 4 parts displaced, head floating detached from tuberosities and shaft.",
                "th": "ชิ้นกระดูก 4 ชิ้นแยกออกจากกันอย่างสิ้นเชิง หัวกระดูกลอยหลุดจากเบ้า"
              }
            },
            {
              "type": "4-Part Valgus",
              "name": {
                "en": "4-Part Valgus Impacted Fracture",
                "th": "4-Part Valgus Impacted Fracture (หัก 4 ชิ้นแบบหัวกดอัดเข้าลำกระดูก)"
              },
              "description": {
                "en": "Humeral head driven down (impacted) in valgus alignment onto the shaft\nTuberosities splayed laterally but posteromedial periosteal sleeve remains INTACT\nLower risk of AVN (~10-20%) compared to classic 4-part due to intact posteromedial vessels",
                "th": "หัวกระดูกถูกกดอัดลงบนลำกระดูกในแนว Valgus (เอียงออก)\nชิ้น GT และ LT อ้าแยกออกด้านข้าง แต่เยื่อหุ้มกระดูกด้านหลังยังไม่ฉีกขาดทั้งหมด\nโอกาสเกิด AVN ต่ำกว่า 4-Part Classic อย่างมาก (~10-20%) เนื่องจากยังมีเลือดเลี้ยง"
              },
              "moi": {
                "en": "Fall on extended arm driving head into shaft.",
                "th": "ล้มกระแทกขณะแขนเหยียดกดอัดหัวกระดูกเข้าหาลำกระดูก"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Humeral head driven down in valgus into shaft; tuberosities splayed but posteromedial periosteum intact; lower AVN risk (~10–20%); joint-preserving ORIF with gentle head elevation, subchondral bone graft, and locking plate is the treatment of choice.",
                  "th": "หัวกระดูกถูกกดอัดลงบนแกนกระดูกในแนว Valgus เยื่อหุ้มกระดูกด้านหลังยังไม่ขาด อัตรา AVN ต่ำกว่า (~10–20%) แนะนำผ่าตัด ORIF งัดยกหัวกระดูกขึ้น ปลูกกระดูก Bone graft และดามแผ่นเหล็กล็อค PHILOS"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Low-demand elderly patients with minimally displaced tuberosities (<5 mm) and intact medial hinge",
                    "th": "• ผู้สูงอายุใช้งานน้อยที่ชิ้น Tuberosity เคลื่อน <5 มม. และกระดูกค้ำด้านในยังต่อกันอยู่"
                  },
                  "method": {
                    "en": "• Arm sling for 3–4 weeks",
                    "th": "• ใส่สายคล้องแขน 3–4 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Progressive passive ROM from week 2",
                    "th": "• เริ่มฝึกช่วยขยับแขนตั้งแต่สัปดาห์ที่ 2"
                  },
                  "pitfalls": {
                    "en": "• Loss of reduction into severe varus",
                    "th": "• กระดูกเลื่อนหลุดทรุดตัวกลายเป็น Varus"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Displaced 4-part valgus impacted fractures in active patients\n• Tuberosity displacement > 5 mm",
                    "th": "• กระดูกหัก 4-part valgus impacted ในผู้ป่วยวัยทำงาน\n• ชิ้น Tuberosity เคลื่อนตัว > 5 มม."
                  },
                  "method": {
                    "en": "• Joint-preserving ORIF: Deltopectoral approach, gentle elevation of impacted articular head fragment with bone tamp, pack subchondral metaphyseal void with allograft/calcium phosphate, reduce tuberosities and fix with PHILOS locking plate + calcar screws + cuff suture cerclage",
                    "th": "• ผ่าตัดเปิดเก็บรักษาหัวกระดูกเดิม (ORIF): ผ่าตัดเข้าทาง Deltopectoral งัดยกหัวกระดูกที่ยุบขึ้นมาอย่างนุ่มนวล ปลูกกระดูกทดแทนโพรงใต้หัวกระดูก (Bone graft) จัดชิ้น Tuberosity เข้าที่ และดามแผ่นเหล็กล็อค PHILOS พร้อม Calcar screws และเย็บผูกเอ็นรอบข้อไหล่"
                  },
                  "rehabilitation": {
                    "en": "• Passive ROM at 2 weeks; active-assisted at 6 weeks; full active strengthening at 10–12 weeks",
                    "th": "• ทำ Passive ROM ที่ 2 สัปดาห์ เริ่มฝึกช่วยขยับแขนที่ 6 สัปดาห์ และเพิ่มกำลังกล้ามเนื้อที่ 10–12 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Over-aggressive disimpaction tearing the intact posteromedial periosteal hinge and precipitating AVN",
                    "th": "• การงัดยกหัวกระดูกรุนแรงเกินไปจนฉีกขาดเยื่อหุ้มกระดูกด้านหลังที่มีเส้นเลือดเลี้ยง จะทำให้หัวกระดูกขาดเลือดตาย (AVN)"
                  }
                }
              },
              "illustrationId": "/images/neer_humerus/neer_4part_valgus.png",
              "xrayDescription": {
                "en": "Humeral head impacted in valgus onto shaft with splayed tuberosities.",
                "th": "หัวกระดูกถูกกดอัดในแนว Valgus ลงบนลำกระดูก ร่วมกับชิ้น Tuberosities อ้าออก"
              }
            },
            {
              "type": "4-Part (LT Variant)",
              "name": {
                "en": "4-Part Lesser Tuberosity Fracture",
                "th": "4-Part Lesser Tuberosity Variant Fracture"
              },
              "description": {
                "en": "Rare 4-part fracture variant with displaced lesser tuberosity and posterior head subluxation",
                "th": "ชิ้นกระดูกหัก 4 ชิ้นชนิดพิเศษที่มีการหลุดของ Lesser tuberosity ร่วมกับหัวกระดูกเคลื่อนไปด้านหลัง"
              },
              "moi": {
                "en": "Severe rotational force or posterior fracture-dislocation.",
                "th": "แรงบิดหมุนรุนแรง หรือข้อไหล่หุดไปด้านหลัง"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Rare 4-part variant with displaced lesser tuberosity and posterior head subluxation; severe articular incongruity; anatomical ORIF or RTSA based on patient age and bone quality.",
                  "th": "กระดูกหัก 4-part ชนิดพิเศษที่มีชิ้น LT หลุดและหัวกระดูกเคลื่อนไปด้านหลัง ผ่าตัด ORIF ในผู้ป่วยอายุน้อย หรือผ่าตัดเปลี่ยนข้อไหล่เทียม Reverse TSA ในผู้สูงอายุ"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly non-operative in non-surgical candidates",
                    "th": "• ผู้ป่วยที่มีข้อห้ามผ่าตัดรุนแรง"
                  },
                  "method": {
                    "en": "• Sling",
                    "th": "• ใส่สายคล้องแขน"
                  },
                  "rehabilitation": {
                    "en": "• Passive ROM",
                    "th": "• ขยับแขนเบาๆ"
                  },
                  "pitfalls": {
                    "en": "• Chronic locked dislocation",
                    "th": "• ข้อไหล่ล็อกหลุดค้างไปด้านหลังเรื้อรัง"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All functional patients with 4-part LT variant fractures",
                    "th": "• กระดูกหัก 4-part LT variant ในผู้ป่วยทั่วไปทุกราย"
                  },
                  "method": {
                    "en": "• ORIF with locking plate and subscapularis reconstruction in young patients; Reverse Total Shoulder Arthroplasty (RTSA) in elderly",
                    "th": "• ผ่าตัด ORIF ดามแผ่นเหล็กล็อคและเย็บซ่อมเอ็น Subscapularis ในผู้ป่วยอายุน้อย หรือผ่าตัดเปลี่ยนข้อไหล่เทียม Reverse TSA ในผู้สูงอายุ"
                  },
                  "rehabilitation": {
                    "en": "• Protected passive ROM x 4–6 weeks, progressive strengthening",
                    "th": "• ทำ Passive ROM อย่างระมัดระวัง 4–6 สัปดาห์แรก แล้วค่อยเริ่มฝึกเพิ่มกำลัง"
                  },
                  "pitfalls": {
                    "en": "• Undetected posterior glenohumeral subluxation",
                    "th": "• ตรวจไม่พบข้อไหล่ที่ยังคงหลุดไปด้านหลัง"
                  }
                }
              },
              "illustrationId": "/images/neer_humerus/neer_4part_lt.png",
              "xrayDescription": {
                "en": "Lesser tuberosity displaced with articular surface incongruity.",
                "th": "ชิ้นส่วน Lesser tuberosity เคลื่อนหลุดร่วมกับผิวข้อเบี้ยวเสียรูป"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "shaft",
      "name": {
        "en": "Humeral Shaft",
        "th": "ส่วนกลางกระดูกต้นแขน (Humeral Shaft)"
      },
      "regionConcept": {
        "physicalExam": [
          {
            "sign": "Radial Nerve Motor Function (Wrist & Finger Extension)",
            "positive": {
              "en": "Wrist drop and loss of thumb/finger extension (EPL/EDC) indicate radial nerve palsy",
              "th": "ภาวะข้อมือตก (Wrist drop) และกระดกนิ้วหัวแม่มือ/นิ้วมือไม่ได้ บ่งชี้ภาวะบาดเจ็บของเส้นประสาท Radial"
            }
          },
          {
            "sign": "Radial Nerve Sensory Assessment (1st Dorsal Webspace)",
            "positive": {
              "en": "Numbness or altered sensation over the first dorsal web space of the hand",
              "th": "การรับสัมผัสลดลงหรือชาบริเวณง่ามนิ้วมือด้านหลังระหว่างนิ้วหัวแม่มือและนิ้วชี้"
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
              "en": "Well tolerated functionally due to mobile shoulder and elbow joints",
              "th": "ร่างกายชดเชยการทำงานได้ดีเนื่องจากมีข้อไหล่และข้อศอกที่เคลื่อนไหวได้มาก"
            }
          },
          {
            "parameter": {
              "en": "Anterior / Posterior Angulation",
              "th": "มุมเอียงหน้า-หลัง"
            },
            "threshold": "< 20°",
            "note": {
              "en": "Sagittal plane deformity is well tolerated",
              "th": "การผิดรูปในแนว Sagittal สามารถชดเชยได้ดี"
            }
          },
          {
            "parameter": {
              "en": "Varus / Valgus Angulation",
              "th": "มุมเอียง Varus / Valgus"
            },
            "threshold": "< 15°",
            "note": {
              "en": "Coronal plane deformity threshold",
              "th": "เกณฑ์ยอมรับในระนาบ Coronal"
            }
          },
          {
            "parameter": {
              "en": "Rotational Malalignment",
              "th": "การบิดหมุนผิดรูป"
            },
            "threshold": "< 30°",
            "note": {
              "en": "Glenohumeral joint rotation compensates for residual rotational deformity",
              "th": "การหมุนของข้อไหล่ช่วยชดเชยการบิดหมุนที่เหลืออยู่ได้ดี"
            }
          }
        ],
        "redFlags": [
          {
            "en": "Holstein-Lewis fracture: Distal 1/3 spiral fracture with high risk of radial nerve neuropraxia or entrapment (~22%) as nerve pierces lateral intermuscular septum",
            "th": "Holstein-Lewis fracture: กระดูกหักเฉียงเกลียวส่วนปลาย 1/3 เสี่ยงสูงต่อการบาดเจ็บหรือถูกหนีบของเส้นประสาท Radial (~22%) ขณะทอดผ่าน lateral intermuscular septum"
          },
          {
            "en": "Brachial artery injury or acute compartment syndrome of the upper arm",
            "th": "การบาดเจ็บของหลอดเลือดแดง Brachial หรือภาวะความดันในช่องกล้ามเนื้อต้นแขนสูง (Compartment syndrome)"
          }
        ],
        "associatedInjuries": [
          {
            "injury": {
              "en": "Radial Nerve Palsy (Primary Neuropraxia)",
              "th": "ภาวะอัมพาตของเส้นประสาท Radial (Radial nerve palsy)"
            },
            "trigger": {
              "en": "High risk in distal 1/3 spiral fractures (Holstein-Lewis pattern)",
              "th": "พบเสี่ยงสูงในรอยหักบิดเกลียวส่วนปลาย 1/3"
            }
          },
          {
            "injury": {
              "en": "Brachial Artery Injury",
              "th": "การบาดเจ็บของหลอดเลือดแดง Brachial"
            },
            "trigger": {
              "en": "Assess distal radial pulse and Doppler signal",
              "th": "ตรวจคลำชีพจร Radial และฟังเสียงสัญญาณ Doppler"
            }
          }
        ],
        "clinicalPearls": [
          {
            "en": "Approximately 90% of closed radial nerve palsies associated with humeral shaft fractures recover spontaneously within 3 to 4 months; primary exploration is not indicated initially.",
            "th": "ประมาณ 90% ของภาวะ Radial nerve palsy จากกระดูกต้นแขนหักแบบปิดจะฟื้นตัวได้เองภายใน 3 ถึง 4 เดือน ไม่จำเป็นต้องผ่าตัดเปิดสำรวจเส้นประสาททันที"
          },
          {
            "en": "Secondary radial nerve palsy developing after closed reduction is an indication for surgical exploration as the nerve may be trapped in the fracture site.",
            "th": "ภาวะ Radial nerve palsy ที่เกิดขึ้นใหม่หลังจากการดึงจัดกระดูก เป็นข้อบ่งชี้ในการผ่าตัดเปิดสำรวจเส้นประสาทเนื่องจากเส้นประสาทอาจถูกหนีบในรอยหัก"
          },
          {
            "en": "Functional bracing (Sarmiento brace) relies on hydrostat pressure of arm musculature and gravity; patient must remain upright during initial healing.",
            "th": "การรักษาด้วย Sarmiento brace อาศัยแรงดันน้ำในกล้ามเนื้อและแรงโน้มถ่วง ผู้ป่วยต้องนั่งหรือยืนตัวตรงในช่วงแรกของการรักษา"
          }
        ],
        "images": [
          {
            "url": "/images/xrays/humerus/middle_13_xray.jpg",
            "title": {
              "en": "Midshaft Diaphyseal Radiograph",
              "th": "ฟิล์มเอกซเรย์ลำกระดูกต้นแขนส่วนกลาง"
            },
            "caption": {
              "en": "Full-length AP view demonstrating displaced transverse-oblique fracture with varus shortening and intact joint visualization.",
              "th": "ภาพเอกซเรย์ AP เต็มความยาวกระดูกต้นแขน แสดงรอยหักกลางก้านกระดูกร่วมกับมุมเอียง Varus และหดสั้น"
            }
          },
          {
            "url": "/images/xrays/humerus/holstein_lewis_xray.jpg",
            "title": {
              "en": "Holstein-Lewis Distal Spiral Pattern",
              "th": "รอยหักเกลียว Holstein-Lewis ส่วนปลาย 1/3"
            },
            "caption": {
              "en": "Spiral fracture of distal third diaphysis with radial spike into lateral intermuscular septum (up to 22% radial nerve entrapment).",
              "th": "รอยหักบิดเกลียวส่วนปลาย 1/3 ที่มีปลายกระดูกแหลมเฉียงออกด้านข้างเสี่ยงหนีบเส้นประสาทเรเดียลสูงถึง 22%"
            }
          }
        ]
      },
      "classifications": [
        {
          "system": "Holstein-Lewis",
          "fullName": {
            "en": "Holstein-Lewis & Humeral Shaft Fracture Classification Guide",
            "th": "การจำแนกกระดูกแกนต้นแขนหักและคู่มือ Holstein-Lewis"
          },
          "description": {
            "en": "Classification of humeral shaft fractures by anatomical location (Proximal 1/3, Middle 1/3, Distal 1/3), highlighting the Holstein-Lewis spiral fracture of the distal third associated with high risk of Radial Nerve Palsy (entrapment) and acceptable conservative alignment parameters.",
            "th": "ระบบจำแนกกระดูกแกนต้นแขนหักตามตำแหน่งกายวิภาค (ส่วนต้น, ส่วนกลาง, ส่วนปลาย 1/3) โดยเน้นย้ำรอยหักเกลียว Holstein-Lewis บริเวณปลาย 1/3 ที่เสี่ยงต่อการบาดเจ็บของเส้นประสาท Radial (Radial Nerve Palsy) และเกณฑ์มุมกระดูกที่ยอมรับได้ในการรักษาแบบไม่ผ่าตัด"
          },
          "concept": {
            "title": {
              "en": "Holstein-Lewis & Humeral Shaft Clinical Concept",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ Holstein-Lewis & Humeral Shaft"
            },
            "corePrinciple": {
              "en": "Categorizes humeral shaft fractures by anatomical third (Proximal, Middle ~60%, Distal), highlighting the Holstein-Lewis distal third spiral fracture which carries high risk of radial nerve entrapment at the lateral intermuscular septum.",
              "th": "จำแนกกระดูกแกนต้นแขนหักตามตำแหน่ง 1/3 ส่วนต้น, ส่วนกลาง (~60%), และส่วนปลาย โดยเน้นย้ำรอยหักเกลียว Holstein-Lewis บริเวณปลาย 1/3 ที่เสี่ยงสูงต่อเส้นประสาท Radial ถูกหนีบที่ Lateral intermuscular septum"
            },
            "rules": [
              {
                "en": "Conservative Alignment Acceptability: AP angulation < 20°, Varus/Valgus < 15°, Shortening < 2 cm, Rotation < 30°.",
                "th": "เกณฑ์ยอมรับความผิดรูปในการรักษาแบบไม่ผ่าตัด: เอียงหน้า-หลัง < 20°, Varus/Valgus < 15°, หดสั้น < 2 ซม., บิดหมุน < 30°"
              },
              {
                "en": "Closed Primary Radial Nerve Palsy: ~90% spontaneous recovery in 3-4 months; treat conservatively in splint/brace with EMG follow-up.",
                "th": "ภาวะ Radial nerve palsy จากแผลปิดแต่แรก: ~90% หายได้เองใน 3-4 เดือน ให้รักษาแบบไม่ผ่าตัดและติดตามด้วย EMG"
              },
              {
                "en": "Secondary Radial Nerve Palsy (developing AFTER closed reduction): Indicative of nerve entrapment in fracture site; SURGICAL EXPLORATION MANDATORY.",
                "th": "ภาวะ Radial nerve palsy ที่เกิดขึ้นใหม่หลังการดึงจัดกระดูก (Secondary palsy): บ่งชี้ว่าเส้นประสาทถูกหนีบในรอยหัก ต้องผ่าตัดเปิดสำรวจทันที (Exploration)"
              }
            ],
            "clinicalSignificance": [
              {
                "en": "Non-operative Management: Coaptation splint initially, converted to Sarmiento Functional Brace once acute swelling resolves. Relies on muscular hydrostatic pressure; patient must remain upright.",
                "th": "การรักษาแบบไม่ผ่าตัด: ใส่ Coaptation splint ในช่วงแรก แล้วเปลี่ยนเป็น Sarmiento Functional Brace เมื่อยุบบวม อาศัยแรงดันน้ำในกล้ามเนื้อ ผู้ป่วยต้องนั่งหรือยืนตัวตรง"
              },
              {
                "en": "Operative Indications: Open fracture, vascular injury (brachial artery), floating elbow, unacceptable alignment, or secondary radial nerve palsy after reduction. Managed with ORIF (Broad 4.5 mm locking plate) or IM nailing.",
                "th": "ข้อบ่งชี้ผ่าตัด (ORIF): แผลหักเปิด, บาดเจ็บเส้นเลือด Brachial, Floating elbow, มุมผิดรูปเกินเกณฑ์ หรือเกิด Radial nerve palsy ขึ้นใหม่หลังดึงจัดกระดูก"
              }
            ]
          },
          "investigations": [
            {
              "name": "AP Humeral Shaft View",
              "details": {
                "en": "Standard AP view including both shoulder and elbow joints. Evaluates fracture pattern, alignment (varus/valgus, AP angulation), and shortening.",
                "th": "ภาพเอกซเรย์ต้นแขนท่า AP มาตรฐาน ครอบคลุมทั้งข้อไหล่และข้อศอก ใช้ประเมินแนวกระดูก มุมเอียง (Varus/Valgus, AP) และระยะหดสั้น"
              },
              "imageUrl": "/images/investigations/humerus/ap_humerus_shaft.jpg"
            },
            {
              "name": "Lateral Humeral Shaft View",
              "details": {
                "en": "Lateral view perpendicular to AP view. Crucial for assessing anterior/posterior angulation and cortical contact.",
                "th": "ภาพเอกซเรย์ต้นแขนท่าด้านข้าง ตั้งฉากกับท่า AP จำเป็นสำหรับการดูมุมเอียงหน้า-หลัง และการแตะกันของขอบกระดูก"
              },
              "imageUrl": "/images/investigations/humerus/lateral_humerus_shaft.jpg"
            }
          ],
          "types": [
            {
              "type": "Proximal 1/3",
              "name": {
                "en": "Proximal 1/3 Shaft Fracture",
                "th": "1. Proximal 1/3 Shaft (กระดูกแกนต้นแขนส่วนต้นหัก)"
              },
              "description": {
                "en": "Fracture located in the upper third of the humeral shaft below surgical neck\nProximal fragment pulled by Pectoralis Major (adduction and internal rotation)\nDistal fragment pulled by Deltoid (abduction and proximal displacement)\nAcceptable alignment: AP angulation <20°, Varus/Valgus <15°, Rotation <30°, Shortening <3cm",
                "th": "รอยหักบริเวณ 1/3 ส่วนบนของแกนต้นแขน ใต้ต่อ Surgical neck\nชิ้นกระดูกส่วนต้นถูกกล้ามเนื้อ Pectoralis Major ดึงหุบและหมุนเข้าด้านใน\nชิ้นกระดูกส่วนปลายถูกกล้ามเนื้อ Deltoid ดึงกางออกและยกลอยขึ้น\nเกณฑ์มุมกระดูกที่ยอมรับได้: เอียงหน้า-หลัง <20°, Varus/Valgus <15°, บิดหมุน <30°, หดสั้น <3 ซม."
              },
              "moi": {
                "en": "Direct blow to upper arm or fall on outstretched hand (FOOSH).",
                "th": "แรงกระแทกโดยตรงเข้าที่ต้นแขนส่วนบน หรือล้มเอาหัตถ์ยันพื้น (FOOSH)"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Upper third shaft fracture below surgical neck; deforming forces from pectoralis major (adduction/internal rotation) and deltoid (abduction); non-operative coaptation splint to functional Sarmiento brace achieves >90% union; ORIF for polytrauma or unacceptable alignment.",
                  "th": "กระดูกแกนต้นแขน 1/3 ส่วนบนหักใต้ต่อ Surgical neck มีแรงดึงจากกล้ามเนื้อ Pectoralis major และ Deltoid รักษาแบบไม่ผ่าตัดด้วย Coaptation splint แล้วเปลี่ยนเป็น Sarmiento brace กระดูกติดดี >90% ผ่าตัดเมื่อมุมผิดรูปเกินเกณฑ์หรือมีภาวะบาดเจ็บหลายระบบ"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Closed proximal 1/3 humeral shaft fracture meeting acceptable alignment criteria (<20° AP angulation, <15° varus/valgus, <2–3 cm shortening, <30° rotation)\n• Intact soft tissue envelope in upright/compliant patient",
                    "th": "• กระดูกหักแบบปิดบริเวณ 1/3 ส่วนต้นที่มุมเอียงอยู่ในเกณฑ์ (<20° หน้าหลัง, <15° ซ้ายขวา, สั้น <2–3 ซม., บิดหมุน <30°)\n• เนื้อเยื่อรอบกระดูกปกติและผู้ป่วยสามารถนั่ง/เดินตัวตรงได้"
                  },
                  "method": {
                    "en": "• Coaptation splint or U-slab for 1–2 weeks; transition to Sarmiento functional brace once acute swelling subsides",
                    "th": "• ใส่เฝือก Coaptation Splint หรือ U-slab 1–2 สัปดาห์แรก แล้วเปลี่ยนเป็น Sarmiento Functional Brace เมื่อยุบบวม"
                  },
                  "rehabilitation": {
                    "en": "• Early pendulum and active elbow/wrist/hand ROM immediately; active shoulder elevation at 4–6 weeks as callus bridges",
                    "th": "• เริ่มฝึกแกว่งแขนและขยับข้อศอก/ข้อมือ/นิ้วมือทันที เริ่มยกแขนเองที่ 4–6 สัปดาห์เมื่อเริ่มมีกระดูกงอก"
                  },
                  "pitfalls": {
                    "en": "• Patient lying supine eliminates gravity reduction force; patient must sit upright or sleep on recliners in first 2–4 weeks",
                    "th": "• การนอนราบจะทำให้สูญเสียแรงโน้มถ่วงที่ช่วยดึงจัดแนวกระดูก ผู้ป่วยต้องนั่งตัวตรงหรือนอนกึ่งนั่งกึ่งนอนใน 2–4 สัปดาห์แรก"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Unacceptable deformity exceeding Sarmiento alignment parameters\n• Polytrauma, bilateral arm fractures, or open fracture\n• Associated neurovascular injury",
                    "th": "• กระดูกผิดรูปเกินเกณฑ์ยอมรับของ Sarmiento\n• ผู้ป่วยบาดเจ็บหลายระบบ, แขนหักสองข้าง หรือกระดูกหักแผลเปิด\n• มีการบาดเจ็บของหลอดเลือดหรือเส้นประสาท"
                  },
                  "method": {
                    "en": "• Open reduction and internal fixation with broad 4.5 mm dynamic compression plate / locking plate (minimum 6–8 cortices proximal and distal) OR antegrade locked intramedullary nail",
                    "th": "• ผ่าตัดเปิดจัดกระดูกและดามแผ่นเหล็ก Broad 4.5 mm Compression / Locking Plate (ยึดสกรูอย่างน้อย 6–8 Cortices บนและล่าง) หรือใส่แกนดามในโพรงกระดูก Antegrade IM Nail"
                  },
                  "rehabilitation": {
                    "en": "• Immediate active-assisted shoulder and elbow ROM on post-op day 1–2",
                    "th": "• เริ่มฝึกช่วยขยับข้อไหล่และข้อศอกได้ทันทีในวันที่ 1–2 หลังผ่าตัด"
                  },
                  "pitfalls": {
                    "en": "• Proximal screw purchase failure in soft osteoporotic metaphyseal bone; rotator cuff damage with antegrade IM nail insertion",
                    "th": "• สกรูส่วนบนยึดเกาะกระดูกพรุนได้ไม่แน่น หรือเอ็น Rotator cuff บาดเจ็บจากการสอดแกน IM Nail"
                  }
                }
              },
              "illustrationId": "/images/humerus_shaft/proximal_13.png",
              "xrayUrl": "/images/xrays/humerus/proximal_13_xray.jpg",
              "xrayDescription": {
                "en": "Transverse/oblique fracture in proximal shaft with pectoralis major muscle pull displacement.",
                "th": "รอยหักแนวขวาง/เฉียงบริเวณ 1/3 ส่วนต้น พร้อมชิ้นกระดูกเคลื่อนตามทิศทางดึงของกล้ามเนื้อ Pectoralis Major"
              }
            },
            {
              "type": "Middle 1/3",
              "name": {
                "en": "Middle 1/3 Shaft Fracture (Most Common)",
                "th": "2. Middle 1/3 Shaft (กระดูกแกนต้นแขนส่วนกลางหัก - พบบ่อยที่สุด)"
              },
              "description": {
                "en": "Most common location of humeral shaft fractures (~60% of cases)\nProximal fragment abducted by Deltoid muscle\nDistal fragment displaced proximally by Biceps and Triceps pull\nAcceptable alignment parameters: AP angulation <20°, Varus/Valgus <15°, Rotation <30°, Shortening <3cm",
                "th": "ตำแหน่งหักที่พบบ่อยที่สุดของแกนกระดูกต้นแขน (~60% ของเคสทั้งหมด)\nชิ้นกระดูกส่วนต้นถูกกล้ามเนื้อ Deltoid ดึงกางออก\nชิ้นกระดูกส่วนปลายถูกกล้ามเนื้อ Biceps และ Triceps ดึงรั้งหดสั้นขึ้นด้านบน\nเกณฑ์มุมกระดูกที่ยอมรับได้: เอียงหน้า-หลัง <20°, Varus/Valgus <15°, บิดหมุน <30°, หดสั้น <3 ซม."
              },
              "moi": {
                "en": "Direct impact to mid-arm (motor vehicle crash) or indirect torsional force (arm wrestling).",
                "th": "แรงกระแทกตรงเข้ากลางต้นแขน (อุบัติเหตุรถยนต์) หรือแรงบิดหมุน (การงัดข้อ)"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Most common shaft fracture (~60%); excellent soft tissue envelope; functional Sarmiento bracing with gravity-assisted alignment achieves >95% union; locked compression plating is gold standard for operative indications.",
                  "th": "ตำแหน่งหักที่พบบ่อยที่สุด (~60%) มีกล้ามเนื้อหุ้มหนาแน่น การรักษาด้วย Sarmiento Brace อาศัยแรงโน้มถ่วงช่วยจัดแนวให้กระดูกติดสูง >95% ผ่าตัดดามแผ่นเหล็ก 4.5 mm LC-DCP เมื่อมีข้อบ่งชี้ผ่าตัด"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Closed, isolated middle 1/3 humeral shaft fracture within acceptable alignment parameters\n• Primary closed radial nerve neuropraxia (90% spontaneous recovery)",
                    "th": "• กระดูกต้นแขนส่วนกลางหักแบบปิดที่มุมเอียงอยู่ในเกณฑ์\n• มีภาวะ Radial nerve palsy แบบปิดร่วมด้วยแต่แรก (90% หายได้เอง)"
                  },
                  "method": {
                    "en": "• Coaptation U-splint for 7–10 days -> Sarmiento prefabricated functional brace tightened daily",
                    "th": "• ใส่เฝือก Coaptation U-splint 7–10 วันแรก แล้วเปลี่ยนเป็น Sarmiento Functional Brace ดึงสายรัดให้กระชับทุกวัน"
                  },
                  "rehabilitation": {
                    "en": "• Early active elbow flexion/extension, wrist/hand ROM, and Codman pendulum exercises on day 1–2 in brace; avoid active abduction until clinical union (6–8 weeks)",
                    "th": "• เริ่มงอเหยียดข้อศอก ขยับข้อมือ และแกว่งแขนเบาๆ ตั้งแต่วันที่ 1–2 ในเฝือก หลีกเลี่ยงการกางแขนเองจนกว่ากระดูกจะเริ่มติด (6–8 สัปดาห์)"
                  },
                  "pitfalls": {
                    "en": "• Loosening of Sarmiento brace as arm swelling subsides leads to angular collapse; patients must adjust straps daily",
                    "th": "• ปล่อยให้เฝือก Sarmiento หลวมเมื่อยุบบวมจะทำให้กระดูกคดผิดรูป ผู้ป่วยต้องดึงสายรัดปรับให้แน่นทุกวัน"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Floating elbow (ipsilateral forearm fracture)\n• Open fracture or failed conservative alignment\n• Radial nerve palsy developing AFTER closed reduction (secondary palsy / nerve entrapment)\n• Polytrauma requiring early weight-bearing through arms",
                    "th": "• แขนหักร่วมสองระดับ Floating Elbow\n• กระดูกหักแผลเปิด หรือมุมกระดูกผิดรูปเกินเกณฑ์ยอมรับ\n• เกิด Radial nerve palsy ขึ้นใหม่หลังดึงจัดกระดูก (Secondary palsy จากเส้นประสาทถูกหนีบ)\n• ผู้ป่วยบาดเจ็บหลายระบบที่ต้องใช้แขนยันตัว"
                  },
                  "method": {
                    "en": "• Anatomical ORIF: Anterolateral or posterior approach; Broad 4.5 mm narrow/broad LC-DCP or locking compression plate with minimum 3–4 bicortical screws (6–8 cortices) on each side of fracture",
                    "th": "• ผ่าตัดเปิดจัดกระดูกและดามแผ่นเหล็ก (ORIF): ผ่าน Anterolateral หรือ Posterior approach ดามแผ่นเหล็ก 4.5 mm LC-DCP / Locking Plate โดยขันสกรูทะลุสองผนังกระดูกอย่างน้อยข้างละ 3–4 ตัว (6–8 Cortices)"
                  },
                  "rehabilitation": {
                    "en": "• Immediate unrestricted active elbow and shoulder ROM from post-op day 1",
                    "th": "• เริ่มฝึกขยับข้อไหล่และข้อศอกได้เต็มที่ตั้งแต่วันแรกหลังผ่าตัด"
                  },
                  "pitfalls": {
                    "en": "• Inadequate fixation length (short plates with <6 cortices) leading to plate fatigue failure and nonunion",
                    "th": "• ใช้แผ่นเหล็กสั้นเกินไป (ยึดสกรูไม่ถึง 6 Cortices) ทำให้เหล็กหักล้าและกระดูกไม่ติด"
                  }
                }
              },
              "illustrationId": "/images/humerus_shaft/middle_13.png",
              "xrayUrl": "/images/xrays/humerus/middle_13_xray.jpg",
              "xrayDescription": {
                "en": "Transverse, spiral, or butterfly fragment in middle third shaft with varus/valgus or sagittal angulation.",
                "th": "เห็นรอยหักแนวขวาง เกลียว หรือมีชิ้นผีเสื้อ (Butterfly) บริเวณกลางแกนต้นแขน"
              }
            },
            {
              "type": "Holstein-Lewis",
              "name": {
                "en": "Holstein-Lewis Fracture (Distal 1/3 Spiral - Radial Nerve Risk)",
                "th": "3. Holstein-Lewis Fracture (หักเกลียวส่วนปลาย 1/3 - เสี่ยง Radial Nerve Palsy สูงสุด)"
              },
              "description": {
                "en": "Classic spiral fracture of the distal third of the humeral shaft with proximal-radial direction\nHIGH RISK of Radial Nerve Palsy (up to 22% entrapment/traction rate) as nerve pierces lateral intermuscular septum\nClinical signs: Wrist Drop (inability to extend wrist/fingers), numbness at dorsal 1st web space\nClosed palsy: ~90% recover spontaneously in 3-4 months with observation & cock-up splint",
                "th": "รอยหักบิดเกลียวเฉพาะบริเวณ 1/3 ส่วนปลายของแกนต้นแขน เฉียงขึ้นด้านบนทางฝั่ง Radial\nเสี่ยงสูงสุดต่อการบาดเจ็บของเส้นประสาท Radial (Radial Nerve Palsy ถึง 22%) เนื่องจากเส้นประสาททอดผ่าน Lateral intermuscular septum พอดี\nอาการตรวจพบ: Wrist Drop (กระดกข้อมือและนิ้วหัวแม่มือไม่ได้) และชาหลังมือตรงง่ามนิ้วชี้-นิ้วหัวแม่มือ\nกรณีเป็น Closed palsy: ~90% ฟื้นตัวได้เองใน 3-4 เดือน แนะนำเฝ้าระวังและใส่ Cock-up splint"
              },
              "moi": {
                "en": "Torsional or bending force applied to distal upper arm (fall or twisting mechanism).",
                "th": "แรงบิดหมุนหรือแรงดัดโค้งบริเวณต้นแขนส่วนปลาย (การล้มบิดตัว หรืออุบัติเหตุ)"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Distal 1/3 spiral fracture with high risk of radial nerve entrapment (~22%) at the lateral intermuscular septum; closed fracture with primary palsy can be observed conservatively for 3–4 months with cock-up splint; mandatory surgical exploration and ORIF if secondary palsy occurs after reduction or in open fractures.",
                  "th": "กระดูกหักเกลียว 1/3 ส่วนปลายเสี่ยงต่อ Radial nerve ถูกหนีบที่ Lateral intermuscular septum สูง (~22%) หากเป็นแผลปิดที่มีอาการชา/ข้อมือตกแต่แรก สามารถรักษาแบบไม่ผ่าตัดเฝ้าระวัง 3–4 เดือนร่วมกับใส่ Cock-up splint (90% หายเอง) แต่หากเกิดอัมพาตขึ้นใหม่หลังดึงจัดกระดูกหรือเป็นแผลเปิด ต้องผ่าตัดเปิดสำรวจเส้นประสาทและดามแผ่นเหล็กทันที"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Closed Holstein-Lewis fracture with intact radial nerve OR closed primary radial nerve palsy (90% spontaneous recovery in 3–4 months)\n• Fracture alignment within acceptable parameters in Sarmiento brace",
                    "th": "• กระดูกหักแบบปิด Holstein-Lewis ที่เส้นประสาทปกติ หรือเป็น Radial nerve palsy แบบปิดแต่แรก (90% หายเองใน 3–4 เดือน)\n• มุมกระดูกอยู่ในเกณฑ์ยอมรับได้"
                  },
                  "method": {
                    "en": "• Sarmiento functional brace + dynamic or static cock-up wrist splint to prevent wrist drop flexion contracture",
                    "th": "• ใส่เฝือก Sarmiento Functional Brace + ใส่เฝือกดามข้อมือ Cock-up Splint ป้องกันข้อมือตกติดแข็ง"
                  },
                  "rehabilitation": {
                    "en": "• Active finger and thumb extension exercises; occupational therapy with dynamic splinting; EMG/NCS monitoring at 3–4 months if no reinnervation",
                    "th": "• ฝึกกระดกนิ้วมือและนิ้วโป้ง กายภาพบำบัดด้วย Dynamic splint ตรวจคลื่นไฟฟ้ากล้ามเนื้อ (EMG/NCV) ที่ 3–4 เดือนหากยังไม่ฟื้นตัว"
                  },
                  "pitfalls": {
                    "en": "• Attempting repeated aggressive closed reduction maneuvers which can trap or transect the radial nerve between sharp spiral bone spikes",
                    "th": "• การพยายามดึงดัดกระดูกรุนแรงซ้ำๆ อาจทำให้เส้นประสาท Radial ถูกหนีบหรือถูกคมกระดูกตัดขาด"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Secondary radial nerve palsy developing AFTER closed reduction or splint application (indicates nerve entrapment in fracture gap)\n• Open Holstein-Lewis fracture\n• Unacceptable reduction in brace or soft tissue interposition preventing reduction",
                    "th": "• ภาวะ Radial nerve palsy เกิดขึ้นใหม่หลังการดึงจัดกระดูกหรือใส่เฝือก (แสดงว่าเส้นประสาทถูกหนีบในรอยหัก)\n• กระดูกหักแผลเปิด (Open fracture)\n• มุมกระดูกผิดรูปเกินเกณฑ์หรือไม่สามารถจัดกระดูกเข้าที่ได้"
                  },
                  "method": {
                    "en": "• Posterior or anterolateral approach: Direct radial nerve exploration and neurolysis from spiral groove through lateral intermuscular septum + ORIF with pre-contoured distal humerus extra-articular locking plate",
                    "th": "• ผ่าตัดเปิดสำรวจเส้นประสาท Radial (Nerve Exploration & Neurolysis) ผ่านทาง Posterior หรือ Anterolateral approach เลาะเส้นประสาทออกจากรอยหัก + ผ่าตัดดามแผ่นเหล็ก Distal Humerus Extra-articular Locking Plate"
                  },
                  "rehabilitation": {
                    "en": "• Immediate active elbow/wrist motion; cock-up splint until radial nerve motor recovery (Brachioradialis -> ECRL -> EDC/EPL)",
                    "th": "• เริ่มขยับข้อศอกและข้อมือทันที ใส่ Cock-up splint พยุงไว้จนกว่ากล้ามเนื้อที่เลี้ยงโดย Radial nerve จะฟื้นตัวตามลำดับ"
                  },
                  "pitfalls": {
                    "en": "• Iatrogenic radial nerve transection during posterior or lateral plating if nerve is not formally identified and mobilized",
                    "th": "• ตัดโดนเส้นประสาท Radial ขาดขณะวางแผ่นเหล็กดามกระดูก หากไม่หาและเลาะแยกเส้นประสาทออกมาก่อน"
                  }
                }
              },
              "illustrationId": "/images/humerus_shaft/holstein_lewis.png",
              "xrayUrl": "/images/xrays/humerus/holstein_lewis_xray.jpg",
              "xrayDescription": {
                "en": "Spiral/oblique fracture line in distal 1/3 shaft extending proximally and laterally into the spiral groove region.",
                "th": "รอยหักบิดเกลียวบริเวณ 1/3 ส่วนปลายของต้นแขน พาดเฉียงขึ้นด้านบนฝั่ง Radial เข้าหาตำแหน่ง Spiral groove"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "distal",
      "name": {
        "en": "Distal Humerus",
        "th": "ส่วนปลายกระดูกต้นแขน (Distal Humerus)"
      },
      "regionConcept": {
        "physicalExam": [
          {
            "sign": "Brachial & Radial Artery Pulse Palpation",
            "positive": {
              "en": "Absent or diminished distal pulse indicates brachial artery injury or compression",
              "th": "ชีพจรเบาลงหรือคลำไม่ได้ บ่งชี้การบาดเจ็บหรือถูกกดทับของหลอดเลือดแดง Brachial"
            }
          },
          {
            "sign": "Ulnar Nerve Assessment (Froment Sign / Finger Abduction)",
            "positive": {
              "en": "Weakness of interossei muscles or loss of sensation over 5th digit indicates ulnar nerve neuropraxia",
              "th": "กล้ามเนื้อ Interossei อ่อนแรง หรือชาบริเวณนิ้วก้อย บ่งชี้การบาดเจ็บของเส้นประสาท Ulnar"
            }
          },
          {
            "sign": "Median Nerve & AIN Assessment (OK Sign / Palmar Sensation)",
            "positive": {
              "en": "Inability to flex DIP of index finger and IP of thumb ('OK sign') or thumb-to-middle palmar numbness",
              "th": "งอนิ้วชี้และนิ้วหัวแม่มือทำท่า 'OK' ไม่ได้ หรือชาฝ่ามือด้านนิ้วโป้งถึงนิ้วกลาง บ่งชี้บาดเจ็บต่อเส้นประสาท Median/AIN"
            }
          }
        ],
        "acceptableAlignment": [
          {
            "parameter": {
              "en": "Articular Step-off / Gap",
              "th": "ระยะเกยหรือช่องว่างของผิวข้อ"
            },
            "threshold": "< 1-2 mm",
            "note": {
              "en": "Anatomical reduction mandatory to restore articular congruity and prevent post-traumatic osteoarthritis",
              "th": "จำเป็นต้องจัดกระดูกให้เรียบเสมอเพื่อคืนรูปผิวข้อและป้องกันภาวะข้อศอกเสื่อม"
            }
          }
        ],
        "redFlags": [
          {
            "en": "Brachial artery disruption or thrombosis leading to acute upper extremity ischemia and Volkmann ischemic contracture",
            "th": "การขาดหรืออุดตันของหลอดเลือดแดง Brachial นำไปสู่การขาดเลือดฉุกเฉินและภาวะ Volkmann ischemic contracture"
          },
          {
            "en": "Acute volar forearm compartment syndrome (severe pain with passive finger extension, tense forearm compartments)",
            "th": "ภาวะ Compartment syndrome ของแขนท่อนล่าง (ปวดรุนแรงเมื่อเหยียดนิ้วมือ หรือช่องกล้ามเนื้อตึงแน่น)"
          }
        ],
        "associatedInjuries": [
          {
            "injury": {
              "en": "Olecranon Fracture / Dislocation",
              "th": "กระดูก Olecranon หักหรือข้อศอกหลุด"
            },
            "trigger": {
              "en": "Evaluate complex elbow injury patterns (Floating elbow)",
              "th": "ประเมินการบาดเจ็บซับซ้อนของข้อศอก (Floating elbow)"
            }
          },
          {
            "injury": {
              "en": "Radial Head / Neck Fracture",
              "th": "หัวกระดูกหรือคอกระดูก Radius หัก"
            },
            "trigger": {
              "en": "Check radio-capitellar alignment on lateral radiograph",
              "th": "ตรวจดูแนว Radio-capitellar บนภาพเอกซเรย์ท่าด้านข้าง"
            }
          }
        ],
        "clinicalPearls": [
          {
            "en": "Dual parallel or orthogonal locking plate constructs through a trans-olecranon osteotomy provide superior biomechanical stability allowing immediate post-operative active ROM.",
            "th": "การผ่าตัดดามแผ่นเหล็กล็อคคู่ (Parallel หรือ Orthogonal) ผ่านทางเข้า Olecranon osteotomy ให้ความมั่นคงทางชีวกลศาสตร์สูงสุด ช่วยให้เริ่มฝึกขยับข้อศอกได้ทันทีหลังผ่าตัด"
          },
          {
            "en": "Trans-olecranon osteotomy provides the best anatomical exposure for complex AO 13-C intra-articular distal humerus fractures.",
            "th": "การตัดกระดูก Olecranon (Olecranon osteotomy) ช่วยให้เห็นแนวผิวข้อ 13-C ที่แตกซับซ้อนได้ชัดเจนที่สุด"
          },
          {
            "en": "Total Elbow Arthroplasty (TEA) is a primary treatment option for low-demand elderly patients with severely comminuted intra-articular (13-C3) fractures.",
            "th": "การผ่าตัดใส่ข้อศอกเทียม (TEA) เป็นทางเลือกหลักที่ดีในผู้สูงอายุที่ใช้งานแขนน้อยและมีรอยหักเข้าข้อแตกละเอียด (13-C3)"
          }
        ]
      },
      "classifications": [
        {
          "system": "AO/OTA 13",
          "fullName": {
            "en": "AO/OTA Distal Humerus Fracture Classification (Type A, B, C)",
            "th": "การจำแนกกระดูกต้นแขนส่วนปลายหัก AO/OTA (Type A, B, C)"
          },
          "description": {
            "en": "Classification of distal humerus fractures based on joint surface involvement:\n• Type A: Extra-articular (Spares the joint surface completely)\n• Type B: Partial articular (Part of joint remains attached to shaft)\n• Type C: Complete articular (Joint block completely disconnected from shaft)",
            "th": "ระบบจำแนกกระดูกต้นแขนส่วนปลายหักตามการพาดผ่านข้อต่อข้อศอก:\n• Type A: Extra-articular (หักนอกข้อต่อทั้งหมด)\n• Type B: Partial articular (หักเข้าข้อต่อบางส่วน)\n• Type C: Complete articular (หักเข้าข้อต่อสมบูรณ์ ผิวข้อหลุดแยกจากแกนกระดูกทั้งหมด)"
          },
          "concept": {
            "title": {
              "en": "AO/OTA 13 Distal Humerus Clinical Concept",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ Distal Humerus AO/OTA"
            },
            "corePrinciple": {
              "en": "Classifies distal humerus fractures into 3 groups based on articular involvement (Type A Extra-articular, Type B Partial articular, Type C Complete articular). Anatomical articular restoration (< 1-2 mm step-off) and rigid dual-column stability are essential to allow immediate post-operative active elbow range of motion.",
              "th": "จำแนกกระดูกต้นแขนส่วนปลายหักเป็น 3 กลุ่มตามการพาดผ่านข้อต่อ (Type A เหนือนอกข้อ, Type B เข้าข้อบางส่วน, Type C เข้าข้อสมบูรณ์) หัวใจสำคัญคือการจัดผิวข้อให้เรียบเสมอ (< 1-2 มม.) และการยึดตรึงเสากระดูกคู่ (Dual-Column Plating) ให้แข็งแรงพอที่จะเริ่มบริหารข้อศอกได้ทันทีหลังผ่าตัด"
            },
            "rules": [
              {
                "en": "Type A (Extra-articular): Fracture line spares the trochlea and capitellum completely -> Stable articular dome -> Dual locking plate ORIF for displaced",
                "th": "Type A (Extra-articular): รอยหักอยู่นอกข้อต่อ ผิวข้อ Trochlea และ Capitellum สมบูรณ์ -> ผ่าตัด ORIF ยึดแผ่นเหล็กล็อคคู่ในชนิดหักเคลื่อน"
              },
              {
                "en": "Type B (Partial Articular): Part of articular surface remains attached to humeral shaft (B1 lateral condyle, B2 medial condyle, B3 coronal shear) -> Anatomical lag screws / headless screws",
                "th": "Type B (Partial Articular): รอยหักเข้าข้อบางส่วน โดยมีเสากระดูกข้างหนึ่งเชื่อมต่อกับแกนกระดูก (B1 ปุ่มนอก, B2 ปุ่มใน, B3 รอยหักเฉือน Coronal) -> ยึดด้วย Lag screws หรือ Headless screws"
              },
              {
                "en": "Type C (Complete Articular): Articular block is completely detached and dissociated from humeral shaft -> Mandatory trans-olecranon osteotomy + dual parallel locking plates",
                "th": "Type C (Complete Articular): ชิ้นผิวข้อทั้งหมดหลุดแยกขาดจากแกนกระดูกต้นแขน -> ผ่าตัดเปิดผ่าน Olecranon osteotomy + ดามแผ่นเหล็กล็อคคู่ขนาน (Parallel Plating)"
              }
            ],
            "clinicalSignificance": [
              {
                "en": "Type A (Extra-articular): Operative indication for displaced fractures using dual locking plates (parallel or orthogonal 90-90 architecture). Conservative long arm splint for true non-displaced.",
                "th": "Type A: ผ่าตัด ORIF ยึดแผ่นเหล็กล็อคคู่ (Dual Locking Plates) ในชนิดเคลื่อนตัว; ใส่เฝือกอ่อนแขนยาวเฉพาะในชนิดไม่เคลื่อนตัว"
              },
              {
                "en": "Type B (Partial Articular): ORIF with headless compression screws (Herbert screws) for B3 coronal shear or condylar plates for B1/B2. Articular step-off must be < 1-2 mm.",
                "th": "Type B: ผ่าตัด ORIF จัดผิวข้อให้เรียบเสมอ (< 1-2 มม.) ยึดด้วย Headless compression screw สำหรับ B3 coronal shear หรือ Condylar plate สำหรับ B1/B2"
              },
              {
                "en": "Type C (Complete Articular): Trans-olecranon osteotomy approach + dual anatomical parallel locking plates to allow immediate active ROM. In elderly low-demand patients with severe C3 comminution -> Total Elbow Arthroplasty (TEA).",
                "th": "Type C: ผ่าตัดเปิดผ่าน Olecranon osteotomy + ดามแผ่นเหล็กล็อคคู่ขนาน (Parallel Plating) เพื่อยึดแน่นที่สุดให้ทำ ROM ได้ทันทีหลังผ่าตัด ในผู้สูงอายุที่แตกละเอียด C3 พิจารณาทำ Total Elbow Arthroplasty (TEA)"
              }
            ]
          },
          "investigations": [
            {
              "name": "AP Elbow View",
              "details": {
                "en": "Standard Anteroposterior view of the elbow in full extension to evaluate distal humerus alignment, medial/lateral condylar columns, and articular step-off.",
                "th": "ภาพเอกซเรย์ข้อศอกท่าหน้าหลัง (AP) เหยียดศอกเต็มที่ ประเมินแนวเสากระดูก Condyle ด้านในและนอก และการเลื่อนของผิวข้อ"
              },
              "imageUrl": "/images/investigations/forearm/ap_elbow_view.jpg"
            },
            {
              "name": "Lateral Elbow View",
              "details": {
                "en": "Standard 90-degree flexed lateral view to assess anterior/posterior condylar displacement, anterior humeral line (AHL), and fat pad signs (sail sign / posterior fat pad).",
                "th": "ภาพเอกซเรย์ข้อศอกท่าด้านข้าง (Lateral) งอศอก 90 องศา ประเมินมุมองศา แนว Anterior Humeral Line (AHL) และสัญญาณ Fat pad sign"
              },
              "imageUrl": "/images/investigations/forearm/lateral_elbow_view.jpg"
            },
            {
              "name": "Traction / Motion AP View & CT 3D",
              "details": {
                "en": "Traction radiograph or 3D CT scan indispensable for pre-operative templating of complex Type B coronal shear and Type C multi-fragmentary articular reconstructions.",
                "th": "ภาพเอกซเรย์ท่าดึงกระดูก (Traction View) หรือ CT Scan 3D สำคัญอย่างยิ่งในการวางแผนผ่าตัดจัดข้อ Type B และ Type C ที่แตกซับซ้อน"
              }
            }
          ],
          "types": [
            {
              "type": "Type A",
              "name": {
                "en": "Type A (Extra-articular)",
                "th": "Type A (รอยหักอยู่นอกข้อต่อ / Extra-articular)"
              },
              "description": {
                "en": "Fracture line spares the articular surface of the distal humerus completely\nIncludes epicondylar avulsions (A1) and simple/comminuted supracondylar fractures (A2/A3)\nTrochlea and capitellum articular surfaces remain intact\nHigh risk of brachial artery and median nerve injury in displaced extension-type supracondylar patterns",
                "th": "รอยหักอยู่นอกข้อต่อกระดูกต้นแขนส่วนปลายทั้งหมด ผิวข้อศอกสมบูรณ์\nครอบคลุมการกะเทาะปุ่มกระดูก (A1) และรอยหักเหนือข้อแบบเรียบ/แตกละเอียด (A2/A3)\nผิวข้อ Trochlea และ Capitellum ไม่มีความเสียหาย\nเสี่ยงต่อการบาดเจ็บของหลอดเลือด Brachial artery และเส้นประสาท Median nerve ในชนิดหักเคลื่อน"
              },
              "moi": {
                "en": "Fall on out-stretched hand (FOOSH) with hyperextended elbow or direct blow to distal humerus.",
                "th": "ล้มมือยันพื้นขณะข้อศอกเหยียดเต็มที่ หรือแรงกระแทกโดยตรงเข้าเหนือข้อศอก"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Extra-articular supracondylar/epicondylar fracture sparing the joint; displaced fractures require rigid dual-column plate fixation (parallel or orthogonal 90-90 architecture) to allow immediate active elbow motion; non-operative long arm cast only for true non-displaced patterns.",
                  "th": "รอยหักเหนือข้อศอกอยู่นอกข้อต่อทั้งหมด หากเคลื่อนตัวต้องผ่าตัดยึดแผ่นเหล็กล็อคคู่ (Dual Locking Plates) ทั้งสองเสาเพื่อความแข็งแรงให้เริ่มขยับข้อศอกได้ทันที ใส่เฝือกเฉพาะกรณีไม่เคลื่อนตัว"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Truly non-displaced extra-articular distal humerus fractures (AO 13-A2) in low-demand or high-risk surgical patients",
                    "th": "• กระดูกหักเหนือข้อนอกข้อต่อที่ไม่เคลื่อนตัว (AO 13-A2) ในผู้ป่วยที่มีความเสี่ยงผ่าตัดสูง"
                  },
                  "method": {
                    "en": "• Long arm posterior splint or cast with elbow at 90° flexion for 3–4 weeks",
                    "th": "• ใส่เฝือกยาวดามแขน (งอศอก 90 องศา) นาน 3–4 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Gentle active-assisted elbow ROM out of splint at 3–4 weeks",
                    "th": "• เริ่มฝึกช่วยขยับข้อศอกเบาๆ ที่ 3–4 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Prolonged elbow casting >4 weeks causes irreversible elbow joint capsule contracture and permanent loss of extension",
                    "th": "• การใส่เฝือกข้อศอกนานเกิน 4 สัปดาห์ จะทำให้ปลอกหุ้มข้อศอกหดรั้งและสูญเสียการเหยียดข้อศอกถาวร"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All displaced extra-articular distal humerus fractures (AO 13-A2, 13-A3)\n• Comminuted supracondylar column failure",
                    "th": "• กระดูกหักเหนือข้อนอกข้อต่อที่เคลื่อนตัวทุกราย (AO 13-A2, 13-A3)\n• เสากระดูกเหนือข้อแตกละเอียด"
                  },
                  "method": {
                    "en": "• Posterior approach (triceps-sparing or triceps-reflecting): Rigid Dual Locking Plate osteosynthesis (Parallel or 90-90 Orthogonal configuration) across medial and lateral columns",
                    "th": "• ผ่าตัดเปิดทางด้านหลัง: ดามแผ่นเหล็กล็อคคู่ (Dual Locking Plates) ยึดเสากระดูกด้านในและด้านนอกในทิศทาง Parallel หรือ 90-90 Orthogonal"
                  },
                  "rehabilitation": {
                    "en": "• Immediate active and active-assisted elbow flexion/extension on post-op day 1–2; no sling after 1 week",
                    "th": "• เริ่มฝึกงอเหยียดข้อศอกได้ทันทีตั้งแต่วันที่ 1–2 หลังผ่าตัด ถอดสายคล้องแขนหลัง 1 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Single column plating leads to early mechanical failure and nonunion; must always bridge both medial and lateral columns",
                    "th": "• การดามแผ่นเหล็กเพียงเสาเดียวจะทำให้เหล็กหักล้มเหลวและกระดูกไม่ติด ต้องดามคู่ทั้งสองเสาเสมอ"
                  }
                }
              },
              "illustrationId": "/images/humerus/ao_13_a.png",
              "xrayDescription": {
                "en": "Metaphyseal or epicondylar fracture line above the olecranon fossa without articular cartilage disruption.",
                "th": "เห็นรอยหักเหนือข้อหรือที่ปุ่ม Epicondyle โดยผิวข้อ Trochlea และ Capitellum เรียบเสมอกันสมบูรณ์"
              }
            },
            {
              "type": "Type B",
              "name": {
                "en": "Type B (Partial Articular / Unicondylar)",
                "th": "Type B (รอยหักเข้าข้อต่อบางส่วน / Partial Articular)"
              },
              "description": {
                "en": "Partial articular fracture; part of the articular surface remains in continuity with the humeral shaft\n• B1: Lateral sagittal condylar fracture (Lateral condyle / Capitellum)\n• B2: Medial sagittal condylar fracture (Medial condyle / Trochlea)\n• B3: Coronal shear fracture of capitellum/trochlea (Hahn-Steinthal / Kocher-Lorenz patterns)\nHigh risk of mechanical block to elbow flexion/extension if displaced",
                "th": "รอยหักเข้าข้อต่อบางส่วน โดยผิวข้อส่วนหนึ่งยังคงยึดติดกับแกนกระดูกต้นแขน\n• B1: Sagittal ด้านนอก (Lateral condyle)\n• B2: Sagittal ด้านใน (Medial condyle)\n• B3: Coronal shear หักเฉือนผิวข้อด้านหน้า (Capitellum/Trochlea)\nเสี่ยงต่อการติดขัดของข้อศอก (Mechanical block) หากผิวข้อเคลื่อนหลุด"
              },
              "moi": {
                "en": "Direct shear force transmitted through the radial head or coronoid process into the distal humeral articular surface.",
                "th": "แรงเฉือนส่งผ่านจากหัวกระดูกเรเดียสหรือโคโรนอยด์กระแทกเข้าผิวข้อปลายกระดูกต้นแขน"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Unicondylar sagittal (B1/B2) or coronal shear (B3 Capitellum/Trochlea) fracture; articular incongruity or mechanical block; mandatory anatomical ORIF with buried headless compression screws (B3) or condylar buttress plates (B1/B2).",
                  "th": "รอยหักเข้าข้อต่อบางส่วน (ปุ่มนอก B1, ปุ่มใน B2 หรือเฉือนผิวข้อหน้า B3) ผิวข้อสะดุดหรือขัดล็อก ต้องผ่าตัดเปิดจัดผิวข้อให้เรียบสนิทและยึดด้วยสกรูหัวจม Headless compression screws (B3) หรือแผ่นเหล็ก Condylar plate (B1/B2)"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly CONTRAINDICATED for displaced fractures (Causes mechanical block, severe stiffness, and rapid arthrosis)",
                    "th": "• ห้ามใช้วิธีนี้ในกระดูกที่เคลื่อนตัว (ทำให้ข้อศอกขัดติด ติดแข็ง และข้อเสื่อมรวดเร็ว)"
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
                    "en": "• Joint incongruity and rapid joint destruction",
                    "th": "• ผิวข้อสะดุดและข้อศอกพังทลาย"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All displaced partial articular distal humerus fractures (AO 13-B1, B2, B3)\n• Capitellar / Trochlear coronal shear displacement > 1 mm",
                    "th": "• กระดูกหักเข้าข้อต่อบางส่วนที่เคลื่อนตัวทุกราย (AO 13-B1, B2, B3)\n• ชิ้นกระดูกผิวข้อ Capitellum / Trochlea เคลื่อนตัว > 1 มม."
                  },
                  "method": {
                    "en": "• Lateral column (B1) / Medial column (B2): Anatomical reduction and pre-contoured condylar buttress plate + lag screws\n• Coronal shear (B3 Hahn-Steinthal / Kocher-Lorenz): Anterolateral or lateral Kocher approach; headless compression screws (Herbert screws) inserted from anterior-to-posterior countersunk below articular cartilage ± posterior buttress plate",
                    "th": "• ปุ่มนอก (B1) / ปุ่มใน (B2): ผ่าตัดจัดกระดูกและดามแผ่นเหล็ก Condylar Buttress Plate + Lag screws\n• รอยหักเฉือนผิวข้อ Coronal Shear (B3): ผ่าตัดเข้าทาง Lateral Kocher approach ยึดด้วยสกรูหัวจม Headless Compression Screws ขันจากหน้าไปหลังฝังจมใต้ผิวกระดูกอ่อน ± ดามแผ่นเหล็กต้านแรงเฉือนด้านหลัง"
                  },
                  "rehabilitation": {
                    "en": "• Early active elbow ROM exercises on post-op day 2; avoid resisted loading for 6–8 weeks",
                    "th": "• เริ่มฝึกงอเหยียดข้อศอกได้ตั้งแต่วันที่ 2 หลังผ่าตัด หลีกเลี่ยงการยกของหนัก 6–8 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Screws left proud on the articular surface destroying the radial head or trochlear groove\n• Overlooking posterior trochlear comminution",
                    "th": "• หัวสกรูโผล่ล้ำขึ้นมาบนผิวข้อทำลายหัวกระดูกเรเดียส\n• มองข้ามรอยแตกละเอียดของ Trochlea ด้านหลัง"
                  }
                }
              },
              "illustrationId": "/images/humerus/ao_13_b.png",
              "xrayDescription": {
                "en": "Articular fracture line extending through capitellum or trochlea with part of the condyle connected to shaft.",
                "th": "เห็นรอยหักพาดผ่านผิวข้อ Capitellum หรือ Trochlea โดยมีเสากระดูกอีกฝั่งหนึ่งเชื่อมต่อกับแกนกระดูก"
              }
            },
            {
              "type": "Type C",
              "name": {
                "en": "Type C (Complete Articular / Bicondylar)",
                "th": "Type C (รอยหักเข้าข้อต่อสมบูรณ์ / Complete Articular)"
              },
              "description": {
                "en": "Complete articular disruption; the articular block is completely disconnected and dissociated from the main humeral shaft\n• C1: Simple articular & simple metaphyseal (Classic T- or Y-type)\n• C2: Simple articular with comminuted metaphyseal\n• C3: Severely comminuted articular & metaphyseal crushing\nHigh risk of stiffness, nonunion, ulnar neuropathy, and post-traumatic arthritis",
                "th": "รอยหักเข้าข้อต่อสมบูรณ์ ชิ้นข้อต่อหลุดแยกขาดจากแกนกระดูกต้นแขนทั้งหมด (Bicondylar Disruption)\n• C1: Simple articular & metaphyseal (รูป T หรือ Y เรียบง่าย)\n• C2: ผิวข้อแตกเรียบ แต่เหนือข้อแตกละเอียด\n• C3: แตกละเอียดรุนแรงทั้งผิวข้อและส่วนเหนือข้อ\nเสี่ยงสูงต่อข้อศอกติดแข็ง กระดูกไม่ติด ชาเส้นประสาท Ulnar และข้อเสื่อม"
              },
              "moi": {
                "en": "High-energy axial compression driving the wedge of the olecranon into the distal humeral trochlea, exploding both condylar columns.",
                "th": "แรงกระแทกพลังงานสูง โดยปลายกระดูก Olecranon ตอกอัดแทรกตรงกลางระหว่างสอง Condyle ทำให้ผิวข้อระเบิดแยกจากกัน"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Complete articular dissociation from humeral shaft; complex bicondylar injury; mandatory trans-olecranon osteotomy + anatomical articular reconstruction + dual parallel locking plates (Parallel Plating architecture) to enable immediate active elbow motion; Total Elbow Arthroplasty (TEA) for unreconstructable C3 comminution in elderly (>65–70 y/o).",
                  "th": "ชิ้นผิวข้อหลุดแยกขาดจากแกนกระดูกทั้งหมด ต้องผ่าตัดเปิดผ่าน Chevron Trans-Olecranon Osteotomy เพื่อจัดผิวข้อให้เรียบสนิทและดามแผ่นเหล็กล็อคคู่ขนาน (Dual Parallel Plating) ให้แข็งแรงสูงสุดเพื่อเริ่มทำกายภาพทันที หรือผ่าตัดใส่ข้อศอกเทียม (Total Elbow Arthroplasty) ในผู้สูงอายุที่ผิวข้อแตกละเอียด C3 จนซ่อมไม่ได้"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly CONTRAINDICATED in functional patients (Results in nonunion, flail elbow, severe pain, and joint destruction)",
                    "th": "• ห้ามใช้วิธีนี้เด็ดขาด (ทำให้กระดูกไม่ติด ข้อศอกพิการหลุดหลวม ติดแข็ง และปวดรุนแรง)"
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
                    "en": "• Complete loss of elbow function and permanent disability",
                    "th": "• สูญเสียการทำงานของข้อศอกถาวร"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All AO/OTA 13-C complete articular distal humerus fractures (C1, C2, C3)",
                    "th": "• กระดูกปลายต้นแขนหักเข้าข้อต่อสมบูรณ์ AO/OTA 13-C ทุกราย"
                  },
                  "method": {
                    "en": "• Standard Surgical Exposure: Chevron Trans-Olecranon Osteotomy for direct 360° articular visualization\n• Step 1: Anatomical articular reduction of trochlea and capitellum; convert Type C to Type A with interfragmentary lag screws\n• Step 2: Fix articular block to shaft using Dual Parallel Pre-contoured Locking Plates (medial and lateral columns) with long interdigitating screws through distal fragments\n• Step 3: Anatomical olecranon osteotomy repair with tension band wiring or olecranon locking plate\n• In elderly patients (>65–70 yrs) with unreconstructable catastrophic C3 comminution: Total Elbow Arthroplasty (TEA)",
                    "th": "• ทางเข้าผ่าตัดมาตรฐาน: ตัดกระดูกรูปตัววี Chevron Trans-Olecranon Osteotomy เพื่อเปิดเห็นผิวข้อได้ 360 องศา\n• ขั้นตอนที่ 1: จัดเรียงผิวข้อ Trochlea และ Capitellum ให้เรียบสนิท ยึดด้วย Lag screws แปลง C เป็น A\n• ขั้นตอนที่ 2: ยึดชิ้นข้อต่อเข้ากับแกนกระดูกด้วยแผ่นเหล็กล็อคคู่ขนาน Dual Parallel Locking Plates (เสาในและเสานอก) โดยขันสกรูยาวไขว้สอดประสานกันที่ส่วนปลาย\n• ขั้นตอนที่ 3: ซ่อมกระดูก Olecranon ด้วย Tension Band Wiring หรือ Olecranon Plate\n• ในผู้สูงอายุ (>65–70 ปี) ที่ผิวข้อแตกละเอียด C3 จนต่อไม่ได้: ผ่าตัดใส่ข้อศอกเทียม Total Elbow Arthroplasty (TEA)"
                  },
                  "rehabilitation": {
                    "en": "• Immediate active and active-assisted elbow ROM from post-op day 1–2; no splinting after 48 hours; lifelong 5 kg lifting restriction for TEA",
                    "th": "• เริ่มฝึกงอเหยียดข้อศอกทันทีตั้งแต่วันที่ 1–2 หลังผ่าตัด ไม่ต้องใส่เฝือกหลัง 48 ชม. (จำกัดการยกของไม่เกิน 5 กก. ตลอดชีวิตในเคส TEA)"
                  },
                  "pitfalls": {
                    "en": "• Inadequate rigid fixation leading to post-operative immobilization and severe elbow stiffness (Normal functional arc = 30°–130°)\n• Ulnar nerve traction/injury — routine subcutaneous anterior transposition recommended",
                    "th": "• การยึดตรึงไม่แข็งแรงพอจนต้องใส่เฝือกหลังผ่าตัด จะทำให้ข้อศอกติดแข็งถาวร (ช่วงการขยับใช้งานปกติ = 30°–130°)\n• การบาดเจ็บของเส้นประสาท Ulnar แนะนำให้ย้ายเส้นประสาทมาไว้ด้านหน้า (Anterior Transposition) เสมอ"
                  }
                }
              },
              "illustrationId": "/images/humerus/ao_13_c.png",
              "xrayDescription": {
                "en": "Complete separation of trochlea/capitellum articular surface from humeral shaft with intercondylar T- or Y-split and variable comminution.",
                "th": "เห็นชิ้นข้อต่อ Trochlea และ Capitellum หลุดแยกขาดจากแกนกระดูกต้นแขนทั้งหมด พร้อมรอยแยกรูปตัว T หรือ Y"
              }
            }
          ]
        }
      ]
    }
  ]
};

