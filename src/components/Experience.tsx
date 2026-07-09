import { motion, useReducedMotion } from 'framer-motion'
import SectionHeading from '@/components/SectionHeading'
import { experience } from '@/lib/data'

export default function Experience() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="experience" className="mx-auto max-w-site px-5 py-16">
      <SectionHeading field="F39" title="Experience" />

      <ol className="relative space-y-10 border-l border-line pl-6">
        {experience.map((entry, i) => (
          <motion.li
            key={entry.company}
            initial={reduceMotion ? false : { opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="relative"
          >
            <span
              aria-hidden
              className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-paper bg-approved"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-display text-lg font-semibold tracking-tight">
                {entry.role}
                <span className="text-muted"> · {entry.company}</span>
              </h3>
              <span className="font-mono text-[12px] text-muted">{entry.period}</span>
            </div>
            <p className="mt-0.5 font-mono text-[12px] text-muted">{entry.location}</p>
            <ul className="mt-3 space-y-2">
              {entry.points.map((point) => (
                <li key={point} className="flex gap-2.5 text-[14px] leading-6 text-ink/85">
                  <span aria-hidden className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-approved" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>
    </section>
  )
}
