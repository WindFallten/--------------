// app/portfolios/page.tsx
import Link from "next/link";
import Image from "next/image";
import { fetchAPI } from "../../lib/api";

export default async function Portfolios() {
  const data = await fetchAPI("portfolios?populate=*");
  const portfolio = data.data;

  return (
    <div>
      {portfolio.map((item: any) => (
        <div key={item.documentId}>
          {/* <Image
          className="rounded-full"
          src="/portfolios/{item.image.url}"
          alt="Сигалев Георгий"
          width={500}
          height={150}
          /> */}
          <button>
            <Link href={`/portfolios/${item.documentId}`}>Подробно</Link>
          </button>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          
        </div>
      ))}
    </div>
  );
}

