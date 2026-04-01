import { Container, SectionHeader, Card } from '../ui'
import { education, languages } from '../../data/portfolio'

export function Education() {
  return (
    <section className="border-b border-white/5 py-20">
      <Container>
        <SectionHeader
          label="Formação"
          title="Formação acadêmica e certificações"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {education.map((item) => (
            <Card key={`${item.institution}-${item.degree}`} className="text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">
                {item.period}
              </p>
              <h3 className="mt-2 text-base font-bold text-zinc-50">{item.degree}</h3>
              <p className="mt-1 text-sm text-zinc-400">{item.institution}</p>
            </Card>
          ))}
        </div>

        {/* Languages */}
        <div className="mt-12">
          <h3 className="mb-4 text-lg font-semibold text-zinc-50">Idiomas</h3>
          <div className="flex flex-wrap gap-3">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3"
              >
                <p className="text-sm font-semibold text-zinc-50">{lang.name}</p>
                <p className="text-xs text-zinc-500">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
