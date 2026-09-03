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
      "regionConcept": {
        "physicalExam": [
          {
            "sign": "Limb Shortening & External Rotation",
            "positive": {
              "en": "Affected limb rests in mild shortening and external rotation (~45°); groin/hip pain on active straight leg raise or log roll.",
              "th": "ขาข้างที่บาดเจ็บสั้นลงเล็กน้อยและหมุนออกด้านนอก (~45°); มีอาการปวดบริเวณขาหนีบ/สะโพกเมื่อพยายามยกขาหรือหมุนขา"
            }
          },
          {
            "sign": "Log Roll Test",
            "positive": {
              "en": "Pain elicited with gentle passive internal and external rotation of the relaxed extremity, indicating intra-capsular hip joint disruption.",
              "th": "ปวดรุนแรงบริเวณขาหนีบเมื่อจับหมุนขาไปมาเบาๆ (Log roll) บ่งชี้การบาดเจ็บภายในเยื่อหุ้มข้อสะโพก"
            }
          }
        ],
        "acceptableAlignment": [
          {
            "parameter": {
              "en": "Garden Alignment Index (AP View)",
              "th": "ดัชนีการจัดมุม Garden (ภาพ AP)"
            },
            "threshold": "160° - 180°",
            "note": {
              "en": "Angle between medial trabeculae of femoral head and medial cortex of femoral shaft should be 160°.",
              "th": "มุมระหว่างแนว Trabeculae ด้านในกับขอบกระดูกแกนต้นขาด้านในควรอยู่ที่ประมาณ 160 องศา"
            }
          },
          {
            "parameter": {
              "en": "Garden Alignment Index (Lateral View)",
              "th": "ดัชนีการจัดมุม Garden (ภาพ Lateral)"
            },
            "threshold": "180°",
            "note": {
              "en": "True 180° collinear alignment on lateral view is critical to avoid posterior sag/angulation.",
              "th": "แนวแกนตรง 180 องศาในท่าด้านข้าง เพื่อป้องกันมุมเอียงเบี่ยงไปด้านหลัง"
            }
          }
        ],
        "redFlags": [
          {
            "en": "High Avascular Necrosis (AVN) Risk: Displaced femoral neck fractures (Garden III/IV) disrupt the medial femoral circumflex artery, carrying up to 30-50% AVN and nonunion rates.",
            "th": "ความเสี่ยงหัวกระดูกขาดเลือด (AVN) สูง: กระดูกคอสะโพกหักเคลื่อนที่ (Garden III/IV) ทำลายเส้นเลือด Medial Femoral Circumflex มีอัตราเกิด AVN สูงถึง 30-50%"
          },
          {
            "en": "Urgent Reduction in Young Patients: Displaced femoral neck fractures in young patients (<60 years) are surgical emergencies requiring anatomical reduction and fixation within 6-24h to save native head.",
            "th": "ต้องผ่าตัดฉุกเฉินในผู้ป่วยอายุน้อย: คอสะโพกหักเคลื่อนที่ในคนอายุน้อย (<60 ปี) เป็นภาวะฉุกเฉิน ต้องผ่าตัดดึงดามกระดูกภายใน 6-24 ชม. เพื่อรักษาหัวกระดูกเดิม"
          }
        ],
        "clinicalPearls": [
          {
            "en": "Young vs Elderly Surgical Protocol: In elderly patients (>65 years), displaced neck fractures are treated with Hemiarthroplasty or Total Hip Arthroplasty (THA). In young active patients, urgent open/closed reduction with DHS or cannulated screws is mandatory.",
            "th": "แนวทางรักษาคนแก่ vs คนอายุน้อย: ในผู้ป่วยสูงอายุ (>65 ปี) คอสะโพกหักเคลื่อนที่ควรใส่ข้อสะโพกเทียม (Hemiarthroplasty/THA); ในคนอายุน้อยต้องผ่าตัดยึดกระดูกดั้งเดิม (ORIF with DHS/Screws) ด่วนที่สุด"
          }
        ]
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
                "preferred": "operative",
                "decisionPrinciple": {
                  "en": "Percutaneous in-situ cannulated screw fixation is standard to prevent secondary varus collapse and early ambulation.",
                  "th": "ผ่าตัดยึดกระดูก In-situ ด้วยสกรูหัวทะลุ 3 ตัวเป็นมาตรฐาน เพื่อป้องกันการทรุดตัวและช่วยให้ลุกเดินได้เร็ว"
                },
                "conservative": {
                  "indication": {
                    "en": "Bedbound, non-ambulatory patients with extreme medical comorbidities or terminal illness\nHigh surgical risk where mortality from surgery outweighs benefit",
                    "th": "ผู้ป่วยติดเตียงที่เดินไม่ได้อยู่เดิม หรือมีโรคร่วมรุนแรงระยะสุดท้าย\nผู้ป่วยที่มีความเสี่ยงต่อการผ่าตัดสูงมากจนอันตรายถึงชีวิต"
                  },
                  "method": {
                    "en": "Bed rest with pain management\nEarly mobilization to wheelchair as pain tolerates",
                    "th": "นอนพักบนเตียงและให้ยาระงับปวด\nช่วยพยุงนั่งรถเข็นเท่าที่ทนไหว"
                  },
                  "rehabilitation": {
                    "en": "No formal weight-bearing expectation\nFocus on chest physical therapy and pressure ulcer prevention",
                    "th": "ไม่เน้นการลงน้ำหนัก\nเน้นกายภาพบำบัดทรวงอกและพลิกตัวป้องกันแผลกดทับ"
                  },
                  "pitfalls": {
                    "en": "High risk of secondary displacement (>30–40%) and subsequent painful nonunion\nProlonged bed rest complications (DVT, pneumonia, decubitus ulcers)",
                    "th": "อัตราเสี่ยงกระดูกเคลื่อนตัวทรุดตามมาสูงมาก (>30–40%) และเกิดภาวะกระดูกไม่ติด\nเสี่ยงต่อภาวะแทรกซ้อนจากการนอนติดเตียง (ลิ่มเลือดอุดตัน, ปอดอักเสบ, แผลกดทับ)"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "All ambulatory patients with Garden I valgus-impacted fractures (young or elderly)",
                    "th": "ผู้ป่วยที่สามารถเดินได้ทุกราย (ทั้งผู้ป่วยอายุน้อยและผู้สูงอายุ)"
                  },
                  "method": {
                    "en": "Percutaneous in-situ fixation with 3 parallel Cannulated Screws (6.5mm–7.3mm)\nInverted triangle configuration (inferior screw abutting calcar femoralis)",
                    "th": "ผ่าตัดยึดตรึงกระดูก In-situ ด้วยสกรูหัวทะลุ (Cannulated Screws 6.5–7.3 มม.) 3 ตัวแบบขนาน\nเรียงตัวเป็นรูปสามเหลี่ยมคว่ำ (สกรูตัวล่างสุดชิดแนว Calcar)"
                  },
                  "rehabilitation": {
                    "en": "Touch-down weight bearing (TDWB) or Partial weight bearing (PWB) for 6 weeks, then advance\nElderly may proceed with Weight Bearing as Tolerated (WBAT) if fixation is rigid",
                    "th": "ลงน้ำหนักแตะพื้น (TDWB) หรือลงน้ำหนักบางส่วน 6 สัปดาห์ แล้วค่อยเพิ่มขึ้น\nในผู้สูงอายุสามารถให้ลงน้ำหนักตามทนได้ (WBAT) ทันทีหากยึดตรึงแน่นหนา"
                  },
                  "pitfalls": {
                    "en": "Do not over-tighten screws to avoid altering posterior tilt\nAvoid starting screws below lesser trochanter level (stress riser and subtrochanteric fracture risk)",
                    "th": "ระวังอย่าขันสกรูแน่นเกินไปจนมุมเอียงเปลี่ยน\nห้ามเจาะรูสกรูต่ำกว่าระดับ Lesser Trochanter เพราะจะเกิดจุดรวมแรงเค้นเสี่ยงกระดูกหักใต้ข้อ"
                  }
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
                "preferred": "operative",
                "decisionPrinciple": {
                  "en": "Urgent internal fixation with 3 cannulated screws to prevent high rate of secondary displacement (>50%).",
                  "th": "ผ่าตัดยึดตรึงด้วยสกรู 3 ตัวเพื่อป้องกันกระดูกเคลื่อนตัวซ้ำซึ่งเกิดได้สูงกว่า 50%"
                },
                "conservative": {
                  "indication": {
                    "en": "Contraindicated in active patients; restricted to moribund / non-ambulatory patients",
                    "th": "ห้ามใช้ในผู้ป่วยที่เดินได้ สงวนไว้เฉพาะผู้ป่วยระยะสุดท้ายหรือไม่สามารถเคลื่อนไหวได้"
                  },
                  "method": {
                    "en": "Symptomatic bed care and analgesia",
                    "th": "การดูแลตามอาการและให้ยาระงับปวดบนเตียง"
                  },
                  "rehabilitation": {
                    "en": "Palliative nursing care and decubitus prophylaxis",
                    "th": "การพยาบาลแบบประคับประคองและป้องกันแผลกดทับ"
                  },
                  "pitfalls": {
                    "en": "Secondary displacement occurs in >50% of cases treated non-operatively",
                    "th": "กระดูกจะเคลื่อนตัวผิดรูปตามมาในอัตราสูงกว่า 50% หากไม่ผ่าตัดยึดตรึง"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "Standard of care for all Garden II fractures in young and active elderly patients",
                    "th": "มาตรฐานการรักษาหลักสำหรับผู้ป่วย Garden II ทุกราย"
                  },
                  "method": {
                    "en": "Percutaneous fixation with 3 parallel Cannulated Screws in inverted triangle configuration\nAlternative: Dynamic Hip Screw (DHS) with derotation screw if poor bone quality",
                    "th": "ผ่าตัดยึดด้วยสกรูหัวทะลุ 3 ตัวแบบขนาน (Inverted Triangle)\nหรือใช้ Dynamic Hip Screw (DHS) ร่วมกับ Derotation screw ในผู้ที่กระดูกพรุน"
                  },
                  "rehabilitation": {
                    "en": "Protected weight-bearing (PWB) for 6 weeks in young patients\nEarly mobilization and WBAT in elderly to prevent recumbency complications",
                    "th": "จำกัดการลงน้ำหนัก 6 สัปดาห์ในคนอายุน้อย\nช่วยพยุงยืนเดินและลงน้ำหนักตามทนได้ในผู้สูงอายุเพื่อลดภาวะแทรกซ้อน"
                  },
                  "pitfalls": {
                    "en": "Ensure screws remain parallel on both AP and Lateral views to allow controlled dynamic collapse",
                    "th": "ต้องวางสกรูให้ขนานกันทั้งสองระนาบ (AP และ Lateral) เพื่อให้เกิดการยุบตัวชิดกันอย่างสมบูรณ์"
                  }
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
                "preferred": "operative",
                "decisionPrinciple": {
                  "en": "Age-dependent strategy: Joint preservation (CRIF/ORIF) for age <60–65; Arthroplasty (Hemi/THA) for age >65.",
                  "th": "แนวทางรักษาขึ้นกับอายุ: อายุ <65 ปี ดึงจัดกระดูกและยึดตรึง (ORIF); อายุ ≥65 ปี ผ่าตัดเปลี่ยนข้อสะโพกเทียม (Arthroplasty)"
                },
                "conservative": {
                  "indication": {
                    "en": "Strictly contraindicated as definitive management",
                    "th": "ห้ามใช้เป็นการรักษาหลักเด็ดขาด"
                  },
                  "method": {
                    "en": "Traction / splinting strictly for pain control prior to surgery",
                    "th": "การถ่วงดึงขาชั่วคราวเพื่อลดปวดก่อนเข้าห้องผ่าตัดเท่านั้น"
                  },
                  "rehabilitation": {
                    "en": "Guaranteed severe functional impairment and nonunion if untreated",
                    "th": "จะเกิดกระดูกไม่ติด ข้อสะโพกพิการ และเจ็บปวดตลอดเวลาหากไม่ผ่าตัด"
                  },
                  "pitfalls": {
                    "en": "High risk of nonunion and avascular necrosis (AVN)",
                    "th": "อัตราเสี่ยงกระดูกไม่ติดและหัวกระดูกขาดเลือด (AVN) สูงมาก"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "Young patient (<60–65 yr): Urgent anatomical reduction + internal fixation\nElderly patient (≥65 yr): Joint replacement (Hemiarthroplasty or Total Hip Arthroplasty)",
                    "th": "ผู้ป่วยอายุน้อย (<65 ปี): ผ่าตัดจัดกระดูกเข้าที่ให้เรียบสนิทฉุกเฉินและยึดตรึง\nผู้สูงอายุ (≥65 ปี): ผ่าตัดเปลี่ยนข้อสะโพกเทียม (Hemiarthroplasty หรือ THA)"
                  },
                  "method": {
                    "en": "Young: Closed/Open reduction (restore Garden Alignment Index 160°–180°) + 3 Cannulated Screws or DHS with anti-rotation screw\nElderly: Bipolar Hemiarthroplasty or Total Hip Arthroplasty (THA if active / pre-existing arthritis)",
                    "th": "คนอายุน้อย: ดึงจัดกระดูก (Garden Index 160°–180°) + สกรู 3 ตัว หรือ DHS + Derotation screw\nผู้สูงอายุ: ผ่าตัดเปลี่ยนข้อสะโพกเทียมกึ่งหนึ่ง (Bipolar Hemiarthroplasty) หรือข้อสะโพกเทียมทั้งหมด (THA)"
                  },
                  "rehabilitation": {
                    "en": "Young: NWB / PWB for 6–12 weeks until radiographic union\nElderly Arthroplasty: Immediate full weight-bearing (FWB) Day 1 post-op with walker",
                    "th": "คนอายุน้อย: งด/จำกัดลงน้ำหนัก 6–12 สัปดาห์จนกระดูกเชื่อมติด\nผู้สูงอายุใส่ข้อเทียม: ยืนเดินลงน้ำหนักเต็มที่ (Full WB) ได้ทันทีตั้งแต่วันแรกหลังผ่าตัด"
                  },
                  "pitfalls": {
                    "en": "In young patients, emergency reduction within 6–24 hours reduces risk of AVN\nAvoid non-anatomical or varus reduction (leads to early fixation failure)",
                    "th": "ในคนอายุน้อย ควรรีบดึงจัดกระดูกและผ่าตัดภายใน 6–24 ชั่วโมงเพื่อลดความเสี่ยงหัวกระดูกขาดเลือด (AVN)\nห้ามยอมรับแนวกระดูกที่ยังงุ้มเป็น Varus เพราะจะทำให้สกรูหลุดล้มเหลวอย่างรวดเร็ว"
                  }
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
                "preferred": "operative",
                "decisionPrinciple": {
                  "en": "Elderly: Arthroplasty (Hemi/THA) is gold standard; Young: Emergency joint-preserving anatomical reduction and fixation.",
                  "th": "ผู้สูงอายุ: เปลี่ยนข้อสะโพกเทียม (Hemi/THA) เป็นมาตรฐานหลัก; คนอายุน้อย: ผ่าตัดฉุกเฉินจัดแนวกระดูกเพื่อรักษาข้อเดิม"
                },
                "conservative": {
                  "indication": {
                    "en": "Contraindicated as primary management",
                    "th": "ห้ามใช้เป็นการรักษาหลักเด็ดขาด"
                  },
                  "method": {
                    "en": "Skin or skeletal traction for provisional immobilization only",
                    "th": "การถ่วงดึงขาเพื่อประคับประคองชั่วคราวเท่านั้น"
                  },
                  "rehabilitation": {
                    "en": "Non-functional limb and severe chronic pain if surgery is not performed",
                    "th": "จะสูญเสียการทำงานของขาและปวดรุนแรงเรื้อรัง"
                  },
                  "pitfalls": {
                    "en": "Avascular necrosis (AVN) rate exceeds 50–80% without appropriate intervention",
                    "th": "อัตราเกิดหัวกระดูกสะโพกขาดเลือด (AVN) สูงเกิน 50–80%"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "Elderly (≥65 yr): Primary Hemiarthroplasty (low-demand) or THA (active, independent)\nYoung patient (<60–65 yr): Emergency anatomical reduction and stable internal fixation",
                    "th": "ผู้สูงอายุ (≥65 ปี): เปลี่ยนข้อสะโพกเทียม Bipolar Hemiarthroplasty หรือ THA\nคนอายุน้อย (<65 ปี): ผ่าตัดฉุกเฉินจัดแนวกระดูกให้เรียบสนิทและยึดตรึงข้อเดิม"
                  },
                  "method": {
                    "en": "Arthroplasty: Cemented or cementless femoral stem with bipolar head or THA bearing\nYoung Fixation: Open reduction through Watson-Jones or Smith-Petersen approach + capsulotomy + 3 Cannulated Screws or sliding hip screw with anti-rotation screw",
                    "th": "ข้อเทียม: ก้านข้อสะโพกเทียม (Cemented/Uncemented Stem) + Bipolar head หรือ THA\nคนอายุน้อย: ผ่าตัดเปิดจัดกระดูก (Open Reduction) + เปิดเยื่อหุ้มข้อลดแรงดันในข้อ (Capsulotomy) + สกรู 3 ตัว หรือ Sliding Hip Screw"
                  },
                  "rehabilitation": {
                    "en": "Arthroplasty: Immediate full weight bearing (FWB) Day 1 with walker\nInternal Fixation in Young: Strict NWB for 6–8 weeks, progress to PWB",
                    "th": "ผ่าตัดเปลี่ยนข้อเทียม: ยืนเดินลงน้ำหนักเต็มที่ได้ทันทีตั้งแต่วันแรกหลังผ่าตัด\nผ่าตัดยึดตรึงในคนอายุน้อย: งดลงน้ำหนักอย่างเคร่งครัด 6–8 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "High risk of dislocation in dementia patients treated with THA (consider dual mobility or hemiarthroplasty)\nCareful post-op hip precautions (avoid flexion >90°, adduction, internal rotation for posterior approach)",
                    "th": "ระวังข้อสะโพกเทียมหลุดในผู้ป่วยสมองเสื่อม (พิจารณาใช้ Dual mobility หรือ Hemiarthroplasty)\nให้คำแนะนำท่าทางระวังข้อหลุดหลังผ่าตัด (ห้ามงอข้อสะโพกเกิน 90° หรือนั่งไขว่ห้าง)"
                  }
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
      "regionConcept": {
        "physicalExam": [
          {
            "sign": "Marked Shortening & External Rotation",
            "positive": {
              "en": "Affected limb rests in marked external rotation (often 90°, lateral border of foot touches bed) with obvious shortening and ecchymosis over greater trochanter.",
              "th": "ขาข้างบาดเจ็บหมุนออกนอกอย่างมาก (เท้าล้มแปะกับเตียง 90°) ร่วมกับขาสั้นลงชัดเจนและมีรอยเขียวช้ำบริเวณปุ่มสะโพก"
            }
          }
        ],
        "acceptableAlignment": [
          {
            "parameter": {
              "en": "Neck-Shaft Angle (CCD Angle)",
              "th": "มุมคอกระดูกกับแกนขา (Neck-Shaft Angle)"
            },
            "threshold": "125° - 135°",
            "note": {
              "en": "Avoid varus reduction (<120°); valgus/anatomical alignment is required to prevent lag screw cut-out.",
              "th": "หลีกเลี่ยงมุม Varus (<120°); ต้องจัดมุมให้อยู่ในแนวปกติหรือ Valgus เล็กน้อย เพื่อลดโอกาส Lag Screw หลุดกะเทาะ"
            }
          },
          {
            "parameter": {
              "en": "Tip-Apex Distance (TAD)",
              "th": "ระยะ Tip-Apex Distance (TAD)"
            },
            "threshold": "< 25 mm",
            "note": {
              "en": "Baumgaertner Tip-Apex Distance <25mm (sum of AP + Lateral distance from screw tip to head apex) is MANDATORY to prevent cut-out.",
              "th": "ค่าผลรวมระยะปลายสกรูถึงจุดศูนย์กลางหัวกระดูก (AP + Lateral) ต้องน้อยกว่า 25 มม. เพื่อป้องกันสกรูทะลุหัวกระดูก"
            }
          }
        ],
        "redFlags": [
          {
            "en": "Lag Screw Cut-Out: TAD >25 mm or varus reduction leads to lag screw cut-out superiorly through the femoral head, requiring conversion to arthroplasty.",
            "th": "ภาวะ Lag Screw ทะลุหัวกระดูก (Cut-out): หาก TAD >25 มม. หรือจัดกระดูกในมุม Varus สกรูจะทะลุออกด้านบนของหัวกระดูก ต้องผ่าตัดแก้ไขเป็นข้อเทียม"
          },
          {
            "en": "Unstable Fracture Pattern (Evans-Jensen / Reverse Obliquity): Reverse oblique fractures (AO 31-A3) or loss of posteromedial wall support require intramedullary cephalomedullary nails (PFNA/InterTan) rather than DHS.",
            "th": "รอยหักไม่มั่นคง (Reverse Obliquity / ผนังด้านในแตก): รอยหักแบบทแยงย้อนกลับหรือขาดแรงค้ำด้านหลัง-ใน ต้องดามด้วยแกนเหล็กในโพรงกระดูก (Cephalomedullary Nail) ห้ามใช้ DHS"
          }
        ],
        "clinicalPearls": [
          {
            "en": "TAD Rule of Baumgaertner: Maintaining TAD <25mm reduces the risk of lag screw cut-out to less than 1%. Position the lag screw centered-centered or inferior-centered in the femoral head on AP and lateral views.",
            "th": "กฎ TAD ของ Baumgaertner: การรักษาค่า TAD <25 มม. ช่วยลดอัตราสกรูทะลุหลุดเหลือต่ำกว่า 1% ควรวางตำแหน่ง Lag Screw ให้อยู่ตรงกลาง-ตรงกลาง หรือล่าง-ตรงกลาง ของหัวกระดูก"
          }
        ]
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
                "decisionPrinciple": {
                  "en": "Intact posteromedial buttress makes it mechanically stable; surgical stabilization with DHS or short CMN allows immediate mobilization and prevents late displacement.",
                  "th": "ผนังกระดูกด้านหลังในยังสมบูรณ์ทำให้มีความมั่นคงสูง การผ่าตัดยึดตรึงด้วย DHS หรือ Cephalomedullary nail ช่วยให้ลุกเดินลงน้ำหนักได้ทันทีและป้องกันกระดูกเคลื่อน"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Non-ambulatory patients or moribund medical state with unacceptably high perioperative mortality\n• End-stage dementia with bedbound status pre-injury",
                    "th": "• ผู้ป่วยที่ไม่สามารถเดินได้อยู่เดิม หรือมีภาวะโรคร่วมรุนแรงขั้นวิกฤตที่มีความเสี่ยงผ่าตัดสูงมาก\n• ผู้ป่วยสมองเสื่อมระยะสุดท้ายที่ติดเตียงอยู่แล้ว"
                  },
                  "method": {
                    "en": "• Bed-to-chair mobilization with analgesia, high-dose DVT prophylaxis, and pressure sore prevention",
                    "th": "• จัดท่านั่งบนเตียงหรือเก้าอี้ ให้ยาระงับปวด ยาป้องกันลิ่มเลือดอุดตัน และป้องกันแผลกดทับ"
                  },
                  "rehabilitation": {
                    "en": "• Non-weight bearing x 8–12 weeks; maintain skin integrity and pulmonary hygiene",
                    "th": "• ห้ามลงน้ำหนัก 8–12 สัปดาห์ เฝ้าระวังแผลกดทับและกายภาพบำบัดปอด"
                  },
                  "pitfalls": {
                    "en": "• High rate of secondary displacement, varus deformity, and recumbency complications (pneumonia, UTI, DVT)",
                    "th": "• เสี่ยงต่อกระดูกเลื่อนยุบตัวทำมุมโก่ง (Varus) และภาวะแทรกซ้อนจากการนอนติดเตียง (ปอดอักเสบ, ลิ่มเลือดอุดตัน)"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All ambulatory patients with non-displaced intertrochanteric fracture\n• Need for early pain-free weight bearing and out-of-bed mobilization",
                    "th": "• ผู้ป่วยที่เดินได้ทุกรายที่มีกระดูกหักระหว่างปุ่มสะโพกแบบไม่เคลื่อนตัว\n• ต้องการให้ผู้ป่วยลุกเดินลงน้ำหนักได้ทันทีโดยไม่ปวด"
                  },
                  "method": {
                    "en": "• Dynamic Hip Screw (DHS / Sliding Hip Screw with 2-hole sideplate)\n• Or Short Cephalomedullary Nail (CMN, e.g., PFNA / Gamma nail)\n• Target Tip-Apex Distance (TAD) < 20–25 mm on AP and lateral fluoroscopy",
                    "th": "• ผ่าตัดยึดด้วย Dynamic Hip Screw (DHS / Sliding Hip Screw แผ่น 2 รู)\n• หรือใส่แกนโลหะดามในโพรงกระดูก Cephalomedullary Nail (CMN เช่น PFNA / Gamma nail)\n• จัดตำแหน่งสกรูให้ Tip-Apex Distance (TAD) < 20–25 มม."
                  },
                  "rehabilitation": {
                    "en": "• Immediate weight bearing as tolerated (WBAT) with walker on postoperative day 1\n• Active quadriceps strengthening and hip range of motion",
                    "th": "• เริ่มฝึกเดินลงน้ำหนักเท่าที่ทนได้ (WBAT) ด้วย Walker ได้ทันทีตั้งแต่วันแรกหลังผ่าตัด\n• ฝึกเกร็งกล้ามเนื้อต้นขาและขยับข้อสะโพก"
                  },
                  "pitfalls": {
                    "en": "• Avoid improper screw placement (must center in femoral head on both AP and lateral views to prevent cutout)",
                    "th": "• หลีกเลี่ยงการวางสกรูผิดตำแหน่ง (ต้องอยู่กึ่งกลางหัวกระดูกสะโพกทั้งท่า AP และ Lateral เพื่อป้องกันสกรูรูดทะลุหัวกระดูก)"
                  }
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
                "decisionPrinciple": {
                  "en": "Medial cortical contact is restorable with traction and internal rotation; DHS or short CMN provides stable controlled impaction.",
                  "th": "สามารถดึงจัดกระดูกให้ผนังด้านในชนกันได้ การผ่าตัดด้วย DHS หรือ Cephalomedullary nail จะให้ความมั่นคงสูงและให้กระดูกยุบตัวอัดแน่นเข้าหากันได้ดี"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Non-surgical candidates with profound medical contraindications",
                    "th": "• ผู้ป่วยที่มีข้อห้ามทางการแพทย์ขั้นรุนแรงจนไม่สามารถผ่าตัดได้"
                  },
                  "method": {
                    "en": "• Analgesia, gentle traction, and bed-to-chair transfer as tolerated",
                    "th": "• ให้ยาระงับปวด ดึงถ่วงขาเบาๆ และช่วยพยุงลุกนั่งข้างเตียง"
                  },
                  "rehabilitation": {
                    "en": "• NWB x 8–12 weeks, monitor for progressive shortening",
                    "th": "• ห้ามลงน้ำหนัก 8–12 สัปดาห์ เฝ้าระวังภาวะขาสั้นลง"
                  },
                  "pitfalls": {
                    "en": "• Severe varus collapse and painful nonunion",
                    "th": "• กระดูกยุบตัวทำมุมโก่งเข้าด้านในอย่างรุนแรงและกระดูกไม่ติด"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Displaced 2-part or 3-part intertrochanteric fracture where stable posteromedial buttress is obtained post-reduction",
                    "th": "• กระดูกหักแบบเคลื่อนตัว 2 หรือ 3 ชิ้นที่สามารถดึงจัดให้ผนัง Posteromedial ชนประกับกันได้มั่นคง"
                  },
                  "method": {
                    "en": "• Closed reduction on fracture table (traction + internal rotation + slight abduction)\n• Fixation with DHS (with 4-hole sideplate) or Short Cephalomedullary Nail\n• Verify TAD < 20 mm and anatomical medial cortical contact",
                    "th": "• ดึงจัดกระดูกบนเตียงผ่าตัดดึงกระดูก (Traction table: ดึง + หมุนขาเข้าใน + กางขาเล็กน้อย)\n• ยึดด้วย Dynamic Hip Screw (DHS) หรือ Cephalomedullary Nail\n• ตรวจสอบให้ TAD < 20 มม. และขอบกระดูกด้านในชนกันสนิท"
                  },
                  "rehabilitation": {
                    "en": "• Immediate full weight bearing as tolerated (WBAT) on day 1 with assistive device",
                    "th": "• เริ่มฝึกเดินลงน้ำหนักเต็มที่เท่าที่ทนได้ (WBAT) ทันทีในวันแรกหลังผ่าตัด"
                  },
                  "pitfalls": {
                    "en": "• Failure to obtain anatomic medial cortical reduction before screw insertion increases cutout risk",
                    "th": "• หากไม่จัดกระดูกด้านในให้ชนกันก่อนใส่สกรู จะเพิ่มความเสี่ยงต่อสกรูหลุดทะลุหัวกระดูก"
                  }
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
                "decisionPrinciple": {
                  "en": "Loss of posteromedial buttress (large lesser trochanter fragment) creates high varus collapse forces; Cephalomedullary Nail (CMN) is preferred over DHS due to its shorter lever arm and superior load-sharing mechanics.",
                  "th": "การสูญเสียผนังกระดูกค้ำยันด้านใน (ปุ่มกระดูกน้อยหลุด) ทำให้เสี่ยงกระดูกโก่งยุบตัวสูงมาก ควรเลือกใช้ Cephalomedullary Nail (CMN) มากกว่า DHS เนื่องจากมีแขนรับแรงสั้นกว่าและถ่ายเทน้ำหนักได้ดีกว่า"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Moribund / palliative care only",
                    "th": "• สงวนไว้เฉพาะการดูแลแบบประคับประคองระยะท้ายเท่านั้น"
                  },
                  "method": {
                    "en": "• Palliative pain control and nursing care",
                    "th": "• การดูแลบรรเทาอาการปวดและการพยาบาลบนเตียง"
                  },
                  "rehabilitation": {
                    "en": "• Bedbound care with frequent repositioning",
                    "th": "• พลิกตัวเปลี่ยนท่าบนเตียงบ่อยๆ เพื่อป้องกันแผลกดทับ"
                  },
                  "pitfalls": {
                    "en": "• Fatal recumbency complications, severe external rotation and shortening deformity",
                    "th": "• เสี่ยงเสียชีวิตจากภาวะแทรกซ้อน และขาบิดหมุนออกด้านนอกร่วมกับขาสั้นลงถาวร"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Unstable 3-part fracture with detached lesser trochanter and incompetent medial cortex\n• High risk of varus collapse with sideplate constructs",
                    "th": "• กระดูกหัก 3 ชิ้นชนิดไม่มั่นคงที่มีปุ่มกระดูกน้อยหลุดแยกและไม่มีผนังค้ำยันด้านใน\n• เสี่ยงต่อกระดูกยุบตัวโก่งหากใช้แผ่นเหล็กดามด้านข้าง (DHS)"
                  },
                  "method": {
                    "en": "• Cephalomedullary Nail (CMN, short or long nail with helical blade or lag screw)\n• Target TAD < 20 mm; obtain anatomical or slightly valgus reduction (130°–135° neck-shaft angle)\n• May require provisional joystick reduction clamps to achieve medial contact",
                    "th": "• ผ่าตัดใส่แกนโลหะดามในโพรงกระดูก Cephalomedullary Nail (CMN - Helical blade หรือ Lag screw)\n• ควบคุม TAD < 20 มม. และจัดมุมคอกระดูกให้ตรงหรือทำมุม Valgus เล็กน้อย (130°–135°)\n• อาจใช้ไม้ชี้/แคลมป์ช่วยจัดแนวกระดูกด้านในให้เข้าที่"
                  },
                  "rehabilitation": {
                    "en": "• Immediate weight bearing as tolerated (WBAT) with walker\n• Progressive gait training and muscle reconditioning",
                    "th": "• เริ่มฝึกเดินลงน้ำหนักเท่าที่ทนได้ (WBAT) ด้วย Walker ได้ทันที\n• ฝึกเดินและบริหารกล้ามเนื้อรอบข้อสะโพก"
                  },
                  "pitfalls": {
                    "en": "• Using a sliding hip screw (DHS) leads to excessive lateral slide, shortening, and lag screw cutout",
                    "th": "• การใช้ DHS ในรูปแบบนี้จะทำให้เหล็กรูดเลื่อนออกด้านข้างมากเกินไป ขาสั้นลง และสกรูทะลุหัวกระดูก"
                  }
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
                "decisionPrinciple": {
                  "en": "4-part fracture with loss of both greater and lesser trochanters; intramedullary cephalomedullary nailing with optional trochanteric stabilization plate or cement augmentation provides load sharing.",
                  "th": "กระดูกหัก 4 ชิ้นแตกละเอียดและสูญเสียทั้งปุ่มใหญ่และปุ่มน้อย ผ่าตัดใส่ Cephalomedullary Nail เพื่อช่วยถ่ายเทน้ำหนัก อาจเสริมด้วยแผ่นดามปุ่มกระดูกหรือซีเมนต์เสริมสกรู"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly CONTRAINDICATED except for end-of-life palliative care",
                    "th": "• ห้ามใช้วิธีนี้เด็ดขาด ยกเว้นการดูแลผู้ป่วยระยะสุดท้าย"
                  },
                  "method": {
                    "en": "• Not indicated",
                    "th": "• ไม่แนะนำ"
                  },
                  "rehabilitation": {
                    "en": "• N/A",
                    "th": "• ไม่ระบุ"
                  },
                  "pitfalls": {
                    "en": "• 1-year mortality approaches 50–70% with conservative bed rest",
                    "th": "• อัตราการเสียชีวิตใน 1 ปีสูงถึง 50–70% หากไม่ผ่าตัดและนอนติดเตียง"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• 4-part comminuted intertrochanteric fracture involving both greater and lesser trochanters\n• Loss of lateral wall integrity (lateral wall thickness <20.5 mm)",
                    "th": "• กระดูกหักแตกละเอียด 4 ชิ้นขึ้นไปรวมทั้งปุ่มกระดูกใหญ่และเล็ก\n• ผนังกระดูกด้านข้างแตกบาง (Lateral wall thickness < 20.5 มม.)"
                  },
                  "method": {
                    "en": "• Long or Short Cephalomedullary Nail (CMN) with distal locking screw\n• Trochanteric stabilizing plate (TSP) or lateral buttress augmentation if lateral wall is shattered\n• Consider cement augmentation of lag screw in severe osteoporosis\n• Total Hip Arthroplasty (THA) or Hemiarthroplasty with calcar-replacing stem for salvage in severe osteoporotic comminution",
                    "th": "• ผ่าตัดใส่ Cephalomedullary Nail (CMN) พร้อมล็อคสกรูส่วนปลาย\n• เสริมแผ่นเหล็กประคองปุ่มกระดูก (Trochanteric stabilizing plate) หากผนังด้านข้างแตกละเอียด\n• ฉีดซีเมนต์เสริมสกรู (Cement augmentation) ในผู้ป่วยกระดูกพรุนรุนแรง\n• หรือผ่าตัดเปลี่ยนข้อสะโพกเทียมชนิด Calcar-replacing stem ในกรณีแตกละเอียดมากจนยึดไม่ได้"
                  },
                  "rehabilitation": {
                    "en": "• Immediate weight-bearing as tolerated (WBAT) with walker under supervision\n• Avoid aggressive active hip abduction for 6 weeks if greater trochanter is floating",
                    "th": "• เริ่มฝึกเดินลงน้ำหนักเท่าที่ทนได้ (WBAT) ด้วย Walker โดยมีผู้ดูแล\n• หลีกเลี่ยงการเกร็งกางสะโพกแรงๆ ใน 6 สัปดาห์แรกหากปุ่มกระดูกใหญ่แตกหลุด"
                  },
                  "pitfalls": {
                    "en": "• Lateral wall blowout during reaming converts stable into unstable pattern\n• Lag screw cutout if TAD exceeds 25 mm",
                    "th": "• ระวังผนังกระดูกด้านข้างแตกระหว่างคว้านกระดูก\n• สกรูรูดทะลุหัวกระดูกหากค่า TAD มากกว่า 25 มม."
                  }
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
                "decisionPrinciple": {
                  "en": "Fracture line runs distal-medial to proximal-lateral causing medial shaft displacement by adductor pull; Sliding Hip Screw (DHS) is strictly contraindicated due to disastrous cutout; Cephalomedullary Nail is mandatory.",
                  "th": "แนวกระดูกหักเฉียงย้อนกลับทำให้แกนกระดูกต้นขาถูกกล้ามเนื้อดึงเลื่อนเข้าด้านใน ห้ามใช้ DHS เด็ดขาดเพราะจะรูดหลุดล้มเหลว 100% ต้องใช้ Cephalomedullary Nail เป็นมาตรฐานหลัก"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly CONTRAINDICATED (High nonunion and deformity rate)",
                    "th": "• ห้ามใช้วิธีนี้เด็ดขาด (กระดูกจะไม่ติดและผิดรูปรุนแรง)"
                  },
                  "method": {
                    "en": "• Not indicated",
                    "th": "• ไม่แนะนำ"
                  },
                  "rehabilitation": {
                    "en": "• N/A",
                    "th": "• ไม่ระบุ"
                  },
                  "pitfalls": {
                    "en": "• Rapid nonunion, severe limb shortening, and medial displacement",
                    "th": "• กระดูกไม่ติด ขาสั้นลงมาก และแกนกระดูกเลื่อนหลุดเข้าใน"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All reverse obliquity intertrochanteric fractures (AO/OTA 31-A3)\n• Fracture lines extending into the lateral cortex at or below greater trochanter",
                    "th": "• กระดูกหักเฉียงย้อนกลับทุกราย (AO/OTA 31-A3)\n• แนวกระดูกหักพาดผ่านผนังกระดูกด้านข้างที่ระดับหรือใต้ปุ่มกระดูกใหญ่"
                  },
                  "method": {
                    "en": "• MANDATORY Cephalomedullary Nail (CMN - preferably Long Nail) with static distal interlocks\n• Alternative: Fixed-angle 95° blade plate or Dynamic Condylar Screw (DCS) / Proximal Femoral Locking Plate (PFLP)\n• Sliding Hip Screw (DHS) is STRICTLY CONTRAINDICATED",
                    "th": "• ต้องผ่าตัดใส่ Cephalomedullary Nail (แนะนำ Long Nail) พร้อมล็อคสกรูปลาย\n• ทางเลือกอื่น: แผ่นดามมุมคงที่ 95° Blade plate หรือ DCS / Proximal Femoral Locking Plate (PFLP)\n• ห้ามใช้ Dynamic Hip Screw (DHS) เด็ดขาด"
                  },
                  "rehabilitation": {
                    "en": "• Protected partial weight bearing (PWB 50%) for 6 weeks with long nail, then advance to full WB upon callusing\n• Touch-down WB x 6–8 weeks if fixed-angle plate was used",
                    "th": "• ลงน้ำหนักบางส่วน (PWB 50%) 6 สัปดาห์แรกเมื่อใส่ Long nail แล้วเริ่มลงน้ำหนักเต็มที่เมื่อมีกระดูกงอกเชื่อม\n• แตะเท้าลงน้ำหนัก 6–8 สัปดาห์หากใช้แผ่นดามมุมคงที่"
                  },
                  "pitfalls": {
                    "en": "• Attempting DHS fixation will lead to medial shaft displacement and 100% mechanical failure\n• Fracture gap distracted by nail insertion (must release traction before distal locking)",
                    "th": "• การใช้ DHS จะทำให้แกนกระดูกเลื่อนหลุดและเหล็กพังล้มเหลว 100%\n• ระวังช่องว่างรอยหักอ้าออกจากการตอก Nail (ต้องคลายแรงดึงขาก่อนขันล็อคสกรูปลาย)"
                  }
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
      "regionConcept": {
        "physicalExam": [
          {
            "sign": "Proximal Fragment Deformity Flexion-Abduction-External Rotation",
            "positive": {
              "en": "Visible thigh deformity with proximal fragment pulled into flexion (iliopsoas), abduction (gluteus medius), and external rotation (short rotators).",
              "th": "เห็นความผิดรูปของต้นขาชัดเจน โดยชิ้นกระดูกส่วนบนถูกดึงให้งอขึ้น (Iliopsoas), กางออก (Gluteus medius) และหมุนออกนอก (Short rotators)"
            }
          }
        ],
        "acceptableAlignment": [
          {
            "parameter": {
              "en": "Varus / Valgus Angulation",
              "th": "มุมเอียง Varus / Valgus"
            },
            "threshold": "< 5°",
            "note": {
              "en": "Subtrochanteric region experiences high compressive forces medially (up to 1200 psi); varus leads to nonunion and plate failure.",
              "th": "บริเวณ Subtrochanteric รับแรงกดมหาศาลทางด้านใน หากปล่อยให้มีมุม Varus จะเกิดกระดูกไม่ติดและเหล็กดามหัก"
            }
          },
          {
            "parameter": {
              "en": "AP / Lateral Angulation",
              "th": "มุมเอียง AP / Lateral"
            },
            "threshold": "< 10°"
          },
          {
            "parameter": {
              "en": "Leg Length Shortening",
              "th": "ความยาวขาสั้นลง"
            },
            "threshold": "< 1 cm"
          }
        ],
        "redFlags": [
          {
            "en": "Atypical Femur Fracture (AFF) / Bisphosphonate-Related: Transverse or short oblique fracture with localized lateral cortical thickening; high risk of delayed union/nonunion requiring long IM nailing.",
            "th": "กระดูกหักผิดปกติจากยา Bisphosphonate (AFF): รอยหักแนวขวางขอบหนาด้านนอก มีอัตราติดช้า/ไม่ติดสูง ต้องรักษาด้วยการตอกแกนเหล็กยาวในโพรงกระดูก"
          },
          {
            "en": "High Mechanical Stress Area: Notorious site for implant breakage and nonunion due to high tensile stress laterally and extreme compressive stress medially.",
            "th": "พื้นที่รับแรงเค้นสูงที่สุด: เป็นตำแหน่งที่เหล็กดามหักและกระดูกไม่ติดบ่อยที่สุด เนื่องจากมีแรงดึงด้านนอกและแรงกดด้านในสูงมาก"
          }
        ],
        "clinicalPearls": [
          {
            "en": "Managing Deforming Forces: Use a Schanz pin / joystick or bone hook in the proximal fragment to pull it out of flexion and abduction during intramedullary nailing.",
            "th": "การควบคุมแรงดึงผิดรูป: ใช้ Schanz pin / joystick หรือ Bone hook ช่วยดึงชิ้นกระดูกส่วนบนลงมาจากท่างอและกางออก ขณะทำการตอกแกนเหล็กในโพรงกระดูก"
          }
        ]
      },
      "classifications": [
        {
          "system": "Russell-Taylor",
          "fullName": {
            "en": "Russell-Taylor Classification",
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
                "decisionPrinciple": {
                  "en": "Intact piriformis fossa and intact lesser trochanter medial buttress; standard antegrade intramedullary nailing (IMN) provides optimal load sharing with >95% union rate.",
                  "th": "Piriformis fossa และผนังกระดูกด้านในยังสมบูรณ์ดี การดามแกนเหล็กในโพรงกระดูก (Antegrade IMN) เป็นมาตรฐานหลัก ให้ความมั่นคงสูงและกระดูกติดดีเยี่ยม (>95%)"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly CONTRAINDICATED in adults (Causes severe varus malunion and nonunion)",
                    "th": "• ห้ามใช้วิธีนี้ในผู้ใหญ่เด็ดขาด (ทำให้กระดูกติดโก่งผิดรูปและไม่ติดรุนแรง)"
                  },
                  "method": {
                    "en": "• Not indicated",
                    "th": "• ไม่แนะนำ"
                  },
                  "rehabilitation": {
                    "en": "• N/A",
                    "th": "• ไม่ระบุ"
                  },
                  "pitfalls": {
                    "en": "• Severe varus malunion, shortening >2-3 cm, and nonunion",
                    "th": "• กระดูกติดเอียงโก่ง (Varus), ขาสั้นลง >2-3 ซม. และกระดูกไม่ติด"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All adult Russell-Taylor Type IA subtrochanteric fractures\n• Need to restore anatomical length and rotation",
                    "th": "• กระดูกใต้ปุ่มสะโพกหัก Type IA ในผู้ใหญ่ทุกราย\n• เพื่อคืนความยาวและแนวหมุนของกระดูกต้นขา"
                  },
                  "method": {
                    "en": "• Reamed Antegrade Intramedullary Nail (IMN) via piriformis fossa or trochanteric entry\n• Use Schanz pin / joystick in proximal fragment to overcome iliopsoas flexion and abductor pull\n• Static distal interlocking screws",
                    "th": "• ผ่าตัดใส่แกนดามในโพรงกระดูก Antegrade IMN ผ่านทาง Piriformis fossa หรือ Greater trochanter\n• ใช้ Schanz pin / Joystick ช่วยดึงชิ้นกระดูกส่วนบนที่งอและกางออกให้ตรงแนว\n• ล็อคสกรูส่วนปลายแบบ Static"
                  },
                  "rehabilitation": {
                    "en": "• Partial weight bearing (50%) on day 1–2 with walker, advance to full WB at 6 weeks upon callus formation",
                    "th": "• เริ่มฝึกเดินลงน้ำหนักบางส่วน (50%) ใน 1–2 วันแรก และลงน้ำหนักเต็มที่เมื่อครบ 6 สัปดาห์หลังมีกระดูกงอก"
                  },
                  "pitfalls": {
                    "en": "• Failure to correct proximal fragment flexion/abduction leads to varus malunion during nail passage",
                    "th": "• หากไม่ดึงชิ้นกระดูกส่วนบนลงมาให้ตรงแนวก่อนตอกแกนเหล็ก จะทำให้กระดูกติดเอียงโก่ง (Varus malunion)"
                  }
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
                "decisionPrinciple": {
                  "en": "Intact piriformis entry site but disrupted lesser trochanter medial buttress; Cephalomedullary Reconstruction Nail with head-neck screws prevents varus collapse.",
                  "th": "จุดแทงแกนเหล็กยังดีแต่สูญเสียผนังค้ำยันด้านใน ต้องผ่าตัดใส่ Cephalomedullary Reconstruction Nail ที่มีสกรูยึดเข้าคอสะโพกเพื่อต้านแรงยุบตัวโก่ง Varus"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly CONTRAINDICATED",
                    "th": "• ห้ามใช้วิธีนี้เด็ดขาด"
                  },
                  "method": {
                    "en": "• Not indicated",
                    "th": "• ไม่แนะนำ"
                  },
                  "rehabilitation": {
                    "en": "• N/A",
                    "th": "• ไม่ระบุ"
                  },
                  "pitfalls": {
                    "en": "• Catastrophic varus collapse, nonunion, and severe shortening",
                    "th": "• กระดูกยุบตัวโก่งรุนแรง กระดูกไม่ติด และขาสั้นลงมาก"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All Russell-Taylor Type IB fractures with medial wall comminution",
                    "th": "• กระดูกใต้ปุ่มสะโพกหัก Type IB ที่สูญเสียผนังกระดูกด้านในทุกราย"
                  },
                  "method": {
                    "en": "• Reamed Cephalomedullary Reconstruction Nail (dual lag screws or helical blade into femoral head)\n• Provisional reduction with cerclage wiring/cabling or percutaneous clamps if needed to restore medial contact\n• Static distal locking",
                    "th": "• ผ่าตัดใส่ Cephalomedullary Reconstruction Nail (ใส่สกรูกลุ่มคู่หรือ Helical blade เข้าหัวกระดูกสะโพก)\n• อาจใช้ลวดรัด Cerclage wire/cable ช่วยดึงชิ้นกระดูกด้านในเข้าที่\n• ล็อคสกรูส่วนปลายแบบ Static"
                  },
                  "rehabilitation": {
                    "en": "• Touch-down weight bearing (TDWB) x 6 weeks, then advance to partial WB, full WB at 10–12 weeks upon union",
                    "th": "• แตะเท้าลงน้ำหนักบางส่วน 6 สัปดาห์แรก แล้วเริ่มลงน้ำหนักเพิ่มขึ้น และลงน้ำหนักเต็มที่เมื่อกระดูกติดที่ 10–12 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Varus alignment at nail insertion causes early fatigue failure and nail breakage across subtrochanteric slot",
                    "th": "• หากใส่แกนเหล็กในมุมโก่ง Varus แกนเหล็กจะรับแรงล้าและหักตรงรอยต่อใต้ปุ่มสะโพก"
                  }
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
                "decisionPrinciple": {
                  "en": "Piriformis fossa is fractured preventing standard entry; Trochanteric-entry cephalomedullary nail or 95° fixed-angle blade plate/PFLP is mandatory.",
                  "th": "Piriformis fossa แตกทำให้ไม่สามารถแทงแกนเหล็กผ่านจุดเดิมได้ ต้องใช้แกนเหล็กแทงผ่าน Greater Trochanter หรือใช้แผ่นดามมุมคงที่ 95° Blade plate / PFLP"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly CONTRAINDICATED",
                    "th": "• ห้ามใช้วิธีนี้เด็ดขาด"
                  },
                  "method": {
                    "en": "• Not indicated",
                    "th": "• ไม่แนะนำ"
                  },
                  "rehabilitation": {
                    "en": "• N/A",
                    "th": "• ไม่ระบุ"
                  },
                  "pitfalls": {
                    "en": "• Severe limb shortening and disability",
                    "th": "• ขาสั้นลงและพิการถาวร"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Subtrochanteric fracture extending into piriformis fossa with intact lesser trochanter",
                    "th": "• กระดูกใต้ปุ่มสะโพกหักลามเข้า Piriformis fossa แต่ปุ่มกระดูกน้อยยังดี"
                  },
                  "method": {
                    "en": "• Greater Trochanteric Entry Cephalomedullary Nail (lateral entry to avoid piriformis fracture propagation)\n• OR Fixed-Angle 95° Blade Plate / Dynamic Condylar Screw (DCS) / Proximal Femoral Locking Plate (PFLP)\n• Standard piriformis-entry nail is STRICTLY CONTRAINDICATED",
                    "th": "• ผ่าตัดใส่ Greater Trochanteric Entry Cephalomedullary Nail (เข้าทางด้านข้างเพื่อเลี่ยงรอยแตกเดิม)\n• หรือใช้แผ่นเหล็กดามมุมคงที่ 95° Blade Plate / DCS / Proximal Femoral Locking Plate (PFLP)\n• ห้ามแทงแกนเหล็กผ่าน Piriformis fossa เด็ดขาด"
                  },
                  "rehabilitation": {
                    "en": "• Touch-down weight bearing x 6–8 weeks with PFLP or blade plate; WBAT if trochanteric nail achieves rigid intramedullary hold",
                    "th": "• แตะเท้าลงน้ำหนัก 6–8 สัปดาห์หากใช้แผ่นดาม PFLP; หรือลงน้ำหนักเท่าที่ทนได้หากใส่ Nail ที่ยึดได้แน่นหนา"
                  },
                  "pitfalls": {
                    "en": "• Attempting piriformis entry will propagate fracture into femoral neck",
                    "th": "• การฝืนแทงแกนเหล็กผ่าน Piriformis fossa จะทำให้รอยหักลามเข้าคอกระดูกต้นขา"
                  }
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
                "decisionPrinciple": {
                  "en": "Both piriformis fossa and lesser trochanter medial buttress are shattered (most severe); Requires Proximal Femoral Locking Plate (PFLP) or Trochanteric Reconstruction Nail with medial cortical reconstruction.",
                  "th": "แตกละเอียดทั้งจุดแทงแกนเหล็กและผนังค้ำยันด้านใน (รุนแรงที่สุด) ต้องผ่าตัดดามด้วย Proximal Femoral Locking Plate (PFLP) หรือ Trochanteric Reconstruction Nail ร่วมกับคืนรูปผนังกระดูกด้านใน"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly CONTRAINDICATED (Results in permanent severe limb shortening and nonunion)",
                    "th": "• ห้ามใช้วิธีนี้เด็ดขาด (ทำให้กระดูกไม่ติดและขาสั้นพิการถาวร)"
                  },
                  "method": {
                    "en": "• Not indicated",
                    "th": "• ไม่แนะนำ"
                  },
                  "rehabilitation": {
                    "en": "• N/A",
                    "th": "• ไม่ระบุ"
                  },
                  "pitfalls": {
                    "en": "• Severe permanent disability, nonunion, and chronic pain",
                    "th": "• พิการถาวร กระดูกไม่ติด และปวดเรื้อรัง"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Highly comminuted subtrochanteric fracture with loss of entry portal and medial pillar",
                    "th": "• กระดูกใต้ปุ่มสะโพกแตกละเอียดที่สูญเสียทั้งจุดแทงแกนเหล็กและผนังค้ำยันด้านใน"
                  },
                  "method": {
                    "en": "• Long Proximal Femoral Locking Plate (PFLP) or 95° Blade Plate spanning the comminution + Cerclage cable medial reduction\n• OR Greater Trochanteric Entry Cephalomedullary Long Nail with open/percutaneous reduction clamps",
                    "th": "• ผ่าตัดดามด้วย Long Proximal Femoral Locking Plate (PFLP) หรือ 95° Blade Plate พาดข้ามบริเวณแตกละเอียด ร่วมกับรัดลวด Cerclage cable คืนรูปผนังด้านใน\n• หรือใส่ Greater Trochanteric Entry Cephalomedullary Long Nail โดยใช้คีมช่วยจัดกระดูก"
                  },
                  "rehabilitation": {
                    "en": "• Strict non-weight bearing / Touch-down WB x 8–10 weeks; advance to full WB only after bridging callus is seen on both AP and lateral views (12–16 weeks)",
                    "th": "• ห้ามลงน้ำหนัก / แตะเท้าลงน้ำหนัก 8–10 สัปดาห์แรก; เริ่มลงน้ำหนักเต็มที่เมื่อเห็นกระดูกงอกเชื่อมสมบูรณ์ทั้งสองท่า (12–16 สัปดาห์)"
                  },
                  "pitfalls": {
                    "en": "• Highest rate of nonunion and implant fatigue breakage; avoid single-cortex plate fixation",
                    "th": "• มีอัตรากระดูกไม่ติดและเหล็กดามหักสูงที่สุด หลีกเลี่ยงการยึดสกรูสั้นเพียงชั้นเดียว"
                  }
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
      "regionConcept": {
        "physicalExam": [
          {
            "sign": "Tense Thigh Expansion & Neurovascular Check",
            "positive": {
              "en": "Massive thigh swelling and tense compartment from internal bleeding; evaluate distal dorsalis pedis / posterior tibial pulses and sciatic / peroneal nerve sensation.",
              "th": "ต้นขาบวมตึงรุนแรงจากการเสียเลือดในกล้ามเนื้อ; ต้องประเมินชีพจรข้อเท้าและระบบประสาท Sciatic/Peroneal เสมอ"
            }
          }
        ],
        "acceptableAlignment": [
          {
            "parameter": {
              "en": "Leg Shortening",
              "th": "ความยาวขาสั้นลง"
            },
            "threshold": "< 1 cm"
          },
          {
            "parameter": {
              "en": "Varus / Valgus Angulation",
              "th": "มุมเอียง Varus / Valgus"
            },
            "threshold": "< 5°"
          },
          {
            "parameter": {
              "en": "Anteroposterior Angulation",
              "th": "มุมเอียง AP"
            },
            "threshold": "< 10°"
          },
          {
            "parameter": {
              "en": "Rotational Deformity",
              "th": "มุมบิดหมุนผิดรูป"
            },
            "threshold": "< 10°"
          }
        ],
        "redFlags": [
          {
            "en": "Massive Hemorrhagic Shock: Closed femoral shaft fracture can bleed 1000-1500 ml into the thigh compartment, causing hypovolemic shock.",
            "th": "ภาวะช็อกจากการเสียเลือดปริมาณมาก: กระดูกแกนต้นขาหักแบบปิดสามารถเสียเลือดในชั้นกล้ามเนื้อได้ถึง 1,000-1,500 มล. ทำให้เกิดภาวะช็อกได้"
          },
          {
            "en": "Fat Embolism Syndrome (FES): Triad of hypoxemia, confusion/neurological changes, and petechial rash (chest/axilla) 24-72 hours post-fracture.",
            "th": "ภาวะไขมันอุดตันสตรีมเลือด (Fat Embolism): อาการไตรภาค ได้แก่ ออกซิเจนต่ำ, สับสน/ซึม, และผื่นจุดเลือดออกที่หน้าอก/รักแร้ ภายใน 24-72 ชม."
          },
          {
            "en": "Missed Ipsilateral Femoral Neck Fracture: Occurs in up to 5-10% of high-energy femoral shaft fractures; mandatory dedicated AP pelvis and fine-cut CT hip screening.",
            "th": "ตรวจพลาดกระดูกคอสะโพกหักร่วมในขาข้างเดียวกัน: พบได้ถึง 5-10% ในอุบัติเหตุแรงสูง บังคับต้องถ่าย AP Pelvis หรือส่ง CT Hip เสมอ"
          }
        ],
        "clinicalPearls": [
          {
            "en": "Damage Control Orthopedics (DCO) & Fixation Timing: Reamed intramedullary nailing within 24 hours reduces pulmonary complications (ARDS, FES) and mortality. In unstable polytrauma patients, apply temporary bridging external fixation first.",
            "th": "การควบคุมความรุนแรง (DCO) & ระยะเวลาผ่าตัด: การตอกแกนเหล็กในโพรงกระดูกภายใน 24 ชั่วโมงช่วยลดภาวะแทรกซ้อนทางปอดและอัตราเสียชีวิต หากผู้ป่วยอาการไม่เสถียร ให้ใส่โครงยึดภายนอกชั่วคราวก่อน"
          }
        ]
      },
      "classifications": [
        {
          "system": "Winquist-Hansen",
          "fullName": {
            "en": "Winquist & Hansen Classification",
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
                "decisionPrinciple": {
                  "en": "Simple 2-part fracture with 100% cortical contact; reamed antegrade or retrograde IMN provides load-sharing stability and immediate early weight-bearing.",
                  "th": "รอยหัก 2 ชิ้นไม่มีการแตกละเอียด ผนังกระดูกแตะกัน 100% ผ่าตัดใส่แกนดามในโพรงกระดูก (Reamed IMN) ให้ความมั่นคงสูงสุดและเริ่มเดินลงน้ำหนักได้ทันที"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Non-operative management is strictly reserved for patients with severe medical contraindications for anesthesia\n• Pediatric femur fractures (managed with hip spica/elastic nails)",
                    "th": "• สงวนไว้เฉพาะผู้ป่วยที่มีข้อห้ามทางการแพทย์ขั้นรุนแรงจนไม่สามารถผ่าตัดได้\n• ในเด็ก (รักษาด้วยการดามเฝือกหรือใส่ Elastic nail)"
                  },
                  "method": {
                    "en": "• Skeletal traction (distal femur / proximal tibia pin) for 6–8 weeks followed by cast-bracing",
                    "th": "• ดึงถ่วงน้ำหนักผ่านกระดูก (Skeletal traction) 6–8 สัปดาห์แล้วใส่เฝือกขายาว (มีภาวะแทรกซ้อนสูงมาก)"
                  },
                  "rehabilitation": {
                    "en": "• Bedbound x 6–8 weeks; high risk of muscle wasting and joint contractures",
                    "th": "• นอนติดเตียง 6–8 สัปดาห์ เสี่ยงต่อกล้ามเนื้อลีบและข้อเข่าข้อสะโพกติดแข็ง"
                  },
                  "pitfalls": {
                    "en": "• High incidence of deep vein thrombosis (DVT), pulmonary embolism (PE), malunion (shortening/rotation), and knee stiffness",
                    "th": "• เสี่ยงต่อลิ่มเลือดอุดตันหลอดเลือดปอด ขาสั้นลง กระดูกติดบิดหมุนผิดรูป และข้อเข่าติดแข็ง"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All adult femoral shaft fractures (Winquist Type 0)\n• Goal of rapid anatomic alignment, length, rotation, and early weight-bearing",
                    "th": "• กระดูกแกนต้นขาหักในผู้ใหญ่ทุกราย\n• เพื่อคืนแนวตรง ความยาว และมุมหมุน พร้อมทั้งให้ลุกเดินได้เร็ว"
                  },
                  "method": {
                    "en": "• Reamed Antegrade (Trochanteric / Piriformis) or Retrograde Intramedullary Nailing (IMN)\n• Proximal and distal interlocking screws placed statically\n• Over-reaming by 1–1.5 mm above selected nail diameter to enhance endosteal contact and stability",
                    "th": "• ผ่าตัดใส่แกนดามในโพรงกระดูก Reamed Antegrade หรือ Retrograde IMN\n• ล็อคสกรูส่วนบนและล่างแบบ Static\n• คว้านโพรงกระดูกเพิ่ม 1–1.5 มม. เพื่อให้แกนเหล็กแนบกระดูกแน่นหนาและกระตุ้นการติดของกระดูก"
                  },
                  "rehabilitation": {
                    "en": "• Immediate weight-bearing as tolerated (WBAT) with crutches/walker on post-op day 1\n• Early active knee and hip range of motion exercises",
                    "th": "• เริ่มฝึกเดินลงน้ำหนักเท่าที่ทนได้ (WBAT) ด้วยอุปกรณ์ช่วยเดินตั้งแต่วันแรกหลังผ่าตัด\n• ฝึกขยับข้อเข่าและข้อสะโพกทันที"
                  },
                  "pitfalls": {
                    "en": "• Screen for missed ipsilateral femoral neck fracture (~5-10% co-occurrence) with pre/post-nailing fluoroscopy and AP pelvis\n• Watch for rotational malalignment (>10° internal/external rotation)",
                    "th": "• ต้องตรวจคัดกรองหากระดูกคอสะโพกหักร่วมข้างเดียวกันเสมอ (พบร่วมได้ถึง 5-10%)\n• ระวังกระดูกติดบิดหมุนผิดแนว (>10 องศา)"
                  }
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
                "decisionPrinciple": {
                  "en": "Minimal butterfly fragment with >75% cortical contact retains excellent axial stability; reamed locked IMN allows early full weight-bearing.",
                  "th": "ชิ้นกระดูกปีกผีเสื้อขนาดเล็กและผนังกระดูกแตะกัน >75% มีความมั่นคงสูง การดามแกนเหล็ก Reamed Locked IMN ช่วยให้ลงน้ำหนักเดินได้เร็ว"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly CONTRAINDICATED in ambulatory adults",
                    "th": "• ห้ามใช้วิธีนี้ในผู้ใหญ่ที่เดินได้"
                  },
                  "method": {
                    "en": "• Skeletal traction for non-operable patients only",
                    "th": "• ดึงถ่วงน้ำหนักกระดูกเฉพาะผู้ที่ไม่สามารถผ่าตัดได้เท่านั้น"
                  },
                  "rehabilitation": {
                    "en": "• Bedbound care",
                    "th": "• ดูแลบนเตียง"
                  },
                  "pitfalls": {
                    "en": "• Malunion, nonunion, and recumbency morbidity",
                    "th": "• กระดูกติดผิดรูป ขาสั้น และภาวะแทรกซ้อนจากการนอนติดเตียง"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All Winquist Type I femoral shaft fractures in adults",
                    "th": "• กระดูกแกนต้นขาหัก Winquist Type I ในผู้ใหญ่ทุกราย"
                  },
                  "method": {
                    "en": "• Reamed Antegrade or Retrograde Intramedullary Nailing (IMN)\n• Static interlocking with proximal and distal locking bolts\n• Preserve periosteal soft tissue attachment of the butterfly fragment (do not strip)",
                    "th": "• ผ่าตัดใส่แกนดามในโพรงกระดูก Reamed Antegrade หรือ Retrograde IMN\n• ล็อคสกรูหัวท้ายแบบ Static\n• ห้ามเลาะเยื่อหุ้มกระดูกรอบชิ้นปีกผีเสื้อเพื่อรักษาเลือดมาเลี้ยง"
                  },
                  "rehabilitation": {
                    "en": "• Immediate weight-bearing as tolerated (WBAT) with walker/crutches on day 1\n• Active quadriceps strengthening and hip/knee ROM",
                    "th": "• เริ่มฝึกเดินลงน้ำหนักเท่าที่ทนได้ (WBAT) ด้วยอุปกรณ์ช่วยเดินในวันแรกหลังผ่าตัด\n• ฝึกเกร็งกล้ามเนื้อต้นขาและขยับข้อเข่า/สะโพก"
                  },
                  "pitfalls": {
                    "en": "• Do not attempt open anatomic reduction or stripping of small butterfly fragments (leads to devascularization and nonunion)",
                    "th": "• อย่าเปิดแผลเลาะชิ้นกระดูกปีกผีเสื้อเพื่อจัดเข้าที่ (จะทำให้กระดูกขาดเลือดและไม่ติด)"
                  }
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
                "decisionPrinciple": {
                  "en": "Butterfly fragment spans <50% of cortex; main fragments retain 50-75% contact; statically locked reamed IMN bridges fracture while maintaining length and alignment.",
                  "th": "ชิ้นกระดูกปีกผีเสื้อใหญ่ขึ้นแต่ผนังหลักยังแตะกัน 50-75% ผ่าตัดใส่แกนดามในโพรงกระดูกชนิดล็อคสกรูหัวท้าย (Static Locked IMN) เพื่อรักษาความยาวและแนวแกน"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly CONTRAINDICATED",
                    "th": "• ห้ามใช้วิธีนี้เด็ดขาด"
                  },
                  "method": {
                    "en": "• Not indicated",
                    "th": "• ไม่แนะนำ"
                  },
                  "rehabilitation": {
                    "en": "• N/A",
                    "th": "• ไม่ระบุ"
                  },
                  "pitfalls": {
                    "en": "• Shortening, angular/rotational malunion, and joint stiffness",
                    "th": "• ขาสั้นลง ติดเบี้ยวหมุน และข้อติดแข็ง"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All Winquist Type II femoral shaft fractures in adults",
                    "th": "• กระดูกแกนต้นขาหัก Winquist Type II ในผู้ใหญ่ทุกราย"
                  },
                  "method": {
                    "en": "• Statically Locked Reamed Intramedullary Nail (Antegrade or Retrograde)\n• Closed reduction with traction table or manual traction\n• Dual proximal and distal locking bolts to prevent shortening and rotation",
                    "th": "• ผ่าตัดใส่แกนดามในโพรงกระดูก Reamed IMN พร้อมล็อคสกรูหัวท้ายแบบ Static\n• ดึงจัดกระดูกแบบปิดบนเตียงผ่าตัดดึงกระดูก\n• ล็อคสกรูส่วนบนและล่างเพื่อป้องกันกระดูกทรุดสั้นและบิดหมุน"
                  },
                  "rehabilitation": {
                    "en": "• Partial weight bearing (50%) on day 1–2, advance to full WB at 4–6 weeks upon early callusing\n• Active knee flexion/extension exercises",
                    "th": "• เริ่มฝึกเดินลงน้ำหนักบางส่วน (50%) ใน 1–2 วันแรก และลงน้ำหนักเต็มที่เมื่อครบ 4–6 สัปดาห์หลังมีกระดูกงอก\n• ฝึกงอเหยียดข้อเข่า"
                  },
                  "pitfalls": {
                    "en": "• Distraction at fracture site during reaming/nailing (must release traction prior to distal locking)",
                    "th": "• ระวังแนวกระดูกอ้าห่างจากการดึงตึงเกินไป (ต้องคลายแรงดึงก่อนล็อคสกรูตัวล่าง)"
                  }
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
                "decisionPrinciple": {
                  "en": "Large butterfly fragment with <50% cortical contact is length- and rotationally unstable; mandatory static interlocking IMN functions as an internal bridge.",
                  "th": "ชิ้นกระดูกปีกผีเสื้อใหญ่และผนังกระดูกแตะกัน <50% ทำให้ไม่มั่นคงทั้งความยาวและมุมหมุน ต้องใช้แกนเหล็ก Static Interlocked IMN ดามสะพานเชื่อมเพื่อคงความยาวของขา"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly CONTRAINDICATED (Results in severe shortening >3-5 cm and flail deformity)",
                    "th": "• ห้ามใช้วิธีนี้เด็ดขาด (ทำให้ขาสั้นลง >3-5 ซม. และกระดูกติดผิดรูป)"
                  },
                  "method": {
                    "en": "• Not indicated",
                    "th": "• ไม่แนะนำ"
                  },
                  "rehabilitation": {
                    "en": "• N/A",
                    "th": "• ไม่ระบุ"
                  },
                  "pitfalls": {
                    "en": "• Severe permanent shortening, malrotation, and nonunion",
                    "th": "• ขาสั้นถาวร บิดหมุนผิดรูป และกระดูกไม่ติด"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All Winquist Type III femoral shaft fractures in adults",
                    "th": "• กระดูกแกนต้นขาหัก Winquist Type III ในผู้ใหญ่ทุกราย"
                  },
                  "method": {
                    "en": "• Statically Locked Reamed Intramedullary Nail (IMN) with dual proximal and distal locking screws\n• Bridge plating / Submuscular locking plate if canal is obliterated or retrograde/antegrade nailing is contraindicated\n• Strict maintenance of length and rotation relative to the uninjured contralateral femur",
                    "th": "• ผ่าตัดใส่แกนดามในโพรงกระดูก Static Locked Reamed IMN พร้อมล็อคสกรูคู่ทั้งบนและล่าง\n• หรือใส่แผ่นเหล็กดามแบบสะพาน (Bridge plating) หากมีข้อห้ามใส่แกนเหล็ก\n• ควบคุมความยาวและมุมหมุนให้เท่ากับขาข้างปกติ"
                  },
                  "rehabilitation": {
                    "en": "• Touch-down to partial weight bearing (20–30 kg) x 6 weeks; advance to full WB only after radiographic bridging callus appears (6–8 weeks)",
                    "th": "• แตะเท้าลงน้ำหนักบางส่วน (20–30 กก.) 6 สัปดาห์แรก แล้วเริ่มลงน้ำหนักเต็มที่เมื่อเห็นกระดูกงอกเชื่อมรอยหัก (6–8 สัปดาห์)"
                  },
                  "pitfalls": {
                    "en": "• Dynamic locking is contraindicated (causes telescoping shortening and collapse)\n• Do not open comminution site (preserves fracture hematoma and biology)",
                    "th": "• ห้ามใช้ Dynamic locking เด็ดขาด (จะทำให้กระดูกรูดทรุดสั้น)\n• หลีกเลี่ยงการเปิดแผลเข้าไปรบกวนบริเวณที่แตกละเอียด"
                  }
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
                "decisionPrinciple": {
                  "en": "Complete circumferential comminution with 0% cortical contact; statically locked reamed IMN or Damage Control Orthopedics (DCO) spanning Ex-Fix followed by definitive bridging fixation.",
                  "th": "กระดูกแตกละเอียดรอบวงสมบูรณ์ 0% ผนังไม่แตะกัน ผ่าตัดยึดแกนเหล็ก Static Locked IMN หรือใส่โครงยึดตรึงภายนอก (Ex-Fix) ในระยะ Damage Control แล้วผ่าตัดยึดตรึงถาวรแบบสะพานข้าม"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly CONTRAINDICATED (Lethal in polytrauma and causes severe permanent limb loss/shortening)",
                    "th": "• ห้ามใช้วิธีนี้เด็ดขาด (เสี่ยงเสียชีวิตในผู้ป่วยบาดเจ็บหลายระบบ และทำให้ขาสั้นพิการถาวร)"
                  },
                  "method": {
                    "en": "• Not indicated",
                    "th": "• ไม่แนะนำ"
                  },
                  "rehabilitation": {
                    "en": "• N/A",
                    "th": "• ไม่ระบุ"
                  },
                  "pitfalls": {
                    "en": "• Crippling limb shortening, massive muscle scar formation, nonunion, and chronic osteomyelitis in open injuries",
                    "th": "• ขาสั้นพิการ พังผืดในกล้ามเนื้อ กระดูกไม่ติด และกระดูกอักเสบติดเชื้อเรื้อรัง"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All Winquist Type IV comminuted / segmental femoral shaft fractures\n• High-energy polytrauma requiring length and hemodynamic restoration",
                    "th": "• กระดูกแกนต้นขาหักแตกละเอียดหลายท่อน Winquist Type IV ทุกราย\n• ผู้ป่วยบาดเจ็บหลายระบบที่ต้องการควบคุมการเสียเลือดและคืนความยาวกระดูก"
                  },
                  "method": {
                    "en": "• Definitive Fixation: Statically Locked Reamed Long IM Nail with dual proximal and dual distal locking bolts\n• Damage Control Orthopedics (DCO): Temporary spanning external fixator (pins in proximal femur/subtrochanter and distal femur/proximal tibia) for unstable polytrauma, followed by conversion to IMN within 10–14 days\n• Alternative: Minimally Invasive Plate Osteosynthesis (MIPO) spanning locking plate",
                    "th": "• การผ่าตัดหลัก: ผ่าตัดใส่แกนดามในโพรงกระดูก Static Locked Reamed IMN ขันล็อคสกรูคู่ทั้งบนและล่าง\n• การกู้ชีพ Damage Control (DCO): ใส่โครงยึดตรึงภายนอก (Spanning Ex-Fix) ชั่วคราวในผู้ป่วยวิกฤต แล้วแปลงเป็นผ่าตัดใส่แกนเหล็ก IMN ภายใน 10–14 วัน\n• ทางเลือกอื่น: ผ่าตัดดามแผ่นเหล็กล็อคข้ามรอยหักแบบแผลเล็ก (MIPO)"
                  },
                  "rehabilitation": {
                    "en": "• Strict non-weight bearing / Touch-down WB x 6–8 weeks; advance to partial WB at 8 weeks, full WB only when 3/4 cortices demonstrate bridging callus (12–16 weeks)",
                    "th": "• ห้ามลงน้ำหนัก / แตะเท้าลงน้ำหนัก 6–8 สัปดาห์แรก; เริ่มลงน้ำหนักบางส่วนที่ 8 สัปดาห์ และลงน้ำหนักเต็มที่เมื่อเห็นกระดูกงอกเชื่อม 3 ใน 4 ด้าน (12–16 สัปดาห์)"
                  },
                  "pitfalls": {
                    "en": "• High incidence of Fat Embolism Syndrome (FES) and Acute Respiratory Distress Syndrome (ARDS) — early stable fixation reduces pulmonary morbidity\n• Compartment syndrome of the thigh from massive internal hematoma",
                    "th": "• เสี่ยงต่อภาวะไขมันอุดตันปอด (Fat Embolism Syndrome - FES) การผ่าตัดยึดกระดูกเร็วช่วยลดภาวะแทรกซ้อนทางปอด\n• เฝ้าระวังภาวะความดันช่องกล้ามเนื้อต้นขาสูง (Compartment Syndrome) จากการเสียเลือดในกล้ามเนื้อ"
                  }
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
    },
    {
      "id": "distal",
      "name": {
        "en": "Distal Femur",
        "th": "ส่วนปลายกระดูกต้นขา (Distal Femur)"
      },
      "regionConcept": {
        "physicalExam": [
          {
            "sign": "Neurovascular Assessment (Popliteal Artery & Tibial/Peroneal Nerves)",
            "positive": {
              "en": "Diminished or absent distal DP/PT pulses, cold/pale foot, or ankle/toe motor deficits indicate popliteal artery entrapment/laceration (urgent ABI and CTA indicated)",
              "th": "คลำชีพจรหลังเท้า (DP/PT) ได้เบาหรือคลำไม่ได้ เท้าซีดเย็น หรือกระดกเท้าไม่ได้ บ่งชี้เส้นเลือด Popliteal artery ถูกกดทับหรือฉีกขาด (ต้องตรวจ ABI และทำ CTA ด่วน)"
            }
          },
          {
            "sign": "Gastrocnemius Flexion Deformity Palpation",
            "positive": {
              "en": "Palpable distal fragment displaced and tilted posteriorly into the popliteal fossa (apex posterior angulation) due to gastrocnemius pull",
              "th": "คลำพบชิ้นกระดูกส่วนปลายกระดกพับเอียงไปด้านหลัง (Apex posterior) เข้าสู่โพรงข้อพับเข่าจากแรงดึงของกล้ามเนื้อ Gastrocnemius"
            }
          },
          {
            "sign": "Tense Hemarthrosis & Extensor Mechanism Assessment",
            "positive": {
              "en": "Massive knee effusion/hemarthrosis with inability to perform active straight leg raise (rule out associated patellar fracture or quadriceps tendon rupture)",
              "th": "ข้อเข่าบวมตึงรุนแรงจากเลือดออกในข้อ ไม่สามารถยกขาขึ้นตรงได้ (ต้องตรวจแยกการฉีกขาดของเอ็นเหยียดเข่าหรือกระดูกสะบ้าหักร่วม)"
            }
          }
        ],
        "acceptableAlignment": [
          {
            "parameter": {
              "en": "Articular Step-off / Gap",
              "th": "ระยะเกยหรือช่องว่างของผิวข้อ"
            },
            "threshold": "< 1-2 mm",
            "note": {
              "en": "Anatomical reduction mandatory to restore articular congruity and prevent post-traumatic osteoarthritis",
              "th": "จำเป็นต้องจัดกระดูกผิวข้อให้เรียบเสมอเพื่อคืนรูปผิวข้อและป้องกันข้อเข่าเสื่อม"
            }
          },
          {
            "parameter": {
              "en": "Coronal Alignment (Varus / Valgus)",
              "th": "แนวแกนในแนว Coronal (โก่งเข้าใน / บิดออกนอก)"
            },
            "threshold": "< 5°",
            "note": {
              "en": "Varus malalignment shifts mechanical axis medially, accelerating medial compartment knee arthrosis",
              "th": "การติดผิดรูปแนว Varus ส่งผลให้แกนรับน้ำหนักเบนเข้าด้านใน ทำให้ข้อเข่าด้านในเสื่อมเร็ว"
            }
          },
          {
            "parameter": {
              "en": "Sagittal Alignment (Apex Anterior / Posterior)",
              "th": "มุมเอียงแนวหน้าหลัง (Sagittal Plane)"
            },
            "threshold": "< 5-10°",
            "note": {
              "en": "Apex-posterior (recurvatum) deformity causes knee extension block and patellofemoral overload",
              "th": "การเอียงกระดกไปด้านหลังทำให้เหยียดเข่าไม่สุดและเกิดแรงกดผิดปกติต่อข้อสะบ้า"
            }
          },
          {
            "parameter": {
              "en": "Shortening / Length Discrepancy",
              "th": "ความสั้นของกระดูก (Shortening)"
            },
            "threshold": "< 1.5 cm",
            "note": {
              "en": "Shortening >1.5cm causes significant pelvic obliquity and abnormal gait kinematics",
              "th": "ขาสั้นเกิน 1.5 ซม. ทำให้เชิงกรานเอียงและเดินกะเผลก"
            }
          }
        ],
        "redFlags": [
          {
            "en": "Popliteal Artery Injury: Distal fragment hyperextension can impinge or transect the popliteal artery behind the knee; warm ischemia >6 hours causes irreversible muscle necrosis",
            "th": "การบาดเจ็บของเส้นเลือดใหญ่ Popliteal Artery: ชิ้นกระดูกที่กระดกไปด้านหลังอาจกดทับหรือตัดขาดเส้นเลือด Popliteal การขาดเลือดเกิน 6 ชม. ทำให้กล้ามเนื้อเน่าตายถาวร"
          },
          {
            "en": "Acute Thigh / Knee Compartment Syndrome: Tense, firm compartments with severe passive stretch pain; emergent surgical decompression indicated",
            "th": "ภาวะความดันช่องกล้ามเนื้อต้นขาสูงฉุกเฉิน (Compartment Syndrome): กล้ามเนื้อตึงแน่นและปวดรุนแรงขณะยืด ต้องผ่าตัดกรีดคลายกล้ามเนื้อด่วน"
          },
          {
            "en": "Open Fracture with High-Energy Bone Loss: Requires emergent debridement, IV antibiotics, and temporary joint-spanning external fixation",
            "th": "กระดูกหักแผลเปิดพร้อมสูญเสียเนื้อกระดูก: ต้องผ่าตัดล้างแผล ให้ยาปฏิชีวนะ และใส่ Spanning Ex-Fix ข้ามข้อเข่าชั่วคราวด่วน"
          }
        ],
        "associatedInjuries": [
          {
            "injury": {
              "en": "Ipsilateral Tibial Shaft Fracture (Floating Knee Injury)",
              "th": "กระดูกหน้าแข้งหักข้างเดียวกัน (ภาวะ Floating Knee)"
            },
            "trigger": {
              "en": "High complication rate; requires rigid internal fixation of both femur and tibia to allow early knee rehabilitation",
              "th": "มีความเสี่ยงสูง ต้องผ่าตัดยึดตรึงให้แข็งแรงทั้งกระดูกต้นขาและหน้าแข้งเพื่อเริ่มขยับข้อเข่าได้เร็ว"
            }
          },
          {
            "injury": {
              "en": "Knee Ligamentous Disruptions (ACL / PCL / Collaterals)",
              "th": "เอ็นไขว้หน้า/หลัง หรือเอ็นข้างข้อเข่าฉีกขาด (ACL/PCL/MCL/LCL)"
            },
            "trigger": {
              "en": "Present in ~20% of high-energy distal femur fractures; perform stress exam under anesthesia after bony stabilization",
              "th": "พบได้ประมาณ 20% ของผู้ป่วยกระดูกต้นขาส่วนปลายหัก ควรตรวจความมั่นคงของเอ็นข้อเข่าขณะดมยาสลบหลังยึดกระดูกเสร็จ"
            }
          }
        ],
        "clinicalPearls": [
          {
            "en": "Gastrocnemius Flexion Deformity: The distal fragment is characteristically hyperextended (apex posterior) by the dual gastrocnemius heads; place a triangular bump under the distal thigh to reduce sagittal sag.",
            "th": "แรงดึงของกล้ามเนื้อ Gastrocnemius ดึงให้ชิ้นกระดูกส่วนปลายกระดกพับไปด้านหลัง (Apex posterior) ควรหนุนหมอนรองใต้ขาหนือข้อพับเพื่อช่วยดัดกระดูกให้ตรงแนว"
          },
          {
            "en": "Retrograde Nail vs Lateral Plate: Retrograde IM Nail (rIMN) is ideal for Type I extra-articular and simple Type III fractures; Lateral Distal Femur Locking Plate (DFLP/LISS) is mandatory for comminuted articular fractures (Type III) and coronal Hoffa fractures.",
            "th": "การเลือก Retrograde Nail vs Lateral Plate: Retrograde Nail เหมาะกับ Type I และ Type III ชนิดเรียบง่าย; ส่วน Lateral Locking Plate (DFLP) จำเป็นสำหรับ Type III ที่แตกละเอียดและรอยหัก Hoffa"
          },
          {
            "en": "Coronal Shear Hoffa Fracture: A coronal unicondylar fracture (usually lateral condyle) that is easily missed on AP radiograph; fine-cut 3D CT scan is mandatory for all intra-articular distal femur fractures.",
            "th": "รอยหัก Hoffa (Coronal Shear): รอยหักเฉือนแนว Coronal ที่ปุ่มกระดูกข้อเข่า มักมองไม่เห็นในภาพ AP จึงจำเป็นต้องตรวจ 3D CT scan เสมอในกระดูกหักเข้าข้อเข่า"
          }
        ]
      },
      "classifications": [
        {
          "system": "Distal Femur",
          "fullName": {
            "en": "Distal Femur Fracture Classification (Supracondylar, Unicondylar, Bicondylar)",
            "th": "การจำแนกกระดูกต้นขาส่วนปลายหัก (Supracondylar, Unicondylar, Bicondylar)"
          },
          "description": {
            "en": "Classification of distal femur fractures based on articular and condylar involvement:\n• Type I: Supracondylar (Extra-articular fracture above condyles)\n• Type II: Unicondylar (Partial articular fracture involving a single condyle)\n• Type III: Bicondylar (Complete articular fracture with intercondylar split)",
            "th": "ระบบจำแนกกระดูกต้นขาส่วนปลายหักตามระดับการเข้าข้อและปุ่มกระดูกข้อเข่า:\n• Type I: Supracondylar (หักเหนือข้อ / Extra-articular)\n• Type II: Unicondylar (หักเข้าข้อปุ่มเดียว / Partial articular)\n• Type III: Bicondylar (หักเข้าข้อสองปุ่ม / Complete articular)"
          },
          "concept": {
            "title": {
              "en": "Distal Femur Clinical Concept & Decision Framework",
              "th": "หลักการคิดและเกณฑ์ตัดสินใจ Distal Femur Fracture Classification"
            },
            "corePrinciple": {
              "en": "Distal femur fractures are high-energy injuries in young adults and fragility osteoporotic fractures in elderly. Categorized into Type I (Supracondylar/Extra-articular), Type II (Unicondylar/Partial articular), and Type III (Bicondylar/Complete articular). Deforming muscle forces (gastrocnemius causing hyperextension/recurvatum, adductor magnus causing varus) dictate reduction maneuvers.",
              "th": "กระดูกต้นขาส่วนปลายหักเกิดจากแรงกระแทกพลังงานสูงในคนหนุ่มสาว หรือกระดูกพรุนในผู้สูงอายุ แบ่งเป็น Type I (เหนือข้อ), Type II (ปุ่มเดียว), และ Type III (สองปุ่มเข้าข้อสมบูรณ์) แรงดึงของกล้ามเนื้อ Gastrocnemius ดึงให้ชิ้นกระดูกส่วนปลายกระดกแอ่นไปด้านหลัง (Apex posterior) และ Adductor magnus ดึงให้ขาโก่งเข้าใน (Varus)"
            },
            "rules": [
              {
                "en": "Type I (Supracondylar / Extra-articular): Fracture line above condylar block -> Articular cartilage intact -> Retrograde IM Nail (rIMN) or Lateral Locking Plate (DFLP)",
                "th": "Type I (Supracondylar / หักเหนือข้อ): รอยหักอยู่เหนือก้อนปุ่มข้อเข่า -> ผิวข้อสมบูรณ์ -> ผ่าตัดยึด Retrograde IM Nail (rIMN) หรือ Lateral Locking Plate (DFLP)"
              },
              {
                "en": "Type II (Unicondylar / Partial Articular): One condyle fractured (Lateral/Medial/Hoffa coronal shear) -> Articular step-off > 1-2 mm -> Anatomical lag screws + buttress plate",
                "th": "Type II (Unicondylar / หักปุ่มเดียว): หักเข้าข้อปุ่มเดียว (ปุ่มนอก/ปุ่มใน/Hoffa Coronal) -> ผิวข้อสะดุด > 1-2 มม. -> ผ่าตัดจัดผิวข้อเข้าที่ ยึดด้วย Lag screws + Buttress plate"
              },
              {
                "en": "Type III (Bicondylar / Complete Articular): Intercondylar T- or Y-split with complete dissociation from shaft -> Mandatory anatomical articular reconstruction + Lateral Distal Femur Locking Plate (DFLP) ± Medial plate",
                "th": "Type III (Bicondylar / หักสองปุ่มเข้าข้อสมบูรณ์): รอยหักแยกสองปุ่มรูปตัว T หรือ Y หลุดจากแกนกระดูก -> ผ่าตัดจัดผิวข้อให้เรียบสนิท + ดามแผ่นเหล็กล็อคด้านนอก (DFLP) ± แผ่นเหล็กดามด้านใน"
              },
              {
                "en": "AO/OTA 33 Correlation: 33-A (Extra-articular ~ Type I), 33-B (Partial articular ~ Type II), 33-C (Complete articular ~ Type III)",
                "th": "การเชื่อมโยง AO/OTA 33: 33-A (Type I เหนือข้อ), 33-B (Type II ปุ่มเดียว), 33-C (Type III สองปุ่มเข้าข้อ)"
              }
            ],
            "clinicalSignificance": [
              {
                "en": "Retrograde Nail vs Lateral Plate: Retrograde IM Nail (rIMN) provides superior biological fixation for Type I extra-articular fractures; Lateral Distal Femoral Locking Plate (DFLP) is mandatory for comminuted Type III and Hoffa variants.",
                "th": "การเลือก Retrograde Nail vs Lateral Plate: Retrograde Nail ให้การยึดตรึงเชิงชีวภาพที่ดีเยี่ยมใน Type I เหนือข้อ; ส่วน Lateral Locking Plate (DFLP) จำเป็นสำหรับ Type III ที่แตกละเอียดและรอยหัก Hoffa"
              },
              {
                "en": "Hoffa Coronal Shear Fragment: Coronal unicondylar fracture (usually lateral condyle) easily missed on AP radiograph; requires 3D CT scan and AP-directed headless compression screws under articular cartilage.",
                "th": "รอยหัก Hoffa (Coronal Shear): รอยหักเฉือนแนว Coronal ที่ปุ่มกระดูกข้อเข่า มองไม่เห็นในภาพ AP ต้องตรวจ 3D CT scan และยึดด้วย Headless Screws หัวจมใต้ผิวข้อ"
              },
              {
                "en": "Distal Femoral Replacement (DFR): Endoprosthetic distal femoral arthroplasty indicated for severely comminuted fragility Type III fractures in elderly osteoporotic patients to permit immediate full weight-bearing.",
                "th": "การผ่าตัดใส่ข้อเข่าเทียมส่วนล่าง (Distal Femoral Replacement - DFR): ทางเลือกหลักในผู้สูงอายุกระดูกพรุนที่กระดูกแตกละเอียด Type III จนไม่สามารถดามได้ เพื่อให้เดินลงน้ำหนักได้ทันที"
              }
            ]
          },
          "investigations": [
            {
              "name": "AP Knee / Distal Femur View",
              "details": {
                "en": "Standard Anteroposterior radiograph of the distal femur and knee joint. Evaluates coronal alignment, intercondylar notch split, and medial/lateral condylar height.",
                "th": "ภาพเอกซเรย์ข้อเข่าและกระดูกต้นขาส่วนปลายท่าหน้าหลัง (AP) เพื่อประเมินแนวแกน Coronal รอยแยก Intercondylar split และระดับความสูงของปุ่มกระดูกข้อเข่าสองฝั่ง"
              }
            },
            {
              "name": "Lateral Knee View",
              "details": {
                "en": "Standard 90-degree flexed or cross-table lateral view. Critical to assess apex-posterior (recurvatum) angulation caused by gastrocnemius pull and detect posterior coronal shear (Hoffa) fracture lines.",
                "th": "ภาพเอกซเรย์ข้อเข่าท่าด้านข้าง (Lateral) สำคัญอย่างยิ่งในการประเมินมุมกระดกเอียงไปด้านหลัง (Apex posterior) จากแรงดึงของ Gastrocnemius และตรวจหารอยหักเฉือนด้านหลัง (Hoffa fracture)"
              }
            },
            {
              "name": "Full-Length Femur AP & Lateral Views",
              "details": {
                "en": "Full-length radiograph from hip to knee. Essential to evaluate diaphyseal fracture extension, previous implants/hardware, and restore overall mechanical axis alignment.",
                "th": "ภาพเอกซเรย์กระดูกต้นขาความยาวเต็มตั้งแต่ข้อสะโพกถึงข้อเข่า จำเป็นเพื่อประเมินการลามของรอยหักขึ้นไปสู่ก้านกระดูก และวางแผนคืนแนวแกนรับน้ำหนักของขา"
              }
            },
            {
              "name": "3D CT Scan (Axial, Coronal, Sagittal & 3D Render) - GOLD STANDARD",
              "details": {
                "en": "MANDATORY GOLD STANDARD imaging for all intra-articular distal femur fractures. Accurately maps coronal Hoffa fragments, quantifies central/intercondylar comminution, and guides optimal screw trajectory.",
                "th": "การตรวจเอกซเรย์คอมพิวเตอร์ 3 มิติ (3D CT Scan) เป็นมาตรฐานสำคัญที่สุดที่ต้องทำในรอยหักเข้าข้อเข่าทุกราย เพื่อระบุรอยหัก Hoffa ในแนว Coronal ประเมินความแตกละเอียด และวางแผนทิศทางการขันสกรู"
              }
            }
          ],
          "types": [
            {
              "type": "Type I",
              "name": {
                "en": "Type I (Supracondylar / Extra-articular)",
                "th": "Type I (รอยหักเหนือปุ่มข้อ / Supracondylar)"
              },
              "description": {
                "en": "Fracture line located in the distal femoral metaphysis ABOVE the condyles\nSpares the knee articular surface and trochlear groove completely\nDistal fragment is pulled into apex-posterior (recurvatum) angulation by the gastrocnemius muscle\nIntact condylar block facilitates stable fixation with retrograde nail or locking plate",
                "th": "รอยหักอยู่บริเวณกระดูกส่วน Metaphysis เหนือปุ่มข้อเข่า (Supracondylar)\nไม่พาดผ่านเข้าผิวข้อเข่าหรือร่อง Trochlear groove\nชิ้นกระดูกส่วนปลายถูกแรงดึงของกล้ามเนื้อ Gastrocnemius ดึงให้กระดกพับไปด้านหลัง (Apex posterior)\nปุ่มกระดูกข้อเข่ายังคงเป็นก้อนสมบูรณ์ ทำให้ยึดตรึงได้มั่นคงด้วย Retrograde Nail หรือแผ่นเหล็ก Locking Plate"
              },
              "moi": {
                "en": "High-energy dashboard injury or direct axial loading in young patients; low-energy ground-level fall in osteoporotic elderly.",
                "th": "แรงกระแทกพลังงานสูงจากอุบัติเหตุจราจรในคนหนุ่มสาว หรือการหกล้มธรรมดาในผู้สูงอายุที่มีภาวะกระดูกพรุน"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Extra-articular metadiaphyseal fracture sparing the joint; retrograde intramedullary nail (rIMN) or lateral distal femoral locking plate (DFLP) restores length and axis while preserving knee kinematics.",
                  "th": "รอยหักเหนือข้อเข่าโดยผิวข้อยังสมบูรณ์ การผ่าตัดใส่แกนดามย้อนศร (Retrograde IMN) หรือดามแผ่นเหล็กล็อคด้านนอก (DFLP) ช่วยคืนความยาวและแนวแกนขาโดยคงการทำงานของข้อเข่าได้ดี"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Non-ambulatory patients or strict surgical contraindications\n• Completely non-displaced fracture in compliant patient with frequent radiographic monitoring",
                    "th": "• ผู้ป่วยที่ไม่สามารถเดินได้อยู่เดิม หรือมีข้อห้ามผ่าตัดขั้นวิกฤต\n• กระดูกหักแบบไม่เคลื่อนตัวในผู้ป่วยที่ให้ความร่วมมือและสามารถติดตามภาพถ่ายเอกซเรย์สม่ำเสมอ"
                  },
                  "method": {
                    "en": "• Long leg hinged knee brace or cylinder cast locked at 10–15° flexion x 8–12 weeks",
                    "th": "• ใส่เฝือกยาวหรือกายอุปกรณ์ข้อเข่าปรับมุมได้ (Hinged Knee Brace) ล็อคมุมงอ 10–15 องศา นาน 8–12 สัปดาห์"
                  },
                  "rehabilitation": {
                    "en": "• Non-weight bearing x 6–8 weeks, then advance to partial WB\n• High risk of severe knee arthrofibrosis",
                    "th": "• ห้ามลงน้ำหนัก 6–8 สัปดาห์แรก แล้วค่อยเริ่มลงน้ำหนักบางส่วน เสี่ยงต่อข้อเข่าติดแข็งรุนแรง"
                  },
                  "pitfalls": {
                    "en": "• Apex-posterior recurvatum deformity due to gastrocnemius pull; severe knee extension block",
                    "th": "• กล้ามเนื้อ Gastrocnemius ดึงกระดูกกระดกไปด้านหลัง (Apex posterior) ทำให้เหยียดเข่าไม่สุดถาวร"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• Displaced supracondylar distal femur fractures (AO/OTA 33-A)\n• Polytrauma, bilateral injuries, or need for rapid mobilization",
                    "th": "• กระดูกต้นขาส่วนปลายหักเหนือข้อแบบเคลื่อนตัว (AO/OTA 33-A)\n• ผู้ป่วยบาดเจ็บหลายระบบ หรือต้องการให้ลุกขยับข้อเข่าได้เร็ว"
                  },
                  "method": {
                    "en": "• Retrograde Intramedullary Nail (rIMN) - Gold standard for metadiaphyseal fractures; biological fixation preserving periosteal vascularity\n• OR Lateral Distal Femoral Locking Plate (DFLP / LISS via MIPO technique)\n• Place triangular bump behind distal thigh to correct hyperextension / apex-posterior sag",
                    "th": "• ผ่าตัดใส่แกนดามย้อนศร (Retrograde IM Nail - rIMN): วิธีหลักสำหรับรอยหักเหนือข้อ ช่วยรักษาเลือดเลี้ยงเยื่อหุ้มกระดูก\n• หรือดามแผ่นเหล็กล็อคด้านนอก (Distal Femur Locking Plate - DFLP) ด้วยเทคนิคแผลเล็ก (MIPO)\n• หนุนหมอนรองใต้ข้อพับเพื่อช่วยดันชิ้นกระดูกส่วนปลายไม่ให้กระดกไปด้านหลัง"
                  },
                  "rehabilitation": {
                    "en": "• Immediate active-assisted knee ROM (CPM or heel slides) on post-op day 1\n• Partial weight bearing (20–30 kg) x 6 weeks, then WBAT upon callus formation",
                    "th": "• เริ่มฝึกขยับงอเหยียดข้อเข่าทันทีในวันแรกหลังผ่าตัด\n• ลงน้ำหนักบางส่วน (20–30 กก.) 6 สัปดาห์แรก แล้วเริ่มลงน้ำหนักเต็มที่เมื่อมีกระดูกงอก"
                  },
                  "pitfalls": {
                    "en": "• Missed recurvatum deformity if gastrocnemius pull is not counteracted with posterior thigh support during nailing",
                    "th": "• หากไม่หนุนดันชิ้นกระดูกส่วนปลายขณะตอกแกนเหล็ก จะทำให้กระดูกติดในท่ากระดกแอ่นไปด้านหลัง"
                  }
                }
              },
              "illustrationId": "/images/distal_femur/type1_supracondylar.png",
              "xrayDescription": {
                "en": "Metaphyseal fracture line proximal to the adductor tubercle with apex posterior angulation and intact articular condyles.",
                "th": "เห็นรอยหักบริเวณเหนือปุ่ม Adductor tubercle โดยมีมุมกระดกแอ่นไปด้านหลัง และผิวข้อเข่ายังคงเรียบสมบูรณ์"
              }
            },
            {
              "type": "Type II",
              "name": {
                "en": "Type II (Unicondylar / Partial Articular)",
                "th": "Type II (รอยหักปุ่มข้อเดียว / Unicondylar)"
              },
              "description": {
                "en": "Partial articular fracture involving only ONE femoral condyle (Lateral or Medial condyle)\nOpposite condyle remains continuously attached to the femoral shaft\n• Sagittal Split (Lateral or Medial condyle)\n• Coronal Shear Fracture (Hoffa Fracture - usually lateral condyle)\nHigh risk of joint step-off, mechanical blockage, and early post-traumatic knee arthritis",
                "th": "รอยหักเข้าข้อต่อเพียงปุ่มเดียว (ปุ่มด้านนอก Lateral หรือปุ่มด้านใน Medial Condyle)\nปุ่มข้ออีกฝั่งหนึ่งยังคงเชื่อมต่อเป็นเนื้อเดียวกับแกนกระดูกต้นขาหลัก\n• รอยหักแนว Sagittal (Lateral หรือ Medial condyle)\n• รอยหักเฉือนแนว Coronal (Hoffa Fracture - พบบ่อยที่ปุ่มนอก)\nเสี่ยงสูงต่อผิวข้อสะดุด ข้อเข่าติดขัด และข้อเข่าเสื่อมรุนแรง"
              },
              "moi": {
                "en": "Axial load combined with varus/valgus stress and knee flexion (Hoffa coronal shear occurs with knee flexed >90°).",
                "th": "แรงกดตามแนวดิ่งร่วมกับแรงบิดเข้าในหรือออกนอกขณะงอเข่า (รอยหัก Hoffa เกิดขณะงอเข่า >90 องศา)"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Partial articular fracture with joint step-off; mandatory anatomical reduction and rigid interfragmentary lag screws (with headless compression screws for coronal Hoffa fragments) to prevent post-traumatic osteoarthritis.",
                  "th": "รอยหักเข้าข้อต่อปุ่มเดียวมีผิวข้อสะดุด ต้องผ่าตัดจัดผิวข้อให้เรียบสนิทแบบ Anatomical และยึดด้วย Lag screws (หรือ Headless Screws หัวจมสำหรับรอยหัก Hoffa) เพื่อป้องกันข้อเข่าเสื่อม"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Truly non-displaced (<1 mm step-off) unicondylar fractures in medically compromised patients",
                    "th": "• กระดูกหักไม่เคลื่อนตัว (ผิวข้อสะดุด < 1 มม.) ในผู้ป่วยที่มีความเสี่ยงผ่าตัดสูง"
                  },
                  "method": {
                    "en": "• Hinged knee brace locked in extension x 6–8 weeks with strict NWB",
                    "th": "• ใส่กายอุปกรณ์ล็อคข้อเข่าในท่าเหยียดตรง 6–8 สัปดาห์ พร้อมห้ามลงน้ำหนักเด็ดขาด"
                  },
                  "rehabilitation": {
                    "en": "• NWB x 6–8 weeks with serial CT/radiographs",
                    "th": "• ห้ามลงน้ำหนัก 6–8 สัปดาห์ ติดตามภาพเอกซเรย์บ่อยๆ"
                  },
                  "pitfalls": {
                    "en": "• Secondary displacement into knee joint, angular deformity (valgus/varus), and rapid articular wear",
                    "th": "• กระดูกเคลื่อนหลุดเข้าข้อ ข้อเข่าเอียงโก่ง และผิวข้อสึกกร่อนรวดเร็ว"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All displaced unicondylar fractures (AO/OTA 33-B) with >1–2 mm articular step-off\n• Coronal shear Hoffa fractures (lateral/medial condyle)",
                    "th": "• กระดูกหักเข้าข้อปุ่มเดียวแบบเคลื่อนตัว (AO/OTA 33-B) ที่มีผิวข้อสะดุด > 1–2 มม.\n• รอยหักเฉือนแนว Coronal (Hoffa Fracture)"
                  },
                  "method": {
                    "en": "• Sagittal Condylar: Anatomical open reduction and 6.5/7.3 mm cannulated cancellous lag screws with washers ± lateral/medial buttress plate\n• Coronal Shear (Hoffa): Fine-cut 3D CT scan planning; AP or PA directed 3.0/3.5/4.0 mm headless compression screws buried beneath articular cartilage",
                    "th": "• รอยหักแนว Sagittal: ผ่าตัดจัดผิวข้อให้เรียบสนิท ยึดด้วย Cancellous Lag Screws 6.5/7.3 มม. ร่วมกับแหวนรอง ± แผ่นเหล็ก Buttress Plate\n• รอยหักแนว Coronal (Hoffa): วางแผนด้วย 3D CT scan; ยึดด้วย Headless Compression Screws ขนาด 3.0/3.5/4.0 มม. หัวจมใต้ผิวข้อในทิศทางหน้าไปหลังหรือหลังไปหน้า"
                  },
                  "rehabilitation": {
                    "en": "• Early continuous passive motion (CPM) 0–90° on day 1–2 to prevent joint stiffness\n• Strict non-weight bearing (NWB) x 6–8 weeks, advance to PWB then full WB at 10–12 weeks",
                    "th": "• เริ่มบริหารขยับข้อเข่า (CPM 0–90 องศา) ในวันที่ 1–2 หลังผ่าตัดเพื่อป้องกันข้อติด\n• ห้ามลงน้ำหนัก (NWB) 6–8 สัปดาห์แรก แล้วเริ่มลงน้ำหนักบางส่วน และลงเต็มที่เมื่อครบ 10–12 สัปดาห์"
                  },
                  "pitfalls": {
                    "en": "• Overlooking coronal Hoffa fragment on plain AP view (mandatory 3D CT scan)\n• Hardware prominence on articular cartilage",
                    "th": "• ตรวจพลาดรอยหัก Hoffa ในภาพเอกซเรย์ธรรมดา (จำเป็นต้องทำ 3D CT scan เสมอ)\n• หัวสกรูโผล่เกินผิวข้อทำลายกระดูกอ่อน"
                  }
                }
              },
              "illustrationId": "/images/distal_femur/type2_unicondylar.png",
              "xrayDescription": {
                "en": "Articular fracture line isolating either the medial or lateral condyle. Lateral view shows coronal Hoffa fracture line behind Blumensaat's line.",
                "th": "เห็นรอยหักแยกปุ่มข้อด้านในหรือด้านนอกอย่างชัดเจน ภาพด้านข้างเห็นแนวกระดูก Hoffa หักเฉือนด้านหลัง"
              }
            },
            {
              "type": "Type III",
              "name": {
                "en": "Type III (Bicondylar / Complete Articular)",
                "th": "Type III (รอยหักสองปุ่มเข้าข้อสมบูรณ์ / Bicondylar)"
              },
              "description": {
                "en": "Complete articular disruption with intercondylar T- or Y-split\nBoth condyles are fractured and completely detached from the femoral shaft\nVariable metaphyseal comminution and bone loss\nHigh risk of popliteal artery traction injury, limb shortening, stiffness, and severe post-traumatic arthritis",
                "th": "รอยหักเข้าข้อต่อสมบูรณ์แตกแยกสองปุ่มเป็นรูปตัว T หรือ Y (Intercondylar split)\nปุ่มข้อเข่าทั้งสองฝั่งหลุดแยกขาดจากแกนกระดูกต้นขาหลักทั้งหมด\nมักมีกระดูกส่วน Metaphysis แตกละเอียดร่วมด้วย\nเสี่ยงต่อการบาดเจ็บของเส้นเลือด Popliteal artery ขาสั้นลง ข้อเข่าติดแข็ง และข้อเสื่อมรุนแรง"
              },
              "moi": {
                "en": "High-energy violent axial compression (dashboard impact in motor vehicle collision, fall from significant height).",
                "th": "แรงกระแทกตามแนวดิ่งพลังงานสูงอย่างรุนแรง (เข่ากระแทกคอนโซลหน้ารถ, ตกจากที่สูง)"
              },
              "treatment": {
                "decisionPrinciple": {
                  "en": "Intercondylar split with complete metadiaphyseal dissociation; convert condyles into a solid block with lag screws, then bridge metaphyseal comminution with a lateral locking plate (DFLP) ± medial buttress or primary Distal Femoral Replacement (DFR) in elderly osteoporotic bone.",
                  "th": "รอยหักเข้าข้อสองปุ่มหลุดจากแกนกระดูก ต้องจัดผิวข้อเข่าให้เรียบแล้วยึดเป็นก้อนเดียวด้วย Lag screws จากนั้นดามแผ่นเหล็กล็อคข้ามรอยแตกละเอียด (DFLP) ± เสริมแผ่นดามด้านใน หรือผ่าตัดใส่ข้อเข่าเทียมส่วนล่าง (DFR) ในผู้สูงอายุกระดูกพรุนแตกละเอียด"
                },
                "preferred": "operative",
                "conservative": {
                  "indication": {
                    "en": "• Strictly CONTRAINDICATED in functional patients (Results in nonunion, flail limb, and intractable arthritis)",
                    "th": "• ห้ามใช้วิธีนี้ในผู้ป่วยทั่วไปเด็ดขาด (ทำให้กระดูกไม่ติด ขาพิการย้วย และข้อเสื่อมรุนแรง)"
                  },
                  "method": {
                    "en": "• Not indicated",
                    "th": "• ไม่แนะนำ"
                  },
                  "rehabilitation": {
                    "en": "• N/A",
                    "th": "• ไม่ระบุ"
                  },
                  "pitfalls": {
                    "en": "• Permanent wheelchair/bedbound status, massive limb shortening, and nonunion",
                    "th": "• ต้องนั่งรถเข็น/ติดเตียงถาวร ขาสั้นลงมาก และกระดูกไม่ติด"
                  }
                },
                "operative": {
                  "indication": {
                    "en": "• All complete articular bicondylar distal femur fractures (AO/OTA 33-C)\n• Segmental / intra-articular comminution",
                    "th": "• กระดูกต้นขาส่วนปลายหักเข้าข้อสองปุ่มสมบูรณ์ (AO/OTA 33-C) ทุกราย\n• กระดูกแตกละเอียดในข้อต่อ"
                  },
                  "method": {
                    "en": "• 1) Reconstruct Articular Block: Open anatomic reduction of intercondylar split with 3.5/4.5/6.5 mm lag screws outside the planned plate holes\n• 2) Metaphyseal Bridging: Lateral Distal Femoral Locking Plate (DFLP / LISS) spanning the zone of comminution\n• 3) Dual Plating: Add medial buttress plate if medial column is comminuted or bone loss is present\n• 4) Distal Femoral Replacement (DFR): Primary hinged mega-prosthesis in elderly patients with shattered osteoporotic bone for immediate WB\n• Damage Control: Joint-spanning knee external fixator for open fractures or severe soft tissue swelling",
                    "th": "• 1) จัดผิวข้อ: จัดต่อปุ่มข้อเข่าสองฝั่งให้เรียบสนิท ยึดด้วย Lag screws ให้เป็นก้อนเดียว\n• 2) ดามสะพานข้าม: ดามด้วยแผ่นเหล็กล็อคด้านนอก (DFLP / LISS) พาดข้ามบริเวณแตกละเอียด\n• 3) ดามสองฝั่ง (Dual Plating): เสริมแผ่นเหล็กดามด้านใน (Medial plate) หากผนังด้านในแตกละเอียด\n• 4) ผ่าตัดใส่ข้อเข่าเทียมส่วนล่าง (DFR): ในผู้สูงอายุกระดูกพรุนแตกป่น เพื่อให้ลุกเดินลงน้ำหนักได้ทันที\n• Damage Control: ใส่ External Fixator ข้ามข้อเข่าชั่วคราวในแผลเปิดรุนแรง"
                  },
                  "rehabilitation": {
                    "en": "• Immediate active knee ROM (0–90°) from day 1\n• Strict non-weight bearing x 8–10 weeks (for ORIF) or immediate WBAT (for Distal Femoral Replacement)\n• Advance to full WB upon solid radiographic bridging (12–16 weeks)",
                    "th": "• เริ่มฝึกงอเหยียดข้อเข่า (0–90 องศา) ทันทีตั้งแต่วันแรก\n• ห้ามลงน้ำหนัก 8–10 สัปดาห์แรก (กรณีผ่าตัดดามเหล็ก) หรือเริ่มเดินลงน้ำหนักได้ทันที (กรณีผ่าตัดเปลี่ยนข้อเทียม DFR)\n• ลงน้ำหนักเต็มที่เมื่อกระดูกเชื่อมติดแน่น (12–16 สัปดาห์)"
                  },
                  "pitfalls": {
                    "en": "• Fixation failure from using lateral-only plate in medial comminution without medial column support (varus collapse)\n• Intra-articular screw penetration into notch or joint",
                    "th": "• เหล็กดามหักหรือกระดูกยุบตัวเอียงโก่งหากไม่เสริมแผ่นดามด้านในเมื่อมีกระดูกแตกละเอียดด้านใน\n• สกรูทิ่มทะลุเข้าผิวข้อเข่า"
                  }
                }
              },
              "illustrationId": "/images/distal_femur/type3_bicondylar.png",
              "xrayDescription": {
                "en": "Intercondylar notch split separating medial and lateral condyles (T- or Y-pattern) with complete supracondylar dissociation from the femoral shaft.",
                "th": "เห็นรอยแยก Intercondylar split ผ่ากลางแยกปุ่มข้อด้านในและด้านนอกเป็นรูปตัว T หรือ Y หลุดออกจากแกนกระดูกต้นขา"
              }
            }
          ]
        }
      ]
    }
  ]
};
