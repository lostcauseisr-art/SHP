import Link from "next/link";
import Image from "next/image";

const cols = [
  {
    title: "Academia",
    links: [
      { href: "/academia", label: "Sobre la academia" },
      { href: "/metodologia", label: "Metodología" },
      { href: "/experiencia", label: "Experiencia" },
      { href: "/academia#por-que", label: "Por qué SGA" },
    ],
  },
  {
    title: "Certificados",
    links: [
      { href: "/certificados/partido-estado-arquitectura-institucional", label: "Partido y Estado" },
      { href: "/certificados/funcion-publica-innovacion-gubernamental", label: "Función Pública" },
      { href: "/certificados/campana-comunicacion-liderazgo-politico", label: "Campaña y Liderazgo" },
      { href: "/certificados/especializacion-futurista-ciudades-inteligentes", label: "Futuro y Ciudades" },
      { href: "/certificados/nuevos-cursos-complementarios-ia-foresight-gobierno-global", label: "IA y Gobierno Global" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { href: "/contacto", label: "Solicitar información" },
      { href: "mailto:Se rellenará después", label: "Se rellenará después" },
      { href: "#", label: "LinkedIn (se rellenará después)" },
      { href: "#", label: "Instagram (se rellenará después)" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ivory border-t-2 border-gold mt-0">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12">
          <div className="flex flex-col gap-5">
            <Image
              src="/assets/logo_shaping_governance_academy_v1.png"
              alt="Shaping Governance Academy"
              width={220}
              height={64}
              className="h-12 w-auto object-contain"
            />
            <p className="text-sm text-ink leading-relaxed max-w-[36ch]">
              Academia internacional de liderazgo, gobernanza y prospectiva. Formación ejecutiva premium para los líderes
              que diseñan el futuro de las instituciones públicas en Latinoamérica.
            </p>
            <div className="text-xs uppercase tracking-[0.12em] text-ink mt-2">
              <span className="block">Carlos Castillo · Founder</span>
              <span className="block mt-1 text-ink/70">Se rellenará después</span>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="flex flex-col gap-4">
              <h4 className="font-display italic text-[1.05rem] text-navy">{c.title}</h4>
              <ul className="flex flex-col gap-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-ink hover:text-gold-deep transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-line flex flex-col lg:flex-row justify-between gap-4 text-xs text-ink/70">
          <span>© {new Date().getFullYear()} Shaping Governance Academy · Todos los derechos reservados</span>
          <span>
            <Link href="#" className="hover:text-gold-deep">Aviso de privacidad</Link>
            <span className="mx-3">·</span>
            <Link href="#" className="hover:text-gold-deep">Términos</Link>
            <span className="mx-3">·</span>
            <span>Se rellenará después</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
