import type { Metadata } from "next";
import Link from "next/link";
import { DropCta } from "@/components/marketing/drop-cta";
import { GoogleReviewsStrip } from "@/components/marketing/google-quote-strip";
import { IllustrationRepair } from "@/components/marketing/illustrations";
import { PageHero } from "@/components/marketing/page-hero";
import { PillRow } from "@/components/marketing/pill-row";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Repair",
  description: `Console and controller repair at ${site.name}. Honest diagnostics in Ontario, CA.`,
};

const pills = [
  "Diagnostics first",
  "HDMI / power issues",
  "Stick drift",
  "Battery swaps",
  "Disc trays",
];

export default function RepairPage() {
  return (
    <>
      <PageHero
        eyebrow="Repairs, Ontario"
        title={
          <>
            Console &amp; controller{" "}
            <span className="text-[var(--brand)]">repair</span>
          </>
        }
        subtitle="Have a dead console? Broken retro controller or a modern controller with stick drift? Bring it in, chances are we can fix it!"
        illustration={
          <div className="w-full max-w-[min(100%,320px)] drop-shadow-2xl drop-shadow-black/50">
            <IllustrationRepair className="h-auto w-full" />
          </div>
        }
      >
        <PillRow items={pills} />
      </PageHero>

      <section className="border-t border-white/10 bg-black/25 py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:gap-10">
          <article className="rounded-2xl border border-white/10 bg-[var(--surface)] p-6 shadow-xl shadow-black/25">
            <h2 className="text-lg font-semibold text-white">How it works</h2>
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-zinc-400">
              <li>Bring the console or controller. Cables help if it is a power or video issue.</li>
              <li>We try to repeat the problem and give you options and a price range.</li>
              <li>Nothing gets replaced or reflowed until you say go.</li>
            </ol>
          </article>
          <article className="rounded-2xl border border-white/10 bg-[var(--surface)] p-6 shadow-xl shadow-black/25">
            <h2 className="text-lg font-semibold text-white">What we see often</h2>
            <ul className="mt-4 space-y-2 text-sm text-zinc-400">
              <li className="flex gap-2">
                <span className="text-[var(--brand)]">→</span>
                PS5 / Xbox Series stuck lasers &amp; HDMI pads
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--brand)]">→</span>
                GameCube / Wii drive mechanics &amp; spindle wear
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--brand)]">→</span>
                Handheld batteries &amp; hinge fatigue (DS / PSP family)
              </li>
            </ul>
          </article>
          <GoogleReviewsStrip />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-2xl font-semibold text-white">Data &amp; saves</h2>
              <p className="mt-4 leading-relaxed text-zinc-400">
                If the job might touch storage (Wii NAND, handheld flash, that kind of thing), we say
                so before solder. If we cannot promise your save, we tell you that upfront.
              </p>
              <p className="mt-4 leading-relaxed text-zinc-400">
                Plain talk, realistic timelines, no attitude about what you do or do not know.
              </p>
            </div>
            <DropCta
              title="Want a wait time?"
              description="Saturdays get packed. Worth a quick call before you drive a CRT across the county."
              href="/about#visit"
              label="Call or get directions"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-gradient-to-b from-transparent to-black/30 py-14">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-6 px-4 sm:px-6">
          <p className="text-sm text-zinc-500">
            <Link href="/" className="text-[var(--brand)] hover:underline">
              ← Home
            </Link>
            <span className="mx-2 text-zinc-700">·</span>
            <Link href="/trade-in" className="hover:text-[var(--brand)]">
              Trade-ins
            </Link>
          </p>
          <Link
            href="/events"
            className="text-sm font-semibold text-[var(--brand)] hover:underline"
          >
            Buy, sell, trade events →
          </Link>
        </div>
      </section>
    </>
  );
}
