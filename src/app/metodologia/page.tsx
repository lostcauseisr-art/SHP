import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Methodology } from "@/components/Methodology";
import { CTAFinal } from "@/components/CTAFinal";
import { SectionDivider } from "@/components/SectionDivider";

export const metadata: Metadata = {
  title: "Metodología, Shaping Governance Academy",
  description:
    "Aprendizaje aplicado, casos internacionales, laboratorios de decisión y comunidad de líderes. Conoce cómo se aprende en Shaping Governance Academy.",
};

export default function MetodologiaPage() {
  return (
    <>
      <PageHero
        eyebrow="Metodología"
        title="Cómo aprende quien decide"
        italic="diseñar el futuro."
        lede="Cuatro principios estructuran nuestro modelo formativo: aprendizaje aplicado, casos internacionales, laboratorios de decisión y comunidad activa de líderes públicos LATAM."
      />
      <SectionDivider />
      <Methodology />
      <SectionDivider />

      <section className="py-14 lg:py-20 bg-ivory">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.14em] text-gold-deep font-semibold">
                <span className="w-6 h-px bg-gold" />
                Convicción fundacional
              </div>
              <h2 className="mt-5 font-display font-light text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.05] tracking-[-0.018em] text-navy">
                El futuro no se predice, se <em className="text-gold-deep">diseña</em>.
              </h2>
            </div>
            <div className="space-y-6 text-[1rem] lg:text-[1.05rem] leading-[1.7] text-ink">
              <p>
                En Shaping Governance Academy nos negamos a tratar el futuro como un evento que ocurre. El futuro es una
                práctica deliberada, un método, una disciplina, un acto político. Y como toda disciplina, se enseña.
              </p>
              <p>
                Por eso nuestra metodología se construyó desde el primer día como una <em>arquitectura de aprendizaje
                aplicado</em>: cada módulo se evalúa con un entregable público, un análisis político con IA, un policy
                brief al estilo Dubai Future Foundation, un pitch grabado ante panel.
              </p>
              <p>
                No se gradúa quien acumula horas. Se gradúa quien presenta un trabajo que defendería ante su gabinete.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />
      <CTAFinal />
    </>
  );
}
