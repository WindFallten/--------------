// app/portfolio/[id]/page.tsx
import { fetchAPI } from '../../../lib/api';

export default async function PortfolioItem({ params }: { params: { id: string } }) {
  const data = await fetchAPI(`portfolio/${params.id}`);
  const item = data.data;

  return (
    <div>
      <h1>{item.attributes.title}</h1>
      <img src={item.attributes.image?.url} alt={item.attributes.title} />
      <p>{item.attributes.details}</p>
      {/* Отображение полной информации о проекте */}
    </div>
  );
}
