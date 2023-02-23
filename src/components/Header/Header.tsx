import { Logo } from '../Logo'
import { Navbar } from '../Navbar'
import { ToggleColorMode } from '../ToggleColorMode'
import { NavOpen } from '../NavOpen'
import { Box, Container } from '@chakra-ui/react'

export const Header = () => {
  return (
    <Box className="Header" as="header">
      <Container maxW="container.xl">
        <Box className="Header__stack">
          <Logo />
          <Navbar />
          <Box className="Header__buttons">
            <ToggleColorMode />
            <NavOpen />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
