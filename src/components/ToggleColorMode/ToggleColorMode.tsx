import { Button, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div className="ToggleColorMode">
      <Button onClick={toggleColorMode} size="sm">
        {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
      </Button>
    </div>
  )
}
