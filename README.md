# Studio Pet — Estética Animal

Landing page institucional para a **Studio Pet**, construída com React, Vite e Tailwind CSS. O projeto é uma página única, responsiva e pronta para apresentação comercial, com foco em banho, tosa e cuidados especiais para cães e gatos.

## Stack

- **React 18** + **Vite**
- **Tailwind CSS 3**
- **Lucide React** para ícones
- Fontes **Fredoka** (títulos) e **Nunito Sans** (textos), hospedadas localmente em `public/fonts`

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Onde alterar as informações comerciais

Todo telefone, WhatsApp, Instagram, endereço e horário ficam em **um único arquivo**:

`src/config/site.js`

Antes de publicar, substitua os placeholders:

- `WHATSAPP_NUMBER`: apenas números, com DDI e DDD (ex.: `5544999999999`).
- `whatsappDisplay`: formato visível do telefone.
- `instagram.handle` e `instagram.url`: perfil oficial.
- `address.street`, `address.city` e `address.mapsUrl`.
- `hours`: horários reais de atendimento.

As mensagens pré-preenchidas enviadas ao WhatsApp também estão nesse arquivo (`siteConfig.messages`).

> **Importante:** o número `5500000000000`, o endereço, os horários e o Instagram são placeholders de exemplo. Nenhum dado comercial real foi inventado.

## Conteúdo demonstrativo

Os depoimentos em `src/data/testimonials.js` são ilustrativos e aparecem no site com o selo **“Exemplo”** e o aviso “Conteúdo demonstrativo”. Substitua-os por avaliações reais antes da publicação.

Os serviços em `src/data/services.js` não exibem preços: os cards usam o selo **“Sob consulta”** e cada botão abre o WhatsApp com uma mensagem específica do serviço. A estrutura está pronta para receber valores no futuro, se desejado.

## Estrutura

```
src/
  components/
    Header.jsx          # navegação sticky + menu mobile
    Hero.jsx            # seção principal
    Differentials.jsx   # faixa de diferenciais
    Services.jsx        # cards de serviços
    About.jsx           # sobre a Studio Pet
    Gallery.jsx         # galeria com lightbox acessível
    Testimonials.jsx    # depoimentos demonstrativos
    FinalCTA.jsx        # chamada final
    Footer.jsx          # rodapé completo
    WhatsAppButton.jsx  # botão flutuante
    ui/                 # Button, Logo, Reveal, SectionHeading, Decor
  config/site.js        # dados comerciais (fonte única)
  data/                 # navegação, serviços, galeria, depoimentos
  hooks/                # scroll, seção ativa, scroll lock
  lib/utils.js
  App.jsx
  index.css
public/
  fonts/                # Fredoka e Nunito Sans (self-hosted)
  images/               # fotografias locais (sem dependência externa)
  favicon.svg
```

## Comportamentos implementados

- Navegação por âncoras com scroll suave e seção ativa destacada no header.
- Header sticky com menu mobile acessível (Escape, bloqueio de scroll e fechamento ao navegar).
- Botões de agendamento abrindo o WhatsApp em nova aba.
- Galeria com lightbox: navegação por setas do teclado, fechamento com Escape, foco restaurado e scroll bloqueado.
- Animações discretas de entrada com `IntersectionObserver`, respeitando `prefers-reduced-motion`.
- Estados de hover e `focus-visible` em links, botões e cards.
- Layout responsivo verificado em desktop (1440px), tablet (834px) e mobile (390px).

## Acessibilidade e qualidade

- Contraste de texto ajustado para os principais pares de cores (AA).
- Todos os links e botões têm destino válido; imagens com texto alternativo.
- Área de toque mínima de 24×24px nos links do rodapé e CTAs.
- Sem erros de console, requisições falhas ou imagens quebradas.
- `lang="pt-BR"`, metadados de SEO e favicon próprios.

## Créditos das imagens

As fotografias são de bancos de imagens gratuitos (Unsplash/Pexels) e estão armazenadas localmente em `public/images`, evitando dependências externas em tempo de execução. Substitua-as por fotos reais do studio quando estiverem disponíveis.
