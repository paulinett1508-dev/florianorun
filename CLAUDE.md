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

## Referências de qualidade (agnostic-core)
Integrado como git submodule em `.agnostic-core/`. Consulte antes de alterar frontend:
- `.agnostic-core/skills/frontend/seo-checklist.md` — SEO técnico e Core Web Vitals
- `.agnostic-core/skills/frontend/accessibility.md` — WCAG 2.1 AA checklist
- `.agnostic-core/skills/frontend/ux-guidelines.md` — UX e touch targets (44x44px)
- `.agnostic-core/skills/frontend/tailwind-patterns.md` — Tailwind v4 patterns
- `.agnostic-core/skills/frontend/css-governance.md` — Tokens e governança CSS
- `.agnostic-core/skills/frontend/html-css-audit.md` — Auditoria HTML/CSS
- `.agnostic-core/skills/performance/` — Caching, load testing, performance audit
- `.agnostic-core/skills/security/` — OWASP, API hardening
- `.agnostic-core/commands/workflows/` — Brainstorm, create, debug, deploy

## SEO Estruturado
- JSON-LD `SportsEvent` em `layout.tsx` (rich results do Google)
- JSON-LD `FAQPage` gerado automaticamente a partir de `FAQ_ITEMS`
- Skip-to-content link para acessibilidade
- `prefers-reduced-motion` respeitado globalmente
- Focus visible com outline laranja

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
