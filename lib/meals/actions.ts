'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./queries";
import { NewMealInput } from "./types";

export async function shareMeal(formData: FormData) {
  const title = formData.get("title");
  const summary = formData.get("summary");
  const instructions = formData.get("instructions");
  const image = formData.get("image");
  const creator = formData.get("name");
  const creator_email = formData.get("email");

  if (
    typeof title !== "string" ||
    typeof summary !== "string" ||
    typeof instructions !== "string" ||
    typeof creator !== "string" ||
    typeof creator_email !== "string" ||
    !(image instanceof File) ||
    image.size === 0
  ) {
    throw new Error("Invalid form submission");
  }

  const newMeal: NewMealInput = {
    title,
    summary,
    instructions,
    image,
    creator,
    creator_email,
  };

  console.log(newMeal);
  await saveMeal(newMeal);

  redirect('/meals');
}
