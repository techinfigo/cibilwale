"use client";

import { useEffect } from "react";

/**
 * Fade-and-rise as sections scroll into view.
 *
 * Renders nothing. It adds `.reveal-ready` to <html>, which is what
 * actually hides `[data-reveal]` elements — so if this script never
 * runs, or JS is off, every section is visible as normal. Anyone who
 * has asked for reduced motion is skipped entirely.
 *
 * No library: one IntersectionObserver, and each element is
 * unobserved once it has appeared.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      return;
    }

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    if (targets.length === 0) return;

    root.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    for (const target of targets) {
      // Anything already on screen at load appears immediately, so the
      // first view is never blank while the observer settles.
      const box = target.getBoundingClientRect();
      if (box.top < window.innerHeight * 0.92) {
        target.classList.add("is-visible");
        continue;
      }
      observer.observe(target);
    }

    return () => {
      observer.disconnect();
      root.classList.remove("reveal-ready");
    };
  }, []);

  return null;
}
