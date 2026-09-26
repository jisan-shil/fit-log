interface CategoryTagProps {
  label: string;
  size?: "sm" | "md";
}
 
export default function CategoryTag({ label, size = "md" }: CategoryTagProps) {
  const sizeClasses =
    size === "sm"
      ? "px-2 py-0.5 text-[10px] uppercase tracking-wide"
      : "px-3 py-1 text-xs";
 
  return (
    <span
      className={`inline-flex items-center rounded-full bg-[#ccff00] font-semibold text-black ${sizeClasses}`}
    >
      {label}
    </span>
  );
}
 