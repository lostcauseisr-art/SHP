import { NextResponse } from "next/server";

const isValidEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

const interestLabels: Record<string, string> = {
  "1": "I · Partido, Estado y Arquitectura Institucional",
  "2": "II · Función Pública e Innovación Gubernamental",
  "3": "III · Campaña, Comunicación y Liderazgo Político",
  "4": "IV · Especialización Futurista y Ciudades Inteligentes",
  "5": "V · IA, Foresight y Gobierno Global",
  general: "Información general",
};

export async function POST(request: Request) {
  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Cuerpo inválido" }, { status: 400 });
  }

  const name = (body.name || "").toString().trim();
  const email = (body.email || "").toString().trim();
  const organization = (body.organization || "").toString().trim();
  const country = (body.country || "").toString().trim();
  const interest = (body.interest || "").toString().trim();
  const message = (body.message || "").toString().trim();
  const consent = body.consent;

  // Validación básica
  if (!name || name.length < 2) return NextResponse.json({ error: "Nombre requerido" }, { status: 400 });
  if (!email || !isValidEmail(email)) return NextResponse.json({ error: "Email inválido" }, { status: 400 });
  if (!consent) return NextResponse.json({ error: "Falta consentimiento de privacidad" }, { status: 400 });

  // Honeypot anti-bot, si el campo "website" viene lleno, descartar silenciosamente
  if (body.website) return NextResponse.json({ ok: true });

  const interestLabel = interestLabels[interest] ?? "No especificado";

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  // Modo desarrollo / sin API key configurada, solo loggear
  if (!apiKey || !toEmail || !fromEmail) {
    console.log("[contacto] (dev mode, RESEND_API_KEY no configurado) lead recibido:", {
      name,
      email,
      organization,
      country,
      interest: interestLabel,
      message,
    });
    return NextResponse.json({ ok: true, mode: "dev" });
  }

  // Modo producción, enviar via Resend
  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const html = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #071B3A; border-bottom: 2px solid #C9A24D; padding-bottom: 12px;">Nueva solicitud de información</h2>
        <p style="color: #4B5563; font-size: 14px; text-transform: uppercase; letter-spacing: .1em; margin-top: 24px;">Datos del prospecto</p>
        <table style="width:100%; border-collapse: collapse; margin-top: 8px;">
          <tr><td style="padding: 8px 12px; background: #F8F6F1; font-weight: 600; width: 30%;">Nombre</td><td style="padding: 8px 12px;">${escapeHtml(name)}</td></tr>
          <tr><td style="padding: 8px 12px; background: #F8F6F1; font-weight: 600;">Email</td><td style="padding: 8px 12px;">${escapeHtml(email)}</td></tr>
          <tr><td style="padding: 8px 12px; background: #F8F6F1; font-weight: 600;">Organización / cargo</td><td style="padding: 8px 12px;">${escapeHtml(organization || ",")}</td></tr>
          <tr><td style="padding: 8px 12px; background: #F8F6F1; font-weight: 600;">País</td><td style="padding: 8px 12px;">${escapeHtml(country || ",")}</td></tr>
          <tr><td style="padding: 8px 12px; background: #F8F6F1; font-weight: 600;">Interés</td><td style="padding: 8px 12px;">${escapeHtml(interestLabel)}</td></tr>
        </table>
        ${message ? `
          <p style="color: #4B5563; font-size: 14px; text-transform: uppercase; letter-spacing: .1em; margin-top: 24px;">Mensaje</p>
          <div style="background: #F8F6F1; padding: 16px; border-left: 3px solid #C9A24D; white-space: pre-wrap;">${escapeHtml(message)}</div>
        ` : ""}
        <p style="margin-top: 32px; color: #9CA3AF; font-size: 12px;">
          Enviado desde shapinggovernance.academy · ${new Date().toLocaleString("es-MX", { timeZone: "America/Mexico_City" })}
        </p>
      </div>
    `;

    const result = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `[SGA] Nueva solicitud, ${name} · ${interestLabel}`,
      html,
    });

    if (result.error) {
      console.error("[contacto] Resend error:", result.error);
      return NextResponse.json({ error: "Error al enviar el correo" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contacto] uncaught error:", err);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
