import Link from "next/link";
import {
  formatEventRange,
  getNextFeaturedEvent,
} from "@/lib/events";
import { site } from "@/lib/site";

export default function HomePage() {
  const nextSwap = getNextFeaturedEvent();

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#151922] to-[var(--background)]">
        <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--brand)]">
            Inland Empire · Since {site.foundedYear}
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Retro games, repairs, and{" "}
            <span className="text-[var(--brand)]">community swap meets</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
            {site.tagline} Walk the aisles, trade fairly, and meet collectors
            who bring their own tables — it&apos;s core to who we are.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/events"
              className="inline-flex items-center justify-center rounded-lg bg-[var(--brand)] px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-amber-500/10 transition hover:bg-[var(--brand-dim)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]"
            >
              Swap meet &amp; events
            </Link>
            <Link
              href="/contact"
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

          {nextSwap ? (
            <div className="mt-10 max-w-xl rounded-xl border border-[var(--brand)]/35 bg-black/35 px-4 py-5 sm:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
                Next swap
              </p>
              <p className="mt-2 text-lg font-semibold text-white">{nextSwap.title}</p>
              <p className="mt-1 text-sm text-zinc-400">
                {formatEventRange(nextSwap.startIso, nextSwap.endIso)}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                {nextSwap.summary}
              </p>
              <Link
                href={`/events/${nextSwap.slug}`}
                className="mt-4 inline-flex text-sm font-semibold text-[var(--brand)] hover:underline"
              >
                Event details &amp; vendor notes →
              </Link>
            </div>
          ) : (
            <div className="mt-10 max-w-xl rounded-xl border border-white/10 bg-white/[0.03] px-4 py-5 sm:px-6">
              <p className="text-sm font-medium text-zinc-300">Next swap date</p>
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

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <article className="rounded-2xl border border-white/10 bg-[var(--surface)] p-6 shadow-xl shadow-black/20">
            <h2 className="text-lg font-semibold text-white">Vendor swap meets</h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              Community tables alongside the shop — buyers, sellers, and regulars
              in one room. Dates and vendor notes live on each event page.
            </p>
            <Link
              href="/events"
              className="mt-4 inline-block text-sm font-medium text-[var(--brand)] hover:underline"
            >
              View events →
            </Link>
          </article>
          <article className="rounded-2xl border border-white/10 bg-[var(--surface)] p-6 shadow-xl shadow-black/20">
            <h2 className="text-lg font-semibold text-white">Repair bench</h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              Dead console? Stick drift? Bring it in — we&apos;ll outline typical
              services and turnaround on the Repair page.
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
              Fair quotes and clear expectations — we&apos;ll publish how trades work
              so you know before you walk in.
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
            Pixel Vault has been the Inland Empire&apos;s home for retro games since{" "}
            {site.foundedYear}. Whether you&apos;re chasing a grail cart or your first
            CRT afternoon, you&apos;re welcome here.
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
