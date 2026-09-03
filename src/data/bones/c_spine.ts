import type { BoneData } from "../../types";

export const cSpineBone: BoneData = {
  "id": "c-spine",
  "name": {
    "en": "C-Spine",
    "th": "กระดูกสันหลังส่วนคอ"
  },
  "description": {
    "en": "Cervical Spine (C1-C7)",
    "th": "กระดูกสันหลังส่วนคอ (C1-C7)"
  },
  "pediatric": false,
  "regions": [
    {
      "id": "upper-cervical",
      "name": {
        "en": "Upper Cervical Spine (C1–C2)",
        "th": "กระดูกสันหลังคอส่วนบน (C1–C2)"
      },
      "regionConcept": {
        "physicalExam": [
          {
            "sign": "Canadian C-Spine Rule & NEXUS Criteria",
            "positive": {
              "en": "Midline cervical tenderness, focal neurological deficit, high-risk mechanism = Mandatory C-Spine Imaging",
              "th": "กดเจ็บบริเวณกระดูกคอกลางลำตัว มีอาการทางระบบประสาท หรือเกิดอุบัติเหตุพลังงานสูง = ต้องถ่ายภาพรังสี C-Spine"
            }
          },
          {
            "sign": "C1-C2 Open Mouth View Assessment",
            "positive": {
              "en": "Combined lateral overhang of C1 masses > 7mm = Transverse Ligament Rupture (Spence's Rule)",
              "th": "ระยะยื่นขอบข้างของ C1 mass รวม > 7มม. = เส้นเอ็น Transverse Ligament ฉีกขาด (Spence Rule)"
            }
          }
        ],
        "redFlags": [
          {
            "en": "Cervical Cord Injury (Tetraplegia, Neurogenic Shock with bradycardia & hypotension)",
            "th": "ภาวะบาดเจ็บไขสันหลังคอ (อัมพาตสี่แผลม, ภาวะช็อกทางระบบประสาท หัวใจเต้นช้าและความดันตก)"
          },
          {
            "en": "Vertebral Artery Dissection (Posterior circulation stroke, Wallenberg syndrome)",
            "th": "การฉีกขาดของหลอดเลือด Vertebral Artery (เสี่ยงหลอดเลือดสมองอุดตัน)"
          }
        ],
        "clinicalPearls": [
          {
            "en": "Odontoid Type II fracture has a high nonunion rate (>30%) due to watershed blood supply and usually requires ORIF screw or Halo vest.",
            "th": "Odontoid Type II มีอัตรากระดูกไม่ติดสูง (>30%) เนื่องจากเลือดมาเลี้ยงน้อย แนะนำผ่าตัดยึดสกรูหรือใส่ Halo vest"
          }
        ]
      },
      "classifications": [
        {
          "system": "Jefferson C1",
          "fullName": {
            "en": "Jefferson Fracture Classification for C1 Atlas (Landells System)",
            "th": "การจำแนกกระดูกคอ C1 Atlas หักแตก (Jefferson Fracture / Landells Classification)"
          },
          "description": {
            "en": "Classification of C1 atlas fractures (Type I Single arch, Type II Classic Jefferson burst fracture, Type III Lateral mass). Evaluated using the Rule of Spence to determine Transverse Atlanto-Axial Ligament (TAL) integrity.",
            "th": "ระบบจำแนกกระดูกคอ C1 (Atlas) หัก แบ่งเป็น Type I (วงโค้งหักจุดเดียว), Type II (Burst fracture วงโค้งหน้าและหลังหักแตก - Classic Jefferson) และ Type III (มวลกระดูกด้านข้างหัก) โดยใช้กฎ Rule of Spence ประเมินเอ็นยึด Transverse Ligament (TAL)"
          },
          "concept": {
            "title": {
              "en": "Jefferson C1 Burst Fracture Clinical Concept",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ Jefferson C1 Classification"
            },
            "corePrinciple": {
              "en": "Evaluates C1 (Atlas) ring fractures caused by axial loading, where stability depends primarily on the integrity of the Transverse Atlanto-Axial Ligament (TAL).",
              "th": "ประเมินกระดูกคอ C1 (Atlas) หักจากแรงอัดตามแกนยาว โดยความมั่นคงขึ้นอยู่กับความสมบูรณ์ของเอ็นยึด Transverse Ligament (TAL) เป็นสำคัญ"
            },
            "rules": [
              {
                "en": "Spence's Rule (Open-Mouth Peg View): Sum of C1 lateral mass overhang relative to C2 > 6.9 mm indicates TAL rupture -> UNSTABLE.",
                "th": "Rule of Spence (X-ray อ้าปาก): ผลรวมระยะยื่นเกยของ C1 lateral mass > 6.9 มม. บ่งชี้ว่าเอ็น TAL ขาด -> ไม่มั่นคง"
              },
              {
                "en": "Spence's Rule: Sum of C1 lateral mass overhang ≤ 6.9 mm indicates TAL intact -> STABLE.",
                "th": "Rule of Spence: ผลรวมระยะยื่นเกย ≤ 6.9 มม. บ่งชี้ว่าเอ็น TAL สมบูรณ์ -> มั่นคง"
              },
              {
                "en": "MRI Cut-off: Direct T2/STIR visualization of TAL disruption confirms instability regardless of overhang measurement.",
                "th": "เกณฑ์ MRI: การพบเอ็น TAL ขาดหลุดในภาพ MRI T2/STIR ถือว่าไม่มั่นคงทันที"
              }
            ],
            "clinicalSignificance": [
              {
                "en": "Stable patterns (TAL intact): Managed conservatively with a Rigid Cervical Collar for 6–8 weeks with high union rates.",
                "th": "รอยหักแบบมั่นคง (TAL สมบูรณ์): รักษาแบบไม่ผ่าตัดโดยใส่เฝือกคอชนิดแข็ง (Rigid Collar) 6–8 สัปดาห์"
              },
              {
                "en": "Unstable patterns (TAL disrupted): Requires operative C1–C2 posterior instrumented fusion or rigid Halo-vest immobilization for 8–12 weeks.",
                "th": "รอยหักแบบไม่มั่นคง (TAL ขาด): แนะนำผ่าตัดดามยึดกระดูก C1–C2 ด้านหลัง หรือใส่ Halo-vest 8–12 สัปดาห์"
              },
              {
                "en": "Clinical Pitfall: Spence's rule on X-ray can underestimate TAL rupture by 20% due to magnification error; obtain CT/MRI. Always evaluate for concomitant C2 fractures (present in up to 40%).",
                "th": "ข้อควรระวัง: Rule of Spence บน X-ray อาจประเมินต่ำกว่าจริง 20% จากการขยายภาพ ควรส่ง CT/MRI และต้องตรวจหากระดูก C2 หักร่วมเสมอ (พบร่วมถึง 40%)"
              }
            ]
          },
          "investigations": [
            {
              "name": "Open-Mouth Odontoid AP Radiograph (Peg View)",
              "details": {
                "en": "Open-mouth AP view. Measures lateral overhang of C1 lateral masses relative to C2 (Rule of Spence: Sum of overhang > 6.9 mm indicates TAL rupture and instability).",
                "th": "ภาพเอกซเรย์อ้าปาก (Open-mouth view) วัดระยะยื่นเกยออกด้านข้างของ C1 lateral mass (กฎ Rule of Spence: ผลรวมระยะยื่น > 6.9 มม. แสดงว่าเอ็น TAL ขาดหลุด - ไม่มั่นคง)"
              },
              "imageUrl": "/images/investigations/cspine/open_mouth_peg_view.jpg"
            },
            {
              "name": "Lateral Cervical Spine Radiograph",
              "details": {
                "en": "Lateral C-spine view. Evaluates Atlanto-Dental Interval (ADI: normal ≤3mm in adults, >3mm indicates TAL disruption).",
                "th": "ภาพเอกซเรย์คอด้านข้าง วัดระยะช่องว่าง Atlanto-Dental Interval (ADI ปกติ ≤3มม., หาก >3มม. แสดงถึงเอ็น TAL ฉีกขาด)"
              },
              "imageUrl": "/images/investigations/cspine/lateral_cspine_view.jpg"
            },
            {
              "name": "Thin-Slice CT Scan of C1-C2 with 3D Reconstruction",
              "details": {
                "en": "High-resolution 3D CT scan. Gold standard to map fracture lines in anterior and posterior arches and quantify lateral mass overhang.",
                "th": "เอกซเรย์คอมพิวเตอร์ 3D ความละเอียดสูง เป็นมาตรฐานหลักในการบอกจุดหักบนวงโค้งหน้า-หลัง และวัดระยะเคลื่อนเกย"
              }
            },
            {
              "name": "MRI Cervical Spine (T2/STIR)",
              "details": {
                "en": "Cervical spine MRI. Mandatory to directly evaluate Transverse Atlanto-Axial Ligament (TAL) disruption and spinal cord compression.",
                "th": "เอกซเรย์คลื่นแม่เหล็กไฟฟ้า (MRI) จำเป็นอย่างยิ่งในการตรวจความสมบูรณ์ของเส้นเอ็น Transverse Ligament (TAL) และไขสันหลัง"
              }
            }
          ],
          "types": [
            {
              "type": "Landells I",
              "name": {
                "en": "Landells Type I (Single Arch C1 Fracture - STABLE)",
                "th": "Landells Type I (วงโค้งหน้าหรือหลังหักจุดเดียว - มั่นคง)"
              },
              "description": {
                "en": "Fracture involving only the anterior arch OR posterior arch of C1 atlas\nIntact Transverse Atlanto-Axial Ligament (TAL)\nStable injury pattern with excellent prognosis",
                "th": "รอยหักเฉพาะบริเวณวงโค้งด้านหน้า **หรือ** ด้านหลังของกระดูกคอ C1 เพียงจุดเดียว\nเส้นเอ็น Transverse Ligament (TAL) ยังคง **สมบูรณ์ปกติ**\nมีความมั่นคงสูง ผลการรักษาดีเยี่ยม"
              },
              "moi": {
                "en": "Hyperextension with axial loading.",
                "th": "การแหงนคอไปด้านหลังร่วมกับแรงกดอัดตามแนวแกน"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Isolated fracture of anterior or posterior arch only; Transverse Atlanto-Axial Ligament (TAL) is completely intact (Rule of Spence overhang = 0 mm); mechanically stable ring; non-operative immobilization in a rigid cervical collar yields >98% union rate.",
                  "th": "รอยหักเฉพาะส่วนวงโค้งหน้าหรือหลังเพียงจุดเดียว เอ็น Transverse Ligament (TAL) สมบูรณ์ 100% (ระยะเกย Rule of Spence = 0 มม.) โครงสร้างวงแหวน C1 ยังมั่นคง รักษาแบบไม่ผ่าตัดโดยใส่เฝือกคอชนิดแข็ง (Rigid Collar) ให้ผลกระดูกเชื่อมติด >98%"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Isolated anterior arch or posterior arch fracture with intact Transverse Atlanto-Axial Ligament (TAL)",
                    "th": "• รอยหักเฉพาะวงโค้งด้านหน้าหรือด้านหลังของ C1 โดยเอ็น Transverse Ligament (TAL) สมบูรณ์"
                  },
                  "method": {
                    "en": "• Rigid cervical orthosis (Miami J or Aspen collar) worn continuously for 6–8 weeks with serial upright radiographs at 2, 6, and 8 weeks",
                    "th": "• ใส่เฝือกดามคอชนิดแข็ง (Miami J หรือ Aspen collar) ต่อเนื่องตลอดเวลา 6–8 สัปดาห์ ร่วมกับเอกซเรย์ติดตามอาการที่ 2, 6 และ 8 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Isometric neck strengthening and gentle range-of-motion exercises starting after 6–8 weeks upon confirmed bony union",
                    "th": "• เริ่มฝึกบริหารกล้ามเนื้อคอและหมุนคอเบาๆ หลังถอดเฝือกที่ 6–8 สัปดาห์เมื่อกระดูกติดสนิท"
                  },
                  "pitfalls": {
                    "en": "• Missing an occult concomitant C2 fracture (odontoid/pars) or subtle contralateral arch fracture converting it into a burst pattern",
                    "th": "• ตรวจไม่พบกระดูก C2 หักร่วม หรือรอยหักซ่อนเร้นของวงโค้งอีกด้านทำให้พลาดการวินิจฉัย Jefferson Burst Fracture"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Strictly not indicated for isolated Landells Type I fractures",
                    "th": "• ไม่มีข้อบ่งชี้ในการผ่าตัดสำหรับกระดูกหัก Landells Type I จุดเดียว"
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
                    "en": "• Inappropriate surgical overtreatment of an inherently stable fracture",
                    "th": "• ผ่าตัดโดยไม่จำเป็นในรอยหักที่มั่นคงและติดได้เอง"
                  }
                }
              },
              "illustrationId": "",
              "xrayDescription": {
                "en": "Isolated fracture line through anterior or posterior arch of C1 without lateral mass displacement.",
                "th": "เห็นรอยหักจุดเดียวที่วงโค้งหน้าหรือหลังของ C1 โดยชิ้นกระดูกข้างไม่เคลื่อนตัว"
              }
            },
            {
              "type": "Landells II",
              "name": {
                "en": "Landells Type II (Classic Jefferson 4-Part Burst Fracture)",
                "th": "Landells Type II (Jefferson Burst Fracture - วงโค้งหน้าและหลังหักแตก)"
              },
              "description": {
                "en": "Burst fracture involving BOTH anterior and posterior arches of C1 atlas (Classic Jefferson 4-point fracture)\nEvaluated via Rule of Spence (Sum of C1 lateral mass overhang > 6.9 mm = TAL Rupture / UNSTABLE)\nRisk of progressive C1-C2 displacement if TAL is ruptured",
                "th": "รอยหักแตกกระจาย **ทั้งวงโค้งด้านหน้าและด้านหลัง** ของกระดูกคอ C1 (Classic Jefferson 4-point fracture)\nประเมินโดยใช้กฎ Rule of Spence (หากระยะเคลื่อนเกยรวม > 6.9 มม. แสดงว่าเอ็น TAL ขาดหลุด - **ไม่มั่นคง**)\nเสี่ยงต่อการเคลื่อนหลุดของ C1-C2 หากเส้นเอ็นขาด"
              },
              "moi": {
                "en": "Severe axial compression force to the crown of the head (e.g. diving into shallow water).",
                "th": "แรงกดอัดกระแทกตามแนวแกนอย่างรุนแรงเข้าที่กลางศีรษะ (เช่น ดำน้ำกระแทกพื้นสระน้ำ)"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Burst fracture involving anterior and posterior arches; stability hinges entirely on Transverse Atlanto-Axial Ligament (TAL) integrity; Rule of Spence overhang ≤6.9 mm indicates intact TAL managed conservatively with Halo-vest or rigid collar; overhang >6.9 mm or MRI-confirmed TAL tear represents gross atlantoaxial instability requiring C1–C2 posterior instrumented fusion.",
                  "th": "กระดูกแตกกระจายทั้งวงโค้งหน้าและหลัง ความมั่นคงขึ้นอยู่กับความสมบูรณ์ของเอ็น Transverse Ligament (TAL) เป็นสำคัญ; หากผลรวมระยะเกย Rule of Spence ≤6.9 มม. (TAL สมบูรณ์) รักษาแบบไม่ผ่าตัดด้วย Halo-vest หรือ Rigid Collar; หากระยะเกย >6.9 มม. หรือ MRI ยืนยันว่าเอ็น TAL ขาด แสดงถึงข้อคอ C1–C2 หลวมหลุดรุนแรง ต้องผ่าตัดเชื่อมกระดูก C1–C2 ทางด้านหลัง"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Stable Jefferson burst fracture with intact TAL (Spence overhang ≤ 6.9 mm on open-mouth peg view and intact ligament on MRI)",
                    "th": "• กระดูก C1 Burst fracture ชนิดมั่นคงที่เอ็น TAL ไม่ขาด (ระยะเกย Spence ≤ 6.9 มม. และ MRI ปกติ)"
                  },
                  "method": {
                    "en": "• Halo-vest immobilization for 10–12 weeks OR Rigid Cervical Orthosis (Miami J) for 10–12 weeks in compliant low-risk patients",
                    "th": "• ใส่อุปกรณ์ตรึงกะโหลกศีรษะ Halo-vest นาน 10–12 สัปดาห์ หรือใส่เฝือกคอชนิดแข็ง (Miami J) 10–12 สัปดาห์ในผู้ป่วยที่ให้ความร่วมมือดี"
                  },
                  "rehabilitation": {
                    "en": "• Flexion-extension stress radiographs at 10–12 weeks after collar/halo removal to confirm no dynamic atlantoaxial instability",
                    "th": "• เอกซเรย์ท่าก้ม-เงยคอ (Flexion-Extension Views) ที่ 10–12 สัปดาห์หลังถอดอุปกรณ์เพื่อยืนยันว่าข้อต่อ C1–C2 ไม่หลวมเคลื่อน"
                  },
                  "pitfalls": {
                    "en": "• Underestimating TAL tear due to radiographic magnification error; always obtain thin-slice CT and STIR MRI\n• Pin-site infection and skull pin loosening with Halo vest",
                    "th": "• ประเมินเอ็น TAL ขาดต่ำกว่าจริงจากภาพ X-ray ขยาย ควรส่ง CT และ MRI ยืนยันเสมอ\n• การติดเชื้อหรือสลักยึดกะโหลกศีรษะหลวมในผู้ป่วยที่ใส่ Halo vest"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Unstable Jefferson fracture with TAL rupture (Rule of Spence overhang > 6.9 mm, ADI > 3 mm, or MRI-confirmed TAL tear)\n• Progressive lateral mass displacement or concomitant unstable C2 odontoid/pars fracture",
                    "th": "• กระดูก C1 Burst fracture ชนิดไม่มั่นคงที่เอ็น TAL ขาดหลุด (ระยะเกย Spence > 6.9 มม., ADI > 3 มม. หรือ MRI พบเอ็นขาด)\n• มวลกระดูกด้านข้างเคลื่อนถ่างออกเรื่อยๆ หรือมีกระดูกคอ C2 หักร่วมชนิดไม่มั่นคง"
                  },
                  "method": {
                    "en": "• Posterior C1–C2 Instrumented Fusion (Harms / Goel technique: C1 lateral mass screws + C2 pedicle or pars/isthmus screws with connecting rods and autologous bone graft)\n• Alternative: C1-ring osteosynthesis (motion-preserving C1 lateral mass screw-rod bridge fixation)",
                    "th": "• ผ่าตัดเชื่อมตรึงกระดูกคอ C1–C2 ทางด้านหลัง (Harms / Goel technique: ขันสกรูยึด C1 Lateral Mass + C2 Pedicle/Pars screws เชื่อมดามด้วยแท่ง Rods และใส่กระดูกปลูก)\n• ทางเลือก: ผ่าตัดยึดตรึงเฉพาะวงแหวน C1 (C1 Ring Osteosynthesis) เพื่อสงวนการหมุนของคอ"
                  },
                  "rehabilitation": {
                    "en": "• Postoperative rigid collar for 6 weeks; progressive gentle neck mobilization from week 6; full solid fusion expected at 3–6 months",
                    "th": "• ใส่เฝือกคอแข็งประคอง 6 สัปดาห์หลังผ่าตัด; เริ่มฝึกขยับคอเบาๆ ที่ 6 สัปดาห์; กระดูกเชื่อมติดสมบูรณ์ที่ 3–6 เดือน"
                  },
                  "pitfalls": {
                    "en": "• Vertebral artery injury during C1 lateral mass screw placement (must stay on inferior half of C1 posterior arch) or C2 pedicle screw insertion\n• Occipitocervical fusion overtreatment when C1–C2 fusion is sufficient",
                    "th": "• บาดเจ็บต่อเส้นเลือดแดง Vertebral Artery ระหว่างขันสกรู C1 Lateral mass หรือ C2 Pedicle\n• ผ่าตัดเชื่อมลามขึ้นไปถึงฐานกะโหลกศีรษะ (Occipitocervical fusion) เกินความจำเป็น"
                  }
                }
              },
              "illustrationId": "",
              "xrayDescription": {
                "en": "Multiple fracture lines through anterior and posterior arches with lateral displacement of C1 masses.",
                "th": "เห็นรอยหักแตกหลายจุดที่วงโค้งหน้าและหลัง พร้อม C1 lateral mass เคลื่อนแยกออกด้านข้าง"
              }
            },
            {
              "type": "Landells III",
              "name": {
                "en": "Landells Type III (C1 Lateral Mass Fracture)",
                "th": "Landells Type III (มวลกระดูกด้านข้าง C1 Lateral Mass หัก)"
              },
              "description": {
                "en": "Fracture involving the lateral mass of C1 atlas (intraglenoid/unilateral fracture)\nMay extend into the superior or inferior articular facets\nStable if non-displaced; unstable if TAL disrupted or significant articular step-off",
                "th": "รอยหักบริเวณมวลกระดูกด้านข้าง (Lateral mass) ของ C1\nอาจลุกลามเข้าผิวข้อต่อด้านบนหรือด้านล่าง\nมั่นคงหากไม่เคลื่อนตัว แต่ไม่มั่นคงหากเอ็น TAL ขาดหรือผิวข้อเหลื่อมรุนแรง"
              },
              "moi": {
                "en": "Lateral flexion combined with axial compression.",
                "th": "การเอียงคอไปด้านข้างร่วมกับแรงกดอัดตามแนวแกน"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Unilateral C1 lateral mass fracture; non-displaced fractures with intact TAL treated in rigid cervical orthosis; severe intra-articular facet incongruity (>2 mm step-off) or rotational/tilt deformity requires operative reduction and C1–C2 fusion to prevent post-traumatic occipitocervical arthritis and torticollis.",
                  "th": "รอยหักมวลกระดูกด้านข้าง C1 ซีกเดียว หากไม่เคลื่อนตัวและเอ็น TAL สมบูรณ์รักษาด้วยเฝือกคอชนิดแข็ง; หากผิวข้อแตกเหลื่อม >2 มม. หรือคอเอียงบิดผิดรูป จำเป็นต้องผ่าตัดจัดกระดูกและเชื่อมข้อ C1–C2 เพื่อป้องกันข้อเสื่อมและคอเอียงเรื้อรัง"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Non-displaced or minimally displaced C1 lateral mass fracture (<2 mm articular step-off, intact TAL, coronal head tilt < 5°)",
                    "th": "• กระดูก C1 lateral mass หักชนิดไม่เคลื่อนตัวหรือเคลื่อนน้อย (<2 มม., เอ็น TAL สมบูรณ์, คอเอียง < 5°)"
                  },
                  "method": {
                    "en": "• Rigid cervical collar (Miami J) or Halo-vest for 8–12 weeks depending on fracture displacement",
                    "th": "• ใส่เฝือกคอชนิดแข็ง (Miami J) หรือ Halo-vest นาน 8–12 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Dynamic flexion-extension and rotational radiographs at 8–12 weeks before weaning collar",
                    "th": "• ตรวจเอกซเรย์ท่าก้ม-เงยและหมุนคอที่ 8–12 สัปดาห์ก่อนถอดเฝือก"
                  },
                  "pitfalls": {
                    "en": "• Persistent lateral tilt and painful restricted neck rotation due to asymmetric articular healing",
                    "th": "• ภาวะคอเอียงถาวรและปวดขัดเวลาหมุนคอจากผิวข้อเชื่อมติดไม่เรียบ"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Severely comminuted lateral mass with >2 mm articular incongruity\n• Concomitant TAL rupture, rotational C1–C2 subluxation, or progressive torticollis",
                    "th": "• ผิวข้อ lateral mass แตกป่นเหลื่อม >2 มม.\n• เอ็น TAL ฉีกขาดร่วมด้วย, ข้อ C1–C2 หลุดบิดหมุน หรือมีภาวะคอเอียงเกร็งรุนแรง"
                  },
                  "method": {
                    "en": "• Posterior C1–C2 instrumented fusion (Harms technique) OR Occiput-to-C2 fusion if C1 lateral mass screw purchase is impossible due to severe comminution",
                    "th": "• ผ่าตัดเชื่อมข้อ C1–C2 ด้านหลัง (Harms technique) หรือเชื่อมจากฐานกะโหลกถึง C2 (Occipitocervical Fusion) หากมวลกระดูก C1 แตกป่นจนขันสกรูไม่ได้"
                  },
                  "rehabilitation": {
                    "en": "• Protected cervical orthosis for 6 weeks; progressive mobilization thereafter",
                    "th": "• ใส่เฝือกคอประคอง 6 สัปดาห์; เริ่มกายภาพขยับคอหลัง 6 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Excessive loss of neck rotational range of motion (C1–C2 fusion eliminates ~50% of total cervical rotation)",
                    "th": "• สูญเสียพิสัยการหมุนคอประมาณ 50% หลังผ่าตัดเชื่อมข้อ C1–C2 (ต้องให้ข้อมูลผู้ป่วยล่วงหน้า)"
                  }
                }
              },
              "illustrationId": "",
              "xrayDescription": {
                "en": "Fracture line crossing C1 lateral mass with variable displacement on coronal CT.",
                "th": "เห็นรอยหักพาดผ่าน C1 lateral mass ในภาพรังสีหรือ CT สแกนแนว Coronal"
              }
            }
          ]
        },
        {
          "system": "Hangman C2",
          "fullName": {
            "en": "Levine-Edwards Classification for Hangman's Fracture (C2 Traumatic Spondylolisthesis)",
            "th": "การจำแนกกระดูกคอ C2 หักหลุดแบบ Levine-Edwards (Hangman's Fracture)"
          },
          "description": {
            "en": "Classification of C2 axis traumatic spondylolisthesis (pars interarticularis fracture) into Types I, II, IIA, and III based on translation, angulation, C2-C3 disc disruption, and facet dislocation.",
            "th": "ระบบจำแนกกระดูกคอ C2 (Axis) หักหลุดบริเวณ Pars interarticularis (Hangman's fracture) แบ่งเป็น Type I, II, IIA และ III ตามระยะเคลื่อนเกย การเอียงบิด การฉีกขาดของหมอนรองกระดูก C2-C3 และข้อต่อ Facet หลุด"
          },
          "concept": {
            "title": {
              "en": "Hangman's C2 Spondylolisthesis Clinical Concept",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ Hangman C2 Classification"
            },
            "corePrinciple": {
              "en": "Classifies C2 traumatic spondylolisthesis (pars interarticularis fractures) based on C2–C3 translation, angulation, and C2–C3 intervertebral disc/PLL integrity.",
              "th": "จำแนกกระดูกคอ C2 pars interarticularis หักหลุดสองข้างตามระยะการเคลื่อนเกย มุมเอียงบิด และความสมบูรณ์ของหมอนรองกระดูกและเอ็นยึด C2–C3"
            },
            "rules": [
              {
                "en": "Type I: Translation < 3 mm and 0° angulation (Intact C2–C3 disc) -> STABLE.",
                "th": "Type I: เคลื่อน < 3 มม. และไม่เอียงบิด 0° (หมอนรอง C2–C3 สมบูรณ์) -> มั่นคง"
              },
              {
                "en": "Type II: Translation > 3 mm and angulation > 11° (C2–C3 disc disruption) -> UNSTABLE.",
                "th": "Type II: เคลื่อน > 3 มม. และมุมเอียง > 11° (หมอนรอง C2–C3 ฉีกขาด) -> ไม่มั่นคง"
              },
              {
                "en": "Type IIA: Severe angulation with minimal/no translation (Flexion-distraction disc tear) -> HIGHLY UNSTABLE.",
                "th": "Type IIA: มุมเอียงบิดรุนแรง แต่ไม่เคลื่อนเกย (หมอนรองฉีกขาดจากแรงดึงถ่าง) -> ไม่มั่นคงสูง"
              },
              {
                "en": "Type III: Translation + Bilateral C2–C3 Facet Dislocation -> GROSSLY UNSTABLE.",
                "th": "Type III: เคลื่อนเกยร่วมกับข้อต่อ C2–C3 Facet หลุดล็อคทั้งสองข้าง -> ไม่มั่นคงรุนแรง"
              }
            ],
            "clinicalSignificance": [
              {
                "en": "Type I is managed conservatively in a Rigid Cervical Collar for 6–12 weeks.",
                "th": "Type I รักษาแบบไม่ผ่าตัดโดยใส่เฝือกคอชนิดแข็ง 6–12 สัปดาห์"
              },
              {
                "en": "Type II requires closed traction reduction in slight extension followed by Halo-vest immobilization or C2–C3 surgical fusion.",
                "th": "Type II ต้องดึงจัดกระดูกคอแล้วใส่ Halo-vest หรือผ่าตัดเชื่อมข้อ C2–C3"
              },
              {
                "en": "CRITICAL CONTRAINDICATION: Cervical traction is STRICTLY CONTRAINDICATED in Type IIA injuries; traction causes catastrophic over-distraction and spinal cord transection. Treat with manual extension reduction or early surgery.",
                "th": "ข้อห้ามวิกฤต: ห้ามดึงคอ (Traction) ใน Type IIA เด็ดขาด! เพราะจะทำให้หมอนรองและไขสันหลังถูกดึงยืดจนขาด ให้จัดกระดูกท่าแหงนหรือผ่าตัด"
              },
              {
                "en": "Type III requires emergency open reduction of facet dislocations and posterior C2–C3 instrumented fusion.",
                "th": "Type III ต้องผ่าตัดเปิดจัดข้อ Facet ที่หลุดฉุกเฉินและดามยึดกระดูก C2–C3 ด้านหลัง"
              }
            ]
          },
          "investigations": [
            {
              "name": "Lateral Cervical Spine Radiograph",
              "details": {
                "en": "Lateral C-spine view. Evaluates C2 pars translation (mm), angulation (°), C2-C3 disc space widening, and anterior displacement of C2 body on C3.",
                "th": "ภาพเอกซเรย์คอด้านข้าง ประเมินระยะเคลื่อนเกยของ C2 (มม.), มุมเอียงบิด (องศา), ช่องหมอนรอง C2-C3 กว้างขึ้น และ C2 เคลื่อนไปด้านหน้า"
              },
              "imageUrl": "/images/investigations/cspine/lateral_cspine_view.jpg"
            },
            {
              "name": "High-Resolution CT Cervical Spine",
              "details": {
                "en": "Thin-slice CT scan with multiplanar reconstructions. Accurately maps pars interarticularis fracture lines, spinal canal diameter, and facet joint reduction.",
                "th": "เอกซเรย์คอมพิวเตอร์ความละเอียดสูง ประเมินรอยหักบริเวณ Pars interarticularis, ขนาดช่องไขสันหลัง และข้อต่อ Facet"
              }
            },
            {
              "name": "MRI Cervical Spine",
              "details": {
                "en": "Cervical spine MRI. Essential to evaluate C2-C3 intervertebral disc disruption, Posterior Longitudinal Ligament (PLL), and spinal cord compression.",
                "th": "เอกซเรย์คลื่นแม่เหล็กไฟฟ้า (MRI) ประเมินการฉีกขาดของหมอนรองกระดูก C2-C3, เอ็น PLL และการกดทับไขสันหลัง"
              }
            }
          ],
          "types": [
            {
              "type": "Levine I",
              "name": {
                "en": "Levine-Edwards Type I (Minimally Displaced - STABLE)",
                "th": "Levine-Edwards Type I (ไม่เคลื่อนตัว/เคลื่อนน้อย <2มม. - มั่นคง)"
              },
              "description": {
                "en": "Non-displaced or minimally displaced fracture of C2 pars interarticularis (<2 mm translation, 0° angulation)\nIntact C2-C3 intervertebral disc and ALL/PLL ligaments\nStable injury pattern caused by hyperextension and axial loading",
                "th": "รอยหักกระดูกคอ C2 บริเวณ Pars interarticularis ไม่เคลื่อนตัวหรือเคลื่อนตัวน้อยมาก (< 2 มม., ไม่มีความเอียงบิด)\nหมอนรองกระดูก C2-C3 และเอ็น ALL/PLL ยังคง **สมบูรณ์ดี**\nมีความมั่นคงสูง เกิดจากกลไกแหงนคอร่วมกับแรงอัด"
              },
              "moi": {
                "en": "Hyperextension with axial load (e.g. forehead striking windshield in MVA).",
                "th": "การแหงนคอไปด้านหลังรุนแรงร่วมกับแรงอัดกระแทก (เช่น หน้าผากชนกระจกหน้ารถ)"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Minimally displaced C2 bilateral pars fracture (<3 mm translation, 0° angulation); C2–C3 intervertebral disc and ALL/PLL intact; mechanically stable; non-operative treatment in rigid cervical collar for 10–12 weeks achieves >95% bony union.",
                  "th": "กระดูกคอ C2 pars หักสองข้างชนิดเคลื่อนน้อย (<3 มม., ไม่เอียงบิด 0°) หมอนรองกระดูก C2–C3 และเอ็น ALL/PLL สมบูรณ์ โครงสร้างมั่นคง รักษาแบบไม่ผ่าตัดด้วยเฝือกคอชนิดแข็ง 10–12 สัปดาห์ กระดูกเชื่อมติด >95%"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Non-displaced or minimally displaced Levine Type I fractures (<3 mm translation and no kyphotic angulation)",
                    "th": "• กระดูก C2 pars หักชนิดไม่เคลื่อนตัวหรือเคลื่อนน้อย (เคลื่อน <3 มม. และไม่มีการก้มเอียง)"
                  },
                  "method": {
                    "en": "• Rigid cervical orthosis (Miami J or Philadelphia collar) worn continuously for 10–12 weeks with upright lateral radiographs at weeks 1, 2, 6, and 12",
                    "th": "• ใส่เฝือกดามคอชนิดแข็ง (Miami J หรือ Philadelphia collar) ต่อเนื่อง 10–12 สัปดาห์ ร่วมกับเอกซเรย์ท่ายืนสัปดาห์ที่ 1, 2, 6 และ 12"
                  },
                  "rehabilitation": {
                    "en": "• Active gentle range-of-motion and isometric strengthening after radiographic bony consolidation at 10–12 weeks",
                    "th": "• เริ่มฝึกบริหารกล้ามเนื้อคอและเคลื่อนไหวเบาๆ หลังกระดูกติดแน่นที่ 10–12 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Overlooking subtle C2–C3 angulation indicating an occult Type IIA flexion-distraction injury",
                    "th": "• มองข้ามการก้มเอียงของกระดูก C2–C3 ทำให้พลาดการวินิจฉัย Type IIA ซึ่งห้ามดึงคอ"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Strictly not indicated for Type I fractures with intact disc",
                    "th": "• ไม่มีข้อบ่งชี้ในการผ่าตัดสำหรับ Type I"
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
                    "en": "• Unnecessary surgery for an easily treatable collar case",
                    "th": "• ผ่าตัดเกินความจำเป็นในกรณีที่หายได้ด้วยเฝือกคอ"
                  }
                }
              },
              "illustrationId": "",
              "xrayDescription": {
                "en": "Nondisplaced fracture line through C2 pars interarticularis with normal C2-C3 alignment.",
                "th": "เห็นรอยหักที่ C2 pars interarticularis โดยแนว C2-C3 ยังคงเรียงกันปกติ"
              }
            },
            {
              "type": "Levine II",
              "name": {
                "en": "Levine-Edwards Type II (Displaced with C2-C3 Disc Disruption - UNSTABLE)",
                "th": "Levine-Edwards Type II (เคลื่อนตัว >2มม. หมอนรอง C2-C3 ฉีกขาด - ไม่มั่นคง)"
              },
              "description": {
                "en": "Displaced fracture of C2 pars interarticularis (>2 mm translation, significant angulation)\nDisruption of C2-C3 intervertebral disc and Posterior Longitudinal Ligament (PLL)\nUnstable injury pattern caused by hyperextension followed by rebound flexion-distraction",
                "th": "รอยหัก C2 pars interarticularis เคลื่อนตัว (> 2 มม. มีการเอียงบิดของกระดูก)\nหมอนรองกระดูก C2-C3 และเอ็น Posterior Longitudinal Ligament (PLL) ฉีกขาด\n**ไม่มั่นคง** เกิดจากกลไกแหงนคอแล้วเด้งกลับมาก้มคอสะบัดดึง"
              },
              "moi": {
                "en": "Hyperextension followed by severe rebound flexion-distraction.",
                "th": "การแหงนคอแล้วสะบัดก้มคอกระชากอย่างรุนแรง"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Displaced C2 pars fracture (>3 mm translation, >11° angulation) with torn C2–C3 disc and PLL; initial closed reduction via axial traction in slight extension followed by Halo-vest for 12 weeks; surgery (anterior C2–C3 ACDF or direct C2 pars screws) indicated if reduction cannot be maintained or in polytrauma/elderly patients.",
                  "th": "กระดูก C2 pars หักเคลื่อนตัว (>3 มม., ก้มเอียง >11°) ร่วมกับหมอนรองกระดูก C2–C3 และเอ็น PLL ฉีกขาด; ขั้นแรกทำการดึงจัดกระดูกเข้าที่ (Traction ในท่าแหงนเล็กน้อย) แล้วใส่ Halo-vest 12 สัปดาห์; ผ่าตัดเชื่อม C2–C3 (ACDF) หรือยึด C2 pars screw หากจัดกระดูกไม่อยู่ หรือในผู้ป่วยบาดเจ็บหลายระบบ/ผู้สูงอายุ"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Displaced Levine Type II fractures successfully reduced to <3 mm translation and <5° angulation under monitored traction",
                    "th": "• กระดูก C2 หัก Levine Type II ที่สามารถดึงจัดกระดูกเข้าที่ได้ดี (เคลื่อน <3 มม. และเอียง <5°)"
                  },
                  "method": {
                    "en": "• Closed reduction using 5–10 lbs of axial traction under fluoroscopy with neck in slight extension, followed by Halo-vest immobilization for 12 weeks",
                    "th": "• ดึงกระดูกคอถ่วงน้ำหนัก 5–10 ปอนด์ใต้เครื่องเอกซเรย์ในท่าแหงนคอเล็กน้อย แล้วใส่ Halo-vest นาน 12 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Serial upright cervical radiographs at weeks 1, 2, 4, 8, 12 in Halo; transition to rigid collar for 4 weeks after Halo removal",
                    "th": "• เอกซเรย์คอด้านข้างติดตามอาการสัปดาห์ที่ 1, 2, 4, 8, 12; เปลี่ยนเป็นเฝือกคอแข็งอีก 4 สัปดาห์หลังถอด Halo"
                  },
                  "pitfalls": {
                    "en": "• Loss of reduction inside Halo vest leading to symptomatic C2–C3 nonunion and malunion kyphosis",
                    "th": "• กระดูกเคลื่อนตัวซ้ำใน Halo vest ทำให้เกิดกระดูกไม่ติดและคอค่อมผิดรูปเรื้อรัง"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Failure of closed reduction (>3 mm persistent translation or >11° kyphosis)\n• Inability to tolerate Halo-vest (elderly, pulmonary disease, severe polytrauma)\n• Chronic symptomatic C2–C3 nonunion",
                    "th": "• จัดกระดูกไม่เข้าที่ (ยังคงเคลื่อน >3 มม. หรือค่อม >11°)\n• ผู้ป่วยทนใส่ Halo-vest ไม่ได้ (ผู้สูงอายุ, โรคปอด, บาดเจ็บหลายระบบ)\n• ภาวะกระดูกไม่ติดและปวดเรื้อรัง"
                  },
                  "method": {
                    "en": "• Anterior C2–C3 Discectomy and Fusion (ACDF) with anterior plate fixation (biomechanically restores anterior/middle columns across torn disc)\n• Alternative: Direct C2 pars/isthmus screw osteosynthesis or posterior C2–C3 instrumented fusion",
                    "th": "• ผ่าตัดเชื่อมกระดูกและหมอนรอง C2–C3 ทางด้านหน้า (Anterior C2–C3 ACDF พร้อมแผ่นเหล็กดาม)\n• ทางเลือก: ผ่าตัดขันสกรูยึดข้ามรอยหัก C2 Pars Direct Screw หรือผ่าตัดดาม C2–C3 ทางด้านหลัง"
                  },
                  "rehabilitation": {
                    "en": "• Rigid cervical collar for 6 weeks postoperatively; early upright ambulation; gentle active ROM at 6 weeks",
                    "th": "• ใส่เฝือกคอแข็ง 6 สัปดาห์หลังผ่าตัด; ลุกเดินได้เร็ว; เริ่มฝึกขยับคอที่ 6 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Attempting posterior C2–C3 fusion alone without addressing the torn anterior C2–C3 disc leading to construct failure",
                    "th": "• ผ่าตัดดามด้านหลังอย่างเดียวโดยไม่จัดการหมอนรองกระดูกด้านหน้าที่ฉีกขาดจนเหล็กดามล้าหัก"
                  }
                }
              },
              "illustrationId": "",
              "xrayDescription": {
                "en": "Significant translation >2mm and anterior tilt of C2 body relative to C3 with disc space widening.",
                "th": "เห็น C2 เคลื่อนไปด้านหน้า >2มม. เอียง ก้มลง และช่องหมอนรอง C2-C3 กว้างขึ้น"
              }
            },
            {
              "type": "Levine IIA",
              "name": {
                "en": "Levine-Edwards Type IIA (Severe Angulation / Oblique Line - NO TRACTION!)",
                "th": "Levine-Edwards Type IIA (เอียงบิดรุนแรง - ห้ามดึงถ่วง Traction เด็ดขาด!)"
              },
              "description": {
                "en": "Severe angulation of C2 body with MINIMAL translation, oblique fracture line through pars\nComplete disruption of C2-C3 intervertebral disc\n**CRITICAL WARNING: TRACTION IS STRICTLY CONTRAINDICATED** (Traction causes catastrophic over-distraction and spinal cord transection!)",
                "th": "รอยหัก C2 เอียงบิดอย่างรุนแรงโดย **แทบไม่มีการเคลื่อนเกยด้านข้าง** รอยหักเป็นแนวเฉียง\nหมอนรองกระดูก C2-C3 ฉีกขาดสมบูรณ์\n**คำเตือนด่วน: ห้ามดึงถ่วงน้ำหนัก (TRACTION) เด็ดขาด!** (เนื่องจากการดึงถ่วงจะทำให้ข้อ C2-C3 อ้าแยกถ่างรุนแรง จนไขสันหลังขาดได้!)"
              },
              "moi": {
                "en": "Flexion-distraction injury mechanism.",
                "th": "กลไกก้มคอพร้อมกับแรงดึงถ่างอ้ารุนแรง"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Severe flexion-angulation deformity with minimal translation and oblique pars fracture line; C2–C3 disc torn via flexion-distraction; CERVICAL TRACTION IS STRICTLY CONTRAINDICATED (causes catastrophic over-distraction and spinal cord transection); closed reduction performed ONLY via manual gentle extension and compression, then Halo-vest; early anterior C2–C3 ACDF preferred if reduction unstable.",
                  "th": "รอยหักเฉียงของ C2 pars ที่มีการก้มเอียงรุนแรงแต่ไม่เกย เกิดจากกลไกก้มคอดึงถ่าง; **ห้ามดึงถ่วงน้ำหนัก (TRACTION) เด็ดขาด** เพราะจะทำให้ข้ออ้าแยกและไขสันหลังขาดได้ทันที; การจัดกระดูกทำได้เฉพาะการดันแหงนคอเบาๆ (Extension-Compression) แล้วใส่ Halo-vest; แนะนำผ่าตัด ACDF C2–C3 หากจัดกระดูกไม่อยู่"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Levine Type IIA fractures where anatomic reduction is successfully achieved by manual extension-compression under fluoroscopy",
                    "th": "• กระดูก C2 Type IIA ที่จัดกระดูกในท่าแหงนคอเข้าที่ได้สมบูรณ์ใต้เครื่องเอกซเรย์"
                  },
                  "method": {
                    "en": "• **NO AXIAL TRACTION**. Closed reduction performed by gentle manual extension combined with posterior translation/axial compression under fluoroscopy; immediate application of Halo-vest in slight extension for 12 weeks",
                    "th": "• **ห้ามดึงถ่วงน้ำหนัก (No Traction)** ทำการจัดกระดูกด้วยการดันแหงนคอเบาๆ ร่วมกับดันกระดูกไปด้านหลังใต้เครื่องเอกซเรย์; ใส่ Halo-vest ในท่าแหงนคอเล็กน้อยนาน 12 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Strict weekly upright radiographic checks during the first 3 weeks to rule out late kyphotic collapse in Halo",
                    "th": "• ตรวจเอกซเรย์ท่ายืนทุกสัปดาห์ในช่วง 3 สัปดาห์แรกเพื่อเฝ้าระวังแนวกระดูกค่อมตัวซ้ำใน Halo"
                  },
                  "pitfalls": {
                    "en": "• Applying cervical tongs traction leading to fatal spinal cord overdistraction and permanent tetraplegia\n• Failure of Halo to maintain extension leading to severe progressive kyphosis",
                    "th": "• ดึงถ่วงน้ำหนักกะโหลกศีรษะ (Traction) จนไขสันหลังถูกดึงยืดขาดเป็นอัมพาตถาวร\n• Halo-vest ไม่สามารถล็อกท่าแหงนคอได้จนคอค่อมพับไปข้างหน้า"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Inability to achieve/maintain reduction in extension without traction\n• Persistent C2–C3 angulation > 10°\n• Polytrauma or intolerance of Halo-vest",
                    "th": "• ไม่สามารถจัดกระดูกท่าแหงนให้อยู่ในแนวปกติได้\n• กระดูกยังคงก้มเอียงค่อม > 10°\n• บาดเจ็บหลายระบบ หรือทนใส่ Halo-vest ไม่ได้"
                  },
                  "method": {
                    "en": "• Anterior C2–C3 Discectomy and Fusion (ACDF) with structural interbody graft/cage and locking plate\n• Alternative: Posterior C2–C3 instrumented fusion or bilateral C2 direct pars screw osteosynthesis",
                    "th": "• ผ่าตัดเชื่อมหมอนรองและกระดูก C2–C3 ด้านหน้า (ACDF พร้อม Cage และ Locking Plate)\n• ทางเลือก: ผ่าตัดดาม C2–C3 ด้านหลัง หรือยึด C2 pars screws สองข้าง"
                  },
                  "rehabilitation": {
                    "en": "• Rigid cervical collar for 6 weeks; progressive physical therapy at 6 weeks",
                    "th": "• ใส่เฝือกคอแข็ง 6 สัปดาห์; เริ่มทำกายภาพบำบัดที่ 6 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Attempting traction during intraoperative positioning (must position neck manually in extension)",
                    "th": "• เผลอดึงคอระหว่างจัดท่าผ่าตัดในห้องผ่าตัด (ต้องจัดท่าแหงนคอด้วยมือเท่านั้น)"
                  }
                }
              },
              "illustrationId": "",
              "xrayDescription": {
                "en": "Severe anterior angulation of C2 body with posterior disc space gap and minimal translation.",
                "th": "เห็น C2 เอียงก้มลงรุนแรงโดยช่องหมอนรองด้านหลังอ้ากว้าง แต่ไม่มีการเกยไปด้านข้าง"
              }
            },
            {
              "type": "Levine III",
              "name": {
                "en": "Levine-Edwards Type III (Displaced WITH Bilateral C2-C3 Facet Dislocation)",
                "th": "Levine-Edwards Type III (หักหลุดร่วมกับข้อต่อ C2-C3 Facet หลุดฉีก - ไม่มั่นคงรุนแรง)"
              },
              "description": {
                "en": "Severe C2 pars fracture COMBINED WITH bilateral C2-C3 facet joint dislocation or subluxation\nComplete disruption of all C2-C3 anterior and posterior ligamentous complexes\nHighly UNSTABLE and catastrophic injury pattern with high risk of neurological deficit",
                "th": "รอยหัก C2 pars interarticularis **ร่วมกับข้อต่อ C2-C3 Facet joint หลุดเคลื่อนทั้งสองข้าง**\nเอ็นรอบข้อ C2-C3 ทั้งด้านหน้าและด้านหลังฉีกขาดสมบูรณ์\n**ไม่มั่นคงอย่างรุนแรงสูงสุด** เสี่ยงสูงต่อการบาดเจ็บของไขสันหลังและอัมพาต"
              },
              "moi": {
                "en": "Flexion-compression followed by severe hyperextension.",
                "th": "กลไกก้มคออัดกระแทกแล้วสะบัดแหงนคอกลับรุนแรง"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Severe C2 pars fracture combined with locked or perched bilateral C2–C3 facet joints; gross 3-column disruption with extreme instability; non-operative care is contraindicated; emergency open reduction of locked facets and rigid posterior C2–C3 fusion (or combined anterior-posterior 360° stabilization) is mandatory.",
                  "th": "กระดูก C2 pars หักร่วมกับข้อต่อ Facet C2–C3 หลุดล็อคเกยกันทั้งสองข้าง โครงสร้างทั้ง 3 เสาพังทลายอย่างสิ้นเชิง ไม่มั่นคงรุนแรงสูงสุด ห้ามรักษาแบบไม่ผ่าตัด; ต้องผ่าตัดเปิดจัดข้อ Facet ที่หลุดฉุกเฉินและดามยึดกระดูกเชื่อมข้อ C2–C3 ด้านหลัง (หรือผ่าตัดหน้า-หลัง 360°)"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly contraindicated (locked facets cannot be reduced or maintained closed; catastrophic instability)",
                    "th": "• ห้ามรักษาแบบไม่ผ่าตัดเด็ดขาด (ข้อ Facet ที่หลุดล็อคไม่สามารถดึงเข้าที่หรือยึดตรึงได้ด้วยเฝือก)"
                  },
                  "method": {
                    "en": "• N/A (Urgent operative preparation)",
                    "th": "• N/A (เตรียมผ่าตัดฉุกเฉิน)"
                  },
                  "rehabilitation": {
                    "en": "• N/A",
                    "th": "• N/A"
                  },
                  "pitfalls": {
                    "en": "• High mortality and irreversible tetraplegia if surgery is delayed",
                    "th": "• เสี่ยงต่ออัมพาตถาวรและเสียชีวิตหากผ่าตัดล่าช้า"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All Levine-Edwards Type III Hangman fractures (C2 pars fracture + bilateral locked/subluxated C2–C3 facets)",
                    "th": "• กระดูก C2 หักหลุด Levine Type III ทุกราย"
                  },
                  "method": {
                    "en": "• Emergency Operative Reconstruction:\n  1. Posterior Approach: Open reduction of locked C2–C3 facets (partial facetectomy if locked) + Posterior C2–C3 instrumented fusion (C2 pedicle/pars screws + C3 lateral mass screws with rods)\n  2. Anterior C2–C3 ACDF performed secondarily if severe anterior disc herniation/kyphosis persists (360° reconstruction)",
                    "th": "• ผ่าตัดสร้างความมั่นคงฉุกเฉิน:\n  1. ผ่าตัดเปิดทางด้านหลัง: จัดข้อ C2–C3 Facet ที่หลุดล็อคให้เข้าที่ (ตัดแต่งขอบข้อ Facet หากติดขัด) + ผ่าตัดดามยึด C2–C3 ด้วยสกรูและแท่ง Rods (C2 Pedicle/Pars screws + C3 Lateral Mass screws)\n  2. ผ่าตัดเสริมทางด้านหน้า C2–C3 ACDF ร่วมด้วยหากมีหมอนรองกระดูกแตกทะลักหรือแนวกระดูกยังค่อม (ผ่าตัดรอบทิศ 360 องศา)"
                  },
                  "rehabilitation": {
                    "en": "• Rigid cervical collar for 6–8 weeks; aggressive neuro-rehabilitation if preexisting neurologic deficit",
                    "th": "• ใส่เฝือกคอแข็ง 6–8 สัปดาห์; กายภาพบำบัดฟื้นฟูระบบประสาทเข้มข้นหากมีอาการอัมพาต"
                  },
                  "pitfalls": {
                    "en": "• Blind closed traction attempts that cause cord herniation against retropulsed C2 body or extruded disc fragments\n• Inadequate posterior fixation purchase in fractured C2 pars",
                    "th": "• พยายามดึงดัดข้อแบบปิดแบบสุ่มสี่สุ่มห้าจนหมอนรองกระดูกกดทับไขสันหลัง\n• สกรูยึด C2 หลวมหลุดเนื่องจากเนื้อกระดูก pars แตกหัก"
                  }
                }
              },
              "illustrationId": "",
              "xrayDescription": {
                "en": "Displaced C2 pars fracture with bilateral locked or subluxated C2-C3 facet joints.",
                "th": "เห็นรอยหัก C2 ร่วมกับข้อต่อ C2-C3 Facet joint หลุดเกยข้ามกันทั้งสองข้าง"
              }
            }
          ]
        },
        {
          "system": "Odontoid C2",
          "fullName": {
            "en": "Anderson-D'Alonzo Classification for Odontoid (Dens) Fractures",
            "th": "การจำแนกกระดูกยอดเดือย C2 (Odontoid process) หักแบบ Anderson-D'Alonzo"
          },
          "description": {
            "en": "Classification of C2 axis odontoid process fractures into Type I (Tip avulsion), Type II (Base fracture - High nonunion risk ~30-40%), and Type III (Body extension - High union rate >90%). Dictates surgical versus conservative management.",
            "th": "ระบบจำแนกกระดูกยอดเดือย C2 (Odontoid / Dens) หัก แบ่งเป็น Type I (ปลายเดือยกะเทาะ), Type II (โคนเดือยหัก - เสี่ยงกระดูกไม่ติดสูง ~30-40%) และ Type III (ลุกลามเข้าตัวกระดูก C2 - อัตรากระดูกติดสูง >90%)"
          },
          "concept": {
            "title": {
              "en": "Odontoid C2 Fracture Clinical Concept",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ Odontoid C2 Classification"
            },
            "corePrinciple": {
              "en": "Classifies C2 dens fractures by anatomical location (Tip, Base, Body), which directly determines fracture site vascularity and nonunion risk.",
              "th": "จำแนกรอยหักของยอดเดือย C2 (Dens) ตามตำแหน่งทางกายวิภาค (ปลาย, โคน, ลำตัว) ซึ่งเป็นตัวกำหนดเลือดมาเลี้ยงและโอกาสเกิดกระดูกไม่ติด"
            },
            "rules": [
              {
                "en": "Type I (Tip avulsion above TAL): Avulsion of alar ligament attachment -> STABLE.",
                "th": "Type I (ปลายเดือยกะเทาะ): รอยหักปลายเดือยเหนือเอ็น TAL -> มั่นคง"
              },
              {
                "en": "Type II (Base fracture at junction with body): Watershed vascular zone -> HIGH NONUNION RISK (30–40%).",
                "th": "Type II (โคนเดือยหัก): บริเวณจุดอับเลือด -> เสี่ยงกระดูกไม่ติดสูงมาก (30–40%)"
              },
              {
                "en": "Type II Operative Cut-offs: Displacement ≥ 5 mm, Angulation ≥ 10°, Age > 65 years, or Comminuted Base (Type IIA) -> Mandatory Surgical Indication.",
                "th": "เกณฑ์ผ่าตัด Type II: เคลื่อน ≥ 5 มม., เอียง ≥ 10°, อายุ > 65 ปี หรือมีชิ้นแตกย่อย (IIA) -> มีข้อบ่งชี้ผ่าตัด"
              },
              {
                "en": "Type III (Deep extension into C2 cancellous body): Rich vascular bed -> HIGH UNION RATE (> 90%).",
                "th": "Type III (รอยหักลึกลงในลำตัว C2): กระดูกพรุนเลือดเลี้ยงอุดมสมบูรณ์ -> อัตรากระดูกติดสูง (> 90%)"
              }
            ],
            "clinicalSignificance": [
              {
                "en": "Type I and non-displaced Type III fractures are managed conservatively in a Rigid Collar or Halo vest for 6–12 weeks.",
                "th": "Type I และ Type III ที่ไม่เคลื่อนตัว รักษาแบบไม่ผ่าตัดโดยใส่เฝือกคอแข็งหรือ Halo vest 6–12 สัปดาห์"
              },
              {
                "en": "Type II in young patients (<65 yrs) with <5 mm displacement can be attempted in Halo vest, but displacement ≥5 mm warrants Anterior Odontoid Screw or C1–C2 Fusion.",
                "th": "Type II ในผู้ป่วยอายุน้อยที่เคลื่อน <5 มม. อาจใส่ Halo vest ได้ แต่หากเคลื่อน ≥5 มม. ควรผ่าตัดขันสกรูหรือเชื่อมข้อ C1–C2"
              },
              {
                "en": "Elderly Pitfall: In patients >65 years with Type II fractures, Halo-vest treatment has high mortality (~40%) and poor nonunion rates (>60%); surgical fixation is strongly preferred.",
                "th": "ข้อควรระวังในผู้สูงอายุ: ผู้ป่วยอายุ >65 ปีที่เป็น Type II การใส่ Halo vest มีอัตราตายสูง (~40%) และกระดูกไม่ติดสูง (>60%) ควรพิจารณาผ่าตัดดามกระดูกเป็นทางเลือกหลัก"
              }
            ]
          },
          "investigations": [
            {
              "name": "Open-Mouth Odontoid AP & Lateral Radiographs",
              "details": {
                "en": "Open-mouth AP (Peg view) and lateral cervical spine views. Evaluates fracture location (tip, base, body), fracture gap, displacement (>5mm), and angulation (>10°).",
                "th": "ภาพเอกซเรย์อ้าปาก (Peg view) และคอด้านข้าง ประเมินตำแหน่งรอยหัก (ปลาย, โคน, ลำตัว C2), ระยะอ้า, เกยเคลื่อน (>5มม.) และมุมเอียง (>10°)"
              },
              "imageUrl": "/images/investigations/cspine/open_mouth_peg_view.jpg"
            },
            {
              "name": "High-Resolution CT Cervical Spine (Coronal & Sagittal Reconstructions)",
              "details": {
                "en": "Thin-slice 3D CT scan. Gold standard to confirm Anderson-D'Alonzo type, measure exact displacement, fracture gap, and evaluate comminution.",
                "th": "เอกซเรย์คอมพิวเตอร์ 3D ความละเอียดสูง เป็นมาตรฐานหลักในการระบุประเภท Type I, II, III และวัดระยะอ้าเคลื่อนตัว"
              }
            },
            {
              "name": "MRI Cervical Spine",
              "details": {
                "en": "Cervical spine MRI. Essential to assess Transverse Atlanto-Axial Ligament (TAL) and Alar ligament integrity, spinal cord edema, or epidural hematoma.",
                "th": "เอกซเรย์คลื่นแม่เหล็กไฟฟ้า (MRI) ประเมินความสมบูรณ์ของเอ็น Transverse / Alar ligament และรอยบวมกดทับไขสันหลัง"
              }
            }
          ],
          "types": [
            {
              "type": "Anderson I",
              "name": {
                "en": "Anderson-D'Alonzo Type I (Odontoid Tip Avulsion - STABLE)",
                "th": "Anderson-D'Alonzo Type I (ปลายเดือยหักกะเทาะ - มั่นคง)"
              },
              "description": {
                "en": "Avulsion fracture of the superior tip of the odontoid process at the attachment of the alar ligament\nIntact C1-C2 stability and main dens body\nVery rare (<5% of odontoid fractures)\nStable injury pattern with excellent prognosis",
                "th": "รอยหักกะเทาะบริเวณยอดปลายสุดของเดือย C2 (Odontoid tip) ตรงจุดเกาะของเอ็น Alar ligament\nความมั่นคงของ C1-C2 และตัวเดือยหลักยังคง **สมบูรณ์ดี**\nพบน้อยมาก (<5% ของ Odontoid fractures)\nมีความมั่นคงสูง ผลการรักษาดีเยี่ยม"
              },
              "moi": {
                "en": "Forced rotation or lateral flexion of the head pulling alar ligament.",
                "th": "การหมุนหรือเอียงศีรษะอย่างรุนแรงดึงกระชากเอ็น Alar ligament"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Avulsion fracture of the superior tip of the odontoid process above the transverse ligament; alar/apical ligament insertion; mechanically stable atlantoaxial complex; conservative immobilization in a rigid cervical collar for 6–8 weeks yields >99% union.",
                  "th": "รอยหักกะเทาะยอดปลายเดือย C2 เหนือแนวเอ็น Transverse ligament จุดเกาะของเอ็น Alar ligament โครงสร้างข้อ C1–C2 ยังคงมั่นคง รักษาแบบไม่ผ่าตัดโดยใส่เฝือกคอชนิดแข็ง (Rigid Collar) 6–8 สัปดาห์ กระดูกเชื่อมติด >99%"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Isolated Anderson-D'Alonzo Type I odontoid tip avulsion fractures with intact C1–C2 alignment",
                    "th": "• กระดูกยอดเดือย C2 หักกะเทาะ Type I โดยแนวข้อ C1–C2 ยังเรียงตัวปกติ"
                  },
                  "method": {
                    "en": "• Rigid cervical collar (Miami J or Aspen collar) for 6–8 weeks for comfort and symptom control",
                    "th": "• ใส่เฝือกคอชนิดแข็ง (Miami J หรือ Aspen) นาน 6–8 สัปดาห์เพื่อระงับปวดและประคองคอ"
                  },
                  "rehabilitation": {
                    "en": "• Wean collar at 6–8 weeks as pain subsides; begin gentle active range of motion",
                    "th": "• ปลดเฝือกคอที่ 6–8 สัปดาห์เมื่อหายปวด; เริ่มฝึกขยับคอเบาๆ"
                  },
                  "pitfalls": {
                    "en": "• Misdiagnosing an Occipitocervical Dislocation (Atlanto-Occipital Dissociation) as an isolated Type I avulsion fracture; evaluate CCJ alignment metrics (BDI/BAI, Powers ratio) on CT/MRI",
                    "th": "• วินิจฉัยผิดพลาดระหว่างข้อต่อกะโหลก-คอหลุด (Atlanto-Occipital Dislocation) กับ Type I แตกกะเทาะ; ต้องวัดมุมและระยะ BDI/BAI และ Powers ratio บน CT/MRI เสมอ"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Strictly not indicated unless part of a devastating atlanto-occipital dissociation",
                    "th": "• ไม่มีข้อบ่งชี้ในการผ่าตัด เว้นแต่เกิดร่วมกับข้อกะโหลกศีรษะหลุด (Atlanto-occipital Dissociation)"
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
                    "en": "• Overtreatment of a benign, stable avulsion fracture",
                    "th": "• ผ่าตัดเกินความจำเป็นในรอยหักที่ไม่มีอันตราย"
                  }
                }
              },
              "illustrationId": "",
              "xrayDescription": {
                "en": "Small oblique avulsion fragment off the tip of the odontoid process.",
                "th": "เห็นชิ้นกระดูกกะเทาะเล็กๆ ตรงปลายยอดเดือย C2"
              }
            },
            {
              "type": "Anderson II",
              "name": {
                "en": "Anderson-D'Alonzo Type II (Odontoid Base Fracture - HIGH NONUNION RISK)",
                "th": "Anderson-D'Alonzo Type II (โคนเดือยหัก - เสี่ยงกระดูกไม่ติดสูง 30-40%)"
              },
              "description": {
                "en": "Fracture line through the base of the odontoid process where it joins the C2 body (~60-70% of odontoid fractures)\nHIGH RATE OF NONUNION (30-40% overall, up to 60-80% in elderly >65 years) due to watershed blood supply and small cortical contact area\nUnstable fracture pattern requiring surgical consideration",
                "th": "รอยหักพาดผ่านโคนเดือย C2 ตรงจุดต่อเข้ากับตัวกระดูก C2 body (พบบ่อยที่สุด ~60-70%)\n**อัตรากระดูกไม่ติดสูงมาก (30-40% ทั่วไป และสูงถึง 60-80% ในผู้สูงอายุ >65 ปี)** เนื่องจากเลือดมาเลี้ยงน้อยและมีพื้นที่หน้าตัดกระดูกแคบ\nรอยหักไม่มั่นคง จำเป็นต้องพิจารณาผ่าตัด"
              },
              "moi": {
                "en": "Hyper-extension or hyper-flexion injury in falls or motor vehicle accidents.",
                "th": "การแหงนคอหรือก้มคอรุนแรงจากการล้ม หรืออุบัติเหตุทางถนน"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Transverse fracture through narrow watershed base of dens; high nonunion risk (30%–40% overall, >60%–80% in elderly >65 years); Halo-vest trial acceptable ONLY in young non-smokers with <5 mm displacement and <10° tilt; surgical stabilization (Anterior Odontoid Screw if fracture line horizontal/oblique posterior-down, or C1–C2 Posterior Fusion if comminuted/osteoporotic/transverse ligament torn) is preferred, especially in elderly to avoid high halo-related mortality.",
                  "th": "รอยหักโคนเดือย C2 ในเขตอับเลือด เสี่ยงกระดูกไม่ติดสูง (30%–40% ในคนทั่วไป, >60%–80% ในผู้สูงอายุ >65 ปี); การใส่ Halo-vest พิจารณาเฉพาะผู้ป่วยอายุน้อย ไม่สูบบุหรี่ และกระดูกเคลื่อน <5 มม. เอียง <10°; การผ่าตัดดามกระดูก (ผ่าตัดยึดสกรูด้านหน้า Anterior Odontoid Screw หรือผ่าตัดเชื่อม C1–C2 ด้านหลัง) เป็นการรักษาที่แนะนำ โดยเฉพาะในผู้สูงอายุเพื่อเลี่ยงอัตราตายสูงจากการใส่ Halo-vest"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Young patients (<50–65 years) with strictly non-displaced fractures (<2 mm displacement, <5° angulation, no comminution, non-smoker)\n• Non-surgical candidates with prohibitive anesthetic risk (Rigid collar for comfort / palliative care)",
                    "th": "• ผู้ป่วยอายุน้อย (<50–65 ปี) ที่กระดูกไม่เคลื่อนตัว (<2 มม., เอียง <5°, ไม่มีชิ้นแตกย่อย, ไม่สูบบุหรี่)\n• ผู้ป่วยที่มีความเสี่ยงต่อการดมยาสลบสูงมากจนผ่าตัดไม่ได้ (ใส่เฝือกคอแข็งประคองอาการ)"
                  },
                  "method": {
                    "en": "• Halo-vest immobilization for 10–12 weeks OR Rigid Cervical Collar (Miami J) with accepted 20–30% nonunion risk",
                    "th": "• ใส่ชุดอุปกรณ์ Halo-vest นาน 10–12 สัปดาห์ หรือใส่เฝือกคอชนิดแข็ง (Miami J) โดยยอมรับความเสี่ยงกระดูกไม่ติด 20–30%"
                  },
                  "rehabilitation": {
                    "en": "• Strict biweekly upright radiographs; CT scan at 12 weeks to assess fusion prior to halo/collar removal",
                    "th": "• ตรวจเอกซเรย์ท่ายืนทุก 2 สัปดาห์; ทำ CT scan ที่ 12 สัปดาห์เพื่อยืนยันกระดูกติดก่อนถอดอุปกรณ์"
                  },
                  "pitfalls": {
                    "en": "• Using Halo-vest in elderly patients (>65 yrs) causes severe cardiopulmonary complications, aspiration pneumonia, and up to 42% 1-year mortality\n• Cigarette smoking increases nonunion rate fourfold",
                    "th": "• ใส่ Halo-vest ในผู้สูงอายุ (>65 ปี) ก่อให้เกิดภาวะแทรกซ้อนทางปอดรุนแรง ปอดบวมสำลัก และอัตราตายสูงถึง 42% ใน 1 ปี\n• การสูบบุหรี่เพิ่มอัตรากระดูกไม่ติดขึ้น 4 เท่า"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Primary Operative Criteria:\n  1. Age ≥ 65 years\n  2. Displacement ≥ 5 mm or Angulation ≥ 10°\n  3. Nonunion risk factors (smoking, fracture gap > 1 mm, comminuted Type IIA)\n  4. Inability to tolerate Halo-vest or polytrauma",
                    "th": "• ข้อบ่งชี้หลักในการผ่าตัด:\n  1. ผู้ป่วยอายุ ≥ 65 ปี\n  2. กระดูกเคลื่อน ≥ 5 มม. หรือมุมเอียง ≥ 10°\n  3. มีปัจจัยเสี่ยงกระดูกไม่ติด (สูบบุหรี่, ช่องว่างรอยหัก > 1 มม., มีชิ้นแตกย่อย Type IIA)\n  4. ทนใส่ Halo-vest ไม่ได้ หรือบาดเจ็บหลายระบบ"
                  },
                  "method": {
                    "en": "• Technique 1: Anterior Direct Odontoid Screw Fixation (Motion-preserving):\n  - Indicated for acute (<6 months) horizontal or anterior-superior/posterior-inferior oblique fractures with intact transverse ligament, reducible fracture, and good bone quality\n  - 1 or 2 cannulated 3.5–4.5 mm partially threaded lag screws placed via retropharyngeal approach\n• Technique 2: Posterior C1–C2 Instrumented Fusion (Harms technique):\n  - Indicated for anterior-inferior oblique fractures (barrel-stave angle), comminution (Type IIA), osteoporosis, nonunion (>6 months), torn TAL, or barrel chest preventing anterior trajectory\n  - C1 lateral mass screws + C2 pedicle/pars/isthmus screws connected with rods + autologous bone graft",
                    "th": "• วิธีที่ 1: ผ่าตัดขันสกรูยึดโคนเดือยทางด้านหน้า (Anterior Odontoid Screw - สงวนการหมุนของคอ):\n  - เหมาะสำหรับรอยหักเฉียบพลัน (<6 เดือน) แนวขวางหรือเฉียงลงด้านหลัง โดยเอ็น TAL สมบูรณ์ กระดูกดึงเข้าที่ได้ และเนื้อกระดูกแข็งแรง\n  - ขันสกรู Cannulated Lag Screw ขนาด 3.5–4.5 มม. 1 หรือ 2 ตัวผ่านช่องคอด้านหน้า\n• วิธีที่ 2: ผ่าตัดเชื่อมตรึงกระดูกคอ C1–C2 ทางด้านหลัง (Harms Posterior C1–C2 Fusion):\n  - เหมาะสำหรับรอยหักเฉียงลงด้านหน้า, มีชิ้นแตกย่อย (Type IIA), กระดูกพรุนในผู้สูงอายุ, กระดูกไม่ติดเรื้อรัง (>6 เดือน), เอ็น TAL ขาด หรือหน้าอกหนาจนวางมุมสกรูหน้าไม่ได้\n  - ยึด C1 Lateral Mass + C2 Pedicle/Pars Screws ร่วมกับดามแท่ง Rods และใส่กระดูกปลูก"
                  },
                  "rehabilitation": {
                    "en": "• Anterior screw: Rigid collar for 4–6 weeks; immediate full cervical rotation preserved\n• Posterior C1–C2 fusion: Rigid collar for 6–8 weeks; patient warned of 50% permanent loss of neck rotation",
                    "th": "• ผ่าตัดสกรูด้านหน้า: ใส่เฝือกคอแข็ง 4–6 สัปดาห์ สงวนพิสัยการหมุนคอได้ 100%\n• ผ่าตัดเชื่อม C1–C2 ด้านหลัง: ใส่เฝือกคอแข็ง 6–8 สัปดาห์ สูญเสียการหมุนคอถาวรประมาณ 50%"
                  },
                  "pitfalls": {
                    "en": "• Placing anterior screw across an anterior-inferior oblique fracture line causing fracture displacement ('plowing effect')\n• Vertebral artery injury during C1–C2 posterior instrumentation",
                    "th": "• ขันสกรูด้านหน้าในรอยหักแนวเฉียงลงด้านหน้า ทำให้รอยหักไถลเคลื่อนแยกตัวออก\n• บาดเจ็บต่อหลอดเลือดแดง Vertebral Artery ระหว่างขันสกรู C1–C2 ด้านหลัง"
                  }
                }
              },
              "illustrationId": "",
              "xrayDescription": {
                "en": "Transverse or oblique fracture line through the narrow neck/base of the odontoid process.",
                "th": "เห็นรอยหักแนวขวางหรือเฉียงพาดผ่านโคนเดือย C2"
              }
            },
            {
              "type": "Anderson III",
              "name": {
                "en": "Anderson-D'Alonzo Type III (C2 Body Extension Fracture - HIGH UNION RATE)",
                "th": "Anderson-D'Alonzo Type III (หักลุกลามเข้าลำตัวกระดูก C2 - กระดูกติดสูง >90%)"
              },
              "description": {
                "en": "Fracture line extends deeply into the cancellous body of the C2 axis bone (~20-30% of odontoid fractures)\nExcellent vascularity and large contact area of cancellous bone\nHIGH UNION RATE (>90-95%) with non-operative care",
                "th": "รอยหักลึกลงไปในเนื้อกระดูกพรุนของลำตัวกระดูก C2 (Axis body) (~20-30%)\nมีเลือดมาเลี้ยงอุดมสมบูรณ์และมีพื้นที่หน้าตัดสัมผัสกว้างมาก\n**อัตรากระดูกติดสูงมาก (>90-95%)** โดยการรักษาแบบไม่ผ่าตัด"
              },
              "moi": {
                "en": "Flexion or extension combined with heavy axial compression.",
                "th": "การก้มหรือแหงนคอร่วมกับแรงกดอัดตามแนวแกนอย่างหนัก"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Fracture line extends deeply into the rich cancellous body of C2 axis; large surface contact area with abundant vascular supply; high union rate (>90%–95%) with conservative immobilization in rigid cervical collar or halo; surgery reserved strictly for severe displacement (>5 mm), angulation (>10°), or neurologic compromise.",
                  "th": "รอยหักลามลึกลงไปในเนื้อกระดูกพรุนของลำตัว C2 พื้นที่สัมผัสกว้างและเลือดมาเลี้ยงอุดมสมบูรณ์ อัตรากระดูกเชื่อมติดสูงมาก (>90%–95%) ด้วยการรักษาแบบไม่ผ่าตัดใส่เฝือกคอชนิดแข็งหรือ Halo-vest; ผ่าตัดเฉพาะรายที่กระดูกเคลื่อนมาก (>5 มม.), ก้มเอียงมาก (>10°) หรือมีการกดทับเส้นประสาท"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Non-displaced or minimally displaced Anderson Type III fractures (<5 mm translation, <10° angulation, neurologically intact)",
                    "th": "• กระดูก C2 หัก Type III ชนิดไม่เคลื่อนตัวหรือเคลื่อนน้อย (เคลื่อน <5 มม., เอียง <10°, ระบบประสาทปกติ)"
                  },
                  "method": {
                    "en": "• Rigid cervical collar (Miami J or Aspen) for 8–12 weeks OR Halo-vest for 8–12 weeks if significant initial displacement was reduced closed",
                    "th": "• ใส่เฝือกคอชนิดแข็ง (Miami J หรือ Aspen) นาน 8–12 สัปดาห์ หรือใส่ Halo-vest 8–12 สัปดาห์หากมีการเคลื่อนตัวช่วงแรก"
                  },
                  "rehabilitation": {
                    "en": "• Follow-up radiographs at 2, 6, 8, and 12 weeks; weaning to soft collar at 10–12 weeks followed by isometric neck strengthening",
                    "th": "• เอกซเรย์ติดตามอาการที่ 2, 6, 8, 12 สัปดาห์; เปลี่ยนเป็นเฝือกอ่อนที่ 10–12 สัปดาห์และเริ่มบริหารกล้ามเนื้อคอ"
                  },
                  "pitfalls": {
                    "en": "• Overlooking high-riding vertebral artery anatomy or associated C2 superior articular facet comminution",
                    "th": "• มองข้ามความผิดปกติของหลอดเลือดแดง Vertebral Artery หรือผิวข้อต่อ C2 facet แตกยุบร่วมด้วย"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Severe irreducible displacement (>5 mm translation, >10° severe angulation)\n• Significant facet joint subluxation or neurological deficit\n• Symptomatic nonunion or malunion",
                    "th": "• กระดูกเคลื่อนตัวรุนแรงจัดไม่เข้าที่ (เคลื่อน >5 มม., เอียง >10°)\n• ข้อต่อ Facet หลุดเกย หรือมีอาการกดทับระบบประสาท\n• ภาวะกระดูกไม่ติดหรือติดผิดรูปและมีอาการปวดเรื้อรัง"
                  },
                  "method": {
                    "en": "• Posterior C1–C2 Instrumented Fusion (Harms technique) with lateral mass and pedicle screws\n• Anterior Odontoid Screw Fixation is generally NOT recommended for Type III due to poor distal screw purchase in comminuted C2 body",
                    "th": "• ผ่าตัดเชื่อมตรึงกระดูกคอ C1–C2 ด้านหลัง (Harms technique) ด้วยสกรูยึด C1 Lateral Mass + C2 Pedicle/Pars screws\n• ไม่แนะนำให้ขันสกรูเดือยทางด้านหน้า (Anterior Screw) สำหรับ Type III เนื่องจากตัวกระดูก C2 แตกทำให้สกรูยึดไม่อยู่"
                  },
                  "rehabilitation": {
                    "en": "• Rigid collar for 6 weeks postoperatively; active shoulder and gentle neck ROM at 6 weeks",
                    "th": "• ใส่เฝือกคอแข็ง 6 สัปดาห์หลังผ่าตัด; เริ่มขยับไหล่และคอเบาๆ ที่ 6 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Attempting anterior odontoid screw fixation resulting in poor screw purchase and fixation cutout through fractured C2 body cancellous bone",
                    "th": "• ดันทุรังขันสกรูเดือยทางด้านหน้าจนสกรูหลุดถอนจากเนื้อกระดูก C2 body ที่แตก"
                  }
                }
              },
              "illustrationId": "",
              "xrayDescription": {
                "en": "Fracture line extending beneath odontoid base deep into C2 body cancellous bone.",
                "th": "เห็นรอยหักจากโคนเดือยล้ำลึกลงไปในเนื้อกระดูกของลำตัว C2"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "lower-cervical",
      "name": {
        "en": "Lower Cervical Spine (C3–C7)",
        "th": "กระดูกสันหลังคอส่วนล่าง (C3–C7)"
      },
      "regionConcept": {
        "physicalExam": [
          {
            "sign": "SLIC Score Assessment",
            "positive": {
              "en": "SLIC score > 4 indicates surgical stabilization (evaluates Morphology, PLC integrity, & Neurological status)",
              "th": "คะแนน SLIC > 4 บ่งชี้ว่าควรผ่าตัดรักษา (ประเมินจาก Morphology, ความสมบูรณ์ของเอ็น PLC และสถานะระบบประสาท)"
            }
          }
        ],
        "acceptableAlignment": [
          {
            "parameter": {
              "en": "Translational Displacement",
              "th": "การเคลื่อนตัวของข้อต่อ (Translation)"
            },
            "threshold": "< 3.5 mm",
            "note": {
              "en": "> 3.5mm indicates severe subaxial instability",
              "th": "> 3.5มม. บ่งบอกถึงภาวะไม่มั่นคงรุนแรง"
            }
          },
          {
            "parameter": {
              "en": "Kyphotic Angulation",
              "th": "มุมก้มคอผิดรูป (Kyphosis)"
            },
            "threshold": "< 11°",
            "note": {
              "en": "> 11° relative kyphosis indicates posterior ligamentous complex rupture",
              "th": "> 11 องศา บ่งบอกว่าเอ็นยึดด้านหลังฉีกขาด"
            }
          }
        ],
        "redFlags": [
          {
            "en": "Bilateral Facet Dislocation (100% PLC disruption, severe canal compromise & spinal cord injury)",
            "th": "ข้อต่อ Facet หลุดสองข้าง (เอ็นยึดฉีกขาด 100% เสี่ยงอัมพาตครึ่งท่อนหรือสี่แผลมอย่างรุนแรง)"
          }
        ],
        "clinicalPearls": [
          {
            "en": "Unilateral Facet Dislocation presents with ~25% anterior translation, while Bilateral Facet Dislocation presents with ~50% translation on lateral X-ray.",
            "th": "Facet หลุดข้างเดียวจะเห็นกระดูกเคลื่อนไปข้างหน้า ~25% แต่ถ้าหลุด 2 ข้างจะเคลื่อนไปข้างหน้า ~50%"
          }
        ]
      },
      "classifications": [
        {
          "system": "SLIC Score",
          "fullName": {
            "en": "Subaxial Cervical Spine Injury Classification (SLIC System)",
            "th": "ระบบการจำแนกการบาดเจ็บกระดูกสันหลังคอส่วนล่าง SLIC System (Vaccaro)"
          },
          "description": {
            "en": "Point-based scoring system for subaxial cervical spine injuries (C3-C7) evaluating Fracture Morphology, Disruption of Ligamentous Complex (DLC) integrity, and Neurological Status. SLIC score <4 = Conservative, SLIC score =4 = Equivocal, SLIC score >4 = Operative.",
            "th": "ระบบให้คะแนนการบาดเจ็บกระดูกสันหลังคอ C3-C7 (SLIC Score) ประเมิน 3 หมวด: ลักษณะรอยหัก (Morphology), ความสมบูรณ์ของหมอนรองและเอ็นยึด (PLC) และระบบประสาท (Neurology) โดยคะแนน <4 รักษาไม่ผ่าตัด, =4 พิจารณาตามความเหมาะสม, >4 แนะนำผ่าตัด"
          },
          "concept": {
            "title": {
              "en": "SLIC Score Clinical Concept",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ SLIC Score Classification"
            },
            "corePrinciple": {
              "en": "Point-based algorithm for C3–C7 injuries integrating 3 independent categories: (1) Fracture Morphology (0–4 pts), (2) Disruption of Ligamentous Complex / DLC (0–2 pts), and (3) Neurological Status (0–4 pts).",
              "th": "อัลกอริทึมประเมินคะแนนการบาดเจ็บกระดูกคอ C3–C7 โดยรวม 3 หมวดหลัก: (1) ลักษณะรอยหัก (0–4 คะแนน), (2) ความสมบูรณ์ของเอ็นยึดและหมอนรอง DLC (0–2 คะแนน) และ (3) อาการทางระบบประสาท (0–4 คะแนน)"
            },
            "rules": [
              {
                "en": "SLIC Score < 4: Non-operative management indicated (Rigid Cervical Collar for 6–12 weeks).",
                "th": "คะแนน SLIC < 4: แนะนำรักษาแบบไม่ผ่าตัด (ใส่อุปกรณ์ดามคอชนิดแข็ง 6–12 สัปดาห์)"
              },
              {
                "en": "SLIC Score = 4: Equivocal / Borderline (Surgeon discretion based on comorbidities, pain, and sagittal alignment).",
                "th": "คะแนน SLIC = 4: ก้ำกึ่ง (ขึ้นกับดุลยพินิจของแพทย์ โรคประจำตัว ความปวด และแนวโค้งกระดูกคอ)"
              },
              {
                "en": "SLIC Score > 4: OPERATIVE INDICATION (Anterior/Posterior Cervical Decompression & Surgical Fixation).",
                "th": "คะแนน SLIC > 4: มีข้อบ่งชี้ผ่าตัด (ผ่าตัดเปิดกดทับและยึดดามกระดูกคอ)"
              },
              {
                "en": "Neurological Modifier (+1 pt): Ongoing or progressive cord compression warrants urgent surgical decompression.",
                "th": "ปัจจัยเสริมระบบประสาท (+1 คะแนน): หากมีอาการกดทับไขสันหลังรุนแรงขึ้นเรื่อยๆ มีข้อบ่งชี้ผ่าตัดฉุกเฉิน"
              }
            ],
            "clinicalSignificance": [
              {
                "en": "DLC disruption adds 2 critical points, often turning a non-operative case into an operative one. Look for focal interspinous widening or facet asymmetry; obtain MRI (STIR) if CT is equivocal.",
                "th": "การฉีกขาดของเอ็นยึด DLC เพิ่มคะแนน 2 คะแนน ซึ่งมักเปลี่ยนการรักษาเป็นผ่าตัด ต้องสังเกตช่องว่าง interspinous และส่ง MRI เมื่อ CT ไม่ชัดเจน"
              },
              {
                "en": "Incomplete spinal cord injury (+3 pts) strongly drives score >4 and benefits from surgical decompression within 24 hours of injury.",
                "th": "ภาวะไขสันหลังบาดเจ็บบางส่วน (+3 คะแนน) ช่วยผลักดันคะแนน >4 และควรผ่าตัดคลายการกดทับภายใน 24 ชั่วโมง"
              }
            ]
          },
          "investigations": [
            {
              "name": "Standard C-Spine X-Ray Series (AP, Lateral, Swimmer's View)",
              "details": {
                "en": "Standard AP, Lateral (must visualize C7-T1 junction), and Swimmer's view. Assesses alignment, kyphosis, vertebral height loss, and prevertebral soft tissue swelling (>6mm at C2, >20mm at C6).",
                "th": "ภาพเอกซเรย์คอมาตรฐาน (AP, Lateral ต้องเห็น C7-T1, Swimmer's view) ประเมินแนวแนวกระดูกคอ, การยุบตัว และรอยบวมของเนื้อเยื่อหน้ากระดูกคอ"
              },
              "imageUrl": "/images/investigations/cspine/lateral_cspine_view.jpg"
            },
            {
              "name": "Multiplanar 3D CT Scan of Cervical Spine",
              "details": {
                "en": "High-resolution 3D CT scan. Gold standard to map fracture morphology (Compression vs Burst vs Translation), detect subtle facet joint subluxation/locking, and measure spinal canal occlusion.",
                "th": "เอกซเรย์คอมพิวเตอร์ 3D ความละเอียดสูง เป็นมาตรฐานหลักในการจำแนกประเภท Compression, Burst หรือ Translation และดูข้อต่อ Facet ล็อค"
              }
            },
            {
              "name": "MRI Cervical Spine (T1, T2, STIR)",
              "details": {
                "en": "Cervical spine MRI. Mandatory to assign Disruption of Ligamentous Complex (DLC) score (Intact vs Indeterminate vs Disrupted), evaluate spinal cord contusion/edema, and assess herniated discs.",
                "th": "เอกซเรย์คลื่นแม่เหล็กไฟฟ้า (MRI) จำเป็นอย่างยิ่งในการประเมินความสมบูรณ์ของหมอนรองและเอ็นยึด (PLC), รอยบวมของไขสันหลัง และหมอนรองกระดูกเคลื่อนทับเส้นประสาท"
              }
            }
          ],
          "types": [
            {
              "type": "SLIC < 4",
              "name": {
                "en": "SLIC Score < 4 (Conservative Management - STABLE)",
                "th": "SLIC Score < 4 (แนะนำรักษาแบบไม่ผ่าตัด - มั่นคง)"
              },
              "description": {
                "en": "Total SLIC score is LESS THAN 4 points\nIndicates mechanically STABLE injury pattern with intact or minimally injured Disruption of Ligamentous Complex (DLC) and no progressive neurological deficit\nExamples: Simple compression fracture (1 pt) + intact DLC (0 pt) + neurologically intact (0 pt) = 1 point",
                "th": "ผลรวมคะแนน TLICS Score **น้อยกว่า 4 คะแนน**\nบ่งบอกถึงรอยหักที่มีความ **มั่นคงเชิงกลศาสตร์** หมอนรองและเอ็นยึด (PLC) ยังสมบูรณ์ และไม่มีอาการทางระบบประสาทแย่ลง\nตัวอย่าง: รอยหักยุบธรรมดา (1 คะแนน) + DLC ปกติ (0 คะแนน) + ระบบประสาทปกติ (0 คะแนน) = 1 คะแนน"
              },
              "moi": {
                "en": "Low-to-moderate energy compression or axial load.",
                "th": "แรงกดอัดตามแนวแกนพลังงานต่ำถึงปานกลาง"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Total SLIC score < 4 points; represents mechanically stable subaxial fracture (e.g., simple compression, intact/indeterminate DLC, neurologically intact); non-operative immobilization in a rigid cervical orthosis for 8–12 weeks achieves predictable stability and bony healing without surgery.",
                  "th": "คะแนน SLIC รวม < 4 คะแนน แสดงถึงการบาดเจ็บกระดูกคอที่มั่นคงทางกลศาสตร์ (เช่น รอยหักยุบธรรมดา เอ็น DLC สมบูรณ์ และระบบประสาทปกติ) รักษาแบบไม่ผ่าตัดโดยใส่เฝือกดามคอชนิดแข็ง 8–12 สัปดาห์ กระดูกเชื่อมติดได้ดีโดยไม่ต้องผ่าตัด"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Total SLIC score ≤ 3 points (Mechanically stable fracture pattern, intact DLC, neurologically intact)",
                    "th": "• คะแนน SLIC รวม ≤ 3 คะแนน (กระดูกหักชนิดมั่นคง เอ็น DLC สมบูรณ์ และระบบประสาทปกติ)"
                  },
                  "method": {
                    "en": "• Rigid cervical orthosis (Miami J or Aspen collar) worn continuously for 8–12 weeks with serial upright radiographs at 2, 4, 8, and 12 weeks",
                    "th": "• ใส่เฝือกดามคอชนิดแข็ง (Miami J หรือ Aspen) ต่อเนื่อง 8–12 สัปดาห์ พร้อมเอกซเรย์ท่ายืนติดตามผลที่ 2, 4, 8, 12 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Wean collar after 8–12 weeks once upright stability and bony healing are confirmed; isometric neck extensor strengthening",
                    "th": "• ปลดเฝือกคอหลัง 8–12 สัปดาห์เมื่อเอกซเรย์กระดูกติดมั่นคง; เริ่มบริหารกล้ามเนื้อคอด้านหลัง"
                  },
                  "pitfalls": {
                    "en": "• Failure to identify occult posterior ligamentous injury (DLC disruption) on initial radiographs; obtain STIR MRI if interspinous widening is questionable",
                    "th": "• ตรวจไม่พบการบาดเจ็บของเอ็นส่วนหลัง (DLC ขาด) จากภาพเอกซเรย์ธรรมดา; ควรตรวจ MRI หากระยะช่องว่าง interspinous ดูกว้างผิดปกติ"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Strictly not indicated for stable SLIC < 4 scores",
                    "th": "• ไม่มีข้อบ่งชี้ในการผ่าตัดสำหรับคะแนน SLIC < 4"
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
                    "en": "• Surgical overtreatment of stable fractures exposing patients to unnecessary instrumentation risks",
                    "th": "• ผ่าตัดโดยไม่จำเป็นในรอยหักที่มั่นคง เพิ่มความเสี่ยงต่อภาวะแทรกซ้อนจากการผ่าตัด"
                  }
                }
              },
              "illustrationId": "",
              "xrayDescription": {
                "en": "Simple anterior compression fracture or isolated spinous process fracture with intact posterior alignment.",
                "th": "เห็นรอยหักยุบตัวเฉพาะส่วนหน้า หรือหักเฉพาะส่วนยอดกระดูก โดยแนวข้อต่อด้านหลังยังเรียงตัวปกติ"
              }
            },
            {
              "type": "SLIC = 4",
              "name": {
                "en": "SLIC Score = 4 (Equivocal / Surgeon's Discretion)",
                "th": "SLIC Score = 4 (กึ่งก้ำกึ่ง - พิจารณาผ่าตัดหรือดามตามความเหมาะสม)"
              },
              "description": {
                "en": "Total SLIC score is EXACTLY 4 points\nEQUIVOCAL injury pattern where treatment choice depends on patient age, baseline comorbidities, pain level, and surgeon experience\nExample A: Burst fracture (2 pt) + disrupted DLC (2 pt) + intact neuro (0 pt) = 4 points\nExample B: Compression fracture (1 pt) + intact DLC (0 pt) + incomplete cord injury (3 pt) = 4 points",
                "th": "ผลรวมคะแนน TLICS Score **เท่ากับ 4 คะแนนพอดี**\nเป็นรอยหักชนิดกึ่งก้ำกึ่ง (Equivocal) การตัดสินใจรักษาขึ้นอยู่กับอายุ โรคประจำตัว ระดับความปวด และดุลยพินิจของแพทย์ผู้รักษา\nตัวอย่าง: Burst fracture (2 คะแนน) + เอ็น DLC ขาด (2 คะแนน) + ประสาทปกติ (0 คะแนน) = 4 คะแนน"
              },
              "moi": {
                "en": "Moderate energy flexion-compression or burst impact.",
                "th": "แรงก้มคออัดกระแทกพลังงานปานกลาง"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Total SLIC score = 4 points; borderline/equivocal stability; treatment individualized based on patient factors: operative stabilization favored in young active patients, burst fractures with canal compromise, or persistent severe pain; non-operative rigid bracing favored in elderly, medically frail, or low-demand patients.",
                  "th": "คะแนน SLIC รวม = 4 คะแนน อยู่ในเกณฑ์ก้ำกึ่ง (Equivocal); พิจารณาตามลักษณะเฉพาะรายบุคคล: แนะนำผ่าตัดในผู้ป่วยอายุน้อย, กระดูกแตก burst ยื่นเข้าช่องไขสันหลัง หรือปวดรุนแรง; แนะนำใส่เฝือกคอในผู้สูงอายุ, ผู้ป่วยที่มีโรคร่วมหลายอย่าง หรือมีความเสี่ยงผ่าตัดสูง"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• Medically frail patients, poor operative candidates, or stable burst patterns without neurological compromise and minimal kyphosis (<15°)",
                    "th": "• ผู้ป่วยที่มีโรคร่วมเสี่ยงสูงต่อการผ่าตัด หรือกระดูกแตก Burst ที่ไม่มีอาการทางระบบประสาทและคอค่อมน้อย (<15°)"
                  },
                  "method": {
                    "en": "• Rigid cervical collar (Miami J/Aspen) or Halo-vest for 10–12 weeks with close weekly radiographic monitoring",
                    "th": "• ใส่เฝือกคอชนิดแข็ง (Miami J/Aspen) หรือ Halo-vest นาน 10–12 สัปดาห์ พร้อมเอกซเรย์ตรวจติดตามอย่างใกล้ชิดทุกสัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Serial upright radiographs; gentle active motion after radiographic union at 10–12 weeks",
                    "th": "• เอกซเรย์ติดตามแนวกระดูก; เริ่มขยับคอเบาๆ เมื่อกระดูกติดที่ 10–12 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Progressive late post-traumatic kyphotic deformity or delayed neurological deficit requiring late reconstructive surgery",
                    "th": "• แนวกระดูกคอค่อยๆ ค่อมตัวลงเรื่อยๆ หรือเกิดอาการทางระบบประสาทล่าช้าจนต้องผ่าตัดแก้ไขในภายหลัง"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Young active patients desiring early mobilization\n• Significant vertebral body collapse (>50% height loss), canal occlusion >30%–50%, or kyphotic angle >15°\n• Incomplete neurological deficit",
                    "th": "• ผู้ป่วยอายุน้อยที่ต้องการลุกขยับตัวได้เร็ว\n• ลำตัวกระดูกยุบตัว >50%, กระดูกแตกดันช่องไขสันหลัง >30%–50% หรือคอค่อม >15°\n• มีอาการบาดเจ็บของเส้นประสาทหรือไขสันหลังบางส่วน"
                  },
                  "method": {
                    "en": "• Anterior Cervical Discectomy and Fusion (ACDF) or Anterior Cervical Corpectomy and Fusion (ACCF) with expandable/mesh cage and anterior locking plate\n• Alternative: Posterior lateral mass screw-rod instrumented fusion (C3–C6) ± laminectomy",
                    "th": "• ผ่าตัดเชื่อมหมอนรองกระดูกคอด้านหน้า (ACDF) หรือตัดลำตัวกระดูกเชื่อมข้อ (ACCF พร้อม Cage และ Locking Plate)\n• ทางเลือก: ผ่าตัดดามสกรู Lateral Mass Screws ทางด้านหลัง (C3–C6) ± ตัดเปิดช่องไขสันหลัง (Laminectomy)"
                  },
                  "rehabilitation": {
                    "en": "• Rigid collar for 4–6 weeks; immediate out-of-bed mobilization; physical therapy at 6 weeks",
                    "th": "• ใส่เฝือกคอแข็ง 4–6 สัปดาห์; ลุกเดินจากเตียงได้ทันที; เริ่มทำกายภาพบำบัดที่ 6 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Construct pullout in osteoporotic bone if anterior single-level fixation is inadequate for comminuted fractures",
                    "th": "• แผ่นเหล็กหรือสกรูด้านหน้าถอนหลุดในผู้ป่วยกระดูกบางหากยึดตรึงไม่แข็งแรงพอ"
                  }
                }
              },
              "illustrationId": "",
              "xrayDescription": {
                "en": "Incomplete burst fracture or compression fracture with equivocal posterior interspinous gap widening.",
                "th": "เห็นรอยหักยุบตัวส่วนหลังร่วมกับระยะช่องว่างระหว่างยอดกระดูกกว้างขึ้นเล็กน้อย"
              }
            },
            {
              "type": "SLIC > 4",
              "name": {
                "en": "SLIC Score > 4 (Operative Management - UNSTABLE / NEURO DEFICIT)",
                "th": "SLIC Score > 4 (แนะนำผ่าตัดรักษา - ไม่มั่นคง / บาดเจ็บระบบประสาท)"
              },
              "description": {
                "en": "Total SLIC score is GREATER THAN 4 points\nIndicates mechanically UNSTABLE injury, complete Disruption of Ligamentous Complex (DLC) disruption, or severe neurological deficit\nExample A: Translation/Dislocation (4 pt) + disrupted DLC (2 pt) + incomplete cord injury (3 pt) = 9 points\nExample B: Burst fracture (2 pt) + disrupted DLC (2 pt) + root injury (1 pt) = 5 points",
                "th": "ผลรวมคะแนน TLICS Score **มากกว่า 4 คะแนน**\nบ่งบอกถึงรอยหักที่มีความ **ไม่มั่นคงอย่างรุนแรง**, เอ็นยึด DLC ฉีกขาดสมบูรณ์ หรือมีภาวะบาดเจ็บระบบประสาท\nตัวอย่าง: เคลื่อนหลุด Translation (4 คะแนน) + DLC ขาด (2 คะแนน) + ไขสันหลังบาดเจ็บบางส่วน (3 คะแนน) = 9 คะแนน"
              },
              "moi": {
                "en": "High-energy violent trauma (motor vehicle crash, fall from height, diving accident).",
                "th": "อุบัติเหตุแรงกระแทกพลังงานสูงรุนแรง (รถยนต์ชน, ตกจากที่สูง, ดำน้ำกระแทก)"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Total SLIC score > 4 points; indicates gross biomechanical instability, complete disruption of the ligamentous complex (DLC), or progressive spinal cord injury; urgent surgical decompression (within 24 hours for incomplete cord injury) and rigid anterior/posterior instrumentation is mandatory.",
                  "th": "คะแนน SLIC รวม > 4 คะแนน แสดงถึงความไม่มั่นคงทางชีวกลศาสตร์รุนแรง, เอ็นยึดและหมอนรอง (DLC) ฉีกขาดสมบูรณ์ หรือมีภาวะบาดเจ็บไขสันหลัง; ต้องผ่าตัดลดการกดทับไขสันหลังด่วน (ภายใน 24 ชั่วโมงในผู้ป่วยที่มีอาการอัมพาตบางส่วน) ร่วมกับดามยึดกระดูกอย่างแข็งแรงทางด้านหน้า/หลัง"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly contraindicated (causes catastrophic progressive kyphosis, nonunion, and irreversible spinal cord transection)",
                    "th": "• ห้ามรักษาแบบไม่ผ่าตัดเด็ดขาด (ทำให้คอค่อมผิดรูป กระดูกไม่ติด และไขสันหลังถูกกดทับจนเป็นอัมพาตถาวร)"
                  },
                  "method": {
                    "en": "• Urgent closed reduction / skull traction only as a bridge to definitive surgery",
                    "th": "• การดึงถ่วงกะโหลกศีรษะ (Traction) ทำได้เฉพาะเพื่อรอการผ่าตัดรักษาที่แน่นอนเท่านั้น"
                  },
                  "rehabilitation": {
                    "en": "• N/A",
                    "th": "• N/A"
                  },
                  "pitfalls": {
                    "en": "• Irreversible tetraplegia and chronic neuropathic pain from delayed or missed surgical decompression",
                    "th": "• อัมพาตแขนขาสี่ข้างถาวรและปวดแสบประสาทเรื้อรังจากการผ่าตัดล่าช้า"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All patients with SLIC score ≥ 5 (Translational/rotational dislocations, burst fractures with cord injury or DLC disruption)",
                    "th": "• ผู้ป่วยที่มีคะแนน SLIC ≥ 5 ทุกราย (กระดูกเคลื่อนหลุด Translation, กระดูกแตก Burst ร่วมกับไขสันหลังบาดเจ็บหรือเอ็น DLC ขาด)"
                  },
                  "method": {
                    "en": "• Anterior Decompression & Fusion: ACDF with plate for distractive flexion/facet dislocations after reduction; Corpectomy (ACCF) with titanium mesh cage for burst fractures with canal retropulsion\n• Posterior Instrumented Fusion: Lateral mass screw fixation (Roy-Camille/Magerl technique) with rods ± laminectomy\n• Combined 360° Reconstruction (Anterior + Posterior) for severe 3-column disruption, bilateral facet fracture-dislocations, or severe osteopenia",
                    "th": "• ผ่าตัดเปิดกดทับและเชื่อมข้อด้านหน้า: ACDF พร้อม Locking Plate สำหรับข้อหลุดเกย; Corpectomy (ACCF) พร้อม Mesh cage สำหรับกระดูกแตก Burst ดันช่องไขสันหลัง\n• ผ่าตัดดามยึดด้านหลัง: ขันสกรูยึด Lateral Mass Screws (เทคนิค Magerl) เชื่อมด้วยแท่ง Rods ± ตัดขยายช่องไขสันหลัง Laminectomy\n• ผ่าตัดรอบทิศ 360 องศา (หน้าและหลัง): สำหรับการบาดเจ็บรุนแรง 3 เสา, ข้อ Facet หลุดแตก 2 ข้าง หรือกระดูกพรุนรุนแรง"
                  },
                  "rehabilitation": {
                    "en": "• Rigid cervical collar for 6–8 weeks post-op; early intensive inpatient spinal cord neuro-rehabilitation",
                    "th": "• ใส่เฝือกคอแข็ง 6–8 สัปดาห์; เริ่มทำกายภาพบำบัดฟื้นฟูไขสันหลังและระบบประสาทอย่างเข้มข้นทันที"
                  },
                  "pitfalls": {
                    "en": "• Attempting closed reduction of locked facets in patients with extruded herniated disc without prior MRI, causing cord transection\n• Insufficient construct length failing to span unstable segments",
                    "th": "• ดึงดัดข้อ Facet ที่หลุดล็อคโดยไม่ทำ MRI ตรวจหาหมอนรองกระดูกที่แตกทะลัก ซึ่งอาจถูกเบียดไปตัดไขสันหลังได้\n• ดามกระดูกสั้นเกินไปจนครอบคลุมรอยโรคไม่หมด"
                  }
                }
              },
              "illustrationId": "",
              "xrayDescription": {
                "en": "Gross translational dislocation, locked facets, or complete burst fracture with canal compromise >50%.",
                "th": "เห็นกระดูกคอเคลื่อนหลุดแปลกแนว, ข้อต่อ Facet ล็อคเกยกัน หรือ Burst fracture กดช่องไขสันหลัง >50%"
              }
            }
          ]
        },
        {
          "system": "AO Spine Subaxial",
          "fullName": {
            "en": "AO Spine Subaxial Cervical Spine Injury Classification System",
            "th": "การจำแนกการบาดเจ็บกระดูกสันหลังคอส่วนล่างตามระบบ AO Spine"
          },
          "description": {
            "en": "Comprehensive anatomical classification categorizing subaxial cervical injuries into Type A (Compression injuries), Type B (Distraction / Ligamentous injuries), and Type C (Translational / Displacement injuries), combined with Neurological Status (N0-N4) and Modifiers.",
            "th": "ระบบจำแนก AO Spine สำหรับกระดูกคอส่วนล่าง แบ่งเป็น Type A (แรงกดอัด/ยุบตัว), Type B (แรงดึงถ่าง/เอ็นฉีกขาด), Type C (เคลื่อนหลุดแปลกแนว) ร่วมกับระดับความรุนแรงทางระบบประสาท (N0-N4) และปัจจัยเสริม (M1-M4)"
          },
          "concept": {
            "title": {
              "en": "AO Spine Subaxial Clinical Concept",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ AO Spine Subaxial Classification"
            },
            "corePrinciple": {
              "en": "Hierarchical structural classification categorizing subaxial injuries into Type A (Compression), Type B (Distraction/Tension Band failure), and Type C (Translation/Dislocation), paired with Neurological Status (N0–N4) and Modifiers.",
              "th": "ระบบจำแนกลำดับขั้นทางโครงสร้างแบ่งการบาดเจ็บกระดูกคอ C3–C7 เป็น Type A (แรงกดอัด), Type B (แรงดึงถ่าง/เอ็นขาด) และ Type C (เคลื่อนหลุดแปลกแนว) ร่วมกับระดับระบบประสาท (N0–N4) และปัจจัยเสริม"
            },
            "rules": [
              {
                "en": "Type A (Compression): A0–A2 (Stable, intact PLC) -> Conservative (Rigid Collar). A3–A4 (Burst fracture with canal compromise/neuro deficit) -> Surgical Decompression & Fixation.",
                "th": "Type A (แรงกดอัด): A0–A2 (มั่นคง เอ็นไม่ขาด) -> ใส่เฝือกคอแข็ง; A3–A4 (Burst fracture กดช่องไขสันหลัง/มีอาการประสาท) -> ผ่าตัดเปิดกดทับและยึดดาม"
              },
              {
                "en": "Type B (Distraction): B1 (Posterior osseous failure), B2 (Posterior ligamentous/PLC failure), B3 (Anterior tension band failure) -> High instability -> Surgical Reconstruction mandated.",
                "th": "Type B (แรงดึงถ่าง): B1 (หักผ่านกระดูก), B2 (เอ็น PLC ขาด), B3 (เอ็นด้านหน้าขาด) -> ความไม่มั่นคงสูง -> ต้องผ่าตัดยึดดามกระดูก"
              },
              {
                "en": "Type C (Translation / Facet Dislocation): Complete structural disruption -> MANDATORY SURGICAL EMERGENCY (Urgent reduction and instrumented stabilization).",
                "th": "Type C (ข้อ Facet หลุดล็อค / เคลื่อนแปลกแนว): โครงสร้างถูกทำลายสมบูรณ์ -> ข้อบ่งชี้ผ่าตัดฉุกเฉิน (ดัดจัดข้อและผ่าตัดดามเหล็ก)"
              }
            ],
            "clinicalSignificance": [
              {
                "en": "Facet Dislocations (unilateral/bilateral) are AO Type C injuries. In neurologically intact or obtunded patients, ALWAYS obtain MRI before closed traction reduction to rule out herniated disc that could transect the cord during reduction.",
                "th": "ข้อ Facet หลุดล็อคเป็น AO Type C ในผู้ป่วยที่ระบบประสาทปกติหรือหมดสติ ต้องส่ง MRI ก่อนดึงคอ (Closed Reduction) เพื่อตรวจหาหมอนรองกระดูกเคลื่อนกดไขสันหลัง"
              },
              {
                "en": "Do not misclassify Type B3 hyperextension injuries as simple Type A anterior compression fractures.",
                "th": "ระวังอย่าสับสนการบาดเจ็บแหงนคอดึงถ่าง B3 กับรอยหักกดอัดด้านหน้า Type A ธรรมดา"
              }
            ]
          },
          "investigations": [
            {
              "name": "Lateral Cervical Spine Radiograph",
              "details": {
                "en": "Standard cross-table lateral view. Assesses sagittal alignment, anterior/posterior disc space height, vertebral body compression, and facet dislocation.",
                "th": "ภาพเอกซเรย์คอท่าด้านข้าง (Lateral) ประเมินแนวโค้งกระดูกคอ ความสูงลำตัวกระดูก และการหลุดล็อคของข้อ Facet"
              }
            },
            {
              "name": "Multiplanar 3D CT & MRI Cervical Spine",
              "details": {
                "en": "Multiplanar 3D CT scan and sagittal/axial MRI. Mandatory to assign AO Spine Type A, B, or C, assess PLC integrity, and evaluate cord compression (N0-N4).",
                "th": "เอกซเรย์คอมพิวเตอร์ 3D และ MRI ของกระดูกคอ จำเป็นอย่างยิ่งในการแยกประเภท Type A, B, C ประเมินเอ็นยึด PLC และการอัดทับไขสันหลัง"
              }
            }
          ],
          "types": [
            {
              "type": "AO Type A",
              "name": {
                "en": "AO Spine Type A (Compression Injuries - A0 to A4)",
                "th": "AO Spine Type A (การบาดเจ็บจากแรงกดอัด/ยุบตัว - A0 ถึง A4)"
              },
              "description": {
                "en": "Compression injuries involving the anterior structures without ligamentous distraction\nA0: Minor non-structural fracture (spinous/transverse process)\nA1: Wedge compression fracture of single endplate\nA2: Split/pincer fracture through both endplates\nA3: Incomplete burst fracture (single endplate + posterior wall retropulsion)\nA4: Complete burst fracture (both endplates + posterior wall retropulsion)",
                "th": "การบาดเจ็บจากแรงกดอัดบริเวณตัวกระดูกด้านหน้า โดยเอ็นยึดด้านหลังไม่ฉีกขาด\nA0: รอยหักเล็กน้อยที่ไม่ส่งผลต่อโครงสร้าง (หักยอด spinous/transverse process)\nA1: หักยุบเป็นรูปิ่มเฉพาะขอบบนหรือล่าง\nA2: รอยหักแยกแนวตั้งทะลุขอบบนและล่าง\nA3: Incomplete burst (หักแตกทรุดดันผนังหลังเฉพาะซีกบนหรือล่าง)\nA4: Complete burst (หักแตกป่นทรุดดันผนังหลังทั้งสองซีก)"
              },
              "moi": {
                "en": "Axial compression force with variable flexion.",
                "th": "แรงกดอัดตามแนวแกนร่วมกับการก้มคอ"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Subaxial compression injuries without ligamentous distraction; minor non-structural fractures (A0–A2) and stable incomplete burst (A3) with intact neurological status managed conservatively in a rigid collar; complete burst fractures (A4), severe canal occlusion (>50%), kyphosis >20°, or neurological deficit require surgical decompression and stabilization (ACDF or ACCF).",
                  "th": "การบาดเจ็บกระดูกคอจากแรงกดอัดโดยไม่มีการดึงถ่างของเอ็นส่วนหลัง; รอยหักเล็กน้อย (A0–A2) และ Incomplete Burst ที่มั่นคง (A3) ที่ไม่มีอาการทางระบบประสาทรักษาด้วยเฝือกคอชนิดแข็ง; ส่วน Complete Burst (A4), กระดูกแตกกดช่องไขสันหลัง (>50%), คอค่อม >20° หรือมีอาการอัมพาต ต้องผ่าตัดคลายการกดทับและดามกระดูก (ACDF หรือ Corpectomy ACCF)"
                },
                "preferred": "conservative",
                "conservative": {
                  "indication": {
                    "en": "• AO Type A0 (Minor spinous/transverse process fracture)\n• AO Type A1 (Wedge compression) & A2 (Split) fractures with intact PLC\n• Stable AO Type A3 (Incomplete burst) without neurological deficit and canal compromise <30%",
                    "th": "• AO Type A0 (หักยอด spinous/transverse process)\n• AO Type A1 (หักยุบรูปิ่ม) และ A2 (หักแยกแนวตั้ง) โดยเอ็น PLC สมบูรณ์\n• AO Type A3 (Incomplete burst) ชนิดมั่นคง ไม่มีอาการทางระบบประสาทและกระดูกยื่นเข้าช่องไขสันหลัง <30%"
                  },
                  "method": {
                    "en": "• Rigid cervical collar (Miami J or Aspen) worn continuously for 8–12 weeks; weekly upright lateral X-rays for first 3 weeks to ensure maintenance of sagittal alignment",
                    "th": "• ใส่เฝือกดามคอชนิดแข็ง (Miami J หรือ Aspen) ต่อเนื่อง 8–12 สัปดาห์; เอกซเรย์ท่ายืนสัปดาห์ละครั้งใน 3 สัปดาห์แรกเพื่อเฝ้าระวังแนวกระดูกค่อม"
                  },
                  "rehabilitation": {
                    "en": "• Gradual collar weaning at 8–12 weeks upon solid bridging bony trabeculae on CT; gentle isometric neck strengthening",
                    "th": "• ค่อยๆ ปลดเฝือกคอที่ 8–12 สัปดาห์เมื่อเอกซเรย์เห็นกระดูกติดแน่น; เริ่มบริหารกล้ามเนื้อคอเบาๆ"
                  },
                  "pitfalls": {
                    "en": "• Overlooking subtle vertical split fractures (A2) that develop late nonunion or pseudoarthrosis\n• Missing associated posterior ligamentous injury converting an apparent Type A into Type B",
                    "th": "• มองข้ามรอยหักแยกแนวตั้ง (A2) ซึ่งอาจเกิดภาวะกระดูกไม่ติดเรื้อรัง\n• พลาดการตรวจเอ็นด้านหลังที่ฉีกขาดร่วมด้วยทำให้วินิจฉัยผิดจาก Type B เป็น Type A"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• AO Type A4 (Complete burst fracture involving both endplates and posterior wall)\n• Unstable A3 fractures with kyphosis >20°, vertebral height loss >50%, or canal occlusion >50%\n• Any Type A fracture with associated radiculopathy or myelopathy (N1–N4)",
                    "th": "• AO Type A4 (Complete burst fracture แตกทะลุทั้งขอบบน-ล่างและผนังหลัง)\n• AO Type A3 ชนิดไม่มั่นคงที่คอค่อม >20°, ความสูงลำตัวกระดูกยุบ >50% หรือกดช่องไขสันหลัง >50%\n• มีอาการปวดร้าวตามรากประสาทหรือไขสันหลังถูกกดทับ (N1–N4)"
                  },
                  "method": {
                    "en": "• Anterior Cervical Corpectomy and Fusion (ACCF): Resection of comminuted vertebral body, decompression of spinal canal, expandable titanium mesh cage packed with autologous bone graft, and anterior locking plate spanning construct\n• Anterior Cervical Discectomy and Fusion (ACDF) for A3 incomplete burst if one endplate is intact",
                    "th": "• ผ่าตัดตัดลำตัวกระดูกคอและเชื่อมข้อ (ACCF): ตัดกระดูกชิ้นที่แตกกดช่องไขสันหลังออก ขยายช่องไขสันหลัง ใส่ Titanium Mesh Cage ร่วมกับกระดูกปลูก และดามด้วยแผ่นเหล็กล็อคด้านหน้า\n• ผ่าตัด ACDF ข้ามระดับสำหรับ A3 incomplete burst หากขอบกระดูกอีกด้านยังสมบูรณ์"
                  },
                  "rehabilitation": {
                    "en": "• Rigid cervical collar for 6 weeks; early upright mobilization; structured physical therapy from week 6",
                    "th": "• ใส่เฝือกคอแข็ง 6 สัปดาห์; ลุกเดินได้เร็ว; เริ่มทำกายภาพบำบัดฟื้นฟูหลัง 6 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Cage subsidence into osteoporotic adjacent endplates leading to hardware loosening and loss of cervical lordosis",
                    "th": "• ตัวหนุน Cage จมทรุดลงในเนื้อกระดูกข้างเคียงที่มีภาวะกระดูกพรุน ทำให้เหล็กดามหลวมและคอค่อม"
                  }
                }
              },
              "illustrationId": "",
              "xrayDescription": {
                "en": "Wedge compression or burst fracture of vertebral body with intact posterior tension band.",
                "th": "เห็นลำตัวกระดูกคอยุบตัวเป็นรูปิ่ม หรือแตกป่น โดยแนวเอ็นยึดด้านหลังยังสมบูรณ์"
              }
            },
            {
              "type": "AO Type B",
              "name": {
                "en": "AO Spine Type B (Distraction Injuries - B1 to B3)",
                "th": "AO Spine Type B (การบาดเจ็บจากแรงดึงถ่าง/เอ็นฉีกขาด - B1 ถึง B3)"
              },
              "description": {
                "en": "Distraction injuries causing disruption of tension band complexes\nB1: Posterior tension band disruption (Osseous / Bony Chance fracture)\nB2: Posterior tension band disruption (Capsular / Ligamentous disruption with facet subluxation/dislocation)\nB3: Anterior tension band disruption (Hyperextension injury through anterior longitudinal ligament)",
                "th": "การบาดเจ็บจากแรงดึงถ่าง ทำให้เอ็นยึดรั้งฉีกขาดสมบูรณ์\nB1: เอ็นยึดด้านหลังขาดร่วมกับรอยหักผ่านกระดูก (Bony Chance fracture)\nB2: เอ็นยึดและปลอกข้อต่อ Facet ด้านหลังฉีกขาด (มีข้อต่อ Facet หลุดเกย)\nB3: เอ็นยึดด้านหน้า ALL ฉีกขาดจากแรงแหงนคอรุนแรง (Hyperextension injury)"
              },
              "moi": {
                "en": "Flexion-distraction or hyperextension-distraction violence.",
                "th": "กลไกก้มคอดึงถ่าง หรือแหงนคอดึงถ่างอย่างรุนแรง"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Tension band disruption via flexion-distraction (B1 osseous, B2 ligamentous/PLC) or hyperextension-distraction (B3 anterior tension band/ALL tear); intrinsically unstable with high nonunion and progressive deformity rate; surgical stabilization (ACDF for B2/B3, posterior fusion or dual approach for severe ligamentous tears) is the definitive treatment of choice.",
                  "th": "การฉีกขาดของแนวรั้งความมั่นคงจากแรงดึงถ่าง (B1 หักผ่านกระดูก, B2 เอ็นส่วนหลัง PLC ขาด, B3 เอ็นด้านหน้า ALL ขาด); ขาดความมั่นคงสูง เสี่ยงต่อกระดูกไม่ติดและคอค่อมผิดรูป; การผ่าตัดยึดตรึง (ACDF สำหรับ B2/B3, หรือผ่าตัดดามด้านหลัง/หน้า-หลังสำหรับเอ็นขาดรุนแรง) เป็นการรักษาหลักที่แนะนำ"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Purely osseous Chance fractures (B1) in compliant non-displaced patients willing to wear a Halo-vest for 12 weeks (Extremely rare in cervical spine)",
                    "th": "• รอยหักผ่านกระดูกล้วนๆ B1 (Bony Chance) ชนิดไม่เคลื่อนตัวในผู้ป่วยที่ยินยอมใส่ Halo-vest 12 สัปดาห์ (พบน้อยมากในกระดูกคอ)"
                  },
                  "method": {
                    "en": "• Halo-vest immobilization for 12 weeks with weekly radiographic alignment monitoring",
                    "th": "• ใส่ชุดอุปกรณ์ Halo-vest นาน 12 สัปดาห์ พร้อมเอกซเรย์ตรวจติดตามแนวกระดูกทุกสัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Strict immobilization until solid bony union confirmed on CT scan at 12 weeks",
                    "th": "• ดามคออย่างเข้มงวดจนกว่า CT scan จะยืนยันว่ากระดูกเชื่อมติดสนิทที่ 12 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• High failure rate in ligamentous B2/B3 injuries if managed in collar/halo, leading to chronic painful kyphosis and delayed myelopathy",
                    "th": "• อัตราล้มเหลวสูงมากหากรักษาการบาดเจ็บของเอ็น B2/B3 ด้วยเฝือก/Halo ทำให้คอค่อมเรื้อรังและไขสันหลังทำงานบกพร่อง"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All AO Type B2 (Posterior ligamentous/facet capsule disruption) and Type B3 (Anterior tension band/hyperextension injuries)\n• Displaced B1 osseous distraction fractures or polytrauma",
                    "th": "• การบาดเจ็บ AO Type B2 (เอ็นส่วนหลังและปลอกข้อ Facet ขาด) และ Type B3 (เอ็น ALL ด้านหน้าขาด) ทุกราย\n• รอยหักกระดูก B1 ที่เคลื่อนตัว หรือผู้ป่วยบาดเจ็บหลายระบบ"
                  },
                  "method": {
                    "en": "• For Type B2: Posterior instrumented fusion (lateral mass screws + rods) OR Anterior ACDF with interbody cage and rigid locking plate (or combined 360° fusion if severe facet subluxation)\n• For Type B3 (Hyperextension): Anterior Cervical Discectomy and Fusion (ACDF) with long locking plate to restore anterior tension band constraint",
                    "th": "• สำหรับ Type B2: ผ่าตัดดามยึดด้านหลัง (Lateral mass screws + Rods) หรือผ่าตัด ACDF ด้านหน้าพร้อมแผ่นเหล็กล็อค (หรือผ่าตัด 360 องศาหากข้อ Facet เคลื่อนมาก)\n• สำหรับ Type B3 (แหงนคอดึงถ่าง): ผ่าตัดเชื่อมหมอนรองกระดูกคอด้านหน้า (ACDF) พร้อมดามแผ่นเหล็กล็อคเพื่อสร้างแนวยึดรั้งด้านหน้าทดแทนเอ็น ALL ที่ฉีกขาด"
                  },
                  "rehabilitation": {
                    "en": "• Rigid cervical collar for 6 weeks; active physical therapy and shoulder mobilization from week 6",
                    "th": "• ใส่เฝือกคอแข็ง 6 สัปดาห์; เริ่มทำกายภาพบำบัดขยับคอและไหล่หลัง 6 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Missing posterior facet fractures associated with B2 distractive injuries\n• Placing an undersized anterior plate in B3 injuries leading to screw pullout upon neck extension",
                    "th": "• ตรวจไม่พบกระดูกข้อ Facet ด้านหลังแตกหักร่วมกับการบาดเจ็บแบบ B2\n• ดามแผ่นเหล็กด้านหน้าสั้นหรือเล็กเกินไปใน B3 ทำให้สกรูถอนหลุดเวลากระดกคอ"
                  }
                }
              },
              "illustrationId": "",
              "xrayDescription": {
                "en": "Widened interspinous gap, facet joint subluxation/perched facets, or anterior disc space gapping.",
                "th": "เห็นช่องว่างระหว่างยอดกระดูกกว้างขึ้น, ข้อ Facet หลุดเกย หรือช่องหมอนรองด้านหน้าอ้ากว้าง"
              }
            },
            {
              "type": "AO Type C",
              "name": {
                "en": "AO Spine Type C (Translational / Dislocation Injuries - UNSTABLE)",
                "th": "AO Spine Type C (การเคลื่อนหลุดแปลกแนว - Translational Dislocation)"
              },
              "description": {
                "en": "Translational displacement of one vertebra relative to another in ANY spatial plane\nIncludes unilateral or bilateral locked facets, complete anterior/posterior/lateral dislocation\nTotal disruption of all anterior and posterior structural complexes\nExtremely UNSTABLE with high incidence of permanent spinal cord injury",
                "th": "การเคลื่อนตัวหลุดแปลกแนวของกระดูกคอชิ้นหนึ่งเมื่อเทียบกับอีกชิ้นหนึ่งใน **ทุกทิศทาง**\nรวมถึงข้อต่อ Facet หลุดล็อคข้างเดียวหรือสองข้าง (Unilateral/Bilateral locked facets) และข้อหลุดสมบูรณ์\nทำลายโครงสร้างความมั่นคงทั้งด้านหน้าและด้านหลังสมบูรณ์\n**ไม่มั่นคงอย่างร้ายแรงสูงสุด** เสี่ยงสูงต่ออัมพาตถาวร"
              },
              "moi": {
                "en": "Severe high-energy shear force combined with rotation/flexion.",
                "th": "แรงเฉือนพลังงานสูงรุนแรงร่วมกับการหมุนและก้มคอ"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Translational displacement and 3-column disruption in any plane (unilateral/bilateral locked facets, frank spondyloptosis); extremely unstable with catastrophic spinal cord injury risk; non-operative care is contraindicated; emergency closed reduction under continuous neurologic monitoring (pre-reduction MRI mandatory if obtunded or herniated disc suspected) followed by urgent rigid anterior/posterior surgical reconstruction.",
                  "th": "กระดูกเคลื่อนหลุดแปลกแนวและทำลายโครงสร้างทั้ง 3 เสา (ข้อ Facet หลุดล็อคข้างเดียว/สองข้าง หรือกระดูกคอหลุดข้ามระดับ); ไม่มั่นคงขั้นวิกฤต เสี่ยงต่อการเกิดอัมพาตถาวร; ห้ามรักษาแบบไม่ผ่าตัดเด็ดขาด; ต้องดึงจัดข้อฉุกเฉินภายใต้การตรวจติดตามระบบประสาทอย่างใกล้ชิด (ต้องส่ง MRI ก่อนดึงหากผู้ป่วยหมดสติหรือสงสัยหมอนรองกระดูกแตกทะลัก) แล้วตามด้วยการผ่าตัดดามยึดเชื่อมกระดูกคอด้านหน้า/หลังทันที"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Absolutely contraindicated (closed maintenance is impossible; fatal/paralyzing instability)",
                    "th": "• ห้ามรักษาแบบไม่ผ่าตัดเด็ดขาด (ไม่สามารถจัดกระดูกให้อยู่ในแนวปกติได้ เสี่ยงต่ออัมพาตและเสียชีวิต)"
                  },
                  "method": {
                    "en": "• Urgent closed traction with Gardner-Wells tongs / cranial halo under fluoroscopy as an acute reduction maneuver prior to OR",
                    "th": "• ดึงถ่วงน้ำหนักกะโหลกศีรษะ (Gardner-Wells Tongs) ฉุกเฉินใต้เครื่องเอกซเรย์เพื่อดัดจัดข้อเข้าที่ก่อนเข้าห้องผ่าตัด"
                  },
                  "rehabilitation": {
                    "en": "• N/A",
                    "th": "• N/A"
                  },
                  "pitfalls": {
                    "en": "• Attempting closed reduction in an unmonitored or obtunded patient without prior MRI ruling out an extruded herniated disc that could compress and transect the spinal cord",
                    "th": "• ดึงดัดข้อคอในผู้ป่วยหมดสติโดยไม่ได้ทำ MRI ตรวจหาหมอนรองกระดูกแตก ซึ่งอาจดันไปตัดไขสันหลังจนอัมพาตถาวร"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All AO Type C subaxial translational injuries (Unilateral/bilateral locked facets, fracture-dislocations, translational shear)",
                    "th": "• การบาดเจ็บกระดูกคอ AO Type C ทุกราย (ข้อ Facet หลุดล็อคข้างเดียว/สองข้าง, กระดูกคอหักหลุด, แรงเฉือนหลุด)"
                  },
                  "method": {
                    "en": "• Protocol 1 (Closed Reduction Successful + Herniated Disc Excluded):\n  - Posterior Instrumented Fusion (C3–C7 Lateral Mass Screws + rods) OR Anterior Cervical Discectomy & Fusion (ACDF) with plate\n• Protocol 2 (Closed Reduction Failed / Irreducible Facets / Disc Extrusion):\n  - Anterior-first approach: ACDF discectomy to remove extruded disc fragment -> Open manual reduction using Caspar pins -> Anterior plate fixation ± secondary posterior stabilization (360° fusion)\n  - Posterior-first approach: Open reduction of locked facets via partial facetectomy -> Posterior lateral mass fixation -> Secondary anterior ACDF",
                    "th": "• แผนการรักษาที่ 1 (จัดข้อปิดสำเร็จ + ไม่มีหมอนรองกระดูกแตกทะลัก):\n  - ผ่าตัดดามยึดด้านหลัง (Lateral Mass Screws + Rods) หรือผ่าตัดเชื่อมหมอนรองด้านหน้า ACDF พร้อมแผ่นเหล็ก\n• แผนการรักษาที่ 2 (ดัดข้อไม่เข้า / มีหมอนรองกระดูกแตกทะลักกดไขสันหลัง):\n  - ผ่าตัดเข้าทางด้านหน้าก่อน: คว้านตัดหมอนรองกระดูกที่แตกกดไขสันหลังออก -> ดัดงัดจัดกระดูกให้เข้าที่ -> ดามด้วยแผ่นเหล็กล็อค ± ผ่าตัดเสริมด้านหลัง (360° Fusion)\n  - หรือผ่าตัดเปิดทางด้านหลัง: เล็มกระดูกขอบ Facet จัดข้อที่ล็อคให้เข้าที่ -> ดาม Lateral mass screws -> ผ่าตัดเสริม ACDF ด้านหน้า"
                  },
                  "rehabilitation": {
                    "en": "• Rigid cervical collar for 6–8 weeks; aggressive early spinal cord rehabilitation and functional training",
                    "th": "• ใส่เฝือกคอแข็ง 6–8 สัปดาห์; เริ่มโปรแกรมฟื้นฟูสมรรถภาพไขสันหลังและกายภาพบำบัดเข้มข้นทันที"
                  },
                  "pitfalls": {
                    "en": "• Over-distraction during skull traction leading to brainstem/cord stretch injury\n• Failure of single-level anterior construct in grossly unstable bilateral facet dislocations (consider posterior supplementation)",
                    "th": "• ถ่วงน้ำหนักดึงคอมากเกินไปจนก้านสมองและไขสันหลังถูกดึงยืดบาดเจ็บ\n• แผ่นเหล็กด้านหน้าหลุดถอนในข้อ Facet หลุดสองข้างที่มีความหลวมรุนแรง (ควรพิจารณาดามด้านหลังเสริม)"
                  }
                }
              },
              "illustrationId": "",
              "xrayDescription": {
                "en": "Gross translational step-off >3.5mm, bilateral locked facets, or complete vertebral displacement.",
                "th": "เห็นชิ้นกระดูกเคลื่อนเกยแปลกแนว >3.5มม., ข้อ Facet หลุดล็อคเกยกันสมบูรณ์"
              }
            }
          ]
        },
        {
          "system": "Allen-Ferguson",
          "fullName": {
            "en": "Allen-Ferguson Mechanistic Classification for Lower Cervical Spine Injuries",
            "th": "การจำแนกการบาดเจ็บกระดูกคอตามกลไกการเกิดเหตุ Allen-Ferguson"
          },
          "description": {
            "en": "Biomechanical classification categorizing injuries based on vector forces: Compressive Flexion (CF 1-5), Vertical Compression (VC 1-3), Distractive Flexion (DF 1-4 including locked facets), Compressive Extension (CE 1-5), Distractive Extension (DE 1-2), and Lateral Flexion (LF 1-2).",
            "th": "ระบบจำแนกเชิงชีวกลศาสตร์แบ่งตามทิศทางของแรง: Compressive Flexion (ก้มคออัด), Vertical Compression (อัดตรง), Distractive Flexion (ก้มคอดึงถ่าง - ข้อ Facet ล็อค), Compressive Extension (แหงนคออัด), Distractive Extension (แหงนคอดึงถ่าง) และ Lateral Flexion (เอียงข้าง)"
          },
          "concept": {
            "title": {
              "en": "Allen-Ferguson Biomechanical Clinical Concept",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ Allen-Ferguson Classification"
            },
            "corePrinciple": {
              "en": "Biomechanical mechanistic system classifying lower cervical spine trauma based on vector force direction and neck position at impact across 6 categories.",
              "th": "ระบบจำแนกเชิงชีวกลศาสตร์ที่จัดหมวดหมู่การบาดเจ็บกระดูกคอส่วนล่างตามทิศทางของแรงและท่าทางของคอขณะเกิดเหตุใน 6 กลไกหลัก"
            },
            "rules": [
              {
                "en": "Lower Spectrum (CF 1-2, VC 1, DF 1, CE 1-2): Posterior ligamentous complex intact -> STABLE -> Conservative (Rigid Collar 6–8 weeks).",
                "th": "กลุ่มความรุนแรงต่ำ (CF 1-2, VC 1, DF 1, CE 1-2): เอ็นส่วนหลัง PLC ยังสมบูรณ์ -> มั่นคง -> ใส่ Rigid Collar 6–8 สัปดาห์"
              },
              {
                "en": "DF 2-4 (Locked Facets, Distractive Flexion): Ligamentous disruption -> UNSTABLE -> Urgent Reduction & Surgical Stabilization.",
                "th": "DF 2-4 (ข้อ Facet หลุดล็อค): เอ็นยึดฉีกขาด -> ไม่มั่นคง -> ดึงจัดข้อและผ่าตัดยึดดามกระดูก"
              },
              {
                "en": "CF 3-5 (Flexion Teardrop Fracture): Complete 3-column disruption -> HIGHLY UNSTABLE -> Emergency Surgical Fusion.",
                "th": "CF 3-5 (Flexion Teardrop Fracture): โครงสร้าง 3 เสาถูกทำลายสมบูรณ์ -> ไม่มั่นคงอย่างรุนแรง -> ผ่าตัดฉุกเฉิน"
              },
              {
                "en": "VC 2-3 (Burst fracture with canal retropulsion): Canal occlusion > 50% or neurological deficit -> Decompression & Fusion.",
                "th": "VC 2-3 (Burst fracture ชิ้นส่วนกดช่องไขสันหลัง): กดช่องไขสันหลัง > 50% หรือมีอาการทางประสาท -> ผ่าตัดเปิดกดทับและยึดดาม"
              }
            ],
            "clinicalSignificance": [
              {
                "en": "Flexion Teardrop Fracture (CF 3-5) is the most devastating cervical injury; the anterior teardrop bone fragment is only the tip of the iceberg, representing complete posterior ligamentous disruption with high risk of quadriplegia.",
                "th": "Flexion Teardrop Fracture (CF 3-5) เป็นการบาดเจ็บกระดูกคอที่รุนแรงที่สุด ชิ้นกระดูกสามเหลี่ยมด้านหน้าเป็นเพียงยอดภูเขาน้ำแข็ง แต่โครงสร้างเอ็นส่วนหลังขาดสมบูรณ์เสี่ยงอัมพาตสี่แผลมสูงมาก"
              },
              {
                "en": "DF Stage 2 (unilateral locked facet) can present with subtle neck pain; inspect lateral radiograph carefully for 25% anterior translation.",
                "th": "DF Stage 2 (ข้อ Facet หลุดล็อคข้างเดียว) ผู้ป่วยอาจปวดคอไม่มาก ต้องตรวจ X-ray Lateral อย่างละเอียดเพื่อดูการเคลื่อนไปข้างหน้า 25%"
              }
            ]
          },
          "investigations": [
            {
              "name": "Lateral Cervical Spine View",
              "details": {
                "en": "Lateral cervical radiograph to evaluate teardrop fragments, anterior compression height, facet subluxation/locking, and interspinous distance widening.",
                "th": "ภาพเอกซเรย์คอท่าด้านข้าง เพื่อตรวจประเมินชิ้นกระดูก Tear-drop, ความสูงตัวกระดูกด้านหน้า, การหลุดล็อคของข้อ Facet และช่องว่างระหว่างยอดกระดูก"
              }
            },
            {
              "name": "3D CT Scan of Cervical Spine",
              "details": {
                "en": "Multiplanar 3D CT scan to accurately identify vector force category (CF, VC, DF, CE, DE, LF) and posterior element disruption.",
                "th": "เอกซเรย์คอมพิวเตอร์ 3D ประเมินทิศทางแรงเวกเตอร์ CF, VC, DF, CE, DE, LF และรอยหักส่วนหลัง"
              }
            }
          ],
          "types": [
            {
              "type": "Compressive Flexion",
              "name": {
                "en": "Compressive Flexion (CF 1-5 / Tear-drop Fracture)",
                "th": "1. Compressive Flexion (CF 1-5 / รอยหักก้มคออัด - Tear-drop)"
              },
              "description": {
                "en": "Flexion force combined with axial compression\nCF1-CF2: Anterior beak fracture\nCF3-CF5: Flexion Tear-drop fracture with posterior body retropulsion into spinal canal",
                "th": "แรงก้มคอร่วมกับแรงกดอัดตามแนวแกน CF1-2 หักเป็นจะงอยรูปิ่ม / CF4-5 รอยหัก **Flexion Tear-drop** ชิ้นกระดูกแตกเป็นหยดน้ำตาและดันไปกดไขสันหลังด้านหลัง"
              },
              "moi": {
                "en": "Diving into shallow water or head-first collision.",
                "th": "ดำน้ำกระแทกพื้นสระ หรือหัวกระแทกชนด้านหน้า"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Compressive flexion spectrum ranging from minor anterior beak (CF1–CF2) to catastrophic Flexion Teardrop fracture (CF3–CF5); CF1–CF2 with intact posterior column managed in rigid collar; CF3–CF5 represents complete 3-column disruption with retropulsed body fragment and high anterior cord syndrome risk requiring emergency anterior corpectomy (ACCF) and rigid plating ± posterior fusion.",
                  "th": "การบาดเจ็บก้มคออัดกระแทก ตั้งแต่รอยหักจะงอยขอบหน้า (CF1–CF2) ไปจนถึง Flexion Teardrop Fracture (CF3–CF5); CF1–CF2 ที่เอ็นส่วนหลังสมบูรณ์รักษาด้วยเฝือกคอแข็ง; CF3–CF5 โครงสร้าง 3 เสาพังทลายสมบูรณ์ ชิ้นกระดูกทรุดดันกดไขสันหลังด้านหน้า เสี่ยงต่ออัมพาตสูงมาก ต้องผ่าตัด Corpectomy ด้านหน้าด่วน ร่วมกับดามแผ่นเหล็กล็อค ± ดามด้านหลังเสริม"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Low-grade CF1 (Blunting of anterior-superior margin) and CF2 (Anterior beak fracture without posterior involvement)",
                    "th": "• CF1 (ขอบกระดูกด้านหน้าบนบิ่น) และ CF2 (รอยหักเป็นจะงอยด้านหน้าโดยเอ็นส่วนหลังไม่ฉีกขาด)"
                  },
                  "method": {
                    "en": "• Rigid cervical orthosis (Miami J) for 8–10 weeks with serial upright radiographs",
                    "th": "• ใส่เฝือกดามคอชนิดแข็ง (Miami J) นาน 8–10 สัปดาห์ ร่วมกับเอกซเรย์ท่ายืนติดตามอาการ"
                  },
                  "rehabilitation": {
                    "en": "• Gentle active neck exercises upon confirmed union at 8–10 weeks",
                    "th": "• เริ่มฝึกบริหารขยับคอเมื่อกระดูกติดสนิทที่ 8–10 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Misdiagnosing a true CF3–CF5 Flexion Teardrop fracture as a benign CF1/CF2 beak fracture; always evaluate sagittal CT/MRI for posterior body retropulsion and interspinous widening",
                    "th": "• วินิจฉัยผิดพลาดคิดว่า Flexion Teardrop เป็นแค่รอยหักจะงอยหน้าธรรมดา; ต้องตรวจ CT/MRI ดูชิ้นกระดูกที่ดันไปกดไขสันหลังและเอ็นส่วนหลังขาดเสมอ"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All CF3, CF4, and CF5 fractures (Flexion Teardrop fractures with posterior body retropulsion, canal compromise, or acute anterior cord syndrome)",
                    "th": "• รอยหัก CF3, CF4 และ CF5 ทุกราย (Flexion Teardrop ที่มีชิ้นกระดูกดันกดไขสันหลัง หรือมีอาการอัมพาต Anterior Cord Syndrome)"
                  },
                  "method": {
                    "en": "• Anterior Cervical Corpectomy and Fusion (ACCF): Complete resection of the shattered vertebral body and retropulsed fragments, neural canal decompression, reconstruction with titanium mesh cage/strut autograft, and rigid anterior locking plate\n• Combined 360° Fusion (ACCF + Posterior lateral mass screws) if posterior tension band disruption is severe (CF4/CF5)",
                    "th": "• ผ่าตัดตัดลำตัวกระดูกคอและเชื่อมข้อ (ACCF): ตัดกระดูกลำตัวชิ้นที่แตกป่นและชิ้นที่ดันกดไขสันหลังออกทั้งหมด ปลดปล่อยไขสันหลังให้โล่ง ใส่ Titanium Mesh Cage ร่วมกับกระดูกปลูก และดามด้วยแผ่นเหล็กล็อคด้านหน้า\n• ผ่าตัดรอบทิศ 360 องศา (ACCF ร่วมกับดามสกรู Lateral Mass ด้านหลัง) หากเอ็นและกระดูกส่วนหลังพังทลายรุนแรง (CF4/CF5)"
                  },
                  "rehabilitation": {
                    "en": "• Rigid cervical collar for 6–8 weeks post-op; early aggressive spinal cord neuro-rehabilitation",
                    "th": "• ใส่เฝือกคอแข็ง 6–8 สัปดาห์; เริ่มทำกายภาพบำบัดฟื้นฟูระบบประสาทและไขสันหลังเข้มข้นทันที"
                  },
                  "pitfalls": {
                    "en": "• Inadequate decompression leaving residual retropulsed bone fragments compressing the anterior spinal cord\n• Attempting standalone posterior fusion without removing the anterior compressing bone",
                    "th": "• กรอตัดชิ้นกระดูกที่กดด้านหน้าออกไม่หมด ทำให้ไขสันหลังยังคงถูกกดทับ\n• ผ่าตัดดามด้านหลังอย่างเดียวโดยไม่เอาชิ้นกระดูกที่กดทับไขสันหลังด้านหน้าออก"
                  }
                }
              },
              "illustrationId": "",
              "xrayDescription": {
                "en": "Anterior inferior triangular tear-drop fragment with retropulsed body fragment.",
                "th": "เห็นชิ้นกระดูกสามเหลี่ยมหลุดตรงขอบล่างหน้า (Tear-drop) และตัวกระดูกทรุดดันเข้าช่องไขสันหลัง"
              }
            },
            {
              "type": "Distractive Flexion",
              "name": {
                "en": "Distractive Flexion (DF 1-4 / Locked Facets)",
                "th": "2. Distractive Flexion (DF 1-4 / ก้มคอดึงถ่าง - ข้อ Facet ล็อค)"
              },
              "description": {
                "en": "Flexion force combined with distraction\nDF1: Interspinous widening / Facet subluxation\nDF2: Unilateral locked facet (25% translation)\nDF3: Bilateral locked facets (50% translation)\nDF4: Complete displacement (100% translation)",
                "th": "แรงก้มคอร่วมกับแรงดึงถ่าง DF1 ข้อ Facet เผยอ / DF2 **Unilateral locked facet (ข้อหลุดล็อคข้างเดียว เกย 25%)** / DF3 **Bilateral locked facets (ข้อหลุดล็อคสองข้าง เกย 50%)** / DF4 หลุดสมบูรณ์"
              },
              "moi": {
                "en": "Rapid deceleration MVA throwing head forward.",
                "th": "อุบัติเหตุรถยนต์เบรกกระทันหันเหวี่ยงศีรษะก้มไปด้านหน้าอย่างรุนแรง"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Distractive flexion spectrum from interspinous widening (DF1) to unilateral locked facet (DF2, 25% translation), bilateral locked facets (DF3, 50% translation), and floating vertebra (DF4, 100% translation); DF1 with intact facet joints can be braced; DF2–DF4 requires urgent reduction (closed traction under monitoring or open reduction) and rigid instrumented stabilization (ACDF or posterior fusion) to prevent progressive neurologic loss.",
                  "th": "การบาดเจ็บก้มคอดึงถ่าง ตั้งแต่เอ็นขอบหลังฉีกขาด (DF1), ข้อ Facet หลุดล็อคข้างเดียว (DF2 เกย 25%), ข้อ Facet หลุดล็อคสองข้าง (DF3 เกย 50%) ไปจนถึงข้อคอหลุดสมบูรณ์ (DF4 เกย 100%); DF1 รักษาด้วยเฝือกคอแข็งได้; DF2–DF4 ต้องดึงจัดข้อเข้าที่ด่วน (ดึงถ่วงน้ำหนักหรือเปิดผ่าตัดจัดข้อ) และผ่าตัดดามยึดกระดูก (ACDF หรือ Posterior Fusion) เพื่อป้องกันอัมพาต"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• DF1 injuries (Interspinous widening without facet perched/locked or subluxation on dynamic flexion views)",
                    "th": "• การบาดเจ็บระดับ DF1 (ช่องว่าง interspinous กว้างขึ้นเล็กน้อยโดยข้อ Facet ไม่หลุดเกย)"
                  },
                  "method": {
                    "en": "• Rigid cervical collar for 8–10 weeks with close weekly radiographic follow-up",
                    "th": "• ใส่เฝือกคอชนิดแข็ง 8–10 สัปดาห์ ร่วมกับตรวจเอกซเรย์ติดตามแนวกระดูกทุกสัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Flexion-extension stress radiographs at 8–10 weeks to rule out occult dynamic instability",
                    "th": "• เอกซเรย์ท่าก้ม-เงยคอที่ 8–10 สัปดาห์เพื่อยืนยันว่าข้อต่อคอไม่หลวมขยับ"
                  },
                  "pitfalls": {
                    "en": "• Missing a subtle DF2 unilateral facet lock that presents with only mild rotational asymmetry and ~25% anterior translation on lateral X-ray",
                    "th": "• พลาดการวินิจฉัยข้อ Facet หลุดล็อคข้างเดียว (DF2) ซึ่งสังเกตเห็นการเคลื่อนไปข้างหน้าเพียง 25%"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All DF2 (Unilateral locked facet), DF3 (Bilateral locked facets), and DF4 (Complete displacement) injuries",
                    "th": "• ข้อต่อ Facet หลุดล็อคข้างเดียว (DF2), หลุดสองข้าง (DF3) และหลุดสมบูรณ์ (DF4) ทุกราย"
                  },
                  "method": {
                    "en": "• Urgent closed reduction with cranial tongs traction (5 lbs per cervical level added incrementally under serial fluoroscopy and frequent neuro exams)\n• Definitive Surgery: Anterior Cervical Discectomy & Fusion (ACDF) with locking plate OR Posterior Cervical Instrumented Fusion (Lateral Mass Screws + rods) OR Combined 360° Fusion if locked facets are irreducible closed or gross multidirectional instability exists",
                    "th": "• ดึงถ่วงน้ำหนักกะโหลกศีรษะฉุกเฉิน (เพิ่มน้ำหนักทีละ 5 ปอนด์ต่อระดับกระดูกคอใต้เครื่องเอกซเรย์ พร้อมตรวจระบบประสาทอย่างสม่ำเสมอ)\n• ผ่าตัดเชื่อมตรึงถาวร: ACDF พร้อมแผ่นเหล็กล็อคด้านหน้า หรือผ่าตัดดาม Lateral Mass Screws ด้านหลัง หรือผ่าตัดรอบทิศ 360 องศาหากดึงจัดข้อไม่เข้า"
                  },
                  "rehabilitation": {
                    "en": "• Rigid collar for 6 weeks; active progressive range of motion and strengthening at 6 weeks",
                    "th": "• ใส่เฝือกคอแข็ง 6 สัปดาห์; เริ่มทำกายภาพบำบัดขยับคอและเพิ่มความแข็งแรงหลัง 6 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Performing closed traction in obtunded patients without MRI to rule out disc herniation, leading to disc fragment migration and cord transection",
                    "th": "• ดึงคอในผู้ป่วยหมดสติโดยไม่ตรวจ MRI เพื่อคัดกรองหมอนรองกระดูกแตก ซึ่งอาจเคลื่อนไปตัดไขสันหลังได้"
                  }
                }
              },
              "illustrationId": "",
              "xrayDescription": {
                "en": "Abrupt displacement >25% (unilateral) or >50% (bilateral locked facets) on lateral X-ray.",
                "th": "เห็นกระดูกคอเคลื่อนเกย >25% (ข้างเดียว) หรือ >50% (สองข้าง) จากข้อ Facet ล็อคข้ามกัน"
              }
            },
            {
              "type": "Vertical Compression",
              "name": {
                "en": "Vertical Compression (VC 1-3 / Central Burst)",
                "th": "3. Vertical Compression (VC 1-3 / อัดตรงตามแนวแกน - Central Burst)"
              },
              "description": {
                "en": "Pure axial compression force\nVC1: Single endplate fracture\nVC2: Cupping burst fracture\nVC3: Comminuted central burst fracture with canal retropulsion",
                "th": "แรงกดอัดตามแนวแกนดิ่งบริสุทธิ์ VC1-2 หักยุบขอบ / VC3 **Central Burst fracture** กระดูกแตกป่นอัดทรุดรอบทิศทางดันเข้าช่องไขสันหลัง"
              },
              "moi": {
                "en": "Heavy object falling directly onto top of head.",
                "th": "วัตถุหนักตกใส่กลางศีรษะตรงๆ"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Pure axial compression injury spectrum; VC1 (single endplate cupping) treated in rigid cervical collar; VC2–VC3 (central multi-fragment burst with canal retropulsion) with cord compression or severe comminution requires anterior cervical corpectomy (ACCF) with titanium cage and locking plate to decompress the spinal canal and restore anterior column load bearing.",
                  "th": "การบาดเจ็บจากแรงกดอัดตามแนวดิ่งตรง; VC1 (หักยุบขอบบนหรือล่างแผ่นเดียว) รักษาด้วยเฝือกคอชนิดแข็ง; VC2–VC3 (กระดูกแตก Burst แตกกระจายหลายชิ้นดันช่องไขสันหลัง) ที่มีการกดทับไขสันหลังหรือแตกป่นรุนแรง ต้องผ่าตัด Corpectomy (ACCF) ใส่ Mesh cage และดามแผ่นเหล็กล็อคเพื่อคลายการกดทับและรับน้ำหนักเสาด้านหน้า"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• VC1 fractures (Single endplate cupping deformity with intact posterior wall and normal neurologic exam)\n• Stable VC2 in medically frail patients without canal compromise",
                    "th": "• กระดูกหัก VC1 (ขอบบนหรือล่างยุบตัวโดยผนังหลังไม่แตกและระบบประสาทปกติ)\n• VC2 ชนิดมั่นคงในผู้ป่วยที่มีความเสี่ยงผ่าตัดสูงและกระดูกไม่กดช่องไขสันหลัง"
                  },
                  "method": {
                    "en": "• Rigid cervical collar (Miami J) or Halo-vest for 10–12 weeks with serial radiographs",
                    "th": "• ใส่เฝือกคอชนิดแข็ง (Miami J) หรือ Halo-vest นาน 10–12 สัปดาห์ พร้อมเอกซเรย์ติดตามอาการ"
                  },
                  "rehabilitation": {
                    "en": "• Wean collar after 10–12 weeks upon confirmed bony trabecular bridging; isometric strengthening",
                    "th": "• ปลดเฝือกคอที่ 10–12 สัปดาห์เมื่อกระดูกเชื่อมติดสนิท; เริ่มบริหารกล้ามเนื้อคอ"
                  },
                  "pitfalls": {
                    "en": "• Late collapse and progressive spinal canal stenosis in comminuted VC2/VC3 fractures managed conservatively",
                    "th": "• ลำตัวกระดูกยุบตัวลงเรื่อยๆ และช่องไขสันหลังตีบแคบลงในรอยหัก VC2/VC3 ที่รักษาด้วยเฝือก"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• VC2 and VC3 comminuted central burst fractures with >30%–50% spinal canal retropulsion\n• Neurological deficit (Radiculopathy or Myelopathy)\n• Severe vertebral height loss (>50%) or focal kyphosis",
                    "th": "• กระดูกแตก Central Burst VC2 และ VC3 ที่มีชิ้นกระดูกดันเข้าช่องไขสันหลัง >30%–50%\n• มีอาการบาดเจ็บของรากประสาทหรือไขสันหลัง\n• ลำตัวกระดูกยุบตัวรุนแรง (>50%) หรือแนวกระดูกค่อมผิดรูป"
                  },
                  "method": {
                    "en": "• Anterior Cervical Corpectomy and Fusion (ACCF): Complete corpectomy of fractured vertebra, decompression of the dural sac, placement of expandable titanium cage/structural autograft, and rigid anterior cervical locking plate fixation spanning adjacent healthy vertebral bodies",
                    "th": "• ผ่าตัดตัดลำตัวกระดูกคอและเชื่อมข้อ (ACCF): ตัดลำตัวกระดูกที่แตกออกทั้งหมดเพื่อคลายการกดทับถุงไขสันหลัง ใส่ Titanium Mesh Cage ร่วมกับกระดูกปลูก และดามด้วยแผ่นเหล็กล็อคด้านหน้ายึดข้ามข้อกระดูกที่แข็งแรง"
                  },
                  "rehabilitation": {
                    "en": "• Rigid cervical collar for 6 weeks; early upright mobilization; progressive physical therapy from week 6",
                    "th": "• ใส่เฝือกคอแข็ง 6 สัปดาห์; ลุกเดินได้เร็ว; เริ่มทำกายภาพบำบัดฟื้นฟูหลัง 6 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Inadequate corpectomy width leaving lateral uncinate bone fragments compressing exiting nerve roots\n• Failure of endplate preparation causing cage subsidence",
                    "th": "• ตัดกระดูกแคบเกินไปจนเหลือชิ้นกระดูกด้านข้างกดทับรากประสาท\n• ขูดแต่งผิวข้อกระดูกไม่ดีพอจน Cage จมทรุดตัว"
                  }
                }
              },
              "illustrationId": "",
              "xrayDescription": {
                "en": "Centrally comminuted vertebral body with outward displacement of anterior and posterior walls.",
                "th": "เห็นลำตัวกระดูกแตกป่นกลางชิ้น โดยผนังหน้าและหลังโป่งขยายออก"
              }
            }
          ]
        }
      ]
    }
  ]
};
