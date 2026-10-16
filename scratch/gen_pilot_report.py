"""Generate reports/audit_pelvis_ring_pilot.{csv,md} (pilot: pelvis.ts lines 150-176)."""
import csv
from pathlib import Path

C, R = "campbell_14th_2020", "rockwood_10th_2025"
rows = [
 ("pelvis-001", "pelvis.ts:154", "Force vector (APC vs LC vs VS) dictates pelvic ring disruption pattern", "กลาง", "ตรง",
  R, 2312, "The Young and Burgess classification is based on the mechanism of injury",
  "-", "Rockwood 10th (2025)"),
 ("pelvis-002", "pelvis.ts:154", "Tile A (stable), Tile B (rotationally unstable), Tile C (vertically unstable)", "สูง", "ตรง",
  C, 3352, "A, stable; B, rotationally unstable but vertically stable; and C, rotationally and vertically unstable",
  "ไม่จำเป็นต้องแก้ อาจเพิ่มว่า Tile C = ไม่มั่นคงทั้งการหมุนและแนวตั้ง", "Campbell 14th (2020)"),
 ("pelvis-003", "pelvis.ts:159", "LC1: Sacral crush fracture; stable ring (Tile A/B1)", "สูง", "ขัดแย้ง",
  C, 3353, "Group B1 fractures ofen are colloquially referred to as",
  "ตำราระบุ LC I = Tile A (p.3352) ส่วน B1 คือ open-book (APC) ไม่ใช่ LC; LC I จัดอยู่ AO/OTA B2.1 (p.3353) เสนอแก้เป็น '(Tile A; AO/OTA B2.1)' และตัด B1 ออก ตำราเองมี 2 ระบบที่ให้ระดับต่างกัน ให้ผู้ตรวจตัดสิน",
  "Campbell 14th (2020)"),
 ("pelvis-004", "pelvis.ts:163", "LC2: Crescent iliac wing fracture; rotationally unstable (Tile B2)", "สูง", "ตรง",
  C, 3353, "result in internal rotation through a fracture in the ilium",
  "-", "Campbell 14th (2020)"),
 ("pelvis-005", "pelvis.ts:163", "LC3: Windswept pelvis (contralateral APC); rotationally unstable (Tile B3)", "สูง", "ต่างกันตามฉบับ",
  C, 3352, "Te AP III (Fig. 56.55) and ofen the LC III (Fig. 56.56) fractures are both rotationally and vertically unstable (Tile C)",
  "Campbell p.3352 ว่า LC III มัก = Tile C (ไม่มั่นคงทั้งหมุนและแนวตั้ง) แต่ p.3353 ให้ windswept = AO/OTA B3.2 (Tile B) เสนอเพิ่มข้อความ 'มักไม่มั่นคงทั้งหมุนและแนวตั้ง (Tile C)' ให้ผู้ตรวจตัดสิน",
  "Campbell 14th (2020)"),
 ("pelvis-006", "pelvis.ts:167", "APC1: Pubic symphysis diastasis <2.5 cm; intact SI ligaments; stable (Tile A)", "สูง", "ตรง",
  R, 2329, "Isolated injury to the symphysis results in an APC I injury",
  "ตรง แต่ Rockwood p.2330 ระบุว่าเกณฑ์ 2.5 ซม. ถูกตั้งคำถามในงาน cadaver (ASI ฉีกที่ ~2.2 ซม. เฉลี่ย, บางรายถึง 4.5 ซม.) อาจเพิ่มหมายเหตุว่าเป็น cutoff แบบดั้งเดิม",
  "Rockwood 10th (2025)"),
 ("pelvis-007", "pelvis.ts:171", "APC2: pubic diastasis >=2.5 cm and posterior SI ligament disruption (partial)", "สูง", "ขัดแย้ง",
  R, 2329, "Sequential failure of the sacrotuberous (ST), sacrospinous (SSp), and anterior sacroiliac (ASI) ligaments occurs under tension",
  "[อนุมานจากลำดับการฉีกของ ligament ตำราไม่ได้เขียนตรง ๆ ว่า PSIL ยังไม่ขาดใน APC II ผู้ตรวจควรเทียบหน้า PDF] APC II = ST, SSp และ ASI ligament ฉีก ไม่ใช่ posterior SI ligament; PSIL ฉีกคือ APC III (Rockwood p.2330) เสนอแก้เป็น 'APC2: diastasis >2.5 ซม. ร่วมกับ ST, SSp และ anterior SI ligament ฉีก; posterior SI ligament ยังไม่ขาด'",
  "Rockwood 10th (2025)"),
 ("pelvis-008", "pelvis.ts:171", "APC3: posterior SI ligament disruption (complete); (Tile C1)", "สูง", "ตรง",
  R, 2330, "Continued external rotation force results in disruption of the intra-articular and PSILs, producing a completely unstable SI joint and an APC III pattern",
  "-", "Rockwood 10th (2025)"),
 ("pelvis-009", "pelvis.ts:175", "VS: vertical displacement of hemipelvis; vertically and rotationally unstable (Tile C)", "สูง", "ตรง",
  R, 2330, "In VS injuries, the primary force vector is directed cephalad. The injured hemipelvis is displaced vertically",
  "-", "Rockwood 10th (2025)"),
]
import json
import re

SRC = Path("src/data/bones/pelvis.ts")
LINES = SRC.read_text(encoding="utf-8").splitlines()
UI_CORE = "Pelvic Ring > การจัดจำแนก > Young-Burgess > ปุ่มข้อมูล (Classification Guide & Evidence) > แท็บ แนวคิดหลัก (Concept) > กล่อง หัวใจหลักในการจำแนก (Core Principle)"
UI_RULES = "Pelvic Ring > การจัดจำแนก > Young-Burgess > ปุ่มข้อมูล (Classification Guide & Evidence) > แท็บ แนวคิดหลัก (Concept) > กล่อง เกณฑ์การตัดสินใจ (The Rules)"


def web_text(file_line: str) -> str:
    """Return the verbatim English string stored at pelvis.ts:<line>."""
    n = int(file_line.split(":")[1])
    m = re.match(r'\s*"en":\s*(".*")\s*,?\s*$', LINES[n - 1])
    assert m, f"line {n} is not an en string"
    return json.loads(m.group(1))


head = ["id", "file_line", "ui_location", "web_text_verbatim", "focus", "risk", "verdict",
        "book", "pdf_page", "quote", "suggested_fix", "edition", "status"]
out = Path("reports"); out.mkdir(exist_ok=True)
FOCUS = {
    "pelvis-001": "Force vector (APC vs LC vs VS) dictates pelvic ring disruption pattern",
    "pelvis-002": "Tile A (stable), Tile B (rotationally unstable), Tile C (vertically unstable)",
    "pelvis-003": "stable ring (Tile A/B1)",
    "pelvis-004": "Crescent iliac wing fracture (LC2)",
    "pelvis-005": "Windswept pelvis (LC3 - contralateral APC); rotationally unstable (Tile B2/B3)",
    "pelvis-006": "Pubic symphysis diastasis <2.5 cm; intact SI ligaments; stable (Tile A)",
    "pelvis-007": "posterior SI ligament disruption (APC2 partial, APC3 complete)",
    "pelvis-008": "posterior SI ligament disruption (APC2 partial, APC3 complete)",
    "pelvis-009": "Complete disruption of anterior and posterior pelvic ring with vertical displacement of hemipelvis; vertically and rotationally unstable (Tile C)",
}
full = []
for i, fl, focus, rk, v, b, p, q, fix, ed in rows:
    ui = UI_CORE if fl.endswith(":154") else UI_RULES
    wt = web_text(fl)
    focus = FOCUS[i]
    assert focus in wt, f"{i}: focus phrase not found verbatim in web text"
    full.append((i, fl, ui, wt, focus, rk, v, b, p, q, fix, ed))

with open(out / "audit_pelvis_ring_pilot.csv", "w", newline="", encoding="utf-8-sig") as f:
    w = csv.writer(f); w.writerow(head)
    for r in full:
        w.writerow(list(r) + ["รอรีวิว"])

cnt = {}
for r in full: cnt[r[6]] = cnt.get(r[6], 0) + 1
md = ["# Audit (pilot): `src/data/bones/pelvis.ts` lines 150-176 (Young-Burgess & Tile)\n",
      "สถานะ: **รอรีวิว** ยังไม่ได้แก้ไฟล์เนื้อหา | หน้า = หน้า PDF | "
      "ข้อความบนเว็บคัดลอกจากไฟล์ข้อมูลตรง ๆ และ 'ประเด็นที่ตรวจ' คือวลีที่อยู่ในข้อความนั้นจริง\n",
      "สรุป: " + ", ".join(f"{k} {v}" for k, v in cnt.items()) + "\n",
      "| ID | ตำแหน่งบนเว็บ | ไฟล์:บรรทัด | ข้อความบนเว็บ (ฉบับเต็ม) | ประเด็นที่ตรวจ | ความเสี่ยง | ผลตรวจ | หลักฐานจากตำรา | ตำแหน่งอ้างอิง | สิ่งที่ควรแก้ | สถานะ |",
      "|---|---|---|---|---|---|---|---|---|---|---|"]
for i, fl, ui, wt, focus, rk, v, b, p, q, fix, ed in full:
    md.append(f"| {i} | {ui} | {fl} | {wt} | {focus} | {rk} | {v} | \"{q}\" | {ed}, PDF p.{p} | {fix} | รอรีวิว |")
(out / "audit_pelvis_ring_pilot.md").write_text("\n".join(md) + "\n", encoding="utf-8")
