import Link from "next/link";

export function Transparency() {
  const items = [
    {
      k: "What is Solana Perps?",
      v: "An on-chain perpetual-futures venue built on Solana. Open long or short positions on the top crypto markets with up to 50× leverage, sub-second fills, and 24/7 settlement.",
    },
    {
      k: "Is it custodial?",
      v: "No. You trade from your own wallet. Collateral, positions and settlement all live on Solana mainnet. No off-chain ledger, no withdrawal queue.",
    },
    {
      k: "What does it cost?",
      v: "0.02% maker / 0.05% taker on every fill. Funding rates float by market and refresh every hour, paid peer-to-peer between longs and shorts.",
    },
    {
      k: "Why Solana?",
      v: "400ms block time. Cheap fees. Global liquidity. Settlement that finishes inside a single block — the chain other perps venues are still trying to catch up to.",
    },
  ];

  return (
    <section
      id="faq-preview"
      className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8"
    >
      <div className="mb-10 flex items-end justify-between gap-6">
        <div className="flex flex-col gap-3">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sol-teal">
            FAQ
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Everything you should know.
          </h2>
        </div>
        <Link
          href="/transparency"
          className="hidden text-sm font-medium text-neutral-300 transition hover:text-white sm:inline-block"
        >
          Read the full FAQ →
        </Link>
      </div>

      <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.06] sm:grid-cols-2">
        {items.map((it) => (
          <div
            key={it.k}
            className="bg-neutral-950/60 p-7 transition hover:bg-neutral-900/60"
          >
            <div className="text-base font-semibold text-white">{it.k}</div>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              {it.v}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 sm:hidden">
        <Link
          href="/transparency"
          className="text-sm font-medium text-neutral-300 transition hover:text-white"
        >
          Read the full FAQ →
        </Link>
      </div>
    </section>
  );
}
