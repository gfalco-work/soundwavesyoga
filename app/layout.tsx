import { Metadata } from "next";
import ClientLayout from "./ClientLayout";
import "./globals.css";

export const metadata: Metadata = {
    title: "Michelle Butterly - Therapeutic Yoga & Soundbath in Putney, London | Sound Waves Yoga",
    description: "Michelle Butterly, qualified Ashtanga and Restorative Yoga teacher offering therapeutic yoga classes and soundbath experiences in Putney, London. Find rest in a restless world through movement, stillness, and sound.",
    keywords: "Michelle Butterly, yoga teacher, ashtanga yoga, restorative yoga, therapeutic yoga, soundbath, sound healing, putney, london, wellness",
    authors: [{ name: "Michelle Butterly" }],
    openGraph: {
        title: "Michelle Butterly - Therapeutic Yoga & Soundbath",
        description: "Qualified Ashtanga and Restorative Yoga teacher in Putney, London",
        url: "https://www.soundwavesyoga.com",
        siteName: "Sound Waves Yoga",
        locale: "en_GB",
        type: "website",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <link rel="canonical" href="https://www.soundwavesyoga.com" />
            <meta name="author" content="Michelle Butterly" />
        </head>
        <ClientLayout>{children}</ClientLayout>
        </html>
    );
}