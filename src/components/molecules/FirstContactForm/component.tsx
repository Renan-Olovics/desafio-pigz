import { Button, FormInput } from '@/components/atoms'
import { FormProvider, useForm } from 'react-hook-form'

export const FirstContactForm = () => {
  const form = useForm()

  return (
    <FormProvider {...form}>
      <form className="flex mx-auto flex-col bg-white w-96 rounded-3xl pt-8 pb-6 px-6">
        <h1 className="text-[28px] font-semibold">Quero vender no Pigz</h1>
        <span className="text-[13px] pt-2 pb-6">Dê o primeiro passo para aumentar suas vendas</span>
        <section className="flex flex-col gap-5">
          <FormInput name="name" label="Nome" type="text" placeholder="Leonercio Goesfeeld" />
          <FormInput
            name="email"
            label="E-mail"
            type="email"
            placeholder="leonercio.goesfeeld@email.com"
          />
          <FormInput name="phone" label="Telefone" type="phone" placeholder="(95) 99876-5432" />
        </section>
        <span className="text-gray-600 text-[13px] leading-[21px] mb-10 mt-5">
          Ao continuar, aceito que a Pigz entre em contato comigo por telefone, e-mail ou WhatsApp.
        </span>
        <Button variant="secondary">Continuar</Button>
      </form>
    </FormProvider>
  )
}
