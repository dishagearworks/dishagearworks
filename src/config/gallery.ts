/**
 * ────────────────────────────────────────────────────────────────────────
 *  GALLERY MEDIA — real factory / workshop photos & videos.
 * ────────────────────────────────────────────────────────────────────────
 *  • No captions/titles are shown anywhere — the gallery is visual-only.
 *  • Videos are silent (audio fully stripped) and stay muted everywhere.
 *  • Order below is intentionally MIXED (not by filename) so photos and
 *    videos interleave naturally.
 *
 *  TO ADD media later:
 *    - Photo:  { type: "image", src: "/images/gallery/your-file.jpg" }
 *    - Video:  { type: "video", src: "/images/gallery/your-file.mp4",
 *                poster: "/images/gallery/your-file-poster.jpg" }
 *    Drop the files in /public/images/gallery/ and add an entry here.
 * ────────────────────────────────────────────────────────────────────────
 */

export type GalleryMedia =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; poster: string; alt: string };

const IMG_ALT = "DISHA GEARWORKS factory and workshop";
const VID_ALT = "DISHA GEARWORKS manufacturing in progress";

const rawGalleryMedia: GalleryMedia[] = [
  { type: "image", src: "/images/gallery/photo-3.jpg", alt: IMG_ALT },
  { type: "video", src: "/images/gallery/video-2.mp4", poster: "/images/gallery/video-2-poster.jpg", alt: VID_ALT },
  { type: "image", src: "/images/gallery/photo-7.jpg", alt: IMG_ALT },
  { type: "image", src: "/images/gallery/photo-1.jpg", alt: IMG_ALT },
  { type: "image", src: "/images/gallery/photo-11.jpg", alt: IMG_ALT },
  { type: "video", src: "/images/gallery/video-5.mp4", poster: "/images/gallery/video-5-poster.jpg", alt: VID_ALT },
  { type: "image", src: "/images/gallery/photo-4.jpg", alt: IMG_ALT },
  { type: "image", src: "/images/gallery/photo-9.jpg", alt: IMG_ALT },
  { type: "video", src: "/images/gallery/video-1.mp4", poster: "/images/gallery/video-1-poster.jpg", alt: VID_ALT },
  { type: "image", src: "/images/gallery/photo-13.jpg", alt: IMG_ALT },
  { type: "image", src: "/images/gallery/photo-2.jpg", alt: IMG_ALT },
  { type: "image", src: "/images/gallery/photo-15.jpg", alt: IMG_ALT },
  { type: "video", src: "/images/gallery/video-4.mp4", poster: "/images/gallery/video-4-poster.jpg", alt: VID_ALT },
  { type: "image", src: "/images/gallery/photo-6.jpg", alt: IMG_ALT },
  { type: "image", src: "/images/gallery/photo-8.jpg", alt: IMG_ALT },
  { type: "video", src: "/images/gallery/video-7.mp4", poster: "/images/gallery/video-7-poster.jpg", alt: VID_ALT },
  { type: "image", src: "/images/gallery/photo-12.jpg", alt: IMG_ALT },
  { type: "image", src: "/images/gallery/photo-5.jpg", alt: IMG_ALT },
  { type: "image", src: "/images/gallery/photo-16.jpg", alt: IMG_ALT },
  { type: "video", src: "/images/gallery/video-3.mp4", poster: "/images/gallery/video-3-poster.jpg", alt: VID_ALT },
  { type: "image", src: "/images/gallery/photo-10.jpg", alt: IMG_ALT },
  { type: "image", src: "/images/gallery/photo-14.jpg", alt: IMG_ALT },
  { type: "video", src: "/images/gallery/video-6.mp4", poster: "/images/gallery/video-6-poster.jpg", alt: VID_ALT },
];

/**
 * Make every alt unique (avoids duplicate-alt SEO/accessibility warnings) by
 * appending a sequence number and location while keeping the base description.
 */
export const galleryMedia: GalleryMedia[] = rawGalleryMedia.map((m, i) => ({
  ...m,
  alt: `${m.alt} in Nabha, Punjab — ${i + 1}`,
}));
