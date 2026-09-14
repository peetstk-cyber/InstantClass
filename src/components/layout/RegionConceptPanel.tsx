import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import type { Language } from "../../App";
import type { RegionConcept, RegionConceptImage, Translation } from "../../types";
import { 
  Stethoscope, 
  Ruler, 
  AlertTriangle, 
  Link2, 
  Lightbulb, 
  ArrowLeft,
  ZoomIn,
  ZoomOut,
  BookOpen, 
  LayoutGrid,
  Film,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Layers,
  RotateCcw,
  Maximize2,
  Minimize2,
} from "lucide-react";
import { getRegionReferences } from "../../data/references";

interface RegionConceptPanelProps {
  concept: RegionConcept;
  boneName: Translation;
  regionName: Translation;
  darkMode: boolean;
  language: Language;
  onBackToList?: () => void;
  isDesktop?: boolean;
  isExpanded?: boolean;
  onToggleExpand?: () => void;
}

export function RegionConceptPanel({
  concept,
  boneName,
  regionName,
  darkMode,
  language,
  onBackToList,
  isDesktop = true,
  isExpanded = false,
  onToggleExpand,
}: RegionConceptPanelProps) {
  const bg = darkMode ? "#161B27" : "#FFFFFF";
  const border = darkMode ? "#252F42" : "#E2E8F0";
  const text = darkMode ? "#F1F5F9" : "#0F172A";
  const cardBg = darkMode ? "rgba(255,255,255,0.03)" : "#F8FAFC";
  const cardBorder = darkMode ? "rgba(255,255,255,0.07)" : "#E2E8F0";

  // ── Normalize raw images from concept ──
  // The concept panel is strictly for anatomical diagrams and clinical concepts, NOT real clinical X-rays
  const isExcludedUrl = (url: string) => {
    const lower = url.toLowerCase();
    return lower.includes("/xrays/") || lower.includes("/investigations/") || lower.endsWith("_xray.jpg") || lower.endsWith("_xray.png");
  };

  const rawImages: RegionConceptImage[] = [];
  if (concept.images && concept.images.length > 0) {
    concept.images.forEach(item => {
      if (typeof item === "string") {
        if (item.trim() && !isExcludedUrl(item)) rawImages.push({ url: item.trim() });
      } else if (item && item.url && !isExcludedUrl(item.url)) {
        rawImages.push(item);
      }
    });
  } else if (concept.imageUrls && concept.imageUrls.length > 0) {
    concept.imageUrls.forEach(url => {
      if (url && url.trim() && !isExcludedUrl(url)) rawImages.push({ url: url.trim() });
    });
  } else if (concept.imageUrl && !isExcludedUrl(concept.imageUrl)) {
    rawImages.push({ url: concept.imageUrl.trim() });
  } else {
    // Default regional concept diagram fallback
    const autoPath = `/images/concepts/anatomy_${regionName.en.toLowerCase().replace(/[^a-z0-9]/g, "_")}.png`;
    rawImages.push({ url: autoPath });
  }

  // ── Error tracking per URL ──
  const [failedUrls, setFailedUrls] = useState<Set<string>>(new Set());
  const [activeLightboxIdx, setActiveLightboxIdx] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "carousel">("grid");
  const [carouselIdx, setCarouselIdx] = useState(0);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const panStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const hasMovedRef = useRef<boolean>(false);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const initialPinchDistRef = useRef<number | null>(null);
  const initialPinchZoomRef = useRef<number>(1);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const updateZoom = (newZoom: number) => {
    const clamped = Math.min(Math.max(newZoom, 1), 3.5);
    setZoomLevel(clamped);
    if (clamped <= 1) {
      setPan({ x: 0, y: 0 });
    }
  };

  useEffect(() => {
    setFailedUrls(new Set());
    setCarouselIdx(0);
    setActiveLightboxIdx(null);
    setZoomLevel(1);
    setPan({ x: 0, y: 0 });
  }, [concept, regionName.en]);

  const handleImageError = (url: string) => {
    setFailedUrls(prev => {
      const next = new Set(prev);
      next.add(url);
      return next;
    });
  };

  const activeImages = rawImages.filter(img => !failedUrls.has(img.url));

  // Reset zoom & pan when active lightbox image changes
  useEffect(() => {
    setZoomLevel(1);
    setPan({ x: 0, y: 0 });
    setIsDragging(false);
  }, [activeLightboxIdx]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (activeLightboxIdx === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveLightboxIdx(null);
      } else if (e.key === "ArrowLeft") {
        setActiveLightboxIdx(prev => (prev === null || prev === 0 ? activeImages.length - 1 : prev - 1));
      } else if (e.key === "ArrowRight") {
        setActiveLightboxIdx(prev => (prev === null || prev === activeImages.length - 1 ? 0 : prev + 1));
      } else if (e.key === "+" || e.key === "=") {
        updateZoom(zoomLevel + 0.5);
      } else if (e.key === "-") {
        updateZoom(zoomLevel - 0.5);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightboxIdx, activeImages.length, zoomLevel]);

  const getPanLimits = () => {
    if (!stageRef.current) return { maxX: 150, maxY: 150 };
    const rect = stageRef.current.getBoundingClientRect();
    const maxX = Math.max(20, ((zoomLevel - 1) * rect.width) / 2 + 40);
    const maxY = Math.max(20, ((zoomLevel - 1) * rect.height) / 2 + 40);
    return { maxX, maxY };
  };

  // Touch handlers for mobile pan, pinch-zoom, and swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      // Pinch gesture
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      initialPinchDistRef.current = dist;
      initialPinchZoomRef.current = zoomLevel;
      setIsDragging(false);
      return;
    }

    if (e.touches.length === 1) {
      if (zoomLevel > 1) {
        dragStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        panStartRef.current = { ...pan };
        hasMovedRef.current = false;
        setIsDragging(true);
      } else {
        setTouchStartX(e.touches[0].clientX);
      }
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && initialPinchDistRef.current !== null) {
      const currentDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const scaleFactor = currentDist / initialPinchDistRef.current;
      const targetZoom = Math.min(Math.max(initialPinchZoomRef.current * scaleFactor, 1), 3.5);
      setZoomLevel(targetZoom);
      if (targetZoom <= 1) {
        setPan({ x: 0, y: 0 });
      }
      return;
    }

    if (e.touches.length === 1 && zoomLevel > 1 && isDragging) {
      const deltaX = e.touches[0].clientX - dragStartRef.current.x;
      const deltaY = e.touches[0].clientY - dragStartRef.current.y;
      if (Math.abs(deltaX) > 3 || Math.abs(deltaY) > 3) {
        hasMovedRef.current = true;
      }
      const { maxX, maxY } = getPanLimits();
      const newX = Math.max(-maxX, Math.min(maxX, panStartRef.current.x + deltaX));
      const newY = Math.max(-maxY, Math.min(maxY, panStartRef.current.y + deltaY));
      setPan({ x: newX, y: newY });
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (initialPinchDistRef.current !== null) {
      initialPinchDistRef.current = null;
      if (zoomLevel < 1.08) {
        setZoomLevel(1);
        setPan({ x: 0, y: 0 });
      }
      return;
    }

    if (isDragging) {
      setIsDragging(false);
      return;
    }

    if (zoomLevel <= 1 && touchStartX !== null) {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 45) {
        if (diff > 0) {
          // swipe left -> next
          setActiveLightboxIdx(prev => (prev === null || prev === activeImages.length - 1 ? 0 : prev + 1));
        } else {
          // swipe right -> previous
          setActiveLightboxIdx(prev => (prev === null || prev === 0 ? activeImages.length - 1 : prev - 1));
        }
      }
      setTouchStartX(null);
    }
  };

  // Mouse handlers for desktop pan
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      e.preventDefault();
      dragStartRef.current = { x: e.clientX, y: e.clientY };
      panStartRef.current = { ...pan };
      hasMovedRef.current = false;
      setIsDragging(true);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoomLevel > 1) {
      const deltaX = e.clientX - dragStartRef.current.x;
      const deltaY = e.clientY - dragStartRef.current.y;
      if (Math.abs(deltaX) > 3 || Math.abs(deltaY) > 3) {
        hasMovedRef.current = true;
      }
      const { maxX, maxY } = getPanLimits();
      const newX = Math.max(-maxX, Math.min(maxX, panStartRef.current.x + deltaX));
      const newY = Math.max(-maxY, Math.min(maxY, panStartRef.current.y + deltaY));
      setPan({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  const handleImageClick = () => {
    if (hasMovedRef.current) return;
    if (zoomLevel === 1) {
      updateZoom(2);
    } else {
      updateZoom(1);
    }
  };

  const currentLightboxImg = activeLightboxIdx !== null && activeLightboxIdx < activeImages.length 
    ? activeImages[activeLightboxIdx] 
    : null;

  const hasPhysicalExam = concept.physicalExam && concept.physicalExam.length > 0;
  const hasAlignment = concept.acceptableAlignment && concept.acceptableAlignment.length > 0;
  const hasRedFlags = concept.redFlags && concept.redFlags.length > 0;
  const hasAssociated = concept.associatedInjuries && concept.associatedInjuries.length > 0;
  const hasPearls = concept.clinicalPearls && concept.clinicalPearls.length > 0;
  const regionRefs = concept.references && concept.references.length > 0 
    ? concept.references 
    : getRegionReferences(boneName.en, regionName.en);

  return (
    <div
      style={{ background: bg, color: text }}
      className={`flex flex-col h-full w-full overflow-y-auto ${isDesktop ? "p-3.5 space-y-4" : "px-0 pt-0 pb-2 space-y-2"}`}
    >
      {/* ── Header / Title Bar ── */}
      <div>
        {onBackToList && (
          <button
            onClick={onBackToList}
            className="flex items-center gap-1.5 text-xs font-semibold mb-2 text-teal-800 dark:text-[#00CED1] hover:underline cursor-pointer group transition-all"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            <span>{language === "en" ? "All Bones" : "กระดูกทั้งหมด"}</span>
          </button>
        )}

        <div className={`flex items-center justify-between gap-2 border-b ${isDesktop ? "pb-2.5" : "pb-1.5"}`} style={{ borderColor: border }}>
          <div>
            <div className="text-[10.5px] font-bold uppercase tracking-wider text-teal-800 dark:text-[#00CED1] leading-none mb-0.5">
              {boneName[language]}
            </div>
            <h2 className="text-sm md:text-base font-extrabold tracking-tight leading-tight" style={{ color: text, margin: 0 }}>
              {regionName[language]} Concept
            </h2>
          </div>
          {isDesktop && onToggleExpand ? (
            <button
              type="button"
              onClick={onToggleExpand}
              title={
                isExpanded
                  ? (language === "en" ? "Collapse to standard width (340px)" : "ย่อกลับขนาดปกติ (340px)")
                  : (language === "en" ? "Extend sidebar width (540px)" : "ขยายความกว้างแท็บซ้าย (540px)")
              }
              className="flex items-center gap-1.5 text-[10.5px] font-bold px-2.5 py-1 rounded-full transition-all duration-200 cursor-pointer shadow-xs active:scale-95 bg-teal-600/15 dark:bg-[#00CED1]/15 text-teal-900 dark:text-[#00CED1] border border-teal-600/30 dark:border-[#00CED1]/30 hover:bg-teal-600/25 dark:hover:bg-[#00CED1]/25"
            >
              <span>{isExpanded ? (language === "en" ? "Collapse" : "ย่อ") : (language === "en" ? "Extend" : "ขยาย")}</span>
              {isExpanded ? <Minimize2 size={12} /> : <Maximize2 size={12} />}
            </button>
          ) : (
            <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-teal-600/15 dark:bg-[#00CED1]/15 text-teal-900 dark:text-[#00CED1] border border-teal-600/30 dark:border-[#00CED1]/30">
              Clinical Guide
            </span>
          )}
        </div>
      </div>

      {/* ── Anatomy Concept Gallery View (Adapts dynamically to image count) ── */}
      {activeImages.length > 0 && (
        <div className="flex flex-col gap-1.5 w-full flex-shrink-0">
          {/* Gallery View Header (Show counter and view mode toggle if 2+ images) */}
          {activeImages.length > 1 && (
            <div className="flex items-center justify-between px-0.5 text-xs">
              <span className="font-bold flex items-center gap-1.5 text-slate-700 dark:text-slate-300 text-[11px]">
                <Layers size={13} className="text-teal-700 dark:text-[#00CED1]" />
                <span>{activeImages.length} {language === "en" ? "Images & Diagrams" : "ภาพประกอบ"}</span>
              </span>
              <div 
                className="flex items-center gap-0.5 p-0.5 rounded-lg border bg-slate-100 dark:bg-slate-800/80" 
                style={{ borderColor: border }}
              >
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  title={language === "en" ? "Grid View" : "มุมมองตาราง"}
                  className={`p-1 rounded-md transition-all cursor-pointer ${
                    viewMode === "grid" 
                      ? "bg-white dark:bg-slate-700 text-teal-700 dark:text-[#00CED1] shadow-xs font-bold" 
                      : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                  }`}
                >
                  <LayoutGrid size={13} />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("carousel")}
                  title={language === "en" ? "Slideshow View" : "มุมมองสไลด์"}
                  className={`p-1 rounded-md transition-all cursor-pointer ${
                    viewMode === "carousel" 
                      ? "bg-white dark:bg-slate-700 text-teal-700 dark:text-[#00CED1] shadow-xs font-bold" 
                      : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                  }`}
                >
                  <Film size={13} />
                </button>
              </div>
            </div>
          )}

          {/* ── Carousel View (When toggled on for multi-image concepts) ── */}
          {viewMode === "carousel" && activeImages.length > 1 ? (
            <div 
              style={{ borderColor: cardBorder }}
              className="rounded-2xl border p-2 flex flex-col items-center justify-center relative overflow-hidden bg-white dark:bg-slate-900/40 shadow-xs group"
            >
              <div 
                className="relative w-full aspect-4/3 flex items-center justify-center overflow-hidden cursor-pointer"
                onClick={() => setActiveLightboxIdx(carouselIdx)}
              >
                <img
                  src={activeImages[carouselIdx].url}
                  alt={activeImages[carouselIdx].title?.[language] || `${regionName[language]} Anatomy ${carouselIdx + 1}`}
                  className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-[1.02] rounded-lg"
                  onError={() => handleImageError(activeImages[carouselIdx].url)}
                />
                <div className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/60 hover:bg-black/85 text-white opacity-85 group-hover:opacity-100 transition-opacity">
                  <ZoomIn size={13} />
                </div>
                {activeImages[carouselIdx].title && (
                  <div className="absolute bottom-2 left-2 right-2 px-2 py-1 rounded-md bg-black/65 backdrop-blur-xs text-white text-[11px] font-semibold truncate text-center">
                    {activeImages[carouselIdx].title[language]}
                  </div>
                )}
              </div>

              {/* Chevrons */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setCarouselIdx(prev => (prev === 0 ? activeImages.length - 1 : prev - 1));
                }}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 hover:bg-black/85 text-white transition-all cursor-pointer shadow backdrop-blur-xs"
              >
                <ChevronLeft size={14} />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setCarouselIdx(prev => (prev === activeImages.length - 1 ? 0 : prev + 1));
                }}
                aria-label="Next image"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 hover:bg-black/85 text-white transition-all cursor-pointer shadow backdrop-blur-xs"
              >
                <ChevronRight size={14} />
              </button>

              {/* Carousel Footer (Dots & Counter) */}
              <div className="flex items-center justify-between w-full mt-2 px-1 pt-1.5 border-t border-slate-100 dark:border-slate-800/80">
                <div className="flex items-center gap-1">
                  {activeImages.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      type="button"
                      onClick={() => setCarouselIdx(dotIdx)}
                      aria-label={`Slide ${dotIdx + 1}`}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        dotIdx === carouselIdx
                          ? "w-4 bg-teal-600 dark:bg-[#00CED1]"
                          : "w-1.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[10px] font-extrabold text-slate-500 dark:text-slate-400">
                  {carouselIdx + 1} / {activeImages.length}
                </span>
              </div>
            </div>
          ) : (
            /* ── Adaptive Grid Views based on image count ── */
            <>
              {/* 1 Image: Full Hero Card */}
              {activeImages.length === 1 && (
                <div
                  style={{ borderColor: cardBorder }}
                  className="rounded-2xl border p-2 flex flex-col items-center justify-center relative overflow-hidden bg-white dark:bg-slate-900/40 shadow-xs group cursor-pointer transition-all hover:border-teal-600/50 dark:hover:border-[#00CED1]/50 w-full"
                  onClick={() => setActiveLightboxIdx(0)}
                >
                  <div className="relative w-full aspect-4/3 flex items-center justify-center overflow-hidden">
                    <img
                      src={activeImages[0].url}
                      alt={activeImages[0].title?.[language] || `${regionName[language]} Anatomy`}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.02] rounded-lg"
                      onError={() => handleImageError(activeImages[0].url)}
                    />
                    <div className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/60 text-white opacity-85 group-hover:opacity-100 transition-opacity flex items-center justify-center shadow backdrop-blur-xs">
                      <ZoomIn size={14} />
                    </div>
                    {activeImages[0].title && (
                      <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1 rounded-md bg-black/65 backdrop-blur-xs text-white text-[11px] font-semibold truncate text-center">
                        {activeImages[0].title[language]}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* 2 Images: 2-Column Side-by-Side */}
              {activeImages.length === 2 && (
                <div className="grid grid-cols-2 gap-2 w-full">
                  {activeImages.map((img, idx) => (
                    <div
                      key={img.url}
                      style={{ borderColor: cardBorder }}
                      className="rounded-xl border p-1.5 flex flex-col items-center justify-center relative overflow-hidden bg-white dark:bg-slate-900/40 shadow-xs group cursor-pointer transition-all hover:border-teal-600/50 dark:hover:border-[#00CED1]/50"
                      onClick={() => setActiveLightboxIdx(idx)}
                    >
                      <div className="relative w-full aspect-square flex items-center justify-center overflow-hidden">
                        <img
                          src={img.url}
                          alt={img.title?.[language] || `${regionName[language]} ${idx + 1}`}
                          className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-105 rounded-md"
                          onError={() => handleImageError(img.url)}
                        />
                        <span className="absolute top-1 left-1 text-[9px] font-bold px-1.5 py-0.5 rounded bg-black/60 text-white backdrop-blur-xs">
                          {idx + 1}
                        </span>
                        <div className="absolute top-1 right-1 p-1 rounded bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                          <ZoomIn size={11} />
                        </div>
                        {img.title && (
                          <div className="absolute bottom-1 left-1 right-1 px-1 py-0.5 rounded bg-black/65 text-white text-[10px] font-semibold truncate text-center backdrop-blur-xs">
                            {img.title[language]}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* 3 Images: Asymmetric Editorial Grid (1 Large Hero + 2 Stacked/Side Sub-cards) */}
              {activeImages.length === 3 && (
                <div className="grid grid-cols-2 gap-2 w-full">
                  {/* Hero Item across full width */}
                  <div
                    style={{ borderColor: cardBorder }}
                    className="col-span-2 rounded-xl border p-1.5 flex flex-col items-center justify-center relative overflow-hidden bg-white dark:bg-slate-900/40 shadow-xs group cursor-pointer transition-all hover:border-teal-600/50 dark:hover:border-[#00CED1]/50"
                    onClick={() => setActiveLightboxIdx(0)}
                  >
                    <div className="relative w-full aspect-16/10 flex items-center justify-center overflow-hidden">
                      <img
                        src={activeImages[0].url}
                        alt={activeImages[0].title?.[language] || `${regionName[language]} 1`}
                        className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-[1.02] rounded-md"
                        onError={() => handleImageError(activeImages[0].url)}
                      />
                      <span className="absolute top-1.5 left-1.5 text-[9px] font-bold px-1.5 py-0.5 rounded bg-black/60 text-white backdrop-blur-xs">
                        1
                      </span>
                      <div className="absolute top-1.5 right-1.5 p-1 rounded bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <ZoomIn size={12} />
                      </div>
                      {activeImages[0].title && (
                        <div className="absolute bottom-1.5 left-2 right-2 px-2 py-0.5 rounded bg-black/65 text-white text-[11px] font-semibold truncate text-center backdrop-blur-xs">
                          {activeImages[0].title[language]}
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Bottom 2 sub-cards */}
                  {activeImages.slice(1, 3).map((img, idx) => (
                    <div
                      key={img.url}
                      style={{ borderColor: cardBorder }}
                      className="col-span-1 rounded-xl border p-1.5 flex flex-col items-center justify-center relative overflow-hidden bg-white dark:bg-slate-900/40 shadow-xs group cursor-pointer transition-all hover:border-teal-600/50 dark:hover:border-[#00CED1]/50"
                      onClick={() => setActiveLightboxIdx(idx + 1)}
                    >
                      <div className="relative w-full aspect-square flex items-center justify-center overflow-hidden">
                        <img
                          src={img.url}
                          alt={img.title?.[language] || `${regionName[language]} ${idx + 2}`}
                          className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-105 rounded-md"
                          onError={() => handleImageError(img.url)}
                        />
                        <span className="absolute top-1 left-1 text-[9px] font-bold px-1.5 py-0.5 rounded bg-black/60 text-white backdrop-blur-xs">
                          {idx + 2}
                        </span>
                        <div className="absolute top-1 right-1 p-1 rounded bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                          <ZoomIn size={11} />
                        </div>
                        {img.title && (
                          <div className="absolute bottom-1 left-1 right-1 px-1 py-0.5 rounded bg-black/65 text-white text-[10px] font-semibold truncate text-center backdrop-blur-xs">
                            {img.title[language]}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* 4 Images: Balanced 2x2 Grid */}
              {activeImages.length === 4 && (
                <div className="grid grid-cols-2 gap-2 w-full">
                  {activeImages.map((img, idx) => (
                    <div
                      key={img.url}
                      style={{ borderColor: cardBorder }}
                      className="rounded-xl border p-1.5 flex flex-col items-center justify-center relative overflow-hidden bg-white dark:bg-slate-900/40 shadow-xs group cursor-pointer transition-all hover:border-teal-600/50 dark:hover:border-[#00CED1]/50"
                      onClick={() => setActiveLightboxIdx(idx)}
                    >
                      <div className="relative w-full aspect-square flex items-center justify-center overflow-hidden">
                        <img
                          src={img.url}
                          alt={img.title?.[language] || `${regionName[language]} ${idx + 1}`}
                          className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-105 rounded-md"
                          onError={() => handleImageError(img.url)}
                        />
                        <span className="absolute top-1 left-1 text-[9px] font-bold px-1.5 py-0.5 rounded bg-black/60 text-white backdrop-blur-xs">
                          {idx + 1}
                        </span>
                        <div className="absolute top-1 right-1 p-1 rounded bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                          <ZoomIn size={11} />
                        </div>
                        {img.title && (
                          <div className="absolute bottom-1 left-1 right-1 px-1 py-0.5 rounded bg-black/65 text-white text-[10px] font-semibold truncate text-center backdrop-blur-xs">
                            {img.title[language]}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* 5+ Images: 2x2 Grid with +N Overlay on 4th slot */}
              {activeImages.length >= 5 && (
                <div className="grid grid-cols-2 gap-2 w-full">
                  {activeImages.slice(0, 3).map((img, idx) => (
                    <div
                      key={img.url}
                      style={{ borderColor: cardBorder }}
                      className="rounded-xl border p-1.5 flex flex-col items-center justify-center relative overflow-hidden bg-white dark:bg-slate-900/40 shadow-xs group cursor-pointer transition-all hover:border-teal-600/50 dark:hover:border-[#00CED1]/50"
                      onClick={() => setActiveLightboxIdx(idx)}
                    >
                      <div className="relative w-full aspect-square flex items-center justify-center overflow-hidden">
                        <img
                          src={img.url}
                          alt={img.title?.[language] || `${regionName[language]} ${idx + 1}`}
                          className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-105 rounded-md"
                          onError={() => handleImageError(img.url)}
                        />
                        <span className="absolute top-1 left-1 text-[9px] font-bold px-1.5 py-0.5 rounded bg-black/60 text-white backdrop-blur-xs">
                          {idx + 1}
                        </span>
                        <div className="absolute top-1 right-1 p-1 rounded bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                          <ZoomIn size={11} />
                        </div>
                        {img.title && (
                          <div className="absolute bottom-1 left-1 right-1 px-1 py-0.5 rounded bg-black/65 text-white text-[10px] font-semibold truncate text-center backdrop-blur-xs">
                            {img.title[language]}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}

                  {/* 4th slot with +N badge */}
                  <div
                    style={{ borderColor: cardBorder }}
                    className="rounded-xl border p-1.5 flex flex-col items-center justify-center relative overflow-hidden bg-white dark:bg-slate-900/40 shadow-xs group cursor-pointer transition-all hover:border-teal-600/50 dark:hover:border-[#00CED1]/50"
                    onClick={() => setActiveLightboxIdx(3)}
                  >
                    <div className="relative w-full aspect-square flex items-center justify-center overflow-hidden rounded-md">
                      <img
                        src={activeImages[3].url}
                        alt={`${regionName[language]} 4`}
                        className="w-full h-full object-contain blur-[1px]"
                        onError={() => handleImageError(activeImages[3].url)}
                      />
                      <div className="absolute inset-0 bg-black/65 backdrop-blur-[2px] flex flex-col items-center justify-center text-white transition-all group-hover:bg-black/75">
                        <Layers size={18} className="mb-0.5 text-teal-300 dark:text-[#00CED1]" />
                        <span className="text-xs font-extrabold tracking-wide">
                          +{activeImages.length - 3} {language === "en" ? "more" : "ภาพ"}
                        </span>
                        <span className="text-[10px] text-slate-300 font-medium">
                          {language === "en" ? "View all" : "ดูทั้งหมด"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      )}

      {/* ── Fullscreen Lightbox Gallery Modal (Rendered at top-level body) ── */}
      {activeLightboxIdx !== null && currentLightboxImg && typeof document !== "undefined" && createPortal(
        <div 
          style={{
            position: "fixed", 
            inset: 0,
            background: "rgba(0,0,0,0.92)",
            backdropFilter: "blur(8px)",
            zIndex: 999999,
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            padding: "8px 6px",
            animation: "fadeIn 0.2s ease"
          }}
          onClick={() => setActiveLightboxIdx(null)}
        >
          <div 
            style={{
              background: darkMode ? "#111622" : "#FFFFFF",
              borderRadius: 16,
              padding: "10px 10px 12px 10px",
              width: "100%",
              maxWidth: 880,
              maxHeight: "96vh",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 25px 70px rgba(0,0,0,0.85)",
              position: "relative",
              border: `1px solid ${darkMode ? "rgba(255,255,255,0.12)" : "#CBD5E1"}`,
              animation: "scaleIn 0.22s cubic-bezier(0.16,1,0.3,1)",
              overflowY: "auto",
              overscrollBehavior: "contain"
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="w-full flex items-center justify-between mb-2 pb-1.5 border-b" style={{ borderColor: border }}>
              <div className="flex items-center gap-1.5 overflow-hidden pr-1 min-w-0">
                <span className="font-extrabold text-xs sm:text-sm truncate" style={{ color: text }}>
                  {regionName[language]} — {currentLightboxImg.title ? currentLightboxImg.title[language] : (language === "en" ? `Diagram ${activeLightboxIdx + 1}` : `ภาพประกอบที่ ${activeLightboxIdx + 1}`)}
                </span>
                {activeImages.length > 1 && (
                  <span className="text-[10px] sm:text-[11px] font-bold px-1.5 py-0.2 rounded-full bg-teal-600/15 dark:bg-[#00CED1]/15 text-teal-800 dark:text-[#00CED1] border border-teal-600/30 dark:border-[#00CED1]/30 flex-shrink-0">
                    {activeLightboxIdx + 1} / {activeImages.length}
                  </span>
                )}
              </div>

              {/* Action Controls */}
              <div className="flex items-center gap-1 flex-shrink-0">
                <button 
                  type="button"
                  onClick={() => updateZoom(zoomLevel - 0.5)}
                  title={language === "en" ? "Zoom Out (-)" : "ย่อขนาด (-)"}
                  disabled={zoomLevel <= 1}
                  className="p-1 sm:p-1.5 rounded-lg border bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-30 cursor-pointer transition-colors"
                  style={{ borderColor: border }}
                >
                  <ZoomOut size={14} style={{ color: text }} />
                </button>
                <button 
                  type="button"
                  onClick={() => updateZoom(zoomLevel + 0.5)}
                  title={language === "en" ? "Zoom In (+)" : "ขยายขนาด (+)"}
                  disabled={zoomLevel >= 3.5}
                  className="p-1 sm:p-1.5 rounded-lg border bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-30 cursor-pointer transition-colors"
                  style={{ borderColor: border }}
                >
                  <ZoomIn size={14} style={{ color: text }} />
                </button>
                {zoomLevel > 1 && (
                  <button 
                    type="button"
                    onClick={() => updateZoom(1)}
                    title={language === "en" ? "Reset Zoom" : "รีเซ็ตขนาด"}
                    className="p-1 sm:p-1.5 rounded-lg border bg-teal-50 dark:bg-teal-900/30 border-teal-500/40 text-teal-700 dark:text-[#00CED1] cursor-pointer transition-colors"
                  >
                    <RotateCcw size={14} />
                  </button>
                )}
                <button 
                  type="button"
                  onClick={() => setActiveLightboxIdx(null)}
                  className="text-slate-700 bg-slate-200 hover:bg-slate-300 dark:text-slate-300 dark:hover:text-white text-xs font-bold px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-lg dark:bg-slate-800 dark:hover:bg-slate-700 cursor-pointer transition-colors shadow-xs ml-0.5"
                >
                  ✕ <span>{language === "en" ? "Close" : "ปิด"}</span>
                </button>
              </div>
            </div>

            {/* Main Image Stage */}
            <div 
              ref={stageRef}
              className="w-full relative flex items-center justify-center rounded-xl bg-slate-950/25 dark:bg-black/60 overflow-hidden select-none"
              style={{ 
                height: "56vh", 
                minHeight: 300, 
                maxHeight: "68vh",
                touchAction: zoomLevel > 1 ? "none" : "pan-y"
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <div 
                className="w-full h-full flex items-center justify-center overflow-hidden"
                onClick={handleImageClick}
              >
                <img 
                  src={currentLightboxImg.url} 
                  alt={currentLightboxImg.title?.[language] || regionName.en} 
                  draggable={false}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                    transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoomLevel})`,
                    transformOrigin: "center center",
                    transition: isDragging ? "none" : "transform 0.2s cubic-bezier(0.16,1,0.3,1)",
                    cursor: zoomLevel > 1 ? (isDragging ? "grabbing" : "grab") : "zoom-in",
                  }}
                  className="select-none pointer-events-auto"
                />
              </div>

              {/* Floating Zoom & Pan indicator when zoomed */}
              {zoomLevel > 1 && (
                <div className="absolute top-2 left-2 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-[11px] font-semibold shadow-lg border border-white/10 pointer-events-none">
                  <span className="text-teal-400 font-bold">{Math.round(zoomLevel * 10) / 10}x</span>
                  <span>•</span>
                  <span>{language === "en" ? "Drag to pan" : "เลื่อนดูได้อิสระ"}</span>
                </div>
              )}

              {/* Navigation arrows (prev/next) */}
              {activeImages.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveLightboxIdx(prev => (prev === null || prev === 0 ? activeImages.length - 1 : prev - 1));
                    }}
                    title={language === "en" ? "Previous Image (←)" : "ภาพก่อนหน้า (←)"}
                    aria-label="Previous image"
                    className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-black/60 hover:bg-black/85 text-white transition-all cursor-pointer shadow-md backdrop-blur-xs z-10"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveLightboxIdx(prev => (prev === null || prev === activeImages.length - 1 ? 0 : prev + 1));
                    }}
                    title={language === "en" ? "Next Image (→)" : "ภาพถัดไป (→)"}
                    aria-label="Next image"
                    className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-black/60 hover:bg-black/85 text-white transition-all cursor-pointer shadow-md backdrop-blur-xs z-10"
                  >
                    <ChevronRight size={18} />
                  </button>
                </>
              )}
            </div>

            {/* Caption bar if provided */}
            {currentLightboxImg.caption && (
              <div 
                className="w-full mt-2 px-3 py-1.5 rounded-lg text-xs leading-relaxed border"
                style={{ 
                  background: darkMode ? "rgba(0,206,209,0.06)" : "rgba(15,118,110,0.06)",
                  borderColor: darkMode ? "rgba(0,206,209,0.2)" : "rgba(15,118,110,0.2)",
                  color: text
                }}
              >
                <div className="font-bold text-teal-800 dark:text-[#00CED1] mb-0.5 text-[11px] sm:text-xs">
                  {currentLightboxImg.title ? currentLightboxImg.title[language] : (language === "en" ? "Clinical Note" : "คำอธิบายภาพ")}
                </div>
                <div className="text-[10.5px] sm:text-xs leading-snug">{currentLightboxImg.caption[language]}</div>
              </div>
            )}

            {/* Thumbnail Navigation Strip */}
            {activeImages.length > 1 && (
              <div 
                className="w-full flex items-center justify-center gap-1.5 mt-2 pt-1.5 border-t overflow-x-auto no-scrollbar" 
                style={{ borderColor: border }}
              >
                {activeImages.map((img, thumbIdx) => (
                  <button
                    key={img.url}
                    type="button"
                    onClick={() => {
                      setActiveLightboxIdx(thumbIdx);
                      updateZoom(1);
                    }}
                    style={{
                      width: 44,
                      height: 44,
                      borderColor: thumbIdx === activeLightboxIdx ? (darkMode ? "#00CED1" : "#0F766E") : border,
                      borderWidth: thumbIdx === activeLightboxIdx ? 2 : 1
                    }}
                    className={`rounded-lg overflow-hidden flex-shrink-0 bg-white dark:bg-slate-900 transition-all cursor-pointer p-0.5 relative ${
                      thumbIdx === activeLightboxIdx 
                        ? "ring-2 ring-teal-500/50 scale-105" 
                        : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img 
                      src={img.url} 
                      alt={`thumb ${thumbIdx + 1}`} 
                      className="w-full h-full object-contain rounded"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>,
        document.body
      )}

      {/* ── 1. Physical Exam ── */}
      {hasPhysicalExam && (
        <section className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800 dark:text-[#00CED1]">
            <Stethoscope size={15} />
            <span>{language === "en" ? "Physical Exam Signs" : "การตรวจร่างกายที่สำคัญ"}</span>
          </div>

          <div className="space-y-2">
            {concept.physicalExam!.map((item, idx) => (
              <div
                key={idx}
                style={{ background: cardBg, borderColor: cardBorder }}
                className="p-3 rounded-xl border text-xs space-y-1 transition-all hover:border-teal-600/40 dark:hover:border-[#00CED1]/40"
              >
                <div style={{ color: text }} className="font-bold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-700 dark:bg-[#00CED1]" />
                  <span>{item.sign}</span>
                </div>
                <div style={{ color: text }} className="text-[11.5px] leading-relaxed pl-3.5 font-medium">
                  <span className="font-bold text-teal-800 dark:text-[#00CED1]">Positive: </span>
                  {item.positive[language]}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── 2. Acceptable Alignment (Table) ── */}
      {hasAlignment && (
        <section className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
            <Ruler size={15} />
            <span>{language === "en" ? "Acceptable Alignment" : "เกณฑ์มุมเอียงที่ยอมรับได้"}</span>
          </div>

          <div
            style={{ background: cardBg, borderColor: cardBorder }}
            className="rounded-xl border overflow-hidden text-xs shadow-xs"
          >
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100/80 dark:bg-slate-800/80 text-[10.5px] font-extrabold uppercase tracking-wider border-b" style={{ borderColor: cardBorder, color: text }}>
                  <th className="p-2 pl-2.5">{language === "en" ? "Parameter" : "ตัวแปร"}</th>
                  <th className="p-2 text-center">{language === "en" ? "Limit" : "เกณฑ์"}</th>
                </tr>
              </thead>
              <tbody className="divide-y" style={{ borderColor: cardBorder }}>
                {concept.acceptableAlignment!.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="p-2 pl-2.5 font-bold" style={{ color: text }}>
                      <div>{row.parameter[language]}</div>
                      {row.note && (
                        <div className="text-[10px] mt-0.5 font-medium opacity-80" style={{ color: text }}>
                          {row.note[language]}
                        </div>
                      )}
                    </td>
                    <td className="p-2 text-center font-extrabold text-sky-600 dark:text-sky-400 whitespace-nowrap">
                      {row.threshold}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* ── 3. Red Flags ── */}
      {hasRedFlags && (
        <section className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
            <AlertTriangle size={15} />
            <span>{language === "en" ? "Red Flags / Complications" : "ข้อควรระวังอันตราย (Red Flags)"}</span>
          </div>

          <div 
            style={{ 
              background: cardBg, 
              borderColor: darkMode ? "rgba(244,63,94,0.3)" : "rgba(244,63,94,0.35)" 
            }}
            className="p-3 rounded-xl border text-xs space-y-2"
          >
            {concept.redFlags!.map((flag, idx) => (
              <div key={idx} className="flex items-start gap-2.5 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-600 dark:bg-rose-400 flex-shrink-0 mt-1.5" />
                <span style={{ color: text }} className="font-semibold text-[11.5px] leading-relaxed">
                  {flag[language]}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── 4. Associated Injuries ── */}
      {hasAssociated && (
        <section className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            <Link2 size={15} />
            <span>{language === "en" ? "Associated Injuries" : "การบาดเจ็บร่วมที่ต้องตรวจหา"}</span>
          </div>

          <div className="space-y-1.5">
            {concept.associatedInjuries!.map((assoc, idx) => (
              <div
                key={idx}
                style={{ background: cardBg, borderColor: cardBorder }}
                className="p-3 rounded-xl border text-xs flex items-start gap-2.5"
              >
                <span className="text-amber-600 dark:text-amber-400 font-bold flex-shrink-0 mt-0.5">⚡</span>
                <div>
                  <div style={{ color: text }} className="font-extrabold">
                    {assoc.injury[language]}
                  </div>
                  {assoc.trigger && (
                    <div style={{ color: text }} className="text-[11px] mt-0.5 font-medium opacity-90">
                      <span className="text-amber-600 dark:text-amber-400 font-bold">Trigger: </span>
                      {assoc.trigger[language]}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── 5. Clinical Pearls ── */}
      {hasPearls && (
        <section className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            <Lightbulb size={15} />
            <span>{language === "en" ? "Clinical Pearls" : "ข้อควรจำทางคลินิก (Pearls)"}</span>
          </div>

          <div 
            style={{ 
              background: cardBg, 
              borderColor: darkMode ? "rgba(16,185,129,0.3)" : "rgba(16,185,129,0.35)" 
            }}
            className="p-3 rounded-xl border text-xs space-y-2.5"
          >
            {concept.clinicalPearls!.map((pearl, idx) => (
              <div key={idx} className="flex items-start gap-2.5 leading-relaxed">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold flex-shrink-0 mt-0.5 text-xs">💎</span>
                <span style={{ color: text }} className="font-semibold text-[11.5px] leading-relaxed">
                  {pearl[language]}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── 6. References (Collapsible & Concise) ── */}
      {regionRefs && regionRefs.length > 0 && (
        <details className="group pt-2 border-t" style={{ borderColor: border }}>
          <summary className="flex items-center justify-between cursor-pointer list-none py-1.5 text-xs font-bold text-slate-600 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 select-none transition-colors">
            <div className="flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
              <BookOpen size={13} className="text-teal-700 dark:text-[#00CED1]" />
              <span>{language === "en" ? "References" : "แหล่งอ้างอิง"}</span>
            </div>
            <ChevronDown size={14} className="group-open:rotate-180 transition-transform duration-200 text-slate-400" />
          </summary>

          <div className="space-y-1.5 pt-2 pb-1">
            {regionRefs.map((ref, idx) => (
              <div 
                key={idx} 
                style={{ background: darkMode ? "rgba(255,255,255,0.03)" : "#F8FAFC", borderColor: cardBorder }}
                className="p-2 rounded-lg border text-[11px] space-y-0.5"
              >
                <div className="flex items-center gap-1.5 font-extrabold text-slate-800 dark:text-slate-200">
                  <span className="px-1.5 py-0.2 rounded text-[9.5px] uppercase tracking-wide bg-teal-600/15 dark:bg-[#00CED1]/15 text-teal-800 dark:text-[#00CED1] border border-teal-600/30 dark:border-[#00CED1]/30 flex-shrink-0">
                    {ref.textbook}
                  </span>
                  <span className="truncate">{ref.title}</span>
                </div>
                {ref.chapter && (
                  <div className="text-[10.5px] font-medium text-slate-600 dark:text-slate-400 pl-0.5">
                    📖 {ref.chapter}
                  </div>
                )}
              </div>
            ))}
          </div>
        </details>
      )}
    </div>
  );
}
