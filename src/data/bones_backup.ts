import type { BoneData } from "../types";

export const bonesData: BoneData[] = [
  {
    id: "clavicle",
    name: { en: "Clavicle", th: "กระดูกไหปลาร้า" },
    description: { en: "Collarbone", th: "กระดูกไหปลาร้าเชื่อมระหว่างกระดูกหน้าอกและกระดูกสะบัก" },
    pediatric: false,
    regions: [
      {
        id: "ac-joint",
        name: { en: "AC Joint", th: "ข้อต่อ AC Joint" },
        classifications: [
          {
            system: "Rockwood",
            fullName: { en: "Rockwood Classification", th: "ระบบ Rockwood Classification" },
            description: { en: "Rockwood Classification for AC Joint Injuries", th: "Rockwood Classification สำหรับการบาดเจ็บข้อต่อ AC" },
            investigations: [
              {
                name: "Zanca View",
                details: { en: "AP view with 10-15° cephalic tilt. Best for visualizing AC joint without spine overlap.", th: "ถ่าย AP โดยเอียงหลอดรังสีชี้ขึ้น 10-15 องศา เป็นท่าที่ดีที่สุดในการดูข้อ AC โดยไม่มีกระดูกสันหลังบัง" }
              },
              {
                name: "Axillary View",
                details: { en: "Essential for evaluating anterior or posterior displacement (e.g., Type IV).", th: "ท่าสำคัญในการดูว่าไหปลาร้าเคลื่อนไปด้านหน้าหรือหลัง (ใช้ประเมิน Type IV)" }
              },
              {
                name: "Bilateral AP / Stress View",
                details: { en: "May be done with or without weights to evaluate subtle CC distance widening.", th: "อาจให้ผู้ป่วยถือน้ำหนักที่แขน เพื่อดูว่าช่องว่าง CC กว้างขึ้นหรือไม่ (ใช้เทียบสองข้าง)" }
              }
            ],
            types: [
              {
                type: "Type I",
                name: { en: "Type I", th: "Type I" },
                description: { en: "Sprain of AC ligament\nIntact CC ligaments", th: "เอ็น AC บาดเจ็บเล็กน้อย\nเอ็น CC ปกติ" },
                moi: { en: "Direct blow to the point of the shoulder", th: "ล้มกระแทกไหล่โดยตรง" },
                treatment: {
                  conservative: { en: "Sling for 1-2 weeks, early ROM", th: "ใส่สายคล้องแขน 1-2 สัปดาห์ และเริ่มขยับข้อ" },
                  operative: { en: "None", th: "ไม่ต้องผ่าตัด" }
                },
                illustrationId: "ac-type1",
                xrayDescription: { en: "Normal radiograph", th: "ภาพถ่ายรังสีปกติ ไม่มีการเคลื่อนของข้อ" }
              },
              {
                type: "Type II",
                name: { en: "Type II", th: "Type II" },
                description: { en: "Torn AC ligament\nSprained CC ligaments", th: "เอ็น AC ขาด\nเอ็น CC บาดเจ็บเล็กน้อย" },
                moi: { en: "Direct blow to the point of the shoulder", th: "ล้มกระแทกไหล่โดยตรง" },
                treatment: {
                  conservative: { en: "Sling for 1-2 weeks, early ROM", th: "ใส่สายคล้องแขน 1-2 สัปดาห์ และเริ่มขยับข้อ" },
                  operative: { en: "Rarely needed", th: "แทบไม่ต้องผ่าตัด ยกเว้นในนักกีฬาที่ต้องใช้งานหนัก" }
                },
                illustrationId: "ac-type2",
                xrayDescription: { en: "Widened AC joint, clavicle slightly elevated but <25%", th: "ช่องข้อ AC กว้างขึ้น กระดูกไหปลาร้ายกขึ้นเล็กน้อย (<25%)" }
              },
              {
                type: "Type III",
                name: { en: "Type III", th: "Type III" },
                description: { en: "Torn AC and CC ligaments\n>25% to 100% displacement", th: "เอ็น AC และ CC ขาดทั้งหมด\nกระดูกยกขึ้น >25% ถึง 100%" },
                moi: { en: "Direct blow to the point of the shoulder", th: "ล้มกระแทกไหล่โดยตรงรุนแรง" },
                treatment: {
                  conservative: { en: "Sling for 3-4 weeks. Trial of non-operative management for most patients.", th: "ใส่สายคล้องแขน 3-4 สัปดาห์ แนะนำให้รักษาแบบไม่ผ่าตัดเป็นทางเลือกแรกในผู้ป่วยส่วนใหญ่" },
                  operative: { en: "Consider in high-level athletes or heavy laborers", th: "พิจารณาผ่าตัดในนักกีฬาอาชีพ หรือผู้ที่ต้องใช้แรงงานหนัก" }
                },
                illustrationId: "ac-type3",
                xrayDescription: { en: "Clavicle elevated 25-100% relative to acromion", th: "กระดูกไหปลาร้ายกขึ้น 25-100% เมื่อเทียบกับ Acromion" }
              },
              {
                type: "Type IV",
                name: { en: "Type IV", th: "Type IV" },
                description: { en: "Posterior displacement of distal clavicle\nDisplaced into trapezius", th: "กระดูกไหปลาร้าส่วนปลายเคลื่อนไปด้านหลัง\nทะลุกล้ามเนื้อ Trapezius" },
                moi: { en: "Posteriorly directed force", th: "แรงกระแทกจากด้านหน้าไปหลัง" },
                treatment: {
                  conservative: { en: "Not recommended", th: "ไม่แนะนำ" },
                  operative: { en: "Surgical reconstruction (e.g., CC ligament reconstruction/fixation)", th: "ผ่าตัดยึดตรึงข้อและซ่อมแซม/สร้างเอ็น CC ใหม่" }
                },
                illustrationId: "ac-type4",
                xrayDescription: { en: "Axillary lateral view shows posterior displacement of clavicle", th: "ต้องดูภาพรังสีท่า Axillary lateral จะเห็นไหปลาร้าเคลื่อนไปด้านหลัง" }
              },
              {
                type: "Type V",
                name: { en: "Type V", th: "Type V" },
                description: { en: "Superior displacement >100% (often 100-300%)\nDisruption of deltotrapezial fascia", th: "กระดูกไหปลาร้ายกสูงขึ้นมาก (>100% ถึง 300%)\nผังผืด Deltotrapezial ฉีกขาด" },
                moi: { en: "Severe downward force on acromion", th: "แรงกระแทกกดไหล่ลงอย่างรุนแรง" },
                treatment: {
                  conservative: { en: "Not recommended", th: "ไม่แนะนำ" },
                  operative: { en: "Surgical reconstruction", th: "ผ่าตัดจัดกระดูกและซ่อมแซมเอ็น" }
                },
                illustrationId: "ac-type5",
                xrayDescription: { en: "Clavicle elevated >100% relative to acromion", th: "กระดูกไหปลาร้ายกสูงขึ้นมากกว่า 100% หรือมีระยะห่าง CC กว้างมาก" }
              },
              {
                type: "Type VI",
                name: { en: "Type VI", th: "Type VI" },
                description: { en: "Inferior displacement of clavicle\nUnder acromion or coracoid", th: "กระดูกไหปลาร้าเคลื่อนลงล่าง\nไปอยู่ใต้ Acromion หรือ Coracoid" },
                moi: { en: "Severe hyperabduction and external rotation", th: "การบาดเจ็บรุนแรงแบบแขนกางและบิดออก" },
                treatment: {
                  conservative: { en: "Not recommended", th: "ไม่แนะนำ" },
                  operative: { en: "Surgical reconstruction", th: "ผ่าตัดจัดกระดูกและซ่อมแซมเอ็น" }
                },
                illustrationId: "ac-type6",
                xrayDescription: { en: "Clavicle displaced inferiorly", th: "กระดูกไหปลาร้าเคลื่อนลงล่างไปอยู่ใต้ Acromion หรือ Coracoid" }
              }
            ]
          },
          {
            system: "Allman",
            fullName: { en: "Allman Classification", th: "ระบบ Allman Classification" },
            description: { en: "Allman Classification for Clavicle Fractures", th: "Allman Classification สำหรับกระดูกไหปลาร้าหัก" },
            types: []
          }
        ]
      }
    ]
  },

  {
    id: "forearm",
    name: { en: "Radius & Ulna", th: "กระดูกปลายแขน" },
    description: { en: "Forearm bones", th: "กระดูกปลายแขน (Radius และ Ulna)" },
    pediatric: false,
    regions: [
      {
        id: "olecranon",
        name: { en: "Olecranon", th: "ข้อศอก (Olecranon)" },
        classifications: []
      },
      {
        id: "shaft",
        name: { en: "Forearm Shaft", th: "แกนปลายแขน (Forearm Shaft)" },
        classifications: [
          {
            system: "Eponyms",
            fullName: { en: "Eponymous Fractures", th: "รูปแบบกระดูกหักเฉพาะชื่อ (Eponyms)" },
            description: { en: "Classic fracture-dislocations of the forearm shaft", th: "กระดูกหักร่วมกับข้อเคลื่อนแบบเฉพาะของกระดูกปลายแขน" },
            types: [
              {
                type: "Monteggia",
                name: { en: "Monteggia Fracture", th: "Monteggia Fracture" },
                description: { en: "Proximal 1/3 ulna fracture with radial head dislocation", th: "กระดูก Ulna หักส่วนต้น (Proximal 1/3) ร่วมกับข้อศอกส่วนหัว Radius เคลื่อนหลุด" },
                treatment: {
                  conservative: { en: "Rarely indicated (children only)", th: "มักใช้ในเด็กเท่านั้น ผู้ใหญ่มักไม่ค่อยได้ผล" },
                  operative: { en: "ORIF of ulna, reduce radial head", th: "ผ่าตัดยึดกระดูก Ulna ด้วยแผ่นเหล็ก และจัดกระดูก Radius เข้าที่" }
                },
                illustrationId: "forearm-monteggia",
                xrayDescription: { en: "Ulna shaft fracture, radial head not aligned with capitellum", th: "กระดูก Ulna หัก และแนวของ radial head ไม่ชี้ไปที่ capitellum" }
              },
              {
                type: "Galeazzi",
                name: { en: "Galeazzi Fracture", th: "Galeazzi Fracture" },
                description: { en: "Distal 1/3 radius fracture with DRUJ dislocation", th: "กระดูก Radius หักส่วนปลาย (Distal 1/3) ร่วมกับข้อข้อมือ DRUJ เคลื่อนหลุด" },
                treatment: {
                  conservative: { en: "Not recommended in adults", th: "ไม่แนะนำให้รักษาแบบไม่ผ่าตัดในผู้ใหญ่" },
                  operative: { en: "ORIF of radius, assess DRUJ stability", th: "ผ่าตัดยึดกระดูก Radius ด้วยแผ่นเหล็ก และประเมินความมั่นคงของข้อ DRUJ" }
                },
                illustrationId: "forearm-galeazzi",
                xrayDescription: { en: "Distal radius fracture, widened DRUJ or ulnar head dorsally displaced", th: "กระดูก Radius หักส่วนปลาย และข้อ DRUJ กว้างขึ้นหรือกระดูก Ulna หลุด" }
              }
            ]
          }
        ]
      },
      {
        id: "distal",
        name: { en: "Distal End Radius", th: "ปลายกระดูกเรเดียส (Distal End Radius)" },
        classifications: [
          {
            system: "Eponyms",
            fullName: { en: "Eponymous Fractures", th: "รูปแบบกระดูกหักเฉพาะชื่อ (Eponyms)" },
            description: { en: "Classic distal radius fractures", th: "กระดูกหักบริเวณปลายแขนแบบเฉพาะ" },
            types: [
              {
                type: "Colles",
                name: { en: "Colles Fracture", th: "Colles Fracture" },
                description: { en: "Extra-articular distal radius fracture with dorsal displacement", th: "กระดูก Radius หักส่วนปลายแบบไม่เข้าข้อ และมีการเคลื่อนไปทางด้านหลังมือ (Dorsal)" },
                treatment: {
                  conservative: { en: "Closed reduction and cast (if stable)", th: "ดึงจัดกระดูกเข้าที่และใส่เฝือก (ถ้ากระดูกมั่นคง)" },
                  operative: { en: "ORIF with volar locking plate", th: "ผ่าตัดยึดกระดูกด้วยแผ่นเหล็กดามด้านหน้า (Volar plate)" }
                },
                illustrationId: "distal-radius-colles",
                xrayDescription: { en: "Dinner fork deformity, dorsal angulation and impaction", th: "กระดูกหักและทำมุมไปทางด้านหลังมือคล้ายส้อม (Dinner fork deformity)" }
              },
              {
                type: "Smith",
                name: { en: "Smith Fracture", th: "Smith Fracture" },
                description: { en: "Extra-articular distal radius fracture with volar displacement", th: "กระดูก Radius หักส่วนปลายแบบไม่เข้าข้อ และมีการเคลื่อนไปทางด้านหน้ามือ (Volar)" },
                treatment: {
                  conservative: { en: "Closed reduction and cast (difficult to hold)", th: "ดึงจัดกระดูกเข้าที่และใส่เฝือก (มักหลุดง่าย)" },
                  operative: { en: "ORIF with volar plate", th: "ผ่าตัดยึดกระดูกด้วยแผ่นเหล็กดามด้านหน้า (Volar plate)" }
                },
                illustrationId: "distal-radius-smith",
                xrayDescription: { en: "Garden spade deformity, volar angulation", th: "กระดูกหักและทำมุมไปทางด้านหน้าฝ่ามือ (Garden spade deformity)" }
              }
            ]
          },
          {
            system: "Fernandez",
            fullName: { en: "Fernandez Classification", th: "ระบบ Fernandez Classification" },
            description: {
              en: "Mechanistic classification of distal radius fractures based on the mechanism of injury, guiding treatment decisions.",
              th: "ระบบจำแนกกระดูกปลายแขนหักตามกลไกการบาดเจ็บ (Mechanism of Injury) ช่วยในการวางแผนการรักษาได้อย่างเหมาะสม"
            },
            types: [
              {
                type: "I",
                name: { en: "Bending Fracture", th: "กระดูกหักจากแรงดัด (Bending Fracture)" },
                description: {
                  en: "Extra-articular fracture from bending force\nDorsal or volar cortex failure\nIncludes Colles' and Smith's fractures",
                  th: "กระดูกหักนอกข้อจากแรงดัด (Bending)\nผิวกระดูกด้าน Dorsal หรือ Volar แตก\nครอบคลุม Colles' และ Smith's fracture"
                },
                moi: {
                  en: "Fall on outstretched hand (FOOSH) with bending load.",
                  th: "ล้มเท้าต่อมือ (FOOSH) โดยแรงดัดพาดผ่านกระดูก"
                },
                treatment: {
                  conservative: {
                    en: "Closed reduction and cast immobilization if stable.",
                    th: "ดึงจัดกระดูกและใส่เฝือกหากโครงสร้างมั่นคงเพียงพอ"
                  },
                  operative: {
                    en: "ORIF with volar locking plate if unstable or redisplaced.",
                    th: "ผ่าตัดยึดกระดูกด้วยแผ่นเหล็กล็อคด้านหน้า (Volar Locking Plate) หากไม่มั่นคง"
                  }
                },
                illustrationId: "/images/fernan1.png",
                xrayDescription: {
                  en: "Extra-articular fracture, dorsal angulation (Colles') or volar angulation (Smith's), no articular involvement.",
                  th: "รอยหักนอกข้อ ทำมุมไปด้านหลัง (Colles') หรือด้านหน้า (Smith') โดยไม่มีรอยหักเข้าข้อ"
                }
              },
              {
                type: "II",
                name: { en: "Shearing Fracture", th: "กระดูกหักจากแรงเฉือน (Shearing Fracture)" },
                description: {
                  en: "Intra-articular fracture from shearing force\nVolar or dorsal lip displaced\nIncludes Barton's and Chauffeur's fractures",
                  th: "กระดูกหักเข้าข้อจากแรงเฉือน (Shearing)\nขอบข้อด้าน Volar หรือ Dorsal เคลื่อน\nครอบคลุม Barton's และ Chauffeur's fracture"
                },
                moi: {
                  en: "Shearing force applied to the articular surface, often high-energy.",
                  th: "แรงเฉือนกระทำต่อผิวข้อโดยตรง มักเป็นอุบัติเหตุพลังงานสูง"
                },
                treatment: {
                  conservative: {
                    en: "Rarely indicated due to articular involvement and instability.",
                    th: "แทบไม่แนะนำเพราะมีรอยหักเข้าข้อและมักไม่มั่นคง"
                  },
                  operative: {
                    en: "ORIF to restore articular congruity; buttress plate for volar rim.",
                    th: "ผ่าตัดจัดและยึดกระดูกเพื่อฟื้นฟูผิวข้อ ใช้แผ่นค้ำยัน (Buttress Plate) สำหรับขอบด้าน Volar"
                  }
                },
                illustrationId: "/images/fernan2.png",
                xrayDescription: {
                  en: "Intra-articular fracture of the volar or dorsal rim, subluxation of carpus may accompany.",
                  th: "รอยหักเข้าข้อบริเวณขอบ Volar หรือ Dorsal อาจพบข้อมือเคลื่อนร่วมด้วย"
                }
              },
              {
                type: "III",
                name: { en: "Compression Fracture", th: "กระดูกหักจากแรงกด (Compression Fracture)" },
                description: {
                  en: "Intra-articular fracture from axial compression\nDie-punch or split of articular surface\nJoint depression present",
                  th: "กระดูกหักเข้าข้อจากแรงกดในแนวแกน (Axial Compression)\nผิวข้อยุบตัวลง (Die-Punch) หรือแตกแยก\nมีการยุบของผิวข้อ"
                },
                moi: {
                  en: "Axial load transmitted through the carpus onto the articular surface.",
                  th: "แรงกดตามแนวแกนจากข้อมือส่งตรงลงบนผิวข้อปลายกระดูก Radius"
                },
                treatment: {
                  conservative: {
                    en: "Not recommended; articular step-off requires reduction.",
                    th: "ไม่แนะนำเนื่องจากผิวข้อยุบ ต้องได้รับการจัดผิวข้อกลับเข้าที่"
                  },
                  operative: {
                    en: "ORIF; bone graft or substitute may be needed to fill subchondral void.",
                    th: "ผ่าตัดยึดกระดูก อาจต้องใช้กระดูกเสริม (Bone Graft) เพื่ออุดช่องใต้ผิวกระดูกอ่อน"
                  }
                },
                illustrationId: "/images/fernan3.png",
                xrayDescription: {
                  en: "Articular depression (die-punch pattern), radiolucent defect under the articular surface.",
                  th: "ผิวข้อยุบลงแบบ Die-Punch บริเวณใต้ผิวกระดูกอ่อนมีช่องโหว่ที่เห็นในภาพรังสี"
                }
              },
              {
                type: "IV",
                name: { en: "Avulsion Fracture", th: "กระดูกหักแบบดึงรั้ง (Avulsion Fracture)" },
                description: {
                  en: "Fracture of ligament attachment sites\nRadial or ulnar styloid avulsion\nCarpal instability may result",
                  th: "กระดูกหักบริเวณจุดยึดเอ็น (Ligament Attachment)\nรวมถึง Radial styloid หรือ Ulnar styloid avulsion\nอาจเกิดความไม่มั่นคงของข้อมือตามมา"
                },
                moi: {
                  en: "Tensile force through ligamentous attachments during wrist sprain or dislocation.",
                  th: "แรงดึงรั้งผ่านเอ็นบริเวณจุดยึด เกิดขณะข้อมือแพลง หรือเคลื่อนหลุด"
                },
                treatment: {
                  conservative: {
                    en: "Cast immobilization for non-displaced avulsion; assess carpal stability.",
                    th: "ใส่เฝือกในกรณีที่กระดูกไม่เคลื่อน และประเมินความมั่นคงของข้อมือ"
                  },
                  operative: {
                    en: "ORIF of styloid if displaced or carpal instability is present; ligament repair.",
                    th: "ผ่าตัดยึดกระดูก Styloid หากเคลื่อนหรือข้อมือไม่มั่นคง พร้อมซ่อมแซมเอ็น"
                  }
                },
                illustrationId: "/images/fernan4.png",
                xrayDescription: {
                  en: "Small avulsion fragment at radial or ulnar styloid; assess for carpal malalignment.",
                  th: "ชิ้นกระดูกเล็กหลุดออกบริเวณ Radial หรือ Ulnar styloid ควรประเมินแนวของกระดูกข้อมือ"
                }
              },
              {
                type: "V",
                name: { en: "Combined / High-Energy Fracture", th: "กระดูกหักรูปแบบผสม / พลังงานสูง" },
                description: {
                  en: "Combination of multiple fracture patterns\nHigh-energy comminuted fracture\nMay involve radiocarpal joint and DRUJ",
                  th: "กระดูกหักจากกลไกหลายรูปแบบรวมกัน\nกระดูกแตกละเอียด (Comminuted) จากพลังงานสูง\nอาจมีรอยหักเข้าข้อ Radiocarpal และข้อ DRUJ"
                },
                moi: {
                  en: "High-energy trauma such as motor vehicle accident or fall from height.",
                  th: "อุบัติเหตุพลังงานสูง เช่น อุบัติเหตุจราจร หรือตกจากที่สูง"
                },
                treatment: {
                  conservative: {
                    en: "Not recommended for high-energy injuries.",
                    th: "ไม่แนะนำสำหรับกระดูกหักจากพลังงานสูง"
                  },
                  operative: {
                    en: "Complex ORIF, external fixation, or combined fixation; staged approach may be needed.",
                    th: "ผ่าตัดซับซ้อน อาจใช้การยึดกระดูกภายนอก (External Fixator) ร่วมกับแผ่นเหล็ก หรือทำเป็นขั้นตอน"
                  }
                },
                illustrationId: "/images/fernan5.png",
                xrayDescription: {
                  en: "Highly comminuted fracture pattern, multiple intra-articular fragments, possible DRUJ disruption.",
                  th: "กระดูกแตกละเอียดหลายชิ้น มีชิ้นส่วนในข้อหลายชิ้น อาจพบข้อ DRUJ แตกหรือเคลื่อนร่วมด้วย"
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "humerus",
    name: { en: "Humerus", th: "กระดูกต้นแขน (Humerus)" },
    description: { en: "Upper arm bone", th: "กระดูกต้นแขน" },
    pediatric: false,
    regions: [
      {
        id: "proximal",
        name: { en: "Proximal Humerus", th: "ส่วนหัวกระดูกต้นแขน (Proximal)" },
        classifications: [
          {
            system: "Neer",
            fullName: { en: "Neer Classification", th: "ระบบ Neer Classification" },
            description: { en: "Classification for proximal humerus fractures based on number of displaced parts (displacement >1cm or >45°)", th: "การจำแนกกระดูกหักบริเวณ proximal humerus ตามจำนวนชิ้นที่เคลื่อน (เคลื่อน >1cm หรือทำมุม >45°)" },
            types: [
              {
                type: "1-Part",
                name: { en: "1-Part Fracture", th: "1-Part Fracture" },
                description: { en: "No displaced parts (all parts <1cm displacement and <45° angulation)", th: "ไม่มีชิ้นส่วนที่เคลื่อน (ทุกชิ้นเคลื่อน <1cm และทำมุม <45°)" },
                treatment: {
                  conservative: { en: "Sling immobilization and early ROM", th: "ใส่สายคล้องแขนและเริ่มขยับข้อตั้งแต่แรก" },
                  operative: { en: "Rarely needed", th: "แทบไม่ต้องผ่าตัด" }
                },
                illustrationId: "humerus-neer-1",
                xrayDescription: { en: "Fracture lines visible but minimal displacement", th: "เห็นรอยหักแต่แทบไม่มีการเคลื่อน" }
              },
              {
                type: "2-Part",
                name: { en: "2-Part Fracture", th: "2-Part Fracture" },
                description: { en: "One part is displaced (e.g., surgical neck, anatomical neck, greater or lesser tuberosity)", th: "มี 1 ชิ้นส่วนที่เคลื่อน (เช่น surgical neck, anatomical neck, greater หรือ lesser tuberosity)" },
                treatment: {
                  conservative: { en: "May be possible for non-displaced or impacted surgical neck", th: "อาจใส่เฝือกหรือสายคล้องแขนได้ในรายที่กระดูกติดแน่นหรือไม่เคลื่อนมาก" },
                  operative: { en: "ORIF (plates, screws) or pinning", th: "ผ่าตัดยึดกระดูกด้วยแผ่นเหล็กหรือลวด" }
                },
                illustrationId: "humerus-neer-2",
                xrayDescription: { en: "One fragment displaced >1cm or >45 degrees", th: "มีหนึ่งชิ้นที่เคลื่อน >1cm หรือ >45 องศา" }
              },
              {
                type: "3-Part",
                name: { en: "3-Part Fracture", th: "3-Part Fracture" },
                description: { en: "Two parts are displaced with respect to the remaining intact parts", th: "มี 2 ชิ้นส่วนที่เคลื่อนออกจากกัน" },
                treatment: {
                  conservative: { en: "Usually not recommended", th: "มักไม่แนะนำให้รักษาแบบไม่ผ่าตัด" },
                  operative: { en: "ORIF or Arthroplasty (in elderly)", th: "ผ่าตัดยึดกระดูก หรือเปลี่ยนข้อเทียม (ในผู้สูงอายุ)" }
                },
                illustrationId: "humerus-neer-3",
                xrayDescription: { en: "Two distinct fragments displaced from the shaft and head", th: "ชิ้นส่วนสองชิ้นแยกจากกันและออกจากส่วน shaft และหัว" }
              },
              {
                type: "4-Part",
                name: { en: "4-Part Fracture", th: "4-Part Fracture" },
                description: { en: "All four parts (head, greater tuberosity, lesser tuberosity, shaft) are displaced", th: "ชิ้นส่วนทั้ง 4 ชิ้นเคลื่อนแยกออกจากกันทั้งหมด" },
                treatment: {
                  conservative: { en: "Usually not recommended", th: "มักไม่แนะนำให้รักษาแบบไม่ผ่าตัด" },
                  operative: { en: "Hemiarthroplasty or Reverse Total Shoulder Arthroplasty", th: "มักต้องผ่าตัดเปลี่ยนข้อไหล่เทียม (Hemiarthroplasty หรือ Reverse TSA)" }
                },
                illustrationId: "humerus-neer-4",
                xrayDescription: { en: "Classic 'four-part' appearance, head is usually displaced and avascular", th: "กระดูกแตกออกเป็นสี่ส่วน หัวกระดูกมักจะหลุดและขาดเลือดไปเลี้ยง" }
              }
            ]
          }
        ]
      },
      {
        id: "shaft",
        name: { en: "Humeral Shaft", th: "ส่วนกลางกระดูกต้นแขน (Shaft)" },
        classifications: []
      },
      {
        id: "distal",
        name: { en: "Distal Humerus", th: "ส่วนปลายกระดูกต้นแขน (Distal)" },
        classifications: []
      }
    ]
  },
  {
    id: "femur",
    name: { en: "Femur", th: "กระดูกต้นขา" },
    description: { en: "Thigh bone", th: "กระดูกต้นขา" },
    pediatric: false,
    regions: [
      {
        id: "proximal",
        name: { en: "Proximal Femur", th: "ส่วนหัวกระดูกต้นขา" },
        classifications: [
          {
            system: "Garden",
            fullName: { en: "Garden Classification", th: "ระบบ Garden Classification" },
            description: { 
              en: "Classification system for femoral neck fractures based on the degree of displacement of the fracture line.", 
              th: "ระบบการจัดประเภทกระดูกคอสะโพกหัก (Femoral Neck Fracture) ตามระดับความรุนแรงของการเคลื่อนและทิศทางของแนวกระดูก" 
            },
            investigations: [
              {
                name: "AP Pelvis View",
                details: { 
                  en: "Anteroposterior view of the pelvis. Essential to compare alignment with the contralateral hip.", 
                  th: "การถ่ายภาพรังสีเชิงกรานจากหน้าไปหลัง ท่าพื้นฐานที่ช่วยเปรียบเทียบแนวรอยโรคกับข้อสะโพกฝั่งปกติ" 
                }
              },
              {
                name: "Cross-table Lateral View",
                details: { 
                  en: "Lateral view of the hip without patient movement. Safest for evaluating posterior tilt or displacement.", 
                  th: "การถ่ายภาพรังสีข้อสะโพกด้านข้างโดยไม่ต้องขยับผู้ป่วย ปลอดภัยที่สุดสำหรับการดูการเคลื่อนหรือเอียงไปด้านหลัง" 
                }
              }
            ],
            types: [
              {
                type: "Type I",
                name: { en: "Incomplete, Valgus Impacted", th: "หักไม่สมบูรณ์ และตอกอัดในแนว Valgus" },
                description: { 
                  en: "Incomplete fracture line\nOften valgus impacted\nFemoral neck trabeculae angled laterally relative to head", 
                  th: "กระดูกหักแบบไม่สมบูรณ์ (Incomplete Fracture)\nมักมีลักษณะตอกอัดเอียงออกทางด้านข้าง (Valgus Impacted)\nโครงสร้างมีความมั่นคงสูงกว่าประเภทอื่น" 
                },
                moi: {
                  en: "Low-energy fall in elderly patients, or high-energy axial load in younger patients.",
                  th: "การล้มกระแทกจากระดับต่ำในผู้สูงอายุ หรือแรงกระแทกตามแนวแกนอย่างรุนแรงในผู้ป่วยอายุน้อย"
                },
                treatment: {
                  conservative: { 
                    en: "Bed rest and limited weight-bearing. Rarely recommended due to high risk of secondary displacement.", 
                    th: "นอนพักเตียงและจำกัดการลงน้ำหนัก แต่มักไม่แนะนำเนื่องจากมีอัตราเสี่ยงที่จะเคลื่อนตัวตามมาสูง" 
                  },
                  operative: { 
                    en: "Internal fixation in situ (typically with 3 cannulated screws) to prevent displacement and promote healing.", 
                    th: "ผ่าตัดยึดตรึงกระดูกภายในโดยไม่มีการดึงจัด (in situ fixation) มักใช้สกรูหัวทะลุ (Cannulated Screws) 3 ตัว เพื่อความมั่นคง" 
                  }
                },
                illustrationId: "/images/garden_1.png",
                xrayDescription: { 
                  en: "Fracture line visible on one cortex only, medial trabeculae show valgus angulation (angle > 180° between femoral shaft and head trabeculae).", 
                  th: "เห็นรอยหักบางส่วนเพียงด้านเดียว เส้นใยกระดูกฝั่ง Medial มีทิศทางเอียงออกนอกมากกว่าปกติ (ทำมุม > 180 องศา)" 
                }
              },
              {
                type: "Type II",
                name: { en: "Complete, Undisplaced", th: "หักสมบูรณ์ แต่ไม่มีการเคลื่อนตัว" },
                description: { 
                  en: "Complete fracture line\nNo displacement of fragments\nNormal trabecular alignment maintained", 
                  th: "กระดูกหักสมบูรณ์ขาดจากกัน (Complete Fracture)\nชิ้นกระดูกยังอยู่ในแนวปกติ ไม่เกิดการเคลื่อนตัว\nทิศทางของแนวเส้นใยกระดูกยังคงตรงกันปกติ" 
                },
                moi: {
                  en: "Low-energy fall directly onto the lateral hip in elderly, or high-energy trauma.",
                  th: "การล้มกระแทกด้านข้างของข้อสะโพกโดยตรงในผู้สูงอายุ หรืออุบัติเหตุรุนแรงในวัยรุ่น"
                },
                treatment: {
                  conservative: { 
                    en: "Not recommended in active patients due to high risk of displacement.", 
                    th: "ไม่แนะนำให้รักษาแบบประคับประคองในผู้ป่วยที่ยังเคลื่อนไหวได้ดี เพราะเสี่ยงต่อการเคลื่อนตัวสูงมาก" 
                  },
                  operative: { 
                    en: "Percutaneous cannulated screw fixation (parallel configuration) to maintain alignment.", 
                    th: "ผ่าตัดยึดกระดูกด้วยสกรูหัวทะลุแบบขนานเพื่อรักษาแนวและป้องกันการเคลื่อนที่ของกระดูก" 
                  }
                },
                illustrationId: "/images/garden_2.png",
                xrayDescription: { 
                  en: "Complete fracture line across femoral neck. Normal trabecular alignment between femoral head and neck.", 
                  th: "รอยหักพาดผ่านคอกระดูกต้นขาทั้งหมด แต่แนวเส้นใยกระดูกของหัวกระดูกสะโพกและคอกระดูกสะโพกยังอยู่ในแนวระนาบปกติ" 
                }
              },
              {
                type: "Type III",
                name: { en: "Complete, Partially Displaced", th: "หักสมบูรณ์ และเคลื่อนตัวบางส่วน" },
                description: { 
                  en: "Complete fracture line\nPartial displacement of fragments\nFemoral head typically tilted in varus and rotated", 
                  th: "กระดูกหักสมบูรณ์ร่วมกับการเคลื่อนตัวบางส่วน\nหัวกระดูกสะโพกเอียงชี้เข้าด้านใน (Varus tilt) และบิดตัว\nแนวเส้นใยกระดูกเยื้องออกจากแนวปกติอย่างชัดเจน" 
                },
                moi: {
                  en: "Traumatic fall, typically with rotational force on a loaded extremity.",
                  th: "การล้มกระแทกรุนแรงร่วมกับมีแรงบิดสะโพกขณะลงน้ำหนัก"
                },
                treatment: {
                  conservative: { 
                    en: "Not indicated.", 
                    th: "ไม่แนะนำสำหรับการรักษาด้วยวิธีนี้" 
                  },
                  operative: { 
                    en: "Closed/Open reduction and internal fixation in younger patients; Hemiarthroplasty or Total Hip Arthroplasty in elderly patients.", 
                    th: "ผ่าตัดจัดกระดูกและยึดตรึงภายในด้วยสกรูหรืออุปกรณ์พิเศษในคนอายุน้อย หรือผ่าตัดเปลี่ยนข้อสะโพกเทียม (Hemi/THA) ในผู้สูงอายุ" 
                  }
                },
                illustrationId: "/images/garden_3.png",
                xrayDescription: { 
                  en: "Partial displacement with varus collapse. Medial trabeculae of head are out of line with shaft trabeculae.", 
                  th: "มีการเคลื่อนตัวบางส่วนและทำมุมงุ้มเข้าด้านใน (Varus) แนวเส้นใยกระดูกของหัวกระดูกสะโพกเยื้องออกนอกแนวของส่วนคอสะโพก" 
                }
              },
              {
                type: "Type IV",
                name: { en: "Complete, Completely Displaced", th: "หักสมบูรณ์ และแยกจากกันสิ้นเชิง" },
                description: { 
                  en: "Complete fracture line\nTotal displacement of fragments\nFemoral head completely detached and returned to neutral acetabular position", 
                  th: "กระดูกหักสมบูรณ์และเคลื่อนแยกออกจากกันโดยสิ้นเชิง\nหัวกระดูกสะโพกหลุดขาดเป็นอิสระและวางตัวกลับเข้าแนวเบ้าปกติ\nชิ้นส่วนคอกระดูกต้นขาเคลื่อนลอยสูงขึ้นและออกด้านข้าง" 
                },
                moi: {
                  en: "Severe direct trauma or high-impact fall.",
                  th: "อุบัติเหตุรุนแรงกระแทกโดยตรง หรือการพลัดตกจากที่สูง"
                },
                treatment: {
                  conservative: { 
                    en: "Not indicated.", 
                    th: "ไม่แนะนำสำหรับการรักษาด้วยวิธีนี้" 
                  },
                  operative: { 
                    en: "Joint replacement (Hemiarthroplasty or Total Hip Arthroplasty) for elderly due to high risk of Avascular Necrosis (AVN). Joint-preserving fixation for young patients.", 
                    th: "ผ่าตัดเปลี่ยนข้อสะโพกเทียมเป็นหลักสำหรับผู้สูงอายุเนื่องจากมีความเสี่ยงสูงที่จะเกิดหัวกระดูกขาดเลือด (AVN) ส่วนในคนหนุ่มสาวจะพยายามจัดกระดูกและยึดตรึงเพื่อรักษาข้อเดิมไว้" 
                  }
                },
                illustrationId: "/images/garden_4.png",
                xrayDescription: { 
                  en: "Complete separation of head and neck. Trabeculae of the head align normally with the pelvis, but neck fragment is displaced upwards/outwards.", 
                  th: "หัวกระดูกและคอกระดูกแยกออกจากกันอย่างสมบูรณ์ เส้นใยกระดูกของหัวกระดูกสะโพกกลับมาขนานกับเบ้าสะโพกปกติ แต่ส่วนคอเคลื่อนลอยสูงขึ้นและออกด้านข้าง" 
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "tibia",
    name: { en: "Tibia & Fibula", th: "กระดูกหน้าแข้ง" },
    description: { en: "Lower leg bones", th: "กระดูกหน้าแข้ง (Tibia และ Fibula)" },
    pediatric: false,
    regions: [
      {
        id: "proximal",
        name: { en: "Proximal Tibia", th: "ส่วนหัวกระดูกหน้าแข้ง" },
        classifications: []
      }
    ]
  },
  {
    id: "pelvis",
    name: { en: "Pelvic Bone", th: "กระดูกเชิงกราน" },
    description: { en: "Pelvis", th: "กระดูกเชิงกราน" },
    pediatric: false,
    regions: [
      {
        id: "pelvic-ring",
        name: { en: "Pelvic Ring", th: "วงกระดูกเชิงกราน" },
        classifications: []
      }
    ]
  },
  {
    id: "patella",
    name: { en: "Patella", th: "กระดูกสะบ้าหัวเข่า" },
    description: { en: "Kneecap", th: "ลูกสะบ้าหัวเข่า" },
    pediatric: false,
    regions: [
      {
        id: "patella",
        name: { en: "Patella", th: "กระดูกสะบ้า" },
        classifications: []
      }
    ]
  },
  {
    id: "head",
    name: { en: "Skull", th: "กะโหลกศีรษะ" },
    description: { en: "Head", th: "กะโหลกศีรษะ" },
    pediatric: false,
    regions: [
      {
        id: "skull",
        name: { en: "Skull", th: "กะโหลก" },
        classifications: []
      }
    ]
  },
  {
    id: "tl-spine",
    name: { en: "T-L Spine", th: "กระดูกสันหลังส่วนอกและเอว" },
    description: { en: "Thoracolumbar Spine", th: "กระดูกสันหลังส่วนอกและเอว" },
    pediatric: false,
    regions: [
      {
        id: "thoracolumbar",
        name: { en: "Thoracolumbar", th: "ส่วนอกและเอว" },
        classifications: []
      }
    ]
  },
  {
    id: "c-spine",
    name: { en: "C-Spine", th: "กระดูกสันหลังส่วนคอ" },
    description: { en: "Cervical Spine", th: "กระดูกสันหลังส่วนคอ" },
    pediatric: false,
    regions: [
      {
        id: "cervical",
        name: { en: "Cervical", th: "ส่วนคอ" },
        classifications: []
      }
    ]
  },
  {
    id: "foot",
    name: { en: "Foot", th: "กระดูกเท้า" },
    description: { en: "Foot bones", th: "กระดูกเท้า" },
    pediatric: false,
    regions: [
      {
        id: "foot",
        name: { en: "Foot", th: "เท้า" },
        classifications: []
      }
    ]
  },
  {
    id: "hand",
    name: { en: "Hand", th: "กระดูกมือ" },
    description: { en: "Hand bones", th: "กระดูกมือ" },
    pediatric: false,
    regions: [
      {
        id: "hand",
        name: { en: "Hand", th: "มือ" },
        classifications: []
      }
    ]
  },
  {
    id: "scapula",
    name: { en: "Scapula", th: "กระดูกสะบัก" },
    description: { en: "Shoulder blade", th: "กระดูกสะบัก" },
    pediatric: false,
    regions: [
      {
        id: "scapula",
        name: { en: "Scapula", th: "กระดูกสะบัก" },
        classifications: []
      }
    ]
  }
];
