import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { About } from "@/components/About";
import { WhyUs } from "@/components/WhyUs";
import { CTAFinal } from "@/components/CTAFinal";
import { SectionDivider } from "@/components/SectionDivider";

export const metadata: Metadata = {
  title: "Academia, Shaping Governance Academy",
  description:
    "Conoce Shaping Governance Academy: la academia internacional que forma a los líderes públicos que diseñan el futuro de Latinoamérica.",
};

export default function AcademiaPage() {
  return (
    <>
      <PageHero
        title="Una institución para los líderes que"
        italic="diseñan el futuro."
        lede="Cuatro décadas de experiencia consolidadas en una plataforma digital, comunitaria y aspiracional para quienes asumen responsabilidades públicas en Latinoamérica."
      />
      <SectionDivider />
      <About />
      <SectionDivider />
      <WhyUs />
      <SectionDivider />
      <CTAFinal />
    </>
  );
}
