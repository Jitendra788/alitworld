"use client";

import dynamic from "next/dynamic";

const Hero3DScene = dynamic(
  () => import("@/components/Hero3DScene").then((m) => m.Hero3DScene),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full bg-gradient-to-br from-[#050a14] via-[#1a2744] to-[#0f172a] animate-pulse" />
    ),
  }
);

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0">
        <Hero3DScene />
      </div>

      {/* Instagram-style glow overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(79,70,229,0.25),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_60%,rgba(56,189,248,0.12),transparent_45%)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050a14]/85 via-[#050a14]/35 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/90 via-transparent to-transparent" />
    </div>
  );
}
