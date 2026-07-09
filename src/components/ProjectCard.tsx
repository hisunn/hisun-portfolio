import { ExternalLink, Github } from 'lucide-react'
import { Project } from '@/types/content'

const STATUS_STYLES: Record<Project['status'], string> = {
  LIVE: 'bg-approved-soft text-approved-dark',
  'WIP': 'bg-amber-100 text-amber-800',
  'CASE STUDY': 'bg-paper text-muted border border-line',
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col rounded-xl border border-line bg-white p-5 shadow-card transition hover:border-approved/40 sm:p-6">
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold tracking-tight">
          {project.name}
        </h3>
        <span
          className={`shrink-0 rounded px-2 py-0.5 font-mono text-[10.5px] font-medium tracking-wider ${STATUS_STYLES[project.status]}`}
        >
          {project.status}
        </span>
      </div>

      <p className="flex-1 text-[14px] leading-6 text-muted">{project.summary}</p>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded border border-line bg-paper px-2 py-0.5 font-mono text-[11.5px] text-ink/70"
          >
            {tech}
          </li>
        ))}
      </ul>

      {(project.demoUrl || project.repoUrl) && (
        <div className="mt-5 flex gap-4 border-t border-line pt-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[13px] text-approved-dark transition hover:text-ink"
            >
              <ExternalLink size={13} aria-hidden />
              Live demo
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[13px] text-muted transition hover:text-ink"
            >
              <Github size={13} aria-hidden />
              Source
            </a>
          )}
        </div>
      )}
    </article>
  )
}
