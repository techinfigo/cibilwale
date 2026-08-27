import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Container from "@/components/Container";
import { siteConfig, telHref, whatsappHref } from "@/lib/config";

export const metadata: Metadata = {
  title:
    "CIBIL Score Improvement & Credit Report Correction in India | Cibil Wale",
  description:
    "Loan rejected over your CIBIL report? We find and dispute genuine errors — written off, suit filed, wrong settled status and more. Free first check.",
  alternates: { canonical: "/" },
};

/* ------------------------------------------------------------------ *
 * Home page copy. Kept in this file because none of it is reused.
 * ------------------------------------------------------------------ */

type IconName =
  | "written"
  | "court"
  | "settled"
  | "calendar"
  | "mismatch"
  | "report";

const problems: { href: string; title: string; body: string; icon: IconName }[] =
  [
    {
      href: "/services/written-off-removal",
      title: "Written Off",
      body: "Your bank gave up on recovering the loan and marked it written off. That one word can block every new loan and credit card until it is corrected.",
      icon: "written",
    },
    {
      href: "/services/suit-filed-removal",
      title: "Suit Filed",
      body: "The report says a legal case was filed against you — sometimes long after the matter was already closed. We check the record and raise a dispute.",
      icon: "court",
    },
    {
      href: "/services/settled-to-closed",
      title: "Settled Status",
      body: "You paid the full amount but the account still shows settled instead of closed. Lenders read settled as a loss, so the correct status matters.",
      icon: "settled",
    },
    {
      href: "/services/overdue-dpd-correction",
      title: "Overdue / DPD",
      body: "Late payment days you never actually missed, or an EMI shown as overdue after you paid it. We get the payment history matched to your receipts.",
      icon: "calendar",
    },
    {
      href: "/services/account-mismatch-correction",
      title: "Account Mismatch",
      body: "Someone else's loan, a duplicate entry, or a wrong PAN, name or address sitting in your file. Mixed-up records are more common than people think.",
      icon: "mismatch",
    },
    {
      href: "/services/credit-report-analysis",
      title: "Report Analysis",
      body: "Not sure what is pulling your score down? We read your full report line by line and tell you in plain words what is wrong and what can be fixed.",
      icon: "report",
    },
  ];

const steps = [
  {
    title: "Share your credit report",
    body: "Send us your report on WhatsApp, or let us help you download it free from the bureau. Nothing to pay at this step.",
  },
  {
    title: "We find the errors",
    body: "We go through every account, date and status, then list exactly what looks wrong and what proof will be needed.",
  },
  {
    title: "We file the disputes",
    body: "We prepare the dispute with the bureau and the lender, attach your documents, and follow it up until there is a reply.",
  },
  {
    title: "Bureau updates your report",
    body: "If the dispute is accepted, the record is corrected and a fresh report is issued. We share the updated copy with you.",
  },
];

const reasons = [
  {
    title: "Transparent fixed pricing",
    body: "You know the price before we start. No cut of your loan amount, no surprise bill at the end.",
  },
  {
    title: "We only dispute genuine errors",
    body: "If your report is accurate, we will tell you honestly and save you the money instead of taking the case.",
  },
  {
    title: "Updates on WhatsApp",
    body: "Every reply from the bureau reaches you on WhatsApp in simple language. No portal, no login to remember.",
  },
  {
    title: `Real humans in ${siteConfig.city}`,
    body: `Talk to ${siteConfig.contactPerson} and the team directly — a real office in ${siteConfig.cityState}, not a call centre.`,
  },
];

const faqs = [
  {
    q: "Can you increase my CIBIL score?",
    a: "We cannot promise any score number. What we do is find genuine mistakes in your credit report and get them corrected through the bureau's official dispute process. When a wrong entry is fixed, the score usually reflects that on its own — but how much it moves depends on your full credit history, and nobody can guarantee it in advance.",
  },
  {
    q: "How long does a correction take?",
    a: "Credit bureaus in India are required to look into a dispute within 30 days of receiving it. Most cases close in about 15 to 30 days once the documents are complete. Cases where the lender is slow to respond take longer, and we keep following up until we get an answer.",
  },
  {
    q: "What documents do you need from me?",
    a: "Usually your credit report, PAN and Aadhaar for identity, and whatever proof relates to the disputed account — a No Objection Certificate, a full payment receipt, a bank statement or a closure letter. We tell you exactly what is needed after reading your report, so you do not collect papers for nothing.",
  },
  {
    q: "Is this legal?",
    a: "Yes. Raising a dispute on a wrong entry is your right as a borrower under the rules that govern credit information companies in India. We use only the official dispute channels of the bureaus and lenders. We never contact anyone pretending to be you, and we never ask a bureau to delete information that is correct.",
  },
  {
    q: "What does it cost?",
    a: `The first analysis of your report is free — you pay nothing to find out what is wrong. If you decide to go ahead, we quote a fixed price for the correction work before starting and you approve it first. Message us on WhatsApp at ${siteConfig.phoneDisplay} and we will share the current rates.`,
  },
];

/* ------------------------------------------------------------------ *
 * Inline SVG icons. No image files, so nothing extra to download.
 * ------------------------------------------------------------------ */

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

function ProblemIcon({ name }: { name: IconName }) {
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

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path d="m4 12.5 5 5L20 6.5" />
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

/* ------------------------------------------------------------------ */

const trustPoints = [
  "Free first report analysis",
  "RBI-compliant dispute process",
  "No hidden charges",
  "Support on WhatsApp",
];

const limits = [
  "We cannot remove negative information that is correct. If you genuinely defaulted, that record stays on your report for as long as the rules allow.",
  "We cannot guarantee a specific score, or promise your score will reach a certain number by a certain date. The bureau calculates that, not us.",
  "We cannot force a lender or a bureau to accept a dispute. We present the evidence properly and follow it up — the decision is theirs.",
];

export default function Home() {
  const heroWhatsapp = whatsappHref(
    "Hi Cibil Wale, I want to talk to an expert about my credit report."
  );
  const closingWhatsapp = whatsappHref(
    "Hi Cibil Wale, please check my credit report for errors."
  );

  return (
    <>
      {/* 1. Hero ---------------------------------------------------- */}
      <section className="bg-navy-800 text-white">
        <Container className="py-14 sm:py-20">
          <p className="text-sm font-semibold tracking-wide text-navy-100 uppercase">
            Credit report correction
          </p>
          <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Wrong entry in your CIBIL report? Get it fixed.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-navy-100">
            Loans get rejected every day over mistakes people never made — a
            written off tag, an old settled status, or someone else&rsquo;s
            account. We find those errors and dispute them with the credit
            bureau for you.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/free-credit-report"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-brand-green px-6 text-base font-semibold text-white shadow-sm hover:bg-brand-green-dark"
            >
              Check My Credit Report Free
              <ArrowIcon />
            </Link>
            <a
              href={heroWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-white px-6 text-base font-semibold text-navy-800 shadow-sm hover:bg-navy-50"
            >
              <WhatsappIcon />
              Talk to an Expert
            </a>
          </div>

          <p className="mt-6 text-sm text-navy-100">
            Based in {siteConfig.cityState} · Helping customers across all of
            India
          </p>
        </Container>
      </section>

      {/* 2. Trust bar ----------------------------------------------- */}
      <section
        aria-label="Why people trust Cibil Wale"
        className="border-b border-line bg-surface"
      >
        <Container className="py-6">
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-green-light text-brand-green">
                  <CheckIcon />
                </span>
                <span className="text-sm font-medium text-ink">{point}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 3. Problems we fix ----------------------------------------- */}
      <section aria-labelledby="problems-heading">
        <Container className="py-14 sm:py-16">
          <h2 id="problems-heading" className="text-2xl font-bold sm:text-3xl">
            Problems we fix
          </h2>
          <p className="mt-3 max-w-2xl">
            These are the entries that stop a loan or credit card application. If
            any of them are wrong in your report, they can be disputed.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem) => (
              <li key={problem.href}>
                <Link
                  href={problem.href}
                  className="flex h-full flex-col rounded-xl border border-line bg-white p-5 hover:border-navy-100 hover:bg-navy-50"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-green-light text-brand-green">
                    <ProblemIcon name={problem.icon} />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{problem.title}</h3>
                  <p className="mt-2 text-[0.95rem]">{problem.body}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green">
                    Learn more
                    <ArrowIcon />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 4. How it works -------------------------------------------- */}
      <section
        aria-labelledby="how-heading"
        className="border-y border-line bg-surface"
      >
        <Container className="py-14 sm:py-16">
          <h2 id="how-heading" className="text-2xl font-bold sm:text-3xl">
            How it works
          </h2>
          <p className="mt-3 max-w-2xl">
            Four steps, and you know where your case stands at each one.
          </p>

          <ol className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* 5. Why Cibil Wale ------------------------------------------ */}
      <section aria-labelledby="why-heading">
        <Container className="py-14 sm:py-16">
          <h2 id="why-heading" className="text-2xl font-bold sm:text-3xl">
            Why {siteConfig.name}
          </h2>

          <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {reasons.map((reason) => (
              <li key={reason.title} className="flex gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-green-light text-brand-green">
                  <CheckIcon />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{reason.title}</h3>
                  <p className="mt-1.5 text-[0.95rem]">{reason.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 6. What we cannot do --------------------------------------- */}
      <section
        aria-labelledby="limits-heading"
        className="border-y border-line bg-surface"
      >
        <Container className="py-14 sm:py-16">
          <div className="max-w-3xl rounded-xl border border-line bg-white p-6 sm:p-8">
            <h2 id="limits-heading" className="text-2xl font-bold sm:text-3xl">
              What we cannot do
            </h2>
            <p className="mt-4">
              Anyone who promises to wipe your report clean or lift your score by
              a fixed number of points is not being straight with you. Here is
              where our work ends.
            </p>
            <ul className="mt-5 space-y-3">
              {limits.map((limit) => (
                <li key={limit} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-800"
                  />
                  <span>{limit}</span>
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

      {/* 7. FAQ ------------------------------------------------------ */}
      <section aria-labelledby="faq-heading">
        <Container className="py-14 sm:py-16">
          <h2 id="faq-heading" className="text-2xl font-bold sm:text-3xl">
            Common questions
          </h2>

          <div className="mt-8 divide-y divide-line border-y border-line">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-2">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-3 text-base font-semibold text-navy-800 marker:content-none">
                  {faq.q}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 text-brand-green transition-transform group-open:rotate-45"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </summary>
                <p className="pb-4 text-[0.95rem]">{faq.a}</p>
              </details>
            ))}
          </div>

          <p className="mt-6 text-[0.95rem]">
            Still unsure?{" "}
            <Link
              href="/faq"
              className="font-semibold text-brand-green underline underline-offset-2"
            >
              Read all questions
            </Link>{" "}
            or just message us — we answer in plain language.
          </p>
        </Container>
      </section>

      {/* 8. Final CTA ------------------------------------------------ */}
      <section
        aria-labelledby="cta-heading"
        className="border-t border-line bg-navy-800 text-white"
      >
        <Container className="py-14 pb-28 sm:py-16 sm:pb-28">
          <h2
            id="cta-heading"
            className="text-2xl font-bold text-white sm:text-3xl"
          >
            Send us your report. We will tell you what is wrong.
          </h2>
          <p className="mt-4 max-w-2xl text-navy-100">
            The first analysis is free and there is no obligation after it. If we
            find nothing worth disputing, we will say so.
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
