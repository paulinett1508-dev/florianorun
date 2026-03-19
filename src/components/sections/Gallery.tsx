"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { GALLERY_IMAGES } from "@/lib/constants";

// Gradient palette for dev placeholders when images aren't available yet
const placeholderGradients = [
  "from-orange-vibrant/30 to-blue-petroleo/30",
  "from-blue-petroleo/40 to-purple-600/20",
  "from-orange-vibrant/20 to-yellow-500/20",
  "from-green-600/20 to-blue-petroleo/30",
  "from-orange-vibrant/40 to-red-600/20",
  "from-purple-600/20 to-orange-vibrant/20",
  "from-blue-petroleo/30 to-green-600/20",
  "from-red-600/20 to-orange-vibrant/30",
];

function GalleryPlaceholder({ alt, index }: { alt: string; index: number }) {
  const gradient = placeholderGradients[index % placeholderGradients.length];
  return (
    <div className={`w-full h-full bg-gradient-to-br ${gradient} flex flex-col items-center justify-center gap-2 p-4`}>
      <Camera className="w-8 h-8 text-white/40" aria-hidden="true" />
      <p className="text-white/50 text-xs font-body text-center leading-tight">
        {alt}
      </p>
    </div>
  );
}

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (GALLERY_IMAGES.length === 0) {
    return (
      <section id="galeria" className="py-20 sm:py-28 bg-[#0a0a0a]">
        <Container>
          <AnimateOnScroll>
            <SectionHeading subtitle="Momentos das edições anteriores que marcaram história">
              Galeria
            </SectionHeading>
          </AnimateOnScroll>

          <AnimateOnScroll delay={150}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-xl bg-gradient-to-br from-white/[0.03] to-white/[0.08] border border-white/10 flex items-center justify-center group hover:border-orange-vibrant/20 transition-colors"
                >
                  <div className="text-center opacity-40 group-hover:opacity-60 transition-opacity">
                    <Camera className="w-8 h-8 mx-auto text-orange-vibrant/50 mb-2" />
                    <p className="text-white/40 text-xs font-body">Em breve</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={250}>
            <p className="text-center text-white/50 text-sm font-body mt-8">
              Fotos das edições anteriores em breve!
            </p>
          </AnimateOnScroll>
        </Container>
      </section>
    );
  }

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : null
    );
  const nextImage = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % GALLERY_IMAGES.length : null
    );

  return (
    <section id="galeria" className="py-20 sm:py-28 bg-[#0a0a0a]">
      <Container>
        <AnimateOnScroll>
          <SectionHeading subtitle="Momentos das edições anteriores que marcaram história">
            Galeria
          </SectionHeading>
        </AnimateOnScroll>

        <AnimateOnScroll delay={150}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {GALLERY_IMAGES.map((img, i) => (
              <button
                key={i}
                onClick={() => openLightbox(i)}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer border border-white/10 hover:border-orange-vibrant/30 transition-colors"
              >
                <GalleryPlaceholder alt={img.alt} index={i} />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={250}>
          <p className="text-center text-white/40 text-xs font-body mt-6">
            Placeholders de desenvolvimento — substituir por fotos reais em{" "}
            <code className="text-orange-vibrant/70">public/images/gallery/</code>
          </p>
        </AnimateOnScroll>
      </Container>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            className="absolute top-4 right-4 text-white/80 hover:text-white z-10"
            aria-label="Fechar galeria"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 text-white/80 hover:text-white z-10"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <div
            className="relative w-full max-w-4xl aspect-video mx-4 rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <GalleryPlaceholder
              alt={GALLERY_IMAGES[lightboxIndex].alt}
              index={lightboxIndex}
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 text-white/80 hover:text-white z-10"
            aria-label="Próxima foto"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      )}
    </section>
  );
}
