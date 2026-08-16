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
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED TREATMENT. Rigid Cervical Collar (Hard Collar) for 6-8 weeks. Excellent union rate (>98%).",
                  "th": "แนะนำรักษาแบบไม่ผ่าตัด ใส่เฝือกคอชนิดแข็ง (Rigid Collar) 6-8 สัปดาห์ อัตรากระดูกติดดีเยี่ยม"
                },
                "operative": {
                  "en": "Not indicated.",
                  "th": "ไม่มีข้อบ่งชี้ในการผ่าตัด"
                }
              },
              "illustrationId": "/images/c1_jefferson/landells_1.png",
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
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED FOR STABLE PATTERNS (TAL intact, overhang <6.9mm). Immobilization in Halo-vest or Rigid Collar for 8-12 weeks.",
                  "th": "แนะนำรักษาแบบไม่ผ่าตัดหากเอ็น TAL สมบูรณ์ (ระยะเกย < 6.9มม.) โดยใส่ Halo-vest หรือ Rigid Collar 8-12 สัปดาห์"
                },
                "operative": {
                  "en": "INDICATED FOR UNSTABLE PATTERNS (TAL rupture, overhang >6.9mm / ADI >3mm). C1-C2 Posterior instrumented fusion (Harms technique) or C1 ring reconstruction.",
                  "th": "แนะนำผ่าตัดหากเอ็น TAL ขาด (ระยะเกย >6.9มม. / ADI >3มม.) ผ่าตัดดามยึดกระดูกคอ C1-C2 ด้านหลัง (Harms technique)"
                }
              },
              "illustrationId": "/images/c1_jefferson/landells_2.png",
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
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED FOR NON-DISPLACED FRACTURES. Rigid Collar or Halo-vest for 8-12 weeks.",
                  "th": "แนะนำรักษาแบบไม่ผ่าตัดในรอยหักไม่เคลื่อนตัว ใส่ Rigid Collar หรือ Halo-vest 8-12 สัปดาห์"
                },
                "operative": {
                  "en": "Indicated for severe articular step-off >2mm or TAL disruption. C1-C2 posterior fusion.",
                  "th": "ผ่าตัดเฉพาะกรณีผิวข้อเหลื่อม >2มม. หรือเอ็น TAL ขาด"
                }
              },
              "illustrationId": "/images/c1_jefferson/landells_3.png",
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
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED TREATMENT. Immobilization in a Rigid Cervical Collar or Halo-vest for 10-12 weeks. High union rate (>95%).",
                  "th": "แนะนำรักษาแบบไม่ผ่าตัด ใส่เฝือกคอชนิดแข็ง (Rigid Collar) หรือ Halo-vest 10-12 สัปดาห์ อัตรากระดูกติดสูงมาก"
                },
                "operative": {
                  "en": "Not indicated.",
                  "th": "ไม่มีข้อบ่งชี้ในการผ่าตัด"
                }
              },
              "illustrationId": "/images/c2_hangman/levine_1.png",
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
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED INITIAL TREATMENT. Closed traction reduction in slight extension followed by Halo-vest immobilization for 12 weeks.",
                  "th": "แนะนำรักษาแบบไม่ผ่าตัดเป็นอันดับแรก ดึงจัดกระดูกให้เข้าที่ในท่าแหงนคอเล็กน้อย แล้วใส่ Halo-vest นาน 12 สัปดาห์"
                },
                "operative": {
                  "en": "Indicated if closed reduction fails or persistent C2-C3 instability. Anterior C2-C3 discectomy & fusion (ACDF) or posterior C2-C3 fusion.",
                  "th": "ผ่าตัดเมื่อดึงจัดกระดูกไม่สำเร็จ หรือ C2-C3 ยังคงหลวมเคลื่อน โดยผ่าตัดเชื่อมข้อ C2-C3 ทางด้านหน้า (ACDF) หรือด้านหลัง"
                }
              },
              "illustrationId": "/images/c2_hangman/levine_2.png",
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
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED TREATMENT. Closed reduction manually in EXTENSION (WITHOUT TRACTION) followed by Halo-vest for 12 weeks.",
                  "th": "แนะนำรักษาแบบไม่ผ่าตัด โดยจัดกระดูกในท่าแหงนคอ **(โดยไม่ดึงถ่วงน้ำหนัก)** แล้วใส่ Halo-vest 12 สัปดาห์"
                },
                "operative": {
                  "en": "Indicated if inability to maintain reduction in Halo. Direct C2 transpedicular screw fixation or posterior C2-C3 fusion.",
                  "th": "ผ่าตัดหากใส่ Halo แล้วกระดูกยังเคลื่อนบิด โดยขันสกรู C2 pedicle screw หรือผ่าตัดดาม C2-C3 ด้านหลัง"
                }
              },
              "illustrationId": "/images/c2_hangman/levine_2a.png",
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
                "preferred": "operative",
                "conservative": {
                  "en": "CONTRAINDICATED. Impossible to reduce and stabilize non-operatively.",
                  "th": "ห้ามใช้การรักษาด้วยวิธีนี้ ไม่สามารถดึงดามให้อยู่ในแนวปกติได้"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT (EMERGENCY SURGERY). Open reduction of C2-C3 facet dislocation + posterior C2-C3 instrumented fusion or combined anterior/posterior reconstruction.",
                  "th": "แนะนำผ่าตัดรักษาด่วนที่สุด (ORIF) เปิดผ่าตัดจัดข้อ C2-C3 facet ที่หลุดให้เข้าที่ แล้วดามด้วยแผ่นเหล็ก/สกรู C2-C3 ด้านหลัง"
                }
              },
              "illustrationId": "/images/c2_hangman/levine_3.png",
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
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED TREATMENT. Rigid Cervical Collar (Hard Collar) for 6-8 weeks for pain control. Union rate >99%.",
                  "th": "แนะนำรักษาแบบไม่ผ่าตัด ใส่เฝือกคอชนิดแข็ง (Rigid Collar) 6-8 สัปดาห์ อัตรากระดูกติดดีเยี่ยม"
                },
                "operative": {
                  "en": "Not indicated.",
                  "th": "ไม่มีข้อบ่งชี้ในการผ่าตัด"
                }
              },
              "illustrationId": "/images/c2_odontoid/anderson_1.png",
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
                "preferred": "operative",
                "conservative": {
                  "en": "Trial of Halo-vest or Rigid Collar ONLY in young patients with non-displaced (<5mm) fractures. Poor nonunion outcomes in elderly.",
                  "th": "พิจารณาใส่ Halo-vest หรือ Rigid Collar เฉพาะในผู้ป่วยอายุน้อยที่กระดูกไม่เคลื่อน (<5มม.)"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT FOR ELDERLY (>65 yrs), DISPLACEMENT >5mm, ANGULATION >10°, OR GAP >1mm. Anterior Odontoid Screw Fixation (if TAL intact and fracture horizontal), OR C1-C2 Posterior Fusion (Harms technique).",
                  "th": "แนะนำผ่าตัดรักษาในผู้สูงอายุ (>65 ปี), เคลื่อน >5มม., เอียง >10° โดยผ่าตัดยึดสกรูทางด้านหน้า (Anterior Odontoid Screw) หรือผ่าตัดเชื่อม C1-C2 ด้านหลัง (Harms technique)"
                }
              },
              "illustrationId": "/images/c2_odontoid/anderson_2.png",
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
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED TREATMENT. Immobilization in a Rigid Cervical Collar or Halo-vest for 8-12 weeks. High healing rate (>90%).",
                  "th": "แนะนำรักษาแบบไม่ผ่าตัด ใส่เฝือกคอชนิดแข็ง (Rigid Collar) หรือ Halo-vest 8-12 สัปดาห์ อัตรากระดูกเชื่อมติดสูงมาก"
                },
                "operative": {
                  "en": "Indicated ONLY if severe displacement >5mm, angulation, or neurological compromise. C1-C2 posterior fusion.",
                  "th": "ผ่าตัดเฉพาะกรณีเคลื่อนเกย >5มม. หรือมีรอยกดทับไขสันหลัง"
                }
              },
              "illustrationId": "/images/c2_odontoid/anderson_3.png",
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
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED TREATMENT (GOLD STANDARD). External immobilization with Rigid Cervical Collar (Miami J or Philadelphia Collar) for 8-12 weeks, with serial radiographs at 2, 4, 8, and 12 weeks to ensure no secondary displacement.",
                  "th": "แนะนำรักษาแบบไม่ผ่าตัดเป็นมาตรฐานหลัก ใส่เฝือกคอชนิดแข็ง (Miami J หรือ Philadelphia Collar) 8-12 สัปดาห์ ร่วมกับติดตามเอกซเรย์ประเมินเป็นระยะ"
                },
                "operative": {
                  "en": "Not indicated.",
                  "th": "ไม่มีข้อบ่งชี้ในการผ่าตัด"
                }
              },
              "illustrationId": "/images/lower_cervical_slic/slic_less_4.png",
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
                "preferred": "conservative",
                "conservative": {
                  "en": "Trial of Rigid Cervical Collar or Halo-vest immobilization in patients who are poor surgical candidates or have minimal pain.",
                  "th": "พิจารณาใส่ Rigid Collar หรือ Halo-vest ในผู้ป่วยที่ไม่เหมาะกับการผ่าตัดหรือปวดน้อย"
                },
                "operative": {
                  "en": "Surgical stabilization (ACDF or Posterior Fusion) indicated in young active patients, persistent kyphotic deformity, or intractable pain.",
                  "th": "พิจารณาผ่าตัดยึดตรึง (ACDF หรือ Posterior Fusion) ในผู้ป่วยอายุน้อย คอผิดรูป หรือปวดรุนแรง"
                }
              },
              "illustrationId": "/images/lower_cervical_slic/slic_4.png",
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
                "preferred": "operative",
                "conservative": {
                  "en": "CONTRAINDICATED. High risk of progressive kyphosis, nonunion, and catastrophic paralysis.",
                  "th": "ห้ามใช้การรักษาด้วยวิธีนี้ เสี่ยงสูงต่อคอผิดรูป กระดูกไม่ติด และอัมพาต"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT (GOLD STANDARD). Surgical decompression and stabilization: Anterior Cervical Discectomy & Fusion (ACDF), Corpectomy with mesh cage, or Posterior Instrumented Fusion (Pedicle / Lateral mass screws). Emergency surgery if incomplete neurological deficit with ongoing compression.",
                  "th": "แนะนำผ่าตัดมาตรฐานหลัก (Gold Standard): ผ่าตัด減壓และดามยึดกระดูก เช่น ACDF, Corpectomy หรือ Posterior Lateral Mass Screw Fusion ผ่าตัดด่วนที่สุดหากมีอาการอัมพาตครึ่งท่อน"
                }
              },
              "illustrationId": "/images/lower_cervical_slic/slic_greater_4.png",
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
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED FOR A0, A1, A2, AND STABLE A3. Rigid Cervical Collar for 8-12 weeks.",
                  "th": "แนะนำรักษาแบบไม่ผ่าตัดใน A0, A1, A2 และ A3 ที่มั่นคง ใส่ Rigid Collar 8-12 สัปดาห์"
                },
                "operative": {
                  "en": "Indicated for A4 complete burst fractures, severe kyphosis >20°, or neurological deficit. ACDF or Corpectomy.",
                  "th": "ผ่าตัดเฉพาะ A4 burst fracture, คอโก่ง >20° หรือมีอาการอัมพาต โดยผ่าตัด ACDF หรือ Corpectomy"
                }
              },
              "illustrationId": "/images/lower_cervical_aospine/ao_type_a.png",
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
                "preferred": "operative",
                "conservative": {
                  "en": "High nonunion and progressive deformity rate.",
                  "th": "เสี่ยงสูงต่อกระดูกไม่ติดและคอโก่งผิดรูป"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT FOR ALL TYPE B INJURIES. Surgical stabilization via ACDF, Posterior instrumented fusion, or combined dual-approach.",
                  "th": "แนะนำผ่าตัดยึดตรึงในผู้ป่วย Type B ทุกราย เพื่อสร้างความมั่นคงของแนวเอ็นยึด"
                }
              },
              "illustrationId": "/images/lower_cervical_aospine/ao_type_b.png",
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
                "preferred": "operative",
                "conservative": {
                  "en": "FATAL / CONTRAINDICATED.",
                  "th": "ห้ามใช้การรักษาด้วยวิธีนี้"
                },
                "operative": {
                  "en": "EMERGENCY OPERATIVE TREATMENT. Closed reduction with cranial tongs traction (if awake and monitored), followed by urgent open reduction and anterior/posterior instrumented fusion.",
                  "th": "แนะนำผ่าตัดด่วนที่สุด (EMERGENCY SURGERY): ดึงจัดข้อให้เข้าที่ แล้วเปิดผ่าตัดดามยึดกระดูกเชื่อมข้อทั้งด้านหน้าและด้านหลัง"
                }
              },
              "illustrationId": "/images/lower_cervical_aospine/ao_type_c.png",
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
                "preferred": "operative",
                "conservative": {
                  "en": "Conservative for CF1-CF2 only.",
                  "th": "รักษาไม่ผ่าตัดเฉพาะ CF1-CF2"
                },
                "operative": {
                  "en": "RECOMMENDED FOR CF3-CF5 (TEAR-DROP). Emergency ACDF or Corpectomy with mesh cage.",
                  "th": "แนะนำผ่าตัดด่วนใน CF3-CF5 (Flexion Tear-drop) โดยทำ ACDF หรือ Corpectomy"
                }
              },
              "illustrationId": "/images/lower_cervical_allen/cf_teardrop.png",
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
                "preferred": "operative",
                "conservative": {
                  "en": "CONTRAINDICATED FOR DF2-DF4.",
                  "th": "ห้ามใช้ใน DF2-DF4"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. Urgent closed/open reduction of locked facets + ACDF / Posterior Fusion.",
                  "th": "แนะนำผ่าตัดด่วน: ดึงจัดข้อ Facet ที่ล็อคให้หลุดเข้าที่ แล้วผ่าตัดเชื่อมข้อ ACDF หรือ Posterior Fusion"
                }
              },
              "illustrationId": "/images/lower_cervical_allen/df_locked_facets.png",
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
                "preferred": "operative",
                "conservative": {
                  "en": "Conservative for VC1.",
                  "th": "รักษาไม่ผ่าตัดเฉพาะ VC1"
                },
                "operative": {
                  "en": "RECOMMENDED FOR VC2-VC3. Anterior Corpectomy + Strut graft / cage + plate.",
                  "th": "แนะนำผ่าตัดใน VC2-VC3 โดยทำ Corpectomy ตัดลำตัวกระดูกแล้วใส่ Cage ดามแผ่นเหล็ก"
                }
              },
              "illustrationId": "/images/lower_cervical_allen/vc_burst.png",
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
