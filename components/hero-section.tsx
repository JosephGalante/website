import {Reveal} from './reveal'
import {SiteButton} from './site-button'
import {ArrowDownIcon} from './icons'

export default function HeroSection() {
  return (
    <Reveal className="hero-shell">
      <section className="hero-section">
        <p className="hero-kicker">Hey, pleasure to meet you. I&apos;m</p>
        <h1>Joe Galante.</h1>
        <p className="hero-copy">
          I&apos;m a full-stack software engineer building scalable financial
          platforms, with a backend-leaning focus on architecture, reliability,
          and performance.
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
  )
}
