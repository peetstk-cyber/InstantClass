import type { BoneData } from "../../types";

export const femurBone: BoneData = {
  "id": "femur",
  "name": {
    "en": "Femur & Hip",
    "th": "กระดูกต้นขาและสะโพก"
  },
  "description": {
    "en": "Thigh bone and hip joint structures",
    "th": "กระดูกต้นขาและโครงสร้างข้อสะโพก"
  },
  "pediatric": false,
  "regions": [
    {
      "id": "femoral-neck",
      "name": {
        "en": "Femoral Neck",
        "th": "คอกระดูกต้นขา (Femoral Neck)"
      },
      "classifications": [
        {
          "system": "Garden",
          "fullName": {
            "en": "Garden Classification",
            "th": "ระบบ Garden Classification"
          },
          "description": {
            "en": "Classification system for femoral neck fractures based on the degree of displacement of the fracture line.",
            "th": "ระบบการจัดประเภทกระดูกคอสะโพกหัก (Femoral Neck Fracture) ตามระดับความรุนแรงของการเคลื่อนและทิศทางของแนวกระดูก"
          },
          "investigations": [
            {
              "name": "AP Both Hips View",
              "details": {
                "en": "Anteroposterior view of both hips (15° internal rotation). Essential to compare femoral neck alignment and trabecular pattern with contralateral side.",
                "th": "ภาพเอกซเรย์ข้อสะโพกทั้งสองข้างท่า AP (หมุนขาเข้าด้านใน 15 องศา) เพื่อเปรียบเทียบแนวคอกระดูกและโครงสร้างกับข้างปกติ"
              },
              "imageUrl": "/images/investigations/hip/ap_both_hips_view.jpg"
            },
            {
              "name": "Cross-table Lateral View",
              "details": {
                "en": "Lateral view of the hip without patient movement. Safest for evaluating posterior tilt or displacement.",
                "th": "การถ่ายภาพรังสีข้อสะโพกด้านข้างโดยไม่ต้องขยับผู้ป่วย ปลอดภัยที่สุดสำหรับการดูการเคลื่อนหรือเอียงไปด้านหลัง"
              }
            }
          ],
          "types": [
            {
              "type": "Type I",
              "name": {
                "en": "Incomplete, Valgus Impacted",
                "th": "หักไม่สมบูรณ์ และตอกอัดในแนว Valgus"
              },
              "description": {
                "en": "Incomplete fracture line\nOften valgus impacted\nFemoral neck trabeculae angled laterally relative to head",
                "th": "กระดูกหักแบบไม่สมบูรณ์ (Incomplete Fracture)\nมักมีลักษณะตอกอัดเอียงออกทางด้านข้าง (Valgus Impacted)\nโครงสร้างมีความมั่นคงสูงกว่าประเภทอื่น"
              },
              "moi": {
                "en": "Low-energy fall in elderly patients, or high-energy axial load in younger patients.",
                "th": "การล้มกระแทกจากระดับต่ำในผู้สูงอายุ หรือแรงกระแทกตามแนวแกนอย่างรุนแรงในผู้ป่วยอายุน้อย"
              },
              "treatment": {
                "conservative": {
                  "en": "Bed rest and limited weight-bearing. Rarely recommended due to high risk of secondary displacement.",
                  "th": "นอนพักเตียงและจำกัดการลงน้ำหนัก แต่มักไม่แนะนำเนื่องจากมีอัตราเสี่ยงที่จะเคลื่อนตัวตามมาสูง"
                },
                "operative": {
                  "en": "Internal fixation in situ (typically with 3 cannulated screws) to prevent displacement and promote healing.",
                  "th": "ผ่าตัดยึดตรึงกระดูกภายในโดยไม่มีการดึงจัด (in situ fixation) มักใช้สกรูหัวทะลุ (Cannulated Screws) 3 ตัว เพื่อความมั่นคง"
                }
              },
              "illustrationId": "/images/garden/garden_1.png",
              "xrayDescription": {
                "en": "Fracture line visible on one cortex only, medial trabeculae show valgus angulation (angle > 180° between femoral shaft and head trabeculae).",
                "th": "เห็นรอยหักบางส่วนเพียงด้านเดียว เส้นใยกระดูกฝั่ง Medial มีทิศทางเอียงออกนอกมากกว่าปกติ (ทำมุม > 180 องศา)"
              }
            },
            {
              "type": "Type II",
              "name": {
                "en": "Complete, Undisplaced",
                "th": "หักสมบูรณ์ แต่ไม่มีการเคลื่อนตัว"
              },
              "description": {
                "en": "Complete fracture line\nNo displacement of fragments\nNormal trabecular alignment maintained",
                "th": "กระดูกหักสมบูรณ์ขาดจากกัน (Complete Fracture)\nชิ้นกระดูกยังอยู่ในแนวปกติ ไม่เกิดการเคลื่อนตัว\nทิศทางของแนวเส้นใยกระดูกยังคงตรงกันปกติ"
              },
              "moi": {
                "en": "Low-energy fall directly onto the lateral hip in elderly, or high-energy trauma.",
                "th": "การล้มกระแทกด้านข้างของข้อสะโพกโดยตรงในผู้สูงอายุ หรืออุบัติเหตุรุนแรงในวัยรุ่น"
              },
              "treatment": {
                "conservative": {
                  "en": "Not recommended in active patients due to high risk of displacement.",
                  "th": "ไม่แนะนำให้รักษาแบบประคับประคองในผู้ป่วยที่ยังเคลื่อนไหวได้ดี เพราะเสี่ยงต่อการเคลื่อนตัวสูงมาก"
                },
                "operative": {
                  "en": "Percutaneous cannulated screw fixation (parallel configuration) to maintain alignment.",
                  "th": "ผ่าตัดยึดกระดูกด้วยสกรูหัวทะลุแบบขนานเพื่อรักษาแนวและป้องกันการเคลื่อนที่ของกระดูก"
                }
              },
              "illustrationId": "/images/garden/garden_2.png",
              "xrayDescription": {
                "en": "Complete fracture line across femoral neck. Normal trabecular alignment between femoral head and neck.",
                "th": "รอยหักพาดผ่านคอกระดูกต้นขาทั้งหมด แต่แนวเส้นใยกระดูกของหัวกระดูกสะโพกและคอกระดูกสะโพกยังอยู่ในแนวระนาบปกติ"
              }
            },
            {
              "type": "Type III",
              "name": {
                "en": "Complete, Partially Displaced",
                "th": "หักสมบูรณ์ และเคลื่อนตัวบางส่วน"
              },
              "description": {
                "en": "Complete fracture line\nPartial displacement of fragments\nFemoral head typically tilted in varus and rotated",
                "th": "กระดูกหักสมบูรณ์ร่วมกับการเคลื่อนตัวบางส่วน\nหัวกระดูกสะโพกเอียงชี้เข้าด้านใน (Varus tilt) และบิดตัว\nแนวเส้นใยกระดูกเยื้องออกจากแนวปกติอย่างชัดเจน"
              },
              "moi": {
                "en": "Traumatic fall, typically with rotational force on a loaded extremity.",
                "th": "การล้มกระแทกรุนแรงร่วมกับมีแรงบิดสะโพกขณะลงน้ำหนัก"
              },
              "treatment": {
                "conservative": {
                  "en": "Not indicated.",
                  "th": "ไม่แนะนำสำหรับการรักษาด้วยวิธีนี้"
                },
                "operative": {
                  "en": "Closed/Open reduction and internal fixation in younger patients; Hemiarthroplasty or Total Hip Arthroplasty in elderly patients.",
                  "th": "ผ่าตัดจัดกระดูกและยึดตรึงภายในด้วยสกรูหรืออุปกรณ์พิเศษ in คนอายุน้อย หรือผ่าตัดเปลี่ยนข้อสะโพกเทียม (Hemi/THA) ในผู้สูงอายุ"
                }
              },
              "illustrationId": "/images/garden/garden_3.png",
              "xrayDescription": {
                "en": "Partial displacement with varus collapse. Medial trabeculae of head are out of line with shaft trabeculae.",
                "th": "มีการเคลื่อนตัวบางส่วนและทำมุมงุ้มเข้าด้านใน (Varus) แนวเส้นใยกระดูกของหัวกระดูกสะโพกเยื้องออกนอกแนวของส่วนคอสะโพก"
              }
            },
            {
              "type": "Type IV",
              "name": {
                "en": "Complete, Completely Displaced",
                "th": "หักสมบูรณ์ และแยกจากกันสิ้นเชิง"
              },
              "description": {
                "en": "Complete fracture line\nTotal displacement of fragments\nFemoral head completely detached and returned to neutral acetabular position",
                "th": "กระดูกหักสมบูรณ์และเคลื่อนแยกออกจากกันโดยสิ้นเชิง\nหัวกระดูกสะโพกหลุดขาดเป็นอิสระและวางตัวกลับเข้าแนวเบ้าปกติ\nชิ้นส่วนคอกระดูกต้นขาเคลื่อนลอยสูงขึ้นและออกด้านข้าง"
              },
              "moi": {
                "en": "Severe direct trauma or high-impact fall.",
                "th": "อุบัติเหตุรุนแรงกระแทกโดยตรง หรือการพลัดตกจากที่สูง"
              },
              "treatment": {
                "conservative": {
                  "en": "Not indicated.",
                  "th": "ไม่แนะนำสำหรับการรักษาด้วยวิธีนี้"
                },
                "operative": {
                  "en": "Joint replacement (Hemiarthroplasty or Total Hip Arthroplasty) for elderly due to high risk of Avascular Necrosis (AVN). Joint-preserving fixation for young patients.",
                  "th": "ผ่าตัดเปลี่ยนข้อสะโพกเทียมเป็นหลักสำหรับผู้สูงอายุเนื่องจากมีความเสี่ยงสูงที่จะเกิดหัวกระดูกขาดเลือด (AVN) ส่วนในคนหนุ่มสาวจะพยายามจัดกระดูกและยึดตรึงเพื่อรักษาข้อเดิมไว้"
                }
              },
              "illustrationId": "/images/garden/garden_4.png",
              "xrayDescription": {
                "en": "Complete separation of head and neck. Trabeculae of the head align normally with the pelvis, but neck fragment is displaced upwards/outwards.",
                "th": "หัวกระดูกและคอกระดูกแยกออกจากกันอย่างสมบูรณ์ เส้นใยกระดูกของหัวกระดูกสะโพกกลับมาขนานกับเบ้าสะโพกปกติ แต่ส่วนคอเคลื่อนลอยสูงขึ้นและออกด้านข้าง"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "intertrochanteric",
      "name": {
        "en": "Intertrochanteric",
        "th": "ระหว่างปุ่มกระดูกต้นขา (Intertrochanteric)"
      },
      "classifications": [
        {
          "system": "Evans",
          "fullName": {
            "en": "Evans Classification",
            "th": "ระบบ Evans Classification"
          },
          "description": {
            "en": "Classification system for intertrochanteric femoral fractures based on the post-reduction stability and the integrity of the posteromedial cortex.",
            "th": "ระบบจำแนกกระดูกหักระหว่างปุ่มกระดูกสะโพก (Intertrochanteric Fracture) ประเมินตามความมั่นคงหลังการจัดกระดูก (Post-reduction stability) และความสมบูรณ์ของผนังกระดูกด้านหลังใน (Posteromedial cortex)"
          },
          "investigations": [
            {
              "name": "AP Both Hips View",
              "details": {
                "en": "Anteroposterior view of both hips (15° internal rotation). Essential to compare femoral neck length and trabecular alignment with the uninjured side.",
                "th": "ภาพเอกซเรย์ข้อสะโพกทั้งสองข้างท่า AP (หมุนขาเข้าด้านใน 15 องศา) เพื่อเปรียบเทียบแนวรอยหักและโครงสร้างกับข้างปกติ"
              },
              "imageUrl": "/images/investigations/hip/ap_both_hips_view.jpg"
            },
            {
              "name": "AP Hip View (Affected Side)",
              "details": {
                "en": "True AP view of the affected hip with 15° internal rotation. Profiles the femoral neck length and assesses the fracture line direction.",
                "th": "ภาพเอกซเรย์ข้อสะโพกฝั่งที่หักท่า AP โดยหมุนข้อมือ/ขาเข้าด้านใน 15 องศา เพื่อยืดแนวคอกระดูกต้นขาให้เห็นทิศทางรอยหักชัดเจนที่สุด"
              }
            },
            {
              "name": "Cross-table Lateral View",
              "details": {
                "en": "Lateral view of the hip without moving the injured limb. Safe to evaluate posterior comminution and displacement.",
                "th": "ภาพเอกซเรย์ข้อสะโพกท่าด้านข้างโดยไม่เคลื่อนย้ายขาผู้ป่วย ปลอดภัยและเหมาะสำหรับประเมินการแตกละเอียดและการเคลื่อนของผนังกระดูกด้านหลัง"
              }
            }
          ],
          "types": [
            {
              "type": "Non-displaced",
              "name": {
                "en": "Non-displaced Fracture (Stable)",
                "th": "กระดูกหักชนิดไม่เคลื่อนตัว (Non-displaced - Stable)"
              },
              "description": {
                "en": "2-part 2-cortex fracture line without displacement\nPosteromedial cortex remains intact\nStable pattern capable of resisting compressive loads",
                "th": "รอยหัก 2 ชิ้นแบบไม่เคลื่อนตัว\nผนังกระดูกด้านหลังใน (Posteromedial cortex) ยังคงสมบูรณ์ดี\nเป็นชนิดมั่นคง (Stable) สามารถรองรับแรงกดทับตามแนวแกนได้ดี"
              },
              "moi": {
                "en": "Low-energy fall directly onto the hip in elderly patients with osteoporotic bone.",
                "th": "การล้มกระแทกสะโพกจากระดับต่ำในผู้สูงอายุที่มีภาวะกระดูกพรุน"
              },
              "treatment": {
                "conservative": {
                  "en": "Reserved only for non-ambulatory patients with severe surgical contraindications.",
                  "th": "พิจารณาเฉพาะผู้ป่วยที่ไม่สามารถเดินได้อยู่แล้ว หรือมีข้อห้ามในการผ่าตัดขั้นรุนแรง"
                },
                "operative": {
                  "en": "Prophylactic fixation with a Dynamic Hip Screw (DHS) or Cephalomedullary Nail to allow immediate weight-bearing.",
                  "th": "ผ่าตัดยึดตรึงด้วย Dynamic Hip Screw (DHS) หรือ Cephalomedullary Nail เพื่อให้ลงน้ำหนักได้ทันที"
                }
              },
              "illustrationId": "/images/evans/evans_nondisplaced.png",
              "xrayDescription": {
                "en": "Linear fracture line across the intertrochanteric region without cortical displacement or loss of medial contact.",
                "th": "รอยหักเป็นเส้นพาดผ่านบริเวณ intertrochanteric โดยไม่มีการเคลื่อนตัวของผิวกระดูกหรือการสูญเสียการประกับกัน"
              }
            },
            {
              "type": "Displaced reduced",
              "name": {
                "en": "Displaced Reduced Fracture (Stable)",
                "th": "กระดูกหักชนิดเคลื่อนตัวแต่จัดเข้าที่ได้มั่นคง (Displaced Reduced - Stable)"
              },
              "description": {
                "en": "Displaced 2-part or 3-part fracture pattern\nPosteromedial cortex has minimal comminution\nConverts to a stable pattern once anatomically reduced (medial cortical opposition obtained)",
                "th": "กระดูกหักแบบเคลื่อนตัว 2 หรือ 3 ชิ้น\nผนังกระดูกด้านหลังในแตกละเอียดน้อยมาก\nเมื่อทำการดึงจัดกระดูก (Reduction) ให้ผนังกระดูกฝั่ง Medial ชนประกับกันแล้วจะกลายเป็นชนิดมั่นคง (Stable)"
              },
              "moi": {
                "en": "Fall onto hip or direct lateral trauma.",
                "th": "การล้มกระแทกสะโพกหรือถูกกระแทกทางด้านข้างโดยตรง"
              },
              "treatment": {
                "conservative": {
                  "en": "Not recommended due to high risk of displacement and limb shortening.",
                  "th": "ไม่แนะนำเนื่องจากเสี่ยงต่อกระดูกเคลื่อนและขาสั้นลง"
                },
                "operative": {
                  "en": "Closed reduction to restore medial contact, followed by Dynamic Hip Screw (DHS) or Cephalomedullary Nail fixation.",
                  "th": "ผ่าตัดจัดกระดูกให้ชนกันแล้วยึดด้วย Dynamic Hip Screw (DHS) หรือ Cephalomedullary Nail"
                }
              },
              "illustrationId": "/images/evans/evans_displaced_reduced.png",
              "xrayDescription": {
                "en": "Displaced fracture line that achieves stable medial cortical buttress alignment after closed/open reduction.",
                "th": "กระดูกหักเคลื่อนตัวที่สามารถจัดให้ผิวกระดูกฝั่ง Medial มาชนประกับกันได้อย่างมั่นคงหลังการจัดกระดูก"
              }
            },
            {
              "type": "Displaced not reduced",
              "name": {
                "en": "Displaced Not Reduced Fracture (Unstable)",
                "th": "กระดูกหักชนิดเคลื่อนตัวและไม่มั่นคง (Displaced Not Reduced - Unstable)"
              },
              "description": {
                "en": "3-part fracture with loss of posteromedial support\nLesser trochanter fragment is significantly displaced\nCannot achieve stable medial cortical opposition post-reduction; high risk of varus collapse",
                "th": "กระดูกหัก 3 ชิ้นร่วมกับการสูญเสียการพยุงของผนังกระดูกฝั่ง Posteromedial\nชิ้นส่วนปุ่มกระดูกน้อย (Lesser trochanter) เคลื่อนหลุดแยกออกมาอย่างชัดเจน\nจัดกระดูกแล้วไม่สามารถยันกันได้ มีความเสี่ยงสูงที่จะยุบตัวทำมุมงุ้มเข้าด้านใน (Varus collapse)"
              },
              "moi": {
                "en": "Torsional force on weight-bearing hip or high-energy direct impact.",
                "th": "แรงบิดหมุนขณะขาลงน้ำหนัก หรือแรงกระแทกพลังงานสูง"
              },
              "treatment": {
                "conservative": {
                  "en": "Not recommended due to high rate of varus deformity, nonunion, and bed rest complications.",
                  "th": "ไม่แนะนำอย่างยิ่ง เนื่องจากมีความเสี่ยงสูงที่จะเกิดการผิดรูป กระดูกไม่ติด และภาวะแทรกซ้อน"
                },
                "operative": {
                  "en": "Cephalomedullary Nail (Intramedullary Nail) is preferred to prevent collapse into varus.",
                  "th": "แนะนำผ่าตัดใส่ Cephalomedullary Nail (Intramedullary Nail) เพื่อป้องกันกระดูกยุบตัวเข้าด้านใน"
                }
              },
              "illustrationId": "/images/evans/evans_displaced_not_reduced.png",
              "xrayDescription": {
                "en": "Comminution of posteromedial cortex with displaced lesser trochanter fragment and persistent unreduced instability.",
                "th": "ผนังกระดูกฝั่ง posteromedial แตกละเอียด ชิ้นส่วน lesser trochanter เคลื่อน และยังคงมีความไม่มั่นคงหลังการจัด"
              }
            },
            {
              "type": "Comminuted",
              "name": {
                "en": "Comminuted Fracture (4-Part Unstable)",
                "th": "กระดูกหักแตกละเอียดแบบไม่มั่นคง (Comminuted - 4-Part Unstable)"
              },
              "description": {
                "en": "4-part comminuted fracture involving both greater and lesser trochanters\nComplete loss of posteromedial and lateral cortical support\nHigh risk of fixation failure, screw cut-out, and limb shortening",
                "th": "กระดูกหักแตกละเอียด 4 ชิ้นขึ้นไป รวมทั้งปุ่มกระดูก Greater และ Lesser trochanters\nสูญเสียโครงสร้างพยุงทั้งฝั่ง Posteromedial และ Lateral cortices ทั้งหมด\nมีความเสี่ยงสูงมากต่อกระดูกยุบตัว เหล็กยึดหลุดล้มเหลว และขาสั้นลง"
              },
              "moi": {
                "en": "High-energy trauma or severe fall in osteoporotic bone.",
                "th": "อุบัติเหตุรุนแรงพลังงานสูง หรือการล้มกระแทกอย่างแรงในผู้ป่วยกระดูกพรุนมาก"
              },
              "treatment": {
                "conservative": {
                  "en": "Not recommended.",
                  "th": "ไม่แนะนำ"
                },
                "operative": {
                  "en": "Long/short Cephalomedullary Nail, potentially augmented with a trochanteric stabilizing plate or cement.",
                  "th": "ผ่าตัดใส่ Cephalomedullary Nail อาจร่วมกับการใช้แผ่นเหล็กประคองปุ่มกระดูกหรือซีเมนต์เสริม"
                }
              },
              "illustrationId": "/images/evans/evans_comminuted.png",
              "xrayDescription": {
                "en": "4-part fracture pattern showing severe posteromedial comminution, floating lesser trochanter, and greater trochanter disruption.",
                "th": "กระดูกแตกละเอียด 4 ชิ้น ชิ้นส่วนปุ่มกระดูกใหญ่และเล็กหลุดแยกจากกันอย่างสมบูรณ์"
              }
            },
            {
              "type": "Reversed oblique",
              "name": {
                "en": "Reverse Obliquity Fracture (Unstable)",
                "th": "แนวกระดูกหักเฉียงย้อนกลับ (Reversed Oblique - Unstable)"
              },
              "description": {
                "en": "Fracture line runs from distal-medial to proximal-lateral\nHighly unstable pattern due to medial displacement of femoral shaft by adductor muscle pull\nSliding Hip Screw (DHS) is strictly contraindicated",
                "th": "แนวกระดูกหักเฉียงย้อนกลับ (เฉียงล่าง-ใน ขึ้นบน-นอก)\nไม่มั่นคงอย่างยิ่ง กล้ามเนื้อ Adductors จะดึงแกนกระดูกต้นขาเลื่อนเข้าด้านใน\nห้ามใช้ Dynamic Hip Screw (DHS) โดยเด็ดขาดเนื่องจากมีอัตราล้มเหลวสูง"
              },
              "moi": {
                "en": "High-energy direct trauma such as motor vehicle collision or fall from height.",
                "th": "อุบัติเหตุทางรถยนต์ หรือแรงกระแทกพลังงานสูงจากการตกจากที่สูง"
              },
              "treatment": {
                "conservative": {
                  "en": "Contraindicated.",
                  "th": "ห้ามใช้การรักษาแบบไม่ผ่าตัด"
                },
                "operative": {
                  "en": "Intramedullary Cephalomedullary Nail is the gold standard; or a 95-degree fixed-angle blade plate/DCS. DHS is contraindicated.",
                  "th": "ผ่าตัดใส่ Cephalomedullary Nail (มาตรฐานหลัก) หรือแผ่นดามมุมคงที่ 95 องศา ห้ามใช้ DHS"
                }
              },
              "illustrationId": "/images/evans/evans_reversed_oblique.png",
              "xrayDescription": {
                "en": "Reverse obliquity fracture line running from distal-medial cortex to proximal-lateral cortex.",
                "th": "แนวกระดูกหักเฉียงลากจากฝั่งล่าง-ใน ขึ้นไปฝั่งบน-นอก"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "subtrochanteric",
      "name": {
        "en": "Subtrochanteric",
        "th": "ใต้ปุ่มกระดูกต้นขา (Subtrochanteric)"
      },
      "classifications": [
        {
          "system": "Russell-Taylor",
          "fullName": {
            "en": "Russell-Taylor Classification for Subtrochanteric Femoral Fractures",
            "th": "การจำแนกกระดูกใต้ปุ่มสะโพกหัก Russell-Taylor"
          },
          "description": {
            "en": "Classification of subtrochanteric fractures based on involvement of the piriformis fossa (trochanteric entry site) and extension into the lesser trochanter (medial buttress), dictating choice of intramedullary nail vs plate fixation.",
            "th": "ระบบจำแนกกระดูกใต้ปุ่มสะโพก (Subtrochanteric) หักตามการลุกลามถึง Piriformis fossa (จุดแทงแกนเหล็ก) และการแตกของปุ่มกระดูกน้อย Lesser trochanter (ผนังด้านใน) เพื่อเลือกใช้อุปกรณ์ดามกระดูก"
          },
          "investigations": [
            {
              "name": "AP Pelvis & Full-Length Femur Radiographs",
              "details": {
                "en": "AP Pelvis and full-length AP/lateral radiographs of affected femur. Evaluates piriformis fossa integrity, lesser trochanter continuity, medial wall comminution, and varus angulation.",
                "th": "ภาพเอกซเรย์เชิงกรานและภาพ AP/ด้านข้างของกระดูกต้นขาตลอดแนวยาว ใช้ประเมินความสมบูรณ์ของ Piriformis fossa, กระดูก Lesser trochanter, ผนังด้านใน และมุมเอียง Varus"
              }
            },
            {
              "name": "Cross-Table Lateral View of Hip",
              "details": {
                "en": "Cross-table lateral radiograph of the hip. Essential to inspect posterior neck involvement, trochanteric fossa extension, and sagittal plane displacement without patient movement.",
                "th": "ภาพเอกซเรย์ข้อสะโพกท่าด้านข้างแท้ (Cross-table Lateral) เพื่อดูการแตกร้าวไปด้านหลังของคอสะโพก และทิศทางเคลื่อนตัวในแนว Sagittal"
              }
            },
            {
              "name": "Non-contrast 3D CT Scan of Hip & Femur",
              "details": {
                "en": "High-resolution 3D CT scan. Gold standard to confirm subtle piriformis fossa fracture line propagation and assess 3D medial wall comminution in Type II fractures.",
                "th": "เอกซเรย์คอมพิวเตอร์ (3D CT Scan) เป็นมาตรฐานหลักในการยืนยันรอยแตกแฝงที่พาดเข้า Piriformis fossa และประเมินการแตกละเอียดของผนังด้านใน"
              }
            }
          ],
          "types": [
            {
              "type": "Type IA",
              "name": {
                "en": "Russell-Taylor Type IA (Intact Piriformis Fossa, Intact Lesser Trochanter)",
                "th": "Type IA (Piriformis Fossa สมบูรณ์ + Lesser Trochanter สมบูรณ์)"
              },
              "description": {
                "en": "Fracture line does NOT extend into the piriformis fossa\nLesser trochanter and medial femoral cortex remain INTACT attached to proximal fragment\nPreserved piriformis entry portal and intact medial mechanical buttress\nLowest risk of nonunion and varus collapse",
                "th": "รอยหัก **ไม่ลุกลาม** เข้าไปในบริเวณ Piriformis fossa\nปุ่มกระดูกน้อย Lesser trochanter และผนังกระดูกด้านใน (Medial cortex) ยังคง **สมบูรณ์ไม่แตก**\nจุดแทงแกนเหล็กสมบูรณ์ดี และมีผนังกระดูกด้านในรับแรงอัดแน่นหนา\nความเสี่ยงกระดูกไม่ติดและการเอียงทรุด Varus ต่ำที่สุด"
              },
              "moi": {
                "en": "Direct impact to lateral thigh or bending moment across subtrochanteric region.",
                "th": "แรงกระแทกตรงเข้าต้นขาด้านข้าง หรือแรงดัดงอพาดผ่านบริเวณใต้ปุ่มสะโพก"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "CONTRAINDICATED in adults. High rate of severe varus malunion and nonunion.",
                  "th": "ห้ามใช้การรักษาด้วยวิธีนี้ ทำให้กระดูกติดโกงเกเอียง (Varus) และไม่ติดรุนแรง"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT (GOLD STANDARD). Standard Antegrade Intramedullary Nailing (IMN) or Reconstruction Cephalomedullary Nail. Excellent success rate (>95%).",
                  "th": "แนะนำผ่าตัดมาตรฐานหลัก (Gold Standard IMN) ดามแกนเหล็กในโพรงกระดูก Antegrade IMN หรือ Reconstruction Nail อัตราสำเร็จสูงมาก (>95%)"
                }
              },
              "illustrationId": "/images/russell_taylor/russell_1a.png",
              "xrayDescription": {
                "en": "Subtrochanteric fracture below lesser trochanter with intact piriformis fossa and intact medial cortex.",
                "th": "เห็นรอยหักใต้ปุ่มกระดูกน้อย โดย Piriformis fossa และผนังกระดูกด้านในยังสมบูรณ์ดี"
              }
            },
            {
              "type": "Type IB",
              "name": {
                "en": "Russell-Taylor Type IB (Intact Piriformis Fossa, Disrupted Lesser Trochanter)",
                "th": "Type IB (Piriformis Fossa สมบูรณ์ + Lesser Trochanter แตกชำรุด)"
              },
              "description": {
                "en": "Fracture line does NOT extend into the piriformis fossa\nBUT fracture extends into and displaces the lesser trochanter (loss of medial cortical buttress)\nLoss of medial mechanical support leads to high varus bending moments\nPiriformis fossa entry site is still available for nailing",
                "th": "รอยหัก **ไม่ลุกลาม** เข้าไปใน Piriformis fossa\nแต่รอยหักพาดแตกผ่านปุ่มกระดูกน้อย Lesser trochanter (สูญเสียผนังค้ำยันด้านใน Medial buttress)\nไร้ผนังกระดูกด้านในค้ำยัน ทำให้เสี่ยงสูงต่อการทรุดเอียง Varus\nจุดแทงแกนเหล็กบริเวณ Piriformis fossa ยังใช้งานได้ดี"
              },
              "moi": {
                "en": "High-energy torsional or bending trauma.",
                "th": "อุบัติเหตุแรงบิดหรือแรงดัดงอพลังงานสูง"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "CONTRAINDICATED.",
                  "th": "ห้ามใช้การรักษาด้วยวิธีนี้"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. Reconstruction Cephalomedullary Nail (e.g. Gamma Nail, PFNA, Intertan) with dual femoral head screws/blade to span medial defect and prevent varus collapse.",
                  "th": "แนะนำผ่าตัดดามแกนเหล็กชนิดแทงสกรูเข้าคอสะโพก (Reconstruction Cephalomedullary Nail) เพื่อต้านแรงทรุดเอียง Varus"
                }
              },
              "illustrationId": "/images/russell_taylor/russell_1b.png",
              "xrayDescription": {
                "en": "Subtrochanteric fracture involving lesser trochanter fragment with intact trochanteric entry fossa.",
                "th": "เห็นรอยหักพาดผ่านปุ่มกระดูกน้อยแตกหลุด โดยจุด Piriformis fossa บนหัวกระดูกยังคงสมบูรณ์"
              }
            },
            {
              "type": "Type IIA",
              "name": {
                "en": "Russell-Taylor Type IIA (Extension into Piriformis Fossa, Intact Lesser Trochanter)",
                "th": "Type IIA (Piriformis Fossa แตก + Lesser Trochanter สมบูรณ์)"
              },
              "description": {
                "en": "Fracture line EXTENDS into the piriformis fossa (trochanteric fossa entry site is compromised)\nLesser trochanter and medial cortex remain INTACT\nStandard piriformis-entry nailing is CONTRAINDICATED (causes fracture displacement upon nail insertion)\nRequires trochanteric entry nail or fixed-angle plate",
                "th": "รอยหัก **พาดลุกลามแตก** เข้าไปใน Piriformis fossa (จุดแทงแกนเหล็กพังทลาย)\nแต่ปุ่มกระดูกน้อย Lesser trochanter และผนังด้านในยังคง **สมบูรณ์**\nห้ามแทงแกนเหล็กผ่าน Piriformis fossa (จะทำให้ชิ้นกระดูกปริแยกเมื่อดันเหล็กผ่าน)\nจำเป็นต้องใช้แกนเหล็กแทงผ่าน Greater trochanter หรือแผ่นเหล็กดามกระดูก"
              },
              "moi": {
                "en": "High-energy axial loading and violent bending force.",
                "th": "แรงอัดตามแนวแกนและแรงดัดงอรุนแรงพลังงานสูง"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "CONTRAINDICATED.",
                  "th": "ห้ามใช้การรักษาด้วยวิธีนี้"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. Greater Trochanteric Entry Cephalomedullary Nail OR Fixed-Angle 95° Blade Plate / Proximal Femoral Locking Plate (PFLP).",
                  "th": "แนะนำผ่าตัดดามแกนเหล็กแบบเข้าทาง Greater Trochanter หรือใช้แผ่นเหล็กล็อค Proximal Femoral Locking Plate (PFLP)"
                }
              },
              "illustrationId": "/images/russell_taylor/russell_2a.png",
              "xrayDescription": {
                "en": "Fracture line propagating proximally into trochanteric fossa with preserved lesser trochanter.",
                "th": "เห็นรอยหักเฉียงขึ้นบนพาดเข้าเบ้า Piriformis fossa โดยปุ่มกระดูกน้อยด้านในยังคงอยู่ดี"
              }
            },
            {
              "type": "Type IIB",
              "name": {
                "en": "Russell-Taylor Type IIB (Piriformis Fossa + Lesser Trochanter Disrupted)",
                "th": "Type IIB (Piriformis Fossa แตก + Lesser Trochanter แตก - รุนแรงที่สุด)"
              },
              "description": {
                "en": "Fracture line EXTENDS into BOTH the piriformis fossa AND the lesser trochanter / medial cortex\nMOST SEVERE and UNSTABLE subtrochanteric fracture pattern\nTotal loss of both entry portal structural integrity and medial mechanical buttress\nExtremely high risk of nonunion, fixation failure, and severe shorten/varus deformity",
                "th": "รอยหัก **พาดลุกลามแตกทั้งใน Piriformis fossa และปุ่มกระดูกน้อย Lesser trochanter**\nเป็นรูปแบบหักใต้ปุ่มสะโพกที่ **รุนแรงและไม่มั่นคงที่สุด (Most Severe & Unstable)**\nสูญเสียทั้งจุดแทงแกนเหล็กและผนังค้ำยันด้านในสมบูรณ์\nเสี่ยงสูงสุดต่อกระดูกไม่ติด โลหะดามกระดูกหักล้มเหลว และขาหดสั้นเอียง"
              },
              "moi": {
                "en": "Extreme high-energy trauma (motorcycle crash, high-speed rollover, fall from great height).",
                "th": "อุบัติเหตุพลังงานสูงรุนแรงสุดขีด (รถจักรยานยนต์ชนรุนแรง, ตกจากที่สูงมาก)"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "CONTRAINDICATED. Results in severe permanent limb shortening and invalidism.",
                  "th": "ห้ามใช้การรักษาด้วยวิธีนี้ ทำให้พิการขาหดสั้นอย่างถาวร"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. Proximal Femoral Locking Plate (PFLP) or 95° Dynamic Condylar Screw (DCS) / Blade Plate with cerclage cable medial reconstruction, OR Trochanteric Entry Cephalomedullary Reconstruction Nail with open reduction of medial wall.",
                  "th": "แนะนำผ่าตัดยึดแผ่นเหล็กล็อค Proximal Femoral Locking Plate (PFLP) หรือ 95° Blade Plate ร่วมกับรัดลวด Cerclage Cable คืนรูปผนังด้านใน"
                }
              },
              "illustrationId": "/images/russell_taylor/russell_2b.png",
              "xrayDescription": {
                "en": "Comminuted subtrochanteric fracture extending into both trochanteric fossa and lesser trochanter with medial wall fragmentation.",
                "th": "เห็นรอยหักแตกป่นแตกพาดเข้าทั้งเบ้า Piriformis fossa และปุ่มกระดูกน้อย พร้อมชิ้นกระดูกด้านในแตกกระจัดกระจาย"
              }
            }
          ]
        }
      ]
    },
    {
      "id": "femoral-shaft",
      "name": {
        "en": "Femoral Shaft",
        "th": "แกนกระดูกต้นขา (Femoral Shaft)"
      },
      "classifications": [
        {
          "system": "Winquist-Hansen",
          "fullName": {
            "en": "Winquist & Hansen Classification for Femoral Shaft Fractures",
            "th": "การจำแนกกระดูกแกนต้นขาหักแตกละเอียด Winquist & Hansen"
          },
          "description": {
            "en": "Classification of femoral shaft comminution based on the percentage of cortical contact remaining between main proximal and distal fragments after reduction, dictating rotational and length stability for intramedullary nailing.",
            "th": "ระบบจำแนกกระดูกแกนต้นขาหักแตกละเอียด (Comminution) ตามระดับการสัมผัสกันของผนังกระดูก (Cortical contact) ชิ้นหลักชิ้นบนและชิ้นล่าง ภายหลังจัดกระดูกเพื่อบอกความมั่นคงแนวหมุนและการหดสั้น"
          },
          "investigations": [
            {
              "name": "Full-Length AP & Lateral Femur Radiographs",
              "details": {
                "en": "Full-length AP and lateral radiographs including both hip and knee joints. Essential to evaluate fracture pattern, comminution percentage, cortical contact, and rule out ipsilateral femoral neck fracture (~2-6% co-occurrence).",
                "th": "ภาพเอกซเรย์ต้นขาท่า AP และด้านข้างตลอดแนวยาวรวมถึงข้อสะโพกและข้อเข่า เป็นมาตรฐานหลักในการประเมินระดับการแตกละเอียด (Type I-IV) และตรวจหักร่วมของคอสะโพก (Co-existing Femoral Neck Fracture 2-6%)"
              }
            },
            {
              "name": "AP Pelvis & Dedicated Hip Radiographs",
              "details": {
                "en": "AP Pelvis and dedicated internal rotation hip views. Mandatory screening for hidden non-displaced ipsilateral femoral neck fracture prior to nailing.",
                "th": "ภาพเอกซเรย์เชิงกรานและข้อสะโพกเฉพาะทาง เพื่อตรวจกรองหารอยหักคอสะโพกฝั่งเดียวกันที่ซ่อนอยู่ก่อนลงมือแทงแกนเหล็ก IMN"
              }
            },
            {
              "name": "Non-contrast CT Scan of Hip & Femur",
              "details": {
                "en": "CT scan of pelvis and femur. Indicated in complex comminuted Type III/IV fractures or suspected occult femoral neck/head fractures.",
                "th": "เอกซเรย์คอมพิวเตอร์ (CT scan) พิจารณาทำในกรณีแตกละเอียดรุนแรง Type III/IV หรือสงสัยกระดูกคอสะโพกหักร่วม"
              }
            }
          ],
          "types": [
            {
              "type": "Type 0",
              "name": {
                "en": "Winquist Type 0 (No Comminution / 100% Cortical Contact)",
                "th": "Winquist Type 0 (ไม่มีการแตกละเอียด - ผนังกระดูกแตะกัน 100%)"
              },
              "description": {
                "en": "Simple 2-part transverse, oblique, or spiral fracture pattern with NO comminution\nFull 100% circumferential cortical contact between proximal and distal shaft fragments\nFully stable against rotation and axial shortening once reduced\nExcellent union rate (>99%)",
                "th": "รอยหัก 2 ชิ้นแบบเรียบ (ขวาง, เฉียง หรือเกลียว) โดยไม่มีชิ้นกระดูกแตกละเอียดเลย\nผนังกระดูกชิ้นหลักบนและล่างสัมผัสแตะกันสมบูรณ์ 100%\nมีความมั่นคงสูงสุดในการป้องกันการหดสั้นและการหมุนบิดเมื่อจัดกระดูกเข้าที่\nอัตรากระดูกติดสูงมาก (>99%)"
              },
              "moi": {
                "en": "Direct impact, low-energy fall, or torsional twisting force on the femoral shaft.",
                "th": "แรงกระแทกตรง แรงล้ม หรือแรงบิดหมุนแกนกระดูกต้นขา"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "Not recommended in adults. Reserved only for patients with severe surgical contraindications.",
                  "th": "ไม่แนะนำในผู้ใหญ่ พิจารณาเฉพาะผู้ป่วยที่มีข้อห้ามในการผ่าตัดขั้นรุนแรง"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT (GOLD STANDARD). Reamed Antegrade or Retrograde Intramedullary Nailing (IMN) with static locking screws.",
                  "th": "แนะนำผ่าตัดมาตรฐานหลัก (Gold Standard IMN) แทงแกนเหล็กคว้านแกนกระดูก (Reamed Intramedullary Nail) ยึดสกรูยึดแกน"
                }
              },
              "illustrationId": "/images/winquist_hansen/winquist_0.png",
              "xrayDescription": {
                "en": "Simple 2-part transverse or oblique fracture line without any comminution or butterfly fragments (100% cortical contact).",
                "th": "เห็นรอยหักขวางหรือเฉียง 2 ชิ้นแบบไม่มีเศษกระดูกแตกละเอียดเลย (ผนังกระดูกแตะกัน 100%)"
              }
            },
            {
              "type": "Type I",
              "name": {
                "en": "Winquist Type I (Minimal Comminution / >75% Cortical Contact)",
                "th": "Winquist Type I (แตกละเอียดน้อย - ผนังกระดูกแตะกัน > 75%)"
              },
              "description": {
                "en": "Minimal comminution with a small butterfly fragment (<25% of shaft width)\nAt least 75% or more circumferential cortical contact remains between main proximal and distal fragments\nHigh intrinsic stability against shortening and rotation\nExcellent union rate (>99%)",
                "th": "กระดูกหักแตกละเอียดเพียงเล็กน้อย มีชิ้นกระดูกปีกผีเสื้อ (Butterfly fragment) ขนาดเล็ก (<25% ของความกว้างแกนกระดูก)\nผนังกระดูกชิ้นหลักบนและล่างสัมผัสกันมากกว่า **75%** ขึ้นไป\nมีความมั่นคงสูงมากในการป้องกันการหดสั้นและการหมุนบิด\nอัตรากระดูกติดสูงมาก (>99%)"
              },
              "moi": {
                "en": "Direct impact trauma or bending force across the femoral shaft.",
                "th": "การบาดเจ็บจากแรงกระแทกตรง หรือแรงดัดงอบนแกนกระดูกต้นขา"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "Not recommended in adults. Skeletal traction + spica casting historically reserved for severe surgical contraindications.",
                  "th": "ไม่แนะนำในผู้ป่วย adultos ดึงถ่วงน้ำหนักดามเฝือกใช้เฉพาะกรณีมีข้อห้ามผ่าตัดรุนแรง"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT (GOLD STANDARD). Reamed Antegrade or Retrograde Intramedullary Nailing (IMN) with static or dynamic locking screws. High union rate with early weight-bearing.",
                  "th": "แนะนำผ่าตัดมาตรฐานหลัก (Gold Standard IMN) แทงแกนเหล็กคว้านแกนกระดูก (Reamed Intramedullary Nail) ยึดสกรูยึดแกน ช่วยให้ลงน้ำหนักเดินได้เร็ว"
                }
              },
              "illustrationId": "/images/winquist_hansen/winquist_1.png",
              "xrayDescription": {
                "en": "Transverse or oblique fracture with small butterfly fragment maintaining >75% cortical contact.",
                "th": "เห็นรอยหักขวางหรือเฉียง พร้อมชิ้นกระดูกปีกผีเสื้อขนาดเล็ก โดยผนังกระดูกหลักยังแตะกันเกิน 75%"
              }
            },
            {
              "type": "Type II",
              "name": {
                "en": "Winquist Type II (Moderate Comminution / 50-75% Cortical Contact)",
                "th": "Winquist Type II (แตกละเอียดปานกลาง - ผนังกระดูกแตะกัน 50-75%)"
              },
              "description": {
                "en": "Moderate comminution with a larger butterfly fragment (up to 50% shaft width)\nBetween 50% and 75% circumferential cortical contact remains between main fragments\nStable against shortening and rotation once reduced\nGood prognosis with intramedullary nailing",
                "th": "กระดูกหักแตกละเอียดปานกลาง ชิ้นกระดูกปีกผีเสื้อขนาดใหญ่ขึ้น (ขนาดไม่เกิน 50% ของความกว้างแกนกระดูก)\nผนังกระดูกชิ้นหลักยังคงสัมผัสแตะกันได้ **50% ถึง 75%**\nยังคงความมั่นคงต่อการหดสั้นและการหมุนบิดได้เมื่อจัดกระดูกเข้าที่\nผลการรักษาดีมากเมื่อยึดแกนเหล็ก IMN"
              },
              "moi": {
                "en": "Moderate-energy trauma, vehicular accidents, or sports collisions.",
                "th": "อุบัติเหตุแรงกระแทกพลังงานปานกลาง เช่น รถยนต์ชน หรือการเล่นกีฬา"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "CONTRAINDICATED. Causes shortening, rotation deformity, and joint stiffness.",
                  "th": "ห้ามใช้การรักษาด้วยวิธีนี้ ทำให้ขาหดสั้น หมุนเบี้ยว และข้อติด"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. Reamed Interlocked Intramedullary Nailing (IMN) with static proximal and distal locking screws.",
                  "th": "แนะนำผ่าตัดยึดแกนเหล็ก (Reamed Interlocked IMN) ล็อคสกรูหัวท้ายคงสภาพความยาวแกนกระดูก"
                }
              },
              "illustrationId": "/images/winquist_hansen/winquist_2.png",
              "xrayDescription": {
                "en": "Butterfly fragment involving up to 50% of shaft width with 50-75% cortical contact remaining.",
                "th": "เห็นชิ้นกระดูกปีกผีเสื้อขนาดปานกลางโดยผนังกระดูกหลักยังคงแตะกันอยู่ 50-75%"
              }
            },
            {
              "type": "Type III",
              "name": {
                "en": "Winquist Type III (Severe Comminution / <50% Cortical Contact)",
                "th": "Winquist Type III (แตกละเอียดรุนแรง - ผนังกระดูกแตะกัน < 50%)"
              },
              "description": {
                "en": "Severe comminution with large butterfly fragment encompassing >50% of shaft width\nLESS THAN 50% circumferential cortical contact remains between main proximal and distal fragments\nUNSTABLE in both length and rotation\nRequires static interlocking screws to prevent shortening (telescoping)",
                "th": "กระดูกหักแตกละเอียดรุนแรง ชิ้นกระดูกปีกผีเสื้อใหญ่กว่า **50%** ของความกว้างแกนกระดูก\nผนังกระดูกชิ้นหลักบนและล่างสัมผัสกัน **น้อยกว่า 50%**\n**ไม่มั่นคง (Unstable)** ทั้งในแนวความยาวและการหมุนบิด\nจำเป็นต้องยึดสกรูยึดแกน Static Interlocking เพื่อป้องกันกระดูกรูดทรุดหดสั้น (Telescoping)"
              },
              "moi": {
                "en": "High-energy trauma (motorcycle crash, high-speed MVA, pedestrian hit).",
                "th": "อุบัติเหตุพลังงานสูงรุนแรง (รถจักรยานยนต์ล้ม, รถยนต์ชนความเร็วสูง, คนเดินถนนถูกชน)"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "CONTRAINDICATED.",
                  "th": "ห้ามใช้การรักษาด้วยวิธีนี้"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. Statically Locked Reamed Intramedullary Nailing (IMN) with dual proximal and distal locking screws. Maintains length, alignment, and rotation.",
                  "th": "แนะนำผ่าตัดยึดแกนเหล็กชนิดหมุดล็อคเต็มรูปแบบ (Static Interlocked IMN) ขันสกรูยึดสองตัวทั้งส่วนบนและล่าง เพื่อยึดความยาวและความหมุน"
                }
              },
              "illustrationId": "/images/winquist_hansen/winquist_3.png",
              "xrayDescription": {
                "en": "Large butterfly fragment >50% shaft width with <50% cortical contact between major proximal and distal fragments.",
                "th": "เห็นชิ้นกระดูกแตกปีกผีเสื้อใหญ่เกินครึ่งแกน โดยผนังกระดูกชิ้นหลักแตะกันน้อยกว่า 50%"
              }
            },
            {
              "type": "Type IV",
              "name": {
                "en": "Winquist Type IV (Segmental Comminution / 0% Cortical Contact / Flail)",
                "th": "Winquist Type IV (แตกละเอียดสูญเสียการแตะสมบูรณ์ - ผนังกระดูกแตะกัน 0%)"
              },
              "description": {
                "en": "Complete comminution across entire shaft circumference with NO cortical contact (0%) between main proximal and distal fragments\nSegmental comminution or flail segment\nHIGHLY UNSTABLE in length, rotation, and alignment\nHigh risk of delayed union, nonunion, or compartment syndrome",
                "th": "กระดูกหักแตกละเอียดกระจัดกระจายรอบวงแกนกระดูก **สูญเสียการสัมผัสของผนังกระดูกสมบูรณ์ (0%)**\nเกิดเป็นชิ้นกระดูกหักแตกหลายท่อนลอยอิสระ (Flail segment)\n**ไม่มั่นคงขั้นสูงสุด (Highly Unstable)** เสี่ยงกระดูกหดสั้นและเบี้ยวเอียงรุนแรง\nมีความเสี่ยงสูงต่อภาวะกระดูกติดช้า กระดูกไม่ติด หรือแรงดันกล้ามเนื้อสูง (Compartment Syndrome)"
              },
              "moi": {
                "en": "Extreme high-energy impact, crush injury, or gunshot wound.",
                "th": "การบาดเจ็บแรงอัดทับบดพลังงานสูงรุนแรงสุดขีด หรือบาดแผลกระสุนปืน"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "CONTRAINDICATED. Causes crippling shortening and nonunion.",
                  "th": "ห้ามใช้การรักษาด้วยวิธีนี้ ทำให้ขาพิการหดสั้นและกระดูกไม่ติด"
                },
                "operative": {
                  "en": "RECOMMENDED SURGICAL OPTIONS. 1) Statically Locked Reamed Intramedullary Nailing (IMN) with dual locking screws. OR 2) Damage Control External Fixation followed by staged IMN or Submuscular Locking Plating in polytrauma patients.",
                  "th": "แนะนำผ่าตัด: 1) ยึดแกนเหล็ก Static Interlocked IMN ขันหมุดล็อคแน่นหนา หรือ 2) ผ่าตัดยึดตรึงภายนอกฉุกเฉิน (External Fixation) แล้วแปลงเป็นผ่าตัดดามแกนเหล็ก/แผ่นเหล็กล็อคในภายหลัง"
                }
              },
              "illustrationId": "/images/winquist_hansen/winquist_4.png",
              "xrayDescription": {
                "en": "Segmental comminution with complete loss of cortical contact (0%) between main proximal and distal shaft fragments.",
                "th": "เห็นรอยหักแตกป่นหลายชิ้นลอยแยกจากกัน โดยผนังกระดูกหลักไม่สัมผัสแตะกันเลย (0%)"
              }
            }
          ]
        }
      ]
    }
  ]
};
