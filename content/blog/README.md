# How to add a blog post

Drop a new `.md` file in this folder. Nothing else — no code changes, no
imports to update, no list to edit. The blog index, the post page, the
sitemap and the structured data all pick it up automatically on the next
build.

## The file

Name the file after the URL you want, e.g. `how-to-read-your-cibil-report.md`
becomes `/blog/how-to-read-your-cibil-report`.

Start it with frontmatter between `---` lines, then write the post in
ordinary markdown underneath:

```markdown
---
title: "How to Read Your CIBIL Report"
description: "A short, search-friendly summary of the post, 140-155 characters."
excerpt: "One or two sentences shown on the blog index under the title."
date: "2026-08-27"
slug: "how-to-read-your-cibil-report"
---

## First heading

Write the post here in plain markdown.
```

## The frontmatter fields

| Field         | Required | What it does                                                        |
| ------------- | -------- | ------------------------------------------------------------------- |
| `title`       | yes      | The `<h1>` on the post page, and the browser tab title.              |
| `description` | yes      | The meta description for search engines. Aim for 140-155 characters. |
| `excerpt`     | no       | Shown on the blog index. Falls back to `description` if omitted.     |
| `date`        | yes      | `YYYY-MM-DD`. Posts are listed newest first.                         |
| `slug`        | no       | The URL segment. Falls back to the filename if omitted.              |

Keep the quotes around the values. A colon inside an unquoted value will
break the file.

## Writing rules for this site

These are not style preferences — they keep us compliant and honest.

- **Never promise a score or a guaranteed outcome.** No "increase your
  score by 100 points", no "guaranteed removal", no timelines we do not
  control. The bureau calculates the score; the bureau and the lender
  decide a dispute.
- **We dispute genuine errors only.** Never suggest that accurate
  information can be removed, or that we have contacts inside a bureau
  or a bank.
- **All content must be original.** Never copy from a competitor.
- **Write in simple English** for everyday readers, not finance experts.
- **Use `##` for section headings**, not `#`. The post title is already
  the page's only `<h1>`.
- **No images.** The site is built for cheap phones on slow connections.

## Checking your post

Run `npm run build`. If the file parses and the site builds, the post is
live at `/blog/<slug>` and already in the sitemap.
