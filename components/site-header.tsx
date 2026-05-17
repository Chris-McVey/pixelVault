import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { mainNav, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--surface)]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <Link href="/" className="block shrink-0 transition opacity-95 hover:opacity-100">
            <BrandLogo variant="header" />
          </Link>
          <div className="hidden border-l border-[var(--brand)]/25 pl-4 sm:block">
            <p className="text-xs font-medium text-zinc-400">
              Ontario, CA · Since {site.foundedYear}
            </p>
          </div>
        </div>
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
