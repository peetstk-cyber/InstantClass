import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import type { Language } from "../../App";
import type { RegionConcept, Translation } from "../../types";
import { 
  Stethoscope, 
  Ruler, 
  AlertTriangle, 
  Link2, 
  Lightbulb, 
  ArrowLeft,
  ZoomIn
} from "lucide-react";

interface RegionConceptPanelProps {
  concept: RegionConcept;
  boneName: Translation;
  regionName: Translation;
  darkMode: boolean;
  language: Language;
  onBackToList?: () => void;
  isDesktop?: boolean;
}

export function RegionConceptPanel({
  concept,
  boneName,
  regionName,
  darkMode,
  language,
  onBackToList,
  isDesktop = true,
}: RegionConceptPanelProps) {
  const bg = darkMode ? "#161B27" : "#FFFFFF";
  const border = darkMode ? "#252F42" : "#E2E8F0";
  const text = darkMode ? "#F1F5F9" : "#0F172A";
  const cardBg = darkMode ? "rgba(255,255,255,0.03)" : "#F8FAFC";
  const cardBorder = darkMode ? "rgba(255,255,255,0.07)" : "#E2E8F0";

  const [imgError, setImgError] = useState(false);
  const [showZoomModal, setShowZoomModal] = useState(false);

  const autoPath = `/images/concepts/${concept.imageUrl ? concept.imageUrl.replace(/^\//, "") : `anatomy_${regionName.en.toLowerCase().replace(/[^a-z0-9]/g, "_")}.png`}`;
  const finalSrc = concept.imageUrl || autoPath;

  // Reset error state whenever finalSrc or region changes
  useEffect(() => {
    setImgError(false);
  }, [finalSrc, regionName.en]);

  const hasPhysicalExam = concept.physicalExam && concept.physicalExam.length > 0;
  const hasAlignment = concept.acceptableAlignment && concept.acceptableAlignment.length > 0;
  const hasRedFlags = concept.redFlags && concept.redFlags.length > 0;
  const hasAssociated = concept.associatedInjuries && concept.associatedInjuries.length > 0;
  const hasPearls = concept.clinicalPearls && concept.clinicalPearls.length > 0;

  return (
    <div
      style={{ background: bg, color: text }}
      className={`flex flex-col h-full w-full overflow-y-auto ${isDesktop ? "p-3.5 space-y-4" : "p-4 space-y-4"}`}
    >
      {/* ── Header / Title Bar ── */}
      <div>
        {onBackToList && (
          <button
            onClick={onBackToList}
            className="flex items-center gap-1.5 text-xs font-semibold mb-2.5 text-teal-800 dark:text-[#00CED1] hover:underline cursor-pointer group transition-all"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            <span>{language === "en" ? "All Bones" : "กระดูกทั้งหมด"}</span>
          </button>
        )}

        <div className="flex items-baseline justify-between gap-2 border-b pb-2.5" style={{ borderColor: border }}>
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-teal-800 dark:text-[#00CED1]">
              {boneName[language]}
            </div>
            <h2 className="text-sm md:text-base font-extrabold tracking-tight" style={{ color: text }}>
              {regionName[language]} Concept
            </h2>
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-600/15 dark:bg-[#00CED1]/15 text-teal-900 dark:text-[#00CED1] border border-teal-600/30 dark:border-[#00CED1]/30">
            Clinical Guide
          </span>
        </div>
      </div>

      {/* ── Anatomy Image Frame (Only shown if valid image exists) ── */}
      {!imgError && (
        <div 
          key={finalSrc}
          style={{ 
            background: "#FFFFFF", 
            borderColor: cardBorder,
            minHeight: isDesktop ? 160 : 220,
            aspectRatio: "4/3"
          }}
          className="rounded-2xl border p-2.5 flex flex-col items-center justify-center relative overflow-hidden group shadow-xs transition-all hover:border-teal-600/40 dark:hover:border-[#00CED1]/40 w-full flex-shrink-0"
        >
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <img
              src={finalSrc}
              alt={`${regionName[language]} Anatomy`}
              style={{
                width: "100%",
                height: "100%",
                maxHeight: isDesktop ? 220 : 320,
                objectFit: "contain",
                display: "block",
              }}
              className="transition-transform duration-300 group-hover:scale-[1.02] cursor-pointer rounded-lg"
              onClick={() => setShowZoomModal(true)}
              onError={() => setImgError(true)}
            />
            <button
              onClick={() => setShowZoomModal(true)}
              title={language === "en" ? "Click to expand" : "คลิกเพื่อขยายดูภาพ"}
              className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/60 hover:bg-black/80 text-white opacity-85 hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer shadow backdrop-blur-xs"
            >
              <ZoomIn size={14} />
            </button>
          </div>
        </div>
      )}

      {/* Zoom Modal (Rendered at top-level body with highest z-index) */}
      {showZoomModal && !imgError && typeof document !== "undefined" && createPortal(
        <div 
          style={{
            position: "fixed", 
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(4px)",
            zIndex: 999999,
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            padding: 16,
            animation: "fadeIn 0.2s ease"
          }}
          onClick={() => setShowZoomModal(false)}
        >
          <div 
            style={{
              background: darkMode ? "#161B27" : "#FFFFFF",
              borderRadius: 20,
              padding: 16,
              width: "calc(100vw - 32px)",
              maxWidth: 720,
              maxHeight: "92vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: "0 30px 70px rgba(0,0,0,0.85)",
              position: "relative",
              border: `1.5px solid ${darkMode ? "rgba(255,255,255,0.15)" : "#CBD5E1"}`,
              animation: "scaleIn 0.25s cubic-bezier(0.16,1,0.3,1)",
              overflowY: "auto"
            }}
            onClick={e => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between mb-3 pb-2.5 border-b" style={{ borderColor: border }}>
              <span className="font-extrabold text-sm md:text-base truncate pr-2" style={{ color: text }}>
                {regionName[language]} — {language === "en" ? "Anatomy & Concept" : "กายวิภาคและแนวคิด"}
              </span>
              <button 
                onClick={() => setShowZoomModal(false)}
                className="text-slate-700 bg-slate-200 hover:bg-slate-300 dark:text-slate-400 dark:hover:text-slate-100 text-xs font-bold px-3 py-1.5 rounded-lg dark:bg-slate-800 dark:hover:bg-slate-700 cursor-pointer flex items-center gap-1.5 flex-shrink-0 transition-colors shadow-sm"
              >
                ✕ <span>{language === "en" ? "Close" : "ปิด"}</span>
              </button>
            </div>
            <div 
              className="w-full flex items-center justify-center p-3 md:p-4 rounded-xl bg-white overflow-hidden border"
              style={{ minHeight: 320, maxHeight: "75vh" }}
            >
              <img 
                src={finalSrc} 
                alt={regionName.en} 
                style={{
                  maxWidth: "100%",
                  maxHeight: "72vh",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                  display: "block"
                }}
                className="rounded-lg shadow-sm"
              />
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* ── 1. Physical Exam ── */}
      {hasPhysicalExam && (
        <section className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800 dark:text-[#00CED1]">
            <Stethoscope size={15} />
            <span>{language === "en" ? "Physical Exam Signs" : "การตรวจร่างกายที่สำคัญ"}</span>
          </div>

          <div className="space-y-2">
            {concept.physicalExam!.map((item, idx) => (
              <div
                key={idx}
                style={{ background: cardBg, borderColor: cardBorder }}
                className="p-3 rounded-xl border text-xs space-y-1 transition-all hover:border-teal-600/40 dark:hover:border-[#00CED1]/40"
              >
                <div style={{ color: text }} className="font-bold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-700 dark:bg-[#00CED1]" />
                  <span>{item.sign}</span>
                </div>
                <div style={{ color: text }} className="text-[11.5px] leading-relaxed pl-3.5 font-medium">
                  <span className="font-bold text-teal-800 dark:text-[#00CED1]">Positive: </span>
                  {item.positive[language]}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── 2. Acceptable Alignment (Table) ── */}
      {hasAlignment && (
        <section className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
            <Ruler size={15} />
            <span>{language === "en" ? "Acceptable Alignment" : "เกณฑ์มุมเอียงที่ยอมรับได้"}</span>
          </div>

          <div
            style={{ background: cardBg, borderColor: cardBorder }}
            className="rounded-xl border overflow-hidden text-xs shadow-xs"
          >
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100/80 dark:bg-slate-800/80 text-[10.5px] font-extrabold uppercase tracking-wider border-b" style={{ borderColor: cardBorder, color: text }}>
                  <th className="p-2 pl-2.5">{language === "en" ? "Parameter" : "ตัวแปร"}</th>
                  <th className="p-2 text-center">{language === "en" ? "Limit" : "เกณฑ์"}</th>
                </tr>
              </thead>
              <tbody className="divide-y" style={{ borderColor: cardBorder }}>
                {concept.acceptableAlignment!.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="p-2 pl-2.5 font-bold" style={{ color: text }}>
                      <div>{row.parameter[language]}</div>
                      {row.note && (
                        <div className="text-[10px] mt-0.5 font-medium opacity-80" style={{ color: text }}>
                          {row.note[language]}
                        </div>
                      )}
                    </td>
                    <td className="p-2 text-center font-extrabold text-sky-600 dark:text-sky-400 whitespace-nowrap">
                      {row.threshold}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* ── 3. Red Flags ── */}
      {hasRedFlags && (
        <section className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
            <AlertTriangle size={15} />
            <span>{language === "en" ? "Red Flags / Complications" : "ข้อควรระวังอันตราย (Red Flags)"}</span>
          </div>

          <div 
            style={{ 
              background: cardBg, 
              borderColor: darkMode ? "rgba(244,63,94,0.3)" : "rgba(244,63,94,0.35)" 
            }}
            className="p-3 rounded-xl border text-xs space-y-2"
          >
            {concept.redFlags!.map((flag, idx) => (
              <div key={idx} className="flex items-start gap-2.5 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-600 dark:bg-rose-400 flex-shrink-0 mt-1.5" />
                <span style={{ color: text }} className="font-semibold text-[11.5px] leading-relaxed">
                  {flag[language]}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── 4. Associated Injuries ── */}
      {hasAssociated && (
        <section className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            <Link2 size={15} />
            <span>{language === "en" ? "Associated Injuries" : "การบาดเจ็บร่วมที่ต้องตรวจหา"}</span>
          </div>

          <div className="space-y-1.5">
            {concept.associatedInjuries!.map((assoc, idx) => (
              <div
                key={idx}
                style={{ background: cardBg, borderColor: cardBorder }}
                className="p-3 rounded-xl border text-xs flex items-start gap-2.5"
              >
                <span className="text-amber-600 dark:text-amber-400 font-bold flex-shrink-0 mt-0.5">⚡</span>
                <div>
                  <div style={{ color: text }} className="font-extrabold">
                    {assoc.injury[language]}
                  </div>
                  {assoc.trigger && (
                    <div style={{ color: text }} className="text-[11px] mt-0.5 font-medium opacity-90">
                      <span className="text-amber-600 dark:text-amber-400 font-bold">Trigger: </span>
                      {assoc.trigger[language]}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── 5. Clinical Pearls ── */}
      {hasPearls && (
        <section className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            <Lightbulb size={15} />
            <span>{language === "en" ? "Clinical Pearls" : "ข้อควรจำทางคลินิก (Pearls)"}</span>
          </div>

          <div 
            style={{ 
              background: cardBg, 
              borderColor: darkMode ? "rgba(16,185,129,0.3)" : "rgba(16,185,129,0.35)" 
            }}
            className="p-3 rounded-xl border text-xs space-y-2.5"
          >
            {concept.clinicalPearls!.map((pearl, idx) => (
              <div key={idx} className="flex items-start gap-2.5 leading-relaxed">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold flex-shrink-0 mt-0.5 text-xs">💎</span>
                <span style={{ color: text }} className="font-semibold text-[11.5px] leading-relaxed">
                  {pearl[language]}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
