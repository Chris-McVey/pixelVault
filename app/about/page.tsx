import type { Metadata } from "next";
import Link from "next/link";
import { DropCta } from "@/components/marketing/drop-cta";
import { IllustrationCommunity } from "@/components/marketing/illustrations";
import { PageHero } from "@/components/marketing/page-hero";
import { PillRow } from "@/components/marketing/pill-row";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `${site.name} — family-owned retro games in Ontario, CA since ${site.foundedYear}.`,
};

const pills = ["Family-owned", "Swap hosts", "Collectors welcome", "Kids & carts"];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={`Since ${site.foundedYear}`}
        title={
          <>
            Anti-corporate vibes,{" "}
            <span className="text-[var(--brand)]">pro-community energy</span>
          </>
        }
        subtitle={`${site.name} is a family-run shop on Holt — not a venture-backed flip house. We bias toward collector literacy: label your repro carts, celebrate weird imports, and keep trades respectful.`}
        illustration={
          <div className="w-full max-w-[min(100%,320px)] drop-shadow-2xl drop-shadow-black/50">
            <IllustrationCommunity className="h-auto w-full" />
          </div>
        }
      >
        <PillRow items={pills} />
      </PageHero>

      <section className="border-t border-white/10 bg-black/25 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-white">Why we lead with swap meets</h2>
                <p className="mt-4 leading-relaxed text-zinc-400">
                  Anyone can list inventory — fewer shops host recurring rooms where locals rent tables
                  next to the aisles. That signal matters to collectors driving from Riverside,
                  Rancho, or Claremont: proof that the hobby still gathers IRL.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[var(--surface)] p-6">
                <h3 className="text-lg font-semibold text-white">Voice &amp; tone</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  Owner-led shops score trust when they sound human — not brochure-clean. We&apos;ll
                  keep bios candid once photos land; until then, swing through in person and judge
                  for yourself.
                </p>
              </div>
            </div>
            <aside className="space-y-6">
              <div className="rounded-2xl border border-[var(--brand)]/20 bg-gradient-to-b from-[var(--surface)] to-zinc-950 p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Milestones
                </p>
                <ul className="mt-4 space-y-4 border-l border-[var(--brand)]/40 pl-5">
                  <li>
                    <p className="text-sm font-semibold text-[var(--brand)]">{site.foundedYear}</p>
                    <p className="text-sm text-zinc-400">Opened on Holt — cartridges before algorithms.</p>
                  </li>
                  <li>
                    <p className="text-sm font-semibold text-white">Today</p>
                    <p className="text-sm text-zinc-400">
                      Repair bench + buy/sell/trade + hosted swaps — destination, not catalog.
                    </p>
                  </li>
                </ul>
              </div>
              <DropCta
                title="Come meet the room"
                description="Swap weekends feel different than weekday aisles — check the next date."
                href="/events"
                label="Events calendar"
              />
            </aside>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Photos soon</p>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            Drop team shots + floor photography into{" "}
            <code className="rounded bg-white/5 px-2 py-0.5 text-sm text-[var(--brand)]">
              public/images/store/
            </code>{" "}
            — we&apos;ll wire a gallery once assets arrive (legacy Home shots: games-in-case,
            consoles &amp; controllers, character display).
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block text-sm font-semibold text-[var(--brand)] hover:underline"
          >
            Visit us →
          </Link>
        </div>
      </section>

      <section className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-3xl flex-wrap justify-between gap-4 px-4 sm:px-6">
          <Link href="/" className="text-sm text-zinc-500 hover:text-[var(--brand)]">
            ← Home
          </Link>
          <Link href="/trade-in" className="text-sm font-medium text-[var(--brand)] hover:underline">
            Trade-in policy →
          </Link>
        </div>
      </section>
    </>
  );
}
