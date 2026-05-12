import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500", "600"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solanaperps.xyz";

const TITLE_DEFAULT = "Solana Perps // Perpetual Futures on Solana";
const DESCRIPTION =
  "Solana Perps is a perpetual-futures venue built on Solana. Trade SOL, BTC, ETH and more with up to 50× leverage, 400ms block time, deep liquidity and on-chain settlement. 24/7 markets, low fees, non-custodial.";
const SHORT_DESCRIPTION =
  "Perpetual futures on Solana. Up to 50× leverage. 400ms blocks. 24/7 markets.";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#000000" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE_DEFAULT,
    template: "%s · Solana Perps",
  },
  description: DESCRIPTION,
  applicationName: "Solana Perps",
  generator: "Next.js",
  authors: [{ name: "Solana Perps" }],
  creator: "Solana Perps",
  publisher: "Solana Perps",
  category: "finance",
  keywords: [
    "Solana",
    "Solana Perps",
    "Solana perpetuals",
    "perpetual futures",
    "perps trading",
    "perpetuals exchange",
    "DEX",
    "on-chain perps",
    "leverage trading",
    "crypto futures",
    "SOL perp",
    "BTC perp",
    "ETH perp",
    "mainnet beta",
  ],
  referrer: "origin-when-cross-origin",
  formatDetection: { telephone: false, email: false, address: false },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Solana Perps",
    title: TITLE_DEFAULT,
    description: SHORT_DESCRIPTION,
    url: "/",
    locale: "en_US",
    images: [
      {
        url: "/perps-logo.png",
        width: 1024,
        height: 1024,
        alt: "Solana Perps",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary",
    site: "@solana",
    creator: "@solana",
    title: TITLE_DEFAULT,
    description: SHORT_DESCRIPTION,
    images: [{ url: "/perps-logo.png", alt: "Solana Perps" }],
  },
  other: {
    "msapplication-TileColor": "#000000",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased text-neutral-200 selection:bg-sol-purple/40">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
