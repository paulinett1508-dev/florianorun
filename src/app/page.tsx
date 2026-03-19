import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Modalities from "@/components/sections/Modalities";
import Prizes from "@/components/sections/Prizes";
import Route from "@/components/sections/Route";
import Gallery from "@/components/sections/Gallery";
import Sponsors from "@/components/sections/Sponsors";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Modalities />
      <Prizes />
      <Route />
      <Gallery />
      <Sponsors />
      <FAQ />
    </main>
  );
}
