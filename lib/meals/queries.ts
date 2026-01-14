import "server-only";

import sql from "better-sqlite3";
import { MealDetail, MealSummary, NewMealInput } from "./types";
import slugify from "slugify";
import xss from "xss";
import fs from 'node:fs';
import path from "node:path";
import { randomUUID } from "node:crypto";

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
  const slug = slugify(meal.title, { lower: true, strict: true });
  const safeInstructions = xss(meal.instructions);
  const fileName = generateFileName(slug, meal?.image);

  await saveImage(fileName, meal.image);

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

function generateFileName(slug: string, file: File): string {
  const extension = mimeToExtension(file.type) ?? fallbackExtension(file.name);
  return `${slug}-${randomUUID()}.${extension}`;
}

function mimeToExtension(mime: string): "jpg" | "png" | null {
  if (mime === "image/jpeg") {
    return "jpg";
  }
  if (mime === "image/png") {
    return "png";
  }

  return null;
}

function fallbackExtension(originalName: string): string {
  const ext = originalName.includes(".")
    ? originalName.split(".").pop()?.toLowerCase()
    : null;

  return ext || "jpg";
}

async function saveImage(fileName: string, image: File) {
  const rootPath = process.cwd();
  const publicDir = path.join(rootPath, "public", "images");
  const filePath = path.join(publicDir, fileName);

  await fs.promises.mkdir(publicDir, { recursive: true });

  const bufferedImage = Buffer.from(await image.arrayBuffer())
  await fs.promises.writeFile(filePath, bufferedImage);
}
