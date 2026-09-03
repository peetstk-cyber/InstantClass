import type { Translation, TreatmentType, InvestigationView, TextbookReference } from "./index";

export type PediatricHubTab = "trauma" | "diseases" | "tools";

export type PediatricAgeStage = "all" | "infant" | "toddler" | "child" | "adolescent";

export type ClinicalUrgency = "emergency" | "urgent" | "routine";

export interface PediatricTypeItem {
  type: string;
  name: Translation;
  pathology: Translation;
  radiology: Translation;
  treatment: TreatmentType;
  pearls?: Translation;
}

export interface PediatricTopic {
  id: string;
  hub: "trauma" | "diseases";
  ageStage: "infant" | "toddler" | "child" | "adolescent" | "all";
  ageRange: Translation;
  urgency: ClinicalUrgency;
  title: Translation;
  subtitle: Translation;
  corePrinciple: Translation;
  radiographicLines?: {
    name: Translation;
    criteria: Translation;
    normalValue?: string;
  }[];
  types: PediatricTypeItem[];
  investigations?: InvestigationView[];
  redFlags?: Translation[];
  clinicalPearls?: Translation[];
  references?: TextbookReference[];
}

export interface RemodelingGuideItem {
  region: Translation;
  ageLimit: string;
  acceptableAngulation: string;
  acceptableShortening: string;
  notes: Translation;
}

export interface OssificationCenter {
  letter: string;
  name: string;
  thName: string;
  age: string;
  pearl: Translation;
}
