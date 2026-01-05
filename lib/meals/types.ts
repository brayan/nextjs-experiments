
export type MealSummary = {
  id: number;
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
