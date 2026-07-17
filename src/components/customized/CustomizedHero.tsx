import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export function CustomizedHero() {
  const ticker = Array(6).fill("Develop it from Best • Develop it Once • ");

  return (
    <>
      <PageHero
        label="Custom Development"
        title={
          <>
            Custom Website &amp; App Development
            <br />
            <span className="hero-gradient-text">Built From Scratch</span>
          </>
        }
        description="Alitworld builds custom websites and mobile apps — from the first line of code to launch, with optional marketing and SEO."
      >
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn-hero-primary">
            Start Your Project
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/prebuilt" className="btn-hero-secondary">
            Explore Prebuilt
          </Link>
        </div>
      </PageHero>

      <div className="overflow-hidden bg-gradient-to-r from-brand via-brand-light to-accent py-3.5">
        <div className="flex animate-marquee gap-0 whitespace-nowrap">
          {[...ticker, ...ticker].map((text, i) => (
            <span
              key={i}
              className="px-2 text-sm font-semibold tracking-wide text-white sm:text-base"
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
