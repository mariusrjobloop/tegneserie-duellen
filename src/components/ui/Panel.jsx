import { toneClasses } from './tones.js'

export default function Panel({ title, tone = 'accent-2', className = '', children }) {
  return (
    <section
      className={`relative flex min-h-0 flex-col rounded-xl border-[3px] border-ink bg-white px-5 pt-8 pb-5 shadow-[6px_6px_0_0_var(--color-ink)] ${className}`}
    >
      <h2
        className={`absolute -top-5 left-4 -rotate-2 border-[3px] border-ink px-3 py-0.5 font-display text-3xl tracking-wide ${toneClasses[tone]}`}
      >
        {title}
      </h2>
      {children}
    </section>
  )
}
