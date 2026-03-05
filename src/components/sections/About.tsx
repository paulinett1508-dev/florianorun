import { Calendar, MapPin, Users, Trophy } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { EVENT } from "@/lib/constants";

const highlights = [
  {
    icon: Calendar,
    label: "5ª Edição",
    detail: "Desde 2022 movimentando Floriano",
  },
  {
    icon: MapPin,
    label: EVENT.location,
    detail: "Coração do Piauí",
  },
  {
    icon: Users,
    label: "3 Modalidades",
    detail: "3km, 5km e 10km",
  },
  {
    icon: Trophy,
    label: "Superação",
    detail: "A nossa linha de chegada",
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 sm:py-28 bg-[#0d0d0d]">
      <Container>
        <SectionHeading subtitle="5 anos de história, superação e comunidade">
          Sobre o Evento
        </SectionHeading>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-white/70 font-body text-base sm:text-lg leading-relaxed">
            A <span className="text-orange-vibrant font-semibold">Floriano Run</span> nasceu
            com o propósito de promover saúde, esporte e integração na cidade de Floriano.
            O que começou como um sonho do professor{" "}
            <span className="text-white/90 font-medium">{EVENT.organizer}</span> se
            transformou em um dos maiores eventos esportivos da região, reunindo centenas
            de atletas e entusiastas a cada edição.
          </p>
          <p className="text-white/70 font-body text-base sm:text-lg leading-relaxed mt-4">
            Em 2026, chegamos à nossa <span className="text-orange-vibrant font-semibold">5ª edição</span> com
            ainda mais energia. {EVENT.sloganSecondary}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-orange-vibrant/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-orange-vibrant/20 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-orange-vibrant" />
              </div>
              <span className="font-heading font-bold text-white text-sm sm:text-base text-center">
                {item.label}
              </span>
              <span className="text-white/50 text-xs font-body text-center">
                {item.detail}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
