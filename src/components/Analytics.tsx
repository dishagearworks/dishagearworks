"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { GA_ID, track } from "@/lib/analytics";

/**
 * GA4 analytics. Renders nothing (and loads no scripts) unless
 * NEXT_PUBLIC_GA_ID is set, so it's completely safe to ship without an ID.
 *
 * Handles:
 *  • gtag bootstrap
 *  • SPA page_view on every route change
 *  • view_product_page on product detail routes
 *  • site-wide click tracking (phone / email / WhatsApp / send-drawing /
 *    request-quote) via one delegated listener — no per-button wiring needed
 */
export function Analytics() {
  const pathname = usePathname();

  // Page view + product-page view on each route change.
  useEffect(() => {
    if (!GA_ID || typeof window.gtag !== "function") return;
    window.gtag("event", "page_view", {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
    const m = pathname.match(/^\/products\/(.+)$/);
    if (m) track("view_product_page", { product_slug: m[1], page_path: pathname });
  }, [pathname]);

  // Delegated click tracking for the key conversion actions.
  useEffect(() => {
    if (!GA_ID) return;
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const a = target?.closest("a");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      const text = (a.textContent || a.getAttribute("aria-label") || "")
        .toLowerCase()
        .trim();

      if (href.startsWith("tel:")) {
        track("click_phone", { link_url: href });
      } else if (href.startsWith("mailto:")) {
        track("click_email", { link_url: href });
      } else if (href.includes("wa.me") || href.includes("whatsapp")) {
        if (text.includes("drawing") || text.includes("sample")) {
          track("click_send_drawing", { link_url: href });
        } else {
          track("click_whatsapp", { link_url: href });
        }
      } else if (
        href.includes("/contact") &&
        (text.includes("quote") || href.includes("?product="))
      ) {
        track("click_request_quote", { destination: href, label: text });
      }
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{send_page_view:false});`}
      </Script>
    </>
  );
}
