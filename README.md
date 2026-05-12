# Solana Perps

A clean, modern landing site for **Solana Perps** — a perpetual-futures venue
built on Solana. Dark theme, Solana brand gradient, Inter typography. Styled
in the spirit of [solana.com](https://solana.com).

Trade SOL, BTC, ETH and more with up to 50× leverage, 400ms block time, deep
liquidity and on-chain settlement. 24/7 markets, low fees, non-custodial.

## Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [React 18](https://react.dev/)
- [TypeScript 5](https://www.typescriptlang.org/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Inter](https://rsms.me/inter/) (primary) + [JetBrains Mono](https://www.jetbrains.com/lp/mono/) (data) via `next/font`

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the dev server (hot reload)    |
| `npm run build` | Build the production bundle          |
| `npm start`     | Run the built production server      |
| `npm run lint`  | Run Next.js / ESLint checks          |

## Project layout

```
app/
  globals.css        # Tailwind + Solana brand gradient helpers
  layout.tsx         # Root layout, fonts (Inter + JetBrains Mono), metadata
  page.tsx           # Home: hero, network pulse, markets, how-it-works, trades, FAQ
  icon.png           # Favicon — the Solana Perps gradient "P"
  about/             # /about — about Solana Perps
  transparency/      # /transparency — full trading FAQ
  images/            # Source brand assets (PerpsLogo.png)
components/
  Header.tsx         # Sticky top nav with brand lockup + Launch App CTA
  Footer.tsx         # Platform / Markets / Solana columns
  PerpsLogo.tsx      # Brand mark (gradient "P") sourced from /public/perps-logo.png
  PerpsHero.tsx      # Hero visual — mini SOL-PERP candlestick + order book
  ChainStats.tsx     # Live-ish Solana network pulse (slot, TPS, epoch, validators)
  AgentProfile.tsx   # "Why Solana Perps" platform spec card
  EndlessLogs.tsx    # Live trade tape (terminal `tail -f` style)
  Transparency.tsx   # Home FAQ preview
  TerminalPage.tsx   # Shared chrome for /about and /transparency
public/
  perps-logo.png     # The P-mark, used in components + as OG image
tailwind.config.ts   # Theme: ink + Solana brand gradient + animations
```

## Theme

- **Background**: pure black (`#000`) with subtle teal + purple radial glows.
- **Accents**: the Solana brand gradient (teal `#14F195` → cyan `#00D1FF` → purple `#9945FF`)
  exposed as `bg-sol-gradient` and a `.gradient-text` utility.
- **Type**: Inter for everything except tabular numbers / price displays
  which use JetBrains Mono.

Tweak in [`tailwind.config.ts`](./tailwind.config.ts) and
[`app/globals.css`](./app/globals.css).

## Notes

- Prices, trades, and chain numbers shown on the site are illustrative
  placeholders. Replace them with live data from your RPC / orderbook
  program when wiring this up to mainnet.
- All "Trade" buttons are visual stubs — they navigate to the `#markets`
  section. Wire them up to your trading UI when ready.
- The `@solana` link in the header / footer points at the official
  `https://x.com/solana` account.
