import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Inter - Primary font (weights 100-900)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Inter Tight - Secondary font
const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
  weight: ["400", "700"],
});

// Inter Display - Display font (custom from Framer)
// Note: Using regular Inter as fallback since Inter Display from Google Fonts
// has limited availability. For exact match, use Framer CDN fonts.
const interDisplay = Inter({
  subsets: ["latin"],
  variable: "--font-inter-display",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// PP Editorial New Ultralight - Custom decorative font
const editorial = localFont({
  src: "./fonts/editorial/pp-editorial-new-ultralight.woff2",
  variable: "--font-editorial",
  display: "swap",
  weight: "200",
});

export const metadata: Metadata = {
  title: "Ally — Executive Partners x AI Systems for Leaders",
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
    title: "Ally — Executive Partners x AI Systems for Leaders",
    description:
      "We embed our Executive Partners to turn wins into playbooks, and layer AI automation so your operating system runs itself.",
    type: "website",
    url: "https://withally.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ally — Executive Partners x AI Systems for Leaders",
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
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} ${interDisplay.variable} ${editorial.variable}`}
    >
      <body className="font-inter antialiased bg-ally-bg text-white">
        {children}
      </body>
    </html>
  );
}
