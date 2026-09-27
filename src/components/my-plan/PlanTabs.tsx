"use client";

type Tab = "today" | "saved";

interface PlanTabsProps {
  active: Tab;
  onChange: (tab: Tab) => void;
}

const tabs: { key: Tab; label: string }[] = [
  { key: "today", label: "Today's Plan" },
  { key: "saved", label: "Saved" },
];

export default function PlanTabs({ active, onChange }: PlanTabsProps) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-[#14161d] p-1">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={
            active === tab.key
              ? "rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-black"
              : "rounded-full px-4 py-1.5 text-sm font-medium text-white/60 transition-colors hover:text-white"
          }
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}