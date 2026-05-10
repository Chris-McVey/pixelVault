import Link from "next/link";
import { mainNav, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--surface)]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="group flex flex-col leading-tight">
          <span className="font-semibold tracking-tight text-white transition group-hover:text-[var(--brand)]">
            {site.name}
          </span>
          <span className="text-xs text-zinc-400">
            Ontario, CA · Since {site.foundedYear}
          </span>
        </Link>
        <nav
          aria-label="Main"
          className="flex max-w-full flex-1 flex-wrap justify-end gap-x-4 gap-y-2 text-sm font-medium text-zinc-300 sm:gap-x-6"
        >
          {mainNav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="whitespace-nowrap rounded-md px-1 py-0.5 transition hover:text-[var(--brand)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
