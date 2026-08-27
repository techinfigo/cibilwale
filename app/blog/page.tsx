import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { formatPostDate, getAllPosts } from "@/lib/blog";
import { siteConfig, telHref, whatsappHref } from "@/lib/config";

export const metadata: Metadata = {
  title: "Blog — Plain English Guides to Credit Reports and CIBIL Scores",
  description:
    "Guides on reading your credit report, what written off and settled really mean, why loans get refused, and how to correct genuine errors. No jargon.",
  alternates: { canonical: "/blog" },
};

/* Inline SVG icons — no image files on this page. */

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm4.52 11.86c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.24-.64.8-.79.97-.14.16-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.4 21 3 13.6 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
    </svg>
  );
}

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const pageWhatsapp = whatsappHref(
    "Hi Cibil Wale, I read your blog and I have a question about my credit report."
  );

  return (
    <>
      {/* 1. Hero ---------------------------------------------------- */}
      <section className="bg-navy-800 text-white">
        <Container className="py-14 sm:py-20">
          <p className="text-sm font-semibold tracking-wide text-navy-100 uppercase">
            Blog
          </p>
          <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Credit reports, explained in plain English
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-navy-100">
            Guides for people who have been refused a loan and told very little
            about why. What the words on your report mean, what can genuinely be
            corrected, and what nobody can do for you — written without jargon
            and without promises.
          </p>
        </Container>
      </section>

      {/* 2. Posts ---------------------------------------------------- */}
      <section aria-labelledby="posts-heading">
        <Container className="py-14 sm:py-16">
          <h2 id="posts-heading" className="sr-only">
            All posts
          </h2>

          {posts.length === 0 ? (
            <p>
              There are no posts here yet. Check back soon, or message us if
              there is something you would like explained.
            </p>
          ) : (
            <ul className="space-y-5">
              {posts.map((post) => (
                <li
                  key={post.slug}
                  className="rounded-xl border border-line bg-white p-6 sm:p-8"
                >
                  <article>
                    <p className="text-sm text-muted">
                      <time dateTime={post.date}>
                        {formatPostDate(post.date)}
                      </time>
                    </p>
                    <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:underline"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-3">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-4 inline-flex min-h-11 items-center gap-2 font-semibold text-brand-green underline underline-offset-2"
                    >
                      Read more
                      <ArrowIcon />
                      <span className="sr-only">: {post.title}</span>
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </section>

      {/* 3. CTA ------------------------------------------------------ */}
      <section
        aria-labelledby="cta-heading"
        className="border-t border-line bg-navy-800 text-white"
      >
        <Container className="py-14 pb-28 sm:py-16 sm:pb-28">
          <h2
            id="cta-heading"
            className="text-2xl font-bold text-white sm:text-3xl"
          >
            Rather have us just read your report?
          </h2>
          <p className="mt-4 max-w-2xl text-navy-100">
            Send it on WhatsApp and we will tell you what is on it, what is
            wrong, and what can genuinely be disputed. Free, and no obligation
            afterwards.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={pageWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-brand-green px-6 text-base font-semibold text-white shadow-sm hover:bg-brand-green-dark"
            >
              <WhatsappIcon />
              Send my report on WhatsApp
            </a>
            <a
              href={telHref}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-white px-6 text-base font-semibold text-navy-800 shadow-sm hover:bg-navy-50"
            >
              <PhoneIcon />
              Call {siteConfig.phoneDisplay}
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
