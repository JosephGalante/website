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
              passionate about building robust, impactful products and
              delivering value through thoughtful engineering.
            </p>
            <p>
              Currently at Canopy Capital, I work on financial
              platforms—designing features, shipping code across the stack, and
              collaborating closely with product teams. I focus on code quality,
              reliability, and shipping tools users love.
            </p>
            <p>
              I enjoy tackling complex problems, from scaling backend APIs to
              optimizing end-to-end workflows, and I care deeply about
              maintainable code, observability, and system design.
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
