import React, { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { X, Loader2, RotateCcw, Maximize2, Minimize2 } from "lucide-react";

export interface ClassificationPreset {
  id: string;
  name: string;
  badge: string;
  clinicalTitle: string;
  clinicalPearl: string;
  cutCenter?: [number, number, number];
  cutNormal?: [number, number, number];
  partitionMode?: "bipartite" | "intertroch_comminuted" | "subtroch_bipartite" | "subtroch_lt" | "subtroch_fossa" | "subtroch_comminuted" | "shaft_bipartite" | "shaft_butterfly_small" | "shaft_butterfly_med" | "shaft_butterfly_large" | "shaft_segmental" | "distal_supracondylar" | "distal_unicondylar_lat" | "distal_hoffa" | "distal_bicondylar";
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
  viewOffsetRatio?: number;
  presets: ClassificationPreset[];
}

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
        clinicalPearl: "หัวกระดูกเอียง Valgus (มุม Trabeculae > 160°) กระดูกคอด้านล่างอัดแน่นเข้าหากัน (Impacted) เสถียรที่สุด เสี่ยง AVN ต่ำ",
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
        clinicalPearl: "รอยหักทะลุตลอดแนวสองฝั่ง (Complete) แต่ไม่มีการเคลื่อนหรือบิดมุม แนวเส้น Trabeculae ยังเรียงตัวต่อเนื่องปกติ (~160°)",
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
        clinicalPearl: "หัวกระดูกยุบพับเป็น Varus (มุม Trabeculae < 160°) บิดคว่ำไปด้านหลัง (Retroversion) Posterior retinacular hinge ยังยึดบางส่วน",
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
        clinicalPearl: "หัวกระดูกหลุดแยกขาดจากคออย่างสิ้นเชิง ก้านกระดูกถูกกล้ามเนื้อดึงสั้นลง (Shortening) และหมุนออกนอก (External rotation) เสี่ยง AVN สูงมาก",
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
        clinicalPearl: "รอยหัก 2 ชิ้นผ่านแนว Intertrochanteric โดยไม่มีการเคลื่อนตัว ผนัง Posteromedial (Calcar) สมบูรณ์ ไม่ยุบตัว สามารถรับแรงกดแนวแกนได้ดี เสถียรที่สุด",
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
        clinicalPearl: "กระดูกหักเคลื่อนตัว 2 ชิ้น (หรือ 3 ชิ้นย่อย) ที่ผนังด้านในแตกน้อย เมื่อดึงจัดกระดูก (Reduction) ขอบ Medial cortex ชนประกับกันได้มั่นคง สามารถลงน้ำหนักได้เร็ว",
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
        clinicalPearl: "กระดูกหัก 3 ชิ้นโดย Lesser Trochanter หลุดแยกขาด (Avulsion) สูญเสียเสาค้ำ Posteromedial ยันไม่อยู่ เกิด Varus collapse และขาสั้นลงอย่างรุนแรง",
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
        clinicalPearl: "กระดูกแตกละเอียดกระจาย 4 ชิ้นใหญ่หลุดแยกขาดจากกัน (Head-neck, Shaft, Greater Trochanter, Lesser Trochanter) ร่วมกับ Lateral wall blowout ผนังด้านข้างแตกกระจาย เสถียรภาพต่ำสุด ห้ามใส่ DHS เด็ดขาด ต้องใช้ CMN หรือ TSP",
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
        clinicalPearl: "แนวกระดูกหักเฉียงย้อนกลับ (จากบน-ใน ลงล่าง-นอก ทะลุผนังด้านข้างใต้ต่อ GT) กล้ามเนื้อ Adductors ดึงก้านกระดูกเลื่อนสไลด์เข้าด้านใน ห้ามใส่ DHS เด็ดขาด ต้องใช้ CMN",
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
        clinicalPearl: "หักใต้ Lesser Trochanter; Fossa และปุ่ม LT สมบูรณ์; แรงดึงกล้ามเนื้อคลาสสิก: ชิ้นบนโดน Iliopsoas ดึงงอ (Flexion) + Gluteus Medius ดึงกาง (Abduction) + หมุนออกนอก, ส่วน Adductors ดึงชิ้นล่างหุบเข้าใน (Adduction) และขาสั้นลง; รักษาง่ายด้วย Standard Antegrade IMN",
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
        clinicalPearl: "รอยหักลามเข้า Lesser Trochanter หลุดแยกขาด (Avulsion) สูญเสียเสาค้ำ Posteromedial (Medial Buttress) ไร้แรงพยุงด้านใน เกิดแรงดัด Varus มหาศาล; จุดแทง Piriformis Fossa ยังดีอยู่; ต้องใช้ Cephalomedullary Reconstruction Nail ที่มีสกรูกลุ่มคู่เข้าหัวสะโพก",
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
        clinicalPearl: "รอยหักพาดเฉียงลามขึ้นบนเข้าสู่ Piriformis Fossa (Trochanteric Fossa) จุดแทงแกนเหล็กพังทลาย แต่ Lesser Trochanter ยังสมบูรณ์; ห้ามแทงแกนเหล็กผ่าน Piriformis Fossa เด็ดขาด (จะทำให้รอยแตกปริแยกเข้าคอกระดูกสะโพก); ต้องใช้ Trochanteric Entry Nail หรือ 95° Blade Plate / PFLP",
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
        clinicalPearl: "รุนแรงและไม่มั่นคงที่สุด (Most Severe & Unstable) แตกละเอียดทั้งจุดแทง Piriformis Fossa และปุ่ม Lesser Trochanter ร่วมกับผนังด้านข้างแตกเป็นชิ้นปลิว (Lateral Butterfly Shard); เสี่ยงสูงสุดต่อกระดูกไม่ติด (Nonunion) และเหล็กหัก; ต้องใช้ Long PFLP หรือ Long Trochanteric CMN ร่วมกับ Cerclage Cables",
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
        clinicalPearl: "กระดูกหักจากผลข้างเคียงยากลุ่ม Bisphosphonate / Denosumab ระยะยาว; รอยหักแนวขวางล้วน (Transverse 'Chalk-stick') ร่วมกับขอบกระดูกด้านนอกหนาตัวและมีเดือยแหลม (Lateral Cortical Beaking); กระดูกติดช้ามาก (Delayed union) ต้องรักษาด้วย Full-Length Antegrade IMN",
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
        clinicalPearl: "หัก 2 ชิ้นแบบเรียบ (Transverse/Oblique) ไม่มีเศษแตกเลย ผนังกระดูกประกบกันได้ 100% มีความมั่นคงสูงสุดทั้งแนวหมุนและความยาวหลังดึงเข้าที่; รักษาด้วย Reamed Locked IMN สามารถลงน้ำหนักเดินได้ทันที (WBAT)",
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
        clinicalPearl: "มีชิ้นกระดูกปีกผีเสื้อ (Butterfly fragment) ขนาดเล็ก (<25% ของความกว้างแกน) ผนังกระดูกหลักยังสัมผัสกัน >75% มีความมั่นคงสูง ห้ามเปิดแผลเลาะเยื่อหุ้มรอบชิ้นปีกผีเสื้อเพื่อรักษาเลือดมาเลี้ยง; ดามแกนเหล็ก Reamed Locked IMN",
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
        clinicalPearl: "ชิ้นกระดูกปีกผีเสื้อขนาดปานกลาง (กว้างไม่เกิน 50% ของแกนกระดูก) ผนังหลักยังสัมผัสกัน 50-75% ยังคงความมั่นคงต่อการหดสั้นได้เมื่อจัดกระดูกเข้าที่; ต้องล็อคสกรูหัวท้ายแบบ Static Interlocking เพื่อคุมแนวหมุน",
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
        clinicalPearl: "ชิ้นกระดูกปีกผีเสื้อขนาดใหญ่ (>50% ของความกว้างแกน) ผนังกระดูกหลักสัมผัสกันน้อยกว่า 50% ไม่มั่นคง (Unstable) ทั้งความยาวและมุมหมุน เสี่ยงต่อกระดูกรูดทรุดสั้น (Telescoping); ห้ามทำ Dynamic Locking เด็ดขาด ต้องใช้ Static Locked IMN",
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
        clinicalPearl: "แตกละเอียดรอบวงสมบูรณ์ (0% Cortical Contact) หรือมีท่อนกระดูกลอยอิสระหลายท่อน (Segmental/Flail) ไม่มั่นคงขั้นสูงสุด เสี่ยงขาสั้นพิการและ Compartment Syndrome; ต้องใช้ Bridge Fixation ด้วย Long Statically Locked IMN หรือ Damage Control Ex-Fix",
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
    cameraTarget: [0.05, -1.35, -0.05],
    cameraDistance: 3.0,
    viewOffsetRatio: 0.18,
    presets: [
      {
        id: "distal_type1",
        name: "Type I",
        badge: "Supracondylar (33-A)",
        clinicalTitle: "Type I: Supracondylar Extra-articular (AO 33-A)",
        clinicalPearl: "รอยหักเหนือปุ่มข้อเข่า (Metaphysis) ผิวข้อสมบูรณ์; กล้ามเนื้อ Gastrocnemius ดึงก้อน Condyles กระดกแอ่นไปด้านหลัง (Apex Posterior / Recurvatum) เสี่ยงกดทับ Popliteal Artery; รักษาด้วย Retrograde IMN หรือ Lateral DFLP",
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
        clinicalPearl: "หักเข้าข้อปุ่มเดียวแนว Sagittal ปุ่มนอก (Lateral Condyle) หลุดแยก ในขณะที่ปุ่มในยังติดกับแกนกระดูก; ผิวข้อสะดุด > 1-2 มม. ต้องทำ Anatomical Reduction + Lag Screws และ Buttress Plate",
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
        clinicalPearl: "รอยหักเฉือนแนว Coronal ด้านหลังของปุ่มนอก (Lateral Condyle) จากแรงกระแทกขณะงอเข่า >90°; มองไม่เห็นในภาพ AP ต้องทำ 3D CT scan เสมอ; ยึดด้วย Headless Compression Screws หัวจมใต้ผิวข้อ",
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
        clinicalPearl: "หักเข้าข้อสองปุ่มแตกแยกรูปตัว T หรือ Y หลุดจากแกนกระดูกต้นขา; ต้องจัดผิวข้อเข่า 2 ปุ่มให้เรียบสนิทเป็นก้อนเดียวด้วย Lag Screws ก่อน แล้วดามเชื่อมกับแกนกระดูกด้วย Lateral DFLP",
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
        clinicalPearl: "แตกละเอียดทั้งในผิวข้อและส่วน Metaphysis สูญเสียความมั่นคงอย่างสิ้นเชิง; เสี่ยงขาสั้นและข้อเข่าเสื่อมรุนแรง; ในคนแก่กระดูกพรุนพิจารณาทำ Distal Femoral Replacement (DFR) เพื่อให้ลงน้ำหนักได้ทันที",
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

interface Bone3DViewerModalProps {
  modelUrl: string;
  boneName: string;
  initialRegionId?: string;
  darkMode?: boolean;
  onClose: () => void;
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

  // Subregion selection state (defaults to initialRegionId or femoral-neck)
  const [selectedSubregionId, setSelectedSubregionId] = useState<string>(() => {
    if (initialRegionId) {
      const match = FEMUR_SUBREGIONS.find((s) => s.id === initialRegionId || (s.id === "distal" && initialRegionId === "distal-femur"));
      if (match) return match.id;
    }
    return "femoral-neck";
  });

  const activeSubregion = FEMUR_SUBREGIONS.find((s) => s.id === selectedSubregionId) ?? FEMUR_SUBREGIONS[0];

  // Classification Type selection state within active subregion ("intact" or preset.id)
  const [selectedPresetId, setSelectedPresetId] = useState<string>(() => {
    return activeSubregion.presets[0]?.id ?? "intact";
  });

  const activePreset = activeSubregion.presets.find((p) => p.id === selectedPresetId);

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

  // Stored original vertex data for instant partition recalculation on subregion change
  const rawVerticesRef = useRef<THREE.Vector3[]>([]);
  const rawNormalsRef = useRef<THREE.Vector3[]>([]);

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

    // Preserve the user's current viewing orientation (angle/azimuth) relative to target
    const offset = currentCamPos.clone().sub(currentTarget);
    const currentDist = offset.length();
    const dir = currentDist > 0.001 ? offset.normalize() : new THREE.Vector3(0, 0, 1);

    const targetDist = subregion.cameraDistance ?? 3.0;
    const targetCamPos = targetVec.clone().addScaledVector(dir, targetDist);

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
    };
  }, []);

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

    const targetDist = 5.3;
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
  }, []);

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

  // Helper to cleanly replace or clear a mesh inside a group
  const updateGroupMesh = useCallback((
    group: THREE.Group,
    meshRef: React.MutableRefObject<THREE.Mesh | null>,
    pos: number[],
    norm: number[],
    mat: THREE.Material,
    meshOffset: THREE.Vector3
  ) => {
    if (meshRef.current) {
      group.remove(meshRef.current);
      meshRef.current.geometry.dispose();
      meshRef.current = null;
    }
    if (!pos.length) return;
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    if (norm.length) geom.setAttribute("normal", new THREE.Float32BufferAttribute(norm, 3));
    geom.computeVertexNormals();

    const mesh = new THREE.Mesh(geom, mat);
    mesh.position.copy(meshOffset);
    group.add(mesh);
    meshRef.current = mesh;
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
    const isDistalSubregion = subregion.id === "distal" || subregion.id === "distal-femur";
    const effectiveMode = preset?.partitionMode ?? (
      subregion.id === "intertrochanteric" && preset?.id !== "evans_reversed_oblique"
        ? "intertroch_comminuted"
        : isDistalSubregion
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

    const boneMat = new THREE.MeshStandardMaterial({
      color: 0xF7F4EC,
      roughness: 0.35,
      metalness: 0.04,
      side: THREE.DoubleSide,
    });

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

      if (effectiveMode === "intertroch_comminuted") {
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
      } else {
        // Bipartite mode (Femoral neck, Evans V, Type IA, AFF, Shaft Type 0)
        if (isAbove) {
          pushTri(hnPos, hnNorm, i);
        } else {
          pushTri(distPos, distNorm, i);
        }
      }
    }

    // 1. Proximal Fragment (Head & Neck or unified proximal block)
    proximalPivotGroup.position.copy(cutCenter);
    updateGroupMesh(proximalPivotGroup, proximalMeshRef, hnPos, hnNorm, boneMat, cutCenter.clone().negate());

    // 2. Greater Trochanter / Fossa Fragment
    const gtCentroid = new THREE.Vector3(-43.3, 194.6, -7.4);
    gtBasePosRef.current.copy(gtCentroid.clone().sub(cutCenter));
    gtPivotGroup.position.copy(gtBasePosRef.current);
    updateGroupMesh(gtPivotGroup, gtMeshRef, gtPos, gtNorm, boneMat, gtCentroid.clone().negate());

    // 3. Main Shaft / Condyle Block
    const distBase = isDistalSubregion ? new THREE.Vector3(10, -170, 0) : new THREE.Vector3(0, 0, 0);
    distalGroup.position.copy(distBase);
    updateGroupMesh(distalGroup, distalMeshRef, distPos, distNorm, boneMat, distBase.clone().negate());

    // 4. Lesser Trochanter Fragment
    const ltCentroid = new THREE.Vector3(-7.4, 138.9, -16.1);
    ltBasePosRef.current.copy(ltCentroid);
    ltPivotGroup.position.copy(ltBasePosRef.current);
    updateGroupMesh(ltPivotGroup, ltMeshRef, ltPos, ltNorm, boneMat, ltCentroid.clone().negate());

    // 5. Lateral Wall Butterfly Shard / Segmental Cylinder / Lateral Condyle / Hoffa Shard
    let shardCentroid: THREE.Vector3;
    if (effectiveMode === "distal_hoffa") {
      shardCentroid = new THREE.Vector3(-7.3, -208.3, -14.9);
    } else if (effectiveMode === "distal_unicondylar_lat" || effectiveMode === "distal_bicondylar") {
      shardCentroid = new THREE.Vector3(-7.0, -209.1, -5.1);
    } else if (effectiveMode === "shaft_segmental") {
      shardCentroid = new THREE.Vector3(-7.5, -6.6, 12.1);
    } else if (effectiveMode.startsWith("shaft_butterfly")) {
      shardCentroid = new THREE.Vector3(-18.5, -5.4, 13.4);
    } else if (effectiveMode === "subtroch_comminuted") {
      shardCentroid = new THREE.Vector3(-30.1, 106.6, -2.4);
    } else {
      shardCentroid = new THREE.Vector3(-46.1, 164.0, -10.3);
    }
    shardBasePosRef.current.copy(shardCentroid.clone().sub(distBase));
    shardPivotGroup.position.copy(shardBasePosRef.current);
    updateGroupMesh(shardPivotGroup, shardMeshRef, shardPos, shardNorm, boneMat, shardCentroid.clone().negate());
  }, [updateGroupMesh]);

  // When subregion changes, re-partition bone, reset preset, and glide camera to focused subregion (+40% zoom)
  useEffect(() => {
    const firstPreset = activeSubregion.presets[0];
    setSelectedPresetId(firstPreset?.id ?? "intact");
    partitionBoneMesh(activeSubregion, firstPreset);
    triggerCameraFocus(activeSubregion);
  }, [selectedSubregionId, activeSubregion, partitionBoneMesh, triggerCameraFocus]);

  // Update target displacement/angulation and partition plane when preset changes
  useEffect(() => {
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
    camera.position.set(0, 0, 4.3);
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
    controls.enablePan = false;
    controls.touches = {
      ONE: THREE.TOUCH.ROTATE,
      TWO: THREE.TOUCH.DOLLY_PAN,
    };
    controlsRef.current = controls;

    // Yield camera transition immediately when user begins manual orbit/zoom gesture
    controls.addEventListener("start", () => {
      if (cameraTransitionRef.current) {
        cameraTransitionRef.current.active = false;
      }
    });

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

    // 6. Model Pivot Wrapper
    let animationFrameId: number;
    const loader = new OBJLoader();

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
    proximalPivotGroup.add(gtPivotGroup);
    gtPivotGroupRef.current = gtPivotGroup;

    const ltPivotGroup = new THREE.Group();
    distalGroup.add(ltPivotGroup);
    ltPivotGroupRef.current = ltPivotGroup;

    const shardPivotGroup = new THREE.Group();
    distalGroup.add(shardPivotGroup);
    shardPivotGroupRef.current = shardPivotGroup;

    // Entrance animation variables
    let finalTargetScale = 1.0;
    let isPoppingIn = false;
    let popStartTime = 0;
    const popDuration = 360;

    loader.load(
      modelUrl,
      (object) => {
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
        let originalMesh: THREE.Mesh | null = null;
        object.traverse((child) => {
          if ((child as THREE.Mesh).isMesh && !originalMesh) {
            originalMesh = child as THREE.Mesh;
          }
        });

        if (!originalMesh) return;

        const geom = (originalMesh as THREE.Mesh).geometry;
        const posAttr = geom.attributes.position;
        const normAttr = geom.attributes.normal;

        const rawVerts: THREE.Vector3[] = [];
        const rawNorms: THREE.Vector3[] = [];

        for (let i = 0; i < posAttr.count; i++) {
          const v = new THREE.Vector3().fromBufferAttribute(posAttr, i).applyMatrix4((originalMesh as THREE.Mesh).matrixWorld);
          rawVerts.push(v);
          if (normAttr) {
            const n = new THREE.Vector3().fromBufferAttribute(normAttr, i);
            rawNorms.push(n);
          }
        }

        rawVerticesRef.current = rawVerts;
        rawNormalsRef.current = rawNorms;

        // Perform initial partitioning for active subregion and preset
        partitionBoneMesh(activeSubregionRef.current, activePresetRef.current);

        // Initial setup for entrance animation
        modelWrapper.scale.setScalar(finalTargetScale * 0.45);
        modelWrapper.position.set(0, 0, -1.8);
        modelWrapper.rotation.y = -0.2;

        isPoppingIn = true;
        popStartTime = performance.now();

        // Focus camera
        camera.position.set(0, 0, 4.3);
        camera.lookAt(0, 0, 0);
        controls.target.set(0, 0, 0);
        controls.update();

        setLoading(false);

        // Glide camera into active subregion right as the bone pops into view
        setTimeout(() => {
          triggerCameraFocus(activeSubregionRef.current, 520);
        }, 100);
      },
      undefined,
      (err) => {
        console.error("Error loading 3D OBJ model:", err);
        setLoadError("Failed to load 3D model");
        setLoading(false);
      }
    );

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

      // Smooth camera glide to active subregion (+40% magnification, centered) or whole bone
      const camTransition = cameraTransitionRef.current;
      if (camTransition && camTransition.active) {
        const elapsed = performance.now() - camTransition.startTime;
        const progress = Math.min(1, elapsed / camTransition.duration);
        // Snappy cubic ease-out: brisk start, buttery soft landing with zero bounce/overshoot
        const ease = 1 - Math.pow(1 - progress, 3);

        controls.target.lerpVectors(camTransition.startTarget, camTransition.endTarget, ease);
        camera.position.lerpVectors(camTransition.startCamPos, camTransition.endCamPos, ease);
        camera.lookAt(controls.target);

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
        const cutCenter = activePresetRef.current?.cutCenter ?? activeSubregionRef.current.cutCenter;
        const targetX = cutCenter[0] + currentProximalPos.current.x;
        const targetY = cutCenter[1] + currentProximalPos.current.y;
        const targetZ = cutCenter[2] + currentProximalPos.current.z;

        proxPivot.position.x = THREE.MathUtils.lerp(proxPivot.position.x, targetX, 0.12);
        proxPivot.position.y = THREE.MathUtils.lerp(proxPivot.position.y, targetY, 0.12);
        proxPivot.position.z = THREE.MathUtils.lerp(proxPivot.position.z, targetZ, 0.12);
      }

      if (distGroup) {
        const isDistal = activeSubregionRef.current.id === "distal" || activeSubregionRef.current.id === "distal-femur";
        const distBase = isDistal ? new THREE.Vector3(10, -170, 0) : new THREE.Vector3(0, 0, 0);

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
      controls.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
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
    };
  }, [modelUrl, partitionBoneMesh, triggerCameraFocus]);

  return (
    <div 
      className={`fixed inset-0 z-[99999] flex flex-col select-none overflow-hidden transition-all duration-250 ease-out ${
        isEntering || isClosing
          ? "bg-slate-950/0 backdrop-blur-none opacity-0"
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
        {/* Bone Title Pill */}
        <div className="flex items-center gap-2.5 pointer-events-auto">
          <span className="text-[11px] font-black tracking-wider uppercase px-2.5 py-1 rounded-full border flex items-center gap-1.5 backdrop-blur-md bg-teal-950/40 border-teal-500/30 text-teal-300 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            3D Anatomy
          </span>
          <h1 className="text-base font-black tracking-tight text-slate-100 drop-shadow-md">
            {boneName}
          </h1>
        </div>

        {/* Actions: Whole Bone View Toggle + Minimal Close Button */}
        <div className="flex items-center gap-2 pointer-events-auto">
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
            title={isWholeBoneView ? "Zoom back in to active subregion" : "View entire femur bone"}
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

      {/* 3D WebGL Canvas Container: Edge-to-edge fullscreen */}
      <div 
        ref={containerRef} 
        className="w-full h-full relative cursor-grab active:cursor-grabbing touch-none"
      >
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
      </div>

      {/* 2-Tier Hierarchical Control Deck: Subregions + Classification Types */}
      <div className="absolute bottom-5 inset-x-0 z-20 flex flex-col items-center gap-2 pointer-events-none px-3">
        {/* Tier 1: Clinical Pearl Card */}
        <div 
          className="max-w-md w-full px-4 py-2 rounded-2xl border backdrop-blur-xl shadow-xl pointer-events-auto text-center transition-all duration-300"
          style={{
            background: "rgba(15, 23, 42, 0.92)",
            borderColor: selectedPresetId === "intact" 
              ? "rgba(45, 212, 191, 0.35)" 
              : "rgba(239, 68, 68, 0.45)",
            boxShadow: selectedPresetId === "intact"
              ? "0 6px 20px rgba(0, 0, 0, 0.3)"
              : "0 8px 24px rgba(239, 68, 68, 0.22)",
          }}
        >
          <div className="flex items-center justify-center gap-1.5 mb-0.5">
            <span 
              className={`w-1.5 h-1.5 rounded-full ${
                selectedPresetId === "intact" ? "bg-teal-400" : "bg-rose-500 animate-pulse"
              }`} 
            />
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-300">
              {selectedPresetId === "intact" ? "Intact Bone" : activePreset?.badge}
            </span>
          </div>
          <h3 className="text-xs font-black text-slate-100 mb-0.5">
            {selectedPresetId === "intact" ? `Normal ${activeSubregion.name} Alignment` : activePreset?.clinicalTitle}
          </h3>
          <p className="text-[11px] font-medium text-slate-300 leading-snug">
            {selectedPresetId === "intact"
              ? "กระดูกปกติ ประกบสนิท ไม่มีรอยแตกหรือการเคลื่อนตัว"
              : activePreset?.clinicalPearl}
          </p>
        </div>

        {/* Tier 2: Classification Types within Selected Subregion (Includes ↺ Intact button) */}
        <div 
          className="flex items-center gap-1 p-1 rounded-full border backdrop-blur-xl shadow-xl pointer-events-auto overflow-x-auto no-scrollbar max-w-full"
          style={{
            background: "rgba(15, 23, 42, 0.90)",
            borderColor: "rgba(255, 255, 255, 0.12)",
          }}
        >
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
        </div>

        {/* Tier 3: Subregions Selector (Femoral Neck, Intertrochanter, Subtrochanter) */}
        <div 
          className="flex items-center gap-1 p-1 rounded-2xl border backdrop-blur-xl shadow-2xl pointer-events-auto overflow-x-auto no-scrollbar max-w-full"
          style={{
            background: "rgba(10, 15, 26, 0.95)",
            borderColor: "rgba(255, 255, 255, 0.15)",
          }}
        >
          {FEMUR_SUBREGIONS.map((subregion) => {
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
