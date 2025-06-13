import * as Icons from '@/assets'
import { ImgHTMLAttributes } from 'react'

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  name: keyof typeof Icons
  size?: number
  width?: number
  height?: number
  className?: string
}

export const Icon = ({ name, size = 24, width, height, className = '', ...rest }: Props) => {
  const iconPath = Icons[name]

  if (!iconPath) {
    console.warn(`Icon "${name}" not found`)
    return null
  }

  return (
    <img
      src={iconPath}
      alt={name}
      width={width ?? size}
      height={height ?? size}
      className={className}
      {...rest}
    />
  )
}
