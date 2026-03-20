"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import { EVENT } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Modalidades", href: "#modalidades" },
  { label: "Premiação", href: "#premiacao" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-surface/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo / Event name */}
          <a
            href="#"
            className="font-heading font-black italic uppercase text-lg sm:text-xl tracking-tight"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              closeMobile();
            }}
          >
            <span className="text-orange-vibrant">Floriano</span>
            <span className="text-white"> Run</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navegação principal">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-body font-medium text-white/70 hover:text-orange-vibrant transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href={EVENT.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 inline-flex items-center justify-center px-5 py-2 text-xs font-heading font-bold uppercase tracking-wider rounded-full bg-orange-vibrant text-white hover:bg-orange-vibrant-dark transition-colors"
            >
              Inscreva-se
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-surface/95 backdrop-blur-md border-t border-white/10">
          <Container>
            <nav className="flex flex-col py-4 gap-1" aria-label="Navegação principal">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  className="px-4 py-3 text-sm font-body font-medium text-white/70 hover:text-orange-vibrant hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={EVENT.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobile}
                className="mt-2 inline-flex items-center justify-center px-5 py-3 text-sm font-heading font-bold uppercase tracking-wider rounded-full bg-orange-vibrant text-white hover:bg-orange-vibrant-dark transition-colors"
              >
                Inscreva-se — {EVENT.price}
              </a>
            </nav>
          </Container>
        </div>
      </div>
    </header>
  );
}
