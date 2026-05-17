/** Single source for NAP + nav — confirm hours vs Google Business Profile before launch. */

/** Public production origin — JSON-LD, sitemap, metadataBase. Apex domain (no www). */
export const productionSiteOrigin = "https://pixelvaultontario.com";

export function getCanonicalSiteUrl(): string {
  const u = process.env.NEXT_PUBLIC_SITE_URL;
  if (typeof u === "string" && u.trim().length > 0) {
    return u.replace(/\/$/, "");
  }
  /* Vercel sets VERCEL=1 — safe default so OG/sitemap URLs match the live domain if env is missing */
  if (process.env.VERCEL === "1") {
    return productionSiteOrigin;
  }
  return "http://localhost:3000";
}

export const site = {
  name: "Pixel Vault Games",
  shortName: "Pixel Vault",
  /** Homepage hero — inventory breadth signal without sounding like a catalog site */
  tagline:
    "We buy, sell, and trade everything from the Magnavox Odyssey to the Xbox Series X.",
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
  phoneDisplay: "(909) 664-7635",
  phoneTel: "+19096647635",
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
      "Monday 12:00 PM to 6:00 PM",
      "Tuesday: closed",
      "Wednesday through Saturday 12:00 PM to 6:00 PM",
      "Sunday 12:00 PM to 4:00 PM",
    ],
  },
  parkingNote:
    "Lot parking plus street spots on Holt. Buy, sell, trade event days fill up fast, so come early if you are hauling bins.",
} as const;

export type NavItem = { href: string; label: string };

export const mainNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Buy, sell, trade" },
  { href: "/repair", label: "Repair" },
  { href: "/trade-in", label: "Trade-in" },
  { href: "/about", label: "About" },
];

export function formatStreetAddress(): string {
  const { street, city, region, postalCode } = site.address;
  return `${street}, ${city}, ${region} ${postalCode}`;
}
