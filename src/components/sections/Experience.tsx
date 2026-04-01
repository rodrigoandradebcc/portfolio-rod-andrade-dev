import { useState } from 'react'
import { Container, SectionHeader, Badge } from '../ui'
import { experiences } from '../../data/portfolio'
import type { Experience as ExperienceType } from '../../types/portfolio'

function getCompanyMonogram(experience: ExperienceType) {
  if (experience.logoFallback) return experience.logoFallback

  return experience.company
    .split(/[\s./-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? '')
    .join('')
}

function ExperienceLogo({ experience }: { experience: ExperienceType }) {
  const [hasError, setHasError] = useState(!experience.logoUrl)
  const monogram = getCompanyMonogram(experience)
  const isWide = experience.logoVariant === 'wide'
  const isExtraWide = experience.logoVariant === 'xwide'

  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_12px_30px_rgba(0,0,0,0.16)] ${
        isExtraWide ? 'h-20 w-44 px-5' : isWide ? 'h-16 w-32 px-3' : 'size-16'
      }`}
    >
      {!hasError && experience.logoUrl ? (
        <img
          src={experience.logoUrl}
          alt={`Logo da ${experience.company}`}
          className={
            isExtraWide
              ? 'h-10 w-full object-contain object-center'
              : isWide
                ? 'h-8 w-full object-contain'
                : 'size-10 object-contain'
          }
          loading="lazy"
          onError={() => setHasError(true)}
        />
      ) : (
        <span className="text-sm font-black tracking-[0.18em] text-zinc-200">{monogram}</span>
      )}
    </div>
  )
}

function ExperienceCard({ experience, index }: { experience: ExperienceType; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const number = String(index + 1).padStart(2, '0')
  const visibleStack = experience.stack.slice(0, 6)
  const remainingCount = experience.stack.length - visibleStack.length

  return (
    <article className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-6 transition duration-200 hover:border-emerald-400/20 md:p-8">
      <div className="grid gap-6 lg:grid-cols-[320px_1fr] lg:gap-8">
        {/* Left meta */}
        <div className="space-y-2">
          <div className="flex items-center gap-4">
            <ExperienceLogo experience={experience} />
            <div className="min-w-0">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-400">
                {number}
              </span>
              <h3 className="mt-1 text-2xl font-bold text-zinc-50">{experience.company}</h3>
            </div>
          </div>
          <p className="text-sm font-medium text-zinc-300">{experience.role}</p>
          <p className="text-xs text-zinc-500">
            {experience.period} · {experience.duration}
          </p>
          <p className="text-xs text-zinc-500">{experience.location}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {experience.tag ? <Badge variant="accent">{experience.tag}</Badge> : null}
            <Badge>{experience.stack.length} stacks</Badge>
          </div>
        </div>

        {/* Right content */}
        <div className="space-y-5">
          <p className="text-base leading-7 text-zinc-300">{experience.description}</p>

          <div className="grid gap-3 sm:grid-cols-3">
            {experience.highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-xl border border-white/5 bg-white/[0.03] p-4"
              >
                <p className="text-sm leading-6 text-zinc-400">{highlight}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {visibleStack.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
            {remainingCount > 0 && (
              <Badge variant="accent">+{remainingCount} stacks</Badge>
            )}
          </div>

          {/* Expandable details */}
          <button
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            className={`w-full rounded-xl border px-4 py-3 text-left text-sm font-medium transition duration-200 ${
              expanded
                ? 'border-emerald-400/20 bg-emerald-400/[0.04] text-emerald-300'
                : 'border-white/10 bg-white/[0.03] text-zinc-400 hover:bg-white/[0.06]'
            }`}
          >
            {expanded ? 'Menos detalhes' : 'Mais detalhes'}
          </button>

          {expanded && (
            <div className="space-y-2 text-sm leading-6 text-zinc-400">
              <p><strong className="text-zinc-300">Stack completa:</strong> {experience.stack.join(', ')}</p>
              <p><strong className="text-zinc-300">Duração:</strong> {experience.duration}</p>
              <p><strong className="text-zinc-300">Local:</strong> {experience.location}</p>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

export function Experience() {
  return (
    <section id="experiencia" className="border-b border-white/5 py-20">
      <Container>
        <SectionHeader
          label="Experiência"
          title="Trajetória focada em produto, escala e qualidade de engenharia"
        />

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} experience={exp} index={i} />
          ))}
        </div>
      </Container>
    </section>
  )
}
