import { Icon } from '@/components/atoms'

export const Footer = () => {
  return (
    <>
      <div className="bg-gray-50 px-4 pb-6 pt-16">
        <Icon name="logo" width={80} />
        <p className="text-[11px] text-gray-800 font-normal mb-6 mt-2">Tudo que você precisa.</p>
        <p className="text-[16px] text-gray-500 font-semibold">Baixe o APP</p>
        <div className="flex gap-2.5 mt-4 mb-16">
          <a
            href="https://apps.apple.com/br/app/pigz/id1526557835"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon width={90} name="applePlay" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=app.pigz.mart&hl=pt_BR&gl=US"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon width={90} name="googlePlay" />
          </a>
        </div>
        <p className="text-[16px] text-gray-500 font-semibold">Pigz</p>
        <p className="ml-4 mt-6 text-[14px] text-gray-500">Sobre o Pigz</p>
        <p className="ml-4 my-6 text-[14px] text-gray-500">Portal do Parceiro</p>
        <p className="ml-4 mb-[65px] text-[14px] text-gray-500">Quero ser um Pigz Partner</p>
        <p className="flex">
          <Icon name="headphone" className="mr-[15px]" />
          Fale conosco
        </p>
        <a href="mailto:falecom@pigz.com.br" className="block text-[14px] mt-6 text-gray-500">
          falecom@pigz.com.br
        </a>
        <a
          href="https://wa.me/+559531983939"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-[14px] mt-6 text-gray-500"
        >
          (95) 3224-2603
        </a>
        <p className="text-[16px] mt-6 text-gray-500 font-semibold">Pigz nas redes</p>
        <div className="flex flex-row gap-[15px] mt-4 mb-[66px]">
          <a
            href="https://www.linkedin.com/company/pigz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="linkedin" />
          </a>
          <a href="https://www.instagram.com/pigzapp/" target="_blank" rel="noopener noreferrer">
            <Icon name="instagram" />
          </a>
          <a href="https://www.facebook.com/pigzapp" target="_blank" rel="noopener noreferrer">
            <Icon name="facebook" />
          </a>
          <a href="https://www.youtube.com/@pigzapp" target="_blank" rel="noopener noreferrer">
            <Icon name="youtube" />
          </a>
        </div>
        <div className="w-full h-[1px] bg-gray-400" />
        <div className="flex flex-row gap-[30px] mt-4 mb-6">
          <p className="text-[12px] text-gray-500 font-normal">Nossos termos</p>
          <p className="text-[12px] text-gray-500 font-normal">Privacidade</p>
          <p className="text-[12px] text-gray-500 font-normal">Ajuda</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[10px] text-gray-600">
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
