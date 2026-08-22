import type { CSSProperties } from "react";
import { Hand, Footprints } from "lucide-react";

export interface BoneIconProps {
  size?: number;
  className?: string;
  style?: CSSProperties;
}

/** 1. Clavicle (กระดูกไหปลาร้า) - Edge-to-edge anatomical sigmoid S-curve */
export function ClavicleIcon({ size = 20, className = "", style }: BoneIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
    >
      {/* S-shaped anatomical clavicle contour filling the width */}
      <path d="M2 15.5 C4 11 8 9.5 12 12 C15.5 14 19 13.5 22 9.5" />
      <path d="M2 17 C5 19 9 18.5 13 15.5 C16.8 13 20 14 22 17" />
      {/* Sternal facet (medial) and acromial facet (lateral) */}
      <path d="M2 15.5 C1.3 16 1.3 16.5 2 17" />
      <path d="M22 9.5 C23 11 23 15 22 17" />
    </svg>
  );
}

/** 2. Scapula (กระดูกสะบัก) - Full triangular blade with acromion, spine, and glenoid */
export function ScapulaIcon({ size = 20, className = "", style }: BoneIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
    >
      {/* Triangular scapular blade */}
      <path d="M3.5 5.5 L11.5 22.5 L19.5 7.5 Z" />
      {/* Spine of scapula extending laterally to prominent acromion */}
      <path d="M4.5 10.5 L20 5 L22.5 7" />
      {/* Coracoid process beak */}
      <path d="M15 2.5 C15.5 1.5 18 1.5 19.5 4.5" />
      {/* Glenoid cavity rim */}
      <ellipse cx="20" cy="7.5" rx="1.5" ry="2.8" transform="rotate(15 20 7.5)" />
    </svg>
  );
}

/** 3. Humerus (กระดูกต้นแขน) - Broad head, tuberosities, cylindrical diaphysis, and distal epicondyles */
export function HumerusIcon({ size = 20, className = "", style }: BoneIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
    >
      {/* Humeral head (medial dome) and greater tuberosity */}
      <path d="M7 4 C5 4 5 1.5 7.5 1.2 C10 .8 12 1.2 13.5 2.5 C15 1.5 17 2 17 4 C17 5.5 15.5 6 14.5 7.5 L14 16.5 C16 17 18 18.5 18 21.5 C18 23 16 23 14.5 22 C13 21.5 11 21.5 9.5 22 C8 23 6 23 6 21.5 C6 18.5 8 17 10 16.5 L9.5 7.5 C8.5 6 7 5.5 7 4 Z" />
      {/* Surgical neck groove */}
      <path d="M9.5 7.5 C11 8.2 13 8.2 14.5 7.5" opacity="0.6" />
      {/* Distal olecranon fossa indentation */}
      <circle cx="12" cy="18.5" r="1.1" fill="currentColor" fillOpacity="0.25" />
    </svg>
  );
}

/** 4. Forearm (กระดูกปลายแขน) - Paired parallel Radius and Ulna with interosseous space */
export function ForearmIcon({ size = 20, className = "", style }: BoneIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
    >
      {/* Radius (Left) - Disc radial head top, shaft, broad distal styloid */}
      <path d="M5 2 H9.5 V4 L7.8 7 L7.2 17 L5.5 22 H10 L8.8 17 L9 7" />
      {/* Ulna (Right) - C-shaped olecranon beak top, straight shaft, slender distal head */}
      <path d="M19 1.5 C16.5 1.5 16 4 18.5 5.5 L18 7.5 L17.2 17 L18 22 H15.5 L16 17 L16.8 7.5" />
      {/* Interosseous membrane connecting links */}
      <line x1="8.5" y1="10.5" x2="16.5" y2="10.5" strokeDasharray="1.5 2" opacity="0.7" />
      <line x1="8" y1="15" x2="16.8" y2="15" strokeDasharray="1.5 2" opacity="0.7" />
    </svg>
  );
}

/** 5. Femur (กระดูกต้นขา) - Spherical femoral head, angled neck (~130°), trochanters, and distal condyles */
export function FemurIcon({ size = 20, className = "", style }: BoneIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
    >
      {/* Spherical Femoral head pointing superomedially */}
      <circle cx="5.5" cy="4" r="2.8" fill="currentColor" fillOpacity="0.18" />
      {/* Angled femoral neck, Greater Trochanter, Shaft, and Distal condyles */}
      <path d="M8 5 L12 7 C14 5.2 17 5.2 16.8 7.8 C16.2 9.5 15 10.2 14.2 11.5 L13.5 16.5 C14.8 17 17.5 18 17.5 21 C17.5 23 15 23 13.8 21.8 L13 19.5 L12.2 21.8 C11 23 8.5 23 8.5 21 C8.5 18 11.2 17 12.5 16.5 L11.8 11.5 C10.8 10.2 8.5 9 9.8 7.2" />
    </svg>
  );
}

/** 6. Patella (กระดูกสะบ้า) - Inverted teardrop / sesamoid bone with articular ridge */
export function PatellaIcon({ size = 20, className = "", style }: BoneIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
    >
      {/* Rounded inverted-triangular sesamoid contour */}
      <path d="M4 6.5 C4 3 20 3 20 6.5 C20 13 15 21.5 12 23 C9 21.5 4 13 4 6.5 Z" />
      {/* Vertical ridge separating medial and lateral facets */}
      <path d="M12 5 L12 19" strokeDasharray="2 1.5" opacity="0.85" />
      {/* Transverse anterior vascular nutrient grooves */}
      <path d="M7.5 7.5 Q12 9.5 16.5 7.5" opacity="0.6" />
    </svg>
  );
}

/** 7. Tibia (กระดูกหน้าแข้ง) - Broad T-shaped plateau, tibial tuberosity, medial malleolus and fibula */
export function TibiaIcon({ size = 20, className = "", style }: BoneIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
    >
      {/* Tibial Plateau (broad top condyles), shaft, and prominent medial malleolus at bottom */}
      <path d="M4.5 3 H17 C17 5.5 15 6.8 14 8.5 L13.5 17 C14.8 17.5 16 18.8 15.5 22 H9.5 L10.5 17 C9 6.8 4.5 5.5 4.5 3 Z" />
      {/* Intercondylar eminence spikes */}
      <path d="M9.8 3 L10.5 1.5 L11.2 3 M11.2 3 L12 1.5 L12.8 3" />
      {/* Slender lateral Fibula */}
      <path d="M20 6.5 L19 20" strokeWidth="1.7" />
      <circle cx="20" cy="5.8" r="1.1" fill="currentColor" />
      <circle cx="19" cy="21" r="1.1" fill="currentColor" />
    </svg>
  );
}

/** 8. Pelvis (กระดูกเชิงกราน) - Pelvic girdle ring with flared iliac wings, pelvic inlet, and obturator foramina */
export function PelvisIcon({ size = 20, className = "", style }: BoneIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
    >
      {/* Flared iliac wings and outer pelvic ring contour */}
      <path d="M2 7 C2 3 6.5 2 10 4.5 C11 5.2 12 7 12 9 C12 7 13 5.2 14 4.5 C17.5 2 22 3 22 7 C22 13 18 18 15.5 21.5 C13.8 23 10.2 23 8.5 21.5 C6 18 2 13 2 7 Z" />
      {/* Central pelvic brim / true pelvic inlet ring */}
      <ellipse cx="12" cy="11.5" rx="4" ry="2.8" />
      {/* Bilateral obturator foramina */}
      <ellipse cx="8.5" cy="17.8" rx="1.8" ry="2.2" fill="currentColor" fillOpacity="0.18" />
      <ellipse cx="15.5" cy="17.8" rx="1.8" ry="2.2" fill="currentColor" fillOpacity="0.18" />
    </svg>
  );
}

/** 9. C-Spine (กระดูกสันหลังส่วนคอ) - Cervical lordosis with Dens (C2) and bifid spinous processes */
export function CSpineIcon({ size = 20, className = "", style }: BoneIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
    >
      {/* Dens / Odontoid process projection */}
      <path d="M12 1.5 V4" strokeWidth="2.8" />
      {/* Stacked cervical vertebral bodies with forward lordotic curve */}
      <rect x="7.5" y="4.5" width="9" height="3.2" rx="1.2" />
      <rect x="7" y="9" width="9.5" height="3.2" rx="1.2" />
      <rect x="7.5" y="13.5" width="10" height="3.2" rx="1.2" />
      <rect x="8.5" y="18" width="10.5" height="3.8" rx="1.2" />
      {/* Posterior spinous process projections */}
      <path d="M7.5 6 L4 6 M7 10.5 L3.5 11 M7.5 15 L4 16 M8.5 19.5 L5 21" />
    </svg>
  );
}

/** 10. TL-Spine (กระดูกสันหลังระดับอก-เอว) - Large boxy vertebral bodies with transverse processes */
export function TLSpineIcon({ size = 20, className = "", style }: BoneIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
    >
      {/* 3 Boxy thoracic/lumbar vertebral bodies */}
      <rect x="6.5" y="2" width="11" height="4.5" rx="1.2" />
      <rect x="6" y="9" width="12" height="5.2" rx="1.2" />
      <rect x="5.5" y="16.5" width="13" height="5.8" rx="1.2" />
      {/* Bilateral transverse processes */}
      <path d="M6.5 4.2 H2 M17.5 4.2 H22 M6 11.5 H1.5 M18 11.5 H22.5 M5.5 19.5 H1.8 M18.5 19.5 H22.2" />
      {/* Intervertebral disc space markers */}
      <line x1="8.5" y1="7.8" x2="15.5" y2="7.8" strokeDasharray="1.8 1.8" opacity="0.65" />
      <line x1="8" y1="15.2" x2="16" y2="15.2" strokeDasharray="1.8 1.8" opacity="0.65" />
    </svg>
  );
}

/** 11. Skull / Head (กะโหลกศีรษะ) - Cranial vault, eye orbits, piriform aperture, maxilla & teeth */
export function SkullIcon({ size = 20, className = "", style }: BoneIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
    >
      {/* Cranium and cheekbone/jaw profile */}
      <path d="M3.5 10.5 C3.5 5 7.2 1.5 12 1.5 C16.8 1.5 20.5 5 20.5 10.5 C20.5 13.5 19.5 15.5 17.5 16.5 L17.5 22.5 C17.5 23 16.8 23.5 16 23.5 L8 23.5 C7.2 23.5 6.5 23 6.5 22.5 L6.5 16.5 C4.5 15.5 3.5 13.5 3.5 10.5 Z" />
      {/* Eye orbits */}
      <circle cx="8" cy="11" r="2.4" fill="currentColor" fillOpacity="0.22" />
      <circle cx="16" cy="11" r="2.4" fill="currentColor" fillOpacity="0.22" />
      {/* Nasal pyriform cavity */}
      <path d="M12 14 L10.5 17 H13.5 Z" fill="currentColor" fillOpacity="0.35" />
      {/* Maxillary teeth vertical grid */}
      <path d="M9.5 20.5 V23.5 M12 20.5 V23.5 M14.5 20.5 V23.5" opacity="0.85" />
    </svg>
  );
}

/** 12. Physis (กระดูกเด็ก / Growth Plate) - Epiphysis, active undulating physeal line, and metaphysis */
export function PhysisIcon({ size = 20, className = "", style }: BoneIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
    >
      {/* Epiphyseal rounded bone cap (top) */}
      <path d="M3.5 5.5 C3.5 2.5 20.5 2.5 20.5 5.5 C20.5 7.5 18.5 8.2 16.5 8.8 H7.5 C5.5 8.2 3.5 7.5 3.5 5.5 Z" />
      {/* Wavy active physeal growth plate line (Salter-Harris zone) */}
      <path d="M2.5 10.5 Q6.5 8 10 11 T16.5 10.5 T21.5 11" strokeWidth="2.5" stroke="#00CED1" />
      {/* Metaphysis flaring into shaft */}
      <path d="M5.5 12.8 L8 15 V22.5 H16 V15 L18.5 12.8" />
      {/* Growth direction sparkles */}
      <path d="M12 16.5 V19 M10 18 L12 20 L14 18" opacity="0.75" />
    </svg>
  );
}

/**
 * Maps any Bone ID to its accurate anatomical vector icon.
 * (Hand and Foot use standard Lucide Hand & Footprints icons as specified)
 */
export function getBoneIcon(boneId: string) {
  switch (boneId) {
    case "head":
      return SkullIcon;
    case "c-spine":
      return CSpineIcon;
    case "tl-spine":
      return TLSpineIcon;
    case "hand":
      return Hand;
    case "foot":
      return Footprints;
    case "patella":
      return PatellaIcon;
    case "pelvis":
      return PelvisIcon;
    case "scapula":
      return ScapulaIcon;
    case "clavicle":
      return ClavicleIcon;
    case "humerus":
      return HumerusIcon;
    case "forearm":
      return ForearmIcon;
    case "femur":
      return FemurIcon;
    case "tibia":
      return TibiaIcon;
    case "pediatric-physis":
      return PhysisIcon;
    default:
      return BoneFallbackIcon;
  }
}

/** Standard Bone fallback icon */
export function BoneFallbackIcon({ size = 20, className = "", style }: BoneIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
    >
      <path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 1 0 0 5 .5.5 0 0 1 .5.5 2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z" />
    </svg>
  );
}
