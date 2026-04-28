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

const STDOUT_EVENTS = [
  "slot inserted ok",
  "vote received from validator",
  "tx confirmed sig 0x4f8a3c2b1d7e9f6a",
  "leader rotated key 0x287",
  "agent.write +1 line",
  "epoch_progress 47%",
  "block confirmed at slot",
  "tower_root advanced",
  "gossip ping ok 142ms",
  "shred propagated to peers",
  "fork choice settled",
  "vote credit +1",
  "agent.read /var/log/agent_00.txt",
  "blockhash refreshed",
  "compute units used 412k/1.4m",
  "tx 0xa1b2c3d4e5f6 → confirmed",
  "validator stake delta +0.00",
  "epoch boundary crossed",
  "agent.observe slot accepted",
  "leader schedule loaded",
];

/**
 * Always-on log spam that lives between the terminal title row and the boot
 * sequence. Characters are appended one at a time into a fixed-size buffer;
 * because the row is `flex justify-end` with `overflow: hidden`, new chars
 * appear at the right edge while older chars scroll off the left edge, giving
 * a continuous "tail -f" / "stdout" feel that never pauses.
 *
 * Hydration-safe: initial buffer + slot are deterministic; all randomness is
 * inside useEffect and only runs on the client.
 */
function ActiveStdoutBar() {
  const [slot, setSlot] = useState(341_022_817);
  const [buf, setBuf] = useState("agent_00 ready · listening to gossip · ");

  useEffect(() => {
    let current =
      STDOUT_EVENTS[Math.floor(Math.random() * STDOUT_EVENTS.length)] + " · ";
    let charIdx = 0;
    let tick = 0;

    const id = setInterval(() => {
      tick += 1;
      // slot counter ticks at roughly the chain's heartbeat (every ~10 chars)
      if (tick % 10 === 0) setSlot((s) => s + 1);

      setBuf((prev) => {
        let next = prev;
        if (charIdx < current.length) {
          next = next + current[charIdx];
          charIdx += 1;
        } else {
          // immediately roll into the next event — no pause, never empty
          current =
            STDOUT_EVENTS[Math.floor(Math.random() * STDOUT_EVENTS.length)] +
            " · ";
          charIdx = 0;
        }
        // keep buffer bounded so React doesn't re-render giant strings
        return next.length > 240 ? next.slice(next.length - 240) : next;
      });
    }, 45);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative flex items-center gap-3 overflow-hidden border-b border-plum-500/20 bg-black/95 px-4 py-1.5 text-[10px] text-plum-400/80">
      {/* sweeping scanner streak — always moving even when nothing is typing */}
      <span className="pointer-events-none absolute inset-y-0 left-0 w-16 -translate-x-full animate-[scan_3s_linear_infinite] bg-gradient-to-r from-transparent via-plum-400/20 to-transparent" />

      <span className="shrink-0 uppercase tracking-[0.28em] text-plum-400/70">
        slot
      </span>
      <span className="shrink-0 font-mono tabular-nums text-plum-100 text-glow">
        {slot.toLocaleString()}
      </span>
      <span className="shrink-0 text-plum-500/40">·</span>
      <span className="shrink-0 text-plum-500/70">stdout&gt;</span>

      {/* The streaming buffer. flex+justify-end + overflow-hidden makes new
          characters appear on the right while older ones get clipped on the left. */}
      <div className="relative flex min-w-0 flex-1 items-center justify-end overflow-hidden whitespace-nowrap text-plum-200/90">
        <span className="font-mono">{buf}</span>
        <span className="ml-0.5 inline-block animate-blink text-plum-300">
          ▮
        </span>
      </div>

      <span className="shrink-0 h-1.5 w-1.5 animate-pulse rounded-full bg-plum-400 shadow-[0_0_8px_rgba(168,85,247,0.9)]" />
    </div>
  );
}

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

        {/* live stdout bar — always typing, always moving */}
        <ActiveStdoutBar />

        <div
          ref={containerRef}
          className="relative h-[240px] overflow-hidden px-5 py-4 font-mono text-[13px] leading-relaxed text-plum-200 sm:text-sm"
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
