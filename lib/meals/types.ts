
export type MealSummary = {
  id: number | null;
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
};

export type MealDetail = MealSummary & {
  instructions: string;
  creator_email: string;
};

export type NewMealInput = {
  title: string;
  summary: string;
  instructions: string;
  image: File;
  creator: string;
  creator_email: string;
};