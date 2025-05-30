import React from 'react'
import { Link } from 'react-router-dom'
import Text from '../../ui/Text/Text'
import { navList } from './definitions'
import { NavBarLinks, NavBarNav, NavListItem } from './Header.styled'

function DesktopTopHeader() {
  return (
    <NavBarLinks>
      <Link aria-label="Go to the homepage" title="Go to the homepage" href="/">
        <svg
          width="200"
          height="60"
          viewBox="0 0 200 60"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20,15 L30,45 L40,15 Z" fill="white" />
          <text
            x="50"
            y="40"
            fill="white"
            font-family="Helvetica, Arial, sans-serif"
            font-size="20"
            font-weight="normal"
            letter-spacing="1"
          >
            VITA K.
          </text>
        </svg>
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
