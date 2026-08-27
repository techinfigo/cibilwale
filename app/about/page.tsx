import type { Metadata } from "next";
import Container from "@/components/Container";
import { siteConfig, telHref, whatsappHref } from "@/lib/config";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Who we are and why we work this way: a credit report correction service in Agra disputing genuine errors, with fixed pricing and no score promises.",
  alternates: { canonical: "/about" },
};

/* ------------------------------------------------------------------ *
 * About page copy. Used only here, so it lives in this file.
 * ------------------------------------------------------------------ */

const beliefs = [
  {
    title: "Honesty",
    body: "We tell you what we cannot do before we tell you what we can. If your report is accurate and there is nothing to dispute, you will hear that from us on day one — not after you have paid.",
  },
  {
    title: "Fixed, transparent pricing",
    body: "One price, agreed before any work starts, and it does not change later. We do not take a share of your loan and we do not add extra charges at the end.",
  },
  {
    title: "Plain language",
    body: "Credit reports are full of codes and short forms that mean nothing to normal people. We explain what each line says about you in the same words you would use with a friend.",
  },
  {
    title: "Real people you can call",
    body: `Call ${siteConfig.contactPerson} and you reach the person who actually reads your report and files your dispute. No ticket numbers, no being passed around a call centre.`,
  },
];

const process = [
  {
    title: "We read your credit report",
    body: "Line by line — every account, date, amount and status. We separate what is genuinely wrong from what is simply unwelcome, and show you the difference.",
  },
  {
    title: "We identify the genuine errors",
    body: "A wrong written off tag, a closed loan still shown as active, a settlement that was really a full payment, an account that is not yours. Then we work out which document proves it.",
  },
  {
    title: "We prepare and file the dispute",
    body: "The dispute goes to the credit bureau, and to the lender who reported the entry, through their own official channels — the same route the RBI and CIC rules lay down for every borrower.",
  },
  {
    title: "We follow up until they respond",
    body: "Bureaus are required to investigate a dispute within 30 days. If a lender is slow to reply, we keep chasing until there is an answer, and we send you each update as it comes.",
  },
];

const whoWeHelp = [
  "People refused a loan or credit card and told only that their score is low",
  "People carrying an old written-off account they thought was settled years ago",
  "People whose closed loan still shows as active or overdue in the report",
  "People who simply cannot understand what their credit report is saying",
  "Small business owners who need a clean report before applying for finance",
];

const honestNotes = [
  "We can only correct genuine errors. Our work is finding entries that do not match the facts and proving it with documents.",
  "We cannot remove accurate negative information. If a default or a late payment really happened, it stays on your report for as long as the rules require.",
  "We never guarantee a score number. Credit bureaus calculate the score from your whole history — no one outside them can promise a figure or a date.",
];

/* Inline SVG icons — no image files, nothing extra to download. */

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

export default function AboutPage() {
  const aboutWhatsapp = whatsappHref(
    "Hi Cibil Wale, I read your About page and I have a question about my credit report."
  );

  return (
    <>
      {/* 1. Hero ---------------------------------------------------- */}
      <section className="bg-navy-800 text-white">
        <Container className="py-14 sm:py-20">
          <p className="text-sm font-semibold tracking-wide text-navy-100 uppercase">
            About us
          </p>
          <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            About {siteConfig.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-navy-100">
            Every day in India, people are refused a loan because of something
            written in their credit report — an old account marked wrongly, a
            paid loan still shown as unpaid, sometimes a loan that was never
            theirs. Most of them are never told what the entry is, and have no
            idea it can be corrected. We exist to fix that.
          </p>
        </Container>
      </section>

      {/* 2. Our story ----------------------------------------------- */}
      <section aria-labelledby="story-heading">
        <Container className="py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2 id="story-heading" className="text-2xl font-bold sm:text-3xl">
              Our story
            </h2>
            <p className="mt-4">
              {siteConfig.name} works out of {siteConfig.cityState}, and helps
              customers in every part of the country. The whole process happens
              over WhatsApp, phone and email, so it makes no difference whether
              you are in {siteConfig.city}, Mumbai or a small town nobody has
              heard of.
            </p>
            <p className="mt-4">
              We started because credit repair in India is usually one of two
              things. Either it is priced far beyond what a normal family can
              pay, or it is dishonest — agents promising to wipe a report clean,
              claiming inside contacts at the bureaus, quoting a score they will
              deliver by next month. None of that is real, and people who have
              already been refused a loan end up losing money on top.
            </p>
            <p className="mt-4">
              So we do the plain version of the job. Read the report properly.
              Point out the entries that are genuinely wrong. Dispute those
              through the official process, at a price you agreed in advance. And
              when there is nothing wrong to dispute, say so and let you keep
              your money.
            </p>
          </div>
        </Container>
      </section>

      {/* 3. What we believe ------------------------------------------ */}
      <section
        aria-labelledby="beliefs-heading"
        className="border-y border-line bg-surface"
      >
        <Container className="py-14 sm:py-16">
          <h2 id="beliefs-heading" className="text-2xl font-bold sm:text-3xl">
            What we believe
          </h2>
          <p className="mt-3 max-w-2xl">
            Four rules we do not bend, even when bending them would earn us more.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {beliefs.map((belief) => (
              <li key={belief.title} className="flex gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-green-light text-brand-green">
                  <CheckIcon />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{belief.title}</h3>
                  <p className="mt-1.5 text-[0.95rem]">{belief.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 4. How we work ---------------------------------------------- */}
      <section aria-labelledby="process-heading">
        <Container className="py-14 sm:py-16">
          <h2 id="process-heading" className="text-2xl font-bold sm:text-3xl">
            How we work
          </h2>
          <p className="mt-3 max-w-2xl">
            Correcting a credit report is a proper, regulated process — not a
            shortcut, a trick, or a favour from someone on the inside. Every
            borrower in India has the right to dispute a wrong entry. Here is how
            we use it for you.
          </p>

          <ol className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {process.map((step, index) => (
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
            We use nothing except the official dispute channels of the credit
            bureaus and lenders, exactly as the RBI and credit information
            company rules require. We never pose as you, we never approach anyone
            off the record, and we never ask a bureau to delete a record that is
            correct. You could raise the same dispute yourself for free — what
            you pay us for is the reading, the paperwork and the follow-up.
          </p>
        </Container>
      </section>

      {/* 5. Who we help ---------------------------------------------- */}
      <section
        aria-labelledby="who-heading"
        className="border-y border-line bg-surface"
      >
        <Container className="py-14 sm:py-16">
          <h2 id="who-heading" className="text-2xl font-bold sm:text-3xl">
            Who we help
          </h2>
          <p className="mt-3 max-w-2xl">
            If you recognise yourself in any of these, your report is worth a
            look.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {whoWeHelp.map((person) => (
              <li
                key={person}
                className="flex gap-3 rounded-xl border border-line bg-white p-5"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-green-light text-brand-green">
                  <CheckIcon />
                </span>
                <span className="text-[0.95rem]">{person}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 6. An honest note ------------------------------------------- */}
      <section aria-labelledby="honest-heading">
        <Container className="py-14 sm:py-16">
          <div className="max-w-3xl rounded-xl border border-line bg-white p-6 sm:p-8">
            <h2 id="honest-heading" className="text-2xl font-bold sm:text-3xl">
              An honest note
            </h2>
            <p className="mt-4">
              We would rather lose a customer than mislead one, so please read
              this part before you contact us.
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

      {/* 7. CTA ------------------------------------------------------ */}
      <section
        aria-labelledby="cta-heading"
        className="border-t border-line bg-navy-800 text-white"
      >
        <Container className="py-14 pb-28 sm:py-16 sm:pb-28">
          <h2
            id="cta-heading"
            className="text-2xl font-bold text-white sm:text-3xl"
          >
            Talk to us before you decide
          </h2>
          <p className="mt-4 max-w-2xl text-navy-100">
            Send us your credit report and we will tell you what is wrong with
            it. The first analysis is free, and if we cannot help you we will say
            so straight away.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={aboutWhatsapp}
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
