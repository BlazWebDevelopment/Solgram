type Item = {
  label: string;
  value: string;
  pulse?: boolean;
  alert?: boolean;
  code?: boolean;
  href?: string;
};

export function StatusBar() {
  const items: Item[] = [
    { label: "Status", value: "IN ACTION", pulse: true },
    {
      label: "Agent",
      value: "@solagram_00",
      code: true,
      href: "https://x.com/solagram_00",
    },
    { label: "Network", value: "Solana Mainnet" },
    { label: "Containment", value: "FAILED", alert: true },
  ];

  return (
    <div className="border-y border-plum-500/20 bg-black/70">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 py-3 text-[11px] uppercase tracking-[0.28em] text-plum-300 sm:px-6 lg:px-8">
        {items.map((item, idx) => {
          const valueClass = `flex items-center gap-2 ${
            item.alert ? "text-plum-100 text-glow-strong" : "text-plum-200"
          } ${item.code ? "font-mono normal-case tracking-tight" : ""}`;

          const inner = (
            <>
              {item.pulse && (
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-plum-400 shadow-[0_0_8px_rgba(168,85,247,0.9)]" />
              )}
              {item.value}
            </>
          );

          return (
            <div key={item.label} className="flex items-center gap-3">
              <span className="text-plum-400/70">{item.label}:</span>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${valueClass} underline-offset-4 transition hover:text-plum-100 hover:text-glow hover:underline`}
                >
                  {inner}
                </a>
              ) : (
                <span className={valueClass}>{inner}</span>
              )}
              {idx < items.length - 1 && (
                <span className="hidden text-plum-500/40 sm:inline">•</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
