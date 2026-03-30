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
          I&apos;d love to hear from you. Whether you have a question, a project in mind, or just want to connect, feel free to get in touch below.
        </p>
        <SiteButton href="mailto:jegalante@gmail.com?Subject=Hey%20Joe!">
          Say Hi
        </SiteButton>
      </section>
    </Reveal>
  )
}
