import type { AnchorHTMLAttributes, ReactNode } from 'react'

type SiteButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
}

export function SiteButton({ children, className = '', ...props }: SiteButtonProps) {
  return (
    <a {...props} className={['site-button', className].filter(Boolean).join(' ')}>
      {children}
    </a>
  )
}
