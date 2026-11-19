import { Sparkles } from 'lucide-react'
import { differentials } from '../data/differentials'
import Reveal from './ui/Reveal'
import { PawMark, Sparkle } from './ui/Decor'

const toneClasses = {
  rose: 'bg-rose-tint text-rose-deep',
  sage: 'bg-sage-tint text-sage-ink',
  peach: 'bg-peach-tint text-rose-deep',
  cream: 'bg-cream-dark/70 text-sage-ink',
}

export default function Differentials() {
  return (
    <section className="relative bg-cream pb-20 lg:pb-24">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-sage-tint px-6 py-10 sm:rounded-[2.75rem] sm:px-10 sm:py-12 lg:px-14">
          <PawMark className="absolute -bottom-8 -left-4 h-36 w-36 -rotate-12 text-sage/20" />
          <PawMark className="absolute -right-4 top-6 h-20 w-20 rotate-12 text-rose/10" />
          <Sparkle className="absolute right-7 top-8 h-5 w-5 text-rose/40" />

          <div className="relative grid gap-9 lg:grid-cols-[0.9fr_2.1fr] lg:items-center lg:gap-12">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-cream-light/70 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-sage-ink">
                <Sparkles size={13} aria-hidden="true" />
                Por que a Studio Pet
              </span>
              <h2 className="mt-4 max-w-[15ch] font-display text-[1.85rem] leading-[1.1] tracking-[-0.015em] text-graphite sm:text-[2.2rem]">
                Cuidado que faz a{' '}
                <span className="text-rose-deep">diferença</span>.
              </h2>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-soft">
                Sem pressa, sem estresse. Só o carinho e a atenção que o seu pet
                merece.
              </p>
            </div>

            <div className="grid gap-3.5 sm:grid-cols-2 sm:gap-4">
              {differentials.map((item, index) => {
                const Icon = item.icon
                return (
                  <Reveal
                    key={item.title}
                    delay={index * 70}
                    className="group rounded-[1.5rem] bg-cream-light/90 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-cream-light hover:shadow-card sm:p-6"
                  >
                    <span
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:-rotate-6 ${toneClasses[item.tone]}`}
                    >
                      <Icon size={20} strokeWidth={1.9} aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-display text-[17px] leading-tight text-graphite">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">
                      {item.description}
                    </p>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
