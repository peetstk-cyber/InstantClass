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
  Trash2 
} from "lucide-react";
import { cleanSystemName } from "./components/detail/DetailPanel";
import { searchEponyms } from "./data/eponyms";
import { FeedbackModal } from "./components/feedback/FeedbackModal";
import { getBoneIcon } from "./components/common/BoneIcons";
import { QuizModal } from "./components/Quiz/QuizModal";

export type Language = "en" | "th";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const savedTheme = localStorage.getItem("ortho_theme");
      if (savedTheme !== null) {
        return savedTheme === "dark";
      }
      return false; // Default to Light Mode
    } catch {
      return false;
    }
  });
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
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

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

  // Apply dark class to <html> and save preference
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    document.body.classList.toggle("dark", darkMode);
    try {
      localStorage.setItem("ortho_theme", darkMode ? "dark" : "light");
    } catch (e) {
      console.error(e);
    }
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute("content", darkMode ? "#090d16" : "#F8FAFC");
    }
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
    <div className={`fixed inset-0 flex flex-col h-full h-[100dvh] max-h-[100dvh] w-full overflow-hidden transition-colors duration-300 ${darkMode ? "bg-[#0E1117] text-slate-100" : "bg-[#E2E7ED] text-[#101828]"}`}>
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
        onOpenFeedback={() => setShowFeedbackModal(true)}
      />

      {/* ── Main body layout ── */}
      <div className="flex flex-1 min-h-0 w-full overflow-hidden relative">
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
          onOpenQuiz={() => setShowQuizModal(true)}
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

      {/* ── Mobile Standing Vertical Floating Action Icons (Visible when no bone detail sheet is open) ── */}
      {!selectedBone && (
        <div 
          style={{
            bottom: "calc(1rem + env(safe-area-inset-bottom, 0px))",
            right: "calc(1rem + env(safe-area-inset-right, 0px))",
          }}
          className="fixed z-40 md:hidden flex flex-col items-center gap-2.5 select-none"
        >
          {/* Top Icon: Search Classification */}
          <button
            type="button"
            onClick={() => setShowSearchModal(true)}
            style={{
              background: darkMode ? "rgba(22,27,39,0.9)" : "rgba(255,255,255,0.9)",
              borderColor: darkMode ? "rgba(0,206,209,0.5)" : "#0F766E",
              color: darkMode ? "#00CED1" : "#0F766E",
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
              borderColor: darkMode ? "rgba(0,206,209,0.5)" : "#0F766E",
              color: darkMode ? "#00CED1" : "#0F766E",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
            className="w-9 h-9 rounded-full border backdrop-blur-md flex items-center justify-center transition-all active:scale-90 cursor-pointer"
            title={language === "en" ? "Saved Bookmarks" : "รายการที่บันทึกไว้"}
          >
            <Bookmark size={17} className={darkMode ? "fill-[#00CED1]/20" : "fill-[#0F766E]/20"} />
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
      )}

      {/* ── Mobile Search Modal ── */}
      {showSearchModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center p-4 pt-16 animate-fadeIn">
          <div
            style={{
              background: darkMode ? "#161B27" : "#FFFFFF",
              borderColor: darkMode ? "#252F42" : "#E2E8F0",
              color: darkMode ? "#F1F5F9" : "#000000",
            }}
            className="w-full max-w-md rounded-2xl border p-4 shadow-2xl space-y-3 relative flex flex-col max-h-[80dvh]"
          >
            <button
              onClick={() => {
                setShowSearchModal(false);
                setSearchQuery("");
              }}
              style={{ color: darkMode ? "#94A3B8" : "#000000" }}
              className="absolute top-3.5 right-3.5 hover:opacity-100 p-1 rounded-lg transition-all cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-2 pr-6">
              <Search size={18} className="text-teal-800 dark:text-[#00CED1]" />
              <h3 className="text-base font-extrabold tracking-tight text-black dark:text-slate-100">
                {language === "en" ? "Search Classification & Eponyms" : "ค้นหาระบบจำแนก & ชื่อรอยหัก (Eponyms)"}
              </h3>
            </div>

            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400" />
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={language === "en" ? "Search Boxer, Colles, Nightstick, Garden..." : "พิมพ์ชื่อรอยหัก เช่น Boxer, Colles, Monteggia..."}
                style={{
                  background: darkMode ? "#1E293B" : "#F8FAFC",
                  borderColor: darkMode ? "#334155" : "#E2E8F0",
                  color: darkMode ? "#F1F5F9" : "#000000",
                }}
                className="w-full pl-9 pr-8 py-2.5 rounded-xl border text-sm outline-none focus:border-teal-600 dark:focus:border-[#00CED1] transition-all font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 hover:text-slate-200 cursor-pointer"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Results list */}
            <div className="flex-1 overflow-y-auto space-y-2 pt-1 pr-1">
              {searchQuery.trim().length > 0 ? (
                (() => {
                  const matchingEponyms = searchEponyms(searchQuery);
                  const boneResults = bonesData.flatMap((b) =>
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

                  if (matchingEponyms.length === 0 && boneResults.length === 0) {
                    return (
                      <div className="py-8 text-center text-xs text-slate-800 dark:text-slate-400 font-medium">
                        {language === "en" ? "No classification systems or eponyms found matching your search." : "ไม่พบระบบจำแนกหรือชื่อรอยหักที่ตรงกับคำค้นหา"}
                      </div>
                    );
                  }

                  return (
                    <div className="space-y-2.5">
                      {/* 1. Eponym Results */}
                      {matchingEponyms.length > 0 && (
                        <div className="space-y-1.5">
                          <div className="text-[10.5px] font-extrabold uppercase tracking-wider text-teal-800 dark:text-[#00CED1] flex items-center gap-1">
                            <span>⚡</span>
                            <span>{language === "en" ? "Fracture Eponyms / Nicknames" : "ชื่อเฉพาะ / Eponyms"}</span>
                          </div>
                          {matchingEponyms.map((item) => {
                            const BoneIconComp = getBoneIcon(item.boneId);
                            return (
                              <button
                                key={item.id}
                                onClick={() => {
                                  handleSelectBoneById(item.boneId, item.regionId);
                                  setShowSearchModal(false);
                                  setSearchQuery("");
                                }}
                                style={{
                                  background: darkMode ? "rgba(255,255,255,0.04)" : "#FFFFFF",
                                  borderColor: darkMode ? "rgba(0,206,209,0.3)" : "rgba(15,118,110,0.3)",
                                }}
                                className="w-full text-left px-3 py-2 rounded-xl border flex items-center justify-between hover:border-teal-600 dark:hover:border-[#00CED1] hover:shadow-sm transition-all cursor-pointer group"
                              >
                                <div className="flex items-center gap-3 min-w-0">
                                  <div className="w-7 h-7 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-700 dark:text-[#00CED1] flex-shrink-0">
                                    <BoneIconComp size={16} />
                                  </div>
                                  <div className="font-extrabold text-sm text-slate-800 dark:text-slate-100 group-hover:text-teal-700 dark:group-hover:text-[#00CED1] truncate">
                                    {item.name}
                                  </div>
                                </div>
                                <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-md bg-teal-600/15 dark:bg-[#00CED1]/15 text-teal-900 dark:text-[#00CED1] border border-teal-600/30 dark:border-[#00CED1]/30 flex-shrink-0">
                                  {item.boneId}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      )}

                      {/* 2. Bones & Classification Systems */}
                      {boneResults.length > 0 && (
                        <div className="space-y-1.5">
                          <div className="text-[10.5px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            {language === "en" ? "Classification Systems" : "ระบบการจำแนกกระดูก"}
                          </div>
                          {boneResults.map((res, idx) => {
                            const BoneIconComp = getBoneIcon(res.boneId);
                            return (
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
                                className="w-full text-left p-2.5 rounded-xl border flex items-center justify-between hover:border-teal-600 dark:hover:border-[#00CED1] transition-all cursor-pointer group"
                              >
                                <div className="flex items-center gap-3 min-w-0">
                                  <div className="w-8 h-8 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-700 dark:text-[#00CED1] flex-shrink-0">
                                    <BoneIconComp size={18} />
                                  </div>
                                  <div className="min-w-0">
                                    <div className="text-xs font-bold text-teal-800 dark:text-[#00CED1] truncate">
                                      {res.boneName} • {res.regionName}
                                    </div>
                                    <div className="text-xs font-extrabold mt-0.5 text-slate-800 dark:text-slate-100 truncate">
                                      {res.systemName}
                                    </div>
                                  </div>
                                </div>
                                <ChevronRight size={15} className="text-slate-500 dark:text-slate-400 group-hover:text-teal-700 dark:group-hover:text-[#00CED1] group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })()
              ) : (
                <div className="py-4 text-center text-xs text-slate-800 dark:text-slate-400 font-medium space-y-3">
                  <div>
                    <p className="font-extrabold text-[11px] text-teal-800 dark:text-[#00CED1] mb-1.5 uppercase tracking-wider">
                      ⚡ {language === "en" ? "High-Yield Fracture Eponyms (ER / Ward):" : "ชื่อเฉพาะยอดฮิตในห้องฉุกเฉิน (Eponyms):"}
                    </p>
                    <div className="flex flex-wrap justify-center gap-1.5 max-h-[140px] overflow-y-auto p-1">
                      {[
                        "Boxer", "Nightstick", "Monteggia", "Galeazzi", 
                        "Colles", "Smith", "Barton", "Chauffeur", 
                        "Jones", "Lisfranc", "Hangman", "Pipkin", 
                        "Segond", "Chance", "Salter-Harris"
                      ].map((eponym) => (
                        <button
                          key={eponym}
                          onClick={() => setSearchQuery(eponym)}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-extrabold bg-teal-600/15 text-teal-900 dark:bg-[#00CED1]/15 dark:text-[#00CED1] border border-teal-600/30 dark:border-[#00CED1]/30 hover:bg-teal-600/25 transition-all cursor-pointer"
                        >
                          {eponym}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                    <p className="text-[10.5px] text-slate-500 dark:text-slate-400 mb-1.5 font-bold">
                      {language === "en" ? "Standard Systems:" : "ระบบจำแนกมาตรฐาน:"}
                    </p>
                    <div className="flex flex-wrap justify-center gap-1.5">
                      {["Garden", "Schatzker", "Neer", "Gustilo", "Pauwels", "Rockwood"].map((topic) => (
                        <button
                          key={topic}
                          onClick={() => setSearchQuery(topic)}
                          className="px-2.5 py-0.5 rounded-lg text-[10.5px] font-bold bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-all cursor-pointer"
                        >
                          {topic}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── Quiz & Trauma Film Spot Diagnosis Modal ── */}
      <QuizModal
        isOpen={showQuizModal}
        onClose={() => setShowQuizModal(false)}
        darkMode={darkMode}
        language={language}
        bones={bonesData}
        onSelectBone={handleSelectBoneById}
      />

      {/* ── Mobile Bookmarks Modal ── */}
      {showBookmarksModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div
            style={{
              background: darkMode ? "#161B27" : "#FFFFFF",
              borderColor: darkMode ? "#334155" : "#E2E8F0",
              color: darkMode ? "#F1F5F9" : "#000000",
              width: "100%",
              maxWidth: 440,
            }}
            className="rounded-2xl border flex flex-col shadow-2xl overflow-hidden relative p-5 max-h-[90dvh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700/40">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-teal-600/15 dark:bg-[#00CED1]/15 border border-teal-600/30 dark:border-[#00CED1]/30 text-teal-800 dark:text-[#00CED1] flex items-center justify-center">
                  <Bookmark size={18} className="fill-teal-800/20 dark:fill-[#00CED1]/20" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-black dark:text-slate-100">
                    {language === "en" ? "Saved Bookmarked Systems" : "รายการระบบที่บันทึกไว้"}
                  </h3>
                  <p className="text-[10px] text-slate-700 dark:text-slate-400 font-medium">
                    {language === "en" ? "Quick access to your saved clinical classifications" : "เข้าถึงหัวข้อบันทึกย่อทางคลินิกอย่างรวดเร็ว"}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowBookmarksModal(false)}
                className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Bookmarks List */}
            <div className="my-4 flex-1 overflow-y-auto flex flex-col gap-2 max-h-[50dvh] pr-1">
              {resolvedBookmarks.length === 0 ? (
                <div className="py-10 text-center flex flex-col items-center justify-center opacity-75">
                  <Bookmark size={32} className="text-slate-400 dark:text-slate-500 mb-2 stroke-[1.5]" />
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-400">
                    {language === "en" ? "No bookmarked systems yet" : "ยังไม่มีรายการที่บันทึกไว้"}
                  </p>
                  <p className="text-[11px] text-slate-700 dark:text-slate-500 font-medium max-w-[220px] mt-1">
                    {language === "en"
                      ? "Tap the bookmark icon on any classification system to save it here."
                      : "กดไอคอนบุ๊กมาร์กบนหน้าระบบการจัดจำแนกเพื่อบันทึกไว้ดูภายหลัง"}
                  </p>
                </div>
              ) : (
                resolvedBookmarks.map((item, idx) => {
                  const BoneIconComp = getBoneIcon(item.boneId);
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setShowBookmarksModal(false);
                        handleSelectBoneById(item.boneId, item.regionId);
                      }}
                      className="p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between group"
                      style={{
                        background: darkMode ? "rgba(255,255,255,0.03)" : "#F8FAFC",
                        borderColor: darkMode ? "#334155" : "#E2E8F0"
                      }}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-8 h-8 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-700 dark:text-[#00CED1] flex-shrink-0">
                          <BoneIconComp size={18} />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-extrabold text-slate-800 dark:text-white group-hover:text-teal-800 dark:group-hover:text-[#00CED1] truncate">
                            {item.regionName} ({item.boneName})
                          </div>
                          <div className="text-[11px] font-bold text-teal-800 dark:text-[#00CED1] mt-0.5 truncate">
                            {item.systemName}
                          </div>
                        </div>
                      </div>
                      <ChevronRight size={15} className="text-slate-400 group-hover:text-[#00CED1] flex-shrink-0" />
                    </button>
                  );
                })
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

      {/* ── Real Feedback & Cloud Database Modal ── */}
      <FeedbackModal
        isOpen={showFeedbackModal}
        onClose={() => setShowFeedbackModal(false)}
        darkMode={darkMode}
        language={language}
        currentBoneName={selectedBone?.name[language]}
        currentRegionName={selectedBone?.regions.find(r => r.id === selectedRegionId)?.name[language]}
      />
    </div>
  );
}

export default App;
