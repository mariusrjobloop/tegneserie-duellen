import { toneClasses } from './tones.js'

const sizeClasses = {
  sm: 'px-3 py-1 text-lg shadow-[3px_3px_0_0_var(--color-ink)]',
  md: 'px-6 py-3 text-xl shadow-[4px_4px_0_0_var(--color-ink)]',
}

export default function Button({ children, tone = 'accent', size = 'md', className = '', ...props }) {
  return (
    <button
      type="button"
      className={`cursor-pointer rounded-lg border-2 border-ink font-display tracking-wide transition hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none disabled:cursor-wait disabled:opacity-60 ${toneClasses[tone]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
