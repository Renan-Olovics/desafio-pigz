import { tv } from 'tailwind-variants'
import { PropsWithChildren, ComponentProps } from 'react'

type ButtonProps = {
  variant?: keyof typeof button.variants.variant
} & ComponentProps<'button'>

type LinkProps = {
  variant?: keyof typeof button.variants.variant
} & ComponentProps<'a'>

const button = tv({
  base: 'rounded-2xl py-1.5 px-6 font-medium h-12 flex items-center justify-center',
  variants: {
    variant: {
      primary:
        'text-white bg-[linear-gradient(258deg,var(--color-primary),var(--color-secondary))] shadow-[0_6px_10px_0_color-mix(in_srgb,var(--color-primary)_40%,transparent)]',
      secondary: 'bg-primary text-white text-base leading-[25px] font-medium',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export const Button = ({
  children,
  className,
  variant,
  ...rest
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button className={button({ className, variant })} {...rest}>
      {children}
    </button>
  )
}

export const Link = ({ children, className, variant, ...rest }: PropsWithChildren<LinkProps>) => {
  return (
    <a className={button({ className, variant })} {...rest}>
      {children}
    </a>
  )
}
