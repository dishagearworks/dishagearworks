import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/ArticleShell";
import { getArticle } from "@/config/articles";
import { siteConfig } from "@/config/site";

const article = getArticle("sourcing-custom-cnc-agricultural-components-export")!;

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
        Sourcing custom CNC agricultural components from India can give export
        buyers a strong combination of capability and value — but the quality of
        the quotation you get back depends almost entirely on the quality of the
        information you send. This guide is a practical checklist to help you
        brief a supplier well and avoid the back-and-forth that slows projects
        down.
      </p>

      <h2>1. Lead with a drawing or a sample</h2>
      <p>
        The clearest brief is a dimensioned drawing (PDF or CAD) or a physical
        sample. If you have neither, clear photos with a scale plus the key
        measurements are a workable start — a capable supplier can{" "}
        <Link href="/resources/reverse-engineering-spare-part-from-sample">
          reverse-engineer from a sample
        </Link>
        . The more precisely the geometry is defined, the more accurate the quote.
      </p>

      <h2>2. State the material clearly</h2>
      <p>
        Material drives both cost and performance. Specify the grade if you know
        it — common options include EN8, cast iron, mild steel, stainless steel
        and aluminium — or describe the application and let the supplier
        recommend one. If you are unsure between a medium-carbon steel and a
        case-hardening alloy, our note on{" "}
        <Link href="/resources/en8-vs-20mncr5-gear-material">
          EN8 vs 20MnCr5
        </Link>{" "}
        is a useful primer.
      </p>

      <h2>3. Define tolerances and critical features</h2>
      <p>
        Not every dimension needs to be tight. Tell the supplier which features
        are critical — a bearing seat, a bore, a thread, a mating face — and the
        tolerance they must hold. Over-specifying every dimension raises cost
        unnecessarily; under-specifying the critical ones risks fitment problems.
      </p>

      <h2>4. Give realistic quantities</h2>
      <p>
        Pricing changes with volume. Indicate whether you need a prototype, a
        trial batch or regular bulk supply, and your likely re-order pattern.
        This lets the supplier plan tooling and quote a fair per-piece price.
        Quantities are agreed as per order requirement rather than fixed minimums.
      </p>

      <h2>5. Confirm finish, inspection and packaging</h2>
      <ul>
        <li>Surface finish required (machined, painted, etc.)</li>
        <li>Any inspection or measurement records you need</li>
        <li>Export-suitable packaging for your destination</li>
      </ul>

      <h2>6. Agree commercial terms early</h2>
      <p>
        Shipping terms (Incoterms), lead times and payment terms are best agreed
        up front so there are no surprises. A good supplier will confirm these in
        writing with the quotation. See our{" "}
        <Link href="/export">export information</Link> for how we work with
        international buyers.
      </p>

      <h2>A quick brief checklist</h2>
      <ul>
        <li>Drawing, CAD or sample (or photos + key dimensions)</li>
        <li>Material grade or application description</li>
        <li>Critical features and tolerances</li>
        <li>Quantity and re-order expectation</li>
        <li>Finish, inspection and packaging needs</li>
        <li>Destination and preferred commercial terms</li>
      </ul>
      <p>
        DISHA GEARWORKS manufactures{" "}
        <Link href="/products/custom-cnc-components">
          custom CNC turned and VMC machined components
        </Link>{" "}
        for agriculture, automotive and industrial applications, with reverse
        engineering available and every part inspected before dispatch.
      </p>
      <p>
        Ready to brief us?{" "}
        <Link href="/contact">Request a quote</Link> with your drawing, sample or
        photo, material and quantity — and we will respond with pricing and lead
        time.
      </p>
    </ArticleShell>
  );
}
