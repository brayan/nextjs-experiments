import sql from "better-sqlite3";
import { MealDetail, MealSummary } from "./types";
import slugify from "slugify";
import xss from "xss";

const db = sql('meals.db');

export function getMeals(): MealSummary[] {
  const rows = db.prepare(
    `SELECT id, slug, title, image, summary, creator FROM meals
     ORDER BY id DESC
    `
  ).all() as MealSummary[];

  return rows;
}

export function getMealBySlug(slug: string): MealDetail | null {
  const row = db.prepare(
    `SELECT id, slug, title, image, summary, instructions, creator, creator_email 
     FROM meals WHERE slug = ?
    `
  ).get(slug) as MealDetail | undefined;

  return row ?? null;
}

export function saveMeal(meal: MealDetail) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
  
  // TODO: insert the new meal
}
