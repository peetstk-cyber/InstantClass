import { useRef } from "react";
import type { Language } from "../../App";
import type { BoneData } from "../../types";
import type { UserProfile } from "../../types/auth";
import { Search, Moon, Sun, Globe } from "lucide-react";

interface TopNavBarProps {
  darkMode: boolean;
  onToggleDark: () => void;
  language: Language;
  onToggleLanguage: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  activeCategory: string;
  onCategoryChange: (c: string) => void;
  bones: BoneData[];
  onSelectBone: (id: string, regionId?: string) => void;
  onOpenAdmin?: () => void;
  currentUser?: UserProfile | null;
  onOpenAuth?: () => void;
}

const CATEGORIES = [
  { id: "all",   label: { en: "All", th: "ทั้งหมด" } },
  { id: "skull", label: { en: "Skull", th: "กะโหลกศีรษะ" } },
  { id: "upper", label: { en: "Upper Extremity", th: "รยางค์บน (แขน)" } },
  { id: "lower", label: { en: "Lower Extremity", th: "รยางค์ล่าง (ขา)" } },
  { id: "spine", label: { en: "Spine Trauma", th: "กระดูกสันหลัง" } },
  { id: "pedi",  label: { en: "Pediatric", th: "กระดูกเด็ก" } },
];

// Map bone id -> category
export const BONE_CATEGORY: Record<string, string> = {
  head: "skull",
  clavicle: "upper", scapula: "upper", humerus: "upper", forearm: "upper", hand: "upper",
  "c-spine": "spine", "tl-spine": "spine",
  pelvis: "lower", femur: "lower", patella: "lower", tibia: "lower", foot: "lower",
  "pediatric-physis": "pedi",
};

export function TopNavBar({
  darkMode, onToggleDark, language, onToggleLanguage,
  searchQuery, onSearchChange, activeCategory, onCategoryChange,
  bones, onSelectBone, onOpenAdmin,
}: TopNavBarProps) {
  const clickCountRef = useRef<number>(0);
  const clickTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleLogoClick = () => {
    clickCountRef.current += 1;
    if (clickCountRef.current >= 5) {
      if (onOpenAdmin) onOpenAdmin();
      clickCountRef.current = 0;
      if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
      return;
    }

    if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
    clickTimerRef.current = setTimeout(() => {
      clickCountRef.current = 0;
    }, 2000);
  };

  const borderColor = darkMode ? "#252F42" : "#EAECF0";
  const bg         = darkMode ? "#161B27" : "#FFFFFF";
  const text        = darkMode ? "#E2E8F0" : "#000000";
  const mutedText   = darkMode ? "#94A3B8" : "#000000";

  // Search results
  const filtered = searchQuery.trim().length > 0
    ? bones.filter(b =>
        b.name[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.regions.some(r =>
          r.classifications.some(c =>
            c.system.toLowerCase().includes(searchQuery.toLowerCase()) ||
            c.fullName[language].toLowerCase().includes(searchQuery.toLowerCase())
          )
        )
      )
    : [];

  return (
    <header
      style={{
        background: bg,
        borderBottom: `1px solid ${borderColor}`,
        color: text,
        paddingTop: "calc(8px + env(safe-area-inset-top, 0px))",
      }}
      className="flex items-center justify-between md:justify-start gap-2 md:gap-3.5 px-2 sm:px-3 md:px-4 pb-2 md:pb-2.5 z-30 flex-shrink-0"
    >
      {/* Logo (5 clicks to open Admin Tool) */}
      <div 
        onClick={handleLogoClick}
        title="InstantClass (Click 5 times to open Admin X-Ray Uploader)"
        className="flex items-center gap-1 sm:gap-1.5 flex-shrink-0 cursor-pointer group pl-0.5"
      >
        <img
          src="/logo.png"
          alt="InstantClass Logo"
          className="h-9 sm:h-10 md:h-11 w-auto object-contain transition-all group-hover:scale-110 drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]"
          style={{
            filter: darkMode ? "brightness(0) invert(1)" : "brightness(0)",
          }}
        />
        <div>
          <div 
            style={{ color: text }}
            className="text-base sm:text-lg md:text-xl font-black tracking-tight leading-none transition-colors"
          >
            InstantClass
          </div>
          <div style={{ color: mutedText }} className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider mt-0.5 hidden xs:block">
            Fracture Classification Hub
          </div>
        </div>
      </div>

      {/* Search bar - Desktop only */}
      <div className="hidden md:block flex-1 max-w-xs md:max-w-sm relative">
        <Search
          size={13}
          style={{ color: mutedText }}
          className="absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none"
        />
        <input
          type="text"
          value={searchQuery}
          onChange={e => onSearchChange(e.target.value)}
          onBlur={() => setTimeout(() => onSearchChange(""), 150)}
          placeholder={language === "en" ? "Search..." : "ค้นหา..."}
          style={{
            background: darkMode ? "#1C2333" : "#F8FAFC",
            border: `1px solid ${borderColor}`,
            color: text,
            boxShadow: darkMode ? "none" : "0 1px 3px rgba(0,0,0,0.03)",
          }}
          className="w-full pl-8 pr-3 py-1.5 md:py-2 rounded-xl text-xs md:text-[13px] outline-none focus:border-[#00CED1] transition-all font-medium"
        />
        {/* Dropdown results */}
        {filtered.length > 0 && (
          <div
            style={{ background: bg, border: `1px solid ${borderColor}` }}
            className="absolute top-full left-0 right-0 mt-1 rounded-xl shadow-xl z-50 overflow-hidden"
          >
            {filtered.slice(0, 6).map(bone => (
              <button
                key={bone.id}
                onClick={() => { onSelectBone(bone.id); onSearchChange(""); }}
                style={{ color: text }}
                className="w-full text-left px-3.5 py-2 text-xs md:text-[13px] hover:bg-[rgba(0,206,209,0.08)] transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span className="font-bold">{bone.name[language]}</span>
                <span style={{ color: darkMode ? "#94A3B8" : "#475569" }} className="text-[10px] md:text-[11px] font-medium">
                  {bone.regions[0]?.classifications[0]?.system}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Category pills - Desktop & Tablet */}
      <nav className="hidden lg:flex items-center gap-1.5 flex-shrink-0">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            style={{
              background: activeCategory === cat.id
                ? (darkMode ? "rgba(0,206,209,0.15)" : "#0F766E")
                : "transparent",
              color: activeCategory === cat.id ? (darkMode ? "#00CED1" : "#FFFFFF") : (darkMode ? "#94A3B8" : "#000000"),
              border: activeCategory === cat.id ? (darkMode ? "1px solid rgba(0,206,209,0.4)" : "1px solid #0F766E") : "1px solid transparent",
            }}
            className="px-3 py-1 rounded-lg text-[12px] font-bold transition-all hover:text-teal-700 dark:hover:text-[#00CED1] cursor-pointer"
          >
            {cat.label[language]}
          </button>
        ))}
      </nav>

      {/* Right controls */}
      <div className="flex items-center gap-1.5 md:gap-2 ml-auto flex-shrink-0">
        <button
          onClick={onToggleLanguage}
          style={{ border: `1px solid ${borderColor}`, color: darkMode ? "#94A3B8" : "#000000", background: "transparent" }}
          className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[11px] md:text-[12px] font-bold hover:text-[#00CED1] hover:border-[#00CED1] transition-all cursor-pointer"
        >
          <Globe size={13} />
          {language === "en" ? "TH" : "EN"}
        </button>
        <button
          onClick={onToggleDark}
          style={{ border: `1px solid ${borderColor}`, color: darkMode ? "#94A3B8" : "#000000", background: "transparent" }}
          className="w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center hover:text-[#00CED1] hover:border-[#00CED1] transition-all cursor-pointer"
        >
          {darkMode ? <Sun size={14} /> : <Moon size={14} />}
        </button>
      </div>
    </header>
  );
}
