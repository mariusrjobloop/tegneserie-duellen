import { useEffect, useRef, useState } from 'react'

const ROLL_INTERVAL_MS = 90
const ROLL_DURATION_MS = 1400

const pickRandom = (list) => list[Math.floor(Math.random() * list.length)]

export default function useThemeDraw(piles) {
  const [results, setResults] = useState({})
  const [rollingTeam, setRollingTeam] = useState(null)
  const timers = useRef({})

  useEffect(() => {
    const current = timers.current
    return () => {
      clearInterval(current.interval)
      clearTimeout(current.timeout)
    }
  }, [])

  function draw(teamId) {
    if (rollingTeam) return

    // Avoid giving both teams the same slip from a pile
    const otherResults = Object.entries(results)
      .filter(([id]) => id !== teamId)
      .map(([, result]) => result)

    const final = Object.fromEntries(
      piles.map((pile) => {
        const free = pile.options.filter((option) => !otherResults.some((result) => result[pile.id] === option))
        return [pile.id, pickRandom(free.length ? free : pile.options)]
      }),
    )
    const randomResult = () => Object.fromEntries(piles.map((pile) => [pile.id, pickRandom(pile.options)]))

    setRollingTeam(teamId)
    timers.current.interval = setInterval(() => {
      setResults((prev) => ({ ...prev, [teamId]: randomResult() }))
    }, ROLL_INTERVAL_MS)
    timers.current.timeout = setTimeout(() => {
      clearInterval(timers.current.interval)
      setResults((prev) => ({ ...prev, [teamId]: final }))
      setRollingTeam(null)
    }, ROLL_DURATION_MS)
  }

  return { results, rollingTeam, draw }
}
