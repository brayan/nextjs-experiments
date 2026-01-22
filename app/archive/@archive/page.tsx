import { getAvailableNewsYears } from "@/lib/news/news";
import ArchiveFilter from "@/components/archive-filter";

export default function ArchivePage() {
  const years = getAvailableNewsYears();

  return (
    <header className="rounded-xl border border-(--color-border) bg-(--color-surface) p-6 shadow-(--shadow-card)">
      <h2 className="mb-4 text-xl font-semibold">Filter by year</h2>
      <ArchiveFilter baseHref="/archive" items={years} />
    </header>
  );
}
