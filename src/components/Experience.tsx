"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "Formación para perfiles de alto impacto",
    body: "Servidores públicos, asesores, consultores y candidatos que asumen responsabilidades de decisión institucional.",
  },
  {
    title: "Contenido curado por expertos",
    body: "40 años de experiencia consolidada en gabinete, con casos internacionales y referencias a la metodología Dubai Future Foundation.",
  },
  {
    title: "Experiencia internacional",
    body: "Visión global con aplicación local: ponemos en diálogo Dubái, Singapur y Estonia con la realidad institucional de Latinoamérica.",
  },
  {
    title: "Comunidad activa de aprendizaje",
    body: "Red privada de líderes públicos LATAM, sesiones en vivo y acceso a Carlos Castillo y al equipo institucional.",
  },
];

export function Experience() {
  return (
    <section id="experiencia" className="py-14 lg:py-20 bg-ivory">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-start">
          <div>
            <h2 className="font-display font-light text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] tracking-[-0.018em] text-navy max-w-[14ch]">
              Una membresía con <em className="text-gold-deep">identidad</em>.
            </h2>
            <p className="mt-8 text-ink text-[1rem] leading-[1.65] max-w-[44ch]">
              No es un curso más. Es una academia diseñada como espacio de pertenencia, con identidad visual fuerte,
              certificados con valor institucional y comunidad de pares al más alto nivel.
            </p>
            <blockquote className="mt-12 border-l-2 border-gold pl-6">
              <p className="font-display italic text-[1.4rem] lg:text-[1.6rem] leading-snug text-navy">
                The future belongs to those who imagine, design, and execute it.
              </p>
              <footer className="mt-4 text-[0.78rem] uppercase tracking-[0.12em] text-ink">
                H.H. Sheikh Mohammed bin Rashid Al Maktoum
              </footer>
            </blockquote>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {items.map((it, i) => (
              <motion.article
                key={it.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="bg-paper border border-line rounded-2xl p-7 lg:p-8 hover:border-gold transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
              >
                <h3 className="font-display font-light text-[1.4rem] lg:text-[1.55rem] text-navy leading-tight tracking-[-0.012em]">
                  {it.title}
                </h3>
                <p className="mt-3 text-ink text-[0.92rem] leading-[1.6]">{it.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
