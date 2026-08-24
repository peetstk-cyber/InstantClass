import { useState, useEffect, useRef, useCallback } from "react";
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

  // Gesture state refs (to avoid re-render during high-frequency touchmove/pointermove)
  const isDraggingRef = useRef(false);
  const isPinchingRef = useRef(false);
  const touchMovedRef = useRef(false);
  const suppressClickRef = useRef(false);
  const lastTapTimeRef = useRef(0);
  const lastTapPosRef = useRef({ x: 0, y: 0 });

  // Touch tracking refs
  const startPanRef = useRef({ x: 0, y: 0 });
  const startTouchRef = useRef({ x: 0, y: 0 });
  const pinchStartDistRef = useRef(0);
  const pinchStartZoomRef = useRef(DEFAULT_ZOOM);
  const pinchStartCenterRef = useRef({ x: 0, y: 0 });

  const bg = darkMode ? "#0E1117" : "#E2E7ED";
  const gridColor = darkMode ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.04)";

  const handleResetZoom = useCallback(() => {
    setZoom(DEFAULT_ZOOM);
    setPan({ x: 0, y: 0 });
  }, []);

  // When zoom resets close to 1.0, re-center pan
  useEffect(() => {
    if (zoom <= 1.0 && (pan.x !== 0 || pan.y !== 0)) {
      setPan({ x: 0, y: 0 });
    }
  }, [zoom, pan.x, pan.y]);

  /* ─────────────────────────────────────────────────────────────
     Touch Gestures (Pinch to zoom + 1/2-finger pan + double-tap)
     ───────────────────────────────────────────────────────────── */
  const getTouchDistance = (t1: React.Touch | Touch, t2: React.Touch | Touch) => {
    return Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
  };

  const getTouchCenter = (t1: React.Touch | Touch, t2: React.Touch | Touch) => {
    return {
      x: (t1.clientX + t2.clientX) / 2,
      y: (t1.clientY + t2.clientY) / 2,
    };
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("button") || target.closest("input")) return;

    touchMovedRef.current = false;
    startPanRef.current = { ...pan };

    if (e.touches.length === 1) {
      isDraggingRef.current = true;
      isPinchingRef.current = false;
      setIsInteracting(true);
      startTouchRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    } else if (e.touches.length === 2) {
      isDraggingRef.current = false;
      isPinchingRef.current = true;
      setIsInteracting(true);
      pinchStartDistRef.current = getTouchDistance(e.touches[0], e.touches[1]);
      pinchStartZoomRef.current = zoom;
      pinchStartCenterRef.current = getTouchCenter(e.touches[0], e.touches[1]);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && isPinchingRef.current) {
      touchMovedRef.current = true;
      suppressClickRef.current = true;

      const currentDist = getTouchDistance(e.touches[0], e.touches[1]);
      if (pinchStartDistRef.current > 0) {
        const scaleFactor = currentDist / pinchStartDistRef.current;
        const newZoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, pinchStartZoomRef.current * scaleFactor));
        setZoom(Number(newZoom.toFixed(3)));

        // Pan with the midpoint move
        const currentCenter = getTouchCenter(e.touches[0], e.touches[1]);
        const centerDx = currentCenter.x - pinchStartCenterRef.current.x;
        const centerDy = currentCenter.y - pinchStartCenterRef.current.y;
        setPan({
          x: startPanRef.current.x + centerDx / Math.max(0.5, newZoom),
          y: startPanRef.current.y + centerDy / Math.max(0.5, newZoom),
        });
      }
    } else if (e.touches.length === 1 && isDraggingRef.current) {
      const dx = e.touches[0].clientX - startTouchRef.current.x;
      const dy = e.touches[0].clientY - startTouchRef.current.y;

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
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (e.touches.length === 0) {
      const now = Date.now();
      const isQuickTap = !touchMovedRef.current;

      if (isQuickTap) {
        const touch = e.changedTouches[0];
        const distFromLastTap = Math.hypot(
          touch.clientX - lastTapPosRef.current.x,
          touch.clientY - lastTapPosRef.current.y
        );

        // Double-tap detected (within 300ms and 30px distance)
        if (now - lastTapTimeRef.current < 300 && distFromLastTap < 30) {
          suppressClickRef.current = true;
          if (zoom > 1.2) {
            handleResetZoom();
          } else {
            setZoom(2.2);
            // Pan towards tap point relative to container center
            if (containerRef.current) {
              const rect = containerRef.current.getBoundingClientRect();
              const offsetX = (rect.width / 2 - touch.clientX) * 0.4;
              const offsetY = (rect.height / 2 - touch.clientY) * 0.4;
              setPan({ x: offsetX, y: offsetY });
            }
          }
          lastTapTimeRef.current = 0;
        } else {
          lastTapTimeRef.current = now;
          lastTapPosRef.current = { x: touch.clientX, y: touch.clientY };
        }
      }

      isDraggingRef.current = false;
      isPinchingRef.current = false;
      setIsInteracting(false);

      // Release click suppression after a short delay so normal taps register
      setTimeout(() => {
        suppressClickRef.current = false;
      }, 80);
    } else if (e.touches.length === 1) {
      // Transition from 2 fingers to 1 finger smoothly
      isPinchingRef.current = false;
      isDraggingRef.current = true;
      startPanRef.current = { ...pan };
      startTouchRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    }
  };

  /* ─────────────────────────────────────────────────────────────
     Desktop Mouse & Pointer Gestures (Drag pan & Wheel zoom)
     ───────────────────────────────────────────────────────────── */
  const handlePointerDown = (e: React.PointerEvent) => {
    // Only handle mouse pointers here (touch is handled in touch events)
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

    // Zoom step
    const delta = -e.deltaY;
    const factor = delta > 0 ? 1.08 : 0.92;
    const newZoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, zoom * factor));
    setZoom(Number(newZoom.toFixed(2)));
  };

  // Capture phase click handler to block accidental bone selection when dragging/pinching
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
