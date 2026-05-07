import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { courses, getCertificate } from "@/data/academy";

export async function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) return { title: "Curso no encontrado" };
  return {
    title: `${course.title}, Shaping Governance Academy`,
    description: course.tagline ?? course.description.slice(0, 160),
  };
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) notFound();

  const cert = getCertificate(course.certificateId);
  if (!cert) notFound();

  // Prev / next dentro del mismo certificado
  const siblings = courses.filter((c) => c.certificateId === course.certificateId);
  const idx = siblings.findIndex((c) => c.id === course.id);
  const prev = idx > 0 ? siblings[idx - 1] : null;
  const next = idx < siblings.length - 1 ? siblings[idx + 1] : null;

  return (
    <>
      {/* Breadcrumb + back */}
      <section className="pt-32 lg:pt-40 pb-6 bg-paper">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.12em] text-ink/70 flex-wrap">
            <Link href="/certificados" className="hover:text-gold-deep transition-colors">Certificados</Link>
            <span aria-hidden>·</span>
            <Link href={`/certificados/${cert.slug}`} className="hover:text-gold-deep transition-colors">
              {cert.title}
            </Link>
            <span aria-hidden>·</span>
            <span className="text-ink/50">Curso</span>
          </nav>
        </div>
      </section>

      {/* Hero del curso */}
      <section className="pb-16 lg:pb-20 bg-paper">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
            <div>
              <div className="text-[0.72rem] uppercase tracking-[0.14em] text-gold-deep font-semibold inline-flex items-center gap-3">
                <span className="w-6 h-px bg-gold" />
                Curso · {cert.title}
              </div>

              <h1 className="mt-6 font-display font-light text-[clamp(2.2rem,5.5vw,4.6rem)] leading-[1.05] tracking-[-0.02em] text-navy">
                {course.title}
              </h1>

              {course.tagline && (
                <p className="mt-7 text-[1.05rem] lg:text-[1.15rem] leading-[1.6] text-ink max-w-[58ch]">
                  {course.tagline}
                </p>
              )}

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-navy text-white text-sm font-medium tracking-wide hover:bg-navy-soft transition-colors"
                >
                  Solicitar información <span aria-hidden>→</span>
                </Link>
                <Link
                  href={`/certificados/${cert.slug}`}
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-navy text-navy text-sm font-medium tracking-wide hover:bg-ivory transition-colors"
                >
                  Ver el certificado completo
                </Link>
              </div>
            </div>

            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-line bg-ivory shadow-[var(--shadow-strong)]">
              <Image
                src={course.imageSrc}
                alt={course.title}
                fill
                sizes="(max-width: 1024px) 90vw, 600px"
                className="object-contain bg-ivory"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cuerpo: descripción + meta sidebar */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.14em] text-gold-deep font-semibold">
                <span className="w-6 h-px bg-gold" />
                Sobre este curso
              </div>
              <div className="mt-8 prose-cert">
                {course.description.split("\n\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {course.competencies && course.competencies.length > 0 && (
                <div className="mt-12 pt-10 border-t border-line">
                  <div className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.14em] text-gold-deep font-semibold mb-6">
                    <span className="w-6 h-px bg-gold" />
                    Competencias clave
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                    {course.competencies.map((c) => (
                      <li
                        key={c}
                        className="text-[0.95rem] text-navy/90 leading-snug flex items-baseline gap-3"
                      >
                        <span className="text-gold-deep font-bold flex-shrink-0">·</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <aside className="space-y-8">
              <div className="bg-paper border border-line rounded-2xl p-6 lg:p-7 space-y-5">
                <h3 className="text-[0.7rem] uppercase tracking-[0.14em] text-gold-deep font-semibold">
                  Información del curso
                </h3>
                <div className="space-y-4">
                  {course.duration && <Meta label="Duración" value={course.duration} />}
                  {course.modality && <Meta label="Modalidad" value={course.modality} />}
                  <Meta label="Certificado" value={cert.title} />
                </div>
              </div>

              <div className="bg-paper border border-line border-l-2 border-l-gold rounded-2xl p-6 lg:p-7">
                <h3 className="font-display italic text-[1.3rem] text-navy leading-tight">
                  ¿Te interesa este curso?
                </h3>
                <p className="mt-3 text-[0.92rem] text-ink leading-[1.55]">
                  Solicita información sobre fechas y modalidad. Te respondemos en menos de 48 horas.
                </p>
                <Link
                  href="/contacto"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-gold-deep hover:translate-x-1 transition-transform"
                >
                  Solicitar información <span aria-hidden>→</span>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Nav prev/next dentro del mismo certificado */}
      <section className="py-16 lg:py-20 bg-paper border-t border-line">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-10">
          <div className="grid grid-cols-2 gap-6">
            {prev ? (
              <Link
                href={`/cursos/${prev.slug}`}
                className="group flex items-start gap-4 hover:text-gold-deep transition-colors"
              >
                <span className="text-[0.7rem] uppercase tracking-[0.14em] text-ink/60 mt-1 group-hover:-translate-x-1 transition-transform shrink-0">
                  ← Anterior
                </span>
                <span className="font-display text-navy text-[1rem] lg:text-[1.15rem] leading-tight">
                  {prev.shortTitle ?? prev.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/cursos/${next.slug}`}
                className="group flex items-start gap-4 justify-end text-right hover:text-gold-deep transition-colors"
              >
                <span className="font-display text-navy text-[1rem] lg:text-[1.15rem] leading-tight">
                  {next.shortTitle ?? next.title}
                </span>
                <span className="text-[0.7rem] uppercase tracking-[0.14em] text-ink/60 mt-1 group-hover:translate-x-1 transition-transform shrink-0">
                  Siguiente →
                </span>
              </Link>
            ) : (
              <span />
            )}
          </div>

          <div className="mt-12 text-center">
            <Link
              href={`/certificados/${cert.slug}`}
              className="inline-flex items-center gap-2 text-[0.78rem] uppercase tracking-[0.12em] text-ink hover:text-gold-deep transition-colors"
            >
              ← Volver a {cert.title}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[0.65rem] uppercase tracking-[0.12em] text-ink/60 font-semibold mb-1">{label}</div>
      <div className="text-[0.92rem] text-navy leading-snug">{value}</div>
    </div>
  );
}
