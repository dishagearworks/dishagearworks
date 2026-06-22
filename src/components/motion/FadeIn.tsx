import type { CSSProperties, ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

type FadeInProps = {
  children: ReactNode;
  /** kept for API compatibility; the CSS reveal is always a gentle rise */
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
};

/**
 * Entrance reveal that is JS-INDEPENDENT.
 *
 * Previously this used Framer Motion `whileInView` with an `opacity: 0`
 * initial state. On devices where the IntersectionObserver/JS didn't run
 * (older Android, in-app browsers, data-saver), the element stayed invisible
 * forever. This version applies the reveal purely via CSS (`.reveal`), so the
 * content is always visible — the animation is a progressive enhancement that
 * also degrades to "instantly visible" under prefers-reduced-motion.
 */
export function FadeIn({
  children,
  delay = 0,
  className = "",
  duration,
}: FadeInProps) {
  const style: CSSProperties | undefined =
    delay || duration
      ? {
          animationDelay: delay ? `${delay}s` : undefined,
          animationDuration: duration ? `${duration}s` : undefined,
        }
      : undefined;
  return (
    <div className={`reveal ${className}`} style={style}>
      {children}
    </div>
  );
}

/** Container whose direct children are revealed with a staggered CSS delay. */
export function StaggerContainer({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  stagger?: number;
}) {
  return <div className={`reveal-stagger ${className}`}>{children}</div>;
}

/** Child item used inside <StaggerContainer />. Stagger comes from the parent. */
export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}
