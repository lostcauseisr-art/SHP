"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function CTAFinal() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(201,162,77,.15) 0%, rgba(248,246,241,.5) 35%, rgba(255,255,255,0) 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1480px] px-6 lg:px-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-light text-[clamp(2.6rem,8vw,7rem)] leading-[1.02] tracking-[-0.02em] text-navy max-w-[18ch] mx-auto"
        >
          Tu lugar entre los líderes que <em className="text-gold-deep">diseñan el futuro</em>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-[1.05rem] lg:text-[1.15rem] leading-[1.6] text-ink max-w-[58ch] mx-auto"
        >
          Solicita información sobre los programas y conoce las plazas disponibles para el próximo ciclo. Un asesor
          institucional te contactará en las siguientes 48 horas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-navy text-white text-sm font-medium tracking-wide hover:bg-navy-soft transition-colors"
          >
            Solicitar información <span aria-hidden>→</span>
          </Link>
          <Link
            href="#certificados"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-navy text-navy text-sm font-medium tracking-wide hover:bg-ivory transition-colors"
          >
            Explorar certificados
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
