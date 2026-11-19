import { Clock, MapPin, MessageCircle, Sparkles } from 'lucide-react'
import Button from './ui/Button'
import Reveal from './ui/Reveal'
import { PawMark, Sparkle } from './ui/Decor'
import { siteConfig, whatsappLink } from '../config/site'

export default function FinalCTA() {
  const { address, hoursSummary } = siteConfig.contact

  return (
    <section id="contato" className="relative bg-cream py-20 lg:py-28">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-[2.25rem] bg-rose shadow-lift sm:rounded-[3rem]">
          <div
            className="pointer-events-none absolute -left-24 -top-28 h-80 w-80 rounded-full border border-graphite/10"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-rose-deep/25"
            aria-hidden="true"
          />
          <PawMark className="pointer-events-none absolute -bottom-8 left-[38%] h-36 w-36 -rotate-12 text-cream/15" />
          <Sparkle className="pointer-events-none absolute left-8 top-10 h-6 w-6 text-cream/50" />
          <Sparkle className="pointer-events-none absolute right-1/2 top-14 h-4 w-4 text-graphite/20" />

          <div className="relative grid items-center gap-10 p-7 sm:p-11 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8 lg:p-14 xl:gap-12">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-cream/25 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-graphite">
                <Sparkles size={13} aria-hidden="true" />
                Vamos cuidar do seu pet
              </span>

              <h2 className="mt-5 max-w-[15ch] font-display text-[2.1rem] leading-[1.05] tracking-[-0.02em] text-graphite sm:text-[2.7rem] lg:text-[3rem]">
                Seu melhor amigo merece esse carinho!
              </h2>

              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-graphite/85 sm:text-base">
                Agende um horário e venha conhecer a Studio Pet.
              </p>

              <div className="mt-7">
                <Button
                  href={whatsappLink(
                    'Olá! Vim pelo site e gostaria de agendar um horário na Studio Pet.',
                  )}
                  variant="cream"
                  size="lg"
                  icon={MessageCircle}
                >
                  Agendar pelo WhatsApp
                </Button>
              </div>

              <div className="mt-8 flex flex-col gap-3 border-t border-graphite/20 pt-6 text-[12px] font-semibold text-graphite/85 sm:flex-row sm:gap-7">
                <p className="flex items-start gap-2">
                  <MapPin
                    size={15}
                    className="mt-0.5 shrink-0 text-graphite/60"
                    aria-hidden="true"
                  />
                  <span>
                    {address.street}
                    <br />
                    {address.city}
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <Clock
                    size={15}
                    className="mt-0.5 shrink-0 text-graphite/60"
                    aria-hidden="true"
                  />
                  <span>
                    {hoursSummary.weekdays}
                    <br />
                    {hoursSummary.saturday}
                  </span>
                </p>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[340px] lg:mx-0 lg:ml-auto lg:max-w-[380px]">
              <div
                className="absolute -inset-3 rounded-[47%_53%_50%_50%/46%_44%_56%_54%] bg-sage/50"
                aria-hidden="true"
              />
              <div className="relative aspect-[4/4.7] overflow-hidden rounded-[2.5rem] rounded-t-[11rem] border-[6px] border-cream-light/80 shadow-lift">
                <img
                  src="/images/cta-pet.jpg"
                  alt="Cachorro de pelagem branca e fofa, pronto para ser cuidado"
                  width="1000"
                  height="1500"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-[50%_38%]"
                />
              </div>

              <div className="absolute -bottom-4 -left-3 flex items-center gap-2 rounded-full bg-cream-light px-4 py-2.5 shadow-soft sm:-left-6">
                <PawMark className="h-4 w-4 text-rose" />
                <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-ink-soft">
                  Cães &amp; gatos
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
