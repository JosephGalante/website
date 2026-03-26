'use client'

import {useEffect, useRef, useState} from 'react'
import type {ReactNode} from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal({children, className = '', delay = 0}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current

    if (!node) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      {threshold: 0.2},
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  const classes = ['reveal', visible ? 'is-visible' : '', className]
    .filter(Boolean)
    .join(' ')

  return (
    <div ref={ref} className={classes} style={{transitionDelay: `${delay}ms`}}>
      {children}
    </div>
  )
}
