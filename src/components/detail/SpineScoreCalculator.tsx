import React, { useState, useEffect } from "react";

interface SpineScoreCalculatorProps {
  system: string;
  language: "en" | "th";
  darkMode: boolean;
  onScoreCalculated?: (totalScore: number, recommendedType: string) => void;
}

export const SpineScoreCalculator: React.FC<SpineScoreCalculatorProps> = ({
  system,
  language,
  darkMode,
  onScoreCalculated,
}) => {
  const isSLIC = system.toUpperCase().includes("SLIC");

  // State: stores SELECTED INDEX in options array (0 = first option)
  const [morphologyIdx, setMorphologyIdx] = useState<number>(0);
  const [ligamentIdx, setLigamentIdx] = useState<number>(0);
  const [neuroIdx, setNeuroIdx] = useState<number>(0);
  const [hasPersistentCordCompression, setHasPersistentCordCompression] = useState<boolean>(false);

  // SLIC Options (Vaccaro et al. 2007 - Subaxial Cervical C3-C7)
  const slicMorphologyOptions = [
    { value: 0, name: { en: "No Abnormality (0 pts)", th: "ไม่พบความผิดปกติ (0 คะแนน)" } },
    { value: 1, name: { en: "Compression (1 pt)", th: "Compression - หักยุบเฉพาะเสาหน้า (1 คะแนน)" } },
    { value: 2, name: { en: "Burst (2 pts)", th: "Burst - หักแตกป่นเสาหน้าและกลาง (2 คะแนน)" } },
    { value: 3, name: { en: "Distraction (3 pts)", th: "Distraction - แรงดึงถ่างอ้าแยก / Facet perch (3 คะแนน)" } },
    { value: 4, name: { en: "Translation / Rotation (4 pts)", th: "Translation / Rotation - เคลื่อนหมุนหลุดแปลกแนว (4 คะแนน)" } },
  ];

  const slicDlcOptions = [
    { value: 0, name: { en: "Intact DLC (0 pts)", th: "Intact - หมอนรองและเอ็นยึด DLC สมบูรณ์ (0 คะแนน)" } },
    { value: 1, name: { en: "Indeterminate / Suspected DLC (1 pt)", th: "Indeterminate - สงสัยหมอนรอง/เอ็น DLC บาดเจ็บ (1 คะแนน)" } },
    { value: 2, name: { en: "Disrupted DLC (2 pts)", th: "Disrupted - หมอนรองและเอ็นยึด DLC ฉีกขาดสมบูรณ์ (2 คะแนน)" } },
  ];

  const slicNeuroOptions = [
    { value: 0, name: { en: "Intact (0 pts)", th: "Intact - ระบบประสาทปกติ (0 คะแนน)" } },
    { value: 1, name: { en: "Root Injury (1 pt)", th: "Root Injury - บาดเจ็บรากเส้นประสาท (1 คะแนน)" } },
    { value: 2, name: { en: "Complete Cord Injury (2 pts)", th: "Complete Cord Injury - ไขสันหลังบาดเจ็บสมบูรณ์ (2 คะแนน)" } },
    { value: 3, name: { en: "Incomplete Cord Injury (3 pts)", th: "Incomplete Cord Injury - ไขสันหลังบาดเจ็บบางส่วน (3 คะแนน)" } },
  ];

  // TLICS Options (Vaccaro et al. 2005 - Thoracolumbar T1-L5)
  const tlicsMorphologyOptions = [
    { value: 0, name: { en: "No Abnormality (0 pts)", th: "ไม่พบความผิดปกติ (0 คะแนน)" } },
    { value: 1, name: { en: "Compression (1 pt)", th: "Compression - หักยุบตัวส่วนหน้า (1 คะแนน)" } },
    { value: 2, name: { en: "Burst (2 pts)", th: "Burst - หักแตกป่นเสาหลักกลาง (2 คะแนน)" } },
    { value: 3, name: { en: "Translational / Rotation (3 pts)", th: "Translation / Rotation - เคลื่อนหมุนหลุดแปลกแนว (3 คะแนน)" } },
    { value: 4, name: { en: "Distraction (4 pts)", th: "Distraction - แรงดึงถ่างอ้าแยก (4 คะแนน)" } },
  ];

  const tlicsPlcOptions = [
    { value: 0, name: { en: "Intact PLC (0 pts)", th: "Intact - เอ็นยึดด้านหลัง PLC สมบูรณ์ (0 คะแนน)" } },
    { value: 2, name: { en: "Suspected / Indeterminate PLC (2 pts)", th: "Suspected / Indeterminate - สงสัยเอ็น PLC บาดเจ็บ (2 คะแนน)" } },
    { value: 3, name: { en: "Disrupted PLC (3 pts)", th: "Disrupted - เอ็นยึดด้านหลัง PLC ฉีกขาดสมบูรณ์ (3 คะแนน)" } },
  ];

  const tlicsNeuroOptions = [
    { value: 0, name: { en: "Intact (0 pts)", th: "Intact - ระบบประสาทปกติ (0 คะแนน)" } },
    { value: 2, name: { en: "Nerve Root Injury (2 pts)", th: "Nerve Root Injury - บาดเจ็บรากเส้นประสาท (2 คะแนน)" } },
    { value: 2, name: { en: "Complete Cord Injury (2 pts)", th: "Complete Cord Injury - ไขสันหลังบาดเจ็บสมบูรณ์ (2 คะแนน)" } },
    { value: 3, name: { en: "Incomplete Cord Injury (3 pts)", th: "Incomplete Cord Injury - ไขสันหลังบาดเจ็บบางส่วน (3 คะแนน)" } },
    { value: 3, name: { en: "Cauda Equina Syndrome (3 pts)", th: "Cauda Equina Syndrome - รากประสาทพวงทวารหนักบาดเจ็บ (3 คะแนน)" } },
  ];

  const morphologyOptions = isSLIC ? slicMorphologyOptions : tlicsMorphologyOptions;
  const ligamentOptions = isSLIC ? slicDlcOptions : tlicsPlcOptions;
  const neuroOptions = isSLIC ? slicNeuroOptions : tlicsNeuroOptions;

  // Derive scores from selected indices
  const morphologyScore = morphologyOptions[morphologyIdx]?.value ?? 0;
  const ligamentScore   = ligamentOptions[ligamentIdx]?.value ?? 0;
  const neuroScore      = neuroOptions[neuroIdx]?.value ?? 0;
  const cordModifier    = (isSLIC && hasPersistentCordCompression) ? 1 : 0;

  // Total Calculation
  const totalScore = morphologyScore + ligamentScore + neuroScore + cordModifier;

  // Target Type Recommendation
  const prefix = isSLIC ? "SLIC" : "TLICS";
  const recommendedType = totalScore < 4
    ? `${prefix} < 4`
    : totalScore === 4
    ? `${prefix} = 4`
    : `${prefix} > 4`;

  useEffect(() => {
    if (onScoreCalculated) {
      onScoreCalculated(totalScore, recommendedType);
    }
  }, [totalScore, recommendedType, onScoreCalculated]);

  const textColor = darkMode ? "#F8FAFC" : "#0F172A";
  const mutedText = darkMode ? "#94A3B8" : "#64748B";
  const cardBg = darkMode ? "#1E293B" : "#F8FAFC";
  const border = darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";

  const badgeSystemText = isSLIC ? "SLIC SYSTEM (VACCARO ET AL. 2007)" : "TLICS SYSTEM (VACCARO ET AL. 2005)";
  const systemHeaderTitle = isSLIC
    ? { en: "SLIC Score Calculator (DLC System)", th: "เครื่องคำนวณ SLIC Score (ระบบเอ็นหมอนรอง DLC)" }
    : { en: "TLICS Score Calculator (PLC System)", th: "เครื่องคำนวณ TLICS Score (ระบบเอ็นหลัง PLC)" };

  const ligamentHeaderLabel = isSLIC
    ? { en: "Disruption of Ligamentous Complex (DLC)", th: "ความสมบูรณ์ของหมอนรองและเอ็นยึด (DLC)" }
    : { en: "Posterior Ligamentous Complex (PLC)", th: "ความสมบูรณ์ของเอ็นยึดด้านหลัง (PLC)" };

  return (
    <div
      style={{
        background: darkMode ? "#0F172A" : "#FFFFFF",
        border: `1.5px solid ${border}`,
        borderRadius: 14,
        padding: "16px",
        marginBottom: "16px",
        boxShadow: darkMode ? "0 4px 20px rgba(0,0,0,0.4)" : "0 4px 20px rgba(0,0,0,0.05)",
      }}
    >
      {/* Title & Live Score Badge */}
      <div className="flex items-center justify-between mb-4 border-b pb-3" style={{ borderColor: border }}>
        <div>
          <div style={{ color: "#A855F7", fontSize: 10, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 2 }}>
            {badgeSystemText}
          </div>
          <h3 style={{ color: textColor, fontSize: 16, fontWeight: 800, margin: 0 }}>
            {systemHeaderTitle[language]}
          </h3>
        </div>

        {/* Total Score Counter Box */}
        <div
          className="flex flex-col items-center justify-center px-4 py-1.5 rounded-xl transition-all"
          style={{
            background: totalScore < 4
              ? "rgba(46, 204, 113, 0.15)"
              : totalScore === 4
              ? "rgba(243, 156, 18, 0.15)"
              : "rgba(231, 76, 60, 0.15)",
            border: totalScore < 4
              ? "1.5px solid #2ECC71"
              : totalScore === 4
              ? "1.5px solid #F39C12"
              : "1.5px solid #E74C3C",
          }}
        >
          <span style={{ color: mutedText, fontSize: 9, fontWeight: 700, textTransform: "uppercase" }}>
            TOTAL SCORE
          </span>
          <span
            style={{
              color: totalScore < 4 ? "#2ECC71" : totalScore === 4 ? "#F39C12" : "#E74C3C",
              fontSize: 22,
              fontWeight: 900,
              lineHeight: 1,
            }}
          >
            {totalScore}
          </span>
        </div>
      </div>

      {/* Category 1: Fracture Morphology */}
      <div style={{ marginBottom: 14 }}>
        <label style={{ color: "#38BDF8", fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.04em", display: "block", marginBottom: 6 }}>
          1. {language === "en" ? "Fracture Morphology" : "ลักษณะทางกายวิภาคของรอยหัก (Morphology)"}
        </label>
        <div className="flex flex-col gap-1.5">
          {morphologyOptions.map((opt, idx) => {
            const isSelected = morphologyIdx === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setMorphologyIdx(idx)}
                className="flex items-center justify-between text-left transition-all px-3 py-2 rounded-lg cursor-pointer"
                style={{
                  background: isSelected ? (darkMode ? "rgba(56, 189, 248, 0.16)" : "#E0F2FE") : cardBg,
                  border: isSelected ? "1.5px solid #38BDF8" : `1px solid ${border}`,
                  color: isSelected ? (darkMode ? "#38BDF8" : "#0284C7") : textColor,
                  fontSize: 12,
                  fontWeight: isSelected ? 700 : 500,
                }}
              >
                <span>{opt.name[language]}</span>
                <span
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    border: isSelected ? "4px solid #38BDF8" : `1.5px solid ${mutedText}`,
                    background: isSelected ? "#FFFFFF" : "transparent",
                    flexShrink: 0,
                  }}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Category 2: Ligamentous Complex (DLC or PLC) */}
      <div style={{ marginBottom: 14 }}>
        <label style={{ color: "#A855F7", fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.04em", display: "block", marginBottom: 6 }}>
          2. {ligamentHeaderLabel[language]}
        </label>
        <div className="flex flex-col gap-1.5">
          {ligamentOptions.map((opt, idx) => {
            const isSelected = ligamentIdx === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setLigamentIdx(idx)}
                className="flex items-center justify-between text-left transition-all px-3 py-2 rounded-lg cursor-pointer"
                style={{
                  background: isSelected ? (darkMode ? "rgba(168, 85, 247, 0.16)" : "#F3E8FF") : cardBg,
                  border: isSelected ? "1.5px solid #A855F7" : `1px solid ${border}`,
                  color: isSelected ? (darkMode ? "#C084FC" : "#7E22CE") : textColor,
                  fontSize: 12,
                  fontWeight: isSelected ? 700 : 500,
                }}
              >
                <span>{opt.name[language]}</span>
                <span
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    border: isSelected ? "4px solid #A855F7" : `1.5px solid ${mutedText}`,
                    background: isSelected ? "#FFFFFF" : "transparent",
                    flexShrink: 0,
                  }}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Category 3: Neurological Status */}
      <div style={{ marginBottom: 14 }}>
        <label style={{ color: "#F59E0B", fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.04em", display: "block", marginBottom: 6 }}>
          3. {language === "en" ? "Neurological Status" : "ภาวะทางระบบประสาท (Neurological Status)"}
        </label>
        <div className="flex flex-col gap-1.5">
          {neuroOptions.map((opt, idx) => {
            const isSelected = neuroIdx === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setNeuroIdx(idx)}
                className="flex items-center justify-between text-left transition-all px-3 py-2 rounded-lg cursor-pointer"
                style={{
                  background: isSelected ? (darkMode ? "rgba(245, 158, 11, 0.16)" : "#FEF3C7") : cardBg,
                  border: isSelected ? "1.5px solid #F59E0B" : `1px solid ${border}`,
                  color: isSelected ? (darkMode ? "#FBBF24" : "#B45309") : textColor,
                  fontSize: 12,
                  fontWeight: isSelected ? 700 : 500,
                }}
              >
                <span>{opt.name[language]}</span>
                <span
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    border: isSelected ? "4px solid #F59E0B" : `1.5px solid ${mutedText}`,
                    background: isSelected ? "#FFFFFF" : "transparent",
                    flexShrink: 0,
                  }}
                />
              </button>
            );
          })}
        </div>

        {/* SLIC Neurological Modifier: Continuous / Persistent Cord Compression (+1 pt) */}
        {isSLIC && (
          <div style={{ marginTop: 10 }}>
            <button
              type="button"
              onClick={() => setHasPersistentCordCompression(!hasPersistentCordCompression)}
              className="flex items-center justify-between text-left transition-all px-3 py-2.5 rounded-lg cursor-pointer w-full"
              style={{
                background: hasPersistentCordCompression
                  ? (darkMode ? "rgba(239, 68, 68, 0.2)" : "#FEE2E2")
                  : cardBg,
                border: hasPersistentCordCompression
                  ? "1.5px solid #EF4444"
                  : `1px dashed ${border}`,
                color: hasPersistentCordCompression
                  ? (darkMode ? "#FCA5A5" : "#DC2626")
                  : textColor,
                fontSize: 12,
                fontWeight: hasPersistentCordCompression ? 700 : 500,
              }}
            >
              <div className="flex items-center gap-2">
                <span
                  style={{
                    background: hasPersistentCordCompression ? "#EF4444" : mutedText,
                    color: "#FFFFFF",
                    fontSize: 9,
                    fontWeight: 900,
                    padding: "2px 6px",
                    borderRadius: 4,
                  }}
                >
                  MODIFIER (+1)
                </span>
                <span>
                  {language === "en"
                    ? "Continuous / Persistent Cord Compression (+1 pt)"
                    : "มีภาวะกดทับไขสันหลังอย่างต่อเนื่อง (Persistent Cord Compression) (+1 คะแนน)"}
                </span>
              </div>

              {/* Checkbox indicator */}
              <div
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 4,
                  border: hasPersistentCordCompression ? "2px solid #EF4444" : `1.5px solid ${mutedText}`,
                  background: hasPersistentCordCompression ? "#EF4444" : "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: "#FFFFFF",
                  fontSize: 11,
                  fontWeight: 900,
                }}
              >
                {hasPersistentCordCompression && "✓"}
              </div>
            </button>
          </div>
        )}
      </div>

      {/* Calculated Result Card */}
      <div
        className="p-3.5 rounded-xl transition-all"
        style={{
          background: totalScore < 4
            ? (darkMode ? "rgba(46, 204, 113, 0.12)" : "rgba(46, 204, 113, 0.08)")
            : totalScore === 4
            ? (darkMode ? "rgba(243, 156, 18, 0.12)" : "rgba(243, 156, 18, 0.08)")
            : (darkMode ? "rgba(231, 76, 60, 0.12)" : "rgba(231, 76, 60, 0.08)"),
          border: totalScore < 4
            ? "1.5px solid #2ECC71"
            : totalScore === 4
            ? "1.5px solid #F39C12"
            : "1.5px solid #E74C3C",
        }}
      >
        <div className="flex items-center gap-2 mb-1">
          <span
            style={{
              background: totalScore < 4 ? "#2ECC71" : totalScore === 4 ? "#F39C12" : "#E74C3C",
              color: "#0F172A",
              fontSize: 9.5,
              fontWeight: 900,
              padding: "2px 8px",
              borderRadius: 6,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
            }}
          >
            {totalScore < 4
              ? (language === "en" ? "CONSERVATIVE (< 4)" : "รักษาไม่ผ่าตัด (< 4 คะแนน)")
              : totalScore === 4
              ? (language === "en" ? "EQUIVOCAL (= 4)" : "กึ่งก้ำกึ่ง (= 4 คะแนน)")
              : (language === "en" ? "OPERATIVE (> 4)" : "แนะนำผ่าตัด (> 4 คะแนน)")}
          </span>
        </div>

        <p style={{ color: textColor, fontSize: 12, margin: "4px 0 0 0", lineHeight: 1.5, fontWeight: 600 }}>
          {totalScore < 4
            ? (language === "en"
                ? `Mechanically STABLE injury pattern. Non-operative management with Rigid Orthosis (${isSLIC ? "Cervical Collar" : "TLSO/Collar"}) for 8-12 weeks is recommended.`
                : `รอยหักมีความมั่นคงเชิงกลศาสตร์ แนะนำรักษาแบบไม่ผ่าตัด ใส่เฝือกพยุง (${isSLIC ? "เฝือกคอชนิดแข็ง Collar" : "เฝือกพยุงหลัง TLSO/Collar"}) 8-12 สัปดาห์`)
            : totalScore === 4
            ? (language === "en"
                ? "EQUIVOCAL injury pattern. Treatment choice depends on patient age, baseline comorbidities, kyphosis (>25°), and surgeon discretion."
                : "รอยหักชนิดกึ่งก้ำกึ่ง (Equivocal) การตัดสินใจผ่าตัดขึ้นอยู่กับอายุ โรคประจำตัว ระดับความปวด มุมคอโก่ง และดุลยพินิจของแพทย์")
            : (language === "en"
                ? `Mechanically UNSTABLE injury pattern, disrupted ${isSLIC ? "Disruption of Ligamentous Complex (DLC)" : "Posterior Ligamentous Complex (PLC)"}, or neurological deficit. Surgical decompression & stabilization recommended.`
                : `รอยหักไม่มั่นคงอย่างรุนแรง, เอ็นหมอนรอง (${isSLIC ? "DLC" : "PLC"}) ฉีกขาด หรือมีอาการอัมพาต แนะนำผ่าตัด減壓และดามยึดกระดูกเพื่อสร้างความมั่นคง`)}
        </p>
      </div>
    </div>
  );
};
