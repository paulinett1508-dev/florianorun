import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import CountdownTimer from "./CountdownTimer";
import { EVENT } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-petroleo-dark via-blue-petroleo to-orange-vibrant/30" />

      {/* Animated circles decoration */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-orange-vibrant/10 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-orange-vibrant/5 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/[0.03]" />

      {/* Content */}
      <Container className="relative z-10 text-center py-20">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          {/* Edition badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 border border-white/20">
            <div className="w-2 h-2 rounded-full bg-orange-vibrant animate-pulse" />
            <span className="text-xs sm:text-sm font-body font-medium text-white/90 uppercase tracking-wider">
              {EVENT.edition} • Inscrições Abertas
            </span>
          </div>

          {/* Event name */}
          <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black italic uppercase tracking-tight">
            <span className="text-orange-vibrant drop-shadow-lg">Floriano</span>
            <br />
            <span className="text-white">Run</span>
          </h1>

          {/* Date */}
          <p className="font-heading text-lg sm:text-xl lg:text-2xl font-semibold text-white/80 uppercase tracking-widest">
            {EVENT.date}
          </p>

          {/* Slogan */}
          <p className="font-body text-base sm:text-lg text-white/60 max-w-md italic">
            &ldquo;{EVENT.slogan}&rdquo;
          </p>

          {/* Countdown */}
          <div className="my-4">
            <CountdownTimer />
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Button href={EVENT.registrationUrl} variant="primary" size="lg" pulse>
              Inscreva-se Agora — {EVENT.price}
            </Button>
            <Button href={EVENT.instagram} variant="outline" size="lg">
              Siga no Instagram
            </Button>
          </div>

          {/* Modalities preview */}
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {["3km", "5km", "10km"].map((dist) => (
              <span
                key={dist}
                className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-1 text-sm font-heading font-bold text-white/80 border border-white/10"
              >
                {dist}
              </span>
            ))}
            <span className="bg-purple-500/20 backdrop-blur-sm rounded-full px-4 py-1 text-sm font-heading font-bold text-purple-300 border border-purple-500/20">
              Kids & Teens
            </span>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/40 text-xs font-body uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
