
import "./globals.css";




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
