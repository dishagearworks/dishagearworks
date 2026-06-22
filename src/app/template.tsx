import type { ReactNode } from "react";

/**
 * App Router template: re-mounts on each navigation, giving a subtle page
 * fade-in. The animation is now pure CSS (`.page-enter`) instead of a
 * JS/Framer opacity gate, so page content is NEVER hidden if JavaScript
 * fails to run (older mobiles, in-app browsers) — it stays fully visible
 * and the fade is a progressive enhancement (disabled under reduced-motion).
 */
export default function Template({ children }: { children: ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
