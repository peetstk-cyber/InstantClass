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
      "regionConcept": {
        "physicalExam": [
          {
            "sign": "Chest Wall & Posterior Scapular Inspection",
            "positive": {
              "en": "Ecchymosis, abrasions, chest wall asymmetry, or localized tenderness over the infraspinous/supraspinous fossa.",
              "th": "พบรอยเขียวช้ำ รอยถลอก ผนังอกผิดรูป หรือกดเจ็บเฉพาะจุดบนลำตัวกระดูกสะบัก"
            }
          },
          {
            "sign": "Scapulothoracic Motion Pain",
            "positive": {
              "en": "Severe pain during shoulder shrugging or arm abduction due to movement of fractured scapular blade against rib cage.",
              "th": "ปวดรุนแรงขณะยักไหล่หรือกางแขน จากการขยับถูของแผ่นสะบักหักกับซี่โครง"
            }
          },
          {
            "sign": "Pulmonary & Chest Wall Auscultation",
            "positive": {
              "en": "Decreased breath sounds, subcutaneous emphysema, or rib cage crepitus indicating associated chest trauma.",
              "th": "เสียงหายใจลดลง พบลมใต้ผิวหนัง (Subcutaneous emphysema) หรือเสียงกรอบแกรบซี่โครง แสดงถึงการบาดเจ็บในช่องอกร่วมด้วย"
            }
          }
        ],
        "acceptableAlignment": [
          {
            "parameter": {
              "en": "Body Translation / Step-off",
              "th": "ระยะเกยเคลื่อนตัวของลำตัวสะบัก"
            },
            "threshold": "< 20 mm",
            "note": {
              "en": "Translation >20mm may cause painful scapulothoracic grinding/crepitus.",
              "th": "ระยะเกยเคลื่อน > 20 มม. อาจทำให้เกิดเสียงและอาการปวดจากการขูดกับซี่โครง"
            }
          },
          {
            "parameter": {
              "en": "Angular Deformity",
              "th": "มุมโก่งงอของแผ่นสะบัก"
            },
            "threshold": "< 35° - 45°",
            "note": {
              "en": "Significant angulation (>45°) can alter rotator cuff lever arms.",
              "th": "มุมโก่งงอมาก (>45 องศา) อาจส่งผลเสียต่อแรงดึงของกล้ามเนื้อ Rotator cuff"
            }
          }
        ],
        "redFlags": [
          {
            "en": "Associated major chest trauma (pneumothorax, hemothorax, multiple rib fractures, flail chest) present in >80% of scapular body fractures.",
            "th": "ภาวะบาดเจ็บรุนแรงในช่องอกร่วม (ลมรั่วในช่องอก, เลือดออกช่องอก, ซี่โครงหักหลายท่อน) พบได้มากกว่า 80% ของผู้ป่วยสะบักหัก"
          },
          {
            "en": "Subclavian or axillary vascular disruption following severe blunt trauma.",
            "th": "การฉีกขาดของหลอดเลือดใหญ่ Subclavian หรือ Axillary หลังอุบัติเหตุทับบดรุนแรง"
          }
        ],
        "associatedInjuries": [
          {
            "injury": {
              "en": "Ipsilateral Rib Fractures / Flail Chest",
              "th": "ซี่โครงหักฝั่งเดียวกัน / ภาวะอกรวน (Flail chest)"
            }
          },
          {
            "injury": {
              "en": "Pneumothorax / Hemothorax / Pulmonary Contusion",
              "th": "ลมรั่วช่องอก / เลือดออกช่องอก / ปอดช้ำ"
            }
          },
          {
            "injury": {
              "en": "Clavicle Shaft Fracture",
              "th": "กระดูกไหปลาร้าหักร่วม"
            }
          }
        ],
        "clinicalPearls": [
          {
            "en": "Scapular body fractures heal exceptionally well conservatively (>99% union) due to extensive muscle envelope (infraspinatus/subscapularis splinting).",
            "th": "กระดูกสะบักส่วนลำตัวหักติดได้ดีมากโดยไม่ต้องผ่าตัด (>99%) เนื่องจากมีชั้นกล้ามเนื้อหนาแน่นโอบอุ้มดามไว้"
          },
          {
            "en": "Surgical fixation is rarely indicated; reserved for extreme body translation (>2cm) causing painful scapulothoracic crepitus/grinding.",
            "th": "การผ่าตัดมีข้อบ่งชี้น้อยมาก พิจารณาเฉพาะกรณีเกยเคลื่อนตัวรุนแรง (>2 ซม.) ที่ทำให้เกิดอาการปวดขูดกับซี่โครง"
          },
          {
            "en": "Because scapular body fracture requires high-energy trauma, perform a routine systemic trauma evaluation (pan-scan) to rule out occult chest injuries.",
            "th": "เนื่องจากสะบักหักต้องใช้แรงกระแทกพลังงานสูงมาก ต้องประเมินการบาดเจ็บทั่วร่างกาย (Trauma evaluation) เพื่อหาบาดเจ็บในช่องอกเสมอ"
          }
        ]
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
          "concept": {
            "title": {
              "en": "Scapular Body Anatomical Concept",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ Scapular Body Fractures"
            },
            "corePrinciple": {
              "en": "Over 90% of scapular body fractures are non-displaced and heal successfully without surgery because rich surrounding muscular envelopes (Infraspinatus, Supraspinatus, Subscapularis) provide natural biological splinting and excellent vascularity.",
              "th": "กระดูกตัวสะบักหักมากกว่า 90% ไม่เคลื่อนตัวและติดได้เองโดยไม่ต้องผ่าตัด เนื่องจากชั้นกล้ามเนื้อหนาแน่นรอบสะบักทำหน้าที่เป็นเฝือกธรรมชาติและมีเลือดมาเลี้ยงสูงมาก"
            },
            "rules": [
              {
                "en": "Non-displaced / Minimally Displaced Body Fracture: Displacement <1 cm AND angulation <45°.",
                "th": "รอยหักไม่เคลื่อนหรือเคลื่อนตัวน้อย: เคลื่อนตัว <1 ซม. และเอียงโก่ง <45°"
              },
              {
                "en": "Severely Displaced Body Fracture: Translation >1-2 cm, apex-dorsal angulation >45°, or lateral border step-off causing impingement.",
                "th": "รอยหักเคลื่อนตัวมาก: เคลื่อนตัว >1-2 ซม., มุมเอียงโก่ง >45°, หรือขอบด้านนอกเกยกันจนชนขัด"
              }
            ],
            "clinicalSignificance": [
              {
                "en": "Non-displaced Body Fracture: Conservative treatment with arm sling for 2-3 weeks, followed by early active pendulum exercises (excellent functional outcomes >90%).",
                "th": "รอยหักไม่เคลื่อน: รักษาแบบไม่ผ่าตัด ใส่ Sling 2-3 สัปดาห์ แล้วเริ่มกายภาพ pendulum exercise (ผลดี >90%)"
              },
              {
                "en": "Severely Displaced Fracture: Operative ORIF with contour locking reconstruction plates via Judet posterior approach to prevent painful scapulothoracic dyskinesis.",
                "th": "รอยหักเคลื่อนตัวมาก: ผ่าตัด ORIF ดามแผ่นเหล็กล็อคผ่านทางผ่าตัดด้านหลัง (Judet posterior approach) ป้องกันภาวะสะบักเคลื่อนไหวผิดปกติและปวดเรื้อรัง"
              },
              {
                "en": "CRITICAL PITFALL: Scapular body fractures result from high-energy blunt trauma. ALWAYS rule out associated life-threatening thoracic injuries (Pneumothorax, Hemothorax, Pulmonary Contusion, Rib Fractures present in >80%!).",
                "th": "ข้อควรระวังสำคัญ: กระดูกสะบักหักเกิดจากแรงกระแทกพลังงานสูงมาก! ต้องตรวจหาภาวะบาดเจ็บในช่องอกที่อันตรายถึงชีวิตเสมอ (ลมในช่องอก, เลือดออกในช่องอก, ปอดบวมช้ำ พบร่วม >80%!)"
              }
            ]
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
              "illustrationId": "",
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
              "illustrationId": "",
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
              "illustrationId": "",
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
      "regionConcept": {
        "physicalExam": [
          {
            "sign": "Shoulder Asymmetry & Drooping",
            "positive": {
              "en": "Inferior displacement and drooping of the affected shoulder girdle relative to contralateral side.",
              "th": "หัวไหล่ข้างที่เจ็บตกทรุดต่ำลงเมื่อเทียบกับข้างปกติ"
            }
          },
          {
            "sign": "Palpation of Scapular Neck & Clavicle",
            "positive": {
              "en": "Focal bony tenderness at the posterior aspect of shoulder neck and along clavicle shaft.",
              "th": "กดเจ็บเฉพาะจุดบริเวณด้านหลังคอสะบัก และตามแนวแกนกระดูกไหปลาร้า"
            }
          },
          {
            "sign": "Brachial Plexus & Axillary Nerve Screen",
            "positive": {
              "en": "Sensory deficit over lateral deltoid (regimental badge area) or weakness in shoulder abduction/elbow flexion.",
              "th": "ชาบริเวณหัวไหล่ด้านนอก หรือกล้ามเนื้อกางไหล่/งอศอกอ่อนแรง แสดงถึงประสาท Brachial plexus/Axillary nerve บาดเจ็บ"
            }
          }
        ],
        "acceptableAlignment": [
          {
            "parameter": {
              "en": "Translational Displacement",
              "th": "ระยะเกยเคลื่อนตัวของคอสะบัก"
            },
            "threshold": "< 10 mm (1 cm)",
            "note": {
              "en": "Displacement >1cm alters rotator cuff mechanics and is an indication for ORIF.",
              "th": "การเคลื่อนตัว >1 ซม. รบกวนระบบกล้ามเนื้อเอ็นหมุนข้อไหล่ เป็นข้อบ่งชี้ผ่าตัด"
            }
          },
          {
            "parameter": {
              "en": "Scapular Neck Angulation",
              "th": "มุมเอียงบิดของคอสะบัก"
            },
            "threshold": "< 40°",
            "note": {
              "en": "Angulation >40° causes rotator cuff weakness and impingement.",
              "th": "มุมเอียง >40 องศา ทำให้เอ็นไหล่อ่อนแรงและเกิดการกดทับ"
            }
          },
          {
            "parameter": {
              "en": "Glenopolar Angle (GPA)",
              "th": "มุม Glenopolar Angle (GPA)"
            },
            "threshold": "> 22° (Normal 30° - 45°)",
            "note": {
              "en": "GPA <22° on AP/3D CT predicts poor functional outcome without ORIF.",
              "th": "มุม GPA <22 องศาในเอกซเรย์/CT ทำนายผลการรักษาที่ไม่ดีหากไม่ได้รับการผ่าตัด"
            }
          }
        ],
        "redFlags": [
          {
            "en": "Double disruption of Superior Suspensory Shoulder Complex (SSSC ring) resulting in 'Floating Shoulder', leading to severe mechanical collapse if untreated.",
            "th": "การบาดเจ็บสองจุดของห่วงยึดข้อไหล่ (SSSC) ทำให้เกิดภาวะ 'Floating Shoulder' นำไปสู่ข้อไหล่ตกทรุดพังถาวรหากไม่ได้รับการผ่าตัดยึดตรึง"
          },
          {
            "en": "Brachial plexus traction / compression palsy causing upper extremity paralysis.",
            "th": "ภาวะเส้นประสาท Brachial plexus ถูกดึงรั้งหรือกดทับอย่างรุนแรง ทำให้แขนอัมพาต"
          }
        ],
        "associatedInjuries": [
          {
            "injury": {
              "en": "Ipsilateral Clavicle Shaft Fracture (Floating Shoulder)",
              "th": "กระดูกไหปลาร้าหักฝั่งเดียวกัน (Floating Shoulder)"
            }
          },
          {
            "injury": {
              "en": "Acromioclavicular (AC) Joint Dislocation",
              "th": "ข้อต่อ AC เคลื่อนหลุด"
            }
          },
          {
            "injury": {
              "en": "Brachial Plexus / Axillary Nerve Injury",
              "th": "เส้นประสาท Brachial Plexus หรือ Axillary Nerve บาดเจ็บ"
            }
          }
        ],
        "clinicalPearls": [
          {
            "en": "Isolated scapular neck fractures have an intact clavicle/AC ring and heal well non-operatively with arm sling immobilization.",
            "th": "รอยหักคอสะบักเดี่ยวๆ โดยที่ไหปลาร้าและข้อ AC ปกติ จะติดได้ดีมากโดยไม่ต้องผ่าตัด ใส่สายคล้องแขนดามไว้"
          },
          {
            "en": "Glenopolar Angle (GPA) < 22° or neck translation > 1 cm / angulation > 40° are key surgical thresholds for ORIF.",
            "th": "มุม Glenopolar Angle (GPA) < 22 องศา หรือเคลื่อนเกย > 1 ซม. / เอียง > 40 องศา เป็นเกณฑ์สำคัญในการผ่าตัด ORIF"
          },
          {
            "en": "In Floating Shoulder injuries, ORIF of the clavicle alone often restores SSSC ring stability, reducing the scapular neck displacement.",
            "th": "ในภาวะ Floating Shoulder การผ่าตัดดามแผ่นเหล็กกระดูกไหปลาร้าเพียงอย่างเดียวมักช่วยดึงให้วง SSSC และคอสะบักกลับเข้าตำแหน่งได้ดี"
          }
        ]
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
          "concept": {
            "title": {
              "en": "Scapular Neck & Floating Shoulder Concept",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ Scapular Neck & Floating Shoulder"
            },
            "corePrinciple": {
              "en": "Based on the Superior Suspensory Shoulder Complex (SSSC) double-ring concept. Single disruption (isolated neck fracture) is stable; DOUBLE disruption (neck fracture + clavicle fracture or AC joint disruption) creates a mechanically unstable 'Floating Shoulder'.",
              "th": "อิงตามแนวคิดวงแหวนห่วงยึดข้อไหล่ส่วนบน (Superior Suspensory Shoulder Complex - SSSC) การขาด 1 จุด (คอสะบักหักเดี่ยว) ยังคงมั่นคง แต่การขาด 2 จุด (คอสะบักหัก + ไหปลาร้าหัก/ข้อ AC หลุด) จะเกิดภาวะ 'Floating Shoulder' ที่ไม่มั่นคง"
            },
            "rules": [
              {
                "en": "Isolated Scapular Neck Fracture: Single SSSC disruption. Stable if displacement <1 cm AND Glenoid Neck Angulation <40°.",
                "th": "คอสะบักหักเดี่ยวๆ (Isolated Neck Fx): SSSC ขาด 1 จุด มั่นคงหากเคลื่อนตัว <1 ซม. และมุมเอียง <40°"
              },
              {
                "en": "True Floating Shoulder: Double SSSC disruption (Scapular neck fracture + ipsilateral Clavicle fracture OR AC dislocation).",
                "th": "Floating Shoulder แท้จริง: SSSC ขาด 2 จุด (คอสะบักหัก + ไหปลาร้าหักข้างเดียวกัน หรือ ข้อ AC หลุด)"
              },
              {
                "en": "Glenopolar Angle (GPA): Normal range 30°-45°. GPA <22° on 3D CT indicates severe scapular rotation and poor clinical outcome.",
                "th": "มุม Glenopolar Angle (GPA): ปกติ 30°-45°; ค่า GPA <22° ใน 3D CT บ่งชี้ว่ามุมสะบักเอียงรุนแรง พยากรณ์โรคไม่ดี"
              }
            ],
            "clinicalSignificance": [
              {
                "en": "Isolated Neck Fracture (Displacement <1 cm, Angulation <40°): Conservative management with sling and early ROM exercises.",
                "th": "คอสะบักหักเดี่ยว (เคลื่อน <1 ซม., เอียง <40°): รักษาแบบไม่ผ่าตัด ใส่ Sling แล้วเริ่มทำกายภาพ"
              },
              {
                "en": "Floating Shoulder (Minimal Displacement <1 cm): Trial of conservative management with serial X-rays.",
                "th": "Floating Shoulder (เคลื่อนตัวน้อย <1 ซม.): ลองรักษาแบบไม่ผ่าตัดพร้อมติดตามเอกซเรย์ถี่ๆ"
              },
              {
                "en": "Floating Shoulder with Severe Displacement (>1 cm neck displacement, >40° angulation, GPA <22°, or >1.5 cm clavicle shortening): Surgical ORIF of Clavicle AND/OR Scapular Neck mandatory to restore SSSC integrity.",
                "th": "Floating Shoulder เคลื่อนตัวมาก (คอสะบักเคลื่อน >1 ซม., เอียง >40°, GPA <22°, หรือไหปลาร้าสั้น >1.5 ซม.): จำเป็นต้องผ่าตัด ORIF ยึดไหปลาร้า และ/หรือ คอสะบัก เพื่อคืนความมั่นคง"
              },
              {
                "en": "CRITICAL PITFALL: Beware of pseudo-floating shoulder images where coracoclavicular ligaments remain intact; assess true stability using 3D CT scan.",
                "th": "ข้อควรระวังสำคัญ: ระวังภาวะ Floating shoulder เทียมที่ภาพ X-ray ดูเหมือนหักสองจุดแต่เอ็นยึด CC ยังสมบูรณ์ ให้ประเมินความมั่นคงที่แท้จริงด้วย 3D CT"
              }
            ]
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
              "illustrationId": "",
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
              "illustrationId": "",
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
              "illustrationId": "",
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
      "regionConcept": {
        "physicalExam": [
          {
            "sign": "Glenohumeral Joint Tenderness & Apprehension",
            "positive": {
              "en": "Severe pain on joint line palpation; apprehension or instability feeling on passive humeral movement.",
              "th": "ปวดรุนแรงเมื่อกดแนวข้อไหล่ และผู้ป่วยรู้สึกกังวลกลัวข้อหลุด (Apprehension) ขณะโยกแขน"
            }
          },
          {
            "sign": "Axillary Nerve Neurological Examination",
            "positive": {
              "en": "Sensory numbness over regimental badge area (lateral deltoid) or deltoid muscle weakness.",
              "th": "ชาบริเวณตราเครื่องหมายยศ (Regimental badge area - ไหล่ด้านนอก) หรือกล้ามเนื้อ Deltoid อ่อนแรง"
            }
          },
          {
            "sign": "Active & Passive Range of Motion Test",
            "positive": {
              "en": "Inability to move shoulder due to joint block, step-off friction, or dislocation.",
              "th": "ไม่สามารถขยับข้อไหล่ได้เนื่องจากผิวข้อเกยหรือข้อหลุดล็อค"
            }
          }
        ],
        "acceptableAlignment": [
          {
            "parameter": {
              "en": "Articular Step-off / Gap",
              "th": "ความเหลื่อม/ช่องอ้าของผิวข้อเบ้าไหล่"
            },
            "threshold": "< 4 mm",
            "note": {
              "en": "Glenoid articular step-off >4mm predicts joint instability and post-traumatic arthritis.",
              "th": "ผิวข้อเบ้าไหล่เหลื่อม > 4 มม. นำไปสู่ข้อไหล่ไม่มั่นคงและข้อเสื่อมรุนแรง"
            }
          },
          {
            "parameter": {
              "en": "Glenoid Rim Surface Involvement (Bankart)",
              "th": "ขนาดชิ้นกระดูกขอบเบ้า (Bankart Fracture)"
            },
            "threshold": "< 20% - 25%",
            "note": {
              "en": "Rim avulsion >25% of glenoid width causes recurrent glenohumeral instability requiring operative repair.",
              "th": "ชิ้นกระดูกขอบเบ้าแตก >25% ของความกว้างเบ้า ทำให้ข้อไหล่หลุดซ้ำ ต้องผ่าตัดซ่อมแซม"
            }
          }
        ],
        "redFlags": [
          {
            "en": "Recurrent or irreducible glenohumeral joint dislocation caused by large glenoid rim defect or trapped osteochondral fragment.",
            "th": "ภาวะข้อไหล่หลุดซ้ำหรือไม่สามารถดึงเข้าที่ได้ จากชิ้นขอบเบ้าหลุดขนาดใหญ่หรือมีเศษกระดูกค้างในข้อ"
          },
          {
            "en": "Axillary nerve palsy secondary to glenohumeral dislocation or surgical trauma.",
            "th": "ภาวะเส้นประสาท Axillary nerve อัมพาตตามหลังข้อไหล่หลุด"
          }
        ],
        "associatedInjuries": [
          {
            "injury": {
              "en": "Anterior / Posterior Glenohumeral Dislocation",
              "th": "ข้อไหล่หลุดไปด้านหน้า หรือด้านหลัง"
            }
          },
          {
            "injury": {
              "en": "Rotator Cuff Tendon Tear / Greater Tuberosity Fracture",
              "th": "เอ็นหมุนข้อไหล่ฉีกขาด หรือปุ่มกระดูก Greater tuberosity หัก"
            }
          },
          {
            "injury": {
              "en": "Axillary Nerve Injury",
              "th": "เส้นประสาท Axillary nerve บาดเจ็บ"
            }
          }
        ],
        "clinicalPearls": [
          {
            "en": "Articular step-off > 4 mm or Bankart rim avulsion > 25% of glenoid width are mandatory operative indications.",
            "th": "รอยเหลื่อมผิวข้อ > 4 มม. หรือชิ้นกระดูกขอบเบ้า (Bankart) > 25% เป็นข้อบ่งชี้ผ่าตัดที่สำคัญ"
          },
          {
            "en": "Ideberg classification categorises glenoid fractures into Types I to VI based on fracture line orientation and exit points.",
            "th": "การจำแนก Ideberg แบ่งเบ้าไหล่หักเป็น Type I ถึง VI ตามแนวรอยหักและจุดทะลุออก"
          },
          {
            "en": "Axillary radiograph or CT scan with 3D digital subtraction of humeral head is mandatory to accurately evaluate articular congruity.",
            "th": "ต้องทำเอกซเรย์ท่า Axillary หรือ CT scan 3D ลบภาพหัวกระดูกออก เพื่อประเมินความเรียบของผิวข้อเบ้าไหล่เสมอ"
          }
        ]
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
          "concept": {
            "title": {
              "en": "Ideberg Glenoid Fracture Concept",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ Ideberg Glenoid Classification"
            },
            "corePrinciple": {
              "en": "Categorizes intra-articular glenoid fractures (Types I-VI) based on fracture orientation and extension, where articular step-off ≥2 mm or glenohumeral subluxation serves as the threshold for surgical ORIF.",
              "th": "จำแนกกระดูกแอ่งเบ้าข้อไหล่ (Glenoid) หักเข้าข้อ (Types I-VI) ตามทิศทางรอยหัก โดยใช้เกณฑ์ผิวข้อเหลื่อม (Step-off) ≥2 มม. หรือมีข้อไหล่หลุดเคลื่อนเป็นข้อบ่งชี้ผ่าตัด ORIF"
            },
            "rules": [
              {
                "en": "Type I (Glenoid Rim Avulsion: Ia Anterior, Ib Posterior): Anterior Bankart fragment >25% or posterior fragment >33% causes joint instability.",
                "th": "Type I (ขอบเบ้ากะเทาะ: Ia ด้านหน้า, Ib ด้านหลัง): ชิ้นส่วนขอบหน้า >25% หรือขอบหลัง >33% ส่งผลให้ข้อหลุดหลวม"
              },
              {
                "en": "Type II: Transverse fracture line exiting inferior scapular border.",
                "th": "Type II: รอยหักขวางผ่านแอ่งเบ้าออกทางขอบล่างสะบัก"
              },
              {
                "en": "Type III: Transverse fracture line exiting superior border (often associated with AC joint/coracoid injury).",
                "th": "Type III: รอยหักขวางออกขอบบนสะบัก (มักเกิดร่วมกับบาดเจ็บข้อ AC หรือ Coracoid)"
              },
              {
                "en": "Type IV: Transverse fracture line extending completely across body to medial border.",
                "th": "Type IV: รอยหักขวางทะลุผ่านตัวสะบักออกทางขอบด้านใน (Medial border)"
              },
              {
                "en": "Type V: Combined complex pattern (Combination of Type IV with Type II/III).",
                "th": "Type V: รูปแบบผสมซับซ้อน (ผสมระหว่าง Type IV ร่วมกับ Type II หรือ III)"
              },
              {
                "en": "Type VI: Severe comminution of glenoid articular surface.",
                "th": "Type VI: ผิวข้อเบ้าไหล่แตกละเอียดหลายชิ้น (Goss modification)"
              }
            ],
            "clinicalSignificance": [
              {
                "en": "Type Ia & Ib: ORIF with percutaneous screws or suture anchors if rim fragment >25-33% or humeral head subluxated.",
                "th": "Type Ia & Ib: ผ่าตัด ORIF ขันสกรูหรือยึด Suture anchor หากชิ้นส่วน >25-33% หรือข้อไหล่หลุด"
              },
              {
                "en": "Types II - V: Conservative management if articular step-off <2 mm. Operative ORIF with locking plates via anterior Judet/posterior approach mandatory if step-off ≥2 mm.",
                "th": "Types II - V: รักษาแบบไม่ผ่าตัดหากผิวข้อเหลื่อม <2 มม.; ต้องผ่าตัด ORIF หากผิวข้อเหลื่อม ≥2 มม."
              },
              {
                "en": "Type VI: Surgical reconstruction ORIF or consideration of primary shoulder arthroplasty.",
                "th": "Type VI: ผ่าตัด ORIF เรียงผิวข้อหรือพิจารณาใส่ข้อไหล่เทียม"
              },
              {
                "en": "CRITICAL PITFALL: Undetected articular step-off (>2 mm) rapidly causes debilitating post-traumatic glenohumeral arthritis. Mandate 3D CT scan for ALL intra-articular glenoid fractures.",
                "th": "ข้อควรระวังสำคัญ: รอยเหลื่อมผิวข้อ (>2 มม.) ที่ตรวจไม่พบจะทำให้เกิดข้อไหล่เสื่อมรุนแรงอย่างรวดเร็ว ต้องส่งตรวจ 3D CT scan ในเคสหักเข้าข้อ Glenoid ทุกราย"
              }
            ]
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
              "illustrationId": "",
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
              "illustrationId": "",
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
              "illustrationId": "",
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
              "illustrationId": "",
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
              "illustrationId": "",
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
              "illustrationId": "",
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
      "regionConcept": {
        "physicalExam": [
          {
            "sign": "Subacromial Tenderness & Local Swelling",
            "positive": {
              "en": "Focal tenderness and bony crepitus directly over the subcutaneous acromion process.",
              "th": "กดเจ็บเฉพาะจุดและคลำได้เสียงกรอบแกรบใต้ผิวหนังบริเวณยอดกระดูก Acromion"
            }
          },
          {
            "sign": "Active Arm Abduction Pain & Impingement Test",
            "positive": {
              "en": "Severe pain during active arm abduction (especially 60°-120°) due to subacromial space narrowing.",
              "th": "ปวดรุนแรงขณะยกกางแขน (โดยเฉพาะช่วง 60-120 องศา) จากช่องใต้ Acromion แคบลง"
            }
          },
          {
            "sign": "Skin Integrity & Tenting Inspection",
            "positive": {
              "en": "Skin tenting or threatening abrasion over the subcutaneous acromion process.",
              "th": "ผิวหนังถูกชิ้นกระดูกดันตึงดุนขึ้นมา เสี่ยงต่อการเกิดแผลเปิด"
            }
          }
        ],
        "acceptableAlignment": [
          {
            "parameter": {
              "en": "Acromial Displacement",
              "th": "ระยะเกยเคลื่อนตัวของ Acromion"
            },
            "threshold": "< 2 mm",
            "note": {
              "en": "Displacement >2mm without inferior tilt may be managed conservatively initially.",
              "th": "การเคลื่อนตัว >2 มม. หากไม่มีการเอียงกดต่ำลง สามารถลองรักษาแบบไม่ผ่าตัดก่อนได้"
            }
          },
          {
            "parameter": {
              "en": "Subacromial Space Clearance",
              "th": "ความสูงของช่องใต้ Acromion"
            },
            "threshold": "> 6 mm (No Inferior Tilt)",
            "note": {
              "en": "Inferior tilt reducing subacromial space <6mm causes severe rotator cuff impingement (Kuhn Type III, requires ORIF).",
              "th": "การเอียงกดต่ำลงทำให้ช่องใต้ Acromion <6 มม. จะกดทับเอ็นไหล่อย่างรุนแรง (Kuhn Type III ต้องผ่าตัด)"
            }
          }
        ],
        "redFlags": [
          {
            "en": "Kuhn Type III inferior displacement causing mechanical compression and secondary tear of the supraspinatus tendon.",
            "th": "ภาวะ Kuhn Type III ชิ้นกระดูกเอียงกดต่ำลง กดทับเอ็น Supraspinatus จนฉีกขาดขาดจากกัน"
          },
          {
            "en": "Open acromial fracture or skin necrosis over subcutaneous bone.",
            "th": "กระดูก Acromion หักแบบมีแผลเปิด หรือผิวหนังขาดเลือดเน่าตาย"
          }
        ],
        "associatedInjuries": [
          {
            "injury": {
              "en": "Rotator Cuff (Supraspinatus) Tendon Tear",
              "th": "เอ็นหมุนข้อไหล่ (Supraspinatus) ฉีกขาด"
            }
          },
          {
            "injury": {
              "en": "Acromioclavicular (AC) Joint Separation",
              "th": "ข้อต่อ AC เคลื่อนหลุด"
            }
          }
        ],
        "clinicalPearls": [
          {
            "en": "Kuhn classification guides treatment: Type I (non-displaced), Type II (displaced without impingement), Type III (displaced WITH subacromial impingement - gold standard for ORIF).",
            "th": "การจำแนก Kuhn ช่วยบอกแนวทาง: Type I (ไม่เคลื่อน), Type II (เคลื่อนแต่ไม่กดเอ็น), Type III (เคลื่อนเอียงกดเอ็นหมุนข้อไหล่ - เป็นข้อบ่งชี้ผ่าตัด ORIF)"
          },
          {
            "en": "Do NOT confuse an acute acromion fracture with Os Acromiale (unfused acromial apophysis with smooth bilateral sclerotic margins).",
            "th": "ห้ามสับสนรอยหัก Acromion เฉียบพลันกับ Os Acromiale (ปุ่มกระดูกไม่เชื่อมกันตามธรรมชาติ มีขอบเรียบมนมักเป็นสองข้าง)"
          },
          {
            "en": "Axillary lateral or Scapular Y radiographs are essential to measure subacromial space clearance and inferior tilt.",
            "th": "จำเป็นต้องใช้ภาพเอกซเรย์ท่า Axillary หรือ Scapular Y เพื่อวัดความสูงช่องใต้ Acromion และการเอียงกดต่ำลง"
          }
        ]
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
          "concept": {
            "title": {
              "en": "Kuhn Acromial Fracture Concept",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ Kuhn Acromion Classification"
            },
            "description": {
              "en": "💡 CONCEPT (Origin & Logic):\n• Origin & Logic: Dr. John E. Kuhn (1994) classified acromial fractures into Types I-III based on displacement, subacromial space compromise, and association with rotator cuff tears or AC joint disruption.\n• Core Concept: Evaluates whether acromial displacement causes subacromial impingement or disrupts the deltoid origin and SSSC ring integrity.\n\n⚖️ DECISION CUT-OFF:\n• Type I (Non-displaced / Minimally displaced): Conservative care (Sling 2-3 wks, progressive ROM).\n• Type II (Displaced inferiorly into subacromial space without impingement / symptomatic): Tension Band Wiring or Mini-locking plate ORIF to restore subacromial height.\n• Type III (Displaced with subacromial space compromise / impingement / symptomatic nonunion): Operative ORIF with locking plate and subacromial decompression.\n\n⚠️ CLINICAL PITFALL:\nDo not confuse a Type I acromial fracture with an Os Acromiale (unfused acromial apophysis). Os acromiale has smooth rounded margins on axial views and is bilateral in 60% of patients.",
              "th": "💡 CONCEPT (ที่มา & แนวคิดร่วม):\n• Origin & Logic: Dr. John E. Kuhn (1994) จำแนกกระดูก Acromion หักเป็น Types I-III ตามการเคลื่อนตัว การแคบลงของช่องใต้เบ้า (Subacromial space) และการบาดเจ็บของเอ็นไหล่\n• Core Concept: ประเมินว่าการเคลื่อนตัวของ Acromion ทำให้เกิดภาวะขัดชนใต้เบ้า (Subacromial impingement) หรือทำลายจุดเกาะของกล้ามเนื้อ Deltoid และวง SSSC หรือไม่\n\n⚖️ DECISION CUT-OFF (เกณฑ์ตัดสินใจ):\n• Type I (ไม่เคลื่อนตัว หรือเคลื่อนน้อย): รักษาแบบไม่ผ่าตัด (ใส่ Sling 2-3 สัปดาห์ แล้วทำกายภาพ)\n• Type II (เคลื่อนลงล่างเข้าช่องใต้เบ้า แต่ยังไม่ขัดชนรุนแรง): ผ่าตัด Tension Band Wiring หรือ Mini-locking plate ORIF เพื่อคืนความสูงช่องใต้เบ้า\n• Type III (เคลื่อนตัวรุนแรงช่องใต้เบ้าแคบติดขัด / กระดูกไม่ติดที่มีอาการ): ผ่าตัด ORIF ดามแผ่นเหล็กล็อค ร่วมกับผ่าตัดขยายช่องใต้เบ้าข้อไหล่\n\n⚠️ CLINICAL PITFALL (จุดตายที่ต้องระวัง):\nระวังอย่าสับสนระหว่าง Acromion หัก Type I กับภาวะ Os Acromiale (กระดูกไม่เชื่อมตามธรรมชาติ) Os acromiale จะเห็นขอบมนเรียบในเอกซเรย์ Axial view และพบทั้งสองข้างถึง 60%!"
            }
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
              "illustrationId": "",
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
              "illustrationId": "",
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
              "illustrationId": "",
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
      "regionConcept": {
        "physicalExam": [
          {
            "sign": "Focal Coracoid Process Tenderness",
            "positive": {
              "en": "Point tenderness located ~2 cm inferior to the lateral clavicle inside the infraclavicular fossa.",
              "th": "กดเจ็บเฉพาะจุดประมาณ 2 ซม. ใต้กระดูกไหปลาร้าตรงช่อง Infraclavicular fossa"
            }
          },
          {
            "sign": "Resisted Forearm Supination & Elbow Flexion Pain",
            "positive": {
              "en": "Pain reproduced when contracting short head of biceps / coracobrachialis against resistance.",
              "th": "ปวดเพิ่มขึ้นเมื่อต้านแรงการงอศอกหรือหงายมือ (แรงดึงของกล้ามเนื้อ Biceps short head / Coracobrachialis)"
            }
          },
          {
            "sign": "Acromioclavicular (AC) Joint Stability Test",
            "positive": {
              "en": "Vertical or horizontal translation of distal clavicle indicating associated CC/AC ligament injury.",
              "th": "กระดูกไหปลาร้าส่วนปลายขยับหลวมในแนวตั้งหรือแนวราบ แสดงว่าเอ็น CC/AC ขาดร่วมด้วย"
            }
          }
        ],
        "acceptableAlignment": [
          {
            "parameter": {
              "en": "Ogawa Type II Coracoid Tip Displacement",
              "th": "การเคลื่อนตัวของปลายจะงอย Ogawa Type II"
            },
            "threshold": "< 10 mm (1 cm)",
            "note": {
              "en": "Ogawa Type II (distal to CC ligaments) is stable; displacement <1cm managed conservatively.",
              "th": "Ogawa Type II (ปลายต่อเอ็น CC) มีความมั่นคง หากเคลื่อน <1 ซม. ให้รักษาแบบไม่ผ่าตัด"
            }
          }
        ],
        "redFlags": [
          {
            "en": "Ogawa Type I unstable fracture pattern disrupting SSSC ring and CC ligament stability.",
            "th": "Ogawa Type I fracture ชนิดไม่มั่นคง ทำลายความมั่นคงของวง SSSC และเอ็น CC"
          },
          {
            "en": "Associated high-grade AC joint dislocation (Rockwood Type IV-VI) causing severe shoulder dysfunction.",
            "th": "ข้อต่อ AC เคลื่อนหลุดรุนแรงร่วมด้วย (Rockwood Type IV-VI) ส่งผลให้การทำงานของไหล่พังทลาย"
          }
        ],
        "associatedInjuries": [
          {
            "injury": {
              "en": "Acromioclavicular (AC) Joint Dislocation / CC Ligament Tear",
              "th": "ข้อต่อ AC เคลื่อนหลุด / เอ็น CC ฉีกขาด"
            }
          },
          {
            "injury": {
              "en": "Superior Glenoid Rim Fracture (Ideberg Type III)",
              "th": "เบ้าข้อไหล่ส่วนบนหัก (Ideberg Type III)"
            }
          },
          {
            "injury": {
              "en": "Clavicle Shaft Fracture",
              "th": "กระดูกไหปลาร้าหัก"
            }
          }
        ],
        "clinicalPearls": [
          {
            "en": "Ogawa classification categorises coracoid fractures based on relation to CC ligaments: Type I (proximal/posterior = UNSTABLE, requires ORIF) vs Type II (distal/anterior = STABLE, conservative).",
            "th": "การจำแนก Ogawa แบ่งตามตำแหน่งเทียบกับเอ็น CC: Type I (โคน/ด้านหลัง = ไม่มั่นคง ต้องผ่าตัด ORIF) และ Type II (ปลาย/ด้านหน้า = มั่นคง ไม่ต้องผ่าตัด)"
          },
          {
            "en": "The coracoid process functions as an essential anterior strut of the Superior Suspensory Shoulder Complex (SSSC).",
            "th": "จะงอย Coracoid ทำหน้าที่เป็นเสาค้ำด้านหน้า (Anterior strut) ที่สำคัญของห่วงยึดข้อไหล่ (SSSC)"
          },
          {
            "en": "Stryker Notch radiograph view (AP with 10° cephalic tilt) or 3D CT is the best projection to visualize coracoid fractures without overlay.",
            "th": "ภาพเอกซเรย์ท่า Stryker Notch view (AP เอียงขึ้น 10 องศา) หรือ 3D CT เป็นท่าที่ดีที่สุดในการเห็นจะงอย Coracoid โดยไม่ถูกกระดูกอื่นบัง"
          }
        ]
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
          "concept": {
            "title": {
              "en": "Ogawa Coracoid Fracture Concept",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ Ogawa Coracoid Classification"
            },
            "description": {
              "en": "💡 CONCEPT (Origin & Logic):\n• Origin & Logic: Dr. Kiyohisa Ogawa (1997) classified coracoid fractures relative to the attachment of the Coracoclavicular (CC) ligaments (conoideum and trapezoideum), which dictates shoulder girdle stability.\n• Core Concept: Differentiates Type I (proximal to CC ligaments - unstable due to SSSC disruption) from Type II (distal to CC ligaments - stable due to intact CC tethering to scapular base).\n\n⚖️ DECISION CUT-OFF:\n• Type I (Proximal / Posterior to CC ligaments): UNSTABLE. CC ligaments remain attached to the mobile fragment, disrupting SSSC ring. Operative ORIF with 3.5/4.0mm cannulated screw into scapular neck.\n• Type II (Distal / Anterior to CC ligaments): STABLE. CC ligaments remain attached to intact scapular base. Conservative management with sling 2-3 weeks.\n\n⚠️ CLINICAL PITFALL:\nOgawa Type I fractures are often associated with AC joint dislocations or clavicle fractures. Always evaluate the full Superior Suspensory Shoulder Complex (SSSC).",
              "th": "💡 CONCEPT (ที่มา & แนวคิดร่วม):\n• Origin & Logic: Dr. Kiyohisa Ogawa (1997) จำแนกตามตำแหน่งรอยหักเมื่อเทียบกับจุดเกาะของเส้นเอ็น Coracoclavicular (CC) ซึ่งเป็นตัวกำหนดความมั่นคงของห่วงยึดข้อไหล่\n• Core Concept: แยกประเภท Type I (หักโคนต่อเอ็น CC - ไม่มั่นคงเพราะทำลายวง SSSC) ออกจาก Type II (หักปลายต่อเอ็น CC - มั่นคงเพราะเอ็น CC ยังยึดกับโคนสะบักที่สมบูรณ์)\n\n⚖️ DECISION CUT-OFF (เกณฑ์ตัดสินใจ):\n• Type I (ส่วนโคน ด้านหลังต่อเอ็น CC): ไม่มั่นคง (Unstable) เอ็น CC ติดอยู่กับชิ้นกระดูกส่วนปลายที่หลุดลอย ทำลายวง SSSC ring -> ผ่าตัด ORIF ขันสกรู Cannulated screw เข้าคอสะบัก\n• Type II (ส่วนปลาย ด้านหน้าต่อเอ็น CC): มั่นคง (Stable) เอ็น CC ยังยึดกับโคนสะบักที่สมบูรณ์ -> รักษาแบบไม่ผ่าตัด ใส่ Sling 2-3 สัปดาห์\n\n⚠️ CLINICAL PITFALL (จุดตายที่ต้องระวัง):\nOgawa Type I มักพบบาดเจ็บร่วมกับข้อ AC หลุดหรือไหปลาร้าหัก ต้องตรวจประเมินความมั่นคงของวง SSSC ทั้งหมดเสมอ"
            }
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
              "illustrationId": "",
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
              "illustrationId": "",
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
          "concept": {
            "title": {
              "en": "Eyres Coracoid Fracture Concept",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ Eyres Coracoid Classification"
            },
            "description": {
              "en": "💡 CONCEPT (Origin & Logic):\n• Origin & Logic: Dr. K.S. Eyres (1995) established an anatomical level classification (Types I-V) tracing fracture extension from the coracoid tip down into the glenoid cavity or scapular body.\n• Core Concept: Categorizes coracoid fractures by anatomical level and articular/scapular body extension, distinguishing simple apical avulsions from complex intra-articular glenoid patterns.\n\n⚖️ DECISION CUT-OFF:\n• Type I & II (Apical tip & mid-coracoid): STABLE / MINIMALLY DISPLACED. Conservative with sling 2-3 weeks.\n• Type III (Coracoid base): UNSTABLE (proximal to CC ligaments). Operative ORIF with cannulated screw.\n• Type IV (Base extending into Superior Glenoid): Intra-articular involvement. Operative ORIF to restore glenoid surface.\n• Type V (Base extending into Scapular Body): Complex pattern. Operative ORIF with reconstruction plate.\n\n⚠️ CLINICAL PITFALL:\nType IV injuries involve the superior glenoid articular surface. Failure to reduce Type IV fractures leads to shoulder incongruity and rapid joint wear.",
              "th": "💡 CONCEPT (ที่มา & แนวคิดร่วม):\n• Origin & Logic: Dr. K.S. Eyres (1995) จำแนกตามระดับกายวิภาค (Type I-V) ติดตามการลุกลามของรอยหักตั้งแต่ปลายจะงอย ลงไปยังโคนจะงอย เข้าแอ่งเบ้าข้อไหล่ หรือเข้าลำตัวสะบัก\n• Core Concept: จำแนกตามระดับกายวิภาคและการลุกลามเข้าข้อต่อ/ลำตัวสะบัก แยกการดึงกระชากชิ้นปลายธรรมดา ออกจากรอยหักซับซ้อนที่ลามเข้าผิวข้อเบ้าไหล่\n\n⚖️ DECISION CUT-OFF (เกณฑ์ตัดสินใจ):\n• Type I & II (ปลายจะงอย & กลางลำตัว): มั่นคง / เคลื่อนตัวน้อย -> รักษาแบบไม่ผ่าตัด ใส่ Sling 2-3 สัปดาห์\n• Type III (โคนจะงอย): ไม่มั่นคง (อยู่โคนต่อเอ็น CC) -> ผ่าตัด ORIF ขันสกรู Cannulated screw\n• Type IV (โคนจะงอยลุกลามเข้าเบ้าไหล่ส่วนบน): เข้าข้อต่อ -> ผ่าตัด ORIF เพื่อจัดเรียงผิวข้อเบ้าไหล่\n• Type V (โคนจะงอยลุกลามเข้าตัวสะบัก): รูปแบบซับซ้อน -> ผ่าตัด ORIF ดามแผ่นเหล็ก\n\n⚠️ CLINICAL PITFALL (จุดตายที่ต้องระวัง):\nEyres Type IV มีรอยหักลามเข้าผิวข้อต่อเบ้าไหล่ส่วนบน หากผ่าตัดจัดไม่เรียบจะนำไปสู่ภาวะข้อไหล่เสื่อมและติดขัดอย่างรวดเร็ว"
            }
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
              "illustrationId": "",
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
              "illustrationId": "",
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
              "illustrationId": "",
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
              "illustrationId": "",
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
              "illustrationId": "",
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
          "concept": {
            "title": {
              "en": "Scapulothoracic Dissociation Concept",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ Scapulothoracic Dissociation"
            },
            "description": {
              "en": "💡 CONCEPT (Origin & Logic):\n• Origin & Logic: Scapulothoracic dissociation was described by Oreck et al. (1984) and classified by Zelle and Damschen based on the severity of musculoskeletal, neurological (Brachial plexus), and vascular (Subclavian/Axillary vessels) injuries resulting from high-energy traction.\n• Core Concept: Represents a closed internal amputation of the shoulder girdle caused by massive traction force. Survival and functional outcome depend on immediate vascular stabilization and evaluation of brachial plexus root avulsion.\n\n⚖️ DECISION CUT-OFF:\n• Class I (Musculoskeletal disruption only): Intact neurovascular structures. Operative fixation of clavicle/scapula + rehabilitation.\n• Class II (Neurological injury present): IIA (Incomplete brachial plexus lesion), IIB (Complete brachial plexus root avulsion). Class IIB has poor functional recovery; nerve transfer or reconstruction required.\n• Class III (Vascular transection): Life-threatening subclavian/axillary artery disruption. EMERGENCY vascular surgical repair / temporary shunt MANDATORY.\n\n⚠️ CLINICAL PITFALL:\nHigh mortality rate (~20%) and severe neurological disability (>50%). Scapular lateral displacement >1 cm on AP CXR is diagnostic. Always perform immediate Angiography/CTA if pulseless or expanding hematoma!",
              "th": "💡 CONCEPT (ที่มา & แนวคิดร่วม):\n• Origin & Logic: ภาวะข้อสะบักกับผนังอกหลุดฉีก (Scapulothoracic dissociation) ได้รับการอธิบายโดย Oreck (1984) และจำแนกโดย Zelle และ Damschen ตามความรุนแรงของการบาดเจ็บกระดูก/กล้ามเนื้อ เส้นประสาท Brachial plexus และหลอดเลือด Subclavian/Axillary จากแรงดึงกระชากมหาศาล\n• Core Concept: เป็นการบาดเจ็บระดับแขนหลุดลอยภายใน (Internal amputation) จากแรงดึงกระชากมหาศาล อัตราการรอดชีวิตและการฟื้นตัวขึ้นกับการผ่าตัดต่อหลอดเลือดฉุกเฉินและการประเมินความเสียหายของรากประสาท\n\n⚖️ DECISION CUT-OFF (เกณฑ์ตัดสินใจ):\n• Class I (บาดเจ็บเฉพาะกระดูก/กล้ามเนื้อ): เส้นประสาทและหลอดเลือดสมบูรณ์ดี -> ผ่าตัดยึดกระดูกไหปลาร้า/สะบัก + กายภาพ\n• Class II (มีความเสียหายของเส้นประสาท Brachial plexus): IIA (ขาดบางส่วน), IIB (รากประสาทขาดหลุดถาวร) Class IIB การฟื้นตัวต่ำมาก ต้องย้ายเส้นประสาทซ่อมแซม\n• Class III (หลอดเลือดขาด): หลอดเลือด Subclavian/Axillary ขาดฉุกเฉิน -> ต้องผ่าตัดต่อหลอดเลือดฉุกเฉินทันที (Emergency vascular repair)\n\n⚠️ CLINICAL PITFALL (จุดตายที่ต้องระวัง):\nอัตราการเสียชีวิตสูง (~20%) และพิการทางประสาทรุนแรง (>50%) ตรวจพบสะบักเบนออกด้านข้าง >1 ซม. ในภาพ CXR ต้องส่งตรวจ CTA/Angiography ทันทีหากคลำชีพจรไม่ได้หรือมีก้อนเลือดโตขึ้น"
            }
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
              "illustrationId": "",
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
              "illustrationId": "",
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
              "illustrationId": "",
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
