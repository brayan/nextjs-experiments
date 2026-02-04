import "server-only";

import type { Month, NewsItem, NewsRow, Year } from "./types";
import sql from "better-sqlite3";

const database = sql("data.db");

export async function getAllNews(): Promise<NewsItem[]> {
  const rows = database.prepare("SELECT * FROM news").all() as NewsRow[];

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return mapRowsToNewsItems(rows);
}

export function getNewsBySlug(slug: string): NewsItem | null {
  const row = database
    .prepare("SELECT * FROM news WHERE slug = ?")
    .get(slug) as NewsRow | undefined;

  return row ? mapRowToNewsItem(row) : null;
}

export function getLatestNews(): NewsItem[] {
  const rows = database
    .prepare("SELECT * FROM news ORDER BY date DESC LIMIT 3")
    .all() as NewsRow[];
  return mapRowsToNewsItems(rows);
}

export function getAvailableNewsYears(): Year[] {
  const rows = database
    .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
    .all() as { year: string }[];
  return rows
    .map((row) => Number(row.year) as Year)
    .sort((a, b) => b - a);
}

export function getAvailableNewsMonths(year: string | number): Month[] {
  const y = +year;
  const rows = database
    .prepare(
      "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?"
    )
    .all(String(y)) as { month: string }[];
  return rows
    .map((row) => Number(row.month) as Month)
    .sort((a, b) => b - a);
}

export function getNewsForYear(year: string | number): NewsItem[] {
  const y = +year;
  const rows = database
    .prepare("SELECT * FROM news WHERE strftime('%Y', date) = ?")
    .all(String(y)) as NewsRow[];
  return mapRowsToNewsItems(rows);
}

export function getNewsForYearAndMonth(
  year: string | number,
  month: string | number
): NewsItem[] {
  const y = +year;
  const m = +month;
  const monthString = String(m).padStart(2, "0");
  const rows = database
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ?"
    )
    .all(String(y), monthString) as NewsRow[];
  return mapRowsToNewsItems(rows);
}

function mapRowsToNewsItems(rows: NewsRow[]): NewsItem[] {
  return rows.map(mapRowToNewsItem);
}

function mapRowToNewsItem(row: NewsRow): NewsItem {
  return {
    id: String(row.id),
    slug: row.slug,
    title: row.title,
    image: row.image,
    date: row.date,
    content: row.content,
  };
}
