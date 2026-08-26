/**
 * Single source of truth for business + contact details.
 * Never hardcode a phone number, email or address in a page or component.
 */

export const siteConfig = {
  name: "Cibil Wale",
  legalName: "Cibil Wale",
  tagline: "Credit report correction and CIBIL score improvement",
  description:
    "Cibil Wale helps you find and dispute genuine errors in your credit report — written off, suit filed, settled, wrong DPD and mismatched accounts.",

  // Contact
  contactPerson: "Govind Saraswat",
  phone: "+918859410046",
  phoneDisplay: "+91 88594 10046",
  whatsappNumber: "918859410046",
  email: "govindsaraswat082@gmail.com",

  // Location
  city: "Agra",
  state: "Uttar Pradesh",
  cityState: "Agra, Uttar Pradesh",
  country: "IN",

  // Web
  url: "https://cibilwale.vercel.app",
} as const;

/** `tel:` href for the call button. */
export const telHref = `tel:${siteConfig.phone}`;

/** `mailto:` href for the email link. */
export const mailtoHref = `mailto:${siteConfig.email}`;

/**
 * WhatsApp chat link. Pass a message to pre-fill the chat box.
 */
export function whatsappHref(message = defaultWhatsappMessage): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}

export const defaultWhatsappMessage =
  "Hi Cibil Wale, I need help with my credit report.";

export type SiteConfig = typeof siteConfig;
