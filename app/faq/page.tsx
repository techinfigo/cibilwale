import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import JumpNav from "@/components/JumpNav";
import { siteConfig, telHref, whatsappHref } from "@/lib/config";

export const metadata: Metadata = {
  title: "Frequently Asked Questions About CIBIL Score and Credit Reports",
  description:
    "Straight answers on CIBIL scores, report errors, the dispute process and our fees — including what no service can do, such as guarantee a score.",
  alternates: { canonical: "/faq" },
};

/* ------------------------------------------------------------------ *
 * Every question on the page lives in this one array. The visible
 * accordions and the FAQPage structured data are both generated from
 * it, so the two can never drift apart. Answers are plain strings —
 * no JSX — because the same text is serialised into the JSON-LD.
 * ------------------------------------------------------------------ */

const faqGroups = [
  {
    id: "scores",
    heading: "About credit scores",
    intro:
      "The basics, in plain language — what the number is, what counts as a good one, and why yours might be lower than you expected.",
    items: [
      {
        q: "What is a CIBIL score?",
        a: "It is a three-digit number between 300 and 900 that sums up how you have handled borrowed money. TransUnion CIBIL calculates it from the record lenders send them: which loans and cards you have held, whether you paid on time, how much you owe and how often you have applied for credit. A high number tells a lender you have repaid reliably in the past. The other three bureaus in India produce their own scores in the same way, so you have more than one — people say CIBIL score the way they say Xerox for a photocopy.",
      },
      {
        q: "What counts as a good score?",
        a: "As a rough guide, most lenders treat anything from about 750 upwards as good and are comfortable lending. Between roughly 700 and 750 you will usually still be considered, sometimes at a higher interest rate. Below about 650 things get difficult, and a low score with a written off or suit filed entry attached is harder still. But there is no official pass mark — every lender sets its own cutoff, and those cutoffs differ by product and change over time. A score that gets you a credit card may not get you a home loan.",
      },
      {
        q: "Why is my score low?",
        a: "The usual causes are late or missed payments, a default or written off account, using most of your available credit limit month after month, applying to several lenders in a short period, or having very little credit history at all. But there is one more that people never suspect: an error in the report itself. A closed loan still showing a balance, someone else's account attached to your file, or a status the lender never updated will all drag the number down for something that is not your doing. That is exactly why the first step is reading the report rather than guessing.",
      },
      {
        q: "How often does my score update?",
        a: "Lenders send their records to the bureaus on a cycle, usually monthly, and the bureau recalculates your score as new information arrives. So the number is not live — it reflects what has been reported, not what you did yesterday. Paying off a card today may not show up for a few weeks. The same applies after a correction: once a bureau accepts a dispute, the change appears at the next update rather than the same afternoon.",
      },
      {
        q: "Does checking my own score lower it?",
        a: "No. Looking at your own report is a soft enquiry and it has no effect on your score, no matter how many times you do it. What does count is a hard enquiry — the pull a lender makes when you apply for a loan or a card — and several of those in a short span make you look like you are hunting for credit. Checking your own record carries none of that risk, and you should do it before any important application.",
      },
      {
        q: "How many credit bureaus are there in India?",
        a: "Four: CIBIL TransUnion, Experian, Equifax and CRIF High Mark. Each keeps its own separate file on you, built from whatever the individual lenders chose to send it, so the four are rarely identical. A lender may check any one of them and you do not get to choose which. This also matters after a correction — fixing an error at one bureau does not fix it at the other three, and each has to be dealt with separately.",
      },
    ],
  },
  {
    id: "errors",
    heading: "About credit report errors",
    intro:
      "What can be wrong on a report, what the damaging entries actually mean, and how a stranger's loan ends up in your file.",
    items: [
      {
        q: "How common are errors in credit reports?",
        a: "Far more common than people assume. Your report is not written by one organisation — it is assembled from files that every bank, card issuer and NBFC you have borrowed from sends the bureau each month, and there is room for a mistake at every step. What makes errors dangerous is not how often they happen but how long they go unnoticed: almost nobody reads their own report until a lender says no, so a mistake made years ago has usually been quietly costing applications for a long time before anyone spots it.",
      },
      {
        q: "What counts as an error?",
        a: "Anything in the report that does not match what actually happened, and that a document can prove. A repaid loan still shown as outstanding, a status never updated after closure, a wrong amount or date, an account listed twice, an account that is not yours, or wrong personal details like name, PAN or address. What does not count is accurate information you would rather was not there. A default you genuinely made is not an error because it is unflattering, and no dispute can remove it.",
      },
      {
        q: "How did someone else's loan appear on my report?",
        a: "Because bureaus match records using a combination of PAN, name, date of birth and address rather than one perfect key. If a lender uploads a file with any of those fields wrong — a PAN with two digits transposed, a surname spelt the way it sounded over the phone, an address copied from a form filled in years ago — the record can attach to whoever else matches. Common names in a shared city make it considerably more likely. It is a data error, not something you did, and it can be disputed.",
      },
      {
        q: "What does written off mean?",
        a: "When a loan or card goes unpaid for a long stretch, the lender stops treating that money as recoverable and moves it off its active books, reporting the account to the bureaus as written off. Two things people get wrong about it: it does not cancel the debt — the lender can still pursue you — and it is one of the most damaging entries a report can carry, because it says a bank concluded you were never going to pay at all.",
      },
      {
        q: "What does suit filed mean?",
        a: "It means the lender has recorded that it took legal action against you to recover the money. For a lender reading your report it is close to the strongest warning there is, and many will refuse an application on sight of it without looking further. Reports often carry it long after the matter ended — a case that was withdrawn, settled or decided years ago can still sit there as suit filed because nobody sent the update. Where that is what happened, and you have the documents, it can be disputed.",
      },
      {
        q: "What is the difference between settled and closed?",
        a: "Closed means you repaid everything you owed and the account was shut normally — that is the status you want. Settled means the lender accepted less than the full amount to close the account, so part of what was owed was written down; it reads to a lender as a partial loss. Written off is harsher still and means recovery was abandoned altogether. Reports quite often show the harshest of the three when a milder one is what actually happened, and that mismatch is disputable.",
      },
    ],
  },
  {
    id: "dispute",
    heading: "About the dispute process",
    intro:
      "How a correction actually works — the official route, how long it takes, and what happens when it does not go your way.",
    items: [
      {
        q: "What is a credit report dispute?",
        a: "It is a formal request asking a credit bureau to check something in your report that you believe is wrong. The bureau takes it up with the lender that reported the entry, because the lender is the only party that can confirm or authorise a change, and then updates the record according to what comes back. It is a right every borrower in India has under the rules governing credit information companies — not a favour, and not something anyone needs an inside contact to do.",
      },
      {
        q: "Can I file a dispute myself?",
        a: `Yes, and if you are comfortable reading the report and dealing with the lender, you should — every bureau has its own dispute process and it costs you nothing to use it. What people pay us for is knowing which entries are genuinely disputable, preparing the paperwork so it is not rejected on a technicality, and doing the chasing afterwards. If you would rather try it yourself first, call ${siteConfig.phoneDisplay} and we will tell you how to go about it.`,
      },
      {
        q: "How long does the bureau take to respond?",
        a: "A credit bureau is required to investigate a dispute within 30 days of receiving it, and most straightforward cases close inside that window. Where the lender is slow to confirm its records, it runs longer — the bureau cannot finish until the lender answers. Simple corrections such as personal details often move quickest; removing an account that is not yours usually takes longest, because the lender has to go back through its own files.",
      },
      {
        q: "What happens if the dispute is rejected?",
        a: "You are told, along with whatever reason the bureau or lender gave. Sometimes a rejection is a paperwork problem — a document missing or the wrong proof attached — and it can be answered and refiled. Sometimes the lender has checked and confirmed its record is correct, and then the honest thing is to say so rather than keep you hoping. Nobody can force a bureau or a lender to accept a dispute; what can be done is to present the evidence properly and follow it up.",
      },
      {
        q: "Do I need to visit anywhere?",
        a: "No. Nothing about a dispute needs you to travel — not to a bureau, not to a lender's branch, and not to us. Everything runs on documents sent electronically, and the whole process can be handled from your phone wherever you live in India.",
      },
      {
        q: "What documents are needed?",
        a: "Always your credit report and your PAN, so it is clear the report belongs to you. After that it depends on what is being disputed: payment receipts or a bank statement showing the money left your account, a No Objection Certificate or closure letter for a loan you finished, loan papers where the amount or dates are wrong, or identity and address proof for a personal detail correction or an account that is not yours. You do not need to gather everything before asking — send what you have, and any gaps can usually be filled later, including asking a lender for an NOC years after the event.",
      },
    ],
  },
  {
    id: "service",
    heading: "About our service",
    intro:
      "What we actually do, what it costs, and how working with us fits around your phone rather than your calendar.",
    items: [
      {
        q: "What exactly do you do?",
        a: "We read your credit report properly, identify what is wrong with it, and take the genuine errors through the official dispute process with the bureau and the lender. That means preparing the paperwork, filing the dispute, following it up while it is being investigated, and checking a fresh report at the end to confirm the change landed. What we do not do is arrange loans, act for any bank, or contact anyone pretending to be you.",
      },
      {
        q: "What do you charge?",
        a: "The reading of your report is free. Correction work is priced at a fixed amount, agreed with you before anything starts, and it does not change afterwards. There is no monthly fee, no subscription and no share of any loan you take later. The current plans and prices are set out on our pricing page, and you will always be told the figure and asked to approve it before any work begins.",
      },
      {
        q: "Is the first check really free?",
        a: "Yes, with no catch waiting further down. We read the report and tell you what we found whatever it turns up, including when the answer is that nothing can be disputed. You are not asked for card details, you are not signed up to anything, and you are not charged for the reading even if you then go ahead with corrections. Plenty of people get the free reading and never pay us anything.",
      },
      {
        q: "How do you send updates?",
        a: "On WhatsApp, in plain language, at each stage — when the dispute is filed, when the bureau or lender replies, and when anything changes in between. There is no portal to log into and no password to remember, which matters because most of the people we work with are on a phone rather than a computer. If you would rather have a call than a message, say so and we will ring you instead.",
      },
      {
        q: "Do you work with people outside Agra?",
        a: `Yes. We are based in ${siteConfig.cityState} and we work with people right across India. Bureaus and lenders are dealt with through their own channels wherever you happen to be, so your city makes no difference to the process or the outcome, and everything is handled remotely in any case.`,
      },
      {
        q: "Which languages do you speak?",
        a: "Hindi and English, whichever you are comfortable with — just say so in your first message. Credit reports are written in English and full of technical terms, so being able to have the whole thing explained in Hindi often makes the difference between understanding your own situation and taking somebody's word for it.",
      },
    ],
  },
  {
    id: "honest",
    heading: "Important honest answers",
    intro:
      "The questions where the true answer costs us business. We would rather you read these here than find out after paying somebody.",
    items: [
      {
        q: "Can you guarantee my score will increase?",
        a: "No, and nobody can. The bureau calculates your score from your entire credit history, and no service outside it controls that number. What a correction does is take a wrong entry off your record — when that happens the score usually reflects it at the next update, but how much it moves depends on everything else in your file: your other accounts, your current payments, how much you owe. One correction on a report with other genuine problems moves less than people expect. Anyone promising you a specific number, or an increase by a certain date, is telling you something they cannot deliver.",
      },
      {
        q: "Can you remove a genuine default?",
        a: "No. If you took the loan, the amount and dates are right and the money went unpaid, that entry is an accurate record of what happened and no dispute can remove it. Nor should it — a credit report that could be cleaned of true information would be worth nothing to anybody. If that is your situation we will tell you on the first call rather than take your money for a dispute designed to fail, and we will explain the realistic route instead: clear the outstanding, get the closure documents in writing, make sure the report is updated to show nil balance, and build a clean record alongside it while the entry ages.",
      },
      {
        q: "Can you delete my whole credit history?",
        a: "No, and anyone offering to is not legitimate. Credit history cannot be wiped on request — not by us, not by an agent, not for any fee. If someone tells you they can erase your file, clear all your defaults or get you a new clean report, they are either going to take your money and disappear or attempt something dishonest in your name that leaves you carrying the consequences. Accurate entries stay for their retention period and drop off in the normal course. That is how the system is built to work.",
      },
      {
        q: "Is credit repair legal in India?",
        a: "Disputing a genuine error is entirely legitimate. Every borrower has the right to have inaccurate credit information corrected, the bureaus run official dispute processes for exactly this purpose, and helping someone use that process properly is lawful work. What is not legitimate is paying anyone to falsify or tamper with records — to have true entries deleted, to submit forged documents, or to reach someone inside a bureau or lender. That is not credit repair, it is fraud, and the person left exposed by it is you, not the agent who took the fee. We only ever use the official channels.",
      },
      {
        q: "What if you cannot help me?",
        a: `Then we tell you honestly and we do not charge you. It happens regularly — sometimes a report is simply accurate, and a score is low because the history is thin, because utilisation is high, or because payments really were late. In that case there is nothing to dispute and filing one would waste your money. What we do instead is explain what is actually holding the score back and what you can do yourself over the coming months, which costs you nothing. If you want that answer before anything else, send the report to ${siteConfig.phoneDisplay}.`,
      },
    ],
  },
  {
    id: "safety",
    heading: "Safety and your data",
    intro:
      "How to tell a genuine service from a scam, and what happens to the documents you send us.",
    items: [
      {
        q: "Will you ask for my bank password or OTP?",
        a: "Never. We will not ask for your net banking login, your bank password, your card PIN, your UPI PIN or any OTP, and there is no step in this work that requires one. Nobody legitimate ever will — not us, not a credit bureau, not your bank on a phone call. Anyone who does is trying to get into your account, whoever they claim to be. The only OTP you will legitimately use is the one a bureau sends to your own phone while you are downloading your own report on its website, and you enter that yourself and share it with no one. All we need is the report PDF and your PAN.",
      },
      {
        q: "How do I know if a credit repair service is a scam?",
        a: "A few signs are close to reliable. They guarantee a specific score or a fixed increase. They offer to delete genuine defaults or your whole credit history. They ask for your net banking password, card PIN or an OTP. They want the full fee upfront before telling you what is wrong with your report, or they refuse to put the price in writing. They claim to have contacts inside a bureau or bank. They pressure you to decide immediately. A genuine service will read your report, tell you plainly what can and cannot be done, and let you take your time.",
      },
      {
        q: "What do you do with my data?",
        a: "We use your report and documents for one purpose: reading your report, and preparing and filing disputes if you ask us to. We do not sell your details, we do not pass them to lenders, agents or anyone else, and nobody pays us for introductions. Your documents stay with the people doing the work on your case.",
      },
      {
        q: "Is my credit report safe with you?",
        a: `It is treated as what it is — a private financial document. It is not shared outside the people working on your case, it is not posted anywhere, and it is used only for the dispute you have asked for. If you would like us to delete what you sent once the work is finished, tell us and we will. If you are ever unsure whether a message really came from us, do not act on it — call ${siteConfig.phoneDisplay} and check.`,
      },
    ],
  },
];

/* Flat list for the structured data, built from the same source. */
const allFaqs = faqGroups.flatMap((group) => group.items);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

/* Inline SVG icons — no image files on this page. */

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

export default function FaqPage() {
  const pageWhatsapp = whatsappHref(
    "Hi Cibil Wale, I read your FAQ page and I still have a question about my credit report."
  );

  return (
    <>
      {/* FAQPage structured data, generated from the same array that
          renders the visible questions below. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* 1. Hero ---------------------------------------------------- */}
      <section className="hero-navy">
        <Container className="section-hero">
          <p className="eyebrow text-navy-100">
            Questions and answers
          </p>
          <h1 className="mt-4 h-display text-white">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 lede max-w-2xl text-navy-100">
            Everything people ask us about CIBIL scores, credit report errors and
            getting them corrected — including the questions where the honest
            answer is no. If yours is not here, message us and ask.
          </p>
        </Container>
      </section>

      <JumpNav
        items={faqGroups.map((group) => ({
          id: group.id,
          label: group.heading,
        }))}
      />

      {/* 2-7. Question groups ---------------------------------------- */}
      {faqGroups.map((group, groupIndex) => (
        <section
          key={group.id}
          id={group.id}
          aria-labelledby={`${group.id}-heading`}
          className={
            groupIndex % 2 === 1 ? "scroll-anchor band-mint" : "scroll-anchor"
          }
        >
          <Container reveal className="section">
            <h2
              id={`${group.id}-heading`}
              className="h-section"
            >
              {group.heading}
            </h2>
            <p className="mt-3 max-w-3xl lede">{group.intro}</p>

            <div className="faq-list mt-6">
              {group.items.map((faq) => (
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
      ))}

      {/* 8. CTA ------------------------------------------------------ */}
      <section
        aria-labelledby="cta-heading"
        className="band-navy"
      >
        <Container reveal className="section-cta">
          <h2
            id="cta-heading"
            className="h-section text-white"
          >
            Still have a question?
          </h2>
          <p className="mt-5 lede max-w-2xl text-navy-100">
            Ask us directly — there is no charge for a question, and no
            obligation afterwards. If you would rather we simply looked at your
            report, send it across for a{" "}
            <Link href="/free-credit-report" className="underline">
              free check
            </Link>{" "}
            and we will tell you what is in it.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={pageWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <WhatsappIcon />
              Ask on WhatsApp
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
