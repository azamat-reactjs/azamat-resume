import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './components/App'
import './styles/scss/index.scss'

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './theme'
import { Fonts } from './components/Fonts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Fonts />
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
