import { BenefitCard } from '@/components/molecules'

import { Icon, IconName } from '@/components/atoms'

export const PigzBenefits = () => {
  const benefits: { iconName: IconName; title: string; description: string }[] = [
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

  return (
    <div className="relative -top-[65px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Icon name="grupo3535" width={205} height={140} className="mx-auto" />

      {benefits.map(({ description, iconName, title }) => (
        <BenefitCard
          key={title}
          iconName={iconName}
          title={title}
          description={description}
          className="mx-auto"
        />
      ))}
      <h2 className="mt-20 text-gray-800 text-3xl text-center leading-10 font-bold mx-auto max-w-[334px]">
        Tudo que você
        <wbr /> precisa por apenas
        <wbr /> R$199/mês
      </h2>
      <p className="text-gray-800 text-base text-center leading-6 font-normal max-w-72 mx-auto">
        Tenha todas as funcionalidades
        <wbr /> Pigz sem taxa de adesão, sem
        <wbr /> comissão por cada venda, sem
        <wbr /> letrinhas miúdas.
      </p>
    </div>
  )
}
