import Link from "next/link";
import { DUMMY_NEWS } from "@/dummy-news";

export default function NewsPage() {
  return (
    <div className="mx-auto my-8 w-[90%] max-w-240">
      <h1 className="mb-8 text-3xl font-bold">News Page</h1>

      <ul className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(15rem,1fr))]">
        {DUMMY_NEWS.map((newsItem) => (
          <li key={newsItem.id}>
            <Link
              href={`/news/${newsItem.slug}`}
              className="flex flex-col items-center gap-6 rounded text-[1.2rem] text-[#e5e5e1] no-underline pb-4 hover:bg-[#2d2d2b]"
            >
              <img
                src={`/images/news/${newsItem.image}`}
                alt={newsItem.title}
                className="h-56 w-full rounded object-cover"
              />
              <span className="px-4 text-center">{newsItem.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
