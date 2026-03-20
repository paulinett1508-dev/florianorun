import Container from "@/components/ui/Container";
import { Lock } from "lucide-react";

type ComingSoonSection = {
  title: string;
  description: string;
  height?: string;
};

const sections: ComingSoonSection[] = [
  {
    title: "Percurso",
    description: "Mapa detalhado dos percursos de 3km, 5km e 10km",
    height: "h-48",
  },
  {
    title: "Patrocinadores",
    description: "Empresas e instituições que fazem o evento acontecer",
    height: "h-40",
  },
];

export default function ComingSoon() {
  return (
    <div className="py-16 bg-surface-alt">
      <Container>
        <div className="flex flex-col gap-8">
          {sections.map((section) => (
            <div
              key={section.title}
              className={`relative ${section.height || "h-48"} rounded-2xl overflow-hidden`}
            >
              {/* Blurred background simulating content */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-white/[0.08]">
                {/* Fake content lines to simulate text */}
                <div className="p-8 space-y-3 blur-sm opacity-30">
                  <div className="h-6 w-3/4 bg-white/20 rounded" />
                  <div className="h-4 w-full bg-white/10 rounded" />
                  <div className="h-4 w-5/6 bg-white/10 rounded" />
                  <div className="h-4 w-2/3 bg-white/10 rounded" />
                  <div className="h-20 w-full bg-white/5 rounded-lg mt-4" />
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex flex-col items-center justify-center gap-3 border border-white/10 rounded-2xl">
                <div className="w-10 h-10 rounded-full bg-orange-vibrant/20 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-orange-vibrant" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold italic text-white uppercase">
                  {section.title}
                </h3>
                <p className="text-white/50 text-sm font-body max-w-sm text-center">
                  {section.description}
                </p>
                <span className="mt-1 inline-block bg-orange-vibrant/20 text-orange-vibrant text-xs font-body font-medium px-4 py-1 rounded-full">
                  Em desenvolvimento...
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
