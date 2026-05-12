/**
 * Hero chart card for the homepage — a stylized SOL-PERP trading terminal:
 *   - market header (symbol + mock price + 24h change)
 *   - mini candlestick chart (SVG, static deterministic data so SSR/CSR match)
 *   - tiny mock order book to the right
 *   - LONG / SHORT call-to-action row at the bottom
 *
 * Purely decorative — no real prices, no live data.
 */

type Candle = {
  x: number;
  h: number;
  l: number;
  o: number;
  c: number;
  up: boolean;
};

const CANDLES: Candle[] = [
  { x: 10,  h: 95,  l: 108, o: 104, c: 98,  up: true },
  { x: 22,  h: 88,  l: 103, o: 98,  c: 92,  up: true },
  { x: 34,  h: 90,  l: 100, o: 92,  c: 96,  up: false },
  { x: 46,  h: 80,  l: 96,  o: 96,  c: 84,  up: true },
  { x: 58,  h: 72,  l: 90,  o: 84,  c: 76,  up: true },
  { x: 70,  h: 74,  l: 88,  o: 76,  c: 82,  up: false },
  { x: 82,  h: 65,  l: 84,  o: 82,  c: 68,  up: true },
  { x: 94,  h: 60,  l: 78,  o: 68,  c: 64,  up: true },
  { x: 106, h: 55,  l: 72,  o: 64,  c: 58,  up: true },
  { x: 118, h: 58,  l: 68,  o: 58,  c: 62,  up: false },
  { x: 130, h: 48,  l: 65,  o: 62,  c: 52,  up: true },
  { x: 142, h: 42,  l: 58,  o: 52,  c: 46,  up: true },
  { x: 154, h: 38,  l: 54,  o: 46,  c: 42,  up: true },
  { x: 166, h: 42,  l: 50,  o: 42,  c: 46,  up: false },
  { x: 178, h: 30,  l: 48,  o: 46,  c: 34,  up: true },
  { x: 190, h: 25,  l: 42,  o: 34,  c: 28,  up: true },
  { x: 202, h: 22,  l: 38,  o: 28,  c: 26,  up: true },
  { x: 214, h: 18,  l: 32,  o: 26,  c: 22,  up: true },
];

const ASKS = [
  { p: "158.48", s: "0.12" },
  { p: "158.46", s: "0.34" },
  { p: "158.45", s: "0.81" },
  { p: "158.44", s: "0.22" },
  { p: "158.43", s: "1.04" },
];

const BIDS = [
  { p: "158.41", s: "0.55" },
  { p: "158.40", s: "0.87" },
  { p: "158.39", s: "0.31" },
  { p: "158.38", s: "1.22" },
  { p: "158.37", s: "0.94" },
];

const TEAL = "#14F195";
const TEAL_SOFT = "rgba(20,241,149,0.85)";
const RED = "#F87171";
const RED_SOFT = "rgba(248,113,113,0.85)";

export function PerpsHero() {
  return (
    <div className="relative mx-auto w-full max-w-[480px] lg:w-[480px]">
      {/* gradient halo behind the card */}
      <div className="pointer-events-none absolute -inset-10 -z-10 opacity-60 blur-3xl">
        <div className="h-full w-full rounded-3xl bg-sol-gradient-diag" />
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-neutral-950/90 brand-glow animate-float-hero will-change-transform">
        {/* market header */}
        <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 animate-pulse-soft rounded-full bg-sol-teal shadow-[0_0_8px_rgba(20,241,149,0.9)]" />
            <span className="text-sm font-semibold tracking-tight text-white">
              SOL-PERP
            </span>
            <span className="rounded-md border border-white/10 bg-white/[0.04] px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-neutral-300">
              50×
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-lg font-semibold tabular-nums text-white">
              $158.42
            </span>
            <span className="text-xs font-medium text-sol-teal">+4.21%</span>
          </div>
        </div>

        {/* chart + order book */}
        <div className="grid grid-cols-[1fr,132px]">
          <div className="relative border-r border-white/[0.06] p-4">
            <svg
              viewBox="0 0 240 120"
              className="h-32 w-full"
              role="img"
              aria-label="SOL-PERP price chart"
            >
              <g stroke="rgba(255,255,255,0.04)" strokeWidth="0.5">
                {[20, 50, 80, 110].map((y) => (
                  <line key={y} x1="0" y1={y} x2="240" y2={y} />
                ))}
              </g>

              <polyline
                fill="none"
                stroke="rgba(20,241,149,0.45)"
                strokeWidth="1"
                points={CANDLES.map((c) => `${c.x},${c.c}`).join(" ")}
              />

              {CANDLES.map((c, i) => {
                const bodyTop = Math.min(c.o, c.c);
                const bodyH = Math.max(1, Math.abs(c.o - c.c));
                const fill = c.up ? TEAL : RED;
                const wick = c.up ? TEAL_SOFT : RED_SOFT;
                return (
                  <g key={i}>
                    <line
                      x1={c.x}
                      x2={c.x}
                      y1={c.h}
                      y2={c.l}
                      stroke={wick}
                      strokeWidth="0.8"
                    />
                    <rect
                      x={c.x - 3}
                      y={bodyTop}
                      width={6}
                      height={bodyH}
                      fill={fill}
                    />
                  </g>
                );
              })}

              <line
                x1="0"
                y1="22"
                x2="240"
                y2="22"
                stroke="rgba(20,241,149,0.4)"
                strokeWidth="0.6"
                strokeDasharray="3 3"
              />
            </svg>

            <div className="mt-2 flex items-center justify-between text-[11px] text-neutral-500">
              <span>1h · candles</span>
              <span className="tabular-nums">Vol 12.4M</span>
            </div>
          </div>

          <div className="font-mono text-[11px] leading-tight">
            <div className="border-b border-white/[0.06] px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
              Order Book
            </div>
            {ASKS.map((a) => (
              <div
                key={a.p}
                className="flex justify-between border-b border-white/[0.04] px-2.5 py-1 text-rose-400/90"
              >
                <span className="tabular-nums">{a.p}</span>
                <span className="tabular-nums text-neutral-500">{a.s}</span>
              </div>
            ))}
            <div className="bg-white/[0.04] px-2.5 py-1.5 text-center font-mono text-sm font-semibold tabular-nums text-white">
              158.42
            </div>
            {BIDS.map((b) => (
              <div
                key={b.p}
                className="flex justify-between border-b border-white/[0.04] px-2.5 py-1 text-sol-teal/90"
              >
                <span className="tabular-nums">{b.p}</span>
                <span className="tabular-nums text-neutral-500">{b.s}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA row */}
        <div className="grid grid-cols-2 gap-px border-t border-white/[0.06] bg-white/[0.06]">
          <div className="bg-sol-teal/15 py-3 text-center text-sm font-semibold text-sol-teal">
            Long
          </div>
          <div className="bg-rose-500/10 py-3 text-center text-sm font-semibold text-rose-400">
            Short
          </div>
        </div>
      </div>
    </div>
  );
}
