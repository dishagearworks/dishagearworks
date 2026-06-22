import { FadeIn } from "./motion/FadeIn";

type SectionHeadingProps = {
  eyebrow?: string;
  /** optional two-digit section index, e.g. "02" */
  index?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean; // light=true → for dark backgrounds (white text)
};

/**
 * Consistent section heading: mono engineering eyebrow + bold title + subtitle.
 */
export function SectionHeading({
  eyebrow,
  index,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";
  return (
    <FadeIn className={`flex max-w-2xl flex-col ${alignment}`}>
      {eyebrow && (
        <span className="label-mono mb-4 inline-flex items-center gap-2.5 text-orange">
          {index && <span className="text-orange/60">{index}</span>}
          <span className="h-px w-7 bg-orange/70" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-heading text-3xl font-semibold leading-[1.1] sm:text-[2.6rem] ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-xl text-base leading-relaxed sm:text-lg ${
            light ? "text-steel" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}
