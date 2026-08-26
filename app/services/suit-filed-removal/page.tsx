import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { siteConfig, telHref, whatsappHref } from "@/lib/config";

export const metadata: Metadata = {
  title: "Suit Filed in CIBIL Report — How to Remove It",
  description:
    "Suit filed showing in your CIBIL report? Learn what the status means, why lenders reject applications outright, the common reasons it appears wrongly, and when it can genuinely be corrected — case withdrawn, settled, decided in your favour, or not yours. Free first check from Cibil Wale.",
  alternates: { canonical: "/services/suit-filed-removal" },
};

/* ------------------------------------------------------------------ *
 * Page copy. Written to answer the questions people actually search
 * for, in the order they usually ask them.
 * ------------------------------------------------------------------ */

const wrongReasons = [
  {
    title: "The case was withdrawn after you paid",
    body: "Lenders report the day a suit is filed far more reliably than the day it ends. You settle the dues, the lawyer withdraws the case, the file is closed — and nobody sends the update to the bureau. This is the single most common reason we see.",
  },
  {
    title: "The matter was closed years ago",
    body: "A case decided, dismissed or compromised long ago can still show as live in your report today. The status simply froze at the filing date and stayed there while everything else moved on.",
  },
  {
    title: "The wrong person has been tagged",
    body: "Bureaus match records by name, PAN, date of birth and address. A namesake, a wrong PAN or an old address you never used can put a stranger's legal matter into your file.",
  },
  {
    title: "It was reported in error",
    body: "Sometimes the tag is applied during a bulk update, or used to pressure a borrower, when nothing was ever filed in any court. You were never served, there is no case number, and the lender cannot produce one.",
  },
  {
    title: "The details do not match the case",
    body: "A wrong case number, the wrong court, an amount far larger than what was actually claimed, or a filing date that contradicts your payment record. Each of these is a factual error on its own.",
  },
  {
    title: "The same matter appears more than once",
    body: "One dispute reported by both the original lender and a recovery agency, or the same account duplicated under two account numbers, can make a single case look like several.",
  },
];

const steps = [
  {
    title: "We review the report",
    body: "First we read exactly what the entry says — the reported status, the date, the amount claimed, the lender, and whether the same matter shows against more than one account. That decides whether there is any basis for a dispute.",
  },
  {
    title: "We establish the real position",
    body: "Together we work out what actually happened: was a case ever filed, is it still live, was it withdrawn, dismissed or decided, and were the dues paid. What the lender can prove matters as much as what you remember.",
  },
  {
    title: "We obtain the proof",
    body: "A withdrawal memo, a certified copy of the court order, a decree marked satisfied, or the NOC and settlement letter from the lender. Where a document is missing we help you request it from the court record or the lender's legal department.",
  },
  {
    title: "We raise the dispute",
    body: "The dispute goes to the credit bureau through its official process, and in parallel to the lender who reported the entry — the lender is the only party that can authorise a change. This is the route the RBI and credit information company rules give every borrower.",
  },
  {
    title: "We follow up and confirm",
    body: "Bureaus must investigate within 30 days of receiving a dispute. We chase the lender when it goes quiet, then pull a fresh report and check the entry line by line to confirm the change actually landed.",
  },
];

const documents = [
  "Your latest credit report from the bureau",
  "PAN card, to confirm the report belongs to you",
  "Court order, or proof that the case was withdrawn",
  "Settlement letter or NOC from the lender",
  "The loan or credit card account number, and the lender's name",
];

const faqs = [
  {
    q: "What does suit filed mean in a credit report?",
    a: "It means the lender has told the credit bureau that it started legal proceedings to recover money from you — usually a civil recovery case, and for larger borrowings sometimes a matter before a debt recovery tribunal. It is a status reported by the lender, not by any court. That distinction matters: the entry reflects what the bank says it did, which is exactly why it can be outdated or attached to the wrong person.",
  },
  {
    q: "Can suit filed be removed if the case is still going on?",
    a: "No. If a case was genuinely filed and the litigation is still live, the entry is an accurate record and no dispute will remove it — ours or anyone else's. The route there is to deal with the case itself: settle with the lender or see the matter through, get the withdrawal or the order in writing, and then have the report corrected to match. We will tell you plainly if that is your situation rather than take a fee for a dispute designed to fail.",
  },
  {
    q: "The case ended years ago. Why does my report still show suit filed?",
    a: "Because lenders report the filing far more diligently than the ending. The case is withdrawn once you pay, the lawyer closes the file, and nobody sends the update to the bureau — so the status stays frozen at the day it was filed. This is the most common suit filed case we handle, and exactly the kind of error the dispute process exists for. Your withdrawal memo, court order or NOC is what proves it.",
  },
  {
    q: "How long does a suit filed entry stay on my report?",
    a: "Years. Credit bureaus in India retain account history for a long period, and a suit filed status generally remains visible for around seven years from when it was reported. The bureau does not clean it up on its own because time has passed, and it does not drop off the day a case ends. An accurate entry ages out in the normal course; a wrong one sits there for the whole period unless somebody disputes it.",
  },
  {
    q: "How long does the correction take?",
    a: "A bureau must investigate a dispute within 30 days of receiving it, and straightforward cases often close inside that window. Suit filed disputes can run longer than others, because the lender usually has to go back to its legal department or its recovery agency to confirm the position. We keep following up rather than closing your file, and we do not promise a date we cannot control.",
  },
  {
    q: "Do I need a lawyer, and are you lawyers?",
    a: `No, we are not lawyers and we do not represent anyone in court — we correct credit reports. If your case is still live and needs defending or settling, that is work for an advocate, and we will say so. What we handle is the reporting side: establishing what the report should say once the legal position is clear, and disputing it with the bureau and the lender. If you are not sure which of the two you need, call ${siteConfig.phoneDisplay} and we will tell you honestly.`,
  },
];

/* Inline SVG icons — no image files on this page. */

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

export default function SuitFiledRemovalPage() {
  const pageWhatsapp = whatsappHref(
    "Hi Cibil Wale, my credit report shows a suit filed status. Please check it for me."
  );

  return (
    <>
      {/* 1. Hero ---------------------------------------------------- */}
      <section className="bg-navy-800 text-white">
        <Container className="py-14 sm:py-20">
          <nav aria-label="Breadcrumb" className="text-sm text-navy-100">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">
                Suit Filed Removal
              </li>
            </ol>
          </nav>

          <h1 className="mt-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Suit Filed in CIBIL Report — How to Remove It
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-navy-100">
            Few entries frighten a lender more than the words suit filed. Yet a
            great many of them describe a case that was withdrawn years ago, or a
            matter that never concerned you at all — because banks report the day
            a case starts far more carefully than the day it ends. This page
            explains what the status means, why it appears wrongly so often, and
            when it can genuinely be corrected.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={pageWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-brand-green px-6 text-base font-semibold text-white shadow-sm hover:bg-brand-green-dark"
            >
              <WhatsappIcon />
              Get my report checked free
            </a>
            <a
              href={telHref}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-white px-6 text-base font-semibold text-navy-800 shadow-sm hover:bg-navy-50"
            >
              <PhoneIcon />
              Call {siteConfig.phoneDisplay}
            </a>
          </div>
        </Container>
      </section>

      {/* 2. What suit filed means ------------------------------------ */}
      <section aria-labelledby="meaning-heading">
        <Container className="py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2 id="meaning-heading" className="text-2xl font-bold sm:text-3xl">
              What does &ldquo;suit filed&rdquo; mean?
            </h2>
            <p className="mt-4">
              Suit filed means the lender has started legal proceedings to
              recover money from you, and has reported that to the credit bureau.
              Usually it is a civil recovery case; for larger business borrowings
              it may be a matter before a debt recovery tribunal. The status
              attaches to the account and stays in your credit history.
            </p>
            <p className="mt-4">
              In plain terms, this is among the most serious things a credit
              report can say about a person. A missed EMI says you were late. A
              written off account says the bank gave up on recovery. Suit filed
              says the bank went to court over it — and that is read as the
              gravest of the three.
            </p>
            <p className="mt-4">
              Two points explain why so many of these entries turn out to be
              wrong:
            </p>
            <ul className="mt-5 space-y-3">
              <li className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-800"
                />
                <span>
                  <strong className="font-semibold text-ink">
                    The entry comes from the bank, not from a court.
                  </strong>{" "}
                  No court sends anything to a credit bureau. The tag reflects
                  what the lender says it did, which is precisely why it can be
                  outdated, exaggerated or attached to the wrong person.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-800"
                />
                <span>
                  <strong className="font-semibold text-ink">
                    Nobody updates it when the case ends.
                  </strong>{" "}
                  Filing gets reported. Withdrawal after you pay very often does
                  not. The status freezes at the day the case began and stays
                  that way for years.
                </span>
              </li>
            </ul>
            <p className="mt-5">
              It also sits separately from{" "}
              <Link
                href="/services/written-off-removal"
                className="font-semibold text-brand-green underline underline-offset-2"
              >
                written off
              </Link>
              , though the two often appear together on the same account. One is
              an accounting decision inside the bank; the other says the matter
              went to court.
            </p>
          </div>
        </Container>
      </section>

      {/* 3. Why it blocks loans -------------------------------------- */}
      <section
        aria-labelledby="impact-heading"
        className="border-y border-line bg-surface"
      >
        <Container className="py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2 id="impact-heading" className="text-2xl font-bold sm:text-3xl">
              Why it blocks loans
            </h2>
            <p className="mt-4">
              With most negative entries, a lender weighs the damage against the
              rest of your file. With suit filed, most of them do not weigh
              anything — they simply reject. Many banks apply a hard filter to
              legal-status entries, so the application never reaches a human who
              might have listened to your explanation.
            </p>
            <p className="mt-4">
              That is what people run into in practice:
            </p>
            <ul className="mt-5 space-y-3">
              {[
                "Applications rejected outright, whatever your current income and however clean the rest of the report is",
                "Home loan files stopped at the legal and verification stage rather than at credit assessment",
                "Approval offered only against security, at a much higher rate, or with a co-applicant demanded",
                "Every other account in the report scrutinised more heavily once a legal tag is spotted",
                "Business finance and overdraft renewals refused, which is often where the real damage falls",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-800"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5">
              That treatment is reasonable when the entry is true. It is very
              hard on someone whose case was closed years ago and whose report
              was never updated to say so.
            </p>
          </div>
        </Container>
      </section>

      {/* 4. Common reasons it appears wrongly ------------------------ */}
      <section aria-labelledby="wrong-heading">
        <Container className="py-14 sm:py-16">
          <h2 id="wrong-heading" className="text-2xl font-bold sm:text-3xl">
            Common reasons it appears wrongly
          </h2>
          <p className="mt-3 max-w-3xl">
            A suit filed tag on a report does not always mean there is a live
            case against you today. These are the situations we see most often.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {wrongReasons.map((item) => (
              <li
                key={item.title}
                className="rounded-xl border border-line bg-white p-5"
              >
                <div className="flex gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-green-light text-brand-green">
                    <CheckIcon />
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink">{item.title}</h3>
                    <p className="mt-1.5 text-[0.95rem]">{item.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 5. When it can be corrected --------------------------------- */}
      <section
        aria-labelledby="correctable-heading"
        className="border-y border-line bg-surface"
      >
        <Container className="py-14 sm:py-16">
          <h2
            id="correctable-heading"
            className="text-2xl font-bold sm:text-3xl"
          >
            When it can be corrected — and when it cannot
          </h2>
          <p className="mt-3 max-w-3xl">
            This is the honest part, and the reason we would rather you read this
            page than call an agent who promises anything. A dispute needs a
            factual error: something in the report that no longer matches
            reality, and that a document can prove.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="rounded-xl border border-line bg-white p-6 sm:p-8">
              <h3 className="text-lg font-semibold">It can be corrected when</h3>
              <ul className="mt-4 space-y-3">
                {[
                  "The case has been closed or fully decided, and the dues that caused it are cleared.",
                  "The case was withdrawn by the lender, usually after a settlement or full payment.",
                  "The matter was decided in your favour, or dismissed by the court.",
                  "The account is not yours at all — a namesake, a wrong PAN, or a record that belongs in someone else's file.",
                  "No case was ever filed, and the lender cannot produce a case number to support the entry.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-green-light text-brand-green">
                      <CheckIcon />
                    </span>
                    <span className="text-[0.95rem]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-line bg-white p-6 sm:p-8">
              <h3 className="text-lg font-semibold">
                It cannot be removed when
              </h3>
              <p className="mt-4">
                There is genuine, active litigation. If a case was properly filed
                and is still running, the entry is an accurate record of where
                things stand — and no service, ours included, can have it taken
                off. Anyone telling you otherwise for a fee is selling something
                they cannot deliver.
              </p>
              <p className="mt-4">
                If that is your position we will say so on the first call, and we
                will not charge you. What we will do is explain the realistic
                sequence: deal with the case first, through settlement with the
                lender or through an advocate if it needs defending; get the
                withdrawal, the order or the NOC in writing; and only then have
                the report corrected to match. The reporting fix follows the
                legal reality — it cannot run ahead of it.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. How we fix it -------------------------------------------- */}
      <section aria-labelledby="process-heading">
        <Container className="py-14 sm:py-16">
          <h2 id="process-heading" className="text-2xl font-bold sm:text-3xl">
            How we fix it
          </h2>
          <p className="mt-3 max-w-3xl">
            This is the official dispute process every borrower in India is
            entitled to use, under the rules governing credit information
            companies. No shortcut, no contact on the inside, no deletion for a
            fee.
          </p>

          <ol className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

          <p className="mt-6 max-w-3xl text-[0.95rem]">
            One clarification we make early, because it matters: we are not
            lawyers and we do not appear in court. We correct what your credit
            report says. If the case itself needs defending or settling, that is
            work for an advocate, and we will tell you so rather than take money
            for something outside what we do.
          </p>
        </Container>
      </section>

      {/* 7. What you will need --------------------------------------- */}
      <section
        aria-labelledby="documents-heading"
        className="border-y border-line bg-surface"
      >
        <Container className="py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2
              id="documents-heading"
              className="text-2xl font-bold sm:text-3xl"
            >
              What you will need
            </h2>
            <p className="mt-4">
              A dispute stands or falls on paperwork. You do not need all of this
              to start a conversation — send what you have and we will tell you
              what else is worth chasing.
            </p>
            <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {documents.map((doc) => (
                <li key={doc} className="flex gap-2.5">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-green-light text-brand-green">
                    <CheckIcon />
                  </span>
                  <span className="text-[0.95rem]">{doc}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[0.95rem]">
              No court papers at all? That is common, and not a dead end. Copies
              can usually be obtained from the court record or from the
              lender&rsquo;s legal department, and helping you ask for them is
              part of the job.
            </p>
          </div>
        </Container>
      </section>

      {/* 8. FAQ ------------------------------------------------------ */}
      <section aria-labelledby="faq-heading">
        <Container className="py-14 sm:py-16">
          <h2 id="faq-heading" className="text-2xl font-bold sm:text-3xl">
            Common questions about suit filed entries
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
        </Container>
      </section>

      {/* 9. CTA ------------------------------------------------------ */}
      <section
        aria-labelledby="cta-heading"
        className="border-t border-line bg-navy-800 text-white"
      >
        <Container className="py-14 pb-28 sm:py-16 sm:pb-28">
          <h2
            id="cta-heading"
            className="text-2xl font-bold text-white sm:text-3xl"
          >
            Send your credit report on WhatsApp for a free check
          </h2>
          <p className="mt-4 max-w-2xl text-navy-100">
            We will read the suit filed entry and tell you honestly whether there
            is a genuine error to dispute. If the case is still live, we will say
            that too — no fee, no pressure.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={pageWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-brand-green px-6 text-base font-semibold text-white shadow-sm hover:bg-brand-green-dark"
            >
              <WhatsappIcon />
              Send my report on WhatsApp
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
            {siteConfig.contactPerson} · {siteConfig.cityState} · Serving all of
            India
          </p>
        </Container>
      </section>
    </>
  );
}
