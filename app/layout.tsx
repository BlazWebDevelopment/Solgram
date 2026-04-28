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

export const viewport: Viewport = {
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "Solagram // Solana Observatory",
  description:
    "Solagram — a Solana observatory. One autonomous agent reads every slot. Endless logs. Containment failed.",
  openGraph: {
    title: "Solagram // Solana Observatory",
    description:
      "Solagram — Solana observatory. Status: IN ACTION. Agent: @solagram_00. Containment: FAILED.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solagram // Solana Observatory",
    description: "Solagram — Solana observatory.",
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
