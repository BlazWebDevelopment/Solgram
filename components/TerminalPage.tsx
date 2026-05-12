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
 * Shared page chrome for /about and /transparency. Clean dark layout with
 * a prominent gradient eyebrow, large headline, optional meta grid, and a
 * relaxed prose column underneath.
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
    <article className="mx-auto max-w-4xl px-4 pb-24 pt-16 sm:px-6 lg:px-8 lg:pt-24">
      <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sol-teal">
        {eyebrow}
      </div>

      <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
        {title}
      </h1>

      {subtitle && (
        <p className="mt-4 text-base text-neutral-400 sm:text-lg">{subtitle}</p>
      )}

      {meta && meta.length > 0 && (
        <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.06] sm:grid-cols-3">
          {meta.map((m) => (
            <div key={m.label} className="bg-neutral-950/60 px-5 py-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                {m.label}
              </div>
              <div className="mt-1.5 font-mono text-sm font-medium tabular-nums text-white">
                {m.value}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-10 space-y-5 text-base leading-[1.8] text-neutral-300 sm:text-[17px]">
        {children}
      </div>

      {footer && (
        <div className="mt-16 border-t border-white/[0.06] pt-8">{footer}</div>
      )}
    </article>
  );
}

export function TerminalParagraph({
  children,
  emphasis,
}: {
  children: ReactNode;
  emphasis?: boolean;
}) {
  return (
    <p className={emphasis ? "text-white" : ""}>{children}</p>
  );
}
