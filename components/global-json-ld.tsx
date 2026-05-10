import { buildGlobalJsonLd } from "@/lib/jsonld";

/** Sitewide Store + WebSite JSON-LD — injected once from root layout */
export function GlobalJsonLd() {
  const data = buildGlobalJsonLd();
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
