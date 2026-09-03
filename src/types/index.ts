export interface Translation {
  en: string;
  th: string;
}

export interface TreatmentDetailBlock {
  /** 🎯 ข้อบ่งชี้และเกณฑ์การตัดสินใจ (Indication & Criteria) */
  indication?: Translation;
  /** 🛠 วิธีการ / หัตถการ / ชนิดเฝือก / อุปกรณ์ยึดตรึง (Method & Implants) */
  method: Translation;
  /** ⏱ ระยะเวลาการดาม / การลงน้ำหนัก / แผนการทำกายภาพ (Rehab & Protocol) */
  rehabilitation?: Translation;
  /** ⚠️ ข้อพึงระวังทางคลินิก / ภาวะแทรกซ้อน (Pitfalls & Pearls) */
  pitfalls?: Translation;
}

export interface TreatmentType {
  conservative: TreatmentDetailBlock | Translation;
  operative: TreatmentDetailBlock | Translation;
  preferred?: "conservative" | "operative" | "none" | "neutral";
  decisionPrinciple?: Translation;
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

export interface TextbookReference {
  textbook: "Rockwood" | "Campbell" | "Miller" | "AO/OTA" | "Classic Citation";
  title: string;
  chapter?: string;
  pageOrSection?: string;
  classicCitation?: string;
  notes?: Translation;
}

export interface ClassificationSystem {
  system: string;
  fullName: Translation;
  description: Translation;
  concept?: ClassificationConcept;
  investigations?: InvestigationView[];
  types: FractureClassificationType[];
  references?: TextbookReference[];
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

export interface RegionConceptImage {
  url: string;
  caption?: Translation;
  title?: Translation;
}

export interface RegionConcept {
  imageUrl?: string;
  imageUrls?: string[];
  images?: (string | RegionConceptImage)[];
  physicalExam?: PhysicalExamSign[];
  acceptableAlignment?: AlignmentRow[];
  redFlags?: Translation[];
  associatedInjuries?: AssociatedInjury[];
  clinicalPearls?: Translation[];
  references?: TextbookReference[];
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
