---
name: ortho-classification
description: >-
  Generates the UI configuration and data structure for orthopedic fracture classifications,
  strictly mapping them to the two-tab layout (Classifications and Investigation / X-Ray) with consistent styling.
---

# Orthopedic Classification UI Generator & Specification

## Overview
This skill governs the addition, modification, and structure of orthopedic fracture classifications within the application. It enforces a strict visual and data hierarchy in `src/data/bones.ts` and guarantees consistent UI rendering across both main tabs.

---

## CRITICAL RULES (MUST FOLLOW STRICTLY)

### 1. Two-Tab Layout Architecture
Every subregion and classification system MUST support the two main tabs unconditionally:
- **Tab 1: "Classifications"**: Interactive visual guide carousel, type selection, and detailed clinical blocks.
- **Tab 2: "Investigation / X-Ray"**: Comprehensive radiographic views, positioning details, and image placeholders.

### 2. Dual Language Support (Bilingual)
All text fields MUST provide both English (`en`) and Thai (`th`) translations:
`{ en: "English text", th: "ข้อความภาษาไทย" }`

### 3. Bullet Point Formatting (`\n`)
In all type `description` fields, separate individual criteria/bullets with `\n`. The UI component splits strings by `\n` to render clean `<li>` bullet points automatically.

### 4. Dedicated Image Subfolder Convention
DO NOT place image files directly in the root of `public/images/`. Always organize them into dedicated subfolders named after the classification system or region:
- Directory: `public/images/<system_or_region_name>/`
- Example: `/images/fernandez/fernan1.png`, `/images/garden/garden_1.png`, `/images/evans/evans_nondisplaced.png`, `/images/scaphoid/scaphoid_waist.png`, `/images/metacarpal1/metacarpal1_bennett.png`

### 5. Five Required Detail Blocks in Tab 1
When a Type card is selected, the detail section MUST render all 5 of the following blocks:
1. **Type Name**: E.g., "Type I" or "Bennett Fracture-Dislocation"
2. **Description**: Bulleted list of anatomical/clinical criteria (separated by `\n`).
3. **X-Ray Findings**: Dedicated block detailing radiographic signs on X-ray films.
4. **Mechanism of Injury (MOI)**: Dedicated block with a lightning bolt icon (`Zap`) describing how the injury occurs.
5. **Management (Comparative 2-Column with 4-Core Structure)**:
   - Two columns comparing **Conservative** vs **Operative** treatment.
   - **Preferred Choice Star**: When a treatment is preferred/recommended, the UI renders a prominent glowing star badge `★` next to the column title (no text words like PREFERRED).
   - **Optional Top Banner**: `decisionPrinciple: { en: "...", th: "..." }` for the core decision rule (TL;DR).
   - **Uniform 4-Core Subsections** inside each treatment column:
     - `indication`: 🎯 Criteria/conditions when to choose this option (use `\n` for bullets).
     - `method`: 🛠 Specific procedure, cast/splint type, or surgical fixation implants (use `\n` for bullets).
     - `rehabilitation`: ⏱ Immobilization duration, weight-bearing status, ROM timing (use `\n` for bullets).
     - `pitfalls`: ⚠️ High-yield warnings, contraindications, or risk to nerves/tendons (use `\n` for bullets).

### 6. Investigation / X-Ray Requirements (Tab 2)
Each classification system MUST include an `investigations` array containing at least 2-3 standard radiographic views for that subregion.
For each view, specify:
- `name`: View name (e.g., "True AP Thumb View (Robert's View)")
- `details`: Dual-language description (`{ en: "...", th: "..." }`) of patient positioning, tube angle, and diagnostic rationale.
- `imageId`: Optional image path. If omitted, the UI renders the standard placeholder `[Image Space: Ready for {View Name} X-Ray]`.

---

## Standard Code Template (`src/data/bones.ts` / `src/data/bones/*.ts`)

```typescript
{
  system: "SystemName",
  fullName: { en: "Full Classification System Name", th: "ชื่อระบบจัดจำแนกแบบเต็ม" },
  description: {
    en: "Comprehensive description of what this classification system measures.",
    th: "คำอธิบายระบบจัดจำแนกภาษาไทย"
  },
  investigations: [
    {
      name: "AP View Name",
      details: {
        en: "Patient positioning and tube angle instructions in English.",
        th: "คำแนะนำการจัดท่าและการเอียงหลอดรังสีภาษาไทย"
      }
    },
    {
      name: "Lateral View Name",
      details: {
        en: "Lateral positioning details and clinical signs to evaluate.",
        th: "รายละเอียดการถ่ายภาพท่าด้านข้างภาษาไทย"
      }
    }
  ],
  types: [
    {
      type: "Type I",
      name: { en: "Type I Name", th: "ชื่อ Type I ภาษาไทย" },
      description: {
        en: "First criterion bullet point\nSecond criterion bullet point\nThird criterion bullet point",
        th: "หัวข้อประเมินที่ 1\nหัวข้อประเมินที่ 2\nหัวข้อประเมินที่ 3"
      },
      moi: {
        en: "Mechanism of injury in English.",
        th: "กลไกการบาดเจ็บภาษาไทย"
      },
      treatment: {
        preferred: "conservative", // "conservative" | "operative" | "none" | "neutral"
        decisionPrinciple: {
          en: "Core decision rule in English.",
          th: "หลักการตัดสินใจรักษาหลักภาษาไทย"
        },
        conservative: {
          indication: {
            en: "Nondisplaced fracture (<2mm)\nIntact stability",
            th: "กระดูกไม่เคลื่อนตัว (<2 มม.)\nข้อต่อมีความมั่นคงดี"
          },
          method: {
            en: "Short arm splint for 2 weeks\nTransition to short arm cast for 4 weeks",
            th: "ใส่เฝือกชั่วคราวดามแขน 2 สัปดาห์\nเปลี่ยนเป็นเฝือกกลมต่ออีก 4 สัปดาห์"
          },
          rehabilitation: {
            en: "Non-weight bearing (NWB) for 6 weeks\nActive finger motion immediately",
            th: "งดลงน้ำหนัก 6 สัปดาห์\nเริ่มขยับนิ้วมือทันทีตั้งแต่วันแรก"
          },
          pitfalls: {
            en: "Avoid immobilization in extreme flexion (median nerve compression)",
            th: "หลีกเลี่ยงการดัดข้อมืองอมากเกินไป เพราะเสี่ยงกดทับเส้นประสาท Median"
          }
        },
        operative: {
          indication: {
            en: "Displaced >2mm\nArticular step-off >1mm\nFailed closed reduction",
            th: "เคลื่อนตัว >2 มม.\nผิวข้อเหลื่อม >1 มม.\nดึงจัดกระดูกไม่เข้าที่"
          },
          method: {
            en: "Open Reduction and Internal Fixation (ORIF)\nVolar Locking Compression Plate (LCP)",
            th: "ผ่าตัดจัดกระดูกและยึดตรึงภายใน (ORIF)\nใช้แผ่นโลหะดามชนิด Volar Locking Plate"
          },
          rehabilitation: {
            en: "Removable splint for 10-14 days\nEarly active wrist ROM after suture removal",
            th: "ใส่เฝือกอ่อนถอดได้ 10-14 วัน\nเริ่มฝึกขยับข้อมือทันทีหลังตัดไหม"
          },
          pitfalls: {
            en: "Ensure screws do not penetrate dorsal cortex and irritate extensor tendons",
            th: "ระวังไม่ให้ปลายสกรูทะลุ Cortด้านหลังไปเสียดสีเส้นเอ็น Extensor"
          }
        }
      },
      illustrationId: "/images/systemname/type1_filename.png",
      xrayDescription: {
        en: "Radiographic features to look for on X-ray.",
        th: "ลักษณะทางรังสีวิทยาที่พบในภาพเอกซเรย์"
      }
    }
  ]
}
```

---

## Mandatory Verification Step
After modifying or adding any classification in `src/data/bones.ts`:
- ALWAYS execute `npm run build` (`tsc -b && vite build`) to ensure there are no syntax, type, or compilation errors.

