import { Clock, Flame, Star } from "lucide-react";
 
interface StatsRowProps {
  duration: number;
  calories: number;
  rating: number;
  className?: string;
}
 
export default function StatsRow({
  duration,
  calories,
  rating,
  className = "",
}: StatsRowProps) {
  return (
    <div className={`flex items-center gap-4 text-xs text-white/60 ${className}`}>
      <span className="inline-flex items-center gap-1">
        <Clock size={14} />
        {duration} min
      </span>
      <span className="inline-flex items-center gap-1">
        <Flame size={14} />
        {calories} kcal
      </span>
      <span className="inline-flex items-center gap-1">
        <Star size={14} className="text-[#ccff00]" fill="currentColor" />
        {rating}
      </span>
    </div>
  );
}