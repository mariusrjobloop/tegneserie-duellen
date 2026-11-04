import Panel from '../../ui/Panel.jsx'
import { roles } from '../../../lib/content/duel.js'

export default function Roles({ className = '' }) {
  return (
    <Panel title={roles.title} tone="accent-2" className={className}>
      <p className="mb-2 text-lg">{roles.intro}</p>
      <ul className="flex-1 space-y-2">
        {roles.items.map((role) => (
          <li key={role.name} className="text-lg leading-snug">
            <span className="font-bold">{role.name}:</span> {role.description}
          </li>
        ))}
      </ul>
      <p className="mt-3 rounded-lg border-2 border-dashed border-ink px-3 py-1.5 italic">{roles.tip}</p>
    </Panel>
  )
}
