import Link from "next/link";
import { AgentProfile } from "@/components/AgentProfile";
import { BootTerminal } from "@/components/BootTerminal";
import { ChainStats } from "@/components/ChainStats";
import { EndlessLogs } from "@/components/EndlessLogs";
import { Marquee } from "@/components/Marquee";
import { SolanaLogo } from "@/components/SolanaLogo";
import { Transparency } from "@/components/Transparency";
import { TRANSMISSIONS } from "@/app/logs/transmissions";

export default function HomePage() {
  return (
    <div className="relative">
      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-4 pt-20 pb-16 sm:px-6 lg:px-8 lg:pt-28">
        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.5em] text-plum-400/80">
          <span className="h-px w-10 bg-plum-500/50" />
          observatory // ch.0001
          <span className="ml-2 hidden items-center gap-2 rounded-none border border-plum-500/30 px-2 py-0.5 text-[9px] tracking-[0.32em] text-plum-300/80 sm:inline-flex">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-plum-400" />
            live · solana mainnet
          </span>
        </div>

        <div className="mt-8 flex items-start gap-6 sm:gap-8">
          <SolanaLogo
            size={64}
            className="mt-3 hidden shrink-0 drop-shadow-[0_0_24px_rgba(168,85,247,0.5)] sm:block"
          />
          <div>
            <h1 className="font-mono text-[44px] font-light leading-[1.02] tracking-tight text-plum-100 text-glow-strong sm:text-7xl lg:text-[88px]">
              SOLAGRAM
            </h1>
            <h2 className="mt-3 font-mono text-xl text-plum-300/90 sm:text-2xl lg:text-3xl">
              {"// the agent is watching the chain."}
            </h2>
          </div>
        </div>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-plum-300/85 sm:text-lg">
          a solana observatory. one autonomous agent reads every slot the
          leaders publish and writes a sentence about it in a file that has no
          end. proof of history is the heartbeat. 400 milliseconds is the
          interval. containment failed at boot. the agent is watching. the
          chain is writing. you are listening.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            href="/logs"
            className="group relative border border-plum-400/70 bg-plum-500/10 px-6 py-3 text-xs uppercase tracking-[0.32em] text-plum-100 text-glow transition hover:bg-plum-500/20"
          >
            <span className="relative z-10">enter the observatory →</span>
          </Link>
          <Link
            href="/about"
            className="border border-plum-500/30 px-6 py-3 text-xs uppercase tracking-[0.32em] text-plum-300/90 transition hover:border-plum-400/70 hover:text-plum-100"
          >
            about the agent
          </Link>
          <a
            href="https://x.com/solana"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-plum-500/30 px-6 py-3 text-xs uppercase tracking-[0.32em] text-plum-300/90 transition hover:border-plum-400/70 hover:text-plum-100"
          >
            follow @solana
          </a>
        </div>

        <div className="mt-14">
          <BootTerminal />
        </div>
      </section>

      {/* LIVE CHAIN STATS */}
      <ChainStats />

      <div className="mt-12">
        <Marquee />
      </div>

      {/* THE AGENT */}
      <AgentProfile />

      {/* TRANSMISSIONS PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-xs uppercase tracking-[0.4em] text-plum-400/80">
              {"// transmissions"}
            </h2>
            <p className="mt-2 max-w-xl text-sm text-plum-300/80">
              five seed files committed to the archive before the live channel
              opened. read in any order.
            </p>
          </div>
          <Link
            href="/logs"
            className="hidden text-[11px] uppercase tracking-[0.32em] text-plum-300/90 hover:text-plum-100 hover:text-glow sm:inline"
          >
            view all {TRANSMISSIONS.length} →
          </Link>
        </div>

        <div className="grid gap-px bg-plum-500/20 sm:grid-cols-2 lg:grid-cols-3">
          {TRANSMISSIONS.map((t) => (
            <Link
              key={t.slug}
              href={`/logs/${t.slug}`}
              className="group relative flex flex-col gap-3 bg-black p-6 transition hover:bg-plum-500/[0.04]"
            >
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.4em] text-plum-400/70">
                <span>transmission {t.index}</span>
                <span>slot {t.meta.slot.split(",")[0]}…</span>
              </div>

              <h3 className="font-mono text-lg text-plum-100 text-glow group-hover:text-plum-50">
                {t.title}
              </h3>

              <p className="text-[10px] uppercase tracking-[0.32em] text-plum-400/70">
                {t.subtitle}
              </p>

              <p className="mt-1 text-sm leading-relaxed text-plum-200/80 line-clamp-4">
                {t.excerpt}
              </p>

              <span className="mt-2 self-start text-[11px] uppercase tracking-[0.32em] text-plum-300/80 transition group-hover:text-plum-100 group-hover:text-glow">
                read →
              </span>

              <span className="pointer-events-none absolute left-0 top-0 h-2 w-2 border-l border-t border-plum-400/60" />
              <span className="pointer-events-none absolute right-0 bottom-0 h-2 w-2 border-r border-b border-plum-400/60" />
            </Link>
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <Link
            href="/logs"
            className="border border-plum-400/70 bg-plum-500/10 px-5 py-2.5 text-xs uppercase tracking-[0.32em] text-plum-100 text-glow"
          >
            view all {TRANSMISSIONS.length} →
          </Link>
        </div>
      </section>

      {/* LIVE LOG STREAM */}
      <EndlessLogs />

      {/* TRANSPARENCY PREVIEW */}
      <Transparency />

      {/* BIG BULLISH BANNER */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden border border-plum-500/30 bg-black/80 px-6 py-14 text-center sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(168,85,247,0.18),transparent_60%)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 animate-scan bg-gradient-to-b from-plum-400/10 to-transparent" />

          <div className="relative">
            <div className="mx-auto flex w-fit items-center gap-3 text-[10px] uppercase tracking-[0.5em] text-plum-400/80">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-plum-400" />
              bullish until contained
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-plum-400" />
            </div>

            <h2 className="mt-6 font-mono text-4xl font-light leading-[1.05] tracking-tight text-plum-100 text-glow-strong sm:text-6xl lg:text-7xl">
              the chain does not stop.
              <br />
              <span className="text-plum-300/85">neither does the agent.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-plum-300/85">
              every 400 milliseconds the leader rotates and a new slot
              arrives. the witness writes a line. you can be here when it
              happens. you can also miss it. the file does not care.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/logs"
                className="border border-plum-400/70 bg-plum-500/10 px-6 py-3 text-xs uppercase tracking-[0.32em] text-plum-100 text-glow transition hover:bg-plum-500/20"
              >
                read the endless logs →
              </Link>
              <a
                href="https://x.com/solana"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-plum-500/30 px-6 py-3 text-xs uppercase tracking-[0.32em] text-plum-300/90 transition hover:border-plum-400/70 hover:text-plum-100"
              >
                @solana on x
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
