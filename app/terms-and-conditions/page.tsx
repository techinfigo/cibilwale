/* PLACEHOLDER LEGAL CONTENT - MUST BE REVIEWED BY A LAWYER BEFORE LAUNCH */

import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/LegalPage";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "The terms we work on: what our credit report dispute service does and does not do, your responsibilities, payment, liability and governing law.",
  alternates: { canonical: "/terms-and-conditions" },
};

/* ================================================================== *
 *  PLACEHOLDER — CONFIRM WITH CLIENT
 *  ----------------------------------------------------------------
 *  Before launch, confirm with the business owner and have a lawyer
 *  review: the registered business name and full address, the payment
 *  terms in section 5, and the liability cap in section 8. The
 *  last-updated date must be changed whenever the wording changes.
 * ================================================================== */

const lastUpdated = "27 August 2026";

const sections: LegalSection[] = [
  {
    heading: "Who these terms are between",
    body: [
      `These terms apply between ${siteConfig.legalName} ("we", "us", "our"), a credit report correction service operating from ${siteConfig.cityState}, India, and you, the person asking us to look at or work on a credit report ("you", "your").`,
      "By sending us your credit report, asking us to act on your behalf, or paying us for correction work, you accept these terms. If you do not accept them, please do not send us your documents.",
      "We may update these terms from time to time. The version published on this page at the moment you engage us is the version that applies to that work.",
    ],
  },
  {
    heading: "What our service is",
    body: [
      "We assist people in disputing genuine errors in their credit reports. In practice that means reading your credit report, identifying entries that appear to be factually wrong, preparing the supporting documents, and filing a dispute through the official dispute process operated by the credit bureau and with the lender that reported the entry.",
      "We follow the dispute up while it is being investigated, keep you informed of what we hear, and check a fresh copy of your report at the end so you can see what did and did not change.",
      "That is the whole of what we offer. We are not lenders, we are not agents or representatives of any bank or non-banking financial company, we do not arrange loans, and we are not paid commission by anyone for referring you.",
    ],
  },
  {
    heading: "What our service is not",
    body: [
      "This section matters more than any other on this page, and we would rather you read it before paying us than afterwards.",
    ],
    list: [
      "We do not guarantee that your credit score will increase, or that it will reach any particular number, by any particular date. Your score is calculated by the credit bureau from your entire credit history, and no one outside the bureau controls it.",
      "We cannot remove accurate information from a credit report. If an entry correctly records what happened, it is not an error, and no dispute — by us or anyone else — can have it deleted.",
      "We cannot delete, reset or rebuild your credit history, and we would not attempt to.",
      "We do not have, and do not claim to have, contacts inside any credit bureau, bank or other lender. We use only the official dispute channels available to every borrower.",
      "We do not provide financial advice, investment advice or legal advice, and nothing we say should be treated as any of those.",
      "We will never submit false information or fabricated documents on your behalf, and we will not act on any instruction to do so.",
    ],
  },
  {
    heading: "Your responsibilities",
    body: [
      "A dispute is only as good as the information behind it, and the information comes from you. By engaging us you confirm that:",
    ],
    list: [
      "The credit report and personal details you send us are your own, or belong to someone who has authorised you to act for them.",
      "Everything you tell us about your accounts, payments and history is true and complete to the best of your knowledge.",
      "Every document you give us is genuine and unaltered.",
      "You will tell us promptly if anything changes, or if you realise something you told us was wrong.",
      "You will respond within a reasonable time when we ask you for a document or a confirmation, since a dispute can stall without it.",
    ],
    // Second paragraph deliberately follows the list in the rendered output.
  },
  {
    heading: "Consequences of incorrect information",
    body: [
      "If you give us information or documents that turn out to be false, altered or misleading, we will stop work on your case immediately. Fees already paid for work already carried out are not refundable in that situation, and we may decline to act for you in future.",
      "You remain responsible for anything you have submitted to a bureau or lender through us. Filing a false dispute is a serious matter, and the consequences of it fall on the person whose report it is.",
    ],
  },
  {
    heading: "Payment terms",
    body: [
      "The first reading of your credit report is free and carries no obligation. Nothing is charged for it, whatever it turns up.",
      "If there is work worth doing, we tell you the fixed price for that work before it begins, and no work starts until you have agreed to it. The agreed price does not change afterwards.",
      "Our fee is charged for the work of preparing, filing and following up a dispute. It is not a payment for a particular result, because no result can be promised. Where a cost has to be paid to a third party — a bureau charge for a report copy, or courier charges for documents — we tell you the amount before it is incurred.",
      "There is no subscription, no monthly retainer and no renewal fee. We do not take any share of any loan or credit you obtain after working with us.",
      "Refunds are dealt with separately in our Refund Policy, which forms part of these terms.",
    ],
  },
  {
    heading: "Outcomes are not within our control",
    body: [
      "When a dispute is filed, the decision on it belongs to the credit bureau and the lender that reported the entry. Neither we nor you can compel either of them to accept a dispute, to accept it within a particular time, or to make a particular change.",
      "Credit bureaus in India are required to investigate a dispute within 30 days of receiving it. Where a lender is slow to confirm its records, the process takes longer, and that delay is outside our control. We keep following up rather than closing your file, but we cannot promise a date.",
      "Similarly, if a correction is made, any effect on your credit score is determined by the bureau at its next update and depends on your whole credit history. We make no representation about what that effect will be.",
      "You accept that a dispute may be rejected, that it may take longer than expected, and that a corrected entry may not produce the change in your circumstances that you hoped for.",
    ],
  },
  {
    heading: "Limitation of liability",
    body: [
      "We will carry out our work with reasonable care and skill. Beyond that, and to the extent permitted by law, our liability to you is limited as follows.",
      "We are not liable for any decision taken by a credit bureau, a lender, or any other third party, including a decision to reject a dispute, to delay it, or to refuse you credit.",
      "We are not liable for indirect or consequential losses — including loss of an expected loan or credit facility, lost business or profits, higher interest costs, or distress — arising from the outcome of a dispute.",
      "Where we are found liable for a failing in our own work, our total liability is limited to the amount you actually paid us for that piece of work.",
      "Nothing in these terms excludes or limits any liability that cannot lawfully be excluded or limited, including liability for fraud.",
    ],
  },
  {
    heading: "Confidentiality and your data",
    body: [
      "The documents you send us are treated as private. We use them only for reading your report and for preparing and filing disputes you have asked for, and we do not sell them or pass them to lenders, agents or anyone else for their own purposes.",
      "How we handle your information is set out in full in our Privacy Policy, which forms part of these terms.",
      "We will never ask you for a net banking password, a card or UPI PIN, or a one-time password, and you should never provide any of these to us or to anyone claiming to act for us.",
    ],
  },
  {
    heading: "Ending the engagement",
    body: [
      "You may stop working with us at any time by telling us so. If you stop after a dispute has already been prepared and filed, the fee for that work stands, as set out in our Refund Policy.",
      "We may decline or end an engagement — for example where there is no genuine error to dispute, where we have been given false information, where we are asked to do something improper, or where we simply cannot help. Where we end it for a reason that is not your doing and work has not been carried out, we will not charge you.",
    ],
  },
  {
    heading: "Governing law and jurisdiction",
    body: [
      "These terms, and any dispute or claim arising out of them or out of our services, are governed by the laws of India.",
      `The courts at ${siteConfig.cityState} shall have exclusive jurisdiction over any such dispute or claim.`,
      "Before starting any formal proceedings, we ask that you raise the matter with us directly so we have a fair opportunity to put it right. Most problems are resolved with a conversation.",
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <LegalPage
      title="Terms and Conditions"
      lastUpdated={lastUpdated}
      intro="The terms on which we work with you — what we do, what we cannot do, what we need from you, and what happens if something goes wrong. Written in plain English, because terms nobody can read protect nobody."
      sections={sections}
    />
  );
}
