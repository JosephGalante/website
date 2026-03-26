'use client'

import Image from 'next/image'
import {useState} from 'react'

const headshotLink = '/headshot.jpeg'

export function TiltImage() {
  const [transform, setTransform] = useState(
    'perspective(900px) rotateX(0deg) rotateY(0deg)',
  )

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const rotateY = ((x / rect.width) * 10 - 5).toFixed(2)
    const rotateX = (5 - (y / rect.height) * 10).toFixed(2)
    setTransform(
      `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    )
  }

  const reset = () =>
    setTransform('perspective(900px) rotateX(0deg) rotateY(0deg)')

  return (
    <div
      className="portrait-shell"
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      <div className="portrait-frame" style={{transform}}>
        <Image
          src={headshotLink}
          alt="Joe Galante profile picture"
          width={440}
          height={520}
          className="portrait-image"
          priority
        />
      </div>
    </div>
  )
}
