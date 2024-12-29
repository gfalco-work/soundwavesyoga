import { Metadata } from "next";
import RootLayout from "./RootLayout";

// Metadata for the project (Server-side only)
export const metadata: Metadata = {
    title: "Sound Waves Yoga",
    description: "Helping you to find rest in a restless world, through movement, stillness, and sound.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <RootLayout>{children}</RootLayout>;
}