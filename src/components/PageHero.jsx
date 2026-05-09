import { useEffect, useRef } from 'react'
import Badge from './Badge'

/**
 * PageHero — premium hero for inner pages.
 *
 * Props:
 *  badge         string         e.g. "Our Story"
 *  title         ReactNode      the h1 content
 *  sub           string         paragraph below title
 *  rightContent  ReactNode      content for right column (stat cards, featured card, etc.)
 *  accentColor   string         CSS color for orbs, default violet
 *  eyebrow       string         small mono line above title
 */
export default function PageHero({
  badge, title, sub, rightContent,
  accentColor = '#7c3aed', eyebrow,
}) {
  const canvasRef = useRef(null)

  // Animated particle lines
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight }
    resize()
    window.addEventListener('resize', resize)

    // diagonal scan line
    let x = -canvas.width
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      // moving diagonal highlight
      const grad = ctx.createLinearGradient(x, 0, x + 300, canvas.height)
      grad.addColorStop(0, 'transparent')
      grad.addColorStop(.5, `${accentColor}10`)
      grad.addColorStop(1, 'transparent')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      x += 1.5
      if (x > canvas.width * 2) x = -canvas.width
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [accentColor])

  return (
    <section className="nb-page-hero" style={{ background: '#060608' }}>
      {/* Ambient orbs */}
      <div className="nb-orb nb-orb-violet" style={{ width: 600, height: 600, top: -200, right: -100 }} />
      <div className="nb-orb nb-orb-cyan"   style={{ width: 400, height: 400, bottom: -100, left: -80 }} />

      {/* Grid lines */}
      <div className="nb-grid-lines" />

      {/* Canvas scan */}
      <canvas ref={canvasRef} style={{ position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none', zIndex:1, opacity:.6 }} />

      {/* Decorative SVG corners */}
      <svg style={{ position:'absolute', top:0, left:0, width:'100%', height:'100%', pointerEvents:'none', zIndex:2, opacity:.3 }} xmlns="http://www.w3.org/2000/svg">
        {/* Top-left corner bracket */}
        <path d="M 40 80 L 40 40 L 80 40" fill="none" stroke={accentColor} strokeWidth="1" strokeOpacity=".6" />
        {/* Bottom-right corner bracket */}
        <path d="M calc(100% - 40) calc(100% - 80) L calc(100% - 40) calc(100% - 40) L calc(100% - 80) calc(100% - 40)" fill="none" stroke={accentColor} strokeWidth="1" strokeOpacity=".4" />
        {/* Horizontal rule at bottom */}
        <line x1="0" y1="calc(100% - 1)" x2="100%" y2="calc(100% - 1)" stroke={accentColor} strokeWidth=".5" strokeOpacity=".15" />
      </svg>

      <div className="nb-page-hero-inner">
        {rightContent ? (
          <div className="nb-page-hero-layout">
            <div className="nb-page-hero-left">
              {badge && <Badge>{badge}</Badge>}
              {eyebrow && <div className="nb-hero-eyebrow-num">{eyebrow}</div>}
              <h1 className="nb-page-h1">{title}</h1>
              {sub && <p className="nb-page-sub-large">{sub}</p>}
            </div>
            <div className="nb-page-hero-right">{rightContent}</div>
          </div>
        ) : (
          <div style={{ maxWidth: 760 }}>
            {badge && <Badge>{badge}</Badge>}
            {eyebrow && <div className="nb-hero-eyebrow-num">{eyebrow}</div>}
            <h1 className="nb-page-h1">{title}</h1>
            {sub && <p className="nb-page-sub-large">{sub}</p>}
          </div>
        )}
      </div>
    </section>
  )
}
