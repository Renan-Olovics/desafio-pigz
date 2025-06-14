import { Icon, type IconName } from '@/components/atoms'
import type { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

const benefitCard = tv({
  base: 'bg-gray-50 rounded-[20px] w-[270px] h-[243px] flex flex-col items-center text-center py-10 border-2 border-transparent hover:border-gray-300',
})

type Props = ComponentProps<'div'> & {
  iconName: IconName
  title: string
  description: string
}

export const BenefitCard = ({ iconName, title, description, className, ...props }: Props) => {
  return (
    <div {...props} className={benefitCard({ className })}>
      <Icon name={iconName} size={72} className="mb-8" />
      <h2 className="text-gray-800 font-semibold text-xl mb-2">{title}</h2>
      <p className="text-gray-800 font-normal text-base leading-[26px]">{description}</p>
    </div>
  )
}
