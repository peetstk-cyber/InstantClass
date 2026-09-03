import type { BoneData } from "../../types";

export const headBone: BoneData = {
  "id": "head",
  "name": {
    "en": "Skull",
    "th": "กะโหลกศีรษะ"
  },
  "description": {
    "en": "Head",
    "th": "กะโหลกศีรษะ"
  },
  "pediatric": false,
  "regions": [
    {
      "id": "skull",
      "name": {
        "en": "Skull",
        "th": "กะโหลก"
      },
      "regionConcept": {
        "physicalExam": [
          {
            "sign": "GCS Score & Pupillary Reflex",
            "positive": {
              "en": "Asymmetric pupils or GCS < 8 indicates severe TBI & impending herniation",
              "th": "รูม่านตาขยายไม่เท่ากัน หรือ GCS < 8 บ่งชี้บาดเจ็บศีรษะรุนแรงและสมองเลื่อน"
            }
          },
          {
            "sign": "Battle's Sign & Raccoon Eyes",
            "positive": {
              "en": "Ecchymosis over mastoid process or bilateral periorbital area = Basilar skull fracture",
              "th": "รอยเขียวช้ำหลังใบหูหรือรอบกระบอกตาคู่ = กระดูกฐานกะโหลกศีรษะหัก"
            }
          }
        ],
        "redFlags": [
          {
            "en": "Epidural Hemorrhage (Lucid interval followed by rapid deterioration due to MMA tear)",
            "th": "เลือดออกเหนือเยื่อหุ้มสมอง (มีช่วงรู้สึกตัว lucid interval แล้วทรุดลงอย่างรวดเร็ว)"
          },
          {
            "en": "CSF Otorrhea / Rhinorrhea (risk of ascending meningitis)",
            "th": "น้ำเลี้ยงสมองไหลออกทางหูหรือจมูก (เสี่ยงติดเชื้อเยื่อหุ้มสมอง)"
          }
        ],
        "clinicalPearls": [
          {
            "en": "Non-contrast CT Brain is the gold standard investigation for acute traumatic brain injury.",
            "th": "CT Brain แบบไม่ฉีดสี คือวิธีตรวจมาตรฐานหลักที่ดีที่สุดสำหรับอุบัติเหตุศีรษะฉุกเฉิน"
          }
        ],
        "images": [
          {
            "url": "/images/concepts/anatomy_skull.png",
            "title": {
              "en": "McGrigor-Campbell Facial Lines",
              "th": "เส้นประเมินใบหน้า McGrigor-Campbell"
            },
            "caption": {
              "en": "Standard radiographic reference arcs on OM/Waters view to detect orbital, zygomatic, and maxillary disruptions.",
              "th": "เส้นโค้งอ้างอิงบนฟิล์มท่า OM/Waters เพื่อตรวจจับรอยหักบริเวณเบ้าตา โหนกแก้ม และขากรรไกรบน"
            }
          },
          {
            "url": "/images/xrays/head/lefort_1.png",
            "title": {
              "en": "Waters / OM View Radiograph",
              "th": "ฟิล์มเอกซเรย์ท่า Waters (OM View)"
            },
            "caption": {
              "en": "Dedicated 30-degree occipitomental projection optimal for evaluating midface and paranasal sinuses.",
              "th": "ภาพฉายท่า Occipitomental 30 องศาเพื่อตรวจประเมินกระดูกใบหน้าส่วนกลางและโพรงอากาศพารานาซัล"
            }
          }
        ]
      },
      "classifications": [
        {
          "system": "Le Fort",
          "fullName": {
            "en": "Le Fort Classification for Midface Maxillofacial Fractures",
            "th": "การจำแนกกระดูกใบหน้าส่วนกลางหักแบบ Le Fort (Le Fort Fractures)"
          },
          "description": {
            "en": "Classic classification of midfacial fractures caused by direct anterior impact, categorized into Type I (Floating palate / Horizontal maxilla), Type II (Pyramidal / Nasomaxillary), and Type III (Craniofacial disjunction / Complete facial dissociation).",
            "th": "ระบบจำแนกการหักของกระดูกใบหน้าส่วนกลางจากแรงกระแทกด้านหน้า แบ่งเป็น Le Fort I (เพดานปากหลุด/ขากรรไกรบนหักแนวนอน), Le Fort II (รูปพีระมิด/จมูก-โหนกแก้ม-ขากรรไกร) และ Le Fort III (ใบหน้าหลุดออกจากฐานกะโหลก)"
          },
          "concept": {
            "title": {
              "en": "Le Fort Midfacial Fracture Clinical Concept",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ Le Fort Classification"
            },
            "corePrinciple": {
              "en": "Categorizes complex midface fracture patterns based on the plane of trans-facial separation resulting from blunt facial trauma. All Le Fort fractures involve disruption of the pterygoid plates.",
              "th": "จำแนกรูปแบบการหักของกระดูกใบหน้าส่วนกลางตามแนวระดับการแยกหลุดของกระดูกจากแรงกระแทก โดยรอยหัก Le Fort ทุกประเภทต้องมีการแตกหักของ Pterygoid plates"
            },
            "rules": [
              {
                "en": "Le Fort I (Floating Palate): Horizontal fracture above tooth roots through lower pterygoid plates -> Mobility restricted to hard palate and maxillary teeth.",
                "th": "Le Fort I (เพดานปากหลุด): รอยหักแนวนอนเหนือรากฟันผ่าน Pterygoid plate ส่วนล่าง ขยับโยกเฉพาะเพดานปากและแนวฟันบน"
              },
              {
                "en": "Le Fort II (Pyramidal / Nasomaxillary): Pyramidal fracture through nasofrontal suture, inferior orbital rim, and pterygoid plates -> Mobility of midface pyramid with intact zygomas.",
                "th": "Le Fort II (รูปพีระมิด): รอยหักรูปพีระมิดผ่าน Nasofrontal suture, ขอบเบ้าตาล่าง และ Pterygoid plates ใบหน้าส่วนกลางโยกแต่โหนกแก้มยังติดกับกะโหลก"
              },
              {
                "en": "Le Fort III (Craniofacial Disjunction): Fracture passes through nasofrontal suture, orbital walls, zygomatic arch, and upper pterygoid plates -> Complete separation of facial skeleton from cranium (Dish-face deformity).",
                "th": "Le Fort III (ใบหน้าหลุดจากฐานกะโหลก): รอยหักผ่าน Nasofrontal suture, เบ้าตา, Zygomatic arch และ Pterygoid plates ส่วนบน ทำให้ใบหน้าทั้งหมดหลุดแยกออกจากฐานกะโหลก (Dish-face deformity)"
              }
            ],
            "clinicalSignificance": [
              {
                "en": "Airway Management Priority: High risk of acute upper airway obstruction due to posterior midface displacement, pharyngeal hematoma, and soft tissue edema. Emergency intubation or surgical airway may be required.",
                "th": "ความสำคัญของทางเดินหายใจ: เสี่ยงสูงต่อการอุดกั้นทางเดินหายใจส่วนบนเนื่องจากกระดูกใบหน้าเคลื่อนไปด้านหลังและเนื้อเยื่อบวม อาจต้องเจาะคอหรือใส่ท่อช่วยหายใจด่วน"
              },
              {
                "en": "Naso-Endotracheal Intubation Contraindicated: Avoid nasotracheal intubation in Le Fort II/III fractures due to risk of inadvertent intracranial tube placement through a cribriform plate fracture.",
                "th": "ข้อห้ามใส่ท่อทางจมูก: ห้ามใส่ท่อช่วยหายใจทางจมูกใน Le Fort II/III เนื่องจากเสี่ยงท่อหลุดเข้าแทงสมองผ่านฐานกะโหลก cribriform plate ที่แตก"
              },
              {
                "en": "Surgical Reconstruction: Managed with open reduction and internal fixation (ORIF) with miniplates to restore facial buttresses, occlusion, and orbital volume.",
                "th": "การผ่าตัดรักษา: ผ่าตัดเปิดจัดกระดูกและยึดด้วยแผ่นโลหะขนาดเล็ก (Miniplate ORIF) เพื่อฟื้นฟูโครงสร้างใบหน้า (Facial buttress) และการสบฟัน"
              }
            ]
          },
          "investigations": [
            {
              "name": "3D CT Scan of Maxillofacial Region",
              "details": {
                "en": "High-resolution thin-slice CT with 3D reconstructions. Gold standard to map fracture planes, pterygoid plate involvement, and orbital wall disruption.",
                "th": "เอกซเรย์คอมพิวเตอร์ 3D ความละเอียดสูง เป็นมาตรฐานหลักในการบอกระนาบรอยหัก การแตกของ Pterygoid plate และผนังเบ้าตา"
              }
            }
          ],
          "types": [
            {
              "type": "Le Fort I",
              "name": {
                "en": "Le Fort I (Horizontal Maxillary Fracture / Floating Palate)",
                "th": "Le Fort I (รอยหักแนวนอนขากรรไกรบน / เพดานปากหลุด)"
              },
              "description": {
                "en": "Horizontal fracture above the maxillary teeth roots extending through the anterior maxillary wall, nasal septum, and lower pterygoid plates.\nPalate and alveolus are mobile relative to the rest of the facial skeleton.",
                "th": "รอยหักแนวนอนพาดผ่านเหนือรากฟันขากรรไกรบน ผ่านผนังหน้า Maxilla, ผนังกั้นจมูก และ Pterygoid plate ส่วนล่าง\nเพดานปากและเบ้าฟันบนสามารถขยับโยกได้"
              },
              "moi": {
                "en": "Direct low anterior force vector applied to the upper lip/maxillary alveolus.",
                "th": "แรงกระแทกตรงเข้าที่ริมฝีปากบนหรือแนวฟันขากรรไกรบน"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Horizontal midfacial fracture separating the dental alveolus and hard palate from the upper facial skeleton (Floating Palate); non-operative soft diet and maxillomandibular fixation (MMF) is reserved for non-displaced fractures with intact premorbid dental occlusion; displaced fractures causing malocclusion require open reduction and internal fixation (ORIF) with miniplates along the nasomaxillary and zygomaticomaxillary buttresses to restore vertical facial height and dental alignment.",
                  "th": "รอยหักแนวนอนของกระดูกใบหน้าส่วนกลางที่แยกเพดานปากและแนวฟันบนออกจากโครงกระดูกใบหน้าส่วนบน (Floating Palate); การรักษาแบบไม่ผ่าตัดโดยรับประทานอาหารเหลวและมัดฟันสบ MMF สงวนไว้เฉพาะรอยหักที่ไม่เคลื่อนตัวและการสบฟันปกติ; รอยหักที่เคลื่อนตัวจนฟันสบผิดปกติ ต้องผ่าตัดเปิดจัดกระดูกและยึดด้วยแผ่นโลหะ Miniplate (ORIF) บริเวณ Nasomaxillary และ Zygomaticomaxillary Buttresses เพื่อฟื้นฟูความสูงของใบหน้าและการสบฟัน"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Non-displaced Le Fort I fractures with intact, reproducible premorbid dental occlusion\n• Severe medical contraindications to general anesthesia",
                    "th": "• กระดูกหัก Le Fort I ชนิดไม่เคลื่อนตัวและการสบฟันยังคงสบได้แนบสนิทตามปกติ\n• ผู้ป่วยที่มีข้อห้ามทางการแพทย์ขั้นรุนแรงต่อการดมยาสลบ"
                  },
                  "method": {
                    "en": "• Maxillomandibular Fixation (MMF) using Erich arch bars or intermaxillary fixation (IMF) screws with elastic traction for 4–6 weeks; strict non-chew liquid diet for 6 weeks",
                    "th": "• มัดฟันสบ (MMF) ด้วย Erich Arch Bars หรือ IMF Screws ร่วมกับคล้องยางยืดนาน 4–6 สัปดาห์; รับประทานอาหารเหลวล้วน 6 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Wean elastics at 4–6 weeks; progressive jaw opening and masticatory rehabilitation exercises; soft mechanical diet for an additional 4 weeks",
                    "th": "• ปลดหนังยางที่ 4–6 สัปดาห์; เริ่มฝึกอ้าปากและบริหารการบดเคี้ยว; รับประทานอาหารอ่อนต่ออีก 4 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Developing malocclusion (anterior open bite) or nonunion if subtle displacement is uncorrected",
                    "th": "• เกิดภาวะฟันสบเปิดด้านหน้า (Anterior Open Bite) หรือกระดูกไม่ติดหากจัดแนวกระดูกที่เคลื่อนตัวไม่เข้าที่"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Displaced Le Fort I fractures causing malocclusion (premature molar contact or anterior open bite)\n• Mobile maxillary floating palate\n• Associated mandibular fractures disrupting dental arch continuity",
                    "th": "• กระดูกหัก Le Fort I ชนิดเคลื่อนตัวจนฟันสบผิดปกติ (ฟันกรามสบก่อน หรือฟันหน้าสบไม่ติด)\n• เพดานปากขากรรไกรบนโยกหลุด (Floating Palate)\n• มีกระดูกขากรรไกรล่างหักร่วมด้วยจนเสียแนวโค้งฟัน"
                  },
                  "method": {
                    "en": "• Open Reduction and Internal Fixation (ORIF):\n  1. Intraoperative Maxillomandibular Fixation (MMF) with arch bars to re-establish anatomical dental occlusion\n  2. Maxillary vestibular incision (gingivobuccal sulcus approach)\n  3. Rigid fixation using four 1.5mm or 2.0mm L-shaped/straight miniplates along the bilateral nasomaxillary (medial) and zygomaticomaxillary (lateral) buttresses\n  4. Release MMF to confirm passive reproducible occlusion before closure",
                    "th": "• ผ่าตัดเปิดจัดกระดูกและยึดด้วยโลหะดาม (ORIF):\n  1. มัดฟันสบ (MMF) ชั่วคราวในห้องผ่าตัดด้วย Arch Bars เพื่อให้ฟันสบเข้าที่เดิมตามธรรมชาติ\n  2. เปิดแผลทางร่องเหงือกด้านในริมฝีปากบน (Gingivobuccal sulcus approach)\n  3. ขันยึดแผ่นโลหะ Miniplate ขนาด 1.5มม. หรือ 2.0มม. รูปตัว L หรือเส้นตรง 4 ตำแหน่ง บริเวณ Nasomaxillary และ Zygomaticomaxillary Buttresses สองข้าง\n  4. ปลดการมัดฟันเพื่อทดสอบว่าฟันสบสนิทดีก่อนเย็บปิดแผล"
                  },
                  "rehabilitation": {
                    "en": "• Immediate release of MMF post-op allows early jaw mobilization; soft diet for 6 weeks; oral hygiene rinses (chlorhexidine 0.12%)",
                    "th": "• ปลดการมัดฟันทันทีหลังผ่าตัดช่วยให้อ้าปากได้เร็ว; รับประทานอาหารอ่อน 6 สัปดาห์; บ้วนปากด้วยน้ำยาฆ่าเชื้อ Chlorhexidine"
                  },
                  "pitfalls": {
                    "en": "• Fixation before establishing proper dental occlusion leading to iatrogenic malocclusion\n• Placing screws into maxillary tooth roots",
                    "th": "• ขันยึดแผ่นเหล็กก่อนจัดฟันให้สบเข้าที่ ทำให้เกิดภาวะฟันสบผิดรูปถาวร\n• ขันสกรูโดนรากฟันบนทำให้รากฟันตาย"
                  }
                }
              },
              "illustrationId": "/images/head/lefort_1.png",
              "xrayUrl": "/images/xrays/head/lefort_1.png",
              "xrayDescription": {
                "en": "Horizontal fracture line above maxillary root tips with lower pterygoid plate disruption.",
                "th": "เห็นรอยหักแนวนอนเหนือปลายรากฟันขากรรไกรบน และ Pterygoid plate ส่วนล่างหัก"
              }
            },
            {
              "type": "Le Fort II",
              "name": {
                "en": "Le Fort II (Pyramidal Nasomaxillary Fracture)",
                "th": "Le Fort II (รอยหักรูปพีระมิด / จมูก-ขากรรไกรบน)"
              },
              "description": {
                "en": "Pyramidal fracture passing through the nasofrontal suture, lacrimal bones, inferior orbital rim, orbital floor, and middle pterygoid plates.\nMidface pyramid is mobile, but zygomatic arches remain intact to the cranium.",
                "th": "รอยหักเป็นรูปพีระมิดผ่าน Nasofrontal suture, กระดูกน้ำตา, ขอบเบ้าตาล่าง, พื้นเบ้าตา และ Pterygoid plate ส่วนกลาง\nใบหน้าส่วนกลางรูปพีระมิดขยับโยกได้ แต่โหนกแก้มยังคงยึดติดกับกะโหลกศีรษะ"
              },
              "moi": {
                "en": "Direct force vector applied to the central midface / nasal bridge region.",
                "th": "แรงกระแทกตรงเข้าที่กลางใบหน้าหรือบริเวณสันจมูก"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Pyramidal midfacial fracture traversing the nasofrontal suture, orbital floors, inferior orbital rims, and pterygoid plates; nasotracheal intubation is strictly contraindicated due to cribriform plate disruption risk; definitive management mandates surgical ORIF with miniplates to reconstruct orbital rim continuity, restore midfacial projection, and re-establish dental occlusion.",
                  "th": "รอยหักใบหน้าส่วนกลางรูปพีระมิด พาดผ่าน Nasofrontal suture, พื้นเบ้าตา, ขอบเบ้าตาล่าง และ Pterygoid plates; ห้ามใส่ท่อช่วยหายใจทางจมูกเด็ดขาดเนื่องจากเสี่ยงท่อแทงทะลุฐานกะโหลก Cribriform plate; การรักษาหลักคือการผ่าตัด ORIF ด้วย Miniplate เพื่อต่อเชื่อมขอบเบ้าตา ดึงใบหน้าให้ยื่นออกตามปกติ และจัดแนวการสบฟัน"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly non-displaced fractures with perfect occlusion and no orbital floor entrapment (extremely rare)",
                    "th": "• กระดูกหักที่ไม่เคลื่อนตัวเลย ฟันสบปกติสมบูรณ์ และไม่มีกล้ามเนื้อตาติดในพื้นเบ้าตา (พบน้อยมาก)"
                  },
                  "method": {
                    "en": "• Maxillomandibular fixation (MMF) for 4–6 weeks with close weekly CT monitoring and liquid diet",
                    "th": "• มัดฟันสบ MMF นาน 4–6 สัปดาห์ ร่วมกับเอกซเรย์ CT ตรวจติดตามและรับประทานอาหารเหลว"
                  },
                  "rehabilitation": {
                    "en": "• Progressive oral rehabilitation after 6 weeks; ocular motility exercises",
                    "th": "• เริ่มฝึกบริหารการเคี้ยวหลัง 6 สัปดาห์; ฝึกบริหารกล้ามเนื้อกลอกตา"
                  },
                  "pitfalls": {
                    "en": "• Late enophthalmos, diplopia, and midface retrusion from unrecognized orbital floor blowout or buttress collapse",
                    "th": "• ตาผลุบ ตาเห็นภาพซ้อน และใบหน้าส่วนกลางยุบตัวแบนลงจากการยุบของพื้นเบ้าตา"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All displaced Le Fort II fractures\n• Midface mobility, malocclusion, infraorbital step-off, or orbital floor entrapment with diplopia",
                    "th": "• กระดูกหัก Le Fort II ชนิดเคลื่อนตัวทุกราย\n• ใบหน้าส่วนกลางโยก, ฟันสบผิดปกติ, ขอบเบ้าตาล่างเป็นขั้นบันได หรือกล้ามเนื้อตาติดในพื้นเบ้าตาจนเห็นภาพซ้อน"
                  },
                  "method": {
                    "en": "• Open Reduction and Internal Fixation (ORIF):\n  1. Re-establish occlusion with intraoperative MMF\n  2. Surgical approaches: Subciliary/transconjunctival incision (for inferior orbital rim and orbital floor) + Gingivobuccal sulcus incision (for zygomaticomaxillary buttresses) ± coronal/glabellar approach (for nasofrontal junction)\n  3. Miniplate fixation (1.5mm/2.0mm) along nasofrontal junction, bilateral inferior orbital rims, and bilateral zygomaticomaxillary buttresses\n  4. Reconstruct orbital floor with titanium mesh / PEEK implant if defect >1 cm²",
                    "th": "• ผ่าตัดเปิดจัดกระดูกและยึดด้วยแผ่นโลหะ (ORIF):\n  1. จัดฟันสบให้เข้าที่ด้วย MMF ในห้องผ่าตัด\n  2. เปิดแผล: Transconjunctival/Subciliary (เข้าขอบเบ้าตาล่างและพื้นเบ้าตา) + Gingivobuccal (เข้าเสาโหนกแก้ม) ± แผลเหนือสันจมูก/Coronal (เข้าจุดเชื่อมต่อ Nasofrontal)\n  3. ขันยึด Miniplate ขนาด 1.5มม./2.0มม. ที่จุดเชื่อม Nasofrontal, ขอบเบ้าตาล่างสองข้าง และ Zygomaticomaxillary Buttresses สองข้าง\n  4. บูรณะพื้นเบ้าตาด้วยแผ่น Titanium Mesh หรือ PEEK หากพื้นเบ้าตาแตกทะลุ >1 ตร.ซม."
                  },
                  "rehabilitation": {
                    "en": "• Release MMF; early jaw movement; soft diet for 6 weeks; ophthalmologic follow-up for visual acuity and ocular motility",
                    "th": "• ปลดการมัดฟัน; เริ่มขยับขากรรไกรได้เร็ว; อาหารอ่อน 6 สัปดาห์; ตรวจติดตามการมองเห็นและการกลอกตากับจักษุแพทย์"
                  },
                  "pitfalls": {
                    "en": "• Attempting nasotracheal intubation causing intracranial catheter migration\n• Infraorbital nerve injury causing permanent midface numbness",
                    "th": "• ใส่ท่อช่วยหายใจทางจมูกจนท่อทะลุเข้าแทงเนื้อสมอง\n• เส้นประสาทใต้เบ้าตา (Infraorbital nerve) บาดเจ็บทำให้แก้มและริมฝีปากชาถาวร"
                  }
                }
              },
              "illustrationId": "/images/head/lefort_2.png",
              "xrayUrl": "/images/xrays/head/lefort_2.png",
              "xrayDescription": {
                "en": "Pyramidal fracture extending from nasofrontal suture down through bilateral inferior orbital rims.",
                "th": "เห็นรอยหักรูปพีระมิดลากจาก Nasofrontal suture ลงมาผ่านขอบเบ้าตาล่างทั้งสองข้าง"
              }
            },
            {
              "type": "Le Fort III",
              "name": {
                "en": "Le Fort III (Craniofacial Disjunction / Dish-Face Deformity)",
                "th": "Le Fort III (ใบหน้าหลุดจากฐานกะโหลก / Dish-Face Deformity)"
              },
              "description": {
                "en": "High facial fracture passing through nasofrontal suture, ethmoid bone, medial/lateral orbital walls, zygomatic arch, and upper pterygoid plates.\nComplete dissociation of the facial skeleton from the skull base (Craniofacial disjunction).",
                "th": "รอยหักระดับสูงผ่าน Nasofrontal suture, กระดูก Ethmoid, ผนังเบ้าตาด้านใน-นอก, Zygomatic arch และ Pterygoid plate ส่วนบน\nใบหน้าทั้งหมดหลุดแยกออกจากฐานกะโหลกศีรษะอย่างสมบูรณ์ (Dish-face deformity)"
              },
              "moi": {
                "en": "Severe high-energy impact applied to the upper midface.",
                "th": "แรงกระแทกพลังงานสูงรุนแรงเข้าที่ใบหน้าส่วนบน"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Complete dissociation of the facial skeleton from the cranial base (Craniofacial Disjunction) with massive midfacial retro-displacement (Dish-face deformity) and acute upper airway compromise; immediate oral endotracheal or surgical airway (tracheostomy) is paramount; nasotracheal intubation is strictly contraindicated; staged complex surgical craniofacial reconstruction with multi-site miniplate fixation from stable cranium down to the maxillary occlusal plane is mandatory.",
                  "th": "การแยกหลุดออกจากกันโดยสิ้นเชิงของโครงกระดูกใบหน้าจากฐานกะโหลก (Craniofacial Disjunction) ทำให้ใบหน้ายุบแบนไปด้านหลัง (Dish-Face) และเสี่ยงต่อการอุดกั้นทางเดินหายใจเฉียบพลัน; ต้องรักษาทางเดินหายใจด้วยการใส่ท่อทางปากหรือเจาะคอทันที; ห้ามใส่ท่อทางจมูกเด็ดขาด; ต้องผ่าตัดใหญ่บูรณะโครงสร้างใบหน้าและกะโหลกด้วย Miniplate หลายจุด โดยยึดต่อจากกะโหลกศีรษะที่มั่นคงลงมาสู่ระนาบการสบฟัน"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Absolutely contraindicated (results in fatal airway obstruction, severe permanent dish-face deformity, telecanthus, and non-functional malocclusion)",
                    "th": "• ห้ามรักษาแบบไม่ผ่าตัดเด็ดขาด (ทำให้ทางเดินหายใจอุดกั้น ใบหน้ายุบแบนถาวร หัวตากว้าง และฟันสบไม่ติด)"
                  },
                  "method": {
                    "en": "• Emergency airway stabilization (oral ETT, submental intubation, or tracheostomy) and intracranial pressure monitoring prior to definitive surgery",
                    "th": "• จัดการทางเดินหายใจฉุกเฉิน (ใส่ท่อทางปาก เจาะใต้คาง หรือเจาะคอ) และเฝ้าระวังความดันในกะโหลกศีรษะก่อนผ่าตัด"
                  },
                  "rehabilitation": {
                    "en": "• N/A",
                    "th": "• N/A"
                  },
                  "pitfalls": {
                    "en": "• Failure to secure airway leading to hypoxic brain death",
                    "th": "• ไม่ได้เปิดทางเดินหายใจฉุกเฉินจนสมองขาดออกซิเจนเสียชีวิต"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All Le Fort III craniofacial disjunction fractures",
                    "th": "• กระดูกใบหน้าหลุดจากฐานกะโหลก Le Fort III ทุกราย"
                  },
                  "method": {
                    "en": "• Complex Craniofacial Open Reduction and Internal Fixation (ORIF):\n  1. Coronal (bicoronal) flap combined with subciliary/transconjunctival and intraoral vestibular incisions\n  2. Re-establish dental occlusion via intraoperative MMF\n  3. Top-down / Outside-in reconstruction: Rigid fixation of bilateral zygomaticofrontal sutures and zygomatic arches to restore facial width and projection -> Fixation of nasofrontal suture -> Re-anchoring of lower maxilla to rebuilt upper facial skeleton\n  4. Orbital floor reconstruction with titanium mesh; transnasal canthopexy for traumatic telecanthus",
                    "th": "• ผ่าตัดใหญ่บูรณะใบหน้าและฐานกะโหลก (Complex Craniofacial ORIF):\n  1. เปิดแผลรูปมงกุฎข้ามศีรษะ (Coronal flap) ร่วมกับแผลใต้ขอบตาและแผลในปาก\n  2. จัดฟันสบให้เข้าที่เดิมด้วย MMF\n  3. ยึดกระดูกจากบนลงล่าง / จากนอกเข้าใน: ดามแผ่น Miniplate ที่ Zygomaticofrontal suture สองข้าง และ Zygomatic arch เพื่อฟื้นฟูความกว้างและความนูนของใบหน้า -> ดาม Nasofrontal suture -> ยึดขากรรไกรบนส่วนล่างเข้ากับโครงใบหน้าส่วนบนที่สร้างขึ้นใหม่\n  4. ปูพื้นเบ้าตาด้วย Titanium Mesh และเย็บตรึงเอ็นหัวตา (Transnasal Canthopexy) แก้ไขภาวะหัวตาห่าง"
                  },
                  "rehabilitation": {
                    "en": "• MMF released post-op; soft mechanical diet for 6–8 weeks; intensive ocular and maxillofacial physical rehabilitation; long-term follow-up for optic nerve and lacrimal function",
                    "th": "• ปลดการมัดฟัน; อาหารอ่อน 6–8 สัปดาห์; ทำกายภาพบำบัดฟื้นฟูการบดเคี้ยวและการกลอกตา; ตรวจติดตามการทำงานของเส้นประสาทตาและท่อน้ำตาในระยะยาว"
                  },
                  "pitfalls": {
                    "en": "• Inadequate restoration of anterior midfacial projection resulting in persistent flat 'dish-face' deformity\n• Missed CSF leak/dural tear leading to tension pneumocephalus or meningitis",
                    "th": "• ดึงใบหน้ายื่นมาข้างหน้าไม่เพียงพอ ทำให้ใบหน้าแบนบุบเป็นจาน (Dish-face) ถาวร\n• ตรวจไม่พบน้ำเลี้ยงสมองรั่ว ทำให้เกิดลมดันในสมองหรือเยื่อหุ้มสมองอักเสบ"
                  }
                }
              },
              "illustrationId": "/images/head/lefort_3.png",
              "xrayUrl": "/images/xrays/head/lefort_3.png",
              "xrayDescription": {
                "en": "Bilateral zygomatic arch, frontozygomatic suture, and nasofrontal suture disruptions with severe retrodisplacement of midface.",
                "th": "เห็นรอยหักที่ Zygomatic arch, Frontozygomatic suture และ Nasofrontal suture สองข้าง ใบหน้าทรุดไปด้านหลัง"
              }
            }
          ]
        },
        {
          "system": "Skull Base Fracture",
          "fullName": {
            "en": "Anatomical Classification of Skull Base Fractures",
            "th": "การจำแนกกระดูกฐานกะโหลกศีรษะหักตามกายวิภาค (Skull Base Fractures)"
          },
          "description": {
            "en": "Anatomical classification dividing skull base fractures by fossa involvement: Anterior Fossa (Cribriform plate / Frontal sinus), Middle Fossa (Temporal bone / Petrous ridge / Sphenoid), and Posterior Fossa (Occipital bone / Foramen magnum).",
            "th": "ระบบจำแนกกระดูกฐานกะโหลกหักตามแอ่งฐานกะโหลก: Anterior Fossa (ฐานกะโหลกส่วนหน้า/Cribriform plate), Middle Fossa (ฐานกะโหลกส่วนกลาง/กระดูก Temporal และ Petrous) และ Posterior Fossa (ฐานกะโหลกส่วนหลัง/กระดูก Occipital)"
          },
          "concept": {
            "title": {
              "en": "Skull Base Fracture Clinical Concept",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ Skull Base Fracture Classification"
            },
            "corePrinciple": {
              "en": "Classifies cranial base fractures by anatomical fossa location, predicting specific cranial nerve palsies, CSF leakage, vascular disruption (internal carotid artery), and risk of ascending meningitis.",
              "th": "จำแนกรอยหักของฐานกะโหลกศีรษะตามตำแหน่งทางกายวิภาค เพื่อทำนายการบาดเจ็บของเส้นประสาทสมอง การรั่วของน้ำเลี้ยงสมอง (CSF leak) การบาดเจ็บของหลอดเลือดใหญ่ และภาวะติดเชื้อเยื่อหุ้มสมอง"
            },
            "rules": [
              {
                "en": "Anterior Fossa Fracture: Involves cribriform plate, ethmoid/frontal sinuses. Clinical signs: Raccoon eyes (periorbital ecchymosis), CSF rhinorrhea, Anosmia (CN I palsy).",
                "th": "Anterior Fossa (ฐานกะโหลกหน้า): พาดผ่าน Cribriform plate หรือโพรงอากาศ Frontal/Ethmoid อาการสำคัญ: Raccoon eyes (ขอบตาช้ำเขียวสองข้าง), น้ำเลี้ยงสมองไหลทางจมูก (CSF rhinorrhea), สูญเสียการรับกลิ่น (CN I)"
              },
              {
                "en": "Middle Fossa Fracture: Involves temporal petrous ridge or sphenoid sinus. Clinical signs: Battle's sign (postauricular ecchymosis), CSF otorrhea, hemotympanum, Facial nerve palsy (CN VII) & Hearing loss (CN VIII).",
                "th": "Middle Fossa (ฐานกะโหลกกลาง): พาดผ่านกระดูก Temporal petrous หรือ Sphenoid sinus อาการสำคัญ: Battle's sign (รอยเขียวช้ำหลังใบหู), น้ำเลี้ยงสมองไหลทางหู (CSF otorrhea), เลือดออกหลังแก้วหู (Hemotympanum), อัมพาตใบหน้า (CN VII) และหูหนวก (CN VIII)"
              },
              {
                "en": "Posterior Fossa Fracture: Involves occipital bone, clivus, or foramen magnum. Clinical signs: Lower cranial nerve deficits (CN IX, X, XI, XII), neck pain, posterior fossa epidural hematoma, cerebellar ataxia.",
                "th": "Posterior Fossa (ฐานกะโหลกหลัง): พาดผ่านกระดูก Occipital, Clivus หรือ Foramen magnum อาการสำคัญ: เส้นประสาทสมองส่วนล่างอัมพาต (CN IX-XII), ปวดคอ, เลือดออกเหนือเยื่อหุ้มสมองส่วนหลัง (Posterior fossa EDH), สมองน้อยเสียการทรงตัว"
              }
            ],
            "clinicalSignificance": [
              {
                "en": "Prophylactic Antibiotics Not Indicated: Prophylactic antibiotics do NOT reduce the incidence of meningitis in trauma patients with CSF leaks and are not routinely recommended.",
                "th": "ยาปฏิชีวนะป้องกัน: ไม่แนะนำให้ยาปฏิชีวนะป้องกันทั่วไปในภาวะ CSF leak เนื่องจากไม่ลดอัตราการเกิดโรคเยื่อหุ้มสมองอักเสบ (Meningitis)"
              },
              {
                "en": "Nasal Instrumentation Strict Contraindication: Nasogastric tube (NGT) and nasotracheal intubation are STRICTLY CONTRAINDICATED in anterior skull base fractures due to risk of intracranial passage.",
                "th": "ห้ามใส่อุปกรณ์ทางจมูก: ห้ามใส่สายยางอาหารทางจมูก (NGT) หรือท่อช่วยหายใจทางจมูกเด็ดขาด เพราะสายอาจทะลุเข้าเนื้อสมองผ่านรอยหัก"
              },
              {
                "en": "Carotid Canal Involvement: Middle fossa fractures involving the carotid canal mandate urgent CT Angiography (CTA) to evaluate for carotid artery dissection or pseudoaneurysm.",
                "th": "การตรวจหลอดเลือด: รอยหักที่พาดผ่าน Carotid canal ต้องส่ง CTA สมองฉุกเฉินเพื่อตรวจหาการฉีกขาดหรือหลอดเลือดแดงคาร์โรติดโป่งพอง"
              }
            ]
          },
          "investigations": [
            {
              "name": "High-Resolution Thin-Slice Non-Contrast Head & Skull Base CT",
              "details": {
                "en": "Thin-slice (≤1mm) CT scan with bone window algorithms. Gold standard to identify subtle fracture lines across cribriform plate, petrous temporal bone, and carotid canal.",
                "th": "เอกซเรย์คอมพิวเตอร์ความละเอียดสูง (≤1มม.) หน้าต่างกระดูก เป็นมาตรฐานหลักในการหารอยหักผ่าน Cribriform plate, Petrous bone และ Carotid canal"
              }
            },
            {
              "name": "CT Angiography (CTA) of Head & Neck",
              "details": {
                "en": "Contrast-enhanced CTA. Mandatory if fracture lines cross the carotid canal, petrous temporal bone, or dural sinuses to rule out arterial dissection/pseudoaneurysm.",
                "th": "เอกซเรย์คอมพิวเตอร์ฉีดสีหลอดเลือด จำเป็นอย่างยิ่งเมื่อรอยหักผ่าน Carotid canal หรือ Petrous bone เพื่อตรวจหาการฉีกขาดของหลอดเลือด"
              }
            }
          ],
          "types": [
            {
              "type": "Anterior Fossa",
              "name": {
                "en": "Anterior Cranial Fossa Fracture",
                "th": "กระดูกฐานกะโหลกส่วนหน้าหัก (Anterior Fossa Fracture)"
              },
              "description": {
                "en": "Fracture involving frontal bone orbital roof, cribriform plate, or ethmoid sinus.\nAssociated with CSF rhinorrhea, anosmia (CN I), and periorbital ecchymosis (Raccoon eyes).",
                "th": "รอยหักบริเวณหลังคาเบ้าตา, Cribriform plate หรือโพรงอากาศ Ethmoid\nมักพบ CSF rhinorrhea (น้ำเลี้ยงสมองไหลทางจมูก), การดมกลิ่นผิดปกติ (CN I) และ Raccoon eyes"
              },
              "moi": {
                "en": "Frontal blunt head impact.",
                "th": "แรงกระแทกตรงบริเวณหน้าผาก"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Fracture involving the frontal sinus, orbital roof, or cribriform plate; nasogastric tubes and nasal intubation are strictly contraindicated; conservative head elevation and avoidance of straining achieves spontaneous dural seal in >85% of CSF leaks within 7–10 days; surgical dural repair is indicated for persistent CSF rhinorrhea (>10–14 days), recurrent meningitis, or tension pneumocephalus.",
                  "th": "รอยหักฐานกะโหลกส่วนหน้าพาดผ่าน Frontal sinus, หลังคาเบ้าตา หรือ Cribriform plate; ห้ามใส่สายให้อาหารทางจมูก (NGT) หรือท่อช่วยหายใจทางจมูกเด็ดขาด; การรักษาแบบไม่ผ่าตัดโดยนอนยกศีรษะสูงและห้ามเบ่ง ช่วยให้เยื่อหุ้มสมองประสานปิด CSF Leak ได้เอง >85% ภายใน 7–10 วัน; การผ่าตัดซ่อมเยื่อหุ้มสมองมีข้อบ่งชี้เมื่อน้ำเลี้ยงสมองไหลไม่หยุดเกิน 10–14 วัน, เป็นเยื่อหุ้มสมองอักเสบซ้ำ หรือมีลมดันในกะโหลกศีรษะ"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Acute post-traumatic CSF rhinorrhea <7–10 days duration\n• Non-displaced anterior cranial fossa fractures without mass effect, brain herniation, or persistent tension pneumocephalus",
                    "th": "• น้ำเลี้ยงสมองไหลออกทางจมูก (CSF Rhinorrhea) ฉุกเฉินไม่เกิน 7–10 วัน\n• ฐานกะโหลกส่วนหน้าหักชนิดไม่เคลื่อนตัว ไม่มีก้อนเลือดกดสมอง หรือไม่มีลมดันในกะโหลกศีรษะ"
                  },
                  "method": {
                    "en": "• Strict bed rest with head-of-bed elevation at 30°–45° to reduce CSF hydrostatic pressure; avoid coughing, nose-blowing, sneezes, and Valsalva straining (prescribe stool softeners and antiemetics); prophylactic antibiotics are NOT recommended",
                    "th": "• นอนพักบนเตียงยกศีรษะสูง 30°–45° เพื่อลดความดันน้ำเลี้ยงสมอง; ห้ามสั่งน้ำมูก ไอ จาม หรือเบ่ง (ให้ยาระบายและยาแก้อาเจียน); ไม่แนะนำให้ยาปฏิชีวนะป้องกัน"
                  },
                  "rehabilitation": {
                    "en": "• Gradual mobilization once CSF rhinorrhea has completely ceased for 48 consecutive hours; avoid vigorous physical exertion for 6 weeks",
                    "th": "• ค่อยๆ ลุกเดินเมื่อน้ำเลี้ยงสมองหยุดไหลสนิทต่อเนื่องเกิน 48 ชั่วโมง; งดออกกำลังกายหนัก 6 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Blind insertion of a nasogastric tube (NGT) puncturing through the cribriform plate into the frontal lobe\n• Routine prophylactic antibiotic use selecting for drug-resistant bacterial meningitis",
                    "th": "• ใส่สายยางให้อาหารทางจมูก (NGT) จนสายแทงทะลุฐานกะโหลก Cribriform plate เข้าเนื้อสมอง\n• ให้ยาปฏิชีวนะป้องกันโดยไม่จำเป็นจนเกิดเชื้อดื้อยา"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Persistent CSF rhinorrhea lasting >10–14 days despite conservative measures\n• Recurrent post-traumatic bacterial meningitis\n• Tension pneumocephalus with midline shift or brain herniation through cribriform defect\n• Depressed anterior skull base fractures or frontal sinus posterior wall comminution (>1 table width displacement)",
                    "th": "• น้ำเลี้ยงสมองไหลออกทางจมูกไม่หยุดนานเกิน 10–14 วัน\n• เกิดภาวะเยื่อหุ้มสมองอักเสบจากการติดเชื้อแบคทีเรียซ้ำ\n• มีลมดันในกะโหลกศีรษะ (Tension Pneumocephalus) ดันสมองเลื่อน\n• ผนังหลังของ Frontal sinus แตกยุบตัวมากเกิน 1 เท่าของความหนากระดูก"
                  },
                  "method": {
                    "en": "• Endoscopic Endonasal Dural Repair: Transnasal approach using vascularized mucosal flaps (Hadad-Bassagasteguy flap), fascia lata, or fat graft with fibrin glue for cribriform/sphenoid leaks\n• Open Bifrontal Craniotomy: Subfrontal approach, cranialization of frontal sinus, pericranial flap dural reconstruction, and anterior fossa floor repair for large comminuted defects",
                    "th": "• ผ่าตัดซ่อมเยื่อหุ้มสมองผ่านกล้องส่องทางจมูก (Endoscopic Endonasal Repair): ใช้แผ่นเยื่อบุจมูก Hadad Flap ร่วมกับแผ่นพังผืด Fascia Lata หรือเนื้อเยื่อไขมันและ Fibrin Glue ปิดรูรั่วบริเวณ Cribriform/Sphenoid\n• ผ่าตัดเปิดกะโหลกศีรษะส่วนหน้า (Bifrontal Craniotomy): ขูดทำลายโพรง Frontal sinus (Cranialization), ปูแผ่นเยื่อหุ้มกะโหลก (Pericranial flap) ซ่อมแซมเยื่อหุ้มสมองที่ฉีกขาดขนาดใหญ่"
                  },
                  "rehabilitation": {
                    "en": "• Temporary lumbar drain (10–15 mL/hr for 3–5 days) to facilitate graft adherence; avoid nasal blowing for 8 weeks",
                    "th": "• ใส่สายระบายน้ำไขสันหลังทางบั้นเอว (Lumbar drain 10–15 มล./ชม. 3–5 วัน) เพื่อช่วยให้เนื้อเยื่อปลูกติดแน่น; ห้ามสั่งน้ำมูก 8 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Inadequate graft sealing leaving a persistent occult fistula leading to late intracranial abscess",
                    "th": "• ปิดรูรั่วไม่สนิท ทำให้มีทางเชื่อมต่อเรื้อรังและเกิดฝีในสมองในภายหลัง"
                  }
                }
              },
              "illustrationId": "",
              "xrayDescription": {
                "en": "Fracture line crossing frontal sinus or cribriform plate on CT bone windows; pneumocephalus may be present.",
                "th": "เห็นรอยหักพาดผ่าน Frontal sinus หรือ Cribriform plate ใน CT bone window อาจพบลมในกะโหลกศีรษะ"
              }
            },
            {
              "type": "Middle Fossa",
              "name": {
                "en": "Middle Cranial Fossa Fracture (Temporal Petrous Bone)",
                "th": "กระดูกฐานกะโหลกส่วนกลางหัก (Middle Fossa / Petrous Fracture)"
              },
              "description": {
                "en": "Fracture traversing temporal bone petrous ridge, sphenoid bone, or carotid canal.\nAssociated with Battle's sign, CSF otorrhea, hemotympanum, CN VII (facial motor) and CN VIII (vestibulocochlear) injuries.",
                "th": "รอยหักพาดผ่านกระดูก Temporal petrous ridge, Sphenoid หรือ Carotid canal\nมักพบ Battle's sign (ช้ำหลังหู), CSF otorrhea (น้ำเลี้ยงสมองไหลทางหู), เลือดออกหลังแก้วหู และการบาดเจ็บของ CN VII/VIII"
              },
              "moi": {
                "en": "Lateral temporal or parietal head impact.",
                "th": "แรงกระแทกเข้าที่ด้านข้างศีรษะหรือบริเวณกกหู"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Fracture traversing the petrous temporal bone, tegmen tympani, or carotid canal; mandatory screening CTA to rule out internal carotid artery dissection/pseudoaneurysm; non-operative conservative management with head elevation resolves >90% of CSF otorrhea within 7 days; immediate total facial nerve paralysis (CN VII) warrants urgent surgical decompression, while delayed palsy responds to high-dose corticosteroids.",
                  "th": "รอยหักฐานกะโหลกส่วนกลางพาดผ่านกระดูก Petrous temporal, Tegmen tympani หรือ Carotid canal; ต้องส่ง CTA หลอดเลือดสมองเพื่อคัดกรองการฉีกขาดของหลอดเลือดแดง Carotid เสมอ; การรักษาแบบไม่ผ่าตัดโดยนอนยกศีรษะสูงช่วยให้น้ำเลี้ยงสมองไหลทางหู (CSF Otorrhea) หยุดได้เอง >90% ใน 7 วัน; อัมพาตใบหน้าครึ่งซีก (CN VII) ทันทีหลังบาดเจ็บต้องผ่าตัดคลายการกดทับด่วน ส่วนอาการที่ค่อยๆ เกิดในภายหลังรักษาด้วยยาสเตียรอยด์"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Acute traumatic CSF otorrhea or hemotympanum\n• Delayed-onset incomplete facial nerve weakness (CN VII)\n• Petrous temporal fractures without vascular injury or persistent fistula",
                    "th": "• น้ำเลี้ยงสมองไหลออกทางหู (CSF Otorrhea) หรือเลือดออกหลังแก้วหู\n• หน้าเบี้ยวครึ่งซีกที่ค่อยๆ เป็นขึ้นภายหลัง (Delayed CN VII Palsy)\n• กระดูก Petrous หักโดยไม่มีการบาดเจ็บของหลอดเลือด"
                  },
                  "method": {
                    "en": "• Head elevation at 30°–45°, sterile ear dressing (avoid ear canal packing/irrigation); high-dose corticosteroid taper (Prednisone 1 mg/kg/day for 10–14 days) for delayed CN VII palsy; temporary lumbar CSF drainage if otorrhea continues past 5 days",
                    "th": "• นอนยกศีรษะสูง 30°–45°, ปิดผ้าก๊อซปลอดเชื้อที่ใบหู (ห้ามยัดสำลีหรือล้างรูหู); ให้ยาสเตียรอยด์ขนาดสูง (Prednisone 1 มก./กก./วัน 10–14 วัน) สำหรับหน้าเบี้ยวที่เกิดตามมา; พิจารณาใส่สายระบายน้ำไขสันหลัง (Lumbar drain) หากน้ำไหลเกิน 5 วัน"
                  },
                  "rehabilitation": {
                    "en": "• Audiology evaluation and vestibular physical therapy for post-traumatic vertigo/hearing loss; facial nerve physical therapy",
                    "th": "• ตรวจวัดการได้ยินและทำกายภาพบำบัดฟื้นฟูการทรงตัว (Vestibular Rehab) สำหรับอาการเวียนศีรษะ; ฝึกบริหารกล้ามเนื้อใบหน้า"
                  },
                  "pitfalls": {
                    "en": "• Packing the external auditory canal obstructing CSF flow, leading to tension pneumocephalus or ascending meningitis\n• Missing an associated internal carotid artery dissection on routine CT (CTA is mandatory)",
                    "th": "• อุดอัดสำลีในรูหูขัดขวางการระบายของน้ำเลี้ยงสมอง จนเกิดการติดเชื้อลุกลามเข้าเยื่อหุ้มสมอง\n• มองข้ามการฉีกขาดของหลอดเลือดแดง Carotid จากภาพ CT ธรรมดา (ต้องส่ง CTA เสมอ)"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Immediate complete facial nerve paralysis (House-Brackmann VI) with disrupted fallopian canal on high-resolution CT\n• Persistent CSF otorrhea or middle ear fistula lasting >10–14 days\n• Internal carotid artery pseudoaneurysm, dissection with flow compromise, or traumatic carotid-cavernous fistula (CCF)",
                    "th": "• หน้าเบี้ยวอัมพาตครึ่งซีกสมบูรณ์ทันทีหลังเกิดเหตุ (House-Brackmann Grade VI) ร่วมกับเห็นท่อ Fallopian canal แตกกดทับเส้นประสาท\n• น้ำเลี้ยงสมองไหลออกทางหูไม่หยุดนานเกิน 10–14 วัน\n• หลอดเลือดแดง Carotid ฉีกขาด โป่งพอง หรือเกิดเส้นเลือดลัดวงจร Carotid-Cavernous Fistula (CCF)"
                  },
                  "method": {
                    "en": "• Facial Nerve Decompression: Middle cranial fossa or transmastoid approach to decompress the labyrinthine and tympanic segments of CN VII with nerve sheath neurolysis ± cable autograft (greater auricular nerve)\n• CSF Otorrhea Closure: Transmastoid or middle fossa craniotomy with obliteration of tegmen tympani defect using fascia, bone pate, and fibrin glue\n• Endovascular Intervention: Endovascular stenting or coil embolization for internal carotid injury / CCF",
                    "th": "• ผ่าตัดคลายการกดทับเส้นประสาทใบหน้า (Facial Nerve Decompression): เปิดทาง Middle cranial fossa หรือ Transmastoid ขูดเปิดท่อกระดูกคลายการกดทับเส้นประสาทสมองคู่ที่ 7 ± ผ่าตัดต่อเส้นประสาท (Nerve Graft)\n• ผ่าตัดปิดรูรั่วน้ำเลี้ยงสมอง: ผ่าตัดเปิด Transmastoid หรือกะโหลกส่วนกลาง ปิดอุดรูรั่ว Tegmen tympani ด้วยพังผืด ผงกระดูก และ Fibrin Glue\n• รังสีร่วมรักษาหลอดเลือด (Endovascular): ใส่ขดลวด (Stent) หรือขดสปริง (Coil) รักษาหลอดเลือด Carotid ฉีกขาดหรือ CCF"
                  },
                  "rehabilitation": {
                    "en": "• Eye protection protocol (artificial tears, moisture chamber, nocturnal eye taping) to prevent exposure keratitis while CN VII recovers",
                    "th": "• โปรแกรมปกป้องดวงตา (หยอดน้ำตาเทียม ปิดครอบกระจกตา และปิดตาตอนนอน) เพื่อป้องกันกระจกตาเป็นแผลอักเสบระหว่างรอเส้นประสาทคู่ที่ 7 ฟื้นตัว"
                  },
                  "pitfalls": {
                    "en": "• Delaying facial nerve exploration beyond 2–3 weeks in immediate total transections leading to irreversible muscle atrophy and synkinesis",
                    "th": "• ผ่าตัดคลายการกดทับเส้นประสาทใบหน้าล่าช้าเกิน 2–3 สัปดาห์ในรายที่เส้นประสาทถูกตัดขาด ทำให้กล้ามเนื้อใบหน้าฝ่อถาวร"
                  }
                }
              },
              "illustrationId": "",
              "xrayDescription": {
                "en": "Longitudinal or transverse fracture line traversing petrous temporal bone and middle ear cavity.",
                "th": "เห็นรอยหักตามยาวหรือตามขวางพาดผ่าน Petrous temporal bone และช่องหูชั้นกลาง"
              }
            },
            {
              "type": "Posterior Fossa",
              "name": {
                "en": "Posterior Cranial Fossa Fracture",
                "th": "กระดูกฐานกะโหลกส่วนหลังหัก (Posterior Fossa Fracture)"
              },
              "description": {
                "en": "Fracture involving occipital bone, clivus, or foramen magnum.\nAssociated with lower cranial nerve palsies (CN IX-XII), posterior fossa epidural hematoma risk, and cervical spine injury.",
                "th": "รอยหักบริเวณกระดูก Occipital, Clivus หรือ Foramen magnum\nมักพบการบาดเจ็บของเส้นประสาทสมองส่วนล่าง (CN IX-XII), เสี่ยงต่อเลือดออกเหนือเยื่อหุ้มสมองส่วนหลัง และกระดูกคอหักร่วม"
              },
              "moi": {
                "en": "Occipital impact or severe axial spinal impact.",
                "th": "แรงกระแทกบริเวณท้ายทอยหรือแรงกระแทกตามแนวแกนอย่างรุนแรง"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Fracture involving occipital squama, condyles, clivus, or foramen magnum; high association with posterior fossa epidural hematomas (EDH), dural sinus thrombosis, lower cranial nerve palsies (CN IX–XII), and upper cervical spine injuries; non-operative observation and cervical collar bracing is standard for non-displaced fractures without hematoma; emergency suboccipital decompressive craniectomy is mandatory for posterior fossa mass effect, brainstem compression, or acute hydrocephalus.",
                  "th": "รอยหักฐานกะโหลกส่วนหลังครอบคลุมกระดูกท้ายทอย, Occipital condyles, Clivus หรือ Foramen magnum; สัมพันธ์อย่างยิ่งกับก้อนเลือดออกเหนือเยื่อหุ้มสมองส่วนหลัง (Posterior fossa EDH), ลิ่มเลือดในโพรงหลอดเลือดดำสมอง, เส้นประสาทสมองส่วนล่างอัมพาต (CN IX–XII) และกระดูกคอหักร่วม; การรักษาแบบไม่ผ่าตัดโดยสังเกตอาการและใส่เฝือกคอเป็นมาตรฐานในรอยหักที่ไม่เคลื่อนตัว; การผ่าตัดเปิดกะโหลกท้ายทอยฉุกเฉิน (Suboccipital Craniectomy) มีความจำเป็นด่วนที่สุดหากมีก้อนเลือดกดก้านสมอง สมองน้อย หรือเกิดภาวะสมองบวมน้ำเฉียบพลัน"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Non-displaced occipital or clival fractures without mass lesion, midline shift, or 4th ventricle effacement\n• Type I/II occipital condyle fractures (Anderson-Montesano) without craniocervical instability",
                    "th": "• กระดูกท้ายทอยหรือ Clivus หักชนิดไม่เคลื่อนตัว ไม่มีก้อนเลือดกดทับ หรือช่องสมองที่ 4 ไม่ถูกเบียดแคบ\n• กระดูก Occipital Condyle หักชนิด Type I/II โดยข้อต่อกะโหลก-กระดูกคอยังมั่นคง"
                  },
                  "method": {
                    "en": "• ICU monitoring with serial neurological exams and follow-up head CT at 6–12 hours to rule out expanding posterior fossa hematoma; rigid cervical collar (Miami J) for 6–8 weeks for condyle fractures",
                    "th": "• นอนเฝ้าระวังใน ICU พร้อมตรวจระบบประสาทและเอกซเรย์ CT ซ้ำที่ 6–12 ชั่วโมงเพื่อตรวจหาก้อนเลือดขยายตัว; ใส่เฝือกคอแข็ง (Miami J) นาน 6–8 สัปดาห์สำหรับรอยหัก Occipital Condyle"
                  },
                  "rehabilitation": {
                    "en": "• Wean collar after 6–8 weeks upon CT confirmation of bony stability; speech and swallowing therapy if transient lower cranial nerve palsy exists",
                    "th": "• ปลดเฝือกคอหลัง 6–8 สัปดาห์เมื่อ CT ยืนยันกระดูกติดมั่นคง; ฝึกกลืนและฝึกพูดหากมีอาการเส้นประสาทสมองส่วนล่างผิดปกติชั่วคราว"
                  },
                  "pitfalls": {
                    "en": "• Rapid unexpected clinical deterioration due to an expanding posterior fossa epidural hematoma in a non-compliant patient\n• Missing concomitant atlanto-occipital dislocation (AOD) or C1–C2 fractures",
                    "th": "• ผู้ป่วยทรุดลงอย่างรวดเร็วจนโคม่าเนื่องจากก้อนเลือดท้ายทอยขยายตัวกดก้านสมอง\n• มองข้ามภาวะข้อต่อกะโหลกและกระดูกคอหลุด (Atlanto-occipital dislocation) หรือกระดูกคอ C1-C2 หักร่วม"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Posterior fossa epidural or subdural hematoma causing brainstem compression, 4th ventricle effacement, or acute obstructive hydrocephalus\n• Unstable Type III occipital condyle avulsion fractures with craniocervical junction instability\n• Comminuted depressed posterior fossa fractures with transverse/sigmoid sinus compression",
                    "th": "• ก้อนเลือด Posterior fossa EDH หรือ SDH กดเบียดก้านสมอง, ช่องสมองที่ 4 ตีบตัน หรือเกิดภาวะสมองบวมน้ำอุดกั้นเฉียบพลัน\n• กระดูก Occipital Condyle หักกระชาก Type III ที่ทำให้ข้อต่อกะโหลก-กระดูกคอไม่มั่นคง\n• กระดูกท้ายทอยแตกยุบตัวกดทับโพรงหลอดเลือดดำ Transverse/Sigmoid Sinus"
                  },
                  "method": {
                    "en": "• Emergency Suboccipital Decompressive Craniectomy: Suboccipital craniectomy with foramen magnum opening, evacuation of hematoma, and duraplasty ± external ventricular drain (EVD) for hydrocephalus\n• Occipitocervical Instrumented Fusion (O-C2/C3): Rigid plate/screw-rod fixation from occiput to upper cervical spine for craniocervical junction instability",
                    "th": "• ผ่าตัดเปิดกะโหลกท้ายทอยคลายการกดทับฉุกเฉิน (Suboccipital Craniectomy): เปิดกะโหลกท้ายทอยและขอบ Foramen magnum, ดูดระบายก้อนเลือดออก, และเย็บขยายเยื่อหุ้มสมอง ± ใส่สายระบายน้ำในโพรงสมอง (EVD)\n• ผ่าตัดดามยึดข้อต่อกะโหลกและกระดูกคอ (Occipitocervical Fusion O-C2/C3): ดามสกรูและแท่ง Rod ยึดจากท้ายทอยลงมาที่กระดูกคอส่วนบนสำหรับข้อต่อกะโหลกหลวมไม่มั่นคง"
                  },
                  "rehabilitation": {
                    "en": "• Intensive neurological neuro-rehabilitation; long-term tracheostomy care and swallowing therapy if lower cranial nerve palsies persist",
                    "th": "• โปรแกรมฟื้นฟูสมรรถภาพทางระบบประสาทอย่างเข้มข้น; ดูแลท่อเจาะคอและฝึกกลืนหากมีปัญหาการกลืนเรื้อรัง"
                  },
                  "pitfalls": {
                    "en": "• Fatal brainstem herniation through foramen magnum if surgery is delayed\n• Massive hemorrhage from lacerated transverse or sigmoid sinus during bone removal",
                    "th": "• ก้านสมองถูกกดเลื่อนลงรู Foramen magnum จนเสียชีวิตหากผ่าตัดล่าช้า\n• เลือดออกรุนแรงจากโพรงหลอดเลือดดำ Transverse/Sigmoid Sinus ฉีกขาดขณะกรอกระดูก"
                  }
                }
              },
              "illustrationId": "",
              "xrayDescription": {
                "en": "Fracture line extending through occipital squama towards foramen magnum or clivus.",
                "th": "เห็นรอยหักพาดจากกระดูกท้ายทอยมุ่งสู่ Foramen magnum หรือ Clivus"
              }
            }
          ]
        }
      ]
    }
  ]
};
