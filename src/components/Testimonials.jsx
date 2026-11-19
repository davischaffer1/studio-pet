import { Info, MessageCircle, PawPrint, Quote } from 'lucide-react'
import { testimonials } from '../data/testimonials'
import { whatsappLink } from '../config/site'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import Button from './ui/Button'
import { PawMark, Sparkle } from './ui/Decor'

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="relative overflow-hidden bg-sage-tint py-20 lg:py-28"
    >
      <PawMark className="pointer-events-none absolute -right-8 -top-6 h-40 w-40 rotate-[18deg] text-sage/20" />
      <PawMark className="pointer-events-none absolute -left-4 bottom-10 h-24 w-24 -rotate-12 text-rose/10" />
      <Sparkle className="pointer-events-none absolute left-[12%] top-16 h-6 w-6 text-rose/30" />
      <Quote
        className="pointer-events-none absolute left-8 top-1/2 hidden h-24 w-24 text-rose/25 lg:block"
        strokeWidth={1}
        aria-hidden="true"
      />
      <Quote
        className="pointer-events-none absolute right-8 top-1/2 hidden h-24 w-24 rotate-180 text-rose/25 lg:block"
        strokeWidth={1}
        aria-hidden="true"
      />

      <div className="container-page relative">
        <SectionHeading
          eyebrow="Depoimentos"
          title={
            <>
              Quem ama, <span className="text-rose-deep">recomenda!</span>
            </>
          }
          description="Um espaço para o carinho de quem já confia na Studio Pet."
        />

        <Reveal delay={100} className="mt-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-rose-deep/10 bg-cream-light/70 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-ink-soft">
            <Info size={12} className="text-rose-deep" aria-hidden="true" />
            Conteúdo demonstrativo
          </span>
        </Reveal>

        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={testimonial.quote}
              delay={index * 90}
              className="group relative flex flex-col rounded-[1.75rem] bg-cream-light p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft sm:p-7"
            >
              {testimonial.isExample ? (
                <span className="absolute right-5 top-5 rounded-full bg-peach-tint px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.14em] text-rose-deep">
                  Exemplo
                </span>
              ) : null}

              <Quote
                size={30}
                className="text-rose/30 transition-colors duration-300 group-hover:text-rose/45"
                aria-hidden="true"
              />

              <blockquote className="mt-4 flex-1 text-[14px] leading-relaxed text-ink/80">
                {testimonial.quote}
              </blockquote>

              <div className="mt-6 flex items-center gap-3 border-t border-rose-deep/10 pt-5">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-tint text-rose-deep">
                  <PawPrint size={17} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-[13px] font-extrabold leading-tight text-graphite">
                    {testimonial.author}
                  </span>
                  <span className="mt-0.5 block text-[10px] font-bold uppercase tracking-[0.1em] text-ink-soft">
                    {testimonial.detail}
                  </span>
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={120}
          className="mt-9 flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:text-left"
        >
          <p className="max-w-md text-xs leading-relaxed text-ink-soft">
            Os depoimentos acima são ilustrativos. Este espaço está pronto para
            receber as avaliações reais dos seus clientes.
          </p>
          <Button
            href={whatsappLink(
              'Olá! Sou cliente da Studio Pet e gostaria de enviar minha avaliação.',
            )}
            variant="secondary"
            size="sm"
            icon={MessageCircle}
            className="shrink-0 bg-cream-light/70"
          >
            Enviar minha avaliação
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
