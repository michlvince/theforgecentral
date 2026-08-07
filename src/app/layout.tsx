import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TheForgeCentral | 360 Creative Agency",
  description: "We are a 360 Creative Agency crafting global narratives via bold ideas in Visual Storytelling, Music, Fashion, Branding, and Media.",
  keywords: ["Creative Agency", "Visual Storytelling", "Music Production", "Fashion Branding", "Media Strategy", "Talent Accelerator", "Live Events"],
  openGraph: {
    title: "TheForgeCentral | Crafting Global Narratives",
    description: "Visual Storytelling, Music, Fashion, Branding, Media, Talent & Live Experiences.",
    url: "https://theforgecentral.com",
    siteName: "TheForgeCentral",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-[#050507] text-zinc-100 antialiased selection:bg-orange-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
