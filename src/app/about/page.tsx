import type { Metadata } from "next";
import { AboutContent } from "@/components/sections/AboutContent";
import { Founder } from "@/components/sections/Founder";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Alitworld Technologies | IT Company in Jaipur",
  description:
    "About Alitworld Technologies — Jaipur IT company for website designing, app development, digital marketing, and SEO. Meet our founder and team.",
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
