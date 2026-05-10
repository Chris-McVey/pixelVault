import type { Metadata } from "next";
import Link from "next/link";
import { DropCta } from "@/components/marketing/drop-cta";
import { GoogleReviewsStrip } from "@/components/marketing/google-quote-strip";
import { IllustrationAuthenticity } from "@/components/marketing/illustrations";
import { PageHero } from "@/components/marketing/page-hero";
import { PillRow } from "@/components/marketing/pill-row";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Authenticity",
  description: `How ${site.name} handles real vs reproduction games — inspection, labels, and making things right. Ontario, CA.`,
};

const pills = [
  "No bait-and-switch",
  "Labeled repros",
  "Trade-in honesty",
  "Case-by-case fixes",
];

export default function AuthenticityPage() {
  return (
    <>
      <PageHero
        eyebrow="Trust — collectors & first-timers"
        title={
          <>
            Real talk on{" "}
            <span className="text-[var(--brand)]">repros, labels &amp; boards</span>
          </>
        }
        subtitle="Retro has a forgery problem — we get it. This page is our stake in the ground: we don’t pass off reproductions as factory originals, we label the gray-area stuff honestly, and if we miss something, we own it."
        illustration={
          <div className="w-full max-w-[min(100%,320px)] drop-shadow-2xl drop-shadow-black/50">
            <IllustrationAuthenticity className="h-auto w-full" />
          </div>
        }
      >
        <PillRow items={pills} />
      </PageHero>

      <section className="border-t border-white/10 bg-black/25 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-8">
              <article className="rounded-2xl border border-white/10 bg-[var(--surface)] p-6 sm:p-8">
                <h2 className="text-xl font-semibold text-white">What we won&apos;t do</h2>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-400">
                  <li className="flex gap-3">
                    <span className="text-[var(--brand)]">✗</span>
                    Sell reproduction carts as if they were Nintendo-sealed factory originals.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[var(--brand)]">✗</span>
                    Hide photo-paper inserts or aftermarket shells on high-dollar boxed games.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[var(--brand)]">✗</span>
                    Bury repros in the same mental bucket as licensed re-releases without saying so.
                  </li>
                </ul>
                <p className="mt-6 text-sm text-zinc-500">
                  Low-dollar commons aren&apos;t the focus — fakes follow money. When value spikes, we
                  slow down and look closer.
                </p>
              </article>

              <article className="rounded-2xl border border-white/10 bg-[var(--surface)] p-6 sm:p-8">
                <h2 className="text-xl font-semibold text-white">Reproductions we do carry</h2>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  The community isn&apos;t anti-repro — it&apos;s anti-deception. If we offer a
                  legitimate reproduction (homebrew, replacement media, or an obvious tribute
                  cart), it ships with a clear{" "}
                  <strong className="font-semibold text-zinc-300">REPRO</strong> signal — sticker
                  or marking on the cart itself, separate shelf placement, price well under OEM comps
                  — never dumped in the &quot;looks OEM&quot; case.
                </p>
              </article>
            </div>
            <GoogleReviewsStrip />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-white">How we inspect (high level)</h2>
          <p className="mt-3 max-w-3xl text-sm text-zinc-500">
            We don&apos;t publish a counterfeiter&apos;s playbook — but you should know we take
            labels, screws, board shots on high-stakes items, and save/battery context seriously when
            the money demands it.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-[var(--brand)]/20 bg-gradient-to-b from-[var(--surface)] to-zinc-950 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--brand)]">
                Labels &amp; plastic
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Font edges, gloss level, centering — quick signals before we even open shells.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[var(--surface)] p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Boards &amp; stamps
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                When price warrants, boards tell stories — especially imports and Pokémon-era carts.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[var(--surface)] p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Boxes &amp; inserts
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Photo-paper cover inserts and flap colors get daylight — ask us to pop a box with
                you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black/30 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-2xl font-semibold text-white">If something slips through</h2>
              <p className="mt-4 leading-relaxed text-zinc-400">
                If you bought something we believed was genuine and you show us why it isn&apos;t,
                come back with receipt proof and the item — we&apos;ll make it right in a way that
                matches the situation: usually bridging the gap between what you paid and fair value
                for what it actually is, or discussing a return when that&apos;s realistic. Edge cases
                (&quot;years later&quot;, wild price swings) get handled case-by-case — we&apos;re not
                pretending every scenario fits one boilerplate paragraph.
              </p>
              <p className="mt-4 text-sm text-zinc-500">
                Concrete remediation beats vague &quot;100% authentic&quot; slogans — collectors told us
                that matters more than marketing fluff.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white">When you sell to us</h2>
              <p className="mt-4 leading-relaxed text-zinc-400">
                Same scrutiny in reverse: if your boxed copy has a repro insert you didn&apos;t know
                about, we&apos;ll tell you before we lock a number — and price off reality, not wishful
                thinking. See{" "}
                <Link href="/trade-in" className="font-medium text-[var(--brand)] hover:underline">
                  Trade-in
                </Link>{" "}
                for how quotes work on the floor.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <DropCta
            title="Bring questions before you list on eBay"
            description="Serious locals use us as a gut-check — especially before shipping Pokémon stacks or big-box imports."
            href="/contact"
            label="Visit or call"
          />
        </div>
      </section>

      <section className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-3xl flex-wrap justify-between gap-4 px-4 sm:px-6">
          <Link href="/" className="text-sm text-zinc-500 hover:text-[var(--brand)]">
            ← Home
          </Link>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/trade-in" className="font-medium text-[var(--brand)] hover:underline">
              Trade-in →
            </Link>
            <Link href="/repair" className="text-zinc-400 hover:text-[var(--brand)]">
              Repair →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
