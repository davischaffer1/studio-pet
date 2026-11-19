import { PawPrint } from 'lucide-react'
import { cx } from '../../lib/utils'
import Reveal from './Reveal'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'dark',
  className,
  titleClassName,
}) {
  const isLight = tone === 'light'

  return (
    <Reveal
      className={cx(
        align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl',
        className,
      )}
    >
      {eyebrow ? (
        <span
          className={cx(
            'inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.2em]',
            isLight
              ? 'bg-cream/15 text-cream'
              : 'bg-rose-tint/90 text-rose-deep',
          )}
        >
          <PawPrint size={13} strokeWidth={2.4} aria-hidden="true" />
          {eyebrow}
        </span>
      ) : null}

      <h2
        className={cx(
          'mt-5 font-display text-[2rem] leading-[1.08] tracking-[-0.015em] sm:text-[2.5rem] lg:text-[2.9rem]',
          isLight ? 'text-cream' : 'text-graphite',
          titleClassName,
        )}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={cx(
            'mt-4 text-[15px] leading-relaxed sm:text-base',
            align === 'center' && 'mx-auto max-w-xl',
            isLight ? 'text-cream/80' : 'text-ink-soft',
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
