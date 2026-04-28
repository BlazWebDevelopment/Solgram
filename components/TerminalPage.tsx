import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  meta?: { label: string; value: string }[];
  children: ReactNode;
  footer?: ReactNode;
};

/**
 * Shared "terminal page" chrome used by /about, /transparency, /logs, and the
 * individual /logs/[slug] transmissions. Pure black bg, plum text, mono font,
 * heavy left/right gutter so the body reads like a terminal scroll.
 */
export function TerminalPage({
  eyebrow,
  title,
  subtitle,
  meta,
  children,
  footer,
}: Props) {
  return (
    <article className="mx-auto max-w-4xl px-4 pb-24 pt-12 sm:px-6 lg:px-8 lg:pt-20">
      <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.5em] text-plum-400/80">
        <span className="h-px w-10 bg-plum-500/50" />
        {eyebrow}
      </div>

      <h1 className="mt-6 font-mono text-3xl font-light leading-[1.1] text-plum-100 text-glow-strong sm:text-4xl lg:text-5xl">
        {title}
      </h1>

      {subtitle && (
        <p className="mt-3 text-sm uppercase tracking-[0.32em] text-plum-400/80">
          {subtitle}
        </p>
      )}

      {meta && meta.length > 0 && (
        <div className="mt-6 grid gap-px border border-plum-500/20 bg-plum-500/20 sm:grid-cols-3">
          {meta.map((m) => (
            <div key={m.label} className="bg-black px-4 py-3">
              <div className="text-[10px] uppercase tracking-[0.4em] text-plum-400/60">
                {m.label}
              </div>
              <div className="mt-1 font-mono text-sm text-plum-100 text-glow tabular-nums">
                {m.value}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="my-8 border-t border-dashed border-plum-500/30" />

      <div className="space-y-5 font-mono text-[14px] leading-[1.85] text-plum-200/90 sm:text-[15px]">
        {children}
      </div>

      {footer && (
        <div className="mt-16 border-t border-plum-500/20 pt-8">{footer}</div>
      )}
    </article>
  );
}

/**
 * A single paragraph in the terminal page. Renders a faint left margin tick
 * so the prose looks like log output instead of a regular blog post.
 */
export function TerminalParagraph({
  children,
  emphasis,
}: {
  children: ReactNode;
  emphasis?: boolean;
}) {
  return (
    <p
      className={`relative pl-5 ${
        emphasis ? "text-plum-100 text-glow" : ""
      }`}
    >
      <span className="pointer-events-none absolute left-0 top-2 h-px w-3 bg-plum-500/40" />
      {children}
    </p>
  );
}
