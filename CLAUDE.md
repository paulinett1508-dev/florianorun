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

## Identidade Visual (Source of Truth)
Assets completos em `public/images/id-visual/IDENTIDADE VISUAL - FLORIANO RUN/`.
PDF de apresentação: `APRESENTAÇÃO.pdf` (7 páginas, Adobe Illustrator).

### Paleta Oficial (4 cores)
| Token CSS                    | Hex       | Papel                          |
|------------------------------|-----------|--------------------------------|
| `--color-orange-vibrant`     | `#FF7400` | Primária, CTAs, destaques      |
| `--color-creme-oficial`      | `#FFFB7F` | Complementar clara (não usada ainda no CSS) |
| `--color-blue-petroleo`      | `#3B5775` | Secundária, farol, seções      |
| *(sem token)*                | `#000000` | Monocromático, texto           |
| `--color-surface`            | `#0a0a0a` | Background dark do site        |

### Tipografia
- **Marca (offline):** He's Dead Jim (display) + Oswald (apoio) — em `FONTES/`
- **Site (web):** Montserrat (headings) + Inter (body) — via Google Fonts

### Logos Disponíveis
- **OFICIAL** (vertical): 3 tamanhos × 10 variantes de cor
- **HORIZONTAL**: 3 tamanhos × 10 variantes de cor
- **Vetorizado:** `LOGO/LOGO VETORIZADA.ai`
- **Marca d'água:** `MARCA D_AGUA 2.png`

### Variantes Recomendadas por Contexto
| Contexto       | Variante                    | Motivo                        |
|----------------|-----------------------------|-------------------------------|
| Fundo dark     | BRANCO.png ou LARANJA E AZUL.png | Máximo contraste/identidade |
| Fundo azul     | BRANCO E LARANJA.png        | Leitura sobre petróleo        |
| Fundo claro    | AZUL E LARANJA.png          | Cores da marca sobre claro    |
| Monocromático  | PRETO.png ou LARANJA.png    | Versão simplificada           |

### Nota sobre typo
Na pasta `OFICIAL/` existe "LARNAJA E BRANCO.png" (typo de "LARANJA"). Na `HORIZONTAL/` está correto.

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
- `.agnostic-core/skills/ux-ui/principios-de-interface.md` — Princípios de interface e estados
- `.agnostic-core/commands/workflows/` — Brainstorm, create, debug, deploy

### Checklists de Entrega (extraídos do agnostic-core)

#### SEO & Core Web Vitals
- LCP < 2.5s, INP < 200ms, CLS < 0.1
- JSON-LD SportsEvent + FAQPage em layout.tsx
- H1 único, hierarquia H2→H3 sem pular níveis
- Alt text descritivo em todas as imagens; nomes de arquivo descritivos
- GEO: FAQ com perguntas naturais para extração por LLMs (ChatGPT/Gemini)
- Hero image acima-do-fold SEM lazy loading; font-display: swap nas fontes

#### Acessibilidade (WCAG 2.1 AA)
- Contraste 4.5:1 (texto normal), 3:1 (texto grande)
- Tab navega tudo; sem focus traps; skip-to-main como 1º focusable
- prefers-reduced-motion: reduce (animações decorativas desativadas)
- aria-hidden="true" em ícones decorativos
- Semântica: <header>, <main>, <nav>, <footer>, <section>

#### UX & Interação
- Touch targets 44x44px mínimo + 8px espaçamento entre alvos
- Funcional em 375px (mobile) sem scroll horizontal
- Hierarquia visual clara: tamanho/peso/posição guiam leitura
- 16px mínimo corpo mobile; line-height 1.4-1.6 parágrafos
- Estados: loading (skeleton), empty (explicar + ação), error (mensagem + retry)

#### Tailwind CSS v4
- Mobile-first: classes base = mobile, sm:/md:/lg:/xl: para maiores
- Tokens via @theme em globals.css (nunca #hex direto no JSX)
- motion-safe: / motion-reduce: para animações
- Sem classes dinâmicas (`text-${cor}-500`); usar mapa explícito
- Regra dos 3: 3+ usos → extrair componente React

#### CSS Governance
- Todas as cores via var(--color-*), sem #hex inline
- Sem inline style="" em HTML; sem !important (exceto override 3rd-party)
- Não redefinir @keyframes já existentes em globals.css

#### Deploy Checklist
- Pre-flight: npm run build OK + npm run lint OK + sem secrets no código
- Smoke test: Hero carrega + countdown funciona + CTAs clicáveis + nav funcional
- Monitor Vercel pós-deploy: errors, CLS, LCP
- Rollback: 1 clique no dashboard Vercel

### Agentes de Review
- **Frontend Review:** "Atue como frontend-reviewer agent. Revise [pasta]."
- **SEO Specialist:** "Atue como seo-specialist agent. Audit SEO da landing page."
- Consultar: `.agnostic-core/agents/reviewers/frontend-reviewer.md` e `.agnostic-core/agents/specialists/seo-specialist.md`

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

## Uso de Subagents

- Use subagents para pesquisa, exploração e análise paralela — mantém o contexto principal limpo
- Offload investigação de codebase, leitura de logs e tarefas independentes para subagents
- Uma tarefa por subagent para execução focada; prefira paralelismo a execução sequencial
- Para problemas complexos: jogue mais compute via subagents antes de travar o contexto principal

## Verificação antes de Concluir

- Nunca marque tarefa como concluída sem provar que funciona (diff, log, teste, screenshot)
- Checagem mental obrigatória: *"Um senior engineer aprovaria esse diff?"*
- Aplica-se a features e refactors — não apenas ao Bug Fix Protocol
- Se algo parece incerto: demonstre a correção, não apenas afirme

## Elegância (features não-triviais)

- Para mudanças que tocam 3+ arquivos: pause e pergunte "há solução mais elegante?"
- Se a solução parece hack: "sabendo tudo o que sei agora, qual é a implementação elegante?"
- **Exceção obrigatória:** fixes simples e óbvios — não over-engenheirar, não buscar elegância onde ela não agrega
