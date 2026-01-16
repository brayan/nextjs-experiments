import MealsGrid from "@/components/meals-grid";
import { getMeals } from "@/lib/meals/queries";
import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "All Meals",
  description: "Browse the delicious meals shared by our community",
};

function Meals() {
  const meals = getMeals();
  return <MealsGrid meals={meals} />;
}

export default async function MealsPage() {
  return (
    <>
      <header className="mx-auto mt-12 mb-20 w-[90%] max-w-300 text-2xl text-[#ddd6cb]">
        <h1 className="font-montserrat">
          Delicious meals, created{" "}
          <span className="bg-linear-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">
            by you
          </span>
        </h1>

        <p className="m-0">
          Choose your favorite recipe and cook it yourself. It&apos;s easy and fun!
        </p>

        <p className="m-0">
          <Link
            href="/meals/share"
            className="mt-4 inline-block rounded-lg px-4 py-2 font-bold no-underline text-white bg-linear-to-r from-[#f9572a] to-[#ff9b05]"
          >
            Share your favorite recipe
          </Link>
        </p>
      </header>

      <main className="mx-auto w-[90%] max-w-300">
        <Suspense fallback={<p className="text-center animate-loading">Loading Meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
