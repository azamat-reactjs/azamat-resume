import { useAppDispatch } from '../../hooks/storeHooks'
import { openMenu } from '../../store/slices/toggleMenu'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'

export const NavOpen = () => {
  const dispatch = useAppDispatch()

  const toggleMenu = () => {
    dispatch(openMenu(true))
  }

  return (
    <div className="NavOpen">
      <Button onClick={toggleMenu} fontSize="1rem" position="initial" size="sm">
        <HamburgerIcon />
      </Button>
    </div>
  )
}
