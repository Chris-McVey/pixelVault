/** Single source for NAP + nav — update here when canonical hours/phone are finalized. */

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
  /** Confirm against Google Business Profile — BusinessYab listed a variant digit historically */
  phoneDisplay: "(909) 664-7634",
  phoneTel: "+19096647634",
  social: {
    instagram: "https://www.instagram.com/pixelvaultgames",
    facebook: "https://www.facebook.com/PixelVaultGames",
    youtube:
      "https://www.youtube.com/channel/UCKONxFboO1zJNbvhPsbp5mQ",
  },
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
