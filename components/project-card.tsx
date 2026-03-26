'use client'

import type { MouseEvent } from 'react'
import { ArrowRightUpIcon, FolderIcon, GithubIcon } from '@/components/icons'
import type { Project } from '@/lib/site-data'

type ProjectCardProps = {
  project: Project
  delay?: number
}

export function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  const openRepo = () => {
    window.open(project.githubLink, '_blank', 'noopener,noreferrer')
  }

  const stop = (event: MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation()
  }

  return (
    <article
      className="project-card reveal is-visible"
      style={{ transitionDelay: `${delay}ms` }}
      onClick={openRepo}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          openRepo()
        }
      }}
      role="link"
      tabIndex={0}
    >
      <div className="project-card-top">
        <FolderIcon className="project-folder" />
        <div className="project-links">
          <a href={project.githubLink} target="_blank" rel="noreferrer" onClick={stop}>
            <GithubIcon className="project-link-icon" />
          </a>
          <a href={project.liveLink} target="_blank" rel="noreferrer" onClick={stop}>
            <ArrowRightUpIcon className="project-link-icon" />
          </a>
        </div>
      </div>

      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="project-skills">
        {project.skills.map((skill) => (
          <span key={skill.label} className="skill-pill">
            <span className="skill-dot" style={{ backgroundColor: skill.color }} />
            {skill.label}
          </span>
        ))}
      </div>
    </article>
  )
}
