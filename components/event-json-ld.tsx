import type { ShopEvent } from "@/lib/events";
import { buildEventJsonLd } from "@/lib/jsonld";

export function EventJsonLd({ event }: { event: ShopEvent }) {
  const data = buildEventJsonLd(event);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
