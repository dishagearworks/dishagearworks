"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { galleryMedia } from "@/config/gallery";

/**
 * Visual-only factory gallery: responsive grid of photos + silent video
 * previews (no captions/labels). Clicking any item opens a premium lightbox
 * with prev/next/close and keyboard navigation. Videos stay muted everywhere.
 */
export function GalleryGrid() {
  const [index, setIndex] = useState<number | null>(null);
  const count = galleryMedia.length;

  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % count)),
    [count]
  );
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + count) % count)),
    [count]
  );

  // Keyboard navigation + scroll lock while the lightbox is open
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, next, prev]);

  const active = index === null ? null : galleryMedia[index];

  return (
    <div>
      {/* Grid — CSS reveal (JS-independent) so tiles are never stuck hidden */}
      <div className="reveal-stagger grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {galleryMedia.map((m, i) => (
          <button
            key={m.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={m.type === "video" ? "Open workshop video" : "Open factory photo"}
            className="group relative aspect-square overflow-hidden rounded-lg border border-navy/10 bg-navy-800 shadow-card outline-none transition-colors duration-300 hover:border-orange/40 focus-visible:ring-2 focus-visible:ring-orange"
          >
            <Image
              src={m.type === "image" ? m.src : m.poster}
              alt={m.alt}
              fill
              loading="lazy"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-[650ms] ease-out group-hover:scale-105"
            />
            {/* hover wash */}
            <span className="pointer-events-none absolute inset-0 bg-navy-950/0 transition-colors duration-300 group-hover:bg-navy-950/20" />
            {/* play badge for videos */}
            {m.type === "video" && (
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-navy-950/55 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                  <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5" fill="currentColor" aria-hidden>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>
            )}
            {/* corner accent on hover */}
            <span className="pointer-events-none absolute left-0 top-0 h-0.5 w-0 bg-orange transition-all duration-300 group-hover:w-full" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          onClick={close}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-navy-950/90 p-4 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery viewer"
        >
          {/* Prev */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous"
            className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md border border-white/20 bg-navy/70 text-white backdrop-blur-sm transition-colors hover:border-orange hover:text-orange sm:left-6"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>

          {/* Media */}
          <motion.div
            key={active.src}
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[85vh] w-full max-w-4xl items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-navy shadow-cardHover"
          >
            {active.type === "image" ? (
              <Image
                src={active.src}
                alt={active.alt}
                width={1600}
                height={1200}
                className="h-auto max-h-[85vh] w-auto object-contain"
              />
            ) : (
              <video
                src={active.src}
                poster={active.poster}
                controls
                muted
                autoPlay
                loop
                playsInline
                className="max-h-[85vh] w-auto bg-black"
              />
            )}
          </motion.div>

          {/* Next */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next"
            className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md border border-white/20 bg-navy/70 text-white backdrop-blur-sm transition-colors hover:border-orange hover:text-orange sm:right-6"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>

          {/* Close */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            aria-label="Close"
            className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-md border border-white/20 bg-navy/70 text-white backdrop-blur-sm transition-colors hover:border-orange hover:text-orange sm:right-6 sm:top-6"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          {/* counter */}
          <span className="label-mono absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70">
            {index! + 1} / {count}
          </span>
        </motion.div>
      )}
    </div>
  );
}
