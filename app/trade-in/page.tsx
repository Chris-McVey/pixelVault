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
  description: `Sell or trade games and hardware at ${site.name} — fair quotes, clear expectations, Ontario CA.`,
};

const pills = ["Cash offers", "Store credit bump", "Testing on the spot", "Imports welcomed"];

export default function TradeInPage() {
  return (
    <>
      <PageHero
        eyebrow="Buy / sell / trade"
        title={
          <>
            Trades that stay{" "}
            <span className="text-[var(--brand)]">legible &amp; fair</span>
          </>
        }
        subtitle="Bring bins or a single grail — we price against recent sold comps, condition in hand, and local demand. No algorithmic lowballs from behind a counter laptop."
        illustration={
          <div className="w-full max-w-[min(100%,320px)] drop-shadow-2xl drop-shadow-black/50">
            <IllustrationTradeBins className="h-auto w-full" />
            <p className="mt-3 text-center text-xs text-zinc-500">
              Drop your real floor shots into{" "}
              <code className="rounded bg-white/5 px-1 text-[var(--brand)]">
                public/images/store/
              </code>{" "}
              when you have them.
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
                Label repro carts, swapped shells, or aftermarket batteries — we&apos;ll adjust
                offers accordingly. Surprises after inspection don&apos;t help either side.
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
            Research for this site flagged published trade formulas as a trust accelerator — but
            posting exact percentages is a business decision. Here&apos;s the promise instead:
            we&apos;ll explain how we reached a number (comps, condition tier, local velocity) so you
            can decide in the moment.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dashed border-[var(--brand)]/30 bg-[var(--brand)]/5 p-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand)]">
                Credit bump
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Store credit offers typically edge above cash — spend it on the floor the same day.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[var(--surface)] p-6">
              <p className="text-sm font-semibold text-white">Large lots</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Buying collections? Call ahead if it&apos;s multiple bins — we&apos;ll carve out time so
                nothing gets a rushed skim.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black/30 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <DropCta
            title="Swing by with a tote"
            description="Check posted retail hours — Tuesdays we&apos;re closed for restocking."
            href="/contact"
            label="Hours & directions"
          />
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-6 px-4 sm:px-6">
          <Link href="/" className="text-sm font-medium text-zinc-500 hover:text-[var(--brand)]">
            ← Home
          </Link>
          <Link href="/repair" className="text-sm font-semibold text-[var(--brand)] hover:underline">
            Repair services →
          </Link>
        </div>
      </section>
    </>
  );
}
