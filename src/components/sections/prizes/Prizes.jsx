import Panel from '../../ui/Panel.jsx'
import { prizes } from '../../../lib/content/duel.js'

export default function Prizes({ className = '' }) {
  return (
    <Panel title={prizes.title} tone="accent" className={className}>
      <p className="mb-2 text-lg">{prizes.intro}</p>
      <ul className="flex flex-1 flex-wrap content-start gap-3">
        {prizes.items.map((prize, index) => (
          <li
            key={prize}
            className={`rounded-full border-2 border-ink bg-accent-2 px-3 py-1 text-lg font-bold shadow-[2px_2px_0_0_var(--color-ink)] ${index % 2 ? 'rotate-1' : '-rotate-1'}`}
          >
            ★ {prize}
          </li>
        ))}
      </ul>
      <p className="mt-3 font-display text-2xl tracking-wide">{prizes.votingNote}</p>
    </Panel>
  )
}
