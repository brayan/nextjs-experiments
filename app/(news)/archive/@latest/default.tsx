import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news/news";

export default function LatestNewsPage() {
  const latest = getLatestNews();

  return (
    <section className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-card)]">
      <h2 className="mb-4 text-xl font-semibold">Latest News</h2>
      <NewsList news={latest} />
    </section>
  );
}
