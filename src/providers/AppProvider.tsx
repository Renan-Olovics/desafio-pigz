import { PropsWithChildren, useEffect } from 'react'

import { QueryProvider } from './QueryProvider'

export const AppProvider = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    console.log(`
  _____  _____  _____  ______
  |  __ |_   _|/ ____||___  /
  | |__) | | | | |  __    / /
  |  ___/  | | | | |_ |  / /
  | |     _| |_| |__| | / /__
  |_|    |_____|_____|/_____|

  Trabalhe conosco, veja as vagas em:
  https://jobs.quickin.io/pigz/jobs
    `)
  }, [])
  return <QueryProvider>{children}</QueryProvider>
}
