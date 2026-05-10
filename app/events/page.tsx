import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events & swap meets",
  description:
    "Community swap meets and events at Pixel Vault Games — Ontario, CA.",
};

export default function EventsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight text-white">
        Events &amp; swap meets
      </h1>
      <p className="mt-6 leading-relaxed text-zinc-400">
        This page will list upcoming swap dates, vendor signup, parking, and
        photo galleries — replacing the old embedded calendar as we migrate
        content from the legacy site.
      </p>
      <p className="mt-4 leading-relaxed text-zinc-400">
        For now, follow{" "}
        <a
          href="https://www.instagram.com/pixelvaultgames"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[var(--brand)] hover:underline"
        >
          @pixelvaultgames
        </a>{" "}
        for announcements.
      </p>
      <p className="mt-10">
        <Link href="/" className="text-sm font-medium text-[var(--brand)] hover:underline">
          ← Back home
        </Link>
      </p>
    </div>
  );
}
