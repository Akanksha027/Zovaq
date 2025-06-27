import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Great_Vibes, Bebas_Neue } from 'next/font/google';



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
        className="antialiased" style={{ fontFamily: 'SF Pro Compressed Thin, sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
