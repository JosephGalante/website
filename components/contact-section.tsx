import {Reveal} from './reveal'
import {SiteButton} from './site-button'

export default function ContactSection() {
  return (
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
          Hey there. Thanks for checking out my site. If you&apos;re interested
          in working together, or just want to say hi, feel free to reach out to
          me at the link below.
        </p>
        <SiteButton href="mailto:jegalante@gmail.com?Subject=Hey%20Joe!">
          Say Hi
        </SiteButton>
      </section>
    </Reveal>
  )
}
