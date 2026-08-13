import React, { useState, useEffect } from "react";
import type { BoneData, FractureClassificationType } from "../../types";
import { FractureVisualizer } from "../DetailPanel/FractureVisualizer";
import { Trophy, HelpCircle, AlertCircle, Sparkles, RefreshCw, XCircle } from "lucide-react";
import confetti from "canvas-confetti";

interface QuizModeProps {
  bones: BoneData[];
  language: "en" | "th";
  t: (key: string) => string;
  onExitQuiz: () => void;
  // Let the quiz control the active target highlight in the skeleton
  setQuizTargetBoneId: (id: string | null) => void;
  selectedBoneId: string | null;
  setSelectedBoneId: (id: string | null) => void;
}

type QuizType = "anatomy" | "subtype";

interface Question {
  type: QuizType;
  boneId: string;
  systemName: string;
  systemFullName: string;
  targetType?: FractureClassificationType;
  questionText: { en: string; th: string };
  options?: string[]; // Multiple choice options for subtype quiz
  correctOption?: string;
}

export const QuizMode: React.FC<QuizModeProps> = ({
  bones,
  language,
  t,
  onExitQuiz,
  setQuizTargetBoneId,
  selectedBoneId,
  setSelectedBoneId,
}) => {
  const [activeQuizType, setActiveQuizType] = useState<QuizType | null>(null);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [selectedSubtypeOption, setSelectedSubtypeOption] = useState<string | null>(null);

  // Generate a set of 5 random questions
  const generateQuiz = (type: QuizType) => {
    const newQuestions: Question[] = [];
    const eligibleBones = bones.filter(b => b.regions.some(r => r.classifications.length > 0));

    for (let i = 0; i < 5; i++) {
      // Pick a random bone
      const randomBone = eligibleBones[Math.floor(Math.random() * eligibleBones.length)];
      // Pick a random region from it that has classifications
      const eligibleRegions = randomBone.regions.filter(r => r.classifications.length > 0);
      const randomRegion = eligibleRegions[Math.floor(Math.random() * eligibleRegions.length)];
      // Pick a random classification system from that region
      const randomSys = randomRegion.classifications[Math.floor(Math.random() * randomRegion.classifications.length)];

      if (type === "anatomy") {
        newQuestions.push({
          type: "anatomy",
          boneId: randomBone.id,
          systemName: randomSys.system,
          systemFullName: randomSys.fullName[language],
          questionText: {
            en: `Identify the bone or joint structure where the "${randomSys.fullName.en}" is used clinically.`,
            th: `กรุณาคลิกเลือกชิ้นกระดูกหรือข้อต่อที่ใช้ระบบการจำแนก "${randomSys.fullName.th}" ในทางคลินิก`
          }
        });
      } else {
        const randomType = randomSys.types[Math.floor(Math.random() * randomSys.types.length)];

        // Generate multiple choice options from the system subtypes
        const correctOpt = randomType.type;
        const allTypes = randomSys.types.map(t => t.type);
        
        // Pick up to 4 options, ensuring correct option is included
        const optionsSet = new Set<string>([correctOpt]);
        while (optionsSet.size < Math.min(4, allTypes.length)) {
          const randType = allTypes[Math.floor(Math.random() * allTypes.length)];
          optionsSet.add(randType);
        }
        const optionsArray = Array.from(optionsSet).sort();

        newQuestions.push({
          type: "subtype",
          boneId: randomBone.id,
          systemName: randomSys.system,
          systemFullName: randomSys.fullName[language],
          targetType: randomType,
          correctOption: correctOpt,
          options: optionsArray,
          questionText: {
            en: `Analyze the illustration and select the correct "${randomSys.system}" subtype.`,
            th: `โปรดวิเคราะห์ลักษณะภาพวาดจำลองด้านล่างนี้ และระบุประเภทย่อยของ "${randomSys.system}" ให้ถูกต้อง`
          }
        });
      }
    }

    setQuestions(newQuestions);
    setCurrentQuestionIdx(0);
    setScore(0);
    setIsAnswered(false);
    setIsCorrect(false);
    setSelectedSubtypeOption(null);
    setSelectedBoneId(null);
    setActiveQuizType(type);

    if (type === "anatomy") {
      setQuizTargetBoneId(newQuestions[0].boneId);
    } else {
      setQuizTargetBoneId(null);
    }
  };

  const handleSkeletonClickAnswer = (clickedBoneId: string) => {
    if (activeQuizType !== "anatomy" || isAnswered) return;

    const currentQuestion = questions[currentQuestionIdx];
    const correct = clickedBoneId === currentQuestion.boneId;

    setIsCorrect(correct);
    setIsAnswered(true);

    if (correct) {
      setScore(prev => prev + 1);
      setStreak(prev => {
        const next = prev + 1;
        if (next > bestStreak) setBestStreak(next);
        return next;
      });
      triggerCelebration();
    } else {
      setStreak(0);
    }
  };

  // Listen to skeleton selection for anatomy quiz
  useEffect(() => {
    if (activeQuizType === "anatomy" && selectedBoneId && !isAnswered) {
      handleSkeletonClickAnswer(selectedBoneId);
    }
  }, [selectedBoneId, activeQuizType, isAnswered]);

  const handleSubtypeAnswer = (selectedOpt: string) => {
    if (isAnswered) return;

    setSelectedSubtypeOption(selectedOpt);
    const currentQuestion = questions[currentQuestionIdx];
    const correct = selectedOpt === currentQuestion.correctOption;

    setIsCorrect(correct);
    setIsAnswered(true);

    if (correct) {
      setScore(prev => prev + 1);
      setStreak(prev => {
        const next = prev + 1;
        if (next > bestStreak) setBestStreak(next);
        return next;
      });
      triggerCelebration();
    } else {
      setStreak(0);
    }
  };

  const triggerCelebration = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.75 },
      colors: ["#38bdf8", "#f97316", "#10b981"]
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIdx < questions.length - 1) {
      const nextIdx = currentQuestionIdx + 1;
      setCurrentQuestionIdx(nextIdx);
      setIsAnswered(false);
      setIsCorrect(false);
      setSelectedSubtypeOption(null);
      setSelectedBoneId(null);
      
      if (activeQuizType === "anatomy") {
        setQuizTargetBoneId(questions[nextIdx].boneId);
      } else {
        setQuizTargetBoneId(null);
      }
    } else {
      // End of quiz celebration
      if (score >= 4) {
        confetti({
          particleCount: 150,
          spread: 100,
          origin: { y: 0.6 }
        });
      }
      // Reset quiz state to summary
      setCurrentQuestionIdx(questions.length);
    }
  };

  const handleResetQuiz = () => {
    if (activeQuizType) {
      generateQuiz(activeQuizType);
    }
  };

  const handleExit = () => {
    setQuizTargetBoneId(null);
    setSelectedBoneId(null);
    onExitQuiz();
  };

  // Helper to retrieve bone details for review
  const getQuestionBone = (boneId: string): BoneData | undefined => {
    return bones.find(b => b.id === boneId);
  };

  const currentQuestion = questions[currentQuestionIdx];

  return (
    <div className="w-full h-full flex flex-col glass-card bg-clinical-card/55 overflow-hidden border border-clinical-border/40 animate-slide-up">
      {/* Quiz Top bar stats */}
      <div className="p-5 border-b border-clinical-border bg-clinical-cardLight/25 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-clinical-accent" />
          <h3 className="font-bold text-slate-100">{t("quizHeader")}</h3>
        </div>
        
        {activeQuizType && (
          <div className="flex gap-4 text-xs font-semibold">
            <div className="flex items-center gap-1.5 text-slate-300">
              <span>{t("quizScore")}:</span>
              <span className="text-clinical-primary bg-clinical-primary/10 border border-clinical-primary/20 px-2 py-0.5 rounded">
                {score} / {questions.length === 0 ? 5 : currentQuestionIdx === questions.length ? questions.length : currentQuestionIdx + 1}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <span>{t("quizStreak")}:</span>
              <span className="text-clinical-accent bg-clinical-accent/10 border border-clinical-accent/20 px-2 py-0.5 rounded flex items-center gap-0.5">
                <Sparkles className="w-3 h-3 animate-bounce" /> {streak}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Main Screen Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 flex flex-col justify-center">
        
        {/* ================= 1. START QUIZ SELECTION ================= */}
        {!activeQuizType && (
          <div className="text-center py-10 max-w-md mx-auto space-y-6 animate-fade-in">
            <HelpCircle className="w-16 h-16 text-clinical-muted/40 mx-auto animate-pulse" />
            <div className="space-y-2">
              <h4 className="text-lg font-bold text-slate-200">{t("quizStartPrompt")}</h4>
              <p className="text-xs text-clinical-muted leading-relaxed">
                Test your knowledge of orthopedic bone fractures, classifications, and clinical parameters. Real-time scores and streaks tracked.
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <button
                onClick={() => generateQuiz("anatomy")}
                className="clinical-btn clinical-btn-primary py-3 justify-center text-sm font-bold uppercase tracking-wider"
              >
                {t("quizIdentifyBone")}
              </button>
              <button
                onClick={() => generateQuiz("subtype")}
                className="clinical-btn clinical-btn-accent py-3 justify-center text-sm font-bold uppercase tracking-wider"
              >
                {t("quizIdentifyClass")}
              </button>
            </div>
          </div>
        )}

        {/* ================= 2. ACTIVE QUESTION SCREEN ================= */}
        {activeQuizType && currentQuestion && currentQuestionIdx < questions.length && (
          <div className="space-y-6 animate-fade-in">
            
            {/* Question description */}
            <div className="space-y-3">
              <span className="text-[10px] font-bold tracking-widest text-clinical-primary uppercase block">
                {t("quizQuestionNum")} {currentQuestionIdx + 1} of {questions.length}
              </span>
              <h4 className="text-base font-bold text-slate-200 leading-relaxed bg-clinical-cardLight/20 p-4 rounded-xl border border-clinical-border/40 shadow-inner">
                {currentQuestion.questionText[language]}
              </h4>
            </div>

            {/* Render illustration for subtype quiz */}
            {activeQuizType === "subtype" && currentQuestion.targetType && (
              <div className="max-w-xs mx-auto">
                <FractureVisualizer
                  illustrationId={currentQuestion.targetType.illustrationId}
                  showAsXray={false}
                />
                
                {/* Visual prompt detail */}
                <div className="mt-3 p-3 bg-slate-950/60 rounded-xl border border-slate-900 text-xs text-clinical-muted flex gap-2">
                  <AlertCircle className="w-4 h-4 text-clinical-primary flex-shrink-0 mt-0.5" />
                  <p className="leading-relaxed text-left">
                    <strong className="text-slate-300 block mb-0.5">{t("xrayTitle")}:</strong>
                    {currentQuestion.targetType.xrayDescription[language]}
                  </p>
                </div>
              </div>
            )}

            {/* Options block */}
            <div className="space-y-4">
              
              {/* Option Selection for anatomy quiz (Instruct user to click skeleton) */}
              {activeQuizType === "anatomy" && (
                <div className="p-6 text-center border-2 border-dashed border-clinical-border rounded-2xl bg-clinical-cardLight/10 space-y-2">
                  <HelpCircle className="w-10 h-10 text-clinical-primary/60 mx-auto animate-bounce" />
                  <h5 className="text-sm font-bold text-slate-300 uppercase tracking-wide">
                    {language === "en" ? "System:" : "ระบบจำแนก:"} {currentQuestion.systemFullName}
                  </h5>
                  <p className="text-xs text-clinical-muted">
                    {language === "en" 
                      ? "🔍 Hover and click the correct anatomical structure on the 2D skeleton model." 
                      : "🔍 เลื่อนเมาส์และคลิกเลือกโครงสร้างกระดูกที่ถูกต้องบนแบบจำลอง 2 มิติ"}
                  </p>
                </div>
              )}

              {/* Multiple Choice buttons for subtype quiz */}
              {activeQuizType === "subtype" && currentQuestion.options && (
                <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
                  {currentQuestion.options.map((opt) => {
                    const isSelected = selectedSubtypeOption === opt;
                    const isCorrectOption = opt === currentQuestion.correctOption;

                    let btnStyles = "bg-clinical-cardLight border-clinical-border text-slate-300 hover:bg-clinical-card hover:border-clinical-primary/40";
                    if (isAnswered) {
                      if (isCorrectOption) {
                        btnStyles = "bg-clinical-success/20 border-clinical-success text-clinical-success font-bold shadow-md shadow-clinical-success/5";
                      } else if (isSelected) {
                        btnStyles = "bg-clinical-warning/20 border-clinical-warning text-clinical-warning line-through";
                      } else {
                        btnStyles = "opacity-40 border-clinical-border text-slate-500 cursor-not-allowed";
                      }
                    }

                    return (
                      <button
                        key={opt}
                        onClick={() => handleSubtypeAnswer(opt)}
                        disabled={isAnswered}
                        className={`py-3 px-4 rounded-xl border text-center text-sm font-semibold transition-all duration-200 ${btnStyles}`}
                      >
                        {t("typeLabel")} {opt}
                      </button>
                    );
                  })}
                </div>
              )}

            </div>

            {/* Answer feedback prompt */}
            {isAnswered && (
              <div className="space-y-4 animate-fade-in border-t border-clinical-border pt-4">
                
                {/* Result Message banner */}
                <div className={`p-4 rounded-xl border flex items-start gap-3 text-left ${
                  isCorrect 
                    ? "bg-clinical-success/15 border-clinical-success/40 text-slate-200" 
                    : "bg-clinical-warning/15 border-clinical-warning/40 text-slate-200"
                }`}>
                  {isCorrect ? (
                    <Sparkles className="w-5 h-5 text-clinical-success flex-shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-5 h-5 text-clinical-warning flex-shrink-0 mt-0.5" />
                  )}
                  <div>
                    <h5 className={`font-bold text-sm ${isCorrect ? "text-clinical-success" : "text-clinical-warning"}`}>
                      {isCorrect ? t("quizCorrect") : t("quizWrong")}
                    </h5>
                    
                    {/* Clinical Explanation & Review */}
                    <div className="text-xs text-slate-300 mt-2 space-y-1.5">
                      {activeQuizType === "anatomy" ? (
                        <p>
                          {language === "en" 
                            ? `The ${currentQuestion.systemName} Classification applies to the ${getQuestionBone(currentQuestion.boneId)?.name.en}.`
                            : `การจำแนกประเภท ${currentQuestion.systemName} ใช้จำแนกกระดูก ${getQuestionBone(currentQuestion.boneId)?.name.th}`}
                        </p>
                      ) : currentQuestion.targetType && (
                        <div className="space-y-1">
                          <p>
                            <strong>Type {currentQuestion.targetType.type}:</strong> {currentQuestion.targetType.name[language]}
                          </p>
                          <p className="text-clinical-muted leading-relaxed">
                            {currentQuestion.targetType.description[language]}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Continue button */}
                <button
                  onClick={handleNextQuestion}
                  className="clinical-btn clinical-btn-primary w-full justify-center py-2.5 text-sm uppercase tracking-wider font-bold"
                >
                  {t("quizNextBtn")}
                </button>

              </div>
            )}

          </div>
        )}

        {/* ================= 3. QUIZ SUMMARY RESULT ================= */}
        {activeQuizType && currentQuestionIdx === questions.length && (
          <div className="text-center py-8 max-w-sm mx-auto space-y-6 animate-fade-in">
            <Trophy className="w-16 h-16 text-clinical-accent mx-auto animate-bounce" />
            
            <div className="space-y-2">
              <h4 className="text-xl font-black text-slate-100">
                {language === "en" ? "Quiz Completed!" : "ทำแบบทดสอบเสร็จสิ้น!"}
              </h4>
              <p className="text-xs text-clinical-muted">
                {language === "en" 
                  ? "Great job reviewing orthopedic classifications. Practice makes perfect." 
                  : "ความพยายามในการทบทวนระดับการแตกหัก จะช่วยพัฒนาการวินิจฉัยที่แม่นยำ"}
              </p>
            </div>

            {/* Score Stats Ring */}
            <div className="p-6 bg-clinical-cardLight/30 border border-clinical-border rounded-2xl flex flex-col items-center">
              <span className="text-[10px] uppercase font-bold tracking-widest text-clinical-muted">
                {language === "en" ? "Final Score" : "คะแนนรวมสุดยอด"}
              </span>
              <span className="text-4xl font-extrabold text-clinical-primary mt-1">
                {score} / {questions.length}
              </span>
              <span className="text-xs text-slate-400 mt-2 font-medium">
                {language === "en" ? "Best Streak this session:" : "ตอบถูกสูงสุดต่อเนื่องรอบนี้:"} {bestStreak}
              </span>
            </div>

            <div className="flex gap-2.5 pt-2">
              <button
                onClick={handleResetQuiz}
                className="clinical-btn clinical-btn-primary flex-1 py-2.5 text-xs font-bold uppercase tracking-wider"
              >
                <RefreshCw className="w-4 h-4" />
                {language === "en" ? "Retry Quiz" : "เริ่มใหม่อีกครั้ง"}
              </button>
              <button
                onClick={handleExit}
                className="clinical-btn clinical-btn-secondary flex-1 py-2.5 text-xs font-bold uppercase tracking-wider"
              >
                {t("quizExitBtn")}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
