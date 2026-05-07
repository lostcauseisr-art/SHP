import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Experience } from "@/components/Experience";
import { CTAFinal } from "@/components/CTAFinal";
import { SectionDivider } from "@/components/SectionDivider";

export const metadata: Metadata = {
  title: "Experiencia, Shaping Governance Academy",
  description:
    "Una membresía premium con identidad institucional. Comunidad de líderes públicos, formación curada y certificados con valor internacional.",
};

const benefits = [
  { label: "01", title: "Acceso completo", body: "5 certificados y 58 cursos especializados, liberados progresivamente cada mes." },
  { label: "02", title: "Comunidad LATAM", body: "Red privada de líderes públicos y consultores estratégicos en sesiones periódicas." },
  { label: "03", title: "Sesiones en vivo", body: "Q&A mensual con Carlos Castillo y panel de expertos invitados." },
  { label: "04", title: "Biblioteca aplicada", body: "Prompts ejecutivos, plantillas de policy brief y casos internacionales documentados." },
  { label: "05", title: "Identidad institucional", body: "Carta de membresía firmada y sello oficial Shaping the Future en LinkedIn." },
  { label: "06", title: "Diagnóstico inicial", body: "Sesión 1:1 de bienvenida con un asesor de la academia para personalizar tu ruta." },
];

export default function ExperienciaPage() {
  return (
    <>
      <PageHero
        eyebrow="Experiencia premium"
        title="Una membresía con"
        italic="identidad."
        lede="No es un curso más. Es una academia diseñada como espacio de pertenencia, con comunidad activa de pares al más alto nivel y certificados con valor institucional."
      />
      <SectionDivider />
      <Experience />
      <SectionDivider />

      <section className="py-14 lg:py-20 bg-paper">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-10">
          <div className="max-w-[42ch] mb-16">
            <div className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.14em] text-gold-deep font-semibold">
              <span className="w-6 h-px bg-gold" />
              Lo que incluye la membresía
            </div>
            <h2 className="mt-5 font-display font-light text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.05] tracking-[-0.018em] text-navy">
              Seis dimensiones del <em className="text-gold-deep">programa</em>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <article
                key={b.label}
                className="bg-paper border border-line rounded-2xl p-7 hover:border-gold transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
              >
                <h3 className="font-display font-light text-[1.4rem] text-navy leading-tight tracking-[-0.012em]">
                  {b.title}
                </h3>
                <p className="mt-3 text-ink text-[0.92rem] leading-[1.6]">{b.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />
      <CTAFinal />
    </>
  );
}
