'use client';

import {useState} from 'react';
import Link from "next/link";
import "./globals.css";
import GoogleAnalytics from './GoogleAnalytics';
import Image from "next/image";
import {Transition} from '@headlessui/react';

// Root Layout component for client-side logic (Mobile Navigation, etc.)
export default function RootLayout({children}: { children: React.ReactNode }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const currentYear = new Date().getFullYear();
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <html lang="en">
        <body className="antialiased">
        <GoogleAnalytics/>
        {/* Header Navigation */}
        <header className="bg-[#102434] text-[#fff] shadow-md sticky top-0 z-50">
            <div className="flex items-center justify-between px-3 sm:px-6 py-4">
                {/* Logo and Title - adjusted padding and gap */}
                <div className="flex items-center gap-2 sm:gap-4 pr-4">
                    <Link href="/" className="text-2xl sm:text-3xl font-bold text-[#fff] flex items-center gap-1 sm:gap-2">
                        <Image
                            src="/logo.png"
                            width={80}
                            height={64}
                            alt="Sound Waves Yoga Logo"
                            className="h-10 sm:h-12"
                            // priority
                        />
                        <span>Sound Waves Yoga</span>
                    </Link>
                </div>


                {/* Hamburger Menu Button (Visible only on small screens) */}
                <button
                    className="sm:hidden text-3xl"
                    onClick={toggleMenu}
                >
                    &#9776; {/* This is the hamburger icon */}
                </button>

                {/* Desktop Navigation Links (Hidden on small screens) */}
                <nav className="hidden sm:flex gap-6 ml-auto">
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

        {/* Mobile Side Navigation (Sliding Drawer) */}
        {isMenuOpen && (
            <Transition
                show={isMenuOpen}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="sm:hidden fixed inset-0 bg-[#102434] bg-opacity-75 z-40">
                    <div className="flex justify-end p-4">
                        <button onClick={toggleMenu} className="text-white text-3xl">
                            &times;
                        </button>
                    </div>
                    <nav className="flex flex-col items-center space-y-6 py-20">
                        <Link
                            href="/"
                            onClick={toggleMenu}
                            className="text-2xl text-[#fff] hover:text-[#2a373c]"
                        >
                            Home
                        </Link>
                        <Link
                            href="/schedule"
                            onClick={toggleMenu}
                            className="text-2xl text-[#fff] hover:text-[#2a373c]"
                        >
                            Schedule
                        </Link>
                        <Link
                            href="/about"
                            onClick={toggleMenu}
                            className="text-2xl text-[#fff] hover:text-[#2a373c]"
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            onClick={toggleMenu}
                            className="text-2xl text-[#fff] hover:text-[#2a373c]"
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
            </Transition>
        )}

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-[#102434] text-[#fff] text-center py-6">
            <p className="text-xl">
                © {currentYear} Sound Waves Yoga. All rights reserved.
            </p>
        </footer>
        </body>
        </html>
    );
}
