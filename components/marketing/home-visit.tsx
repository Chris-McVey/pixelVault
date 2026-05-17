import Image from "next/image";
import storeExterior from "@/assets/storeExterior.jpeg";
import { formatStreetAddress, site } from "@/lib/site";

/** Storefront photo + hours — top of the merged visit block on the homepage. */
export function HomeVisitStorefront() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:py-14">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-10">
        <div className="relative aspect-[4/3] min-h-[200px] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-xl shadow-black/30">
          <Image
            src={storeExterior}
            alt={`${site.name} storefront on Holt Boulevard`}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
            suppressHydrationWarning
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--brand)]">
            Visit
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Store hours
          </h2>
          <ul className="mt-6 space-y-2.5 text-base font-medium text-zinc-100">
            {site.hours.lines.map((line) => (
              <li key={line} className="border-b border-white/5 pb-2.5 last:border-0 last:pb-0">
                {line}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs leading-relaxed text-zinc-500">
            Times in Pacific ({site.hours.timeZone.replace("_", " ")}). Tuesday we&apos;re closed
            for restocking. Event pages have load-in times for vendors.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            <a
              href={`tel:${site.phoneTel}`}
              className="text-lg font-semibold text-[var(--brand)] transition hover:underline"
            >
              {site.phoneDisplay}
            </a>
            <a
              href="#location"
              className="text-sm font-semibold text-zinc-300 transition hover:text-[var(--brand)]"
            >
              Address, map &amp; parking →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Address, parking, and embedded map — sits below storefront + hours on the homepage. */
export function HomeVisitLocation() {
  const mapsQuery = encodeURIComponent(formatStreetAddress());
  const embedSrc = `https://maps.google.com/maps?q=${mapsQuery}&output=embed`;

  return (
    <div
      id="location"
      className="border-t border-white/10 bg-black/15 px-4 py-12 sm:px-6 lg:py-14"
    >
      <div className="mx-auto max-w-6xl">
        <p className="max-w-2xl text-base leading-relaxed text-zinc-400">
          Call ahead for repair wait times or trade quotes. Posted hours match how we run
          the retail floor. Confirm holiday hours on{" "}
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

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-8">
            <div className="rounded-2xl border border-white/10 bg-[var(--surface)] p-6">
              <p className="text-sm font-medium uppercase tracking-wider text-zinc-500">Address</p>
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
              <p className="text-sm font-medium uppercase tracking-wider text-zinc-500">Parking</p>
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
      </div>
    </div>
  );
}
