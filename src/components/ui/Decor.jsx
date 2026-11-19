import { cx } from '../../lib/utils'

/** Pegada em silhueta, usada como elemento decorativo. */
export function PawMark({ className, style }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="currentColor"
      className={cx('block', className)}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <ellipse cx="10.5" cy="13" rx="3.4" ry="4.8" transform="rotate(-20 10.5 13)" />
      <ellipse cx="20" cy="9.5" rx="3.4" ry="5" />
      <ellipse cx="29.5" cy="13" rx="3.4" ry="4.8" transform="rotate(20 29.5 13)" />
      <path d="M20 31.5c-6.4 0-10.6-3.9-10.6-8.2 0-3.5 2.8-6.1 6.2-6.1 1.8 0 3.2.9 4.4 2 1.2-1.1 2.6-2 4.4-2 3.4 0 6.2 2.6 6.2 6.1 0 4.3-4.2 8.2-10.6 8.2Z" />
    </svg>
  )
}

/** Trilha de patinhas para fundos de seção. */
export function PawTrail({ className }) {
  return (
    <div className={cx('pointer-events-none select-none', className)} aria-hidden="true">
      <PawMark className="absolute left-[6%] top-[18%] h-9 w-9 -rotate-[18deg] opacity-[0.14]" />
      <PawMark className="absolute left-[12%] top-[34%] h-6 w-6 rotate-[14deg] opacity-[0.1]" />
      <PawMark className="absolute right-[8%] bottom-[16%] h-10 w-10 rotate-[18deg] opacity-[0.12]" />
      <PawMark className="absolute right-[16%] bottom-[30%] h-5 w-5 -rotate-[10deg] opacity-[0.1]" />
    </div>
  )
}

/** Forma orgânica suave, usada atrás de fotografias. */
export function OrganicBlob({ className }) {
  return (
    <svg
      viewBox="0 0 600 600"
      preserveAspectRatio="none"
      className={cx('pointer-events-none', className)}
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M301 23c88-11 187 43 232 126 45 83 27 190-45 252-72 62-197 84-281 28C93 373 60 258 104 173 148 88 213 34 301 23Z"
      />
    </svg>
  )
}

/** Estrelinha de quatro pontas. */
export function Sparkle({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cx('block', className)}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 2c1.4 5.9 4.1 8.6 10 10-5.9 1.4-8.6 4.1-10 10-1.4-5.9-4.1-8.6-10-10 5.9-1.4 8.6-4.1 10-10Z" />
    </svg>
  )
}

/** Coração desenhado à mão, em linha. */
export function HeartDoodle({ className }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cx('block', className)}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M24 40c-7.7-5.1-14.2-10-14.2-17.3 0-5.1 3.5-8.8 8.1-8.8 3 0 5 1.6 6.1 3.7 1.1-2.1 3.1-3.7 6.1-3.7 4.6 0 8.1 3.7 8.1 8.8C38.2 30 31.7 34.9 24 40Z" />
    </svg>
  )
}

/** Divisor orgânico entre áreas. */
export function CurvedDivider({ className }) {
  return (
    <svg
      viewBox="0 0 1440 70"
      preserveAspectRatio="none"
      className={cx('block w-full', className)}
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M0 38c138-31 276-42 414-28 138 13 276 45 414 43 138-1 276-32 414-42 66-5 132-3 198 3v56H0V38Z"
      />
    </svg>
  )
}
