import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../../ui'
import { navList } from './definitions'
import { NavBarLinks, NavBarNav, NavListItem } from './Header.styled'

function DesktopTopHeader() {
  return (
    <NavBarLinks>
      <Link aria-label="Go to the homepage" title="Go to the homepage" href="/">
        <Logo />
      </Link>
      {navList.map(({ name, link }) => (
        <NavListItem key={name} as="a" href={link}>
          {name}
        </NavListItem>
      ))}
    </NavBarLinks>
  )
}

export default DesktopTopHeader
