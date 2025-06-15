import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button, FormInput, FormSelect } from '@/components/atoms'
import { useFormStore } from '@/store'

const schema = z.object({
  shopName: z.string({ required_error: 'Nome da loja é obrigatório' }),
  shopCnpj: z
    .string({ required_error: 'CNPJ da loja é obrigatório' })
    .min(14, 'CNPJ inválido')
    .transform((val) => val.replace(/[^0-9]/g, '')),
  shopType: z.string({ required_error: 'Tipo de loja é obrigatório' }),
})

export type Step3FormData = z.infer<typeof schema>

export const Step3 = () => {
  const { formData, setFormData } = useFormStore()

  const form = useForm<Step3FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      shopName: formData.shopName,
      shopCnpj: formData.shopCnpj,
      shopType: formData.shopType,
    },
  })

  const onSubmit = (data: Step3FormData) => {
    const updatedValues = setFormData(data)
    console.log(updatedValues)
  }

  return (
    <FormProvider {...form}>
      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
        aria-label="Formulário de informações da loja"
        noValidate
      >
        <h1 className="text-[28px] font-semibold">Me conta um pouco sobre a sua loja</h1>

        <section className="flex flex-col gap-4" aria-label="Informações da loja">
          <FormInput
            name="shopName"
            label="Nome da loja"
            placeholder="Restaurante Todo Mundo Gosta"
            required
            aria-label="Nome da sua loja"
          />
          <FormInput
            name="shopCnpj"
            label="CNPJ da loja"
            placeholder="00.000.000/0000-00"
            format="##.###.###/####-##"
            required
            aria-label="CNPJ da sua loja"
          />
          <FormSelect
            name="shopType"
            label="Tipo de loja"
            options={[
              { label: 'Restaurante', value: 'restaurant' },
              { label: 'Padaria', value: 'bakery' },
              { label: 'Outro', value: 'other' },
            ]}
            required
            aria-label="Tipo da sua loja"
          />
        </section>

        <Button variant="secondary" type="submit" aria-label="Concluir cadastro">
          Concluir
        </Button>
      </form>
    </FormProvider>
  )
}
