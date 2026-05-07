import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { certificates, getCoursesByCertificate } from "@/data/academy";
import { CourseCard } from "@/components/CourseCard";

export async function generateStaticParams() {
  return certificates.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cert = certificates.find((c) => c.slug === slug);
  if (!cert) return { title: "Certificado no encontrado" };
  return {
    title: `${cert.title}, Shaping Governance Academy`,
    description: cert.subtitle ?? `Certificado ${cert.romanNumeral} · ${cert.title}`,
  };
}

export default async function CertificatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cert = certificates.find((c) => c.slug === slug);
  if (!cert) notFound();

  const courses = getCoursesByCertificate(cert.id);
  const certIndex = certificates.findIndex((c) => c.id === cert.id);
  const prev = certIndex > 0 ? certificates[certIndex - 1] : null;
  const next = certIndex < certificates.length - 1 ? certificates[certIndex + 1] : null;

  return (
    <>
      {/* Hero del certificado */}
      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-[20vh] left-1/2 -translate-x-1/2 w-[120vw] h-[60vh]"
          style={{
            background:
              "radial-gradient(ellipse at center top, rgba(201,162,77,.14) 0%, rgba(248,246,241,.6) 30%, rgba(255,255,255,0) 65%)",
          }}
        />
        <div className="relative mx-auto max-w-[1480px] px-6 lg:px-10">
          <Link
            href="/#certificados"
            className="inline-flex items-center gap-2 text-[0.78rem] uppercase tracking-[0.12em] text-ink hover:text-gold-deep transition-colors mb-10"
          >
            <span aria-hidden>←</span> Todos los certificados
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-center">
            <div>
              <h1 className="font-display font-light text-[clamp(2.4rem,6vw,5rem)] leading-[1.04] tracking-[-0.02em] text-navy">
                {cert.title}
              </h1>

              {cert.subtitle && (
                <p className="mt-8 text-[1.05rem] lg:text-[1.15rem] leading-[1.6] text-ink max-w-[58ch]">
                  {cert.subtitle}
                </p>
              )}

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="#cursos"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-navy text-white text-sm font-medium tracking-wide hover:bg-navy-soft transition-colors"
                >
                  Ver los cursos <span aria-hidden>↓</span>
                </Link>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-navy text-navy text-sm font-medium tracking-wide hover:bg-ivory transition-colors"
                >
                  Solicitar información
                </Link>
              </div>
            </div>

            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-line bg-ivory shadow-[var(--shadow-strong)]">
              <Image
                src={cert.imageSrc}
                alt={`Portada ${cert.title}`}
                fill
                sizes="(max-width: 1024px) 90vw, 600px"
                className="object-contain bg-ivory"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bloque de descripción + temas + benefits */}
      <section className="py-12 lg:py-16 bg-[#ebe1c8]">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.14em] text-gold-deep font-semibold">
                <span className="w-6 h-px bg-gold" />
                Sobre este certificado
              </div>
              <div className="mt-8 prose-cert">
                {cert.description.split("\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              {cert.objective && (
                <div className="mt-10 pt-8 border-t border-line">
                  <h3 className="font-display italic text-navy text-[1.5rem] mb-3">Objetivo</h3>
                  <p className="text-[1rem] leading-[1.65] text-ink">{cert.objective}</p>
                </div>
              )}
              {cert.audience && (
                <div className="mt-10 pt-8 border-t border-line">
                  <h3 className="font-display italic text-navy text-[1.5rem] mb-3">Perfil recomendado</h3>
                  <p className="text-[1rem] leading-[1.65] text-ink">{cert.audience}</p>
                </div>
              )}
            </div>

            <aside className="space-y-10">
              {cert.themes && cert.themes.length > 0 && (
                <div>
                  <h3 className="text-[0.7rem] uppercase tracking-[0.14em] text-gold-deep font-semibold mb-5">
                    Temas clave
                  </h3>
                  <ul className="space-y-2.5">
                    {cert.themes.map((t) => (
                      <li
                        key={t}
                        className="text-[0.92rem] text-navy/90 flex items-baseline gap-2.5 leading-snug"
                      >
                        <span className="text-gold-deep font-bold">·</span> {t}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {cert.benefits && cert.benefits.length > 0 && (
                <div className="pt-8 border-t border-line">
                  <h3 className="text-[0.7rem] uppercase tracking-[0.14em] text-gold-deep font-semibold mb-5">
                    Beneficios
                  </h3>
                  <ul className="space-y-2.5">
                    {cert.benefits.map((b) => (
                      <li
                        key={b}
                        className="text-[0.92rem] text-navy/90 flex items-baseline gap-2.5 leading-snug"
                      >
                        <span className="text-gold-deep font-bold">·</span> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* Grid de cursos */}
      <section id="cursos" className="py-12 lg:py-16 bg-paper">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-10">
          <div className="overflow-x-clip">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
              {courses.map((c, i) => (
                <CourseCard key={c.id} course={c} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA + nav between certs */}
      <section className="py-12 lg:py-16 bg-ivory border-t border-line">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-[44ch]">
              <h3 className="font-display font-light text-[clamp(1.8rem,3.5vw,2.8rem)] leading-tight tracking-[-0.015em] text-navy">
                ¿Te interesa este <em className="text-gold-deep">certificado</em>?
              </h3>
              <p className="mt-4 text-[0.95rem] text-ink leading-[1.6]">
                Solicita información sobre fechas, modalidad y proceso de inscripción. Te responderemos en menos de 48
                horas.
              </p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-navy text-white text-sm font-medium tracking-wide hover:bg-navy-soft transition-colors"
              >
                Solicitar información <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          <div className="mt-16 pt-10 border-t border-line grid grid-cols-2 gap-6">
            {prev ? (
              <Link
                href={`/certificados/${prev.slug}`}
                className="group flex items-start gap-4 hover:text-gold-deep transition-colors"
              >
                <span className="text-[0.7rem] uppercase tracking-[0.14em] text-ink/60 mt-1 group-hover:-translate-x-1 transition-transform shrink-0">
                  ← Anterior
                </span>
                <span className="font-display text-navy text-[1rem] lg:text-[1.15rem] leading-tight">{prev.title}</span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/certificados/${next.slug}`}
                className="group flex items-start gap-4 justify-end text-right hover:text-gold-deep transition-colors"
              >
                <span className="font-display text-navy text-[1rem] lg:text-[1.15rem] leading-tight">{next.title}</span>
                <span className="text-[0.7rem] uppercase tracking-[0.14em] text-ink/60 mt-1 group-hover:translate-x-1 transition-transform shrink-0">
                  Siguiente →
                </span>
              </Link>
            ) : (
              <span />
            )}
          </div>
        </div>
      </section>

    </>
  );
}
