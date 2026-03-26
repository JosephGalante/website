type SectionHeadingProps = {
  id: string
  title: string
}

export function SectionHeading({id, title}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <h2 id={id}>{title}</h2>
      <span aria-hidden className="section-heading-line" />
    </div>
  )
}
