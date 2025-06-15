import * as Icons from '@/assets'
import type { ImgHTMLAttributes } from 'react'

export type IconName = keyof typeof Icons

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  name: IconName
  size?: number
  width?: number
  height?: number
}

export const Icon = ({ name, size = 24, width, height, ...rest }: Props) => {
  const iconPath = Icons[name]

  if (!iconPath) {
    console.warn(`Icon "${name}" not found`)
    return null
  }

  return <img src={iconPath} alt={name} width={width ?? size} height={height ?? size} {...rest} />
}
