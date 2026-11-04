import Panel from '../../ui/Panel.jsx'
import { program } from '../../../lib/content/duel.js'
import { minutesOfDay, toMinutes } from '../../../lib/time.js'

function getStatus(item, currentMinutes) {
  if (currentMinutes >= toMinutes(item.end)) return 'done'
  if (currentMinutes >= toMinutes(item.start)) return 'active'
  return 'upcoming'
}

const statusClasses = {
  done: 'opacity-45',
  active: 'bg-accent-2 border-ink shadow-[4px_4px_0_0_var(--color-ink)] -rotate-1 scale-[1.02]',
  upcoming: '',
}

export default function Program({ now, className = '' }) {
  const currentMinutes = minutesOfDay(now)

  return (
    <Panel title={program.title} tone="accent" className={className}>
      <ol className="flex flex-1 flex-col gap-2">
        {program.items.map((item) => {
          const status = getStatus(item, currentMinutes)
          return (
            <li
              key={item.start}
              className={`relative flex flex-1 flex-col justify-center rounded-lg border-2 border-transparent px-3 py-2 transition ${statusClasses[status]}`}
            >
              {status === 'active' && (
                <span className="absolute -top-3 right-3 rotate-3 rounded border-2 border-ink bg-accent px-2 font-display text-lg tracking-wide">
                  {program.nowLabel}
                </span>
              )}
              <div className="flex items-baseline gap-3">
                <span className="font-display text-2xl tracking-wide tabular-nums">
                  {item.start}–{item.end}
                </span>
                <span className="text-xl font-bold">{item.activity}</span>
              </div>
              <p className="text-lg leading-snug">{item.description}</p>
            </li>
          )
        })}
      </ol>
    </Panel>
  )
}
