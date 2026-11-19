import { ArrowDown, Check, Heart, MessageCircle, Star } from 'lucide-react'
import Button from './ui/Button'
import Reveal from './ui/Reveal'
import { HeartDoodle, PawMark, Sparkle } from './ui/Decor'
import { whatsappLink } from '../config/site'

const reassurances = ['Hora marcada', 'Produtos suaves', 'Cuidado individual']

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-cream pb-20 pt-8 sm:pt-12 lg:pb-28 lg:pt-16"
    >
      {/* fundo decorativo */}
      <div
        className="pointer-events-none absolute -right-40 -top-48 h-[560px] w-[560px] rounded-full bg-rose-soft/35 sm:-right-32 lg:-top-56 lg:h-[640px] lg:w-[640px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-16 top-36 h-72 w-72 rounded-full border border-rose/25"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-sage-light/25 blur-2xl"
        aria-hidden="true"
      />

      <div className="container-page relative z-10 grid items-center gap-14 lg:grid-cols-[1.03fr_0.97fr] lg:gap-10 xl:gap-16">
        {/* texto */}
        <div className="relative max-w-[620px]">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-rose/25 bg-cream-light/70 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.22em] text-rose-deep sm:text-[11px]">
              <PawMark className="h-3.5 w-3.5 text-rose" />
              Estética animal com carinho
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-[2.65rem] leading-[1.03] tracking-[-0.025em] text-graphite sm:text-[3.4rem] lg:text-[3.55rem] xl:text-[4rem]">
              Seu pet limpinho,
              <br className="hidden sm:block" /> feliz e cheio
              <span className="block">
                de{' '}
                <span className="relative inline-block text-rose-accent">
                  charme!
                  <svg
                    viewBox="0 0 200 14"
                    preserveAspectRatio="none"
                    className="absolute -bottom-2 left-0 h-2.5 w-full text-rose/45 sm:-bottom-2.5 sm:h-3"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d="M3 9.5C46 3.5 115 3 197 7.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-7 max-w-[33rem] text-[15.5px] leading-relaxed text-ink-soft sm:text-[17px]">
              Cuidamos de cada detalhe para que seu melhor amigo tenha uma
              experiência especial, com carinho, cuidado e muito amor.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                href={whatsappLink(
                  'Olá! Vim pelo site e gostaria de agendar um horário na Studio Pet.',
                )}
                size="lg"
                icon={MessageCircle}
                className="w-full sm:w-auto"
              >
                Agendar pelo WhatsApp
              </Button>
              <Button
                href="#servicos"
                variant="secondary"
                size="lg"
                iconRight={ArrowDown}
                className="w-full sm:w-auto"
              >
                Conheça nossos serviços
              </Button>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              {reassurances.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-[12.5px] font-bold text-ink-soft"
                >
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sage-tint text-sage-ink">
                    <Check size={12} strokeWidth={3} aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* composição visual */}
        <Reveal delay={120} className="relative mx-auto w-full max-w-[490px] lg:max-w-[540px]">
          <div className="relative aspect-[4/4.55] w-full sm:aspect-[4/4.2]">
            <div
              className="absolute inset-x-2 bottom-0 top-10 rounded-[48%_52%_46%_54%/52%_44%_56%_48%] bg-sage-light/45 sm:inset-x-4"
              aria-hidden="true"
            />
            <div
              className="absolute -right-3 top-14 h-28 w-28 rounded-full border border-dashed border-rose/35 lg:-right-8"
              aria-hidden="true"
            />

            <div className="absolute inset-x-0 bottom-0 top-4 overflow-hidden rounded-[2.5rem] rounded-t-[13rem] border-[7px] border-cream-light bg-cream-dark shadow-lift sm:rounded-t-[15rem]">
              <img
                src="/images/hero-dog.jpg"
                alt="Golden retriever feliz, com o pelo limpo e bem cuidado"
                width="1400"
                height="1050"
                fetchpriority="high"
                decoding="async"
                className="h-full w-full object-cover object-[50%_36%]"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-graphite/30 via-graphite/0 to-graphite/0"
                aria-hidden="true"
              />
            </div>

            {/* selo flutuante */}
            <div className="absolute -left-1 top-8 flex items-center gap-2.5 rounded-2xl bg-cream-light/95 px-4 py-3 shadow-soft backdrop-blur-sm sm:-left-5 sm:top-14 sm:px-5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-rose text-cream">
                <Heart size={15} fill="currentColor" aria-hidden="true" />
              </span>
              <span className="text-left">
                <span className="block font-display text-[13px] leading-tight text-graphite">
                  Amor em cada detalhe
                </span>
                <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                  Nosso jeito de cuidar
                </span>
              </span>
            </div>

            {/* gato */}
            <div className="absolute -bottom-5 -left-2 h-24 w-24 overflow-hidden rounded-full border-[6px] border-cream-light shadow-lift sm:-bottom-7 sm:-left-6 sm:h-32 sm:w-32">
              <img
                src="/images/hero-cat.jpg"
                alt="Gato de pelagem branca e preta, também cliente da Studio Pet"
                width="1200"
                height="800"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-[50%_30%]"
              />
            </div>

            <div className="absolute -bottom-3 right-4 flex items-center gap-1.5 rounded-full bg-cream-light/95 py-2 pl-3 pr-4 shadow-soft sm:right-8">
              <PawMark className="h-3.5 w-3.5 text-rose" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-ink-soft">
                Cães &amp; gatos
              </span>
            </div>

            <Sparkle className="absolute -right-2 -top-2 h-7 w-7 text-rose/60 sm:-right-4 sm:-top-3 sm:h-9 sm:w-9" />
            <Sparkle className="absolute -left-4 top-1/2 h-4 w-4 text-sage-deep/50" />
            <HeartDoodle className="absolute -right-4 bottom-24 h-10 w-10 rotate-12 text-rose/35 sm:-right-8" />
            <PawMark className="absolute -right-1 top-4 h-6 w-6 rotate-[24deg] text-sage-deep/30 sm:right-2" />
            <Star
              size={16}
              className="absolute left-10 top-5 text-terracotta/50"
              aria-hidden="true"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
