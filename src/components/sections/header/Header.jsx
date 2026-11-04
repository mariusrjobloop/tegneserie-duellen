import { header } from '../../../lib/content/duel.js'
import { formatClock } from '../../../lib/time.js'

export default function Header({ now }) {
  return (
    <header className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
      <h1 className="-rotate-2 font-display text-6xl tracking-wide text-accent [-webkit-text-stroke:2px_var(--color-ink)] [text-shadow:4px_4px_0_var(--color-ink)] lg:text-7xl">
        {header.title}
      </h1>
      <p className="flex-1 text-lg leading-snug">
        {header.intro} <strong className="bg-accent-2 px-1 box-decoration-clone">{header.highlight}</strong>
      </p>
      <time className="self-start rounded-xl border-[3px] border-ink bg-ink px-5 py-1 font-display text-6xl tracking-wider text-paper lg:self-auto">
        {formatClock(now)}
      </time>
    </header>
  )
}
