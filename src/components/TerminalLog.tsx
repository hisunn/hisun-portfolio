import { useEffect, useMemo, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

interface Line {
  text: string
  tone?: 'dim' | 'green' | 'default'
}

const LINES: Line[] = [
  { text: '> POS TERMINAL v2.1 — ihsandzahri.com', tone: 'dim' },
  { text: '> BUILDING ISO 8583 MESSAGE…', tone: 'dim' },
  { text: '  MTI   0100  AUTH REQUEST' },
  { text: '  DE02  IHSAN DZAHRI' },
  { text: '  DE18  BACKEND ENGINEER · FINTECH' },
  { text: '  DE43  KAJANG, SELANGOR, MY' },
  { text: '  DE48  JAVA · SPRING BOOT · GO · SQL' },
  { text: '> ROUTING TO HOST… CONNECTED', tone: 'dim' },
  { text: '> RESPONSE  DE39 = 00' },
  { text: '> STATUS: APPROVED ✔', tone: 'green' },
]

const CHAR_MS = 14
const LINE_PAUSE_MS = 160

export default function TerminalLog() {
  const reduceMotion = useReducedMotion()
  const [progress, setProgress] = useState(
    reduceMotion ? { line: LINES.length, char: 0 } : { line: 0, char: 0 }
  )

  useEffect(() => {
    if (reduceMotion) return
    if (progress.line >= LINES.length) return
    const current = LINES[progress.line]
    const timer = setTimeout(
      () => {
        if (progress.char < current.text.length) {
          setProgress({ line: progress.line, char: progress.char + 1 })
        } else {
          setProgress({ line: progress.line + 1, char: 0 })
        }
      },
      progress.char === 0 ? LINE_PAUSE_MS : CHAR_MS
    )
    return () => clearTimeout(timer)
  }, [progress, reduceMotion])

  const done = progress.line >= LINES.length

  const rendered = useMemo(() => {
    return LINES.map((line, i) => {
      let visible = ''
      if (i < progress.line) visible = line.text
      else if (i === progress.line) visible = line.text.slice(0, progress.char)
      return { ...line, visible, active: i === progress.line }
    })
  }, [progress])

  return (
    <div
      aria-label="Stylized payment terminal log introducing Ihsan Dzahri"
      className="w-full rounded-xl border border-ink/20 bg-terminal p-5 shadow-card sm:p-6"
    >
      <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
        <span className="font-mono text-[11px] tracking-[0.2em] text-terminal-text/70">
          AUTHORIZATION LOG
        </span>
        <span
          className={`font-mono text-[11px] tracking-widest ${
            done ? 'text-terminal-green' : 'text-terminal-text/50'
          }`}
        >
          {done ? '● ONLINE' : '○ PROCESSING'}
        </span>
      </div>
      <pre className="min-h-[230px] whitespace-pre-wrap font-mono text-[12.5px] leading-6 sm:text-[13px]">
        {rendered.map((line, i) => (
          <div
            key={i}
            className={
              line.tone === 'green'
                ? 'font-semibold text-terminal-green'
                : line.tone === 'dim'
                  ? 'text-terminal-text/60'
                  : 'text-terminal-text'
            }
          >
            {line.visible}
            {line.active && !done && (
              <span className="animate-pulse text-terminal-green">▌</span>
            )}
          </div>
        ))}
      </pre>
    </div>
  )
}
