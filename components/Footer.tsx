import Link from "next/link";
import Container from "./Container";
import { legalNav, quickNav, serviceNav } from "@/lib/nav";
import { mailtoHref, siteConfig, telHref } from "@/lib/config";

function PhoneGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.4 21 3 13.6 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
    </svg>
  );
}

function MailGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </svg>
  );
}

function PinGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="band-navy mt-16 text-navy-100">
      <Container className="pt-10 pb-10 sm:pt-14">
        <div className="grid grid-cols-2 gap-x-6 gap-y-9 lg:grid-cols-[1.15fr_1fr_1fr]">
          {/* Brand + contact */}
          <div className="col-span-2 lg:col-span-1">
            <p className="flex items-center gap-2.5 text-2xl font-extrabold text-white">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-green-bright to-brand-green-dark text-lg font-extrabold text-white"
              >
                C
              </span>
              {siteConfig.name}
            </p>
            <p className="mt-3 max-w-sm text-[1.0625rem]">
              {siteConfig.tagline}. We help you find and dispute genuine errors
              in your credit report.
            </p>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={telHref}
                  className="flex items-center gap-3.5 text-white transition-colors hover:text-brand-green-100"
                >
                  <span aria-hidden="true" className="icon-tile icon-on-dark">
                    <PhoneGlyph />
                  </span>
                  <span className="text-lg font-bold">
                    {siteConfig.phoneDisplay}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={mailtoHref}
                  className="flex items-center gap-3.5 transition-colors hover:text-white"
                >
                  <span aria-hidden="true" className="icon-tile icon-on-dark">
                    <MailGlyph />
                  </span>
                  <span className="break-all">{siteConfig.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-3.5">
                <span aria-hidden="true" className="icon-tile icon-on-dark">
                  <PinGlyph />
                </span>
                <span>
                  {siteConfig.contactPerson} · {siteConfig.cityState}
                </span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-xs font-extrabold tracking-[0.14em] text-white uppercase">
              Services
            </h2>
            <ul className="mt-4 space-y-2.5">
              {serviceNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[1.0625rem] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h2 className="text-xs font-extrabold tracking-[0.14em] text-white uppercase">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-2.5">
              {quickNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[1.0625rem] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal + copyright */}
        <div className="mt-10 border-t border-navy-600 pt-6">
          <ul className="flex flex-wrap gap-x-7 gap-y-3">
            {legalNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="mt-2 max-w-3xl text-sm">
            We assist with disputing genuine errors in credit reports as per
            RBI and Credit Information Company rules. We do not guarantee any
            score increase.
          </p>
        </div>
      </Container>
    </footer>
  );
}
