export interface Translation {
  en: string;
  th: string;
}

export interface TreatmentType {
  conservative: Translation;
  operative: Translation;
  preferred?: "conservative" | "operative" | "none" | "neutral";
  pearls?: Translation;
}

export interface FractureClassificationType {
  type: string; // e.g. "I", "II", "III", "IV", "A", "B", "C"
  name: Translation;
  description: Translation;
  moi?: Translation;
  treatment: TreatmentType;
  // Illustration and X-ray representation codes (rendered using custom SVGs or canvases)
  illustrationId: string; // Key to map to a dynamic drawing in UI
  xrayDescription: Translation; // Description of X-ray findings
}

export interface InvestigationView {
  name: string;
  details: Translation;
  imageId?: string;
  imageUrl?: string;
}

export interface ClassificationSystem {
  system: string; // e.g., "Garden", "Pauwels", "Schatzker", "Fernandez", "Salter-Harris", "Weber"
  fullName: Translation;
  description: Translation;
  concept?: {
    title?: Translation;
    imageUrl?: string;
    description?: Translation;
    showTable?: boolean;
  };
  investigations?: InvestigationView[];
  types: FractureClassificationType[];
}

export interface BoneRegion {
  id: string; // e.g. "proximal", "shaft", "distal"
  name: Translation;
  classifications: ClassificationSystem[];
}

export interface BoneData {
  id: string; // e.g. "femur", "tibia", "humerus", "forearm", "spine", "pelvis", "clavicle", "pediatric-physis"
  name: Translation;
  description: Translation;
  regions: BoneRegion[];
  pediatric: boolean; // True if it's a pediatric classification
}

