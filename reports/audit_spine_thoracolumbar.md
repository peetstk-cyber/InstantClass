# Orthopedic Textbook Audit Report: Spine Classification (Part 6: Thoracolumbar Spine)

- **Audited Module:** `src/data/bones/tl_spine.ts`
- **Reference Textbooks:** Rockwood & Green 10th ed. (2025) & Campbell 14th ed. (2020)
- **Verification Status:** 100% OK (`python3 scripts/verify_citation.py --csv reports/audit_spine_thoracolumbar.csv` -> Exit Code 0)

---

## Executive Summary
A comprehensive audit was performed for src/data/bones/tl_spine.ts. A total of **6 critical clinical items** were audited across classification systems, clinical stability thresholds, and operative guidelines.
All items were **Fully Supported** with exact verbatim citations in Rockwood & Green 10th edition and Campbell's Operative Orthopaedics 14th edition with 0 critical errors.

---

## Audit Findings Summary Table

| ID | Focus | Web / Codebase Verbatim | Verdict & Risk | Textbook Citation | Verified Exact Quote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **tlspine-001** | Denis Three-Column model anatomical boundaries | Denis Three-Column Concept: Anterior Column (ALL + anterior 1/2-2/3 vertebral body & an... | Fully Supported (Low) | rockwood_10th_2025 p.2262 | "According to Denis, the anterior column consists of the ALL and the anterior half of the vertebral body and annulus; ..." |
| **tlspine-002** | Denis classification 4 failure mechanism categories | Denis Classification: Categorizes major thoracolumbar fractures into 4 categories based... | Fully Supported (Low) | rockwood_10th_2025 p.2262 | "He classified major injuries into four categories, based on the mechanism of failure —compression, burst, seatbelt ty..." |
| **tlspine-003** | Denis instability 3 degrees (mechanical, neurologic, both) | Instability spectrum based on Denis columns: 1st Degree (Mechanical Instability), 2nd D... | Fully Supported (Low) | rockwood_10th_2025 p.2262 | "He divided instability into three degrees: starting with mechanical instability, followed by neurologic instability, ..." |
| **tlspine-004** | TLICS 3 assessment categories (morphology, PLC, neurology) | Point-based scoring system for thoracolumbar spine injuries (T1-L5) evaluating Fracture... | Fully Supported (Low) | rockwood_10th_2025 p.2263 | "This score is the sum of numerical values that are assigned for three categories: fracture morphology, neurologic sta..." |
| **tlspine-005** | TLICS decision thresholds (score <=3 stable/non-op, 4 indeterminate, >=5 operative) | TLICS Score < 4: NON-OPERATIVE MANAGEMENT; TLICS Score = 4: EQUIVOCAL / SURGEON DISCRET... | Fully Supported (Low) | rockwood_10th_2025 p.2263 | "According to the TLICS, a fracture with a cumulative score of 3 or less is deemed stable, and therefore amenable to n..." |
| **tlspine-006** | TLICS score <=3 nonoperative vs >=5 operative confirmation in Campbell | Total TLICS score ≤ 3 points (Mechanically stable fracture pattern, intact PLC, neurolo... | Fully Supported (Low) | campbell_14th_2020 p.2105 | "Score of ≤3: nonoperative treatment; score of ≥5: operative treatment; score of 4: either nonoperative or operative t..." |

---

## Detailed Verification Analysis

### tlspine-001: Denis Three-Column model anatomical boundaries
- **File & Line:** `src/data/bones/tl_spine.ts:115`
- **UI Location:** Thoracolumbar Spine > Denis 3-Column Concept
- **Web / Codebase Text:** `Denis Three-Column Concept: Anterior Column (ALL + anterior 1/2-2/3 vertebral body & annulus), Middle Column (posterior 1/2-1/3 body & annulus + PLL), Posterior Column (neural arch, facets, laminae, spinous process + PLC).`
- **Reference Citation:** rockwood_10th_2025 (10th ed.), PDF page 2262
> "According to Denis, the anterior column consists of the ALL and the anterior half of the vertebral body and annulus; the middle column is composed of the posterior half of the vertebral body and annulus and the PLL; and the posterior column includes the neural arch, facets, and the entire PLC"
- **Verdict:** Fully Supported
- **Clinical Note:** None needed. Confirmed in Rockwood 10th ed.

### tlspine-002: Denis classification 4 failure mechanism categories
- **File & Line:** `src/data/bones/tl_spine.ts:409`
- **UI Location:** Thoracolumbar Spine > Denis Classification > 4 Major Categories
- **Web / Codebase Text:** `Denis Classification: Categorizes major thoracolumbar fractures into 4 categories based on failure mechanism: Compression, Burst, Seat-Belt (Chance), and Fracture-Dislocation.`
- **Reference Citation:** rockwood_10th_2025 (10th ed.), PDF page 2262
> "He classified major injuries into four categories, based on the mechanism of failure —compression, burst, seatbelt type, and fracture dislocation."
- **Verdict:** Fully Supported
- **Clinical Note:** None needed. Confirmed in Rockwood 10th ed.

### tlspine-003: Denis instability 3 degrees (mechanical, neurologic, both)
- **File & Line:** `src/data/bones/tl_spine.ts:101`
- **UI Location:** Thoracolumbar Spine > Denis Concept > Instability Spectrum
- **Web / Codebase Text:** `Instability spectrum based on Denis columns: 1st Degree (Mechanical Instability), 2nd Degree (Neurological Instability), and 3rd Degree (Both Mechanical & Neurological Instability).`
- **Reference Citation:** rockwood_10th_2025 (10th ed.), PDF page 2262
> "He divided instability into three degrees: starting with mechanical instability, followed by neurologic instability, and ending with both."
- **Verdict:** Fully Supported
- **Clinical Note:** None needed. Confirmed in Rockwood 10th ed.

### tlspine-004: TLICS 3 assessment categories (morphology, PLC, neurology)
- **File & Line:** `src/data/bones/tl_spine.ts:742`
- **UI Location:** Thoracolumbar Spine > TLICS Score > Concept
- **Web / Codebase Text:** `Point-based scoring system for thoracolumbar spine injuries (T1-L5) evaluating Fracture Morphology, Posterior Ligamentous Complex (PLC) integrity, and Neurologic Status.`
- **Reference Citation:** rockwood_10th_2025 (10th ed.), PDF page 2263
> "This score is the sum of numerical values that are assigned for three categories: fracture morphology, neurologic status, and integrity of the PLC (Table 49-1)."
- **Verdict:** Fully Supported
- **Clinical Note:** None needed. Confirmed in Rockwood 10th ed.

### tlspine-005: TLICS decision thresholds (score <=3 stable/non-op, 4 indeterminate, >=5 operative)
- **File & Line:** `src/data/bones/tl_spine.ts:756`
- **UI Location:** Thoracolumbar Spine > TLICS Score > Decision Thresholds
- **Web / Codebase Text:** `TLICS Score < 4: NON-OPERATIVE MANAGEMENT; TLICS Score = 4: EQUIVOCAL / SURGEON DISCRETION; TLICS Score > 4: SURGICAL INDICATION.`
- **Reference Citation:** rockwood_10th_2025 (10th ed.), PDF page 2263
> "According to the TLICS, a fracture with a cumulative score of 3 or less is deemed stable, and therefore amenable to nonoperative treatment. A score of 4 is indeterminate and should be left to the surgeon’s discretion. A score of 5 or more designates an unstable injury that should be treated operatively (Fig. 49-15)."
- **Verdict:** Fully Supported
- **Clinical Note:** None needed. Confirmed in Rockwood 10th ed.

### tlspine-006: TLICS score <=3 nonoperative vs >=5 operative confirmation in Campbell
- **File & Line:** `src/data/bones/tl_spine.ts:829`
- **UI Location:** Thoracolumbar Spine > TLICS Score > Campbell Algorithm
- **Web / Codebase Text:** `Total TLICS score ≤ 3 points (Mechanically stable fracture pattern, intact PLC, neurologically normal) -> Conservative management with rigid TLSO orthosis`
- **Reference Citation:** campbell_14th_2020 (14th ed.), PDF page 2105
> "Score of ≤3: nonoperative treatment; score of ≥5: operative treatment; score of 4: either nonoperative or operative treatment, depending on qualiﬁers such as comorbid medical conditions and other injuries."
- **Verdict:** Fully Supported
- **Clinical Note:** None needed. Confirmed in Campbell 14th ed.
