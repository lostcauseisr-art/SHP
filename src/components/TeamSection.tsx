"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const team = [
  {
    name: "Dr. Alejandro Mendívil",
    role: "Arquitectura institucional",
    photo: "/assets/profesores/Prof1.png",
  },
  {
    name: "Dra. Lucía Ramírez",
    role: "Innovación gubernamental",
    photo: "/assets/profesores/prof2.png",
  },
  {
    name: "Mauricio Calderón",
    role: "Estrategia de campañas",
    photo: "/assets/profesores/prof3.png",
  },
  {
    name: "Dr. Sebastián Vargas",
    role: "Foresight y ciudades inteligentes",
    photo: "/assets/profesores/prof4.png",
  },
  {
    name: "Dra. Carolina Estévez",
    role: "IA pública y diplomacia digital",
    photo: "/assets/profesores/prof5.png",
  },
];

export function TeamSection() {
  return (
    <section className="py-12 lg:py-16 bg-paper">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-10">
        <div className="max-w-[48ch] mb-12 lg:mb-16">
          <div className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.14em] text-gold-deep font-semibold">
            <span className="w-6 h-px bg-gold" />
            Equipo
          </div>
          <h2 className="mt-5 font-display font-light text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.05] tracking-[-0.018em] text-navy">
            Nuestro <em className="text-gold-deep">equipo</em> de profesionales.
          </h2>
          <p className="mt-5 text-[1rem] lg:text-[1.05rem] leading-[1.6] text-ink">
            Doctores, estrategas y consultores con trayectoria internacional en gobierno, política y prospectiva. Cada certificado está acompañado por especialistas que combinan rigor académico con experiencia práctica en gabinete.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-6">
          {team.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-md bg-ivory border border-line transition-all duration-500 group-hover:border-gold group-hover:shadow-[0_20px_50px_-15px_rgba(201,162,77,0.35)]">
                <Image
                  src={p.photo}
                  alt={p.name}
                  fill
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 18vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-display font-light text-[1rem] lg:text-[1.1rem] text-navy leading-tight tracking-[-0.012em]">
                  {p.name}
                </h3>
                <p className="mt-1.5 text-[0.65rem] uppercase tracking-[0.14em] text-gold-deep font-medium">
                  {p.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
