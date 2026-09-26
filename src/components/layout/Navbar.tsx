"use client";
 
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dumbbell } from "lucide-react";
import Badge from "@/components/ui/Badge";
import { usePlan } from "@/context/PlanContext";
 
const navLinks = [
  { href: "/", label: "Workouts", match: (p: string) => p === "/" || p.startsWith("/workout") },
  { href: "/my-plan", label: "My Plan", match: (p: string) => p.startsWith("/my-plan") },
];
 
export default function Navbar() {
  const pathname = usePathname();
  const { todaysPlan, saved } = usePlan();
 
  return (
    <header className="border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Dumbbell className="h-5 w-5 text-[#ccff00]" />
          <span className="text-lg font-bold tracking-tight text-white">FITLOG</span>
        </Link>
 
        {/* Nav links */}
        <nav className="hidden items-center gap-1 sm:flex">
          {navLinks.map((link) => {
            const isActive = link.match(pathname);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? "rounded-full bg-[#3a4a12] px-4 py-1.5 text-sm font-medium text-[#ccff00]"
                    : "rounded-full px-4 py-1.5 text-sm font-medium text-white/70 transition-colors hover:text-white"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
 
        {/* Status badges */}
        <div className="flex items-center gap-4">
          <Badge label="Plan" count={todaysPlan.length} variant="filled" />
          <Badge label="Saved" count={saved.length} variant="outline" />
        </div>
      </div>
 
      {/* Mobile nav links (shown under the top row on small screens) */}
      <nav className="flex items-center gap-1 border-t border-white/10 px-4 py-2 sm:hidden">
        {navLinks.map((link) => {
          const isActive = link.match(pathname);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={
                isActive
                  ? "rounded-full bg-[#3a4a12] px-4 py-1.5 text-sm font-medium text-[#ccff00]"
                  : "rounded-full px-4 py-1.5 text-sm font-medium text-white/70"
              }
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}