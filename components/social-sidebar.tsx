import type {Social} from '@/lib/site-data'
import {socials} from '@/lib/site-data'
import {
  CodepenIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from '@/components/icons'
import {ReactNode} from 'react'

type SocialIconProps = {
  icon: Social['icon']
}

const socialIconMap: Record<Social['icon'], ReactNode> = {
  github: <GithubIcon className="social-icon" />,
  linkedin: <LinkedinIcon className="social-icon" />,
  mail: <MailIcon className="social-icon" />,
  codepen: <CodepenIcon className="social-icon" />,
}

function SocialIcon({icon}: SocialIconProps) {
  return socialIconMap[icon]
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
