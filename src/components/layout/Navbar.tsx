"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BookOpen, Menu, X } from "lucide-react";
import { DOCS_LINK, NAV_LINKS, SITE, START_BUILDING_LINK } from "@/lib/constants";
import { cn } from "@/lib/utils";

function Wordmark() {
  return (
    <Link
      href="#top"
      className="flex items-center gap-2.5 text-[0.95rem] font-semibold tracking-[0.12em] text-paper"
      aria-label={`${SITE.name} — back to top`}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2 L22 12 L12 22 L2 12 Z" fill="none" stroke="#FF6B4A" strokeWidth="2" />
        <path d="M12 7.5 L16.5 12 L12 16.5 L7.5 12 Z" fill="#FF6B4A" />
      </svg>
      <span>
        EMBER&nbsp;<span className="text-ember">DATA</span>
      </span>
    </Link>
  );
}

/**
 * Sticky site header. The mobile menu is a disclosure: it exposes
 * aria-expanded/aria-controls, closes on link selection, Escape, and
 * when the viewport grows past the desktop breakpoint.
 */
export function Navbar() {
  const [open, setOpen] = useState(false);

  // Close the menu with the Escape key.
  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Never leave the menu open when the desktop layout takes over.
  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    function onChange(event: MediaQueryListEvent) {
      if (event.matches) setOpen(false);
    }
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/85 backdrop-blur-md">
      <div className="container-site flex h-16 items-center justify-between gap-4">
        <Wordmark />

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-mist transition-colors hover:bg-white/[0.04] hover:text-paper"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={DOCS_LINK.href}
                className="ml-2 inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-mist transition-colors hover:bg-white/[0.04] hover:text-paper"
              >
                <BookOpen aria-hidden="true" className="h-4 w-4" />
                {DOCS_LINK.label}
              </Link>
            </li>
            <li className="ml-3">
              <Link
                href={START_BUILDING_LINK.href}
                className="btn btn-primary btn-sm"
              >
                {START_BUILDING_LINK.label}
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line-strong text-paper transition-colors hover:border-[rgba(255,107,74,0.6)] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <X aria-hidden="true" className="h-5 w-5" />
          ) : (
            <Menu aria-hidden="true" className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile navigation panel */}
      <div
        id="mobile-navigation"
        className={cn("border-t border-line md:hidden", !open && "hidden")}
      >
        <nav aria-label="Mobile" className="container-site py-2">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-base font-medium text-mist transition-colors hover:bg-white/[0.04] hover:text-paper"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={DOCS_LINK.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 rounded-md px-3 py-3 text-base font-medium text-mist transition-colors hover:bg-white/[0.04] hover:text-paper"
              >
                <BookOpen aria-hidden="true" className="h-4 w-4" />
                {DOCS_LINK.label}
              </Link>
            </li>
            <li className="mt-2 pb-2">
              <Link
                href={START_BUILDING_LINK.href}
                onClick={() => setOpen(false)}
                className="btn btn-primary w-full"
              >
                {START_BUILDING_LINK.label}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
