import { notFound } from "next/navigation";
import { getWorkoutById } from "@/lib/api";
import WorkoutMedia from "@/components/workout-detail/WorkoutMedia";
import KeySpecsPanel from "@/components/workout-detail/KeySpecsPanel";
import InstructionsList from "@/components/workout-detail/InstructionsList";
import DetailActions from "@/components/workout-detail/DetailActions";
import CategoryTag from "@/components/ui/CategoryTag";
 
interface WorkoutPageProps {
  params: Promise<{ id: string }>;
}
 
export default async function WorkoutPage({ params }: WorkoutPageProps) {
  const { id } = await params;
  const workout = await getWorkoutById(id);
 
  if (!workout) {
    notFound();
  }
 
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <WorkoutMedia src={workout.image} alt={workout.name} />
 
        <div>
          <h1 className="text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
            {workout.name}
          </h1>
          <p className="mt-3 text-sm text-white/60 sm:text-base">
            {workout.description}
          </p>
 
          <div className="mt-4 flex flex-wrap gap-2">
            {workout.category.map((tag) => (
              <CategoryTag key={tag} label={tag} />
            ))}
          </div>
 
          <div className="mt-6">
            <KeySpecsPanel workout={workout} />
          </div>
 
          <div className="mt-8">
            <InstructionsList instructions={workout.instructions} />
          </div>
 
          <div className="mt-8">
            <DetailActions workoutId={workout.id} />
          </div>
        </div>
      </div>
    </div>
  );
}