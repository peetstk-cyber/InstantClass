---
name: ortho-3d-mesh-slicing
description: >-
  Upgrades low-poly 3D anatomical bone meshes with Loop-Taubin volume-preserving
  subdivision, smooth area-weighted vertex normals, indexed GLB compression,
  exact CSG triangle slicing, multi-scale 3D organic cortical fracture relief
  (fOrganic), and shortest-3D-chord per-plane cancellous caps. Use when a 3D bone
  model looks faceted/low-poly, when fracture lines look jagged or ruler-straight,
  or when cancellous caps protrude across hollow sockets or foramina.
---

# Orthopedic 3D Mesh Upgrade & Organic CSG Fracture Slicing Skill

## Overview
This skill provides the end-to-end engineering pipeline and CLI tools for transforming low-polygon, flat-shaded 3D bone models into smooth, lightweight indexed `.glb` assets, and partitioning them at runtime using **Universal Exact CSG Solid Slicing (`splitBoneSolid`)** with **Multi-Scale 3D Organic Cortical Fracture Relief (`fOrganic`)** and **Shortest-3D-Chord Per-Plane Cancellous Caps (`chainAndTriangulateCutSegs`)**.

> [!IMPORTANT]
> **Universal CSG Engine Already Active**: In `src/components/anatomy3d/Bone3DViewerModal.tsx`, `splitBoneSolid`, `extractBoneSolid`, `emitSolid`, `translateBoneSolid`, `getBoneRange`, and `fOrganic` are already hoisted to the top of `partitionBoneMesh` and active across **all bones** (Pelvis, Tibia, Fibula, Talus, Calcaneus, Femur, Humerus, Clavicle, and Patella).

---

## Flash-Safe Protocol & Strict Guardrails (MANDATORY)

When executing this skill (especially with fast/lightweight models such as Gemini Flash), you **MUST** obey these 5 non-negotiable guardrails so you never shift fracture positions or break multi-bone indexing:

### Guardrail 1: DO NOT TOUCH Clinical Presets, Offsets, Rotations, or Pivot Centroids
When upgrading a bone mesh or smoothing/adjusting fracture lines, **NEVER** edit any of the following in `src/components/anatomy3d/Bone3DViewerModal.tsx`:
- `presets` arrays (`cutCenter`, `cutNormal`, `proximalPosOffset`, `proximalRot`, `distalPosOffset`, `distalRot`, `gtPosOffset`, `gtRot`, `ltPosOffset`, `ltRot`, `shardPosOffset`, `shardRot`)
- Pivot centroids (`proxPivotCenter`, `gtCentroid`, `ltCentroid`, `shardCentroid`, `distBase`)
- Force vectors (`getForceVectorsForSubregion`) or ligament bundles

### Guardrail 2: How to Smooth or Adjust Fracture Lines Without Shifting Position
All bones in `partitionBoneMesh` already slice triangles via `splitBoneSolid(solid, fn, maxCapEdgeMm)` where `fn(x, y, z) = fBase(x, y, z) + fOrganic(x, y, z, amp, phase)`.
- **If the user asks to make a fracture line smoother / cleaner**:
  - **ONLY** reduce the `amp` argument in `fOrganic(x, y, z, amp, phase)` (e.g., from `1.10` down to `0.40` for a subtle wave, or `0.0` for a razor-sharp planar cut).
  - **NEVER** change the coordinate threshold constants (such as `165.0`, `-10.0`, `8.0`, `-152.5`, `-136.0`) inside `fn(x, y, z)`!
- **If the user asks to make a fracture line more natural / organic**:
  - **ONLY** tune `amp` (recommended range: `0.65` to `1.65`) and `phase` (`0.0` to `6.0`) in `fOrganic(x, y, z, amp, phase)`.

### Guardrail 3: Zero-Shift 1-to-1 Inequality-to-CSG Translation Table
If you ever convert an inequality condition into a CSG level-set function `fn(x, y, z)` for `const [detachedFrag, remainder] = splitBoneSolid(solid, fn, maxCapEdgeMm)` (where `fn(x, y, z) <= 0` goes into `detachedFrag` and `fn(x, y, z) >= 0` goes into `remainder`), **preserve the exact original coordinate numbers** using this 1-to-1 algebraic table:

| Original Inequality (Detached Fragment) | Exact Zero-Shift CSG Level-Set (`fn(x, y, z) <= 0`) |
| :--- | :--- |
| `x <= c` or `x < c` | `(x - c) + w` |
| `x >= c` or `x > c` | `(c - x) + w` |
| `y <= c` or `y < c` | `(y - c) + w` |
| `y >= c` or `y > c` | `(c - y) + w` |
| `z <= c` or `z < c` | `(z - c) + w` |
| `z >= c` or `z > c` | `(c - z) + w` |
| `a*y + b*z <= c` | `((a * y + b * z) - c) / Math.hypot(a, b) + w` |
| `condA && condB` (AND / Intersection) | `Math.max(fA, fB)` |
| `condA \|\| condB` (OR / Union) | `Math.min(fA, fB)` |
| `isAbove` (`plane.distanceToPoint > 0`) | `fPlaneAbove(x, y, z, amp, phase)` |

*(where `const w = fOrganic(x, y, z, amp, phase)`)*

### Guardrail 4: NEVER Hardcode Unpacked Vertex Index Offsets
Subdividing a `.glb` file multiplies its unpacked vertex count by $4\times$ per level (e.g., `tibia.glb` grows from `21,264` to `85,056` unpacked vertices).
- **FORBIDDEN**: Never write `i >= 8472 && i < 12600`, `i >= 12600 && i < 16374`, or `i < 5040`.
- **REQUIRED**: Always resolve multi-bone ranges dynamically via `getBoneRange(keyword, fallbackIndex, fallbackStart, fallbackEnd)` and slice only the target bone's solid via `extractBoneSolid(startIdx, endIdx)`:
  ```typescript
  const [tlStart, tlEnd] = getBoneRange("talus", 2, fbEnd, 12600);
  const tlSolid = extractBoneSolid(tlStart, tlEnd);
  ```

### Guardrail 5: Always Run the Verification Subcommand Before Finishing
After upgrading any `.glb` or editing `Bone3DViewerModal.tsx`, always run:
```bash
python3 ".agents/skills/ortho-3d-mesh-slicing/scripts/upgrade_bone_mesh.py" verify \
  --viewer "src/components/anatomy3d/Bone3DViewerModal.tsx" \
  --models-dir "public/models/bones"
```
This script automatically blocks hardcoded vertex index regressions, missing CSG helpers, unbalanced braces, and corrupted GLB headers.

---

## Quick Start Commands

### 1. Audit Existing 3D Bone Models
Inspect triangle density, normal smoothness, and 2-manifold topology across `public/models/bones/`:
```bash
python3 ".agents/skills/ortho-3d-mesh-slicing/scripts/upgrade_bone_mesh.py" audit \
  --input "public/models/bones" \
  --output "/tmp/bone_mesh_audit.json"
```

### 2. Upgrade a Bone GLB (Boundary-Preserving Loop-Taubin + Smooth Normals + Indexed Packing)
```bash
python3 ".agents/skills/ortho-3d-mesh-slicing/scripts/upgrade_bone_mesh.py" upgrade \
  --input "public/models/bones/tibia/tibia.glb" \
  --output "public/models/bones/tibia/tibia.glb" \
  --min-tris 10000 \
  --max-levels 1 \
  --report "/tmp/tibia_upgrade_report.json"
```

### 3. Verify Project Integrity
```bash
python3 ".agents/skills/ortho-3d-mesh-slicing/scripts/upgrade_bone_mesh.py" verify \
  --viewer "src/components/anatomy3d/Bone3DViewerModal.tsx" \
  --models-dir "public/models/bones"
```

---

## Utility Script Reference (`scripts/upgrade_bone_mesh.py`)
- **`audit`**:
  - `--input` *(required)*: Path to a `.glb` file or directory of `.glb` files.
  - `--output` *(required)*: Output JSON file path containing triangle counts, unpacked vertex ranges, `indexed_in_glb`, `flat_normals`, and `non_manifold_or_boundary_edges`.
- **`upgrade`**:
  - `--input` *(required)*: Input `.glb` path.
  - `--output` *(required)*: Output `.glb` path.
  - `--min-tris` *(required)*: Subdivide any sub-mesh with fewer triangles than this threshold (e.g., `5000` or `10000`).
  - `--max-levels` *(optional, default `1`)*: Maximum Loop-Taubin subdivision passes. Automatically preserves open mesh boundaries without shrinkage and locks `[orig_min, orig_max]` bounding boxes to `0.000 mm`.
  - `--report` *(optional)*: Output JSON file path summarizing old vs. new file size and unpacked vertex ranges.
- **`verify`**:
  - `--viewer` *(optional, default `src/components/anatomy3d/Bone3DViewerModal.tsx`)*: Verifies no hardcoded vertex index checks exist and all CSG functions are intact.
  - `--models-dir` *(optional, default `public/models/bones`)*: Verifies all `.glb` files in the directory.

---

## Core Architecture & Runtime Protocol (`Bone3DViewerModal.tsx`)

### 1. Smooth Vertex Normals Preservation (`updateGroupMesh`)
Never call `geom.computeVertexNormals()` over unpacked non-indexed outer cortical bone vertices (`pos`), as Three.js will overwrite smooth normals with flat per-triangle face normals.
- Keep `norm` (from `rawNormalsRef`) intact for group `0` (`pos`, outer cortical surface).
- Compute flat face normals on a temporary `BufferGeometry` exclusively for group `1` (`capPos`, cancellous fracture cut-face cap) and concatenate into `combinedNorm`.

### 2. Multi-Scale 3D Organic Cortical Fracture Relief (`fOrganic`)
Add a deterministic 3D multi-scale gyroid/harmonic perturbation $\psi(x, y, z)$ to any continuous fracture level-set $f_{\text{base}}(x, y, z) = 0$:
```typescript
const fOrganic = (x: number, y: number, z: number, amp = 1.15, phase = 0.0) => {
  const w1 = Math.sin(x * 0.16 + y * 0.13 + phase) * Math.cos(z * 0.18 - y * 0.11 - phase * 0.7);
  const w2 = 0.52 * Math.sin(y * 0.36 - z * 0.28 + 1.3 + phase) * Math.cos(x * 0.31 + z * 0.23);
  const w3 = 0.24 * Math.sin(x * 0.68 + z * 0.63 - 0.7 - phase);
  return amp * (w1 + w2 + w3);
};
```
Because both sides of the cut (`negCort` and `posCort`) are clipped against the exact same continuous scalar field $f_{\text{base}}(x, y, z) + f_{\text{organic}}(x, y, z) = 0$, the two fragments interlock with **0.000 mm jigsaw fit** when reduced.

### 3. Universal Exact CSG Solid Slicing & Shortest-3D-Chord Cancellous Caps (`splitBoneSolid`)
1. **Exact Edge-Interpolated Triangle Clipping**:
   For each triangle $(v_0, v_1, v_2)$ straddling $f(x, y, z) = 0$, linearly interpolate the zero-crossing points $v_{AB}, v_{AC}$ and vertex normals $n_{AB}, n_{AC}$ using $t = d_A / (d_A - d_B)$.
2. **Sequential Cap Clipping**:
   When a fragment undergoes a second or third intersecting fracture cut, slice both `solid.cort` AND `solid.cap` so previously generated cancellous caps are trimmed cleanly at fracture intersections.
3. **Shortest-3D-Chord Per-Plane Ear-Clipping (`chainAndTriangulateCutSegs`)**:
   Chain directed cut segments `[vAB, vAC]` from each individual cut into closed loops, and repeatedly clip the ear with the shortest 3D chord `distSq3(loop[ia], loop[ic])` subject to `maxEdgeMm`. This guarantees cancellous caps stay strictly inside the cortical bone cross-section and never bridge across hollow sockets or joints.

### 4. Cancellous Cut-Face Caps Protocol (หน้าตัดกระดูกเนื้อโปร่ง)
Never leave bone fragments hollow (never set `hnCap`, `gtCap`, `distCap`, `ltCap`, `shardCap` to `undefined` on fractured fragments):
- **Non-Pelvis Bones (`!isPelvis`: Calcaneus, Talus, Tibia, Fibula, Femur, Humerus, Clavicle, Patella)**:
  Use `extractBoundaryCaps(*Pos, patellaFilter)` directly. Slicing complex irregular bones into multiple fragments generates multi-loop open boundaries that `extractBoundaryCaps` clusters and triangulates with 100% boundary coverage, ensuring zero hollow gaps.
- **Pelvis (`isPelvis`)**:
  Use `csg*Cap.length > 0 ? csg*Cap : extractBoundaryCaps(*Pos)` so shortest-chord ear clipping prevents bridging across the obturator foramen, while keeping a guaranteed solid fallback.
- **Material Grouping**:
  `updateGroupMesh` binds group 0 to `solidBoneMat` (outer cortical bone) and group 1 to `cancellousBoneMat` (organic cancellous bone marrow tone `0x8C7A73`, `side: THREE.DoubleSide`). In X-Ray mode, `capMat` hot-swaps to `invisibleMat` for true radiolucency.
