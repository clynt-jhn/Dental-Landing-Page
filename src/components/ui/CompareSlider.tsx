import { useCallback, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react'

const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)'

export function CompareSlider({
  src,
  alt,
  initial = 16,
  className = '',
}: {
  src: string
  alt: string
  initial?: number
  className?: string
}) {
  const [position, setPosition] = useState(initial)
  const [dragging, setDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.min(100, Math.max(0, pct)))
  }, [])

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId)
    setDragging(true)
    setFromClientX(event.clientX)
  }

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragging) return
    setFromClientX(event.clientX)
  }

  const stopDragging = () => setDragging(false)
  const label = position > 50 ? 'After' : 'Before'

  return (
    <div
      ref={containerRef}
      className={`relative aspect-[2/1] w-full touch-none select-none overflow-hidden bg-white ${className}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
      role="slider"
      aria-label={`Before and after comparison — ${alt}`}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
    >
      {/* Before: full-bleed base layer, fills the card edge to edge */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: `url(${src})`, backgroundSize: '100% 200%', backgroundPosition: 'top' }}
      />
      {/* After: same full-bleed footprint, revealed left of the divider */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: '100% 200%',
          backgroundPosition: 'bottom',
          clipPath: `inset(0 ${100 - position}% 0 0)`,
          transition: dragging ? 'none' : `clip-path 0.4s ${EASE}`,
        }}
      />
      <span className="pointer-events-none absolute bottom-3 right-3 min-w-[58px] rounded-full bg-black/55 px-2.5 py-1 text-center text-[11px] font-semibold uppercase leading-none tracking-[0.06em] text-white">
        {label}
      </span>
      <div
        className="pointer-events-none absolute inset-y-0 w-[2px] bg-white"
        style={{ left: `${position}%`, transition: dragging ? 'none' : `left 0.4s ${EASE}` }}
      >
        <div
          className={`absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white bg-white/90 text-ink transition-transform duration-200 ${dragging ? 'scale-110' : ''}`}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 7 L3 12 L8 17" />
            <path d="M16 7 L21 12 L16 17" />
          </svg>
        </div>
      </div>
    </div>
  )
}
