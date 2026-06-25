import type { Metadata } from "next";
import Link from "next/link";
import { ArticleShell } from "@/components/ArticleShell";
import { getArticle } from "@/config/articles";
import { siteConfig } from "@/config/site";

const article = getArticle("combine-harvester-sprocket-size-guide")!;

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
        Ordering the wrong sprocket is one of the most common — and most
        avoidable — mistakes in combine harvester maintenance. A sprocket that
        is one tooth out, or machined to the wrong bore, will not run true and
        can wear a new chain in a single season. The good news is that any
        sprocket can be specified accurately from four measurements you can take
        with basic tools.
      </p>

      <h2>The four measurements you need</h2>
      <p>
        Whether you are replacing a worn part or sourcing in bulk, these are the
        details a manufacturer needs to make the correct sprocket the first time.
      </p>

      <h3>1. Chain pitch</h3>
      <p>
        Pitch is the distance from the centre of one chain roller to the next.
        It is the single most important figure, because the sprocket teeth must
        match the chain exactly. Measure across several links and divide to
        reduce error. Many agricultural drives use a{" "}
        <strong>3/4 inch pitch</strong>, but always confirm against the chain
        actually fitted to your machine rather than assuming.
      </p>

      <h3>2. Number of teeth</h3>
      <p>
        Count every tooth around the sprocket. The tooth count sets the gear
        ratio and the working diameter, so it must be exact. Combine harvester
        sprockets commonly fall in the <strong>13 to 70 teeth</strong> range
        depending on the position in the drive. If the old sprocket is badly
        worn, count from a matching part on the other side of the machine.
      </p>

      <h3>3. Bore and keyway</h3>
      <p>
        The bore is the centre hole that fits the shaft; the keyway is the slot
        that locks the sprocket to the shaft so it cannot spin. Measure the
        shaft diameter and the key width. Bore options include plain bore,
        keyway, splined, taper bore and fully custom bores. Getting this wrong is
        the usual cause of a sprocket that "fits but slips."
      </p>

      <h3>4. Hub style and overall width</h3>
      <p>
        Note whether the sprocket is plain (flat) or has an extended hub or boss,
        and measure the total width. This affects how the part sits against
        bearings and spacers in the assembly.
      </p>

      <h2>No specifications? Send a sample</h2>
      <p>
        If the machine is old, imported or the part number has worn away, you do
        not need a drawing. A worn{" "}
        <Link href="/products/sprockets">sprocket</Link> sample, or even clear
        photos with a ruler for scale, is enough to reverse-engineer a
        replacement. Including the matching{" "}
        <Link href="/products/shafts">shaft</Link> dimensions helps confirm the
        bore and keyway. This is how most replacement and discontinued parts are
        made.
      </p>

      <h2>A quick pre-order checklist</h2>
      <ul>
        <li>Chain pitch (confirmed from the actual chain)</li>
        <li>Exact number of teeth</li>
        <li>Bore diameter and keyway size</li>
        <li>Hub style and overall width</li>
        <li>Material preference and quantity required</li>
      </ul>
      <p>
        With these in hand, a manufacturer can quote quickly and machine to your
        requirement. DISHA GEARWORKS produces simplex sprockets in EN8 and mild
        steel, with tempered teeth and custom bores as needed, for combine
        harvesters and agricultural machinery.
      </p>
      <p>
        Have the details ready?{" "}
        <Link href="/products/sprockets">See our sprockets</Link> or{" "}
        <Link href="/contact">request a quote</Link> with your measurements,
        sample photo or drawing.
      </p>
    </ArticleShell>
  );
}
