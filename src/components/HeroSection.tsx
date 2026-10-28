"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";
import { GearIcon, ShieldIcon, ClockIcon, UsersIcon, ArrowRightIcon } from "./icons";

const POSTER = "/videos/combine-harvest-poster.jpg";
const VIDEO = "/videos/combine-harvest.mp4"; // 1280x720 — desktop
const VIDEO_MOBILE = "/videos/combine-harvest-mobile.mp4"; // 960x540, lighter — phones/tablets
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
 * Homepage hero with scroll-scrubbed combine video.
 *
 * Desktop (≥1024px): the approved design — full-bleed video behind the nav
 * with a frosted ivory text panel on the LEFT; pinned + scrubbed, releases to
 * the Stats bar, reverses on scroll-up. Unchanged.
 *
 * Phone / tablet (<1024px, motion, tall enough): the video is a clean full-width
 * area directly below the nav with NOTHING over it (the complete combine and
 * header stay visible); that video area is pinned while scroll scrubs the clip,
 * then releases so the separate warm off-white text section below scrolls into
 * view. Uses a lighter 540p variant for smoother mobile scrubbing.
 *
 * Reduced-motion / video failure / very short viewports (landscape phones) /
 * no-JS: a stacked static poster with the content below, in normal flow — the
 * server-render default, so the full copy is always present.
 */
export function HeroSection() {
  const [enhance, setEnhance] = useState(false); // mounted + motion allowed
  const [isLg, setIsLg] = useState(false); // desktop-overlay vs mobile-banner layout
  const [short, setShort] = useState(false); // viewport too short to pin cleanly
  const [failed, setFailed] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const active = enhance && !failed && !short;

  useEffect(() => {
    const lg = window.matchMedia("(min-width: 1024px)");
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sv = window.matchMedia("(max-height: 559px)"); // landscape phones
    const sync = () => {
      setIsLg(lg.matches);
      setEnhance(!rm.matches);
      setShort(sv.matches);
    };
    sync();
    lg.addEventListener("change", sync);
    rm.addEventListener("change", sync);
    sv.addEventListener("change", sync);
    return () => {
      lg.removeEventListener("change", sync);
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

    // Prime decoding so iOS Safari allows frame-accurate currentTime seeking.
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
  }, [active, isLg]);

  // ── Text content (shared). `frosted` = glass panel (desktop overlay);
  //    otherwise the plain block used in the warm text section / fallback. ──
  const content = (frosted: boolean) => (
    <div
      className={
        frosted
          ? "w-full max-w-[560px] rounded-2xl bg-[#FAF7F1]/95 p-6 shadow-[0_24px_60px_-18px_rgba(32,30,27,0.55)] supports-[backdrop-filter]:bg-[#FAF7F1]/[0.88] supports-[backdrop-filter]:backdrop-blur-[12px] sm:p-8 lg:w-[44%]"
          : "w-full"
      }
    >
      <span className="label-mono block text-[11px]" style={{ color: COPPER_DEEP }}>
        {siteConfig.tagline}
      </span>

      <h1
        className="mt-3 font-heading text-[1.8rem] font-bold leading-[1.08] tracking-tight sm:text-4xl lg:text-[2.6rem]"
        style={{ color: CHARCOAL }}
      >
        Precision Agricultural Machinery{" "}
        <span style={{ color: COPPER_DEEP }}>Components</span> Since{" "}
        {siteConfig.since}
        <span style={{ color: COPPER_DEEP }}>.</span>
      </h1>

      <span
        className="mt-4 block h-0.5 w-14 rounded-full"
        style={{ backgroundColor: COPPER_BTN }}
      />

      <p
        className="mt-4 max-w-lg text-[15px] leading-relaxed sm:text-base"
        style={{ color: BODY }}
      >
        Manufacturer of sprockets, pulleys, bearing housings, gears, shafts,
        hubs, flanges, bushes, sleeves and custom CNC components for combine
        harvesters and agricultural machinery — trusted by{" "}
        {siteConfig.repeatClients} repeat clients.
      </p>

      <ul className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2.5">
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

      <div className="mt-7 flex flex-wrap gap-3">
        <Link
          href="/contact"
          className="group inline-flex items-center justify-center gap-2 rounded-md px-7 py-3.5 font-heading text-[15px] font-medium tracking-tight text-white shadow-[0_10px_24px_-10px_rgba(166,76,34,0.75)] transition-all duration-300 hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          style={{ backgroundColor: COPPER_BTN }}
        >
          Request a Quote
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
        <Link
          href="/products"
          className="group inline-flex items-center justify-center gap-2 rounded-md px-7 py-3.5 font-heading text-[15px] font-medium tracking-tight transition-all duration-300 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
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

  // Shared video element props (ref/poster/events/muted/inline).
  const videoCommon = {
    ref: videoRef,
    poster: POSTER,
    muted: true,
    playsInline: true,
    preload: "auto" as const,
    "aria-label": MEDIA_ALT,
    onError: () => setFailed(true),
  };

  // ── Desktop overlay (≥1024px): full-bleed video + left frosted panel. ──
  if (active && isLg) {
    return (
      <div ref={trackRef} className="relative h-[185vh]">
        <div ref={stickyRef} className="sticky top-0 h-screen overflow-hidden">
          <section className="relative h-full w-full overflow-hidden bg-navy">
            <video
              {...videoCommon}
              src={VIDEO}
              className="absolute inset-0 h-full w-full object-cover [object-position:50%_50%]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-950/25 via-transparent to-transparent" />
            <div className="relative z-10 flex h-full items-center pt-20">
              <div className="container-x w-full">{content(true)}</div>
            </div>
          </section>
        </div>
      </div>
    );
  }

  // ── Phone / tablet: clean pinned video area, warm text section below. ──
  if (active && !isLg) {
    return (
      <>
        <div ref={trackRef} className="relative h-[180svh] bg-steel-light">
          <div
            ref={stickyRef}
            className="sticky top-0 h-[100svh] overflow-hidden bg-steel-light"
          >
            {/* video sits directly below the nav, full width, nothing over it */}
            <div className="absolute inset-x-0 top-20 overflow-hidden bg-navy">
              <div className="relative aspect-[3/4] w-full overflow-hidden sm:aspect-[16/10]">
                <video
                  {...videoCommon}
                  src={VIDEO_MOBILE}
                  className="absolute inset-0 h-full w-full object-cover [object-position:62%_50%] sm:[object-position:55%_50%]"
                />
              </div>
            </div>
          </div>
        </div>

        <section className="bg-steel-light pb-14 pt-8">
          <div className="container-x">{content(false)}</div>
        </section>
      </>
    );
  }

  // ── Stacked fallback (reduced-motion / video failure / short / SSR). ──
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
