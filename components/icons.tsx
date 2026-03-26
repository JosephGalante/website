type IconProps = {
  className?: string
}

function baseProps(className?: string) {
  return {
    className,
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    viewBox: '0 0 24 24',
    'aria-hidden': true,
  }
}

export function MenuIcon({className}: IconProps) {
  return (
    <svg {...baseProps(className)}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  )
}

export function CloseIcon({className}: IconProps) {
  return (
    <svg {...baseProps(className)}>
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </svg>
  )
}

export function ArrowDownIcon({className}: IconProps) {
  return (
    <svg {...baseProps(className)}>
      <path d="M12 5v14" />
      <path d="M6 13l6 6 6-6" />
    </svg>
  )
}

export function ArrowRightUpIcon({className}: IconProps) {
  return (
    <svg {...baseProps(className)}>
      <path d="M7 17L17 7" />
      <path d="M8 7h9v9" />
    </svg>
  )
}

export function FolderIcon({className}: IconProps) {
  return (
    <svg {...baseProps(className)}>
      <path d="M3 8.5A2.5 2.5 0 0 1 5.5 6H10l2 2h6.5A2.5 2.5 0 0 1 21 10.5v7A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5z" />
    </svg>
  )
}

export function GithubIcon({className}: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.07-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.33-1.75-1.33-1.75-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.24 1.84 1.24 1.08 1.84 2.82 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.48-1.34-5.48-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.45 11.45 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.64.24 2.86.12 3.16.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.82 1.1.82 2.22 0 1.61-.01 2.91-.01 3.3 0 .32.21.7.83.58A12 12 0 0 0 12 .5Z" />
    </svg>
  )
}

export function LinkedinIcon({className}: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M4.98 3.5a2.48 2.48 0 1 0 0 4.96 2.48 2.48 0 0 0 0-4.96ZM3 8.98h3.96V21H3zM10.5 8.98h3.8v1.64h.05c.53-1 1.82-2.06 3.75-2.06 4 0 4.74 2.64 4.74 6.08V21h-3.96v-5.6c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95V21H10.5z" />
    </svg>
  )
}

export function MailIcon({className}: IconProps) {
  return (
    <svg {...baseProps(className)}>
      <path d="M4 6h16v12H4z" />
      <path d="M4 8l8 6 8-6" />
    </svg>
  )
}

export function CodepenIcon({className}: IconProps) {
  return (
    <svg {...baseProps(className)}>
      <path d="M12 3l8 5v8l-8 5-8-5V8z" />
      <path d="M12 3v18" />
      <path d="M4 8l8 5 8-5" />
      <path d="M4 16l8-5 8 5" />
    </svg>
  )
}
