import { CloseIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'

export const NavClose = () => {
  return (
    <div className="NavClose">
      <Button fontSize="0.75rem" size="sm">
        <CloseIcon />
      </Button>
    </div>
  )
}
