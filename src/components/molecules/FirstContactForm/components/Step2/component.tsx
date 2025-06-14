import { useEffect } from 'react'

import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { useSearchCity, useSearchAddress } from '@/services/tanstack'
import { Button, FormInput, FormSelect } from '@/components/atoms'
import { useFormStore } from '@/store'
import { STATES } from '@/constants'

const schema = z.object({
  postalCode: z
    .string({ required_error: 'CEP é obrigatório' })
    .min(8, 'CEP inválido')
    .transform((val) => val.replace(/[^0-9]/g, '')),
  state: z.string({ required_error: 'Estado é obrigatório' }),
  city: z.string({ required_error: 'Cidade é obrigatória' }),
  street: z.string({ required_error: 'Endereço é obrigatório' }),
  number: z.string({ required_error: 'Número é obrigatório' }),
  complement: z.string().optional(),
})

export type Step2FormData = z.infer<typeof schema>

type Props = {
  next: () => void
}

export const Step2 = ({ next }: Props) => {
  const { formData, setFormData } = useFormStore()

  const form = useForm<Step2FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      postalCode: formData.postalCode,
      state: formData.state,
      city: formData.city,
      street: formData.street,
      number: formData.number,
      complement: formData.complement,
    },
  })
  const selectedState = form.watch('state')
  const cep = form.watch('postalCode')

  const { data: cities = [] } = useSearchCity(selectedState)
  const { data: address } = useSearchAddress(cep?.replace(/[^0-9]/g, ''))

  useEffect(() => {
    if (address) {
      form.setValue('state', address.uf)
      form.setValue('city', address.localidade)
      form.setValue('street', address.logradouro)
    }
  }, [address, form])

  const onSubmit = (data: Step2FormData) => {
    setFormData(data)
    next()
  }

  return (
    <FormProvider {...form}>
      <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(onSubmit)}>
        <h1 className="text-[28px] font-semibold">Onde fica a sua loja?</h1>
        <FormInput name="postalCode" label="CEP" placeholder="00000-00" format="#####-###" />
        <section className="flex gap-4 w-full">
          <FormSelect
            className="w-28"
            name="state"
            label="Estado"
            options={STATES.map(({ abbreviation }) => ({
              label: abbreviation,
              value: abbreviation,
            }))}
          />
          <FormSelect
            className="flex-1 min-w-0"
            name="city"
            label="Cidade"
            disabled={!selectedState}
            options={cities.map((city) => ({ label: city.nome, value: city.nome }))}
          />
        </section>
        <FormInput name="street" label="Endereço" placeholder="Rua, Avenida, etc" />
        <section className="flex gap-4 w-full">
          <FormInput className="w-28" name="number" label="Número" placeholder="123" />
          <FormInput
            className="max-w-[208px] min-w-0"
            name="complement"
            label="Complemento"
            placeholder="Apto 123, Bloco B, etc"
          />
        </section>
        <Button variant="secondary" type="submit">
          Próximo
        </Button>
      </form>
    </FormProvider>
  )
}
