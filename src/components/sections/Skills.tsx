import { Container, SectionHeader, AnimateIn } from '../ui'
import { skills } from '../../data/portfolio'
import type { Skill } from '../../types/portfolio'

const colorMap: Record<string, { gradient: string; text: string; border: string }> = {
  cyan:    { gradient: 'from-cyan-400/20 via-cyan-400/5', text: 'group-hover:text-cyan-300', border: 'group-hover:border-cyan-400/30' },
  blue:    { gradient: 'from-blue-400/20 via-blue-400/5', text: 'group-hover:text-blue-300', border: 'group-hover:border-blue-400/30' },
  zinc:    { gradient: 'from-zinc-400/20 via-zinc-400/5', text: 'group-hover:text-zinc-200', border: 'group-hover:border-zinc-400/30' },
  lime:    { gradient: 'from-lime-400/20 via-lime-400/5', text: 'group-hover:text-lime-300', border: 'group-hover:border-lime-400/30' },
  rose:    { gradient: 'from-rose-400/20 via-rose-400/5', text: 'group-hover:text-rose-300', border: 'group-hover:border-rose-400/30' },
  violet:  { gradient: 'from-violet-400/20 via-violet-400/5', text: 'group-hover:text-violet-300', border: 'group-hover:border-violet-400/30' },
  yellow:  { gradient: 'from-yellow-400/20 via-yellow-400/5', text: 'group-hover:text-yellow-300', border: 'group-hover:border-yellow-400/30' },
  pink:    { gradient: 'from-pink-400/20 via-pink-400/5', text: 'group-hover:text-pink-300', border: 'group-hover:border-pink-400/30' },
  orange:  { gradient: 'from-orange-400/20 via-orange-400/5', text: 'group-hover:text-orange-300', border: 'group-hover:border-orange-400/30' },
  emerald: { gradient: 'from-emerald-400/20 via-emerald-400/5', text: 'group-hover:text-emerald-300', border: 'group-hover:border-emerald-400/30' },
  sky:     { gradient: 'from-sky-400/20 via-sky-400/5', text: 'group-hover:text-sky-300', border: 'group-hover:border-sky-400/30' },
}

function SkillCard({ skill }: { skill: Skill }) {
  const colors = colorMap[skill.color] ?? colorMap.emerald

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-200 hover:-translate-y-1 ${colors.border}`}
    >
      {/* Gradient overlay */}
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${colors.gradient} to-transparent opacity-0 transition duration-200 group-hover:opacity-100`}
      />

      <div className="relative">
        <div className="mb-3 flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2">
          <img src={skill.icon} alt={skill.name} className="size-6" loading="lazy" />
        </div>
        <h3 className={`text-base font-semibold text-zinc-50 transition duration-200 ${colors.text}`}>
          {skill.name}
        </h3>
        <p className="mt-1 text-sm text-zinc-500">{skill.description}</p>
      </div>
    </div>
  )
}

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
