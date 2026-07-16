import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { PageCta } from "@/components/PageCta";
import { servicesPageContent } from "@/data/services";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Services | Website, App, Marketing & SEO — Alitworld",
  description:
    "Alitworld services: website designing, mobile app development, custom software, SaaS prebuilt, digital marketing, and SEO ranking in Jaipur.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title={
          <>
            Our <span className="hero-gradient-text">Services</span>
          </>
        }
        description={servicesPageContent.description}
      >
        <Link href="/contact" className="btn-hero-primary">
          Get a Free Quote
          <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      <section className="services-section-classic pb-16 pt-4 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ServicesGrid showHeader={false} />
        </div>
      </section>

      <PageCta
        badge="Let's work together"
        title="Need a custom solution?"
        description="Tell us your requirements — we'll recommend the right service and build a plan for your business."
        primaryLabel="Talk to Our Team"
      />
    </>
  );
}
