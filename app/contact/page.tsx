import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import {
  mailtoHref,
  siteConfig,
  telHref,
  whatsappHref,
} from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact Us — Talk to a Real Person About Your Credit Report",
  description:
    "Reach Cibil Wale on WhatsApp, phone or email. Based in Agra, Uttar Pradesh and working with people across India — the whole process is handled remotely, so nobody needs to travel to us. We never ask for bank passwords or OTPs.",
  alternates: { canonical: "/contact" },
};

/* ================================================================== *
 *  PLACEHOLDER — CONFIRM WITH CLIENT
 *  ----------------------------------------------------------------
 *  Office hours below have not been confirmed by the business owner.
 *  Check the days, the timings and the closed day before launch, then
 *  edit this block. Nothing else on the page needs changing.
 * ================================================================== */

const officeHours = [
  { days: "Monday to Friday", hours: "10:00 AM to 7:00 PM" },
  { days: "Saturday", hours: "10:00 AM to 7:00 PM" },
  { days: "Sunday", hours: "Closed" },
];

/* ================================================================== *
 *  END PLACEHOLDER
 * ================================================================== */

const whatToSend = [
  {
    title: "Your credit report PDF, if you have it",
    body: "The full report, not a screenshot of the score or a summary page from a banking app. If you do not have it yet, say so and we will walk you through downloading it — that help is free too.",
  },
  {
    title: "One line about the problem",
    body: "You do not need to explain everything at once. “My report shows written off” or “I closed this loan and it still shows a balance” is enough for us to know where to start looking.",
  },
  {
    title: "Whether a loan has been refused recently",
    body: "If a bank has said no, tell us which kind of loan and roughly when. A recent refusal usually points straight at what is wrong, and it tells us how urgent this is for you.",
  },
];

const afterYouMessage = [
  {
    title: "We reply and ask for the report if we need it",
    body: "A person reads your message and answers it. If we need your credit report to say anything useful, we ask for it then — and help you get it if you do not have one.",
  },
  {
    title: "We read it and tell you what we found",
    body: "Line by line, then back to you in plain language: what is on the report, which entries are hurting you, which look like genuine errors, and what could be disputed.",
  },
  {
    title: "You decide whether to go ahead",
    body: "If there is work worth doing we tell you what it costs before anything starts. If there is not, we say so. There are no automatic charges and nothing happens without your agreement.",
  },
];

const faqs = [
  {
    q: "Do I need to visit your office?",
    a: "No. Nothing about this work needs you to travel. The whole process runs on WhatsApp, phone and email — you send the report and your documents, we prepare and file the disputes, and the updated report comes back to you the same way. Most of the people we work with we have never met in person, and it makes no difference to the outcome.",
  },
  {
    q: "Do you work with people outside Agra?",
    a: `Yes. We are based in ${siteConfig.cityState}, but credit bureaus and lenders are dealt with remotely wherever you are, so your city makes no difference to what we can do. We work with people across India — metros, small towns and villages alike — and the process is identical for all of them.`,
  },
  {
    q: "Which languages do you speak?",
    a: "Hindi and English, whichever you are comfortable with. Say so in your first message and we will carry on in that language. Credit reports are written in English and full of technical terms, so if English is not comfortable for you, being able to have the whole thing explained in Hindi tends to matter a great deal.",
  },
  {
    q: "How quickly do you reply?",
    a: `Usually within a few hours during working hours, and often much sooner on WhatsApp. Messages that arrive in the evening or on a Sunday are answered the next working day. If something is urgent — a recovery call, a notice, or a loan decision waiting — say that in the message and call ${siteConfig.phoneDisplay} as well, and we will get to it first.`,
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

function LocationIcon() {
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
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

function ClockIcon() {
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
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.2 2" />
    </svg>
  );
}

function EmailIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
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

function PhoneIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.4 21 3 13.6 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
    </svg>
  );
}

export default function ContactPage() {
  const pageWhatsapp = whatsappHref(
    "Hi Cibil Wale, I need help with my credit report. Please tell me what to send."
  );

  return (
    <>
      {/* 1. Hero ---------------------------------------------------- */}
      <section className="bg-navy-800 text-white">
        <Container className="py-14 sm:py-20">
          <p className="text-sm font-semibold tracking-wide text-navy-100 uppercase">
            Contact
          </p>
          <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Contact {siteConfig.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-navy-100">
            Talk to a real person, not a chatbot. Message us on WhatsApp, ring us,
            or send an email — whichever suits you. {siteConfig.contactPerson} and
            the team read every message themselves, and you will get a straight
            answer rather than an automated reply.
          </p>
        </Container>
      </section>

      {/* 2. Contact methods ------------------------------------------ */}
      <section aria-labelledby="methods-heading">
        <Container className="py-14 sm:py-16">
          <h2 id="methods-heading" className="text-2xl font-bold sm:text-3xl">
            How to reach us
          </h2>
          <p className="mt-3 max-w-3xl">
            Three ways, all of them going to the same people. WhatsApp is the
            fastest, and it is the easiest way to send your report.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {/* WhatsApp */}
            <li className="flex flex-col rounded-xl border border-brand-green bg-white p-6 ring-1 ring-brand-green">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-green-light text-brand-green">
                <WhatsappIcon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">WhatsApp</h3>
              <p className="mt-2 grow text-[0.95rem]">
                The fastest way to reach us, and the simplest way to send your
                credit report — attach the PDF and we will read it. Best if you
                would rather type than talk.
              </p>
              <p className="mt-4 text-base font-semibold text-navy-800">
                {siteConfig.phoneDisplay}
              </p>
              <a
                href={pageWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-brand-green px-6 text-base font-semibold text-white shadow-sm hover:bg-brand-green-dark"
              >
                <WhatsappIcon />
                Message on WhatsApp
              </a>
            </li>

            {/* Phone */}
            <li className="flex flex-col rounded-xl border border-line bg-white p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-green-light text-brand-green">
                <PhoneIcon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">Phone</h3>
              <p className="mt-2 grow text-[0.95rem]">
                Speak to someone directly. Best when the situation is
                complicated, or when you would simply rather explain it out loud
                than write it down.
              </p>
              <a
                href={telHref}
                className="mt-4 block text-base font-semibold text-navy-800 underline underline-offset-2"
              >
                {siteConfig.phoneDisplay}
              </a>
              <a
                href={telHref}
                className="mt-4 inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-navy-800 px-6 text-base font-semibold text-white shadow-sm hover:bg-navy-700"
              >
                <PhoneIcon />
                Call now
              </a>
            </li>

            {/* Email */}
            <li className="flex flex-col rounded-xl border border-line bg-white p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-green-light text-brand-green">
                <EmailIcon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">Email</h3>
              <p className="mt-2 grow text-[0.95rem]">
                Best for documents and longer, detailed questions — anything you
                want written down and kept, or a set of files too large to send
                comfortably on WhatsApp.
              </p>
              <a
                href={mailtoHref}
                className="mt-4 block text-base font-semibold break-all text-navy-800 underline underline-offset-2"
              >
                {siteConfig.email}
              </a>
              <a
                href={mailtoHref}
                className="mt-4 inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-navy-800 px-6 text-base font-semibold text-white shadow-sm hover:bg-navy-700"
              >
                <EmailIcon />
                Send an email
              </a>
            </li>
          </ul>
        </Container>
      </section>

      {/* 3. Where we are --------------------------------------------- */}
      <section
        aria-labelledby="where-heading"
        className="border-y border-line bg-surface"
      >
        <Container className="py-14 sm:py-16">
          <div className="max-w-3xl rounded-xl border border-line bg-white p-6 sm:p-8">
            <div className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-green-light text-brand-green">
                <LocationIcon />
              </span>
              <div>
                <h2
                  id="where-heading"
                  className="text-2xl font-bold sm:text-3xl"
                >
                  Where we are
                </h2>
                <p className="mt-4 text-lg font-semibold text-ink">
                  {siteConfig.cityState}
                </p>
              </div>
            </div>

            <p className="mt-5">
              We work with customers right across India, and your city makes no
              difference to what we can do. Credit bureaus and lenders are dealt
              with through their own official channels wherever you happen to
              live, so someone in a village in Bihar gets exactly the same
              process as someone in Agra.
            </p>
            <p className="mt-4">
              The whole thing is handled over WhatsApp, phone and email.{" "}
              <strong className="font-semibold text-ink">
                Nobody needs to travel to us.
              </strong>{" "}
              You send the report and documents from your phone, we do the work
              and keep you updated, and the corrected report comes back to you
              the same way. Most of the people we work for we have never met.
            </p>
          </div>
        </Container>
      </section>

      {/* 4. When we are available ------------------------------------ */}
      <section aria-labelledby="hours-heading">
        <Container className="py-14 sm:py-16">
          <div className="max-w-3xl rounded-xl border border-line bg-white p-6 sm:p-8">
            <div className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-green-light text-brand-green">
                <ClockIcon />
              </span>
              <div>
                <h2
                  id="hours-heading"
                  className="text-2xl font-bold sm:text-3xl"
                >
                  When we are available
                </h2>
              </div>
            </div>

            <dl className="mt-6 divide-y divide-line border-y border-line">
              {officeHours.map((row) => (
                <div
                  key={row.days}
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3"
                >
                  <dt className="font-semibold text-ink">{row.days}</dt>
                  <dd className="text-[0.95rem]">{row.hours}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-5">
              WhatsApp messages sent outside these hours are answered on the next
              working day. You are welcome to send your report whenever it suits
              you — late at night is fine, and it will be waiting for us in the
              morning.
            </p>
          </div>
        </Container>
      </section>

      {/* 5. What to send us ------------------------------------------ */}
      <section
        aria-labelledby="send-heading"
        className="border-y border-line bg-surface"
      >
        <Container className="py-14 sm:py-16">
          <h2 id="send-heading" className="text-2xl font-bold sm:text-3xl">
            What to send us
          </h2>
          <p className="mt-3 max-w-3xl">
            None of this is compulsory — a simple hello is a perfectly good
            start. But if you send these three things in the first message, we
            can usually give you a real answer straight away instead of going
            back and forth.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {whatToSend.map((item) => (
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

          <div className="mt-8 max-w-3xl rounded-xl border border-line bg-white p-6 sm:p-8">
            <h3 className="text-lg font-semibold">
              We never need passwords or OTPs
            </h3>
            <p className="mt-3">
              We will never ask for your net banking login, your bank password,
              your card PIN, your UPI PIN or any OTP — and nobody legitimate ever
              will, whoever they claim to be. All we need is your credit report
              and your PAN. If anyone asks you for more than that in our name,
              stop and call {siteConfig.phoneDisplay} to check.
            </p>
          </div>
        </Container>
      </section>

      {/* 6. What happens after you message ---------------------------- */}
      <section aria-labelledby="after-heading">
        <Container className="py-14 sm:py-16">
          <h2 id="after-heading" className="text-2xl font-bold sm:text-3xl">
            What happens after you message
          </h2>
          <p className="mt-3 max-w-3xl">
            Three steps, and you can stop after any of them.
          </p>

          <ol className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {afterYouMessage.map((step, index) => (
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
            Reading your report is free, whatever it turns up — see the{" "}
            <Link
              href="/free-credit-report"
              className="font-semibold text-brand-green underline underline-offset-2"
            >
              free credit report check
            </Link>{" "}
            for how that works, and{" "}
            <Link
              href="/pricing"
              className="font-semibold text-brand-green underline underline-offset-2"
            >
              pricing
            </Link>{" "}
            for what correction work costs if you decide to go ahead.
          </p>
        </Container>
      </section>

      {/* 7. FAQ ------------------------------------------------------ */}
      <section
        aria-labelledby="faq-heading"
        className="border-y border-line bg-surface"
      >
        <Container className="py-14 sm:py-16">
          <h2 id="faq-heading" className="text-2xl font-bold sm:text-3xl">
            Common questions about contacting us
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

      {/* 8. CTA ------------------------------------------------------ */}
      <section
        aria-labelledby="cta-heading"
        className="border-t border-line bg-navy-800 text-white"
      >
        <Container className="py-14 pb-28 sm:py-16 sm:pb-28">
          <h2
            id="cta-heading"
            className="text-2xl font-bold text-white sm:text-3xl"
          >
            Send us a message
          </h2>
          <p className="mt-4 max-w-2xl text-navy-100">
            Tell us what is happening with your report and we will tell you
            whether it is something we can help with. No cost to ask, and no
            obligation afterwards.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={pageWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-brand-green px-6 text-base font-semibold text-white shadow-sm hover:bg-brand-green-dark"
            >
              <WhatsappIcon />
              Message on WhatsApp
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
