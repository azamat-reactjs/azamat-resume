import { useState } from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'

export const NavOpen = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState)
  }

  return (
    <div className="NavOpen">
      <Button
        onClick={toggleMenu}
        fontSize="1.25rem"
        position="initial"
        size="sm"
      >
        <HamburgerIcon />
      </Button>
    </div>
  )
}
