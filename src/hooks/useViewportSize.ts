import { useState, useEffect } from "react";

export function useViewportSize() {
  const [size, setSize] = useState({
    width: typeof window !== "undefined" ? (window.visualViewport?.width || window.innerWidth) : 390,
    height: typeof window !== "undefined" ? (window.visualViewport?.height || window.innerHeight) : 800,
  });

  useEffect(() => {
    const updateSize = () => {
      const w = window.visualViewport ? window.visualViewport.width : window.innerWidth;
      const h = window.visualViewport ? window.visualViewport.height : window.innerHeight;
      
      setSize({ width: w, height: h });
      
      // Update global CSS variables for any pure CSS references
      document.documentElement.style.setProperty("--real-vh", `${h * 0.01}px`);
      document.documentElement.style.setProperty("--app-height", `${h}px`);
    };

    updateSize();

    window.addEventListener("resize", updateSize);
    window.addEventListener("orientationchange", () => {
      setTimeout(updateSize, 100);
      setTimeout(updateSize, 300);
    });

    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", updateSize);
      window.visualViewport.addEventListener("scroll", updateSize);
    }

    return () => {
      window.removeEventListener("resize", updateSize);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", updateSize);
        window.visualViewport.removeEventListener("scroll", updateSize);
      }
    };
  }, []);

  return size;
}
