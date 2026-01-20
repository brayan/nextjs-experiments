export default function NotFoundDynamicNewsPage() {
  return (
    <div className="mx-auto my-20 w-[90%] max-w-160 rounded-xl border border-(--color-border) bg-[var(--color-surface)] p-8 text-center text-[var(--color-foreground)] shadow-[var(--shadow-card)]">
      <h1 className="text-4xl font-bold">Not Found!</h1>
      <p className="mt-3 text-(--color-muted)">
        Unfortunately, we could not find the requested article.
      </p>
    </div>
  );
}
