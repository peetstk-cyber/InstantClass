import React, { useState, useEffect } from "react";
import type { Translation } from "../../types";
import { ArrowLeft, Layers } from "lucide-react";

interface InteractiveSkeletonProps {
  selectedBoneId: string | null;
  selectedRegionId: string | null;
  onSelectBone: (id: string, regionId?: string) => void;
  pediatricMode: boolean;
  language: "en" | "th";
  quizTargetBoneId?: string | null;
  isQuizMode: boolean;
}

interface BoneHotspot {
  id: string;
  regionId?: string;
  name: Translation;
  isPediatricOnly?: boolean;
}

export const InteractiveSkeleton: React.FC<InteractiveSkeletonProps> = ({
  selectedBoneId,
  selectedRegionId,
  onSelectBone,
  pediatricMode,
  language,
  quizTargetBoneId,
  isQuizMode,
}) => {
  const [hoveredBone, setHoveredBone] = useState<BoneHotspot | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [zoomedBoneId, setZoomedBoneId] = useState<string | null>(null);
  const [popupBoneId, setPopupBoneId] = useState<string | null>(null);

  // Sync zoom state if selectedBoneId changes externally (e.g. from SearchBar)
  // But don't change zoom if we just opened a popup (popupBoneId is set)
  useEffect(() => {
    if (selectedBoneId && !popupBoneId) {
      setZoomedBoneId(selectedBoneId);
    } else if (!selectedBoneId) {
      setZoomedBoneId(null);
    }
  }, [selectedBoneId]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left + 15,
      y: e.clientY - rect.top + 15,
    });
  };

  // Hotspots definitions for the full body skeleton
  const hotspots: BoneHotspot[] = [
    {
      id: "clavicle",
      regionId: "allman",
      name: { en: "Clavicle", th: "กระดูกไหปลาร้า (Clavicle)" },
    },
    {
      id: "humerus",
      regionId: "proximal",
      name: { en: "Humerus", th: "กระดูกต้นแขน (Humerus)" },
    },
    {
      id: "spine",
      regionId: "thoracolumbar",
      name: { en: "Spine", th: "กระดูกสันหลัง (Spine)" },
    },
    {
      id: "forearm",
      regionId: "distal",
      name: { en: "Forearm (Radius/Ulna)", th: "กระดูกปลายแขน (Forearm)" },
    },
    {
      id: "pelvis",
      regionId: "pelvic-ring",
      name: { en: "Pelvis", th: "กระดูกอุ้งเชิงกราน (Pelvis)" },
    },
    {
      id: "femur",
      regionId: "proximal",
      name: { en: "Femur", th: "กระดูกต้นขา (Femur)" },
    },
    {
      id: "tibia",
      regionId: "proximal",
      name: { en: "Tibia & Fibula", th: "กระดูกหน้าแข้งและน่อง (Tibia/Fibula)" },
    },
    {
      id: "pediatric-physis",
      regionId: "physis",
      name: { en: "Pediatric Growth Plates", th: "แผ่นเจริญเติบโตกระดูกเด็ก" },
      isPediatricOnly: true,
    },
  ];

  const getHotspot = (id: string, regionId?: string) => {
    return hotspots.find(h => h.id === id && h.regionId === regionId) || null;
  };

  const handleBoneClick = (id: string, regionId?: string) => {
    // Bones with multiple regions show a popup picker first
    if (id === "humerus") {
      setPopupBoneId(id);
    } else {
      onSelectBone(id, regionId);
    }
  };

  const handleBackToFullBody = () => {
    setZoomedBoneId(null);
    onSelectBone("", "");
  };

  const getHotspotClasses = (id: string) => {
    const isSelected = selectedBoneId === id;
    const isQuizTarget = isQuizMode && quizTargetBoneId === id;

    if (isQuizMode) {
      if (isQuizTarget) {
        return "fill-clinical-glow/20 stroke-clinical-primary stroke-[3px] animate-pulse cursor-pointer";
      }
      return "fill-transparent stroke-slate-500/20 hover:fill-slate-500/10 cursor-pointer";
    }

    if (isSelected) {
      return "fill-clinical-accent/30 stroke-clinical-accent stroke-[3px] filter drop-shadow-[0_0_12px_rgba(249,115,22,0.8)] cursor-pointer";
    }

    return "fill-clinical-primary/5 stroke-clinical-primary/40 stroke-[2px] hover:fill-clinical-primary/25 hover:stroke-clinical-primary hover:filter hover:drop-shadow-[0_0_10px_rgba(14,165,233,0.9)] cursor-pointer transition-all duration-200";
  };

  // Render zoomed-in interactive bone view
  const renderZoomedBone = () => {
    if (!zoomedBoneId) return null;

    const strokeColor = "#38bdf8"; // cyan
    const isRegionActive = (regionId: string) => selectedBoneId === zoomedBoneId && selectedRegionId === regionId;

    const getRegionClass = (regionId: string) => {
      return isRegionActive(regionId)
        ? "fill-clinical-accent/20 stroke-clinical-accent stroke-[3px] filter drop-shadow-[0_0_12px_rgba(249,115,22,0.8)] cursor-pointer"
        : "fill-clinical-primary/5 stroke-clinical-primary/40 stroke-[2px] hover:fill-clinical-primary/25 hover:stroke-clinical-primary hover:filter hover:drop-shadow-[0_0_10px_rgba(14,165,233,0.9)] cursor-pointer transition-all duration-200";
    };

    const handleRegionHover = (regionId: string, active: boolean) => {
      if (active) {
        const hs = hotspots.find(h => h.id === zoomedBoneId);
        if (hs) {
          // Temporarily override hovered bone details for tooltip
          const regionMap: Record<string, Translation> = {
            proximal: { en: "Proximal Region", th: "ส่วนต้น (Proximal)" },
            shaft: { en: "Shaft Region", th: "แกนกระดูก (Shaft)" },
            distal: { en: "Distal Region", th: "ส่วนปลาย (Distal)" },
            allman: { en: "Clavicle Regions", th: "กระดูกไหปลาร้า" },
            "pelvic-ring": { en: "Pelvic Ring", th: "วงอุ้งเชิงกราน" },
            thoracolumbar: { en: "Thoracolumbar Spine", th: "กระดูกสันหลังระดับอกและเอว" },
            physis: { en: "Growth Plate (Physis)", th: "แผ่นเจริญเติบโตกระดูกเด็ก" }
          };
          setHoveredBone({
            id: zoomedBoneId,
            regionId,
            name: {
              en: `${hs.name.en} - ${regionMap[regionId]?.en || regionId}`,
              th: `${hs.name.th} - ${regionMap[regionId]?.th || regionId}`
            }
          });
        }
      } else {
        setHoveredBone(null);
      }
    };

    switch (zoomedBoneId) {
      case "clavicle":
        return (
          <svg viewBox="0 0 400 400" className="w-full h-full max-h-[300px]">
            {/* Clavicle outline body */}
            <path
              d="M 50,200 C 120,160 170,160 200,200 C 230,240 280,240 350,200"
              fill="none"
              strokeWidth="28"
              strokeLinecap="round"
              className={getRegionClass("allman")}
              onClick={() => handleBoneClick("clavicle", "allman")}
              onMouseEnter={() => handleRegionHover("allman", true)}
              onMouseLeave={() => handleRegionHover("allman", false)}
            />
            <text x="145" y="250" fill="#94a3b8" className="text-xs font-bold fill-current pointer-events-none uppercase tracking-wider">Clavicle Bone (Allman)</text>
          </svg>
        );

      case "humerus":
        return (
          <svg viewBox="0 0 400 400" className="w-full h-full max-h-[300px]">
            {/* Proximal Head */}
            <path
              d="M 170,110 C 170,60 230,60 230,110 C 230,130 215,135 200,140 C 185,135 170,130 170,110 Z"
              className={getRegionClass("proximal")}
              onClick={() => handleBoneClick("humerus", "proximal")}
              onMouseEnter={() => handleRegionHover("proximal", true)}
              onMouseLeave={() => handleRegionHover("proximal", false)}
            />
            {/* Shaft */}
            <rect
              x="185"
              y="140"
              width="30"
              height="110"
              className={getRegionClass("shaft")}
              onClick={() => handleBoneClick("humerus", "shaft")}
              onMouseEnter={() => handleRegionHover("shaft", true)}
              onMouseLeave={() => handleRegionHover("shaft", false)}
            />
            {/* Distal Condyles */}
            <path
              d="M 185,250 H 215 L 235,290 C 235,310 165,310 165,290 Z"
              className={getRegionClass("distal")}
              onClick={() => handleBoneClick("humerus", "distal")}
              onMouseEnter={() => handleRegionHover("distal", true)}
              onMouseLeave={() => handleRegionHover("distal", false)}
            />
            <text x="250" y="115" fill="#38bdf8" className="text-[10px] font-bold fill-current pointer-events-none">PROXIMAL (SHOULDER)</text>
            <text x="250" y="200" fill="#64748b" className="text-[10px] font-bold fill-current pointer-events-none">SHAFT (DIAPHYSIS)</text>
            <text x="250" y="280" fill="#64748b" className="text-[10px] font-bold fill-current pointer-events-none">DISTAL (ELBOW)</text>
          </svg>
        );

      case "femur":
        return (
          <svg viewBox="0 0 400 400" className="w-full h-full max-h-[300px]">
            {/* Proximal Neck/Head */}
            <path
              d="M 140,110 C 130,80 175,75 185,95 C 180,115 185,125 200,135 L 170,150 Z"
              className={getRegionClass("proximal")}
              onClick={() => handleBoneClick("femur", "proximal")}
              onMouseEnter={() => handleRegionHover("proximal", true)}
              onMouseLeave={() => handleRegionHover("proximal", false)}
            />
            {/* Shaft */}
            <rect
              x="185"
              y="150"
              width="30"
              height="110"
              className={getRegionClass("shaft")}
              onClick={() => handleBoneClick("femur", "proximal")}
              onMouseEnter={() => handleRegionHover("shaft", true)}
              onMouseLeave={() => handleRegionHover("shaft", false)}
            />
            {/* Distal Condyles */}
            <path
              d="M 185,260 H 215 L 230,300 C 230,320 170,320 170,300 Z"
              className={getRegionClass("distal")}
              onClick={() => handleBoneClick("femur", "proximal")}
              onMouseEnter={() => handleRegionHover("distal", true)}
              onMouseLeave={() => handleRegionHover("distal", false)}
            />
            <text x="240" y="115" fill="#38bdf8" className="text-[10px] font-bold fill-current pointer-events-none">PROXIMAL (NECK/HIP)</text>
            <text x="240" y="210" fill="#64748b" className="text-[10px] font-bold fill-current pointer-events-none">SHAFT (DIAPHYSIS)</text>
            <text x="240" y="290" fill="#64748b" className="text-[10px] font-bold fill-current pointer-events-none">DISTAL (CONDYLES)</text>
          </svg>
        );

      case "tibia":
        return (
          <svg viewBox="0 0 400 400" className="w-full h-full max-h-[300px]">
            {/* Proximal Tibia (Plateau) */}
            <path
              d="M 160,90 H 240 L 230,130 H 170 Z"
              className={getRegionClass("proximal")}
              onClick={() => handleBoneClick("tibia", "proximal")}
              onMouseEnter={() => handleRegionHover("proximal", true)}
              onMouseLeave={() => handleRegionHover("proximal", false)}
            />
            {/* Shaft */}
            <rect
              x="185"
              y="130"
              width="30"
              height="130"
              className={getRegionClass("shaft")}
              onClick={() => handleBoneClick("tibia", "proximal")}
              onMouseEnter={() => handleRegionHover("shaft", true)}
              onMouseLeave={() => handleRegionHover("shaft", false)}
            />
            {/* Distal Tibia (Ankle) */}
            <path
              d="M 185,260 H 215 L 225,300 C 225,315 175,315 175,300 Z"
              className={getRegionClass("distal")}
              onClick={() => handleBoneClick("tibia", "distal")}
              onMouseEnter={() => handleRegionHover("distal", true)}
              onMouseLeave={() => handleRegionHover("distal", false)}
            />
            {/* Fibula decoration */}
            <path d="M 150,110 L 150,290" fill="none" stroke={strokeColor} strokeWidth="4" strokeDasharray="3_3" />
            <text x="260" y="110" fill="#38bdf8" className="text-[10px] font-bold fill-current pointer-events-none">PROXIMAL (PLATEAU)</text>
            <text x="260" y="200" fill="#64748b" className="text-[10px] font-bold fill-current pointer-events-none">SHAFT (DIAPHYSIS)</text>
            <text x="260" y="290" fill="#38bdf8" className="text-[10px] font-bold fill-current pointer-events-none">DISTAL (ANKLE JOINT)</text>
          </svg>
        );

      case "forearm":
        return (
          <svg viewBox="0 0 400 400" className="w-full h-full max-h-[300px]">
            {/* Proximal head */}
            <path
              d="M 155,90 H 235 L 225,120 H 165 Z"
              className={getRegionClass("distal")}
              onClick={() => handleBoneClick("forearm", "distal")}
              onMouseEnter={() => handleRegionHover("proximal", true)}
              onMouseLeave={() => handleRegionHover("proximal", false)}
            />
            {/* Shaft */}
            <rect
              x="170"
              y="120"
              width="45"
              height="140"
              className={getRegionClass("distal")}
              onClick={() => handleBoneClick("forearm", "distal")}
              onMouseEnter={() => handleRegionHover("shaft", true)}
              onMouseLeave={() => handleRegionHover("shaft", false)}
            />
            {/* Distal segment */}
            <path
              d="M 160,260 H 220 L 235,300 C 235,320 150,320 150,300 Z"
              className={getRegionClass("distal")}
              onClick={() => handleBoneClick("forearm", "distal")}
              onMouseEnter={() => handleRegionHover("distal", true)}
              onMouseLeave={() => handleRegionHover("distal", false)}
            />
            <text x="250" y="110" fill="#64748b" className="text-[10px] font-bold fill-current pointer-events-none">PROXIMAL (ELBOW)</text>
            <text x="250" y="195" fill="#64748b" className="text-[10px] font-bold fill-current pointer-events-none">SHAFT (FOREARM)</text>
            <text x="250" y="290" fill="#38bdf8" className="text-[10px] font-bold fill-current pointer-events-none">DISTAL (RADIUS/WRIST)</text>
          </svg>
        );

      case "spine":
        return (
          <svg viewBox="0 0 400 400" className="w-full h-full max-h-[300px]">
            <g
              className={getRegionClass("thoracolumbar")}
              onClick={() => handleBoneClick("spine", "thoracolumbar")}
              onMouseEnter={() => handleRegionHover("thoracolumbar", true)}
              onMouseLeave={() => handleRegionHover("thoracolumbar", false)}
            >
              <rect x="150" y="80" width="100" height="40" rx="4" />
              <rect x="160" y="128" width="80" height="12" rx="2" fill="none" stroke={strokeColor} strokeWidth="1" />
              <rect x="150" y="148" width="100" height="40" rx="4" />
              <rect x="160" y="196" width="80" height="12" rx="2" fill="none" stroke={strokeColor} strokeWidth="1" />
              <rect x="150" y="216" width="100" height="40" rx="4" />
            </g>
            <text x="110" y="300" fill="#38bdf8" className="text-xs font-bold fill-current pointer-events-none">THORACOLUMBAR SPINE (DENIS)</text>
          </svg>
        );

      case "pelvis":
        return (
          <svg viewBox="0 0 400 400" className="w-full h-full max-h-[300px]">
            <path
              d="M 100,120 C 80,60 180,80 200,120 C 220,80 320,60 300,120 C 280,160 260,180 200,240 C 140,180 120,160 100,120 Z"
              className={getRegionClass("pelvic-ring")}
              onClick={() => handleBoneClick("pelvis", "pelvic-ring")}
              onMouseEnter={() => handleRegionHover("pelvic-ring", true)}
              onMouseLeave={() => handleRegionHover("pelvic-ring", false)}
            />
            <circle cx="160" cy="220" r="22" fill="none" stroke={strokeColor} strokeWidth="4" />
            <circle cx="240" cy="220" r="22" fill="none" stroke={strokeColor} strokeWidth="4" />
            <text x="145" y="290" fill="#38bdf8" className="text-xs font-bold fill-current pointer-events-none">PELVIC RING (TILE)</text>
          </svg>
        );

      case "pediatric-physis":
        return (
          <svg viewBox="0 0 400 400" className="w-full h-full max-h-[300px]">
            <path d="M 160,80 H 240 V 160 H 160 Z" fill="none" stroke={strokeColor} strokeWidth="4" />
            <path d="M 160,175 H 240 V 280 H 160 Z" fill="none" stroke={strokeColor} strokeWidth="4" />
            <line
              x1="150"
              y1="168"
              x2="250"
              y2="168"
              className={getRegionClass("physis")}
              onClick={() => handleBoneClick("pediatric-physis", "physis")}
              onMouseEnter={() => handleRegionHover("physis", true)}
              onMouseLeave={() => handleRegionHover("physis", false)}
            />
            <text x="100" y="320" fill="#38bdf8" className="text-xs font-bold fill-current pointer-events-none">PEDIATRIC PHYSEAL GROWTH PLATE</text>
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoveredBone(null)}
      className="relative w-full h-full flex flex-col select-none overflow-hidden"
    >
      {/* Subtle Background Decorative Grid (Frameless) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Header View: Floating Back Button if zoomed, floating subtle header otherwise */}
      <div className="absolute top-2 left-2 right-2 z-30 flex items-center justify-between pointer-events-none">
        {zoomedBoneId && (
          <button
            onClick={handleBackToFullBody}
            className="pointer-events-auto flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-clinical-card/80 hover:bg-clinical-primary/20 border border-clinical-border hover:border-clinical-primary text-slate-200 hover:text-clinical-primary backdrop-blur-md shadow-lg transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{language === "en" ? "Back to Skeleton" : "ย้อนกลับตัวเต็ม"}</span>
          </button>
        )}

        {zoomedBoneId && (
          <span className="pointer-events-auto px-3 py-1.5 rounded-xl bg-clinical-card/80 backdrop-blur-md border border-clinical-border/40 text-xs font-bold uppercase tracking-wider text-clinical-primary flex items-center gap-1.5 shadow-lg">
            <Layers className="w-3.5 h-3.5" />
            {hotspots.find(h => h.id === zoomedBoneId)?.name[language]}
          </span>
        )}
      </div>

      {/* Wrapper for full-screen skeleton image or zoomed bone SVG */}
      <div className="flex-1 w-full h-full flex items-center justify-center min-h-0 relative z-10">
        {zoomedBoneId ? (
          /* Zoomed Bone View */
          <div className="w-full h-full flex items-center justify-center p-8 pt-16 animate-scale-up">
            {renderZoomedBone()}
          </div>
        ) : (
          /* Full Body Skeleton Map (Frameless, Maximum Size) */
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Background Image - Glow Outline Skeleton */}
            <img 
              src="/images/skeleton_front.jpg" 
              alt="Anatomical Skeleton" 
              className="w-full h-full max-h-[85vh] object-contain opacity-90 select-none pointer-events-none filter drop-shadow-[0_0_15px_rgba(56,189,248,0.15)]" 
            />

            {/* Hotspots Overlay SVG */}
            <svg
              viewBox="0 0 1000 1500"
              className="absolute inset-0 w-full h-full max-h-[85vh] m-auto z-10"
            >
              {/* ================= SVG INTERACTIVE HOTSPOTS ================= */}

              {/* 1. Clavicle */}
              <g
                onClick={() => handleBoneClick("clavicle", "allman")}
                onMouseEnter={() => setHoveredBone(getHotspot("clavicle", "allman"))}
                onMouseLeave={() => setHoveredBone(null)}
              >
                <ellipse cx="380" cy="290" rx="35" ry="12" className={getHotspotClasses("clavicle")} />
                <ellipse cx="620" cy="290" rx="35" ry="12" className={getHotspotClasses("clavicle")} />
              </g>

              {/* 2. Humerus */}
              <g
                onClick={() => handleBoneClick("humerus", "proximal")}
                onMouseEnter={() => setHoveredBone(getHotspot("humerus", "proximal"))}
                onMouseLeave={() => setHoveredBone(null)}
              >
                <circle cx="325" cy="350" r="32" className={getHotspotClasses("humerus")} />
                <circle cx="675" cy="350" r="32" className={getHotspotClasses("humerus")} />
              </g>

              {/* 3. Spine */}
              <g
                onClick={() => handleBoneClick("spine", "thoracolumbar")}
                onMouseEnter={() => setHoveredBone(getHotspot("spine", "thoracolumbar"))}
                onMouseLeave={() => setHoveredBone(null)}
              >
                <ellipse cx="500" cy="460" rx="25" ry="60" className={getHotspotClasses("spine")} />
              </g>

              {/* 4. Forearm */}
              <g
                onClick={() => handleBoneClick("forearm", "distal")}
                onMouseEnter={() => setHoveredBone(getHotspot("forearm", "distal"))}
                onMouseLeave={() => setHoveredBone(null)}
              >
                <circle cx="265" cy="770" r="35" className={getHotspotClasses("forearm")} />
                <circle cx="735" cy="770" r="35" className={getHotspotClasses("forearm")} />
              </g>

              {/* 5. Pelvis */}
              <g
                onClick={() => handleBoneClick("pelvis", "pelvic-ring")}
                onMouseEnter={() => setHoveredBone(getHotspot("pelvis", "pelvic-ring"))}
                onMouseLeave={() => setHoveredBone(null)}
              >
                <circle cx="500" cy="700" r="50" className={getHotspotClasses("pelvis")} />
              </g>

              {/* 6. Femur */}
              <g
                onClick={() => handleBoneClick("femur", "proximal")}
                onMouseEnter={() => setHoveredBone(getHotspot("femur", "proximal"))}
                onMouseLeave={() => setHoveredBone(null)}
              >
                <circle cx="415" cy="775" r="35" className={getHotspotClasses("femur")} />
                <circle cx="585" cy="775" r="35" className={getHotspotClasses("femur")} />
              </g>

              {/* 7. Tibia - Split Knee (Proximal) and Ankle (Distal) */}
              <g
                onClick={() => handleBoneClick("tibia", "proximal")}
                onMouseEnter={() => setHoveredBone(getHotspot("tibia", "proximal"))}
                onMouseLeave={() => setHoveredBone(null)}
              >
                {/* Knee */}
                <circle cx="420" cy="1080" r="35" className={getHotspotClasses("tibia")} />
                <circle cx="580" cy="1080" r="35" className={getHotspotClasses("tibia")} />
              </g>
              <g
                onClick={() => handleBoneClick("tibia", "distal")}
                onMouseEnter={() => setHoveredBone(getHotspot("tibia", "proximal"))}
                onMouseLeave={() => setHoveredBone(null)}
              >
                {/* Ankle */}
                <circle cx="425" cy="1375" r="30" className={getHotspotClasses("tibia")} />
                <circle cx="575" cy="1375" r="30" className={getHotspotClasses("tibia")} />
              </g>

              {/* ================= 8. PEDIATRIC GROWTH PLATES (PHYSEAL LINES) ================= */}
              {pediatricMode && (
                <g
                  onClick={() => handleBoneClick("pediatric-physis", "physis")}
                  onMouseEnter={() => setHoveredBone(getHotspot("pediatric-physis", "physis"))}
                  onMouseLeave={() => setHoveredBone(null)}
                  className="cursor-pointer"
                >
                  {/* Wrist Physes (Distal Radius) */}
                  <line x1="245" y1="760" x2="285" y2="760" className="stroke-clinical-glow stroke-[4px] stroke-dasharray-[1_3] filter drop-shadow-[0_0_6px_rgba(56,189,248,1)] animate-pulse" />
                  <line x1="715" y1="760" x2="755" y2="760" className="stroke-clinical-glow stroke-[4px] stroke-dasharray-[1_3] filter drop-shadow-[0_0_6px_rgba(56,189,248,1)] animate-pulse" />

                  {/* Knee Physes (Distal Femurs) */}
                  <line x1="400" y1="1070" x2="440" y2="1070" className="stroke-clinical-glow stroke-[4px] stroke-dasharray-[2_3] filter drop-shadow-[0_0_6px_rgba(56,189,248,1)] animate-pulse" />
                  <line x1="560" y1="1070" x2="600" y2="1070" className="stroke-clinical-glow stroke-[4px] stroke-dasharray-[2_3] filter drop-shadow-[0_0_6px_rgba(56,189,248,1)] animate-pulse" />

                  {/* Ankle Physes (Distal Tibias) */}
                  <line x1="410" y1="1365" x2="440" y2="1365" className="stroke-clinical-glow stroke-[4px] stroke-dasharray-[1_2] filter drop-shadow-[0_0_6px_rgba(56,189,248,1)] animate-pulse" />
                  <line x1="560" y1="1365" x2="590" y2="1365" className="stroke-clinical-glow stroke-[4px] stroke-dasharray-[1_2] filter drop-shadow-[0_0_6px_rgba(56,189,248,1)] animate-pulse" />
                </g>
              )}

            </svg>

            {/* ── Humerus Region Popup (HTML overlay – shows over SVG) ── */}
            {popupBoneId === "humerus" && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 50,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Dark backdrop – click to dismiss */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.55)",
                    backdropFilter: "blur(2px)",
                  }}
                  onClick={() => setPopupBoneId(null)}
                />

                {/* Popup card */}
                <div
                  style={{
                    position: "relative",
                    background: "rgba(15,23,42,0.97)",
                    border: "1.5px solid rgba(249,115,22,0.5)",
                    borderRadius: 16,
                    padding: "28px 36px",
                    boxShadow: "0 8px 40px rgba(0,0,0,0.7), 0 0 0 1px rgba(249,115,22,0.15)",
                    minWidth: 240,
                    animation: "fadeInUp 0.2s ease",
                  }}
                >
                  {/* Title */}
                  <div style={{ color: "#F59E0B", fontWeight: 800, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>HUMERUS</div>
                  <div style={{ color: "#94a3b8", fontSize: 12, marginBottom: 20 }}>เลือกส่วนของกระดูก</div>

                  {/* Options */}
                  {[
                    { id: "proximal", label: "Proximal", sub: "หัวกระดูก (Shoulder)", icon: "▲" },
                    { id: "shaft",    label: "Shaft",    sub: "แกนกลาง (Diaphysis)",   icon: "▌" },
                    { id: "distal",   label: "Distal",   sub: "ปลายกระดูก (Elbow)",   icon: "▼" },
                  ].map(opt => (
                    <button
                      key={opt.id}
                      onClick={() => { setPopupBoneId(null); onSelectBone("humerus", opt.id); }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 14,
                        width: "100%",
                        background: "transparent",
                        border: "1.5px solid rgba(249,115,22,0.25)",
                        borderRadius: 10,
                        padding: "10px 16px",
                        marginBottom: 8,
                        cursor: "pointer",
                        transition: "all 0.15s",
                        textAlign: "left",
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLButtonElement).style.background = "rgba(249,115,22,0.15)";
                        (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(249,115,22,0.7)";
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                        (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(249,115,22,0.25)";
                      }}
                    >
                      <span style={{ color: "#F59E0B", fontSize: 18 }}>{opt.icon}</span>
                      <div>
                        <div style={{ color: "#F1F5F9", fontWeight: 700, fontSize: 15 }}>{opt.label}</div>
                        <div style={{ color: "#64748B", fontSize: 11 }}>{opt.sub}</div>
                      </div>
                    </button>
                  ))}

                  {/* Close hint */}
                  <div style={{ color: "#475569", fontSize: 10, textAlign: "center", marginTop: 4 }}>คลิกพื้นหลังเพื่อปิด</div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Tooltip Overlay */}
      {hoveredBone && (!hoveredBone.isPediatricOnly || pediatricMode) && (
        <div
          style={{
            position: "absolute",
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
          }}
          className="z-50 pointer-events-none bg-clinical-cardLight border border-clinical-border px-3 py-1.5 rounded-lg shadow-lg text-xs flex flex-col animate-fade-in"
        >
          <span className="font-semibold text-slate-100">{hoveredBone.name[language]}</span>
          <span className="text-[10px] text-clinical-primary font-medium mt-0.5">
            {isQuizMode 
              ? (language === "en" ? "Click to Answer" : "คลิกเพื่อตอบคำถาม")
              : (language === "en" ? "Click to Zoom & Select" : "คลิกเพื่อซูมและเลือกส่วน")}
          </span>
        </div>
      )}
    </div>
  );
};
