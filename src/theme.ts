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
        fontFamily: `'Lora', serif`,
        height: '100%',
        WebkitTextSizeAdjust: '100%',
        MsTextSizeAdjust: '100%',
        MsOverflowStyle: 'scrollbar',
        WebkitTapHighlightColor: 'rgba(0,0,0,0)'
      },
      body: {}
    }
  },
  fonts: {
    body: `'Lora', serif`
  }
}

export default extendTheme(theme)
