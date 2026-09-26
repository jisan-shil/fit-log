"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { PlanItem, PLAN_CAP } from "@/lib/types";

const PLAN_STORAGE_KEY = "fitlog:plan";
const SAVED_STORAGE_KEY = "fitlog:saved";

interface PlanContextValue {
  todaysPlan: PlanItem[];
  saved: PlanItem[];
  isHydrated: boolean; // true once localStorage has been read (avoids SSR flash)

  isInPlan: (workoutId: string) => boolean;
  isSaved: (workoutId: string) => boolean;
  isPlanFull: boolean;

  addToPlan: (workoutId: string) => boolean; // returns false if cap reached
  removeFromPlan: (workoutId: string) => void;
  toggleDone: (workoutId: string) => void;

  addToSaved: (workoutId: string) => void;
  removeFromSaved: (workoutId: string) => void;
}

const PlanContext = createContext<PlanContextValue | null>(null);

function readFromStorage(key: string): PlanItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as PlanItem[]) : [];
  } catch {
    return [];
  }
}

export function PlanProvider({ children }: { children: ReactNode }) {
  const [todaysPlan, setTodaysPlan] = useState<PlanItem[]>([]);
  const [saved, setSaved] = useState<PlanItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load from localStorage once, after mount (client only).
  useEffect(() => {
    setTodaysPlan(readFromStorage(PLAN_STORAGE_KEY));
    setSaved(readFromStorage(SAVED_STORAGE_KEY));
    setIsHydrated(true);
  }, []);

  // Persist on every change, but only after the initial load has happened
  // so we don't overwrite storage with an empty array on first render.
  useEffect(() => {
    if (!isHydrated) return;
    window.localStorage.setItem(PLAN_STORAGE_KEY, JSON.stringify(todaysPlan));
  }, [todaysPlan, isHydrated]);

  useEffect(() => {
    if (!isHydrated) return;
    window.localStorage.setItem(SAVED_STORAGE_KEY, JSON.stringify(saved));
  }, [saved, isHydrated]);

  const isInPlan = (workoutId: string) =>
    todaysPlan.some((item) => item.workoutId === workoutId);

  const isSaved = (workoutId: string) =>
    saved.some((item) => item.workoutId === workoutId);

  const isPlanFull = todaysPlan.length >= PLAN_CAP;

  const addToPlan = (workoutId: string) => {
    if (isInPlan(workoutId) || isPlanFull) return false;
    setTodaysPlan((prev) => [
      ...prev,
      { workoutId, addedAt: Date.now(), status: "active" },
    ]);
    return true;
  };

  const removeFromPlan = (workoutId: string) => {
    setTodaysPlan((prev) => prev.filter((item) => item.workoutId !== workoutId));
  };

  const toggleDone = (workoutId: string) => {
    setTodaysPlan((prev) =>
      prev.map((item) =>
        item.workoutId === workoutId
          ? { ...item, status: item.status === "done" ? "active" : "done" }
          : item,
      ),
    );
  };

  const addToSaved = (workoutId: string) => {
    if (isSaved(workoutId)) return;
    setSaved((prev) => [
      ...prev,
      { workoutId, addedAt: Date.now(), status: "active" },
    ]);
  };

  const removeFromSaved = (workoutId: string) => {
    setSaved((prev) => prev.filter((item) => item.workoutId !== workoutId));
  };

  return (
    <PlanContext.Provider
      value={{
        todaysPlan,
        saved,
        isHydrated,
        isInPlan,
        isSaved,
        isPlanFull,
        addToPlan,
        removeFromPlan,
        toggleDone,
        addToSaved,
        removeFromSaved,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  const ctx = useContext(PlanContext);
  if (!ctx) throw new Error("usePlan must be used inside <PlanProvider>");
  return ctx;
}
