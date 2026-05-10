import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Trade-in",
  description:
    "Sell or trade games and hardware at Pixel Vault Games — Ontario, CA.",
};

export default function TradeInPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight text-white">
        Buy / sell / trade
      </h1>
      <p className="mt-6 leading-relaxed text-zinc-400">
        We&apos;ll publish a transparent trade-in overview here — what we look for,
        how quotes work, and what to bring — aligned with the roadmap for trust
        and clarity.
      </p>
      <p className="mt-10">
        <Link href="/" className="text-sm font-medium text-[var(--brand)] hover:underline">
          ← Back home
        </Link>
      </p>
    </div>
  );
}
