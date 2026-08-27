import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/config";

/**
 * Sitemap for every page on the site.
 *
 * Static routes are listed explicitly below; add one here only once its
 * page is live, because a sitemap that points at a 404 is worse than one
 * that omits the page. Blog posts are picked up automatically from
 * /content/blog, so a new post needs no change to this file.
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
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },

  // Legal
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms-and-conditions", priority: 0.3, changeFrequency: "yearly" },
  { path: "/refund-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/disclaimer", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries = routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // One entry per markdown file in /content/blog, dated from its own
  // frontmatter rather than the build time.
  const postEntries = getAllPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : lastModified,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...postEntries];
}
