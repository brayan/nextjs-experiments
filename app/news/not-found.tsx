export default function NotFoundNewsPage() {
  return (
    <div className="mx-auto my-20 w-[90%] max-w-160 rounded-xl border border-(--color-border) bg-(--color-surface) p-8 text-center text-(--color-foreground) shadow-(--shadow-card)">
      <h1 className="text-4xl font-bold">Not Found!</h1>
      <p className="mt-3 text-(--color-muted)">
        The requested resource could not be found!
      </p>
    </div>
  );
}
