"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "ok" | "error";

const interestOptions = [
  { value: "1", label: "I · Partido, Estado y Arquitectura Institucional" },
  { value: "2", label: "II · Función Pública e Innovación Gubernamental" },
  { value: "3", label: "III · Campaña, Comunicación y Liderazgo Político" },
  { value: "4", label: "IV · Especialización Futurista y Ciudades Inteligentes" },
  { value: "5", label: "V · Nuevos Cursos Complementarios: IA, Foresight y Gobierno Global" },
  { value: "general", label: "Información general / aún no decido" },
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Error al enviar");
      setStatus("ok");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Error inesperado");
    }
  }

  if (status === "ok") {
    return (
      <div className="bg-paper border border-gold rounded-2xl p-10 lg:p-12 text-center">
        <div className="w-14 h-14 rounded-full bg-gold/15 mx-auto grid place-items-center mb-6">
          <span className="text-3xl text-gold-deep">✓</span>
        </div>
        <h3 className="font-display italic text-[1.8rem] text-navy mb-3">Solicitud recibida</h3>
        <p className="text-ink leading-[1.6] max-w-[44ch] mx-auto">
          Un asesor institucional te contactará en las próximas 48 horas. Mientras tanto, puedes revisar nuestros
          certificados en la página principal.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-[0.78rem] uppercase tracking-[0.12em] text-gold-deep hover:underline"
        >
          Enviar otra solicitud
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-paper border border-line rounded-2xl p-8 lg:p-10 grid gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Nombre completo *" name="name" type="text" required />
        <Field label="Correo electrónico *" name="email" type="email" required />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Organización / cargo" name="organization" type="text" />
        <Field label="País" name="country" type="text" placeholder="México, Colombia, Perú…" />
      </div>

      <div className="grid gap-2">
        <label className="text-[0.72rem] uppercase tracking-[0.14em] text-ink font-semibold" htmlFor="interest">
          Certificado de interés
        </label>
        <select
          id="interest"
          name="interest"
          defaultValue=""
          className="px-4 py-3.5 border border-line rounded-lg bg-mist text-ink-strong text-[0.95rem] focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all"
        >
          <option value="" disabled>
            Selecciona una opción…
          </option>
          {interestOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-2">
        <label className="text-[0.72rem] uppercase tracking-[0.14em] text-ink font-semibold" htmlFor="message">
          ¿Qué tienes en mente?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="px-4 py-3.5 border border-line rounded-lg bg-mist text-ink-strong text-[0.95rem] focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all resize-none"
          placeholder="Cuéntanos sobre tu rol, objetivos de formación o cualquier pregunta específica."
        />
      </div>

      <label className="flex items-start gap-3 mt-2 cursor-pointer">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 w-4 h-4 accent-gold-deep"
        />
        <span className="text-[0.82rem] text-ink leading-snug">
          Autorizo a Shaping Governance Academy a contactarme por los medios proporcionados y a tratar mis datos
          conforme al aviso de privacidad.
        </span>
      </label>

      {status === "error" && error && (
        <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-800">{error}</div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-3 inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-navy text-white text-sm font-medium tracking-wide hover:bg-navy-soft transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Enviando…" : "Enviar solicitud →"}
      </button>

      <p className="text-[0.72rem] text-ink/60 text-center">
        Tiempo de respuesta promedio: 48 horas hábiles · CDMX
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="text-[0.72rem] uppercase tracking-[0.14em] text-ink font-semibold">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="px-4 py-3.5 border border-line rounded-lg bg-mist text-ink-strong text-[0.95rem] focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all"
      />
    </div>
  );
}
