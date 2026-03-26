import type {Metadata} from 'next'
import type {ReactNode} from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Joe Galante | Software Engineer',
  description: 'Portfolio website for Joe Galante, software engineer.',
  icons: {
    icon: '/jg.png',
    shortcut: '/jg.png',
    apple: '/jg.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
