import {Reveal} from './reveal'
import {SectionHeading} from './section-heading'
import {projects} from '@/lib/site-data'
import {ProjectCard} from './project-card'

export default function ProjectsSection() {
  return (
    <Reveal>
      <section className="content-section" aria-labelledby="projects">
        <SectionHeading id="projects" title="Some stuff I've built" />
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={index * 70}
            />
          ))}
        </div>
      </section>
    </Reveal>
  )
}
