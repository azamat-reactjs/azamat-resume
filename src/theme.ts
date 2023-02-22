import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true
}

const theme = {
  config,
  styles: {
    global: {
      body: {
        margin: 0
      }
    }
  }
}

export default extendTheme(theme)
