import Link from 'next/link';
import { site } from '@/lib/site';

export function SiteFooter() {
  const mapsQuery = encodeURIComponent(
    `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`
  );

  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="font-semibold text-white">{site.name}</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              {site.address.street}
              <br />
              {site.address.city}, {site.address.region}{' '}
              {site.address.postalCode}
            </p>
            <p className="mt-3 text-sm text-zinc-400">
              <a
                href={`tel:${site.phoneTel}`}
                className="font-medium text-[var(--brand)] hover:underline"
              >
                {site.phoneDisplay}
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm text-zinc-400">
            <span className="font-medium text-zinc-300">Community</span>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--brand)]"
              >
                Instagram
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--brand)]"
              >
                Facebook
              </a>
              <a
                href={site.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--brand)]"
              >
                YouTube
              </a>
              <Link href="/events" className="hover:text-[var(--brand)]">
                Swap meets
              </Link>
            </div>
            <a
              className="mt-1 w-fit text-sm text-zinc-500 hover:text-[var(--brand)]"
              href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
        <p className="mt-10 border-t border-white/5 pt-6 text-xs text-zinc-500">
          ©{" "}
          <span suppressHydrationWarning>{new Date().getFullYear()}</span>{" "}
          {site.name}. Family-owned retro games and events in the Inland Empire.
        </p>
      </div>
    </footer>
  );
}
