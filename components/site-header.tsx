"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { mainNav, site } from "@/lib/site";

function MenuIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M6 6l12 12M18 6L6 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="relative sticky top-0 z-50 border-b border-white/10 bg-[var(--surface)]/95 backdrop-blur-md">
      <div className="relative z-50 mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <Link
            href="/"
            className="block shrink-0 opacity-95 transition hover:opacity-100"
            onClick={() => setMenuOpen(false)}
          >
            <BrandLogo variant="header" />
          </Link>
          <div className="hidden border-l border-[var(--brand)]/25 pl-4 md:block">
            <p className="text-xs font-medium text-zinc-400">
              Ontario, CA · Since {site.foundedYear}
            </p>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex shrink-0 items-center justify-center rounded-lg border border-white/15 p-2.5 text-zinc-200 transition hover:border-[var(--brand)]/50 hover:text-[var(--brand)] md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          <MenuIcon open={menuOpen} />
        </button>

        <nav
          aria-label="Main"
          className="hidden flex-nowrap items-center gap-x-5 text-sm font-medium text-zinc-300 md:flex lg:gap-x-6"
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

      <div
        className={`fixed inset-0 z-40 md:hidden motion-safe:transition-opacity motion-safe:duration-200 ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          tabIndex={menuOpen ? 0 : -1}
          className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
      </div>

      <nav
        id="mobile-nav"
        aria-label="Main"
        aria-hidden={!menuOpen}
        className={`absolute left-0 right-0 top-full z-50 border-b border-white/10 bg-[var(--surface)]/98 shadow-2xl shadow-black/40 backdrop-blur-md md:hidden motion-safe:transition-[transform,opacity] motion-safe:duration-200 motion-safe:ease-out ${
          menuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <ul className="mx-auto flex max-w-5xl flex-col gap-1 px-4 py-3 sm:px-6">
          {mainNav.map(({ href, label }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  tabIndex={menuOpen ? 0 : -1}
                  className={`block rounded-lg px-3 py-3 text-base font-medium transition ${
                    active
                      ? "bg-[var(--brand)]/15 text-[var(--brand)]"
                      : "text-zinc-200 hover:bg-white/5 hover:text-[var(--brand)]"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
