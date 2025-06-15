import { create } from 'zustand'

import type {
  Step1FormData,
  Step2FormData,
  Step3FormData,
} from '@/components/molecules/FirstContactForm/components'

type FormData = Step1FormData & Step2FormData & Step3FormData

type FormStore = {
  formData: FormData
  setFormData: (data: Partial<FormData>) => FormData
  resetFormData: () => void
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  postalCode: '',
  state: '',
  city: '',
  street: '',
  number: '',
  complement: '',
  shopName: '',
  shopCnpj: '',
  shopType: '',
}

export const useFormStore = create<FormStore>((set) => ({
  formData: initialFormData,
  setFormData: (data: Partial<FormData>): FormData => {
    const updatedFormData: FormData = { ...useFormStore.getState().formData, ...data }
    set({ formData: updatedFormData })
    return updatedFormData
  },
  resetFormData: () => set({ formData: initialFormData }),
}))
