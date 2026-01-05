import Image from "next/image";
import Link from "next/link";

type MealItemProps = {
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
};

export default function MealItem({ title, slug, image, summary, creator }: MealItemProps) {
  return (
    <article
      className="
        flex h-full flex-col justify-between overflow-hidden rounded
        text-[#ddd6cb] bg-linear-to-r from-[#2c1e19] to-[#25200f]
        shadow-[0_0_12px_rgba(0,0,0,0.3)]
        transition-all duration-300 ease-in-out
      "
    >
      <header>
        <div className="relative h-60">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 90vw, 400px"
          />
        </div>

        <div className="px-4 pt-2 pb-0">
          <h2 className="m-0 text-2xl font-montserrat">{title}</h2>
          <p className="text-xs italic text-[#cfa69b]">by {creator}</p>
        </div>
      </header>

      <div className="flex h-full flex-col justify-between">
        <p className="px-4 pt-4 pb-0 m-0">{summary}</p>

        <div className="p-4 text-right">
          <Link
            href={`/meals/${slug}`}
            className="
              mt-4 inline-block rounded-lg px-4 py-2 font-bold no-underline text-white
              bg-linear-to-r from-[#f9572a] to-[#ff9b05]
              hover:from-[#fd4715] hover:to-[#f9b241]
              active:from-[#fd4715] active:to-[#f9b241]
              hover:shadow-[0_0_12px_rgba(242,100,18,0.8)]
              active:shadow-[0_0_12px_rgba(242,100,18,0.8)]
            "
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
