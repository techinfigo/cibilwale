import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import JumpNav from "@/components/JumpNav";
import Fold from "@/components/Fold";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { siteConfig, telHref, whatsappHref } from "@/lib/config";

export const metadata: Metadata = {
  title: "Overdue and DPD Errors in CIBIL Report — How to Correct Them",
  description:
    "Late payment marks or an overdue amount you already cleared? Learn how the DPD grid works and when wrong marks can be disputed. Free first check.",
  alternates: { canonical: "/services/overdue-dpd-correction" },
};

/* ------------------------------------------------------------------ *
 * Page copy. Written to answer the questions people actually search
 * for, in the order they usually ask them.
 * ------------------------------------------------------------------ */

const commonErrors = [
  {
    title: "Payment made but never reported",
    body: "You paid the EMI, the money left your account, and the lender simply never sent that month's update to the bureau. The box stays blank or stays late, and the account looks unpaid when it is not.",
  },
  {
    title: "Cheque or NACH cleared but marked bounced",
    body: "The auto-debit went through, or the cheque cleared, and the report still records a failed payment. This often happens when a mandate is re-presented and only the first attempt gets reported.",
  },
  {
    title: "EMI paid on time but reported late",
    body: "The money left your account on or before the due date and the lender posted it days afterwards. The delay was inside the bank, but the late mark lands on you.",
  },
  {
    title: "Overdue still showing after full closure",
    body: "The loan was cleared and shut, but the report still carries an outstanding balance — and keeps adding fresh late marks against it every month. Very common on old personal loans and credit cards.",
  },
  {
    title: "Someone else's default tagged to your PAN",
    body: "A namesake, a wrong PAN, or an old address you never used can put another person's missed EMIs into your file. If the loan was never yours, neither are its late marks.",
  },
  {
    title: "Duplicate entries for the same loan",
    body: "One account reported twice — sometimes by the original lender and a recovery agency both — makes a single late payment look like two separate defaults.",
  },
];

const steps = [
  {
    title: "We review the DPD grid month by month",
    body: "We map the whole payment history: which months carry marks, how severe each one is, how recent they are, and whether an overdue amount is still being reported against a closed account.",
  },
  {
    title: "We match it against your bank statements",
    body: "Every disputed month is checked against the day the money actually left your account. A payment debited on time but posted late is an error we can prove; a payment that never left is one we cannot.",
  },
  {
    title: "We collect the proof of payment",
    body: "Statements covering the disputed months, EMI receipts, the lender's statement of account, and the closure letter or NOC where the loan has ended. If a document is missing, we help you request it.",
  },
  {
    title: "We raise the dispute",
    body: "The dispute goes to the credit bureau through its official process, and in parallel to the lender who reported the entry — the lender is the only party that can authorise a change to the payment history. This is the route the RBI and credit information company rules give every borrower.",
  },
  {
    title: "We follow up and confirm on a fresh report",
    body: "Bureaus must investigate within 30 days of receiving a dispute. We chase the lender when it goes quiet, then pull a fresh report and check the grid month by month to confirm the corrected marks actually landed.",
  },
];

const documents = [
  "Your latest credit report from the bureau",
  "PAN card, to confirm the report belongs to you",
  "Bank statements covering the months shown as late",
  "EMI payment receipts, or the lender's statement of account",
  "Closure letter or NOC, if the loan has already ended",
  "The loan or credit card account number, and the lender's name",
];

const faqs = [
  {
    q: "What do the numbers in the payment history mean?",
    a: "Each box in the grid is one month against one account. 000 means that month's payment was made on time. 030, 060 and 090 mean the payment was that many days late, and higher numbers are worse — anything at 090 or beyond is treated as serious by most lenders. XXX means the lender reported nothing for that month, which is not a black mark on its own. You may also see STD, short for standard, which means the account was being serviced normally at that point.",
  },
  {
    q: "Does one late EMI really matter?",
    a: "It depends almost entirely on when it happened and how late it was. A single 030 from four years ago, surrounded by on-time payments, is background noise to most lenders. The same mark from three months ago is a live problem, because recent behaviour is what a lender weighs when deciding about you today. One isolated slip rarely sinks an application on its own; a recent one, or a cluster of them, very often does.",
  },
  {
    q: "How long do late marks stay on my report?",
    a: "The month-by-month grid typically shows around the last three years of payment behaviour, so the marks lenders look at hardest are the recent ones. The account and its history stay in your credit file for several years beyond that — generally around seven years from when it was reported. An accurate mark fades in prominence and eventually ages out on its own; a wrong one sits there for the whole period unless somebody disputes it.",
  },
  {
    q: "I paid on time but the report shows 30 days late. Can that be fixed?",
    a: "Yes, and it is one of the more straightforward disputes — provided you can show the money leaving your account on or before the due date. A bank statement is usually enough. The gap between the debit date on your statement and the date the lender posted the payment is exactly what the dispute process exists to correct. A bureau must investigate within 30 days of receiving a dispute, and cases backed by a clear statement often close inside that window.",
  },
  {
    q: "My loan is closed but the report still shows an overdue amount. Why?",
    a: "Because the closure update never reached the bureau. The lender took the final payment, shut the account internally, and the record stayed frozen with a balance against it — which then keeps attracting fresh late marks month after month. Your closure letter, NOC or final payment receipt is what fixes it. This is worth raising early, because an uncorrected overdue balance does not sit still; it keeps making the report worse.",
  },
  {
    q: "Will correcting an old DPD raise my score?",
    a: `We never promise a score number or an increase. Correcting a wrong mark removes something that was counting against you, and the score usually reflects that at the next update — but how much depends on your whole file, and on how old the mark was. Recent marks carry far more weight than old ones, so correcting a four-year-old error may change less than people hope, while fixing a recent one can matter a great deal. The bureau calculates the score, not us. If you want an honest read of your own report, send it to ${siteConfig.phoneDisplay} on WhatsApp.`,
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

export default function OverdueDpdCorrectionPage() {
  const pageWhatsapp = whatsappHref(
    "Hi Cibil Wale, my credit report shows wrong late payment days or an overdue amount. Please check it for me."
  );

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Overdue and DPD Correction", path: "/services/overdue-dpd-correction" },
        ]}
      />

      {/* 1. Hero ---------------------------------------------------- */}
      <section className="hero-navy">
        <Container className="section-hero">
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
                Overdue and DPD Correction
              </li>
            </ol>
          </nav>

          <h1 className="mt-6 h-display text-white">
            Overdue and DPD Errors in CIBIL Report — How to Correct Them
          </h1>
          <p className="mt-6 lede max-w-2xl text-navy-100">
            Your report carries a month-by-month record of how late every payment
            was. Banks upload it in bulk, and things go wrong — a payment made on
            the due date posted three days later, an EMI you cleared still shown
            as unpaid, a closed loan quietly clocking dues. This page explains
            what those marks mean and when they can genuinely be corrected.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={pageWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <WhatsappIcon />
              Get my report checked free
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

      <JumpNav
        items={[
          { id: "meaning", label: "What DPD means" },
          { id: "impact", label: "Why a few late days matter more than people think" },
          { id: "errors", label: "Common DPD errors" },
          { id: "correctable", label: "When it can be corrected — and when it cannot" },
          { id: "process", label: "How we fix it" },
          { id: "documents", label: "What you will need" },
          { id: "faq", label: "Common questions about overdue and DPD" },
        ]}
      />

      {/* 2. What DPD means ------------------------------------------- */}
      <section id="meaning" className="scroll-anchor" aria-labelledby="meaning-heading">
        <Container reveal className="section">
          <div className="max-w-3xl">
            <h2 id="meaning-heading" className="h-section">
              What DPD means
            </h2>
            <p className="mt-4">
              DPD stands for days past due. Against every loan and credit card in
              your report there is a grid — one small box for each month — saying
              whether that month&rsquo;s payment was made on time, and if not, how
              late it was. It is simply a month-by-month record of your payment
              behaviour.
            </p>
            <p className="mt-4">
              Lenders read this grid closely, often more closely than the score
              itself, because it shows the pattern rather than a summary: whether
              you slipped once three years ago, or whether you have been
              struggling for the last six months.
            </p>

            <div className="mt-6 rounded-xl border border-line bg-surface p-5 sm:p-6">
              <h3 className="h-card">
                How to read the boxes in your grid
              </h3>
              <dl className="mt-4 space-y-4">
                <div>
                  <dt className="font-semibold text-ink">000</dt>
                  <dd className="mt-1 text-[0.95rem]">
                    Paid on time that month. A long run of these is exactly what
                    you want a lender to see.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">030, 060, 090</dt>
                  <dd className="mt-1 text-[0.95rem]">
                    The payment was that many days late. The higher the number the
                    worse it reads, and anything at 090 or beyond is treated as
                    serious by most lenders.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">XXX</dt>
                  <dd className="mt-1 text-[0.95rem]">
                    The lender reported nothing for that month. Not a black mark
                    on its own, though long stretches of it make a report harder
                    to read.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">STD</dt>
                  <dd className="mt-1 text-[0.95rem]">
                    Short for standard — the account was being serviced normally
                    at that point, with no default recorded against it.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Overdue amount</dt>
                  <dd className="mt-1 text-[0.95rem]">
                    Shown separately from the grid: the money the lender says you
                    still owe today. On a loan you have closed, this figure should
                    be nil.
                  </dd>
                </div>
              </dl>
            </div>

            <p className="mt-6">
              One thing worth knowing: these marks are reported by the lender, not
              calculated by the bureau. An error at the bank&rsquo;s end becomes
              an error in your report. The saving grace is that each mark is
              dated, so a wrong one can be pinned to a specific month and
              disproved with a bank statement — far more cleanly than a vague
              status like{" "}
              <Link
                href="/services/written-off-removal"
                className="link-green"
              >
                written off
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      {/* 3. Why a few late days matter ------------------------------- */}
      <section
        id="impact"
        aria-labelledby="impact-heading"
        className="scroll-anchor band-mint"
      >
        <Container reveal className="section">
          <div className="max-w-3xl">
            <h2 id="impact-heading" className="h-section">
              Why a few late days matter more than people think
            </h2>
            <p className="mt-4">
              Of everything in a credit report, payment history carries the most
              weight in the score. Nothing else tells a lender as directly whether
              you pay on time. So marks that look like small clerical slips — a
              few days here, one month there — do far more damage than most people
              expect.
            </p>
            <p className="mt-4">
              What decides the cost is how recent the mark is, how severe, and how
              many there are. Recent late marks hurt far more than old ones,
              because a lender deciding about you today cares most about how you
              have behaved lately. A single 030 from four years ago is background
              noise. Two 060s in the last twelve months will stop an application.
            </p>
            <ul className="mt-4 space-y-2.5">
              {[
                "Loan applications refused on a score that dropped for months you actually paid on time",
                "Approval offered at a higher interest rate because recent marks put you in a worse risk band",
                "Credit card limits cut, or an existing card closed by the issuer after a routine review",
                "A live overdue amount on a closed loan making it look as though you owe money right now",
                "Every month of delay adding a fresh mark, so an uncorrected error keeps getting worse",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="bullet-dot"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5">
              That last point is why these disputes are worth raising early. An
              uncorrected overdue balance does not sit still — it keeps generating
              new late marks for as long as the lender reports it.
            </p>
          </div>
        </Container>
      </section>

      {/* 4. Common DPD errors ---------------------------------------- */}
      <section id="errors" className="scroll-anchor" aria-labelledby="errors-heading">
        <Container reveal className="section">
          <Fold
            summary={
              <h2 id="errors-heading" className="h-section">
                Common DPD errors
              </h2>
            }
          >
          <p className="mt-3 max-w-3xl lede">
            Late marks are uploaded in bulk by lenders, and bulk processes go
            wrong. These are the mistakes we see most often.
          </p>

          <ul className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {commonErrors.map((item) => (
              <li
                key={item.title}
                className="card"
              >
                <div className="flex gap-3">
                  <span className="icon-tile icon-round">
                    <CheckIcon />
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink">{item.title}</h3>
                    <p className="mt-2">{item.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          </Fold>
        </Container>
      </section>

      {/* 5. When it can be corrected --------------------------------- */}
      <section
        id="correctable"
        aria-labelledby="correctable-heading"
        className="scroll-anchor band-mint"
      >
        <Container reveal className="section">
          <Fold
            summary={
              <h2
                id="correctable-heading"
                className="h-section"
              >
                When it can be corrected — and when it cannot
              </h2>
            }
          >
          <p className="mt-3 max-w-3xl lede">
            This is the honest part, and the reason we would rather you read this
            page than call an agent who promises anything. A dispute needs a
            factual error: something in the report that does not match what
            actually happened, and that a document can prove.
          </p>

          <div className="mt-7 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="card">
              <h3 className="h-card">It can be corrected when</h3>
              <ul className="mt-3 space-y-2.5">
                {[
                  "The bank's own records show the payment was made on time and the report says otherwise — your statement and the posting date do not agree.",
                  "An account is fully closed but the report still shows an outstanding balance, and keeps adding late marks against it.",
                  "The entry is not yours at all — a namesake, a wrong PAN, or a loan you never took.",
                  "The same loan appears twice, so one late payment is being counted as two separate defaults.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="icon-tile icon-tile-sm icon-round">
                      <CheckIcon />
                    </span>
                    <span >{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h3 className="h-card">
                It cannot be removed when
              </h3>
              <p className="mt-4">
                You genuinely paid late. If the EMI went unpaid that month, the
                mark is an accurate record of what happened, and no service — ours
                or anyone else&rsquo;s — can have it deleted. A real late payment
                cannot be recoded as 000 because it is inconvenient. If that is
                your case we will say so on the first call and we will not charge
                you to file a dispute designed to fail.
              </p>
              <p className="mt-4">
                What actually works then is duller and slower: clear any overdue
                amount so the account stops generating fresh marks, keep every
                payment on time from here, and let the recent months in the grid
                fill with 000. Because lenders weigh recent behaviour most
                heavily, a clean run does more for you over a year or two than any
                dispute could.
              </p>
            </div>
          </div>
          </Fold>
        </Container>
      </section>

      {/* 6. How we fix it -------------------------------------------- */}
      <section id="process" className="scroll-anchor" aria-labelledby="process-heading">
        <Container reveal className="section">
          <Fold
            summary={
              <h2 id="process-heading" className="h-section">
                How we fix it
              </h2>
            }
          >
          <p className="mt-3 max-w-3xl lede">
            This is the official dispute process every borrower in India is
            entitled to use, under the rules governing credit information
            companies. No shortcut, no contact on the inside, no deletion for a
            fee.
          </p>

          <ol className="steps steps-two mt-12">
            {steps.map((step, index) => (
              <li key={step.title} className="step">
                <span aria-hidden="true" className="step-num">
                  {index + 1}
                </span>
                <h3 className="mt-5 h-card">{step.title}</h3>
                <p className="mt-2">{step.body}</p>
              </li>
            ))}
          </ol>

          <p className="mt-5 max-w-3xl">
            Reports often carry more than one problem — wrong DPD marks on one
            loan and a{" "}
            <Link
              href="/services/settled-to-closed"
              className="link-green"
            >
              settled status
            </Link>{" "}
            or an{" "}
            <Link
              href="/services/account-mismatch-correction"
              className="link-green"
            >
              account that is not yours
            </Link>{" "}
            elsewhere. We handle them together rather than charging you twice for
            one round of work.
          </p>
          </Fold>
        </Container>
      </section>

      {/* 7. What you will need --------------------------------------- */}
      <section
        id="documents"
        aria-labelledby="documents-heading"
        className="scroll-anchor band-mint"
      >
        <Container reveal className="section">
          <div className="max-w-3xl">
            <Fold
              summary={
                <h2
                  id="documents-heading"
                  className="h-section"
                >
                  What you will need
                </h2>
              }
            >
            <p className="mt-4">
              A dispute stands or falls on paperwork. You do not need all of this
              to start a conversation — send what you have and we will tell you
              what else is worth chasing.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
              {documents.map((doc) => (
                <li key={doc} className="flex gap-2.5">
                  <span className="icon-tile icon-tile-sm icon-round">
                    <CheckIcon />
                  </span>
                  <span >{doc}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6">
              The bank statement does most of the work here. It carries the one
              fact that settles the argument — the date the money actually left
              your account — so it is worth downloading the months in question
              before you contact anyone.
            </p>
            </Fold>
          </div>
        </Container>
      </section>

      {/* 8. FAQ ------------------------------------------------------ */}
      <section id="faq" className="scroll-anchor" aria-labelledby="faq-heading">
        <Container reveal className="section">
          <h2 id="faq-heading" className="h-section">
            Common questions about overdue and DPD
          </h2>

          <div className="faq-list mt-6">
            {faqs.map((faq) => (
              <details key={faq.q} className="faq-item">
                <summary className="faq-summary">
                  {faq.q}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="faq-chevron"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <p className="faq-answer">{faq.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* 9. CTA ------------------------------------------------------ */}
      <section
        aria-labelledby="cta-heading"
        className="band-navy"
      >
        <Container reveal className="section-cta">
          <h2
            id="cta-heading"
            className="h-section text-white"
          >
            Send your credit report on WhatsApp for a free check
          </h2>
          <p className="mt-5 lede max-w-2xl text-navy-100">
            We will read the payment grid month by month and tell you honestly
            which marks can be disputed and which are accurate. No fee for the
            reading, and no pressure afterwards.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={pageWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <WhatsappIcon />
              Send my report on WhatsApp
            </a>
            <a
              href={telHref}
              className="btn btn-secondary"
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
