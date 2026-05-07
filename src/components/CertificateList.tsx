"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { certificates } from "@/data/academy";

export function CertificateList() {
  return (
    <div className="space-y-24 lg:space-y-36">
      {certificates.map((cert, i) => {
        const reverse = i % 2 === 1;

        return (
          <motion.article
            key={cert.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className={`grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-20 items-center ${
              reverse ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div>
              <h3 className="font-display font-light text-[clamp(1.9rem,4.5vw,3.4rem)] leading-[1.05] tracking-[-0.018em] text-navy">
                {cert.title}
              </h3>
              {cert.subtitle && (
                <p className="mt-5 text-[1rem] lg:text-[1.05rem] leading-[1.6] text-ink max-w-[58ch]">{cert.subtitle}</p>
              )}

              {cert.themes && cert.themes.length > 0 && (
                <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 max-w-[52ch]">
                  {cert.themes.slice(0, 6).map((t) => (
                    <li
                      key={t}
                      className="text-[0.88rem] text-ink leading-snug flex items-baseline gap-2"
                    >
                      <span className="text-gold-deep font-bold">·</span> {t}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href={`/certificados/${cert.slug}`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-navy text-white text-sm font-medium tracking-wide hover:bg-navy-soft transition-colors"
                >
                  Explorar cursos <span aria-hidden>→</span>
                </Link>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-navy/30 text-navy text-sm font-medium tracking-wide hover:border-navy transition-colors"
                >
                  Solicitar información
                </Link>
              </div>
            </div>

            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-line bg-ivory shadow-[var(--shadow-medium)]">
              <Image
                src={cert.imageSrc}
                alt={`Portada del certificado ${cert.romanNumeral}, ${cert.title}`}
                fill
                sizes="(max-width: 1024px) 90vw, 600px"
                className="object-contain bg-ivory"
                priority={i < 2}
              />
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
