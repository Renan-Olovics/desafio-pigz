import { Button } from '@/components/atoms'

type Props = {
  title: string
  subtitle: string
  features: string[]
  price: string
  buttonText: string
}

const SellCard = ({ title, subtitle, features, price, buttonText }: Props) => {
  return (
    <div className="bg-gray-50 p-10 rounded-4xl mx-4">
      <h1 className="text-2xl font-bold text-black">{title}</h1>

      <p className="text-base font-medium text-gray-700 mb-6 mt-1">{subtitle}</p>

      <p className="text-sm font-normal text-black leading-8">
        {features.map((feature, index) => (
          <span key={index}>
            {feature}
            {index < features.length - 1 && <br />}
          </span>
        ))}
      </p>

      <p className="font-bold text-xl text-black text-center bg-white rounded-full px-6 py-3.5 mb-[34px] mt-[54px] w-fit">
        {price}
      </p>

      <Button variant="primary" className="w-full mx-auto h-14">
        {buttonText}
      </Button>
    </div>
  )
}

const pigzFeatures = [
  'Pigz Marketplace',
  'Página exclusiva',
  'Pigz Gestão Desktop e Mobile',
  'Gestão de entregadores',
  'Vias de impressão personalizáveis',
]

const paymentFeatures = [
  'Aceite Pix e Cartão de Crédito',
  'Antecipação Pix automática',
  'Não dependa de maquininha de cartão',
  'Segurança para receber pedidos',
  'Agilidade para entregar',
]
export const SellCards = () => {
  return (
    <div className="flex flex-col gap-5">
      <SellCard
        title="Pigz"
        subtitle="Tudo o que você precisa"
        features={pigzFeatures}
        price="R$199/mês"
        buttonText="Vender no Pigz agora"
      />
      <SellCard
        title="Pagamento On-line"
        subtitle="Segurança e agilidade"
        features={paymentFeatures}
        price="2,99% por transação"
        buttonText="Saiba mais"
      />
    </div>
  )
}
