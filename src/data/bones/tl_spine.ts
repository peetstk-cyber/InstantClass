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
                "decisionPrinciple": {
                  "en": "Isolated anterior column failure (ALL, anterior 2/3 of vertebral body and disc) with intact middle and posterior columns; mechanically stable fracture with zero risk of neural compromise or progressive translation; non-operative care using a molded TLSO or Jewett hyperextension brace for 8–12 weeks is the gold standard.",
                  "th": "การสูญเสียสภาพเฉพาะเสาหลักด้านหน้า (เอ็น ALL, ตัวกระดูกและหมอนรอง 2/3 ส่วนหน้า) โดยเสาหลักส่วนกลางและส่วนหลังยังสมบูรณ์; เป็นรอยหักที่มั่นคงทางกลศาสตร์ ไม่เสี่ยงต่อการกดทับเส้นประสาทหรือการเลื่อนตัว; การรักษาแบบไม่ผ่าตัดด้วยเฝือกดามพยุงหลัง TLSO หรือ Jewett Hyperextension Brace นาน 8–12 สัปดาห์เป็นมาตรฐานหลัก"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Isolated anterior column compression fractures with intact middle column\n• Anterior vertebral height loss <50% and local kyphosis <30°",
                    "th": "• กระดูกหักยุบตัวเฉพาะเสาหลักด้านหน้าโดยเสาหลักส่วนกลางยังสมบูรณ์\n• ความสูงลำตัวกระดูกยุบ <50% และมุมหลังค่อม <30°"
                  },
                  "method": {
                    "en": "• Custom molded Thoracolumbosacral Orthosis (TLSO) or Jewett hyperextension brace worn when upright for 8–12 weeks; early ambulation encouraged; standing lateral radiographs at 2, 4, 8, and 12 weeks",
                    "th": "• ใส่เฝือกพยุงหลัง TLSO หรือ Jewett Hyperextension Brace ขณะลุกนั่ง/เดิน นาน 8–12 สัปดาห์; ส่งเสริมให้ลุกเดินเร็ว; เอกซเรย์ท่ายืนติดตามที่ 2, 4, 8, 12 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Core muscle and paraspinal extensor strengthening starting at 8 weeks; progressive brace weaning once solid trabecular bridging is documented",
                    "th": "• บริหารกล้ามเนื้อแกนกลางลำตัวและกล้ามเนื้อหลังเริ่มที่ 8 สัปดาห์; ค่อยๆ ปลดเฝือกพยุงหลังเมื่อเอกซเรย์เห็นกระดูกติดแน่น"
                  },
                  "pitfalls": {
                    "en": "• Failure to recognize occult middle column involvement or posterior ligamentous rupture on initial plain radiographs",
                    "th": "• ตรวจไม่พบการบาดเจ็บของเสากลางหรือเอ็นส่วนหลังที่ฉีกขาดร่วมด้วยจากภาพเอกซเรย์ธรรมดา"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Rarely indicated; consider only in severe anterior collapse (>50% height loss) with dynamic mechanical instability or severe intractable pain in osteoporotic compression fractures (Vertebroplasty/Kyphoplasty)",
                    "th": "• แทบไม่มีข้อบ่งชี้; พิจารณาเฉพาะกรณีกระดูกยุบตัวรุนแรง (>50%) ร่วมกับแนวกระดูกไม่มั่นคง หรือปวดรุนแรงในกระดูกพรุน (พิจารณาฉีดซีเมนต์ Vertebroplasty/Kyphoplasty)"
                  },
                  "method": {
                    "en": "• Percutaneous balloon kyphoplasty/vertebroplasty (for osteoporotic collapse) OR short-segment posterior instrumented fusion (pedicle screws)",
                    "th": "• ฉีดซีเมนต์เสริมกระดูกผ่านผิวหนัง (Percutaneous Kyphoplasty/Vertebroplasty) หรือผ่าตัดดามสกรู Pedicle Screws ระยะสั้น"
                  },
                  "rehabilitation": {
                    "en": "• Immediate pain relief and out-of-bed mobilization within 24 hours post-kyphoplasty",
                    "th": "• อาการปวดทุเลาลงทันทีและสามารถลุกเดินได้ภายใน 24 ชั่วโมงหลังฉีดซีเมนต์"
                  },
                  "pitfalls": {
                    "en": "• Cement leakage into the epidural space or spinal canal during percutaneous augmentation",
                    "th": "• ซีเมนต์รั่วซึมเข้าสู่ช่องไขสันหลังขณะทำหัตถการฉีดซีเมนต์"
                  }
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
                "decisionPrinciple": {
                  "en": "Middle column disruption (posterior 1/3 vertebral body, posterior annulus, PLL) represents loss of the cornerstone of spinal stability with potential neural canal compromise (Burst fracture mechanism); non-operative TLSO is strictly reserved for stable burst patterns (<50% canal retropulsion, <25° kyphosis, neurologically intact); surgical stabilization (posterior pedicle screws ± canal decompression) is required for neurological deficits or gross structural instability.",
                  "th": "การเสียสภาพของเสาหลักส่วนกลาง (ตัวกระดูก 1/3 หลัง, หมอนรอง และเอ็น PLL) หมายถึงการสูญเสียเสาหลักความมั่นคงที่สำคัญที่สุด และเสี่ยงต่อการกดทับช่องไขสันหลัง (กลไก Burst fracture); การใส่ TLSO สงวนไว้เฉพาะ Burst fracture ที่มั่นคง (กระดูกดันช่องไขสันหลัง <50%, หลังค่อม <25° และระบบประสาทปกติ); การผ่าตัดยึดดามสกรู Pedicle Screws ± เปิดระบายช่องไขสันหลัง จำเป็นในผู้ป่วยที่มีอาการทางระบบประสาทหรือโครงสร้างไม่มั่นคง"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Non-displaced or stable burst fractures with middle column retropulsion <50% canal occlusion\n• Neurologically intact patient and kyphosis <20°–25°",
                    "th": "• กระดูกแตก Burst ชนิดมั่นคงที่ชิ้นส่วนเสากลางดันเข้าช่องไขสันหลัง <50%\n• ระบบประสาทปกติสมบูรณ์ และมุมหลังค่อม <20°–25°"
                  },
                  "method": {
                    "en": "• Strict bed rest initially, then custom rigid TLSO body jacket worn for 10–12 weeks; weekly upright lateral X-rays for first month to monitor sagittal balance",
                    "th": "• พักบนเตียงในระยะแรก จากนั้นใส่เสื้อเกราะพยุงหลัง Rigid TLSO นาน 10–12 สัปดาห์; เอกซเรย์ท่ายืนสัปดาห์ละครั้งในเดือนแรกเพื่อตรวจติดตามแนวกระดูก"
                  },
                  "rehabilitation": {
                    "en": "• Canal remodeling occurs over 1–2 years; active back extension and core stabilization exercises starting after brace removal at 12 weeks",
                    "th": "• ชิ้นกระดูกที่ดันช่องไขสันหลังจะค่อยๆ สลายตัวปรับรูป (Remodeling) ใน 1–2 ปี; เริ่มบริหารกล้ามเนื้อหลังและแกนกลางลำตัวหลังถอดเฝือกที่ 12 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Progressive late collapse with secondary neurologic deterioration (delayed cauda equina syndrome)",
                    "th": "• แนวกระดูกทรุดตัวค่อมลงเรื่อยๆ จนเกิดอาการทางระบบประสาทแย่ลงในภายหลัง"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Middle column retropulsion causing progressive or incomplete neurological deficit (Conus/Cauda equina syndrome)\n• Spinal canal occlusion ≥50% or kyphotic deformity ≥25°–30°\n• Associated posterior ligamentous complex (PLC) disruption",
                    "th": "• เสากลางแตกดันกดทับไขสันหลังหรือ Cauda Equina จนมีอาการอัมพาตบางส่วนหรือแย่ลง\n• ชิ้นกระดูกดันเข้าช่องไขสันหลัง ≥50% หรือมุมหลังค่อม ≥25°–30°\n• มีการฉีกขาดของเอ็นยึดด้านหลัง (PLC) ร่วมด้วย"
                  },
                  "method": {
                    "en": "• Posterior Instrumented Fusion: Pedicle screw fixation 1–2 levels above and below fractured vertebra (short-segment or long-segment construct) ± posterior laminectomy and indirect canal decompression via ligamentotaxis\n• Anterior Corpectomy and Fusion (ACCF): Direct anterior decompression with expandable titanium cage and plating for severe anterior/middle column comminution with persistent canal occlusion",
                    "th": "• ผ่าตัดดามยึดด้านหลัง (Posterior Pedicle Screw Fusion): ขันสกรูยึด 1–2 ระดับบนและล่าง ± ผ่าตัดเปิดระบายช่องไขสันหลัง (Laminectomy) และดึงจัดกระดูกทางอ้อม (Ligamentotaxis)\n• ผ่าตัดตัดลำตัวกระดูกด้านหน้า (Anterior Corpectomy & Fusion): เปิดผ่าตัดเอาชิ้นกระดูกที่กดช่องไขสันหลังออกโดยตรง ใส่ Expandable Cage และดามแผ่นเหล็กด้านหน้า"
                  },
                  "rehabilitation": {
                    "en": "• Early mobilization within 48 hours post-op with or without soft brace; structured physical therapy from 6 weeks",
                    "th": "• ลุกเดินขยับตัวได้เร็วภายใน 48 ชั่วโมงหลังผ่าตัด; เริ่มทำกายภาพบำบัดฟื้นฟูหลัง 6 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Insufficient fixation length leading to screw breakage or hardware pullout in high-stress thoracolumbar junction\n• Inadequate decompression in the presence of an extruded disc fragment",
                    "th": "• ดามกระดูกสั้นเกินไปจนสกรูหักหรือถอนหลุดในจุดรอยต่ออก-เอวที่มีแรงเค้นสูง\n• เปิดคลายการกดทับไม่เพียงพอในรายที่มีหมอนรองกระดูกแตกทะลักร่วมด้วย"
                  }
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
                "decisionPrinciple": {
                  "en": "Posterior column disruption involves either the osseous neural arch or the ligamentous tension band (PLC: supraspinous, interspinous, ligamentum flavum, facet capsules); isolated non-displaced bony spinous process fractures heal reliably with non-operative support; rupture of the ligamentous PLC complex causes catastrophic mechanical instability under flexion and requires posterior instrumented stabilization to prevent progressive kyphosis.",
                  "th": "การเสียสภาพของเสาหลักด้านหลังครอบคลุมทั้งวงโค้งกระดูกและแนวเอ็นยึดรั้ง (PLC: Supraspinous, Interspinous, Ligamentum flavum, ปลอกข้อ Facet); กระดูกยอด Spinous process หักเดี่ยวๆ ชนิดไม่เคลื่อนตัวรักษาแบบไม่ผ่าตัดได้ผลดี; แต่หากเอ็น PLC ฉีกขาด จะส่งผลให้กระดูกสันหลังขาดความมั่นคงอย่างรุนแรงเมื่อก้มตัว จำเป็นต้องผ่าตัดดามยึดตรึงด้านหลังเพื่อป้องกันหลังโก่งค่อมถาวร"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Isolated non-displaced bony spinous or transverse process fractures with intact ligamentous complex\n• Pure bony horizontal lamina/spinous fracture (Bony Chance) with minimal displacement",
                    "th": "• รอยหักเฉพาะยอด spinous หรือ transverse process ชนิดไม่เคลื่อนตัวโดยเอ็นยึดยังสมบูรณ์\n• รอยหักผ่านกระดูกแนวนอน (Bony Chance) ที่เคลื่อนตัวน้อยมาก"
                  },
                  "method": {
                    "en": "• Hyperextension TLSO brace or molded thoracolumbar orthosis for 8–10 weeks; serial upright radiographs to verify maintenance of lordosis",
                    "th": "• ใส่เฝือกพยุงหลัง Hyperextension TLSO นาน 8–10 สัปดาห์; เอกซเรย์ท่ายืนติดตามแนวความโค้งของกระดูก"
                  },
                  "rehabilitation": {
                    "en": "• Progressive isometric back extension exercises upon radiographic bony consolidation at 8–10 weeks",
                    "th": "• เริ่มฝึกบริหารกล้ามเนื้อหลังเมื่อเอกซเรย์เห็นกระดูกติดที่ 8–10 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Misinterpreting a complete ligamentous PLC rupture as a stable isolated bony fracture",
                    "th": "• วินิจฉัยผิดพลาดคิดว่าเอ็น PLC ฉีกขาดเป็นเพียงรอยหักกระดูกธรรมดาที่มั่นคง"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Ligamentous disruption of the Posterior Ligamentous Complex (PLC) with interspinous gap widening\n• Subluxed or locked facet joints\n• Progressive kyphotic angulation >20° under physiological loading",
                    "th": "• เอ็นยึดด้านหลัง (PLC) ฉีกขาดและมีช่องว่างระหว่างยอดกระดูกกว้างขึ้น\n• ข้อต่อ Facet เคลื่อนหลุดหรือล็อคเกยกัน\n• แนวกระดูกหลังค่อมโก่ง >20° เมื่อลงน้ำหนัก"
                  },
                  "method": {
                    "en": "• Posterior Instrumented Fusion: Open reduction, pedicle screw fixation 1 level above and below the injured segment, compression across screws to restore posterior tension band constraint and lordosis, decortication, and posterolateral autologous bone grafting",
                    "th": "• ผ่าตัดดามยึดตรึงด้านหลัง (Posterior Instrumented Fusion): เปิดจัดแนวกระดูก ขันสกรู Pedicle Screws 1 ระดับบนและล่าง ดึงบีบกระชับแท่ง Rod เพื่อสร้างแนวยึดรั้งด้านหลังและดึงแนวกระดูกให้แอ่นปกติ พร้อมปลูกกระดูกเชื่อมข้อ"
                  },
                  "rehabilitation": {
                    "en": "• Out-of-bed ambulation post-op day 1; gentle trunk mobility exercises at 6 weeks; full activity at 3–4 months",
                    "th": "• ลุกเดินตั้งแต่วันแรกหลังผ่าตัด; เริ่มฝึกขยับลำตัวเบาๆ ที่ 6 สัปดาห์; ทำกิจกรรมได้เต็มที่หลัง 3–4 เดือน"
                  },
                  "pitfalls": {
                    "en": "• Failure to compress the posterior construct, leaving persistent distraction across the disc space",
                    "th": "• ไม่ได้ขันบีบกระชับแกนเหล็กด้านหลัง ทำให้เกิดช่องว่างอ้าค้างที่หมอนรองกระดูก"
                  }
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
                "decisionPrinciple": {
                  "en": "Instability spectrum based on Denis columns: Stable (1 column -> conservative TLSO); 1st Degree / Mechanical Instability (2 columns under distraction -> progressive kyphosis risk -> operative or hyperextension bracing); 2nd Degree / Neurological Instability (Middle column burst -> canal compromise risk -> operative if canal >50% or neuro deficit); 3rd Degree / Severe Mechanical + Neurological Instability (3 columns disrupted -> Fracture-Dislocation -> emergency 360°/posterior reconstruction).",
                  "th": "ระดับความไม่มั่นคงตามหลักการ 3 เสาหลัก Denis: มั่นคง (เสีย 1 เสา -> ใส่ TLSO); ไม่มั่นคงเชิงกลศาสตร์ขั้นที่ 1 (เสีย 2 เสาจากแรงดึงถ่าง -> เสี่ยงหลังโก่ง -> ผ่าตัดหรือใส่ hyperextension brace); ไม่มั่นคงเชิงระบบประสาทขั้นที่ 2 (เสากลางแตก Burst -> เสี่ยงอัมพาต -> ผ่าตัดหากกดช่อง >50% หรือมีอาการประสาท); ไม่มั่นคงขั้นสูงสุดระดับที่ 3 (พังทลายครบ 3 เสา -> Fracture-Dislocation -> ผ่าตัดดามยึดฉุกเฉิน)"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• STABLE injuries (Isolated anterior column failure, intact middle column, no neurological deficit)",
                    "th": "• รอยหักชนิดมั่นคง STABLE (เสียเฉพาะเสาหน้า เสากลางสมบูรณ์ และไม่มีอาการทางระบบประสาท)"
                  },
                  "method": {
                    "en": "• Rigid TLSO brace for 8–12 weeks with early progressive ambulation and serial radiographic surveillance",
                    "th": "• ใส่เฝือกพยุงหลัง Rigid TLSO 8–12 สัปดาห์ พร้อมลุกเดินเร็วและตรวจติดตามภาพเอกซเรย์สม่ำเสมอ"
                  },
                  "rehabilitation": {
                    "en": "• Back extensor isometric conditioning and gradual brace weaning upon union at 10–12 weeks",
                    "th": "• บริหารกล้ามเนื้อหลังและค่อยๆ ปลดเฝือกพยุงหลังเมื่อกระดูกติดที่ 10–12 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Applying non-operative bracing to unstable 2nd or 3rd degree injuries resulting in catastrophic progressive paralysis",
                    "th": "• นำการรักษาด้วยเฝือกไปใช้ในผู้ป่วยที่มีความไม่มั่นคงขั้นที่ 2 หรือ 3 จนทำให้เกิดอัมพาตถาวร"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• 1st Degree Instability with ligamentous distraction or progressive kyphosis >25°\n• 2nd Degree Instability (Burst fractures with canal occlusion ≥50% or neurological impairment)\n• 3rd Degree Instability (All 3-column fracture-dislocations)",
                    "th": "• ไม่มั่นคงขั้นที่ 1 ที่มีเอ็นฉีกขาดหรือหลังโก่งค่อม >25°\n• ไม่มั่นคงขั้นที่ 2 (Burst fracture ที่กดช่องไขสันหลัง ≥50% หรือมีอาการอัมพาต)\n• ไม่มั่นคงขั้นที่ 3 (กระดูกสันหลังหักเคลื่อนหลุด 3 เสาหลักทุกราย)"
                  },
                  "method": {
                    "en": "• Posterior Instrumented Fusion (Pedicle screws and rods spanning 1–2 levels above and below) ± decompression laminectomy\n• Combined anterior-posterior reconstruction for severe 3-column comminution or vertebral body deficiency",
                    "th": "• ผ่าตัดดามยึดด้านหลัง (Pedicle Screws + Rods 1–2 ระดับบนและล่าง) ± ผ่าตัดเปิดระบายช่องไขสันหลัง (Laminectomy)\n• ผ่าตัดบูรณะทั้งด้านหน้าและด้านหลังในรายที่กระดูก 3 เสาแตกป่นรุนแรง"
                  },
                  "rehabilitation": {
                    "en": "• Immediate post-op mobilization; progressive physical therapy and vocational rehabilitation from week 6",
                    "th": "• ลุกเดินได้ทันทีหลังผ่าตัด; เริ่มโปรแกรมกายภาพบำบัดและฟื้นฟูสมรรถภาพหลัง 6 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Underestimating biomechanical instability and choosing inadequate fixation levels",
                    "th": "• ประเมินความไม่มั่นคงต่ำเกินไปและยึดตรึงกระดูกสั้นเกินไป"
                  }
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
                "decisionPrinciple": {
                  "en": "Denis Type 1 compression fracture involves anterior column failure under flexion; middle column is intact and posterior column is stable; non-operative immobilization in a molded TLSO or Jewett hyperextension brace for 8–12 weeks is the standard of care unless anterior collapse exceeds 50% or local kyphosis exceeds 30°.",
                  "th": "กระดูกหัก Denis Type 1 (Compression Fracture) เกิดจากการยุบตัวของเสาหน้าจากแรงก้ม; เสากลางและเสาหลังยังสมบูรณ์ดี; การรักษาหลักคือใส่เฝือกดามพยุงหลัง TLSO หรือ Jewett Hyperextension Brace นาน 8–12 สัปดาห์ ยกเว้นกรณีกระดูกยุบตัวเกิน 50% หรือหลังค่อมเกิน 30°"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Denis Type 1 wedge compression fractures with anterior height loss <50% and kyphosis <30°\n• Intact middle column on CT and normal neurological examination",
                    "th": "• กระดูกหักยุบตัว Denis Type 1 ที่ความสูงด้านหน้ายุบ <50% และมุมหลังค่อม <30°\n• เสากลางสมบูรณ์จากภาพ CT scan และระบบประสาทปกติสมบูรณ์"
                  },
                  "method": {
                    "en": "• Thoracolumbosacral Orthosis (TLSO) or Jewett 3-point hyperextension brace worn when out of bed for 8–12 weeks; early progressive ambulation encouraged; serial upright lateral radiographs at 2, 4, 8, and 12 weeks",
                    "th": "• ใส่เฝือกพยุงหลัง TLSO หรือ Jewett Brace ขณะลุกนั่ง/เดิน นาน 8–12 สัปดาห์; ส่งเสริมให้ลุกเดินเร็ว; ตรวจเอกซเรย์ท่ายืนติดตามที่ 2, 4, 8, 12 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Isometric core and paraspinal extensor strengthening starting at 8 weeks; gradual brace weaning upon solid radiographic trabecular bridging at 10–12 weeks",
                    "th": "• บริหารกล้ามเนื้อแกนกลางและหลังเริ่มที่ 8 สัปดาห์; ค่อยๆ ปลดเฝือกพยุงหลังเมื่อกระดูกติดแน่นที่ 10–12 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Missing posterior ligamentous complex rupture or subtle middle column retropulsion, mistaking a Type 2 Burst or Type 3 Chance for a simple Type 1 compression",
                    "th": "• ตรวจไม่พบเอ็นส่วนหลังฉีกขาดหรือเสากลางแตกดัน ทำให้วินิจฉัยผิดคิดว่า Type 2 Burst หรือ Type 3 Chance เป็นแค่ Type 1"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Severe anterior height loss >50% or progressive kyphosis >30° with dynamic mechanical instability\n• Painful osteoporotic vertebral compression fractures failing conservative care (Kyphoplasty/Vertebroplasty)",
                    "th": "• ลำตัวกระดูกยุบตัวรุนแรง >50% หรือหลังค่อมโก่ง >30° ร่วมกับแนวกระดูกไม่มั่นคง\n• รอยหักยุบจากกระดูกพรุนที่ปวดรุนแรงไม่ตอบสนองต่อยา (พิจารณาฉีดซีเมนต์ Kyphoplasty/Vertebroplasty)"
                  },
                  "method": {
                    "en": "• Percutaneous Balloon Kyphoplasty / Vertebroplasty for osteoporotic fractures\n• Short-segment posterior instrumented pedicle screw fusion (1 level above and 1 level below) for high-energy traumatic collapse",
                    "th": "• ฉีดซีเมนต์เสริมกระดูกผ่านผิวหนัง (Percutaneous Kyphoplasty/Vertebroplasty) ในกระดูกพรุน\n• ผ่าตัดดามสกรู Pedicle Screws ระยะสั้น (1 ระดับบนและล่าง) ในรายที่กระดูกยุบรุนแรงจากอุบัติเหตุ"
                  },
                  "rehabilitation": {
                    "en": "• Immediate pain relief and out-of-bed mobilization within 24 hours post-kyphoplasty",
                    "th": "• ลุกเดินได้ทันทีภายใน 24 ชั่วโมงหลังฉีดซีเมนต์ อาการปวดทุเลาลงเร็ว"
                  },
                  "pitfalls": {
                    "en": "• Cement leakage into the spinal canal or perivertebral venous plexus during injection",
                    "th": "• ซีเมนต์รั่วไหลเข้าสู่ช่องไขสันหลังหรือหลอดเลือดดำรอบกระดูกสันหลัง"
                  }
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
                "decisionPrinciple": {
                  "en": "Denis Type 2 burst fracture involves failure of both anterior and middle columns with posterior wall retropulsion into the spinal canal; stable burst fractures (<50% canal occlusion, <25° kyphosis, intact PLC, neurologically intact) achieve solid remodeling with non-operative TLSO bracing; unstable burst fractures (neurologic deficit, canal compromise ≥50%, kyphosis ≥25°, or PLC rupture) require surgical decompression and posterior instrumented stabilization.",
                  "th": "กระดูกแตก Denis Type 2 (Burst Fracture) เสียสภาพทั้งเสาหน้าและเสากลางโดยชิ้นกระดูกผนังหลังทรุดดันเข้าช่องไขสันหลัง; รอยหักชนิดมั่นคง (กระดูกดันช่องไขสันหลัง <50%, หลังค่อม <25°, เอ็น PLC สมบูรณ์ และระบบประสาทปกติ) รักษาด้วยเฝือก TLSO ได้ผลดีและกระดูกเกิด Remodeling ได้; แต่ถ้ารอยหักไม่มั่นคง (มีอาการอัมพาต, ช่องไขสันหลังถูกกด ≥50%, หลังค่อม ≥25° หรือเอ็น PLC ขาด) ต้องผ่าตัดลดการกดทับและดามสกรู Pedicle Screws ด้านหลัง"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Neurologically intact patient with stable burst fracture (Subtypes 2A/2B/2C)\n• Spinal canal occlusion <50%, local kyphosis <25°, and anterior height loss <50%\n• Intact Posterior Ligamentous Complex (PLC) confirmed on STIR MRI",
                    "th": "• ผู้ป่วยที่ระบบประสาทปกติสมบูรณ์ในรอยหัก Burst ชนิดมั่นคง (ประเภทย่อย 2A/2B/2C)\n• ชิ้นกระดูกดันเข้าช่องไขสันหลัง <50%, มุมหลังค่อม <25° และความสูงยุบ <50%\n• เอ็นยึดด้านหลัง (PLC) ยังสมบูรณ์ดีจากการตรวจ STIR MRI"
                  },
                  "method": {
                    "en": "• Rigid custom-molded TLSO body jacket worn for 10–12 weeks; weekly upright standing radiographs during initial 4 weeks to monitor sagittal alignment and prevent progressive kyphosis",
                    "th": "• ใส่เสื้อเกราะพยุงหลัง Rigid TLSO นาน 10–12 สัปดาห์; เอกซเรย์ท่ายืนสัปดาห์ละครั้งใน 4 สัปดาห์แรกเพื่อเฝ้าระวังหลังโก่งค่อม"
                  },
                  "rehabilitation": {
                    "en": "• Spontaneous canal clearance (bone resorption/remodeling) documented over 1–2 years; active spinal extensor and abdominal core rehabilitation starting after brace removal at 12 weeks",
                    "th": "• ชิ้นกระดูกในช่องไขสันหลังจะค่อยๆ สลายตัวยุบลงได้เองตามธรรมชาติใน 1–2 ปี; เริ่มโปรแกรมบริหารกล้ามเนื้อหลังและหน้าท้องหลังถอดเฝือกที่ 12 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Progressive late post-traumatic kyphosis or delayed neurologic deterioration (cauda equina syndrome) if patient is non-compliant with brace",
                    "th": "• แนวกระดูกหลังค่อยๆ ค่อมตัวลงเรื่อยๆ หรือเกิดอาการกดทับเส้นประสาทตามมาในภายหลังหากใส่เฝือกไม่สม่ำเสมอ"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Any neurological deficit (Incomplete spinal cord, conus medullaris, or cauda equina syndrome)\n• Severe spinal canal compromise ≥50% or local kyphosis ≥25°–30°\n• Disruption of Posterior Ligamentous Complex (PLC)",
                    "th": "• มีอาการบาดเจ็บทางระบบประสาททุกชนิด (ไขสันหลัง, Conus Medullaris หรือ Cauda Equina ถูกกดทับ)\n• ชิ้นกระดูกดันเข้าช่องไขสันหลัง ≥50% หรือมุมหลังค่อม ≥25°–30°\n• มีการฉีกขาดของเอ็นยึดด้านหลัง (PLC)"
                  },
                  "method": {
                    "en": "• Posterior Instrumented Fusion: Pedicle screw fixation 1–2 levels above and below fractured vertebra (short-segment or long-segment construct) ± posterior laminectomy / transpedicular indirect decompression via ligamentotaxis\n• Anterior Cervical/Thoracic/Lumbar Corpectomy and Fusion (ACCF): Expandable titanium cage packed with autograft and anterior plate/rod for severe comminution with persistent direct canal compromise",
                    "th": "• ผ่าตัดดามยึดด้านหลัง (Posterior Pedicle Screw Fusion): ดามสกรู 1–2 ระดับบนและล่าง ± ผ่าตัดเปิดช่องไขสันหลัง (Laminectomy) หรือดึงจัดกระดูกทางอ้อม (Ligamentotaxis)\n• ผ่าตัดตัดลำตัวกระดูกด้านหน้า (Corpectomy ACCF): ใส่ Expandable Titanium Cage ร่วมกับกระดูกปลูกและแผ่นเหล็กล็อคด้านหน้าในรายที่กระดูกแตกป่นและกดช่องไขสันหลังโดยตรง"
                  },
                  "rehabilitation": {
                    "en": "• Early out-of-bed mobilization within 24–48 hours post-op; progressive isometric strengthening at 6 weeks; vocational training at 3 months",
                    "th": "• ลุกเดินได้เร็วภายใน 24–48 ชั่วโมงหลังผ่าตัด; เริ่มบริหารกล้ามเนื้อที่ 6 สัปดาห์; ฟื้นฟูสมรรถภาพการทำงานที่ 3 เดือน"
                  },
                  "pitfalls": {
                    "en": "• Construct failure (screw pullout/breakage) if short-segment fixation is attempted across a highly comminuted burst fracture without anterior column support (load-sharing score >6)",
                    "th": "• โลหะดามถอนหลุดหรือหักหากผ่าตัดดามสกรูระยะสั้นในกระดูกที่แตกป่นรุนแรงโดยไม่มีการเสริมเสาด้านหน้า"
                  }
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
                "decisionPrinciple": {
                  "en": "Denis Type 3 Seat-Belt/Chance injury results from distraction failure of middle and posterior columns (with anterior hinge); pure bony Chance fractures (Type 3A) heal reliably in a hyperextension TLSO brace; ligamentous Chance injuries (Type 3B) fail conservative bracing due to poor ligamentous healing and require posterior compression pedicle screw fixation; mandatory exclusion of blunt bowel/mesenteric perforation (~30%–50% co-incidence).",
                  "th": "กระดูกหัก Denis Type 3 (Seat-Belt / Chance Injury) เกิดจากแรงดึงถ่างทำให้เสากลางและเสาหลังฉีกอ้าแยก; รอยหักผ่านกระดูกล้วนๆ Bony Chance (Type 3A) กระดูกเชื่อมติดได้ดีด้วยเฝือก Hyperextension TLSO; ส่วน Ligamentous Chance (Type 3B) เอ็นเชื่อมติดยากมักล้มเหลวจากการใส่เฝือก จึงต้องผ่าตัดดามสกรู Pedicle Screws ด้านหลัง; ต้องตรวจคัดกรองภาวะลำไส้หรือเส้นเลือดช่องท้องฉีกขาดเสมอ (พบร่วมสูง 30%–50%)"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Pure Bony Chance fracture (Type 3A: Horizontal fracture line traversing spinous process, pedicle, and vertebral body)\n• Non-displaced or reducible in extension, kyphosis <15°, and neurologically intact",
                    "th": "• รอยหักผ่านกระดูกล้วนๆ Bony Chance (Type 3A: รอยหักพาดผ่าน spinous process, pedicle และตัวกระดูก)\n• กระดูกไม่เคลื่อนหรือจัดเข้าที่ได้ในท่าแอ่นหลัง, มุมหลังค่อม <15° และระบบประสาทปกติ"
                  },
                  "method": {
                    "en": "• Custom molded hyperextension TLSO brace worn continuously for 10–12 weeks; weekly upright lateral X-rays to verify lordotic alignment",
                    "th": "• ใส่เฝือกพยุงหลัง Hyperextension TLSO นาน 10–12 สัปดาห์; ตรวจเอกซเรย์ท่ายืนทุกสัปดาห์เพื่อควบคุมแนวกระดูกให้แอ่นปกติ"
                  },
                  "rehabilitation": {
                    "en": "• Wean brace at 10–12 weeks once solid bony union is confirmed on CT scan; gentle progressive back extensor conditioning",
                    "th": "• ปลดเฝือกที่ 10–12 สัปดาห์เมื่อ CT ยืนยันว่ากระดูกเชื่อมติดแน่น; เริ่มฝึกบริหารกล้ามเนื้อหลัง"
                  },
                  "pitfalls": {
                    "en": "• Missing concomitant intra-abdominal hollow viscus injury (bowel perforation, mesenteric avulsion) leading to fatal sepsis\n• Attempting conservative brace treatment for ligamentous Chance injuries (Type 3B)",
                    "th": "• พลาดการตรวจภาวะลำไส้ทะลุหรือเส้นเลือดในช่องท้องฉีกขาดจนเกิดการติดเชื้อในกระแสเลือด\n• นำการใส่เฝือกไปรักษาใน Ligamentous Chance (Type 3B) ทำให้เอ็นไม่ติดและหลังค่อมถาวร"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All Ligamentous Chance injuries (Type 3B: Disruption traversing interspinous ligament, facet capsule, and intervertebral disc)\n• Displaced bony Chance fractures, kyphosis ≥15°, polytrauma, or neurological deficit",
                    "th": "• การบาดเจ็บผ่านแนวเอ็น Ligamentous Chance (Type 3B) ทุกราย (ขาดผ่านเอ็น interspinous, ปลอกข้อ และหมอนรองกระดูก)\n• Bony Chance ที่เคลื่อนตัว, มุมหลังค่อม ≥15°, ผู้ป่วยบาดเจ็บหลายระบบ หรือมีอาการทางระบบประสาท"
                  },
                  "method": {
                    "en": "• Posterior Instrumented Compression Fixation: Open reduction, pedicle screw fixation 1 level above and 1 level below injury zone, compression applied across contoured lordotic rods to re-approximate the posterior tension band, followed by posterolateral fusion and bone grafting",
                    "th": "• ผ่าตัดดามยึดและดึงบีบกระชับด้านหลัง (Posterior Compression Fixation): เปิดจัดแนวกระดูก ขันสกรู Pedicle Screws 1 ระดับบนและล่าง ดึงบีบกระชับแท่ง Rod ดัดแอ่นเพื่อดึงแนวเอ็นส่วนหลังให้ชิดเข้าหากัน พร้อมปลูกกระดูกเชื่อมข้อ"
                  },
                  "rehabilitation": {
                    "en": "• Immediate post-op mobilization on day 1; active range of motion at 6 weeks; return to unrestricted activity at 3–4 months",
                    "th": "• ลุกเดินได้ตั้งแต่วันแรกหลังผ่าตัด; เริ่มฝึกขยับลำตัวที่ 6 สัปดาห์; กลับไปทำกิจกรรมปกติได้ที่ 3–4 เดือน"
                  },
                  "pitfalls": {
                    "en": "• Applying distractive force during rod placement, worsening the posterior gapping\n• Missing a concomitant anterior teardrop or burst fracture component",
                    "th": "• ดันถ่างแกนเหล็กขณะผ่าตัด ทำให้รอยแยกด้านหลังยิ่งอ้ากว้างขึ้น\n• มองข้ามรอยหัก Teardrop หรือ Burst ด้านหน้าที่เกิดร่วมด้วย"
                  }
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
                "decisionPrinciple": {
                  "en": "Denis Type 4 Fracture-Dislocation represents complete 3-column disruption in shear, rotation, or violent distraction; gross multidirectional mechanical instability with very high incidence of complete/incomplete spinal cord transection (50%–75%); conservative care is absolutely contraindicated; emergency surgical open reduction, neural canal decompression, and rigid multi-level posterior pedicle screw instrumentation (± anterior column reconstruction) is mandatory.",
                  "th": "กระดูกหักหลุด Denis Type 4 (Fracture-Dislocation) คือการพังทลายของโครงสร้างทั้ง 3 เสาหลักอย่างสมบูรณ์จากแรงเฉือน หมุน หรือดึงถ่าง; ขาดความมั่นคงรอบทิศทางอย่างรุนแรงสูงสุด และมีอัตราเกิดอัมพาตจากไขสันหลังฉีกขาดสูงมาก (50%–75%); ห้ามรักษาแบบไม่ผ่าตัดเด็ดขาด; ต้องผ่าตัดเปิดจัดแนวกระดูกฉุกเฉิน เปิดระบายคลายการกดทับไขสันหลัง และดามสกรู Pedicle Screws หลายระดับทางด้านหลัง (± เสริมเสาด้านหน้า) ทันที"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Absolutely contraindicated (causes nonunion, progressive devastating deformity, and catastrophic permanent paralysis)",
                    "th": "• ห้ามรักษาแบบไม่ผ่าตัดเด็ดขาด (ทำให้กระดูกไม่ติด หลังค่อมบิดเบี้ยวรุนแรง และเป็นอัมพาตถาวร)"
                  },
                  "method": {
                    "en": "• Strict bed rest and spine board immobilization solely as a temporary holding measure pending emergency surgery",
                    "th": "• ดามบนบอร์ดและนอนพักบนเตียงเพื่อรอการผ่าตัดฉุกเฉินเท่านั้น"
                  },
                  "rehabilitation": {
                    "en": "• N/A",
                    "th": "• N/A"
                  },
                  "pitfalls": {
                    "en": "• Attempting closed reduction maneuvers in the emergency room which can aggravate neural transection",
                    "th": "• พยายามดึงดัดจัดกระดูกที่ห้องฉุกเฉิน ซึ่งอาจทำให้ไขสันหลังถูกตัดขาดถาวร"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All Denis Type 4 thoracolumbar fracture-dislocations (Flexion-rotation, shear, flexion-distraction dislocations)",
                    "th": "• กระดูกสันหลังหักเคลื่อนหลุด Denis Type 4 ทุกราย (ก้มหมุน, แรงเฉือน, ก้มดึงถ่างหลุด)"
                  },
                  "method": {
                    "en": "• Emergency Open Reduction and Rigid Instrumented Fusion: Posterior midline exposure, open reduction of displaced/locked facets, extensive laminectomy/decompression of the dural sac, long-segment posterior pedicle screw instrumentation (spanning 2 levels above and 2 levels below dislocation), rigid cross-link placement, and extensive posterolateral bone grafting\n• Secondary Anterior Column Reconstruction (Cage / Corpectomy) indicated if significant anterior vertebral body deficiency persists after posterior reduction",
                    "th": "• ผ่าตัดเปิดจัดแนวกระดูกและดามยึดฉุกเฉิน (Emergency Open Reduction & Fusion): เปิดแผลผ่าตัดด้านหลัง จัดกระดูกและข้อ Facet ที่เกยให้เข้าที่, ผ่าตัดเปิดระบายช่องไขสันหลัง (Laminectomy) ให้โล่ง, ดามสกรู Pedicle Screws ระยะยาว (2 ระดับบนและ 2 ระดับล่าง), ใส่ Cross-link เพิ่มความแข็งแรง และปลูกกระดูกเชื่อมข้อ\n• ผ่าตัดบูรณะเสาด้านหน้าเสริม (Anterior Cage / Corpectomy) หากลำตัวกระดูกด้านหน้าแตกยุบหายไปมากหลังจากจัดแนวด้านหลังแล้ว"
                  },
                  "rehabilitation": {
                    "en": "• Immediate intensive inpatient spinal cord injury neuro-rehabilitation; early wheelchair transfer and pressure ulcer prevention protocols",
                    "th": "• เริ่มโปรแกรมฟื้นฟูสมรรถภาพไขสันหลังและระบบประสาทอย่างเข้มข้นทันที; ฝึกเคลื่อนย้ายตัวขึ้นรถเข็นและป้องกันแผลกดทับ"
                  },
                  "pitfalls": {
                    "en": "• Construct pullout from using too short a fixation construct (short-segment instrumentation is contraindicated in fracture-dislocations)\n• Missed dural tears leading to pseudomeningocele or CSF fistula",
                    "th": "• โลหะดามถอนหลุดจากการดามสั้นเกินไป (ห้ามดามระยะสั้นในกระดูกหักหลุดเด็ดขาด)\n• ตรวจไม่พบเยื่อหุ้มไขสันหลังฉีกขาด ทำให้เกิดน้ำไขสันหลังรั่วซึมเรื้อรัง"
                  }
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
                "decisionPrinciple": {
                  "en": "Total TLICS score < 4 points represents a mechanically stable thoracolumbar fracture (e.g., compression fracture [1 pt] + intact PLC [0 pt] + neurologically intact [0 pt] = 1 pt); non-operative immobilization in a custom molded TLSO or Jewett hyperextension brace for 8–12 weeks achieves excellent bony consolidation without surgical risks.",
                  "th": "คะแนน TLICS รวม < 4 คะแนน แสดงถึงกระดูกสันหลังหักชนิดมั่นคงทางชีวกลศาสตร์ (เช่น รอยหักยุบ [1 คะแนน] + เอ็น PLC สมบูรณ์ [0 คะแนน] + ระบบประสาทปกติ [0 คะแนน] = 1 คะแนน); การรักษาแบบไม่ผ่าตัดด้วยเฝือกดามพยุงหลัง TLSO หรือ Jewett Brace นาน 8–12 สัปดาห์ กระดูกเชื่อมติดได้ดีเยี่ยมโดยไม่ต้องเสี่ยงต่อการผ่าตัด"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Total TLICS score ≤ 3 points (Mechanically stable fracture pattern, intact PLC, neurologically intact)",
                    "th": "• คะแนน TLICS รวม ≤ 3 คะแนน (กระดูกหักชนิดมั่นคง เอ็น PLC สมบูรณ์ และระบบประสาทปกติ)"
                  },
                  "method": {
                    "en": "• Custom molded Thoracolumbosacral Orthosis (TLSO) or Jewett hyperextension brace worn when upright for 8–12 weeks; serial upright standing radiographs at 2, 4, 8, and 12 weeks",
                    "th": "• ใส่เฝือกพยุงหลัง TLSO หรือ Jewett Brace ขณะลุกนั่ง/เดิน นาน 8–12 สัปดาห์; เอกซเรย์ท่ายืนติดตามที่ 2, 4, 8, 12 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Core muscle and paraspinal extensor strengthening starting at 8 weeks; gradual brace weaning once solid trabecular union is documented",
                    "th": "• บริหารกล้ามเนื้อแกนกลางและหลังเริ่มที่ 8 สัปดาห์; ค่อยๆ ปลดเฝือกพยุงหลังเมื่อเอกซเรย์เห็นกระดูกติดแน่น"
                  },
                  "pitfalls": {
                    "en": "• Failure to identify subtle posterior ligamentous complex (PLC) disruption on initial plain films; obtain STIR MRI if interspinous palpation reveals step-off",
                    "th": "• มองข้ามการฉีกขาดของเอ็นยึดด้านหลัง (PLC) จากภาพเอกซเรย์ธรรมดา; ควรตรวจ MRI หากคลำพบรอยแยกของยอดกระดูก"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Strictly not indicated for stable TLICS < 4 scores",
                    "th": "• ไม่มีข้อบ่งชี้ในการผ่าตัดสำหรับคะแนน TLICS < 4"
                  },
                  "method": {
                    "en": "• N/A",
                    "th": "• N/A"
                  },
                  "rehabilitation": {
                    "en": "• N/A",
                    "th": "• N/A"
                  },
                  "pitfalls": {
                    "en": "• Unnecessary surgical intervention exposing stable patients to infection, blood loss, and adjacent segment disease",
                    "th": "• ผ่าตัดโดยไม่จำเป็นในรอยหักที่มั่นคง เพิ่มความเสี่ยงต่อการติดเชื้อและข้อต่อกระดูกข้างเคียงเสื่อม"
                  }
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
                "decisionPrinciple": {
                  "en": "Total TLICS score = 4 points represents an equivocal / borderline injury; management must be personalized: operative stabilization (short-segment pedicle screws) is preferred in young active patients, burst fractures with significant canal retropulsion (>40%), or local kyphosis >20°; non-operative TLSO bracing is preferred in elderly, medically frail, or low-demand patients.",
                  "th": "คะแนน TLICS รวม = 4 คะแนน อยู่ในเกณฑ์กึ่งก้ำกึ่ง (Equivocal); พิจารณาการรักษาตามลักษณะผู้ป่วยแต่ละราย: แนะนำผ่าตัดดามสกรู Pedicle Screws ในผู้ป่วยอายุน้อย, กระดูกแตก Burst ยื่นเข้าช่องไขสันหลัง (>40%) หรือหลังค่อม >20°; แนะนำใส่เฝือกพยุงหลัง TLSO ในผู้สูงอายุ, ผู้ป่วยที่มีโรคร่วมหลายอย่าง หรือมีความเสี่ยงผ่าตัดสูง"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Medically frail patients, poor operative candidates, or stable burst patterns without neurological deficit and minimal kyphosis (<20°)",
                    "th": "• ผู้ป่วยที่มีโรคร่วมเสี่ยงสูงต่อการผ่าตัด หรือกระดูกแตก Burst ที่ไม่มีอาการทางระบบประสาทและหลังค่อมน้อย (<20°)"
                  },
                  "method": {
                    "en": "• Rigid molded TLSO body jacket worn for 10–12 weeks with weekly standing radiographs for the first month",
                    "th": "• ใส่เสื้อเกราะพยุงหลัง Rigid TLSO นาน 10–12 สัปดาห์ พร้อมเอกซเรย์ท่ายืนตรวจติดตามทุกสัปดาห์ในเดือนแรก"
                  },
                  "rehabilitation": {
                    "en": "• Progressive mobilization as tolerated; gentle isometric trunk strengthening at 10–12 weeks after brace removal",
                    "th": "• ค่อยๆ ลุกเดินตามที่ไหว; เริ่มฝึกบริหารกล้ามเนื้อลำตัวที่ 10–12 สัปดาห์หลังถอดเฝือก"
                  },
                  "pitfalls": {
                    "en": "• Progressive late post-traumatic kyphosis or delayed neurologic compromise requiring late complex reconstruction",
                    "th": "• แนวกระดูกหลังค่อยๆ ค่อมตัวลงเรื่อยๆ หรือเกิดอาการทางระบบประสาทล่าช้าจนต้องผ่าตัดแก้ไขในภายหลัง"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Young active patients desiring early mobilization\n• Significant vertebral body collapse (>50% height loss), canal occlusion >40%–50%, or kyphotic angle >20°\n• Incomplete nerve root deficit or severe intractable pain",
                    "th": "• ผู้ป่วยอายุน้อยที่ต้องการลุกขยับตัวได้เร็ว\n• ลำตัวกระดูกยุบตัว >50%, กระดูกแตกดันช่องไขสันหลัง >40%–50% หรือหลังค่อม >20°\n• มีอาการบาดเจ็บของรากประสาทบางส่วน หรือปวดรุนแรงไม่ทุเลา"
                  },
                  "method": {
                    "en": "• Posterior Instrumented Fusion: Short-segment pedicle screw fixation (1 level above and 1 level below ± fracture level index screws) ± posterior decompression laminectomy\n• Percutaneous minimally invasive (MIS) pedicle screw fixation for polytrauma or fast recovery",
                    "th": "• ผ่าตัดดามยึดด้านหลัง (Posterior Instrumented Fusion): ขันสกรู Pedicle Screws ระยะสั้น (1 ระดับบนและ 1 ระดับล่าง ± ขันสกรูที่ตัวกระดูกหัก) ± ผ่าตัดเปิดระบายช่องไขสันหลัง (Laminectomy)\n• ผ่าตัดดามสกรูผ่านผิวหนังแผลเล็ก (MIS Pedicle Screws) สำหรับผู้ป่วยบาดเจ็บหลายระบบเพื่อฟื้นตัวเร็ว"
                  },
                  "rehabilitation": {
                    "en": "• Early out-of-bed mobilization on post-op day 1 without external orthosis; physical therapy from week 6",
                    "th": "• ลุกเดินได้ตั้งแต่วันแรกหลังผ่าตัดโดยไม่ต้องใส่เฝือกนอก; เริ่มทำกายภาพบำบัดหลัง 6 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Hardware pullout or construct kyphosis if short-segment fixation is used in severe anterior column deficiency without anterior support",
                    "th": "• สกรูถอนหลุดหรือหลังโก่งหากดามระยะสั้นในรายที่เสาด้านหน้าแตกป่นมากโดยไม่เสริมความแข็งแรงด้านหน้า"
                  }
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
                "decisionPrinciple": {
                  "en": "Total TLICS score > 4 points indicates gross mechanical instability, definitive Posterior Ligamentous Complex (PLC) rupture, or spinal cord / cauda equina deficit; conservative care is contraindicated; urgent posterior instrumented pedicle screw fixation with direct/indirect neural decompression (± anterior reconstruction) is mandatory to prevent progressive paralysis and kyphosis.",
                  "th": "คะแนน TLICS รวม > 4 คะแนน แสดงถึงความไม่มั่นคงทางกลศาสตร์รุนแรง, เอ็นยึดด้านหลัง (PLC) ฉีกขาดสมบูรณ์ หรือมีภาวะกดทับไขสันหลัง/Cauda Equina; ห้ามรักษาแบบไม่ผ่าตัดเด็ดขาด; ต้องผ่าตัดดามสกรู Pedicle Screws ด้านหลังด่วน ร่วมกับเปิดคลายการกดทับเส้นประสาท (± ผ่าตัดบูรณะเสาด้านหน้า) เพื่อป้องกันอัมพาตและหลังโก่งถาวร"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly contraindicated (leads to progressive kyphosis, nonunion, and catastrophic irreversible neurological deterioration)",
                    "th": "• ห้ามรักษาแบบไม่ผ่าตัดเด็ดขาด (ทำให้หลังค่อมรุนแรง กระดูกไม่ติด และไขสันหลังถูกกดทับจนอัมพาตถาวร)"
                  },
                  "method": {
                    "en": "• Strict flat bed rest only as a temporary measure while preparing for urgent surgery",
                    "th": "• นอนพักราบบนเตียงเพื่อเตรียมตัวเข้ารับการผ่าตัดด่วนเท่านั้น"
                  },
                  "rehabilitation": {
                    "en": "• N/A",
                    "th": "• N/A"
                  },
                  "pitfalls": {
                    "en": "• Delayed surgical decompression in patients with incomplete cord/cauda equina injury leading to permanent paralysis",
                    "th": "• ผ่าตัดคลายการกดทับล่าช้าในผู้ป่วยที่มีอาการอัมพาตบางส่วน ทำให้เส้นประสาทถูกทำลายถาวร"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All patients with TLICS score ≥ 5 (Distraction injuries, translation/rotational dislocations, burst fractures with PLC disruption or neurologic deficit)",
                    "th": "• ผู้ป่วยที่มีคะแนน TLICS ≥ 5 ทุกราย (กระดูกฉีกอ้า Distraction, กระดูกเคลื่อนหลุด Translation, กระดูกแตก Burst ร่วมกับเอ็น PLC ขาดหรือมีอาการอัมพาต)"
                  },
                  "method": {
                    "en": "• Posterior Instrumented Fusion: Open reduction, posterior pedicle screw instrumentation spanning 1–2 levels above and below injury zone (or long-segment for fracture-dislocations) + wide laminectomy for direct neural decompression + posterolateral fusion\n• Combined Anterior-Posterior Reconstruction (360°): Anterior corpectomy with expandable titanium cage and plating + posterior pedicle screw instrumentation for severe comminution with anterior column load-sharing score >6",
                    "th": "• ผ่าตัดดามยึดด้านหลัง (Posterior Instrumented Fusion): เปิดจัดแนวกระดูก ขันสกรู Pedicle Screws 1–2 ระดับบนและล่าง (หรือระยะยาวในกระดูกหักเคลื่อนหลุด) + ผ่าตัดเปิดระบายช่องไขสันหลัง (Laminectomy) ให้โล่ง + ปลูกกระดูกเชื่อมข้อ\n• ผ่าตัดบูรณะรอบทิศทาง 360 องศา (หน้าและหลัง): ตัดลำตัวกระดูกด้านหน้าใส่ Expandable Cage ร่วมกับดามสกรูด้านหลังในรายที่กระดูกแตกป่นรุนแรง (Load-sharing score >6)"
                  },
                  "rehabilitation": {
                    "en": "• Early aggressive in-bed turning protocols; out-of-bed mobilization within 24–48 hours post-op; early inpatient spinal cord rehabilitation",
                    "th": "• พลิกตัวป้องกันแผลกดทับ; ลุกนั่ง/เดินได้เร็วภายใน 24–48 ชั่วโมงหลังผ่าตัด; เริ่มโปรแกรมฟื้นฟูสมรรถภาพไขสันหลังอย่างเข้มข้น"
                  },
                  "pitfalls": {
                    "en": "• Inadequate decompression leaving residual retropulsed bone fragments in the spinal canal\n• Construct failure from insufficient fixation levels in high-energy shear/distraction injuries",
                    "th": "• ผ่าตัดคลายการกดทับไม่หมด เหลือชิ้นกระดูกกดทับไขสันหลัง\n• โลหะดามถอนหลุดจากการดามสั้นเกินไปในแรงกระแทกเฉือนรุนแรง"
                  }
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
