import type { Metadata } from "next";
import Link from "next/link";
import { DropCta } from "@/components/marketing/drop-cta";
import { GoogleReviewsStrip } from "@/components/marketing/google-quote-strip";
import { IllustrationRepairBench } from "@/components/marketing/illustrations";
import { PageHero } from "@/components/marketing/page-hero";
import { PillRow } from "@/components/marketing/pill-row";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Repair",
  description: `Console & controller repair at ${site.name} — honest diagnostics, saves-first mindset, Ontario CA.`,
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
        eyebrow="Bench — Ontario, CA"
        title={
          <>
            Repair that respects{" "}
            <span className="text-[var(--brand)]">your saves &amp; shells</span>
          </>
        }
        subtitle="Dead HDMI on a Dreamcast? Wii drive buzz? Pro Controller drifting into lava pits? We troubleshoot like collectors — quote before work, explain risks before touching EEPROM."
        illustration={
          <div className="w-full max-w-[min(100%,320px)] drop-shadow-2xl drop-shadow-black/50">
            <IllustrationRepairBench className="h-auto w-full" />
            <p className="mt-3 text-center text-xs text-zinc-500">
              Stylized illustration — drop bench photos into{" "}
              <code className="rounded bg-white/5 px-1 text-[var(--brand)]">
                /images/store/
              </code>{" "}
              when ready.
            </p>
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
              <li>Bring the console or controller — cables help if the fault is power/video.</li>
              <li>We reproduce the issue on the bench and outline options + price bands.</li>
              <li>You approve before we replace parts or reflow boards.</li>
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
                Whenever work risks storage — Wii NAND, handheld flash — we&apos;ll spell it out before
                touching solder. If we can&apos;t guarantee a save, we&apos;ll say so upfront.
              </p>
              <p className="mt-4 leading-relaxed text-zinc-400">
                Competitive scans showed collectors reward shops that speak plainly about risk.
                No geek-shaming; just honest timelines.
              </p>
            </div>
            <DropCta
              title="Need a queue time?"
              description="Busy Saturdays happen — call before you haul a CRT across county lines."
              href="/contact"
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
            Swap meet weekends →
          </Link>
        </div>
      </section>
    </>
  );
}
