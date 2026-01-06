"use client";

type MealsErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function MealsError({ error, reset }: MealsErrorProps) {
  return (
    <div className="mx-auto w-[90%] max-w-300 text-center text-[#ddd6cb]">
      <h1 className="text-3xl font-bold">Something went wrong</h1>

      <p className="mt-4 opacity-90">
        {process.env.NODE_ENV === "development"
          ? error.message
          : "Please try again in a moment."}
      </p>

      {process.env.NODE_ENV === "development" && error.digest && (
        <p className="mt-2 text-sm opacity-70">Digest: {error.digest}</p>
      )}

      <button
        type="button"
        onClick={() => reset()}
        className="mt-6 inline-block rounded-lg px-4 py-2 font-bold text-white bg-linear-to-r from-[#f9572a] to-[#ff9b05]"
      >
        Try again
      </button>
    </div>
  );
}
