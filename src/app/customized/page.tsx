import type { Metadata } from "next";
import { CustomizedHero } from "@/components/customized/CustomizedHero";
import { ProjectShowcase } from "@/components/customized/ProjectShowcase";
import { PageCta } from "@/components/PageCta";
import { FAQ } from "@/components/sections/FAQ";
import { getFaqs } from "@/data/cms-loaders";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Custom Website & App Development for Startups | Alitworld",
  description:
    "Custom website and mobile app development by Alitworld — MVP to scale for startups. Tailored UX, payments, and integrations that convert visitors into customers.",
  path: "/customized",
});

export default function CustomizedPage() {
  const faqs = getFaqs();

  return (
    <>
      <CustomizedHero />
      <ProjectShowcase />
      <PageCta
        badge="Your idea, our code"
        title="Have a custom project in mind?"
        description="Tell us your requirements — we'll scope, design, and build a solution tailored to your business."
        primaryLabel="Discuss Your Project"
        secondaryHref="/prebuilt"
        secondaryLabel="See Prebuilt Options"
      />
      <FAQ items={faqs} />
    </>
  );
}
