import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, MapPin } from 'lucide-react'
import TerminalLog from '@/components/TerminalLog'

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const fade = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease: 'easeOut' as const },
  })

  return (
    <section id="top" className="mx-auto grid max-w-site items-center gap-12 px-5 pb-20 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:pt-24">
      <div>
        <motion.p {...fade(0)} className="field-label mb-4 flex items-center gap-2">
          <MapPin size={12} className="text-approved" aria-hidden />
          Kuala Lumpur, Malaysia
        </motion.p>

        <motion.h1
          {...fade(0.08)}
          className="font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl"
        >
          I build the systems
          <br />
          that move <span className="text-approved">money.</span>
        </motion.h1>

        <motion.p {...fade(0.16)} className="mt-6 max-w-md text-[15.5px] leading-7 text-muted">
          Backend engineer specializing in payment infrastructure — ISO 8583 host
          integrations, Spring Boot services, and the unglamorous work of keeping
          transactions flowing at 3&nbsp;a.m.
        </motion.p>

        <motion.div {...fade(0.24)} className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="btn-primary">
            View projects
            <ArrowDown size={14} aria-hidden />
          </a>
          <a href="#contact" className="btn-ghost">
            Get in touch
          </a>
        </motion.div>
      </div>

      <motion.div {...fade(0.2)}>
        <TerminalLog />
      </motion.div>
    </section>
  )
}
