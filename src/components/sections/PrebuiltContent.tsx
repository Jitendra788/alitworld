import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Code2,
  Layers,
  Rocket,
  Shield,
} from "lucide-react";
import { PageCta } from "@/components/PageCta";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { FAQ } from "@/components/sections/FAQ";
import {
  prebuiltBenefits,
  prebuiltPageContent,
  prebuiltProducts,
} from "@/data/prebuilt";

const benefitIcons = [Rocket, Clock, Code2, Shield] as const;

export function PrebuiltContent() {
  return (
    <>
      <PageHero
        label="Prebuilt SaaS"
        title={
          <>
            <span className="hero-gradient-text">Prebuilt SaaS</span>
            <br />
            Software for Startups
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

      <section className="section pt-8 section-mesh sm:pt-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="card-hover overflow-hidden p-4 sm:p-6">
            <img
              src="/features/saas-prebuilt.png"
              alt="Multivendor Grocery Solution — App, Web and Panel"
              className="w-full rounded-2xl object-contain"
            />
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

      <section className="section section-mesh">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="SaaS"
            title={
              <>
                Check our <span className="gradient-text">SaaS Products</span>
              </>
            }
            description="Ready-to-launch solutions for grocery, e-commerce, delivery, and business dashboards."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {prebuiltProducts.map((product) => (
              <article key={product.id} className="card-hover group overflow-hidden">
                {"image" in product && product.image ? (
                  <div className="overflow-hidden bg-[#f0f4f0] p-4 sm:p-5">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full rounded-xl object-contain"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="flex h-32 items-center justify-center bg-gradient-to-br from-brand-muted to-accent-muted sm:h-36">
                    <Layers className="h-12 w-12 text-brand/40" />
                  </div>
                )}
                <div className="p-6 sm:p-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent">
                    {product.tagline}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-brand">{product.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {product.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {product.includes.map((item) => (
                      <li
                        key={item}
                        className="inline-flex items-center gap-1.5 rounded-full bg-surface px-3 py-1 text-xs font-medium text-muted"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        badge="Launch faster"
        title="Ready to launch your SaaS?"
        description="Book a free consultation — we'll help you pick the right prebuilt solution and customization plan."
        primaryLabel="Request a Quote"
      />

      <FAQ />
    </>
  );
}
