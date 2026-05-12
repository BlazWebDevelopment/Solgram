import Link from "next/link";
import { TerminalPage, TerminalParagraph } from "@/components/TerminalPage";

export const metadata = {
  title: "FAQ // Solana Perps",
  description:
    "Frequently asked questions about Solana Perps — how it works, what it costs, custody, risk, and listed markets.",
};

const FAQ: { q: string; a: string[]; emphasis?: boolean }[] = [
  {
    q: "What is Solana Perps?",
    a: [
      "An on-chain perpetual-futures venue built on Solana. You can open long or short positions on the top crypto markets — SOL, BTC, ETH, JTO, JUP, WIF, PYTH, BONK and more — with up to 50× leverage on majors.",
      "Every order is signed by your wallet, matched against an on-chain orderbook, and settled in the next Solana block. There is no off-chain ledger, no signup, no email, no KYC gate.",
    ],
  },
  {
    q: "Is it custodial?",
    a: [
      "No. Solana Perps is non-custodial. Your collateral lives in a program-derived address that you, and only you, can sign for. We cannot move your funds. We cannot freeze your account. The smart contract is the bank.",
      "If you withdraw, the assets land back in your wallet inside the same block. There is no withdrawal queue and no human approval step.",
    ],
  },
  {
    q: "What are the fees?",
    a: [
      "0.02% maker and 0.05% taker on every fill. Funding rates float by market and refresh every hour — paid peer-to-peer between longs and shorts, not to the platform.",
      "There is no inactivity fee. No withdrawal fee. No spread markup on top of the orderbook. You pay Solana compute units for every transaction, which usually costs a fraction of a cent.",
    ],
    emphasis: true,
  },
  {
    q: "What leverage is available?",
    a: [
      "Up to 50× on majors (SOL, BTC, ETH). Up to 20× on listed altcoin perps. Isolated and cross-margin modes are both supported — isolated risks only the collateral you allocate to a position, cross uses your full margin account.",
      "Leverage is a tool. It is also the single fastest way to lose your collateral. Size positions you can afford to be wrong on.",
    ],
  },
  {
    q: "How does settlement work?",
    a: [
      "Everything settles on Solana mainnet. Orders are matched on-chain against an orderbook program. Fills are immediately reflected in your margin account. Funding payments are accrued continuously and applied at funding intervals.",
      "When a position becomes underwater, anyone can crank a liquidation transaction and earn the bounty. Liquidations are open and permissionless.",
    ],
  },
  {
    q: "What collateral is accepted?",
    a: [
      "USDC is the primary collateral. SOL and JitoSOL are accepted with a haircut so your collateral keeps earning staking yield while you trade.",
      "More accepted collateral types are added over time. The list of supported assets is on-chain and updated by the program.",
    ],
  },
  {
    q: "Is it safe?",
    a: [
      "The website is safe. It is a static site with no wallet-draining script, no message-signing prompt, and no popup that asks for permissions you didn't click for.",
      "The smart contracts are audited and the addresses are published. You should still treat trading on a perpetuals venue the same way you treat any leveraged position: not safe in the sense of risk-free, only safe in the sense of transparent.",
    ],
  },
];

export default function TransparencyPage() {
  return (
    <TerminalPage
      eyebrow="FAQ"
      title="Everything you should know."
      subtitle="How the desk works · what it costs · what it doesn't do."
      meta={[
        { label: "Updated", value: "Live" },
        { label: "Custody", value: "Non-custodial" },
        { label: "Wallet asks", value: "0 on landing" },
      ]}
      footer={
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/about"
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.04]"
          >
            ← About
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
        The short version: on-chain perpetual futures, on Solana, with the
        receipts.
      </TerminalParagraph>

      {FAQ.map((item) => (
        <div key={item.q} className="space-y-3 pt-4">
          <h2 className="text-xl font-semibold text-white">{item.q}</h2>
          {item.a.map((para, i) => (
            <TerminalParagraph key={i} emphasis={item.emphasis}>
              {para}
            </TerminalParagraph>
          ))}
        </div>
      ))}

      <TerminalParagraph>
        If any of the above changes, this page changes with it. Transparency
        only counts if it stays current.
      </TerminalParagraph>
    </TerminalPage>
  );
}
