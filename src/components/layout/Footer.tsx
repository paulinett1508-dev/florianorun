import Image from "next/image";
import { Instagram } from "lucide-react";
import Container from "@/components/ui/Container";
import { EVENT, DEVELOPER } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-blue-petroleo-dark py-12">
      <Container>
        <div className="flex flex-col items-center gap-8">
          {/* Logo do evento */}
          <Image
            src="/images/logo/horizontal-pequeno-branco.png"
            alt={EVENT.name}
            width={120}
            height={40}
            className="h-8 w-auto opacity-80"
          />

          {/* Social */}
          <div className="flex flex-col items-center gap-3">
            <a
              href={EVENT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-orange-vibrant transition-colors"
            >
              <Instagram className="w-5 h-5" aria-hidden="true" />
              <span className="font-body text-sm">{EVENT.instagramHandle}</span>
            </a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-white/20" />

          {/* Developer credit */}
          <p className="text-white/50 text-xs font-body">
            Desenvolvido por{" "}
            <span className="text-white/70 font-medium">{DEVELOPER.name}</span>
          </p>

          {/* Copyright */}
          <p className="text-white/30 text-xs font-body">
            © {EVENT.year} {EVENT.name}. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
