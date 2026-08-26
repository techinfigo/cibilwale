import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { siteConfig, telHref, whatsappHref } from "@/lib/config";

export const metadata: Metadata = {
  title: "Written Off in CIBIL Report — How to Remove It",
  description:
    "Written off showing in your CIBIL report? Learn what it means, why lenders reject you for it, how long it stays, and when it can genuinely be corrected — wrong status after repayment, wrong amount, or an account that is not yours. Free first check from Cibil Wale.",
  alternates: { canonical: "/services/written-off-removal" },
};

/* ------------------------------------------------------------------ *
 * Page copy. Written to answer the questions people actually search
 * for, in the order they usually ask them.
 * ------------------------------------------------------------------ */

const canBeCorrected = [
  {
    title: "You repaid the amount but the status was never updated",
    body: "This is the most common case by far. The dues were cleared months or years later, the lender took the money, and nobody sent the closure update to the bureau. Your payment receipts and bank statement are the proof.",
  },
  {
    title: "The account is not yours",
    body: "Written off entries turn up under the wrong PAN, a similar name, or an old address you never used. If you never held that loan or card, the entry should not be in your file at all.",
  },
  {
    title: "The amount or the dates are wrong",
    body: "A written off amount larger than anything you borrowed, a date of default that contradicts your payment record, or the same account written off twice. These are factual errors the bureau can be asked to check.",
  },
  {
    title: "It was already settled and should show as closed",
    body: "If you agreed a one-time settlement and paid what was agreed, the status should reflect that — not a harsher written off tag. This overlaps with our settled to closed work.",
  },
];

const steps = [
  {
    title: "We review the report",
    body: "First we read what the entry actually says: the reported status, date of default, amount written off, last payment date, and whether the same account appears more than once. That is what decides whether a dispute has any basis at all.",
  },
  {
    title: "We collect the proof",
    body: "Payment receipts, the bank statement showing the money leaving your account, the NOC or closure letter if you have one. If a document is missing, we help you ask the lender for it — an NOC can usually still be obtained years later.",
  },
  {
    title: "We raise the dispute",
    body: "The dispute goes to the credit bureau through its official dispute process, and in parallel to the lender who reported the entry, since the lender is the only party that can authorise a change. This is the route the RBI and credit information company rules give every borrower.",
  },
  {
    title: "We follow up through the investigation",
    body: "Bureaus are required to investigate a dispute within 30 days of receiving it. Lenders sometimes go quiet inside that window, so we keep chasing and keep you updated on WhatsApp rather than leaving you waiting in silence.",
  },
  {
    title: "We confirm the corrected entry",
    body: "When the investigation closes we pull a fresh report and check the entry line by line — status, balance and dates — to confirm the change actually landed. You get a copy of the updated report, whatever the outcome.",
  },
];

const documents = [
  "Your latest credit report from the bureau",
  "PAN card, to confirm the report belongs to you",
  "Payment proof — receipts or a bank statement — or the NOC",
  "The loan or credit card account number, and the lender's name",
];

const faqs = [
  {
    q: "Can a written off entry be removed if I never paid?",
    a: "No. If you genuinely stopped paying, the amount and dates are correct and the money is still outstanding, then the entry is an accurate record of what happened — and nobody can honestly get it deleted. Anyone promising otherwise for a fee is selling something they cannot deliver. In that situation the useful path is different: clear the outstanding with the lender, get the closure documents in writing, make sure the report is updated to show nil balance, and build a clean payment record alongside it while the entry ages.",
  },
  {
    q: "Does paying now remove it immediately?",
    a: "Paying does not erase the history. What should change is the status and the balance — the account moves to a nil outstanding and is shown as closed, with the payment reflected. The record that it was once written off generally stays in your credit history. Lenders do read a paid-and-closed account very differently from an unpaid written off one, so clearing it still matters, but expecting the line to vanish will only lead to disappointment.",
  },
  {
    q: "How long does the correction take?",
    a: "A credit bureau must investigate a dispute within 30 days of receiving it, and most straightforward cases close inside that window. Where the lender is slow to confirm, it runs longer, and we keep following up instead of closing your file. We do not promise a date, because the timeline depends on the lender as much as on the bureau.",
  },
  {
    q: "Will my score jump straight away?",
    a: "We never promise a score number or an increase. When a wrong negative entry is corrected, the score usually reflects that at the next update — but the size of any change depends on your entire credit history: your other accounts, your current payments, how much you owe. One correction on a file with other problems moves less than people expect. The bureau calculates the score, and nobody outside it controls that figure.",
  },
  {
    q: "What is the difference between written off, settled and closed?",
    a: "Closed means you repaid everything you owed and the account was shut normally — that is the status you want. Settled means the lender accepted less than the full amount to close the account; better than written off, but still read as a partial loss. Written off means the lender gave up on recovery altogether, and it is the most damaging of the three. Reports quite often show the harshest of these three when a milder one is what actually happened.",
  },
  {
    q: "Can I raise the dispute myself?",
    a: `Yes, and if you are comfortable reading the report and dealing with the lender, you should — every borrower can dispute directly with the bureau at no cost. What people pay us for is knowing which entries are genuinely disputable, preparing the paperwork so it is not rejected on a technicality, and doing the follow-up. If you would rather try it yourself first, call ${siteConfig.phoneDisplay} and we will tell you how.`,
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

export default function WrittenOffRemovalPage() {
  const pageWhatsapp = whatsappHref(
    "Hi Cibil Wale, my credit report shows a written off account. Please check it for me."
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
                Written Off Removal
              </li>
            </ol>
          </nav>

          <h1 className="mt-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Written Off in CIBIL Report — How to Remove It
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-navy-100">
            If your credit report shows a loan or credit card as written off,
            almost every lender you apply to will stop right there. The good news
            is that a lot of these entries are simply out of date — the money was
            paid and nobody told the bureau. This page explains what the tag
            means, when it can genuinely be corrected, and when it cannot.
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

      {/* 2. What written off actually means -------------------------- */}
      <section aria-labelledby="meaning-heading">
        <Container className="py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2 id="meaning-heading" className="text-2xl font-bold sm:text-3xl">
              What does &ldquo;written off&rdquo; actually mean?
            </h2>
            <p className="mt-4">
              When a loan or credit card goes unpaid for a long stretch — usually
              somewhere around six months — the bank stops treating that money as
              something it expects to get back. It moves the outstanding amount
              off its active books for accounting purposes and reports the
              account to the credit bureaus as written off.
            </p>
            <p className="mt-4">
              Two things are worth saying very plainly here, because they are
              where most people go wrong.
            </p>
            <ul className="mt-5 space-y-3">
              <li className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-800"
                />
                <span>
                  <strong className="font-semibold text-ink">
                    It does not cancel your debt.
                  </strong>{" "}
                  Writing off is a bookkeeping step inside the bank, not
                  forgiveness. The lender can still ask you for the money, and
                  the account stays in your credit history where every future
                  lender can see it.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-800"
                />
                <span>
                  <strong className="font-semibold text-ink">
                    It is one of the most damaging entries a report can carry.
                  </strong>{" "}
                  A missed EMI says you were late once. Written off says a bank
                  concluded you were never going to pay at all.
                </span>
              </li>
            </ul>
          </div>
        </Container>
      </section>

      {/* 3. Why it hurts --------------------------------------------- */}
      <section
        aria-labelledby="impact-heading"
        className="border-y border-line bg-surface"
      >
        <Container className="py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2 id="impact-heading" className="text-2xl font-bold sm:text-3xl">
              Why it hurts your score and your applications
            </h2>
            <p className="mt-4">
              Credit scoring looks hardest at whether you repay what you borrow.
              A written off account is the strongest possible signal in the
              opposite direction, so it pulls the score down heavily and keeps
              pulling for years — much longer than an ordinary late payment.
            </p>
            <p className="mt-4">
              The bigger problem is what happens beyond the number. Most lenders
              in India do not read a report line by line; their systems scan for
              a short list of red flags, and written off sits near the top of it.
              In practice that means:
            </p>
            <ul className="mt-5 space-y-3">
              {[
                "Home loan and personal loan applications refused with no explanation beyond a low score",
                "Credit card applications declined even when your salary and current EMIs are perfectly healthy",
                "Approval offered only at a much higher interest rate, or with a co-applicant or guarantor demanded",
                "Existing credit limits reduced, or a top-up loan quietly refused",
                "Trouble with lenders who will not look at any file carrying a write-off, whatever the rest of it says",
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
              None of that is unfair when the entry is true. It is deeply unfair
              when the account was cleared long ago and the record was never
              updated — which is the position most people who contact us are in.
            </p>
          </div>
        </Container>
      </section>

      {/* 4. How long it stays ---------------------------------------- */}
      <section aria-labelledby="duration-heading">
        <Container className="py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2 id="duration-heading" className="text-2xl font-bold sm:text-3xl">
              How long does it stay on your report?
            </h2>
            <p className="mt-4">
              Years, not months. Credit bureaus in India keep account history for
              a long period — a written off status generally remains visible for
              around seven years from when it was reported, and it goes on
              affecting how lenders read your file for most of that time.
            </p>
            <p className="mt-4">
              The part people are rarely told is this: the bureau does not clean
              it up on its own just because time has passed, and it does not
              disappear the moment you pay. Two situations get confused with each
              other:
            </p>
            <ul className="mt-5 space-y-3">
              <li className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-800"
                />
                <span>
                  <strong className="font-semibold text-ink">
                    An accurate entry ages out.
                  </strong>{" "}
                  It stays for its full retention period and drops off in the
                  normal course. Nothing you or we do speeds that up.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-800"
                />
                <span>
                  <strong className="font-semibold text-ink">
                    A wrong entry has to be disputed.
                  </strong>{" "}
                  If it is incorrect, waiting achieves nothing — it will sit
                  there wrongly for the whole period unless somebody raises it
                  with the bureau and the lender.
                </span>
              </li>
            </ul>
            <p className="mt-5">
              So the first question is never &ldquo;how long until it
              goes?&rdquo; It is &ldquo;is this entry actually correct?&rdquo;
            </p>
          </div>
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
            factual error: something in the report that does not match what
            actually happened, and that a document can prove.
          </p>

          <h3 className="mt-8 text-lg font-semibold">
            It can be corrected when:
          </h3>
          <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {canBeCorrected.map((item) => (
              <li
                key={item.title}
                className="rounded-xl border border-line bg-white p-5"
              >
                <div className="flex gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-green-light text-brand-green">
                    <CheckIcon />
                  </span>
                  <div>
                    <h4 className="font-semibold text-ink">{item.title}</h4>
                    <p className="mt-1.5 text-[0.95rem]">{item.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 max-w-3xl rounded-xl border border-line bg-white p-6 sm:p-8">
            <h3 className="text-lg font-semibold">It cannot simply be deleted when:</h3>
            <p className="mt-3">
              The write-off is accurate, the amount and dates are right, and the
              money is still unpaid. There is no dispute to raise in that
              situation, and no service — ours or anyone else&rsquo;s — can have
              a true entry removed. If that is your case we will tell you on the
              first call and we will not charge you to file something designed to
              fail.
            </p>
            <p className="mt-4">
              What we will do instead is explain the realistic route: clear the
              outstanding with the lender, get the closure documents in writing,
              make sure the report is then updated to show a nil balance and a
              closed status, and build a clean payment record alongside it while
              the old entry ages. That is slower than what an agent will promise
              you, and it is the version that actually works.
            </p>
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
            Reports often carry more than one problem — a written off tag on one
            loan and a wrong{" "}
            <Link
              href="/services/settled-to-closed"
              className="font-semibold text-brand-green underline underline-offset-2"
            >
              settled status
            </Link>{" "}
            or{" "}
            <Link
              href="/services/overdue-dpd-correction"
              className="font-semibold text-brand-green underline underline-offset-2"
            >
              DPD marks
            </Link>{" "}
            on another. We handle them together rather than charging you twice
            for one round of work.
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
              Lost the NOC? It can usually still be obtained from the lender, and
              helping you ask for it is part of the job.
            </p>
          </div>
        </Container>
      </section>

      {/* 8. FAQ ------------------------------------------------------ */}
      <section aria-labelledby="faq-heading">
        <Container className="py-14 sm:py-16">
          <h2 id="faq-heading" className="text-2xl font-bold sm:text-3xl">
            Common questions about written off entries
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
            We will read the written off entry and tell you honestly whether
            there is a genuine error to dispute. If there is not, we will say so
            and explain what else you can do — no fee, no pressure.
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
