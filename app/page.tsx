import Link from "next/link";
import { StoreSpotlight } from "@/components/marketing/store-spotlight";
import {
  formatEventRange,
  getNextFeaturedEvent,
} from "@/lib/events";
import { site } from "@/lib/site";

export default function HomePage() {
  const nextEvent = getNextFeaturedEvent();

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#151922] to-[var(--background)]">
        <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--brand)]">
            Inland Empire, since {site.foundedYear}
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Retro games, repairs, and{" "}
            <span className="text-[var(--brand)]">buy, sell, trade events</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
            {site.tagline} Walk the floor, trade fair, and come out for buy, sell, trade
            events when locals set up their own tables.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/events"
              className="inline-flex items-center justify-center rounded-lg bg-[var(--brand)] px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-amber-500/10 transition hover:bg-[var(--brand-dim)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]"
            >
              Buy, sell, trade events
            </Link>
            <Link
              href="/about#visit"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-[var(--brand)]/50 hover:text-[var(--brand)]"
            >
              Hours &amp; directions
            </Link>
            <Link
              href="/repair"
              className="inline-flex items-center justify-center rounded-lg border border-transparent px-5 py-3 text-sm font-medium text-zinc-400 underline-offset-4 hover:text-white hover:underline"
            >
              Console &amp; controller repair
            </Link>
          </div>

          {nextEvent ? (
            <div className="mt-10 max-w-xl rounded-xl border border-[var(--brand)]/35 bg-black/35 px-4 py-5 sm:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
                Next event
              </p>
              <p className="mt-2 text-lg font-semibold text-white">{nextEvent.title}</p>
              <p className="mt-1 text-sm text-zinc-400">
                {formatEventRange(nextEvent.startIso, nextEvent.endIso)}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                {nextEvent.summary}
              </p>
              <Link
                href={`/events/${nextEvent.slug}`}
                className="mt-4 inline-flex text-sm font-semibold text-[var(--brand)] hover:underline"
              >
                Event details &amp; vendor notes →
              </Link>
            </div>
          ) : (
            <div className="mt-10 max-w-xl rounded-xl border border-white/10 bg-white/[0.03] px-4 py-5 sm:px-6">
              <p className="text-sm font-medium text-zinc-300">Next event date</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                Dates post here as soon as they&apos;re locked. Get announcements
                first on{" "}
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[var(--brand)] hover:underline"
                >
                  Instagram
                </a>
                .
              </p>
            </div>
          )}
        </div>
      </section>

      <StoreSpotlight />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
            <article className="rounded-2xl border border-white/10 bg-[var(--surface)] p-6 shadow-xl shadow-black/20">
            <h2 className="text-lg font-semibold text-white">Buy, sell, trade events</h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              Vendor tables right on the retail floor. Buyers, sellers, and regulars in one
              room. Each event page has dates and load-in info.
            </p>
            <Link
              href="/events"
              className="mt-4 inline-block text-sm font-medium text-[var(--brand)] hover:underline"
            >
              View events →
            </Link>
          </article>
          <article className="rounded-2xl border border-white/10 bg-[var(--surface)] p-6 shadow-xl shadow-black/20">
            <h2 className="text-lg font-semibold text-white">Repairs</h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              Have a dead console? Broken retro controller or a modern controller with stick
              drift? Bring it in, chances are we can fix it!
            </p>
            <Link
              href="/repair"
              className="mt-4 inline-block text-sm font-medium text-[var(--brand)] hover:underline"
            >
              Repair overview →
            </Link>
          </article>
          <article className="rounded-2xl border border-white/10 bg-[var(--surface)] p-6 shadow-xl shadow-black/20">
            <h2 className="text-lg font-semibold text-white">Buy / sell / trade</h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              Cash or store credit. We price off what things actually sell for, what shape
              yours is in, and what people are buying here week to week.
            </p>
            <Link
              href="/trade-in"
              className="mt-4 inline-block text-sm font-medium text-[var(--brand)] hover:underline"
            >
              Trade-in policy →
            </Link>
          </article>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black/20 py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
            Family-owned
          </p>
          <p className="mt-4 text-lg leading-relaxed text-zinc-300">
            {site.name} has been the Inland Empire&apos;s favorite spot for all things retro
            games since {site.foundedYear}. We are a family owned and family friendly shop that
            strives to make you feel welcome, comfortable, and nostalgiac for the good old days.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-block text-sm font-semibold text-[var(--brand)] hover:underline"
          >
            Our story →
          </Link>
        </div>
      </section>
    </>
  );
}
