import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const headingFont = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Alvin Rikardo | Full-Stack Developer",
  description:
    "Modern portfolio for Alvin Rikardo, a full-stack developer focused on polished frontend experiences and practical backend delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${headingFont.variable} h-full scroll-smooth dark antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
