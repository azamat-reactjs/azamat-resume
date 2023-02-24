import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks'
import { openMenu } from '../../store/slices/toggleMenu'
import { links } from '../constants'
import { NavClose } from '../NavClose'
import { Box } from '@chakra-ui/react'

export const Navbar = () => {
  const dispatch = useAppDispatch()
  const { isMenuOpen } = useAppSelector((state) => state.toggleMenu)

  const closeNavbar = () => {
    dispatch(openMenu(!isMenuOpen))
  }

  return (
    <Box className={`Navbar ${isMenuOpen ? 'show-menu' : ''}`} as="nav">
      <Box className="Navbar__list" as="ul">
        {links.map((link) => {
          return (
            <li className="Navbar__item" key={link.key}>
              <a
                className="Navbar__link"
                href={`#${link.key}`}
                onClick={closeNavbar}
              >
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
