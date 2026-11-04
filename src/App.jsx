import Header from './components/sections/header/Header.jsx'
import Prizes from './components/sections/prizes/Prizes.jsx'
import Program from './components/sections/program/Program.jsx'
import Roles from './components/sections/roles/Roles.jsx'
import Themes from './components/sections/themes/Themes.jsx'
import useNow from './hooks/useNow.js'

export default function App() {
  const now = useNow()

  return (
    <div className="flex min-h-dvh flex-col gap-8 p-6 lg:h-dvh lg:overflow-hidden">
      <Header now={now} />
      <main className="grid min-h-0 flex-1 gap-8 lg:grid-cols-12 lg:grid-rows-[auto_1fr]">
        <Program now={now} className="lg:col-span-4 lg:row-span-2" />
        <Themes className="lg:col-span-8" />
        <div className="grid min-h-0 gap-8 lg:col-span-8 lg:grid-cols-2">
          <Roles />
          <Prizes />
        </div>
      </main>
    </div>
  )
}
