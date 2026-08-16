import React, { useState, useEffect } from "react";
import type { BoneData, ClassificationSystem, FractureClassificationType } from "../../types";
import { FractureVisualizer } from "./FractureVisualizer";
import { Shield, Hammer, Clipboard, Stethoscope, ChevronRight, Activity, Layers, X } from "lucide-react";

interface DetailPanelProps {
  bone: BoneData | null;
  language: "en" | "th";
  t: (key: string) => string;
  selectedRegionId: string | null;
  setSelectedRegionId: (id: string | null) => void;
  onClose?: () => void;
}

export const DetailPanel: React.FC<DetailPanelProps> = ({
  bone,
  language,
  t,
  selectedRegionId,
  setSelectedRegionId,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<"overview" | "classifications" | "treatment">("overview");
  const [selectedSystemIdx, setSelectedSystemIdx] = useState<number>(0);
  const [selectedTypeIdx, setSelectedTypeIdx] = useState<number>(0);
  const [showAsXray, setShowAsXray] = useState<boolean>(false);

  // Reset indices when bone changes
  useEffect(() => {
    setActiveTab("overview");
    setSelectedSystemIdx(0);
    setSelectedTypeIdx(0);
  }, [bone]);

  // Reset type index when system changes
  const handleSystemChange = (idx: number) => {
    setSelectedSystemIdx(idx);
    setSelectedTypeIdx(0);
  };

  if (!bone) {
    return (
      <div className="w-full h-full min-h-[500px] flex flex-col items-center justify-center text-center p-8 glass-card bg-clinical-card/25 border border-clinical-border/40 select-none">
        <div className="w-16 h-16 rounded-full bg-clinical-primary/10 flex items-center justify-center mb-4 border border-clinical-primary/20 animate-glow-pulse">
          <Activity className="w-8 h-8 text-clinical-primary" />
        </div>
        <h3 className="text-lg font-semibold text-slate-200 mb-2">
          {t("title")}
        </h3>
        <p className="text-sm text-clinical-muted max-w-sm">
          {t("selectBonePrompt")}
        </p>
      </div>
    );
  }

  // Active region lookup (fallback to first region if not selected)
  const activeRegion = bone.regions.find((r) => r.id === selectedRegionId) || bone.regions[0] || null;
  const classifications = activeRegion?.classifications || [];
  const currentSystem: ClassificationSystem | undefined = classifications[selectedSystemIdx];
  const currentType: FractureClassificationType | undefined = currentSystem?.types[selectedTypeIdx];

  const handleRegionSelect = (regionId: string) => {
    setSelectedRegionId(regionId);
    setSelectedSystemIdx(0);
    setSelectedTypeIdx(0);
  };

  return (
    <div className="w-full h-full flex flex-col glass-card bg-clinical-card/50 overflow-hidden border border-clinical-border/40 animate-slide-up">
      {/* Detail Panel Header */}
      <div className="p-6 border-b border-clinical-border bg-clinical-cardLight/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-clinical-primary/10 text-clinical-primary border border-clinical-primary/20">
              {t("anatomyLabel")}
            </span>
            {bone.pediatric && (
              <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-clinical-glow/15 text-clinical-glow border border-clinical-glow/20 animate-pulse">
                {t("pediatric")}
              </span>
            )}
          </div>
          <h2 className="text-2xl font-bold text-slate-100">{bone.name[language]}</h2>
        </div>

        {/* Tab Controls and Close Button */}
        <div className="flex items-center gap-3 self-start md:self-auto">
          <div className="flex bg-clinical-bg/85 p-1 rounded-xl border border-clinical-border">
            {(["overview", "classifications", "treatment"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-clinical-cardLight text-clinical-primary shadow-sm border border-clinical-border"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {t(tab)}
              </button>
            ))}
          </div>

          {onClose && (
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-clinical-cardLight/60 hover:bg-clinical-primary/20 border border-clinical-border hover:border-clinical-primary text-slate-400 hover:text-slate-100 transition-all duration-200"
              title={language === "en" ? "Close Panel" : "ปิดหน้าต่างข้อมูล"}
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Detail Panel Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* ================= SUB-REGION SELECTOR (TABS) ================= */}
        {bone.regions.length > 1 && (
          <div className="flex flex-col gap-2 bg-clinical-cardLight/5 p-4 rounded-2xl border border-clinical-border/30">
            <span className="text-[10px] font-bold text-clinical-muted uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-clinical-primary" />
              {language === "en" ? "Select Anatomical Region" : "เลือกส่วนประกอบกายวิภาค"}
            </span>
            <div className="flex flex-wrap gap-2">
              {bone.regions.map((reg) => (
                <button
                  key={reg.id}
                  onClick={() => handleRegionSelect(reg.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    activeRegion?.id === reg.id
                      ? "bg-clinical-primary text-white shadow-md shadow-clinical-primary/20 border border-clinical-primary"
                      : "bg-clinical-cardLight border border-clinical-border text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {reg.name[language]}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ================= OVERVIEW TAB ================= */}
        {activeTab === "overview" && (
          <div className="space-y-6 animate-fade-in">
            {/* Clinical Anatomy & Description */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-slate-200 flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-clinical-primary" />
                {t("aboutBone")}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed text-justify bg-clinical-cardLight/20 p-4 rounded-xl border border-clinical-border/40">
                {bone.description[language]}
              </p>
            </div>

            {/* Classification Systems Available */}
            {classifications.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider">
                  {language === "en" ? "Available Classification Systems" : "ระบบการจำแนกประเภทที่มี"}
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {classifications.map((sys, idx) => (
                    <div
                      key={sys.system}
                      onClick={() => {
                        setSelectedSystemIdx(idx);
                        setActiveTab("classifications");
                      }}
                      className="p-4 rounded-xl border border-clinical-border/60 bg-clinical-cardLight/10 hover:bg-clinical-cardLight/30 hover:border-clinical-primary/40 cursor-pointer transition-all duration-200 flex items-center justify-between group"
                    >
                      <div>
                        <h4 className="text-sm font-semibold text-clinical-primary group-hover:underline">
                          {sys.fullName[language]}
                        </h4>
                        <p className="text-xs text-clinical-muted mt-1 leading-relaxed">
                          {sys.description[language]}
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-clinical-muted group-hover:text-clinical-primary transition-colors flex-shrink-0 ml-2" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================= CLASSIFICATIONS TAB ================= */}
        {activeTab === "classifications" && currentSystem && (
          <div className="space-y-6 animate-fade-in">
            {/* System Selection Dropdown/Tabs if multiple systems exist */}
            {classifications.length > 1 && (
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-clinical-muted uppercase tracking-wider">
                  {t("systemSelect")}
                </label>
                <div className="flex flex-wrap gap-2">
                  {classifications.map((sys, idx) => (
                    <button
                      key={sys.system}
                      onClick={() => handleSystemChange(idx)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                        selectedSystemIdx === idx
                          ? "bg-clinical-primary text-white"
                          : "bg-clinical-cardLight border border-clinical-border text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      {sys.system}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* System Title & Description */}
            <div className="p-4 bg-clinical-cardLight/10 rounded-xl border border-clinical-border/30">
              <h3 className="text-lg font-bold text-slate-200">{currentSystem.fullName[language]}</h3>
              <p className="text-xs text-clinical-muted mt-1 leading-relaxed">
                {currentSystem.description[language]}
              </p>
            </div>

            {/* Subtypes Carousel Grid */}
            <div className="space-y-3">
              <span className="text-xs font-semibold text-clinical-muted uppercase tracking-wider">
                {language === "en" ? "Select Subtype" : "เลือกประเภทชิ้นย่อย"}
              </span>
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
                {currentSystem.types.map((typeObj, idx) => (
                  <button
                    key={typeObj.type}
                    onClick={() => setSelectedTypeIdx(idx)}
                    className={`flex-shrink-0 min-w-[70px] py-2 px-3 rounded-xl border text-center transition-all duration-200 ${
                      selectedTypeIdx === idx
                        ? "bg-clinical-accent/15 border-clinical-accent text-clinical-accent shadow-sm"
                        : "bg-clinical-cardLight/30 border-clinical-border text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <div className="text-xs text-clinical-muted">{t("typeLabel")}</div>
                    <div className="text-lg font-extrabold">{typeObj.type}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Current Selected Subtype Details */}
            {currentType && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                {/* Visualizer Column */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-clinical-muted uppercase tracking-wider">
                      Visual Illustration
                    </span>
                    {/* Visualizer mode toggle */}
                    <div className="flex bg-clinical-bg rounded-lg border border-clinical-border p-0.5">
                      <button
                        onClick={() => setShowAsXray(false)}
                        className={`px-2 py-0.5 rounded text-[10px] font-medium transition-all ${
                          !showAsXray
                            ? "bg-clinical-cardLight text-clinical-primary"
                            : "text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        Model
                      </button>
                      <button
                        onClick={() => setShowAsXray(true)}
                        className={`px-2 py-0.5 rounded text-[10px] font-medium transition-all ${
                          showAsXray
                            ? "bg-clinical-cardLight text-clinical-primary"
                            : "text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        X-ray
                      </button>
                    </div>
                  </div>

                  <FractureVisualizer illustrationId={currentType.illustrationId || ""} showAsXray={showAsXray} />

                  {/* Radiograph details description */}
                  <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-900 text-xs text-clinical-muted flex gap-2">
                    <Activity className="w-4 h-4 text-clinical-primary flex-shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                      <strong className="text-slate-300 block mb-0.5">{t("xrayTitle")}:</strong>
                      {currentType.xrayDescription?.[language]}
                    </p>
                  </div>
                </div>

                {/* Info Details Column */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-bold text-clinical-accent flex items-center gap-2">
                      {t("typeLabel")} {currentType.type}: {currentType.name[language]}
                    </h4>
                    <p className="text-sm text-slate-300 mt-2 leading-relaxed text-justify bg-clinical-cardLight/20 p-3 rounded-lg border border-clinical-border/40">
                      {currentType.description[language]}
                    </p>
                  </div>

                  {currentType.moi && (
                    <div className="space-y-1">
                      <span className="text-xs font-semibold text-clinical-muted uppercase tracking-wider flex items-center gap-1.5">
                        <Hammer className="w-3.5 h-3.5 text-clinical-accent" />
                        {t("moi")}
                      </span>
                      <p className="text-xs text-slate-300 leading-relaxed pl-5">
                        {currentType.moi[language]}
                      </p>
                    </div>
                  )}

                  {/* Quick Treatment Note */}
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-clinical-muted uppercase tracking-wider flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5 text-clinical-success" />
                      {t("treatment")}
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed pl-5">
                      {currentType.treatment.operative[language] || currentType.treatment.conservative[language]}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================= TREATMENT TAB ================= */}
        {activeTab === "treatment" && (
          <div className="space-y-6 animate-fade-in">
            {currentType ? (
              <div className="space-y-6">
                <div className="border-b border-clinical-border pb-3">
                  <h3 className="text-base font-bold text-slate-200 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-clinical-success" />
                    {t("treatmentSection")}: Type {currentType.type} ({currentType.name[language]})
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Conservative Card */}
                  <div className="p-5 rounded-2xl border border-clinical-border bg-clinical-cardLight/5 space-y-3">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-extrabold bg-clinical-muted/10 text-slate-300 border border-clinical-muted/20">
                      {t("conservative")}
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed text-justify">
                      {currentType.treatment.conservative[language]}
                    </p>
                  </div>

                  {/* Operative Card */}
                  <div className="p-5 rounded-2xl border border-clinical-success/20 bg-clinical-success/5 space-y-3 shadow-sm shadow-clinical-success/5">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-extrabold bg-clinical-success/15 text-clinical-success border border-clinical-success/30">
                      {t("operative")}
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed text-justify">
                      {currentType.treatment.operative[language]}
                    </p>
                  </div>
                </div>

                {/* Clinical Pearls Callout */}
                {currentType.treatment.pearls && (
                  <div className="p-5 rounded-2xl border border-clinical-primary/20 bg-clinical-primary/5 space-y-2 shadow-inner">
                    <h4 className="text-sm font-extrabold text-clinical-primary flex items-center gap-1.5 uppercase tracking-wider">
                      <Clipboard className="w-4 h-4" />
                      {t("pearls")}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed text-justify">
                      {currentType.treatment.pearls[language]}
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className="p-4 bg-clinical-cardLight/10 rounded-xl border border-clinical-border text-center text-xs text-clinical-muted italic">
                {language === "en" ? "Select a classification system and subtype to view treatments." : "กรุณาเลือกประเภทการหักของกระดูกเพื่อแสดงข้อมูลการรักษา"}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
