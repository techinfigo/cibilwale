import Link from "next/link";
import Container from "./Container";
import { mailtoHref, siteConfig, telHref } from "@/lib/config";

/**
 * Shared shell for the four legal pages. Each page supplies its own
 * title, last-updated date and section list, so the wording lives with
 * the page and the layout stays identical across all of them.
 */

export type LegalSection = {
  heading: string;
  /** Paragraphs, rendered in order. */
  body?: string[];
  /** Optional bullet list, rendered after the paragraphs. */
  list?: string[];
};

export default function LegalPage({
  title,
  lastUpdated,
  intro,
  sections,
}: {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      {/* Hero ------------------------------------------------------- */}
      <section className="hero-navy">
        <Container className="section-hero">
          <p className="eyebrow text-navy-100">
            Legal
          </p>
          <h1 className="mt-4 h-display text-white">
            {title}
          </h1>
          <p className="mt-6 lede max-w-2xl text-navy-100">{intro}</p>
          <p className="mt-6 text-sm text-navy-100">
            Last updated: {lastUpdated}
          </p>
        </Container>
      </section>

      {/* Body ------------------------------------------------------- */}
      <section aria-labelledby="terms-body-heading">
        <h2 id="terms-body-heading" className="sr-only">
          {title} in full
        </h2>
        <Container reveal className="section">
          <div className="max-w-3xl">
            {sections.map((section, index) => (
              <div key={section.heading} className={index === 0 ? "" : "mt-10"}>
                <h3 className="h-sub">
                  {index + 1}. {section.heading}
                </h3>

                {section.body?.map((paragraph) => (
                  <p key={paragraph} className="mt-4">
                    {paragraph}
                  </p>
                ))}

                {section.list ? (
                  <ul className="mt-3 space-y-2.5">
                    {section.list.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="bullet-dot"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact ---------------------------------------------------- */}
      <section
        aria-labelledby="legal-contact-heading"
        className="band-mint"
      >
        <Container reveal className="section-cta">
          <div className="max-w-3xl">
            <h2
              id="legal-contact-heading"
              className="h-sub"
            >
              Questions about this page?
            </h2>
            <p className="mt-4">
              If anything here is unclear, or you want something explained before
              you decide to work with us, ask. We would rather answer the
              question than have you agree to something you have not understood.
            </p>
            <ul className="mt-4 space-y-2.5">
              <li className="flex flex-wrap gap-x-2">
                <span className="font-semibold text-ink">Contact page:</span>
                <Link
                  href="/contact"
                  className="link-green"
                >
                  All the ways to reach us
                </Link>
              </li>
              <li className="flex flex-wrap gap-x-2">
                <span className="font-semibold text-ink">Phone:</span>
                <a
                  href={telHref}
                  className="link-green"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex flex-wrap gap-x-2">
                <span className="font-semibold text-ink">Email:</span>
                <a
                  href={mailtoHref}
                  className="font-semibold break-all text-brand-green underline underline-offset-2"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
            <p className="mt-5 text-sm">
              {siteConfig.legalName} · {siteConfig.contactPerson} ·{" "}
              {siteConfig.cityState}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
