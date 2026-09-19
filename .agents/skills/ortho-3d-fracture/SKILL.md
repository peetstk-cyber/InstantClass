---
name: ortho-3d-fracture
description: >-
  Protocol and mathematical specification for 3D anatomical bone fracture splitting,
  multi-fragment comminuted mesh partitioning, deforming muscle force simulations, and clinical classification presets
  (e.g., Evans, Garden, Subtrochanteric) in the Three.js 3D Bone Viewer.
---

# Orthopedic 3D Anatomical Fracture Simulation & Classification Skill

## Overview
This skill governs the 3D anatomical bone fracture modeling, real-time dynamic mesh partitioning, deforming muscle vector simulations, and clinical classification presets within `src/components/anatomy3d/Bone3DViewerModal.tsx`.

It ensures anatomical fidelity to clinical orthopedic classifications (such as Evans for intertrochanteric fractures, Garden for femoral neck fractures, and Seinsheimer/AO for subtrochanteric fractures), while maintaining seamless 60fps performance and responsive camera framing.

---

## 1. 3D Coordinate Space & Medical Mesh Normalization

When loading raw anatomical bone meshes (such as OBJ/GLTF files from CT reconstructions or anatomical scans):

1. **Z-up to Three.js Y-up Orientation**:
   Raw medical scans typically have $Z$ pointing superior/cranial. Three.js operates in a $Y$-up coordinate system.
   ```typescript
   const initBox = new THREE.Box3().setFromObject(object);
   const initSize = initBox.getSize(new THREE.Vector3());
   if (initSize.z > initSize.y && initSize.z > initSize.x) {
     object.rotation.x = -Math.PI / 2; // Converts Z-up to Y-up
   }
   object.updateMatrixWorld(true);
   ```
2. **Centering to Origin $(0, 0, 0)$**:
   Align the geometric bounding box center to world origin:
   ```typescript
   const box = new THREE.Box3().setFromObject(object);
   const center = box.getCenter(new THREE.Vector3());
   object.position.sub(center);
   object.updateMatrixWorld(true);
   ```
3. **Femur Coordinate Landmarks (Post-centering)**:
   - **$+Y$ (Superior / Proximal)**: Femoral head apex ($Y \approx +220$ to $+233$)
   - **$-Y$ (Inferior / Distal)**: Femoral shaft and condyles ($Y \approx -233$)
   - **$+X$ (Medial)**: Femoral head and calcar femorale ($X > 0$)
   - **$-X$ (Lateral)**: Greater trochanter tip ($X \approx -53$) and lateral shaft cortex
   - **$+Z$ (Anterior)**: Anterior femoral cortex and patellar groove
   - **$-Z$ (Posterior)**: Linea aspera, lesser trochanter, and posteromedial calcar

---

## 2. Dynamic Fracture Plane & Multi-Fragment Comminution Partitioning

Instead of loading separate static 3D models for each fracture type, the intact bone mesh is dynamically partitioned at runtime across an anatomical cutting plane and anatomical bounding boundaries.

### A. Bipartite Plane Slicing (Femoral Neck, Subtrochanter, Reverse Oblique)
Defined by a point ($\vec{C}$) and normal vector ($\vec{N}$):
$$\text{Plane}(\vec{N}, \vec{C}): \quad \vec{N} \cdot (\vec{P} - \vec{C}) = 0$$
- $\vec{N} \cdot (\vec{P} - \vec{C}) > 0 \implies$ Proximal fragment.
- $\vec{N} \cdot (\vec{P} - \vec{C}) \le 0 \implies$ Distal fragment.

### B. 5-Fragment Comminution Architecture (Evans III & IV)
In high-energy intertrochanteric fractures, bone shatters into 4 major clinical fragments plus intermediate cortical butterfly shards:
1. **Head & Neck Fragment (`HN`)**: Femoral head, fovea, and neck ($\vec{C}_{\text{HN}} \approx [-4.2, 200.6, -6.8]$). Centered at `cutCenter`.
2. **Greater Trochanter Fragment (`GT`)**: Abducted by Gluteus Medius/Minimus ($\vec{C}_{\text{GT}} \approx [-43.3, 194.6, -7.4]$).
   - Local pivot: $\vec{C}_{\text{GT}} - \vec{C}_{\text{cut}}$ inside `proximalPivotGroup`.
3. **Femoral Shaft Fragment (`Distal`)**: Driven proximally by quadriceps/hamstrings and rotated externally ($\vec{C}_{\text{shaft}} \approx [11.0, -147.7, -1.8]$).
4. **Lesser Trochanter Fragment (`LT`)**: Detached posteromedial calcar fragment avulsed antero-medially and proximally by the Iliopsoas ($\vec{C}_{\text{LT}} \approx [-7.4, 138.9, -16.1]$).
   - Local pivot: $\vec{C}_{\text{LT}}$ inside `distalGroup`.
5. **Lateral Wall Butterfly Shard (`Shard`)**: Shattered subtrochanteric lateral cortex showing clinical "lateral wall blowout" ($\vec{C}_{\text{shard}} \approx [-46.1, 164.0, -10.3]$).
   - Local pivot: $\vec{C}_{\text{shard}}$ inside `distalGroup`.

```typescript
// Seamless 0-Gap Hierarchical Positioning
// When offsets are 0 (Intact), all 5 fragments unite with 0.000mm seam!
gtPivotGroup.position.copy(gtCentroid.sub(cutCenter));
gtMesh.position.copy(gtCentroid.negate());

ltPivotGroup.position.copy(ltCentroid);
ltMesh.position.copy(ltCentroid.negate());

shardPivotGroup.position.copy(shardCentroid);
shardMesh.position.copy(shardCentroid.negate());
```

---

## 3. Standard vs. Reverse Obliquity Fracture Lines

### A. Standard Intertrochanteric Fracture Plane
- **Anatomical Course**: Runs along the intertrochanteric line from **superolateral** (base of greater trochanter) downward and inward to **inferomedial** (at or above lesser trochanter).
- **Mathematical Slope**: $\Delta Y / \Delta X < 0$ (as $X$ moves medial/positive, $Y$ moves distal/lower).
- **Plane Parameters**:
  - `cutCenter`: `[-29, 162, -10]`
  - `cutNormal`: `[0.55, 0.80, 0.20]` (both $N_x > 0$ and $N_y > 0$)

### B. Reverse Obliquity Fracture Plane (Evans V / AO/OTA 31-A3)
- **Anatomical Course**: Runs from **proximal-medial** (base of femoral neck / above lesser trochanter) downward and outward to **distal-lateral** (exiting through the lateral cortex below the vastus ridge of the greater trochanter).
- **Mathematical Slope**: $\Delta Y / \Delta X > 0$ (as $X$ moves medial/positive, $Y$ moves proximal/higher).
- **Plane Parameters**:
  - `cutCenter`: `[-22.0, 148.0, -8.0]`
  - `cutNormal`: `[-0.60, 0.80, 0.05]` ($N_x < 0$ and $N_y > 0$)
- **Deforming Force Simulation**:
  - Distal shaft is pulled **medially** ($+X$) and **proximally** ($+Y$) by the adductor muscles (adductor longus, magnus, brevis).
  - `distalPosOffset`: `[7.8, 5.5, 0]`, `proximalPosOffset`: `[-3.6, -3.2, -1.0]`
  - Demonstrates clearly why Sliding Hip Screws (DHS) are strictly contraindicated (disastrous medial shaft slide and cutout) and Cephalomedullary Nails (CMN) are mandatory.

---

## 4. Complete Evans Classification 3D Presets

All 5 types of the Evans classification must be represented with strict clinical fidelity:

| Type ID | Display Name | Badge | Partition Mode | Clinical Characteristics & 3D Deformity |
| :--- | :--- | :--- | :--- | :--- |
| `evans_nondisplaced` | Non-displaced | Evans I (Stable) | 5-Fragment (offsets = 0) | 2-part hairline fracture; intact posteromedial calcar; zero displacement (`proxPos: [0.4, 0.5, 0.1]`, `rot: 0`). |
| `evans_displaced_reduced` | Displaced Reduced | Evans II (Stable) | 5-Fragment (calcar intact) | Displaced 2-part with stable medial cortical buttress opposition post-reduction; minimal varus (`proxRot: [-0.04, 0.02, -0.06]`). |
| `evans_unstable` | Unstable (LT) | Evans III (Unstable) | 5-Fragment (LT avulsed) | 3-part with detached Lesser Trochanter (`ltPos: [6.0, 9.0, 6.5]`); loss of calcar buttress; severe varus collapse (`proxRot: [0.15, 0.09, -0.27]`). |
| `evans_comminuted` | 4-Part Comminuted | Evans IV (4-Part Shattered) | 5-Fragment (True Comminution) | **True shattered comminution**: GT detached (`gtPos: [-9.5, 6.0, -5.0]`, gap > 12mm), LT detached (`ltPos: [8.0, 11.5, 7.5]`, gap > 15mm), Lateral wall blowout shard (`shardPos: [-11.0, -2.0, 4.0]`), Head-neck varus collapse (`proxPos: [5.8, -8.2, 4.2]`). |
| `evans_reversed_oblique` | Reverse Oblique | Evans V / AO 31-A3 | Custom Reverse Plane | Oblique line exiting lateral cortex below GT; adductor-driven medial shaft displacement (`distPos: [7.8, 5.5, 0]`); mandatory CMN. |

---

## 4.2 Complete Russell-Taylor Subtrochanteric 3D Presets

Subtrochanteric fractures occur within 5 cm distal to the lower border of the lesser trochanter. Deforming muscular forces pull the proximal fragment into **flexion** (iliopsoas), **abduction** (gluteus medius/minimus), and **external rotation** (short rotators), while the distal shaft is pulled **medially** (adductors) and **proximally** (hamstrings/quadriceps).

| Type ID | Display Name | Badge | Partition Mode | Clinical Characteristics & 3D Deformity |
| :--- | :--- | :--- | :--- | :--- |
| `rt_1a` | Type IA | Russell-Taylor IA | `subtroch_bipartite` | **Intact Piriformis Fossa + Intact LT**: Classic muscular deforming forces on intact proximal block (`proxRot: [-0.36, 0.20, 0.24]`, `proxPos: [-3.5, 1.5, 5.2]`); distal shaft adducted medially and shortened (`distPos: [3.8, 6.8, -2.2]`). Standard antegrade IMN standard. |
| `rt_1b` | Type IB | Russell-Taylor IB (LT Disrupted) | `subtroch_lt` | **Intact Piriformis Fossa + Disrupted LT**: Lesser trochanter avulsed anteromedially and proximally by iliopsoas (`ltPos: [7.2, 10.5, 6.8]`, `ltRot: [0.32, 0.18, 0.38]`); loss of medial calcar buttress produces high varus moment. Cephalomedullary reconstruction nail required. |
| `rt_2a` | Type IIA | Russell-Taylor IIA (Fossa Split) | `subtroch_fossa` | **Extension into Piriformis Fossa + Intact LT**: Fracture extends proximally into trochanteric/piriformis fossa (`gtPos: [-6.5, 4.0, -3.2]`, `gtRot: [-0.15, 0.18, 0.22]`). Standard piriformis nailing strictly contraindicated; requires trochanteric entry nail or 95° blade plate/PFLP. |
| `rt_2b` | Type IIB | Russell-Taylor IIB (Severe 4-Part) | `subtroch_comminuted` | **Both Piriformis Fossa & Lesser Trochanter Shattered**: Most severe and unstable pattern with lateral butterfly shard (`shardPos: [-8.5, -3.0, 3.5]`, `shardRot: [0.25, -0.30, -0.22]`), avulsed LT, split fossa, and severe varus shortening collapse. High nonunion risk. |
| `subtroch_aff` | Atypical (AFF) | Bisphosphonate / AFF | `subtroch_bipartite` | **Atypical Femur Fracture (ASBMR Criteria)**: Transverse "chalk-stick" fracture at mid-subtrochanter (`cutCenter: [-18, 105, 0]`, `cutNormal: [0, 1, 0]`) with localized lateral cortical beaking and spike gap from prolonged anti-resorptive therapy. |

---

## 4.3 Complete Winquist-Hansen Femoral Shaft 3D Presets

Femoral shaft (diaphyseal) fractures occur between 5 cm distal to the lesser trochanter and 5 cm proximal to the adductor tubercle. Muscular deforming forces create apex anterolateral bowing (procurvatum and varus) with marked shortening/telescoping from the quadriceps and hamstrings.

| Type ID | Display Name | Badge | Partition Mode | Clinical Characteristics & 3D Deformity |
| :--- | :--- | :--- | :--- | :--- |
| `winquist_0` | Type 0 | Winquist 0 (100% Contact) | `shaft_bipartite` | **Simple 2-Part (100% Cortical Contact)**: Clean transverse/oblique midshaft fracture with apex anterolateral deforming forces (`proxRot: [-0.14, 0.06, 0.16]`, `distPos: [2.5, 4.5, -1.8]`); stable against rotation/shortening once reduced. Reamed IMN allows early WBAT. |
| `winquist_1` | Type I | Winquist I (>75% Contact) | `shaft_butterfly_small` | **Minimal Comminution (>75% Contact)**: Small cortical butterfly fragment (<25% shaft width) on lateral cortex (`shardPos: [-4.5, -1.0, 2.8]`, `shardRot: [0.18, -0.15, -0.22]`); retains high axial stability. Statically locked reamed IMN standard. |
| `winquist_2` | Type II | Winquist II (50-75% Contact) | `shaft_butterfly_med` | **Moderate Butterfly (50-75% Contact)**: Moderate butterfly fragment (up to 50% shaft width) extruded laterally (`shardPos: [-6.8, -1.8, 3.8]`); retains length stability but requires dual static locking bolts to prevent rotational malunion. |
| `winquist_3` | Type III | Winquist III (<50% Contact) | `shaft_butterfly_large` | **Severe Butterfly (<50% Contact - Unstable)**: Large butterfly fragment (>50% shaft width) with <50% contact (`shardPos: [-9.0, -2.5, 5.0]`, `distPos: [3.5, 7.8, -2.5]`); length and rotationally unstable. Dynamic locking strictly contraindicated (causes telescoping collapse). |
| `winquist_4` | Type IV | Winquist IV (Segmental / 0%) | `shaft_segmental` | **Segmental Comminution / Flail Segment (0% Contact)**: Completely unstable intercalary cylinder ($Y \in [-26, 6]$) floating freely (`shardPos: [-8.5, -1.5, 4.5]`, `distPos: [4.2, 9.5, -3.0]`); severe shortening and compartment syndrome risk. Bridge fixation with long static IMN or DCO Ex-Fix. |

---

## 4.4 Complete Distal Femur (AO/OTA 33) 3D Presets

Distal femur fractures occur from the supracondylar metaphysis junction down to the articular femoral condyles. Muscular deforming forces are dominated by the dual heads of the **Gastrocnemius**, which originate from the posterior condyles and forcefully tilt the distal fragment into **hyperextension / recurvatum** (apex posterior angulation), endangering the adjacent popliteal neurovascular bundle. In addition, the adductor magnus creates varus deformities, while quadriceps/hamstrings pull the femoral shaft into shortening.

### Mathematical Boundary Coordinates:
- **Supracondylar Metaphyseal Level**: $Y = -170$ (`cutCenter: [10, -170, 0]`, `cutNormal: [0, 1, 0]`).
- **Intercondylar Notch Sagittal Split**: $X = 12$ (separates medial condyle $X > 12$ from lateral condyle $X \le 12$).
- **Coronal Shear Hoffa Boundary**: $Z = -2$ within lateral condyle (isolates posterior coronal wafer $Z \le -2$).
- **Distal Pivot Center**: Rotates directly around the supracondylar fracture level (`distBase: [10, -170, 0]`).

| Type ID | Display Name | Badge | Partition Mode | Clinical Characteristics & 3D Deformity |
| :--- | :--- | :--- | :--- | :--- |
| `distal_type1` | Type I | Supracondylar (33-A) | `distal_supracondylar` | **Extra-articular Supracondylar (AO 33-A)**: Metaphyseal fracture above intact condylar block. Gastrocnemius pull tilts condyles into apex-posterior recurvatum (`distRot: [0.35, 0, 0]`, `distPos: [0, 2.5, -5.5]`); shaft displaces anteriorly. Retrograde IMN (rIMN) or lateral DFLP. |
| `distal_type2_lateral` | Type II-A | Unicondylar Sagittal (33-B1) | `distal_unicondylar_lat` | **Unicondylar Sagittal Lateral Split (AO 33-B1)**: Partial articular split of lateral condyle ($X \le 12, Y \le -170$) with joint step-off (`shardPos: [-5.5, 4.0, -2.5]`, `shardRot: [0.12, 0.08, -0.22]`); medial condyle remains intact with shaft. Anatomical lag screws + buttress plate. |
| `distal_type2_hoffa` | Type II-B | Coronal Hoffa (33-B3) | `distal_hoffa` | **Coronal Shear Hoffa Fracture (AO 33-B3)**: Posterior coronal wafer ($Z \le -2$) of lateral condyle sheared off during axial load in >90° flexion (`shardPos: [0, 3.5, -7.0]`, `shardRot: [0.28, 0, 0]`). Easily hidden on AP radiograph; mandatory 3D CT scan; headless compression screws. |
| `distal_type3_simple` | Type III-A | Bicondylar T/Y (33-C1) | `distal_bicondylar` | **Complete Articular Bicondylar T/Y Split (AO 33-C1)**: Both condyles split through intercondylar notch and detached from shaft (`distRot: [0.25, 0, 0.12]`, `shardPos: [-4.0, 2.2, -4.5]`, `proxPos: [0, -3.0, 3.5]`). Joint reconstruction with lag screws followed by lateral DFLP bridge. |
| `distal_type3_comminuted` | Type III-B | Shattered Articular (33-C3) | `distal_bicondylar` | **Articular & Metaphyseal Comminuted (AO 33-C3)**: Severely shattered multi-fragment comminution across joint and metaphysis with complete loss of stability (`distPos: [4.0, 3.5, -5.5]`, `shardPos: [-6.5, 4.0, -6.0]`). Fragility pattern where Distal Femoral Replacement (DFR) is indicated. |

---

## 4.5 Complete Proximal Humerus (Neer Classification) 3D Presets

Proximal humerus fractures are classified under Neer's 4-segment paradigm based on **displaced parts** (>1 cm displacement or >45° angulation; GT threshold >5 mm).
The 4 anatomical segments are:
1. **Articular Segment (Humeral Head)**: Spherical medial articular surface (`hnPos`).
2. **Greater Tuberosity (GT)**: Lateral and posterosuperior rotator cuff insertion (`gtPos`).
3. **Lesser Tuberosity (LT)**: Anterior rotator cuff insertion (`ltPos`).
4. **Humeral Shaft**: Diaphyseal segment below surgical neck (`distPos`).

### Mathematical Boundary Coordinates & Centroids:
- **Humeral Head (`hnCentroid`)**: `[39.00, 128.85, -0.34]` (medial articular surface, faces $+X$ and $+Y$).
- **Greater Tuberosity (`gtCentroid`)**: `[11.16, 136.28, -1.11]` (lateral, superior, posterior).
- **Lesser Tuberosity (`ltCentroid`)**: `[20.09, 124.84, 17.14]` (anterior, $+Z > 6, X < 34$).
- **Surgical Neck plane**: $Y = 95$ (`cutCenter: [15.0, 95.0, 3.0]`, `cutNormal: [0, 1, 0]`).
- **Shaft (`distalCentroid`)**: `[-16.75, -101.61, -7.20]`.

| Type ID | Display Name | Badge | Partition Mode | Clinical Characteristics & 3D Deformity |
| :--- | :--- | :--- | :--- | :--- |
| `neer_1part` | 1-Part | 1-Part (<1cm / <45°) | `neer_4part` | **Minimally Displaced (Stable)**: All fragments intact within acceptable thresholds (<1 cm, <45°, GT <5 mm); arm sling 1-2 wks + early passive ROM (>90% good outcome). |
| `neer_2part_gt` | 2-Part (GT) | 2-Part Greater Tuberosity | `neer_2part_gt` | **2-Part GT Fracture**: GT avulsed posterosuperiorly by supraspinatus/infraspinatus (`gtPos: [-6.0, 9.0, -5.5]`, `gtRot: [-0.18, 0.22, 0.26]`); risks subacromial impingement and loss of abduction; ORIF indication. |
| `neer_2part_sn` | 2-Part (SN) | 2-Part Surgical Neck | `neer_2part_sn` | **2-Part Surgical Neck**: Shaft displaced medially/anteriorly by pectoralis major (`distPos: [6.5, 4.0, 3.5]`, `distRot: [0.08, 0.15, -0.22]`); head in neutral with intact tuberosities. PHILOS plate or IM nail. |
| `neer_3part_gt` | 3-Part (GT) | 3-Part GT + Surg Neck | `neer_3part_gt` | **3-Part GT & Surgical Neck**: Surgical neck + GT displaced; head rotated internally by intact subscapularis (`proxRot: [0.10, -0.36, 0.05]`); AVN risk 15-30%; ORIF with cuff suture cerclage. |
| `neer_3part_lt` | 3-Part (LT) | 3-Part LT + Surg Neck (Rare) | `neer_3part_lt` | **3-Part LT & Surgical Neck (Rare)**: Surgical neck + LT displaced; head rotated externally by intact infraspinatus (`proxRot: [-0.08, 0.40, -0.05]`); associated with posterior dislocation. |
| `neer_4part_classic` | 4-Part Classic | 4-Part Classic (Floating Head) | `neer_4part` | **4-Part Classic (Floating Head)**: All 4 segments detached; devascularized floating head (`proxPos: [6.5, -7.5, -4.5]`, `gtPos: [-8.5, 11.5, -7.0]`, `ltPos: [7.0, 3.5, 9.5]`); extreme AVN risk (>80-90%); RTSA in elderly. |
| `neer_4part_valgus` | 4-Part Valgus | 4-Part Valgus Impacted | `neer_4part` | **4-Part Valgus Impacted**: Head driven down in valgus impaction into shaft (`proxPos: [-1.5, -8.5, 0]`, `proxRot: [-0.10, 0, 0.35]`); tuberosities splayed laterally; intact posteromedial hinge (~10-20% AVN); joint-preserving ORIF. |
| `neer_4part_lt_variant` | 4-Part LT Variant | 4-Part LT Variant (Posterior Subluxation) | `neer_4part` | **4-Part LT Variant**: LT displaced with posterior subluxation of the articular surface (`proxPos: [-3.0, -3.0, -9.0]`, `ltPos: [6.5, 3.0, 9.0]`); requires 3D CT scan. |

---

## 4.6 Complete Humeral Shaft (Holstein-Lewis & Anatomical Zones) 3D Presets

Humeral shaft fractures are categorized by anatomical thirds (Proximal, Middle ~60%, Distal), highlighting deforming muscle vectors and radial nerve injury risks.

### Mathematical Boundary Coordinates:
- **Proximal 1/3 Cut**: $Y \approx 56$ (`cutCenter: [3.8, 56.3, 4.0]`, `cutNormal: [0.15, 0.98, 0.05]`).
- **Middle 1/3 Cut**: $Y \approx 0$ (`cutCenter: [-6.9, 0, -4.7]`, `cutNormal: [0.1, 0.98, 0.1]`).
- **Holstein-Lewis Distal 1/3 Spiral Cut**: $Y \approx -65$ (`cutCenter: [-16.2, -65.0, -15.1]`, `cutNormal: [-0.45, 0.88, 0.15]`).

| Type ID | Display Name | Badge | Partition Mode | Clinical Characteristics & 3D Deformity |
| :--- | :--- | :--- | :--- | :--- |
| `shaft_proximal_13` | Proximal 1/3 | Proximal 1/3 (Pectoralis vs Deltoid) | `humerus_shaft_bipartite` | **Proximal 1/3 Shaft**: Pectoralis major pulls proximal fragment into adduction and internal rotation (`proxRot: [0.08, -0.22, 0.15]`); deltoid pulls distal fragment into abduction and shortening (`distPos: [-4.0, 5.5, -2.0]`). |
| `shaft_middle_13` | Middle 1/3 | Middle 1/3 (~60% Common) | `humerus_shaft_bipartite` | **Middle 1/3 Shaft**: Most common location (~60%); proximal fragment abducted by Deltoid (`proxRot: [0.05, 0, -0.25]`); distal fragment pulled proximally by Biceps/Triceps (`distPos: [2.0, 7.0, 3.5]`). Sarmiento brace >95% union. |
| `shaft_holstein_lewis` | Holstein-Lewis | Distal 1/3 Spiral (Radial Nerve Risk) | `humerus_shaft_bipartite` | **Holstein-Lewis Distal 1/3 Spiral**: Oblique spiral fracture extending into lateral intermuscular septum (`distPos: [-3.5, 6.0, -4.5]`, `distRot: [0.22, 0.12, -0.18]`). High risk of radial nerve neuropraxia/entrapment (~22%); closed palsy 90% spontaneous recovery; mandatory exploration if secondary palsy occurs after reduction. |

---

## 4.7 Complete Distal Humerus (AO/OTA 13 Classification) 3D Presets

Distal humerus fractures occur across the condylar and epicondylar region down to the elbow articulation. Muscular deforming forces are driven by the **Triceps** (pulling distal condyles into hyperextension/posterior tilt), **Brachialis & Biceps** (pulling shaft anteriorly/distally), and common flexor/pronator and extensor groups displacing medial and lateral columns.
Clinical highlights include the extreme vulnerability of the **Brachial Artery** and **Median / AIN nerve** across the sharp proximal spike in extension-type supracondylar fractures (Volkmann's ischemic contracture risk), and the mandatory identification and frequent anterior transposition of the **Ulnar Nerve** during surgical approaches (posterior triceps-splitting or olecranon osteotomy).

### Mathematical Boundary Coordinates & Centroids:
- **Supracondylar Metaphyseal Level**: $Y = -120$ (`cutCenter: [-23.3, -120.0, -11.8]`, `cutNormal: [0, 1, 0]`).
- **Intercondylar Sulcus Sagittal Split**: $X = -18$ (separates medial condyle/trochlea $X > -18$ from lateral condyle/capitellum $X \le -18$).
- **Coronal Shear Wafer Plane (Capitellum)**: $Z = -6$ within lateral condyle ($Y \le -120, X \le -18, Z > -6$).
- **Medial Condyle Centroid**: `[-5.29, -137.65, -5.30]` (`distGroup`).
- **Lateral Condyle Centroid**: `[-34.15, -133.71, -8.18]` (`shardGroup`).
- **Coronal Shear Wafer Centroid**: `[-33.74, -134.73, -1.82]` (`shardGroup`).
- **Distal Pivot Center**: Rotates directly around the supracondylar fracture level (`distBase: [-23.3, -120.0, -11.8]`).

| Type ID | Display Name | Badge | Partition Mode | Clinical Characteristics & 3D Deformity |
| :--- | :--- | :--- | :--- | :--- |
| `distal_humerus_typeA` | Type A | Extra-articular Supracondylar (13-A) | `humerus_distal_supracondylar` | **Extra-articular Supracondylar (AO 13-A)**: Metaphyseal transverse/oblique fracture above intact condylar block. Triceps pull tilts condyles into apex-anterior recurvatum (`distRot: [0.28, 0, 0]`, `distPos: [0, 3.0, -5.0]`). High risk of brachial artery kinking & median / AIN neuropraxia (Volkmann ischemic contracture danger). Closed reduction & percutaneous pinning (CRPP) in pediatrics; dual column plating in adults. |
| `distal_humerus_typeB_lateral` | Type B1 | Unicondylar Lateral Sagittal (13-B1) | `humerus_distal_unicondylar_lat` | **Unicondylar Sagittal Lateral Split (AO 13-B1)**: Partial articular fracture isolating the lateral column and capitellum ($X \le -18, Y \le -120$) with joint step-off (`shardPos: [-5.0, 3.5, -2.0]`, `shardRot: [0.10, 0.08, -0.20]`). Medial column and trochlea remain continuous with diaphysis. Anatomical reduction with lateral column buttress plate & interfragmentary lag screws. |
| `distal_humerus_typeB_coronal` | Type B3 | Coronal Shear Capitellum (13-B3) | `humerus_distal_coronal_shear` | **Coronal Shear Capitellum (Hahn-Steinthal / AO 13-B3)**: Anterior coronal wafer ($Z > -6$) of capitellum and lateral trochlea sheared off during axial load on flexed elbow (`shardPos: [0, 4.0, 7.5]`, `shardRot: [-0.25, 0, 0]`). Hidden on standard AP radiograph (crescent sign on lateral); mandatory 3D CT scan. Headless compression screws (Acutrak/Herbert) countersunk beneath articular cartilage. |
| `distal_humerus_typeC_simple` | Type C1 | Complete Bicondylar T/Y (13-C1) | `humerus_distal_bicondylar` | **Complete Articular Bicondylar T/Y Split (AO 13-C1)**: Both columns split through trochlear groove ($X = -18$) and completely dissociated from humeral shaft (`distRot: [0.22, 0, 0.12]`, `shardPos: [-4.5, 2.0, -4.0]`, `proxPos: [0, -3.0, 3.0]`). Anatomical joint reduction with intercondylar lag screws first, followed by stable parallel or orthogonal (90-90) dual-column locking plates. |
| `distal_humerus_typeC_comminuted` | Type C3 | Shattered Articular & Metaphyseal (13-C3) | `humerus_distal_bicondylar` | **Articular & Metaphyseal Comminuted (AO 13-C3)**: Severely shattered multi-fragment comminution across trochlea, capitellum, and columns with complete loss of mechanical stability (`distPos: [3.5, 3.0, -5.0]`, `shardPos: [-6.0, 3.5, -5.5]`). Total Elbow Arthroplasty (TEA) indicated in low-demand elderly; complex dual column locked anatomical reconstruction with ulnar nerve neurolysis and transposition in younger patients. |

---

## 4.8 Complete AC Joint Injury (Rockwood Classification Types I–VI) 3D Presets

Acromioclavicular (AC) joint injuries occur from direct trauma to the lateral acromion, resulting in progressive disruption of the Acromioclavicular (AC) capsular ligaments, Coracoclavicular (CC) suspensory ligaments (conoid and trapezoid), and deltotrapezial muscular fascia.

### Dual-Mesh Shoulder Girdle Kinematics:
Visualizing an AC joint injury requires relational anatomy between the **Clavicle** and the **Scapula** (Acromion, Coracoid process, Glenoid, and Scapular blade):
1. **Scapula Ground Foundation (`distalGroup`)**: Remains stationary at $(0, 0, 0)$, providing the anatomical baseline for the acromion facet and coracoid beak.
2. **Clavicle SC Joint Fulcrum (`proximalPivotGroup`)**: Pivots around the medial **Sternoclavicular (SC) joint** (`cutCenter: [65.0, 45.0, 65.0]`). As the distal clavicle displaces vertically, horizontally, or rotatory per Rockwood Types I–VI, the medial clavicle stays anatomically anchored at the sternum.

### Mathematical Coordinates & Landmarks (Combined Centered Space):
- **AC Joint Articular Facet**: `[-55.5, 76.3, -5.3]` (world: `[-0.97, 1.33, -0.09]`).
- **Coracoid Process Tip**: `[-44.7, 53.2, 31.9]` (world: `[-0.78, 0.93, 0.56]`).
- **SC Joint Medial Clavicle Fulcrum**: `[65.0, 45.0, 65.0]` (`cutCenter`).
- **Camera Focal Center**: `[-0.85, 1.10, 0.10]` (aimed directly at the AC joint facet and CC ligament corridor).

### Anatomical Ligament Suspension System & Disruption Protocol:
To reflect authentic clinical orthopedic anatomy, 4 distinct anatomical ligament complexes are dynamically synthesized between the Scapula and Clavicle:
1. **Acromioclavicular (AC) Capsular Ligament**:
   - Origin: Acromion articular facet `[-56.05, 75.92, -5.08]` (Scapula stationary baseline).
   - Insertion: Clavicular acromial facet `[-54.91, 76.63, -5.44]` (Dynamic Clavicle).
   - Resting length: ~1.4 mm across joint line.
   - Status: **Intact** in Normal / Type I; **Ruptured** with visible crimson hemorrhagic torn tips in Types II, III, IV, V, VI.
2. **Conoid Ligament (Posteromedial Coracoclavicular CC)**:
   - Origin: Coracoid process base/knee `[-38.32, 54.44, 15.46]` (Scapula).
   - Insertion: Clavicle conoid tubercle `[-35.38, 76.52, -16.13]` (Dynamic Clavicle).
   - Resting length: ~38.8 mm; inverted cone morphology (`rx: 3.2, rz: 2.4`).
   - Status: **Intact** in Normal, Type I, and Type II (stretches taut across <25% elevation); **Ruptured** with retracted stumps and gap in Types III, IV, V, VI.
3. **Trapezoid Ligament (Anterolateral Coracoclavicular CC)**:
   - Origin: Coracoid horizontal superior surface `[-47.06, 59.64, 27.65]` (Scapula).
   - Insertion: Clavicle trapezoid line `[-45.41, 75.94, -15.63]` (Dynamic Clavicle).
   - Resting length: ~45.7 mm; quadrilateral flat fibrous band (`rx: 3.5, rz: 1.8`).
   - Status: **Intact** in Normal, Type I, and Type II; **Ruptured** in Types III, IV, V, VI.
4. **Coracoacromial (CA) Ligament**:
   - Origin: Coracoid apex tip `[-44.69, 53.22, 31.92]` (Scapula).
   - Insertion: Acromion anterior tip `[-65.93, 76.69, 7.51]` (Scapula).
   - Spans entirely on the scapula as the subacromial arch; **100% Intact** across all Rockwood injury types.

#### Dynamic Kinematic Transformation Formula:
Because the Clavicle rotates and translates inside `proximalPivotGroup` anchored at `cutCenter: [65.0, 45.0, 65.0]`, each Clavicle insertion point is transformed in real-time inside the render loop without GC allocations:
$$\vec{P}_{\text{clavicle\_world}} = \mathbf{Q}_{\text{pivot}} \cdot (\vec{P}_{\text{raw}} - \vec{C}_{\text{cut}}) + \vec{P}_{\text{pivot}}$$

#### Visual PBR Shading & Rupture Representation:
- **Intact Ligament Material**: Pearly fibrous collagen tone (`color: 0xF1F5F9`, `roughness: 0.38`, `metalness: 0.06`).
- **Torn Stump / Hemorrhagic Cap Material**: Acute arterial torn tissue (`color: 0xDC2626`, `emissive: 0x991B1B`, `emissiveIntensity: 0.35`).
- **Rupture Gap**: Stumps are capped proportionally ($L_{\text{stump}} \le 0.36 \cdot L_{\text{total}}$), rendering an unmistakable physical rupture void.
- **UI Integration**: `[ 🩺 Ligaments ]` toggle button in top floating header and dynamic status ribbon (`CA`, `AC`, `CC`) in the Clinical Pearl Card.

| Type ID | Display Name | Badge | Partition Mode | Clinical Characteristics & 3D Deformity |
| :--- | :--- | :--- | :--- | :--- |
| `rockwood_type1` | Type I | AC Sprain / Normal (Type I) | `ac_joint_rockwood` | **Rockwood Type I**: AC ligament sprained; CC ligaments intact; normal radiograph (CC distance <1.3 cm). 0.000 mm gapless alignment (`proxPos: [0, 0, 0]`, `proxRot: [0, 0, 0]`). Non-operative arm sling 7–10 days; early full ROM. |
| `rockwood_type2` | Type II | AC Torn / Subluxation <25% (Type II) | `ac_joint_rockwood` | **Rockwood Type II**: AC ligament torn; CC ligaments sprained; distal clavicle subluxated <25% of bone diameter (`proxPos: [0, 3.5, 0]`, `proxRot: [0, 0, -0.05]`). Horizontal stability maintained. Conservative sling 1–2 wks; rotator cuff & periscapular rehab. |
| `rockwood_type3` | Type III | Complete Dislocation 25-100% (Type III) | `ac_joint_rockwood` | **Rockwood Type III**: Both AC and CC ligaments completely torn; distal clavicle elevated 25%–100% (`proxPos: [0, 11.5, 0]`, `proxRot: [0, 0, -0.15]`). Prominent clinical piano key sign. Conservative sling 2–3 wks first-line; operative CC reconstruction (TightRope / Hook plate) for overhead athletes & heavy laborers. |
| `rockwood_type4` | Type IV | Posterior into Trapezius (Type IV) | `ac_joint_rockwood` | **Rockwood Type IV**: Distal clavicle displaced **posteriorly into or through the trapezius muscle** (`proxPos: [0, 2.0, -22.0]`, `proxRot: [-0.18, 0.28, -0.08]`). Hidden on AP view; **mandatory Axillary Lateral or Alexander view**. Buttonholed in trapezius; closed reduction impossible; mandatory open reduction & CC reconstruction. |
| `rockwood_type5` | Type V | Severe Superior >100-300% (Type V) | `ac_joint_rockwood` | **Rockwood Type V**: Gross superior displacement >100% to 300% with stripped deltotrapezial fascia (`proxPos: [0, 26.0, 0]`, `proxRot: [0, 0, -0.30]`). Severe subcutaneous skin tenting (risk of skin necrosis). Urgent anatomical reduction, dual CC suture tape button fixation, and robust deltotrapezial repair. |
| `rockwood_type6` | Type VI | Inferior Subcoracoid (Type VI) | `ac_joint_rockwood` | **Rockwood Type VI**: Rare high-energy injury; distal clavicle driven **inferiorly and locked underneath the coracoid process** (`proxPos: [13.0, -16.0, 19.0]`, `proxRot: [-0.07, 0.03, 0.21]`). High risk of brachial plexus traction and axillary vessel stretch; emergency surgical disimpaction and neurovascular decompression. |

---

### 4.9 Clavicle Shaft (Edinburgh / Robinson / AO 15.2 / Allman I) Protocol

Midshaft fractures represent ~80% of all clavicle fractures, occurring at the transition between the middle and outer thirds where the cross-section transitions from tubular to flat, lacking muscular and ligamentous reinforcement.

#### Mathematical Coordinate Map & Fulcrum:
- **Clavicle Bounding Box**: $X \in [-57.21, 78.40]$, $Y \in [38.92, 85.74]$, $Z \in [-16.52, 76.02]$.
  - $+X$: Medial (Sternoclavicular joint).
  - $-X$: Lateral (Acromioclavicular joint).
  - $+Y$: Superior (Neck / SCM pull).
  - $-Y$: Inferior (Pectoralis / Arm weight pull).
  - $+Z$: Anterior.
  - $-Z$: Posterior.
- **Sternoclavicular (SC) Joint Fulcrum**: `[70.0, 50.0, 60.0]` (`basePivot` around which medial fragment rotates).
- **Midshaft Fracture Center**: `[10.0, 65.0, 37.0]` ($X = 10.0$).
- **Medial Third Fracture Plane (Allman III)**: $X = 33.0$.
- **Camera Focal Framing**: Target `[0.15, 1.12, 0.55]`, Distance `2.70`, ViewOffset `0.10`.

#### Muscular Deforming Forces & Bayonet Kinematics:
1. **Proximal (Medial) Fragment**:
   - Pulled **superiorly and tilted posteriorly** by the **Sternocleidomastoid (SCM)** muscle.
   - Pinned at the SC joint fulcrum via the anterior/posterior sternoclavicular and costoclavicular ligaments.
2. **Distal (Lateral) Fragment & Shoulder Girdle**:
   - Displaced **inferiorly** by the weight of the upper extremity.
   - Drawn **medially and anteriorly** by the **Pectoralis Major** and **Latissimus Dorsi**, causing shortening $>2\text{ cm}$ and bayonet apposition.
3. **Synchronous Ligament Kinematics**:
   - Because AC (`X = -54.91`), Conoid (`X = -35.38`), and Trapezoid (`X = -45.41`) insertions all lie on the lateral fragment ($X \le -35$), they remain **100% intact and taut**, anchoring the lateral clavicle securely to the dropping/shortening scapula.

#### 3-Fragment Comminution Geometries (Triangle Conservation: 1,146 faces):
- **Inferior Butterfly Wedge (`clavicle_shaft_butterfly`)**:
  - Mask: $X \in [3.0, 17.0]$ and $Y \le 66.0$ (46 faces).
  - Centroid: `[9.42, 62.19, 42.41]`.
  - Driven inferiorly and rotated downward by subclavius and chest wall recoil.
- **Vertical Z-Fragment (Impending Skin Tenting)**:
  - High-risk vertical spike orientation ($R_z \approx +1.48\text{ rad} \approx 85^\circ$, elevation $+14\text{ mm}$).
  - Tents and blanches supraclavicular skin, creating an impending open fracture emergency.
- **Segmental Double Diaphyseal (`clavicle_shaft_segmental`)**:
  - Mask: $X \in [-2.0, 22.0]$ (176 faces).
  - Centroid: `[8.07, 65.78, 36.58]`.
  - Floating intercalary diaphyseal cylinder undergoing segmental devascularization risk.

| Type ID | Display Name | Badge | Partition Mode | Clinical Characteristics & 3D Deformity |
| :--- | :--- | :--- | :--- | :--- |
| `shaft_robinson_2a_undisplaced` | Type 2A | 2A: Undisplaced (<100%) | `clavicle_shaft_bipartite` | **Robinson Type 2A (AO 15.2A1)**: Hairline cortical crack with $>50\%$ cortical contact. Anatomical alignment (`proxPos: [0, 0, 0]`, `distPos: [0, 0, 0]`). Conservative treatment with arm sling or figure-of-eight bandage for 3–4 weeks; early pendulum exercises. Nonunion rate $<1\%$. |
| `shaft_robinson_2b1_displaced` | Type 2B1 | 2B1: Displaced Simple | `clavicle_shaft_bipartite` | **Robinson Type 2B1 (AO 15.2A2/A3)**: Complete displacement ($100\%$ translation) with $>2\text{ cm}$ shortening. SCM elevates medial fragment (`proxRot: [0.08, 0, 0.22]`, $+12\text{ mm}$ lift); arm weight & pectoralis pull lateral fragment inferiorly/medially (`distPos: [14, -16, 8]`). Strong indication for ORIF with superior/anteroinferior anatomical LCP plate to prevent malunion, shoulder ptosis, and rotator cuff weakness. |
| `shaft_robinson_2b2_butterfly` | Type 2B2 | 2B2: Butterfly Wedge | `clavicle_shaft_butterfly` | **Robinson Type 2B2 (AO 15.2B)**: 3-part fracture with comminuted inferior triangular butterfly fragment (`shardPos: [2, -18, 6]`, `shardRot: [0.25, 0, -0.35]`). High nonunion rate ($15\%–20\%$) with conservative management. Requires anatomical plate fixation (3.5 mm reconstruction or precontoured LCP) with lag screw neutralization or bridge plating preserving periosteal blood supply. |
| `shaft_vertical_z_fragment` | Z-Fragment | Vertical Spike (Tenting) | `clavicle_shaft_butterfly` | **Vertical Z-Fragment (Skin Tenting Emergency)**: Comminuted intermediate fragment rotated vertically $85^\circ$ (`shardRot: [0.1, 0, 1.48]`, `shardPos: [0, 14, 10]`) pointing directly into the subcutaneous layer. Blanches the skin with imminent risk of necrotic conversion into an open fracture. Urgent open reduction and internal fixation is mandatory. |
| `shaft_segmental_double` | Segmental | Segmental (AO 15.2C) | `clavicle_shaft_segmental` | **AO/OTA 15.2C Segmental Diaphyseal Fracture**: Complete segmental fracture with a free diaphyseal cylinder (`shardPos: [8, -8, 6]`, `shardRot: [0.08, 0.15, -0.18]`). Extreme risk of avascular nonunion. Treated with bridge plating spanning the entire clavicle length (minimum 3 bicortical screws on each main segment), strictly avoiding soft tissue stripping on the intercalary fragment. |
| `shaft_allman_group3_medial` | Allman III | Allman III: Medial 1/3 | `clavicle_shaft_bipartite` | **Allman Group III (AO 15.1)**: Medial clavicle fracture ($5\%$ of cases) cut at $X=33.0$. Often associated with high-energy blunt chest trauma. Displaced fragments carry high danger to retrosternal neurovascular structures (subclavian vessels, common carotid, brachiocephalic vein). Urgent CT Angiography (CTA) required if posterior displacement is noted. |

---

### 4.10 Distal Clavicle (Neer Classification Types I–V) Protocol

Distal (lateral third) clavicle fractures account for ~15% of all clavicle fractures. The cornerstone of the Neer classification is the relationship between the fracture line and the **Coracoclavicular (CC) ligament complex** (Conoid and Trapezoid ligaments), which dictates fragment stability and nonunion rates.

#### Mathematical Coordinate Landmarks & Ligament Insertions:
- **AC Joint Articular Facet**: `[-54.91, 76.63, -5.44]` ($X \approx -55$)
- **Trapezoid Line**: `[-45.41, 75.94, -15.63]` ($X \approx -45.4$)
- **Conoid Tubercle**: `[-35.38, 76.52, -16.13]` ($X \approx -35.4$)
- **Sternoclavicular (SC) Joint Fulcrum**: `[70.0, 50.0, 60.0]` (`proxPivotCenter` & `basePivot`)
- **Camera Focal Framing**: Target `[-0.60, 1.15, 0.15]`, Distance `2.45`, ViewOffset `0.10`

#### Ligament Disruption & Kinematic Rules:
1. **Neer Type I (Stable)**:
   - Fracture line lateral to or between intact CC ligaments ($X = -45.0$).
   - Both Conoid and Trapezoid ligaments remain intact and attached to the proximal fragment. Normal radiograph with stable CC interval.
2. **Neer Type IIA (Unstable - Medial to CC)**:
   - Fracture line is **medial to both CC ligaments** ($X = -28.0$).
   - Both Conoid and Trapezoid ligaments remain attached to the **distal fragment** ($X \le -28.0$).
   - Proximal fragment is stripped of all CC restraint, pulled superiorly by Trapezius and SCM ($+2.5\text{ mm}$ pos, $R_z = -0.075$, net $\approx 9.8\text{ mm}$ anatomical step-off).
   - High nonunion rate (~30%–40%) $\implies$ ORIF with Distal Clavicle Locking Plate + CC augmentation.
3. **Neer Type IIB (Unstable - Conoid Torn)**:
   - Fracture line is **between the CC ligaments** ($X = -40.0$).
   - The **Conoid ligament is TORN / RUPTURED** (rendered with crimson hemorrhagic stumps and open gap).
   - The Trapezoid ligament remains intact and anchored to the distal fragment.
   - Proximal fragment displaces superiorly ($+3.0\text{ mm}$ pos, $R_z = -0.085$, net $\approx 11.3\text{ mm}$ step-off).
   - High nonunion rate $\implies$ mandatory ORIF + Conoid ligament reconstruction / CC tape.
4. **Neer Type III (Stable - Intra-articular AC Joint)**:
   - Fracture line extends directly into the AC joint facet ($X = -52.0$).
   - CC ligaments remain intact on proximal fragment; vertical stability maintained.
   - Long-term risk: post-traumatic AC joint osteoarthritis (treated with Mumford distal clavicle resection).
5. **Neer Type IV (Stable - Pediatric Periosteal Sleeve Disruption)**:
   - In skeletally immature patients (<18 yo), proximal fragment erupts superiorly ($+1.5\text{ mm}$ pos, $R_z = -0.05$, net $\approx 6.4\text{ mm}$ step-off) through a dorsal split in the thick periosteal sleeve.
   - CC ligaments remain anchored to the intact periosteal sleeve and distal cartilage cap. Excellent remodeling potential in children $\implies$ conservative sling 3–4 weeks.
6. **Neer Type V (Unstable - Comminuted with Inferior CC Avulsion Shard)**:
   - Comminuted 3-fragment fracture (`clavicle_distal_neer_v`).
   - Small inferior cortical avulsion shard ($X \in [-48.0, -33.0], Y \le 75.0$, 29 faces, centroid `[-42.1, 73.8, -13.5]`) retains both Conoid and Trapezoid ligaments.
   - Shard pulled inferiorly towards coracoid (`shardPos: [0, -3.5, 1.0]`, `shardRot: [0.06, 0, -0.08]`).
   - Main proximal fragment is dissociated and elevates superiorly ($+2.5\text{ mm}$ pos, $R_z = -0.075$, net $\approx 9.8\text{ mm}$ step-off).
   - Distal articular fragment remains at AC joint. Guaranteed nonunion if non-operative $\implies$ urgent ORIF.

| Preset ID | Display Title | Badge | Partition Mode | Biomechanical & Clinical Features |
| :--- | :--- | :--- | :--- | :--- |
| `neer_type1_distal` | Neer I | Neer I: Minimally Displaced | `clavicle_shaft_bipartite` | Cut at $X=-45$. Both CC ligaments intact on proximal fragment; stable AC joint. Sling 3–4 wks; union $>95\%$. |
| `neer_type2a_distal` | Neer IIA | Neer IIA: Medial to CC | `clavicle_shaft_bipartite` | Cut at $X=-28$ (medial to Conoid & Trapezoid). Both CC ligaments attached to distal fragment; proximal fragment elevates $\approx 9.8\text{ mm}$ via Trapezius/SCM. Nonunion ~30%–40% without ORIF. |
| `neer_type2b_distal` | Neer IIB | Neer IIB: Between CC (Conoid Torn) | `clavicle_shaft_bipartite` | Cut at $X=-40$ (between Conoid and Trapezoid). **Conoid ligament ruptured** with hemorrhagic stumps; Trapezoid intact on distal fragment; proximal elevates $\approx 11.3\text{ mm}$. Mandatory ORIF + CC reconstruction. |
| `neer_type3_distal` | Neer III | Neer III: Intra-articular AC Joint | `clavicle_shaft_bipartite` | Cut at $X=-52$ extending into AC facet. CC ligaments intact; vertical alignment stable. Conservative sling; monitor for late AC osteoarthritis (Mumford procedure). |
| `neer_type4_distal` | Neer IV | Neer IV: Pediatric Sleeve | `clavicle_shaft_bipartite` | Pediatric injury (<18 yo). Proximal fragment erupts $\approx 6.4\text{ mm}$ through periosteal sleeve; CC ligaments intact in sleeve. High remodeling potential; sling 3–4 wks. |
| `neer_type5_distal` | Neer V | Neer V: CC Avulsion Shard | `clavicle_distal_neer_v` | Comminuted 3-fragment fracture with inferior CC avulsion shard (29 faces, `[-42.1, 73.8, -13.5]`) holding CC ligaments. Highly unstable; ORIF with precontoured locking plate + CC augmentation. |

---

## 4.10 Complete Schatzker Classification (Tibial Plateau Types I–VI) 3D Presets

Tibial plateau fractures occur across the proximal articular surface of the tibia, classified under Schatzker's paradigm based on fracture pattern, degree of articular depression, and kinetic energy (low-energy Types I–III vs high-energy Types IV–VI).

### Mathematical Boundary Coordinates & Anatomical Landmarks:
- **Medical Mesh Coordinate Space**:
  - **$+X$ (Medial)**: Medial tibial plateau (`[+18.77, 188.93, -2.31]`) and medial malleolus.
  - **$-X$ (Lateral)**: Lateral tibial plateau (`[-18.07, 188.30, -4.81]`) and Fibula (`[-24.00, -7.33, -18.36]`).
  - **$+Y$ (Superior / Proximal)**: Intercondylar eminence apex ($Y \approx +199.54$), plateau subchondral surface ($Y \approx 188.0$).
  - **$-Y$ (Inferior / Distal)**: Tibial diaphysis and distal plafond ($Y \approx -199.54$).
  - **$+Z$ (Anterior)**: Tibial tuberosity (`[-10.09, 166.06, 33.16]`) and anterior shin crest.
  - **$-Z$ (Posterior)**: Posterior intercondylar area, popliteal notch, and soleal line.
- **Metaphyseal Dissociation Boundary**: $Y = 155.0$ (separates proximal articular block from diaphysis in Type VI).
- **Articular Split/Depression Boundaries**:
  - Lateral Split Wedge: $X \le -10.0, Y \ge 165.0$.
  - Depressed Central Articular Facet: $-18.0 \le X \le -2.5, Y \ge 170.0$ (Schatzker II) / $-23.0 \le X \le -2.5, Y \ge 172.0$ (Schatzker III).
  - Intact Outer Lateral Rim (Schatzker III): $X < -23.0, Y \ge 170.0$.
  - Medial Plateau Condyle: $X \ge 2.0, Y \ge 162.0$.
- **Camera Focal Center**: `[0.02, 1.40, 0.0]`, Distance: `3.20`, View Offset: `0.16`.
- **Radiographic Views**: AP (`[0, 0, 1]`) and True Lateral (`[-1, 0, 0]`).

| Preset ID | Display Name | Badge | Partition Mode | Clinical Characteristics & 3D Deformity |
| :--- | :--- | :--- | :--- | :--- |
| `schatzker_1` | Type I | Pure Lateral Split | `schatzker_1` | **Pure Cleavage / Split Wedge (Low Energy)**: Vertical split of lateral plateau without central depression (`shardPos: [-6.0, -1.0, 0]`, `shardRot: [0, 0, -0.10]`). Seen in young patients with dense cancellous bone. ORIF with two 6.5/7.3mm cannulated cancellous lag screws; inspect lateral meniscus (frequently trapped in fracture gap). |
| `schatzker_2` | Type II | Split-Depression | `schatzker_2` | **Split-Depression (Most Common ~25-30%)**: Lateral wedge split (`shardPos: [-7.0, -2.0, 0]`, `shardRot: [0, 0, -0.10]`) combined with impacted central articular facet sinking $8\text{ mm}$ down into subchondral bone (`hnPos: [-1.0, -8.0, 0]`, `hnRot: [0.04, 0, -0.08]`, $\approx 10.4\text{ mm}$ AP articular step-off). Common in older/osteopenic bone; requires cortical window elevation, bone void grafting, and lateral buttress plate. |
| `schatzker_3` | Type III | Pure Depression | `schatzker_3` | **Pure Central Articular Depression**: Central articular saucer depression sinking $8\text{ mm}$ down (`hnPos: [0, -8.0, 0]`, `hnRot: [0.04, 0, -0.08]`) inside an **intact peripheral lateral cortical rim** ($X < -23.0$, crater depth $\approx 7.6\text{ mm}$). Low-energy axial load in osteoporotic bone. Elevate depressed articular block via anterolateral cortical metaphyseal window and support with bone graft + subchondral raft screws. |
| `schatzker_4` | Type IV | Medial Plateau / Dislocation | `schatzker_4` | **Medial Plateau Fracture-Dislocation (High Energy)**: Split or split-depression of medial plateau (`hnPos: [8.5, -4.5, -2.0]`, `hnRot: [0.08, 0, 0.16]`). High kinetic energy; severe varus collapse. **Extreme risk of Popliteal Artery transection and Peroneal nerve traction injury** (mandatory ABI & CTA if asymmetric pulses); rigid medial buttress/anti-glide plating. |
| `schatzker_5` | Type V | Bicondylar Plateau | `schatzker_5` | **Bicondylar Plateau Split (Intact Shaft Bridge)**: Both medial (`hnPos: [6.5, -3.5, 0]`) and lateral (`shardPos: [-6.5, -3.5, 0]`) plateaus fractured and splayed outward, but metaphyseal-diaphyseal continuous spine intact. High-energy axial compression; dual locked plating (medial + lateral) or hybrid fixator. |
| `schatzker_6` | Type VI | Metaphyseal Dissociation | `schatzker_6` | **Articular Plateau with Metaphyseal-Diaphyseal Dissociation**: Complete transverse/oblique separation of articular block from tibial diaphysis ($Y = 155.0$); shaft telescopes and angulates (`distPos: [2.0, -8.5, -3.5]`, `distRot: [0.12, 0, 0.08]`). Extreme kinetic trauma, severe soft tissue degloving, and high **COMPARTMENT SYNDROME** risk. Mandatory staged protocol: temporary spanning knee Ex-Fix until soft tissue wrinkles, then definitive dual plating. |

---

## 5. Camera & Optical Framing System

To prevent floating bone fragments from dipping behind bottom control decks or clipping the upper viewport header, dynamic optical offsets are applied via Three.js `camera.setViewOffset()`:

```typescript
const height = container.clientHeight || window.innerHeight;
const yOffset = Math.round(height * subregion.viewOffsetRatio);
camera.setViewOffset(width, height, 0, yOffset, width, height);
```

### Subregion Optical Offset Ratios:
- **Femoral Neck (`0.20`, distance `3.0`)**: Centers the femoral head and neck prominently with ~140px margins top and bottom.
- **Intertrochanteric (`0.14`, distance `3.0`)**: Displays the greater/lesser trochanters and proximal shaft with balanced ~114px upper clearance.
- **Subtrochanteric (`0.08`, distance `3.2`)**: Accommodates the longer subtrochanteric fragment (~5cm below LT) while keeping the femoral head comfortably ~90px below the header.
- **Femoral Shaft (`0.05`, distance `3.8`)**: Displays the full diaphyseal cylinder from isthmus to supracondylar junction with balanced clearance above bottom control decks.
- **Distal Femur (`0.04`, distance `3.1`)**: Focuses on the femoral condyles and trochlea with balanced clearance keeping condyles floating above bottom decks and diaphysis intact below top header.
- **Proximal Humerus (`0.18`, distance `2.8`)**: Focuses on the humeral head, tuberosities, and surgical neck with balanced upper/lower joint clearance.
- **Humeral Shaft (`0.10`, distance `3.2`)**: Displays the humeral diaphysis from surgical neck to supracondylar ridges with ~100px margins.
- **Distal Humerus (`0.02`, distance `2.85`)**: Centers the capitellum, trochlea, epicondyles, and supracondylar columns comfortably within the open viewing area without clipping at the top or hovering too high.
- **AC Joint / Clavicle (`0.10`, distance `2.30`)**: Focuses tightly on the AC joint facet, distal clavicle, and coracoid process with balanced clearance above bottom classification cards.
- **Whole Bone (`0.07`, distance `4.2` for Clavicle/Shoulder Girdle, `4.6` for Humerus, `5.3` for Femur)**: Fits the complete bone from proximal articulation to distal condyles with ~75px safety padding.

### Viewport Toggle Placement Rule:
- The **`[ ⤢ Whole Bone ]` / `[ 🔍 Focus View ]`** button MUST reside exclusively in the top floating header next to the close button (`[ X ]`).
- Do NOT place whole bone toggles inside Tier 2/3 classification decks or clutter clinical badge headers.

### Radiographic Quick-Snap Views Protocol (ปุ่มลัดสแนปมุมมองมาตรฐานทางรังสีวิทยา):
- **UI Placement**: Positioned at `absolute top-16 left-4 sm:left-5 z-20` (floating glass deck beneath the bone title), avoiding occlusion of top-right header action buttons and bottom classification decks.
- **Micro Badge & Snap Buttons**: Features `🩻 Views` followed by bone-specific radiographic views:
  - **Femur**: `[ AP ]` (`[0, 0, 1]`), `[ Lat ]` (`[-1, 0, 0]`, Cross-table Lateral).
  - **Proximal Humerus**: `[ AP ]` (`[0, 0, 1]`, True AP / Grashey View).
  - **AC Joint / Clavicle**: `[ AP ]` (`[0, 0, 1]`), `[ Axillary ]` (`[0, 0.88, 0.47]`, Superior-Inferior Axial to diagnose Rockwood IV posterior displacement), `[ Lat ]` (`[-1, 0, 0]`).
  - **Patella**: `[ AP ]` (`[0, 0, 1]`), `[ Lat ]` (`[-1, 0, 0]`), `[ Skyline ]` (`[0, -0.86, 0.51]`, Tangential Merchant axial view scooped from below).
- **Spherical Slerp Camera Animation**: Uses quaternion great-circle slerp over 480ms with cubic ease-out so the camera rotates seamlessly around the orbital sphere without plunging into or cutting through the bone mesh.
- **Interactive Yielding**: OrbitControls `start` event listener immediately stops camera transition and resets the active snap view highlight when user begins manual finger rotation.

---

## 6. Performance & Re-slicing Optimization

1. **Partition Key Caching**:
   Cache key `"${center.join(',')}_${normal.join(',')}_${mode}"`. Only re-partition the mesh BufferGeometry when the plane or comminution mode actually changes.
2. **Smooth Morphing Lerp**:
   Animate fragment translations and rotations using continuous lerp ($\alpha \approx 0.12$) so fragments smoothly explode apart into comminution or fuse back together into intact bone at 60fps without hitching.

---

## 7. Procedural 3D Musculoskeletal Deforming Force Vectors Protocol

To visually educate clinicians on the musculoskeletal deforming forces that produce fracture displacement (without cluttered UI sliders or distracting animations):

### 1. Architectural Principles & Default State
1. **Hidden by Default (`showForces = false`)**:
   - When entering any 3D bone view or selecting fracture presets, force vectors MUST remain hidden by default to keep the visual field uncluttered for anatomical fracture inspection.
   - The user activates them strictly on-demand via the top header toggle button: `[ ⚡ Forces ]`.
   - On intact bone (`presetId === "intact"`), force vectors are automatically disabled (no deforming displacement forces present).
2. **Strictly Static Geometry — ZERO Stretching / Shrinking Animation**:
   - **MANDATORY RULE**: Do NOT add `Math.sin(...)` length pulses or dynamic scaling (`mag * (1 + 0.05 * sin(...))`).
   - Stretching/shrinking vectors distract clinicians, cause visual fatigue, and obscure the exact displacement vector.
   - Length MUST remain fixed and stable: $L_{\text{shaft}} = \max(1.0, L_{\text{magnitude}} - L_{\text{head}})$, $L_{\text{head}} = \min(8.0, L_{\text{magnitude}} \cdot 0.26)$.
   - Opacity (`0.68`) and emissive intensity (`0.25`) MUST remain constant and stable across frames.
3. **Outward Cortical Normal Offset (+2.0 mm Rule)**:
   - To prevent anchor spheres or vector shafts from sinking into or clipping inside the bone cortex mesh, ALWAYS apply an outward offset along the pull unit vector:
     ```typescript
     _scratchAnchor.set(cfg.originOffset[0], cfg.originOffset[1], cfg.originOffset[2]);
     if (targetMesh && modelWrapperRef.current) {
       targetMesh.localToWorld(_scratchAnchor);
       modelWrapperRef.current.worldToLocal(_scratchAnchor);
     }
     _scratchDir.set(cfg.direction[0], cfg.direction[1], cfg.direction[2]).normalize();

     // Offset anchor +2.0 mm along direction so it sits proud on the outer bone cortex
     _scratchAnchor.addScaledVector(_scratchDir, 2.0);
     ```
4. **Anatomical Outward Line-of-Pull Protocol**:
   - The force arrow MUST originate on the true outer cortical insertion site and point **OUTWARD into free space** along the anatomical line of action toward the muscle origin.
   - Vectors must NEVER point inward into the bone marrow, across the cortical shaft, or into the fracture void.

---

### 2. Geometry Assembly & Visual Styling
- **Anchor**: `SphereGeometry(1, 16, 16)` scaled to radius $2.0\text{ mm}$ (`scale.set(2, 2, 2)`).
- **Shaft**: `CylinderGeometry(1, 1, 1, 16)` scaled to radius $1.2\text{ mm}$ and height $L_{\text{shaft}}$.
- **Cone Head**: `ConeGeometry(1, 1, 16)` scaled to base radius $2.8\text{ mm}$ and height $L_{\text{head}}$.
- **Material**: Translucent frosted cool slate:
  ```typescript
  const material = new THREE.MeshStandardMaterial({
    color: 0x94A3B8,
    roughness: 0.35,
    metalness: 0.15,
    transparent: true,
    opacity: 0.68,
    depthWrite: false,
    emissive: 0x475569,
    emissiveIntensity: 0.25,
  });
  ```
- **Billboard Label Sprite**: $512 \times 140$ Canvas sprite with translucent slate badge, muscle short name, and clinical action. Rendered with `depthTest: false` and `renderOrder: 999` to float legibly above all bone geometry at offset $\vec{P}_{\text{anchor}} + \hat{D} \cdot (L_{\text{magnitude}} + 5.5)$.
- **OrbitControls & Event Safety**:
  - The render loop vector update MUST be wrapped in `try { ... } catch { }` so vector math can never halt `controls.update()` or `renderer.render()`.
  - Modal container `div` elements MUST NEVER use `e.stopPropagation()` handlers that intercept `pointermove` or `pointerup` on `document`, as this blocks React 19 / OrbitControls rotation.

---

### 3. Master Audited Coordinates & Direction Vectors Database

All coordinates below are validated against raw Three.js centered model space ($+Y$ proximal, $+Z$ anterior):

#### A. Proximal Humerus & Humeral Shaft
*Coordinate space: $+X$ is Medial (Humeral Head), $-X$ is Lateral (GT & Deltoid Tuberosity), $+Z$ is Anterior (Bicipital groove & LT), $-Z$ is Posterior (Infraspinatus & Triceps).*

| Vector ID | Muscle / Force | Subregion | Parent Target | Anchor `originOffset` $[X, Y, Z]$ | Unit `direction` $[D_x, D_y, D_z]$ | Magnitude | Clinical Mechanism |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `hprox_supraspinatus` | Rotator Cuff (GT) | `proximal` | `"gt"` | `[16.0, 148.0, 0.0]` | `[0.35, 0.90, -0.25]` | 32.0 | Posterosuperior pull on GT toward supraspinous fossa of scapula. |
| `hprox_subscapularis` | Subscapularis (LT) | `proximal` | `"lt"` | `[24.0, 130.0, 24.5]` | `[0.65, 0.20, 0.73]` | 30.0 | Anteromedial pull on LT toward subscapular fossa. |
| `hprox_pect` | Pectoralis Major | `proximal` | `"distal"` | `[6.0, 70.0, 10.5]` | `[0.85, 0.25, 0.45]` | 34.0 | Medial adduction & anterior pull on shaft fragment toward sternum. |
| `hshaft_deltoid` | Deltoid | `shaft` | `"proximal"` | `[-13.0, 30.0, -4.0]` | `[-0.85, 0.50, 0.15]` | 32.0 | Abduction pull on proximal fragment toward acromion. |
| `hshaft_pect` | Pectoralis Major | `shaft` | `"proximal"` | `[6.0, 65.0, 10.5]` | `[0.88, 0.25, 0.40]` | 32.0 | Adduction & internal rotation pull on proximal fragment. |
| `hshaft_arm` | Biceps & Triceps | `shaft` | `"distal"` | `[-10.0, -40.0, 2.0]` | `[0.0, 0.95, 0.30]` | 32.0 | Proximal shortening & bayonet overlap. |
| `hdist_triceps` | Triceps Brachii | `distal` | `"distal"` | `[-34.0, -120.0, -24.5]` | `[0.0, 0.65, -0.76]` | 32.0 | Posterior & superior displacement on distal condylar block. |
| `hdist_brachialis` | Brachialis / Biceps | `distal` | `"proximal"` | `[-10.0, -95.0, 4.0]` | `[0.0, 0.85, 0.52]` | 32.0 | Anterior shaft shortening & flexion moment. |

#### B. Femur (Proximal, Intertrochanteric, Subtrochanteric, Shaft, Distal)
*Coordinate space: $+X$ is Medial (Femoral Head & calcar), $-X$ is Lateral (Greater Trochanter), $+Z$ is Anterior, $-Z$ is Posterior (Lesser Trochanter & Linea Aspera).*

| Vector ID | Muscle / Force | Subregion | Parent Target | Anchor `originOffset` $[X, Y, Z]$ | Unit `direction` $[D_x, D_y, D_z]$ | Magnitude | Clinical Mechanism |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `fn_shortening` | Abductors / Hamstrings | `femoral-neck` | `"distal"` | `[-50.0, 202.0, -8.0]` | `[-0.15, 0.97, 0.18]` | 34.0 | Proximal telescoping & vertical shear displacement. |
| `fn_extrot` | External Rotators | `femoral-neck` | `"distal"` | `[-8.0, 142.0, -22.0]` | `[0.55, 0.45, -0.70]` | 30.0 | External rotation roll of distal fragment. |
| `it_abductors` | Glut Med / Abductors | `intertrochanteric` | `isGt ? "gt" : "proximal"` | `[-50.0, 202.0, -8.0]` | `[-0.90, 0.44, 0.0]` | 34.0 | Superolateral pull (abduction) on GT fragment toward iliac wing. |
| `it_iliopsoas` | Iliopsoas | `intertrochanteric` | `isLt ? "lt" : "proximal"` | `[-8.0, 142.0, -22.0]` | `[0.35, 0.70, 0.62]` | 32.0 | Anteromedial & superior pull on avulsed LT toward lumbar spine. |
| `it_adductors` | Adductor Group | `intertrochanteric` | `"distal"` | `[-4.0, 75.0, 4.0]` | `[0.72, 0.69, 0.0]` | 34.0 | Medial pull & varus shortening on femoral shaft. |
| `subtroch_iliopsoas` | Iliopsoas | `subtrochanteric` | `isLt ? "lt" : "proximal"` | `[-8.0, 142.0, -22.0]` | `[0.35, 0.70, 0.62]` | 34.0 | Intense flexion, external rotation, and anteromedial displacement of proximal fragment. |
| `subtroch_abductors` | Gluteus Medius | `subtrochanteric` | `"proximal"` | `[-50.0, 202.0, -8.0]` | `[-0.90, 0.44, 0.0]` | 34.0 | Lateral abduction tilt on proximal fragment. |
| `subtroch_adductors` | Adductor Group | `subtrochanteric` | `"distal"` | `[-4.0, 70.0, 4.0]` | `[0.72, 0.69, 0.0]` | 34.0 | Medial adduction & proximal shortening of distal shaft. |
| `fs_proximal` | Abductors & Flexors | `shaft` | `"proximal"` | `[-30.0, 110.0, 0.0]` | `[-0.70, 0.55, 0.45]` | 34.0 | Flexion & abduction tilt on upper shaft segment. |
| `fs_distal` | Adductors & Hamstrings | `shaft` | `"distal"` | `[-4.0, -20.0, 2.0]` | `[0.65, 0.75, 0.12]` | 34.0 | Proximal shortening & adduction overlap. |
| `df_gastrocnemius` | Gastrocnemius | `distal` | `"distal"` | `[15.0, -195.0, -28.0]` | `[0.0, -0.65, -0.76]` | 34.0 | Apex-posterior recurvatum hyperextension endangering popliteal vessels. |
| `df_quadriceps` | Quadriceps | `distal` | `"proximal"` | `[-6.0, -120.0, 24.0]` | `[0.0, 0.95, 0.31]` | 34.0 | Anterior proximal shaft shortening. |

#### C. Clavicle & Shoulder Girdle
*Coordinate space: $+X$ is Medial (Sternoclavicular joint), $-X$ is Lateral (Acromioclavicular joint), $+Y$ is Superior, $-Y$ is Inferior.*

| Vector ID | Muscle / Force | Subregion | Parent Target | Anchor `originOffset` $[X, Y, Z]$ | Unit `direction` $[D_x, D_y, D_z]$ | Magnitude | Clinical Mechanism |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `clav_scm` | SCM | `shaft` | `"proximal"` | `[38.0, 62.0, 50.0]` | `[0.0, 0.92, -0.38]` | 34.0 | Posterosuperior elevation of medial fragment toward mastoid process. |
| `clav_pect_arm` | Pect Major / Arm | `shaft` | `"distal"` | `[-18.0, 66.0, 18.0]` | `[0.42, -0.88, 0.22]` | 36.0 | Inferior sag (arm weight) and anteromedial displacement (pectoralis). |
| `clav_dist_trap` | Trapezius / SCM | `distal` | `"proximal"` | `[15.0, 64.0, 30.0]` | `[0.0, 0.92, -0.38]` | 34.0 | Superior pull on stripped proximal fragment in Neer II. |
| `clav_dist_gravity` | Arm Weight | `distal` | `"distal"` | `[-72.0, 68.0, -10.0]` | `[-0.20, -0.98, 0.0]` | 34.0 | Inferior depression of distal fragment and lateral shoulder girdle (lateral acromion line). |
| `ac_trap` | Trapezius | `ac-joint` | `"proximal"` | `[-38.0, 72.0, -8.0]` | `[0.0, 0.95, -0.31]` | 34.0 | Superior clavicular elevation in Rockwood III-V. |
| `ac_arm` | Arm Weight | `ac-joint` | `"distal"` | `[-72.0, 68.0, -10.0]` | `[-0.20, -0.98, 0.0]` | 34.0 | Downward displacement of scapula/acromion creating step-off. |

#### D. Patella & Knee Extensor Mechanism (30° Flexed Knee Position)
*Coordinate space: $+X$ is Medial, $-X$ is Lateral, $+Y$ is Superior (quadriceps/proximal femur), $-Y$ is Inferior (tibia tuberosity), $+Z$ is Anterior, $-Z$ is Posterior (flexed femoral trochlear groove).*
*Anatomical orientation: Distal femur is flexed 30° matching the standard clinical lateral radiograph ("True Lateral Knee 30° Flexion"). The patella sits tilted in the trochlear groove with ~5.0 mm radiolucent cartilage clearance, connected to the tibial tuberosity via the patellar tendon.*

| Vector ID | Muscle / Force | Subregion | Parent Target | Anchor `originOffset` $[X, Y, Z]$ | Unit `direction` $[D_x, D_y, D_z]$ | Magnitude | Raycast Hits | Clinical Mechanism |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `patella_quadriceps` | Quadriceps Femoris | `patella` | `"proximal"` | `[-10.5, 29.0, 26.0]` | `[0.0, 0.86, -0.50]` | 38.0 | 0 | Strong proximal-posterior retraction of superior patellar fragment along flexed femur shaft in transverse/pole fractures; converts to dynamic compression across posterior articular facet under Tension Band Wiring (TBW). |
| `patella_tendon` | Patellar Tendon | `patella` | `"distal"` | `[-1.79, -8.5, 41.5]` | `[-0.35, -0.90, -0.25]` | 36.0 | 0 | Distal anchoring tension connecting inferior patellar apex down to tibial tuberosity (`[-16.01, -40.41, 31.19]`); preserves distal fragment position or causes distal pole avulsion. |

#### E. Proximal Tibia & Knee Ligamentous / Muscular Vectors
*Coordinate space: $+X$ is Medial, $-X$ is Lateral (Fibula), $+Y$ is Superior / Proximal (Knee joint line), $-Y$ is Inferior / Distal (Ankle plafond), $+Z$ is Anterior (Tibial tuberosity), $-Z$ is Posterior (Popliteal fossa).*

| Vector ID | Muscle / Force | Subregion | Parent Target | Anchor `originOffset` $[X, Y, Z]$ | Unit `direction` $[D_x, D_y, D_z]$ | Magnitude | Raycast Hits | Clinical Mechanism |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `tibia_patellar_tendon` | Patellar Tendon (Extensor Mechanism) | `proximal` | `"distal"` | `[-10.0, 168.0, 33.5]` | `[0.0, 0.94, 0.34]` | 40.0 | 0 | Forceful anteroproximal quadriceps pull anchored to tibial tuberosity; can avulse the tuberosity or tilt shaft into extension. |
| `tibia_semimembranosus` | Semimembranosus (Hamstrings) | `proximal` | `"proximal"` | `[22.0, 178.0, -18.0]` | `[0.20, -0.92, -0.32]` | 35.0 | 0 | Strong posteromedial flexion vector pulling on medial condyle; deforms and displaces medial plateau in Schatzker IV, V, and VI. |
| `tibia_biceps_femoris` | Biceps Femoris & LCL | `proximal` | `"shard"` | `[-30.0, 180.0, -10.0]` | `[-0.45, 0.85, -0.28]` | 34.0 | 0 | Posterolateral tension from biceps tendon and lateral collateral ligament on fibular head and lateral tibial margin; splays lateral wedge in Schatzker I, II, V. |
| `tibia_popliteus` | Popliteus Muscle | `proximal` | `"distal"` | `[-12.0, 160.0, -22.0]` | `[-0.60, 0.72, -0.35]` | 30.0 | 0 | Superolateral internal rotatory and dynamic stabilizer pull originating from posterior proximal tibia below lateral condyle. |

---

## 9. Translucent X-Ray Radiographic Mode & Shader Protocol

### A. Radiographic Attenuation & Physical Optical Model
Physical plain radiography records X-ray photon attenuation through anatomical tissues according to the Beer-Lambert transmission law:
$$I(\vec{r}) = I_0 \exp\left( -\int \mu(s) \, ds \right)$$
1. **Cortical Bone Edge Enhancement (Fresnel Silhouette)**:
   X-rays directed tangent to the bone cortex traverse maximum bone thickness ($ds_{\text{tangent}} \gg ds_{\text{perpendicular}}$), producing a dense, radiopaque white cortical margin.
2. **Medullary / Cancellous Translucency**:
   X-rays passing through the center only traverse thin anterior and posterior cortical shells and porous trabecular marrow, leaving the interior translucent and see-through.
3. **Radiographic Summation (Additive Overlap)**:
   When two bone fragments overlap in the beam path (such as in displaced fractures, comminuted shards, or intersecting anatomical structures like the fibula behind the tibia), their photon absorptions summate additively, yielding increased radiopacity.

### B. Custom Three.js X-Ray Shader Specification
Implemented via a dedicated `THREE.ShaderMaterial` with view-dependent Fresnel equations:

```glsl
// Vertex Shader
varying vec3 vNormal;
varying vec3 vViewPosition;

void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  vViewPosition = -mvPosition.xyz;
  vNormal = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * mvPosition;
}

// Fragment Shader
uniform vec3 uColor;         // Clinical cyan-slate core (0x38BDF8)
uniform vec3 uRimColor;      // Pure radiopaque cortical white (0xFFFFFF)
uniform float uBaseDensity;  // Cancellous baseline density (0.16)
uniform float uRimPower;     // Cortical edge sharpness exponent (2.2)
uniform float uOpacity;      // User-adjustable radiodensity multiplier (0.25 - 0.95)

varying vec3 vNormal;
varying vec3 vViewPosition;

void main() {
  vec3 normal = normalize(vNormal);
  vec3 viewDir = normalize(vViewPosition);

  // Absolute dot product guarantees identical evaluation for front and back faces
  float dotNV = abs(dot(normal, viewDir));

  // Tangential ray attenuation (Fresnel cortical margin)
  float rim = pow(clamp(1.0 - dotNV, 0.0, 1.0), uRimPower);

  // Radiodensity: baseline cancellous density + cortical rim peak
  float density = clamp(uBaseDensity + rim * (1.0 - uBaseDensity), 0.0, 1.0);

  // Color gradient from cool medullary slate to glowing white cortical rim
  vec3 col = mix(uColor, uRimColor, pow(rim, 0.75));

  gl_FragColor = vec4(col, density * uOpacity);
}
```

### C. Blending & WebGL Buffer Configuration
To guarantee commutative, order-independent transparency without depth-sorting artifacts across thousands of bone polygons:
- `side: THREE.DoubleSide` — Renders both anterior and posterior cortices.
- `depthWrite: false` — Eliminates polygon occlusions; allows internal fracture fragments and posterior cortices to be visible through the anterior wall.
- `transparent: true`
- `blending: THREE.CustomBlending` with:
  - `blendSrc: THREE.SrcAlphaFactor`
  - `blendDst: THREE.OneFactor` (Additive RGB summation for realistic radiodensity accumulation)
  - `blendSrcAlpha: THREE.OneFactor`
  - `blendDstAlpha: THREE.OneMinusSrcAlphaFactor` (Preserves HTML canvas compositing stability)

### D. Zero-Lag Runtime Hot-Swapping
To ensure 60fps responsiveness without recalculating bone partition cuts:
1. `solidBoneMatRef` and `xRayMatRef` are pre-allocated during scene initialization.
2. Toggling `isXRayMode` executes an instantaneous GPU material assignment across `[proximalMesh, distalMesh, gtMesh, ltMesh, shardMesh]`.
3. Dragging the `Density` slider updates `xRayMat.uniforms.uOpacity.value` on the GPU with 0ms latency.
4. When `isXRayMode` is active, the modal backdrop transitions to a medical illuminator lightbox gradient:
   `radial-gradient(ellipse at 50% 50%, #0c1e34 0%, #06101d 50%, #020617 100%)`.

---

## 10. Ankle & Hindfoot Multi-Bone Assembly & Ligamentous Complex Protocol

### A. 6-Bone Anatomical Architecture
The ankle joint and hindfoot/midfoot complex is assembled from 6 congruently scanned bones:
1. **Tibia** (Distal plafond, medial malleolus, incisura tibialis)
2. **Fibula** (Lateral malleolus, digital fossa, lateral shaft)
3. **Talus** (Trochlea, neck, medial & lateral processes)
4. **Calcaneus** (Sustentaculum tali, anterior process, lateral wall)
5. **Navicular** (Medial midfoot, navicular tuberosity)
6. **Cuboid** (Lateral midfoot, calcaneocuboid articulation)

All 6 bones share identical DICOM coordinate systems and assemble with 0.00 mm gap in `public/models/bones/tibia/tibia.glb`.

### B. Centered Three.js Space Coordinates
With model normalized (`rotation.x = -Math.PI / 2`, centered):
- **$+Y$ (Superior / Cranial)**: Tibial diaphysis and plateau
- **$-Y$ (Inferior / Caudal)**: Tibial plafond ($Y \approx -152.7$), Talus dome ($Y \approx -166.7$), Calcaneus ($Y \approx -195.7$)
- **$+X$ (Medial)**: Medial malleolus ($X \approx +24.6$), Sustentaculum tali ($X \approx +27.9$)
- **$-X$ (Lateral)**: Distal fibula ($X \approx -19.3$), Calcaneal tubercle ($X \approx -20.9$)
- **$+Z$ (Anterior)**: Navicular ($Z \approx +37.2$), Anterior syndesmosis / Chaput ($Z \approx +8.5$)
- **$-Z$ (Posterior)**: Volkmann's triangle ($Z \approx -18.1$), Posterior calcaneal heel ($Z \approx -13.5$)

### C. Procedural Curved Ribbon Sheet Geometry
To prevent joint surface occlusion caused by rigid cylinders, ligaments are generated as procedural **curved ribbon sheets** using Catmull-Rom splines and Frenet frames:
```typescript
function createRibbonGeometry(
  points: THREE.Vector3[],
  width: number,
  thickness: number,
  outwardNormal?: THREE.Vector3,
  twistAngle: number = 0
): THREE.BufferGeometry;

function createFanSheetGeometry(
  apexPoints: THREE.Vector3[],
  basePoints: THREE.Vector3[],
  thickness: number,
  outwardNormal: THREE.Vector3
): THREE.BufferGeometry;
```
- **Outward Surface Facing**: The flat face of each ribbon/sheet uses an explicit outward normal ($\vec{n}_{\text{out}}$) or radial outward vector from the central ankle axis $(p.x, 0, p.z)$. The width vector ($\vec{b}$) is calculated via $\vec{t} \times \vec{n}_{\text{out}}$ and the true face normal via $\vec{b} \times \vec{t}$, ensuring the broad surface directly faces the clinician viewing from any angle rather than rendering edge-on.
- **Translucency**: `MeshStandardMaterial` (`color: 0xE2E8F0`, `opacity: 0.65`, `roughness: 0.38`, `transparent: true`, `depthWrite: false`, `side: THREE.DoubleSide`).
- **Radiolucency (X-Ray Mode)**: Attenuates to faint ghost (`opacity: 0.15`) to simulate radiolucent soft tissue without obstructing the bony mortise.

### D. 6 Essential Classification-Critical Ligament Complexes

| Ligament Complex | Anatomy & Clinical Role | Origin Landmark | Insertion Landmark | Morphology & Orientation |
| :--- | :--- | :--- | :--- | :--- |
| **ATFL** *(Anterior Talofibular)* | Primary lateral stabilizer in plantarflexion; torn in SER-II / Weber B | Anterior margin lateral malleolus `[-19.54, -161.43, -0.29]` | Lateral talar neck `[-6.72, -160.82, 11.64]` | Flat ribbon, width: 8.5mm, thick: 2.2mm, surface facing anterolateral `[-0.7, 0.05, 0.7]` |
| **CFL** *(Calcaneofibular)* | Lateral stabilizer in dorsiflexion; torn in SER-III / Weber C | Lateral malleolus distal tip `[-19.33, -175.27, -15.66]` | Lateral calcaneal tubercle `[-20.89, -188.68, 7.92]` | Cord-like, width: 6.5mm, thick: 3.2mm, surface facing lateral `[-1, 0, 0]` |
| **AITFL** *(Anterior Inferior Tibiofibular)* | Anterior syndesmotic stabilizer; torn in SER-I (Tillaux-Chaput / Wagstaffe) | Chaput tubercle of anterior distal tibia `[-16.29, -146.26, 8.52]` | Wagstaffe-Le Fort tubercle of fibula `[-19.51, -152.93, -1.13]` | Trapezoidal band, width: 12mm, thick: 2.2mm, surface facing anterior `[-0.3, 0, 0.95]` |
| **PITFL** *(Posterior Inferior Tibiofibular)* | Posterior syndesmotic stabilizer; torn/avulsed in SER-III (Volkmann's triangle) | Volkmann tubercle of posterior distal tibia `[-4.12, -145.56, -18.07]` | Fibular digital fossa `[-11.83, -157.81, -20.24]` | Thick triangular bundle, width: 14mm, thick: 3.5mm, surface facing posterior `[-0.3, 0, -0.95]` |
| **Deltoid Complex (Superficial)** | Broad continuous anatomical fan sheet preventing eversion & valgus | Medial malleolus anterior & inferior border `[24.2–25.3, -152 to -155.5, 11.5 to -2]` | Spanning curve: Navicular `[17.42, -174.95, 37.19]` $\to$ Spring lig `[21.5, -179, 22]` $\to$ Sustentaculum `[27.87, -188, -13]` $\to$ Post talus `[26.14, -171, -8]` | Broad 3D triangular fan sheet, thickness: 2.2mm, surface facing medial `[1, 0, 0]` |
| **Deltoid Complex (Deep)** | Primary restraint to lateral talar shift & external rotation; torn in SER-IV | Medial malleolus intercollicular groove `[24.64, -154.44, 8.25]` | Medial talar body fossa `[24.26, -155.41, 0.41]` | Thick oval horizontal mass, width: 12mm, thick: 4.5mm, surface facing medial `[1, 0, 0]` |
| **Syndesmosis (IOL)** | Continuous interosseous syndesmotic membrane sheet | Incisura tibialis `[-16.73, -137.19, 0.67]` | Opposing medial distal fibula `[-8.65, -138.31, -14.95]` | Thin coronal bridging sheet, width: 14mm, thick: 1.0mm, surface facing anterior `[0, 0, 1]` |

### E. Radiographic Views & Mortise Evaluation
For the `distal` subregion:
- **AP View** (`direction: [0, 0, 1]`): Overviews distal tibia, fibula, and talar dome.
- **Mortise View** (`direction: [0.26, 0, 0.97]`): ~15° internal rotation view eliminating fibular overlap to profile the lateral clear space.
- **Lateral View** (`direction: [-1, 0, 0]`): True lateral projection verifying talar dome congruity and posterior malleolar integrity.

---

## 11. Complete Lauge-Hansen Classification (SER, SA, PER, PA) 3D Presets

Lauge-Hansen classification categorizes rotational ankle fractures based on foot position at the moment of trauma (Supinated vs. Pronated) and the direction of deforming force (External Rotation, Adduction, Abduction).

### Mathematical Partitioning Boundaries & Slicing Planes:
- **Tibia Plafond**: $Y \approx -152.7$
- **Distal Fibula Apex**: $Y \approx -178.0$
- **Infrasyndesmotic Transverse Avulsion (SA I)**: `centroid.y <= -156.0` (Weber A)
- **Transsyndesmotic Spiral (SER II-IV)**: `centroid.y + 0.55 * centroid.z <= -152.5` (Weber B)
- **Suprasyndesmotic High Spiral (PER III-IV)**: `centroid.y + 0.45 * centroid.z <= -124.0` (Weber C / Maisonneuve)
- **Suprasyndesmotic High Bending / Transverse (PA III)**: `centroid.y <= -108.0` (~5–7 cm above plafond, Weber C)
- **Comminuted Lateral Butterfly Wedge Shard (PA III)**: `centroid.y >= -122.0 && centroid.y <= -96.0 && centroid.x <= -17.5` (routed to `gtPivotGroup`)
- **Medial Malleolus Transverse Avulsion (SER IV, PER I-IV, PA I-III)**: `centroid.x >= 16.0 && centroid.y <= -149.0`
- **Medial Malleolus Vertical Shear (SA II)**: `centroid.x >= 14.5 && centroid.y <= -136.0 && centroid.y <= -158.7 + (centroid.x - 14.5) * 15`
- **Volkmann Posterior Malleolus (SER III-IV, PER IV)**: `centroid.x <= 14.0 && centroid.y <= -130.0 && centroid.y + 1.5 * centroid.z <= -154.0`

### Complete 3D Classification Presets Database:

| Preset ID | Mechanism & Stage | Badge | Partition Mode | Clinical Characteristics & 3D Deformity |
| :--- | :--- | :--- | :--- | :--- |
| `ankle_intact` | Normal | Intact Bone | `ankle_intact` | Anatomically aligned distal tibia, fibula, and hindfoot with congruent mortise and intact syndesmosis. |
| `lh_ser_1` | SER Stage I | SER I (AITFL Rupture) | `lh_ser_1` | Isolated rupture of the Anterior Inferior Tibiofibular Ligament (AITFL) or Tillaux-Chaput/Wagstaffe avulsion; bones intact. |
| `lh_ser_2` | SER Stage II | SER II (Spiral Fibula) | `lh_ser_2` | Classic spiral/oblique fracture of the lateral malleolus starting at the joint line (Weber B) and extending anteroinferior to posterosuperior (`shardPos: [-3.8, 1.2, -4.2]`). |
| `lh_ser_3` | SER Stage III | SER III (Posterior Malleolus) | `lh_ser_3` | SER II + Posterior malleolar avulsion fracture (Volkmann's triangle) via PITFL traction (`gtPos: [-1.2, 4.5, -6.5]`). |
| `lh_ser_4` | SER Stage IV | SER IV (Trimalleolar / Diastasis) | `lh_ser_4` | SER III + Medial malleolar transverse avulsion (`ltPos: [4.2, -1.8, 0.5]`) OR deltoid rupture, resulting in talar lateral shift >4mm (`proxPos: [3.8, 0.5, -0.8]`). |
| `lh_sa_1` | SA Stage I | SA I (Infrasyndesmotic Fibula) | `lh_sa_1` | Transverse tension avulsion fracture of the lateral malleolus at or below the tibial plafond (Weber A, `shardPos: [-2.5, -1.2, 0]`); syndesmosis intact. |
| `lh_sa_2` | SA Stage II | SA II (Vertical Shear MedMal) | `lh_sa_2` | SA I + Vertical/steeply oblique shear fracture of the medial malleolus with medial plafond impaction (`ltPos: [3.8, 4.0, 0]`, `shardPos: [-3.0, -1.5, 0]`). |
| `lh_per_1` | PER Stage I | PER I (Medial Disruption) | `lh_per_1` | Transverse tension avulsion fracture of the medial malleolus (`ltPos: [2.5, -1.0, 0.5]`) OR deltoid ligament rupture; lateral side completely intact. |
| `lh_per_2` | PER Stage II | PER II (AITFL Rupture) | `lh_per_2` | PER I + Complete rupture of the AITFL with widening of the anterior syndesmotic clear space; fibula shaft intact. |
| `lh_per_3` | PER Stage III | PER III (High Spiral Fibula) | `lh_per_3` | PER II + High spiral suprasyndesmotic fracture of the fibular diaphysis (Weber C / Maisonneuve, `shardPos: [-4.0, 1.8, -4.5]`); IOL torn up to fracture level. |
| `lh_per_4` | PER Stage IV | PER IV (Posterior Malleolus / Diastasis) | `lh_per_4` | Circumferential disruption: Medial avulsion + High spiral fibula + Large Volkmann posterior malleolus (`gtPos: [-1.5, 5.0, -7.2]`) + Gross talar shift (`proxPos: [4.5, 0.6, -1.2]`). |
| `lh_pa_1` | PA Stage I | PA I (Medial Avulsion) | `lh_pa_1` | Transverse tension avulsion fracture of the medial malleolus (`ltPos: [2.5, -1.0, 0]`) OR deltoid ligament rupture from forceful foot abduction. |
| `lh_pa_2` | PA Stage II | PA II (Syndesmotic Rupture) | `lh_pa_2` | PA I + Simultaneous rupture of both anterior (AITFL) and posterior (PITFL) syndesmotic ligaments; incisura diastasis without fibular fracture. |
| `lh_pa_3` | PA Stage III | PA III (High Bending / Butterfly Comminution) | `lh_pa_3` | PA II + High suprasyndesmotic bending fracture of the fibula (~5–7 cm above joint line, Weber C, `shardPos: [-5.2, -2.5, 0]`) with separate lateral cortical butterfly wedge shard (`gtPos: [-6.8, 1.2, 2.5]`) + Talar valgus tilt (`proxPos: [4.2, 0.5, 0]`). |

### UI Presentation Rules:
- **Two-Level Hierarchical Mechanism Picker**:
  - **Level 1**: Normal (`teal`), SER (`rose`), SA (`amber`), PER (`purple`), PA (`cyan`).
  - **Level 2**: Mechanism-specific stage progression with `→` arrows (e.g. Stage I → Stage II → Stage III → Stage IV).
- **Solid Indicator Dots**: Zero blinking/pulsing animations; strictly solid indicator dots matching the mechanism group color.
- **Pure Descriptions**: No management, physical exam signs, or surgical fixation details in `clinicalPearl` or `details`.
- **Left-Aligned Bullets**: `text-left` and `list-disc list-outside pl-4` for all multi-line clinical descriptions.
- **Universal Grayish-Flesh Cancellous Cut-Face Caps**:
  - Automatically caps every open boundary loop formed by fracture cutting planes with organic grayish-flesh cancellous bone (`#8C7A73`, roughness `0.88`, double-sided).
  - Contrasts against the smooth ivory white cortical bone (`#F7F4EC`) in solid 3D mode.
  - Automatically hidden (`visible: false`) when X-Ray film mode is enabled to preserve realistic, clutter-free radiographic translucency.




