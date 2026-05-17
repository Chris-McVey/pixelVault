/** Prominent rating area — pair with live Google reviews when embedded. */

export function GoogleReviewsStrip() {
  return (
    <aside className="rounded-2xl border border-[var(--brand)]/20 bg-gradient-to-br from-zinc-900/90 via-[var(--surface)] to-zinc-950 px-6 py-6 shadow-lg shadow-black/30">
      <p className="text-lg font-semibold tracking-wide text-[var(--brand)]">
        ★★★★★
      </p>
      <p className="mt-2 text-sm font-medium text-zinc-200">
        Rated on Google Maps
      </p>
      <p className="mt-2 text-sm leading-relaxed text-zinc-500">
        Our latest reviews are on Google Maps. Ask someone in the shop on a Saturday and you will
        hear the same stuff we shoot for with repairs: tell you what is wrong, quote before we
        touch it, be straight when saves or storage are involved.
      </p>
    </aside>
  );
}
