import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

/**
 * Sitemap for every page on the site.
 *
 * Routes are listed explicitly rather than generated from lib/nav.ts,
 * because the nav also links pages that do not exist yet (the blog).
 * A sitemap that points at a 404 is worse than one that omits the page,
 * so add a route here only once its page is live.
 */

type Entry = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const routes: Entry[] = [
  // Home
  { path: "/", priority: 1.0, changeFrequency: "weekly" },

  // Main conversion page
  { path: "/free-credit-report", priority: 0.9, changeFrequency: "monthly" },

  // Service pages
  {
    path: "/services/written-off-removal",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/services/suit-filed-removal",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/services/settled-to-closed",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/services/overdue-dpd-correction",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/services/account-mismatch-correction",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/services/credit-report-analysis",
    priority: 0.9,
    changeFrequency: "monthly",
  },

  // Services hub and pricing
  { path: "/services", priority: 0.8, changeFrequency: "monthly" },
  { path: "/pricing", priority: 0.8, changeFrequency: "monthly" },

  // Supporting pages
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.7, changeFrequency: "monthly" },

  // Legal
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms-and-conditions", priority: 0.3, changeFrequency: "yearly" },
  { path: "/refund-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/disclaimer", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
