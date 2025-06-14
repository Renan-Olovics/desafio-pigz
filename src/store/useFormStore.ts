import { create } from 'zustand'

type FormData = {
  name: string
  email: string
  phone: string
}

type FormStore = {
  formData: FormData
  setFormData: (data: Partial<FormData>) => void
  resetFormData: () => void
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
}

export const useFormStore = create<FormStore>((set) => ({
  formData: initialFormData,
  setFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),
  resetFormData: () => set({ formData: initialFormData }),
}))
