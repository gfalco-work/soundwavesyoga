import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

// Metadata for the project
export const metadata: Metadata = {
    title: "Sound Waves Yoga",
    description: "Helping you to find rest in a restless world, through movement, stillness and sound.",
};

// Root layout component
export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className="antialiased">
        {/* Header Navigation */}
        <header className="bg-[#102434] text-[#fff] shadow-md sticky top-0 z-50">
            <div className="flex items-center px-6 py-4"> {/* Removed mx-auto and adjusted padding */}
                {/* Logo */}
                <div className="flex items-center gap-4">
                    <img
                        src="/logo.png"
                        alt="Sound Waves Yoga Logo"
                        className="h-12"
                    />
                    <Link href="/" className="text-3xl font-bold text-[#fff]">
                        Sound Waves Yoga
                    </Link>
                </div>

                {/* Navigation Links */}
                <nav className="flex gap-6 ml-auto">
                    <Link
                        href="/"
                        className="hover:underline hover:text-[#2a373c] transition-colors text-xl"
                    >
                        Home
                    </Link>
                    <Link
                        href="/schedule"
                        className="hover:underline hover:text-[#2a373c] transition-colors text-xl"
                    >
                        Schedule
                    </Link>
                    <Link
                        href="/about"
                        className="hover:underline hover:text-[#2a373c] transition-colors text-xl"
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        className="hover:underline hover:text-[#2a373c] transition-colors text-xl"
                    >
                        Contact
                    </Link>
                </nav>
            </div>
        </header>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-[#102434] text-[#fff] text-center py-6">
            <p className="text-xl">
                © {new Date().getFullYear()} Sound Waves Yoga. All rights reserved.
            </p>
        </footer>
        </body>
        </html>
    );
}
