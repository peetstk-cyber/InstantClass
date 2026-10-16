"""Convert a textbook PDF into per-page text files + TOC + quality report.

Usage:
    .venv-pdf/bin/python scripts/pdf_to_text.py <pdf_path> <short_name>

Output (under references/text/<short_name>/):
    pages/p0001.txt ...   one file per PDF page, first line "[PDF page N]"
    toc.tsv               level<TAB>title<TAB>pdf_page (from PDF bookmarks)
    quality.txt           page count, empty/short pages, garbled-char stats
"""
import sys
from pathlib import Path

import fitz  # pymupdf

SHORT_LIMIT = 50  # chars; pages below this are flagged


def main(pdf_path: str, name: str) -> None:
    out = Path("references/text") / name
    pages_dir = out / "pages"
    pages_dir.mkdir(parents=True, exist_ok=True)

    doc = fitz.open(pdf_path)
    total = len(doc)
    short_pages, garbled_pages, total_chars = [], [], 0

    for i, page in enumerate(doc, start=1):
        text = page.get_text()
        n = len(text.strip())
        total_chars += n
        if n < SHORT_LIMIT:
            short_pages.append(i)
        if text.count("\ufffd") > 5:
            garbled_pages.append(i)
        (pages_dir / f"p{i:04d}.txt").write_text(
            f"[PDF page {i}]\n{text}", encoding="utf-8"
        )
        if i % 500 == 0:
            print(f"  {i}/{total} pages", flush=True)

    toc = doc.get_toc()
    with open(out / "toc.tsv", "w", encoding="utf-8") as f:
        for level, title, pg in toc:
            f.write(f"{level}\t{title}\t{pg}\n")

    with open(out / "quality.txt", "w", encoding="utf-8") as f:
        f.write(f"file: {pdf_path}\npages: {total}\n")
        f.write(f"total chars: {total_chars}\n")
        f.write(f"avg chars/page: {total_chars // max(total, 1)}\n")
        f.write(f"toc entries: {len(toc)}\n")
        f.write(f"short/empty pages (<{SHORT_LIMIT} chars): {len(short_pages)}\n")
        f.write(f"  first 100: {short_pages[:100]}\n")
        f.write(f"pages with garbled chars: {len(garbled_pages)}\n")
        f.write(f"  first 100: {garbled_pages[:100]}\n")

    print((out / "quality.txt").read_text(encoding="utf-8"))


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
