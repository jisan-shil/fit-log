"use client";

import { useMemo, useState } from "react";
import { usePlan } from "@/context/PlanContext";
import { useToast } from "@/hooks/useToast";
import { Workout, SortKey, PlanItem } from "@/lib/types";
import MetricsSummary from "./MetricsSummary";
import PlanTabs from "./PlanTabs";
import PlanWorkoutCard from "./PlanWorkoutCard";
import EmptyState from "./EmptyState";
import SortDropdown from "@/components/ui/SortDropdown";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

interface MyPlanClientProps {
  workouts: Workout[];
}

type Tab = "today" | "saved";

interface Row {
  item: PlanItem;
  workout: Workout;
}

export default function MyPlanClient({ workouts }: MyPlanClientProps) {
  const {
    todaysPlan,
    saved,
    isHydrated,
    removeFromPlan,
    removeFromSaved,
    toggleDone,
  } = usePlan();
  const { showToast } = useToast();
  const [tab, setTab] = useState<Tab>("today");
  const [sortKey, setSortKey] = useState<SortKey>("duration");

  const workoutMap = useMemo(() => {
    const map = new Map<string, Workout>();
    workouts.forEach((w) => map.set(w.id, w));
    return map;
  }, [workouts]);

  const activeSource = tab === "today" ? todaysPlan : saved;

  const rows = useMemo(() => {
    const joined: Row[] = activeSource
      .map((item) => {
        const workout = workoutMap.get(item.workoutId);
        return workout ? { item, workout } : null;
      })
      .filter((row): row is Row => row !== null);

    return [...joined].sort((a, b) => a.workout[sortKey] - b.workout[sortKey]);
  }, [activeSource, workoutMap, sortKey]);

  const metrics = useMemo(() => {
    const planWorkouts = todaysPlan
      .map((item) => workoutMap.get(item.workoutId))
      .filter((w): w is Workout => Boolean(w));

    return {
      exercises: planWorkouts.length,
      minutes: planWorkouts.reduce((sum, w) => sum + w.duration, 0),
      calories: planWorkouts.reduce((sum, w) => sum + w.calories, 0),
    };
  }, [todaysPlan, workoutMap]);

  const handleRemove = (workoutId: string) => {
    if (tab === "today") {
      removeFromPlan(workoutId);
    } else {
      removeFromSaved(workoutId);
    }
    showToast("Removed");
  };

  const handleToggleDone = (workoutId: string) => {
    toggleDone(workoutId);
    showToast("Marked as done");
  };

  // Wait for localStorage to hydrate before rendering the list, so we
  // never flash an "empty" state before the real saved data loads in.
  if (!isHydrated) {
    return <LoadingSpinner label="Loading workouts…" />;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
        My Plan
      </h1>
      <p className="mt-2 text-sm text-white/60">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="mt-6">
        <MetricsSummary {...metrics} />
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <PlanTabs active={tab} onChange={setTab} />
        <SortDropdown value={sortKey} onChange={setSortKey} />
      </div>

      <div className="mt-6 space-y-3">
        {rows.length === 0 ? (
          <EmptyState />
        ) : (
          rows.map(({ item, workout }) => (
            <PlanWorkoutCard
              key={workout.id}
              workout={workout}
              variant={tab === "today" ? "plan" : "saved"}
              status={item.status}
              onRemove={() => handleRemove(workout.id)}
              onToggleDone={
                tab === "today" ? () => handleToggleDone(workout.id) : undefined
              }
            />
          ))
        )}
      </div>
    </div>
  );
}