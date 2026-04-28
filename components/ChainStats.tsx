"use client";

import { useEffect, useState } from "react";

const SLOTS_PER_EPOCH = 432_000;

// Realistic-ish snapshot for Solana mainnet mid-2026. The starting slot
// matches BootTerminal's ActiveStdoutBar so both live counters look aligned
// on first paint.
const INITIAL_STATE = {
  slot: 487_412_900,
  tps: 3247,
  validators: 1483,
};

function fmt(n: number): string {
  return n.toLocaleString("en-US");
}

function fmt1(n: number): string {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
}

export function ChainStats() {
  const [state, setState] = useState(INITIAL_STATE);

  useEffect(() => {
    const id = setInterval(() => {
      setState((s) => {
        // Slot mostly +1, occasionally +2-3 to simulate skipped slots.
        const r = Math.random();
        const slotJump = r < 0.85 ? 1 : r < 0.97 ? 2 : 3;
        const slot = s.slot + slotJump;

        // TPS does a damped random walk inside a realistic mainnet band.
        const tpsDelta = Math.round((Math.random() - 0.5) * 1400);
        const tps = Math.max(1100, Math.min(5400, s.tps + tpsDelta));

        // Validator count drifts slowly inside its real-world range.
        const validatorsDelta = Math.round((Math.random() - 0.5) * 6);
        const validators = Math.max(
          1410,
          Math.min(1720, s.validators + validatorsDelta),
        );

        return { slot, tps, validators };
      });
    }, 600);
    return () => clearInterval(id);
  }, []);

  // Derived: epoch and progress through it. Both come straight from the slot
  // counter so they're always internally consistent.
  const epoch = Math.floor(state.slot / SLOTS_PER_EPOCH);
  const slotInEpoch = state.slot % SLOTS_PER_EPOCH;
  const epochProgress = (slotInEpoch / SLOTS_PER_EPOCH) * 100;

  const items = [
    { label: "Slot", value: fmt(state.slot), suffix: "//live" },
    { label: "TPS", value: fmt(state.tps), suffix: "tx/s" },
    {
      label: "Epoch",
      value: fmt(epoch),
      suffix: `${fmt1(epochProgress)}% complete`,
    },
    { label: "Validators", value: fmt(state.validators), suffix: "online" },
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
