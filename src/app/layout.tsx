import type { Metadata } from 'next';
import "@/styles/index.css";

export const metadata: Metadata = {
    title: "Mamedov FurniVision",
    description: "Mamedov FurniVision",
    
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="antialiased">
                <div id="root">
                    {children}
                </div>
            </body>
        </html>
    );
}
