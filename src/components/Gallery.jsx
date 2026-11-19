import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Maximize2, PawPrint, X } from 'lucide-react'
import { galleryImages } from '../data/gallery'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import useBodyScrollLock from '../hooks/useBodyScrollLock'
import { PawMark, Sparkle } from './ui/Decor'
import { cx } from '../lib/utils'

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null)
  const closeButtonRef = useRef(null)
  const dialogRef = useRef(null)

  const isOpen = selectedIndex !== null
  const selected = isOpen ? galleryImages[selectedIndex] : null

  useBodyScrollLock(isOpen)

  const close = useCallback(() => {
    const indexToRestore = selectedIndex
    setSelectedIndex(null)

    window.requestAnimationFrame(() => {
      const trigger = document.querySelector(
        `[data-gallery-index="${indexToRestore}"]`,
      )
      trigger?.focus()
    })
  }, [selectedIndex])

  const next = useCallback(() => {
    setSelectedIndex((current) =>
      current === null ? 0 : (current + 1) % galleryImages.length,
    )
  }, [])

  const previous = useCallback(() => {
    setSelectedIndex((current) =>
      current === null
        ? 0
        : (current - 1 + galleryImages.length) % galleryImages.length,
    )
  }, [])

  useEffect(() => {
    if (!isOpen) return

    closeButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        close()
        return
      }

      if (event.key === 'ArrowRight') next()
      if (event.key === 'ArrowLeft') previous()

      if (event.key === 'Tab') {
        const focusables = dialogRef.current?.querySelectorAll(
          'button:not([disabled])',
        )
        if (!focusables?.length) return

        const first = focusables[0]
        const last = focusables[focusables.length - 1]

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, selectedIndex, close, next, previous])

  return (
    <section id="galeria" className="relative overflow-hidden bg-cream py-20 lg:py-28">
      <div
        className="pointer-events-none absolute -right-28 top-24 h-72 w-72 rounded-full bg-rose-tint/60"
        aria-hidden="true"
      />
      <PawMark className="pointer-events-none absolute -left-6 bottom-28 h-24 w-24 -rotate-12 text-sage/20" />
      <Sparkle className="pointer-events-none absolute right-[12%] top-16 h-6 w-6 text-rose/35" />

      <div className="container-page relative">
        <SectionHeading
          eyebrow="Galeria"
          title={
            <>
              Um pouquinho de{' '}
              <span className="text-rose-deep">fofura</span> por aqui!
            </>
          }
          description="Confira alguns dos nossos clientes de quatro patas."
        />

        <div className="mt-11 grid auto-rows-[132px] grid-cols-2 gap-3 sm:auto-rows-[168px] sm:gap-4 md:grid-cols-4 lg:mt-14 lg:auto-rows-[215px] lg:gap-5">
          {galleryImages.map((image, index) => (
            <Reveal
              key={image.src}
              delay={Math.min(index * 60, 240)}
              className={cx('relative', image.className)}
            >
              <button
                type="button"
                data-gallery-index={index}
                onClick={() => setSelectedIndex(index)}
                aria-label={`Ampliar foto: ${image.caption}`}
                className="group relative h-full w-full overflow-hidden rounded-[1.4rem] bg-cream-dark text-left shadow-card transition-all duration-500 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:rounded-[1.6rem]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  width="1200"
                  height="900"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                />
                <span
                  className="absolute inset-0 bg-gradient-to-t from-graphite/65 via-graphite/5 to-transparent"
                  aria-hidden="true"
                />

                <span className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-2">
                  <span className="text-[12px] font-bold leading-snug text-cream drop-shadow-sm sm:text-[13px]">
                    {image.caption}
                  </span>
                  <span className="inline-flex h-7 w-7 shrink-0 translate-y-1 items-center justify-center rounded-full bg-cream/20 text-cream opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <Maximize2 size={12} aria-hidden="true" />
                  </span>
                </span>

                <span className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-cream/90 text-rose-deep opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <PawPrint size={14} aria-hidden="true" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-8 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-rose/20 bg-cream-light/70 px-4 py-2 text-xs font-semibold text-ink-soft">
            <PawPrint size={13} className="text-rose" aria-hidden="true" />
            Cada pet com a sua personalidade — e o seu charme particular.
          </p>
        </Reveal>
      </div>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`Foto ampliada: ${selected.caption}`}
        >
          <div
            className="absolute inset-0 animate-fade-in bg-graphite/85 backdrop-blur-sm"
            onClick={close}
            aria-hidden="true"
          />

          <div
            ref={dialogRef}
            className="relative z-10 w-full max-w-4xl animate-modal-in"
          >
            <div className="overflow-hidden rounded-[1.75rem] bg-cream-light shadow-lift">
              <div className="flex max-h-[70vh] items-center justify-center bg-graphite/90">
                <img
                  src={selected.src}
                  alt={selected.alt}
                  className="max-h-[70vh] w-full object-contain"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-7">
                <div>
                  <p className="font-display text-[16px] leading-tight text-graphite">
                    {selected.caption}
                  </p>
                  <p className="mt-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-ink-soft">
                    Foto {String(selectedIndex + 1).padStart(2, '0')} de{' '}
                    {String(galleryImages.length).padStart(2, '0')}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={previous}
                    aria-label="Foto anterior"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-rose-deep/15 text-rose-deep transition-colors hover:bg-rose-tint"
                  >
                    <ChevronLeft size={18} aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Próxima foto"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-rose-deep/15 text-rose-deep transition-colors hover:bg-rose-tint"
                  >
                    <ChevronRight size={18} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={close}
              aria-label="Fechar foto ampliada"
              className="absolute -right-1 -top-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream text-rose-deep shadow-lift transition-colors hover:bg-rose-tint sm:-right-3 sm:-top-3"
            >
              <X size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : null}
    </section>
  )
}
