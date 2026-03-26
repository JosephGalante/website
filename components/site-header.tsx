'use client'

import { useEffect, useState } from 'react'
import { CloseIcon, MenuIcon } from '@/components/icons'
import { SiteButton } from '@/components/site-button'
import type { NavLink } from '@/lib/site-data'

type SiteHeaderProps = {
  links: NavLink[]
}

export function SiteHeader({ links }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let lastScrollY = 0

    const onScroll = () => {
      const isMobile = window.innerWidth < 768
      const nextScrollY = window.scrollY

      if (!isMobile) {
        setHidden(false)
        return
      }

      setHidden(nextScrollY > lastScrollY && nextScrollY > 48)
      lastScrollY = nextScrollY
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false)

    window.addEventListener('resize', closeMenu)
    return () => window.removeEventListener('resize', closeMenu)
  }, [])

  return (
    <header className={['site-header', hidden ? 'is-hidden' : ''].filter(Boolean).join(' ')}>
      <div className="site-header-inner">
        <a href="#top" className="site-logo" onClick={() => setMenuOpen(false)}>
          JG
        </a>

        <nav className="desktop-nav" aria-label="Primary">
          <ol>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ol>
          <SiteButton href="/RESUME-Galante(ECR1).pdf" target="_blank" rel="noreferrer">
            Resumé
          </SiteButton>
        </nav>

        <button
          type="button"
          className="mobile-menu-button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <CloseIcon className="menu-icon" /> : <MenuIcon className="menu-icon" />}
        </button>
      </div>

      <div className={['mobile-nav-shell', menuOpen ? 'is-open' : ''].filter(Boolean).join(' ')}>
        <nav className="mobile-nav" aria-label="Mobile">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <SiteButton
            href="/RESUME-Galante(ECR1).pdf"
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Resumé
          </SiteButton>
        </nav>
      </div>
    </header>
  )
}
