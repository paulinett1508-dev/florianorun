import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Modalities from "@/components/sections/Modalities";
import Prizes from "@/components/sections/Prizes";
import FAQ from "@/components/sections/FAQ";
import ComingSoon from "@/components/sections/ComingSoon";

export const metadata: Metadata = {
  title: "Floriano Run 2026 | Preview",
  robots: { index: false, follow: false },
};

const LOCKED_SECTIONS = [
  {
    title: "Percurso",
    description: "Mapa detalhado dos percursos de 3km, 5km e 10km",
    height: "h-48",
  },
  {
    title: "Galeria",
    description: "Fotos das edições anteriores da Floriano Run",
    height: "h-48",
  },
  {
    title: "Patrocinadores",
    description: "Empresas e instituições que fazem o evento acontecer",
    height: "h-40",
  },
];

export default function DegustacaoPage() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Modalities />
      <Prizes />
      <ComingSoon sections={LOCKED_SECTIONS} />
      <FAQ />
    </main>
  );
}
