import type { Language } from "../../App";
import type { BoneData } from "../../types";
import { BONE_CATEGORY } from "./TopNavBar";
import { ChevronRight, BookOpen, Hand, Footprints } from "lucide-react";
import { 
  getBoneIcon, 
  SkullIcon, 
  TLSpineIcon, 
  PhysisIcon 
} from "../common/BoneIcons";
import { RegionConceptPanel } from "./RegionConceptPanel";

interface LeftSidebarProps {
  darkMode: boolean;
  language: Language;
  bones: BoneData[];
  selectedBone: BoneData | null;
  selectedRegionId?: string | null;
  activeCategory: string;
  onCategoryChange: (c: string) => void;
  onSelectBone: (bone: BoneData, regionId?: string) => void;
  onBackToList?: () => void;
  searchQuery: string;
}

const CATEGORY_GROUPS = [
  {
    id: "skull",
    label: { en: "Skull", th: "กะโหลกศีรษะ" },
    icon: SkullIcon,
    boneIds: ["head"],
  },
  {
    id: "upper",
    label: { en: "Upper Extremity", th: "แขน & ไหล่" },
    icon: Hand,
    boneIds: ["clavicle", "scapula", "humerus", "forearm", "hand"],
  },
  {
    id: "lower",
    label: { en: "Lower Extremity", th: "ขา & สะโพก" },
    icon: Footprints,
    boneIds: ["pelvis", "femur", "patella", "tibia", "foot"],
  },
  {
    id: "spine",
    label: { en: "Spine Trauma", th: "กระดูกสันหลัง" },
    icon: TLSpineIcon,
    boneIds: ["c-spine", "tl-spine"],
  },
  {
    id: "pedi",
    label: { en: "Pediatric", th: "กระดูกเด็ก" },
    icon: PhysisIcon,
    boneIds: ["pediatric-physis"],
  },
];

export function LeftSidebar({
  darkMode, language, bones, selectedBone, selectedRegionId,
  activeCategory, onSelectBone, onBackToList, searchQuery,
}: LeftSidebarProps) {
  const bg          = darkMode ? "#161B27" : "#EAECEF";
  const border      = darkMode ? "#252F42" : "#D5D9E0";
  const mutedText   = darkMode ? "#94A3B8" : "#475569";
  const sectionHead = darkMode ? "#94A3B8" : "#334155";
  const hoverBg     = darkMode ? "rgba(0,206,209,0.07)" : "#FFFFFF";

  const boneMap = Object.fromEntries(bones.map(b => [b.id, b]));

  // Find active region & concept
  const currentRegion = selectedBone?.regions.find(r => r.id === selectedRegionId) || selectedBone?.regions[0];
  const hasRegionConcept = selectedBone && currentRegion && currentRegion.regionConcept;

  // Filter by searchQuery or category
  const isFiltering = searchQuery.trim().length > 0 || activeCategory !== "all";

  const getFilteredBones = () => {
    if (searchQuery.trim()) {
      return bones.filter(b =>
        b.name[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.regions.some(r =>
          r.classifications.some(c =>
            c.system.toLowerCase().includes(searchQuery.toLowerCase())
          )
        )
      );
    }
    if (activeCategory !== "all") {
      return bones.filter(b => BONE_CATEGORY[b.id] === activeCategory);
    }
    return bones;
  };

  return (
    <aside
      style={{
        width: 340,
        minWidth: 340,
        background: bg,
        borderRight: `1px solid ${border}`,
        overflowY: "auto",
      }}
      className="hidden md:flex flex-col h-full flex-shrink-0 z-20"
    >
      {hasRegionConcept ? (
        /* Display Region Concept Panel when a bone with region concept is selected */
        <RegionConceptPanel
          concept={currentRegion.regionConcept!}
          boneName={selectedBone.name}
          regionName={currentRegion.name}
          darkMode={darkMode}
          language={language}
          onBackToList={onBackToList}
          isDesktop={true}
        />
      ) : (
        /* Display default Bone List */
        <>
          <div 
            className="px-4 py-3 border-b flex items-center justify-between" 
            style={{ 
              borderColor: border,
              background: darkMode ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.01)" 
            }}
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-[#00CED1]/10 border border-[#00CED1]/30 flex items-center justify-center text-[#00CED1]">
                <BookOpen size={13} />
              </div>
              <span className="font-extrabold text-xs tracking-tight text-slate-800 dark:text-slate-100 uppercase">
                {language === "en" ? "Bone Catalog" : "หมวดหมู่กระดูก"}
              </span>
            </div>
          </div>
          <div className="py-2.5">
            {isFiltering ? (
              /* Flat filtered list */
              <div className="px-3">
                <p style={{ color: mutedText }} className="text-[10px] uppercase tracking-wider font-extrabold mb-2 px-1">
                  {language === "en" ? "Results" : "ผลการค้นหา"}
                </p>
                {getFilteredBones().map(bone => (
                  <BoneItem
                    key={bone.id}
                    bone={bone}
                    language={language}
                    isSelected={selectedBone?.id === bone.id}
                    onSelect={() => onSelectBone(bone)}
                    darkMode={darkMode}
                    hoverBg={hoverBg}
                  />
                ))}
              </div>
            ) : (
              /* Grouped by category */
              CATEGORY_GROUPS.map(group => (
                <div key={group.id} className="mb-3">
                  <div
                    style={{ color: sectionHead }}
                    className="px-4 py-1.5 text-[10.5px] font-extrabold uppercase tracking-wider flex items-center gap-2"
                  >
                    <group.icon size={15} className="text-teal-600 dark:text-[#00CED1]" />
                    <span>{group.label[language]}</span>
                  </div>
                  <div className="px-3">
                    {group.boneIds.map(id => {
                      const bone = boneMap[id];
                      if (!bone) return null;
                      return (
                        <BoneItem
                          key={id}
                          bone={bone}
                          language={language}
                          isSelected={selectedBone?.id === id}
                          onSelect={() => onSelectBone(bone)}
                          darkMode={darkMode}
                          hoverBg={hoverBg}
                        />
                      );
                    })}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="mt-auto px-4 py-3" style={{ borderTop: `1px solid ${border}` }}>
            <p style={{ color: darkMode ? "#94A3B8" : "#475569" }} className="text-[10px] text-center font-medium leading-relaxed">
              For educational use only.<br />Not for clinical decisions.
            </p>
          </div>
        </>
      )}
    </aside>
  );
}

function BoneItem({
  bone, language, isSelected, onSelect, darkMode, hoverBg,
}: {
  bone: BoneData;
  language: Language;
  isSelected: boolean;
  onSelect: () => void;
  darkMode: boolean;
  hoverBg: string;
}) {
  const classCount = bone.regions.reduce((acc, r) => acc + r.classifications.length, 0);
  const IconComponent = getBoneIcon(bone.id);

  return (
    <button
      onClick={onSelect}
      className="w-full text-left rounded-xl px-2.5 py-2 mb-1 flex items-center gap-3 transition-all group cursor-pointer"
      style={{
        background: isSelected ? (darkMode ? "rgba(0,206,209,0.12)" : "rgba(15,118,110,0.12)") : "transparent",
        border: isSelected ? (darkMode ? "1.5px solid rgba(0,206,209,0.4)" : "1.5px solid rgba(15,118,110,0.4)") : "1.5px solid transparent",
        color: isSelected ? (darkMode ? "#00CED1" : "#0F766E") : (darkMode ? "#CBD5E0" : "#1E293B"),
      }}
      onMouseEnter={e => {
        if (!isSelected) (e.currentTarget as HTMLElement).style.background = hoverBg;
      }}
      onMouseLeave={e => {
        if (!isSelected) (e.currentTarget as HTMLElement).style.background = "transparent";
      }}
    >
      <div 
        className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors p-1"
        style={{
          background: isSelected 
            ? (darkMode ? "#00CED1" : "#0F766E")
            : (darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)"),
          color: isSelected 
            ? (darkMode ? "#0F172A" : "#FFFFFF") 
            : (darkMode ? "#94A3B8" : "#475569")
        }}
      >
        <IconComponent
          size={19}
          className="transition-transform group-hover:scale-110"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[13.5px] font-extrabold truncate leading-tight">{bone.name[language]}</div>
        <div className={`text-[10.5px] mt-0.5 ${darkMode ? "text-slate-400" : "text-slate-500 font-medium"}`}>
          {classCount} {language === "en" ? "systems" : "ระบบ"}
        </div>
      </div>
      <ChevronRight
        size={14}
        className="flex-shrink-0 opacity-0 group-hover:opacity-60 transition-all group-hover:translate-x-0.5"
      />
    </button>
  );
}
