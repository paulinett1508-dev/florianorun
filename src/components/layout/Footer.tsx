import { Instagram } from "lucide-react";
import Container from "@/components/ui/Container";
import { EVENT, DEVELOPER } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-blue-petroleo-dark py-12">
      <Container>
        <div className="flex flex-col items-center gap-8">
          {/* Social */}
          <div className="flex flex-col items-center gap-3">
            <a
              href={EVENT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-orange-vibrant transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="font-body text-sm">{EVENT.instagramHandle}</span>
            </a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-white/20" />

          {/* Developer credit */}
          <div className="flex flex-col items-center gap-3">
            <p className="text-white/50 text-xs font-body">Desenvolvido por</p>
            {DEVELOPER.logoPlaceholder ? (
              <div className="flex flex-col items-center gap-1">
                {/* Espaço reservado para logo da Flow Digital */}
                <div className="w-40 h-10 border border-dashed border-white/30 rounded flex items-center justify-center">
                  <span className="text-white/40 text-[10px] font-body">
                    Logo aqui
                  </span>
                </div>
                <span className="text-white/60 text-xs font-body font-medium">
                  {DEVELOPER.name}
                </span>
              </div>
            ) : (
              <span className="text-white/60 text-sm font-body font-medium">
                {DEVELOPER.name}
              </span>
            )}
          </div>

          {/* Copyright */}
          <p className="text-white/30 text-xs font-body">
            © {EVENT.year} {EVENT.name}. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
