import { motion, useReducedMotion } from 'framer-motion'
import SectionHeading from '@/components/SectionHeading'
import ProjectCard from '@/components/ProjectCard'
import { useProjects } from '@/hooks/useProjects'

export default function Projects() {
  const projects = useProjects()
  const reduceMotion = useReducedMotion()

  return (
    <section id="projects" className="mx-auto max-w-site px-5 py-16">
      <SectionHeading field="F04" title="Projects">
        Things I've shipped and things in flight — each one live or documented,
        with source where it can be public.
      </SectionHeading>

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: (i % 2) * 0.08 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
