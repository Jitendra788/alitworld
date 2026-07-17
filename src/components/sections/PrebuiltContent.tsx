import Link from "next/link";
import { ArrowRight, Clock, Code2, Rocket, Shield } from "lucide-react";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { FAQ } from "@/components/sections/FAQ";
import { PrebuiltShowcase } from "@/components/sections/PrebuiltShowcase";
import { getFaqs } from "@/data/cms-loaders";
import { prebuiltBenefits, prebuiltPageContent } from "@/data/prebuilt";

const benefitIcons = [Rocket, Clock, Code2, Shield] as const;

export function PrebuiltContent() {
  const faqs = getFaqs();

  return (
    <>
      <PageHero
        label="Prebuilt SaaS"
        title={
          <>
            <span className="hero-gradient-text">Prebuilt SaaS</span>
            <br />
            Apps &amp; Websites for Startups
          </>
        }
        description={prebuiltPageContent.tagline}
      >
        <p className="text-2xl font-bold text-cyan sm:text-3xl">
          {prebuiltPageContent.priceLabel}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn-hero-primary">
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/customized" className="btn-hero-secondary">
            Need Custom Instead?
          </Link>
        </div>
      </PageHero>

      <section className="section relative z-10 section-mesh">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="SaaS"
            title={
              <>
                Check our <span className="gradient-text">SaaS Products</span>
              </>
            }
            description="Production-ready grocery, restaurant, and delivery platforms — launch in weeks, not months."
          />
          <div className="mt-14 sm:mt-16">
            <PrebuiltShowcase />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Why Prebuilt"
            title={
              <>
                Why choose <span className="gradient-text">Prebuilt</span>?
              </>
            }
            description="Production-ready platforms you can brand, deploy, and scale — without starting from zero."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {prebuiltBenefits.map((item, i) => {
              const Icon = benefitIcons[i];
              return (
                <article key={item.title} className="card-hover group p-6 text-center sm:p-8">
                  <div className="icon-badge mx-auto h-12 w-12">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-base font-bold text-brand">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <PageCta
        badge="Launch faster"
        title="Ready to launch your SaaS?"
        description="Book a free consultation — we'll help you pick the right prebuilt solution and customization plan."
        primaryLabel="Request a Quote"
      />

      <FAQ items={faqs} />
    </>
  );
}
