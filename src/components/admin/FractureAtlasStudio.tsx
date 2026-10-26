import React, { useState, useRef, useEffect, useCallback } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import {
  X,
  Download,
  Plus,
  Trash2,
  Undo2,
  Eye,
  EyeOff,
  Sparkles,
  Box,
  PenTool,
  Upload,
  Moon,
  Sun,
  Layers,
  Copy,
  Check,
  Camera,
  Sliders,
  ChevronDown,
} from "lucide-react";

interface Point {
  x: number;
  y: number;
}

interface StrokePath {
  id: string;
  layer: "bone" | "fracture" | "contour";
  points: Point[];
  wavy: boolean;
  waveAmp: number;
  waveFreq: number;
  strokeWidth: number;
  closed?: boolean;
  fill?: string;
}

interface ClassificationVariant {
  id: string;
  title: string;
  subtitle: string;
  fractureStrokes: StrokePath[];
}

interface BuiltinTemplate {
  id: string;
  name: string;
  region: string;
  viewBox: string;
  /** SVG paths for the bone fill (silhouette) so it occludes background nicely */
  fillPaths: string[];
  /** Outer anatomical cortex strokes */
  outerPaths: string[];
  /** Inner anatomical contour / landmark strokes (thinner tapered look) */
  innerPaths: string[];
  defaultVariants: ClassificationVariant[];
}

/**
 * Convert a polyline of points into a smooth SVG path, optionally adding
 * realistic organic fracture waviness along the normal vector.
 */
function pointsToSvgPath(
  points: Point[],
  wavy: boolean,
  waveAmp: number,
  waveFreq: number
): string {
  if (points.length === 0) return "";
  if (points.length === 1) {
    const p = points[0];
    return `M ${p.x.toFixed(1)} ${p.y.toFixed(1)} L ${(p.x + 0.5).toFixed(1)} ${(p.y + 0.5).toFixed(1)}`;
  }

  // First resample points at uniform arc-length intervals
  const resampled: Point[] = [points[0]];
  const step = wavy ? 3.5 : 5;
  let accum = 0;

  for (let i = 1; i < points.length; i++) {
    const p0 = points[i - 1];
    const p1 = points[i];
    const dx = p1.x - p0.x;
    const dy = p1.y - p0.y;
    const segLen = Math.hypot(dx, dy);
    if (segLen < 0.001) continue;

    let dist = step - accum;
    while (dist <= segLen) {
      const t = dist / segLen;
      resampled.push({
        x: p0.x + dx * t,
        y: p0.y + dy * t,
      });
      dist += step;
    }
    accum = segLen - (dist - step);
  }
  const last = points[points.length - 1];
  if (
    Math.hypot(
      last.x - resampled[resampled.length - 1].x,
      last.y - resampled[resampled.length - 1].y
    ) > 1
  ) {
    resampled.push(last);
  }

  if (resampled.length < 2) {
    return `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)} L ${last.x.toFixed(1)} ${last.y.toFixed(1)}`;
  }

  // Apply organic wavy fracture displacement along segment normal
  const displaced: Point[] = resampled.map((pt, idx) => {
    if (!wavy || idx === 0 || idx === resampled.length - 1) return pt;
    const prev = resampled[Math.max(0, idx - 1)];
    const next = resampled[Math.min(resampled.length - 1, idx + 1)];
    const tx = next.x - prev.x;
    const ty = next.y - prev.y;
    const len = Math.hypot(tx, ty) || 1;
    const nx = -ty / len;
    const ny = tx / len;

    // Envelope tapers at start and end so fracture line meets cortex cleanly
    const progress = idx / (resampled.length - 1);
    const envelope = Math.sin(progress * Math.PI);
    const wave =
      Math.sin(idx * waveFreq * 0.65) * 0.65 +
      Math.cos(idx * waveFreq * 1.35 + 1.2) * 0.35;
    const offset = wave * waveAmp * Math.pow(envelope, 0.55);

    return {
      x: pt.x + nx * offset,
      y: pt.y + ny * offset,
    };
  });

  // Smooth quadratic bezier curve through displaced points
  let d = `M ${displaced[0].x.toFixed(1)} ${displaced[0].y.toFixed(1)}`;
  for (let i = 1; i < displaced.length - 1; i++) {
    const xc = (displaced[i].x + displaced[i + 1].x) / 2;
    const yc = (displaced[i].y + displaced[i + 1].y) / 2;
    d += ` Q ${displaced[i].x.toFixed(1)} ${displaced[i].y.toFixed(1)}, ${xc.toFixed(1)} ${yc.toFixed(1)}`;
  }
  const endPt = displaced[displaced.length - 1];
  d += ` L ${endPt.x.toFixed(1)} ${endPt.y.toFixed(1)}`;
  return d;
}

// ─── Built-in Fracturium-Style Anatomical Templates (500x500 viewBox) ─────────
const BUILTIN_TEMPLATES: BuiltinTemplate[] = [
  {
    id: "proximal_humerus",
    name: "Shoulder / Proximal Humerus (Neer)",
    region: "Shoulder (AP View)",
    viewBox: "0 0 500 500",
    fillPaths: [
      // Scapula body + glenoid + acromion fill
      "M 155 112 C 185 112, 222 145, 240 148 L 243 135 C 246 125, 260 126, 282 132 C 288 112, 325 96, 355 103 C 382 108, 392 128, 368 138 C 345 147, 322 150, 310 156 C 325 164, 330 178, 315 186 C 306 190, 298 188, 294 205 C 291 218, 294 232, 300 236 C 282 235, 268 242, 246 278 C 218 325, 178 388, 152 398 C 133 405, 125 385, 120 350 C 110 282, 102 205, 118 152 C 128 124, 142 112, 155 112 Z",
      // Clavicle fill
      "M 45 78 C 58 70, 95 82, 165 78 C 228 74, 280 92, 316 92 C 330 92, 332 118, 310 120 C 265 124, 210 112, 160 105 C 105 98, 72 110, 52 120 C 38 124, 32 88, 45 78 Z",
      // Proximal Humerus fill
      "M 345 148 C 365 148, 375 158, 384 156 C 402 152, 412 172, 410 198 C 408 232, 394 268, 388 315 C 384 358, 385 415, 386 462 L 336 462 C 336 415, 338 355, 332 308 C 328 272, 315 248, 302 236 C 292 225, 296 196, 310 182 C 318 162, 330 148, 345 148 Z",
    ],
    outerPaths: [
      // Clavicle shaft & medial/lateral ends
      "M 45 78 C 62 72, 115 80, 172 78 C 228 76, 275 88, 314 90 C 328 91, 330 118, 312 120 C 268 123, 215 114, 165 104 C 112 95, 75 108, 52 120 C 36 122, 32 84, 45 78 Z",
      // Clavicle medial articular oval
      "M 45 78 C 58 88, 60 108, 52 120",
      // Acromion process arching behind clavicle to glenoid
      "M 268 126 C 292 106, 332 98, 362 106 C 384 112, 388 132, 366 140 C 344 148, 325 152, 312 158",
      // Coracoid process (hooked anterior projection)
      "M 236 154 L 236 138 C 237 128, 256 128, 286 138 C 314 148, 328 162, 326 176 C 324 188, 308 190, 294 180",
      // Scapula superior border, medial border, inferior angle, lateral border, glenoid neck
      "M 236 150 C 218 145, 186 118, 162 112 C 145 108, 128 132, 116 168 C 102 212, 106 292, 122 368 C 128 398, 144 404, 158 392 C 185 365, 224 295, 254 256 C 270 235, 284 232, 298 234",
      // Glenoid fossa curve
      "M 296 182 C 286 198, 286 220, 298 234",
      // Proximal Humerus (Head, Greater Tuberosity, Lateral & Medial Cortices)
      "M 316 172 C 332 148, 362 144, 376 158 C 382 162, 390 154, 400 156 C 412 160, 414 184, 408 218 C 400 256, 390 288, 386 335 C 384 378, 385 425, 386 462",
      "M 304 185 C 294 202, 294 222, 306 236 C 322 252, 330 276, 334 322 C 337 368, 336 420, 336 462",
    ],
    innerPaths: [
      // Coracoid inner contour line
      "M 254 156 C 276 160, 294 168, 304 178",
      // Glenoid subchondral contour line
      "M 290 176 C 280 194, 280 218, 288 230",
      // Bicipital groove & Lesser/Greater tuberosity contour lines
      "M 358 218 C 368 192, 382 174, 390 182 C 396 190, 386 232, 378 275 C 374 296, 372 315, 372 325",
      // Medial endosteal cortex line
      "M 336 254 C 342 285, 345 325, 346 365",
    ],
    defaultVariants: [
      {
        id: "one_part",
        title: "One-Part Fracture",
        subtitle: "Minimal displacement (<1 cm, <45° angulation)",
        fractureStrokes: [
          {
            id: "f1",
            layer: "fracture",
            points: [
              { x: 326, y: 265 },
              { x: 394, y: 264 },
            ],
            wavy: true,
            waveAmp: 2.5,
            waveFreq: 1.8,
            strokeWidth: 3.2,
          },
        ],
      },
      {
        id: "two_part",
        title: "Two-Part Fracture",
        subtitle: "Surgical neck or isolated tuberosity displacement",
        fractureStrokes: [
          {
            id: "f2_sn",
            layer: "fracture",
            points: [
              { x: 325, y: 265 },
              { x: 395, y: 264 },
            ],
            wavy: true,
            waveAmp: 3.2,
            waveFreq: 2.0,
            strokeWidth: 3.8,
          },
        ],
      },
      {
        id: "three_part",
        title: "Three-Part Fracture",
        subtitle: "Surgical neck + Greater OR Lesser tuberosity displaced",
        fractureStrokes: [
          {
            id: "f3_sn",
            layer: "fracture",
            points: [
              { x: 325, y: 265 },
              { x: 395, y: 264 },
            ],
            wavy: true,
            waveAmp: 3.0,
            waveFreq: 2.0,
            strokeWidth: 3.6,
          },
          {
            id: "f3_gt",
            layer: "fracture",
            points: [
              { x: 376, y: 158 },
              { x: 374, y: 196 },
              { x: 404, y: 226 },
            ],
            wavy: true,
            waveAmp: 2.4,
            waveFreq: 1.9,
            strokeWidth: 3.4,
          },
        ],
      },
      {
        id: "four_part",
        title: "Four-Part Fracture",
        subtitle: "Articular head, both tuberosities, and shaft displaced",
        fractureStrokes: [
          {
            id: "f4_sn",
            layer: "fracture",
            points: [
              { x: 325, y: 265 },
              { x: 395, y: 264 },
            ],
            wavy: true,
            waveAmp: 3.2,
            waveFreq: 2.0,
            strokeWidth: 3.6,
          },
          {
            id: "f4_an",
            layer: "fracture",
            points: [
              { x: 368, y: 156 },
              { x: 356, y: 205 },
              { x: 325, y: 252 },
            ],
            wavy: true,
            waveAmp: 2.5,
            waveFreq: 1.8,
            strokeWidth: 3.4,
          },
          {
            id: "f4_lt",
            layer: "fracture",
            points: [
              { x: 365, y: 202 },
              { x: 390, y: 198 },
              { x: 386, y: 242 },
              { x: 356, y: 244 },
              { x: 365, y: 202 },
            ],
            wavy: true,
            waveAmp: 2.0,
            waveFreq: 2.0,
            strokeWidth: 3.2,
          },
        ],
      },
    ],
  },
  {
    id: "proximal_femur",
    name: "Hip / Proximal Femur (Garden / Evans)",
    region: "Hip & Proximal Femur (AP View)",
    viewBox: "0 0 500 500",
    fillPaths: [
      // Hemipelvis acetabular roof fill
      "M 95 45 C 145 55, 198 78, 232 115 C 242 128, 238 148, 218 148 C 185 135, 148 158, 152 195 C 155 215, 175 228, 172 245 C 158 265, 118 282, 85 265 C 62 248, 68 180, 75 115 C 80 75, 82 42, 95 45 Z",
      // Proximal femur fill
      "M 195 148 C 228 142, 254 168, 248 202 C 242 222, 224 232, 208 230 C 222 244, 244 255, 265 245 C 282 212, 305 182, 334 185 C 358 188, 368 222, 355 268 C 344 302, 336 335, 335 460 L 272 460 C 272 385, 270 355, 255 335 C 242 325, 238 308, 254 295 C 235 275, 208 258, 188 238 C 162 218, 162 155, 195 148 Z",
    ],
    outerPaths: [
      // Acetabular rim & iliopubic/ilioischial contour
      "M 105 52 C 152 68, 202 92, 232 125 C 240 136, 232 148, 215 144 C 184 134, 152 158, 154 194 C 156 218, 174 230, 168 246 C 152 268, 115 278, 86 260",
      // Femoral head, superior neck, greater trochanter, lateral shaft
      "M 186 234 C 160 216, 160 156, 196 148 C 228 142, 252 168, 246 200 C 242 218, 225 228, 210 228 C 225 242, 248 252, 268 242 C 284 208, 304 182, 332 185 C 358 188, 366 222, 354 268 C 342 305, 335 340, 334 460",
      // Inferior neck, lesser trochanter, medial calcar & shaft
      "M 186 234 C 208 255, 236 274, 254 294 C 238 306, 240 325, 256 334 C 270 355, 272 390, 272 460",
    ],
    innerPaths: [
      // Intertrochanteric crest & fovea capitis contour
      "M 272 246 C 288 268, 294 296, 265 322",
      "M 326 208 C 338 232, 334 268, 322 315",
      "M 286 335 C 284 372, 284 415, 284 445",
    ],
    defaultVariants: [
      {
        id: "subcapital",
        title: "Subcapital Neck Fracture",
        subtitle: "Intracapsular femoral neck fracture",
        fractureStrokes: [
          {
            id: "hip_f1",
            layer: "fracture",
            points: [
              { x: 234, y: 218 },
              { x: 196, y: 245 },
            ],
            wavy: true,
            waveAmp: 2.6,
            waveFreq: 2.0,
            strokeWidth: 3.6,
          },
        ],
      },
      {
        id: "intertroch",
        title: "Intertrochanteric Fracture",
        subtitle: "Extracapsular fracture along intertrochanteric line",
        fractureStrokes: [
          {
            id: "hip_f2",
            layer: "fracture",
            points: [
              { x: 274, y: 236 },
              { x: 252, y: 312 },
            ],
            wavy: true,
            waveAmp: 3.2,
            waveFreq: 1.9,
            strokeWidth: 3.8,
          },
        ],
      },
    ],
  },
  {
    id: "proximal_tibia",
    name: "Knee / Tibial Plateau (Schatzker)",
    region: "Proximal Tibia & Fibula (AP View)",
    viewBox: "0 0 500 500",
    fillPaths: [
      // Distal femur condyles top silhouette
      "M 162 45 L 162 98 C 150 132, 152 162, 188 168 C 218 172, 235 152, 250 152 C 265 152, 282 172, 312 168 C 348 162, 350 132, 338 98 L 338 45 Z",
      // Fibula head & shaft
      "M 342 246 C 362 238, 376 256, 368 282 C 360 312, 356 385, 355 462 L 328 462 C 328 385, 332 315, 326 282 C 322 262, 328 250, 342 246 Z",
      // Proximal tibia plateau & shaft
      "M 148 192 C 185 186, 222 192, 238 178 C 246 172, 256 172, 264 178 C 280 192, 315 186, 352 192 C 368 196, 366 228, 342 252 C 318 278, 304 318, 300 462 L 202 462 C 198 318, 182 278, 158 252 C 134 228, 132 196, 148 192 Z",
    ],
    outerPaths: [
      // Distal femur condyles
      "M 162 45 C 162 85, 148 125, 156 150 C 164 170, 208 172, 230 156 C 242 146, 258 146, 270 156 C 292 172, 336 170, 344 150 C 352 125, 338 85, 338 45",
      // Tibial plateau & shaft
      "M 148 192 C 185 186, 222 192, 238 178 C 246 172, 256 172, 264 178 C 280 192, 315 186, 352 192 C 368 196, 366 228, 342 252 C 318 278, 304 318, 300 462",
      "M 148 192 C 132 196, 134 228, 158 252 C 182 278, 198 318, 202 462",
      // Fibular head & shaft
      "M 335 258 C 355 242, 374 256, 366 284 C 358 315, 355 385, 355 462",
      "M 326 278 C 330 320, 328 385, 328 462",
    ],
    innerPaths: [
      // Tibial tuberosity & inner cortex contours
      "M 235 245 C 245 232, 258 232, 266 245 C 272 262, 262 288, 250 292",
      "M 214 295 C 216 345, 216 400, 216 445",
      "M 286 295 C 284 345, 284 400, 284 445",
    ],
    defaultVariants: [
      {
        id: "schatzker_1",
        title: "Schatzker Type I",
        subtitle: "Lateral plateau pure split fracture",
        fractureStrokes: [
          {
            id: "s1",
            layer: "fracture",
            points: [
              { x: 308, y: 190 },
              { x: 332, y: 262 },
            ],
            wavy: true,
            waveAmp: 2.8,
            waveFreq: 2.0,
            strokeWidth: 3.6,
          },
        ],
      },
      {
        id: "schatzker_4",
        title: "Schatzker Type IV",
        subtitle: "Medial plateau fracture",
        fractureStrokes: [
          {
            id: "s4",
            layer: "fracture",
            points: [
              { x: 205, y: 190 },
              { x: 172, y: 265 },
            ],
            wavy: true,
            waveAmp: 2.8,
            waveFreq: 2.0,
            strokeWidth: 3.6,
          },
        ],
      },
      {
        id: "schatzker_6",
        title: "Schatzker Type VI",
        subtitle: "Bicondylar plateau with metaphyseal-diaphyseal dissociation",
        fractureStrokes: [
          {
            id: "s6_a",
            layer: "fracture",
            points: [
              { x: 305, y: 190 },
              { x: 265, y: 275 },
              { x: 312, y: 295 },
            ],
            wavy: true,
            waveAmp: 2.8,
            waveFreq: 2.0,
            strokeWidth: 3.5,
          },
          {
            id: "s6_b",
            layer: "fracture",
            points: [
              { x: 184, y: 286 },
              { x: 265, y: 275 },
            ],
            wavy: true,
            waveAmp: 2.8,
            waveFreq: 2.0,
            strokeWidth: 3.5,
          },
        ],
      },
    ],
  },
];

interface BonePartOption {
  id: string;
  label: string;
  group: string;
  path: string;
  type: "glb" | "obj";
  nodeFilter?: string;
  boneIdVal: number;
}

// Individual 3D Bone Parts in shared BodyParts3D anatomical coordinate space
const AVAILABLE_3D_BONE_PARTS: BonePartOption[] = [
  {
    id: "clavicle",
    label: "Clavicle (ไหปลาร้า)",
    group: "Shoulder & Arm",
    path: "/models/bones/clavicle/clavicle.glb",
    type: "glb",
    nodeFilter: "clavicle",
    boneIdVal: 0.15,
  },
  {
    id: "scapula",
    label: "Scapula (สะบัก)",
    group: "Shoulder & Arm",
    path: "/models/bones/clavicle/clavicle.glb",
    type: "glb",
    nodeFilter: "scapula",
    boneIdVal: 0.3,
  },
  {
    id: "humerus",
    label: "Humerus (ต้นแขน)",
    group: "Shoulder & Arm",
    path: "/models/bones/humerus/humerus.glb",
    type: "glb",
    boneIdVal: 0.45,
  },
  {
    id: "right_pelvis",
    label: "Right Pelvis (เชิงกรานขวา)",
    group: "Pelvis & Hip",
    path: "/models/bones/pelvis/Right Pelvis.obj",
    type: "obj",
    boneIdVal: 0.2,
  },
  {
    id: "left_pelvis",
    label: "Left Pelvis (เชิงกรานซ้าย)",
    group: "Pelvis & Hip",
    path: "/models/bones/pelvis/Left Pelvis.obj",
    type: "obj",
    boneIdVal: 0.35,
  },
  {
    id: "sacrum",
    label: "Sacrum (กระเบนเหน็บ)",
    group: "Pelvis & Hip",
    path: "/models/bones/pelvis/Sacrum.obj",
    type: "obj",
    boneIdVal: 0.5,
  },
  {
    id: "femur",
    label: "Femur (ต้นขาขวา)",
    group: "Pelvis & Hip",
    path: "/models/bones/femur/femur.glb",
    type: "glb",
    boneIdVal: 0.65,
  },
  {
    id: "patella",
    label: "Patella (ลูกสะบ้า)",
    group: "Knee, Leg & Ankle",
    path: "/models/bones/patella/patella_knee.glb",
    type: "glb",
    nodeFilter: "patella",
    boneIdVal: 0.8,
  },
  {
    id: "tibia",
    label: "Tibia (หน้าแข้ง)",
    group: "Knee, Leg & Ankle",
    path: "/models/bones/tibia/tibia.glb",
    type: "glb",
    nodeFilter: "^tibia$",
    boneIdVal: 0.25,
  },
  {
    id: "fibula",
    label: "Fibula (กระดูกน่อง)",
    group: "Knee, Leg & Ankle",
    path: "/models/bones/tibia/tibia.glb",
    type: "glb",
    nodeFilter: "fibula",
    boneIdVal: 0.4,
  },
  {
    id: "talus",
    label: "Talus (กระดูกข้อเท้า)",
    group: "Knee, Leg & Ankle",
    path: "/models/bones/tibia/tibia.glb",
    type: "glb",
    nodeFilter: "talus",
    boneIdVal: 0.55,
  },
  {
    id: "calcaneus",
    label: "Calcaneus (ส้นเท้า)",
    group: "Knee, Leg & Ankle",
    path: "/models/bones/tibia/tibia.glb",
    type: "glb",
    nodeFilter: "calcaneus",
    boneIdVal: 0.7,
  },
  {
    id: "navicular_cuboid",
    label: "Navicular + Cuboid",
    group: "Knee, Leg & Ankle",
    path: "/models/bones/tibia/tibia.glb",
    type: "glb",
    nodeFilter: "navicular|cuboid",
    boneIdVal: 0.85,
  },
];

const JOINT_COMBO_PRESETS = [
  {
    id: "shoulder_full",
    label: "Shoulder (Clavicle + Scapula + Humerus)",
    parts: ["clavicle", "scapula", "humerus"],
  },
  {
    id: "shoulder_girdle",
    label: "Clavicle + Scapula",
    parts: ["clavicle", "scapula"],
  },
  {
    id: "hip_joint",
    label: "Hip (Right Pelvis + Femur)",
    parts: ["right_pelvis", "femur"],
  },
  {
    id: "pelvis_full",
    label: "Full Pelvis + Hip",
    parts: ["right_pelvis", "left_pelvis", "sacrum", "femur"],
  },
  {
    id: "knee_joint",
    label: "Knee (Femur + Patella + Tibia + Fibula)",
    parts: ["femur", "patella", "tibia", "fibula"],
  },
  {
    id: "ankle_joint",
    label: "Ankle (Tibia + Fibula + Talus + Calcaneus)",
    parts: ["tibia", "fibula", "talus", "calcaneus"],
  },
];

interface FractureAtlasStudioProps {
  onClose: () => void;
}

export const FractureAtlasStudio: React.FC<FractureAtlasStudioProps> = ({ onClose }) => {
  // Active studio mode
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>("proximal_humerus");
  const currentTemplate =
    BUILTIN_TEMPLATES.find((t) => t.id === selectedTemplateId) || BUILTIN_TEMPLATES[0];

  // Variants (e.g., One-Part, Two-Part, Three-Part, Four-Part)
  const [variants, setVariants] = useState<ClassificationVariant[]>(
    () => JSON.parse(JSON.stringify(BUILTIN_TEMPLATES[0].defaultVariants))
  );
  const [activeVariantIdx, setActiveVariantIdx] = useState<number>(1); // Default to Two-Part like screenshot

  // Custom bone strokes added by user on the shared base template
  const [customBoneStrokes, setCustomBoneStrokes] = useState<StrokePath[]>([]);
  const [showBuiltinBase, setShowBuiltinBase] = useState<boolean>(true);

  // Reference / Captured 3D Line Art background image
  const [bgImageDataUrl, setBgImageDataUrl] = useState<string | null>(null);
  const [bgOpacity, setBgOpacity] = useState<number>(0.85);
  const [invertBgInDark, setInvertBgInDark] = useState<boolean>(false);

  // Drawing Tool State
  const [activeTool, setActiveTool] = useState<"fracture" | "bone" | "contour" | "pan">("fracture");
  const [canvasPan, setCanvasPan] = useState<Point>({ x: 0, y: 0 });
  const [canvasZoom, setCanvasZoom] = useState<number>(1.0);
  const [isPanning2D, setIsPanning2D] = useState<boolean>(false);
  const panStartRef = useRef<Point>({ x: 0, y: 0 });
  const [boneOutlineWidth, setBoneOutlineWidth] = useState<number>(8.5);
  const [wavyEnabled, setWavyEnabled] = useState<boolean>(true);
  const [waveAmp, setWaveAmp] = useState<number>(3.4);
  const [waveFreq, setWaveFreq] = useState<number>(2.0);
  const [strokeWidth, setStrokeWidth] = useState<number>(6.5);
  const [previewDarkTheme, setPreviewDarkTheme] = useState<boolean>(true); // Fracturium Dark Atlas vs Light Original

  // Drawing interaction state
  const svgCanvasRef = useRef<SVGSVGElement | null>(null);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [currentPoints, setCurrentPoints] = useState<Point[]>([]);
  const [copiedSvg, setCopiedSvg] = useState<boolean>(false);

  // 3D Line-Art Generator Drawer State (outlineThickness in screen pixels: 0.5..20)
  const [show3DGenerator, setShow3DGenerator] = useState<boolean>(false);
  const [selectedBonePartIds, setSelectedBonePartIds] = useState<string[]>([
    "clavicle",
    "scapula",
    "humerus",
  ]);
  const [outlineThickness, setOutlineThickness] = useState<number>(6.0);
  const [horizontalAngleDeg, setHorizontalAngleDeg] = useState<number>(0);
  const [verticalTiltDeg, setVerticalTiltDeg] = useState<number>(0);
  const [threePanX, setThreePanX] = useState<number>(0);
  const [threePanY, setThreePanY] = useState<number>(0);
  const [threeDragMode, setThreeDragMode] = useState<"pan" | "rotate">("pan");
  const [flipHorizontal, setFlipHorizontal] = useState<boolean>(false);
  const [lockHorizontalOrbit, setLockHorizontalOrbit] = useState<boolean>(true);
  const [loading3D, setLoading3D] = useState<boolean>(false);
  const threeMountRef = useRef<HTMLDivElement | null>(null);
  const threeCaptureFnRef = useRef<(() => string | null) | null>(null);
  const turntableGroupRef = useRef<THREE.Group | null>(null);
  const baseScaleRef = useRef<number>(1);
  const postMatRef = useRef<THREE.ShaderMaterial | null>(null);
  const orbitControlsRef = useRef<OrbitControls | null>(null);
  const threeCameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  const toggleBonePart = (partId: string) => {
    setSelectedBonePartIds((prev) => {
      if (prev.includes(partId)) {
        if (prev.length <= 1) return prev; // Keep at least 1 bone selected
        return prev.filter((id) => id !== partId);
      }
      return [...prev, partId];
    });
  };

  // Switch template handler
  const handleSelectTemplate = (tplId: string) => {
    const found = BUILTIN_TEMPLATES.find((t) => t.id === tplId);
    if (!found) return;
    setSelectedTemplateId(tplId);
    setVariants(JSON.parse(JSON.stringify(found.defaultVariants)));
    setActiveVariantIdx(0);
    setCustomBoneStrokes([]);
  };

  const activeVariant = variants[activeVariantIdx] || variants[0];

  // Pointer coordinates normalized to 500x500 SVG space
  const getSvgPoint = (e: React.PointerEvent<SVGSVGElement>): Point => {
    const svg = svgCanvasRef.current;
    if (!svg) return { x: 0, y: 0 };
    const rect = svg.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 500;
    const y = ((e.clientY - rect.top) / rect.height) * 500;
    return { x, y };
  };

  const handlePointerDown = (e: React.PointerEvent<SVGSVGElement>) => {
    if (e.button === 1 || e.button === 2 || activeTool === "pan") {
      e.preventDefault();
      e.currentTarget.setPointerCapture(e.pointerId);
      setIsPanning2D(true);
      panStartRef.current = {
        x: e.clientX - canvasPan.x,
        y: e.clientY - canvasPan.y,
      };
      return;
    }
    if (e.button !== 0) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    setIsDrawing(true);
    setCurrentPoints([getSvgPoint(e)]);
  };

  const handlePointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (isPanning2D) {
      setCanvasPan({
        x: e.clientX - panStartRef.current.x,
        y: e.clientY - panStartRef.current.y,
      });
      return;
    }
    if (!isDrawing) return;
    const pt = getSvgPoint(e);
    setCurrentPoints((prev) => {
      if (prev.length === 0) return [pt];
      const last = prev[prev.length - 1];
      if (Math.hypot(pt.x - last.x, pt.y - last.y) < 2.0) return prev;
      return [...prev, pt];
    });
  };

  const handlePointerUp = () => {
    if (isPanning2D) {
      setIsPanning2D(false);
      return;
    }
    if (!isDrawing) return;
    setIsDrawing(false);
    if (currentPoints.length < 2) {
      setCurrentPoints([]);
      return;
    }

    const drawLayer: "fracture" | "bone" | "contour" =
      activeTool === "pan" ? "fracture" : activeTool;

    const newStroke: StrokePath = {
      id: `stroke_${Date.now()}`,
      layer: drawLayer,
      points: currentPoints,
      wavy: drawLayer === "fracture" ? wavyEnabled : false,
      waveAmp: drawLayer === "fracture" ? waveAmp : 0,
      waveFreq: drawLayer === "fracture" ? waveFreq : 1,
      strokeWidth:
        drawLayer === "bone"
          ? strokeWidth
          : drawLayer === "contour"
          ? Math.max(1.8, strokeWidth * 0.6)
          : strokeWidth,
    };

    if (drawLayer === "fracture") {
      setVariants((prev) =>
        prev.map((v, idx) =>
          idx === activeVariantIdx
            ? { ...v, fractureStrokes: [...v.fractureStrokes, newStroke] }
            : v
        )
      );
    } else {
      setCustomBoneStrokes((prev) => [...prev, newStroke]);
    }
    setCurrentPoints([]);
  };

  const handleUndoFracture = () => {
    setVariants((prev) =>
      prev.map((v, idx) =>
        idx === activeVariantIdx
          ? { ...v, fractureStrokes: v.fractureStrokes.slice(0, -1) }
          : v
      )
    );
  };

  const handleClearFractures = () => {
    setVariants((prev) =>
      prev.map((v, idx) =>
        idx === activeVariantIdx ? { ...v, fractureStrokes: [] } : v
      )
    );
  };

  const handleUndoBoneStroke = () => {
    setCustomBoneStrokes((prev) => prev.slice(0, -1));
  };

  // Upload reference image (e.g., X-ray or sketch)
  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setBgImageDataUrl(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  // ─── 3D Model Screen-Space Thick Line-Art Renderer Effect ──────────────────
  useEffect(() => {
    if (!show3DGenerator || !threeMountRef.current) return;
    const container = threeMountRef.current;
    const width = container.clientWidth || 520;
    const height = container.clientHeight || 520;
    const dpr = Math.min(window.devicePixelRatio, 2);

    // Pass 1: Scene rendered with View-Space Normals (RG), Bone ID (B), and Silhouette (A)
    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(28, width / height, 0.1, 1000);
    camera.position.set(0, 0, 4.8);
    threeCameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      preserveDrawingBuffer: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(dpr);
    renderer.setClearColor(0x000000, 0);
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    const rtWidth = Math.floor(width * dpr);
    const rtHeight = Math.floor(height * dpr);
    const renderTarget = new THREE.WebGLRenderTarget(rtWidth, rtHeight, {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
    });

    // Pass 2: Fullscreen Quad that detects outer silhouette + inter-bone boundary + inner normal ridges
    const postScene = new THREE.Scene();
    const postCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const postMaterial = new THREE.ShaderMaterial({
      uniforms: {
        tNormalMask: { value: renderTarget.texture },
        uResolution: { value: new THREE.Vector2(rtWidth, rtHeight) },
        uThickness: { value: outlineThickness * dpr },
        uTransparentBg: { value: 0.0 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D tNormalMask;
        uniform vec2 uResolution;
        uniform float uThickness;
        uniform float uTransparentBg;
        varying vec2 vUv;

        void main() {
          vec2 texel = 1.0 / uResolution;
          vec4 center = texture2D(tNormalMask, vUv);
          float centerAlpha = center.a;
          vec2 centerNorm = center.rg * 2.0 - 1.0;
          float centerBoneId = center.b;

          float maxAlpha = centerAlpha;
          float minAlpha = centerAlpha;
          float maxNormDiff = 0.0;
          float maxBoneIdDiff = 0.0;

          // 16-direction multi-ring sampling for smooth silhouette, bone-to-bone boundary & ridge lines
          for (int ring = 1; ring <= 3; ring++) {
            float r = uThickness * (float(ring) / 3.0);
            float innerR = uThickness * 0.55 * (float(ring) / 3.0);
            for (int i = 0; i < 16; i++) {
              float angle = float(i) * 0.39269908;
              vec2 dir = vec2(cos(angle), sin(angle));

              vec4 sOuter = texture2D(tNormalMask, vUv + dir * r * texel);
              maxAlpha = max(maxAlpha, sOuter.a);
              minAlpha = min(minAlpha, sOuter.a);

              if (sOuter.a > 0.5 && centerAlpha > 0.5) {
                maxBoneIdDiff = max(maxBoneIdDiff, abs(centerBoneId - sOuter.b));
              }

              vec4 sInner = texture2D(tNormalMask, vUv + dir * innerR * texel);
              if (sInner.a > 0.5 && centerAlpha > 0.5) {
                vec2 n2 = sInner.rg * 2.0 - 1.0;
                maxNormDiff = max(maxNormDiff, distance(centerNorm, n2));
              }
            }
          }

          // Outer silhouette border + boundary between different bones (e.g. Clavicle over Scapula)
          float isSilhouetteEdge = smoothstep(0.15, 0.65, maxAlpha - minAlpha);
          float isInterBoneEdge = (centerAlpha > 0.5 && minAlpha > 0.5)
            ? smoothstep(0.05, 0.11, maxBoneIdDiff)
            : 0.0;
          // Internal anatomical ridge / crease contour
          float isCreaseEdge = (centerAlpha > 0.5 && minAlpha > 0.5)
            ? smoothstep(0.42, 0.72, maxNormDiff)
            : 0.0;

          float strokeMask = max(max(isSilhouetteEdge, isInterBoneEdge), isCreaseEdge * 0.90);

          vec3 bgColor = vec3(0.043, 0.055, 0.078);
          vec3 boneFill = vec3(0.02, 0.027, 0.043);
          vec3 lineColor = vec3(0.92, 0.95, 0.98);

          if (maxAlpha < 0.05) {
            if (uTransparentBg > 0.5) {
              gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
            } else {
              gl_FragColor = vec4(bgColor, 1.0);
            }
            return;
          }

          vec3 finalRgb = mix(boneFill, lineColor, strokeMask);
          float finalAlpha = max(centerAlpha, isSilhouetteEdge);
          if (uTransparentBg < 0.5) {
            finalRgb = mix(bgColor, finalRgb, finalAlpha);
            finalAlpha = 1.0;
          }
          gl_FragColor = vec4(finalRgb, finalAlpha);
        }
      `,
      transparent: true,
    });
    postMatRef.current = postMaterial;

    const postQuad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), postMaterial);
    postScene.add(postQuad);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = true;
    controls.screenSpacePanning = true;
    controls.panSpeed = 1.15;
    if (threeDragMode === "pan") {
      controls.mouseButtons = {
        LEFT: THREE.MOUSE.PAN,
        MIDDLE: THREE.MOUSE.DOLLY,
        RIGHT: THREE.MOUSE.ROTATE,
      };
      controls.touches = {
        ONE: THREE.TOUCH.PAN,
        TWO: THREE.TOUCH.DOLLY_ROTATE,
      };
    }
    if (lockHorizontalOrbit) {
      controls.minPolarAngle = Math.PI / 2;
      controls.maxPolarAngle = Math.PI / 2;
    }
    orbitControlsRef.current = controls;

    // Turntable group for horizontal rotation (Y-axis) & vertical tilt (X-axis)
    const turntableGroup = new THREE.Group();
    scene.add(turntableGroup);
    turntableGroupRef.current = turntableGroup;

    const centeredBoneGroup = new THREE.Group();
    turntableGroup.add(centeredBoneGroup);

    let isCancelled = false;
    setLoading3D(true);

    const createBoneMaskMaterial = (boneIdVal: number) =>
      new THREE.ShaderMaterial({
        uniforms: {
          uBoneId: { value: boneIdVal },
        },
        vertexShader: `
          varying vec3 vViewNormal;
          void main() {
            vViewNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float uBoneId;
          varying vec3 vViewNormal;
          void main() {
            vec3 n = normalize(vViewNormal) * 0.5 + 0.5;
            gl_FragColor = vec4(n.x, n.y, uBoneId, 1.0);
          }
        `,
        side: THREE.DoubleSide,
      });

    // Load all selected bone parts in parallel (caching per file path)
    const loadSelectedBones = async () => {
      const selectedParts = AVAILABLE_3D_BONE_PARTS.filter((p) =>
        selectedBonePartIds.includes(p.id)
      );
      const fileCache = new Map<string, THREE.Object3D>();
      const gltfLoader = new GLTFLoader();
      const objLoader = new OBJLoader();

      const loadFile = (path: string, type: "glb" | "obj"): Promise<THREE.Object3D> => {
        if (fileCache.has(path)) {
          return Promise.resolve(fileCache.get(path)!);
        }
        return new Promise((resolve, reject) => {
          if (type === "glb") {
            gltfLoader.load(
              path,
              (gltf) => {
                fileCache.set(path, gltf.scene);
                resolve(gltf.scene);
              },
              undefined,
              reject
            );
          } else {
            objLoader.load(
              path,
              (obj) => {
                fileCache.set(path, obj);
                resolve(obj);
              },
              undefined,
              reject
            );
          }
        });
      };

      try {
        for (const part of selectedParts) {
          const rootObj = await loadFile(part.path, part.type);
          if (isCancelled) return;

          rootObj.updateMatrixWorld(true);
          const filterRegex = part.nodeFilter ? new RegExp(part.nodeFilter, "i") : null;
          const mat = createBoneMaskMaterial(part.boneIdVal);

          rootObj.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
              const m = child as THREE.Mesh;
              const nameCandidate = `${m.name || ""} ${m.parent?.name || ""}`.trim();
              if (filterRegex && !filterRegex.test(nameCandidate)) {
                return;
              }
              const geom = m.geometry.clone();
              geom.applyMatrix4(m.matrixWorld);
              // Convert BodyParts3D Z-up medical coordinates to Three.js Y-up (standing upright in AP view)
              geom.rotateX(-Math.PI / 2);
              geom.computeVertexNormals();

              const mesh = new THREE.Mesh(geom, mat);
              centeredBoneGroup.add(mesh);
            }
          });
        }

        if (isCancelled) return;

        // Compute combined bounding box of all selected bones so they stay articulated together
        const combinedBox = new THREE.Box3().setFromObject(centeredBoneGroup);
        if (!combinedBox.isEmpty()) {
          const center = combinedBox.getCenter(new THREE.Vector3());
          const size = combinedBox.getSize(new THREE.Vector3());
          const maxDim = Math.max(size.x, size.y, size.z) || 1;
          const scale = 2.25 / maxDim;

          centeredBoneGroup.position.set(-center.x, -center.y, -center.z);
          baseScaleRef.current = scale;

          turntableGroup.scale.set(
            flipHorizontal ? -scale : scale,
            scale,
            scale
          );
          turntableGroup.rotation.y = (horizontalAngleDeg * Math.PI) / 180;
          turntableGroup.rotation.x = (verticalTiltDeg * Math.PI) / 180;
        }
      } catch (e) {
        console.error("Failed loading 3D bone parts:", e);
      } finally {
        if (!isCancelled) setLoading3D(false);
      }
    };

    loadSelectedBones();

    const renderFrame = (transparentBg: boolean) => {
      if (postMatRef.current) {
        postMatRef.current.uniforms.uTransparentBg.value = transparentBg ? 1.0 : 0.0;
      }
      renderer.setRenderTarget(renderTarget);
      renderer.clear();
      renderer.render(scene, camera);

      renderer.setRenderTarget(null);
      renderer.clear();
      renderer.render(postScene, postCamera);
    };

    threeCaptureFnRef.current = () => {
      renderFrame(true);
      const dataUrl = renderer.domElement.toDataURL("image/png");
      renderFrame(false);
      return dataUrl;
    };

    let reqId = 0;
    const animate = () => {
      reqId = requestAnimationFrame(animate);
      controls.update();
      renderFrame(false);
    };
    animate();

    return () => {
      isCancelled = true;
      cancelAnimationFrame(reqId);
      threeCaptureFnRef.current = null;
      turntableGroupRef.current = null;
      postMatRef.current = null;
      orbitControlsRef.current = null;
      controls.dispose();
      renderTarget.dispose();
      renderer.dispose();
    };
  }, [show3DGenerator, selectedBonePartIds]);

  // Instant 60fps updates for Horizontal Rotation, Vertical Tilt, Pan, Flip, Orbit Lock & Outline Thickness
  useEffect(() => {
    const dpr = Math.min(window.devicePixelRatio, 2);
    if (postMatRef.current) {
      postMatRef.current.uniforms.uThickness.value = outlineThickness * dpr;
    }
    if (turntableGroupRef.current) {
      const s = baseScaleRef.current;
      turntableGroupRef.current.scale.set(flipHorizontal ? -s : s, s, s);
      turntableGroupRef.current.rotation.y = (horizontalAngleDeg * Math.PI) / 180;
      turntableGroupRef.current.rotation.x = (verticalTiltDeg * Math.PI) / 180;
      turntableGroupRef.current.position.set(threePanX, threePanY, 0);
    }
    if (orbitControlsRef.current) {
      const ctrl = orbitControlsRef.current;
      ctrl.enablePan = true;
      ctrl.screenSpacePanning = true;
      if (threeDragMode === "pan") {
        ctrl.mouseButtons = {
          LEFT: THREE.MOUSE.PAN,
          MIDDLE: THREE.MOUSE.DOLLY,
          RIGHT: THREE.MOUSE.ROTATE,
        };
        ctrl.touches = {
          ONE: THREE.TOUCH.PAN,
          TWO: THREE.TOUCH.DOLLY_ROTATE,
        };
      } else {
        ctrl.mouseButtons = {
          LEFT: THREE.MOUSE.ROTATE,
          MIDDLE: THREE.MOUSE.DOLLY,
          RIGHT: THREE.MOUSE.PAN,
        };
        ctrl.touches = {
          ONE: THREE.TOUCH.ROTATE,
          TWO: THREE.TOUCH.DOLLY_PAN,
        };
      }
      if (lockHorizontalOrbit) {
        ctrl.minPolarAngle = Math.PI / 2;
        ctrl.maxPolarAngle = Math.PI / 2;
      } else {
        ctrl.minPolarAngle = 0.05;
        ctrl.maxPolarAngle = Math.PI - 0.05;
      }
      ctrl.update();
    }
  }, [
    outlineThickness,
    horizontalAngleDeg,
    verticalTiltDeg,
    threePanX,
    threePanY,
    threeDragMode,
    flipHorizontal,
    lockHorizontalOrbit,
  ]);

  // Capture 3D Line Art into the 2D SVG canvas background
  const handleCapture3DLineArt = () => {
    if (!threeCaptureFnRef.current) return;
    const dataUrl = threeCaptureFnRef.current();
    if (!dataUrl) return;

    setBgImageDataUrl(dataUrl);
    setShowBuiltinBase(false);
    setInvertBgInDark(false);
    setShow3DGenerator(false);
  };

  // Build clean standalone SVG string for a given variant
  const buildSvgMarkup = useCallback(
    (variant: ClassificationVariant, darkTheme: boolean): string => {
      const boneStrokeColor = darkTheme ? "#E2E8F0" : "#111827";
      const boneFillColor = darkTheme ? "#05070B" : "#FFFFFF";
      const fractureColor = darkTheme ? "#00BCE3" : "#EF4444";
      const innerContourWidth = Math.max(0.4, +(boneOutlineWidth * 0.62).toFixed(1));

      const parts: string[] = [];
      parts.push(
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500" fill="none">`
      );

      if (bgImageDataUrl) {
        parts.push(
          `  <image href="${bgImageDataUrl}" x="0" y="0" width="500" height="500" opacity="${bgOpacity}" preserveAspectRatio="xMidYMid meet" />`
        );
      }

      if (showBuiltinBase) {
        parts.push(`  <g id="bone-fill">`);
        currentTemplate.fillPaths.forEach((d) => {
          parts.push(`    <path d="${d}" fill="${boneFillColor}" />`);
        });
        parts.push(`  </g>`);

        parts.push(
          `  <g id="bone-outer-cortex" stroke="${boneStrokeColor}" stroke-width="${boneOutlineWidth}" stroke-linecap="round" stroke-linejoin="round">`
        );
        currentTemplate.outerPaths.forEach((d) => {
          parts.push(`    <path d="${d}" />`);
        });
        parts.push(`  </g>`);

        parts.push(
          `  <g id="bone-inner-contours" stroke="${boneStrokeColor}" stroke-width="${innerContourWidth}" stroke-linecap="round" stroke-linejoin="round" opacity="0.92">`
        );
        currentTemplate.innerPaths.forEach((d) => {
          parts.push(`    <path d="${d}" />`);
        });
        parts.push(`  </g>`);
      }

      if (customBoneStrokes.length > 0) {
        parts.push(
          `  <g id="custom-bone-strokes" stroke="${boneStrokeColor}" stroke-linecap="round" stroke-linejoin="round">`
        );
        customBoneStrokes.forEach((s) => {
          const d = pointsToSvgPath(s.points, s.wavy, s.waveAmp, s.waveFreq);
          parts.push(`    <path d="${d}" stroke-width="${s.strokeWidth}" />`);
        });
        parts.push(`  </g>`);
      }

      parts.push(
        `  <g id="fracture-lines" stroke="${fractureColor}" stroke-linecap="round" stroke-linejoin="round">`
      );
      variant.fractureStrokes.forEach((s) => {
        const d = pointsToSvgPath(s.points, s.wavy, s.waveAmp, s.waveFreq);
        parts.push(`    <path d="${d}" stroke-width="${s.strokeWidth}" />`);
      });
      parts.push(`  </g>`);
      parts.push(`</svg>`);
      return parts.join("\n");
    },
    [
      bgImageDataUrl,
      bgOpacity,
      showBuiltinBase,
      currentTemplate,
      customBoneStrokes,
      boneOutlineWidth,
      strokeWidth,
    ]
  );

  // Download SVG file
  const handleDownloadSvg = (variant: ClassificationVariant) => {
    const svgString = buildSvgMarkup(variant, previewDarkTheme);
    const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${selectedTemplateId}_${variant.id}_${previewDarkTheme ? "dark" : "light"}.svg`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Download High-Res Transparent PNG (1024x1024)
  const handleDownloadPng = (variant: ClassificationVariant) => {
    const svgString = buildSvgMarkup(variant, previewDarkTheme);
    const img = new Image();
    const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 1024;
      canvas.height = 1024;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(img, 0, 0, 1024, 1024);
        const pngUrl = canvas.toDataURL("image/png");
        const a = document.createElement("a");
        a.href = pngUrl;
        a.download = `${selectedTemplateId}_${variant.id}_${previewDarkTheme ? "dark" : "light"}.png`;
        a.click();
      }
      URL.revokeObjectURL(url);
    };
    img.src = url;
  };

  const handleCopySvgCode = () => {
    const code = buildSvgMarkup(activeVariant, previewDarkTheme);
    navigator.clipboard.writeText(code);
    setCopiedSvg(true);
    setTimeout(() => setCopiedSvg(false), 2000);
  };

  const handleAddVariant = () => {
    const nextNum = variants.length + 1;
    const newVar: ClassificationVariant = {
      id: `type_${nextNum}`,
      title: `Type ${nextNum} Fracture`,
      subtitle: "Custom fracture pattern",
      fractureStrokes: [],
    };
    setVariants((prev) => [...prev, newVar]);
    setActiveVariantIdx(variants.length);
  };

  const boneStrokeColor = previewDarkTheme ? "#E2E8F0" : "#111827";
  const boneFillColor = previewDarkTheme ? "#05070B" : "#FFFFFF";
  const fractureColor = previewDarkTheme ? "#00BCE3" : "#EF4444";

  return (
    <div className="fixed inset-0 z-[100] bg-[#090C12]/95 backdrop-blur-xl text-slate-100 flex flex-col select-none overflow-hidden">
      {/* ── Top Studio Header ── */}
      <div className="h-14 px-5 border-b border-white/10 bg-[#0E131F] flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shadow-inner">
            <Sparkles size={18} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-black text-sm tracking-tight text-white">
                Fracture Atlas Studio
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                Secret Lab • 0 Token Cost
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium">
              วาดโครงกระดูกครั้งเดียว แยก Layer รอยหักแต่ละ Type สไตล์ Fracturium Atlas (Export SVG / PNG)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          {/* Template Selector */}
          <select
            value={selectedTemplateId}
            onChange={(e) => handleSelectTemplate(e.target.value)}
            className="bg-[#161E2E] border border-white/15 rounded-xl px-3 py-1.5 text-xs font-bold text-slate-100 focus:outline-none focus:border-cyan-400 cursor-pointer"
          >
            {BUILTIN_TEMPLATES.map((tpl) => (
              <option key={tpl.id} value={tpl.id}>
                🦴 {tpl.name}
              </option>
            ))}
          </select>

          {/* 3D Line Art Capture Button */}
          <button
            onClick={() => setShow3DGenerator((v) => !v)}
            className={`px-3 py-1.5 rounded-xl text-xs font-extrabold border transition-all flex items-center gap-1.5 cursor-pointer ${
              show3DGenerator
                ? "bg-purple-500/25 border-purple-400 text-purple-200"
                : "bg-[#161E2E] border-white/10 text-slate-300 hover:border-purple-400/50"
            }`}
          >
            <Box size={14} />
            <span>ดึงเส้นจาก 3D Model</span>
          </button>

          {/* Theme Toggle (Fracturium Dark vs Original Light) */}
          <button
            onClick={() => setPreviewDarkTheme((v) => !v)}
            className="px-3 py-1.5 rounded-xl text-xs font-extrabold bg-[#161E2E] border border-white/10 hover:border-cyan-400/50 text-slate-200 flex items-center gap-1.5 cursor-pointer transition-all"
            title="สลับโหมดสี Dark Atlas (ขาว-ฟ้า) / Light Original (ดำ-แดง)"
          >
            {previewDarkTheme ? (
              <>
                <Moon size={14} className="text-cyan-400" />
                <span>Dark Mode (ขาว-ฟ้า)</span>
              </>
            ) : (
              <>
                <Sun size={14} className="text-rose-400" />
                <span>Light Mode (ดำ-แดง)</span>
              </>
            )}
          </button>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-white/5 hover:bg-rose-500/20 border border-white/10 hover:border-rose-500/40 flex items-center justify-center text-slate-400 hover:text-rose-300 transition-all cursor-pointer"
            title="ปิดหน้าต่าง Studio (Esc)"
          >
            <X size={17} />
          </button>
        </div>
      </div>

      {/* ── Main 3-Column Studio Workspace ── */}
      <div className="flex-1 flex min-h-0 overflow-hidden">
        {/* LEFT COLUMN: Drawing Tools & Base Bone Controls */}
        <div className="w-72 border-r border-white/10 bg-[#0D111A] p-4 flex flex-col gap-4 overflow-y-auto flex-shrink-0">
          {/* 1. Pen Mode */}
          <div className="space-y-2">
            <label className="text-[11px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <PenTool size={13} className="text-cyan-400" />
              <span>1. เลือกปากกาที่ใช้วาด</span>
            </label>
            <div className="grid grid-cols-1 gap-1.5">
              <button
                onClick={() => setActiveTool("fracture")}
                className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                  activeTool === "fracture"
                    ? "bg-cyan-500/15 border-cyan-400 text-white shadow-sm"
                    : "bg-white/[0.03] border-white/10 text-slate-400 hover:text-slate-200"
                }`}
              >
                <div>
                  <div className="text-xs font-extrabold flex items-center gap-1.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full inline-block"
                      style={{ background: fractureColor }}
                    />
                    <span>วาดเส้นรอยหัก (Fracture Line)</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    บันทึกเฉพาะใน Type ที่เลือกอยู่
                  </div>
                </div>
              </button>

              <button
                onClick={() => setActiveTool("bone")}
                className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                  activeTool === "bone"
                    ? "bg-slate-100/15 border-slate-300 text-white"
                    : "bg-white/[0.03] border-white/10 text-slate-400 hover:text-slate-200"
                }`}
              >
                <div>
                  <div className="text-xs font-extrabold flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-white inline-block" />
                    <span>วาดขอบกระดูก (Base Cortex)</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    แชร์ร่วมกันทุก Type อัตโนมัติ
                  </div>
                </div>
              </button>

              <button
                onClick={() => setActiveTool("pan")}
                className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                  activeTool === "pan"
                    ? "bg-amber-500/20 border-amber-400 text-white"
                    : "bg-white/[0.03] border-white/10 text-slate-400 hover:text-slate-200"
                }`}
              >
                <div>
                  <div className="text-xs font-extrabold flex items-center gap-1.5">
                    <span>🖐️ เลื่อนตำแหน่งกระดาน (Pan 2D)</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    คลิกซ้ายลากเพื่อเลื่อนภาพ หรือคลิกขวาลากได้ตลอด
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* 2. Wavy Fracture & Outline Thickness Parameters */}
          <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
            <div className="space-y-1 pb-2 border-b border-white/10">
              <div className="flex justify-between text-[11px] text-slate-200 font-extrabold">
                <span>ความหนาเส้นขอบกระดูก (Bone Outline)</span>
                <span className="text-cyan-300">{boneOutlineWidth.toFixed(1)}px</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="24"
                step="0.2"
                value={boneOutlineWidth}
                onChange={(e) => setBoneOutlineWidth(parseFloat(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>

            <div className="space-y-1 pb-2 border-b border-white/10">
              <div className="flex justify-between text-[11px] text-slate-200 font-extrabold">
                <span>ความหนาเส้นรอยหัก (Fracture Width)</span>
                <span className="text-cyan-300">{strokeWidth.toFixed(1)}px</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="20"
                step="0.2"
                value={strokeWidth}
                onChange={(e) => {
                  const val = parseFloat(e.target.value);
                  setStrokeWidth(val);
                  setVariants((prev) =>
                    prev.map((v, idx) =>
                      idx === activeVariantIdx
                        ? {
                            ...v,
                            fractureStrokes: v.fractureStrokes.map((s) => ({
                              ...s,
                              strokeWidth: val,
                            })),
                          }
                        : v
                    )
                  );
                }}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold text-slate-200 flex items-center gap-1.5">
                <Sliders size={13} className="text-cyan-400" />
                <span>เส้นหยักรอยหักอัตโนมัติ</span>
              </span>
              <input
                type="checkbox"
                checked={wavyEnabled}
                onChange={(e) => setWavyEnabled(e.target.checked)}
                className="accent-cyan-400 w-4 h-4 cursor-pointer"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-[11px] text-slate-400 font-bold">
                <span>ความหยัก (Amplitude)</span>
                <span className="text-cyan-300">{waveAmp.toFixed(1)}px</span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                step="0.2"
                value={waveAmp}
                onChange={(e) => {
                  const val = parseFloat(e.target.value);
                  setWaveAmp(val);
                  setVariants((prev) =>
                    prev.map((v, idx) =>
                      idx === activeVariantIdx
                        ? {
                            ...v,
                            fractureStrokes: v.fractureStrokes.map((s) => ({
                              ...s,
                              waveAmp: val,
                            })),
                          }
                        : v
                    )
                  );
                }}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-[11px] text-slate-400 font-bold">
                <span>ความถี่รอยหยัก (Frequency)</span>
                <span className="text-cyan-300">{waveFreq.toFixed(1)}</span>
              </div>
              <input
                type="range"
                min="0.8"
                max="3.5"
                step="0.1"
                value={waveFreq}
                onChange={(e) => {
                  const val = parseFloat(e.target.value);
                  setWaveFreq(val);
                  setVariants((prev) =>
                    prev.map((v, idx) =>
                      idx === activeVariantIdx
                        ? {
                            ...v,
                            fractureStrokes: v.fractureStrokes.map((s) => ({
                              ...s,
                              waveFreq: val,
                            })),
                          }
                        : v
                    )
                  );
                }}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>
          </div>

          {/* 3. Base Bone Layer Controls */}
          <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2.5">
            <div className="text-[11px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Layers size={13} className="text-cyan-400" />
              <span>โครงกระดูกตั้งต้น (Base Layer)</span>
            </div>

            <button
              onClick={() => setShowBuiltinBase((v) => !v)}
              className="w-full px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold flex items-center justify-between cursor-pointer"
            >
              <span>แสดงโครงกระดูก Vector</span>
              {showBuiltinBase ? (
                <Eye size={14} className="text-cyan-400" />
              ) : (
                <EyeOff size={14} className="text-slate-500" />
              )}
            </button>

            {/* Upload custom base image (like user's image 2) */}
            <label className="w-full px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold flex items-center justify-between cursor-pointer">
              <span>อัปโหลดรูปกระดูก/X-ray ต้นแบบ</span>
              <Upload size={14} className="text-cyan-400" />
              <input
                type="file"
                accept="image/*"
                onChange={handleUploadImage}
                className="hidden"
              />
            </label>

            {bgImageDataUrl && (
              <div className="space-y-2 pt-1 border-t border-white/10">
                <div className="flex justify-between text-[11px] text-slate-400 font-bold">
                  <span>ความชัดรูปพื้นหลัง</span>
                  <span>{Math.round(bgOpacity * 100)}%</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="1"
                  step="0.05"
                  value={bgOpacity}
                  onChange={(e) => setBgOpacity(parseFloat(e.target.value))}
                  className="w-full accent-cyan-400"
                />
                <div className="flex items-center justify-between text-[11px] text-slate-300">
                  <span>กลับสีรูปต้นแบบ (Invert)</span>
                  <input
                    type="checkbox"
                    checked={invertBgInDark}
                    onChange={(e) => setInvertBgInDark(e.target.checked)}
                    className="accent-cyan-400"
                  />
                </div>
                <button
                  onClick={() => setBgImageDataUrl(null)}
                  className="w-full py-1 rounded-lg bg-rose-500/15 text-rose-300 text-[11px] font-bold hover:bg-rose-500/25 cursor-pointer"
                >
                  ลบรูปพื้นหลัง
                </button>
              </div>
            )}

            {customBoneStrokes.length > 0 && (
              <button
                onClick={handleUndoBoneStroke}
                className="w-full py-1.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Undo2 size={13} />
                <span>ย้อนกลับเส้นกระดูก ({customBoneStrokes.length})</span>
              </button>
            )}
          </div>

          {/* 4. Export Actions */}
          <div className="mt-auto pt-2 space-y-2">
            <button
              onClick={() => handleDownloadSvg(activeVariant)}
              className="w-full py-2.5 px-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 cursor-pointer transition-all"
            >
              <Download size={15} />
              <span>Download SVG ({activeVariant.title})</span>
            </button>

            <div className="grid grid-cols-2 gap-1.5">
              <button
                onClick={() => handleDownloadPng(activeVariant)}
                className="py-2 px-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-extrabold text-[11px] flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Download size={13} />
                <span>PNG (1024px)</span>
              </button>

              <button
                onClick={handleCopySvgCode}
                className="py-2 px-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-extrabold text-[11px] flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {copiedSvg ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                <span>{copiedSvg ? "Copied!" : "Copy SVG"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* CENTER COLUMN: Interactive SVG Drawing Canvas */}
        <div className="flex-1 bg-[#070A0F] flex flex-col items-center justify-center p-6 relative overflow-hidden">
          {/* Active Variant Top Bar */}
          <div className="mb-3 flex items-center gap-3 bg-[#111726] border border-white/10 px-4 py-2 rounded-2xl shadow-lg">
            <span className="text-xs font-black text-cyan-400 uppercase tracking-wider">
              กำลังแก้ไข:
            </span>
            <input
              type="text"
              value={activeVariant.title}
              onChange={(e) => {
                const val = e.target.value;
                setVariants((prev) =>
                  prev.map((v, idx) => (idx === activeVariantIdx ? { ...v, title: val } : v))
                );
              }}
              className="bg-transparent border-b border-white/20 focus:border-cyan-400 text-sm font-black text-white focus:outline-none px-1"
            />
            <div className="h-4 w-px bg-white/10 mx-1" />
            <button
              onClick={handleUndoFracture}
              disabled={activeVariant.fractureStrokes.length === 0}
              className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-40 text-xs font-bold text-slate-200 flex items-center gap-1 cursor-pointer"
              title="ลบเส้นรอยหักล่าสุด"
            >
              <Undo2 size={13} />
              <span>Undo รอยหัก</span>
            </button>
            <button
              onClick={handleClearFractures}
              disabled={activeVariant.fractureStrokes.length === 0}
              className="px-2.5 py-1 rounded-lg bg-rose-500/15 hover:bg-rose-500/25 disabled:opacity-40 text-xs font-bold text-rose-300 flex items-center gap-1 cursor-pointer"
            >
              <Trash2 size={13} />
              <span>ล้างรอยหักใน Type นี้</span>
            </button>
          </div>

          {/* Main 500x500 Drawing Board */}
          <div
            className="relative rounded-3xl border-2 shadow-2xl overflow-hidden transition-colors"
            style={{
              width: "min(500px, 68vh)",
              height: "min(500px, 68vh)",
              background: previewDarkTheme ? "#0B0D11" : "#FFFFFF",
              borderColor: previewDarkTheme ? "rgba(255,255,255,0.14)" : "#CBD5E1",
            }}
          >
            {/* 2D Zoom & Reset Pan Overlay Pill */}
            <div className="absolute top-2.5 right-2.5 z-20 flex items-center gap-1 bg-black/70 backdrop-blur-md border border-white/15 rounded-xl px-2 py-1 text-[11px] font-bold text-slate-200">
              <button
                onClick={() => setCanvasZoom((z) => Math.max(0.5, +(z - 0.2).toFixed(1)))}
                className="px-1.5 hover:text-cyan-400 cursor-pointer"
                title="ซูมออก"
              >
                −
              </button>
              <span className="px-1 text-[10px]">{Math.round(canvasZoom * 100)}%</span>
              <button
                onClick={() => setCanvasZoom((z) => Math.min(3.0, +(z + 0.2).toFixed(1)))}
                className="px-1.5 hover:text-cyan-400 cursor-pointer"
                title="ซูมเข้า"
              >
                +
              </button>
              {(canvasPan.x !== 0 || canvasPan.y !== 0 || canvasZoom !== 1) && (
                <button
                  onClick={() => {
                    setCanvasPan({ x: 0, y: 0 });
                    setCanvasZoom(1);
                  }}
                  className="ml-1 px-1.5 py-0.5 rounded bg-white/10 hover:bg-white/20 text-[10px] text-cyan-300 cursor-pointer"
                >
                  Reset
                </button>
              )}
            </div>

            <svg
              ref={svgCanvasRef}
              viewBox="0 0 500 500"
              style={{
                transform: `translate(${canvasPan.x}px, ${canvasPan.y}px) scale(${canvasZoom})`,
                transformOrigin: "center center",
              }}
              className={`w-full h-full touch-none ${
                activeTool === "pan" || isPanning2D ? "cursor-grab active:cursor-grabbing" : "cursor-crosshair"
              }`}
              onContextMenu={(e) => e.preventDefault()}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
            >
              {/* Optional Uploaded / 3D Captured Reference Layer */}
              {bgImageDataUrl && (
                <image
                  href={bgImageDataUrl}
                  x="0"
                  y="0"
                  width="500"
                  height="500"
                  opacity={bgOpacity}
                  style={{
                    filter: invertBgInDark && previewDarkTheme ? "invert(1)" : "none",
                  }}
                  preserveAspectRatio="xMidYMid meet"
                />
              )}

              {/* Built-in Vector Bone Base Layer */}
              {showBuiltinBase && (
                <>
                  <g>
                    {currentTemplate.fillPaths.map((d, i) => (
                      <path key={`fill_${i}`} d={d} fill={boneFillColor} />
                    ))}
                  </g>
                  <g
                    stroke={boneStrokeColor}
                    strokeWidth={boneOutlineWidth}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  >
                    {currentTemplate.outerPaths.map((d, i) => (
                      <path key={`outer_${i}`} d={d} />
                    ))}
                  </g>
                  <g
                    stroke={boneStrokeColor}
                    strokeWidth={Math.max(0.4, +(boneOutlineWidth * 0.62).toFixed(1))}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    opacity={0.92}
                  >
                    {currentTemplate.innerPaths.map((d, i) => (
                      <path key={`inner_${i}`} d={d} />
                    ))}
                  </g>
                </>
              )}

              {/* Custom Shared Bone Strokes */}
              <g
                stroke={boneStrokeColor}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              >
                {customBoneStrokes.map((s) => (
                  <path
                    key={s.id}
                    d={pointsToSvgPath(s.points, s.wavy, s.waveAmp, s.waveFreq)}
                    strokeWidth={s.strokeWidth}
                  />
                ))}
              </g>

              {/* Current Variant's Fracture Lines */}
              <g
                stroke={fractureColor}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              >
                {activeVariant.fractureStrokes.map((s) => (
                  <path
                    key={s.id}
                    d={pointsToSvgPath(s.points, s.wavy, s.waveAmp, s.waveFreq)}
                    strokeWidth={s.strokeWidth}
                  />
                ))}
              </g>

              {/* Live Stroke Being Drawn */}
              {isDrawing && currentPoints.length > 1 && (
                <path
                  d={pointsToSvgPath(
                    currentPoints,
                    activeTool === "fracture" ? wavyEnabled : false,
                    activeTool === "fracture" ? waveAmp : 0,
                    activeTool === "fracture" ? waveFreq : 1
                  )}
                  stroke={activeTool === "fracture" ? fractureColor : boneStrokeColor}
                  strokeWidth={strokeWidth}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              )}
            </svg>
          </div>

          <p className="mt-3 text-xs text-slate-400 font-medium">
            💡 คลิกเมาส์ค้างแล้วลากผ่านกระดูกเพื่อวาดเส้นรอยหัก ระบบจะแปลงเป็นเส้นหยักสีฟ้าให้อัตโนมัติ
          </p>

          {/* ── 3D Model Line-Art Capture Overlay Modal ── */}
          {show3DGenerator && (
            <div className="absolute inset-4 z-30 rounded-3xl bg-[#0D121D]/95 border border-purple-400/30 shadow-2xl flex flex-col p-5 backdrop-blur-xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div>
                  <h3 className="text-sm font-black text-white flex items-center gap-2">
                    <Box size={16} className="text-purple-400" />
                    <span>3D Multi-Bone to 2D Line-Art Converter (เลือกผสมหลายกระดูก + หมุนแนวนอน)</span>
                  </h3>
                  <p className="text-xs text-slate-400">
                    เลือกผสมกระดูกหลายชิ้น (เช่น Clavicle + Scapula + Humerus) ปรับหมุนแนวนอน แล้วกด Capture
                  </p>
                </div>
                <button
                  onClick={() => setShow3DGenerator(false)}
                  className="px-3 py-1 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-bold cursor-pointer"
                >
                  ปิดหน้าต่าง 3D
                </button>
              </div>

              <div className="flex-1 flex gap-4 min-h-0 pt-3">
                {/* Left 3D Control Sidebar */}
                <div className="w-76 flex flex-col gap-3 overflow-y-auto pr-1 flex-shrink-0">
                  {/* 1. Quick Joint Combo Presets */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-black uppercase tracking-wider text-purple-300">
                      1. ชุดข้อต่อสำเร็จรูป (Joint Combos)
                    </label>
                    <div className="grid grid-cols-1 gap-1">
                      {JOINT_COMBO_PRESETS.map((preset) => {
                        const isMatch =
                          preset.parts.length === selectedBonePartIds.length &&
                          preset.parts.every((p) => selectedBonePartIds.includes(p));
                        return (
                          <button
                            key={preset.id}
                            onClick={() => {
                              setSelectedBonePartIds(preset.parts);
                              setHorizontalAngleDeg(0);
                              setVerticalTiltDeg(0);
                            }}
                            className={`px-2.5 py-1.5 rounded-xl border text-left text-[11px] font-extrabold cursor-pointer transition-all ${
                              isMatch
                                ? "bg-purple-500/25 border-purple-400 text-white"
                                : "bg-white/[0.03] border-white/10 text-slate-300 hover:border-purple-400/40"
                            }`}
                          >
                            🦴 {preset.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 2. Individual Multi-Bone Checkboxes */}
                  <div className="p-2.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1.5">
                    <label className="text-[11px] font-black uppercase tracking-wider text-slate-300 block">
                      2. เลือกผสมกระดูกหลายชิ้นอิสระ ({selectedBonePartIds.length} ชิ้น)
                    </label>
                    <div className="max-h-36 overflow-y-auto space-y-1 pr-1">
                      {AVAILABLE_3D_BONE_PARTS.map((part) => {
                        const checked = selectedBonePartIds.includes(part.id);
                        return (
                          <label
                            key={part.id}
                            className={`flex items-center justify-between px-2 py-1 rounded-lg text-[11px] font-bold cursor-pointer transition-all ${
                              checked
                                ? "bg-purple-500/20 text-white"
                                : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                checked={checked}
                                onChange={() => toggleBonePart(part.id)}
                                className="accent-purple-400 rounded cursor-pointer"
                              />
                              <span>{part.label}</span>
                            </div>
                            <span className="text-[9px] text-slate-500">{part.group}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* 3. Horizontal Rotation & Orientation Controls */}
                  <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2.5">
                    <div className="flex justify-between text-xs text-slate-200 font-extrabold">
                      <span>หมุนแนวนอน (Horizontal Rotation)</span>
                      <span className="text-purple-300">{horizontalAngleDeg}°</span>
                    </div>
                    <input
                      type="range"
                      min="-180"
                      max="180"
                      step="1"
                      value={horizontalAngleDeg}
                      onChange={(e) => setHorizontalAngleDeg(parseFloat(e.target.value))}
                      className="w-full accent-purple-400 cursor-pointer"
                    />
                    <div className="grid grid-cols-5 gap-1">
                      {[
                        { label: "-90°", val: -90 },
                        { label: "-45°", val: -45 },
                        { label: "0° AP", val: 0 },
                        { label: "+45°", val: 45 },
                        { label: "+90°", val: 90 },
                      ].map((btn) => (
                        <button
                          key={btn.label}
                          onClick={() => setHorizontalAngleDeg(btn.val)}
                          className={`py-1 rounded-lg text-[10px] font-extrabold border cursor-pointer ${
                            horizontalAngleDeg === btn.val
                              ? "bg-purple-500/30 border-purple-400 text-white"
                              : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                          }`}
                        >
                          {btn.label}
                        </button>
                      ))}
                    </div>

                    <div className="flex justify-between text-[11px] text-slate-300 font-bold pt-1">
                      <span>ก้ม-เงย (Vertical Tilt)</span>
                      <span className="text-purple-300">{verticalTiltDeg}°</span>
                    </div>
                    <input
                      type="range"
                      min="-85"
                      max="85"
                      step="1"
                      value={verticalTiltDeg}
                      onChange={(e) => setVerticalTiltDeg(parseFloat(e.target.value))}
                      className="w-full accent-purple-400 cursor-pointer"
                    />

                    {/* Pan X / Pan Y Sliders */}
                    <div className="grid grid-cols-2 gap-2 pt-1 border-t border-white/10">
                      <div>
                        <div className="flex justify-between text-[10px] text-slate-300 font-bold">
                          <span>เลื่อนซ้าย-ขวา (Pan X)</span>
                          <span className="text-purple-300">{threePanX.toFixed(2)}</span>
                        </div>
                        <input
                          type="range"
                          min="-2.0"
                          max="2.0"
                          step="0.05"
                          value={threePanX}
                          onChange={(e) => setThreePanX(parseFloat(e.target.value))}
                          className="w-full accent-purple-400 cursor-pointer"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between text-[10px] text-slate-300 font-bold">
                          <span>เลื่อนขึ้น-ลง (Pan Y)</span>
                          <span className="text-purple-300">{threePanY.toFixed(2)}</span>
                        </div>
                        <input
                          type="range"
                          min="-2.0"
                          max="2.0"
                          step="0.05"
                          value={threePanY}
                          onChange={(e) => setThreePanY(parseFloat(e.target.value))}
                          className="w-full accent-purple-400 cursor-pointer"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <label className="flex items-center gap-1.5 text-[11px] font-bold text-slate-300 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={lockHorizontalOrbit}
                          onChange={(e) => setLockHorizontalOrbit(e.target.checked)}
                          className="accent-purple-400 cursor-pointer"
                        />
                        <span>ล็อกเมาส์หมุนเฉพาะแนวนอน</span>
                      </label>

                      <button
                        onClick={() => setFlipHorizontal((v) => !v)}
                        className={`px-2 py-1 rounded-lg text-[10px] font-extrabold border cursor-pointer ${
                          flipHorizontal
                            ? "bg-purple-500/30 border-purple-400 text-white"
                            : "bg-white/5 border-white/10 text-slate-300"
                        }`}
                      >
                        ↔ Flip ซ้าย-ขวา
                      </button>
                    </div>
                  </div>

                  {/* 4. 3D Outline Thickness */}
                  <div className="p-2.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                    <div className="flex justify-between text-xs text-slate-200 font-extrabold">
                      <span>ความหนาเส้นขอบ 3D (px)</span>
                      <span className="text-purple-300">{outlineThickness.toFixed(1)} px</span>
                    </div>
                    <input
                      type="range"
                      min="0.5"
                      max="20"
                      step="0.2"
                      value={outlineThickness}
                      onChange={(e) => setOutlineThickness(parseFloat(e.target.value))}
                      className="w-full accent-purple-400 cursor-pointer"
                    />
                  </div>

                  <button
                    onClick={handleCapture3DLineArt}
                    className="mt-auto py-3 px-4 rounded-xl bg-purple-500 hover:bg-purple-400 text-slate-950 font-black text-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                  >
                    <Camera size={15} />
                    <span>Capture เป็นโครงกระดูก 2D</span>
                  </button>
                </div>

                <div className="flex-1 rounded-2xl bg-[#07090E] border border-white/10 relative flex items-center justify-center overflow-hidden">
                  {/* Floating 3D Mouse Mode Bar (Pan vs Rotate + Reset) */}
                  <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 bg-[#111622]/90 backdrop-blur-md border border-white/15 rounded-xl p-1 shadow-lg">
                    <button
                      onClick={() => setThreeDragMode("pan")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${
                        threeDragMode === "pan"
                          ? "bg-purple-500 text-slate-950 shadow"
                          : "text-slate-300 hover:bg-white/10"
                      }`}
                    >
                      <span>🖐️ เมาส์ซ้าย: เลื่อน (Pan)</span>
                    </button>
                    <button
                      onClick={() => setThreeDragMode("rotate")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${
                        threeDragMode === "rotate"
                          ? "bg-purple-500 text-slate-950 shadow"
                          : "text-slate-300 hover:bg-white/10"
                      }`}
                    >
                      <span>🔄 เมาส์ซ้าย: หมุน (Rotate)</span>
                    </button>
                    <button
                      onClick={() => {
                        setThreePanX(0);
                        setThreePanY(0);
                        setHorizontalAngleDeg(0);
                        setVerticalTiltDeg(0);
                        if (orbitControlsRef.current && threeCameraRef.current) {
                          orbitControlsRef.current.target.set(0, 0, 0);
                          threeCameraRef.current.position.set(0, 0, 4.8);
                          orbitControlsRef.current.update();
                        }
                      }}
                      className="px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-300 hover:bg-white/10 border-l border-white/10 cursor-pointer"
                      title="รีเซ็ตตำแหน่งกึ่งกลาง"
                    >
                      🎯 Reset
                    </button>
                  </div>

                  {loading3D && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10 text-xs font-bold text-purple-300">
                      กำลังประกอบโมเดล 3D หลายชิ้นและแปลงเป็นภาพลายเส้น...
                    </div>
                  )}
                  <div
                    ref={threeMountRef}
                    className={`w-full h-full ${
                      threeDragMode === "pan" ? "cursor-grab active:cursor-grabbing" : "cursor-move"
                    }`}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: Fracturium Atlas Live Card List Preview */}
        <div className="w-96 border-l border-white/10 bg-[#0B0D12] p-4 flex flex-col gap-3 overflow-y-auto flex-shrink-0">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-300">
                Fracturium Atlas Preview
              </h3>
              <p className="text-[11px] text-slate-400">
                คลิกที่การ์ดเพื่อสลับวาดรอยหักของแต่ละ Type
              </p>
            </div>
            <button
              onClick={handleAddVariant}
              className="px-2.5 py-1.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-400/30 text-cyan-300 text-xs font-extrabold flex items-center gap-1 cursor-pointer"
            >
              <Plus size={13} />
              <span>เพิ่ม Type</span>
            </button>
          </div>

          {/* Exact Fracturium-style Card Stack */}
          <div className="flex flex-col gap-3">
            {variants.map((variant, idx) => {
              const isSelected = idx === activeVariantIdx;
              return (
                <div
                  key={variant.id}
                  onClick={() => setActiveVariantIdx(idx)}
                  className={`rounded-2xl border p-3.5 transition-all cursor-pointer flex items-center gap-4 ${
                    isSelected
                      ? "bg-[#12161F] border-cyan-400/60 shadow-[0_0_25px_rgba(0,188,227,0.12)]"
                      : "bg-[#101216] border-white/10 hover:border-white/25"
                  }`}
                >
                  {/* Thumbnail Illustration */}
                  <div className="w-24 h-24 rounded-xl bg-[#090B0E] border border-white/5 flex items-center justify-center flex-shrink-0 overflow-hidden p-1">
                    <svg viewBox="0 0 500 500" className="w-full h-full">
                      {bgImageDataUrl && (
                        <image
                          href={bgImageDataUrl}
                          x="0"
                          y="0"
                          width="500"
                          height="500"
                          opacity={bgOpacity}
                          style={{
                            filter: invertBgInDark ? "invert(1)" : "none",
                          }}
                        />
                      )}
                      {showBuiltinBase && (
                        <>
                          {currentTemplate.fillPaths.map((d, i) => (
                            <path key={i} d={d} fill="#05070B" />
                          ))}
                          <g
                            stroke="#E2E8F0"
                            strokeWidth={boneOutlineWidth}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                          >
                            {currentTemplate.outerPaths.map((d, i) => (
                              <path key={i} d={d} />
                            ))}
                          </g>
                          <g
                            stroke="#E2E8F0"
                            strokeWidth={Math.max(0.4, +(boneOutlineWidth * 0.62).toFixed(1))}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            opacity={0.9}
                          >
                            {currentTemplate.innerPaths.map((d, i) => (
                              <path key={i} d={d} />
                            ))}
                          </g>
                        </>
                      )}
                      <g
                        stroke="#E2E8F0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      >
                        {customBoneStrokes.map((s) => (
                          <path
                            key={s.id}
                            d={pointsToSvgPath(s.points, s.wavy, s.waveAmp, s.waveFreq)}
                            strokeWidth={s.strokeWidth}
                          />
                        ))}
                      </g>
                      <g
                        stroke="#00BCE3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      >
                        {variant.fractureStrokes.map((s) => (
                          <path
                            key={s.id}
                            d={pointsToSvgPath(s.points, s.wavy, s.waveAmp, s.waveFreq)}
                            strokeWidth={s.strokeWidth}
                          />
                        ))}
                      </g>
                    </svg>
                  </div>

                  {/* Title & Actions */}
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-extrabold text-white truncate">
                      {variant.title}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                      {variant.fractureStrokes.length} เส้นรอยหัก
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDownloadSvg(variant);
                        }}
                        className="px-2 py-1 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-[10px] font-bold text-cyan-300 border border-white/10 cursor-pointer"
                      >
                        SVG
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDownloadPng(variant);
                        }}
                        className="px-2 py-1 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-[10px] font-bold text-slate-300 border border-white/10 cursor-pointer"
                      >
                        PNG
                      </button>
                    </div>
                  </div>

                  <ChevronDown
                    size={16}
                    className={isSelected ? "text-cyan-400" : "text-slate-600"}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
