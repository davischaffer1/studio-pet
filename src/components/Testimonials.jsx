import { ExternalLink, Quote, Star } from 'lucide-react'
import { reviewSummary, testimonials } from '../data/testimonials'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import Button from './ui/Button'
import { PawMark, Sparkle } from './ui/Decor'
import { cx } from '../lib/utils'

function Stars({ size = 14, className }) {
  return (
    <span
      className={cx('inline-flex items-center gap-0.5', className)}
      aria-hidden="true"
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={size}
          fill="currentColor"
          strokeWidth={0}
          className="text-rose-accent"
        />
      ))}
    </span>
  )
}

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
          eyebrow="Avaliações"
          title={
            <>
              Quem ama, <span className="text-rose-deep">recomenda!</span>
            </>
          }
          description="Avaliações reais de quem já confia na Studio Pet."
        />

        <Reveal delay={100} className="mt-7 flex justify-center">
          <div
            role="img"
            aria-label={`Nota ${reviewSummary.rating} de 5 — ${reviewSummary.count} avaliações no Google`}
            className="inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-full border border-rose-deep/10 bg-cream-light/80 px-5 py-2.5 shadow-card"
          >
            <span className="flex items-center gap-2">
              <span className="font-display text-lg leading-none text-graphite">
                {reviewSummary.rating}
              </span>
              <Stars size={14} />
            </span>
            <span
              className="hidden h-4 w-px bg-rose-deep/20 sm:block"
              aria-hidden="true"
            />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-ink-soft">
              {reviewSummary.count} avaliações no Google
            </span>
          </div>
        </Reveal>

        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={testimonial.author}
              delay={index * 90}
              className="group relative flex flex-col rounded-[1.75rem] bg-cream-light p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft sm:p-7"
            >
              <Quote
                size={30}
                className="text-rose/30 transition-colors duration-300 group-hover:text-rose/45"
                aria-hidden="true"
              />

              <Stars size={13} className="mt-3" />

              <blockquote className="mt-4 flex-1 text-[14px] leading-relaxed text-ink/80">
                {testimonial.quote}
              </blockquote>

              <div className="mt-6 flex items-center gap-3 border-t border-rose-deep/10 pt-5">
                <span
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-tint text-[11px] font-extrabold tracking-[0.06em] text-rose-deep"
                  aria-hidden="true"
                >
                  {testimonial.initials}
                </span>
                <span>
                  <span className="block text-[13px] font-extrabold leading-tight text-graphite">
                    {testimonial.author}
                  </span>
                  <span className="mt-0.5 block whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.08em] text-ink-soft lg:text-[10px] lg:tracking-[0.1em]">
                    {testimonial.detail}
                  </span>
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-10 flex justify-center">
          <Button
            href={reviewSummary.url}
            variant="secondary"
            size="sm"
            iconRight={ExternalLink}
            className="bg-cream-light/80"
          >
            Ver todas no Google
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
