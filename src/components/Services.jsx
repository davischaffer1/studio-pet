import { ArrowRight, ArrowUpRight, MessageCircle } from 'lucide-react'
import { services } from '../data/services'
import { whatsappLink } from '../config/site'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import Button from './ui/Button'
import { PawMark, Sparkle } from './ui/Decor'

const iconTones = {
  rose: 'bg-rose-tint text-rose-deep',
  sage: 'bg-sage-tint text-sage-ink',
  peach: 'bg-peach-tint text-rose-deep',
  cream: 'bg-cream-dark/70 text-sage-ink',
}

export default function Services() {
  return (
    <section id="servicos" className="relative overflow-hidden bg-cream py-20 lg:py-28">
      <div
        className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-rose-tint/70"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-24 h-64 w-64 rounded-full bg-sage-tint/80"
        aria-hidden="true"
      />
      <PawMark className="pointer-events-none absolute right-[7%] top-20 h-12 w-12 rotate-12 text-sage/20" />
      <Sparkle className="pointer-events-none absolute left-[10%] top-[38%] h-5 w-5 text-rose/30" />

      <div className="container-page relative">
        <SectionHeading
          eyebrow="Nossos serviços"
          title={
            <>
              Um cuidado especial para{' '}
              <span className="text-rose-deep">cada momento</span>
            </>
          }
          description="Tudo o que seu pet precisa para ficar ainda mais bonito e confortável."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-5">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Reveal
                key={service.id}
                delay={index * 80}
                className="group relative flex flex-col overflow-hidden rounded-[1.9rem] border border-rose-deep/10 bg-cream-light shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
              >
                <div className="relative">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      width="1200"
                      height="900"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-graphite/30 via-graphite/0 to-graphite/0"
                      aria-hidden="true"
                    />
                    <span className="absolute right-3.5 top-3.5 rounded-full bg-cream/90 px-3 py-1 text-[9px] font-extrabold uppercase tracking-[0.14em] text-rose-deep backdrop-blur-sm">
                      Sob consulta
                    </span>
                  </div>
                  <span
                    className={`absolute bottom-0 left-5 inline-flex h-12 w-12 translate-y-1/2 items-center justify-center rounded-2xl border-4 border-cream-light shadow-sm ${iconTones[service.tone]}`}
                  >
                    <Icon size={20} strokeWidth={1.9} aria-hidden="true" />
                  </span>
                </div>

                <div className="flex flex-1 flex-col px-5 pb-6 pt-8 sm:px-6">
                  <h3 className="font-display text-[20px] leading-tight text-graphite">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-ink-soft">
                    {service.description}
                  </p>
                  <a
                    href={whatsappLink(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 rounded-full py-2 text-[11px] font-extrabold uppercase tracking-[0.13em] text-rose-deep transition-colors hover:text-rose focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2 focus-visible:ring-offset-cream-light"
                  >
                    Agendar cuidado
                    <ArrowUpRight
                      size={14}
                      strokeWidth={2.6}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal
          delay={100}
          className="mt-10 flex flex-col items-center justify-between gap-4 rounded-[1.75rem] border border-dashed border-rose/30 bg-cream-light/60 px-6 py-6 sm:flex-row sm:px-8 lg:mt-12"
        >
          <p className="max-w-xl text-center text-sm leading-relaxed text-ink-soft sm:text-left">
            <span className="font-bold text-graphite">
              Ficou na dúvida sobre qual cuidado escolher?
            </span>{' '}
            A gente conversa com você e indica o melhor para o seu pet.
          </p>
          <Button
            href={whatsappLink(
              'Olá! Gostaria de uma ajuda para escolher o cuidado ideal para o meu pet.',
            )}
            variant="ghost"
            size="sm"
            icon={MessageCircle}
            iconRight={ArrowRight}
            className="shrink-0"
          >
            Falar no WhatsApp
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
