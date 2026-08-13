import { useState, useCallback, useEffect } from "react";
import { bonesData } from "./data/bones";
import type { BoneData } from "./types";
import { TopNavBar } from "./components/layout/TopNavBar";
import { LeftSidebar } from "./components/layout/LeftSidebar";
import { SkeletonCanvas } from "./components/canvas/SkeletonCanvas";
import { DetailPanel } from "./components/detail/DetailPanel";

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

  // Apply dark class to <html> (must be in useEffect, not render body)
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

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
      />

      {/* ── Main body layout ── */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Left sidebar - Hidden on mobile */}
        <LeftSidebar
          darkMode={darkMode}
          language={language}
          bones={bonesData}
          selectedBone={selectedBone}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          onSelectBone={handleSelectBone}
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
          selectedRegionId={selectedRegionId}
          onSelectRegion={setSelectedRegionId}
          selectedSystemIdx={selectedSystemIdx}
          onSelectSystem={setSelectedSystemIdx}
          selectedTypeIdx={selectedTypeIdx}
          onSelectType={setSelectedTypeIdx}
          onClose={handleClose}
        />
      </div>
    </div>
  );
}

export default App;
