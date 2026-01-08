import { getMealBySlug } from "@/lib/meals/queries";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function MealDetailsPage({
  params,
}: {
  params: { mealSlug: string };
}) {
  const { mealSlug } = await params;
  const meal = getMealBySlug(mealSlug);
  const instructions = meal?.instructions.replace(/\n/g, '<br />') ?? '';

  if (!meal) {
    notFound();
  }

  return <>
      <header className="mx-auto flex max-w-7xl gap-12 px-4 py-8">
        <div className="relative h-80 w-120">
          <Image
            src={meal.image}
            alt="Meal Image"
            fill
            sizes="(max-width: 768px) 90vw, 30rem"
            className="object-cover rounded-lg shadow-[0_0_0.5rem_rgba(0,0,0,0.5)] animate-fade-left"
          />
        </div>

        <div className="max-w-160 px-4 pt-2 pb-0 text-[#ddd6cb] animate-fade-right">
          <h1 className="m-0 text-[3.5rem] font-montserrat uppercase [text-shadow:0_0_0.5rem_rgba(0,0,0,0.5)]">
            {meal.title}
          </h1>

          <p className="text-2xl italic text-[#cfa69b]">
            by{" "}
            <a
              href={`mailto:${meal.creator_email}`}
              className="bg-linear-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent hover:[text-shadow:0_0_18px_rgba(248,190,42,0.8)] active:[text-shadow:0_0_18px_rgba(248,190,42,0.8)]"
            >
              {meal.creator}
            </a>
          </p>

          <p className="text-2xl">{meal.summary}</p>
        </div>
      </header>

      <main>
        <p
          className="mx-auto my-8 max-w-240 rounded-lg bg-[#6e6464] p-8 text-xl leading-normal text-[#13120f] shadow-[0_0_0.5rem_rgba(0,0,0,0.5)] animate-fade-bottom"
          dangerouslySetInnerHTML={{ __html: instructions }}
        />
      </main>
    </>
}
