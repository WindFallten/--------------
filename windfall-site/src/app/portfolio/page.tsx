// app/portfolio/page.tsx
import Link from "next/link";
import { fetchAPI } from "../../lib/api";

export default async function Portfolio() {
  const data = await fetchAPI("portfolios");
  const portfolio = data.data;

  return (
    <div>
      {portfolio.map((item: any) => (
        <div key={item.documentId}>
          <button>
            <Link href={`/portfolio/${item.title}`}>{item.id}</Link>
          </button>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>{item.md}</p>
        </div>
      ))}
    </div>
  );
}

