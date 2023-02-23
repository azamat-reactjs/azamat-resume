import { links } from '../constants'
import { NavClose } from '../NavClose'
import { Box } from '@chakra-ui/react'

export const Navbar = () => {
  return (
    <Box className="Navbar" as="nav">
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
