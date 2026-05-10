/** Status-style pills inspired by premium retro ecommerce cards — translates to service/inventory signals on a small-shop site. */

export function PillRow({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((label) => (
        <li key={label}>
          <span className="inline-flex items-center rounded-full border border-[var(--brand)]/35 bg-[var(--brand)]/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--brand)]">
            {label}
          </span>
        </li>
      ))}
    </ul>
  );
}
