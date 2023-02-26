import './Header.scss'
import { links } from '../constants'
import { openMenu } from '../../store/slices/toggleMenu'
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks'
import { Button, useColorMode } from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Link as ScrollLink } from 'react-scroll'

export const Header = () => {
  const dispatch = useAppDispatch()
  const { isMenuOpen } = useAppSelector((state) => state.toggleMenu)
  const { colorMode, toggleColorMode } = useColorMode()

  const toggleMenu = (param: boolean) => {
    dispatch(openMenu(param))
  }

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a className="nav__logo" href="#home">
          Azamat
        </a>

        <div
          className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            {links.map((link) => {
              return (
                <li className="nav__item" key={link.key}>
                  <ScrollLink
                    to={`${link.key}`}
                    spy={true}
                    smooth={true}
                    offset={-20}
                    hashSpy={true}
                    href={`#${link.key}`}
                    activeClass="active"
                    className="nav__link"
                    onClick={() => toggleMenu(false)}
                  >
                    {link.icon} {link.label}
                  </ScrollLink>
                </li>
              )
            })}
          </ul>

          <Button
            className="nav__close"
            onClick={() => toggleMenu(false)}
            fontSize="0.75rem"
            size="sm"
            position="absolute"
          >
            <CloseIcon />
          </Button>
        </div>

        <div className="nav__buttons">
          <Button onClick={toggleColorMode} size="sm" position="initial" mr={2}>
            {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          </Button>
          <Button
            onClick={() => toggleMenu(true)}
            fontSize="1rem"
            position="initial"
            size="sm"
          >
            <HamburgerIcon />
          </Button>
        </div>
      </nav>
    </header>
  )
}
