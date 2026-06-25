import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/ArticleShell";
import { getArticle } from "@/config/articles";
import { siteConfig } from "@/config/site";

const article = getArticle("reduction-body-assembly-explained")!;

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
        On a combine harvester, the front wheels do more than roll — they carry
        much of the machine's weight and deliver the drive that pushes it through
        the crop. The component that makes this possible at each front wheel is
        the <strong>reduction body assembly</strong>. It is a part many buyers
        only think about when one fails, so here is what it actually does and
        what to share when you need a replacement.
      </p>

      <h2>What the reduction body assembly does</h2>
      <p>
        The reduction body sits at the front wheel and performs three related
        jobs:
      </p>
      <ul>
        <li>
          <strong>Speed reduction</strong> — it gears down the drive so the
          large front wheel turns with enough torque to move a loaded machine.
        </li>
        <li>
          <strong>Power transfer</strong> — it transmits drive from the
          transmission out to the wheel reliably under field load.
        </li>
        <li>
          <strong>Braking support</strong> — it forms part of the assembly that
          helps hold and control the machine.
        </li>
      </ul>
      <p>
        Because each front wheel needs one, reduction bodies are typically used
        as a <strong>set of two</strong> — one on the left and one on the right.
      </p>

      <h2>What is inside the assembly</h2>
      <p>
        Supplied as a complete unit, a reduction body assembly generally includes
        the housing, the reduction body itself, gears,{" "}
        <Link href="/products/shafts">shafts</Link>, bearings and{" "}
        <Link href="/products/hubs">hubs</Link> as per the order requirement. In
        the configuration we manufacture, the body/housing is mild steel, gears
        are 20MnCr5 and shafts are EN8, with bearings included when ordered as a
        full assembly.
      </p>
      <p>
        Buyers who already have a serviceable housing sometimes need the body
        only rather than the complete unit — both options are available.
      </p>

      <h2>Signs a reduction body needs attention</h2>
      <ul>
        <li>Unusual noise or grinding from a front wheel under load</li>
        <li>Play or wobble at the wheel</li>
        <li>Loss of drive or reduced pushing power on one side</li>
        <li>Oil leakage from the housing</li>
      </ul>

      <h2>What to share when ordering</h2>
      <p>
        Reduction bodies vary between machines, so a sample-based or photo-based
        approach gives the most accurate result. Helpful details include:
      </p>
      <ul>
        <li>Whether you need the complete assembly or body only</li>
        <li>Left side, right side, or a set of two</li>
        <li>A sample or clear photos of the existing part</li>
        <li>The combine harvester it fits and the quantity required</li>
      </ul>
      <p>
        DISHA GEARWORKS manufactures{" "}
        <Link href="/products/reduction-body-assembly">
          reduction body full assemblies
        </Link>{" "}
        for combine harvester front-wheel applications, tested before dispatch.
        Parts can be made as per sample, drawing or custom requirement.
      </p>
      <p>
        Need a replacement?{" "}
        <Link href="/contact">Request a quote</Link> with your sample or photo
        and side requirement, and we will respond with materials and lead time.
      </p>
    </ArticleShell>
  );
}
