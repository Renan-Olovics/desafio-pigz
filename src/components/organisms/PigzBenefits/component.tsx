import { BenefitCard } from '@/components/molecules'
import { Icon, IconName } from '@/components/atoms'

const BENEFITS: { iconName: IconName; title: string; description: string }[] = [
  {
    iconName: 'store',
    title: 'Marketplace',
    description: 'Pra sua loja vender mais',
  },
  {
    iconName: 'smartphone',
    title: 'É fácil e rápido',
    description: 'Fazer um pedido no Pigz',
  },
  {
    iconName: 'grupo',
    title: 'Pigz Gestão',
    description: 'Você no controle, sempre',
  },
  {
    iconName: 'printer',
    title: 'Vias de impressão',
    description: 'Personalizáveis',
  },
]

export const PigzBenefits = () => {
  return (
    <div className="relative -top-[65px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Icon name="grupo3535" width={205} height={140} className="mx-auto" />

      {BENEFITS.map(({ description, iconName, title }) => (
        <BenefitCard
          key={title}
          iconName={iconName}
          title={title}
          description={description}
          className="mx-auto"
        />
      ))}
    </div>
  )
}
