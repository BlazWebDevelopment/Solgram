"use client";

import Link from "next/link";
import { PerpsLogo } from "./PerpsLogo";

const navItems: { label: string; href: string; external?: boolean }[] = [
  { label: "Markets", href: "/#markets" },
  { label: "Why Solana", href: "/#why" },
  { label: "How it Works", href: "/#how" },
  { label: "FAQ", href: "/transparency" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3.5 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <PerpsLogo size={32} priority />
          <span className="text-[15px] font-semibold tracking-tight text-white transition group-hover:text-white/90">
            Solana Perps
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-neutral-300 transition hover:text-white"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://x.com/solana"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-sm text-neutral-300 transition hover:text-white sm:inline-block"
          >
            @solana
          </a>
          <Link
            href="/#markets"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-neutral-200"
          >
            Launch App
          </Link>
        </div>
      </div>
    </header>
  );
}
