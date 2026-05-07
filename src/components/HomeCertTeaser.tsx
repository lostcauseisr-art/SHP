"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { certificates, getCoursesByCertificate } from "@/data/academy";

export function HomeCertTeaser() {
  return (
    <section className="py-14 lg:py-20 bg-ivory">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14 lg:mb-20">
          <div className="max-w-[36ch]">
            <div className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.14em] text-gold-deep font-semibold">
              <span className="w-6 h-px bg-gold" />
              Programas
            </div>
            <h2 className="mt-5 font-display font-light text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] tracking-[-0.018em] text-navy">
              Cinco certificados. Una <em className="text-gold-deep">visión</em>.
            </h2>
          </div>
          <Link
            href="/certificados"
            className="inline-flex items-center gap-2 text-[0.78rem] uppercase tracking-[0.12em] text-navy hover:text-gold-deep transition-colors font-medium"
          >
            Ver todos los certificados <span aria-hidden>→</span>
          </Link>
        </div>

        <ul className="border-t border-line">
          {certificates.map((cert, i) => {
            const count = getCoursesByCertificate(cert.id).length;
            return (
              <motion.li
                key={cert.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="border-b border-line"
              >
                <Link
                  href={`/certificados/${cert.slug}`}
                  className="group grid grid-cols-[1fr_40px] lg:grid-cols-[140px_1fr_140px_40px] items-center gap-5 lg:gap-8 py-7 lg:py-8 transition-all hover:px-4 lg:hover:px-6"
                >
                  <span className="hidden lg:block relative aspect-[16/10] rounded-md overflow-hidden border border-line bg-paper">
                    <Image
                      src={cert.imageSrc}
                      alt=""
                      fill
                      sizes="140px"
                      className="object-contain bg-paper"
                    />
                  </span>
                  <div>
                    <h3 className="font-display font-light text-[1.2rem] lg:text-[1.55rem] text-navy leading-tight tracking-[-0.012em] group-hover:text-gold-deep transition-colors">
                      {cert.title}
                    </h3>
                    {cert.subtitle && (
                      <p className="hidden lg:block mt-1.5 text-[0.85rem] text-ink line-clamp-1">{cert.subtitle}</p>
                    )}
                  </div>
                  <span className="text-[0.7rem] uppercase tracking-[0.12em] text-ink/70 hidden lg:block">
                    {count} cursos
                  </span>
                  <span className="text-gold-deep group-hover:translate-x-1 transition-transform justify-self-end" aria-hidden>
                    →
                  </span>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
