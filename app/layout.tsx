import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollReveal from "@/components/ScrollReveal";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — CIBIL Score Improvement & Credit Report Correction`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.name,
    url: siteConfig.url,
    title: `${siteConfig.name} — CIBIL Score Improvement & Credit Report Correction`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — CIBIL Score Improvement & Credit Report Correction`,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a2540",
  width: "device-width",
  initialScale: 1,
};

/**
 * Site-wide Organization and LocalBusiness structured data. Every value
 * comes from lib/config.ts, so the markup cannot drift from the contact
 * details shown on the pages. Rendered once, in the root layout.
 */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      url: siteConfig.url,
      description: siteConfig.description,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.city,
        addressRegion: siteConfig.state,
        addressCountry: siteConfig.country,
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: siteConfig.phone,
        email: siteConfig.email,
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/#localbusiness`,
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      parentOrganization: { "@id": `${siteConfig.url}/#organization` },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.city,
        addressRegion: siteConfig.state,
        addressCountry: siteConfig.country,
      },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className="h-full">
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-navy-800 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
        <ScrollReveal />
      </body>
    </html>
  );
}
