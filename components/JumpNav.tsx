/**
 * Horizontally scrollable chip nav, sticky under the header.
 *
 * Labels are the page's own section headings — nothing new is written
 * here. Plain anchor links, so it works with JS off; the smooth scroll
 * comes from `scroll-behavior` in globals.css, which already respects
 * prefers-reduced-motion.
 */

import Container from "./Container";

export type JumpTarget = {
  /** The id on the section being linked to. */
  id: string;
  /** Short label — use the section's own heading wording. */
  label: string;
};

export default function JumpNav({ items }: { items: JumpTarget[] }) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="On this page" className="jump-nav">
      <Container>
        <ul className="jump-nav-scroller">
          {items.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="jump-chip">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}
