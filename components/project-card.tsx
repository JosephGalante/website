'use client'

import type {MouseEvent} from 'react'
import {useRouter} from 'next/navigation'
import {ArrowRightUpIcon, FolderIcon, GithubIcon} from '@/components/icons'
import type {Project} from '@/lib/site-data'

type ProjectCardProps = {
  project: Project
  delay?: number
}

export function ProjectCard({project, delay = 0}: ProjectCardProps) {
  const router = useRouter()
  const primaryLink =
    project.detailPath ?? project.liveLink ?? project.githubLink
  const opensInternally = Boolean(project.detailPath)

  const openPrimaryLink = () => {
    if (opensInternally && project.detailPath) {
      router.push(project.detailPath)
      return
    }

    window.open(primaryLink, '_blank', 'noopener,noreferrer')
  }

  const stop = (event: MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation()
  }

  return (
    <article
      className="project-card reveal is-visible"
      style={{transitionDelay: `${delay}ms`}}
      onClick={openPrimaryLink}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          openPrimaryLink()
        }
      }}
      role="link"
      tabIndex={0}
      aria-label={`${project.title} project`}
    >
      <div className="project-card-top">
        <FolderIcon className="project-folder" />
        <div className="project-links">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={stop}
            aria-label={`${project.title} source code`}
          >
            <GithubIcon className="project-link-icon" />
          </a>
          {project.liveLink ? (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={stop}
              aria-label={`${project.title} live site`}
            >
              <ArrowRightUpIcon className="project-link-icon" />
            </a>
          ) : null}
        </div>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="project-skills">
        {project.skills.map((skill) => (
          <span key={skill.label} className="skill-pill">
            <span
              className="skill-dot"
              style={{backgroundColor: skill.color}}
            />
            {skill.label}
          </span>
        ))}
      </div>
    </article>
  )
}
