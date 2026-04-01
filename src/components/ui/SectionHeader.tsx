interface SectionHeaderProps {
  label: string
  title: string
  description?: string
}

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.24em] text-emerald-400">
        {label}
      </span>
      <h2 className="text-3xl font-bold tracking-tight text-zinc-50 md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg md:leading-8">
          {description}
        </p>
      )}
    </div>
  )
}
