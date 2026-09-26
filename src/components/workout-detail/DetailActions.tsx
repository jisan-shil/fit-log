"use client";
 
import { CalendarPlus, Bookmark, Check } from "lucide-react";
import Button from "@/components/ui/Button";
import { usePlan } from "@/context/PlanContext";
import { useToast } from "@/hooks/useToast";
import { PLAN_CAP } from "@/lib/types";
 
interface DetailActionsProps {
  workoutId: string;
}
 
export default function DetailActions({ workoutId }: DetailActionsProps) {
  const { addToPlan, addToSaved, isInPlan, isSaved, isPlanFull } = usePlan();
  const { showToast } = useToast();
 
  const inPlan = isInPlan(workoutId);
  const saved = isSaved(workoutId);
 
  const handleAddToPlan = () => {
    if (inPlan) return;
    const added = addToPlan(workoutId);
    showToast(
      added ? "Added to today's plan" : `Today's plan is full (${PLAN_CAP}/${PLAN_CAP})`,
    );
  };
 
  const handleSave = () => {
    if (saved) return;
    addToSaved(workoutId);
    showToast("Saved for later");
  };
 
  return (
    <div className="flex flex-wrap gap-3">
      <Button
        variant="primary"
        icon={inPlan ? <Check size={16} /> : <CalendarPlus size={16} />}
        onClick={handleAddToPlan}
        disabled={inPlan || isPlanFull}
      >
        {inPlan
          ? "In Today's Plan"
          : isPlanFull
            ? `Plan Full (${PLAN_CAP}/${PLAN_CAP})`
            : "Add to today's plan"}
      </Button>
      <Button
        variant="secondary"
        icon={saved ? <Check size={16} /> : <Bookmark size={16} />}
        onClick={handleSave}
        disabled={saved}
      >
        {saved ? "Saved" : "Save for later"}
      </Button>
    </div>
  );
}