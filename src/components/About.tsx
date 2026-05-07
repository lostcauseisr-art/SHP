"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    label: "Pilar 01",
    title: "Liderazgo estratégico",
    body: "Formación ejecutiva para tomadores de decisión que necesitan navegar complejidad institucional con visión de largo plazo.",
  },
  {
    label: "Pilar 02",
    title: "Gobernanza para el futuro",
    body: "Métodos prospectivos al estilo Dubai Future Foundation, aplicados a la realidad institucional latinoamericana.",
  },
  {
    label: "Pilar 03",
    title: "Transformación institucional",
    body: "Diseño de Estados ágiles, éticos y exponenciales, con inteligencia artificial aplicada a la gestión pública.",
  },
];

export function About() {
  return (
    <section id="academia" className="py-14 lg:py-20 bg-paper">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-display font-light text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] tracking-[-0.018em] text-navy max-w-[16ch]">
              Una institución para los líderes que <em className="text-gold-deep">diseñan</em> el futuro.
            </h2>
            <div className="mt-10 prose-academy">
              <p>
                <strong>Shaping Governance Academy</strong> nace de cuatro décadas de experiencia asesorando gobiernos en siete países ,
                consolidadas en una plataforma digital, comunitaria y aspiracional para quienes asumen responsabilidades
                públicas en Latinoamérica.
              </p>
              <p>
                Nuestra convicción es simple: el futuro no se predice, se diseña. Y se diseña con método, datos,
                comunidad y coraje político.
              </p>
              <p>
                Formamos a la próxima generación de servidores públicos, asesores legislativos, consultores
                estratégicos y candidatos con las tres herramientas que definirán al líder de la próxima década:
                <em className="text-navy"> foresight estratégico, inteligencia artificial aplicada y diseño institucional</em>.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-5">
            {pillars.map((p, i) => (
              <motion.article
                key={p.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-paper border border-line rounded-2xl p-7 lg:p-9 hover:border-gold transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
              >
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="flex-1 h-px bg-line group-hover:bg-gold transition-colors" />
                </div>
                <h3 className="font-display font-light text-[1.55rem] lg:text-[1.75rem] tracking-[-0.012em] text-navy leading-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-ink text-[0.95rem] leading-[1.6]">{p.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
