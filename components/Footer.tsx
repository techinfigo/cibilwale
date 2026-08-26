import Link from "next/link";
import Container from "./Container";
import { legalNav, quickNav, serviceNav } from "@/lib/nav";
import { mailtoHref, siteConfig, telHref } from "@/lib/config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-navy-800 text-navy-100">
      <Container className="py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <p className="text-lg font-bold text-white">{siteConfig.name}</p>
            <p className="mt-3 text-base leading-relaxed">
              {siteConfig.tagline}. We help you find and dispute genuine errors
              in your credit report.
            </p>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-base font-semibold text-white">Services</h2>
            <ul className="mt-4 space-y-3">
              {serviceNav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-base hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h2 className="text-base font-semibold text-white">Quick Links</h2>
            <ul className="mt-4 space-y-3">
              {quickNav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-base hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-base font-semibold text-white">Contact</h2>
            <ul className="mt-4 space-y-3 text-base">
              <li>{siteConfig.contactPerson}</li>
              <li>
                <a href={telHref} className="hover:text-white">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={mailtoHref} className="break-all hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
              <li>{siteConfig.cityState}</li>
            </ul>
          </div>
        </div>

        {/* Legal + copyright */}
        <div className="mt-10 border-t border-navy-600 pt-6">
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {legalNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="mt-2 text-sm">
            We assist with disputing genuine errors in credit reports as per
            RBI and Credit Information Company rules. We do not guarantee any
            score increase.
          </p>
        </div>
      </Container>
    </footer>
  );
}
