"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Aprendizaje aplicado",
    body: "Casos reales, no teoría. Cada módulo se evalúa con un entregable público: análisis político, policy brief, pitch grabado.",
  },
  {
    title: "Casos internacionales",
    body: "Estudios de Dubai, Singapur, Estonia y Emiratos Árabes Unidos. Aplicados a la realidad institucional latinoamericana.",
  },
  {
    title: "Laboratorios de decisión",
    body: "Simulaciones estratégicas con escenarios complejos donde el participante toma decisiones bajo restricciones reales.",
  },
  {
    title: "Comunidad de líderes",
    body: "Acceso a la red privada LATAM: pares, asesores y mentoría directa. El aprendizaje se multiplica entre quienes están en el mismo nivel.",
  },
];

export function Methodology() {
  return (
    <section id="metodologia" className="py-14 lg:py-20 bg-paper">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-paper rounded-2xl p-8 border border-line transition-all duration-500 hover:border-gold hover:-translate-y-1"
            >
              {/* Aura dorada que emerge detrás del cuadro al hover */}
              <div
                aria-hidden
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"
                style={{
                  boxShadow:
                    "0 0 0 1px rgba(201,162,77,0.35), 0 30px 80px -10px rgba(201,162,77,0.45), 0 0 60px 4px rgba(201,162,77,0.30), 0 0 120px rgba(230,207,142,0.35)",
                }}
              />

              <h3 className="font-display font-light text-[1.4rem] lg:text-[1.55rem] text-navy leading-tight tracking-[-0.012em] group-hover:text-gold-deep transition-colors duration-500">
                {s.title}
              </h3>
              <p className="mt-3 text-ink text-[0.92rem] leading-[1.6]">{s.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
