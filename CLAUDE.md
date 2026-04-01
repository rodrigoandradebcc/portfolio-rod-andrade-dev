# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `npm run dev`
- **Build:** `npm run build` (runs `tsc -b && vite build`)
- **Lint:** `npm run lint`
- **Preview production build:** `npm run preview`

## Architecture

Portfolio site built with React 19, TypeScript 5.9, Vite 8, and Tailwind CSS. Single-page app with no routing.

- **Entry point:** `src/main.tsx` renders `<App />` inside `<StrictMode>`
- **React Compiler** is enabled via `babel-plugin-react-compiler` + `@rolldown/plugin-babel` in `vite.config.ts`
- **Tailwind CSS** via `@tailwindcss/vite` plugin — all styling is utility-first
- **TypeScript** strict mode with `noUnusedLocals` and `noUnusedParameters` (`tsconfig.app.json`)
- **ESLint** flat config with `typescript-eslint`, `react-hooks`, `react-refresh` (`eslint.config.js`)

### Project Structure

```
src/
  types/portfolio.ts       — TypeScript interfaces (Experience, Skill, Education, etc.)
  data/portfolio.ts        — All CV/portfolio content as typed constants
  components/
    ui/                    — Reusable primitives (Badge, Button, Card, Container, SectionHeader, Icons)
    layout/                — Header (fixed nav) and Footer
    sections/              — Page sections (Hero, Resume, Experience, Skills, Education, Contact)
```

**Data-driven:** All content lives in `src/data/portfolio.ts`. To update CV info, edit data — not components.
