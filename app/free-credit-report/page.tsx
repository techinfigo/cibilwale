import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { siteConfig, telHref, whatsappHref } from "@/lib/config";

export const metadata: Metadata = {
  title: "Free Credit Report Check — Find Out What Is Wrong With Yours",
  description:
    "Send your credit report on WhatsApp and we will read it free. You get a plain-English explanation of what is on it, which entries are hurting your score, which look like errors that can be disputed, and what fixing them would cost. No obligation, and we never ask for passwords or OTPs.",
  alternates: { canonical: "/free-credit-report" },
};

/* ------------------------------------------------------------------ *
 * Main conversion page. Everything here points at one action: send
 * the report on WhatsApp. Keep it short and keep the button close.
 * ------------------------------------------------------------------ */

const whatYouGet = [
  {
    title: "What is actually on your report, in plain English",
    body: "Your report is written for lending officers, not for you — pages of tables, codes and abbreviations. We turn it into ordinary sentences: these are your accounts, this is what each one says, this is what it means.",
  },
  {
    title: "Which entries are hurting your score",
    body: "Not a guess and not a generic list. The specific entries doing the damage on your report, and which of them carry real weight — because a written off tag and one late payment are nothing like the same problem.",
  },
  {
    title: "Which of them look like errors we can dispute",
    body: "Account by account: this one is accurate, this amount does not match your papers, this status contradicts your payment record, this account may not be yours at all. That split is the whole point of the reading.",
  },
  {
    title: "What it would cost to fix — before you commit to anything",
    body: "If there is something worth disputing, we tell you what the work involves and what it costs, and you decide in your own time. If there is nothing worth disputing, we tell you that instead. Both answers are free.",
  },
];

const bureaus = [
  {
    name: "CIBIL TransUnion",
    body: "The report most people mean when they talk about their CIBIL score, and the one lenders pull most often.",
  },
  {
    name: "Experian",
    body: "Widely used in India, and often the report checked when an application has already been refused elsewhere.",
  },
  {
    name: "Equifax",
    body: "Used by a range of banks and NBFCs, sometimes alongside another bureau rather than instead of one.",
  },
  {
    name: "CRIF High Mark",
    body: "Common with NBFCs and smaller lenders, and used heavily for microfinance and small-ticket loans.",
  },
];

const downloadSteps = [
  {
    title: "Go to a bureau's official website",
    body: "Open the bureau's own site directly in your browser. Do not use a link someone sent you on WhatsApp or SMS, and do not use a search advertisement — go to the official site itself.",
  },
  {
    title: "Ask for your free annual report",
    body: "Each bureau is required to give you one full credit report free of charge every year. Look for the free annual report option rather than a paid subscription — you do not need to buy a plan to see your own record.",
  },
  {
    title: "Fill in your details and verify who you are",
    body: "You enter your name, PAN, date of birth and mobile number, and answer a few identity questions or confirm an OTP that the bureau itself sends you. This is the bureau checking you are you — nobody else should ever be involved in this step.",
  },
  {
    title: "Save the report as a PDF",
    body: "The report arrives on screen or by email. Save the full PDF, not a screenshot of the score and not a summary page from a banking app — we need every page to read it properly.",
  },
  {
    title: "Send the PDF to us on WhatsApp",
    body: `Send it to ${siteConfig.phoneDisplay} along with your PAN. If the PDF asks for a password, that is the report's own password set by the bureau — send it separately, and never send any banking password.`,
  },
];

const securityPoints = [
  "We will never ask for your net banking login, your bank password, your card PIN, your UPI PIN or any OTP. There is no step in this work that needs one.",
  "Nobody legitimate will ever ask you for them — not us, not a credit bureau, not your bank on a phone call, not a recovery agent. Anyone who does is trying to get into your account.",
  "If someone asks you for any of these, it is a scam. Stop, do not share anything, and do not continue the conversation, however official they sound or whoever they claim to be.",
  "Never let anyone log into a bureau or a banking website on your behalf using your credentials. Download the report yourself and send us the finished file.",
  "All we ever need is the credit report PDF and your PAN. Nothing else. If someone claiming to be from us asks for more, stop and call us on the number on this page.",
];

const nextSteps = [
  {
    title: "Send the report on WhatsApp",
    body: "One message with the PDF attached and your PAN. That is the whole of what you have to do, and it takes a minute.",
  },
  {
    title: "We read it and reply with what we found",
    body: "A person reads the report properly, line by line, and comes back to you in plain language: what is on it, what is wrong, and what can genuinely be disputed.",
  },
  {
    title: "You decide whether you want anything fixed",
    body: "No pressure and no automatic charges. If you want us to take it forward we agree the price first; if you would rather do nothing, or handle it yourself, that is a perfectly good answer too.",
  },
];

const faqs = [
  {
    q: "Is it really free?",
    a: "Yes, and there is no catch to find later. Reading your report and telling you what is in it costs you nothing, whatever it turns up. We do not ask for card details, we do not sign you up to anything, and you are not charged for the reading even if you then decide to go ahead with corrections. The only thing you ever pay for is correction work you have specifically agreed to, at a price told to you in advance.",
  },
  {
    q: "Will checking my report hurt my score?",
    a: "No. Looking at your own credit report is a soft enquiry and it has no effect on your score, however often you do it. What counts against you is a hard enquiry — the pull a lender makes when you apply for a loan or a card — and several of those close together do make you look like you are hunting for credit. Checking your own record is free of that risk entirely, and everyone should do it before applying for anything important.",
  },
  {
    q: "How long does the check take?",
    a: "Usually the same day, and at busy times the next working day. It depends on how long the report is and how many accounts are on it — a file with fifteen accounts and a decade of history takes longer to read properly than one with two. We would rather take an extra few hours and read it correctly than send you back something quick and wrong.",
  },
  {
    q: "What do you do with my data?",
    a: "We use your report and PAN for one thing only: reading your report, and preparing disputes if you ask us to. We do not sell your details, we do not pass them to lenders or agents, and nobody pays us for introductions. Your documents stay with the people doing the work, and if you want us to delete what you sent after we are finished, say so and we will.",
  },
  {
    q: "Do I have to buy anything after?",
    a: `No. Plenty of people get the free reading, hear what we found and never pay us anything — sometimes because there is nothing worth disputing, sometimes because they would rather fix it themselves, and sometimes because they simply want to think about it. All of those are fine. We will not chase you, and there is no automatic charge of any kind. If you want to talk it through first, call ${siteConfig.phoneDisplay}.`,
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

function WhatsappIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
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

export default function FreeCreditReportPage() {
  const sendReportWhatsapp = whatsappHref(
    "Hi Cibil Wale, I want the free credit report check. I am sending my report now."
  );
  const helpDownloadWhatsapp = whatsappHref(
    "Hi Cibil Wale, I do not have my credit report. Please help me download it."
  );

  return (
    <>
      {/* 1. Hero ---------------------------------------------------- */}
      <section className="bg-navy-800 text-white">
        <Container className="py-14 sm:py-20">
          <p className="text-sm font-semibold tracking-wide text-navy-100 uppercase">
            Free check
          </p>
          <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Free Credit Report Check
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-navy-100">
            Send us your credit report on WhatsApp and we will tell you exactly
            what is wrong with it — which entries are pulling your score down,
            which ones look like genuine errors, and what can be disputed. It is
            free, there is no obligation, and you will get a straight answer even
            if that answer is that nothing can be fixed.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={sendReportWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-16 items-center justify-center gap-3 rounded-lg bg-brand-green px-8 text-lg font-semibold text-white shadow-sm hover:bg-brand-green-dark"
            >
              <WhatsappIcon className="h-6 w-6" />
              Send my report on WhatsApp
            </a>
            <a
              href={telHref}
              className="inline-flex min-h-16 items-center justify-center gap-3 rounded-lg bg-white px-8 text-lg font-semibold text-navy-800 shadow-sm hover:bg-navy-50"
            >
              <PhoneIcon />
              Call {siteConfig.phoneDisplay}
            </a>
          </div>

          <p className="mt-5 text-sm text-navy-100">
            No card details. No sign-up. No password or OTP, ever.
          </p>
        </Container>
      </section>

      {/* 2. What you get --------------------------------------------- */}
      <section aria-labelledby="get-heading">
        <Container className="py-14 sm:py-16">
          <h2 id="get-heading" className="text-2xl font-bold sm:text-3xl">
            What you get
          </h2>
          <p className="mt-3 max-w-3xl">
            Four things back, all of them free, and the last one before you have
            spent anything.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {whatYouGet.map((item) => (
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

      {/* 3. How to get your credit report ----------------------------- */}
      <section
        aria-labelledby="download-heading"
        className="border-y border-line bg-surface"
      >
        <Container className="py-14 sm:py-16">
          <h2 id="download-heading" className="text-2xl font-bold sm:text-3xl">
            How to get your credit report
          </h2>
          <p className="mt-3 max-w-3xl">
            You are entitled to your own credit information, and you can get it
            straight from the bureau without going through anybody else. It takes
            about ten minutes. Download it yourself so the original stays in your
            hands and nobody ever touches your login.
          </p>

          <ol className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {downloadSteps.map((step, index) => (
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

          <h3 className="mt-10 text-lg font-semibold">
            You can use any of the four bureaus
          </h3>
          <p className="mt-3 max-w-3xl text-[0.95rem]">
            India has four licensed credit bureaus. Each keeps its own separate
            file on you, built from whatever the lenders chose to send it, so the
            four are rarely identical — and a lender may check any one of them.
            Send whichever you can get. If you can get more than one, send them
            all.
          </p>

          <ul className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {bureaus.map((bureau) => (
              <li
                key={bureau.name}
                className="rounded-xl border border-line bg-white p-5"
              >
                <h4 className="font-semibold text-ink">{bureau.name}</h4>
                <p className="mt-1.5 text-[0.95rem]">{bureau.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 4. Security warning ----------------------------------------- */}
      <section aria-labelledby="security-heading">
        <Container className="py-14 sm:py-16">
          <div className="rounded-xl border-2 border-navy-800 bg-navy-50 p-6 sm:p-8">
            <div className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-800 text-white">
                <AlertIcon />
              </span>
              <div>
                <h2
                  id="security-heading"
                  className="text-2xl font-bold sm:text-3xl"
                >
                  We will never ask for a password or an OTP
                </h2>
                <p className="mt-4">
                  Please read this part properly. It is the single most important
                  thing on this page, and it is how people get cheated.
                </p>
              </div>
            </div>

            <ul className="mt-6 space-y-3">
              {securityPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-800"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6">
              The one OTP you will legitimately see is the one the credit bureau
              sends to your own phone while you are downloading your own report
              on the bureau&rsquo;s own website. That one you enter yourself, on
              their site, and you share it with nobody — not with us, and not
              with anyone who rings you afterwards claiming to be us.
            </p>
          </div>
        </Container>
      </section>

      {/* 5. Do not have your report ---------------------------------- */}
      <section
        aria-labelledby="nohave-heading"
        className="border-y border-line bg-surface"
      >
        <Container className="py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2 id="nohave-heading" className="text-2xl font-bold sm:text-3xl">
              Do not have your report?
            </h2>
            <p className="mt-4">
              Then message us anyway. Tell us where you got stuck and we will
              walk you through downloading it, step by step, in Hindi or English
              — which button to press, what to type, and what the bureau is
              asking you for. Plenty of people need this bit and there is nothing
              embarrassing about it.
            </p>
            <p className="mt-4">
              There is no charge for that either. We guide you, you download your
              own report on your own phone, and your login stays yours.
            </p>

            <div className="mt-8">
              <a
                href={helpDownloadWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-brand-green px-6 text-base font-semibold text-white shadow-sm hover:bg-brand-green-dark"
              >
                <WhatsappIcon />
                Help me download my report
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. What happens next ---------------------------------------- */}
      <section aria-labelledby="next-heading">
        <Container className="py-14 sm:py-16">
          <h2 id="next-heading" className="text-2xl font-bold sm:text-3xl">
            What happens next
          </h2>
          <p className="mt-3 max-w-3xl">
            Three steps, and you can stop after any of them.
          </p>

          <ol className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {nextSteps.map((step, index) => (
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
            If there is something to fix, the work usually falls into one of the{" "}
            <Link
              href="/services"
              className="font-semibold text-brand-green underline underline-offset-2"
            >
              services we handle
            </Link>
            , and what each costs is set out on our{" "}
            <Link
              href="/pricing"
              className="font-semibold text-brand-green underline underline-offset-2"
            >
              pricing page
            </Link>
            . You will not be charged for anything you have not agreed to first.
          </p>
        </Container>
      </section>

      {/* 7. Why we do this free -------------------------------------- */}
      <section
        aria-labelledby="why-heading"
        className="border-y border-line bg-surface"
      >
        <Container className="py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2 id="why-heading" className="text-2xl font-bold sm:text-3xl">
              Why we do this free
            </h2>
            <p className="mt-4">
              Because almost nobody knows what is actually wrong with their
              report. People come to us certain that one missed EMI years ago
              ruined everything, and the real problem turns out to be a closed
              loan still showing a balance, or an account that was never theirs.
              You cannot make a sensible decision about paying anyone until you
              know which of those you are dealing with.
            </p>
            <p className="mt-4">
              So we would rather tell you the truth than sell you something you
              may not need. A free reading costs us an hour. Charging someone for
              a dispute that was never going to succeed costs them money they
              could not spare, and costs us the only thing that actually keeps
              this business going, which is people telling other people we were
              straight with them.
            </p>
            <p className="mt-4">
              Sometimes the honest answer is that nothing on your report can be
              disputed — the entries are accurate and the record is a fair one.
              That is a real answer, not a failed enquiry. You have found out
              where you stand, you know the score is not being dragged down by a
              mistake, and you have kept your money. We will always tell you when
              that is the case.
            </p>
          </div>
        </Container>
      </section>

      {/* 8. FAQ ------------------------------------------------------ */}
      <section aria-labelledby="faq-heading">
        <Container className="py-14 sm:py-16">
          <h2 id="faq-heading" className="text-2xl font-bold sm:text-3xl">
            Common questions about the free check
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

      {/* 9. Final CTA ------------------------------------------------ */}
      <section
        aria-labelledby="cta-heading"
        className="border-t border-line bg-navy-800 text-white"
      >
        <Container className="py-14 pb-28 sm:py-16 sm:pb-28">
          <h2
            id="cta-heading"
            className="text-2xl font-bold text-white sm:text-3xl"
          >
            Send your report now and find out where you stand
          </h2>
          <p className="mt-4 max-w-2xl text-navy-100">
            One message, one PDF, and a straight answer back. Nothing to pay and
            nothing to sign up for — and if there is nothing wrong with your
            report, we will tell you that too.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={sendReportWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-16 items-center justify-center gap-3 rounded-lg bg-brand-green px-8 text-lg font-semibold text-white shadow-sm hover:bg-brand-green-dark"
            >
              <WhatsappIcon className="h-6 w-6" />
              Send my report on WhatsApp
            </a>
            <a
              href={telHref}
              className="inline-flex min-h-16 items-center justify-center gap-3 rounded-lg bg-white px-8 text-lg font-semibold text-navy-800 shadow-sm hover:bg-navy-50"
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
