---
name: ortho-investigation
description: >-
  Guidelines for adding, managing, and displaying radiographic investigation X-Ray views
  (Investigation / X-Ray tab) in the OrthoClass application, including data structure, image sourcing, and clean rendering.
---

# Orthopedic Radiographic Investigation Specification (`ortho-investigation`)

## Overview
This skill governs the addition, management, and visual rendering of radiographic investigation X-Ray views (**Investigation / X-Ray** tab) across all bone regions in `src/data/bones.ts`. It establishes data schemas, image storage standards, and clean UI display rules based on clinical workflow requirements.

---

## CRITICAL RULES & CONVENTIONS

### 1. Data Structure (`InvestigationView`)
Every entry in a classification system's `investigations` array MUST conform to `InvestigationView` in `src/types/index.ts`:

```typescript
export interface InvestigationView {
  name: string;             // View title (e.g., "True AP Shoulder View (Grashey View)")
  details: Translation;     // Bilingual description { en: "...", th: "..." }
  imageId?: string;         // Legacy/alternative image ID
  imageUrl?: string;        // Path to image file (e.g., "/images/investigations/shoulder/grashey_ap_view.jpg")
}
```

---

### 2. Image Directory Structure
Store all investigation X-Ray images in dedicated subdirectories inside `public/images/investigations/<region>/`:
- **Base Directory**: `public/images/investigations/`
- **Subfolder**: Named after the body part or bone region (e.g., `shoulder`, `forearm`, `femur`, `ankle`, `spine`)
- **Example Paths**:
  - `/images/investigations/shoulder/grashey_ap_view.jpg`
  - `/images/investigations/shoulder/scapular_y_view.jpg`
  - `/images/investigations/forearm/ap_forearm_view.jpg`

---

### 3. Image Sourcing & Downloading Guidelines
- **Use Normal Finding Radiographs**: Always source clear, normal finding (normal anatomical alignment) X-ray films for standard projection views so users can reference normal anatomy and baseline alignment.
- **Preferred Sources**: Public Domain or Creative Commons CC0 images (e.g. Wikimedia Commons).
- **Download Method**: Use `curl -L` with a browser User-Agent header via Wikimedia `Special:FilePath` redirects:
  ```bash
  curl -L -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)" \
    "https://commons.wikimedia.org/wiki/Special:FilePath/<Filename.jpg>" \
    -o "public/images/investigations/<region>/<filename.jpg>"
  ```
- **Local Storage Rule**: Always download images to `public/images/investigations/` locally to ensure 100% offline availability, rapid loading, and protection against CORS/hotlink blocking.

---

### 4. Clean Rendering Rules (UI Display)
- **Normal Finding Images Without Text Badges**: Always use normal finding X-ray images for standard projection views, but do NOT add extra UI badge text like "Normal Finding" or "ภาพถ่ายรังสีปกติ". Keep the presentation clean and minimal.
- **Conditional Image Display**: Only render the `<img>` container if `imageUrl` or `imageId` is explicitly defined and loads successfully. Do NOT show empty placeholder boxes or dashed line frames when an image is not present or fails to load.
- **Container Styling**:
  - Dark radiograph background (`#0B0F17` / `#0F172A`) with rounded corners (`borderRadius: 10`)
  - Image scaling: `objectFit: "contain"`, `maxHeight: 280px` for optimal viewing inside the detail panel.

---

### 5. Image Reuse for Shared Radiographic Views
When different bone regions or classification systems share the same standard radiographic projection view (e.g., **AP Both Hips View** or **Cross-table Lateral View** shared between *Femoral Neck (Garden)*, *Intertrochanteric (Evans)*, and *Subtrochanteric (Russell-Taylor)*):
- **Single File Reference**: Reuse the exact same image file path across all corresponding entries in `src/data/bones.ts` instead of downloading duplicate image files.
- **Shared Folder Standard**: Place shared view images in the primary anatomical region folder (e.g., `public/images/investigations/hip/ap_both_hips_view.jpg`).
- **Example**: Both `Garden` (Femoral Neck) and `Evans` (Intertrochanteric) use `imageUrl: "/images/investigations/hip/ap_both_hips_view.jpg"`.

---

### 6. Standard Data Template (`src/data/bones.ts`)

```typescript
investigations: [
  {
    name: "True AP Shoulder View (Grashey View)",
    details: {
      en: "AP view perpendicular to the glenoid surface. Assesses glenohumeral joint space and measures greater tuberosity displacement.",
      th: "ภาพเอกซเรย์ท่า AP ตั้งฉากกับเบ้า Glenoid ใช้ประเมินช่องข้อไหล่และวัดระยะการเคลื่อนของ Greater Tuberosity"
    },
    imageUrl: "/images/investigations/shoulder/grashey_ap_view.jpg"
  },
  {
    name: "Scapular Y View",
    details: {
      en: "Transscapular lateral view. Evaluates anterior or posterior dislocation of the humeral head relative to the glenoid.",
      th: "ภาพเอกซเรย์ท่าด้านข้าง Y-view ของกระดูกสะบัก เพื่อประเมินการเคลื่อนหลุดไปด้านหน้าหรือด้านหลังของหัวกระดูกต้นแขน"
    },
    imageUrl: "/images/investigations/shoulder/scapular_y_view.jpg"
  }
]
```

---

## Mandatory Verification Step
After adding or modifying investigation data or images:
1. Always execute `npm run build` (`tsc -b && vite build`) to verify there are no TypeScript or build errors.
2. Confirm the images render correctly in the **Investigation / X-Ray** tab of the target bone region.
