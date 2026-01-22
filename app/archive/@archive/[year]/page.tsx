import { getAvailableNewsMonths } from "@/lib/news/news";
import ArchiveFilter from "@/components/archive-filter";

export default function FilteredNewsPage({ params }: { params: { year: string } }) {
  const months = getAvailableNewsMonths(params.year);

  return (
    <header className="rounded-xl border border-(--color-border) bg-(--color-surface) p-6 shadow-(--shadow-card)">
      <h2 className="mb-4 text-xl font-semibold">Filter by month</h2>
      <ArchiveFilter baseHref={`/archive/${params.year}`} items={months} />
    </header>
  );
}
