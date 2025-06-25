import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Great_Vibes, Bebas_Neue } from 'next/font/google';





const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-great-vibes',
});

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas-neue',
});

export const metadata = {
  title: 'ZOVAQ',
  description: 'Influencer Marketing Agency',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${greatVibes.variable}  ${bebasNeue.variable}antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
