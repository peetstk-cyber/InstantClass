import type { BoneData } from "../types";
import { clavicleBone } from "./bones/clavicle";
import { forearmBone } from "./bones/forearm";
import { humerusBone } from "./bones/humerus";
import { femurBone } from "./bones/femur";
import { pelvisBone } from "./bones/pelvis";
import { patellaBone } from "./bones/patella";
import { tibiaBone } from "./bones/tibia";
import { headBone } from "./bones/head";
import { tlSpineBone } from "./bones/tl_spine";
import { cSpineBone } from "./bones/c_spine";
import { footBone } from "./bones/foot";
import { handBone } from "./bones/hand";
import { scapulaBone } from "./bones/scapula";

export const bonesData: BoneData[] = [
  clavicleBone,
  forearmBone,
  humerusBone,
  femurBone,
  pelvisBone,
  patellaBone,
  tibiaBone,
  headBone,
  tlSpineBone,
  cSpineBone,
  footBone,
  handBone,
  scapulaBone,
];
