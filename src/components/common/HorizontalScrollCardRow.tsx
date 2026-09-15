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
}

/**
 * Horizontal Scroll Container with Left/Right Arrow Navigation Buttons.
 * Mouse wheel functions normally for vertical page scrolling,
 * while horizontal navigation for mouse users is handled cleanly via the chevron arrow buttons.
 * Native trackpad horizontal gestures and mobile touch continue to work seamlessly.
 */
export function HorizontalScrollCardRow({
  children,
  className = "",
  style = {},
  darkMode = false,
  showArrows = true,
  arrowTopOffset = "top-[38%]",
}: HorizontalScrollCardRowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScrollability = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const canLeft = el.scrollLeft > 6;
    const canRight = Math.ceil(el.scrollLeft) < el.scrollWidth - el.clientWidth - 6;
    setCanScrollLeft(canLeft);
    setCanScrollRight(canRight);
  }, []);

  // Update arrow visibility on mount, scroll, resize, or children change
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

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
  }, [checkScrollability, children]);

  const handleScrollBy = (amount: number) => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="relative group/carousel w-full">
      {/* Left Chevron Button */}
      {showArrows && canScrollLeft && (
        <button
          type="button"
          aria-label="Scroll cards left"
          onClick={(e) => {
            e.stopPropagation();
            handleScrollBy(-220);
          }}
          style={{
            background: darkMode ? "rgba(22, 27, 39, 0.95)" : "rgba(255, 255, 255, 0.95)",
            borderColor: darkMode ? "rgba(0, 206, 209, 0.5)" : "rgba(15, 118, 110, 0.4)",
            color: darkMode ? "#00CED1" : "#0F766E",
            boxShadow: darkMode ? "0 4px 14px rgba(0,0,0,0.6)" : "0 4px 12px rgba(0,0,0,0.15)",
          }}
          className={`absolute left-0 sm:-left-1.5 ${arrowTopOffset} -translate-y-1/2 z-20 w-7 h-7 sm:w-8 sm:h-8 rounded-full border backdrop-blur-md flex items-center justify-center cursor-pointer transition-all hover:scale-110 active:scale-95 shadow-md`}
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

      {/* Right Chevron Button */}
      {showArrows && canScrollRight && (
        <button
          type="button"
          aria-label="Scroll cards right"
          onClick={(e) => {
            e.stopPropagation();
            handleScrollBy(220);
          }}
          style={{
            background: darkMode ? "rgba(22, 27, 39, 0.95)" : "rgba(255, 255, 255, 0.95)",
            borderColor: darkMode ? "rgba(0, 206, 209, 0.5)" : "rgba(15, 118, 110, 0.4)",
            color: darkMode ? "#00CED1" : "#0F766E",
            boxShadow: darkMode ? "0 4px 14px rgba(0,0,0,0.6)" : "0 4px 12px rgba(0,0,0,0.15)",
          }}
          className={`absolute right-0 sm:-right-1.5 ${arrowTopOffset} -translate-y-1/2 z-20 w-7 h-7 sm:w-8 sm:h-8 rounded-full border backdrop-blur-md flex items-center justify-center cursor-pointer transition-all hover:scale-110 active:scale-95 shadow-md`}
        >
          <ChevronRight size={16} className="stroke-[2.5]" />
        </button>
      )}
    </div>
  );
}
