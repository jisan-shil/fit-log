import { Workout } from "./types";

const BASE_URL = "https://api.abcz.workers.dev/api/fitlog";

// ── Raw shape guard ───────────────────────────────────────────────
// The API's actual field names haven't been confirmed yet. This mapper
// is the ONE place that should need editing once you share a real
// sample response — everything else in the app trusts `Workout` from
// types.ts and never touches raw API fields directly.
function normalizeWorkout(raw: any): Workout {
  return {
    id: String(raw.id),
    name: raw.name ?? "Untitled Workout",
    description: raw.description ?? "",
    category: Array.isArray(raw.muscleGroups) ? raw.muscleGroups : [],
    equipment: raw.equipment ?? "Bodyweight",
    image: raw.image ?? "",
    difficulty: raw.difficulty ?? "Beginner",
    sets: Number(raw.sets ?? 0),
    reps: String(raw.reps ?? "-"),
    duration: Number(raw.duration ?? 0),
    calories: Number(raw.caloriesBurned ?? 0),
    rating: Number(raw.rating ?? 0),
    instructions: Array.isArray(raw.instructions) ? raw.instructions : [],
  };
}

export class FitlogApiError extends Error {
  constructor(
    message: string,
    public status?: number,
  ) {
    super(message);
    this.name = "FitlogApiError";
  }
}

export async function getAllWorkouts(): Promise<Workout[]> {
  const res = await fetch(BASE_URL, {
    // Revalidate periodically instead of caching forever, since this
    // is course/demo data that could change during grading.
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new FitlogApiError(
      `Failed to load workouts (${res.status})`,
      res.status,
    );
  }

  const data = await res.json();
  const list = Array.isArray(data) ? data : (data.data ?? data.workouts ?? []);
  return list.map(normalizeWorkout);
}

export async function getWorkoutById(id: string): Promise<Workout | null> {
  const res = await fetch(`${BASE_URL}/${id}`, {
    next: { revalidate: 60 },
  });

  if (res.status === 404) return null;

  if (!res.ok) {
    throw new FitlogApiError(
      `Failed to load workout ${id} (${res.status})`,
      res.status,
    );
  }

  const data = await res.json();
  const raw = data.data ?? data;
  return normalizeWorkout(raw);
}