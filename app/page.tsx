import { ArrowDownIcon } from '@/components/icons'
import { ProjectCard } from '@/components/project-card'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { ExperienceTabs } from '@/components/experience-tabs'
import { SiteButton } from '@/components/site-button'
import { SiteHeader } from '@/components/site-header'
import { SocialSidebar } from '@/components/social-sidebar'
import { TiltImage } from '@/components/tilt-image'
import { jobs, navLinks, projects, techStack } from '@/lib/site-data'

export default function HomePage() {
  return (
    <main id="top">
      <SiteHeader links={navLinks} />
      <SocialSidebar />

      <div className="page-shell">
        <Reveal className="hero-shell">
          <section className="hero-section">
            <p className="hero-kicker">Hey, pleasure to meet you. I&apos;m</p>
            <h1>Joe Galante.</h1>
            <p className="hero-copy">
              I&apos;m a full-stack software engineer building scalable
              financial platforms, with a backend-leaning focus on architecture,
              reliability, and performance.
            </p>
            <div className="hero-actions">
              <SiteButton href="#experience">Check out my work!</SiteButton>
            </div>
            <a
              href="#about"
              className="scroll-cue"
              aria-label="Scroll to about section"
            >
              <ArrowDownIcon className="scroll-cue-icon" />
            </a>
          </section>
        </Reveal>

        <Reveal>
          <section className="content-section" aria-labelledby="about">
            <SectionHeading id="about" title="About Me" />
            <div className="about-layout">
              <div className="about-copy">
                <p>
                  I&apos;m a full-stack software engineer based in Chicago,
                  currently building financial software with a strong emphasis
                  on backend systems, product ownership, and shipping features
                  that hold up under real usage.
                </p>
                <p>
                  Most recently, I&apos;ve been working on portfolio and trading
                  workflows at Canopy Capital, designing and delivering features
                  across Django APIs and Next.js clients. My work has included
                  authorization systems, asynchronous event pipelines, internal
                  operations tooling, and performance improvements for
                  high-traffic data-heavy workflows.
                </p>
                <p>
                  Before that, I worked on software for autonomous vehicle
                  safety at Edge Case Research, where I built across Golang,
                  Python, and frontend systems in a domain where reliability and
                  correctness mattered. That combination of finance, platform
                  thinking, and real-world systems constraints is a big part of
                  how I approach engineering today.
                </p>
                <p>
                  I graduated from the{' '}
                  <a
                    href="https://www.pitt.edu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    University of Pittsburgh
                  </a>
                  with degrees in Computer Science and Finance, which maps
                  closely to the kind of technical and business problems I like
                  solving. Outside of work, I&apos;m usually rock climbing or
                  finding a reason to get outside.
                </p>
                <p>Relevant skills and languages I use regularly:</p>
                <div className="tech-grid">
                  {techStack.map((item) => (
                    <div key={item} className="tech-item">
                      <span className="tech-marker" aria-hidden>
                        {'>'}
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <TiltImage />
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="content-section" aria-labelledby="experience">
            <SectionHeading id="experience" title="Experiences" />
            <ExperienceTabs jobs={jobs} />
          </section>
        </Reveal>

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

        <Reveal>
          <section
            className="contact-section"
            id="contact"
            aria-labelledby="contact-heading"
          >
            <div className="contact-title-row">
              <span aria-hidden className="section-heading-line" />
              <h2 id="contact-heading">What now?</h2>
              <span aria-hidden className="section-heading-line" />
            </div>
            <p>
              Hey there. Thanks for checking out my site. If you&apos;re
              interested in working together, or just want to say hi, feel free
              to reach out to me at the link below.
            </p>
            <SiteButton href="mailto:jegalante@gmail.com?Subject=Hey%20Joe!">
              Say Hi
            </SiteButton>
          </section>
        </Reveal>
      </div>
    </main>
  )
}
