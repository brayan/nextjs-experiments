import NewsImage from "@/components/news-image";
import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default async function NewsImagePage({ params }: { params: { newsId: string } }) {
  const { newsId } = await params;
  const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === newsId);

  if (!newsItem) {
    notFound();
  }

  return (
    <NewsImage
      src={`/images/news/${newsItem.image}`}
      alt={newsItem.title}
      wrapperClassName="min-h-screen w-full p-6 bg-black/5 backdrop-blur-sm"
      sizes="(max-width: 768px) 100vw, 90vw"
      priority
    />
  );
}
