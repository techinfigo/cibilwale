"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "./Container";
import { ctaLink, mainNav } from "@/lib/nav";
import { siteConfig } from "@/lib/config";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Close the menu whenever the route changes (adjust state during render
  // rather than in an effect, so there is no extra render pass).
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  // Drop a shadow once the page has moved, so the bar separates from
  // the content underneath it.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-40 bg-white/95 backdrop-blur transition-shadow duration-300 ${
        scrolled
          ? "border-b border-transparent shadow-[0_6px_24px_-12px_rgba(10,37,64,0.35)]"
          : "border-b border-line"
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-2xl font-extrabold tracking-tight text-navy-800"
          >
            <span
              aria-hidden="true"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-green-bright to-brand-green-dark text-lg font-extrabold text-white"
            >
              C
            </span>
            {siteConfig.name}
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {mainNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`inline-flex min-h-11 items-center rounded-full px-4 text-[1.0625rem] font-semibold transition-colors hover:bg-mint-50 hover:text-navy-800 ${
                      isActive(link.href)
                        ? "bg-mint-50 text-navy-800"
                        : "text-body"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="ml-3">
                <Link href={ctaLink.href} className="btn btn-primary">
                  {ctaLink.label}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-white text-navy-800 shadow-sm lg:hidden"
          >
            <span aria-hidden="true" className="relative block h-4 w-6">
              <span
                className={`absolute left-0 block h-0.5 w-6 rounded bg-current transition-transform ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute top-1.5 left-0 block h-0.5 w-6 rounded bg-current transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-6 rounded bg-current transition-transform ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-line bg-white lg:hidden"
        >
          <Container>
            <ul className="flex flex-col py-3">
              {mainNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`flex min-h-14 items-center rounded-xl px-4 text-[1.0625rem] font-semibold ${
                      isActive(link.href)
                        ? "bg-mint-50 text-navy-800"
                        : "text-body"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="px-1 pt-3 pb-2">
                <Link
                  href={ctaLink.href}
                  className="btn btn-primary w-full justify-center"
                >
                  {ctaLink.label}
                </Link>
              </li>
            </ul>
          </Container>
        </nav>
      )}
    </header>
  );
}
