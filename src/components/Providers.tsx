"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Global motion settings. `reducedMotion="user"` makes Framer Motion respect
 * the visitor's prefers-reduced-motion setting (transform/animation reduced),
 * so the site stays accessible without disabling meaningful transitions.
 */
export function Providers({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
