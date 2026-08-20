import { useState, useEffect, useCallback } from "react";
import type { Language } from "../../App";
import type { BoneData, ClassificationSystem, ClassificationConcept, FractureClassificationType, InvestigationView } from "../../types";
import { X, Zap, Info, Bookmark, Image as ImageIcon, Film } from "lucide-react";
import { FractureIllustration } from "./FractureIllustration";
import { SpineScoreCalculator } from "./SpineScoreCalculator";
import { RegionConceptPanel } from "../layout/RegionConceptPanel";
import { LearningHubPanel } from "../layout/LearningHubPanel";

import type { UserProfile } from "../../types/auth";
import { updateBookmarksInFirestore } from "../../lib/firebase";

interface DetailPanelProps {
  darkMode: boolean;
  language: Language;
  bone: BoneData | null;
  bones?: BoneData[];
  currentUser?: UserProfile | null;
  onUpdateUser?: (updatedUser: UserProfile) => void;
  onOpenAuth?: () => void;
  onSelectBoneAndRegion?: (bone: BoneData, regionId?: string) => void;
  selectedRegionId: string | null;
  onSelectRegion: (id: string) => void;
  selectedSystemIdx: number;
  onSelectSystem: (i: number) => void;
  selectedTypeIdx: number;
  onSelectType: (i: number) => void;
  onClose: () => void;
}

export function cleanSystemName(name: string): string {
  if (!name) return "";
  let cleaned = name;
  const forMatch = cleaned.match(/\s+for\s+/i);
  if (forMatch && forMatch.index !== undefined) {
    cleaned = cleaned.substring(0, forMatch.index);
  }
  return cleaned.trim();
}

/** Smart interactive Media Viewer Modal (Switch between Diagram Illustration & Real X-Ray Film) */
function ClassificationMediaViewerModal({
  fracType,
  language,
  darkMode,
  mutedText,
  textColor,
  border,
  onClose,
}: {
  fracType: FractureClassificationType;
  language: Language;
  darkMode: boolean;
  mutedText: string;
  textColor: string;
  border: string;
  onClose: () => void;
}) {
  const [activeMediaTab, setActiveMediaTab] = useState<"diagram" | "xray">("diagram");
  const [xrayError, setXrayError] = useState(false);
  const [diagramError, setDiagramError] = useState(false);

  useEffect(() => {
    setXrayError(false);
    setDiagramError(false);
  }, [fracType]);

  const xrayCandidateUrl =
    fracType.xrayUrl ||
    (fracType.illustrationId ? fracType.illustrationId.replace("/images/", "/images/xrays/") : null);

  return (
    <div 
      style={{
        position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
        background: "rgba(0,0,0,0.88)",
        zIndex: 99999,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 12,
        animation: "fadeIn 0.2s ease"
      }}
      onClick={onClose}
    >
      <div 
        style={{
          background: darkMode ? "#161B27" : "#FFFFFF",
          borderRadius: 20,
          padding: "16px",
          width: "calc(100vw - 24px)",
          maxWidth: 540,
          maxHeight: "92vh",
          display: "flex",
          flexDirection: "column",
          border: `1.5px solid ${darkMode ? "rgba(255,255,255,0.15)" : "#CBD5E1"}`,
          boxShadow: "0 25px 60px rgba(0,0,0,0.75)",
          animation: "scaleIn 0.25s cubic-bezier(0.16,1,0.3,1)",
          overflowY: "auto",
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b" style={{ borderColor: border }}>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-md bg-[#00CED1]/15 text-[#00CED1] border border-[#00CED1]/30 font-extrabold text-xs">
                {fracType.type}
              </span>
              <h3 className="text-sm md:text-base font-extrabold truncate" style={{ color: textColor, margin: 0 }}>
                {fracType.name[language]}
              </h3>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="flex-shrink-0 cursor-pointer p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            style={{ background: "transparent", border: "none", color: mutedText }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Dual Tab Switcher: Diagram vs Real X-Ray */}
        <div 
          className="flex p-1 mb-3 rounded-xl border"
          style={{
            background: darkMode ? "#0E1117" : "#F1F5F9",
            borderColor: border,
          }}
        >
          <button
            onClick={() => setActiveMediaTab("diagram")}
            className="flex-1 py-2 px-3 rounded-lg font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            style={{
              background: activeMediaTab === "diagram" ? "#00CED1" : "transparent",
              color: activeMediaTab === "diagram" ? "#0F172A" : (darkMode ? "#CBD5E1" : "#475569"),
              boxShadow: activeMediaTab === "diagram" ? "0 2px 8px rgba(0,206,209,0.35)" : "none",
            }}
          >
            <ImageIcon size={14} />
            <span>{language === "en" ? "Medical Diagram" : "ภาพวาดไดอะแกรม"}</span>
          </button>

          <button
            onClick={() => setActiveMediaTab("xray")}
            className="flex-1 py-2 px-3 rounded-lg font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            style={{
              background: activeMediaTab === "xray" ? "#2ECC71" : "transparent",
              color: activeMediaTab === "xray" ? "#0F172A" : (darkMode ? "#CBD5E1" : "#475569"),
              boxShadow: activeMediaTab === "xray" ? "0 2px 8px rgba(46,204,113,0.35)" : "none",
            }}
          >
            <Film size={14} />
            <span>{language === "en" ? "Real X-Ray Film" : "ภาพฟิล์มเอกซเรย์"}</span>
          </button>
        </div>

        {/* Media Frame (Aspect ratio 4:3 / tall portrait frame with zoom) */}
        <div 
          className="w-full rounded-xl overflow-hidden border flex items-center justify-center relative p-3 transition-all"
          style={{
            minHeight: 260,
            maxHeight: "55vh",
            background: activeMediaTab === "xray" ? "#000000" : "#FFFFFF",
            borderColor: activeMediaTab === "diagram" ? "#00CED1" : "#2ECC71",
          }}
        >
          {activeMediaTab === "diagram" ? (
            /* ── DIAGRAM VIEW ── */
            (fracType.illustrationId?.startsWith("/") || fracType.illustrationId?.includes(".")) && !diagramError ? (
              <img
                src={fracType.illustrationId}
                alt={fracType.name.en}
                onError={() => setDiagramError(true)}
                className="max-h-[50vh] max-w-full object-contain rounded transition-transform duration-200"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-6 gap-2 text-center">
                <FractureIllustration illustrationId={fracType.illustrationId || ""} darkMode={false} />
                <span className="text-xs font-bold text-slate-600 mt-2">{fracType.type} Diagram</span>
              </div>
            )
          ) : (
            /* ── REAL X-RAY VIEW ── */
            xrayCandidateUrl && !xrayError ? (
              <img
                src={xrayCandidateUrl}
                alt={`${fracType.name.en} X-Ray`}
                onError={() => setXrayError(true)}
                className="max-h-[50vh] max-w-full object-contain rounded"
              />
            ) : (
              <div className="flex flex-col items-center justify-center p-8 text-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 text-2xl">
                  🩻
                </div>
                <div>
                  <div className="text-sm font-extrabold text-teal-400">
                    {language === "en" ? "X-Ray Film Coming Soon" : "กำลังเตรียมภาพเอกซเรย์จริง"}
                  </div>
                  <div className="text-xs text-slate-400 mt-1 max-w-xs leading-relaxed">
                    {language === "en"
                      ? `Real radiograph sample for ${fracType.name.en} is being curated.`
                      : `ภาพฟิล์มเอกซเรย์ตัวอย่างสำหรับ ${fracType.name.th} กำลังอยู่ระหว่างการอัปโหลด`}
                  </div>
                </div>
                <button
                  onClick={() => setActiveMediaTab("diagram")}
                  className="px-3.5 py-1.5 rounded-lg bg-[#00CED1] text-slate-900 font-extrabold text-xs hover:bg-[#00CED1]/90 cursor-pointer transition-all"
                >
                  {language === "en" ? "View Diagram Instead" : "ดูภาพวาดไดอะแกรมแทน"}
                </button>
              </div>
            )
          )}
        </div>

        {/* Bottom Context Info */}
        <div className="mt-3 p-3 rounded-xl border text-xs" style={{ background: darkMode ? "rgba(255,255,255,0.03)" : "#F8FAFC", borderColor: border }}>
          {activeMediaTab === "xray" && fracType.xrayDescription ? (
            <div>
              <div className="font-extrabold text-emerald-400 mb-1 flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
                <Film size={13} />
                <span>{language === "en" ? "Key Radiographic Signs" : "จุดสังเกตในภาพเอกซเรย์"}</span>
              </div>
              <div className="leading-relaxed" style={{ color: textColor }}>
                {fracType.xrayDescription[language]}
              </div>
            </div>
          ) : (
            <div>
              <div className="font-extrabold text-teal-400 mb-1 flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
                <Info size={13} />
                <span>{language === "en" ? "Fracture Pattern Summary" : "สรุปลักษณะและกลไกการหัก"}</span>
              </div>
              <div className="leading-relaxed" style={{ color: textColor }}>
                {fracType.description[language]}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/** Summary Table for Acceptable Alignment thresholds in Metacarpal Fractures */
function MetacarpalAlignmentTable({
  language,
  darkMode,
  textColor,
  border,
}: {
  language: "en" | "th";
  darkMode: boolean;
  textColor: string;
  border: string;
}) {
  const rows = [
    { mc: language === "en" ? "2nd MC (Index)" : "2nd MC (นิ้วชี้)", neck: "10°", shaft: "10°", rotation: "0°" },
    { mc: language === "en" ? "3rd MC (Middle)" : "3rd MC (นิ้วกลาง)", neck: "15°", shaft: "10°", rotation: "0°" },
    { mc: language === "en" ? "4th MC (Ring)" : "4th MC (นิ้วนาง)", neck: "30°", shaft: "30°", rotation: "0°" },
    { mc: language === "en" ? "5th MC (Little)" : "5th MC (นิ้วก้อย)", neck: "40°", shaft: "40°", rotation: "0°" },
  ];

  return (
    <div 
      className="mb-4 rounded-xl overflow-hidden border"
      style={{ 
        background: darkMode ? "#1E293B" : "#FFFFFF",
        borderColor: border,
        boxShadow: darkMode ? "0 4px 14px rgba(0,0,0,0.3)" : "0 2px 8px rgba(0,0,0,0.06)"
      }}
    >
      <div 
        className="px-3.5 py-2.5 flex items-center justify-between"
        style={{ 
          background: darkMode ? "rgba(0, 206, 209, 0.12)" : "rgba(0, 206, 209, 0.08)",
          borderBottom: `1px solid ${border}` 
        }}
      >
        <div className="flex items-center gap-2">
          <span className="text-sm">📊</span>
          <span style={{ fontSize: 12, fontWeight: 800, color: "#00CED1" }}>
            {language === "en" ? "Summary Table: Acceptable Alignment in Metacarpal Fractures" : "ตารางสรุป Acceptable Alignment ใน Metacarpal Fractures"}
          </span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr style={{ background: darkMode ? "rgba(255,255,255,0.04)" : "#F8FAFC", borderBottom: `1px solid ${border}` }}>
              <th className="py-2.5 px-3 font-bold" style={{ color: textColor }}>
                {language === "en" ? "Degree of Acceptable" : "ตำแหน่งกระดูก MC"}
              </th>
              <th className="py-2.5 px-3 font-bold text-center" style={{ color: "#00CED1" }}>
                {language === "en" ? "Metacarpal Neck (°)" : "Metacarpal Neck (°)"}
              </th>
              <th className="py-2.5 px-3 font-bold text-center" style={{ color: "#2ECC71" }}>
                {language === "en" ? "Metacarpal Shaft (°)" : "Metacarpal Shaft (°)"}
              </th>
              <th className="py-2.5 px-3 font-bold text-center" style={{ color: "#EF4444" }}>
                {language === "en" ? "Malrotation (°)" : "Malrotation (°)"}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr 
                key={row.mc} 
                style={{ 
                  borderBottom: idx === rows.length - 1 ? "none" : `1px solid ${darkMode ? "rgba(255,255,255,0.06)" : "#F1F5F9"}`,
                  background: idx % 2 === 1 ? (darkMode ? "rgba(255,255,255,0.02)" : "rgba(248,250,252,0.6)") : "transparent" 
                }}
              >
                <td className="py-2.5 px-3 font-semibold" style={{ color: textColor }}>{row.mc}</td>
                <td className="py-2.5 px-3 text-center font-bold" style={{ color: "#00CED1" }}>{row.neck}</td>
                <td className="py-2.5 px-3 text-center font-bold" style={{ color: "#2ECC71" }}>{row.shaft}</td>
                <td className="py-2.5 px-3 text-center font-bold" style={{ color: "#EF4444" }}>{row.rotation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div 
        className="p-3 text-[11px] leading-relaxed flex flex-col gap-1"
        style={{ 
          background: darkMode ? "rgba(239, 68, 68, 0.08)" : "rgba(254, 242, 242, 0.8)",
          borderTop: `1px solid ${border}`,
          color: darkMode ? "#FCA5A5" : "#991B1B"
        }}
      >
        <div className="font-bold flex items-center gap-1.5">
          <span>⚠️</span>
          <span>{language === "en" ? "Clinical Rule: Malrotation = 0° (Zero Tolerance)" : "ข้อควรระวังสำคัญ: Malrotation = 0° (ห้ามบิดหมุนเด็ดขาด)"}</span>
        </div>
        <div>
          {language === "en" 
            ? "1° of rotation causes ~5° of finger crossover/scissoring during flexed grip. 4th & 5th MCs tolerate higher dorsal angulation due to mobile CMC joints." 
            : "การบิดหมุนเพียง 1° ทำให้นิ้วเกยซ้อนกัน (Scissoring) ถึง 5° ขณะพับกำมือ นิ้วนางและก้อยทนมุมเอียงได้มากกว่าเนื่องจากข้อ CMC ยืดหยุ่นขยับได้"}
        </div>
      </div>
    </div>
  );
}

/** Summary Table & Decision Matrix for Patella Fracture Concept */
function PatellaConceptTable({
  language,
  darkMode,
  textColor,
  border,
}: {
  language: "en" | "th";
  darkMode: boolean;
  textColor: string;
  border: string;
}) {
  const rows = [
    {
      category: language === "en" ? "Intact SLR (SLR Active)" : "เหยียดขาตรงได้ (Intact SLR)",
      pattern: language === "en" ? "Nondisplaced / Vertical / Undisplaced Comminuted" : "Nondisplaced / Vertical / Undisplaced Comminuted",
      treatment: language === "en" ? "Non-operative (Cylinder Cast / Locked Brace 4-6 wks)" : "ไม่ผ่าตัด (เฝือก Cylinder Cast / Knee Brace ดามขาตรง 4-6 สัปดาห์)",
      statusColor: "#2ECC71",
    },
    {
      category: language === "en" ? "Disrupted SLR (Extensor failure)" : "เหยียดขาตรงไม่ได้ (Disrupted SLR)",
      pattern: language === "en" ? "Displaced Transverse / Displaced Comminuted" : "Displaced Transverse / Displaced Comminuted",
      treatment: language === "en" ? "ORIF: Tension Band Wiring (TBW) / Locking Plate" : "ผ่าตัด ORIF: Tension Band Wiring (TBW) หรือ Patella Locking Plate",
      statusColor: "#EF4444",
    },
    {
      category: language === "en" ? "Polar Avulsion (Tendon Disruption)" : "หักขั้วกระดูก (Polar Avulsion)",
      pattern: language === "en" ? "Lower Pole (Patellar Tendon) / Upper Pole" : "Lower Pole (Patellar Tendon) / Upper Pole",
      treatment: language === "en" ? "ORIF / Transosseous Suture Repair + Suture Anchors" : "ผ่าตัดเย็บซ่อมเอ็นยึดกระดูก (Transosseous Repair / Anchor)",
      statusColor: "#F59E0B",
    },
    {
      category: language === "en" ? "Articular Flake / Loose Body" : "ชิ้นกระดูกกะเทาะผิวข้อ (Loose Body)",
      pattern: language === "en" ? "Osteochondral / Marginal Fragment" : "Osteochondral / Marginal Fragment",
      treatment: language === "en" ? "Arthroscopic / Open Removal vs Refixation (>1cm)" : "ส่องกล้อง/เปิดข้อเข่าหยิบออก หรือยึดตรึงหากชิ้นใหญ่ >1ซม.",
      statusColor: "#00CED1",
    },
  ];

  return (
    <div 
      className="mb-4 rounded-xl overflow-hidden border"
      style={{ 
        background: darkMode ? "#1E293B" : "#FFFFFF",
        borderColor: border,
        boxShadow: darkMode ? "0 4px 14px rgba(0,0,0,0.3)" : "0 2px 8px rgba(0,0,0,0.06)"
      }}
    >
      <div 
        className="px-3.5 py-2.5 flex items-center justify-between"
        style={{ 
          background: darkMode ? "rgba(245, 158, 11, 0.12)" : "rgba(245, 158, 11, 0.08)",
          borderBottom: `1px solid ${border}` 
        }}
      >
        <div className="flex items-center gap-2">
          <span className="text-sm">⚡</span>
          <span style={{ fontSize: 12, fontWeight: 800, color: "#F59E0B" }}>
            {language === "en" ? "Surgical Decision Matrix: Patella Fractures" : "ตารางสรุปเกณฑ์การตัดสินใจรักษา Patella Fractures"}
          </span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr style={{ background: darkMode ? "rgba(255,255,255,0.04)" : "#F8FAFC", borderBottom: `1px solid ${border}` }}>
              <th className="py-2.5 px-3 font-bold" style={{ color: textColor }}>
                {language === "en" ? "Clinical Status (SLR)" : "สถานะทางคลินิก (SLR)"}
              </th>
              <th className="py-2.5 px-3 font-bold" style={{ color: textColor }}>
                {language === "en" ? "Fracture Pattern" : "รูปแบบรอยหัก"}
              </th>
              <th className="py-2.5 px-3 font-bold" style={{ color: "#F59E0B" }}>
                {language === "en" ? "Management Strategy" : "แนวทางการรักษา"}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr 
                key={idx} 
                style={{ 
                  borderBottom: idx === rows.length - 1 ? "none" : `1px solid ${darkMode ? "rgba(255,255,255,0.06)" : "#F1F5F9"}`,
                  background: idx % 2 === 1 ? (darkMode ? "rgba(255,255,255,0.02)" : "rgba(248,250,252,0.6)") : "transparent" 
                }}
              >
                <td className="py-2.5 px-3 font-bold" style={{ color: row.statusColor }}>{row.category}</td>
                <td className="py-2.5 px-3 font-medium" style={{ color: textColor }}>{row.pattern}</td>
                <td className="py-2.5 px-3 font-bold" style={{ color: textColor }}>{row.treatment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div 
        className="p-3 text-[11px] leading-relaxed flex flex-col gap-1"
        style={{ 
          background: darkMode ? "rgba(0, 206, 209, 0.08)" : "rgba(240, 253, 250, 0.9)",
          borderTop: `1px solid ${border}`,
          color: darkMode ? "#99F6E4" : "#0F766E"
        }}
      >
        <div className="font-bold flex items-center gap-1.5">
          <span>⚙️</span>
          <span>{language === "en" ? "Tension Band Wiring (TBW) Principle:" : "หลักการสำคัญของ Tension Band Wiring (TBW):"}</span>
        </div>
        <div>
          {language === "en" 
            ? "Converts anterior tensile forces (Quadriceps pull during knee flexion) into dynamic articular compression across the posterior cortex, securing rigid fixation." 
            : "เปลี่ยนแรงดึงด้านหน้า (Anterior tensile force จาก Quadriceps ขณะงอเข่า) ให้กลายเป็นแรงอัดแน่น (Articular compression) บริเวณผิวข้อด้านหลัง ช่วยให้กระดูกติดแน่น"}
        </div>
      </div>
    </div>
  );
}

/** Summary Table for Acceptable Alignment Criteria in Tibial Shaft Fractures */
function TibialShaftAlignmentTable({
  language,
  darkMode,
  textColor,
  border,
}: {
  language: "en" | "th";
  darkMode: boolean;
  textColor: string;
  border: string;
}) {
  const rows = [
    {
      param: language === "en" ? "Varus / Valgus Angulation" : "มุมเอียง Varus / Valgus",
      threshold: "< 5°",
      clinicalNote: language === "en" ? "Varus deformity is poorly tolerated (leads to medial compartment OA)" : "เอียง Varus ทนได้น้อยที่สุด (เสี่ยงข้อเข่าเสื่อมฝั่งใน)",
      color: "#2ECC71",
    },
    {
      param: language === "en" ? "Anteroposterior (AP) Angulation" : "มุมเอียงหน้า-หลัง (AP Angulation)",
      threshold: "< 10°",
      clinicalNote: language === "en" ? "Anterior / Posterior apex angulation tolerance" : "ยอมรับมุมเอียงมุมยอดหน้า-หลังได้ไม่เกิน 10°",
      color: "#00CED1",
    },
    {
      param: language === "en" ? "Leg Shortening / Overlap" : "ความสั้นของขา (Shortening)",
      threshold: "< 10 mm (1 cm)",
      clinicalNote: language === "en" ? "<1 cm length discrepancy compensated by pelvic tilt" : "สั้นไม่เกิน 1 ซม. ร่างกายเอียงเชิงอ่างชดเชยได้",
      color: "#F59E0B",
    },
    {
      param: language === "en" ? "Rotational Deformity" : "การบิดหมุน (Rotation)",
      threshold: "< 10°",
      clinicalNote: language === "en" ? "Internal rotation is less tolerated than external rotation" : "การบิดเข้าด้านในทนได้น้อยกว่าการบิดออกด้านนอก",
      color: "#F59E0B",
    },
    {
      param: language === "en" ? "Cortical Surface Contact" : "การแตะกันของขอบกระดูก (Cortical Contact)",
      threshold: "> 50%",
      clinicalNote: language === "en" ? "Minimum 50% cortical overlap required for stable union" : "ต้องมีขอบกระดูกแตะกันอย่างน้อย 50% เพื่อให้กระดูกติดสมาน",
      color: "#3B82F6",
    },
  ];

  return (
    <div 
      className="mb-4 rounded-xl overflow-hidden border"
      style={{ 
        background: darkMode ? "#1E293B" : "#FFFFFF",
        borderColor: border,
        boxShadow: darkMode ? "0 4px 14px rgba(0,0,0,0.3)" : "0 2px 8px rgba(0,0,0,0.06)"
      }}
    >
      <div 
        className="px-3.5 py-2.5 flex items-center justify-between"
        style={{ 
          background: darkMode ? "rgba(0, 206, 209, 0.12)" : "rgba(0, 206, 209, 0.08)",
          borderBottom: `1px solid ${border}` 
        }}
      >
        <div className="flex items-center gap-2">
          <span className="text-sm">📏</span>
          <span style={{ fontSize: 12, fontWeight: 800, color: "#00CED1" }}>
            {language === "en" ? "Acceptable Alignment Thresholds (Sarmiento Rules)" : "เกณฑ์มุมเอียงที่ยอมรับได้ (Sarmiento Alignment Criteria)"}
          </span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr style={{ background: darkMode ? "rgba(255,255,255,0.04)" : "#F8FAFC", borderBottom: `1px solid ${border}` }}>
              <th className="py-2.5 px-3 font-bold" style={{ color: textColor }}>
                {language === "en" ? "Alignment Parameter" : "พารามิเตอร์การจัดเรียงตัว"}
              </th>
              <th className="py-2.5 px-3 font-bold text-center" style={{ color: "#00CED1" }}>
                {language === "en" ? "Max Threshold" : "เกณฑ์สูงสุดที่ยอมรับได้"}
              </th>
              <th className="py-2.5 px-3 font-bold" style={{ color: textColor }}>
                {language === "en" ? "Clinical Rationale" : "เหตุผลทางคลินิก"}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr 
                key={idx} 
                style={{ 
                  borderBottom: idx === rows.length - 1 ? "none" : `1px solid ${darkMode ? "rgba(255,255,255,0.06)" : "#F1F5F9"}`,
                  background: idx % 2 === 1 ? (darkMode ? "rgba(255,255,255,0.02)" : "rgba(248,250,252,0.6)") : "transparent" 
                }}
              >
                <td className="py-2.5 px-3 font-bold" style={{ color: textColor }}>{row.param}</td>
                <td className="py-2.5 px-3 text-center font-extrabold text-sm" style={{ color: row.color }}>{row.threshold}</td>
                <td className="py-2.5 px-3 font-medium text-[11px]" style={{ color: darkMode ? "#94A3B8" : "#475569" }}>{row.clinicalNote}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div 
        className="p-3 text-[11px] leading-relaxed flex flex-col gap-1"
        style={{ 
          background: darkMode ? "rgba(239, 68, 68, 0.08)" : "rgba(254, 242, 242, 0.8)",
          borderTop: `1px solid ${border}`,
          color: darkMode ? "#FCA5A5" : "#991B1B"
        }}
      >
        <div className="font-bold flex items-center gap-1.5">
          <span>🚨</span>
          <span>{language === "en" ? "High-Risk Alert: Compartment Syndrome #1 Site" : "คำเตือนความเสี่ยงสูง: ตำแหน่งเกิด Compartment Syndrome อันดับ 1"}</span>
        </div>
        <div>
          {language === "en" 
            ? "Tibial shaft is the most common site for Compartment Syndrome in trauma. Monitor 5 Ps closely. Emergency Fasciotomy if Delta Pressure (DBP - IMTP) < 30 mmHg." 
            : "แกนกระดูกหน้าเเข้งเป็นตำแหน่งที่เกิด Compartment Syndrome พบบ่อยที่สุด เฝ้าระวัง 5 Ps อย่างใกล้ชิด ผ่าตัด Fasciotomy ด่วนหาก Delta Pressure < 30 mmHg"}
        </div>
      </div>
    </div>
  );
}

/** Wrapper that provides a stable `onScoreCalculated` callback via useCallback,
 *  so SpineScoreCalculator's useEffect doesn't fire on every parent render. */
function SpineScoreCalculatorWrapper({
  classSystem,
  language,
  darkMode,
  selectedTypeIdx,
  onSelectType,
}: {
  classSystem: ClassificationSystem;
  language: "en" | "th";
  darkMode: boolean;
  selectedTypeIdx: number;
  onSelectType: (i: number) => void;
}) {
  const stableCallback = useCallback(
    (_totalScore: number, recommendedType: string) => {
      const idx = classSystem.types.findIndex(
        (t) => t.type.includes(recommendedType) || recommendedType.includes(t.type)
      );
      if (idx !== -1 && idx !== selectedTypeIdx) {
        onSelectType(idx);
      }
    },
    // classSystem.system and types are stable references from bones.ts data
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [classSystem.system, selectedTypeIdx, onSelectType]
  );

  return (
    <SpineScoreCalculator
      key={classSystem.system}
      system={classSystem.system}
      language={language}
      darkMode={darkMode}
      onScoreCalculated={stableCallback}
    />
  );
}

function ClassificationTitleWithInfo({
  fullName,
  description,
  concept,
  textColor,
  darkMode,
  language = "en",
  isBookmarked = false,
  onToggleBookmark,
}: {
  fullName: string;
  description: string;
  concept?: ClassificationConcept;
  textColor: string;
  mutedText?: string;
  darkMode: boolean;
  language?: "en" | "th";
  isBookmarked?: boolean;
  onToggleBookmark?: () => void;
}) {
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "concept">("overview");

  return (
    <div style={{ position: "relative", marginBottom: 12 }}>
      <div className="flex items-center justify-between gap-2">
        {/* Title + Info Button inline */}
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <h3
            style={{
              color: textColor,
              fontSize: 17,
              fontWeight: 800,
              letterSpacing: "-0.01em",
              margin: 0,
              lineHeight: 1.25,
            }}
          >
            {cleanSystemName(fullName)}
          </h3>

          {/* Info Button (Inline right after class title) */}
          <button
            onClick={() => {
              setActiveTab("overview");
              setShowInfoModal(true);
            }}
            aria-label="System Info & Concept"
            title={language === "en" ? "System Info & Concept" : "ข้อมูลและแนวคิดระบบ"}
            className="flex items-center justify-center transition-all flex-shrink-0 cursor-pointer hover:scale-110 active:scale-95"
            style={{
              width: 24,
              height: 24,
              borderRadius: "50%",
              background: darkMode ? "rgba(0, 206, 209, 0.12)" : "rgba(0, 206, 209, 0.08)",
              color: "#00CED1",
              border: "1px solid rgba(0, 206, 209, 0.3)",
              boxShadow: "none",
              padding: 0,
            }}
          >
            <Info size={13} />
          </button>
        </div>

        {/* Bookmark Button (Far Right Edge) */}
        <button
          onClick={onToggleBookmark}
          aria-label="Bookmark system"
          title={isBookmarked ? (language === "en" ? "Bookmarked (Click to remove)" : "บันทึกแล้ว (คลิกเพื่อถอนการบันทึก)") : (language === "en" ? "Bookmark System" : "บันทึกเป็นรายการโปรด")}
          className="flex items-center justify-center transition-all flex-shrink-0 cursor-pointer hover:scale-110 active:scale-95"
          style={{
            width: 26,
            height: 26,
            borderRadius: "50%",
            background: isBookmarked
              ? (darkMode ? "rgba(0, 206, 209, 0.22)" : "rgba(0, 206, 209, 0.15)")
              : (darkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.05)"),
            color: isBookmarked ? "#00CED1" : (darkMode ? "#94A3B8" : "#64748B"),
            border: `1.5px solid ${isBookmarked ? "rgba(0, 206, 209, 0.5)" : (darkMode ? "rgba(255, 255, 255, 0.15)" : "#CBD5E1")}`,
            boxShadow: isBookmarked ? "0 0 10px rgba(0, 206, 209, 0.25)" : "none",
            padding: 0,
          }}
        >
          <Bookmark size={13} className={isBookmarked ? "fill-[#00CED1]" : ""} />
        </button>
      </div>

      {/* Unified Info & Concept Modal */}
      {showInfoModal && (
        <div 
          onClick={() => setShowInfoModal(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0, 0, 0, 0.75)",
            backdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "60px 16px 32px 16px",
            overflowY: "auto",
            animation: "fadeIn 0.2s ease both",
          }}
        >
          <div 
            onClick={e => e.stopPropagation()}
            style={{
              background: darkMode ? "#161B27" : "#FFFFFF",
              color: textColor,
              borderRadius: 18,
              border: `1px solid ${darkMode ? "rgba(255,255,255,0.12)" : "#CBD5E1"}`,
              maxWidth: 580,
              width: "100%",
              padding: 24,
              boxShadow: "0 25px 60px rgba(0,0,0,0.6)",
              position: "relative",
              animation: "scaleIn 0.25s ease both",
              margin: "0 auto",
            }}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between gap-2 mb-3 pb-3" style={{ borderBottom: `1px solid ${darkMode ? "rgba(255,255,255,0.1)" : "#E2E8F0"}` }}>
              <div>
                <div className="text-[10.5px] font-bold text-[#00CED1] uppercase tracking-wider">
                  Classification Guide
                </div>
                <h4 style={{ margin: 0, fontSize: 15, fontWeight: 800, color: textColor }}>
                  {fullName}
                </h4>
              </div>
              <button
                onClick={() => setShowInfoModal(false)}
                className="w-7 h-7 rounded-full flex items-center justify-center transition-all cursor-pointer hover:bg-white/10"
                style={{
                  background: darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)",
                  color: textColor,
                  border: "none",
                }}
              >
                ✕
              </button>
            </div>

            {/* Modal Tabs: Overview vs Clinical Concept */}
            <div className="flex p-1 mb-4 rounded-xl" style={{ background: darkMode ? "rgba(255,255,255,0.05)" : "#F1F5F9" }}>
              <button
                onClick={() => setActiveTab("overview")}
                className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "overview"
                    ? "bg-[#00CED1] text-slate-900 shadow-sm"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                📘 {language === "en" ? "Overview" : "ภาพรวมระบบ"}
              </button>
              <button
                onClick={() => setActiveTab("concept")}
                className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "concept"
                    ? "bg-[#00CED1] text-slate-900 shadow-sm"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                💡 {language === "en" ? "Clinical Concept" : "แนวคิดหลัก & เกณฑ์พิจารณา"}
              </button>
            </div>

            {/* Tab 1: Overview */}
            {activeTab === "overview" && (
              <div className="space-y-3 text-xs leading-relaxed">
                <div className="p-3 rounded-xl bg-slate-500/10 border border-slate-500/20">
                  <div className="font-bold text-[#00CED1] mb-1 uppercase text-[10.5px] tracking-wider">
                    {language === "en" ? "System Description & Indication" : "คำอธิบายภาพรวมและข้อบ่งชี้"}
                  </div>
                  <p className="m-0 text-slate-700 dark:text-slate-300">
                    {description}
                  </p>
                </div>
              </div>
            )}

            {/* Tab 2: Clinical Concept */}
            {activeTab === "concept" && (
              <div className="space-y-3.5 text-xs leading-relaxed">
                {/* 1. Core Principle (TL;DR) */}
                {concept?.corePrinciple ? (
                  <div className="p-3.5 rounded-xl bg-[#00CED1]/10 border border-[#00CED1]/30 space-y-1.5">
                    <div className="font-extrabold text-[#00CED1] flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
                      <span>💡</span>
                      <span>{language === "en" ? "TL;DR / The Core Principle" : "หัวใจหลักในการจำแนก (Core Principle)"}</span>
                    </div>
                    <p className="m-0 text-slate-800 dark:text-slate-100 font-medium text-[12px] leading-relaxed">
                      {concept.corePrinciple[language]}
                    </p>
                  </div>
                ) : null}

                {/* 2. The "Rules" (Decision Cut-offs) */}
                {concept?.rules && concept.rules.length > 0 ? (
                  <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/25 space-y-2">
                    <div className="font-extrabold text-amber-500 flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
                      <span>⚖️</span>
                      <span>{language === "en" ? "The Rules (Key Thresholds)" : "เกณฑ์การตัดสินใจ (The Rules)"}</span>
                    </div>
                    <ul className="m-0 pl-4 space-y-1 text-slate-800 dark:text-slate-200 text-[11.5px] list-disc font-medium">
                      {concept.rules.map((rule, rIdx) => (
                        <li key={rIdx}>{rule[language]}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {/* 3. Clinical Significance */}
                {concept?.clinicalSignificance && concept.clinicalSignificance.length > 0 ? (
                  <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/25 space-y-2">
                    <div className="font-extrabold text-blue-400 flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
                      <span>🏥</span>
                      <span>{language === "en" ? "Clinical Significance & Impact" : "การนำไปใช้ทางคลินิก (Clinical Significance)"}</span>
                    </div>
                    <ul className="m-0 pl-4 space-y-1.5 text-slate-800 dark:text-slate-200 text-[11.5px] list-disc">
                      {concept.clinicalSignificance.map((sig, sIdx) => (
                        <li key={sIdx}>{sig[language]}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {/* Fallback Legacy Description if new structured fields missing */}
                {!concept?.corePrinciple && concept?.description ? (
                  <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/25 space-y-2">
                    <div className="font-bold text-amber-500 flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
                      <span>💡</span>
                      <span>{concept.title ? concept.title[language] : (language === "en" ? "Core Concept" : "หลักการคิดและจุดตัดสินใจ")}</span>
                    </div>
                    <div className="whitespace-pre-line text-slate-800 dark:text-slate-200 text-[11.5px] leading-relaxed">
                      {concept.description[language]}
                    </div>
                  </div>
                ) : !concept?.corePrinciple && !concept?.rules && !concept?.description ? (
                  <div className="p-3 rounded-xl bg-slate-500/10 border border-slate-500/20 text-slate-400 text-center py-6">
                    {language === "en" ? "System description applies standard clinical guidelines." : "ระบบการจำแนกนี้ใช้หลักเกณฑ์มาตรฐานทางออร์โธปิดิกส์"}
                  </div>
                ) : null}

                {/* Custom Alignment Tables */}
                {fullName.toLowerCase().includes("patella") ? (
                  <div className="mt-3">
                    <PatellaConceptTable
                      language={language}
                      darkMode={darkMode}
                      textColor={textColor}
                      border={darkMode ? "rgba(255,255,255,0.12)" : "#CBD5E1"}
                    />
                  </div>
                ) : fullName.toLowerCase().includes("tibial shaft") ? (
                  <div className="mt-3">
                    <TibialShaftAlignmentTable
                      language={language}
                      darkMode={darkMode}
                      textColor={textColor}
                      border={darkMode ? "rgba(255,255,255,0.12)" : "#CBD5E1"}
                    />
                  </div>
                ) : (concept?.showTable || fullName.toLowerCase().includes("metacarpal")) ? (
                  <div className="mt-3">
                    <MetacarpalAlignmentTable
                      language={language}
                      darkMode={darkMode}
                      textColor={textColor}
                      border={darkMode ? "rgba(255,255,255,0.12)" : "#CBD5E1"}
                    />
                  </div>
                ) : null}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export function DetailPanel({
  darkMode, language, bone, bones = [], currentUser, onUpdateUser, onOpenAuth, onSelectBoneAndRegion,
  selectedRegionId, onSelectRegion,
  selectedSystemIdx, onSelectSystem,
  selectedTypeIdx, onSelectType,
  onClose,
}: DetailPanelProps) {
  const [activeTab, setActiveTab] = useState<"classification" | "investigation">("classification");
  const [showFilmPopup, setShowFilmPopup] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [dragY, setDragY] = useState(0);
  const [mobilePage, setMobilePage] = useState<number>(0);

  const handleAnimatedClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
      setDragY(0);
    }, 260);
  }, [onClose]);

  const [bookmarkedSystems, setBookmarkedSystems] = useState<string[]>(() => {
    if (currentUser?.bookmarks) {
      return currentUser.bookmarks;
    }
    try {
      const saved = localStorage.getItem("ortho_bookmarks");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    if (currentUser?.bookmarks) {
      setBookmarkedSystems(currentUser.bookmarks);
    }
  }, [currentUser?.id, currentUser?.bookmarks]);

  const handleToggleBookmark = (systemName: string) => {
    setBookmarkedSystems(prev => {
      const updated = prev.includes(systemName)
        ? prev.filter(s => s !== systemName)
        : [...prev, systemName];
      try {
        localStorage.setItem("ortho_bookmarks", JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }

      if (currentUser) {
        updateBookmarksInFirestore(currentUser.id, updated).catch(err => console.warn("Firestore bookmark error:", err));
        if (onUpdateUser) {
          onUpdateUser({ ...currentUser, bookmarks: updated });
        }
      }

      return updated;
    });
  };

  // ── Top Drag Handle Only (Drag Down To Close Modal) ──
  const [handleTouchStartY, setHandleTouchStartY] = useState<number | null>(null);

  const handleHandleTouchStart = (e: React.TouchEvent) => {
    setHandleTouchStartY(e.touches[0].clientY);
  };

  const handleHandleTouchMove = (e: React.TouchEvent) => {
    if (handleTouchStartY === null) return;
    const currentY = e.touches[0].clientY;
    const diffY = currentY - handleTouchStartY;
    if (diffY > 0) {
      setDragY(diffY);
    }
  };

  const handleHandleTouchEnd = () => {
    if (dragY > 60) {
      handleAnimatedClose();
    } else {
      setDragY(0);
    }
    setHandleTouchStartY(null);
  };

  // ── Horizontal Swipe (Between Classification & Concept Guide - Content Only) ──
  const [swipeStartX, setSwipeStartX] = useState<number | null>(null);
  const [swipeStartY, setSwipeStartY] = useState<number | null>(null);

  const handleSwipeTouchStart = (e: React.TouchEvent) => {
    // Prevent page swipe if touch originated inside a horizontal scroll container (e.g. type cards carousel)
    let target = e.target as HTMLElement | null;
    while (target && target !== e.currentTarget) {
      if (
        target.scrollWidth > target.clientWidth + 5 ||
        target.classList.contains("overflow-x-auto") ||
        target.getAttribute("data-no-swipe") === "true"
      ) {
        setSwipeStartX(null);
        setSwipeStartY(null);
        return;
      }
      target = target.parentElement;
    }
    setSwipeStartX(e.touches[0].clientX);
    setSwipeStartY(e.touches[0].clientY);
  };

  const handleSwipeTouchEnd = (e: React.TouchEvent) => {
    if (swipeStartX !== null && swipeStartY !== null && e.changedTouches && e.changedTouches.length > 0) {
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const deltaX = endX - swipeStartX;
      const deltaY = endY - swipeStartY;

      // Only trigger horizontal swipe if horizontal movement is strongly dominant (> 1.5x vertical)
      if (Math.abs(deltaX) >= 40 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
        if (deltaX < -40) {
          // Swipe Left -> Concept Guide (Page 1) or Next System
          if (mobilePage === 0 && region?.regionConcept) {
            setMobilePage(1);
          } else if (region?.classifications && region.classifications.length > 1) {
            onSelectSystem((selectedSystemIdx + 1) % region.classifications.length);
          }
        } else if (deltaX > 40) {
          // Swipe Right -> Classification View (Page 0) or Previous System
          if (mobilePage === 1) {
            setMobilePage(0);
          } else if (region?.classifications && region.classifications.length > 1) {
            onSelectSystem((selectedSystemIdx - 1 + region.classifications.length) % region.classifications.length);
          }
        }
      }
    }
    setSwipeStartX(null);
    setSwipeStartY(null);
  };
  
  // Reset tabs, system, type, and mobile page when region/bone changes
  useEffect(() => {
    setActiveTab("classification");
    setMobilePage(0);
    setShowFilmPopup(false);
    onSelectSystem(0);
    onSelectType(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRegionId, bone?.id]);

  useEffect(() => {
    setActiveTab("classification");
    setShowFilmPopup(false);
    onSelectType(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSystemIdx]);

  const bg       = darkMode ? "#161B27" : "#EAECEF";
  const border   = darkMode ? "#252F42" : "#D5D9E0";
  const mutedText = darkMode ? "#94A3B8" : "#475569";
  const textColor = darkMode ? "#E2E8F0" : "#0F172A";

  // Derive active data
  const region = bone?.regions.find(r => r.id === selectedRegionId) ?? bone?.regions[0] ?? null;
  const classSystem: ClassificationSystem | null = region?.classifications[selectedSystemIdx] ?? null;
  const fracType: FractureClassificationType | null = classSystem?.types[selectedTypeIdx] ?? null;

  const getInvestigations = (): InvestigationView[] => {
    if (classSystem?.investigations && classSystem.investigations.length > 0) {
      return classSystem.investigations;
    }
    const regionId = region?.id;
    const boneId = bone?.id;
    
    if (boneId === "forearm" && regionId === "shaft") {
      return [
        {
          name: "AP Forearm View",
          details: {
            en: "Anteroposterior view of the entire forearm, including elbow and wrist joints.",
            th: "ภาพเอกซเรย์ท่าหน้าหลัง (AP) ของกระดูกปลายแขนทั้งหมด รวมถึงข้อศอกและข้อมือ"
          }
        },
        {
          name: "Lateral Forearm View",
          details: {
            en: "Lateral view of the forearm. Essential to check for rotational alignment and dislocation of radial head or DRUJ.",
            th: "ภาพเอกซเรย์ท่าด้านข้าง (Lateral) ของปลายแขน เพื่อประเมินการบิดหมุนและข้อต่อเคลื่อนหลุด"
          }
        }
      ];
    }
    
    if (boneId === "forearm" && regionId === "distal") {
      return [
        {
          name: "AP Wrist View",
          details: {
            en: "Anteroposterior view of the wrist. Look for articular step-off, radial inclination, and radial height.",
            th: "ภาพเอกซเรย์ท่าหน้าหลัง (AP) ของข้อมือ สำหรับดูแนวรอยต่อผิวข้อ ความเอียงและความสูงของกระดูกเรเดียส"
          }
        },
        {
          name: "Lateral Wrist View",
          details: {
            en: "Lateral view of the wrist. Critical to evaluate volar or dorsal tilt (angulation) of the distal radius fragment.",
            th: "ภาพเอกซเรย์ท่าด้านข้าง (Lateral) ของข้อมือ สำคัญมากในการประเมินการมุมเอียงไปด้านหน้าหรือด้านหลัง"
          }
        },
        {
          name: "Oblique Wrist View",
          details: {
            en: "Oblique view of the wrist. Useful for identifying intra-articular extension of the fracture line.",
            th: "ภาพเอกซเรย์ท่าเฉียง (Oblique) ของข้อมือ ช่วยในการมองหารอยหักที่ลามเข้าไปในผิวข้อ"
          }
        }
      ];
    }
    return [];
  };

  // If no bone selected on desktop, show empty state; on mobile, render nothing (panel unmounts)
  if (!bone) {
    return (
      <aside
        style={{ background: bg, borderColor: border }}
        className="hidden md:flex md:w-[40%] md:min-w-[380px] border-l flex-col h-full overflow-hidden"
      >
        <LearningHubPanel
          darkMode={darkMode}
          language={language}
          bones={bones}
          currentUser={currentUser}
          onOpenAuth={onOpenAuth}
          onSelectBone={(b, regId) => {
            if (onSelectBoneAndRegion) {
              onSelectBoneAndRegion(b, regId);
            }
          }}
          onSwitchToBoneList={() => {}}
        />
      </aside>
    );
  }

  return (
    <aside
      style={{
        background: bg,
        borderColor: border,
        transform: dragY > 0 ? `translateY(${dragY}px)` : undefined,
        transition: handleTouchStartY === null ? "transform 0.2s ease" : "none",
        paddingBottom: "calc(16px + env(safe-area-inset-bottom, 0px))",
      }}
      className={`fixed inset-x-0 bottom-0 z-50 rounded-t-3xl max-h-[85dvh] max-h-[calc(100dvh-56px)] border-t shadow-[0_-10px_35px_rgba(0,0,0,0.5)] flex flex-col overflow-y-auto ${
        isClosing ? "animate-slide-down-m" : "animate-slide-up-m"
      } md:static md:w-[40%] md:min-w-[380px] md:max-h-none md:rounded-none md:border-t-0 md:border-l md:shadow-none md:animate-slide-in-r md:z-20`}
    >
      {/* Mobile Top Drag Handle Bar (DRAG DOWN HERE ONLY TO CLOSE MODAL) */}
      <div 
        className="md:hidden flex justify-center py-2.5 cursor-grab active:cursor-grabbing border-b border-black/5 dark:border-white/5 active:bg-black/5 dark:active:bg-white/5 transition-colors select-none touch-none" 
        onClick={handleAnimatedClose}
        onTouchStart={handleHandleTouchStart}
        onTouchMove={handleHandleTouchMove}
        onTouchEnd={handleHandleTouchEnd}
      >
        <div className="w-[28%] max-w-[90px] h-1.5 rounded-full bg-slate-400/60 hover:bg-slate-400/90 transition-colors" />
      </div>

      {/* ── Header ── */}
      <div
        style={{
          padding: "8px 12px 6px 12px",
          borderBottom: `1px solid ${border}`,
          position: "sticky",
          top: 0,
          background: bg,
          zIndex: 10,
        }}
      >
        <div className="flex items-center justify-between">
          <h2 style={{ color: textColor, fontSize: 18, fontWeight: 800, lineHeight: 1.2, margin: 0 }} className="text-lg md:text-xl font-extrabold tracking-tight">
            {bone.name[language]}
          </h2>
          <button
            onClick={handleAnimatedClose}
            className="flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center transition-all hover:bg-white/10"
            style={{
              background: "transparent",
              border: `1px solid ${border}`,
              color: mutedText,
              cursor: "pointer",
            }}
          >
            <X size={12} />
          </button>
        </div>

        {/* Region tabs (if multiple regions) */}
        {bone.regions.length > 1 && (
          <div className="flex gap-1 mt-1.5 overflow-x-auto no-scrollbar pb-0.5 items-center flex-nowrap">
            {bone.regions.map(r => {
              const isSelected = region?.id === r.id;
              return (
                <button
                  key={r.id}
                  onClick={() => onSelectRegion(r.id)}
                  className="transition-all whitespace-nowrap flex-shrink-0"
                  style={{
                    padding: "3px 9px",
                    borderRadius: 6,
                    fontSize: 10.5,
                    fontWeight: isSelected ? 800 : 600,
                    cursor: "pointer",
                    background: isSelected ? "#00CED1" : (darkMode ? "#1A2530" : "#F1F5F9"),
                    border: isSelected ? "1.5px solid #00CED1" : `1.5px solid ${border}`,
                    color: isSelected ? "#0F172A" : (darkMode ? "#CBD5E1" : "#475569"),
                    boxShadow: isSelected ? "0 0 10px rgba(0,206,209,0.35)" : "none",
                  }}
                >
                  {r.name[language]}
                </button>
              );
            })}
          </div>
        )}


        {/* Mobile Page Dot Indicator */}
        {region?.regionConcept && (
          <div className="md:hidden flex items-center justify-center gap-1.5 mt-1.5">
            <button
              onClick={() => setMobilePage(0)}
              className={`h-1 rounded-full transition-all cursor-pointer ${
                mobilePage === 0 ? "w-4 bg-[#00CED1]" : "w-1 bg-slate-400/40"
              }`}
              title="Classification"
            />
            <button
              onClick={() => setMobilePage(1)}
              className={`h-1 rounded-full transition-all cursor-pointer ${
                mobilePage === 1 ? "w-4 bg-[#00CED1]" : "w-1 bg-slate-400/40"
              }`}
              title="Concept Guide"
            />
            <span className="text-[9px] font-extrabold text-[#00CED1] ml-0.5 uppercase tracking-wider">
              {mobilePage === 0
                ? (language === "en" ? "Classification" : "การจำแนกประเภท")
                : (language === "en" ? "Concept Guide" : "คู่มือแนวคิด")}
            </span>
          </div>
        )}
      </div>

      {/* ── Content ── */}
      {mobilePage === 1 && region?.regionConcept ? (
        <div key="mobile-concept-view" onTouchStart={handleSwipeTouchStart} onTouchEnd={handleSwipeTouchEnd} className="md:hidden flex-1 flex flex-col animate-slide-in-r overflow-y-auto">
          <RegionConceptPanel
            concept={region.regionConcept}
            boneName={bone.name}
            regionName={region.name}
            darkMode={darkMode}
            language={language}
            isDesktop={false}
          />
        </div>
      ) : (
        <div key="mobile-classification-view" onTouchStart={handleSwipeTouchStart} onTouchEnd={handleSwipeTouchEnd} className="flex-1 flex flex-col animate-slide-in-l overflow-y-auto" style={{ padding: "8px 12px" }}>
          {/* Main Tabs: Classifications vs Investigations */}
          <div className="flex p-0.5 mb-2.5" style={{ background: darkMode ? "#1A2530" : "#E2E8F0", borderRadius: 6 }}>
            <button
              onClick={() => setActiveTab("classification")}
              className="flex-1 py-1 rounded-md transition-all text-[11px] font-bold"
              style={{
                background: activeTab === "classification" ? (darkMode ? "#2C3E50" : "#FFFFFF") : "transparent",
                color: activeTab === "classification" ? (darkMode ? "#FFFFFF" : "#1E293B") : mutedText,
                boxShadow: activeTab === "classification" ? "0 1px 2px rgba(0,0,0,0.1)" : "none"
              }}
            >
              {language === "en" ? "Classifications" : "การจัดจำแนก"}
            </button>
            <button
              onClick={() => setActiveTab("investigation")}
              className="flex-1 py-1 rounded-md transition-all text-[11px] font-bold"
              style={{
                background: activeTab === "investigation" ? (darkMode ? "#2C3E50" : "#FFFFFF") : "transparent",
                color: activeTab === "investigation" ? (darkMode ? "#FFFFFF" : "#1E293B") : mutedText,
                boxShadow: activeTab === "investigation" ? "0 1px 2px rgba(0,0,0,0.1)" : "none"
              }}
            >
              {language === "en" ? "Investigation / X-Ray" : "การส่งตรวจ (X-Ray)"}
            </button>
          </div>

        {activeTab === "classification" ? (
          !classSystem ? (
            <div style={{ padding: "60px 20px", flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", opacity: 0.6 }}>
              <div style={{ color: mutedText, fontSize: 14, fontWeight: 600 }}>
                {language === "en" ? "Information coming soon" : "กำลังอัปเดตข้อมูลส่วนนี้"}
              </div>
              <p style={{ color: mutedText, fontSize: 12, marginTop: 8, textAlign: "center", maxWidth: 250, lineHeight: 1.5 }}>
                {language === "en" ? "We are actively adding classification data for this bone region." : "เรากำลังรวบรวมและเพิ่มข้อมูลการจัดจำแนกสำหรับกระดูกส่วนนี้"}
              </p>
            </div>
          ) : (
            <div style={{ animation: "scaleIn 0.25s ease both" }}>
              {/* Classification System Selector Row inside content view for multiple systems */}
              {region && region.classifications && region.classifications.length > 1 && (
                <div 
                  className="flex items-center gap-1 mb-2.5 p-0.5 rounded-lg border overflow-x-auto no-scrollbar"
                  style={{
                    background: darkMode ? "rgba(46, 204, 113, 0.06)" : "rgba(46, 204, 113, 0.04)",
                    borderColor: darkMode ? "rgba(46, 204, 113, 0.2)" : "rgba(46, 204, 113, 0.25)",
                    minHeight: 28,
                  }}
                >
                  <span className="text-[9.5px] font-extrabold uppercase px-1.5 tracking-wider flex-shrink-0" style={{ color: "#2ECC71" }}>
                    {language === "en" ? "System:" : "ระบบ:"}
                  </span>
                  {region.classifications.map((cls, i) => {
                    const isSelected = selectedSystemIdx === i;
                    return (
                      <button
                        key={cls.system}
                        onClick={() => {
                          onSelectSystem(i);
                          onSelectType(0);
                          setMobilePage(0);
                          setActiveTab("classification");
                        }}
                        className="flex-1 py-1 px-2.5 rounded-md font-bold text-[10.5px] whitespace-nowrap transition-all flex items-center justify-center gap-1 cursor-pointer active:scale-95"
                        style={{
                          background: isSelected ? "#2ECC71" : "transparent",
                          color: isSelected ? "#0F172A" : (darkMode ? "#E2E8F0" : "#334155"),
                          boxShadow: isSelected ? "0 1px 4px rgba(46,204,113,0.3)" : "none",
                        }}
                      >
                        {cls.system}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* System full name & description */}
              <ClassificationTitleWithInfo
                fullName={classSystem.fullName[language]}
                description={classSystem.description[language]}
                concept={classSystem.concept}
                textColor={textColor}
                mutedText={mutedText}
                darkMode={darkMode}
                language={language}
                isBookmarked={bookmarkedSystems.includes(classSystem.fullName[language]) || bookmarkedSystems.includes(classSystem.system)}
                onToggleBookmark={() => handleToggleBookmark(classSystem.fullName[language])}
              />

              {/* Interactive Score Calculator for TLICS & SLIC */}
              {(classSystem.system.toLowerCase().includes("tlics") || classSystem.system.toLowerCase().includes("slic")) && (
                <SpineScoreCalculatorWrapper
                  classSystem={classSystem}
                  language={language}
                  darkMode={darkMode}
                  selectedTypeIdx={selectedTypeIdx}
                  onSelectType={onSelectType}
                />
              )}              {/* Interactive Visual Guide */}
              <div style={{ marginBottom: 16 }}>
                {(() => {
                  const isJudetLetournel = classSystem.system.toLowerCase().includes("judet") ||
                    (classSystem.types.length === 10 && classSystem.types.some(t => t.name.en.includes("Elementary") || t.name.th.includes("Elementary")));

                  const renderTypeCard = (t: typeof classSystem.types[0], i: number) => {
                    const isSelected = selectedTypeIdx === i;

                    return (
                      <div 
                        key={t.type} 
                        className="flex flex-col items-center gap-2 flex-shrink-0 w-[72%] sm:w-[56%] md:w-[calc(33.333%-6px)] min-w-[210px] md:min-w-[130px]" 
                        style={{ scrollSnapAlign: "start" }}
                      >
                        <div 
                          onClick={() => {
                            if (isSelected) {
                              setShowFilmPopup(true);
                            } else {
                              onSelectType(i);
                            }
                          }}
                          className="transition-all cursor-pointer flex flex-col items-center justify-center overflow-hidden w-full p-2.5 rounded-2xl border relative group bg-white shadow-xs hover:shadow-md active:scale-98"
                          style={{
                            aspectRatio: "4/3",
                            width: "100%",
                            border: isSelected ? "2.5px solid #00CED1" : `1.5px solid ${darkMode ? "rgba(255,255,255,0.2)" : border}`,
                            opacity: isSelected ? 1 : 0.88,
                            boxShadow: isSelected ? "0 0 14px rgba(0,206,209,0.4)" : "none",
                          }}
                        >

                          {t.illustrationId?.startsWith("/") || t.illustrationId?.includes(".") ? (
                            <img 
                              src={t.illustrationId} 
                              alt={t.name.en} 
                              style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: 6, display: "block" }}
                              onError={(e) => {
                                (e.target as HTMLElement).style.display = "none";
                                const parent = (e.target as HTMLElement).parentElement;
                                if (parent) {
                                  const fallbackDiv = document.createElement("div");
                                  fallbackDiv.className = "w-full h-full flex items-center justify-center text-xs font-bold text-slate-400";
                                  fallbackDiv.innerText = t.type;
                                  parent.appendChild(fallbackDiv);
                                }
                              }}
                            />
                          ) : (
                            <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <FractureIllustration illustrationId={t.illustrationId || ""} darkMode={false} />
                            </div>
                          )}
                        </div>

                        <button
                          onClick={() => {
                            if (isSelected) {
                              setShowFilmPopup(true);
                            } else {
                              onSelectType(i);
                            }
                          }}
                          className="transition-all w-full text-center py-1.5 px-1 rounded-lg text-xs font-extrabold cursor-pointer active:scale-95 tracking-wide"
                          style={{
                            background: isSelected ? "#00CED1" : (darkMode ? "#1A2530" : "#F1F5F9"),
                            border: isSelected ? "1.5px solid #00CED1" : `1.5px solid ${border}`,
                            color: isSelected ? "#0F172A" : (darkMode ? "#E2E8F0" : "#475569"),
                            boxShadow: isSelected ? "0 0 10px rgba(0,206,209,0.35)" : "none",
                          }}
                        >
                          {t.type}
                        </button>
                      </div>
                    );
                  };

                  if (isJudetLetournel) {
                    const elementaryList = classSystem.types.slice(0, 5);
                    const associatedList = classSystem.types.slice(5, 10);

                    return (
                      <div className="flex flex-col gap-4">
                        {/* Row 1: Elementary Types */}
                        <div>
                          <div style={{ color: "#00CED1", fontSize: 11, fontWeight: 800, marginBottom: 8, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                            {language === "en" ? "Elementary Types (5)" : "รูปแบบพื้นฐาน (Elementary Types)"}
                          </div>
                          <div className="flex gap-2 overflow-x-auto pb-2" style={{ scrollbarWidth: "none", scrollSnapType: "x mandatory" }}>
                            {elementaryList.map((t, idx) => renderTypeCard(t, idx))}
                          </div>
                        </div>

                        {/* Row 2: Associated Types */}
                        <div>
                          <div style={{ color: "#E67E22", fontSize: 11, fontWeight: 800, marginBottom: 8, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                            {language === "en" ? "Associated Types (5)" : "รูปแบบซับซ้อน (Associated Types)"}
                          </div>
                          <div className="flex gap-2 overflow-x-auto pb-2" style={{ scrollbarWidth: "none", scrollSnapType: "x mandatory" }}>
                            {associatedList.map((t, idx) => renderTypeCard(t, idx + 5))}
                          </div>
                        </div>
                      </div>
                    );
                  }

                  const isYoungBurgess = classSystem.system.toLowerCase().includes("young") ||
                    classSystem.types.some(t => t.type.startsWith("APC") || t.type.startsWith("LC") || t.type.startsWith("VS"));

                  if (isYoungBurgess) {
                    const apcItems = classSystem.types.map((t, idx) => ({ t, idx })).filter(item => item.t.type.startsWith("APC"));
                    const lcItems = classSystem.types.map((t, idx) => ({ t, idx })).filter(item => item.t.type.startsWith("LC"));
                    const vsItems = classSystem.types.map((t, idx) => ({ t, idx })).filter(item => item.t.type.startsWith("VS"));

                    return (
                      <div className="flex flex-col gap-4">
                        {/* Row 1: APC Types */}
                        <div>
                          <div style={{ color: "#00CED1", fontSize: 11, fontWeight: 800, marginBottom: 8, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                            {language === "en" ? "APC - Anterior-Posterior Compression" : "APC - แรงอัดหน้าหลัง (Anterior-Posterior Compression)"}
                          </div>
                          <div className="flex gap-2 overflow-x-auto pb-2" style={{ scrollbarWidth: "none", scrollSnapType: "x mandatory" }}>
                            {apcItems.map(item => renderTypeCard(item.t, item.idx))}
                          </div>
                        </div>

                        {/* Row 2: LC Types */}
                        <div>
                          <div style={{ color: "#2ECC71", fontSize: 11, fontWeight: 800, marginBottom: 8, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                            {language === "en" ? "LC - Lateral Compression" : "LC - แรงบีบด้านข้าง (Lateral Compression)"}
                          </div>
                          <div className="flex gap-2 overflow-x-auto pb-2" style={{ scrollbarWidth: "none", scrollSnapType: "x mandatory" }}>
                            {lcItems.map(item => renderTypeCard(item.t, item.idx))}
                          </div>
                        </div>

                        {/* Row 3: VS Types */}
                        <div>
                          <div style={{ color: "#E74C3C", fontSize: 11, fontWeight: 800, marginBottom: 8, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                            {language === "en" ? "VS - Vertical Shear" : "VS - แรงเฉือนแนวตั้ง (Vertical Shear)"}
                          </div>
                          <div className="flex gap-2 overflow-x-auto pb-2" style={{ scrollbarWidth: "none", scrollSnapType: "x mandatory" }}>
                            {vsItems.map(item => renderTypeCard(item.t, item.idx))}
                          </div>
                        </div>
                      </div>
                    );
                  }

                  const isLaugeHansen = classSystem.system.toLowerCase().includes("lauge") ||
                    classSystem.types.some(t => t.type.startsWith("SER") || t.type.startsWith("SA") || t.type.startsWith("PER") || t.type.startsWith("PA"));

                  if (isLaugeHansen) {
                    const serItems = classSystem.types.map((t, idx) => ({ t, idx })).filter(item => item.t.type.startsWith("SER"));
                    const saItems = classSystem.types.map((t, idx) => ({ t, idx })).filter(item => item.t.type.startsWith("SA"));
                    const perItems = classSystem.types.map((t, idx) => ({ t, idx })).filter(item => item.t.type.startsWith("PER"));
                    const paItems = classSystem.types.map((t, idx) => ({ t, idx })).filter(item => item.t.type.startsWith("PA"));

                    return (
                      <div className="flex flex-col gap-4">
                        {/* Row 1: SER Types */}
                        {serItems.length > 0 && (
                          <div>
                            <div style={{ color: "#00CED1", fontSize: 11, fontWeight: 800, marginBottom: 8, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                              {language === "en" ? "SER - Supination-External Rotation" : "SER - หงายเท้าหมุนออกนอก (Supination-External Rotation)"}
                            </div>
                            <div className="flex gap-2 overflow-x-auto pb-2" style={{ scrollbarWidth: "none", scrollSnapType: "x mandatory" }}>
                              {serItems.map(item => renderTypeCard(item.t, item.idx))}
                            </div>
                          </div>
                        )}

                        {/* Row 2: SA Types */}
                        {saItems.length > 0 && (
                          <div>
                            <div style={{ color: "#2ECC71", fontSize: 11, fontWeight: 800, marginBottom: 8, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                              {language === "en" ? "SA - Supination-Adduction" : "SA - หงายเท้าหุบเข้าใน (Supination-Adduction)"}
                            </div>
                            <div className="flex gap-2 overflow-x-auto pb-2" style={{ scrollbarWidth: "none", scrollSnapType: "x mandatory" }}>
                              {saItems.map(item => renderTypeCard(item.t, item.idx))}
                            </div>
                          </div>
                        )}

                        {/* Row 3: PER Types */}
                        {perItems.length > 0 && (
                          <div>
                            <div style={{ color: "#F39C12", fontSize: 11, fontWeight: 800, marginBottom: 8, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                              {language === "en" ? "PER - Pronation-External Rotation" : "PER - คว่ำเท้าหมุนออกนอก (Pronation-External Rotation)"}
                            </div>
                            <div className="flex gap-2 overflow-x-auto pb-2" style={{ scrollbarWidth: "none", scrollSnapType: "x mandatory" }}>
                              {perItems.map(item => renderTypeCard(item.t, item.idx))}
                            </div>
                          </div>
                        )}

                        {/* Row 4: PA Types */}
                        {paItems.length > 0 && (
                          <div>
                            <div style={{ color: "#E74C3C", fontSize: 11, fontWeight: 800, marginBottom: 8, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                              {language === "en" ? "PA - Pronation-Abduction" : "PA - คว่ำเท้ากางออกนอก (Pronation-Abduction)"}
                            </div>
                            <div className="flex gap-2 overflow-x-auto pb-2" style={{ scrollbarWidth: "none", scrollSnapType: "x mandatory" }}>
                              {paItems.map(item => renderTypeCard(item.t, item.idx))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  }

                  const hasNoImages = classSystem.types.every(t => !t.illustrationId || t.illustrationId === "none" || t.illustrationId === "");

                  if (hasNoImages) {
                    return (
                      <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar items-center py-1">
                        {classSystem.types.map((t, i) => (
                          <button
                            key={t.type}
                            onClick={() => onSelectType(i)}
                            className="transition-all whitespace-nowrap flex-shrink-0"
                            style={{
                              padding: "8px 14px",
                              borderRadius: 8,
                              fontSize: 11.5,
                              fontWeight: 800,
                              cursor: "pointer",
                              background: selectedTypeIdx === i ? "#00CED1" : (darkMode ? "#1A2530" : "#E0F2FE"),
                              border: selectedTypeIdx === i ? "1.5px solid #00CED1" : `1.5px solid ${border}`,
                              color: selectedTypeIdx === i ? "#0F172A" : (darkMode ? "#E2E8F0" : "#1E293B"),
                            }}
                          >
                            {t.type}
                          </button>
                        ))}
                      </div>
                    );
                  }

                  return (
                    <div className="flex gap-2 overflow-x-auto pb-3" style={{ scrollbarWidth: "none", scrollSnapType: "x mandatory" }}>
                      {classSystem.types.map((t, i) => renderTypeCard(t, i))}
                    </div>
                  );
                })()}
              </div>

              {/* Description of the selected type */}
              {fracType && (
                <div key={`${classSystem.system}-${fracType.type}`} style={{ animation: "scaleIn 0.25s ease both" }}>
                  <div style={{ marginBottom: 12 }}>
                    <p style={{ color: textColor, fontSize: 16, fontWeight: 800, margin: "0 0 12px 0", lineHeight: 1.4 }}>
                      {fracType.name[language]}
                    </p>

                    {/* Description Box */}
                    <div
                      style={{
                        background: darkMode ? "rgba(148, 163, 184, 0.05)" : "rgba(148, 163, 184, 0.05)",
                        border: `1px solid ${darkMode ? "rgba(148, 163, 184, 0.2)" : "rgba(148, 163, 184, 0.3)"}`,
                        borderRadius: 8,
                        padding: "10px 12px",
                      }}
                    >
                      <div style={{ color: mutedText, fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>
                        {language === "en" ? "Description" : "รายละเอียด"}
                      </div>
                      <ul style={{ color: textColor, fontSize: 12.5, margin: 0, paddingLeft: 18, lineHeight: 1.5 }}>
                        {fracType.description[language].split('\n').map((line, idx) => {
                          const isIndented = /^\s{2,}|\t/.test(line);
                          const cleanText = line.replace(/^\s*[•\-\*]\s*/, '').trim();
                          
                          if (!cleanText) return null;

                          return (
                            <li
                              key={idx}
                              style={{
                                marginBottom: 4,
                                marginLeft: isIndented ? 16 : 0,
                                listStyleType: isIndented ? "circle" : "disc",
                              }}
                            >
                              {cleanText}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>

                  {/* X-ray description */}
                  <div
                    style={{
                      background: "rgba(0,206,209,0.05)",
                      border: "1px solid rgba(0,206,209,0.2)",
                      borderRadius: 10,
                      padding: "10px 12px",
                      marginBottom: 10,
                    }}
                  >
                    <div style={{ color: "#00CED1", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>
                      X-Ray Findings
                    </div>
                    <p style={{ color: textColor, fontSize: 12, margin: 0, lineHeight: 1.6 }}>
                      {fracType.xrayDescription?.[language]}
                    </p>
                  </div>

                  {/* MOI */}
                  {fracType.moi && (
                    <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
                      <div style={{
                        flexShrink: 0, width: 28, height: 28,
                        borderRadius: 8,
                        background: "rgba(245,158,11,0.1)",
                        border: "1px solid rgba(245,158,11,0.3)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <Zap size={13} color="#F59E0B" />
                      </div>
                      <div>
                        <div style={{ color: "#F59E0B", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>
                          {language === "en" ? "Mechanism" : "กลไกการบาดเจ็บ"}
                        </div>
                        <p style={{ color: textColor, fontSize: 12, margin: 0, lineHeight: 1.6 }}>
                          {fracType.moi[language]}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Treatment comparison */}
                  {(() => {
                    const determinePreferred = (treatment: any): "conservative" | "operative" | null => {
                      if (treatment.preferred === "none" || treatment.preferred === "neutral") return null;
                      if (treatment.preferred) return treatment.preferred;

                      const consEn = (treatment.conservative?.en || "").toLowerCase();
                      const consTh = (treatment.conservative?.th || "").toLowerCase();
                      const opEn = (treatment.operative?.en || "").toLowerCase();
                      const opTh = (treatment.operative?.th || "").toLowerCase();

                      // Negative signals for conservative
                      const consNeg =
                        consEn.includes("not recommended") ||
                        consEn.includes("not indicated") ||
                        consEn.includes("rarely recommended") ||
                        consEn.includes("rarely indicated") ||
                        consEn.includes("contraindicated") ||
                        consEn.includes("poor success") ||
                        consTh.includes("ไม่แนะนำ") ||
                        consTh.includes("ห้ามใช้") ||
                        consTh.includes("อัตรากระดูกไม่ติดสูง");

                      // Negative signals for operative
                      const opNeg =
                        opEn.includes("rarely indicated") ||
                        opEn.includes("not indicated") ||
                        opEn.includes("rarely needed") ||
                        opEn.includes("rarely recommended") ||
                        opEn.includes("contraindicated") ||
                        opTh.includes("แทบไม่มีความจำเป็น") ||
                        opTh.includes("แทบไม่จำเป็น") ||
                        opTh.includes("ห้ามใช้");

                      // Positive signals for conservative
                      const consPos =
                        consEn.includes("primary choice") ||
                        consEn.includes("first choice") ||
                        consEn.includes("highly successful") ||
                        consEn.includes("mainstay") ||
                        consTh.includes("อัตราการติดสูง") ||
                        consTh.includes("อัตราติดเกือบ 100%") ||
                        consTh.includes("แนะนำเป็นหลัก");

                      // Positive signals for operative
                      const opPos =
                        opEn.includes("gold standard") ||
                        opEn.includes("primary surgical") ||
                        opEn.includes("primary fixation") ||
                        opEn.includes("recommended") ||
                        opEn.includes("indicated") ||
                        opTh.includes("มาตรฐานหลัก") ||
                        opTh.includes("แนะนำอย่างยิ่ง") ||
                        opTh.includes("แนะนำให้ผ่าตัด") ||
                        opTh.includes("เป็นอันดับแรก") ||
                        opTh.includes("เป็นหลัก");

                      if (consNeg && !opNeg) return "operative";
                      if (opNeg && !consNeg) return "conservative";
                      if (consPos && !opPos) return "conservative";
                      if (opPos && !consPos) return "operative";

                      return null;
                    };

                    const preferred = determinePreferred(fracType.treatment);
                    const isConsPreferred = preferred === "conservative";
                    const isOpPreferred = preferred === "operative";

                    return (
                      <div>
                        <div style={{ color: mutedText, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>
                          {language === "en" ? "Management" : "การรักษา"}
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                          {/* Conservative */}
                          <div style={{
                            background: darkMode ? "rgba(255, 255, 255, 0.03)" : "#F8FAFC",
                            border: `1px solid ${border}`,
                            borderRadius: 10,
                            padding: "12px 14px",
                          }}>
                            <div style={{ color: "#2ECC71", fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6, display: "flex", alignItems: "center", gap: 4 }}>
                              <span>Conservative</span>
                              {isConsPreferred && (
                                <span 
                                  style={{ 
                                    color: "#F59E0B", 
                                    fontSize: 12, 
                                    textShadow: "0 0 3px rgba(245, 158, 11, 0.5)"
                                  }} 
                                  title={language === "en" ? "Preferred Treatment" : "การรักษาที่แนะนำเป็นหลัก"}
                                >
                                  ★
                                </span>
                              )}
                            </div>
                            <p style={{ color: textColor, fontSize: 11.5, margin: 0, lineHeight: 1.6 }}>
                              {fracType.treatment.conservative[language]}
                            </p>
                          </div>

                          {/* Operative */}
                          <div style={{
                            background: darkMode ? "rgba(255, 255, 255, 0.03)" : "#F8FAFC",
                            border: `1px solid ${border}`,
                            borderRadius: 10,
                            padding: "12px 14px",
                          }}>
                            <div style={{ color: "#3B82F6", fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6, display: "flex", alignItems: "center", gap: 4 }}>
                              <span>Operative</span>
                              {isOpPreferred && (
                                <span 
                                  style={{ 
                                    color: "#F59E0B", 
                                    fontSize: 12, 
                                    textShadow: "0 0 3px rgba(245, 158, 11, 0.5)"
                                  }} 
                                  title={language === "en" ? "Preferred Treatment" : "การรักษาที่แนะนำเป็นหลัก"}
                                >
                                  ★
                                </span>
                              )}
                            </div>
                            <p style={{ color: textColor, fontSize: 11.5, margin: 0, lineHeight: 1.6 }}>
                              {fracType.treatment.operative[language]}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              )}
            </div>
          )
        ) : (
          <div className="flex flex-col gap-3" style={{ animation: "scaleIn 0.25s ease both" }}>
            {getInvestigations().map((inv, idx) => (
              <div key={idx} style={{
                background: darkMode ? "rgba(46,204,113,0.05)" : "rgba(46,204,113,0.05)",
                border: `1px solid ${darkMode ? "rgba(46,204,113,0.2)" : "rgba(46,204,113,0.3)"}`,
                borderRadius: 8,
                padding: "12px 14px",
              }}>
                <div style={{ color: "#2ECC71", fontSize: 13, fontWeight: 800, marginBottom: 6 }}>
                  {inv.name}
                </div>
                <p style={{ color: textColor, fontSize: 12.5, margin: 0, lineHeight: 1.5 }}>
                  {inv.details[language]}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      )}
      {/* Classification Media Viewer Modal (Switch between Diagram & Real X-Ray) */}
      {showFilmPopup && fracType && (
        <ClassificationMediaViewerModal
          fracType={fracType}
          language={language}
          darkMode={darkMode}
          mutedText={mutedText}
          textColor={textColor}
          border={border}
          onClose={() => setShowFilmPopup(false)}
        />
      )}
    </aside>
  );
}
