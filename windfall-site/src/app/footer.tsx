import Link from 'next/link';

export default function Footer() {
    return (
        <footer>
            <div>
                <p>Сигалев Георгий &copy; {new Date().getFullYear()}</p>
            </div>
            <div>
                <Link href="https://twitter.com/your-username">
                    Connect on Twitter
                </Link>
            </div>
        </footer>
    );
}