/**
 * Renders a JSON-LD <script> tag for structured data. Pass a single schema
 * object or an array; it is serialized safely into the document head/body.
 *
 * Server component — emits static markup, no client JS.
 */
export function JsonLd({
  data,
}: {
  data: Record<string, unknown> | Record<string, unknown>[];
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
