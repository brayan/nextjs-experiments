import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news/news";

// Server fetching
export default async function NewsPage() {
  const news = await getAllNews();

  return (
    <div className="mx-auto my-8 w-[90%] max-w-240">
      <h1 className="mb-8 text-3xl font-bold">News Page</h1>

      <ul className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(15rem,1fr))]">
        <NewsList news={news} />
      </ul>
    </div>
  );
}
