import Link from 'next/link';
import Image from "next/image";

export default function Footer() {
    return (
        <footer className='flex flex-row gap-5 justify-center items-center py-6'>
                <p>Сигалев Георгий &copy; {new Date().getFullYear()}</p>
                <Link href="https://t.me/WindFall">
                    <Image
                        className="dark:invert"
                        src="/telegram.svg"
                        alt="Telegram"
                        width={30}
                        height={38}  
                    />
                </Link>
        </footer>
    );
}