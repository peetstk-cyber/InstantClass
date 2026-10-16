"""Search converted textbook pages (no ripgrep needed).

Usage:
    python3 scripts/search_textbook.py "femoral neck" [--book campbell_14th_2020]
        [--all "term1" "term2"] [--max 20] [--context 160]

Prints: book, PDF page, snippet. All terms in the query must appear on the page
(case-insensitive). Ranked by number of occurrences.
Whitespace/hyphenated line breaks in the PDF text are normalised before matching.
"""
import argparse
import re
from pathlib import Path

ROOT = Path("references/text")


def norm(s: str) -> str:
    s = s.replace("-\n", "").replace("\n", " ")
    return re.sub(r"\s+", " ", s)


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("terms", nargs="+", help="all terms must appear on the page")
    ap.add_argument("--book", help="folder name under references/text/")
    ap.add_argument("--max", type=int, default=20)
    ap.add_argument("--context", type=int, default=160)
    a = ap.parse_args()

    terms = [t.lower() for t in a.terms]
    books = [ROOT / a.book] if a.book else sorted(p for p in ROOT.iterdir() if p.is_dir())
    hits = []
    for book in books:
        for f in sorted((book / "pages").glob("p*.txt")):
            text = norm(f.read_text(encoding="utf-8"))
            low = text.lower()
            if all(t in low for t in terms):
                score = sum(low.count(t) for t in terms)
                i = low.find(terms[0])
                lo, hi = max(0, i - a.context), i + a.context
                hits.append((score, book.name, int(f.stem[1:]), text[lo:hi]))
    hits.sort(key=lambda h: -h[0])
    print(f"{len(hits)} pages matched; showing top {min(a.max, len(hits))}")
    for score, book, page, snip in hits[: a.max]:
        print(f"\n[{book} | PDF p.{page} | score {score}]\n...{snip}...")


if __name__ == "__main__":
    main()
