import { Trophy, Medal, Clock, DollarSign } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { PRIZES, SCHEDULE } from "@/lib/constants";

const podiumColors = {
  first: "text-yellow-400",
  second: "text-gray-300",
  third: "text-amber-600",
};

export default function Prizes() {
  return (
    <section id="premiacao" className="py-20 sm:py-28 bg-[#0a0a0a]">
      <Container>
        <SectionHeading subtitle="Confira a premiação e o cronograma do dia">
          Premiação & Cronograma
        </SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Premiação */}
          <div>
            <h3 className="font-heading text-xl font-bold italic text-white uppercase mb-6 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-orange-vibrant" />
              Premiação em Dinheiro
            </h3>

            <div className="flex flex-col gap-4">
              {(Object.entries(PRIZES) as [string, typeof PRIZES["10km"]][]).map(
                ([distance, prize]) => (
                  <div
                    key={distance}
                    className="p-5 rounded-xl bg-white/5 border border-white/10"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <span className="font-heading font-black text-2xl text-orange-vibrant">
                        {distance}
                      </span>
                      <span className="text-white/40 text-xs font-body">
                        Masculino & Feminino
                      </span>
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Medal className={`w-4 h-4 ${podiumColors.first}`} />
                          <span className="font-body text-sm text-white/80">
                            1º Lugar
                          </span>
                        </div>
                        <span className="font-heading font-bold text-white">
                          {prize.first}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Medal className={`w-4 h-4 ${podiumColors.second}`} />
                          <span className="font-body text-sm text-white/80">
                            2º Lugar
                          </span>
                        </div>
                        <span className="font-heading font-bold text-white">
                          {prize.second}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Medal className={`w-4 h-4 ${podiumColors.third}`} />
                          <span className="font-body text-sm text-white/80">
                            3º Lugar
                          </span>
                        </div>
                        <span className="font-heading font-bold text-white">
                          {prize.third}
                        </span>
                      </div>
                    </div>

                    <p className="text-white/40 text-xs font-body mt-3 flex items-center gap-1">
                      <DollarSign className="w-3 h-3" />
                      {prize.extras} · PIX em até 24h
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Cronograma */}
          <div>
            <h3 className="font-heading text-xl font-bold italic text-white uppercase mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-orange-vibrant" />
              Cronograma do Dia
            </h3>

            <div className="flex flex-col gap-0">
              {SCHEDULE.map((item, i) => (
                <div key={item.time} className="flex items-stretch gap-4">
                  {/* Timeline line */}
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-orange-vibrant shrink-0 mt-1.5" />
                    {i < SCHEDULE.length - 1 && (
                      <div className="w-px flex-1 bg-orange-vibrant/30" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-8">
                    <span className="font-heading font-bold text-orange-vibrant text-lg">
                      {item.time}
                    </span>
                    <p className="font-body text-white/70 text-sm mt-0.5">
                      {item.activity}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Nota Kids */}
            <div className="mt-4 p-4 rounded-xl bg-orange-vibrant/10 border border-orange-vibrant/20">
              <p className="font-body text-sm text-white/70">
                <span className="text-orange-vibrant font-semibold">Kids & Teens:</span>{" "}
                As largadas das categorias infantis acontecem logo após o encerramento
                da categoria adulto. Sem finalidade competitiva — todos recebem medalha!
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
