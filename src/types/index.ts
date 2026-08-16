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
  illustrationId: string;
  xrayDescription: Translation;
  xrayUrl?: string;
}

export interface InvestigationView {
  name: string;
  details: Translation;
  imageId?: string;
  imageUrl?: string;
}

export interface ClassificationConcept {
  title?: Translation;
  /** TL;DR / The Core Principle (หัวใจหลักของ Classification) */
  corePrinciple?: Translation;
  /** The "Rules" (เกณฑ์การตัดสิน เช่น Displacement > 1cm, Angulation > 45°) */
  rules?: Translation[];
  /** Clinical Significance (นำไปใช้ทำอะไร / นำส่งผลต่อการรักษาอย่างไร) */
  clinicalSignificance?: Translation[];
  imageUrl?: string;
  description?: Translation;
  showTable?: boolean;
}

export interface ClassificationSystem {
  system: string;
  fullName: Translation;
  description: Translation;
  concept?: ClassificationConcept;
  investigations?: InvestigationView[];
  types: FractureClassificationType[];
}

// ─── Region Concept (per-region clinical summary) ───────────────────────────

export interface PhysicalExamSign {
  /** Name of the test/sign e.g. "Anterior Drawer Test" */
  sign: string;
  /** What a positive result means */
  positive: Translation;
}

export interface AlignmentRow {
  /** Parameter name e.g. "Varus/Valgus" */
  parameter: Translation;
  /** Acceptable threshold e.g. "< 5°" */
  threshold: string;
  /** Clinical rationale (optional) */
  note?: Translation;
}

export interface AssociatedInjury {
  injury: Translation;
  /** Trigger condition e.g. "Always check if Weber C" */
  trigger?: Translation;
}

export interface RegionConcept {
  imageUrl?: string;
  physicalExam?: PhysicalExamSign[];
  acceptableAlignment?: AlignmentRow[];
  redFlags?: Translation[];
  associatedInjuries?: AssociatedInjury[];
  clinicalPearls?: Translation[];
}

// ────────────────────────────────────────────────────────────────────────────

export interface BoneRegion {
  id: string; // e.g. "proximal", "shaft", "distal"
  name: Translation;
  /** Clinical concept summary for this region (Physical Exam, Alignment, Pearls…) */
  regionConcept?: RegionConcept;
  classifications: ClassificationSystem[];
}

export interface BoneData {
  id: string;
  name: Translation;
  description: Translation;
  regions: BoneRegion[];
  pediatric: boolean;
}
