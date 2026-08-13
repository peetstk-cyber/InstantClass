import React, { useState, useRef, useEffect } from "react";
import type { BoneData } from "../../types";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  bones: BoneData[];
  language: "en" | "th";
  t: (key: string) => string;
  onSelectBone: (id: string, regionId?: string) => void;
}

interface SearchSuggestion {
  boneId: string;
  regionId?: string;
  title: string;
  subtitle: string;
  type: "bone" | "region" | "system";
}

export const SearchBar: React.FC<SearchBarProps> = ({
  bones,
  language,
  t,
  onSelectBone,
}) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Update search suggestions based on query
  useEffect(() => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }

    const cleanQuery = query.toLowerCase().trim();
    const matches: SearchSuggestion[] = [];

    bones.forEach((bone) => {
      const boneNameEn = bone.name.en.toLowerCase();
      const boneNameTh = bone.name.th.toLowerCase();
      const boneDescEn = bone.description.en.toLowerCase();
      const boneDescTh = bone.description.th.toLowerCase();

      // Check bone name or description matches
      if (
        boneNameEn.includes(cleanQuery) ||
        boneNameTh.includes(cleanQuery) ||
        boneDescEn.includes(cleanQuery) ||
        boneDescTh.includes(cleanQuery)
      ) {
        matches.push({
          boneId: bone.id,
          regionId: bone.regions[0]?.id,
          title: bone.name[language],
          subtitle: language === "en" ? "Anatomy Structure" : "โครงสร้างกายวิภาค",
          type: "bone",
        });
      }

      // Check regions and classifications
      bone.regions.forEach((reg) => {
        const regNameEn = reg.name.en.toLowerCase();
        const regNameTh = reg.name.th.toLowerCase();

        if (regNameEn.includes(cleanQuery) || regNameTh.includes(cleanQuery)) {
          matches.push({
            boneId: bone.id,
            regionId: reg.id,
            title: `${bone.name[language]} - ${reg.name[language]}`,
            subtitle: language === "en" ? "Anatomical Region" : "ส่วนประกอบกายวิภาคย่อย",
            type: "region",
          });
        }

        reg.classifications.forEach((sys) => {
          const sysName = sys.system.toLowerCase();
          const sysFullEn = sys.fullName.en.toLowerCase();
          const sysFullTh = sys.fullName.th.toLowerCase();

          if (
            sysName.includes(cleanQuery) ||
            sysFullEn.includes(cleanQuery) ||
            sysFullTh.includes(cleanQuery)
          ) {
            matches.push({
              boneId: bone.id,
              regionId: reg.id,
              title: sys.fullName[language],
              subtitle: `${bone.name[language]} - ${reg.name[language]} (${sys.system})`,
              type: "system",
            });
          }
        });
      });
    });

    // Deduplicate and limit to 5 results
    const uniqueMatches = matches.filter(
      (v, i, a) => a.findIndex((t) => t.title === v.title && t.boneId === v.boneId && t.regionId === v.regionId) === i
    );
    setSuggestions(uniqueMatches.slice(0, 5));
  }, [query, bones, language]);

  const handleSelect = (boneId: string, regionId?: string) => {
    onSelectBone(boneId, regionId);
    setQuery("");
    setShowDropdown(false);
  };

  const handleClear = () => {
    setQuery("");
    setSuggestions([]);
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-md">
      <div className="relative flex items-center">
        <Search className="absolute left-3 w-4 h-4 text-clinical-muted" />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowDropdown(true);
          }}
          onFocus={() => setShowDropdown(true)}
          placeholder={t("searchPlaceholder")}
          className="w-full pl-10 pr-10 py-2.5 bg-clinical-card/80 border border-clinical-border rounded-xl text-sm text-slate-100 placeholder-clinical-muted focus:outline-none focus:border-clinical-primary focus:shadow-glow-blue/20 transition-all"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 p-0.5 rounded-full hover:bg-clinical-cardLight text-clinical-muted hover:text-slate-200 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Autocomplete Dropdown */}
      {showDropdown && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1.5 z-50 bg-clinical-cardLight border border-clinical-border rounded-xl shadow-xl overflow-hidden animate-fade-in">
          {suggestions.map((suggestion, idx) => (
            <div
              key={`${suggestion.boneId}-${idx}`}
              onClick={() => handleSelect(suggestion.boneId, suggestion.regionId)}
              className="px-4 py-2.5 hover:bg-clinical-card cursor-pointer border-b border-clinical-border/40 last:border-b-0 flex flex-col transition-colors group"
            >
              <span className="text-sm font-semibold text-slate-200 group-hover:text-clinical-primary transition-colors">
                {suggestion.title}
              </span>
              <span className="text-[10px] text-clinical-muted font-medium mt-0.5">
                {suggestion.subtitle}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* No Results Info */}
      {showDropdown && query.trim() !== "" && suggestions.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-1.5 z-50 bg-clinical-cardLight border border-clinical-border rounded-xl shadow-xl p-4 text-center text-xs text-clinical-muted animate-fade-in">
          {t("noResults")}
        </div>
      )}
    </div>
  );
};
