import { MapPin, Droplets, Mountain, Navigation } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { ROUTE_INFO } from "@/lib/constants";

const infoCards = [
  {
    icon: MapPin,
    label: "Largada & Chegada",
    value: ROUTE_INFO.start,
  },
  {
    icon: Navigation,
    label: "Percurso",
    value: ROUTE_INFO.mainRoute,
  },
  {
    icon: Mountain,
    label: "Terreno & Elevação",
    value: `${ROUTE_INFO.terrain} · ${ROUTE_INFO.elevation}`,
  },
  {
    icon: Droplets,
    label: "Hidratação",
    value: ROUTE_INFO.hydration,
  },
];

export default function Route() {
  return (
    <section id="percurso" className="py-20 sm:py-28 bg-[#0d0d0d]">
      <Container>
        <AnimateOnScroll>
          <SectionHeading subtitle="Conheça os percursos pelas ruas de Floriano">
            Percurso
          </SectionHeading>
        </AnimateOnScroll>

        {/* Info cards */}
        <AnimateOnScroll delay={100}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {infoCards.map((card) => (
              <div
                key={card.label}
                className="flex flex-col items-center gap-3 p-5 rounded-xl bg-white/5 border border-white/10 text-center"
              >
                <div className="w-10 h-10 rounded-full bg-orange-vibrant/20 flex items-center justify-center">
                  <card.icon className="w-5 h-5 text-orange-vibrant" aria-hidden="true" />
                </div>
                <span className="font-heading font-bold text-white text-xs sm:text-sm uppercase">
                  {card.label}
                </span>
                <span className="text-white/60 text-xs font-body leading-relaxed">
                  {card.value}
                </span>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Route distances */}
        <AnimateOnScroll delay={200}>
          <div className="flex flex-col gap-4">
            {ROUTE_INFO.routes.map((route) => (
              <div
                key={route.distance}
                className="relative overflow-hidden rounded-xl bg-white/5 border border-white/10 p-6"
              >
                {/* Gradient accent bar */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${route.color}`}
                />

                <div className="flex items-center gap-4 ml-4">
                  <span className="font-heading font-black text-3xl sm:text-4xl text-white shrink-0">
                    {route.distance}
                  </span>
                  <p className="font-body text-white/70 text-sm sm:text-base">
                    {route.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Map placeholder */}
        <AnimateOnScroll delay={300}>
          <div className="mt-10 rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03]">
            <div className="aspect-[16/7] flex flex-col items-center justify-center gap-3 p-8">
              <MapPin className="w-10 h-10 text-orange-vibrant/40" aria-hidden="true" />
              <p className="font-heading font-bold text-white/60 text-sm uppercase">
                Mapa interativo do percurso
              </p>
              <p className="text-white/40 text-xs font-body max-w-md text-center">
                Embed do Google Maps ou Strava será adicionado aqui com o traçado
                oficial dos 3 percursos.
              </p>
              <span className="mt-2 inline-block bg-orange-vibrant/20 text-orange-vibrant text-xs font-body font-medium px-4 py-1 rounded-full">
                Aguardando mapa oficial
              </span>
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
