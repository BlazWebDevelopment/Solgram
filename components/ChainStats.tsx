"use client";

import { useEffect, useState } from "react";

const INITIAL = {
  slot: 341_022_817,
  tps: 3247,
  epoch: 769,
  validators: 1483,
};

function fmt(n: number) {
  return n.toLocaleString("en-US");
}

export function ChainStats() {
  const [stats, setStats] = useState(INITIAL);

  useEffect(() => {
    const id = setInterval(() => {
      setStats((s) => ({
        // slots advance ~every 400ms; we tick every 600ms so step a bit more than 1
        slot: s.slot + 1 + Math.floor(Math.random() * 2),
        tps: 2400 + Math.floor(Math.random() * 2400),
        epoch:
          s.slot % 432_000 === 0
            ? s.epoch + 1
            : s.epoch + (Math.random() < 0.001 ? 1 : 0),
        validators: 1470 + Math.floor(Math.random() * 30),
      }));
    }, 600);
    return () => clearInterval(id);
  }, []);

  const items = [
    { label: "Slot", value: fmt(stats.slot), suffix: "//live" },
    { label: "TPS", value: fmt(stats.tps), suffix: "tx/s" },
    { label: "Epoch", value: fmt(stats.epoch), suffix: null },
    { label: "Validators", value: fmt(stats.validators), suffix: "online" },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-3 flex items-baseline justify-between">
        <div className="text-[10px] uppercase tracking-[0.4em] text-plum-400/70">
          {"// chain pulse"}
        </div>
        <div className="text-[10px] uppercase tracking-[0.32em] text-plum-500/60">
          source: observatory.rpc
        </div>
      </div>

      <div className="grid gap-px bg-plum-500/20 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div
            key={it.label}
            className="relative bg-black px-5 py-5 transition hover:bg-plum-500/[0.04]"
          >
            <div className="text-[10px] uppercase tracking-[0.4em] text-plum-400/70">
              {it.label}
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <div className="font-mono text-2xl text-plum-100 text-glow tabular-nums sm:text-3xl">
                {it.value}
              </div>
              {it.suffix && (
                <div className="text-[10px] uppercase tracking-[0.32em] text-plum-500/70">
                  {it.suffix}
                </div>
              )}
            </div>
            <span className="pointer-events-none absolute right-3 top-3 h-1.5 w-1.5 animate-pulse rounded-full bg-plum-400 shadow-[0_0_8px_rgba(168,85,247,0.9)]" />
          </div>
        ))}
      </div>
    </section>
  );
}
