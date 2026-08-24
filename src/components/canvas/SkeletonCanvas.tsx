import { useState, useEffect, useRef } from "react";
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

const MIN_ZOOM = 0.5;
const MAX_ZOOM = 3.5;
const DEFAULT_ZOOM = 1.0;

export function SkeletonCanvas({
  darkMode,
  selectedBoneId,
  hoveredBoneId,
  onHoverBone,
  onSelectBone,
}: SkeletonCanvasProps) {
  const [zoom, setZoom] = useState(DEFAULT_ZOOM);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [showZoomSlider, setShowZoomSlider] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startPanRef = useRef({ x: 0, y: 0 });
  const startTouchRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const initialPinchDistRef = useRef<number | null>(null);
  const initialPinchZoomRef = useRef<number>(DEFAULT_ZOOM);
  const touchMovedRef = useRef(false);
  const suppressClickRef = useRef(false);
  const lastTapTimeRef = useRef(0);

  const bg = darkMode ? "#0E1117" : "#E2E7ED";
  const gridColor = darkMode ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.04)";

  const handleResetZoom = () => {
    setZoom(DEFAULT_ZOOM);
    setPan({ x: 0, y: 0 });
  };

  // Reset pan if zoom is brought back to default 1.0
  useEffect(() => {
    if (zoom <= DEFAULT_ZOOM && (pan.x !== 0 || pan.y !== 0)) {
      setPan({ x: 0, y: 0 });
    }
  }, [zoom, pan.x, pan.y]);

  // Touch Handlers for Mobile (Pinch-to-zoom & Pan)
  const handleTouchStart = (e: React.TouchEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("button") || target.closest("input")) return;

    touchMovedRef.current = false;
    setIsInteracting(true);

    if (e.touches.length === 1) {
      // Single touch - start pan / double tap detection
      const touch = e.touches[0];
      startTouchRef.current = { x: touch.clientX, y: touch.clientY };
      startPanRef.current = { ...pan };
      isDraggingRef.current = true;
      initialPinchDistRef.current = null;

      // Double tap detector
      const now = Date.now();
      if (now - lastTapTimeRef.current < 300) {
        if (zoom > 1.2) {
          handleResetZoom();
        } else {
          setZoom(1.8);
        }
        lastTapTimeRef.current = 0;
      } else {
        lastTapTimeRef.current = now;
      }
    } else if (e.touches.length === 2) {
      // Two touches - pinch to zoom
      isDraggingRef.current = false;
      const t1 = e.touches[0];
      const t2 = e.touches[1];
      const dist = Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
      initialPinchDistRef.current = dist;
      initialPinchZoomRef.current = zoom;
      startPanRef.current = { ...pan };
      startTouchRef.current = {
        x: (t1.clientX + t2.clientX) / 2,
        y: (t1.clientY + t2.clientY) / 2,
      };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("button") || target.closest("input")) return;

    if (e.touches.length === 1 && isDraggingRef.current) {
      const touch = e.touches[0];
      const dx = touch.clientX - startTouchRef.current.x;
      const dy = touch.clientY - startTouchRef.current.y;

      if (Math.hypot(dx, dy) > 8) {
        touchMovedRef.current = true;
        suppressClickRef.current = true;
      }

      if (zoom > 1.0 || touchMovedRef.current) {
        setPan({
          x: startPanRef.current.x + dx / Math.max(0.5, zoom),
          y: startPanRef.current.y + dy / Math.max(0.5, zoom),
        });
      }
    } else if (e.touches.length === 2 && initialPinchDistRef.current !== null) {
      const t1 = e.touches[0];
      const t2 = e.touches[1];
      const currentDist = Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
      const scaleFactor = currentDist / initialPinchDistRef.current;

      touchMovedRef.current = true;
      suppressClickRef.current = true;

      const newZoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, initialPinchZoomRef.current * scaleFactor));
      setZoom(Number(newZoom.toFixed(2)));

      const midX = (t1.clientX + t2.clientX) / 2;
      const midY = (t1.clientY + t2.clientY) / 2;
      const dx = midX - startTouchRef.current.x;
      const dy = midY - startTouchRef.current.y;
      setPan({
        x: startPanRef.current.x + dx / Math.max(0.5, newZoom),
        y: startPanRef.current.y + dy / Math.max(0.5, newZoom),
      });
    }
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
    initialPinchDistRef.current = null;
    setIsInteracting(false);
    setTimeout(() => {
      suppressClickRef.current = false;
    }, 100);
  };

  // Mouse Pointer Handlers (Desktop click & drag)
  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === "touch") return;
    const target = e.target as HTMLElement;
    if (target.closest("button") || target.closest("input")) return;

    isDraggingRef.current = true;
    setIsInteracting(true);
    startPanRef.current = { ...pan };
    startTouchRef.current = { x: e.clientX, y: e.clientY };
    touchMovedRef.current = false;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (e.pointerType === "touch" || !isDraggingRef.current) return;

    const dx = e.clientX - startTouchRef.current.x;
    const dy = e.clientY - startTouchRef.current.y;

    if (Math.hypot(dx, dy) > 6) {
      touchMovedRef.current = true;
      suppressClickRef.current = true;
    }

    if (zoom > 1.0 || touchMovedRef.current) {
      setPan({
        x: startPanRef.current.x + dx / Math.max(0.5, zoom),
        y: startPanRef.current.y + dy / Math.max(0.5, zoom),
      });
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (e.pointerType === "touch") return;
    isDraggingRef.current = false;
    setIsInteracting(false);
    setTimeout(() => {
      suppressClickRef.current = false;
    }, 80);
  };

  // Mouse wheel / Trackpad pinch zoom
  const handleWheel = (e: React.WheelEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("input")) return;

    const delta = -e.deltaY;
    const factor = delta > 0 ? 1.08 : 0.92;
    const newZoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, zoom * factor));
    setZoom(Number(newZoom.toFixed(2)));
  };

  // Prevent accidental clicks on bones when dragging/pinching
  const handleClickCapture = (e: React.MouseEvent) => {
    if (suppressClickRef.current) {
      e.stopPropagation();
      e.preventDefault();
    }
  };

  const canPan = zoom > 1.0;

  return (
    <div
      ref={containerRef}
      style={{
        background: bg,
        flex: 1,
        position: "relative",
        overflow: "hidden",
        cursor: canPan ? (isInteracting ? "grabbing" : "grab") : "default",
        touchAction: "none",
        userSelect: "none",
      }}
      className="flex flex-col items-center justify-center w-full h-full select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onWheel={handleWheel}
      onClickCapture={handleClickCapture}
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

      {/* Interactive Skeleton Canvas Container */}
      <div
        style={{
          transform: `scale(${zoom}) translate(${pan.x}px, ${pan.y}px)`,
          transformOrigin: "center center",
          transition: isInteracting ? "none" : "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "auto",
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

      {/* Small Floating Zoom Control at Bottom-Left */}
      <div className="absolute bottom-4 left-4 z-30 flex flex-col items-start gap-2 select-none">
        {/* Zoom Slider Popover */}
        {showZoomSlider && (
          <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-[#161B27]/95 text-slate-200 border border-[#00CED1]/30 backdrop-blur-xl shadow-2xl animate-scale-in">
            <button
              type="button"
              onClick={() => setZoom((z) => Math.max(MIN_ZOOM, Number((z - 0.1).toFixed(2))))}
              className="text-slate-400 hover:text-[#00CED1] active:scale-90 transition-all p-1 cursor-pointer"
              title="Zoom Out"
            >
              <ZoomOut size={16} />
            </button>

            <input
              type="range"
              min={MIN_ZOOM}
              max={MAX_ZOOM}
              step="0.05"
              value={zoom}
              onChange={(e) => setZoom(parseFloat(e.target.value))}
              className="w-24 sm:w-32 accent-[#00CED1] cursor-pointer h-1.5 bg-slate-700/60 rounded-lg"
            />

            <button
              type="button"
              onClick={() => setZoom((z) => Math.min(MAX_ZOOM, Number((z + 0.1).toFixed(2))))}
              className="text-slate-400 hover:text-[#00CED1] active:scale-90 transition-all p-1 cursor-pointer"
              title="Zoom In"
            >
              <ZoomIn size={16} />
            </button>

            <span className="text-[11px] font-mono text-slate-400 min-w-[32px] text-center">
              {Math.round(zoom * 100)}%
            </span>

            <button
              type="button"
              onClick={handleResetZoom}
              className="text-[11px] font-bold text-[#00CED1] bg-[#00CED1]/15 border border-[#00CED1]/30 px-2 py-0.5 rounded-md hover:bg-[#00CED1]/30 active:scale-95 transition-all ml-0.5 flex items-center gap-1 cursor-pointer"
              title="Reset Zoom & Center"
            >
              <RotateCcw size={10} />
              <span>reset</span>
            </button>
          </div>
        )}

        {/* Toggle Zoom Slider Button */}
        <button
          type="button"
          onClick={() => setShowZoomSlider((prev) => !prev)}
          style={{
            background: showZoomSlider ? "#00CED1" : (darkMode ? "rgba(22,27,39,0.9)" : "rgba(255,255,255,0.9)"),
            borderColor: showZoomSlider ? "#00CED1" : (darkMode ? "rgba(0,206,209,0.35)" : "#CBD5E1"),
            color: showZoomSlider ? "#0F172A" : (darkMode ? "#00CED1" : "#0F766E"),
            boxShadow: showZoomSlider ? "0 0 14px rgba(0,206,209,0.6)" : "0 4px 12px rgba(0,0,0,0.15)",
          }}
          className="w-9 h-9 rounded-full border backdrop-blur-md flex items-center justify-center transition-all active:scale-90 cursor-pointer"
          title="Zoom Controls & Gestures"
        >
          <ZoomIn size={17} />
        </button>
      </div>
    </div>
  );
}
