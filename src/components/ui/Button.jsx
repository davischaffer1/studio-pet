import { cx } from '../../lib/utils'

const variants = {
  primary:
    'bg-rose-action text-cream shadow-[0_16px_34px_-18px_rgba(176,69,111,0.9)] hover:bg-rose-deep hover:shadow-lift',
  secondary:
    'border border-rose-deep/25 bg-cream-light/70 text-rose-deep hover:border-rose-deep/45 hover:bg-rose-tint',
  sage: 'bg-sage-ink text-cream shadow-[0_16px_34px_-18px_rgba(95,107,87,0.8)] hover:bg-sage-darkest hover:shadow-lift',
  cream:
    'bg-cream text-rose-deep shadow-[0_18px_36px_-20px_rgba(23,16,22,0.5)] hover:bg-white',
  outlineLight:
    'border border-cream/45 bg-transparent text-cream hover:border-cream hover:bg-cream/10',
  ghost: 'text-rose-deep hover:bg-rose-tint',
}

const sizes = {
  sm: 'gap-2 px-4 py-2.5 text-[13px]',
  md: 'gap-2.5 px-6 py-3 text-sm',
  lg: 'gap-2.5 px-7 py-3.5 text-[15px]',
}

const iconSizes = { sm: 15, md: 17, lg: 18 }

export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconRight: IconRight,
  className,
  children,
  type = 'button',
  ...props
}) {
  const isExternal = typeof href === 'string' && /^https?:\/\//.test(href)

  const content = (
    <>
      {Icon ? (
        <Icon
          size={iconSizes[size]}
          strokeWidth={2.2}
          className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      ) : null}
      <span>{children}</span>
      {IconRight ? (
        <IconRight
          size={iconSizes[size]}
          strokeWidth={2.2}
          className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      ) : null}
    </>
  )

  const classes = cx(
    'group inline-flex items-center justify-center rounded-full font-bold leading-none transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2 focus-visible:ring-offset-cream active:translate-y-px',
    variants[variant],
    sizes[size],
    className,
  )

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {content}
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...props}>
      {content}
    </button>
  )
}
