import { useState, useEffect } from "react";
import type { Language } from "../../App";
import type { RegionConcept, Translation } from "../../types";
import { 
  Stethoscope, 
  Ruler, 
  AlertTriangle, 
  Link2, 
  Lightbulb, 
  ArrowLeft,
  Bone,
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
  const bg = darkMode ? "#161B27" : "#EAECEF";
  const border = darkMode ? "#252F42" : "#D5D9E0";
  const text = darkMode ? "#F1F5F9" : "#0F172A";
  const cardBg = darkMode ? "rgba(255,255,255,0.03)" : "#FFFFFF";
  const cardBorder = darkMode ? "rgba(255,255,255,0.07)" : "#EAECF0";

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
            className="flex items-center gap-1.5 text-xs font-semibold mb-2.5 text-[#00CED1] hover:underline cursor-pointer group transition-all"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            <span>{language === "en" ? "All Bones" : "กระดูกทั้งหมด"}</span>
          </button>
        )}

        <div className="flex items-baseline justify-between gap-2 border-b pb-2.5" style={{ borderColor: border }}>
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#00CED1]">
              {boneName[language]}
            </div>
            <h2 className="text-sm md:text-base font-extrabold tracking-tight" style={{ color: text }}>
              {regionName[language]} Concept
            </h2>
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#00CED1]/15 text-[#00CED1] border border-[#00CED1]/30">
            Clinical Guide
          </span>
        </div>
      </div>

      {/* ── Anatomy Image Frame ── */}
      <div 
        key={finalSrc}
        style={{ 
          background: "#FFFFFF", 
          borderColor: cardBorder,
          minHeight: isDesktop ? 160 : 220,
          aspectRatio: "4/3"
        }}
        className="rounded-2xl border p-2.5 flex flex-col items-center justify-center relative overflow-hidden group shadow-xs transition-all hover:border-[#00CED1]/40 w-full flex-shrink-0"
      >
        {!imgError ? (
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
        ) : (
          /* Fallback Frame if image missing */
          <div 
            className="flex flex-col items-center justify-center text-center p-6 space-y-1.5"
          >
            <div 
              style={{ background: "rgba(0,206,209,0.12)", borderColor: "rgba(0,206,209,0.3)" }}
              className="w-10 h-10 rounded-xl border flex items-center justify-center text-[#00CED1] mb-0.5"
            >
              <Bone size={20} />
            </div>
            <div className="text-xs font-bold text-slate-800">
              {regionName[language]} Anatomy
            </div>
            <div className="text-[10px] text-slate-400">
              {language === "en" ? "Anatomy Diagram Frame" : "กรอบภาพกายวิภาคกระดูก"}
            </div>
          </div>
        )}
      </div>

      {/* Zoom Modal */}
      {showZoomModal && !imgError && (
        <div 
          style={{
            position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
            background: "rgba(0,0,0,0.85)",
            zIndex: 99999,
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: 12,
            animation: "fadeIn 0.2s ease"
          }}
          onClick={() => setShowZoomModal(false)}
        >
          <div 
            style={{
              background: darkMode ? "#161B27" : "#FFFFFF",
              borderRadius: 20,
              padding: 14,
              width: "calc(100vw - 24px)",
              maxWidth: 540,
              maxHeight: "92vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: "0 25px 60px rgba(0,0,0,0.75)",
              position: "relative",
              border: `1.5px solid ${darkMode ? "rgba(255,255,255,0.15)" : "#CBD5E1"}`,
              animation: "scaleIn 0.25s cubic-bezier(0.16,1,0.3,1)",
              overflowY: "auto"
            }}
            onClick={e => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between mb-2.5 pb-2 border-b" style={{ borderColor: border }}>
              <span className="font-extrabold text-sm truncate pr-2" style={{ color: text }}>
                {regionName[language]} — {language === "en" ? "Anatomy & Concept" : "กายวิภาคและแนวคิด"}
              </span>
              <button 
                onClick={() => setShowZoomModal(false)}
                className="text-slate-400 hover:text-slate-100 text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 cursor-pointer flex items-center gap-1 flex-shrink-0"
              >
                ✕ <span>{language === "en" ? "Close" : "ปิด"}</span>
              </button>
            </div>
            <div 
              className="w-full flex items-center justify-center p-3 rounded-xl bg-white overflow-hidden border"
              style={{ minHeight: 280, maxHeight: "68vh" }}
            >
              <img 
                src={finalSrc} 
                alt={regionName.en}
                style={{
                  maxWidth: "100%",
                  maxHeight: "65vh",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                  display: "block"
                }}
                className="rounded"
              />
            </div>
          </div>
        </div>
      )}

      {/* ── 1. Physical Exam ── */}
      {hasPhysicalExam && (
        <section className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00CED1]">
            <Stethoscope size={15} />
            <span>{language === "en" ? "Physical Exam Signs" : "การตรวจร่างกายที่สำคัญ"}</span>
          </div>

          <div className="space-y-2">
            {concept.physicalExam!.map((item, idx) => (
              <div
                key={idx}
                style={{ background: cardBg, borderColor: cardBorder }}
                className="p-3 rounded-xl border text-xs space-y-1 transition-all hover:border-[#00CED1]/40"
              >
                <div className="font-bold text-slate-100 dark:text-slate-100 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00CED1]" />
                  <span>{item.sign}</span>
                </div>
                <div className="text-[11.5px] leading-relaxed text-slate-300 dark:text-slate-200 pl-3.5">
                  <span className="font-semibold text-[#00CED1]">Positive: </span>
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
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400">
            <Ruler size={15} />
            <span>{language === "en" ? "Acceptable Alignment" : "เกณฑ์มุมเอียงที่ยอมรับได้"}</span>
          </div>

          <div
            style={{ borderColor: cardBorder }}
            className="rounded-xl border overflow-hidden text-xs shadow-xs"
          >
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800/80 text-[10.5px] font-bold uppercase tracking-wider border-b" style={{ borderColor: border }}>
                  <th className="p-2 pl-2.5">{language === "en" ? "Parameter" : "ตัวแปร"}</th>
                  <th className="p-2 text-center">{language === "en" ? "Limit" : "เกณฑ์"}</th>
                </tr>
              </thead>
              <tbody className="divide-y" style={{ borderColor: cardBorder }}>
                {concept.acceptableAlignment!.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="p-2 pl-2.5 font-medium text-slate-200">
                      <div>{row.parameter[language]}</div>
                      {row.note && (
                        <div className="text-[10px] mt-0.5 text-slate-400">
                          {row.note[language]}
                        </div>
                      )}
                    </td>
                    <td className="p-2 text-center font-bold text-sky-400 whitespace-nowrap">
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
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400">
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
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0 mt-1.5" />
                <span className="font-medium text-[11.5px] text-slate-100 dark:text-slate-100 leading-relaxed">
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
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
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
                <span className="text-amber-400 font-bold flex-shrink-0 mt-0.5">⚡</span>
                <div>
                  <div className="font-bold text-slate-100 dark:text-slate-100">
                    {assoc.injury[language]}
                  </div>
                  {assoc.trigger && (
                    <div className="text-[11px] mt-0.5 font-medium text-slate-300 dark:text-slate-300">
                      <span className="text-amber-400 font-semibold">Trigger: </span>
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
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
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
                <span className="text-emerald-400 font-bold flex-shrink-0 mt-0.5 text-xs">💎</span>
                <span className="font-medium text-[11.5px] text-slate-100 dark:text-slate-100 leading-relaxed">
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
