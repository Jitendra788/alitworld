"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  Globe2,
  MessageCircle,
  PhoneOff,
  Sparkles,
  Headphones,
  Code2,
  Smartphone,
  Search,
  FileCode2,
  Rocket,
} from "lucide-react";
import { faqs } from "@/data/site";

const faqIcons = [
  Globe2,
  Code2,
  Smartphone,
  FileCode2,
  Rocket,
  Search,
  Sparkles,
  MessageCircle,
  Headphones,
  PhoneOff,
] as const;

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-[#0f3d2e] py-14 sm:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 20% 0%, rgba(163,230,53,0.12), transparent), radial-gradient(ellipse 60% 40% at 90% 100%, rgba(255,255,255,0.06), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-center text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[2.6rem] lg:leading-tight">
          Frequently Asked Questions
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-white/70 sm:text-base">
          Clear answers about websites, apps, IT services, marketing, and SEO
          from Alitworld.
        </p>

        <div className="mt-10 grid items-stretch gap-8 lg:mt-14 lg:grid-cols-[1fr_minmax(280px,0.95fr)] lg:gap-10">
          {/* Left — white cards */}
          <div className="flex flex-col gap-3 sm:gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const Icon = faqIcons[index % faqIcons.length];

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl bg-white shadow-sm"
                >
                  <button
                    type="button"
                    className="flex w-full items-start gap-3 px-4 py-4 text-left sm:gap-4 sm:px-5 sm:py-4"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#c8f031] text-[#0f3d2e]">
                      <Icon className="h-5 w-5" strokeWidth={2.25} />
                    </span>
                    <span className="min-w-0 flex-1 pt-1.5">
                      <span className="block text-sm font-bold leading-snug text-[#0f3d2e] sm:text-[15px]">
                        {faq.question}
                      </span>
                    </span>
                    <span className="mt-1.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-[#0f3d2e]">
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-zinc-100 px-4 pb-4 pl-[4.25rem] pr-12 text-sm leading-relaxed text-zinc-600 sm:px-5 sm:pb-5 sm:pl-[4.75rem]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right — full photo */}
          <div className="relative min-h-[380px] overflow-hidden rounded-3xl lg:min-h-full">
            <Image
              src="/faq-support.jpg"
              alt="Alitworld team helping customers with websites, apps, and support"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
