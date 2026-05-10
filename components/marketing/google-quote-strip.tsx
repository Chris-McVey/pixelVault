/** Aggregate Google rating strip — press-quote wall pattern from competitor scan (earned social proof > anonymous testimonials). */

export function GoogleReviewsStrip() {
  return (
    <aside className="rounded-2xl border border-[var(--brand)]/20 bg-gradient-to-br from-zinc-900/90 via-[var(--surface)] to-zinc-950 px-6 py-6 shadow-lg shadow-black/30">
      <p className="text-lg font-semibold tracking-wide text-[var(--brand)]">
        ★★★★★
      </p>
      <p className="mt-2 text-sm font-medium text-zinc-200">
        Loved on Google Maps by locals &amp; collectors
      </p>
      <p className="mt-2 text-sm leading-relaxed text-zinc-500">
        Pin your live star average here after you connect GBP widgets — until then,
        we keep the focus on in-person trust: diagnose honestly, quote before work,
        explain saves before wiping.
      </p>
    </aside>
  );
}
