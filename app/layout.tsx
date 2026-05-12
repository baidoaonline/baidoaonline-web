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
      <body>{children}</body>
    </html>
  );
}