import { useState, useCallback, useEffect } from "react";
import { bonesData } from "./data/bones";
import type { BoneData } from "./types";
import type { UserProfile } from "./types/auth";
import { TopNavBar } from "./components/layout/TopNavBar";
import { LeftSidebar } from "./components/layout/LeftSidebar";
import { SkeletonCanvas } from "./components/canvas/SkeletonCanvas";
import { DetailPanel } from "./components/detail/DetailPanel";
import { AdminImageUploader } from "./components/admin/AdminImageUploader";
import { AuthModal } from "./components/auth/AuthModal";
import { 
  Search,
  HelpCircle, 
  Bookmark, 
  User, 
  ChevronRight, 
  X, 
  CheckCircle2, 
  XCircle, 
  Trash2, 
  BookOpen 
} from "lucide-react";
import { cleanSystemName } from "./components/detail/DetailPanel";

export type Language = "en" | "th";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState<Language>("en");
  const [selectedBone, setSelectedBone] = useState<BoneData | null>(null);
  const [selectedRegionId, setSelectedRegionId] = useState<string | null>(null);
  const [selectedSystemIdx, setSelectedSystemIdx] = useState(0);
  const [selectedTypeIdx, setSelectedTypeIdx] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [hoveredBoneId, setHoveredBoneId] = useState<string | null>(null);
  const [showAdmin, setShowAdmin] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  // Mobile Modals State
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showQuizModal, setShowQuizModal] = useState(false);
  const [showBookmarksModal, setShowBookmarksModal] = useState(false);
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);

  // User Auth State Persisted in LocalStorage
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(() => {
    try {
      const saved = localStorage.getItem("ortho_user_profile");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Bookmarks state for Mobile Bookmarks Modal
  const [bookmarkedSystems, setBookmarkedSystems] = useState<string[]>(() => {
    if (currentUser?.bookmarks) return currentUser.bookmarks;
    try {
      const saved = localStorage.getItem("ortho_bookmarks");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const handleLogin = (user: UserProfile) => {
    setCurrentUser(user);
    try {
      localStorage.setItem("ortho_user_profile", JSON.stringify(user));
    } catch (e) {
      console.error(e);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    try {
      localStorage.removeItem("ortho_user_profile");
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (currentUser?.bookmarks) {
      setBookmarkedSystems(currentUser.bookmarks);
    } else {
      try {
        const saved = localStorage.getItem("ortho_bookmarks");
        setBookmarkedSystems(saved ? JSON.parse(saved) : []);
      } catch {
        setBookmarkedSystems([]);
      }
    }
  }, [currentUser?.id, currentUser?.bookmarks, showBookmarksModal]);

  const OLD_MOCK_NAMES = ["Garden & Pauwels", "Schatzker Classification", "Neer 4-Part Classification", "Hawkins Classification"];

  const resolvedBookmarks = bookmarkedSystems
    .filter(name => !OLD_MOCK_NAMES.includes(name))
    .map(name => {
      for (const b of bonesData) {
        for (const r of b.regions) {
          for (const c of r.classifications) {
            if (c.fullName.en === name || c.system === name || c.fullName.th === name) {
              return {
                boneId: b.id,
                regionId: r.id,
                boneName: b.name[language],
                regionName: r.name[language],
                systemName: cleanSystemName(c.fullName[language] || c.system),
              };
            }
          }
        }
      }
      return null;
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

  const handleClearAllBookmarks = () => {
    setBookmarkedSystems([]);
    try {
      localStorage.setItem("ortho_bookmarks", JSON.stringify([]));
    } catch (e) {
      console.error(e);
    }
  };

  // Apply dark class to <html> (must be in useEffect, not render body)
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Secret keyboard shortcut: Ctrl+Shift+U or Cmd+Shift+U
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "U" || e.key === "u")) {
        e.preventDefault();
        setShowAdmin(prev => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSelectBone = useCallback((bone: BoneData | null, regionId?: string) => {
    setSelectedBone(bone);
    setSelectedTypeIdx(0);
    setSelectedSystemIdx(0);
    if (bone && bone.regions.length > 0) {
      const match = regionId ? bone.regions.find(r => r.id === regionId) : null;
      setSelectedRegionId(match ? match.id : bone.regions[0].id);
    } else {
      setSelectedRegionId(null);
    }
  }, []);

  const handleSelectBoneById = useCallback((id: string, regionId?: string) => {
    const bone = bonesData.find(b => b.id === id) || null;
    handleSelectBone(bone, regionId);
  }, [handleSelectBone]);

  const handleClose = useCallback(() => {
    setSelectedBone(null);
    setSelectedRegionId(null);
  }, []);

  return (
    <div className={`flex flex-col h-full h-[100dvh] max-h-[100dvh] w-full overflow-hidden transition-colors duration-300 ${darkMode ? "bg-[#0E1117] text-slate-100" : "bg-[#EAECEF] text-[#101828]"}`}>
      {/* ── Header ── */}
      <TopNavBar
        darkMode={darkMode}
        onToggleDark={() => setDarkMode(d => !d)}
        language={language}
        onToggleLanguage={() => setLanguage(l => l === "en" ? "th" : "en")}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        bones={bonesData}
        onSelectBone={handleSelectBoneById}
        onOpenAdmin={() => setShowAdmin(true)}
        currentUser={currentUser}
        onOpenAuth={() => setShowAuthModal(true)}
      />

      {/* ── Main body layout ── */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Left sidebar - Hidden on mobile */}
        <LeftSidebar
          darkMode={darkMode}
          language={language}
          bones={bonesData}
          selectedBone={selectedBone}
          selectedRegionId={selectedRegionId}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          onSelectBone={handleSelectBone}
          onBackToList={handleClose}
          searchQuery={searchQuery}
        />

        {/* Center full-screen canvas */}
        <SkeletonCanvas
          darkMode={darkMode}
          selectedBoneId={selectedBone?.id ?? null}
          hoveredBoneId={hoveredBoneId}
          onHoverBone={setHoveredBoneId}
          onSelectBone={handleSelectBoneById}
          hasDetailOpen={!!selectedBone}
        />

        {/* Mobile Backdrop overlay when panel is open */}
        {selectedBone && (
          <div 
            onClick={handleClose} 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          />
        )}

        {/* Right detail panel (Bottom sheet on mobile / Sidebar on desktop) */}
        <DetailPanel
          darkMode={darkMode}
          language={language}
          bone={selectedBone}
          bones={bonesData}
          currentUser={currentUser}
          onUpdateUser={handleLogin}
          onOpenAuth={() => setShowAuthModal(true)}
          onSelectBoneAndRegion={handleSelectBone}
          selectedRegionId={selectedRegionId}
          onSelectRegion={setSelectedRegionId}
          selectedSystemIdx={selectedSystemIdx}
          onSelectSystem={setSelectedSystemIdx}
          selectedTypeIdx={selectedTypeIdx}
          onSelectType={setSelectedTypeIdx}
          onClose={handleClose}
        />
      </div>

      {/* ── Mobile Standing Vertical Floating Action Icons (Always Visible) ── */}
      <div className="fixed bottom-4 right-4 z-40 md:hidden flex flex-col items-center gap-2.5 select-none">
        {/* Top Icon: Search Classification */}
        <button
          type="button"
          onClick={() => setShowSearchModal(true)}
          style={{
            background: darkMode ? "rgba(22,27,39,0.9)" : "rgba(255,255,255,0.9)",
            borderColor: darkMode ? "rgba(0,206,209,0.5)" : "#00CED1",
            color: "#00CED1",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
          className="w-9 h-9 rounded-full border backdrop-blur-md flex items-center justify-center transition-all active:scale-90 cursor-pointer"
          title={language === "en" ? "Search Classification" : "ค้นหาการจำแนกประเภท"}
        >
          <Search size={17} />
        </button>

        {/* 2nd Icon: Daily Quiz Challenge */}
        <button
          type="button"
          onClick={() => setShowQuizModal(true)}
          style={{
            background: darkMode ? "rgba(22,27,39,0.9)" : "rgba(255,255,255,0.9)",
            borderColor: darkMode ? "rgba(245,158,11,0.5)" : "#F59E0B",
            color: "#F59E0B",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
          className="w-9 h-9 rounded-full border backdrop-blur-md flex items-center justify-center transition-all active:scale-90 cursor-pointer"
          title={language === "en" ? "Daily Quiz Challenge" : "คำถามความรู้ (Quiz)"}
        >
          <HelpCircle size={17} />
        </button>

        {/* 3rd Icon: Saved Bookmarks */}
        <button
          type="button"
          onClick={() => setShowBookmarksModal(true)}
          style={{
            background: darkMode ? "rgba(22,27,39,0.9)" : "rgba(255,255,255,0.9)",
            borderColor: darkMode ? "rgba(0,206,209,0.5)" : "#00CED1",
            color: "#00CED1",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
          className="w-9 h-9 rounded-full border backdrop-blur-md flex items-center justify-center transition-all active:scale-90 cursor-pointer"
          title={language === "en" ? "Saved Bookmarks" : "รายการที่บันทึกไว้"}
        >
          <Bookmark size={17} className="fill-[#00CED1]/20" />
        </button>

        {/* Bottom Icon: Account & Login */}
        <button
          type="button"
          onClick={() => setShowAuthModal(true)}
          style={{
            background: darkMode ? "rgba(22,27,39,0.9)" : "rgba(255,255,255,0.9)",
            borderColor: darkMode ? "rgba(46,204,113,0.5)" : "#2ECC71",
            color: "#2ECC71",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
          className="w-9 h-9 rounded-full border backdrop-blur-md flex items-center justify-center transition-all active:scale-90 cursor-pointer"
          title={currentUser ? `@${currentUser.username}` : (language === "en" ? "Sign In / Account" : "เข้าสู่ระบบ / จัดการบัญชี")}
        >
          <User size={17} />
        </button>
      </div>

      {/* ── Mobile Search Modal ── */}
      {showSearchModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center p-4 pt-16 animate-fadeIn">
          <div
            style={{
              background: darkMode ? "#161B27" : "#FFFFFF",
              borderColor: darkMode ? "#252F42" : "#E2E8F0",
              color: darkMode ? "#F1F5F9" : "#101828",
            }}
            className="w-full max-w-md rounded-2xl border p-4 shadow-2xl space-y-3 relative flex flex-col max-h-[80dvh]"
          >
            <button
              onClick={() => {
                setShowSearchModal(false);
                setSearchQuery("");
              }}
              style={{ color: darkMode ? "#94A3B8" : "#64748B" }}
              className="absolute top-3.5 right-3.5 hover:opacity-100 p-1 rounded-lg transition-all cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-2 pr-6">
              <Search size={18} className="text-[#00CED1]" />
              <h3 className="text-base font-extrabold tracking-tight">
                {language === "en" ? "Search Fracture Classification" : "ค้นหาการจำแนกประเภทกระดูกหัก"}
              </h3>
            </div>

            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={language === "en" ? "Search bone, region, or system..." : "พิมพ์ชื่อกระดูก หรือระบบจำแนก..."}
                style={{
                  background: darkMode ? "#1E293B" : "#F8FAFC",
                  borderColor: darkMode ? "#334155" : "#E2E8F0",
                  color: darkMode ? "#F1F5F9" : "#101828",
                }}
                className="w-full pl-9 pr-8 py-2.5 rounded-xl border text-sm outline-none focus:border-[#00CED1] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Results list */}
            <div className="flex-1 overflow-y-auto space-y-1.5 pt-1">
              {searchQuery.trim().length > 0 ? (
                (() => {
                  const results = bonesData.flatMap((b) =>
                    b.regions.flatMap((r) =>
                      r.classifications
                        .filter(
                          (c) =>
                            b.name[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
                            r.name[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
                            c.system.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            c.fullName[language].toLowerCase().includes(searchQuery.toLowerCase())
                        )
                        .map((c) => ({
                          boneId: b.id,
                          regionId: r.id,
                          boneName: b.name[language],
                          regionName: r.name[language],
                          systemName: cleanSystemName(c.fullName[language] || c.system),
                        }))
                    )
                  );

                  if (results.length === 0) {
                    return (
                      <div className="py-8 text-center text-xs text-slate-400">
                        {language === "en" ? "No classification systems found matching your search." : "ไม่พบระบบจำแนกกระดูกหักที่ตรงกับคำค้นหา"}
                      </div>
                    );
                  }

                  return results.map((res, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        handleSelectBoneById(res.boneId, res.regionId);
                        setShowSearchModal(false);
                        setSearchQuery("");
                      }}
                      style={{
                        background: darkMode ? "rgba(255,255,255,0.03)" : "#F8FAFC",
                        borderColor: darkMode ? "rgba(255,255,255,0.08)" : "#EAECF0",
                      }}
                      className="w-full text-left p-3 rounded-xl border flex items-center justify-between hover:border-[#00CED1] transition-all cursor-pointer group"
                    >
                      <div>
                        <div className="text-xs font-bold text-[#00CED1]">
                          {res.boneName} • {res.regionName}
                        </div>
                        <div className="text-sm font-extrabold mt-0.5">
                          {res.systemName}
                        </div>
                      </div>
                      <ChevronRight size={16} className="text-slate-400 group-hover:text-[#00CED1] group-hover:translate-x-0.5 transition-all" />
                    </button>
                  ));
                })()
              ) : (
                <div className="py-6 text-center text-xs text-slate-400 space-y-2">
                  <p>{language === "en" ? "Popular Search Topics:" : "หัวข้อค้นขายอดนิยม:"}</p>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {["Garden", "Schatzker", "Neer", "Gustilo", "Pauwels"].map((topic) => (
                      <button
                        key={topic}
                        onClick={() => setSearchQuery(topic)}
                        className="px-2.5 py-1 rounded-lg text-xs font-bold bg-[#00CED1]/15 text-[#00CED1] border border-[#00CED1]/30 hover:bg-[#00CED1]/25 transition-all cursor-pointer"
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── Mobile Quiz Challenge Modal ── */}
      {showQuizModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div
            style={{
              background: darkMode ? "#161B27" : "#FFFFFF",
              borderColor: darkMode ? "#334155" : "#E2E8F0",
              color: darkMode ? "#F1F5F9" : "#0F172A",
              width: "100%",
              maxWidth: 440,
            }}
            className="rounded-2xl border flex flex-col shadow-2xl overflow-hidden relative p-5 max-h-[90dvh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-700/40">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center">
                  <HelpCircle size={18} />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-slate-800 dark:text-slate-100">
                    {language === "en" ? "Daily High-Yield Challenge" : "คำถามความรู้ประจำวัน"}
                  </h3>
                  <p className="text-[10px] text-slate-400">
                    {language === "en" ? "Test your orthopaedic clinical knowledge" : "ทดสอบเคสและแนวทางรักษาทางออร์โธ"}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowQuizModal(false)}
                className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-all cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Question */}
            <div className="my-4 p-3.5 rounded-xl bg-slate-800/40 border border-slate-700/40">
              <div className="text-[10px] font-extrabold text-amber-400 uppercase tracking-wider mb-1">
                CASE SCENARIO • TIBIA
              </div>
              <p className="text-xs font-bold leading-relaxed text-slate-200">
                {language === "en"
                  ? "Schatzker Type IV fracture of the proximal tibia is characterized by which anatomical finding and primary clinical concern?"
                  : "กระดูก Tibial Plateau หักแบบ Schatzker Type IV มีลักษณะเด่นอย่างไร และต้องระวังภาวะแทรกซ้อนใดเป็นพิเศษ?"}
              </p>
            </div>

            {/* Options */}
            <div className="flex flex-col gap-2 mb-4">
              {[
                {
                  id: 0,
                  textEn: "Pure split fracture of lateral tibial plateau with low neurovascular risk",
                  textTh: "การหักเฉือนเฉพาะฝั่ง Lateral Plateau และมีความเสี่ยงต่อเส้นเลือดต่ำ",
                  isCorrect: false,
                },
                {
                  id: 1,
                  textEn: "Medial tibial plateau fracture; high risk of Popliteal Artery injury",
                  textTh: "การหักฝั่ง Medial Plateau; เสี่ยงสูงต่อการบาดเจ็บของเส้นเลือดใหญ่ Popliteal Artery",
                  isCorrect: true,
                },
                {
                  id: 2,
                  textEn: "Depression fracture of central articular surface only",
                  textTh: "การยุบตัวเฉพาะผิวกระดูกอ่อนตรงกลางข้อเท่านั้น",
                  isCorrect: false,
                },
              ].map((opt) => {
                const isSelected = quizAnswer === opt.id;
                let optBg = darkMode ? "rgba(255,255,255,0.03)" : "#F8FAFC";
                let optBorder = darkMode ? "#334155" : "#E2E8F0";
                let textColor = darkMode ? "#CBD5E1" : "#475569";

                if (isSelected) {
                  if (opt.isCorrect) {
                    optBg = "rgba(46, 204, 113, 0.12)";
                    optBorder = "#2ECC71";
                    textColor = "#2ECC71";
                  } else {
                    optBg = "rgba(231, 76, 60, 0.12)";
                    optBorder = "#E74C3C";
                    textColor = "#E74C3C";
                  }
                }

                return (
                  <button
                    key={opt.id}
                    onClick={() => setQuizAnswer(opt.id)}
                    style={{ background: optBg, borderColor: optBorder, color: textColor }}
                    className="p-3 rounded-xl border text-left text-xs font-semibold transition-all cursor-pointer flex items-center justify-between gap-2"
                  >
                    <span>{language === "en" ? opt.textEn : opt.textTh}</span>
                    {isSelected && (
                      opt.isCorrect ? <CheckCircle2 size={16} className="text-[#2ECC71] flex-shrink-0" /> : <XCircle size={16} className="text-[#E74C3C] flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation & Action */}
            {quizAnswer !== null && (
              <div className="p-3 rounded-xl bg-[#00CED1]/10 border border-[#00CED1]/30 text-xs text-slate-200 mb-4 leading-relaxed animate-fadeIn">
                <div className="font-extrabold text-[#00CED1] mb-1">
                  {quizAnswer === 1
                    ? (language === "en" ? "✓ Correct!" : "✓ ถูกต้อง!")
                    : (language === "en" ? "✕ Incorrect" : "✕ ยังไม่ถูกต้อง")}
                </div>
                {language === "en"
                  ? "Schatzker Type IV involves the medial tibial plateau. Because this fracture pattern often results from high energy and knee dislocation forces, it carries a very high risk of popliteal artery and peroneal nerve injury!"
                  : "Schatzker Type IV เป็นการหักของฝั่ง Medial Tibial Plateau มักเกิดจากแรงรุนแรงสูงร่วมกับภาวะข้อเข่าเคลื่อน จึงมีความเสี่ยงสูงมากที่จะเกิดการบาดเจ็บต่อหลอดเลือด Popliteal Artery และเส้นประสาท Peroneal Nerve!"}
              </div>
            )}

            <button
              onClick={() => {
                setShowQuizModal(false);
                handleSelectBoneById("tibia", "proximal");
              }}
              className="w-full py-2.5 rounded-xl bg-[#00CED1] text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 shadow-md hover:bg-[#00CED1]/90 transition-all cursor-pointer"
            >
              <BookOpen size={15} />
              <span>{language === "en" ? "Study Schatzker System" : "ดูระบบจำแนก Schatzker"}</span>
            </button>
          </div>
        </div>
      )}

      {/* ── Mobile Bookmarks Modal ── */}
      {showBookmarksModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div
            style={{
              background: darkMode ? "#161B27" : "#FFFFFF",
              borderColor: darkMode ? "#334155" : "#E2E8F0",
              color: darkMode ? "#F1F5F9" : "#0F172A",
              width: "100%",
              maxWidth: 440,
            }}
            className="rounded-2xl border flex flex-col shadow-2xl overflow-hidden relative p-5 max-h-[90dvh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-700/40">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#00CED1]/15 border border-[#00CED1]/30 text-[#00CED1] flex items-center justify-center">
                  <Bookmark size={18} className="fill-[#00CED1]/20" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-slate-800 dark:text-slate-100">
                    {language === "en" ? "Saved Bookmarked Systems" : "รายการระบบที่บันทึกไว้"}
                  </h3>
                  <p className="text-[10px] text-slate-400">
                    {language === "en" ? "Quick access to your saved clinical classifications" : "เข้าถึงหัวข้อบันทึกย่อทางคลินิกอย่างรวดเร็ว"}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowBookmarksModal(false)}
                className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-all cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Bookmarks List */}
            <div className="my-4 flex-1 overflow-y-auto flex flex-col gap-2 max-h-[50dvh] pr-1">
              {resolvedBookmarks.length === 0 ? (
                <div className="py-10 text-center flex flex-col items-center justify-center opacity-60">
                  <Bookmark size={32} className="text-slate-500 mb-2 stroke-[1.5]" />
                  <p className="text-xs font-bold text-slate-400">
                    {language === "en" ? "No bookmarked systems yet" : "ยังไม่มีรายการที่บันทึกไว้"}
                  </p>
                  <p className="text-[11px] text-slate-500 max-w-[220px] mt-1">
                    {language === "en"
                      ? "Tap the bookmark icon on any classification system to save it here."
                      : "กดไอคอนบุ๊กมาร์กบนหน้าระบบการจัดจำแนกเพื่อบันทึกไว้ดูภายหลัง"}
                  </p>
                </div>
              ) : (
                resolvedBookmarks.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setShowBookmarksModal(false);
                      handleSelectBoneById(item.boneId, item.regionId);
                    }}
                    className="p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between group"
                    style={{
                      background: darkMode ? "rgba(255,255,255,0.03)" : "#F8FAFC",
                      borderColor: darkMode ? "#334155" : "#E2E8F0"
                    }}
                  >
                    <div>
                      <div className="text-xs font-extrabold text-white group-hover:text-[#00CED1]">
                        {item.regionName} ({item.boneName})
                      </div>
                      <div className="text-[11px] font-bold text-[#00CED1] mt-0.5">
                        {item.systemName}
                      </div>
                    </div>
                    <ChevronRight size={15} className="text-slate-400 group-hover:text-[#00CED1]" />
                  </button>
                ))
              )}
            </div>

            {/* Footer action */}
            {resolvedBookmarks.length > 0 && (
              <div className="pt-2 border-t border-slate-700/40 flex justify-end">
                <button
                  onClick={handleClearAllBookmarks}
                  className="px-3 py-1.5 rounded-lg bg-rose-500/15 border border-rose-500/30 text-rose-400 font-extrabold text-[11px] hover:bg-rose-500/25 transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <Trash2 size={13} />
                  <span>{language === "en" ? "Clear All Bookmarks" : "ล้างทั้งหมด"}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── Auth Login / Register / Profile Modal ── */}
      {showAuthModal && (
        <AuthModal
          darkMode={darkMode}
          language={language}
          currentUser={currentUser}
          onLogin={handleLogin}
          onLogout={handleLogout}
          onClose={() => setShowAuthModal(false)}
        />
      )}

      {/* ── Admin X-Ray Uploader Manager Modal ── */}
      {showAdmin && (
        <AdminImageUploader
          darkMode={darkMode}
          language={language}
          bones={bonesData}
          onClose={() => setShowAdmin(false)}
        />
      )}
    </div>
  );
}

export default App;
