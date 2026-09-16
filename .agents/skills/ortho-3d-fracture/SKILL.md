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

---

## 6. Performance & Re-slicing Optimization

1. **Partition Key Caching**:
   Cache key `"${center.join(',')}_${normal.join(',')}_${mode}"`. Only re-partition the mesh BufferGeometry when the plane or comminution mode actually changes.
2. **Smooth Morphing Lerp**:
   Animate fragment translations and rotations using continuous lerp ($\alpha \approx 0.12$) so fragments smoothly explode apart into comminution or fuse back together into intact bone at 60fps without hitching.

