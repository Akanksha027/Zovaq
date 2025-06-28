import "./globals.css";

export const metadata = {
  title: 'ZOVAQ | Influencer Marketing Agency in India',
  description: 'ZOVAQ is a leading influencer marketing agency helping brands connect with top influencers to grow online.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
        style={{ fontFamily: 'SF Pro Compressed Thin, sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
