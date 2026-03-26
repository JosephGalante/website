import {Reveal} from './reveal'
import {SectionHeading} from './section-heading'
import {TiltImage} from './tilt-image'
import {techStack} from '@/lib/site-data'

export default function AboutMeSection() {
  return (
    <Reveal>
      <section className="content-section" aria-labelledby="about">
        <SectionHeading id="about" title="About Me" />
        <div className="about-layout">
          <div className="about-copy">
            <p>
              I&apos;m a full-stack software engineer based in Chicago,
              currently building financial software with a strong emphasis on
              backend systems, product ownership, and shipping features that
              hold up under real usage. I do my best work in environments where
              I can be thoughtful, collaborative, and close to both product
              decisions and implementation details.
            </p>
            <p>
              Most recently, I&apos;ve been working on portfolio and trading
              workflows at Canopy Capital, designing and delivering features
              across Django APIs and Next.js clients. My work has included
              authorization systems, asynchronous event pipelines, internal
              operations tooling, and performance improvements for high-traffic
              data-heavy workflows.
            </p>
            <p>
              Before that, I worked on software for autonomous vehicle safety at
              Edge Case Research, where I built across Golang, Python, and
              frontend systems in a domain where reliability and correctness
              mattered. That combination of finance, platform thinking, and
              real-world systems constraints is a big part of how I approach
              engineering today.
            </p>
            <p>
              I graduated from the{' '}
              <a
                href="https://www.pitt.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                University of Pittsburgh
              </a>{' '}
              with degrees in Computer Science and Finance, which maps closely
              to the kind of technical and business problems I like solving.
              Outside of work, I&apos;m usually rock climbing, getting outside,
              or spending time with friends and family.
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
  )
}
