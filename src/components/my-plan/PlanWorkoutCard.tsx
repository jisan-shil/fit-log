import Link from "next/link";
import Image from "next/image";
import { Check, X } from "lucide-react";
import { Workout, PlanStatus } from "@/lib/types";
import StatsRow from "@/components/ui/StatsRow";

interface PlanWorkoutCardProps {
  workout: Workout;
  variant: "plan" | "saved";
  status?: PlanStatus;
  onRemove: () => void;
  onToggleDone?: () => void;
}

export default function PlanWorkoutCard({
  workout,
  variant,
  status,
  onRemove,
  onToggleDone,
}: PlanWorkoutCardProps) {
  const isDone = status === "done";

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-white/10 bg-[#14161d] p-3 sm:flex-row sm:items-center">
      <div className="relative h-20 w-full shrink-0 overflow-hidden rounded-lg sm:h-16 sm:w-16">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="80px"
          className="object-cover"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-bold uppercase tracking-wide text-white">
          {workout.name}
        </h3>
        <p className="text-xs text-white/50">{workout.equipment}</p>
        <StatsRow
          duration={workout.duration}
          calories={workout.calories}
          rating={workout.rating}
          className="mt-1"
        />
      </div>

      <div className="flex shrink-0 flex-wrap items-center gap-2">
        <Link
          href={`/workout/${workout.id}`}
          className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/5"
        >
          View Details
        </Link>

        {variant === "plan" && onToggleDone && (
          <button
            onClick={onToggleDone}
            className={
              isDone
                ? "inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white/50"
                : "inline-flex items-center gap-1.5 rounded-full bg-[#ccff00] px-4 py-2 text-xs font-semibold text-black transition-colors hover:bg-[#b8e600]"
            }
          >
            <Check size={14} />
            {isDone ? "Done" : "Mark as Done"}
          </button>
        )}

        <button
          onClick={onRemove}
          aria-label="Remove"
          className="rounded-full p-2 text-white/40 transition-colors hover:text-white"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}