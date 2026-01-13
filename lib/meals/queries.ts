import sql from "better-sqlite3";
import { MealDetail, MealSummary, NewMealInput } from "./types";
import slugify from "slugify";
import xss from "xss";
import fs from 'node:fs';
import path from "node:path";

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

export async function saveMeal(meal: NewMealInput) {
  const slug = slugify(meal.title, { lower: true });
  const safeInstructions = xss(meal.instructions);

  const originalName = meal?.image?.name ?? "";
  const extension = originalName.includes(".")
    ? originalName.split('.').pop()
    : "jpg";

  const fileName = `${slug}.${extension}`;
  const publicDir = path.join(process.cwd(), "public", "images");
  const filePath = path.join(publicDir, fileName);

  await fs.promises.mkdir(publicDir, { recursive: true });

  const bufferedImage = Buffer.from(await meal.image.arrayBuffer())
  await fs.promises.writeFile(filePath, bufferedImage);

  const imagePathForDb = `/images/${fileName}`;

  db.prepare(
    `INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
     VALUES
      (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)`
  ).run({
    title: meal.title,
    summary: meal.summary,
    instructions: safeInstructions,
    creator: meal.creator,
    creator_email: meal.creator_email,
    image: imagePathForDb,
    slug,
  });
}
