import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

/**
 * Blog posts are plain markdown files in /content/blog. Adding a post
 * means dropping a new .md file in that folder with the frontmatter
 * described in content/blog/README.md — no code changes anywhere.
 *
 * This module only ever runs on the server, at build time.
 */

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  /** URL segment, from the frontmatter or the filename. */
  slug: string;
  title: string;
  /** Meta description for the post page. */
  description: string;
  /** Shown on the blog index. Falls back to the description. */
  excerpt: string;
  /** ISO date string, e.g. "2026-08-12". */
  date: string;
};

export type Post = PostMeta & {
  /** Rendered HTML for the post body. */
  contentHtml: string;
};

/**
 * True for anything that looks like a markdown post file. The README
 * lives in the same folder as a guide for whoever adds posts, and files
 * prefixed with "_" or "." are treated as drafts, so all are skipped.
 */
function isPostFile(fileName: string): boolean {
  if (!/\.mdx?$/.test(fileName)) return false;
  if (fileName.startsWith(".") || fileName.startsWith("_")) return false;
  return fileName.toLowerCase() !== "readme.md";
}

function readPostFile(fileName: string): PostMeta & { content: string } {
  const filePath = path.join(POSTS_DIR, fileName);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const fallbackSlug = fileName.replace(/\.mdx?$/, "");
  const title = typeof data.title === "string" ? data.title : fallbackSlug;
  const description =
    typeof data.description === "string" ? data.description : "";

  // gray-matter turns an unquoted YAML date into a Date object, so
  // normalise both shapes back to a plain YYYY-MM-DD string.
  const date =
    data.date instanceof Date
      ? data.date.toISOString().slice(0, 10)
      : typeof data.date === "string"
        ? data.date
        : "";

  return {
    slug: typeof data.slug === "string" && data.slug ? data.slug : fallbackSlug,
    title,
    description,
    excerpt: typeof data.excerpt === "string" ? data.excerpt : description,
    date,
    content,
  };
}

/** Every post, newest first. */
export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  return fs
    .readdirSync(POSTS_DIR)
    .filter(isPostFile)
    .map((fileName) => {
      const post = readPostFile(fileName);
      return {
        slug: post.slug,
        title: post.title,
        description: post.description,
        excerpt: post.excerpt,
        date: post.date,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

/** Slugs only — used by generateStaticParams and the sitemap. */
export function getAllPostSlugs(): string[] {
  return getAllPosts().map((post) => post.slug);
}

/** One post with its body rendered to HTML, or null if there is no such slug. */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (!fs.existsSync(POSTS_DIR)) return null;

  const fileName = fs
    .readdirSync(POSTS_DIR)
    .filter(isPostFile)
    .find((name) => readPostFile(name).slug === slug);

  if (!fileName) return null;

  const { content, ...meta } = readPostFile(fileName);
  const processed = await remark().use(html).process(content);

  return { ...meta, contentHtml: processed.toString() };
}

/** "2026-08-12" -> "12 August 2026". Falls back to the raw string. */
export function formatPostDate(date: string): string {
  if (!date) return "";
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;

  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(parsed);
}
