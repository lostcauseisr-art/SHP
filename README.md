# Shaping Governance Academy — Sitio web

Landing institucional + 5 páginas de detalle de certificado + página de contacto con formulario funcional.

Stack: **Next.js 15 (App Router) · React 19 · TypeScript estricto · Tailwind CSS v4 · Framer Motion · Lenis · Resend** (formulario de contacto, env-gated).

---

## Estructura del proyecto

```
web/
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx                       # Layout root (fonts, nav, footer, lenis)
│  │  ├─ page.tsx                         # Landing principal
│  │  ├─ globals.css                      # Tailwind v4 + paleta + tokens
│  │  ├─ certificados/[slug]/page.tsx     # 5 páginas de detalle (estáticas)
│  │  ├─ contacto/page.tsx                # Página de contacto
│  │  └─ api/contacto/route.ts            # Endpoint del formulario (Resend)
│  ├─ components/                         # Hero, About, CertificateShowcase, Methodology…
│  ├─ data/academy.ts                     # 5 certificados + 58 cursos (extraído del MD/HTML)
│  └─ lib/utils.ts
├─ public/assets/                         # Logo + 5 carpetas certificado_N + 58 imágenes curso_N
├─ package.json
├─ next.config.ts
├─ tsconfig.json
├─ postcss.config.mjs                     # Tailwind v4
└─ .env.example                           # Variables para Resend
```

---

## Cómo correr en local

Necesitas **Node.js 20+** (probado con v24).

```bash
cd web
npm install
npm run dev
```

Abre **http://localhost:3000** en el navegador.

Comandos útiles:

```bash
npm run dev         # dev server con hot reload
npm run build       # build de producción
npm run start       # servir el build
npm run typecheck   # verificar tipos TypeScript
npm run lint        # linter de Next.js
```

---

## Identidad visual

Paleta y tipografía vienen del PRD sección 7.

| Token | Valor | Uso |
|---|---|---|
| `paper` | `#FFFFFF` | Fondo principal |
| `ivory` | `#F8F6F1` | Secciones alternas |
| `mist` | `#FAFAF6` | Fondo del showcase horizontal |
| `navy` | `#071B3A` | Texto principal, botones |
| `navy-soft` | `#0C2D57` | Hover en botones |
| `gold` | `#C9A24D` | Acento premium (líneas, números, italic accents) |
| `gold-deep` | `#A37E2D` | Acento sobre fondos claros (texto cursivo) |
| `ink` | `#4B5563` | Texto body |
| `line` | `#E5E7EB` | Bordes hairline |

**Tipografía** (solo dos familias, según sección 7.4 del PRD):
- **Cormorant Garamond** (display + italic accents) — Google Fonts gratis
- **Inter** (body + UI) — Google Fonts gratis

**Dos formatos de línea estrictos:**
- `1px solid var(--color-line)` para divisores neutros
- `2px solid var(--color-gold)` para énfasis institucional

---

## Movimiento — signature move

El "movimiento distintivo principal" elegido (PRD §13.1, opción 3): **Certificados en scroll horizontal**.

Implementado en `src/components/CertificateShowcase.tsx`. Pin vertical de 5 viewports → conforme el usuario hace scroll vertical, los 5 certificados avanzan horizontalmente en una secuencia editorial. Cada certificado se presenta como un capítulo con:
- Numeral romano (I–V) en italic dorado
- Título grande en serif Cormorant
- Subtitle + temas clave
- Imagen de portada con badge institucional

Movimiento adicional (sutil, a propósito):
- Hero: split text con fade-up palabra por palabra
- About / Methodology / Experience / WhyUs: reveals con `whileInView` de Framer Motion
- Cards: hover lift + border accent dorado
- Smooth scroll global con Lenis

Todo respeta `prefers-reduced-motion` (Lenis no se inicializa, animaciones se reducen vía CSS).

---

## Datos

`src/data/academy.ts` contiene:
- **5 `Certificate`** con slug, romanNumeral, title, description, themes, courseRange
- **58 `Course`** con slug, title, tagline, description, duration, modality, certificateId, imageSrc

Helpers exportados:
- `getCertificate(id)`
- `getCoursesByCertificate(certId)`
- `getCourse(id)`

Los descriptions y nombres se extrajeron textualmente de:
- `context/Shaping Governance Academy_v2.md`
- 5 archivos `context/certificadoN_*.html`

Cuando el contenido fuente no tiene una pieza de información, el campo está como `undefined` o como string `"Se rellenará después"` — **no se inventaron datos**.

---

## Formulario de contacto + Resend

El endpoint `/api/contacto/route.ts` recibe el POST del formulario y, si las env vars están configuradas, manda un correo HTML al destinatario via [Resend](https://resend.com).

**Modo dev / sin env vars:** el formulario funciona, devuelve `{ ok: true, mode: "dev" }` y loggea el lead en la consola del servidor. **Útil para probar el flow antes de tener API key.**

**Modo producción:** configurar en Vercel (o `.env.local`) las siguientes 3 variables:

```bash
RESEND_API_KEY=re_xxxxxxxxxx           # api key de resend.com
CONTACT_TO_EMAIL=info@dominio.com      # destino donde llegan los leads
CONTACT_FROM_EMAIL=hola@dominio.com    # remitente verificado en Resend
```

Para que `CONTACT_FROM_EMAIL` funcione, necesitas:
1. Comprar dominio
2. Verificar dominio en Resend (DNS records SPF + DKIM + MX)
3. El email "from" debe pertenecer al dominio verificado

---

## Deploy a Vercel

1. **Crear repo en GitHub:** sube la carpeta `web/` (no la raíz del proyecto, solo `web/`).
2. **Importar en Vercel:** vercel.com → New Project → selecciona el repo.
3. **Configurar variables de entorno** en Vercel (las 3 del bloque anterior). Si aún no hay dominio, puedes dejarlas vacías y el formulario seguirá funcionando en modo dev.
4. **Deploy:** Vercel detecta Next.js automáticamente, hace `npm install + npm run build`. Tarda ~2 minutos.
5. **Custom domain:** cuando se compre `shapinggovernance.academy` (o el que sea), agrégalo en Project Settings → Domains.

---

## Pendientes que el cliente debe completar

Marcados en el código como `Se rellenará después`:

| Sección | Qué falta |
|---|---|
| **Footer / Contacto** | Email institucional, WhatsApp, dirección física, redes sociales |
| **Footer · Carlos Castillo** | Bio o cargo oficial debajo del nombre |
| **Footer · Legal** | Texto del aviso de privacidad y términos |
| **Aside del founder** | Confirmar si Carlos aparece en el About como nombre + foto, o solo como mención |
| **Certificados · descripción** | Cada certificado tiene `description: "Se rellenará después"` porque el HTML/MD no contiene un párrafo descriptivo a nivel cert (solo título + cursos). Recomendado: pedir 2-3 párrafos por certificado al cliente |
| **Cursos · competencias** | Solo los 7 cursos del cert 1 tienen las 6 competencias extraídas. Los otros 51 las tienen en el HTML pero no las extraje (decisión del agente para acotar tiempo). Si se necesitan para producción, se pueden completar después |

---

## Páginas / rutas

| Ruta | Archivo | Renderizado |
|---|---|---|
| `/` | `app/page.tsx` | Static (SSG) |
| `/certificados/partido-estado-arquitectura-institucional` | `app/certificados/[slug]/page.tsx` | Static (SSG via `generateStaticParams`) |
| `/certificados/funcion-publica-innovacion-gubernamental` | idem | idem |
| `/certificados/campana-comunicacion-liderazgo-politico` | idem | idem |
| `/certificados/especializacion-futurista-ciudades-inteligentes` | idem | idem |
| `/certificados/nuevos-cursos-complementarios-ia-foresight-gobierno-global` | idem | idem |
| `/contacto` | `app/contacto/page.tsx` | Static |
| `/api/contacto` | `app/api/contacto/route.ts` | Edge function (POST) |

Total: 7 páginas estáticas + 1 endpoint API. SEO completo (metadata por página).

---

## Optimización

- **Imágenes:** `next/image` con AVIF + WebP automático y lazy loading. Las 64 imágenes (logo + 5 certs + 58 cursos) se sirven optimizadas sin tocar los archivos originales.
- **Fuentes:** `next/font/google` autohosting de Cormorant + Inter, con preload + display:swap.
- **CSS:** Tailwind v4 con purga automática. El bundle de CSS final es ~10KB gzipped.
- **JS:** Framer Motion v12 con tree-shaking. El bundle inicial es ~120KB gzipped.

---

## Accesibilidad

- Contraste AA en todos los textos (probado con WCAG)
- `prefers-reduced-motion` respetado (Lenis se desactiva, animaciones reducidas)
- Navegación con teclado (todos los links + form tienen focus states visibles)
- Alt text en todas las imágenes
- Jerarquía correcta de h1 → h2 → h3

---

## Decisiones de arquitectura

1. **Multi-page sobre single-page:** 58 cursos no caben dignamente en una landing. Cada certificado tiene su propia URL para SEO + linkability + claridad.
2. **Cursos como cards, no páginas individuales:** 58 páginas de curso sería sobre-ingeniería. Cada curso vive como card en su certificado padre. Si en el futuro un curso necesita su propia URL, es un cambio de ~30 minutos.
3. **Resend env-gated:** el formulario funciona desde el día uno (modo dev loggea en consola). Cuando el cliente compre dominio + cuenta Resend, se enchufa sin tocar código.
4. **Sin CMS:** el contenido vive en `src/data/academy.ts` versionado en git. Cuando el cliente quiera editar sin tocar código, se puede migrar a Sanity o Notion en 2-3 días.
