// app/portfolio/[id]/page.tsx
import { fetchAPI } from "../../../lib/api";

export default async function PortfolioItem({ params }: { params: { id: string } }) {
  const data = await fetchAPI(`portfolios/${params.id}`);
  const item = data.data;

  if (!item) {
    return <div>Portfolio item not found.</div>;
  }

  const { title, description, details, createdAt, locale } = item.attributes;

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>Created At: {new Date(createdAt).toLocaleDateString()}</p>
      <p>Locale: {locale}</p>
      <div>
        <h2>Details:</h2>
        {details?.map((block: any, index: number) => (
          <p key={index}>{block.children.map((child: any) => child.text).join(" ")}</p>
        ))}
      </div>
    </div>
  );
}
