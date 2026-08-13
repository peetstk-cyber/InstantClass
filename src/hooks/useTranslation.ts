import { useState, useEffect } from "react";

export type Language = "en" | "th";

export const translations = {
  en: {
    title: "OrthoBros Fracture Academy",
    subtitle: "Interactive Fracture Classification for Orthopedics",
    studyMode: "Study Mode",
    quizMode: "Quiz Mode",
    adult: "Adult",
    pediatric: "Pediatric",
    searchPlaceholder: "Search bone, system (e.g. Garden, Schatzker)...",
    noResults: "No matching bones or classifications found.",
    selectBonePrompt: "Select a highlighted bone on the skeleton to review classifications",
    overview: "Overview",
    classifications: "Classifications",
    treatment: "Treatment",
    conservative: "Conservative Management",
    operative: "Operative Management",
    pearls: "Clinical Pearls",
    moi: "Mechanism of Injury (MOI)",
    xrayTitle: "Simulated Radiographic Findings",
    typeLabel: "Type",
    quizHeader: "Orthopedic Classification Challenge",
    quizStartPrompt: "Test your diagnostic skills! Select a quiz mode below.",
    quizStartBtn: "Start New Quiz",
    quizIdentifyBone: "Bone Identification Quiz",
    quizIdentifyClass: "Classification Subtype Quiz",
    quizTargetPrompt: "Where does the following classification apply?",
    quizSubtypePrompt: "Based on the radiographic description/diagram below, which subtype is this?",
    quizScore: "Score",
    quizStreak: "Current Streak",
    quizHighestStreak: "Best Streak",
    quizQuestionNum: "Question",
    quizCorrect: "Correct Answer! 🌟",
    quizWrong: "Incorrect! Let's check the clinical explanation.",
    quizNextBtn: "Next Question",
    quizExitBtn: "Exit Quiz",
    treatmentSection: "Treatment Protocol",
    anatomyLabel: "Anatomy",
    aboutBone: "Clinical Anatomy & Pathology",
    systemSelect: "Classification System:",
  },
  th: {
    title: "OrthoBros สถาบันกระดูกหัก",
    subtitle: "ระบบเรียนรู้การจำแนกประเภทกระดูกหักแบบมีปฏิสัมพันธ์",
    studyMode: "โหมดการศึกษา",
    quizMode: "โหมดทดสอบความรู้",
    adult: "ผู้ใหญ่",
    pediatric: "เด็ก",
    searchPlaceholder: "ค้นหากระดูก, ระบบการจำแนก (เช่น Garden, Schatzker)...",
    noResults: "ไม่พบข้อมูลกระดูกหรือระบบจำแนกดังกล่าว",
    selectBonePrompt: "คลิกเลือกชิ้นกระดูกที่ต้องการบนแบบร่างเพื่อดูการจำแนกประเภท",
    overview: "ข้อมูลทั่วไป",
    classifications: "การจำแนกประเภท",
    treatment: "การรักษา",
    conservative: "การรักษาแบบอนุรักษนิยม (ไม่ผ่าตัด)",
    operative: "การรักษาโดยการผ่าตัด",
    pearls: "ข้อควรจำทางคลินิก (Clinical Pearls)",
    moi: "กลไกการบาดเจ็บ (Mechanism of Injury)",
    xrayTitle: "ภาพจำลองลักษณะทางรังสี (X-ray)",
    typeLabel: "ประเภท",
    quizHeader: "แบบทดสอบวิเคราะห์กระดูกหัก",
    quizStartPrompt: "ทดสอบความแม่นยำทางวิชาการ! เลือกโหมดแบบทดสอบด้านล่าง",
    quizStartBtn: "เริ่มแบบทดสอบใหม่",
    quizIdentifyBone: "แบบทดสอบ: ระบุตำแหน่งกระดูก",
    quizIdentifyClass: "แบบทดสอบ: ระบุประเภทการหัก",
    quizTargetPrompt: "ระบบการจำแนกประเภทดังต่อไปนี้ ใช้กับกระดูกชิ้นใด?",
    quizSubtypePrompt: "จากคำอธิบายลักษณะทางรังสีวิทยาหรือภาพร่างต่อไปนี้ ตรงกับการหักชนิดย่อยใด?",
    quizScore: "คะแนน",
    quizStreak: "ตอบถูกต่อเนื่อง (Streak)",
    quizHighestStreak: "สถิติต่อเนื่องสูงสุด",
    quizQuestionNum: "ข้อที่",
    quizCorrect: "ถูกต้อง! ยอดเยี่ยมมาก 🌟",
    quizWrong: "ยังไม่ถูกต้อง! ลองดูเฉลยและเหตุผลทางคลินิก",
    quizNextBtn: "คำถามถัดไป",
    quizExitBtn: "ออกจากโหมดทดสอบ",
    treatmentSection: "แนวทางการรักษา",
    anatomyLabel: "กายวิภาค",
    aboutBone: "กายวิภาคคลินิกและพยาธิสภาพ",
    systemSelect: "เลือกการจำแนกประเภท:",
  }
};

export const useTranslation = () => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("orthobros_lang");
    return (saved === "en" || saved === "th" ? saved : "en") as Language;
  });

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "th" : "en"));
  };

  useEffect(() => {
    localStorage.setItem("orthobros_lang", language);
  }, [language]);

  const t = (key: string) => {
    const dict = translations[language] as Record<string, string>;
    const dictEn = translations["en"] as Record<string, string>;
    return dict[key] || dictEn[key] || key;
  };

  return { t, language, setLanguage, toggleLanguage };
};
