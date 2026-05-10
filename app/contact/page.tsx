import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Visit",
  description: `Visit ${site.name} — ${site.address.city}, ${site.address.region}.`,
};

export default function ContactPage() {
  const mapsQuery = encodeURIComponent(
    `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`,
  );

  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight text-white">
        Visit us
      </h1>
      <p className="mt-6 leading-relaxed text-zinc-400">
        Confirm hours on{" "}
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[var(--brand)] hover:underline"
        >
          Google Maps
        </a>{" "}
        or call ahead — posted hours will sync here once finalized (legacy site
        had conflicting Tuesday notes).
      </p>
      <div className="mt-8 rounded-2xl border border-white/10 bg-[var(--surface)] p-6">
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
      <p className="mt-10">
        <Link href="/" className="text-sm font-medium text-zinc-500 hover:text-[var(--brand)]">
          ← Back home
        </Link>
      </p>
    </div>
  );
}
