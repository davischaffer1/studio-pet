import { useEffect, useState } from 'react'
import { ArrowUpRight, Clock, Menu, MessageCircle, X } from 'lucide-react'
import Logo from './ui/Logo'
import Button from './ui/Button'
import { navLinks, sectionIds } from '../data/navigation'
import { siteConfig, whatsappLink } from '../config/site'
import useActiveSection from '../hooks/useActiveSection'
import useBodyScrollLock from '../hooks/useBodyScrollLock'
import useScrolled from '../hooks/useScrolled'
import { cx } from '../lib/utils'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isScrolled = useScrolled(16)
  const activeSection = useActiveSection(sectionIds)
  const bookingUrl = whatsappLink(siteConfig.messages.hero)

  useBodyScrollLock(isMenuOpen)

  useEffect(() => {
    if (!isMenuOpen) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header
      className={cx(
        'sticky top-0 z-50 border-b bg-cream/85 backdrop-blur-xl transition-all duration-300',
        isScrolled || isMenuOpen
          ? 'border-rose-deep/10 shadow-[0_18px_40px_-32px_rgba(46,37,43,0.6)]'
          : 'border-transparent',
      )}
    >
      <div className="container-page flex h-[76px] items-center justify-between gap-4 sm:h-[84px] lg:grid lg:h-[92px] lg:grid-cols-[1fr_auto_1fr]">
        <Logo />

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-1 rounded-full border border-rose-deep/10 bg-cream-light/70 p-1 lg:flex"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1)
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={cx(
                  'rounded-full px-4 py-2 text-[13px] font-bold transition-colors duration-200',
                  isActive
                    ? 'bg-rose-tint text-rose-deep'
                    : 'text-ink-soft hover:bg-cream hover:text-rose-deep',
                )}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center justify-end gap-2.5">
          <Button
            href={bookingUrl}
            size="sm"
            icon={MessageCircle}
            className="hidden sm:inline-flex lg:px-5"
          >
            Agendar horário
          </Button>

          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agendar horário pelo WhatsApp"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-action text-cream shadow-soft transition-colors hover:bg-rose-deep sm:hidden"
          >
            <MessageCircle size={18} strokeWidth={2.2} aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-rose-deep/15 text-rose-deep transition-colors hover:bg-rose-tint lg:hidden"
          >
            {isMenuOpen ? (
              <X size={20} strokeWidth={2.2} aria-hidden="true" />
            ) : (
              <Menu size={20} strokeWidth={2.2} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full animate-fade-in border-b border-rose-deep/10 bg-cream shadow-lift lg:hidden"
        >
          <div className="container-page max-h-[calc(100vh-76px)] overflow-y-auto py-5">
            <nav aria-label="Navegação mobile" className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1)
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    aria-current={isActive ? 'page' : undefined}
                    className={cx(
                      'flex items-center justify-between rounded-2xl px-4 py-3 text-[15px] font-bold transition-colors',
                      isActive
                        ? 'bg-rose-tint text-rose-deep'
                        : 'text-ink hover:bg-cream-light',
                    )}
                  >
                    {link.label}
                    <ArrowUpRight
                      size={16}
                      className={isActive ? 'text-rose' : 'text-ink-soft/50'}
                      aria-hidden="true"
                    />
                  </a>
                )
              })}
            </nav>

            <div className="mt-5 border-t border-rose-deep/10 pt-5">
              <Button
                href={bookingUrl}
                icon={MessageCircle}
                className="w-full"
                size="lg"
              >
                Agendar pelo WhatsApp
              </Button>
              <p className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-ink-soft">
                <Clock size={14} className="text-sage-deep" aria-hidden="true" />
                Atendimento com hora marcada
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
