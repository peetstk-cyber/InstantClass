import { useState, useEffect } from "react";
import { ZoomIn, ZoomOut } from "lucide-react";
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
  const getDefaultZoom = () => 1.0;

  const [zoom, setZoom] = useState(getDefaultZoom);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [showZoomSlider, setShowZoomSlider] = useState(false);
  const canPan = zoom > 1.0;
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const bg = darkMode ? "#0E1117" : "#E2E7ED";
  const gridColor = darkMode ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.04)";

  const handleResetZoom = () => {
    setZoom(getDefaultZoom());
    setPan({ x: 0, y: 0 });
  };

  useEffect(() => {
    if (zoom <= 1.0 && (pan.x !== 0 || pan.y !== 0)) {
      setPan({ x: 0, y: 0 });
    }
  }, [zoom, pan.x, pan.y]);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (!canPan) return;
    const target = e.target as HTMLElement;
    if (target.closest("button") || target.closest("input")) return;
    setIsDragging(true);
    setDragStart({
      x: e.clientX - pan.x,
      y: e.clientY - pan.y,
    });
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !canPan) return;
    setPan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      style={{
        background: bg,
        flex: 1,
        position: "relative",
        cursor: canPan ? (isDragging ? "grabbing" : "grab") : "default",
        touchAction: canPan ? "none" : "pan-y",
      }}
      className="flex flex-col items-center justify-center w-full min-h-[820px] md:min-h-0 md:h-full md:overflow-hidden select-none py-6 md:py-0"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
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

      {/* Interactive Canvas */}
      <div
        style={{
          transform: `scale(${zoom}) translate(${pan.x}px, ${pan.y}px)`,
          transition: isDragging ? "none" : "transform 0.2s ease",
        }}
        className="w-full h-full min-h-[780px] md:min-h-0 flex items-center justify-center"
      >
        <div className="w-full h-full max-h-full flex justify-center items-center">
          <InteractiveSkeleton 
            selectedBoneId={selectedBoneId}
            hoveredBoneId={hoveredBoneId}
            onHoverBone={onHoverBone}
            onSelectBone={onSelectBone}
            darkMode={darkMode}
          />
        </div>
      </div>

      {/* Small Floating Zoom Control at Bottom-Left */}
      <div className="fixed md:absolute bottom-4 left-4 z-30 flex flex-col items-start gap-2">
        {/* Zoom Slider Popover */}
        {showZoomSlider && (
          <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-[#161B27]/95 text-slate-200 border border-[#00CED1]/30 backdrop-blur-xl shadow-2xl animate-scale-in">
            <button
              onClick={() => setZoom((z) => Math.max(0.4, Number((z - 0.05).toFixed(2))))}
              className="text-slate-400 hover:text-[#00CED1] transition-colors p-1"
              title="Zoom Out"
            >
              <ZoomOut size={15} />
            </button>

            <input
              type="range"
              min="0.4"
              max="2.0"
              step="0.05"
              value={zoom}
              onChange={(e) => setZoom(parseFloat(e.target.value))}
              className="w-24 sm:w-32 accent-[#00CED1] cursor-pointer h-1.5 bg-slate-700/60 rounded-lg"
            />

            <button
              onClick={() => setZoom((z) => Math.min(2.0, Number((z + 0.05).toFixed(2))))}
              className="text-slate-400 hover:text-[#00CED1] transition-colors p-1"
              title="Zoom In"
            >
              <ZoomIn size={15} />
            </button>

            <button
              onClick={handleResetZoom}
              className="text-[11px] font-semibold text-[#00CED1] bg-[#00CED1]/15 border border-[#00CED1]/30 px-2 py-0.5 rounded-md hover:bg-[#00CED1]/30 transition-all active:scale-95 ml-1 lowercase tracking-wide"
              title="Reset Zoom to 75%"
            >
              reset
            </button>
          </div>
        )}

        {/* Toggle Zoom Slider Button */}
        <button
          onClick={() => setShowZoomSlider((prev) => !prev)}
          style={{
            background: showZoomSlider ? "#00CED1" : (darkMode ? "rgba(22,27,39,0.9)" : "rgba(255,255,255,0.9)"),
            borderColor: showZoomSlider ? "#00CED1" : (darkMode ? "rgba(0,206,209,0.35)" : "#CBD5E1"),
            color: showZoomSlider ? "#0F172A" : "#00CED1",
            boxShadow: showZoomSlider ? "0 0 14px rgba(0,206,209,0.6)" : "0 4px 12px rgba(0,0,0,0.15)",
          }}
          className="w-9 h-9 rounded-full border backdrop-blur-md flex items-center justify-center transition-all active:scale-90"
          title="Zoom Slider"
        >
          <ZoomIn size={17} />
        </button>
      </div>
    </div>
  );
}
