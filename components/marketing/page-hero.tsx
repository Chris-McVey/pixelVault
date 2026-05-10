import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  illustration,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  children?: ReactNode;
  illustration?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="marketing-hero-mesh pointer-events-none absolute inset-0 opacity-90" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-[1.15fr_minmax(0,0.85fr)] lg:items-center lg:gap-14 lg:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--brand)]">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
            {subtitle}
          </p>
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
        {illustration ? (
          <div className="flex justify-center lg:justify-end">{illustration}</div>
        ) : null}
      </div>
    </section>
  );
}
