import Link from "next/link";

interface BadgeProps {
  label: string;
  count: number;
  variant: "filled" | "outline";
  href?: string;
}

const countBase =
  "inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[11px] font-semibold";

const countVariants: Record<BadgeProps["variant"], string> = {
  filled: "bg-[#ccff00] text-black",
  outline: "border border-white/25 text-white/80",
};

export default function Badge({ label, count, variant, href = "/my-plan" }: BadgeProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-xs font-medium text-white/70 transition-colors hover:text-white"
    >
      <span>{label}</span>
      <span className={`${countBase} ${countVariants[variant]}`}>{count}</span>
    </Link>
  );
}