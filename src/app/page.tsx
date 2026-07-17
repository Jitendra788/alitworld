import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Portfolio } from "@/components/sections/Portfolio";
import { Services } from "@/components/sections/Services";
import { Founder } from "@/components/sections/Founder";
import { FAQ } from "@/components/sections/FAQ";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { getFaqs, getPortfolio } from "@/data/cms-loaders";

export default function HomePage() {
  const portfolio = getPortfolio();
  const faqs = getFaqs();

  return (
    <>
      <Hero />
      <Features />
      <Portfolio projects={portfolio} />
      <Services />
      <Founder />
      <FAQ items={faqs} />
      <CtaBanner />
    </>
  );
}
