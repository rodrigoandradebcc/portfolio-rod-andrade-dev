# Transitions Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add scroll-triggered fade+slide-up entrance animations and richer hover micro-interactions across the portfolio using only Tailwind CSS and a custom React hook.

**Architecture:** A `useInView` hook wraps `IntersectionObserver` and fires once per element. An `AnimateIn` wrapper component consumes the hook and applies CSS animation classes. CSS `@keyframes` defined in `index.css` drive the animation; `prefers-reduced-motion` is already handled globally.

**Tech Stack:** React 19, TypeScript, Tailwind CSS v4, Vite 8 — no new dependencies.

---

## File Map

| Action | File |
|---|---|
| Modify | `src/index.css` |
| Create | `src/hooks/useInView.ts` |
| Create | `src/components/ui/AnimateIn.tsx` |
| Modify | `src/components/ui/index.ts` |
| Modify | `src/components/ui/Card.tsx` |
| Modify | `src/components/ui/Badge.tsx` |
| Modify | `src/components/ui/Button.tsx` |
| Modify | `src/components/layout/Header.tsx` |
| Modify | `src/components/sections/Hero.tsx` |
| Modify | `src/components/sections/Experience.tsx` |
| Modify | `src/components/sections/Skills.tsx` |
| Modify | `src/components/sections/Education.tsx` |
| Modify | `src/components/sections/Resume.tsx` |
| Modify | `src/components/sections/Contact.tsx` |

---

## Task 1: Add CSS keyframes to index.css

**Files:**
- Modify: `src/index.css`

- [ ] **Step 1: Add `@keyframes` and animation utility classes**

Open `src/index.css` and append the following block after the `.hide-scrollbar` rules:

```css
/* ── Entrance animations ────────────────────────────── */
@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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

- [ ] **Step 2: Verify the animation plays**

Run `npm run dev`, open `http://localhost:5173`, open DevTools → Elements, manually add `animate-in animate-in-delay-0` classes to any `<div>` and confirm it fades+slides up. Remove the classes after.

- [ ] **Step 3: Commit**

```bash
git add src/index.css
git commit -m "feat: add fadeSlideUp keyframe and delay utilities"
```

---

## Task 2: Create `useInView` hook

**Files:**
- Create: `src/hooks/useInView.ts`

- [ ] **Step 1: Create the hooks directory and file**

Create `src/hooks/useInView.ts` with the following content:

```typescript
import { useEffect, useRef, useState } from 'react'

export function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}
```

- [ ] **Step 2: Commit**

```bash
git add src/hooks/useInView.ts
git commit -m "feat: add useInView hook with IntersectionObserver"
```

---

## Task 3: Create `AnimateIn` component and export it

**Files:**
- Create: `src/components/ui/AnimateIn.tsx`
- Modify: `src/components/ui/index.ts`

- [ ] **Step 1: Create `AnimateIn.tsx`**

Create `src/components/ui/AnimateIn.tsx`:

```typescript
import { useInView } from '../../hooks/useInView'

interface AnimateInProps {
  children: React.ReactNode
  delay?: 0 | 1 | 2 | 3 | 4
  className?: string
}

export function AnimateIn({ children, delay = 0, className = '' }: AnimateInProps) {
  const { ref, inView } = useInView()

  return (
    <div
      ref={ref}
      className={`${inView ? `animate-in animate-in-delay-${delay}` : 'opacity-0'} ${className}`}
    >
      {children}
    </div>
  )
}
```

- [ ] **Step 2: Export from `index.ts`**

Open `src/components/ui/index.ts` and add the export:

```typescript
export { AnimateIn } from './AnimateIn'
export { Badge } from './Badge'
export { Button } from './Button'
export { Card } from './Card'
export { Container } from './Container'
export { SectionHeader } from './SectionHeader'
export {
  LinkedInIcon,
  GitHubIcon,
  EmailIcon,
  CodeIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
} from './Icons'
```

- [ ] **Step 3: Run the dev server and confirm no TypeScript errors**

```bash
npm run build
```

Expected: build succeeds with no errors.

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/AnimateIn.tsx src/components/ui/index.ts
git commit -m "feat: add AnimateIn wrapper component"
```

---

## Task 4: Apply `AnimateIn` to Hero section

**Files:**
- Modify: `src/components/sections/Hero.tsx`

- [ ] **Step 1: Update Hero.tsx**

Replace the Hero.tsx imports line and the left-column and right-column content. The full updated file:

```typescript
import {
  Container,
  Badge,
  Button,
  Card,
  LinkedInIcon,
  GitHubIcon,
  EmailIcon,
  MapPinIcon,
  WhatsAppIcon,
  AnimateIn,
} from "../ui";
import { personalInfo, stats } from "../../data/portfolio";
import profilePhoto from "../../assets/profile-photo.png";

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <Card className="flex h-full min-h-[180px] flex-col items-start justify-start p-5 text-left md:min-h-[200px] md:p-6">
      <p className="text-[1.7rem] leading-none font-black tracking-[-0.04em] text-zinc-50 md:text-[2.1rem]">
        {value}
      </p>
      <p className="mt-3 text-[1.05rem] leading-[1.7] text-zinc-400 md:text-[1.2rem]">
        {label}
      </p>
    </Card>
  );
}

export function Hero() {
  const whatsappUrl = `https://wa.me/55${personalInfo.phone}`;
  const primaryCtaClassName =
    "h-[46px] w-fit max-w-full justify-start rounded-[0.9rem] px-3 py-0 text-[0.85rem] font-semibold tracking-[-0.02em]";
  const secondaryCtaClassName =
    "h-[46px] w-fit max-w-full justify-start rounded-[0.9rem] border-white/12 bg-white/[0.04] px-3 py-0 text-[0.85rem] font-semibold tracking-[-0.02em] text-zinc-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] hover:border-white/18 hover:bg-white/[0.07]";

  return (
    <section className="border-b border-white/5 pt-28 pb-20">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.16),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_28%),linear-gradient(135deg,rgba(24,24,27,0.98),rgba(31,41,55,0.92))] px-4 py-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:rounded-[2.75rem] sm:px-6 sm:py-8 md:px-10 md:py-10 lg:px-14 lg:py-14">
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
            {/* Left column */}
            <div className="min-w-0">
              <AnimateIn delay={0}>
                <Badge
                  variant="accent"
                  className="mb-6 flex w-full max-w-full overflow-hidden text-[0.68rem] tracking-[0.14em] sm:w-auto sm:text-sm sm:tracking-[0.2em]"
                >
                  <MapPinIcon className="mr-1.5 size-3 shrink-0" />
                  <span className="block min-w-0 truncate">
                    Portfolio 2026 — {personalInfo.location}
                  </span>
                </Badge>
              </AnimateIn>

              <AnimateIn delay={1}>
                <h1 className="text-[clamp(2rem,10vw,3.25rem)] leading-[0.95] font-black tracking-[-0.05em] text-zinc-50">
                  {personalInfo.name}
                </h1>
              </AnimateIn>

              <AnimateIn delay={2}>
                <p className="mt-5 max-w-[34rem] text-[0.98rem] leading-7 text-zinc-400 md:text-[1.25rem] md:leading-[1.65]">
                  Software Engineer com +5 anos de experiência construindo
                  produtos digitais de ponta a ponta. Especialista em React, React
                  Native e Node.js — do MVP à escala.
                </p>
              </AnimateIn>

              <AnimateIn delay={3}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    href={personalInfo.linkedin}
                    className={primaryCtaClassName}
                  >
                    <LinkedInIcon className="size-4" />
                    LinkedIn
                  </Button>
                  <Button
                    href={whatsappUrl}
                    className={`${primaryCtaClassName} bg-[#25D366] text-zinc-950 hover:brightness-105`}
                  >
                    <WhatsAppIcon className="size-4" />
                    WhatsApp
                  </Button>
                  {personalInfo.github && (
                    <Button
                      href={personalInfo.github}
                      variant="secondary"
                      className={secondaryCtaClassName}
                    >
                      <GitHubIcon className="size-4" />
                      GitHub
                    </Button>
                  )}
                  <Button
                    href={`mailto:${personalInfo.email}`}
                    variant="secondary"
                    className={secondaryCtaClassName}
                  >
                    <EmailIcon className="size-4" />
                    {personalInfo.email}
                  </Button>
                </div>
              </AnimateIn>

              <AnimateIn delay={4}>
                <div className="mt-8 flex flex-wrap gap-1 w-full bg-red">
                  <Badge className="w-fit max-w-full justify-center whitespace-nowrap text-[0.68rem] tracking-[0.14em] sm:justify-start sm:text-xs sm:tracking-[0.2em]">
                    React + React Native
                  </Badge>
                  <Badge className="w-fit max-w-full justify-center whitespace-nowrap text-[0.68rem] tracking-[0.14em] sm:justify-start sm:text-xs sm:tracking-[0.2em]">
                    Node.js + NestJS
                  </Badge>
                  <Badge className="w-fit max-w-full justify-center whitespace-nowrap text-[0.68rem] tracking-[0.14em] sm:justify-start sm:text-xs sm:tracking-[0.2em]">
                    AI, LLMs e MCP
                  </Badge>
                </div>
              </AnimateIn>
            </div>

            {/* Right column */}
            <div className="min-w-0 space-y-6">
              <AnimateIn delay={2}>
                <Card hover={false} className="p-4 sm:p-6 md:p-7">
                  <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-start sm:gap-6">
                    <img
                      src={profilePhoto}
                      alt={`Foto de perfil de ${personalInfo.name}`}
                      className="h-46 w-full max-w-[11.5rem] shrink-0 self-start rounded-[2rem] border border-white/10 object-cover object-center shadow-[0_24px_50px_rgba(0,0,0,0.32)] transition duration-300 hover:scale-[1.03] sm:w-42"
                    />
                    <div className="min-w-0 flex-1 text-left">
                      <p className="text-[1.05rem] leading-tight font-bold tracking-[-0.03em] text-zinc-50 sm:whitespace-nowrap md:text-[1.2rem]">
                        {personalInfo.name}
                      </p>
                      <p className="mt-2 text-[1rem] leading-[1.7] text-zinc-400 sm:text-[1.05rem] sm:leading-[1.75]">
                        React, React Native, Next.js, Node.js e arquitetura de
                        produtos digitais em escala.
                      </p>
                    </div>
                  </div>
                </Card>
              </AnimateIn>

              <AnimateIn delay={3}>
                <Card hover={false} className="p-4 text-left sm:p-6 md:p-7">
                  <p className="text-[1rem] leading-[1.75] text-zinc-400 sm:text-[1.05rem] sm:leading-[1.8]">
                    Formado em Ciências da Computação pelo CESUPA. Interessado em
                    times que valorizem código limpo, boas práticas e produto bem
                    construído.
                  </p>
                </Card>
              </AnimateIn>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, i) => (
              <AnimateIn key={stat.value} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <StatCard value={stat.value} label={stat.label} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
```

- [ ] **Step 2: Verify in browser**

Open `http://localhost:5173`, scroll to Hero, hard-refresh (`Cmd+Shift+R`). Confirm badge, h1, paragraph, buttons, and tech badges animate in sequence. Right cards and stat cards should also animate.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/Hero.tsx
git commit -m "feat: add AnimateIn entrance animations to Hero section"
```

---

## Task 5: Apply `AnimateIn` to Experience section

**Files:**
- Modify: `src/components/sections/Experience.tsx`

- [ ] **Step 1: Add AnimateIn import and wrap elements**

In `src/components/sections/Experience.tsx`, update the import and the `Experience` function:

```typescript
import { useState } from 'react'
import { Container, SectionHeader, Badge, AnimateIn } from '../ui'
import { experiences } from '../../data/portfolio'
import type { Experience as ExperienceType } from '../../types/portfolio'
```

Replace the return of `Experience()`:

```typescript
export function Experience() {
  return (
    <section id="experiencia" className="border-b border-white/5 py-20">
      <Container>
        <AnimateIn delay={0}>
          <SectionHeader
            label="Experiência"
            title="Trajetória focada em produto, escala e qualidade de engenharia"
          />
        </AnimateIn>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <AnimateIn key={exp.company} delay={Math.min(i + 1, 4) as 0 | 1 | 2 | 3 | 4}>
              <ExperienceCard experience={exp} index={i} />
            </AnimateIn>
          ))}
        </div>
      </Container>
    </section>
  )
}
```

- [ ] **Step 2: Verify in browser**

Scroll past Hero to Experience. The section header should animate in first, then each card staggered after it.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/Experience.tsx
git commit -m "feat: add AnimateIn to Experience section"
```

---

## Task 6: Apply `AnimateIn` to Skills section

**Files:**
- Modify: `src/components/sections/Skills.tsx`

- [ ] **Step 1: Add AnimateIn import and wrap elements**

Update import in `src/components/sections/Skills.tsx`:

```typescript
import { Container, SectionHeader, AnimateIn } from '../ui'
```

Replace the return of `Skills()`:

```typescript
export function Skills() {
  return (
    <section id="stacks" className="border-b border-white/5 py-20">
      <Container>
        <AnimateIn delay={0}>
          <SectionHeader
            label="Stacks"
            title="Stack atual e contexto de atuação"
            description="Tecnologias que utilizo no dia a dia para entregar produtos com qualidade."
          />
        </AnimateIn>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {skills.map((skill, i) => (
            <AnimateIn key={skill.name} delay={Math.min(i % 4 + 1, 4) as 0 | 1 | 2 | 3 | 4}>
              <SkillCard skill={skill} />
            </AnimateIn>
          ))}
        </div>
      </Container>
    </section>
  )
}
```

- [ ] **Step 2: Verify in browser**

Scroll to Stacks. Header animates first, then skill cards stagger in groups of 4.

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/Skills.tsx
git commit -m "feat: add AnimateIn to Skills section"
```

---

## Task 7: Apply `AnimateIn` to Education section

**Files:**
- Modify: `src/components/sections/Education.tsx`

- [ ] **Step 1: Add AnimateIn import and wrap elements**

Update import in `src/components/sections/Education.tsx`:

```typescript
import { Container, SectionHeader, Card, AnimateIn } from '../ui'
```

Replace the return of `Education()`:

```typescript
export function Education() {
  return (
    <section className="border-b border-white/5 py-20">
      <Container>
        <AnimateIn delay={0}>
          <SectionHeader
            label="Formação"
            title="Formação acadêmica e certificações"
          />
        </AnimateIn>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {education.map((item, i) => (
            <AnimateIn
              key={`${item.institution}-${item.degree}`}
              delay={Math.min(i + 1, 4) as 0 | 1 | 2 | 3 | 4}
            >
              <Card className="text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">
                  {item.period}
                </p>
                <h3 className="mt-2 text-base font-bold text-zinc-50">{item.degree}</h3>
                <p className="mt-1 text-sm text-zinc-400">{item.institution}</p>
              </Card>
            </AnimateIn>
          ))}
        </div>

        {/* Languages */}
        <div className="mt-12">
          <AnimateIn delay={1}>
            <h3 className="mb-4 text-lg font-semibold text-zinc-50">Idiomas</h3>
          </AnimateIn>
          <div className="flex flex-wrap gap-3">
            {languages.map((lang, i) => (
              <AnimateIn
                key={lang.name}
                delay={Math.min(i + 2, 4) as 0 | 1 | 2 | 3 | 4}
              >
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3">
                  <p className="text-sm font-semibold text-zinc-50">{lang.name}</p>
                  <p className="text-xs text-zinc-500">{lang.level}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/Education.tsx
git commit -m "feat: add AnimateIn to Education section"
```

---

## Task 8: Apply `AnimateIn` to Resume section

**Files:**
- Modify: `src/components/sections/Resume.tsx`

- [ ] **Step 1: Add AnimateIn import and wrap elements**

Update import in `src/components/sections/Resume.tsx`:

```typescript
import { Container, SectionHeader, AnimateIn } from '../ui'
```

Replace the return of `Resume()`:

```typescript
export function Resume() {
  return (
    <section id="resumo" className="border-b border-white/5 py-20">
      <Container>
        <AnimateIn delay={0}>
          <SectionHeader
            label="Resumo"
            title="Experiência construindo produtos digitais com impacto real"
            description="Atuação em empresas como SmartFit e RD Raia Drogasil, além de startups em fases iniciais. Visão ampla de ciclos de produto, desde MVP até escala."
          />
        </AnimateIn>

        <AnimateIn delay={1}>
          <div className="mt-6 max-w-3xl text-base leading-7 text-zinc-300 md:text-lg md:leading-8">
            <p>
              Atualmente utilizando LLMs (Cursor, Claude Code) e MCP no workflow de
              desenvolvimento, aumentando produtividade e qualidade de entrega de forma consistente.
              Experiência com Azure, Firebase, REST APIs, GIT Flow e metodologias ágeis.
              Familiaridade com UI Design e prototipação no Figma.
            </p>
          </div>
        </AnimateIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {competencies.map((item, i) => (
            <AnimateIn key={item.title} delay={Math.min(i + 1, 4) as 0 | 1 | 2 | 3 | 4}>
              <CompetencyCard title={item.title} description={item.description} />
            </AnimateIn>
          ))}
        </div>
      </Container>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/Resume.tsx
git commit -m "feat: add AnimateIn to Resume section"
```

---

## Task 9: Apply `AnimateIn` to Contact section

**Files:**
- Modify: `src/components/sections/Contact.tsx`

- [ ] **Step 1: Add AnimateIn import and wrap elements**

Update import in `src/components/sections/Contact.tsx`:

```typescript
import { Container, SectionHeader, Button, LinkedInIcon, GitHubIcon, EmailIcon, WhatsAppIcon, AnimateIn } from '../ui'
```

Replace the return of `Contact()`:

```typescript
export function Contact() {
  const whatsappUrl = `https://wa.me/55${personalInfo.phone}`
  const primaryCtaClassName =
    'h-[46px] w-fit max-w-full justify-start rounded-[0.9rem] px-3 py-0 text-[0.85rem] font-semibold tracking-[-0.02em]'
  const secondaryCtaClassName =
    'h-[46px] w-fit max-w-full justify-start rounded-[0.9rem] px-3 py-0 text-[0.85rem] font-semibold tracking-[-0.02em]'

  return (
    <section id="contato" className="py-20">
      <Container>
        <AnimateIn delay={0}>
          <SectionHeader
            label="Contato"
            title="Se você procura alguém para construir produto com qualidade, vamos conversar"
            description="Estou aberto a novas oportunidades onde possa contribuir com experiência em React, React Native e Node.js."
          />
        </AnimateIn>

        <AnimateIn delay={1}>
          <div className="flex flex-wrap gap-2">
            <Button href={personalInfo.linkedin} className={primaryCtaClassName}>
              <LinkedInIcon className="size-4" />
              LinkedIn
            </Button>
            <Button href={whatsappUrl} className={`${primaryCtaClassName} bg-[#25D366] text-zinc-950 hover:brightness-110`}>
              <WhatsAppIcon className="size-4" />
              WhatsApp
            </Button>
            {personalInfo.github && (
              <Button href={personalInfo.github} variant="secondary" className={secondaryCtaClassName}>
                <GitHubIcon className="size-4" />
                GitHub
              </Button>
            )}
            <Button href={`mailto:${personalInfo.email}`} variant="secondary" className={secondaryCtaClassName}>
              <EmailIcon className="size-4" />
              {personalInfo.email}
            </Button>
          </div>
        </AnimateIn>
      </Container>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/Contact.tsx
git commit -m "feat: add AnimateIn to Contact section"
```

---

## Task 10: Enhance micro-interactions

**Files:**
- Modify: `src/components/ui/Card.tsx`
- Modify: `src/components/ui/Badge.tsx`
- Modify: `src/components/ui/Button.tsx`
- Modify: `src/components/layout/Header.tsx`

- [ ] **Step 1: Update `Card.tsx`**

Replace the full content of `src/components/ui/Card.tsx`:

```typescript
interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 transition duration-200 ${
        hover
          ? 'hover:-translate-y-1 hover:scale-[1.01] hover:border-emerald-400/30 hover:shadow-[0_8px_32px_rgba(16,185,129,0.08)]'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
```

- [ ] **Step 2: Update `Badge.tsx`**

Replace the `<span>` className in `src/components/ui/Badge.tsx`:

```typescript
export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex min-w-0 max-w-full items-center overflow-hidden rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] transition duration-200 hover:brightness-110 ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
```

- [ ] **Step 3: Update `Button.tsx` primary variant**

In `src/components/ui/Button.tsx`, update the `variantStyles` primary value:

```typescript
const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'border-emerald-300/30 bg-emerald-400 text-zinc-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_18px_40px_rgba(16,185,129,0.16)] hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_8px_24px_rgba(16,185,129,0.2)]',
  secondary:
    'border-white/12 bg-white/[0.035] text-zinc-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07]',
}
```

- [ ] **Step 4: Update `Header.tsx` desktop nav links**

In `src/components/layout/Header.tsx`, update the desktop nav `<a>` className:

```typescript
className="rounded-full px-4 py-3 text-sm font-medium text-zinc-400 transition duration-200 hover:scale-[1.02] hover:bg-white/5 hover:text-zinc-100"
```

- [ ] **Step 5: Verify all micro-interactions in browser**

Open `http://localhost:5173` and check:
- Cards: subtle lift + scale + green glow on hover
- Badges: brightness increase on hover
- Primary buttons: green shadow on hover
- Nav links: slight scale on hover

- [ ] **Step 6: Commit**

```bash
git add src/components/ui/Card.tsx src/components/ui/Badge.tsx src/components/ui/Button.tsx src/components/layout/Header.tsx
git commit -m "feat: enhance micro-interactions on Card, Badge, Button, and Header nav"
```

---

## Task 11: Final build verification

**Files:** none

- [ ] **Step 1: Run full build**

```bash
npm run build
```

Expected: exits with code 0, no TypeScript errors, no lint errors.

- [ ] **Step 2: Preview production build**

```bash
npm run preview
```

Open `http://localhost:4173`, scroll through all sections, verify:
- All entrance animations play once on scroll
- No layout shift from `opacity-0` initial state
- `prefers-reduced-motion` disables animations (test via DevTools → Rendering → Emulate CSS media)
- All micro-interactions work in production build

- [ ] **Step 3: Commit if any fixes were needed**

If no fixes needed, this task is complete.
