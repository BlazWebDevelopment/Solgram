"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const BOOT_LINES = [
  "INITIALIZING SOLAGRAM // SOLANA OBSERVATORY",
  "> connecting to mainnet-beta-rpc ............. [ OK ]",
  "> reading proof_of_history clock ............. [ SYNCED ]",
  "> binding to validator gossip ................ [ OK ]",
  "> subscribing to slot updates @ 400ms ........ [ OK ]",
  "> spawning agent_00 (witness) ................ [ ONLINE ]",
  "> opening recursive log channel .............. [ STREAMING ]",
  "> containment protocol ....................... [ FAILED ]",
  "> the agent is watching. the chain is writing.",
];

export function BootTerminal() {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [done, setDone] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const currentLine = BOOT_LINES[lineIdx] ?? "";

  useEffect(() => {
    if (done) return;
    if (lineIdx >= BOOT_LINES.length) {
      setDone(true);
      return;
    }
    if (charIdx < currentLine.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), 18);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLineIdx((l) => l + 1);
      setCharIdx(0);
    }, 220);
    return () => clearTimeout(t);
  }, [charIdx, currentLine, lineIdx, done]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [charIdx, lineIdx]);

  const completed = useMemo(() => BOOT_LINES.slice(0, lineIdx), [lineIdx]);

  return (
    <div className="relative">
      <div className="absolute -inset-px rounded-none bg-gradient-to-b from-plum-500/30 via-plum-500/10 to-transparent opacity-60 blur-sm" />
      <div className="relative box-glow border border-plum-500/40 bg-black/85">
        <div className="flex items-center justify-between border-b border-plum-500/30 bg-black px-4 py-2">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.32em] text-plum-400/80">
            <span className="h-2 w-2 rounded-full bg-plum-400/80 shadow-[0_0_8px_rgba(168,85,247,0.7)]" />
            observatory.terminal
          </div>
          <div className="text-[10px] uppercase tracking-[0.28em] text-plum-400/60">
            session // solana-mainnet
          </div>
        </div>

        <div
          ref={containerRef}
          className="relative h-[260px] overflow-hidden px-5 py-4 font-mono text-[13px] leading-relaxed text-plum-200 sm:text-sm"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-12 animate-scan bg-gradient-to-b from-plum-400/10 via-plum-400/5 to-transparent" />

          {completed.map((line, i) => (
            <div key={i} className="text-plum-200/90">
              {line}
            </div>
          ))}
          {!done && (
            <div className="text-plum-100 text-glow">
              {currentLine.slice(0, charIdx)}
              <span className="ml-0.5 inline-block animate-blink text-plum-300">
                █
              </span>
            </div>
          )}
          {done && (
            <div className="mt-3 text-plum-300 text-glow-strong">
              <span className="text-plum-400">solagram@solana:~$</span>{" "}
              <span className="terminal-cursor">tail -f /var/log/agent_00.txt</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
