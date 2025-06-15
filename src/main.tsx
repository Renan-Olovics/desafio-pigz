import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { Home } from '@/components/pages'
import { AppProvider } from '@/providers'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider>
      <Home />
      <ReactQueryDevtools initialIsOpen={false} />
    </AppProvider>
  </StrictMode>
)
