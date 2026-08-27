import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import JumpNav from "@/components/JumpNav";
import Fold from "@/components/Fold";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { siteConfig, telHref, whatsappHref } from "@/lib/config";

export const metadata: Metadata = {
  title: "Settled Status in CIBIL Report — How to Change It to Closed",
  description:
    "Report says settled when you paid in full? Learn why lenders read settled as a loss, and when the status can be disputed to closed. Free first check.",
  alternates: { canonical: "/services/settled-to-closed" },
};

/* ------------------------------------------------------------------ *
 * Page copy. Written to answer the questions people actually search
 * for, in the order they usually ask them.
 * ------------------------------------------------------------------ */

const canBeCorrected = [
  {
    title: "You paid the full amount, not a reduced one",
    body: "The most common case we see. Nothing was waived — you cleared the entire outstanding, sometimes late, and the account was still tagged settled. If the money that left your bank matches the full dues, the status should read closed.",
  },
  {
    title: "Your NOC says full and final with no waiver",
    body: "Where the lender's own closure letter or No Objection Certificate records full payment of the outstanding, a settled tag contradicts the lender's own document. That contradiction is the strongest kind of dispute there is.",
  },
  {
    title: "You paid the balance after the settlement",
    body: "Some borrowers agree a settlement, then later pay the waived portion too, so the lender ends up with everything it was owed. When that happens the status should be updated, and very often nobody does it.",
  },
  {
    title: "The settled amount or the waiver figure is wrong",
    body: "A written-in waiver larger than what was actually agreed, an outstanding higher than what you ever owed, or dates that contradict your payment record. Each is a factual error the bureau can be asked to check.",
  },
  {
    title: "The account is not yours",
    body: "Settled entries turn up under the wrong PAN, a similar name or an old address you never used. If you never held that loan or card, the entry should not be in your file at all.",
  },
  {
    title: "The account is showing twice",
    body: "One closure reported by both the original lender and a recovery agency can leave two entries for the same debt — often one closed and one settled, which reads far worse than the truth.",
  },
];

const steps = [
  {
    title: "We review the report",
    body: "First we read what the entry actually says: the status, the amount written as settled, any waiver figure, the date of last payment and whether the same account appears more than once. That decides whether a dispute has a basis.",
  },
  {
    title: "We match it against what you paid",
    body: "Your receipts and bank statement are lined up against the lender's version, rupee for rupee. If you paid everything and the report says otherwise, that gap is the dispute. If a genuine waiver happened, we tell you so.",
  },
  {
    title: "We collect the closure documents",
    body: "The NOC, the full and final settlement letter, or the closure letter — whichever exists. If it has been lost, we help you request a fresh copy from the lender, which is usually still possible years later.",
  },
  {
    title: "We raise the dispute",
    body: "The dispute goes to the credit bureau through its official process, and in parallel to the lender who reported the entry — the lender is the only party that can authorise a status change. This is the route the RBI and credit information company rules give every borrower.",
  },
  {
    title: "We follow up and confirm",
    body: "Bureaus must investigate within 30 days of receiving a dispute. We chase the lender when it goes quiet, then pull a fresh report and check the status, balance and dates to confirm the change actually landed.",
  },
];

const documents = [
  "Your latest credit report from the bureau",
  "PAN card, to confirm the report belongs to you",
  "NOC, closure letter or full and final settlement letter",
  "Payment receipts, or a bank statement showing the money leaving your account",
  "The loan or credit card account number, and the lender's name",
];

const faqs = [
  {
    q: "What is the difference between settled and closed?",
    a: "Closed means you repaid everything you owed and the account was shut in the normal way — that is the status you want to see. Settled means the lender agreed to take less than the full amount and close the account, so part of the debt was written away. To another lender reading your report, closed says you honoured the contract and settled says they took a loss on you. The words look similar; the way they are read is not.",
  },
  {
    q: "Can settled be changed to closed?",
    a: "It can, when the report does not match what actually happened — you paid the full amount and were tagged settled anyway, your NOC records full payment with no waiver, you later paid the balance that had been waived, or the account is not yours. It cannot be changed simply because settled looks bad. If the lender genuinely accepted less than it was owed, settled is the accurate word and no dispute will change it.",
  },
  {
    q: "I paid the settlement amount. Why does it still hurt me?",
    a: "Because what a lender reacts to is the waiver, not whether you paid the agreed figure. Settling means the bank recovered less than it lent, and every future lender sees that. Paying the agreed amount on time is still much better than leaving it unpaid — it stops the account deteriorating into written off — but it does not turn the entry into a clean closure.",
  },
  {
    q: "If I now pay the waived amount, will the status change to closed?",
    a: "Sometimes, and it is worth asking the lender before you pay. Some lenders will update the status once they have received the full original dues; others treat the settlement as final and will not revisit it. Get the position in writing first, because paying on a verbal assurance and then finding the report unchanged is a common and expensive disappointment. If the lender does agree, that letter becomes the proof for the dispute.",
  },
  {
    q: "How long does a settled status stay on my report?",
    a: "Years. Credit bureaus in India retain account history for a long period, and a settled status generally remains visible for around seven years from when it was reported. The bureau does not remove it on its own because time has passed. An accurate settled entry ages out in the normal course; a wrong one sits there for the whole period unless somebody disputes it.",
  },
  {
    q: "Will my score go up if the status is corrected?",
    a: `We never promise a score number or an increase. When a status is corrected from settled to closed, the score usually reflects that at the next update, because a clean closure reads very differently from a partial loss. But the size of any change depends on your whole file — other accounts, current payments, how much you owe. If you want an honest read of what your report is likely to do, send it to us on ${siteConfig.phoneDisplay} and we will tell you what we see.`,
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

export default function SettledToClosedPage() {
  const pageWhatsapp = whatsappHref(
    "Hi Cibil Wale, my credit report shows an account as settled instead of closed. Please check it for me."
  );

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Settled to Closed", path: "/services/settled-to-closed" },
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
                Settled to Closed
              </li>
            </ol>
          </nav>

          <h1 className="mt-6 h-display text-white">
            Settled Status in CIBIL Report — How to Change It to Closed
          </h1>
          <p className="mt-6 lede max-w-2xl text-navy-100">
            One word decides how every future lender reads a finished loan.
            Closed says you repaid what you owed. Settled says the bank took a
            loss on you. A great many people who paid every rupee still find
            settled sitting in their report — this page explains when that can be
            corrected, and when it cannot.
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
          { id: "meaning", label: "Settled vs closed: the difference that matters" },
          { id: "impact", label: "Why it hurts your score and your applications" },
          { id: "duration", label: "How long does it stay on your report?" },
          { id: "correctable", label: "When it can be corrected — and when it cannot" },
          { id: "process", label: "How we fix it" },
          { id: "documents", label: "What you will need" },
          { id: "faq", label: "Common questions about settled status" },
        ]}
      />

      {/* 2. What settled actually means ------------------------------ */}
      <section id="meaning" className="scroll-anchor" aria-labelledby="meaning-heading">
        <Container reveal className="section">
          <div className="max-w-3xl">
            <h2 id="meaning-heading" className="h-section">
              Settled vs closed: the difference that matters
            </h2>
            <p className="mt-4">
              These two words sit in the same box of your credit report and look
              almost interchangeable. They are not. One says you kept your side
              of the agreement; the other says you did not.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="card">
                <h3 className="h-card">Closed</h3>
                <p className="mt-2">
                  You repaid the full amount you owed and the account ended
                  cleanly. Nothing was waived, nothing was written away. This is
                  the status you want against every finished loan and card.
                </p>
              </div>
              <div className="card">
                <h3 className="h-card">Settled</h3>
                <p className="mt-2">
                  The lender agreed to accept less than the full amount and shut
                  the account. Part of what you owed — interest, penalties,
                  sometimes principal — was written away. Banks call this a
                  one-time settlement.
                </p>
              </div>
            </div>

            <p className="mt-6">
              What a lender takes from the word settled is short and blunt:{" "}
              <strong className="font-semibold text-ink">
                this borrower did not repay in full.
              </strong>{" "}
              It does not matter that the bank itself proposed the deal, or that
              you paid every rupee that was asked of you on the day. The record
              says the lender recovered less than it lent, and that is what gets
              read for years afterwards.
            </p>
            <p className="mt-4">
              This is why so many people feel misled. A settlement offer arrives
              at the worst moment — a job lost, a business gone quiet, a medical
              bill — and it sounds like relief. The call centre calls it a
              discount and a fresh start. Almost nobody is told that accepting it
              puts a mark on the report that can block loans and cards for the
              better part of a decade. If that describes what happened to you,
              you were not careless; you were not told.
            </p>
            <p className="mt-4">
              There is a third word worth knowing, because reports often confuse
              them:{" "}
              <Link
                href="/services/written-off-removal"
                className="link-green"
              >
                written off
              </Link>{" "}
              means the lender gave up on recovery altogether. It is harsher than
              settled, and it is sometimes applied to accounts that were properly
              settled.
            </p>
          </div>
        </Container>
      </section>

      {/* 3. Why it hurts --------------------------------------------- */}
      <section
        id="impact"
        aria-labelledby="impact-heading"
        className="scroll-anchor band-mint"
      >
        <Container reveal className="section">
          <div className="max-w-3xl">
            <h2 id="impact-heading" className="h-section">
              Why it hurts your score and your applications
            </h2>
            <p className="mt-4">
              Credit scoring rewards one thing above all: repaying in full, on
              time. A settled status is a formal record that this did not happen,
              so the score takes a knock and keeps carrying it for years — nothing
              like as harshly as a write-off, but far more than most people
              expect from an account they consider finished.
            </p>
            <p className="mt-4">
              The practical effect is often worse than the number suggests:
            </p>
            <ul className="mt-4 space-y-2.5">
              {[
                "Loan applications refused, or approved only at a higher interest rate to price in the risk",
                "Credit card limits kept low, and premium cards declined outright",
                "Home loan files sent for extra scrutiny, with an explanation demanded for the settled account",
                "Some lenders refusing any file with a settled entry inside a certain number of years, whatever the score says",
                "Balance transfers and top-up loans quietly rejected without a reason being given",
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
              That is a reasonable way for a lender to behave if you really did
              pay less than you owed. It is unfair when you paid every rupee and
              the account was simply tagged wrongly.
            </p>
          </div>
        </Container>
      </section>

      {/* 4. How long it stays ---------------------------------------- */}
      <section id="duration" className="scroll-anchor" aria-labelledby="duration-heading">
        <Container reveal className="section">
          <div className="max-w-3xl">
            <h2 id="duration-heading" className="h-section">
              How long does it stay on your report?
            </h2>
            <p className="mt-4">
              Years, not months. Credit bureaus in India retain account history
              for a long period, and a settled status generally remains visible
              for around seven years from when it was reported. For most of that
              time it goes on shaping how lenders read your file.
            </p>
            <p className="mt-4">
              Two situations get confused with each other, and the difference
              decides what you should do:
            </p>
            <ul className="mt-4 space-y-2.5">
              <li className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="bullet-dot"
                />
                <span>
                  <strong className="font-semibold text-ink">
                    An accurate settled entry ages out.
                  </strong>{" "}
                  If a real waiver happened, the entry stays for its full
                  retention period and drops off in the normal course. Nothing
                  you or we do makes that happen sooner.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="bullet-dot"
                />
                <span>
                  <strong className="font-semibold text-ink">
                    A wrong status has to be disputed.
                  </strong>{" "}
                  If you paid in full and were tagged settled anyway, waiting
                  achieves nothing — it will sit there wrongly for the whole
                  period unless somebody raises it with the bureau and the
                  lender.
                </span>
              </li>
            </ul>
            <p className="mt-5">
              So the question worth asking is not how long it lasts. It is
              whether the word in your report matches what you actually paid.
            </p>
          </div>
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

          <h3 className="mt-8 text-lg font-semibold">
            It can be corrected when:
          </h3>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5">
            {canBeCorrected.map((item) => (
              <li
                key={item.title}
                className="card"
              >
                <div className="flex gap-3">
                  <span className="icon-tile icon-round">
                    <CheckIcon />
                  </span>
                  <div>
                    <h4 className="font-semibold text-ink">{item.title}</h4>
                    <p className="mt-2">{item.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="card mt-10 max-w-3xl">
            <h3 className="h-card">
              It cannot simply be changed when:
            </h3>
            <p className="mt-3">
              You genuinely paid less than you owed and the lender genuinely
              waived the rest. Settled is then the accurate word for what
              happened, and no service — ours or anyone else&rsquo;s — can have
              it rewritten as closed. If that is your case we will tell you on
              the first call and we will not charge you to file a dispute
              designed to fail.
            </p>
            <p className="mt-4">
              There is still something useful to do. Ask the lender, in writing,
              whether it will update the status if you now pay the waived
              portion; some will, some will not, and the answer is worth having
              before you spend the money. Meanwhile keep every other account
              clean, because a settled entry surrounded by years of on-time
              payments reads very differently from one sitting in a damaged file.
            </p>
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
            Reports often carry more than one problem — a settled status on one
            loan and a{" "}
            <Link
              href="/services/written-off-removal"
              className="link-green"
            >
              written off tag
            </Link>{" "}
            or wrong{" "}
            <Link
              href="/services/overdue-dpd-correction"
              className="link-green"
            >
              DPD marks
            </Link>{" "}
            on another. We handle them together rather than charging you twice
            for one round of work.
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
              The NOC matters most here, because it is the lender&rsquo;s own
              record of what was paid. Lost it? A fresh copy can usually still be
              obtained, and helping you ask for it is part of the job.
            </p>
            </Fold>
          </div>
        </Container>
      </section>

      {/* 8. FAQ ------------------------------------------------------ */}
      <section id="faq" className="scroll-anchor" aria-labelledby="faq-heading">
        <Container reveal className="section">
          <h2 id="faq-heading" className="h-section">
            Common questions about settled status
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
            We will compare the settled entry against what you actually paid and
            tell you honestly whether there is a genuine error to dispute. If the
            status is correct, we will say so — no fee, no pressure.
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
