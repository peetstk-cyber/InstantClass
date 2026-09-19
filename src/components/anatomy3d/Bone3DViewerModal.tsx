import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { X, Loader2, RotateCcw, Maximize2, Minimize2, Activity, ChevronDown, ChevronUp, ChevronRight, ChevronLeft, Zap, Scan, Move } from "lucide-react";

export interface ClassificationPreset {
  id: string;
  name: string;
  badge: string;
  clinicalTitle: string;
  clinicalPearl: string;
  cutCenter?: [number, number, number];
  cutNormal?: [number, number, number];
  partitionMode?: "bipartite" | "intertroch_comminuted" | "subtroch_bipartite" | "subtroch_lt" | "subtroch_fossa" | "subtroch_comminuted" | "shaft_bipartite" | "shaft_butterfly_small" | "shaft_butterfly_med" | "shaft_butterfly_large" | "shaft_segmental" | "distal_supracondylar" | "distal_unicondylar_lat" | "distal_hoffa" | "distal_bicondylar" | "neer_4part" | "neer_2part_gt" | "neer_2part_sn" | "neer_3part_gt" | "neer_3part_lt" | "humerus_shaft_bipartite" | "humerus_distal_supracondylar" | "humerus_distal_unicondylar_lat" | "humerus_distal_coronal_shear" | "humerus_distal_bicondylar" | "ac_joint_rockwood" | "clavicle_shaft_bipartite" | "clavicle_shaft_butterfly" | "clavicle_shaft_segmental" | "clavicle_distal_neer_v" | "patella_nondisplaced" | "patella_transverse" | "patella_pole" | "patella_vertical" | "patella_comminuted" | "patella_osteochondral" | "schatzker_1" | "schatzker_2" | "schatzker_3" | "schatzker_4" | "schatzker_5" | "schatzker_6" | "ankle_intact" | "lh_ser_1" | "lh_ser_2" | "lh_ser_3" | "lh_ser_4" | "lh_sa_1" | "lh_sa_2" | "lh_per_1" | "lh_per_2" | "lh_per_3" | "lh_per_4" | "lh_pa_1" | "lh_pa_2" | "lh_pa_3";
  proximalRot: [number, number, number];
  proximalPosOffset: [number, number, number];
  distalRot: [number, number, number];
  distalPosOffset: [number, number, number];
  gtRot?: [number, number, number];
  gtPosOffset?: [number, number, number];
  ltRot?: [number, number, number];
  ltPosOffset?: [number, number, number];
  shardRot?: [number, number, number];
  shardPosOffset?: [number, number, number];
}

export interface SubregionConfig {
  id: string;
  name: string;
  badge: string;
  cutCenter: [number, number, number];
  cutNormal: [number, number, number];
  cameraTarget: [number, number, number];
  cameraDistance: number;
  cameraDirection?: [number, number, number];
  viewOffsetRatio?: number;
  presets: ClassificationPreset[];
}

export interface RadiographicViewConfig {
  id: string;
  label: string;
  fullName: string;
  description?: string;
  direction: [number, number, number]; // Unit vector [x, y, z] from target to camera
}

const getRadiographicViews = (
  isHumerus: boolean,
  isClavicle: boolean,
  isPatella: boolean,
  isTibia: boolean,
  subregionId: string
): RadiographicViewConfig[] => {
  if (isTibia) {
    if (subregionId === "distal") {
      return [
        {
          id: "ap",
          label: "AP",
          fullName: "AP Ankle View",
          description: "True AP projection aligned with tibial coronal plane",
          direction: [-0.41, 0, 0.91],
        },
        {
          id: "mortise",
          label: "Mortise",
          fullName: "Ankle Mortise View (28° Internal Rotation)",
          description: "Opens lateral clear space and profiles mortise without fibular superimposition",
          direction: [-0.79, 0, 0.61],
        },
        {
          id: "lat",
          label: "Lat",
          fullName: "Lateral Ankle & Hindfoot View",
          description: "True 90° lateral projection profiling talar dome, subtalar joint, and calcaneus",
          direction: [-0.91, 0, -0.41],
        },
      ];
    }
    return [
      {
        id: "ap",
        label: "AP",
        fullName: "AP Knee / Tibial Plateau View",
        direction: [0, 0, 1],
      },
      {
        id: "lat",
        label: "Lat",
        fullName: "True Lateral Knee View",
        description: "Profiles posterior slope and condylar displacement",
        direction: [-1, 0, 0],
      },
    ];
  }

  if (isPatella) {
    return [
      {
        id: "ap",
        label: "AP",
        fullName: "AP Knee / Patella View",
        direction: [0, 0, 1],
      },
      {
        id: "lat",
        label: "Lat",
        fullName: "True Lateral Knee View",
        description: "Profiles patellar height & transverse fracture gaps",
        direction: [-1, 0, 0],
      },
      {
        id: "skyline",
        label: "Skyline",
        fullName: "Skyline / Merchant Axial View",
        description: "Tangential view through patellofemoral joint & sulcus (scooped from below)",
        direction: [0, -0.86, 0.51],
      },
    ];
  }

  if (isClavicle) {
    return [
      {
        id: "ap",
        label: "AP",
        fullName: "AP Shoulder / Clavicle View",
        direction: [0, 0, 1],
      },
      {
        id: "axillary",
        label: "Axillary",
        fullName: "Axillary Lateral View",
        description: "Evaluates anterior/posterior clavicle displacement",
        direction: [0, 0.88, 0.47],
      },
      {
        id: "lat",
        label: "Lat",
        fullName: "Lateral Clavicle View",
        direction: [-1, 0, 0],
      },
    ];
  }

  if (isHumerus) {
    if (subregionId === "proximal") {
      return [
        {
          id: "ap",
          label: "AP",
          fullName: "True AP Shoulder View (Grashey View)",
          description: "Profiles glenohumeral joint & tuberosity displacement",
          direction: [0, 0, 1],
        },
      ];
    }
    return [
      {
        id: "ap",
        label: "AP",
        fullName: subregionId === "distal" ? "AP Elbow View" : "AP Humerus View",
        direction: [0, 0, 1],
      },
      {
        id: "lat",
        label: "Lat",
        fullName: subregionId === "distal" ? "Lateral Elbow View" : "Lateral Humerus View",
        direction: [-1, 0, 0],
      },
    ];
  }

  // Femur
  return [
    {
      id: "ap",
      label: "AP",
      fullName: subregionId === "distal" ? "AP Knee / Distal Femur View" : "AP Pelvis / Hip View",
      direction: [0, 0, 1],
    },
    {
      id: "lat",
      label: "Lat",
      fullName: "Cross-table Lateral View",
      description: "90° lateral projection perpendicular to AP plane",
      direction: [-1, 0, 0],
    },
  ];
};

// Subregion definitions with anatomical fracture planes & clinical classifications
const FEMUR_SUBREGIONS: SubregionConfig[] = [
  {
    id: "femoral-neck",
    name: "Femoral Neck",
    badge: "Garden Classification",
    cutCenter: [-12.5, 206, 0],
    cutNormal: [0.85, 0.5, 0.1],
    cameraTarget: [-0.07, 1.33, -0.02],
    cameraDistance: 3.0,
    viewOffsetRatio: 0.20,
    presets: [
      {
        id: "garden1",
        name: "Garden I",
        badge: "Incomplete / Valgus",
        clinicalTitle: "Garden I: Incomplete, Valgus Impacted",
        clinicalPearl: "Incomplete fracture line\nOften valgus impacted\nFemoral neck trabeculae angled laterally relative to head",
        proximalRot: [-0.06, 0.02, 0.18],
        proximalPosOffset: [-2.2, -1.2, 0.5],
        distalRot: [0, 0, 0],
        distalPosOffset: [0, 0, 0],
      },
      {
        id: "garden2",
        name: "Garden II",
        badge: "Complete / Undisplaced",
        clinicalTitle: "Garden II: Complete, Undisplaced",
        clinicalPearl: "Complete fracture line\nNo displacement of fragments\nNormal trabecular alignment maintained",
        proximalRot: [0, 0, 0],
        proximalPosOffset: [0.8, 0.8, 0],
        distalRot: [0, 0, 0],
        distalPosOffset: [0, 0, 0],
      },
      {
        id: "garden3",
        name: "Garden III",
        badge: "Varus Displaced",
        clinicalTitle: "Garden III: Complete, Partially Displaced in Varus",
        clinicalPearl: "Complete fracture line\nPartial displacement of fragments\nFemoral head typically tilted in varus and rotated",
        proximalRot: [0.18, 0.16, -0.28],
        proximalPosOffset: [2.5, -3.8, 2.0],
        distalRot: [0, 0.08, 0],
        distalPosOffset: [0, 0, 0],
      },
      {
        id: "garden4",
        name: "Garden IV",
        badge: "Totally Displaced",
        clinicalTitle: "Garden IV: Complete, Totally Displaced (Dissociation)",
        clinicalPearl: "Complete fracture line\nTotal displacement of fragments\nFemoral head completely detached and returned to neutral acetabular position",
        proximalRot: [-0.08, 0.05, -0.05],
        proximalPosOffset: [7.5, -9.0, 6.0],
        distalRot: [0, 0.35, 0],
        distalPosOffset: [0, 7.5, 0],
      },
    ],
  },
  {
    id: "intertrochanteric",
    name: "Intertrochanter",
    badge: "Evans / AO 31-A",
    cutCenter: [-29, 162, -10],
    cutNormal: [0.55, 0.8, 0.2],
    cameraTarget: [-0.17, 1.10, -0.07],
    cameraDistance: 3.0,
    viewOffsetRatio: 0.14,
    presets: [
      {
        id: "evans_nondisplaced",
        name: "Non-displaced",
        badge: "Evans I (Stable)",
        clinicalTitle: "Evans I: Non-displaced Fracture (Stable)",
        clinicalPearl: "2-part 2-cortex fracture line without displacement\nPosteromedial cortex remains intact\nStable pattern capable of resisting compressive loads",
        partitionMode: "intertroch_comminuted",
        proximalRot: [0, 0, 0],
        proximalPosOffset: [0.4, 0.5, 0.1],
        distalRot: [0, 0, 0],
        distalPosOffset: [0, 0, 0],
      },
      {
        id: "evans_displaced_reduced",
        name: "Displaced Reduced",
        badge: "Evans II (Stable)",
        clinicalTitle: "Evans II: Displaced Reduced (Stable)",
        clinicalPearl: "Displaced 2-part or 3-part fracture pattern\nPosteromedial cortex has minimal comminution\nConverts to a stable pattern once anatomically reduced (medial cortical opposition obtained)",
        partitionMode: "intertroch_comminuted",
        proximalRot: [-0.04, 0.02, -0.06],
        proximalPosOffset: [1.2, -1.6, 0.6],
        distalRot: [0, 0.06, 0],
        distalPosOffset: [0, 1.2, 0],
      },
      {
        id: "evans_unstable",
        name: "Unstable (LT)",
        badge: "Evans III (Unstable)",
        clinicalTitle: "Evans III: Displaced Not Reduced (Unstable 3-Part)",
        clinicalPearl: "3-part fracture with loss of posteromedial support\nLesser trochanter fragment is significantly displaced\nCannot achieve stable medial cortical opposition post-reduction; high risk of varus collapse",
        partitionMode: "intertroch_comminuted",
        proximalRot: [0.15, 0.09, -0.27],
        proximalPosOffset: [4.2, -6.2, 3.2],
        distalRot: [0, 0.26, 0],
        distalPosOffset: [0, 6.8, 0],
        ltRot: [0.28, 0.15, 0.35],
        ltPosOffset: [6.0, 9.0, 6.5],
      },
      {
        id: "evans_comminuted",
        name: "4-Part Comminuted",
        badge: "Evans IV (4-Part Shattered)",
        clinicalTitle: "Evans IV: 4-Part Shattered Comminuted (Unstable)",
        clinicalPearl: "4-part comminuted fracture involving both greater and lesser trochanters\nComplete loss of posteromedial and lateral cortical support\nHigh risk of fixation failure, screw cut-out, and limb shortening",
        partitionMode: "intertroch_comminuted",
        proximalRot: [0.22, 0.14, -0.34],
        proximalPosOffset: [5.8, -8.2, 4.2],
        distalRot: [0.05, 0.35, -0.08],
        distalPosOffset: [2.2, 9.0, -1.5],
        gtRot: [-0.22, 0.20, 0.30],
        gtPosOffset: [-9.5, 6.0, -5.0],
        ltRot: [0.35, -0.22, 0.40],
        ltPosOffset: [8.0, 11.5, 7.5],
        shardRot: [0.20, -0.35, -0.25],
        shardPosOffset: [-11.0, -2.0, 4.0],
      },
      {
        id: "evans_reversed_oblique",
        name: "Reverse Oblique",
        badge: "Evans V / AO 31-A3",
        clinicalTitle: "Evans V: Reverse Obliquity Fracture (AO 31-A3)",
        clinicalPearl: "Fracture line runs from proximal-medial to distal-lateral (exiting the lateral cortex at or below the greater trochanter)\nHighly unstable pattern due to medial displacement of femoral shaft by adductor muscle pull",
        cutCenter: [-22.0, 148.0, -8.0],
        cutNormal: [-0.60, 0.80, 0.05],
        partitionMode: "bipartite",
        proximalRot: [0.06, -0.12, 0.14],
        proximalPosOffset: [-3.6, -3.2, -1.0],
        distalRot: [0, 0.18, 0.06],
        distalPosOffset: [7.8, 5.5, 0],
      },
    ],
  },
  {
    id: "subtrochanteric",
    name: "Subtrochanter",
    badge: "Russell-Taylor / AO 32",
    cutCenter: [-18, 120, 0],
    cutNormal: [0.08, 0.99, 0.05],
    cameraTarget: [-0.11, 0.84, -0.05],
    cameraDistance: 3.2,
    viewOffsetRatio: 0.08,
    presets: [
      {
        id: "rt_1a",
        name: "Type IA",
        badge: "Russell-Taylor IA",
        clinicalTitle: "Russell-Taylor IA: Intact Fossa & Medial Buttress",
        clinicalPearl: "Fracture line does NOT extend into the piriformis fossa\nLesser trochanter and medial femoral cortex remain INTACT attached to proximal fragment\nPreserved piriformis entry portal and intact medial mechanical buttress",
        partitionMode: "subtroch_bipartite",
        proximalRot: [-0.36, 0.20, 0.24],
        proximalPosOffset: [-3.5, 1.5, 5.2],
        distalRot: [0.08, 0, -0.16],
        distalPosOffset: [3.8, 6.8, -2.2],
      },
      {
        id: "rt_1b",
        name: "Type IB",
        badge: "Russell-Taylor IB (LT Disrupted)",
        clinicalTitle: "Russell-Taylor IB: Disrupted Lesser Trochanter",
        clinicalPearl: "Fracture line does NOT extend into the piriformis fossa\nBUT fracture extends into and displaces the lesser trochanter (loss of medial cortical buttress)\nLoss of medial mechanical support leads to high varus bending moments",
        partitionMode: "subtroch_lt",
        proximalRot: [-0.18, 0.12, 0.28],
        proximalPosOffset: [-2.5, -2.0, 3.0],
        distalRot: [0.06, 0.10, -0.22],
        distalPosOffset: [4.5, 7.5, -2.0],
        ltRot: [0.32, 0.18, 0.38],
        ltPosOffset: [7.2, 10.5, 6.8],
      },
      {
        id: "rt_2a",
        name: "Type IIA",
        badge: "Russell-Taylor IIA (Fossa Split)",
        clinicalTitle: "Russell-Taylor IIA: Piriformis Fossa Compromised",
        clinicalPearl: "Fracture line EXTENDS into the piriformis fossa (trochanteric fossa entry site is compromised)\nLesser trochanter and medial cortex remain INTACT\nStandard piriformis-entry nailing is compromised",
        partitionMode: "subtroch_fossa",
        proximalRot: [-0.28, 0.16, 0.18],
        proximalPosOffset: [-2.0, 0.5, 4.0],
        distalRot: [0.05, 0, -0.14],
        distalPosOffset: [3.5, 6.0, -1.8],
        gtRot: [-0.15, 0.18, 0.22],
        gtPosOffset: [-6.5, 4.0, -3.2],
      },
      {
        id: "rt_2b",
        name: "Type IIB",
        badge: "Russell-Taylor IIB (Severe 4-Part)",
        clinicalTitle: "Russell-Taylor IIB: Both Fossa & LT Disrupted (Most Severe)",
        clinicalPearl: "Fracture line EXTENDS into BOTH the piriformis fossa AND the lesser trochanter / medial cortex\nMOST SEVERE and UNSTABLE subtrochanteric fracture pattern\nTotal loss of both entry portal structural integrity and medial mechanical buttress",
        partitionMode: "subtroch_comminuted",
        proximalRot: [-0.14, 0.10, 0.26],
        proximalPosOffset: [-1.8, -4.5, 3.2],
        distalRot: [0.08, 0.28, -0.18],
        distalPosOffset: [5.2, 9.5, -2.5],
        gtRot: [-0.24, 0.22, 0.28],
        gtPosOffset: [-8.8, 5.5, -4.2],
        ltRot: [0.38, -0.15, 0.42],
        ltPosOffset: [8.5, 12.0, 7.8],
        shardRot: [0.25, -0.30, -0.22],
        shardPosOffset: [-8.5, -3.0, 3.5],
      },
      {
        id: "subtroch_aff",
        name: "Atypical (AFF)",
        badge: "Bisphosphonate / AFF",
        clinicalTitle: "Atypical Femur Fracture (AFF - ASBMR Criteria)",
        clinicalPearl: "Atypical Femur Fracture (AFF) in subtrochanteric region\nTransverse or short oblique fracture pattern with localized lateral cortical thickening and beaking",
        cutCenter: [-18, 105, 0],
        cutNormal: [0, 1, 0],
        partitionMode: "subtroch_bipartite",
        proximalRot: [-0.18, 0.08, 0.12],
        proximalPosOffset: [-2.0, 0.8, 2.5],
        distalRot: [0.04, 0, -0.09],
        distalPosOffset: [2.8, 4.0, -1.0],
      },
    ],
  },
  {
    id: "femoral-shaft",
    name: "Femoral Shaft",
    badge: "Winquist-Hansen / AO 32",
    cutCenter: [-10, -10, 10],
    cutNormal: [0.05, 0.99, 0.05],
    cameraTarget: [-0.05, -0.10, 0.05],
    cameraDistance: 3.8,
    viewOffsetRatio: 0.05,
    presets: [
      {
        id: "winquist_0",
        name: "Type 0",
        badge: "Winquist 0 (100% Contact)",
        clinicalTitle: "Winquist Type 0: No Comminution (100% Cortical Contact)",
        clinicalPearl: "Simple 2-part transverse, oblique, or spiral fracture pattern with NO comminution\nFull 100% circumferential cortical contact between proximal and distal shaft fragments\nFully stable against rotation and axial shortening once reduced",
        partitionMode: "shaft_bipartite",
        proximalRot: [-0.14, 0.06, 0.16],
        proximalPosOffset: [-1.8, 1.2, 2.5],
        distalRot: [0.06, 0, -0.12],
        distalPosOffset: [2.5, 4.5, -1.8],
      },
      {
        id: "winquist_1",
        name: "Type I",
        badge: "Winquist I (>75% Contact)",
        clinicalTitle: "Winquist Type I: Minimal Comminution (>75% Contact)",
        clinicalPearl: "Minimal comminution with a small butterfly fragment (<25% of shaft width)\nAt least 75% or more circumferential cortical contact remains between main proximal and distal fragments\nHigh intrinsic stability against shortening and rotation",
        partitionMode: "shaft_butterfly_small",
        proximalRot: [-0.12, 0.05, 0.15],
        proximalPosOffset: [-1.5, 1.0, 2.2],
        distalRot: [0.05, 0, -0.10],
        distalPosOffset: [2.2, 5.0, -1.5],
        shardRot: [0.18, -0.15, -0.22],
        shardPosOffset: [-4.5, -1.0, 2.8],
      },
      {
        id: "winquist_2",
        name: "Type II",
        badge: "Winquist II (50-75% Contact)",
        clinicalTitle: "Winquist Type II: Moderate Butterfly (50-75% Contact)",
        clinicalPearl: "Moderate comminution with a larger butterfly fragment (up to 50% shaft width)\nBetween 50% and 75% circumferential cortical contact remains between main fragments\nStable against shortening and rotation once reduced",
        partitionMode: "shaft_butterfly_med",
        proximalRot: [-0.16, 0.08, 0.18],
        proximalPosOffset: [-2.0, 1.2, 2.8],
        distalRot: [0.06, 0.04, -0.14],
        distalPosOffset: [2.8, 6.2, -2.0],
        shardRot: [0.24, -0.20, -0.28],
        shardPosOffset: [-6.8, -1.8, 3.8],
      },
      {
        id: "winquist_3",
        name: "Type III",
        badge: "Winquist III (<50% Contact)",
        clinicalTitle: "Winquist Type III: Large Butterfly (<50% Contact - Unstable)",
        clinicalPearl: "Severe comminution with large butterfly fragment encompassing >50% of shaft width\nLESS THAN 50% circumferential cortical contact remains between main proximal and distal fragments\nUNSTABLE in both length and rotation",
        partitionMode: "shaft_butterfly_large",
        proximalRot: [-0.18, 0.10, 0.22],
        proximalPosOffset: [-2.5, 0.8, 3.5],
        distalRot: [0.08, 0.08, -0.18],
        distalPosOffset: [3.5, 7.8, -2.5],
        shardRot: [0.32, -0.26, -0.34],
        shardPosOffset: [-9.0, -2.5, 5.0],
      },
      {
        id: "winquist_4",
        name: "Type IV",
        badge: "Winquist IV (Segmental / 0%)",
        clinicalTitle: "Winquist Type IV: Segmental / Flail (0% Cortical Contact)",
        clinicalPearl: "Complete comminution across entire shaft circumference with NO cortical contact (0%) between main proximal and distal fragments\nSegmental comminution or flail segment\nHIGHLY UNSTABLE in length, rotation, and alignment",
        partitionMode: "shaft_segmental",
        proximalRot: [-0.20, 0.12, 0.24],
        proximalPosOffset: [-2.8, 0.5, 4.0],
        distalRot: [0.08, 0.12, -0.20],
        distalPosOffset: [4.2, 9.5, -3.0],
        shardRot: [0.35, -0.30, -0.38],
        shardPosOffset: [-8.5, -1.5, 4.5],
      },
    ],
  },
  {
    id: "distal",
    name: "Distal Femur",
    badge: "Distal Femur / AO 33",
    cutCenter: [10, -170, 0],
    cutNormal: [0, 1, 0],
    cameraTarget: [0.05, -1.18, -0.05],
    cameraDistance: 3.1,
    viewOffsetRatio: 0.04,
    presets: [
      {
        id: "distal_type1",
        name: "Type I",
        badge: "Supracondylar (33-A)",
        clinicalTitle: "Type I: Supracondylar Extra-articular (AO 33-A)",
        clinicalPearl: "Fracture line located in the distal femoral metaphysis ABOVE the condyles\nSpares the knee articular surface and trochlear groove completely\nDistal fragment is pulled into apex-posterior (recurvatum) angulation by the gastrocnemius muscle",
        partitionMode: "distal_supracondylar",
        proximalRot: [0, 0, 0],
        proximalPosOffset: [0, 0, 2.5],
        distalRot: [0.35, 0, 0],
        distalPosOffset: [0, 2.5, -5.5],
      },
      {
        id: "distal_type2_lateral",
        name: "Type II-A",
        badge: "Unicondylar Sagittal (33-B1)",
        clinicalTitle: "Type II-A: Unicondylar Sagittal Lateral Split (AO 33-B1)",
        clinicalPearl: "Partial articular fracture involving only lateral femoral condyle\nOpposite condyle remains continuously attached to the femoral shaft\nSagittal split fracture with lateral condyle dissociation",
        partitionMode: "distal_unicondylar_lat",
        proximalRot: [0, 0, 0],
        proximalPosOffset: [0, 0, 0],
        distalRot: [0, 0, 0],
        distalPosOffset: [0, 0, 0],
        shardRot: [0.12, 0.08, -0.22],
        shardPosOffset: [-5.5, 4.0, -2.5],
      },
      {
        id: "distal_type2_hoffa",
        name: "Type II-B",
        badge: "Coronal Hoffa (33-B3)",
        clinicalTitle: "Type II-B: Coronal Shear Hoffa Fracture (AO 33-B3)",
        clinicalPearl: "Partial articular coronal shear fracture of the posterior femoral condyle (Hoffa Fracture)\nCoronal shear plane typically involving lateral condyle",
        partitionMode: "distal_hoffa",
        proximalRot: [0, 0, 0],
        proximalPosOffset: [0, 0, 0],
        distalRot: [0, 0, 0],
        distalPosOffset: [0, 0, 0],
        shardRot: [0.28, 0, 0],
        shardPosOffset: [0, 3.5, -7.0],
      },
      {
        id: "distal_type3_simple",
        name: "Type III-A",
        badge: "Bicondylar T/Y (33-C1)",
        clinicalTitle: "Type III-A: Complete Articular Bicondylar T/Y Split (AO 33-C1)",
        clinicalPearl: "Complete articular disruption with intercondylar T- or Y-split\nBoth condyles are fractured and completely detached from the femoral shaft\nSimple metaphyseal fracture line",
        partitionMode: "distal_bicondylar",
        proximalRot: [-0.05, 0, 0],
        proximalPosOffset: [0, -3.0, 3.5],
        distalRot: [0.25, 0, 0.12],
        distalPosOffset: [2.5, 2.0, -4.0],
        shardRot: [0.22, 0, -0.16],
        shardPosOffset: [-4.0, 2.2, -4.5],
      },
      {
        id: "distal_type3_comminuted",
        name: "Type III-B",
        badge: "Shattered Articular (33-C3)",
        clinicalTitle: "Type III-B: Articular & Metaphyseal Comminuted (AO 33-C3)",
        clinicalPearl: "Complete articular bicondylar fracture with severe metaphyseal and articular comminution\nMulti-fragmentary destruction of the distal femoral articular block",
        partitionMode: "distal_bicondylar",
        proximalRot: [-0.08, 0.05, 0.04],
        proximalPosOffset: [0, -5.5, 4.5],
        distalRot: [0.32, 0, 0.18],
        distalPosOffset: [4.0, 3.5, -5.5],
        shardRot: [0.28, 0, -0.24],
        shardPosOffset: [-6.5, 4.0, -6.0],
      },
    ],
  },
];

const HUMERUS_SUBREGIONS: SubregionConfig[] = [
  {
    id: "proximal",
    name: "Proximal Humerus",
    badge: "Neer Classification",
    cutCenter: [15.0, 95.0, 3.0],
    cutNormal: [0, 1, 0],
    cameraTarget: [0.24, 1.22, 0.05],
    cameraDistance: 2.8,
    viewOffsetRatio: 0.18,
    presets: [
      {
        id: "neer_1part",
        name: "1-Part",
        badge: "1-Part (<1cm / <45°)",
        clinicalTitle: "Neer 1-Part: Minimally Displaced Fracture (Stable)",
        clinicalPearl: "No displaced parts (all parts <1cm displacement and <45° angulation)\nGreater tuberosity displacement < 5mm is considered non-displaced",
        partitionMode: "neer_4part",
        proximalRot: [0, 0, 0],
        proximalPosOffset: [0.3, 0.4, 0],
        distalRot: [0, 0, 0],
        distalPosOffset: [0, 0, 0],
        gtRot: [0, 0, 0],
        gtPosOffset: [0, 0.3, 0],
        ltRot: [0, 0, 0],
        ltPosOffset: [0, 0, 0.2],
      },
      {
        id: "neer_2part_gt",
        name: "2-Part (GT)",
        badge: "2-Part Greater Tuberosity",
        clinicalTitle: "Neer 2-Part: Displaced Greater Tuberosity Fracture",
        clinicalPearl: "Greater Tuberosity displaced >5mm\nFragment pulled superiorly and posteriorly by supraspinatus and infraspinatus tendons\nCauses subacromial impingement",
        partitionMode: "neer_2part_gt",
        proximalRot: [0, 0, 0],
        proximalPosOffset: [0, 0, 0],
        distalRot: [0, 0, 0],
        distalPosOffset: [0, 0, 0],
        gtRot: [-0.18, 0.22, 0.26],
        gtPosOffset: [-6.0, 9.0, -5.5],
      },
      {
        id: "neer_2part_sn",
        name: "2-Part (SN)",
        badge: "2-Part Surgical Neck",
        clinicalTitle: "Neer 2-Part: Displaced Surgical Neck Fracture",
        clinicalPearl: "Surgical neck fracture with displacement >1cm or angulation >45°\nShaft displaced medially by Pectoralis Major muscle pull\nHead fragment remains in neutral alignment attached to intact tuberosities",
        partitionMode: "neer_2part_sn",
        proximalRot: [0, 0, 0],
        proximalPosOffset: [0, 0, 0],
        distalRot: [0.08, 0.15, -0.22],
        distalPosOffset: [6.5, 4.0, 3.5],
      },
      {
        id: "neer_3part_gt",
        name: "3-Part (GT)",
        badge: "3-Part GT + Surg Neck",
        clinicalTitle: "Neer 3-Part: Displaced GT & Surgical Neck Fracture",
        clinicalPearl: "Displaced Surgical Neck fracture PLUS displaced Greater Tuberosity\nHumeral head fragment is rotated medially (internal rotation) by intact Subscapularis tendon",
        partitionMode: "neer_3part_gt",
        proximalRot: [0.10, -0.36, 0.05],
        proximalPosOffset: [1.5, -2.0, 0],
        distalRot: [0.06, 0.12, -0.18],
        distalPosOffset: [5.5, 4.5, 3.0],
        gtRot: [-0.20, 0.24, 0.32],
        gtPosOffset: [-7.5, 10.0, -6.5],
      },
      {
        id: "neer_3part_lt",
        name: "3-Part (LT)",
        badge: "3-Part LT + Surg Neck (Rare)",
        clinicalTitle: "Neer 3-Part: Displaced LT & Surgical Neck Fracture (Rare)",
        clinicalPearl: "Displaced Surgical Neck fracture PLUS displaced Lesser Tuberosity (Rare)\nHumeral head fragment rotated externally by intact posterior rotator cuff (Infraspinatus/Teres Minor)",
        partitionMode: "neer_3part_lt",
        proximalRot: [-0.08, 0.40, -0.05],
        proximalPosOffset: [-1.0, -1.5, -2.0],
        distalRot: [0.05, 0.10, -0.15],
        distalPosOffset: [5.0, 4.0, 2.5],
        ltRot: [0.16, -0.26, 0.22],
        ltPosOffset: [4.8, 2.2, 8.5],
      },
      {
        id: "neer_4part_classic",
        name: "4-Part Classic",
        badge: "4-Part Classic (Floating Head)",
        clinicalTitle: "Neer 4-Part Classic: Floating Head (Extreme AVN Risk)",
        clinicalPearl: "All four parts (Humeral Head, Greater Tuberosity, Lesser Tuberosity, Shaft) displaced\nHumeral head completely devoid of soft tissue attachments and displaced out of glenoid",
        partitionMode: "neer_4part",
        proximalRot: [0.26, -0.22, -0.32],
        proximalPosOffset: [6.5, -7.5, -4.5],
        distalRot: [0.08, 0.18, -0.22],
        distalPosOffset: [6.0, 5.5, 4.0],
        gtRot: [-0.25, 0.28, 0.35],
        gtPosOffset: [-8.5, 11.5, -7.0],
        ltRot: [0.22, -0.30, 0.28],
        ltPosOffset: [7.0, 3.5, 9.5],
      },
      {
        id: "neer_4part_valgus",
        name: "4-Part Valgus",
        badge: "4-Part Valgus Impacted",
        clinicalTitle: "Neer 4-Part Valgus Impacted: Driven into Shaft (Lower AVN Risk)",
        clinicalPearl: "Humeral head driven down (impacted) in valgus alignment onto the shaft\nTuberosities splayed laterally but posteromedial periosteal sleeve remains INTACT",
        partitionMode: "neer_4part",
        proximalRot: [-0.10, 0, 0.35],
        proximalPosOffset: [-1.5, -8.5, 0],
        distalRot: [0, 0, 0],
        distalPosOffset: [0, 0, 0],
        gtRot: [-0.12, 0.15, 0.22],
        gtPosOffset: [-5.5, 2.5, -3.0],
        ltRot: [0.10, -0.15, 0.18],
        ltPosOffset: [4.0, 1.0, 4.5],
      },
      {
        id: "neer_4part_lt_variant",
        name: "4-Part LT Variant",
        badge: "4-Part LT Variant (Posterior Subluxation)",
        clinicalTitle: "Neer 4-Part Lesser Tuberosity Variant (Posterior Subluxation)",
        clinicalPearl: "Rare 4-part fracture variant with displaced lesser tuberosity and posterior head subluxation\nImpression fracture or posterior defect from glenoid rim impaction",
        partitionMode: "neer_4part",
        proximalRot: [-0.15, 0.35, -0.10],
        proximalPosOffset: [-3.0, -3.0, -9.0],
        distalRot: [0.05, 0.10, -0.12],
        distalPosOffset: [4.5, 3.5, 2.5],
        gtRot: [-0.10, 0.15, 0.15],
        gtPosOffset: [-4.0, 4.0, -3.0],
        ltRot: [0.25, -0.32, 0.25],
        ltPosOffset: [6.5, 3.0, 9.0],
      },
    ],
  },
  {
    id: "shaft",
    name: "Humeral Shaft",
    badge: "Holstein-Lewis / AO 12",
    cutCenter: [-6.9, 0, -4.7],
    cutNormal: [0.1, 0.98, 0.1],
    cameraTarget: [-0.07, 0.0, -0.05],
    cameraDistance: 3.2,
    viewOffsetRatio: 0.10,
    presets: [
      {
        id: "shaft_proximal_13",
        name: "Proximal 1/3",
        badge: "Proximal 1/3 (Pectoralis vs Deltoid)",
        clinicalTitle: "Proximal 1/3 Shaft Fracture (Pectoralis Major Pull)",
        clinicalPearl: "Fracture located in the upper third of the humeral shaft below surgical neck\nProximal fragment pulled by Pectoralis Major (adduction and internal rotation)\nDistal fragment pulled by Deltoid (abduction and proximal displacement)",
        cutCenter: [3.8, 56.3, 4.0],
        cutNormal: [0.15, 0.98, 0.05],
        partitionMode: "humerus_shaft_bipartite",
        proximalRot: [0.08, -0.22, 0.15],
        proximalPosOffset: [2.5, 0, 1.5],
        distalRot: [-0.05, 0.10, -0.20],
        distalPosOffset: [-4.0, 5.5, -2.0],
      },
      {
        id: "shaft_middle_13",
        name: "Middle 1/3",
        badge: "Middle 1/3 (~60% Common)",
        clinicalTitle: "Middle 1/3 Shaft Fracture (~60% Most Common)",
        clinicalPearl: "Most common location of humeral shaft fractures (~60% of cases)\nProximal fragment abducted by Deltoid muscle\nDistal fragment displaced proximally by Biceps and Triceps pull",
        cutCenter: [-6.9, 0, -4.7],
        cutNormal: [0.1, 0.98, 0.1],
        partitionMode: "humerus_shaft_bipartite",
        proximalRot: [0.05, 0, -0.25],
        proximalPosOffset: [-3.5, 0, 1.0],
        distalRot: [0.10, 0.05, 0.15],
        distalPosOffset: [2.0, 7.0, 3.5],
      },
      {
        id: "shaft_holstein_lewis",
        name: "Holstein-Lewis",
        badge: "Distal 1/3 Spiral (Radial Nerve Risk)",
        clinicalTitle: "Holstein-Lewis Distal 1/3 Spiral (High Radial Nerve Risk)",
        clinicalPearl: "Classic spiral fracture of the distal third of the humeral shaft with proximal-radial direction\nHIGH RISK of Radial Nerve Palsy (up to 22% entrapment/traction rate) as nerve pierces lateral intermuscular septum\nClinical signs: Wrist Drop, numbness at dorsal 1st web space",
        cutCenter: [-16.2, -65.0, -15.1],
        cutNormal: [-0.45, 0.88, 0.15],
        partitionMode: "humerus_shaft_bipartite",
        proximalRot: [-0.08, -0.05, 0.12],
        proximalPosOffset: [1.5, -2.0, 2.0],
        distalRot: [0.22, 0.12, -0.18],
        distalPosOffset: [-3.5, 6.0, -4.5],
      },
    ],
  },
  {
    id: "distal",
    name: "Distal Humerus",
    badge: "AO/OTA 13",
    cutCenter: [-23.3, -120.0, -11.8],
    cutNormal: [0, 1, 0],
    cameraTarget: [-0.20, -1.05, -0.07],
    cameraDistance: 2.85,
    viewOffsetRatio: 0.02,
    presets: [
      {
        id: "distal_humerus_typeA",
        name: "Type A",
        badge: "Extra-articular (AO 13-A)",
        clinicalTitle: "Type A: Extra-articular Supracondylar (AO 13-A)",
        clinicalPearl: "Fracture line spares the articular surface of the distal humerus completely\nIncludes epicondylar avulsions and simple/comminuted supracondylar fractures\nTrochlea and capitellum articular surfaces remain intact",
        cutCenter: [-23.3, -120.0, -11.8],
        cutNormal: [0, 1, 0],
        partitionMode: "humerus_distal_supracondylar",
        proximalRot: [0, 0, 0],
        proximalPosOffset: [0, 0, 3.5],
        distalRot: [-0.30, 0, 0],
        distalPosOffset: [0, 3.5, -6.0],
      },
      {
        id: "distal_humerus_typeB_lateral",
        name: "Type B1",
        badge: "Unicondylar Lateral (AO 13-B1)",
        clinicalTitle: "Type B1: Partial Articular Sagittal Lateral Split (AO 13-B1)",
        clinicalPearl: "Partial articular lateral sagittal condylar fracture (Lateral condyle / Capitellum)\nPart of the articular surface remains in continuity with the humeral shaft",
        cutCenter: [-23.3, -120.0, -11.8],
        cutNormal: [0, 1, 0],
        partitionMode: "humerus_distal_unicondylar_lat",
        proximalRot: [0, 0, 0],
        proximalPosOffset: [0, 0, 0],
        distalRot: [0, 0, 0],
        distalPosOffset: [0, 0, 0],
        shardRot: [0.15, -0.10, -0.22],
        shardPosOffset: [-5.5, 4.0, 2.0],
      },
      {
        id: "distal_humerus_typeB_coronal",
        name: "Type B3",
        badge: "Coronal Shear (AO 13-B3)",
        clinicalTitle: "Type B3: Coronal Shear Capitellar Fracture (Hahn-Steinthal)",
        clinicalPearl: "Partial articular coronal shear fracture of capitellum/trochlea (Hahn-Steinthal / Kocher-Lorenz patterns)\nAnterior displacement of articular fragment blocking elbow flexion",
        cutCenter: [-23.3, -120.0, -11.8],
        cutNormal: [0, 1, 0],
        partitionMode: "humerus_distal_coronal_shear",
        proximalRot: [0, 0, 0],
        proximalPosOffset: [0, 0, 0],
        distalRot: [0, 0, 0],
        distalPosOffset: [0, 0, 0],
        shardRot: [0.30, 0, 0],
        shardPosOffset: [0, 5.0, 5.0],
      },
      {
        id: "distal_humerus_typeC_simple",
        name: "Type C1",
        badge: "Bicondylar T/Y (AO 13-C1)",
        clinicalTitle: "Type C1: Complete Articular Bicondylar T/Y Split (AO 13-C1)",
        clinicalPearl: "Complete articular disruption with simple articular and simple metaphyseal T- or Y-type split\nThe articular block is completely disconnected and dissociated from the main humeral shaft",
        cutCenter: [-23.3, -120.0, -11.8],
        cutNormal: [0, 1, 0],
        partitionMode: "humerus_distal_bicondylar",
        proximalRot: [0, 0, 0],
        proximalPosOffset: [0, -3.5, 4.0],
        distalRot: [-0.15, 0, 0.20],
        distalPosOffset: [4.0, 3.0, -2.5],
        shardRot: [-0.18, 0, -0.22],
        shardPosOffset: [-5.0, 3.5, -3.0],
      },
      {
        id: "distal_humerus_typeC_comminuted",
        name: "Type C3",
        badge: "Shattered Articular (AO 13-C3)",
        clinicalTitle: "Type C3: Severely Comminuted Articular & Metaphyseal (AO 13-C3)",
        clinicalPearl: "Complete articular disruption with severely comminuted articular and metaphyseal crushing\nMulti-fragmentary destruction of the humeral distal articular surface",
        cutCenter: [-23.3, -120.0, -11.8],
        cutNormal: [0, 1, 0],
        partitionMode: "humerus_distal_bicondylar",
        proximalRot: [0.08, 0, -0.05],
        proximalPosOffset: [0, -5.5, 5.0],
        distalRot: [-0.22, 0, 0.28],
        distalPosOffset: [5.5, 4.5, -4.0],
        shardRot: [-0.25, 0, -0.30],
        shardPosOffset: [-7.0, 5.0, -4.5],
      },
    ],
  },
];

const PATELLA_SUBREGIONS: SubregionConfig[] = [
  {
    id: "patella",
    name: "Patella",
    badge: "Anatomical & Functional",
    cutCenter: [-4.2, 9.7, 32.8],
    cutNormal: [0, 1, 0],
    cameraTarget: [-0.07, 0.15, 0.49],
    cameraDistance: 2.35,
    viewOffsetRatio: 0.10,
    presets: [
      {
        id: "patella_nondisplaced",
        name: "Nondisplaced",
        badge: "Gap <2mm / Intact SLR",
        clinicalTitle: "Nondisplaced Patella Fracture (Intact Extensor Mechanism)",
        clinicalPearl: "Minimal displacement (<2mm gap, <1mm articular step-off).\nIntact medial and lateral retinacular soft tissue attachments.\nContinuous anterior cortical alignment without fragment distraction.",
        partitionMode: "patella_nondisplaced",
        proximalRot: [0, 0, 0],
        proximalPosOffset: [0, 0, 0],
        distalRot: [0, 0, 0],
        distalPosOffset: [0, 0, 0],
      },
      {
        id: "patella_transverse",
        name: "Transverse",
        badge: "Displaced Transverse (>3mm)",
        clinicalTitle: "Displaced Transverse Patella Fracture (Disrupted SLR)",
        clinicalPearl: "Complete transverse disruption across the patellar body.\nQuadriceps tendon pull retracts the proximal fragment superiorly.\nWide articular distraction gap with disruption of extensor continuity.",
        partitionMode: "patella_transverse",
        proximalRot: [0.06, 0, 0],
        proximalPosOffset: [0, 9.0, 0],
        distalRot: [0, 0, 0],
        distalPosOffset: [0, 0, 0],
      },
      {
        id: "patella_lower_pole",
        name: "Inferior Pole",
        badge: "Pole Avulsion",
        clinicalTitle: "Inferior Pole Avulsion Fracture (Patellar Tendon Disruption)",
        clinicalPearl: "Avulsion fracture of the patellar tendon insertion at inferior pole.\nExtra-articular or small non-articular distal apex fragment.\nProximal patellar body retracted superiorly by intact quadriceps tendon.",
        partitionMode: "patella_pole",
        proximalRot: [0.05, 0, 0],
        proximalPosOffset: [0, 11.0, 0],
        distalRot: [0, 0, 0],
        distalPosOffset: [0, 0, 0],
      },
      {
        id: "patella_vertical",
        name: "Vertical",
        badge: "Sagittal / Longitudinal Cut",
        clinicalTitle: "Vertical / Longitudinal Patella Fracture (Intact SLR)",
        clinicalPearl: "Sagittal/longitudinal fracture split traversing the patellar articular surface.\nBest profiled in tangential axial views (Skyline / Merchant projection).\nMedial and lateral retinacula remain anatomically continuous.",
        partitionMode: "patella_vertical",
        proximalRot: [0, 0.05, 0],
        proximalPosOffset: [3.5, 0, 0],
        distalRot: [0, -0.05, 0],
        distalPosOffset: [-1.5, 0, 0],
      },
      {
        id: "patella_comminuted",
        name: "Comminuted",
        badge: "Stellate / Multifragmented",
        clinicalTitle: "Multifragmented Displaced Patella Fracture (Stellate Pattern)",
        clinicalPearl: "High-energy direct impact causing multi-fragment stellate articular comminution.\nMultiple displaced articular fragments with loss of patellar vault height.\nExtensive disruption of both articular facet and anterior cortical envelope.",
        partitionMode: "patella_comminuted",
        proximalRot: [0.08, 0, 0],
        proximalPosOffset: [0, 7.5, 0],
        distalRot: [0, 0, 0],
        distalPosOffset: [0, 0, 0],
        shardRot: [-0.15, 0.10, -0.20],
        shardPosOffset: [-4.0, 1.5, 3.5],
      },
      {
        id: "patella_osteochondral",
        name: "Osteochondral",
        badge: "Articular Shear / Dislocation",
        clinicalTitle: "Osteochondral Patellar Shear Fracture (Post-Dislocation)",
        clinicalPearl: "Tangential osteochondral shear fracture of medial facet following lateral dislocation.\nSheared as patella relocates over the prominent lateral femoral condyle.\nProduces intra-articular osteochondral loose fragment with exposed cancellous bone.",
        partitionMode: "patella_osteochondral",
        proximalRot: [0, 0, 0],
        proximalPosOffset: [0, 0, 0],
        distalRot: [0, 0, 0],
        distalPosOffset: [0, 0, 0],
        shardRot: [0.20, 0.15, 0],
        shardPosOffset: [3.5, -4.0, -3.0],
      },
    ],
  },
];

const TIBIA_SUBREGIONS: SubregionConfig[] = [
  {
    id: "proximal",
    name: "Proximal Tibia",
    badge: "Schatzker Types I–VI",
    cutCenter: [0.0, 175.0, 0.0],
    cutNormal: [0, 1, 0],
    cameraTarget: [0.02, 1.40, 0.0],
    cameraDistance: 3.20,
    viewOffsetRatio: 0.16,
    presets: [
      {
        id: "schatzker_1",
        name: "Type I",
        badge: "Pure Lateral Split",
        clinicalTitle: "Pure Lateral Plateau Split (Low Energy)",
        clinicalPearl: "Vertical wedge cleavage fracture of the lateral tibial plateau without central depression.\nTypically seen in young patients with dense, resilient cancellous bone.\nLateral wedge fragment displaces laterally with preserved central articular integrity.",
        partitionMode: "schatzker_1",
        proximalRot: [0, 0, 0],
        proximalPosOffset: [0, 0, 0],
        distalRot: [0, 0, 0],
        distalPosOffset: [0, 0, 0],
        shardRot: [0, 0, -0.10],
        shardPosOffset: [-6.0, -1.0, 0],
      },
      {
        id: "schatzker_2",
        name: "Type II",
        badge: "Split-Depression",
        clinicalTitle: "Split-Depression Lateral Plateau (Most Common)",
        clinicalPearl: "Combined lateral cortical wedge split and impacted central articular depression.\nMost common tibial plateau fracture pattern (~25-30%), typical in osteopenic bone.\nCentral articular fragments are depressed below the surrounding joint line alongside the lateral split.",
        partitionMode: "schatzker_2",
        proximalRot: [0.04, 0, -0.08],
        proximalPosOffset: [-1.0, -8.0, 0],
        distalRot: [0, 0, 0],
        distalPosOffset: [0, 0, 0],
        shardRot: [0, 0, -0.10],
        shardPosOffset: [-7.0, -2.0, 0],
      },
      {
        id: "schatzker_3",
        name: "Type III",
        badge: "Pure Depression",
        clinicalTitle: "Pure Central Articular Depression",
        clinicalPearl: "Pure central articular saucer depression with an intact lateral cortical rim.\nLower energy axial load in osteopenic bone driving the femoral condyle into the plateau.\nCortical perimeter remains unbroken with localized central articular depression.",
        partitionMode: "schatzker_3",
        proximalRot: [0.04, 0, -0.08],
        proximalPosOffset: [0, -8.0, 0],
        distalRot: [0, 0, 0],
        distalPosOffset: [0, 0, 0],
        shardRot: [0, 0, 0],
        shardPosOffset: [0, 0, 0],
      },
      {
        id: "schatzker_4",
        name: "Type IV",
        badge: "Medial Plateau / Dislocation",
        clinicalTitle: "Medial Plateau Fracture-Dislocation (High Energy)",
        clinicalPearl: "High-energy fracture of the medial tibial plateau requiring substantial varus/axial energy.\nInvolves the larger medial articular surface and medial tibial spine.\nAssociated with high risk of popliteal neurovascular injury due to knee subluxation vector.",
        partitionMode: "schatzker_4",
        proximalRot: [0.08, 0, 0.16],
        proximalPosOffset: [8.5, -4.5, -2.0],
        distalRot: [0, 0, 0],
        distalPosOffset: [0, 0, 0],
      },
      {
        id: "schatzker_5",
        name: "Type V",
        badge: "Bicondylar Plateau",
        clinicalTitle: "Bicondylar Plateau Split (Intact Shaft Bridge)",
        clinicalPearl: "Bicondylar fracture involving both medial and lateral plateaus with intact metaphyseal-diaphyseal continuity.\nPure axial load driving both femoral condyles into the tibial plateau.\nInverted 'Y' or 'T' pattern with articular widening of the proximal tibia.",
        partitionMode: "schatzker_5",
        proximalRot: [0, 0, 0.12],
        proximalPosOffset: [6.5, -3.5, 0],
        distalRot: [0, 0, 0],
        distalPosOffset: [0, 0, 0],
        shardRot: [0, 0, -0.12],
        shardPosOffset: [-6.5, -3.5, 0],
      },
      {
        id: "schatzker_6",
        name: "Type VI",
        badge: "Metaphyseal Dissociation",
        clinicalTitle: "Plateau with Metaphyseal-Diaphyseal Dissociation",
        clinicalPearl: "Complete separation of the articular plateau block from the tibial diaphysis.\nExtreme kinetic energy causing severe comminution and multiplanar displacement.\nArticular block is dissociated completely from the underlying tibial shaft.",
        partitionMode: "schatzker_6",
        proximalRot: [0.05, 0, 0.08],
        proximalPosOffset: [4.0, 2.0, 1.5],
        distalRot: [0.12, 0, 0.08],
        distalPosOffset: [2.0, -8.5, -3.5],
        shardRot: [-0.05, 0, -0.08],
        shardPosOffset: [-5.5, 1.5, 1.0],
      },
    ],
  },
  {
    id: "distal",
    name: "Ankle & Hindfoot",
    badge: "Lauge-Hansen & AO Mortise",
    cutCenter: [0.0, -155.0, 0.0],
    cutNormal: [0, 1, 0],
    cameraTarget: [0.03, -0.98, 0.0],
    cameraDistance: 2.10,
    cameraDirection: [-0.41, 0, 0.91],
    viewOffsetRatio: 0.06,
    presets: [
      {
        id: "ankle_intact",
        name: "Normal Anatomy",
        badge: "Intact Mortise",
        clinicalTitle: "Normal Ankle & Hindfoot Anatomy (Intact Mortise & Ligamentous Complex)",
        clinicalPearl: "Congruent mortise alignment with intact syndesmotic, lateral, and deltoid ligament complexes.\nNormal radiographic parameters: Medial clear space ≤ 4mm, tibiofibular clear space < 6mm, tibiofibular overlap ≥ 6mm.\nPrimary osseoligamentous restraints intact: Deep deltoid prevents lateral talar displacement; syndesmosis maintains mortise stability.",
        partitionMode: "ankle_intact",
        proximalRot: [0, 0, 0],
        proximalPosOffset: [0, 0, 0],
        distalRot: [0, 0, 0],
        distalPosOffset: [0, 0, 0],
      },
      {
        id: "lh_ser_1",
        name: "SER Stage I",
        badge: "SER I (AITFL Rupture)",
        clinicalTitle: "Isolated AITFL Rupture / Tillaux-Chaput Avulsion",
        clinicalPearl: "Supination-External Rotation mechanism initiated anteriorly by the talus rotating externally in supination.\nIsolated rupture of the Anterior Inferior Tibiofibular Ligament (AITFL) or osseous avulsion (Tillaux-Chaput on tibia or Wagstaffe on fibula).\nMortise alignment remains statically preserved with intact interosseous membrane, posterior syndesmosis, and deltoid complex.",
        partitionMode: "lh_ser_1",
        proximalRot: [0, 0, 0],
        proximalPosOffset: [0, 0, 0],
        distalRot: [0, 0, 0],
        distalPosOffset: [0, 0, 0],
        shardRot: [0, 0, 0],
        shardPosOffset: [0, 0, 0],
        ltRot: [0, 0, 0],
        ltPosOffset: [0, 0, 0],
        gtRot: [0, 0, 0],
        gtPosOffset: [0, 0, 0],
      },
      {
        id: "lh_ser_2",
        name: "SER Stage II",
        badge: "SER II (Spiral Fibula)",
        clinicalTitle: "Classic Spiral / Oblique Fibula Fracture (Weber B)",
        clinicalPearl: "Classic spiral or oblique fracture of the lateral malleolus starting at the joint line level and propagating posterosuperiorly (Weber Type B).\nDistal fibular fragment tilts posterolaterally with external rotation under continued talar rotatory torque.\nMedial clear space remains normal due to intact deep deltoid ligament and intact medial malleolus.",
        partitionMode: "lh_ser_2",
        proximalRot: [0, 0, 0],
        proximalPosOffset: [0, 0, 0],
        distalRot: [0, 0, 0],
        distalPosOffset: [0, 0, 0],
        shardRot: [0.18, -0.22, -0.10],
        shardPosOffset: [-3.5, 1.2, -4.0],
        ltRot: [0, 0, 0],
        ltPosOffset: [0, 0, 0],
        gtRot: [0, 0, 0],
        gtPosOffset: [0, 0, 0],
      },
      {
        id: "lh_ser_3",
        name: "SER Stage III",
        badge: "SER III (Posterior Malleolus)",
        clinicalTitle: "Posterior Malleolus Fracture (Volkmann's Fragment)",
        clinicalPearl: "Energy propagates posteriorly through the taut PITFL, producing an avulsion fracture of the posterior malleolus (Volkmann's fragment, Haraguchi Type I).\nInvolves the posterolateral tibial articular plafond and incisura fibularis with posterior articular step-off.\nTriangular posterior tibial wedge fragment displaces proximally and posteriorly with the attached PITFL.",
        partitionMode: "lh_ser_3",
        proximalRot: [0, 0, 0],
        proximalPosOffset: [0, 0, 0],
        distalRot: [0, 0, 0],
        distalPosOffset: [0, 0, 0],
        shardRot: [0.20, -0.25, -0.12],
        shardPosOffset: [-4.2, 1.6, -4.8],
        gtRot: [-0.26, 0.08, -0.05],
        gtPosOffset: [-1.2, 4.6, -6.8],
        ltRot: [0, 0, 0],
        ltPosOffset: [0, 0, 0],
      },
      {
        id: "lh_ser_4",
        name: "SER Stage IV",
        badge: "SER IV (Trimalleolar / Shift)",
        clinicalTitle: "Complete Trimalleolar Fracture with Medial Disruption & Talar Shift",
        clinicalPearl: "Completes the 360° failure circle with transverse avulsion fracture of the medial malleolus OR complete rupture of the deltoid ligament complex.\nProduces severe rotatory and lateral mortise instability with lateral talar shift (>4mm medial clear space on Mortise view) and valgus tilt.\nResults in a trimalleolar or bimalleolar-equivalent fracture pattern with total mortise disruption.",
        partitionMode: "lh_ser_4",
        proximalRot: [0, 0.08, -0.06],
        proximalPosOffset: [4.0, 0.5, -1.0],
        distalRot: [0, 0, 0],
        distalPosOffset: [0, 0, 0],
        shardRot: [0.24, -0.30, -0.14],
        shardPosOffset: [-5.0, 2.0, -5.5],
        gtRot: [-0.30, 0.10, -0.06],
        gtPosOffset: [-1.6, 5.4, -7.8],
        ltRot: [0.05, 0, -0.22],
        ltPosOffset: [4.5, -2.5, 0.5],
      },
      {
        id: "lh_sa_1",
        name: "SA Stage I",
        badge: "SA I (Infrasyndesmotic Fibula)",
        clinicalTitle: "Transverse Infrasyndesmotic Fibula Avulsion (Weber A)",
        clinicalPearl: "Supination-Adduction mechanism initiated laterally by forceful inversion/adduction of the supinated foot.\nClean transverse tension avulsion fracture of the distal fibula at or below the level of the tibial plafond joint line (Weber Type A).\nSyndesmotic ligaments (AITFL, PITFL, IOL) remain completely intact; distal fibular fragment tilts into varus/adduction.",
        partitionMode: "lh_sa_1",
        proximalRot: [0, 0, 0],
        proximalPosOffset: [0, 0, 0],
        distalRot: [0, 0, 0],
        distalPosOffset: [0, 0, 0],
        shardRot: [0, 0, 0.18],
        shardPosOffset: [-2.5, -1.2, 0.0],
        ltRot: [0, 0, 0],
        ltPosOffset: [0, 0, 0],
        gtRot: [0, 0, 0],
        gtPosOffset: [0, 0, 0],
      },
      {
        id: "lh_sa_2",
        name: "SA Stage II",
        badge: "SA II (Vertical Medial Shear)",
        clinicalTitle: "Vertical Medial Malleolus Shear with Plafond Impaction",
        clinicalPearl: "Continued adduction force drives the adducted talus against the junction of the tibial plafond and medial malleolus.\nProduces a characteristic vertical shear fracture line propagating superiorly from the plafond into the distal metaphyseal cortex.\nFrequently associated with anteromedial tibial plafond marginal articular impaction.",
        partitionMode: "lh_sa_2",
        proximalRot: [0, 0, 0.08],
        proximalPosOffset: [-1.8, 0.5, 0],
        distalRot: [0, 0, 0],
        distalPosOffset: [0, 0, 0],
        shardRot: [0, 0, 0.20],
        shardPosOffset: [-3.0, -1.5, 0.0],
        ltRot: [0, 0, -0.14],
        ltPosOffset: [3.8, 4.0, 0.0],
        gtRot: [0, 0, 0],
        gtPosOffset: [0, 0, 0],
      },
      {
        id: "lh_per_1",
        name: "PER Stage I",
        badge: "PER I (Medial Disruption)",
        clinicalTitle: "Medial Malleolus Avulsion or Deltoid Ligament Rupture",
        clinicalPearl: "Pronation-External Rotation mechanism initiated medially by external rotatory torque on the pronated foot.\nTransverse tension avulsion fracture of the medial malleolus OR complete rupture of the deltoid ligament complex.\nLateral malleolus, anterior syndesmosis (AITFL), and posterior syndesmosis (PITFL) remain completely intact.",
        partitionMode: "lh_per_1",
        proximalRot: [0, 0, 0],
        proximalPosOffset: [0, 0, 0],
        distalRot: [0, 0, 0],
        distalPosOffset: [0, 0, 0],
        ltRot: [0.04, 0, -0.12],
        ltPosOffset: [2.5, -1.0, 0.5],
      },
      {
        id: "lh_per_2",
        name: "PER Stage II",
        badge: "PER II (AITFL Rupture)",
        clinicalTitle: "AITFL Rupture with Anterior Syndesmotic Diastasis",
        clinicalPearl: "Talar external rotation torque propagates anteriorly across the distal syndesmosis.\nComplete rupture of the Anterior Inferior Tibiofibular Ligament (AITFL) or avulsion at Tillaux-Chaput or Wagstaffe.\nDistal fibula and posterior malleolus remain intact, but anterior syndesmotic restraint is lost.",
        partitionMode: "lh_per_2",
        proximalRot: [0, 0, 0],
        proximalPosOffset: [0, 0, 0],
        distalRot: [0, 0, 0],
        distalPosOffset: [0, 0, 0],
        ltRot: [0.05, 0, -0.14],
        ltPosOffset: [3.0, -1.2, 0.5],
      },
      {
        id: "lh_per_3",
        name: "PER Stage III",
        badge: "PER III (High Spiral Fibula)",
        clinicalTitle: "High Spiral Suprasyndesmotic Fibula Fracture (Weber C)",
        clinicalPearl: "Talar external rotatory torque travels proximally along the fibular shaft.\nHigh spiral or oblique fracture of the fibular diaphysis (Weber Type C, 6–8 cm above the joint line / Maisonneuve variant).\nInterosseous membrane (IOL) ruptured from the distal syndesmosis up to the level of the fibular fracture.",
        partitionMode: "lh_per_3",
        proximalRot: [0, 0, 0],
        proximalPosOffset: [0, 0, 0],
        distalRot: [0, 0, 0],
        distalPosOffset: [0, 0, 0],
        shardRot: [0.18, -0.25, -0.10],
        shardPosOffset: [-4.0, 1.8, -4.5],
        ltRot: [0.06, 0, -0.16],
        ltPosOffset: [3.5, -1.5, 0.5],
      },
      {
        id: "lh_per_4",
        name: "PER Stage IV",
        badge: "PER IV (Posterior Malleolus / Diastasis)",
        clinicalTitle: "Complete Syndesmotic Diastasis with Posterior Malleolus Fracture",
        clinicalPearl: "Circle of injury completes posteriorly with PITFL rupture OR posterior malleolar avulsion fracture (Volkmann's fragment).\nGross syndesmotic diastasis with complete loss of mortise containment, lateral talar shift (>4mm), and valgus tilt.\nRepresents the most unstable high-energy rotational ankle disruption with circumferential osseoligamentous failure.",
        partitionMode: "lh_per_4",
        proximalRot: [0, 0.09, -0.08],
        proximalPosOffset: [4.5, 0.6, -1.2],
        distalRot: [0, 0, 0],
        distalPosOffset: [0, 0, 0],
        shardRot: [0.22, -0.32, -0.12],
        shardPosOffset: [-5.2, 2.2, -5.8],
        gtRot: [-0.28, 0.10, -0.06],
        gtPosOffset: [-1.5, 5.0, -7.2],
        ltRot: [0.08, 0, -0.20],
        ltPosOffset: [4.8, -2.2, 0.5],
      },
      {
        id: "lh_pa_1",
        name: "PA Stage I",
        badge: "PA I (Medial Avulsion)",
        clinicalTitle: "Medial Malleolus Avulsion or Deltoid Ligament Rupture",
        clinicalPearl: "Pronation-Abduction mechanism initiated medially by forceful eversion/abduction of the pronated foot.\nTransverse tension avulsion fracture of the medial malleolus OR complete rupture of the deltoid ligament complex.\nDistal fibula, syndesmosis, and posterior malleolus remain anatomically aligned.",
        partitionMode: "lh_pa_1",
        proximalRot: [0, 0, 0],
        proximalPosOffset: [0, 0, 0],
        distalRot: [0, 0, 0],
        distalPosOffset: [0, 0, 0],
        ltRot: [0.02, 0, -0.10],
        ltPosOffset: [2.5, -1.0, 0.0],
      },
      {
        id: "lh_pa_2",
        name: "PA Stage II",
        badge: "PA II (Syndesmotic Rupture)",
        clinicalTitle: "Anterior & Posterior Syndesmotic Disruption",
        clinicalPearl: "Abducting talus impacts the lateral mortise, rupturing the anterior and posterior syndesmotic complexes.\nSimultaneous failure of the Anterior Inferior Tibiofibular Ligament (AITFL) and Posterior Inferior Tibiofibular Ligament (PITFL).\nIncisura tibialis widens with initial syndesmotic diastasis while the fibular shaft remains intact.",
        partitionMode: "lh_pa_2",
        proximalRot: [0, 0, 0],
        proximalPosOffset: [0, 0, 0],
        distalRot: [0, 0, 0],
        distalPosOffset: [0, 0, 0],
        ltRot: [0.04, 0, -0.12],
        ltPosOffset: [3.2, -1.4, 0.0],
      },
      {
        id: "lh_pa_3",
        name: "PA Stage III",
        badge: "PA III (High Bending / Butterfly Comminution)",
        clinicalTitle: "High Suprasyndesmotic Fibula Fracture with Lateral Butterfly Comminution",
        clinicalPearl: "Forceful abduction vector bends the fibular diaphysis outward against the proximal fulcrum.\nHigh suprasyndesmotic fracture of the fibula (Weber Type C, ~5–7 cm above the joint line) with a separate lateral cortical butterfly wedge shard.\nTalus tilts into valgus with prominent medial clear space widening and gross lateral mortise subluxation.",
        partitionMode: "lh_pa_3",
        proximalRot: [0, 0, -0.12],
        proximalPosOffset: [4.2, 0.5, 0.0],
        distalRot: [0, 0, 0],
        distalPosOffset: [0, 0, 0],
        shardRot: [0.04, 0, 0.26],
        shardPosOffset: [-5.2, -2.5, 0.0],
        gtRot: [-0.18, 0.15, 0.38],
        gtPosOffset: [-6.8, 1.2, 2.5],
        ltRot: [0.06, 0, -0.18],
        ltPosOffset: [4.2, -2.0, 0.0],
      },
    ],
  },
];

const CLAVICLE_SUBREGIONS: SubregionConfig[] = [
  {
    id: "ac-joint",
    name: "AC Joint",
    badge: "Rockwood Types I–VI",
    cutCenter: [65.0, 45.0, 65.0],
    cutNormal: [0, 1, 0],
    cameraTarget: [-0.85, 1.10, 0.10],
    cameraDistance: 2.30,
    viewOffsetRatio: 0.10,
    presets: [
      {
        id: "rockwood_type1",
        name: "Type I",
        badge: "AC Sprain / Normal (Type I)",
        clinicalTitle: "AC Ligament Sprain (Intact CC Ligaments)",
        clinicalPearl: "Sprain of AC ligament\nIntact CC ligaments",
        partitionMode: "ac_joint_rockwood",
        proximalRot: [0, 0, 0],
        proximalPosOffset: [0, 0, 0],
        distalRot: [0, 0, 0],
        distalPosOffset: [0, 0, 0],
      },
      {
        id: "rockwood_type2",
        name: "Type II",
        badge: "AC Torn / Subluxation <25% (Type II)",
        clinicalTitle: "AC Torn + CC Sprained (<25% Elevation)",
        clinicalPearl: "Torn AC ligament\nSprained CC ligaments\n<25% superior displacement of clavicle",
        partitionMode: "ac_joint_rockwood",
        proximalRot: [0, 0, -0.05],
        proximalPosOffset: [0, 3.5, 0],
        distalRot: [0, 0, 0],
        distalPosOffset: [0, 0, 0],
      },
      {
        id: "rockwood_type3",
        name: "Type III",
        badge: "Complete Dislocation 25-100% (Type III)",
        clinicalTitle: "AC & CC Torn (25%–100% Elevation)",
        clinicalPearl: "Torn AC and CC ligaments\n25% to 100% superior displacement of clavicle",
        partitionMode: "ac_joint_rockwood",
        proximalRot: [0, 0, -0.15],
        proximalPosOffset: [0, 11.5, 0],
        distalRot: [0, 0, 0],
        distalPosOffset: [0, 0, 0],
      },
      {
        id: "rockwood_type4",
        name: "Type IV",
        badge: "Posterior into Trapezius (Type IV)",
        clinicalTitle: "Posterior Displacement into Trapezius",
        clinicalPearl: "Posterior displacement of distal clavicle\nDisplaced into or through trapezius",
        partitionMode: "ac_joint_rockwood",
        proximalRot: [-0.18, 0.28, -0.08],
        proximalPosOffset: [0, 2.0, -22.0],
        distalRot: [0, 0, 0],
        distalPosOffset: [0, 0, 0],
      },
      {
        id: "rockwood_type5",
        name: "Type V",
        badge: "Severe Superior >100-300% (Type V)",
        clinicalTitle: "Gross Superior Elevation (>100%–300%)",
        clinicalPearl: "Superior displacement >100% (often 100-300%)\nDisruption of deltotrapezial fascia",
        partitionMode: "ac_joint_rockwood",
        proximalRot: [0, 0, -0.30],
        proximalPosOffset: [0, 26.0, 0],
        distalRot: [0, 0, 0],
        distalPosOffset: [0, 0, 0],
      },
      {
        id: "rockwood_type6",
        name: "Type VI",
        badge: "Inferior Subcoracoid (Type VI)",
        clinicalTitle: "Inferior Subcoracoid/Subacromial Dislocation",
        clinicalPearl: "Inferior displacement of clavicle\nUnder acromion or coracoid process",
        partitionMode: "ac_joint_rockwood",
        proximalRot: [-0.07, 0.03, 0.21],
        proximalPosOffset: [13.0, -16.0, 19.0],
        distalRot: [0, 0, 0],
        distalPosOffset: [0, 0, 0],
      },
    ],
  },
  {
    id: "shaft",
    name: "Clavicle Shaft",
    badge: "Robinson / Allman / AO 15.2",
    cutCenter: [10.0, 65.0, 37.0],
    cutNormal: [1, 0, 0],
    cameraTarget: [0.15, 1.12, 0.55],
    cameraDistance: 2.70,
    viewOffsetRatio: 0.10,
    presets: [
      {
        id: "shaft_robinson_2a_undisplaced",
        name: "2A: Non-displaced",
        badge: "Robinson 2A: Undisplaced (<2cm)",
        clinicalTitle: "Robinson Type 2A: Minimally Displaced Midshaft Fracture",
        clinicalPearl: "Cortical alignment maintained with minimal or no displacement (<100% displacement and <2cm shortening)\nNon-displaced midshaft clavicle fracture",
        partitionMode: "clavicle_shaft_bipartite",
        cutCenter: [10.0, 65.0, 37.0],
        proximalRot: [0, 0, -0.02],
        proximalPosOffset: [0, 1.0, 0],
        distalRot: [0, 0, 0],
        distalPosOffset: [1.0, -0.8, 0],
      },
      {
        id: "shaft_robinson_2b1_displaced",
        name: "2B1: Displaced Simple",
        badge: "Robinson 2B1: Displaced (>2cm Shortening)",
        clinicalTitle: "Robinson Type 2B1: Displaced 2-Part Oblique/Transverse Midshaft",
        clinicalPearl: "Displaced simple 2-part midshaft fracture with 100% displacement and shortening >2cm\nProximal fragment pulled superiorly by SCM, distal pulled inferiorly by arm weight",
        partitionMode: "clavicle_shaft_bipartite",
        cutCenter: [10.0, 65.0, 37.0],
        proximalRot: [0.06, 0, -0.18],
        proximalPosOffset: [0, 7.5, -2.0],
        distalRot: [-0.04, 0.06, 0.05],
        distalPosOffset: [12.0, -8.5, 4.0],
      },
      {
        id: "shaft_robinson_2b2_butterfly",
        name: "2B2: Butterfly Wedge",
        badge: "Robinson 2B2: Comminuted Wedge (~20%)",
        clinicalTitle: "Robinson Type 2B2: Displaced Comminuted with Butterfly Fragment",
        clinicalPearl: "Comminuted midshaft fracture with inferior cortical wedge / butterfly fragment\nLoss of cortical continuity with separate wedge fragment",
        partitionMode: "clavicle_shaft_butterfly",
        cutCenter: [10.0, 65.0, 37.0],
        proximalRot: [0.06, 0, -0.16],
        proximalPosOffset: [0, 6.5, -2.0],
        distalRot: [-0.04, 0.05, 0.05],
        distalPosOffset: [10.5, -7.5, 3.5],
        shardRot: [0.18, 0.15, -0.32],
        shardPosOffset: [-2.5, -6.5, 3.0],
      },
      {
        id: "shaft_vertical_z_fragment",
        name: "Z-Fragment (Tenting)",
        badge: "Vertical Z-Fragment: Impending Skin Perforation",
        clinicalTitle: "Vertical Z-Fragment: Severe Skin Tenting (Emergency Threat)",
        clinicalPearl: "Severely comminuted midshaft fracture with vertical Z-fragment causing skin tenting\nSharp vertical fragment endangering overlying skin integrity",
        partitionMode: "clavicle_shaft_butterfly",
        cutCenter: [10.0, 65.0, 37.0],
        proximalRot: [0.08, 0, -0.22],
        proximalPosOffset: [0, 8.0, -2.0],
        distalRot: [-0.04, 0.06, 0.05],
        distalPosOffset: [12.0, -8.0, 4.0],
        shardRot: [0.10, 0.20, 1.45],
        shardPosOffset: [0, 11.5, -1.0],
      },
      {
        id: "shaft_segmental_double",
        name: "Segmental (AO 15.2C)",
        badge: "AO 15.2C: Segmental Diaphyseal Cylinder",
        clinicalTitle: "AO 15.2C: Segmental Clavicle Fracture (Two Distinct Levels)",
        clinicalPearl: "Segmental diaphyseal clavicle fracture with free intermediate cortical segment\nTwo distinct fracture levels with isolated intercalary segment",
        partitionMode: "clavicle_shaft_segmental",
        cutCenter: [10.0, 65.0, 37.0],
        proximalRot: [0.05, 0, -0.15],
        proximalPosOffset: [0, 6.0, -1.5],
        distalRot: [-0.04, 0.05, 0.04],
        distalPosOffset: [11.0, -7.0, 3.5],
        shardRot: [-0.08, 0.15, 0.20],
        shardPosOffset: [3.0, -4.5, 6.0],
      },
      {
        id: "shaft_allman_group3_medial",
        name: "Allman III: Medial 1/3",
        badge: "Allman Group III: Proximal 1/3 (~5%)",
        clinicalTitle: "Allman Group III: Medial Third Clavicle Fracture (~5%)",
        clinicalPearl: "Fracture located in the proximal (medial) third of the clavicle near sternoclavicular joint (~5%)\nLeast common clavicle fracture pattern, usually from severe high-energy trauma",
        partitionMode: "clavicle_shaft_bipartite",
        cutCenter: [33.0, 60.0, 62.0],
        proximalRot: [0, 0, 0.08],
        proximalPosOffset: [0, -3.0, 0],
        distalRot: [0, 0, 0],
        distalPosOffset: [0, 0, 0],
      },
    ],
  },
  {
    id: "distal",
    name: "Distal Clavicle",
    badge: "Neer Classification (Types I–V)",
    cutCenter: [-28.0, 72.0, -10.0],
    cutNormal: [1, 0, 0],
    cameraTarget: [-0.60, 1.15, 0.15],
    cameraDistance: 2.45,
    viewOffsetRatio: 0.10,
    presets: [
      {
        id: "neer_type1_distal",
        name: "Neer I",
        badge: "Neer I: Minimally Displaced (Stable)",
        clinicalTitle: "Neer Type I: Distal Clavicle Fracture (CC Ligaments Intact)",
        clinicalPearl: "Fracture occurs distal to intact Coracoclavicular (CC) ligaments or between CC ligaments\nCC ligaments remain attached to the proximal fragment\nAC joint remains intact and stable",
        partitionMode: "clavicle_shaft_bipartite",
        cutCenter: [-45.0, 74.0, -10.0],
        proximalRot: [0, 0, 0],
        proximalPosOffset: [0, 0, 0],
        distalRot: [0, 0, 0],
        distalPosOffset: [0, 0, 0],
      },
      {
        id: "neer_type2a_distal",
        name: "Neer IIA",
        badge: "Neer IIA: Medial to CC (Unstable)",
        clinicalTitle: "Neer Type IIA: Fracture Medial to Conoid & Trapezoid",
        clinicalPearl: "Fracture line occurs MEDIAL to intact CC ligaments\nBoth Conoid and Trapezoid ligaments remain attached to the DISTAL fragment\nProximal fragment is unstable and pulled superiorly by Trapezius and Sternocleidomastoid muscles",
        partitionMode: "clavicle_shaft_bipartite",
        cutCenter: [-28.0, 72.0, -10.0],
        proximalRot: [0.02, 0, -0.075],
        proximalPosOffset: [0, 2.5, 0],
        distalRot: [0, 0, 0],
        distalPosOffset: [0, 0, 0],
      },
      {
        id: "neer_type2b_distal",
        name: "Neer IIB",
        badge: "Neer IIB: Between CC (Conoid Torn)",
        clinicalTitle: "Neer Type IIB: Fracture Between Conoid & Trapezoid (Conoid Torn)",
        clinicalPearl: "Fracture occurs between the CC ligaments\nConoid ligament is TORN\nTrapezoid ligament remains attached to the distal fragment\nProximal fragment is unstable and displaces superiorly",
        partitionMode: "clavicle_shaft_bipartite",
        cutCenter: [-40.0, 74.0, -10.0],
        proximalRot: [0.02, 0, -0.085],
        proximalPosOffset: [0, 3.0, 0],
        distalRot: [0, 0, 0],
        distalPosOffset: [0, 0, 0],
      },
      {
        id: "neer_type3_distal",
        name: "Neer III",
        badge: "Neer III: Intra-articular AC Joint",
        clinicalTitle: "Neer Type III: Intra-articular AC Joint Fracture",
        clinicalPearl: "Intra-articular fracture extending into the Acromioclavicular (AC) joint\nCC ligaments remain intact and attached to the proximal fragment\nFracture is STABLE without significant vertical displacement",
        partitionMode: "clavicle_shaft_bipartite",
        cutCenter: [-52.0, 76.0, -5.0],
        proximalRot: [0, 0, 0],
        proximalPosOffset: [0, 0, 0],
        distalRot: [0, 0, 0],
        distalPosOffset: [-0.8, 0, 0.3],
      },
      {
        id: "neer_type4_distal",
        name: "Neer IV",
        badge: "Neer IV: Pediatric Sleeve",
        clinicalTitle: "Neer Type IV: Pediatric Periosteal Sleeve Disruption",
        clinicalPearl: "Pediatric / Adolescent injury equivalent\nPeriosteal sleeve disruption where proximal fragment erupts superiorly through periosteum\nCC ligaments remain attached to the intact periosteal sleeve distally",
        partitionMode: "clavicle_shaft_bipartite",
        cutCenter: [-30.0, 72.0, -10.0],
        proximalRot: [0.015, 0, -0.05],
        proximalPosOffset: [0, 1.5, 0],
        distalRot: [0, 0, 0],
        distalPosOffset: [0, 0, 0],
      },
      {
        id: "neer_type5_distal",
        name: "Neer V",
        badge: "Neer V: Comminuted / CC Avulsion",
        clinicalTitle: "Neer Type V: Comminuted Distal Clavicle with CC Avulsion Shard",
        clinicalPearl: "Comminuted fracture pattern with a free inferior cortical fragment\nCC ligaments remain attached to the small inferior avulsion fragment\nProximal fragment is completely unattached to CC ligaments and displaces superiorly",
        partitionMode: "clavicle_distal_neer_v",
        cutCenter: [-28.0, 72.0, -10.0],
        proximalRot: [0.02, 0, -0.075],
        proximalPosOffset: [0, 2.5, 0],
        distalRot: [0, 0, 0],
        distalPosOffset: [0, 0, 0],
        shardPosOffset: [0, -3.5, 1.0],
        shardRot: [0.06, 0, -0.08],
      },
    ],
  },
];

interface LigamentBundle {
  group: THREE.Group;
  cylGeom: THREE.CylinderGeometry;
  coneGeom: THREE.ConeGeometry;
  ligamentMat: THREE.MeshStandardMaterial;
  rupturedTipMat: THREE.MeshStandardMaterial;
  conoidIntact: THREE.Mesh;
  conoidStumpA: THREE.Mesh;
  conoidTipA: THREE.Mesh;
  conoidStumpB: THREE.Mesh;
  conoidTipB: THREE.Mesh;
  trapIntact: THREE.Mesh;
  trapStumpA: THREE.Mesh;
  trapTipA: THREE.Mesh;
  trapStumpB: THREE.Mesh;
  trapTipB: THREE.Mesh;
  acIntact: THREE.Mesh;
  acStumpA: THREE.Mesh;
  acTipA: THREE.Mesh;
  acStumpB: THREE.Mesh;
  acTipB: THREE.Mesh;
  caIntact: THREE.Mesh;
}

// Zero-GC scratch vectors for anatomical ligament kinematics
const _scratchDir = new THREE.Vector3();
const _scratchUp = new THREE.Vector3(0, 1, 0);
const _scratchMid = new THREE.Vector3();
const _scratchStart = new THREE.Vector3();
const _scratchEnd = new THREE.Vector3();

// Exact clinical coordinates on Scapula (distalGroup stationary origin)
const _conoidScapula = new THREE.Vector3(-38.32, 54.44, 15.46);
const _trapScapula = new THREE.Vector3(-47.06, 59.64, 27.65);
const _acScapula = new THREE.Vector3(-56.05, 75.92, -5.08);
const _caCoracoid = new THREE.Vector3(-44.69, 53.22, 31.92);
const _caAcromion = new THREE.Vector3(-65.93, 76.69, 7.51);

// Exact clinical coordinates on Clavicle (untransformed base positions)
const _conoidClavicleRaw = new THREE.Vector3(-35.38, 76.52, -16.13);
const _trapClavicleRaw = new THREE.Vector3(-45.41, 75.94, -15.63);
const _acClavicleRaw = new THREE.Vector3(-54.91, 76.63, -5.44);

// Dynamic transformed Clavicle endpoints
const _conoidClavicle = new THREE.Vector3();
const _trapClavicle = new THREE.Vector3();
const _acClavicle = new THREE.Vector3();
const _cutCenterVec = new THREE.Vector3();

// Transformed endpoints for shaft & mobile distal fragments
const _curConoidScapula = new THREE.Vector3();
const _curTrapScapula = new THREE.Vector3();
const _curAcScapula = new THREE.Vector3();
const _curCaCoracoid = new THREE.Vector3();
const _curCaAcromion = new THREE.Vector3();
const _curConoidClavicle = new THREE.Vector3();
const _curTrapClavicle = new THREE.Vector3();
const _curAcClavicle = new THREE.Vector3();
const _scratchQuat = new THREE.Quaternion();
const _scratchZero = new THREE.Vector3(0, 0, 0);
const _neerVShardCentroid = new THREE.Vector3(-42.1, 73.8, -13.5);
const _scPivotCenter = new THREE.Vector3(70.0, 50.0, 60.0);

function updateLigamentSegment(
  mesh: THREE.Mesh,
  start: THREE.Vector3,
  end: THREE.Vector3,
  rx: number,
  rz: number
) {
  _scratchDir.subVectors(end, start);
  const len = _scratchDir.length();
  if (len < 0.001) {
    mesh.visible = false;
    return;
  }
  mesh.visible = true;
  _scratchMid.copy(start).addScaledVector(_scratchDir, 0.5);
  mesh.position.copy(_scratchMid);
  _scratchDir.normalize();
  mesh.quaternion.setFromUnitVectors(_scratchUp, _scratchDir);
  mesh.scale.set(rx, len, rz);
}

function updateTornLigament(
  stumpA: THREE.Mesh,
  tipA: THREE.Mesh,
  stumpB: THREE.Mesh,
  tipB: THREE.Mesh,
  origin: THREE.Vector3,
  target: THREE.Vector3,
  rx: number,
  rz: number,
  nominalStumpLen: number,
  tipLen: number
) {
  _scratchDir.subVectors(target, origin);
  const totalLen = _scratchDir.length();
  if (totalLen < 0.001) {
    stumpA.visible = false;
    tipA.visible = false;
    stumpB.visible = false;
    tipB.visible = false;
    return;
  }
  _scratchDir.normalize();

  // Stump length is proportionally constrained to prevent collision and guarantee gap
  const maxStump = totalLen * 0.36;
  const stumpLen = Math.max(tipLen * 1.1, Math.min(nominalStumpLen, maxStump));
  const shaftLen = Math.max(0.1, stumpLen - tipLen);

  // --- Stump A (Origin / Scapula side) ---
  _scratchStart.copy(origin);
  _scratchEnd.copy(origin).addScaledVector(_scratchDir, shaftLen);
  updateLigamentSegment(stumpA, _scratchStart, _scratchEnd, rx, rz);

  // Tip A (frayed red cone pointing toward gap)
  _scratchStart.copy(_scratchEnd);
  _scratchEnd.copy(origin).addScaledVector(_scratchDir, stumpLen);
  updateLigamentSegment(tipA, _scratchStart, _scratchEnd, rx * 0.95, rz * 0.95);

  // --- Stump B (Target / Clavicle side) ---
  _scratchStart.copy(target);
  _scratchEnd.copy(target).addScaledVector(_scratchDir, -shaftLen);
  updateLigamentSegment(stumpB, _scratchStart, _scratchEnd, rx, rz);

  // Tip B (frayed red cone pointing toward gap)
  _scratchStart.copy(_scratchEnd);
  _scratchEnd.copy(target).addScaledVector(_scratchDir, -stumpLen);
  updateLigamentSegment(tipB, _scratchStart, _scratchEnd, rx * 0.95, rz * 0.95);
}
 
export interface ForceVectorConfig {
  id: string;
  name: string;
  shortName: string;
  action: string;
  color: string;
  colorHex: number;
  parentTarget: "proximal" | "distal" | "gt" | "lt" | "shard";
  originOffset: [number, number, number];
  direction: [number, number, number];
  magnitude: number;
}

interface ForceVectorInstance {
  config: ForceVectorConfig;
  group: THREE.Group;
  shaft: THREE.Mesh;
  head: THREE.Mesh;
  anchor: THREE.Mesh;
  sprite: THREE.Sprite;
  material: THREE.MeshStandardMaterial;
  texture: THREE.CanvasTexture;
}

// Scratch vectors for zero-GC dynamic force vector kinematics
const _scratchAnchor = new THREE.Vector3();
const _scratchHeadPos = new THREE.Vector3();
const _scratchSpritePos = new THREE.Vector3();

// High-yield procedural billboard text sprite for 3D force vectors
function createForceLabelSprite(
  shortName: string,
  action: string,
  _colorHexStr?: string
): { sprite: THREE.Sprite; texture: THREE.CanvasTexture } {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 140;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.clearRect(0, 0, 512, 140);

    const radius = 24;
    const x = 12;
    const y = 12;
    const w = 488;
    const h = 116;

    ctx.fillStyle = "rgba(15, 23, 42, 0.78)";
    ctx.strokeStyle = "rgba(148, 163, 184, 0.40)";
    ctx.lineWidth = 3;

    ctx.beginPath();
    const ctxAny = ctx as unknown as { roundRect?: (x: number, y: number, w: number, h: number, r: number) => void };
    if (typeof ctxAny.roundRect === "function") {
      ctxAny.roundRect(x, y, w, h, radius);
    } else {
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + w - radius, y);
      ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
      ctx.lineTo(x + w, y + h - radius);
      ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
      ctx.lineTo(x + radius, y + h);
      ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
    }
    ctx.fill();
    ctx.stroke();

    ctx.font = "bold 38px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
    ctx.fillStyle = "#F8FAFC";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(shortName, 256, 48);

    ctx.font = "600 24px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
    ctx.fillStyle = "#94A3B8";
    ctx.fillText(action, 256, 92);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;

  const spriteMat = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthTest: false,
  });

  const sprite = new THREE.Sprite(spriteMat);
  sprite.scale.set(30, 8.2, 1);
  sprite.renderOrder = 999;
  return { sprite, texture };
}

// Clinically validated musculoskeletal deforming force vectors database
function getForceVectorsForSubregion(
  subId: string,
  isClavicle: boolean,
  isHumerus: boolean,
  isPatella: boolean,
  isTibia: boolean,
  presetId?: string
): ForceVectorConfig[] {
  if (isTibia) {
    if (subId === "distal") {
      if (!presetId || presetId === "ankle_intact") return [];
      const isSer = presetId.startsWith("lh_ser_");
      const isSa = presetId.startsWith("lh_sa_");
      const isPer = presetId.startsWith("lh_per_");
      const isPa = presetId.startsWith("lh_pa_");
      const hasFibulaFracture = isSer || isSa || presetId === "lh_per_3" || presetId === "lh_per_4" || presetId === "lh_pa_3";
      const hasMedMalFracture = presetId === "lh_ser_4" || presetId === "lh_sa_2" || isPer || isPa;
      const hasVolkmann = presetId === "lh_ser_3" || presetId === "lh_ser_4" || presetId === "lh_per_4";
      const vectors: ForceVectorConfig[] = [];

      // 1. Peroneus Longus & Brevis (eversion & posterolateral tension on lateral malleolus)
      if (hasFibulaFracture) {
        vectors.push({
          id: "ankle_peroneus",
          name: "Peroneus Longus & Brevis",
          shortName: "Peroneal Tendons",
          action: "Posterolateral Retraction on Fibula",
          color: "#3B82F6",
          colorHex: 0x3B82F6,
          parentTarget: "shard",
          originOffset: [-20.0, -165.0, -18.0],
          direction: [-0.35, 0.88, -0.32],
          magnitude: 34.0,
        });
      }

      // 2. Rotatory / Abduction Vectors on Talus
      if (isSer || isPer) {
        vectors.push({
          id: "ankle_ext_rot",
          name: "External Rotatory Torque",
          shortName: "Ext Rot Torque",
          action: "Talar External Rotation & Shifting",
          color: isPer ? "#A855F7" : "#EF4444",
          colorHex: isPer ? 0xA855F7 : 0xEF4444,
          parentTarget: "proximal",
          originOffset: [6.0, -162.0, 14.0],
          direction: [0.85, 0.15, -0.50],
          magnitude: 36.0,
        });
      } else if (isSa) {
        vectors.push({
          id: "ankle_adduction",
          name: "Adduction / Inversion Vector",
          shortName: "Adduction Vector",
          action: "Medial Impaction on Plafond",
          color: "#F59E0B",
          colorHex: 0xF59E0B,
          parentTarget: "proximal",
          originOffset: [-4.0, -165.0, 4.0],
          direction: [0.92, 0.25, 0.28],
          magnitude: 35.0,
        });
      } else if (isPa) {
        vectors.push({
          id: "ankle_abduction",
          name: "Abduction / Valgus Vector",
          shortName: "Abduction Vector",
          action: "Lateral Valgus Bending on Mortise",
          color: "#06B6D4",
          colorHex: 0x06B6D4,
          parentTarget: "proximal",
          originOffset: [-2.0, -165.0, 6.0],
          direction: [-0.88, 0.20, 0.43],
          magnitude: 35.0,
        });
      }

      // 3. Tibialis Posterior (Medial column stabilizer / Inversion pull)
      if (hasMedMalFracture) {
        vectors.push({
          id: "ankle_tib_post",
          name: "Tibialis Posterior Tendon",
          shortName: "Tibialis Posterior",
          action: "Proximomedial Tension on Medial Malleolus",
          color: "#8B5CF6",
          colorHex: 0x8B5CF6,
          parentTarget: "lt",
          originOffset: [24.0, -152.0, -8.0],
          direction: [0.35, 0.85, 0.40],
          magnitude: 32.0,
        });
      }

      // 4. PITFL Avulsion Traction (Posterosuperior tension on Volkmann's fragment)
      if (hasVolkmann) {
        vectors.push({
          id: "ankle_pitfl_traction",
          name: "PITFL Avulsion Traction",
          shortName: "PITFL Traction",
          action: "Posterosuperior Tensile Pull on Posterior Malleolus",
          color: "#EC4899",
          colorHex: 0xEC4899,
          parentTarget: "gt",
          originOffset: [-1.5, -145.0, -16.0],
          direction: [-0.30, 0.78, -0.55],
          magnitude: 34.0,
        });
      }

      // 5. Achilles Tendon (Axial Plantarflexion Vector)
      vectors.push({
        id: "ankle_achilles",
        name: "Gastrocnemius-Soleus (Achilles Tendon)",
        shortName: "Achilles Tendon",
        action: "Plantarflexion Tension on Calcaneus",
        color: "#06B6D4",
        colorHex: 0x06B6D4,
        parentTarget: "proximal",
        originOffset: [-1.5, -195.0, -32.0],
        direction: [0.0, 0.95, 0.31],
        magnitude: 38.0,
      });

      return vectors;
    }
    return [
      {
        id: "tibia_patellar_tendon",
        name: "Patellar Tendon (Extensor Mechanism)",
        shortName: "Patellar Tendon",
        action: "Anteroproximal Extensor Pull",
        color: "#EF4444",
        colorHex: 0xEF4444,
        parentTarget: "distal",
        originOffset: [-10.0, 168.0, 33.5],
        direction: [0.0, 0.94, 0.34],
        magnitude: 40.0,
      },
      {
        id: "tibia_semimembranosus",
        name: "Semimembranosus (Hamstrings)",
        shortName: "Hamstrings (Medial)",
        action: "Posteromedial Retraction / Flexion",
        color: "#8B5CF6",
        colorHex: 0x8B5CF6,
        parentTarget: presetId === "schatzker_4" || presetId === "schatzker_5" || presetId === "schatzker_6" ? "proximal" : "distal",
        originOffset: [22.0, 178.0, -18.0],
        direction: [0.20, -0.92, -0.32],
        magnitude: 35.0,
      },
      {
        id: "tibia_biceps_femoris",
        name: "Biceps Femoris & LCL",
        shortName: "Biceps / LCL",
        action: "Posterolateral Tension",
        color: "#3B82F6",
        colorHex: 0x3B82F6,
        parentTarget: presetId === "schatzker_1" || presetId === "schatzker_2" || presetId === "schatzker_5" || presetId === "schatzker_6" ? "shard" : "distal",
        originOffset: [-30.0, 180.0, -10.0],
        direction: [-0.45, 0.85, -0.28],
        magnitude: 34.0,
      },
      {
        id: "tibia_popliteus",
        name: "Popliteus Muscle",
        shortName: "Popliteus",
        action: "Superolateral Rotatory Pull",
        color: "#10B981",
        colorHex: 0x10B981,
        parentTarget: "distal",
        originOffset: [-12.0, 160.0, -22.0],
        direction: [-0.60, 0.72, -0.35],
        magnitude: 30.0,
      },
    ];
  }

  if (isPatella) {
    return [
      {
        id: "patella_quadriceps",
        name: "Quadriceps Femoris",
        shortName: "Quadriceps",
        action: "Superior Retraction",
        color: "#EF4444",
        colorHex: 0xEF4444,
        parentTarget: "proximal",
        originOffset: [-10.5, 29.0, 26.0],
        direction: [0.0, 0.86, -0.50],
        magnitude: 38.0,
      },
      {
        id: "patella_tendon",
        name: "Patellar Tendon (Ligamentum Patellae)",
        shortName: "Patellar Tendon",
        action: "Inferior Anchoring to Tibia",
        color: "#3B82F6",
        colorHex: 0x3B82F6,
        parentTarget: "distal",
        originOffset: [-1.79, -8.5, 41.5],
        direction: [-0.35, -0.90, -0.25],
        magnitude: 36.0,
      },
    ];
  }

  if (isClavicle) {
    if (subId === "shaft") {
      return [
        {
          id: "clav_scm",
          name: "Sternocleidomastoid (SCM)",
          shortName: "SCM",
          action: "Posterosuperior Elevation",
          color: "#F43F5E",
          colorHex: 0xF43F5E,
          parentTarget: "proximal",
          originOffset: [38.0, 62.0, 50.0],
          direction: [0.0, 0.92, -0.38],
          magnitude: 34.0,
        },
        {
          id: "clav_pect_arm",
          name: "Pectoralis Major & Arm Weight",
          shortName: "Pect Major / Arm",
          action: "Inferomedial Displacement",
          color: "#F59E0B",
          colorHex: 0xF59E0B,
          parentTarget: "distal",
          originOffset: [-18.0, 66.0, 18.0],
          direction: [0.42, -0.88, 0.22],
          magnitude: 36.0,
        },
      ];
    }
    if (subId === "distal") {
      return [
        {
          id: "clav_dist_trap",
          name: "Trapezius & SCM",
          shortName: "Trapezius / SCM",
          action: "Superior Pull (Proximal)",
          color: "#F43F5E",
          colorHex: 0xF43F5E,
          parentTarget: "proximal",
          originOffset: [15.0, 64.0, 30.0],
          direction: [0.0, 0.92, -0.38],
          magnitude: 34.0,
        },
        {
          id: "clav_dist_gravity",
          name: "Upper Limb Gravity",
          shortName: "Arm Weight",
          action: "Inferior Sag (Distal)",
          color: "#06B6D4",
          colorHex: 0x06B6D4,
          parentTarget: "distal",
          originOffset: [-72.0, 68.0, -10.0],
          direction: [-0.20, -0.98, 0.0],
          magnitude: 34.0,
        },
      ];
    }
    if (subId === "ac-joint") {
      return [
        {
          id: "ac_trap",
          name: "Trapezius Muscle",
          shortName: "Trapezius",
          action: "Superior Clavicular Pull",
          color: "#F43F5E",
          colorHex: 0xF43F5E,
          parentTarget: "proximal",
          originOffset: [-38.0, 72.0, -8.0],
          direction: [0.0, 0.95, -0.31],
          magnitude: 34.0,
        },
        {
          id: "ac_arm",
          name: "Arm Weight & Gravity",
          shortName: "Arm Weight",
          action: "Depresses Scapula / Acromion",
          color: "#06B6D4",
          colorHex: 0x06B6D4,
          parentTarget: "distal",
          originOffset: [-72.0, 68.0, -10.0],
          direction: [-0.20, -0.98, 0.0],
          magnitude: 34.0,
        },
      ];
    }
    return [];
  }

  if (isHumerus) {
    if (subId === "proximal") {
      const isGtInvolved = presetId?.includes("gt") || presetId?.includes("4part") || presetId === "neer_1part";
      const isLtInvolved = presetId?.includes("lt") || presetId?.includes("4part");
      const vectors: ForceVectorConfig[] = [];

      if (isGtInvolved) {
        vectors.push({
          id: "hprox_supraspinatus",
          name: "Supraspinatus & Infraspinatus",
          shortName: "Rotator Cuff (GT)",
          action: "Posterosuperior Pull",
          color: "#06B6D4",
          colorHex: 0x06B6D4,
          parentTarget: "gt",
          originOffset: [16.0, 148.0, 0.0],
          direction: [0.35, 0.90, -0.25],
          magnitude: 32.0,
        });
      }
      if (isLtInvolved) {
        vectors.push({
          id: "hprox_subscapularis",
          name: "Subscapularis Muscle",
          shortName: "Subscapularis (LT)",
          action: "Anteromedial Pull",
          color: "#F97316",
          colorHex: 0xF97316,
          parentTarget: "lt",
          originOffset: [24.0, 130.0, 24.5],
          direction: [0.65, 0.20, 0.73],
          magnitude: 30.0,
        });
      }
      vectors.push({
        id: "hprox_pect",
        name: "Pectoralis Major",
        shortName: "Pect Major (Shaft)",
        action: "Medial Adduction Pull",
        color: "#E11D48",
        colorHex: 0xE11D48,
        parentTarget: "distal",
        originOffset: [6.0, 70.0, 10.5],
        direction: [0.85, 0.25, 0.45],
        magnitude: 34.0,
      });
      return vectors;
    }

    if (subId === "shaft") {
      return [
        {
          id: "hshaft_deltoid",
          name: "Deltoid Muscle",
          shortName: "Deltoid",
          action: "Abduction of Proximal Fragment",
          color: "#8B5CF6",
          colorHex: 0x8B5CF6,
          parentTarget: "proximal",
          originOffset: [-13.0, 30.0, -4.0],
          direction: [-0.85, 0.50, 0.15],
          magnitude: 32.0,
        },
        {
          id: "hshaft_pect",
          name: "Pectoralis Major",
          shortName: "Pect Major",
          action: "Adduction & Internal Pull",
          color: "#F59E0B",
          colorHex: 0xF59E0B,
          parentTarget: "proximal",
          originOffset: [6.0, 65.0, 10.5],
          direction: [0.88, 0.25, 0.40],
          magnitude: 32.0,
        },
        {
          id: "hshaft_arm",
          name: "Biceps & Triceps Brachii",
          shortName: "Biceps & Triceps",
          action: "Proximal Shortening Overlap",
          color: "#06B6D4",
          colorHex: 0x06B6D4,
          parentTarget: "distal",
          originOffset: [-10.0, -40.0, 2.0],
          direction: [0.0, 0.95, 0.30],
          magnitude: 32.0,
        },
      ];
    }

    if (subId === "distal") {
      return [
        {
          id: "hdist_triceps",
          name: "Triceps Brachii",
          shortName: "Triceps",
          action: "Posterior Displacement & Tilt",
          color: "#EF4444",
          colorHex: 0xEF4444,
          parentTarget: "distal",
          originOffset: [-34.0, -120.0, -24.5],
          direction: [0.0, 0.65, -0.76],
          magnitude: 32.0,
        },
        {
          id: "hdist_brachialis",
          name: "Brachialis & Biceps",
          shortName: "Brachialis / Biceps",
          action: "Anterior Shaft Shortening",
          color: "#06B6D4",
          colorHex: 0x06B6D4,
          parentTarget: "proximal",
          originOffset: [-10.0, -95.0, 4.0],
          direction: [0.0, 0.85, 0.52],
          magnitude: 32.0,
        },
      ];
    }
    return [];
  }

  // Femur
  if (subId === "femoral-neck") {
    return [
      {
        id: "fn_shortening",
        name: "Hip Abductors & Hamstrings",
        shortName: "Abductors / Hamstrings",
        action: "Proximal Shortening / Shear",
        color: "#F59E0B",
        colorHex: 0xF59E0B,
        parentTarget: "distal",
        originOffset: [-50.0, 202.0, -8.0],
        direction: [-0.15, 0.97, 0.18],
        magnitude: 34.0,
      },
      {
        id: "fn_extrot",
        name: "Iliopsoas & External Rotators",
        shortName: "External Rotators",
        action: "External Rotation Pull",
        color: "#EC4899",
        colorHex: 0xEC4899,
        parentTarget: "distal",
        originOffset: [-8.0, 142.0, -22.0],
        direction: [0.55, 0.45, -0.70],
        magnitude: 30.0,
      },
    ];
  }

  if (subId === "intertrochanteric") {
    const isGtComminuted = presetId?.includes("gt") || presetId?.includes("comminuted") || presetId?.includes("unstable");
    const isLtComminuted = presetId?.includes("lt") || presetId?.includes("comminuted") || presetId?.includes("unstable");
    return [
      {
        id: "it_abductors",
        name: "Gluteus Medius & Minimus",
        shortName: "Glut Med / Abductors",
        action: "Superolateral Pull (Abduction)",
        color: "#8B5CF6",
        colorHex: 0x8B5CF6,
        parentTarget: isGtComminuted ? "gt" : "proximal",
        originOffset: [-50.0, 202.0, -8.0],
        direction: [-0.90, 0.44, 0.0],
        magnitude: 34.0,
      },
      {
        id: "it_iliopsoas",
        name: "Iliopsoas Muscle",
        shortName: "Iliopsoas",
        action: "Flexion & Anteromedial Pull",
        color: "#EC4899",
        colorHex: 0xEC4899,
        parentTarget: isLtComminuted ? "lt" : "proximal",
        originOffset: [-8.0, 142.0, -22.0],
        direction: [0.35, 0.70, 0.62],
        magnitude: 32.0,
      },
      {
        id: "it_adductors",
        name: "Adductor Group",
        shortName: "Adductors",
        action: "Varus Shortening / Proximal Pull",
        color: "#F59E0B",
        colorHex: 0xF59E0B,
        parentTarget: "distal",
        originOffset: [-4.0, 75.0, 4.0],
        direction: [0.72, 0.69, 0.0],
        magnitude: 34.0,
      },
    ];
  }

  if (subId === "subtrochanteric") {
    const isLtAvulsion = presetId === "rt_1b" || presetId === "rt_2b";
    return [
      {
        id: "subtroch_iliopsoas",
        name: "Iliopsoas Muscle",
        shortName: "Iliopsoas",
        action: "Anterior Flexion & Ext Rot",
        color: "#EC4899",
        colorHex: 0xEC4899,
        parentTarget: isLtAvulsion ? "lt" : "proximal",
        originOffset: [-8.0, 142.0, -22.0],
        direction: [0.35, 0.70, 0.62],
        magnitude: 34.0,
      },
      {
        id: "subtroch_abductors",
        name: "Gluteus Medius / Abductors",
        shortName: "Glut Med",
        action: "Lateral Abduction Pull",
        color: "#8B5CF6",
        colorHex: 0x8B5CF6,
        parentTarget: "proximal",
        originOffset: [-50.0, 202.0, -8.0],
        direction: [-0.90, 0.44, 0.0],
        magnitude: 34.0,
      },
      {
        id: "subtroch_adductors",
        name: "Adductor Group",
        shortName: "Adductors",
        action: "Medial Adduction & Shortening",
        color: "#F59E0B",
        colorHex: 0xF59E0B,
        parentTarget: "distal",
        originOffset: [-4.0, 70.0, 4.0],
        direction: [0.72, 0.69, 0.0],
        magnitude: 34.0,
      },
    ];
  }

  if (subId === "femoral-shaft" || subId === "shaft") {
    return [
      {
        id: "fs_proximal",
        name: "Abductors & Hip Flexors",
        shortName: "Abductors & Flexors",
        action: "Flexion & Abduction Tilt",
        color: "#8B5CF6",
        colorHex: 0x8B5CF6,
        parentTarget: "proximal",
        originOffset: [-30.0, 110.0, 0.0],
        direction: [-0.70, 0.55, 0.45],
        magnitude: 34.0,
      },
      {
        id: "fs_distal",
        name: "Adductors & Hamstrings",
        shortName: "Adductors / Hamstrings",
        action: "Proximal Overriding & Shortening",
        color: "#F59E0B",
        colorHex: 0xF59E0B,
        parentTarget: "distal",
        originOffset: [-4.0, -20.0, 2.0],
        direction: [0.65, 0.75, 0.12],
        magnitude: 34.0,
      },
    ];
  }

  if (subId === "distal") {
    return [
      {
        id: "df_gastrocnemius",
        name: "Gastrocnemius Muscle",
        shortName: "Gastrocnemius",
        action: "Apex-Posterior Recurvatum",
        color: "#EF4444",
        colorHex: 0xEF4444,
        parentTarget: "distal",
        originOffset: [15.0, -195.0, -28.0],
        direction: [0.0, -0.65, -0.76],
        magnitude: 34.0,
      },
      {
        id: "df_quadriceps",
        name: "Quadriceps & Hamstrings",
        shortName: "Quadriceps",
        action: "Proximal Shortening Overlap",
        color: "#06B6D4",
        colorHex: 0x06B6D4,
        parentTarget: "proximal",
        originOffset: [-6.0, -120.0, 24.0],
        direction: [0.0, 0.95, 0.31],
        magnitude: 34.0,
      },
    ];
  }

  return [];
}

/**
 * Factory for Translucent Radiographic X-Ray ShaderMaterial
 * Simulates physical Beer-Lambert X-ray photon attenuation and Fresnel cortical edge density
 */
function createXRayMaterial(density: number = 0.70): THREE.ShaderMaterial {
  return new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: new THREE.Color(0x38bdf8) },       // Clinical radiograph cyan-slate medullary core
      uRimColor: { value: new THREE.Color(0xffffff) },    // Dense radiopaque cortical white rim
      uBaseDensity: { value: 0.16 },                      // Baseline cancellous bone translucency
      uRimPower: { value: 2.2 },                          // Sharpness of cortical attenuation
      uOpacity: { value: density },                       // User-adjustable translucency factor
    },
    vertexShader: `
      varying vec3 vNormal;
      varying vec3 vViewPosition;

      void main() {
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vViewPosition = -mvPosition.xyz;
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      uniform vec3 uColor;
      uniform vec3 uRimColor;
      uniform float uBaseDensity;
      uniform float uRimPower;
      uniform float uOpacity;

      varying vec3 vNormal;
      varying vec3 vViewPosition;

      void main() {
        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(vViewPosition);

        // Absolute cosine of angle between surface normal and camera line of sight (handles front and back faces)
        float dotNV = abs(dot(normal, viewDir));

        // Tangential rays penetrate greater cortical thickness (Fresnel effect)
        float rim = pow(clamp(1.0 - dotNV, 0.0, 1.0), uRimPower);

        // Radiodensity: baseline cancellous density + cortical rim peak
        float density = clamp(uBaseDensity + rim * (1.0 - uBaseDensity), 0.0, 1.0);

        // Interpolate between translucent cancellous tone and dense radiopaque cortical rim
        vec3 col = mix(uColor, uRimColor, pow(rim, 0.75));

        gl_FragColor = vec4(col, density * uOpacity);
      }
    `,
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    blending: THREE.CustomBlending,
    blendSrc: THREE.SrcAlphaFactor,
    blendDst: THREE.OneFactor,
    blendSrcAlpha: THREE.OneFactor,
    blendDstAlpha: THREE.OneMinusSrcAlphaFactor,
  });
}

interface AnkleLigamentBundle {
  group: THREE.Group;
  mat: THREE.MeshStandardMaterial;
  tornMat: THREE.MeshStandardMaterial;
  geometries: THREE.BufferGeometry[];
  meshes: THREE.Mesh[];
  aitflMesh: THREE.Mesh;
  aitflTornGroup: THREE.Group;
  deltoidSuperficialMesh: THREE.Mesh;
  deltoidDeepMesh: THREE.Mesh;
  deltoidTornGroup: THREE.Group;
}

function createRibbonGeometry(
  points: THREE.Vector3[],
  width: number,
  thickness: number,
  outwardNormal?: THREE.Vector3,
  twistAngle: number = 0
): THREE.BufferGeometry {
  const curve = new THREE.CatmullRomCurve3(points);
  const numSegments = 10;
  const curvePoints = curve.getPoints(numSegments);
  const positions: number[] = [];
  const indices: number[] = [];

  const binormals: THREE.Vector3[] = [];
  const upNormals: THREE.Vector3[] = [];

  for (let i = 0; i <= numSegments; i++) {
    const u = i / numSegments;
    const tangent = curve.getTangent(u).normalize();
    const p = curvePoints[i];

    // Surface facing direction: explicit outward normal or radial outward from central axis (0, y, 0)
    let out = outwardNormal
      ? outwardNormal.clone().normalize()
      : new THREE.Vector3(p.x, 0, p.z).normalize();

    if (Math.abs(tangent.dot(out)) > 0.95) {
      out = new THREE.Vector3(0, 1, 0);
    }

    // binormal is perpendicular to tangent and outward -> width runs along binormal
    const binormal = new THREE.Vector3().crossVectors(tangent, out).normalize();
    // normal is perpendicular to binormal and tangent -> flat surface face faces outward!
    const normal = new THREE.Vector3().crossVectors(binormal, tangent).normalize();

    if (twistAngle !== 0) {
      const angle = twistAngle * (u - 0.5);
      binormal.applyAxisAngle(tangent, angle);
      normal.applyAxisAngle(tangent, angle);
    }

    binormals.push(binormal);
    upNormals.push(normal);
  }

  const hw = width * 0.5;
  const ht = thickness * 0.5;

  for (let i = 0; i <= numSegments; i++) {
    const p = curvePoints[i];
    const b = binormals[i];
    const n = upNormals[i];

    const v0 = p.clone().addScaledVector(b, hw).addScaledVector(n, ht);
    const v1 = p.clone().addScaledVector(b, -hw).addScaledVector(n, ht);
    const v2 = p.clone().addScaledVector(b, -hw).addScaledVector(n, -ht);
    const v3 = p.clone().addScaledVector(b, hw).addScaledVector(n, -ht);

    positions.push(v0.x, v0.y, v0.z);
    positions.push(v1.x, v1.y, v1.z);
    positions.push(v2.x, v2.y, v2.z);
    positions.push(v3.x, v3.y, v3.z);
  }

  for (let i = 0; i < numSegments; i++) {
    const curr = i * 4;
    const next = (i + 1) * 4;

    indices.push(curr + 0, next + 0, curr + 1);
    indices.push(next + 0, next + 1, curr + 1);

    indices.push(curr + 2, next + 2, curr + 3);
    indices.push(next + 2, next + 3, curr + 3);

    indices.push(curr + 1, next + 1, curr + 2);
    indices.push(next + 1, next + 2, curr + 2);

    indices.push(curr + 3, next + 3, curr + 0);
    indices.push(next + 3, next + 0, curr + 0);
  }

  indices.push(0, 1, 2);
  indices.push(0, 2, 3);
  const last = numSegments * 4;
  indices.push(last + 0, last + 2, last + 1);
  indices.push(last + 0, last + 3, last + 2);

  const geom = new THREE.BufferGeometry();
  geom.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geom.setIndex(indices);
  geom.computeVertexNormals();
  return geom;
}

// Procedural broad anatomical triangular fan sheet for the Deltoid ligament complex
function createFanSheetGeometry(
  apexPoints: THREE.Vector3[],
  basePoints: THREE.Vector3[],
  thickness: number,
  outwardNormal: THREE.Vector3
): THREE.BufferGeometry {
  const numRays = 16;
  const numRings = 6;
  const apexCurve = new THREE.CatmullRomCurve3(apexPoints);
  const baseCurve = new THREE.CatmullRomCurve3(basePoints);

  const positions: number[] = [];
  const indices: number[] = [];

  const ht = thickness * 0.5;
  const n = outwardNormal.clone().normalize();

  for (let k = 0; k < 2; k++) {
    const zOffset = (k === 0 ? 1 : -1) * ht;
    for (let r = 0; r <= numRings; r++) {
      const vRatio = r / numRings;
      for (let i = 0; i <= numRays; i++) {
        const uRatio = i / numRays;
        const pApex = apexCurve.getPoint(uRatio);
        const pBase = baseCurve.getPoint(uRatio);
        const p = new THREE.Vector3().lerpVectors(pApex, pBase, vRatio);

        // Subtle anatomical convex contour over underlying bone cortex
        const bulge = Math.sin(vRatio * Math.PI) * 1.5;
        p.addScaledVector(n, zOffset + bulge);

        positions.push(p.x, p.y, p.z);
      }
    }
  }

  const vertsPerLayer = (numRings + 1) * (numRays + 1);

  // Outer surface
  for (let r = 0; r < numRings; r++) {
    for (let i = 0; i < numRays; i++) {
      const row1 = r * (numRays + 1);
      const row2 = (r + 1) * (numRays + 1);
      const a = row1 + i;
      const b = row1 + i + 1;
      const c = row2 + i + 1;
      const d = row2 + i;

      indices.push(a, b, c);
      indices.push(a, c, d);
    }
  }

  // Inner surface
  for (let r = 0; r < numRings; r++) {
    for (let i = 0; i < numRays; i++) {
      const row1 = vertsPerLayer + r * (numRays + 1);
      const row2 = vertsPerLayer + (r + 1) * (numRays + 1);
      const a = row1 + i;
      const b = row1 + i + 1;
      const c = row2 + i + 1;
      const d = row2 + i;

      indices.push(a, c, b);
      indices.push(a, d, c);
    }
  }

  // Side perimeter walls
  for (let r = 0; r < numRings; r++) {
    const a0 = r * (numRays + 1);
    const b0 = (r + 1) * (numRays + 1);
    const a1 = vertsPerLayer + a0;
    const b1 = vertsPerLayer + b0;
    indices.push(a0, a1, b1);
    indices.push(a0, b1, b0);
  }

  for (let r = 0; r < numRings; r++) {
    const a0 = r * (numRays + 1) + numRays;
    const b0 = (r + 1) * (numRays + 1) + numRays;
    const a1 = vertsPerLayer + a0;
    const b1 = vertsPerLayer + b0;
    indices.push(a0, b1, a1);
    indices.push(a0, b0, b1);
  }

  for (let i = 0; i < numRays; i++) {
    const a0 = numRings * (numRays + 1) + i;
    const b0 = a0 + 1;
    const a1 = vertsPerLayer + a0;
    const b1 = vertsPerLayer + b0;
    indices.push(a0, b0, b1);
    indices.push(a0, b1, a1);
  }

  for (let i = 0; i < numRays; i++) {
    const a0 = i;
    const b0 = i + 1;
    const a1 = vertsPerLayer + a0;
    const b1 = vertsPerLayer + b0;
    indices.push(a0, a1, b1);
    indices.push(a0, b1, b0);
  }

  const geom = new THREE.BufferGeometry();
  geom.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geom.setIndex(indices);
  geom.computeVertexNormals();
  return geom;
}

function createAnkleLigamentMeshes(): AnkleLigamentBundle {
  const group = new THREE.Group();
  group.name = "ankleLigamentGroup";

  const mat = new THREE.MeshStandardMaterial({
    color: 0xE2E8F0,
    roughness: 0.38,
    metalness: 0.05,
    transparent: true,
    opacity: 0.65,
    depthWrite: false,
    side: THREE.DoubleSide,
  });

  const tornMat = new THREE.MeshStandardMaterial({
    color: 0xDC2626,
    emissive: 0x991B1B,
    emissiveIntensity: 0.35,
    roughness: 0.45,
    side: THREE.DoubleSide,
  });

  const geometries: THREE.BufferGeometry[] = [];
  const meshes: THREE.Mesh[] = [];

  const addLig = (
    name: string,
    points: THREE.Vector3[],
    width: number,
    thickness: number,
    outwardNormal?: THREE.Vector3,
    twistAngle: number = 0,
    customMat?: THREE.Material
  ) => {
    const geom = createRibbonGeometry(points, width, thickness, outwardNormal, twistAngle);
    geometries.push(geom);
    const mesh = new THREE.Mesh(geom, customMat || mat);
    mesh.name = name;
    group.add(mesh);
    meshes.push(mesh);
    return mesh;
  };

  // 1. ATFL (Anterior Talofibular Ligament) - Surface facing anterolateral toward user
  addLig(
    "lig_atfl",
    [
      new THREE.Vector3(-19.54, -161.43, -0.29),
      new THREE.Vector3(-13.13, -161.12, 5.67),
      new THREE.Vector3(-6.72, -160.82, 11.64),
    ],
    8.5,
    2.2,
    new THREE.Vector3(-0.70, 0.05, 0.70)
  );

  // 2. CFL (Calcaneofibular Ligament) - Surface facing lateral toward user
  addLig(
    "lig_cfl",
    [
      new THREE.Vector3(-19.33, -175.27, -15.66),
      new THREE.Vector3(-20.11, -181.97, -3.87),
      new THREE.Vector3(-20.89, -188.68, 7.92),
    ],
    6.5,
    3.2,
    new THREE.Vector3(-1.0, 0.0, 0.0)
  );

  // 3. AITFL (Anterior Inferior Tibiofibular Ligament) - Surface facing anteriorly toward AP mortise view
  const aitflMesh = addLig(
    "lig_aitfl",
    [
      new THREE.Vector3(-16.29, -146.26, 8.52),
      new THREE.Vector3(-17.90, -149.59, 3.70),
      new THREE.Vector3(-19.51, -152.93, -1.13),
    ],
    12.0,
    2.2,
    new THREE.Vector3(-0.30, 0.0, 0.95)
  );

  // AITFL Torn Stumps with Acute Hemorrhagic Caps (for SER Stages I-IV)
  const aitflTornGroup = new THREE.Group();
  aitflTornGroup.name = "aitflTornGroup";
  aitflTornGroup.visible = false;

  // Stump A (Tibial Chaput tubercle side, ~35% length)
  const aitflStumpTibGeom = createRibbonGeometry(
    [
      new THREE.Vector3(-16.29, -146.26, 8.52),
      new THREE.Vector3(-16.90, -147.50, 5.0),
      new THREE.Vector3(-17.42, -148.60, 4.2),
    ],
    11.0,
    2.2,
    new THREE.Vector3(-0.30, 0.0, 0.95)
  );
  geometries.push(aitflStumpTibGeom);
  const aitflStumpTibMesh = new THREE.Mesh(aitflStumpTibGeom, mat);
  aitflStumpTibMesh.name = "lig_aitfl";
  aitflTornGroup.add(aitflStumpTibMesh);
  meshes.push(aitflStumpTibMesh);

  // Torn Red Cap for Tibial Stump
  const aitflCapTibGeom = createRibbonGeometry(
    [
      new THREE.Vector3(-17.42, -148.60, 4.2),
      new THREE.Vector3(-17.70, -149.15, 3.8),
    ],
    11.5,
    2.6,
    new THREE.Vector3(-0.30, 0.0, 0.95)
  );
  geometries.push(aitflCapTibGeom);
  const aitflCapTibMesh = new THREE.Mesh(aitflCapTibGeom, tornMat);
  aitflCapTibMesh.name = "lig_aitfl";
  aitflTornGroup.add(aitflCapTibMesh);
  meshes.push(aitflCapTibMesh);

  // Stump B (Fibular Wagstaffe tubercle side, ~35% length)
  const aitflStumpFibGeom = createRibbonGeometry(
    [
      new THREE.Vector3(-18.50, -150.80, 2.0),
      new THREE.Vector3(-19.00, -151.85, 0.5),
      new THREE.Vector3(-19.51, -152.93, -1.13),
    ],
    11.0,
    2.2,
    new THREE.Vector3(-0.30, 0.0, 0.95)
  );
  geometries.push(aitflStumpFibGeom);
  const aitflStumpFibMesh = new THREE.Mesh(aitflStumpFibGeom, mat);
  aitflStumpFibMesh.name = "lig_aitfl";
  aitflTornGroup.add(aitflStumpFibMesh);
  meshes.push(aitflStumpFibMesh);

  // Torn Red Cap for Fibular Stump
  const aitflCapFibGeom = createRibbonGeometry(
    [
      new THREE.Vector3(-18.25, -150.30, 2.4),
      new THREE.Vector3(-18.50, -150.80, 2.0),
    ],
    11.5,
    2.6,
    new THREE.Vector3(-0.30, 0.0, 0.95)
  );
  geometries.push(aitflCapFibGeom);
  const aitflCapFibMesh = new THREE.Mesh(aitflCapFibGeom, tornMat);
  aitflCapFibMesh.name = "lig_aitfl";
  aitflTornGroup.add(aitflCapFibMesh);
  meshes.push(aitflCapFibMesh);

  group.add(aitflTornGroup);

  // 4. PITFL (Posterior Inferior Tibiofibular Ligament) - Surface facing posteriorly
  addLig(
    "lig_pitfl",
    [
      new THREE.Vector3(-4.12, -145.56, -18.07),
      new THREE.Vector3(-7.97, -151.68, -19.16),
      new THREE.Vector3(-11.83, -157.81, -20.24),
    ],
    14.0,
    3.5,
    new THREE.Vector3(-0.30, 0.0, -0.95)
  );

  // 5. Deltoid Ligament Complex - Broad Continuous Fan Sheet (Superficial Layer)
  // Originates along the anterior and inferior border of Medial Malleolus and fans out widely
  // to cover the Navicular tuberosity, Spring Ligament, Sustentaculum Tali, and Posterior Talus
  const deltoidFanGeom = createFanSheetGeometry(
    [
      new THREE.Vector3(24.2, -152.0, 11.5),
      new THREE.Vector3(24.64, -154.44, 8.25),
      new THREE.Vector3(25.1, -155.0, 3.0),
      new THREE.Vector3(25.3, -155.5, -2.0),
    ],
    [
      new THREE.Vector3(17.42, -174.95, 37.19),  // Navicular tuberosity
      new THREE.Vector3(21.5, -179.0, 22.0),     // Spring ligament / Talonavicular joint margin
      new THREE.Vector3(26.0, -184.0, 4.0),      // Anterior Sustentaculum tali
      new THREE.Vector3(27.87, -188.04, -13.24), // Sustentaculum tali shelf
      new THREE.Vector3(26.14, -170.71, -8.0),   // Medial tubercle of talus
    ],
    2.2,
    new THREE.Vector3(1.0, 0.0, 0.0)
  );
  geometries.push(deltoidFanGeom);
  const deltoidFanMesh = new THREE.Mesh(deltoidFanGeom, mat);
  deltoidFanMesh.name = "lig_deltoid_superficial";
  group.add(deltoidFanMesh);
  meshes.push(deltoidFanMesh);

  // 6. Deltoid Deep Layer (Deep Posterior Tibiotalar Ligament) - Thick horizontal rectangular mass
  const deltoidDeepMesh = addLig(
    "lig_deltoid_deep",
    [
      new THREE.Vector3(24.64, -154.44, 8.25),
      new THREE.Vector3(24.26, -155.41, 0.41),
    ],
    12.0,
    4.5,
    new THREE.Vector3(1.0, 0.0, 0.0)
  );

  // Deltoid Torn Stumps with Acute Hemorrhagic Caps (for SER Stage IV bimalleolar equivalent)
  const deltoidTornGroup = new THREE.Group();
  deltoidTornGroup.name = "deltoidTornGroup";
  deltoidTornGroup.visible = false;

  // Medial Malleolar Stump (extends ~35% down)
  const deltoidTornStumpGeom = createFanSheetGeometry(
    [
      new THREE.Vector3(24.2, -152.0, 11.5),
      new THREE.Vector3(24.64, -154.44, 8.25),
      new THREE.Vector3(25.1, -155.0, 3.0),
      new THREE.Vector3(25.3, -155.5, -2.0),
    ],
    [
      new THREE.Vector3(21.8, -160.0, 20.5),
      new THREE.Vector3(23.5, -162.8, 13.1),
      new THREE.Vector3(25.4, -165.1, 2.4),
      new THREE.Vector3(26.2, -166.9, -5.8),
      new THREE.Vector3(25.6, -160.8, -4.1),
    ],
    2.2,
    new THREE.Vector3(1.0, 0.0, 0.0)
  );
  geometries.push(deltoidTornStumpGeom);
  const deltoidTornStumpMesh = new THREE.Mesh(deltoidTornStumpGeom, mat);
  deltoidTornStumpMesh.name = "lig_deltoid_superficial";
  deltoidTornGroup.add(deltoidTornStumpMesh);
  meshes.push(deltoidTornStumpMesh);

  // Hemorrhagic Cap along the torn distal edge of the deltoid stump
  const deltoidTornCapGeom = createFanSheetGeometry(
    [
      new THREE.Vector3(21.8, -160.0, 20.5),
      new THREE.Vector3(23.5, -162.8, 13.1),
      new THREE.Vector3(25.4, -165.1, 2.4),
      new THREE.Vector3(26.2, -166.9, -5.8),
      new THREE.Vector3(25.6, -160.8, -4.1),
    ],
    [
      new THREE.Vector3(21.2, -161.5, 21.5),
      new THREE.Vector3(23.0, -164.2, 14.0),
      new THREE.Vector3(25.0, -166.6, 2.8),
      new THREE.Vector3(25.8, -168.4, -6.4),
      new THREE.Vector3(25.2, -162.0, -4.5),
    ],
    2.6,
    new THREE.Vector3(1.0, 0.0, 0.0)
  );
  geometries.push(deltoidTornCapGeom);
  const deltoidTornCapMesh = new THREE.Mesh(deltoidTornCapGeom, tornMat);
  deltoidTornCapMesh.name = "lig_deltoid_superficial";
  deltoidTornGroup.add(deltoidTornCapMesh);
  meshes.push(deltoidTornCapMesh);

  group.add(deltoidTornGroup);

  // 7. Syndesmosis (Interosseous Ligament - IOL) - Thin non-obstructive coronal bridging sheet
  addLig(
    "lig_syndesmosis_iol",
    [
      new THREE.Vector3(-16.73, -137.19, 0.67),
      new THREE.Vector3(-8.65, -138.31, -14.95),
    ],
    14.0,
    1.0,
    new THREE.Vector3(0.0, 0.0, 1.0)
  );

  return {
    group,
    mat,
    tornMat,
    geometries,
    meshes,
    aitflMesh,
    aitflTornGroup,
    deltoidSuperficialMesh: deltoidFanMesh,
    deltoidDeepMesh,
    deltoidTornGroup,
  };
}

interface Bone3DViewerModalProps {
  modelUrl: string;
  boneName: string;
  initialRegionId?: string;
  darkMode?: boolean;
  onClose: () => void;
}

export interface PickedStructureInfo {
  titleEn: string;
  category: "ligament" | "fracture_fragment" | "bone" | "muscle_force";
  badge: string;
  badgeColor?: "teal" | "rose" | "amber" | "indigo" | "cyan" | "purple";
  details?: string;
  screenX: number;
  screenY: number;
  isPinned?: boolean;
}

export interface HoveredStructureInfo {
  titleEn: string;
  category: "ligament" | "fracture_fragment" | "bone" | "muscle_force";
  badgeColor?: "teal" | "rose" | "amber" | "indigo" | "cyan" | "purple";
  screenX: number;
  screenY: number;
}

export interface BoneVertexRange {
  name: string;
  start: number;
  end: number;
}

function resolvePickedStructure(
  hit: THREE.Intersection,
  activeSubregion: SubregionConfig,
  activePreset?: ClassificationPreset,
  boneRanges: BoneVertexRange[] = [],
  isTibia?: boolean,
  isHumerus?: boolean,
  isClavicle?: boolean,
  isPatella?: boolean,
  proximalMesh?: THREE.Mesh | null,
  distalMesh?: THREE.Mesh | null,
  gtMesh?: THREE.Mesh | null,
  ltMesh?: THREE.Mesh | null,
  shardMesh?: THREE.Mesh | null,
  forceConfigs: ForceVectorConfig[] = []
): Omit<PickedStructureInfo, "screenX" | "screenY" | "isPinned"> | null {
  // 1. Check Muscle Forces
  let obj: THREE.Object3D | null = hit.object;
  while (obj && obj.parent && !obj.name.startsWith("force_")) {
    obj = obj.parent;
  }
  if (obj && obj.name.startsWith("force_")) {
    const forceId = obj.name.replace("force_", "");
    const cfg = forceConfigs.find((f) => f.id === forceId);
    if (cfg) {
      return {
        titleEn: `${cfg.name} Force Vector`,
        category: "muscle_force",
        badge: `${cfg.magnitude} N Deforming Force`,
        badgeColor: "indigo",
        details: `${cfg.name}: ${cfg.action}`,
      };
    }
  }

  // 2. Check Ligaments
  const name = hit.object.name || "";
  if (name.startsWith("lig_")) {
    switch (name) {
      case "lig_atfl":
        return {
          titleEn: "ATFL (Anterior Talofibular Ligament)",
          category: "ligament",
          badge: "Lateral Ankle Stabilizer",
          badgeColor: "cyan",
          details: "Originates from the anterior margin of the lateral malleolus and inserts into the lateral neck of the talus. Most commonly injured ligament in ankle inversion sprains.",
        };
      case "lig_cfl":
        return {
          titleEn: "CFL (Calcaneofibular Ligament)",
          category: "ligament",
          badge: "Subtalar & Lateral Stabilizer",
          badgeColor: "cyan",
          details: "Originates from the tip of the lateral malleolus and inserts into the lateral calcaneal tubercle. Resists subtalar and talocrural inversion in dorsiflexion and neutral.",
        };
      case "lig_aitfl": {
        const pId = activePreset?.id || "";
        const isSer = pId.startsWith("lh_ser_");
        const isPer = pId === "lh_per_2" || pId === "lh_per_3" || pId === "lh_per_4";
        const isPa = pId === "lh_pa_2" || pId === "lh_pa_3";
        let badge = "Syndesmosis Complex (Intact)";
        let badgeColor: "rose" | "cyan" | "purple" = "cyan";
        let details = "Bridges the anterior tubercle of Chaput on the distal tibia to the Wagstaffe tubercle on the fibula. Primary restraint to external rotation; intact in SA and PER Stage I.";
        if (isSer) {
          badge = "RUPTURED (SER Stage I–IV)";
          badgeColor = "rose";
          details = "Ruptured anterior inferior tibiofibular ligament resulting from external rotation torque in supination. Entry injury of Lauge-Hansen SER sequence.";
        } else if (isPer) {
          badge = "RUPTURED (PER Stage II–IV)";
          badgeColor = "purple";
          details = "Ruptured anterior inferior tibiofibular ligament resulting from external rotation torque propagating anteriorly in pronation (PER Stage II).";
        } else if (isPa) {
          badge = "RUPTURED (PA Stage II–III)";
          badgeColor = "cyan";
          details = "Ruptured anterior inferior tibiofibular ligament resulting from forceful lateral mortise impaction during pronation-abduction (PA Stage II).";
        }
        return {
          titleEn: "AITFL (Anterior Inferior Tibiofibular Ligament)",
          category: "ligament",
          badge,
          badgeColor,
          details,
        };
      }
      case "lig_pitfl": {
        const pId = activePreset?.id || "";
        const isVolkmann = pId === "lh_ser_3" || pId === "lh_ser_4" || pId === "lh_per_4";
        const isPaTorn = pId === "lh_pa_2" || pId === "lh_pa_3";
        let badge = "Posterior Mortise Restraint (Intact)";
        let badgeColor: "rose" | "cyan" | "purple" = "cyan";
        let details = "Strong posterior stabilizer connecting the posterior tibial malleolus to the posterior fibula. Frequently avulses the posterior malleolar fragment in rotational ankle fractures.";
        if (isVolkmann) {
          badge = pId === "lh_per_4" ? "Anchored to Volkmann Fragment (PER IV)" : "Anchored to Volkmann Fragment (SER III–IV)";
          badgeColor = pId === "lh_per_4" ? "purple" : "rose";
          details = "Strong posterior syndesmotic ligament attaching the fibular digital fossa to the avulsed posterior tibial lip (Volkmann's fragment).";
        } else if (isPaTorn) {
          badge = "RUPTURED (PA Stage II–III)";
          badgeColor = "cyan";
          details = "Ruptured posterior inferior tibiofibular ligament caused by forceful lateral talar impaction in pronation-abduction.";
        }
        return {
          titleEn: "PITFL (Posterior Inferior Tibiofibular Ligament)",
          category: "ligament",
          badge,
          badgeColor,
          details,
        };
      }
      case "lig_deltoid_superficial": {
        const pId = activePreset?.id || "";
        const isSer4 = pId === "lh_ser_4";
        const isPer = pId.startsWith("lh_per_");
        const isPa = pId.startsWith("lh_pa_");
        let badge = "Medial Column Stabilizer (Intact)";
        let badgeColor: "rose" | "cyan" | "purple" = "cyan";
        let details = "Broad fan-like sheet originating from the anterior colliculus of the medial malleolus and inserting into the navicular tuberosity, spring ligament, and sustentaculum tali. Resists hindfoot eversion and pronation.";
        if (isSer4) {
          badge = "RUPTURED / Incompetent (SER IV)";
          badgeColor = "rose";
          details = "Complete failure of superficial deltoid fan-sheet resulting from external rotation torque, producing gross medial clear space widening and loss of valgus restraint.";
        } else if (isPer) {
          badge = "RUPTURED / Incompetent (PER I–IV)";
          badgeColor = "purple";
          details = "Tensile disruption of superficial deltoid complex initiated by external rotatory torque on the pronated foot (Stage I injury in PER).";
        } else if (isPa) {
          badge = "RUPTURED / Incompetent (PA I–III)";
          badgeColor = "cyan";
          details = "Tensile disruption of superficial deltoid complex caused by forceful eversion/abduction of the pronated foot (Stage I injury in PA).";
        }
        return {
          titleEn: "Superficial Deltoid Ligament (Fan-Sheet)",
          category: "ligament",
          badge,
          badgeColor,
          details,
        };
      }
      case "lig_deltoid_deep": {
        const pId = activePreset?.id || "";
        const isSer4 = pId === "lh_ser_4";
        const isPer = pId.startsWith("lh_per_");
        const isPa = pId.startsWith("lh_pa_");
        let badge = "Primary Mortise Restraint (Intact)";
        let badgeColor: "rose" | "cyan" | "purple" = "cyan";
        let details = "Thick, robust ligament originating from the intercollicular groove and posterior colliculus, inserting into the medial talar body and fossa. Primary restraint against lateral talar shift.";
        if (isSer4) {
          badge = "RUPTURED (SER IV)";
          badgeColor = "rose";
          details = "Torn deep posterior tibiotalar ligament. Complete loss of primary restraint against lateral talar shift and external rotation roll; pathognomonic for SER Stage IV.";
        } else if (isPer) {
          badge = "RUPTURED (PER I–IV)";
          badgeColor = "purple";
          details = "Torn deep posterior tibiotalar ligament. Primary restraint against lateral talar shift is lost from initial medial failure in pronation-external rotation.";
        } else if (isPa) {
          badge = "RUPTURED (PA I–III)";
          badgeColor = "cyan";
          details = "Torn deep posterior tibiotalar ligament resulting from forceful medial tension in pronation-abduction.";
        }
        return {
          titleEn: "Deep Deltoid Ligament (Deep Posterior Tibiotalar)",
          category: "ligament",
          badge,
          badgeColor,
          details,
        };
      }
      case "lig_syndesmosis_iol":
      case "lig_syndesmosis": {
        const pId = activePreset?.id || "";
        const isSa = pId.startsWith("lh_sa_");
        const isPerHigh = pId === "lh_per_3" || pId === "lh_per_4";
        const isPaHigh = pId === "lh_pa_2" || pId === "lh_pa_3";
        let badge = "Syndesmosis Membrane";
        let details = "Dense fibrous sheet connecting the distal tibia and fibula, preventing syndesmotic diastasis under axial and rotatory physiological loading.";
        if (isSa) {
          badge = "Syndesmosis Membrane (100% Intact)";
          details = "In Supination-Adduction (Weber A), the syndesmosis remains 100% intact.";
        } else if (isPerHigh) {
          badge = "Interosseous Membrane TORN (Suprasyndesmotic)";
          details = "Extensive rupture of the interosseous membrane from the distal incisura up to the suprasyndesmotic fibular fracture level (Weber C / Maisonneuve).";
        } else if (isPaHigh) {
          badge = "Interosseous Membrane TORN (Diastasis)";
          details = "Interosseous syndesmotic membrane disrupted by lateral mortise splaying and bending stress (PA Stage II–III).";
        }
        return {
          titleEn: "Interosseous Ligament (Syndesmotic IOL)",
          category: "ligament",
          badge,
          badgeColor: "cyan",
          details,
        };
      }
      case "lig_conoid":
        return {
          titleEn: "Conoid Ligament (CC Complex)",
          category: "ligament",
          badge: "Coracoclavicular Complex",
          badgeColor: "cyan",
          details: "Inverted cone-shaped medial component of the coracoclavicular complex, inserting into the conoid tubercle. Primary restraint against superior and anterior clavicular displacement.",
        };
      case "lig_trapezoid":
        return {
          titleEn: "Trapezoid Ligament (CC Complex)",
          category: "ligament",
          badge: "Coracoclavicular Complex",
          badgeColor: "cyan",
          details: "Lateral quadrilateral component of the coracoclavicular complex, resisting axial compression of the clavicle toward the acromion.",
        };
      case "lig_ac":
        return {
          titleEn: "Acromioclavicular (AC) Ligament",
          category: "ligament",
          badge: "AC Joint Capsule",
          badgeColor: "cyan",
          details: "Capsular ligament reinforcing the acromioclavicular articulation, providing anteroposterior horizontal stability; disrupted in Rockwood injuries.",
        };
      case "lig_ca":
        return {
          titleEn: "Coracoacromial (CA) Ligament",
          category: "ligament",
          badge: "Coracoacromial Arch",
          badgeColor: "cyan",
          details: "Forms the osseoligamentous coracoacromial arch, preventing superior migration and subluxation of the humeral head.",
        };
    }
  }

  // 3. Check Individual Ankle & Hindfoot Bones
  if (isTibia && activeSubregion.id === "distal" && hit.object === distalMesh) {
    if (hit.faceIndex != null) {
      const vertIdx = hit.faceIndex * 3;
      const matched = boneRanges.find((r) => vertIdx >= r.start && vertIdx < r.end);
      const bName = matched?.name || "";
      if (bName.includes("fibula")) {
        return {
          titleEn: "Fibula (Lateral Malleolus)",
          category: "bone",
          badge: "Lateral Mortise Buttress",
          badgeColor: "amber",
          details: "Forms the lateral wall of the ankle mortise, extending ~1 cm more distal than the medial malleolus to ensure articular stability.",
        };
      }
      if (bName.includes("talus")) {
        return {
          titleEn: "Talus (Talar Dome & Body)",
          category: "bone",
          badge: "Trochlea Tali",
          badgeColor: "amber",
          details: "Wedge-shaped articular keystone transmitting entire body weight from the tibial plafond to the calcaneus and navicular. ~60% covered by articular cartilage with no direct muscular attachments.",
        };
      }
      if (bName.includes("calcaneus")) {
        return {
          titleEn: "Calcaneus (Heel Bone)",
          category: "bone",
          badge: "Hindfoot Foundation",
          badgeColor: "amber",
          details: "Largest tarsal bone forming the posterior foundation of the longitudinal foot arch and lever arm for the Achilles tendon insertion.",
        };
      }
      if (bName.includes("navicular")) {
        return {
          titleEn: "Navicular (Tarsal Navicular)",
          category: "bone",
          badge: "Medial Longitudinal Arch",
          badgeColor: "amber",
          details: "Boat-shaped tarsal bone articulating with the talar head and three cuneiforms; primary insertion site for the tibialis posterior tendon.",
        };
      }
      if (bName.includes("cuboid")) {
        return {
          titleEn: "Cuboid Bone",
          category: "bone",
          badge: "Lateral Column Keystone",
          badgeColor: "amber",
          details: "Keystone of the lateral foot column articulating with the calcaneus and 4th/5th metatarsal bases; grooved inferiorly for the peroneus longus tendon.",
        };
      }
      return {
        titleEn: "Tibia (Plafond & Medial Malleolus)",
        category: "bone",
        badge: "Weight-Bearing Articular Plafond",
        badgeColor: "amber",
        details: "Primary weight-bearing articular vault (~85-90% joint force) with the medial malleolus forming the rigid medial wall of the mortise.",
      };
    }
  }

  // 4. Check Fractured Bone Fragments
  const isHitProximal = hit.object === proximalMesh;
  const isHitDistal = hit.object === distalMesh;
  const isHitGt = hit.object === gtMesh;
  const isHitLt = hit.object === ltMesh;
  const isHitShard = hit.object === shardMesh;

  if (isHitProximal) {
    if (isTibia) {
      if (activeSubregion.id === "distal") {
        const pId = activePreset?.id || "";
        if (pId === "lh_ser_4") {
          return {
            titleEn: "Subluxated Talus & Hindfoot Complex",
            category: "fracture_fragment",
            badge: "Talar Lateral Shift (>4mm Clear Space)",
            badgeColor: "rose",
            details: "Lateral subluxation and external rotation roll of the talus following complete loss of medial restraint (deltoid disruption / medial malleolar fracture). Widens medial clear space >4mm on Mortise view.",
          };
        }
        if (pId === "lh_per_4") {
          return {
            titleEn: "Subluxated Talus & Hindfoot Complex",
            category: "fracture_fragment",
            badge: "Gross Talar Lateral Shift & Valgus Tilt",
            badgeColor: "purple",
            details: "Gross lateral subluxation and external rotation of the talus resulting from complete circumferential syndesmotic and medial failure (PER Stage IV).",
          };
        }
        if (pId === "lh_pa_3") {
          return {
            titleEn: "Subluxated Talus & Hindfoot Complex",
            category: "fracture_fragment",
            badge: "Talar Valgus Tilt & Lateral Subluxation",
            badgeColor: "cyan",
            details: "Valgus tilt and lateral translation of the talus widening the medial clear space following suprasyndesmotic fibular fracture and syndesmotic rupture.",
          };
        }
        if (pId === "lh_sa_2") {
          return {
            titleEn: "Adducted Talar Dome & Hindfoot",
            category: "fracture_fragment",
            badge: "Talar Varus Impaction",
            badgeColor: "amber",
            details: "Adducted talus driving forceful axial-inversion impaction into the medial tibial plafond angle.",
          };
        }
        // Identify individual tarsal bones based on hit.point
        const pt = hit.point;
        if (pt.y < -185) {
          return {
            titleEn: "Calcaneus (Heel Bone)",
            category: "bone",
            badge: "Hindfoot Foundation",
            badgeColor: "amber",
            details: "Largest tarsal bone forming the posterior foundation of the longitudinal foot arch and lever arm for the Achilles tendon insertion.",
          };
        }
        if (pt.z > 20 && pt.x > -5) {
          return {
            titleEn: "Navicular (Tarsal Navicular)",
            category: "bone",
            badge: "Medial Longitudinal Arch",
            badgeColor: "amber",
            details: "Boat-shaped tarsal bone articulating with the talar head and three cuneiforms; primary insertion site for the tibialis posterior tendon.",
          };
        }
        if (pt.x < -6 && pt.z > 10) {
          return {
            titleEn: "Cuboid Bone",
            category: "bone",
            badge: "Lateral Column Keystone",
            badgeColor: "amber",
            details: "Keystone of the lateral foot column articulating with the calcaneus and 4th/5th metatarsal bases; grooved inferiorly for the peroneus longus tendon.",
          };
        }
        return {
          titleEn: "Talus (Talar Dome & Body)",
          category: "bone",
          badge: "Trochlea Tali (Congruent Mortise)",
          badgeColor: "amber",
          details: "Wedge-shaped articular keystone transmitting body weight from the tibial plafond to the calcaneus and navicular. ~60% covered by articular cartilage with no direct muscular attachments.",
        };
      }
      const mode = activePreset?.partitionMode || "";
      if (mode === "schatzker_2" || mode === "schatzker_3") {
        return {
          titleEn: "Depressed Articular Fragment",
          category: "fracture_fragment",
          badge: "Articular Joint Depression",
          badgeColor: "amber",
          details: "Subchondral cancellous impaction and joint surface depression (Schatzker II/III); requires elevation and structural bone grafting/void filling.",
        };
      }
      return {
        titleEn: "Condylar Fracture Fragment",
        category: "fracture_fragment",
        badge: "Articular Split Fragment",
        badgeColor: "rose",
        details: "Sheared condylar articular split fragment detached from the tibial metadiaphyseal shaft.",
      };
    }
    if (isHumerus) {
      if (activeSubregion.id === "proximal") {
        return {
          titleEn: "Humeral Head Fragment",
          category: "fracture_fragment",
          badge: "Anatomical Neck Segment",
          badgeColor: "rose",
          details: "Articular segment detached along the anatomical neck; at high risk of devascularization and osteonecrosis (AVN).",
        };
      }
      return {
        titleEn: "Proximal Shaft Fragment",
        category: "fracture_fragment",
        badge: "Deltoid Abduction Pull",
        badgeColor: "rose",
        details: "Humeral diaphysis subjected to lateral abduction force vectors from the deltoid insertion.",
      };
    }
    if (isClavicle) {
      return {
        titleEn: "Proximal Clavicular Segment",
        category: "fracture_fragment",
        badge: "SCM Muscle Pull",
        badgeColor: "rose",
        details: "Displaced superiorly and posteriorly by the unapposed pull of the sternocleidomastoid (SCM) muscle.",
      };
    }
    if (isPatella) {
      return {
        titleEn: "Superior Patellar Pole",
        category: "fracture_fragment",
        badge: "Quadriceps Retraction",
        badgeColor: "rose",
        details: "Retracted proximally toward the anterior thigh by the active tension of the quadriceps tendon.",
      };
    }
    // Femur default
    return {
      titleEn: "Head & Neck Fragment",
      category: "fracture_fragment",
      badge: activePreset?.id === "intact" ? "Intact Femoral Head" : "Displaced Proximal Fragment",
      badgeColor: activePreset?.id === "intact" ? "teal" : "rose",
      details: "Articular femoral head and cervical neck segment; disruption of retinacular vessels carries high osteonecrosis risk in displaced intracapsular fractures (Garden III-IV).",
    };
  }

  if (isHitDistal) {
    if (isTibia) {
      if (activeSubregion.id === "distal") {
        const pt = hit.point;
        if (pt.x < -10 && pt.y > -145) {
          return {
            titleEn: "Fibula (Proximal / Shaft Pillar)",
            category: "bone",
            badge: "Lateral Column Anchor",
            badgeColor: "amber",
            details: "Intact proximal fibular shaft continuous with the lateral tibial condyle.",
          };
        }
        return {
          titleEn: "Tibia (Plafond & Diaphyseal Shaft)",
          category: "bone",
          badge: "Weight-Bearing Articular Plafond",
          badgeColor: "amber",
          details: "Primary weight-bearing articular vault (~85-90% joint force) providing the horizontal roof and medial wall of the ankle mortise.",
        };
      }
      return {
        titleEn: "Main Tibial Shaft & Metaphysis",
        category: "fracture_fragment",
        badge: "Diaphyseal Foundation",
        badgeColor: "teal",
        details: "Diaphyseal cortical column providing structural axial support for weight-bearing load transmission.",
      };
    }
    if (isHumerus) {
      return {
        titleEn: "Distal Shaft Fragment",
        category: "fracture_fragment",
        badge: "Distal Segment",
        badgeColor: "rose",
        details: "Distal humeral pillar continuous with the condylar supracondylar column.",
      };
    }
    if (isClavicle) {
      return {
        titleEn: "Distal Clavicular Segment",
        category: "fracture_fragment",
        badge: "Limb Weight Sag",
        badgeColor: "rose",
        details: "Depressed inferiorly by upper extremity gravitational weight and pectoralis major adduction forces.",
      };
    }
    if (isPatella) {
      return {
        titleEn: "Inferior Patellar Pole",
        category: "fracture_fragment",
        badge: "Patellar Tendon Anchor",
        badgeColor: "rose",
        details: "Anchored to the tibial tubercle by the patellar tendon; frequently comminuted in sleeve fractures.",
      };
    }
    // Femur default
    return {
      titleEn: "Distal Shaft Fragment",
      category: "fracture_fragment",
      badge: "Adductor Pull",
      badgeColor: "rose",
      details: "Displaced medially and proximally by adductor and hamstring muscle spasm, resulting in limb shortening.",
    };
  }

  if (isHitGt) {
    if (isTibia && activeSubregion.id === "distal") {
      const pId = activePreset?.id || "";
      if (pId === "lh_pa_3") {
        return {
          titleEn: "Comminuted Fibular Butterfly Shard (Weber C)",
          category: "fracture_fragment",
          badge: "Lauge-Hansen PA III (Lateral Butterfly)",
          badgeColor: "cyan",
          details: "Lateral cortical butterfly wedge fragment shattered off the fibular diaphysis from eccentric compression and bending stress in pronation-abduction (Weber C).",
        };
      }
      const isPer4 = pId === "lh_per_4";
      return {
        titleEn: "Posterior Malleolus (Volkmann's Fragment)",
        category: "fracture_fragment",
        badge: isPer4 ? "Lauge-Hansen PER IV (Volkmann's Triangle)" : "Lauge-Hansen SER III–IV (Volkmann's Triangle)",
        badgeColor: isPer4 ? "purple" : "rose",
        details: "Posterolateral distal tibial articular lip avulsed by the posterior inferior tibiofibular ligament (PITFL). Fixation indicated if involving >25% of the articular surface or demonstrating >2mm residual step-off after fibular reduction.",
      };
    }
    if (isHumerus) {
      return {
        titleEn: "Greater Tuberosity (GT) Fragment",
        category: "fracture_fragment",
        badge: "Rotator Cuff Insertion",
        badgeColor: "amber",
        details: "Insertion site of supraspinatus, infraspinatus, and teres minor; typically retracted posterosuperiorly.",
      };
    }
    return {
      titleEn: "Greater Trochanter (GT) Fragment",
      category: "fracture_fragment",
      badge: "Abductor Insertion",
      badgeColor: "amber",
      details: "Anchors gluteus medius and minimus abductor musculature; essential posterolateral biomechanical buttress.",
    };
  }

  if (isHitLt) {
    if (isTibia && activeSubregion.id === "distal") {
      const pId = activePreset?.id || "";
      if (pId === "lh_sa_2") {
        return {
          titleEn: "Medial Malleolus Vertical Shear Fragment",
          category: "fracture_fragment",
          badge: "Lauge-Hansen SA II (Vertical Shear)",
          badgeColor: "rose",
          details: "Vertical or steeply oblique shear fracture propagating upward into the distal metaphyseal cortex from talar adduction impaction. Prone to shear displacement; requires horizontal lag screws and medial anti-glide buttress plate.",
        };
      }
      if (pId.startsWith("lh_per_")) {
        return {
          titleEn: "Medial Malleolus Transverse Avulsion Fragment",
          category: "fracture_fragment",
          badge: "Lauge-Hansen PER I–IV (Medial Avulsion)",
          badgeColor: "purple",
          details: "Transverse tension avulsion fracture across the base of the medial malleolus at or below the plafond resulting from pronation-external rotation torque.",
        };
      }
      if (pId.startsWith("lh_pa_")) {
        return {
          titleEn: "Medial Malleolus Transverse Avulsion Fragment",
          category: "fracture_fragment",
          badge: "Lauge-Hansen PA I–III (Medial Avulsion)",
          badgeColor: "cyan",
          details: "Transverse tension avulsion fracture across the base of the medial malleolus at or below the plafond resulting from pronation-abduction torque.",
        };
      }
      return {
        titleEn: "Medial Malleolus Transverse Avulsion Fragment",
        category: "fracture_fragment",
        badge: "Lauge-Hansen SER IV (Trimalleolar)",
        badgeColor: "rose",
        details: "Transverse tensile avulsion fracture across the base of the medial malleolus at or below the plafond. Accompanied by talar lateral shift and medial clear space widening.",
      };
    }
    if (isHumerus) {
      return {
        titleEn: "Lesser Tuberosity (LT) Fragment",
        category: "fracture_fragment",
        badge: "Subscapularis Insertion",
        badgeColor: "amber",
        details: "Insertion site of the subscapularis muscle; displaced medially in Neer 3-part and 4-part fractures.",
      };
    }
    return {
      titleEn: "Lesser Trochanter (LT) Fragment",
      category: "fracture_fragment",
      badge: "Iliopsoas Insertion",
      badgeColor: "amber",
      details: "Insertion site of the iliopsoas tendon; displacement indicates loss of posteromedial calcar buttress and instability in Evans classification.",
    };
  }

  if (isHitShard) {
    if (isTibia) {
      if (activeSubregion.id === "distal") {
        const pId = activePreset?.id || "";
        if (pId.startsWith("lh_ser_")) {
          return {
            titleEn: "Lateral Malleolus Spiral Fragment (Fibula)",
            category: "fracture_fragment",
            badge: "Lauge-Hansen SER II–IV (Weber B)",
            badgeColor: "rose",
            details: "Classic spiral/oblique fracture of the lateral malleolus starting at the joint line (Weber B) and extending anteroinferior to posterosuperior. Tilts posterolaterally under external rotatory torque.",
          };
        }
        if (pId.startsWith("lh_sa_")) {
          return {
            titleEn: "Lateral Malleolus Infrasyndesmotic Fragment",
            category: "fracture_fragment",
            badge: "Lauge-Hansen SA I–II (Weber A)",
            badgeColor: "rose",
            details: "Transverse tensile avulsion fracture of the distal fibular tip at or below the joint line (Weber A). Syndesmosis remains completely intact.",
          };
        }
        if (pId.startsWith("lh_per_")) {
          return {
            titleEn: "High Spiral Fibular Shaft Fragment (Weber C)",
            category: "fracture_fragment",
            badge: "Lauge-Hansen PER III–IV (Weber C High Spiral)",
            badgeColor: "purple",
            details: "High spiral suprasyndesmotic fracture of the fibular diaphysis (Weber C / Maisonneuve) occurring 6–8 cm above the joint line, accompanied by interosseous membrane rupture.",
          };
        }
        if (pId.startsWith("lh_pa_")) {
          return {
            titleEn: "High Suprasyndesmotic Fibular Shaft Fragment (Weber C)",
            category: "fracture_fragment",
            badge: "Lauge-Hansen PA III (Weber C High Bending)",
            badgeColor: "cyan",
            details: "High suprasyndesmotic bending fracture of the fibular diaphysis (Weber C, ~5–7 cm above joint line) resulting from outward bending load across the syndesmosis.",
          };
        }
        return {
          titleEn: "Lateral Malleolus Fragment (Fibula)",
          category: "fracture_fragment",
          badge: "Fibular Fracture Fragment",
          badgeColor: "rose",
          details: "Displaced lateral malleolar fragment dissociated from the proximal fibular shaft.",
        };
      }
      return {
        titleEn: "Lateral Split Wedge Fragment",
        category: "fracture_fragment",
        badge: "Schatzker Fragment",
        badgeColor: "amber",
        details: "Cortical bone wedge sheared laterally by axial valgus impact from the lateral femoral condyle.",
      };
    }
    if (isClavicle) {
      return {
        titleEn: "Coracoclavicular Avulsion Shard",
        category: "fracture_fragment",
        badge: "Avulsed Bone Shard",
        badgeColor: "amber",
        details: "Inferior cortical bone fragment avulsed while maintaining continuity with intact coracoclavicular ligaments.",
      };
    }
    return {
      titleEn: "Comminuted Butterfly Fragment",
      category: "fracture_fragment",
      badge: "Comminuted Wedge",
      badgeColor: "amber",
      details: "Third triangular cortical wedge fragment created by eccentric bending and torsional failure.",
    };
  }

  return null;
}

export const Bone3DViewerModal: React.FC<Bone3DViewerModalProps> = ({
  modelUrl,
  boneName,
  initialRegionId,
  onClose,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  const isTibia = modelUrl.toLowerCase().includes("tibia") || boneName.toLowerCase().includes("tibia");
  const isHumerus = modelUrl.toLowerCase().includes("humerus") || boneName.toLowerCase().includes("humerus");
  const isClavicle = modelUrl.toLowerCase().includes("clavicle") || boneName.toLowerCase().includes("clavicle");
  const isPatella = modelUrl.toLowerCase().includes("patella") || boneName.toLowerCase().includes("patella");
  const availableSubregions = isTibia
    ? TIBIA_SUBREGIONS
    : isPatella
    ? PATELLA_SUBREGIONS
    : isClavicle
    ? CLAVICLE_SUBREGIONS
    : isHumerus
    ? HUMERUS_SUBREGIONS
    : FEMUR_SUBREGIONS;

  // Anatomical Ligaments visibility toggle state
  const [showLigaments, setShowLigaments] = useState(true);
  const showLigamentsRef = useRef(showLigaments);
  showLigamentsRef.current = showLigaments;

  // Dynamic Musculoskeletal Force Vectors visibility toggle state (default: false / hidden)
  const [showForces, setShowForces] = useState(false);
  const showForcesRef = useRef(showForces);
  showForcesRef.current = showForces;

  const forceVectorsGroupRef = useRef<THREE.Group | null>(null);
  const forceVectorInstancesRef = useRef<ForceVectorInstance[]>([]);
  const forceGeometriesRef = useRef<{
    cyl: THREE.CylinderGeometry;
    cone: THREE.ConeGeometry;
    sphere: THREE.SphereGeometry;
  } | null>(null);

  // Translucent X-Ray Radiographic Mode state & density
  const [isXRayMode, setIsXRayMode] = useState(false);
  const isXRayModeRef = useRef(isXRayMode);
  isXRayModeRef.current = isXRayMode;

  // Mouse / Touch Pan mode state (swaps Left-Click from Orbit/Rotate to Pan)
  const [isPanMode, setIsPanMode] = useState(false);
  const isPanModeRef = useRef(isPanMode);
  isPanModeRef.current = isPanMode;


  // Material references for zero-lag dynamic hot-swapping
  const solidBoneMatRef = useRef<THREE.MeshStandardMaterial | null>(null);
  const cancellousBoneMatRef = useRef<THREE.MeshStandardMaterial | null>(null);
  const invisibleMatRef = useRef<THREE.MeshBasicMaterial | null>(null);
  const xRayMatRef = useRef<THREE.ShaderMaterial | null>(null);

  // Collapsible clinical explanation pearl card state (starts compact / collapsed)
  const [isPearlExpanded, setIsPearlExpanded] = useState(false);

  // Subregion selection state (defaults to initialRegionId or first subregion)
  const [selectedSubregionId, setSelectedSubregionId] = useState<string>(() => {
    if (initialRegionId) {
      const match = availableSubregions.find(
        (s) =>
          s.id === initialRegionId ||
          (s.id === "ac-joint" && (initialRegionId === "ac-joint" || initialRegionId === "ac_joint")) ||
          (s.id === "distal" && (initialRegionId === "distal" || initialRegionId === "ankle" || initialRegionId === "distal-femur" || initialRegionId === "distal-humerus" || initialRegionId === "distal-clavicle")) ||
          (s.id === "proximal" && (initialRegionId === "proximal" || initialRegionId === "proximal-humerus")) ||
          (s.id === "shaft" && (initialRegionId === "shaft" || initialRegionId === "humeral-shaft" || initialRegionId === "femoral-shaft" || initialRegionId === "clavicle-shaft"))
      );
      if (match) return match.id;
    }
    return availableSubregions[0].id;
  });

  const activeSubregion = availableSubregions.find((s) => s.id === selectedSubregionId) ?? availableSubregions[0];

  // Classification Type selection state within active subregion ("intact" or preset.id)
  const [selectedPresetId, setSelectedPresetId] = useState<string>(() => {
    return activeSubregion.presets[0]?.id ?? "intact";
  });

  const selectedPresetIdRef = useRef(selectedPresetId);
  selectedPresetIdRef.current = selectedPresetId;

  const activePreset = activeSubregion.presets.find((p) => p.id === selectedPresetId);

  // Lauge-Hansen hierarchical mechanism group selection (null = show groups, "ser" | "sa" | "per" | "pa" = show stages)
  const isAnkleDistal = isTibia && activeSubregion.id === "distal";
  const [selectedMechanismGroup, setSelectedMechanismGroup] = useState<"ser" | "sa" | "per" | "pa" | null>(null);

  // Dynamic Clinical Ligament Disruption Status (Rockwood Classification)
  const isPresetIntact = selectedPresetId === "intact" || selectedPresetId === "ankle_intact";
  const isPresetType1 = selectedPresetId === "rockwood_type1";
  const isPresetType2 = selectedPresetId === "rockwood_type2";
  const isACTorn = !isPresetIntact && !isPresetType1;
  const isCCTorn = !isPresetIntact && !isPresetType1 && !isPresetType2;
  const isPerPreset = selectedPresetId.startsWith("lh_per_");
  const isPaPreset = selectedPresetId.startsWith("lh_pa_");
  const isSaPreset = selectedPresetId.startsWith("lh_sa_");

  // Structured bullet points for clinical description (strictly description, no physical exam or management)
  const pearlBullets = useMemo(() => {
    const raw = isPresetIntact
      ? (activePreset?.clinicalPearl || "Normal anatomical alignment with intact cortical continuity and no fracture line.")
      : (activePreset?.clinicalPearl || "");
    if (!raw) return [];
    return raw
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0)
      .map((line) => line.replace(/^[•\-\*]\s*/, ""));
  }, [isPresetIntact, activePreset]);

  // Reference for 3D ligament group and pre-allocated meshes
  const ligamentBundleRef = useRef<LigamentBundle | null>(null);
  const ankleLigamentBundleRef = useRef<AnkleLigamentBundle | null>(null);

  // Smooth Entry & Exit transition states
  const [isEntering, setIsEntering] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  // References for Three.js dynamic fragment control
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const modelWrapperRef = useRef<THREE.Group | null>(null);
  const proximalPivotGroupRef = useRef<THREE.Group | null>(null);
  const distalGroupRef = useRef<THREE.Group | null>(null);
  const gtPivotGroupRef = useRef<THREE.Group | null>(null);
  const ltPivotGroupRef = useRef<THREE.Group | null>(null);
  const shardPivotGroupRef = useRef<THREE.Group | null>(null);

  const proximalMeshRef = useRef<THREE.Mesh | null>(null);
  const distalMeshRef = useRef<THREE.Mesh | null>(null);
  const gtMeshRef = useRef<THREE.Mesh | null>(null);
  const ltMeshRef = useRef<THREE.Mesh | null>(null);
  const shardMeshRef = useRef<THREE.Mesh | null>(null);

  // Interactive 3D Structure Picking
  // 1. Hover: lightweight name pill near mouse cursor
  // 2. Click / Tap: full clinical detail card docked in top-left window
  const [hoveredStructure, setHoveredStructure] = useState<HoveredStructureInfo | null>(null);
  const [selectedStructure, setSelectedStructure] = useState<PickedStructureInfo | null>(null);
  const selectedStructureRef = useRef<PickedStructureInfo | null>(null);
  selectedStructureRef.current = selectedStructure;

  const boneVertexRangesRef = useRef<BoneVertexRange[]>([]);
  const activeForceConfigsRef = useRef<ForceVectorConfig[]>([]);
  const markerMeshRef = useRef<THREE.Mesh | null>(null);

  // Stored original vertex data for instant partition recalculation on subregion change
  const rawVerticesRef = useRef<THREE.Vector3[]>([]);
  const rawNormalsRef = useRef<THREE.Vector3[]>([]);
  const clavicleVertexCountRef = useRef<number>(0);
  const patellaVertexCountRef = useRef<number>(0);
  const tibiaVertexCountRef = useRef<number>(0);
  const fibulaVertexCountRef = useRef<number>(0);

  // Centroid base positions for multi-fragment comminution
  const gtBasePosRef = useRef(new THREE.Vector3(0, 0, 0));
  const ltBasePosRef = useRef(new THREE.Vector3(0, 0, 0));
  const shardBasePosRef = useRef(new THREE.Vector3(0, 0, 0));

  // Current animated target transforms
  const currentProximalRot = useRef(new THREE.Vector3(0, 0, 0));
  const currentProximalPos = useRef(new THREE.Vector3(0, 0, 0));
  const currentDistalRot = useRef(new THREE.Vector3(0, 0, 0));
  const currentDistalPos = useRef(new THREE.Vector3(0, 0, 0));
  const currentGtRot = useRef(new THREE.Vector3(0, 0, 0));
  const currentGtPos = useRef(new THREE.Vector3(0, 0, 0));
  const currentLtRot = useRef(new THREE.Vector3(0, 0, 0));
  const currentLtPos = useRef(new THREE.Vector3(0, 0, 0));
  const currentShardRot = useRef(new THREE.Vector3(0, 0, 0));
  const currentShardPos = useRef(new THREE.Vector3(0, 0, 0));

  // Ref tracking active subregion without triggering full scene re-instantiation
  const activeSubregionRef = useRef<SubregionConfig>(activeSubregion);
  activeSubregionRef.current = activeSubregion;

  // Ref tracking active preset for custom cut plane & transforms in animation loop
  const activePresetRef = useRef<ClassificationPreset | undefined>(activePreset);
  activePresetRef.current = activePreset;

  // Track active partition key to prevent redundant mesh re-slicing
  const currentPartitionKeyRef = useRef<string>("");

  // Whole Bone viewing mode state
  const [isWholeBoneView, setIsWholeBoneView] = useState(false);
  const isWholeBoneViewRef = useRef(isWholeBoneView);
  isWholeBoneViewRef.current = isWholeBoneView;

  // Radiographic Quick-Snap Views state
  const [activeSnapView, setActiveSnapView] = useState<string | null>("ap");
  const radiographicViews = useMemo(
    () => getRadiographicViews(isHumerus, isClavicle, isPatella, isTibia, selectedSubregionId),
    [isHumerus, isClavicle, isPatella, isTibia, selectedSubregionId]
  );
  const activeViewInfo = radiographicViews.find((v) => v.id === activeSnapView);

  // Current optical view offset (interpolated between whole bone 7% and focused subregion 22%)
  const currentYOffsetRef = useRef<number>(0);

  // Smooth camera zoom & centering transition state
  const cameraTransitionRef = useRef<{
    active: boolean;
    startTarget: THREE.Vector3;
    endTarget: THREE.Vector3;
    startCamPos: THREE.Vector3;
    endCamPos: THREE.Vector3;
    startOffsetY: number;
    endOffsetY: number;
    startTime: number;
    duration: number;
    isSpherical?: boolean;
    uStart?: THREE.Vector3;
    uEnd?: THREE.Vector3;
    rStart?: number;
    rEnd?: number;
    qRot?: THREE.Quaternion;
  } | null>(null);

  // Trigger camera focus & ~40% zoom directly on the targeted subregion (upper 3/4 screen)
  const triggerCameraFocus = useCallback((subregion: SubregionConfig, duration = 480) => {
    const controls = controlsRef.current;
    const camera = cameraRef.current;
    const container = containerRef.current;
    if (!controls || !camera || !container) return;

    setIsWholeBoneView(false);

    const targetVec = new THREE.Vector3(...subregion.cameraTarget);
    const currentCamPos = camera.position.clone();
    const currentTarget = controls.target.clone();

    const startOffsetVec = currentCamPos.clone().sub(currentTarget);
    const rStart = Math.max(0.001, startOffsetVec.length());
    const uStart = startOffsetVec.clone().normalize();

    const targetDist = subregion.cameraDistance ?? 3.0;

    let uEnd: THREE.Vector3;
    if (subregion.cameraDirection) {
      uEnd = new THREE.Vector3(...subregion.cameraDirection).normalize();
      if (subregion.id === "distal" && isTibia) {
        setActiveSnapView("ap");
      }
    } else {
      uEnd = uStart.clone();
    }

    const rEnd = targetDist;
    const targetCamPos = targetVec.clone().addScaledVector(uEnd, rEnd);
    const qRot = new THREE.Quaternion().setFromUnitVectors(uStart, uEnd);

    const h = container.clientHeight || window.innerHeight;
    const startOffset = currentYOffsetRef.current;
    const endOffset = Math.round(h * (subregion.viewOffsetRatio ?? 0.20));

    cameraTransitionRef.current = {
      active: true,
      startTarget: currentTarget,
      endTarget: targetVec,
      startCamPos: currentCamPos,
      endCamPos: targetCamPos,
      startOffsetY: startOffset,
      endOffsetY: endOffset,
      startTime: performance.now(),
      duration: duration,
      isSpherical: true,
      uStart: uStart,
      uEnd: uEnd,
      rStart: rStart,
      rEnd: rEnd,
      qRot: qRot,
    };
  }, [isTibia]);

  // Trigger viewing the entire femur bone (head down to distal condyles)
  const triggerWholeBoneFocus = useCallback((duration = 480) => {
    const controls = controlsRef.current;
    const camera = cameraRef.current;
    const container = containerRef.current;
    if (!controls || !camera || !container) return;

    setIsWholeBoneView(true);

    const targetVec = new THREE.Vector3(0, 0, 0);
    const currentCamPos = camera.position.clone();
    const currentTarget = controls.target.clone();

    // Preserve the user's current viewing orientation (angle/azimuth) relative to target
    const offset = currentCamPos.clone().sub(currentTarget);
    const currentDist = offset.length();
    const dir = currentDist > 0.001 ? offset.normalize() : new THREE.Vector3(0, 0, 1);

    const targetDist = isPatella ? 2.35 : (isClavicle ? 4.2 : (isHumerus ? 4.6 : (isTibia ? 5.2 : 5.3)));
    const targetCamPos = targetVec.clone().addScaledVector(dir, targetDist);

    const h = container.clientHeight || window.innerHeight;
    const startOffset = currentYOffsetRef.current;
    const endOffset = Math.round(h * 0.07);

    cameraTransitionRef.current = {
      active: true,
      startTarget: currentTarget,
      endTarget: targetVec,
      startCamPos: currentCamPos,
      endCamPos: targetCamPos,
      startOffsetY: startOffset,
      endOffsetY: endOffset,
      startTime: performance.now(),
      duration: duration,
    };
  }, [isHumerus, isClavicle, isPatella, isTibia]);

  // Trigger snapping camera to a standard radiographic projection (AP, Lat, Axillary, etc.)
  const triggerQuickSnap = useCallback(
    (view: RadiographicViewConfig, duration = 480) => {
      const controls = controlsRef.current;
      const camera = cameraRef.current;
      const container = containerRef.current;
      if (!controls || !camera || !container) return;

      setActiveSnapView(view.id);

      const targetVec = isWholeBoneView
        ? new THREE.Vector3(0, 0, 0)
        : new THREE.Vector3(...activeSubregion.cameraTarget);

      const currentCamPos = camera.position.clone();
      const currentTarget = controls.target.clone();

      const startOffsetVec = currentCamPos.clone().sub(currentTarget);
      const rStart = Math.max(0.001, startOffsetVec.length());
      const uStart = startOffsetVec.clone().normalize();

      const targetDist = isWholeBoneView
        ? (isPatella ? 2.35 : (isClavicle ? 4.2 : (isHumerus ? 4.6 : (isTibia ? 5.2 : 5.3))))
        : (activeSubregion.cameraDistance ?? 3.0);

      const uEnd = new THREE.Vector3(...view.direction).normalize();
      const rEnd = targetDist;
      const targetCamPos = targetVec.clone().addScaledVector(uEnd, rEnd);

      const qRot = new THREE.Quaternion().setFromUnitVectors(uStart, uEnd);

      const h = container.clientHeight || window.innerHeight;
      const startOffset = currentYOffsetRef.current;
      const endOffset = isWholeBoneView
        ? Math.round(h * 0.07)
        : Math.round(h * (activeSubregion.viewOffsetRatio ?? 0.20));

      cameraTransitionRef.current = {
        active: true,
        startTarget: currentTarget,
        endTarget: targetVec,
        startCamPos: currentCamPos,
        endCamPos: targetCamPos,
        startOffsetY: startOffset,
        endOffsetY: endOffset,
        startTime: performance.now(),
        duration: duration,
        isSpherical: true,
        uStart: uStart,
        uEnd: uEnd,
        rStart: rStart,
        rEnd: rEnd,
        qRot: qRot,
      };
    },
    [isWholeBoneView, activeSubregion, isPatella, isClavicle, isHumerus, isTibia]
  );

  // Handle clicking a subregion button: switch subregion and center/magnify it
  const handleSelectSubregion = useCallback((subregion: SubregionConfig) => {
    if (isWholeBoneView) {
      setIsWholeBoneView(false);
      if (selectedSubregionId === subregion.id) {
        triggerCameraFocus(subregion);
      } else {
        setSelectedSubregionId(subregion.id);
      }
    } else if (selectedSubregionId === subregion.id) {
      // Re-focus and zoom in (+40%) if user rotated/zoomed away
      triggerCameraFocus(subregion);
    } else {
      setSelectedSubregionId(subregion.id);
    }
  }, [isWholeBoneView, selectedSubregionId, triggerCameraFocus]);

  // Trigger entering animation after mount
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setIsEntering(false);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  // Smooth animated close handler
  const handleAnimatedClose = useCallback(() => {
    if (isClosing) return;
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 180);
  }, [isClosing, onClose]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleAnimatedClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleAnimatedClose]);

  // Helper to extract boundary loop caps for cross-sectional fracture surfaces (cancellous cut-face)
  const extractBoundaryCaps = useCallback((
    pos: number[],
    filterFn?: (p1: [number, number, number], p2: [number, number, number]) => boolean
  ): number[] => {
    if (!pos || pos.length < 9) return [];
    const edgeMap = new Map<string, { count: number; p1: [number, number, number]; p2: [number, number, number] }>();
    const quant = 100;
    const makeKey = (x1: number, y1: number, z1: number, x2: number, y2: number, z2: number) => {
      const k1 = `${Math.round(x1 * quant)},${Math.round(y1 * quant)},${Math.round(z1 * quant)}`;
      const k2 = `${Math.round(x2 * quant)},${Math.round(y2 * quant)},${Math.round(z2 * quant)}`;
      return k1 < k2 ? `${k1}_${k2}` : `${k2}_${k1}`;
    };

    for (let i = 0; i < pos.length; i += 9) {
      const v1: [number, number, number] = [pos[i], pos[i + 1], pos[i + 2]];
      const v2: [number, number, number] = [pos[i + 3], pos[i + 4], pos[i + 5]];
      const v3: [number, number, number] = [pos[i + 6], pos[i + 7], pos[i + 8]];

      const edges: [[number, number, number], [number, number, number]][] = [
        [v1, v2], [v2, v3], [v3, v1]
      ];
      for (const [e1, e2] of edges) {
        const key = makeKey(e1[0], e1[1], e1[2], e2[0], e2[1], e2[2]);
        const entry = edgeMap.get(key);
        if (!entry) edgeMap.set(key, { count: 1, p1: e1, p2: e2 });
        else entry.count++;
      }
    }

    const openEdges: { p1: [number, number, number]; p2: [number, number, number] }[] = [];
    for (const item of edgeMap.values()) {
      if (item.count === 1) {
        if (filterFn && !filterFn(item.p1, item.p2)) continue;
        openEdges.push(item);
      }
    }
    if (openEdges.length < 3) return [];

    const vKey = (p: [number, number, number]) => `${Math.round(p[0] * quant)},${Math.round(p[1] * quant)},${Math.round(p[2] * quant)}`;
    const visited = new Set<number>();
    const clusters: { p1: [number, number, number]; p2: [number, number, number] }[][] = [];

    for (let i = 0; i < openEdges.length; i++) {
      if (visited.has(i)) continue;
      const cluster = [openEdges[i]];
      visited.add(i);

      let changed = true;
      while (changed) {
        changed = false;
        const vKeys = new Set<string>();
        for (const e of cluster) {
          vKeys.add(vKey(e.p1));
          vKeys.add(vKey(e.p2));
        }

        for (let j = 0; j < openEdges.length; j++) {
          if (!visited.has(j)) {
            const candidate = openEdges[j];
            if (vKeys.has(vKey(candidate.p1)) || vKeys.has(vKey(candidate.p2))) {
              cluster.push(candidate);
              visited.add(j);
              changed = true;
            }
          }
        }
      }
      if (cluster.length >= 3) clusters.push(cluster);
    }

    const capPos: number[] = [];
    for (const cluster of clusters) {
      let cx = 0, cy = 0, cz = 0;
      for (const e of cluster) {
        cx += e.p1[0] + e.p2[0];
        cy += e.p1[1] + e.p2[1];
        cz += e.p1[2] + e.p2[2];
      }
      cx /= (cluster.length * 2);
      cy /= (cluster.length * 2);
      cz /= (cluster.length * 2);

      for (const e of cluster) {
        capPos.push(
          cx, cy, cz,
          e.p1[0], e.p1[1], e.p1[2],
          e.p2[0], e.p2[1], e.p2[2]
        );
      }
    }
    return capPos;
  }, []);

  // Helper to cleanly replace or clear a mesh inside a group
  const updateGroupMesh = useCallback((
    group: THREE.Group,
    meshRef: React.MutableRefObject<THREE.Mesh | null>,
    pos: number[],
    norm: number[],
    mat: THREE.Material,
    meshOffset: THREE.Vector3,
    capPos?: number[],
    capMat?: THREE.Material
  ) => {
    if (meshRef.current) {
      group.remove(meshRef.current);
      meshRef.current.geometry.dispose();
      meshRef.current = null;
    }
    if (!pos.length) return;

    if (capPos && capPos.length > 0 && capMat) {
      const geom = new THREE.BufferGeometry();
      const combinedPos = new Float32Array(pos.length + capPos.length);
      combinedPos.set(pos, 0);
      combinedPos.set(capPos, pos.length);
      geom.setAttribute("position", new THREE.BufferAttribute(combinedPos, 3));
      geom.addGroup(0, pos.length / 3, 0);
      geom.addGroup(pos.length / 3, capPos.length / 3, 1);
      geom.computeVertexNormals();

      const mesh = new THREE.Mesh(geom, [mat, capMat]);
      mesh.position.copy(meshOffset);
      group.add(mesh);
      meshRef.current = mesh;
    } else {
      const geom = new THREE.BufferGeometry();
      geom.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
      if (norm.length) geom.setAttribute("normal", new THREE.Float32BufferAttribute(norm, 3));
      geom.computeVertexNormals();

      const mesh = new THREE.Mesh(geom, mat);
      mesh.position.copy(meshOffset);
      group.add(mesh);
      meshRef.current = mesh;
    }
  }, []);

  // Function to partition the bone mesh dynamically based on active subregion/preset plane
  const partitionBoneMesh = useCallback((subregion: SubregionConfig, preset?: ClassificationPreset) => {
    const rawVerts = rawVerticesRef.current;
    const rawNorms = rawNormalsRef.current;
    const proximalPivotGroup = proximalPivotGroupRef.current;
    const distalGroup = distalGroupRef.current;
    const gtPivotGroup = gtPivotGroupRef.current;
    const ltPivotGroup = ltPivotGroupRef.current;
    const shardPivotGroup = shardPivotGroupRef.current;

    if (!rawVerts.length || !proximalPivotGroup || !distalGroup || !gtPivotGroup || !ltPivotGroup || !shardPivotGroup) return;

    const centerArr = preset?.cutCenter ?? subregion.cutCenter;
    const normalArr = preset?.cutNormal ?? subregion.cutNormal;
    const isDistalFemurOrHumerus = !isClavicle && !isPatella && !isTibia && (
      subregion.id === "distal" || subregion.id === "distal-femur" || subregion.id === "distal-humerus"
    );
    const effectiveMode = preset?.partitionMode ?? (
      isTibia
        ? (subregion.id === "distal" ? "ankle_intact" : "schatzker_1")
        : isPatella
        ? "patella_nondisplaced"
        : isClavicle
        ? (subregion.id === "shaft" || subregion.id === "distal" ? "clavicle_shaft_bipartite" : "ac_joint_rockwood")
        : isHumerus && isDistalFemurOrHumerus
        ? "humerus_distal_supracondylar"
        : isHumerus && subregion.id === "proximal"
        ? "neer_4part"
        : subregion.id === "intertrochanteric" && preset?.id !== "evans_reversed_oblique"
        ? "intertroch_comminuted"
        : isDistalFemurOrHumerus
        ? "distal_supracondylar"
        : "bipartite"
    );
    const partitionKey = `${centerArr.join(",")}_${normalArr.join(",")}_${effectiveMode}`;

    // Skip redundant partitioning if plane and mode have not changed
    if (currentPartitionKeyRef.current === partitionKey && proximalMeshRef.current && distalMeshRef.current) {
      return;
    }
    currentPartitionKeyRef.current = partitionKey;

    const cutCenter = new THREE.Vector3(...centerArr);
    const cutNormal = new THREE.Vector3(...normalArr).normalize();
    const plane = new THREE.Plane().setFromNormalAndCoplanarPoint(cutNormal, cutCenter);

    const activeMat = (isXRayModeRef.current && xRayMatRef.current)
      ? xRayMatRef.current
      : (solidBoneMatRef.current || new THREE.MeshStandardMaterial({
          color: 0xF7F4EC,
          roughness: 0.35,
          metalness: 0.04,
          side: THREE.DoubleSide,
        }));

    const hasNorms = rawNorms.length === rawVerts.length;

    const hnPos: number[] = [];
    const hnNorm: number[] = [];
    const gtPos: number[] = [];
    const gtNorm: number[] = [];
    const distPos: number[] = [];
    const distNorm: number[] = [];
    const ltPos: number[] = [];
    const ltNorm: number[] = [];
    const shardPos: number[] = [];
    const shardNorm: number[] = [];

    const pushTri = (targetP: number[], targetN: number[], i: number) => {
      targetP.push(
        rawVerts[i].x, rawVerts[i].y, rawVerts[i].z,
        rawVerts[i + 1].x, rawVerts[i + 1].y, rawVerts[i + 1].z,
        rawVerts[i + 2].x, rawVerts[i + 2].y, rawVerts[i + 2].z
      );
      if (hasNorms) {
        targetN.push(
          rawNorms[i].x, rawNorms[i].y, rawNorms[i].z,
          rawNorms[i + 1].x, rawNorms[i + 1].y, rawNorms[i + 1].z,
          rawNorms[i + 2].x, rawNorms[i + 2].y, rawNorms[i + 2].z
        );
      }
    };

    for (let i = 0; i < rawVerts.length; i += 3) {
      const vA = rawVerts[i];
      const vB = rawVerts[i + 1];
      const vC = rawVerts[i + 2];

      const centroid = new THREE.Vector3().add(vA).add(vB).add(vC).divideScalar(3);
      const isAbove = plane.distanceToPoint(centroid) > 0;

      if (isHumerus) {
        const isProx = centroid.y >= 95;
        const isLT = isProx && centroid.z > 6 && centroid.x < 34 && centroid.y <= 134;
        const isGT = isProx && !isLT && (centroid.x <= 24 || (centroid.y > 135 && centroid.x <= 26));

        if (effectiveMode === "neer_2part_gt") {
          if (isGT) pushTri(gtPos, gtNorm, i);
          else if (isProx) pushTri(hnPos, hnNorm, i);
          else pushTri(distPos, distNorm, i);
        } else if (effectiveMode === "neer_2part_sn") {
          if (isProx) pushTri(hnPos, hnNorm, i);
          else pushTri(distPos, distNorm, i);
        } else if (effectiveMode === "neer_3part_gt") {
          if (!isProx) pushTri(distPos, distNorm, i);
          else if (isGT) pushTri(gtPos, gtNorm, i);
          else pushTri(hnPos, hnNorm, i);
        } else if (effectiveMode === "neer_3part_lt") {
          if (!isProx) pushTri(distPos, distNorm, i);
          else if (isLT) pushTri(ltPos, ltNorm, i);
          else pushTri(hnPos, hnNorm, i);
        } else if (effectiveMode === "neer_4part") {
          if (!isProx) pushTri(distPos, distNorm, i);
          else if (isLT) pushTri(ltPos, ltNorm, i);
          else if (isGT) pushTri(gtPos, gtNorm, i);
          else pushTri(hnPos, hnNorm, i);
        } else if (effectiveMode === "humerus_distal_supracondylar") {
          if (centroid.y > -120) {
            pushTri(hnPos, hnNorm, i);
          } else {
            pushTri(distPos, distNorm, i);
          }
        } else if (effectiveMode === "humerus_distal_unicondylar_lat") {
          if (centroid.y <= -120 && centroid.x <= -18) {
            pushTri(shardPos, shardNorm, i);
          } else {
            pushTri(distPos, distNorm, i);
          }
        } else if (effectiveMode === "humerus_distal_coronal_shear") {
          if (centroid.y <= -120 && centroid.x <= -18 && centroid.z > -6) {
            pushTri(shardPos, shardNorm, i);
          } else {
            pushTri(distPos, distNorm, i);
          }
        } else if (effectiveMode === "humerus_distal_bicondylar") {
          if (centroid.y > -120) {
            pushTri(hnPos, hnNorm, i);
          } else if (centroid.x > -18) {
            pushTri(distPos, distNorm, i);
          } else {
            pushTri(shardPos, shardNorm, i);
          }
        } else {
          // humerus_shaft_bipartite or default bipartite cut
          if (isAbove) {
            pushTri(hnPos, hnNorm, i);
          } else {
            pushTri(distPos, distNorm, i);
          }
        }
      } else if (effectiveMode === "intertroch_comminuted") {
        // Evans 5-fragment intertrochanteric comminution
        if (isAbove) {
          if (centroid.x <= -32) {
            pushTri(gtPos, gtNorm, i);
          } else {
            pushTri(hnPos, hnNorm, i);
          }
        } else {
          if (centroid.x > -22 && centroid.x < 2 && centroid.y > 128 && centroid.y < 156 && centroid.z < -3) {
            pushTri(ltPos, ltNorm, i);
          } else if (centroid.x <= -28 && centroid.y > 140 && centroid.y < 182) {
            pushTri(shardPos, shardNorm, i);
          } else {
            pushTri(distPos, distNorm, i);
          }
        }
      } else if (effectiveMode === "subtroch_comminuted") {
        // Russell-Taylor Type IIB: 5-fragment subtrochanteric comminution
        const isLT = centroid.x > -22 && centroid.x < 2 && centroid.y > 128 && centroid.y < 156 && centroid.z < -3;
        if (isLT) {
          pushTri(ltPos, ltNorm, i);
        } else if (isAbove) {
          if (centroid.x <= -32) {
            pushTri(gtPos, gtNorm, i);
          } else {
            pushTri(hnPos, hnNorm, i);
          }
        } else {
          if (centroid.x <= -16 && centroid.y >= 92 && centroid.y <= 124) {
            pushTri(shardPos, shardNorm, i);
          } else {
            pushTri(distPos, distNorm, i);
          }
        }
      } else if (effectiveMode === "subtroch_lt") {
        // Russell-Taylor Type IB: Lesser trochanter avulsion
        const isLT = centroid.x > -22 && centroid.x < 2 && centroid.y > 128 && centroid.y < 156 && centroid.z < -3;
        if (isLT) {
          pushTri(ltPos, ltNorm, i);
        } else if (isAbove) {
          pushTri(hnPos, hnNorm, i);
        } else {
          pushTri(distPos, distNorm, i);
        }
      } else if (effectiveMode === "subtroch_fossa") {
        // Russell-Taylor Type IIA: Extension into Piriformis Fossa / GT split
        if (isAbove) {
          if (centroid.x <= -32) {
            pushTri(gtPos, gtNorm, i);
          } else {
            pushTri(hnPos, hnNorm, i);
          }
        } else {
          pushTri(distPos, distNorm, i);
        }
      } else if (effectiveMode === "shaft_butterfly_small") {
        // Winquist Type I: small lateral butterfly wedge
        if (centroid.x <= -14 && centroid.y >= -20 && centroid.y <= 0) {
          pushTri(shardPos, shardNorm, i);
        } else if (isAbove) {
          pushTri(hnPos, hnNorm, i);
        } else {
          pushTri(distPos, distNorm, i);
        }
      } else if (effectiveMode === "shaft_butterfly_med") {
        // Winquist Type II: moderate lateral butterfly wedge (up to 50% width)
        if (centroid.x <= -12 && centroid.y >= -25 && centroid.y <= 5) {
          pushTri(shardPos, shardNorm, i);
        } else if (isAbove) {
          pushTri(hnPos, hnNorm, i);
        } else {
          pushTri(distPos, distNorm, i);
        }
      } else if (effectiveMode === "shaft_butterfly_large") {
        // Winquist Type III: large butterfly fragment (>50% width)
        if ((centroid.x <= -10 || centroid.z >= 16) && centroid.y >= -28 && centroid.y <= 8) {
          pushTri(shardPos, shardNorm, i);
        } else if (isAbove) {
          pushTri(hnPos, hnNorm, i);
        } else {
          pushTri(distPos, distNorm, i);
        }
      } else if (effectiveMode === "shaft_segmental") {
        // Winquist Type IV: segmental intercalary cylinder (0% cortical contact)
        if (centroid.y >= -26 && centroid.y <= 6) {
          pushTri(shardPos, shardNorm, i);
        } else if (centroid.y > 6) {
          pushTri(hnPos, hnNorm, i);
        } else {
          pushTri(distPos, distNorm, i);
        }
      } else if (effectiveMode === "distal_supracondylar") {
        // AO 33-A: Supracondylar metaphysis fracture above condyles
        if (centroid.y > -170) {
          pushTri(hnPos, hnNorm, i);
        } else {
          pushTri(distPos, distNorm, i);
        }
      } else if (effectiveMode === "distal_unicondylar_lat") {
        // AO 33-B1: Unicondylar Sagittal Lateral Split
        if (centroid.y <= -170 && centroid.x <= 12) {
          pushTri(shardPos, shardNorm, i);
        } else {
          pushTri(distPos, distNorm, i);
        }
      } else if (effectiveMode === "distal_hoffa") {
        // AO 33-B3: Coronal Shear Hoffa Fracture of lateral condyle
        if (centroid.y <= -170 && centroid.x <= 12 && centroid.z <= -2) {
          pushTri(shardPos, shardNorm, i);
        } else {
          pushTri(distPos, distNorm, i);
        }
      } else if (effectiveMode === "distal_bicondylar") {
        // AO 33-C: Bicondylar complete articular T/Y split
        if (centroid.y > -170) {
          pushTri(hnPos, hnNorm, i);
        } else if (centroid.x > 12) {
          pushTri(distPos, distNorm, i);
        } else {
          pushTri(shardPos, shardNorm, i);
        }
      } else if (effectiveMode === "ac_joint_rockwood") {
        // Rockwood AC Joint injury: Clavicle (hnPos) vs Scapula (distPos)
        const clCount = clavicleVertexCountRef.current || 3438;
        if (i < clCount) {
          pushTri(hnPos, hnNorm, i);
        } else {
          pushTri(distPos, distNorm, i);
        }
      } else if (effectiveMode === "clavicle_shaft_butterfly") {
        // Clavicle Midshaft with Inferior Butterfly Wedge (Robinson 2B2) or Vertical Z-fragment
        const clCount = clavicleVertexCountRef.current || 3438;
        if (i >= clCount) {
          pushTri(distPos, distNorm, i);
        } else if (centroid.x >= 3.0 && centroid.x <= 17.0 && centroid.y <= 66.0) {
          pushTri(shardPos, shardNorm, i);
        } else if (centroid.x > 10.0) {
          pushTri(hnPos, hnNorm, i);
        } else {
          pushTri(distPos, distNorm, i);
        }
      } else if (effectiveMode === "clavicle_shaft_segmental") {
        // Clavicle Midshaft Segmental Diaphyseal Double Fracture (AO 15.2C)
        const clCount = clavicleVertexCountRef.current || 3438;
        if (i >= clCount) {
          pushTri(distPos, distNorm, i);
        } else if (centroid.x >= -2.0 && centroid.x <= 22.0) {
          pushTri(shardPos, shardNorm, i);
        } else if (centroid.x > 22.0) {
          pushTri(hnPos, hnNorm, i);
        } else {
          pushTri(distPos, distNorm, i);
        }
      } else if (effectiveMode === "clavicle_shaft_bipartite") {
        // Clavicle Shaft 2-Part Fracture (Midshaft Robinson 2A/2B1 or Medial Third Allman III)
        const clCount = clavicleVertexCountRef.current || 3438;
        const cutX = centerArr[0];
        if (i >= clCount) {
          pushTri(distPos, distNorm, i);
        } else if (centroid.x > cutX) {
          pushTri(hnPos, hnNorm, i);
        } else {
          pushTri(distPos, distNorm, i);
        }
      } else if (effectiveMode === "clavicle_distal_neer_v") {
        // Neer Type V: Comminuted 3-fragment with inferior CC avulsion shard
        const clCount = clavicleVertexCountRef.current || 3438;
        if (i >= clCount) {
          pushTri(distPos, distNorm, i);
        } else if (centroid.x >= -48.0 && centroid.x <= -33.0 && centroid.y <= 75.0) {
          pushTri(shardPos, shardNorm, i);
        } else if (centroid.x > -28.0) {
          pushTri(hnPos, hnNorm, i);
        } else {
          pushTri(distPos, distNorm, i);
        }
      } else if (effectiveMode === "patella_nondisplaced") {
        // Nondisplaced hairline fracture: hairline equatorial cut with 0 displacement
        const ptCount = patellaVertexCountRef.current || 10308;
        if (i >= ptCount) {
          pushTri(distPos, distNorm, i); // Stationary Femur & Tibia
        } else if (centroid.y > 9.7) {
          pushTri(hnPos, hnNorm, i);
        } else {
          pushTri(distPos, distNorm, i);
        }
      } else if (effectiveMode === "patella_transverse") {
        // Displaced Transverse: proximal body pulled proximally by quadriceps
        const ptCount = patellaVertexCountRef.current || 10308;
        if (i >= ptCount) {
          pushTri(distPos, distNorm, i);
        } else if (centroid.y > 9.7) {
          pushTri(hnPos, hnNorm, i);
        } else {
          pushTri(distPos, distNorm, i);
        }
      } else if (effectiveMode === "patella_pole") {
        // Inferior Pole Avulsion: main body retracted superiorly, small inferior pole fragment at tendon
        const ptCount = patellaVertexCountRef.current || 10308;
        if (i >= ptCount) {
          pushTri(distPos, distNorm, i);
        } else if (centroid.y > 0.0) {
          pushTri(hnPos, hnNorm, i);
        } else {
          pushTri(distPos, distNorm, i);
        }
      } else if (effectiveMode === "patella_vertical") {
        // Vertical / Sagittal Cut: medial fragment (hnPos) vs lateral fragment (distPos)
        const ptCount = patellaVertexCountRef.current || 10308;
        if (i >= ptCount) {
          pushTri(distPos, distNorm, i);
        } else if (centroid.x > -4.2) {
          pushTri(hnPos, hnNorm, i);
        } else {
          pushTri(distPos, distNorm, i);
        }
      } else if (effectiveMode === "patella_comminuted") {
        // Multifragmented Stellate: proximal, distal, and lateral/central comminuted shard
        const ptCount = patellaVertexCountRef.current || 10308;
        if (i >= ptCount) {
          pushTri(distPos, distNorm, i);
        } else if (centroid.y > 13.0) {
          pushTri(hnPos, hnNorm, i);
        } else if (centroid.x < -7.5 && centroid.y <= 13.0 && centroid.y >= -1.0) {
          pushTri(shardPos, shardNorm, i);
        } else {
          pushTri(distPos, distNorm, i);
        }
      } else if (effectiveMode === "patella_osteochondral") {
        // Osteochondral Shear: tangential facet shard displaced into joint
        const ptCount = patellaVertexCountRef.current || 10308;
        if (i >= ptCount) {
          pushTri(distPos, distNorm, i);
        } else if (centroid.z < 26.0 && centroid.x > -4.0 && centroid.y < 12.0) {
          pushTri(shardPos, shardNorm, i);
        } else {
          pushTri(hnPos, hnNorm, i);
        }
      } else if (effectiveMode === "schatzker_1") {
        // Schatzker I: Pure lateral plateau split wedge without central depression
        const tbCount = tibiaVertexCountRef.current || 5040;
        if (i >= tbCount) {
          pushTri(distPos, distNorm, i); // Fibula remains stationary with intact shaft
        } else if (centroid.y > 165.0 && centroid.x < -10.0) {
          pushTri(shardPos, shardNorm, i); // Lateral split wedge
        } else {
          pushTri(distPos, distNorm, i); // Intact medial plateau and shaft
        }
      } else if (effectiveMode === "schatzker_2") {
        // Schatzker II: Split-depression of lateral plateau
        const tbCount = tibiaVertexCountRef.current || 5040;
        if (i >= tbCount) {
          pushTri(distPos, distNorm, i);
        } else if (centroid.y > 165.0 && centroid.x < -18.0) {
          pushTri(shardPos, shardNorm, i); // Lateral split wedge displaced laterally
        } else if (centroid.y > 170.0 && centroid.x >= -18.0 && centroid.x <= -2.5) {
          pushTri(hnPos, hnNorm, i); // Depressed central articular facet sinking >15mm!
        } else {
          pushTri(distPos, distNorm, i); // Intact medial plateau & shaft
        }
      } else if (effectiveMode === "schatzker_3") {
        // Schatzker III: Pure central articular depression (intact peripheral lateral rim)
        const tbCount = tibiaVertexCountRef.current || 5040;
        if (i >= tbCount) {
          pushTri(distPos, distNorm, i);
        } else if (centroid.y > 172.0 && centroid.x >= -23.0 && centroid.x <= -2.5) {
          pushTri(hnPos, hnNorm, i); // Sunken central articular saucer deep crater
        } else {
          pushTri(distPos, distNorm, i); // Intact outer lateral cortical rim (X < -23), medial plateau, and shaft
        }
      } else if (effectiveMode === "schatzker_4") {
        // Schatzker IV: Medial plateau fracture-dislocation (high energy)
        const tbCount = tibiaVertexCountRef.current || 5040;
        if (i >= tbCount) {
          pushTri(distPos, distNorm, i);
        } else if (centroid.y > 162.0 && centroid.x > 2.0) {
          pushTri(hnPos, hnNorm, i); // Medial plateau condylar block
        } else {
          pushTri(distPos, distNorm, i); // Intact lateral plateau and shaft
        }
      } else if (effectiveMode === "schatzker_5") {
        // Schatzker V: Bicondylar plateau split with intact shaft spine
        const tbCount = tibiaVertexCountRef.current || 5040;
        if (i >= tbCount) {
          pushTri(distPos, distNorm, i);
        } else if (centroid.y > 165.0 && centroid.x > 4.0) {
          pushTri(hnPos, hnNorm, i); // Medial condyle
        } else if (centroid.y > 165.0 && centroid.x < -8.0) {
          pushTri(shardPos, shardNorm, i); // Lateral condyle
        } else {
          pushTri(distPos, distNorm, i); // Central intercondylar spine and diaphysis
        }
      } else if (effectiveMode === "schatzker_6") {
        // Schatzker VI: Metaphyseal-diaphyseal dissociation
        if (centroid.y > 155.0) {
          if (centroid.x >= 0.0) {
            pushTri(hnPos, hnNorm, i); // Medial articular plateau block
          } else {
            pushTri(shardPos, shardNorm, i); // Lateral articular plateau block
          }
        } else {
          pushTri(distPos, distNorm, i); // Dissociated lower leg shaft (tibia + fibula)
        }
      } else if (isTibia && subregion.id === "distal") {
        const tbCount = tibiaVertexCountRef.current || 5040;
        const fbCount = fibulaVertexCountRef.current || 3432;
        const fbEnd = tbCount + fbCount;
        const isTibiaBone = i < tbCount;
        const isFibula = i >= tbCount && i < fbEnd;
        const isFoot = i >= fbEnd;

        if (effectiveMode === "lh_ser_2") {
          // SER Stage II: Spiral fracture of lateral malleolus
          const isSerFib = isFibula && (centroid.y + 0.55 * centroid.z <= -152.5);
          if (isSerFib) {
            pushTri(shardPos, shardNorm, i);
          } else if (isFoot) {
            pushTri(hnPos, hnNorm, i);
          } else {
            pushTri(distPos, distNorm, i);
          }
        } else if (effectiveMode === "lh_ser_3") {
          // SER Stage III: SER II + Large Posterior Malleolus (Volkmann's fragment)
          const isSerFib = isFibula && (centroid.y + 0.55 * centroid.z <= -152.5);
          const isVolkmann = isTibiaBone && (centroid.x <= 14.0 && centroid.y <= -130.0 && (centroid.y + 1.5 * centroid.z <= -154.0));
          if (isSerFib) {
            pushTri(shardPos, shardNorm, i);
          } else if (isVolkmann) {
            pushTri(gtPos, gtNorm, i);
          } else if (isFoot) {
            pushTri(hnPos, hnNorm, i);
          } else {
            pushTri(distPos, distNorm, i);
          }
        } else if (effectiveMode === "lh_ser_4") {
          // SER Stage IV: Trimalleolar (Fibula spiral + Large Volkmann + Medial Malleolus transverse avulsion + Talar shift)
          const isSerFib = isFibula && (centroid.y + 0.55 * centroid.z <= -152.5);
          const isVolkmann = isTibiaBone && (centroid.x <= 14.0 && centroid.y <= -130.0 && (centroid.y + 1.5 * centroid.z <= -154.0));
          const isMedMal = isTibiaBone && (centroid.x >= 16.0 && centroid.y <= -149.0);
          if (isSerFib) {
            pushTri(shardPos, shardNorm, i);
          } else if (isVolkmann) {
            pushTri(gtPos, gtNorm, i);
          } else if (isMedMal) {
            pushTri(ltPos, ltNorm, i);
          } else if (isFoot) {
            pushTri(hnPos, hnNorm, i);
          } else {
            pushTri(distPos, distNorm, i);
          }
        } else if (effectiveMode === "lh_sa_1") {
          // SA Stage I: Transverse infrasyndesmotic fibula avulsion
          const isSaFib = isFibula && (centroid.y <= -156.0);
          if (isSaFib) {
            pushTri(shardPos, shardNorm, i);
          } else if (isFoot) {
            pushTri(hnPos, hnNorm, i);
          } else {
            pushTri(distPos, distNorm, i);
          }
        } else if (effectiveMode === "lh_sa_2") {
          // SA Stage II: SA I + Vertical shear fracture of medial malleolus
          const isSaFib = isFibula && (centroid.y <= -156.0);
          const isSaMedMal = isTibiaBone && (centroid.x >= 14.5 && centroid.y <= -136.0 && centroid.y <= -158.7 + (centroid.x - 14.5) * 15);
          if (isSaFib) {
            pushTri(shardPos, shardNorm, i);
          } else if (isSaMedMal) {
            pushTri(ltPos, ltNorm, i);
          } else if (isFoot) {
            pushTri(hnPos, hnNorm, i);
          } else {
            pushTri(distPos, distNorm, i);
          }
        } else if (effectiveMode === "lh_per_1" || effectiveMode === "lh_per_2") {
          // PER Stage I & II: Medial malleolus transverse avulsion (PER II adds AITFL rupture)
          const isMedMal = isTibiaBone && (centroid.x >= 16.0 && centroid.y <= -149.0);
          if (isMedMal) {
            pushTri(ltPos, ltNorm, i);
          } else if (isFoot) {
            pushTri(hnPos, hnNorm, i);
          } else {
            pushTri(distPos, distNorm, i);
          }
        } else if (effectiveMode === "lh_per_3") {
          // PER Stage III: Medial avulsion + High spiral suprasyndesmotic fibula fracture (Weber C)
          const isPerFib = isFibula && (centroid.y + 0.45 * centroid.z <= -124.0);
          const isMedMal = isTibiaBone && (centroid.x >= 16.0 && centroid.y <= -149.0);
          if (isPerFib) {
            pushTri(shardPos, shardNorm, i);
          } else if (isMedMal) {
            pushTri(ltPos, ltNorm, i);
          } else if (isFoot) {
            pushTri(hnPos, hnNorm, i);
          } else {
            pushTri(distPos, distNorm, i);
          }
        } else if (effectiveMode === "lh_per_4") {
          // PER Stage IV: Medial avulsion + High spiral fibula + Large Volkmann posterior malleolus + Talar shift
          const isPerFib = isFibula && (centroid.y + 0.45 * centroid.z <= -124.0);
          const isVolkmann = isTibiaBone && (centroid.x <= 14.0 && centroid.y <= -130.0 && (centroid.y + 1.5 * centroid.z <= -154.0));
          const isMedMal = isTibiaBone && (centroid.x >= 16.0 && centroid.y <= -149.0);
          if (isPerFib) {
            pushTri(shardPos, shardNorm, i);
          } else if (isVolkmann) {
            pushTri(gtPos, gtNorm, i);
          } else if (isMedMal) {
            pushTri(ltPos, ltNorm, i);
          } else if (isFoot) {
            pushTri(hnPos, hnNorm, i);
          } else {
            pushTri(distPos, distNorm, i);
          }
        } else if (effectiveMode === "lh_pa_1" || effectiveMode === "lh_pa_2") {
          // PA Stage I & II: Medial malleolus transverse avulsion (PA II adds syndesmotic failure)
          const isMedMal = isTibiaBone && (centroid.x >= 16.0 && centroid.y <= -149.0);
          if (isMedMal) {
            pushTri(ltPos, ltNorm, i);
          } else if (isFoot) {
            pushTri(hnPos, hnNorm, i);
          } else {
            pushTri(distPos, distNorm, i);
          }
        } else if (effectiveMode === "lh_pa_3") {
          // PA Stage III: Medial avulsion + High suprasyndesmotic fibula bending fracture (~5-7cm above joint) + Comminuted lateral butterfly shard + Talar valgus tilt
          const isPaButterfly = isFibula && (centroid.y >= -122.0 && centroid.y <= -96.0 && centroid.x <= -17.5);
          const isPaDistalFib = isFibula && (centroid.y <= -108.0) && !isPaButterfly;
          const isMedMal = isTibiaBone && (centroid.x >= 16.0 && centroid.y <= -149.0);
          if (isPaButterfly) {
            pushTri(gtPos, gtNorm, i);
          } else if (isPaDistalFib) {
            pushTri(shardPos, shardNorm, i);
          } else if (isMedMal) {
            pushTri(ltPos, ltNorm, i);
          } else if (isFoot) {
            pushTri(hnPos, hnNorm, i);
          } else {
            pushTri(distPos, distNorm, i);
          }
        } else {
          // ankle_intact or lh_ser_1 (bones intact)
          if (isFoot) {
            pushTri(hnPos, hnNorm, i);
          } else {
            pushTri(distPos, distNorm, i);
          }
        }
      } else {
        // Bipartite mode (Femoral neck, Evans V, Type IA, AFF, Shaft Type 0)
        if (isAbove) {
          pushTri(hnPos, hnNorm, i);
        } else {
          pushTri(distPos, distNorm, i);
        }
      }
    }

    // Baseline distal offset
    const distBase = isDistalFemurOrHumerus
      ? (isHumerus ? new THREE.Vector3(-23.3, -120.0, -11.8) : new THREE.Vector3(10, -170, 0))
      : new THREE.Vector3(0, 0, 0);

    // Dynamic cancellous cut-face caps for fracture cross-sections across all bones and classifications
    const isIntact = !preset || preset.id === "intact" || preset.id === "ankle_intact" || preset.partitionMode === "ankle_intact";
    const capMat = isXRayModeRef.current
      ? (invisibleMatRef.current || new THREE.MeshBasicMaterial({ visible: false }))
      : (cancellousBoneMatRef.current || activeMat);

    const patellaFilter = isPatella
      ? (p1: [number, number, number], p2: [number, number, number]) => Math.abs(p1[1]) < 60 && Math.abs(p2[1]) < 60
      : undefined;

    const hnCap = !isIntact ? extractBoundaryCaps(hnPos, patellaFilter) : undefined;
    const gtCap = !isIntact ? extractBoundaryCaps(gtPos, patellaFilter) : undefined;
    const distCap = !isIntact ? extractBoundaryCaps(distPos, patellaFilter) : undefined;
    const ltCap = !isIntact ? extractBoundaryCaps(ltPos, patellaFilter) : undefined;
    const shardCap = !isIntact ? extractBoundaryCaps(shardPos, patellaFilter) : undefined;

    // 1. Proximal Fragment (Head & Neck or Talus/Hindfoot in Ankle)
    const isClavicleSCFulcrum = isClavicle && (
      effectiveMode.startsWith("clavicle_shaft") ||
      effectiveMode.startsWith("clavicle_distal") ||
      subregion.id === "shaft" ||
      subregion.id === "distal"
    );
    const proxPivotCenter = isClavicleSCFulcrum
      ? new THREE.Vector3(70.0, 50.0, 60.0)
      : cutCenter;
    proximalPivotGroup.position.copy(proxPivotCenter);
    updateGroupMesh(proximalPivotGroup, proximalMeshRef, hnPos, hnNorm, activeMat, proxPivotCenter.clone().negate(), hnCap, capMat);

    // 2. Greater Trochanter / Fossa / Volkmann Posterior Malleolus / PA III Butterfly Shard
    const gtCentroid = (isTibia && subregion.id === "distal")
      ? (effectiveMode === "lh_pa_3"
          ? new THREE.Vector3(-22.05, -109.25, -8.62)
          : new THREE.Vector3(-1.01, -145.41, -15.09))
      : isHumerus
      ? new THREE.Vector3(11.16, 136.28, -1.11)
      : new THREE.Vector3(-43.3, 194.6, -7.4);

    if (isTibia && subregion.id === "distal") {
      gtBasePosRef.current.copy(gtCentroid.clone().sub(distBase));
    } else {
      gtBasePosRef.current.copy(gtCentroid.clone().sub(cutCenter));
    }
    gtPivotGroup.position.copy(gtBasePosRef.current);
    updateGroupMesh(gtPivotGroup, gtMeshRef, gtPos, gtNorm, activeMat, gtCentroid.clone().negate(), gtCap, capMat);

    // 3. Main Shaft / Plafond Block
    distalGroup.position.copy(distBase);
    updateGroupMesh(distalGroup, distalMeshRef, distPos, distNorm, activeMat, distBase.clone().negate(), distCap, capMat);

    // 4. Lesser Trochanter / Tuberosity / Medial Malleolus Fragment
    let ltCentroid: THREE.Vector3;
    if (isTibia && subregion.id === "distal") {
      ltCentroid = effectiveMode === "lh_sa_2"
        ? new THREE.Vector3(24.09, -150.30, 6.62)
        : new THREE.Vector3(23.88, -153.32, 7.23);
    } else if (isHumerus) {
      ltCentroid = new THREE.Vector3(20.09, 124.84, 17.14);
    } else {
      ltCentroid = new THREE.Vector3(-7.4, 138.9, -16.1);
    }
    if (isHumerus) {
      ltBasePosRef.current.copy(ltCentroid.clone().sub(cutCenter));
    } else {
      ltBasePosRef.current.copy(ltCentroid.clone().sub(distBase));
    }
    ltPivotGroup.position.copy(ltBasePosRef.current);
    updateGroupMesh(ltPivotGroup, ltMeshRef, ltPos, ltNorm, activeMat, ltCentroid.clone().negate(), ltCap, capMat);

    // 5. Lateral Wall Butterfly Shard / Lateral Malleolus Fragment
    let shardCentroid: THREE.Vector3;
    if (isTibia && subregion.id === "distal") {
      if (effectiveMode === "lh_per_3" || effectiveMode === "lh_per_4") {
        shardCentroid = new THREE.Vector3(-18.50, -148.00, -12.50);
      } else if (effectiveMode === "lh_pa_3") {
        shardCentroid = new THREE.Vector3(-16.83, -158.09, -13.31);
      } else if (effectiveMode === "lh_sa_1" || effectiveMode === "lh_sa_2") {
        shardCentroid = new THREE.Vector3(-17.68, -168.12, -14.24);
      } else {
        shardCentroid = new THREE.Vector3(-16.91, -165.43, -14.17);
      }
    } else if (effectiveMode === "clavicle_distal_neer_v") {
      shardCentroid = new THREE.Vector3(-42.1, 73.8, -13.5);
    } else if (effectiveMode === "clavicle_shaft_segmental") {
      shardCentroid = new THREE.Vector3(8.07, 65.78, 36.58);
    } else if (effectiveMode === "clavicle_shaft_butterfly") {
      shardCentroid = new THREE.Vector3(9.42, 62.19, 42.41);
    } else if (effectiveMode === "distal_hoffa") {
      shardCentroid = new THREE.Vector3(-7.3, -208.3, -14.9);
    } else if (effectiveMode === "humerus_distal_coronal_shear") {
      shardCentroid = new THREE.Vector3(-33.74, -134.73, -1.82);
    } else if (effectiveMode === "humerus_distal_unicondylar_lat" || effectiveMode === "humerus_distal_bicondylar") {
      shardCentroid = new THREE.Vector3(-34.15, -133.71, -8.18);
    } else if (effectiveMode === "distal_unicondylar_lat" || effectiveMode === "distal_bicondylar") {
      shardCentroid = new THREE.Vector3(-7.0, -209.1, -5.1);
    } else if (effectiveMode === "shaft_segmental") {
      shardCentroid = new THREE.Vector3(-7.5, -6.6, 12.1);
    } else if (effectiveMode.startsWith("schatzker")) {
      shardCentroid = new THREE.Vector3(-18.0, 185.0, -4.8);
    } else if (effectiveMode.startsWith("shaft_butterfly")) {
      shardCentroid = new THREE.Vector3(-18.5, -5.4, 13.4);
    } else if (effectiveMode === "subtroch_comminuted") {
      shardCentroid = new THREE.Vector3(-30.1, 106.6, -2.4);
    } else {
      shardCentroid = new THREE.Vector3(-46.1, 164.0, -10.3);
    }
    shardBasePosRef.current.copy(shardCentroid.clone().sub(distBase));
    shardPivotGroup.position.copy(shardBasePosRef.current);
    updateGroupMesh(shardPivotGroup, shardMeshRef, shardPos, shardNorm, activeMat, shardCentroid.clone().negate(), shardCap, capMat);
  }, [updateGroupMesh, extractBoundaryCaps, isHumerus, isClavicle, isPatella, isTibia]);

  // When subregion changes, re-partition bone, reset preset, and glide camera to focused subregion (+40% zoom)
  useEffect(() => {
    const firstPreset = activeSubregion.presets[0];
    setSelectedPresetId(firstPreset?.id ?? "intact");
    setSelectedMechanismGroup(null);
    setIsPearlExpanded(false);
    setSelectedStructure(null);
    setHoveredStructure(null);
    if (markerMeshRef.current) markerMeshRef.current.visible = false;
    partitionBoneMesh(activeSubregion, firstPreset);
    triggerCameraFocus(activeSubregion);
  }, [selectedSubregionId, activeSubregion, partitionBoneMesh, triggerCameraFocus]);

  // Update target displacement/angulation and partition plane when preset changes
  useEffect(() => {
    setSelectedStructure(null);
    setHoveredStructure(null);
    if (markerMeshRef.current) markerMeshRef.current.visible = false;
    if (selectedPresetId === "intact" || !activePreset) {
      partitionBoneMesh(activeSubregion);
      currentProximalRot.current.set(0, 0, 0);
      currentProximalPos.current.set(0, 0, 0);
      currentDistalRot.current.set(0, 0, 0);
      currentDistalPos.current.set(0, 0, 0);
      currentGtRot.current.set(0, 0, 0);
      currentGtPos.current.set(0, 0, 0);
      currentLtRot.current.set(0, 0, 0);
      currentLtPos.current.set(0, 0, 0);
      currentShardRot.current.set(0, 0, 0);
      currentShardPos.current.set(0, 0, 0);
    } else {
      partitionBoneMesh(activeSubregion, activePreset);
      currentProximalRot.current.set(activePreset.proximalRot[0], activePreset.proximalRot[1], activePreset.proximalRot[2]);
      currentProximalPos.current.set(activePreset.proximalPosOffset[0], activePreset.proximalPosOffset[1], activePreset.proximalPosOffset[2]);
      currentDistalRot.current.set(activePreset.distalRot[0], activePreset.distalRot[1], activePreset.distalRot[2]);
      currentDistalPos.current.set(activePreset.distalPosOffset[0], activePreset.distalPosOffset[1], activePreset.distalPosOffset[2]);

      const gtRot = activePreset.gtRot ?? [0, 0, 0];
      const gtPos = activePreset.gtPosOffset ?? [0, 0, 0];
      currentGtRot.current.set(gtRot[0], gtRot[1], gtRot[2]);
      currentGtPos.current.set(gtPos[0], gtPos[1], gtPos[2]);

      const ltRot = activePreset.ltRot ?? [0, 0, 0];
      const ltPos = activePreset.ltPosOffset ?? [0, 0, 0];
      currentLtRot.current.set(ltRot[0], ltRot[1], ltRot[2]);
      currentLtPos.current.set(ltPos[0], ltPos[1], ltPos[2]);

      const shardRot = activePreset.shardRot ?? [0, 0, 0];
      const shardPos = activePreset.shardPosOffset ?? [0, 0, 0];
      currentShardRot.current.set(shardRot[0], shardRot[1], shardRot[2]);
      currentShardPos.current.set(shardPos[0], shardPos[1], shardPos[2]);
    }
  }, [selectedPresetId, activePreset, activeSubregion, partitionBoneMesh]);

  // Dynamic Material Hot-Swap on X-Ray mode toggle (0ms instant GPU switch)
  useEffect(() => {
    const activeMat = isXRayMode ? xRayMatRef.current : solidBoneMatRef.current;
    if (!activeMat) return;

    const boneMeshes = [
      proximalMeshRef.current,
      distalMeshRef.current,
      gtMeshRef.current,
      ltMeshRef.current,
      shardMeshRef.current,
    ];
    boneMeshes.forEach((mesh) => {
      if (mesh) {
        if (Array.isArray(mesh.material)) {
          mesh.material = [
            activeMat,
            isXRayMode
              ? (invisibleMatRef.current || new THREE.MeshBasicMaterial({ visible: false }))
              : (cancellousBoneMatRef.current || activeMat)
          ];
        } else {
          mesh.material = activeMat;
        }
      }
    });

    // Clavicle & Ankle ligaments: completely hidden in X-ray mode to simulate radiolucent soft tissue
    if (ligamentBundleRef.current) {
      ligamentBundleRef.current.group.visible = !isXRayMode && showLigamentsRef.current;
    }
    if (ankleLigamentBundleRef.current) {
      const isDistalAnkle = isTibia && activeSubregionRef.current?.id === "distal";
      ankleLigamentBundleRef.current.group.visible = !isXRayMode && isDistalAnkle && showLigamentsRef.current;
    }
  }, [isXRayMode, isTibia]);


  // Factory to create a 3D force vector mesh instance (shaft + head cone + anchor sphere + label sprite)
  const createForceVectorInstance = useCallback((cfg: ForceVectorConfig): ForceVectorInstance | null => {
    const geoms = forceGeometriesRef.current;
    if (!geoms) return null;

    const group = new THREE.Group();
    group.name = `force_${cfg.id}`;

    const material = new THREE.MeshStandardMaterial({
      color: 0x94A3B8,
      roughness: 0.35,
      metalness: 0.15,
      transparent: true,
      opacity: 0.58,
      depthWrite: false,
      emissive: 0x475569,
      emissiveIntensity: 0.20,
    });

    const anchor = new THREE.Mesh(geoms.sphere, material);
    const shaft = new THREE.Mesh(geoms.cyl, material);
    const head = new THREE.Mesh(geoms.cone, material);

    group.add(anchor);
    group.add(shaft);
    group.add(head);

    const { sprite, texture } = createForceLabelSprite(cfg.shortName, cfg.action, cfg.color);
    group.add(sprite);

    return {
      config: cfg,
      group,
      shaft,
      head,
      anchor,
      sprite,
      material,
      texture,
    };
  }, []);

  // Synchronize active force vector meshes to current subregion and classification preset
  const updateActiveForceVectors = useCallback((subId: string, presetId: string) => {
    const group = forceVectorsGroupRef.current;
    if (!group) return;

    // Dispose old instances
    forceVectorInstancesRef.current.forEach((inst) => {
      group.remove(inst.group);
      inst.texture.dispose();
      inst.material.dispose();
      (inst.sprite.material as THREE.Material).dispose();
    });
    forceVectorInstancesRef.current = [];

    // On intact bone, no deforming displacement forces to show
    if (presetId === "intact" || presetId === "ankle_intact") {
      activeForceConfigsRef.current = [];
      return;
    }

    const configs = getForceVectorsForSubregion(subId, isClavicle, isHumerus, isPatella, isTibia, presetId);
    activeForceConfigsRef.current = configs || [];
    if (!configs || configs.length === 0) return;

    const newInstances: ForceVectorInstance[] = [];
    configs.forEach((cfg) => {
      const inst = createForceVectorInstance(cfg);
      if (inst) {
        group.add(inst.group);
        newInstances.push(inst);
      }
    });
    forceVectorInstancesRef.current = newInstances;
  }, [isClavicle, isHumerus, isPatella, isTibia, createForceVectorInstance]);

  // Synchronize force vectors whenever subregion or preset changes
  useEffect(() => {
    updateActiveForceVectors(selectedSubregionId, selectedPresetId);
  }, [selectedSubregionId, selectedPresetId, updateActiveForceVectors]);

  // Synchronize OrbitControls pan / rotate mouse & touch mode
  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.mouseButtons = {
        LEFT: isPanMode ? THREE.MOUSE.PAN : THREE.MOUSE.ROTATE,
        MIDDLE: THREE.MOUSE.DOLLY,
        RIGHT: isPanMode ? THREE.MOUSE.ROTATE : THREE.MOUSE.PAN,
      };
      controlsRef.current.touches = {
        ONE: isPanMode ? THREE.TOUCH.PAN : THREE.TOUCH.ROTATE,
        TWO: THREE.TOUCH.DOLLY_PAN,
      };
    }
  }, [isPanMode]);

  // Spacebar quick-pan: holding space temporarily switches left-click to pan
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (
        e.code === "Space" &&
        !e.repeat &&
        !(e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement)
      ) {
        if (controlsRef.current) {
          controlsRef.current.mouseButtons.LEFT = THREE.MOUSE.PAN;
        }
      }
    };
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        if (controlsRef.current) {
          controlsRef.current.mouseButtons.LEFT = isPanModeRef.current
            ? THREE.MOUSE.PAN
            : THREE.MOUSE.ROTATE;
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene setup with transparent background
    const scene = new THREE.Scene();
    scene.background = null;

    // 2. Camera setup
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    // Offset view upwards dynamically per subregion so bone floats gracefully above bottom control deck
    const initRatio = activeSubregionRef.current?.viewOffsetRatio ?? 0.20;
    const yOffset = Math.round(height * initRatio);
    camera.setViewOffset(width, height, 0, yOffset, width, height);
    currentYOffsetRef.current = yOffset;

    const initDir = activeSubregionRef.current?.cameraDirection
      ? new THREE.Vector3(...activeSubregionRef.current.cameraDirection).normalize()
      : new THREE.Vector3(0, 0, 1);
    const initDist = activeSubregionRef.current?.cameraDistance ?? 4.3;
    const initTarget = new THREE.Vector3(...(activeSubregionRef.current?.cameraTarget ?? [0, 0, 0]));
    camera.position.copy(initTarget).addScaledVector(initDir, initDist);
    cameraRef.current = camera;

    // 3. WebGL Renderer with alpha: true
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // 4. Silky-smooth Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.055;
    controls.rotateSpeed = 0.85;
    controls.zoomSpeed = 1.0;
    controls.minDistance = 1.5;
    controls.maxDistance = 8.5;
    controls.enablePan = true;
    controls.screenSpacePanning = true;
    controls.panSpeed = 1.0;
    controls.mouseButtons = {
      LEFT: isPanModeRef.current ? THREE.MOUSE.PAN : THREE.MOUSE.ROTATE,
      MIDDLE: THREE.MOUSE.DOLLY,
      RIGHT: isPanModeRef.current ? THREE.MOUSE.ROTATE : THREE.MOUSE.PAN,
    };
    controls.touches = {
      ONE: isPanModeRef.current ? THREE.TOUCH.PAN : THREE.TOUCH.ROTATE,
      TWO: THREE.TOUCH.DOLLY_PAN,
    };
    controlsRef.current = controls;

    // Prevent default context menu so right-click drag pan works seamlessly
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    renderer.domElement.addEventListener("contextmenu", handleContextMenu);

    // 5. Precision 3D Anatomical Locator Reticle
    const markerGeom = new THREE.RingGeometry(0.015, 0.026, 32);
    const markerMat = new THREE.MeshBasicMaterial({
      color: 0x2dd4bf,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.95,
      depthTest: false,
    });
    const markerMesh = new THREE.Mesh(markerGeom, markerMat);
    markerMesh.renderOrder = 999;
    markerMesh.visible = false;

    const dotGeom = new THREE.CircleGeometry(0.007, 16);
    const dotMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.95,
      depthTest: false,
    });
    const dotMesh = new THREE.Mesh(dotGeom, dotMat);
    dotMesh.renderOrder = 1000;
    markerMesh.add(dotMesh);

    scene.add(markerMesh);
    markerMeshRef.current = markerMesh;

    // Interactive Raycasting for Hover (mouse) & Tap (mobile) structure inspection
    const raycaster = new THREE.Raycaster();
    const mouseNDC = new THREE.Vector2();
    let isOrbiting = false;
    let pointerDownPos: { x: number; y: number; time: number } | null = null;

    controls.addEventListener("start", () => {
      isOrbiting = true;
      if (cameraTransitionRef.current) {
        cameraTransitionRef.current.active = false;
      }
      setActiveSnapView(null);
      // Dismiss hover chip during orbit/pan to ensure completely unobstructed view
      setHoveredStructure(null);
    });

    controls.addEventListener("end", () => {
      isOrbiting = false;
    });

    const runRaycast = (clientX: number, clientY: number, isTap: boolean) => {
      if (!container || !cameraRef.current) return;
      const rect = container.getBoundingClientRect();
      mouseNDC.x = ((clientX - rect.left) / rect.width) * 2 - 1;
      mouseNDC.y = -((clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouseNDC, cameraRef.current);
      const candidates: THREE.Object3D[] = [];
      if (proximalMeshRef.current) candidates.push(proximalMeshRef.current);
      if (distalMeshRef.current) candidates.push(distalMeshRef.current);
      if (gtMeshRef.current) candidates.push(gtMeshRef.current);
      if (ltMeshRef.current) candidates.push(ltMeshRef.current);
      if (shardMeshRef.current) candidates.push(shardMeshRef.current);
      if (!isXRayModeRef.current && ankleLigamentBundleRef.current?.group && ankleLigamentBundleRef.current.group.visible) {
        candidates.push(ankleLigamentBundleRef.current.group);
      }
      if (!isXRayModeRef.current && ligamentBundleRef.current?.group && ligamentBundleRef.current.group.visible) {
        candidates.push(ligamentBundleRef.current.group);
      }
      if (forceVectorsGroupRef.current) candidates.push(forceVectorsGroupRef.current);

      const intersects = raycaster.intersectObjects(candidates, true);
      if (intersects.length > 0) {
        const hit = intersects[0];
        const info = resolvePickedStructure(
          hit,
          activeSubregionRef.current,
          activePresetRef.current,
          boneVertexRangesRef.current,
          isTibia,
          isHumerus,
          isClavicle,
          isPatella,
          proximalMeshRef.current,
          distalMeshRef.current,
          gtMeshRef.current,
          ltMeshRef.current,
          shardMeshRef.current,
          activeForceConfigsRef.current
        );

        if (info) {
          const screenPoint = hit.point.clone().project(cameraRef.current);
          const screenX = ((screenPoint.x + 1) / 2) * rect.width;
          const screenY = ((-screenPoint.y + 1) / 2) * rect.height;

          if (isTap) {
            // Click / Mobile Tap: Pin full detailed clinical card in top-left panel + position 3D reticle
            if (markerMeshRef.current) {
              markerMeshRef.current.position.copy(hit.point);
              markerMeshRef.current.quaternion.copy(cameraRef.current.quaternion);
              const dist = cameraRef.current.position.distanceTo(hit.point);
              markerMeshRef.current.scale.setScalar(dist * 0.35);

              if (info.badgeColor === "rose") {
                markerMat.color.setHex(0xf43f5e);
              } else if (info.badgeColor === "amber") {
                markerMat.color.setHex(0xfbbf24);
              } else if (info.badgeColor === "cyan") {
                markerMat.color.setHex(0x38bdf8);
              } else if (info.badgeColor === "indigo") {
                markerMat.color.setHex(0x818cf8);
              } else {
                markerMat.color.setHex(0x2dd4bf);
              }
              markerMeshRef.current.visible = true;
            }

            setSelectedStructure({
              ...info,
              screenX,
              screenY,
              isPinned: true,
            });
            setHoveredStructure(null);
          } else {
            // Hover: Show ONLY the anatomical name pill following cursor
            setHoveredStructure({
              titleEn: info.titleEn,
              category: info.category,
              badgeColor: info.badgeColor,
              screenX: clientX - rect.left,
              screenY: clientY - rect.top,
            });
          }
          return;
        }
      }

      // No intersection hit
      if (isTap) {
        setSelectedStructure(null);
        if (markerMeshRef.current) markerMeshRef.current.visible = false;
      } else {
        setHoveredStructure(null);
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (e.buttons > 0 || isOrbiting) return;
      runRaycast(e.clientX, e.clientY, false);
    };

    const handlePointerLeave = () => {
      setHoveredStructure(null);
    };

    const handlePointerDown = (e: PointerEvent) => {
      pointerDownPos = { x: e.clientX, y: e.clientY, time: performance.now() };
    };

    const handlePointerUp = (e: PointerEvent) => {
      if (!pointerDownPos) return;
      const dx = Math.abs(e.clientX - pointerDownPos.x);
      const dy = Math.abs(e.clientY - pointerDownPos.y);
      const dt = performance.now() - pointerDownPos.time;
      pointerDownPos = null;
      if (dx < 8 && dy < 8 && dt < 450) {
        runRaycast(e.clientX, e.clientY, true);
      }
    };

    renderer.domElement.addEventListener("pointermove", handlePointerMove);
    renderer.domElement.addEventListener("pointerleave", handlePointerLeave);
    renderer.domElement.addEventListener("pointerdown", handlePointerDown);
    renderer.domElement.addEventListener("pointerup", handlePointerUp);

    // 5. Realistic 3-point clinical lighting
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.85);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xFFFFFF, 1.3);
    keyLight.position.set(4, 9, 6);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xA5F3FC, 0.45);
    fillLight.position.set(-5, -2, 4);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0x2DD4BF, 0.35);
    rimLight.position.set(0, -6, -5);
    scene.add(rimLight);

    // Pre-allocate materials for zero-lag dynamic hot-swapping
    const solidBoneMat = new THREE.MeshStandardMaterial({
      color: 0xF7F4EC,
      roughness: 0.35,
      metalness: 0.04,
      side: THREE.DoubleSide,
    });
    solidBoneMatRef.current = solidBoneMat;

    const cancellousBoneMat = new THREE.MeshStandardMaterial({
      color: 0x8C7A73, // Organic grayish-flesh / cancellous bone marrow tone
      roughness: 0.88,
      metalness: 0.02,
      side: THREE.DoubleSide,
    });
    cancellousBoneMatRef.current = cancellousBoneMat;

    const invisibleMat = new THREE.MeshBasicMaterial({ visible: false });
    invisibleMatRef.current = invisibleMat;

    const xRayMat = createXRayMaterial(0.70);
    xRayMatRef.current = xRayMat;

    // 6. Model Pivot Wrapper
    let animationFrameId: number;

    const modelWrapper = new THREE.Group();
    scene.add(modelWrapper);
    modelWrapperRef.current = modelWrapper;

    const distalGroup = new THREE.Group();
    modelWrapper.add(distalGroup);
    distalGroupRef.current = distalGroup;

    const proximalPivotGroup = new THREE.Group();
    modelWrapper.add(proximalPivotGroup);
    proximalPivotGroupRef.current = proximalPivotGroup;

    const gtPivotGroup = new THREE.Group();
    if (isTibia) {
      distalGroup.add(gtPivotGroup);
    } else {
      proximalPivotGroup.add(gtPivotGroup);
    }
    gtPivotGroupRef.current = gtPivotGroup;

    const ltPivotGroup = new THREE.Group();
    if (isHumerus) {
      proximalPivotGroup.add(ltPivotGroup);
    } else {
      distalGroup.add(ltPivotGroup);
    }
    ltPivotGroupRef.current = ltPivotGroup;

    const shardPivotGroup = new THREE.Group();
    distalGroup.add(shardPivotGroup);
    shardPivotGroupRef.current = shardPivotGroup;

    // Anatomical Ligament Bundle Setup (Acromioclavicular & Coracoclavicular System)
    const cylGeom = new THREE.CylinderGeometry(1, 1, 1, 16);
    const coneGeom = new THREE.ConeGeometry(1, 1, 16);

    const ligamentMat = new THREE.MeshStandardMaterial({
      color: 0xF1F5F9,
      roughness: 0.38,
      metalness: 0.06,
      side: THREE.DoubleSide,
    });

    const rupturedTipMat = new THREE.MeshStandardMaterial({
      color: 0xDC2626,
      roughness: 0.45,
      metalness: 0.08,
      emissive: 0x991B1B,
      emissiveIntensity: 0.35,
      side: THREE.DoubleSide,
    });

    const ligamentGroup = new THREE.Group();
    ligamentGroup.name = "ligamentGroup";
    modelWrapper.add(ligamentGroup);

    const createLigMesh = (geom: THREE.BufferGeometry, mat: THREE.Material) => {
      const m = new THREE.Mesh(geom, mat);
      m.visible = false;
      ligamentGroup.add(m);
      return m;
    };

    ligamentBundleRef.current = {
      group: ligamentGroup,
      cylGeom,
      coneGeom,
      ligamentMat,
      rupturedTipMat,
      conoidIntact: createLigMesh(cylGeom, ligamentMat),
      conoidStumpA: createLigMesh(cylGeom, ligamentMat),
      conoidTipA: createLigMesh(coneGeom, rupturedTipMat),
      conoidStumpB: createLigMesh(cylGeom, ligamentMat),
      conoidTipB: createLigMesh(coneGeom, rupturedTipMat),
      trapIntact: createLigMesh(cylGeom, ligamentMat),
      trapStumpA: createLigMesh(cylGeom, ligamentMat),
      trapTipA: createLigMesh(coneGeom, rupturedTipMat),
      trapStumpB: createLigMesh(cylGeom, ligamentMat),
      trapTipB: createLigMesh(coneGeom, rupturedTipMat),
      acIntact: createLigMesh(cylGeom, ligamentMat),
      acStumpA: createLigMesh(cylGeom, ligamentMat),
      acTipA: createLigMesh(coneGeom, rupturedTipMat),
      acStumpB: createLigMesh(cylGeom, ligamentMat),
      acTipB: createLigMesh(coneGeom, rupturedTipMat),
      caIntact: createLigMesh(cylGeom, ligamentMat),
    };

    if (isTibia) {
      const ankleBundle = createAnkleLigamentMeshes();
      ankleBundle.group.visible = false;
      distalGroup.add(ankleBundle.group);
      ankleLigamentBundleRef.current = ankleBundle;
    }

    // Dynamic Musculoskeletal Force Vectors Group Setup
    const forceCylGeom = new THREE.CylinderGeometry(1, 1, 1, 16);
    const forceConeGeom = new THREE.ConeGeometry(1, 1, 16);
    const forceSphereGeom = new THREE.SphereGeometry(1, 16, 16);
    forceGeometriesRef.current = {
      cyl: forceCylGeom,
      cone: forceConeGeom,
      sphere: forceSphereGeom,
    };

    const forceVectorsGroup = new THREE.Group();
    forceVectorsGroup.name = "forceVectorsGroup";
    modelWrapper.add(forceVectorsGroup);
    forceVectorsGroupRef.current = forceVectorsGroup;

    // Entrance animation variables
    let finalTargetScale = 1.0;
    let isPoppingIn = false;
    let popStartTime = 0;
    const popDuration = 360;

    const isGlb = modelUrl.toLowerCase().endsWith(".glb") || modelUrl.toLowerCase().endsWith(".gltf");

    const onModelLoaded = (object: THREE.Object3D) => {
      // Step A: Orient medical coordinate system (Z-up to Three.js Y-up)
      const initBox = new THREE.Box3().setFromObject(object);
      const initSize = initBox.getSize(new THREE.Vector3());
      if (initSize.z > initSize.y && initSize.z > initSize.x) {
        object.rotation.x = -Math.PI / 2;
      }
      object.updateMatrixWorld(true);

      // Step B: Center geometric center to (0, 0, 0)
      const box = new THREE.Box3().setFromObject(object);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      object.position.sub(center);
      object.updateMatrixWorld(true);

      const maxDim = Math.max(size.x, size.y, size.z);
      if (maxDim > 0) {
        const targetDim = 3.0;
        finalTargetScale = targetDim / maxDim;
      }

      // Step C: Extract transformed raw vertices for on-demand partition
      const rawVerts: THREE.Vector3[] = [];
      const rawNorms: THREE.Vector3[] = [];
      const boneRanges: BoneVertexRange[] = [];
      let currentVertOffset = 0;
      let clavicleVertCount = 0;
      let patellaVertCount = 0;
      let tibiaVertCount = 0;
      let fibulaVertCount = 0;

      object.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const m = child as THREE.Mesh;
          // Unpack indexed geometry if present (standard in GLB) into non-indexed triangles
          const geom = m.geometry.index ? m.geometry.toNonIndexed() : m.geometry;
          const posAttr = geom.attributes.position;
          const normAttr = geom.attributes.normal;
          const normalMatrix = new THREE.Matrix3().getNormalMatrix(m.matrixWorld);

          boneRanges.push({
            name: (m.name || child.name || "").toLowerCase(),
            start: currentVertOffset,
            end: currentVertOffset + posAttr.count,
          });
          currentVertOffset += posAttr.count;

          const isClavicleChild = m.name.toLowerCase().includes("clavicle");
          const isPatellaChild = m.name.toLowerCase().includes("patella");
          const isTibiaChild = (m.name || child.name || "").toLowerCase().includes("tibia");
          const isFibulaChild = (m.name || child.name || "").toLowerCase().includes("fibula");

          for (let i = 0; i < posAttr.count; i++) {
            const v = new THREE.Vector3().fromBufferAttribute(posAttr, i).applyMatrix4(m.matrixWorld);
            rawVerts.push(v);
            if (normAttr) {
              const n = new THREE.Vector3().fromBufferAttribute(normAttr, i).applyMatrix3(normalMatrix).normalize();
              rawNorms.push(n);
            }
          }

          if (isClavicleChild) {
            clavicleVertCount = posAttr.count;
          }
          if (isPatellaChild) {
            patellaVertCount = posAttr.count;
          }
          if (isTibiaChild) {
            tibiaVertCount = posAttr.count;
          }
          if (isFibulaChild) {
            fibulaVertCount = posAttr.count;
          }
        }
      });

      if (rawVerts.length === 0) return;

      boneVertexRangesRef.current = boneRanges;
      clavicleVertexCountRef.current = clavicleVertCount;
      patellaVertexCountRef.current = patellaVertCount;
      tibiaVertexCountRef.current = tibiaVertCount;
      fibulaVertexCountRef.current = fibulaVertCount;
      rawVerticesRef.current = rawVerts;
      rawNormalsRef.current = rawNorms;

      // Perform initial partitioning for active subregion and preset
      partitionBoneMesh(activeSubregionRef.current, activePresetRef.current);
      updateActiveForceVectors(activeSubregionRef.current.id, selectedPresetIdRef.current);

      // Initial setup for entrance animation
      modelWrapper.scale.setScalar(finalTargetScale * 0.45);
      modelWrapper.position.set(0, 0, -1.8);
      modelWrapper.rotation.y = -0.2;

      isPoppingIn = true;
      popStartTime = performance.now();

      // Focus camera
      const initDir = activeSubregionRef.current?.cameraDirection
        ? new THREE.Vector3(...activeSubregionRef.current.cameraDirection).normalize()
        : new THREE.Vector3(0, 0, 1);
      const initDist = activeSubregionRef.current?.cameraDistance ?? 4.3;
      const initTarget = new THREE.Vector3(...(activeSubregionRef.current?.cameraTarget ?? [0, 0, 0]));
      camera.position.copy(initTarget).addScaledVector(initDir, initDist);
      camera.lookAt(initTarget);
      controls.target.copy(initTarget);
      controls.update();

      if (isTibia && activeSubregionRef.current?.id === "distal") {
        setActiveSnapView("ap");
      }

      setLoading(false);

      // Glide camera into active subregion right as the bone pops into view
      setTimeout(() => {
        triggerCameraFocus(activeSubregionRef.current, 520);
      }, 100);
    };

    if (isGlb) {
      const gltfLoader = new GLTFLoader();
      gltfLoader.load(
        modelUrl,
        (gltf) => {
          onModelLoaded(gltf.scene);
        },
        undefined,
        (err) => {
          console.error("Error loading 3D GLB model:", err);
          setLoadError("Failed to load 3D GLB model");
          setLoading(false);
        }
      );
    } else {
      const objLoader = new OBJLoader();
      objLoader.load(
        modelUrl,
        (object) => {
          onModelLoaded(object);
        },
        undefined,
        (err) => {
          console.error("Error loading 3D OBJ model:", err);
          setLoadError("Failed to load 3D model");
          setLoading(false);
        }
      );
    }

    // 7. Render Loop with Smooth Biological Morphing Interpolation
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Handle 3D model entrance
      if (isPoppingIn) {
        const elapsed = performance.now() - popStartTime;
        const progress = Math.min(1, elapsed / popDuration);
        const ease = 1 - Math.pow(1 - progress, 3.5);

        modelWrapper.scale.setScalar(finalTargetScale * (0.45 + 0.55 * ease));
        modelWrapper.position.z = -1.8 * (1 - ease);
        modelWrapper.rotation.y = -0.2 * (1 - ease);

        if (progress >= 1) {
          isPoppingIn = false;
          modelWrapper.scale.setScalar(finalTargetScale);
          modelWrapper.position.set(0, 0, 0);
          modelWrapper.rotation.y = 0;
        }
      }

      // Smooth camera glide to active subregion (+40% magnification, centered) or whole bone or radiographic quick-snap
      const camTransition = cameraTransitionRef.current;
      if (camTransition && camTransition.active) {
        const elapsed = performance.now() - camTransition.startTime;
        const progress = Math.min(1, elapsed / camTransition.duration);
        // Snappy cubic ease-out: brisk start, buttery soft landing with zero bounce/overshoot
        const ease = 1 - Math.pow(1 - progress, 3);

        if (
          camTransition.isSpherical &&
          camTransition.uStart &&
          camTransition.qRot &&
          camTransition.rStart != null &&
          camTransition.rEnd != null
        ) {
          const curCenter = new THREE.Vector3().lerpVectors(
            camTransition.startTarget,
            camTransition.endTarget,
            ease
          );
          const curDist = THREE.MathUtils.lerp(
            camTransition.rStart,
            camTransition.rEnd,
            ease
          );
          const qCur = new THREE.Quaternion().identity().slerp(camTransition.qRot, ease);
          const curDir = camTransition.uStart.clone().applyQuaternion(qCur).normalize();

          camera.position.copy(curCenter).addScaledVector(curDir, curDist);
          controls.target.copy(curCenter);
          camera.lookAt(controls.target);
        } else {
          controls.target.lerpVectors(camTransition.startTarget, camTransition.endTarget, ease);
          camera.position.lerpVectors(camTransition.startCamPos, camTransition.endCamPos, ease);
          camera.lookAt(controls.target);
        }

        // Smoothly interpolate optical view offset
        const curYOffset = THREE.MathUtils.lerp(camTransition.startOffsetY, camTransition.endOffsetY, ease);
        currentYOffsetRef.current = curYOffset;

        const curW = container.clientWidth || window.innerWidth;
        const curH = container.clientHeight || window.innerHeight;
        camera.setViewOffset(curW, curH, 0, curYOffset, curW, curH);
        camera.updateProjectionMatrix();

        if (progress >= 1) {
          camTransition.active = false;
        }
      }

      // Smooth Anatomical Lerp to Target Displacement/Angulation
      const proxPivot = proximalPivotGroupRef.current;
      const distGroup = distalGroupRef.current;

      if (proxPivot) {
        // Smooth rotation
        proxPivot.rotation.x = THREE.MathUtils.lerp(proxPivot.rotation.x, currentProximalRot.current.x, 0.12);
        proxPivot.rotation.y = THREE.MathUtils.lerp(proxPivot.rotation.y, currentProximalRot.current.y, 0.12);
        proxPivot.rotation.z = THREE.MathUtils.lerp(proxPivot.rotation.z, currentProximalRot.current.z, 0.12);

        // Smooth translation (cutCenter + offset)
        const isClavicleSCFulcrum = isClavicle && (
          activePresetRef.current?.partitionMode?.startsWith("clavicle_shaft") ||
          activePresetRef.current?.partitionMode?.startsWith("clavicle_distal") ||
          activeSubregionRef.current.id === "shaft" ||
          activeSubregionRef.current.id === "distal"
        );
        const basePivot = isClavicleSCFulcrum
          ? [70.0, 50.0, 60.0]
          : (activePresetRef.current?.cutCenter ?? activeSubregionRef.current.cutCenter);
        const targetX = basePivot[0] + currentProximalPos.current.x;
        const targetY = basePivot[1] + currentProximalPos.current.y;
        const targetZ = basePivot[2] + currentProximalPos.current.z;

        proxPivot.position.x = THREE.MathUtils.lerp(proxPivot.position.x, targetX, 0.12);
        proxPivot.position.y = THREE.MathUtils.lerp(proxPivot.position.y, targetY, 0.12);
        proxPivot.position.z = THREE.MathUtils.lerp(proxPivot.position.z, targetZ, 0.12);
      }

      if (distGroup) {
        const isDistalFemurOrHumerus = !isClavicle && !isPatella && !isTibia && (
          activeSubregionRef.current.id === "distal" ||
          activeSubregionRef.current.id === "distal-femur" ||
          activeSubregionRef.current.id === "distal-humerus"
        );
        const distBase = isDistalFemurOrHumerus
          ? (isHumerus ? new THREE.Vector3(-23.3, -120.0, -11.8) : new THREE.Vector3(10, -170, 0))
          : new THREE.Vector3(0, 0, 0);

        distGroup.rotation.x = THREE.MathUtils.lerp(distGroup.rotation.x, currentDistalRot.current.x, 0.12);
        distGroup.rotation.y = THREE.MathUtils.lerp(distGroup.rotation.y, currentDistalRot.current.y, 0.12);
        distGroup.rotation.z = THREE.MathUtils.lerp(distGroup.rotation.z, currentDistalRot.current.z, 0.12);

        distGroup.position.x = THREE.MathUtils.lerp(distGroup.position.x, distBase.x + currentDistalPos.current.x, 0.12);
        distGroup.position.y = THREE.MathUtils.lerp(distGroup.position.y, distBase.y + currentDistalPos.current.y, 0.12);
        distGroup.position.z = THREE.MathUtils.lerp(distGroup.position.z, distBase.z + currentDistalPos.current.z, 0.12);
      }

      if (gtPivotGroupRef.current) {
        const gtPivot = gtPivotGroupRef.current;
        gtPivot.rotation.x = THREE.MathUtils.lerp(gtPivot.rotation.x, currentGtRot.current.x, 0.12);
        gtPivot.rotation.y = THREE.MathUtils.lerp(gtPivot.rotation.y, currentGtRot.current.y, 0.12);
        gtPivot.rotation.z = THREE.MathUtils.lerp(gtPivot.rotation.z, currentGtRot.current.z, 0.12);

        const basePos = gtBasePosRef.current;
        const targetX = basePos.x + currentGtPos.current.x;
        const targetY = basePos.y + currentGtPos.current.y;
        const targetZ = basePos.z + currentGtPos.current.z;

        gtPivot.position.x = THREE.MathUtils.lerp(gtPivot.position.x, targetX, 0.12);
        gtPivot.position.y = THREE.MathUtils.lerp(gtPivot.position.y, targetY, 0.12);
        gtPivot.position.z = THREE.MathUtils.lerp(gtPivot.position.z, targetZ, 0.12);
      }

      if (ltPivotGroupRef.current) {
        const ltPivot = ltPivotGroupRef.current;
        ltPivot.rotation.x = THREE.MathUtils.lerp(ltPivot.rotation.x, currentLtRot.current.x, 0.12);
        ltPivot.rotation.y = THREE.MathUtils.lerp(ltPivot.rotation.y, currentLtRot.current.y, 0.12);
        ltPivot.rotation.z = THREE.MathUtils.lerp(ltPivot.rotation.z, currentLtRot.current.z, 0.12);

        const basePos = ltBasePosRef.current;
        const targetX = basePos.x + currentLtPos.current.x;
        const targetY = basePos.y + currentLtPos.current.y;
        const targetZ = basePos.z + currentLtPos.current.z;

        ltPivot.position.x = THREE.MathUtils.lerp(ltPivot.position.x, targetX, 0.12);
        ltPivot.position.y = THREE.MathUtils.lerp(ltPivot.position.y, targetY, 0.12);
        ltPivot.position.z = THREE.MathUtils.lerp(ltPivot.position.z, targetZ, 0.12);
      }

      if (shardPivotGroupRef.current) {
        const shardPivot = shardPivotGroupRef.current;
        shardPivot.rotation.x = THREE.MathUtils.lerp(shardPivot.rotation.x, currentShardRot.current.x, 0.12);
        shardPivot.rotation.y = THREE.MathUtils.lerp(shardPivot.rotation.y, currentShardRot.current.y, 0.12);
        shardPivot.rotation.z = THREE.MathUtils.lerp(shardPivot.rotation.z, currentShardRot.current.z, 0.12);

        const basePos = shardBasePosRef.current;
        const targetX = basePos.x + currentShardPos.current.x;
        const targetY = basePos.y + currentShardPos.current.y;
        const targetZ = basePos.z + currentShardPos.current.z;

        shardPivot.position.x = THREE.MathUtils.lerp(shardPivot.position.x, targetX, 0.12);
        shardPivot.position.y = THREE.MathUtils.lerp(shardPivot.position.y, targetY, 0.12);
        shardPivot.position.z = THREE.MathUtils.lerp(shardPivot.position.z, targetZ, 0.12);
      }

      // Smooth dynamic ligament transformation (Clavicle Shoulder Girdle)
      if (isClavicle && ligamentBundleRef.current) {
        const bundle = ligamentBundleRef.current;
        const shouldShow = showLigamentsRef.current && !isXRayModeRef.current;
        bundle.group.visible = shouldShow;

        if (shouldShow && proxPivot) {
          const subId = activeSubregionRef.current?.id;
          const isShaft = subId === "shaft";
          const isDistal = subId === "distal";

          if (isShaft) {
            // In shaft fractures, lateral clavicle and scapula both belong to distalGroup
            const qDist = distGroup ? distGroup.quaternion : _scratchQuat.identity();
            const pDist = distGroup ? distGroup.position : _scratchZero;

            _curConoidScapula.copy(_conoidScapula).applyQuaternion(qDist).add(pDist);
            _curTrapScapula.copy(_trapScapula).applyQuaternion(qDist).add(pDist);
            _curAcScapula.copy(_acScapula).applyQuaternion(qDist).add(pDist);
            _curCaCoracoid.copy(_caCoracoid).applyQuaternion(qDist).add(pDist);
            _curCaAcromion.copy(_caAcromion).applyQuaternion(qDist).add(pDist);

            _curConoidClavicle.copy(_conoidClavicleRaw).applyQuaternion(qDist).add(pDist);
            _curTrapClavicle.copy(_trapClavicleRaw).applyQuaternion(qDist).add(pDist);
            _curAcClavicle.copy(_acClavicleRaw).applyQuaternion(qDist).add(pDist);

            // All ligaments intact in midshaft fractures
            updateLigamentSegment(bundle.caIntact, _curCaCoracoid, _curCaAcromion, 2.8, 1.6);
            updateLigamentSegment(bundle.acIntact, _curAcScapula, _curAcClavicle, 2.8, 1.8);
            updateLigamentSegment(bundle.conoidIntact, _curConoidScapula, _curConoidClavicle, 3.2, 2.4);
            updateLigamentSegment(bundle.trapIntact, _curTrapScapula, _curTrapClavicle, 3.5, 1.8);

            bundle.acStumpA.visible = false;
            bundle.acTipA.visible = false;
            bundle.acStumpB.visible = false;
            bundle.acTipB.visible = false;
            bundle.conoidStumpA.visible = false;
            bundle.conoidTipA.visible = false;
            bundle.conoidStumpB.visible = false;
            bundle.conoidTipB.visible = false;
            bundle.trapStumpA.visible = false;
            bundle.trapTipA.visible = false;
            bundle.trapStumpB.visible = false;
            bundle.trapTipB.visible = false;
          } else if (isDistal) {
            // Neer Distal Clavicle Fractures
            const pId = selectedPresetIdRef.current;
            const isNeer2B = pId === "neer_type2b_distal";
            const isNeer5 = pId === "neer_type5_distal";

            const qDist = distGroup ? distGroup.quaternion : _scratchQuat.identity();
            const pDist = distGroup ? distGroup.position : _scratchZero;

            // Scapula origins in distalGroup space
            _curConoidScapula.copy(_conoidScapula).applyQuaternion(qDist).add(pDist);
            _curTrapScapula.copy(_trapScapula).applyQuaternion(qDist).add(pDist);
            _curAcScapula.copy(_acScapula).applyQuaternion(qDist).add(pDist);
            _curCaCoracoid.copy(_caCoracoid).applyQuaternion(qDist).add(pDist);
            _curCaAcromion.copy(_caAcromion).applyQuaternion(qDist).add(pDist);

            // 1. CA Ligament is always intact
            updateLigamentSegment(bundle.caIntact, _curCaCoracoid, _curCaAcromion, 2.8, 1.6);

            // 2. AC Ligament: intact across distal fragment and acromion
            _curAcClavicle.copy(_acClavicleRaw).applyQuaternion(qDist).add(pDist);
            updateLigamentSegment(bundle.acIntact, _curAcScapula, _curAcClavicle, 2.8, 1.8);
            bundle.acStumpA.visible = false;
            bundle.acTipA.visible = false;
            bundle.acStumpB.visible = false;
            bundle.acTipB.visible = false;

            // 3. Trapezoid Ligament:
            if (isNeer5 && shardPivotGroupRef.current) {
              const qShard = shardPivotGroupRef.current.quaternion;
              const pShard = shardPivotGroupRef.current.position;
              _curTrapClavicle.copy(_trapClavicleRaw).sub(_neerVShardCentroid).applyQuaternion(qShard).add(pShard);
            } else {
              _curTrapClavicle.copy(_trapClavicleRaw).applyQuaternion(qDist).add(pDist);
            }
            updateLigamentSegment(bundle.trapIntact, _curTrapScapula, _curTrapClavicle, 3.5, 1.8);
            bundle.trapStumpA.visible = false;
            bundle.trapTipA.visible = false;
            bundle.trapStumpB.visible = false;
            bundle.trapTipB.visible = false;

            // 4. Conoid Ligament:
            if (isNeer2B) {
              // Neer IIB: Conoid is torn! Clavicular stump moves with elevated proximal fragment
              const qProx = proxPivot.quaternion;
              const pProx = proxPivot.position;
              _curConoidClavicle.copy(_conoidClavicleRaw).sub(_scPivotCenter).applyQuaternion(qProx).add(pProx);

              bundle.conoidIntact.visible = false;
              updateTornLigament(
                bundle.conoidStumpA, bundle.conoidTipA,
                bundle.conoidStumpB, bundle.conoidTipB,
                _curConoidScapula, _curConoidClavicle,
                3.2, 2.4, 12.0, 2.2
              );
            } else if (isNeer5 && shardPivotGroupRef.current) {
              // Neer V: Conoid attached to inferior avulsion shard
              const qShard = shardPivotGroupRef.current.quaternion;
              const pShard = shardPivotGroupRef.current.position;
              _curConoidClavicle.copy(_conoidClavicleRaw).sub(_neerVShardCentroid).applyQuaternion(qShard).add(pShard);

              bundle.conoidStumpA.visible = false;
              bundle.conoidTipA.visible = false;
              bundle.conoidStumpB.visible = false;
              bundle.conoidTipB.visible = false;
              updateLigamentSegment(bundle.conoidIntact, _curConoidScapula, _curConoidClavicle, 3.2, 2.4);
            } else {
              // Neer I, IIA, III, IV: Conoid is intact
              _curConoidClavicle.copy(_conoidClavicleRaw).applyQuaternion(qDist).add(pDist);

              bundle.conoidStumpA.visible = false;
              bundle.conoidTipA.visible = false;
              bundle.conoidStumpB.visible = false;
              bundle.conoidTipB.visible = false;
              updateLigamentSegment(bundle.conoidIntact, _curConoidScapula, _curConoidClavicle, 3.2, 2.4);
            }
          } else {
            // AC Joint (Rockwood) / Distal Clavicle mode:
            const pId = selectedPresetIdRef.current;
            const isActTorn = pId !== "intact" && pId !== "rockwood_type1";
            const isCcTorn = pId !== "intact" && pId !== "rockwood_type1" && pId !== "rockwood_type2";

            const cutCenterArr = activePresetRef.current?.cutCenter ?? activeSubregionRef.current.cutCenter;
            _cutCenterVec.set(cutCenterArr[0], cutCenterArr[1], cutCenterArr[2]);

            const q = proxPivot.quaternion;
            const p = proxPivot.position;

            // Compute world coordinates of Clavicle insertions in modelWrapper space
            _conoidClavicle.copy(_conoidClavicleRaw).sub(_cutCenterVec).applyQuaternion(q).add(p);
            _trapClavicle.copy(_trapClavicleRaw).sub(_cutCenterVec).applyQuaternion(q).add(p);
            _acClavicle.copy(_acClavicleRaw).sub(_cutCenterVec).applyQuaternion(q).add(p);

            // 1. Coracoacromial (CA) Ligament: always intact arch
            updateLigamentSegment(bundle.caIntact, _caCoracoid, _caAcromion, 2.8, 1.6);

            // 2. Acromioclavicular (AC) Ligament
            if (!isActTorn) {
              updateLigamentSegment(bundle.acIntact, _acScapula, _acClavicle, 2.8, 1.8);
              bundle.acStumpA.visible = false;
              bundle.acTipA.visible = false;
              bundle.acStumpB.visible = false;
              bundle.acTipB.visible = false;
            } else {
              bundle.acIntact.visible = false;
              updateTornLigament(
                bundle.acStumpA, bundle.acTipA,
                bundle.acStumpB, bundle.acTipB,
                _acScapula, _acClavicle,
                2.8, 1.8, 2.8, 1.0
              );
            }

            // 3. Conoid Ligament
            if (!isCcTorn) {
              updateLigamentSegment(bundle.conoidIntact, _conoidScapula, _conoidClavicle, 3.2, 2.4);
              bundle.conoidStumpA.visible = false;
              bundle.conoidTipA.visible = false;
              bundle.conoidStumpB.visible = false;
              bundle.conoidTipB.visible = false;
            } else {
              bundle.conoidIntact.visible = false;
              updateTornLigament(
                bundle.conoidStumpA, bundle.conoidTipA,
                bundle.conoidStumpB, bundle.conoidTipB,
                _conoidScapula, _conoidClavicle,
                3.2, 2.4, 12.0, 2.2
              );
            }

            // 4. Trapezoid Ligament
            if (!isCcTorn) {
              updateLigamentSegment(bundle.trapIntact, _trapScapula, _trapClavicle, 3.5, 1.8);
              bundle.trapStumpA.visible = false;
              bundle.trapTipA.visible = false;
              bundle.trapStumpB.visible = false;
              bundle.trapTipB.visible = false;
            } else {
              bundle.trapIntact.visible = false;
              updateTornLigament(
                bundle.trapStumpA, bundle.trapTipA,
                bundle.trapStumpB, bundle.trapTipB,
                _trapScapula, _trapClavicle,
                3.5, 1.8, 14.0, 2.2
              );
            }
          }
        }
      }

      // Ankle ligaments visibility toggle and rupture state staging
      if (ankleLigamentBundleRef.current) {
        const isDistalAnkle = isTibia && activeSubregionRef.current?.id === "distal";
        const bundle = ankleLigamentBundleRef.current;
        bundle.group.visible = isDistalAnkle && showLigamentsRef.current && !isXRayModeRef.current;

        if (bundle.group.visible) {
          const pId = selectedPresetIdRef.current;
          const isAitflTorn = pId.startsWith("lh_ser_") ||
            pId === "lh_per_2" || pId === "lh_per_3" || pId === "lh_per_4" ||
            pId === "lh_pa_2" || pId === "lh_pa_3";
          const isDeltoidTorn = pId === "lh_ser_4" ||
            pId.startsWith("lh_per_") ||
            pId.startsWith("lh_pa_");

          bundle.aitflMesh.visible = !isAitflTorn;
          bundle.aitflTornGroup.visible = isAitflTorn;

          bundle.deltoidSuperficialMesh.visible = !isDeltoidTorn;
          bundle.deltoidDeepMesh.visible = !isDeltoidTorn;
          bundle.deltoidTornGroup.visible = isDeltoidTorn;
        }
      }

      // Dynamic Musculoskeletal Force Vectors animation
      try {
        const shouldShowForces = showForcesRef.current && selectedPresetIdRef.current !== "intact";
        if (forceVectorsGroupRef.current) {
          forceVectorsGroupRef.current.visible = shouldShowForces;
        }

        if (shouldShowForces && forceVectorInstancesRef.current.length > 0) {
          const instances = forceVectorInstancesRef.current;

          for (let i = 0; i < instances.length; i++) {
            const inst = instances[i];
            const cfg = inst.config;

            let targetMesh: THREE.Object3D | null = null;
            if (cfg.parentTarget === "gt") {
              targetMesh = gtMeshRef.current || proximalMeshRef.current || proximalPivotGroupRef.current;
            } else if (cfg.parentTarget === "lt") {
              targetMesh = ltMeshRef.current || (isHumerus ? proximalMeshRef.current : distalMeshRef.current) || proximalPivotGroupRef.current;
            } else if (cfg.parentTarget === "shard") {
              targetMesh = shardMeshRef.current || distalMeshRef.current || distalGroupRef.current;
            } else if (cfg.parentTarget === "proximal") {
              targetMesh = proximalMeshRef.current || proximalPivotGroupRef.current;
            } else {
              targetMesh = distalMeshRef.current || distalGroupRef.current;
            }

            _scratchAnchor.set(cfg.originOffset[0], cfg.originOffset[1], cfg.originOffset[2]);
            if (targetMesh && modelWrapperRef.current) {
              targetMesh.localToWorld(_scratchAnchor);
              modelWrapperRef.current.worldToLocal(_scratchAnchor);
            }

            _scratchDir.set(cfg.direction[0], cfg.direction[1], cfg.direction[2]).normalize();

            // Offset anchor slightly along direction (+2.0 mm) so it sits proud on the outer bone cortex rather than submerged
            _scratchAnchor.addScaledVector(_scratchDir, 2.0);

            // Static, stable arrow length - completely free of stretch/shrink animation
            const mag = cfg.magnitude;
            const headLen = Math.min(8.0, mag * 0.26);
            const shaftLen = Math.max(1.0, mag - headLen);

            inst.anchor.position.copy(_scratchAnchor);
            inst.anchor.scale.set(2.0, 2.0, 2.0);

            _scratchMid.copy(_scratchAnchor).addScaledVector(_scratchDir, shaftLen * 0.5);
            inst.shaft.position.copy(_scratchMid);
            inst.shaft.quaternion.setFromUnitVectors(_scratchUp, _scratchDir);
            inst.shaft.scale.set(1.2, shaftLen, 1.2);

            _scratchHeadPos.copy(_scratchAnchor).addScaledVector(_scratchDir, shaftLen + headLen * 0.5);
            inst.head.position.copy(_scratchHeadPos);
            inst.head.quaternion.setFromUnitVectors(_scratchUp, _scratchDir);
            inst.head.scale.set(2.8, headLen, 2.8);

            _scratchSpritePos.copy(_scratchAnchor).addScaledVector(_scratchDir, mag + 5.5);
            inst.sprite.position.copy(_scratchSpritePos);

            // Clean, stable opacity and emissive
            inst.material.opacity = 0.68;
            inst.material.emissiveIntensity = 0.25;
          }
        }
      } catch {
        // Defensive: guarantee OrbitControls and rendering never fail
      }

      if (markerMeshRef.current && markerMeshRef.current.visible) {
        markerMeshRef.current.quaternion.copy(camera.quaternion);
        const distToCam = camera.position.distanceTo(markerMeshRef.current.position);
        markerMeshRef.current.scale.setScalar(distToCam * 0.35);
      }

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // 8. Dynamic resize with ResizeObserver
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth || window.innerWidth;
      const newH = container.clientHeight || window.innerHeight;
      if (newW === 0 || newH === 0) return;
      camera.aspect = newW / newH;
      const targetRatio = isWholeBoneViewRef.current 
        ? 0.07 
        : (activeSubregionRef.current?.viewOffsetRatio ?? 0.20);
      const yOffset = Math.round(newH * targetRatio);
      currentYOffsetRef.current = yOffset;
      camera.setViewOffset(newW, newH, 0, yOffset, newW, newH);
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener("resize", handleResize);

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);

    // 9. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      resizeObserver.disconnect();
      renderer.domElement.removeEventListener("contextmenu", handleContextMenu);
      renderer.domElement.removeEventListener("pointermove", handlePointerMove);
      renderer.domElement.removeEventListener("pointerleave", handlePointerLeave);
      renderer.domElement.removeEventListener("pointerdown", handlePointerDown);
      renderer.domElement.removeEventListener("pointerup", handlePointerUp);
      if (markerMeshRef.current) {
        markerGeom.dispose();
        markerMat.dispose();
        dotGeom.dispose();
        dotMat.dispose();
        markerMeshRef.current = null;
      }
      controls.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      if (forceGeometriesRef.current) {
        forceGeometriesRef.current.cyl.dispose();
        forceGeometriesRef.current.cone.dispose();
        forceGeometriesRef.current.sphere.dispose();
        forceGeometriesRef.current = null;
      }
      forceVectorInstancesRef.current.forEach((inst) => {
        inst.texture.dispose();
        inst.material.dispose();
        (inst.sprite.material as THREE.Material).dispose();
      });
      forceVectorInstancesRef.current = [];
      forceVectorsGroupRef.current = null;

      if (ligamentBundleRef.current) {
        ligamentBundleRef.current.cylGeom.dispose();
        ligamentBundleRef.current.coneGeom.dispose();
        ligamentBundleRef.current.ligamentMat.dispose();
        ligamentBundleRef.current.rupturedTipMat.dispose();
        ligamentBundleRef.current = null;
      }
      if (ankleLigamentBundleRef.current) {
        ankleLigamentBundleRef.current.geometries.forEach((g) => g.dispose());
        ankleLigamentBundleRef.current.mat.dispose();
        ankleLigamentBundleRef.current.tornMat.dispose();
        ankleLigamentBundleRef.current = null;
      }
      scene.clear();
      cameraRef.current = null;
      controlsRef.current = null;
      cameraTransitionRef.current = null;
      proximalPivotGroupRef.current = null;
      distalGroupRef.current = null;
      gtPivotGroupRef.current = null;
      ltPivotGroupRef.current = null;
      shardPivotGroupRef.current = null;
      proximalMeshRef.current = null;
      distalMeshRef.current = null;
      gtMeshRef.current = null;
      ltMeshRef.current = null;
      shardMeshRef.current = null;
      rawVerticesRef.current = [];
      rawNormalsRef.current = [];
      clavicleVertexCountRef.current = 0;
      patellaVertexCountRef.current = 0;
      tibiaVertexCountRef.current = 0;
      fibulaVertexCountRef.current = 0;

      if (solidBoneMatRef.current) {
        solidBoneMatRef.current.dispose();
        solidBoneMatRef.current = null;
      }
      if (cancellousBoneMatRef.current) {
        cancellousBoneMatRef.current.dispose();
        cancellousBoneMatRef.current = null;
      }
      if (invisibleMatRef.current) {
        invisibleMatRef.current.dispose();
        invisibleMatRef.current = null;
      }
      if (xRayMatRef.current) {
        xRayMatRef.current.dispose();
        xRayMatRef.current = null;
      }
    };
  }, [modelUrl, partitionBoneMesh, triggerCameraFocus]);

  return (
    <div 
      className={`fixed inset-0 z-[99999] flex flex-col select-none overflow-hidden transition-all duration-300 ease-out ${
        isEntering || isClosing
          ? "bg-slate-950/0 backdrop-blur-none opacity-0"
          : isXRayMode
          ? "bg-[#020617] opacity-100"
          : "bg-slate-950/80 backdrop-blur-2xl opacity-100"
      }`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "100dvh",
        background: isXRayMode
          ? "radial-gradient(ellipse at 50% 50%, #0c1e34 0%, #06101d 50%, #020617 100%)"
          : undefined,
      }}
    >
      {/* Discreet Minimal Floating Header: Bone Name + Close Button */}
      <header 
        className={`absolute top-0 inset-x-0 z-20 flex items-center justify-between px-5 pt-5 pb-3 pointer-events-none transition-all duration-250 ease-out ${
          isEntering || isClosing
            ? "-translate-y-6 opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      >
        {/* Bone Title */}
        <div className="flex items-center gap-2.5 pointer-events-auto">
          <h1 className="text-base font-black tracking-tight text-slate-100 drop-shadow-md">
            {boneName}
          </h1>
        </div>

        {/* Actions: Forces Toggle + Ligaments Toggle (Clavicle) + Whole Bone View Toggle + Minimal Close Button */}
        <div className="flex items-center gap-2 pointer-events-auto">
          {/* Dynamic Muscle Deforming Forces Toggle */}
          <button
            onClick={() => setShowForces(!showForces)}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all border backdrop-blur-md flex items-center gap-1.5 cursor-pointer active:scale-95 shadow-md ${
              showForces
                ? "bg-slate-700/60 text-slate-100 border-slate-400/50 shadow-slate-900/50"
                : "bg-slate-900/60 border-white/15 text-slate-400 hover:text-slate-200 hover:bg-slate-800/80"
            }`}
            title={showForces ? "Hide Muscle Deforming Forces" : "Show Dynamic Muscle Deforming Forces"}
          >
            <Zap size={12} className={showForces ? "text-slate-200 fill-slate-300" : "text-slate-400"} />
            <span>Forces</span>
          </button>

          {!isXRayMode && (isClavicle || (isTibia && activeSubregion.id === "distal")) && (
            <button
              onClick={() => setShowLigaments(!showLigaments)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all border backdrop-blur-md flex items-center gap-1.5 cursor-pointer active:scale-95 shadow-md ${
                showLigaments
                  ? "bg-teal-500/25 text-teal-200 border-teal-500/50 shadow-teal-500/20"
                  : "bg-slate-900/60 border-white/15 text-slate-400 hover:text-slate-200 hover:bg-slate-800/80"
              }`}
              title={showLigaments ? "Hide Ligaments" : "Show Anatomical Ligaments"}
            >
              <Activity size={12} className={showLigaments ? "text-teal-300" : "text-slate-400"} />
              <span>Ligaments</span>
            </button>
          )}

          {/* Translucent X-Ray Film Mode Toggle */}
          <button
            onClick={() => setIsXRayMode(!isXRayMode)}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all border backdrop-blur-md flex items-center gap-1.5 cursor-pointer active:scale-95 shadow-md ${
              isXRayMode
                ? "bg-cyan-500/25 text-cyan-200 border-cyan-400/60 shadow-cyan-950/50 ring-1 ring-cyan-400/40"
                : "bg-slate-900/60 border-white/15 text-slate-400 hover:text-slate-200 hover:bg-slate-800/80"
            }`}
            title={isXRayMode ? "Disable Translucent X-Ray Film Mode" : "Enable Translucent X-Ray Film Mode"}
          >
            <Scan size={12} className={isXRayMode ? "text-cyan-300 animate-pulse" : "text-slate-400"} />
            <span>X-Ray</span>
          </button>


          {/* Pan / Rotate Mouse Mode Toggle */}
          <button
            onClick={() => setIsPanMode(!isPanMode)}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all border backdrop-blur-md flex items-center gap-1.5 cursor-pointer active:scale-95 shadow-md ${
              isPanMode
                ? "bg-amber-500/25 text-amber-200 border-amber-400/60 shadow-amber-950/50 ring-1 ring-amber-400/40"
                : "bg-slate-900/60 border-white/15 text-slate-400 hover:text-slate-200 hover:bg-slate-800/80"
            }`}
            title={
              isPanMode
                ? "Pan Mode active: Left-click drags to pan/move. Click to switch to Rotate."
                : "Rotate Mode active: Left-click drags to rotate. Right-click or toggle to Pan."
            }
          >
            <Move size={12} className={isPanMode ? "text-amber-300" : "text-slate-400"} />
            <span>{isPanMode ? "Pan" : "Rotate"}</span>
          </button>

          <button
            onClick={() => {
              if (isWholeBoneView) {
                triggerCameraFocus(activeSubregion);
              } else {
                triggerWholeBoneFocus();
              }
            }}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all border backdrop-blur-md flex items-center gap-1.5 cursor-pointer active:scale-95 shadow-md ${
              isWholeBoneView
                ? "bg-teal-500/25 text-teal-200 border-teal-500/50 shadow-teal-500/20"
                : "bg-slate-900/60 border-white/15 text-slate-200 hover:text-white hover:bg-slate-800/80"
            }`}
            title={isWholeBoneView ? "Zoom back in to active subregion" : "View entire bone"}
          >
            {isWholeBoneView ? (
              <Minimize2 size={12} className="text-teal-300" />
            ) : (
              <Maximize2 size={12} className="text-slate-300" />
            )}
            <span>{isWholeBoneView ? "Focus View" : "Whole Bone"}</span>
          </button>

          {/* Minimal Close Button */}
          <button
            onClick={handleAnimatedClose}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all active:scale-90 border backdrop-blur-md bg-slate-900/60 border-white/15 text-slate-200 hover:text-white hover:bg-slate-800/80 shadow-lg cursor-pointer"
            title="Close (Esc)"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>
      </header>

      {/* Radiographic Quick-Snap Views Floating Bar (แถบปุ่มลัดสแนปมุมมองมาตรฐานทางรังสีวิทยา) */}
      <div 
        className={`absolute top-16 left-4 sm:left-5 z-20 flex flex-col items-start gap-1 pointer-events-none transition-all duration-250 ease-out ${
          isEntering || isClosing
            ? "-translate-y-4 opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      >
        <div 
          className="flex items-center gap-1 p-1 rounded-2xl border backdrop-blur-xl shadow-xl pointer-events-auto overflow-x-auto no-scrollbar max-w-[calc(100vw-2rem)]"
          style={{
            background: "rgba(15, 23, 42, 0.88)",
            borderColor: "rgba(255, 255, 255, 0.15)",
          }}
        >
          {/* Micro Icon Badge */}
          <div className="flex items-center gap-1 px-2 py-1 text-[10px] font-black uppercase tracking-wider text-slate-300 border-r border-white/10 select-none">
            <span className="text-xs leading-none">🩻</span>
            <span className="hidden sm:inline">Views</span>
          </div>

          {/* Radiographic Snap Buttons */}
          {radiographicViews.map((view) => {
            const isActive = activeSnapView === view.id;
            return (
              <button
                key={view.id}
                onClick={() => triggerQuickSnap(view)}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer active:scale-95 flex items-center gap-1 ${
                  isActive
                    ? "bg-teal-500 text-slate-950 font-black shadow-md shadow-teal-500/30"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                }`}
                title={view.description ? `${view.fullName} (${view.description})` : view.fullName}
              >
                {view.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic View Hint Badge */}
        {activeViewInfo && activeSnapView && (
          <div className="px-2.5 py-0.5 rounded-md bg-slate-900/80 border border-white/10 backdrop-blur-md text-[10px] font-semibold text-teal-300 tracking-wide select-none pointer-events-none shadow-sm">
            {activeViewInfo.fullName}
          </div>
        )}

      </div>

      {/* Top-Left Selected Structure Clinical Info Window (คลิกเพื่อแสดงข้อมูลที่หน้าต่างข้อมูลแยกแถบซ้ายบน) */}
      {selectedStructure && (
        <div
          className={`absolute top-[120px] sm:top-[128px] left-4 sm:left-5 z-30 pointer-events-auto transition-all duration-200 ease-out max-w-[320px] sm:max-w-[350px] w-[calc(100vw-2rem)] ${
            isEntering || isClosing ? "opacity-0 -translate-x-4" : "opacity-100 translate-x-0"
          }`}
        >
          <div className="relative flex flex-col gap-2 p-3.5 sm:p-4 rounded-2xl bg-slate-950/95 border border-white/20 backdrop-blur-2xl shadow-2xl shadow-slate-950/80 text-slate-100 animate-in fade-in slide-in-from-left-2 duration-200 max-h-[calc(100vh-250px)] overflow-y-auto">
            {/* Header: Category Badge + Close button */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                <span
                  className={`px-2.5 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-wider ${
                    selectedStructure.badgeColor === "purple"
                      ? "bg-purple-500/25 text-purple-300 border border-purple-500/40"
                      : selectedStructure.badgeColor === "rose"
                      ? "bg-rose-500/25 text-rose-300 border border-rose-500/40"
                      : selectedStructure.badgeColor === "amber"
                      ? "bg-amber-500/25 text-amber-300 border border-amber-500/40"
                      : selectedStructure.badgeColor === "cyan"
                      ? "bg-cyan-500/25 text-cyan-300 border border-cyan-500/40"
                      : selectedStructure.badgeColor === "indigo"
                      ? "bg-indigo-500/25 text-indigo-300 border border-indigo-500/40"
                      : "bg-teal-500/25 text-teal-300 border border-teal-500/40"
                  }`}
                >
                  {selectedStructure.badge}
                </span>
                <span className="text-[10px] text-slate-400 font-medium">
                  Anatomy Inspector
                </span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedStructure(null);
                  if (markerMeshRef.current) markerMeshRef.current.visible = false;
                }}
                className="w-6 h-6 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all cursor-pointer active:scale-95"
                title="Close"
              >
                <X size={13} />
              </button>
            </div>

            {/* Structure Name (English Only) */}
            <div className="flex flex-col">
              <span className="text-sm font-black tracking-tight text-white drop-shadow-sm leading-snug">
                {selectedStructure.titleEn}
              </span>
            </div>

            {/* Clinical Description / Functional Role */}
            {selectedStructure.details && (
              <div className="pt-2 mt-0.5 border-t border-white/10 text-xs leading-relaxed text-slate-300/95 font-normal">
                {selectedStructure.details}
              </div>
            )}

            {/* Footer hint */}
            <div className="flex items-center justify-between pt-1.5 text-[9px] text-slate-500 border-t border-white/5">
              <span>Click empty space or ✕ to close</span>
              <span className="font-mono text-[8px] uppercase tracking-wider text-teal-400/80">● Point Locked</span>
            </div>
          </div>
        </div>
      )}

      {/* 3D WebGL Canvas Container: Edge-to-edge fullscreen */}
      <div 
        ref={containerRef} 
        className={`w-full h-full relative touch-none ${
          isPanMode ? "cursor-move" : "cursor-grab active:cursor-grabbing"
        }`}
      >
        {/* Authentic Radiographic Film Watermark in X-Ray mode */}
        {isXRayMode && (
          <div className="absolute top-20 right-5 z-10 pointer-events-none flex flex-col items-end opacity-60 select-none">
            <div className="text-[10px] font-mono font-black tracking-widest text-cyan-400/90 uppercase flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping inline-block" />
              <span>XR-3D • FILM</span>
            </div>
            <div className="text-[9px] font-mono text-slate-400 tracking-wider">
              FLUOROSCOPIC TRANSLUCENCY
            </div>
          </div>
        )}

        {/* Loading Spinner */}
        {loading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 pointer-events-none z-10 transition-opacity duration-300">
            <Loader2 className="w-8 h-8 animate-spin text-teal-400" />
            <span className="text-xs text-slate-400 font-medium tracking-wide">Partitioning 3D Anatomy...</span>
          </div>
        )}

        {/* Load Error Message */}
        {loadError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center z-10">
            <span className="text-sm text-rose-400 font-semibold">{loadError}</span>
            <button
              onClick={handleAnimatedClose}
              className="mt-2 px-4 py-1.5 rounded-full text-xs font-bold bg-slate-800 text-slate-200 border border-white/10"
            >
              Close
            </button>
          </div>
        )}

        {/* Lightweight Hover Name Tooltip (English Only, Category-Coded Solid Dot) */}
        {hoveredStructure && (hoveredStructure.titleEn !== selectedStructure?.titleEn) && (
          <div
            className="absolute z-40 pointer-events-none select-none transition-transform duration-75 ease-out"
            style={{
              left: Math.min(
                hoveredStructure.screenX + 16,
                (containerRef.current?.clientWidth || window.innerWidth) - 280
              ),
              top: Math.min(
                hoveredStructure.screenY + 16,
                (containerRef.current?.clientHeight || window.innerHeight) - 48
              ),
            }}
          >
            <div 
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/92 border backdrop-blur-xl shadow-xl shadow-slate-950/80 text-slate-100 whitespace-nowrap animate-in fade-in duration-100 ${
                hoveredStructure.category === "bone"
                  ? "border-yellow-400/40"
                  : hoveredStructure.category === "ligament"
                  ? "border-sky-400/40"
                  : hoveredStructure.category === "fracture_fragment"
                  ? "border-rose-400/40"
                  : "border-indigo-400/40"
              }`}
            >
              {/* Solid Type Indicator Dot (No blinking, color indicates structure type) */}
              <span 
                className={`w-2 h-2 rounded-full shrink-0 ${
                  hoveredStructure.category === "bone"
                    ? "bg-yellow-400 shadow-[0_0_6px_rgba(250,204,21,0.8)]"
                    : hoveredStructure.category === "ligament"
                    ? "bg-sky-400 shadow-[0_0_6px_rgba(56,189,248,0.8)]"
                    : hoveredStructure.category === "fracture_fragment"
                    ? "bg-rose-500 shadow-[0_0_6px_rgba(244,63,94,0.8)]"
                    : "bg-indigo-400 shadow-[0_0_6px_rgba(129,140,248,0.8)]"
                }`}
              />
              <span className="text-xs font-bold tracking-tight text-white drop-shadow-sm">
                {hoveredStructure.titleEn}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* 2-Tier Hierarchical Control Deck: Subregions + Classification Types */}
      <div className="absolute bottom-5 inset-x-0 z-20 flex flex-col items-center gap-2 pointer-events-none px-3">
        {/* Tier 1: Clinical Pearl Card */}
        <div 
          className="max-w-md w-full px-4 py-2 rounded-2xl border backdrop-blur-xl shadow-xl pointer-events-auto text-center transition-all duration-300"
          style={{
            background: "rgba(15, 23, 42, 0.92)",
            borderColor: isPresetIntact 
              ? "rgba(45, 212, 191, 0.35)" 
              : isPerPreset
              ? "rgba(168, 85, 247, 0.45)"
              : isPaPreset
              ? "rgba(6, 182, 212, 0.45)"
              : isSaPreset
              ? "rgba(245, 158, 11, 0.45)"
              : "rgba(239, 68, 68, 0.45)",
            boxShadow: isPresetIntact
              ? "0 6px 20px rgba(0, 0, 0, 0.3)"
              : isPerPreset
              ? "0 8px 24px rgba(168, 85, 247, 0.22)"
              : isPaPreset
              ? "0 8px 24px rgba(6, 182, 212, 0.22)"
              : isSaPreset
              ? "0 8px 24px rgba(245, 158, 11, 0.22)"
              : "0 8px 24px rgba(239, 68, 68, 0.22)",
          }}
        >
          <div className="flex items-center justify-center gap-1.5 mb-0.5">
            <span 
              className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                isPresetIntact
                  ? "bg-teal-400"
                  : isPerPreset
                  ? "bg-purple-400"
                  : isPaPreset
                  ? "bg-cyan-400"
                  : isSaPreset
                  ? "bg-amber-400"
                  : "bg-rose-400"
              }`} 
            />
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-300">
              {isPresetIntact ? "Intact Bone" : activePreset?.badge}
            </span>
          </div>
          <h3 className="text-xs font-black text-slate-100 leading-tight">
            {isPresetIntact ? `Normal ${activeSubregion.name} Alignment` : activePreset?.clinicalTitle}
          </h3>
          {/* Collapsible Clinical Explanation (Full text when expanded — Left-aligned bullet list) */}
          {isPearlExpanded && (
            <div className="mt-2 mb-1 px-2 text-left">
              <ul
                className={`space-y-1.5 text-[11px] font-medium text-slate-200 leading-relaxed list-disc list-outside pl-4 text-left ${
                  isPresetIntact
                    ? "marker:text-teal-400"
                    : isPerPreset
                    ? "marker:text-purple-400"
                    : isPaPreset
                    ? "marker:text-cyan-400"
                    : isSaPreset
                    ? "marker:text-amber-400"
                    : "marker:text-rose-400"
                }`}
              >
                {pearlBullets.map((bullet, idx) => (
                  <li key={idx} className="text-left pl-0.5">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Wide Clickable Strip (พื้นที่กดเป็นแถบกว้าง ไร้กรอบรอบลูกศร) */}
          <button
            type="button"
            onClick={() => setIsPearlExpanded((prev) => !prev)}
            className="w-full flex items-center justify-center py-0.5 mt-0.5 rounded-lg group cursor-pointer hover:bg-white/5 active:bg-white/10 transition-all focus:outline-hidden"
            title={isPearlExpanded ? "Click to collapse description" : "Click to view full description"}
          >
            {isPearlExpanded ? (
              <ChevronUp size={14} className="text-teal-400 group-hover:text-teal-300 transition-transform group-hover:-translate-y-0.5" />
            ) : (
              <ChevronDown size={14} className="text-slate-400 group-hover:text-teal-300 transition-transform group-hover:translate-y-0.5" />
            )}
          </button>

          {/* Dynamic Ligament Integrity Indicator */}
          {isClavicle && showLigaments && !isXRayMode && (
            <div className="mt-1 pt-1 border-t border-white/10 flex items-center justify-center gap-1.5 text-[10px] flex-wrap">
              <span className="text-slate-400 font-bold text-[9px] uppercase tracking-wider">Ligaments:</span>
              {activeSubregion.id === "ac-joint" ? (
                <>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-800/80 border border-emerald-500/20 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-slate-300 font-semibold">CA:</span>
                    <span className="text-emerald-300 font-medium">Intact</span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-800/80 border border-white/10 shadow-xs">
                    <span className={`w-1.5 h-1.5 rounded-full ${isACTorn ? "bg-rose-500 animate-pulse" : "bg-emerald-400"}`} />
                    <span className="text-slate-300 font-semibold">AC:</span>
                    <span className={isACTorn ? "text-rose-300 font-bold" : "text-emerald-300 font-medium"}>
                      {isACTorn ? "Torn" : "Intact"}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-800/80 border border-white/10 shadow-xs">
                    <span className={`w-1.5 h-1.5 rounded-full ${isCCTorn ? "bg-rose-500 animate-pulse" : (isPresetType2 ? "bg-amber-400" : "bg-emerald-400")}`} />
                    <span className="text-slate-300 font-semibold">CC (Conoid+Trap):</span>
                    <span className={isCCTorn ? "text-rose-300 font-bold" : (isPresetType2 ? "text-amber-300 font-medium" : "text-emerald-300 font-medium")}>
                      {isCCTorn ? "Torn" : (isPresetType2 ? "Sprained" : "Intact")}
                    </span>
                  </div>
                </>
              ) : activeSubregion.id === "distal" ? (
                <>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-800/80 border border-emerald-500/20 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-slate-300 font-semibold">CA & AC:</span>
                    <span className="text-emerald-300 font-medium">Intact</span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-800/80 border border-white/10 shadow-xs">
                    <span className={`w-1.5 h-1.5 rounded-full ${selectedPresetId === "neer_type2b_distal" ? "bg-rose-500 animate-pulse" : (selectedPresetId === "neer_type5_distal" ? "bg-amber-400" : "bg-emerald-400")}`} />
                    <span className="text-slate-300 font-semibold">Conoid:</span>
                    <span className={selectedPresetId === "neer_type2b_distal" ? "text-rose-300 font-bold" : (selectedPresetId === "neer_type5_distal" ? "text-amber-300 font-medium" : "text-emerald-300 font-medium")}>
                      {selectedPresetId === "neer_type2b_distal" ? "Torn" : (selectedPresetId === "neer_type5_distal" ? "Avulsed (Shard)" : "Intact")}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-800/80 border border-white/10 shadow-xs">
                    <span className={`w-1.5 h-1.5 rounded-full ${selectedPresetId === "neer_type5_distal" ? "bg-amber-400" : "bg-emerald-400"}`} />
                    <span className="text-slate-300 font-semibold">Trapezoid:</span>
                    <span className={selectedPresetId === "neer_type5_distal" ? "text-amber-300 font-medium" : "text-emerald-300 font-medium"}>
                      {selectedPresetId === "neer_type5_distal" ? "Avulsed (Shard)" : "Intact"}
                    </span>
                  </div>
                </>
              ) : (
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-800/80 border border-emerald-500/20 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="text-slate-300 font-semibold">AC & CC:</span>
                  <span className="text-emerald-300 font-medium">100% Intact (Anchoring Distal Fragment)</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Tier 2: Classification Types — Hierarchical for Ankle (Lauge-Hansen), Flat for Others */}
        <div 
          className="flex items-center gap-1 p-1 rounded-full border backdrop-blur-xl shadow-xl pointer-events-auto overflow-x-auto no-scrollbar max-w-full"
          style={{
            background: "rgba(15, 23, 42, 0.90)",
            borderColor: "rgba(255, 255, 255, 0.12)",
          }}
        >
          {isAnkleDistal ? (
            /* ── Ankle Hierarchical Lauge-Hansen Picker ── */
            selectedMechanismGroup === null ? (
              /* Level 1: Mechanism Group Selector */
              <>
                {/* Normal Anatomy button */}
                <button
                  onClick={() => {
                    const normalPreset = activeSubregion.presets.find(p => p.id === "ankle_intact");
                    setSelectedPresetId(normalPreset?.id ?? "intact");
                    setSelectedMechanismGroup(null);
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer active:scale-95 flex items-center gap-1.5 ${
                    isPresetIntact
                      ? "bg-teal-500/25 text-teal-200 border border-teal-500/50 shadow-sm"
                      : "text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent"
                  }`}
                  title="Normal ankle anatomy with intact mortise"
                >
                  <RotateCcw size={11} className={isPresetIntact ? "text-teal-300" : "text-slate-400"} />
                  Normal
                </button>

                <div className="w-px h-3.5 bg-white/15 mx-0.5" />

                {/* SER Mechanism Group */}
                <button
                  onClick={() => {
                    setSelectedMechanismGroup("ser");
                    if (!selectedPresetId.startsWith("lh_ser_")) {
                      const firstSer = activeSubregion.presets.find(p => p.id === "lh_ser_1");
                      if (firstSer) setSelectedPresetId(firstSer.id);
                    }
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer active:scale-95 flex items-center gap-1.5 ${
                    selectedPresetId.startsWith("lh_ser_")
                      ? "bg-rose-500/25 text-rose-200 border border-rose-500/50 shadow-sm"
                      : "text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent"
                  }`}
                  title="Supination-External Rotation (SER) mechanism — 4 progressive stages"
                >
                  {selectedPresetId.startsWith("lh_ser_") && (
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  )}
                  SER
                  <span className="text-[9px] text-slate-500 font-medium">(I→IV)</span>
                  <ChevronRight size={12} className="text-slate-500" />
                </button>

                {/* SA Mechanism Group */}
                <button
                  onClick={() => {
                    setSelectedMechanismGroup("sa");
                    if (!selectedPresetId.startsWith("lh_sa_")) {
                      const firstSa = activeSubregion.presets.find(p => p.id === "lh_sa_1");
                      if (firstSa) setSelectedPresetId(firstSa.id);
                    }
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer active:scale-95 flex items-center gap-1.5 ${
                    selectedPresetId.startsWith("lh_sa_")
                      ? "bg-amber-500/25 text-amber-200 border border-amber-500/50 shadow-sm"
                      : "text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent"
                  }`}
                  title="Supination-Adduction (SA) mechanism — 2 progressive stages"
                >
                  {selectedPresetId.startsWith("lh_sa_") && (
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  )}
                  SA
                  <span className="text-[9px] text-slate-500 font-medium">(I→II)</span>
                  <ChevronRight size={12} className="text-slate-500" />
                </button>

                {/* PER Mechanism Group */}
                <button
                  onClick={() => {
                    setSelectedMechanismGroup("per");
                    if (!selectedPresetId.startsWith("lh_per_")) {
                      const firstPer = activeSubregion.presets.find(p => p.id === "lh_per_1");
                      if (firstPer) setSelectedPresetId(firstPer.id);
                    }
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer active:scale-95 flex items-center gap-1.5 ${
                    selectedPresetId.startsWith("lh_per_")
                      ? "bg-purple-500/25 text-purple-200 border border-purple-500/50 shadow-sm"
                      : "text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent"
                  }`}
                  title="Pronation-External Rotation (PER) mechanism — 4 progressive stages"
                >
                  {selectedPresetId.startsWith("lh_per_") && (
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  )}
                  PER
                  <span className="text-[9px] text-slate-500 font-medium">(I→IV)</span>
                  <ChevronRight size={12} className="text-slate-500" />
                </button>

                {/* PA Mechanism Group */}
                <button
                  onClick={() => {
                    setSelectedMechanismGroup("pa");
                    if (!selectedPresetId.startsWith("lh_pa_")) {
                      const firstPa = activeSubregion.presets.find(p => p.id === "lh_pa_1");
                      if (firstPa) setSelectedPresetId(firstPa.id);
                    }
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer active:scale-95 flex items-center gap-1.5 ${
                    selectedPresetId.startsWith("lh_pa_")
                      ? "bg-cyan-500/25 text-cyan-200 border border-cyan-500/50 shadow-sm"
                      : "text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent"
                  }`}
                  title="Pronation-Abduction (PA) mechanism — 3 progressive stages"
                >
                  {selectedPresetId.startsWith("lh_pa_") && (
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  )}
                  PA
                  <span className="text-[9px] text-slate-500 font-medium">(I→III)</span>
                  <ChevronRight size={12} className="text-slate-500" />
                </button>
              </>
            ) : (
              /* Level 2: Stage Progression within Selected Mechanism */
              <>
                {/* Back button to return to mechanism groups & reset to intact */}
                <button
                  onClick={() => {
                    const normalPreset = activeSubregion.presets.find(p => p.id === "ankle_intact");
                    setSelectedPresetId(normalPreset?.id ?? "intact");
                    setSelectedMechanismGroup(null);
                    setSelectedStructure(null);
                    if (markerMeshRef.current) markerMeshRef.current.visible = false;
                  }}
                  className="px-2.5 py-1 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer active:scale-95 flex items-center gap-1 text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent"
                  title="Back to mechanism groups and reset to normal anatomy"
                >
                  <ChevronLeft size={13} className="text-slate-400" />
                  <span>Groups</span>
                </button>

                <div className="w-px h-3.5 bg-white/15 mx-0.5" />

                {/* Mechanism group label */}
                <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 px-1 select-none">
                  {selectedMechanismGroup?.toUpperCase()}
                </span>

                {/* Stage buttons with progression arrows */}
                {activeSubregion.presets
                  .filter(p => p.id.startsWith(`lh_${selectedMechanismGroup}_`))
                  .map((preset, idx) => {
                    const isSelected = selectedPresetId === preset.id;
                    const stageNum = Number(preset.id.split("_").pop()) - 1;
                    const stageLabels = selectedMechanismGroup === "ser" || selectedMechanismGroup === "per"
                      ? ["I", "II", "III", "IV"]
                      : selectedMechanismGroup === "pa"
                      ? ["I", "II", "III"]
                      : ["I", "II"];
                    const stageLabel = stageLabels[stageNum] || `${stageNum + 1}`;
                    
                    const activeColorClasses = selectedMechanismGroup === "ser"
                      ? "bg-rose-500/25 text-rose-200 border border-rose-500/50 shadow-sm"
                      : selectedMechanismGroup === "sa"
                      ? "bg-amber-500/25 text-amber-200 border border-amber-500/50 shadow-sm"
                      : selectedMechanismGroup === "per"
                      ? "bg-purple-500/25 text-purple-200 border border-purple-500/50 shadow-sm"
                      : "bg-cyan-500/25 text-cyan-200 border border-cyan-500/50 shadow-sm";

                    const dotColorClass = selectedMechanismGroup === "ser"
                      ? "bg-rose-400"
                      : selectedMechanismGroup === "sa"
                      ? "bg-amber-400"
                      : selectedMechanismGroup === "per"
                      ? "bg-purple-400"
                      : "bg-cyan-400";

                    return (
                      <React.Fragment key={preset.id}>
                        {idx > 0 && (
                          <span className="text-slate-400/80 text-xs font-bold select-none px-0.5">→</span>
                        )}
                        <button
                          onClick={() => setSelectedPresetId(preset.id)}
                          className={`px-3 py-1 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer active:scale-95 flex items-center gap-1.5 ${
                            isSelected
                              ? activeColorClasses
                              : "text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent"
                          }`}
                          title={preset.clinicalTitle}
                        >
                          {isSelected && (
                            <span className={`w-1.5 h-1.5 rounded-full ${dotColorClass}`} />
                          )}
                          Stage {stageLabel}
                        </button>
                      </React.Fragment>
                    );
                  })}
              </>
            )
          ) : (
            /* ── Non-Ankle: Original Flat Preset Picker ── */
            <>
              {/* Button to Revert to Intact Bone */}
              <button
                onClick={() => setSelectedPresetId("intact")}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer active:scale-95 flex items-center gap-1.5 ${
                  selectedPresetId === "intact"
                    ? "bg-teal-500/25 text-teal-200 border border-teal-500/50 shadow-sm"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent"
                }`}
                title="Revert to unbroken intact bone"
              >
                <RotateCcw size={11} className={selectedPresetId === "intact" ? "text-teal-300" : "text-slate-400"} />
                Intact
              </button>

              <div className="w-px h-3.5 bg-white/15 mx-0.5" />

              {/* Classification Specific Buttons (e.g. Garden I, II, III, IV or Evans) */}
              {activeSubregion.presets.map((preset) => {
                const isSelected = selectedPresetId === preset.id;
                return (
                  <button
                    key={preset.id}
                    onClick={() => setSelectedPresetId(preset.id)}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer active:scale-95 flex items-center gap-1.5 ${
                      isSelected
                        ? "bg-rose-500/25 text-rose-200 border border-rose-500/50 shadow-sm"
                        : "text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent"
                    }`}
                  >
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
                    )}
                    {preset.name}
                  </button>
                );
              })}
            </>
          )}
        </div>

        {/* Tier 3: Subregions Selector (Femoral Neck, Intertrochanter, Subtrochanter) */}
        <div 
          className="flex items-center gap-1 p-1 rounded-2xl border backdrop-blur-xl shadow-2xl pointer-events-auto overflow-x-auto no-scrollbar max-w-full"
          style={{
            background: "rgba(10, 15, 26, 0.95)",
            borderColor: "rgba(255, 255, 255, 0.15)",
          }}
        >
          {availableSubregions.map((subregion) => {
            const isSelected = selectedSubregionId === subregion.id;
            return (
              <button
                key={subregion.id}
                onClick={() => handleSelectSubregion(subregion)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-black tracking-tight transition-all whitespace-nowrap cursor-pointer active:scale-95 flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-teal-500 text-slate-950 shadow-md shadow-teal-500/30"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {subregion.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
