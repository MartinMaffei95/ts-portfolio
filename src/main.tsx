import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import ModalState from './context/Modal/ModalState'
import './index.css'
import router from './pages/AppRoutes'
import { ChakraProvider } from '@chakra-ui/react'
import { I18nextProvider } from 'react-i18next'
import i18next, { InitOptions } from 'i18next'
import { enConfig } from './translations/en/global'
import { esConfig } from './translations/es/global'
import '/node_modules/flag-icons/css/flag-icons.min.css'
import { Language } from './interfaces'

const i18nConfig: InitOptions & {
  lng: Language
} = {
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    es: {
      global: esConfig,
    },
    en: {
      global: enConfig,
    },
  },
}

i18next.init(i18nConfig)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <ChakraProvider>
        <ModalState>
          <RouterProvider router={router} />
        </ModalState>
      </ChakraProvider>
    </I18nextProvider>
  </React.StrictMode>
)
