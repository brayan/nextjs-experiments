"use client";

import NewsList from "@/components/news-list";
import { NewsItem } from "@/lib/news/types";
import { useEffect, useState } from "react";

// This is not the recomended way. We should fetch data from server components
export default function NewsPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    async function fetchNews() {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/news");

      if (!response.ok) {
        setIsLoading(false);
        setError("Failed to fetch news.");
      }

      const news = await response.json();
      setIsLoading(false);
      setNews(news);
    }

    fetchNews();
  }, [])

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  let newsContent;

  if (news) {
    newsContent = <NewsList news={news} />
  }

  return (
    <div className="mx-auto my-8 w-[90%] max-w-240">
      <h1 className="mb-8 text-3xl font-bold">News Page</h1>

      <ul className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(15rem,1fr))]">
        {newsContent}
      </ul>
    </div>
  );
}
