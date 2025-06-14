import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

type Address = {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
  ibge: string
  gia: string
  ddd: string
  siafi: string
}

export const useSearchAddress = (cep: string | undefined) => {
  return useQuery({
    queryKey: ['address', cep],
    queryFn: async () => {
      if (!cep || cep.length < 8) return null
      const { data } = await axios.get<Address>(`https://viacep.com.br/ws/${cep}/json/`)
      return data
    },
    enabled: !!cep && cep.length === 8,
  })
}
