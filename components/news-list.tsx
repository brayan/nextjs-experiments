import type { NewsItem } from "@/lib/news/types";
import Link from "next/link";

type Props = { news: NewsItem[] };

export default function NewsList({ news }: Props) {
  if (!news.length) {
    return (
      <p className="mx-auto w-[90%] max-w-[60rem] text-center text-[var(--color-muted)]">
        No news found.
      </p>
    );
  }

  return (
    <ul className="grid gap-4 [grid-template-columns:repeat(auto-fill,minmax(15rem,1fr))]">
      {news.map((item) => (
        <li key={item.id}>
          <Link
            href={`/news/${item.slug}`}
            className="flex flex-col overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-foreground)] no-underline shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:bg-[var(--color-surface-muted)]"
          >
            <img
              src={`/images/news/${item.image}`}
              alt={item.title}
              className="h-56 w-full object-cover"
            />
            <div className="flex flex-col gap-1 p-4">
              <span className="text-lg font-semibold">{item.title}</span>
              <time className="text-sm text-[var(--color-muted)]" dateTime={item.date}>
                {new Date(item.date).toLocaleDateString()}
              </time>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
