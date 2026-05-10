import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Repair",
  description:
    "Console and controller repair at Pixel Vault Games — Ontario, CA.",
};

export default function RepairPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight text-white">
        Console &amp; controller repair
      </h1>
      <p className="mt-6 leading-relaxed text-zinc-400">
        Dead console, stick drift, or a controller that gives up mid-run?
        We&apos;ll expand this page with common services, turnaround expectations,
        and photos from the bench — matching what regulars already expect in
        store.
      </p>
      <p className="mt-10">
        <Link href="/" className="text-sm font-medium text-[var(--brand)] hover:underline">
          ← Back home
        </Link>
      </p>
    </div>
  );
}
