import type { Metadata } from "next";
import Link from "next/link";
import { formatStreetAddress, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Visit",
  description: `${site.name} — ${site.address.city}, ${site.address.region}. Hours, map, phone, parking.`,
};

export default function ContactPage() {
  const mapsQuery = encodeURIComponent(formatStreetAddress());
  const embedSrc = `https://maps.google.com/maps?q=${mapsQuery}&output=embed`;

  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight text-white">
        Visit us
      </h1>
      <p className="mt-6 leading-relaxed text-zinc-400">
        Call ahead for repair bench queue times or trade quotes. Posted hours match
        how we operate the retail floor — confirm holiday exceptions on{" "}
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[var(--brand)] hover:underline"
        >
          Google Maps
        </a>
        .
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="rounded-2xl border border-white/10 bg-[var(--surface)] p-6">
            <p className="text-sm font-medium uppercase tracking-wider text-zinc-500">
              Address
            </p>
            <p className="mt-2 text-white">
              {site.address.street}
              <br />
              {site.address.city}, {site.address.region} {site.address.postalCode}
            </p>
            <p className="mt-6 text-sm font-medium uppercase tracking-wider text-zinc-500">
              Phone
            </p>
            <p className="mt-2">
              <a
                href={`tel:${site.phoneTel}`}
                className="text-lg font-semibold text-[var(--brand)] hover:underline"
              >
                {site.phoneDisplay}
              </a>
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[var(--surface)] p-6">
            <p className="text-sm font-medium uppercase tracking-wider text-zinc-500">
              Store hours
            </p>
            <ul className="mt-3 space-y-2 text-zinc-300">
              {site.hours.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-zinc-500">
              Times shown in Pacific ({site.hours.timeZone.replace("_", " ")}).
              Tuesday we&apos;re closed for restocking — swaps and vendor load-ins
              still publish on their event pages when scheduled.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[var(--surface)] p-6">
            <p className="text-sm font-medium uppercase tracking-wider text-zinc-500">
              Parking
            </p>
            <p className="mt-2 leading-relaxed text-zinc-400">{site.parkingNote}</p>
          </div>
        </div>

        <div className="min-h-[280px] overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-xl shadow-black/30">
          <iframe
            title={`Map of ${site.name}`}
            src={embedSrc}
            className="h-[320px] w-full border-0 sm:h-full sm:min-h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <p className="mt-10">
        <Link
          href="/"
          className="text-sm font-medium text-zinc-500 hover:text-[var(--brand)]"
        >
          ← Back home
        </Link>
      </p>
    </div>
  );
}
