import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CertificateList } from "@/components/CertificateList";
import { CTAFinal } from "@/components/CTAFinal";
import { SectionDivider } from "@/components/SectionDivider";
import { TeamSection } from "@/components/TeamSection";

export const metadata: Metadata = {
  title: "Certificados, Shaping Governance Academy",
  description:
    "Cinco certificados internacionales · 58 cursos especializados. Formación ejecutiva en gobernanza, liderazgo, prospectiva e inteligencia artificial aplicada al servicio público.",
};

export default function CertificadosPage() {
  return (
    <>
      <PageHero
        title="Cinco rutas para diseñar el"
        italic="gobierno del futuro."
        lede="Cada certificado consolida una capacidad clave del servidor público de la próxima década. Estructurados para profundizar en orden, o para tomarse de manera independiente según tu trayectoria."
      />

      <SectionDivider />
      <TeamSection />

      <SectionDivider />
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-10">
          <CertificateList />
        </div>
      </section>

      <SectionDivider />
      <CTAFinal />
    </>
  );
}
