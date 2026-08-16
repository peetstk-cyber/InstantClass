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
                "preferred": "operative",
                "conservative": {
                  "en": "Minimally displaced stable patterns: Soft diet and maxillomandibular fixation (MMF) for 4-6 weeks.",
                  "th": "กรณีไม่เคลื่อนตัว: รับประทานอาหารเหลวอ่อนและสบฟันด้วย MMF 4-6 สัปดาห์"
                },
                "operative": {
                  "en": "RECOMMENDED FOR DISPLACED FRACTURES. Open reduction and internal fixation (ORIF) with miniplates along nasomaxillary and zygomaticomaxillary buttresses.",
                  "th": "แนะนำผ่าตัด ORIF ยึดด้วยแผ่น Miniplate บริเวณ Nasomaxillary และ Zygomaticomaxillary buttresses"
                }
              },
              "illustrationId": "/images/head/lefort_1.png",
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
                "preferred": "operative",
                "conservative": {
                  "en": "Rarely indicated; reserved for non-displaced injuries.",
                  "th": "ใช้เฉพาะกรณีรอยหักไม่เคลื่อนตัวเท่านั้น"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. ORIF of inferior orbital rims, nasofrontal junction, and zygomaticomaxillary buttresses.",
                  "th": "แนะนำผ่าตัด ORIF ยึดขอบเบ้าตาล่าง, Nasofrontal junction และ Zygomaticomaxillary buttress"
                }
              },
              "illustrationId": "/images/head/lefort_2.png",
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
                "preferred": "operative",
                "conservative": {
                  "en": "Not indicated due to massive facial collapse and airway compromise.",
                  "th": "ไม่มีข้อบ่งชี้เนื่องจากใบหน้ายุบตัวรุนแรงและทางเดินหายใจถูกอุดกั้น"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. Complex ORIF re-attaching facial skeleton to cranial base at zygomaticofrontal sutures, zygomatic arches, and nasofrontal junction.",
                  "th": "แนะนำผ่าตัดใหญ่ ORIF ยึดโครงกระดูกใบหน้ากลับเข้ากับฐานกะโหลกที่ Zygomaticofrontal suture, Zygomatic arch และ Nasofrontal junction"
                }
              },
              "illustrationId": "/images/head/lefort_3.png",
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
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED FOR UNCOMPLICATED CSF LEAKS. Bed rest, head elevation (30°), avoiding nose blowing/straining. 85% resolve spontaneously within 7-10 days.",
                  "th": "แนะนำรักษาไม่ผ่าตัดในเคสไม่มีภาวะแทรกซ้อน นอนพักยกศีรษะสูง 30 องศา ห้ามสั่งมูก 85% หายได้เองใน 7-10 วัน"
                },
                "operative": {
                  "en": "Indicated for persistent CSF leakage (>10-14 days), persistent pneumocephalus, or extensive anterior dural tear. Endoscopic transnasal or open craniotomy dural repair.",
                  "th": "ผ่าตัดเมื่อ CSF leak ไม่หยุดเกิน 10-14 วัน มีลมในสมองไม่หาย หรือเยื่อหุ้มสมองฉีกขาดใหญ่ โดยซ่อมเยื่อหุ้มสมองผ่านกล้องหรือเปิดกะโหลก"
                }
              },
              "illustrationId": "/images/head/anterior_fossa.png",
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
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED TREATMENT FOR MOST PATIENTS. Observation, lumbar drain if CSF otorrhea persists, and serial neurological monitoring.",
                  "th": "แนะนำรักษาแบบไม่ผ่าตัดเป็นหลัก สังเกตอาการ อาจใส่ Lumbar drain หาก CSF otorrhea ไม่หยุด"
                },
                "operative": {
                  "en": "Indicated for immediate total facial nerve paralysis (exploration & decompression), vascular disruption, or persistent CSF fistula. Facial nerve decompression or endovascular embolization/stenting.",
                  "th": "ผ่าตัดเมื่อเกิดหน้าเบี้ยวอัมพาตทันทีหลังอุบัติเหตุ (Facial nerve decompression) หรือหลอดเลือด carotid มีปัญหา"
                }
              },
              "illustrationId": "/images/head/middle_fossa.png",
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
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED FOR NON-DISPLACED FRACTURES WITHOUT HEMATOMA. Conservative monitoring, analgesia, and neck collar immobilization.",
                  "th": "แนะนำรักษาแบบไม่ผ่าตัดหากไม่มีก้อนเลือดกดทับ ใส่เฝือกคอและเฝ้าระวังอาการ"
                },
                "operative": {
                  "en": "Indicated for posterior fossa epidural hematoma causing brainstem/cerebellar compression or hydrocephalus. Emergency suboccipital craniectomy.",
                  "th": "ผ่าตัดฉุกเฉินเมื่อมีก้อนเลือด Posterior fossa EDH กดก้านสมอง/สมองน้อย หรือสมองบวมน้ำ (Suboccipital craniectomy)"
                }
              },
              "illustrationId": "/images/head/posterior_fossa.png",
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
