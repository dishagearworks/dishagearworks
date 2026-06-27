/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/** GA4 Measurement ID (e.g. G-XXXXXXXXXX). Set NEXT_PUBLIC_GA_ID to enable. */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

/**
 * Fire a GA4 event. Safe no-op when GA isn't configured or on the server,
 * so it can be called anywhere without breaking anything.
 */
export function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", event, params);
}
