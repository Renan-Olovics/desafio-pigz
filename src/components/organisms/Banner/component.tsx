import { Icon } from '@/components/atoms'
import { FirstContactForm } from '@/components/molecules'

export const Banner = () => {
  return (
    <div className="bg-[linear-gradient(158deg,var(--color-primary),var(--color-secondary))] relative">
      <h1 className="font-bold text-white text-[40px] max-w-[340px] leading-12 pt-8 pl-4">
        Pigz: tudo que
        <wbr /> você precisa
        <wbr /> pra vender
        <wbr /> ainda mais!
      </h1>
      <Icon name="burguer" width={250} height={250} className="absolute top-0 -right-22" />
      <p className="text-white leading-6 bg-transparent pl-4 mt-5 mb-10">
        Temos uma equipe ansiosa para cadastrar
        <wbr /> seus produtos no Pigz Marketplace e deixar
        <wbr /> sua loja prontinha para iniciar as vendas.
      </p>
      <FirstContactForm />
      <Icon name="grupo3535" width={205} height={140} className="mx-auto" />
    </div>
  )
}
