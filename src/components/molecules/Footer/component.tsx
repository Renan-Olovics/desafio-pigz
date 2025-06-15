import { Icon } from '@/components/atoms'

export const Footer = () => {
  return (
    <footer role="contentinfo">
      <div className="bg-gray-50 px-4 pb-6 pt-16">
        <Icon name="logo" width={80} aria-label="Pigz Logo" role="img" />
        <p className="text-[11px] text-gray-800 font-normal mb-6 mt-2">Tudo que você precisa.</p>

        <section aria-labelledby="app-download">
          <h2 id="app-download" className="text-[16px] text-gray-500 font-semibold">
            Baixe o APP
          </h2>
          <div
            className="flex gap-2.5 mt-4 mb-16"
            role="group"
            aria-label="Links para download do aplicativo"
          >
            <a
              href="https://apps.apple.com/br/app/pigz/id1526557835"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Baixar na App Store"
            >
              <Icon width={90} name="applePlay" aria-hidden="true" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=app.pigz.mart&hl=pt_BR&gl=US"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Baixar no Google Play"
            >
              <Icon width={90} name="googlePlay" aria-hidden="true" />
            </a>
          </div>
        </section>

        <nav aria-labelledby="pigz-links">
          <h2 id="pigz-links" className="text-[16px] text-gray-500 font-semibold">
            Pigz
          </h2>
          <ul className="list-none">
            <li>
              <a href="#" className="ml-4 mt-6 text-[14px] text-gray-500 block">
                Sobre o Pigz
              </a>
            </li>
            <li>
              <a href="#" className="ml-4 my-6 text-[14px] text-gray-500 block">
                Portal do Parceiro
              </a>
            </li>
            <li>
              <a href="#" className="ml-4 mb-[65px] text-[14px] text-gray-500 block">
                Quero ser um Pigz Partner
              </a>
            </li>
          </ul>
        </nav>

        <section aria-labelledby="contact">
          <h2 id="contact" className="flex items-center">
            <Icon name="headphone" className="mr-[15px]" aria-hidden="true" />
            Fale conosco
          </h2>
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
        </section>

        <section aria-labelledby="social-media">
          <h2 id="social-media" className="text-[16px] mt-6 text-gray-500 font-semibold">
            Pigz nas redes
          </h2>
          <div
            className="flex flex-row gap-[15px] mt-4 mb-[66px]"
            role="group"
            aria-label="Redes sociais"
          >
            <a
              href="https://www.linkedin.com/company/pigz/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn do Pigz"
            >
              <Icon name="linkedin" aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com/pigzapp/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram do Pigz"
            >
              <Icon name="instagram" aria-hidden="true" />
            </a>
            <a
              href="https://www.facebook.com/pigzapp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook do Pigz"
            >
              <Icon name="facebook" aria-hidden="true" />
            </a>
            <a
              href="https://www.youtube.com/@pigzapp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube do Pigz"
            >
              <Icon name="youtube" aria-hidden="true" />
            </a>
          </div>
        </section>

        <div className="w-full h-[1px] bg-gray-400" role="separator" />

        <nav aria-label="Links legais">
          <div className="flex flex-row gap-[30px] mt-4 mb-6">
            <a href="#" className="text-[12px] text-gray-500 font-normal">
              Nossos termos
            </a>
            <a href="#" className="text-[12px] text-gray-500 font-normal">
              Privacidade
            </a>
            <a href="#" className="text-[12px] text-gray-500 font-normal">
              Ajuda
            </a>
          </div>
        </nav>

        <div className="flex justify-between">
          <p className="text-[10px] text-gray-600">
            © Copyright 2021 • Pigz • Todos os direitos reservados <br /> Orange Labs Tecnologia
            LTDA. CNPJ 34.895.008/0001-85
          </p>
          <Icon name="orange" width={70} aria-label="Orange Labs Logo" role="img" />
        </div>
      </div>
      <div className="w-full h-[5px] bg-primary" role="presentation" />
    </footer>
  )
}
