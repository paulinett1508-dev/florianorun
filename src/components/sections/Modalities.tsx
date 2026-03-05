import { Footprints, Zap, Trophy, Baby, Heart } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { MODALITIES, KIDS_CATEGORIES, EVENT } from "@/lib/constants";

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

        {/* Adult modalities */}
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

                  {/* Start time */}
                  <p className="text-white/40 text-xs font-body">
                    Largada: {mod.startTime}
                  </p>

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

        {/* Kids & Teens */}
        <div className="mt-16">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold italic text-center text-white uppercase mb-2">
            Kids & Teens
          </h3>
          <p className="text-center text-white/50 text-sm font-body mb-8">
            Sem finalidade competitiva — todos recebem medalha de conclusão!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {KIDS_CATEGORIES.map((cat) => (
              <div
                key={`${cat.title}-${cat.distance}`}
                className="p-5 rounded-xl bg-white/5 border border-white/10 text-center hover:border-purple-500/30 transition-colors"
              >
                <div className="w-10 h-10 mx-auto rounded-full bg-purple-500/20 flex items-center justify-center mb-3">
                  {cat.title === 'Teens' ? (
                    <Heart className="w-5 h-5 text-purple-400" />
                  ) : (
                    <Baby className="w-5 h-5 text-purple-400" />
                  )}
                </div>
                <p className="font-heading font-black text-2xl text-white">
                  {cat.distance}
                </p>
                <p className="font-heading font-bold text-sm text-purple-400 uppercase mt-1">
                  {cat.title}
                </p>
                <span className="inline-block mt-2 bg-purple-500/20 text-purple-300 text-xs font-body font-medium px-3 py-0.5 rounded-full">
                  {cat.ageRange}
                </span>
                <p className="font-body text-xs text-white/50 mt-3 leading-relaxed">
                  {cat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
