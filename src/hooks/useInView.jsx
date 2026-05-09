import { useEffect, useRef, useState } from 'react'

/**
 * Returns [ref, isVisible].
 * Once the element enters the viewport it stays visible (one-shot).
 */
export function useInView(options = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.12, ...options }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return [ref, visible]
}

/**
 * Wraps children in a div that fades + slides up when scrolled into view.
 * delay: CSS delay string e.g. '0.1s'
 */
export function Reveal({ children, delay = '0s', className = '', style = {} }) {
  const [ref, visible] = useInView()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.6s ease ${delay}, transform 0.6s ease ${delay}`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

/**
 * Staggered reveal for a list — wraps each child with increasing delay.
 */
export function StaggerReveal({ children, baseDelay = 0, step = 0.08, className = '', itemClass = '' }) {
  const [ref, visible] = useInView()
  const items = Array.isArray(children) ? children : [children]
  return (
    <div ref={ref} className={className}>
      {items.map((child, i) => (
        <div
          key={i}
          className={itemClass}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: `opacity 0.55s ease ${baseDelay + i * step}s, transform 0.55s ease ${baseDelay + i * step}s`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
