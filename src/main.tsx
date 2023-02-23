import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './components/App'
import './styles/scss/index.scss'

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './theme'
import { Fonts } from './components/Fonts'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Fonts />
      <App />
    </ChakraProvider>
  </StrictMode>
)
