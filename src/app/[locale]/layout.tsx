import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import "@/styles/index.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Mamedov Furniture - Luxury Interiors",
    description: "Experience furniture in a new dimension.",
};

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const messages = await getMessages();

    return (
        <html lang={locale} className={`${inter.variable} ${playfair.variable}`}>
            <body className="antialiased font-sans bg-background text-foreground">
                <NextIntlClientProvider messages={messages}>
                    <div id="root">
                        {children}
                    </div>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
