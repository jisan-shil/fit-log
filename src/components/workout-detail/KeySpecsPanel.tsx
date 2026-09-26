import { Workout } from "@/lib/types";

interface KeySpecsPanelProps {
  workout: Workout;
}

export default function KeySpecsPanel({ workout }: KeySpecsPanelProps) {
  const rows: [string, string][] = [
    ["Equipment", workout.equipment],
    ["Difficulty", workout.difficulty],
    ["Sets", String(workout.sets)],
    ["Reps", workout.reps],
    ["Duration", `${workout.duration} min`],
    ["Calories", `${workout.calories} kcal`],
    ["Rating", String(workout.rating)],
  ];

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#14161d]">
      {rows.map(([label, value], i) => (
        <div
          key={label}
          className={`flex items-center justify-between px-5 py-3.5 text-sm ${
            i !== rows.length - 1 ? "border-b border-white/10" : ""
          }`}
        >
          <span className="text-xs uppercase tracking-wide text-white/50">
            {label}
          </span>
          <span className="font-medium text-white">{value}</span>
        </div>
      ))}
    </div>
  );
}