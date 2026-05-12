"use client";

import { useEffect, useRef, useState } from "react";

type Trade = {
  ts: string;
  side: "LONG" | "SHORT";
  market: string;
  size: string;
  price: string;
};

type MarketSpec = {
  symbol: string;
  base: number;
  range: number;
  decimals: number;
  sizeBase: number;
  sizeRange: number;
  sizeDecimals: number;
};

const MARKETS: MarketSpec[] = [
  { symbol: "SOL-PERP",   base: 158.4,    range: 2.5,    decimals: 2, sizeBase: 0.5,  sizeRange: 4.5,  sizeDecimals: 2 },
  { symbol: "BTC-PERP",   base: 67200,    range: 900,    decimals: 1, sizeBase: 0.01, sizeRange: 0.4,  sizeDecimals: 3 },
  { symbol: "ETH-PERP",   base: 3742,     range: 80,     decimals: 1, sizeBase: 0.1,  sizeRange: 2.5,  sizeDecimals: 2 },
  { symbol: "JTO-PERP",   base: 2.71,     range: 0.18,   decimals: 3, sizeBase: 5,    sizeRange: 80,   sizeDecimals: 1 },
  { symbol: "JUP-PERP",   base: 0.91,     range: 0.07,   decimals: 4, sizeBase: 20,   sizeRange: 400,  sizeDecimals: 0 },
  { symbol: "WIF-PERP",   base: 1.84,     range: 0.14,   decimals: 4, sizeBase: 50,   sizeRange: 600,  sizeDecimals: 0 },
  { symbol: "PYTH-PERP",  base: 0.42,     range: 0.05,   decimals: 4, sizeBase: 100,  sizeRange: 2000, sizeDecimals: 0 },
  { symbol: "BONK-PERP",  base: 0.00002,  range: 0.000003, decimals: 7, sizeBase: 100000, sizeRange: 4000000, sizeDecimals: 0 },
];

const SIDES: Trade["side"][] = ["LONG", "SHORT"];

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

function nowStamp() {
  const d = new Date();
  return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

function fmtNumber(n: number, decimals: number) {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

function makeTrade(): Trade {
  const m = MARKETS[Math.floor(Math.random() * MARKETS.length)];
  const side = SIDES[Math.floor(Math.random() * SIDES.length)];
  const price = m.base + (Math.random() - 0.5) * m.range;
  const size = m.sizeBase + Math.random() * m.sizeRange;
  return {
    ts: nowStamp(),
    side,
    market: m.symbol,
    size: fmtNumber(size, m.sizeDecimals),
    price: fmtNumber(price, m.decimals),
  };
}

/**
 * Live trades feed for Solana Perps — clean dark card with a streaming
 * tape of mock fills. SSR-safe: empty on first paint, fills on the client.
 */
export function EndlessLogs() {
  const [trades, setTrades] = useState<Trade[]>([]);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setTrades(Array.from({ length: 12 }, makeTrade));
    const interval = setInterval(() => {
      setTrades((prev) => {
        const merged = [...prev, makeTrade()];
        return merged.length > 80 ? merged.slice(merged.length - 80) : merged;
      });
    }, 800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [trades]);

  return (
    <section
      id="trades"
      className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8"
    >
      <div className="mb-8 flex flex-col gap-3">
        <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sol-teal">
          Live Trades
        </div>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          The desk never closes.
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-neutral-400">
          A live tape of fills across every market. Block-by-block, settled
          on Solana mainnet.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-neutral-950/60">
        <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3">
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 animate-pulse-soft rounded-full bg-sol-teal shadow-[0_0_8px_rgba(20,241,149,0.9)]" />
            <span className="font-mono text-xs text-neutral-300">
              /perps/fills.live
            </span>
          </div>
          <span className="text-xs font-medium text-neutral-500">tail -f</span>
        </div>

        <div
          ref={ref}
          className="relative h-[380px] overflow-y-auto px-5 py-4 font-mono text-[12.5px] leading-relaxed sm:text-sm"
        >
          {trades.map((t, i) => (
            <div key={i} className="flex items-center gap-4 whitespace-pre-wrap py-0.5">
              <span className="shrink-0 text-neutral-600">[{t.ts}]</span>
              <span
                className={`shrink-0 w-14 text-xs font-bold uppercase tracking-wider ${
                  t.side === "LONG" ? "text-sol-teal" : "text-rose-400"
                }`}
              >
                {t.side}
              </span>
              <span className="shrink-0 w-24 text-neutral-200">{t.market}</span>
              <span className="shrink-0 w-24 text-right tabular-nums text-neutral-300">
                {t.size}
              </span>
              <span className="shrink-0 text-neutral-600">@</span>
              <span className="tabular-nums font-semibold text-white">
                {t.price}
              </span>
            </div>
          ))}
          {trades.length > 0 && (
            <div className="mt-2 font-mono text-xs text-neutral-500">
              <span className="text-neutral-400">perps@solana:~$</span>{" "}
              <span className="terminal-cursor" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
