// app/portfolios/page.tsx
import qs from "qs";
import Link from "next/link";
import Image from "next/image";
import { fetchAPI } from "../../lib/api";

export default async function Portfolios() {
  const data = await fetchAPI("portfolios?populate=*")
  const portfolio = data.data;

  // data.search = qs.stringify({
  //   populate: {
  //     image: {
  //       fields: ["alternativeText", "name", "url"],
  //     },
  //   },
  // });

  return (
    <div>
      {portfolio.map((item: any) => (
        <div key={item.documentId}>
          
          {/* <Image
            // src={`http://localhost:8000/api${item.image.fields.url}`} // Убедитесь, что путь корректен
            alt={item.image || "Portfolio image"}
            width={500}
            height={300}
          /> */}
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <button className="bg-gray-500 p-5">
            <Link href={`/portfolios/${item.documentId}`}>Подробно</Link>
          </button>
        </div>
      ))}
    </div>
  );
}

// import qs from "qs";

// async function getTeamMembers() {
//   const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";
//   const path = "/api/portfolios";

//   const url = new URL(path, baseUrl);

//   url.search = qs.stringify({
//     populate: {
//       image: {
//         fields: ["alternativeText", "name", "url"],
//       },
//     },
//   });

//   const res = await fetch(url);

//   if (!res.ok) throw new Error("Failed to fetch team members");

//   const data = await res.json();
//   console.log(data);

//   return data;
// }

// interface TeamMemberProps {
//   id: number;
//   documentId: string;
//   name: string;
//   description: string;
//   slug: string;
//   createdAt: string;
//   updatedAt: string;
//   publishedAt: string;
//   locale: string;
//   photo: {
//     id: number;
//     documentId: string;
//     alternativeText: string;
//     name: string;
//     url: string;
//   };
// }

// function TeamMemberCard({
//   title,
//   description,
//   image,
//   documentId,
// }: Readonly<TeamMemberProps>) {
//   const imageUrl = `${
//     process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000"
//   }${image.url}`;
//   return (
//     <Link
//       href={`/portfolios/${documentId}`}
//       className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-black/30"
//     >
//       <Image
//         src={imageUrl}
//         alt={image.alternativeText || title}
//         width={500}
//         height={500}
//       />
//       <div className="p-6">
//         <h3 className="text-xl font-semibold mb-2">{title}</h3>
//         <p className="text-gray-600 dark:text-white/50">{description}</p>
//       </div>
//     </Link>
//   );
// }

// export default async function Portfolios() {
//   const teamMembers = await getTeamMembers();

//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-8">Our Team</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {teamMembers.data.map((member: TeamMemberProps) => (
//           <TeamMemberCard key={member.documentId} {...member} />
//         ))}
//       </div>
//     </div>
//   );
// }