import { useEffect, useState } from 'react'

// Add ?tid=13:30 to the URL to simulate a time of day (handy for testing the program highlight)
function getOffsetMs() {
  const tid = new URLSearchParams(window.location.search).get('tid')
  if (!tid || !/^\d{1,2}:\d{2}$/.test(tid)) return 0

  const [hours, minutes] = tid.split(':').map(Number)
  const target = new Date()
  target.setHours(hours, minutes, 0, 0)
  return target.getTime() - Date.now()
}

const offsetMs = getOffsetMs()

export default function useNow(intervalMs = 1000) {
  const [now, setNow] = useState(() => new Date(Date.now() + offsetMs))

  useEffect(() => {
    const id = setInterval(() => setNow(new Date(Date.now() + offsetMs)), intervalMs)
    return () => clearInterval(id)
  }, [intervalMs])

  return now
}
