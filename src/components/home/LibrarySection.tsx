import { Workout } from "@/lib/types";
import WorkoutCard from "./WorkoutCard";
 
interface LibrarySectionProps {
  workouts: Workout[];
}
 
export default function LibrarySection({ workouts }: LibrarySectionProps) {
  return (
    <section id="library" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h2 className="text-2xl font-extrabold uppercase tracking-tight text-white sm:text-3xl">
          The Library
        </h2>
        <p className="mt-1 text-sm text-white/50">
          Twelve lifts covering every major muscle group.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
}