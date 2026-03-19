import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { EVENT, FAQ_ITEMS } from "@/lib/constants";

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsEvent",
  name: "Floriano Run 2026 — 5ª Edição",
  description: EVENT.slogan,
  startDate: "2026-04-26T05:30:00-03:00",
  endDate: "2026-04-26T10:00:00-03:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Av. Frei Antônio Cúrcio, Bairro Bosque",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Frei Antônio Cúrcio",
      addressLocality: "Floriano",
      addressRegion: "PI",
      addressCountry: "BR",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Floriano Run",
    url: EVENT.instagram,
  },
  offers: {
    "@type": "Offer",
    url: EVENT.registrationUrl,
    price: "90.00",
    priceCurrency: "BRL",
    availability: "https://schema.org/InStock",
    validFrom: "2025-01-01",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export const metadata: Metadata = {
  title: "Floriano Run 2026 | 5ª Edição - 26 de Abril",
  description:
    "Participe da 5ª edição da Floriano Run! Corrida de rua em Floriano, Piauí. Modalidades de 3km, 5km e 10km. Inscrições a partir de R$90,00.",
  keywords: [
    "corrida de rua",
    "Floriano",
    "Piauí",
    "Floriano Run",
    "corrida 2026",
    "maratona",
    "esporte",
    "corrida Floriano",
    "evento esportivo Piauí",
    "caminhada Floriano",
  ],
  openGraph: {
    title: "Floriano Run 2026 - A superação é a nossa linha de chegada!",
    description:
      "5ª edição da maior corrida de rua de Floriano, Piauí. 26 de Abril de 2026. Modalidades de 3km, 5km e 10km. Inscreva-se!",
    locale: "pt_BR",
    type: "website",
    siteName: "Floriano Run",
  },
  twitter: {
    card: "summary_large_image",
    title: "Floriano Run 2026 | 5ª Edição",
    description:
      "Corrida de rua em Floriano, PI. 26 de Abril de 2026. 3km, 5km e 10km. Inscreva-se!",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://florianorun.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,600;1,700;1,800;1,900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="antialiased">
        {/* Skip to content - acessibilidade (agnostic-core/accessibility) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-orange-vibrant focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-body"
        >
          Pular para o conteúdo
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
