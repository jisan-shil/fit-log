import Image from "next/image";
import { ArrowDown } from "lucide-react";
 
export default function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-[#ccff00]">
          Workout Library
        </p>
        <h1 className="mt-4 text-4xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-5xl">
          Train With Intent. Log Every Set.
        </h1>
        <p className="mt-4 max-w-md text-sm text-white/60 sm:text-base">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
          into today&apos;s plan, and watch the week&apos;s work add up.
        </p>
        <a
          href="#library"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#ccff00] px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#b8e600]"
        >
          <ArrowDown size={16} />
          Browse Workouts
        </a>
      </div>
 
      <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none">
        <Image
          src="/banner.png"
          alt="Muscle anatomy illustration on a gym machine"
          fill
          sizes="(min-width: 1024px) 40vw, 80vw"
          className="object-contain"
          priority
        />
      </div>
    </section>
  );
}