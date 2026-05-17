import type { Metadata } from "next";
import Link from "next/link";
import { DropCta } from "@/components/marketing/drop-cta";
import { GoogleReviewsStrip } from "@/components/marketing/google-quote-strip";
import { IllustrationTradeBins } from "@/components/marketing/illustrations";
import { PageHero } from "@/components/marketing/page-hero";
import { PillRow } from "@/components/marketing/pill-row";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Trade-in",
  description: `Sell or trade games and hardware at ${site.name}. Fair quotes in Ontario, CA.`,
};

const pills = ["Cash offers", "Store credit bump", "Testing on the spot", "Imports welcomed"];

export default function TradeInPage() {
  return (
    <>
      <PageHero
        eyebrow="Buy / sell / trade"
        title={
          <>
            Straightforward{" "}
            <span className="text-[var(--brand)]">buy and trade</span>
          </>
        }
        subtitle="One cart or a whole tote. We look at recent sold prices, what shape it is in, and what people are actually buying here. No mystery spreadsheet behind the counter."
        illustration={
          <div className="w-full max-w-[min(100%,320px)] drop-shadow-2xl drop-shadow-black/50">
            <IllustrationTradeBins className="h-auto w-full" />
            <p className="mt-3 text-center text-xs text-zinc-500">
              Floor photos coming soon.
            </p>
          </div>
        }
      >
        <PillRow items={pills} />
      </PageHero>

      <section className="border-t border-white/10 bg-black/25 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-3">
            <article className="rounded-2xl border border-white/10 bg-[var(--surface)] p-6">
              <h2 className="text-lg font-semibold text-white">What moves fastest</h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                First-party Nintendo / Sony / Xbox, complete-in-box retro, handhelds with good
                batteries, and weird import oddities with player demand.
              </p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-[var(--surface)] p-6">
              <h2 className="text-lg font-semibold text-white">Condition honesty</h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                Tell us about repro labels, swapped shells, or aftermarket batteries and we will
                price accordingly. Surprises after we open the box do not help anyone.
              </p>
            </article>
            <GoogleReviewsStrip />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-white">Quote transparency</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-zinc-400">
            We do not post a fixed percentage chart. Prices move too fast for that to stay honest.
            What we will do is walk you through the number: recent sales, what we see in hand, and
            what is moving on the floor right now. You decide from there.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-500">
            Every quote includes a straight look at labels and repros when the item warrants it.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dashed border-[var(--brand)]/30 bg-[var(--brand)]/5 p-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand)]">
                Credit bump
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Store credit usually beats cash a little. Spend it in the shop the same day.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[var(--surface)] p-6">
              <p className="text-sm font-semibold text-white">Large lots</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Selling a big collection? Call if it is more than a couple bins. We will block time
                so nobody has to rush through it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black/30 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <DropCta
            title="Swing by with a tote"
            description="Check hours before you come. We are closed Tuesdays for restocking."
            href="/about#visit"
            label="Hours & directions"
          />
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-6 px-4 sm:px-6">
          <Link href="/" className="text-sm font-medium text-zinc-500 hover:text-[var(--brand)]">
            ← Home
          </Link>
          <div className="flex flex-wrap gap-6">
            <Link href="/repair" className="text-sm font-semibold text-[var(--brand)] hover:underline">
              Repair services →
            </Link>
            <Link href="/events" className="text-sm font-semibold text-zinc-400 hover:text-[var(--brand)]">
              Events →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
