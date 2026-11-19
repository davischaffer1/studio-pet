import { cx } from '../../lib/utils'

export default function Logo({ className, href = '#inicio' }) {
  return (
    <a
      href={href}
      aria-label="Studio Pet — Estética Animal. Ir para o início"
      className={cx(
        'group inline-flex shrink-0 items-center gap-3 rounded-2xl transition-opacity duration-300 hover:opacity-90',
        className,
      )}
    >
      <img
        src="/brand/logo.png"
        alt=""
        width="320"
        height="320"
        className="h-11 w-11 shrink-0 rounded-[0.9rem] shadow-[0_10px_24px_-14px_rgba(153,85,101,0.65)] ring-1 ring-rose-deep/10 transition-transform duration-500 group-hover:-rotate-3 sm:h-12 sm:w-12 lg:h-[52px] lg:w-[52px]"
        aria-hidden="true"
        decoding="async"
      />

      <span className="flex min-w-0 flex-col">
        <span className="font-display text-[1.32rem] leading-none tracking-[-0.02em] sm:text-[1.42rem]">
          <span className="text-rose-deep">Studio</span>
          <span className="text-sage-deep"> Pet</span>
        </span>
        <span className="mt-1.5 flex items-center gap-1.5 text-[7.5px] font-extrabold uppercase tracking-[0.24em] text-ink-soft">
          <span className="h-px w-2.5 bg-rose/60" aria-hidden="true" />
          Estética animal
          <span className="h-px w-2.5 bg-rose/60" aria-hidden="true" />
        </span>
      </span>
    </a>
  )
}
