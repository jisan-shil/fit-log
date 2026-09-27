interface MetricsSummaryProps {
  exercises: number;
  minutes: number;
  calories: number;
}
 
export default function MetricsSummary({
  exercises,
  minutes,
  calories,
}: MetricsSummaryProps) {
  return (
    <div className="grid grid-cols-3 divide-x divide-white/10 rounded-xl border border-white/10 bg-[#14161d]">
      <div className="p-5">
        <p className="text-xs uppercase tracking-wide text-white/50">Exercises</p>
        <p className="mt-1 text-3xl font-extrabold text-[#ccff00]">{exercises}</p>
      </div>
      <div className="p-5">
        <p className="text-xs uppercase tracking-wide text-white/50">Minutes</p>
        <p className="mt-1 text-3xl font-extrabold text-white">{minutes}</p>
      </div>
      <div className="p-5">
        <p className="text-xs uppercase tracking-wide text-white/50">Calories</p>
        <p className="mt-1 text-3xl font-extrabold text-white">{calories}</p>
      </div>
    </div>
  );
}