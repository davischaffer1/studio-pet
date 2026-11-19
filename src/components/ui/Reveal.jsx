import { useEffect, useRef, useState } from 'react'
import { cx } from '../../lib/utils'

/**
 * Anima o conteúdo suavemente quando ele entra na viewport.
 * Respeita "prefers-reduced-motion" via CSS.
 */
export default function Reveal({
  as: Tag = 'div',
  delay = 0,
  className,
  children,
  style,
  ...props
}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.01, rootMargin: '0px 0px -32px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={cx('reveal', isVisible && 'is-visible', className)}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...props}
    >
      {children}
    </Tag>
  )
}
