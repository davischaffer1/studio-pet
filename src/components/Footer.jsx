import {
  Clock,
  Heart,
  Instagram,
  MapPin,
  MessageCircle,
  PawPrint,
} from 'lucide-react'
import Logo from './ui/Logo'
import Button from './ui/Button'
import { navLinks } from '../data/navigation'
import { siteConfig, whatsappLink } from '../config/site'
import { PawMark } from './ui/Decor'

export default function Footer() {
  const { brand, contact, messages } = siteConfig
  const { address, instagram, hours, whatsappDisplay } = contact
  const year = new Date().getFullYear()

  const footerLinks = [
    ...navLinks,
    { label: 'Depoimentos', href: '#depoimentos' },
  ]

  return (
    <footer className="relative overflow-hidden border-t border-rose-deep/10 bg-cream-light">
      <div
        className="pointer-events-none absolute -left-28 top-0 h-72 w-72 rounded-full bg-rose-tint/45"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-sage-tint/70"
        aria-hidden="true"
      />
      <PawMark className="pointer-events-none absolute right-[8%] top-10 h-9 w-9 rotate-12 text-rose/20" />

      <div className="container-page relative py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_1fr_1fr] lg:gap-10">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-[13.5px] leading-relaxed text-ink-soft">
              {brand.description}
            </p>

            <div className="mt-6 flex items-center gap-2.5">
              <a
                href={instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram da Studio Pet (${instagram.handle})`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-rose-deep/15 bg-cream text-rose-deep transition-all duration-300 hover:-translate-y-0.5 hover:border-rose/40 hover:bg-rose-tint"
              >
                <Instagram size={17} aria-hidden="true" />
              </a>
              <a
                href={whatsappLink(messages.footer)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar com a Studio Pet pelo WhatsApp"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-rose-deep/15 bg-cream text-rose-deep transition-all duration-300 hover:-translate-y-0.5 hover:border-rose/40 hover:bg-rose-tint"
              >
                <MessageCircle size={17} aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav aria-label="Links do rodapé">
            <h3 className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-rose-deep">
              Navegação
            </h3>
            <ul className="mt-3 space-y-0.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex py-2 text-[13px] font-semibold text-ink-soft transition-colors hover:text-rose-deep"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-rose-deep">
              Contato
            </h3>
            <ul className="mt-3 space-y-2.5 text-[13px] text-ink-soft">
              <li className="flex items-start gap-2.5">
                <MapPin
                  size={15}
                  className="mt-2 shrink-0 text-rose"
                  aria-hidden="true"
                />
                <a
                  href={address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-col gap-0.5 py-1 font-semibold leading-relaxed transition-colors hover:text-rose-deep"
                >
                  {address.street}
                  <span>{address.city}</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Instagram
                  size={15}
                  className="shrink-0 text-rose"
                  aria-hidden="true"
                />
                <a
                  href={instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex py-1 font-semibold transition-colors hover:text-rose-deep"
                >
                  {instagram.handle}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle
                  size={15}
                  className="shrink-0 text-rose"
                  aria-hidden="true"
                />
                <a
                  href={whatsappLink(messages.footer)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex py-1 font-semibold transition-colors hover:text-rose-deep"
                >
                  {whatsappDisplay}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-rose-deep">
              Horário de atendimento
            </h3>
            <ul className="mt-4 space-y-2.5 text-[13px] text-ink-soft">
              {hours.map((item) => (
                <li
                  key={item.label}
                  className="flex items-baseline justify-between gap-3 border-b border-rose-deep/10 pb-2.5 last:border-0"
                >
                  <span className="font-semibold">{item.label}</span>
                  <span className="shrink-0 text-ink-soft">{item.value}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5">
              <Button
                href={whatsappLink(messages.hero)}
                variant="sage"
                size="sm"
                icon={MessageCircle}
                className="w-full"
              >
                Agendar horário
              </Button>
            </div>

            <p className="mt-4 flex items-center gap-1.5 text-[10.5px] font-semibold text-ink-soft">
              <Clock size={12} className="text-sage-deep" aria-hidden="true" />
              Atendimento com hora marcada
            </p>
          </div>
        </div>
      </div>

      <div className="relative bg-rose-deep">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-center text-[11.5px] text-cream sm:flex-row sm:text-left">
          <p className="flex flex-wrap items-center justify-center gap-2">
            <PawPrint size={12} className="text-cream/60" aria-hidden="true" />
            Studio Pet &copy; {year}. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1.5">
            Cuidado que faz a diferença
            <Heart
              size={11}
              fill="currentColor"
              className="text-peach"
              aria-hidden="true"
            />
          </p>
        </div>
      </div>
    </footer>
  )
}
