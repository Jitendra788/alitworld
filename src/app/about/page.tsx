import type { Metadata } from "next";
import { AboutContent } from "@/components/sections/AboutContent";
import { Founder } from "@/components/sections/Founder";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `About | ${siteConfig.name}`,
  description: `Learn about ${siteConfig.name} — vision, mission, services, and our team in Jaipur, Rajasthan.`,
};

export default function AboutPage() {
  return (
    <>
      <AboutContent />
      <Founder />
    </>
  );
}
