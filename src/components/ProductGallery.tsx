"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export type GalleryView = { src: string; alt: string };

/**
 * Interactive product gallery: one large main image with clickable thumbnails.
 * - Click / tap or keyboard (Tab + Enter/Space, or Arrow keys) selects a view.
 * - The selected thumbnail is clearly highlighted.
 * - `contain` keeps transparent / background-removed images uncropped at their
 *   true proportions on a light backdrop; photographic images fill (cover).
 */
export function ProductGallery({
  views,
  title,
  contain = false,
}: {
  views: GalleryView[];
  title: string;
  contain?: boolean;
}) {
  const [active, setActive] = useState(0);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = views[active] ?? views[0];
  const fit = contain ? "object-contain" : "object-cover";

  const move = (i: number) => {
    const n = (i + views.length) % views.length;
    setActive(n);
    thumbRefs.current[n]?.focus();
  };

  return (
    <div>
      {/* Main image */}
      <div
        className={`relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-navy/10 shadow-card ${
          contain ? "bg-steel-light/60" : ""
        }`}
      >
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className={`${fit} ${contain ? "p-3 sm:p-4" : ""}`}
        />
      </div>

      {/* Thumbnails */}
      {views.length > 1 && (
        <ul
          className="mt-4 grid grid-cols-3 gap-3"
          onKeyDown={(e) => {
            if (e.key === "ArrowRight" || e.key === "ArrowDown") {
              e.preventDefault();
              move(active + 1);
            } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
              e.preventDefault();
              move(active - 1);
            }
          }}
        >
          {views.map((v, i) => {
            const selected = i === active;
            return (
              <li key={v.src}>
                <button
                  type="button"
                  ref={(el) => {
                    thumbRefs.current[i] = el;
                  }}
                  onClick={() => setActive(i)}
                  aria-label={`Show ${v.alt || title}`}
                  aria-pressed={selected}
                  className={`relative block aspect-[4/3] w-full overflow-hidden rounded-xl border shadow-card transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 ${
                    contain ? "bg-steel-light/60" : ""
                  } ${
                    selected
                      ? "border-orange ring-2 ring-orange/60"
                      : "border-navy/10 opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={v.src}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 30vw, 15vw"
                    className={`${fit} ${contain ? "p-2" : ""}`}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
