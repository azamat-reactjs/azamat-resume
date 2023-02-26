import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './components/App'
import './styles/scss/index.scss'

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './theme'
import { Fonts } from './components/Fonts'
import { Provider } from 'react-redux'
import { store } from './store'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Fonts />
        <App />
      </ChakraProvider>
    </Provider>
  </StrictMode>
)
