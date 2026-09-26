import { Loader2 } from "lucide-react";
 
interface LoadingSpinnerProps {
  label?: string;
  className?: string;
}
 
export default function LoadingSpinner({
  label = "Loading workouts…",
  className = "",
}: LoadingSpinnerProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 py-20 text-white/60 ${className}`}
    >
      <Loader2 className="h-6 w-6 animate-spin text-[#ccff00]" />
      <p className="text-sm">{label}</p>
    </div>
  );
}