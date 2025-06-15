import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button, FormInput } from '@/components/atoms'
import { useFormStore } from '@/store'

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

export type Step1FormData = z.infer<typeof schema>

type Props = {
  next: () => void
}

export const Step1 = ({ next }: Props) => {
  const { formData, setFormData } = useFormStore()

  const form = useForm<Step1FormData>({
    resolver: zodResolver(schema),
    defaultValues: formData,
  })

  const onSubmit = (data: Step1FormData) => {
    setFormData(data)
    next()
  }

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col"
        aria-label="Formulário de cadastro"
        noValidate
      >
        <h1 className="text-[28px] font-semibold">Quero vender no Pigz</h1>
        <span className="text-[13px] pt-2 pb-6">Dê o primeiro passo para aumentar suas vendas</span>

        <section className="flex flex-col gap-5" aria-label="Informações pessoais">
          <FormInput
            name="name"
            label="Nome"
            type="text"
            placeholder="Leonercio Goesfeeld"
            required
            aria-label="Seu nome completo"
          />
          <FormInput
            name="email"
            label="E-mail"
            type="email"
            placeholder="leonercio.goesfeeld@email.com"
            required
            aria-label="Seu endereço de e-mail"
          />
          <FormInput
            flag
            name="phone"
            label="Telefone"
            type="phone"
            format="(##) #####-####"
            placeholder="(95) 99876-5432"
            required
            aria-label="Seu número de telefone"
          />
        </section>

        <div
          className="text-gray-600 text-[13px] leading-[21px] mb-10 mt-5"
          role="note"
          aria-label="Termos de uso"
        >
          Ao continuar, aceito que a Pigz entre em contato comigo por telefone, e-mail ou WhatsApp.
        </div>

        <Button variant="secondary" type="submit" aria-label="Continuar para próxima etapa">
          Continuar
        </Button>
      </form>
    </FormProvider>
  )
}
