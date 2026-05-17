import type { Metadata } from "next";
import Link from "next/link";
import {
  formatEventRange,
  getPastEvents,
  getUpcomingEvents,
} from "@/lib/events";

export const metadata: Metadata = {
  title: "Buy, sell, trade events",
  description:
    "Buy, sell, trade event dates, vendor notes, and past events. Pixel Vault Games, Ontario, CA.",
};

export default function EventsPage() {
  const upcoming = getUpcomingEvents();
  const past = getPastEvents();

  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight text-white">
        Buy, sell, trade events
      </h1>
      <p className="mt-6 leading-relaxed text-zinc-400">
        Buy, sell, trade days run alongside the shop. Collectors, vendors, and families with bins and stories.
        Each date has its own page: hours, load-in, what to expect when you walk in.
      </p>
      <p className="mt-4 leading-relaxed text-zinc-400">
        Flash announcements still hit{" "}
        <a
          href="https://www.instagram.com/pixelvaultgames"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[var(--brand)] hover:underline"
        >
          @pixelvaultgames
        </a>{" "}
        first. Follow there for same-day changes.
      </p>

      <section className="mt-12">
        <h2 className="text-lg font-semibold text-white">Upcoming</h2>
        {upcoming.length === 0 ? (
          <p className="mt-4 text-zinc-400">
            No upcoming events listed yet. Check Instagram for the next date.
          </p>
        ) : (
          <ul className="mt-6 space-y-4">
            {upcoming.map((ev) => (
              <li key={ev.slug}>
                <Link
                  href={`/events/${ev.slug}`}
                  className="block rounded-2xl border border-white/10 bg-[var(--surface)] p-5 transition hover:border-[var(--brand)]/40"
                >
                  <p className="text-xs uppercase tracking-wider text-zinc-500">
                    {formatEventRange(ev.startIso, ev.endIso)}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">{ev.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {ev.summary}
                  </p>
                  <span className="mt-3 inline-block text-sm font-medium text-[var(--brand)]">
                    Details →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="mt-14 border-t border-white/10 pt-12">
        <h2 className="text-lg font-semibold text-white">Archive</h2>
        <p className="mt-2 text-sm text-zinc-500">
          Past dates stay on the site so vendors and regulars can link back to load-in notes.
        </p>
        {past.length === 0 ? (
          <p className="mt-4 text-zinc-400">No archived events yet.</p>
        ) : (
          <ul className="mt-6 space-y-3">
            {past.map((ev) => (
              <li key={ev.slug} className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <Link
                  href={`/events/${ev.slug}`}
                  className="font-medium text-[var(--brand)] hover:underline"
                >
                  {ev.title}
                </Link>
                <span className="text-sm text-zinc-500">
                  {formatEventRange(ev.startIso, ev.endIso)}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <p className="mt-12">
        <Link href="/" className="text-sm font-medium text-[var(--brand)] hover:underline">
          ← Back home
        </Link>
      </p>
    </div>
  );
}
