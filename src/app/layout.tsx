import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer";

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
      </head>
      <body className="antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
}
