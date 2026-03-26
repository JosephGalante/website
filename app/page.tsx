import {SiteHeader} from '@/components/site-header'
import {SocialSidebar} from '@/components/social-sidebar'
import {navLinks} from '@/lib/site-data'
import JobsSection from '@/components/jobs-section'
import HeroSection from '@/components/hero-section'
import AboutMeSection from '@/components/about-me-section'
import ContactSection from '@/components/contact-section'
import ProjectsSection from '@/components/projects-section'

export default function HomePage() {
  return (
    <main id="top">
      <SiteHeader links={navLinks} />
      <SocialSidebar />

      <div className="page-shell">
        <HeroSection />
        <AboutMeSection />
        <JobsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  )
}
