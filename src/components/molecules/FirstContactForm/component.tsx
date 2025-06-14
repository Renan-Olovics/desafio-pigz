import { Button, FormInput } from '@/components/atoms'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  name: z
    .string({ required_error: 'Nome é obrigatório' })
    .min(3, 'O nome deve ter pelo menos 3 caracteres'),
  email: z.string({ required_error: 'E-mail é obrigatório' }).email('E-mail inválido'),
  phone: z
    .string({ required_error: 'Telefone é obrigatório' })
    .transform((value) => value.replace(/[()\-_\s]/g, ''))
    .refine((value) => /^\d{10,11}$/.test(value), {
      message: 'Telefone inválido',
    }),
})

type ContactFormData = z.infer<typeof schema>

export const FirstContactForm = () => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: ContactFormData) => {
    console.log(data)
  }

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex mx-auto flex-col bg-white w-96 rounded-3xl pt-8 pb-6 px-6"
      >
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
        <Button variant="secondary" type="submit">
          Continuar
        </Button>
      </form>
    </FormProvider>
  )
}
