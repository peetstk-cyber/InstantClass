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
5. **Management (Comparative 2-Column)**:
   - Two columns comparing **Conservative** vs **Operative** treatment.
   - **Preferred Choice Glowing Highlight**: If one treatment is preferred/recommended (e.g. recommended, gold standard, primary choice, vs not recommended, contraindicated), the UI highlights it with a glowing neon border and `★ PREFERRED` / `★ แนะนำ` badge.
   - You can explicitly set `preferred: "conservative" | "operative"` on the `treatment` object, or rely on auto-keyword detection.

### 6. Investigation / X-Ray Requirements (Tab 2)
Each classification system MUST include an `investigations` array containing at least 2-3 standard radiographic views for that subregion.
For each view, specify:
- `name`: View name (e.g., "True AP Thumb View (Robert's View)")
- `details`: Dual-language description (`{ en: "...", th: "..." }`) of patient positioning, tube angle, and diagnostic rationale.
- `imageId`: Optional image path. If omitted, the UI renders the standard placeholder `[Image Space: Ready for {View Name} X-Ray]`.

---

## Standard Code Template (`src/data/bones.ts`)

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
        preferred: "conservative", // optional explicit hint: "conservative" | "operative"
        conservative: {
          en: "Detailed conservative treatment protocol in English.",
          th: "รายละเอียดการรักษาแบบไม่ผ่าตัดภาษาไทย"
        },
        operative: {
          en: "Detailed operative treatment protocol in English.",
          th: "รายละเอียดการรักษาแบบผ่าตัดภาษาไทย"
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

