import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Portfolio } from "@/components/sections/Portfolio";
import { Services } from "@/components/sections/Services";
import { Founder } from "@/components/sections/Founder";
import { FAQ } from "@/components/sections/FAQ";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Portfolio />
      <Services />
      <Founder />
      <CtaBanner />
      <FAQ />
    </>
  );
}
