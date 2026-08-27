import { siteConfig } from "@/lib/config";

/**
 * BreadcrumbList structured data. Pass the same trail that is shown in
 * the visible breadcrumb nav, in the same order — Google expects the
 * markup and the on-page breadcrumb to match.
 *
 * Renders no visible output.
 */

export type Crumb = {
  /** Label shown in the visible breadcrumb, e.g. "Written Off Removal". */
  name: string;
  /** Site-relative path, e.g. "/services/written-off-removal". */
  path: string;
};

export default function BreadcrumbJsonLd({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${siteConfig.url}${crumb.path}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
