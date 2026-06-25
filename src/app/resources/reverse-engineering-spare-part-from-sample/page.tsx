import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/ArticleShell";
import { getArticle } from "@/config/articles";
import { siteConfig } from "@/config/site";

const article = getArticle("reverse-engineering-spare-part-from-sample")!;

export const metadata: Metadata = {
  title: article.metaTitle,
  description: article.description,
  alternates: { canonical: `/resources/${article.slug}` },
  openGraph: {
    title: article.title,
    description: article.description,
    url: `${siteConfig.url}/resources/${article.slug}`,
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell article={article}>
      <p>
        Older and imported machines often outlive their spare-part supply. The
        part number is discontinued, the original maker has moved on, and no
        drawing exists. That does not mean the machine is finished —{" "}
        <strong>reverse engineering</strong> turns a worn-out part, a clear photo
        or a rough sketch into a manufacturable replacement. Here is how the
        process works and how to make it accurate.
      </p>

      <h2>What "reverse engineering" actually means here</h2>
      <p>
        In practical manufacturing terms, it means measuring an existing
        component (or working from photos and a known mating part) to recreate
        the geometry needed to machine a new one. For agricultural parts —{" "}
        <Link href="/products/custom-cnc-components">CNC components</Link>,{" "}
        <Link href="/products/bushes">bushes</Link>, shafts, sprockets and
        similar — this is routine.
      </p>

      <h2>The starting point: sample, photo or sketch</h2>
      <p>
        The best input is the old part itself, even if worn. Where the part is
        lost or unusable, the following help:
      </p>
      <ul>
        <li>Clear photos from several angles with a ruler or caliper for scale</li>
        <li>The mating part it fits (for example the shaft a bush rides on)</li>
        <li>Key dimensions you can measure: outer diameter, bore, length, thread</li>
        <li>A note on the material if known, and how the part failed</li>
      </ul>

      <h2>Measuring for accuracy</h2>
      <p>
        Critical features are measured with vernier calipers, micrometers and
        bore gauges; height gauges and custom gauges are used where needed. Worn
        surfaces are a common challenge — a bearing seat that has spun, or teeth
        that have lost their profile. An experienced manufacturer reconstructs
        the original intended dimension rather than copying the worn one, which
        is why the mating part and the failure mode are so useful.
      </p>

      <h2>From measurements to a finished part</h2>
      <p>
        Once geometry and material are confirmed, the component is machined —
        turned, milled, drilled, threaded or ground as required — then inspected
        before dispatch. For assemblies, the rebuilt part is checked against the
        mating components so it fits the real machine, not just the drawing.
      </p>

      <h2>What you get</h2>
      <ul>
        <li>A replacement for a discontinued or unavailable part</li>
        <li>The option to improve material or hardness where the original was weak</li>
        <li>Repeatability — once made, the part can be re-ordered in future</li>
      </ul>
      <p>
        DISHA GEARWORKS regularly manufactures{" "}
        <Link href="/products/combine-harvester-components">
          combine harvester components
        </Link>{" "}
        and custom parts from samples, photos and drawings, including old and
        discontinued items. Manufacturing is as per sample, drawing or custom
        requirement, with every part inspected before dispatch.
      </p>
      <p>
        Have a part with no drawing?{" "}
        <Link href="/contact">Send us a sample or photo</Link> and we will
        reverse-engineer it and quote.
      </p>
    </ArticleShell>
  );
}
