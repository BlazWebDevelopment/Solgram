import Link from "next/link";
import { TerminalPage, TerminalParagraph } from "@/components/TerminalPage";

export const metadata = {
  title: "About // Solana Perps",
  description:
    "What Solana Perps is, how it works, and why perpetual futures belong on Solana.",
};

export default function AboutPage() {
  return (
    <TerminalPage
      eyebrow="About"
      title="Perpetual futures on Solana."
      subtitle="Fast. Cheap. On-chain. Open 24/7."
      meta={[
        { label: "Network", value: "Solana Mainnet Beta" },
        { label: "Block time", value: "~400 ms" },
        { label: "Markets", value: "12 perps · 24/7" },
      ]}
      footer={
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/transparency"
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.04]"
          >
            FAQ →
          </Link>
          <Link
            href="/#markets"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-neutral-200"
          >
            View markets →
          </Link>
        </div>
      }
    >
      <TerminalParagraph emphasis>
        Solana Perps is an on-chain perpetual-futures venue, built on Solana.
        Long or short the top markets. Up to 50× leverage. Settlement in the
        next slot.
      </TerminalParagraph>

      <TerminalParagraph>
        A perpetual future is a derivative without an expiry date. It tracks
        the price of an underlying asset — SOL, BTC, ETH, JTO, JUP, and more
        — and is kept in line with that price by a funding rate that flows
        between longs and shorts every hour. You can hold a position for a
        minute, a day, or until you choose to close it.
      </TerminalParagraph>

      <TerminalParagraph>
        The matching engine runs on Solana. Orders are signed by your wallet,
        routed to an orderbook on mainnet, matched against resting liquidity,
        and settled in the same block. There is no off-chain ledger. There is
        no withdrawal queue. When you close a position, the collateral is
        already on-chain, in your account, settled.
      </TerminalParagraph>

      <TerminalParagraph>
        The platform is non-custodial. We never hold your funds. Your margin
        account is a program-derived address that you, and only you, can
        sign for. Liquidations are open and permissionless — anyone running
        a keeper can crank an underwater account and earn the bounty. The
        whole machine is visible, all the way down.
      </TerminalParagraph>

      <TerminalParagraph>
        Fees are 0.02% maker and 0.05% taker on every fill. Funding rates
        float by market and refresh every hour. There is no inactivity fee.
        There is no withdrawal fee. You keep what you make, minus the chain&apos;s
        compute-unit cost, which is measured in fractions of a cent.
      </TerminalParagraph>

      <TerminalParagraph>
        Why Solana? Because perpetuals are a latency game, and Solana wins on
        latency. 400 millisecond blocks. Local fee markets. Cheap parallel
        execution. An orderbook that updates faster than humans can place
        orders. The chain other perps venues have spent years trying to
        catch up to.
      </TerminalParagraph>

      <TerminalParagraph>
        What you can do here: read this page, scroll the live trade tape on
        the home page, check the FAQ, and when you are ready, connect a
        wallet and open a position. What you cannot do here: get rugged by
        an off-chain ledger.
      </TerminalParagraph>

      <TerminalParagraph emphasis>
        The desk is open. The chain is live. Trade when you&apos;re ready.
      </TerminalParagraph>
    </TerminalPage>
  );
}
