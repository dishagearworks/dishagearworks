"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";
import { GearIcon, ShieldIcon, ClockIcon, UsersIcon, ArrowRightIcon } from "./icons";

const POSTER = "/videos/combine-harvest-poster.jpg";
const VIDEO = "/videos/combine-harvest.mp4";
const MEDIA_ALT = "Aerial view of a combine harvester harvesting a wheat field";

// Exact palette from the brief.
const CHARCOAL = "#201E1B";
const BODY = "#41413D";
const COPPER_DEEP = "#9C431C";
const COPPER_BTN = "#A64C22";

const trustPoints = [
  { icon: ClockIcon, label: `Since ${siteConfig.since}` },
  { icon: UsersIcon, label: `${siteConfig.repeatClients} Repeat Clients` },
  { icon: GearIcon, label: "Precision Engineering" },
  { icon: ShieldIcon, label: "Made in India" },
];

/**
 * Full-bleed combine-video hero with scroll-scrubbed playback.
 *
 * Motion devices (desktop, tablet AND phone): the video fills the hero behind
 * the fixed nav and a frosted text panel sits over the "clear field" — on the
 * LEFT at ≥1024px (the approved desktop design), and at the BOTTOM on narrower
 * screens so the combine stays visible above it. The hero is pinned on a tall
 * track; scroll (mouse or touch) scrubs the clip, it holds the final frame,
 * then releases to the Stats bar, and reverses on scroll-up. Normal scroll /
 * touch only — no wheel or gesture trapping.
 *
 * Framing adapts with object-position per breakpoint so the combine (which sits
 * ~two-thirds across the 16:9 frame) is never cropped out in portrait.
 *
 * Reduced-motion, video failure and no-JS: a stacked static poster with the
 * content below, in normal flow (no pinning, no scrubbing) — the server-render
 * default, so the full copy is always present for crawlers and low-end devices.
 *
 * Heights use `svh` so the mobile browser's collapsing toolbar doesn't reflow
 * the pinned section mid-scroll, and scrub progress is derived from element
 * heights (stable) rather than the live innerHeight.
 */
export function HeroSection() {
  const [enhance, setEnhance] = useState(false); // mounted + motion allowed
  const [short, setShort] = useState(false); // viewport too short to pin cleanly
  const [failed, setFailed] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Pin + scrub the video everywhere EXCEPT very short viewports (landscape
  // phones), where a pinned video + full text panel can't fit without clipping
  // the headline/nav — those fall back to the scrollable stacked layout.
  const active = enhance && !failed && !short;

  useEffect(() => {
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)");
    // ~560px is the least height the pinned panel + nav need without clipping.
    const sv = window.matchMedia("(max-height: 559px)");
    const sync = () => {
      setEnhance(!rm.matches);
      setShort(sv.matches);
    };
    sync();
    rm.addEventListener("change", sync);
    sv.addEventListener("change", sync);
    return () => {
      rm.removeEventListener("change", sync);
      sv.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (!active) return;
    const video = videoRef.current;
    const track = trackRef.current;
    const sticky = stickyRef.current;
    if (!video || !track || !sticky) return;

    // Prime decoding so iOS Safari allows frame-accurate currentTime seeking
    // (muted + inline is required and set on the element).
    video.muted = true;
    video.setAttribute("webkit-playsinline", "true");
    const primed = video.play();
    if (primed && typeof primed.then === "function") {
      primed.then(() => video.pause()).catch(() => {});
    } else {
      video.pause();
    }

    let raf = 0;
    let running = false;
    const loop = () => {
      const rect = track.getBoundingClientRect();
      // travel = the pinned scroll distance, from stable layout heights so the
      // mobile toolbar collapsing/expanding doesn't make progress jump.
      const travel = Math.max(1, track.offsetHeight - sticky.offsetHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / travel));
      // Finish the clip at 90% of the track, then hold the final frame for the
      // last 10% so the video is fully done before the hero releases.
      const scrubbed = Math.min(1, progress / 0.9);
      const d = video.duration;
      if (d && !Number.isNaN(d) && video.readyState >= 2) {
        const target = scrubbed * (d - 0.05);
        const diff = target - video.currentTime;
        video.currentTime += Math.abs(diff) > 0.01 ? diff * 0.25 : diff;
      }
      if (running) raf = requestAnimationFrame(loop);
    };
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !running) {
          running = true;
          raf = requestAnimationFrame(loop);
        } else if (!entry.isIntersecting && running) {
          running = false;
          cancelAnimationFrame(raf);
        }
      },
      { rootMargin: "200px" }
    );
    io.observe(track);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [active]);

  // ── Text content (shared). `frosted` = glass panel used in the pinned
  //    overlay; otherwise the plain block used in the stacked fallback. ──
  const content = (frosted: boolean) => (
    <div
      className={
        frosted
          ? "w-full max-w-[560px] rounded-2xl bg-[#FAF7F1]/95 p-5 shadow-[0_24px_60px_-18px_rgba(32,30,27,0.55)] supports-[backdrop-filter]:bg-[#FAF7F1]/[0.88] supports-[backdrop-filter]:backdrop-blur-[12px] sm:p-7 lg:w-[44%] lg:p-8"
          : "w-full"
      }
    >
      <span className="label-mono block text-[11px]" style={{ color: COPPER_DEEP }}>
        {siteConfig.tagline}
      </span>

      <h1
        className="mt-2.5 font-heading text-[1.7rem] font-bold leading-[1.08] tracking-tight sm:text-4xl lg:mt-3 lg:text-[2.6rem]"
        style={{ color: CHARCOAL }}
      >
        Precision Agricultural Machinery{" "}
        <span style={{ color: COPPER_DEEP }}>Components</span> Since{" "}
        {siteConfig.since}
        <span style={{ color: COPPER_DEEP }}>.</span>
      </h1>

      <span
        className="mt-3 block h-0.5 w-14 rounded-full lg:mt-4"
        style={{ backgroundColor: COPPER_BTN }}
      />

      <p
        className={`mt-3 max-w-lg text-[15px] leading-relaxed sm:text-base lg:mt-4 ${
          // keep the pinned phone panel compact; the full copy still ships in
          // the stacked fallback (SSR) for crawlers and low-end devices.
          frosted ? "hidden sm:block" : ""
        }`}
        style={{ color: BODY }}
      >
        Manufacturer of sprockets, pulleys, bearing housings, gears, shafts,
        hubs, flanges, bushes, sleeves and custom CNC components for combine
        harvesters and agricultural machinery — trusted by{" "}
        {siteConfig.repeatClients} repeat clients.
      </p>

      <ul className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 lg:mt-5 lg:gap-y-2.5">
        {trustPoints.map(({ icon: I, label }, idx) => (
          <li key={label} className="flex items-center gap-3">
            {idx > 0 && (
              <span
                className="hidden h-4 w-px sm:block"
                style={{ backgroundColor: "rgba(32,30,27,0.18)" }}
                aria-hidden
              />
            )}
            <span
              className="flex items-center gap-2 text-[13px] font-medium"
              style={{ color: CHARCOAL }}
            >
              <I className="h-[17px] w-[17px]" style={{ color: COPPER_BTN }} />
              {label}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-3 lg:mt-7">
        <Link
          href="/contact"
          className="group inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 font-heading text-[15px] font-medium tracking-tight text-white shadow-[0_10px_24px_-10px_rgba(166,76,34,0.75)] transition-all duration-300 hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:px-7 sm:py-3.5"
          style={{ backgroundColor: COPPER_BTN }}
        >
          Request a Quote
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
        <Link
          href="/products"
          className="group inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 font-heading text-[15px] font-medium tracking-tight transition-all duration-300 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:px-7 sm:py-3.5"
          style={{
            backgroundColor: "rgba(250,247,241,0.9)",
            color: CHARCOAL,
            boxShadow: "inset 0 0 0 1px rgba(32,30,27,0.18)",
          }}
        >
          View Products
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );

  // ── Pinned overlay (motion): full-bleed video + adaptive frosted panel. ──
  if (active) {
    return (
      <div ref={trackRef} className="relative h-[200svh] lg:h-[185vh]">
        <div
          ref={stickyRef}
          className="sticky top-0 h-[100svh] overflow-hidden lg:h-screen"
        >
          <section className="relative h-full w-full overflow-hidden bg-navy">
            <video
              ref={videoRef}
              src={VIDEO}
              poster={POSTER}
              muted
              playsInline
              preload="auto"
              aria-label={MEDIA_ALT}
              onError={() => setFailed(true)}
              // cover fills the hero; object-position keeps the combine (right
              // ~⅔ of the frame) visible as the crop narrows on portrait.
              className="absolute inset-0 h-full w-full object-cover [object-position:66%_50%] sm:[object-position:60%_50%] lg:[object-position:50%_50%]"
            />
            {/* readability scrim: bottom-heavy on mobile (panel sits low), a
                soft left wash on desktop; plus a top wash so the nav reads. */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/15 to-navy-950/25 lg:bg-gradient-to-r lg:from-navy-950/25 lg:via-transparent lg:to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-navy-950/50 to-transparent lg:hidden" />

            {/* panel: bottom on mobile/tablet, left-centered on desktop */}
            <div className="relative z-10 flex h-full items-end px-0 pb-5 pt-20 sm:pb-8 lg:items-center lg:pb-0 lg:pt-20">
              <div className="container-x w-full">{content(true)}</div>
            </div>
          </section>
        </div>
      </div>
    );
  }

  // ── Stacked fallback (reduced-motion / video failure / SSR / no-JS). ──
  return (
    <section className="bg-steel-light pt-20">
      <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/9]">
        <Image
          src={POSTER}
          alt={MEDIA_ALT}
          fill
          priority
          sizes="100vw"
          className="object-cover [object-position:62%_50%]"
        />
      </div>
      <div className="container-x py-10 sm:py-12">{content(false)}</div>
    </section>
  );
}
