import type { Language } from "../../App";
import type { RegionConcept, Translation } from "../../types";
import { 
  Stethoscope, 
  Ruler, 
  AlertTriangle, 
  Link2, 
  Lightbulb, 
  ArrowLeft,
  Bone
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
  const mutedText = darkMode ? "#94A3B8" : "#475569";
  const cardBg = darkMode ? "rgba(255,255,255,0.03)" : "#FFFFFF";
  const cardBorder = darkMode ? "rgba(255,255,255,0.07)" : "#EAECF0";

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
        style={{ background: darkMode ? "rgba(0,0,0,0.2)" : "#F8FAFC", borderColor: cardBorder }}
        className="rounded-xl border p-3 flex flex-col items-center justify-center min-h-[130px] relative overflow-hidden group shadow-xs transition-all hover:border-[#00CED1]/30"
      >
        {/* Display image if specified or try auto-resolved region path */}
        {(() => {
          const autoPath = `/images/concepts/${concept.imageUrl ? concept.imageUrl.replace(/^\//, '') : `anatomy_${regionName.en.toLowerCase().replace(/[^a-z0-9]/g, '_')}.png`}`;
          const finalSrc = concept.imageUrl || autoPath;

          return (
            <img
              src={finalSrc}
              alt={`${regionName[language]} Anatomy`}
              className="max-h-[170px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  const placeholder = parent.querySelector(".anatomy-placeholder");
                  if (placeholder) (placeholder as HTMLElement).style.display = "flex";
                }
              }}
            />
          );
        })()}

        {/* Fallback Frame if image missing */}
        <div 
          className="anatomy-placeholder flex flex-col items-center justify-center text-center p-3 space-y-1.5"
          style={{ display: "none" }}
        >
          <div 
            style={{ background: "rgba(0,206,209,0.12)", borderColor: "rgba(0,206,209,0.3)" }}
            className="w-10 h-10 rounded-xl border flex items-center justify-center text-[#00CED1] mb-0.5"
          >
            <Bone size={20} />
          </div>
          <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
            {regionName[language]} Anatomy
          </div>
          <div className="text-[10px] text-slate-400">
            {language === "en" ? "Anatomy Diagram Frame" : "กรอบภาพกายวิภาคกระดูก"}
          </div>
        </div>
      </div>

      {/* ── 1. Physical Exam ── */}
      {hasPhysicalExam && (
        <section className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-500 dark:text-teal-400">
            <Stethoscope size={15} />
            <span>{language === "en" ? "Physical Exam Signs" : "การตรวจร่างกายที่สำคัญ"}</span>
          </div>

          <div className="space-y-2">
            {concept.physicalExam!.map((item, idx) => (
              <div
                key={idx}
                style={{ background: cardBg, borderColor: cardBorder }}
                className="p-2.5 rounded-xl border text-xs space-y-1 transition-all hover:border-[#00CED1]/40"
              >
                <div className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00CED1]" />
                  <span>{item.sign}</span>
                </div>
                <div className="text-[11.5px] leading-relaxed" style={{ color: mutedText }}>
                  <span className="font-semibold text-teal-600 dark:text-teal-400">Positive: </span>
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
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-500 dark:text-sky-400">
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
                    <td className="p-2 pl-2.5 font-medium">
                      <div>{row.parameter[language]}</div>
                      {row.note && (
                        <div className="text-[10px] mt-0.5" style={{ color: mutedText }}>
                          {row.note[language]}
                        </div>
                      )}
                    </td>
                    <td className="p-2 text-center font-bold text-sky-600 dark:text-sky-400 whitespace-nowrap">
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
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-500 dark:text-rose-400">
            <AlertTriangle size={15} />
            <span>{language === "en" ? "Red Flags / Complications" : "ข้อควรระวังอันตราย (Red Flags)"}</span>
          </div>

          <div className="p-3 rounded-xl border border-rose-500/30 bg-rose-500/10 text-xs space-y-1.5">
            {concept.redFlags!.map((flag, idx) => (
              <div key={idx} className="flex items-start gap-2 text-rose-700 dark:text-rose-300 leading-snug">
                <span className="text-rose-500 font-extrabold flex-shrink-0 mt-0.5">•</span>
                <span className="font-medium text-[11.5px]">{flag[language]}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── 4. Associated Injuries ── */}
      {hasAssociated && (
        <section className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-500 dark:text-amber-400">
            <Link2 size={15} />
            <span>{language === "en" ? "Associated Injuries" : "การบาดเจ็บร่วมที่ต้องตรวจหา"}</span>
          </div>

          <div className="space-y-1.5">
            {concept.associatedInjuries!.map((assoc, idx) => (
              <div
                key={idx}
                style={{ background: cardBg, borderColor: cardBorder }}
                className="p-2.5 rounded-xl border text-xs flex items-start gap-2"
              >
                <span className="text-amber-500 font-bold flex-shrink-0">⚡</span>
                <div>
                  <div className="font-semibold text-slate-800 dark:text-slate-200">
                    {assoc.injury[language]}
                  </div>
                  {assoc.trigger && (
                    <div className="text-[10.5px] mt-0.5 font-medium text-amber-600 dark:text-amber-400">
                      Trigger: {assoc.trigger[language]}
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
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-500 dark:text-emerald-400">
            <Lightbulb size={15} />
            <span>{language === "en" ? "Clinical Pearls" : "ข้อควรจำทางคลินิก (Pearls)"}</span>
          </div>

          <div className="p-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-xs space-y-2">
            {concept.clinicalPearls!.map((pearl, idx) => (
              <div key={idx} className="flex items-start gap-2 text-emerald-800 dark:text-emerald-200 leading-relaxed">
                <span className="text-emerald-500 font-bold flex-shrink-0">💎</span>
                <span className="font-medium text-[11.5px]">{pearl[language]}</span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
