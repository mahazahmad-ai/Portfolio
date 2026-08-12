import Reveal from './Reveal'

/** Shared eyebrow + title + subtitle block used at the top of every section. */
export default function SectionHeading({ eyebrow, title, highlight, subtitle, align = 'center' }) {
  return (
    <div className={`section-head text-${align === 'center' ? 'center' : 'start'}`}>
      {eyebrow && (
        <Reveal>
          <span className="section-eyebrow">
            <i className="bi bi-dot" />
            {eyebrow}
          </span>
        </Reveal>
      )}

      <Reveal delay={80}>
        <h2 className="section-title">
          {title} {highlight && <span className="gradient-text">{highlight}</span>}
        </h2>
      </Reveal>

      {subtitle && (
        <Reveal delay={160}>
          <p className={`section-subtitle ${align === 'center' ? 'mx-auto' : 'ms-0'} mb-0`}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  )
}
