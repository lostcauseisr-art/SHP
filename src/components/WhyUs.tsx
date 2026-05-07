"use client";

import { motion } from "framer-motion";

const reasons = [
  "Formación diseñada específicamente para líderes y tomadores de decisión.",
  "Enfoque vertical en gobernanza, prospectiva estratégica e inteligencia artificial aplicada.",
  "Cinco certificados estructurados por capacidades clave del servidor público de la próxima década.",
  "Identidad visual e institucional premium, comparable a programas internacionales de élite.",
  "Conexión real entre Dubái, Latinoamérica y la visión global del gobierno del futuro.",
  "Contenido aplicable a retos reales, entregables públicos, no solo lecturas académicas.",
];

export function WhyUs() {
  return (
    <section id="por-que" className="py-14 lg:py-20 bg-paper">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-10">
        <div className="max-w-[42ch] mb-16 lg:mb-20">
          <div className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.14em] text-gold-deep font-semibold">
            <span className="w-6 h-px bg-gold" />
            Por qué Shaping Governance Academy
          </div>
          <h2 className="mt-5 font-display font-light text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] tracking-[-0.018em] text-navy">
            Seis razones por las que este es el <em className="text-gold-deep">programa</em>.
          </h2>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {reasons.map((r, i) => (
            <motion.li
              key={r}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.65, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-paper rounded-2xl p-7 lg:p-8 border border-line transition-all duration-500 hover:border-gold hover:-translate-y-1"
            >
              {/* Aura dorada al hover */}
              <div
                aria-hidden
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"
                style={{
                  boxShadow:
                    "0 0 0 1px rgba(201,162,77,0.35), 0 30px 80px -10px rgba(201,162,77,0.45), 0 0 60px 4px rgba(201,162,77,0.30), 0 0 120px rgba(230,207,142,0.35)",
                }}
              />
              <p className="text-[1.05rem] leading-[1.55] text-navy font-light group-hover:text-gold-deep transition-colors duration-500">
                {r}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
