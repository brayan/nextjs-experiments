import { MealSummary } from "@/lib/meals/types";
import MealItem from "./meal-item";

type MealsGridProps = {
  meals: MealSummary[];
};

export default function MealsGrid({ meals }: MealsGridProps) {
  if (!meals?.length) {
    return (
      <p className="mx-auto w-[90%] max-w-300 text-center text-[#ddd6cb]">
        No meals found.
      </p>
    );
  }

  return (
    <ul className="mx-auto grid w-[90%] max-w-300 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {meals.map((meal) => (
        <li key={meal.id} className="h-full">
          <MealItem
            title={meal.title}
            slug={meal.slug}
            image={meal.image}
            summary={meal.summary}
            creator={meal.creator}
          />
        </li>
      ))}
    </ul>
  );
}
