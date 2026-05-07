# Shaping Governance Academy, Web

## Requisitos

- **Node.js 18.18 o superior** (recomendado 20.x LTS): https://nodejs.org

Node.js incluye `npm`. Sin Node.js no se puede correr.

## Pasos

1. Abre PowerShell o terminal **dentro de esta carpeta**.

2. Instala dependencias (solo la primera vez, tarda 2 a 5 minutos):

   ```
   npm install
   ```

3. Corre el sitio en modo desarrollo:

   ```
   npm run dev
   ```

4. Abre el navegador en: http://localhost:3000

Para detener el servidor: Ctrl + C en la terminal.

## Comandos disponibles

| Comando         | Para que sirve                                  |
|-----------------|-------------------------------------------------|
| npm run dev     | Modo desarrollo, hot reload                     |
| npm run build   | Construye version optimizada de produccion      |
| npm start       | Sirve el build de produccion (requiere build)   |
| npm run lint    | Verifica errores de codigo                      |

## Variables de entorno (opcional)

El formulario de contacto usa Resend. Si quieres que envie correos, crea un archivo `.env.local` en esta carpeta con:

```
RESEND_API_KEY=tu_api_key
RESEND_TO_EMAIL=correo@destino.com
```

Sin esto el sitio funciona normal, solo el envio del formulario falla.

## Deploy a internet

Lo mas simple: subir a Vercel (gratis, creadores de Next.js).

1. Sube esta carpeta a un repo de GitHub.
2. Entra a vercel.com, conecta el repo.
3. Click en deploy. Listo.
