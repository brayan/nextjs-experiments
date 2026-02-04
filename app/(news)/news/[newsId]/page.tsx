import { getNewsBySlug } from "@/lib/news/news";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function NewsDetailsPage({ params }: { params: { newsId: string } }) {
  const { newsId } = await params;
  const newsItem = getNewsBySlug(newsId);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="mx-auto my-8 w-[90%] max-w-240">
      <header className="mb-6">
        <Link href={`/news/${newsItem.slug}/image`}>
          <Image
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            width={112}
            height={112}
            className="mb-4 w-28 rounded object-cover"
          />
        </Link>
        <h1 className="text-4xl font-bold">{newsItem.title}</h1>
        <time
          dateTime={newsItem.date}
          className="mt-2 block text-sm text-[#bcbcb7]"
        >
          {newsItem.date}
        </time>
      </header>

      <p className="leading-relaxed">{newsItem.content}</p>
    </article>
  );
}
