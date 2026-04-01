# Rodrigo Andrade | Portfolio

Portfólio pessoal desenvolvido para apresentar experiência profissional, stack principal, formação e canais de contato de Rodrigo Andrade.

A aplicação foi construída com foco em performance, manutenção simples e atualização rápida de conteúdo. Os dados do portfólio ficam centralizados em um único arquivo, facilitando ajustes em experiências, skills e informações pessoais sem espalhar conteúdo pela interface.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- ESLint

## Seções do projeto

- `Hero`: apresentação principal com resumo e CTAs
- `Resume`: visão geral de competências e posicionamento profissional
- `Experience`: histórico profissional com destaques, stacks e logos
- `Skills`: principais tecnologias e especialidades
- `Education`: formação acadêmica e complementar
- `Contact`: links de contato e redes

## Estrutura

```text
src/
  assets/                # imagens e logos
  components/
    layout/              # header e footer
    sections/            # seções principais da página
    ui/                  # componentes reutilizáveis
  data/
    portfolio.ts         # conteúdo central do portfólio
  types/
    portfolio.ts         # tipagens do domínio
```

## Como rodar localmente

### Pré-requisitos

- Node.js 20+ recomendado
- npm

### Instalação

```bash
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

O Vite exibirá a URL local no terminal, normalmente `http://localhost:5173`.

## Scripts

```bash
npm run dev      # inicia o ambiente de desenvolvimento
npm run build    # gera o build de produção
npm run preview  # sobe o build localmente para conferência
npm run lint     # executa o lint
```

## Personalização rápida

O ponto principal de edição é o arquivo [`src/data/portfolio.ts`](./src/data/portfolio.ts).

Nele você pode alterar:

- dados pessoais
- experiências profissionais
- skills
- formação
- idiomas
- estatísticas e navegação

Para ajustes visuais, os arquivos mais relevantes são:

- [`src/index.css`](./src/index.css)
- [`src/components/ui`](./src/components/ui)
- [`src/components/sections`](./src/components/sections)

## Build de produção

```bash
npm run build
```

Os arquivos finais serão gerados na pasta `dist/`.

## Objetivo do projeto

Este portfólio foi pensado para comunicar:

- experiência com produtos digitais ponta a ponta
- especialidade em React, React Native, Next.js e Node.js
- atuação em frontend, mobile e full stack
- familiaridade com design systems, UX e workflows com IA

## Contato

- LinkedIn: [linkedin.com/in/rodandradebcc](https://www.linkedin.com/in/rodandradebcc)
- GitHub: [github.com/rodandradebcc](https://github.com/rodandradebcc)
- Email: [rodrigoandradebcc@gmail.com](mailto:rodrigoandradebcc@gmail.com)
