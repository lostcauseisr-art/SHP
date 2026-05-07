import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { LenisProvider } from "@/components/LenisProvider";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shaping Governance Academy, Liderazgo y gobernanza para el futuro",
  description:
    "Academia internacional de formación ejecutiva en gobernanza, liderazgo público y prospectiva. 5 certificados, 58 cursos. Para los líderes que diseñan el futuro de las instituciones.",
  metadataBase: new URL("https://shaping-governance.academy"),
  openGraph: {
    title: "Shaping Governance Academy",
    description:
      "Academia internacional de liderazgo, gobernanza y prospectiva. 5 certificados, 58 cursos.",
    locale: "es_MX",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <LenisProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
