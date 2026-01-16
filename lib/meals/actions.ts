'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./queries";
import { NewMealInput } from "./types";
import { revalidatePath } from "next/cache";

const ALLOWED_IMAGE_TYPES = new Set(["image/jpeg", "image/png"]);

export async function shareMeal(formData: FormData) {
  const newMeal: NewMealInput = {
    title: requiredString(formData, "title"),
    summary: requiredString(formData, "summary"),
    instructions: requiredString(formData, "instructions"),
    creator: requiredString(formData, "name"),
    creator_email: requireEmail(requiredString(formData, "email")),
    image: requiredFileImage(formData, "image"),
  };

  console.log(newMeal);
  await saveMeal(newMeal);

  // meals/page.tsx will be revalidated by default
  revalidatePath('/meals'); 

  redirect('/meals');
}

function requiredString(formData: FormData, key: string): string {
  const value = formData.get(key);

  if (typeof value !== "string") {
    throw new Error(`Missing ${key}`);
  }

  const trimmed = value.trim();

  if (!trimmed) {
    throw new Error(`${key} is required`);
  }

  return trimmed;
}

function requiredFileImage(formData: FormData, key: string): File {
  const value = formData.get(key);

  if (!(value instanceof File) || value.size === 0) {
    throw new Error(`${key} is required`);
  }

  if (!ALLOWED_IMAGE_TYPES.has(value.type)) {
    throw new Error("Invalid image type (PNG/JPEG)");
  }

  return value;
}

function requireEmail(value: string): string {
  const email = value.trim().toLowerCase();

  if (!isValidEmail(email)) {
    throw new Error(`Invalid email`);
  }

  return email;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
