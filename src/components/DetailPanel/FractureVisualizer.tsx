import React from "react";

interface FractureVisualizerProps {
  illustrationId: string;
  showAsXray: boolean;
}

export const FractureVisualizer: React.FC<FractureVisualizerProps> = ({
  illustrationId,
  showAsXray,
}) => {
  // Theme colors based on selection
  const boneFill = showAsXray ? "rgba(226, 232, 240, 0.7)" : "rgba(30, 41, 59, 0.4)";
  const boneStroke = showAsXray ? "#ffffff" : "#64748b";
  const fractureStroke = "#f97316"; // Bright Orange
  const jointFill = showAsXray ? "rgba(15, 23, 42, 0.9)" : "rgba(8, 12, 20, 0.6)";

  const renderVisualizer = () => {
    const isPathOrUrl = illustrationId.includes(".") || illustrationId.includes("/") || illustrationId.startsWith("http");

    if (isPathOrUrl) {
      return (
        <img 
          src={illustrationId} 
          alt="Fracture Illustration" 
          className="max-w-full max-h-full object-contain rounded"
          style={{
            filter: showAsXray ? "brightness(0.85) contrast(1.15)" : "none"
          }}
        />
      );
    }

    switch (illustrationId) {
      // ================= GARDEN (FEMORAL NECK) =================
      case "garden_1":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-h-[220px]">
            {/* Pelvis Acetabulum Cup */}
            <path d="M40,50 C50,20 120,20 130,50" stroke={boneStroke} strokeWidth="3" fill="none" />
            {/* Femoral Head */}
            <circle cx="85" cy="55" r="28" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            {/* Femur Neck & Shaft */}
            <path d="M85,80 C70,110 60,130 60,180 L110,180 L110,120 C110,105 105,90 98,80 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            {/* Incomplete fracture line - Valgus impacted */}
            <path d="M68,85 L85,82" stroke={fractureStroke} strokeWidth="4" strokeLinecap="round" className="animate-pulse" />
            {/* Impacted indicator arrow */}
            <path d="M60,70 L72,78 M72,78 L65,79 M72,78 L71,71" stroke="#38bdf8" strokeWidth="2" fill="none" />
          </svg>
        );
      case "garden_2":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-h-[220px]">
            <path d="M40,50 C50,20 120,20 130,50" stroke={boneStroke} strokeWidth="3" fill="none" />
            <circle cx="85" cy="55" r="28" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            <path d="M85,83 C70,110 60,130 60,180 L110,180 L110,120 C110,105 105,90 98,83 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            {/* Complete undisplaced fracture line */}
            <path d="M64,83 L102,83" stroke={fractureStroke} strokeWidth="4" strokeLinecap="round" strokeDasharray="2_2" />
          </svg>
        );
      case "garden_3":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-h-[220px]">
            <path d="M40,50 C50,20 120,20 130,50" stroke={boneStroke} strokeWidth="3" fill="none" />
            {/* Femoral Head - Tilted Varus (medial angle) */}
            <g transform="translate(-8, 8) rotate(-15 85 55)">
              <circle cx="85" cy="55" r="28" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            </g>
            <path d="M85,85 C70,110 60,130 60,180 L110,180 L110,120 C110,105 105,90 98,85 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            {/* Complete partially displaced fracture line with gap */}
            <path d="M58,80 L76,84 M88,88 L104,82" stroke={fractureStroke} strokeWidth="4" strokeLinecap="round" />
            {/* Varus shift indicator */}
            <path d="M102,40 Q85,45 70,55" stroke="#f43f5e" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
          </svg>
        );
      case "garden_4":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-h-[220px]">
            <path d="M40,50 C50,20 120,20 130,50" stroke={boneStroke} strokeWidth="3" fill="none" />
            {/* Femoral Head - Completely separated and back to pelvic alignment */}
            <circle cx="85" cy="45" r="28" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            {/* Shaft/Neck displaced upwards and outwards */}
            <g transform="translate(15, -15)">
              <path d="M85,90 C70,110 60,130 60,180 L110,180 L110,120 C110,105 105,90 98,90 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            </g>
            {/* Floating fracture lines showing absolute disconnect */}
            <path d="M56,66 L90,62" stroke={fractureStroke} strokeWidth="4" />
            <path d="M78,80 L112,74" stroke={fractureStroke} strokeWidth="4" />
          </svg>
        );

      // ================= PAUWELS (SHEAR ANGLE) =================
      case "pauwels_1":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-h-[220px]">
            <circle cx="100" cy="55" r="28" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            <path d="M100,83 L80,180 L130,180 L120,115 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            {/* Flat <30 deg fracture line */}
            <line x1="75" y1="88" x2="122" y2="98" stroke={fractureStroke} strokeWidth="4" />
            {/* Angle Indicator */}
            <line x1="70" y1="88" x2="130" y2="88" stroke="#64748b" strokeWidth="1" strokeDasharray="2_2" />
            <text x="135" y="93" className="fill-clinical-primary text-[10px] font-bold">~20°</text>
          </svg>
        );
      case "pauwels_2":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-h-[220px]">
            <circle cx="100" cy="55" r="28" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            <path d="M100,83 L80,180 L130,180 L120,115 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            {/* 30-50 deg fracture line */}
            <line x1="74" y1="84" x2="118" y2="120" stroke={fractureStroke} strokeWidth="4" />
            <line x1="70" y1="84" x2="130" y2="84" stroke="#64748b" strokeWidth="1" strokeDasharray="2_2" />
            <text x="125" y="105" className="fill-clinical-primary text-[10px] font-bold">~40°</text>
          </svg>
        );
      case "pauwels_3":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-h-[220px]">
            <circle cx="100" cy="55" r="28" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            <path d="M100,83 L80,180 L130,180 L120,115 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            {/* Vertical >50 deg fracture line */}
            <line x1="78" y1="82" x2="108" y2="155" stroke={fractureStroke} strokeWidth="4" />
            <line x1="70" y1="82" x2="130" y2="82" stroke="#64748b" strokeWidth="1" strokeDasharray="2_2" />
            <text x="115" y="130" className="fill-clinical-primary text-[10px] font-bold">~65°</text>
          </svg>
        );

      // ================= SCHATZKER (TIBIAL PLATEAU) =================
      case "schatzker_1":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-h-[220px]">
            {/* Femur Condyles (reference top) */}
            <path d="M50,30 C65,30 75,50 90,50 C105,50 115,30 130,30 C150,30 160,60 145,70 C130,80 115,70 100,70 C85,70 70,80 55,70 C40,60 40,30 50,30 Z" fill={jointFill} stroke={boneStroke} strokeWidth="1" />
            {/* Tibia Main Body */}
            <path d="M55,80 C55,80 90,80 100,80 C110,80 145,80 145,80 L135,180 L65,180 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            {/* Lateral Split */}
            <path d="M125,80 L115,120 M115,120 L140,110" stroke={fractureStroke} strokeWidth="4" strokeLinecap="round" />
          </svg>
        );
      case "schatzker_2":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-h-[220px]">
            <path d="M50,30 C65,30 75,50 90,50 C105,50 115,30 130,30 C150,30 160,60 145,70 C130,80 115,70 100,70 C85,70 70,80 55,70 C40,60 40,30 50,30 Z" fill={jointFill} stroke={boneStroke} strokeWidth="1" />
            {/* Tibia with depressed lateral side */}
            <path d="M55,80 H100 Q110,80 115,92 H135 L145,95 L135,180 L65,180 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            {/* Split + depression fracture lines */}
            <path d="M115,92 L110,130 M110,130 L138,115" stroke={fractureStroke} strokeWidth="4" />
            <path d="M115,92 H138" stroke={fractureStroke} strokeWidth="3" strokeDasharray="1_2" />
          </svg>
        );
      case "schatzker_3":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-h-[220px]">
            <path d="M50,30 C65,30 75,50 90,50 C105,50 115,30 130,30 C150,30 160,60 145,70 C130,80 115,70 100,70 C85,70 70,80 55,70 C40,60 40,30 50,30 Z" fill={jointFill} stroke={boneStroke} strokeWidth="1" />
            {/* Central lateral depression */}
            <path d="M55,80 H105 Q115,96 125,80 H145 L135,180 L65,180 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            {/* Depressed joint line */}
            <path d="M106,85 Q115,98 124,85" stroke={fractureStroke} strokeWidth="4" fill="none" />
          </svg>
        );
      case "schatzker_4":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-h-[220px]">
            <path d="M50,30 C65,30 75,50 90,50 C105,50 115,30 130,30 C150,30 160,60 145,70 C130,80 115,70 100,70 C85,70 70,80 55,70 C40,60 40,30 50,30 Z" fill={jointFill} stroke={boneStroke} strokeWidth="1" />
            <path d="M55,80 C55,80 90,80 100,80 C110,80 145,80 145,80 L135,180 L65,180 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            {/* Medial side split (Opposite lateral) */}
            <path d="M75,80 L85,120 M85,120 L60,110" stroke={fractureStroke} strokeWidth="4" />
          </svg>
        );
      case "schatzker_5":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-h-[220px]">
            <path d="M50,30 C65,30 75,50 90,50 C105,50 115,30 130,30 C150,30 160,60 145,70 C130,80 115,70 100,70 C85,70 70,80 55,70 C40,60 40,30 50,30 Z" fill={jointFill} stroke={boneStroke} strokeWidth="1" />
            <path d="M55,80 Q100,80 145,80 L135,180 L65,180 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            {/* Bicondylar fracture lines (V shape) */}
            <path d="M75,80 L95,115 M95,115 L125,80" stroke={fractureStroke} strokeWidth="4" />
            <path d="M95,115 L100,140" stroke={fractureStroke} strokeWidth="3" strokeDasharray="1_2" />
          </svg>
        );
      case "schatzker_6":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-h-[220px]">
            <path d="M50,30 C65,30 75,50 90,50 C105,50 115,30 130,30 C150,30 160,60 145,70 C130,80 115,70 100,70 C85,70 70,80 55,70 C40,60 40,30 50,30 Z" fill={jointFill} stroke={boneStroke} strokeWidth="1" />
            {/* Articular block separated from shaft */}
            <path d="M55,80 Q100,80 145,80 L140,110 L60,110 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            <path d="M63,120 L137,120 L132,180 L68,180 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            {/* Split lines in joint */}
            <path d="M85,80 L100,105 M100,105 L125,80" stroke={fractureStroke} strokeWidth="3" />
            {/* Metaphyseal transverse separation line */}
            <path d="M52,114 L148,116" stroke={fractureStroke} strokeWidth="5.5" strokeLinecap="round" />
          </svg>
        );

      // ================= FERNANDEZ (DISTAL RADIUS) =================
      case "fernandez_1":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-h-[220px]">
            {/* Radius bone shaft and head */}
            <path d="M80,30 L80,120 L60,140 L60,165 L140,165 L140,140 L120,120 L120,30 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            {/* Extra-articular transverse fracture (bending) */}
            <path d="M58,135 L142,135" stroke={fractureStroke} strokeWidth="4.5" strokeLinecap="round" />
            {/* Angulation arrows */}
            <path d="M100,145 Q100,120 120,110" stroke="#0ea5e9" strokeWidth="2" fill="none" />
          </svg>
        );
      case "fernandez_2":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-h-[220px]">
            <path d="M80,30 L80,120 L60,140 L60,165 L140,165 L140,140 L120,120 L120,30 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            {/* Volar/Dorsal Lip Shear line */}
            <path d="M110,165 L140,138" stroke={fractureStroke} strokeWidth="4.5" strokeLinecap="round" />
            {/* Displacement arrow of subluxed piece */}
            <path d="M130,150 L145,138" stroke="#ef4444" strokeWidth="2.5" />
          </svg>
        );
      case "fernandez_3":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-h-[220px]">
            {/* Radius with articular depression (Die-punch) */}
            <path d="M80,30 L80,120 L60,140 L60,165 H95 V153 H110 V165 H140 L140,140 L120,120 L120,30 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            {/* Fracture line around the depression */}
            <path d="M95,165 V153 H110 V165" stroke={fractureStroke} strokeWidth="4.5" fill="none" />
          </svg>
        );
      case "fernandez_4":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-h-[220px]">
            <path d="M80,30 L80,120 L60,140 L60,165 L140,165 L140,140 L120,120 L120,30 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            {/* Radial styloid avulsion (Lateral corner) */}
            <path d="M60,150 L85,165" stroke={fractureStroke} strokeWidth="4.5" />
          </svg>
        );
      case "fernandez_5":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-h-[220px]">
            <path d="M80,30 L80,120 L60,140 L120,120 L120,30 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            {/* Scattered pieces (comminuted) */}
            <path d="M65,130 L75,150 L60,160 Z" fill={boneFill} stroke={boneStroke} strokeWidth="1.5" />
            <path d="M80,135 L105,140 L95,165 L78,155 Z" fill={boneFill} stroke={boneStroke} strokeWidth="1.5" />
            <path d="M110,130 L135,130 L140,155 L115,160 Z" fill={boneFill} stroke={boneStroke} strokeWidth="1.5" />
            {/* Fracture mesh lines */}
            <path d="M60,140 L140,130 M80,135 L95,165 M110,130 L115,160 M75,150 L115,160" stroke={fractureStroke} strokeWidth="3" />
          </svg>
        );

      // ================= WEBER (ANKLE) =================
      case "weber_a":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-h-[220px]">
            {/* Tibia Plafond */}
            <path d="M50,20 L50,150 L100,150 L95,165 L120,165 L115,20 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            {/* Fibula */}
            <path d="M140,20 L140,150 L150,165 L135,175 L128,150 L128,20 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            {/* Transverse fracture below syndesmosis */}
            <line x1="126" y1="160" x2="152" y2="160" stroke={fractureStroke} strokeWidth="4" />
            {/* Syndesmosis Ligament (intact) */}
            <path d="M100,130 H128 M100,140 H128" stroke="#10b981" strokeWidth="2" strokeDasharray="1_1" />
          </svg>
        );
      case "weber_b":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-h-[220px]">
            <path d="M50,20 L50,150 L100,150 L95,165 L120,165 L115,20 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            <path d="M140,20 L140,150 L150,165 L135,175 L128,150 L128,20 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            {/* Oblique fracture starting at syndesmosis level */}
            <line x1="126" y1="145" x2="148" y2="120" stroke={fractureStroke} strokeWidth="4" />
            {/* Syndesmosis Ligament (partially torn) */}
            <path d="M100,130 H128" stroke="#10b981" strokeWidth="2" />
            <path d="M100,140 H128" stroke="#ef4444" strokeWidth="2" strokeDasharray="1_1" />
          </svg>
        );
      case "weber_c":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-h-[220px]">
            <path d="M50,20 L50,150 L100,150 L95,165 L120,165 L115,20 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            <path d="M140,20 L140,150 L150,165 L135,175 L128,150 L128,20 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            {/* High fibula fracture line (above syndesmosis) */}
            <line x1="126" y1="90" x2="142" y2="90" stroke={fractureStroke} strokeWidth="4" />
            {/* Syndesmosis Ligament (fully torn/red) */}
            <path d="M100,130 H128" stroke="#ef4444" strokeWidth="2" strokeDasharray="2_2" />
            <path d="M100,140 H128" stroke="#ef4444" strokeWidth="2" strokeDasharray="2_2" />
          </svg>
        );

      // ================= SALTER-HARRIS (PEDIATRIC) =================
      case "salter_1":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-h-[220px]">
            {/* Metaphysis */}
            <path d="M50,30 L50,110 L150,110 L150,30 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            {/* Epiphysis (shifted slightly) */}
            <g transform="translate(10, 0)">
              <path d="M50,122 L50,160 Q100,180 150,160 L150,122 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            </g>
            {/* Physical Slip - line between Metaphysis and Epiphysis */}
            <path d="M48,116 H162" stroke={fractureStroke} strokeWidth="4.5" strokeDasharray="2_2" className="animate-pulse" />
          </svg>
        );
      case "salter_2":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-h-[220px]">
            {/* Metaphysis with fracture going up */}
            <path d="M50,30 L50,110 L120,110 L140,80 L150,80 L150,30 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            {/* Separate triangular metaphyseal piece */}
            <path d="M124,110 L148,110 L148,84 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            {/* Epiphysis */}
            <path d="M50,122 L50,160 Q100,180 150,160 L150,122 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            {/* Fracture lines (physis + metaphyseal component) */}
            <path d="M48,116 H148 L124,84" stroke={fractureStroke} strokeWidth="4.5" fill="none" />
          </svg>
        );
      case "salter_3":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-h-[220px]">
            {/* Metaphysis */}
            <path d="M50,30 L50,110 L150,110 L150,30 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            {/* Epiphysis with vertical fracture line */}
            <path d="M50,122 L50,160 Q100,180 95,163 V122 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            <path d="M105,122 V165 Q125,170 150,160 L150,122 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            {/* Fracture lines (physis + epiphyseal vertical split) */}
            <path d="M98,116 H160 M100,116 V164" stroke={fractureStroke} strokeWidth="4.5" fill="none" />
          </svg>
        );
      case "salter_4":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-h-[220px]">
            {/* Metaphysis and Epiphysis divided by a diagonal line going through both and the physis */}
            {/* Left Fragment */}
            <path d="M50,30 L50,160 Q70,168 85,150 L115,80 L115,30 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            {/* Right Fragment */}
            <path d="M125,30 L125,70 L95,140 Q120,172 150,160 L150,30 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            {/* Transverse growth plate lines showing */}
            <path d="M48,116 H95 M120,116 H152" stroke={boneStroke} strokeWidth="1" strokeDasharray="1_1" />
            {/* Continuous fracture line cutting straight through metaphysis, physis, and epiphysis */}
            <line x1="120" y1="65" x2="84" y2="152" stroke={fractureStroke} strokeWidth="4.5" />
          </svg>
        );
      case "salter_5":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-h-[220px]">
            {/* Metaphysis */}
            <path d="M50,30 L50,118 L150,118 L150,30 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            {/* Epiphysis (crushed into contact) */}
            <path d="M50,122 L50,160 Q100,180 150,160 L150,122 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            {/* Crushed/Squished Physis line */}
            <path d="M48,120 H152" stroke={fractureStroke} strokeWidth="6" strokeLinecap="round" className="animate-pulse" />
            {/* Force vectors crushing plate */}
            <path d="M70,95 L70,115 M130,95 L130,115" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrow)" />
            <path d="M70,145 L70,125 M130,145 L130,125" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrow)" />
          </svg>
        );

      // ================= CLAVICLE (ALLMAN) =================
      case "clavicle_allman_1":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-h-[220px]">
            {/* Clavicle - Left half (medial, attached to sternum) */}
            <path d="M30,100 C60,95 80,90 95,95" fill="none" stroke={boneStroke} strokeWidth="6" strokeLinecap="round" />
            {/* Clavicle - Right half (lateral, displaced downwards) */}
            <path d="M105,110 C120,115 140,110 170,105" fill="none" stroke={boneStroke} strokeWidth="6" strokeLinecap="round" />
            {/* Midshaft fracture split */}
            <path d="M93,92 L107,113" stroke={fractureStroke} strokeWidth="4" strokeLinecap="round" className="animate-pulse" />
            {/* Sternum anchor reference */}
            <rect x="15" y="85" width="15" height="30" rx="3" fill="none" stroke={boneStroke} strokeWidth="2" />
          </svg>
        );
      case "clavicle_allman_2":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-h-[220px]">
            {/* Clavicle - Medial body pulled upwards by SCM muscle */}
            <path d="M30,95 C65,85 100,75 130,75" fill="none" stroke={boneStroke} strokeWidth="6" strokeLinecap="round" />
            {/* Clavicle - Lateral fragment remaining aligned with acromion */}
            <path d="M145,100 C155,100 160,100 170,100" fill="none" stroke={boneStroke} strokeWidth="6" strokeLinecap="round" />
            {/* Displaced distal third fracture line */}
            <path d="M127,70 L146,105" stroke={fractureStroke} strokeWidth="4" strokeLinecap="round" />
            {/* Sternum anchor reference */}
            <rect x="15" y="80" width="15" height="30" rx="3" fill="none" stroke={boneStroke} strokeWidth="2" />
            {/* Pull direction arrow */}
            <path d="M110,65 L110,45" stroke="#f43f5e" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
          </svg>
        );
      case "clavicle_allman_3":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-h-[220px]">
            {/* Clavicle - Minimally displaced medial third fracture */}
            <path d="M30,100 C40,100 48,100 52,100" fill="none" stroke={boneStroke} strokeWidth="6" strokeLinecap="round" />
            <path d="M58,100 C80,98 120,95 170,95" fill="none" stroke={boneStroke} strokeWidth="6" strokeLinecap="round" />
            {/* Medial fracture line */}
            <path d="M51,93 L57,107" stroke={fractureStroke} strokeWidth="3" strokeLinecap="round" />
            <rect x="15" y="85" width="15" height="30" rx="3" fill="none" stroke={boneStroke} strokeWidth="2" />
          </svg>
        );

      // ================= PROXIMAL HUMERUS (NEER) =================
      case "humerus_neer_1":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-h-[220px]">
            {/* Scapula Glenoid Cup */}
            <path d="M60,60 C50,80 50,110 60,130" stroke={boneStroke} strokeWidth="3" fill="none" />
            {/* Humerus Head */}
            <path d="M95,65 C115,65 130,80 130,95 C130,100 125,108 120,112 L90,112 C80,105 80,85 95,65 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            {/* Humerus Greater Tuberosity & Shaft */}
            <path d="M130,95 C140,95 148,105 145,115 L125,115 L125,180 L95,180 L95,112 L120,112" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            {/* Surgical Neck hairline fracture (Undisplaced) */}
            <path d="M94,112 H146" stroke={fractureStroke} strokeWidth="3" strokeDasharray="2_2" />
          </svg>
        );
      case "humerus_neer_2":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-h-[220px]">
            <path d="M60,60 C50,80 50,110 60,130" stroke={boneStroke} strokeWidth="3" fill="none" />
            {/* Head and Tuberosities still united */}
            <path d="M95,65 C115,65 130,80 130,95 C140,95 148,105 145,115 L95,115 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            {/* Shaft displaced medially (to the left/anatomical medial) */}
            <g transform="translate(-15, 8)">
              <path d="M110,120 L110,180 L80,180 L80,120 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            </g>
            {/* Displaced Surgical Neck fracture line */}
            <path d="M92,114 L118,122" stroke={fractureStroke} strokeWidth="4" />
          </svg>
        );
      case "humerus_neer_3":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-h-[220px]">
            <path d="M60,60 C50,80 50,110 60,130" stroke={boneStroke} strokeWidth="3" fill="none" />
            {/* Head segment */}
            <path d="M95,65 C115,65 130,80 130,95 L95,95 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            {/* Greater Tuberosity - Displaced Superiorly/Outward */}
            <g transform="translate(18, -18)">
              <path d="M125,85 C135,85 143,95 140,105 L115,105 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            </g>
            {/* Shaft - Displaced Medially */}
            <g transform="translate(-12, 10)">
              <path d="M115,120 L115,180 L85,180 L85,120 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            </g>
            {/* Multiple fracture lines */}
            <path d="M113,85 L129,91" stroke={fractureStroke} strokeWidth="4" />
            <path d="M94,115 L118,125" stroke={fractureStroke} strokeWidth="4" />
          </svg>
        );
      case "humerus_neer_4":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-h-[220px]">
            <path d="M60,60 C50,80 50,110 60,130" stroke={boneStroke} strokeWidth="3" fill="none" />
            {/* Humeral Head - Rotated and completely detached */}
            <g transform="translate(-10, -5) rotate(25 95 75)">
              <path d="M95,65 C115,65 130,80 130,95 L95,95 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            </g>
            {/* Greater Tuberosity - Displaced laterally */}
            <g transform="translate(25, -15)">
              <path d="M125,85 C135,85 143,95 140,105 L115,105 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            </g>
            {/* Lesser Tuberosity - Displaced medially */}
            <g transform="translate(-25, 20)">
              <path d="M85,100 C75,100 68,110 70,120 L95,120 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            </g>
            {/* Shaft - Displaced upwards */}
            <g transform="translate(8, 20)">
              <path d="M110,120 L110,180 L80,180 L80,120 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            </g>
            {/* Fractures glowing lines */}
            <path d="M78,82 L98,90" stroke={fractureStroke} strokeWidth="3" />
            <path d="M118,92 L132,102" stroke={fractureStroke} strokeWidth="3" />
            <path d="M85,125 L108,135" stroke={fractureStroke} strokeWidth="3" />
          </svg>
        );

      // ================= PELVIS (TILE) =================
      case "pelvis_tile_a":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-h-[220px]">
            {/* Pelvis butterfly symmetry outlines */}
            <path d="M40,60 C30,30 80,40 100,60 C120,40 170,30 160,60 C150,80 140,90 100,120 C60,90 50,80 40,60 Z" fill="none" stroke={boneStroke} strokeWidth="3" />
            {/* Inner obturator rings */}
            <circle cx="75" cy="115" r="15" fill="none" stroke={boneStroke} strokeWidth="2" />
            <circle cx="125" cy="115" r="15" fill="none" stroke={boneStroke} strokeWidth="2" />
            {/* Isolated stable ramus fracture */}
            <path d="M86,110 L94,124" stroke={fractureStroke} strokeWidth="4" strokeLinecap="round" className="animate-pulse" />
          </svg>
        );
      case "pelvis_tile_b":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-h-[220px]">
            {/* Split pelvis rotated outward (open book) */}
            {/* Left side */}
            <g transform="translate(-10, 0) rotate(-6 100 120)">
              <path d="M40,60 C30,30 80,40 100,60 C100,80 100,90 85,105 C70,90 50,80 40,60 Z" fill="none" stroke={boneStroke} strokeWidth="3" />
              <path d="M85,105 C70,115 60,110 70,125 C80,135 90,120 95,115" fill="none" stroke={boneStroke} strokeWidth="2" />
            </g>
            {/* Right side */}
            <g transform="translate(10, 0) rotate(6 100 120)">
              <path d="M100,60 C120,40 170,30 160,60 C150,80 130,90 115,105 C100,90 100,80 100,60 Z" fill="none" stroke={boneStroke} strokeWidth="3" />
              <path d="M115,105 C130,115 140,110 130,125 C120,135 110,120 105,115" fill="none" stroke={boneStroke} strokeWidth="2" />
            </g>
            {/* Wide Pubic Symphysis Gap (Anterior) */}
            <line x1="88" y1="114" x2="112" y2="114" stroke={fractureStroke} strokeWidth="5.5" strokeLinecap="round" />
            {/* Outward rotation indicator arrows */}
            <path d="M50,80 Q40,90 30,85" stroke="#38bdf8" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
            <path d="M150,80 Q160,90 170,85" stroke="#38bdf8" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
          </svg>
        );
      case "pelvis_tile_c":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-h-[220px]">
            {/* Left side normal */}
            <path d="M40,60 C30,30 80,40 100,60 C100,80 100,90 85,105 C70,90 50,80 40,60 Z" fill="none" stroke={boneStroke} strokeWidth="3" />
            <path d="M85,105 C70,115 60,110 70,125 C80,135 90,120 95,115" fill="none" stroke={boneStroke} strokeWidth="2" />
            {/* Right side shifted vertically upwards and outwards */}
            <g transform="translate(14, -22)">
              <path d="M100,60 C120,40 170,30 160,60 C150,80 130,90 115,105 C100,90 100,80 100,60 Z" fill="none" stroke={boneStroke} strokeWidth="3" />
              <path d="M115,105 C130,115 140,110 130,125 C120,135 110,120 105,115" fill="none" stroke={boneStroke} strokeWidth="2" />
            </g>
            {/* Sacroiliac Joint Disruption (Posterior) */}
            <path d="M96,62 L114,48" stroke={fractureStroke} strokeWidth="4.5" />
            {/* Pubic Symphysis displacement */}
            <path d="M95,115 L118,93" stroke={fractureStroke} strokeWidth="4.5" />
            {/* Vertical shift indicator arrow */}
            <path d="M150,75 L150,45" stroke="#f43f5e" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
          </svg>
        );

      // ================= SPINE (DENIS) =================
      case "spine_denis_compression":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-h-[220px]">
            {/* Top Vertebra */}
            <rect x="60" y="40" width="80" height="30" rx="3" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            {/* Intervertebral Disc */}
            <rect x="65" y="73" width="70" height="8" rx="2" fill={jointFill} stroke={boneStroke} strokeWidth="1" />
            {/* Middle Vertebra - Wedged Anteriorly (squished left wall) */}
            <path d="M60,103 L60,110 L140,115 L140,85 L85,85 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            {/* Compression Fracture line */}
            <path d="M60,103 L95,95" stroke={fractureStroke} strokeWidth="4" strokeLinecap="round" className="animate-pulse" />
            {/* Bottom Vertebra */}
            <rect x="60" y="130" width="80" height="30" rx="3" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            <rect x="65" y="120" width="70" height="8" rx="2" fill={jointFill} stroke={boneStroke} strokeWidth="1" />
          </svg>
        );
      case "spine_denis_burst":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-h-[220px]">
            {/* Spinal canal dotted representation */}
            <line x1="150" y1="30" x2="150" y2="170" stroke={boneStroke} strokeWidth="1" strokeDasharray="3_3" />
            {/* Top Vertebra */}
            <rect x="55" y="40" width="80" height="30" rx="3" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            {/* Middle Vertebra - Burst/exploded body */}
            <path d="M55,83 H85 L90,100 L95,83 H135 V117 H120 L115,108 L110,117 H55 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            {/* Exploded fracture lines radiating out */}
            <path d="M85,83 L110,117 M135,100 L115,108 M55,100 L90,100" stroke={fractureStroke} strokeWidth="3" />
            {/* Fragment retropulsing back into spinal canal */}
            <rect x="138" y="93" width="16" height="14" rx="2" fill={fractureStroke} className="animate-pulse" />
            {/* Bottom Vertebra */}
            <rect x="55" y="130" width="80" height="30" rx="3" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
          </svg>
        );
      case "spine_denis_chance":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-h-[220px]">
            {/* Stacking vertebra with posterior spinous processes on the right */}
            {/* Middle Vertebra with a wide horizontal split going from right (posterior) to left (anterior) */}
            <path d="M55,83 H135 L155,90 L135,97 V117 H55 Z" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            {/* Chance horizontal fracture line cutting completely across */}
            <path d="M165,95 H52" stroke={fractureStroke} strokeWidth="4.5" strokeLinecap="round" />
            {/* Top and Bottom reference lines */}
            <rect x="55" y="40" width="80" height="30" rx="3" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            <rect x="55" y="130" width="80" height="30" rx="3" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
          </svg>
        );
      case "spine_denis_dislocation":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full max-h-[220px]">
            {/* Top vertebra shifted/translated forward (to the left) */}
            <g transform="translate(-25, 0)">
              <rect x="70" y="45" width="80" height="30" rx="3" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            </g>
            {/* Bottom vertebra remains aligned */}
            <rect x="70" y="125" width="80" height="30" rx="3" fill={boneFill} stroke={boneStroke} strokeWidth="2" />
            {/* Dislocation shear fracture line indicating absolute slip */}
            <path d="M43,80 L152,120" stroke={fractureStroke} strokeWidth="5" strokeLinecap="round" className="animate-pulse" />
            {/* Shear force indicator arrows */}
            <path d="M120,35 L95,35" stroke="#f43f5e" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
            <path d="M70,165 L95,165" stroke="#f43f5e" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
          </svg>
        );

      default:
        return (
          <div className="w-full h-full flex items-center justify-center text-xs text-clinical-muted italic">
            Visual Illustration Unavailable
          </div>
        );
    }
  };

  return (
    <div
      className={`relative w-full h-[220px] rounded-xl flex items-center justify-center overflow-hidden border p-4 transition-all duration-500 ${
        showAsXray
          ? "bg-slate-950 border-slate-800 shadow-inner"
          : "bg-clinical-cardLight/30 border-clinical-border"
      }`}
    >
      {/* Markers for arrows */}
      <svg className="absolute w-0 h-0">
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
          </marker>
        </defs>
      </svg>

      {/* Grid overlays if in X-ray view */}
      {showAsXray && (
        <div className="absolute inset-0 bg-radial-[circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px] bg-[size:10px_10px] pointer-events-none opacity-40" />
      )}

      {/* Render selected SVG */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {renderVisualizer()}
      </div>

      {/* Mode Tag */}
      <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-clinical-card/90 border border-clinical-border/40 text-[9px] font-semibold uppercase tracking-wider text-clinical-muted">
        {showAsXray ? "Radiograph Filter" : "Schematic Model"}
      </div>
    </div>
  );
};
