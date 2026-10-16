# Audit: Lower Extremities (Phase 1: Pelvis & Acetabulum)
**เป้าหมายการตรวจ**: `src/data/bones/pelvis.ts` (Young-Burgess Pelvic Ring Patterns, Tile Stability Correlation, Pelvic Binder Placement, Denis Sacral Zones, Judet-Letournel Acetabular Elementary & Associated Patterns, Matta Roof Arc Criteria, Both-Column Spur Sign Radiographic Projection, Posterior Wall Stability & EUA)
**ตำราอ้างอิง**:
- Campbell's Operative Orthopaedics 14th ed. (2020)
- Rockwood & Green's Fractures in Adults 10th ed. (2025)

**สถานะ**: **รอรีวิว** (ยังไม่ได้แก้ไฟล์เนื้อหาตามกฎ Hard Rules ข้อ 1) | หน้า = หน้า PDF | ข้อความบนเว็บคัดลอกจากไฟล์ข้อมูลจริง และ 'ประเด็นที่ตรวจ' เป็น literal substring ของข้อความนั้น

---

## สรุปภาพรวมผลการตรวจ (Summary)
- **จำนวนประเด็นที่ตรวจทั้งหมด**: 11 รายการ
- **ผลตรวจ**:
  - ตรง (Consistent): 10 รายการ (90.9%)
  - ขัดแย้ง (Conflict): 1 รายการ (`pelvis-009` ท่าเอกซเรย์ที่แสดง Spur Sign)
  - ต่างกันตามฉบับ / ความเห็นไม่เป็นเอกฉันท์ (Controversy / Nuance): 0 รายการ
  - หลักฐานไม่พอ: 0 รายการ
- **ระดับความเสี่ยง**:
  - สูง (High): 9 รายการ
  - กลาง (Medium): 2 รายการ

---

## ตารางผลการตรวจ (Audit Findings Table)

| ID | ตำแหน่งบนเว็บ | ไฟล์:บรรทัด | ข้อความบนเว็บ (ฉบับเต็ม) | ประเด็นที่ตรวจ | ความเสี่ยง | ผลตรวจ | หลักฐานจากตำรา (Verbatim Quote) | ตำแหน่งอ้างอิง | สิ่งที่ควรแก้ / ข้อสังเกต | สถานะ |
|---|---|---|---|---|---|---|---|---|---|---|
| pelvis-001 | Pelvic Ring > การจัดจำแนก > Young-Burgess > หลักการคิด (Core Principle) | pelvis.ts:154 | Force vector (APC vs LC vs VS) dictates pelvic ring disruption pattern, pelvic volume expansion, and life-threatening retroperitoneal venous hemorrhage risk. Tile classification correlates stability: Tile A (stable), Tile B (rotationally unstable), Tile C (vertically unstable). | Tile classification stability types A, B, C | สูง | ตรง | "The Tile classification is divided into three types: type A injuries (A1, A2) are stable and can be managed nonoperatively; type B injuries (B1–B3) include rotationally unstable injuries that are vertically stable; and type C injuries (C1–C3) are both rotationally and vertically unstable." | Rockwood 10th (2025), PDF p.2327 | ตรงตามเกณฑ์ความมั่นคงของ Tile | รอรีวิว |
| pelvis-002 | Pelvic Ring > การจัดจำแนก > Young-Burgess > ข้อบ่งชี้/เกณฑ์ตัดสินใจ (The Rules) | pelvis.ts:163 | LC2 / LC3: Crescent iliac wing fracture (LC2) or Windswept pelvis (LC3 - contralateral APC); rotationally unstable (Tile B2/B3). | LC3 windswept pelvis definition and contralateral open-book | สูง | ตรง | "The LC III or the “windswept” pelvis is a composite injury of an LC I or II on the side of impact, with an opening of the contralateral hemipelvis" | Rockwood 10th (2025), PDF p.2328 | ตรงตามนิยาม Windswept pelvis ของ Burgess & Young | รอรีวิว |
| pelvis-003 | Pelvic Ring > การจัดจำแนก > Young-Burgess > ข้อบ่งชี้/เกณฑ์ตัดสินใจ (The Rules) | pelvis.ts:171 | APC2 / APC3: Open-book pelvis with pubic diastasis >=2.5 cm and posterior SI ligament disruption (APC2 partial, APC3 complete); rotationally +- vertically unstable (Tile B1 / C1). | APC3 complete posterior SI ligament disruption and instability | สูง | ตรง | "Continued external rotation force results in disruption of the intra-articular and PSILs, producing a completely unstable SI joint and an APC III pattern" | Rockwood 10th (2025), PDF p.2330 | ตรงตามกลไกและพยาธิสภาพการฉีกขาดของเส้นเอ็นใน APC-III | รอรีวิว |
| pelvis-004 | Pelvic Ring > การจัดจำแนก > Young-Burgess > ข้อบ่งชี้/เกณฑ์ตัดสินใจ (The Rules) | pelvis.ts:175 | VS (Vertical Shear): Complete disruption of anterior and posterior pelvic ring with vertical displacement of hemipelvis; vertically and rotationally unstable (Tile C). | Vertical Shear (VS) cephalad displacement of hemipelvis | สูง | ตรง | "In VS injuries, the primary force vector is directed cephalad. The injured hemipelvis is displaced vertically, and on x-ray the iliac crest is seen to be cephalad when compared to the contralateral side." | Rockwood 10th (2025), PDF p.2330 | ตรงตามนิยามและภาพรังสีของ Vertical Shear | รอรีวิว |
| pelvis-005 | Pelvic Ring > การจัดจำแนก > Young-Burgess > ความสำคัญทางคลินิก (Significance) | pelvis.ts:185 | APC2, APC3 & VS: EMERGENCY resuscitation! Pelvic retroperitoneal volume expands dramatically causing severe venous plexus hemorrhage. Apply Pelvic Binder IMMEDIATELY centered over GREATER TROCHANTERS (not iliac crests!). | Pelvic binder placement at greater trochanters to reduce volume and tamponade bleeding | สูง | ตรง | "should include provisional reduction by manually closing the pelvic ring with a circumferential sheet or binder at the level of the greater trochanters and with emergent traction if vertical displacement is present.236 This decreases pelvic volume and will rapidly" | Rockwood 10th (2025), PDF p.568 | ตรง การรัด Pelvic Binder ต้องวางกึ่งกลางที่ Greater Trochanters ห้ามรัดตรง Iliac Crests เด็ดขาด | รอรีวิว |
| pelvis-006 | Pelvic Ring > การจัดจำแนก > Young-Burgess > ข้อบ่งชี้/เกณฑ์ตัดสินใจ (The Rules) | pelvis.ts:159 | LC1 (Lateral Compression Stage 1): Sacral crush fracture; stable ring (Tile A/B1). Denis sacral zone I (ala/lateral), zone II (foramina), zone III (central canal). | Denis sacral fracture zone I lateral to foramina | กลาง | ตรง | "Vertical or oblique fractures that occur lateral to the sacral foramina are considered zone I fractures" | Rockwood 10th (2025), PDF p.2337 | ตรงตามระบบ Denis (Zone I ala, Zone II foramina [30% neuro], Zone III canal [60% neuro]) | รอรีวิว |
| pelvis-007 | Acetabulum > การจัดจำแนก > Judet-Letournel > ข้อบ่งชี้/เกณฑ์ตัดสินใจ (The Rules) | pelvis.ts:807 | 5 Elementary Patterns: Posterior Wall, Posterior Column, Anterior Wall, Anterior Column, Transverse. 5 Associated Patterns: T-Shaped, Posterior Column + Posterior Wall, Transverse + Posterior Wall, Anterior Column/Wall + Posterior Hemitransverse, Both-Column. | Judet-Letournel 5 elementary and 5 associated patterns | สูง | ตรง | "This classification has 10 distinct categories that are grouped into five elementary types and five associated types (Fig. 51-16). The five elementary patterns include fractures of the posterior wall, posterior column, anterior wall, anterior column, and transverse (Table 51-3)." | Rockwood 10th (2025), PDF p.2454 | ตรงตามระบบคลาสสิกของ Judet & Letournel (10 รูปแบบ) | รอรีวิว |
| pelvis-008 | Acetabulum > การจัดจำแนก > Judet-Letournel > ข้อบ่งชี้/เกณฑ์ตัดสินใจ (The Rules) | pelvis.ts:815 | Non-Operative Criteria (Matta Criteria): Step-off <2 mm in weight-bearing dome, intact Roof Arc angle >45° on all 3 Judet radiograph views, AND posterior wall fragment <20%. | Matta roof arc measurement for weight-bearing dome integrity | สูง | ตรง | "Matta et al.166 developed roof arc measurements to determine whether an acetabular fracture has violated the weight-bearing dome. This measurement has been used to determine if the remaining intact acetabulum is sufficient to maintain a stable and congruous relationship with the femoral head." | Rockwood 10th (2025), PDF p.2479 | ตรงตามเกณฑ์ Matta roof arc >45° (AP, obturator, และ iliac views) | รอรีวิว |
| pelvis-009 | Acetabulum > การจัดจำแนก > Judet-Letournel > ข้อบ่งชี้/เกณฑ์ตัดสินใจ (The Rules) | pelvis.ts:820 | Both-Column Fracture Signature: Characterized by complete floating articular surface with the pathognomonic 'Spur Sign' on iliac oblique view. | Spur Sign radiographic projection (web says iliac oblique vs textbook says obturator oblique) | สูง | **ขัดแย้ง** | "the spur sign is best seen on the obturator oblique projection" | Rockwood 10th (2025), PDF p.2470 (และ Campbell 14th p.3322) | **พบจุดขัดแย้งกับตำราหลักทั้งสองเล่ม**: ใน `pelvis.ts:820` ระบุว่า Spur Sign เห็นในท่า *iliac oblique view* แต่ทั้ง Rockwood (p.2470) และ Campbell (p.3322) ยืนยันตรงกันว่า Spur sign เป็น pathognomonic sign ที่เห็นชัดที่สุดในท่า **Obturator Oblique view** (แสดงส่วนปลายล่างสุดของ ilium ที่ยังติดอยู่กับ sacroiliac joint) | รอรีวิว |
| pelvis-010 | Acetabulum > การจัดจำแนก > Judet-Letournel > ข้อบ่งชี้/เกณฑ์ตัดสินใจ (The Rules) | pelvis.ts:815 | posterior wall fragment <20%. Operative Indications: posterior wall defect >40-50%, or hip joint dislocation/instability. | Posterior wall stability and dynamic stress examination under anesthesia (EUA) | สูง | ตรง | "dynamic stress examination under anesthesia is currently the best diagnostic study that can define the hip stability status and the need for operative intervention of fractures of the posterior wall" | Rockwood 10th (2025), PDF p.2481 | ตรง เกณฑ์เดิมใช้ <20% แต่ Rockwood 10th เน้นย้ำว่าขนาด <20% ก็อาจหลวมได้ จึงแนะนำทำ dynamic stress EUA ใต้เอกซเรย์สดเป็น gold standard | รอรีวิว |
| pelvis-011 | Acetabulum > การจัดจำแนก > Judet-Letournel > ความสำคัญทางคลินิก (Significance) | pelvis.ts:833 | Surgical Approaches: Kocher-Langenbeck approach (posterior wall/column) vs Ilioinguinal / Modified Stoppa approach (anterior wall/column). | Kocher-Langenbeck approach indication for posterior wall/column | กลาง | ตรง | "The Kocher–Langenbeck approach is ideal for posterior wall fractures." | Rockwood 10th (2025), PDF p.2512 | ตรงตามข้อบ่งชี้ทางเข้าผ่าตัดมาตรฐาน | รอรีวิว |

---

## ข้อค้นพบสำคัญและข้อเสนอแนะในการปรับปรุง (Key Findings & Recommendations)

### 1. จุดขัดแย้งข้อเท็จจริงทางรังสีวิทยา (`pelvis-009`):
- **ข้อความปัจจุบันบนเว็บ (`pelvis.ts:820`)**:
  - EN: *"Characterized by complete floating articular surface with the pathognomonic 'Spur Sign' on iliac oblique view."*
  - TH: *"ผิวข้อหลุดลอยแยกจากกระดูกเชิงกรานทั้งหมด ร่วมกับพบ 'Spur Sign' ในท่าเอกซเรย์ Iliac oblique view"*
- **หลักฐานจากตำรามาตรฐาน**:
  - **Rockwood 10th ed. (2025, p.2470)**: *"the spur sign is best seen on the obturator oblique projection... It is generally seen only in the both-column"*
  - **Campbell 14th ed. (2020, p.3322)**: *"Te spur sign, shown on the obturator oblique view, is pathognomonic of a both-column fracture. It represents the remaining portion of the ilium still attached to the sacroiliac joint"*
- **ข้อเสนอแนะ**: แก้ไขคำว่า `iliac oblique view` เป็น `obturator oblique view` (ทั้งภาษาอังกฤษและไทย) เพื่อให้ถูกต้อง 100% ตามหลักรังสีวินิจฉัยของ Letournel

### 2. นัยสำคัญทางคลินิกเรื่อง Posterior Wall Stability (`pelvis-010`):
- ในอดีตมักสอนว่ารอยแตก Posterior wall ขนาด <20% ถือว่ามั่นคง (Stable) และรักษาแบบไม่ผ่าตัดได้
- แต่ **Rockwood 10th ed. (2025, p.2481)** บันทึกเตือนไว้ว่า:
  *"Although previously it had been thought that fractures involving less than 20% of the posterior wall on axial computed tomography were stable, it has been shown that hip instability can be present in a small percentage of these cases... Therefore, it appears that the specifically described dynamic stress examination under anesthesia is currently the best diagnostic study that can define the hip stability status"*
  ควรพิจารณาเสริมข้อความนี้ไว้ใน Clinical Pitfalls เพื่อความรัดกุมในการประเมินข้อสะโพก
