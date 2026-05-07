"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import type { Course } from "@/data/academy";

const IMG_W = 360;
const IMG_H = 225;

export function CoursesUnveilList({ courses }: { courses: Course[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<Course | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 28, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 220, damping: 28, mass: 0.6 });

  function onMove(e: React.MouseEvent) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left - IMG_W / 2);
    y.set(e.clientY - rect.top - IMG_H / 2);
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={onMove}
      onMouseLeave={() => setHovered(null)}
      className="relative"
    >
      {/* Floating preview image (desktop only) */}
      <motion.div
        style={{
          x: sx,
          y: sy,
          width: IMG_W,
          height: IMG_H,
        }}
        className="pointer-events-none absolute top-0 left-0 z-30 hidden lg:block"
      >
        <AnimatePresence mode="popLayout">
          {hovered && (
            <motion.div
              key={hovered.id}
              initial={{ opacity: 0, scale: 0.92, clipPath: "inset(0 0 100% 0)" }}
              animate={{ opacity: 1, scale: 1, clipPath: "inset(0 0 0% 0)" }}
              exit={{ opacity: 0, scale: 0.96, clipPath: "inset(100% 0 0 0)" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full rounded-xl overflow-hidden border border-line bg-ivory shadow-[var(--shadow-strong)]"
            >
              <Image
                src={hovered.imageSrc}
                alt=""
                fill
                sizes="360px"
                className="object-contain bg-ivory"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* List */}
      <ul className="border-t border-line/70">
        {courses.map((c, i) => {
          const isActive = hovered?.id === c.id;
          const isDimmed = hovered !== null && !isActive;
          return (
            <motion.li
              key={c.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-6%" }}
              transition={{ duration: 0.55, delay: Math.min(i * 0.04, 0.6), ease: [0.16, 1, 0.3, 1] }}
              className="border-b border-line/70"
              onMouseEnter={() => setHovered(c)}
            >
              <Link
                href={`/cursos/${c.slug}`}
                className="group relative flex items-center justify-between gap-6 py-6 lg:py-8 transition-all duration-500"
                style={{
                  paddingLeft: isActive ? "1.5rem" : "0rem",
                  opacity: isDimmed ? 0.32 : 1,
                }}
              >
                <div className="flex items-baseline gap-6 lg:gap-10 min-w-0">
                  <span
                    className="text-[0.7rem] uppercase tracking-[0.16em] text-ink/50 font-mono tabular-nums shrink-0 transition-colors duration-500"
                    style={{ color: isActive ? "var(--color-gold-deep)" : undefined }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="font-display font-light text-[clamp(1.4rem,3vw,2.6rem)] leading-[1.05] tracking-[-0.018em] text-navy transition-colors duration-500 truncate"
                    style={{ color: isActive ? "var(--color-gold-deep)" : undefined }}
                  >
                    {c.shortTitle ?? c.title}
                  </h3>
                </div>

                {/* Mobile thumb (lg:hidden) */}
                <span className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-md overflow-hidden border border-line bg-ivory lg:hidden">
                  <Image
                    src={c.imageSrc}
                    alt=""
                    fill
                    sizes="80px"
                    className="object-contain bg-ivory"
                  />
                </span>

                {/* Desktop arrow */}
                <span
                  aria-hidden
                  className="hidden lg:inline-flex items-center justify-center w-10 h-10 rounded-full border border-line text-navy transition-all duration-500 shrink-0"
                  style={{
                    borderColor: isActive ? "var(--color-gold-deep)" : undefined,
                    color: isActive ? "var(--color-gold-deep)" : undefined,
                    transform: isActive ? "translateX(4px) rotate(-45deg)" : "rotate(0deg)",
                  }}
                >
                  →
                </span>
              </Link>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
