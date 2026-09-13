import { useState, useEffect } from "react";
import { X, Share, PlusSquare, Download } from "lucide-react";
import type { Language } from "../../App";

interface AddToHomeScreenPromptProps {
  darkMode: boolean;
  language: Language;
}

export function AddToHomeScreenPrompt({ darkMode, language }: AddToHomeScreenPromptProps) {
  const [showPrompt, setShowPrompt] = useState(false);
  const [platform, setPlatform] = useState<"ios" | "android" | "other">("other");
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    // 1. Check if already installed in standalone mode (PWA active)
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as any).standalone === true;

    if (isStandalone) {
      return;
    }

    // 2. Check if user already dismissed or interacted with prompt before
    const hasSeenPrompt = localStorage.getItem("instantclass_pwa_prompt_dismissed");
    if (hasSeenPrompt) {
      return;
    }

    // 3. Detect platform
    const ua = window.navigator.userAgent.toLowerCase();
    const isIos = /iphone|ipad|ipod/.test(ua);
    const isAndroid = /android/.test(ua);

    if (isIos) {
      setPlatform("ios");
      // Wait 1.8 seconds after first load so it feels natural and smooth
      const timer = setTimeout(() => {
        setShowPrompt(true);
      }, 1800);
      return () => clearTimeout(timer);
    } else if (isAndroid) {
      setPlatform("android");
      const handleBeforeInstallPrompt = (e: Event) => {
        e.preventDefault();
        setDeferredPrompt(e);
        setShowPrompt(true);
      };
      window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

      // Fallback timer if browser doesn't trigger beforeinstallprompt right away
      const timer = setTimeout(() => {
        setShowPrompt(true);
      }, 2000);

      return () => {
        window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
        clearTimeout(timer);
      };
    } else {
      // Desktop / Other: We only show on mobile devices
      setPlatform("other");
    }
  }, []);

  const handleDismiss = () => {
    setShowPrompt(false);
    try {
      localStorage.setItem("instantclass_pwa_prompt_dismissed", "true");
    } catch {
      // ignore local storage error
    }
  };

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        handleDismiss();
      }
      setDeferredPrompt(null);
    }
  };

  if (!showPrompt || platform === "other") {
    return null;
  }

  const isIos = platform === "ios";

  return (
    <div className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 pointer-events-none animate-slide-up-m">
      <div
        className="pointer-events-auto relative w-full max-w-sm rounded-3xl p-5 shadow-2xl transition-all border backdrop-blur-xl"
        style={{
          background: darkMode ? "rgba(22, 27, 39, 0.94)" : "rgba(255, 255, 255, 0.96)",
          borderColor: darkMode ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.08)",
          boxShadow: darkMode
            ? "0 20px 45px rgba(0, 0, 0, 0.6), 0 0 1px rgba(255,255,255,0.2)"
            : "0 20px 45px rgba(15, 23, 42, 0.15), 0 0 1px rgba(0,0,0,0.1)",
        }}
      >
        {/* Dismiss Close Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center transition-all hover:bg-slate-500/10 cursor-pointer"
          style={{
            color: darkMode ? "#94A3B8" : "#64748B",
          }}
          aria-label="Close"
        >
          <X size={16} />
        </button>

        {/* Content Body */}
        <div className="flex flex-col items-center text-center">
          {/* App Logo with soft squircle icon container */}
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center p-2.5 mb-3 transition-transform hover:scale-105"
            style={{
              background: darkMode ? "rgba(255, 255, 255, 0.05)" : "#F1F5F9",
              border: `1px solid ${darkMode ? "rgba(255,255,255,0.1)" : "#E2E8F0"}`,
              boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
            }}
          >
            <img
              src="/logo.png"
              alt="InstantClass Logo"
              className="w-full h-full object-contain"
              style={{
                filter: darkMode ? "brightness(0) invert(1)" : "brightness(0)",
              }}
            />
          </div>

          {/* Title */}
          <h3
            className="text-base font-black tracking-tight"
            style={{ color: darkMode ? "#F8FAFC" : "#0F172A" }}
          >
            {language === "en" ? "Install InstantClass" : "ติดตั้ง InstantClass"}
          </h3>

          {/* Description */}
          <p
            className="text-xs font-medium mt-1.5 leading-relaxed max-w-[260px]"
            style={{ color: darkMode ? "#94A3B8" : "#64748B" }}
          >
            {language === "en"
              ? "Add this app to your home screen for easy access and a full-screen experience."
              : "เพิ่มแอปลงในหน้าจอโฮมของคุณ เพื่อเปิดใช้งานสะดวก รวดเร็ว และเต็มหน้าจอ"}
          </p>

          {/* Divider */}
          <div
            className="w-full h-px my-3.5"
            style={{
              background: darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
            }}
          />

          {/* iOS Instruction Guide OR Android Native One-Click Install */}
          {isIos ? (
            <div
              className="flex items-center justify-center gap-1.5 text-xs font-semibold"
              style={{ color: darkMode ? "#E2E8F0" : "#1E293B" }}
            >
              <span>{language === "en" ? "Tap" : "แตะที่"}</span>
              <span
                className="inline-flex items-center justify-center p-1 rounded-md"
                style={{
                  background: darkMode ? "rgba(0, 206, 209, 0.15)" : "rgba(15, 118, 110, 0.12)",
                  color: darkMode ? "#00CED1" : "#0F766E",
                }}
              >
                <Share size={14} className="stroke-[2.5]" />
              </span>
              <span>
                {language === "en" ? 'then "Add to Home Screen"' : 'แล้วเลือก "เพิ่มไปยังหน้าจอโฮม"'}
              </span>
              <PlusSquare size={13} className="opacity-75" />
            </div>
          ) : (
            <div className="w-full flex items-center gap-2">
              {deferredPrompt ? (
                <button
                  onClick={handleInstallClick}
                  className="flex-1 py-2.5 px-4 rounded-xl font-extrabold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95 shadow-md"
                  style={{
                    background: darkMode ? "#00CED1" : "#0F766E",
                    color: darkMode ? "#0E1117" : "#FFFFFF",
                  }}
                >
                  <Download size={14} />
                  <span>{language === "en" ? "Add to Home Screen" : "เพิ่มไปยังหน้าจอโฮม"}</span>
                </button>
              ) : (
                <div
                  className="flex items-center justify-center gap-1.5 text-xs font-semibold w-full"
                  style={{ color: darkMode ? "#E2E8F0" : "#1E293B" }}
                >
                  <span>{language === "en" ? 'Tap menu (⋮) then "Install app"' : 'แตะเมนู (⋮) แล้วเลือก "ติดตั้งแอป"'}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Small pointer triangle pointing down towards Safari share bar on iOS */}
        {isIos && (
          <div
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 border-r border-b"
            style={{
              background: darkMode ? "rgba(22, 27, 39, 0.96)" : "rgba(255, 255, 255, 0.98)",
              borderColor: darkMode ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.08)",
            }}
          />
        )}
      </div>
    </div>
  );
}
