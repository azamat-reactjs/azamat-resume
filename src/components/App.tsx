import { useColorMode } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export const App = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <div className="App">
      <div>
        <Button
          onClick={toggleColorMode}
        >
          {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
        </Button>
      </div>
    </div>
  )
}
