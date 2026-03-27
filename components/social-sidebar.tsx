import type {Social} from '@/lib/site-data'
import {socials} from '@/lib/site-data'
import {GithubIcon, LinkedinIcon, MailIcon} from '@/components/icons'
import type {ComponentType} from 'react'

type SocialIconProps = {
  icon: Social['icon']
}

type SocialIconComponent = ComponentType<{
  className?: string
}>

const socialIconMap: Record<Social['icon'], SocialIconComponent> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: MailIcon,
}

function SocialIcon({icon}: SocialIconProps) {
  const Icon = socialIconMap[icon]
  return <Icon className="social-icon" />
}

export function SocialSidebar() {
  return (
    <aside className="social-sidebar" aria-label="Social links">
      <ul>
        {socials.map(({href, label, icon}) => (
          <li key={href}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <SocialIcon icon={icon} />
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}
