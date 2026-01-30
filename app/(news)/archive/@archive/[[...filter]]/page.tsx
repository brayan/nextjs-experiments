import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news/news";
import ArchiveFilter from "@/components/archive-filter";
import { NewsItem } from "@/lib/news/types";
import NewsList from "@/components/news-list";

type PageParams = {
  filter?: string[];
};

export default async function FilteredNewsPage({
  params,
}: {
  params: PageParams | Promise<PageParams>;
}) {
  const { filter } = await params;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let news: NewsItem[] = [];

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
  } else if (selectedYear) {
    news = getNewsForYear(selectedYear);
  }

  let newsContent = <p>No news found for the selected period.</p>

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />
  }

  const links = selectedYear ? getAvailableNewsMonths(selectedYear) : getAvailableNewsYears();
  const baseHref = selectedYear ? `/archive/${selectedYear}` : "/archive";
  const filterTitle = selectedYear ? "Filter by month" : "Filter by year";

  if (selectedYear) {
    const availableYears = getAvailableNewsYears();
    if (!availableYears.includes(+selectedYear)) {
      throw new Error("Invalid filter.");
    }

    if (selectedMonth) {
      const availableMonths = getAvailableNewsMonths(selectedYear);
      if (!availableMonths.includes(+selectedMonth)) {
        throw new Error("Invalid filter.");
      }
    }
  } else if (selectedMonth) {
    throw new Error("Invalid filter.");
  }

  return (
    <>
      <header className="rounded-xl border border-(--color-border) bg-(--color-surface) p-6 shadow-(--shadow-card)">
        <h2 className="mb-4 text-xl font-semibold">{filterTitle}</h2>
        <ArchiveFilter baseHref={baseHref} items={links} />
      </header>
      {newsContent}
    </>
  );
}
