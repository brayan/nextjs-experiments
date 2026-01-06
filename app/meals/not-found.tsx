import Link from "next/link";

export default function MealsNotFound() {
  return (
    <div className="mx-auto mt-12 w-[90%] max-w-[75rem] text-center text-2xl text-[#ddd6cb]">
      <h1 className="font-montserrat">
        Meal not found{" "}
        <span className="bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">
          :(
        </span>
      </h1>

      <p className="m-0 mt-4 opacity-90">
        The meal you’re looking for doesn’t exist (or may have been removed).
      </p>

      <div className="mt-6 flex justify-center gap-4">
        <Link
          href="/meals"
          className="inline-block rounded-lg px-4 py-2 font-bold no-underline text-white bg-gradient-to-r from-[#f9572a] to-[#ff9b05] hover:from-[#fd4715] hover:to-[#f9b241]"
        >
          Back to meals
        </Link>

        <Link
          href="/"
          className="inline-block rounded-lg px-4 py-2 font-bold no-underline text-[#ff9b05] hover:text-[#f9b241]"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
