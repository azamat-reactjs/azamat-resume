import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true
}

const theme = {
  config,
  styles: {
    global: {
      html: {
        height: '100%',
        '-webkit-text-size-adjust': '100%',
        '-ms-text-size-adjust': '100%',
        '-ms-overflow-style': 'scrollbar',
        '-webkit-tap-highlight-color': 'rgba(0,0,0,0)'
      },
      body: {}
    }
  }
}

export default extendTheme(theme)
