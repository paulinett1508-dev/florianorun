# Floriano Run 2026 — Landing Page

## Projeto
Site teaser/landing page para a 5ª edição da corrida de rua Floriano Run, em Floriano-PI.
Desenvolvido pela **Flow Digital - Automações Inteligentes**.

## Stack
- **Framework:** Next.js 16 (static export, sem servidor)
- **UI:** React 19 + Tailwind CSS v4 (utility-first, zero CSS modules)
- **Ícones:** lucide-react
- **Fontes:** Montserrat (headings) + Inter (body) via Google Fonts
- **Deploy:** Vercel (static)

## Estrutura
```
src/
├── app/
│   ├── layout.tsx          # Root layout + metadata/SEO
│   ├── page.tsx            # Home (compõe todas as seções)
│   └── globals.css         # Tailwind + tema custom
├── components/
│   ├── sections/           # Seções da página
│   │   ├── Hero.tsx        # Banner principal + countdown
│   │   ├── About.tsx       # Sobre + timeline edições
│   │   ├── Modalities.tsx  # 3km/5km/10km + Kids/Teens
│   │   ├── Prizes.tsx      # Premiação + cronograma
│   │   ├── Gallery.tsx     # Galeria (aguardando fotos)
│   │   ├── FAQ.tsx         # Perguntas frequentes (accordion)
│   │   ├── ComingSoon.tsx  # Percurso + Patrocinadores (locked)
│   │   └── CountdownTimer.tsx
│   ├── ui/                 # Componentes reutilizáveis
│   │   ├── Button.tsx
│   │   ├── Container.tsx
│   │   └── SectionHeading.tsx
│   └── layout/
│       └── Footer.tsx
└── lib/
    ├── constants.ts        # TODOS os dados do evento (fonte única)
    └── utils.ts            # cn() helper
```

## Cores do tema
- `--color-orange-vibrant: #FF7400` (primária)
- `--color-blue-petroleo: #3B5775` (secundária)
- Background: `#0a0a0a` (dark)

## Dados do evento
Todos os dados ficam centralizados em `src/lib/constants.ts`:
- Informações do evento, organizadores, local
- Modalidades adulto (3km, 5km, 10km) e Kids/Teens
- Premiação em dinheiro
- Cronograma de largadas
- Histórico das edições anteriores
- FAQ
- Galeria (array vazio, aguardando fotos)

## Inscrições
As inscrições são gerenciadas pelo **Runtra** (externo):
- URL: https://runtra.com.br/eventos/floriano-run-2026
- Não temos banco, auth ou pagamento no nosso lado

## Pendências
- Fotos reais em `public/images/gallery/` + atualizar GALLERY_IMAGES em constants
- Logo da Flow Digital no footer (substituir placeholder)
- Logos de patrocinadores em `public/images/sponsors/`
- Seção Percurso (mapa) — quando disponível

## Comandos
```bash
npm run dev      # dev server
npm run build    # static export (output: out/)
npm run lint     # eslint
```
