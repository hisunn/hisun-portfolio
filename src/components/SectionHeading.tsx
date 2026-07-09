import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  field: string
  title: string
  children?: ReactNode
}

export default function SectionHeading({ field, title, children }: Props) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.header
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="mb-10"
    >
      <p className="field-label mb-2">
        <span className="text-approved">{field}</span>
        <span className="mx-2 text-line">·</span>
        {title}
      </p>
      <div className="h-px w-full bg-line" />
      {children && <p className="mt-4 max-w-xl text-[15px] text-muted">{children}</p>}
    </motion.header>
  )
}
