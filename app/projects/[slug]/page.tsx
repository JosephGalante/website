import type {Metadata} from 'next'
import Link from 'next/link'
import {notFound} from 'next/navigation'
import {GithubIcon} from '@/components/icons'
import {getProjectCaseStudy, projectCaseStudies} from '@/lib/site-data'

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return projectCaseStudies.map((project) => ({slug: project.slug}))
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const {slug} = await params
  const project = getProjectCaseStudy(slug)

  if (!project) {
    return {
      title: 'Project Not Found | Joe Galante',
    }
  }

  return {
    title: `${project.title} | Joe Galante`,
    description: project.summary,
  }
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const {slug} = await params
  const project = getProjectCaseStudy(slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="project-detail-page">
      <div className="project-detail-shell">
        <div className="project-detail-topbar">
          <Link href="/#projects" className="project-detail-back">
            {'< '} Back to portfolio
          </Link>
          <p className="project-detail-kicker">{project.eyebrow}</p>
        </div>

        <section className="project-hero">
          <div className="project-hero-copy">
            <p className="project-detail-eyebrow">{project.eyebrow}</p>
            <h1>{project.title}</h1>
            <p className="project-detail-summary">{project.summary}</p>
            <div className="project-detail-actions">
              {project.liveLink ? (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-button"
                >
                  Live demo
                </a>
              ) : null}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="site-button project-detail-secondary"
                aria-label={`${project.title} source code on GitHub`}
              >
                <GithubIcon className="project-detail-action-icon" />
                Code
              </a>
            </div>
            <div className="project-stack-row">
              {project.stack.map((item) => (
                <span key={item.label} className="skill-pill">
                  <span
                    className="skill-dot"
                    style={{backgroundColor: item.color}}
                  />
                  {item.label}
                </span>
              ))}
            </div>
          </div>

          <div className="project-metric-grid">
            {project.highlights.map((item) => (
              <article key={item.label} className="project-metric-card">
                <p>{item.label}</p>
                <strong>{item.value}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="project-section-grid">
          {project.sections.map((section) => (
            <article key={section.title} className="project-detail-section">
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets ? (
                <ul className="project-bullet-list">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </section>
      </div>
    </main>
  )
}
