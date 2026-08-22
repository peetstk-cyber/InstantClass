import { useState, useEffect, useMemo, useCallback } from "react";
import type { Language } from "../../App";
import type { BoneData } from "../../types";
import { 
  X, 
  HelpCircle, 
  Film, 
  CheckCircle2, 
  XCircle, 
  RotateCw, 
  Award, 
  ChevronRight, 
  Sparkles, 
  Check, 
  Eye, 
  Flame,
  Maximize2,
  ArrowRight,
  Camera
} from "lucide-react";
import { 
  HIGH_YIELD_QUESTIONS, 
  extractSpotFilmItems, 
  generateTwoStepSpotQuestion,
  type HighYieldQuestion,
  type SpotFilmItem,
  type TwoStepSpotQuestion 
} from "./quizData";
import { getBoneIcon } from "../common/BoneIcons";

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  language: Language;
  bones: BoneData[];
  onSelectBone: (boneId: string, regionId?: string) => void;
}

type MainQuizTab = "spot_diag" | "daily_challenge";
type SpotMode = "choice" | "flashcard";
type CategoryFilter = "all" | "upper" | "lower" | "spine" | "pedi";

export function QuizModal({
  isOpen,
  onClose,
  darkMode,
  language,
  bones,
  onSelectBone,
}: QuizModalProps) {
  // Navigation & Sub-mode state
  const [activeTab, setActiveTab] = useState<MainQuizTab>("spot_diag");
  const [spotMode, setSpotMode] = useState<SpotMode>("choice");
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("all");

  // Daily Challenge State
  const [dailyQIdx, setDailyQIdx] = useState<number>(0);
  const [dailyAnswer, setDailyAnswer] = useState<number | null>(null);

  // Spot Choice State
  const [twoStepQuestion, setTwoStepQuestion] = useState<TwoStepSpotQuestion | null>(null);
  const [choiceStep, setChoiceStep] = useState<1 | 2>(1);
  const [step1Selected, setStep1Selected] = useState<string | null>(null);
  const [step1IsCorrect, setStep1IsCorrect] = useState<boolean | null>(null);
  const [step2Selected, setStep2Selected] = useState<string | null>(null);
  const [step2IsCorrect, setStep2IsCorrect] = useState<boolean | null>(null);
  
  // Single-Step Special View Choice State
  const [viewSelected, setViewSelected] = useState<string | null>(null);
  const [viewIsCorrect, setViewIsCorrect] = useState<boolean | null>(null);

  const [choiceScore, setChoiceScore] = useState<number>(0);
  const [choiceStreak, setChoiceStreak] = useState<number>(0);

  // Flash Card State
  const [flashIndex, setFlashIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [masteredIds, setMasteredIds] = useState<Set<string>>(new Set());

  // Image Zoom Modal State
  const [zoomImage, setZoomImage] = useState<{ url: string; title: string } | null>(null);

  // Extract all verified real spot items
  const allSpotItems = useMemo(() => {
    return extractSpotFilmItems(bones);
  }, [bones]);

  // Filtered spot items for flashcards
  const filteredSpotItems = useMemo(() => {
    if (categoryFilter === "all") return allSpotItems;
    if (categoryFilter === "upper") {
      return allSpotItems.filter(i => ["clavicle", "scapula", "humerus", "forearm", "hand"].includes(i.boneId));
    }
    if (categoryFilter === "lower") {
      return allSpotItems.filter(i => ["pelvis", "femur", "patella", "tibia", "foot"].includes(i.boneId));
    }
    if (categoryFilter === "spine") {
      return allSpotItems.filter(i => ["c-spine", "tl-spine"].includes(i.boneId));
    }
    return allSpotItems;
  }, [allSpotItems, categoryFilter]);

  // Generate a new choice question
  const loadNextChoiceQuestion = useCallback(() => {
    if (allSpotItems.length === 0) return;
    const q = generateTwoStepSpotQuestion(allSpotItems, categoryFilter);
    setTwoStepQuestion(q);
    setChoiceStep(1);
    setStep1Selected(null);
    setStep1IsCorrect(null);
    setStep2Selected(null);
    setStep2IsCorrect(null);
    setViewSelected(null);
    setViewIsCorrect(null);
  }, [allSpotItems, categoryFilter]);

  // Initialize or update question when tab/filter changes
  useEffect(() => {
    if (isOpen) {
      loadNextChoiceQuestion();
      setIsFlipped(false);
      setFlashIndex(0);
    }
  }, [isOpen, categoryFilter, loadNextChoiceQuestion]);

  if (!isOpen) return null;

  // Colors based on dark mode
  const primaryColor = darkMode ? "#00CED1" : "#0F766E";
  const bgCard = darkMode ? "#161B27" : "#FFFFFF";
  const borderCard = darkMode ? "#252F42" : "#E2E8F0";
  const textPrimary = darkMode ? "#F8FAFC" : "#0F172A";
  const textMuted = darkMode ? "#94A3B8" : "#64748B";

  const currentDailyQ: HighYieldQuestion = HIGH_YIELD_QUESTIONS[dailyQIdx % HIGH_YIELD_QUESTIONS.length];
  const currentFlashItem: SpotFilmItem | undefined = filteredSpotItems[flashIndex % Math.max(1, filteredSpotItems.length)];

  // Handle Step 1 Choice Selection (Choose Classification System)
  const handleSelectStep1 = (optId: string, isCorrect: boolean) => {
    if (step1Selected !== null || !twoStepQuestion) return;
    setStep1Selected(optId);
    setStep1IsCorrect(isCorrect);

    if (isCorrect) {
      setChoiceScore(prev => prev + 5);
      setTimeout(() => {
        setChoiceStep(2);
      }, 500);
    } else {
      setChoiceStreak(0);
    }
  };

  // Handle Step 2 Choice Selection (Choose Fracture Type / Stage)
  const handleSelectStep2 = (optId: string, isCorrect: boolean) => {
    if (step2Selected !== null || !twoStepQuestion) return;
    setStep2Selected(optId);
    setStep2IsCorrect(isCorrect);

    if (isCorrect) {
      setChoiceScore(prev => prev + 10);
      setChoiceStreak(prev => prev + 1);
    } else {
      setChoiceStreak(0);
    }
  };

  // Handle Special View Single-Step Selection
  const handleSelectView = (optId: string, isCorrect: boolean) => {
    if (viewSelected !== null || !twoStepQuestion) return;
    setViewSelected(optId);
    setViewIsCorrect(isCorrect);

    if (isCorrect) {
      setChoiceScore(prev => prev + 10);
      setChoiceStreak(prev => prev + 1);
    } else {
      setChoiceStreak(0);
    }
  };

  // Handle flash card self-assessment
  const handleFlashAssessment = (known: boolean) => {
    if (!currentFlashItem) return;
    if (known) {
      setMasteredIds(prev => new Set(prev).add(currentFlashItem.id));
      setChoiceStreak(prev => prev + 1);
    }
    setIsFlipped(false);
    setTimeout(() => {
      setFlashIndex(prev => (prev + 1) % Math.max(1, filteredSpotItems.length));
    }, 150);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden"
      style={{ background: "rgba(0, 0, 0, 0.78)", backdropFilter: "blur(8px)" }}
    >
      <div
        style={{
          background: bgCard,
          borderColor: borderCard,
          color: textPrimary,
          maxWidth: 680,
          width: "100%",
        }}
        className="rounded-2xl border flex flex-col shadow-2xl overflow-hidden relative max-h-[94dvh] sm:max-h-[90dvh] w-full min-w-0 animate-scale-in"
      >
        {/* ── Top Header ── */}
        <div 
          className="px-3 sm:px-4 py-2.5 sm:py-3 border-b flex items-center justify-between gap-2 flex-shrink-0 w-full min-w-0"
          style={{ borderColor: borderCard, background: darkMode ? "rgba(0,0,0,0.2)" : "rgba(248,250,252,0.8)" }}
        >
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <div 
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: darkMode ? "rgba(0,206,209,0.15)" : "rgba(15,118,110,0.15)",
                color: primaryColor,
                border: `1px solid ${darkMode ? "rgba(0,206,209,0.3)" : "rgba(15,118,110,0.3)"}`
              }}
            >
              {activeTab === "spot_diag" ? <Film size={16} /> : <HelpCircle size={16} />}
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="font-extrabold text-sm sm:text-base leading-tight truncate">
                {language === "en" ? "Trauma Radiograph Spot Diagnosis" : "สปอตวินิจฉัยภาพฟิล์มเอกซเรย์จริง"}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center transition-colors hover:bg-slate-500/15 cursor-pointer flex-shrink-0"
            style={{ color: textMuted }}
            title="Close"
          >
            <X size={17} />
          </button>
        </div>

        {/* ── Main Mode Switcher (Trauma Film vs Daily Quiz) ── */}
        <div 
          className="px-3 sm:px-4 py-2 border-b flex items-center justify-between gap-2 flex-wrap w-full min-w-0"
          style={{ borderColor: borderCard }}
        >
          <div 
            className="flex p-0.5 rounded-xl border gap-0.5 flex-1 min-w-0"
            style={{ 
              background: darkMode ? "#10141E" : "#F1F5F9", 
              borderColor: borderCard 
            }}
          >
            <button
              onClick={() => setActiveTab("spot_diag")}
              className="flex-1 px-2.5 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-extrabold transition-all flex items-center justify-center gap-1.5 cursor-pointer min-w-0"
              style={{
                background: activeTab === "spot_diag" ? primaryColor : "transparent",
                color: activeTab === "spot_diag" ? (darkMode ? "#0F172A" : "#FFFFFF") : textMuted,
                boxShadow: activeTab === "spot_diag" ? (darkMode ? "0 2px 8px rgba(0,206,209,0.3)" : "0 2px 8px rgba(15,118,110,0.3)") : "none",
              }}
            >
              <Film size={13} className="flex-shrink-0" />
              <span className="truncate">{language === "en" ? "Trauma Film" : "Trauma Film"}</span>
            </button>

            <button
              onClick={() => setActiveTab("daily_challenge")}
              className="flex-1 px-2.5 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-extrabold transition-all flex items-center justify-center gap-1.5 cursor-pointer min-w-0"
              style={{
                background: activeTab === "daily_challenge" ? primaryColor : "transparent",
                color: activeTab === "daily_challenge" ? (darkMode ? "#0F172A" : "#FFFFFF") : textMuted,
                boxShadow: activeTab === "daily_challenge" ? (darkMode ? "0 2px 8px rgba(0,206,209,0.3)" : "0 2px 8px rgba(15,118,110,0.3)") : "none",
              }}
            >
              <HelpCircle size={13} className="flex-shrink-0" />
              <span className="truncate">{language === "en" ? "Daily Quiz" : "Daily Quiz"}</span>
            </button>
          </div>

          {/* Streak & Score Badges */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            {choiceStreak > 0 && (
              <div 
                className="flex items-center gap-1 px-2 py-1 rounded-lg text-[10.5px] sm:text-xs font-extrabold border bg-amber-500/15 border-amber-500/30 text-amber-600 dark:text-amber-400"
              >
                <Flame size={13} className="fill-amber-500 text-amber-500 flex-shrink-0" />
                <span>{choiceStreak} {language === "en" ? "Streak" : "คอมโบ"}</span>
              </div>
            )}
            {choiceScore > 0 && (
              <div 
                className="flex items-center gap-1 px-2 py-1 rounded-lg text-[10.5px] sm:text-xs font-extrabold border"
                style={{
                  background: darkMode ? "rgba(0,206,209,0.12)" : "rgba(15,118,110,0.12)",
                  borderColor: darkMode ? "rgba(0,206,209,0.3)" : "rgba(15,118,110,0.3)",
                  color: primaryColor
                }}
              >
                <Award size={13} className="flex-shrink-0" />
                <span>{choiceScore} pts</span>
              </div>
            )}
          </div>
        </div>

        {/* ── Content Body (Scrolls vertically only) ── */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-2.5 sm:p-4 space-y-2 sm:space-y-2.5 w-full min-w-0">
          
          {/* ========================================================================= */}
          {/* TAB 1: TRAUMA FILM SPOT DIAGNOSIS                                         */}
          {/* ========================================================================= */}
          {activeTab === "spot_diag" && (
            <div className="space-y-1.5 sm:space-y-2 animate-fadeIn w-full min-w-0">
              {/* Sub-controls: Mode Switch (Choice vs Flashcard) & Category Filter */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 w-full min-w-0">
                {/* Choice vs Flashcard Pill Switcher */}
                <div 
                  className="flex p-0.5 rounded-lg border gap-0.5 w-full sm:w-auto"
                  style={{ background: darkMode ? "#10141E" : "#F1F5F9", borderColor: borderCard }}
                >
                  <button
                    onClick={() => { setSpotMode("choice"); }}
                    className="flex-1 sm:flex-initial px-2.5 py-0.5 rounded-md text-[10.5px] sm:text-[11px] font-extrabold transition-all cursor-pointer text-center"
                    style={{
                      background: spotMode === "choice" ? (darkMode ? "rgba(255,255,255,0.12)" : "#FFFFFF") : "transparent",
                      color: spotMode === "choice" ? textPrimary : textMuted,
                      boxShadow: spotMode === "choice" ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
                    }}
                  >
                    🎯 {language === "en" ? "Choice Quiz" : "ชอยส์ตัวเลือก"}
                  </button>
                  <button
                    onClick={() => { setSpotMode("flashcard"); setIsFlipped(false); }}
                    className="flex-1 sm:flex-initial px-2.5 py-0.5 rounded-md text-[10.5px] sm:text-[11px] font-extrabold transition-all cursor-pointer text-center"
                    style={{
                      background: spotMode === "flashcard" ? (darkMode ? "rgba(255,255,255,0.12)" : "#FFFFFF") : "transparent",
                      color: spotMode === "flashcard" ? textPrimary : textMuted,
                      boxShadow: spotMode === "flashcard" ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
                    }}
                  >
                    🗂️ {language === "en" ? "Flash Card Flip" : "บัตรคำถาม-เฉลย"}
                  </button>
                </div>

                {/* Region Category Filter Pills */}
                <div className="flex items-center gap-1 overflow-x-auto no-scrollbar w-full sm:w-auto py-0.5">
                  {(["all", "upper", "lower", "spine"] as CategoryFilter[]).map((cat) => {
                    const labels: Record<CategoryFilter, { en: string; th: string }> = {
                      all: { en: "All", th: "ทั้งหมด" },
                      upper: { en: "Upper", th: "รยางค์บน" },
                      lower: { en: "Lower", th: "รยางค์ล่าง" },
                      spine: { en: "Spine", th: "สันหลัง" },
                      pedi: { en: "Pediatric", th: "กระดูกเด็ก" },
                    };
                    const isSelected = categoryFilter === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => setCategoryFilter(cat)}
                        className="px-2.5 py-0.5 rounded-md text-[10px] sm:text-[10.5px] font-bold whitespace-nowrap transition-all cursor-pointer flex-shrink-0"
                        style={{
                          background: isSelected 
                            ? (darkMode ? "rgba(0,206,209,0.18)" : "rgba(15,118,110,0.15)")
                            : "transparent",
                          color: isSelected ? primaryColor : textMuted,
                          border: isSelected 
                            ? `1px solid ${darkMode ? "rgba(0,206,209,0.4)" : "rgba(15,118,110,0.4)"}` 
                            : `1px solid transparent`,
                        }}
                      >
                        {labels[cat][language]}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ── SUBMODE A: MULTIPLE CHOICE MODE ── */}
              {spotMode === "choice" && (
                <div className="space-y-2 sm:space-y-2.5 w-full min-w-0">
                  {twoStepQuestion ? (
                    <>
                      {/* Film Image Box */}
                      <div 
                        className="w-full rounded-2xl border p-2 sm:p-3 flex flex-col items-center justify-center relative overflow-hidden group shadow-sm box-border min-w-0"
                        style={{
                          background: darkMode ? "#0C0F17" : "#F8FAFC",
                          borderColor: borderCard,
                        }}
                      >
                        <div className="w-full h-40 sm:h-52 flex items-center justify-center relative bg-black/40 rounded-xl p-1 overflow-hidden">
                          <img
                            src={twoStepQuestion.target.imageUrl}
                            alt="Trauma Real Radiograph"
                            className="max-h-full max-w-full object-contain rounded-lg transition-transform duration-200 group-hover:scale-102"
                          />



                          {/* Fullscreen Magnify Trigger */}
                          <button
                            onClick={() => setZoomImage({
                              url: twoStepQuestion.target.imageUrl,
                              title: `${twoStepQuestion.target.systemName}: ${twoStepQuestion.target.typeCode}`
                            })}
                            className="absolute top-1.5 right-1.5 p-1.5 rounded-lg bg-black/70 hover:bg-black/90 border border-slate-700/60 text-white backdrop-blur-md transition-all cursor-pointer opacity-85 hover:opacity-100"
                            title="Zoom Image"
                          >
                            <Maximize2 size={12} />
                          </button>
                        </div>

                        <div className="w-full mt-1.5 pt-1.5 border-t flex items-center justify-between text-[10px] sm:text-[10.5px] font-bold min-w-0" style={{ borderColor: borderCard, color: textMuted }}>
                          <div className="flex items-center gap-1.5 min-w-0 truncate">
                            {(() => {
                              const BoneIcon = getBoneIcon(twoStepQuestion.target.boneId);
                              return (
                                <span className="flex items-center gap-1 text-teal-700 dark:text-[#00CED1] flex-shrink-0">
                                  <BoneIcon size={12} />
                                  <span>{twoStepQuestion.target.boneName[language]}</span>
                                </span>
                              );
                            })()}
                            <span>•</span>
                            <span className="truncate">{twoStepQuestion.target.regionName[language]}</span>
                          </div>
                        </div>
                      </div>

                      {/* ───────────────────────────────────────────────────────────── */}
                      {/* TYPE A: SPECIAL RADIOGRAPHIC VIEW QUIZ (1-STEP VIEW ANSWER)  */}
                      {/* ───────────────────────────────────────────────────────────── */}
                      {twoStepQuestion.kind === "investigation_view" ? (
                        <div className="space-y-2.5 animate-fadeIn w-full min-w-0">
                          {/* Banner Header for Special Radiographic View Quiz */}
                          <div 
                            className="p-2 rounded-xl border flex items-center gap-1.5 min-w-0"
                            style={{
                              background: darkMode ? "rgba(168,85,247,0.12)" : "rgba(147,51,234,0.08)",
                              borderColor: darkMode ? "rgba(168,85,247,0.3)" : "rgba(147,51,234,0.25)",
                              color: darkMode ? "#E9D5FF" : "#6B21A8",
                            }}
                          >
                            <Camera size={14} className="text-purple-600 dark:text-purple-400 flex-shrink-0" />
                            <span className="text-[11px] sm:text-xs font-black truncate">
                              {language === "en" ? "Identify This Special Radiographic Projection" : "ระบุชื่อท่าถ่ายภาพรังสีพิเศษนี้"}
                            </span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full min-w-0">
                            {twoStepQuestion.viewOptions.map((opt) => {
                              const isSelected = viewSelected === opt.id;
                              const isAnswered = viewSelected !== null;
                              const isCorrect = opt.isCorrect;

                              let btnBg = darkMode ? "rgba(255,255,255,0.03)" : "#FFFFFF";
                              let btnBorder = borderCard;
                              let btnColor = textPrimary;

                              if (isAnswered) {
                                if (isCorrect) {
                                  btnBg = "rgba(46, 204, 113, 0.15)";
                                  btnBorder = "#2ECC71";
                                  btnColor = darkMode ? "#2ECC71" : "#15803D";
                                } else if (isSelected && !isCorrect) {
                                  btnBg = "rgba(239, 68, 68, 0.15)";
                                  btnBorder = "#EF4444";
                                  btnColor = darkMode ? "#F87171" : "#B91C1C";
                                }
                              }

                              return (
                                <button
                                  key={opt.id}
                                  onClick={() => handleSelectView(opt.id, opt.isCorrect)}
                                  disabled={isAnswered}
                                  className="p-2.5 sm:p-3 rounded-xl border text-left transition-all flex items-center justify-between gap-2 active:scale-98 cursor-pointer disabled:cursor-default shadow-xs min-w-0 w-full overflow-hidden"
                                  style={{
                                    background: btnBg,
                                    borderColor: btnBorder,
                                    color: btnColor,
                                  }}
                                >
                                  <div className="min-w-0 flex-1">
                                    <div className="font-extrabold text-xs sm:text-sm leading-tight truncate">
                                      {opt.typeCode}
                                    </div>
                                    <div className="text-[10px] sm:text-[11px] font-medium opacity-80 truncate mt-0.5">
                                      {opt.typeName[language]}
                                    </div>
                                  </div>

                                  {isAnswered && (
                                    <div className="flex-shrink-0">
                                      {isCorrect ? (
                                        <CheckCircle2 size={16} className="text-emerald-500" />
                                      ) : isSelected ? (
                                        <XCircle size={16} className="text-rose-500" />
                                      ) : null}
                                    </div>
                                  )}
                                </button>
                              );
                            })}
                          </div>

                          {/* Special View Feedback & Findings */}
                          {viewSelected !== null && (
                            <div 
                              className="p-3 sm:p-4 rounded-2xl border space-y-2.5 animate-fadeIn mt-2 w-full min-w-0"
                              style={{
                                background: darkMode ? "rgba(168,85,247,0.06)" : "rgba(147,51,234,0.05)",
                                borderColor: darkMode ? "rgba(168,85,247,0.3)" : "rgba(147,51,234,0.3)",
                              }}
                            >
                              <div className="flex items-center justify-between flex-wrap gap-2">
                                <div className="flex items-center gap-1.5 min-w-0">
                                  {viewIsCorrect ? (
                                    <span className="font-extrabold text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                                      <CheckCircle2 size={15} className="flex-shrink-0" />
                                      <span>{language === "en" ? "Correct View! (+10 pts)" : "ถูกต้อง! (+10 คะแนน)"}</span>
                                    </span>
                                  ) : (
                                    <span className="font-extrabold text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1 truncate">
                                      <XCircle size={15} className="flex-shrink-0" />
                                      <span className="truncate">{language === "en" ? `Correct: ${twoStepQuestion.target.typeCode}` : `เฉลย: ${twoStepQuestion.target.typeCode}`}</span>
                                    </span>
                                  )}
                                </div>

                                <button
                                  onClick={loadNextChoiceQuestion}
                                  className="px-3 py-1.5 rounded-xl font-extrabold text-xs transition-all flex items-center gap-1 cursor-pointer shadow-sm active:scale-95 flex-shrink-0"
                                  style={{
                                    background: primaryColor,
                                    color: darkMode ? "#0F172A" : "#FFFFFF",
                                  }}
                                >
                                  <span>{language === "en" ? "Next Film" : "เคสถัดไป"}</span>
                                  <RotateCw size={12} />
                                </button>
                              </div>

                              {/* View Positioning & Technique Findings */}
                              <div className="space-y-1 text-xs">
                                <div className="font-extrabold text-purple-700 dark:text-purple-300 flex items-center gap-1 text-[10.5px] uppercase tracking-wide">
                                  <Sparkles size={11} className="flex-shrink-0" />
                                  <span>{language === "en" ? "Positioning & Findings:" : "เทคนิคการจัดท่าและจุดสังเกตในฟิล์ม:"}</span>
                                </div>
                                <p className="font-medium text-slate-800 dark:text-slate-200 leading-relaxed text-[11px]">
                                  {twoStepQuestion.target.xrayFindings[language]}
                                </p>
                              </div>

                              {twoStepQuestion.target.conservative && (
                                <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-[10.5px]">
                                  <span className="font-bold text-purple-800 dark:text-purple-300 block mb-0.5">
                                    {language === "en" ? "Clinical Utility:" : "ประโยชน์ทางคลินิก:"}
                                  </span>
                                  <span className="text-slate-800 dark:text-slate-300">
                                    {twoStepQuestion.target.conservative[language]}
                                  </span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ) : (
                        /* ───────────────────────────────────────────────────────────── */
                        /* TYPE B: FRACTURE CLASSIFICATION QUIZ (2-STEP DIAGNOSTIC FLOW) */
                        /* ───────────────────────────────────────────────────────────── */
                        <div className="space-y-3 animate-fadeIn w-full min-w-0">
                          {/* ── 2-STEP PROGRESS STEPPER ── */}
                          <div className="flex items-center justify-between gap-1.5 w-full min-w-0">
                            <div 
                              className="flex items-center gap-1.5 px-2 sm:px-3 py-1.5 rounded-xl border flex-1 min-w-0 transition-all"
                              style={{
                                background: choiceStep === 1 
                                  ? (darkMode ? "rgba(0,206,209,0.15)" : "rgba(15,118,110,0.12)")
                                  : step1IsCorrect 
                                    ? "rgba(46, 204, 113, 0.12)" 
                                    : (darkMode ? "#10141E" : "#F1F5F9"),
                                borderColor: choiceStep === 1 
                                  ? primaryColor 
                                  : step1IsCorrect ? "#2ECC71" : borderCard,
                                color: choiceStep === 1 ? primaryColor : textPrimary,
                              }}
                            >
                              <div 
                                className="w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center text-[9px] sm:text-[10px] font-black flex-shrink-0"
                                style={{
                                  background: step1IsCorrect ? "#2ECC71" : choiceStep === 1 ? primaryColor : "rgba(255,255,255,0.15)",
                                  color: choiceStep === 1 || step1IsCorrect ? "#FFFFFF" : textMuted,
                                }}
                              >
                                {step1IsCorrect ? "✓" : "1"}
                              </div>
                              <div className="text-[10px] sm:text-[11px] font-extrabold truncate">
                                {language === "en" ? "1. Classification" : "1. ชื่อระบบจำแนก"}
                              </div>
                            </div>

                            <ArrowRight size={12} className="text-slate-400 flex-shrink-0" />

                            <div 
                              className="flex items-center gap-1.5 px-2 sm:px-3 py-1.5 rounded-xl border flex-1 min-w-0 transition-all"
                              style={{
                                background: choiceStep === 2 
                                  ? (darkMode ? "rgba(0,206,209,0.15)" : "rgba(15,118,110,0.12)")
                                  : step2IsCorrect 
                                    ? "rgba(46, 204, 113, 0.12)" 
                                    : (darkMode ? "#10141E" : "#F1F5F9"),
                                borderColor: choiceStep === 2 
                                  ? primaryColor 
                                  : step2IsCorrect ? "#2ECC71" : borderCard,
                                color: choiceStep === 2 ? primaryColor : textMuted,
                              }}
                            >
                              <div 
                                className="w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center text-[9px] sm:text-[10px] font-black flex-shrink-0"
                                style={{
                                  background: step2IsCorrect ? "#2ECC71" : choiceStep === 2 ? primaryColor : "rgba(255,255,255,0.15)",
                                  color: choiceStep === 2 || step2IsCorrect ? "#FFFFFF" : textMuted,
                                }}
                              >
                                {step2IsCorrect ? "✓" : "2"}
                              </div>
                              <div className="text-[10px] sm:text-[11px] font-extrabold truncate">
                                {language === "en" ? "2. Fracture Type" : "2. ชนิด Type"}
                              </div>
                            </div>
                          </div>

                          {/* ── STEP 1: CHOOSE CLASSIFICATION SYSTEM ── */}
                          {choiceStep === 1 && (
                            <div className="space-y-2.5 animate-fadeIn w-full min-w-0">
                              <div className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">
                                {language === "en" 
                                  ? "Question 1/2: Which classification system applies?"
                                  : "คำถาม 1/2: ภาพฟิล์มเอกซเรย์นี้ใช้ระบบการจำแนกใด?"}
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full min-w-0">
                                {twoStepQuestion.step1Options.map((opt) => {
                                  const isSelected = step1Selected === opt.id;
                                  const isAnswered = step1Selected !== null;
                                  const isCorrect = opt.isCorrect;

                                  let btnBg = darkMode ? "rgba(255,255,255,0.03)" : "#FFFFFF";
                                  let btnBorder = borderCard;
                                  let btnColor = textPrimary;

                                  if (isAnswered) {
                                    if (isCorrect) {
                                      btnBg = "rgba(46, 204, 113, 0.15)";
                                      btnBorder = "#2ECC71";
                                      btnColor = darkMode ? "#2ECC71" : "#15803D";
                                    } else if (isSelected && !isCorrect) {
                                      btnBg = "rgba(239, 68, 68, 0.15)";
                                      btnBorder = "#EF4444";
                                      btnColor = darkMode ? "#F87171" : "#B91C1C";
                                    }
                                  }

                                  return (
                                    <button
                                      key={opt.id}
                                      onClick={() => handleSelectStep1(opt.id, opt.isCorrect)}
                                      disabled={isAnswered}
                                      className="p-2.5 sm:p-3 rounded-xl border text-left transition-all flex items-center justify-between gap-2 active:scale-98 cursor-pointer disabled:cursor-default shadow-xs min-w-0 w-full overflow-hidden"
                                      style={{
                                        background: btnBg,
                                        borderColor: btnBorder,
                                        color: btnColor,
                                      }}
                                    >
                                      <div className="min-w-0 flex-1">
                                        <div className="font-extrabold text-xs sm:text-sm leading-tight truncate">
                                          {opt.name}
                                        </div>
                                        <div className="text-[10px] sm:text-[11px] font-medium opacity-80 truncate mt-0.5">
                                          {opt.fullName[language]}
                                        </div>
                                      </div>

                                      {isAnswered && (
                                        <div className="flex-shrink-0">
                                          {isCorrect ? (
                                            <CheckCircle2 size={16} className="text-emerald-500" />
                                          ) : isSelected ? (
                                            <XCircle size={16} className="text-rose-500" />
                                          ) : null}
                                        </div>
                                      )}
                                    </button>
                                  );
                                })}
                              </div>

                              {/* Step 1 Feedback & Continue Button */}
                              {step1Selected !== null && (
                                <div className="flex items-center justify-between pt-1 animate-fadeIn gap-2 flex-wrap">
                                  <span className="text-[11px] sm:text-xs font-bold truncate flex-1 min-w-0" style={{ color: step1IsCorrect ? "#2ECC71" : "#EF4444" }}>
                                    {step1IsCorrect 
                                      ? (language === "en" ? "✓ Correct! (+5 pts)" : "✓ ระบบจำแนกถูกต้อง! (+5 คะแนน)")
                                      : (language === "en" ? `✕ System: ${twoStepQuestion.target.systemName}` : `✕ คำตอบคือ: ${twoStepQuestion.target.systemName}`)}
                                  </span>

                                  <button
                                    onClick={() => setChoiceStep(2)}
                                    className="px-3 py-1.5 rounded-xl font-extrabold text-xs transition-all flex items-center gap-1 cursor-pointer shadow-sm active:scale-95 flex-shrink-0"
                                    style={{
                                      background: primaryColor,
                                      color: darkMode ? "#0F172A" : "#FFFFFF",
                                    }}
                                  >
                                    <span>{language === "en" ? "Next: Type ➔" : "ถัดไป: ระบุ Type ➔"}</span>
                                  </button>
                                </div>
                              )}
                            </div>
                          )}

                          {/* ── STEP 2: CHOOSE FRACTURE TYPE / STAGE ── */}
                          {choiceStep === 2 && (
                            <div className="space-y-2.5 animate-fadeIn w-full min-w-0">
                              <div className="flex items-center justify-between gap-2">
                                <div className="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300 truncate">
                                  {language === "en" 
                                    ? `Question 2/2: What is the subtype under ${twoStepQuestion.target.systemName}?`
                                    : `คำถาม 2/2: รอยหักนี้จัดเป็น Type ใดในระบบ ${twoStepQuestion.target.systemName}?`}
                                </div>
                                <button
                                  onClick={() => setChoiceStep(1)}
                                  className="text-[10px] font-bold underline opacity-70 hover:opacity-100 cursor-pointer flex-shrink-0"
                                >
                                  {language === "en" ? "◀ Step 1" : "◀ ดู Step 1"}
                                </button>
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full min-w-0">
                                {twoStepQuestion.step2Options.map((opt) => {
                                  const isSelected = step2Selected === opt.id;
                                  const isAnswered = step2Selected !== null;
                                  const isCorrect = opt.isCorrect;

                                  let btnBg = darkMode ? "rgba(255,255,255,0.03)" : "#FFFFFF";
                                  let btnBorder = borderCard;
                                  let btnColor = textPrimary;

                                  if (isAnswered) {
                                    if (isCorrect) {
                                      btnBg = "rgba(46, 204, 113, 0.15)";
                                      btnBorder = "#2ECC71";
                                      btnColor = darkMode ? "#2ECC71" : "#15803D";
                                    } else if (isSelected && !isCorrect) {
                                      btnBg = "rgba(239, 68, 68, 0.15)";
                                      btnBorder = "#EF4444";
                                      btnColor = darkMode ? "#F87171" : "#B91C1C";
                                    }
                                  }

                                  return (
                                    <button
                                      key={opt.id}
                                      onClick={() => handleSelectStep2(opt.id, opt.isCorrect)}
                                      disabled={isAnswered}
                                      className="p-2.5 sm:p-3 rounded-xl border text-left transition-all flex items-center justify-between gap-2 active:scale-98 cursor-pointer disabled:cursor-default shadow-xs min-w-0 w-full overflow-hidden"
                                      style={{
                                        background: btnBg,
                                        borderColor: btnBorder,
                                        color: btnColor,
                                      }}
                                    >
                                      <div className="min-w-0 flex-1">
                                        <div className="font-extrabold text-xs sm:text-sm leading-tight truncate">
                                          {opt.typeCode}
                                        </div>
                                        <div className="text-[10px] sm:text-[11px] font-medium opacity-80 truncate mt-0.5">
                                          {opt.typeName[language]}
                                        </div>
                                      </div>

                                      {isAnswered && (
                                        <div className="flex-shrink-0">
                                          {isCorrect ? (
                                            <CheckCircle2 size={16} className="text-emerald-500" />
                                          ) : isSelected ? (
                                            <XCircle size={16} className="text-rose-500" />
                                          ) : null}
                                        </div>
                                      )}
                                    </button>
                                  );
                                })}
                              </div>

                              {/* Step 2 Feedback & Full Diagnostic Report */}
                              {step2Selected !== null && (
                                <div 
                                  className="p-3 sm:p-4 rounded-2xl border space-y-2.5 animate-fadeIn mt-2 w-full min-w-0"
                                  style={{
                                    background: darkMode ? "rgba(0,206,209,0.06)" : "rgba(15,118,110,0.05)",
                                    borderColor: darkMode ? "rgba(0,206,209,0.3)" : "rgba(15,118,110,0.3)",
                                  }}
                                >
                                  <div className="flex items-center justify-between flex-wrap gap-2">
                                    <div className="flex items-center gap-1.5 min-w-0">
                                      {step2IsCorrect ? (
                                        <span className="font-extrabold text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                                          <CheckCircle2 size={15} className="flex-shrink-0" />
                                          <span>{language === "en" ? "Diagnosis Complete! (+10 pts)" : "วินิจฉัยถูกต้องครบ 2 ขั้นตอน! (+10 คะแนน)"}</span>
                                        </span>
                                      ) : (
                                        <span className="font-extrabold text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1 truncate">
                                          <XCircle size={15} className="flex-shrink-0" />
                                          <span className="truncate">{language === "en" ? `Correct: ${twoStepQuestion.target.typeCode}` : `เฉลย: ${twoStepQuestion.target.typeCode}`}</span>
                                        </span>
                                      )}
                                    </div>

                                    <button
                                      onClick={loadNextChoiceQuestion}
                                      className="px-3 py-1.5 rounded-xl font-extrabold text-xs transition-all flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95 flex-shrink-0"
                                      style={{
                                        background: primaryColor,
                                        color: darkMode ? "#0F172A" : "#FFFFFF",
                                      }}
                                    >
                                      <span>{language === "en" ? "Next Film" : "เคสถัดไป"}</span>
                                      <RotateCw size={12} />
                                    </button>
                                  </div>

                                  {/* Radiographic Key Findings */}
                                  <div className="space-y-1 text-xs">
                                    <div className="font-extrabold text-teal-800 dark:text-[#00CED1] flex items-center gap-1 text-[10.5px] uppercase tracking-wide">
                                      <Sparkles size={11} className="flex-shrink-0" />
                                      <span>{language === "en" ? "Key Radiographic Findings:" : "จุดสังเกตสำคัญในภาพฟิล์ม:"}</span>
                                    </div>
                                    <p className="font-medium text-slate-800 dark:text-slate-200 leading-relaxed text-[11px]">
                                      {twoStepQuestion.target.xrayFindings[language]}
                                    </p>
                                  </div>

                                  {/* Management Recommendation */}
                                  {(twoStepQuestion.target.conservative || twoStepQuestion.target.operative) && (
                                    <div className="pt-1.5 border-t border-teal-500/20 grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[10.5px]">
                                      {twoStepQuestion.target.conservative && (
                                        <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                                          <span className="font-bold text-emerald-700 dark:text-emerald-400 block mb-0.5">
                                            Conservative:
                                          </span>
                                          <span className="text-slate-800 dark:text-slate-300">
                                            {twoStepQuestion.target.conservative[language]}
                                          </span>
                                        </div>
                                      )}
                                      {twoStepQuestion.target.operative && (
                                        <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                                          <span className="font-bold text-blue-700 dark:text-blue-400 block mb-0.5">
                                            Operative:
                                          </span>
                                          <span className="text-slate-800 dark:text-slate-300">
                                            {twoStepQuestion.target.operative[language]}
                                          </span>
                                        </div>
                                      )}
                                    </div>
                                  )}

                                  {/* Jump to Full Classification Guide */}
                                  <div className="pt-0.5 flex justify-end">
                                    <button
                                      onClick={() => {
                                        onSelectBone(twoStepQuestion.target.boneId, twoStepQuestion.target.regionId);
                                        onClose();
                                      }}
                                      className="text-[10.5px] font-extrabold text-teal-700 dark:text-[#00CED1] hover:underline flex items-center gap-0.5 cursor-pointer"
                                    >
                                      <span>{language === "en" ? `Open Full ${twoStepQuestion.target.systemName}` : `เปิดดู ${twoStepQuestion.target.systemName} เต็มรูปแบบ`}</span>
                                      <ChevronRight size={12} />
                                    </button>
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="py-8 text-center text-xs" style={{ color: textMuted }}>
                      {language === "en" ? "No films available for this filter." : "ไม่พบภาพสำหรับหมวดหมู่นี้"}
                    </div>
                  )}
                </div>
              )}

              {/* ── SUBMODE B: FLASH CARD FLIP MODE ── */}
              {spotMode === "flashcard" && (
                <div className="space-y-3 sm:space-y-4 w-full min-w-0">
                  {currentFlashItem ? (
                    <div className="space-y-3 w-full min-w-0">
                      {/* Flashcard Header Controls */}
                      <div className="flex items-center justify-between text-xs font-bold min-w-0" style={{ color: textMuted }}>
                        <div className="flex items-center gap-1.5 min-w-0">
                          <span className="truncate text-[11px]">
                            {language === "en" 
                              ? `Card ${flashIndex + 1}/${filteredSpotItems.length}` 
                              : `บัตร ${flashIndex + 1}/${filteredSpotItems.length}`}
                          </span>
                          {masteredIds.size > 0 && (
                            <span className="px-1.5 py-0.2 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-[9.5px]">
                              ✓ {masteredIds.size}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-1.5 flex-shrink-0">
                          <button
                            onClick={() => { setIsFlipped(false); setFlashIndex(prev => (prev - 1 + filteredSpotItems.length) % filteredSpotItems.length); }}
                            className="px-2 py-0.5 rounded-lg border hover:bg-slate-500/10 cursor-pointer text-[10.5px]"
                            style={{ borderColor: borderCard }}
                          >
                            ◀ {language === "en" ? "Prev" : "ก่อนหน้า"}
                          </button>
                          <button
                            onClick={() => { setIsFlipped(false); setFlashIndex(prev => (prev + 1) % filteredSpotItems.length); }}
                            className="px-2 py-0.5 rounded-lg border hover:bg-slate-500/10 cursor-pointer text-[10.5px]"
                            style={{ borderColor: borderCard }}
                          >
                            {language === "en" ? "Next" : "ถัดไป"} ▶
                          </button>
                        </div>
                      </div>

                      {/* Flippable Card Container */}
                      <div 
                        onClick={() => setIsFlipped(!isFlipped)}
                        className="w-full rounded-2xl border p-3 sm:p-5 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 relative group hover:shadow-lg select-none min-w-0 box-border"
                        style={{
                          background: darkMode ? "#0C0F17" : "#FFFFFF",
                          borderColor: isFlipped ? primaryColor : borderCard,
                          minHeight: 280,
                        }}
                      >
                        {!isFlipped ? (
                          /* ── FRONT SIDE: IMAGE & QUESTION PROMPT ── */
                          <div className="w-full flex flex-col items-center text-center space-y-2.5 animate-fadeIn min-w-0">
                            <div className="w-full h-44 sm:h-60 flex items-center justify-center relative bg-black/40 rounded-xl p-1 overflow-hidden">
                              <img
                                src={currentFlashItem.imageUrl}
                                alt="Flashcard Real Trauma Radiograph"
                                className="max-h-full max-w-full object-contain rounded-lg"
                              />


                            </div>

                            <div className="pt-1">
                              <span 
                                className="px-3 py-1 rounded-full text-[11px] font-extrabold flex items-center gap-1 shadow-xs"
                                style={{
                                  background: darkMode ? "rgba(0,206,209,0.15)" : "rgba(15,118,110,0.12)",
                                  color: primaryColor,
                                  border: `1px solid ${darkMode ? "rgba(0,206,209,0.3)" : "rgba(15,118,110,0.3)"}`
                                }}
                              >
                                <Eye size={13} />
                                <span>{language === "en" ? "Tap to Reveal Diagnosis & Management" : "แตะที่บัตรเพื่อดูเฉลยและการรักษา"}</span>
                              </span>
                            </div>
                          </div>
                        ) : (
                          /* ── BACK SIDE: DIAGNOSIS, FINDINGS & MANAGEMENT ── */
                          <div className="w-full space-y-2.5 text-left animate-fadeIn min-w-0">
                            {/* Diagnosis Title */}
                            <div className="border-b pb-2" style={{ borderColor: borderCard }}>
                              <div className="text-[10px] font-extrabold uppercase tracking-wider text-teal-800 dark:text-[#00CED1] truncate">
                                {currentFlashItem.boneName[language]} • {currentFlashItem.regionName[language]}
                              </div>
                              <h3 className="text-sm sm:text-base font-black mt-0.5 text-black dark:text-slate-100 truncate">
                                {currentFlashItem.systemName}: {currentFlashItem.typeCode}
                              </h3>
                              <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300">
                                {currentFlashItem.typeName[language]}
                              </p>
                            </div>

                            {/* Key X-Ray Findings */}
                            <div className="space-y-1 text-xs">
                              <div className="font-extrabold text-teal-800 dark:text-[#00CED1] uppercase text-[10px] tracking-wider">
                                🩻 {language === "en" ? "Key Hallmarks / Technique:" : "ลักษณะเด่น / เทคนิคจัดท่า:"}
                              </div>
                              <p className="text-slate-800 dark:text-slate-200 leading-relaxed text-[11px]">
                                {currentFlashItem.xrayFindings[language]}
                              </p>
                            </div>

                            {/* Management / Indications */}
                            {(currentFlashItem.conservative || currentFlashItem.operative) && (
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs pt-1">
                                {currentFlashItem.conservative && (
                                  <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[10.5px]">
                                    <span className="font-bold text-emerald-700 dark:text-emerald-400 block mb-0.5">
                                      {currentFlashItem.kind === "investigation_view" ? "Clinical Utility:" : "Conservative:"}
                                    </span>
                                    <span className="text-slate-800 dark:text-slate-300 leading-snug">
                                      {currentFlashItem.conservative[language]}
                                    </span>
                                  </div>
                                )}
                                {currentFlashItem.operative && (
                                  <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-[10.5px]">
                                    <span className="font-bold text-blue-700 dark:text-blue-400 block mb-0.5">
                                      Operative:
                                    </span>
                                    <span className="text-slate-800 dark:text-slate-300 leading-snug">
                                      {currentFlashItem.operative[language]}
                                    </span>
                                  </div>
                                )}
                              </div>
                            )}

                            <div className="text-center pt-1 text-[10px] font-bold" style={{ color: textMuted }}>
                              {language === "en" ? "Tap card again to view image" : "แตะอีกครั้งเพื่อกลับไปดูรูปภาพ"}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Flashcard Action Buttons */}
                      <div className="flex items-center justify-between gap-2 pt-1 w-full min-w-0">
                        <button
                          onClick={() => handleFlashAssessment(false)}
                          className="flex-1 py-2 px-2.5 rounded-xl border text-xs font-extrabold flex items-center justify-center gap-1 transition-all cursor-pointer hover:bg-rose-500/10 border-rose-500/40 text-rose-600 dark:text-rose-400 active:scale-95"
                        >
                          <RotateCw size={13} />
                          <span>{language === "en" ? "Review Again" : "ยังไม่แม่น (ทวนซ้ำ)"}</span>
                        </button>

                        <button
                          onClick={() => handleFlashAssessment(true)}
                          className="flex-1 py-2 px-2.5 rounded-xl text-xs font-extrabold flex items-center justify-center gap-1 transition-all cursor-pointer shadow-md bg-emerald-600 hover:bg-emerald-700 text-white active:scale-95"
                        >
                          <Check size={14} />
                          <span>{language === "en" ? "I Know This" : "จำได้แล้ว (แม่นยำ)"}</span>
                        </button>
                      </div>
                    </div>
                  ) : null}
                </div>
              )}
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 2: DAILY HIGH-YIELD CHALLENGE                                        */}
          {/* ========================================================================= */}
          {activeTab === "daily_challenge" && (
            <div className="space-y-3 sm:space-y-4 animate-fadeIn w-full min-w-0">
              {/* Question Header */}
              <div 
                className="p-3 sm:p-3.5 rounded-xl border space-y-1.5 min-w-0"
                style={{ background: darkMode ? "rgba(255,255,255,0.03)" : "#F8FAFC", borderColor: borderCard }}
              >
                <div className="flex items-center justify-between text-[9.5px] sm:text-[10px] font-extrabold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  <span className="truncate">{currentDailyQ.tag[language]}</span>
                  <span className="flex-shrink-0">{dailyQIdx + 1} / {HIGH_YIELD_QUESTIONS.length}</span>
                </div>
                <p className="text-xs sm:text-sm font-bold leading-relaxed text-black dark:text-slate-100">
                  {currentDailyQ.scenario[language]}
                </p>
              </div>

              {/* Multiple Choice Options */}
              <div className="space-y-2 w-full min-w-0">
                {currentDailyQ.options.map((opt) => {
                  const isSelected = dailyAnswer === opt.id;
                  const isAnswered = dailyAnswer !== null;
                  const isCorrect = opt.isCorrect;

                  let optBg = darkMode ? "rgba(255,255,255,0.03)" : "#FFFFFF";
                  let optBorder = borderCard;
                  let optColor = textPrimary;

                  if (isAnswered) {
                    if (isCorrect) {
                      optBg = "rgba(46, 204, 113, 0.15)";
                      optBorder = "#2ECC71";
                      optColor = darkMode ? "#2ECC71" : "#15803D";
                    } else if (isSelected && !isCorrect) {
                      optBg = "rgba(239, 68, 68, 0.15)";
                      optBorder = "#EF4444";
                      optColor = darkMode ? "#F87171" : "#B91C1C";
                    }
                  }

                  return (
                    <button
                      key={opt.id}
                      onClick={() => setDailyAnswer(opt.id)}
                      disabled={isAnswered}
                      className="w-full p-2.5 sm:p-3 rounded-xl border text-left text-xs font-semibold transition-all cursor-pointer flex items-center justify-between gap-2 active:scale-98 min-w-0"
                      style={{ background: optBg, borderColor: optBorder, color: optColor }}
                    >
                      <span className="leading-snug">{opt.text[language]}</span>
                      {isAnswered && (
                        opt.isCorrect 
                          ? <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                          : isSelected 
                            ? <XCircle size={16} className="text-rose-500 flex-shrink-0" />
                            : null
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Rationale & Next Case */}
              {dailyAnswer !== null && (
                <div 
                  className="p-3 sm:p-3.5 rounded-xl border space-y-2 animate-fadeIn min-w-0"
                  style={{
                    background: darkMode ? "rgba(0,206,209,0.06)" : "rgba(15,118,110,0.05)",
                    borderColor: darkMode ? "rgba(0,206,209,0.3)" : "rgba(15,118,110,0.3)",
                  }}
                >
                  <div className="font-extrabold text-teal-800 dark:text-[#00CED1] text-xs flex items-center gap-1.5">
                    <Sparkles size={13} className="flex-shrink-0" />
                    <span>{language === "en" ? "High-Yield Clinical Rationale:" : "คำอธิบายทางคลินิก (High-Yield Point):"}</span>
                  </div>
                  <p className="text-xs font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                    {currentDailyQ.explanation[language]}
                  </p>

                  {currentDailyQ.pearls && (
                    <div className="p-2 sm:p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-[10.5px] sm:text-[11px] font-bold text-amber-700 dark:text-amber-300">
                      💡 {currentDailyQ.pearls[language]}
                    </div>
                  )}

                  <div className="pt-1.5 flex items-center justify-between gap-2 flex-wrap">
                    <button
                      onClick={() => {
                        onSelectBone(currentDailyQ.boneId, currentDailyQ.regionId);
                        onClose();
                      }}
                      className="text-[10.5px] sm:text-[11px] font-extrabold text-teal-700 dark:text-[#00CED1] hover:underline flex items-center gap-1 cursor-pointer truncate"
                    >
                      <span className="truncate">{language === "en" ? "Explore Related Concept" : "เปิดดูหัวข้อที่เกี่ยวข้อง 🚀"}</span>
                      <ChevronRight size={12} className="flex-shrink-0" />
                    </button>

                    <button
                      onClick={() => {
                        setDailyAnswer(null);
                        setDailyQIdx(prev => prev + 1);
                      }}
                      className="px-3 py-1.5 rounded-xl font-extrabold text-xs flex items-center gap-1 shadow-sm transition-all cursor-pointer active:scale-95 flex-shrink-0"
                      style={{
                        background: primaryColor,
                        color: darkMode ? "#0F172A" : "#FFFFFF",
                      }}
                    >
                      <span>{language === "en" ? "Next Case" : "ข้อถัดไป"}</span>
                      <ChevronRight size={13} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ── Image Fullscreen Zoom Modal ── */}
      {zoomImage && (
        <div 
          onClick={() => setZoomImage(null)}
          className="fixed inset-0 z-60 flex items-center justify-center p-3 bg-black/85 backdrop-blur-md animate-fadeIn"
        >
          <div className="max-w-3xl max-h-[85vh] flex flex-col items-center gap-3 w-full">
            <img 
              src={zoomImage.url} 
              alt={zoomImage.title} 
              className="max-h-[75vh] max-w-full object-contain rounded-2xl border border-slate-700 shadow-2xl"
            />
            <div className="flex items-center gap-3 text-white font-extrabold text-xs sm:text-sm">
              <span className="truncate">{zoomImage.title}</span>
              <button 
                onClick={() => setZoomImage(null)}
                className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-600 text-xs hover:bg-slate-700 cursor-pointer flex-shrink-0"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
