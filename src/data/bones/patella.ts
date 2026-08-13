import type { BoneData } from "../../types";

export const patellaBone: BoneData = {
  "id": "patella",
  "name": {
    "en": "Patella",
    "th": "กระดูกสะบ้าหัวเข่า"
  },
  "description": {
    "en": "Kneecap",
    "th": "ลูกสะบ้าหัวเข่า"
  },
  "pediatric": false,
  "regions": [
    {
      "id": "patella",
      "name": {
        "en": "Patella",
        "th": "กระดูกสะบ้า (Patella)"
      },
      "classifications": [
        {
          "system": "Anatomical & Functional",
          "fullName": {
            "en": "Anatomical & Functional Patella Fracture Classification",
            "th": "การจำแนกกระดูกสะบ้าหักตามกายวิภาคและหน้าที่กล้ามเนื้อเหยียดเข่า"
          },
          "description": {
            "en": "Practical classification of patellar fractures based on fracture morphology, displacement, articular step-off, and extensor mechanism (Straight Leg Raise) integrity, dictating non-operative vs surgical management (Tension Band Wiring, Plating, Pole Anchor).",
            "th": "ระบบจำแนกกระดูกสะบ้าหักตามรูปแบบรอยหัก การเคลื่อนตัว รอยเกยผิวข้อ และความสมบูรณ์ของกล้ามเนื้อ/เอ็นเหยียดข้อเข่า (Straight Leg Raise - SLR) ซึ่งเป็นตัวชี้ขาดการรักษาระหว่างเฝือก Cylinder Cast กับการผ่าตัด Tension Band Wiring (TBW)"
          },
          "concept": {
            "title": {
              "en": "Patella Fracture Concept & Surgical Decision Matrix",
              "th": "แนวคิดและหลักการรักษา Patella Fracture (SLR & TBW Principle)"
            },
            "showTable": true,
            "description": {
              "en": "Management of Patellar Fractures is guided by 2 fundamental clinical principles:\n\n1. Extensor Mechanism Integrity (Active Straight Leg Raise - SLR Test):\n   • Intact SLR (Patient can elevate extended leg): Medial & lateral retinacula are intact. Allows non-operative treatment with cylinder cast/brace for Nondisplaced, Vertical, or Undisplaced Comminuted fractures.\n   • Disrupted SLR (Patient CANNOT perform SLR or has extension lag >10°): Indicates torn retinacula and fracture gap >2-3mm. Requires SURGICAL FIXATION.\n\n2. Biomechanical Principle of Tension Band Wiring (TBW):\n   • TBW converts anterior tensile pull (from Quadriceps muscle contraction during knee flexion) into dynamic compressive forces across the posterior articular surface, promoting rigid bone healing.",
              "th": "แนวคิดหลักในการวินิจฉัยและตัดสินใจรักษา Patellar Fracture ขึ้นอยู่กับ 2 หัวใจสำคัญ:\n\n1. กลไกการเหยียดเข่าสมบูรณ์หรือไม่? (ประเมินด้วยการตรวจ Active Straight Leg Raise - SLR Test):\n   • ยกขาตรงได้ (Intact SLR): แสดงว่าเอ็น Retinaculum สองข้างยังไม่ขาด สามารถรักษาแบบไม่ผ่าตัดด้วยเฝือก Cylinder Cast (สำหรับประเภท Nondisplaced, Vertical, หรือ Undisplaced Comminuted)\n   • ยกขาตรงไม่ได้ (Disrupted SLR / ภาวะ Extension Lag > 10°): แสดงว่าเอ็น Retinaculum ฉีกขาด และมีระยะอ้าช่องหัก > 2-3 มม. จำเป็นต้องผ่าตัดจัดดามกระดูก (ORIF)\n\n2. หลักการชีวกลศาสตร์ Tension Band Wiring (TBW):\n   • วิธี TBW จะเปลี่ยนแรงดึงด้านหน้า (Anterior tensile force จากการหดตัวของ Quadriceps ขณะงอเข่า) ให้กลายเป็นแรงอัดแน่น (Dynamic Articular Compression) บริเวณผิวข้อด้านหลัง ช่วยให้กระดูกติดแน่นยึดตรึงได้ดีเยี่ยม"
            }
          },
          "investigations": [
            {
              "name": "AP Knee View",
              "details": {
                "en": "Standard AP knee view. Evaluates fracture lines, bipartite patella differential, and mediolateral displacement.",
                "th": "ภาพเอกซเรย์ข้อเข่าท่า AP มาตรฐาน ใช้ประเมินแนวกระดูกหัก รอยแยกสองซีก (Bipartite patella) และการเคลื่อนตัวออกด้านข้าง"
              }
            },
            {
              "name": "True Lateral Knee View (30° Flexion)",
              "details": {
                "en": "True lateral view with 30° flexion. Essential for measuring fracture gap (>2mm), articular step-off (>1mm), and patellar height (Insall-Salvati ratio for patella alta/baja).",
                "th": "ภาพเอกซเรย์ข้อเข่าท่าด้านข้างงอ 30 องศา สำคัญที่สุดในการวัดระยะอ้าช่องรอยหัก (>2มม.), รอยเกยผิวข้อ (>1มม.) และระดับความสูงของลูกสะบ้า"
              }
            },
            {
              "name": "Skyline / Merchant View (Sunrise View)",
              "details": {
                "en": "Axial patellofemoral view with 30-45° flexion. Visualizes vertical/sagittal fracture lines, osteochondral fragments, and patellar tracking in the trochlear groove.",
                "th": "ภาพเอกซเรย์หน้าตัดสะบ้า (Skyline/Merchant View) สำคัญมากในการดูรอยหักแนวดิ่ง (Vertical/Sagittal) และชิ้นกระดูกกะเทาะในเบ้า Trochlear groove"
              }
            }
          ],
          "types": [
            {
              "type": "Nondisplaced",
              "name": {
                "en": "Nondisplaced",
                "th": "1. Nondisplaced (หักไม่เคลื่อนตัว - กลไกเหยียดเข่าสมบูรณ์)"
              },
              "description": {
                "en": "Minimal displacement (fracture gap < 2 mm, articular step-off < 1 mm)\nExtensor mechanism INTACT (patient can perform active Straight Leg Raise - SLR)\nRetinacula on medial and lateral sides are un-torn\nExcellent prognosis with conservative management",
                "th": "รอยหักเคลื่อนตัวน้อยมาก (ระยะอ้าช่องหัก < 2 มม. และผิวข้อเกย < 1 มม.)\nกลไกการเหยียดข้อเข่าสมบูรณ์ (ผู้ป่วยสามารถนอนยกขาตรง Straight Leg Raise - SLR ได้)\nพังผืดเอ็น Retinaculum ด้านข้างและด้านในยังไม่ฉีกขาด\nผลการรักษาดีเยี่ยมโดยไม่ต้องผ่าตัด"
              },
              "moi": {
                "en": "Direct low-energy blow onto the knee during a simple fall.",
                "th": "แรงกระแทกโดยตรงพลังงานต่ำเข้าที่หน้าเข่าขณะล้ม"
              },
              "treatment": {
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED TREATMENT. Cylinder cast or hinged knee brace locked in extension for 4-6 weeks with immediate weight-bearing as tolerated. Early isometric quadriceps exercises.",
                  "th": "แนะนำรักษาแบบไม่ผ่าตัด ใส่เฝือกดามขาตรง (Cylinder cast) หรือเฝือกดามข้อเข่าล็อคตรง นาน 4-6 สัปดาห์ ลงน้ำหนักได้เท่าที่ทนไหวร่วมกับฝึกเกร็งหน้าขา"
                },
                "operative": {
                  "en": "Not indicated unless secondary displacement occurs during follow-up.",
                  "th": "ไม่มีข้อบ่งชี้ในการผ่าตัด"
                }
              },
              "illustrationId": "/images/patella/nondisplaced.png",
              "xrayDescription": {
                "en": "Faint transverse or vertical line with <2mm gap and smooth articular surface on lateral view.",
                "th": "เห็นรอยหักจางๆ ช่องอ้า <2มม. ผิวข้อเรียบสนิทในท่าด้านข้าง"
              }
            },
            {
              "type": "Transverse",
              "name": {
                "en": "Transverse (Displaced)",
                "th": "2. Transverse (หักแนวขวางเคลื่อนตัว - ข้อบ่งชี้คลาสสิก TBW)"
              },
              "description": {
                "en": "Transverse fracture with gap > 2-3 mm or articular step-off > 1-2 mm\nExtensor mechanism DISRUPTED (patient CANNOT perform active Straight Leg Raise - SLR)\nMedial and lateral retinacula are torn\nClassic indication for Tension Band Wiring (TBW)",
                "th": "รอยหักแนวขวางที่อ้าแยกกว้าง > 2-3 มม. หรือผิวข้อเกยขั้นบันได > 1-2 มม.\nกลไกการเหยียดข้อเข่าฉีกขาดสูญเสียไป (ผู้ป่วยไม่สามารถยกขาตรง SLR ได้เลย)\nพังผืดเอ็น Retinaculum ฉีกขาดทั้งสองข้าง\nเป็นข้อบ่งชี้คลาสสิกสำหรับการผ่าตัด Tension Band Wiring (TBW)"
              },
              "moi": {
                "en": "Indirect violent quadriceps contraction or direct impact to flexed knee.",
                "th": "การหดตัวอย่างรุนแรงฉับพลันของกล้ามเนื้อ Quadriceps หรือล้มกระแทกหน้าเข่าอย่างจัง"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "CONTRAINDICATED. Results in permanent extension lag, nonunion, and severe disability.",
                  "th": "ห้ามใช้การรักษาด้วยวิธีนี้ ทำให้สูญเสียการเหยียดขาถาวร กระดูกไม่ติด และพิการ"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT (GOLD STANDARD). Open reduction and internal fixation (ORIF) using Tension Band Wiring (TBW) with 2 longitudinal K-wires and a figure-of-8 stainless steel wire loop + retinacular repair.",
                  "th": "แนะนำผ่าตัดมาตรฐาน (Gold Standard ORIF) ด้วยวิธี Tension Band Wiring (TBW) ปัก K-wires คู่ขนานร่วมกับลวดเลข 8 และผ่าตัดซ่อมเอ็น Retinaculum"
                }
              },
              "illustrationId": "/images/patella/displaced_transverse.png",
              "xrayDescription": {
                "en": "Wide separation gap >2-3mm between superior and inferior patellar fragments on lateral view.",
                "th": "เห็นชิ้นกระดูกส่วนบนและล่างอ้าแยกออกจากกันกว้าง >2-3 มม. อย่างชัดเจนในท่าด้านข้าง"
              }
            },
            {
              "type": "Lower or Upper Pole",
              "name": {
                "en": "Lower or Upper Pole",
                "th": "3. Lower or Upper Pole (หักขั้วล่าง/ขั้วบน - เอ็น Patellar Tendon หลุด)"
              },
              "description": {
                "en": "Avulsion fracture involving the non-articular inferior pole (most common) or superior pole\nAttachment of Patellar Tendon (inferior pole) or Quadriceps Tendon (superior pole) is disrupted\nSmall extra-articular or intra-articular pole fragment\nDisplaces proximally causing Patella Alta (high-riding patella)",
                "th": "รอยหักกะเทาะหลุดบริเวณขั้วล่าง (Inferior pole - พบบ่อยที่สุด) หรือขั้วบน\nจุดเกาะของเอ็น Patellar Tendon (ขั้วล่าง) หรือ Quadriceps Tendon (ขั้วบน) ฉีกขาดลอยออก\nชิ้นกระดูกส่วนใหญ่ถูกดึงรั้งยกลอยขึ้นสูงเกิดภาวะ **Patella Alta** (ลูกสะบ้ายกลอยสูง)"
              },
              "moi": {
                "en": "Violent contraction of quadriceps muscle in athletes (jumping/landing force).",
                "th": "การหดตัวกระชากอย่างรุนแรงของกล้ามเนื้อ Quadriceps ในนักกีฬา (เช่น การกระโดดลงพื้น)"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "Indicated ONLY if non-displaced (<2mm) with intact SLR.",
                  "th": "พิจารณาเฉพาะกรณีที่ไม่เคลื่อน (<2มม.) และยกขาตรงได้"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. Transosseous suture repair with K-wires/suture anchors or basket plate to re-attach the patellar tendon tightly to bone. Partial pole resection if fragment is un-fixable.",
                  "th": "แนะนำผ่าตัด ORIF หรือเย็บร้อยกระดูก (Transosseous sutures / Suture anchors) ยึดเอ็น Patellar tendon กลับเข้าขั้วกระดูกสะบ้า"
                }
              },
              "illustrationId": "/images/patella/polar_avulsion.png",
              "xrayDescription": {
                "en": "Small avulsed inferior pole fragment with proximal displacement of the main patellar body (Patella Alta on lateral view).",
                "th": "เห็นชิ้นกระดูกขั้วล่างหลุดกะเทาะ และลูกสะบ้าชิ้นใหญ่ยกลอยขึ้นสูง (Patella Alta) ในท่าด้านข้าง"
              }
            },
            {
              "type": "Vertical",
              "name": {
                "en": "Vertical",
                "th": "4. Vertical (หักแนวดิ่งพาดตามยาว - เอ็นเหยียดมักสมบูรณ์)"
              },
              "description": {
                "en": "Vertical fracture line running longitudinal from superior to inferior pole\nExtensor mechanism usually remains INTACT\nBest visualized on Skyline / Merchant view\nLow rate of displacement under quadriceps pull",
                "th": "รอยหักพาดตามแนวดิ่งจากขั้วบนลงขั้วล่างของลูกสะบ้า\nกลไกการเหยียดข้อเข่ามักยังคงสมบูรณ์ดี (มักยกขาตรง SLR ได้)\nประเมินได้ดีที่สุดในท่าเอกซเรย์หน้าตัด Skyline View\nกระดูกแทบไม่เคลื่อนตัวตามแรงดึง Quadriceps"
              },
              "moi": {
                "en": "Direct blow to the lateral aspect of the patella.",
                "th": "แรงกระแทกโดยตรงเข้าที่ด้านข้างของลูกสะบ้า"
              },
              "treatment": {
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED TREATMENT. Immobilization in extension brace/cast for 4 weeks followed by progressive knee flexion. Excellent prognosis.",
                  "th": "แนะนำให้รักษาแบบไม่ผ่าตัด ใส่เฝือกดามขาตรงนาน 4 สัปดาห์ แล้วเริ่มฝึกงอเข่า อัตราฟื้นตัวสูงมาก"
                },
                "operative": {
                  "en": "Indicated if articular step-off >2mm or wide gap. Fixation with 3.5mm cannulated lag screws horizontally.",
                  "th": "ผ่าตัดเฉพาะกรณีผิวข้อเกยเหลื่อม > 2 มม. ยึดด้วยสกรูเกลียวตามแนวขวาง (Lag screw)"
                }
              },
              "illustrationId": "/images/patella/vertical_sagittal.png",
              "xrayDescription": {
                "en": "Vertical fracture line seen clearly on Skyline/Merchant view, separating medial and lateral facets.",
                "th": "เห็นรอยหักแนวดิ่งชัดเจนที่สุดในท่า Skyline View แยกผิวด้านในและด้านนอกออกจากกัน"
              }
            },
            {
              "type": "Multifragmented Nondisplaced",
              "name": {
                "en": "Multifragmented Nondisplaced",
                "th": "5. Multifragmented Nondisplaced (แตกละเอียดหลายชิ้นแต่ไม่เคลื่อนตัว)"
              },
              "description": {
                "en": "Multi-fragmentary stellate fracture without displacement (gap < 2 mm, step-off < 1-2 mm)\nExtensor mechanism INTACT (patient CAN perform active SLR)\nCan be treated conservatively if retinaculum is un-torn and fragments remain stable",
                "th": "รอยหักแตกละเอียดกระจายหลายชิ้นแต่ชิ้นกระดูกยังอยู่ในตำแหน่ง (ระยะห่าง < 2 มม. และผิวข้อเกย < 1-2 มม.)\nกลไกการเหยียดข้อเข่าสมบูรณ์ดี (ผู้ป่วยยังนอนยกขาตรง SLR ได้)\nสามารถรักษาแบบไม่ผ่าตัดได้หากพังผืดเอ็น Retinaculum ไม่ฉีกขาด"
              },
              "moi": {
                "en": "Direct moderate-energy blow to the anterior patella.",
                "th": "แรงกระแทกโดยตรงปานกลางเข้าที่สะบ้าด้านหน้า"
              },
              "treatment": {
                "preferred": "conservative",
                "conservative": {
                  "en": "RECOMMENDED TREATMENT FOR INTACT SLR. Cylinder cast or extension brace for 4-6 weeks with protected weight-bearing. Close X-ray monitoring.",
                  "th": "แนะนำรักษาแบบไม่ผ่าตัดกรณี SLR ได้ปกติ ใส่เฝือก Cylinder cast ดามขาตรง 4-6 สัปดาห์ พร้อมติดตาม X-ray ใกล้ชิด"
                },
                "operative": {
                  "en": "Indicated if secondary displacement occurs or SLR becomes impossible.",
                  "th": "ผ่าตัดเฉพาะกรณีชิ้นกระดูกเคลื่อนหลุดเพิ่มขึ้นภายหลัง"
                }
              },
              "illustrationId": "/images/patella/comminuted_undisplaced.png",
              "xrayDescription": {
                "en": "Multiple intersecting fracture lines with minimal displacement and preserved articular alignment.",
                "th": "เห็นรอยหักแตกเป็นแขนงหลายเส้นแต่ชิ้นกระดูกไม่เคลื่อนแยกจากกัน"
              }
            },
            {
              "type": "Multifragmented Displaced",
              "name": {
                "en": "Multifragmented Displaced",
                "th": "6. Multifragmented Displaced (แตกละเอียดดาวกระจายเคลื่อนตัว)"
              },
              "description": {
                "en": "Multi-fragmentary starburst/comminuted fracture of patella\nUsually caused by direct high-energy trauma\nArticular surface is severely incongruent\nRequires meticulous reconstruction or circumferential wiring",
                "th": "กระดูกสะบ้าแตกละเอียดกระจายเป็นรูปดาวหลายชิ้นส่วน\nมักเกิดจากแรงกระแทกโดยตรงพลังงานสูงเข้าที่หน้าเข่า\nผิวข้อต่อขรุขระผิดรูปอย่างมาก\nต้องการการจัดผ่าตัดดามกระดูกอย่างละเอียด หรือใช้ลวดพันรอบ (Circumferential wiring)"
              },
              "moi": {
                "en": "High-energy direct blow to knee (dashboard injury or fall from height onto knees).",
                "th": "แรงกระแทกตรงเข้าหน้าเข่าพลังงานสูง (Dashboard injury เข่าชนหน้ารถ หรือตกที่สูงกระแทกเข่า)"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "Indicated ONLY if non-displaced with intact extensor retinaculum.",
                  "th": "พิจารณาเฉพาะกรณีที่ไม่เคลื่อนและเอ็น Retinaculum สมบูรณ์"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT. ORIF with Modified Tension Band Wiring + Circumferential Purse-string Wire, low-profile Patellar Locking Plate, or Partial Patellectomy if fragments are un-fixable.",
                  "th": "แนะนำผ่าตัด ORIF ด้วยวิธี Modified TBW ร่วมกับลวดพันรอบวง หรือใช้แผ่นเหล็กล็อค Patella Plate (หากชิ้นกระดูกเล็กป่นเกินผ่าตัด อาจต้องตัดชิ้นส่วนป่นออก Partial Patellectomy)"
                }
              },
              "illustrationId": "/images/patella/stellate_comminuted.png",
              "xrayDescription": {
                "en": "Starburst comminution with multiple fracture lines crossing the patellar body on AP and lateral views.",
                "th": "เห็นรอยหักแตกละเอียดกระจายหลายชิ้นเป็นรูปดาวพาดผ่านตัวลูกสะบ้าทั้งในท่า AP และด้านข้าง"
              }
            },
            {
              "type": "Osteochondral",
              "name": {
                "en": "Osteochondral",
                "th": "7. Osteochondral (หักกะเทาะผิวข้อ / ขอบสะบ้า)"
              },
              "description": {
                "en": "Fracture involving the articular cartilage facet or marginal border of the patella\nOften occurs during transient patellar dislocation / subluxation\nFragment may float as a loose body in the joint space\nRequires removal or refixation if large articular fragment",
                "th": "รอยหักกะเทาะบริเวณกระดูกอ่อนผิวข้อหรือขอบรอบข้างของลูกสะบ้า\nมักเกิดร่วมกับภาวะลูกสะบ้าเคลื่อนหลุดชั่วคราว (Transient Patellar Dislocation)\nชิ้นกระดูกอ่อนอาจหลุดลอยเป็น Loose body ในช่องข้อเข่า\nต้องการการผ่าตัดเอาชิ้นส่วนหลุดออกหรือยึดตรึงหากเป็นชิ้นผิวข้อขนาดใหญ่"
              },
              "moi": {
                "en": "Acute patellar dislocation with shearing force against the lateral femoral condyle.",
                "th": "แรงเฉือนขณะลูกสะบ้าเคลื่อนหลุดกระแทกกับขอบ Femoral Condyle"
              },
              "treatment": {
                "preferred": "operative",
                "conservative": {
                  "en": "Indicated ONLY for very small marginal non-articular fragments. Immobilization for 2-3 weeks.",
                  "th": "พิจารณาเฉพาะชิ้นกะเทาะเล็กๆ นอกเขตผิวข้อ ใส่เฝือกดาม 2-3 สัปดาห์"
                },
                "operative": {
                  "en": "RECOMMENDED TREATMENT FOR LOOSE BODIES / ARTICULAR FRAGMENTS. Arthroscopic or open removal of small loose fragment, or refixation with bioabsorbable pins / headless compression screws if >1cm articular surface.",
                  "th": "แนะนำผ่าตัดส่องกล้องหรือเปิดข้อเข่าเพื่อหยิบชิ้นกระดูกหลุดออก (Loose body removal) หรือผ่าตัดยึดชิ้นผิวข้อหากมีขนาดใหญ่ > 1 ซม."
                }
              },
              "illustrationId": "/images/patella/osteochondral.png",
              "xrayDescription": {
                "en": "Small bony or osteochondral flake fragment adjacent to medial/lateral facet or free-floating in joint on Skyline view.",
                "th": "เห็นชิ้นกระดูกเล็กๆ หรือชิ้นกระดูกอ่อนกะเทาะอยู่ข้างผิวข้อสะบ้าหรือลอยในช่องข้อในท่า Skyline view"
              }
            }
          ]
        }
      ]
    }
  ]
};
