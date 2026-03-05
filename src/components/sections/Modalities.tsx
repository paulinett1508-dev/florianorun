import { Footprints, Zap, Trophy } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { MODALITIES, EVENT } from "@/lib/constants";

const icons = {
  walking: Footprints,
  running: Zap,
  trophy: Trophy,
};

const colors = {
  "3km": "from-green-500 to-emerald-600",
  "5km": "from-orange-vibrant to-amber-500",
  "10km": "from-red-500 to-rose-600",
};

export default function Modalities() {
  return (
    <section id="modalidades" className="py-20 sm:py-28 bg-[#0d0d0d]">
      <Container>
        <SectionHeading
          subtitle="Escolha o percurso ideal para o seu nível e venha fazer parte dessa festa!"
        >
          Modalidades
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {MODALITIES.map((mod) => {
            const Icon = icons[mod.icon as keyof typeof icons];
            const gradient = colors[mod.distance as keyof typeof colors];

            return (
              <div
                key={mod.distance}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-orange-vibrant/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-vibrant/10"
              >
                {/* Top gradient bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${gradient}`} />

                <div className="p-6 sm:p-8 flex flex-col items-center text-center gap-4">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-orange-vibrant/20 transition-colors">
                    <Icon className="w-7 h-7 text-orange-vibrant" />
                  </div>

                  {/* Distance */}
                  <h3 className="font-heading text-4xl sm:text-5xl font-black italic text-white">
                    {mod.distance}
                  </h3>

                  {/* Title & Level */}
                  <div>
                    <p className="font-heading text-lg font-bold text-white uppercase">
                      {mod.title}
                    </p>
                    <span className="inline-block mt-1 bg-orange-vibrant/20 text-orange-vibrant text-xs font-body font-medium px-3 py-0.5 rounded-full">
                      {mod.level}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="font-body text-sm text-white/60 leading-relaxed">
                    {mod.description}
                  </p>

                  {/* Price */}
                  <div className="mt-2">
                    <p className="text-xs text-white/40 font-body">{EVENT.priceLabelNote}</p>
                    <p className="font-heading text-2xl font-bold text-orange-vibrant">
                      {EVENT.price}
                    </p>
                  </div>

                  {/* CTA */}
                  <Button
                    href={EVENT.registrationUrl}
                    variant="primary"
                    size="sm"
                    className="w-full mt-2"
                  >
                    Inscreva-se
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
