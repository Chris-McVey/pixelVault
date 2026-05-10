/** Single source for NAP + nav — confirm hours vs Google Business Profile before launch. */

export function getCanonicalSiteUrl(): string {
  const u = process.env.NEXT_PUBLIC_SITE_URL;
  if (typeof u === "string" && u.trim().length > 0) {
    return u.replace(/\/$/, "");
  }
  return "http://localhost:3000";
}

export const site = {
  name: "Pixel Vault Games",
  shortName: "Pixel Vault",
  /** Family-owned retro shop — matches legacy marketing copy */
  tagline:
    "Buy, sell, trade, and repair — from Magnavox Odyssey to Xbox Series X.",
  foundedYear: 2014,
  address: {
    street: "931 W Holt Blvd",
    city: "Ontario",
    region: "CA",
    postalCode: "91762",
    country: "US",
  },
  /** Approximate coordinates for JSON-LD — tune from GBP / Maps pin if needed */
  geo: {
    latitude: 34.0639,
    longitude: -117.6512,
  },
  /** Confirm against Google Business Profile — BusinessYab listed a variant digit historically */
  phoneDisplay: "(909) 664-7634",
  phoneTel: "+19096647634",
  /** Used in JSON-LD @id — must match public site URL in production */
  social: {
    instagram: "https://www.instagram.com/pixelvaultgames",
    facebook: "https://www.facebook.com/PixelVaultGames",
    youtube:
      "https://www.youtube.com/channel/UCKONxFboO1zJNbvhPsbp5mQ",
  },
  /**
   * Canonical retail hours. Tuesday is closed — resolves the legacy Contact page
   * contradiction (“closed Tuesdays” vs “Tue–Sat open”).
   */
  hours: {
    timeZone: "America/Los_Angeles",
    lines: [
      "Monday 12:00 PM – 6:00 PM",
      "Tuesday — Closed",
      "Wednesday–Saturday 12:00 PM – 6:00 PM",
      "Sunday 12:00 PM – 4:00 PM",
    ],
  },
  parkingNote:
    "Parking is available in the lot; Holt Blvd also has street parking. Swap days get busy — arrive early if you’re hauling bins.",
} as const;

export type NavItem = { href: string; label: string };

export const mainNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events & swaps" },
  { href: "/repair", label: "Repair" },
  { href: "/trade-in", label: "Trade-in" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Visit" },
];

export function formatStreetAddress(): string {
  const { street, city, region, postalCode } = site.address;
  return `${street}, ${city}, ${region} ${postalCode}`;
}
