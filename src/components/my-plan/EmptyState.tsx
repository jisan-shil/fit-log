import Link from "next/link";
 
export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-white/15 px-6 py-20 text-center">
      <h3 className="text-lg font-extrabold uppercase tracking-tight text-white">
        Nothing Here Yet
      </h3>
      <p className="mt-2 max-w-xs text-sm text-white/50">
        Browse the library and add a lift to get today moving.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center justify-center rounded-full bg-[#ccff00] px-6 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-[#b8e600]"
      >
        Go to workouts
      </Link>
    </div>
  );
}