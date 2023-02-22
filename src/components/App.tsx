import { Heading, useColorMode } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export const App = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <div className="App">
      Lora
      <Heading>Roboto</Heading>
      <div>
        <Button
          onClick={toggleColorMode}
          pos="absolute"
          top="0"
          right="0"
          m="1rem"
        >
          {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
        </Button>
      </div>
    </div>
  )
}
