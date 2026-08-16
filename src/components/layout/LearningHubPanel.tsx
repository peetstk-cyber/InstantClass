import { useState } from "react";
import type { Language } from "../../App";
import type { BoneData } from "../../types";
import { 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  Bookmark,
  User,
  LogIn,
  Award
} from "lucide-react";

import type { UserProfile } from "../../types/auth";
import { updateBookmarksInFirestore } from "../../lib/firebase";

interface LearningHubPanelProps {
  darkMode: boolean;
  language: Language;
  bones: BoneData[];
  currentUser?: UserProfile | null;
  onUpdateUser?: (updated: UserProfile) => void;
  onOpenAuth?: () => void;
  onSelectBone: (bone: BoneData, regionId?: string) => void;
  onSwitchToBoneList?: () => void;
}

const OLD_MOCK_NAMES = ["Garden & Pauwels", "Schatzker Classification", "Neer 4-Part Classification", "Hawkins Classification"];

export function LearningHubPanel({
  darkMode,
  language,
  bones,
  currentUser,
  onUpdateUser,
  onOpenAuth,
  onSelectBone,
}: LearningHubPanelProps) {
  const [quizSelected, setQuizSelected] = useState<number | null>(null);

  const bg = darkMode ? "#161B27" : "#FFFFFF";
  const text = darkMode ? "#F1F5F9" : "#1E293B";
  const cardBg = darkMode ? "rgba(255,255,255,0.03)" : "#F8FAFC";
  const cardBorder = darkMode ? "rgba(255,255,255,0.08)" : "#E2E8F0";

  const boneMap = Object.fromEntries(bones.map((b) => [b.id, b]));

  const handleLaunchTopic = (boneId: string, regionId: string) => {
    const targetBone = boneMap[boneId];
    if (targetBone) {
      onSelectBone(targetBone, regionId);
    }
  };

  const handleClearAllBookmarks = () => {
    try {
      localStorage.removeItem("ortho_bookmarks");
    } catch (e) {
      console.error(e);
    }
    if (currentUser) {
      updateBookmarksInFirestore(currentUser.id, []).catch(console.error);
      if (onUpdateUser) {
        onUpdateUser({ ...currentUser, bookmarks: [] });
      }
    }
  };

  const displayName = currentUser?.name || (language === "en" ? "Guest Resident" : "แพทย์ประจำบ้าน (Guest)");
  const displayUsername = currentUser?.username ? `@${currentUser.username}` : "@guest";
  
  // Resolve user bookmarked systems dynamically (filtering out old mock defaults)
  const rawBookmarks: string[] = currentUser?.bookmarks ?? (() => {
    try {
      const saved = localStorage.getItem("ortho_bookmarks");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  })();

  const activeBookmarkNames = rawBookmarks.filter(name => !OLD_MOCK_NAMES.includes(name));

  const resolvedBookmarks = activeBookmarkNames.map(bName => {
    for (const b of bones) {
      for (const reg of b.regions) {
        for (const sys of reg.classifications) {
          if (sys.system === bName || sys.fullName.en === bName || sys.fullName.th === bName) {
            return {
              bone: b,
              regionId: reg.id,
              regionTitle: reg.name[language] || reg.name.en,
              systemName: sys.fullName[language] || sys.system,
              boneName: b.name[language],
              typesCount: sys.types.length
            };
          }
        }
      }
    }
    return {
      bone: bones.find(b => b.id === "femur") || bones[0],
      regionId: "proximal",
      regionTitle: language === "en" ? "Subregion Concept" : "ขอบเขตส่วนกระดูก",
      systemName: bName,
      boneName: language === "en" ? "Orthopedic System" : "ระบบจัดประเภทกระดูก",
      typesCount: 4
    };
  });

  const streak = currentUser?.streakDays ?? 3;
  const quizzes = currentUser ? `${currentUser.quizzesCorrect}/${currentUser.quizzesAnswered}` : "14/20";
  const bookmarksCount = resolvedBookmarks.length;

  return (
    <div
      style={{ background: bg, color: text }}
      className="flex flex-col h-full w-full overflow-y-auto p-4 space-y-4 text-xs"
    >
      {/* ── User Profile & Member Hub ── */}
      <div
        style={{
          background: darkMode
            ? "linear-gradient(135deg, rgba(0, 206, 209, 0.12) 0%, rgba(30, 41, 59, 0.9) 100%)"
            : "linear-gradient(135deg, rgba(0, 206, 209, 0.08) 0%, #FFFFFF 100%)",
          borderColor: cardBorder,
          borderRadius: 16,
          borderWidth: 1,
          borderStyle: "solid",
          padding: 16,
        }}
        className="flex flex-col gap-3 shadow-sm relative overflow-hidden flex-shrink-0"
      >
        {/* Glow accent */}
        <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-[#00CED1]/10 blur-2xl pointer-events-none" />

        {/* Top User Info Row */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-3 min-w-0">
            <div 
              style={{ width: 40, height: 40, minWidth: 40, borderRadius: "50%", background: "rgba(0,206,209,0.15)", border: "2px solid rgba(0,206,209,0.4)" }}
              className="flex items-center justify-center text-[#00CED1] relative flex-shrink-0"
            >
              <User size={18} />
              <span 
                style={{ width: 9, height: 9, borderRadius: "50%", background: "#10B981", border: "2px solid #161B27" }}
                className="absolute bottom-0 right-0"
              />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="font-extrabold text-xs text-slate-800 dark:text-slate-100 truncate">
                  {displayName}
                </span>
              </div>
              <div className="text-[10.5px] text-[#00CED1] font-bold mt-0.5 truncate">
                {displayUsername}
              </div>
            </div>
          </div>

          <button
            onClick={onOpenAuth}
            style={{ background: "#00CED1", color: "#0F172A" }}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl font-extrabold text-[11px] hover:opacity-90 transition-all shadow-sm cursor-pointer flex-shrink-0"
          >
            {currentUser ? (
              <>
                <User size={13} />
                <span>{language === "en" ? "Profile" : "โปรไฟล์"}</span>
              </>
            ) : (
              <>
                <LogIn size={13} />
                <span>{language === "en" ? "Sign In" : "เข้าสู่ระบบ"}</span>
              </>
            )}
          </button>
        </div>

        {/* Quick Learning Stats Row */}
        <div 
          style={{ 
            background: darkMode ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.8)", 
            borderColor: darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)",
            borderRadius: 12,
            borderWidth: 1,
            borderStyle: "solid",
            padding: "8px 10px"
          }}
          className="grid grid-cols-3 gap-1 text-center"
        >
          <div className="flex flex-col items-center justify-center">
            <span className="text-[10px] text-slate-400 font-medium">{language === "en" ? "Daily Streak" : "เรียนต่อเนื่อง"}</span>
            <span className="font-extrabold text-[11px] text-amber-400 flex items-center gap-0.5 mt-0.5">
              🔥 {streak} Days
            </span>
          </div>
          <div className="flex flex-col items-center justify-center border-x border-slate-700/30 px-1">
            <span className="text-[10px] text-slate-400 font-medium">{language === "en" ? "Quizzes" : "ตอบคำถาม"}</span>
            <span className="font-extrabold text-[11px] text-[#00CED1] flex items-center gap-0.5 mt-0.5">
              <Award size={11} /> {quizzes}
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-[10px] text-slate-400 font-medium">{language === "en" ? "Bookmarks" : "บุ๊กมาร์ก"}</span>
            <span className="font-extrabold text-[11px] text-purple-400 flex items-center gap-0.5 mt-0.5">
              <Bookmark size={11} /> {bookmarksCount} Saved
            </span>
          </div>
        </div>
      </div>

      {/* ── Daily Challenge / Quick Quiz ── */}
      <section className="space-y-2">
        <div className="flex items-center justify-between text-[11px] font-extrabold uppercase tracking-wider text-[#00CED1]">
          <span className="flex items-center gap-1.5">
            <HelpCircle size={13} />
            {language === "en" ? "Daily High-Yield Challenge" : "มินิควิซท้าทายประจำวัน"}
          </span>
        </div>

        <div 
          className="p-3.5 rounded-xl border space-y-2.5"
          style={{ background: cardBg, borderColor: cardBorder }}
        >
          <div className="font-bold text-[11.5px] leading-relaxed text-slate-800 dark:text-slate-200">
            {language === "en" 
              ? "Q: Which nerve/vascular structure is most vulnerable in Schatzker Type IV tibial plateau fractures?"
              : "Q: ผู้ป่วยที่หักแบบ Schatzker Type IV (Medial Plateau) มีความเสี่ยงบาดเจ็บต่อหลอดเลือด/เส้นประสาทใดรุนแรงที่สุด?"}
          </div>

          <div className="space-y-1.5">
            {[
              { id: 0, text: { en: "A) Popliteal Artery & Tibial Nerve", th: "ก) Popliteal Artery & Tibial Nerve" }, isCorrect: true },
              { id: 1, text: { en: "B) Isolated Lateral Meniscus Tear", th: "ข) Superficial Peroneal Nerve" }, isCorrect: false },
              { id: 2, text: { en: "C) Femoral Artery Disruption", th: "ค) Saphenous Nerve" }, isCorrect: false },
            ].map((option) => (
              <button
                key={option.id}
                onClick={() => setQuizSelected(option.id)}
                className={`w-full p-2.5 rounded-lg text-left text-xs font-semibold transition-all flex items-center justify-between cursor-pointer border ${
                  quizSelected === option.id
                    ? option.isCorrect
                      ? "bg-emerald-500/15 border-emerald-500 text-emerald-400"
                      : "bg-rose-500/15 border-rose-500 text-rose-400"
                    : "bg-slate-500/5 hover:bg-slate-500/10 border-slate-500/20 text-slate-700 dark:text-slate-300"
                }`}
              >
                <span>{option.text[language]}</span>
                {quizSelected === option.id && (
                  option.isCorrect 
                    ? <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0" />
                    : <XCircle size={14} className="text-rose-400 flex-shrink-0" />
                )}
              </button>
            ))}
          </div>

          {quizSelected !== null && (
            <div className="pt-1.5 border-t border-slate-500/20 text-[11px] space-y-2">
              {quizSelected === 0 ? (
                <div className="text-emerald-400 font-bold flex items-center gap-1">
                  ✨ {language === "en" ? "Correct! High energy medial fracture/dislocation variant." : "ถูกต้อง! Schatzker IV เป็นรอยหักพลังงานสูงเสี่ยงหลอดเลือดPoplitealขาด"}
                </div>
              ) : (
                <div className="text-amber-400 font-bold">
                  💡 {language === "en" ? "Tip: Schatzker IV often involves knee dislocation mechanism." : "คำตอบที่ถูกต้องคือ ก) Popliteal Artery จากแรงดึงกระชากข้อเข่าหลุด"}
                </div>
              )}
              <button
                onClick={() => handleLaunchTopic("tibia", "proximal")}
                className="w-full py-1.5 rounded-lg text-[11px] font-extrabold bg-[#00CED1]/20 text-[#00CED1] border border-[#00CED1]/40 hover:bg-[#00CED1]/30 transition-all flex items-center justify-center gap-1 cursor-pointer"
              >
                <span>{language === "en" ? "Explore Tibial Plateau Concept" : "เปิดดู Tibial Plateau Concept 🚀"}</span>
                <ChevronRight size={13} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── Bookmarked / Saved Systems (Real Dynamic Sync) ── */}
      <section className="space-y-2">
        <div className="flex items-center justify-between text-[11px] font-extrabold uppercase tracking-wider text-[#00CED1]">
          <span className="flex items-center gap-1.5">
            <Bookmark size={13} className="fill-[#00CED1]/20" />
            {language === "en" ? "Saved / Bookmarked Systems" : "รายการที่บันทึกไว้ (Bookmarks)"}
          </span>
          <div className="flex items-center gap-2">
            {resolvedBookmarks.length > 0 && (
              <button
                type="button"
                onClick={handleClearAllBookmarks}
                className="text-[10px] text-rose-400 hover:text-rose-300 font-bold cursor-pointer underline mr-1"
              >
                {language === "en" ? "Clear All" : "ล้างทั้งหมด"}
              </button>
            )}
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#00CED1]/15 text-[#00CED1] border border-[#00CED1]/30">
              {resolvedBookmarks.length} {language === "en" ? "Saved" : "รายการ"}
            </span>
          </div>
        </div>



        <div className="space-y-2">
          {resolvedBookmarks.length === 0 ? (
            <div className="p-6 rounded-xl border text-center text-slate-400 text-xs flex flex-col items-center gap-2" style={{ background: cardBg, borderColor: cardBorder }}>
              <Bookmark size={24} className="text-slate-500 opacity-40" />
              <span>{language === "en" ? "No bookmarked systems yet. Click 🔖 on any classification to save!" : "ยังไม่มีรายการโปรดที่บันทึกไว้ กดไอคอน 🔖 บนระบบจัดประเภทกระดูกเพื่อเซฟด่วน!"}</span>
            </div>
          ) : (
            resolvedBookmarks.map((topic, idx) => (
              <div
                key={idx}
                onClick={() => topic.bone && handleLaunchTopic(topic.bone.id, topic.regionId)}
                className="p-3 rounded-xl border transition-all cursor-pointer group hover:border-[#00CED1] hover:shadow-md hover:-translate-y-0.5"
                style={{ background: cardBg, borderColor: cardBorder }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[9.5px] font-extrabold px-1.5 py-0.5 rounded-md border text-[#00CED1] border-[#00CED1]/30 bg-[#00CED1]/10 flex items-center gap-1">
                    <Bookmark size={10} className="fill-[#00CED1]" />
                    {topic.boneName}
                  </span>
                  <ChevronRight size={13} className="text-slate-400 group-hover:text-[#00CED1] group-hover:translate-x-0.5 transition-transform" />
                </div>
                <div className="font-extrabold text-xs text-slate-800 dark:text-slate-100 group-hover:text-[#00CED1] transition-colors mt-0.5">
                  {topic.regionTitle}
                </div>
                <div className="text-[11px] font-bold text-[#00CED1] mt-0.5 leading-snug">
                  {topic.systemName}
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
