"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "./Container";
import { ctaLink, mainNav } from "@/lib/nav";
import { siteConfig } from "@/lib/config";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the menu whenever the route changes (adjust state during render
  // rather than in an effect, so there is no extra render pass).
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-navy-800"
          >
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
                    className={`rounded-md px-3 py-2 text-base font-medium hover:bg-navy-50 hover:text-navy-800 ${
                      isActive(link.href) ? "text-navy-800" : "text-body"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="ml-2">
                <Link
                  href={ctaLink.href}
                  className="inline-flex min-h-11 items-center rounded-md bg-brand-green px-4 py-2 text-base font-semibold text-white hover:bg-brand-green-dark"
                >
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
            className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-line text-navy-800 lg:hidden"
          >
            <span aria-hidden="true" className="relative block h-4 w-6">
              <span
                className={`absolute left-0 block h-0.5 w-6 bg-current transition-transform ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute top-1.5 left-0 block h-0.5 w-6 bg-current ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-6 bg-current transition-transform ${
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
            <ul className="flex flex-col py-2">
              {mainNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`block border-b border-line py-4 text-base font-medium ${
                      isActive(link.href) ? "text-navy-800" : "text-body"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="py-4">
                <Link
                  href={ctaLink.href}
                  className="flex min-h-12 w-full items-center justify-center rounded-md bg-brand-green px-4 text-base font-semibold text-white"
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
