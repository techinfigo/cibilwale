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

**Direction: Bold and Friendly.** Big confident type, strong colour, generous
spacing, thumb-friendly on phones. The audience is everyday people in India who
were refused a loan and are worried about money. It must feel approachable and
reassuring — never corporate or intimidating.

- Mobile-first. Most users are on cheap Android phones on slow connections.
- Fast above all: no image files anywhere, no heavy libraries. CSS, inline SVG
  and gradients only.
- Big tap targets (min 56px on primary actions), body text 17px minimum.
- Everything must work at 360px width.

### The design system lives in `app/globals.css`

Do not hand-roll one-off styling on a new page. Use these classes so every page
matches:

| Need | Use |
| --- | --- |
| Section padding | `.section`, `.section-hero`, `.section-cta` |
| Section background | `.band-mint`, `.band-navy`, `.hero-navy` (white/cream is the default) |
| Headings | `.h-display` (h1), `.h-section` (h2), `.h-sub`, `.h-card` |
| Intro paragraph | `.lede`; small caps label above a heading: `.eyebrow` |
| Cards | `.card`, plus `.card-link` when it links, `.card-feature`, `.card-highlight`, `.card-amber` |
| Whole-card link | `.card-link` on the card + `.stretched` on the anchor |
| Icons | `.icon-tile` (+ `.icon-tile-sm`/`.icon-tile-lg`, `.icon-round`, `.icon-navy`, `.icon-amber`, `.icon-on-dark`) |
| Buttons | `.btn` + `.btn-primary` / `.btn-secondary` / `.btn-navy`, plus `.btn-lg` |
| Numbered steps | `.steps` + `.steps-row` (3–4 steps) or `.steps-two` (5–6), with `.step` and `.step-num` |
| FAQ accordion | `.faq-list`, `.faq-item`, `.faq-summary`, `.faq-chevron`, `.faq-answer` |
| Bullets | `.bullet-dot`; inline links: `.link-green`; badges: `.badge .badge-green` |

### Colour

Navy and green are the base. Backgrounds alternate **white/cream → soft green
tint (`.band-mint`) → navy (`.band-navy`)** down a page, never white and grey.
Amber (`--color-amber*`) is for highlights and warning panels only. The page
background is a warm off-white (`--color-cream`), not pure white — cards are
white so they lift off it.

Never put a bare small grey icon on white. Every icon sits in a coloured tile.

### Motion

Sections fade and rise into view via `<Container reveal>` and the
`ScrollReveal` component (one IntersectionObserver, no library). Cards and
buttons lift on hover. All of it is wrapped in `prefers-reduced-motion`, and
`[data-reveal]` only hides content once the observer is running, so a visitor
with JS off still sees everything.

### Rules that outrank the visuals

Never promise a score. The hero gauge is decorative and `aria-hidden`; it shows
direction, never a number we claim to reach.

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
