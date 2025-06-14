import { Icon } from '@/components/atoms'

export const Footer = () => {
  return (
    <>
      <div className="bg-[#FAFAFA] px-4 pb-6 pt-16">
        <Icon name="logo" width={80} />
        <p className="text-[11px] text-gray-800 font-normal mb-6 mt-2">Tudo que você precisa.</p>
        <p className="text-[16px] text-[#676767] font-semibold">Baixe o APP</p>
        <div className="flex gap-2.5 mt-4 mb-16">
          <Icon width={90} name="applePlay" />
          <Icon width={90} name="googlePlay" />
        </div>
        <p className="text-[16px] text-[#676767] font-semibold">Pigz</p>

        <p className="ml-4 mt-6 text-[14px] text-[#676767]">Sobre o Pigz</p>
        <p className="ml-4 my-6 text-[14px] text-[#676767]">Portal do Parceiro</p>
        <p className="ml-4 mb-[65px] text-[14px] text-[#676767]">Quero ser um Pigz Partner</p>

        <p className="flex">
          <Icon name="headphone" className="mr-[15px]" />
          Fale conosco
        </p>

        <p className="text-[14px] mt-6 text-[#676767]">falecom@pigz.com.br</p>
        <p className="text-[14px] mt-6 text-[#676767]">(95) 3224-2603</p>

        <p className="text-[16px] mt-6 text-[#676767] font-semibold">Pigz nas redes</p>
        <div className="flex flex-row gap-[15px] mt-4 mb-[66px]">
          <Icon name="linkedin" />
          <Icon name="instagram" />
          <Icon name="facebook" />
          <Icon name="youtube" />
        </div>
        <div className="w-full h-[1px] bg-[#9F9F9F]" />
        <div className="flex flex-row gap-[30px] mt-4 mb-6">
          <p className="text-[12px] text-[#676767] font-normal">Nossos termos</p>
          <p className="text-[12px] text-[#676767] font-normal">Privacidade</p>
          <p className="text-[12px] text-[#676767] font-normal">Ajuda</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[10px] text-[#575757]">
            © Copyright 2021 • Pigz • Todos os direitos reservados <br /> Orange Labs Tecnologia
            LTDA. CNPJ 34.895.008/0001-85
          </p>
          <Icon name="orange" width={70} />
        </div>
      </div>
      <div className="w-full h-[5px] bg-primary" />
    </>
  )
}
