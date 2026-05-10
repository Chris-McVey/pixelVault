import type { MetadataRoute } from "next";
import { getAllEventsSorted } from "@/lib/events";
import { getCanonicalSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getCanonicalSiteUrl();
  const paths = [
    "",
    "/events",
    "/contact",
    "/repair",
    "/trade-in",
    "/authenticity",
    "/about",
  ];

  const items: MetadataRoute.Sitemap = paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.75,
  }));

  for (const e of getAllEventsSorted()) {
    items.push({
      url: `${base}/events/${e.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    });
  }

  return items;
}
