import { Handshake, Building2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { SPONSORS } from "@/lib/constants";

const tiers = [
  {
    key: "ouro" as const,
    label: "Ouro",
    badgeColor: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    logoSize: "w-36 h-20 sm:w-44 sm:h-24",
    gridCols: "grid-cols-2",
  },
  {
    key: "prata" as const,
    label: "Prata",
    badgeColor: "bg-gray-300/20 text-gray-300 border-gray-400/30",
    logoSize: "w-28 h-16 sm:w-36 sm:h-20",
    gridCols: "grid-cols-3",
  },
  {
    key: "bronze" as const,
    label: "Bronze",
    badgeColor: "bg-amber-600/20 text-amber-500 border-amber-600/30",
    logoSize: "w-24 h-14 sm:w-28 sm:h-16",
    gridCols: "grid-cols-2 sm:grid-cols-4",
  },
  {
    key: "apoio" as const,
    label: "Apoio",
    badgeColor: "bg-white/10 text-white/60 border-white/20",
    logoSize: "w-20 h-12 sm:w-24 sm:h-14",
    gridCols: "grid-cols-3 sm:grid-cols-6",
  },
];

export default function Sponsors() {
  return (
    <section id="patrocinadores" className="py-20 sm:py-28 bg-[#0a0a0a]">
      <Container>
        <AnimateOnScroll>
          <SectionHeading subtitle="Empresas e instituições que fazem o evento acontecer">
            Patrocinadores
          </SectionHeading>
        </AnimateOnScroll>

        <div className="flex flex-col gap-12">
          {tiers.map((tier, tierIdx) => {
            const sponsors = SPONSORS.filter((s) => s.tier === tier.key);
            if (sponsors.length === 0) return null;

            return (
              <AnimateOnScroll key={tier.key} delay={100 + tierIdx * 100}>
                <div className="text-center">
                  <span
                    className={`inline-block text-xs font-heading font-bold uppercase px-4 py-1 rounded-full border mb-6 ${tier.badgeColor}`}
                  >
                    {tier.label}
                  </span>

                  <div className={`grid ${tier.gridCols} gap-4 justify-items-center max-w-3xl mx-auto`}>
                    {sponsors.map((sponsor) => (
                      <div
                        key={sponsor.name}
                        className={`${tier.logoSize} rounded-xl bg-white/5 border border-white/10 hover:border-orange-vibrant/20 transition-colors flex flex-col items-center justify-center gap-1 p-3`}
                      >
                        <Building2
                          className="w-6 h-6 text-white/20"
                          aria-hidden="true"
                        />
                        <span className="text-white/30 text-[10px] font-body text-center leading-tight">
                          {sponsor.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* CTA patrocínio */}
        <AnimateOnScroll delay={500}>
          <div className="mt-14 text-center p-8 rounded-2xl bg-gradient-to-r from-orange-vibrant/10 to-blue-petroleo/10 border border-white/10">
            <Handshake className="w-8 h-8 text-orange-vibrant mx-auto mb-3" aria-hidden="true" />
            <h3 className="font-heading font-bold text-white text-lg uppercase mb-2">
              Quer patrocinar?
            </h3>
            <p className="font-body text-white/60 text-sm max-w-md mx-auto">
              Entre em contato pelo Instagram{" "}
              <a
                href="https://www.instagram.com/floriano_run/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-vibrant hover:underline"
              >
                @floriano_run
              </a>{" "}
              e conheça as cotas de patrocínio.
            </p>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
