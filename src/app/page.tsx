import Hero from "@/components/home/Hero";
import LibrarySection from "@/components/home/LibrarySection";
import { getAllWorkouts } from "@/lib/api";
 
export default async function HomePage() {
  const workouts = await getAllWorkouts();
 
  return (
    <>
      <Hero />
      <LibrarySection workouts={workouts} />
    </>
  );
}