import Link from "next/link";
 
export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center justify-center px-4 py-32 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-[#ccff00]">
        404
      </p>
      <h1 className="mt-4 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
        Page Not Found
      </h1>
      <p className="mt-3 text-sm text-white/60">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#ccff00] px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#b8e600]"
      >
        Go to Workouts
      </Link>
    </div>
  );
}