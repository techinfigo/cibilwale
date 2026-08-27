import type { Metadata } from "next";
import Container from "@/components/Container";
import { siteConfig, telHref, whatsappHref } from "@/lib/config";

export const metadata: Metadata = {
  title: "Pricing — Simple, Fixed Prices for Credit Report Correction",
  description:
    "Fixed prices for CIBIL report correction, agreed before work starts. The first report reading is free, there is no monthly fee and no hidden charges.",
  alternates: { canonical: "/pricing" },
};

/* ================================================================== *
 *  PLACEHOLDER PRICING — CONFIRM WITH CLIENT BEFORE LAUNCH
 *  ----------------------------------------------------------------
 *  Every plan name, price and feature shown on this page comes from
 *  the array below and nowhere else. To change the pricing, edit only
 *  this array — no other part of the file needs touching.
 *
 *    name        Plan title on the card.
 *    price       Displayed exactly as written, so keep the ₹ symbol.
 *    priceNote   Small grey line under the price. Use "" to hide it.
 *    summary     One-line description under the plan name.
 *    features    Bullet list, each with a green check icon.
 *    badge       Ribbon above the card. Use "" for no badge.
 *    highlight   true draws the green emphasis border. Keep to one plan.
 *    ctaLabel    Text on the WhatsApp button.
 *    ctaMessage  Pre-filled WhatsApp message for this plan.
 * ================================================================== */

const plans = [
  {
    name: "Free Report Analysis",
    price: "₹0",
    priceNote: "No obligation",
    summary:
      "We read your credit report and tell you exactly what is wrong and what can be disputed.",
    features: [
      "Full line-by-line reading of your report",
      "A plain-language list of what is pulling your score down",
      "Which entries look like genuine errors",
      "Which of those can realistically be disputed",
      "What you can improve yourself, at no cost",
    ],
    badge: "",
    highlight: false,
    ctaLabel: "Send report on WhatsApp",
    ctaMessage:
      "Hi Cibil Wale, I would like the free report analysis. I am sending my credit report.",
  },
  {
    name: "Single Correction",
    price: "₹2,499",
    priceNote: "One item, one bureau",
    summary:
      "For a report with one clear problem — a wrong status, a wrong amount or a single incorrect entry.",
    features: [
      "One disputed item on one bureau",
      "All documents prepared for you",
      "Dispute filed with the bureau and the lender",
      "Follow-up until the bureau responds",
      "Updated report checked and shared with you",
    ],
    badge: "",
    highlight: false,
    ctaLabel: "Ask about this plan",
    ctaMessage:
      "Hi Cibil Wale, I am interested in the Single Correction plan. Please tell me more.",
  },
  {
    name: "Full Report Cleanup",
    price: "₹4,999",
    priceNote: "All errors, all four bureaus",
    summary:
      "For a report with several problems, or when you do not yet know how many there are.",
    features: [
      "Every error we identify on your report",
      "Multiple disputes handled together",
      "All four bureaus checked, not only CIBIL",
      "All documents prepared for you",
      "Follow-up on each dispute until it is answered",
      "Final verification on a fresh report",
    ],
    badge: "MOST POPULAR",
    highlight: true,
    ctaLabel: "Ask about this plan",
    ctaMessage:
      "Hi Cibil Wale, I am interested in the Full Report Cleanup plan. Please tell me more.",
  },
  {
    name: "Business / MSME",
    price: "from ₹9,999",
    priceNote: "Priced after review",
    summary:
      "For companies and proprietors whose commercial credit record is blocking finance.",
    features: [
      "Commercial credit report and CMR review",
      "Company and director reports checked together",
      "Dispute handling on the entries that are wrong",
      "Priority support throughout",
      "A written summary you can share with your lender",
    ],
    badge: "",
    highlight: false,
    ctaLabel: "Discuss my business case",
    ctaMessage:
      "Hi Cibil Wale, I need help with a business or MSME credit report. Please tell me more.",
  },
];

/* ================================================================== *
 *  END PLACEHOLDER PRICING
 * ================================================================== */

const included = [
  {
    title: "WhatsApp updates at every stage",
    body: "You hear from us when the dispute is filed, when the bureau replies and when anything changes in between. No portal to log into and no chasing us for news.",
  },
  {
    title: "All documents prepared for you",
    body: "We draft the dispute, put the paperwork in the order the bureau expects, and tell you exactly which papers to send. Disputes are refused on technicalities more often than on merit.",
  },
  {
    title: "Filed under the official RBI and CIC process",
    body: "Every dispute goes through the bureau's own dispute channel and to the lender that reported the entry. The route the rules give every borrower — no shortcut, no contact on the inside.",
  },
  {
    title: "A real person you can call",
    body: `${siteConfig.contactPerson} and the team are in ${siteConfig.cityState} and you can ring them on ${siteConfig.phoneDisplay}. Not a call centre, not a ticket number.`,
  },
];

const notCharged = [
  "Reading your credit report and telling you what is in it",
  "Telling you honestly when nothing on your report can be disputed",
  "Answering your questions before you decide anything",
  "Explaining what you can fix yourself without paying us",
];

const faqs = [
  {
    q: "When do I pay?",
    a: "After the free reading and after you have agreed the price, and never before you know what the work involves. We read your report, tell you what we found and what it would cost to take forward, and you decide. Nothing is charged for the analysis itself, whatever it turns up.",
  },
  {
    q: "What happens if the dispute is rejected?",
    a: "You are told straight away, with whatever reason the bureau or lender gave. Sometimes a rejection is a paperwork problem we can answer and refile; sometimes the lender has confirmed its record is correct, and then we say so rather than keep you hoping. The fee pays for the work of preparing, filing and following up a dispute properly — it is not a bet on the outcome, because no one controls what the bureau decides. We tell you that before you pay, not afterwards.",
  },
  {
    q: "Do you offer refunds?",
    a: "If we take your money and then find there is nothing genuine to dispute, you get it back — we should have caught that in the free reading. Once a dispute has been prepared and filed, the work is done and the fee stands whatever the bureau decides, for the reason above. What we will not do is take a case we do not believe in and then keep the fee: if your report looks accurate we say so at the start, before there is anything to refund.",
  },
  {
    q: "Is there any monthly charge?",
    a: "No. There is no subscription, no monthly retainer and no renewal. You pay once for the correction work you agreed to, and that is the end of it. Services that bill you every month for vague ongoing access are one of the things we built this business against.",
  },
  {
    q: "Do you take a share of my loan amount?",
    a: `No. Our fee is fixed and has nothing to do with what you borrow afterwards or from whom. We are not agents for any bank or NBFC, we do not arrange loans, and nobody pays us a commission for sending you their way. If you want to check anything on this page before you commit, call ${siteConfig.phoneDisplay} and ask.`,
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

export default function PricingPage() {
  const pageWhatsapp = whatsappHref(
    "Hi Cibil Wale, I have a question about your pricing."
  );

  return (
    <>
      {/* 1. Hero ---------------------------------------------------- */}
      <section className="hero-navy">
        <Container className="section-hero">
          <p className="eyebrow text-navy-100">
            Pricing
          </p>
          <h1 className="mt-4 h-display text-white">
            Simple, Fixed Pricing
          </h1>
          <p className="mt-6 lede max-w-2xl text-navy-100">
            You know the price before we start, and it does not change later.
            There are no hidden charges, no monthly fee and no cut of your loan
            amount. The first check — reading your report and telling you what is
            wrong with it — costs nothing at all.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={pageWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <WhatsappIcon />
              Ask about pricing
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

      {/* 2. Pricing cards -------------------------------------------- */}
      <section aria-labelledby="plans-heading">
        <Container reveal className="section">
          <h2 id="plans-heading" className="h-section">
            Our plans
          </h2>
          <p className="mt-3 max-w-3xl lede">
            Pick the one that sounds like your situation, or send the report
            first and let us tell you which fits. If you are not sure how many
            problems your report has, start with the free reading — that is what
            it is for.
          </p>

          <ul className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {plans.map((plan) => (
              <li
                key={plan.name}
                className={`card ${
                  plan.highlight
                    ? "card-highlight lg:scale-[1.035]"
                    : ""
                }`}
              >
                {plan.badge ? (
                  <p className="badge badge-green mb-4 w-fit">{plan.badge}</p>
                ) : null}

                <h3 className="h-sub">{plan.name}</h3>

                <p className="mt-4 text-5xl font-extrabold tracking-tight text-navy-800">
                  {plan.price}
                </p>
                {plan.priceNote ? (
                  <p className="mt-2 text-sm font-semibold text-muted">
                    {plan.priceNote}
                  </p>
                ) : null}

                <p className="mt-5">{plan.summary}</p>

                <ul className="mt-4 grow space-y-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2.5">
                      <span className="icon-tile icon-tile-sm icon-round">
                        <CheckIcon />
                      </span>
                      <span >{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappHref(plan.ctaMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-8"
                >
                  <WhatsappIcon />
                  {plan.ctaLabel}
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-5 max-w-3xl">
            Prices are for the correction work itself. Where a bureau charges for
            a report copy, or a document has to be couriered, we tell you the
            amount before it is spent.
          </p>
        </Container>
      </section>

      {/* 3. What is included in every plan ---------------------------- */}
      <section
        aria-labelledby="included-heading"
        className="band-mint"
      >
        <Container reveal className="section">
          <h2 id="included-heading" className="h-section">
            What is included in every plan
          </h2>
          <p className="mt-3 max-w-3xl lede">
            These are not extras and they are not charged separately. They come
            with any paid plan, whichever one you take.
          </p>

          <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5">
            {included.map((item) => (
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
        </Container>
      </section>

      {/* 4. What we do not charge for -------------------------------- */}
      <section aria-labelledby="free-heading">
        <Container reveal className="section">
          <div className="max-w-3xl">
            <h2 id="free-heading" className="h-section">
              What we do not charge for
            </h2>
            <p className="mt-4">
              Plenty of people contact us, get an answer and never pay us
              anything. That is how it is supposed to work — you should not have
              to pay to find out whether you have a problem worth fixing.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
              {notCharged.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className="icon-tile icon-tile-sm icon-round">
                    <CheckIcon />
                  </span>
                  <span >{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6">
              If the honest answer is that your report is accurate and there is
              nothing to dispute, you will hear that from us for free — and you
              will have saved the fee you were about to spend.
            </p>
          </div>
        </Container>
      </section>

      {/* 5. No hidden charges ---------------------------------------- */}
      <section
        aria-labelledby="hidden-heading"
        className="band-mint"
      >
        <Container reveal className="section">
          <div className="max-w-3xl">
            <h2 id="hidden-heading" className="h-section">
              No hidden charges
            </h2>
            <p className="mt-4">
              The number you agree at the start is the number you pay. Nothing is
              added at the end, and nothing appears on your bill that you were
              not told about first.
            </p>
            <ul className="mt-4 space-y-2.5">
              <li className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="bullet-dot"
                />
                <span>
                  <strong className="font-semibold text-ink">
                    The price is agreed before work starts.
                  </strong>{" "}
                  We tell you the figure, you approve it, and only then does
                  anything begin.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="bullet-dot"
                />
                <span>
                  <strong className="font-semibold text-ink">
                    There is no monthly fee.
                  </strong>{" "}
                  No subscription, no retainer, no renewal. You pay once for the
                  work you agreed to.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="bullet-dot"
                />
                <span>
                  <strong className="font-semibold text-ink">
                    Any bureau or courier cost is told to you upfront.
                  </strong>{" "}
                  If a report copy has to be bought or a document posted, you
                  hear the amount before it is spent — never as a surprise
                  afterwards.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="bullet-dot"
                />
                <span>
                  <strong className="font-semibold text-ink">
                    We take no share of your loan.
                  </strong>{" "}
                  What you borrow afterwards, and from whom, is nothing to do
                  with our fee.
                </span>
              </li>
            </ul>
          </div>
        </Container>
      </section>

      {/* 6. Why we are not the cheapest or the most expensive --------- */}
      <section aria-labelledby="position-heading">
        <Container reveal className="section">
          <div className="max-w-3xl">
            <h2 id="position-heading" className="h-section">
              Why we are not the cheapest, or the most expensive
            </h2>
            <p className="mt-4">
              Credit repair in India is priced at two extremes, and neither of
              them is built around what you actually need done.
            </p>
            <p className="mt-4">
              At one end are services charging a few hundred rupees. For that
              money nobody is disputing anything on your behalf — you are buying
              a report, or a score you could have seen for free, and the work of
              fixing what is in it is still entirely yours.
            </p>
            <p className="mt-4">
              At the other end are firms charging tens of thousands for months of
              vague expert access. The fee is not tied to any particular piece of
              work, so it is impossible to tell what you got for it, and the
              longer it runs the more it costs.
            </p>
            <p className="mt-4">
              We charge per correction. You can see exactly what the fee covers —
              this many disputed items, prepared, filed and followed up — and you
              can tell when the work is finished. That is the whole reason for
              pricing it this way.
            </p>
          </div>
        </Container>
      </section>

      {/* 7. Honest note ---------------------------------------------- */}
      <section
        aria-labelledby="honest-heading"
        className="band-mint"
      >
        <Container reveal className="section">
          <div className="card max-w-3xl">
            <h2 id="honest-heading" className="h-section">
              An honest note before you pay anyone
            </h2>
            <p className="mt-4">
              We dispute genuine errors. That is the whole of what this service
              is. If the entry on your report is accurate — the amount is right,
              the dates are right and the money really was unpaid — then there is
              nothing to dispute, and no service in India can have a true entry
              removed for a fee. Anyone telling you otherwise is selling
              something they cannot deliver.
            </p>
            <p className="mt-4">
              We never guarantee a score. We do not promise a number, an increase
              or a date, because the bureau calculates the score and the lender
              controls how fast it responds. What a correction does is take a
              wrong entry off your record; what your score does after that
              depends on your whole credit history.
            </p>
            <p className="mt-4">
              And if we cannot help you, we will say so and not take your money.
              That conversation happens at the start, after the free reading,
              before anybody has paid anything — which is the only point at which
              it is any use to you.
            </p>
          </div>
        </Container>
      </section>

      {/* 8. FAQ ------------------------------------------------------ */}
      <section aria-labelledby="faq-heading">
        <Container reveal className="section">
          <h2 id="faq-heading" className="h-section">
            Common questions about pricing
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
            Not sure which plan you need?
          </h2>
          <p className="mt-5 lede max-w-2xl text-navy-100">
            Send the report first. We will read it free, tell you what is wrong,
            and only then talk about what it would cost to fix — if it can be
            fixed at all.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={pageWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <WhatsappIcon />
              Message us on WhatsApp
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
