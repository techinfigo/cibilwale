/* PLACEHOLDER LEGAL CONTENT - MUST BE REVIEWED BY A LAWYER BEFORE LAUNCH */

import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/LegalPage";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "When Cibil Wale refunds a fee and when it does not. Our fee pays for preparing and filing a dispute, not a guaranteed outcome. First reading is free.",
  alternates: { canonical: "/refund-policy" },
};

/* ================================================================== *
 *  PLACEHOLDER — CONFIRM WITH CLIENT
 *  ----------------------------------------------------------------
 *  Before launch, confirm with the business owner and have a lawyer
 *  review: the 7-day window for requesting a refund in section 6, the
 *  refund processing time quoted there, and whether refunds are made
 *  to the original payment method only. The last-updated date must be
 *  changed whenever the wording changes.
 * ================================================================== */

const lastUpdated = "27 August 2026";

const sections: LegalSection[] = [
  {
    heading: "What you are paying for",
    body: [
      "Our fee pays for work: reading your report, identifying what appears to be wrong, preparing the supporting documents, filing the dispute with the credit bureau and the lender, following it up while it is investigated, and checking the result on a fresh report.",
      "It is not a payment for a guaranteed outcome, and it is important that this is clear before you pay anything. Once a dispute is filed, the decision belongs to the credit bureau and the lender that reported the entry. Nobody — not us, not you, not any service charging any amount — can compel them to accept it.",
      "Any service that promises you a particular result, a specific score, or your money back if the score does not rise is promising something it cannot control. We would rather tell you plainly what the fee buys.",
    ],
  },
  {
    heading: "The free analysis costs nothing",
    body: [
      "Reading your credit report and telling you what we found is free. There is no charge for it whatever it turns up, including when the answer is that nothing on your report can be disputed.",
      "Because nothing is paid at that stage, there is nothing to refund. You are not asked for card details, you are not signed up to anything, and no charge is made unless you have separately agreed to correction work at a price told to you in advance.",
    ],
  },
  {
    heading: "When a refund will be considered",
    body: [
      "We will refund the fee you paid, in full, in the following situations:",
    ],
    list: [
      "We accepted your case and took payment, but then did not file the dispute at all.",
      "We took payment and then found there was no genuine error to dispute. That should have been caught in the free reading, so the mistake is ours and you get your money back.",
      "We are unable to continue with your case for a reason that is not your doing, and the work has not been carried out.",
      "You were charged in error, charged twice, or charged an amount other than the one agreed with you.",
    ],
  },
  {
    heading: "When a refund is not available",
    body: [
      "Equally, there are situations where the fee stands, and we would rather set them out here than argue about them later:",
    ],
    list: [
      "The dispute was prepared and filed, and the credit bureau or the lender rejected it. The work you paid for was done. The outcome was never ours to promise, and we tell you so before you pay.",
      "The dispute succeeded but your credit score did not change as much as you hoped, or did not change at all. Scores are calculated by the bureau from your entire credit history and no part of our fee is a payment for a score.",
      "You gave us information or documents that were false, altered or misleading, and we stopped work as a result.",
      "You asked us to stop after the dispute had already been prepared and filed.",
      "You became unreachable, or did not provide a document we needed, and the dispute could not be progressed for that reason.",
      "A cost was paid on your behalf to a third party — a bureau charge for a report copy, or courier charges — after you had agreed to it. That money has gone to the third party, not to us.",
    ],
  },
  {
    heading: "Partial refunds",
    body: [
      "Where we have carried out part of the agreed work and cannot complete the rest for a reason that is not your doing, we will refund a fair proportion of the fee reflecting what was not done. We will explain how we arrived at the figure.",
      "Where several corrections were agreed as one piece of work and some were filed and others were not, the same principle applies: you pay for what was done.",
    ],
  },
  {
    heading: "How to request a refund",
    body: [
      `Ask us. Send a message on WhatsApp to ${siteConfig.phoneDisplay}, or an email to ${siteConfig.email}, within 7 days of the event you are unhappy about. Tell us your name, the phone number you contacted us on, roughly when you paid, and what has gone wrong.`,
      "You do not need to use any particular form of words and you do not need to send it in writing by post. A plain message explaining the problem is enough.",
      "We will acknowledge your request, look into what happened, and give you a decision with our reasons. Where a refund is due, we aim to process it within 7 to 10 working days of agreeing it, to the same method you used to pay.",
      "If you disagree with our decision, say so and tell us why. We would far rather resolve it directly than have you left unhappy, and most disagreements come down to something that can be explained or put right.",
    ],
  },
  {
    heading: "If we cannot help you at all",
    body: [
      "We do not take money for work we do not believe in. If your report is accurate and there is nothing genuine to dispute, we will tell you that at the start, before any fee is discussed — which is the only point at which it is any use to you.",
      "In that situation there is nothing to refund, because there was nothing to pay.",
    ],
  },
  {
    heading: "How this fits with our other terms",
    body: [
      "This policy forms part of our Terms and Conditions and should be read alongside them, particularly the sections on payment terms and on outcomes being outside our control.",
      "We may update this policy from time to time. The version published here when you engage us is the version that applies to that work.",
    ],
  },
];

export default function RefundPolicyPage() {
  return (
    <LegalPage
      title="Refund Policy"
      lastUpdated={lastUpdated}
      intro="When we will refund your fee and when we will not, set out plainly. The short version: the reading is free, the fee pays for the work of filing a dispute rather than for a result, and we do not charge when we cannot help."
      sections={sections}
    />
  );
}
