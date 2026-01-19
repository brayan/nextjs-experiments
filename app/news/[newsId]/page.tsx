
export default async function NewsDetailsPage({ params }: { params: { newsId: string } }) {
  const { newsId } = await params;
  return (
    <div className="container">
      <h1>News Details Page - {newsId}</h1>
    </div>
  );
}
