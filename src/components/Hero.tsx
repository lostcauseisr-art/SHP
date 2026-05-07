"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const headline = "Donde el poder aprende a construir el futuro.";

export function Hero() {
  const words = headline.split(" ");

  return (
    <section className="relative overflow-hidden pt-32 pb-12 lg:pt-44 lg:pb-16">
      {/* Halo dorado/marfil suave en el top */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[30vh] left-1/2 -translate-x-1/2 w-[140vw] h-[80vh]"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(201,162,77,.18) 0%, rgba(248,246,241,.7) 25%, rgba(255,255,255,0) 65%)",
        }}
      />
      <div className="relative mx-auto max-w-[1480px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/5 text-[0.72rem] tracking-[0.14em] uppercase text-navy mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          Shaping Governance Academy
        </motion.div>

        <h1 className="font-display font-light text-[clamp(2.6rem,7.5vw,7rem)] leading-[1.02] tracking-[-0.015em] text-navy max-w-[18ch]">
          {words.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden align-baseline">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 0.95,
                  delay: 0.15 + i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`inline-block ${w.includes("futuro") ? "italic text-gold-deep" : ""}`}
              >
                {w}
                {i < words.length - 1 && <>&nbsp;</>}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 max-w-[60ch] text-[1.05rem] lg:text-[1.15rem] leading-[1.6] text-ink"
        >
          La primera academia internacional en español que forma a líderes públicos, asesores y tomadores de decisión en{" "}
          <em className="font-display not-italic text-navy font-medium">gobernanza avanzada</em>, prospectiva
          estratégica e inteligencia artificial aplicada al servicio público, con la metodología del Dubai Future
          Foundation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-wrap gap-3"
        >
          <Link
            href="#certificados"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-navy text-white text-sm font-medium tracking-wide hover:bg-navy-soft transition-colors"
          >
            Explorar certificados <span aria-hidden>→</span>
          </Link>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-navy text-navy text-sm font-medium tracking-wide hover:bg-ivory transition-colors"
          >
            Solicitar información
          </Link>
        </motion.div>

        {/* Strip institucional inferior */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-14 lg:mt-20 pt-8 border-t border-line grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <Stat value="5" label="Certificados internacionales" />
          <Stat value="58" label="Cursos especializados" />
          <Stat value="+10" label="Idiomas disponibles" />
          <Stat value="LATAM" label="Comunidad de líderes" />
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-body font-light text-[2rem] lg:text-[2.4rem] leading-none tracking-tight text-gold-deep">
        {value}
      </div>
      <div className="mt-3 text-[0.72rem] uppercase tracking-[0.1em] text-ink font-medium">{label}</div>
    </div>
  );
}
