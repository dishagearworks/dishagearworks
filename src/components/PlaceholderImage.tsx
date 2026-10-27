import Image from "next/image";
import { GearIcon } from "./icons";

type PlaceholderImageProps = {
  src?: string;
  alt: string;
  label?: string;
  className?: string;
  /** aspect ratio utility class, e.g. "aspect-[4/3]" */
  ratio?: string;
  /** responsive `sizes` hint; override per layout so Next serves a variant
   *  that matches the rendered width (default suits a 3-up grid card). */
  sizes?: string;
  /** mark the first/above-the-fold instance as priority (skips lazy-load). */
  priority?: boolean;
};

/**
 * Shows a real image when `src` is provided, otherwise a clean branded
 * "blueprint" placeholder. Drop your images in /public/images/... and set
 * the path in the relevant config file — no component changes needed.
 */
export function SmartImage({
  src,
  alt,
  label,
  className = "",
  ratio = "aspect-[4/3]",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  priority = false,
}: PlaceholderImageProps) {
  return (
    <div className={`relative w-full overflow-hidden ${ratio} ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <div className="blueprint absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 animate-spin-slow text-white/5">
            <GearIcon className="h-full w-full" strokeWidth={1} />
          </span>
          <GearIcon className="h-10 w-10 text-orange/70" />
          <span className="mt-3 px-4 font-heading text-xs font-semibold uppercase tracking-widest text-steel">
            {label ?? alt}
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-widest text-white/30">
            Image placeholder
          </span>
        </div>
      )}
    </div>
  );
}
