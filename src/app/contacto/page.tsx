import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto, Shaping Governance Academy",
  description:
    "Solicita información sobre los certificados de Shaping Governance Academy. Un asesor institucional te contactará en menos de 48 horas.",
};

export default function ContactPage() {
  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden min-h-screen">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[20vh] left-1/2 -translate-x-1/2 w-[120vw] h-[60vh]"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(201,162,77,.14) 0%, rgba(248,246,241,.6) 30%, rgba(255,255,255,0) 65%)",
        }}
      />

      <div className="relative mx-auto max-w-[1480px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24">
          <div>
            <div className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.14em] text-gold-deep font-semibold">
              <span className="w-6 h-px bg-gold" />
              Contacto
            </div>
            <h1 className="mt-5 font-display font-light text-[clamp(2.4rem,6vw,5rem)] leading-[1.04] tracking-[-0.02em] text-navy">
              Solicita <em className="text-gold-deep">información</em>.
            </h1>
            <p className="mt-8 text-[1.05rem] leading-[1.65] text-ink max-w-[44ch]">
              Compártenos brevemente tu rol y el certificado que te interesa. Un asesor institucional te contactará en
              menos de 48 horas hábiles.
            </p>

            <div className="mt-12 space-y-8">
              <ContactBlock label="Correo institucional" value="Se rellenará después" />
              <ContactBlock label="WhatsApp" value="Se rellenará después" />
              <ContactBlock label="Oficinas" value="Se rellenará después" />
              <ContactBlock label="Horario de atención" value="Lun a Vie · 9:00 – 18:00 CDMX" />
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-l-2 border-gold/40 pl-5">
      <div className="text-[0.7rem] uppercase tracking-[0.14em] text-ink/70 font-semibold">{label}</div>
      <div className="mt-1 font-display italic text-[1.2rem] text-navy">{value}</div>
    </div>
  );
}
