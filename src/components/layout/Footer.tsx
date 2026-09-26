import { Dumbbell } from "lucide-react";
 
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 py-6 text-center sm:flex-row sm:justify-between sm:text-left sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Dumbbell className="h-4 w-4 text-[#ccff00]" />
          <span className="text-sm font-bold tracking-tight text-white">FITLOG</span>
        </div>
        <p className="text-xs text-white/40">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}
 