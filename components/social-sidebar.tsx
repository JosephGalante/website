import {socials} from '@/lib/site-data'
import {
  CodepenIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from '@/components/icons'

function SocialIcon({icon}: {icon: (typeof socials)[number]['icon']}) {
  switch (icon) {
    case 'github':
      return <GithubIcon className="social-icon" />
    case 'linkedin':
      return <LinkedinIcon className="social-icon" />
    case 'mail':
      return <MailIcon className="social-icon" />
    case 'codepen':
      return <CodepenIcon className="social-icon" />
  }
}

export function SocialSidebar() {
  return (
    <aside className="social-sidebar" aria-label="Social links">
      <ul>
        {socials.map((social) => (
          <li key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              <SocialIcon icon={social.icon} />
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}
