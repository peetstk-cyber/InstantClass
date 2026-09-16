import React, { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HorizontalScrollCardRowProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  darkMode?: boolean;
  isMobile?: boolean;
  showArrows?: boolean;
  arrowTopOffset?: string;
  arrowVariant?: "circle" | "slim-rect";
  scrollStep?: number;
}

/**
 * Horizontal Scroll Container supporting:
 * - "circle": Floating circular chevrons on desktop (best for large image/illustration cards)
 * - "slim-rect": Compact slim rectangular buttons in-line with tabs (best for subregion & category pills)
 * On mobile (< 768px / isMobile), arrows are completely hidden because users navigate naturally via touch swipe.
 */
export function HorizontalScrollCardRow({
  children,
  className = "",
  style = {},
  darkMode = false,
  isMobile = false,
  showArrows = true,
  arrowTopOffset = "top-[38%]",
  arrowVariant = "circle",
  scrollStep,
}: HorizontalScrollCardRowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Do not render or calculate arrows on mobile since touch swipe is used
  const shouldShowArrows = showArrows && !isMobile;

  const checkScrollability = useCallback(() => {
    if (!shouldShowArrows) {
      setCanScrollLeft(false);
      setCanScrollRight(false);
      return;
    }

    const el = containerRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    // Only consider scrollable if real overflow exists (at least 20px, not subpixel rounding or tiny gap)
    const hasOverflow = maxScroll > 20;
    const canLeft = hasOverflow && el.scrollLeft > 8;
    const canRight = hasOverflow && Math.ceil(el.scrollLeft) < maxScroll - 8;
    setCanScrollLeft(canLeft);
    setCanScrollRight(canRight);
  }, [shouldShowArrows]);

  // Update arrow visibility on mount, scroll, resize, or children change
  useEffect(() => {
    const el = containerRef.current;
    if (!el || !shouldShowArrows) return;

    checkScrollability();

    const handleScroll = () => {
      checkScrollability();
    };

    el.addEventListener("scroll", handleScroll, { passive: true });

    const resizeObserver = new ResizeObserver(() => {
      checkScrollability();
    });
    resizeObserver.observe(el);

    return () => {
      el.removeEventListener("scroll", handleScroll);
      resizeObserver.disconnect();
    };
  }, [checkScrollability, children, shouldShowArrows]);

  const defaultStep = arrowVariant === "slim-rect" ? 140 : 220;
  const step = scrollStep || defaultStep;

  const handleScrollBy = (amount: number) => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  // ── Variant 1: Slim Rectangular (In-line with tab pills) ──
  if (arrowVariant === "slim-rect") {
    return (
      <div className="flex items-center gap-1 w-full relative">
        {/* Left Slim Rect Button (Desktop only) */}
        {shouldShowArrows && canScrollLeft && (
          <button
            type="button"
            aria-label="Scroll tabs left"
            onClick={(e) => {
              e.stopPropagation();
              handleScrollBy(-step);
            }}
            style={{
              background: darkMode ? "rgba(255, 255, 255, 0.05)" : "#F1F5F9",
              borderColor: darkMode ? "rgba(255, 255, 255, 0.15)" : "#E2E8F0",
              color: darkMode ? "#00CED1" : "#0F766E",
            }}
            className="hidden md:flex flex-shrink-0 w-6 h-[26px] rounded-lg border items-center justify-center cursor-pointer transition-all hover:opacity-80 active:scale-95 select-none"
            title="Scroll left"
          >
            <ChevronLeft size={13} className="stroke-[2.5]" />
          </button>
        )}

        {/* Scrollable Container */}
        <div
          ref={containerRef}
          className={`flex-1 min-w-0 ${className}`}
          style={style}
        >
          {children}
        </div>

        {/* Right Slim Rect Button (Desktop only) */}
        {shouldShowArrows && canScrollRight && (
          <button
            type="button"
            aria-label="Scroll tabs right"
            onClick={(e) => {
              e.stopPropagation();
              handleScrollBy(step);
            }}
            style={{
              background: darkMode ? "rgba(255, 255, 255, 0.05)" : "#F1F5F9",
              borderColor: darkMode ? "rgba(255, 255, 255, 0.15)" : "#E2E8F0",
              color: darkMode ? "#00CED1" : "#0F766E",
            }}
            className="hidden md:flex flex-shrink-0 w-6 h-[26px] rounded-lg border items-center justify-center cursor-pointer transition-all hover:opacity-80 active:scale-95 select-none"
            title="Scroll right"
          >
            <ChevronRight size={13} className="stroke-[2.5]" />
          </button>
        )}
      </div>
    );
  }

  // ── Variant 2: Circular Floating Chevrons (For classification image cards) ──
  return (
    <div className="relative group/carousel w-full">
      {/* Left Chevron Button (Desktop only) */}
      {shouldShowArrows && canScrollLeft && (
        <button
          type="button"
          aria-label="Scroll cards left"
          onClick={(e) => {
            e.stopPropagation();
            handleScrollBy(-step);
          }}
          style={{
            background: darkMode ? "rgba(22, 27, 39, 0.95)" : "rgba(255, 255, 255, 0.95)",
            borderColor: darkMode ? "rgba(0, 206, 209, 0.5)" : "rgba(15, 118, 110, 0.4)",
            color: darkMode ? "#00CED1" : "#0F766E",
            boxShadow: darkMode ? "0 4px 14px rgba(0,0,0,0.6)" : "0 4px 12px rgba(0,0,0,0.15)",
          }}
          className={`hidden md:flex absolute left-0 sm:-left-1.5 ${arrowTopOffset} -translate-y-1/2 z-20 w-7 h-7 sm:w-8 sm:h-8 rounded-full border backdrop-blur-md items-center justify-center cursor-pointer transition-all hover:scale-110 active:scale-95 shadow-md`}
        >
          <ChevronLeft size={16} className="stroke-[2.5]" />
        </button>
      )}

      {/* Scrollable container */}
      <div
        ref={containerRef}
        className={className}
        style={style}
      >
        {children}
      </div>

      {/* Right Chevron Button (Desktop only) */}
      {shouldShowArrows && canScrollRight && (
        <button
          type="button"
          aria-label="Scroll cards right"
          onClick={(e) => {
            e.stopPropagation();
            handleScrollBy(step);
          }}
          style={{
            background: darkMode ? "rgba(22, 27, 39, 0.95)" : "rgba(255, 255, 255, 0.95)",
            borderColor: darkMode ? "rgba(0, 206, 209, 0.5)" : "rgba(15, 118, 110, 0.4)",
            color: darkMode ? "#00CED1" : "#0F766E",
            boxShadow: darkMode ? "0 4px 14px rgba(0,0,0,0.6)" : "0 4px 12px rgba(0,0,0,0.15)",
          }}
          className={`hidden md:flex absolute right-0 sm:-right-1.5 ${arrowTopOffset} -translate-y-1/2 z-20 w-7 h-7 sm:w-8 sm:h-8 rounded-full border backdrop-blur-md items-center justify-center cursor-pointer transition-all hover:scale-110 active:scale-95 shadow-md`}
        >
          <ChevronRight size={16} className="stroke-[2.5]" />
        </button>
      )}
    </div>
  );
}
