/**
 * Swap meets & store-hosted events. Edit this file to add dates — one slug per occurrence.
 * Optional later: load from Markdown under /content/events with the same shape.
 */

export type ShopEvent = {
  slug: string;
  title: string;
  /** Short line for cards / homepage */
  summary: string;
  /** Longer body for the detail page (plain text paragraphs, \\n\\n separated) */
  description: string;
  /** ISO 8601 with offset (America/Los_Angeles) */
  startIso: string;
  endIso: string;
  /** Vendor-facing bullets shown on detail page */
  vendorTips: string[];
};

export const events: ShopEvent[] = [
  {
    slug: "vault-swap-2026-05-17",
    title: "Vault Swap — May",
    summary: "Community tables, buyers, and sellers — one room, zero attitude.",
    description:
      "Our signature indoor swap meet: private sellers line the floor with bins and displays while the shop stays open for trades and impulse grabs. Bring cash, bring a wagon, and leave time to dig.\n\nFree to browse. Table rentals are first-come online announcement — watch Instagram for the signup drop.",
    startIso: "2026-05-17T10:00:00-07:00",
    endIso: "2026-05-17T16:00:00-07:00",
    vendorTips: [
      "Arrive up to 30 minutes early if you purchased a vendor slot — staff will direct load-in.",
      "Power strips are limited; battery handhelds and complete-in-box welcome.",
      "Children welcome with an adult; crowded aisles — wagons beat shoulder bags.",
    ],
  },
  {
    slug: "vault-swap-2026-06-14",
    title: "Vault Swap — June",
    summary: "Summer session — same energy, longer daylight.",
    description:
      "June swap: more daylight for late shoppers and a few extra tables when demand allows. Pixel Vault stays open for purchases, repair drop-off questions, and honest trade quotes.\n\nFollow @pixelvaultgames for vendor announcements and any schedule tweaks.",
    startIso: "2026-06-14T10:00:00-07:00",
    endIso: "2026-06-14T16:00:00-07:00",
    vendorTips: [
      "Hydrate — inland heat sneaks up even indoors.",
      "Label imports or repro carts clearly; collectors appreciate transparency.",
      "Need a repair quote? Bring the console to the counter during swap hours.",
    ],
  },
  {
    slug: "vault-swap-2026-04-26",
    title: "Vault Swap — April (past)",
    summary: "Archive reference — spring crowd, full floor.",
    description:
      "Archived listing from our April swap — kept so recurring visitors can see how we format schedules and vendor expectations.\n\nPhotos and reels usually hit Instagram first; the site mirrors confirmed dates.",
    startIso: "2026-04-26T10:00:00-07:00",
    endIso: "2026-04-26T16:00:00-07:00",
    vendorTips: [
      "Past event — details preserved for consistency.",
    ],
  },
];

function parseInstant(iso: string): number {
  return new Date(iso).getTime();
}

/** All events, soonest start first */
export function getAllEventsSorted(): ShopEvent[] {
  return [...events].sort(
    (a, b) => parseInstant(a.startIso) - parseInstant(b.startIso),
  );
}

export function getEventBySlug(slug: string): ShopEvent | undefined {
  return events.find((e) => e.slug === slug);
}

/** Events whose end time is still in the future (relative to now). */
export function getUpcomingEvents(now = new Date()): ShopEvent[] {
  const t = now.getTime();
  return getAllEventsSorted().filter((e) => parseInstant(e.endIso) >= t);
}

/** Events that already ended */
export function getPastEvents(now = new Date()): ShopEvent[] {
  const t = now.getTime();
  return getAllEventsSorted()
    .filter((e) => parseInstant(e.endIso) < t)
    .reverse();
}

/** Next swap for homepage hero — undefined if none scheduled */
export function getNextFeaturedEvent(now = new Date()): ShopEvent | undefined {
  const upcoming = getUpcomingEvents(now);
  return upcoming[0];
}

const TZ = "America/Los_Angeles";

/** Human-readable range for cards and headings */
export function formatEventRange(startIso: string, endIso: string): string {
  const start = new Date(startIso);
  const end = new Date(endIso);
  const datePart = start.toLocaleDateString("en-US", {
    timeZone: TZ,
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const timeFmt: Intl.DateTimeFormatOptions = {
    timeZone: TZ,
    hour: "numeric",
    minute: "2-digit",
  };
  const startT = start.toLocaleTimeString("en-US", timeFmt);
  const endT = end.toLocaleTimeString("en-US", timeFmt);
  return `${datePart} · ${startT} – ${endT}`;
}
