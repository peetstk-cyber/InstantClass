import type { BoneData } from "../../types";

export const tlSpineBone: BoneData = {
  "id": "tl-spine",
  "name": {
    "en": "T-L Spine",
    "th": "กระดูกสันหลังส่วนอกและเอว"
  },
  "description": {
    "en": "Thoracolumbar Spine",
    "th": "กระดูกสันหลังส่วนอกและเอว"
  },
  "pediatric": false,
  "regions": [
    {
      "id": "thoracolumbar",
      "name": {
        "en": "Thoracolumbar Spine (T1–L5)",
        "th": "กระดูกสันหลังส่วนอกและเอว (T1–L5)"
      },
      "regionConcept": {
        "physicalExam": [
          {
            "sign": "TLICS Score Assessment",
            "positive": {
              "en": "TLICS score > 4 indicates surgical stabilization (evaluates Injury Morphology, PLC integrity, & Neurological status)",
              "th": "คะแนน TLICS > 4 บ่งชี้ว่าควรผ่าตัดรักษา (ประเมินจาก Morphology, เอ็นยึด PLC และระบบประสาท)"
            }
          },
          {
            "sign": "Palpable Interspinous Gap / Step-off",
            "positive": {
              "en": "Palpable gap between spinous processes = Posterior Ligamentous Complex (PLC) disruption",
              "th": "คลำพบช่องว่างกว้างผิดปกติระหว่างปุ่มกระดูกสันหลัง = เอ็นยึดด้านหลัง PLC ฉีกขาด"
            }
          }
        ],
        "acceptableAlignment": [
          {
            "parameter": {
              "en": "Kyphosis Angle",
              "th": "มุมก้มหลังผิดรูป (Kyphosis)"
            },
            "threshold": "< 25-30°",
            "note": {
              "en": "> 30° kyphosis carries high risk of progressive spinal collapse",
              "th": "> 30 องศา เสี่ยงต่อกระดูกทรุดตัวต่อเนื่อง"
            }
          },
          {
            "parameter": {
              "en": "Vertebral Height Loss",
              "th": "การสูญเสียความสูงของข้อกระดูก"
            },
            "threshold": "< 50%",
            "note": {
              "en": "> 50% anterior height loss indicates PLC instability",
              "th": "สูญเสียความสูง > 50% แสดงว่าโครงสร้างไม่มั่นคง"
            }
          }
        ],
        "redFlags": [
          {
            "en": "Conus Medullaris / Cauda Equina Syndrome (Saddle anesthesia, bowel/bladder incontinence, bilateral sciatica)",
            "th": "ภาวะกดทับปลายสายประสาท Cauda Equina (ชาบริเวณอานม้า ควบคุมอุจจาระ/ปัสสาวะไม่ได้)"
          }
        ],
        "clinicalPearls": [
          {
            "en": "Thoracolumbar junction (T11-L2) is the most common site of spinal injury due to transition from rigid thoracic spine to mobile lumbar spine.",
            "th": "ข้อต่ออก-เอว (T11-L2) เกิดการบาดเจ็บบ่อยที่สุดเนื่องจากเป็นจุดเชื่อมต่อระหว่างส่วนที่แข็งเกร็งกับส่วนที่เคลื่อนไหวได้มาก"
          }
        ]
      },
      "classifications": [
        {
          "system": "Denis 3-Column Concept",
          "fullName": {
            "en": "Denis Three-Column Concept & Mechanical Stability Assessment",
            "th": "หลักการ 3 เสาหลัก Denis และการประเมินความมั่นคง (Denis Three-Column Concept & Stability)"
          },
          "description": {
            "en": "Biomechanical framework dividing the thoracolumbar spine into 3 structural columns: Anterior, Middle (Critical for stability), and Posterior. Mechanical stability is defined by the number of compromised columns and the status of the Middle Column.",
            "th": "หลักการทางชีวกลศาสตร์แบ่งกระดูกสันหลังออกเป็น 3 เสาหลัก (Anterior, Middle [เสาหลักสำคัญที่สุด], Posterior) กำหนดความมั่นคงเชิงกลศาสตร์ (Stable vs Instability 1st/2nd/3rd Degree) ตามความเสียหายของเสาหลัก"
          },
          "concept": {
            "title": {
              "en": "Denis 3-Column Concept Clinical Concept",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ Denis 3-Column Concept"
            },
            "corePrinciple": {
              "en": "Biomechanical framework dividing the thoracolumbar spine into 3 longitudinal structural columns (Anterior, Middle, Posterior). Mechanical stability depends primarily on the integrity of the Middle Column.",
              "th": "กรอบแนวคิดทางชีวกลศาสตร์แบ่งกระดูกสันหลังอกและเอวเป็น 3 เสาหลัก (Anterior, Middle, Posterior) โดยความมั่นคงเชิงกลศาสตร์ขึ้นกับความสมบูรณ์ของ Middle Column"
            },
            "rules": [
              {
                "en": "Stable Injury (1-Column failure): Isolated Anterior Column failure (Simple Compression Fracture) -> Middle column intact -> Non-operative care (TLSO brace 8–12 weeks).",
                "th": "Stable Injury (เสียสภาพ 1 เสาหลัก): เสียเฉพาะ Anterior Column (Compression Fracture) -> Middle column สมบูรณ์ -> ใส่เฝือกพยุงหลัง TLSO 8–12 สัปดาห์"
              },
              {
                "en": "1st Degree Instability (Mechanical Instability): 2-Column failure under distraction (e.g., Bony Chance fracture) -> Risk of progressive kyphosis -> TLSO hyperextension or Surgical Fixation.",
                "th": "1st Degree Instability (ไม่มั่นคงเชิงกลศาสตร์): เสียสภาพ 2 เสาหลักจากแรงดึงถ่าง (เช่น Bony Chance) -> เสี่ยงหลังโก่ง -> ใส่ TLSO hyperextension หรือผ่าตัด"
              },
              {
                "en": "2nd Degree Instability (Neurological Instability): Middle Column failure under axial compression with canal retropulsion (Burst fracture) -> High risk of neuro deficit -> Decompression & Fixation if canal occlusion > 50% or neuro deficit.",
                "th": "2nd Degree Instability (ไม่มั่นคงเชิงระบบประสาท): เสียสภาพ Middle Column จากแรงอัดกดช่องไขสันหลัง (Burst fracture) -> ผ่าตัดเมื่อกดช่อง > 50% หรือมีอาการประสาท"
              },
              {
                "en": "3rd Degree Instability (Mechanical + Neurological Instability): 3-Column failure (Fracture-Dislocation) -> Extreme instability -> Emergency Surgical Fixation.",
                "th": "3rd Degree Instability (ไม่มั่นคงขั้นสูงสุด): เสียสภาพครบทั้ง 3 เสาหลัก (Fracture-Dislocation) -> ผ่าตัดดามยึดฉุกเฉิน"
              }
            ],
            "clinicalSignificance": [
              {
                "en": "The Middle Column (posterior 1/3 body, posterior annulus, PLL) is the critical cornerstone of spinal stability; retropulsed bone fragments into canal indicate a Burst fracture (2-column failure), not a simple compression fracture.",
                "th": "Middle Column เป็นเสาหลักหัวใจสำคัญของความมั่นคง ชิ้นกระดูกทรุดดันเข้าช่องไขสันหลังแสดงว่าเป็น Burst fracture (เสีย 2 เสา) ไม่ใช่รอยหักยุบธรรมดา"
              },
              {
                "en": "Always obtain thin-slice 3D CT to evaluate Middle Column posterior cortical wall integrity.",
                "th": "ต้องส่งตรวจ CT 3D ความละเอียดสูงเสมอเพื่อประเมินความสมบูรณ์ของผนังกระดูกขอบหลัง (Middle Column)"
              }
            ]
          },
          "investigations": [
            {
              "name": "AP & Lateral Thoracolumbar Spine Radiographs",
              "details": {
                "en": "Standard AP and Lateral views. Evaluates Cobb angle kyphosis, vertebral height loss %, interpedicular distance widening (hallmark of burst fracture), and translation.",
                "th": "ภาพเอกซเรย์อกและเอวท่า AP และ Lateral วัดมุมคอโก่ง Cobb angle, เปอร์เซ็นต์การยุบตัว, ระยะห่างระหว่าง Pedicle กว้างขึ้น (ลักษณะสำคัญของ Burst fracture) และการเกยเคลื่อน"
              }
            },
            {
              "name": "High-Resolution 3D CT Scan of Thoracolumbar Spine",
              "details": {
                "en": "Thin-slice 3D CT scan. Gold standard to evaluate Middle Column integrity, calculate spinal canal occlusion %, identify retropulsed bone fragments, and map pedicle/laminar fractures.",
                "th": "เอกซเรย์คอมพิวเตอร์ 3D ความละเอียดสูง เป็นมาตรฐานหลักในการประเมินความสมบูรณ์ของ Middle Column, วัด % การกดทับช่องไขสันหลัง และดูชิ้นกระดูกทรุดดันไปด้านหลัง"
              }
            },
            {
              "name": "MRI Thoracolumbar Spine (T1, T2, STIR)",
              "details": {
                "en": "TL-spine MRI. Mandatory in setting of neurological deficit or suspected posterior ligamentous complex (PLC) disruption. Evaluates spinal cord/conus medullaris contusion, epidural hematoma, and disc disruption.",
                "th": "เอกซเรย์คลื่นแม่เหล็กไฟฟ้า (MRI) จำเป็นอย่างยิ่งเมื่อมีอาการอัมพาตหรือสงสัยเอ็นยึดด้านหลัง (PLC) ฉีกขาด โดยเห็นการบาดเจ็บของไขสันหลัง/Conus medullaris และหมอนรองกระดูก"
              }
            }
          ],
          "types": [
            {
              "type": "Anterior Column",
              "name": {
                "en": "1. Anterior Column (ALL + Anterior 2/3 Body & Disc)",
                "th": "1. Anterior Column (เสาหลักด้านหน้า: ALL + ตัวกระดูก 2/3 หน้า)"
              },
              "description": {
                "en": "Anterior Longitudinal Ligament (ALL) + Anterior 2/3 of Vertebral Body + Anterior 2/3 of Intervertebral Disc\nResists compression forces during flexion\nIsolated Anterior Column injury (e.g. Simple Compression Fracture) maintains intact middle column and is MECHANICALLY STABLE",
                "th": "ประกอบด้วยเอ็น ALL + ตัวกระดูก 2/3 ส่วนหน้า + หมอนรอง 2/3 ส่วนหน้า\nทำหน้าที่รับแรงกดอัดเมื่อก้มตัว\nการบาดเจ็บเฉพาะเสาหลักด้านหน้า (เช่น Simple Compression Fracture) โดยเสาหลักกลางยังสมบูรณ์ ถือเป็น **MECHANICALLY STABLE (มั่นคงเชิงกลศาสตร์)**"
              },
              "moi": {
                "en": "Forward flexion or vertical axial loading.",
                "th": "แรงก้มคอหรือแรงกดอัดดิ่งลงล่าง"
              },
              "treatment": {
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED. Rigid TLSO brace for 8-12 weeks.",
                  "th": "แนะนำรักษาแบบไม่ผ่าตัด ใส่เฝือกพยุงหลัง TLSO 8-12 สัปดาห์"
                },
                "operative": {
                  "en": "Not indicated.",
                  "th": "ไม่มีข้อบ่งชี้ในการผ่าตัด"
                }
              },
              "illustrationId": "",
              "xrayDescription": {
                "en": "Anterior height loss of vertebral body with intact posterior 1/3 cortical wall.",
                "th": "เห็นลำตัวกระดูกยุบตัวเฉพาะ 2/3 ด้านหน้า โดยเสาหลักกลางขอบหลังยังปกติ"
              }
            },
            {
              "type": "Middle Column",
              "name": {
                "en": "2. Middle Column (Posterior 1/3 Body & Disc + PLL - CRITICAL)",
                "th": "2. Middle Column (เสาหลักส่วนกลาง: ตัวกระดูก 1/3 หลัง + PLL - เสาหลักสำคัญที่สุด)"
              },
              "description": {
                "en": "Posterior 1/3 of Vertebral Body + Posterior 1/3 of Intervertebral Disc + Posterior Longitudinal Ligament (PLL)\n★ THE CRITICAL DETERMINANT OF SPINAL STABILITY ★\nDisruption or retropulsion of the Middle Column leads to MECHANICAL INSTABILITY and high risk of spinal cord / cauda equina compression",
                "th": "ประกอบด้วยตัวกระดูก 1/3 ส่วนหลัง + หมอนรอง 1/3 ส่วนหลัง + เอ็น PLL\n★ **เสาหลักที่สำคัญที่สุดในการกำหนดความมั่นคงของกระดูกสันหลัง** ★\nหากเสาหลักส่วนกลางแตกป่นหรือหลุดดัน (Retropulsion) จะทำให้เกิด **MECHANICAL INSTABILITY (ไม่มั่นคง)** และเสี่ยงอัมพาต"
              },
              "moi": {
                "en": "Axial compression or distraction violence.",
                "th": "แรงกดอัดตามแนวแกนดิ่ง หรือแรงดึงถ่างอย่างรุนแรง"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "Trial of TLSO brace ONLY if non-displaced and canal occlusion <50%.",
                  "th": "ใส่ TLSO เฉพาะกรณีไม่เคลื่อนตัวและช่องไขสันหลังกด <50%"
                },
                "operative": {
                  "en": "RECOMMENDED FOR DISRUPTED MIDDLE COLUMN. Posterior Pedicle Screw Fusion or Corpectomy.",
                  "th": "แนะนำผ่าตัดยึดตรึงกระดูกกรณี Middle Column แตกป่นหลุดดัน"
                }
              },
              "illustrationId": "",
              "xrayDescription": {
                "en": "Posterior cortical retropulsion into spinal canal with loss of posterior body height.",
                "th": "เห็นขอบกระดูกส่วนหลังแตกป่นและทรุดดันเข้าช่องไขสันหลัง"
              }
            },
            {
              "type": "Posterior Column",
              "name": {
                "en": "3. Posterior Column (Posterior Osseous Arch + PLC Complex)",
                "th": "3. Posterior Column (เสาหลักด้านหลัง: วงโค้งกระดูก + เอ็นยึด PLC)"
              },
              "description": {
                "en": "Posterior Osseous Arch (Pedicles, Facets, Laminae, Spinous Process) + Posterior Ligamentous Complex (PLC: Ligamentum Flavum, Interspinous/Supraspinous Ligaments, Facet Capsules)\nResists tension / distraction forces\nDisruption of PLC leads to progressive kyphotic deformity and late instability",
                "th": "ประกอบด้วยวงโค้งกระดูกด้านหลัง (Pedicles, Facets, Laminae, Spinous process) + กลุ่มเอ็นยึดด้านหลัง (PLC: Ligamentum Flavum, Interspinous/Supraspinous ligaments, Facet capsules)\nทำหน้าที่รับแรงดึงถ่าง\nหากเอ็น PLC ฉีกขาด จะทำให้คอโก่งผิดรูปถาวร"
              },
              "moi": {
                "en": "Distraction or flexion-distraction force.",
                "th": "แรงดึงถ่าง หรือแรงก้มคอดึงถ่าง"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "Conservative for isolated bony spinous process fracture.",
                  "th": "รักษาไม่ผ่าตัดเฉพาะหักยอด spinous process"
                },
                "operative": {
                  "en": "RECOMMENDED FOR PLC LIGAMENTOUS DISRUPTION. Posterior instrumented fusion.",
                  "th": "แนะนำผ่าตัดยึดตรึงด้านหลังกรณีเอ็นยึด PLC ฉีกขาด"
                }
              },
              "illustrationId": "",
              "xrayDescription": {
                "en": "Widened interspinous gap, facet subluxation, or horizontal lamina/spinous process fracture.",
                "th": "เห็นระยะช่องว่างระหว่างยอดกระดูกกว้างขึ้น หรือเห็นรอยหักผ่านวงโค้งกระดูกด้านหลัง"
              }
            },
            {
              "type": "Stability Concept",
              "name": {
                "en": "4. Stability Concept (Mechanical vs Neurological Instability)",
                "th": "4. Concept ความมั่นคง (Stable vs Instability 1st / 2nd / 3rd Degree)"
              },
              "description": {
                "en": "STABLE INJURY: 1-Column failure (Anterior only - Compression fracture). Middle column intact. No risk of deformity or neuro deficit.\n1st DEGREE INSTABILITY (Mechanical Only): 2-Column failure under distraction (e.g. Bony Chance fracture). Risk of progressive kyphotic deformity.\n2nd DEGREE INSTABILITY (Neurological Risk): Middle column failure under compression with canal retropulsion (Burst fracture). High risk of late or progressive neuro deficit.\n3rd DEGREE INSTABILITY (Mechanical + Neurological): 3-Column failure (Fracture-Dislocation). Extreme instability with immediate severe paralysis.",
                "th": "**STABLE (มั่นคง):** เสียสภาพ 1 เสาหลักเฉพาะด้านหน้า (Compression fracture) โดย Middle column ยังสมบูรณ์ ไม่เสี่ยงอัมพาต\n**1st DEGREE INSTABILITY (ไม่มั่นคงเชิงกลศาสตร์):** เสียสภาพ 2 เสาหลักจากแรงดึงถ่าง (Bony Chance) เสี่ยงหลังโก่งพับในอนาคต\n**2nd DEGREE INSTABILITY (ไม่มั่นคงเชิงระบบประสาท):** เสียสภาพ Middle column จากแรงอัดดิ่งชิ้นกระดูกกดช่องไขสันหลัง (Burst fracture) เสี่ยงอัมพาตสูง\n**3rd DEGREE INSTABILITY (ไม่มั่นคงขั้นสูงสุด):** เสียสภาพครบ 3 เสาหลัก (Fracture-Dislocation) เสี่ยงอัมพาตถาวรทันที"
              },
              "moi": {
                "en": "Variable biomechanical vector forces.",
                "th": "แรงชีวกลศาสตร์ในทิศทางต่างๆ"
              },
              "treatment": {
                "preferred": "none",
                "conservative": {
                  "en": "Conservative for STABLE (1-column failure).",
                  "th": "รักษาไม่ผ่าตัดในรอยหัก STABLE (เสียสภาพ 1 เสาหลัก)"
                },
                "operative": {
                  "en": "OPERATIVE FOR 1st, 2nd, and 3rd DEGREE INSTABILITY.",
                  "th": "ผ่าตัดรักษาในรอยหัก Instability ขั้นที่ 1, 2 และ 3"
                }
              },
              "illustrationId": "",
              "xrayDescription": {
                "en": "Assessment of column involvement and posterior wall integrity on CT/MRI.",
                "th": "ประเมินจำนวนเสาหลักที่เสียหายและความสมบูรณ์ของผนังกระดูกส่วนหลัง"
              }
            }
          ]
        },
        {
          "system": "Denis Classification",
          "fullName": {
            "en": "Denis Classification for Thoracolumbar Spine Fractures",
            "th": "การจำแนกการบาดเจ็บกระดูกสันหลังส่วนอกและเอวแบบ Denis (Denis Fracture Types)"
          },
          "description": {
            "en": "Classification categorizing thoracolumbar fractures into 4 major types: Compression Fracture (Type 1), Burst Fracture (Type 2), Seat-Belt / Chance Injury (Type 3), and Fracture-Dislocation (Type 4).",
            "th": "ระบบจำแนกการบาดเจ็บกระดูกสันหลังอกและเอวเป็น 4 กลุ่มหลักตามลักษณะรอยหัก: Compression Fracture (Type 1), Burst Fracture (Type 2), Seat-Belt / Chance Injury (Type 3) และ Fracture-Dislocation (Type 4)"
          },
          "concept": {
            "title": {
              "en": "Denis Thoracolumbar Fracture Clinical Concept",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ Denis Classification"
            },
            "corePrinciple": {
              "en": "Clinical fracture system categorizing thoracolumbar spinal injuries into 4 distinct structural fracture types based on biomechanical failure mechanism.",
              "th": "ระบบจำแนกรอยหักทางคลินิกที่จัดหมวดหมู่การบาดเจ็บกระดูกสันหลังอกและเอวเป็น 4 กลุ่มหลักตามกลไกทางชีวกลศาสตร์ของการพังทลาย"
            },
            "rules": [
              {
                "en": "Type 1 (Compression Fracture): Anterior column wedge failure -> Stable -> TLSO brace for 8–12 weeks (Operative if anterior height loss > 50% or kyphosis > 30°).",
                "th": "Type 1 (Compression Fracture): ยุบตัวเฉพาะเสาหน้า -> มั่นคง -> ใส่ TLSO 8–12 สัปดาห์ (ผ่าตัดเฉพาะเมื่อยุบ > 50% หรือคอโก่ง > 30°)"
              },
              {
                "en": "Type 2 (Burst Fracture): Retropulsed middle column fragment into canal -> Conservative if neurologically intact, canal occlusion < 50%, and kyphosis < 25°; Operative if neuro deficit, canal occlusion ≥ 50%, or kyphosis ≥ 25°.",
                "th": "Type 2 (Burst Fracture): เสากลางแตกดันเข้าช่องไขสันหลัง -> ไม่ผ่าตัดเมื่อระบบประสาทปกติ ช่องกด < 50% และโก่ง < 25° / ผ่าตัดเมื่อมีอาการประสาท, ช่องกด ≥ 50% หรือโก่ง ≥ 25°"
              },
              {
                "en": "Type 3 (Seat-Belt / Chance Injury): Distraction failure -> Bony Chance (3A) managed in hyperextension TLSO; Ligamentous Chance (3B) requires Posterior Fusion.",
                "th": "Type 3 (Seat-Belt / Chance Injury): แรงดึงถ่าง -> Bony Chance (3A) ใส่ hyperextension TLSO ได้ / Ligamentous Chance (3B) ต้องผ่าตัดดามยึดด้านหลัง"
              },
              {
                "en": "Type 4 (Fracture-Dislocation): Complete 3-column disruption -> Absolute surgical emergency (Urgent open reduction and multi-level posterior fusion).",
                "th": "Type 4 (Fracture-Dislocation): เสียสภาพ 3 เสาหลัก -> ข้อบ่งชี้ผ่าตัดฉุกเฉินด่วนที่สุด"
              }
            ],
            "clinicalSignificance": [
              {
                "en": "In Seat-Belt / Chance injuries (Type 3), ALWAYS perform abdominal CT and physical exam! Associated intra-abdominal visceral injuries (bowel perforation, mesenteric tears) occur in 30–50% of cases and can be fatal if missed.",
                "th": "ใน Seat-Belt / Chance injuries (Type 3) ต้องตรวจช่องท้องและส่ง CT Abdomen เสมอ! เนื่องจากพบการบาดเจ็บของอวัยวะในช่องท้อง (ลำไส้ทะลุ) ร่วมด้วยสูงถึง 30–50%"
              },
              {
                "en": "Never misdiagnose a Burst fracture (Type 2) as a simple Compression fracture (Type 1); check interpedicular distance on AP view and CT.",
                "th": "ห้ามวินิจฉัย Burst fracture (Type 2) ผิดเป็น Compression fracture (Type 1) เด็ดขาด ให้สังเกตระยะห่างระหว่าง Pedicle ในภาพ AP และ CT"
              }
            ]
          },
          "investigations": [
            {
              "name": "AP & Lateral Thoracolumbar Spine Radiographs",
              "details": {
                "en": "Standard AP and Lateral views. Evaluates Cobb angle kyphosis, vertebral height loss %, interpedicular distance widening (hallmark of burst fracture), and translation.",
                "th": "ภาพเอกซเรย์อกและเอวท่า AP และ Lateral วัดมุมคอโก่ง Cobb angle, เปอร์เซ็นต์การยุบตัว, ระยะห่างระหว่าง Pedicle กว้างขึ้น (ลักษณะสำคัญของ Burst fracture) และการเกยเคลื่อน"
              }
            },
            {
              "name": "High-Resolution 3D CT Scan of Thoracolumbar Spine",
              "details": {
                "en": "Thin-slice 3D CT scan. Gold standard to evaluate Middle Column integrity, calculate spinal canal occlusion %, identify retropulsed bone fragments, and map pedicle/laminar fractures.",
                "th": "เอกซเรย์คอมพิวเตอร์ 3D ความละเอียดสูง เป็นมาตรฐานหลักในการประเมินความสมบูรณ์ของ Middle Column, วัด % การกดทับช่องไขสันหลัง และดูชิ้นกระดูกทรุดดันไปด้านหลัง"
              }
            },
            {
              "name": "MRI Thoracolumbar Spine (T1, T2, STIR)",
              "details": {
                "en": "TL-spine MRI. Mandatory in setting of neurological deficit or suspected posterior ligamentous complex (PLC) disruption. Evaluates spinal cord/conus medullaris contusion, epidural hematoma, and disc disruption.",
                "th": "เอกซเรย์คลื่นแม่เหล็กไฟฟ้า (MRI) จำเป็นอย่างยิ่งเมื่อมีอาการอัมพาตหรือสงสัยเอ็นยึดด้านหลัง (PLC) ฉีกขาด โดยเห็นการบาดเจ็บของไขสันหลัง/Conus medullaris และหมอนรองกระดูก"
              }
            },
            {
              "name": "CT Angiography of Aorta & Abdomen",
              "details": {
                "en": "Contrast CT of abdomen/pelvis. Indicated in seat-belt Chance injuries (Type 3) to rule out associated intra-abdominal visceral injuries (bowel perforation, mesenteric tear ~30-50%).",
                "th": "เอกซเรย์คอมพิวเตอร์หลอดเลือดช่องท้อง มีข้อบ่งชี้ใน Seat-belt Chance injury (Type 3) เพื่อตรวจกรองลำไส้ทะลุหรือเส้นเลือดช่องท้องฉีกขาด (~30-50%)"
              }
            }
          ],
          "types": [
            {
              "type": "Compression",
              "name": {
                "en": "Denis Type 1: Compression Fracture (Wedge Fracture - STABLE)",
                "th": "Denis Type 1: Compression Fracture (หักยุบตัวส่วนหน้า - มั่นคง)"
              },
              "description": {
                "en": "Failure of ANTERIOR column ONLY under compression force\nMiddle and Posterior columns remain completely intact and stable\nPreserved spinal canal diameter without retropulsion\nNeurological deficit is extremely rare (0-1%)\nHigh success rate with non-operative care",
                "th": "การทรุดหักเฉพาะ **เสาหลักด้านหน้า (Anterior column)** จากแรงกดอัด\nเสาหลักส่วนกลาง (Middle column) และด้านหลัง (Posterior column) ยังคง **สมบูรณ์ดี**\nขนาดช่องไขสันหลังกว้างปกติ ไม่มีชิ้นกระดูกดันไปด้านหลัง\nภาวะแทรกซ้อนทางประสาทพบน้อยมาก (0-1%)\nผลการรักษาดีเยี่ยมโดยไม่ต้องผ่าตัด"
              },
              "moi": {
                "en": "Forward flexion or vertical axial load (e.g. slip and fall on buttocks).",
                "th": "การก้มคอดิ่งลงล่าง หรือลื่นล้มก้นกระแทกพื้น"
              },
              "treatment": {
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED TREATMENT (GOLD STANDARD). External immobilization with Thoracolumbar Sacral Orthosis (TLSO) or Jewett Hyperextension Brace for 8-12 weeks, with early ambulation as tolerated.",
                  "th": "แนะนำรักษาแบบไม่ผ่าตัดเป็นมาตรฐานหลัก ใส่เฝือกพยุงหลัง TLSO หรือ Jewett Brace 8-12 สัปดาห์ ร่วมกับเริ่มเดินตามที่ไหว"
                },
                "operative": {
                  "en": "Rarely indicated unless severe anterior height loss >50% or kyphosis >30° causing mechanical instability.",
                  "th": "ผ่าตัดเฉพาะกรณีความสูงยุบ >50% หรือคอโก่ง >30 องศา"
                }
              },
              "illustrationId": "",
              "xrayDescription": {
                "en": "Anterior wedge height loss of vertebral body with intact posterior cortex and normal interpedicular distance.",
                "th": "เห็นลำตัวกระดูกยุบตัวเป็นรูปิ่มด้านหน้า โดยขอบกระดูกส่วนหลังและระยะ Pedicle ยังปกติ"
              }
            },
            {
              "type": "Burst",
              "name": {
                "en": "Denis Type 2: Burst Fracture (Middle Column Failure - POTENTIALLY UNSTABLE)",
                "th": "Denis Type 2: Burst Fracture (เสาหลักส่วนกลางแตกป่น - เสี่ยงไม่มั่นคง/อัมพาต)"
              },
              "description": {
                "en": "Failure of BOTH ANTERIOR AND MIDDLE columns under heavy axial compression\nPosterior wall of vertebral body is fractured and retropulsed into the spinal canal\nSubtyped into 2A (Both endplates), 2B (Superior endplate - most common), 2C (Inferior endplate), 2D (Burst-rotation), and 2E (Burst-lateral)\nHigh risk of spinal cord / conus medullaris / cauda equina compression (~30-50%)",
                "th": "การหักแตกป่นของ **ทั้งเสาหลักด้านหน้าและส่วนกลาง (Anterior + Middle columns)** จากแรงอัดดิ่งรุนแรง\nผนังด้านหลังของตัวกระดูกแตกป่นและ **ทรุดดัน (Retropulsion)** เข้าไปกดช่องไขสันหลัง\nแบ่งย่อยเป็น 2A (ขอบบน+ล่าง), 2B (ขอบบน - พบบ่อยสุด), 2C (ขอบล่าง), 2D (หมอนบิด), 2E (เฉียงข้าง)\nเสี่ยงสูงต่อการกดทับไขสันหลังและอัมพาตครึ่งท่อน (~30-50%)"
              },
              "moi": {
                "en": "High-energy vertical fall from height landing on feet/buttocks or motor vehicle crash.",
                "th": "ตกจากที่สูงลงมากระแทกเท้า/ก้น หรืออุบัติเหตุทางถนนรุนแรง"
              },
              "treatment": {
                "preferred": "conservative",
                "conservative": {
                  "en": "Indications for Conservative Care: Neurologically intact patients with <50% spinal canal occlusion, <25° kyphosis, and <50% height loss. TLSO hyperextension brace for 10-12 weeks.",
                  "th": "รักษาแบบไม่ผ่าตัดในผู้ป่วยที่ระบบประสาทปกติ, ช่องไขสันหลังถูกกด <50%, คอโก่ง <25° และความสูงยุบ <50% โดยใส่ TLSO 10-12 สัปดาห์"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT FOR UNSTABLE BURST FRACTURES. Surgical decompression & stabilization: Posterior Pedicle Screw Instrumented Fusion (short-segment or long-segment) ± Laminectomy/Decompression, OR Anterior Corpectomy with mesh cage. Mandatory if neurological deficit present.",
                  "th": "แนะนำผ่าตัดรักษาในรอยหักไม่มั่นคง: ผ่าตัดคลายการกดทับและดามยึดกระดูก Posterior Pedicle Screw Fusion หรือ Anterior Corpectomy จำเป็นด่วนที่สุดหากมีอาการอัมพาต"
                }
              },
              "illustrationId": "",
              "xrayDescription": {
                "en": "Widened interpedicular distance on AP view; posterior cortical wall retropulsion into canal with loss of posterior body height on Lateral view.",
                "th": "เห็นระยะห่าง Pedicle กว้างขึ้นในท่า AP และเห็นขอบกระดูกหลังทรุดดันเข้าช่องไขสันหลังในท่า Lateral"
              }
            },
            {
              "type": "Seat-Belt (Chance)",
              "name": {
                "en": "Denis Type 3: Seat-Belt / Chance Injury (Distraction - UNSTABLE)",
                "th": "Denis Type 3: Seat-Belt / Chance Injury (แรงดึงถ่างดึงอ้า - ไม่มั่นคง)"
              },
              "description": {
                "en": "Failure of MIDDLE AND POSTERIOR columns under distraction (tension) force\nAnterior column acts as a hinge or fails under compression\nSubtyped into 3A (1-level bony Chance through pedicle/spinous process), 3B (1-level ligamentous Chance through disc/ligaments), and 3C (2-level injury)\nHigh association with intra-abdominal visceral injuries (bowel/mesenteric rupture ~30-50%)",
                "th": "การฉีกขาดอ้าแยกของ **เสาหลักส่วนกลางและด้านหลัง (Middle + Posterior columns)** จากแรงดึงถ่าง\nเสาหลักด้านหน้าเป็นจุดหมุนพับ (Hinge)\nแบ่งย่อยเป็น 3A (ขาดพาดผ่านกระดูก Bony Chance), 3B (ขาดพาดผ่านเอ็น/หมอนรอง Ligamentous Chance), 3C (ขาด 2 ระดับ)\nพบร่วมกับ **อวัยวะช่องท้องฉีกขาด (ลำไส้ทะลุ ~30-50%)**"
              },
              "moi": {
                "en": "Rapid deceleration MVA while wearing lap-belt only (throwing upper body forward over belt).",
                "th": "อุบัติเหตุรถยนต์ขณะคาดเข็มขัดนิรภัยเฉพาะหน้าตัก (Lap-belt) เหวี่ยงตัวไปด้านหน้าอย่างรุนแรง"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "Trial of Hyperextension TLSO brace ONLY for pure Bony Chance (Type 3A) with <15° kyphosis and intact neurological status.",
                  "th": "พิจารณาใส่ Hyperextension TLSO เฉพาะใน Bony Chance (Type 3A) ที่หักผ่านกระดูกและคอโก่ง <15°"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT FOR LIGAMENTOUS CHANCE (3B) OR KYPHOSIS >15°. Posterior Pedicle Screw Fixation across 1 level above and below fracture zone to re-establish posterior tension band.",
                  "th": "แนะนำผ่าตัดรักษาใน Ligamentous Chance (3B) หรือคอโก่ง >15° โดยผ่าตัดยึด Pedicle Screw ด้านหลัง"
                }
              },
              "illustrationId": "",
              "xrayDescription": {
                "en": "Horizontal fracture line splitting spinous process, pedicle, and body (Bony Chance) OR wide interspinous and disc space gapping (Ligamentous Chance).",
                "th": "เห็นรอยหักแนวนอนตัดแยกยอด spinous, pedicle และตัวกระดูก หรือเห็นระยะเอ็นและหมอนรองอ้ากว้าง"
              }
            },
            {
              "type": "Fracture-Dislocation",
              "name": {
                "en": "Denis Type 4: Fracture-Dislocation (3-Column Disruption - HIGHLY UNSTABLE)",
                "th": "Denis Type 4: Fracture-Dislocation (เสาหลักขาดทั้ง 3 เสา - ไม่มั่นคงอย่างรุนแรงสูงสุด)"
              },
              "description": {
                "en": "Failure of ALL THREE COLUMNS (Anterior, Middle, and Posterior) under shear, rotation, or violent distraction-flexion forces\nSubtyped into 4A (Flexion-rotation), 4B (Shear), and 4C (Flexion-distraction dislocation)\nTotal structural destruction of spinal continuity\nHIGH INCIDENCE OF PERMANENT NEUROLOGICAL DEFICIT (50-75% complete/incomplete spinal cord or cauda equina transection)",
                "th": "การพังทลายสมบูรณ์ของ **ทั้ง 3 เสาหลัก (Anterior + Middle + Posterior columns)** จากแรงเฉือน แรงหมุน หรือแรงดึงถ่างก้มคอรุนแรงสุดขีด\nแบ่งย่อยเป็น 4A (ก้มหมุน), 4B (แรงเฉือน Shear), 4C (ก้มดึงถ่างหลุด)\nทำลายความมั่นคงของกระดูกสันหลังสมบูรณ์\n**อัตราอัมพาตถาวรสูงมาก (50-75%)** จากไขสันหลังหรือ Cauda equina ขาดฉีก"
              },
              "moi": {
                "en": "Extreme violent trauma (high-speed vehicular rollover, heavy crush, fall from extreme height).",
                "th": "อุบัติเหตุรุนแรงสุดขีด (รถพลิกคว่ำความเร็วสูง, วัตถุทับบดรุนแรง, ตกจากตึก)"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "FATAL / CONTRAINDICATED.",
                  "th": "ห้ามใช้การรักษาด้วยวิธีนี้"
                },
                "operative": {
                  "en": "EMERGENCY OPERATIVE TREATMENT (GOLD STANDARD). Urgent open reduction, spinal cord decompression, and rigid posterior instrumented pedicle screw fusion spanning 2-3 levels above and below dislocation.",
                  "th": "แนะนำผ่าตัดด่วนที่สุด (EMERGENCY SURGERY): เปิดผ่าตัดจัดกระดูกที่หลุดให้เข้าที่, ผ่าตัด減壓คลายการกดทับไขสันหลัง และดามยึดกระดูกหลังด้วย Pedicle Screw 2-3 ระดับบนและล่าง"
                }
              },
              "illustrationId": "",
              "xrayDescription": {
                "en": "Gross translational displacement of one vertebra relative to another in frontal or sagittal plane with facet dislocation.",
                "th": "เห็นกระดูกสันหลังเคลื่อนหลุดแปลกแนวออกด้านข้างหรือหน้าหลังอย่างรุนแรง ร่วมกับข้อต่อ Facet หลุดหลุดเกย"
              }
            }
          ]
        },
        {
          "system": "TLICS Score",
          "fullName": {
            "en": "Thoracolumbar Injury Classification and Severity Score (TLICS System)",
            "th": "ระบบประเมินให้คะแนนการบาดเจ็บกระดูกสันหลังอกและเอว TLICS System (Vaccaro)"
          },
          "description": {
            "en": "Point-based scoring system for thoracolumbar spine injuries (T1-L5) evaluating Fracture Morphology, Posterior Ligamentous Complex (PLC) integrity, and Neurological Status. TLICS score <4 = Conservative, TLICS score =4 = Equivocal, TLICS score >4 = Operative.",
            "th": "ระบบให้คะแนนการบาดเจ็บกระดูกสันหลังส่วนอกและเอว T1-L5 (TLICS Score) ประเมิน 3 หมวด: ลักษณะรอยหัก (Morphology), ความสมบูรณ์ของเอ็นยึดด้านหลัง (PLC) และระบบประสาท (Neurology) โดยคะแนน <4 รักษาไม่ผ่าตัด, =4 พิจารณาตามความเหมาะสม, >4 แนะนำผ่าตัด"
          },
          "concept": {
            "title": {
              "en": "TLICS Score Clinical Concept",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ TLICS Score Classification"
            },
            "corePrinciple": {
              "en": "Point-based algorithm for thoracolumbar injuries (T1–L5) synthesizing 3 core decision pillars: (1) Injury Morphology (1–4 pts), (2) Posterior Ligamentous Complex / PLC Integrity (0–3 pts), and (3) Neurological Status (0–3 pts).",
              "th": "อัลกอริทึมให้คะแนนกระดูกสันหลังอกและเอว (T1–L5) สังเคราะห์ 3 เสาหลัก: (1) ชนิดลักษณะรอยหัก (1–4 คะแนน), (2) ความสมบูรณ์ของเอ็นยึดด้านหลัง PLC (0–3 คะแนน) และ (3) ระดับความเสียหายทางระบบประสาท (0–3 คะแนน)"
            },
            "rules": [
              {
                "en": "TLICS Score < 4: NON-OPERATIVE MANAGEMENT (Rigid TLSO orthosis / Jewett extension brace for 8–12 weeks).",
                "th": "คะแนน TLICS < 4: รักษาแบบไม่ผ่าตัด (ใส่เฝือกพยุงหลัง Rigid TLSO / Jewett Brace 8–12 สัปดาห์)"
              },
              {
                "en": "TLICS Score = 4: EQUIVOCAL / SURGEON DISCRETION (Treatment tailored to age, comorbidities, pain, and kyphosis angle).",
                "th": "คะแนน TLICS = 4: ก้ำกึ่ง / ขึ้นกับดุลยพินิจของแพทย์ (พิจารณาตามอายุ โรคประจำตัว ความปวด และมุมโก่ง)"
              },
              {
                "en": "TLICS Score > 4: SURGICAL INDICATION (Posterior Pedicle Screw Fusion ± Decompression / Corpectomy).",
                "th": "คะแนน TLICS > 4: มีข้อบ่งชี้ผ่าตัด (SURGICAL INDICATION) (ผ่าตัดยึด Pedicle Screw ด้านหลัง ± คลายการกดทับ)"
              },
              {
                "en": "Incomplete cord or cauda equina deficit (+3 pts) strongly drives total score >4, indicating urgent surgical decompression.",
                "th": "ภาวะไขสันหลังหรือ Cauda Equina บาดเจ็บบางส่วน (+3 คะแนน) จะผลักดันคะแนนรวม > 4 ส่งผลให้มีข้อบ่งชี้ผ่าตัดฉุกเฉิน"
              }
            ],
            "clinicalSignificance": [
              {
                "en": "PLC disruption adds 3 critical points, shifting management from conservative to operative! Look for interspinous widening >30% on X-ray and confirm with STIR MRI.",
                "th": "การฉีกขาดของเอ็นยึดด้านหลัง PLC บวกเพิ่มถึง 3 คะแนน ซึ่งเปลี่ยนแนวทางเป็นผ่าตัดทันที! ต้องสังเกตช่องว่าง interspinous บน X-ray และยืนยันด้วย STIR MRI"
              },
              {
                "en": "Burst fracture (2 pts) + Disrupted PLC (3 pts) = 5 points -> SURGICAL INDICATION even if the patient is neurologically intact (0 pts)!",
                "th": "Burst fracture (2 คะแนน) + PLC ขาด (3 คะแนน) = 5 คะแนน -> มีข้อบ่งชี้ผ่าตัดทันที แม้ว่าผู้ป่วยจะมีระบบประสาทปกติ (0 คะแนน) ก็ตาม!"
              }
            ]
          },
          "investigations": [
            {
              "name": "Standard AP & Lateral Thoracolumbar Radiographs",
              "details": {
                "en": "AP and Lateral views. Assesses Cobb angle kyphosis, vertebral height loss %, and interpedicular distance widening.",
                "th": "ภาพเอกซเรย์อกและเอวท่า AP และ Lateral ประเมินการยุบตัว, มุมคอโก่ง และระยะ Pedicle กว้างขึ้น"
              }
            },
            {
              "name": "Multiplanar 3D CT Scan of Thoracolumbar Spine",
              "details": {
                "en": "High-resolution 3D CT scan. Gold standard to assign Morphology score (Compression = 1, Burst = 2, Translation/Rotation = 3, Distraction = 4).",
                "th": "เอกซเรย์คอมพิวเตอร์ 3D ความละเอียดสูง กำหนดคะแนน Morphology (Compression=1, Burst=2, Translation/Rotation=3, Distraction=4)"
              }
            },
            {
              "name": "MRI Thoracolumbar Spine (T1, T2, STIR)",
              "details": {
                "en": "TL-spine MRI. Mandatory to evaluate Posterior Ligamentous Complex (PLC) integrity (Intact = 0, Indeterminate = 2, Disrupted = 3) and spinal cord contusion.",
                "th": "เอกซเรย์คลื่นแม่เหล็กไฟฟ้า (MRI) ประเมินคะแนนเอ็นยึดด้านหลัง PLC (สมบูรณ์=0, สงสัย=2, ขาดสมบูรณ์=3) และการบาดเจ็บของไขสันหลัง"
              }
            }
          ],
          "types": [
            {
              "type": "TLICS < 4",
              "name": {
                "en": "TLICS Score < 4 (Conservative Management - STABLE)",
                "th": "TLICS Score < 4 (แนะนำรักษาแบบไม่ผ่าตัด - มั่นคง)"
              },
              "description": {
                "en": "Total TLICS score is LESS THAN 4 points\nIndicates mechanically STABLE injury pattern with intact or minimally injured Posterior Ligamentous Complex (PLC) and no progressive neuro deficit",
                "th": "ผลรวมคะแนน TLICS Score **น้อยกว่า 4 คะแนน**\nบ่งบอกถึงรอยหักที่มีความ **มั่นคงเชิงกลศาสตร์** เอ็นยึดด้านหลัง PLC สมบูรณ์ดี และไม่มีอาการทางระบบประสาทแย่ลง"
              },
              "moi": {
                "en": "Low-to-moderate energy compression or axial load.",
                "th": "แรงกดอัดตามแนวแกนพลังงานต่ำถึงปานกลาง"
              },
              "treatment": {
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED TREATMENT (GOLD STANDARD). External immobilization with Rigid Thoracolumbar Sacral Orthosis (TLSO) or Jewett Brace for 8-12 weeks, with serial radiographs at 2, 4, 8, and 12 weeks.",
                  "th": "แนะนำรักษาแบบไม่ผ่าตัดเป็นมาตรฐานหลัก ใส่เฝือกพยุงหลัง TLSO หรือ Jewett Brace 8-12 สัปดาห์ ร่วมกับติดตามเอกซเรย์ประเมินเป็นระยะ"
                },
                "operative": {
                  "en": "Not indicated.",
                  "th": "ไม่มีข้อบ่งชี้ในการผ่าตัด"
                }
              },
              "illustrationId": "",
              "xrayDescription": {
                "en": "Simple compression fracture or burst fracture without PLC gap widening.",
                "th": "เห็นรอยหักยุบธรรมดา หรือ Burst fracture โดยไม่มีช่องว่างระหว่างยอดกระดูกกว้างขึ้น"
              }
            },
            {
              "type": "TLICS = 4",
              "name": {
                "en": "TLICS Score = 4 (Equivocal / Surgeon's Discretion)",
                "th": "TLICS Score = 4 (กึ่งก้ำกึ่ง - พิจารณาผ่าตัดหรือดามตามความเหมาะสม)"
              },
              "description": {
                "en": "Total TLICS score is EXACTLY 4 points\nEQUIVOCAL injury pattern where treatment choice depends on patient age, baseline comorbidities, pain level, kyphosis angle, and surgeon discretion",
                "th": "ผลรวมคะแนน TLICS Score **เท่ากับ 4 คะแนนพอดี**\nเป็นรอยหักชนิดกึ่งก้ำกึ่ง (Equivocal) การตัดสินใจรักษาขึ้นอยู่กับอายุ โรคประจำตัว ระดับความปวด มุมคอโก่ง และดุลยพินิจของแพทย์ผู้รักษา"
              },
              "moi": {
                "en": "Moderate energy flexion-compression or distraction impact.",
                "th": "แรงก้มคออัดกระแทกหรือแรงดึงถ่างพลังงานปานกลาง"
              },
              "treatment": {
                "preferred": "none",
                "conservative": {
                  "en": "Trial of Rigid TLSO orthosis in patients who are poor surgical candidates or have minimal pain.",
                  "th": "พิจารณาใส่เฝือกพยุงหลัง TLSO ในผู้ป่วยที่ไม่เหมาะกับการผ่าตัดหรือปวดน้อย"
                },
                "operative": {
                  "en": "Surgical stabilization (Posterior Pedicle Screw Fusion) in young active patients, persistent kyphosis >25°, or intractable pain.",
                  "th": "พิจารณาผ่าตัดยึดตรึง (Posterior Pedicle Screw Fusion) ในผู้ป่วยอายุน้อย คอโก่ง >25° หรือปวดรุนแรง"
                }
              },
              "illustrationId": "",
              "xrayDescription": {
                "en": "Burst fracture with indeterminate interspinous gap widening or solitary root deficit.",
                "th": "เห็นรอยหัก Burst fracture ร่วมกับระยะช่องว่างเอ็นหลังกว้างขึ้นเล็กน้อย"
              }
            },
            {
              "type": "TLICS > 4",
              "name": {
                "en": "TLICS Score > 4 (Operative Management - UNSTABLE / NEURO DEFICIT)",
                "th": "TLICS Score > 4 (แนะนำผ่าตัดรักษา - ไม่มั่นคง / บาดเจ็บระบบประสาท)"
              },
              "description": {
                "en": "Total TLICS score is GREATER THAN 4 points\nIndicates mechanically UNSTABLE injury, complete Posterior Ligamentous Complex (PLC) disruption, or severe neurological deficit",
                "th": "ผลรวมคะแนน TLICS Score **มากกว่า 4 คะแนน**\nบ่งบอกถึงรอยหักที่มีความ **ไม่มั่นคงอย่างรุนแรง**, เอ็นยึดด้านหลัง PLC ฉีกขาดสมบูรณ์ หรือมีภาวะบาดเจ็บระบบประสาท"
              },
              "moi": {
                "en": "High-energy violent trauma (motor vehicle crash, fall from height, industrial accident).",
                "th": "อุบัติเหตุแรงกระแทกพลังงานสูงรุนแรง (รถยนต์ชน, ตกจากที่สูง, อุบัติเหตุโรงงาน)"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "CONTRAINDICATED. High risk of progressive kyphosis, nonunion, and catastrophic paralysis.",
                  "th": "ห้ามใช้การรักษาด้วยวิธีนี้ เสี่ยงสูงต่อคอโก่งผิดรูป กระดูกไม่ติด และอัมพาต"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT (GOLD STANDARD). Surgical decompression and posterior instrumented pedicle screw fusion across 1-2 levels above and below injury zone ± anterior corpectomy. Emergency surgery if incomplete neuro deficit with ongoing cord compression.",
                  "th": "แนะนำผ่าตัดมาตรฐานหลัก (Gold Standard): ผ่าตัด減壓และดามยึด Pedicle Screw ด้านหลัง 1-2 ระดับบนและล่าง ± Corpectomy ผ่าตัดด่วนที่สุดหากมีอาการอัมพาตครึ่งท่อน"
                }
              },
              "illustrationId": "",
              "xrayDescription": {
                "en": "Gross dislocation, wide interspinous gap, or comminuted burst fracture with canal compromise >50%.",
                "th": "เห็นกระดูกหลังเคลื่อนหลุด, ระยะช่องว่างเอ็นหลังอ้ากว้าง หรือ Burst fracture กดช่องไขสันหลัง >50%"
              }
            }
          ]
        }
      ]
    }
  ]
};
