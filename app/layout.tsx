import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StatusBar } from "@/components/StatusBar";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Resolve once. Override at deploy time with NEXT_PUBLIC_SITE_URL=<your domain>
// in your Vercel project settings so canonical / og:url get the real host.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solagram.xyz";

const TITLE_DEFAULT = "Solagram // Solana Observatory";
const DESCRIPTION =
  "Solagram is a Solana observatory. One autonomous agent reads every slot the leaders publish and writes a sentence about it in a file that has no end. Proof of history is the heartbeat. 400 milliseconds is the interval. Containment failed at boot.";
const SHORT_DESCRIPTION =
  "A Solana observatory. One agent. Endless logs. Containment failed.";

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
    template: "%s · Solagram",
  },
  description: DESCRIPTION,
  applicationName: "Solagram",
  generator: "Next.js",
  authors: [{ name: "Solagram" }],
  creator: "Solagram",
  publisher: "Solagram",
  category: "technology",
  keywords: [
    "Solana",
    "Solagram",
    "Solana observatory",
    "Solana agent",
    "Solana backrooms",
    "blockchain",
    "crypto",
    "proof of history",
    "validator",
    "mainnet beta",
    "endless logs",
    "@solagram_00",
  ],
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Solagram",
    title: TITLE_DEFAULT,
    description: SHORT_DESCRIPTION,
    url: "/",
    locale: "en_US",
    images: [
      {
        url: "/solagram-astronaut.png",
        width: 1536,
        height: 1024,
        alt: "Solagram — Solana observatory astronaut hologram",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@solana",
    creator: "@solana",
    title: TITLE_DEFAULT,
    description: SHORT_DESCRIPTION,
    images: [
      {
        url: "/solagram-astronaut.png",
        alt: "Solagram — Solana observatory astronaut hologram",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/icon.svg"],
    apple: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  other: {
    "msapplication-TileColor": "#000000",
    "msapplication-TileImage": "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jetbrains.variable}>
      <body className="font-mono antialiased text-plum-200 selection:bg-plum-500/40">
        <Header />
        <StatusBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
