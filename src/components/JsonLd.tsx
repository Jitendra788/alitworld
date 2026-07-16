import { getOrganizationJsonLd } from "@/lib/seo";

/** Server-rendered JSON-LD for Google (safe for App Router hydration). */
export function JsonLd() {
  const json = JSON.stringify(getOrganizationJsonLd()).replace(/</g, "\\u003c");

  return (
    <script
      id="alitworld-jsonld"
      type="application/ld+json"
      // Prevent browser/extension type mutations from causing hydration errors
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
