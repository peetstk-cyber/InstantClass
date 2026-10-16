"""Verify that a quoted excerpt exists on the cited PDF page.

Usage (single):
    python3 scripts/verify_citation.py <book_folder> <pdf_page> "quoted excerpt"

Usage (batch CSV with columns: id, book, pdf_page, quote):
    python3 scripts/verify_citation.py --csv reports/audit_x.csv

Exit code 0 = all verified, 1 = at least one FAILED.
Matching ignores case, whitespace, line-break hyphenation and ligatures (fi/fl),
and also checks +/-1 neighbouring pages (reported as NEAR so the page can be fixed).
"""
from __future__ import annotations

import csv
import re
import sys
from pathlib import Path

ROOT = Path("references/text")
LIG = {"\ufb01": "fi", "\ufb02": "fl", "\ufb00": "ff", "\ufb03": "ffi", "\ufb04": "ffl",
       "\u2019": "'", "\u2018": "'", "\u201c": '"', "\u201d": '"', "\u2013": "-", "\u2014": "-"}


def norm(s: str) -> str:
    s = s.replace("-\n", "")
    for k, v in LIG.items():
        s = s.replace(k, v)
    return re.sub(r"\s+", " ", s).lower().strip()


def page_text(book: str, page: int) -> str | None:
    f = ROOT / book / "pages" / f"p{page:04d}.txt"
    return norm(f.read_text(encoding="utf-8")) if f.exists() else None


def check(book: str, page: int, quote: str) -> str:
    q = norm(quote)
    if not q:
        return "FAILED (empty quote)"
    t = page_text(book, page)
    if t is None:
        return "FAILED (page not found)"
    if q in t:
        return "OK"
    for d in (-1, 1):
        n = page_text(book, page + d)
        if n and q in n:
            return f"NEAR (found on PDF p.{page + d})"
    return "FAILED (quote not on page)"


def main() -> None:
    if len(sys.argv) >= 3 and sys.argv[1] == "--csv":
        bad = 0
        with open(sys.argv[2], encoding="utf-8-sig") as f:
            for r in csv.DictReader(f):
                res = check(r["book"], int(r["pdf_page"]), r["quote"])
                bad += not res.startswith("OK")
                print(f"{r['id']}\t{res}")
        sys.exit(1 if bad else 0)
    book, page, quote = sys.argv[1], int(sys.argv[2]), sys.argv[3]
    res = check(book, page, quote)
    print(res)
    sys.exit(0 if res.startswith("OK") else 1)


if __name__ == "__main__":
    main()
