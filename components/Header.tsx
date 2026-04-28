"use client";

import Link from "next/link";
import { SolanaLogo } from "./SolanaLogo";

const navItems: { label: string; href: string; external?: boolean }[] = [
  { label: "About", href: "/about" },
  { label: "Transparency", href: "/transparency" },
  { label: "Endless Logs", href: "/logs" },
  { label: "X / Twitter", href: "https://x.com/solana", external: true },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-plum-500/40 bg-[#0a0413]/90 shadow-[0_8px_24px_-12px_rgba(168,85,247,0.45)] backdrop-blur-md supports-[backdrop-filter]:bg-[#0a0413]/75 relative">
      {/* subtle glow line under the navbar so it visually separates from the page */}
      <span className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-plum-400/60 to-transparent" />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3 text-plum-100 hover:text-plum-50"
        >
          <SolanaLogo size={26} className="drop-shadow-[0_0_12px_rgba(168,85,247,0.55)] transition group-hover:scale-105" />
          <span className="flex items-baseline gap-2">
            <span className="text-sm tracking-[0.32em] text-plum-200 text-glow group-hover:text-plum-50 sm:text-base">
              SOLAGRAM
            </span>
            <span className="hidden text-[10px] uppercase tracking-[0.4em] text-plum-400/80 sm:inline">
              // solana observatory
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.24em] text-plum-100 transition hover:text-plum-50 hover:text-glow"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs uppercase tracking-[0.24em] text-plum-100 transition hover:text-plum-50 hover:text-glow"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <span className="h-2 w-2 animate-pulse rounded-full bg-plum-400 shadow-[0_0_10px_rgba(168,85,247,0.9)]" />
          <span className="text-[10px] uppercase tracking-[0.32em] text-plum-200">
            Mainnet // Live
          </span>
        </div>

        <button
          aria-label="menu"
          className="md:hidden border border-plum-500/40 px-3 py-1 text-xs text-plum-200 hover:bg-plum-500/10"
        >
          MENU
        </button>
      </div>
    </header>
  );
}
