import type { Metadata } from "next";
import { AboutContent } from "@/components/sections/AboutContent";
import { Founder } from "@/components/sections/Founder";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Alitworld | Startup Tech Partner in Jaipur",
  description:
    "About Alitworld Technologies — Build. Launch. Rank. Website, app, and digital marketing partner for startups in Jaipur, India. Meet our leadership and team.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <AboutContent />
      <Founder />
    </>
  );
}
