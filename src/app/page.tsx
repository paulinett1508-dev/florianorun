import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Modalities from "@/components/sections/Modalities";
import Prizes from "@/components/sections/Prizes";
import Gallery from "@/components/sections/Gallery";
import FAQ from "@/components/sections/FAQ";
import ComingSoon from "@/components/sections/ComingSoon";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Modalities />
      <Prizes />
      <Gallery />
      <FAQ />
      <ComingSoon />
    </main>
  );
}
