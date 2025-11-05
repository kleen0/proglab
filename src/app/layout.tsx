import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers/provider";
import Header from "@/components/UI/header";

// Используем стандартный шрифт Inter вместо Geist
const inter = Inter({
    subsets: ["latin", "cyrillic"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Белый Лотос - ИБ проект",
    description: "Исследование XSS, CSRF и JWT атак в веб-безопасности",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body className={`${inter.variable} font-sans antialiased`}>
                <Providers>
                    <Header />
                    <main className="min-h-screen bg-gradient-to-br from-rose-50 to-white">
                        {children}
                    </main>
                </Providers>
            </body>
        </html>
    );
}