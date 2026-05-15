import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Baidoa Online — Somalia's Trusted News Source",
  description: "Breaking news, analysis and in-depth reporting from Somalia, Africa and the world.",
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
      </head>
      <body>{children}</body>
    </html>
  );
}
