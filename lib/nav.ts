/** Shared navigation maps, used by the header and footer. */

export type NavLink = { href: string; label: string };

/** Top nav. The Free Credit Report CTA is rendered separately as a button. */
export const mainNav: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const ctaLink: NavLink = {
  href: "/free-credit-report",
  label: "Free Credit Report",
};

export const serviceNav: NavLink[] = [
  { href: "/services/written-off-removal", label: "Written Off Removal" },
  { href: "/services/suit-filed-removal", label: "Suit Filed Removal" },
  { href: "/services/settled-to-closed", label: "Settled to Closed" },
  { href: "/services/overdue-dpd-correction", label: "Overdue / DPD Correction" },
  {
    href: "/services/account-mismatch-correction",
    label: "Account Mismatch Correction",
  },
  { href: "/services/credit-report-analysis", label: "Credit Report Analysis" },
];

export const quickNav: NavLink[] = [
  { href: "/about", label: "About Us" },
  { href: "/pricing", label: "Pricing" },
  { href: "/free-credit-report", label: "Free Credit Report" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const legalNav: NavLink[] = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/refund-policy", label: "Refund Policy" },
  { href: "/disclaimer", label: "Disclaimer" },
];
