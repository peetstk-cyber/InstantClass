import type { BoneData } from "../../types";

export const pelvisBone: BoneData = {
  "id": "pelvis",
  "name": {
    "en": "Pelvic Bone",
    "th": "กระดูกเชิงกรานและเบ้าสะโพก"
  },
  "description": {
    "en": "Pelvic structure including pelvic ring and acetabular joint",
    "th": "กระดูกเชิงกรานและเบ้าสะโพก รวมถึงวงกระดูกเชิงกรานและเบ้าข้อสะโพก"
  },
  "pediatric": false,
  "regions": [
    {
      "id": "pelvic-ring",
      "name": {
        "en": "Pelvic Ring",
        "th": "วงกระดูกเชิงกราน (Pelvic Ring)"
      },
      "classifications": [
        {
          "system": "Young-Burgess",
          "fullName": {
            "en": "Young-Burgess Classification for Pelvic Ring Disruptions",
            "th": "การจำแนกกระดูกเชิงกรานหักเคลื่อนแบบ Young-Burgess"
          },
          "description": {
            "en": "Classification of pelvic ring injuries based on force vector mechanism (APC, LC, VS, CM), predicting ligamentous instability, pelvic volume expansion, and internal hemorrhage risk.",
            "th": "ระบบจำแนกการหักเคลื่อนของวงกระดูกเชิงกรานตามกลไกทิศทางของแรงกระแทก (APC, LC, VS) ซึ่งบอกถึงความมั่นคง การขยายตัวของช่องเชิงกราน และความเสี่ยงเสียเลือดรุนแรง"
          },
          "investigations": [
            {
              "name": "AP Pelvis View",
              "details": {
                "en": "Standard AP view of the pelvis. Evaluates overall pelvic ring symmetry, pubic diastasis, sacral fracture lines, and sacroiliac (SI) joint widening.",
                "th": "ภาพเอกซเรย์เชิงกรานท่า AP มาตรฐาน ใช้ประเมินความสมมาตรของวงเชิงกราน ระยะแยกของ Pubic diastasis และความกว้างข้อต่อ SI"
              }
            },
            {
              "name": "Pelvic Inlet View (45° Caudal Tilt)",
              "details": {
                "en": "AP view with 45° caudal tilt looking down into the pelvic brim. Evaluates anterior-posterior displacement, sacral canal impaction, and inward/outward rotation of hemipelvis.",
                "th": "ภาพเอกซเรย์เอียงหลอดรังสีชี้ลงเท้า 45 องศา มองจากบนลงล่าง ใช้ประเมินการเคลื่อนไปด้านหน้า-หลัง การบิดหมุนของเชิงกราน และรอยตอกอัดของ Sacrum"
              }
            },
            {
              "name": "Pelvic Outlet View (45° Cephalic Tilt)",
              "details": {
                "en": "AP view with 45° cephalic tilt perpendicular to the sacrum. Evaluates vertical displacement (vertical shear), sacral foraminal fracture lines, and pubic rami vertical step-off.",
                "th": "ภาพเอกซเรย์เอียงหลอดรังสีชี้ขึ้นศีรษะ 45 องศา ตั้งฉากกับกระดูก Sacrum ใช้ประเมินการเคลื่อนสูงต่ำในแนวตั้ง (Vertical shear) และรูเส้นประสาท Sacrum"
              }
            }
          ],
          "types": [
            {
              "type": "APC-I",
              "name": {
                "en": "APC-I (Anterior-Posterior Compression I)",
                "th": "APC-I (แรงอัดหน้าหลัง - มั่นคง)"
              },
              "description": {
                "en": "Slight widening of pubic symphysis (< 2 cm)\nIntact anterior SI, sacrospinous, and sacrotuberous ligaments\nPelvic ring is STABLE\nMinimal blood loss risk",
                "th": "ข้อต่อ Pubic symphysis ถ่างแยกออกเล็กน้อย (< 2 ซม.)\nเส้นเอ็นด้านหน้า SI, Sacrospinous และ Sacrotuberous ยังคงสมบูรณ์ดี\nวงกระดูกเชิงกรานมีความมั่นคงสูง\nความเสี่ยงต่อการเสียเลือดต่ำมาก"
              },
              "moi": {
                "en": "Direct anterior blow to pelvis or head-on motorcycle impact.",
                "th": "แรงกระแทกจากด้านหน้าตรงเข้าเชิงกราน หรืออุบัติเหตุรถจักรยานยนต์ชนหน้าตรง"
              },
              "treatment": {
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED TREATMENT. Bed rest for pain control followed by progressive weight bearing as tolerated with a walker or crutches.",
                  "th": "แนะนำให้รักษาแบบไม่ผ่าตัด พักผ่อนบรรเทาปวด แล้วเริ่มหัดเดินลงน้ำหนักเท่าที่ทนได้ด้วยอุปกรณ์ช่วยเดิน"
                },
                "operative": {
                  "en": "Rarely needed unless patient has intolerable pain with weight-bearing.",
                  "th": "แทบไม่ต้องผ่าตัด พิจารณาเฉพาะกรณีที่ปวดมากจนลงน้ำหนักไม่ได้เลย"
                }
              },
              "illustrationId": "/images/pelvis/apc_1.png",
              "xrayDescription": {
                "en": "Pubic symphysis diastasis <2cm without SI joint widening or vertical displacement.",
                "th": "พบระยะแยก Pubic symphysis < 2 ซม. โดยช่องข้อ SI ปกติและไม่มีการเคลื่อนลอยในแนวตั้ง"
              }
            },
            {
              "type": "APC-II",
              "name": {
                "en": "APC-II (Open Book Pelvis)",
                "th": "APC-II (เชิงกรานเปิดอ้าแบบ Open Book - ไม่มั่นคงด้านหมุน)"
              },
              "description": {
                "en": "Pubic symphysis diastasis > 2 cm ('Open Book' pelvis)\nTorn anterior SI, sacrospinous, and sacrotuberous ligaments\nIntact POSTERIOR SI ligaments (acts as a posterior hinge)\nRotationally UNSTABLE, Vertically STABLE\nSignificant pelvic volume expansion and internal hemorrhage risk",
                "th": "ข้อต่อ Pubic symphysis ถ่างอ้ากว้าง > 2 ซม. (ลักษณะเหมือนหนังสือเปิด 'Open Book')\nเส้นเอ็นด้านหน้า SI, Sacrospinous และ Sacrotuberous ฉีกขาดทั้งหมด\nเส้นเอ็นด้านหลัง (Posterior SI) ยังสมบูรณ์ดี ทำหน้าที่เป็นบานพับด้านหลัง\nไม่มั่นคงในแนวหมุน (Rotationally unstable) แต่มั่นคงในแนวตั้ง\nช่องเชิงกรานขยายตัวกว้างขึ้นมาก เสี่ยงต่อภาวะเลือดออกในช่องท้องและเชิงกรานรุนแรง"
              },
              "moi": {
                "en": "High-energy crush injury or head-on vehicle collision.",
                "th": "แรงกระแทกทับบดพลังงานสูง หรืออุบัติเหตุรถยนต์ชนประสานงารุนแรง"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "Not recommended. High risk of persistent pelvic deformity and chronic pain.",
                  "th": "ไม่แนะนำ เนื่องจากเสี่ยงต่อภาวะเชิงกรานผิดรูปและปวดเรื้อรัง"
                },
                "operative": {
                  "en": "URGENT STABILIZATION. Apply pelvic binder/sheet in ER to reduce volume and control bleeding. Definitive ORIF with multi-hole pubic symphysis plate and/or posterior SI screws.",
                  "th": "ต้องควบคุมการเสียเลือดฉุกเฉิน ใส่ผ้าพันเชิงกราน (Pelvic binder) รัดตรงระดับ Greater trochanter ทันทีใน ER แล้วผ่าตัด ORIF ยึดแผ่นเหล็กดาม Pubic symphysis ร่วมกับใส่สกรูยึด SI joint"
                }
              },
              "illustrationId": "/images/pelvis/apc_2.png",
              "xrayDescription": {
                "en": "Wide pubic diastasis >2cm with anterior SI joint opening, posterior SI joint space intact.",
                "th": "ระยะ Pubic diastasis ถ่างกว้าง > 2 ซม. ร่วมกับช่องข้อด้านหน้า SI เปิดออก แต่ด้านหลังยังชิดกัน"
              }
            },
            {
              "type": "APC-III",
              "name": {
                "en": "APC-III (Complete SI Disruption)",
                "th": "APC-III (ข้อ SI หลุดฉีกขาดสมบูรณ์ - ไม่มั่นคงรุนแรงที่สุด)"
              },
              "description": {
                "en": "Complete disruption of pubic symphysis and ALL SI ligaments (anterior and posterior)\nComplete separation of hemipelvis (Floating hemipelvis)\nBoth Rotationally and Vertically UNSTABLE\nExtreme life-threatening internal hemorrhage risk (iliac vessel tear)",
                "th": "ข้อต่อ Pubic symphysis และเอ็น SI ฉีกขาดสมบูรณ์ทั้งด้านหน้าและด้านหลัง\nเชิงกรานข้างนั้นหลุดแยกเป็นอิสระอย่างสิ้นเชิง (Floating hemipelvis)\nไม่มั่นคงอย่างรุนแรงทั้งในแนวหมุนและแนวตั้ง (Rotationally & Vertically Unstable)\nอันตรายถึงชีวิตสูงสุดจากการฉีกขาดของเส้นเลือดใหญ่ในเชิงกราน (Internal Hemorrhage)"
              },
              "moi": {
                "en": "Extreme high-speed motor vehicle crash or fall from great height.",
                "th": "อุบัติเหตุความเร็วสูงรุนแรงสุดขีด หรือการตกจากที่สูงมาก"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "CONTRAINDICATED. Lethal without rapid stabilization.",
                  "th": "ห้ามใช้การรักษาด้วยวิธีนี้ เสี่ยงเสียชีวิตสูงมาก"
                },
                "operative": {
                  "en": "EMERGENCY RESUSCITATION & SURGERY. Immediate Pelvic binder/C-clamp, pelvic packing for hemorrhage control, urgent angiography/embolization if hypotensive, followed by staged ORIF (anterior plate + posterior SI screws/plates).",
                  "th": "ช่วยชีวิตและผ่าตัดฉุกเฉิน ใส่ Pelvic Binder/C-clamp ทันที ยัดผ้าห้ามเลือด (Pelvic packing) ทำฉีดสีอุดเส้นเลือด (Embolization) หากความดันตก แล้วผ่าตัด ORIF ยึดแผ่นเหล็กหน้าและสกรูหลัง"
                }
              },
              "illustrationId": "/images/pelvis/apc_3.png",
              "xrayDescription": {
                "en": "Complete dislocation of SI joint with wide separation of pubic symphysis and posterior displacement.",
                "th": "ข้อต่อ SI เคลื่อนหลุดแยกออกจากกันอย่างสมบูรณ์ ร่วมกับ Pubic symphysis อ้ากว้าง"
              }
            },
            {
              "type": "LC-I",
              "name": {
                "en": "LC-I (Lateral Compression I)",
                "th": "LC-I (แรงบีบด้านข้าง - กระดูก Sacrum อัดแน่น)"
              },
              "description": {
                "en": "Sacral buckle/compression fracture on ipsilateral side of impact\nTransverse pubic rami fractures\nPelvic volume is REDUCED (no volume expansion)\nPelvic ring is STABLE\nLow hemorrhage risk",
                "th": "กระดูก Sacrum ด้านเดียวกันถูกแรงบีบอัดย่นแน่นเข้าหากัน (Buckle/Impacted sacral fracture)\nกระดูก Pubic rami หักแนวขวาง\nช่องเชิงกรานมีขนาดลดลง (ไม่เกิดการขยายตัว)\nวงกระดูกเชิงกรานมีความมั่นคงสูง\nความเสี่ยงต่อการเสียเลือดต่ำ"
              },
              "moi": {
                "en": "Side-impact motor vehicle collision (T-bone crash) or direct fall onto hip.",
                "th": "อุบัติเหตุชนเข้าด้านข้างตัวรถ (T-bone crash) หรือล้มกระแทกข้างสะโพก"
              },
              "treatment": {
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED TREATMENT. Non-operative management. Early mobilization with weight-bearing as tolerated once acute pain subsides.",
                  "th": "แนะนำให้รักษาแบบไม่ผ่าตัด เริ่มหัดเดินลงน้ำหนักเท่าที่ทนได้เมื่ออาการปวดระบมลดลง"
                },
                "operative": {
                  "en": "Rarely needed unless severe ramus displacement causes nerve or bladder irritation.",
                  "th": "แทบไม่ต้องผ่าตัด พิจารณาเฉพาะกรณีชิ้นกระดูก Pubic ramus ทิ่มแทงกระเพาะปัสสาวะ"
                }
              },
              "illustrationId": "/images/pelvis/lc_1.png",
              "xrayDescription": {
                "en": "Buckled/impacted sacral foraminal lines on AP view with ipsilateral transverse pubic rami fractures.",
                "th": "เห็นรอยย่นอัดแน่นของรูเส้นประสาท Sacrum ร่วมกับแนวกระดูก Pubic rami หักขวางด้านเดียวกัน"
              }
            },
            {
              "type": "LC-II",
              "name": {
                "en": "LC-II (Ipsilateral Crescent Fracture)",
                "th": "LC-II (แรงบีบด้านข้าง - ปีกกระดูก Iliac หักเสี้ยวพระจันทร์)"
              },
              "description": {
                "en": "Ipsilateral anterior iliac wing fracture ('Crescent' fracture extending into SI joint)\nInternal rotation displacement of the anterior hemipelvis\nPosterior SI ligaments remain attached to the crescent fragment\nRotationally UNSTABLE, Vertically STABLE\nModerate internal hemorrhage risk",
                "th": "ปีกกระดูก Iliac หักเป็นเสี้ยวพระจันทร์ (Crescent fracture) ด้านเดียวกัน ลามเข้าข้อ SI\nเชิงกรานบิดหมุนเข้าด้านใน (Internal rotation displacement)\nเอ็นยึดด้านหลัง Posterior SI ยังติดอยู่กับชิ้นกระดูกเสี้ยวพระจันทร์\nไม่มั่นคงในแนวหมุน (Rotationally unstable) แต่มั่นคงในแนวตั้ง\nความเสี่ยงต่อการเสียเลือดปานกลาง"
              },
              "moi": {
                "en": "High-energy lateral crush impact or T-bone vehicle collision directly to iliac crest.",
                "th": "แรงกระแทกทับบดด้านข้างพลังงานสูง หรือรถชนด้านข้างตรงเข้าที่ปีกกระดูกเชิงกราน"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "Not recommended for displaced crescent fractures (>1 cm or rotational deformity).",
                  "th": "ไม่แนะนำในกรณีชิ้นกระดูกเสี้ยวพระจันทร์บิดเกยกันเกิน 1 ซม."
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. Open reduction and internal fixation (ORIF) of the iliac wing crescent fracture via ilioinguinal approach with reconstruction plates to restore rotational stability.",
                  "th": "แนะนำผ่าตัด ORIF จัดชิ้นกระดูกเสี้ยวพระจันทร์ให้เข้าที่แล้วดามด้วยแผ่นเหล็ก Reconstruction plate ผ่านทางลงแผล Ilioinguinal"
                }
              },
              "illustrationId": "/images/pelvis/lc_2.png",
              "xrayDescription": {
                "en": "Vertical fracture line running through iliac wing into SI joint (crescent fragment) with internal rotation of hemipelvis.",
                "th": "เห็นรอยหักโค้งแนวตั้งผ่านปีกกระดูก Iliac ลามเข้าข้อ SI (ชิ้นกระดูก Crescent) ร่วมกับเชิงกรานบิดเข้าด้านใน"
              }
            },
            {
              "type": "LC-III",
              "name": {
                "en": "LC-III (Windswept Pelvis - Contralateral Open Book)",
                "th": "LC-III (แรงบีบด้านข้างแบบ Windswept - เชิงกรานบิดเฉียดลม)"
              },
              "description": {
                "en": "Ipsilateral Lateral Compression (LC) injury combined with CONTRALATERAL Open-Book (APC) injury ('Windswept Pelvis')\nIpsilateral hemipelvis internally rotated, Contralateral hemipelvis externally rotated\nHigh-energy complex rotational and vertical instability\nHigh risk of massive retroperitoneal hemorrhage (iliac vessel tears)",
                "th": "เกิดการบาดเจ็บแรงบีบด้านข้าง (LC) ในฝั่งที่ถูกชน ร่วมกับแรงอัดถ่าง (APC/Open Book) ในฝั่งตรงข้าม ('Windswept Pelvis')\nเชิงกรานด้านชนบิดเข้าข้างใน (Internal rotation) ส่วนด้านตรงข้ามอ้าออกข้างนอก (External rotation)\nไม่มั่นคงอย่างยิ่งทั้งแนวหมุนและแนวตั้ง\nความเสี่ยงสูงมากต่อภาวะตกเลือดรุนแรงในช่องหลังช่องท้อง (Retroperitoneal hemorrhage)"
              },
              "moi": {
                "en": "Extreme lateral rollover crush injury, high-speed vehicle impact, or crushing weight.",
                "th": "อุบัติเหตุรถพลิกคว่ำทับบดด้านข้างความเร็วสูง หรือถูกน้ำหนักมหาศาลทับกดเชิงกราน"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "CONTRAINDICATED. Severe risk of fatal hemorrhage and permanent deformity.",
                  "th": "ห้ามใช้การรักษาด้วยวิธีนี้ เสี่ยงต่อการเสียเลือดจนเสียชีวิต"
                },
                "operative": {
                  "en": "EMERGENCY OPERATIVE STABILIZATION. Pelvic binder in ER, emergency angiography/embolization if hypotensive, provisional external fixation followed by dual ORIF of posterior SI joint and anterior pubic symphysis/rami.",
                  "th": "ผ่าตัดด่วนฉุกเฉิน ใส่ Pelvic binder ฉีดสีอุดเส้นเลือดถ้าความดันตก ยึดเหล็กดามนอก (Ex-fix) แล้วผ่าตัด ORIF ยึดทั้งด้านหน้าและด้านหลัง"
                }
              },
              "illustrationId": "/images/pelvis/lc_3.png",
              "xrayDescription": {
                "en": "Classic 'windswept' deformity: sacral crush/crescent fracture on impact side with wide SI joint and pubic symphysis diastasis on opposite side.",
                "th": "เห็นเชิงกรานบิดเบี้ยวรูป 'Windswept': ฝั่งหนึ่งมี sacral crush/crescent fracture อีกฝั่งหนึ่งข้อ SI และ pubic symphysis อ้าถ่างออก"
              }
            },
            {
              "type": "VS",
              "name": {
                "en": "VS (Vertical Shear)",
                "th": "VS (แรงเฉือนแนวตั้ง - ไม่มั่นคงอย่างรุนแรง)"
              },
              "description": {
                "en": "Complete vertical displacement of hemipelvis through SI joint, sacrum, or ilium\nVertical pubic rami step-off anteriorly\nComplete disruption of all pelvic ligaments\nRotationally and Vertically UNSTABLE\nHigh incidence of hypovolemic shock and soft tissue destruction",
                "th": "เชิงกรานข้างนั้นถูกแรงเฉือนหลุดลอยขึ้นด้านบนในแนวตั้งอย่างสมบูรณ์ผ่านข้อ SI, Sacrum หรือ Ilium\nกระดูก Pubic rami ด้านหน้าเกยเหลื่อมกันในแนวตั้ง\nเอ็นยึดเชิงกรานทั้งหมดฉีกขาดอย่างสมบูรณ์\nไม่มั่นคงอย่างยิ่งทั้งแนวหมุนและแนวตั้ง (Vertically & Rotationally Unstable)\nเสี่ยงต่อภาวะช็อกจากการเสียเลือดรุนแรง"
              },
              "moi": {
                "en": "Fall from significant height landing on one extended leg, or high-speed motorcycle accident.",
                "th": "การตกจากที่สูงโดยเอาขาข้างเดียวลงยันพื้นอย่างรุนแรง หรืออุบัติเหตุรถจักรยานยนต์ความเร็วสูง"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "CONTRAINDICATED.",
                  "th": "ห้ามใช้การรักษาด้วยวิธีนี้"
                },
                "operative": {
                  "en": "MANDATORY OPERATIVE FIXATION. Skeletal traction for provisional length reduction. Definitive ORIF with posterior SI sacroiliac screws or spinal-pelvic fixation, combined with anterior pubic ramus/symphysis plating.",
                  "th": "จำเป็นต้องผ่าตัดเสมอ (Mandatory ORIF) ดึงถ่วงน้ำหนัก (Skeletal traction) เพื่อดึงขาลง แล้วผ่าตัดยึดสกรูข้อต่อ SI ด้านหลัง ร่วมกับยึดแผ่นเหล็ก Pubicด้านหน้า"
                }
              },
              "illustrationId": "/images/pelvis/vs.png",
              "xrayDescription": {
                "en": "Significant vertical migration of one hemipelvis relative to the sacrum on AP and Outlet views.",
                "th": "พบเชิงกรานข้างหนึ่งยกลอยสูงขึ้นกว่าอีกข้างอย่างชัดเจนในแนวตั้งในท่า AP และ Outlet view"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "acetabulum",
      "name": {
        "en": "Acetabulum",
        "th": "เบ้าหัวกระดูกสะโพก (Acetabulum)"
      },
      "classifications": [
        {
          "system": "Judet-Letournel",
          "fullName": {
            "en": "Judet-Letournel Acetabular Fracture Classification",
            "th": "การจำแนกกระดูกเบ้าสะโพกหักแบบ Judet-Letournel"
          },
          "description": {
            "en": "Classification system for acetabular fractures dividing injuries into 5 Elementary (simple) patterns and 5 Associated (complex) patterns based on column and wall involvement.",
            "th": "ระบบจำแนกกระดูกเบ้าสะโพกหัก (Acetabulum) แบ่งเป็น 5 รูปแบบพื้นฐาน (Elementary) และ 5 รูปแบบซับซ้อน (Associated) ตามการหักของผนังและเสากระดูก"
          },
          "investigations": [
            {
              "name": "AP Pelvis View",
              "details": {
                "en": "Standard AP view of the pelvis. Evaluates teardrop line, iliopectineal line (anterior column), ilioischial line (posterior column), and roof arc.",
                "th": "ภาพเอกซเรย์เชิงกรานท่า AP มาตรฐาน ประเมินแนวเส้น Iliopectineal (เสาหน้า), Ilioischial (เสาหลัง) และโดมหลังคาเบ้าสะโพก"
              }
            },
            {
              "name": "Iliac Oblique View (Judet View 45°)",
              "details": {
                "en": "45° Judet oblique view with affected hip rotated UP. Profiles the posterior column and anterior wall of the acetabulum.",
                "th": "ภาพเอกซเรย์ท่าเฉียง Judet 45 องศา โดยตะแคงสะโพกข้างที่เจ็บขึ้นบน ใช้ประเมินเสากระดูกด้านหลัง (Posterior column) และผนังด้านหน้า"
              }
            },
            {
              "name": "Obturator Oblique View (Judet View 45°)",
              "details": {
                "en": "45° Judet oblique view with affected hip rotated DOWN. Profiles the anterior column and posterior wall of the acetabulum, visualizing the obturator foramen.",
                "th": "ภาพเอกซเรย์ท่าเฉียง Judet 45 องศา โดยตะแคงสะโพกข้างที่เจ็บลงล่าง ใช้ประเมินเสากระดูกด้านหน้า (Anterior column) และผนังด้านหลัง"
              }
            }
          ],
          "types": [
            {
              "type": "Posterior Wall",
              "name": {
                "en": "Posterior Wall Fracture (Elementary #1)",
                "th": "1. Posterior Wall (ผนังเบ้าสะโพกด้านหลัง - Elementary)"
              },
              "description": {
                "en": "Elementary Type 1: Most common acetabular fracture pattern (~25% of cases)\nInvolves only the posterior articular wall rim\nFrequently associated with posterior hip dislocation\nHip stability depends on fragment size (>20-25% wall involvement)",
                "th": "รูปแบบพื้นฐานที่ 1: พบบ่อยที่สุด (~25% ของเบ้าสะโพกหักทั้งหมด)\nหักเฉพาะขอบผนังเบ้าด้านหลัง\nพบบ่อยร่วมกับข้อสะโพกหลุดไปด้านหลัง (Posterior hip dislocation)\nความมั่นคงขึ้นอยู่กับขนาดชิ้นกระดูกที่แตกออก (>20-25% ของผนังเบ้า)"
              },
              "moi": {
                "en": "Dashboard injury: Knee impacts dashboard in a seated position with flexed hip.",
                "th": "Dashboard injury (เข่าชนหน้ารถ): เข่ากระแทกหน้ารถขณะนั่งงอข้อสะโพกในรถยนต์"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "Indicated ONLY for small fragment (<20% of wall) with STABLE hip joint on dynamic testing.",
                  "th": "พิจารณาเฉพาะกรณีชิ้นกระดูกเล็กมาก (<20% ของผนัง) และข้อสะโพกมั่นคงดี"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. Urgent reduction of hip dislocation, then ORIF of posterior wall with mini-screws and a 3.5mm reconstruction buttress plate via Kocher-Langenbeck approach.",
                  "th": "ดึงจัดข้อสะโพกที่หลุดฉุกเฉิน แล้วผ่าตัด ORIF ยึดผนังหลังด้วยสกรูและแผ่นเหล็กดาม (Reconstruction buttress plate)"
                }
              },
              "illustrationId": "/images/acetabulum/posterior_wall.png",
              "xrayDescription": {
                "en": "Disrupted posterior wall rim line on AP and Obturator Oblique views, with displaced fragment posterior to femoral head.",
                "th": "ขอบผนังหลังขาดออกจากกันในท่า AP และ Obturator Oblique เห็นชิ้นกระดูกลอยอยู่หลังหัวกระดูกสะโพก"
              }
            },
            {
              "type": "Posterior Column",
              "name": {
                "en": "Posterior Column Fracture (Elementary #2)",
                "th": "2. Posterior Column (เสากระดูกด้านหลัง - Elementary)"
              },
              "description": {
                "en": "Elementary Type 2: Vertical fracture separating the posterior column (ischial ramus & wall) from pelvis\nDisrupts the ilioischial line on AP view\nExtends through ischial tuberosity and greater sciatic notch",
                "th": "รูปแบบพื้นฐานที่ 2: รอยหักแนวตั้งแยกเสากระดูกด้านหลังออกจากเชิงกราน\nทำให้แนวเส้น Ilioischial line ขาดออกจากกันในท่า AP\nพาดผ่านปุ่มกระดูก Ischial tuberosity และ Sciatic notch"
              },
              "moi": {
                "en": "Direct lateral compression on the trochanteric area with hip in abduction.",
                "th": "แรงกระแทกด้านข้างเข้าบริเวณปุ่มสะโพกขณะข้อสะโพกกางออก"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "Indicated only if non-displaced (<2mm) and roof arc angle intact (>45°).",
                  "th": "พิจารณาเฉพาะรอยหักไม่เคลื่อน (<2 มม.) และมุมหลังคาเบ้าสะโพกสมบูรณ์ดี"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. ORIF via Kocher-Langenbeck approach using reconstruction plate along the posterior column.",
                  "th": "แนะนำผ่าตัด (ORIF) ผ่านทางเข้าด้านหลัง (Kocher-Langenbeck) ดามแผ่นเหล็กตามแนวเสาหลัง"
                }
              },
              "illustrationId": "/images/acetabulum/posterior_column.png",
              "xrayDescription": {
                "en": "Disrupted ilioischial line on AP view with intact iliopectineal line. Best visualized on Iliac Oblique view.",
                "th": "แนวเส้น Ilioischial line ขาดในท่า AP โดยเส้น Iliopectineal line ยังสมบูรณ์ ประเมินได้ดีในท่า Iliac Oblique"
              }
            },
            {
              "type": "Anterior Wall",
              "name": {
                "en": "Anterior Wall Fracture (Elementary #3)",
                "th": "3. Anterior Wall (ผนังเบ้าสะโพกด้านหน้า - Elementary)"
              },
              "description": {
                "en": "Elementary Type 3: Isolated fracture of the anterior articular wall/rim\nDisrupts the middle portion of the iliopectineal line on AP view\nAssociated with anterior hip dislocation (rare)",
                "th": "รูปแบบพื้นฐานที่ 3: หักเฉพาะขอบผนังเบ้าสะโพกด้านหน้า\nทำให้ช่วงกลางของแนวเส้น Iliopectineal line ขาดออกจากกันในท่า AP\nพบบ่อยร่วมกับข้อสะโพกหลุดไปด้านหน้า"
              },
              "moi": {
                "en": "Blow to the front of hip or lateral impact with hip extended and externally rotated.",
                "th": "แรงกระแทกเข้าด้านหน้าสะโพก หรือแรงกระแทกด้านข้างขณะข้อสะโพกเหยียดและหมุนออก"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "Indicated only for small non-displaced wall fragments.",
                  "th": "พิจารณาเฉพาะรอยหักเล็กๆ ที่ไม่เคลื่อนตัว"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. ORIF via anterior approach (Ilioinguinal or Modified Stoppa approach) with reconstruction plate.",
                  "th": "แนะนำผ่าตัด (ORIF) ผ่านทางเข้าด้านหน้า (Ilioinguinal หรือ Modified Stoppa approach) ดามแผ่นเหล็ก"
                }
              },
              "illustrationId": "/images/acetabulum/anterior_wall.png",
              "xrayDescription": {
                "en": "Disrupted middle section of iliopectineal line on AP and Obturator Oblique views with anterior wall fragment displacement.",
                "th": "แนวเส้น Iliopectineal line ช่วงกลางขาดในท่า AP และ Obturator Oblique เห็นชิ้นส่วนผนังหน้าเคลื่อนออก"
              }
            },
            {
              "type": "Anterior Column",
              "name": {
                "en": "Anterior Column Fracture (Elementary #4)",
                "th": "4. Anterior Column (เสากระดูกด้านหน้า - Elementary)"
              },
              "description": {
                "en": "Elementary Type 4: Fracture involving the entire anterior column\nDisrupts the iliopectineal line on AP view\nExtends from superior pubic ramus up into iliac crest",
                "th": "รูปแบบพื้นฐานที่ 4: รอยหักบริเวณเสากระดูกด้านหน้าทั้งหมด\nทำให้แนวเส้น Iliopectineal line ขาดออกจากกันในท่า AP\nพาดผ่านจากกระดูก Superior pubic ramus ขึ้นไปถึงปีกสะโพก (Iliac crest)"
              },
              "moi": {
                "en": "Direct impact to the anterior aspect of the extended and externally rotated hip.",
                "th": "แรงกระแทกเข้าด้านหน้าสะโพกขณะข้อสะโพกเหยียดและหมุนออกด้านนอก"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "Indicated for non-displaced fractures with intact weight-bearing dome.",
                  "th": "พิจารณาเฉพาะรอยหักไม่เคลื่อนและผิวรับน้ำหนักด้านบนไม่เสียหาย"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. ORIF via anterior approach (Ilioinguinal or Stoppa) using long reconstruction plates along the pelvic brim.",
                  "th": "แนะนำผ่าตัด (ORIF) ผ่านทางเข้าด้านหน้า ดามแผ่นเหล็กยาวตามแนวขอบเชิงกราน (Pelvic brim)"
                }
              },
              "illustrationId": "/images/acetabulum/anterior_column.png",
              "xrayDescription": {
                "en": "Complete disruption of iliopectineal line extending to iliac crest on AP and Obturator Oblique views.",
                "th": "แนวเส้น Iliopectineal line ขาดออกจากกันสมบูรณ์ขึ้นไปถึงปีกสะโพกในท่า AP และ Obturator Oblique"
              }
            },
            {
              "type": "Transverse",
              "name": {
                "en": "Transverse Acetabular Fracture (Elementary #5)",
                "th": "5. Transverse (หักแนวขวางตัดผ่านเบ้าสะโพก - Elementary)"
              },
              "description": {
                "en": "Elementary Type 5: Horizontal fracture dividing acetabulum into superior (iliac) and inferior (ischial/pubic) halves\nDisrupts BOTH iliopectineal and ilioischial lines\nObturator foramen remains INTACT\nArticular weight-bearing dome is divided",
                "th": "รูปแบบพื้นฐานที่ 5: รอยหักแนวขวางแบ่งเบ้าสะโพกออกเป็นครึ่งบนและครึ่งล่าง\nทำให้แนวเส้น Iliopectineal และ Ilioischial ขาดออกจากกันทั้งสองเส้น\nช่อง Obturator foramen ยังคงสมบูรณ์ไม่แตก\nผิวข้อต่อรับน้ำหนักส่วนหลังคาถูกตัดขาดครึ่ง"
              },
              "moi": {
                "en": "Direct blow to the lateral trochanter with hip in neutral position.",
                "th": "แรงกระแทกโดยตรงเข้าที่ปุ่มสะโพกด้านข้างขณะข้อสะโพกอยู่ในท่าปกติ"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "Indicated only if non-displaced (<2mm displacement) with congruent joint lines.",
                  "th": "พิจารณาเฉพาะรอยหักไม่เคลื่อน (<2 มม.) และผิวข้อเรียบเข้ากันดี"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. ORIF with reconstruction plates along posterior column (Kocher-Langenbeck) or anterior approach.",
                  "th": "แนะนำผ่าตัด (ORIF) ดามแผ่นเหล็กยึดเสากระดูกเพื่อดึงผิวข้อส่วนบนและล่างให้เข้าที่สมบูรณ์"
                }
              },
              "illustrationId": "/images/acetabulum/transverse.png",
              "xrayDescription": {
                "en": "Horizontal fracture line crossing both anterior and posterior columns on AP and both Judet oblique views.",
                "th": "รอยหักแนวขวางพาดตัดผ่านทั้งเสาหน้าและเสาหลังในท่า AP และ Judet Oblique ทั้งสองท่า"
              }
            },
            {
              "type": "T-Shaped",
              "name": {
                "en": "T-Shaped Fracture (Associated #1)",
                "th": "6. T-Shaped (หักแนวขวางร่วมกับแนวดิ่ง - Associated)"
              },
              "description": {
                "en": "Associated Type 1: Transverse fracture line combined with a vertical stem fracture\nVertical stem extends inferiorly into the obturator foramen\nDisrupts iliopectineal line, ilioischial line, AND obturator ring\nSeparates ischial and pubic rami from each other",
                "th": "รูปแบบซับซ้อนที่ 1: รอยหักแนวขวางตัดผ่านเบ้าสะโพก ร่วมกับรอยหักแนวตั้งชี้ลงด้านล่างเป็นรูปตัว T\nแนวดิ่งพาดผ่านลงไปตัดช่อง Obturator foramen\nทำให้เส้น Iliopectineal, Ilioischial และวง Obturator foramen ขาดทั้งหมด\nชิ้นส่วนกระดูก Ischium และ Pubis แยกออกจากกันอย่างสิ้นเชิง"
              },
              "moi": {
                "en": "Direct lateral force on trochanter with hip flexed or neutral.",
                "th": "แรงกระแทกด้านข้างเข้าที่ปุ่มสะโพกขณะงอหรือเหยียดสะโพก"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "Not recommended due to high rate of articular incongruity.",
                  "th": "ไม่แนะนำเนื่องจากผิวข้อเคลื่อนและเกยกันมาก"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. ORIF via Kocher-Langenbeck approach or combined approaches to reduce and fix both the transverse component and vertical stem.",
                  "th": "แนะนำผ่าตัด (ORIF) ผ่านทางเข้าด้านหลังหรือเปิดสองทาง เพื่อจัดยึดแนวกระดูกหักขวางและแนวดิ่งตัว T ให้เรียบสนิท"
                }
              },
              "illustrationId": "/images/acetabulum/t_shaped.png",
              "xrayDescription": {
                "en": "Transverse fracture pattern on AP view with vertical fracture line splitting the obturator foramen.",
                "th": "เห็นแนวกระดูกหักขวาง ร่วมกับแนวหักตั้งแยกช่อง Obturator foramen ออกเป็นสองฝั่ง"
              }
            },
            {
              "type": "Posterior Column + Wall",
              "name": {
                "en": "Posterior Column + Posterior Wall (Associated #2)",
                "th": "7. Posterior Column + Posterior Wall (Associated)"
              },
              "description": {
                "en": "Associated Type 2: Combined posterior column vertical fracture AND posterior wall rim fracture\nHigh rate of posterior hip dislocation and sciatic nerve injury\nEntire posterior support of acetabulum is lost",
                "th": "รูปแบบซับซ้อนที่ 2: รอยหักแนวตั้งของเสาหลัง ร่วมกับผนังหลังเบ้าสะโพกแตกกะเทาะหลุดออก\nเสี่ยงสูงมากต่อข้อสะโพกหลุดไปด้านหลัง และการบาดเจ็บของเส้นประสาท Sciatic\nโครงสร้างรับแรงด้านหลังของเบ้าสะโพกทั้งหมดสูญเสียไปอย่างสิ้นเชิง"
              },
              "moi": {
                "en": "Severe dashboard impact with flexed and adducted hip.",
                "th": "การกระแทกหน้ารถยนต์อย่างรุนแรงขณะนั่งงอและหุบขา"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "CONTRAINDICATED. Highly unstable hip joint.",
                  "th": "ห้ามใช้การรักษาด้วยวิธีนี้ ข้อสะโพกไม่มั่นคงอย่างยิ่ง"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. Urgent hip reduction. ORIF via Kocher-Langenbeck approach with posterior column reconstruction plate and spring plates/screws for posterior wall.",
                  "th": "ดึงจัดข้อสะโพกหลุดฉุกเฉิน แล้วผ่าตัด ORIF ยึดเสาหลังด้วยแผ่นเหล็กดามร่วมกับสกรูยึดผนังหลัง"
                }
              },
              "illustrationId": "/images/acetabulum/post_column_wall.png",
              "xrayDescription": {
                "en": "Ilioischial line disruption combined with displaced posterior wall fragment on AP and Obturator Oblique views.",
                "th": "แนวเส้น Ilioischial line ขาด ร่วมกับชิ้นกระดูกผนังหลังเคลื่อนตัวในท่า AP และ Obturator Oblique"
              }
            },
            {
              "type": "Transverse + Posterior Wall",
              "name": {
                "en": "Transverse + Posterior Wall (Associated #3)",
                "th": "8. Transverse + Posterior Wall (Associated)"
              },
              "description": {
                "en": "Associated Type 3: Transverse acetabular fracture combined with a posterior wall rim fracture\nVery common associated pattern (~20% of acetabular fractures)\nDisrupts iliopectineal, ilioischial, and posterior wall rim lines\nHigh risk of hip instability and post-traumatic arthritis",
                "th": "รูปแบบซับซ้อนที่ 3: รอยหักแนวขวางตัดผ่านเบ้าสะโพก ร่วมกับผนังหลังเบ้าสะโพกแตกกะเทาะ\nเป็นชนิดซับซ้อนที่พบบ่อยมาก (~20% ของเบ้าสะโพกหักทั้งหมด)\nทำให้เส้น Iliopectineal, Ilioischial และขอบผนังหลังขาดออกจากกันทั้งหมด\nเสี่ยงสูงต่อข้อสะโพกหลุดหลวมและข้อเสื่อม"
              },
              "moi": {
                "en": "High-energy direct lateral trochanteric impact.",
                "th": "แรงกระแทกด้านข้างพลังงานสูงเข้าที่ปุ่มสะโพก"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "CONTRAINDICATED.",
                  "th": "ห้ามใช้การรักษาด้วยวิธีนี้"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. ORIF via Kocher-Langenbeck approach (or combined) to reduce the transverse component first, followed by rigid fixation of the posterior wall.",
                  "th": "แนะนำผ่าตัด (ORIF) ผ่านทางเข้าด้านหลัง จัดยึดรอยหักขวางให้เข้าที่ก่อน แล้วยึดผนังหลังให้แน่นหนา"
                }
              },
              "illustrationId": "/images/acetabulum/transverse_post_wall.png",
              "xrayDescription": {
                "en": "Horizontal transverse fracture line crossing both columns plus separate posterior wall fragment on Judet views.",
                "th": "รอยหักขวางพาดตัดทั้งสองเสา ร่วมกับชิ้นกระดูกผนังหลังแยกหลุดในท่า Judet Oblique"
              }
            },
            {
              "type": "Anterior + Posterior Hemitransverse",
              "name": {
                "en": "Anterior Column/Wall + Posterior Hemitransverse (Associated #4)",
                "th": "9. Anterior + Posterior Hemitransverse (Associated)"
              },
              "description": {
                "en": "Associated Type 4: High anterior column/wall fracture combined with a horizontal posterior hemitransverse fracture line\nPosterior fracture line is lower and strictly transverse through the posterior column\nDisrupts iliopectineal line and posterior ilioischial line",
                "th": "รูปแบบซับซ้อนที่ 4: รอยหักเสาหน้า/ผนังหน้าส่วนบน ร่วมกับรอยหักครึ่งแนวขวางด้านหลัง (Posterior hemitransverse)\nแนวกระดูกหักด้านหลังจะต่ำกว่าและพาดขวางเฉพาะเสาหลังเท่านั้น\nทำให้เส้น Iliopectineal และเส้น Ilioischial ช่วงล่างขาด"
              },
              "moi": {
                "en": "Direct blow to front of extended and externally rotated hip in elderly patients.",
                "th": "แรงกระแทกเข้าด้านหน้าสะโพกขณะเหยียดและหมุนออก มักพบในผู้สูงอายุ"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "Indicated only if non-displaced and weight-bearing dome intact in elderly.",
                  "th": "พิจารณาเฉพาะรอยหักไม่เคลื่อนและผิวรับน้ำหนักส่วนหลังคาดีในผู้สูงอายุ"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. ORIF via anterior approach (Ilioinguinal/Stoppa) with long pelvic brim plate and percutaneous/open posterior column lag screw.",
                  "th": "แนะนำผ่าตัด (ORIF) ผ่านทางเข้าด้านหน้า ยึดแผ่นเหล็กตามแนวขอบเชิงกราน ร่วมกับยึดสกรูไปทางเสาหลัง"
                }
              },
              "illustrationId": "/images/acetabulum/ant_post_hemitransverse.png",
              "xrayDescription": {
                "en": "High anterior column line extending to iliac crest with low horizontal fracture line crossing only the posterior column on Judet views.",
                "th": "แนวหักเสาหน้าขึ้นสูงถึงปีกสะโพก ร่วมกับแนวหักขวางต่ำพาดผ่านเฉพาะเสาหลังในท่า Judet views"
              }
            },
            {
              "type": "Both Columns",
              "name": {
                "en": "Both Columns Fracture (Associated #5)",
                "th": "10. Both Columns (หักทั้งสองเสา - Floating Acetabulum / Associated)"
              },
              "description": {
                "en": "Associated Type 5: Most severe acetabular fracture pattern\nALL articular facets are completely disconnected from the posterior ilium (Floating Acetabulum)\nDisrupts iliopectineal line, ilioischial line, AND obturator foramen\nPathognomonic 'Spur Sign' visible on Iliac Oblique view",
                "th": "รูปแบบซับซ้อนที่ 5: รอยหักเบ้าสะโพกรุนแรงที่สุด\nผิวข้อต่อทั้งหมดหลุดแยกออกจากกระดูก Ilium ด้านหลังอย่างสิ้นเชิง (Floating Acetabulum)\nทำให้เส้น Iliopectineal, Ilioischial และช่อง Obturator foramen ขาดแตกทั้งหมด\nลักษณะเฉพาะคือพบ 'Spur Sign' ชัดเจนในท่า Iliac Oblique View"
              },
              "moi": {
                "en": "Extreme high-energy direct lateral compression or high-speed vehicle crash.",
                "th": "แรงกระแทกด้านข้างพลังงานสูงรุนแรงสุดขีด หรืออุบัติเหตุชนความเร็วสูง"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "CONTRAINDICATED. Results in severe joint incongruity and crippling arthritis.",
                  "th": "ห้ามใช้การรักษาด้วยวิธีนี้ เสี่ยงข้อเสื่อมรุนแรงขั้นพิการ"
                },
                "operative": {
                  "en": "MANDATORY HIGH-COMPLEXITY SURGERY. ORIF via anterior approach (Ilioinguinal/Stoppa) or combined dual approaches with long reconstruction plates to re-anchor floating acetabular segments to iliac wing.",
                  "th": "ผ่าตัดซับซ้อนสูง (Mandatory ORIF) ผ่านทางเข้าด้านหน้า หรือเปิดสองทางหน้า-หลัง ดามแผ่นเหล็กยาวเพื่อยึดเบ้าสะโพกที่ลอยอยู่กลับเข้ากับปีกสะโพก"
                }
              },
              "illustrationId": "/images/acetabulum/both_columns.png",
              "xrayDescription": {
                "en": "Total disruption of all pelvic lines with characteristic 'Spur Sign' (posterior iliac spine fragment) visible on Iliac Oblique view.",
                "th": "แนวเส้นเชิงกรานทั้งหมดขาดออกจากกัน พบ 'Spur Sign' ชัดเจน (ชิ้นกระดูกปีกสะโพกด้านหลังยื่นออกมา) ในท่า Iliac Oblique"
              }
            }
          ]
        }
      ]
    }
  ]
};
