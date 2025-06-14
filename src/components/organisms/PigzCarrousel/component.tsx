import { Carrousel, Icon, IconName } from '@/components/atoms'

type CardProps = {
  title: string
  description: string
  image: IconName
}

const ITEMS: CardProps[] = [
  {
    title: 'Pigz Marketplace',
    description:
      'Além de uma página exclusiva, com o Pigz Marketplace sua loja terá mais visibilidade, no app e no site. Uma vitrine com milhares de clientes todos os dias, pra vender muito mais.',
    image: 'phonePhoto',
  },
  {
    title: 'Pigz Gestão',
    description:
      'Acompanhe suas vendas em tempo real, no computador ou no celular, de onde estiver. Faça alterações de preços e disponibilidade de produtos rapidamente, como deve ser.',
    image: 'mobileLaptop',
  },
  {
    title: 'Gestão de entregadores',
    description:
      'A ferramenta ideal pra quem tem entrega própria. Controle de entregas por motoboy, geração de relatórios por entregas e por taxas de entrega, individualmente.',
    image: 'mobileMotorcycle',
  },
  {
    title: 'Pagamento on-line',
    description:
      'Segurança e agilidade para receber e entregar pedidos. Seus clientes pagam com Pix ou cartão de crédito pelo app, e o entregador nem precisa levar a maquininha de cartão.',
    image: 'creditCardOnHand',
  },
]

const Card = ({ title, description, image }: CardProps) => (
  <div className="w-[380px] self-center relative">
    <h1 className="text-center text-gray-800 text-2xl leading-[80px] font-semibold">{title}</h1>
    <div className="w-full h-[400px] bg-[linear-gradient(224deg,var(--color-primary),var(--color-secondary))] rounded-[60px]">
      <p className="text-white font-light text-[15px] leading-[21px] text-center max-w-[300px] mx-auto pt-10">
        {description}
      </p>
      <Icon name={image} width={380} className="bottom-0 absolute" />
    </div>
  </div>
)

export const PigzCarrousel = () => (
  <div className="w-[380px] mx-auto">
    <Carrousel
      items={ITEMS.map((props) => (
        <Card {...props} />
      ))}
    />
  </div>
)
