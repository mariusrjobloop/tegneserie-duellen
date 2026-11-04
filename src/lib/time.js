export function toMinutes(hhmm) {
  const [hours, minutes] = hhmm.split(':').map(Number)
  return hours * 60 + minutes
}

export function minutesOfDay(date) {
  return date.getHours() * 60 + date.getMinutes()
}

export function formatClock(date) {
  const pad = (value) => String(value).padStart(2, '0')
  return `${pad(date.getHours())}:${pad(date.getMinutes())}`
}
