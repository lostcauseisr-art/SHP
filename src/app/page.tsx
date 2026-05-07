import { Hero } from "@/components/Hero";
import { CertificatesShowcase } from "@/components/CertificatesShowcase";
import { CTAFinal } from "@/components/CTAFinal";
import { SectionDivider } from "@/components/SectionDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <CertificatesShowcase />
      <SectionDivider />
      <CTAFinal />
    </>
  );
}
