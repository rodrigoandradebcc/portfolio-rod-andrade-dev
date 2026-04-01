# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `npm run dev`
- **Build:** `npm run build` (runs `tsc -b && vite build`)
- **Lint:** `npm run lint`
- **Preview production build:** `npm run preview`

## Architecture

Portfolio site built with React 19, TypeScript 5.9, and Vite 8. Currently a single-page app with no routing.

- **Entry point:** `src/main.tsx` renders `<App />` inside `<StrictMode>`
- **React Compiler** is enabled via `babel-plugin-react-compiler` + `@rolldown/plugin-babel` in `vite.config.ts`
- **TypeScript** uses strict mode with `noUnusedLocals` and `noUnusedParameters` enabled (`tsconfig.app.json`)
- **ESLint** flat config with `typescript-eslint`, `react-hooks`, and `react-refresh` plugins (`eslint.config.js`)
- CSS is plain CSS (no preprocessor or CSS-in-JS) — `src/App.css` and `src/index.css`
