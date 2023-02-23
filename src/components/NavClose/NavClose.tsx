import { useAppDispatch } from '../../hooks/storeHooks'
import { openMenu } from '../../store/slices/toggleMenu'
import { CloseIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'

export const NavClose = () => {
  const dispatch = useAppDispatch()

  const toggleMenu = () => {
    dispatch(openMenu(false))
  }

  return (
    <div className="NavClose">
      <Button onClick={toggleMenu} fontSize="0.75rem" size="sm">
        <CloseIcon />
      </Button>
    </div>
  )
}
