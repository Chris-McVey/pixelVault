import Link from "next/link";

/** Drop-shaped engagement: tie CTA to next visit / swap / bench queue — per competitor scan. */

export function DropCta({
  title,
  description,
  href,
  label,
}: {
  title: string;
  description: string;
  href: string;
  label: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[var(--brand)]/25 bg-gradient-to-br from-[var(--brand)]/15 via-transparent to-indigo-500/10 p-6 sm:p-8">
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[var(--brand)]/10 blur-3xl" />
      <h2 className="text-lg font-semibold text-white">{title}</h2>
      <p className="mt-2 max-w-lg text-sm leading-relaxed text-zinc-400">{description}</p>
      <Link
        href={href}
        className="mt-5 inline-flex items-center rounded-lg bg-[var(--brand)] px-4 py-2.5 text-sm font-semibold text-black shadow-lg shadow-amber-500/15 transition hover:bg-[var(--brand-dim)]"
      >
        {label}
      </Link>
    </div>
  );
}
