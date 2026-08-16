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

  // User Auth State Persisted in LocalStorage
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(() => {
    try {
      const saved = localStorage.getItem("ortho_user_profile");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
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
    <div className={`flex flex-col h-full h-[100dvh] max-h-[100dvh] w-full overflow-hidden transition-colors duration-300 ${darkMode ? "bg-[#0E1117] text-slate-100" : "bg-[#F0F4F8] text-[#2C3E50]"}`}>
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
