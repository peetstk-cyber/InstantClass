import { useState } from "react";
import type { Language } from "../../App";
import { 
  PEDIATRIC_TOPICS, 
  OSSIFICATION_CENTERS, 
  REMODELING_GUIDELINES 
} from "../../data/pediatric/pediatricData";
import type { 
  PediatricHubTab, 
  PediatricAgeStage, 
  PediatricTopic 
} from "../../types/pediatric";
import { 
  Sparkles, 
  ChevronRight, 
  AlertTriangle, 
  Search, 
  Activity, 
  Calculator, 
  CheckCircle2, 
  Bone, 
  HeartPulse,
  Layers,
  Eye,
  Info,
  BookOpen
} from "lucide-react";
import { getPediatricReferences } from "../../data/references";

interface PediatricPageProps {
  darkMode: boolean;
  language: Language;
}

type TopicInnerTab = "classification" | "investigation";

export function PediatricPage({ darkMode, language }: PediatricPageProps) {
  const [activeHub, setActiveHub] = useState<PediatricHubTab>("trauma");
  const [selectedAgeStage, setSelectedAgeStage] = useState<PediatricAgeStage>("all");
  const [selectedTopicId, setSelectedTopicId] = useState<string>(PEDIATRIC_TOPICS[0].id);
  const [selectedSubtypeIdx, setSelectedSubtypeIdx] = useState<number>(0);
  const [topicInnerTab, setTopicInnerTab] = useState<TopicInnerTab>("classification");
  const [searchQuery, setSearchQuery] = useState("");

  // Kocher Calculator State
  const [kocherWeightBearing, setKocherWeightBearing] = useState(false);
  const [kocherFever, setKocherFever] = useState(false);
  const [kocherEsr, setKocherEsr] = useState(false);
  const [kocherWbc, setKocherWbc] = useState(false);

  const bg = darkMode ? "#0E1117" : "#F8FAFC";
  const sidebarBg = darkMode ? "#161B27" : "#FFFFFF";
  const cardBg = darkMode ? "#1A2130" : "#FFFFFF";
  const border = darkMode ? "#252F42" : "#E2E8F0";
  const text = darkMode ? "#F1F5F9" : "#0F172A";
  const mutedText = darkMode ? "#94A3B8" : "#64748B";

  // Filter topics based on active hub & age stage & search query
  const filteredTopics = PEDIATRIC_TOPICS.filter(t => {
    const matchesHub = t.hub === activeHub;
    const matchesAge = selectedAgeStage === "all" || t.ageStage === "all" || t.ageStage === selectedAgeStage;
    const matchesSearch = searchQuery.trim() === "" ||
      t.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.subtitle[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.types.some(ty => ty.name[language].toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesHub && matchesAge && matchesSearch;
  });

  const activeTopic: PediatricTopic = 
    filteredTopics.find(t => t.id === selectedTopicId) || 
    filteredTopics[0] || 
    PEDIATRIC_TOPICS[0];

  // Reset subtype index if out of bounds
  const currentSubtype = activeTopic.types[selectedSubtypeIdx] || activeTopic.types[0];

  // Calculate Kocher Score & Probability
  const kocherScore = (kocherWeightBearing ? 1 : 0) + (kocherFever ? 1 : 0) + (kocherEsr ? 1 : 0) + (kocherWbc ? 1 : 0);
  const kocherProbability = [
    { score: 0, prob: "0.2%", textEn: "Very Low Risk (Transient Synovitis likely. Outpatient observation)", textTh: "ความเสี่ยงต่ำมาก (โอกาสเป็น Transient Synovitis สังเกตอาการแบบผู้ป่วยนอก)" },
    { score: 1, prob: "3.0%", textEn: "Low Risk (Observe closely, consider ultrasound if symptoms persist)", textTh: "ความเสี่ยงต่ำ (ติดตามอาการใกล้ชิด พิจารณาทำอัลตราซาวด์)" },
    { score: 2, prob: "40.0%", textEn: "Intermediate / High Suspicion (Urgent ultrasound & Orthopedic evaluation)", textTh: "ความเสี่ยงปานกลาง-สูง (ควรส่งตรวจอัลตราซาวด์ด่วนและปรึกษาหมอกระดูก)" },
    { score: 3, prob: "93.1%", textEn: "Very High Risk (Septic Arthritis. Urgent joint aspiration / Arthrocentesis)", textTh: "ความเสี่ยงสูงมาก (>93% ข้อสะโพกติดเชื้อ ต้องเจาะดูดหนองตรวจด่วน)" },
    { score: 4, prob: "99.6%", textEn: "Definite Septic Arthritis (Emergency surgical arthrotomy & IV antibiotics)", textTh: "ข้อสะโพกติดเชื้อเฉียบพลันฉุกเฉิน (ต้องผ่าตัดล้างข้อทันที + ให้ยาฆ่าเชื้อ IV)" },
  ][kocherScore];

  const handleSelectTopic = (id: string) => {
    setSelectedTopicId(id);
    setSelectedSubtypeIdx(0);
    // Keep the current topicInnerTab or default to classification
  };

  return (
    <div 
      style={{ background: bg, color: text }}
      className="flex-1 flex flex-col h-full overflow-hidden w-full"
    >
      {/* ── Top Hub Switcher Bar ── */}
      <div 
        style={{ background: sidebarBg, borderColor: border }}
        className="px-3 sm:px-5 py-2.5 border-b flex flex-wrap items-center justify-between gap-2.5 z-20 flex-shrink-0"
      >
        {/* Hub Tabs */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={() => {
              setActiveHub("trauma");
              setSelectedTopicId(PEDIATRIC_TOPICS.find(t => t.hub === "trauma")?.id || "");
              setSelectedSubtypeIdx(0);
            }}
            style={{
              background: activeHub === "trauma"
                ? (darkMode ? "rgba(0,206,209,0.15)" : "#0F766E")
                : (darkMode ? "rgba(255,255,255,0.04)" : "#F1F5F9"),
              color: activeHub === "trauma" ? (darkMode ? "#00CED1" : "#FFFFFF") : (darkMode ? "#94A3B8" : "#334155"),
              borderColor: activeHub === "trauma" ? (darkMode ? "rgba(0,206,209,0.4)" : "#0F766E") : border,
            }}
            className="px-3 py-1.5 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 cursor-pointer shadow-2xs active:scale-95"
          >
            <Bone size={14} className={activeHub === "trauma" ? "text-amber-300 dark:text-[#00CED1]" : "text-slate-500"} />
            <span>{language === "en" ? "Trauma & Fractures" : "การบาดเจ็บ & รอยหัก"}</span>
          </button>

          <button
            onClick={() => {
              setActiveHub("diseases");
              setSelectedTopicId(PEDIATRIC_TOPICS.find(t => t.hub === "diseases")?.id || "");
              setSelectedSubtypeIdx(0);
            }}
            style={{
              background: activeHub === "diseases"
                ? (darkMode ? "rgba(0,206,209,0.15)" : "#0F766E")
                : (darkMode ? "rgba(255,255,255,0.04)" : "#F1F5F9"),
              color: activeHub === "diseases" ? (darkMode ? "#00CED1" : "#FFFFFF") : (darkMode ? "#94A3B8" : "#334155"),
              borderColor: activeHub === "diseases" ? (darkMode ? "rgba(0,206,209,0.4)" : "#0F766E") : border,
            }}
            className="px-3 py-1.5 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 cursor-pointer shadow-2xs active:scale-95"
          >
            <HeartPulse size={14} className={activeHub === "diseases" ? "text-rose-300 dark:text-[#00CED1]" : "text-slate-500"} />
            <span>{language === "en" ? "Hip & Diseases (Limping Child)" : "โรคข้อสะโพก & เด็กเดินกะเผลก"}</span>
          </button>

          <button
            onClick={() => setActiveHub("tools")}
            style={{
              background: activeHub === "tools"
                ? (darkMode ? "rgba(0,206,209,0.15)" : "#0F766E")
                : (darkMode ? "rgba(255,255,255,0.04)" : "#F1F5F9"),
              color: activeHub === "tools" ? (darkMode ? "#00CED1" : "#FFFFFF") : (darkMode ? "#94A3B8" : "#334155"),
              borderColor: activeHub === "tools" ? (darkMode ? "rgba(0,206,209,0.4)" : "#0F766E") : border,
            }}
            className="px-3 py-1.5 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 cursor-pointer shadow-2xs active:scale-95"
          >
            <Calculator size={14} className={activeHub === "tools" ? "text-sky-300 dark:text-[#00CED1]" : "text-slate-500"} />
            <span>{language === "en" ? "Bedside Tools & Rules" : "เครื่องมือคำนวณ & กฎสำคัญ"}</span>
          </button>
        </div>

        {/* Quick Age-Stage Fast Triage Filter */}
        {activeHub !== "tools" && (
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
            <span className="text-[10.5px] font-bold text-slate-500 dark:text-slate-400 mr-1 hidden sm:inline">
              {language === "en" ? "Age:" : "อายุ:"}
            </span>
            {[
              { id: "all", label: { en: "All", th: "ทุกช่วง" } },
              { id: "infant", label: { en: "🍼 <1y Infant", th: "🍼 <1 ขวบ" } },
              { id: "toddler", label: { en: "🧸 1-4y Toddler", th: "🧸 1-4 ขวบ" } },
              { id: "child", label: { en: "🎒 5-10y Child", th: "🎒 5-10 ขวบ" } },
              { id: "adolescent", label: { en: "🛹 11-16y Teen", th: "🛹 11-16 ขวบ" } },
            ].map(age => (
              <button
                key={age.id}
                onClick={() => setSelectedAgeStage(age.id as PediatricAgeStage)}
                style={{
                  background: selectedAgeStage === age.id
                    ? (darkMode ? "rgba(0,206,209,0.2)" : "#0F766E")
                    : (darkMode ? "rgba(255,255,255,0.03)" : "#FFFFFF"),
                  color: selectedAgeStage === age.id ? (darkMode ? "#00CED1" : "#FFFFFF") : (darkMode ? "#94A3B8" : "#475569"),
                  borderColor: selectedAgeStage === age.id ? (darkMode ? "#00CED1" : "#0F766E") : border,
                }}
                className="px-2 py-1 rounded-lg text-[10.5px] font-bold border transition-all cursor-pointer whitespace-nowrap"
              >
                {age.label[language]}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── Main Layout Body ── */}
      <div className="flex-1 flex flex-col md:flex-row h-full overflow-hidden">
        {/* ── MODE 1 & 2: TRAUMA OR DISEASES (2-Column Master Detail) ── */}
        {activeHub !== "tools" ? (
          <>
            {/* Left Sidebar Index */}
            <aside 
              style={{ background: sidebarBg, borderColor: border }}
              className="w-full md:w-72 lg:w-80 border-b md:border-b-0 md:border-r flex flex-col flex-shrink-0 max-h-[35vh] md:max-h-full overflow-hidden"
            >
              {/* Search bar */}
              <div className="p-2.5 border-b" style={{ borderColor: border }}>
                <div className="relative">
                  <Search size={13} style={{ color: mutedText }} className="absolute left-2.5 top-1/2 -translate-y-1/2" />
                  <input 
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder={language === "en" ? "Filter topic, sign..." : "ค้นหาหัวข้อ, รอยหัก..."}
                    style={{ background: darkMode ? "#1C2333" : "#F8FAFC", borderColor: border, color: text }}
                    className="w-full pl-8 pr-3 py-1.5 rounded-xl text-xs outline-none focus:border-teal-600 dark:focus:border-[#00CED1] transition-all font-medium border"
                  />
                </div>
              </div>

              {/* Topics List */}
              <div className="flex-1 overflow-y-auto p-2 space-y-1.5">
                {filteredTopics.length === 0 ? (
                  <div className="py-8 text-center text-xs text-slate-500">
                    {language === "en" ? "No topics matching filter" : "ไม่พบหัวข้อที่ตรงกับตัวกรอง"}
                  </div>
                ) : (
                  filteredTopics.map(topic => {
                    const isSelected = activeTopic.id === topic.id;
                    return (
                      <button
                        key={topic.id}
                        onClick={() => handleSelectTopic(topic.id)}
                        style={{
                          background: isSelected 
                            ? (darkMode ? "rgba(0,206,209,0.12)" : "rgba(15,118,110,0.1)")
                            : "transparent",
                          borderColor: isSelected
                            ? (darkMode ? "rgba(0,206,209,0.4)" : "rgba(15,118,110,0.3)")
                            : "transparent",
                        }}
                        className={`w-full text-left p-2.5 rounded-xl border transition-all flex items-center justify-between gap-2 group cursor-pointer ${
                          !isSelected ? "hover:bg-slate-100 dark:hover:bg-slate-800/50" : ""
                        }`}
                      >
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className={`text-[9px] font-extrabold px-1.5 py-0.2 rounded ${
                              topic.urgency === "emergency" 
                                ? "bg-rose-500/15 text-rose-700 dark:text-rose-400 border border-rose-500/30"
                                : topic.urgency === "urgent"
                                ? "bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30"
                                : "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30"
                            }`}>
                              {topic.urgency.toUpperCase()}
                            </span>
                            <span className="text-[10px] text-slate-500 font-semibold truncate">
                              {topic.ageRange[language]}
                            </span>
                          </div>
                          <div className={`text-xs font-bold truncate leading-tight ${
                            isSelected ? "text-teal-800 dark:text-[#00CED1] font-extrabold" : "text-black dark:text-slate-100"
                          }`}>
                            {topic.title[language]}
                          </div>
                        </div>
                        <ChevronRight 
                          size={14} 
                          className={`flex-shrink-0 transition-transform ${
                            isSelected ? "text-teal-800 dark:text-[#00CED1] translate-x-0.5" : "text-slate-400 opacity-40"
                          }`} 
                        />
                      </button>
                    );
                  })
                )}
              </div>
            </aside>

            {/* Right Topic Detail Canvas */}
            <main className="flex-1 h-full overflow-y-auto p-3.5 sm:p-5 md:p-6 space-y-4">
              <div className="max-w-4xl mx-auto space-y-4 animate-fadeIn">
                {/* 1. Header Hero Card */}
                <div 
                  style={{ background: cardBg, borderColor: border }}
                  className="p-4 md:p-5 rounded-2xl border shadow-2xs space-y-2 relative overflow-hidden"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full border ${
                        activeTopic.urgency === "emergency"
                          ? "bg-rose-500/15 text-rose-700 dark:text-rose-400 border-rose-500/30"
                          : activeTopic.urgency === "urgent"
                          ? "bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-500/30"
                          : "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/30"
                      }`}>
                        ● {activeTopic.urgency === "emergency" ? (language === "en" ? "EMERGENCY / SURGICAL RISK" : "ภาวะฉุกเฉิน / เสี่ยงผ่าตัดด่วน") : activeTopic.urgency.toUpperCase()}
                      </span>
                      <span className="text-[11px] font-extrabold text-teal-800 dark:text-[#00CED1]">
                        👶 {activeTopic.ageRange[language]}
                      </span>
                    </div>

                    {/* Topic Inner Navigation Tabs (Classification vs Investigation) */}
                    <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                      <button
                        onClick={() => setTopicInnerTab("classification")}
                        style={{
                          background: topicInnerTab === "classification" 
                            ? (darkMode ? "#00CED1" : "#0F766E") 
                            : "transparent",
                          color: topicInnerTab === "classification" 
                            ? (darkMode ? "#0F172A" : "#FFFFFF") 
                            : (darkMode ? "#94A3B8" : "#475569"),
                        }}
                        className="px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs active:scale-95"
                      >
                        <Layers size={13} />
                        <span>{language === "en" ? "Classifications" : "การจำแนก & การรักษา"}</span>
                      </button>

                      <button
                        onClick={() => setTopicInnerTab("investigation")}
                        style={{
                          background: topicInnerTab === "investigation" 
                            ? (darkMode ? "#00CED1" : "#0F766E") 
                            : "transparent",
                          color: topicInnerTab === "investigation" 
                            ? (darkMode ? "#0F172A" : "#FFFFFF") 
                            : (darkMode ? "#94A3B8" : "#475569"),
                        }}
                        className="px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs active:scale-95"
                      >
                        <Eye size={13} />
                        <span>{language === "en" ? "Investigation / X-Ray" : "ภาพเอกซเรย์ & การตรวจ"}</span>
                      </button>
                    </div>
                  </div>

                  <h2 className="text-lg sm:text-xl md:text-2xl font-black text-black dark:text-slate-100">
                    {activeTopic.title[language]}
                  </h2>
                  <p className="text-xs md:text-sm font-semibold text-teal-800 dark:text-[#00CED1]">
                    {activeTopic.subtitle[language]}
                  </p>

                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 text-xs leading-relaxed font-medium" style={{ color: text }}>
                    <span className="font-black text-teal-800 dark:text-[#00CED1]">💡 Core Takeaway: </span>
                    {activeTopic.corePrinciple[language]}
                  </div>
                </div>

                {/* ── TAB CONTENT: 1. CLASSIFICATIONS & TREATMENT ── */}
                {topicInnerTab === "classification" ? (
                  <>
                    {/* 2. In-Place Segmented Subtype Switcher */}
                    <div 
                      style={{ background: cardBg, borderColor: border }}
                      className="p-4 md:p-5 rounded-2xl border shadow-2xs space-y-4"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-[11px] font-extrabold uppercase tracking-wider text-teal-800 dark:text-[#00CED1]">
                          <span>{language === "en" ? "Select Subtype / Stage:" : "เลือกประเภท / ระยะรอยหัก:"}</span>
                          <span className="text-slate-500 font-semibold">{activeTopic.types.length} {language === "en" ? "stages" : "ระยะ"}</span>
                        </div>

                        {/* Subtype Segmented Buttons */}
                        <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                          {activeTopic.types.map((sub, sIdx) => {
                            const isSubActive = selectedSubtypeIdx === sIdx;
                            return (
                              <button
                                key={sub.type}
                                onClick={() => setSelectedSubtypeIdx(sIdx)}
                                style={{
                                  background: isSubActive
                                    ? (darkMode ? "#00CED1" : "#0F766E")
                                    : "transparent",
                                  color: isSubActive 
                                    ? (darkMode ? "#0F172A" : "#FFFFFF") 
                                    : (darkMode ? "#94A3B8" : "#334155"),
                                }}
                                className="flex-1 min-w-[120px] py-1.5 px-2.5 rounded-lg text-xs font-black transition-all cursor-pointer text-center truncate shadow-2xs active:scale-98"
                              >
                                {sub.type}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Active Subtype Dynamic Details */}
                      <div className="p-3.5 rounded-xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 space-y-2.5">
                        <div className="flex items-center justify-between gap-2 border-b pb-2" style={{ borderColor: border }}>
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded-md bg-teal-600/15 text-teal-900 dark:text-[#00CED1] font-black text-xs border border-teal-600/30">
                              {currentSubtype.type}
                            </span>
                            <h4 className="font-black text-sm text-black dark:text-slate-100">
                              {currentSubtype.name[language]}
                            </h4>
                          </div>

                          {currentSubtype.treatment.preferred && (
                            <span className={`text-[10px] font-black px-2 py-0.5 rounded-full border ${
                              currentSubtype.treatment.preferred === "conservative"
                                ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/30"
                                : "bg-rose-500/15 text-rose-700 dark:text-rose-400 border-rose-500/30"
                            }`}>
                              {currentSubtype.treatment.preferred === "conservative" 
                                ? (language === "en" ? "🩹 Non-Op Preferred" : "🩹 รักษาด้วยเฝือก") 
                                : (language === "en" ? "🔩 Surgery Preferred" : "🔩 แนะนำผ่าตัด")}
                            </span>
                          )}
                        </div>

                        <div className="text-xs space-y-1 font-medium leading-relaxed" style={{ color: text }}>
                          <div>
                            <span className="font-bold text-teal-800 dark:text-[#00CED1]">{language === "en" ? "Pathology: " : "พยาธิสภาพ: "}</span>
                            {currentSubtype.pathology[language]}
                          </div>
                          <div>
                            <span className="font-bold text-sky-600 dark:text-sky-400">{language === "en" ? "Radiology: " : "ภาพเอกซเรย์: "}</span>
                            {currentSubtype.radiology[language]}
                          </div>
                        </div>

                        {/* Split Treatment Box */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                          <div className="p-3 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-800/30 text-xs space-y-1">
                            <div className="font-black text-emerald-800 dark:text-emerald-400 flex items-center gap-1 text-[10.5px] uppercase">
                              <span>🩹</span>
                              <span>{language === "en" ? "Non-Operative (Cast / Rest)" : "การรักษาด้วยเฝือก / ไม่ผ่าตัด"}</span>
                            </div>
                            <p className="text-emerald-900 dark:text-emerald-200/90 text-[11.5px] leading-relaxed font-medium">
                              {(currentSubtype.treatment.conservative as any)?.method?.[language] ||
                                (currentSubtype.treatment.conservative as any)?.[language] ||
                                ""}
                            </p>
                          </div>

                          <div className="p-3 rounded-xl bg-rose-50/70 dark:bg-rose-950/20 border border-rose-200/80 dark:border-rose-800/30 text-xs space-y-1">
                            <div className="font-black text-rose-800 dark:text-rose-400 flex items-center gap-1 text-[10.5px] uppercase">
                              <span>🔩</span>
                              <span>{language === "en" ? "Operative (Pin / Screw / ORIF)" : "การผ่าตัดดัดยึดกระดูก"}</span>
                            </div>
                            <p className="text-rose-900 dark:text-rose-200/90 text-[11.5px] leading-relaxed font-medium">
                              {(currentSubtype.treatment.operative as any)?.method?.[language] ||
                                (currentSubtype.treatment.operative as any)?.[language] ||
                                ""}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 3. Red Flags Alert Box */}
                    {activeTopic.redFlags && activeTopic.redFlags.length > 0 && (
                      <div className="p-4 rounded-2xl border bg-rose-500/10 border-rose-500/30 space-y-1.5">
                        <div className="flex items-center gap-1.5 font-black text-xs text-rose-700 dark:text-rose-300">
                          <AlertTriangle size={15} />
                          <span>{language === "en" ? "CRITICAL RED FLAGS & PITFALLS" : "ข้อควรระวังอันตราย & ภาวะแทรกซ้อนฉุกเฉิน"}</span>
                        </div>
                        <div className="space-y-1">
                          {activeTopic.redFlags.map((flag, fIdx) => (
                            <div key={fIdx} className="text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-start gap-2 leading-relaxed">
                              <span className="text-rose-600 dark:text-rose-400 font-bold">•</span>
                              <span>{flag[language]}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  /* ── TAB CONTENT: 2. INVESTIGATION & X-RAY VIEWS ── */
                  <div className="space-y-4">
                    {/* Key Radiographic Lines & Landmarks */}
                    {activeTopic.radiographicLines && activeTopic.radiographicLines.length > 0 && (
                      <div 
                        style={{ background: cardBg, borderColor: border }}
                        className="p-4 md:p-5 rounded-2xl border shadow-2xs space-y-3"
                      >
                        <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-teal-800 dark:text-[#00CED1]">
                          <Activity size={15} />
                          <span>{language === "en" ? "Key Radiographic Lines & Alignment Landmarks" : "เส้นและมุมสำคัญในการประเมินภาพรังสี"}</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {activeTopic.radiographicLines.map((line, lIdx) => (
                            <div key={lIdx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-xs space-y-1.5">
                              <div className="font-black text-teal-800 dark:text-[#00CED1] flex items-center justify-between">
                                <span>{line.name[language]}</span>
                                {line.normalValue && (
                                  <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-teal-600/10 text-teal-800 dark:text-[#00CED1] border border-teal-600/20">
                                    {line.normalValue}
                                  </span>
                                )}
                              </div>
                              <div className="text-[11.5px] leading-relaxed font-medium text-slate-800 dark:text-slate-300">
                                {line.criteria[language]}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Standard & Specialized Radiographic Views */}
                    <div 
                      style={{ background: cardBg, borderColor: border }}
                      className="p-4 md:p-5 rounded-2xl border shadow-2xs space-y-3"
                    >
                      <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                        <Eye size={15} />
                        <span>{language === "en" ? "Standard Radiographic Views & Protocols" : "ชุดภาพถ่ายเอกซเรย์มาตรฐาน & เทคนิคพิเศษ"}</span>
                      </div>

                      {activeTopic.investigations && activeTopic.investigations.length > 0 ? (
                        <div className="space-y-3">
                          {activeTopic.investigations.map((inv, iIdx) => (
                            <div 
                              key={iIdx} 
                              className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1.5"
                            >
                              <div className="font-black text-xs text-black dark:text-slate-100 flex items-center gap-2">
                                <span className="w-5 h-5 rounded-md bg-sky-500/15 text-sky-700 dark:text-sky-400 text-[11px] font-black flex items-center justify-center border border-sky-500/30">
                                  {iIdx + 1}
                                </span>
                                <span>{inv.name}</span>
                              </div>
                              <p className="text-xs leading-relaxed font-medium text-slate-700 dark:text-slate-300 pl-7">
                                {inv.details[language]}
                              </p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-xs text-slate-500 flex items-center gap-2">
                          <Info size={14} />
                          <span>{language === "en" ? "Standard AP and Lateral views recommended." : "แนะนำถ่ายภาพเอกซเรย์ท่า AP และ Lateral มาตรฐาน"}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* ── Verified Textbook Sources Card ── */}
                <div 
                  style={{ background: cardBg, borderColor: border }}
                  className="p-4 md:p-5 rounded-2xl border shadow-2xs space-y-3"
                >
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800 dark:text-[#00CED1]">
                    <BookOpen size={15} />
                    <span>{language === "en" ? "References" : "แหล่งอ้างอิง"}</span>
                  </div>

                  <div className="space-y-2 pt-1">
                    {getPediatricReferences(activeTopic.id).map((ref, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="px-1.5 py-0.5 rounded text-[9.5px] font-extrabold uppercase bg-teal-600/15 dark:bg-[#00CED1]/15 text-teal-800 dark:text-[#00CED1] border border-teal-600/30 dark:border-[#00CED1]/30">
                            {ref.textbook}
                          </span>
                          <span className="font-extrabold text-xs" style={{ color: text }}>
                            {ref.title}
                          </span>
                        </div>
                        {ref.chapter && (
                          <div className="text-[11px] font-semibold opacity-90 text-sky-700 dark:text-sky-400">
                            📖 {ref.chapter}
                          </div>
                        )}
                        {ref.classicCitation && (
                          <div className="text-[10px] font-mono p-1.5 rounded bg-black/5 dark:bg-white/10 border border-black/5 dark:border-white/10 text-slate-800 dark:text-slate-300">
                            <span className="font-bold text-amber-600 dark:text-amber-400">Milestone Citation: </span>
                            {ref.classicCitation}
                          </div>
                        )}
                        {ref.notes && (
                          <div className="text-[10.5px] opacity-75" style={{ color: text }}>
                            {ref.notes[language]}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </main>
          </>
        ) : (
          /* ── MODE 3: BEDSIDE TOOLS & CLINICAL CALCULATORS ── */
          <main className="flex-1 h-full overflow-y-auto p-3.5 sm:p-5 md:p-6 space-y-5">
            <div className="max-w-4xl mx-auto space-y-5 animate-fadeIn">
              {/* Tool 1: Interactive Kocher Criteria Calculator */}
              <div 
                style={{ background: cardBg, borderColor: border }}
                className="p-4 sm:p-6 rounded-2xl border shadow-sm space-y-4"
              >
                <div className="flex items-start justify-between gap-3 border-b pb-3" style={{ borderColor: border }}>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-rose-500/15 text-rose-700 dark:text-rose-400 border border-rose-500/30 uppercase">
                        Emergency Pediatric Triage
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-black dark:text-slate-100 mt-1">
                      ⚡ Kocher Criteria Calculator (Septic Hip vs. Transient Synovitis)
                    </h3>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                      {language === "en"
                        ? "Check positive criteria to determine real-time probability of septic arthritis in a limping child."
                        : "ติ๊กเลือกเกณฑ์ที่เป็นบวกเพื่อประเมินโอกาสเป็นข้อสะโพกติดเชื้อเฉียบพลันในเด็กเดินกะเผลก"}
                    </p>
                  </div>

                  {/* Score Badge */}
                  <div className="text-center p-2 sm:p-3 rounded-2xl bg-teal-600/10 border border-teal-600/30 flex-shrink-0">
                    <div className="text-[10px] font-bold text-teal-800 dark:text-[#00CED1]">Score</div>
                    <div className="text-xl sm:text-2xl font-black text-teal-900 dark:text-[#00CED1]">{kocherScore} / 4</div>
                  </div>
                </div>

                {/* 4 Interactive Checkboxes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { state: kocherWeightBearing, setter: setKocherWeightBearing, labelEn: "1. Non-weightbearing on affected limb", labelTh: "1. เดินลงน้ำหนักไม่ได้ (Refusal to bear weight)", icon: "🚶" },
                    { state: kocherFever, setter: setKocherFever, labelEn: "2. Temperature > 38.5°C (Fever history)", labelTh: "2. มีไข้ > 38.5°C (Fever > 38.5°C)", icon: "🌡️" },
                    { state: kocherEsr, setter: setKocherEsr, labelEn: "3. ESR > 40 mm/hr (or CRP > 20 mg/L)", labelTh: "3. ค่า ESR > 40 mm/hr (หรือ CRP > 20)", icon: "🩸" },
                    { state: kocherWbc, setter: setKocherWbc, labelEn: "4. Serum WBC > 12,000 /µL", labelTh: "4. เม็ดเลือดขาว WBC > 12,000 /µL", icon: "🧪" },
                  ].map((crit, cIdx) => (
                    <button
                      key={cIdx}
                      onClick={() => crit.setter(!crit.state)}
                      style={{
                        background: crit.state 
                          ? (darkMode ? "rgba(244,63,94,0.15)" : "rgba(244,63,94,0.1)")
                          : (darkMode ? "rgba(255,255,255,0.03)" : "#F8FAFC"),
                        borderColor: crit.state 
                          ? (darkMode ? "rgba(244,63,94,0.5)" : "#F43F5E")
                          : border,
                      }}
                      className="p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between gap-3 shadow-2xs active:scale-98"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="text-base flex-shrink-0">{crit.icon}</span>
                        <span className={`text-xs font-bold truncate ${crit.state ? "text-rose-700 dark:text-rose-300 font-extrabold" : "text-slate-800 dark:text-slate-200"}`}>
                          {language === "en" ? crit.labelEn : crit.labelTh}
                        </span>
                      </div>
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 border ${
                        crit.state ? "bg-rose-600 text-white border-rose-600" : "border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800"
                      }`}>
                        {crit.state && <CheckCircle2 size={14} />}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Real-Time Result Banner */}
                <div className={`p-4 rounded-2xl border transition-all ${
                  kocherScore >= 3 
                    ? "bg-rose-500/15 border-rose-500 text-rose-900 dark:text-rose-200"
                    : kocherScore === 2
                    ? "bg-amber-500/15 border-amber-500 text-amber-900 dark:text-amber-200"
                    : "bg-emerald-500/15 border-emerald-500 text-emerald-900 dark:text-emerald-200"
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-black uppercase tracking-wider">
                      {language === "en" ? "Septic Arthritis Probability:" : "ความน่าจะเป็นของข้อสะโพกติดเชื้อ:"}
                    </div>
                    <div className="text-lg sm:text-xl font-black">
                      {kocherProbability.prob}
                    </div>
                  </div>
                  <p className="text-xs font-bold mt-1 leading-relaxed">
                    {language === "en" ? kocherProbability.textEn : kocherProbability.textTh}
                  </p>
                </div>
              </div>

              {/* Tool 2: CRITOE Elbow Ossification Sequence */}
              <div 
                style={{ background: cardBg, borderColor: border }}
                className="p-4 sm:p-6 rounded-2xl border shadow-sm space-y-4"
              >
                <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: border }}>
                  <div>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-teal-600/15 text-teal-800 dark:text-[#00CED1] border border-teal-600/30 uppercase">
                      Chronological Milestone
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-black dark:text-slate-100 mt-1">
                      ⏱️ CRITOE Elbow Ossification Sequence
                    </h3>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                      {language === "en" ? "Odd ages (1, 3, 5, 7, 9, 11 years) for normal pediatric elbow ossification." : "ลำดับการเกิดกระดูกรอบข้อศอกเด็กตามอายุเลขคี่ (1, 3, 5, 7, 9, 11 ขวบ)"}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
                  {OSSIFICATION_CENTERS.map(c => (
                    <div
                      key={c.letter}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-center space-y-1 shadow-2xs"
                    >
                      <div className="w-8 h-8 rounded-lg bg-teal-600/15 border border-teal-600/30 text-teal-800 dark:text-[#00CED1] font-black text-sm flex items-center justify-center mx-auto">
                        {c.letter}
                      </div>
                      <div className="font-extrabold text-xs text-black dark:text-slate-100">{c.name}</div>
                      <div className="text-[10px] font-bold text-amber-600 dark:text-amber-400">⏱ {c.age}</div>
                    </div>
                  ))}
                </div>

                {/* Golden Rule Banner */}
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-2.5 text-xs font-semibold text-slate-800 dark:text-slate-200">
                  <Sparkles size={16} className="text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-black text-amber-700 dark:text-amber-400">{language === "en" ? "Golden Rule ('I' before 'T'): " : "กฎทอง ('I' ต้องมาก่อน 'T'): "}</span>
                    {language === "en" 
                      ? "Internal (Medial) Epicondyle must appear BEFORE Trochlea. If Trochlea is visible without Medial Epicondyle, suspect incarcerated medial epicondyle fragment in the joint!"
                      : "ปุ่มกระดูกด้านใน (I) ต้องเห็นก่อน Trochlea (T) เสมอ หากเห็น Trochlea แต่ไม่เห็นปุ่มใน ให้ระวังชิ้นกระดูกหักหลุดติดในข้อ!"}
                  </div>
                </div>
              </div>

              {/* Tool 3: Pediatric Remodeling Matrix */}
              <div 
                style={{ background: cardBg, borderColor: border }}
                className="p-4 sm:p-6 rounded-2xl border shadow-sm space-y-4"
              >
                <div className="border-b pb-3" style={{ borderColor: border }}>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-teal-600/15 text-teal-800 dark:text-[#00CED1] border border-teal-600/30 uppercase">
                    Growth & Remodeling
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-black dark:text-slate-100 mt-1">
                    📐 Acceptable Remodeling Matrix
                  </h3>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                    {language === "en" 
                      ? "Sagittal plane angulation and proximity to physis remodel best. Rotational deformity NEVER remodels (0%)."
                      : "มุมเอียงแนวหน้าหลัง (Sagittal) และตำแหน่งใกล้ Physis แก้ตัวได้ดีที่สุด ส่วนการบิดหมุนแก้มุมไม่ได้เลย (0%)"}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {REMODELING_GUIDELINES.map((guide, gIdx) => (
                    <div
                      key={gIdx}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-2 text-xs"
                    >
                      <div className="flex items-center justify-between border-b pb-1.5" style={{ borderColor: border }}>
                        <div className="font-black text-teal-800 dark:text-[#00CED1]">{guide.region[language]}</div>
                        <span className="text-[10.5px] font-extrabold px-2 py-0.5 rounded bg-teal-600/10 border border-teal-600/20 text-teal-800 dark:text-[#00CED1]">
                          Age: {guide.ageLimit}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                          <div className="text-[9.5px] font-bold text-slate-500 uppercase">{language === "en" ? "Max Angulation" : "มุมเอียงที่รับได้"}</div>
                          <div className="font-black text-teal-700 dark:text-[#00CED1] mt-0.5">{guide.acceptableAngulation}</div>
                        </div>
                        <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                          <div className="text-[9.5px] font-bold text-slate-500 uppercase">{language === "en" ? "Max Shortening" : "ความสั้นที่รับได้"}</div>
                          <div className="font-black text-amber-700 dark:text-amber-400 mt-0.5">{guide.acceptableShortening}</div>
                        </div>
                      </div>
                      <div className="text-[11px] leading-relaxed text-slate-700 dark:text-slate-300 font-medium">
                        {guide.notes[language]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        )}
      </div>
    </div>
  );
}
