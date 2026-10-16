---
name: ortho-textbook-audit
description: >-
  Workflow and rules for auditing OrthoClass content (src/data/bones/*.ts, pediatric data, eponyms, quizData)
  against the local textbooks (Campbell's Operative Orthopaedics 14th ed. 2020, Rockwood & Green's Fractures
  in Adults 10th ed. 2025). Produces a findings report table with verified page citations. Use when the user
  asks to check, verify, fact-check, or improve content against the textbook, or to produce an audit report.
---

# Orthopedic Textbook Audit (`ortho-textbook-audit`)

## Purpose
Check app content against the user's textbooks, record every finding in a report table, and only edit content
after the user approves. Medical content: **a wrong "correction" is worse than no correction.** When unsure, say
"หลักฐานไม่พอ" rather than guess.

## Resources (already set up in the repo)

| Item | Path |
|---|---|
| Textbook PDFs (git-ignored, copyrighted) | `references/textbooks/Campbell_14th_2020.pdf`, `references/textbooks/Rockwood _10th_2025.pdf` |
| Converted text, one file per PDF page | `references/text/campbell_14th_2020/pages/pNNNN.txt` (5,036 pages), `references/text/rockwood_10th_2025/pages/pNNNN.txt` (3,627 pages) |
| Quality report per book | `references/text/<book>/quality.txt` |
| Convert a PDF | `.venv-pdf/bin/python scripts/pdf_to_text.py <pdf> <short_name>` |
| Search text | `python3 scripts/search_textbook.py "term1" "term2" [--book <folder>]` |
| Verify a quote is on the cited page | `python3 scripts/verify_citation.py <book_folder> <pdf_page> "quote"` or `--csv <file>` |
| Reports output | `reports/audit_<topic>.md` and `reports/audit_<topic>.csv` |

Page text starts with `[PDF page N]`. The PDF files have **no bookmarks/TOC**.

> [!WARNING]
> Campbell's text layer drops some ligature letters: "The" appears as "Te", "often" as "ofen", "after" as "afer", "This" as "Tis" (letters `th`, `ft` etc. are missing). Copy quotes **exactly as they appear in the page file**, or use a fragment without such words, otherwise `verify_citation.py` returns FAILED. When searching, also try the dropped-letter spelling. Ligature characters like "ﬁ" are handled by the script.

> [!IMPORTANT]
> Never read a whole book. Always search first, then open only the matched pages (`references/text/<book>/pages/pNNNN.txt`).

## Page numbers
- Always record the **PDF page** (reliable, verifiable by script). Add the printed book page as extra info when known.
- Campbell: the printed page number appears in each page's text (e.g. PDF p.100 = printed p.75, offset ≈ 25; chapters restart at CHAPTER N headers, so confirm per page).
- Rockwood: printed page numbers are not clearly visible in the text. Use PDF page plus chapter title if found.
- Store any discovered offsets in `references/text/<book>/meta.json` so later runs reuse them.

## Workflow

```
0 Scope → 1 Extract claims → 2 Find evidence → 3 Verify citation (script) → 4 Judge → 5 Report → 6 User review → 7 Apply approved edits → 8 Re-verify
```

### 0. Scope
Work on **one data file or one topic at a time** (e.g. `src/data/bones/pelvis.ts`). Pilot first on a single file the user is confident about, then measure how often the user disagrees with the AI before scaling.

### 1. Extract claims
Split the content into atomic, checkable statements. Record for each: the file, the line number, the exact text (Thai and English if both exist), and a **risk level**:

| Risk | Examples | Rule |
|---|---|---|
| High | numbers (angles, sizes, distances, percentages), classification names/grades (Garden, Evans, AO/OTA, Tile, Young-Burgess), treatment indications, nerve/vessel risk statements | Check in **both** books where relevant |
| Medium | anatomy descriptions, mechanism of injury, physical-exam signs, eponyms | Check in at least one book |
| Low | general wording, UI labels | Check only if time permits |

Do not audit pure UI strings, image paths, or 3D model settings.

### 2. Find evidence
1. Choose search terms in **English** (textbooks are English); include synonyms and eponyms.
2. Run `scripts/search_textbook.py`. Open the top pages and read the surrounding text, not just the snippet.
3. Copy a **verbatim excerpt** (a sentence or two) as the quote. Do not paraphrase inside the quote field.
4. If nothing relevant is found after 2-3 different searches, the verdict is `หลักฐานไม่พอ`.

### 3. Verify the citation (mandatory)
Run `scripts/verify_citation.py` on every quote. A finding with a `FAILED` result must not be reported as evidence: fix the page, re-search, or downgrade to `หลักฐานไม่พอ`. `NEAR` means correct the page number.

### 4. Judge
Use exactly these verdicts (Thai labels as in the report):

| Verdict | Meaning |
|---|---|
| ตรง | Textbook supports the statement (minor wording differences OK) |
| ขัดแย้ง | Textbook clearly says something different (number, name, grade, indication) |
| หลักฐานไม่พอ | Not found, or the textbook only partly covers it |
| ต่างกันตามฉบับ | Campbell and Rockwood disagree with each other, or differ from another edition. **Do not choose a side**: quote both and flag for the user |

Extra labels (in the note column): `นอกตำรา` for content not meant to come from the textbooks (mnemonics, teaching tips), which is not an error.

Judging rules:
- Compare meaning and numbers exactly. A different unit, range, or grade is a conflict.
- A textbook describing a surgical technique does not by itself prove a diagnostic or classification statement. Match the **type** of claim.
- Do not use general memory as evidence. If the AI "knows" something the books don't say, report it as `หลักฐานไม่พอ` and mention the source it is thinking of in the note.
- Never mark `ขัดแย้ง` from a single ambiguous passage. Read the surrounding paragraph and check the other book.

### 5. Report
Write `reports/audit_<topic>.md` (table) and a `.csv` with the same rows. Columns:

| ID | ตำแหน่งบนเว็บ | ไฟล์:บรรทัด | ข้อความบนเว็บ (ฉบับเต็ม) | ประเด็นที่ตรวจ | ความเสี่ยง | ผลตรวจ | หลักฐานจากตำรา (quote สั้น ๆ) | ตำแหน่งอ้างอิง (เล่ม ฉบับ หน้า PDF) | สิ่งที่ควรแก้ | สถานะ |
|---|---|---|---|---|---|---|---|---|---|---|

- **ข้อความบนเว็บ must be copied verbatim** from the data file (never paraphrased, never split or merged). If one web statement contains several claims, repeat the full statement in each row and put the exact phrase being checked in **ประเด็นที่ตรวจ** (it must be a literal substring of the web text). Extract it with code from the file/line, not by retyping.
- **ตำแหน่งบนเว็บ** tells the reviewer where to see the text in the app, as a path: bone/region > tab or card > section heading, using the labels the user sees (Thai + English). Find it by tracing which component renders the field (e.g. `concept.rules` and `concept.corePrinciple` are rendered in the "Concept / แนวคิดหลัก" tab of the Classification Guide modal in `src/components/detail/DetailPanel.tsx`). If you did not open the app to confirm, say so in the report header.
- ID format: `<topic>-001`, `<topic>-002`, ...
- ผลตรวจ: one of the four verdicts above.
- สถานะ: `รอรีวิว` (default) → `อนุมัติ` / `ปฏิเสธ` / `แก้แล้ว`.
- สิ่งที่ควรแก้: a concrete proposed replacement text, or `-` if verdict is ตรง.
- CSV columns for the script: `id, book, pdf_page, quote` must be present (add the other columns too), so `verify_citation.py --csv` can run on it.
- Include a summary at the top: number of claims per verdict, number per risk level, list of High-risk conflicts first.

### 6. User review (stop here)
**Do not edit any content file in the audit round.** Present the report and ask the user to set สถานะ for every non-ตรง row. ต่างกันตามฉบับ rows always need a user decision.

### 7. Apply approved edits
Only rows with สถานะ = `อนุมัติ`:
1. Edit one file at a time, change only the approved text (keep Thai/English pairs consistent).
2. Run `npm run build` (and lint if configured) after each file.
3. Update สถานะ to `แก้แล้ว` and note the file change.
4. Suggest a separate git commit per file/topic. Do not commit unless asked.

### 8. Re-verify
Re-run `verify_citation.py --csv` on the report, and re-read the edited text once against its quote to confirm the fix now matches the textbook.

## Hard rules
1. No content edits before user approval.
2. Every evidence quote must pass `verify_citation.py`.
3. Never invent a page number, quote, edition, or author statement.
4. Do not commit `references/` or the PDFs to git (they are in `.gitignore`).
5. Do not copy long passages of the textbooks into the app or report. Short quotes (a sentence or two) only, for citation.
6. For anything the user flags as clinically sensitive, recommend review by a specialist.
7. Stay within the chosen scope; list additional issues noticed elsewhere as a note, not as edits.

## Suggested rollout
1. Pilot: one file, report only, user reviews every row.
2. Compute agreement: how many AI verdicts did the user accept? Adjust search/judging rules if below ~90% on High-risk claims.
3. Expand file by file, High-risk claims first.
4. Finish with a consolidated report across all files.
