import type { Month, NewsItem, Year } from "./types";
import { DUMMY_NEWS } from "@/dummy-news";

export function getAllNews(): NewsItem[] {
  return DUMMY_NEWS;
}

export function getLatestNews(): NewsItem[] {
  return DUMMY_NEWS.slice(0, 3);
}

export function getAvailableNewsYears(): Year[] {
  const years = DUMMY_NEWS.reduce<Year[]>((acc, news) => {
    const y = new Date(news.date).getFullYear();
    if (!acc.includes(y)) acc.push(y);
    return acc;
  }, []);
  return years.sort((a, b) => b - a);
}

export function getAvailableNewsMonths(year: string | number): Month[] {
  const y = +year;
  const months = DUMMY_NEWS.reduce<Month[]>((acc, news) => {
    const d = new Date(news.date);
    if (d.getFullYear() === y) {
      const m = (d.getMonth() + 1) as Month;
      if (!acc.includes(m)) acc.push(m);
    }
    return acc;
  }, []);
  return months.sort((a, b) => b - a);
}

export function getNewsForYear(year: string | number): NewsItem[] {
  const y = +year;
  return DUMMY_NEWS.filter((news) => new Date(news.date).getFullYear() === y);
}

export function getNewsForYearAndMonth(
  year: string | number,
  month: string | number
): NewsItem[] {
  const y = +year;
  const m = +month;
  return DUMMY_NEWS.filter((news) => {
    const d = new Date(news.date);
    return d.getFullYear() === y && d.getMonth() + 1 === m;
  });
}
