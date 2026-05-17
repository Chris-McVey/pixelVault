import type { Metadata } from "next";
import { getCanonicalSiteUrl, site } from "@/lib/site";

type PageMetadataInput = {
  /** Short page title (layout template appends site name unless absoluteTitle is set). */
  title: string;
  description: string;
  /** Path only, e.g. `/repair` or `/` */
  pathname: string;
  absoluteTitle?: string;
  ogType?: "website" | "article";
};

export function createPageMetadata({
  title,
  description,
  pathname,
  absoluteTitle,
  ogType = "website",
}: PageMetadataInput): Metadata {
  const base = getCanonicalSiteUrl();
  const canonical = pathname === "/" ? base : `${base}${pathname}`;
  const ogTitle = absoluteTitle ?? `${title} · ${site.name}`;

  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    alternates: { canonical },
    openGraph: {
      title: ogTitle,
      description,
      url: canonical,
      siteName: site.name,
      locale: "en_US",
      type: ogType,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
  };
}
