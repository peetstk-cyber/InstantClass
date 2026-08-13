import { useState, useEffect, useCallback } from "react";
import type { Language } from "../../App";
import type { BoneData, ClassificationSystem, FractureClassificationType, InvestigationView } from "../../types";
import { X, Zap, BookOpen, Info } from "lucide-react";
import { FractureIllustration } from "./FractureIllustration";
import { SpineScoreCalculator } from "./SpineScoreCalculator";

interface DetailPanelProps {
  darkMode: boolean;
  language: Language;
  bone: BoneData | null;
  selectedRegionId: string | null;
  onSelectRegion: (id: string) => void;
  selectedSystemIdx: number;
  onSelectSystem: (i: number) => void;
  selectedTypeIdx: number;
  onSelectType: (i: number) => void;
  onClose: () => void;
}

/** Renders investigation image item safely; hides completely if no image or if image fails to load. */
function InvestigationImageItem({
  src,
  alt,
  border,
  darkMode,
}: {
  src?: string;
  alt: string;
  border: string;
  darkMode: boolean;
}) {
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [src]);

  if (!src || error) return null;

  return (
    <div style={{ marginTop: 10, borderRadius: 10, overflow: "hidden", border: `1px solid ${border}`, background: darkMode ? "#0B0F17" : "#0F172A", padding: 6 }}>
      <img
        src={src}
        alt={alt}
        onError={() => setError(true)}
        style={{ width: "100%", maxHeight: 280, objectFit: "contain", borderRadius: 6, display: "block", background: "#000" }}
      />
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
  mutedText,
  darkMode,
  language = "en",
}: {
  fullName: string;
  description: string;
  concept?: {
    title?: { en: string; th: string };
    imageUrl?: string;
    description?: { en: string; th: string };
    showTable?: boolean;
  };
  textColor: string;
  mutedText: string;
  darkMode: boolean;
  language?: "en" | "th";
}) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showConceptModal, setShowConceptModal] = useState(false);

  return (
    <div style={{ position: "relative", marginBottom: 12 }}>
      <div className="flex items-center justify-between gap-2">
        <h3
          style={{
            color: textColor,
            fontSize: 14,
            fontWeight: 800,
            margin: 0,
            lineHeight: 1.3,
            flex: 1,
          }}
        >
          {fullName}
        </h3>

        {concept && (
          <button
            onClick={() => setShowConceptModal(true)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all flex-shrink-0"
            style={{
              background: darkMode ? "rgba(245, 158, 11, 0.18)" : "rgba(245, 158, 11, 0.12)",
              color: "#F59E0B",
              border: "1.5px solid rgba(245, 158, 11, 0.4)",
              boxShadow: "0 0 8px rgba(245, 158, 11, 0.25)",
              cursor: "pointer",
            }}
          >
            <span>💡</span>
            <span>{language === "en" ? "Concept" : "แนวคิด"}</span>
          </button>
        )}

        {description && (
          <div style={{ position: "relative", flexShrink: 0 }}>
            <button
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              onClick={() => setShowTooltip((prev) => !prev)}
              aria-label="Classification Description"
              title="Classification Description Info"
              style={{
                background: showTooltip
                  ? darkMode
                    ? "#1E293B"
                    : "#E2E8F0"
                  : darkMode
                  ? "rgba(255,255,255,0.05)"
                  : "rgba(0,0,0,0.04)",
                border: `1px solid ${
                  showTooltip ? "#00CED1" : darkMode ? "#334155" : "#CBD5E1"
                }`,
                borderRadius: "50%",
                width: 24,
                height: 24,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: showTooltip ? "#00CED1" : mutedText,
                transition: "all 0.15s ease",
                padding: 0,
              }}
            >
              <Info size={14} />
            </button>

            {showTooltip && (
              <div
                style={{
                  position: "absolute",
                  top: 30,
                  right: 0,
                  width: 300,
                  maxWidth: "85vw",
                  padding: "12px 14px",
                  background: darkMode ? "#1E293B" : "#FFFFFF",
                  color: textColor,
                  border: `1px solid ${darkMode ? "#475569" : "#CBD5E1"}`,
                  borderRadius: 10,
                  boxShadow: darkMode
                    ? "0 10px 30px -5px rgba(0, 0, 0, 0.8), 0 8px 12px -6px rgba(0, 0, 0, 0.6)"
                    : "0 10px 30px -5px rgba(0, 0, 0, 0.18), 0 8px 12px -6px rgba(0, 0, 0, 0.12)",
                  fontSize: 12,
                  lineHeight: 1.5,
                  zIndex: 100,
                  pointerEvents: "auto",
                  animation: "fadeIn 0.15s ease",
                }}
              >
                <div
                  style={{
                    color: "#00CED1",
                    fontSize: 10,
                    fontWeight: 700,
                    marginBottom: 6,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  <Info size={12} />
                  <span>
                    {language === "en"
                      ? "System Summary"
                      : "คำอธิบายภาพรวมของระบบ"}
                  </span>
                </div>
                {description}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Concept Modal Overlay */}
      {showConceptModal && concept && (
        <div 
          onClick={() => setShowConceptModal(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0, 0, 0, 0.75)",
            backdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
            animation: "fadeIn 0.2s ease both",
          }}
        >
          <div 
            onClick={e => e.stopPropagation()}
            style={{
              background: darkMode ? "#1E293B" : "#FFFFFF",
              color: textColor,
              borderRadius: 16,
              border: `1px solid ${darkMode ? "rgba(255,255,255,0.15)" : "#CBD5E1"}`,
              maxWidth: 520,
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              padding: 20,
              boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
              position: "relative",
              animation: "scaleIn 0.25s ease both",
            }}
          >
            <div className="flex items-center justify-between gap-2 mb-4 pb-3" style={{ borderBottom: `1px solid ${darkMode ? "rgba(255,255,255,0.1)" : "#E2E8F0"}` }}>
              <div className="flex items-center gap-2">
                <span className="text-lg">💡</span>
                <h4 style={{ margin: 0, fontSize: 15, fontWeight: 800, color: "#F59E0B" }}>
                  {concept.title ? concept.title[language] : (language === "en" ? "Classification Concept" : "แนวคิดการจัดจำแนก")}
                </h4>
              </div>
              <button
                onClick={() => setShowConceptModal(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all"
                style={{
                  background: darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)",
                  color: textColor,
                  border: "none",
                  cursor: "pointer",
                  fontSize: 16,
                  fontWeight: 700,
                }}
              >
                ✕
              </button>
            </div>

            {/* Embedded Table if showTable is enabled */}
            {fullName.toLowerCase().includes("patella") ? (
              <div className="mb-4">
                <PatellaConceptTable
                  language={language}
                  darkMode={darkMode}
                  textColor={textColor}
                  border={darkMode ? "rgba(255,255,255,0.12)" : "#CBD5E1"}
                />
              </div>
            ) : fullName.toLowerCase().includes("tibial shaft") ? (
              <div className="mb-4">
                <TibialShaftAlignmentTable
                  language={language}
                  darkMode={darkMode}
                  textColor={textColor}
                  border={darkMode ? "rgba(255,255,255,0.12)" : "#CBD5E1"}
                />
              </div>
            ) : (concept.showTable || fullName.toLowerCase().includes("metacarpal")) ? (
              <div className="mb-4">
                <MetacarpalAlignmentTable
                  language={language}
                  darkMode={darkMode}
                  textColor={textColor}
                  border={darkMode ? "rgba(255,255,255,0.12)" : "#CBD5E1"}
                />
              </div>
            ) : null}

            {concept.imageUrl && (
              <div 
                className="w-full flex items-center justify-center p-3 mb-4 rounded-xl"
                style={{ background: "#FFFFFF", border: "1px solid #E2E8F0" }}
              >
                <img 
                  src={concept.imageUrl} 
                  alt="Classification Concept Diagram" 
                  className="max-w-full max-h-[350px] object-contain rounded"
                />
              </div>
            )}

            {concept.description && (
              <div 
                style={{ 
                  background: darkMode ? "rgba(255,255,255,0.03)" : "#F8FAFC", 
                  borderRadius: 10, 
                  padding: "12px 14px",
                  border: `1px solid ${darkMode ? "rgba(255,255,255,0.08)" : "#E2E8F0"}`,
                  fontSize: 12.5,
                  lineHeight: 1.6,
                  whiteSpace: "pre-line",
                  color: textColor,
                }}
              >
                {concept.description[language]}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export function DetailPanel({
  darkMode, language, bone,
  selectedRegionId, onSelectRegion,
  selectedSystemIdx, onSelectSystem,
  selectedTypeIdx, onSelectType,
  onClose,
}: DetailPanelProps) {
  const [activeTab, setActiveTab] = useState<"classification" | "investigation">("classification");
  const [showFilmPopup, setShowFilmPopup] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const [dragY, setDragY] = useState(0);

  const handleAnimatedClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
      setDragY(0);
    }, 260);
  }, [onClose]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartY === null) return;
    const currentY = e.touches[0].clientY;
    const diff = currentY - touchStartY;
    if (diff > 0) {
      setDragY(diff);
    }
  };

  const handleTouchEnd = () => {
    if (dragY > 60) {
      handleAnimatedClose();
    } else {
      setDragY(0);
    }
    setTouchStartY(null);
  };
  
  // Reset tabs, system, and type when region changes; reset type when system changes
  useEffect(() => {
    setActiveTab("classification");
    setShowFilmPopup(false);
    onSelectSystem(0);
    onSelectType(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRegionId]);

  useEffect(() => {
    setActiveTab("classification");
    setShowFilmPopup(false);
    onSelectType(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSystemIdx]);

  const bg       = darkMode ? "#161B27" : "#FFFFFF";
  const border   = darkMode ? "#252F42" : "#E2E8F0";
  const mutedText = darkMode ? "#64748B" : "#94A3B8";
  const textColor = darkMode ? "#E2E8F0" : "#2C3E50";

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
          },
          imageUrl: "/images/investigations/wrist/ap_wrist_view.jpg"
        },
        {
          name: "Lateral Wrist View",
          details: {
            en: "Lateral view of the wrist. Critical to evaluate volar or dorsal tilt (angulation) of the distal radius fragment.",
            th: "ภาพเอกซเรย์ท่าด้านข้าง (Lateral) ของข้อมือ สำคัญมากในการประเมินการมุมเอียงไปด้านหน้าหรือด้านหลัง"
          },
          imageUrl: "/images/investigations/wrist/lateral_wrist_view.jpg"
        },
        {
          name: "Oblique Wrist View",
          details: {
            en: "Oblique view of the wrist. Useful for identifying intra-articular extension of the fracture line.",
            th: "ภาพเอกซเรย์ท่าเฉียง (Oblique) ของข้อมือ ช่วยในการมองหารอยหักที่ลามเข้าไปในผิวข้อ"
          },
          imageUrl: "/images/investigations/wrist/scaphoid_view.jpg"
        }
      ];
    }

    if (boneId === "humerus" && regionId === "proximal") {
      return [
        {
          name: "AP Shoulder View (Grashey)",
          details: {
            en: "True AP view of the glenohumeral joint. Prevents overlap of the humeral head and glenoid.",
            th: "ภาพเอกซเรย์ท่าหน้าหลัง (AP) จริงของข้อไหล่ ช่วยป้องกันกระดูกหัวไหล่และเบ้าไหล่ทับซ้อนกัน"
          }
        },
        {
          name: "Transscapular Y-View",
          details: {
            en: "Orthogonal lateral view of the scapula. Essential for identifying anterior/posterior displacement or dislocation.",
            th: "ภาพเอกซเรย์ท่าด้านข้างของสะบัก (Y-view) ช่วยระบุการเคลื่อนหลุดไปด้านหน้าหรือด้านหลัง"
          }
        },
        {
          name: "Axillary Lateral View",
          details: {
            en: "Axillary view to determine humeral head rotation, glenohumeral dislocation, and tuberosity displacement.",
            th: "ภาพเอกซเรย์ท่ารักแร้ (Axillary) เพื่อประเมินการบิดของหัวกระดูกต้นแขน การหลุดของข้อ และการเคลื่อนของ Tuberosity"
          }
        }
      ];
    }

    if (boneId === "tibia" && regionId === "proximal") {
      return [
        {
          name: "AP Knee View",
          details: {
            en: "Anteroposterior view of the knee. Evaluates tibial plateau depression, split, and joint alignment.",
            th: "ภาพเอกซเรย์เข่าท่าหน้าหลัง (AP) เพื่อประเมินการยุบตัวของผิวข้อหน้าแข้ง (Tibial plateau) และการแยกออกจากกัน"
          }
        },
        {
          name: "Lateral Knee View",
          details: {
            en: "Lateral view of the knee. Helps identify posterior tibial plateau involvement and tibial slope disruption.",
            th: "ภาพเอกซเรย์เข่าท่าด้านข้าง (Lateral) ช่วยตรวจหาการหักของผิวข้อหน้าแข้งด้านหลัง"
          }
        }
      ];
    }

    if (boneId === "pelvis" && regionId === "pelvic-ring") {
      return [
        {
          name: "AP Pelvis View",
          details: {
            en: "Standard AP view of the pelvic ring. Checks for symmetry, pubic symphysis diastasis, and sacroiliac joint widening.",
            th: "ภาพเอกซเรย์เชิงกรานท่าหน้าหลัง (AP) สำหรับตรวจสอบความสมมาตร ช่องกระดูกหัวหน่าวแยก หรือข้อต่อ SI joint กว้างขึ้น"
          }
        },
        {
          name: "Inlet View",
          details: {
            en: "Pelvis inlet view (40° caudal tilt). Best for assessing anterior/posterior displacement of the hemipelvis.",
            th: "ภาพเอกซเรย์ท่า Inlet (เอียงหลอดรังสีลงล่าง 40 องศา) ช่วยประเมินการเคลื่อนไปด้านหน้าหรือหลังของอุ้งเชิงกราน"
          }
        },
        {
          name: "Outlet View",
          details: {
            en: "Pelvis outlet view (40° cephalic tilt). Best for assessing vertical shear and superior/inferior displacement.",
            th: "ภาพเอกซเรย์ท่า Outlet (เอียงหลอดรังสีขึ้นบน 40 องศา) ช่วยประเมินการเลื่อนในแนวตั้งและการเคลื่อนขึ้นลง"
          }
        }
      ];
    }

    return [
      {
        name: "AP View",
        details: {
          en: `Standard Anteroposterior view of the ${region?.name.en || bone?.name.en || "bone"}. Evaluates coronal plane alignment and displacement.`,
          th: `ภาพเอกซเรย์ท่าหน้าหลัง (AP) มาตรฐานของ ${region?.name.th || bone?.name.th || "กระดูก"} เพื่อประเมินแนวการหักและการเคลื่อนในแนวโคโรนัล`
        }
      },
      {
        name: "Lateral View",
        details: {
          en: `Standard Lateral view of the ${region?.name.en || bone?.name.en || "bone"}. Evaluates sagittal plane displacement and angulation.`,
          th: `ภาพเอกซเรย์ท่าด้านข้าง (Lateral) มาตรฐานของ ${region?.name.th || bone?.name.th || "กระดูก"} เพื่อประเมินแนวการหักและการเคลื่อนในแนวซาจิตทัล`
        }
      }
    ];
  };

  if (!bone) {
    return (
      <aside
        style={{
          background: bg,
          borderColor: border,
        }}
        className="hidden md:flex flex-col items-center justify-center w-[40%] min-w-[340px] border-l p-8 text-slate-400 gap-3"
      >
        <div
          style={{
            width: 64, height: 64,
            borderRadius: 16,
            background: "rgba(0,206,209,0.08)",
            border: "1.5px dashed rgba(0,206,209,0.3)",
          }}
          className="flex items-center justify-center"
        >
          <BookOpen size={24} color="#00CED1" opacity={0.5} />
        </div>
        <p style={{ color: mutedText }} className="text-center text-xs leading-relaxed">
          {language === "en"
            ? "Click on a bone in the skeleton\nor select from the header search\nto view classifications."
            : "คลิกกระดูกบนร่าง\nหรือค้นหาด้านบน\nเพื่อดูการจำแนกประเภท"}
        </p>
      </aside>
    );
  }

  return (
    <aside
      style={{
        background: bg,
        borderColor: border,
        transform: dragY > 0 ? `translateY(${dragY}px)` : undefined,
        transition: touchStartY === null ? "transform 0.2s ease" : "none",
      }}
      className={`fixed inset-x-0 bottom-0 z-50 rounded-t-3xl max-h-[88vh] border-t shadow-[0_-10px_35px_rgba(0,0,0,0.5)] flex flex-col overflow-y-auto ${
        isClosing ? "animate-slide-down-m" : "animate-slide-up-m"
      } md:static md:w-[40%] md:min-w-[380px] md:max-h-none md:rounded-none md:border-t-0 md:border-l md:shadow-none md:animate-slide-in-r md:z-20`}
    >
      {/* Mobile Top Drag Handle */}
      <div 
        className="md:hidden flex justify-center py-3 cursor-pointer border-b border-white/5 active:bg-white/5 transition-colors select-none" 
        onClick={handleAnimatedClose}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="w-12 h-1.5 rounded-full bg-slate-400/50 hover:bg-slate-400/80 transition-colors" />
      </div>

      {/* ── Header ── */}
      <div
        style={{
          padding: "16px 18px 14px",
          borderBottom: `1px solid ${border}`,
          position: "sticky",
          top: 0,
          background: bg,
          zIndex: 10,
        }}
      >
        <div className="flex items-start justify-between">
          <div>
            <div style={{ color: "#00CED1", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>
              {region ? (
                classSystem
                  ? `${region.name[language]} : ${classSystem.fullName[language]}`
                  : region.name[language]
              ) : (language === "en" ? "Classification" : "การจัดจำแนก")}
            </div>
            <h2 style={{ color: textColor, fontSize: 18, fontWeight: 800, lineHeight: 1.2, margin: 0 }}>
              {bone.name[language]}
            </h2>
            <p style={{ color: mutedText, fontSize: 12, marginTop: 4, lineHeight: 1.5 }}>
              {bone.description[language]}
            </p>
          </div>
          <button
            onClick={handleAnimatedClose}
            className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all hover:bg-white/10"
            style={{
              background: "transparent",
              border: `1px solid ${border}`,
              color: mutedText,
              cursor: "pointer",
            }}
          >
            <X size={13} />
          </button>
        </div>

        {/* Region tabs (if multiple regions) */}
        {bone.regions.length > 1 && (
          <div className="flex gap-1.5 mt-3 flex-wrap">
            {bone.regions.map(r => {
              const isSelected = region?.id === r.id;
              return (
                <button
                  key={r.id}
                  onClick={() => onSelectRegion(r.id)}
                  className="transition-all"
                  style={{
                    padding: "5px 12px",
                    borderRadius: 8,
                    fontSize: 11.5,
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
      </div>

      {/* ── Content ── */}
      <div style={{ padding: "14px 18px", flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Main Tabs: Classifications vs Investigations */}
        <div className="flex p-1 mb-3" style={{ background: darkMode ? "#1A2530" : "#E2E8F0", borderRadius: 8 }}>
          <button
            onClick={() => setActiveTab("classification")}
            className="flex-1 py-1.5 rounded-md transition-all text-xs font-bold"
            style={{
              background: activeTab === "classification" ? (darkMode ? "#2C3E50" : "#FFFFFF") : "transparent",
              color: activeTab === "classification" ? (darkMode ? "#FFFFFF" : "#1E293B") : mutedText,
              boxShadow: activeTab === "classification" ? "0 1px 3px rgba(0,0,0,0.1)" : "none"
            }}
          >
            {language === "en" ? "Classifications" : "การจัดจำแนก"}
          </button>
          <button
            onClick={() => setActiveTab("investigation")}
            className="flex-1 py-1.5 rounded-md transition-all text-xs font-bold"
            style={{
              background: activeTab === "investigation" ? (darkMode ? "#2C3E50" : "#FFFFFF") : "transparent",
              color: activeTab === "investigation" ? (darkMode ? "#FFFFFF" : "#1E293B") : mutedText,
              boxShadow: activeTab === "investigation" ? "0 1px 3px rgba(0,0,0,0.1)" : "none"
            }}
          >
            {language === "en" ? "Investigation / X-Ray" : "การส่งตรวจ (X-Ray)"}
          </button>
        </div>

        {/* System tabs (Classification systems under region) - placed below Classifications tab */}
        {region && region.classifications.length > 1 && (
          <div className="flex gap-1.5 mb-3 overflow-x-auto no-scrollbar items-center">
            {region.classifications.map((cls, i) => {
              const isSelected = selectedSystemIdx === i;
              return (
                <button
                  key={cls.system}
                  onClick={() => onSelectSystem(i)}
                  className="transition-all whitespace-nowrap flex-shrink-0"
                  style={{
                    padding: "5px 12px",
                    borderRadius: 8,
                    fontSize: 11,
                    fontWeight: isSelected ? 800 : 600,
                    cursor: "pointer",
                    background: isSelected ? "#2ECC71" : (darkMode ? "#1A2530" : "#F1F5F9"),
                    border: isSelected ? "1.5px solid #2ECC71" : `1.5px solid ${border}`,
                    color: isSelected ? "#0F172A" : (darkMode ? "#CBD5E1" : "#475569"),
                    boxShadow: isSelected ? "0 0 10px rgba(46,204,113,0.35)" : "none",
                    letterSpacing: "0.03em",
                    textTransform: "uppercase",
                  }}
                >
                  {cls.system}
                </button>
              );
            })}
          </div>
        )}

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
              {/* System full name & description */}
              <ClassificationTitleWithInfo
                fullName={classSystem.fullName[language]}
                description={classSystem.description[language]}
                concept={classSystem.concept}
                textColor={textColor}
                mutedText={mutedText}
                darkMode={darkMode}
                language={language}
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

                  const renderTypeCard = (t: typeof classSystem.types[0], i: number) => (
                    <div key={t.type} className="flex flex-col items-center gap-2 flex-shrink-0" style={{ width: "calc(33.333% - 6px)", scrollSnapAlign: "start" }}>
                      <div 
                        onClick={() => {
                          if (selectedTypeIdx === i) setShowFilmPopup(true);
                          else onSelectType(i);
                        }}
                        className="transition-all cursor-pointer flex items-center justify-center overflow-hidden w-full p-2"
                        style={{
                          height: 150,
                          background: "#FFFFFF",
                          border: selectedTypeIdx === i ? "2px solid #00CED1" : `1.5px solid ${darkMode ? "rgba(255,255,255,0.2)" : border}`,
                          borderRadius: 10,
                          opacity: selectedTypeIdx === i ? 1 : 0.8,
                          boxShadow: selectedTypeIdx === i ? "0 0 10px rgba(0,206,209,0.35)" : "none",
                        }}
                      >
                        {t.illustrationId?.startsWith('/') || t.illustrationId?.includes('.') ? (
                          <img 
                            src={t.illustrationId} 
                            alt={t.name.en} 
                            className="max-w-full max-h-full object-contain rounded"
                          />
                        ) : (
                          <div style={{ transform: "scale(0.75)", transformOrigin: "center" }}>
                            <FractureIllustration illustrationId={t.illustrationId} darkMode={darkMode} />
                          </div>
                        )}
                      </div>
                      <button
                        onClick={() => {
                          if (selectedTypeIdx === i) setShowFilmPopup(true);
                          else onSelectType(i);
                        }}
                        className="transition-all w-full text-center"
                        style={{
                          padding: "4px 0",
                          borderRadius: 6,
                          fontSize: 10,
                          fontWeight: 800,
                          cursor: "pointer",
                          background: selectedTypeIdx === i ? "#00CED1" : "transparent",
                          border: selectedTypeIdx === i ? "1px solid #00CED1" : `1px solid ${border}`,
                          color: selectedTypeIdx === i ? "#FFFFFF" : mutedText,
                        }}
                      >
                        {t.type}
                      </button>
                    </div>
                  );

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
                      {fracType.xrayDescription[language]}
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
                {/* Image: render img element safely when imageUrl or imageId is provided and valid */}
                <InvestigationImageItem
                  src={inv.imageUrl || inv.imageId}
                  alt={inv.name}
                  border={border}
                  darkMode={darkMode}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Film Popup Modal */}
      {showFilmPopup && fracType && (
        <div 
          style={{
            position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
            background: "rgba(0,0,0,0.8)",
            zIndex: 100,
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: 20,
            animation: "fadeIn 0.2s ease"
          }}
          onClick={() => setShowFilmPopup(false)}
        >
          <div 
            style={{
              background: darkMode ? "#161B27" : "#FFFFFF",
              borderRadius: 12, padding: 20,
              maxWidth: "100%", maxHeight: "100%",
              display: "flex", flexDirection: "column",
              border: `1px solid ${darkMode ? "#252F42" : "#E2E8F0"}`,
              animation: "scaleIn 0.25s cubic-bezier(0.16,1,0.3,1)"
            }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <h3 style={{ color: textColor, margin: 0, fontSize: 16, fontWeight: 800 }}>
                {fracType.name[language]} - {language === "en" ? "X-Ray Film" : "ภาพเอกซเรย์"}
              </h3>
              <button 
                onClick={() => setShowFilmPopup(false)} 
                style={{ background: "transparent", border: "none", cursor: "pointer", padding: 4 }}
              >
                <X size={20} color={mutedText} />
              </button>
            </div>
            
            {/* Coming Soon card — replaced when actual X-Ray images are added */}
            <div
              style={{
                width: 500,
                maxWidth: "100%",
                background: darkMode ? "rgba(0,206,209,0.04)" : "rgba(0,206,209,0.06)",
                borderRadius: 12,
                border: "1.5px dashed rgba(0,206,209,0.35)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "48px 32px",
                gap: 16,
                textAlign: "center",
              }}
            >
              {/* Icon */}
              <div style={{
                width: 64, height: 64,
                borderRadius: 16,
                background: "rgba(0,206,209,0.10)",
                border: "1.5px solid rgba(0,206,209,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 28,
              }}>
                🩻
              </div>
              <div>
                <div style={{ color: "#00CED1", fontSize: 13, fontWeight: 800, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 6 }}>
                  {language === "en" ? "X-Ray Image Coming Soon" : "กำลังเตรียมภาพเอกซเรย์"}
                </div>
                <div style={{ color: mutedText, fontSize: 12, lineHeight: 1.6, maxWidth: 280 }}>
                  {language === "en"
                    ? `Reference X-Ray for ${fracType.name[language]} will be available in a future update.`
                    : `ภาพเอกซเรย์อ้างอิงสำหรับ ${fracType.name[language]} จะถูกเพิ่มในอัปเดตถัดไป`}
                </div>
              </div>
              <div style={{
                padding: "4px 12px",
                borderRadius: 20,
                background: "rgba(0,206,209,0.08)",
                border: "1px solid rgba(0,206,209,0.2)",
                color: "#00CED1",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.04em",
              }}>
                {fracType.type}
              </div>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
