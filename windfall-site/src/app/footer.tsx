import Link from 'next/link';
import Image from "next/image";

export default function Footer() {
    return (
        <footer className='flex flex-col gap-5 justify-center items-center p-10'>
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
                {/* <Link href="https://t.me/WindFall">
                    <Image
                        className="dark:invert"
                        src="/discord.svg"
                        alt="Discord"
                        width={30}
                        height={38}  
                    />
                </Link> */}
            </div>
            <p>Сигалев Георгий &copy; {new Date().getFullYear()}</p>
        </footer>
    );
}