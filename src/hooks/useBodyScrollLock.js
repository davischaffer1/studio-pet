import { useEffect } from 'react'

/** Trava o scroll do body enquanto um menu/modal está aberto. */
export default function useBodyScrollLock(locked) {
  useEffect(() => {
    if (!locked) return

    const previousOverflow = document.body.style.overflow
    const previousPadding = document.body.style.paddingRight
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

    document.body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`

    return () => {
      document.body.style.overflow = previousOverflow
      document.body.style.paddingRight = previousPadding
    }
  }, [locked])
}
