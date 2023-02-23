import { links } from '../constants'
import { NavClose } from '../NavClose'
import { Box } from '@chakra-ui/react'
import { useAppSelector } from '../../hooks/storeHooks'

export const Navbar = () => {
  const { isMenuOpen } = useAppSelector((state) => state.toggleMenu)

  return (
    <Box className={`Navbar ${isMenuOpen ? 'show-menu' : ''}`} as="nav">
      <Box className="Navbar__list" as="ul">
        {links.map((link) => {
          return (
            <li className="Navbar__item" key={link.key}>
              <a className="Navbar__link" href="#">
                {link.icon} {link.label}
              </a>
            </li>
          )
        })}
      </Box>
      <NavClose />
    </Box>
  )
}
