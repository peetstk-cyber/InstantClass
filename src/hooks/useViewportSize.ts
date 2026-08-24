import { useState, useEffect, useCallback } from "react";

export function useViewportSize() {
  const getAccurateHeight = useCallback(() => {
    if (typeof window === "undefined") return 800;
    
    // Priority: visualViewport height > innerHeight > clientHeight
    const vh = window.visualViewport?.height;
    const ih = window.innerHeight;
    const ch = document.documentElement?.clientHeight;
    
    return vh || ih || ch || 800;
  }, []);

  const getAccurateWidth = useCallback(() => {
    if (typeof window === "undefined") return 390;
    return window.visualViewport?.width || window.innerWidth || document.documentElement?.clientWidth || 390;
  }, []);

  const [size, setSize] = useState({
    width: getAccurateWidth(),
    height: getAccurateHeight(),
  });

  useEffect(() => {
    const forceRecalculate = () => {
      const w = getAccurateWidth();
      const h = getAccurateHeight();

      setSize({ width: w, height: h });

      // Inject accurate values into CSS custom properties
      document.documentElement.style.setProperty("--real-vh", `${h * 0.01}px`);
      document.documentElement.style.setProperty("--app-height", `${h}px`);
    };

    // Run immediately
    forceRecalculate();

    // Force dispatch orientationchange & resize events on mount
    // to simulate rotating the screen and back
    const triggerSyntheticEvents = () => {
      window.dispatchEvent(new Event("resize"));
      window.dispatchEvent(new Event("orientationchange"));
      forceRecalculate();
    };

    // Multiple stages of triggering to ensure Safari has finished rendering chrome
    requestAnimationFrame(forceRecalculate);
    const t1 = setTimeout(triggerSyntheticEvents, 50);
    const t2 = setTimeout(triggerSyntheticEvents, 150);
    const t3 = setTimeout(triggerSyntheticEvents, 350);
    const t4 = setTimeout(triggerSyntheticEvents, 700);

    window.addEventListener("resize", forceRecalculate);
    window.addEventListener("orientationchange", () => {
      setTimeout(forceRecalculate, 100);
      setTimeout(forceRecalculate, 300);
    });

    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", forceRecalculate);
      window.visualViewport.addEventListener("scroll", forceRecalculate);
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      window.removeEventListener("resize", forceRecalculate);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", forceRecalculate);
        window.visualViewport.removeEventListener("scroll", forceRecalculate);
      }
    };
  }, [getAccurateHeight, getAccurateWidth]);

  return size;
}
