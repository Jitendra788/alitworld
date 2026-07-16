import type { Metadata } from "next";
import { PrebuiltContent } from "@/components/sections/PrebuiltContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Prebuilt SaaS Apps | Alitworld Technologies",
  description:
    "Alitworld prebuilt SaaS from ₹50,000 — multivendor grocery, ecommerce, food delivery apps with web + admin. Launch faster with Alitworld.",
  path: "/prebuilt",
});

export default function PrebuiltPage() {
  return <PrebuiltContent />;
}
