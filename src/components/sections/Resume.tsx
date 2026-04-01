import { Container, SectionHeader } from '../ui'
import { competencies } from '../../data/portfolio'

function CompetencyCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-200 hover:border-emerald-400/30 hover:bg-white/[0.06]">
      <h3 className="text-lg font-semibold text-zinc-50 transition duration-200 group-hover:text-emerald-300">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-zinc-400">{description}</p>
    </div>
  )
}

export function Resume() {
  return (
    <section id="resumo" className="border-b border-white/5 py-20">
      <Container>
        <SectionHeader
          label="Resumo"
          title="Experiência construindo produtos digitais com impacto real"
          description="Atuação em empresas como SmartFit e RD Raia Drogasil, além de startups em fases iniciais. Visão ampla de ciclos de produto, desde MVP até escala."
        />

        <div className="mt-6 max-w-3xl text-base leading-7 text-zinc-300 md:text-lg md:leading-8">
          <p>
            Atualmente utilizando LLMs (Cursor, Claude Code) e MCP no workflow de
            desenvolvimento, aumentando produtividade e qualidade de entrega de forma consistente.
            Experiência com Azure, Firebase, REST APIs, GIT Flow e metodologias ágeis.
            Familiaridade com UI Design e prototipação no Figma.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {competencies.map((item) => (
            <CompetencyCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </Container>
    </section>
  )
}
