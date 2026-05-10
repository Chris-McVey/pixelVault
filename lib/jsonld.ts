import type { ShopEvent } from "@/lib/events";
import { formatStreetAddress, getCanonicalSiteUrl, site } from "@/lib/site";

const SCHEMA = "https://schema.org";

/** Full URLs for OpeningHoursSpecification dayOfWeek */
const DAY = {
  Monday: `${SCHEMA}/Monday`,
  Tuesday: `${SCHEMA}/Tuesday`,
  Wednesday: `${SCHEMA}/Wednesday`,
  Thursday: `${SCHEMA}/Thursday`,
  Friday: `${SCHEMA}/Friday`,
  Saturday: `${SCHEMA}/Saturday`,
  Sunday: `${SCHEMA}/Sunday`,
} as const;

export function buildGlobalJsonLd(): Record<string, unknown> {
  const base = getCanonicalSiteUrl();
  const storeId = `${base}/#store`;
  const websiteId = `${base}/#website`;

  return {
    "@context": SCHEMA,
    "@graph": [
      {
        "@type": ["Store", "LocalBusiness"],
        "@id": storeId,
        name: site.name,
        description: site.tagline,
        telephone: site.phoneTel,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          addressLocality: site.address.city,
          addressRegion: site.address.region,
          postalCode: site.address.postalCode,
          addressCountry: site.address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: site.geo.latitude,
          longitude: site.geo.longitude,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              DAY.Monday,
              DAY.Wednesday,
              DAY.Thursday,
              DAY.Friday,
              DAY.Saturday,
            ],
            opens: "12:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: DAY.Sunday,
            opens: "12:00",
            closes: "16:00",
          },
        ],
        sameAs: [
          site.social.instagram,
          site.social.facebook,
          site.social.youtube,
        ],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: base,
        name: site.name,
        publisher: { "@id": storeId },
      },
    ],
  };
}

export function buildEventJsonLd(ev: ShopEvent): Record<string, unknown> {
  const base = getCanonicalSiteUrl();
  const storeId = `${base}/#store`;
  const pageUrl = `${base}/events/${ev.slug}`;

  return {
    "@context": SCHEMA,
    "@type": "Event",
    "@id": `${pageUrl}#event`,
    name: ev.title,
    description: ev.summary,
    url: pageUrl,
    startDate: ev.startIso,
    endDate: ev.endIso,
    eventStatus: `${SCHEMA}/EventScheduled`,
    eventAttendanceMode: `${SCHEMA}/OfflineEventAttendanceMode`,
    location: {
      "@type": "Place",
      name: site.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.city,
        addressRegion: site.address.region,
        postalCode: site.address.postalCode,
        addressCountry: site.address.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: site.geo.latitude,
        longitude: site.geo.longitude,
      },
      hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(formatStreetAddress())}`,
    },
    organizer: { "@id": storeId },
  };
}
