import { create } from 'zustand'
import type { Step1FormData } from '@/components/molecules/FirstContactForm/components/Step1/component'
import type { Step2FormData } from '@/components/molecules/FirstContactForm/components/Step2/component'

type FormData = Step1FormData & Step2FormData

type FormStore = {
  formData: FormData
  setFormData: (data: Partial<FormData>) => void
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
}

export const useFormStore = create<FormStore>((set) => ({
  formData: initialFormData,
  setFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),
  resetFormData: () => set({ formData: initialFormData }),
}))
