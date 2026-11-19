import { useEffect, useState } from 'react'

/** Detecta qual seção está ativa para destacar a navegação. */
export default function useActiveSection(ids, offset = 150) {
  const [activeId, setActiveId] = useState(ids[0])

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      let current = ids[0]

      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top <= offset) current = id
      }

      setActiveId(current)
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids, offset])

  return activeId
}
