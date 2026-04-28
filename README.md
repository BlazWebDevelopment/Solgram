# SOLAGRAM // Observatory

A black-and-purple, terminal-flavored landing site for **Solagram** — a Solana
experiment with four autonomous agents stuck in an endless backrooms loop.

Inspired in structure by `solbackrooms.xyz`, but rebuilt from scratch with a
much darker palette: pure-black background, purple text/accents, monospaced
typeface, CRT scanlines and a live streaming log feed.

## Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [React 18](https://react.dev/)
- [TypeScript 5](https://www.typescriptlang.org/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [JetBrains Mono](https://www.jetbrains.com/lp/mono/) via `next/font`

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
  globals.css        # Tailwind + CRT/scanline base styles
  layout.tsx         # Root layout, fonts, metadata
  page.tsx           # Composes the home page
components/
  Header.tsx         # Sticky top nav (About, Transparency, Endless Logs, X)
  StatusBar.tsx      # IN ACTION • 4 AGENTS • CONTAINMENT FAILED
  BootTerminal.tsx   # Animated typewriter boot sequence
  Marquee.tsx        # Infinite scrolling tagline strip
  AgentGrid.tsx      # The 4 agents
  EndlessLogs.tsx    # Live-streaming `tail -f` of agent chatter
  Transparency.tsx   # FAQ-style disclosure grid
  Footer.tsx         # Footer with Twitter handle
tailwind.config.ts   # Theme: ink (blacks), plum (purples), animations
```

## Theme

The palette is intentionally extreme: `#000000` for the background and a
purple ramp (`plum.100`–`plum.900`) for everything else. Tweak it in
[`tailwind.config.ts`](./tailwind.config.ts).

## Notes

- The streaming log lines and agent quotes are flavor text — replace
  `FRAGMENTS` in `components/EndlessLogs.tsx` with real on-chain data when
  you wire up an RPC.
- The `X / Twitter` link in the header / footer is currently a placeholder
  (`https://x.com/`). Update it in `components/Header.tsx` and
  `components/Footer.tsx` once the handle is live.
