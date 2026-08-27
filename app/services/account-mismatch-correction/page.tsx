import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { siteConfig, telHref, whatsappHref } from "@/lib/config";

export const metadata: Metadata = {
  title: "Wrong Details in CIBIL Report — How to Correct Them",
  description:
    "Wrong name, PAN, date of birth, address, loan amount or an account that is not yours in your CIBIL report? Learn how these mismatches happen, why they block loans, when they can be corrected, and what to do if you suspect identity fraud. Free first check from Cibil Wale, Agra.",
  alternates: { canonical: "/services/account-mismatch-correction" },
};

/* ------------------------------------------------------------------ *
 * Page copy. Written to answer the questions people actually search
 * for, in the order they usually ask them.
 * ------------------------------------------------------------------ */

const personalMismatches = [
  {
    title: "Wrong name spelling",
    body: "A letter dropped from a surname, initials expanded differently, or a middle name recorded as the last name. Enough to attach your record to someone else, or theirs to you.",
  },
  {
    title: "Wrong PAN",
    body: "The strongest identifier the bureau has, so a single transposed digit does the most damage — the account travels straight to whoever that PAN actually belongs to.",
  },
  {
    title: "Wrong date of birth",
    body: "Often copied incorrectly from an old application form years ago and never questioned since, because nobody reads their own report until a loan is refused.",
  },
  {
    title: "Wrong address or phone number",
    body: "Addresses you never lived at, or one you left a decade ago still shown as current. Lenders verify against this, so a mismatch can stall a file on its own.",
  },
];

const accountMismatches = [
  {
    title: "A loan or card that is not yours",
    body: "An account you never applied for and never signed for, sitting in your file with its balance and its payment history counted against you.",
  },
  {
    title: "Wrong loan amount or credit limit",
    body: "A sanctioned figure far above what you borrowed, or a card limit that was never yours, making you look far more heavily borrowed than you are.",
  },
  {
    title: "Wrong sanction or closure date",
    body: "A loan dated to the wrong year, or a closure date that does not match your final payment. Dates decide how old an entry looks and when it should drop off.",
  },
  {
    title: "A closed account still showing active",
    body: "You finished the loan years ago and the report still treats it as running, often with a balance attached that keeps affecting your eligibility.",
  },
  {
    title: "The same loan appearing twice",
    body: "One account reported under two numbers, or by both the original lender and a recovery agency, so a single debt is counted as two.",
  },
  {
    title: "Accounts of a similar-named person",
    body: "A namesake's entire borrowing history mixed into your file. Common names in a shared city make this far more likely than most people imagine.",
  },
];

const steps = [
  {
    title: "We read the full report",
    body: "Including the personal information section, which most people skip entirely. Name, PAN, date of birth, every address and phone number the bureau holds, and then every account listed underneath.",
  },
  {
    title: "We list every mismatch",
    body: "Account by account and field by field: this is yours, this you closed, this you have never seen, this spelling is wrong. Getting that list right matters more than anything else in the process.",
  },
  {
    title: "We gather identity and loan documents",
    body: "PAN and Aadhaar to establish who you are, address proof for where you have lived, and loan papers, statements or closure letters for any account whose details are being disputed.",
  },
  {
    title: "We raise the disputes",
    body: "Disputes go to the credit bureau through its official process, and in parallel to the lender that reported the account. This is the route the RBI and credit information company rules give every borrower.",
  },
  {
    title: "We follow up through the investigation",
    body: "Bureaus must investigate within 30 days of receiving a dispute. Personal detail corrections often move quickly; removing an account that is not yours takes longer, because the lender has to check its own records.",
  },
  {
    title: "We confirm on a fresh report",
    body: "When the investigation closes we pull a new report and check it field by field — details corrected, wrong accounts gone, nothing new introduced. You get a copy either way.",
  },
];

const documents = [
  "Your latest credit report from the bureau",
  "PAN card",
  "Aadhaar or other address proof — a utility bill, rent agreement or bank statement",
  "Loan documents, if you are disputing the details of an account",
  "Bank statements covering the account or payments in question",
];

const faqs = [
  {
    q: "How did someone else's loan appear on my credit report?",
    a: "Because bureaus match records using a combination of PAN, name, date of birth and address rather than one perfect key. When a lender uploads a file with any of those fields wrong — a PAN typed with two digits swapped, a surname spelt the way it sounded over the phone, an address taken from an old form — the record can attach to whoever else matches. If your name is common in your city, the odds go up considerably. It is a data error, not something you did, and it is disputable.",
  },
  {
    q: "Can a wrong PAN be corrected?",
    a: "Yes. A wrong PAN is a factual error in the report and it is one of the more important ones to raise, because PAN is the strongest identifier the bureau matches on — leaving it wrong invites more accounts to attach to your file later. You dispute it with the bureau, with a copy of your PAN card as proof, and the bureau verifies it with the lender that reported the record. We cannot promise a date for it, but personal detail corrections are usually among the more straightforward disputes.",
  },
  {
    q: "How long does the correction take?",
    a: "A bureau must investigate a dispute within 30 days of receiving it, and personal detail corrections often close inside that window. Removing an account that is not yours can take longer, because the lender has to go back to its own records to confirm the borrower was someone else. We keep following up rather than closing your file, and we do not promise a date, because the timeline depends on the lender as much as on the bureau.",
  },
  {
    q: "Do I need to visit anywhere?",
    a: `No. Nothing here needs you to travel. The whole process runs on WhatsApp and email — you send the report and your documents, we prepare and file the disputes, and we send you the updated report at the end. We are based in ${siteConfig.cityState} and work with people across India the same way. If you would rather talk it through than type, call ${siteConfig.phoneDisplay} and we will walk you through it.`,
  },
  {
    q: "Can you remove an account that really is mine?",
    a: "No. If you took the loan, guaranteed it, or are a joint borrower, the account belongs in your report — being a guarantor or joint holder counts, whoever was actually paying the EMIs. Correct information cannot be disputed as a mismatch simply because it is unflattering, and anyone offering to do that is selling you something they cannot deliver.",
  },
  {
    q: "Will removing a wrong account raise my score?",
    a: `We never promise a score number or an increase. If the account coming off was carrying defaults, late marks or a large balance, the effect can be substantial, because your score was being calculated on debt that was never yours. If it was a clean duplicate, the change may be small. It depends entirely on what the entry contained, and only the bureau calculates that figure. Send us the report on WhatsApp at ${siteConfig.phoneDisplay} and we will tell you honestly what we think it is worth.`,
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

function AlertIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-6 w-6"
    >
      <path d="M12 3 2.5 20h19L12 3Z" />
      <path d="M12 10v4m0 3v.5" />
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

export default function AccountMismatchCorrectionPage() {
  const pageWhatsapp = whatsappHref(
    "Hi Cibil Wale, my credit report has wrong details or an account that is not mine. Please check it for me."
  );
  const fraudWhatsapp = whatsappHref(
    "Hi Cibil Wale, there is a loan in my credit report that I never took. I need help urgently."
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
                Account Mismatch Correction
              </li>
            </ol>
          </nav>

          <h1 className="mt-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Wrong Details in CIBIL Report — How to Correct Them
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-navy-100">
            A loan you never took. Your name spelt wrong. An address you left ten
            years ago. The same account listed twice. Wrong details in a credit
            report are far more common than people assume — and because almost
            nobody reads their own report, most are discovered only when a loan is
            refused. This page explains how they get there and how they get fixed.
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

      {/* 2. What account mismatch means ------------------------------ */}
      <section aria-labelledby="meaning-heading">
        <Container className="py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2 id="meaning-heading" className="text-2xl font-bold sm:text-3xl">
              What an account mismatch means
            </h2>
            <p className="mt-4">
              A credit report is not written about you by one organisation. It is
              assembled. Every bank, credit card issuer, housing finance company
              and small NBFC you have ever borrowed from sends the bureau a file
              each month listing its borrowers and how they paid. The bureau
              stitches all of it together into one report.
            </p>
            <p className="mt-4">
              There is room for a mistake at every step. A clerk types the PAN
              from a photocopy. A form is scanned and read by software. A surname
              is spelt the way it sounded over the phone. An address is entered
              from an application filled in years earlier. The bureau then has to
              decide which of those millions of records belong to which person,
              matching on PAN, name, date of birth and address — and when one of
              those is wrong, records attach to the wrong file.
            </p>
            <p className="mt-4">
              Wrong details are far more common than people assume. What makes
              them dangerous is not how often they happen, but how long they sit
              undetected: almost nobody reads their own credit report until a
              lender says no, so an error made years ago has usually been quietly
              damaging applications for a long time before it is found.
            </p>
          </div>
        </Container>
      </section>

      {/* 3. Types of mismatch ---------------------------------------- */}
      <section
        aria-labelledby="types-heading"
        className="border-y border-line bg-surface"
      >
        <Container className="py-14 sm:py-16">
          <h2 id="types-heading" className="text-2xl font-bold sm:text-3xl">
            Types of mismatch
          </h2>
          <p className="mt-3 max-w-3xl">
            They fall into two groups: errors in who the report says you are, and
            errors in what it says you borrowed. Several usually appear together,
            because one wrong detail tends to produce the rest.
          </p>

          <h3 className="mt-8 text-lg font-semibold">
            Wrong personal information
          </h3>
          <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {personalMismatches.map((item) => (
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

          <h3 className="mt-10 text-lg font-semibold">
            Wrong account information
          </h3>
          <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {accountMismatches.map((item) => (
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
        </Container>
      </section>

      {/* 4. Why this is serious -------------------------------------- */}
      <section aria-labelledby="serious-heading">
        <Container className="py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2 id="serious-heading" className="text-2xl font-bold sm:text-3xl">
              Why this is serious
            </h2>
            <p className="mt-4">
              A wrong account can drag your score down for a debt you never took.
              You are not being judged on your own repayment behaviour at that
              point — you are being judged on a stranger&rsquo;s, or on a clerical
              error, and every application you make is priced accordingly.
            </p>
            <p className="mt-4">In practice that means:</p>
            <ul className="mt-5 space-y-3">
              {[
                "A score pulled down by late marks, a written off tag or a legal status belonging to someone else",
                "Applications refused because your total borrowing looks far higher than it really is",
                "Files stalled at verification when the name, PAN or address you wrote does not match what the bureau holds",
                "Loan eligibility cut, because lenders calculate what you can afford from the EMIs shown in the report",
                "Recovery calls and notices for a loan you have never heard of",
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
              There is a second reason to take it seriously. An account you do not
              recognise is sometimes not a mix-up at all, but an early sign of
              identity fraud — someone using your PAN and documents to borrow.
              That possibility is worth ruling out quickly, and we cover what to do
              further down this page.
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
            Of everything we handle, this is the strongest category. Factual
            errors are exactly what the dispute process was built for: if the
            information is wrong and you can show it is wrong, it should be
            corrected. There is no judgement call about whether you deserve it.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="rounded-xl border border-line bg-white p-6 sm:p-8">
              <h3 className="text-lg font-semibold">It can be corrected when</h3>
              <ul className="mt-4 space-y-3">
                {[
                  "The account is not yours — you never applied for it and never signed for it.",
                  "Your personal details are wrong: name spelling, PAN, date of birth, address or phone number.",
                  "The loan amount, credit limit, account type, sanction date or closure date does not match your papers.",
                  "A closed account is still showing as active, or still carrying a balance.",
                  "The same loan is listed twice, so one entry duplicates the other.",
                  "A loan was taken in your name using your documents without your knowledge.",
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
                It cannot be changed when
              </h3>
              <p className="mt-4">
                The information is correct and simply unflattering. A loan you
                took and would rather forget, a card you guaranteed for a
                relative, a joint account where you are genuinely a co-borrower —
                all of these belong in your report. Being a guarantor or a joint
                holder counts, whoever was actually paying the EMIs.
              </p>
              <p className="mt-4">
                The same applies to accurate personal details you dislike, and to
                a true record of borrowing. If that is what your report holds we
                will say so on the first call and we will not charge you to file a
                dispute designed to fail. Anyone promising otherwise is selling
                something they cannot deliver.
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
            Once a wrong account comes off, whatever it was carrying goes with it
            — including any{" "}
            <Link
              href="/services/overdue-dpd-correction"
              className="font-semibold text-brand-green underline underline-offset-2"
            >
              late payment marks
            </Link>{" "}
            or a{" "}
            <Link
              href="/services/written-off-removal"
              className="font-semibold text-brand-green underline underline-offset-2"
            >
              written off tag
            </Link>{" "}
            that never belonged to you in the first place.
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
              Identity proof does most of the work here. A mismatch dispute is
              ultimately an argument about who you are, so clean, consistent
              documents settle it faster than anything else.
            </p>
          </div>
        </Container>
      </section>

      {/* 8. If the account is not yours at all ----------------------- */}
      <section aria-labelledby="fraud-heading">
        <Container className="py-14 sm:py-16">
          <div className="max-w-3xl rounded-xl border border-line bg-white p-6 sm:p-8">
            <div className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-green-light text-brand-green">
                <AlertIcon />
              </span>
              <div>
                <h2
                  id="fraud-heading"
                  className="text-2xl font-bold sm:text-3xl"
                >
                  If the account is not yours at all
                </h2>
                <p className="mt-4">
                  A loan you have never heard of is sometimes a records mix-up —
                  and sometimes it means someone used your PAN and documents to
                  borrow. You cannot tell which from the report alone, so treat it
                  as urgent either way.
                </p>
              </div>
            </div>

            <ul className="mt-6 space-y-3">
              {[
                "Act quickly. A fraudulent account keeps growing — fresh EMIs, fresh late marks, sometimes recovery agents — for as long as it sits there unchallenged.",
                "Dispute it with the bureau straight away, stating plainly that the account is not yours and was never applied for by you.",
                "Inform the lender directly as well, in writing, rather than only through the bureau. The lender holds the application papers and the signature, and it is the only party that can confirm they are not yours.",
                "File a police complaint if you believe your documents were misused, and keep the copy — it becomes part of the evidence and lenders take the dispute more seriously with it.",
                "Check the rest of the report for other accounts you do not recognise, and keep every reply, reference number and email in one place.",
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

            <p className="mt-6">
              We are not a law enforcement agency and we cannot investigate who
              took the loan. What we can do is get the dispute framed properly and
              filed with both the bureau and the lender, and stay on it until
              there is an answer.
            </p>

            <div className="mt-6">
              <a
                href={fraudWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-brand-green px-6 text-base font-semibold text-white shadow-sm hover:bg-brand-green-dark"
              >
                <WhatsappIcon />
                Report an account that is not mine
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* 9. FAQ ------------------------------------------------------ */}
      <section
        aria-labelledby="faq-heading"
        className="border-y border-line bg-surface"
      >
        <Container className="py-14 sm:py-16">
          <h2 id="faq-heading" className="text-2xl font-bold sm:text-3xl">
            Common questions about wrong details
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

      {/* 10. CTA ----------------------------------------------------- */}
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
            We will go through it field by field and account by account, and tell
            you which entries are genuinely yours and which are not. No fee for
            the reading, and no pressure afterwards.
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
