"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/site";
import { ServicesClassicHeader } from "@/components/sections/ServicesClassicHeader";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section services-section-classic">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ServicesClassicHeader
          label="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about working with Alitworld Technologies."
        />

        <div className="mt-8 space-y-3 sm:mt-12 md:mt-14">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-accent/30 shadow-lg shadow-accent/5"
                    : "border-card-border shadow-sm hover:border-accent/20"
                }`}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left text-sm font-semibold text-brand sm:gap-4 sm:px-6 sm:py-5 sm:text-base"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  {faq.question}
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                      isOpen ? "bg-accent text-white" : "bg-brand-muted text-accent"
                    }`}
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-card-border px-4 pb-4 pt-3 text-sm leading-relaxed text-muted sm:px-6 sm:pb-5 sm:pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
