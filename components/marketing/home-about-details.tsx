import Link from "next/link";
import { DropCta } from "@/components/marketing/drop-cta";
import { site } from "@/lib/site";

/** Story continuation + milestones — below the “Since 2014” hero on the About page. */
export function HomeAboutDetails() {
  return (
    <>
      <section className="border-t border-white/10 bg-black/25 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-white">Why we lead with buy, sell, trade events</h2>
                <p className="mt-4 leading-relaxed text-zinc-400">
                  Plenty of shops list inventory online. What we have is the room: weekends when
                  locals rent tables next to the aisles. People drive in from Riverside, Rancho,
                  Claremont, and farther out because this is still a place to meet up.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[var(--surface)] p-6">
                <h3 className="text-lg font-semibold text-white">Questions welcome</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  Ask about labels, imports, or what a fair trade looks like. We answer at the
                  counter like people who actually play this stuff. Stop in and say hi.
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
                    <p className="text-sm text-zinc-400">
                      Opened on Holt. Cartridges before algorithms.
                    </p>
                  </li>
                  <li>
                    <p className="text-sm font-semibold text-white">Today</p>
                    <p className="text-sm text-zinc-400">
                      Repair, buy/sell/trade, hosted events. A shop you visit, not a catalog.
                    </p>
                  </li>
                </ul>
              </div>
              <DropCta
                title="Come meet the room"
                description="Buy, sell, trade weekends feel different than a quiet Tuesday. Check the next date."
                href="/events"
                label="Events calendar"
              />
            </aside>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">More photos</p>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            We are adding more team and floor photos over time. Scroll up for games in case,
            consoles on display, and the wide showroom shot.
          </p>
          <a
            href="#visit"
            className="mt-8 inline-block text-sm font-semibold text-[var(--brand)] hover:underline"
          >
            Visit &amp; hours →
          </a>
        </div>
      </section>

      <section className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-3xl flex-wrap justify-between gap-4 px-4 sm:px-6">
          <a href="#story" className="text-sm text-zinc-500 hover:text-[var(--brand)]">
            Our story ↑
          </a>
          <Link href="/trade-in" className="text-sm font-medium text-[var(--brand)] hover:underline">
            Trade-in policy →
          </Link>
        </div>
      </section>
    </>
  );
}
