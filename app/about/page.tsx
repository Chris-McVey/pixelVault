import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `${site.name} — family-owned retro games in Ontario, CA since ${site.foundedYear}.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight text-white">
        About {site.shortName}
      </h1>
      <p className="mt-6 leading-relaxed text-zinc-400">
        We&apos;re a family-owned shop in Ontario. {site.tagline} Since{" "}
        {site.foundedYear}, we&apos;ve aimed to be the Inland Empire&apos;s welcoming spot
        for collectors, parents introducing kids to classics, and anyone who
        misses the good old days.
      </p>
      <p className="mt-4 leading-relaxed text-zinc-400">
        Staff bios, photos, and &quot;what we&apos;re playing&quot; will land here in a
        future pass — owner-led voice matters for this site.
      </p>
      <p className="mt-10">
        <Link href="/contact" className="font-medium text-[var(--brand)] hover:underline">
          Visit us →
        </Link>
      </p>
      <p className="mt-6">
        <Link href="/" className="text-sm font-medium text-zinc-500 hover:text-[var(--brand)]">
          ← Back home
        </Link>
      </p>
    </div>
  );
}
