import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Baidoa Online — Somalia's Trusted News Source",
  description: "Baidoa Online waa ilo wareedka ugu la-aamin badan ee Soomaaliya. Breaking news, analysis and in-depth reporting from Somalia, Africa and the world.",
  keywords: "Baidoa, Somalia news, Somali news, wararka Soomaaliya, South West State, Bay region, Africa news, breaking news Somalia",
  authors: [{ name: "Baidoa Online" }],
  creator: "Baidoa Online",
  publisher: "Baidoa Online",
  metadataBase: new URL("https://www.baidoaonline.com"),
  alternates: {
    canonical: "https://www.baidoaonline.com",
  },
  openGraph: {
    type: "website",
    locale: "so_SO",
    alternateLocale: "en_US",
    url: "https://www.baidoaonline.com",
    siteName: "Baidoa Online",
    title: "Baidoa Online — Somalia's Trusted News Source",
    description: "Breaking news, analysis and in-depth reporting from Somalia, Africa and the world.",
    images: [
      {
        url: "https://www.baidoaonline.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Baidoa Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@BaidoaOnline",
    creator: "@BaidoaOnline",
    title: "Baidoa Online — Somalia's Trusted News Source",
    description: "Breaking news, analysis and in-depth reporting from Somalia, Africa and the world.",
    images: ["https://www.baidoaonline.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "add-your-search-console-code-here",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6192423933876456" crossOrigin="anonymous"></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RTVLE9Z5P4"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RTVLE9Z5P4');
        `}} />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      <script dangerouslySetInnerHTML={{ __html: `
        document.addEventListener('contextmenu', function(e) { e.preventDefault(); });
        document.addEventListener('copy', function(e) { e.preventDefault(); });
        document.addEventListener('keydown', function(e) {
          if ((e.ctrlKey || e.metaKey) && ['c','u','s','a','p'].indexOf(e.key.toLowerCase()) !== -1) {
            e.preventDefault();
          }
        });
        document.addEventListener('selectstart', function(e) { e.preventDefault(); });
      ` }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
