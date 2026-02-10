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
  description:
    "We embed our Executive Partners to turn wins into playbooks, and layer AI automation so your operating system runs itself. More time, clarity, impact back to you.",
  keywords: [
    "executive partners",
    "AI systems",
    "leadership",
    "automation",
    "playbooks",
    "operations",
    "executive assistant",
  ],
  openGraph: {
    title: "Ally — Executive Partners × AI Systems for Leaders",
    description:
      "We embed our Executive Partners to turn wins into playbooks, and layer AI automation so your operating system runs itself.",
    type: "website",
    url: "https://withally.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ally — Executive Partners × AI Systems for Leaders",
    description:
      "We embed our Executive Partners to turn wins into playbooks, and layer AI automation so your operating system runs itself.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <body className="font-inter antialiased bg-ally-bg text-ally-white">
        {children}
      </body>
    </html>
  );
}
