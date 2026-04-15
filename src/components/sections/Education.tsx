import { Container, SectionHeader, Card, AnimateIn } from '../ui'
import { education, languages } from '../../data/portfolio'

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
