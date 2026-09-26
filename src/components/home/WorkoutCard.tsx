import Link from "next/link";
import Image from "next/image";
import { Workout } from "@/lib/types";
import CategoryTag from "@/components/ui/CategoryTag";
import StatsRow from "@/components/ui/StatsRow";
 
interface WorkoutCardProps {
  workout: Workout;
}
 
export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group block overflow-hidden rounded-xl border border-white/10 bg-[#14161d] transition-colors hover:border-white/20"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/30">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 90vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {workout.category.map((tag) => (
            <CategoryTag key={tag} label={tag} size="sm" />
          ))}
        </div>
      </div>
      <div className="space-y-1.5 p-4">
        <h3 className="text-sm font-bold uppercase tracking-wide text-white">
          {workout.name}
        </h3>
        <p className="text-xs text-white/50">{workout.equipment}</p>
        <StatsRow
          duration={workout.duration}
          calories={workout.calories}
          rating={workout.rating}
        />
      </div>
    </Link>
  );
}