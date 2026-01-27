import ModalBackdrop from "@/components/modal-backdrop";
import NewsImage from "@/components/news-image";
import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default async function InterceptedNewsImagePage({ params }: { params: { newsId: string } }) {
  const { newsId } = await params;
  const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === newsId);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop />
      <dialog
        className="fixed left-1/2 top-1/2 z-50 m-0 -translate-x-1/2 -translate-y-1/2 border-0 bg-transparent p-0"
        open
      >
        <NewsImage
          src={`/images/news/${newsItem.image}`}
          alt={newsItem.title}
          sizes="90vw"
          priority
        />
      </dialog>
    </>
  );
}
