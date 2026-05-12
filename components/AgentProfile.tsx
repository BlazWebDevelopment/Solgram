import Link from "next/link";

const SPECS = [
  { k: "Network", v: "Solana Mainnet Beta" },
  { k: "Block time", v: "~400ms · Proof of History" },
  { k: "Max leverage", v: "Up to 50× isolated · 20× cross" },
  { k: "Fees", v: "0.02% maker · 0.05% taker" },
  { k: "Collateral", v: "USDC · SOL · JitoSOL" },
  { k: "Custody", v: "Non-custodial · on-chain" },
];

/**
 * "Why Solana Perps" — the central platform pitch card on the home page.
 */
export function AgentProfile() {
  return (
    <section
      id="why"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mb-10 flex flex-col gap-3">
        <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sol-teal">
          Why Solana Perps
        </div>
        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Built for perpetuals.{" "}
          <span className="gradient-text">Powered by Solana.</span>
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-neutral-400">
          Perpetuals are a latency game and Solana wins on latency. Sub-second
          fills, cheap fees, and settlement that finishes inside a single
          block — without leaving the chain.
        </p>
      </div>

      <article className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-neutral-950/60">
        <div className="grid gap-0 lg:grid-cols-[1.2fr,1fr]">
          <div className="border-b border-white/[0.06] p-8 lg:border-b-0 lg:border-r lg:p-10">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse-soft rounded-full bg-sol-teal shadow-[0_0_8px_rgba(20,241,149,0.9)]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Desk open · 24/7
              </span>
            </div>

            <h3 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Perps. Fast. On-chain.
            </h3>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-300">
              Solana Perps brings perpetual futures to the fastest chain in
              crypto. Open long or short positions on the top markets with up
              to <span className="font-semibold text-white">50× leverage</span>,
              sub-second fills, and on-chain settlement that finishes inside a
              single block.
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-400">
              Your wallet stays in your hands. The matching engine runs at
              Solana speed. Fees are what fees should be on a chain doing a
              million transactions a day.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/#markets"
                className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-neutral-200"
              >
                View markets →
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.04]"
              >
                About the platform
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2">
            {SPECS.map((t) => (
              <div
                key={t.k}
                className="border-b border-l border-white/[0.06] p-6 first:border-l-0 sm:[&:nth-child(odd)]:border-l-0"
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  {t.k}
                </div>
                <div className="mt-2 text-sm font-medium text-white">{t.v}</div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}
