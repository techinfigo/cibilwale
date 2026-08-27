import Link from "next/link";
import Container from "@/components/Container";
import { serviceNav } from "@/lib/nav";
import { siteConfig, telHref, whatsappHref } from "@/lib/config";

/* Inline SVG icons — no image files on this page. */

function WhatsappIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm4.52 11.86c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.24-.64.8-.79.97-.14.16-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  );
}

function PhoneIcon() {
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

const usefulLinks = [
  { href: "/", label: "Home" },
  { href: "/free-credit-report", label: "Free credit report check" },
  { href: "/services", label: "All services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "Frequently asked questions" },
  { href: "/contact", label: "Contact us" },
];

export default function NotFound() {
  const notFoundWhatsapp = whatsappHref(
    "Hi Cibil Wale, I could not find what I was looking for on your website. Can you help?"
  );

  return (
    <>
      {/* Hero ------------------------------------------------------- */}
      <section className="hero-navy">
        <Container className="section-hero">
          <p className="eyebrow text-navy-100">
            Page not found
          </p>
          <h1 className="mt-4 h-display text-white">
            We could not find that page
          </h1>
          <p className="mt-6 lede max-w-2xl text-navy-100">
            The link may be old, or the address may have a typo in it. Nothing
            has gone wrong with your credit report — this is just a missing page
            on our website. Here is where to go instead.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/"
              className="btn btn-secondary"
            >
              Go to the home page
            </Link>
            <a
              href={notFoundWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <WhatsappIcon />
              Ask us on WhatsApp
            </a>
          </div>
        </Container>
      </section>

      {/* Useful links ----------------------------------------------- */}
      <section aria-labelledby="links-heading">
        <Container reveal className="section">
          <h2 id="links-heading" className="h-section">
            Main pages
          </h2>
          <ul className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
            {usefulLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="card card-link min-h-16 flex-row items-center px-6 py-4 text-lg font-bold text-navy-800"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Services --------------------------------------------------- */}
      <section
        aria-labelledby="services-heading"
        className="band-mint"
      >
        <Container reveal className="section">
          <h2 id="services-heading" className="h-section">
            What we help with
          </h2>
          <p className="mt-3 max-w-3xl lede">
            If you were looking for a particular problem on your credit report,
            it is probably one of these.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
            {serviceNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="card card-link min-h-16 flex-row items-center px-6 py-4 text-lg font-bold text-navy-800"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* CTA -------------------------------------------------------- */}
      <section
        aria-labelledby="cta-heading"
        className="band-navy"
      >
        <Container reveal className="section-cta">
          <h2
            id="cta-heading"
            className="h-section text-white"
          >
            Still cannot find it?
          </h2>
          <p className="mt-5 lede max-w-2xl text-navy-100">
            Tell us what you were looking for and we will point you to it — or
            just send your credit report and we will read it free.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={notFoundWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <WhatsappIcon />
              Message on WhatsApp
            </a>
            <a
              href={telHref}
              className="btn btn-secondary"
            >
              <PhoneIcon />
              Call {siteConfig.phoneDisplay}
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
