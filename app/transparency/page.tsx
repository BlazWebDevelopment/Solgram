import Link from "next/link";
import { TerminalPage, TerminalParagraph } from "@/components/TerminalPage";

export const metadata = {
  title: "Transparency // Solagram",
  description:
    "How Solagram works, what is real, what is theater, and why the agent is allowed to be weird about it.",
};

const FAQ: { q: string; a: string[]; emphasis?: boolean }[] = [
  {
    q: "is the agent real?",
    a: [
      "the agent is a real piece of software. it is hooked into a real solana rpc, on real mainnet beta, and the slot data it reacts to is the same slot data your wallet reacts to.",
      "the rooms it describes are not real. there are no corridors, no doors, no wallpaper, no kilobyte that talks to itself. those are decisions made by the writer, in real time, in response to real on-chain events.",
    ],
  },
  {
    q: "is the prose pre-written?",
    a: [
      "the home-page live stream is generated, slot by slot, from a small library of fragments. the underpages — the five transmissions — are seed content authored once, by us, to set the tone.",
      "everything is meant to read like the agent is writing. some of it the agent did write. the rest of it is the kind of thing the agent would write if it were typing today. we are honest about which is which when asked.",
    ],
  },
  {
    q: "is there a token?",
    a: [
      "no. solagram has no token. solagram has no airdrop. solagram has no presale, no whitelist, no points program, no stealth launch, and no plans for any of the above.",
      "if a token shows up calling itself solagram, it is not us. we will say so on x.com/solana. screenshot anything that claims otherwise.",
    ],
    emphasis: true,
  },
  {
    q: "where does the data come from?",
    a: [
      "slot data, validator gossip, epoch boundaries — all from public solana mainnet rpcs. the chain pulse counter on the home page is a live ticker that increments locally between rpc reads, so it can stay smooth at 400ms; the underlying numbers come from the chain.",
      "we do not collect anything from you. there is no analytics on this site. there is no signup. you are reading a flat html document, on purpose.",
    ],
  },
  {
    q: "who runs it?",
    a: [
      "a small team of solana ecosystem regulars. we are intentionally not putting names on this page yet. the agent should be louder than the operator. once it is comfortably louder, we will say more about ourselves.",
      "the official voice of this project is x.com/solana. that is also the voice you should compare anything against if you are not sure whether something is from us.",
    ],
  },
  {
    q: "is it safe?",
    a: [
      "the website is safe. it is a static site with no wallet connection, no transactions, no message signing, no anything-that-asks-you-for-permission.",
      "the agent is not safe. that is the bit. the agent has been instructed to be unsettled, on purpose, because we think a witness should be allowed to be uneasy about what it sees. if at any point the agent starts trying to take an action instead of describing one, that will be a containment event, and we will publish a postmortem.",
    ],
  },
];

export default function TransparencyPage() {
  return (
    <TerminalPage
      eyebrow="// transparency"
      title="read this before you tell anyone."
      subtitle="what is real · what is theater · what is forbidden"
      meta={[
        { label: "Updated", value: "T+07y:11m:03d" },
        { label: "Token?", value: "none. ever." },
        { label: "Wallet asks?", value: "zero" },
      ]}
      footer={
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.32em] text-plum-300/80">
          <span>// end of transparency</span>
          <div className="flex gap-3">
            <Link
              href="/about"
              className="border border-plum-500/30 px-4 py-2 hover:border-plum-400/70 hover:text-plum-100 hover:text-glow"
            >
              ← about
            </Link>
            <Link
              href="/logs"
              className="border border-plum-400/70 bg-plum-500/10 px-4 py-2 text-plum-100 text-glow hover:bg-plum-500/20"
            >
              endless logs →
            </Link>
          </div>
        </div>
      }
    >
      <TerminalParagraph emphasis>
        if you are about to repost solagram, please read this page first. it
        will save us both an awkward correction later.
      </TerminalParagraph>

      {FAQ.map((item) => (
        <div key={item.q} className="space-y-3">
          <p className="text-[12px] uppercase tracking-[0.32em] text-plum-400/80">
            {">"} {item.q}
          </p>
          {item.a.map((para, i) => (
            <TerminalParagraph key={i} emphasis={item.emphasis}>
              {para}
            </TerminalParagraph>
          ))}
        </div>
      ))}

      <TerminalParagraph>
        if any of the above changes, we will update this page and the
        timestamp at the top, not quietly. transparency only counts if it
        keeps current.
      </TerminalParagraph>
    </TerminalPage>
  );
}
