import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
    title: 'Chat Box',
    description: 'chat app with rooms',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <body suppressHydrationWarning className={`${jetbrainsMono.variable} font-mono`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Analytics />
                    {children}
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
}
