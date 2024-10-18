import type { Metadata } from "next";
import { getServerSession } from 'next-auth';
import localFont from "next/font/local";
import "./globals.css";
import SessionProvider from '@/lib/session-provider';
import {merriweather} from '@/app/fonts/fonts_config';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "FSC Demo",
  description: "Fero Smart Checkout",
  icons: '/fero-logo-letter.svg',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body
        className={`theme-root${geistSans.variable} ${geistMono.variable} ${merriweather} antialiased`}
      >
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
