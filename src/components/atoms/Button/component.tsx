import type { PropsWithChildren, ComponentProps } from 'react'

import { tv } from 'tailwind-variants'

type ButtonProps = {
  variant?: keyof typeof button.variants.variant
  ariaLabel?: string
  ariaDescribedBy?: string
  ariaExpanded?: boolean
  ariaControls?: string
  ariaPressed?: boolean
  role?: string
} & ComponentProps<'button'>

type LinkProps = {
  variant?: keyof typeof button.variants.variant
  ariaLabel?: string
  ariaDescribedBy?: string
  ariaExpanded?: boolean
  ariaControls?: string
  role?: string
} & ComponentProps<'a'>

const button = tv({
  base: 'rounded-2xl py-1.5 px-6 font-medium h-12 flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200',
  variants: {
    variant: {
      primary:
        'text-white bg-[linear-gradient(258deg,var(--color-primary),var(--color-secondary))] shadow-[0_6px_10px_0_color-mix(in_srgb,var(--color-primary)_40%,transparent)] hover:brightness-110 focus:brightness-110',
      secondary:
        'bg-primary text-white text-base leading-[25px] font-medium hover:bg-primary/90 focus:bg-primary/90',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed pointer-events-none',
    },
  },
  defaultVariants: {
    variant: 'primary',
    disabled: false,
  },
})

export const Button = ({
  children,
  className,
  variant,
  disabled,
  ariaLabel,
  ariaDescribedBy,
  ariaExpanded,
  ariaControls,
  ariaPressed,
  role = 'button',
  ...rest
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={button({ className, variant, disabled })}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      aria-pressed={ariaPressed}
      role={role}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      {...rest}
    >
      {children}
    </button>
  )
}

export const Link = ({
  children,
  className,
  variant,
  ariaLabel,
  ariaDescribedBy,
  ariaExpanded,
  ariaControls,
  role = 'link',
  ...rest
}: PropsWithChildren<LinkProps>) => {
  return (
    <a
      className={button({ className, variant })}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      role={role}
      tabIndex={0}
      {...rest}
    >
      {children}
    </a>
  )
}
