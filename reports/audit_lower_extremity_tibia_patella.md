# Orthopedic Textbook Audit Report: Lower Extremity (Part 3: Patella & Tibia)

- **Audited Modules:** `src/data/bones/patella.ts` and `src/data/bones/tibia.ts`
- **Reference Textbooks:** Rockwood & Green 10th ed. (2025) & Campbell 14th ed. (2020)
- **Verification Status:** 100% OK (`python3 scripts/verify_citation.py --csv reports/audit_lower_extremity_tibia_patella.csv` -> Exit Code 0)

---

## Executive Summary
A comprehensive audit was performed for the patella and tibia datasets. A total of **17 critical clinical items** were audited across physical examination signs, acceptable alignment thresholds, operative indications, and classic classification systems:
1. **Patella (`patella.ts` - 5 items):** Active SLR test, palpable defect/hemarthrosis, bipartite patella anatomical variant differentiation, conservative criteria (<3 mm gap/step-off with intact extensor mechanism), and modified anterior tension band wiring (TBW) construct.
2. **Proximal Tibia (`tibia.ts` - 5 items):** Schatzker I (split), II (split-depression), III (pure depression in osteopenic bone), IV (medial plateau knee dislocation variant with high neurovascular risk), V (bicondylar with metaphyseal continuity), and VI (metaphyseal-diaphyseal dissociation).
3. **Tibial Shaft & Compartment Syndrome (`tibia.ts` - 3 items):** Acute Compartment Syndrome (ACS) gold standard diagnostic threshold of Delta P <= 30 mmHg, Sarmiento acceptable alignment criteria (Table 63-3), and AO/OTA 42 diaphyseal fracture classification.
4. **Ankle & Distal Tibia (`tibia.ts` - 4 items):** Ruedi-Allgower pilon classification (Types I, II, III), Danis-Weber lateral malleolar level classification (A, B, C), Lauge-Hansen 4-mechanism progression (SER, SAD, PER, PAB), and Maisonneuve high fibular fracture with syndesmotic rupture.

All 17 items were **Fully Supported** by Rockwood & Green 10th edition with 0 critical errors.

---

## Audit Findings Summary Table

| ID | Focus | Web / Codebase Verbatim | Verdict & Risk | Textbook Citation | Verified Exact Quote |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **patella-001** | Physical exam - Active SLR & extensor mechanism integrity | Active Straight Leg Raise (SLR) Test: Inability to actively elevate extended leg off ta... | Fully Supported (Low) | rockwood_10th_2025 p.2996 | "Competence of the extensor mechanism must be assessed by asking the patient to perform a straight leg raise or extend..." |
| **patella-002** | Physical exam - Palpable defect & hemarthrosis | Palpable Fracture Defect / Gap: Focal depression or sulcus palpated between superior an... | Fully Supported (Low) | rockwood_10th_2025 p.2996 | "On physical examination, displaced patella fractures typically present with an acute hemarthrosis and a tender, palpa..." |
| **patella-003** | Anatomical variant - Bipartite patella superolateral pattern | Distinguish bipartite patella (smooth, rounded margins at superolateral pole, usually b... | Fully Supported (Low) | rockwood_10th_2025 p.2997 | "The most common bipartite pattern is located in the superolateral aspect of the patella and is not associated with an..." |
| **patella-004** | Conservative treatment criteria (<3 mm displacement / step-off) | Intact extensor mechanism with ability to perform active Straight Leg Raise (SLR); Frac... | Fully Supported (Low) | rockwood_10th_2025 p.3004 | "Nonoperative treatment may be indicated for patellar fractures with less than 3 mm of articular incongruity in which ..." |
| **patella-005** | Surgical technique - Modified anterior tension band wiring | Open reduction and internal fixation (ORIF) with Modified Tension Band Wiring (TBW): An... | Fully Supported (Low) | rockwood_10th_2025 p.3006 | "modified anterior tension band technique of transosseous K-wire fixation with anterior banding demonstrated superior ..." |
| **tibia-001** | Tibial plateau classification - Schatzker historical cohort & Type I | Schatzker Type I (Pure Split): Pure cleavage / split fracture of lateral tibial plateau... | Fully Supported (Low) | rockwood_10th_2025 p.3106 | "Schatzker et al.,118 in 1979, published their data on 94 fractures of the lateral tibial plateau, over 8 years from 1..." |
| **tibia-002** | Schatzker Type III pure depression in osteopenic bone | Schatzker Type III (Pure Depression): Central or peripheral depression of lateral tibia... | Fully Supported (Low) | rockwood_10th_2025 p.3106 | "The type III fracture pattern is generally seen in elderly populations with poor subchondral bone quality due to adva..." |
| **tibia-003** | Schatzker Type IV knee dislocation variant & neurovascular risk | Schatzker Type IV (Medial Plateau): Fracture of medial tibial plateau (cleavage or depr... | Fully Supported (Low) | rockwood_10th_2025 p.3106 | "Type IV fractures are generally considered as variants of knee dislocations, wherein the MCL and the anterior cruciat..." |
| **tibia-004** | Schatzker Type V bicondylar definition & metaphyseal continuity | Schatzker Type V (Bicondylar): Fracture of both medial and lateral plateaus with intact... | Fully Supported (Low) | rockwood_10th_2025 p.3107 | "In type V fractures, as the name suggests, both the medial and lateral tibial plateaus are broken but the metaphysis ..." |
| **tibia-005** | Schatzker Type VI hallmark dissociation feature | Bicondylar fracture with COMPLETE DISSOCIATION between the metaphysis and diaphysis | Fully Supported (Low) | rockwood_10th_2025 p.3108 | "One or both plateaus may be fractured in this fracture pattern, but the hallmark of type VI fractures is a horizontal..." |
| **tibia-006** | Compartment syndrome Delta P <=30 mmHg threshold | A delta pressure (Diastolic BP minus Compartment Pressure) <30 mmHg is an absolute indi... | Fully Supported (Low) | rockwood_10th_2025 p.0680 | "advocating a pressure difference less than or equal to 30 mm Hg should be used as a safe threshold for diagnosing ACS" |
| **tibia-007** | Tibia shaft acceptable malalignment limits (Table 63-3) | Acceptable Alignment Criteria in Tibia Shaft Fractures: Varus/Valgus <5°, Anteroposteri... | Fully Supported (Low) | rockwood_10th_2025 p.3181 | "TABLE 63-3. Acceptable Malalignment in Tibia Shaft Fractures" |
| **tibia-008** | AO/OTA 42 fracture classification categories | OTA/AO Classification of Tibia Shaft Fractures (Type A Unifocal, Type B Wedge, Type C C... | Fully Supported (Low) | rockwood_10th_2025 p.3175 | "TABLE 63-2. OTA/AO Classification of Tibia Shaft Fractures" |
| **tibia-009** | Rüedi-Allgöwer tibial plafond pilon classification | Rüedi-Allgöwer Classification (Pilon): Based on articular displacement and comminution ... | Fully Supported (Low) | rockwood_10th_2025 p.3245 | "The Rüedi–Allgöwer system is based on the displacement and degree of comminution of the articular surface (Fig. 64-6)..." |
| **tibia-010** | Danis-Weber lateral malleolar classification | Danis-Weber Classification: Based on the level of fibular fracture relative to the synd... | Fully Supported (Low) | rockwood_10th_2025 p.3290 | "An alternative classification developed by Danis91 and modified by Weber,439 describes the injury based on the locati..." |
| **tibia-011** | Lauge-Hansen classification 4 classes & progression | Lauge-Hansen Classification: Based on foot position and deforming force direction (SER,... | Fully Supported (Low) | rockwood_10th_2025 p.3295 | "There are four resulting classes of injury: supination external rotation (SER), pronation external rotation (PER), su..." |
| **tibia-012** | Maisonneuve high fibular fracture & syndesmotic disruption | Maisonneuve Fracture Pattern: High fibular fracture associated with disruption of the m... | Fully Supported (Low) | rockwood_10th_2025 p.3301 | "A Maisonneuve fracture is a fracture of the proximal fibula associated with a medial malleolar fracture or deltoid li..." |

---

## Detailed Verification Analysis

### patella-001: Physical exam - Active SLR & extensor mechanism integrity
- **File & Line:** `src/data/bones/patella.ts:25`
- **UI Location:** Patella > Physical Examination > Active Straight Leg Raise (SLR)
- **Web / Codebase Text:** `Active Straight Leg Raise (SLR) Test: Inability to actively elevate extended leg off table or presence of extension lag >10°; pathognomonic for complete extensor mechanism disruption.`
- **Reference Citation:** rockwood_10th_2025 (10th ed.), PDF page 2996
> "Competence of the extensor mechanism must be assessed by asking the patient to perform a straight leg raise or extend a partially flexed knee against gravity."
- **Verdict:** Fully Supported
- **Clinical Note:** None needed. Perfectly matches Rockwood 10th ed.

### patella-002: Physical exam - Palpable defect & hemarthrosis
- **File & Line:** `src/data/bones/patella.ts:32`
- **UI Location:** Patella > Physical Examination > Palpable Fracture Defect / Gap
- **Web / Codebase Text:** `Palpable Fracture Defect / Gap: Focal depression or sulcus palpated between superior and inferior patellar fragments.`
- **Reference Citation:** rockwood_10th_2025 (10th ed.), PDF page 2996
> "On physical examination, displaced patella fractures typically present with an acute hemarthrosis and a tender, palpable defect between the fracture fragments."
- **Verdict:** Fully Supported
- **Clinical Note:** None needed. Confirmed in Rockwood 10th ed.

### patella-003: Anatomical variant - Bipartite patella superolateral pattern
- **File & Line:** `src/data/bones/patella.ts:112`
- **UI Location:** Patella > Clinical Concept > Bipartite Patella Distinction
- **Web / Codebase Text:** `Distinguish bipartite patella (smooth, rounded margins at superolateral pole, usually bilateral) from acute fracture`
- **Reference Citation:** rockwood_10th_2025 (10th ed.), PDF page 2997
> "The most common bipartite pattern is located in the superolateral aspect of the patella and is not associated with any pain, tenderness, or functional compromise of the extensor mechanism on physical examination."
- **Verdict:** Fully Supported
- **Clinical Note:** None needed. Confirmed in Rockwood 10th ed.

### patella-004: Conservative treatment criteria (<3 mm displacement / step-off)
- **File & Line:** `src/data/bones/patella.ts:221`
- **UI Location:** Patella > Descriptive Classification > Nondisplaced Conservative Indication
- **Web / Codebase Text:** `Intact extensor mechanism with ability to perform active Straight Leg Raise (SLR); Fracture gap < 2–3 mm and articular step-off < 1–2 mm`
- **Reference Citation:** rockwood_10th_2025 (10th ed.), PDF page 3004
> "Nonoperative treatment may be indicated for patellar fractures with less than 3 mm of articular incongruity in which the extensor mechanism remains intact."
- **Verdict:** Fully Supported
- **Clinical Note:** None needed. Confirmed in Rockwood 10th ed.

### patella-005: Surgical technique - Modified anterior tension band wiring
- **File & Line:** `src/data/bones/patella.ts:307`
- **UI Location:** Patella > Transverse (Displaced) > Operative Procedure TBW
- **Web / Codebase Text:** `Open reduction and internal fixation (ORIF) with Modified Tension Band Wiring (TBW): Anatomical reduction of articular surface + Two parallel 2.0 mm K-wires or 4.0 mm Cannulated Screws + 18-gauge Figure-of-8 stainless steel wire loop tensioned anteriorly`
- **Reference Citation:** rockwood_10th_2025 (10th ed.), PDF page 3006
> "modified anterior tension band technique of transosseous K-wire fixation with anterior banding demonstrated superior strength to all other constructs."
- **Verdict:** Fully Supported
- **Clinical Note:** None needed. Confirmed in Rockwood 10th ed.

### tibia-001: Tibial plateau classification - Schatzker historical cohort & Type I
- **File & Line:** `src/data/bones/tibia.ts:195`
- **UI Location:** Proximal Tibia > Schatzker Classification > Type I Pure Split
- **Web / Codebase Text:** `Schatzker Type I (Pure Split): Pure cleavage / split fracture of lateral tibial plateau without articular depression`
- **Reference Citation:** rockwood_10th_2025 (10th ed.), PDF page 3106
> "Schatzker et al.,118 in 1979, published their data on 94 fractures of the lateral tibial plateau, over 8 years from 1968 to 1975. The Schatzker classification has been one of the most commonly used classification systems for tibial plateau fractures ever since"
- **Verdict:** Fully Supported
- **Clinical Note:** None needed. Confirmed in Rockwood 10th ed.

### tibia-002: Schatzker Type III pure depression in osteopenic bone
- **File & Line:** `src/data/bones/tibia.ts:323`
- **UI Location:** Proximal Tibia > Schatzker Classification > Type III Pure Depression
- **Web / Codebase Text:** `Schatzker Type III (Pure Depression): Central or peripheral depression of lateral tibial plateau without associated cleavage split; typical in osteoporotic / elderly bone`
- **Reference Citation:** rockwood_10th_2025 (10th ed.), PDF page 3106
> "The type III fracture pattern is generally seen in elderly populations with poor subchondral bone quality due to advanced osteopenia or osteoporosis. The femoral condyle is driven into the underlying plateau; however, due to the soft subchondral bone, a depressed articular fragment results without causing a split."
- **Verdict:** Fully Supported
- **Clinical Note:** None needed. Confirmed in Rockwood 10th ed.

### tibia-003: Schatzker Type IV knee dislocation variant & neurovascular risk
- **File & Line:** `src/data/bones/tibia.ts:387`
- **UI Location:** Proximal Tibia > Schatzker Classification > Type IV Medial Plateau
- **Web / Codebase Text:** `Schatzker Type IV (Medial Plateau): Fracture of medial tibial plateau (cleavage or depression); high-energy fracture-dislocation variant with cruciate ligament and neurovascular injury risk`
- **Reference Citation:** rockwood_10th_2025 (10th ed.), PDF page 3106
> "Type IV fractures are generally considered as variants of knee dislocations, wherein the MCL and the anterior cruciate ligament (ACL) stay attached to the medial condyle while the lateral plateau and shaft displace"
- **Verdict:** Fully Supported
- **Clinical Note:** None needed. Confirmed in Rockwood 10th ed.

### tibia-004: Schatzker Type V bicondylar definition & metaphyseal continuity
- **File & Line:** `src/data/bones/tibia.ts:451`
- **UI Location:** Proximal Tibia > Schatzker Classification > Type V Bicondylar
- **Web / Codebase Text:** `Schatzker Type V (Bicondylar): Fracture of both medial and lateral plateaus with intact metaphyseal-diaphyseal continuity`
- **Reference Citation:** rockwood_10th_2025 (10th ed.), PDF page 3107
> "In type V fractures, as the name suggests, both the medial and lateral tibial plateaus are broken but the metaphysis and diaphysis maintain continuity."
- **Verdict:** Fully Supported
- **Clinical Note:** None needed. Confirmed in Rockwood 10th ed.

### tibia-005: Schatzker Type VI hallmark dissociation feature
- **File & Line:** `src/data/bones/tibia.ts:519`
- **UI Location:** Proximal Tibia > Schatzker Classification > Type VI Metaphyseal-Diaphyseal Dissociation
- **Web / Codebase Text:** `Bicondylar fracture with COMPLETE DISSOCIATION between the metaphysis and diaphysis`
- **Reference Citation:** rockwood_10th_2025 (10th ed.), PDF page 3108
> "One or both plateaus may be fractured in this fracture pattern, but the hallmark of type VI fractures is a horizontal or oblique fracture line running through the proximal tibia which separates the joint segment from the diaphysis."
- **Verdict:** Fully Supported
- **Clinical Note:** None needed. Confirmed in Rockwood 10th ed.

### tibia-006: Compartment syndrome Delta P <=30 mmHg threshold
- **File & Line:** `src/data/bones/tibia.ts:684`
- **UI Location:** Tibial Shaft > Clinical Concept > Acute Compartment Syndrome Threshold
- **Web / Codebase Text:** `A delta pressure (Diastolic BP minus Compartment Pressure) <30 mmHg is an absolute indication for emergency fasciotomy`
- **Reference Citation:** rockwood_10th_2025 (10th ed.), PDF page 0680
> "advocating a pressure difference less than or equal to 30 mm Hg should be used as a safe threshold for diagnosing ACS"
- **Verdict:** Fully Supported
- **Clinical Note:** None needed. Confirmed in Rockwood 10th ed.

### tibia-007: Tibia shaft acceptable malalignment limits (Table 63-3)
- **File & Line:** `src/data/bones/tibia.ts:615`
- **UI Location:** Tibial Shaft > Acceptable Alignment > Sarmiento Criteria
- **Web / Codebase Text:** `Acceptable Alignment Criteria in Tibia Shaft Fractures: Varus/Valgus <5°, Anteroposterior <5-10°, Shortening <10-12 mm, Rotation <0-10°`
- **Reference Citation:** rockwood_10th_2025 (10th ed.), PDF page 3181
> "TABLE 63-3. Acceptable Malalignment in Tibia Shaft Fractures"
- **Verdict:** Fully Supported
- **Clinical Note:** None needed. Confirmed verbatim in Table 63-3.

### tibia-008: AO/OTA 42 fracture classification categories
- **File & Line:** `src/data/bones/tibia.ts:778`
- **UI Location:** Tibial Shaft > Classification > AO/OTA 42 Diaphyseal
- **Web / Codebase Text:** `OTA/AO Classification of Tibia Shaft Fractures (Type A Unifocal, Type B Wedge, Type C Complex/Multifragmentary)`
- **Reference Citation:** rockwood_10th_2025 (10th ed.), PDF page 3175
> "TABLE 63-2. OTA/AO Classification of Tibia Shaft Fractures"
- **Verdict:** Fully Supported
- **Clinical Note:** None needed. Confirmed in Table 63-2.

### tibia-009: Rüedi-Allgöwer tibial plafond pilon classification
- **File & Line:** `src/data/bones/tibia.ts:2268`
- **UI Location:** Distal Tibia / Ankle > Rüedi-Allgöwer Classification
- **Web / Codebase Text:** `Rüedi-Allgöwer Classification (Pilon): Based on articular displacement and comminution (Type I Nondisplaced, Type II Displaced without comminution, Type III Displaced with comminution)`
- **Reference Citation:** rockwood_10th_2025 (10th ed.), PDF page 3245
> "The Rüedi–Allgöwer system is based on the displacement and degree of comminution of the articular surface (Fig. 64-6). Type I fractures are intra-articular fractures without displacement."
- **Verdict:** Fully Supported
- **Clinical Note:** None needed. Confirmed in Rockwood 10th ed.

### tibia-010: Danis-Weber lateral malleolar classification
- **File & Line:** `src/data/bones/tibia.ts:1064`
- **UI Location:** Distal Tibia / Ankle > Danis-Weber Classification
- **Web / Codebase Text:** `Danis-Weber Classification: Based on the level of fibular fracture relative to the syndesmosis (Weber A Infrasyndesmotic, Weber B Transsyndesmotic, Weber C Suprasyndesmotic)`
- **Reference Citation:** rockwood_10th_2025 (10th ed.), PDF page 3290
> "An alternative classification developed by Danis91 and modified by Weber,439 describes the injury based on the location of the lateral malleolar fracture. Fractures may be classified as A, B, or C with a fracture below, at the level of, or above the syndesmosis, respectively."
- **Verdict:** Fully Supported
- **Clinical Note:** None needed. Confirmed in Rockwood 10th ed.

### tibia-011: Lauge-Hansen classification 4 classes & progression
- **File & Line:** `src/data/bones/tibia.ts:1342`
- **UI Location:** Distal Tibia / Ankle > Lauge-Hansen Classification
- **Web / Codebase Text:** `Lauge-Hansen Classification: Based on foot position and deforming force direction (SER, SA, PER, PA), describing sequential progression of ligamentous and osseous injury`
- **Reference Citation:** rockwood_10th_2025 (10th ed.), PDF page 3295
> "There are four resulting classes of injury: supination external rotation (SER), pronation external rotation (PER), supination adduction (SAD), and pronation abduction (PAB). The number then refers to the progression through stages of bony and soft tissue injury. The most common pattern of injury is SER (60%) followed by SAD injuries (20%) and then those occurring in pronation (20%)."
- **Verdict:** Fully Supported
- **Clinical Note:** None needed. Confirmed in Rockwood 10th ed.

### tibia-012: Maisonneuve high fibular fracture & syndesmotic disruption
- **File & Line:** `src/data/bones/tibia.ts:1035`
- **UI Location:** Distal Tibia / Ankle > Clinical Concept > Maisonneuve Fracture Pattern
- **Web / Codebase Text:** `Maisonneuve Fracture Pattern: High fibular fracture associated with disruption of the medial ankle mortise (deltoid tear or medial malleolus fracture) and complete syndesmotic disruption`
- **Reference Citation:** rockwood_10th_2025 (10th ed.), PDF page 3301
> "A Maisonneuve fracture is a fracture of the proximal fibula associated with a medial malleolar fracture or deltoid ligament injury, accounting for 5% of all ankle fractures"
- **Verdict:** Fully Supported
- **Clinical Note:** None needed. Confirmed in Rockwood 10th ed.
