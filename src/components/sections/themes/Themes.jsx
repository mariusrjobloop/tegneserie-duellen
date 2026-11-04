import Button from '../../ui/Button.jsx'
import Panel from '../../ui/Panel.jsx'
import { toneClasses } from '../../ui/tones.js'
import useThemeDraw from '../../../hooks/useThemeDraw.js'
import { themes } from '../../../lib/content/duel.js'

export default function Themes({ className = '' }) {
  const { results, rollingTeam, draw } = useThemeDraw(themes.piles)

  const ownerOf = (pileId, option) =>
    themes.teams.find((team) => team.id !== rollingTeam && results[team.id]?.[pileId] === option)

  return (
    <Panel title={themes.title} tone="sky" className={className}>
      <p className="mb-3 text-lg">{themes.intro}</p>

      <div className="grid flex-1 grid-cols-3 gap-4">
        {themes.piles.map((pile) => (
          <div key={pile.id}>
            <h3 className="mb-2 font-display text-2xl tracking-wide">{pile.name}</h3>
            <ul className="space-y-2">
              {pile.options.map((option, index) => {
                const owner = ownerOf(pile.id, option)
                return (
                  <li
                    key={option}
                    className={`flex items-center justify-between gap-2 rounded border-2 border-ink px-2 py-1 leading-tight shadow-[2px_2px_0_0_var(--color-ink)] transition ${index % 2 ? 'rotate-1' : '-rotate-1'} ${owner ? toneClasses[owner.tone] : 'bg-paper'}`}
                  >
                    <span>{option}</span>
                    {owner && <span className="shrink-0 font-display text-sm tracking-wide">{owner.name}</span>}
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        {themes.teams.map((team) => {
          const result = results[team.id]
          const isRolling = rollingTeam === team.id
          return (
            <div key={team.id} className={`rounded-lg border-2 border-ink p-3 ${toneClasses[team.tone]}`}>
              <div className="mb-2 flex items-center justify-between gap-2">
                <h3 className="font-display text-3xl tracking-wide">{team.name}</h3>
                <Button tone="paper" size="sm" disabled={Boolean(rollingTeam)} onClick={() => draw(team.id)}>
                  {result ? themes.redrawLabel : themes.drawLabel}
                </Button>
              </div>
              <dl className="grid grid-cols-[auto_1fr] gap-x-3 leading-snug">
                {themes.piles.map((pile) => (
                  <div key={pile.id} className="contents">
                    <dt className="font-bold">{pile.name}:</dt>
                    <dd className={isRolling ? 'opacity-70' : ''}>{result?.[pile.id] ?? themes.pendingLabel}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )
        })}
      </div>
    </Panel>
  )
}
