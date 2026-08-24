import { useState } from "react";
import { ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import { InteractiveSkeleton } from "./InteractiveSkeleton";

interface SkeletonCanvasProps {
  darkMode: boolean;
  selectedBoneId: string | null;
  hoveredBoneId: string | null;
  onHoverBone: (id: string | null) => void;
  onSelectBone: (id: string, regionId?: string) => void;
  hasDetailOpen: boolean;
}

export function SkeletonCanvas({
  darkMode,
  selectedBoneId,
  hoveredBoneId,
  onHoverBone,
  onSelectBone,
}: SkeletonCanvasProps) {
  const [zoom, setZoom] = useState(1.0);
  const [showZoomSlider, setShowZoomSlider] = useState(false);

  const bg = darkMode ? "#0E1117" : "#E2E7ED";
  const gridColor = darkMode ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.04)";

  const isTransformed = zoom !== 1.0;

  const handleResetZoom = () => {
    setZoom(1.0);
  };

  return (
    <div
      style={{
        background: bg,
        position: "relative",
      }}
      className="flex flex-col items-center justify-center w-full min-h-[calc(100dvh-60px)] md:min-h-0 md:h-full flex-1 select-none overflow-hidden"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(${gridColor} 1px, transparent 1px),
            linear-gradient(90deg, ${gridColor} 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Canvas */}
      <div
        style={{
          transform: `scale(${zoom})`,
          transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transformOrigin: "center center",
          padding: "16px 8px",
        }}
      >
        <div style={{ height: "100%", width: "100%", maxHeight: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <InteractiveSkeleton 
            selectedBoneId={selectedBoneId}
            hoveredBoneId={hoveredBoneId}
            onHoverBone={onHoverBone}
            onSelectBone={onSelectBone}
            darkMode={darkMode}
          />
        </div>
      </div>

      {/* Floating Zoom & Reset Controls at Bottom-Left */}
      <div className="absolute bottom-4 left-4 z-30 flex items-center gap-2 select-none">
        {/* Reset View Button */}
        {isTransformed && (
          <button
            onClick={handleResetZoom}
            style={{
              background: darkMode ? "rgba(22,27,39,0.92)" : "rgba(255,255,255,0.92)",
              borderColor: darkMode ? "rgba(0,206,209,0.4)" : "#0F766E",
              color: darkMode ? "#00CED1" : "#0F766E",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
            className="h-9 px-3 rounded-full border backdrop-blur-md flex items-center gap-1.5 text-xs font-bold transition-all active:scale-95 cursor-pointer animate-scale-in"
            title="Reset zoom"
          >
            <RotateCcw size={13} />
            <span>Reset</span>
          </button>
        )}

        {/* Zoom Controls Popover / Toggle */}
        <div className="flex items-center gap-1.5">
          {showZoomSlider && (
            <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-[#161B27]/95 text-slate-200 border border-[#00CED1]/30 backdrop-blur-xl shadow-2xl animate-scale-in">
              <button
                onClick={() => setZoom((z) => Math.max(0.5, Number((z - 0.1).toFixed(2))))}
                className="text-slate-400 hover:text-[#00CED1] transition-colors p-1 cursor-pointer"
                title="Zoom Out"
              >
                <ZoomOut size={15} />
              </button>

              <input
                type="range"
                min="0.5"
                max="2.5"
                step="0.05"
                value={zoom}
                onChange={(e) => setZoom(parseFloat(e.target.value))}
                className="w-24 sm:w-32 accent-[#00CED1] cursor-pointer h-1.5 bg-slate-700/60 rounded-lg"
              />

              <button
                onClick={() => setZoom((z) => Math.min(2.5, Number((z + 0.1).toFixed(2))))}
                className="text-slate-400 hover:text-[#00CED1] transition-colors p-1 cursor-pointer"
                title="Zoom In"
              >
                <ZoomIn size={15} />
              </button>

              <button
                onClick={handleResetZoom}
                className="text-[11px] font-semibold text-[#00CED1] bg-[#00CED1]/15 border border-[#00CED1]/30 px-2 py-0.5 rounded-md hover:bg-[#00CED1]/30 transition-all active:scale-95 ml-1 lowercase tracking-wide cursor-pointer"
                title="Reset Zoom"
              >
                reset
              </button>
            </div>
          )}

          {/* Toggle Zoom Controls Button */}
          <button
            onClick={() => setShowZoomSlider((prev) => !prev)}
            style={{
              background: showZoomSlider ? "#00CED1" : (darkMode ? "rgba(22,27,39,0.9)" : "rgba(255,255,255,0.9)"),
              borderColor: showZoomSlider ? "#00CED1" : (darkMode ? "rgba(0,206,209,0.35)" : "#CBD5E1"),
              color: showZoomSlider ? "#0F172A" : (darkMode ? "#00CED1" : "#0F766E"),
              boxShadow: showZoomSlider ? "0 0 14px rgba(0,206,209,0.6)" : "0 4px 12px rgba(0,0,0,0.15)",
            }}
            className="w-9 h-9 rounded-full border backdrop-blur-md flex items-center justify-center transition-all active:scale-90 cursor-pointer"
            title="Zoom controls"
          >
            <ZoomIn size={17} />
          </button>
        </div>
      </div>
    </div>
  );
}

