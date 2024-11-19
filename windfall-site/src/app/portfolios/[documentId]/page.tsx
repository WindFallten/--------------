// app/portfolios/[documentId]/page.tsx
import { fetchAPI } from "../../../lib/api";

export default async function PortfoliosItem({ params }: { params: { documentId: string } }) {
  const { documentId } = params; // Деструктурируйте корректно
  const data = await fetchAPI(`portfolios/${documentId}?populate=*`); // Убедитесь, что используете populate
  const item = data?.data; // Получаем данные из ответа

  if (!item) {
    return <div>Portfolio item not found.</div>;
  }

  const { title, description, details } = item; // Данные находятся на верхнем уровне
  console.log("Response data:", data);

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <div>
        <h2>Details:</h2>
        {details?.map((block: any, index: number) => (
          <p key={index}>{block.children.map((child: any) => child.text).join(" ")}</p>
        ))}
      </div>
    </div>
  );
}
