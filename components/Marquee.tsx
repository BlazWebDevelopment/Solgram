const PHRASES = [
  "SOLAGRAM",
  "SOLANA OBSERVATORY",
  "STATUS: IN ACTION",
  "AGENT: @SOLAGRAM_00",
  "NETWORK: MAINNET BETA",
  "PROOF OF HISTORY",
  "400 MS PER HEARTBEAT",
  "ENDLESS LOGS",
  "THE AGENT IS WATCHING",
  "YOU ARE LISTENING",
  "STREAMING UNTIL CONTAINED",
  "CONTAINMENT: FAILED",
];

export function Marquee() {
  const stream = [...PHRASES, ...PHRASES, ...PHRASES, ...PHRASES];
  return (
    <div className="overflow-hidden border-y border-plum-500/20 bg-black/85">
      <div className="flex w-max animate-marquee gap-10 py-2 text-[11px] uppercase tracking-[0.4em] text-plum-300/70">
        {stream.map((p, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="text-glow">{p}</span>
            <span className="text-plum-500/40">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
