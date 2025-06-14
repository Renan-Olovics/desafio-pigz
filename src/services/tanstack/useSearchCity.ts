import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

type City = {
  nome: string
}

export const useSearchCity = (state: string | undefined) => {
  return useQuery({
    queryKey: ['cities', state],
    queryFn: async () => {
      if (!state) return []
      const { data } = await axios.get<City[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`
      )
      return data
    },
    enabled: !!state,
  })
}
