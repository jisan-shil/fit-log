import { getAllWorkouts } from "@/lib/api";
import MyPlanClient from "@/components/my-plan/MyPlanClient";

export default async function MyPlanPage() {
  const workouts = await getAllWorkouts();
  return <MyPlanClient workouts={workouts} />;
}