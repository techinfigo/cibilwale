# CibilWale — Project Brief

## Business

Cibil Wale — credit repair and CIBIL score improvement service in India.

Contact: Govind Saraswat
Phone/WhatsApp: +91 88594 10046
Email: govindsaraswat082@gmail.com
Location: Agra, Uttar Pradesh (full address TBC)

## Tech Stack

- Next.js 16 (App Router), TypeScript, Tailwind CSS
- Files live in /app (NOT /src/app)
- Deployed on Vercel, code on GitHub
- No database, no auth, no payments in Phase 1

## Design

- Colors: deep navy (primary), green (accent/CTA), white background, grey text
- Mobile-first. Most users are on cheap Android phones on slow connections.
- Clean, fast, trustworthy. No heavy animations. No large images.
- Big tap targets, readable font sizes (min 16px body)

## Pages to build

Core:
/ (home), /about, /services, /pricing, /contact, /faq, /free-credit-report

Services (each a separate page):
/services/written-off-removal
/services/suit-filed-removal
/services/settled-to-closed
/services/overdue-dpd-correction
/services/account-mismatch-correction
/services/credit-report-analysis

Legal:
/privacy-policy, /terms-and-conditions, /refund-policy, /disclaimer

Blog:
/blog and /blog/[slug]

## Rules

1. Every page must export Next.js metadata (unique title + description).
2. All content must be original. Never copy competitor text.
3. Never promise guaranteed score increases. We assist with disputing genuine errors only. Stay compliant with RBI/CIC rules.
4. Sticky WhatsApp + Call buttons on mobile, on every page.
5. Use semantic HTML (header, nav, main, section, footer). One h1 per page.
6. Keep components in /components folder.
7. Contact details must come from one config file, never hardcoded per page.
8. Write in simple English. Users are everyday Indians, not finance experts.

## Competitors

cibildekho.com and credithelpindia.com — we beat them on speed, mobile experience, clarity, and honest pricing.
