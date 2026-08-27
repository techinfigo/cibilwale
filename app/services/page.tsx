import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Container from "@/components/Container";
import { siteConfig, telHref, whatsappHref } from "@/lib/config";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Six ways we correct credit report errors: written off, suit filed, settled to closed, DPD, account mismatch and full report analysis. Free first check.",
  alternates: { canonical: "/services" },
};

/* ------------------------------------------------------------------ *
 * Services hub copy. The individual service pages carry the detail;
 * this page only has to help a visitor recognise their own problem.
 * ------------------------------------------------------------------ */

type IconName =
  | "written"
  | "court"
  | "settled"
  | "calendar"
  | "mismatch"
  | "report";

const services: {
  href: string;
  title: string;
  body: string;
  icon: IconName;
}[] = [
  {
    href: "/services/written-off-removal",
    title: "Written Off Removal",
    body: "When a bank gives up on recovering a loan or card, it marks the account written off — and that word sits on your report for years afterwards. It is the entry lenders react to most strongly. Very often it stays there even after the dues were cleared, because nobody updated the bureau.",
    icon: "written",
  },
  {
    href: "/services/suit-filed-removal",
    title: "Suit Filed Removal",
    body: "Suit filed means a lender reported legal action against you. It frequently appears long after the matter was closed, withdrawn or settled — and sometimes for a case that was never yours at all. Until it is corrected, most lenders will not look at your application.",
    icon: "court",
  },
  {
    href: "/services/settled-to-closed",
    title: "Settled to Closed",
    body: "You paid the amount agreed and finished with the account, but the report still reads settled instead of closed. Lenders treat settled as money they lost, so the wrong word here costs you real applications. If you hold an NOC or full payment proof, the status can be disputed.",
    icon: "settled",
  },
  {
    href: "/services/overdue-dpd-correction",
    title: "Overdue and DPD Correction",
    body: "The days past due grid shows how late each EMI was. Banks upload these in bulk, so a payment made on time can still show as 30, 60 or 90 days late — or an EMI you cleared months ago can still sit there as overdue. Your receipts and statements are what fix it.",
    icon: "calendar",
  },
  {
    href: "/services/account-mismatch-correction",
    title: "Account Mismatch Correction",
    body: "Bureaus match records using your name, PAN, date of birth and address. One wrong detail and a stranger's loan lands in your file, your own loan appears twice, or the amount shown is nothing like what you borrowed. These mix-ups are far more common than people expect.",
    icon: "mismatch",
  },
  {
    href: "/services/credit-report-analysis",
    title: "Credit Report Analysis",
    body: "A full line-by-line reading of your report. We go through every account, date, status and amount, then tell you in plain language exactly what is pulling your score down — what can genuinely be disputed, and what is accurate and will simply take time.",
    icon: "report",
  },
];

const steps = [
  {
    title: "Share your credit report",
    body: "Send the report to us on WhatsApp, or let us help you download it free from the bureau. We also ask for your PAN and Aadhaar to confirm the report is yours. Nothing is charged at this stage.",
  },
  {
    title: "We find the errors",
    body: "We read every account, date, status and amount, and separate genuine mistakes from entries that are simply unwelcome. You get a plain list of what is wrong and which document will prove each one.",
  },
  {
    title: "We file the disputes",
    body: "The dispute goes to the credit bureau and to the lender who reported the entry, through their own official channels, with your proof attached — the same route the RBI and credit information company rules give every borrower.",
  },
  {
    title: "Bureau updates your report",
    body: "Bureaus must investigate within 30 days. If the dispute is accepted the record is corrected and a fresh report is issued; if a lender drags its feet we keep chasing. Either way you hear the result from us.",
  },
];

const honestNotes = [
  "We dispute genuine errors only — entries that do not match the facts and can be proved wrong with documents.",
  "We cannot remove accurate negative information. If a default or a late payment really happened, it stays on your report for as long as the rules require.",
  "We never promise a score number or an increase by a certain date. Credit bureaus calculate that from your whole history, and nobody outside them controls it.",
];

/* Inline SVG icons — no image files anywhere on this page. */

const iconPaths: Record<IconName, ReactNode> = {
  written: (
    <>
      <path d="M6 3h8l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M14 3v5h5" />
      <path d="m9 12 6 6m0-6-6 6" />
    </>
  ),
  court: (
    <>
      <path d="M12 3v18M5 21h14" />
      <path d="m4 8 4-3 4 3-4 3-4-3Z" />
      <path d="m12 8 4-3 4 3-4 3-4-3Z" />
    </>
  ),
  settled: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15 9h-4.5a1.5 1.5 0 0 0 0 3h3a1.5 1.5 0 0 1 0 3H9" />
      <path d="M12 7v10" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4m8-4v4M12 14v3" />
    </>
  ),
  mismatch: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16 8h5m-5 4h5m-5 4h5" />
    </>
  ),
  report: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 13v4m4-8v8m4-5v5" />
    </>
  ),
};

function ServiceIcon({ name }: { name: IconName }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-6 w-6"
    >
      {iconPaths[name]}
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path d="M5 12h13m-5-6 6 6-6 6" />
    </svg>
  );
}

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

export default function ServicesPage() {
  const helpWhatsapp = whatsappHref(
    "Hi Cibil Wale, I am not sure what the problem in my credit report is. Can you check it?"
  );
  const closingWhatsapp = whatsappHref(
    "Hi Cibil Wale, I need help with a credit report correction."
  );

  return (
    <>
      {/* 1. Hero ---------------------------------------------------- */}
      <section className="bg-navy-800 text-white">
        <Container className="py-14 sm:py-20">
          <p className="text-sm font-semibold tracking-wide text-navy-100 uppercase">
            Our services
          </p>
          <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Credit Report Problems We Fix
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-navy-100">
            A low CIBIL score is rarely a mystery. It almost always comes down to
            a handful of specific entries — and a surprising number of them are
            plain errors the bank or the bureau never got around to updating.
            Find the one that matches your report below.
          </p>
        </Container>
      </section>

      {/* 2. The six services ---------------------------------------- */}
      <section aria-labelledby="services-heading">
        <Container className="py-14 sm:py-16">
          <h2 id="services-heading" className="text-2xl font-bold sm:text-3xl">
            The six problems we handle
          </h2>
          <p className="mt-3 max-w-2xl">
            Each page explains what the entry means, what proof is needed, and
            how long a dispute usually takes.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
            {services.map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className="flex h-full flex-col rounded-xl border border-line bg-white p-5 hover:border-navy-100 hover:bg-navy-50 sm:p-6"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-green-light text-brand-green">
                    <ServiceIcon name={service.icon} />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-[0.95rem]">{service.body}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-brand-green">
                    Read more
                    <ArrowIcon />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 3. Not sure what your problem is ---------------------------- */}
      <section
        aria-labelledby="unsure-heading"
        className="border-y border-line bg-surface"
      >
        <Container className="py-14 sm:py-16">
          <div className="max-w-3xl rounded-xl border border-line bg-white p-6 sm:p-8">
            <h2 id="unsure-heading" className="text-2xl font-bold sm:text-3xl">
              Not sure what your problem is?
            </h2>
            <p className="mt-4">
              Most people are not, and that is completely normal. You do not have
              to work out your own report before contacting us. Send it on
              WhatsApp and we will read it and tell you what is wrong — free, and
              with no pressure to go ahead afterwards.
            </p>

            <div className="mt-6">
              <a
                href={helpWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-brand-green px-6 text-base font-semibold text-white shadow-sm hover:bg-brand-green-dark"
              >
                <WhatsappIcon />
                Send my report on WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. How the dispute process works ---------------------------- */}
      <section aria-labelledby="process-heading">
        <Container className="py-14 sm:py-16">
          <h2 id="process-heading" className="text-2xl font-bold sm:text-3xl">
            How the dispute process works
          </h2>
          <p className="mt-3 max-w-2xl">
            Correcting a credit report is a proper, regulated process that every
            borrower in India is entitled to use. There is no shortcut involved,
            and no favour from anyone on the inside.
          </p>

          <ol className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-xl border border-line bg-white p-5"
              >
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-800 text-lg font-bold text-white"
                >
                  {index + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-[0.95rem]">{step.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* 5. Honest note ---------------------------------------------- */}
      <section
        aria-labelledby="honest-heading"
        className="border-y border-line bg-surface"
      >
        <Container className="py-14 sm:py-16">
          <div className="max-w-3xl rounded-xl border border-line bg-white p-6 sm:p-8">
            <h2 id="honest-heading" className="text-2xl font-bold sm:text-3xl">
              An honest note
            </h2>
            <p className="mt-4">
              This is worth reading before you pick a service, because it is the
              part most people are never told.
            </p>
            <ul className="mt-5 space-y-3">
              {honestNotes.map((note) => (
                <li key={note} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-800"
                  />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 font-medium text-ink">
              What we can do is make sure your report shows the truth about you,
              and nothing more.
            </p>
          </div>
        </Container>
      </section>

      {/* 6. CTA ------------------------------------------------------ */}
      <section
        aria-labelledby="cta-heading"
        className="border-t border-line bg-navy-800 text-white"
      >
        <Container className="py-14 pb-28 sm:py-16 sm:pb-28">
          <h2
            id="cta-heading"
            className="text-2xl font-bold text-white sm:text-3xl"
          >
            Tell us what your report says.
          </h2>
          <p className="mt-4 max-w-2xl text-navy-100">
            The first analysis is free. If there is nothing worth disputing, we
            will say so instead of selling you a service.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={closingWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-brand-green px-6 text-base font-semibold text-white shadow-sm hover:bg-brand-green-dark"
            >
              <WhatsappIcon />
              Chat on WhatsApp
            </a>
            <a
              href={telHref}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-white px-6 text-base font-semibold text-navy-800 shadow-sm hover:bg-navy-50"
            >
              <PhoneIcon />
              Call {siteConfig.phoneDisplay}
            </a>
          </div>

          <p className="mt-6 text-sm text-navy-100">
            {siteConfig.contactPerson} · {siteConfig.cityState} · Monday to
            Saturday
          </p>
        </Container>
      </section>
    </>
  );
}
