import { CustomizedHero } from "@/components/customized/CustomizedHero";
import { ProjectShowcase } from "@/components/customized/ProjectShowcase";
import { PageCta } from "@/components/PageCta";
import { FAQ } from "@/components/sections/FAQ";

export default function CustomizedPage() {
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
      <FAQ />
    </>
  );
}
