// Import necessary modules
import Link from 'next/link';

// Define the Header component
export default function Header() {
    return (
        <header className="bg-gray-900 text-white py-4 sticky top-0 z-50">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <h1 className="text-xl font-semibold">WindFall</h1>
                <nav className="hidden md:block">
                    <ul className="flex gap-x-6">
                        <li>
                            <Link href="/" className="hover:text-gray-300">
                                Главная
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-gray-300">
                                Обо мне
                            </Link>
                        </li>
                        <li>
                            <Link href="/portfolio" className="hover:text-gray-300">
                                Портфолио
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog" className="hover:text-gray-300">
                                Блог
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-gray-300">
                                Контакты
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}