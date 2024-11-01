import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex lg:flex-row items-center sm:flex-col-reverse">
        <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1 className="font-black text-9xl">Сигалев Георгий</h1>
          {/* - <span className="text-6xl">продуктовый дизайнер</span> */}
          <p className="text-2xl font-bold ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, corporis modi. Odit incidunt, ipsa rem sit veritatis expedita laudantium voluptatum repudiandae dolorem consequuntur pariatur odio, eveniet unde. Nulla, optio autem!</p>
        </div>
        <Image
          className="rounded-full"
          src="/me.jpg"
          alt="Сигалев Георгий"
          width={500}
          height={150}
        />
      </div>
    </div>
  );
}
