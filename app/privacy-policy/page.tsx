/* PLACEHOLDER LEGAL CONTENT - MUST BE REVIEWED BY A LAWYER BEFORE LAUNCH */

import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/LegalPage";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "What personal data Cibil Wale collects — name, phone, email, PAN and your credit report — why we collect it, how it is stored, and how long we keep it. We never ask for bank passwords or OTPs, we do not sell your data, and you can ask us to delete it.",
  alternates: { canonical: "/privacy-policy" },
};

/* ================================================================== *
 *  PLACEHOLDER — CONFIRM WITH CLIENT
 *  ----------------------------------------------------------------
 *  Before launch, confirm with the business owner and have a lawyer
 *  review: the registered business name and full address, the actual
 *  retention period in section 6, who is named as the contact for data
 *  requests, whether any analytics or third-party tools run on the
 *  site (section 8 currently states none beyond hosting), and whether
 *  the business needs to register or notify anything under the
 *  Digital Personal Data Protection Act 2023. The last-updated date
 *  must be changed whenever the wording changes.
 * ================================================================== */

const lastUpdated = "27 August 2026";

const sections: LegalSection[] = [
  {
    heading: "Who this policy is from",
    body: [
      `${siteConfig.legalName} is a credit report correction service operating from ${siteConfig.cityState}, India. This policy explains what personal data we collect from you, why we collect it, how we store it, who it is shared with and what you can ask us to do about it.`,
      "It applies to information you send us on WhatsApp, by phone, by email or through this website, and to anything we handle while working on your case.",
      "We have written it in plain English on purpose. Your credit report is one of the most sensitive documents you own, and you are entitled to understand exactly what happens to it before you send it to anybody.",
    ],
  },
  {
    heading: "What data we collect",
    body: [
      "We collect only what is needed to read your report and to file a dispute for you. That is:",
    ],
    list: [
      "Your name.",
      "Your phone number — usually the number you message us from on WhatsApp.",
      "Your email address, if you write to us or ask us to send documents by email.",
      "Your PAN, which is needed to confirm that the credit report belongs to you.",
      "Your credit report, in whatever form you send it, together with the report password if the file is protected.",
      "Where a particular dispute requires it: identity or address proof such as Aadhaar, a utility bill or a bank statement, and documents relating to the accounts being disputed — loan papers, payment receipts, closure letters or a No Objection Certificate.",
      "The messages exchanged between us, and what you tell us about your situation.",
    ],
  },
  {
    heading: "Why we collect it",
    body: [
      "Each item above has a purpose, and we do not collect anything without one:",
    ],
    list: [
      "Your credit report, so we can read it and identify what appears to be wrong.",
      "Your PAN, to confirm the report is yours and to identify you correctly to the bureau — mismatched identity details are one of the main causes of credit report errors in the first place.",
      "Your name, phone number and email, so we can contact you about your case and send you the result.",
      "Supporting documents, because a dispute has to be backed by evidence. Without proof, a bureau has nothing to investigate.",
      "Your instructions, so that we act only on what you have actually asked us to do.",
    ],
  },
  {
    heading: "What we never ask for",
    body: [
      "We will never ask for your net banking username or password, your card PIN, your UPI PIN, or any one-time password. There is no step in our work that requires any of them, and no legitimate service, bureau or bank will ever ask you for them either.",
      `If anyone contacts you claiming to be from ${siteConfig.legalName} and asks for any of these, it is not us. Do not share anything, and call ${siteConfig.phoneDisplay} to check.`,
      "We do not ask you to log in to a bureau or banking website on our behalf, and we do not want your credentials. You download your own report yourself and send us the finished file. Because we never hold banking credentials, there are none with us to lose.",
    ],
  },
  {
    heading: "How your data is stored",
    body: [
      "Your documents are treated as private financial records. They are kept only where the people working on your case need them, on devices and accounts controlled by us, and they are not forwarded, posted or copied anywhere they do not need to be.",
      "Access is limited to the people actually handling your case. Your report is not circulated within the business for any other reason, and it is not used as an example, a sample or a testimonial.",
      "No system is perfectly secure, and we will not claim otherwise. If something does go wrong with data we hold about you, we will tell you.",
    ],
  },
  {
    heading: "Who we share it with, and only with your consent",
    body: [
      "Filing a dispute means sending your information to the credit bureau concerned and to the lender that reported the entry. There is no other way to have an entry corrected — those are the only organisations that can investigate and change it.",
      "That sharing happens only when you have asked us to file a dispute, and only to the extent that particular dispute requires. You are told what is being filed and with whom before it goes. If you do not want a dispute filed, nothing is sent. Those organisations then handle your data under their own policies.",
      "Apart from that, we do not share your data with anyone:",
    ],
    list: [
      "We do not sell your personal data to anybody, for any purpose.",
      "We do not pass your details to lenders, loan agents, insurance sellers, data brokers or marketing companies, and we are not paid commission for introductions.",
      "We do not publish your report, your name or your case anywhere without your specific agreement.",
      "We may disclose data where the law requires it, or where it is necessary to establish or defend a legal claim.",
    ],
  },
  {
    heading: "How long we keep it",
    body: [
      "We keep your documents while we are working on your case, and for a period afterwards so that we have a record of what was filed and what the bureau decided. That record matters if a question is raised later about a dispute we handled.",
      "After that, we remove what we no longer need. We do not keep your data indefinitely, and we do not keep it for any purpose beyond the ones set out in this policy.",
      "If you would like your documents deleted sooner, you can ask — see the next section.",
    ],
  },
  {
    heading: "Your right to have your data deleted",
    body: [
      "The data is yours. You can ask us at any time to delete the report and documents you sent us, and we will do it. You do not need to give a reason, and asking will not affect how we treat you.",
      "The one thing that cannot be undone is a dispute that has already been filed: once your information has gone to a bureau or lender as part of a dispute you asked for, it is in their hands and governed by their own retention rules. We will tell you plainly what has already gone where.",
      "Alongside deletion, you may also ask what data we hold about you and for a copy of it, ask us to correct anything we hold that is wrong, or withdraw your instructions to us so that we stop work.",
    ],
  },
  {
    heading: "This website",
    body: [
      "This site does not ask you to create an account, and there is no login or contact form on it. Every enquiry reaches us through WhatsApp, phone or email, which you choose to use yourself.",
      "The site is served by our hosting provider, which like any web host records basic technical information such as requests received. We do not use that to identify individual visitors.",
    ],
  },
  {
    heading: "Digital Personal Data Protection Act 2023",
    body: [
      "India's Digital Personal Data Protection Act 2023 governs how organisations handle the personal data of individuals. We aim to handle your data consistently with the principles that Act is built on, and this policy is written with them in mind.",
      "In practice that means: we tell you what we collect and why; we collect only what is needed for the purpose you came to us for; we use it only for that purpose; we ask for your agreement before sharing it with a bureau or lender; we do not keep it longer than we need it; and we act on a request from you to correct or delete it.",
      "If any obligation under that Act, or under rules made beneath it, applies to us in a way this policy does not yet reflect, our obligations under the law come first and we will update this page.",
    ],
  },
  {
    heading: "How to contact us about your data",
    body: [
      `For anything to do with this policy or your data — a question, a copy of what we hold, a correction or a deletion request — message ${siteConfig.phoneDisplay} on WhatsApp, call the same number, or email ${siteConfig.email}. Ask for ${siteConfig.contactPerson}.`,
      "Tell us what you would like done and the phone number you contacted us on, so we can find your case. We will acknowledge your request and deal with it as quickly as we reasonably can.",
      "If you are unhappy with how we have handled your data, tell us directly first. We would rather put it right than have you take a complaint elsewhere that we could have resolved.",
    ],
  },
  {
    heading: "Changes to this policy",
    body: [
      "We may update this policy from time to time, for instance if the way we work changes or if the law requires it. The date at the top of this page shows when it was last changed, and the version published here is the one that applies.",
      "This policy forms part of our Terms and Conditions and should be read alongside them.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated={lastUpdated}
      intro="What data we collect, why we need it, how it is stored, who sees it and how to have it deleted. The short version: we take your name, phone, email, PAN and credit report, we use them to dispute errors for you, we never ask for banking passwords or OTPs, and we do not sell anything to anybody."
      sections={sections}
    />
  );
}
