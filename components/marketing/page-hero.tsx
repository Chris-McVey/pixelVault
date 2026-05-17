import type { ReactNode } from "react";

export function PageHero({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  illustration,
  titleHeading = "h1",
}: {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  children?: ReactNode;
  illustration?: ReactNode;
  /** Use `h2` on the homepage where another section already has the page `h1`. */
  titleHeading?: "h1" | "h2";
}) {
  const TitleTag = titleHeading === "h2" ? "h2" : "h1";
  return (
    <section id={id} className="relative scroll-mt-24 overflow-hidden border-b border-white/10">
      <div className="marketing-hero-mesh pointer-events-none absolute inset-0 opacity-90" />
      <div
        className={`relative mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:py-20 ${
          illustration
            ? "lg:grid-cols-[1.15fr_minmax(0,0.85fr)] lg:items-center lg:gap-14"
            : ""
        }`}
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--brand)]">
            {eyebrow}
          </p>
          <TitleTag className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {title}
          </TitleTag>
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
