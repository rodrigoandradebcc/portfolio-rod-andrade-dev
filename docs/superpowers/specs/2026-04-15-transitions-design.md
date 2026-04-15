# Transitions Design — 2026-04-15

## Goal

Add scroll-triggered entrance animations and richer micro-interactions to the portfolio using only Tailwind CSS and vanilla browser APIs (no new dependencies).

---

## Architecture

Three new pieces are introduced:

### 1. `src/hooks/useInView.ts`

Custom hook using `IntersectionObserver`. Returns `{ ref, inView }`.

- Fires once per element (does not re-animate on scroll out)
- Threshold: `0.12` (triggers when 12% of the element is visible)
- Cleans up the observer on unmount

### 2. `src/components/ui/AnimateIn.tsx`

Wrapper `<div>` that consumes `useInView` and applies animation classes.

Props:
- `children: React.ReactNode`
- `delay?: 0 | 1 | 2 | 3 | 4` — maps to CSS delay variables (default `0`)
- `className?: string`

Behavior: starts invisible (`opacity-0 translate-y-6`), transitions to visible when `inView` becomes true.

Export added to `src/components/ui/index.ts`.

### 3. `src/index.css` additions

```css
@keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

.animate-in {
  animation: fadeSlideUp 600ms cubic-bezier(0.16, 1, 0.3, 1) both;
}

.animate-in-delay-0 { animation-delay: 0ms; }
.animate-in-delay-1 { animation-delay: 100ms; }
.animate-in-delay-2 { animation-delay: 200ms; }
.animate-in-delay-3 { animation-delay: 300ms; }
.animate-in-delay-4 { animation-delay: 400ms; }
```

Elements are hidden by default via `opacity: 0` and the class is toggled by the hook.

---

## Scroll Animations — Per Section

### Hero

| Element | Delay |
|---|---|
| Badge + location | 0 |
| H1 name | 1 |
| Paragraph bio | 2 |
| CTA buttons row | 3 |
| Tech badges row | 4 |
| Right column cards | 2 |
| StatCards (each) | 0, 1, 2, 3 |

### Other sections (Experience, Skills, Education, Resume, Contact)

| Element | Delay |
|---|---|
| `SectionHeader` | 0 |
| First card/item | 1 |
| Second card/item | 2 |
| Third+ card/item | 3 (capped) |

---

## Micro-interactions

### `Card` component

- Add `hover:scale-[1.01]` to complement existing `hover:-translate-y-1`
- Add `hover:shadow-[0_8px_32px_rgba(16,185,129,0.08)]`

### `Badge` component

- Add `transition duration-200 hover:brightness-110`

### `Button` — primary variant

- Add `hover:shadow-[0_8px_24px_rgba(16,185,129,0.2)]`

### Profile photo (Hero)

- Add `transition duration-300 hover:scale-[1.03]` to the `<img>` tag

### Header nav links

- Add `hover:scale-[1.02]` to the existing transform on desktop nav `<a>` tags

---

## Constraints

- All animations respect `prefers-reduced-motion` — the existing rule in `index.css` already sets `animation-duration: 0.01ms` globally, so this is covered automatically.
- No new npm packages.
- TypeScript strict mode must pass — `AnimateIn` and `useInView` are fully typed.
