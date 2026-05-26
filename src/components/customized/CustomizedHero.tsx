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
            Customized Development
            <br />
            <span className="hero-gradient-text">From Scratch</span>
          </>
        }
        description="We transform your unique ideas into powerful, scalable applications — from the first line of code to the final launch."
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
