import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex lg:flex-row items-center sm:flex-col-reverse">
        <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1 className="font-black text-9xl">Сигалев Георгий</h1>
          {/* - <span className="text-6xl">продуктовый дизайнер</span> */}
          <p className="text-2xl font-bold ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, corporis modi. Odit incidunt, ipsa rem sit veritatis expedita laudantium voluptatum repudiandae dolorem consequuntur pariatur odio, eveniet unde. Nulla, optio autem!</p>
          <div className='flex flex-row gap-5 justify-center items-center'>
            <Link href="https://t.me/WindFall">
              <Image
                className="dark:invert"
                src="/telegram.svg"
                alt="Telegram"
                width={30}
                height={38}
              />
            </Link>
            <Link href="https://www.instagram.com/eg.sig">
              <Image
                className="dark:invert"
                src="/instagram.svg"
                alt="Instagram"
                width={30}
                height={38}
              />
            </Link>
            <Link href="https://github.com/WindFallten">
              <Image
                className="dark:invert"
                src="/github.svg"
                alt="Github"
                width={30}
                height={38}
              />
            </Link>
          </div>
        </div>
        <Image
          className="rounded-full"
          src="/me.jpg"
          alt="Сигалев Георгий"
          width={500}
          height={150}
        />
      </div>
      <div className="flex flex-row">
        <h2 className="font-bold text-4xl">Продуктоый дизайнер</h2>
      </div>
      <div className="">
        <h2 className="">Мои Портфолио</h2>
      </div>
    </div>
  );
}
