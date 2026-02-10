import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ally — Executive Partners × AI Systems for Leaders",
  description: "Connecting executive partners with AI systems to empower leaders.",
  keywords: ["executive partners", "AI systems", "leadership", "ally"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <body className="font-inter antialiased bg-ally-black text-ally-white">
        {children}
      </body>
    </html>
  );
}
