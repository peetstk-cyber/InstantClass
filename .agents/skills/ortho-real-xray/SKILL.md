---
name: ortho-real-xray
description: >-
  Standard protocol for sourcing, cleaning/cropping, storing, linking real clinical X-ray radiographs
  (types[].xrayUrl) across fracture classification types, and logging them in the AI Audit Registry for clinician verification.
---

# Orthopedic Real Clinical X-Ray Specification (`ortho-real-xray`)

## Overview
This skill governs the end-to-end workflow for finding, preparing, organizing, integrating, and **auditing real clinical X-ray radiographs** within the application's fracture classification systems (`src/data/bones/*.ts`).

It ensures consistent asset organization, clinical fidelity, image cleanliness, and seamless dual-rendering alongside diagrammatic illustrations (`illustrationId`).

---

## CRITICAL RULES (MUST FOLLOW STRICTLY)

### 1. Separation of Concerns & Panel Boundaries
- **Left Panel (`regionConcept`)**: Strictly reserved for concept illustrations, biomechanical diagrams, or decision-tree graphics. **NEVER place real X-ray photographs in `regionConcept`.**
- **Type Cards (`types[].xrayUrl`)**: Dedicated to verified, high-quality real clinical X-ray films showing the exact fracture morphology of that specific classification type.
- **Investigation Tab (`investigations[].imageUrl`)**: Dedicated to standard projection views (AP, Lateral, Mortise, etc.) showing normal baseline anatomical alignment.

### 2. Dedicated Storage Directory Structure
All real X-ray image files MUST be stored inside dedicated subdirectories under `public/images/xrays/<classification_or_region>/`:
- **Root Path**: `public/images/xrays/`
- **Subfolder**: Named after the classification system or bone region (e.g., `ruedi_allgower`, `humerus`, `c-spine`, `garden`).
- **File Naming Standard**: Lowercase with type designation and `_xray` suffix:
  - `/images/xrays/ruedi_allgower/type1_xray.jpg`
  - `/images/xrays/ruedi_allgower/type2_xray.jpg`
  - `/images/xrays/ruedi_allgower/type3_xray.jpg`
  - `/images/xrays/humerus/proximal_13_xray.jpg`

---

## Radiographic Sourcing Protocol

### Approved High-Yield Sources
1. **PubMed Central (PMC) Open-Access Classification Reviews**:
   - Search for canonical papers (e.g., *Clinical Orthopaedics and Related Research* "Classifications in Brief" series).
   - Fetching procedure:
     ```bash
     curl -s -L -H "User-Agent: Mozilla/5.0" "https://pmc.ncbi.nlm.nih.gov/articles/<PMC_ID>/"
     ```
   - Extract high-resolution figure blob URLs (`https://cdn.ncbi.nlm.nih.gov/pmc/blobs/...`).
2. **Wikimedia Commons**:
   - Search Category pages (e.g., `Category:Pilon fracture`).
   - Download via `https://commons.wikimedia.org/wiki/Special:FilePath/<Filename>`.
3. **Radiopaedia & Open Medical Educational Databases**:
   - Reference cases classified by standard orthopedic schemas.

---

## Image Processing & Cleaning Standards

Clinical X-rays sourced from publications often come with multi-panel layouts (A: X-ray, B: Diagram) and overlay labels ('A', 'B', arrows, text). Follow these standards:

1. **Splitting Multi-Panel Figures**:
   - Detect the boundary between radiograph and schematic drawing.
   - Crop strictly the radiograph portion.
2. **Removing Publication Artifacts & Letter Badges**:
   - If letter badges (e.g. 'A') sit in non-critical peripheral areas (e.g. dark corners or beyond the joint), cleanly crop the non-essential border or patch the background.
   - Ensure the fracture lines, articular step-off, comminution, and adjacent joints remain 100% visible and uncompromised.
3. **Image Framing & Quality**:
   - Center the fracture zone and its articulating joint.
   - Save in web-optimized JPG (quality 92–95) or PNG format.
   - Verify image dimensions with a quick Python PIL inspection.

---

## Token-Optimized Visual Verification Protocol (เกณฑ์การตรวจภาพแบบประหยัด Token)

To prevent excessive multimodal token consumption (saving 60–70% tokens while preserving 100% clinical and anatomical accuracy):

1. **Text-First Cross-Referencing**:
   - Verify classification types, anatomical regions, and diagnoses directly from peer-reviewed figure captions, paper text, and DOI/PMC metadata *before* processing images. Text parsing consumes minimal tokens.
2. **Headless Image Processing Pipeline**:
   - Execute all downloading, splitting, cropping, centering, marker inpainting, and web optimization via local Python/shell scripts without loading intermediate draft images into the AI context.
   - **DO NOT** call `view_file` on raw multi-panel figures, uncropped sheets, or incremental editing drafts.
3. **Single-Pass Final Visual Inspection**:
   - Call `view_file` **strictly ONCE per classification type** on the **Final Processed Image** (e.g., `mason_type1_xray.jpg`).
   - Perform rapid morphological validation:
     - Is the fracture pattern/displacement pathognomonic and true to the classification type?
     - Are articular surfaces, step-offs, and adjacent joint lines intact and uncropped?
     - Are all external artifacts and letter labels cleanly eliminated without altering bone anatomy?
4. **Session Freshness Recommendation**:
   - Once a bone region or classification system is completed, encourage opening a fresh session for the next bone to eliminate accumulated multimodal context tokens.

---

## Data Schema Mapping (`src/data/bones/*.ts`)

Add `xrayUrl` alongside `illustrationId` and `xrayDescription`:

```typescript
{
  type: "Type I",
  name: {
    en: "Type I (Cleavage / Non-displaced Plafond)",
    th: "Type I (รอยหักผิวข้อไม่เคลื่อน / Cleavage Fracture)"
  },
  description: {
    en: "Intra-articular fracture without displacement...",
    th: "รอยหักผ่านผิวข้อโดยไม่มีการเคลื่อนหลุด..."
  },
  illustrationId: "/images/ruedi_allgower/type1.png",          // Hand-drawn sketch/diagram
  xrayUrl: "/images/xrays/ruedi_allgower/type1_xray.jpg",     // Real clinical radiograph
  xrayDescription: {
    en: "Sharp intra-articular fracture line with step-off < 2 mm.",
    th: "เห็นรอยหักผ่านผิวข้อโดยหน้าสัมผัสเรียบเสมอกัน ยุบตัว < 2 มม."
  },
  treatment: { ... }
}
```

---

## MANDATORY PROTOCOL: AI Image Audit Logging (การบันทึกภาพ AI ในระบบตรวจสอบ)

Whenever an AI agent adds, updates, or replaces an image (Real X-Ray, Illustration, or Concept Diagram):

### 1. Mandatory Registry Entry
Immediately append a new record to `src/data/aiImageAuditRegistry.json`:
```json
{
  "id": "<boneId>_<system>_<type>_xray",
  "boneId": "tibia",
  "boneName": { "en": "Tibia & Fibula", "th": "กระดูกหน้าแข้งและกระดูกน่อง" },
  "regionId": "distal",
  "regionName": { "en": "Distal Tibia & Plafond", "th": "ปลายกระดูกหน้าแข้งและผิวข้อเท้า" },
  "system": "Pilon Fracture",
  "type": "Type I",
  "typeName": { "en": "Type I (Cleavage / Non-displaced Plafond)", "th": "Type I (รอยหักผิวข้อไม่เคลื่อน / Cleavage Fracture)" },
  "imageType": "xray",
  "imageUrl": "/images/xrays/ruedi_allgower/type1_xray.jpg",
  "addedBy": "AI (Antigravity)",
  "addedAt": "<ISO_TIMESTAMP>",
  "source": "<Literature Citation / PMC ID / Fig #>",
  "status": "pending_review",
  "notes": "<Details on fracture morphology shown and cleaning/cropping performed>"
}
```

### 2. Status Rules
- **Initial Status**: MUST always be set to `"pending_review"`.
- **AI Restriction**: AI agents must **NEVER** set `status` to `"verified"`.
- Only human orthopedic clinicians or verified medical reviewers can approve and change status to `"verified"`.

### 3. How Clinicians & Reviewers Audit Images
- **Interactive UI Tab**:
  - Open Admin Manager (`Shift+A` or Admin button in Navbar) -> Click **"AI Image Audit (ตรวจสอบภาพ AI)"** tab.
  - Reviewers can filter by status (`All`, `⏳ รอตรวจสอบ`, `✅ ผ่านการตรวจ`, `❌ ปฏิเสธ`), zoom full images, inspect source citations, and click `[ ✅ ยืนยัน (Verify) ]` or `[ ❌ ปฏิเสธ (Reject) ]`.
- **CLI Terminal Query**:
  ```bash
  npm run audit:ai
  ```
  Prints a formatted report of all AI images awaiting clinical review.

---

## Mandatory Verification Workflow

1. **Verify Asset Existence**:
   ```bash
   ls -la public/images/xrays/<subfolder>/
   ```
2. **Verify Audit Registration**:
   ```bash
   npm run audit:ai
   ```
   Confirm the newly added image appears under `pending_review`.
3. **Compile and Validate Build**:
   ```bash
   npm run build
   ```
   Must compile cleanly (`tsc -b && vite build`) without bundle or typing errors.
4. **UI Verification**:
   - Open the classification card in the application.
   - Confirm the real X-ray renders crisply in the modal / detail panel.
   - Confirm `xrayDescription` matches the visual findings shown on the film.
