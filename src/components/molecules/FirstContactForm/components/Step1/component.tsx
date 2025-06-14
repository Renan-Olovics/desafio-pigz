import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button, FormInput } from '@/components/atoms'
import { useFormStore } from '@/store/useFormStore'

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
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
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
          <FormInput
            flag
            name="phone"
            label="Telefone"
            type="phone"
            format="(##) #####-####"
            placeholder="(95) 99876-5432"
          />
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
