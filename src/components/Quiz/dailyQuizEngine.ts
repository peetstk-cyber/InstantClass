import type { HighYieldQuestion } from "./quizData";

/**
 * Daily Quiz Engine — Deterministic date-based seeded random selection.
 * Same day = same quiz set for all users (like Wordle).
 * New day = new quiz set automatically.
 */

/** Simple mulberry32 PRNG — fast, deterministic, produces uniform distribution */
function mulberry32(seed: number): () => number {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    hash = ((hash << 5) - hash + ch) | 0;
  }
  return Math.abs(hash);
}

/** Generate a numeric seed from today's YYYY-MM-DD string */
function getDailyDateString(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

/** Fisher-Yates shuffle using seeded PRNG */
function seededShuffle<T>(array: T[], seed: number): T[] {
  const result = [...array];
  const rng = mulberry32(seed);
  rng(); // warm up
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Get today's daily quiz set.
 * Deterministically selects `count` questions from the pool based on today's date.
 * Same date always returns the same set in the same order.
 */
export function getDailyQuizSet(
  allQuestions: HighYieldQuestion[],
  count: number = 10
): HighYieldQuestion[] {
  if (allQuestions.length === 0) return [];
  const dateStr = getDailyDateString();
  const seed = hashString(dateStr);
  const shuffled = seededShuffle(allQuestions, seed);
  const selected = shuffled.slice(0, Math.min(count, shuffled.length));

  // Deterministically shuffle options for each question so the correct answer is not always in the first position
  return selected.map((q, idx) => {
    const optSeed = hashString(`${dateStr}:${q.id}:${idx}`);
    return {
      ...q,
      options: seededShuffle(q.options, optSeed),
    };
  });
}
