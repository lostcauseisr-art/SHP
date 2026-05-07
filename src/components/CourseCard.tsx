"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Course } from "@/data/academy";

export function CourseCard({ course, index }: { course: Course; index: number }) {
  // Outer wrapper has NO transform → IntersectionObserver measures its real grid position.
  // Inner motion.div is the one that translates from the right.
  const ref = useRef<HTMLDivElement>(null);
  // amount: 0 → dispara apenas un pixel entra al viewport
  // margin "0px 0px 200px 0px" → pre-dispara 200px antes de llegar a la sección
  const inView = useInView(ref, { once: true, amount: 0, margin: "0px 0px 200px 0px" });

  return (
    <div ref={ref} className="h-full">
      <motion.div
        className="h-full"
        initial={{ x: 320, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: 320, opacity: 0 }}
        transition={{
          duration: 1.15,
          delay: Math.min(index * 0.06, 0.9),
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Link
          href={`/cursos/${course.slug}`}
          className="group block h-full bg-paper rounded-xl overflow-hidden border border-line hover:border-gold transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-medium)] flex flex-col"
        >
          {/* Image, fixed aspect, all cards same size */}
          <div className="relative aspect-[16/10] bg-ivory overflow-hidden">
            <Image
              src={course.imageSrc}
              alt={course.title}
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, (max-width: 1280px) 30vw, 22vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute top-2.5 left-2.5 px-2.5 py-1 bg-paper/95 backdrop-blur rounded-full text-[0.6rem] font-medium tracking-[0.12em] uppercase text-navy">
              Curso
            </div>
          </div>

          {/* Info, same height across cards thanks to flex-1 + line-clamp + min-h */}
          <div className="p-4 lg:p-5 flex-1 flex flex-col gap-3">
            <h3 className="font-display font-light text-[1rem] lg:text-[1.1rem] text-navy leading-tight tracking-[-0.012em] group-hover:text-gold-deep transition-colors line-clamp-2 min-h-[2.5em]">
              {course.shortTitle ?? course.title}
            </h3>
            {course.tagline && (
              <p className="text-[0.8rem] text-ink leading-snug line-clamp-2 min-h-[2.4em]">
                {course.tagline}
              </p>
            )}
            <div className="mt-auto pt-2 flex items-center justify-between text-[0.62rem] uppercase tracking-[0.12em]">
              {course.duration && (
                <span className="text-ink/60 font-medium">{course.duration.split(" · ")[0]}</span>
              )}
              <span className="text-gold-deep font-medium inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Detalle <span aria-hidden>→</span>
              </span>
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
