"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const reels = [
  { id: 1, title: "Behind the scenes" },
  { id: 2, title: "Client success story" },
  { id: 3, title: "Product launch" },
  { id: 4, title: "Team culture" },
  { id: 5, title: "Design process" },
  { id: 6, title: "Tech stack tips" },
];

export function SocialPresence() {
  const [index, setIndex] = useState(0);
  const visible = 3;

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () =>
    setIndex((i) => Math.min(reels.length - visible, i + 1));

  return (
    <section className="border-y border-card-border bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Social Presence"
          title={
            <>
              Trusted by <span className="gradient-text">130k+ People</span>
            </>
          }
        />

        <div className="relative mt-14">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reels.slice(index, index + visible).map((reel) => (
              <div
                key={reel.id}
                className="card-hover relative aspect-[9/16] max-h-80 overflow-hidden bg-gradient-to-br from-brand-muted via-white to-accent-muted"
              >
                <div className="flex h-full flex-col items-center justify-center p-6 text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">
                    <Play className="h-5 w-5 fill-brand text-brand" />
                  </span>
                  <span className="mt-4 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-accent backdrop-blur-sm">
                    Reel {reel.id}
                  </span>
                  <p className="mt-3 text-sm font-semibold text-brand">{reel.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-3">
            <button
              type="button"
              onClick={prev}
              disabled={index === 0}
              className="rounded-full border border-card-border bg-white p-3 shadow-sm transition-colors hover:bg-brand-muted disabled:opacity-30"
              aria-label="Previous reels"
            >
              <ChevronLeft className="h-5 w-5 text-brand" />
            </button>
            <button
              type="button"
              onClick={next}
              disabled={index >= reels.length - visible}
              className="rounded-full border border-card-border bg-white p-3 shadow-sm transition-colors hover:bg-brand-muted disabled:opacity-30"
              aria-label="Next reels"
            >
              <ChevronRight className="h-5 w-5 text-brand" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
