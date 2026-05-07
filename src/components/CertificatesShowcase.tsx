"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { certificates } from "@/data/academy";

// Los 5 certificados completos
const DECK = certificates;

export function CertificatesShowcase() {
  return (
    <section className="bg-paper py-14 lg:py-20">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-10">
        {/* Heading */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-[42ch]">
            <div className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.14em] text-gold-deep font-semibold">
              <span className="w-6 h-px bg-gold" />
              Certificados
            </div>
            <h2 className="mt-5 font-display font-light text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] tracking-[-0.018em] text-navy">
              Cinco caminos. Una <em className="text-gold-deep">visión</em>.
            </h2>
          </div>
          <Link
            href="/certificados"
            className="inline-flex items-center gap-2 text-[0.78rem] uppercase tracking-[0.12em] text-navy hover:text-gold-deep transition-colors font-medium"
          >
            Ver el catálogo completo <span aria-hidden>→</span>
          </Link>
        </div>
      </div>

      {/* Horizontal scroll de los 5, full bleed para que el último se asome */}
      <div className="relative">
        <div
          className="overflow-x-auto pb-3 scroll-smooth snap-x snap-mandatory [scrollbar-width:thin] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:bg-line [&::-webkit-scrollbar-thumb]:rounded-full"
        >
          <div className="flex gap-6 lg:gap-7 px-6 lg:px-10 mx-auto max-w-[1480px] min-w-min">
            {DECK.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{
                  duration: 0.85,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="snap-start shrink-0 w-[260px] sm:w-[300px] lg:w-[330px] xl:w-[340px]"
              >
                <Link
                  href={`/certificados/${cert.slug}`}
                  className="group block"
                  aria-label={`Ver cursos del certificado ${cert.title}`}
                >
                  <div
                    className="relative aspect-[16/10] w-full overflow-hidden rounded-md bg-ivory transition-all duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2"
                    style={{
                      boxShadow: "0 10px 24px -10px rgba(20, 30, 60, 0.12)",
                    }}
                  >
                    <Image
                      src={cert.imageSrc}
                      alt={cert.title}
                      fill
                      sizes="(max-width: 640px) 80vw, 340px"
                      className="object-cover transition-all duration-[700ms] group-hover:scale-[1.04] group-hover:brightness-[1.08] group-hover:saturate-[1.1]"
                      priority={i < 3}
                    />

                    <div
                      aria-hidden
                      className="absolute inset-0 pointer-events-none rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-[700ms]"
                      style={{
                        boxShadow:
                          "0 30px 80px -10px rgba(201, 162, 77, 0.40), 0 0 60px 4px rgba(201, 162, 77, 0.22), inset 0 0 0 1px rgba(201, 162, 77, 0.30)",
                      }}
                    />

                    <div
                      aria-hidden
                      className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-[900ms]"
                      style={{
                        background:
                          "linear-gradient(115deg, rgba(255,255,255,0) 35%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0) 65%)",
                      }}
                    />
                  </div>

                  <div className="mt-4 transition-colors duration-500">
                    <h3 className="font-display font-light text-[0.95rem] lg:text-[1.05rem] text-navy leading-snug group-hover:text-gold-deep transition-colors duration-500">
                      {cert.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hint visual: gradiente fade en el borde derecho para sugerir que hay más */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-paper to-transparent"
        />
      </div>
    </section>
  );
}
