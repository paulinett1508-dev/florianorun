"use client";

import { useEffect, useState } from "react";
import { EVENT_DATE } from "@/lib/constants";

type TimeLeft = {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
};

function calculateTimeLeft(): TimeLeft | null {
  const now = new Date().getTime();
  const target = EVENT_DATE.getTime();
  const diff = target - now;

  if (diff <= 0) return null;

  return {
    dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
    horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutos: Math.floor((diff / (1000 * 60)) % 60),
    segundos: Math.floor((diff / 1000) % 60),
  };
}

function CountdownBox({ value, label }: { value: number | string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center shadow-lg">
        <span className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tabular-nums">
          {typeof value === "number" ? String(value).padStart(2, "0") : value}
        </span>
      </div>
      <span className="mt-2 text-[10px] sm:text-xs uppercase tracking-widest text-white/70 font-body">
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Use requestAnimationFrame to avoid synchronous setState in effect body
    requestAnimationFrame(() => {
      setMounted(true);
      setTimeLeft(calculateTimeLeft());
    });

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="flex gap-3 sm:gap-4 lg:gap-6">
        <CountdownBox value="--" label="Dias" />
        <CountdownBox value="--" label="Horas" />
        <CountdownBox value="--" label="Minutos" />
        <CountdownBox value="--" label="Segundos" />
      </div>
    );
  }

  if (!timeLeft) {
    return (
      <div className="bg-orange-vibrant/20 backdrop-blur-sm rounded-2xl px-6 py-4 border border-orange-vibrant/30">
        <p className="font-heading text-xl sm:text-2xl font-bold italic text-orange-vibrant">
          Evento em andamento! 🏃
        </p>
      </div>
    );
  }

  return (
    <div className="flex gap-3 sm:gap-4 lg:gap-6">
      <CountdownBox value={timeLeft.dias} label="Dias" />
      <CountdownBox value={timeLeft.horas} label="Horas" />
      <CountdownBox value={timeLeft.minutos} label="Minutos" />
      <CountdownBox value={timeLeft.segundos} label="Segundos" />
    </div>
  );
}
