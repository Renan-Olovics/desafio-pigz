import { Header } from '@/components/molecules'
import { Banner, PigzBenefits, PigzCarrousel } from '@/components/organisms'

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
    </>
  )
}
