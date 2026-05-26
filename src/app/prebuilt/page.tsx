import type { Metadata } from "next";
import { PrebuiltContent } from "@/components/sections/PrebuiltContent";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `Prebuilt SaaS | ${siteConfig.name}`,
  description:
    "Production-ready SaaS templates starting @ ₹50,000. Multivendor grocery, e-commerce, delivery apps and more.",
};

export default function PrebuiltPage() {
  return <PrebuiltContent />;
}
