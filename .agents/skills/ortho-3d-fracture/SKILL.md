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
- **Distal Femur (`0.18`, distance `3.0`)**: Focuses on the femoral condyles and trochlea with elevated clearance (`0.18`) keeping the joint line comfortably above bottom decks.
- **Whole Bone (`0.07`, distance `5.3`)**: Fits the complete 46.6cm adult femur from head to condyles with ~75px top/bottom safety padding.

### Viewport Toggle Placement Rule:
- The **`[ ⤢ Whole Bone ]` / `[ 🔍 Focus View ]`** button MUST reside exclusively in the top floating header next to the close button (`[ X ]`).
- Do NOT place whole bone toggles inside Tier 2/3 classification decks or clutter clinical badge headers.

---

## 6. Performance & Re-slicing Optimization

1. **Partition Key Caching**:
   Cache key `"${center.join(',')}_${normal.join(',')}_${mode}"`. Only re-partition the mesh BufferGeometry when the plane or comminution mode actually changes.
2. **Smooth Morphing Lerp**:
   Animate fragment translations and rotations using continuous lerp ($\alpha \approx 0.12$) so fragments smoothly explode apart into comminution or fuse back together into intact bone at 60fps without hitching.
