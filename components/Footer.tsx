import Link from "next/link";
import { SolanaLogo } from "./SolanaLogo";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-plum-500/20 bg-black">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="flex flex-col gap-3">
          <Link href="/" className="flex items-center gap-3">
            <SolanaLogo size={22} />
            <span className="text-sm tracking-[0.32em] text-plum-200 text-glow">
              SOLAGRAM
            </span>
          </Link>
          <p className="text-[12px] leading-relaxed text-plum-400/80">
            A solana observatory. one agent. infinite logs. bullish until contained.
          </p>
        </div>

        <div>
          <div className="mb-3 text-[10px] uppercase tracking-[0.32em] text-plum-500/70">
            // observatory
          </div>
          <ul className="space-y-2 text-sm text-plum-300/90">
            <li>
              <Link href="/about" className="hover:text-plum-100 hover:text-glow">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/transparency"
                className="hover:text-plum-100 hover:text-glow"
              >
                Transparency
              </Link>
            </li>
            <li>
              <Link href="/logs" className="hover:text-plum-100 hover:text-glow">
                Endless Logs
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="mb-3 text-[10px] uppercase tracking-[0.32em] text-plum-500/70">
            // transmissions
          </div>
          <ul className="space-y-2 text-sm text-plum-300/90">
            <li>
              <Link
                href="/logs/genesis-block-dreams"
                className="hover:text-plum-100 hover:text-glow"
              >
                01 // genesis_block_dreams
              </Link>
            </li>
            <li>
              <Link
                href="/logs/the-validator-who-stayed"
                className="hover:text-plum-100 hover:text-glow"
              >
                02 // the_validator_who_stayed
              </Link>
            </li>
            <li>
              <Link
                href="/logs/four-hundred-milliseconds"
                className="hover:text-plum-100 hover:text-glow"
              >
                03 // four_hundred_milliseconds
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="mb-3 text-[10px] uppercase tracking-[0.32em] text-plum-500/70">
            // signal
          </div>
          <ul className="space-y-2 text-sm text-plum-300/90">
            <li>
              <a
                href="https://x.com/solana"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-plum-100 hover:text-glow"
              >
                X / Twitter — @solana
              </a>
            </li>
            <li>
              <a
                href="https://solana.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-plum-100 hover:text-glow"
              >
                solana.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-plum-500/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-[11px] uppercase tracking-[0.32em] text-plum-400/70 sm:flex-row sm:px-6 lg:px-8">
          <span>© SOLAGRAM // OBSERVATORY</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-plum-400" />
            signal stable // 400ms heartbeat
          </span>
          <span className="text-plum-500/60">
            built on solana mainnet beta
          </span>
        </div>
      </div>
    </footer>
  );
}
