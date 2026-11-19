import { CalendarCheck, Heart, MessageCircle, PawPrint } from 'lucide-react'
import Button from './ui/Button'
import Reveal from './ui/Reveal'
import { HeartDoodle, OrganicBlob, PawMark, Sparkle } from './ui/Decor'
import { whatsappLink } from '../config/site'

const highlights = [
  {
    icon: PawPrint,
    title: 'Cães e gatos',
    description: 'Cuidado adaptado a cada pelagem e temperamento.',
  },
  {
    icon: CalendarCheck,
    title: 'Hora marcada',
    description: 'Atendimento tranquilo, sem filas e sem estresse.',
  },
  {
    icon: Heart,
    title: 'Carinho em cada etapa',
    description: 'Atenção do primeiro ao último detalhe.',
  },
]

export default function About() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-rose-tint py-20 lg:py-28"
    >
      <OrganicBlob className="pointer-events-none absolute -left-40 top-10 h-[520px] w-[520px] text-sage-light/35" />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cream-light/40"
        aria-hidden="true"
      />
      <PawMark className="pointer-events-none absolute right-[6%] top-16 h-16 w-16 rotate-[18deg] text-rose/15" />
      <Sparkle className="pointer-events-none absolute left-[46%] top-10 h-5 w-5 text-sage-deep/30" />

      <div className="container-page relative grid items-center gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        {/* fotografia */}
        <Reveal className="relative mx-auto w-full max-w-[470px] lg:mx-0">
          <div
            className="absolute -left-4 -top-4 h-full w-full rounded-[3rem] rounded-tr-[8rem] border border-sage-deep/15"
            aria-hidden="true"
          />

          <div className="relative aspect-[4/4.8] overflow-hidden rounded-[2.75rem] rounded-tl-[7.5rem] border-[7px] border-cream-light shadow-lift">
            <img
              src="/images/about-main.jpg"
              alt="Cachorro shih tzu sendo banhado com cuidado durante o atendimento"
              width="1200"
              height="1800"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-[50%_42%]"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-graphite/25 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>

          <div className="absolute -right-3 -top-5 hidden h-28 w-28 overflow-hidden rounded-full border-[6px] border-cream-light shadow-soft sm:block lg:-right-6">
            <img
              src="/images/about-detail.jpg"
              alt="Cachorro sendo escovado com cuidado durante o atendimento"
              width="1200"
              height="800"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-6 left-3 flex items-center gap-3 rounded-2xl bg-cream-light px-4 py-3.5 shadow-soft sm:-bottom-7 sm:left-6 sm:px-5">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose text-cream">
              <Heart size={17} fill="currentColor" aria-hidden="true" />
            </span>
            <span>
              <span className="block font-display text-[15px] leading-tight text-graphite">
                Amor em cada detalhe
              </span>
              <span className="mt-0.5 block text-[10px] font-extrabold uppercase tracking-[0.14em] text-rose-deep">
                Nosso compromisso
              </span>
            </span>
          </div>

          <HeartDoodle className="absolute -left-8 bottom-24 h-12 w-12 -rotate-12 text-rose/35" />
          <PawMark className="absolute -right-2 bottom-32 h-7 w-7 rotate-[22deg] text-sage-deep/30" />
        </Reveal>

        {/* texto */}
        <div className="relative">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-cream-light/80 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-rose-deep">
              <PawPrint size={13} aria-hidden="true" />
              Sobre a Studio Pet
            </span>
            <h2 className="mt-5 max-w-[16ch] font-display text-[2.1rem] leading-[1.08] tracking-[-0.015em] text-graphite sm:text-[2.6rem] lg:text-[2.9rem]">
              Mais do que estética,{' '}
              <span className="text-rose-deep">cuidado de verdade.</span>
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-soft sm:text-base">
              Na Studio Pet, acreditamos que cada pet merece atenção, carinho e
              cuidado especial. Nosso objetivo é proporcionar uma experiência
              tranquila e agradável, respeitando a personalidade e as
              necessidades de cada animal.
            </p>
          </Reveal>

          <Reveal delay={140} className="mt-8 space-y-4">
            {highlights.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="flex items-start gap-4">
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cream-light/90 text-rose-deep shadow-sm">
                    <Icon size={18} strokeWidth={1.9} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-[16px] leading-tight text-graphite">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-ink-soft">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </Reveal>

          <Reveal delay={220}>
            <Button
              href={whatsappLink(
                'Olá! Gostaria de conhecer melhor a Studio Pet.',
              )}
              variant="secondary"
              icon={MessageCircle}
              className="mt-9 bg-cream-light/70"
            >
              Falar com a Studio Pet
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
