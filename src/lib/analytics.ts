/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/**
 * GA4 Measurement ID. Defaults to the DISHA GEARWORKS property; override with
 * NEXT_PUBLIC_GA_ID if needed. (A GA Measurement ID is public — it's exposed
 * in the page source on every GA-enabled site — so it's safe to keep here.)
 */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-D990Y1P4VZ";

/**
 * Fire a GA4 event. Safe no-op when GA isn't configured or on the server,
 * so it can be called anywhere without breaking anything.
 */
export function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", event, params);
}
