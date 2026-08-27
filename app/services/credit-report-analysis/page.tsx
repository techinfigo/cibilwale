import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { siteConfig, telHref, whatsappHref } from "@/lib/config";

export const metadata: Metadata = {
  title: "Credit Report Analysis — Find Out Why Your CIBIL Score Is Low",
  description:
    "Not sure why your CIBIL score is low? We read your full report line by line and tell you in plain words what is wrong and what can be fixed. Free.",
  alternates: { canonical: "/services/credit-report-analysis" },
};

/* ------------------------------------------------------------------ *
 * Page copy. This is the entry point service — written for someone who
 * knows the score is low but has no idea what is causing it.
 * ------------------------------------------------------------------ */

const reportParts = [
  {
    title: "Personal information",
    body: "Your name, PAN, date of birth, addresses and phone numbers. Almost nobody reads this part, and it is where the worst problems start: one wrong field is how a stranger's loan ends up attached to your file, and a mismatch here can stall an application at verification even when everything else is fine.",
  },
  {
    title: "Account summary",
    body: "The count of your accounts — total, active, closed, and how many carry an overdue amount. We check this against what you actually remember borrowing. A number that does not match is the fastest way to spot a loan you never took, or one you closed years ago that is still being counted as running.",
  },
  {
    title: "Individual account details",
    body: "Every loan and card listed separately: lender, account type, sanctioned amount or credit limit, ownership, and the sanction and closure dates. Wrong amounts, wrong dates, a joint account shown as solely yours, or the same loan reported twice all show up here.",
  },
  {
    title: "Payment history and the DPD grid",
    body: "The month-by-month grid showing how many days late each payment was. This is the heaviest part of the report and the hardest to read — a row of codes stretching back years. We translate it into plain words: which months are marked late, how late, and whether those marks match your bank statement.",
  },
  {
    title: "Balances and credit utilisation",
    body: "What you currently owe against what you are allowed to borrow. Utilisation sitting high month after month pulls a score down even when every payment is on time, and a closed account still showing a balance inflates the figure for a debt that no longer exists.",
  },
  {
    title: "Enquiries section",
    body: "Every time a lender pulled your report because you applied for something. A cluster of applications in a short period makes you look desperate for credit, and enquiries you do not recognise are worth questioning — they can point to an application made in your name.",
  },
  {
    title: "Negative status flags",
    body: "Written off, settled, suit filed, wilful default, or an account passed to a recovery agency. These are the entries that stop an application on their own, whatever the score says. We check whether each one is accurate, and whether a harsher flag has been used than what actually happened.",
  },
];

const findings = [
  {
    title: "What is actually pulling the score down",
    body: "Not a guess. The specific entries doing the damage, ranked by how much weight they carry — because a written off tag and a single late payment are not remotely the same problem, and people usually worry about the wrong one.",
  },
  {
    title: "Which items are genuine and which look wrong",
    body: "Account by account: this one is yours and accurate, this amount does not match your papers, this status contradicts your payment record, this account you have never seen before. Getting that split right is the whole point of the reading.",
  },
  {
    title: "What can realistically be disputed",
    body: "A dispute needs a factual error and a document that proves it. We tell you which entries clear that bar, what proof each one needs, and — just as plainly — which ones do not clear it and should be left alone.",
  },
  {
    title: "What you can improve yourself, free",
    body: "There is usually something: bringing utilisation down, clearing a small overdue amount, spacing out applications, keeping an old card open instead of closing it. None of that needs us, and we would rather tell you than sell you a dispute you do not need.",
  },
];

const bureaus = [
  {
    name: "CIBIL TransUnion",
    body: "The one most people mean when they say their CIBIL score, and the report most commonly pulled in India.",
  },
  {
    name: "Experian",
    body: "Widely used, and often the report a lender checks when a file has already been refused elsewhere.",
  },
  {
    name: "Equifax",
    body: "Used by a range of banks and NBFCs, sometimes alongside another bureau rather than instead of one.",
  },
  {
    name: "CRIF High Mark",
    body: "Common with NBFCs and smaller lenders, and used heavily in microfinance and small-ticket loans.",
  },
];

const steps = [
  {
    title: "Download your report yourself",
    body: "Get it directly from the bureau's own website, in your own name. Taking that step yourself means nobody else ever touches your login, and the original copy stays with you.",
  },
  {
    title: "Send it on WhatsApp",
    body: `Send the PDF to ${siteConfig.phoneDisplay}. If the file is password protected, send that password separately — it is the report's own password, never your bank password.`,
  },
  {
    title: "We read it line by line",
    body: "Every section, every account, every date. This is a person reading your report properly, not a tool that scans it for keywords and prints a template back at you.",
  },
  {
    title: "We tell you what we found",
    body: "In plain language, on WhatsApp or on a call, whichever suits you: what is wrong, what is accurate, what is disputable and what is not. You can ask questions until it makes sense.",
  },
  {
    title: "You decide what happens next",
    body: "If there is nothing worth disputing we will say so and that is the end of it, at no cost. If there is, we explain what the work involves and what it costs before you agree to anything.",
  },
];

const documents = [
  "Your credit report PDF, downloaded from the bureau",
  "The report's own password, if the PDF is protected",
  "PAN card, to confirm the report belongs to you",
];

const faqs = [
  {
    q: "Is checking my own credit score bad for it?",
    a: "No. Checking your own report is a soft enquiry and it does not affect your score, however often you do it. What counts against you is a hard enquiry — the pull a lender makes when you apply for a loan or a card — and several of those in a short period do make you look like you are hunting for credit. Reading your own report costs you nothing in score terms, and everyone should do it before applying for anything important.",
  },
  {
    q: "How many credit bureaus are there in India?",
    a: "Four: CIBIL TransUnion, Experian, Equifax and CRIF High Mark. Each keeps its own file on you, built from whatever the lenders chose to send it, so the four are rarely identical. A lender may check any one of them, or more than one. That matters after a correction too — an error fixed at one bureau is not automatically fixed at the others, and each has to be dealt with separately.",
  },
  {
    q: "Do I have to pay for the analysis?",
    a: "The first reading is free and there is no obligation afterwards. We read the report, tell you what we found, and explain what fixing it would involve. If you then want us to take the disputes forward, we tell you the cost before any work starts and you decide. Nobody is charged for being told what is in their own report.",
  },
  {
    q: "What if nothing is wrong with my report?",
    a: "Then we tell you that, and there is no fee. It genuinely happens — sometimes a score is low simply because the history is thin, or utilisation is high, or a few payments were late and the record is entirely accurate. In that case there is nothing to dispute, and filing one would waste your money. What we do instead is explain what is actually holding the score back and what you can do about it yourself over the coming months.",
  },
  {
    q: "Do you need my net banking password or an OTP?",
    a: `Never. We do not need your bank password, your card PIN, your net banking login or any OTP, and there is no situation in which a genuine credit repair service would ask for one. Anybody who does is trying to get into your account. All we need is the report PDF you downloaded yourself and your PAN. If someone claiming to be from us ever asks for more than that, stop and call ${siteConfig.phoneDisplay} to check.`,
  },
  {
    q: "Will the analysis itself improve my score?",
    a: "No, and we will not pretend otherwise. Reading a report changes nothing on its own — it tells you what is there. Any change comes later, either from correcting entries that are genuinely wrong or from how you handle your credit over the following months, and the bureau alone decides what the number does. We never promise a score or an increase. What the analysis gives you is a clear picture instead of a guess, which is where every real improvement has to start.",
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

function ShieldIcon() {
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
      <path d="M12 3 19.5 6v5.5c0 4.4-3.1 8.2-7.5 9.5-4.4-1.3-7.5-5.1-7.5-9.5V6L12 3Z" />
      <path d="m8.8 12.2 2.2 2.2 4.2-4.4" />
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

export default function CreditReportAnalysisPage() {
  const pageWhatsapp = whatsappHref(
    "Hi Cibil Wale, my CIBIL score is low and I do not know why. Please read my credit report for me."
  );

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Credit Report Analysis", path: "/services/credit-report-analysis" },
        ]}
      />

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
                Credit Report Analysis
              </li>
            </ol>
          </nav>

          <h1 className="mt-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Credit Report Analysis — Find Out Why Your CIBIL Score Is Low
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-navy-100">
            A bank said no and nobody explained why. The score is low, and the
            report is page after page of codes and column headings. Before you
            can fix anything you have to know what is actually wrong — so we read
            the whole report, line by line, and tell you in plain words what we
            found. The first reading is free.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={pageWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-brand-green px-6 text-base font-semibold text-white shadow-sm hover:bg-brand-green-dark"
            >
              <WhatsappIcon />
              Get my report read free
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

      {/* 2. Why most people cannot read their own report -------------- */}
      <section aria-labelledby="unreadable-heading">
        <Container className="py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2
              id="unreadable-heading"
              className="text-2xl font-bold sm:text-3xl"
            >
              Why most people cannot read their own report
            </h2>
            <p className="mt-4">
              A credit report was never designed for you. It was designed for a
              lending officer who reads twenty of them a day and knows exactly
              what every column means. It runs to many pages, most of it is
              tables, and the important parts are written as abbreviations and
              status codes rather than sentences.
            </p>
            <p className="mt-4">
              So what happens is always the same. People open the file, look at
              the three-digit number at the top, see that it is lower than they
              hoped, and close it again. The number is the one part of the report
              that explains nothing. It is a summary of everything underneath —
              and everything underneath is where the reasons are.
            </p>
            <p className="mt-4">
              Those reasons are rarely what people assume. Someone convinced a
              single missed EMI ruined their file turns out to have a closed loan
              still showing a balance. Someone who has never defaulted on
              anything is being marked down for utilisation that never drops. And
              a fair number of people are carrying an account that was never
              theirs. You cannot fix any of that until you know it is there.
            </p>
          </div>
        </Container>
      </section>

      {/* 3. What we actually check ----------------------------------- */}
      <section
        aria-labelledby="check-heading"
        className="border-y border-line bg-surface"
      >
        <Container className="py-14 sm:py-16">
          <h2 id="check-heading" className="text-2xl font-bold sm:text-3xl">
            What we actually check
          </h2>
          <p className="mt-3 max-w-3xl">
            Every section of the report, in order, including the ones people skip
            entirely. Here is what each part holds and what tends to go wrong in
            it.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {reportParts.map((part) => (
              <li
                key={part.title}
                className="rounded-xl border border-line bg-white p-5"
              >
                <div className="flex gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-green-light text-brand-green">
                    <CheckIcon />
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink">{part.title}</h3>
                    <p className="mt-1.5 text-[0.95rem]">{part.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 4. What the analysis tells you ------------------------------- */}
      <section aria-labelledby="findings-heading">
        <Container className="py-14 sm:py-16">
          <h2 id="findings-heading" className="text-2xl font-bold sm:text-3xl">
            What the analysis tells you
          </h2>
          <p className="mt-3 max-w-3xl">
            You get four things back, and the last one matters as much as the
            first.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {findings.map((item) => (
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

          <p className="mt-6 max-w-3xl text-[0.95rem]">
            Where the reading does turn up something disputable, it usually falls
            into one of the areas we handle:{" "}
            <Link
              href="/services/written-off-removal"
              className="font-semibold text-brand-green underline underline-offset-2"
            >
              written off
            </Link>
            ,{" "}
            <Link
              href="/services/suit-filed-removal"
              className="font-semibold text-brand-green underline underline-offset-2"
            >
              suit filed
            </Link>
            , a wrong{" "}
            <Link
              href="/services/settled-to-closed"
              className="font-semibold text-brand-green underline underline-offset-2"
            >
              settled status
            </Link>
            , incorrect{" "}
            <Link
              href="/services/overdue-dpd-correction"
              className="font-semibold text-brand-green underline underline-offset-2"
            >
              DPD marks
            </Link>{" "}
            or an{" "}
            <Link
              href="/services/account-mismatch-correction"
              className="font-semibold text-brand-green underline underline-offset-2"
            >
              account that is not yours
            </Link>
            . We would rather find one real error than invent five.
          </p>
        </Container>
      </section>

      {/* 5. Four reports, not one ------------------------------------ */}
      <section
        aria-labelledby="bureaus-heading"
        className="border-y border-line bg-surface"
      >
        <Container className="py-14 sm:py-16">
          <h2 id="bureaus-heading" className="text-2xl font-bold sm:text-3xl">
            You have four credit reports, not one
          </h2>
          <p className="mt-3 max-w-3xl">
            This surprises almost everyone. India has four licensed credit
            bureaus, and each keeps its own separate file on you, built from
            whatever the lenders chose to send it. They are rarely identical.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {bureaus.map((bureau) => (
              <li
                key={bureau.name}
                className="rounded-xl border border-line bg-white p-5"
              >
                <h3 className="font-semibold text-ink">{bureau.name}</h3>
                <p className="mt-1.5 text-[0.95rem]">{bureau.body}</p>
              </li>
            ))}
          </ul>

          <div className="mt-8 max-w-3xl rounded-xl border border-line bg-white p-6 sm:p-8">
            <h3 className="text-lg font-semibold">Why this matters to you</h3>
            <p className="mt-3">
              A lender may check any one of the four, and you do not get to
              choose which. An account can appear on one report and not another,
              and the same account can be reported with different details to
              different bureaus.
            </p>
            <p className="mt-4">
              The consequence people get caught by is this:{" "}
              <strong className="font-semibold text-ink">
                an error corrected at one bureau is not automatically corrected
                at the others.
              </strong>{" "}
              Each bureau holds its own record, and each one has to be disputed
              separately. Somebody who cleaned up their CIBIL file two years ago
              can still be refused today because the same wrong entry is sitting
              untouched at another bureau. It is worth checking more than one
              before you assume a problem is dealt with.
            </p>
          </div>
        </Container>
      </section>

      {/* 6. How to get your report ----------------------------------- */}
      <section aria-labelledby="obtain-heading">
        <Container className="py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2 id="obtain-heading" className="text-2xl font-bold sm:text-3xl">
              How to get your report
            </h2>
            <p className="mt-4">
              You are entitled to your own credit information, and you can get it
              from each bureau directly through its own website. The bureaus are
              required to make a full credit report available to you free of
              charge once a year, and you can buy further copies from them at any
              time. Several banking and payment apps also show you a score,
              though what they display is usually a summary rather than the full
              report we need to read.
            </p>
            <p className="mt-4">
              Download it yourself, from the bureau, in your own name. It takes a
              few minutes: you enter your details, verify your identity, and the
              report is emailed to you or downloaded as a PDF. Doing that step
              yourself means the original stays in your hands and nobody else
              ever touches your login.
            </p>
          </div>

          <div className="mt-8 max-w-3xl rounded-xl border border-line bg-white p-6 sm:p-8">
            <div className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-green-light text-brand-green">
                <ShieldIcon />
              </span>
              <div>
                <h3 className="text-lg font-semibold">
                  We never need your passwords or OTPs
                </h3>
                <p className="mt-3">
                  Read this part carefully, because it is how people get cheated.
                </p>
              </div>
            </div>

            <ul className="mt-5 space-y-3">
              {[
                "We will never ask for your net banking password, your card PIN, your UPI PIN or any OTP. No step in this work requires one.",
                "Nobody legitimate needs them — not us, not a bureau, not your bank on a phone call. Anyone asking is trying to get into your account, whoever they claim to be.",
                "If a credit report PDF is password protected, that password is the report's own, set by the bureau when it sent the file. It is not your banking password and it opens nothing but that document.",
                "Do not let anyone log into a bureau or bank website on your behalf using your credentials. Download the report yourself and send the file.",
                "All we ever need is the report PDF and your PAN. If someone claiming to be from us asks for anything more, stop and call us on the number on this page.",
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
          </div>
        </Container>
      </section>

      {/* 7. How the free check works --------------------------------- */}
      <section
        aria-labelledby="process-heading"
        className="border-y border-line bg-surface"
      >
        <Container className="py-14 sm:py-16">
          <h2 id="process-heading" className="text-2xl font-bold sm:text-3xl">
            How the free check works
          </h2>
          <p className="mt-3 max-w-3xl">
            Five steps, nothing to pay for the reading, and no obligation at any
            point.
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
            We do not promise a score, a number or a date — nobody honestly can,
            because the bureau calculates the score and the lender controls how
            quickly it responds. What we promise is that you will know what is in
            your own report and what your options actually are.
          </p>
        </Container>
      </section>

      {/* 8. What you will need --------------------------------------- */}
      <section aria-labelledby="documents-heading">
        <Container className="py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2
              id="documents-heading"
              className="text-2xl font-bold sm:text-3xl"
            >
              What you will need
            </h2>
            <p className="mt-4">
              Very little at this stage. Loan papers, statements and closure
              letters only become relevant later, if we find something worth
              disputing — there is no point gathering them before we know whether
              they are needed.
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
              If you have reports from more than one bureau, send them all.
              Seeing two files side by side often explains a refusal that one
              file on its own does not.
            </p>
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
            Common questions about report analysis
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
            Stop guessing why the score is low. Send the PDF and we will read it
            properly and tell you what is in it — what is wrong, what is right,
            and what is worth doing about it. No fee for the reading, and no
            pressure afterwards.
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
