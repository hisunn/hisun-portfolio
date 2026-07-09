import { motion, useReducedMotion } from 'framer-motion'
import SectionHeading from '@/components/SectionHeading'
import { skills } from '@/lib/data'

export default function About() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="profile" className="mx-auto max-w-site px-5 py-16">
      <SectionHeading field="F02" title="Profile">
        Two years deep in fintech, working where card networks meet backend code.
      </SectionHeading>

      <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-4 text-[15px] leading-7 text-ink/90">
          <p>
            I work on the acquiring side of payments at{' '}
            <span className="font-medium">Soft Space</span>, building and maintaining
            the host integrations and gateway services that let merchant terminals
            talk to card networks. Day to day that means ISO 8583 message handling,
            Spring Boot APIs, and production debugging where every failed
            transaction has a story in the logs.
          </p>
          <p>
            Before payments, I shipped fullstack work across Go, Laravel, and
            AWS — which taught me that good backend engineering looks the same in
            every language: clear contracts, honest error handling, and systems
            that fail loudly instead of silently.
          </p>
          <p>
            Currently deepening modern Java (17/21), PostgreSQL internals, and
            event-driven architecture — building toward senior-level payments
            engineering.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {skills.map((group, i) => (
            <motion.div
              key={group.field}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-lg border border-line bg-white p-4 shadow-card"
            >
              <p className="field-label mb-3">
                <span className="text-approved">{group.field}</span>
                <span className="mx-2 text-line">·</span>
                {group.label}
              </p>
              <ul className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded border border-line bg-paper px-2 py-1 font-mono text-[12px] text-ink/80"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
