import { Banner, PigzBenefits, PigzCarrousel } from '@/components/organisms'
import { Footer, Header, SellCards } from '@/components/molecules'
import { Icon } from '@/components/atoms'

export const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <PigzBenefits />
      <h2 className="mt-20 text-gray-800 text-3xl text-center leading-10 font-bold mx-auto max-w-[334px]">
        Tudo que você
        <wbr /> precisa por apenas
        <wbr /> R$199/mês
      </h2>
      <p className="text-gray-800 text-base text-center leading-6 font-normal max-w-72 mx-auto mb-9">
        Tenha todas as funcionalidades
        <wbr /> Pigz sem taxa de adesão, sem
        <wbr /> comissão por cada venda, sem
        <wbr /> letrinhas miúdas.
      </p>
      <PigzCarrousel />
      <h2 className="mt-20 text-gray-800 text-3xl text-center leading-10 font-bold mx-auto max-w-[300px] mb-[20px]">
        E mais: suporte
        <wbr /> que realmente
        <wbr /> funciona!
      </h2>
      <p className="text-gray-800 text-base text-center leading-6 font-normal max-w-72 mx-auto mb-9">
        Respostas automáticas e robôs? Aqui não. Nossa equipe está sempre disponível pra ajudar você
        e seus clientes.
      </p>
      <SellCards />
      <p className="mx-auto flex w-fit font-medium text-base text-gray-800 mb-14">
        Fale com a Pigz
        <Icon size={18} name="whatsapp" className="ml-[19px] mr-[7px]" />
        <span className="font-medium text-base text-gray-800">
          <span className="text-[13px]">95</span> 3224-2603
        </span>
      </p>
      <Footer />
    </>
  )
}
