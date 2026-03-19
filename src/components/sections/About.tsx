import { Calendar, MapPin, Users, TrendingUp } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { EVENT, EDITIONS } from "@/lib/constants";

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
    label: "+500 atletas",
    detail: "Ao longo de todas as edições",
  },
  {
    icon: TrendingUp,
    label: "6 estados",
    detail: "PI, MA, PE, CE, PA e SP",
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 sm:py-28 bg-[#0d0d0d]">
      <Container>
        <AnimateOnScroll>
          <SectionHeading subtitle="5 anos de história, superação e comunidade">
            Sobre o Evento
          </SectionHeading>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-white/70 font-body text-base sm:text-lg leading-relaxed">
            A <span className="text-orange-vibrant font-semibold">Floriano Run</span> nasceu
            em 2022 com o propósito de promover saúde, esporte e integração na cidade de Floriano.
            Idealizada pelo {EVENT.organizerRole}{" "}
            <span className="text-white/90 font-medium">{EVENT.organizer}</span> e pela {EVENT.coOrganizerRole}{" "}
            <span className="text-white/90 font-medium">{EVENT.coOrganizer}</span>, a corrida
            se transformou em um dos maiores eventos esportivos da região, atraindo
            atletas de diversos estados do Brasil.
          </p>
          <p className="text-white/70 font-body text-base sm:text-lg leading-relaxed mt-4">
            Em 2026, chegamos à nossa <span className="text-orange-vibrant font-semibold">5ª edição</span> com
            ainda mais energia. {EVENT.sloganSecondary}
          </p>
        </div>
        </AnimateOnScroll>

        {/* Highlights */}
        <AnimateOnScroll delay={200}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
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
        </AnimateOnScroll>

        {/* Editions timeline */}
        <AnimateOnScroll delay={300}>
        <div className="max-w-2xl mx-auto">
          <h3 className="font-heading text-xl sm:text-2xl font-bold italic text-center text-white uppercase mb-8">
            Nossa Trajetória
          </h3>
          <div className="flex flex-col gap-4">
            {EDITIONS.map((ed, i) => (
              <div
                key={ed.year}
                className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-orange-vibrant/20 transition-colors"
              >
                <div className="shrink-0 w-14 h-14 rounded-full bg-orange-vibrant/20 flex items-center justify-center">
                  <span className="font-heading font-bold text-orange-vibrant text-lg">
                    {ed.year}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-heading font-bold text-white text-sm sm:text-base">
                    {ed.edition}
                  </p>
                  <p className="text-white/60 font-body text-sm mt-1">
                    <span className="text-orange-vibrant font-semibold">{ed.athletes}</span> atletas
                    {" · "}
                    <span className="text-white/80">{ed.cities} cidades</span>
                    {" · "}
                    <span className="text-white/80">{ed.stateNames}</span>
                  </p>
                </div>
                {i < EDITIONS.length - 1 && (
                  <div className="hidden sm:flex items-center">
                    <TrendingUp className="w-4 h-4 text-green-500/60" />
                  </div>
                )}
              </div>
            ))}

            {/* 2026 teaser */}
            <div className="flex items-start gap-4 p-5 rounded-xl bg-orange-vibrant/10 border border-orange-vibrant/30">
              <div className="shrink-0 w-14 h-14 rounded-full bg-orange-vibrant/30 flex items-center justify-center">
                <span className="font-heading font-bold text-orange-vibrant text-lg">
                  2026
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-heading font-bold text-white text-sm sm:text-base">
                  5ª Edição — A maior de todas!
                </p>
                <p className="text-white/60 font-body text-sm mt-1">
                  26 de Abril · 3km, 5km e 10km · Inscrições abertas!
                </p>
              </div>
            </div>
          </div>
        </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
