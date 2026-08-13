/**
 * FractureIllustration – renders a simplified illustrative SVG for each fracture type.
 * The illustrationId maps to a drawing function.
 * Dark mode renders bones as light-on-dark; light mode renders as dark-on-light.
 */

interface FractureIllustrationProps {
  illustrationId: string;
  darkMode: boolean;
}

// Color scheme
const getColors = (darkMode: boolean) => ({
  bone:       darkMode ? "#CBD5E0" : "#2D3748",
  boneFill:   darkMode ? "rgba(203,213,224,0.08)" : "rgba(45,55,72,0.05)",
  fracture:   "#E74C3C",
  fracture2:  "#F59E0B",
  highlight:  "#2ECC71",
  cortex:     darkMode ? "rgba(203,213,224,0.4)" : "rgba(45,55,72,0.35)",
  marrow:     darkMode ? "rgba(203,213,224,0.06)" : "rgba(45,55,72,0.04)",
});

// ─── Generic long bone helper ─────────────────────────────────────────────────
function LongBone({
  cx, topY, botY, w, colors, rx = 6,
}: {
  cx: number; topY: number; botY: number; w: number;
  colors: ReturnType<typeof getColors>; rx?: number;
}) {
  return (
    <>
      {/* Medullary canal */}
      <rect
        x={cx - w * 0.28} y={topY + 20} width={w * 0.56}
        height={botY - topY - 40}
        rx={3} fill={colors.marrow}
      />
      {/* Cortex */}
      <rect
        x={cx - w / 2} y={topY} width={w} height={botY - topY}
        rx={rx}
        fill={colors.boneFill}
        stroke={colors.bone}
        strokeWidth={1.8}
      />
    </>
  );
}

// ─── Individual illustrations ─────────────────────────────────────────────────

/** Clavicle midshaft (Group I) */
function ClavicleGroupI({ colors }: { colors: ReturnType<typeof getColors> }) {
  return (
    <g>
      {/* Clavicle shape */}
      <path
        d="M 30,80 Q 80,60 120,75 Q 160,90 200,70 Q 220,65 240,75"
        fill="none" stroke={colors.bone} strokeWidth={10} strokeLinecap="round"
      />
      <path
        d="M 30,80 Q 80,60 120,75 Q 160,90 200,70 Q 220,65 240,75"
        fill="none" stroke={colors.boneFill} strokeWidth={6} strokeLinecap="round"
      />
      {/* Fracture line — midshaft */}
      <line x1={130} y1={62} x2={124} y2={88}
        stroke={colors.fracture} strokeWidth={2.5} strokeLinecap="round" />
      <line x1={124} y1={68} x2={120} y2={88}
        stroke={colors.fracture} strokeWidth={1.5} strokeLinecap="round" strokeDasharray="3,2" />
    </g>
  );
}

/** Clavicle lateral/distal (Group II) */
function ClavicleGroupII({ colors }: { colors: ReturnType<typeof getColors> }) {
  return (
    <g>
      <path
        d="M 30,80 Q 80,60 120,75 Q 160,90 200,70 Q 220,65 240,75"
        fill="none" stroke={colors.bone} strokeWidth={10} strokeLinecap="round"
      />
      <path
        d="M 30,80 Q 80,60 120,75 Q 160,90 200,70 Q 220,65 240,75"
        fill="none" stroke={colors.boneFill} strokeWidth={6} strokeLinecap="round"
      />
      {/* Fracture line — lateral third */}
      <line x1={196} y1={58} x2={192} y2={82}
        stroke={colors.fracture} strokeWidth={2.5} strokeLinecap="round" />
      {/* Displaced proximal fragment */}
      <path
        d="M 192,65 L 185,50"
        stroke={colors.fracture2} strokeWidth={1.5} strokeDasharray="3,2"
      />
    </g>
  );
}

/** Clavicle medial (Group III) */
function ClavicleGroupIII({ colors }: { colors: ReturnType<typeof getColors> }) {
  return (
    <g>
      <path
        d="M 30,80 Q 80,60 120,75 Q 160,90 200,70 Q 220,65 240,75"
        fill="none" stroke={colors.bone} strokeWidth={10} strokeLinecap="round"
      />
      <path
        d="M 30,80 Q 80,60 120,75 Q 160,90 200,70 Q 220,65 240,75"
        fill="none" stroke={colors.boneFill} strokeWidth={6} strokeLinecap="round"
      />
      {/* Fracture near medial end */}
      <line x1={52} y1={68} x2={48} y2={92}
        stroke={colors.fracture} strokeWidth={2.5} strokeLinecap="round" />
    </g>
  );
}

/** Generic long bone fracture with type */
function LongBoneFracture({
  colors, pattern,
}: {
  colors: ReturnType<typeof getColors>;
  pattern: "transverse" | "oblique" | "comminuted" | "spiral" | "displaced";
}) {
  const cx = 135, top = 30, bot = 170, w = 38;
  return (
    <g>
      <LongBone cx={cx} topY={top} botY={bot} w={w} colors={colors} />
      {pattern === "transverse" && (
        <line x1={cx - w / 2 - 4} y1={100} x2={cx + w / 2 + 4} y2={100}
          stroke={colors.fracture} strokeWidth={2.5} />
      )}
      {pattern === "oblique" && (
        <line x1={cx - w / 2 - 4} y1={90} x2={cx + w / 2 + 4} y2={112}
          stroke={colors.fracture} strokeWidth={2.5} />
      )}
      {pattern === "comminuted" && (
        <>
          <line x1={cx - 20} y1={92} x2={cx + 20} y2={96} stroke={colors.fracture} strokeWidth={2} />
          <line x1={cx - 18} y1={102} x2={cx + 18} y2={106} stroke={colors.fracture} strokeWidth={2} />
          <line x1={cx - 5} y1={88} x2={cx + 5} y2={110} stroke={colors.fracture} strokeWidth={1.5} strokeDasharray="3,2" />
        </>
      )}
      {pattern === "spiral" && (
        <path
          d={`M ${cx - w / 2 - 2},88 Q ${cx + w / 2 + 6},96 ${cx - w / 2 - 2},106 Q ${cx + w / 2 + 6},115 ${cx},118`}
          fill="none" stroke={colors.fracture} strokeWidth={2}
        />
      )}
      {pattern === "displaced" && (
        <>
          <line x1={cx - w / 2 - 4} y1={96} x2={cx + w / 2 + 4} y2={100}
            stroke={colors.fracture} strokeWidth={2.5} />
          <g transform="translate(8, 12)">
            <LongBone cx={cx} topY={top} botY={bot} w={w} colors={colors} />
          </g>
        </>
      )}
    </g>
  );
}

/** Femoral head fracture types */
function FemurProximal({ colors, garden }: { colors: ReturnType<typeof getColors>; garden: number }) {
  return (
    <g>
      {/* Femoral shaft */}
      <rect x={115} y={80} width={40} height={120} rx={8}
        fill={colors.boneFill} stroke={colors.bone} strokeWidth={1.8} />
      {/* Femoral head */}
      <circle cx={90} cy={90} r={36} fill={colors.boneFill} stroke={colors.bone} strokeWidth={1.8} />
      {/* Neck */}
      <path d="M 120,90 Q 108,88 94,105" fill="none" stroke={colors.bone} strokeWidth={12} strokeLinecap="round" />
      <path d="M 120,90 Q 108,88 94,105" fill="none" stroke={colors.boneFill} strokeWidth={8} strokeLinecap="round" />

      {/* Fracture lines by Garden type */}
      {garden === 1 && (
        /* Incomplete — partial line */
        <line x1={96} y1={106} x2={120} y2={92}
          stroke={colors.fracture} strokeWidth={2} strokeDasharray="4,3" />
      )}
      {garden === 2 && (
        /* Complete, non-displaced */
        <line x1={94} y1={106} x2={122} y2={91}
          stroke={colors.fracture} strokeWidth={2.5} />
      )}
      {garden === 3 && (
        /* Partial displacement */
        <>
          <line x1={94} y1={106} x2={122} y2={91}
            stroke={colors.fracture} strokeWidth={2.5} />
          <path d="M 90,90 L 88,84" stroke={colors.fracture2} strokeWidth={1.5} strokeDasharray="2,2" />
        </>
      )}
      {garden === 4 && (
        /* Full displacement — head shifted */
        <>
          <line x1={94} y1={106} x2={122} y2={91}
            stroke={colors.fracture} strokeWidth={2.5} />
          <circle cx={82} cy={84} r={36} fill="none" stroke={colors.fracture2}
            strokeWidth={1.5} strokeDasharray="4,3" opacity={0.6} />
        </>
      )}
    </g>
  );
}

/** Tibial plateau Schatzker */
function TibialPlateau({ colors, type }: { colors: ReturnType<typeof getColors>; type: number }) {
  return (
    <g>
      {/* Tibia shaft */}
      <rect x={110} y={110} width={50} height={90} rx={6}
        fill={colors.boneFill} stroke={colors.bone} strokeWidth={1.8} />
      {/* Plateau */}
      <rect x={88} y={80} width={94} height={34} rx={6}
        fill={colors.boneFill} stroke={colors.bone} strokeWidth={1.8} />
      {/* Central depression line */}
      <line x1={135} y1={80} x2={135} y2={114} stroke={colors.cortex} strokeWidth={1} strokeDasharray="3,2" />

      {/* Fracture by Schatzker type */}
      {type === 1 && (
        /* Lateral split */
        <line x1={158} y1={79} x2={158} y2={115} stroke={colors.fracture} strokeWidth={2.5} />
      )}
      {type === 2 && (
        /* Lateral split-depression */
        <>
          <line x1={152} y1={79} x2={152} y2={115} stroke={colors.fracture} strokeWidth={2.5} />
          <line x1={136} y1={86} x2={152} y2={92} stroke={colors.fracture} strokeWidth={2} />
        </>
      )}
      {type === 3 && (
        /* Pure central depression */
        <rect x={120} y={86} width={28} height={10} rx={2}
          fill="none" stroke={colors.fracture} strokeWidth={2} />
      )}
      {type === 4 && (
        /* Medial split */
        <line x1={110} y1={79} x2={110} y2={115} stroke={colors.fracture} strokeWidth={2.5} />
      )}
      {type === 5 && (
        /* Bicondylar */
        <>
          <line x1={155} y1={79} x2={155} y2={115} stroke={colors.fracture} strokeWidth={2.5} />
          <line x1={113} y1={79} x2={113} y2={115} stroke={colors.fracture} strokeWidth={2.5} />
        </>
      )}
      {type === 6 && (
        /* With metaphyseal dissociation */
        <>
          <line x1={155} y1={79} x2={155} y2={115} stroke={colors.fracture} strokeWidth={2.5} />
          <line x1={113} y1={79} x2={113} y2={115} stroke={colors.fracture} strokeWidth={2.5} />
          <line x1={100} y1={128} x2={170} y2={128} stroke={colors.fracture2} strokeWidth={2} />
        </>
      )}
    </g>
  );
}
// ─── AC Joint Rockwood Illustrations ──────────────────────────────────────────
function ACJointBase({ colors, clavicleDy = 0, ccRuptured = false, acRuptured = false, acSprain = false, ccSprain = false, isAxillary = false, clavicleDx = 0 }: { colors: any; clavicleDy?: number; ccRuptured?: boolean; acRuptured?: boolean; acSprain?: boolean; ccSprain?: boolean; isAxillary?: boolean; clavicleDx?: number }) {
  if (isAxillary) {
    return (
      <g transform="translate(40, 100)">
        <path d="M 50,0 Q 80,-20 120,10 Q 100,50 60,30 Z" fill={colors.boneFill} stroke={colors.bone} strokeWidth={2} />
        <path d={`M ${130 + clavicleDx},${-40 + clavicleDy} Q 180,${-40 + clavicleDy} 200,${-20 + clavicleDy} L 200,${20 + clavicleDy} L ${130 + clavicleDx},${10 + clavicleDy} Z`} fill={colors.boneFill} stroke={colors.bone} strokeWidth={2} />
        <circle cx={140} cy={-20} r={10} fill="none" stroke={colors.fracture} strokeWidth={2} strokeDasharray="4 4" />
      </g>
    );
  }

  return (
    <g transform="translate(20, 60)">
      <path d="M 30,100 Q 60,100 80,80 Q 90,60 110,60 L 110,80 Q 90,120 40,140 Z" fill={colors.boneFill} stroke={colors.bone} strokeWidth={2} />
      <path d="M 80,120 Q 120,110 140,130 Q 140,150 110,140 Z" fill={colors.boneFill} stroke={colors.bone} strokeWidth={2} />
      <path d={`M ${115 + clavicleDx},${50 + clavicleDy} Q 160,${40 + clavicleDy} 200,${60 + clavicleDy} L 200,${80 + clavicleDy} Q 160,${60 + clavicleDy} ${115 + clavicleDx},${75 + clavicleDy} Z`} fill={colors.boneFill} stroke={colors.bone} strokeWidth={2} />
      {!acRuptured && <path d={`M 110,60 L ${115 + clavicleDx},${50 + clavicleDy} M 110,80 L ${115 + clavicleDx},${75 + clavicleDy}`} stroke={acSprain ? colors.fracture2 : "#A0AEC0"} strokeWidth={4} opacity={0.7} />}
      {acRuptured && <path d={`M 110,65 L 115,70 M ${115 + clavicleDx},${50 + clavicleDy} L ${120 + clavicleDx},${55 + clavicleDy}`} stroke={colors.fracture} strokeWidth={4} strokeLinecap="round" />}
      {!ccRuptured && <path d={`M 130,120 L ${140 + clavicleDx},${70 + clavicleDy} M 120,125 L ${125 + clavicleDx},${72 + clavicleDy}`} stroke={ccSprain ? colors.fracture2 : "#A0AEC0"} strokeWidth={3} opacity={0.7} />}
      {ccRuptured && <path d={`M 125,120 L 130,110 M ${140 + clavicleDx},${70 + clavicleDy} L ${135 + clavicleDx},${80 + clavicleDy}`} stroke={colors.fracture} strokeWidth={3} strokeLinecap="round" />}
    </g>
  );
}

// ─── Proximal Humerus Neer Illustrations ──────────────────────────────────────
function ProximalHumerusNeer({ colors, type }: { colors: ReturnType<typeof getColors>; type: 1 | 2 | 3 | 4 }) {
  // The 4 jigsaw pieces of proximal humerus
  const shaftPath = "M -20,40 L 0,25 L 20,35 L 14,130 L -14,130 Z";
  const gtPath = "M -20,40 L 0,25 L -5,5 L -10,-5 C -25,-5 -30,20 -20,40 Z";
  const headPath = "M 20,35 L 0,25 L 5,5 L 15,-5 A 25 25 0 0 1 40,20 C 37,30 28,34 20,35 Z";
  const ltPath = "M 0,25 L -5,5 L -10,-5 C -2,-12 8,-12 15,-5 L 5,5 Z";

  // Displacement states
  let shaftTr = "", gtTr = "", headTr = "", ltTr = "";

  if (type === 2) {
    shaftTr = "translate(15, 10) rotate(-8)";
  } else if (type === 3) {
    shaftTr = "translate(15, 10) rotate(-8)";
    gtTr = "translate(-18, -10) rotate(-15)";
  } else if (type === 4) {
    shaftTr = "translate(10, 15) rotate(-5)";
    gtTr = "translate(-20, -15) rotate(-20)";
    ltTr = "translate(5, -20) rotate(10)";
    headTr = "translate(-5, 20) rotate(25)";
  }

  const drawPiece = (d: string, tr: string) => (
    <path d={d} transform={tr} fill={colors.boneFill} stroke={colors.bone} strokeWidth={2} strokeLinejoin="round" />
  );

  const drawFrac = (d: string, tr: string) => (
    <path d={d} transform={tr} stroke={colors.fracture} strokeWidth={3.5} fill="none" strokeLinecap="round" strokeLinejoin="round" />
  );

  return (
    <g transform="translate(135, 30) scale(1.1)">
      {/* Background glenoid hint */}
      <path d="M 45,0 Q 55,-15 65,10 Q 55,30 45,35 Q 40,20 45,0 Z" fill={colors.boneFill} stroke={colors.bone} strokeWidth={2} opacity={0.4} />
      
      {/* Fragments */}
      {drawPiece(shaftPath, shaftTr)}
      {drawPiece(ltPath, ltTr)}
      {drawPiece(headPath, headTr)}
      {drawPiece(gtPath, gtTr)}
      
      {/* Red Highlights */}
      {type === 1 && (
        <g>
          {drawFrac("M -20,40 L 0,25 L 20,35", "")}
          {drawFrac("M -5,5 L 0,25 L 5,5", "")}
        </g>
      )}
      {type === 2 && (
        <g>
          {drawFrac("M -20,40 L 0,25 L 20,35", shaftTr)}
          {drawFrac("M -20,40 L 0,25 L 20,35", "")}
        </g>
      )}
      {type === 3 && (
        <g>
          {drawFrac("M -20,40 L 0,25 L 20,35", shaftTr)}
          {drawFrac("M -20,40 L 0,25 L -5,5 L -10,-5", gtTr)}
          {drawFrac("M 0,25 L 20,35", "")}
          {drawFrac("M 0,25 L -5,5 L -10,-5", "")}
        </g>
      )}
      {type === 4 && (
        <g>
          {drawFrac("M -20,40 L 0,25 L 20,35", shaftTr)}
          {drawFrac("M -20,40 L 0,25 L -5,5 L -10,-5", gtTr)}
          {drawFrac("M -10,-5 L -5,5 L 0,25 L 5,5 L 15,-5", ltTr)}
          {drawFrac("M 20,35 L 0,25 L 5,5 L 15,-5", headTr)}
        </g>
      )}
    </g>
  );
}

// ─── Forearm Shaft Eponym Illustrations (Monteggia / Galeazzi) ───────────────
function ForearmEponymIllustration({ colors, type }: { colors: any; type: 'monteggia' | 'galeazzi' }) {
  // Radius (top) and Ulna (bottom)
  const radiusProx = "M 40,84 L 44,84 L 46,88 L 180,88 L 175,92 L 180,96 L 46,96 L 44,100 L 40,100 Z";
  const radiusDist = "M 180,88 L 215,88 L 225,82 L 230,82 L 230,100 L 225,100 L 215,96 L 180,96 L 175,92 Z";
  const radiusIntact = "M 40,84 L 44,84 L 46,88 L 215,88 L 225,82 L 230,82 L 230,100 L 225,100 L 215,96 L 46,96 L 44,100 L 40,100 Z";

  const ulnaProx = "M 15,100 C 25,100 30,112 45,112 L 100,112 L 95,117 L 100,122 L 20,122 C 5,122 5,100 15,100 Z";
  const ulnaDist = "M 100,112 L 225,112 A 4 4 0 0 1 225,122 L 100,122 L 95,117 Z";
  const ulnaIntact = "M 15,100 C 25,100 30,112 45,112 L 225,112 A 4 4 0 0 1 225,122 L 20,122 C 5,122 5,100 15,100 Z";

  const humerusDistal = "M -5,70 L 20,70 C 35,70 35,84 35,92 C 35,100 25,105 15,105 L -5,105 Z";
  const carpals = "M 233,78 Q 248,78 248,104 Q 248,124 233,124 Z";

  let radiusTr = "", ulnaTr = "", radiusProxTr = "", radiusDistTr = "", ulnaProxTr = "", ulnaDistTr = "", carpalsTr = "";

  if (type === 'monteggia') {
    // Proximal ulna fracture, radial head dislocation (anterior/superior)
    ulnaDistTr = "translate(0, 10) rotate(-6, 100, 117)"; // Ulna angled
    radiusTr = "translate(-5, -15) rotate(8, 230, 92)"; // Radius pointing up/anterior
  } else if (type === 'galeazzi') {
    // Distal 1/3 radius fracture, DRUJ dislocation
    radiusDistTr = "translate(-5, -15) rotate(12, 180, 92)";
    carpalsTr = radiusDistTr; // Hand moves with the distal radius
    // Rotate the entire intact ulna downward from the elbow to create a dramatic "open" gap
    ulnaTr = "rotate(8, 45, 112)";
  }

  const drawPiece = (d: string, tr: string) => (
    <path d={d} transform={tr} fill={colors.boneFill} stroke={colors.bone} strokeWidth={2} strokeLinejoin="round" />
  );

  return (
    <g transform="translate(10, 20) scale(1.05)">
      {/* Background bones */}
      {drawPiece(humerusDistal, "")}
      {drawPiece(carpals, carpalsTr)}

      {/* Intact vs Fractured Bones */}
      {type === 'monteggia' ? (
        <>
          {drawPiece(radiusIntact, radiusTr)}
          {drawPiece(ulnaProx, ulnaProxTr)}
          {drawPiece(ulnaDist, ulnaDistTr)}
          
          {/* Fracture highlight */}
          <path d="M 100,112 L 95,117 L 100,122" transform={ulnaDistTr} stroke={colors.fracture} strokeWidth={3} fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 100,112 L 95,117 L 100,122" transform={ulnaProxTr} stroke={colors.fracture} strokeWidth={3} fill="none" strokeLinecap="round" strokeLinejoin="round" />
          
          {/* Dislocation arrow for Radial Head */}
          <path d="M 40,78 L 35,55 M 35,55 L 25,65 M 35,55 L 45,65" stroke={colors.fracture} strokeWidth={2.5} fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </>
      ) : (
        <>
          {drawPiece(radiusProx, radiusProxTr)}
          {drawPiece(radiusDist, radiusDistTr)}
          {drawPiece(ulnaIntact, ulnaTr)}
          
          {/* Fracture highlight */}
          <path d="M 180,88 L 175,92 L 180,96" transform={radiusDistTr} stroke={colors.fracture} strokeWidth={3} fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 180,88 L 175,92 L 180,96" transform={radiusProxTr} stroke={colors.fracture} strokeWidth={3} fill="none" strokeLinecap="round" strokeLinejoin="round" />
          
          {/* Dislocation arrow - curved downward from ulna to show it opening up */}
          <path d="M 180,125 Q 190,150 185,170 M 175,160 L 185,170 L 195,160" stroke={colors.fracture} strokeWidth={2.5} fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
    </g>
  );
}

// ─── Distal Radius Eponym Illustrations (Colles / Smith) ──────────────────────
function DistalRadiusIllustration({ colors, type }: { colors: any; type: 'colles' | 'smith' }) {
  // Lateral view of distal radius and wrist.
  const radiusShaft = "M 30,90 L 180,90 L 175,95 L 180,100 L 30,100 Z";
  const radiusDistal = "M 180,90 L 215,80 C 220,80 220,110 215,110 L 180,100 L 175,95 Z";
  const carpals = "M 225,82 C 245,82 245,108 225,108 Z";
  const metacarpals = "M 240,86 L 270,88 L 270,102 L 240,104 Z";

  let distTr = "", arrow = null;
  if (type === 'colles') {
    // Dorsal displacement (UP in this lateral view)
    distTr = "translate(0, -18) rotate(15, 180, 95)";
    // Arrow pointing UP
    arrow = <path d="M 210,95 L 210,55 M 205,60 L 210,55 L 215,60" stroke={colors.fracture} strokeWidth={2.5} fill="none" strokeLinecap="round" strokeLinejoin="round" />;
  } else if (type === 'smith') {
    // Volar displacement (DOWN)
    distTr = "translate(0, 18) rotate(-15, 180, 95)";
    // Arrow pointing DOWN
    arrow = <path d="M 210,95 L 210,135 M 205,130 L 210,135 L 215,130" stroke={colors.fracture} strokeWidth={2.5} fill="none" strokeLinecap="round" strokeLinejoin="round" />;
  }

  const drawPiece = (d: string, tr: string) => (
    <path d={d} transform={tr} fill={colors.boneFill} stroke={colors.bone} strokeWidth={2} strokeLinejoin="round" />
  );

  return (
    <g transform="translate(-10, 10) scale(1.1)">
      {drawPiece(radiusShaft, "")}
      
      {/* Moving distal fragments */}
      {drawPiece(radiusDistal, distTr)}
      {drawPiece(carpals, distTr)}
      {drawPiece(metacarpals, distTr)}
      
      {/* Fracture line highlight */}
      <path d="M 180,90 L 175,95 L 180,100" stroke={colors.fracture} strokeWidth={3} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 180,90 L 175,95 L 180,100" transform={distTr} stroke={colors.fracture} strokeWidth={3} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Displacement Arrow */}
      {arrow}
    </g>
  );
}

// ─── Main router ──────────────────────────────────────────────────────────────
export function FractureIllustration({ illustrationId, darkMode }: FractureIllustrationProps) {
  if (illustrationId?.startsWith('/') || illustrationId?.includes('.')) {
    return (
      <div 
        className="w-full h-full flex items-center justify-center p-1.5 overflow-hidden"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <img 
          src={illustrationId} 
          alt="Fracture Illustration" 
          className="max-w-full max-h-full object-contain rounded"
        />
      </div>
    );
  }

  const colors = getColors(darkMode);
  const W = 270, H = 200;

  let content: React.ReactNode = null;

  switch (illustrationId) {
    // AC Joint
    case "ac-type1": content = <ACJointBase colors={colors} acSprain={true} />; break;
    case "ac-type2": content = <ACJointBase colors={colors} acRuptured={true} ccSprain={true} clavicleDy={-5} />; break;
    case "ac-type3": content = <ACJointBase colors={colors} acRuptured={true} ccRuptured={true} clavicleDy={-15} />; break;
    case "ac-type4": content = <ACJointBase colors={colors} acRuptured={true} ccRuptured={true} isAxillary={true} clavicleDy={-30} />; break;
    case "ac-type5": content = <ACJointBase colors={colors} acRuptured={true} ccRuptured={true} clavicleDy={-35} />; break;
    case "ac-type6": content = <ACJointBase colors={colors} acRuptured={true} ccRuptured={true} clavicleDy={40} clavicleDx={-10} />; break;

    // Clavicle – Allman
    case "clavicle_allman_1": content = <ClavicleGroupI colors={colors} />; break;
    case "clavicle_allman_2": content = <ClavicleGroupII colors={colors} />; break;
    case "clavicle_allman_3": content = <ClavicleGroupIII colors={colors} />; break;

    // Humerus proximal – Neer
    case "humerus-neer-1": content = <ProximalHumerusNeer colors={colors} type={1} />; break;
    case "humerus-neer-2": content = <ProximalHumerusNeer colors={colors} type={2} />; break;
    case "humerus-neer-3": content = <ProximalHumerusNeer colors={colors} type={3} />; break;
    case "humerus-neer-4": content = <ProximalHumerusNeer colors={colors} type={4} />; break;

    // Forearm – Eponyms & Shaft
    case "forearm-monteggia": content = <ForearmEponymIllustration colors={colors} type="monteggia" />; break;
    case "forearm-galeazzi": content = <ForearmEponymIllustration colors={colors} type="galeazzi" />; break;
    case "distal-radius-colles": content = <DistalRadiusIllustration colors={colors} type="colles" />; break;
    case "distal-radius-smith": content = <DistalRadiusIllustration colors={colors} type="smith" />; break;
    
    // Forearm – AO/OTA
    case "forearm_ao_a1": content = <LongBoneFracture colors={colors} pattern="transverse" />; break;
    case "forearm_ao_a2": content = <LongBoneFracture colors={colors} pattern="oblique" />; break;
    case "forearm_ao_a3": content = <LongBoneFracture colors={colors} pattern="comminuted" />; break;
    case "forearm_ao_b1": content = <LongBoneFracture colors={colors} pattern="spiral" />; break;
    case "forearm_ao_b2": content = <LongBoneFracture colors={colors} pattern="displaced" />; break;
    case "forearm_ao_c1": content = <LongBoneFracture colors={colors} pattern="comminuted" />; break;

    // Femur – Garden (proximal, femoral neck)
    case "femur_garden_1": content = <FemurProximal colors={colors} garden={1} />; break;
    case "femur_garden_2": content = <FemurProximal colors={colors} garden={2} />; break;
    case "femur_garden_3": content = <FemurProximal colors={colors} garden={3} />; break;
    case "femur_garden_4": content = <FemurProximal colors={colors} garden={4} />; break;

    // Tibia – Schatzker
    case "tibia_schatzker_1": content = <TibialPlateau colors={colors} type={1} />; break;
    case "tibia_schatzker_2": content = <TibialPlateau colors={colors} type={2} />; break;
    case "tibia_schatzker_3": content = <TibialPlateau colors={colors} type={3} />; break;
    case "tibia_schatzker_4": content = <TibialPlateau colors={colors} type={4} />; break;
    case "tibia_schatzker_5": content = <TibialPlateau colors={colors} type={5} />; break;
    case "tibia_schatzker_6": content = <TibialPlateau colors={colors} type={6} />; break;

    default:
      content = (
        <LongBoneFracture
          colors={colors}
          pattern={
            illustrationId.endsWith("_1") ? "transverse" :
            illustrationId.endsWith("_2") ? "oblique" :
            illustrationId.endsWith("_3") ? "comminuted" :
            illustrationId.endsWith("_4") ? "spiral" : "transverse"
          }
        />
      );
  }

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      width={W}
      height={H}
      style={{ display: "block", maxWidth: "100%" }}
    >
      {content}
    </svg>
  );
}
