import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Modalities from "@/components/sections/Modalities";
import Gallery from "@/components/sections/Gallery";
import FAQ from "@/components/sections/FAQ";
import ComingSoon from "@/components/sections/ComingSoon";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Modalities />
      <Gallery />
      <FAQ />
      <ComingSoon />
    </main>
  );
}
