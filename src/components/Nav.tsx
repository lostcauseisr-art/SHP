"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/academia", label: "Academia" },
  { href: "/certificados", label: "Certificados" },
  { href: "/metodologia", label: "Metodología" },
  { href: "/experiencia", label: "Experiencia" },
  { href: "/contacto", label: "Contacto" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "bg-white/85 backdrop-blur-md border-b border-line" : "bg-transparent"
      )}
    >
      <nav
        className={cn(
          "mx-auto max-w-[1480px] px-6 lg:px-10 flex items-center justify-between gap-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          scrolled ? "py-3 lg:py-3" : "py-6 lg:py-8"
        )}
      >
        <Link href="/" className="flex items-center gap-3 group" aria-label="Shaping Governance Academy">
          <Image
            src="/assets/logo_shaping_governance_academy_v1.png"
            alt="Shaping Governance Academy"
            width={320}
            height={96}
            priority
            className={cn(
              "w-auto object-contain transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
              scrolled ? "h-10 lg:h-11" : "h-14 lg:h-20"
            )}
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-10">
          {links.map((l) => {
            const active = isActive(l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={cn(
                    "relative inline-block font-bold tracking-tight transition-all duration-500 pb-1.5",
                    scrolled ? "text-[1.15rem]" : "text-[1.35rem]",
                    active ? "text-gold-deep" : "text-ink-strong hover:text-gold-deep"
                  )}
                >
                  {l.label}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute left-0 right-0 -bottom-0.5 h-[2px] bg-gold-deep origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      active ? "scale-x-100" : "scale-x-0"
                    )}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex items-center">
          <Link
            href="/contacto"
            className={cn(
              "sga-cta-gold inline-flex items-center gap-2 rounded-full font-bold tracking-tight transition-all duration-500",
              scrolled ? "px-6 py-2.5 text-[0.95rem]" : "px-8 py-3.5 text-[1.05rem]"
            )}
          >
            Comprar ya <span aria-hidden>→</span>
          </Link>
        </div>

        <button
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="lg:hidden w-10 h-10 grid place-items-center rounded-full border border-line"
        >
          <span className="block w-4 relative">
            <span
              className={cn(
                "block h-px bg-ink-strong transition-all duration-300",
                open ? "rotate-45 translate-y-px" : "-translate-y-1"
              )}
            />
            <span
              className={cn(
                "block h-px bg-ink-strong transition-all duration-300 mt-1",
                open ? "-rotate-45 -translate-y-px" : "translate-y-0"
              )}
            />
          </span>
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-paper border-t border-line">
          <ul className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => {
              const active = isActive(l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "text-[1.25rem] font-bold block py-2 border-l-2 pl-3 transition-colors",
                      active
                        ? "text-gold-deep border-gold-deep"
                        : "text-ink-strong border-transparent hover:text-gold-deep"
                    )}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2 border-t border-line">
              <Link
                href="/contacto"
                onClick={() => setOpen(false)}
                className="sga-cta-gold inline-flex items-center justify-center w-full px-5 py-3 rounded-full text-sm font-semibold gap-2"
              >
                Comprar ya <span aria-hidden>→</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
