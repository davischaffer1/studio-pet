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
      <span className="relative inline-flex">
        <svg
          viewBox="0 0 56 56"
          className="h-11 w-11 shrink-0 transition-transform duration-500 group-hover:-rotate-6 sm:h-12 sm:w-12"
          aria-hidden="true"
          focusable="false"
        >
          <circle cx="28" cy="28" r="27" fill="#F7E4EC" />
          <circle
            cx="28"
            cy="28"
            r="23.5"
            fill="none"
            stroke="#D673A0"
            strokeOpacity="0.22"
            strokeDasharray="2 5"
            strokeLinecap="round"
          />
          <g fill="#D673A0">
            <ellipse
              cx="17.5"
              cy="23"
              rx="4.6"
              ry="6.2"
              transform="rotate(-20 17.5 23)"
            />
            <ellipse cx="26" cy="19" rx="4.6" ry="6.4" />
            <ellipse
              cx="34.5"
              cy="23"
              rx="4.6"
              ry="6.2"
              transform="rotate(20 34.5 23)"
            />
            <path d="M26 41.5c-7.2 0-12-4.6-12-9.4 0-4 3.2-7 7.1-7 2 0 3.6 1 4.9 2.3 1.3-1.3 2.9-2.3 4.9-2.3 3.9 0 7.1 3 7.1 7 0 4.8-4.8 9.4-12 9.4Z" />
          </g>
          <path
            d="M43.5 12.8c-1.7-2-4.4-.9-4.4 1.3 0 1.9 2.7 3.3 4.4 4.5 1.7-1.2 4.4-2.6 4.4-4.5 0-2.2-2.7-3.3-4.4-1.3Z"
            fill="#7F8F74"
            stroke="#F3F1E3"
            strokeWidth="2"
          />
        </svg>
      </span>

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
