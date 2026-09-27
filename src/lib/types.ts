// ── Core data shape ──────────────────────────────────────────────
// NOTE: This is inferred from the Figma design + README, not a confirmed
// API response. Once you paste a real sample object from
// https://api.abcz.workers.dev/api/fitlog, update this file (and the
// `normalizeWorkout` mapper in api.ts) to match the real field names.

export interface Workout {
  id: string;
  name: string; // e.g. "BARBELL BENCH PRESS"
  description: string;
  category: string[]; // e.g. ["Chest", "Arms"]
  equipment: string; // e.g. "Barbell, Bench"
  image: string; // image URL
  difficulty: string; // e.g. "Intermediate"
  sets: number;
  reps: string; // e.g. "6-8" (kept as string since it's a range)
  duration: number; // minutes, e.g. 25
  calories: number; // kcal, e.g. 180
  rating: number; // e.g. 4.8
  instructions: string[]; // ordered list of steps
}

// ── App-local state (not from the API) ───────────────────────────

export type PlanStatus = "active" | "done";

export interface PlanItem {
  workoutId: string;
  addedAt: number; // Date.now(), used for stable sort tie-breaks
  status: PlanStatus;
}

export type SortKey = "duration" | "calories" | "rating";

export const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: "duration", label: "Duration" },
  { value: "calories", label: "Calories" },
  { value: "rating", label: "Rating" },
];

export const PLAN_CAP = 5;