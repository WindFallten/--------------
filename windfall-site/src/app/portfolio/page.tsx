// app/portfolio/page.tsx
import { fetchAPI } from '../../lib/api';

export default async function Portfolio() {
  const data = await fetchAPI("portfolio");
  const portfolio = data.data;

  return (
    <div>
      {portfolio.map((item: any) => (
        <div key={item.id}>
          <h2>{item.attributes.title}</h2>
          <p>{item.attributes.description}</p>
          {/* Добавь минимальную информацию о проекте */}
        </div>
      ))}
    </div>
  );
}
