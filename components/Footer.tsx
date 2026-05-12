import Link from "next/link";
import { PerpsLogo } from "./PerpsLogo";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/[0.06] bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.5fr,1fr,1fr,1fr] lg:px-8">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2.5">
            <PerpsLogo size={32} />
            <span className="text-base font-semibold tracking-tight text-white">
              Solana Perps
            </span>
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-neutral-400">
            Perpetual futures on Solana. Up to 50× leverage, 400ms block time,
            deep liquidity, on-chain settlement, 24/7.
          </p>
        </div>

        <div>
          <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Platform
          </div>
          <ul className="space-y-3 text-sm text-neutral-300">
            <li>
              <Link href="/#markets" className="transition hover:text-white">
                Markets
              </Link>
            </li>
            <li>
              <Link href="/#why" className="transition hover:text-white">
                Why Solana
              </Link>
            </li>
            <li>
              <Link href="/#how" className="transition hover:text-white">
                How it Works
              </Link>
            </li>
            <li>
              <Link href="/about" className="transition hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/transparency" className="transition hover:text-white">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Markets
          </div>
          <ul className="space-y-3 text-sm text-neutral-300">
            <li>
              <Link href="/#markets" className="transition hover:text-white">
                SOL-PERP
              </Link>
            </li>
            <li>
              <Link href="/#markets" className="transition hover:text-white">
                BTC-PERP
              </Link>
            </li>
            <li>
              <Link href="/#markets" className="transition hover:text-white">
                ETH-PERP
              </Link>
            </li>
            <li>
              <Link href="/#markets" className="transition hover:text-white">
                JTO-PERP
              </Link>
            </li>
            <li>
              <Link href="/#markets" className="transition hover:text-white">
                JUP-PERP
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Solana
          </div>
          <ul className="space-y-3 text-sm text-neutral-300">
            <li>
              <a
                href="https://x.com/solana"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                X — @solana
              </a>
            </li>
            <li>
              <a
                href="https://solana.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                solana.com
              </a>
            </li>
            <li>
              <a
                href="https://status.solana.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                Mainnet status
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-sm text-neutral-500 sm:flex-row sm:px-6 lg:px-8">
          <span>© 2026 Solana Perps. All rights reserved.</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sol-teal shadow-[0_0_8px_rgba(20,241,149,0.9)]" />
            <span>Live on Solana mainnet · 400ms heartbeat</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
