import "./globals.css";

export const metadata = {
  title: 'Influencer Marketing Agency in India | ZOVAQ',
  description:
    'ZOVAQ is India’s next-gen influencer marketing agency helping brands grow through powerful and strategic influencer campaigns.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Schema Markup (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ZOVAQ",
              url: "https://www.zovaq.com",
              logo: "https://www.zovaq.com/logo.png", // ✅ This is your logo
              description:
                "ZOVAQ is a top influencer marketing agency in India, helping brands run strategic and impactful influencer campaigns.",
              sameAs: [
                "https://www.instagram.com/zovaq",
                "https://www.linkedin.com/company/zovaq",
              ],
            }),
          }}
        />

        {/* Favicon (Browser tab + Google URL icon) */}
        <link rel="icon" href="/logo.png" type="image/png" />

        {/* Open Graph Tags (for link previews on WhatsApp, LinkedIn, etc.) */}
        <meta property="og:title" content="ZOVAQ | Influencer Marketing Agency in India" />
        <meta property="og:description" content="ZOVAQ connects brands with top influencers to create campaigns that convert, connect, and lead." />
        <meta property="og:image" content="https://www.zovaq.com/og-image.jpg" /> {/* ✅ This is your preview/banner image */}
        <meta property="og:url" content="https://www.zovaq.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ZOVAQ | Influencer Marketing Agency in India" />
        <meta name="twitter:description" content="Next-gen influencer marketing campaigns built for reach, impact, and conversion." />
        <meta name="twitter:image" content="https://www.zovaq.com/og-image.jpg" />
      </head>

      <body
        className="antialiased"
        style={{ fontFamily: 'SF Pro Compressed Thin, sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
