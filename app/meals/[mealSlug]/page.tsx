import { getMealBySlug } from "@/lib/meals/queries";
import { notFound } from "next/navigation";

export default function MealDetailsPage({ params }: { params: { slug: string } }) {
  const meal = getMealBySlug(params.slug);

  if (!meal) {
    notFound();
  }

  return <div>{meal.title}</div>;
}
