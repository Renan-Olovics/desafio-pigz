import { FormInput } from '@/components/atoms'
import { FormProvider, useForm } from 'react-hook-form'

type Props = {
  next: () => void
}

export const Step2 = ({ next }: Props) => {
  const form = useForm()
  return (
    <FormProvider {...form}>
      <form className="flex flex-col">
        <h1 className="text-[28px] font-semibold">Onde fica a sua loja?</h1>
        <FormInput name="postalCode" label="CEP" placeholder="00000-00" format="#####-###" />
      </form>
    </FormProvider>
  )
}
