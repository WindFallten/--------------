// app/portfolio/page.tsx
import Link from "next/link";
import { fetchAPI } from "../../lib/api";

export default async function Portfolio() {
  const data = await fetchAPI("portfolios");
  const portfolio = data.data;

  return (
    <div>
      {portfolio.map((item: any) => (
        <div key={item.id}>
          <h2>
            <Link href={`/portfolio/${item.id}`}>{item.id}</Link>
          </h2>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

