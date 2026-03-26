import {Reveal} from './reveal'
import {SectionHeading} from './section-heading'
import {ExperienceTabs} from './experience-tabs'
import {jobs} from '@/lib/site-data'

export default function JobsSection() {
  return (
    <Reveal>
      <section className="content-section" aria-labelledby="experience">
        <SectionHeading id="experience" title="Experiences" />
        <ExperienceTabs jobs={jobs} />
      </section>
    </Reveal>
  )
}
