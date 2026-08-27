/* PLACEHOLDER LEGAL CONTENT - MUST BE REVIEWED BY A LAWYER BEFORE LAUNCH */

import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/LegalPage";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Cibil Wale is independent and not affiliated with CIBIL, Experian, Equifax, CRIF High Mark, the RBI or any bank. We guarantee no score or outcome.",
  alternates: { canonical: "/disclaimer" },
};

/* ================================================================== *
 *  PLACEHOLDER — CONFIRM WITH CLIENT
 *  ----------------------------------------------------------------
 *  Before launch, have a lawyer review the trademark wording in
 *  section 2 and the no-affiliation wording in section 1, and confirm
 *  the registered business name and full address. The last-updated
 *  date must be changed whenever the wording changes.
 * ================================================================== */

const lastUpdated = "27 August 2026";

const sections: LegalSection[] = [
  {
    heading: "We are an independent service",
    body: [
      `${siteConfig.legalName} is an independent credit report correction service operating from ${siteConfig.cityState}, India. We are privately run and we act for the people who come to us, and for nobody else.`,
      "We are not affiliated with, endorsed by, authorised by, sponsored by, appointed by or in any way connected to any of the following:",
    ],
    list: [
      "TransUnion CIBIL Limited",
      "Experian Credit Information Company of India Private Limited",
      "Equifax Credit Information Services Private Limited",
      "CRIF High Mark Credit Information Services Private Limited",
      "The Reserve Bank of India, or any other regulator or government body",
      "Any bank, non-banking financial company, housing finance company or other lender",
    ],
  },
  {
    heading: "Trademarks belong to their owners",
    body: [
      "CIBIL, TransUnion, Experian, Equifax, CRIF High Mark and all other company, product and service names used on this website are the trademarks or registered trademarks of their respective owners.",
      "They are used on this site only to describe the credit bureaus and lenders whose reports and records our service deals with. Their use does not imply any affiliation, endorsement, partnership or approval, and no such connection should be inferred from it.",
      "Where we refer to a CIBIL report or a CIBIL score, we mean the credit report or score produced by that bureau. The word is widely used in India as a general term for a credit report, and we use it here because that is how people search for and talk about the thing we help with.",
    ],
  },
  {
    heading: "We have no special access or influence",
    body: [
      "We have no contacts inside any credit bureau, bank or other lender, and we do not claim any. We hold no position, licence or authority that gives us influence over how a dispute is decided.",
      "Everything we do goes through the official dispute processes that the bureaus and lenders make available to every borrower in India. Those same processes are open to you directly, free of charge, and we will tell you how to use them yourself if you would prefer to.",
      "Anyone who tells you they can have entries deleted through an inside contact, for a fee, is not describing a legitimate service.",
    ],
  },
  {
    heading: "Information on this site is general",
    body: [
      "The content on this website — the service pages, the FAQ, the blog and everything else — is general information about credit reports and the dispute process in India. It is written to be useful to a wide audience, and it cannot take account of any individual's circumstances.",
      "It is not financial advice, credit advice, tax advice or legal advice, and it must not be relied on as any of those. We are not lawyers, we are not financial advisers, and we are not authorised to advise you on borrowing, investment or your legal position.",
      "Before acting on anything you read here, consider your own situation and, where the matter is significant, take advice from a suitably qualified professional. Anything we tell you about your own report during a free reading is our reading of that document, not professional advice of that kind.",
    ],
  },
  {
    heading: "No guarantee of any score or outcome",
    body: [
      "We do not guarantee, promise or predict any credit score, any increase in a score, or any particular outcome from a dispute. We do not guarantee that any application for credit will be approved.",
      "Your credit score is calculated by the credit bureau from your entire credit history. Whether a dispute succeeds is decided by the bureau and by the lender that reported the entry. None of that is within our control, and we will not pretend otherwise.",
      "Where this site describes what a correction can do, it describes what is possible when an entry is genuinely wrong and the evidence supports it — not what will happen in your case. Accurate information cannot be removed from a credit report by us or by anyone else.",
      "Any timeframes mentioned on this site, including the 30-day period within which a bureau is required to investigate a dispute, describe the process in general. They are not a promise about your case.",
    ],
  },
  {
    heading: "Accuracy of the information here",
    body: [
      "We try to keep this site accurate and current, and to describe the rules and processes correctly as we understand them. Rules, bureau procedures and lender practices change, and pages may not be updated the moment they do.",
      "We give no warranty that everything on this site is complete, accurate or up to date at the time you read it, and we are not liable for any loss arising from reliance on it. If something here looks wrong or out of date, please tell us and we will look at it.",
    ],
  },
  {
    heading: "Links to other websites",
    body: [
      "Where this site refers to a credit bureau's website or any other third-party site, that reference is for your convenience. We do not control those sites, we are not responsible for their content or their handling of your data, and a reference is not an endorsement.",
      "When you go to a bureau's website to download your own report, always reach it by typing the address yourself rather than following a link sent to you in a message. That habit protects you from a common form of fraud.",
    ],
  },
  {
    heading: "Fraud and impersonation",
    body: [
      `We will never ask you for a net banking password, a card or UPI PIN, or a one-time password. Nobody legitimate will. If someone contacts you claiming to be from ${siteConfig.legalName} and asks for any of those, or asks you to pay into an account you have not been told about by us directly, it is not us.`,
      `If you are unsure whether a message or a call genuinely came from us, do not act on it. Call ${siteConfig.phoneDisplay} and check first.`,
    ],
  },
];

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      lastUpdated={lastUpdated}
      intro="Who we are, who we are not connected to, and what the information on this website is and is not. In short: we are an independent service, we have no special access to any bureau or bank, and we guarantee no score or outcome."
      sections={sections}
    />
  );
}
