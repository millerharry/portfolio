import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Cursor } from "@/components/cursor";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://harrymiller.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Harry Miller — Full-stack Product Engineer",
    template: "%s — Harry Miller",
  },
  description:
    "Melbourne-based full-stack product engineer (available July 2026). I design and ship production-grade products end-to-end — web, mobile and AI. Builder of The Card Exchange, Logbook and Switchboard.",
  keywords: [
    "Harry Miller",
    "full-stack engineer",
    "product engineer",
    "Melbourne developer",
    "graduate software engineer",
    "Next.js",
    "SwiftUI",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Harry Miller" }],
  creator: "Harry Miller",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: SITE_URL,
    title: "Harry Miller — Full-stack Product Engineer",
    description:
      "I design and ship production-grade products end-to-end — web, mobile and AI. Available in Melbourne, July 2026.",
    siteName: "Harry Miller",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harry Miller — Full-stack Product Engineer",
    description:
      "I design and ship production-grade products end-to-end — web, mobile and AI. Available in Melbourne, July 2026.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0B",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-ink-base font-sans text-fg antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink-base"
        >
          Skip to content
        </a>
        <SmoothScroll />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
