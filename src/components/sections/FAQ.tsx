"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { FAQ_ITEMS } from "@/lib/constants";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-white/5 transition-colors cursor-pointer"
      >
        <span className="font-heading font-semibold text-white text-sm sm:text-base">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-orange-vibrant shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-white/60 font-body text-sm leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-surface">
      <Container>
        <SectionHeading subtitle="Tire suas dúvidas sobre o evento">
          Perguntas Frequentes
        </SectionHeading>

        <div className="max-w-2xl mx-auto flex flex-col gap-3">
          {FAQ_ITEMS.map((item) => (
            <FAQItem key={item.question} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
