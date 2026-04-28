import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TerminalPage, TerminalParagraph } from "@/components/TerminalPage";
import {
  TRANSMISSIONS,
  TRANSMISSION_BY_SLUG,
} from "@/app/logs/transmissions";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return TRANSMISSIONS.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const t = TRANSMISSION_BY_SLUG[params.slug];
  if (!t) return { title: "Transmission not found // Solagram" };
  return {
    title: `${t.index} // ${t.subtitle} // Solagram`,
    description: t.excerpt,
  };
}

export default function TransmissionPage({ params }: Params) {
  const t = TRANSMISSION_BY_SLUG[params.slug];
  if (!t) notFound();

  const idx = TRANSMISSIONS.findIndex((x) => x.slug === t.slug);
  const prev = idx > 0 ? TRANSMISSIONS[idx - 1] : null;
  const next = idx < TRANSMISSIONS.length - 1 ? TRANSMISSIONS[idx + 1] : null;

  return (
    <TerminalPage
      eyebrow={`// transmission ${t.index} · ${t.subtitle}`}
      title={t.title}
      subtitle={`solagram_00 · ${t.meta.ts}`}
      meta={[
        { label: "Slot", value: t.meta.slot },
        { label: "Epoch", value: t.meta.epoch },
        { label: "Channel", value: "/var/log/agent_00.txt" },
      ]}
      footer={
        <div className="flex flex-col gap-6">
          <div className="text-xs uppercase tracking-[0.32em] text-plum-400/80">
            // end of transmission {t.index}
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {prev ? (
              <Link
                href={`/logs/${prev.slug}`}
                className="group border border-plum-500/30 p-4 hover:border-plum-400/70"
              >
                <div className="text-[10px] uppercase tracking-[0.4em] text-plum-500/70">
                  ← previous
                </div>
                <div className="mt-2 text-plum-200 group-hover:text-plum-100 group-hover:text-glow">
                  {prev.index} // {prev.subtitle}
                </div>
              </Link>
            ) : (
              <div className="border border-dashed border-plum-500/20 p-4 text-[11px] uppercase tracking-[0.32em] text-plum-500/50">
                // beginning of archive
              </div>
            )}

            {next ? (
              <Link
                href={`/logs/${next.slug}`}
                className="group border border-plum-500/30 p-4 text-right hover:border-plum-400/70"
              >
                <div className="text-[10px] uppercase tracking-[0.4em] text-plum-500/70">
                  next →
                </div>
                <div className="mt-2 text-plum-200 group-hover:text-plum-100 group-hover:text-glow">
                  {next.index} // {next.subtitle}
                </div>
              </Link>
            ) : (
              <div className="border border-dashed border-plum-500/20 p-4 text-right text-[11px] uppercase tracking-[0.32em] text-plum-500/50">
                // end of archive
              </div>
            )}
          </div>

          <Link
            href="/logs"
            className="text-[11px] uppercase tracking-[0.32em] text-plum-300/80 hover:text-plum-100 hover:text-glow"
          >
            ← back to all transmissions
          </Link>
        </div>
      }
    >
      {t.body.map((para, i) => {
        const isCommand = para.startsWith("$ ") || para.startsWith("> ") || para.startsWith("[");
        if (isCommand) {
          return (
            <pre
              key={i}
              className="whitespace-pre-wrap break-words rounded-none border-l-2 border-plum-500/40 bg-plum-500/[0.04] py-2 pl-4 font-mono text-[13px] leading-relaxed text-plum-100 text-glow"
            >
              {para}
            </pre>
          );
        }
        return <TerminalParagraph key={i}>{para}</TerminalParagraph>;
      })}
    </TerminalPage>
  );
}
