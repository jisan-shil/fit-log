import Image from "next/image";

interface WorkoutMediaProps {
  src: string;
  alt: string;
}

export default function WorkoutMedia({ src, alt }: WorkoutMediaProps) {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-black/30 lg:aspect-auto lg:h-full lg:min-h-[420px]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
        priority
      />
    </div>
  );
}