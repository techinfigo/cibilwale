"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * A section that folds away on small screens and stays open on desktop.
 *
 * `<details open>` is a single DOM attribute, so it cannot be varied by
 * a media query in CSS alone — this sets it from one matchMedia listener
 * instead. It renders open, so the content is present for search engines
 * and for anyone with JS off; the only thing script does is close it on
 * a narrow screen.
 *
 * Once someone taps the summary themselves, we leave their choice alone
 * until the breakpoint actually changes.
 */
export default function Fold({
  summary,
  children,
}: {
  /** Usually the section's existing heading. */
  summary: ReactNode;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDetailsElement>(null);
  const touched = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mq = window.matchMedia("(min-width: 768px)");

    const apply = () => {
      if (touched.current) return;
      el.open = mq.matches;
    };

    apply();

    // A breakpoint change is a fresh context — honour it again.
    const onChange = () => {
      touched.current = false;
      apply();
    };

    const onToggle = () => {
      touched.current = true;
    };

    mq.addEventListener("change", onChange);
    el.addEventListener("toggle", onToggle);

    return () => {
      mq.removeEventListener("change", onChange);
      el.removeEventListener("toggle", onToggle);
    };
  }, []);

  return (
    <details ref={ref} open className="fold">
      <summary>
        {summary}
        <span aria-hidden="true" className="fold-chevron">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </summary>
      {children}
    </details>
  );
}
