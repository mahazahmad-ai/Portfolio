import useReveal from '../hooks/useReveal'

/**
 * Wraps children in an element that fades/slides in on scroll.
 *
 *   <Reveal delay={150} direction="left">…</Reveal>
 *
 * `as` lets you keep semantic markup (e.g. as="li" inside a list).
 */
export default function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  as: Tag = 'div',
  style,
  ...rest
}) {
  const ref = useReveal()
  const dir = direction === 'up' ? '' : ` reveal--${direction}`

  return (
    <Tag
      ref={ref}
      className={`reveal${dir} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
