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
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED TREATMENT FOR 1-PART. Sling immobilization for 1-2 weeks, followed by early passive ROM exercises. Excellent outcomes (>90%).",
                  "th": "แนะนำรักษาแบบไม่ผ่าตัดเป็นหลัก ใส่สายคล้องแขน (Sling) 1-2 สัปดาห์ และเริ่มบริหารข้อไหล่แบบผู้ช่วยดึง (Passive ROM)"
                },
                "operative": {
                  "en": "Rarely needed unless GT displacement >5mm causing subacromial impingement.",
                  "th": "แทบไม่ต้องผ่าตัด ยกเว้นชิ้น GT เคลื่อน >5มม."
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
                "preferred": "operative",
                "conservative": {
                  "en": "Only indicated if GT displacement <5mm.",
                  "th": "พิจารณาเฉพาะกรณี GT เคลื่อนตัวน้อยกว่า 5 มม."
                },
                "operative": {
                  "en": "RECOMMENDED FOR DISPLACEMENT >5mm. Open reduction and internal fixation (ORIF) using heavy non-absorbable sutures, suture anchors, or cannulated screws to prevent impingement.",
                  "th": "แนะนำผ่าตัดยึดกระดูก (ORIF) กรณีเคลื่อน >5 มม. ด้วย Suture Anchors หรือ Screw"
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
                "preferred": "operative",
                "conservative": {
                  "en": "Considered in elderly patients with low demand or impacted fractures.",
                  "th": "พิจารณาในผู้สูงอายุที่ใช้งานแขนน้อย หรือรอยหักแบบกดติดกันแน่น"
                },
                "operative": {
                  "en": "RECOMMENDED FOR ACTIVE PATIENTS. Closed or open reduction and internal fixation with PHILOS locking plate or intramedullary nail.",
                  "th": "แนะนำผ่าตัดดามแผ่นเหล็กล็อค PHILOS Locking Plate หรือ Intramedullary Nail"
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
                "preferred": "operative",
                "conservative": {
                  "en": "Not recommended in active patients.",
                  "th": "ไม่แนะนำในผู้ป่วยทั่วไป"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. Open reduction and internal fixation (ORIF) with locking plate (PHILOS) and heavy tuberosity suture reconstruction. Hemiarthroplasty considered in elderly.",
                  "th": "แนะนำผ่าตัด (ORIF) ยึดแผ่นเหล็กล็อค PHILOS ร่วมกับรัดเย็บเอ็นผูกกระดูก GT"
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
                "preferred": "operative",
                "conservative": {
                  "en": "Not recommended.",
                  "th": "ไม่แนะนำ"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. ORIF with locking plate and lesser tuberosity suture repair.",
                  "th": "แนะนำผ่าตัด ORIF ยึดแผ่นเหล็กล็อคและเย็บซ่อมเอ็น LT"
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
                "preferred": "operative",
                "conservative": {
                  "en": "Reserved ONLY for non-ambulatory, medically fragile elderly patients.",
                  "th": "พิจารณาเฉพาะในผู้สูงอายุที่ป่วยหนักและไม่สามารถเดินได้แล้ว"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. Reverse Total Shoulder Arthroplasty (RTSA) or Hemiarthroplasty in elderly; ORIF with locking plate + bone graft in young active patients.",
                  "th": "แนะนำผ่าตัดเปลี่ยนข้อไหล่เทียม (Reverse TSA / Hemiarthroplasty) ในผู้สูงอายุ หรือ ORIF ในผู้ป่วยอายุน้อย"
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
                "preferred": "operative",
                "conservative": {
                  "en": "May be attempted in low-demand patients with minimal tuberosity displacement (<5mm).",
                  "th": "อาจพิจารณาในผู้ป่วยใช้งานน้อยที่ชิ้น Tuberosity เคลื่อน <5มม."
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. ORIF with gentle head elevation, bone grafting, and PHILOS locking plate.",
                  "th": "แนะนำผ่าตัด ORIF งัดจัดหัวกระดูกขึ้น ใส่กระดูกปลูก และดามแผ่นเหล็กล็อค PHILOS"
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
                "preferred": "operative",
                "conservative": {
                  "en": "Not recommended.",
                  "th": "ไม่แนะนำ"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. Surgical reconstruction or Reverse Total Shoulder Arthroplasty.",
                  "th": "แนะนำผ่าตัด ORIF หรือผ่าตัดเปลี่ยนข้อไหล่เทียม (Reverse TSA)"
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
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED INITIAL TREATMENT. Coaptation splint initially, converted to a functional Sarmiento brace at 1-2 weeks. High healing rate (>90%).",
                  "th": "แนะนำรักษาแบบไม่ผ่าตัดเป็นอันดับแรก ใส่ Coaptation splint ชั่วคราว แล้วเปลี่ยนเป็น Sarmiento Functional Brace ที่ 1-2 สัปดาห์ อัตรากระดูกติดสูง >90%"
                },
                "operative": {
                  "en": "Indicated if unacceptable alignment (AP >20°, Varus/Valgus >15°, shortening >3cm), open fracture, or polytrauma. ORIF with locking plate or intramedullary nail.",
                  "th": "พิจารณาผ่าตัดหากมุมผิดรูปเกินเกณฑ์ยอมรับ แผลเปิด หรือผู้ป่วยบาดเจ็บหลายระบบ (Polytrauma) ดามแผ่นเหล็กล็อคหรือใส่ตะมอยดามกระดูก (IM Nail)"
                }
              },
              "illustrationId": "/images/humerus_shaft/proximal_13.png",
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
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED TREATMENT. Functional Sarmiento bracing with gravity-assisted reduction. Pendulum exercises initiated early. Excellent union rate (>95%).",
                  "th": "แนะนำรักษาแบบไม่ผ่าตัด ใช้เฝือกพลาสติก Sarmiento Brace อาศัยแรงโน้มถ่วงช่วยจัดแนว เริ่มฝึกแกว่งแขน (Pendulum) ได้เร็ว อัตรากระดูกติดสูงถึง 95%"
                },
                "operative": {
                  "en": "Indicated for floating elbow, open fracture, vascular injury, or nonunion. ORIF with 4.5mm narrow LC-DCP / compression plate.",
                  "th": "ผ่าตัดเฉพาะกรณี Floating elbow, แผลเปิด, เส้นเลือดบาดเจ็บ หรือกระดูกไม่ติด ดามด้วยแผ่นเหล็ก 4.5mm LC-DCP"
                }
              },
              "illustrationId": "/images/humerus_shaft/middle_13.png",
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
                "preferred": "conservative",
                "conservative": {
                  "en": "INDICATED FOR CLOSED FRACTURE WITH INTACT NERVE OR CLOSED PALSY. Sarmiento bracing + Cock-up wrist splint. Observe radial nerve recovery for 3-4 months (90% spontaneous resolution).",
                  "th": "แนะนำรักษาแบบไม่ผ่าตัดเป็นอันดับแรกสำหรับ Closed fracture แม้มี Radial Nerve Palsy ร่วมด้วย ใส่ Sarmiento Brace + Cock-up splint เฝ้าระวัง 3-4 เดือน (90% หายเอง)"
                },
                "operative": {
                  "en": "RECOMMENDED IF OPEN FRACTURE, SECONDARY PALSY AFTER REDUCTION, OR UNREDUCIBLE. Surgical exploration of radial nerve and ORIF with distal anatomical locking plate.",
                  "th": "แนะนำผ่าตัดเปิดสำรวจเส้นประสาท (Nerve Exploration) และดามแผ่นเหล็ก (ORIF) กรณี: แผลหักเปิด (Open fracture), เส้นประสาทเป็นอัมพาตหลังดึงจัดกระดูก (Secondary palsy) หรือไม่สามารถดึงกระดูกเข้าเกณฑ์ได้"
                }
              },
              "illustrationId": "/images/humerus_shaft/holstein_lewis.png",
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
            "en": "AO/OTA Classification for Distal Humerus Fractures (13-A, 13-B, 13-C)",
            "th": "ระบบจำแนกการหักของกระดูกต้นแขนส่วนปลาย AO/OTA (13-A, 13-B, 13-C)"
          },
          "description": {
            "en": "Comprehensive classification system for distal humerus fractures based on articular involvement:\n• Type 13-A: Extra-articular fractures (Spares the joint surface)\n• Type 13-B: Partial articular fractures (Part of articular surface remains attached to shaft)\n• Type 13-C: Complete articular fractures (Joint surface completely separated from shaft)",
            "th": "ระบบจำแนกมาตรฐานหลัก AO/OTA สำหรับการหักของกระดูกต้นแขนส่วนปลาย แบ่งตามการพาดผ่านข้อต่อข้อศอก:\n• Type 13-A: Extra-articular (หักนอกข้อต่อ)\n• Type 13-B: Partial articular (หักเข้าข้อต่อบางส่วน)\n• Type 13-C: Complete articular (หักเข้าข้อต่อสมบูรณ์ ชิ้นข้อต่อหลุดแยกจากแกนกระดูกทั้งหมด)"
          },
          "concept": {
            "title": {
              "en": "AO/OTA 13 Distal Humerus Clinical Concept",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ AO/OTA 13 Distal Humerus"
            },
            "corePrinciple": {
              "en": "Classifies distal humerus fractures based on articular involvement (13-A extra-articular, 13-B partial articular, 13-C complete articular). Restoration of articular congruity (< 1-2 mm step-off) and rigid dual-column stability are essential for early joint mobilization.",
              "th": "จำแนกกระดูกต้นแขนส่วนปลายหักตามการพาดผ่านข้อต่อ (13-A เหนือข้อ, 13-B เข้าข้อบางส่วน, 13-C เข้าข้อสมบูรณ์) หัวใจหลักคือการจัดเรียงผิวข้อให้เรียบเสมอ (< 1-2 มม.) และการยึดตรึงเสากระดูกคู่ (Dual column) ให้แข็งแรงเพื่อเริ่มบริหารข้อศอกได้ทันที"
            },
            "rules": [
              {
                "en": "13-A (Extra-articular): Fracture line spares the articular surface of distal humerus.",
                "th": "13-A (Extra-articular): รอยหักอยู่นอกข้อต่อ ผิวข้อศอกสมบูรณ์ไม่เสียหาย"
              },
              {
                "en": "13-B (Partial Articular): Part of the articular surface remains attached to the humeral shaft (B1 lateral condyle, B2 medial condyle, B3 coronal shear / capitellum).",
                "th": "13-B (Partial Articular): รอยหักเข้าข้อบางส่วน โดยชิ้นผิวข้อบางส่วนยังคงเชื่อมต่อกับแกนกระดูกต้นแขน (B1 ปุ่มนอก, B2 ปุ่มใน, B3 รอยหักเฉือนแนว Coronal)"
              },
              {
                "en": "13-C (Complete Articular): Articular surface is completely separated from the humeral shaft (C1 simple articular & metaphyseal, C2 simple articular comminuted metaphyseal, C3 comminuted articular).",
                "th": "13-C (Complete Articular): ผิวข้อหลุดแยกจากแกนกระดูกต้นแขนสมบูรณ์ (C1 เข้าข้อเรียบ, C2 Metaphysis แตกละเอียด, C3 เข้าข้อแตกละเอียด)"
              }
            ],
            "clinicalSignificance": [
              {
                "en": "13-A (Extra-articular): Operative indication for displaced fractures using dual locking plates (parallel or orthogonal 90-90 architecture). Conservative long arm splint for non-displaced.",
                "th": "13-A: ผ่าตัด ORIF ยึดแผ่นเหล็กล็อคคู่ (Dual Locking Plates) ในชนิดเคลื่อนตัว; ใส่เฝือกอ่อนแขนยาวในชนิดไม่เคลื่อนตัว"
              },
              {
                "en": "13-B (Partial Articular): ORIF with headless compression screws (Herbert screws) for B3 coronal shear or condylar plates for B1/B2. Articular step-off must be < 1-2 mm.",
                "th": "13-B: ผ่าตัด ORIF จัดผิวข้อให้เรียบเสมอ (< 1-2 มม.) ยึดด้วย Headless compression screw สำหรับ B3 coronal shear หรือ Condylar plate สำหรับ B1/B2"
              },
              {
                "en": "13-C (Complete Articular): Trans-olecranon osteotomy approach + dual anatomical parallel locking plates to allow immediate active ROM. In elderly low-demand patients with severe C3 comminution -> Total Elbow Arthroplasty (TEA).",
                "th": "13-C: ผ่าตัดเปิดผ่าน Olecranon osteotomy + ดามแผ่นเหล็กล็อคคู่ขนาน (Parallel Plating) เพื่อยึดแน่นที่สุดให้ทำ ROM ได้ทันทีหลังผ่าตัด ในผู้สูงอายุที่แตกละเอียด C3 พิจารณาทำ Total Elbow Arthroplasty (TEA)"
              }
            ]
          },
          "investigations": [
            {
              "name": "AP Elbow View",
              "details": {
                "en": "Standard Anteroposterior view of the elbow in full extension to evaluate distal humerus alignment, condylar columns, and articular displacement.",
                "th": "ภาพเอกซเรย์ข้อศอกท่าหน้าหลัง (AP) เหยียดศอกเต็มที่ ประเมินแนวเสากระดูก Condyle และการเคลื่อนในข้อ"
              },
              "imageUrl": "/images/investigations/forearm/ap_elbow_view.jpg"
            },
            {
              "name": "Lateral Elbow View",
              "details": {
                "en": "Standard 90-degree flexed lateral view to assess anterior/posterior condylar displacement, anterior humeral line, and tear-drop angle.",
                "th": "ภาพเอกซเรย์ข้อศอกท่าด้านข้าง (Lateral) งอศอก 90 องศา ประเมินมุมองศาและแนวเคลื่อนหน้าหลัง"
              },
              "imageUrl": "/images/investigations/forearm/lateral_elbow_view.jpg"
            },
            {
              "name": "Traction / Motion AP View & CT 3D",
              "details": {
                "en": "Traction radiograph or CT scan with 3D reconstruction indispensable for planning complex Type C articular reconstruction.",
                "th": "เอกซเรย์ท่าดึงกระดูก (Traction View) หรือ CT Scan 3D สำคัญอย่างยิ่งในการวางแผนผ่าตัดจัดข้อ Type C"
              }
            }
          ],
          "types": [
            {
              "type": "Type 13-A",
              "name": {
                "en": "Type 13-A: Extra-articular Fractures",
                "th": "Type 13-A: Extra-articular (รอยหักอยู่นอกข้อต่อทั้งหมด)"
              },
              "description": {
                "en": "Extra-articular distal humerus fracture; joint surface remains completely intact and uninvolved.\n• A1: Extra-articular epicondylar avulsion (Medial/Lateral epicondyle)\n• A2: Extra-articular simple metaphyseal (Supracondylar simple)\n• A3: Extra-articular comminuted metaphyseal (Supracondylar comminuted)",
                "th": "รอยหักอยู่นอกข้อต่อกระดูกต้นแขนส่วนปลาย ผิวข้อต่อศอกสมบูรณ์ไม่เสียหาย\n• A1: Avulsion หักกะเทาะปุ่มกระดูก Epicondyle\n• A2: Metaphyseal simple รอยหักเหนือข้อแบบเรียบ (Supracondylar)\n• A3: Metaphyseal comminuted รอยหักเหนือข้อแบบแตกละเอียด"
              },
              "moi": {
                "en": "Fall on out-stretched hand (FOOSH) with elbow extended or direct blow to distal humerus.",
                "th": "ล้มมือยันพื้นขณะศอกเหยียด หรือแรงกระแทกโดยตรงเข้าเหนือข้อศอก"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "Indicated ONLY for non-displaced A2 supracondylar fractures in low-demand patients. Long arm splint/cast for 3-4 weeks.",
                  "th": "พิจารณาเฉพาะรอยหักไม่เคลื่อนตัว (A2) ใส่เฝือกยาวดามแขน 3-4 สัปดาห์"
                },
                "operative": {
                  "en": "RECOMMENDED FOR DISPLACED FRACTURES. Open reduction and internal fixation (ORIF) with dual anatomical locking plates (parallel or orthogonal 90-90 configuration).",
                  "th": "แนะนำผ่าตัด ORIF ยึดแผ่นเหล็กล็อคคู่ (Dual Locking Plates) ในทิศทางขนานหรือตั้งฉาก 90-90"
                }
              },
              "illustrationId": "/images/humerus/ao_13_a.png",
              "xrayDescription": {
                "en": "Metaphyseal or epicondylar fracture line sparing the trochlea and capitellum articular surfaces.",
                "th": "เห็นรอยหักบริเวณเหนือข้อหรือปุ่ม Epicondyle โดยผิวข้อ Trochlea และ Capitellum สมบูรณ์ดี"
              }
            },
            {
              "type": "Type 13-B",
              "name": {
                "en": "Type 13-B: Partial Articular Fractures",
                "th": "Type 13-B: Partial Articular (รอยหักเข้าข้อต่อบางส่วน)"
              },
              "description": {
                "en": "Partial articular fracture; part of the articular surface remains continuously attached to the main humeral shaft column.\n• B1: Lateral sagittal fracture (Lateral condyle / Capitellum)\n• B2: Medial sagittal fracture (Medial condyle / Trochlea)\n• B3: Frontal / Coronal plane fracture (Capitellum / Trochlea coronal shear fracture)",
                "th": "รอยหักพาดผ่านเข้าข้อต่อบางส่วน โดยชิ้นข้อต่อส่วนหนึ่งยังคงยึดติดกับแกนกระดูกต้นแขนหลัก\n• B1: Sagittal ด้านนอก (Lateral condyle)\n• B2: Sagittal ด้านใน (Medial condyle)\n• B3: Coronal Shear หักเฉือนผิวข้อด้านหน้า (Capitellum/Trochlea)"
              },
              "moi": {
                "en": "Direct shear force transmitted through the radial head or olecranon into the distal humeral articular surface.",
                "th": "แรงเฉือนส่งผ่านจากหัวกระดูก Radius หรือ Olecranon กระแทกเข้าผิวข้อปลายกระดูกต้นแขน"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "Not recommended for displaced fractures. High risk of articular step-off, stiffness, and early post-traumatic arthritis.",
                  "th": "ไม่แนะนำในชนิดเคลื่อนตัว เสี่ยงต่อข้อศอกติดแข็งและข้อเสื่อมรุนแรง"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. Anatomical ORIF with countersunk headless compression screws (Herbert screws) for B3 coronal shear or condylar locking plates for B1/B2.",
                  "th": "แนะนำผ่าตัด ORIF จัดผิวข้อให้เรียบสนิท ยึดสกรูจม Headless compression screws สำหรับ B3 หรือแผ่นเหล็ก Condylar plate สำหรับ B1/B2"
                }
              },
              "illustrationId": "/images/humerus/ao_13_b.png",
              "xrayDescription": {
                "en": "Articular fracture line extending through capitellum or trochlea with part of the condyle connected to shaft.",
                "th": "เห็นรอยหักพาดผ่านผิวข้อ Capitellum หรือ Trochlea โดยมีส่วนหนึ่งยึดติดแกนกระดูก"
              }
            },
            {
              "type": "Type 13-C",
              "name": {
                "en": "Type 13-C: Complete Articular Fractures",
                "th": "Type 13-C: Complete Articular (รอยหักเข้าข้อต่อสมบูรณ์ - Bicondylar)"
              },
              "description": {
                "en": "Complete articular disruption; the articular block is completely disconnected and separated from the main humeral shaft.\n• C1: Simple articular & simple metaphyseal (Classic T- or Y-type fracture)\n• C2: Simple articular & comminuted metaphyseal\n• C3: Comminuted articular & comminuted metaphyseal (Severe articular crush)",
                "th": "รอยหักเข้าข้อต่อสมบูรณ์ ชิ้นข้อต่อทั้งหมดหลุดแยกออกจากแกนกระดูกหลักอย่างสิ้นเชิง (Bicondylar Disruption)\n• C1: Simple articular & simple metaphyseal (รูป T หรือ Y เรียบง่าย)\n• C2: Simple articular & comminuted metaphyseal (ผิวข้อเรียบ แต่เหนือข้อแตกละเอียด)\n• C3: Comminuted articular & comminuted metaphyseal (แตกละเอียดทั้งผิวข้อและเหนือข้อ)"
              },
              "moi": {
                "en": "High-energy motor vehicle accident, severe fall, or direct wedge impact of the olecranon driving between the two condyles.",
                "th": "อุบัติเหตุทางถนนพลังงานสูง หรือปลายกระดูก Olecranon ตอกอัดแทรกตรงกลางระหว่างสอง Condyle"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "CONTRAINDICATED in functional patients. Results in severe flail elbow or painful ankylosis.",
                  "th": "ห้ามใช้การรักษาด้วยวิธีนี้ ทำให้ข้อศอกหลุดพิการและติดแข็งปวดรุนแรง"
                },
                "operative": {
                  "en": "MANDATORY SURGICAL RECONSTRUCTION. Olecranon osteotomy approach + dual pre-contoured anatomical locking plates (Parallel plating architecture) for stable construct permitting immediate post-op early active ROM exercises. Total Elbow Arthroplasty (TEA) for unreconstructable C3 in elderly.",
                  "th": "จำเป็นต้องผ่าตัดจัดข้อโดยด่วน! เปิดผ่าตัดผ่าน Olecranon osteotomy + ดามแผ่นเหล็กล็อคคู่ขนาน (Parallel Plating) เพื่อยึดให้แน่นที่สุดให้ฝึกขยับข้อศอกได้ทันทีหลังผ่าตัด (พิจารณาผ่าตัดใส่ข้อศอกเทียม TEA ในผู้สูงอายุที่แตกละเอียด C3)"
                }
              },
              "illustrationId": "/images/humerus/ao_13_c.png",
              "xrayDescription": {
                "en": "Complete separation of trochlear and capitellar articular block from shaft with variable articular and metaphyseal comminution.",
                "th": "เห็นชิ้นข้อต่อ Trochlea/Capitellum หลุดแยกขาดจากแกนกระดูกต้นแขนทั้งหมด"
              }
            }
          ]
        }
      ]
    }
  ]
};
