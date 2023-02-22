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
        fontFamily: `'Roboto', sans-serif`,
        height: '100%',
        WebkitTextSizeAdjust: '100%',
        MsTextSizeAdjust: '100%',
        MsOverflowStyle: 'scrollbar',
        WebkitTapHighlightColor: 'rgba(0,0,0,0)',
        scrollBehavior: 'smooth'
      },
      body: {
        fontSize: 'var(--normal-font-size)',
        background: 'var(--body-color)',
        color: 'var(--text-color)'
      }
    }
  },
  fonts: {
    body: `'Roboto', sans-serif`,
    heading: `'Lora', serif`
  }
}

export default extendTheme(theme)
