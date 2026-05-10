import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EventJsonLd } from "@/components/event-json-ld";
import {
  events,
  formatEventRange,
  getEventBySlug,
} from "@/lib/events";
import { formatStreetAddress, site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ev = getEventBySlug(slug);
  if (!ev) {
    return { title: "Event" };
  }
  return {
    title: ev.title,
    description: ev.summary,
    openGraph: {
      title: ev.title,
      description: ev.summary,
      type: "website",
    },
  };
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const ev = getEventBySlug(slug);
  if (!ev) {
    notFound();
  }

  const paragraphs = ev.description.split(/\n\n+/);

  return (
    <>
      <EventJsonLd event={ev} />
      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--brand)]">
          Swap meet
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white">
          {ev.title}
        </h1>
        <p className="mt-4 text-lg text-zinc-400">
          {formatEventRange(ev.startIso, ev.endIso)}
        </p>
        <p className="mt-2 text-sm text-zinc-500">{formatStreetAddress()}</p>

        <div className="mt-10 space-y-5 text-base leading-relaxed text-zinc-300">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <VendorFaq tips={ev.vendorTips} />

        <div className="mt-12 rounded-2xl border border-white/10 bg-[var(--surface)] p-6">
          <p className="text-sm font-medium uppercase tracking-wider text-zinc-500">
            Need the shop floor?
          </p>
          <p className="mt-2 text-zinc-400">
            Retail hours apply separately from swap floor hours — see{" "}
            <Link href="/contact" className="font-medium text-[var(--brand)] hover:underline">
              Visit
            </Link>{" "}
            for Tuesday closures and Sunday shortened hours.
          </p>
        </div>

        <nav className="mt-12 flex flex-wrap gap-6 text-sm">
          <Link href="/events" className="font-medium text-[var(--brand)] hover:underline">
            ← All events
          </Link>
          <Link href="/" className="text-zinc-500 hover:text-[var(--brand)]">
            Home
          </Link>
        </nav>
      </article>
    </>
  );
}

function VendorFaq({ tips }: { tips: string[] }) {
  if (tips.length === 0) return null;
  return (
    <section className="mt-12 border-t border-white/10 pt-10">
      <h2 className="text-lg font-semibold text-white">Vendor &amp; attendee notes</h2>
      <ul className="mt-4 list-inside list-disc space-y-2 text-zinc-400 marker:text-[var(--brand)]">
        {tips.map((tip) => (
          <li key={tip}>{tip}</li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-zinc-500">
        Questions day-of? Stop by the counter inside {site.shortName} or DM{" "}
        <a
          href={site.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--brand)] hover:underline"
        >
          Instagram
        </a>
        .
      </p>
    </section>
  );
}
