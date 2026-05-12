import Link from "next/link";
import { AgentProfile } from "@/components/AgentProfile";
import { ChainStats } from "@/components/ChainStats";
import { EndlessLogs } from "@/components/EndlessLogs";
import { PerpsHero } from "@/components/PerpsHero";
import { PerpsLogo } from "@/components/PerpsLogo";
import { Transparency } from "@/components/Transparency";

const MARKETS = [
  { symbol: "SOL-PERP",  price: "$158.42",  change: "+4.21%", up: true,  vol: "$48.2M",  lev: "50×" },
  { symbol: "BTC-PERP",  price: "$67,210",  change: "+1.08%", up: true,  vol: "$112.4M", lev: "50×" },
  { symbol: "ETH-PERP",  price: "$3,742.5", change: "+2.34%", up: true,  vol: "$74.8M",  lev: "50×" },
  { symbol: "JTO-PERP",  price: "$2.71",    change: "-0.92%", up: false, vol: "$8.1M",   lev: "20×" },
  { symbol: "JUP-PERP",  price: "$0.91",    change: "+3.12%", up: true,  vol: "$11.6M",  lev: "20×" },
  { symbol: "WIF-PERP",  price: "$1.84",    change: "+6.40%", up: true,  vol: "$22.3M",  lev: "20×" },
  { symbol: "PYTH-PERP", price: "$0.42",    change: "-1.20%", up: false, vol: "$4.7M",   lev: "20×" },
  { symbol: "BONK-PERP", price: "$0.00002", change: "+5.10%", up: true,  vol: "$6.9M",   lev: "20×" },
];

const STEPS = [
  {
    n: "01",
    title: "Connect a wallet",
    body: "Any Solana wallet works — Phantom, Backpack, Solflare. No signup, no email, no KYC gate at the door.",
  },
  {
    n: "02",
    title: "Deposit collateral",
    body: "Fund your margin account with USDC, SOL, or JitoSOL. Collateral stays on-chain in your own account.",
  },
  {
    n: "03",
    title: "Open a position",
    body: "Pick a market, choose long or short, set your size and leverage. Orders settle in the next Solana block.",
  },
];

const HIGHLIGHTS = [
  { k: "12+", v: "Perpetual markets" },
  { k: "50×", v: "Max leverage" },
  { k: "400ms", v: "Block time" },
  { k: "24/7", v: "Always open" },
];

export default function HomePage() {
  return (
    <div className="relative">
      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr),auto] lg:gap-16">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-neutral-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sol-teal opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-sol-teal" />
              </span>
              Live on Solana mainnet
            </div>

            <div className="mt-6 flex items-center gap-4">
              <div className="relative">
                <div className="pointer-events-none absolute -inset-3 -z-10 rounded-full bg-sol-gradient-diag opacity-40 blur-2xl" />
                <PerpsLogo size={64} priority className="relative" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-400">
                Solana Perps
              </span>
            </div>

            <h1 className="mt-8 text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Perpetual futures
              <br />
              at <span className="gradient-text">Solana speed.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-neutral-400">
              Trade SOL, BTC, ETH and more with up to{" "}
              <span className="font-semibold text-white">50× leverage</span>,
              sub-second fills, and on-chain settlement that finishes inside a
              single block. Non-custodial. Cross-margin. 24/7.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/#markets"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
              >
                Open the desk →
              </Link>
              <Link
                href="/#why"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.04]"
              >
                Why Solana
              </Link>
              <a
                href="https://x.com/solana"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-neutral-300 transition hover:border-white/30 hover:text-white"
              >
                Follow @solana
              </a>
            </div>

            {/* Inline highlights strip */}
            <div className="mt-12 grid grid-cols-2 gap-6 border-t border-white/[0.06] pt-8 sm:grid-cols-4">
              {HIGHLIGHTS.map((h) => (
                <div key={h.v}>
                  <div className="font-mono text-2xl font-semibold tabular-nums text-white">
                    {h.k}
                  </div>
                  <div className="mt-1 text-xs text-neutral-500">{h.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 mx-auto lg:order-2 lg:mx-0">
            <PerpsHero />
          </div>
        </div>
      </section>

      {/* SOLANA NETWORK PULSE */}
      <ChainStats />

      {/* WHY SOLANA PERPS — platform card */}
      <AgentProfile />

      {/* MARKETS */}
      <section
        id="markets"
        className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8"
      >
        <div className="mb-10 flex flex-col gap-3">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sol-teal">
            Markets
          </div>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Trade the top perps on Solana.
            </h2>
            <span className="text-sm text-neutral-500">
              {MARKETS.length} markets · 24/7
            </span>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-neutral-400">
            Prices below are illustrative — connect a wallet to see the live
            book and open a position in the next slot.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
          {MARKETS.map((m) => (
            <div
              key={m.symbol}
              className="group relative flex flex-col gap-4 bg-neutral-950/60 p-6 transition hover:bg-neutral-900/60"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-white">
                  {m.symbol}
                </span>
                <span className="rounded-md border border-white/10 bg-white/[0.04] px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                  {m.lev}
                </span>
              </div>

              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-2xl font-semibold tabular-nums text-white">
                    {m.price}
                  </span>
                  <span
                    className={`text-sm font-medium ${
                      m.up ? "text-sol-teal" : "text-rose-400"
                    }`}
                  >
                    {m.change}
                  </span>
                </div>
                <div className="mt-1 text-xs text-neutral-500">
                  24h vol · {m.vol}
                </div>
              </div>

              <div className="mt-1 grid grid-cols-2 gap-2">
                <button className="rounded-lg bg-sol-teal/15 py-2 text-xs font-semibold text-sol-teal transition hover:bg-sol-teal/25">
                  Long
                </button>
                <button className="rounded-lg bg-rose-500/10 py-2 text-xs font-semibold text-rose-400 transition hover:bg-rose-500/20">
                  Short
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how"
        className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8"
      >
        <div className="mb-10 flex flex-col gap-3">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sol-teal">
            How it Works
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Three steps. No signup.
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-neutral-400">
            Solana Perps is non-custodial. Your wallet, your collateral, your
            position — settled on-chain in the next block.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.06] lg:grid-cols-3">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="relative bg-neutral-950/60 p-8 transition hover:bg-neutral-900/60"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-4xl font-semibold gradient-text">
                  {s.n}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Step
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* LIVE TRADES FEED */}
      <EndlessLogs />

      {/* FAQ PREVIEW */}
      <Transparency />

      {/* CLOSING BANNER — logo as the centerpiece */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-neutral-950/80 px-6 py-16 text-center sm:px-12 sm:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(20,241,149,0.12),transparent_55%),radial-gradient(circle_at_50%_120%,rgba(153,69,255,0.18),transparent_60%)]" />

          <div className="relative flex flex-col items-center">
            <div className="relative">
              <div className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-sol-gradient-diag opacity-50 blur-3xl" />
              <PerpsLogo size={120} className="relative" />
            </div>

            <h2 className="mt-10 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              The chain never stops.
              <br />
              <span className="gradient-text">Neither does the desk.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
              Every 400 milliseconds a new block lands and the book moves.
              Open a long, open a short, exit on a fill — settlement is
              on-chain and finishes in the same slot. No off-chain ledger.
              No withdrawal queue. No closing bell.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/#markets"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
              >
                View markets →
              </Link>
              <a
                href="https://x.com/solana"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.04]"
              >
                @solana on X
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
