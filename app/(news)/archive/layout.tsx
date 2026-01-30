
export default function ArchiveLayout({
  archive,
  latest,
}: Readonly<{ archive: React.ReactNode; latest: React.ReactNode }>) {
  return (
    <div className="mx-auto my-8 w-[90%] max-w-240">
      <h1 className="mb-6 text-3xl font-bold text-(--color-foreground)">
        News Archive
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        <section id="archive-filter">{archive}</section>
        <section id="archive-latest">{latest}</section>
      </div>
    </div>
  );
}
