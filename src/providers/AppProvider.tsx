import { PropsWithChildren } from 'react'

import { QueryProvider } from './QueryProvider'

export const AppProvider = ({ children }: PropsWithChildren) => (
  <QueryProvider>{children}</QueryProvider>
)
