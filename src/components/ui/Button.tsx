import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { IconArrowUpRight } from '../icons'

type Variant = 'primary' | 'secondary' | 'outline' | 'light'

const variantClasses: Record<Variant, { root: string; badge: string; icon: string }> = {
  primary: {
    root: 'bg-apricot text-ink',
    badge: 'bg-white',
    icon: 'text-green',
  },
  secondary: {
    root: 'border border-border bg-white text-ink',
    badge: 'bg-peach',
    icon: 'text-green',
  },
  outline: {
    root: 'border border-white/85 bg-transparent text-white',
    badge: 'bg-white',
    icon: 'text-ink',
  },
  light: {
    root: 'bg-white text-ink',
    badge: 'bg-apricot',
    icon: 'text-ink',
  },
}

interface ButtonProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  children: ReactNode
  variant?: Variant
  /** Internal route (client-side navigation via react-router) */
  to?: string
  /** External or protocol link (tel:, sms:, mailto:, https:) */
  href?: string
}

export function Button({ children, variant = 'primary', to, href, className = '', ...rest }: ButtonProps) {
  const styles = variantClasses[variant]
  const classes = `group inline-flex w-fit items-center gap-3.5 rounded-full py-[7px] pl-6 pr-2 text-[15px] font-medium tracking-[-0.01em] transition-opacity hover:opacity-85 ${styles.root} ${className}`

  const content = (
    <>
      <span className="whitespace-nowrap">{children}</span>
      <span
        className={`flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-45 ${styles.badge}`}
      >
        <IconArrowUpRight className={`h-4 w-4 ${styles.icon}`} strokeWidth={2} />
      </span>
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }

  return (
    <a href={href} className={classes} {...rest}>
      {content}
    </a>
  )
}
