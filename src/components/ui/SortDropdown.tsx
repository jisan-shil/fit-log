"use client";

import { ChevronDown } from "lucide-react";
import { SORT_OPTIONS, SortKey } from "@/lib/types";

interface SortDropdownProps {
  value: SortKey;
  onChange: (value: SortKey) => void;
}

export default function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <div className="flex items-center gap-2 text-sm text-white/60">
      <span>Sort By</span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value as SortKey)}
          className="appearance-none rounded-md border border-white/15 bg-[#14161d] py-1.5 pl-3 pr-8 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#ccff00]"
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown
          size={14}
          className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-white/50"
        />
      </div>
    </div>
  );
}