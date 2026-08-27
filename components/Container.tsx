import type { ReactNode } from "react";

/** Page width wrapper. Keeps side padding consistent on small screens. */
export default function Container({
  children,
  className = "",
  reveal = false,
}: {
  children: ReactNode;
  className?: string;
  /** Fade-and-rise this block when it scrolls into view. */
  reveal?: boolean;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-6xl px-5 sm:px-6 ${className}`}
      {...(reveal ? { "data-reveal": "" } : {})}
    >
      {children}
    </div>
  );
}
